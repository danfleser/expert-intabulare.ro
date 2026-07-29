# CONTENT SPEC — `actualizare-carte-funciara`

**SOP-serp-research.md Step 6 · 2026-07-29 · no browser used, no SERP re-queried**
**Inputs:** `research/seo-2026-07/serp/actualizare-carte-funciara-serp.md` (4 captures),
`research/seo-2026-07/competitors/actualizare-carte-funciara-competitors.md` (Step 3+4 extraction),
`spec-seo-chair-verdict.md` (D1, D2, D4, D5, D6, W1–W3), `facts.md` §6 gate mechanics.
**Everything below marked "verified" was re-read out of this repo today, not carried over from the
extraction stage.**

This is a spec. It contains **no Romanian page copy** — section names, purposes, the question each
section must answer, and the data source. Writing is the implementation stage's job.

---

## 0. READ THIS FIRST — routing beats content on this service more than on any other

> **Three queries, three #4 rankings, three wrong pages, served at 94 km / 58 km / 81 km from the
> office. The routing is not merely wrong — it is anti-correlated with proximity. On the county
> query there is no correct page in existence to serve.**

Chair ruling D2 applies at full force here. **Every content section specified in §3 below is worth
zero until the page carrying it is the page Google shows.** If the implementation stage has budget
for exactly one thing on this service, it is §3.A (the service×county hub and the breadcrumb
reparenting), not any of the writing.

| Query | Tier | Our rank | Page Google served | Distance | Correct page |
|---|---|---|---|---|---|
| `actualizare carte funciara alba` | county | **#4** | `.../alba/avram-iancu.html` | **94 km** | **does not exist** |
| `actualizare carte funciara alba iulia` | city | **#4** | `.../alba/zlatna.html` | **58 km** | `.../alba/alba-iulia.html` — exists, unserved |
| `actualizare carte funciara aiud` | town | **#4** | `.../alba/sugag.html` | **81 km** | `.../alba/aiud.html` — exists, unserved |
| `rectificare suprafata carte funciara alba` | county | **absent** | — | — | re-tagged `informational` → `/ghid/` lane |

**Verified in the repo today, and this is the mechanism, not a metaphor:**

- `docs/servicii/actualizare-carte-funciara/alba/index.html` — **absent.** 78 Alba leaves, 92 leaves
  total (alba 78, cluj 5, mureș 4, sibiu 2, hunedoara 3), and no county node above them.
- The BreadcrumbList emitted on every leaf has **position 3 = `/zone/alba/`** — the *generic
  all-12-services* county hub, verified in `docs/servicii/actualizare-carte-funciara/alba/aiud.html`.
  There is no `service × county` node anywhere in the hierarchy, so Google's only choice for a county
  query is one of 78 sibling leaves, and it picks by something other than proximity.
- The national hub `/servicii/actualizare-carte-funciara/index.html` cannot absorb the county query:
  **351 gated words, zero FAQ, and it never uses the word "Alba".** The zero FAQ is a *data* fact,
  not a code fact — `buildServiceHub` in `generator/lib/pages.js:531` renders `service.hubFaq`, and
  `hubFaq` is **empty for all 12 services** (verified across `services.json`).
- Served vs correct pages are **structurally identical**: same 4 acte, same 5 steps, same price
  range, same county OCPI paragraph, 4–6 FAQ from one pool. Deltas are ±150 words and ±2 FAQ.
  **The served page is not worse. It is the wrong place.**

**Where the loss actually is:** on `acf-q3` — our own home town — `aiud.html` is the only leaf in the
service that says the office is in the same municipality, names BCPI Aiud at Str. Cuza Vodă nr. 14,
and lists all 10 satele aparținătoare. Google shows Șugag instead. And `acf-q3` is **9/9
non-surveyor**: no competitor surveyor website exists on that SERP at all; our only local rival,
Molnar Aurelian-Marian, reaches #2 through a Facebook page. **Getting the right page served on
`actualizare carte funciara aiud` is the cheapest win available in this service.**

---

## 1. Cohort — read every "consensus" claim below at this weight

| Query | Organic | Directory | Government | Other | Blog | **Competitor surveyor** |
|---|---|---|---|---|---|---|
| acf-q1 | 9 | 5 | 1 | 1 | 0 | **1** (cadastrumaxim.ro, #5) |
| acf-q2 | 9 | 6 | 2 | 0 | 0 | **1** (cadastrumaxim.ro, #3) |
| acf-q3 | 9 | 5 | 2 | 1 | 0 | **0** |
| acf-q4 | 9 | 2 | 1 | 3 | 2 | **1** (expertcadastru.ro, #4) |

- **Surveyor cohort size: 2 distinct competitor domains.** No query reaches the SOP Step 3 minimum
  of 3. Recorded as a shortfall, not padded with directories, blogs or law firms.
- **Aggregator share: 33 of 36 organic results = 92%.** Per SOP §2 this is the profile of a query
  set **winnable with a genuine service page**.
- Consensus below is therefore **2-of-2 or 1-of-2**. Where a claim leans on a directory's ranking
  behaviour (efunciara at #1) it is labelled **corroboration, not cohort consensus**, and never
  averaged in.
- `expertcadastru.ro` is a **Bucharest** firm (sector 1, coverage București + Ilfov) ranking #4 on a
  query containing "alba", with Google flagging *"Lipsesc: alba"*. Its presence is an opening, not a
  benchmark of local relevance.

---

## 2. GAPS — ranked, confidence-tagged

Confidence rule applied literally: **HIGH** = near-unanimous across the surveyor cohort **and**
mechanically checkable on our side. **LOW** = correlational only. Every gap states **moves-rankings**
or **table-stakes**.

### 1. [HIGH][moves-rankings] — There is no `service × county` node, so a county query has nothing correct to resolve to

**Evidence.** Three captured #4s with three wrong pages at 94/58/81 km. Verified in repo: no
`docs/servicii/actualizare-carte-funciara/alba/index.html`; BreadcrumbList position 3 on every leaf
is `/zone/alba/`; national hub is 351 gated words with `hubFaq` empty and no county term anywhere.
Both halves mechanically checkable; this is not a competitor-consensus claim at all, it is a
structural fact about our own site, which is why it outranks everything else on the list.
**Remedy:** §3.A. **Chair:** D2 + W1 — and this service needs the Alba hub as much as any of the six
flagships, despite holding none of them.

### 2. [HIGH][moves-rankings] — The vertical is organised by OPERATION; we ship one undifferentiated SERVICE page ×92

**Evidence.** 2 of 2 surveyors segment. cadastrumaxim's service page splits `actualizare date` into
**five named operations, each with its own document list** (adresă · repoziționare/limite ·
rectificare suprafață · schimbarea categoriei de folosință · extravilan→intravilan). expertcadastru
gives one operation its own URL **and its own H1** (`Cadastru modificare limite si suprafata`).
*Corroboration, not cohort:* efunciara ranks **#1 on two of the four queries** with an
operation × locality page — *"Actualizare adresă imobil Alba / Alba Iulia online"*.
Our side, verified in `generator/data/services.json`: ACF has **one** flat `documents[]` of 4 items
and **one** `process[]` of 5 steps, rendered identically on all 92 leaves; the schema has no
operation concept at all.
**Why this is also a routing gap:** 92 leaves that say the same thing about five different
operations give Google nothing to discriminate on except locality — which it is already getting
wrong. This is the single most plausible *on-page* contributor to wrong-page selection.
**Remedy:** §3.B.

### 3. [HIGH][table-stakes] — Our acte list is 4 generic items; theirs are operation-specific and legally anchored — and **we already own the correct list, unplumbed**

**Evidence, competitor side.** expertcadastru enumerates **12 items at annex level** (*anexa nr.1*,
*anexa nr.2*, *anexa 5*) and names the fallback route (*hotărâre judecătorească definitivă și
irevocabilă*). cadastrumaxim's service page cites its instruments per block.
**Evidence, our side — the important half.** The 4 items in `services.json` are verbatim generic.
Absent from all 92 leaves: **certificat de nomenclatură stradală**, **proces-verbal de vecinătate**,
**declarație/act care susține diferența de suprafață**, **act administrativ de la primărie pentru
schimbarea categoriei de folosință**, **hotărâre judecătorească**.
**But `generator/data/guides/acte-necesare-actualizare-date-imobil.json` already contains a 7-row
`Situația → Acte suplimentare` table covering exactly those operations** — including nomenclatură
stradală, proces-verbal de vecinătate and the category-change act — written by us, live at
`/ghid/acte-necesare-actualizare-date-imobil.html`, and **it has never reached a single ranking
page.** One partial exception, verified: nomenclatura stradală appears in one `faqPool` answer, so it
surfaces only on the subset of leaves whose deterministic FAQ draw happens to include it.
**This is a plumbing gap, not a writing gap.** No new research, no invention, no competitor copying.
**Remedy:** §3.C.

### 4. [HIGH][moves-rankings] — 20 `/ghid/` articles declare this service; **zero of the 92 leaves link to any of them**

**Evidence.** Verified by grep on the built HTML: a leaf emits exactly **one** `/ghid/` link and it
is the bare index `/ghid/`. Guides carry `related.services`, and **20 of them name
`actualizare-carte-funciara`** — but the edge is one-directional, and even the guide side points only
at the national hub (`/servicii/actualizare-carte-funciara/`), never at a county node or a leaf.
2 of 2 surveyors surface a documentation library from the ranked page (expertcadastru: site-wide
*Acte cadastru / Preturi cadastru / Formulare cadastru / Arhiva blog*; cadastrumaxim: a 23-item
service menu, each item its own URL).
**The concrete casualty:** `/ghid/rectificare-suprafata-teren-cf.html` — 1,520 words, 7 FAQ, the 2%
tolerance rule, the proces-verbal path and the instanță path — beats the expertcadastru page that
outranks us on acf-q4 on every schema field that is not authority, and it is orphaned from the
cluster that ranks. **Treat our absence on acf-q4 as authority-plausible, not content-plausible.**
**Remedy:** §3.E.

### 5. [HIGH][table-stakes] — Confirmed source defect: the stats band emits `25+ani experiență` with no space

**Evidence.** `generator/lib/chrome.js:201` —
`<span class="num">${st.num}+</span><span class="lbl">${label}</span>` with no whitespace between the
spans. Text extractors concatenate. **This is visible in our live #4 snippet on acf-q1**, which
Google composed from the page body rather than the meta template.
*Basis note:* this is not a cohort-consensus claim — it is a verified source defect in our own
generator, surfacing in our own captured SERP. HIGH describes the certainty of the finding.
**Remedy:** §3.H. One-character fix, site-wide.

### 6. [MEDIUM][moves-rankings] — The meta description is a near-identical string advertising distance *from the customer*

**Evidence, verified live today:** `zlatna.html` → *"…Topograf autorizat ANCPI, **aprox. 58 km de
Aiud**. Tel. 0741 478 540."* The `km === 0` home-town case has already shipped (`aiud.html` now reads
*"birou chiar în Aiud"*), but the D1 distance-drop above ~25 km **has not**. This service supplies
the worst instance in the whole session: the acf-q1 served page advertises **94 km**.
MEDIUM because the further claim — that near-identical metas *contribute* to the cannibalization
rather than merely reflect it — is a hypothesis for the 2026-08-19 GSC gate.
**Remedy:** §3.G. **Chair:** D1, already ruled site-wide; this service only supplies the worst case.
**Gate note:** meta tags sit in the head, outside the gated region — zero demotion risk.

### 7. [MEDIUM][table-stakes] — No leaf ever states what *legally unlocks* the operation

**Evidence.** expertcadastru (1 of 2) leads with the legal trigger: the operation proceeds either on
*o sentință civilă* or on measurements accepted *cu acordul vecinilor prin întocmirea unui proces
verbal de bună vecinătate*. Our 92 leaves say what we do and what to bring, never what makes it
possible or when it stops being possible administratively. Our own
`/ghid/rectificare-suprafata-teren-cf.html` already carries the H2 *"Când rectificarea nu se poate
face administrativ"* and the 2% rule.
MEDIUM, not HIGH: 1 of 2 surveyors states it explicitly, so this is a majority-of-two with a
plausible mechanism, not near-unanimity.
**Remedy:** §3.D.

### 8. [MEDIUM][table-stakes] — Named person, but no photo and no authorization number

**Evidence.** 2 of 2 surveyors name the engineer in or beside the H1 (cadastrumaxim puts it *in the
H1*: `CADASTRU ALBA - TOPOGRAF MAXIM EMANUEL`); 1 of 2 adds a photo; 1 of 2 publishes the ANCPI
authorization (`Ro-B-J, nr. 0269`). We name Aurel Fleser and publish neither.
**Partially blocked and stays blocked:** the authorization number is CEO question 1 and ruling 0.1
forbids inventing one — **leave a marked slot, print nothing**. The photo is deferred past 2026-08-19
per D14. The actionable residue is small; recorded so it is not re-litigated.

### 9. [MEDIUM][table-stakes] — Our single strongest differentiator sits in an unheaded paragraph

**Evidence.** Neither surveyor publishes a figure — cadastrumaxim explicitly refuses
(*"Costurile se calculeaza in functie de specificul lucrarii"*), expertcadastru's ranked page has
none. **We are the only surveyor in the entire SERP set quoting one**, and on acf-q3 Google chose
exactly that sentence as our snippet. Yet `pages.js` renders it as a bare
`<p><strong>Preț orientativ:</strong> …</p>` with **no `<h2>` and no anchor** — it is not a
targetable section, which is why on acf-q3 Google had to lift the *FAQ* variant of the answer
instead of the body one.
**The number itself does not change.** Ruling 0.2 keeps `600 – 1.800 lei` exactly as it is; any
proposal to remove, lower or further hedge it is an anti-pattern and is **rejected here in advance**.
This gap is about giving the existing sentence a heading and an id, nothing else.

### 10. [LOW][table-stakes] — Word count

Our leaves: 760–916 gated words (served pages 846 / 789 / 760; correct pages 863 / **916** on Aiud).
Cohort: expertcadastru 900, cadastrumaxim 2,900 — and the 2,900 is a **homepage** padded with a
weather widget, a visitor counter and a calendar. We already exceed the one comparable service page.
**LOW by rule: length correlates with rank without causing it. Do not action as bulk length.** Every
section in §3 must earn its words by answering a question; none is justified by word count.

### Removed from the actionable list

**Duration / SLA.** cfunciara publishes a per-operation SLA (*"Actualizare adresă în Cartea Funciară
— 5 zile lucrătoare"*) for precisely the operation efunciara ranks #1 on; expertcadastru publishes
*"21 zile lucrătoare sau 30 zile calendaristice"*. **This is the axis the vertical competes on and it
is closed to us.** Moved to §5 BLOCKED BY POLICY, not actioned, no number proposed. The counter-move
is §3.F: procedural certainty without a clock.

---

## 3. CONTENT SPEC — what must exist, where the data comes from

**Gate discipline governing every leaf-side item below** (`facts.md` §6, verified: sibling group is
per SERVICE across all five counties, `build.js:208`; this service's group is **92 pages**):

| Text shape | Document frequency in the 92 | Lands in | Verdict |
|---|---|---|---|
| Identical on all 92 leaves | 100% | boilerplate, dropped before overlap | **SAFE** — gate-neutral, adds 0 unique words |
| Keyed on `profile` | montan-apuseni 35%, agricol-câmpie 34%, urban 21%, periurban 11% | **residual** | **BANNED on leaves** |
| Keyed on BCPI office | Câmpeni 24%, Aiud 17%, Alba Iulia 16%, Sebeș 14%, Blaj 13% | **residual** | **BANNED on leaves** (chair D4) |
| Genuinely per-locality, data-composed | ~1% | page-exclusive | **IDEAL** — raises unique words |
| Per-locality by name-swap only | ~1% but near-duplicate | residual, near-duplicate | **BANNED** — the exact anti-pattern the gate exists to catch |

Byte headroom is not a constraint: leaves are 26.5–28.9 KB against a 61,440-byte cap.
`MIN_UNIQUE_WORDS = 120`, `MAX_SHINGLE_OVERLAP = 0.7`, demotion baseline **0** — the guard compares
key sets, never counts.

---

### A. NEW PAGE — service×county hub `/servicii/actualizare-carte-funciara/alba/index.html`

**Priority: first. Everything else on this list is downstream of it.**

- **Purpose.** Give the county query (`acf-q1`) a page that exists, and give the 78 Alba leaves a
  parent so a village stops being a peer of the county seat.
- **Must answer:** which operations exist and which one the visitor has · which of the five BCPI
  offices their file goes to and where it is · what the work costs orientatively · what to send us ·
  where their own locality's page is.
- **Sections, in order:** H1 carrying service + county · operation index (§3.B, expanded, one anchor
  per operation) · the five BCPI offices with their `covers[]` lists · "orașe principale" block above
  the A–Z list (chair W3c) · A–Z of all 78 localities · acte, grouped per operation (§3.C) · process
  (§3.F) · price range · FAQ · WhatsApp CTA.
- **Data source — all of it already exists.** `counties.json` for Alba carries
  `bcpiOffices[5]{name, address, covers[]}` (Alba Iulia 15 · Aiud 16 · Blaj 12 · Câmpeni 22 ·
  Sebeș 13 UATs), plus `countyNote` and `feeNote`. `localities/alba.json` carries all 78 records with
  `name, slug, type, villages, ocpiOffice, distanceKmFromAiud, localNote`. Service fields
  (`hubIntro`, `documents`, `process`, `priceRange`, `faqPool`) exist.
- **Generator work required — does not exist:** a `buildServiceCountyHub` builder in
  `generator/lib/pages.js`, its route in `build.js`, and **reparenting the leaf BreadcrumbList
  position 3 from `/zone/alba/` to this page**. The reparenting is the part that carries the routing
  hypothesis; shipping the hub without it wastes the change.
- **Gate.** Hub pages carry only the size gate (`MAX_HUB_BYTES = 122880`) — no demotion risk. The
  per-office block is chair-D4-compliant **because it lives here and not on leaves**.
- **Policy.** `feeNote` deliberately describes the tariff mechanism without a figure. Keep it that
  way — no ANCPI tariff, no day count anywhere on this page.

---

### B. NEW SECTION (leaf + hub) — "Ce fel de actualizare vă trebuie"

- **Purpose.** Close the single largest structural gap (gap 2) and give Google something other than
  the locality name to tell 92 pages apart by intent.
- **Must answer:** which of the operations the visitor's situation is, in the visitor's words, before
  any paperwork is mentioned. Adresă schimbată · suprafață care nu se potrivește · construcție nouă
  neînscrisă · construcție demolată nerădiată · categorie de folosință greșită · limite/repoziționare
  · extravilan → intravilan.
- **Form on the leaf: identical on all 92, locality-free.** Operations do not vary by locality, so
  varying this text by locality would be name-swapping — the banned shape. Identical across all 92
  puts it above the 50% boilerplate cut where it is gate-neutral.
- **Form on the hub:** expanded, one anchored subsection per operation, each linking to the matching
  `/ghid/` article.
- **Data source.** Our own corpus, no competitor copying:
  `guides/acte-necesare-actualizare-date-imobil.json` (7-row operation table),
  `guides/rectificare-suprafata-teren-cf.json`, `guides/radiere-constructie-demolata.json`,
  `guides/repozitionare-imobil-cand-e-necesara.json`,
  `guides/suprafata-din-acte-difera-de-teren.json`, plus the existing ACF `faqPool`, several of whose
  entries are already operation-shaped (categorie de folosință, radierea șurei demolate, nomenclatură
  stradală, suprapunere cadastrală).
- **Generator work required — does not exist:** `service.operations[]` on the ACF record in
  `services.json`, shape roughly
  `{slug, name, plainTrigger, documents[], legalBasis?, guideSlug?}`, plus its renderer.
- **Do not** create a URL per operation in v1. Five operations × 92 localities is 460 new pages and
  the anti-doorway gates exist precisely to stop that. Operations are **sections and hub anchors**,
  not leaves.

---

### C. REBUILD — "Acte necesare", from one flat list of 4 to core + per-operation

- **Purpose.** Close gap 3. Table stakes: the customer arrives having read a 12-item annex-level list
  elsewhere.
- **Must answer:** what the **owner** brings — separated into (i) common to every actualizare and
  (ii) additional, for *this* operation.
- **Preserve our advantage, explicitly.** expertcadastru's 12-item list mixes surveyor-side items the
  client never supplies (*"Măsurători în rețeaua de îndesire și ridicare"*, *"Descrierile topografice
  ale punctelor noi"*) into the same list as owner-side items. **Ours lists only what the owner must
  bring. Do not import their list. Do not lengthen ours by adding surveyor-side items.**
- **Data source.** `services.json` `documents[4]` becomes the common core (it already is one);
  the per-operation lists come from **our own** `guides/acte-necesare-actualizare-date-imobil.json`
  `Situația → Acte suplimentare` table, which already covers all seven situations.
- **Legal anchoring — narrow authorization.** Cite an instrument **only if it is already cited in our
  own `/ghid/` `sources[]`.** Verified as already ours: **Ordinul 600/2023**, Ordinul 441/2025,
  Ordinul 16/2019, Legea 7/1996. **Do NOT copy cadastrumaxim's `Ordin 700/2014`** — our own corpus
  has already moved to 600/2023, and republishing a superseded instrument because a competitor shows
  it is the exact failure mode this SOP is written against. No annex numbers unless a source we hold
  states them.
- **Generator work required — does not exist:** `checklistBlock` in `pages.js` takes a flat array
  only; a grouped variant is needed.
- **Gate.** Constant across all 92 → boilerplate → safe. The existing "Printează lista" affordance
  stays.

---

### D. NEW SECTION — "Când se poate și când nu se poate administrativ"

- **Purpose.** Close gap 7 — the one thing expertcadastru does that is genuinely better, and which we
  already have written.
- **Must answer:** what legally unlocks the operation (acordul vecinilor, consemnat într-un
  proces-verbal de vecinătate, versus calea judecătorească), and at what point it stops being an
  administrative matter. The 2% tolerance rule belongs here in compressed form.
- **Data source.** `guides/rectificare-suprafata-teren-cf.json` — H2s *"Regula celor 2% — pragul care
  schimbă totul"*, *"Ce se întâmplă, în funcție de mărimea diferenței"*, *"Când rectificarea nu se
  poate face administrativ"*. Already written, already ours, 1,520 words with 7 FAQ.
- **Form.** Compressed and constant on the leaf (boilerplate-safe), full on the hub, both linking to
  the guide.
- **Hard constraint.** State conditions and thresholds that our own sources carry. **State no
  outcome as certain and no timeline of any kind.**

---

### E. NEW LINK BLOCK — "Ghiduri utile" on leaf and hub

- **Purpose.** Close gap 4 — the largest purely mechanical win on this service. 20 guides declare
  this service; the leaves link to none of them.
- **Must answer:** where the visitor reads the long-form version of their specific operation.
- **Data source.** Reverse index over `guides/*.json` `related.services` — **exists as data, has no
  consumer.** The 20 that name this service include `rectificare-suprafata-teren-cf`,
  `acte-necesare-actualizare-date-imobil`, `prima-inscriere-vs-actualizare-carte-funciara`,
  `radiere-constructie-demolata`, `repozitionare-imobil-cand-e-necesara`,
  `suprafata-din-acte-difera-de-teren`, `cum-citesti-un-extras-de-carte-funciara`.
- **Generator work required — does not exist:** build the reverse index in `build.js`; render via the
  existing `chrome.linkCard`.
- **Form.** Same 4–6 guides on all 92 leaves (constant → boilerplate → safe). **Do not vary the
  selection per locality** — that is the residual-inflating shape.
- **Policy (chair D6).** `cadastru-gratuit-pnccf` is in the 20. It may be linked. **No per-UAT PNCCF
  claim, year, sector number or parcel count may be added to any leaf or to the hub.**

---

### F. EXTEND — "Cum decurge procesul": procedural certainty without a clock

- **Purpose.** The only available counter-move on the axis the competition owns and policy closes to
  us (see §5).
- **Must answer:** who does what at each handoff — who measures, who assembles the file, **who
  physically submits it**, who answers a *notă de completare* when the registrar raises one, who
  collects the updated extras and how the client receives it.
- **Data source.** `services.json` `process[5]` — exists, keep the five, extend the wording. The
  existing hedged FAQ answer (*"Documentația o întocmim în câteva zile de la măsurătoare, iar
  soluționarea urmează termenele OCPI…"*) is **our own work, non-numeric about BCPI, predates this
  research, and is not proposed for change.**
- **HARD CONSTRAINT, no exceptions.** Not one day count. Not "rapid", not "în cel mai scurt timp"
  attached to BCPI. The words that stay allowed are the two already live and approved:
  *"răspundem de obicei în aceeași zi lucrătoare"* (Aurel's own reply time) and *"termen previzibil"*.

---

### G. META DESCRIPTION — carry chair D1, this service is the worst case

- Drop the `aprox. N km de Aiud` clause above ~25 km; substitute the competent BCPI office name.
- `km === 0` home-town wording has already shipped and is correct on `aiud.html`. Verified.
- The county hub's meta carries **no distance at all**.
- **Data source.** `distanceKm()` and `loc.ocpiOffice.name` — both exist.
- **Gate.** Head region, outside the gated region. Zero demotion risk.

---

### H. DEFECT FIX — stats band whitespace

`generator/lib/chrome.js:201`: no whitespace between `<span class="num">` and `<span class="lbl">`,
so extractors read `25+ani experiență`. Verified in the source and visible in our live acf-q1
snippet. One-character fix; affects every page on the site, not just this service.

---

### I. NATIONAL HUB — populate `hubFaq`

`buildServiceHub` renders `service.hubFaq` (`pages.js:531`); the field is **empty for all 12
services**, which is why the national hub has zero FAQ and no FAQPage schema. Populating it for ACF
is a pure data edit on a hub page — size gate only, no demotion risk. It will not by itself make the
national hub answer a county query (it has no county term, by design), which is why §3.A exists.

---

## 4. DATA REQUIRED FROM GENERATOR

### Exists today, feeds the spec directly

| Field | Location | Feeds |
|---|---|---|
| `name`, `slug`, `shortName`, `hubIntro`, `metaDescription` | `services.json` → ACF | A, G |
| `documents[4]` | `services.json` → ACF | C (becomes the common core) |
| `process[5]` (`{localitate}` param) | `services.json` → ACF | F |
| `priceRange` `"600 – 1.800 lei…"` | `services.json` → ACF | A, gap 9 — **unchanged** |
| `faqPool[10]`, `introVariants[8]` (profile-keyed) | `services.json` → ACF | A, B — **sizes frozen, chair D13** |
| `related[4]` | `services.json` → ACF | A |
| `name, slug, type, villages, lat, lon, ocpiOffice{name,address}, profile, localNote, distanceKmFromAiud, matrix, nearby` | `localities/alba.json`, all 78 records, **`localNote` populated on all 78** | A, G |
| `bcpiOffices[5]{name,address,covers[]}`, `countyNote`, `feeNote`, `ocpiHq` | `counties.json` → alba | A |
| `related.services[]` / `related.guides[]`, `sources[]`, `sections[]` | `guides/*.json`; **20 guides name this service** | C, D, E |
| `chrome.linkCard`, `checklistBlock`, `cardBlock`, `faqDetails`, `pickSeeded`, `distanceKm` | `pages.js` | all |

### Code-supported but **empty in data** — pure data edits

| Field | Status |
|---|---|
| `service.hubFaq` | rendered at `pages.js:531`; **empty for all 12 services** → national hub has 0 FAQ |
| `service.h1` | read at `pages.js`; unset on all 12 → hub H1 falls back to the bare service name |
| `service.priceTable` | rendered; used only by `cadastru-si-intabulare`. **Not proposed here** — a table invites new figures, and ruling 0.2 forbids them |

### Does **not** exist — must be built

| Missing | Needed by | Note |
|---|---|---|
| `service.operations[]` | B, C | new field + renderer; the core of this spec |
| `loc.serviceNotes{}` | differentiating leaves | **approved by chair D5, verified absent from all 78 Alba records.** ~15 lines in `pages.js` |
| `buildServiceCountyHub` + route + **breadcrumb reparenting** | A | the routing remedy; without the reparenting the hub is decoration |
| Reverse index `service → guides` | E | the data edge exists, the consumer does not |
| Grouped checklist renderer | C | `checklistBlock` accepts a flat array only |
| Any ANCPI authorization field | gap 8 | **do not add a placeholder value.** Marked slot only, pending CEO question 1 |

---

## 5. BLOCKED BY POLICY — recorded as intelligence, NOT actioned

1. **Every turnaround and duration figure.** cfunciara *"Actualizare adresă în Cartea Funciară — 5
   zile lucrătoare"* and *"Documente cadastrale pentru Certificat de urbanism — 4 [zile]"*;
   expertcadastru *"21 zile lucrătoare sau 30 zile calendaristice"*. **This is the axis the vertical
   competes on. We propose no number.** Recorded so the implementation stage knows the customer
   arrives having read 4, 5, 21 and 30 days somewhere else. Counter-move is §3.F only.
2. **The exact ANCPI tariff.** Not known to us. `counties.json` `feeNote` describes the mechanism
   without a figure — that is the correct shape and it stays.
3. **Any new price figure.** The live `600 – 1.800 lei` + `priceDisclaimer` is the *only* number.
   Per ruling 0.2 it **stays** — and since we are the only surveyor in the whole SERP set publishing
   one, **removing or further hedging it is pre-rejected as a competitive loss.**
4. **The ANCPI authorization seria/număr/categoria.** expertcadastru publishes theirs
   (`Ro-B-J, nr. 0269`). Ruling 0.1: marked slot, never invent. CEO question 1.
5. **PNCCF years, sector numbers, parcel counts, dates** — chair D6. `cadastru-gratuit-pnccf` may be
   *linked* from §3.E; no per-UAT claim may be written.
6. **Aurel's photo** — deferred past 2026-08-19, chair D14. 1 of 2 surveyors has one.
7. **Map-pack position.** All four captures returned **no map pack at all** for this service. No page
   change is proposed against it, and none could work.

---

## 6. ROUTING DEFECT — YES, on every query that returned a result

| Query | Rank | servedPage | correctPage | Defect |
|---|---|---|---|---|
| acf-q1 `actualizare carte funciara alba` | #4 | `.../alba/avram-iancu.html` (**94 km**) | **DOES NOT EXIST** — no service×county hub | **YES, and unfixable by content alone** |
| acf-q2 `… alba iulia` | #4 | `.../alba/zlatna.html` (**58 km**) | `.../alba/alba-iulia.html` (39 km) | **YES** |
| acf-q3 `… aiud` | #4 | `.../alba/sugag.html` (**81 km**) | `.../alba/aiud.html` (home town) | **YES — on our own home town** |
| acf-q4 `rectificare suprafata …` | absent | — | `/ghid/` lane, re-tagged `informational` | n/a — no result to route |

**Mechanism hypothesis, MEDIUM confidence, carried forward from the capture and worth testing:** the
snippet Google chose for the Zlatna page opens *"Dosarele de carte funciară merg la **BCPI Alba
Iulia**…"*. Zlatna is in the BCPI Alba Iulia catchment, so the office sentence puts the string
"Alba Iulia" on **all 15 Alba-Iulia-catchment leaves**. Google may be matching the *office* name
rather than the *locality* name. If so the BCPI block does two separate harms at once: it drives
wrong-locality selection **and** it is office-constant text sitting at 16% document frequency, in the
overlap residual (chair D4). Correlational. It is a hypothesis for the 2026-08-19 GSC gate, not an
established cause, and nothing in §3 depends on it being true.

**Sequencing, binding:** §3.A (hub + breadcrumb reparenting) → §3.G (meta) → §3.B/C/E (content and
links) → §3.D/F. Chair D2: a perfected page Google never serves is worth nothing.

---

## 7. What this spec does not establish

Surveyor cohort **N = 2**, and on the home-town query **N = 0**. Every consensus statement above is a
2-of-2 or 1-of-2 observation and is labelled as such. SERP analysis is correlational: that both
surveyors segment by operation does not establish that segmentation causes their ranking, and
`cadastrumaxim.ro` most plausibly ranks on a 39-review Google Business Profile and domain age — a
**content-free homepage** outranking a 900-word service page is itself the evidence for that. The
domain is two days old. Nothing here promises a position. The only thing that decides whether any of
it worked is the **2026-08-19 Search Console "Pages" report showing which URL Google serves per
query** — the routing metric, which is the one this spec is built around.
