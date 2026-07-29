# CONTENT SPEC — `intabulare-apartament`

**Date:** 2026-07-29 · **Stage:** SOP-serp-research.md §3 Step 5–6 (gap analysis + spec)
**Inputs:** `research/seo-2026-07/serp/intabulare-apartament-serp.md` (4 queries) ·
`research/seo-2026-07/competitors/intabulare-apartament-competitors.md` (cohort n=4)
**All repo claims below were re-verified against the working tree and the built `docs/` on 2026-07-29.**
This agent writes no Romanian page copy and edits no generator data.

---

## 0. THE HEADLINE — READ BEFORE ANYTHING ELSE

> **Google serves the wrong page on 3 of 3 queries where we rank. Zero correct pages served.**
> Every content instruction below is worth nothing until routing is fixed. Per chair verdict D2,
> routing is upstream of quality. This service is the cleanest evidence of it on the whole site:
> **we beat all four surveyor competitors on every attribute Google can mechanically parse —
> FAQ (we 4–6, cohort 0/4), schema.org (we 4 blocks, cohort 0/4), itemised apartment acte
> necesare (we 5 items, cohort 0/4 with an apartment line), working WhatsApp (we 6 links,
> cohort 0/4) — and we still lose, because Google shows a page about houses, or a page about a
> commune of 1,700 people.**

| Query | Tier | Rank | Page Google SERVED | Page it SHOULD serve | Failure |
|---|---|---|---|---|---|
| `intabulare apartament alba` | county | **#5** | `intabulare-casa-constructie/alba/alba-iulia.html` | `intabulare-apartament/alba/` (hub, does not exist) → fallback `…/alba/alba-iulia.html` | wrong **service** + wrong **tier** |
| `cadastru apartament alba iulia` | city | **#9** | `cadastru-si-intabulare/alba/noslac.html` | `intabulare-apartament/alba/alba-iulia.html` | wrong **service** + wrong **locality** |
| `intabulare apartament aiud` | town | **#3** | `intabulare-apartament/alba/ramet.html` | `intabulare-apartament/alba/aiud.html` | right service, wrong **locality** — on our home turf |
| `cadastru apartament pret alba` | county | absent | — | — | **not a target** — see BLOCKED BY POLICY |

**Cohort:** 5 unique surveyor URLs, **4 extracted** (C5 `veritatopo.ro/preturi` returned HTTP 404
at extraction and contributes to no consensus claim). Only 2 of the 4 are Alba-local, and both of
those rank their **homepage**, not a service page.
**Aggregator share: 27 of 36 organic slots = 75% non-surveyor.** On `intabulare apartament alba`
and `intabulare apartament aiud` the competing surveyor cohort is **zero** — no rival surveyor
website reaches the top 10 at all. Those two queries are winnable on content alone. The only thing
between us and the click is our own wrong page.

---

## 1. GAPS — ranked, confidence-tagged (SOP Step 5)

Confidence rule applied literally: **HIGH requires near-unanimity among surveyors AND mechanical
checkability.** Word-count gaps are LOW by rule, regardless of how suggestive the correlation is.

---

### G1 · [HIGH] [moves-rankings] — The breadcrumb gives Google no service×county node, so all 936 Alba service leaves declare the same parent

**Mechanically verified in the built HTML.** `docs/servicii/intabulare-apartament/alba/alba-iulia.html`
ships a `BreadcrumbList` whose position 3 is:

```
{"position":3,"name":"Județul Alba","item":"https://expert-intabulare.ro/zone/alba/"}
```

`/zone/alba/` is a **cross-service** hub. Every one of the 78 Alba localities × 12 services declares
it as its parent. In the hierarchy Google is given, `intabulare-apartament/alba/alba-iulia` and
`intabulare-casa-constructie/alba/alba-iulia` and `cadastru-si-intabulare/alba/noslac` are **siblings
at the same depth under the same node**, with nothing distinguishing an apartment page from a house
page structurally.

**This is visible in the captured SERPs.** Google rendered the display URL of *every* one of our
results — including all three wrong pages — as `expert-intabulare.ro › … › Județul Alba`
(see the URL column of all four query tables in the SERP file). Google is using our breadcrumb as
the result's path. All our pages therefore present to the searcher as the same page.

`docs/servicii/intabulare-apartament/alba/index.html` **does not exist** (verified by `ls`).
78 leaves, no parent node.

*Confidence HIGH on the measurement — the breadcrumb is in the source and the SERP display URL
matches it on 4 of 4 captures. The claim that inserting a service×county node changes which page
is served is a **hypothesis**, tested at the 2026-08-19 GSC gate, not a promise.*

---

### G2 · [HIGH] [moves-rankings] — The FAQ count is a blind hash, and it hands our two most valuable localities the minimum

`generator/lib/pages.js:411–412`:

```js
const faqSeed = fnv1a(`faq:${loc.slug}:${service.slug}:${loc.countySlug}`);
const count = 4 + (faqSeed % 3);
```

The number of FAQ entries a page gets is a hash of its slug. It is **blind to locality tier, to
population, and to commercial value.** Recomputed for `intabulare-apartament`:

| Locality | FAQ count drawn |
|---|---|
| **Alba Iulia** (municipiu, county seat) | **4** — the floor |
| **Aiud** (municipiu, our own office) | **4** — the floor |
| Râmeț (comună, ~1,000 people) | **6** — the ceiling |
| Sebeș, Blaj, Teiuș, Abrud | 6 |
| Cugir | 4 |

Across the **92 emitted apartament leaves**: 35 draw 4, 26 draw 5, 31 draw 6.

**The specific loss is worse than the count.** The pool's highest commercial-intent question —
*"Cumpăr un apartament în {localitate} prin credit. Ce documente cadastrale îmi cere banca?"* — is
carried by only **26 of 92 leaves (28%)**. **Râmeț has it. Alba Iulia does not. Aiud does not.**
That is the exact question of chair verdict Flow 2 (Ana, selling an apartment in Alba Iulia with a
notary deadline) and Flow-2-adjacent buyers, and the two localities where those buyers live are the
ones that draw the shortest selection.

This is a **selection** defect, fixable by making `count` tier-aware. It is **not** a `faqPool`
resize, which is banned (D13 / facts.md §6).

*HIGH: mechanically checkable, reproduced from source, and the remedy is defensible on its own
merits — the two cities deserving the richest FAQ getting the thinnest one is a data-allocation bug
whether or not it moves rankings.*

---

### G3 · [HIGH] [table-stakes] — No named person anywhere in the content region; 3 of 4 surveyors name theirs

Cohort: **3 of 4** name the individual engineer — "Ing. Emanuel MAXIM" (with photographs),
"Inginer Dipl. Martin Nicolae", "Ing. Autorizat ANCPI Emilian Ion".
**0 of 4 publish an authorization number.** The competitive bar is the **name**, not the number.

Measured on our leaf: `"Fleser"` occurs **0 times inside `<!--content:start-->…<!--content:end-->`**
and 4 times on the whole page — all of them in the header wordmark, the footer NAP block and
`aria-label` chrome. The gated content region says only *"Topograf autorizat ANCPI, 25+ ani de
experiență"* — an **anonymous credential**.

**This is unblockable today at zero policy risk.** "Fleser Aurel" is already `site.json:brand` and
is already public in the Google Business Profile. Chair verdict B2 is blocked on the ANCPI number;
naming the person is not. **Ruling 0.1 still binds: no invented seria/număr/categorie.**

---

### G4 · [HIGH] [moves-rankings] — The wrong page quotes the wrong price, roughly double

Verified in `generator/data/services.json` and in the built HTML:

| Page | `priceRange` served to the searcher |
|---|---|
| `intabulare-casa-constructie` (served for apt-q1) | **1.000 – 2.500 lei** |
| `cadastru-si-intabulare` (served for apt-q2) | **900 – 2.500 lei** |
| `intabulare-apartament` (the correct answer) | **700 – 1.200 lei** |

A searcher comparing us against necesit.ro's snippet-badged *"Intervalul de preț: 560 – 810 lei"*
sees roughly **triple** the correct figure. This is a conversion loss caused **purely by routing**.
No wording change recovers it; only serving the right page does.

*Note: the fix is to route correctly, NOT to touch the ranges. CEO ruling 0.2 keeps the existing
hedged ranges exactly as they are; proposing to remove them is itself an anti-pattern (SOP §6).*

---

### G5 · [MEDIUM] [table-stakes] — The fee-vs-tax paragraph exists as a data field and reaches zero leaves

C3's single strongest trust move is separating the surveyor's fee from the OCPI tax, stating the tax
is fixed by law and paid direct to the office. It removes the customer's suspicion that the surveyor
pockets it.

**We already own that paragraph, and it is already policy-clean** (it names no figure and no
duration). `generator/data/counties.json` carries a `feeNote` field on **all five counties**.
`generator/lib/pages.js:634` renders it — into `page-county-hub.html` **only**.

Verified: `grep -rl "Onorariul lucrării de specialitate se stabilește separat" docs/` returns
**exactly one file**, `docs/zone/alba/index.html`. **Zero leaves.**
Our leaf says only *"plus tarifele ANCPI"*, **once**, inside an FAQ answer.

---

### G6 · [MEDIUM] [table-stakes] — The price paragraph carries no heading

**Correction to the previous stage:** the price is **not** inside a `<details>` element — verified
false. It renders as a bare paragraph (`pages.js:399–401`):

```
Preț orientativ: 700 – 1.200 lei, orientativ, pentru un apartament obișnuit. <priceDisclaimer>
```

It is visible. What it lacks is a **heading**. The leaf's H2 outline is: *Unde se depune dosarul ·
Despre lucrări în X · Acte necesare · Cum decurge procesul · Particularități OCPI · Întrebări
frecvente · Contact rapid · Alte servicii · Localități apropiate · Vezi și.* **No cost heading.**

The cohort indexes cost as a heading: C4's H2s are literally *"Ce costuri presupune o lucrare de
cadastru"* and *"Cât durează să obții cadastrul și intabularea"*; C3's are *"Preturi cadastru si
intabulare apartament"* and *"Taxe si termen de avizare OCPI"*. C4 puts both in the URL and the H1.

---

### G7 · [MEDIUM] [table-stakes] — The duration FAQ is live on 54 pages, not one

The previous stage flagged *"documentația în câteva zile"* as a `ramet.html` issue. It is not.
It is `services.json → intabulare-apartament.faqPool[0]`:

> **Q:** Cât durează cadastrul unui apartament în {localitate}?
> **A:** Releveul se face într-o singură vizită, **documentația în câteva zile**, iar soluționarea la
> {ocpi} urmează termenele obișnuite, care pot fi scurtate cu taxă de urgență…

Verified: `grep -rl "documentația în câteva zile" docs/` → **54 files**, = **58.7% of the 92 emitted
apartament leaves**. It names no day count and hedges BCPI processing rather than claiming it, so it
does not clearly breach ruling 0.2 — but it is a turnaround statement about our own work on 54 live
pages, and the SOP forbids *"se rezolvă în X zile"*-class claims. **Escalated, not actioned.**

**Gate note, which makes the remedy cheap:** at 58.7% this text sits **above** the 50% boilerplate
cut, so it is already dropped before overlap is measured. **Rewording the answer in place** keeps
`faqPool.length` at 10, keeps document frequency at 58.7%, and is therefore gate-neutral in both
directions. That is an in-place reword, **not** a pool resize, so D13 is not engaged.

---

### G8 · [LOW] [table-stakes] — No portfolio or photographic proof

C1 ships 35 images (equipment, drone, 4×4 fleet, field work) plus photographs of the named engineer;
C2 ships a gallery and a Portofoliu section. We ship none. **Correlational only** — C1 has no prices,
no acte necesare, no process steps, no FAQ and no schema.org, and still outranks the page Google
served for us. Do not read causation into it.

---

### G9 · [LOW] [table-stakes] — The certificat-energetic cross-sell is structurally absent, not merely under-labelled

**Correction to the previous stage,** which said *"the link already exists in 'Alte servicii'; give
it apartment-specific anchor text."* It does not exist. Verified:

- `certificat-energetic` is **`hubOnly: true`** in `services.json` (as are `topografie-constructii`,
  `servicii-ocpi`, `expertize-documentatii`) — it has **no locality leaves at all**;
  `docs/servicii/certificat-energetic/` contains only `index.html`.
- The "Alte servicii" block filters on `emitted.has(...)` (`pages.js:422–428`), so a hub-only service
  can never appear there.
- Confirmed: **0 occurrences of `certificat-energetic`** anywhere on
  `intabulare-apartament/alba/alba-iulia.html`.

C4 bundles cadastru + intabulare + certificat energetic as one priced package. **Any bundle price is
blocked by policy.** A deliberate link to `/servicii/certificat-energetic/` is not.

---

### G10 · [LOW] [moves-rankings] — Google served the fatter sibling in 3 of 3 cases

Re-measured on the built HTML (gated region only):

| Query | Served page | words | FAQ | Correct page | words | FAQ |
|---|---|---|---|---|---|---|
| apt-q1 | casa-constructie/alba-iulia | **838** | 4 | apartament/alba-iulia | 820 | 4 |
| apt-q2 | cadastru-si-intabulare/noslac | **891** | **6** | apartament/alba-iulia | 820 | 4 |
| apt-q3 | apartament/**ramet** | **884** | **6** | apartament/**aiud** | 826 | 4 |

Three for three, the served page is longer; two of three, it has more FAQ entries.
**Tagged LOW by SOP Step 5 rule: word-count gaps are correlational — length correlates with rank
without causing it, and n=3.** It is recorded because it is the measured basis for G2's remedy, not
because length is a target. **Do not pad pages to hit a word count.**

---

## 2. BLOCKED BY POLICY — recorded as intelligence, never published

| # | Competitor pattern | Why blocked |
|---|---|---|
| **B-P1** | **Per-room-count price ladder.** C3: garsonieră 800 / 2 cam 900 / 3 cam 1.000 / 4 cam 1.200 lei + 75 lei taxă OCPI. C4: 500 / 500 / 600 / 650 lei, plus a bundle ladder 650/650/750/800. Google's own related searches on apt-q4 include **`Pret cadastru si intabulare apartament 3 camere`** — the demand is measured and real. | Would require inventing four new figures not in `services.json`. **Ruling 0.2.** Our hedged **700 – 1.200 lei** band and the standing `priceDisclaimer` stay **exactly as they are** — they are approved, live, and removing them would be a competitive loss. |
| **B-P2** | **Turnaround claims.** C3: 21 zile normal / 7 zile urgență (9/3 for alipire). C4: 3 zile for measurement, 30–50 zile overall. C5: 18 zile. `rivx.ro` (blog, outside cohort): **300–800 lei and 30–60 zile for Alba Iulia specifically** — the only source naming our exact market. | Checkable facts about a government office we do not know. **Ruling 0.2.** We publish none, and **G7 says we should remove the one hedged instance we already have.** |
| **B-P3** | **Exact ANCPI tariff.** C3 prints 75 / 120 / 60 lei per service type; C3 also explains the urgency formula ("tariful normal + de 5 ori tariful normal, dar nu mai mult de 5.000 lei"). | We have not verified it. **Ruling 0.2.** |
| **B-P4** | **Bundle price** for cadastru + intabulare + certificat energetic (C4). | Same as B-P1. The **cross-link** is allowed (G9); the **price** is not. |
| **B-P5** | **ANCPI authorization number.** 0 of 4 competitors publish one either, so this is not a competitive gap — but it is a standing CEO item. | **Ruling 0.1: never invent a number.** Leave the marked slot. G3 proceeds **without** it. |

**Consequence, stated plainly: `cadastru apartament pret alba` is dropped as a target.**
Every result on it competes on exact figures and day counts we are forbidden to publish, and Google
printed **`Lipsesc: alba`** on **5 of 9** results — the query is being answered by national price
pages, so the local modifier is decorative. **We are absent from it today and that is the correct
outcome, not a defect.**

---

## 3. CONTENT SPEC — what the pages must contain (SOP Step 6)

Ordered by the chair's ruling: **routing first (S1–S2), then content (S3–S8).**
No Romanian copy is written here. Each section states purpose, what it must answer, its data source,
and its gate assessment.

### ROUTING WORK — do this first, nothing below matters without it

---

**S1 · Service×county hub — `/servicii/intabulare-apartament/alba/index.html`** *(new page)*

- **Purpose:** G1 + G7 / chair W1. Give the county query a page to land on, and give the 78 Alba
  leaves a parent that is specific to *this service*.
- **Must answer:** "I have an apartment somewhere in Alba county — do you cover my town, which office
  does my file go to, what do I need to bring, and what does it cost roughly?"
- **Must carry:** apartment `documents[]` (5 items) · `process[]` (5 steps) · all five Alba BCPI
  offices with street addresses (from `counties.json → alba.bcpiOffices`) · the hedged
  700 – 1.200 lei range + `priceDisclaimer` · an FAQ block drawn from `faqPool` ·
  `Service` + `FAQPage` + `BreadcrumbList` schema · an **"orașe principale"** block (Alba Iulia,
  Sebeș, Aiud, Blaj, Cugir, Ocna Mureș, Teiuș) **above** the A–Z locality list (chair W3c) ·
  `feeNote` · WhatsApp CTA with an apartment-specific prefill.
- **Data source:** all fields exist. **No new template exists** — `page-county-hub.html` is the
  cross-service county hub and is not reusable as-is.
- **Gate:** hub pages carry only `MAX_HUB_BYTES = 122880`. **No demotion risk.** (Chair §3.4.)

---

**S2 · Re-parent the leaf breadcrumb**

- **Purpose:** G1. Position 3 currently points every service's Alba leaf at the same cross-service
  node. Insert the S1 hub so the chain reads
  `Acasă › Intabulare apartament › Intabulare apartament în județul Alba › Alba Iulia`.
- **Must answer:** nothing to the reader — this is a machine-readable hierarchy signal, and it is the
  string Google is currently printing as our display URL on all four captured SERPs.
- **Data source:** `pages.js` breadcrumb builder. The S1 hub must exist first.
- **Gate:** JSON-LD sits outside the gated content region — **free of demotion risk**, same class as
  the D1 meta rebuild.
- ⚠️ **Ship as its own commit.** It touches every service leaf, not just this service.

---

### CONTENT WORK — only after S1–S2

---

**S3 · "Cine vine la măsurătoare" — named surveyor block** *(new section, gated region)*

- **Purpose:** G3. Closes the only near-unanimous cohort gap (3 of 4).
- **Must answer:** "Who, by name, is the person who will come into my apartment with a laser?"
- **Must contain:** the name **Aurel Fleser**, the role (inginer topograf autorizat ANCPI), the
  standing 25+ years, and the office address in Aiud.
- **Data source:** `site.json → brand` / `nap` — **already present, no new fact required from Aurel,
  already public in the Google Business Profile.**
- **MUST NOT contain:** any authorization seria/număr/categorie until Aurel supplies it (ruling 0.1,
  B-P5). Leave the marked slot.
- **Gate:** constant across all 92 sibling pages ⇒ document frequency 100% ⇒ **boilerplate ⇒ dropped
  before overlap ⇒ gate-invisible.** Safe.
- **Reach:** this is a whole-site block, not an apartment block. Coordinate with the other 11 service
  specs — **single writer per file** (SOP §4.1).

---

**S4 · "Onorariu și tarife OCPI" — fee-vs-tax separation on the leaf**

- **Purpose:** G5. Adopts the cohort's strongest trust move using a paragraph we already own and that
  is already policy-clean.
- **Must answer:** "Is the ANCPI/OCPI tariff part of your fee, or extra? Who do I pay it to?"
- **Data source:** `counties.json → <county>.feeNote` — **the field already exists on all five
  counties**; `pages.js:634` currently renders it into the county-hub template only. Wiring it to the
  leaf is a render-site change, not a data change.
- ⚠️ **Reword, do not copy-paste.** Reusing the hub's exact sentence collides with
  `docs/zone/alba/index.html` on the 3-word shingle check (SOP §4.7: no run of two or more
  consecutive shared shingles).
- ⚠️ **Gate — this one is asymmetric and must be measured, not assumed.** The sibling group for
  `intabulare-apartament` is **92 pages, not ~222**: Alba 78 · Cluj 5 · Mureș 4 · Hunedoara 3 ·
  Sibiu 2. So **Alba-constant text sits at 84.8% — above the 50% cut — and is safely boilerplate for
  this service.** The four other counties sit at 2–5%, land in the residual, and **raise pairwise
  overlap among those few pages**. This refines facts.md §6, which assumed a ~35% county share from
  222-page groups. **Ship guarded; revert on any newly demoted key.**
- **No figure, no duration** ⇒ ruling 0.2 clean.

---

**S5 · FAQ allocation made tier-aware**

- **Purpose:** G2. Stop handing Alba Iulia and Aiud the 4-entry floor while Râmeț draws 6.
- **Must answer:** more of the buyer's real questions on the pages the buyer actually reaches —
  in particular the **bank/credit question**, currently on 26 of 92 leaves and on neither city.
- **Mechanism:** make `count` at `pages.js:412` a function of `loc.type` (municipiu/oraș → ceiling;
  comună → current hash) and/or bias the seeded pick so the credit and cost questions are always
  drawn for municipiu-tier localities.
- **Data source:** `loc.type` already exists on every locality record. `faqSelection` is derived,
  not stored.
- 🚫 **HARD CONSTRAINT: this is a SELECTION change, NOT a `faqPool` RESIZE.** Pool resizing is banned
  (chair D13, facts.md §6) — pool text sits at ~45% document frequency, just under the boilerplate
  cliff, and resizing moves shingles across it in bulk.
- ⚠️ **Gate:** raising the count on a subset of pages *does* shift document frequencies of individual
  pool entries across the 50% cut in both directions. **Direction is not predictable a priori.**
  Rebuild and run the set-diff guard after this change alone, before anything else in this spec.

---

**S6 · Reword `faqPool[0]` to remove the turnaround statement**

- **Purpose:** G7 / ruling 0.2. Removes *"documentația în câteva zile"* from **54 live pages**.
- **Must answer:** the same question ("how does this go?") **without** any statement about elapsed
  time — ours or BCPI's. The approved workflow/capability framing (ruling 0.5) is available:
  describe *what happens*, never *how long it takes*.
- **Data source:** `services.json → intabulare-apartament.faqPool[0].a`. In-place edit only.
- 🚫 **Keep `faqPool.length` at 10.** Editing an answer is not a resize; deleting the entry is.
- **Gate:** the entry sits at 58.7% document frequency — above the cut, therefore boilerplate both
  before and after. **Expected gate-neutral.** Verify anyway.
- ⚠️ **Also check the other 11 services' pools for the same phrasing before shipping** — this pattern
  is unlikely to be unique to the apartment pool.

---

**S7 · A cost heading over the existing price paragraph**

- **Purpose:** G6. The cohort indexes cost as a heading; we have no cost heading at all.
- **Must answer:** "Cât costă?" — as an addressable H2, at the same place in the flow.
- **The answer text does not change.** The hedged **700 – 1.200 lei** range and the standing
  `priceDisclaimer` stay **exactly as they are** (ruling 0.2 — they are approved and live).
- 🚫 **NO duration heading.** C3 and C4 both pair cost with durată; we have no duration answer, we
  will not invent one, and per S6 we are removing the one hedged instance we have.
- **Data source:** `services.json → priceRange`, `site.json → priceDisclaimer`. Both exist.
- **Gate:** a constant heading string across all 92 siblings ⇒ boilerplate ⇒ invisible.

---

**S8 · `loc.serviceNotes{}` — apartment-specific per-locality prose**

- **Purpose:** the direct cure for the apt-q1 failure mode. Today the apartment leaf and the
  casă/construcție leaf for Alba Iulia draw the **same** `localNote`, the **same** `villages`, the
  **same** `countyNote` and the same BCPI block. They are **structurally incapable of differing** on
  anything except the service-level `introVariants`, `documents`, `process`, `priceRange` and
  `faqPool`. Verified on the served page: `intabulare-casa-constructie/alba/alba-iulia.html` contains
  **6 occurrences of "apartament", all inside navigation `<a href>` elements, zero in body prose** —
  yet Google chose it to answer an apartment query.
- **Must answer:** what is specific about apartments *in this town* — bloc stock, apartamentare of new
  developments, whether the building has a collective CF, etc.
- **Data source:** **`loc.serviceNotes: { "<service-slug>": "<prose>" }` — approved by chair D5, NOT
  YET SHIPPED.** Does not exist in `generator/data/localities/alba.json` today (verified: the record
  keys are `name, slug, county, countySlug, type, villages, lat, lon, ocpiOffice, matrix, profile,
  countyNotesRef, localNote, nearby, distanceKmFromAiud` — no `serviceNotes`).
- **Gate — this is the good kind of text:** genuinely per-locality prose is **page-exclusive**, so it
  **raises unique words** (floor is 120) and **lowers overlap**. Strictly favourable.
- 🚫 **Anti-pattern warning (SOP §6):** per-locality text that only swaps the place name falls below
  the 50% cut, lands in the residual and **inflates** overlap. Either substantively per-locality or
  not written at all.
- **Scope:** flagship localities first (Alba Iulia, Aiud), not all 78.

---

**S9 · Certificat energetic cross-link** *(low priority)*

- **Purpose:** G9. C4 cross-sells it inside the apartment decision.
- **Must be:** a deliberate link to `/servicii/certificat-energetic/` (the **national hub** — the
  service is `hubOnly: true` and has no locality leaves), with apartment-relevant anchor text.
- 🚫 **No bundle price** (B-P4).
- **Note:** it cannot be achieved by re-labelling "Alte servicii" — that block filters to emitted
  leaves and can never contain a hub-only service.

---

## 4. DATA REQUIRED FROM GENERATOR

**EXISTS — feeds a spec section today, no new data needed**

| Field | Location | Feeds |
|---|---|---|
| `priceRange` = "700 – 1.200 lei…" | `services.json` | S1, S7 |
| `priceDisclaimer` | `site.json` | S1, S7 |
| `documents[]` (5 apartment items) | `services.json` | S1 |
| `process[]` (5 steps) | `services.json` | S1 |
| `faqPool[]` (10 entries) | `services.json` | S1, S5, S6 |
| `introVariants[]` (8, by profile) | `services.json` | existing intro |
| **`feeNote`** — on **all 5 counties** | `counties.json` | **S4 — exists, rendered only on the county hub** |
| `bcpiOffices[]` + addresses | `counties.json` | S1 |
| `countyNote` | `counties.json` | existing |
| `loc.type` (municipiu/oraș/comuna) | `localities/*.json` | **S5 — the tier signal already exists** |
| `loc.ocpiOffice{name,address}` | `localities/*.json` | existing |
| `loc.villages[]`, `loc.localNote`, `loc.profile` | `localities/*.json` | existing |
| `loc.distanceKmFromAiud` | `localities/*.json` | existing; `aiud: 0` is set — 12.1 fix landed |
| `brand` = "Fleser Aurel Expert", `nap{}` | `site.json` | **S3 — the name already exists** |

**MISSING — must be created**

| Missing | Needed by | Note |
|---|---|---|
| **`loc.serviceNotes{}`** | S8 | Chair D5 approved, **not shipped**. The single highest-value generator change for this service. |
| **Service×county hub template + route** | S1, S2 | `docs/servicii/intabulare-apartament/alba/index.html` does not exist. `page-county-hub.html` is the cross-service hub and is not reusable as-is. |
| **Tier-aware FAQ count** | S5 | `pages.js:412` is a pure hash. `loc.type` exists; the logic does not. |
| **`feeNote` render site on the leaf** | S4 | Field exists; only `pages.js:634` (hub) consumes it. |
| **Named-person constant** | S3 | One constant string; not per-locality data. |

**NOT AVAILABLE AND NOT TO BE INVENTED**

Room-count price ladder · exact ANCPI/OCPI tariff · any turnaround or duration figure ·
ANCPI authorization seria/număr/categorie · PNCCF years, sector numbers, parcel counts, dates.

---

## 5. ROUTING DEFECT

**YES — 3 of 3 queries where we rank. Zero correct pages served.**

- `intabulare apartament alba` #5 → served `intabulare-casa-constructie/alba/alba-iulia.html`
  (wrong service **and** wrong tier) → should be the S1 county hub, falling back to
  `intabulare-apartament/alba/alba-iulia.html`.
- `cadastru apartament alba iulia` #9 → served `cadastru-si-intabulare/alba/noslac.html`
  (wrong service **and** wrong locality — the query names the county seat, the page is a commune
  ~40 km from it) → should be `intabulare-apartament/alba/alba-iulia.html`.
- `intabulare apartament aiud` #3 → served `intabulare-apartament/alba/ramet.html`
  (right service, wrong locality — **on our home turf, where the office physically is**) → should be
  `intabulare-apartament/alba/aiud.html`.

**Mechanism identified, not merely observed (G1):** the leaf breadcrumb declares `/zone/alba/` — a
cross-service node — as the parent of all 936 Alba service leaves, and Google is printing that exact
chain as our display URL on all four captured SERPs. There is no structural signal separating the
apartment page from the house page. **S1 and S2 address the mechanism; everything else is downstream.**

**Two second-order costs of the defect, both measured:**
1. The served pages quote **1.000 – 2.500** and **900 – 2.500 lei** against the correct
   **700 – 1.200 lei** — roughly triple necesit.ro's snippet-badged 560 – 810 lei (G4).
2. The served page has more gated words in 3 of 3 cases and more FAQ entries in 2 of 3 (G10) —
   tagged LOW and correlational, but it is why S5 is scoped as a **selection** fix rather than
   page padding.

---

## 6. FLAGS RAISED FOR THE CHAIR — not actioned by this agent

1. **The turnaround FAQ is a 54-page issue, not a Râmeț issue.** `faqPool[0]`'s *"documentația în
   câteva zile"* is live on 54 of 92 emitted apartament leaves (verified by grep). The previous stage
   scoped it to one page. **Needs a ruling on whether hedged, number-free turnaround language about
   our own work is inside or outside ruling 0.2** — and the other 11 service pools should be checked
   for the same pattern.
2. **D1 meta defect confirmed live on this service's leaves:** *"aprox. 39 km de Aiud"* (Alba Iulia),
   *"aprox. 19 km de Aiud"* (Râmeț). `intabulare-apartament/alba/aiud.html` correctly reads
   *"birou chiar în Aiud"*, so the 12.1 fix has landed there. **D1 remains open for the other 77 Alba
   localities.**
3. **The sibling group for this service is 92 pages, not ~222.** Alba is 84.8% of it. The facts.md §6
   rule of thumb ("county-constant text ≈35% ⇒ residual ⇒ dangerous") **inverts for this service**:
   Alba-constant text is safe boilerplate, and the risk sits with the 14 non-Alba leaves. Any agent
   applying the §6 heuristic to `intabulare-apartament` without recomputing will get it backwards.
4. **Two corrections to the previous stage's spec**, both verified: the price paragraph is **not**
   inside `<details>` (S7 is a heading addition, not a promotion out of an accordion); and the
   certificat-energetic link does **not** already exist in "Alte servicii" — that service is
   `hubOnly: true` and can never appear in that block (S9).

---

## 7. WHAT THIS DOES NOT ESTABLISH

SERP analysis is **correlational**. That Google serves `ramet.html` for `intabulare apartament aiud`
is a measured fact; that a service×county hub and a re-parented breadcrumb will change it is a
**hypothesis**. The cohort is **4 pages, only 2 of them Alba-local, and both of those rank a
homepage** — three of four queries fell short of the SOP's 3-surveyor minimum, and two had a cohort
of **zero**. No claim here is a ranking recipe, and nothing in it promises a #1.

**Confirmed or refuted by one thing: the 2026-08-19 Search Console "Pages" report showing which URL
Google serves per query.** If the served URL does not change, the hypothesis failed and we say so.
