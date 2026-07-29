# CONTENT SPEC — `intabulare-teren`

**Date 2026-07-29 · SOP-serp-research.md §3 Step 5 + Step 6 · research stage, no page copy written here**
**Sources:** `research/seo-2026-07/serp/intabulare-teren-serp.md` (4 fresh queries),
`research/seo-2026-07/competitors/intabulare-teren-competitors.md` (cohort extraction),
`research/seo-2026-07/serp/CAPTURES-2026-07-29.md` Q4 (prior session), plus repo verification
re-run on disk today (all counts below were measured, not carried over).

---

## 0. READ THIS FIRST — routing beats content on this service

**Chair verdict D2 is the governing ruling here, and this service is its strongest instance.**

Of the five captured `intabulare-teren` queries, **exactly one is routed correctly.** On two we
rank and Google shows a village nobody searched for. On two we do not rank at all, and the page
that should rank **does not exist on disk.**

| Query | Tier | Our rank | Page Google served | Correct page | Verdict |
|---|---|---|---|---|---|
| `intabulare teren aiud` | town | **#1** | `…/intabulare-teren/alba/aiud.html` | same | **correct — the only one** |
| `intabulare teren extravilan alba iulia` | city | **#7** | `…/intabulare-teren/alba/sibot.html` (Șibot, 66 km from Aiud) | `…/alba/alba-iulia.html` (exists) | **wrong locality** |
| `intabulare teren Alba Iulia` (prior session) | city | **#9** | `…/intabulare-teren/alba/ohaba.html` (Ohaba, 37 km) | `…/alba/alba-iulia.html` (exists) | **wrong locality** |
| `intabulare teren alba` | county | — | — | `/servicii/intabulare-teren/alba/` | **does not exist** |
| `intabulare teren mostenire alba` | county | — | — | `/servicii/intabulare-teren/alba/` | **does not exist** |

**Three different villages have been substituted for Alba Iulia across three separate captures**
(Ohaba, Șibot, and Cut/Unirea on the `agricol` variant). The substitution is *unstable* — Google
picks a different leaf each time. That is the signature of insufficient differentiation, not of one
village page being unusually strong.

**Consequence for everything below: sections 1–10 of this spec are worth zero on the Alba Iulia and
county-tier queries until W1 (service×county hub) and D1/W2 (meta rebuild) ship.** The only page
where content work pays immediately is `alba/aiud.html`, because it is the only page Google
actually shows. Sequence accordingly.

---

## 1. Target queries, cohort, and the shape of the opportunity

**Target queries (SOP §2):**

| id | query | tier | intent |
|---|---|---|---|
| ter-q1-pc | `intabulare teren alba` | county | transactional |
| ter-q2alt-pc | `intabulare teren extravilan alba iulia` | city | transactional |
| ter-q3-pc | `intabulare teren aiud` | town | transactional |
| ter-q4-pc | `intabulare teren mostenire alba` | county | transactional |
| prior-Q4 | `intabulare teren Alba Iulia` | city | transactional |

**Map pack: NONE on any of the five.** The whole `intabulare …` family is pure organic in this geo
(`cadastru …` / `topograf …` queries do return packs). Our Aiud address costs us nothing here, and
per SOP §3 Step 1 no recommendation in this document may be justified by map-pack position.

**SURVEYOR COHORT: 3 URLs on 2 domains — a recorded shortfall, not a cohort.**
Per-query surveyor counts are **1 / 0 / 0 / 2 / 1** against the SOP's target of 3–5. Only
`cadastrumaxim.ro` (Alba Iulia) is in-geo; `startcad.ro` is a Constanța firm that Google itself
marks *"Lipsesc: alba"*. **No padding with directories** (SOP §3 Step 3).

**Therefore there is no surveyor consensus on this service, and no gap below may be tagged HIGH on
the strength of what competitors do.** Cohort-derived findings are capped at **MEDIUM** throughout.
The gaps that *are* HIGH are facts about our own site verified on disk, plus the SERP observation
itself — neither rests on cohort consensus.

**AGGREGATOR SHARE: 8/9 on all four fresh queries — 89% (32 of 36) non-surveyor.**
This 5-for-5 uniform figure is the most robust number in the whole file, and it is more load-bearing
than the cohort. **The opportunity on this service is a vacuum, not a rival to out-write.** There is
almost nothing to beat: a 585-word forum-CMS page ranks #4, and a 2017 avocatnet.ro forum thread
ranks #9.

---

## 2. GAPS — ranked, confidence-tagged (SOP §3 Step 5)

Confidence rule applied: **HIGH = mechanically checkable AND not dependent on cohort consensus.**
**MEDIUM = derived from the n=2 cohort, or a majority pattern with a plausible mechanism.**
**LOW = correlational only.**

---

### G1 — [HIGH] [moves-rankings] · The county tier has no page at all

`docs/servicii/intabulare-teren/alba/index.html` — **verified absent on disk today.** Two of five
target queries are county-tier and we rank on neither. The two nearest existing pages are both
structurally disqualified:

- `docs/zone/alba/index.html` (3,803 words): H1 and `<title>` say *"Cadastru și topografie"* — the
  string `intabulare teren` is not in either. No Service schema, no FAQ, no acte necesare, no
  process, no price. It is the hub for **all 12 services**, so it can never be the best answer to a
  single-service county query. Its dominant repeated token is a distance from Aiud
  (`Abrudaprox. 66 km`, `Blajaprox. 29 km` × 78 accordions).
- `docs/servicii/intabulare-teren/index.html` (800 words): right service, national geography — Alba
  is one H3 among five counties. No FAQ, no FAQPage schema. **800 words for the parent of 222 leaves
  that carry ~900 each** — the parent is thinner than every one of its children, the inverse of the
  hierarchy the chair verdict wants.

HIGH because the absence is a fact, not an inference. **But per SOP §7 and chair §5, that building
the hub changes the ranking remains a hypothesis, settled only at the 2026-08-19 GSC gate.**

**Extra constraint discovered in ter-q1-pc, and it changes what the hub must be:** on
`intabulare teren alba`, **all 9 organic results target Alba Iulia, not the county.** Google rewrites
the county token `alba` into the city. A hub that speaks only county-wide will be judged against
Alba Iulia *city* pages and lose. **The hub must name Alba Iulia explicitly and early.**

---

### G2 — [HIGH] [moves-rankings] · The 222 leaves are mutually indistinguishable on every scored field

Șibot (served, #7) and Alba Iulia (correct) score **identically** on `sectionsPresent`,
`processSteps` (6/6), `acteNecesare` (5/5), `priceValues`, `schemaTypes` (7/7) and `ctaStyle`.
Verified on disk today: **221 of 222 leaves carry the string `km de Aiud`** (Aiud is the sole
exception, already fixed). Only six things differ between any two leaves of this service: the lead
opener, `localNote`, the villages list, the BCPI name, the distance number, and the seeded FAQ
selection.

This is the direct mechanism behind G0's three-village substitution: **there is no measurable
difference for Google to choose on, so it chooses arbitrarily.** Mechanically checkable, and it
independently confirms chair rulings D1/W2 (meta rebuild) and D5 (`serviceNotes`) — nothing new to
decide, one more instance.

---

### G3 — [HIGH] [moves-rankings] · The moștenire asset already exists and is orphaned from the service

This is the cheapest high-value finding in the file, and it was not visible from the SERP alone.

`generator/data/guides/pasi-intabulare-teren-mostenit.json` → `/ghid/pasi-intabulare-teren-mostenit.html`
is a **1,202-content-word** guide with 7 sections, `notar` 16×, `certificat de moștenitor` 2×. Its
`related.services` array **already names `intabulare-teren`**. And yet:

- **0 of 222** `intabulare-teren` leaves link to it (verified by grep).
- **11 pages sitewide** link to it at all.
- Its own JSON contains **0 occurrences of "Alba" and 0 of "Aiud"** — the 6 "Alba" hits in the
  rendered HTML come entirely from header/footer/breadcrumb chrome.

Meanwhile Google printed **"Lipsesc: alba"** on 3 of 9 results for `intabulare teren mostenire alba`
and padded the top 10 with two national blogs and a 2017 forum thread. **It is telling us in plain
text that the local+moștenire intersection is unfilled — and we own an unbound, unlinked asset for
exactly that intent.**

Root cause is structural, not editorial: `generator/templates/page-service-locality.html` renders
exactly 14 named placeholders and **none of them is a guide-link slot**; `hubLinksBlock`
(`pages.js:439`) emits only `/servicii/<service>/` and `/zone/<county>/`.

The remedy is therefore *county-binding + internal linking*, not new writing — **but see BP-7: the
guide currently carries a §0.2-forbidden duration claim, so linking it as-is would import that
violation into the service cluster.**

---

### G4 — [MEDIUM] [moves-rankings] · `intravilan` and `extravilan` are one undifferentiated list

`generator/data/services.json` `intabulare-teren.documents` is a **flat array of 5 strings**, serving
both cases identically on all 222 leaves. Verified on disk today:

- The word `extravilan` appears on **only 27 of 222** `intabulare-teren` leaves.
- It appears **0 times on `alba-iulia.html` and 0 times on `sibot.html`** — i.e. **zero times on
  either page involved in the routing defect on a query that literally contains the word
  `extravilan`, where we rank #7.**

The one ranking local surveyor splits it into **two genuinely different 13-item lists**, each citing
its own regulation, each row naming its issuing authority. Extravilan-only items we do not mention
anywhere: *schița de punere în posesie* (from the primărie), the *adeverință* for imobile in a
necooperativizat zone, and the *extras de CF plus harta de CF* pairing.

Confidence capped at MEDIUM because the competitor half is n=1. The **our-side** half is fully
mechanical and would justify HIGH on its own; the reason to act is user-facing correctness, not a
ranking recipe (see §5).

---

### G5 — [MEDIUM] [table-stakes] · Our process starts three institutions too late

`service.process[0]` is *"Discutăm situația pe WhatsApp sau la telefon…"*. Verified on
`alba/aiud.html`: `notar` appears **2×** (both inside FAQ answers), `ANAF` **0×**,
`Direcția Taxe și Impozite` **0×**.

StartCad sequences the whole journey across institutions the user does not know are involved:
primărie (certificat de atestare fiscală) → notar → ANAF (certificat de datorii) → certificat de
moștenitor → **Direcția Taxe și Impozite** → topograf → OCPI. The tax-office registration step after
succession is the one people actually forget.

Costs nothing, breaks no rule, needs no prices and no durations.

---

### G6 — [MEDIUM] [table-stakes] · We cite no legal instrument; the ranking local surveyor cites two

cadastrumaxim names *"Regulament la ODG 600/2023 al ANCPI"* (intravilan) and *"ODG 700/2014"*
(extravilan). Concrete, checkable, and it signals the author works the file.

**Hard condition on actioning this: any citation must be verified independently against the current
ANCPI regulation before publishing. Do NOT copy the numbers off a competitor page.** This is exactly
the class of checkable third-party fact SOP §0 governs, and an out-of-date ordinance number is worse
than no citation.

---

### G7 — [MEDIUM] [table-stakes] · The named person is absent from our content region

`"Fleser Aurel"` appears **0 times** in the gated content region of the leaf (4× total, all in
header/footer/JSON-LD). Both cohort pages put **Ing. Emanuel MAXIM** on the page with a photograph
and a direct mobile.

`site.json` has `nap.name` = *"Fleser Aurel Expert PFA"* — a trade name, not a person block. There is
no `owner` field.

**Partially blocked:** the ANCPI authorization *seria/număr/categorie* is CEO question 1 and must
never be invented (ruling 0.1). **The name, the title and "topograf autorizat ANCPI" are not blocked
and can ship now.**

---

### G8 — [MEDIUM] [table-stakes] · Distance is framed as a liability, not as coverage

`pages.js:362–367` renders *"…se află la aprox. N km de biroul nostru din Aiud"* in the body, and
`pages.js:457–460` repeats it in the meta description. On the #7 result the searcher's entire
proposition is *"Intabulare teren în Șibot … aprox. 66 km de Aiud"* — a village they did not search
for, plus a reason not to click.

cadastrumaxim does the opposite with the same kind of fact: *four doors from OCPI Alba*, a
document-handover window, an appointment policy. Our equivalent — office in Aiud, files lodged in
person at BCPI Aiud — is stated well on the Aiud page and weakly everywhere else.

---

### G9 — [LOW] [table-stakes] · Zero images in the content region

They run a 32-slide portfolio (office, 4×4 fleet, team on site, drone imagery). We have **zero**
`<img>` in the content region. Correlational only. Real cost under `MAX_LEAF_BYTES = 61440`, though
at ~28KB there is ~33KB of headroom.

---

### G10 — [LOW] [NO ACTION] · Word count is not the gap

Ours: 908 (Aiud) / 839 (Alba Iulia) / 948 (Șibot). Cohort: 1,200 / **585** / 700. **The page that
ranks #4 on the moștenire query is 585 words with no FAQ, no schema, no process, no prices and no
place names.** Length is not what separates us. **Recorded explicitly so that nobody proposes
padding** — SOP §3 Step 5 classes word-count gaps as LOW because length correlates with rank without
causing it.

---

## 3. CONTENT SPEC — what the pages must contain

Three surfaces, with different gate exposure. **Getting the surface right matters more than the
wording**, because of the mechanics in SOP §5.

| Surface | Gate exposure |
|---|---|
| **A. NEW service×county hub** `/servicii/intabulare-teren/alba/` | Size gate only (`MAX_HUB_BYTES`). No demotion risk. |
| **B. The 222 leaves** | Full gate: `MIN_UNIQUE_WORDS=120`, `MAX_SHINGLE_OVERLAP=0.7`, `MAX_LEAF_BYTES=61440`. |
| **C. Guide layer** `/ghid/` | Ungated content; currently orphaned from the service cluster. |

> **Binding gate rule for surface B (SOP §5, facts.md §6).** The sibling group is
> **service-only, spanning all five counties (~222 pages)**. A block present on **all 222** is
> ≥50% ⇒ dropped as boilerplate ⇒ **safe but gate-neutral**. A block keyed to **county, BCPI office
> or `profile`** is 5–35% ⇒ **lands in the residual ⇒ drives overlap UP ⇒ dangerous.** A block that
> is genuinely **per-locality** is page-exclusive ⇒ **raises unique words ⇒ ideal.**
> **There is no safe middle.** Any section below that is neither fully constant nor fully
> per-locality is mis-specified and must be sent back.

---

### S1 — "Acte necesare: teren intravilan / teren extravilan" (split checklist) · Surface A + B

- **Purpose.** Answer the modifier we rank #7 on and that neither the served page nor the correct
  page addresses at all. Closes G4.
- **Must answer.** Which documents differ between the intravilan and the extravilan case; **who
  issues each row** (primărie / notar / ANAF / OCPI arhivă / proprietar); the extravilan-only items
  (schița de punere în posesie, adeverința pentru zona necooperativizată, extras de CF *plus* harta
  de CF); and the messy-file edge cases as *document rows*, not prose — declarație autentică de acord
  pentru diminuarea/majorarea suprafeței, sentință judecătorească, raport de expertiză tehnică,
  proces-verbal de vecinătate. A user with a complicated file must find their own case in the list.
- **Data source.** **MISSING.** `services.json` `documents` is a flat 5-string array with no case
  split and no issuing authority per row. Needs a new shape (see §4, M1).
- **Gate.** Render **identically on all 222 leaves** ⇒ boilerplate ⇒ safe and gate-neutral.
  **Do NOT key this to `loc.profile`** to "show only the relevant list" — see §4 M8, that is the
  single most tempting gate-hostile move available on this service.
- **Policy.** No prices, no durations, no invented tariffs. Fully §0.2-compliant.

### S2 — "Terenul moștenit: de la certificatul de moștenitor la cartea funciară" · Surface A (primary) + C (bound) + B (compact)

- **Purpose.** Fill the intersection Google explicitly reported as empty ("Lipsesc: alba" on 3 of 9).
  Closes G3. This is the highest-value *content* opportunity on the service, and it is fully
  §0.2-compatible — it needs no price and no duration.
- **Must answer.** Can you inherit an unregistered plot at all (yes — succession is debated at the
  notary even without cadastre); which notary is competent (last domicile of the deceased); what the
  certificat de moștenitor requires; what happens when the titlu de proprietate is still in a dead
  parent's name; the **registration at Direcția Taxe și Impozite after succession** (the forgotten
  step); and **which BCPI receives this specific locality's file**.
- **Data source.** Substance **EXISTS** in `generator/data/guides/pasi-intabulare-teren-mostenit.json`
  (7 sections, 1,202 words). Local binding **EXISTS** in `loc.ocpiOffice` and
  `counties.json alba.bcpiOffices[].covers` (5 offices, all 78 UATs mapped). **MISSING:** the county
  binding inside the guide (0 mentions of Alba/Aiud in its own JSON) and a leaf→guide link slot in
  the template (§4, M6).
- **Precondition — do not skip.** **BP-7 below.** The guide's *"Cât durează și cât costă"* section
  currently reads *"OCPI soluționează prima înregistrare în 18 zile lucrătoare (8 în regim de
  urgență)"* and quotes *1.400–2.500 lei*. Linking it from the service cluster as-is **imports a
  §0.2-forbidden duration claim and a price figure absent from `services.json` onto 222 pages'
  neighbourhood.** Reword first, link second.
- **Leaf version (surface B).** A compact 3-step block plus the link — **constant across all 222**
  ⇒ boilerplate ⇒ safe. The long form lives on the hub and in the guide.

### S3 — "Traseul actelor înainte de măsurătoare" (institution sequence) · Surface A + B

- **Purpose.** Our process begins at WhatsApp; the user's first three obstacles are institutions we
  never name. Closes G5.
- **Must answer.** In order, which office issues which document *before the surveyor is any use*:
  primărie (certificat de atestare fiscală, schița de punere în posesie, extras din registrul
  agricol) → notar (succession, if applicable) → ANAF (certificat de datorii) → Direcția Taxe și
  Impozite (post-succession registration) → topograf → BCPI. And: what to do when the succession has
  not been opened at all.
- **Data source.** **MISSING** — needs `service.preProcess[]`, or the sequence prepended to
  `service.process[]` (which is a 6-item array today).
- **Hard constraint.** Name the institution and the document. **Never a timeframe.** SOP §0.2 forbids
  any duration claim about a third-party office, and this section is where such a claim would most
  naturally creep in.
- **Gate.** Constant on all 222 ⇒ boilerplate ⇒ safe.

### S4 — "Unde se depune dosarul — cele 5 birouri din Alba" (routing table) · Surface A only

- **Purpose.** The county hub's single strongest unique asset, and it requires **no new data at all.**
- **Must answer.** Which of the five BCPI offices receives the file for each of the 78 Alba UATs,
  with each office's street address.
- **Data source.** **EXISTS AND IS UNUSED AT COUNTY-SERVICE LEVEL.** `counties.json` →
  `alba.bcpiOffices[]` = 5 objects with `name`, `address` and `covers[]`, distributed
  **Alba Iulia 15 / Aiud 16 / Blaj 12 / Câmpeni 22 / Sebeș 13 = all 78 UATs.** `alba.ocpiHq` and
  `alba.countyNote` also exist. Nothing here needs to be written or invented.
- **Do NOT put this on leaves.** Chair D4: office-keyed text is 5–11% of the sibling group, lands in
  every same-office page's residual and drives overlap up. Hub and flagships only.

### S5 — "Situația terenurilor din <localitate>" (`serviceNotes`) · Surface B

- **Purpose.** The direct cure for G2. It is what makes `intabulare-teren/alba/alba-iulia` say
  something `intabulare-apartament/alba/alba-iulia` structurally cannot.
- **Must answer.** What is specific about **land** registration in this locality: parcelar status,
  expropriation corridors, titles written by tarla/parcelă, unmarked hill and fâneață limits, the
  intravilan/extravilan mix, extinderea intravilanului.
- **Data source.** **MISSING — and it is chair-approved (D5) but grep-verified NOT implemented**
  (0 hits for `serviceNotes` anywhere under `generator/`). Raw material exists: `localNote` is
  populated on **78/78** Alba records and already carries exactly this register — Șibot's names the
  A1/DN7/railway corridors, the expropriation remnants, the Băcăinți hill fânețe and the dig
  protection zone. But `localNote` is **service-agnostic and already rendered**, so it cannot
  differentiate two services in the same town.
- **Gate.** Genuinely per-locality ⇒ **page-exclusive ⇒ raises unique words. This is the ideal
  shape and the only section in this spec that improves the gate rather than merely not harming it.**
- **Warning.** Per facts.md §7, adding page-exclusive text to some leaves moves the boilerplate cut
  for **all 222**. Ship per SOP §4.3–4.4: one logical change, rebuild, verify, **set-diff** — never
  trust the demotion count, only the key set.

### S6 — "Cine face măsurătoarea" · Surface A + B

- **Purpose.** Closes G7. The cohort's sharpest trust asset, and our content region currently names
  nobody.
- **Must answer.** Who comes to the measurement, what he is authorized to do, how to reach him
  directly.
- **Data source.** Partially **EXISTS** (`site.nap.name`, `phone`, `phoneDisplay`, `phoneIntl`,
  `hours`). **MISSING:** a structured `site.owner { firstName, lastName, title, ancpiAuth }`.
- **Partially BLOCKED.** Ship the name + title now; leave a **marked slot** for the ANCPI
  seria/număr/categorie (CEO question 1, ruling 0.1). **Never invent a number.**
- **Gate.** Constant on all 222 ⇒ boilerplate ⇒ safe.

### S7 — Meta description rebuild · head, ungated

- **Purpose.** 221 of 222 leaves advertise `aprox. N km de Aiud` inside the Google snippet, in a
  near-identical string. It is both a reason not to click and a likely *contributor* to G2.
- **Must answer, in ~155 characters.** Service + locality + **the competent BCPI office** + one
  differentiator. Drop the distance clause above ~25 km (chair D1 keeps it where it is genuinely a
  selling point).
- **Data source.** **EXISTS.** `loc.ocpiOffice.name`, `distanceKm()`; render site is
  `pages.js:457–460`. Already ruled (chair D1/W2, scope 1,508 pages site-wide).
- **Gate.** Meta lives in `<head>`, **outside** the gated content region. Zero demotion risk.
- **Status note.** Aiud is already fixed (`distanceKmFromAiud: 0`, meta now reads *"birou chiar în
  Aiud"*); the *"aprox. 2 km de Aiud"* in the SERP capture is **stale Google cache, not a live
  defect**. **221 leaves of this service remain.**

### S8 — FAQ selection, reweighted for this service · Surface B

- **Purpose.** Guarantee that every leaf answers the three cases this service's SERPs actually show:
  extravilan, moștenire, and *"is this free under PNCCF?"* (2 of 9 results on `intabulare teren aiud`
  are about free systematic registration).
- **Must answer.** Nothing new needs writing: `faqPool` items already cover moștenire (#2), cadastru
  sistematic (#10) and arendă/APIA (#11). **What is missing is deterministic inclusion** — the picker
  is `pickSeeded(pool, 4..6, seed)` at `pages.js:410–417`, so a given page can miss all three.
- **Data source.** Pool **EXISTS** (11 items). **MISSING:** a pin/always-include mechanism in
  `pickSeeded`.
- **Gate — measure, do not assume.** Chair D13 bans **resizing** `faqPool` (~45% document frequency,
  just under the 50% cliff). Pinning is not a resize, but it **does** push pinned items toward 100%
  frequency, across the boilerplate cut and out of the residual; and because FAQ text is
  locality-parameterized (`{localitate}`), it also changes which *page-exclusive* strings each leaf
  gets. **Net direction on unique words is genuinely uncertain. This section requires a full gate run
  against the current 0-demotion baseline before it ships, and must be reverted on any new
  demotion.** Do not present it as a free change.

### S9 — PNCCF / "trebuie să plătesc?" · Surface C, linked from A

- **Purpose.** 2 of 9 results on `intabulare teren aiud` (aiud.ro #2, alba24.ro #8) are about free
  systematic registration. Part of this query's demand is *"do I have to pay for this at all?"*.
- **Data source.** **EXISTS** — `/ghid/cadastru-gratuit-pnccf.html`. Needs linking from the new Alba
  hub.
- **HARD LIMIT (chair D6 + ruling 0.5).** One `/ghid/` article. **No per-village PNCCF claims
  anywhere. No invented years, sector numbers, parcel counts or completion status.**

### S10 — Coverage framing replacing distance framing · Surface B

- **Purpose.** Closes G8. Same facts, opposite valence.
- **Must answer.** That the office is in Aiud, that we cover the whole county with travel to any UAT,
  and that files are lodged in person at the competent BCPI.
- **Data source.** **EXISTS** — `distanceKm()`, `loc.ocpiOffice`, `site.deplasareNote`,
  `alba.countyNote` (which already ends *"Biroul nostru fiind chiar în Aiud, acoperim integral
  județul, cu deplasare în orice UAT"*).
- **Gate.** Rewording an existing constant sentence in place ⇒ stays boilerplate ⇒ safe.

---

### S0 — THE HUB ITSELF: `/servicii/intabulare-teren/alba/` · Surface A · **do this first**

Not a section but the container for S1–S4 and S9. Closes G1. Per chair W1 (12 pages for Alba, one
generator change); this document specifies the `intabulare-teren` one.

**Must contain, in this order:**
1. `<title>` and H1 carrying **both** `Intabulare teren` and `județul Alba` — and **Alba Iulia named
   in the first paragraph**, because ter-q1-pc proves Google judges `… alba` against Alba Iulia city
   pages (all 9 results did).
2. The 5-office BCPI routing table (**S4** — data already exists, zero writing).
3. The intravilan/extravilan split document lists (**S1**).
4. The moștenire section (**S2**) — this is the county-tier query we do not rank on at all.
5. Process including the pre-measurement institution sequence (**S3**).
6. Price: the existing hedged `900 – 2.500 lei` from `services.json` + the standing
   `priceDisclaimer`. **CEO ruling 2026-07-29: keep it. Proposing to remove it is itself an
   anti-pattern (SOP §6).**
7. FAQ + **FAQPage schema + Service schema** — `/zone/alba/` has neither, and that is one reason it
   cannot serve these queries.
8. Locality list with **orașe principale above the A–Z block** (chair W3c), and real anchor text
   (*"Intabulare teren în Alba Iulia"*, not *"Alba Iulia"*).
9. Breadcrumb parent for all 78 Alba leaves — this is what tells Google the village page sits
   **under** the county page rather than beside it.

**Must NOT contain:** any turnaround or duration, any ANCPI tariff, any PNCCF year/sector/parcel
figure.

---

## 4. DATA REQUIRED FROM THE GENERATOR

### EXISTS — usable today, no new fields

| Field | Location | Feeds |
|---|---|---|
| `name, slug, shortName, metaDescription, hubIntro` | `services.json` (intabulare-teren) | S0, S7 |
| `introVariants[12]` (4 profiles × 3) | `services.json` | intro; **do not resize — chair D13** |
| `process[6]` | `services.json` | S3 base |
| `documents[5]` (flat strings) | `services.json` | S1 base — **shape is the problem, see M1** |
| `priceRange` `"900 – 2.500 lei…"` + `site.priceDisclaimer` | `services.json`, `site.json` | S0 §6 — **keep, CEO ruling** |
| `faqPool[11]` incl. moștenire/PNCCF/APIA items | `services.json` | S8 — **content is there, selection is not** |
| `related[4]` | `services.json` | S0 cross-links |
| `name, slug, type, villages, lat, lon, ocpiOffice{name,address}, matrix, profile, countyNotesRef, localNote, nearby` | `localities/alba.json`, **78/78 populated, 0 missing `villages`, 0 missing `localNote`** | S2, S5 raw material, S10 |
| `distanceKmFromAiud` | `localities/alba.json` — **override set on `aiud` only (=0)** | S7, S10 |
| `alba.bcpiOffices[5]{name,address,covers[]}` → **all 78 UATs mapped, 15/16/12/22/13** | `counties.json` | **S4 — the strongest unused dataset on this service** |
| `alba.ocpiHq`, `alba.countyNote`, `alba.feeNote` | `counties.json` | S0, S10 |
| `nap{name,street,city,phone,phoneDisplay,phoneIntl,hours,lat,lon,mapsUrl}`, `whatsapp`, `deplasareNote`, `trustStats` | `site.json` | S6 partial, CTA |
| `guides/pasi-intabulare-teren-mostenit.json` (7 sections, 1,202 words, `related.services` already names `intabulare-teren`) | `data/guides/` | **S2 — substance already written** |
| `guides/acte-necesare-intabulare-teren.json`, `intabulare-teren-fara-acte.json`, `suprafata-din-acte-difera-de-teren.json`, `cadastru-gratuit-pnccf.json` | `data/guides/` | S1, S9 support |

### MISSING — must be added before the section can be built

| # | Missing | Blocks | Note |
|---|---|---|---|
| **M1** | Case-split documents: `documents.intravilan[]` / `documents.extravilan[]`, each row carrying its **issuing authority** | **S1** | Today `documents` is a flat 5-string array. This is the single largest content-shape gap on the service. |
| **M2** | `loc.serviceNotes { "<service-slug>": "<prose>" }` | **S5** | **Chair D5 approved for v1 — grep-verified 0 hits under `generator/`. Not implemented.** ~15 lines in `pages.js`. |
| **M3** | `service.preProcess[]` (institution sequence before measurement) | **S3** | Or prepend to `process[]`. Must contain no timeframes. |
| **M4** | `service.legalRefs[]` (ODG citations) | **S6/G6** | **Must be independently verified against current ANCPI regulation — never copied from a competitor page.** |
| **M5** | `site.owner { firstName, lastName, title, ancpiAuth }` | **S6** | `nap.name` is a trade name, not a person. `ancpiAuth` stays an **empty marked slot** until Aurel supplies it. |
| **M6** | A guide-link slot in `page-service-locality.html` | **S2, S9** | The template renders exactly 14 named placeholders and **none links a guide**; `hubLinksBlock` (`pages.js:439`) emits only `/servicii/<svc>/` and `/zone/<county>/`. This is the structural cause of G3. |
| **M7** | Service×county hub builder + route + breadcrumb reparenting | **S0/G1** | `docs/servicii/intabulare-teren/alba/index.html` verified absent. Chair W1. |
| **M8** | FAQ pin/always-include in `pickSeeded` | **S8** | Requires a gate run; see S8. |

### M9 — a field that must **NOT** be created, and why

There is **no field distinguishing localities where the extravilan case dominates.** The only proxy
is `loc.profile` — Alba distribution: `montan-apuseni` 32, `agricol-campie` 31, `periurban` 8,
`urban` 7 of 78.

**Do not key any leaf section to `profile`.** Across the 222-page sibling group each profile is
roughly **14–25%** — comfortably **below the 50% boilerplate cut**, so a profile-keyed block lands in
the residual of every same-profile page and **drives `MAX_SHINGLE_OVERLAP` up**. This is exactly the
arithmetic behind chair ruling D4, applied to a different key. It is also the most tempting
optimisation on this service ("show farmers the extravilan list, show townspeople the intravilan
one"), which is why it is written down here as a prohibition rather than left implicit.

**Show both lists everywhere (constant ⇒ boilerplate ⇒ safe), and differentiate through
`serviceNotes` (M2), which is page-exclusive.**

---

## 5. BLOCKED BY POLICY — recorded as intelligence, NOT actioned

| # | Item | Detail |
|---|---|---|
| **BP-1** | **The exact ANCPI tariff paid by the client** | necesit.ro publishes a real quoted job — *"Teren intravilan/extravilan; Preț estimat: 4.500 lei"*; notariate.ro ranks **#3** on the moștenire query with a **notary-fee calculator** rated 4,9(187); brig.ro shows 336–2.100 RON for Aiud. The price-answer slot is real and contested. **We do not contest it beyond the hedged `900 – 2.500 lei` range already live.** |
| **BP-2** | **Any turnaround/duration claim about BCPI processing** | **And it costs us nothing here: no page in the cohort publishes one.** cadastrumaxim states zero timeframes on either page (`durationClaim: NONE` on both); startcad states none. On this service SOP §0.2 is competitively free. |
| **BP-3** | **Any new price figure outside `services.json`** | Includes anything derived from a competitor's quote. |
| **BP-4** | **PNCCF years, sector numbers, parcel counts, completion status** | Even though 2 of 9 results on `intabulare teren aiud` are PNCCF pages (aiud.ro #2, alba24.ro #8). Chair D6 routes this to one `/ghid/` article with **no per-village claims**. |
| **BP-5** | **The ANCPI authorization number** | CEO question 1. Blocks the full S6 trust block. **Marked slot only — never invent a number** (ruling 0.1). Name and title are *not* blocked. |
| **BP-6** | **Copying the ODG numbers from cadastrumaxim** | Not a §0.2 price/duration block, but the same class of hazard: a checkable third-party fact we have not verified. Look it up or omit it. |
| **BP-7** | **⚠️ ESCALATION — linking the moștenire guide would import a §0.2 violation** | See §6. |

**What is NOT blocked, and is the whole opportunity:** documents, institution routing, which office
receives the file, and named local specificity. **None of the four requires a price or a duration**,
and all four are exactly where the 89%-aggregator SERP is empty.

---

## 6. ⚠️ POLICY CONFLICTS IN OUR OWN LIVE CONTENT — escalated, not actioned

Outside this agent's territory (SOP §4.1, single writer per file) and a ruling-interpretation call,
not a research call. **Escalated to the chair.** Both bear directly on this spec.

### 6.1 — `services.json:217`, 106 live `intabulare-teren` pages including our **#1 result**

> **"Cât durează intabularea unui teren în {localitate}?"** — *"De regulă câteva săptămâni de la
> depunerea dosarului complet la {ocpi} … **Termenul poate fi redus contra taxei de urgență ANCPI.**"*

Re-verified today: **106** `intabulare-teren` pages carry `taxei de urgență`; **202** site-wide
(parallel at `services.json:561` for dezmembrare-alipire and in `generator/lib/sample-data.js:195`).
SOP §0.2 forbids "any turnaround or duration claim … applied to BCPI processing". It is hedged and
predates the ruling. **Reword, or grandfather — the chair decides.** CEO question 2 resolves it
either way.

### 6.2 — NEW, and sharper: the guide layer carries hard numbers

`generator/data/guides/pasi-intabulare-teren-mostenit.json`, section *"Cât durează și cât costă"*:

> *"…OCPI soluționează prima înregistrare în **18 zile lucrătoare (8 în regim de urgență)**… onorariul
> pentru cadastru și intabulare — orientativ între **1.400 și 2.500 lei**…"*

Two distinct §0.2 items in one paragraph: an **exact working-day figure** for a government office
(the precise pattern named in ruling 0.2), and a **price figure that is not in `services.json`**.

Measured spread: **`18 zile lucrătoare` on 12 pages; `zile lucrătoare` on 55 pages** —
23 `/ghid/`, 11 `/fonduri-europene/`, 11 `/parcuri-fotovoltaice/`, 7 `/teren-agricol/`, 3
`/dicționar/`, and **0 under `/servicii/`.** The 222 service leaves are clean of it.

**Why this is in scope for this spec rather than a bystander finding:** S2's cheapest remedy — link
the existing moștenire guide from the service cluster (M6) — would be the first thing to connect the
clean `/servicii/` tree to the layer holding these numbers. **Reword first, link second.** Shipping
M6 before the guide is cleaned would propagate a forbidden claim into the exact cluster this whole
exercise is meant to protect.

---

## 7. ROUTING DEFECT — the headline finding for this service

**YES, on 4 of 5 target queries. This service is the clearest case in the whole study.**

- **Wrong locality, twice, with the correct page sitting on disk unused.**
  `intabulare teren extravilan alba iulia` (#7) → served `alba/sibot.html`; correct
  `alba/alba-iulia.html` **exists**.
  `intabulare teren Alba Iulia` (#9, prior session) → served `alba/ohaba.html`; correct
  `alba/alba-iulia.html` **exists**.
- **No page to serve, twice.** `intabulare teren alba` and `intabulare teren mostenire alba` are
  county-tier. `docs/servicii/intabulare-teren/alba/index.html` **does not exist**. Neither fallback
  qualifies (G1).
- **Correct exactly once.** `intabulare teren aiud` → **#1**, `servedPage == correctPage`.
- **Signature.** Three different villages substituted for Alba Iulia across three captures (Ohaba,
  Șibot, and Cut/Unirea on the agricol variant). **Unstable substitution = insufficient
  differentiation**, which is G2 stated in SERP terms.
- **Compounding cost on ter-q2alt-pc:** the query says **extravilan**, and *neither* the served page
  nor the correct page mentions the word even once (0 occurrences in both files, verified). The page
  is not only mis-routed, it is also not the best available answer to the modifier.

**Order of work, and it is not negotiable per chair D2:**
**(1) S0/M7 — the Alba service hub. (2) S7 — the meta rebuild on 221 leaves. (3) S5/M2 —
`serviceNotes`. (4) everything else.**
Steps 1–3 decide *which page Google shows*. Steps 4+ decide *what it says once shown*. A perfect
page that is never served is worth nothing.

---

## 8. What this spec does not establish

- **n=2 surveyor domains. There is no consensus on this service** — every cohort-derived gap is one
  firm's practice, capped at MEDIUM.
- cadastrumaxim ranks #3–#4 **with no schema, no FAQ, no process, no prices, no local place names and
  a 2000s forum CMS.** Its ranking is far more plausibly explained by domain age, a nine-year-old
  business, 39+32+11 Google reviews across three entities, and an office four doors from OCPI Alba
  than by any on-page feature above. **Copying its on-page features will not reproduce its ranking.**
  Do S1–S10 because they serve the user, not as a ranking recipe.
- **Our domain is two days old.** Head terms are not winnable this cycle — and note we are *nowhere*
  on the bare head term `intabulare teren alba` while ranking **#1** on `intabulare teren agricol
  alba`. **The modifier is what we win on.** That argues for depth on extravilan / moștenire /
  agricol, not for contesting the head term.
- Nothing here is promoted before the **2026-08-19 GSC gate**: position and impressions, **which URL
  is served per query** (the metric that judges §7), index coverage, and map-pack position vs review
  count.
