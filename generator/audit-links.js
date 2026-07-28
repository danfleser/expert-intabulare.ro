#!/usr/bin/env node
'use strict';
// Full link audit over docs/**/*.html — every displayed link, including pages
// NOT owned by the build manifest (index.html, privacy, terms).
//
// Checks:
//   A. internal links/assets (root-relative, relative, domain-absolute,
//      trailing-slash hubs) resolve to a file on disk;
//      directory links missing the trailing slash are flagged as DEGRADED
//      (they work only via a server redirect).
//   B. fragment targets — for href="#frag" and href="X#frag" an element with
//      id="frag" (or <a name=…>) must exist in the target document.
//   C. mailto:/tel: syntax sanity.
//   D. external http(s) URLs — deduped, then curl'd (HEAD, follow redirects,
//      GET retry when HEAD is rejected). 4xx/5xx → BROKEN, cross-host
//      redirects reported as DEGRADED for review.
//      api.whatsapp.com/send URLs are deduped by phone param (the text param
//      does not affect reachability) — one probe per phone.
//      rel="preconnect"/"dns-prefetch" hrefs are connectivity-only: any HTTP
//      response (even 404 on the bare host) means the origin is reachable.
//
// Usage: node generator/audit-links.js [--no-external] [--json <out.json>]
// Exit codes: 0 clean (warnings allowed), 1 broken findings, 2 fatal.

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const GENERATOR_DIR = __dirname;
const REPO_DIR = path.dirname(GENERATOR_DIR);
const DOCS_DIR = path.join(REPO_DIR, 'docs');
const site = JSON.parse(fs.readFileSync(path.join(GENERATOR_DIR, 'data', 'site.json'), 'utf8'));

const args = process.argv.slice(2);
const CHECK_EXTERNAL = !args.includes('--no-external');
const jsonOutIdx = args.indexOf('--json');
const JSON_OUT = jsonOutIdx !== -1 ? args[jsonOutIdx + 1] : null;

function htmlUnescape(s) {
  return s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const htmlFiles = walk(DOCS_DIR).map((p) => path.relative(DOCS_DIR, p)).sort();
const text = new Map(); // rel -> content
for (const rel of htmlFiles) text.set(rel, fs.readFileSync(path.join(DOCS_DIR, rel), 'utf8'));

const idCache = new Map(); // rel -> Set of ids
function idsOf(rel) {
  if (!idCache.has(rel)) {
    const ids = new Set();
    const t = text.get(rel) || '';
    for (const m of t.matchAll(/\bid\s*=\s*"([^"]+)"/g)) ids.add(m[1]);
    for (const m of t.matchAll(/\bid\s*=\s*'([^']+)'/g)) ids.add(m[1]);
    for (const m of t.matchAll(/<a\s[^>]*\bname\s*=\s*"([^"]+)"/g)) ids.add(m[1]);
    idCache.set(rel, ids);
  }
  return idCache.get(rel);
}

// url path (no leading slash) -> docs rel file, or null
function fileForPath(urlPath) {
  let rel = urlPath === '' ? 'index.html' : urlPath;
  if (rel.endsWith('/')) rel += 'index.html';
  const abs = path.join(DOCS_DIR, rel);
  if (fs.existsSync(abs) && fs.statSync(abs).isFile()) return rel;
  // directory hit without trailing slash → caller decides (degraded)
  if (fs.existsSync(abs) && fs.statSync(abs).isDirectory() && fs.existsSync(path.join(abs, 'index.html'))) {
    return { dirNoSlash: rel + '/index.html' };
  }
  return null;
}

// findings: { class: 'broken'|'degraded', kind, target, pages: Set, note }
const findings = new Map();
function record(cls, kind, target, page, note) {
  const key = `${cls}|${kind}|${target}|${note || ''}`;
  if (!findings.has(key)) findings.set(key, { class: cls, kind, target, note: note || '', pages: new Set() });
  findings.get(key).pages.add(page);
}

const externals = new Map(); // url -> Set(pages)
const connectivityOnly = new Set(); // preconnect/dns-prefetch hrefs
let totalRefs = 0;

for (const rel of htmlFiles) {
  const t = text.get(rel);
  for (const tag of t.matchAll(/<link\b[^>]*\brel\s*=\s*"(?:preconnect|dns-prefetch)"[^>]*>/g)) {
    const h = tag[0].match(/\bhref\s*=\s*"([^"]+)"/);
    if (h) connectivityOnly.add(htmlUnescape(h[1]));
  }
  const re = /\b(?:href|src|action)\s*=\s*("([^"]*)"|'([^']*)')/g;
  let m;
  while ((m = re.exec(t))) {
    const raw = htmlUnescape(m[2] !== undefined ? m[2] : m[3]);
    totalRefs++;
    if (raw === '' || raw.startsWith('javascript:') || raw.startsWith('data:')) continue;

    if (raw.startsWith('mailto:')) {
      const addr = raw.slice(7).split('?')[0];
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(addr)) record('broken', 'mailto', raw, rel, 'malformed address');
      continue;
    }
    if (raw.startsWith('tel:')) {
      const num = raw.slice(4);
      if (!/^\+?[0-9][0-9 .()-]{5,}$/.test(num)) record('broken', 'tel', raw, rel, 'malformed number');
      continue;
    }

    let u = raw;
    if (u.startsWith(site.domain)) u = u.slice(site.domain.length) || '/';
    if (/^(https?:)?\/\//.test(u)) {
      const abs = u.startsWith('//') ? 'https:' + u : u;
      if (!externals.has(abs)) externals.set(abs, new Set());
      externals.get(abs).add(rel);
      continue;
    }

    const [pathPart, ...fragParts] = u.split('#');
    const frag = fragParts.join('#');
    const cleanPath = pathPart.split('?')[0];

    let targetRel; // docs rel file the link lands on
    if (cleanPath === '') {
      targetRel = rel; // same-page fragment
    } else {
      let urlPath;
      if (cleanPath.startsWith('/')) urlPath = cleanPath.slice(1);
      else urlPath = path.posix.normalize(path.posix.join(path.posix.dirname(rel), cleanPath)).replace(/^\.$/, '');
      if (urlPath.startsWith('..')) { record('broken', 'internal', raw, rel, 'escapes docs root'); continue; }
      const hit = fileForPath(urlPath);
      if (hit === null) { record('broken', 'internal', raw, rel, 'no such file'); continue; }
      if (typeof hit === 'object') {
        record('degraded', 'internal', raw, rel, 'directory link missing trailing slash (needs server redirect)');
        targetRel = hit.dirNoSlash;
      } else targetRel = hit;
    }

    if (frag !== '' && u !== pathPart) {
      if (!idsOf(targetRel).has(frag)) {
        record('broken', 'fragment', raw, rel, `no id="${frag}" in ${targetRel}`);
      }
    }
  }
}

// ---------- external probes ----------
const externalResults = [];
if (CHECK_EXTERNAL) {
  // dedupe whatsapp send URLs by phone — text param doesn't affect reachability
  const probeFor = new Map(); // probeUrl -> [originalUrls]
  for (const url of externals.keys()) {
    let probe = url;
    try {
      const p = new URL(url);
      if (p.hostname === 'api.whatsapp.com' && p.pathname.startsWith('/send')) {
        probe = `https://api.whatsapp.com/send/?phone=${p.searchParams.get('phone')}&type=phone_number&app_absent=0`;
      }
    } catch { record('broken', 'external', url, [...externals.get(url)][0], 'unparseable URL'); continue; }
    if (!probeFor.has(probe)) probeFor.set(probe, []);
    probeFor.get(probe).push(url);
  }
  console.log(`Probing ${probeFor.size} external URL(s) (${externals.size} unique before whatsapp dedupe)…`);
  for (const [probe, originals] of probeFor) {
    const curl = (extra) => {
      try {
        // full browser UA: Google endpoints 404 generic bot UAs on otherwise-valid URLs
        return execFileSync('curl', ['-sS', '-o', '/dev/null', '-w', '%{http_code}\t%{url_effective}', '-L', '--max-time', '20', '-A', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36', ...extra, probe], { encoding: 'utf8' });
      } catch (e) { return (e.stdout || '000\t' + probe); }
    };
    let out = curl(['-I']);
    let [code, finalUrl] = out.split('\t');
    // some servers (e.g. google.com/maps/embed) reject HEAD outright — GET is authoritative
    if (!(parseInt(code, 10) >= 200 && parseInt(code, 10) < 400)) { out = curl([]); [code, finalUrl] = out.split('\t'); }
    const n = parseInt(code, 10);
    const pages = new Set();
    for (const o of originals) for (const p of externals.get(o)) pages.add(p);
    const samplePage = [...pages][0];
    let status = 'ok';
    const connOnly = originals.every((o) => connectivityOnly.has(o));
    if (!n) { status = 'broken'; record('broken', 'external', probe, samplePage, 'no HTTP response'); }
    else if (n >= 400 && connOnly) { status = 'ok (preconnect)'; }
    else if (n >= 400) { status = 'broken'; record('broken', 'external', probe, samplePage, `HTTP ${code}`); }
    else {
      try {
        const a = new URL(probe); const b = new URL(finalUrl);
        const strip = (h) => h.replace(/^www\./, '');
        if (strip(a.hostname) !== strip(b.hostname) && !(a.hostname === 'api.whatsapp.com' && b.hostname.endsWith('whatsapp.com'))) {
          status = 'redirected-offsite';
          record('degraded', 'external', probe, samplePage, `redirects to ${finalUrl}`);
        }
      } catch { /* ignore */ }
    }
    externalResults.push({ url: probe, represents: originals.length, http: code, finalUrl, status, pageCount: pages.size });
    console.log(`  ${code}  ${status.padEnd(19)} ${probe.slice(0, 110)}${probe.length > 110 ? '…' : ''}`);
  }
}

// ---------- report ----------
const list = [...findings.values()];
const broken = list.filter((f) => f.class === 'broken');
const degraded = list.filter((f) => f.class === 'degraded');
console.log(`\nAUDIT — ${htmlFiles.length} HTML files, ${totalRefs} href/src/action refs, ${externals.size} unique external URLs`);
for (const group of [['BROKEN', broken], ['DEGRADED', degraded]]) {
  const [label, items] = group;
  console.log(`\n${label}: ${items.length} distinct issue(s)`);
  for (const f of items.sort((a, b) => b.pages.size - a.pages.size)) {
    const sample = [...f.pages].slice(0, 3).join(', ');
    console.log(`  [${f.kind}] ${f.target}\n      ${f.note} — ${f.pages.size} page(s), e.g. ${sample}`);
  }
}
if (JSON_OUT) {
  fs.writeFileSync(JSON_OUT, JSON.stringify({
    scannedFiles: htmlFiles.length, totalRefs, uniqueExternal: externals.size,
    findings: list.map((f) => ({ ...f, pages: [...f.pages] })), externalResults,
  }, null, 2));
  console.log(`\nJSON report → ${JSON_OUT}`);
}
console.log(broken.length ? `\nAUDIT: ${broken.length} broken issue(s).` : '\nAUDIT: no broken links.');
process.exit(broken.length ? 1 : 0);
