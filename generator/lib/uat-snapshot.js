#!/usr/bin/env node
'use strict';
// Snapshot the official UAT registers (dpfbl.mdrap.ro) into generator/data/uat-official/{CODE}.json.
// verify.js diffs every locality name against these snapshots (spec §3.2).
//
// Usage:
//   node generator/lib/uat-snapshot.js                 fetch AB CJ MS SB HD over HTTP and write snapshots
//   node generator/lib/uat-snapshot.js AB=/path/f.html parse an already-downloaded register file
//
// The source pages are ISO-8859-2 with mixed numeric entities; names are normalized to
// UTF-8 comma-below diacritics, uppercase, single-spaced.

const fs = require('fs');
const path = require('path');
const http = require('http');

const OUT_DIR = path.join(__dirname, '..', 'data', 'uat-official');
const COUNTIES = ['AB', 'CJ', 'MS', 'SB', 'HD'];
const SOURCE = (code) => `http://www.dpfbl.mdrap.ro/${code}.html`;

// ISO-8859-2 high-byte → Unicode (only letters that occur in Romanian UAT names)
const LATIN2 = {
  0xa3: 'Ł', 0xb3: 'ł', 0xc0: 'Ŕ', 0xc1: 'Á', 0xc2: 'Â', 0xc3: 'Ă', 0xc4: 'Ä', 0xc9: 'É',
  0xca: 'Ę', 0xcd: 'Í', 0xce: 'Î', 0xd3: 'Ó', 0xd4: 'Ô', 0xd6: 'Ö', 0xda: 'Ú', 0xdc: 'Ü',
  0xaa: 'Ş', 0xba: 'ş', 0xde: 'Ţ', 0xfe: 'ţ', 0xc7: 'Ç', 0xe0: 'ŕ', 0xe2: 'â', 0xe3: 'ă',
  0xe9: 'é', 0xee: 'î', 0xf3: 'ó', 0xf4: 'ô', 0xf6: 'ö', 0xfa: 'ú', 0xfc: 'ü',
};

function decodeLatin2(buf) {
  let out = '';
  for (const b of buf) {
    if (b < 0x80) out += String.fromCharCode(b);
    else out += LATIN2[b] || '?';
  }
  return out;
}

const NAMED_ENTITIES = {
  acirc: 'â', icirc: 'î', abreve: 'ă', scedil: 'ş', tcedil: 'ţ',
  Acirc: 'Â', Icirc: 'Î', Abreve: 'Ă', Scedil: 'Ş', Tcedil: 'Ţ',
};
function decodeEntities(s) {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&(\w+);/g, (m, name) => NAMED_ENTITIES[name] || (name === 'amp' ? '&' : name === 'nbsp' ? ' ' : m));
}

function toCommaBelow(s) {
  return s.replace(/ş/g, 'ș').replace(/Ş/g, 'Ș').replace(/ţ/g, 'ț').replace(/Ţ/g, 'Ț');
}

/** Extract UAT names: the register lists rows of <p>№</p><p>NAME</p><p>siruta</p>. */
function parseRegister(html) {
  const ps = [...html.matchAll(/<p>([^<]*)<\/p>/g)].map((m) => decodeEntities(m[1]).replace(/\s+/g, ' ').trim());
  const names = [];
  for (let i = 0; i + 1 < ps.length; i++) {
    if (/^\d+$/.test(ps[i]) && ps[i + 1] && !/^\d+$/.test(ps[i + 1])) {
      const name = toCommaBelow(ps[i + 1]).toUpperCase();
      if (name.includes('CONSILIUL') || name.includes('JUDEȚUL')) continue; // header rows, not UATs
      names.push(name);
    }
  }
  return [...new Set(names)].sort();
}

function fetchHttp(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      if (res.statusCode !== 200) return reject(new Error(`${url}: HTTP ${res.statusCode}`));
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const localArgs = process.argv.slice(2).filter((a) => a.includes('='));
  const today = new Date().toISOString().slice(0, 10);

  const jobs = localArgs.length
    ? localArgs.map((a) => { const [code, file] = a.split('='); return { code, file }; })
    : COUNTIES.map((code) => ({ code }));

  for (const job of jobs) {
    const buf = job.file ? fs.readFileSync(job.file) : await fetchHttp(SOURCE(job.code));
    const uats = parseRegister(decodeLatin2(buf));
    if (uats.length < 40) throw new Error(`${job.code}: only ${uats.length} UATs parsed — page layout changed?`);
    const out = { county: job.code, source: SOURCE(job.code), fetchDate: today, count: uats.length, uats };
    const file = path.join(OUT_DIR, `${job.code}.json`);
    fs.writeFileSync(file, JSON.stringify(out, null, 2) + '\n', 'utf8');
    console.log(`${job.code}: ${uats.length} UATs → ${path.relative(process.cwd(), file)}`);
  }
}

main().catch((e) => { console.error(e.message); process.exit(1); });
