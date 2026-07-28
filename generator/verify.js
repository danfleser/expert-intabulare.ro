#!/usr/bin/env node
'use strict';
// Verification suite — run AFTER `node generator/build.js`, BEFORE any commit/push.
// Exits non-zero on any failure. Checks (spec §3.6):
//   links resolve · sitemap↔manifest 1:1 · UTF-8/comma-below/mojibake · UAT-register diff ·
//   uniqueness gates re-check · WhatsApp URL lint · tel: everywhere · hreflang reciprocity ·
//   size budgets · balanced tags · zero formspree/wow.js/preloader in generated pages.

const fs = require('fs');
const path = require('path');
const { readJsonSafe, loadShardDir, uatKey, uatMatches, slugifyRo } = require('./lib/util');
const gates = require('./lib/gates');

const GENERATOR_DIR = __dirname;
const REPO_DIR = path.dirname(GENERATOR_DIR);
const DOCS_DIR = path.join(REPO_DIR, 'docs');
// GEN_DATA_DIR: internal testing hook — must match the value used for build.js
const DATA_DIR = process.env.GEN_DATA_DIR || path.join(GENERATOR_DIR, 'data');

const failures = [];
const warnings = [];
function fail(check, msg) { failures.push(`[${check}] ${msg}`); }
function warn(check, msg) { warnings.push(`[${check}] ${msg}`); }

function htmlUnescape(s) {
  return s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}

function main() {
  const site = readJsonSafe(path.join(DATA_DIR, 'site.json'));
  if (!site) { console.error('FATAL: generator/data/site.json missing.'); process.exit(1); }
  const manifest = readJsonSafe(path.join(GENERATOR_DIR, 'manifest.json'));
  if (!manifest || !Array.isArray(manifest.files) || !manifest.files.length) {
    console.error('FATAL: generator/manifest.json missing/empty — run `node generator/build.js` first.');
    process.exit(1);
  }

  const htmlFiles = manifest.files.filter((f) => f.endsWith('.html'));
  const contents = new Map();
  for (const rel of manifest.files) {
    const abs = path.join(DOCS_DIR, rel);
    if (!fs.existsSync(abs)) { fail('manifest', `listed file missing on disk: docs/${rel}`); continue; }
    contents.set(rel, fs.readFileSync(abs));
  }

  // ---------- 1. encoding: valid UTF-8, comma-below only, no mojibake ----------
  const utf8 = new Map();
  for (const [rel, buf] of contents) {
    let text;
    try {
      text = new TextDecoder('utf-8', { fatal: true }).decode(buf);
    } catch {
      fail('utf8', `docs/${rel} is not valid UTF-8`);
      continue;
    }
    utf8.set(rel, text);
    if (/[ŞşŢţ]/.test(text)) fail('diacritics', `docs/${rel} contains cedilla ş/ţ (use comma-below ș U+0219 / ț U+021B)`);
    if (/�/.test(text)) fail('mojibake', `docs/${rel} contains U+FFFD replacement character`);
    if (/Ã[-¿ a-zA-Z]/.test(text) || /â€/.test(text)) fail('mojibake', `docs/${rel} looks mojibake-encoded (Ã/â€ sequence)`);
  }

  // ---------- 2. link + asset resolution (zero tolerance) ----------
  const resolveDoc = (p) => {
    let clean = p.split('#')[0].split('?')[0];
    if (clean === '') return true; // pure fragment
    if (clean.startsWith(site.domain)) clean = clean.slice(site.domain.length) || '/';
    if (/^(https?:|mailto:|tel:|javascript:|data:)/.test(clean)) return true; // external / non-file
    let relPath;
    if (clean.startsWith('/')) relPath = clean === '/' ? 'index.html' : clean.slice(1);
    else return { relative: clean }; // handled by caller with base dir
    if (relPath.endsWith('/')) relPath += 'index.html';
    return fs.existsSync(path.join(DOCS_DIR, relPath)) || null;
  };
  for (const [rel, text] of utf8) {
    const re = /(?:href|src)="([^"]+)"/g;
    let m;
    while ((m = re.exec(text))) {
      const target = htmlUnescape(m[1]);
      let r = resolveDoc(target);
      if (r && r.relative !== undefined) {
        let p = path.join(path.dirname(path.join(DOCS_DIR, rel)), r.relative);
        if (r.relative.endsWith('/') || r.relative === '') p = path.join(p, 'index.html');
        r = fs.existsSync(p) || null;
      }
      if (r === null) fail('links', `docs/${rel}: broken internal link "${m[1]}"`);
    }
  }

  // ---------- 3. sitemap ↔ manifest 1:1 ----------
  const sitemapUrls = new Set();
  for (const rel of manifest.files.filter((f) => /^sitemap-.*\.xml$/.test(f))) {
    const text = utf8.get(rel) || '';
    for (const m of text.matchAll(/<loc>([^<]+)<\/loc>/g)) sitemapUrls.add(m[1]);
  }
  const expectedUrls = new Set(['/', '/privacy-policy.html', '/terms-and-conditions.html'].map((u) => site.domain + u));
  for (const rel of htmlFiles) {
    const url = site.domain + '/' + rel.replace(/index\.html$/, '');
    expectedUrls.add(url);
  }
  for (const u of expectedUrls) if (!sitemapUrls.has(u)) fail('sitemap', `URL missing from sitemaps: ${u}`);
  for (const u of sitemapUrls) if (!expectedUrls.has(u)) fail('sitemap', `sitemap URL has no corresponding file: ${u}`);
  const smIndex = utf8.get('sitemap.xml');
  if (!smIndex) fail('sitemap', 'sitemap.xml (index) not generated');
  const robots = utf8.get('robots.txt');
  if (!robots || !robots.includes(`Sitemap: ${site.domain}/sitemap.xml`)) fail('robots', 'robots.txt missing or missing Sitemap line');

  // ---------- 4. WhatsApp lint + tel: on every generated page ----------
  const waRe = /href="(https:\/\/api\.whatsapp\.com\/send\/\?[^"]+)"/g;
  for (const rel of htmlFiles) {
    const text = utf8.get(rel);
    if (text === undefined) continue;
    let m; let count = 0;
    waRe.lastIndex = 0;
    while ((m = waRe.exec(text))) {
      count++;
      const url = htmlUnescape(m[1]);
      const qs = url.split('?')[1] || '';
      const params = new Map(qs.split('&').map((kv) => {
        const i = kv.indexOf('=');
        return [kv.slice(0, i), kv.slice(i + 1)];
      }));
      if (params.get('phone') !== site.whatsapp.phone) fail('whatsapp', `docs/${rel}: wrong phone in WA URL`);
      if (params.get('type') !== 'phone_number' || params.get('app_absent') !== '0') fail('whatsapp', `docs/${rel}: WA URL missing type/app_absent params`);
      const enc = params.get('text') || '';
      if (enc.includes('+')) fail('whatsapp', `docs/${rel}: WA text uses "+" for space`);
      let decoded;
      try { decoded = decodeURIComponent(enc); } catch { fail('whatsapp', `docs/${rel}: WA text not decodable`); continue; }
      if (encodeURIComponent(decoded) !== enc) fail('whatsapp', `docs/${rel}: WA text not encodeURIComponent-idempotent: ${enc.slice(0, 60)}…`);
    }
    if (count === 0) fail('whatsapp', `docs/${rel}: no WhatsApp CTA found`);
    if (!text.includes(`href="tel:${site.nap.phone}`) && !text.includes('href="tel:')) fail('tel', `docs/${rel}: no tel: link`);
  }

  // ---------- 5. forbidden strings in generated pages ----------
  for (const rel of htmlFiles) {
    const text = utf8.get(rel);
    if (text === undefined) continue;
    const lower = text.toLowerCase();
    for (const bad of ['formspree', 'wow.js', 'preloader']) {
      if (lower.includes(bad)) fail('forbidden', `docs/${rel} contains "${bad}"`);
    }
    if (/class="[^"]*\bwow\b/.test(text)) fail('forbidden', `docs/${rel} uses wow animation class`);
  }
  // homepage: zero formspree after the G9 edit (spec §3.5 verify gate)
  const idx = path.join(DOCS_DIR, 'index.html');
  if (fs.existsSync(idx) && fs.readFileSync(idx, 'utf8').toLowerCase().includes('formspree')) {
    fail('forbidden', 'docs/index.html still contains "formspree" (homepage edit pending — must be gone before push)');
  }

  // ---------- 6. size budgets ----------
  for (const rel of htmlFiles) {
    const bytes = (contents.get(rel) || Buffer.alloc(0)).length;
    const limit = rel.endsWith('index.html') ? gates.MAX_HUB_BYTES : gates.MAX_LEAF_BYTES;
    if (bytes > limit) fail('size', `docs/${rel}: ${bytes}B > ${limit}B`);
  }

  // ---------- 7. balanced tags ----------
  const TAGS = ['div', 'ul', 'ol', 'li', 'section', 'table', 'thead', 'tbody', 'tr', 'td', 'th', 'p', 'a', 'details', 'summary', 'header', 'footer', 'nav', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'title', 'script', 'style', 'form', 'button', 'label'];
  for (const rel of htmlFiles) {
    const text = utf8.get(rel);
    if (text === undefined) continue;
    for (const tag of TAGS) {
      const open = (text.match(new RegExp(`<${tag}(?=[\\s>])`, 'g')) || []).length;
      const close = (text.match(new RegExp(`</${tag}>`, 'g')) || []).length;
      if (open !== close) fail('tags', `docs/${rel}: <${tag}> open ${open} ≠ close ${close}`);
    }
    if (/\{\{\{?[\w.-]+\}?\}\}/.test(text)) fail('tags', `docs/${rel}: unfilled {{slot}} left in output`);
  }

  // ---------- 8. hreflang reciprocity ----------
  const hreflangOf = (text) => {
    const map = {};
    for (const m of text.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)">/g)) map[m[1]] = htmlUnescape(m[2]);
    return map;
  };
  const pageUrl = (rel) => site.domain + '/' + rel.replace(/index\.html$/, '');
  const urlToText = new Map();
  for (const rel of htmlFiles) if (utf8.has(rel)) urlToText.set(pageUrl(rel), utf8.get(rel));
  if (fs.existsSync(idx)) urlToText.set(site.domain + '/', fs.readFileSync(idx, 'utf8'));

  for (const [url, text] of urlToText) {
    const hl = hreflangOf(text);
    if (!hl.ro && !hl.en) continue;
    if (!hl.ro || !hl.en) { fail('hreflang', `${url}: incomplete hreflang set`); continue; }
    if (hl['x-default'] !== hl.ro) fail('hreflang', `${url}: x-default must equal the RO URL`);
    const counterpart = url === hl.ro ? hl.en : hl.ro;
    if (url !== hl.ro && url !== hl.en) fail('hreflang', `${url}: page is neither its own ro nor en alternate (not self-referencing)`);
    const otherText = urlToText.get(counterpart);
    if (otherText === undefined) { fail('hreflang', `${url}: counterpart ${counterpart} does not exist`); continue; }
    const ohl = hreflangOf(otherText);
    if (ohl.ro !== hl.ro || ohl.en !== hl.en) fail('hreflang', `${url} ↔ ${counterpart}: hreflang sets are not reciprocal`);
  }
  // pairs declared in hreflang.json must actually be emitted on both sides.
  // Accepts [{ro,en}], {roPath:enPath}, or the authored {pairs:[{roUrl,enUrl}]} shape.
  const declared = readJsonSafe(path.join(DATA_DIR, 'hreflang.json')) || [];
  const declaredPairs = Array.isArray(declared)
    ? declared
    : Array.isArray(declared.pairs)
      ? declared.pairs
      : Object.entries(declared).map(([ro, en]) => ({ ro, en }));
  const sidePath = (s) => (typeof s === 'string' ? (s.replace(/^https?:\/\/[^/]+/, '') || '/') : null);
  for (const p of declaredPairs) {
    const ro = sidePath(p.ro || p.roUrl);
    const en = sidePath(p.en || p.enUrl);
    if (!ro || !en) continue;
    for (const side of [ro, en]) {
      const u = site.domain + side.replace(/\/index\.html$/, '/');
      if (!urlToText.has(u)) fail('hreflang', `declared pair side not emitted: ${side}`);
      else if (!hreflangOf(urlToText.get(u)).en) fail('hreflang', `declared pair page has no hreflang tags: ${side}`);
    }
  }

  // ---------- 9. UAT register diff (official locality names) ----------
  const localities = loadShardDir(path.join(DATA_DIR, 'localities'));
  if (localities.length) {
    const codeBySlug = new Map(site.nav.counties.map((c) => [c.slug, c.code]));
    const registers = new Map();
    for (const [slug, code] of codeBySlug) {
      const snap = readJsonSafe(path.join(DATA_DIR, 'uat-official', `${code}.json`));
      if (snap) registers.set(slug, new Set(snap.uats.map((u) => uatKey(u))));
    }
    for (const l of localities) {
      const cSlug = l.countySlug || slugifyRo(l.county || '');
      const reg = registers.get(cSlug);
      if (!reg) { fail('uat', `no official register snapshot for county "${cSlug}" (locality ${l.name})`); continue; }
      if (!uatMatches(reg, l.name)) fail('uat', `locality "${l.name}" (${cSlug}) not found in official UAT register — check name/diacritics`);
    }
  } else {
    warn('uat', 'no locality shards yet — UAT diff skipped');
  }

  // ---------- 10. uniqueness gates re-check on rendered files ----------
  const byService = new Map();
  for (const rel of htmlFiles) {
    const m = rel.match(/^servicii\/([^/]+)\/([^/]+)\/([^/]+)\.html$/);
    if (!m) continue;
    if (!byService.has(m[1])) byService.set(m[1], []);
    byService.get(m[1]).push({ key: rel, html: utf8.get(rel) || '' });
  }
  for (const [service, group] of byService) {
    const results = gates.renderGate(group);
    for (const [key, r] of results) {
      if (!r.pass) fail('uniqueness', `${key}: ${r.reasons.join('; ')} (service ${service})`);
    }
  }

  // ---------- report ----------
  console.log(`VERIFY — ${htmlFiles.length} generated pages, ${manifest.files.length} manifest files`);
  for (const w of warnings) console.log(`WARN  ${w}`);
  if (failures.length) {
    for (const f of failures) console.error(`FAIL  ${f}`);
    console.error(`\nVERIFY FAILED: ${failures.length} failure(s). No push while red.`);
    process.exit(1);
  }
  console.log('VERIFY PASSED — all checks green.');
}

main();
