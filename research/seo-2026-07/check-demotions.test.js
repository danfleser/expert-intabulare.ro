'use strict';
// Tests for check-demotions.js — the set-diff demotion guard.
//
// Zero-dependency: synthetic report fixtures only, no build required. Run with
//   node research/seo-2026-07/check-demotions.test.js
//
// The design under test replaces a numeric threshold ("demotions <= 92"). The
// kill-shot fixture below is why: a count-preserving swap rescues one page and
// silently demotes a different LIVE one, whose docs/ file build.js then deletes.
// A count guard passes that. A set guard must not.

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const SCRIPT = path.join(__dirname, 'check-demotions.js');
const { parseReport } = require(SCRIPT);

let failures = 0;
let ran = 0;

function check(label, cond, detail) {
  ran += 1;
  if (cond) {
    console.log(`  ok   ${label}`);
  } else {
    failures += 1;
    console.log(`  FAIL ${label}${detail ? `\n       ${detail}` : ''}`);
  }
}

/** Build a synthetic build-report.txt. renderBullets/dataBullets are raw strings. */
function report({ emitted = 2003, renderKeys = [], dataKeys = [], renderHeader, dataHeader }) {
  const lines = [
    'BUILD REPORT — expert-intabulare.ro generator (buildDate 2026-07-29)',
    '',
    `Pages emitted: ${emitted}  (+ 10 sitemap/robots files)`,
    '  serviciiAlba: 602',
    '',
    'Data shards missing/unreadable (tolerated — build what exists): 0',
    '',
    `Data-gate demotions (matrix row on county hub instead of page): ${dataHeader != null ? dataHeader : dataKeys.length}`,
  ];
  for (const k of dataKeys) lines.push(`  - ${k}: missing slots [villages, nearby]`);
  lines.push('');
  lines.push(`Render-gate demotions: ${renderHeader != null ? renderHeader : renderKeys.length}`);
  for (const k of renderKeys) lines.push(`  - ${k}: unique words 119 < 120`);
  lines.push('');
  lines.push('Errors (build fails): 0');
  lines.push('');
  lines.push('Warnings: 0');
  return lines.join('\n') + '\n';
}

/** Run the CLI against two synthetic reports. Returns { status, stdout }. */
function run(baselineText, currentText) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'demotions-test-'));
  const baselinePath = path.join(dir, 'baseline.txt');
  const currentPath = path.join(dir, 'build-report.txt');
  fs.writeFileSync(baselinePath, baselineText, 'utf8');
  fs.writeFileSync(currentPath, currentText, 'utf8');
  try {
    const stdout = execFileSync(process.execPath, [SCRIPT, baselinePath, currentPath], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    return { status: 0, stdout };
  } catch (err) {
    return {
      status: err.status,
      stdout: (err.stdout || '') + (err.stderr || ''),
    };
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

const KEYS_92 = Array.from({ length: 92 }, (_, i) => `cadastru-si-intabulare/alba/loc-${i}`);

console.log('parseReport');
{
  const parsed = parseReport(report({ emitted: 2003, renderKeys: ['a/b/c', 'd/e/f'], dataKeys: ['g/h/i'] }));
  check('reads emitted count', parsed.emitted === 2003, `got ${parsed.emitted}`);
  check('reads render demotion keys', parsed.renderDemotions.size === 2 && parsed.renderDemotions.has('a/b/c'));
  check('reads the reason string', parsed.renderDemotions.get('a/b/c') === 'unique words 119 < 120',
    `got ${JSON.stringify(parsed.renderDemotions.get('a/b/c'))}`);
  check('reads data demotion keys', parsed.dataDemotions.size === 1 && parsed.dataDemotions.has('g/h/i'));
}
{
  const parsed = parseReport(fs.readFileSync(path.join(__dirname, 'baseline.txt'), 'utf8'));
  check('parses the real baseline: 92 render demotions', parsed.renderDemotions.size === 92,
    `got ${parsed.renderDemotions.size}`);
  check('parses the real baseline: 0 data demotions', parsed.dataDemotions.size === 0);
  check('parses the real baseline: emitted > 0', parsed.emitted > 0);
}

console.log('\n(a) identical baseline and current → pass');
{
  const text = report({ renderKeys: KEYS_92 });
  const r = run(text, text);
  check('exit 0', r.status === 0, r.stdout);
  check('summary line reports new=0', /new=0/.test(r.stdout), r.stdout);
  check('summary line reports the counts', /demotions=92 baseline=92 new=0 rescued=0 emitted=2003/.test(r.stdout), r.stdout);
}

console.log('\n(b) KILL SHOT — count unchanged, one key swapped → must FAIL naming the key');
{
  const baseline = report({ renderKeys: KEYS_92 });
  // Rescue loc-7; demote a page that was LIVE. Count stays 92 — a numeric guard passes.
  const swapped = KEYS_92.filter((k) => k !== 'cadastru-si-intabulare/alba/loc-7')
    .concat('intabulare-teren/alba/aiud');
  const current = report({ renderKeys: swapped });
  const r = run(baseline, current);
  check('exit 1', r.status === 1, r.stdout);
  check('names the newly demoted key', r.stdout.includes('intabulare-teren/alba/aiud'), r.stdout);
  check('says the page was live', /LIVE/.test(r.stdout), r.stdout);
  check('says the docs/ file is deleted', /DELETED/i.test(r.stdout), r.stdout);
  check('does not name the rescued key as a failure', !/FAIL[\s\S]*loc-7:/.test(r.stdout), r.stdout);
}

console.log('\n(c) pure rescue → pass, reports rescued keys');
{
  const baseline = report({ renderKeys: KEYS_92 });
  const current = report({ renderKeys: KEYS_92.slice(0, 89) });
  const r = run(baseline, current);
  check('exit 0', r.status === 0, r.stdout);
  check('reports rescued=3', /rescued=3/.test(r.stdout), r.stdout);
  check('lists a rescued key', r.stdout.includes('cadastru-si-intabulare/alba/loc-91'), r.stdout);
}

console.log('\n(d) malformed report (header 3, bullets 2) → exit 2');
{
  const baseline = report({ renderKeys: KEYS_92 });
  const current = report({ renderKeys: ['a/b/c', 'd/e/f'], renderHeader: 3 });
  const r = run(baseline, current);
  check('exit 2', r.status === 2, r.stdout);
  check('says the report is malformed', /malformed/i.test(r.stdout), r.stdout);
  check('states header vs bullet counts', /header says 3, found 2/.test(r.stdout), r.stdout);
}

console.log('\n(e) new data-gate demotion → fail');
{
  const baseline = report({ renderKeys: KEYS_92, dataKeys: [] });
  const current = report({ renderKeys: KEYS_92, dataKeys: ['plan-topografic/cluj/viisoara'] });
  const r = run(baseline, current);
  check('exit 1', r.status === 1, r.stdout);
  check('names the data-gate key', r.stdout.includes('plan-topografic/cluj/viisoara'), r.stdout);
}

console.log('\n(f) emitted-pages floor');
{
  const baseline = report({ emitted: 2003, renderKeys: KEYS_92 });
  const current = report({ emitted: 1900, renderKeys: KEYS_92 });
  const r = run(baseline, current);
  check('exit 1 when emitted falls', r.status === 1, r.stdout);
  check('reports the drop', /2003 -> 1900/.test(r.stdout), r.stdout);
}
{
  const baseline = report({ emitted: 2003, renderKeys: KEYS_92 });
  const current = report({ emitted: 2010, renderKeys: KEYS_92 });
  const r = run(baseline, current);
  check('exit 0 when emitted rises', r.status === 0, r.stdout);
}

console.log(`\n${ran - failures}/${ran} checks passed`);
if (failures) {
  console.error(`${failures} check(s) FAILED`);
  process.exit(1);
}
