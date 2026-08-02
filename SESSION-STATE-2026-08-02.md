# Session state — 2026-08-02

**Read this first in any new session.** It records where the site is, what was decided, what is
measured, and what is open. Everything here was verified in the repo or in Google Search Console,
not inferred.

Companion documents:
- `SOP-serp-research.md` — **binding process + all CEO rulings**. Section 0 is absolute.
- `PLAN-rank-first.md` — the 1,238-line implementation plan (mostly executed, see §5 below)
- `spec-seo-chair-verdict.md` — the MOE chair verdict ("routing before content")
- `research/seo-2026-07/` — 42 files: SERP captures, competitor extractions, per-service content specs, claims register

---

## 1. Where the site is

| | Value |
|---|---|
| Pages emitted | **2,523** (was 2,095 on 07-29, 1,357 before that) |
| Service × locality leaf pages | **1,944** across 12 services |
| Service × county hub pages | **60** (12 services × 5 counties) — there were **0** before 08-01 |
| Render-gate demotions | **0** (was 92) |
| Data-gate demotions | 0 |
| Sitemap | submitted 07-28, last read 08-02, **Success, 2,526 pages discovered** |
| Build | deterministic — 3 consecutive rebuilds byte-identical |
| Harness | `check-demotions.js`, 27/27 tests, baseline 0 (strictest) |

All 12 services have locality pages. The four that were `hubOnly` (`topografie-constructii`,
`servicii-ocpi`, `certificat-energetic`, `expertize-documentatii`) were promoted on 07-30.

---

## 2. GSC BASELINE — measured 2026-08-02, data window 07-25 → 07-31

**This is perishable. It is recorded here because the 7-day window will roll off.**

**Important:** this window ENDS 07-31. The routing fix (60 hubs, breadcrumb reparenting,
16 `serviceNotes`) went live **08-01**. So this is a *pre-routing-fix baseline*, not a verdict.

### Totals (7 days)
| Metric | Value |
|---|---|
| Clicks | 43 |
| Impressions | 1,770 |
| CTR | 2.4% |
| Average position | 13.7 |
| Distinct pages with impressions | **332** of 2,523 |
| Distinct queries | 257 |

*(The per-row table sums to 46 clicks / 1,943 impressions — GSC rounds the headline figures.)*

### By section — computed over all 332 rows
| Section | Pages | Clicks | Impressions | Impr share | Clicks/page |
|---|---|---|---|---|---|
| English | 17 | 3 | 445 | 22.9% | 0.18 |
| Guides `/ghid/` | 25 | **9** | 396 | 20.4% | **0.36** |
| **Service×locality leaves** | **176** | **17** | 361 | 18.6% | 0.097 |
| fonduri-europene | 28 | 6 | 266 | 13.7% | 0.21 |
| dicționar | 31 | 3 | 205 | 10.6% | 0.10 |
| parcuri-fotovoltaice | 32 | 1 | 117 | 6.0% | 0.03 |
| Service hubs | 9 | 0 | 36 | 1.9% | 0 |
| zone hubs | 4 | 2 | 34 | 1.7% | 0.5 |
| teren-agricol | 8 | 1 | 14 | 0.7% | 0.13 |

### What this actually says — read carefully, an earlier reading of it was wrong
1. **Service leaves deliver the most clicks of any section (17 of 46, ~37%)** and have the best
   CTR on the site (**4.7%** vs English 0.67%). They do *not* appear in a top-10-by-clicks view
   because their traffic is spread across 176 pages instead of concentrated. **Do not conclude
   from a top-10 list that they are failing.**
2. **But only 176 of 1,944 service leaves (9%) got a single impression in 7 days — 91% got zero.**
3. **Per page they are the least efficient thing on the site** — a guide produces ~3.7× the clicks
   of a service leaf. The model needs ~1,900 pages to produce what 25 guides produce.
4. **English is the weakest section**: most impressions (445), almost no clicks (3), CTR 0.67%.
   Highest visibility, lowest return.
5. Top queries carry **no locality** — `e terra` (21 impr), `cadastru` (18), `ocpi romania` (11),
   `intabulare casa` (11), `cat dureaza o intabulare` (8). All national and informational.
6. Google's **Page Indexing** report showed "3 indexed / 4 not indexed" — **that report is badly
   lagged** (its own chart ends 07-17). Ignore it; 332 pages demonstrably earned impressions.

### Live SERP positions verified 07-29 (Romanian locale, Alba geo, real Google)
| Query | Position | Page Google served |
|---|---|---|
| `intabulare teren agricol alba` | **#1** | Cut (a village 55 km away) — wrong page |
| `plan topografic Alba Iulia` | **#2** | Doștat (53 km) — wrong page |
| `dezmembrare teren Alba` | **#2** | Berghin (35 km) — wrong page |
| `topograf aiud` | **#4** | homepage — correct |
| `cadastru si intabulare Aiud` | **#5** | intabulare-teren page — near-miss |
| `intabulare apartament Alba Iulia` | **#4** | casă/construcție page — wrong service |
| `cadastru si intabulare Alba Iulia` | not in top 10 | — |

**Google Business Profile:** #1 in the Aiud map pack on both Aiud queries, with **3 reviews**.
Competitors: Molnar Aiud 5 · Cadastru MAXIM Alba Iulia 39 · Top-Cad 12 · Emaa 11 · Molnar Liviu 10.
Ocna Mureș map pack is held by firms with **1 and 4** reviews.

---

## 3. CEO RULINGS — consolidated. `SOP-serp-research.md` §0 is the binding copy.

| # | Ruling | Note |
|---|---|---|
| 1 | **Never display the ANCPI authorization number** | Reversed an earlier approval. Generic "Topograf autorizat ANCPI" is fine; naming Aurel is wanted. |
| 2 | **Footer `mailto:` stays exactly as is** | Not a violation. Do not remove or "upgrade" it. |
| 3 | **Existing hedged orientative price ranges stay** | Every competitor publishes prices. Invent no NEW figure. |
| 4 | **Duration numbers allowed AS FRAMED ESTIMATES** | Must read as an estimate AND point to WhatsApp/phone. Never a bare first-person promise with a clock. |
| 5 | **All 12 services offered and equal priority** | Aurel delivers all of them. |
| 6 | **Never mention delegation — and never DENY it** | Silence in BOTH directions. See §6. |
| 7 | **`trustStats` stays**, including "2681+ colaborări" | Overruled the plan, which wanted it dropped. |
| 8 | Formal Romanian (dumneavoastră) throughout | Pronouns AND verbs. |
| 9 | WhatsApp-first for conversion, no email forms | |

---

## 4. What shipped (67+ commits, 07-29 → 08-01, all live)

**Routing** — 60 service×county hubs (root cause of wrong-page serving: every leaf previously
hung off the service-agnostic `/zone/<county>/`, so `intabulare-apartament/alba-iulia` and
`intabulare-casa/alba-iulia` were siblings under one node); guarded breadcrumb reparenting;
meta description rebuild on 1,516 leaves (max now exactly 155 chars, 0 over).

**Content** — `hubFaq` on all 12 hubs (23 authored answers that previously rendered nowhere);
`countyIntro` ×12; `resources[]` linking leaves and hubs into the 53 guides and 305 dictionary
terms (there were **0** such links); `site.owner` naming Aurel inside the gated content region
(he appeared on 1,528 pages but **0 times** inside the content markers); 16 `serviceNotes` on
Aiud and Alba Iulia — the direct cure for "wrong service, right town".

**Defects fixed** — 92 discarded pages recovered to 0; the Aiud self-distance bug ("Aiud is
2 km from our office in Aiud", 8 pages); 333 pages of broken Romanian (`centrul de municipi`,
a non-word); `Sunteți exact unde trebuie` filler on 551 pages with a broken quote pair; the
whole site converted to formal register including 2,091 pages hidden in `lib/`; 13 false or
unverifiable claims; a false BCPI-lodging claim on 222 `trasare-teren` pages (caught in
unpushed commits, never reached production).

---

## 5. OPEN — what a next session should pick up

### Blocking nothing, but genuinely valuable
1. **Reviews: 3.** Highest-return action available and no agent can do it. A dozen requests to
   past clients would likely hold Aiud outright and make Ocna Mureș (1 and 4 reviews) winnable.
   Map-pack rank is driven by GBP signals — **page content cannot move it.**
2. **English section underperforms badly** — 445 impressions, 3 clicks, 0.67% CTR. Either the
   titles/metas mismatch intent, or the traffic is unqualified. Worth diagnosing before writing
   more English.
3. **PLAN-rank-first.md Phase 4.3 not shipped** — reserving 2 of 8 "nearby" link slots for the
   anchor town and county seat. An agent measured it and declined: it would demote live pages.
   To do it, first buy gate headroom (see §7), then retry.

### The 2026-08-19 measurement — the decision point
Check in GSC, in this order:
1. **Which URL Google serves per query** — the routing metric. Baseline in §2: Cut for
   `intabulare teren agricol alba`, Doștat for `plan topografic Alba Iulia`, casă for
   `intabulare apartament Alba Iulia`. **If those are unchanged, the routing fix failed — say so.**
2. **Index coverage** — how many of 2,523 are indexed vs "Crawled – currently not indexed".
   If the indexed share is small, the answer is fewer and stronger pages, not more.
3. Whether the share of service leaves earning impressions moves off **9%**.
4. Map-pack position vs review count on that date.

---

## 6. WARNINGS for future agents — each of these failed in practice

1. **The gate has ZERO margin.** Three pages sit at **exactly** `minUnique` 120 against a floor of
   120 — `cadastru-si-intabulare/sibiu/ludos`, `certificat-energetic/hunedoara/deva`,
   `intabulare-casa-constructie/sibiu/mihaileni`. Worst overlap **69.32%** against a 70% cap
   (`intabulare-teren/cluj/ceanu-mare`).
   Overlap is scored **against the sibling group's own size** (`gates.js:86`), and groups are
   per-service across all 5 counties (~222 pages, `build.js:208`). **Adding one Cluj locality can
   demote a page in Sibiu.** A demoted page is unlinked from `docs/` by the manifest sweep
   (`build.js:323`) and 404s a live, indexed, sitemapped URL. This fired **four times** during
   these sessions on pages nobody edited.
2. **Never trust the demotion COUNT — only the key SET.** A rescue can revive one page while
   silently killing another with the count unchanged or falling. This happened twice
   (`plan-topografic/mures/chetani`, `dezmembrare-alipire/alba/cergau`). `check-demotions.js`
   compares key sets for exactly this reason. **Never re-baseline to hide a regression.**
3. **The delegation denial shipped THREE times** — "nu preluăm lucrări ca să le dăm mai departe",
   "un singur interlocutor", "un singur topograf". Silence is required in BOTH directions:
   omitting a fact and asserting its opposite are different things. Note the legitimate exception:
   Aurel working *as* a subcontractor *for* solar developers is the opposite direction and is fine.
4. **Register sweeps kept missing things** because they only grepped `generator/data/**`.
   Informal forms lived in `generator/lib/` (`Printează lista`, 2,091 pages) and in the three
   hand-authored files. **Sweep `lib/`, `templates/`, `partials/` and the hand-authored pages too.**
5. **`docs/index.html`, `privacy-policy.html`, `terms-and-conditions.html` are hand-authored** —
   absent from `generator/manifest.json`, they survive rebuilds. They are the ONLY files under
   `docs/` that may be edited directly, and they drift silently. One of them is the homepage.
6. **Agents report accurately and still ship defects.** Every significant defect in these sessions
   was caught by the CEO pushing back on copy, or by an adversarial audit told to distrust every
   report. **Run the audits after the fleets, not instead of them.**
7. **Verify with the right grep.** Several "fixed" claims were wrong because the check was too
   narrow: a case-sensitive grep, a whole-page grep where the content region was meant, a
   top-10 list read as if it were the whole table.

---

## 7. Suggested next actions, in order

1. **Buy gate headroom** — enrich the three pages sitting at exactly 120 words and the ~13 under
   125. Cheap, and it unblocks Phase 4.3 plus any future locality addition.
2. **Diagnose the English section** — 445 impressions and 3 clicks is the largest unexploited gap
   on the site.
3. **Ask Aurel for reviews.** Not code. Highest return available.
4. **On 2026-08-19, run the §5 measurement** before doing any more content work. If routing did
   not change which URL is served, the next move is structural, not editorial.
