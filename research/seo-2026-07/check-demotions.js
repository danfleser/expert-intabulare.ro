#!/usr/bin/env node
'use strict';
/**
 * check-demotions.js — the demotion guard for generator/build-report.txt.
 *
 *   node research/seo-2026-07/check-demotions.js [baselinePath] [currentPath]
 *
 * Defaults: baseline research/seo-2026-07/baseline.txt, current generator/build-report.txt.
 * (The second argument exists so the test suite can drive synthetic fixtures.)
 *
 * WHY A SET DIFF AND NOT A COUNT. The obvious guard is "demotions must not exceed
 * N". It passes the exact regression it exists to prevent: an edit rescues three
 * pages and demotes three DIFFERENT ones, the count is unchanged, exit 0 — and
 * build.js's manifest sweep then deletes the newly demoted files from docs/,
 * 404ing URLs Google may already have indexed. The unit of safety is the SET of
 * demoted keys. The baseline file is the contract; there is no numeric argument.
 *
 * After an intentional rescue, re-baseline in the same commit:
 *   cp generator/build-report.txt research/seo-2026-07/baseline.txt
 *
 * Exit codes: 0 pass · 1 regression · 2 a report could not be parsed.
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.join(__dirname, '..', '..');
const DEFAULT_BASELINE = path.join(__dirname, 'baseline.txt');
const DEFAULT_CURRENT = path.join(REPO_ROOT, 'generator', 'build-report.txt');

const RENDER_HEADER = /^Render-gate demotions:\s*(\d+)\s*$/;
const DATA_HEADER = /^Data-gate demotions[^:]*:\s*(\d+)\s*$/;
const EMITTED = /^Pages emitted:\s*(\d+)/m;

class ReportError extends Error {}

/**
 * Collect the `  - key: detail` bullets that follow the line at `start`.
 * Stops at the first line that is not a bullet, so neighbouring sections
 * (which use the same bullet syntax) can never bleed in.
 */
function collectBullets(lines, start) {
  const out = new Map();
  for (let i = start + 1; i < lines.length; i += 1) {
    const m = /^ {2}- (.+)$/.exec(lines[i]);
    if (!m) break;
    const sep = m[1].indexOf(': ');
    if (sep === -1) out.set(m[1].trim(), '');
    else out.set(m[1].slice(0, sep).trim(), m[1].slice(sep + 2).trim());
  }
  return out;
}

function section(lines, headerRe, label) {
  const idx = lines.findIndex((l) => headerRe.test(l));
  if (idx === -1) throw new ReportError(`missing "${label}" section`);
  const declared = Number(headerRe.exec(lines[idx])[1]);
  const bullets = collectBullets(lines, idx);
  // Integrity assert: a truncated or malformed report must never read as "pass".
  if (bullets.size !== declared) {
    throw new ReportError(`${label}: header says ${declared}, found ${bullets.size} bullets`);
  }
  return bullets;
}

/** parseReport(text) -> { emitted, renderDemotions: Map, dataDemotions: Map } */
function parseReport(text) {
  const lines = String(text).split('\n');
  const em = EMITTED.exec(text);
  if (!em) throw new ReportError('missing "Pages emitted:" line');
  return {
    emitted: Number(em[1]),
    renderDemotions: section(lines, RENDER_HEADER, 'Render-gate demotions'),
    dataDemotions: section(lines, DATA_HEADER, 'Data-gate demotions'),
  };
}

function read(file, label) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch (err) {
    console.error(`ERROR: cannot read ${label} report at ${file} (${err.code})`);
    process.exit(2);
  }
}

function parseOrDie(text, file) {
  try {
    return parseReport(text);
  } catch (err) {
    if (err instanceof ReportError) {
      console.error(`ERROR: report malformed (${err.message}) — ${file}`);
      process.exit(2);
    }
    throw err;
  }
}

/** Keys present in `cur` but not in `base`. */
function newKeys(base, cur) {
  return [...cur.keys()].filter((k) => !base.has(k));
}

function main() {
  const baselinePath = process.argv[2] || DEFAULT_BASELINE;
  const currentPath = process.argv[3] || DEFAULT_CURRENT;

  const baseline = parseOrDie(read(baselinePath, 'baseline'), baselinePath);
  const current = parseOrDie(read(currentPath, 'current'), currentPath);

  let failed = false;

  // C1 — new render-gate demotions. The critical check.
  const newRender = newKeys(baseline.renderDemotions, current.renderDemotions);
  if (newRender.length) {
    failed = true;
    console.error(
      `FAIL: ${newRender.length} page(s) newly demoted since baseline — ` +
      'these were LIVE and their files are now DELETED from docs/:'
    );
    for (const k of newRender) console.error(`  - ${k}: ${current.renderDemotions.get(k)}`);
  }

  // C2 — new data-gate demotions. Baseline is 0; any appearance is a regression.
  const newData = newKeys(baseline.dataDemotions, current.dataDemotions);
  if (newData.length) {
    failed = true;
    console.error(
      `FAIL: ${newData.length} page(s) newly demoted by the DATA gate since baseline — ` +
      'these were LIVE and their files are now DELETED from docs/:'
    );
    for (const k of newData) console.error(`  - ${k}: ${current.dataDemotions.get(k)}`);
  }

  // C3 — emitted floor. Catches whole-section losses the demotion lists cannot see.
  if (current.emitted < baseline.emitted) {
    failed = true;
    console.error(`FAIL: pages emitted fell ${baseline.emitted} -> ${current.emitted}`);
  }

  // C4 — rescues. Informational, never a failure.
  const rescued = newKeys(current.renderDemotions, baseline.renderDemotions);
  if (rescued.length) {
    console.log(`rescued: ${rescued.length} page(s) no longer demoted`);
    for (const k of rescued) console.log(`  - ${k}`);
  }

  // C5 — summary.
  const summary =
    `demotions=${current.renderDemotions.size} baseline=${baseline.renderDemotions.size} ` +
    `new=${newRender.length} rescued=${rescued.length} emitted=${current.emitted}`;
  console.log(summary);

  if (failed) {
    console.error('DEMOTION GUARD FAILED — revert the edit and rewrite it. Never proceed with a regression.');
    process.exit(1);
  }
  console.log('DEMOTION GUARD PASSED');
}

module.exports = { parseReport, ReportError };

if (require.main === module) main();
