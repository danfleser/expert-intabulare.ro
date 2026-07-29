# PLAN — RANK FIRST

**Consolidated implementation plan · 2026-07-29 · Synthesis of 12 SERP captures, 12 competitor
extractions, 12 content specs and their adversarial reviews.**

**Binding inputs:** `SOP-serp-research.md` (§0 rulings are absolute) · `spec-seo-chair-verdict.md`
(D1–D15, W1–W3) · `research/seo-2026-07/serp/FINDING-cannibalization.md` · scratchpad `facts.md`.

**Read §0, then your own numbered task. Nothing else in this file is yours to act on.**

---

## 0. RULES OF ENGAGEMENT — every agent reads this, no exceptions

### 0.1 The gate. After **every** logical change, before **every** commit:

```
node generator/build.js && node generator/verify.js && node research/seo-2026-07/check-demotions.js
```

All three exit 0 or you revert. **Baseline is 0 demotions — the strictest setting the guard has.**
The guard compares the **key set**, not the count. A change that rescues three pages and demotes
three different ones passes a count check and destroys three live URLs. If `check-demotions.js`
names any key that is not in `research/seo-2026-07/baseline.txt`, you deleted a live page: revert,
rewrite, do not argue. Re-baselining (`cp generator/build-report.txt research/seo-2026-07/baseline.txt`)
is permitted **only** in the same commit as an intentional, reviewed rescue, and never to silence a
demotion you did not intend.

`verify.js` enforces **zero broken internal links** across 2,095 pages. Any link you emit to a page
that does not exist fails the build loudly. This is a feature — it is what makes conditional
breadcrumb reparenting (§1.3) safe.

### 0.2 Never hand-edit `docs/`. It is regenerated. All work lands in `generator/data/**` or
`generator/lib/**`. Never `git add .` — exact pathspecs only. Do not push; the operator decides.

### 0.3 Territories are exclusive for the whole cycle (SOP §4.1). Four writers, four disjoint file
sets. If you need something outside your set, **STOP and escalate**. Do not edit it "just this once".

| Agent | Owns, exclusively |
|---|---|
| **A-CODE** | `generator/build.js` · `generator/lib/*.js` · `generator/templates/*.html` · `generator/partials/*.html` |
| **A-SERVICES** | `generator/data/services.json` |
| **A-PLACES** | `generator/data/localities/*.json` · `generator/data/counties.json` · `generator/data/site.json` |
| **A-GUIDES** | `generator/data/guides/*.json` · `generator/data/dictionary/*.json` |

Only one agent holds the build lock at a time. Phases in §4 are strictly sequential; within a phase
only the named agent builds.

### 0.4 Gate arithmetic — memorise this before writing a single word of page content

`generator/lib/gates.js`, verified: `MIN_UNIQUE_WORDS = 120` page-exclusive words ·
`MAX_SHINGLE_OVERLAP = 0.7` pairwise vs worst sibling · `MAX_LEAF_BYTES = 61440` ·
`MAX_HUB_BYTES = 122880`. Sibling groups are **per service across all five counties**
(`build.js:208`): six services have **222** leaves, two have **92**, four have **0**.

Shingles present in **≥ half** the group are dropped as boilerplate *before* overlap is measured
(`gates.js:86`, `Math.ceil(n * 0.5)`). Therefore:

| Text you add | Document frequency | Effect | Verdict |
|---|---|---|---|
| Constant across all 222 leaves of a service | 100% | dropped as boilerplate | **SAFE for overlap** |
| Constant per **county** (Alba = 78/222 = 35.1%) | below cut | lands in the residual of 78 pages | **DANGEROUS — banned on leaves** |
| Constant per **BCPI office** (5–11%) | below cut | lands in the residual | **DANGEROUS — banned on leaves** (chair D4) |
| Constant per **profile** (urban 30/222 = 13.5%) | below cut | lands in the residual | **DANGEROUS — banned on leaves** |
| Genuinely per-locality × per-service | page-exclusive | **raises unique words** | **IDEAL** |

**There is no safe middle.** Either fully constant across the whole service group, or genuinely
per-page. Cosmetic variation — the same sentence with the place name swapped — is precisely what the
overlap gate exists to catch.

**Caveat that no "gate-safe" claim may omit.** A fully-constant block is overlap-neutral, but any
3-word run inside it that is *currently* a page-exclusive shingle on a thin page stops being
page-exclusive, and that page loses unique words. Measured: one page in the `cadastru-si-intabulare`
group sits at **exactly 120/120**, ~40 are within 20 words of the floor, ~119 within 40. This is the
mechanism recorded in `facts.md` §7, where a live page nobody edited was pushed from safe to 118
words while the demotion *count* fell. **Nothing in this plan is "gate-safe, cannot demote
anything". Ship one change at a time and diff the demotion KEY SET.**

### 0.5 Language of findings. SERP analysis is correlational. Write **"hypothesis, decided by the
GSC Pages report on 2026-08-19"**, never "will fix", "predictable output", "so Google stops
substituting", "not a speculative remedy". The chair verdict §5 already rules that a county hub
changing which URL Google serves is a hypothesis; no downstream document may promote it.

Confidence tags used in this plan, applied strictly:
- **[VERIFIED]** — a mechanically checkable fact about our own repo or the captured SERPs. Strong,
  but **not** the SOP §5 HIGH axis. Most of what follows is this.
- **[COHORT n/N]** — a pattern among **surveyor** results only, with the denominator stated.
  HIGH is reserved for near-unanimity at N ≥ 3. Below that, it is an observation, not a consensus.
- **[LOW]** — correlational only. Word count is always LOW, on every service, forever.

---

## 1. ROUTING PLAN — highest priority, upstream of all content work

### 1.0 The finding, across all 12 services

Across 21 captured SERPs on which we appear at all, **Google served the correct page 2 times.**
Everything else is one of three failure modes.

| Failure mode | Meaning | Services affected |
|---|---|---|
| **A — wrong locality** | Google substitutes a random village leaf for the city or the county | cadastru-si-intabulare, intabulare-teren, intabulare-casa-constructie, intabulare-apartament, dezmembrare-alipire, plan-topografic, trasare-teren, actualizare-carte-funciara |
| **B — wrong service** | Right town, wrong service page | intabulare-apartament (casă served), intabulare-casa-constructie (teren served), cadastru-si-intabulare (teren served), trasare-teren (teren + casă served), expertize-documentatii (teren + plan served) |
| **C — no page in the race** | The page that should rank does not exist | certificat-energetic, servicii-ocpi, topografie-constructii, expertize-documentatii (all four `hubOnly`), **plus the county tier of all 12** |

Complete measured routing ledger, service by service:

| Service | Query (tier) | Rank | Page Google **served** | Page it **should** serve | Mode |
|---|---|---|---|---|---|
| cadastru-si-intabulare | `cadastru si intabulare alba` (county) | #7 | `…/cadastru-si-intabulare/alba/noslac.html` | service×county hub — **absent** | A |
| cadastru-si-intabulare | `cadastru aiud` (town) | #7 | homepage `/` | `…/alba/aiud.html` | A |
| cadastru-si-intabulare | `cadastru si intabulare Aiud` (prior) | #5 | `…/intabulare-teren/alba/aiud.html` | `…/cadastru-si-intabulare/alba/aiud.html` | B |
| intabulare-teren | `intabulare teren aiud` (town) | **#1** | `…/intabulare-teren/alba/aiud.html` | same | **correct** |
| intabulare-teren | `intabulare teren extravilan alba iulia` | #7 | `…/alba/sibot.html` (66 km) | `…/alba/alba-iulia.html` | A |
| intabulare-teren | `intabulare teren Alba Iulia` (prior) | #9 | `…/alba/ohaba.html` (37 km) | `…/alba/alba-iulia.html` | A |
| intabulare-teren | `intabulare teren agricol alba` (prior) | #1 / #7 | `…/alba/cut.html` (55 km) / `…/alba/unirea.html` | county hub — **absent** | A |
| intabulare-teren | `intabulare teren alba`, `… mostenire alba` | absent | — | county hub — **absent** | C |
| intabulare-casa-constructie | `intabulare casa alba` (county) | **#2 and #9** | `…/alba/intregalde.html` (#2) **and** `…/alba/alba-iulia.html` (#9) | county hub — **absent** | A |
| intabulare-casa-constructie | `intabulare casa alba iulia` | #2 | `…/alba/alba-iulia.html` | same | **correct** |
| intabulare-casa-constructie | `intabulare casa aiud` | #4 | `…/intabulare-teren/alba/aiud.html` | `…/intabulare-casa-constructie/alba/aiud.html` | B |
| intabulare-casa-constructie | `cadastru casa aiud` | #8 | `…/cadastru-si-intabulare/alba/noslac.html` | `…/intabulare-casa-constructie/alba/aiud.html` | A+B |
| intabulare-apartament | `intabulare apartament alba` | #5 | `…/intabulare-casa-constructie/alba/alba-iulia.html` | county hub — **absent** | B+C |
| intabulare-apartament | `cadastru apartament alba iulia` | #9 | `…/cadastru-si-intabulare/alba/noslac.html` | `…/intabulare-apartament/alba/alba-iulia.html` | A+B |
| intabulare-apartament | `intabulare apartament aiud` | #3 | `…/intabulare-apartament/alba/ramet.html` | `…/intabulare-apartament/alba/aiud.html` | A |
| intabulare-apartament | `intabulare apartament Alba Iulia` (prior) | #4 | `…/intabulare-casa-constructie/alba/alba-iulia.html` | `…/intabulare-apartament/alba/alba-iulia.html` | B |
| dezmembrare-alipire | `alipire teren alba` (county) | **absent** | — | county hub — **absent** | C |
| dezmembrare-alipire | `dezmembrare teren alba` (prior) | #2 / #6 | `…/alba/berghin.html` (35 km) / `…/alba/teius.html` | county hub — **absent** | A |
| dezmembrare-alipire | `dezmembrare teren alba iulia` | #5 | `…/alba/spring.html` (52 km) | `…/alba/alba-iulia.html` | A |
| dezmembrare-alipire | `dezmembrare teren aiud` | **#1 and #3** | `…/alba/ciuruleasa.html` (69 km) **and** `…/alba/vadu-motilor.html` (76 km) | `…/alba/aiud.html` | A |
| plan-topografic | `plan topografic alba` | #3 / #8 | `…/alba/dostat.html` (53 km) / `…/alba/santimbru.html` | county hub — **absent** | A |
| plan-topografic | `plan topografic aiud` | #4 | `…/alba/dostat.html` (53 km) | `…/alba/aiud.html` | A |
| plan-topografic | `plan topografic Alba Iulia` (prior) | #2 | `…/alba/dostat.html` (53 km) | `…/alba/alba-iulia.html` | A |
| plan-topografic | `plan topografic … autorizatie de construire alba iulia` | absent | — | `…/alba/alba-iulia.html` | — |
| trasare-teren | `trasare teren alba` | #2 / #9 | `…/alba/mogos.html` (44 km) / `…/alba/rimetea.html` | county hub — **absent** | A |
| trasare-teren | `trasare teren alba iulia` | — | `…/intabulare-casa-constructie/alba/intregalde.html` | `…/trasare-teren/alba/alba-iulia.html` | A+B |
| trasare-teren | `trasare teren aiud` | — | `…/intabulare-teren/alba/aiud.html`, `…/alba/albac.html` (79 km) | `…/trasare-teren/alba/aiud.html` | A+B |
| trasare-teren | `trasare limite proprietate alba` | #3 / #4 | `…/alba/ocolis.html` (34 km) / `…/alba/lopadea-noua.html` | county hub — **absent** | A |
| actualizare-carte-funciara | `actualizare carte funciara alba` | #4 | `…/alba/avram-iancu.html` (**94 km**) | county hub — **absent** | A |
| actualizare-carte-funciara | `actualizare carte funciara alba iulia` | #4 | `…/alba/zlatna.html` (58 km) | `…/alba/alba-iulia.html` | A |
| actualizare-carte-funciara | `actualizare carte funciara aiud` | #4 | `…/alba/sugag.html` (**81 km**) | `…/alba/aiud.html` | A |
| topografie-constructii | `topografie constructii aiud` | #3 | `/servicii/topografie-constructii/` | same | **correct** |
| topografie-constructii | 3 Alba Iulia / county queries | **absent** | — | **do not exist** (`hubOnly`) | C |
| servicii-ocpi | 3 `extras carte funciara` queries | **absent** | — | **do not exist** (`hubOnly`) | C |
| certificat-energetic | 4 queries incl. home town | **absent** | — | **do not exist** (`hubOnly`) | C |
| expertize-documentatii | `expertiza topografica aiud` | #3 / #9 | `…/intabulare-teren/alba/aiud.html` / `…/plan-topografic/alba/rimetea.html` | **do not exist** (`hubOnly`) | B+C |

Two structural facts explain the whole table:

1. **`ls docs/servicii/*/*/index.html` → 0 matches.** There is no service×county node anywhere on
   the site, for any service, in any county. A county query has 78 sibling leaves and no parent to
   resolve to. [VERIFIED]
2. **Every leaf's BreadcrumbList position 3 is `/zone/<county>/`** — the *service-agnostic*
   county hub. In the hierarchy we hand Google, `intabulare-apartament/alba/alba-iulia`,
   `intabulare-casa-constructie/alba/alba-iulia` and `cadastru-si-intabulare/alba/noslac` are
   siblings at the same depth under the same node. Position 3 is not a path descendant of
   position 2 — the breadcrumb switches hierarchy axis mid-chain. Google is printing that chain as
   our display URL (`expert-intabulare.ro › … › Județul Alba`) on the captured SERPs. [VERIFIED]

Everything else measured is consistent with "the leaves are indistinguishable", not with "the served
page is better": Șpring (885 gated words) is longer than Alba Iulia (807); Doștat has **fewer**
inbound internal links (17) than every page it displaces (Alba Iulia 21, Aiud 20, Sebeș 21);
served and correct pages match on acte count, process count, schema set, FAQ count and CTA density.
**The served pages are not better. They are not distinguishable.**

### 1.1 R1 — Service×county hub pages (chair W1). Owner: **A-CODE** + **A-SERVICES**.

**Build 12 pages: `/servicii/<service>/alba/index.html`, one per service, Alba only.**

New builder in `generator/lib/pages.js`, exported and routed from `build.js`:

```js
// pages.js — new export, modelled on buildServiceHub (:493) but county-scoped
function buildServiceCountyHub(ctx, service, county, emitted) { … }
```

```js
// build.js — insert immediately after line 223 (`for (const s of services) allPages.push(pages.buildServiceHub(...))`)
const SERVICE_COUNTY_HUBS = new Set();                 // "<serviceSlug>/<countySlug>"
for (const s of services) {
  for (const c of counties) {
    if (c.slug !== 'alba') continue;                   // chair W1: Alba only in v1
    SERVICE_COUNTY_HUBS.add(`${s.slug}/${c.slug}`);
    allPages.push(pages.buildServiceCountyHub(ctx, s, c, emitted));
  }
}
ctx.serviceCountyHubs = SERVICE_COUNTY_HUBS;           // consumed by §1.3
```

`SERVICE_COUNTY_HUBS` must be populated **before** the `localityPages` render loop
(`build.js:196-217`) so the breadcrumb change in §1.3 sees it. Move the Set construction above the
render-gate fixpoint loop and only the `allPages.push` below it.

**Gate class: HUB.** `build.js:264` calls `gates.sizeGate(p.html, p.path.endsWith('/index.html'))`,
so these pages carry the **120 KB size gate only** — no unique-words gate, no overlap gate, and they
are not members of any sibling group (`build.js:208` groups `localityPages`, which come only from
`buildServiceLocality`). **12 new pages, zero demotion risk.** This is why routing is cheap and
content is expensive.

Sitemap: assign `section: 'serviciiAlba'`. Path `/servicii/<svc>/alba/index.html` cannot collide
with any leaf (`<locality>.html`) — no locality slug is `index`. [VERIFIED]

**Required page shape** (all data already exists; no new authoring except one paragraph per service,
authored by A-SERVICES into a new `service.countyIntro` field):

| Block | Source | Notes |
|---|---|---|
| H1 | `${service.name} în județul Alba` | Must say **«județul Alba»**, never bare «alba». Google's related block for `intabulare casa alba` offers *Bucharest* and *Cluj-Napoca* variants — it partly parses "casa alba" as a noun phrase. [VERIFIED] |
| Lead paragraph | new `service.countyIntro` | One paragraph per service. Names Alba Iulia explicitly and early — every city page in the cohort does. |
| **Orașe principale** | `localities.filter(countySlug==='alba' && type!=='comuna')` | **11 towns**: 4 municipii + 7 orașe. Above the A–Z list. Chair W3(c). Anchor text `${service.name} în ${loc.name}`, never the bare place name. |
| **Cele 5 birouri BCPI** | `counties.json` `alba.bcpiOffices` | Already authored: 5 offices with `name`, `address`, `covers[]` summing to exactly 78 UATs (Alba Iulia 15 · Aiud 16 · Blaj 12 · Câmpeni 22 · Sebeș 13). [VERIFIED] **Zero writing required.** Chair D4 puts this block on hubs and never on leaves — this is its home. |
| A–Z locality index | emitted leaves for this service × alba | Same shape as `buildServiceHub`'s `localityIndex`, but county-scoped. For the 4 `hubOnly` services this block is empty; the hub still ships. |
| Acte / process / price | `service.documents`, `service.process`, `service.priceRange` | Existing hedged price range only. No new figures. |
| **FAQ + FAQPage schema** | new `service.hubFaq` (§2.1) | **Mandatory.** A hub with 0 FAQ against leaves with 4–6 FAQ is strictly weaker than its own children on the one signal Google renders in the SERP. Do not ship a county hub without it — it would reproduce the defect it exists to fix. [VERIFIED] |
| Guides + dictionary links | new `service.resources[]` (§2.3) | The county hub is the natural home for the `/ghid/` and `/dictionar/` corpus. |
| WhatsApp CTA | `chrome.contactCard` | Per-service prefill. Verified gate-free (attributes are stripped before tokenizing). |

**Why hubs are the right unit here, stated with its N.** Across the surveyor cohorts of all 12
services, the page that ranks is a **company homepage or a single national service page**, not a
locality leaf: 6/6 (cadastru), 6/6 (topografie-constructii), 4/5 (expertize), 2/2 (plan-topografic),
1/1 (ocpi). **0 of ~30 competitor surveyor pages operate a per-locality matrix at all.** And our own
194-word `topografie-constructii` hub ranks **#3** on a town transactional query with no locality
text, no FAQ and no map-pack support. That is n=1 and correlational — but it is the only direct
evidence we have, and it points the same way as the cohort.

### 1.2 R2 — Do **not** flip `hubOnly` in this cycle. Decision, not a deferral.

`certificat-energetic`, `servicii-ocpi`, `topografie-constructii`, `expertize-documentatii` carry
`"hubOnly": true`; `build.js:181` and `:199` skip them in both gates, so each is **one HTML file for
the entire country**. Four of the twelve services have zero locality inventory. [VERIFIED]

Flipping the flag would emit 92 pages per service and is **blocked on three defects**:

1. `pages.js:356-372` would print *"documentația cadastrală se depune la BCPI …"* on 92
   `certificat-energetic` pages. **That is false** — an energy performance certificate does not go
   to BCPI. Requires a per-service `depunereTarget` field before the flag can move. [VERIFIED]
2. All four services have **`introVariants` length 0** (verified across `services.json`), so
   `pickIntroVariant` contributes nothing and the pages start materially thinner than any existing
   group against `MIN_UNIQUE_WORDS = 120`.
3. `certificat-energetic` is delivered *"împreună cu partenerii noștri auditori energetici
   atestați"* — see Aurel question 2 (§7). Publishing 92 locality pages for work we broker rather
   than perform is a claim we cannot verify.

**What ships instead:** all four services get a **service×county hub** under R1. That gives each of
them an Alba surface, a named-locality page, an FAQ, and a place for the `/ghid/` corpus — at hub
gate class, with zero demotion risk. Locality-leaf expansion is a separate decision, taken after
2026-08-19 and after the three defects above are closed. Do not re-propose it before then.

### 1.3 R3 — Conditional breadcrumb reparenting. Owner: **A-CODE**.

`pages.js:477-482`. Position 3 becomes the service×county hub **only where that hub exists**:

```js
const hasCountyHub = ctx.serviceCountyHubs &&
                     ctx.serviceCountyHubs.has(`${service.slug}/${loc.countySlug}`);
breadcrumbItems: [
  { name: 'Acasă', url: '/' },
  { name: service.name, url: `/servicii/${service.slug}/` },
  hasCountyHub
    ? { name: `Județul ${countyName}`, url: `/servicii/${service.slug}/${loc.countySlug}/` }
    : { name: `Județul ${countyName}`, url: `/zone/${loc.countySlug}/` },
  { name: loc.name, url: urlPath(pagePath) },
],
```

**The condition is not optional.** There are **892 non-Alba leaves** (6×144 + 2×14). Reparenting
them unconditionally emits BreadcrumbList `item` URLs for hubs that do not exist. `verify.js` would
fail the build on broken links — which is the correct outcome, but the guard belongs in the code,
not in the build log.

`/zone/<county>/` does **not** lose its inbound link: `hubLinksBlock` (`pages.js:439-442`) already
emits *"Toate serviciile în județul X"* on every leaf. Verified.

This edits `<head>`/JSON-LD only — outside the gated content region
(`gates.js` `contentTokens()` extracts strictly between `<!--content:start-->` and
`<!--content:end-->`). **Zero demotion risk.** [VERIFIED]

### 1.4 R4 — Meta description rebuild (chair D1 / W2). Owner: **A-CODE**.

`pages.js:457-460`. Today **every** leaf advertises the distance *from the customer* inside the
Google snippet, in a near-identical string differing only by service, locality and a number:

> `<Serviciu> în <Localitate>: acte, pași, prețuri orientative. Topograf autorizat ANCPI, aprox. <N> km de Aiud. Tel. 0741 478 540.`

Worst live instances found: `trasare-teren/alba/albac.html` **"aprox. 79 km de Aiud"** ranking #8 on
`trasare teren aiud`; `actualizare-carte-funciara/alba/avram-iancu.html` at 94 km ranking #4 on the
county query. [VERIFIED]

New rule:

```js
const metaTail =
  km === 0            ? `, birou chiar în ${loc.name}`
: (km != null && km <= 25) ? `, aprox. ${km} km de Aiud`          // genuinely a selling point
: ocpiName(loc)       ? `. Dosarul se depune la ${ocpiName(loc)}` // the useful fact instead
:                       '';
```

Meta tags sit in `<head>`, outside the gate. **Scope 1,516 leaves. Zero demotion risk.** Ship as its
own commit so the diff is auditable.

*Known edge case, accept it:* `plan-topografic/alba/rimetea.html` (24 km) keeps its distance clause
and is the page Google serves for an **Aiud** query. The threshold is measured against the
locality's own distance, not the searcher's. 24 km genuinely is close. Recorded, not fixed.

### 1.5 R5 — `loc.serviceNotes{}` (chair D5). Owner: **A-CODE** (render) + **A-PLACES** (data).

The measured mechanism for failure mode B: **the strongest page in a town wins that town's queries
regardless of service.** `intabulare-teren/alba/aiud.html` carries 908–910 gated words, 6 `<details>`
and «Aiud» ×49; the casă page has 894 words, 5 `<details>` and «Aiud» ×42. Google is not choosing
arbitrarily — it is choosing the strongest Aiud page, which happens to be about land. That one page
is served for **cadastru**, **casă**, **trasare** and **expertiză** queries. `grep -rn serviceNotes
generator/` returns **0 hits**: the chair-approved remedy is unbuilt. [VERIFIED]

**Render** — `pages.js`, ~15 lines, plus one new slot `{{serviceNoteBlock}}` in
`generator/templates/page-service-locality.html` (current slot inventory has 14 named placeholders
and none of them is this one — declare the template change, it is not optional):

```js
const note = (loc.serviceNotes && loc.serviceNotes[service.slug]) || '';
const serviceNoteBlock = note
  ? `<div class="mb-5"><h2 class="h5 mb-3">${escHtml(service.name)} în ${escHtml(loc.name)} — ce e specific</h2><p>${escHtml(note)}</p></div>`
  : '';
```

Renders nothing when the key is absent, so the render commit is a **zero-diff build**. Ship it
alone, confirm 0 bytes changed, then ship data.

**Data scope for v1 — exactly 16 notes, no more.** Every measured wrong-service collision is between
Aiud and Alba Iulia. Author `serviceNotes` for `alba/aiud` and `alba/alba-iulia`, for each of the 8
services that have leaves:

```
aiud, alba-iulia  ×  cadastru-si-intabulare · intabulare-teren · intabulare-casa-constructie ·
                     intabulare-apartament · dezmembrare-alipire · plan-topografic ·
                     trasare-teren · actualizare-carte-funciara
```

**Gate class: IDEAL.** Keyed by locality × service, each note renders on exactly **one** page.
16 notes touch 16 pages of 1,516 (1.1%) and are page-exclusive by construction — they *raise*
unique words. Measured margins on the targets are comfortable (alba/aiud 255 unique words / 46.9%
overlap; alba/alba-iulia 174 / 50.2%).

**Constraint on the shared boilerplate *between* the notes.** Text repeated across the 16 lands in
the residual of those 16 pages and raises their pairwise overlap with each other. SOP §4.7 applies:
**3-word shingle check against every existing `localNote` and the `pages.js` opener/closer pools; no
run of two or more consecutive shared shingles.**

**Content ban, verbatim, non-negotiable (chair D6 + SOP §0.5):** no PNCCF year, no sector number, no
parcel count, no completion status, no date, no ANCPI authorization number, no BCPI turnaround, no
price figure. Permitted subject matter is **geography, land-use pattern, document-type mix, and BCPI
office logistics** — nothing else. This is the single most likely fabrication site in the whole
programme: `aiud.ro` ranks for PNCCF systematic registration on both Aiud queries and
`primariasebes.ro` on Sebeș, so the temptation is documented and specific.

### 1.6 R6 — Link hierarchy (chair W3). Owner: **A-CODE**.

Link equity is flat to inverted, by file count, not by impression:

| Page | Files linking to it |
|---|---|
| `plan-topografic/alba/vadu-motilor.html` (commune, ~1,400 people) | **23** — site maximum |
| `plan-topografic/alba/alba-iulia.html` (county seat) | 21 |
| `plan-topografic/alba/aiud.html` (our own town) | 20 |
| `plan-topografic/alba/dostat.html` (**the over-served page**) | **17** |
| `intabulare-casa-constructie` alba-iulia / întregalde / aiud | 21 / 19 / 20 |

**State this honestly:** the over-served page has *fewer* inbound links than every page it displaces.
**W3 must not be presented as the cure for Doștat.** It is worth doing on general grounds — a
hierarchy is a better signal than a mesh — and its effect here is untested.

Three sub-items, in ascending order of risk:

- **W3(a) — anchor text, hub pages only.** `pages.js:544` emits `>${l.name}<`. Change to
  `${service.name} în ${l.name}`. Applies to `buildServiceHub`'s `localityIndex`, the new county
  hub's index, and `buildCountyHub`. Hub gate class ⇒ **gate-free.**
- **W3(c) — "Orașe principale" block.** Already specified as part of R1. Hub-only ⇒ **gate-free.**
- **W3(b) — leaf `nearby` slot reservation.** `pages.js:430-436` slices 8 nearby localities by
  distance. Reserve 2 of the 8 for the locality's **anchor town** and the **county seat**. This
  edits the **gated region** on 1,516 pages and it is the riskiest change in the plan. **Ships last,
  as its own commit, nothing else in it. Revert on any new demotion key.**

### 1.7 R7 — Kill the wrong-page amplifiers on leaves

Two leaf blocks actively help Google confuse our pages, both already ruled on by the chair:

- **BCPI office block on leaves** (`pages.js:370-376`, heading #2 of every leaf). On `cadastru casa
  aiud` Google chose, as the snippet for the **Noșlac** page, the sentence naming *BCPI Aiud, Str.
  Cuza Vodă nr. 14, Aiud*. The block names Aiud three times on every one of the 16 leaves in that
  catchment, so each reads as an "Aiud" page and the real Aiud leaf has no distinguishing signal.
  Chair D4 puts office content on hubs and never on leaves. Removing the render is **gate-positive**:
  `gates.js:25` tests `loc.ocpiOffice` on the **record**, not the render, so no data slot is lost,
  and office-constant text sits at 5–11% of the sibling group — inside the residual — so removing it
  *lowers* overlap. **A-CODE ships this in Phase 4, with the office fact preserved on the county hub
  and inside the meta description (R4).**
- **County `feeNote` must never reach a leaf.** `counties.json` carries five distinct `feeNote`
  strings. On the six 222-page services Alba is 78/222 = 35.1% — **below the boilerplate cut** — so a
  county-constant block would land in the residual of 468 live leaves. It belongs on
  `/zone/<county>/` (where it already is) and on the new service×county hub. **Do not move it.**

---

## 2. CROSS-SERVICE PATTERNS — template-level, gate-safe by construction

These hold across **multiple** services and are constant across all ~222 siblings of a service
group, so they are dropped as boilerplate before overlap is measured. They are the safest content
work on the board. Everything here is measured over the **surveyor cohort only** — directories,
marketplaces, blogs, government pages and forums are excluded from every denominator (SOP §3 Step 2).

### 2.0 What the cohort actually looks like, aggregated across all 12 services

| Attribute | Surveyor cohort, pooled | Us today | Verdict |
|---|---|---|---|
| Ranking unit is a **homepage / single national page** | 6/6 · 6/6 · 4/5 · 2/2 · 1/1 | 1,516 locality leaves | **structural: they have no matrix** |
| Publishes **any price figure** | **0/6 · 0/6 · 0/5 · 0/5** | hedged range, live | **we are ahead** |
| Any **duration / turnaround** claim | **0/6 · 0/6 · 0/5** | see §5 — live breaches to remove | **we are behind our own rule** |
| **FAQ** on the ranking page | **0/6 · 0/5 · 0/5 · 0/5** | 4–6 `<details>` + FAQPage on every leaf | **we are far ahead** |
| Any **JSON-LD / schema.org** | **0/6 · 0/6 · 0/5 · 0/5** | 4–7 blocks per leaf | **we are far ahead** |
| **WhatsApp** | **0/6 · 0/5 · 0/5** | 6–27 links per page | **we are far ahead** |
| Names a **specific BCPI/OCPI office** | **0/5** | yes, on every leaf | **we are far ahead** |
| **Per-locality depth** (names a village) | **0/6 · 0/5** | real distance, real office, real villages | **we are far ahead** |
| **Named individual surveyor** | 3/6 · 4/6 · 4/5 · 2/3 · 3/4 · 2/2 | **0 in the content region** | **GAP — cross-service** |
| Years-of-experience claim | 4/6 · 3/6 · 3/5 | "25+ ani" | at or above cohort |
| Portfolio / photos of executed work | 3/6 · 1/6 · 2/3 | none | gap, **deferred** (chair D14) |
| **ANCPI authorization number** | **0/6 · 0/5 · 0/5 · 0/11 · 0/2** | none | **NOT A GAP.** See §5. |

**The headline of this table is not the gap list — it is how far ahead we already are.** Do not let
any implementation agent "improve" a page by removing schema, shortening the FAQ, or trading the
WhatsApp CTA for a contact form. Those are our four largest measured advantages and no competitor in
30 pages has any of them.

**The second headline: word count is not the lever, on any service.** The #4 result on
`alipire teren alba` is a **90-word** page with no CTA, no phone, no price, no process and no FAQ,
ranking in its own county on a commercial query. `cadastrumartin.ro` ranks #4 on `intabulare casa
alba` with **375 words** and Google printed *«Lipsesc: casa»* against it — it ranks for a `casă`
query without the word on the page. We beat it from #2 at 831 words. The #1 result on two of four
`certificat energetic` queries is a **90-word** page. **Any proposal of the form "make the page
longer" is refused by the evidence. [LOW] on every service, forever.**

### 2.1 X1 — Populate `service.hubFaq` on all 12 services. **The single cheapest win on the board.**
Owner: **A-SERVICES**. Data only, zero code, zero routing dependency.

`pages.js:531-534` already renders `service.hubFaq` into the `{{faqBlock}}` slot of
`page-service-hub.html`, and `:577` already pushes `schema.faqPage(faqs)` into the hub JSON-LD.
**`hubFaq` is defined on none of the 12 services.** Consequence, measured in the built output:

| Page | `<summary>` FAQ blocks | `FAQPage` JSON-LD |
|---|---|---|
| All 12 service hubs | **0** | **0** |
| Every one of their 1,516 leaves | 4–6 | 1 |

**The hubs are strictly weaker than their own children on the one signal Google renders in the SERP.**
That is a mechanical, checkable reason a hub loses to its leaves. It also applies to every new
service×county hub, which is why R1 lists the FAQ as mandatory.

For the four `hubOnly` services this is worse: their 5–6 authored `faqPool` entries render
**nowhere on the site**. `faqPool` is read only by the leaf builder (`pages.js:410`), and they have
no leaves. 23 finished, approved answers are dead data.

**Implementation, precisely:**
- Author 4–6 `hubFaq` entries per service, drawn from the existing approved `faqPool` text.
- **`hubFaq` entries are rendered literally — `pages.js:532` does NOT call `fillParams`.** Any
  `{locality}` / `{ocpi}` / `{judet}` placeholder will ship as literal braces. Rewrite each entry
  for the hub voice with no placeholders.
- **Exclude every entry carrying a duration claim** — `services.json:90`, `:217`, `:561`, `:1012`
  (see §5). Those are being removed from `faqPool` in Phase 0 anyway; do not resurrect them here.
- **This is not a `faqPool` resize and chair D13 does not apply.** `hubFaq` is a separate field on a
  separate builder. Copying text into it cannot change the document frequency of anything in the
  222-page leaf group. Verified by reading both call sites. **Do not touch `faqPool`'s length, and
  do not "pin" pool entries** — pinning is the D13 cliff by another name (measured: pinning 3 of 10
  entries drives *all ten* above the 50% cut and evicts the entire pool from the residual of all 222
  pages at once).

Closes, at once: cadastru G7 · dezmembrare G8 · plan-topografic GAP-2 · topografie-constructii G3 ·
certificat-energetic gap 2 · expertize gap 3 · servicii-ocpi G3 · actualizare-carte-funciara.
**8 of 12 services, one file, no code, no routing dependency. Ship it first.**

### 2.2 X2 — Name the human. Owner: **A-PLACES** (`site.json`) + **A-CODE** (render).

**[COHORT — the strongest cross-service pattern found]:** 3/6 · 4/6 · 4/5 · 2/3 · 3/4 · 2/2 across
six independent service cohorts name the individual surveyor on the ranking page — *Ing. Emanuel
MAXIM*, *Inginer Dipl. Martin Nicolae*, *Marius Popescu*, *ing. Gurita Ion*. Several photograph him.

On our side: `grep "Fleser Aurel"` inside the gated content region of any leaf returns **0**. The
name appears 4× in header/footer/JSON-LD only. `site.json` has `nap.name = "Fleser Aurel Expert PFA"`
— the legal entity — and **no `owner` key**. We render *"Topograf autorizat ANCPI, 25+ ani"* attached
to no human. [VERIFIED]

**Ship: `site.owner = { name: "Aurel Fleser", role: "topograf autorizat ANCPI" }`**, rendered as a
one-line trust element in the leaf and hub templates, constant across all 1,516 leaves ⇒ boilerplate
⇒ overlap-neutral.

Three hard constraints:
1. **No ANCPI authorization number, no slot, no placeholder.** SOP §0.1, and the cohort is 0 of ~30.
   See §5.
2. **Do not write «inginer».** The string appears nowhere in the repo as a claim about him; `grep`
   over `generator/data/`, `generator/partials/` and `generator/lib/` returns only unrelated uses
   ("lucrare inginerească"). It is inherited from the chair verdict's prose, not from data. Ship
   **«Aurel Fleser, topograf autorizat ANCPI»** — which matches the live claim — unless the CEO
   confirms the degree.
3. Renders nothing when `site.owner` is absent, so the code commit is a zero-diff build.

### 2.3 X3 — Connect the leaves to the corpus we already own. Owner: **A-SERVICES** + **A-CODE**.

**[VERIFIED, and it surprised me]:** measured inside the gated content region of three sampled
leaves across three services — **0 links to `/ghid/`, 0 links to `/dictionar/`, 1 link to `/zone/`.**
The only hub link block (`pages.js:439-442`) emits exactly two links. We own **53 guides** and
**305 dictionary terms** and not one service leaf points at any of them.

Concrete losses this causes, one per service, all measured by the spec agents:
- `actualizare-carte-funciara`: **20** `/ghid/` articles declare this service; **0 of 92 leaves**
  link to any of them.
- `intabulare-teren`: `/ghid/pasi-intabulare-teren-mostenit.html` exists and **0 of 222 leaves**
  link to it, on a service whose county query is `intabulare teren mostenire alba`.
- `trasare-teren`: `/dictionar/trasare.html`, `/dictionar/trasarea-constructiilor.html`,
  `/dictionar/proces-verbal-de-trasare.html`, `/dictionar/stereografic-1970-stereo-70.html`,
  `/dictionar/coordonate-stereo-70.html` all exist; **"Stereo" appears 0 times across all 222
  `trasare-teren` service pages.**
- `servicii-ocpi`: 2,058 pages link to the 191-word hub; **16** link to
  `/ghid/extras-carte-funciara-online.html` (972 words, 6 FAQ, FAQPage) which actually answers
  the query.

**Implementation:** new `service.resources[]` in `services.json` — 3–5 `{ href, label }` per service,
pointing at existing `/ghid/` and `/dictionar/` pages. Rendered by A-CODE as a `chrome.linkCard`
into a new `{{resourcesBlock}}` slot on **both** `page-service-locality.html` and
`page-service-hub.html`, and on the new county hub.

**Gate class:** the link set is constant across all 222 leaves of a service ⇒ document frequency
100% ⇒ boilerplate ⇒ **overlap-neutral**. Byte cost ~400 B against 33 KB of headroom. The residual
risk is the unique-word collateral described in §0.4 — ship alone, diff the key set.

**Precondition, absolute:** a leaf may not link to a guide that breaches SOP §0.2 or §0.5. See §5 and
Phase 0. `/ghid/cadastru-gratuit-pnccf.html` is **not linkable** until it is cleaned.

### 2.4 X4 — Retarget the four `hubOnly` hubs in the head layer. Owner: **A-SERVICES**.

`<title>`, `metaDescription` and `h1` sit outside the gated region. Free.

- `servicii-ocpi`: `<title>Servicii OCPI — Topograf autorizat ANCPI</title>`, `h1: "Servicii OCPI"`.
  Names **no document and no place**. The word "extras" appears **once**, in a paragraph, and in
  **zero headings** — on a service whose three captured queries are all `extras carte funciara …`.
  The one surveyor that reached that SERP did so on a title naming the document. [VERIFIED]
- `topografie-constructii`: names "Alba Iulia" **0 times**; 6/6 cohort pages name it; three of four
  captured queries are Alba Iulia-anchored. [VERIFIED / COHORT 6/6]
- `certificat-energetic`: names "Alba Iulia" **0 times in 17,712 bytes**; `<title>` advertises
  *"Topograf autorizat ANCPI"* on an energy-certificate query, where 11/11 cohort providers present
  as *auditor energetic*. [VERIFIED / COHORT 11/11]
- `expertize-documentatii`: no judiciar/extrajudiciar split anywhere — see Aurel question 3.

### 2.5 X5 — What is cross-service but must **not** be done as a shared leaf block

| Tempting item | Why it is refused |
|---|---|
| Per-**county** `feeNote` / fee paragraph on leaves | Alba = 35.1% of a 222-group ⇒ residual ⇒ overlap on 468 live leaves. Chair D4. Hub only. |
| Per-**BCPI-office** block on leaves | 5–11% ⇒ residual. **And** it is a measured cause of wrong-page selection (§1.7). Hub only. |
| Per-**profile** (`urban`/`montan-apuseni`/`periurban`) leaf blocks | 13.5% / 16.7% / 16.2% ⇒ residual. Banned. |
| Pinning or resizing `faqPool` / `introVariants` | Chair D13, upheld. Measured: pinning 3 of 10 pushes all 10 above the cut. |
| Reshaping `services.json.documents` to a branched shape | **Ten of twelve specs propose an incompatible reshape of the same field**, and `documents` feeds `checklistBlock` for all 12 services. Single-owner schema decision, blocked on Aurel question 1. See §5 / §7. |
| Any new price, tariff, turnaround or duration | SOP §0.2. See §5. |

---

## 3. PER-SERVICE WORK

Surviving gaps only, ranked, after the adversarial review. Confidence tags per §0.5. **Every
service's routing item is R1/R3/R5 from §1 and is not repeated here.** Word count is [LOW] and
non-actionable on all 12 — it is omitted from every list below.

---

### 3.1 `cadastru-si-intabulare` — cohort N=6 · non-surveyor share ~7.25/10

Routing: mode A on the county query (Noșlac served), mode A on `cadastru aiud` (homepage served),
mode B on `cadastru si intabulare Aiud` (teren leaf served). **Google has never served the
locality leaf that matches the query, on any of seven cadastru-intent SERPs.** [VERIFIED]

1. **[VERIFIED][moves-rankings]** No service×county node → R1. Sibling group 222, Alba 78 (35.1%).
2. **[VERIFIED][moves-rankings]** The Aiud leaf is served for none of the three Aiud queries → R5
   `serviceNotes` for `aiud × cadastru-si-intabulare`, differentiating it from the teren leaf that
   currently outranks it.
3. **[COHORT 3/6][table-stakes]** Individual surveyor not named → X2.
4. **[VERIFIED][table-stakes]** Service hub has 0 FAQ and 0 FAQPage → X1.
5. **[COHORT 3/6][table-stakes]** No portfolio / proof of executed work → **deferred, chair D14.**
6. **BLOCKED — needs Aurel.** Per-case-type `Acte necesare` (intravilan · extravilan · moștenit ·
   construcție veche · construcție nouă cu recepție). `faqPool[2]` covers *moștenit* and `faqPool[9]`
   covers *construcție veche*, but **"intravilan", "extravilan" and "titlu de proprietate" appear
   nowhere in the 12-entry pool**, and the intravilan/extravilan axis has no source anywhere in
   `generator/data`. Writing per-case acte lists originates checkable factual claims about what BCPI
   requires, unsourced. See §7 question 1.
7. **NOT A GAP — do not action.** Map-pack ordering. We are **#1** on `cadastru si intabulare Aiud`
   and `topograf aiud` and **#3** on `cadastru aiud` behind the government BCPI office and Molnar.
   No page change can move a map-pack position (SOP §3 Step 1, §6). Note for the record: our review
   count (3) and Molnar's (5) were **identical across all three Aiud captures** while our position
   moved between #1 and #3 — the one variable that did not change cannot be the explanation. Record
   the counts; do not build a theory on them.
8. **Recorded:** `priceTable` is unique to this service among the 12 and renders on exactly 3 pages
   (hub + 2 guides), **zero leaves**. Not a defect; do not "fix" it by pushing it onto leaves.

---

### 3.2 `intabulare-teren` — cohort N=2 domains / 3 URLs (shortfall) · aggregator 24/36 (67%) · non-surveyor 32/36 (89%)

Routing: **1 of 5 queries correct** — `intabulare teren aiud` #1, correctly served. Three different
villages have been substituted for Alba Iulia across three separate captures (Ohaba 37 km, Șibot
66 km, Cut 55 km). The substitution is *unstable* — a different leaf each time. [VERIFIED]

1. **[VERIFIED][moves-rankings]** County tier has no page; both county queries (`intabulare teren
   alba`, `intabulare teren mostenire alba`) have nothing correct to resolve to → R1.
   Both fallbacks are disqualified: `/zone/alba/` has H1 *"Cadastru și topografie"*, no Service
   schema, no FAQ, no acte, no price; the national hub is 800 words, **thinner than its own 222
   ~900-word children**.
2. **[VERIFIED]** fact + **[MEDIUM]** hypothesis: the 222 leaves are indistinguishable on every
   scored field. 221 of 222 carry "km de Aiud" (Aiud is the sole exception via
   `distanceKmFromAiud: 0`); `alba-iulia.html` and `sibot.html` are identical on
   sectionsPresent / process 6-6 / acte 5-5 / price / schema 7-7 / ctaStyle. That they are
   indistinguishable is a fact. That this *causes* the substitution is a hypothesis for 2026-08-19.
3. **[VERIFIED][moves-rankings]** `/ghid/pasi-intabulare-teren-mostenit.html` is orphaned: **0 of
   222 leaves link to it** → X3. *(The guide contains 0 "Alba" and 0 "Aiud". Biasing a single
   national guide to one county is a cross-county decision — **escalate, do not action inside this
   service.** The leaf→guide link needs no such decision and ships on its own.)*
4. **[VERIFIED][table-stakes]** `counties.json alba.bcpiOffices` — 5 offices, `covers[]` summing to
   exactly 78 UATs — is authored and rendered nowhere. **Zero writing required.** Hub only (D4).
   Strongest item in the service.
5. **[COHORT 2/2, N=1 firm][table-stakes]** Named person absent from the content region → X2.
6. **[n=1 observation][table-stakes]** Process starts three institutions too late (source:
   `startcad.ro`, a Constanța firm Google flagged *"Lipsesc: alba"*). Costs nothing, breaks no rule,
   needs no timeframe. Ship it, but do not call it a consensus.
7. **[n=1 observation][table-stakes]** We cite no legal instrument. **HARD CONDITION: verify any
   ODG/ordin number independently against the official source, never copy it from a competitor
   page.** An out-of-date ordinance number is worse than none.
8. **CUT — do not implement.** Pinning `faqPool` entries (moștenire / cadastru sistematic /
   arendă-APIA). `pages.js:412` is `const count = 4 + (faqSeed % 3)`, so pinning three leaves as
   few as one variable slot. This is a `faqPool` resize wearing a different name. **Chair D13.**
9. **BLOCKED.** Reshaping `documents` to `intravilan[] / extravilan[]` — see §2.5 and §7 question 1.

---

### 3.3 `intabulare-casa-constructie` — cohort N=1 in-cohort (shortfall) · aggregator 22/36 (61%) · non-surveyor 30/36 (83%)

Routing: correct on **1 of 4**. The cleanest evidence on the whole board: on `intabulare casa alba`
**two of our own pages appear on the same SERP** and Google ranked `…/alba/intregalde` (a Trascău
commune of a few hundred people) at **#2**, seven positions above `…/alba/alba-iulia` at **#9**.
Every earlier observation showed only the wrong page; here Google compared two of ours and preferred
the village. [VERIFIED]

1. **[VERIFIED][moves-rankings]** Our own pages are the competitive set: **1** third-party surveyor
   page in 36 organic results. We are not losing to competitors; we are losing to ourselves.
2. **[VERIFIED][moves-rankings]** No service×county node → R1. Hub H1 and lead must lean on
   **«județul Alba»** and named Alba localities, never the bare token «alba» (Google's related block
   offers Bucharest and Cluj-Napoca variants — it partly parses "casa alba" as a noun phrase).
3. **[VERIFIED][table-stakes]** Alba Iulia lacks both branch-defining questions of its own service.
   Its 4 FAQ are *vând casa neînscrisă · banca îmi cere · am demolat · cât durează*; it carries
   **neither** «Casa e veche și nu are autorizație de construire» **nor** «Am recepția făcută».
   Aiud carries both; Întregalde carries the old-house one. **Remedy is `serviceNotes` prose and the
   hub FAQ, NOT per-page FAQ pinning** — there is no per-page pin mechanism, and the service-level
   `faqRequired` design proposed by the spec would add 3 FAQ to all 222 pages and evict the whole
   pool from the residual. **Cut.**
4. **[VERIFIED][moves-rankings]** `intabulare-teren/alba/aiud.html` (908 words, 6 FAQ, «Aiud» ×49)
   beats the casă page (894, 5, ×42) on casă queries → R5 `serviceNotes` on both.
5. **[VERIFIED][moves-rankings]** Internal link equity flat: 21 / 19 / 20 files link to
   alba-iulia / întregalde / aiud; national hub anchor text is the bare place name → R6 W3(a)+(c),
   and W3(b) in Phase 4.
6. **[VERIFIED]** The BCPI office block is a measured misroute amplifier on this service → R7.
7. **[n=1 in-cohort][table-stakes]** Named human → X2. *(The "2 of 2 surveyors" figure in the spec
   counted `cadastrumaxim.ro`, which the source document flags `outOfCohort: true` and excludes from
   every consensus count. In-cohort N = 1. Ship X2 on the pooled cross-service evidence in §2.2, not
   on this denominator.)*
8. **NOT A GAP — closed.** `alba-iulia.villages` has 4 entries and that **is** the municipality's
   complete official list. Adding names would be inventing place data (SOP §0.5).
9. **Not addressable with page content, recorded for the CEO:** a Facebook page (Birou Cadastru Aiud
   — Molnar) is #1 on both Aiud queries, and `necesit.ro` ranks a provider profile for
   **FLEȘER ADRIANA — Topograf** on `cadastru casa aiud`, a competing entity sharing our principal's
   surname in our home town.

---

### 3.4 `intabulare-apartament` — cohort 4 extracted of 5 · non-surveyor 27/36 (75%)

Routing: **0 of 3 ranking queries correct.** We beat all four surveyor competitors on every attribute
Google can mechanically parse — FAQ (we 4–6, cohort 0/4), schema (we 4 blocks, cohort 0/4), itemised
apartment acte (we 5, cohort 0/4), WhatsApp (we 6 links, cohort 0/4) — and still lose, because Google
shows a page about houses or a commune of 1,700 people. [VERIFIED]

Note the sibling group here is **92**, not 222 (Alba 78 = **84.8%** — above the boilerplate cut).
Gate arithmetic differs from the six large services; recompute, do not assume.

1. **[VERIFIED][moves-rankings]** No service×county node → R1.
2. **[VERIFIED][moves-rankings]** Mode-B collision with `intabulare-casa-constructie` on both Alba
   Iulia captures → R5 `serviceNotes` on `alba-iulia × {apartament, casa}` and `aiud × apartament`.
   **Correction to the spec:** the BreadcrumbList position 2 is *already* service-specific
   (`/servicii/intabulare-apartament/`) and position 4 is *already* locality-specific; only position
   3 is cross-service. The chain is **invariant across correct and incorrect serves alike**, so it
   cannot explain the variance. R3 is still worth doing — it makes the hierarchy consistent — but it
   is not "the mechanism".
3. **[VERIFIED][moves-rankings]** The wrong page quotes the wrong price, roughly double. The
   casă page's `priceRange` is served on apartment queries. R1+R5 are the remedy; **do not change
   any price figure** (SOP §0.2).
4. **[COHORT 3/4][table-stakes]** No named person in the content region → X2.
5. **[VERIFIED][table-stakes]** The fee-vs-tax paragraph exists as a data field and reaches zero
   leaves. **It is `counties.feeNote` — per-county, five distinct strings.** On this 92-page group
   Alba is 84.8% (above the cut, safe) but the same code path is service-agnostic and would put it
   into the residual of 468 leaves on the six 222-page services. **Hub only. Do not put it on
   `buildServiceLocality`.**
6. **[VERIFIED][table-stakes]** The price paragraph carries no heading.
7. **CUT.** Per-locality `count` override at `pages.js:412` to force the credit / cost FAQ onto city
   leaves. Measured: the credit question sits at 26/92 = 28.3%; forcing it onto ~11 more pages moves
   it to ~40% — **more shared, still under the cut** — i.e. the worst band, driving overlap up on
   ~37 pages. Chair D13. *(The cost question is already at 69/92 = 75%, i.e. already boilerplate, so
   that half would be free — but the two must not ship bundled, and neither ships in v1.)*

---

### 3.5 `dezmembrare-alipire` — cohort N=5 · non-surveyor 18/27 (67%)

Routing: **correct page served 0 of 5 opportunities.** On our own home-town query we hold **#1 and
#3** and Google shows a searcher standing in Aiud two villages **69 km and 76 km** away, with those
distances printed in the snippet. [VERIFIED]

1. **[VERIFIED][moves-rankings]** No service×county node → R1. `alipire teren alba` has no page at
   all to blame — we are simply absent.
2. **[VERIFIED][moves-rankings]** **Half our own service is invisible.** `alipire teren` appears
   **0 times** in the corpus as a targeted phrase; the page is titled "Dezmembrare / alipire" so the
   term is present but carries no weight. On `dezmembrare teren alba` we rank #2; on
   `alipire teren alba` — the other half of the same page — we are absent. The county hub (R1) must
   carry an explicit `alipire` section with its own H2.
3. **[COHORT 4/4 — unanimous, the strongest single cohort finding in the programme][table-stakes]**
   **`certificat de urbanism`** is on every acte list in the cohort; we mention it once, hedged.
   3/4 also state the *when* trigger ("3 sau mai multe loturi"); 2/4 state the *where*
   ("se obține de la Primăria Locală"). This is the one place where near-unanimity at N≥3 genuinely
   exists — treat it as the template for what a real consensus finding looks like.
4. **[VERIFIED][moves-rankings]** Internal link equity flat to inverted → R6.
5. **[COHORT 1/5 + domain fact][table-stakes]** The mandatory **notary** stage is missing from 60% of
   our own pages, on a service where the notarial act is the operative legal step.
6. **[VERIFIED][table-stakes]** Hub has no FAQ → X1.
7. **[COHORT 1/5][table-stakes]** Named individual → X2.
8. **BLOCKED BY POLICY:** per-lot prices and turnaround tiers. Competitors publish
   *de la 500 LEI/LOT*, *60 lei / 300 lei urgent*, *~7 zile lucrătoare / 3 zile urgent*. **Recorded
   as intelligence. Not actioned.** See §5.

---

### 3.6 `plan-topografic` — cohort N=2 (both homepages) · non-surveyor 4/8 · 7/9 · 8/9

Routing: **4 of 4 ranking slots are the wrong page.** A ~500-person commune 53 km from the office has
been canonicalised by Google as *the* plan-topografic page for the whole county — **including the
query that names the town our office is in**. Its snippet reads *"aprox. 53 km de Aiud"*. [VERIFIED]

1. **[VERIFIED][moves-rankings]** No `plan-topografic × Alba` hub → R1.
2. **[VERIFIED][moves-rankings]** Hub has 0 FAQ / 0 FAQPage while all 222 leaves have them → X1.
   **This is the load-bearing item for this service:** it is the one mechanical reason a hub loses to
   its own leaves, and R1's new county hub reproduces the defect unless X1 lands with it.
3. **[VERIFIED][moves-rankings]** The **permit intent is unserved**: `plan topografic pentru
   autorizatie de construire alba iulia` returns us nowhere, and the permit vocabulary is absent from
   222/222 pages. The county hub needs an explicit *"pentru autorizația de construire"* section.
4. **[VERIFIED — inbound link counts, stated against the tempting conclusion]** Doștat has **17**
   inbound links, fewer than Alba Iulia (21), Sebeș (21), Aiud (20), Blaj (19) and Vadu Moților (23).
   **W3 is not the cure for Doștat.** Do it anyway (R6), but do not claim it.
5. **[COHORT 2/2][table-stakes]** Nobody is named on any of our 222 pages → X2.
6. **[MEDIUM][moves-rankings]** `ridicare topografică` is targeted by a glossary entry, not by the
   service → X3 (link the dictionary term from the service).
7. **[MEDIUM][table-stakes]** Our deliverable list is ~4 items; the #1 result's is 23. `documents`
   is 3 items. **This is the `documents` schema question — blocked, see §2.5 / §7 question 1.**
8. **[VERIFIED][moves-rankings]** Meta still advertises distance on the pages that rank → R4.
9. **CUT.** Per-locality FAQ `count` override ("our home-town page lost the lottery"). Chair D13.

---

### 3.7 `trasare-teren` — cohort N=3 (0 of 4 queries met the SOP floor) · non-surveyor 26/36 (72%)

Routing: **ranked on 4 of 4, correct page served 0 of 4.** Seven of our own URLs occupy 7 of 36
organic slots — 19% of page-1 inventory for this service — and not one is the page the searcher asked
for. [VERIFIED]

1. **[VERIFIED][moves-rankings]** No `trasare-teren × Alba` hub; both county queries answered by
   mountain communes (Mogoș 44 km, Rimetea 24 km, Ocoliș 34 km) → R1.
2. **[VERIFIED][moves-rankings]** Wrong-service cannibalization inside the same town:
   `intabulare-teren/alba/aiud.html` (910 words) beats `trasare-teren/alba/aiud.html` (908) on a
   *trasare* query; both have 6 `<details>`, 4 JSON-LD blocks, 28.4 KB, the same template and the
   same locality data. **Service prose is the only possible differentiator** → R5.
3. **[VERIFIED + n=1 cohort][moves-rankings]** Method and coordinate-system vocabulary absent:
   `grep -il stereo docs/servicii/trasare-teren/alba/*.html` → **0 of 78**; "GPS" appears once, in a
   process step. **We already own the content**: five `/dictionar/` entries cover exactly this
   ground → X3. Closing this requires **no new claims and no new research** — only routing the
   vocabulary we already publish onto the pages that need it. Best cost/benefit ratio in the service.
4. **[VERIFIED][moves-rankings/CTR]** `albac.html` meta reads "aprox. **79 km de Aiud**" while
   ranking #8 on `trasare teren aiud` — the worst instance found anywhere → R4.
5. **[COHORT 2/3][table-stakes]** No scope/responsibility boundary ("Inclus în tarif" / "Nu este
   inclus"). **New finding worth acting on:** `site.deplasareNote` and `partials/deplasare-block.html`
   already exist and render on **144 of 222** `trasare-teren` pages — all four non-Alba counties —
   and on **0 Alba pages** (`pages.js:394`, keyed `loc.countySlug !== 'alba'`). Our core market is
   the half with no scope statement at all. *Gate note: the block currently sits at 144/222 = 64.9%,
   already above the cut; extending it to Alba makes it 100% constant — still boilerplate, still
   overlap-neutral. Ship alone and diff the key set for unique-word collateral.*
6. **[COHORT 2/3][table-stakes]** Named individual → X2.
7. **Protect, do not regress:** 6 FAQ + FAQPage (C1 has 1, C2 and C3 have 0) · 5 numbered process
   steps ending at the proces-verbal · 4 JSON-LD blocks (none detectable on any competitor) · the
   BCPI office and its street address · named component villages with distances · WhatsApp-first
   conversion · correct diacritics (C2 has none at all).

---

### 3.8 `actualizare-carte-funciara` — cohort N=2 (shortfall on all 4 queries) · non-surveyor 33/36 (92%)

Routing: **three queries, three #4 rankings, three wrong pages, served at 94 km / 58 km / 81 km.**
The routing is not merely wrong — it is **anti-correlated with proximity**. [VERIFIED]

Sibling group is **92**, not 222. Recompute gate arithmetic.

1. **[VERIFIED][moves-rankings]** No service×county node; on the county query there is no correct
   page in existence → R1.
2. **[VERIFIED][moves-rankings]** The vertical is organised by **operation** (rectificare de
   suprafață · actualizare date imobil · notare/radiere · îndreptare eroare materială) and we ship
   one undifferentiated service page ×92. The county hub is where the operation split lives.
3. **[VERIFIED][table-stakes]** Our acte list is 4 generic items; **we already own the
   operation-specific list, unplumbed.** Plumbing existing authored data is not the same as
   inventing a per-case list — do the former only.
4. **[VERIFIED][moves-rankings]** **20 `/ghid/` articles declare this service; zero of the 92 leaves
   link to any of them** → X3. Largest single instance of the corpus-orphaning pattern.
5. **[VERIFIED][table-stakes]** Source defect: the stats band emits `25+ani experiență` with no
   space. One-line fix, `site.trustStats`. Owner **A-PLACES**.
6. **[VERIFIED][moves-rankings]** Meta description → R4. **Highest-value R4 instance on the site**
   (94 km / 81 km on ranking pages).
7. **[VERIFIED][table-stakes]** Our single strongest differentiator sits in an unheaded paragraph.
8. **Cheapest win in the service:** `acf-q3` (`actualizare carte funciara aiud`) is **9/9
   non-surveyor** — no competitor surveyor website exists on that SERP at all — and `aiud.html` is
   the only leaf that says the office is in the same municipality, names BCPI Aiud at Str. Cuza Vodă
   nr. 14 and lists all 10 satele aparținătoare. Google shows Șugag (81 km) instead. **R1+R3+R5 on
   Aiud is the whole job.**

---

### 3.9 `topografie-constructii` — cohort N=6 · non-surveyor 21/39 (54%, bimodal)

**Routing defect: NO.** The only service with a clean routing record — because it has no siblings to
cannibalize. `hubOnly: true`, one file. **We are not losing three of four queries; we are not entered
in them.** [VERIFIED]

The bimodality is the story: the two Alba Iulia queries at 3/9 and 3/10 non-surveyor are the
**lowest** anywhere in this research — real surveying firms contest the county capital, each ranking
with a **company homepage**. The Aiud query at 9/10 is one of the highest: nobody contests the town,
and both local rivals reach that SERP through Facebook only.

1. **[COHORT 6/6][moves-rankings]** **6/6 surveyors name Alba Iulia; our page names it 0 times.**
   Three of four queries are Alba Iulia-anchored → R1 (Alba county hub) + X4 (head-layer retarget).
2. **[COHORT n=1, but verbatim and checkable][moves-rankings]** Construction-site vocabulary absent.
   `topografiealba.ro` ranks **#3** on `topograf santier alba iulia` on ~500 words whose only
   distinguishing asset is the phrase set *"PAC, PUZ, PUD, lucrări topo, planuri de amplasament,
   urmărire de șantier, monitorizări volume, trasare limite și rețele de nivelment"*. **Our page has
   0 occurrences of all nine terms.**
3. **[VERIFIED][table-stakes + moves-rankings]** 6 authored `faqPool` entries render **nowhere on
   the site** → X1. Carries half of item 2's vocabulary in already-approved text.
4. **[COHORT 4/6][table-stakes]** No named individual → X2.
5. **[VERIFIED][moves-rankings]** `/zone/alba/` mentions this service **once**, in the nav, anchor
   text *"Topografie construcții"*, with no construction content → R6 W3(a).
6. **[COHORT 3/6][table-stakes]** No named reference projects. Our *"1052+ proiecte finalizate"*
   counter is unverifiable and is the weak substitute. **Blocked on real project names from Aurel —
   do not invent any.** Not one of the three questions; it can wait.
7. **NOT ADDRESSABLE:** absent from both Alba Iulia map packs (6 and 3 businesses, all with Alba
   Iulia addresses; ours is Aiud). No page change proposed. Chair D11.

---

### 3.10 `servicii-ocpi` — cohort N=1 (a homepage) · non-surveyor 20/27 (74%, highest in programme)

**Routing defect: NO — and that is worse, not better.** There is no wrong page being served because
there is no page in the race. One URL for 12 services × 5 counties × 222 localities. Absent from the
top 10 on all three queries including our home town. [VERIFIED]

**Consensus warning, binding:** 20 of 27 organic slots are extras-CF **delivery marketplaces**. SOP
§6 anti-pattern 1 forbids computing consensus over them. No gap here may be justified by "7 of 9
results do X" where those 9 are aggregators. The one surveyor who monetises this query does it
through a **national, locality-free** storefront — which argues *against* a locality matrix.

1. **[VERIFIED][moves-rankings]** The only page for this service **names no place and no document**
   in its title, H1 or URL. "extras" appears once, in a paragraph, in zero headings → X4. Head layer,
   outside the gate, **free**.
2. **[VERIFIED][moves-rankings]** `bcpiOffices[].covers` — the complete 78-UAT → office mapping — is
   authored and **rendered nowhere**. "Which office is mine, and where is it" is the core question of
   this query set, answerable from data we already hold, on a page nobody has built → R1. **The one
   thing on this SERP nobody else can publish.**
3. **[VERIFIED][table-stakes]** 6 authored `faqPool` entries unreachable → X1.
4. **[MEDIUM][moves-rankings]** No document-level differentiation: *extras de informare* vs *pentru
   autentificare* vs *extras de plan cadastral pe ortofotoplan* vs *copie din arhivă* are four
   different things. Our `/dictionar/` and `/ghid/` corpora already distinguish them → X3 + hub copy.
5. **[MEDIUM][moves-rankings]** No "why a person instead of a 49-lei button" argument. The only
   product a button cannot deliver — imobil negăsit în sistem, CF neconvertită/în arhivă, proprietar
   în diaspora, sarcini care ar trebui să oprească o semnătură — is exactly what `faqPool[1][2][5]`
   already say, on a page that renders none of them.
6. **[LOW, and self-refuting as a remedy]** 2,058 pages link to the 191-word hub; **16** link to
   `/ghid/extras-carte-funciara-online.html` which actually answers the query. The hub already has
   maximal inbound links and still does not rank, so **links are not the binding constraint here.**
   Fix the direction (X3) but do not expect it to be the lever.

---

### 3.11 `certificat-energetic` — cohort N=11 providers · **non-provider share 12/38 = 31.6%, the LOWEST in the programme**

**Routing defect: one class worse than everywhere else — there is no page to serve.** `hubOnly: true`,
one 17,712-byte file for the entire country. Absent from all four SERPs **including
`certificat energetic aiud`**, our home town, where our Business Profile holds map-pack #1 for
topography. [VERIFIED]

**Counterweight, stated honestly:** six of the seven providers on the county query hold **exact-match
domains** (`certificatenergetic.net`, `certificataudit.ro`, `certific.ro`, `certificat-energetic.ro`).
That is a domain factor no on-page work touches. Nothing here promises a position.

1. **[VERIFIED — hard blocker, fix before anything else on this service]** Live SOP §0.2 breaches on
   our own page: `hubIntro` says *"de regulă în aceeași săptămână"*; `faqPool[2]` says *"De regulă
   câteva zile de la vizita de releveu"*; `metaDescription` says *"eliberare rapidă"*. **These are
   duration claims. Remove them.** Phase 0, owner A-SERVICES.
2. **[VERIFIED][moves-rankings]** No Alba surface at all → R1 (county hub). **Do NOT flip `hubOnly`**
   — see §1.2 and Aurel question 2.
3. **[VERIFIED][table-stakes]** 5 authored `faqPool` entries render nowhere → X1.
4. **[COHORT 11/11][moves-rankings]** The `<title>` advertises *"Topograf autorizat ANCPI"* on an
   energy-certificate query. **11/11 cohort providers present as *auditor energetic*; 0/11 pair the
   two credentials.** → X4, constrained by Aurel question 2.
5. **[COHORT — every ranking cohort page has it in the H1][moves-rankings]** The page targeting Alba
   Iulia queries **never says "Alba Iulia"** — 0 occurrences in 17,712 bytes.
6. **[COHORT 5/11][moves-rankings]** No property-type segmentation. `cen-q4`
   (`certificat energetic apartament alba iulia`) is a **documented vacuum** — Google flags
   *"Lipsesc: apartament"* on 3/9 results and only #1 mentions apartments in its snippet.
7. **[COHORT 6/11 median][table-stakes]** `acte necesare` is 3 undifferentiated items against a
   cohort median of 6. Missing: year of construction, heating system, insulation/tâmplărie, previous
   bills, renovation history.
8. **NOT gaps — do not "fix" these:** JSON-LD 6 types vs **0/11**; process steps 4 vs cohort 3–6;
   WhatsApp 6 links vs 4/11; price at parity; "25+ ani" above cohort. And note: **every cohort
   `/aiud` page is ~5% locality-specific** — a title swap and one sentence, one with a photo captioned
   *"auditor energetic cluj"*, another with a **Mediaș** address on an *Alba Iulia* page. Their
   locality pages are doorways. Ours would not be. That is the strongest argument for eventually
   building inventory here — after Aurel question 2.

---

### 3.12 `expertize-documentatii` — cohort N=5 (4 of 5 rank a general homepage; **0 of 5 have a dedicated expertiză page**) · aggregator 15/36 (42%)

**Routing: a third failure mode — substitution-for-absence.** `hubOnly: true`. On
`expertiza topografica aiud` we rank **#3 with `intabulare-teren/alba/aiud.html`** and **#9 with
`plan-topografic/alba/rimetea.html`** — wrong service, and in the second case wrong locality too
(a commune 24 km away). Google is substituting from a neighbouring service because there is nothing
else of ours to serve. **Chair items W1 and `serviceNotes` do not address this case — differentiation
has nothing to differentiate.** [VERIFIED]

1. **[VERIFIED][moves-rankings]** The target page does not exist → R1 (county hub) + X4. **Do NOT
   flip `hubOnly`** until Aurel question 3 is answered.
2. **[VERIFIED][moves-rankings]** Nobody owns *topic × place*: **0 of 5** cohort pages has a
   dedicated expertiză page; `experttehnicjudiciar.com` is out of county. The intent is **undefended**,
   not lost. Treat the cohort as proof of a vacuum, not as a model for a service page.
3. **[VERIFIED][moves-rankings]** 6 authored on-topic FAQ entries render on **zero pages** → X1.
   Highest-leverage single item here.
4. **[BLOCKED — Aurel question 3][moves-rankings]** The **judiciar / extrajudiciar** product split is
   unnamed on our pages. This is the entire content axis of the service and we cannot invent it.
5. **[VERIFIED][moves-rankings]** Zero contextual internal links into this service → X3.
6. **[COHORT 4/5][table-stakes]** No named individual → X2.
7. **NOT A GAP:** price and duration. **0/5** cohort publish either. Our hedged range is at or above
   cohort. Nothing to close.
8. **Free crawl-freshness checkpoint:** our #3 snippet reads *"aprox. 2 km de Aiud"* — that is a
   **stale Google cache**; the repo emits *"birou chiar în Aiud"*. Do not re-open `facts.md` §12.1.
   Whether the snippet has refreshed by 2026-08-19 is a cheap independent read on crawl frequency.

---

## 4. IMPLEMENTATION ORDER AND TERRITORIES

Phases are **strictly sequential**. Only the named agent builds during its phase. Every numbered step
is **one commit** with exact pathspecs, gated by:

```
node generator/build.js && node generator/verify.js && node research/seo-2026-07/check-demotions.js
```

---

### PHASE 0 — POLICY CLEANUP. Nothing else ships until this is green.

*Rationale: R1 and X3 make hubs and leaves link into `/ghid/`. We cannot point new internal links at
pages that breach the CEO's own rules, and we cannot ship a plan that leaves live breaches in place.*

| # | Agent | Files | Work |
|---|---|---|---|
| 0.1 | **A-SERVICES** | `generator/data/services.json` | Remove the four duration claims: `:90` *"termenul obișnuit de soluționare este de ordinul săptămânilor … Contra taxei de urgență"* · `:217` *"De regulă câteva săptămâni de la depunerea dosarului complet"* (**live on 106 `intabulare-teren` pages including our #1 result**) · `:561` *"durează de regulă câteva săptămâni"* · `:1012` *"de regulă în câteva zile lucrătoare"*. Reword to capability without time: what we do, what the office does, what the client controls. **Measured live scope: 96 pages carry "termenul obișnuit de soluționare", 202 carry "taxei de urgență", 246 carry "câteva săptămâni".** |
| 0.2 | **A-SERVICES** | `generator/data/services.json` | `certificat-energetic`: strip *"de regulă în aceeași săptămână"* from `hubIntro`, the *"câteva zile"* answer from `faqPool[2]`, and *"eliberare rapidă"* from `metaDescription`. |
| 0.3 | **A-GUIDES** | `generator/data/guides/cadastru-gratuit-pnccf.json` | Remove **all** of: the PNCCF year (`2026`), the completion counts (`2.600` of `3.181` UAT), the parcel count (`3,4 milioane`), the duration (`3–6 săptămâni`), and the price `1.400–2.500 lei` (not in `services.json`; `1.400` appears on 11 pages sitewide). SOP §0.2 + §0.5 + chair D6. **Until this is green, `/ghid/cadastru-gratuit-pnccf.html` is NOT linkable from anywhere under `/servicii/`** (`grep -rl cadastru-gratuit-pnccf docs/servicii/` → currently 0; keep it 0 until then). |
| 0.4 | **A-GUIDES** | `generator/data/guides/*.json` | Sweep every guide for the same four categories. Report the list before editing. |
| 0.5 | **A-PLACES** | `generator/data/site.json` | `trustStats`: fix `25+ani experiență` → `25+ ani experiență`. Drop `2681+ colaborări` (chair B6). **Do not touch the footer `mailto:` — CEO has ruled: keep exactly as is.** |

**Do NOT touch:** `"răspundem de obicei în aceeași zi lucrătoare"` and the closer-pool
*"primiți răspuns concret, de regulă în aceeași zi"* (1,528 pages). That is **Aurel's own reply
time**, hedged, and explicitly approved (SOP §0.2). Removing the live hedged **price ranges** is
also an anti-pattern — they stay.

---

### PHASE 1 — ROUTING CODE. Owner: **A-CODE**, exclusively. 6 commits, in this order.

| # | Commit | Files | Gate class | Risk |
|---|---|---|---|---|
| 1.1 | **R4 meta description rebuild** | `lib/pages.js` | `<head>`, outside the gate | **zero** |
| 1.2 | **R1 service×county hub** — new `buildServiceCountyHub`, new `templates/page-service-county-hub.html`, route + `SERVICE_COUNTY_HUBS` Set in `build.js`, sitemap section | `build.js`, `lib/pages.js`, new template | hub size gate only (120 KB) | **zero demotion risk**; 12 new pages |
| 1.3 | **R3 conditional breadcrumb reparenting** | `lib/pages.js` | JSON-LD, outside the gate | **zero** — but the `hasCountyHub` guard is mandatory or `verify.js` fails on 892 leaves |
| 1.4 | **R6 W3(a) anchor text + W3(c) Orașe principale** | `lib/pages.js` | hub only | **zero** |
| 1.5 | **R5 `serviceNotes` render + `{{serviceNoteBlock}}` slot** | `lib/pages.js`, `templates/page-service-locality.html` | gated region, but renders nothing until data exists | **zero-diff build — verify byte-identical output before committing** |
| 1.6 | **X3 `{{resourcesBlock}}` render** (reads `service.resources[]`) | `lib/pages.js`, `templates/page-service-locality.html`, `templates/page-service-hub.html` | gated region; constant per service ⇒ boilerplate | **low** — renders nothing until data exists; zero-diff build expected |

**Do not batch. Rebuild and gate between every one of the six.**

---

### PHASE 2 — HUB AND SERVICE DATA. Owner: **A-SERVICES**, exclusively (`services.json` only).

| # | Commit | Work |
|---|---|---|
| 2.1 | **X1 `hubFaq` ×12** | 4–6 entries per service, no `{param}` placeholders (not interpolated), no duration claims. **The single cheapest win on the board.** Expect 12 hub pages to change and **0 leaves**. |
| 2.2 | **`countyIntro` ×12** | One paragraph per service for the new county hub. Must name «județul Alba» and Alba Iulia explicitly and early. |
| 2.3 | **X3 `resources[]` ×12** | 3–5 `{ href, label }` per service into existing `/ghid/` and `/dictionar/` pages. **`cadastru-gratuit-pnccf` only if Phase 0.3 is green.** Leaves change → **diff the demotion key set, revert on any new key.** |
| 2.4 | **X4 head-layer retarget ×4** | `metaDescription` / `h1` for the four `hubOnly` services (§2.4). Outside the gate. |
| 2.5 | **Per-service hub copy** | `dezmembrare-alipire` alipire section · `plan-topografic` permit section · `actualizare-carte-funciara` operation split · `servicii-ocpi` document types · `topografie-constructii` site vocabulary. Hub gate class only. |

---

### PHASE 3 — PLACE DATA. Owner: **A-PLACES**, exclusively.

| # | Commit | Work |
|---|---|---|
| 3.1 | **X2 `site.owner`** | `{ name: "Aurel Fleser", role: "topograf autorizat ANCPI" }`. **No «inginer». No authorization number, no slot, no placeholder.** Requires a one-line render from A-CODE — **escalate and hand off; do not edit `pages.js` yourself.** |
| 3.2 | **R5 `serviceNotes` data — 16 notes** | `alba.json`, on `aiud` and `alba-iulia` only, for the 8 services with leaves. SOP §4.7 3-shingle check against every existing `localNote` and both `pages.js` frame pools. **Content ban verbatim: no PNCCF year, sector, parcel count, completion status, date, price, tariff, turnaround, or ANCPI number. Permitted: geography, land-use pattern, document-type mix, BCPI logistics.** |
| 3.3 | **`trasare-teren` scope note** | Escalate to A-CODE: extend `deplasareBlock` to Alba (`pages.js:394`). Ships as an A-CODE commit in Phase 4. |

Ship 3.2 as **one commit per service** (8 commits, 2 notes each) so a demotion is attributable.

---

### PHASE 4 — GATED-REGION STRUCTURAL CHANGES. Owner: **A-CODE**. Highest risk. Last.

| # | Commit | Risk |
|---|---|---|
| 4.1 | **R7 remove the BCPI office block from leaves** (keep it on hubs and in the meta) | Expected gate-**positive** (office-constant text at 5–11% leaves the residual). Still: one commit, nothing else in it. |
| 4.2 | **`deplasareBlock` extended to Alba** (`pages.js:394`) | 144/222 → 222/222; already boilerplate. Watch unique-word collateral. |
| 4.3 | **R6 W3(b) — reserve 2 of 8 nearby slots** for the anchor town and the county seat | **The riskiest change in the plan.** 1,516 leaves, gated region. One commit, nothing else in it. **Revert on any new demotion key.** |

---

### PHASE 5 — PER-SERVICE CONTENT DELTAS. Owner: **A-SERVICES**, one service at a time.

Only §3 items tagged **[VERIFIED]** or **[COHORT n/N ≥ 3]** and not marked BLOCKED or CUT. In §3
order. One service, one commit, one gate run. Stop at the first new demotion key.

The only true near-unanimous cohort finding in the whole programme is
**`dezmembrare-alipire` §3.5 item 3 (`certificat de urbanism`, 4/4)** — ship that one first.

---

### After every phase: record the state

Append to `research/seo-2026-07/CLAIMS-REGISTER.md`: pages emitted, demotion key set, which commit,
what changed. The 2026-08-19 measurement is worthless without knowing what shipped when.

---

## 5. BLOCKED BY POLICY — recorded as competitor intelligence, never actioned

**Do not re-propose any of the following. Each has already been proposed at least once and refused.**

### 5.1 Prices, tariffs, per-lot rates

| Source | Type | Figure |
|---|---|---|
| necesit.ro (directory) | intabulare apartament | 560–810 lei (avg 630) |
| necesit.ro (directory) | dezmembrare / alipire | 250–880 lei/lot; alipire 1.000–1.500 lei |
| brig.ro (directory) | cadastru în Aiud | 336–2.100 RON |
| bizoo.ro / Cadastru Maxim (marketplace) | documentație intabulare apartament | 300 lei |
| cadastru24.ro + notariate.ro | notary fee, dezmembrare | min. 300 lei + 75 lei/imobil + TVA; ANCPI 40 lei |
| biroucadastru.ro (**surveyor**) | trasare | de la 500 LEI/LOT, OCPI taxes excluded |
| cadastrutopografie.ro (**surveyor**) | OCPI fee | 60 lei normal · 300 lei urgent |

**RULE:** the existing hedged orientative ranges in `services.json` are **ALLOWED and live on 1,526
pages — do not remove them.** Removing them is itself an anti-pattern (SOP §6). **Forbidden:** the
exact ANCPI tariff paid by the client, and **any new price figure not already in `services.json`.**

**And note what the cohort actually shows:** **0 of 6, 0 of 6, 0 of 5 and 0 of 5 surveyors publish a
price.** Every figure above comes from a directory or a marketplace. "Every competitor publishes
prices" is **false for the surveyor cohort**. Our hedged range is *ahead* of the cohort, not behind it.

### 5.2 Durations and turnaround

| Source | Claim |
|---|---|
| biroucadastru.ro (surveyor) | ~7 zile lucrătoare; 3 zile urgent |
| cadastrutopografie.ro (surveyor) | OCPI 7 zile normal, 3 zile urgent |
| certificat-energetic cohort | same-day / 24h delivery claims across the board |

**RULE:** no turnaround or duration claim about BCPI/OCPI processing, ever — *"se rezolvă în X
zile"*, *"aproximativ N zile lucrătoare"*, *"în aceeași zi"* applied to office processing,
*"termen de finalizare N zile"*. These are checkable facts about a government office that neither we
nor any agent knows. **Four such claims are live in `services.json` right now and Phase 0.1 removes
them.** Cohort note: **0 of 6, 0 of 6, 0 of 5 surveyors publish a duration either.**

**The one approved exception, already live, do not remove:** *"răspundem de obicei în aceeași zi
lucrătoare"* — that is **Aurel's own reply time**, hedged, and it stays.

### 5.3 The ANCPI authorization number — settled, and not a gap

**SOP §0.1, CEO ruling 2026-07-29, superseding an earlier approval: we do not publish it.** Not as a
number, not as a placeholder, not as a marked slot, not as "to be filled in later", not as a missing
trust signal, and **not as a question to Aurel.**

**The competitive data agrees, which makes this easy:** **0 of 6 · 0 of 6 · 0 of 5 · 0 of 5 · 0 of 11
· 0 of 2 — not one surveyor page in roughly thirty publishes an authorization number.** The trust
layer of this vertical is empty on that axis. **It is not a gap. Closing it would not close a gap.**

> ⚠️ **Conflict on record.** The task brief handed to this synthesis states the number is "already
> approved for publication but not yet supplied." That contradicts SOP §0.1, which is the later,
> in-repo, explicitly superseding ruling and is binding on this plan. **This plan follows SOP §0.1:
> no number, no slot, no question.** If the CEO wants to reverse it, the reversal is made by
> amending `SOP-serp-research.md` §0.1 in writing first; no agent may act on a second-hand approval.
> Nothing in this plan depends on the answer either way.

**Still allowed and already live — do not remove:** the generic claim *"Topograf autorizat ANCPI"*
(~6× per service page), and naming Aurel Fleser as the surveyor who does the work (§2.2 X2).

### 5.4 PNCCF numbers, dates, place data

No PNCCF years, sector numbers, parcel counts, completion status, or dates — anywhere, on any page,
in any `serviceNotes`, `localNote`, guide or hub. Chair D6: *"No per-village PNCCF claims anywhere."*
Demand is real (`aiud.ro` ranks for it on both Aiud queries, `primariasebes.ro` on Sebeș) and that
makes the temptation specific and documented. **Phase 0.3 removes the live instances.** No place data
may be invented either — `alba-iulia.villages` has 4 entries because the municipality has 4.

### 5.5 Other refusals

- **No email forms, no contact forms.** WhatsApp-first for conversion. The footer `mailto:` stays
  exactly as is — CEO ruling; proposing to touch it is out of order.
- **No page change may be proposed to move a map-pack position.** Map pack and organic are different
  ranking systems. Reviews, category, proximity and photos drive the pack; page content does not.
  Chair D11: reviews are a **CEO action**, in scope as an action, out of scope as code.
- **No claim that a fix produces a #1.** See §6.

---

## 6. WHAT THIS DOES NOT ESTABLISH

**SERP analysis is correlational. Nobody can promise a #1 — not from this data, not from this method.**

- **That Google serves Cut / Doștat / Ohaba / Șugag is a measured fact. That building a county hub
  changes it is a HYPOTHESIS** — well grounded in how hierarchy and internal linking generally work,
  unproven here. It is confirmed or refuted by exactly one thing: the Search Console **Pages** report
  on **2026-08-19** showing which URL Google serves per query. If the served URL does not change, the
  hypothesis failed and we say so.
- **Every "moves-rankings" tag in §3 is a ranking bet, not a finding.** The findings are the
  [VERIFIED] measurements. The remedies are hypotheses.
- **Domain authority is doing work no on-page change touches.** `cadastrumartin.ro` ranks #4 on
  `intabulare casa alba` with 375 words and without the query term on the page. Six of seven
  `certificat energetic` providers hold exact-match domains. Two of three `trasare` competitors with
  portfolios sit on materially older domains, where age is the more plausible driver than the photos.
- **Two-day-old rankings are unstable.** The site launched 2026-07-28. New sites often get a
  temporary boost that decays. #1 on `intabulare teren agricol alba` today may be lower on 19 August
  **regardless of anything we do**. A drop is not automatically our fault; a hold is not automatically
  our success.
- **Cohort sizes are small and honestly recorded.** Surveyor cohorts by service: 6 · 2 · 1 · 4 · 5 ·
  2 · 3 · 2 · 6 · 1 · 11 · 5. The SOP floor of 3 surveyor results per query was met on a minority of
  queries. **No cohort was padded with directories.** Where N ≤ 2, "2 of 2 surveyors" often means two
  pages of one firm — read every such figure at that weight.
- **Aggregator share and non-surveyor share are different numbers** and several source documents
  conflated them. Aggregator = directory + marketplace. Non-surveyor additionally includes blogs,
  government pages, news, social and forums. The corrected pairs: `intabulare-teren` 24/36 aggregator
  vs 32/36 non-surveyor; `intabulare-casa-constructie` 22/36 vs 30/36. High aggregator share is the
  winnability signal; the inflated figure inflates the winnability read.
- **Conversion changes are not measurable with what we have.** GSC counts clicks, not WhatsApp
  messages. The WhatsApp work is judged on reasoning, not evidence, unless enquiry sources start
  being noted.
- **The demotion guard measures page survival, not page quality.** Passing the gate means we did not
  destroy inventory. It says nothing about whether anyone ranks.

### Measurement gate — 2026-08-19, Google Search Console. Record all four, no exceptions.

1. **Position and impressions** for each of the ~21 captured queries.
2. **Which URL Google serves for each query** — the routing metric, and the only test of §1.
3. **Index coverage**: of 2,095+ pages, how many are *Indexed* vs *Crawled – currently not indexed*.
   **If the indexed share is small, the answer is fewer and stronger pages, not more** — and the
   `hubOnly` reversal in §1.2 stays refused.
4. **Map-pack position in Aiud and Ocna Mureș, against the review count on that date.** We hold
   Aiud at #1 with 3 reviews against a competitor with 5; Alba Iulia leaders have 32–39.

Nothing is promoted site-wide on the strength of this research alone.

---

## 7. OPEN QUESTIONS FOR AUREL — three, all genuinely blocking

Each blocks specific, named work. None is about prices, durations, or the ANCPI authorization
number (see §5.3).

---

**1. Ce acte cere concret BCPI pentru fiecare tip de caz — și în ce se deosebesc ele?**
Concret: (a) primă înscriere **intravilan**, (b) primă înscriere **extravilan** cu titlu de
proprietate (fond funciar), (c) imobil **moștenit**, (d) **construcție veche** fără autorizație,
(e) **construcție nouă** cu autorizație și recepție. Pentru fiecare: ce documente în plus față de
lista generală, și de unde le ia clientul.

*Blocks:* the `documents` schema decision and the per-case `Acte necesare` on **five** services —
`cadastru-si-intabulare`, `intabulare-teren`, `intabulare-casa-constructie`,
`actualizare-carte-funciara`, `plan-topografic`. Ten of the twelve content specs propose reshaping
the same `documents` field, in mutually incompatible ways, and none of them has a source: the strings
"intravilan", "extravilan" and "titlu de proprietate" appear **nowhere** in any `faqPool`, and the
intravilan/extravilan axis has no source anywhere in `generator/data`. Writing these lists without
Aurel means originating checkable factual claims about what a government office requires. **This is
the single most-blocking unknown in the programme.**

---

**2. Certificatul energetic — îl facem noi, sau îl face un auditor partener?**
Pagina spune azi *"împreună cu partenerii noștri auditori energetici atestați"*. Este exact așa?
Dacă da: lucrăm cu un auditor anume, sau cu mai mulți? Și acoperă județul Alba integral, sau doar
anumite zone?

*Blocks:* the entire `certificat-energetic` inventory decision. The cohort is **11/11 presenting as
*auditor energetic*, 0/11 pairing that credential with a topography credential** — so our `<title>`
currently advertises the wrong credential on every energy query. Building 78+ locality pages for work
we broker rather than perform is a claim we cannot verify, and it is also the difference between
retargeting the existing hub honestly and misrepresenting the service.

---

**3. Sunteți expert tehnic judiciar înscris pe lista instanței, sau facem doar expertize extrajudiciare?**
Iar dacă faceți expertize judiciare: pentru ce instanțe / ce tip de cauze (granițuire, revendicare,
partaj)?

*Blocks:* the whole content axis of `expertize-documentatii`. The judiciar/extrajudiciar split is
what the searcher is choosing between, `0 of 5` cohort pages own it, and the only competitor
positioned as judicial is out of county — i.e. the intent is undefended and winnable. **We cannot
invent which side of that line we are on.** Without the answer this service gets a county hub and the
`hubFaq` fix and nothing else.

---

*Not questions, but the two things only the CEO can do:* **ask every finished client for a Google
review** (we hold Aiud at #1 on three of them; Ocna Mureș is held by firms with one and four), and
**stay reachable for ~30 minutes** if another Google capture session is needed before 2026-08-19.
Chair D11: this is the highest-yield item on the board and it is free.
