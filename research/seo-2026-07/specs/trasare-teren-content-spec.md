# CONTENT SPEC — `trasare-teren`

**Date:** 2026-07-29 · **SOP:** `SOP-serp-research.md` Steps 5–6 · **Stage:** spec (no page copy written here)
**Inputs:** `research/seo-2026-07/serp/trasare-teren-serp.md` (4 SERPs, 2026-07-29) ·
`research/seo-2026-07/competitors/trasare-teren-competitors.md` (3 competitor surveyor pages) ·
`spec-seo-chair-verdict.md` · `research/seo-2026-07/serp/FINDING-cannibalization.md`
**Repo verification:** every "EXISTS / MISSING / verified" line below was re-checked in the working
tree on 2026-07-29. Where this file disagrees with the extraction stage, this file states so.

---

## 0. HEADLINE — read this before any section spec

> **Google ranks us on 4 of 4 `trasare` queries in Alba and serves the correct page 0 of 4 times.**
> Seven of our own URLs occupy 7 of 36 organic slots (19% of page-1 inventory for this service),
> and not one of them is the page the searcher asked for.

Per chair ruling **D2 — routing beats content**. Everything in §4 below is subordinate to §3.
Enriching `trasare-teren/alba/alba-iulia.html` changes nothing while Google shows
`intabulare-casa-constructie/alba/intregalde.html` instead. **A perfect page that is never shown
is worth nothing.**

The second headline is the cheap one:

> **The topical depth this service is losing on is already written, already published, and already
> on this domain** — in `/dictionar/trasare.html`, `/dictionar/trasarea-constructiilor.html`,
> `/dictionar/proces-verbal-de-trasare.html`, `/dictionar/stereografic-1970-stereo-70.html`,
> `/dictionar/coordonate-stereo-70.html`. **Zero `trasare-teren` service pages link to any of
> them**, and the word "Stereo" appears **0 times** across all 222 `trasare-teren` service pages.
> Closing G2 requires no new claims and no new research — only routing the vocabulary we own onto
> the pages that need it.

---

## 1. Cohort, and why nothing here is HIGH on the strength of competitor consensus

| Query | id | Tier | Organic | Non-surveyor | Ours | **Competitor surveyors** |
|---|---|---|---|---|---|---|
| `trasare teren alba` | tras-q1 | county | 9 | 5 | 2 | **2** (biroucadastru.ro #5, cadastrumaxim.ro #7) |
| `trasare teren alba iulia` | tras-q2 | city | 9 | 8 | 1 | **0** |
| `trasare teren aiud` | tras-q3 | town | 9 | 6 | 3 | **0** |
| `trasare limite proprietate alba` | tras-q4 | county | 9 | 7 | 1 | **1** (expertcadastru.ro #4) |
| **Total** | | | **36** | **26 (72%)** | **7** | **3 distinct URLs** |

**Surveyor cohort size: 3.** SOP §3 asks 3–5 per query; met on **0 of 4**. Two queries have **zero**
competitor surveyor pages — on those SERPs the whole surveyor cohort is ours. The cohort was **not**
padded with directories. C3's SERP-displayed URL `cadastrumaxim.ro/content/13-trasari-topografice`
**404s today**; its fields describe the live single-page site, not the ranked document.

**Consequence, stated plainly:** with N=3 there is no surveyor consensus for this service.
**No gap below is tagged HIGH because competitors agree.** The three HIGH gaps are HIGH for a
different reason — they are mechanically checkable facts about **our own inventory and the captured
SERPs**, verified by file inspection, not votes. Every MEDIUM states its mechanism and its N.

**Aggregator share: 26/36 = 72%** (5/9 · 8/9 · 6/9 · 7/9). High share means these queries are
winnable with a genuine service page. **Zero map packs on all four queries** — proximity is not in
play for `trasare`, the Aiud office location costs us nothing here, and nothing in this spec is or
may be read as a map-pack recommendation (SOP §6 anti-pattern).

New directories/marketplaces not on the SOP §2 list, confirmed here: **`cautcadastru.ro`**,
**`imoradar24.ro`**, **`citadelaimobiliare.ro`**.

---

## 2. GAPS — ranked, confidence-tagged

| # | Gap | Conf. | Impact | Mechanism / evidence |
|---|---|---|---|---|
| **G1** | **No `trasare-teren × Alba` county page exists.** Both county queries (q1, q4) are answered by mountain communes — Mogoș (44 km), Rimetea (24 km), Ocoliș (34 km). | **HIGH** | **moves-rankings** | Mechanically checkable, re-verified: `docs/servicii/trasare-teren/alba/index.html` **does not exist**; there are **78** flat `.html` leaves and no county index. *(The extraction stage said 76 — corrected: 78.)* `build.js` has exactly two hub builders — `buildServiceHub` (national, :223) and `buildCountyHub` (`/zone/<c>/`, :230); there is no third route. Both competitor county-query rankers answer with **one** service page; we answer with three scattered communes. Chair W1/D2. |
| **G2** | **Trasare method and coordinate system absent from every service page — while we already own the content elsewhere on the domain.** | **MEDIUM** | **moves-rankings** | Two-part, both checkable: (a) `grep -il stereo docs/servicii/trasare-teren/alba/*.html` → **0 of 78**; "GPS" appears **once** on `alba-iulia.html`, inside a process step ("cu GPS/stație totală: țăruși, borne sau vopsea"). (b) C2 names GPS RTK / NTRIP / ROMPOS-RTK, Stereografic 1970 vs sistem local, the hard precondition and the remedy — and holds **#4 on an Alba query while Google flags "Lipsesc: alba"**. That is direct evidence that q4 is scored on topical depth about *trasare*, not on locality. N=1 for the competitor half; the mechanism is stated, not voted. |
| **G3** | **Wrong-service cannibalization inside the same town.** `intabulare-teren/alba/aiud.html` beats `trasare-teren/alba/aiud.html` on a *trasare* query; `intabulare-casa-constructie/alba/intregalde.html` beats `trasare-teren/alba/alba-iulia.html` on the Alba Iulia *trasare* query. | **HIGH** | **moves-rankings** | Mechanically checkable, re-verified: 910 vs **908** gated words, both 6 `<details>`, both 4 JSON-LD blocks, both 28.4 KB, same template, same locality data — service prose is the only differentiator. `grep -rn serviceNotes generator/` returns **zero hits**: the chair-approved D5 remedy is **not implemented**. Observed on 2 of 4 captured SERPs. |
| **G4** | **Meta description advertises the distance from the customer, inside the Google snippet.** | **HIGH** | **moves-rankings** (CTR) | Read out of built HTML today: `albac.html` "aprox. **79 km de Aiud**" — ranked **#8 on `trasare teren aiud`**, the worst instance found for this service; `mogos.html` 44 km at #2; `ocolis.html` 34 km at #3; `alba-iulia.html` **39 km**. Already ruled — chair **D1 / W2**, 1,508 pages, meta sits outside the gated region so the change carries no demotion risk. Recorded here as service-specific confirmation, **not as new work**. |
| **G5** | **No scope or responsibility boundary anywhere on the Alba inventory.** | **MEDIUM** | **table-stakes** | 2 of 3 surveyors state where the job ends: C1 with two H2s ("Inclus în tarif" / "Nu este inclus"), C2 with a plain-words liability clause ("Nu ne asumam raspunderea pentru imprejmuirea facuta ulterior de proprietar care nu a respectat limitele trasate conform Procesului Verbal de Trasare"). Majority + plain mechanism (it pre-empts the first phone question and reduces the perceived risk of a range price). **New finding:** the `deplasare-block.html` partial and `site.deplasareNote` already exist and render on **144 of 222** `trasare-teren` pages — all four non-Alba counties — and on **0 Alba pages**. Our core market is the half with no scope statement at all. |
| **G6** | **No named individual.** C2 names "ing. Gurita Ion"; C3 puts "Ing. Emanuel MAXIM" in the H1 with photographs. We say "Topograf autorizat ANCPI, 25+ ani" and name nobody. | **MEDIUM** | **table-stakes** | 2 of 3 — and both are the deeper pages. `site.json` carries `nap.name` "Fleser Aurel Expert PFA" but **no `surveyorName` / role field**. **The name and the role are blocked by nothing**; only the authorization *seria/număr/categorie* is a marked slot pending Aurel (ruling 0.1, chair §3.3 B2, CEO question 1). |
| **G7** | **`documents` are unqualified.** C2 requires "Planul de amplasament si delimitare a imobilului" **vizat OCPI**, copie CI proprietar, copie act de proprietate for an împuternicit. Our three lines carry no endorsement qualifier and no ID/împuternicire. | **LOW** | **table-stakes** | Single-source (C1 and C3 list **no** acte at all — on this dimension we already lead the cohort 3–0–0). Value is operational usefulness, not ranking. |
| **G8** | **No proof of work.** C3 carries ~35 photographs of executed jobs; C2 has a "Lucrari recente" portfolio. We show zero images of any job. | **LOW** | **table-stakes** | Correlational. 2 of 3 have it — and both sit on materially older domains, where age is the more plausible driver. |
| **G9** | **Word count.** Ours 727–908; C1 ~1,200; C2 ~2,100; C3 ~2,800 (whole site). | **LOW** | **table-stakes** | Correlational only; SOP §5 names length explicitly. **We out-rank all three at a third of their length on three of four queries.** Recorded solely to forbid length as a target — *do not treat this as a gap to close*. |

### What we already do better than the entire cohort — protect these, do not regress them

Verified on `trasare-teren/alba/alba-iulia.html` and `.../aiud.html`: **6 FAQ in `<details>` + FAQPage
JSON-LD** (C1 has 1, C2 and C3 have 0) · **5 numbered process steps** ending at the proces-verbal
(C1 has 4, C2 implied, C3 none) · **4 JSON-LD blocks** — LocalBusiness + PostalAddress +
GeoCoordinates + BreadcrumbList + Service + AdministrativeArea + FAQPage (none detectable on any
competitor) · **the BCPI office and its street address** — we answer "unde se depune dosarul", which
nobody else does · **named component villages and neighbouring localities with distances** — no
competitor names a single village · **WhatsApp-first conversion with prefilled text** · **correct
diacritics** (C2 has none at all).

---

## 3. ROUTING DEFECT — the whole ballgame for this service

**YES, on 4 of 4 queries. Correct page served 0 of 4 times.**

| Query | Rank | Page Google **served** | Page that **should** be served | Defect class |
|---|---|---|---|---|
| tras-q1 `trasare teren alba` | **#2** | `trasare-teren/alba/mogos.html` (comună, 44 km) | `servicii/trasare-teren/alba/index.html` — **DOES NOT EXIST** | wrong locality tier |
| tras-q1 | #9 | `trasare-teren/alba/rimetea.html` (24 km) | same missing hub | self-competition, 2nd slot |
| tras-q2 `trasare teren alba iulia` | **#3** | `intabulare-casa-constructie/alba/intregalde.html` | `trasare-teren/alba/alba-iulia.html` — **exists, 873 w, 6 FAQ** | **wrong service AND wrong locality** |
| tras-q3 `trasare teren aiud` | **#2** | `intabulare-teren/alba/aiud.html` | `trasare-teren/alba/aiud.html` — **exists, 908 w, 6 FAQ** | wrong service, right town |
| tras-q3 | #4 | `trasare-teren/alba/lopadea-noua.html` (11 km) | same | wrong locality |
| tras-q3 | #8 | `trasare-teren/alba/albac.html` (**79 km**) | same | wrong locality + worst meta |
| tras-q4 `trasare limite proprietate alba` | **#3** | `trasare-teren/alba/ocolis.html` (34 km, thinnest ranking page at 727 w) | `servicii/trasare-teren/alba/index.html` — **DOES NOT EXIST** | wrong locality tier |

**Fallbacks that exist and ranked on nothing:**
- `docs/servicii/trasare-teren/index.html` — national, 38,529 bytes, **505 gated words, 0 `<details>` FAQ**, 3 JSON-LD. Ranked on **none** of the four queries.
- `docs/zone/alba/index.html` — 108,545 bytes, 3,687 gated words, 78 `<details>`, **service-agnostic**. Ranked on **none** of the four queries.

So the county-level answer is split across one page about trasare *everywhere* and one page about
everything *in Alba*. Neither is "trasare in Alba", and Google picks a commune instead.

**`intabulare-teren/alba/aiud.html` is a confirmed super-attractor:** #5 on `cadastru si intabulare
Aiud` (earlier capture) *and* #2 here on a `trasare` query.

**Correction carried forward — do not re-fix:** the self-distance defect (facts.md §12.1) is
**already fixed in the current build**. `grep "2 km de Aiud"` returns **0** on both
`trasare-teren/alba/aiud.html` and `intabulare-teren/alba/aiud.html`; the meta now reads
*"birou chiar în Aiud"*. The SERP snippet showing "aprox. 2 km" was a stale Google cache.

---

## 4. CONTENT SPEC

Ordered by the chair's priority: **routing first (§4.1, §4.2), content second (§4.3).**
No Romanian page copy appears below — this is a spec. Every section states **purpose · what it must
answer · data source · gate class**.

### Gate class — read before proposing where a block lives

Sibling group for this service is **grouped by SERVICE across ALL FIVE COUNTIES** (`build.js:208`) —
**222 leaves** for `trasare-teren` (alba 78 · mures 47 · sibiu 39 · cluj 38 · hunedoara 20).
Shingles present in ≥50% of that group are dropped as boilerplate before overlap is measured.
Therefore:

- **SAFE-CONSTANT** — text identical on all 222 leaves → boilerplate → dropped → does not drive overlap.
- **DANGEROUS-RESIDUAL** — text constant per **county** (78/222 ≈ **35%**), per **BCPI office** (5–11%) or per **profile** → **below the cut → lands in the residual → drives overlap UP.** This is chair **D4**, and it is the single most likely way to demote pages while "improving" them.
- **PAGE-EXCLUSIVE** — genuinely per-locality text → raises unique words. Ideal.
- **HUB** — hub pages carry only the size gate (`MAX_HUB_BYTES = 122880`), so hub sections carry **no demotion risk**.

Every added passage still needs the SOP §4.7 3-word-shingle check against existing `localNote`
values and the `pages.js` frame pools. `faqPool` and `introVariants` are **size-frozen** (chair D13).

---

### 4.1 COUNTY TIER — the new `/servicii/trasare-teren/alba/` hub *(tras-q1, tras-q4)*

**Target queries:** `trasare teren alba` (#2 and #9 today) · `trasare limite proprietate alba` (#3 today)
**Served today:** mogos.html · rimetea.html · ocolis.html — **Correct page: does not exist**
**Cohort:** 2 competitors on q1, 1 on q4 (shortfall) · **Aggregator share:** 5/9 and 7/9
**Gaps addressed:** G1 [HIGH] · G2 [MEDIUM] · G5 [MEDIUM] · G7 [LOW]
**Gate class of the whole page:** HUB — size gate only.

| # | Section | Purpose | What it must answer | Data source | Notes |
|---|---|---|---|---|---|
| 1 | **H1 + lead** — "Trasare teren în județul Alba" | Give the county query one destination instead of three communes. | Who this page is for and that we cover the whole county. | `services.json.name` + `counties.json.alba.name` + `hubIntro` (already written, already contains the full vocabulary: limite / colțuri / axe / țăruși / borne / proces-verbal / cartea tehnică). | No new claim. |
| 2 | **"Ce se trasează"** | Turn one word into a purchasable menu — this is C2's strongest structural move. | limite de proprietate · colțuri și axe de construcție · cotă zero / cotă de nivel · contururi · împrejmuiri · hale, drumuri, rețele și platforme. | `services.json.hubIntro` + `process` + `faqPool` "Faceți și trasări pentru hale, drumuri sau rețele?" — **every item already exists in our own data.** | No new claim. |
| 3 | **"Cu ce se măsoară și în ce sistem"** — *closes G2, the highest-value new section* | The one thing C2 beats us on, and we already own the words. | GPS/stație totală; that all cadastral documentation is reported in **Stereografic 1970 (Stereo 70)**; that GPS receivers work natively in a global system and results are transformed into Stereo 70; what happens when the existing documentation carries **local-system or wrong coordinates** — it is brought to Stereo 70 first, then traced. | **`generator/data/dictionary/{a-k,l-z}.json`** — entries `stereografic-1970-stereo-70`, `coordonate-stereo-70` (both carry full `definition` text, already published at `/dictionar/`). Precondition/remedy framing: `faqPool` "Terenul din {localitate} nu e intabulat…". | **Paraphrase our own published dictionary text — do not lift verbatim** (shingle rule). **NO cm precision figure** beyond the existing FAQ wording "precizie de câțiva centimetri". **NO duration.** **NO** NTRIP/ROMPOS/RTK protocol names unless Aurel confirms he uses them — those are C2's capability claims, not ours, and ruling 0.5 approves describing *what we do*, not what a competitor does. |
| 4 | **"Ce primiți la final"** | Make the deliverable the headline, as C2 does. | Punctele materializate (țăruși / borne / vopsea) **and** the proces-verbal de trasare with the schiță and the point coordinates — valid for constructor, primărie, bancă; and that it enters the cartea tehnică for construction work. | `faqPool` "Ce primesc după trasare?" + `process` step 5 + dictionary `proces-verbal-de-trasare`. | No new claim. |
| 5 | **"Când NU se poate trasa"** | C2's single strongest block; we already own the content and it converts a dead end into a job. | Without cadastral documentation there are no official coordinates, so rigorous trasare has nothing to rest on — register the land first. | `faqPool` "Terenul din {localitate} nu e intabulat. Se pot trasa limitele?" | **Must link to `/servicii/intabulare-teren/alba/`** (the sibling county hub from W1). |
| 6 | **"Ce include și unde se opreşte lucrarea"** — *closes G5* | State where the job ends. 2 of 3 surveyors do; on the Alba inventory we do it nowhere. | What the trasare visit covers (marcarea punctelor, verificarea geometriei, procesul-verbal) and where our responsibility ends — the boundary C2 states: we are not responsible for a fence the owner later builds off the marked points. | `site.json.deplasareNote` (exists, live on 144 non-Alba pages) + `process` steps 3–5 + dictionary `proces-verbal-de-trasare`. | **HARD LIMIT:** scope of **work and responsibility** only. **NOT** "Inclus în tarif / Nu este inclus" — that is C1's tariff itemisation and it is blocked. **No figure, no tariff, no duration, no urgency tier.** |
| 7 | **"Unde se depune / birourile competente"** | The question no competitor answers. | The five BCPI offices with street addresses, and which localities each covers. | `counties.json.alba.bcpiOffices` — 5 offices, each with `address` and a `covers[]` list. **Complete, no gaps.** | Chair D4 puts per-office content on hubs **only** — this is its correct home. |
| 8 | **"Localități acoperite"** | Make the hub the parent of its 78 leaves, so towns outrank villages by construction. | All 78 Alba localities we cover for trasare. | `localities/alba.json` — 78 records, `type` = 4 municipiu / 7 oraș / 67 comună. | **Chair W3a/W3c:** an "orașe principale" block (the 11 municipii + orașe: Abrud, Aiud, Alba Iulia, Baia de Arieș, Blaj, Câmpeni, Cugir, Ocna Mureș, Sebeș, Teiuș, Zlatna) **above** the A–Z list, and real anchor text — *"Trasare teren în &lt;Localitate&gt;"*, never a bare place name. |
| 9 | **"Acte necesare"** | Operational usefulness (G7). | The existing 3 items **plus** the qualifier and the two items evidenced by C2. | `services.json.documents` (3 items — edit, do not invent): add "vizat OCPI" to the plan de amplasament, add copie CI proprietar, add împuternicire when a proxy attends. | Mirrors a competitor's **stated requirement**; not invented. Editing `documents` propagates to all 222 leaves — that is SAFE-CONSTANT and desirable. |
| 10 | **"Cum decurge procesul"** | Parity with the leaves. | The existing 5 steps. | `services.json.process`, `{localitate}` → "județul Alba". | |
| 11 | **Preț** | Keep an approved asset; removing it would be a competitive loss (ruling 0.2). | The existing range, verbatim. | `services.json.priceRange` "500 – 1.500 lei, orientativ, în funcție de numărul de puncte și distanță" + `site.priceDisclaimer`. | **No new figure. No unit change** — see §5. |
| 12 | **FAQ** | Our largest structural lead over the cohort (6 vs 1/0/0). | 6 entries from the existing pool. | `services.json.faqPool` (10 entries), `{localitate}` → "județul Alba". | **Pool is size-frozen** (SOP §4.8 / chair D13). Select, never add. |
| 13 | **"Termeni utili"** — *new, cheap, closes half of G2* | Route the domain's own topical authority onto the service page. | — | Dictionary entries whose `ctaService === "trasare-teren"` — `trasare`, `trasarea-constructiilor`, `proces-verbal-de-trasare` — plus `stereografic-1970-stereo-70` and `coordonate-stereo-70`. | **The reverse mapping already exists in the data** (`ctaService`), so this needs no new field. **Verified today: `trasare-teren` service pages link only to `/dictionar/` (the hub) and to none of the five terms.** |
| 14 | **Contact rapid** | Conversion. | — | WhatsApp prefill scoped to trasare + county via `site.whatsapp.greetings.servicii`; existing `tel:`. | WhatsApp-only for conversion; no forms (house rule 3). Prefill text is gate-free — the gate strips HTML attributes before tokenising. |

**Also:** the hub becomes the **breadcrumb parent** of all 78 Alba leaves (chair W1) — that is the
part that tells Google the village page sits *under* the county page rather than beside it.

---

### 4.2 CITY TIER — `trasare teren alba iulia` *(tras-q2)*

**Our position:** #3. **Served:** `intabulare-casa-constructie/alba/intregalde.html` — wrong service
**and** wrong locality, the worst single instance captured this session.
**Correct page:** `trasare-teren/alba/alba-iulia.html` — **exists**, 873 gated words, 6 FAQ,
4 JSON-LD, 28,278 bytes, `localSpecificity: deep`.
**Cohort: 0 competitors.** 8/9 non-surveyor; 6 of 9 results carry "Lipsesc: trasare". Google reads
this query as **real-estate-for-sale intent**; our #3 is the only non-real-estate commercial result
on the page.
**Gaps addressed:** G3 [HIGH] — the only one that matters here.

| # | Section | Purpose | What it must answer | Data source | Gate class |
|---|---|---|---|---|---|
| 1 | **`loc.serviceNotes["trasare-teren"]` for `alba-iulia`** | Make this page unmistakably *about trasare* so it stops losing to a house-registration page in a mountain commune. | What a builder in Alba Iulia needs **before săpătură** — axe, colțuri, retrageri față de limite, cotă zero — and what a buyer needs before signing: whether the existing fence respects the carte funciară. | `services.json.introVariants`, profile `urban` (**both variants already written** and already say exactly this); `localities/alba.json` alba-iulia record (villages Bărăbanț, Micești, Oarda, Pâclișa; BCPI Alba Iulia, Str. Septimius Severus nr. 59). | **PAGE-EXCLUSIVE** — per locality × service. Raises unique words, lowers overlap. Strictly safe. |

**No other section. This is a routing job, not a content job.** Do not enrich a page Google already
reaches (`intregalde.html`); enrich the signal that tells Google which page this query is for.

**One caution specific to this SERP:** the query is dominated by land-for-sale intent. Do not chase
it with real-estate vocabulary. The right move is to be the unambiguous *surveying* answer on a
SERP that has none.

---

### 4.3 TOWN TIER — `trasare teren aiud` *(tras-q3)*, home turf

**Our position:** #2, #4, #8 — **three of our own pages on one SERP.**
**Served:** `intabulare-teren/alba/aiud.html` (wrong service) · `lopadea-noua.html` (11 km) ·
`albac.html` (**79 km**).
**Correct page:** `trasare-teren/alba/aiud.html` — **exists**, 908 gated words, 6 FAQ, 4 JSON-LD,
home-town copy already written: *"localitatea unde avem biroul… depunem dosarul personal la BCPI
Aiud, aflat la câteva minute de noi"*, meta already fixed to *"birou chiar în Aiud"*.
**Cohort: 0 competitors.** 6/9 non-surveyor. **Zero competitor surveyor pages in the top 10 on our
home-town query** — the entire surveyor cohort here is us, competing with ourselves.
**Gaps addressed:** G3 [HIGH] · G4 [HIGH, already ruled] · G6 [MEDIUM].

| # | Section | Purpose | What it must answer | Data source | Gate class |
|---|---|---|---|---|---|
| 1 | **`loc.serviceNotes["trasare-teren"]` for `aiud`** | Break the tie with `intabulare-teren/alba/aiud.html` — 910 vs 908 words, same template, same locality data. | Something the intabulare page **structurally cannot** say: what gets physically staked on site in Aiud, and what document leaves with the builder. | `services.json.process` steps 3–5 + `faqPool` "Ce primesc după trasare?" + `localities/alba.json` aiud record (`distanceKmFromAiud: 0`, BCPI Aiud Str. Cuza Vodă nr. 14, 10 villages from Aiudul de Sus to Țifra). | **PAGE-EXCLUSIVE.** Safe. |
| 2 | **Named-surveyor block** — *closes the unblocked half of G6* | 2 of 3 competitors name the person; we name nobody. | Who comes to the measurement: **Aurel Fleser, inginer topograf autorizat ANCPI**. | `site.json.nap.name` "Fleser Aurel Expert PFA" exists; a `surveyorName` / role field **does not** and must be added. | The **name and role ship now**. The **seria / numărul / categoria stays a marked slot** until Aurel supplies it — ruling 0.1, **never invent a number.** Constant across all 222 → **SAFE-CONSTANT**. |
| 3 | **Meta rebuild for the Alba trasare leaves** | G4 — `albac.html` ranks #8 on an *Aiud* query while advertising "aprox. 79 km de Aiud". | — | Chair D1/W2, already ruled: drop the distance clause above ~25 km, put the BCPI office in its place; keep it where it is genuinely a selling point. | Meta lives in `<head>`, **outside** the gated region — **zero demotion risk**. Already-scoped work (1,508 pages); listed here only as service-specific confirmation. |

**No FAQ additions.** 6 of the 10 pool entries are already selected on this page and the pool is
size-frozen (SOP §4.8 / chair D13).

---

## 5. BLOCKED BY POLICY — recorded as intelligence, NOT actioned

| Competitor pattern / proposal | Ruling |
|---|---|
| **C1's turnaround block:** *"termen de finalizare în aproximativ **3 zile lucrătoare** sau chiar **1 zi lucrătoare** dacă optezi pentru operarea în regim de urgență"*, given its own H2 pair "Tarife și durată" + "Durata aproximativă". | **BLOCKED — SOP 0.2.** No equivalent is proposed on any page, in any hedged form, at any tier. **Intelligence value:** a customer arriving from that page has already been told 3 days, or 1 day urgent. We will lose the impatient segment of this query and we accept that. |
| **C1 + C2 price the work per PUNCT** (both independently: "de la 100 LEI/PUNCT" and "In general costul este de 100 lei/ punct materializat"). We price **500 – 1.500 lei per lucrare**, so a 2-point boundary check reads as ~200 lei there and 500 lei here. | **BLOCKED as a content action — SOP 0.2 forbids inventing any NEW price figure not already in `services.json`,** and a unit change necessarily publishes one. Our existing range is CEO-approved and **stays, verbatim**. **ESCALATED to the chair as a pricing-policy question for the CEO, not to implementation.** No implementing agent may act on this line. |
| **The exact ANCPI tariff paid by the client** (C1's "Tarife" block; `counties.json.alba.feeNote` already describes the mechanism without a figure, which is the correct treatment). | **BLOCKED — ruling 0.2.** We do not know it. |
| **ANCPI authorization seria / număr / categorie** in the named-surveyor block (§4.3 #2). | **PARTIALLY BLOCKED — ruling 0.1.** Marked slot only until Aurel supplies it; **never invent a number.** The **name and role are not blocked** and ship now. CEO question 1. |
| **Any per-UAT PNCCF year, sector number, parcel count or date** on the county hub. | **BLOCKED — ruling 0.5 / SOP §6.** Chair D6 allows exactly one `/ghid/` article on systematic registration in Alba, linked from the county hubs; **no per-village PNCCF claims anywhere**, and no numbers in it. |
| **C2's protocol-level capability claims** — NTRIP, ROMPOS-RTK. | **Not a policy block but a truth block.** Ruling 0.5 approves describing what *we* do. Do not assert our use of a named RTK correction service until Aurel confirms it. Stereo 70 is safe — it is the mandatory national projection, already published in our own dictionary. |
| **Existing duration-adjacent `faqPool` entry** — *"Cât durează trasarea unui teren în {localitate}?" → "…o singură deplasare de câteva ore, cu programare în aceeași săptămână… procesul-verbal îl primiți imediat sau în ziua următoare."* Live via `services.json`, selected on `mogos.html`. | **Frozen — neither extend nor remove.** It describes **our own site visit**, the same category as the approved *"răspundem de obicei în aceeași zi lucrătoare"*, not BCPI processing. Recorded for the chair. **No implementing agent touches it in either direction.** |
| **Our own price range appearing as the Google snippet** on tras-q4 #3 (`ocolis.html`, verbatim). | **Observation only.** SOP 0.2 forbids *proposing* price display; it does not authorise removing CEO-approved live text. Escalated with the row above. **Not actioned.** |

---

## 6. DATA REQUIRED FROM GENERATOR

### EXISTS — feeds the spec with no new authoring

| Field | Location | Detail |
|---|---|---|
| `name`, `shortName`, `metaDescription`, `hubIntro` | `generator/data/services.json` → `trasare-teren` | `hubIntro` already carries the whole "ce se trasează" vocabulary. |
| `introVariants` × **8** | same | 4 profiles × 2 variants: `agricol-campie`, `montan-apuseni`, `urban`, `periurban`. **Size-frozen** (D13). |
| `process` × **5** | same | Step 3 is the only place "GPS/stație totală" appears anywhere on the service. |
| `documents` × **3** | same | Editable for G7 (§4.1 #9). Edits propagate to all 222 leaves — SAFE-CONSTANT. |
| `priceRange` + `site.priceDisclaimer` | same / `site.json` | Ship verbatim. No new figure. |
| `faqPool` × **10** | same | 6 selected per leaf. **Size-frozen** (D13). |
| `related` × **4** | same | `plan-topografic`, `topografie-constructii`, `intabulare-teren`, `dezmembrare-alipire`. |
| Locality records × **78** (Alba) | `generator/data/localities/alba.json` | `name, slug, county, countySlug, type, villages, lat, lon, ocpiOffice{name,address}, matrix, profile, countyNotesRef, localNote, nearby` (+ optional `distanceKmFromAiud`). Types: 4 municipiu, 7 oraș, 67 comună. Profiles: montan-apuseni 32, agricol-campie 31, periurban 8, urban 7. |
| `bcpiOffices` × **5** with `address` + `covers[]`, plus `ocpiHq`, `countyNote`, `feeNote` | `generator/data/counties.json` → alba | Complete; feeds §4.1 #7 with no gaps. |
| **Dictionary entries** — `trasare`, `trasarea-constructiilor`, `proces-verbal-de-trasare` (all `ctaService: "trasare-teren"`), `stereografic-1970-stereo-70`, `coordonate-stereo-70` | `generator/data/dictionary/{a-k,l-z}.json` (304 entries; fields `term, slug, gloss, definition, example, related, ctaService, category`) | **The single most under-used asset for this service.** Full published `definition` text for Stereo 70, the GPS→Stereo 70 transformation, and the proces-verbal contents. Built pages live at `docs/dictionar/*.html`. |
| `deplasare-block.html` partial + `site.deplasareNote` | `generator/partials/`, `site.json` | Renders on **144 of 222** trasare pages (all non-Alba). The mechanism for §4.1 #6 exists; the Alba-side content does not. |
| `site.whatsapp.greetings.servicii` prefill | `site.json` | Gate-free (attributes stripped before tokenising). |
| Leaf template, distance computation, gates | `generator/lib/pages.js`, `gates.js` | `MIN_UNIQUE_WORDS 120` · `MAX_SHINGLE_OVERLAP 0.7` · `MAX_LEAF_BYTES 61440` · `MAX_HUB_BYTES 122880`. Leaves sit at ~28 KB, so ~33 KB of headroom. |

### MISSING — must be built before the spec can be executed

| # | Missing | Verified how | Blocks |
|---|---|---|---|
| M1 | **Service×county hub route + template** (`/servicii/<service>/<county>/index.html`) | `docs/servicii/trasare-teren/alba/index.html` absent; 78 flat leaves, no index. `build.js` has only `buildServiceHub` (:223, national) and `buildCountyHub` (:230, `/zone/<c>/`). | **All of §4.1** — chair W1. |
| M2 | **`loc.serviceNotes: { "<service-slug>": "<prose>" }`** | `grep -rn "serviceNotes" generator/` → **0 hits.** Chair D5 approved it; it is not implemented. | **All of §4.2 and §4.3 #1** — i.e. the entire G3 remedy. |
| M3 | **Named-surveyor field** (`surveyorName` + role; auth number as a marked slot) | `site.json` has `nap.name` but no person/role field. | §4.3 #2 (G6). |
| M4 | **Method / coordinate-system copy on the service record** | "Stereo" appears **0×** in `services.json` and **0×** across all 222 built `trasare-teren` pages. | §4.1 #3 (G2). Source text exists in the dictionary — needs paraphrasing into a service field, not researching. |
| M5 | **Scope / responsibility field** (`scopeNote` or equivalent) | No `included` / `excluded` / scope field on any service record; `deplasareNote` is site-level and Alba-excluded. | §4.1 #6 (G5). |
| M6 | **Per-service dictionary cross-link block** | Leaf pages link to `/dictionar/` only — verified, zero links to any of the five relevant terms. | §4.1 #13. **No new data needed** — derivable from the existing `ctaService` field. |
| M7 | **Portfolio / job imagery structure** | No image data anywhere in `generator/data/`. | G8 [LOW]. Not proposed for this cycle. |

---

## 7. IMPLEMENTATION GUARDS

1. **Single writer per file.** `services.json` is one file for all 12 services — a `trasare-teren` writer must not be editing it concurrently with another service's writer. Escalate rather than share.
2. **Gate after EVERY change:** `node generator/build.js && node generator/verify.js && node research/seo-2026-07/check-demotions.js`. All three must exit 0. Baseline is **0 demotions**, the strictest setting; the guard compares **key sets, not counts** — a falling count can still hide a destroyed live page (observed twice this session).
3. **Never hand-edit `docs/`.** All changes in `generator/data/**` or `generator/lib/**`.
4. **Never `git add .`** — exact pathspecs. **Do not push**; the operator decides.
5. **Do not resize `faqPool` or `introVariants`** (D13). Select from them; never grow them.
6. **3-word shingle check** on every added passage against all existing `localNote` values and the `pages.js` frame pools. No run of two or more consecutive shared shingles. This applies with particular force to §4.1 #3, which paraphrases our own dictionary text.
7. **County-constant blocks belong on hubs, never on leaves** (D4 + §4 gate class). A block placed on all 78 Alba leaves sits at ~35% document frequency — below the boilerplate cut, in the residual, driving overlap up on pages nobody edited.

---

## 8. WHAT THIS DOES NOT ESTABLISH

- **N=3, and two of four queries have no competitor surveyor at all.** There is no surveyor consensus for `trasare-teren` in Alba. Every MEDIUM above rests on a stated mechanism, not a vote; the three HIGHs rest on file inspection and captured SERPs, not on competitors agreeing.
- **All three competitor domains are older than ours** (live 2026-07-28). Domain age is a large factor no on-page work touches. That C2 has ~2,100 words and ranks #4 does not establish that 2,100 words caused #4 — **we rank #3 above it with 727.**
- **C3's ranked URL 404s.** Its fields describe the live site, not the indexed document.
- **Zero map packs on all four queries.** Nothing here is a map-pack recommendation, and none of it can move one.
- **That building the county hub will change which URL Google serves is a hypothesis** — well-grounded in how hierarchy and internal linking generally work, unproven here. It is confirmed or refuted by exactly one thing: the **Search Console "Pages" report at 2026-08-19**, showing the served URL per query. If the served URL does not change, the hypothesis failed and we say so.
- **Two-day-old rankings are unstable.** #2 on `trasare teren alba` today may be lower on 19 August regardless of anything we do.
- **Nobody can promise a #1.** Not from this data, not from this method.

---

## 9. INCIDENTAL FINDINGS (other lanes — flagged, not actioned here)

- **`trustStats` still contains `"2681+ colaborări"`** in `site.json`, and it renders on `trasare-teren/alba/alba-iulia.html` today. Chair D14 / B6 ruled it dropped in the register sweep. **Still live.** Team B's lane.
- **Leaf count correction:** `docs/servicii/trasare-teren/alba/` holds **78** leaves, not the 76 stated by the extraction stage. Alba has 78 UAT and the service matrix covers all of them.
- **Sibling group size for `trasare-teren` is 222 leaves** (alba 78 · mures 47 · sibiu 39 · cluj 38 · hunedoara 20) + 1 national hub = 223 files.
