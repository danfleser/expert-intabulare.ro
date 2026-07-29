# CONTENT SPEC — `intabulare-casa-constructie`

**Date 2026-07-29 · SOP-serp-research.md Step 6 · tiers: county + city + town**
**Sources:** `research/seo-2026-07/serp/intabulare-casa-constructie-serp.md` (4 queries) ·
`research/seo-2026-07/competitors/intabulare-casa-constructie-competitors.md` (extraction) ·
every generator claim below re-verified against `generator/data/**` and the built `docs/` on
2026-07-29.

> **This is a spec, not copy.** No Romanian page prose is written here. Each section states its
> purpose, what it must answer, and where the data comes from.

---

## 0. HEADLINE — READ BEFORE ANY CONTENT WORK

**Routing beats content on this service, and this service supplies the cleanest proof of it in the
whole programme.**

On `intabulare casa alba` **two of our own pages appear on the same SERP** and Google ranked
`…/alba/intregalde` (a Trascău commune of a few hundred people) at **#2**, seven positions above
`…/alba/alba-iulia` at **#9**. Every earlier cannibalization observation (Cut, Doștat, Ohaba,
Berghin, Șibot, Noșlac) showed only the wrong page, so "the right page would have ranked higher"
was an inference. **Here Google compared two of our pages on one query and preferred the village.**

Meanwhile the only third-party surveyor on any of the four SERPs, `cadastrumartin.ro`, ranks #4
with **375 words, no FAQ, no process steps, no price, no phone, no schema — and Google printed
«Lipsesc: casa» against it**, i.e. it ranks for a `casă` query without the word on the page. We
already beat it from #2.

**Conclusion that governs every item below: content depth is not the binding constraint on this
service. We are not losing to competitors; we are losing to ourselves.** Any proposal of the form
"add more words to the casă pages" is refused by the evidence in this file.

---

## 1. Targets, positions, cohort

- **Target queries**
  - `casa-q1` `intabulare casa alba` — tier county, transactional
  - `casa-q2` `intabulare casa alba iulia` — tier city, transactional
  - `casa-q3` `intabulare casa aiud` — tier town, transactional
  - `casa-q4` `cadastru casa aiud` — tier town, transactional
- **No map pack on any of the four.** The whole `intabulare casă` family is pure organic, so the
  Aiud address costs us nothing and page content is the entire lever. *(Contrast: bare
  `cadastru aiud` does return a map pack. Adding "casa" removes it.)*
- **Surveyor cohort analysed: N = 1** — `cadastrumartin.ro` only. Plus one **out-of-cohort**
  reference, `cadastrumaxim.ro`, excluded from every count.
- **SOP §3 Step 3 shortfall recorded:** the floor is 3 surveyor results per query; three of four
  SERPs contain **zero**. **Not padded with directories.** Therefore **no consensus is computable
  for this service** — every cohort-derived claim is N=1 or N=2 and is capped at **MEDIUM**.
- **Aggregator share: 7/9 · 7/9 · 8/9 · 8/9 → 30/36 non-surveyor (83%).** Five of the six surveyor
  results across all four SERPs are ours.

### Our position / served page / correct page

| Query | Rank | Page Google **serves** | Page that **should** be served | Defect |
|---|---|---|---|---|
| casa-q1 | **#2** and **#9** | `…/intabulare-casa-constructie/alba/intregalde.html` (#2) and `…/alba/alba-iulia.html` (#9) | service×county hub `/servicii/intabulare-casa-constructie/alba/` — **does not exist** (verified: no `alba/index.html`); of existing pages, `…/alba-iulia.html` | **YES** — wrong locality, and our better page is on the same SERP seven positions below |
| casa-q2 | **#2** | `…/alba/alba-iulia.html` | same | **no** |
| casa-q3 | **#4** | `intabulare-**teren**/alba/aiud.html` | `intabulare-casa-constructie/alba/aiud.html` | **YES** — wrong service |
| casa-q4 | **#8** | `cadastru-si-intabulare/alba/**noslac**.html` | `intabulare-casa-constructie/alba/aiud.html` | **YES** — wrong locality **and** wrong service |

**Routes correctly on exactly one of four queries.**

### Two mechanisms, both measured — these explain the misroutes

1. **The strongest page in a town wins that town's queries regardless of service.**
   `intabulare-teren/alba/aiud.html` carries **908 gated words — more than all three casă pages —
   6 FAQ including both a cost FAQ and a duration FAQ**, and «Aiud» ×49 vs ×42 on the casă/Aiud
   page. Google is not choosing arbitrarily; it is choosing the strongest Aiud page, which happens
   to be about land. **Mechanical case for chair D5 (`loc.serviceNotes`).**
2. **Office-name matching.** On casa-q4 Google chose, as the snippet for the Noșlac page, the
   sentence naming *BCPI Aiud, Str. Cuza Vodă nr. 14, Aiud*. The office block names Aiud three
   times on **every leaf in the BCPI Aiud catchment**, so each of them reads as an "Aiud" page and
   the real Aiud leaf has no distinguishing signal. **Second, independent argument for chair D4**
   (office block belongs on hubs, not leaves) — the first was the overlap gate; this one is the
   SERP itself.
3. **Query-ambiguity warning for the hub.** Google's related block for `intabulare casa alba`
   offers **Bucharest** and **Cluj-Napoca** variants, i.e. it partly parses "casa alba" as a noun
   phrase. **The hub must lean on «județul Alba» and named Alba localities, never the bare token
   «alba».**

---

## 2. GAPS — ranked, confidence-tagged

Confidence ceiling is MEDIUM for anything derived from the cohort, because N = 1 (§1).

| # | Gap | Conf. | Impact | Evidence (all re-verified) |
|---|---|---|---|---|
| 1 | **Our own pages are the competitive set. There is no third-party surveyor to beat.** | **HIGH** | moves-rankings | 1 surveyor page in 36 organic results; on casa-q1 both #2 and #9 are ours. Mechanically checkable. **Everything below is subordinate to this.** |
| 2 | **No service×county node exists for the county query.** | **HIGH** | moves-rankings | `docs/servicii/intabulare-casa-constructie/alba/index.html` — verified absent. The only county page, `docs/zone/alba/index.html`, is service-agnostic (3,956 words, **0 FAQ**, no acte, no steps, no price, no `Service` schema) and ranked on none of the four. Google substituted a commune leaf. Confirms chair W1. |
| 3 | **The Alba Iulia casă page lacks both branch-defining questions of its own service.** | **MEDIUM** | moves-rankings | Read from its FAQPage JSON-LD: its 4 questions are *vând casa neînscrisă · banca îmi cere · am demolat · cât durează*. It carries **neither** «Casa e veche și nu are autorizație de construire» **nor** «Am recepția făcută» — the old-house and new-build branches, which are exactly the two intents the ranking blogs own. Aiud carries both; Întregalde carries the old-house one plus the cost FAQ. |
| 4 | **The city page is the weakest page in its own cluster on every axis where the three differ.** | **MEDIUM** | moves-rankings | 831 gated words vs 892 (Întregalde) / 894 (Aiud); 4 FAQ vs 6 / 5; no cost FAQ; «lei» ×1 vs ×3. Its `localNote` is tourism prose (cetatea Vauban, A10) where Întregalde's makes a survey-capability claim (stație totală where GPS is weak). Causal link to the 7-position gap is a **hypothesis** for 2026-08-19. |
| 5 | **Internal link equity is flat by measurement, not by impression.** | **MEDIUM** | moves-rankings | Verified by file count: **21 / 19 / 20** files link to alba-iulia / întregalde / aiud. National hub anchor text is the **bare locality name** (`>Abrud`, `>Aiud`, `>Alba Iulia`, …). Confirms chair W3(a) and W3(c) with numbers. |
| 6 | **The named human is presented as a company, not as the person who comes to the measurement.** | **MEDIUM** | table-stakes | 2 of 2 surveyors name the individual — «Inginer Dipl. Martin Nicolae» (+9 ani, portofoliu, galerie); «Ing. Emanuel MAXIM» (+photos, door-finding directions). **0 of 2 publish an ANCPI number.** We render `Fleser Aurel Expert PFA` (the entity, from `site.nap.name`) and «Topograf autorizat ANCPI, 25+ ani» attached to no human. **The NAME is table stakes; the number is not — so chair item B2 is not blocked on the CEO.** Ship the name now, keep the marked slot for seria/numărul. |
| 7 | **Old-house and new-build intents are each owned outright by a dedicated blog.** | **MEDIUM** | table-stakes | lovedeco.ro (~2,200 words, 8-item acte list) owns *casa veche fără autorizație*; casebinefacute.ro (9 lifecycle steps, recepția la terminarea lucrărilor) owns *construcție nouă*. Our title covers both («casă / construcție»); our body separates neither, and on the money page (§2 gap 3) neither question is even present. |
| 8 | **No proof of executed work.** | **MEDIUM** | table-stakes | 2 of 2 surveyors show a Portofoliu / Galerie foto. We have no photos, no case notes, no gallery on any page. Out of scope this cycle — chair D14 defers the photo past 2026-08-19. |
| 9 | **Meta description still advertises distance from the customer on the non-Aiud leaves.** | **MEDIUM** | table-stakes | Verified in the current build: alba-iulia «aprox. 39 km de Aiud», intregalde «aprox. 32 km de Aiud». Aiud is already correct («birou chiar în Aiud») — defect 12.1 is fixed there, so the captured snippet is stale. Chair D1 remains outstanding for the other two. Head region, outside the gate ⇒ zero demotion risk. |
| 10 | **Word count.** | **LOW** | table-stakes | Blogs run 1,200–2,800 words, the one surveyor runs **375**, we sit at 831–894 and outrank the surveyor. Length plainly does not order this SERP. **Correlational only — do not act on it** (SOP §5 Step 5). |
| 11 | Conversion devices: a named offer and door-finding directions. | **LOW** | table-stakes | cadastrumaxim: «10% reducere» for web visitors, plus «în spatele Stadionului Municipal, lângă sediul FC Unirea». Not measurable in GSC. Recorded, not specced. |

**Not a gap — do not action:** *component villages 4 vs 11.* `alba-iulia.villages` = `["Bărăbanț",
"Micești", "Oarda", "Pâclișa"]` and that **is** the municipality's complete list of localități
aparținătoare. Întregalde genuinely has 11. Adding names to close the count would be inventing
place data, forbidden by CEO ruling 0.5. **The earlier extraction's "4 → the full list if more
exist in the data" resolves to: no more exist. Item dropped.**

**Not addressable with page content (recorded for the CEO):** a Facebook page (Birou Cadastru
Aiud — Ing. Molnar Aurelian-Marian, 5,0/5 reviews) is **#1 on both Aiud queries**; and
`necesit.ro` ranks a provider profile for **FLEȘER ADRIANA — Topograf** on `cadastru casa aiud`,
a competing entity sharing our principal's surname in our home town.

---

## 3. CONTENT SPEC

Ordered by the chair's ruling: **routing first (A), then differentiation (C), then the city page
(B), then the site-wide trust element (D).**

### A. Service×county hub — `/servicii/intabulare-casa-constructie/alba/` (chair W1, highest priority)

*Purpose: give the county query a page to land on. Today no service×county node exists anywhere in
the hierarchy, so Google picks a commune leaf.*

| Section | Purpose | What it must answer | Data source |
|---|---|---|---|
| **H1 + lead** | Claim the county intent unambiguously | "Do you register houses across Alba county, and are you authorized?" Must read **«județul Alba»**, never bare «alba» — casa-q1 related-block ambiguity | `services.json.name` + `hubIntro` (**exists**), `counties.json` |
| **Acte necesare (orientativ)** | The document checklist, split by branch | Which papers for an **authorized** build (autorizație + proces-verbal de recepție) vs an **old house without authorization** (certificat de atestare a existenței construcției) | `services.json.documents` — **exists, 5 items, already contains both branch lines verbatim.** Do not invent items |
| **Cum decurge procesul** | The 5 numbered steps, ending at the extras de CF | "What happens after I send you the papers?" | `services.json.process` — **exists, 5 steps** |
| **Unde se depune dosarul — cele 5 birouri** | Route the file to the right BCPI, on the hub | "Which office handles my commune?" | `localities/alba.json[].ocpiOffice{name,address}` — **exists.** **This is the block chair D4 says belongs on hubs and never on leaves**, and casa-q4 supplies the second reason: on leaves it makes every page in a catchment read as a page about that office's town |
| **Orașe principale** (above the A–Z list) | Break the flat mesh; make towns outrank villages by construction | — | Locality records, `type` field. **Anchor text must be «Intabulare casă / construcție în \<Localitate\>», not «\<Localitate\>»** — verified today as bare names on the national hub (chair W3a/W3c) |
| **Întrebări frecvente** | The hub currently has **zero FAQ** | The full question set including the cost question in its approved hedged form | `services.json.faqPool` — **exists, 10 entries.** **Select, never resize** (SOP §4.8 / chair D13) |
| **Cine vine la măsurătoare** | Name the human | "Who actually shows up?" | See **D** below |
| **Preț** | Keep the approved hedged range | "Roughly what does it cost?" | `services.json.priceRange` («1.000 – 2.500 lei, orientativ…») + `site.priceDisclaimer` — **exists.** **No duration. No ANCPI tariff.** |

### B. `alba/alba-iulia` — bring the city page up to its own village's level

*Purpose: the city page is the strongest asset in the Alba Iulia cluster (it also absorbs the
apartment query at #4) and simultaneously the weakest page in its own three-page cluster.*

| Section | Purpose | What it must answer | Data source |
|---|---|---|---|
| **FAQ set: 4 → 6** | Close gap 3 first, gap 4 second | Must add **«Casa e veche și nu are autorizație de construire. Se poate intabula?»** and **«Am recepția făcută. Mai trebuie ceva?»** — the two branch questions the page lacks and the ranking blogs own — and **«Cât costă intabularea unei construcții?»** in its approved hedged wording, already live verbatim on Întregalde | `services.json.faqPool` — text **exists**. **The selection mechanism does NOT.** See §4, item `faqRequired`: this is a generator change, not a data edit |
| **`localNote` rewrite** | Replace tourism prose with survey substance | Why boundary work in Alba Iulia is what it is — the Micești/Oarda/Pâclișa expansion front and what it means for limits; that BCPI Alba Iulia sits in the city itself. **No new numbers, no dates, no parcel counts** | `localities/alba.json` → `alba-iulia.localNote` — **exists** (currently: Vauban citadel, A10, Mureș). Must be **genuinely per-locality prose**, not a frame with the name swapped — cosmetic variation lands in the gate residual and raises overlap (SOP §5) |
| **Meta description** | Stop advertising distance from the customer | — | Drop «aprox. 39 km de Aiud», put **BCPI Alba Iulia** in its place (chair D1). Head region, outside the gate ⇒ zero demotion risk |
| **Length** | — | — | **Do NOT lengthen for length's sake.** Gap 10 is LOW; the only surveyor on the SERP has 375 words and sits below us |
| **Component villages** | — | — | **No change.** 4 is the complete official list (§2). Do not invent |

### C. `alba/aiud` (casă) vs `intabulare-teren/alba/aiud` — force them apart (chair D5)

*Purpose: one page is absorbing at least three distinct Aiud service intents (`intabulare teren
aiud` #1 — correct; `cadastru si intabulare Aiud` #5; `intabulare casa aiud` #4). The two pages
share all locality data and are structurally incapable of differing.*

| Section | Purpose | What it must answer | Data source |
|---|---|---|---|
| **`serviceNotes` prose on the casă page** | Give the casă/Aiud page sentences the land page cannot contain | Recepția la terminarea lucrărilor · the certificat de atestare a existenței construcției issued by Primăria Aiud · that the construcție is inscribed on the **land's** CF, so the teren must be intabulat first | **`loc.serviceNotes { "<service-slug>": "<prose>" }` — MISSING.** Chair D5, ~15 lines in `pages.js`. **This spec item is blocked until it exists** |
| **Cost FAQ** | Remove a measurable reason the land page reads as the more complete Aiud answer | «Cât costă intabularea unei construcții?» — absent on casă/Aiud, **present on the land page** | `faqPool` text **exists**; selection mechanism **missing** (see §4) |
| **Meta description** | — | — | **Keep «birou chiar în Aiud».** Defect 12.1 is fixed for Aiud (`distanceKmFromAiud: 0` is set on the record); the captured snippet is stale |

### D. All ~222 pages of the service — the named human (revises chair B2 and **unblocks** it)

*Purpose: 2 of 2 surveyors name the individual professional; **0 of 2** publish an ANCPI number.
The name is table stakes; the number is not. B2 therefore does not need to wait for the CEO.*

- **Section: «Cine vine la măsurătoare»**, inside the existing *Contact rapid* block.
- **Must answer:** who personally performs the measurement, and that he is ANCPI-authorized.
- **Data source:** a **new** `site.owner { name, title }` field. `site.nap.name` today is
  `"Fleser Aurel Expert PFA"` — the legal entity, not a person presented as a person. Body copy
  names no human.
- **Gate reasoning:** the string is constant across all ~222 pages of the service ⇒ document
  frequency 100% ⇒ above the 50% boilerplate cut ⇒ **dropped before overlap is measured ⇒
  gate-safe** (SOP §5).
- **Leave the marked slot** for seria / numărul / categoria per CEO ruling 0.1. **Never invent a
  number.**

---

## 4. DATA REQUIRED FROM GENERATOR — verified, field by field

| Field | Path | Status | Feeds |
|---|---|---|---|
| `name`, `shortName`, `metaDescription`, `hubIntro` | `services.json` | **EXISTS** | A |
| `documents` (5 items, both branches present) | `services.json` | **EXISTS** — reuse verbatim, do not invent | A, B |
| `process` (5 steps) | `services.json` | **EXISTS** | A |
| `priceRange` «1.000 – 2.500 lei, orientativ…» | `services.json` | **EXISTS** — approved, keep | A, B, C |
| `priceDisclaimer` | `site.json` | **EXISTS** — standing, keep | A, B, C |
| `faqPool` (10 entries, incl. cost + «Terenul nu este intabulat» + both branch questions) | `services.json` | **EXISTS** — text is all there | A, B, C |
| **Per-page FAQ selection** | — | **MISSING — and this is the correction that matters.** `pages.js:410-413` computes the FAQ set as `pickSeeded(faqPool, 4 + (seed % 3), fnv1a("faq:<locSlug>:<serviceSlug>:<countySlug>"))`. **There is no authored selection field anywhere.** "Change the selection on Alba Iulia" is therefore **not a data edit** — it needs a small generator change | B, C |
| `localNote` | `localities/alba.json` | **EXISTS** for all three pages | B |
| `villages` | `localities/alba.json` | **EXISTS**; alba-iulia = 4 and that is complete | — |
| `ocpiOffice { name, address }` | `localities/alba.json` | **EXISTS**, rendered on every leaf today | A |
| `distanceKmFromAiud` | `localities/alba.json` | **EXISTS** as an override; set to `0` on aiud (12.1 fixed). **Absent on alba-iulia and intregalde**, so 39/32 km are computed and still render in the meta | B (D1) |
| `profile`, `countyNotesRef`, `nearby`, `matrix` | `localities/alba.json` | **EXISTS** | — |
| **`loc.serviceNotes { "<slug>": "<prose>" }`** | `localities/*.json` + `pages.js` | **MISSING.** Verified against the union of all keys in `alba.json`: `name, slug, county, countySlug, type, villages, lat, lon, ocpiOffice, matrix, profile, countyNotesRef, localNote, nearby, distanceKmFromAiud`. Chair D5. **Blocks spec C entirely** | C |
| **Service×county hub route + template** | `build.js` / `pages.js` | **MISSING.** Verified: `docs/servicii/intabulare-casa-constructie/alba/index.html` does not exist; breadcrumb goes `Acasă → Intabulare casă / construcție → Județul Alba (/zone/alba/) → leaf`, so the leaf's county parent is the **service-agnostic** hub. Chair W1. **Blocks spec A entirely** | A |
| **`site.owner { name, title }`** | `site.json` | **MISSING.** Only `nap.name` = "Fleser Aurel Expert PFA" exists | D |
| **ANCPI authorization number** | — | **MISSING and blocked on the CEO** (ruling 0.1). Ship the marked slot, never a number | D |
| Portfolio / photo assets | — | **MISSING**, out of scope — chair D14 | — |

### Generator change required for the FAQ items (B and C) — specify it precisely

Because selection is seeded, the only clean mechanism is a **pinned, additive** required list:

- Add `service.faqRequired: ["<question text>", …]`, prepended to the seeded picks **without
  displacing them** (`k` unchanged; pinned entries excluded from the pool before `pickSeeded`).
- **Do not reorder `faqPool`** — the seed indexes into the pool, so reordering changes the FAQ set
  of **every one of the ~222 pages** at once. That is a mass perturbation, not a targeted fix.
- **Do not resize `faqPool`** — banned by chair D13 / SOP §4.8.
- **Measured gate consequence, stated so it is not a surprise:** the cost FAQ is currently on
  **82 of 223** built files = **36.8% document frequency**, i.e. *below* the 50% boilerplate cut,
  so today it sits in the residual and drives overlap between those 82 pages. Pinning it to 100%
  pushes it **across the cut** into boilerplate. That is a single-entry version of exactly the
  cliff D13 bans for the whole pool. The direction of the net effect is **not analytically
  determinable** — it moves the boilerplate cut and the overlap denominator for the entire sibling
  group. **Therefore: ship this as its own commit, run
  `node generator/build.js && node generator/verify.js && node research/seo-2026-07/check-demotions.js`,
  and judge it on the demotion KEY SET, never the count** (SOP §4.3, §5).

---

## 5. BLOCKED BY POLICY (SOP §0.2) — recorded as intelligence, NOT actioned

The cost/duration answer slot on this service is contested by **three different result types
converging on the same two questions**, and it is closed to us:

- **startimob.ro** (blog, casa-q1 #8) — title verbatim *«Intabulare casa: Ce este, cat costa si cat
  dureaza?»*; `0,15%` din valoare (persoane fizice, min 60 lei), `0,5%` (juridice), `120 lei/imobil`
  înscriere, `7 zile lucrătoare` soluționare, urgență `2 zile lucrătoare` = 4× tariful, plafon
  `5.000 lei`, timbre `4 lei`, apartamente `~30 zile`, intravilan `30-60 zile`, extravilan fără plan
  `1-3 luni`.
- **lovedeco.ro** (blog, casa-q1 #4) — `15 sau 30 de zile lucrătoare`.
- **casebinefacute.ro** (blog, casa-q1 #3) — certificat de urbanism `100-300 lei`; recepție și taxe
  «de la câteva sute la câteva mii de lei»; «de la câteva zile la câteva săptămâni».
- **brig.ro** (directory, casa-q3 #6 / casa-q4 #4) — an FAQ built **entirely** of price/duration
  questions; snippet quotes `336-2.100 RON` for Aiud.
- **notariate.ro** (marketplace) — an interactive fee calculator, 4,9 (187), ranking on **2 of 4**
  queries.

**We may not publish an exact ANCPI tariff and we may not publish any turnaround or duration claim
about BCPI processing.** No item in §3 enters that slot.

**Explicitly NOT blocked, and explicitly not to be removed:** the approved hedged range
`1.000 – 2.500 lei, orientativ, în funcție de construcție și acte` plus the standing
`priceDisclaimer`, live on all three pages. Proposing to remove them is itself an anti-pattern
(SOP §6). The one compliant move available is the **selection** change in §3B/§3C — Alba Iulia and
Aiud lack the cost FAQ that Întregalde already carries verbatim.

The site's existing duration wording is already compliant and stays: *«soluționarea la {ocpi}
urmează termenele obișnuite, care se pot scurta cu taxă de urgență»* — hedged, no number.

---

## 6. ROUTING DEFECT

**YES — on 3 of 4 queries.** Full detail in §1. In one line:

> Google serves `intabulare-casa-constructie/alba/**intregalde**` for the county query (with our
> Alba Iulia page seven positions below it on the same SERP), `intabulare-**teren**/alba/aiud` for
> `intabulare casa aiud`, and `cadastru-si-intabulare/alba/**noslac**` for `cadastru casa aiud`.
> It should serve a service×county hub that does not exist, and
> `intabulare-casa-constructie/alba/aiud` respectively.

**A perfect page that is never shown is worth nothing.** Spec A (the hub) and spec C
(`serviceNotes`) are routing work and come first. Spec B is content work on a page that is already
served correctly on exactly one query — it is second. Spec D is trust work and is free of both.

---

## 7. WHAT THIS DOES NOT ESTABLISH (SOP §7)

- **N = 1.** There is no surveyor consensus for this service and nothing here claims one.
- That Întregalde's extra 61 words, 2 extra FAQ and richer `localNote` **cause** its 7-position
  advantage is a **hypothesis** — the only mechanism visible in the data, not proof.
- `cadastrumartin.ro` ranks #4 **without the query term on the page** («Lipsesc: casa»). Domain
  authority is doing work here that no on-page change touches.
- Building the county hub is a hypothesis about hierarchy and internal linking, not a demonstrated
  cure.
- Captured snippets are already stale in one respect — the 12.1 self-distance meta is fixed for
  Aiud in the current build. Re-check anything read from a snippet against the build.
- **Verification: Google Search Console, 2026-08-19** — position per query, **which URL is served
  per query** (the routing metric), index coverage, map-pack position vs review count. Nothing is
  promoted site-wide on the strength of this research alone.
