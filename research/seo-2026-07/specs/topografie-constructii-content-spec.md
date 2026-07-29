# CONTENT SPEC — `topografie-constructii`

**SOP-serp-research.md Step 6 · 2026-07-29 · spec only, no Romanian page copy**
**Inputs:** `research/seo-2026-07/serp/topografie-constructii-serp.md` (4 SERPs),
`research/seo-2026-07/competitors/topografie-constructii-competitors.md` (6 surveyor pages).
**Consensus computed over the SURVEYOR COHORT ONLY (n = 6).** Directories, Facebook, the Primărie
register, OLX and the UAB degree page were classified per SOP Step 2 and excluded from every count.

---

## 0. HEADLINE — read before anything else

**ROUTING DEFECT: NO.** This is the only service on the board with a clean routing record.

```
topc-q3  `topografie constructii aiud`   rank #3
servedPage  : docs/servicii/topografie-constructii/index.html
correctPage : docs/servicii/topografie-constructii/index.html
DIFFERENCE  : NONE
```

There is no cannibalization here because there are **no siblings to cannibalize**.
`topografie-constructii` is `hubOnly: true` (verified `generator/data/services.json`;
`generator/build.js:181` and `:199` skip it in both the data gate and the render gate).
`find docs/servicii/topografie-constructii -type f` returns **exactly one file**.

**The defect on this service is INVENTORY, not routing.** On three of four queries
(`topografie constructii alba`, `topografie constructii alba iulia`, `topograf santier alba iulia`)
we are absent from organic **and** absent from the map pack, and `correctPage` **does not exist** —
there is no `topografie-constructii/alba/alba-iulia.html`, no `/servicii/topografie-constructii/alba/`
hub, and `docs/zone/alba/index.html` carries zero construction content.

**We are not losing those three queries. We are not entered in them.**

The chair's ruling (routing before content) is satisfied on this service and does not gate the work
below. What *does* gate it: a page that does not exist cannot be routed to. Section S4 is therefore
the highest-value item in this spec even though it is structural, not editorial.

---

## 1. Position, cohort, aggregator share

| Query | Tier | Map pack | Our rank | Page served | Aggregator share | Surveyor cohort |
|---|---|---|---|---|---|---|
| `topografie constructii alba` | county | none | **absent** | — | 3/9 | 6 |
| `topografie constructii alba iulia` | city | **6 businesses, 2 blocks** | **absent** (organic + map) | — | 3/10 | 6 |
| `topografie constructii aiud` | town | none (owner-only panel) | **#3** | `/servicii/topografie-constructii/` — CORRECT | 9/10 | **1 (ours)** |
| `topograf santier alba iulia` | city | **3 businesses** | **absent** (organic + map) | — | 5/10 | 5 |

**Aggregate 21/39 ≈ 54% non-surveyor — but the figure is bimodal and the bimodality is the story.**
The two Alba Iulia queries at 3/9 and 3/10 are the **lowest aggregator share anywhere in this
research session**: real surveying firms contest the county capital, and each of the six ranked with
a **company homepage**, not a service page and not a locality leaf. The Aiud query at 9/10 is one of
the highest: nobody contests the town, and both local rivals reach that SERP through Facebook only.

**SHORTFALL recorded per SOP Step 3:** on `topografie constructii aiud` the surveyor cohort is **1,
and it is ours**. No padding with directories was done. The #9 `aiud.cylex.ro` result is our own
business listing, not a competitor.

### Positive evidence for chair work-item W1
A **194-word hub with no locality text, no FAQ and no map-pack support ranks #3** on a town-level
transactional query, above two rivals' Facebook pages, a Primărie register and four directories.
Hub-shaped pages in this vertical do rank, and this one did not suffer the sibling cannibalization
that damages the leaf inventory. Stated with the confidence it deserves: **n = 1, correlational.**

---

## 2. GAPS — ranked, confidence-tagged (SOP Step 5)

HIGH requires near-unanimity among the 6 surveyors **and** mechanical checkability.
Word-count gaps are LOW by rule — length correlates with rank without causing it.

| # | Gap | Confidence | Impact | Evidence |
|---|---|---|---|---|
| G1 | **No Alba Iulia surface exists for this service.** 6/6 surveyors name Alba Iulia; our page names it **0 times** (grepped). Three of four queries are Alba Iulia-anchored; we are absent from all three and `correctPage` does not exist. | **HIGH** | moves-rankings | 6/6 counted; `grep -o -i "alba iulia"` on our hub = 0 |
| G2 | **Construction-site query vocabulary absent.** `topografiealba.ro` ranks **#3** on `topograf santier alba iulia` on ~500 words whose only distinguishing asset is the verbatim phrase set *"PAC, PUZ, PUD, lucrări topo, planuri de amplasament, urmărire de șantier, monitorizări volume, trasare limite și rețele de nivelment"*. Our page has **0 occurrences of all of them**. | **HIGH** | moves-rankings | verbatim from the ranking page; grep on ours = 0 for each of 9 terms |
| G3 | **6 authored FAQ entries are never published — live generator defect.** `generator/lib/pages.js:531` reads `service.hubFaq`; `hubFaq` is **absent on all 12 services** (union-of-keys check). `faqPool` is read only by the leaf builder at `:410`. `grep -c '<details'` = **0 on all 12 built hubs**. For the 4 `hubOnly` services the content exists **nowhere on the site**. | **HIGH** | table-stakes **and** moves-rankings (it carries half of G2's vocabulary in already-approved text) | source-verified; `<details>` count measured on all 12 hubs |
| G4 | **No named individual surveyor.** 4/6 name one (Martin Nicolae · Emanuel MAXIM · Marius Popescu · TBL principals); cadastrumaxim photographs him. | **HIGH** | table-stakes | 4/6 counted |
| G5 | **County hub is silent on this service.** `docs/zone/alba/index.html` mentions `topografie-constructii` **exactly once**, in the nav list, anchor text `"Topografie construcții"` — not *"…în județul Alba"*. No construction content anywhere on it. It did not appear on topc-q1. | **MEDIUM** | moves-rankings (W3(a) anchor-text hypothesis) | grepped: 1 reference, generic anchor |
| G6 | **No named reference projects.** 3/6 have them; TBL names the A7 motorway, Parcul Industrial Holboca, Parcul IC Brătianu. Our `"1052+ proiecte finalizate"` counter is unverifiable and is the weak substitute. | **MEDIUM** | table-stakes | 3/6 counted |
| G7 | **No on-page testimonials.** 1/6 has them (pdproiectsurveyor, 6 named + role) — and that one is #1 on both Alba Iulia queries. n = 1, so the mechanism is unestablished. | **LOW** | table-stakes | 1/6 |
| G8 | **Shortest page in the cohort** — 452 total / 194 gated vs a cohort range of 320–3,000 (median ~1,000). | **LOW** | table-stakes | measured. **Not a target.** Word count is a by-product of S1+S2, never a goal. SOP §7. |
| G9 | **Absent from both Alba Iulia map packs** (6 businesses on topc-q2, 3 on topc-q4; every one has an Alba Iulia address, ours is Aiud). | n/a | **NOT ADDRESSABLE BY PAGE CONTENT** | SOP §3 Step 1 and §6. **No page change is proposed.** Review growth (chair D11) is the only lever and it is a CEO action. |

### NOT gaps — where we already match or beat the cohort
Do not "fix" any of these; proposing to would fail review.

- **Price:** 0/6 publish a figure for construction topography. Our `"ofertă per proiect, în funcție
  de etape și durată"` **is** the cohort norm.
- **Duration:** 0/6 publish a turnaround figure. The softest claims in the cohort are gistopocad's
  *"realizate rapid, eficient"* and cadastrumaxim's *"in timp scurt" / "promptitudine"*.
- **ANCPI authorization number:** 0/6 publish one. Publishing ours would make us the **only** page in
  the cohort with it — an advantage, not a catch-up.
- **Numbered process** (us 5 steps, cohort 0/6) · **JSON-LD** (us 7 types, cohort 0/6) · **WhatsApp**
  (us 6 links + floating button, cohort 0/6) · **acte necesare** (us yes, cohort 2/6) ·
  **years of experience** (25+ vs cohort max "peste 9 ani") · **HTTPS, correct diacritics, mobile
  framing** — all already ahead.

---

## 3. CONTENT SPEC — sections, in priority order

Each entry states **purpose**, **what it must answer**, **data source**, and **gate exposure**.
No Romanian copy is written here; the implementation stage writes it.

Gate note applying to every section below: the national hub is **18,309 bytes of a 122,880-byte hub
cap**, and hubs carry **only** `sizeGate` (`generator/build.js:264` → `isHub = path.endsWith('/index.html')`).
Hubs are **not** in `localityPages` and therefore never enter the sibling render gate.
**Every section below is demotion-risk-free.**

---

### S1 — `Întrebări frecvente` · **do this first, it is the cheapest HIGH on the board**
- **Purpose:** close G3 outright and roughly half of G2, using text Aurel already approved.
- **Must answer:** the six authored construction-buyer questions, verbatim, plus emit `FAQPage`
  JSON-LD (`schema.faqPage`, already imported and already called at `pages.js:534` — it is simply
  never reached because `faqs` is always empty on hubs).
- **Data source:** `generator/data/services.json → topografie-constructii.faqPool[6]` — **exists
  today, is unreachable from the hub builder.** Verbatim:
  1. *Ce lucrări topografice cere un șantier obișnuit?*
  2. *Lucrați cu firme de construcții pe bază de contract?*
  3. *Ce precizie au trasările?*
  4. *Faceți calcul de volume pentru decontarea terasamentelor?*
  5. *Ce este documentația as-built și cine o cere?*
  6. *Monitorizați tasări sau deformații în timp?*
- **Why it also serves G2:** entry 6 is the **only** place in our entire dataset where *tasări* and
  *deformații* appear — the exact pair `pdproiectsurveyor.ro` ranks on (*"Monitorizarea deformărilor
  și tasărilor"*). Entry 3 introduces *proces-verbal* and *precizie centimetrică*, entry 4 *calcul de
  volume* and *terasamente*, entry 1 the *șantier* framing. It roughly doubles page content with
  **zero new claims and zero new numbers.**
- **Differentiator note:** 0/6 competitors have an FAQ on the ranking page. This is catch-up on our
  own leaf pages and a lead over the cohort.
- **CODE CHANGE REQUIRED:** `generator/lib/pages.js:531` — fall back to `faqPool` when `hubFaq` is
  absent, mirroring the leaf builder at `:410`. **Affects all 12 hubs**, so it must ship as its own
  guarded commit with the full gate (`build → verify → check-demotions`) run before and after.
- **Policy pre-check before publishing verbatim (do this, do not assume):** entry 2 contains
  *"tarife per etapă sau abonament de șantier și timp de reacție convenit"* and entry 3
  *"precizia este centimetrică"*. Read against SOP §0.2: neither carries a **figure**, neither makes
  a claim about how fast a **third party** (BCPI/ANCPI) works, and both are capability/commercial-model
  descriptions, which ruling 0.5 approves. Assessed **compliant**. If the implementer disagrees on
  entry 2, drop that single entry rather than blocking the other five.

---

### S2 — `Lucrări topografice pe șantier` (named, scannable work list)
- **Purpose:** close G2 in the page's own structure rather than only inside FAQ prose.
- **Must answer:** *which specific site jobs do you do*, in the buyer's vocabulary, one item per line
  so it is scannable and machine-readable. Required terms, each currently absent from the page body:
  `urmărire de șantier` · `trasare axe și limite` · `rețele de nivelment` · `verificări de cote pe
  etape` · `calcul volume terasamente` · `monitorizare tasări și deformații` · `documentație
  as-built` · `plan de amplasament` · `relevee` · `profile topografice` · `curbe de nivel` ·
  `asistență topografică pentru execuție` · `studiu topografic`.
  *(`relevee` appears once on the built page today — inside the site-wide NAP/footer boilerplate,
  not in the body. It does not count as topical surface.)*
- **Data source:** `services.json` — **NEW FIELD REQUIRED**, e.g. `workList: []`. The register already
  exists in prose inside `hubIntro` and `process[5]`; this makes it a list instead of a buried
  paragraph. Renders through the existing `checklistBlock` helper, so no new template.
- **Constraint:** capability descriptions only. **No frequencies, no cycle lengths, no "la fiecare N
  zile"** — those are duration claims under §0.2.

---

### S3 — `Documentații pentru autorizare (PAC / PUZ / PUD)`
- **Purpose:** the documentation-support framing that two cohort members carry and we do not.
  `topografiealba.ro` (#3 on the șantier query) leads with *"PAC, PUZ, PUD"*; `cadastrumartin.ro`
  (#1 on the county query) lists *"DOC. AUTORIZATIE DE CONSTRUIRE – PAC"* as its own acte-necesare
  heading.
- **Must answer:** what a topographer supplies into each of PAC, PUZ and PUD, and how that connects
  to the construction phase.
- **Data source:** `services.json` — new prose slot, or fold into S2 as a labelled subgroup. Approved
  under CEO ruling 0.5 (workflow and capability claims are approved).
- **Hard constraint:** **no durations, no fee figures, no legal deadlines, no ordinance numbers we
  have not verified.** cadastrumaxim cites *"Regulamentul la Ordin 600/2023 al Directorului General
  al ANCPI"* — **do not copy a regulation number from a competitor page.** Either Aurel confirms it
  or it does not ship. Copying an unverified number is inventing a number.

---

### S4 — Alba Iulia / county surface · **highest-value item, and it is structural**
- **Purpose:** close G1. Three of four target queries have **no page of ours to serve**. This is the
  one gap where content quality is irrelevant until the page exists.
- **Must answer:** where we work for construction topography, naming the places the queries name.
- **Two options for the chair — (a) is the real fix:**
  - **(a) Extend chair work-item W1 to the 4 `hubOnly` services** — emit
    `/servicii/topografie-constructii/alba/index.html`. **Gate-verified safe:** the path ends in
    `/index.html`, so `build.js:264` classifies it as a hub, it takes only the 120 KB size gate, and
    it never enters the per-service sibling render gate. Zero demotion risk.
  - **(b) A coverage block on the existing national hub**, naming Alba Iulia, Sebeș, Blaj, Cugir,
    Ocna Mureș, Teiuș, Aiud. One data field, ships in an hour, no new route. Weaker: it puts one page
    against four queries.
- **Data source:** `generator/data/localities/alba.json` — all place data exists
  (`name`, `type`, `ocpiOffice`, `lat/lon`, `distanceKmFromAiud`, `localNote`). 78 Alba localities,
  11 of them `oraș`/`municipiu`. The current hub's `localityIndex` (`pages.js:537-552`) is built from
  the `emitted` set, which is **empty for `hubOnly` services** — hence a blank coverage section today.
- **DO NOT flip `hubOnly: false` to generate 78 leaves.** Verified risk: this service's `faqPool` has
  only **6** entries against 10–12 on every leaf-bearing service, and it has **no `introVariants` at
  all** (union-of-keys check: `introVariants` exists on the 8 leaf services only). The leaf builder
  picks 4–6 FAQs from the pool (`pages.js:409-412`), so a 6-entry pool yields far fewer distinct
  combinations across ~78–222 siblings → shingle overlap rises across the whole new group. Enlarging
  the pool to compensate is **banned** by chair ruling D13 and facts §6. Build the hub, not the leaves.
- **Meta/title for any new county hub:** must name the county and the service; the current national
  hub `metaDescription` already carries the right register (*trasări, nivelment, verificări cote,
  monitorizare, as-built*) but says *"Alba și împrejurimi"*, never "Alba Iulia".

---

### S5 — `Cine vine la măsurătoare` (named surveyor) · **BLOCKED, leave the marked slot**
- **Purpose:** close G4. 4/6 competitors name an individual; the only one with a photograph holds two
  map-pack slots.
- **Must answer:** who performs the work, their title, and their ANCPI authorization
  (seria, numărul, categoria).
- **Data source:** **DOES NOT EXIST.** Blocked on CEO question 1. **Blocked by absence of data, not
  by policy.** Per SOP §0.1: leave a marked slot, **never invent a number.**
- **Note:** 0/6 competitors publish an authorization number, so shipping this makes us the only page
  in the cohort that has one. It is the single highest-yield trust item still available.

---

### S6 — `Acte necesare`, expanded
- **Purpose:** move from one flat 3-item list toward `cadastrumartin.ro`'s per-work-type shape (7
  headings, each its own entry) — the strongest structural feature of the #1 result on the county query.
- **Must answer:** what the client sends us, differentiated by the kind of site job.
  Candidate items: proiect tehnic / planuri de execuție · autorizația de construire · plan de
  amplasament · plan de trasare cu coordonate · proces-verbal de predare a amplasamentului ·
  extras CF pentru amplasament.
- **Data source:** `services.json → documents[3]` — **exists, needs expansion.** Renders through
  `checklistBlock` (`pages.js:395`) with no code change.

---

### S7 — Named reference work · **BLOCKED pending real data**
- **Purpose:** close G6. TBL's named A7/industrial-park references are the strongest credibility
  device in the cohort and the thing our `"1052+"` counter substitutes for.
- **Data source:** **DOES NOT EXIST** and must come from Aurel. **Never invent a project, a client,
  a location or a date** (SOP §0.5 and §6). If Aurel supplies nothing, this section does not ship.
- Adjacent, cheap, and already ruled: `"2681+ colaborări"` is being dropped in the chair's register
  sweep (B6). Do not reintroduce hollow counters as a substitute for S7.

---

### S8 — County-hub anchor text and a construction paragraph on `/zone/alba/`
- **Purpose:** close G5. Anchor text on `docs/zone/alba/index.html` is bare `"Topografie construcții"`;
  the hub has no construction content at all and did not appear on the county query.
- **Must answer:** that the county hub is topically connected to construction topography, with anchor
  text naming the county (W3(a)).
- **Data source:** `generator/lib/pages.js` county-hub builder + `counties.json`. Hub-only, gate-free.

---

### NOT PROPOSED — stated so nobody proposes it later
**Map-pack presence (G9).** Six businesses on topc-q2, three on topc-q4, every one with an Alba Iulia
address. Map pack and organic are different ranking systems; **page content cannot move it**
(SOP §3 Step 1, §6, chair D11). No page change is proposed and none should be.

---

## 4. DATA REQUIRED FROM THE GENERATOR

Checked directly against `generator/data/services.json` and `generator/data/localities/alba.json`.

### EXISTS and is already used
| Field | Value on this service |
|---|---|
| `name` / `shortName` | "Topografie construcții" / "topografie inginerească" |
| `metaDescription` | present — correct register, but never says "Alba Iulia" |
| `hubIntro` | present — carries as-built, cote, nivelment, volume, GPS RTK, stație totală in prose |
| `process[]` | **5 steps** — rendered |
| `documents[]` | **3 items** — rendered (S6 expands it) |
| `priceRange` | `"ofertă per proiect, în funcție de etape și durată"` — matches cohort, keep |
| `related[]` | 3 (`plan-topografic`, `trasare-teren`, `cadastru-si-intabulare`) |
| `hubOnly` | `true` |

### EXISTS but is UNREACHABLE from the hub builder — the live defect
| Field | State |
|---|---|
| `faqPool[6]` | **present in data, never rendered on any hub.** `pages.js:531` reads `hubFaq`; `:410` (leaf builder) reads `faqPool`. `<details>` = 0 on all 12 built hubs. |

### MISSING entirely
| Field | Needed for | Note |
|---|---|---|
| `hubFaq` | — | **Absent on all 12 services.** It is a field the code reads that was never authored. Fix the code (`:531` falls back to `faqPool`), do not author 12 duplicate pools. |
| `workList[]` (or equivalent) | S2 | new field |
| PAC/PUZ/PUD prose slot | S3 | new field, or a labelled subgroup of `workList` |
| coverage/locality block for `hubOnly` services | S4(b) | `localityIndex` is built from `emitted`, which is empty for `hubOnly` |
| `introVariants` | — | present on the 8 leaf services, **absent on all 4 `hubOnly` services**. Relevant only if anyone proposes flipping `hubOnly` — see S4's warning. |
| ANCPI authorization (seria/număr/categoria) | S5 | **CEO question 1.** Blocked by absence of data. |
| named reference projects | S7 | must come from Aurel. Never invent. |

### CODE CHANGE REQUIRED
`generator/lib/pages.js:531` — `if (service.hubFaq && service.hubFaq.length)` never fires.
Fall back to `faqPool`, mirroring `:410`. Affects **all 12 service hubs**; ships as its own guarded
commit. Everything else in this spec is `generator/data/**` only. **Never touch `docs/`.**

---

## 5. BLOCKED BY POLICY (SOP §0.2) — recorded, NOT actioned

**There is no policy-blocked gap on this service.** This is the exact inverse of the `intabulare`
family: 0/6 surveyors publish a price for construction topography and 0/6 publish a turnaround
figure, so the forbidden items cost us **zero** competitive ground here.

Recorded as competitor intelligence only:
- `gistopocad.3x.ro` — *"Preturile sunt calculate pentru fiecare proiect in parte, in functie de
  specificul lucrarii"*. Same posture as ours.
- `cadastrumaxim.ro` — *"Costurile se calculeaza in functie de specificul lucrarii"*, **plus a
  standing 10% site-visitor discount**. That is an **offer, not a price**, so §0.2 does not forbid it;
  it is nonetheless a **commercial commitment**, not an SEO change, and is not proposed. If the CEO
  wants a conversion device of that shape it is his call, made on business grounds.
- `pdproiectsurveyor.ro` links a separate `/preturi/` page from its menu; the **ranking page carries
  no figure**.
- `totalbusinessland.ro`, `topografiealba.ro`, `cadastrumartin.ro` — silent on both price and duration.

Forbidden shapes the implementer must not drift into while writing S2 and S3, since the vocabulary
invites them:
- any monitoring **frequency or cycle length** (*"măsurăm la fiecare N zile/săptămâni"*);
- any **report or delivery turnaround** (*"raport în N zile"*);
- any **PAC/PUZ/PUD legal deadline** or authority processing time;
- any **fee, tarif or taxă figure**, ANCPI or otherwise;
- any **regulation/ordinance number** copied from a competitor page (cadastrumaxim's *"Ordin
  600/2023"*) — an unverified number is an invented number.

Separately, and **not** a policy block: the **ANCPI authorization number (S5)** and **named reference
projects (S7)** are blocked by **absence of data**. Both unblock the moment Aurel supplies real
values; neither may be filled with an invention in the meantime.

---

## 6. What this does not establish

Six pages, four queries, one geography, one day. Everything above is **correlational** (SOP §7).

The strongest counter-example sits inside the cohort: **`gistopocad.3x.ro` ranks #5/#5/#4 on a free
`3x.ro` subdomain that refuses HTTPS outright (`ECONNREFUSED …:443`), in us-ascii with no diacritics,
with typos in its own service list (*"Relevee la comtructii cilile"*), 320 words, no structured data.**
Meanwhile `cadastrumaxim.ro` — 2,800 words, a named and photographed engineer, a 25-item service menu,
two map-pack slots — ranks **#9 twice**. Whatever orders these results, **on-page completeness is not
the dominant term.** Domain age and authority are the obvious untested factors and no page edit
touches them.

Two demand caveats on the target queries themselves:
- `topograf santier alba iulia` is **partly an employment query** — Publi24 *"topograf – 11 locuri de
  munca"* and a CONECON RO job advert both surface. Discount any traffic estimate.
- Six of eight related searches on `topografie constructii alba` are **brand queries for one
  competitor in insolvency** (*Total business land insolventa*, *pareri*). The county query's demand
  signal is substantially one firm's reputation crisis, not clean buyer intent.

What **is** established mechanically, and is worth doing regardless of ranking effect: we authored six
construction-specific FAQ answers and publish **none** of them; ours is the only page in the cohort
that never says **"Alba Iulia"**; and on three of four queries there is **no page of ours to serve at
all**.

**Measurement gate — 2026-08-19 (GSC):** position and impressions for topc-q1…q4; **which URL is
served for each**; whether `/servicii/topografie-constructii/` holds #3 on the Aiud query; index
coverage of the hub. Nothing here is promoted site-wide on the strength of this analysis alone.
