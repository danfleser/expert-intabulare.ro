'use strict';
// Zero-dependency helpers shared by build.js and verify.js.

const fs = require('fs');
const path = require('path');

/** Read+parse a JSON file; returns null (and records the reason) instead of throwing. */
function readJsonSafe(file, problems) {
  try {
    const raw = fs.readFileSync(file, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    if (problems) problems.push(`${file}: ${err.code === 'ENOENT' ? 'missing' : 'unparsable JSON — ' + err.message}`);
    return null;
  }
}

/** All .json files in a directory, sorted for determinism. Missing dir → []. */
function listJsonFiles(dir) {
  let entries;
  try {
    entries = fs.readdirSync(dir);
  } catch {
    return [];
  }
  return entries.filter((f) => f.endsWith('.json')).sort().map((f) => path.join(dir, f));
}

/**
 * Load every record from every .json shard in a directory.
 * Each shard may be a single record object or an array of records.
 */
function loadShardDir(dir, problems) {
  const records = [];
  for (const file of listJsonFiles(dir)) {
    const data = readJsonSafe(file, problems);
    if (data === null) continue;
    if (Array.isArray(data)) records.push(...data);
    else records.push(data);
  }
  return records;
}

function escHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Escape for use inside an HTML attribute value (also handles quotes). */
const escAttr = escHtml;

/** Canonical ASCII slug per the frozen transliteration table (Team C). */
function slugifyRo(name) {
  return String(name)
    .toLowerCase()
    .replace(/[ăâ]/g, 'a')
    .replace(/î/g, 'i')
    .replace(/[șş]/g, 's')
    .replace(/[țţ]/g, 't')
    .replace(/[()]/g, '')
    .replace(/[\/\s_.]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Normalize cedilla diacritics (ş ţ) to comma-below (ș ț). */
function toCommaBelow(s) {
  return String(s)
    .replace(/ş/g, 'ș') // ş → ș
    .replace(/Ş/g, 'Ș') // Ş → Ș
    .replace(/ţ/g, 'ț') // ţ → ț
    .replace(/Ţ/g, 'Ț'); // Ţ → Ț
}

/** Uppercase, comma-below, single-spaced form used for UAT-register comparison. */
function uatKey(name) {
  // Diacritic-folded: the dpfbl.mdrap.ro register snapshots drop or vary diacritics
  // (BUCERDEA GRÂNOASA, MIHALT, SPRING…), while our data uses the correct official
  // spellings. Folding compares the letters that are actually reliable.
  return toCommaBelow(String(name))
    .toUpperCase()
    .replace(/Ă|Â/g, 'A').replace(/Î/g, 'I').replace(/Ș/g, 'S').replace(/Ț/g, 'T')
    .replace(/[-]/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * Tolerant register match: exact folded key, or one side a word-prefix of the other
 * (register truncations like "LUNCA MUREȘ" vs official "Lunca Mureșului",
 * "CRĂCIUNELUL DE JOS" vs "Crăciunelu de Jos").
 */
function uatMatches(registerKeys, name) {
  const k = uatKey(name);
  if (registerKeys.has(k)) return true;
  for (const r of registerKeys) {
    if (r.length < 5 || k.length < 5) continue;
    const shorter = r.length < k.length ? r : k;
    const longer = r.length < k.length ? k : r;
    if (longer.startsWith(shorter)) return true;      // register truncation (LUNCA MUREȘ)
    if (levenshteinLe(r, k, 2)) return true;          // small spelling variance (CRĂCIUNELUL)
  }
  return false;
}

/** True if edit distance between a and b is ≤ max (small-word tolerance). */
function levenshteinLe(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return false;
  const m = a.length, n = b.length;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n] <= max;
}

function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const rad = (d) => (d * Math.PI) / 180;
  const dLat = rad(lat2 - lat1);
  const dLon = rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

/** Approximate road distance: haversine × 1.3, rounded, always presented as „aprox.". */
function approxRoadKm(lat1, lon1, lat2, lon2) {
  return Math.max(1, Math.round(haversineKm(lat1, lon1, lat2, lon2) * 1.3));
}

/** Deterministic 32-bit FNV-1a hash — used to seed variant/FAQ selection. */
function fnv1a(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = (h * 0x01000193) >>> 0;
  }
  return h >>> 0;
}

/** WhatsApp prefill encoding: encodeURIComponent semantics, never "+" for space. */
function encodeWa(text) {
  return encodeURIComponent(text);
}

function waHref(phone, text) {
  return `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeWa(text)}&type=phone_number&app_absent=0`;
}

/** Strip tags/scripts/styles from HTML, return whitespace-normalized visible text. */
function htmlToText(html) {
  return String(html)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/** Tokenize Romanian/English text into lowercase word tokens (diacritics kept). */
function tokenize(text) {
  return (text.toLowerCase().match(/[a-zăâîșțáéíóöőüű0-9]+/gi) || []).map((w) => w.toLowerCase());
}

function shingles(tokens, n = 3) {
  const out = new Set();
  for (let i = 0; i + n <= tokens.length; i++) out.add(tokens.slice(i, i + n).join(' '));
  return out;
}

/** mkdir -p + write file (utf8). */
function writeFileDeep(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, 'utf8');
}

/** Trim a title to maxLen by dropping suffix parts (separated by " | " then " — ") from the right. */
function fitTitle(parts, maxLen = 60) {
  // parts: array of strings joined progressively; first part always kept.
  let chosen = parts[0];
  for (let i = parts.length; i >= 1; i--) {
    const candidate = parts.slice(0, i).join('');
    if ([...candidate].length <= maxLen) { chosen = candidate; break; }
  }
  return chosen;
}

module.exports = {
  readJsonSafe, listJsonFiles, loadShardDir,
  escHtml, escAttr, slugifyRo, toCommaBelow, uatKey, uatMatches,
  haversineKm, approxRoadKm, fnv1a,
  encodeWa, waHref,
  htmlToText, tokenize, shingles,
  writeFileDeep, fitTitle,
};
