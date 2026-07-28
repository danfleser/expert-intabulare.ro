'use strict';
// Anti-doorway gates (spec §3.2). Two stages:
//   1. data gate  — locality record must have matrix != "hub-only" AND ≥5 of 7 unique-data slots
//   2. render gate — ≥120 unique words vs siblings, 3-word shingle overlap ≤70%, size budgets
// A page that fails either gate is demoted to a county-hub row and logged — never emitted.

const { htmlToText, tokenize, shingles } = require('./util');

const MIN_SLOTS = 5;
const MIN_UNIQUE_WORDS = 120;
const MAX_SHINGLE_OVERLAP = 0.7;
const MAX_LEAF_BYTES = 60 * 1024;
const MAX_HUB_BYTES = 120 * 1024;

/**
 * Data gate. Returns { pass, filled, missing[] }.
 * The 7 slots: distance, ocpiOffice, villages, countyNote, profile variant, FAQ selection, nearby links.
 */
function dataGate(loc, county, service) {
  const filled = [];
  const missing = [];
  const slot = (name, ok) => (ok ? filled.push(name) : missing.push(name));

  slot('distance', Number.isFinite(loc.distanceKmFromAiud) || (Number.isFinite(loc.lat) && Number.isFinite(loc.lon)));
  slot('ocpiOffice', !!(loc.ocpiOffice && (typeof loc.ocpiOffice === 'string' ? loc.ocpiOffice.trim() : loc.ocpiOffice.name)));
  slot('villages', Array.isArray(loc.villages) && loc.villages.length > 0);
  slot('countyNote', !!(county && county.countyNote));
  slot('profileVariant', !!loc.profile && !!service && Array.isArray(service.introVariants) && service.introVariants.length >= 1);
  slot('faqSelection', !!service && Array.isArray(service.faqPool) && service.faqPool.length >= 4);
  slot('nearby', (Array.isArray(loc.nearby) && loc.nearby.length > 0) || (Number.isFinite(loc.lat) && Number.isFinite(loc.lon)));

  const pass = (loc.matrix || 'full') !== 'hub-only' && filled.length >= MIN_SLOTS;
  return { pass, filled, missing };
}

/** Extract the gated content region (between content markers), as plain text tokens. */
function contentTokens(html) {
  const m = html.match(/<!--content:start-->([\s\S]*?)<!--content:end-->/);
  const region = m ? m[1] : html;
  return tokenize(htmlToText(region));
}

/**
 * Render gate over a sibling group (same service, all candidate locality pages).
 * pages: [{ key, html }] → returns Map key → { pass, uniqueWords, shingleOverlap, reasons[] }
 *
 * "unique words" = tokens covered by at least one 3-word shingle that appears in NO sibling,
 * i.e. the volume of genuinely page-specific text (single common words like "de"/"în" are
 * shared by every Romanian page and must not count either way).
 */
function renderGate(pages) {
  const tokensByKey = new Map();
  const shingleDocFreq = new Map();

  for (const p of pages) {
    const tokens = contentTokens(p.html);
    const sh = shingles(tokens, 3);
    tokensByKey.set(p.key, { tokens, sh });
    for (const s of sh) shingleDocFreq.set(s, (shingleDocFreq.get(s) || 0) + 1);
  }

  const results = new Map();
  const single = pages.length <= 1; // no siblings → uniqueness passes trivially
  for (const p of pages) {
    const { tokens, sh } = tokensByKey.get(p.key);
    // token i is "unique text" if any 3-shingle starting in [i-2..i] is page-exclusive
    const uniqueStart = [];
    for (let i = 0; i + 3 <= tokens.length; i++) {
      uniqueStart.push(shingleDocFreq.get(tokens.slice(i, i + 3).join(' ')) === 1);
    }
    let unique = 0;
    for (let i = 0; i < tokens.length; i++) {
      for (let j = Math.max(0, i - 2); j <= i && j < uniqueStart.length; j++) {
        if (uniqueStart[j]) { unique++; break; }
      }
    }
    // Shingle overlap is PAIRWISE (vs the worst single sibling), per Team A/D r1:
    // "3-word shingle overlap ≤ 70% against any sibling" — measured on the
    // NON-BOILERPLATE residual. Service-constant blocks (process, documents,
    // price, county note, FAQ-pool text) are shared by design across most
    // siblings, exactly like navigation chrome; duplicate detection that counts
    // them would only measure the template, not the page. Boilerplate := any
    // shingle present in ≥50% of the sibling group. Thin pages cannot hide
    // behind this: the ≥120 page-exclusive-words floor above still applies to
    // the full content region.
    const half = Math.max(2, Math.ceil(pages.length * 0.5));
    const residual = new Set();
    for (const s of sh) if ((shingleDocFreq.get(s) || 0) < half) residual.add(s);
    let overlap = 0;
    for (const q of pages) {
      if (q.key === p.key) continue;
      const other = tokensByKey.get(q.key).sh;
      let inter = 0;
      for (const s of residual) if (other.has(s)) inter++;
      const ratio = residual.size === 0 ? 1 : inter / residual.size;
      if (ratio > overlap) overlap = ratio;
    }
    const reasons = [];
    if (!single && unique < MIN_UNIQUE_WORDS) reasons.push(`unique words ${unique} < ${MIN_UNIQUE_WORDS}`);
    if (!single && overlap > MAX_SHINGLE_OVERLAP) reasons.push(`shingle overlap ${(overlap * 100).toFixed(1)}% > ${MAX_SHINGLE_OVERLAP * 100}%`);
    const bytes = Buffer.byteLength(p.html, 'utf8');
    if (bytes > MAX_LEAF_BYTES) reasons.push(`size ${bytes}B > ${MAX_LEAF_BYTES}B`);
    results.set(p.key, { pass: reasons.length === 0, uniqueWords: unique, shingleOverlap: overlap, bytes, reasons });
  }
  return results;
}

function sizeGate(html, isHub) {
  const bytes = Buffer.byteLength(html, 'utf8');
  const limit = isHub ? MAX_HUB_BYTES : MAX_LEAF_BYTES;
  return { pass: bytes <= limit, bytes, limit };
}

module.exports = {
  MIN_SLOTS, MIN_UNIQUE_WORDS, MAX_SHINGLE_OVERLAP, MAX_LEAF_BYTES, MAX_HUB_BYTES,
  dataGate, renderGate, sizeGate, contentTokens,
};
