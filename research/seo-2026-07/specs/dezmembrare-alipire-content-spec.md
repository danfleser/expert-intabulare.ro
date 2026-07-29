# CONTENT SPEC — `dezmembrare-alipire`

**Date:** 2026-07-29 · **Stage:** SOP-serp-research.md §3 Step 5 (gap analysis) + Step 6 (content spec)
**Inputs:** `research/seo-2026-07/serp/dezmembrare-alipire-serp.md` ·
`research/seo-2026-07/competitors/dezmembrare-alipire-competitors.md` ·
`spec-seo-chair-verdict.md` (routing before content) · `SOP-serp-research.md` §0 (binding rulings)
**Cohort rule:** every consensus figure below is computed over the **surveyor cohort only**
(5 content-bearing pages). Directories, marketplaces, government and "other" are excluded.
**This is a spec, not copy.** No Romanian page prose is written here.

---

## 0. READ THIS FIRST — the routing defect

> **Google has never once served the correct page for this service.**
> Across **4 captured queries** it served **5 different wrong pages**. On our own home-town query
> we hold **#1 and #3** and Google shows a searcher standing in Aiud two villages **69 km and
> 76 km** away, with those distances printed in the snippet.

| Query | Tier | Our rank | Page Google served | Page it should serve | Defect |
|---|---|---|---|---|---|
| `alipire teren alba` | county | **absent** | — | `/servicii/dezmembrare-alipire/alba/` — **404, does not exist** | no page to serve |
| `dezmembrare teren alba` *(earlier session)* | county | **#2** / #6 | `berghin.html` (35 km) / `teius.html` (18 km) | same county hub — **404** | **YES ×2** |
| `dezmembrare teren alba iulia` | city | **#5** | `spring.html` (52 km) | `alba-iulia.html` (exists) | **YES** |
| `dezmembrare teren aiud` | town | **#1** | `ciuruleasa.html` (69 km) | `aiud.html` (exists) | **YES** |
| `dezmembrare teren aiud` | town | **#3** | `vadu-motilor.html` (76 km) | `aiud.html` (exists) | **YES** |

**Correct page served: 0 of 5 opportunities.**

Per the chair verdict (D2), **routing is upstream of content**. Sections S3–S12 below are worth
nothing until S1 and S2 ship. Any agent that starts by rewriting `aiud.html` is rewriting a page
Google does not show.

**Why the wrong page wins, measured — it is not a quality difference.** Șpring (885 gated words) is
*longer* than Alba Iulia (807). Ciuruleasa/Vadu Moților (799/801) against Aiud (841). All five carry
identical structure, identical 4-item acte list, identical 5-step process, identical schema set,
identical CTA density. **The served pages are not worse than the correct pages — they are
indistinguishable from them.** The template is so uniform that locality is the only variable, and
it is not a strong enough one.

---

## 1. Cohort, aggregator share, and what the cohort proves

| Query | Organic | Non-surveyor | Surveyor cohort |
|---|---|---|---|
| `alipire teren alba` | 9 | 4 | **5** |
| `dezmembrare teren alba iulia` | 9 | 8 | **0 — total shortfall** |
| `dezmembrare teren aiud` | 9 | 6 | **1 — shortfall** |

**Aggregator share: 18 of 27 organic slots (67%) are non-surveyor** — dead on the SOP's "roughly
6 of 10" prior. Two of three queries fell short of the 3–5 surveyor target; **no padding with
directories was performed**, per SOP §3 Step 3.

**Cohort size used for all consensus: N = 5 content-bearing surveyor pages** (6 URLs fetched;
`expert-topo.com/Articole` is a blog index with zero alipire content and is excluded from every
denominator).

**The structural fact that makes this service winnable:** **4 of the 5 competing surveyor domains
are not in Alba county**, and Google flagged `Lipsesc: alba` on three of them. The county-level
alipire intent is being answered by generic national pages because no genuinely local alipire page
is strong enough. The query is **unclaimed, not lost**.

**The method warning that governs this spec:** the cohort's **#4 result is a 90-word page with no
CTA, no phone, no price, no process and no FAQ** — cadastrumartin.ro, ranking in its own county on
a commercial query. On this SERP **content depth is demonstrably not the deciding variable;
locality and entity match are.** Anyone proposing "make the page longer" should be shown that page.

---

## 2. GAPS — ranked, confidence-tagged (SOP Step 5)

Confidence: **HIGH** = near-unanimous in the cohort AND mechanically checkable · **MEDIUM** =
majority pattern with a plausible mechanism · **LOW** = correlational only.

### G1 · [HIGH] [moves-rankings] — no service×county page exists, and the breadcrumb points away from the service

`/servicii/dezmembrare-alipire/alba/` returns **404** (verified: 78 `.html` leaves in that directory,
no `index.html`). The generator has exactly two hub builders — `buildServiceHub` (`pages.js:493`,
emits `/servicii/<s>/index.html`) and `buildCountyHub` (`pages.js:602`, emits `/zone/<c>/index.html`).
**There is no third builder.** The service×county tier the SERP is asking for is structurally absent.

Worse, the leaf breadcrumb — visible nav *and* `BreadcrumbList` JSON-LD (`pages.js:477-482`) — reads
`Acasă > Dezmembrare / alipire > Județul Alba > <Localitate>`, where **"Județul Alba" points to
`/zone/alba/`**. That page contains `alipire teren` **0 times**, `comasare` **0 times** and
`certificat de urbanism` **0 times**; its 160 occurrences of "dezmembrare" are *all* link labels in
78 locality rows. So the declared hierarchy routes the crawler from a dezmembrare leaf to a page
that is not about dezmembrare. Google is left to pick a village leaf, and it does.

→ **Chair-verdict W1, confirmed for this service.** This is the single highest-value item on the board.

### G2 · [HIGH] [moves-rankings] — half our own service is invisible: `alipire teren` appears **0 times** in the entire corpus

Mechanically verified across `docs/servicii/dezmembrare-alipire/**`, `/servicii/dezmembrare-alipire/index.html`
and `/zone/alba/index.html`:

| Phrase | Occurrences, corpus-wide |
|---|---|
| `alipire teren` | **0** |
| `alipirea terenurilor` | **0** |
| `comasare` | **0** |

Source-data composition is the cause: of the service's authored fields, **1 of 8 `introVariants`,
1 of 10 `faqPool` entries and 0 of 4 `documents`** address alipire. `documents[2]` is explicitly
scoped *"Certificat de urbanism pentru **dezmembrare**"* — so our own acte list does not cover the
alipire case at all. In the gated content region, alipire-root words run **4–10 per page against
15–16 for dezmembrare** (H1 and link labels excluded).

Result: we rank **#2 on `dezmembrare teren alba`** and are **absent from `alipire teren alba`** —
one service page, one half of it carrying no weight.

### G3 · [HIGH] [table-stakes] — `certificat de urbanism` is unanimous in the cohort and near-invisible on ours

| | Cohort | Ours |
|---|---|---|
| in the acte list | **4 / 4** — unanimous | 1 hedged mention per page |
| states the **trigger** ("3 sau mai multe loturi/parcele rezultate") | **3 / 4** | **no** |
| states the **source** ("se obține de la Primăria Locală") | **2 / 4** | **no** |
| states "**în original**" | 2 / 4 | no |

Ours reads *"Certificat de urbanism pentru dezmembrare, unde primăria îl cere"* — a hedge that tells
the reader nothing about whether it applies to them. This is simultaneously **the #1 related search
on our county query** (`Certificat de urbanism alipire terenuri`) and the cohort's most consistent
content element. **Publishable with zero numbers.**

### G4 · [HIGH] [moves-rankings] — internal link equity is flat to inverted, measured

Inbound internal links per leaf (measured by the extraction stage across `docs/`):

| Page | Links |
|---|---|
| **vadu-motilor** (comună, 76 km) | **25** |
| **spring** (comună, 52 km) | **24** |
| alba-iulia (county seat, ~74k) | 23 |
| **aiud** (home town, office here) | **22** |
| ciuruleasa | 18 |

**Two of the three pages Google actually serves are the two most internally-linked pages in the set,
and both are communes.** The sitemap adds nothing either: `sitemap.js:17` emits `<loc>` + `<lastmod>`
only — **no `priority`, no `changefreq`**. Confirmed by reading the source.

Causation is **not** established — Ciuruleasa ranks #1 on the *lowest* count in the table (18). What
is established mechanically is the **total absence of a hierarchy signal**: a 1,200-person mountain
commune outranks the county seat in internal link equity, so any tie is broken arbitrarily because
there is nothing to break it with. → **Chair-verdict W3, confirmed for this service.**

### G5 · [MEDIUM] [table-stakes] — the mandatory notary stage is missing from 60% of our own pages

New measurement, not previously reported. `faqPool` is rendered by a **seeded pick of 4–6 of 10**
(`pages.js:410-416`), so pool coverage is partial. Measured across all **78 Alba pages** of this service:

| FAQ | Pages where it renders |
|---|---|
| "În câte loturi pot dezmembra…" | 48 / 78 (62%) |
| "Cât durează o dezmembrare…" | 47 / 78 (60%) — **see §4 policy flag** |
| "Lotul dezmembrat are nevoie de drum de acces?" | **35 / 78 (45%)** |
| "Cât costă dezmembrarea unui teren?" | 32 / 78 (41%) |
| **"E nevoie de notar la dezmembrare?"** | **31 / 78 (40%)** |

The notary is not optional trivia — it is the second of the two stages without which nothing
registers, and it is the subject of **6 of the 8 related searches**. It currently reaches **40%** of
pages. Road access — a hard technical rule that decides whether the job is even possible — reaches 45%.

**The remedy is NOT a `faqPool` resize (D13 bans it).** It is to move the fact into an
**always-rendered** service-level field (`process` / `documents`), which is a different array and
not a pool change.

### G6 · [MEDIUM] [moves-rankings] — the alipire searcher's real question is the paperwork chain, and the cohort does not answer it

**6 of 8 related searches** on `alipire teren alba` are notarial/urbanistic: *certificat de urbanism
alipire terenuri* · *onorariu notar alipire terenuri* · *model certificat urbanism alipire terenuri* ·
*alipire terenuri notar* · *alipire terenuri legislație* · *alipire terenuri cu proprietari diferiți*.

**Only 1 of 5 cohort pages mentions `notar` at all.** We mention it **7–14× per page**. This is the
open field we are closest to owning. Two named sub-gaps, both verified at 0 occurrences on all five
measured leaves:

- **`proprietari diferiți`** — a top-8 related search. Our FAQ asserts the same-owner condition
  (*"aparțin acelorași proprietari"*) and **never addresses the different-owners case**.
- **`comasare`** — cadastrutopografie.ro ranks #8 titled *"Alipire si comasare teren"* and uses
  `comasare` as its body term throughout. We use it **0 times**, corpus-wide. Missing synonym.

### G7 · [MEDIUM] [table-stakes] — no case split, and no "you are blocked until you do this" framing

C6 (`expert-topograf.ro/dezmembrare-teren`) splits into **`CAZ 1 — cu construcții`** and
**`CAZ 2 — fără construcții`**, each with its own technical restrictions and its own acte list — the
owner self-identifies before reading anything else. It also states two hard rules: **every resulting
lot must have road access**, and **the new cadastral boundary may not pass through a building**.

C5 supplies the strongest single sentence in the study: **a building standing across two adjoining
parcels cannot be registered until the parcels are merged** — which converts alipire from a
nice-to-have into a blocker. Nothing on our pages says this.

All of it is publishable **without a single number**. We carry the road-access rule in one FAQ answer
that renders on 45% of pages, and nothing else here.

### G8 · [MEDIUM] [table-stakes] — the national service hub has no FAQ, and the generator field for one already exists and is unused

`/servicii/dezmembrare-alipire/index.html`: **0 `<details>`, 0 `FAQPage` JSON-LD** (verified).
Meanwhile `pages.js:531` reads **`service.hubFaq`** and, if present, emits both a visible FAQ block
and `FAQPage` schema. **`hubFaq` is populated on 0 of 12 services.** This is a **data-only** change,
zero code, and hub pages carry **only the size gate** — no unique-words floor, no overlap ceiling.
**0 of 5 cohort pages have a real FAQ block.** Free structural win, currently unclaimed.

### G9 · [MEDIUM] [table-stakes] — the one genuinely Alba-Iulia-specific procedural fact is unclaimed, and there is nowhere to put it

`emol.ro` ranks **#3** on `dezmembrare teren alba iulia` with the Consiliul Local's register of
approved dezmembrări, each with street and CF number (*"situat în Alba Iulia, str. Vasile Goldiș
înscris în CF nr. 73651"*). That is public confirmation that **dezmembrarea terenurilor din
domeniul municipiului routinely requires an HCL step**. Our corpus: `consiliul local` **0**,
`HCL` **0**.

It needs no invented number and it is genuinely Alba-Iulia-specific — but there is **no generator
slot for it**: `loc.serviceNotes{}` (chair ruling D5) is approved and **not yet shipped**, and per
**D4** an office- or county-constant block must **never** ship as shared text on leaves.

### G10 · [MEDIUM] [table-stakes] — the trust layer of the whole vertical is empty

**0 of 5** cohort pages publish an ANCPI authorization number, a review count, or a photograph of
the person who does the measurement. 1 of 5 names an individual, and only in link text. This is the
one differentiator **no competitor can copy quickly**. **BLOCKED on CEO question 1** (seria, numărul,
categoria) and on the review drive (D11). Not actionable by any content agent today; named so it is
not lost.

### G11 · [LOW] [table-stakes] — word count is not the lever

Cohort: 90 · 450 · 850 · 1200 · 1300 (median ~850). Ours: 799–885. **Parity.** And the #4 result is
the 90-word page. Correlational only. **Do not spend effort on length.**

### G12 · [BLOCKED BY POLICY] — per-lot prices and turnaround tiers

3 of 5 cohort pages publish turnaround, 3 of 5 publish prices, and biroucadastru.ro sells **urgency
as a named product tier**. Two independent sources corroborate **300 lei + 75 lei/lot** notary and
**7 normal / 3 urgent** OCPI days. **Ruling 0.2 is not overridden by corroboration.** Recorded as
intelligence only. **Not actioned. Do not re-propose.**

---

## 3. What the served-vs-correct comparison does *not* license

- The link table is **not** causation (Ciuruleasa: #1 on the lowest count).
- That a county hub will change which URL is served is a **hypothesis**, tested at the
  **2026-08-19 GSC gate** on the "which URL per query" metric — not on position.
- The cohort is small (5) and mostly non-local (4 of 5 outside Alba), reached almost entirely through
  one of three queries. Two queries returned 0 and 1 surveyors. Read every consensus figure with that
  denominator in view.
- **Nobody can promise a #1 from this.**

---

## 4. ⚠️ CARRIED FORWARD — policy flag needing a chair ruling before any agent touches `faqPool`

Live today in visible HTML **and** inside `FAQPage` JSON-LD, on **47 of 78 Alba pages (60%)** of this
service, and — because it lives in `faqPool` — across the full ~222-page sibling group:

> *"Documentația și recepția la **{ocpi}** durează **de regulă câteva săptămâni**, la care se adaugă
> programarea la notar … **Cu taxă de urgență, termenele OCPI se reduc.**"*

Genuinely ambiguous rather than a clear breach: **no number**, hedged twice (*de regulă*, *câteva*),
closer in kind to the approved *"răspundem de obicei în aceeași zi lucrătoare"* than to
*"7 zile lucrătoare"*. Against that: it is a claim about **how long a named government office takes**,
which is the exact subject ruling 0.2 protects.

Two facts the chair needs: **(a)** `county.feeNote` already ships an approved, number-free framing of
the same idea — *"pentru majoritatea serviciilor există și regim de urgență, cu tarif suplimentar"* —
so a compliant reword clearly exists; **(b)** `faqPool` sits at ~45% document frequency and **D13
bans pool resizing**, so any remedy must be an **in-place reword of the existing entry**, never an
add or a delete. **Not actioned here. Rule before any implementing agent opens `faqPool`.**

**Second item for the same ruling — price-unit framing.** Cohort quotes **per lot** (500 lei/lot;
200–700 lei/lot); we quote **1.000–2.500 lei per job**. A scanning customer reads us as dearer when
for a 3-lot split we may well not be. The range **stays** (ruling 0.2 — removing it is itself an
anti-pattern). Whether the **unit** may be restated needs a ruling, because it would mean deriving a
new figure.

---

## 5. CONTENT SPEC (SOP Step 6)

Three deliverables. **S1–S2 are routing and come first.** S3–S12 are content and are worth nothing
until S1–S2 ship.

### Placement rule that governs every section below (gate mechanics, `gates.js` + `build.js:208`)

The sibling group is **per SERVICE across ALL FIVE COUNTIES** (~222 pages). Therefore:

- **Service-level constant** (same text on all ~222 leaves) → ≥50% document frequency → **dropped as
  boilerplate before overlap is measured** → gate-neutral. It neither raises unique words nor drives
  overlap. **This is the safe home for S5–S9.**
- **County-constant (~35%), office-constant (5–11%) or profile-constant** text → lands in the
  **residual** → **drives overlap up**. **Never ship S10 as a shared leaf block** (D4).
- **Genuinely per-locality** text → page-exclusive → raises unique words. Ideal, but requires
  `serviceNotes` (not shipped).
- **Hub pages carry only the size gate** — no unique-words floor, no overlap ceiling. S1 and S12 are
  therefore demotion-risk-free.
- Byte headroom on leaves: ~27.5 KB used of a 61,440 cap. Not a constraint.
- Gate-neutrality is **expected, not assumed** — every change runs
  `node generator/build.js && node generator/verify.js && node research/seo-2026-07/check-demotions.js`
  with the **set-diff** guard, one change at a time.

---

### DELIVERABLE A — NEW PAGE: `/servicii/dezmembrare-alipire/alba/index.html` (chair-verdict W1)

*The page the county queries actually deserve. Blocked until the generator gains a service×county
hub route — see §6.*

| # | Section | Purpose — what it must answer | Data source | Policy |
|---|---|---|---|---|
| **S1** | **H1 + lead — name BOTH intents** | Must contain the literal strings **`alipire teren`** and **`dezmembrare teren`** plus the county. Today `alipire teren` appears **0 times** corpus-wide (G2). Claims the intent we are currently absent from. | `service.h1` (**code path exists at `pages.js:585`; field absent from data — a data-only add**), `service.hubIntro`, `counties.json` | safe |
| **S2** | **Localities — "orașe principale" first, then A–Z** | Chair-verdict W3(c). Must **not** present Alba Iulia and Vadu Moților as peers. Anchor text must be full ("Dezmembrare teren în Alba Iulia"), never a bare place name. | `localities/alba.json` `type` + `name`; emitted-set filter as in `pages.js:540` | safe |
| **S3** | **Certificatul de urbanism — când și de unde** | The **#1 related search**. When it is required (3+ resulting lots/parcels), that it is issued by the **primăria locală**, that it comes **before** the measurement, that it is needed **în original**. | Cohort-unanimous 4/4 (C2, C4, C5 verbatim) | **no numbers** — safe |
| **S4** | **Cele două etape: tehnică și juridică** | C6's framing, the clearest explanatory device in the cohort. Surveyor does the technical stage; the **notar public** does the legal stage; **nothing registers until both are done**. Directly answers `alipire terenuri notar` / `onorariu notar alipire terenuri`. | C6 structure, reworded | **no fee figures** |
| **S5** | **Alipire: condiții** | Adjoining boundaries required. **Same owners vs different owners** — the `proprietari diferiți` gap (G6), which our current FAQ actively closes off. State **`comasare`** as a synonym in running prose. | C5 + related-search cluster | safe |
| **S6** | **Când alipirea nu este opțională** | C5's blocker: a **building standing across two adjoining parcels cannot be registered until they are merged**. Turns alipire from nice-to-have into mandatory. | C5 | safe |
| **S7** | **CAZ 1 / CAZ 2 — cu construcții vs fără construcții** | Reader self-identifies before reading anything else. Each case: its own technical restrictions, its own acte. Plus the two hard rules — **every lot needs road access**; **the new boundary may not cross a building**. | C6 | safe |
| **S8** | **Acte necesare — raise 4 → ~6, with qualifiers** | Add the *when* and *where* on the certificat de urbanism; adopt C4's **"pentru fiecare lot în parte"** multiplier (the clearest statement in the cohort that alipire paperwork multiplies per parcel); adopt C2's **"de completat la biroul nostru"** annotation, which tells the client which forms are **our** job, not theirs. Must cover the **alipire** case, which `documents[2]` currently does not (G2). | C2/C4/C5/C6 · `service.documents` | safe |
| **S9** | **Cele 5 birouri BCPI din Alba — care dosar unde** | **0 of 5 competitors name a single BCPI office. We name all five.** The strongest differentiator we can ship today without a CEO answer. **Hub-only per D4.** | `counties.json` `alba.bcpiOffices[].covers[]` | safe |
| **S10** | **Terenuri din domeniul municipiului: pasul HCL** | G9 — Alba Iulia municipal land routinely needs a Consiliul Local step. Corpus mentions: **0**. | `emol.ro` #3 (procedure only) | **needs `serviceNotes`; NEVER a shared leaf block (D4)** |
| **S11** | **FAQ + `FAQPage` schema** | **0 of 5 competitors have one.** Free structural win. | `service.faqPool` / new `service.hubFaq` | **see §4 flag before touching `faqPool`** |
| **S12** | **WhatsApp CTA, prefilled** | **0 of 5 competitors have WhatsApp.** Prefill text is **gate-invisible** — the gate strips HTML attributes before tokenizing. | `chrome.contactCard`, `waTopic` | safe |

### DELIVERABLE B — LEAF TEMPLATE, all ~222 pages (service-level constants only)

Everything here is **service-level constant → boilerplate → gate-neutral** (see placement rule).

- **S8-leaf — `service.documents` 4 → ~6 with qualifiers.** Highest-value leaf change: `documents`
  is **always rendered** (`pages.js:395`), unlike `faqPool` at 40–62%. Carries S3's trigger and
  source, and covers the alipire case.
- **S4-leaf — the two-stage framing folded into `service.process`.** Also always rendered
  (`pages.js:396`). **This is the D13-safe remedy for G5**: it puts the mandatory notary stage on
  **100%** of pages instead of 40%, **without resizing `faqPool`**.
- **S7-leaf — road access + boundary-may-not-cross-a-building** as always-rendered process/acte text,
  not as a 45%-coverage FAQ entry.
- **S5-leaf — `comasare` and the alipire condition** introduced into `service.hubIntro` /
  `introVariants` wording so the synonym exists somewhere in the corpus.
- **Explicitly NOT here:** anything county-, office- or profile-constant (D4); any `faqPool` resize
  (D13); any per-locality text that merely swaps the place name (SOP §6 anti-pattern).

### DELIVERABLE C — `/servicii/dezmembrare-alipire/index.html` (national hub) — free, data-only

- **Populate `service.hubFaq`.** The code path already exists (`pages.js:531`) and is used by **0 of
  12 services**. Emits a visible FAQ **and** `FAQPage` JSON-LD on a page that has **0 of each** today.
  No code change, hub-size gate only. Also the natural home for S3/S4/S6 in national (non-county) form.

---

## 6. DATA REQUIRED FROM GENERATOR

**Verified present in `generator/data/services.json` (`dezmembrare-alipire`) — feeds the spec:**
`name` · `slug` · `shortName` · `tier2Available` · `hubOnly` · `metaDescription` · `hubIntro` ·
`introVariants` **[8]** · `process` **[5]** · `documents` **[4]** · `priceRange` · `faqPool` **[10]** ·
`related` **[4]**.

**Verified present in `generator/data/localities/alba.json` (78 records) — feeds S2, S9:**
`name` · `slug` · `county` · `countySlug` · `type` · `villages` · `lat` · `lon` ·
`ocpiOffice{name,address}` · `matrix` · `profile` · `countyNotesRef` · `localNote` · `nearby` ·
`distanceKmFromAiud` *(present on `aiud` as `0` — defect 12.1 is fixed in data)*.

**Verified present in `generator/data/counties.json` (`alba`) — feeds S9, and §4:**
`ocpiHq` · `bcpiOffices[5]` each with `covers[]` · `countyNote` · `feeNote`
*(`feeNote` already contains an approved, number-free urgency framing — relevant to the §4 ruling.)*

**Supported by the code but UNPOPULATED — data-only adds, no code change:**
- **`service.hubFaq`** — read at `pages.js:531`; populated on **0 of 12** services. **Unblocks S11/Deliverable C outright.**
- **`service.h1`** — read at `pages.js:585`; populated on **0 of 12** services. Needed for S1's query-shaped H1.
- **`service.priceTable`** — read at `pages.js:518`; used by `cadastru-si-intabulare` only. **Do not
  use here** — a per-lot table is exactly what ruling 0.2 forbids.

**MISSING — must be built, and each blocks named sections:**
1. **Service×county hub route + builder + template.** No third hub builder exists. **Blocks S1–S3,
   S9 and all of Deliverable A** — i.e. blocks the entire remedy for the routing defect. *(W1)*
2. **`loc.serviceNotes{ "<service-slug>": "<prose>" }`** — approved D5, **not shipped**. **Blocks
   S10**, and blocks any per-locality differentiation between the dezmembrare leaf and the
   intabulare-teren leaf in the same town — which is the second documented failure mode.
3. **Any alipire-scoped field.** There is no `documentsAlipire`, no second acte list, no
   alipire-specific process. Everything is one dezmembrare-shaped bag — the direct cause of G2.
4. **A synonym/alias field** (`comasare`, `dezlipire`, `parcelare`, `lotizare`). None exists.
5. **Sitemap `priority` and any locality-tier weighting.** `sitemap.js:17` emits `<loc>` + `<lastmod>`
   only. **Blocks G4/W3.**
6. *(Not missing — a note.)* `documents` is a flat string array, so S3's trigger/source qualifiers
   must be embedded **inside the strings**. No schema change needed.

---

## 7. BLOCKED BY POLICY

1. **Per-lot surveyor pricing** (cohort: 500 lei/lot; 200–700 lei/lot). Ruling 0.2. Recorded only.
2. **Any turnaround / duration claim** — 7 zile / 3 zile urgent (×2 independent sources),
   9 zile avizare OCPI, 2–3 zile execuție. Ruling 0.2. Recorded only.
3. **Urgency sold as a named product tier** (biroucadastru.ro). Ruling 0.2 — it is a duration claim
   with a price attached.
4. **The exact ANCPI tariff** (60 lei normal / 300 lei urgent; ANCPI 40 lei). Ruling 0.2 — we do not
   know it and will not republish a competitor's figure as ours.
5. **Notary fee figures** (min. 300 lei + 75 lei/lot + TVA, corroborated by two independent sources).
   The **structure** — that a notarial act is a mandatory second stage — is publishable; **the numbers
   are not**.
6. **Any invented count** of lots, parcels, days, PNCCF years or sector numbers. Ruling 0.5.
7. **ANCPI authorization number, reviews, photo** (G10) — not a policy ban but a **hard block on CEO
   question 1** and on D11. The one differentiator no competitor can copy quickly.
8. **AWAITING CHAIR RULING, do not action:** the live hedged BCPI-duration `faqPool` entry (§4,
   on 60% of Alba pages and service-wide via the pool) — and the **per-job vs per-lot price unit**,
   whose restatement would mean deriving a new figure.
9. **The existing hedged orientative price range stays.** *"1.000 – 2.500 lei, orientativ, în funcție
   de numărul de loturi"* + `site.priceDisclaimer` are **approved and live** — proposing to remove
   them is itself an anti-pattern (SOP §6).
