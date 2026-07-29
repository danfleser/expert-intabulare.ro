# CONTENT SPEC — `plan-topografic`

**SOP-serp-research.md Step 6 · 2026-07-29 · spec only, no Romanian page copy**

**Inputs:**
`research/seo-2026-07/serp/plan-topografic-serp.md` (3 of 4 queries captured — `ridicare
topografica alba` blocked by Google anti-bot, still unmeasured)
`research/seo-2026-07/competitors/plan-topografic-competitors.md` (2 surveyor URLs)
`research/seo-2026-07/serp/FINDING-cannibalization.md` (the `plan topografic Alba Iulia` #2 row)
`spec-seo-chair-verdict.md` (routing before content — binding)

**Consensus computed over the SURVEYOR COHORT ONLY (n = 2).** Directories, marketplaces,
municipal portals and road-authority PDFs were classified per SOP Step 2 and excluded from every
consensus count. They are reported separately as incumbent intelligence.

Everything marked **VERIFIED** below was re-checked against the repo by this agent on 2026-07-29,
independently of the previous stage. Four of the previous stage's figures did not survive that
check and are corrected in §6.

---

## 0. HEADLINE — read before anything else

**ROUTING DEFECT: YES — the worst instance on the site.**

```
plan topografic alba          #3  served  plan-topografic/alba/dostat.html      (53 km)
plan topografic alba          #8  served  plan-topografic/alba/santimbru.html   (28 km)
plan topografic aiud          #4  served  plan-topografic/alba/dostat.html      (53 km)
plan topografic Alba Iulia    #2  served  plan-topografic/alba/dostat.html      (53 km)
plan topografic ... autorizatie de construire alba iulia   ABSENT

correctPage (county)  : docs/servicii/plan-topografic/alba/index.html   DOES NOT EXIST (VERIFIED)
correctPage (Aiud)    : docs/servicii/plan-topografic/alba/aiud.html    exists, never served
correctPage (A. Iulia): docs/servicii/plan-topografic/alba/alba-iulia.html  exists, never served
```

**4 of 4 ranking slots are the wrong page.** A ~500-person commune 53 km from the office has been
canonicalised by Google as *the* plan-topografic page for the whole county — including the query
that names the town our office is in. Its Google snippet reads *"aprox. 53 km de Aiud"*.

**Per the chair's ruling, everything in §4 below is downstream of this.** A perfect Aiud page that
Google never shows is worth nothing. Do not ship S1–S3 or S7 before S4/S5.

### The best available explanation for the routing defect — and it is not the one on the table

The previous stage flagged that link volume does not explain the selection. **VERIFIED, and
worse than reported:**

| plan-topografic Alba leaf | Files linking to it | Note |
|---|---|---|
| `vadu-motilor.html` (commune, ~1.400 loc.) | **23** | site maximum |
| `alba-iulia.html` (county seat) | 21 | |
| `santimbru.html` | 21 | self-competes at #8 |
| `sebes.html` | 21 | |
| `aiud.html` (our own town) | 20 | |
| `blaj.html` | 19 | |
| `dostat.html` (**the over-served page**) | **17** | |
| `sugag.html` | 14 | site minimum |

The over-served page has **fewer** inbound links than every page it displaces. Chair **W3** stays
worth doing on general grounds but **must not be presented as the cure for Doștat.**

**A better-grounded mechanism, VERIFIED this session and new to this report:**

`generator/lib/pages.js:531` renders a hub FAQ block *only* when `service.hubFaq` is non-empty.
**`hubFaq` is unset on all 12 services** (`generator/data/services.json`, verified). Consequence,
measured in the built output:

| Page | `<summary>` FAQ blocks | `FAQPage` JSON-LD |
|---|---|---|
| `docs/servicii/plan-topografic/index.html` (national hub) | **0** | **0** |
| every one of its 222 leaves | 4–6 | 1 |

**The hub is strictly weaker than its own children on the one signal Google renders in the SERP.**
That is a mechanical, checkable reason a hub loses to its leaves — and it applies to any new
county hub built under W1 unless `hubFaq` is populated at the same time. **S4 must ship with a
hub FAQ or it will reproduce the defect it was built to fix.**

---

## 1. Position, cohort, aggregator share

| Query | Tier | Map pack | Our rank | Page served | Correct? | Aggregator share | Surveyor cohort |
|---|---|---|---|---|---|---|---|
| `plan topografic alba` | county | none | **#3 + #8** | Doștat + Sântimbru | **NO ×2** | 4/8 | 2 |
| `plan topografic pentru autorizatie de construire alba iulia` | city | none | **absent** | — | n/a | 7/9 | 2 |
| `plan topografic aiud` | town | none | **#4** | Doștat | **NO** | 8/9 | **0** |
| `plan topografic Alba Iulia` (prior session) | city | none | **#2** | Doștat | **NO** | not re-captured | — |
| `ridicare topografica alba` | county | — | — | — | — | — | **NOT CAPTURED** |

**Aggregator share: 19 / 26 organic slots non-surveyor (73%).**
Composition is unusual for this vertical and it changes the strategy: **government (8 of 26) ties
directories (8 of 26) and beats them on the two commercial queries.** Municipal urbanism portals
and scanned primărie PDFs are the incumbent here, not necesit.ro.

**SURVEYOR COHORT SHORTFALL — recorded, not padded (SOP Step 3).** The SOP asks for 3–5 surveyor
results per query. After dedupe the entire competitor cohort for this service is **2 URLs**,
`cadastrumaxim.ro` and `cadastrumartin.ro`, and **both are homepages, not plan-topografic service
pages**. On `plan topografic aiud` the surveyor cohort is **zero**.

**Read every "2 of 2" below as what it is: unanimity across a two-page base.** It is the strongest
evidence available for this service and it is still thin. No gap in §3 is promoted to HIGH on
surveyor unanimity alone — each HIGH also carries an independent, mechanically checkable fact
about our own repo.

**The strategic consequence of the shortfall:** there is no competitor page for this service to
beat and no template to copy. The slot for a genuine, locality-specific plan-topografic service
page is **open**. Everything below is a bet on the searcher's intent, not an imitation of a rival.

---

## 2. What the two ranking surveyors actually do

| | cadastrumaxim.ro (#1 county, #2 permit) | cadastrumartin.ro (#4, #4) |
|---|---|---|
| Page that ranks | homepage | homepage |
| Word count | ~850 | ~475 |
| Substance | 23-item **named deliverable menu**; Google renders the list *as the snippet* | 7-branch **"Acte necesare" index**, one branch per named procedure |
| Permit answer | menu leads with `P.A.C.` | `DOC. AUTORIZATIE DE CONSTRUIRE – PAC`, `DOC. SCOATERE DIN CIRCUITUL AGRICOL – SCA` |
| Named surveyor | **yes** — *Ing. Emanuel MAXIM* + office/team/4x4 photos | **yes** — *Inginer Dipl. Martin Nicolae* |
| Years claimed | yes | *peste 9 ani* |
| Price on ranking page | **none** — explicit refusal: *"Costurile se calculeaza in functie de specificul lucrarii… contactati"* | **none** |
| Duration on ranking page | **none numeric** — *"timp scurt"* only | **none** |
| Acte necesare | none | 7 branches |
| Process steps | none | none |
| FAQ | none | none |
| Structured data | none | none |
| WhatsApp | none | none |
| Local specificity | named-places | generic |

**We already beat both** on process steps (5), acte necesare, FAQ (4–6 + `FAQPage`), structured
data (4 JSON-LD blocks), WhatsApp (6 links), named BCPI office with street address, named
component villages, and years (25+ vs 9). **Do not re-propose any of those.**

**Policy headline: neither ranking surveyor publishes a price or a turnaround.** The customer
arrives at this query with **no anchor** — unlike the apartament and dezmembrare cohorts.
**`plan-topografic` is the one service where CEO ruling 0.2 costs us nothing.** The levers here are
routing, document vocabulary, the permit chain, and a named person — all of them policy-free.

---

## 3. GAPS — ranked, confidence-tagged (SOP Step 5)

### GAP-1 · [HIGH] [moves-rankings] · No `plan-topografic` × Alba hub; 4 of 4 slots serve the wrong page
`docs/servicii/plan-topografic/alba/index.html` **does not exist** (VERIFIED: the directory holds
78 flat `.html` leaves and no index). `docs/servicii/plan-topografic/index.html` **does** exist
(39,061 bytes, national) and **lost to two of its own village leaves on the county query.**

HIGH is earned by the *defect*, which is mechanically checkable four times over. **The remedy is
a hypothesis**, and two facts qualify it: a hub already exists and lost, and Doștat has fewer
inbound links than the pages it displaces. Chair **W1 + W3** remain the best available move —
provided S4 ships with a hub FAQ (see §0). Confirmed or refuted at the 2026-08-19 GSC gate.

### GAP-2 · [HIGH] [moves-rankings] · The service hub carries no FAQ and no FAQPage schema, while all 222 of its leaves do
VERIFIED: `hubFaq` unset on all 12 services; `pages.js:531` therefore emits no FAQ block; the built
hub contains **0** `<summary>` elements and **0** `FAQPage` JSON-LD against 4–6 and 1 on every
leaf. Mechanically checkable, no surveyor cohort needed, and it is the most plausible on-page
reason a hub loses to its children. **Directly gates GAP-1's remedy.**

### GAP-3 · [HIGH] [moves-rankings] · The permit intent is unserved; the permit vocabulary is absent from 222/222 pages
We rank **#2** on `plan topografic Alba Iulia` and are **absent** from `plan topografic pentru
autorizatie de construire alba iulia` — adding the single most common real reason to need the
document drops us off the SERP entirely. 4 of 9 results there are municipal urbanism portals;
every related search is about the permit (`cerere autorizatie de construire`, `certificat de
urbanism`, `Legea 50`). Sibiu's permit register ranks *in Alba Iulia* purely on the string
*"PLANULUI TOPOGRAFIC VIZAT O.C.P.I."*.

2 of 2 surveyors answer this intent by naming the deliverable as a line item. Grep across all
**222** leaves, VERIFIED 2026-07-29:

| Token | plan-topografic leaves |
|---|---|
| `P.A.C.` | **0 / 222** |
| `PAC` (bare) | **0 / 222** |
| `scoatere din circuitul agricol` | **0 / 222** |
| `plan de amplasament` | **0 / 222** |
| `extras de plan cadastral` | **0 / 222** |
| `releveu` | **0 / 222** |
| `nivelment` | **0 / 222** |
| `profile topografice` | **0 / 222** |
| `autorizația de construire` (sg. articulated) | 129 / 222 |
| `vizat OCPI` | 113 / 222 |

### GAP-4 · [HIGH] [table-stakes] · Nobody is named on any of our 222 pages; 2 of 2 competitors name their surveyor
Ours reads *"Topograf autorizat ANCPI, 25+ ani"* — **`Aurel Fleser` appears on 0 of 222 leaves**
(VERIFIED). Theirs name a person and one shows his face.

**The distinction that matters: the NAME is not blocked by ruling 0.1 — only the seria/numărul
is.** The name is available today; the authorization slot stays marked-empty until Aurel supplies
it. We also beat both on years (25+ vs 9). E-E-A-T argument, correlational — hence table-stakes,
not moves-rankings.

### GAP-5 · [MEDIUM] [moves-rankings] · `ridicare topografică` is targeted by a glossary entry, not by the service
The phrase of the one uncaptured query. VERIFIED:

- `ridicare topografică` (unarticulated) — **0 / 222** leaves
- `ridicarea topografică` (articulated) — **222 / 222** leaves … but only inside `process` step 2,
  *"Facem ridicarea topografică la fața locului."* — mid-page body text, identical on all 222
- `<title>` containing *ridicare* — **0 / 222** leaves
- `docs/dictionar/ridicare-topografica.html` — `<title>Ridicare topografică — ce înseamnă?</title>`,
  `<h1>„Ridicare topografică" — ce înseamnă?</h1>`

**So the term is not missing; the page that targets it is the wrong one.** Our only structurally
targeted page for the phrase is a dictionary definition, joined by
`docs/dictionar/plan-topografic.html` on the head term itself. This is the same failure mode as
Doștat, one layer up — an internal-cannibalization finding, not a vocabulary one, and it
reinforces the chair's routing-first ruling.

**Not HIGH** for one honest reason: the query it targets was never captured (anti-bot block), so
the ranking impact is unmeasured. The *fact* is HIGH-confidence; the *impact* is not.

### GAP-6 · [MEDIUM] [moves-rankings] · Our deliverable list is ~4 items; the #1 result's is 23
cadastrumaxim ranks #1 and #2 with a page whose entire substance is a 23-item named deliverable
menu that **Google renders as the snippet on both queries.** Our leaves name roughly four things.
The national hub is worse — VERIFIED: `curbe de nivel` 0×, `Stereo 70` 0×, `plan de situație` 0×,
`profile topografice` 0×, `nivelment` 0× on `docs/servicii/plan-topografic/index.html`.

**MEDIUM not HIGH:** N=1 competitor exhibits it, and "long menu ⇒ rank #1" is exactly the
correlational claim SOP §7 warns against.

### GAP-7 · [MEDIUM] [moves-rankings] · The FAQ draw is a lottery and our home-town page lost it
`pages.js:410-418` draws 4–6 of 10 by `fnv1a("faq:<loc>:<service>:<county>")`. Rendered sets,
VERIFIED:

| Page | Ranks? | Has *"Ce cuprinde planul topografic pentru autorizația de construire?"* |
|---|---|---|
| `dostat.html` | **#3, #4, #2** | **yes — 1st FAQ** |
| `santimbru.html` | **#8** | **yes — 1st FAQ** |
| `alba-iulia.html` | (correct page, never served) | yes — 5th FAQ |
| `aiud.html` | never ranks | **NO** |

`aiud.html` also has `Stereo 70` **0×**, `plan de situație` **0×**, `dwg` **1×** (vs 5× on Doștat
and Alba Iulia). **All three pages Google serves carry the permit FAQ; the page that should serve
the query with zero competing surveyors does not carry it at all.** Correlational and N is tiny —
hence MEDIUM — but it is cheap, mechanically checkable, and points the same way as GAP-3.

**⚠ Binding constraint:** chair **D13** and SOP §4.8 ban **resizing** `faqPool`. Pinning a
question is a *selection* change, not a resize — but it still moves shingle document-frequencies
across the 50% boilerplate cut for the whole 222-page sibling group. **Own guarded commit, set-diff
guard, one change at a time. Do not batch it.**

### GAP-8 · [MEDIUM] [table-stakes] · `documents` is 3 items; cadastrumartin's index has 7 branches
VERIFIED: `plan-topografic.documents.length === 3`, the joint-smallest of the 12 services
(`cadastru-si-intabulare` and `intabulare-teren` carry 5). cadastrumartin's 7-branch structure is
precisely what matches the permit-driven query. Extending the array is content work on existing
data — **no schema change required.**

### GAP-9 · [MEDIUM] [table-stakes] · No legislation or authority citation anywhere
2 of 2 competitors have one — cadastrumartin a named *Legislatie* section, cadastrumaxim a named
*Ordin*. We cite no instrument on any of the 222 leaves. **The remedy is constrained, not free:**
see BLOCKED BY POLICY. Only cite an instrument Aurel or a primary ANCPI source confirms.

### GAP-10 · [MEDIUM] [table-stakes] · Portfolio: a directory owns the format
`cadastru24.ro/lucrari/Alba/Alba` — *"Portofoliu de lucrari de Plan Topografic de situatie in
Alba"* — ranks on 2 of 3 queries. Both surveyors link a *Portofoliu*. We have none anywhere.
**Cannot be generated** — needs real anonymised work from Aurel. See BLOCKED BY POLICY.

### GAP-11 · [MEDIUM] [moves-rankings] · Meta description still advertises the distance on the pages that rank
VERIFIED live in `docs/`:

```
dostat.html      …Topograf autorizat ANCPI, aprox. 53 km de Aiud. Tel. 0741 478 540.
alba-iulia.html  …Topograf autorizat ANCPI, aprox. 39 km de Aiud. Tel. 0741 478 540.
aiud.html        …Topograf autorizat ANCPI, birou chiar în Aiud. Tel. 0741 478 540.
```

The `km === 0` branch (`pages.js:459`) **is already live** — defect 12.1 is fixed and Aiud now
reads *"birou chiar în Aiud"*. Chair **D1/W2** is **not** done: the distance clause still ships on
every ranking slot we hold for this service. Head-only ⇒ outside the quality gate ⇒ zero demotion
risk.

### GAP-12 · [MEDIUM] [moves-rankings] · Hub locality anchor text is the bare place name
VERIFIED `pages.js:544` emits `<a href="…/alba-iulia.html">Alba Iulia</a>`. Confirmed in the built
hub. Chair **W3(a)** wants `Plan topografic în Alba Iulia`. Hub-only change, gate-free.

### GAP-13 · [LOW] [table-stakes] · Word count is not the lever here
Ours ~850 · cadastrumaxim ~850 · cadastrumartin ~475. We already match or exceed the cohort.
Recorded to close the question: **do not propose "add more words."** Length correlates with rank
without causing it (SOP Step 5).

---

## 4. CONTENT SPEC — the sections the pages must contain

Ordering is binding: **S4 and S5 are structural and come first** (chair D2). S1–S3 and S7 are
content and follow. S6 and S8 are gate-free and can ship at any point.

| # | Section | Purpose — what it must answer | Data source | Where | Gate posture |
|---|---|---|---|---|---|
| **S4** | **Service×county hub** `docs/servicii/plan-topografic/alba/index.html` | The page a county query deserves. Must carry S1 + S2, the BCPI offices, all 78 Alba localities with **service-qualified anchor text**, an "orașe principale" block above the A–Z, the existing `priceRange`, **and a real FAQ + `FAQPage` schema** (GAP-2 — without it the new hub reproduces the defect). Becomes the leaves' breadcrumb parent. Closes GAP-1, GAP-2. Chair **W1**. | Existing `hubIntro`, `process`, `documents`, `priceRange`; **new `hubFaq`**; new route. | 1 new page (×12 services if generalised) | Hubs carry the **size gate only** (`MAX_HUB_BYTES 122880`) — no demotion risk. |
| **S5** | **Pin the permit FAQ on flagships** | Force *"Ce cuprinde planul topografic pentru autorizația de construire?"* and *"Care e diferența dintre plan topografic și plan de situație?"* onto `aiud.html` and `alba-iulia.html`. Closes GAP-7. | `faqPool` **selection** in `pages.js:410-418` + new `service.requiredFaq[]`. | flagships first | **NOT a pool resize (D13 upheld).** Own guarded commit; set-diff guard; **do not batch.** |
| **S1** | **"Ce livrăm" — named deliverable list** | Answer *"is the thing I need on this list?"* using the document names people search, not the service name. Must name at minimum: *plan topografic · plan de situație · plan de amplasament și delimitare · ridicare topografică · curbe de nivel · profile topografice · inventar de coordonate în Stereo 70 · plan în format dwg/dxf · releveu · nivelment · calcul de volume · plan vizat OCPI*. Closes GAP-6, feeds GAP-5. | **NEW `service.deliverables[]`** in `services.json`. | all 222 leaves + both hubs | Constant across all 222 ⇒ ≥50% document frequency ⇒ **dropped as boilerplate ⇒ gate-neutral** (SOP §5). Safe. |
| **S2** | **"Pentru ce se cere planul" — the permit chain** | Name the procedure as a chain: *certificat de urbanism → plan topografic vizat OCPI → autorizație de construire (P.A.C.)*, plus *PUZ/PUD*, *scoatere din circuitul agricol (SCA)*, *proiectare branșamente*, *notare construcție*. Mirrors cadastrumartin's 7-branch index — the structure that ranks on the permit query. Closes GAP-3. | **NEW `service.useCases[]`**; extend `documents` for GAP-8. | all 222 leaves + both hubs | Constant ⇒ boilerplate ⇒ gate-neutral. **No deadlines, no fees, no processing times — the chain only** (ruling 0.2). |
| **S3** | **Named surveyor line** | *"Măsurătoarea o face Aurel Fleser, inginer topograf autorizat ANCPI."* Closes GAP-4. The **name is not blocked** by ruling 0.1; the seria/numărul slot stays marked-empty until Aurel supplies it. | **NEW `site.surveyor{}`** — see §5, this field does **not** exist today. | all 222 leaves + hubs | Constant ⇒ boilerplate ⇒ gate-neutral. |
| **S6** | **Meta description rebuild** | Drop *"aprox. N km de Aiud"* above ~25 km; lead with the deliverable and the BCPI office. Closes GAP-11. Chair **D1/W2**. | `pages.js:457-460`. | 222 plan-topografic leaves (1,508 site-wide) | Head-only ⇒ **outside the gated region** ⇒ zero demotion risk. |
| **S7** | **`ridicare topografică` re-targeting** | Move the phrase from body boilerplate into the leaf/hub `<title>`, `<h1>` or an `<h2>`, so the service page — not `docs/dictionar/ridicare-topografica.html` — is the page that targets it. Closes GAP-5. **This is a targeting change, not new copy.** | Wording only; no new data field. | 222 leaves + hubs | Title/H1 are outside the gated content region; an added `<h2>` is constant ⇒ boilerplate ⇒ neutral. |
| **S8** | **Hub anchor text** | `Plan topografic în Alba Iulia`, not `Alba Iulia`. Closes GAP-12. Chair **W3(a)**. | `pages.js:544`. | both hubs | Hub-only ⇒ gate-free. |

### Sections deliberately NOT specified

- **More words.** GAP-13. We already match the cohort.
- **Add an FAQ / acte necesare / process steps to the leaves.** All three already exist and all
  three beat the entire surveyor cohort. (`facts.md` §5.)
- **A price or duration change in either direction.** See BLOCKED BY POLICY.
- **A per-office block on leaves.** Chair **D4** killed it: office subgroups are 5–11% of the
  sibling group, land in the residual, and drive overlap up. Hubs and flagships only.

---

## 5. DATA REQUIRED FROM GENERATOR

### Exists today — VERIFIED

`generator/data/services.json` → `plan-topografic`, exact key list:
`name`, `slug`, `shortName`, `tier2Available: true`, `hubOnly: false`, `metaDescription`,
`hubIntro`, `introVariants` (10, profile-keyed: `agricol-campie` / `montan-apuseni` / `urban` /
`periurban`), `process` (5), `documents` (**3**), `priceRange` (`"800 – 2.000 lei, orientativ, în
funcție de suprafață și scop"`), `faqPool` (10), `related` (4).

`generator/data/localities/alba.json` — 78 records, exact key list:
`name`, `slug`, `county`, `countySlug`, `type`, `villages`, `lat`, `lon`, `ocpiOffice{name,address}`,
`matrix`, `profile`, `countyNotesRef`, `localNote`, `nearby`, `distanceKmFromAiud`.
(`aiud` carries `distanceKmFromAiud: 0` — the 12.1 fix is live.)

**Three hooks `pages.js` already supports but no service uses** — free wins, no code change:

| Hook | Read at | Set for `plan-topografic`? | Set for any service? |
|---|---|---|---|
| `service.hubFaq[]` | `pages.js:531` | **no** | **no — 0 of 12.** Directly causes GAP-2. |
| `service.priceTable` | `pages.js:518` | no | yes — `cadastru-si-intabulare` only |
| `service.h1` | `pages.js:585` | no | no |

### Missing — must be added

| # | Field / route | For | Status |
|---|---|---|---|
| 1 | `service.deliverables[]` | S1 | Does not exist on any of the 12 services. New array in `services.json`; render constant across all leaves + hubs. |
| 2 | `service.useCases[]` | S2 | Does not exist. |
| 3 | `service.requiredFaq[]` + honour it before `pickSeeded` (`pages.js:410-418`) | S5 | Does not exist. Selection hook only — **not** a pool resize. |
| 4 | `service.hubFaq[]` populated for `plan-topografic` | S4, GAP-2 | Schema hook exists and is read; **the data is empty.** Populating it is a data-only change. |
| 5 | **County-scoped service hub route** | S4, chair **W1** | `buildServiceHub` (`pages.js:495`) is **national-only** — it hard-codes `/servicii/${service.slug}/index.html`, and `build.js:223` calls it once per service. No `<county>` variant exists for any service. New function + new call site. |
| 6 | `loc.serviceNotes{ "<service-slug>": "<prose>" }` | differentiating `alba-iulia` under `plan-topografic` from `alba-iulia` under `intabulare-teren` | Chair **D5** approved it; **VERIFIED absent** from `localities/alba.json`. Doștat and Alba Iulia are today structurally identical — same 12 headings, same 3 acte, same 5 steps, same price, same schema, differing only in place name, BCPI office, two geography paragraphs and the FAQ draw. **That identity is the mechanism behind the routing defect.** |
| 7 | `site.surveyor{ name, title, authSlot }` | S3 | **CORRECTION to the previous stage.** `site.json` has **no** person field — keys are `domain`, `buildDate`, `brand`, `nap`, `whatsapp`, `trustStats`, `deplasareNote`, `dictionaryDisclaimer`, `priceDisclaimer`, `nav`, `footer`, `en`, `ro`; `nap` holds `name: "Fleser Aurel Expert PFA"` and no personal name. S3 needs a **new field**, not an existing one. |
| 8 | Service-qualified hub anchor text | S8, chair **W3(a)** | `pages.js:544` emits the bare locality name. |
| 9 | `documents` extended beyond 3 | GAP-8 | Content work on an existing array — **no schema change.** |

### Build-state constraint

`generator/build-report.txt`: **2,095 pages emitted, render-gate demotions 0, data-gate demotions
0, errors 0.** Zero is the strictest baseline the guard has ever held. Gate after **every** change:

```
node generator/build.js && node generator/verify.js && node research/seo-2026-07/check-demotions.js
```

The demotion guard compares **key sets, not counts**. Never trust the count.

---

## 6. CORRECTIONS to the previous stage's report

Four figures did not survive independent re-verification. None changes a conclusion; all change a
number someone might act on.

| # | Previous stage said | VERIFIED 2026-07-29 |
|---|---|---|
| 1 | `P.A.C.` appears on **1 / 222** leaves | **0 / 222.** `PAC` bare is also 0 / 222. |
| 2 | `ridicare topografică` is on **0 / 222** — "the winning token is absent" | Unarticulated: 0 / 222, correct. **Articulated `ridicarea topografică`: 222 / 222**, inside `process` step 2. The term is *present as boilerplate body text on every page* and *absent from every title, H1 and heading* (0 / 222 titles). **The gap is targeting, not vocabulary** — and our only page that targets the phrase structurally is `docs/dictionar/ridicare-topografica.html`. Reframed as GAP-5. |
| 3 | S3's data source is *"`generator/data/site.json` NAP"* | `site.json` has **no** surveyor/person field. S3 requires a **new** field. |
| 4 | Inbound links: Doștat 18 · Aiud 21 · Alba Iulia 22 · Vadu Moților 24 | Files-containing-a-reference count: Doștat **17** · Aiud **20** · Alba Iulia **21** · Sântimbru **21** · Vadu Moților **23** · Sugag **14**. Different counting basis, **same conclusion**: the over-served page has the fewest links of any page it displaces, and a commune tops the county seat. |

**One addition the previous stage did not report** — `hubFaq` is unset on all 12 services, so the
service hub emits no FAQ and no `FAQPage` schema while all 222 of its leaves do. Promoted to
GAP-2 and made a precondition of S4.

---

## 7. BLOCKED BY POLICY — recorded, NOT actioned

| Item | What the competitors do | Our position |
|---|---|---|
| **Publishing / changing a price for `plan topografic`** | **Neither surveyor publishes one.** cadastrumaxim explicitly refuses: *"Costurile se calculeaza in functie de specificul lucrarii… contactati"* | **No change proposed in either direction.** The live `800 – 2.000 lei` range + standing `priceDisclaimer` is kept per CEO ruling 0.2. Not added to, not removed. Proposing removal is itself an anti-pattern (SOP §6). |
| **Turnaround / duration — including for the permit chain** | **Neither publishes one.** cadastrumaxim has soft *"timp scurt"* only. | **Forbidden by ruling 0.2.** Note specifically: S2 describes the permit chain and the searcher wants to know how long the OCPI viza takes. **Do not answer it with a number, a range, or "N zile lucrătoare".** The chain only. |
| **ANCPI authorization seria / numărul / categoria** | Neither competitor publishes an authorization number either. | **BLOCKED** pending CEO question 1 (ruling 0.1). Leave the marked slot. Never invent. **The NAME is not blocked** — S3 ships without the number. |
| **Citing *Ordin 600/2023 al Directorului General al ANCPI*** | cadastrumaxim cites it by name. | **BLOCKED pending verification** (ruling 0.5). A competitor's claim is not a verified instrument. GAP-9 is only actionable for an instrument Aurel or a primary ANCPI source confirms. |
| **Reproducing the apulum.ro document chain** | `portal.apulum.ro/acte-necesare-primaria-indsoft` ranks #9 on the permit query. | **BLOCKED.** WebFetch on 2026-07-29 found a navigation shell; the SERP capture's quoted chain **could not be re-verified at that URL**. Do not cite it as sourced. S2 must state the chain from our own professional knowledge, not attribute it to the primărie. |
| **Portfolio of past works (GAP-10)** | Both surveyors link one; a directory ranks with one. | **BLOCKED** — needs real anonymised work from Aurel. **Do not fabricate** (ruling 0.5). CEO ask. |
| **Any specific figure lifted from a ranking page** — *"P.V. NR. 298/2026"*, *"6.000 RON / 1.200,00 EUR"* (SICAP public tender), *"10% REDUCERE"* | Present on ranked pages. | **BLOCKED.** The SICAP figure is a public-procurement contract value, **not a retail benchmark** — do not treat it as one. Recorded as intelligence only. |
| **PNCCF years, sector numbers, parcel counts, dates** | — | **BLOCKED** by ruling 0.5. Nothing in this cohort requires them. |

**Net effect on this service: almost nothing.** No ranking competitor for `plan-topografic`
publishes a price or a turnaround, so ruling 0.2 costs us **no competitive ground here** — unlike
`intabulare-apartament` (necesit.ro 560–810 lei) and `dezmembrare-alipire` (brig.ro 336–2.100 RON).
Every lever in §4 is policy-free.

---

## 8. ESCALATIONS — flagged, not actioned by this agent

1. **A live hedged duration string on 222 pages.** The `faqPool` answer to *"Cât durează un plan
   topografic în {localitate}?"* reads: *"Măsurătoarea o programăm de regulă în câteva zile, planul
   îl întocmim în alte câteva, iar viza OCPI urmează termenele oficiului — care se pot scurta cu
   taxă de urgență."* Reads as **compliant** with ruling 0.2 — no "N zile lucrătoare", no BCPI
   processing claim, explicit deferral to the office's own terms, and it describes our own
   scheduling. But it is a duration statement on 222 live pages and ruling 0.2 has been tightened
   once already. **Chair's call. Escalated, not edited.**
2. **`ridicare topografica alba` is still unmeasured** (anti-bot block, 2026-07-29 14:08 UTC).
   It is the query behind GAP-5. Re-run when the block clears; until then GAP-5's impact stays
   MEDIUM on the evidence, not HIGH.
3. **The `docs/dictionar/` overlap with the service.** `ridicare-topografica.html`,
   `plan-topografic.html`, `masuratori-topografice.html` and `studiu-topografic.html` all target
   this service's head vocabulary from the glossary. Whether the glossary should link *down* to the
   service hub, or be de-optimised for the commercial phrase, is a site-architecture decision
   outside this spec's scope.
4. **W3 is mildly contradicted by this service's data.** The over-served page has the fewest
   inbound links of any page it displaces. W3 is worth doing on general grounds; **it must not be
   presented as the explanation for Doștat.**

---

## 9. What this spec does NOT establish

SERP analysis is **correlational** (SOP §7). That cadastrumaxim's 23-item menu appears as the
snippet on the #1 result does not establish that the menu causes the rank. That building a
county hub changes which URL Google serves is a **hypothesis** — well grounded in how hierarchy
works, unproven here, and mildly contradicted by the link data on this very service.

The surveyor cohort is **n = 2, both homepages**. Every "2 of 2" is unanimity across a two-page
base and should be read as such.

**Confirmed or refuted by one thing:** the Search Console **Pages** report at **2026-08-19**,
showing which URL Google serves per query. If the served URL does not change, the hypothesis
failed and we say so. Nothing here is promoted site-wide on the strength of this research alone.
