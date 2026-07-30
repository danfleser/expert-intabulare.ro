#!/usr/bin/env node
'use strict';
// expert-intabulare.ro SEO expansion — page generator.
// Usage:
//   node generator/build.js            build docs/ from generator/data/ (tolerates missing shards)
//   node generator/build.js --sample   render one page of each type from stub data into generator/sample-out/
//
// Zero dependencies. Deterministic output: same data → byte-identical pages
// (only lastmod comes from site.json "buildDate", never from the clock).

const fs = require('fs');
const path = require('path');
const {
  readJsonSafe, loadShardDir, slugifyRo, approxRoadKm, writeFileDeep,
} = require('./lib/util');
const gates = require('./lib/gates');
const pages = require('./lib/pages');
const { buildSitemaps } = require('./lib/sitemap');

const GENERATOR_DIR = __dirname;
const REPO_DIR = path.dirname(GENERATOR_DIR);
const DOCS_DIR = path.join(REPO_DIR, 'docs');
// GEN_DATA_DIR: internal testing hook — point the build at an alternative data directory
const DATA_DIR = process.env.GEN_DATA_DIR || path.join(GENERATOR_DIR, 'data');
const MANIFEST_FILE = path.join(GENERATOR_DIR, 'manifest.json');
const REPORT_FILE = path.join(GENERATOR_DIR, 'build-report.txt');

// The generator may only ever create/delete files it listed in its own manifest,
// and never any of these (the live hand-maintained site):
const PROTECTED = new Set(['index.html', 'CNAME', '.nojekyll', 'privacy-policy.html', 'terms-and-conditions.html', 'style.css', '.DS_Store']);
const PROTECTED_DIRS = ['css/', 'js/', 'img/'];
function isProtected(rel) {
  const r = rel.replace(/^\//, '');
  return PROTECTED.has(r) || PROTECTED_DIRS.some((d) => r.startsWith(d));
}

function main() {
  const sample = process.argv.includes('--sample');
  const problems = [];   // missing/unparsable shards (tolerated)
  const errors = [];     // contract violations (build exits non-zero)
  const warnings = [];

  // ---------- load data ----------
  const site = readJsonSafe(path.join(DATA_DIR, 'site.json'), problems);
  if (!site) {
    console.error('FATAL: generator/data/site.json is required.');
    process.exit(1);
  }

  let data;
  if (sample) {
    data = require('./lib/sample-data')();
    console.log('SAMPLE MODE — rendering stub data into generator/sample-out/');
  } else {
    data = {
      localities: loadShardDir(path.join(DATA_DIR, 'localities'), problems),
      counties: readJsonSafe(path.join(DATA_DIR, 'counties.json'), problems) || [],
      services: readJsonSafe(path.join(DATA_DIR, 'services.json'), problems) || [],
      guides: loadShardDir(path.join(DATA_DIR, 'guides'), problems),
      fonduri: loadShardDir(path.join(DATA_DIR, 'verticals-fonduri'), problems),
      solar: loadShardDir(path.join(DATA_DIR, 'verticals-solar'), problems),
      agricol: loadShardDir(path.join(DATA_DIR, 'verticals-agricol'), problems),
      dictionary: loadShardDir(path.join(DATA_DIR, 'dictionary'), problems),
      english: loadShardDir(path.join(DATA_DIR, 'english'), problems),
      hreflang: readJsonSafe(path.join(DATA_DIR, 'hreflang.json'), problems) || [],
    };
  }

  // ---------- normalize ----------
  const counties = Array.isArray(data.counties) ? data.counties : Object.values(data.counties);
  const countiesBySlug = new Map(counties.map((c) => [c.slug, c]));

  const localities = (data.localities || []).map((l) => ({
    ...l,
    slug: l.slug || slugifyRo(l.name),
    countySlug: l.countySlug || slugifyRo(l.county || ''),
    matrix: l.matrix || 'full',
  }));
  localities.sort((a, b) => (a.countySlug + a.slug).localeCompare(b.countySlug + b.slug));

  const services = (data.services || []).map((s) => ({ ...s, slug: s.slug || slugifyRo(s.name) }));
  const servicesBySlug = new Map(services.map((s) => [s.slug, s]));

  // Known service labels for nav/dictionary CTAs: services.json wins, site.json nav is the fallback.
  const servicesNavBySlug = new Map();
  for (const n of site.nav.services) servicesNavBySlug.set(n.slug, { slug: n.slug, label: n.label });
  for (const s of services) servicesNavBySlug.set(s.slug, { slug: s.slug, label: s.name });

  // nearby map: explicit slugs win; otherwise nearest by coordinates (any county)
  const locByKey = new Map(localities.map((l) => [l.countySlug + '/' + l.slug, l]));
  const nearbyOf = new Map();
  for (const l of localities) {
    let list = [];
    if (Array.isArray(l.nearby) && l.nearby.length) {
      for (const slug of l.nearby) {
        const hit = locByKey.get(l.countySlug + '/' + slug) || localities.find((x) => x.slug === slug);
        if (!hit) { warnings.push(`locality ${l.slug}: unknown nearby slug "${slug}"`); continue; }
        const km = (Number.isFinite(l.lat) && Number.isFinite(hit.lat))
          ? approxRoadKm(l.lat, l.lon, hit.lat, hit.lon) : null;
        list.push({ slug: hit.slug, countySlug: hit.countySlug, name: hit.name, km });
      }
    } else if (Number.isFinite(l.lat) && Number.isFinite(l.lon)) {
      list = localities
        .filter((x) => x !== l && Number.isFinite(x.lat) && Number.isFinite(x.lon))
        .map((x) => ({ slug: x.slug, countySlug: x.countySlug, name: x.name, km: approxRoadKm(l.lat, l.lon, x.lat, x.lon) }))
        .sort((a, b) => a.km - b.km || a.slug.localeCompare(b.slug))
        .slice(0, 8);
    }
    nearbyOf.set(l.slug + '|' + l.countySlug, list);
  }

  // english pages
  const english = (data.english || []).filter((e) => {
    if (!e.path || !e.path.startsWith('/en/') || !e.path.endsWith('.html')) {
      warnings.push(`english entry with bad path "${e.path}" — skipped`);
      return false;
    }
    return true;
  });
  english.sort((a, b) => a.path.localeCompare(b.path));
  const enByPath = new Map(english.map((e) => [e.path, e]));

  // hreflang map (ro path → en path), from hreflang.json + roPair/enPair fields.
  // Accepts relative paths or absolute URLs, and either [{ro,en}] / {roPath:enPath}
  // or G8's authored shape {pairs:[{roUrl,enUrl}]}.
  const norm = (p) => {
    if (typeof p !== 'string' || !p) return null;
    let out = p.replace(/^https?:\/\/[^/]+/, '');
    if (out === '') out = '/';
    return out.replace(/\/index\.html$/, '/');
  };
  const hreflangRoToEn = new Map();
  const hreflangRaw = data.hreflang || [];
  const hreflangPairs = Array.isArray(hreflangRaw)
    ? hreflangRaw
    : Array.isArray(hreflangRaw.pairs)
      ? hreflangRaw.pairs
      : Object.entries(hreflangRaw).map(([ro, en]) => ({ ro, en }));
  for (const p of hreflangPairs) {
    if (!p || typeof p !== 'object') continue;
    const ro = norm(p.ro || p.roUrl);
    const en = norm(p.en || p.enUrl);
    if (ro && en) hreflangRoToEn.set(ro, en);
  }
  for (const e of english) if (e.roPair) hreflangRoToEn.set(norm(e.roPair), norm(e.path));
  for (const list of [data.guides || [], data.fonduri || [], data.solar || [], data.agricol || []]) {
    for (const entry of list) {
      if (entry.enPair) {
        const base = list === data.guides ? '/ghid' : list === data.fonduri ? '/fonduri-europene' : list === data.solar ? '/parcuri-fotovoltaice' : '/teren-agricol';
        hreflangRoToEn.set(`${base}/${entry.slug}.html`, norm(entry.enPair));
      }
    }
  }

  // dictionary contract gate (spec §3.2: these are build FAILURES, not demotions)
  const dictionary = data.dictionary || [];
  const dictSlugs = new Set();
  for (const t of dictionary) {
    if (!t.slug) { errors.push(`dictionary term "${t.term}": missing slug`); continue; }
    if (dictSlugs.has(t.slug)) errors.push(`dictionary: duplicate slug "${t.slug}"`);
    dictSlugs.add(t.slug);
    const words = String(t.definition || '').split(/\s+/).filter(Boolean).length;
    if (words < 100) errors.push(`dictionary "${t.slug}": definition ${words} words < 100`);
    if (words > 220) warnings.push(`dictionary "${t.slug}": definition ${words} words (target 100–200)`);
    if (!t.ctaService) errors.push(`dictionary "${t.slug}": ctaService is required`);
    else if (!servicesNavBySlug.has(t.ctaService)) errors.push(`dictionary "${t.slug}": unknown ctaService "${t.ctaService}"`);
  }

  const ctx = {
    site, services, servicesBySlug, servicesNavBySlug,
    localities, countiesBySlug, nearbyOf,
    hreflangRoToEn, enByPath,
    enPagesForFooter: english.filter((e) => e.footer !== false),
    warnings,
  };

  // ---------- data gate → candidate emission set ----------
  const demotedData = [];   // {key, missing}
  const emitted = new Set(); // "serviceSlug/countySlug/locSlug"
  for (const s of services) {
    if (s.hubOnly === true) continue; // 4 hub-only services never get locality pages
    for (const l of localities) {
      if (l.matrix === 'hub-only') continue;
      if (l.matrix === 'reduced' && s.tier2Available !== true) continue;
      const county = countiesBySlug.get(l.countySlug);
      const g = gates.dataGate(l, county, s);
      const key = `${s.slug}/${l.countySlug}/${l.slug}`;
      if (g.pass) emitted.add(key);
      else demotedData.push({ key, missing: g.missing });
    }
  }

  // ---------- service × county hubs: the routing parent of every leaf ----------
  // `ls docs/servicii/*/*/index.html` returned ZERO before this: there was no
  // service×county node anywhere on the site, so every leaf's breadcrumb had to
  // jump to the service-AGNOSTIC /zone/<county>/ hub, which made
  // intabulare-apartament/alba/alba-iulia and cadastru-si-intabulare/alba/noslac
  // siblings under one node (PLAN-rank-first.md §1.0).
  //
  // Built from the DATA-gate candidate set, i.e. before the render-gate fixpoint,
  // for two reasons: pages.js needs the set while it renders leaf breadcrumbs, and
  // the invariant must be one-directional. Render-gate demotions only shrink a
  // hub's locality lists; they can never remove a hub that a surviving leaf's
  // breadcrumb points at.
  const serviceCountyHubs = new Set(); // "<serviceSlug>/<countySlug>"
  const countyHasLeaves = new Set();
  for (const key of emitted) {
    const [sSlug, cSlug] = key.split('/');
    countyHasLeaves.add(`${sSlug}/${cSlug}`);
  }
  for (const s of services) {
    for (const c of counties) {
      // Ship a hub where the service has locality inventory in that county, plus
      // Alba for the four hubOnly services: they have no inventory anywhere, and
      // Alba is the county the business actually sits in, so this is their only
      // county-level surface. A hubOnly service in a neighbouring county would be
      // a page with no locality content at all — not shipped.
      const has = countyHasLeaves.has(`${s.slug}/${c.slug}`);
      if (has || (c.slug === 'alba' && s.hubOnly === true)) serviceCountyHubs.add(`${s.slug}/${c.slug}`);
    }
  }
  ctx.serviceCountyHubs = serviceCountyHubs;

  // ---------- render gate (fixpoint: demotions update cross-links) ----------
  const demotedRender = []; // {key, reasons}
  let localityPages = [];
  for (let iter = 0; iter < 12; iter++) {
    localityPages = [];
    for (const s of services) {
      if (s.hubOnly === true) continue;
      for (const l of localities) {
        const key = `${s.slug}/${l.countySlug}/${l.slug}`;
        if (!emitted.has(key)) continue;
        localityPages.push({ key, service: s, loc: l, page: pages.buildServiceLocality(ctx, s, l, emitted) });
      }
    }
    const newlyDemoted = [];
    for (const s of services) {
      const group = localityPages.filter((p) => p.service.slug === s.slug).map((p) => ({ key: p.key, html: p.page.html }));
      if (!group.length) continue;
      const results = gates.renderGate(group);
      for (const [key, r] of results) {
        if (!r.pass) newlyDemoted.push({ key, reasons: r.reasons });
      }
    }
    if (!newlyDemoted.length) break;
    for (const d of newlyDemoted) { emitted.delete(d.key); demotedRender.push(d); }
  }

  // ---------- assemble all pages ----------
  const allPages = [];
  for (const p of localityPages) if (emitted.has(p.key)) allPages.push(p.page);

  for (const s of services) allPages.push(pages.buildServiceHub(ctx, s, emitted));

  for (const s of services) {
    for (const c of counties) {
      if (!serviceCountyHubs.has(`${s.slug}/${c.slug}`)) continue;
      allPages.push(pages.buildServiceCountyHub(ctx, s, c, emitted));
    }
  }

  for (const c of counties) allPages.push(pages.buildCountyHub(ctx, c, emitted));

  const guides = data.guides || [];
  for (const g of guides) allPages.push(pages.buildAuthoredPage(ctx, 'ghid', g, guides));
  if (guides.length) allPages.push(pages.buildGuideHub(ctx, guides));

  for (const [kind, list] of [['fonduri', data.fonduri || []], ['solar', data.solar || []], ['agricol', data.agricol || []]]) {
    const pageEntries = list.filter((e) => e.slug !== 'index' && e.slug !== '_hub');
    for (const e of pageEntries) allPages.push(pages.buildAuthoredPage(ctx, kind, e, pageEntries));
    // agricol hub is always emitted: site chrome links /teren-agricol/ from every page,
    // so the hub must exist even while the data dir is still being authored.
    if (list.length || kind === 'agricol') allPages.push(pages.buildVerticalHub(ctx, kind, list));
  }

  if (dictionary.length) {
    const termsBySlug = new Map(dictionary.map((t) => [t.slug, t]));
    for (const t of dictionary) if (t.slug) allPages.push(pages.buildDictTerm(ctx, t, termsBySlug));
    allPages.push(pages.buildDictIndex(ctx, dictionary));
  }

  for (const e of english) allPages.push(pages.buildEnPage(ctx, e));

  allPages.sort((a, b) => a.path.localeCompare(b.path));

  // duplicate path check
  const seen = new Set();
  for (const p of allPages) {
    if (seen.has(p.path)) errors.push(`duplicate output path: ${p.path}`);
    seen.add(p.path);
    if (isProtected(p.path)) errors.push(`page path collides with protected file: ${p.path}`);
  }

  // hub size gate
  for (const p of allPages) {
    const g = gates.sizeGate(p.html, p.path.endsWith('/index.html'));
    if (!g.pass) errors.push(`size budget exceeded: ${p.path} ${g.bytes}B > ${g.limit}B`);
  }

  // ---------- sitemaps + robots ----------
  const sections = { core: ['/', '/privacy-policy.html', '/terms-and-conditions.html'], serviciiAlba: [], serviciiVecini: [], ghid: [], verticale: [], agricol: [], dictionar: [], en: [] };
  for (const p of allPages) {
    const url = pages.urlPath(p.path);
    if (!sections[p.section]) { warnings.push(`page ${p.path}: unknown sitemap section "${p.section}"`); continue; }
    sections[p.section].push(url);
  }
  const sitemapFiles = buildSitemaps(site, sections);

  // ---------- write ----------
  const outDir = sample ? path.join(GENERATOR_DIR, 'sample-out') : DOCS_DIR;
  const newFiles = [];
  for (const p of allPages) newFiles.push(p.path.replace(/^\//, ''));
  for (const name of sitemapFiles.keys()) newFiles.push(name);
  newFiles.sort();

  if (sample) {
    fs.rmSync(outDir, { recursive: true, force: true });
  } else {
    // delete stale manifest-owned files (never protected ones)
    const oldManifest = readJsonSafe(MANIFEST_FILE) || { files: [] };
    const newSet = new Set(newFiles);
    for (const rel of oldManifest.files || []) {
      if (newSet.has(rel) || isProtected(rel)) continue;
      const abs = path.join(DOCS_DIR, rel);
      if (fs.existsSync(abs)) fs.unlinkSync(abs);
    }
  }

  for (const p of allPages) writeFileDeep(path.join(outDir, p.path.replace(/^\//, '')), p.html);
  for (const [name, content] of sitemapFiles) writeFileDeep(path.join(outDir, name), content);

  if (!sample) {
    fs.writeFileSync(MANIFEST_FILE, JSON.stringify({ buildDate: site.buildDate, files: newFiles }, null, 2) + '\n', 'utf8');
  }

  // ---------- report ----------
  const counts = {};
  for (const p of allPages) counts[p.section] = (counts[p.section] || 0) + 1;
  const lines = [];
  lines.push(`BUILD REPORT — expert-intabulare.ro generator (buildDate ${site.buildDate}${sample ? ', SAMPLE MODE' : ''})`);
  lines.push('');
  lines.push(`Pages emitted: ${allPages.length}  (+ ${sitemapFiles.size} sitemap/robots files)`);
  for (const [k, v] of Object.entries(counts).sort()) lines.push(`  ${k}: ${v}`);
  lines.push('');
  lines.push(`Data shards missing/unreadable (tolerated — build what exists): ${problems.length}`);
  for (const p of problems) lines.push(`  - ${p}`);
  lines.push('');
  lines.push(`Data-gate demotions (matrix row on county hub instead of page): ${demotedData.length}`);
  for (const d of demotedData) lines.push(`  - ${d.key}: missing slots [${d.missing.join(', ')}]`);
  lines.push('');
  lines.push(`Render-gate demotions: ${demotedRender.length}`);
  for (const d of demotedRender) lines.push(`  - ${d.key}: ${d.reasons.join('; ')}`);
  lines.push('');
  lines.push(`Errors (build fails): ${errors.length}`);
  for (const e of errors) lines.push(`  - ${e}`);
  lines.push('');
  const uniqueWarnings = [...new Set(warnings)];
  lines.push(`Warnings: ${uniqueWarnings.length}`);
  for (const w of uniqueWarnings.slice(0, 200)) lines.push(`  - ${w}`);
  const report = lines.join('\n') + '\n';
  if (!sample) fs.writeFileSync(REPORT_FILE, report, 'utf8');
  console.log(report);

  if (errors.length) {
    console.error(`BUILD FAILED with ${errors.length} error(s) — see report above.`);
    process.exit(1);
  }
  console.log(sample ? `Sample written to ${outDir}` : `Wrote ${newFiles.length} files into docs/ (manifest: generator/manifest.json)`);
}

main();
