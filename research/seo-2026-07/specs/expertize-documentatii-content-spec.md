# CONTENT SPEC — `expertize-documentatii`

**Stage:** SOP-serp-research.md Steps 5–6 · **Date 2026-07-29**
**Inputs:** `research/seo-2026-07/serp/expertize-documentatii-serp.md` (4 queries captured),
`research/seo-2026-07/competitors/expertize-documentatii-competitors.md` (5 surveyor domains).
**Binding above this document:** SOP §0 rulings, `spec-seo-chair-verdict.md` (routing before content).

This is a spec, not copy. No Romanian page text is written here.

---

## 0. READ THIS FIRST — THE ROUTING DEFECT

**For this service the page Google should serve has never been built. Everything below is
worthless until that is fixed.**

| Query | Our rank | Page Google **serves** | Page it **should** serve | State |
|---|---|---|---|---|
| exp-q1 `expertiza topografica alba` | absent | — | service×county hub for Alba, or `/zone/alba/` | **hub does not exist** (no `buildServiceCountyHub` in `generator/lib/pages.js`; exports are `buildServiceLocality`, `buildServiceHub`, `buildCountyHub` only) |
| exp-q2 `expertiza topografica alba iulia` | absent | — | `docs/servicii/expertize-documentatii/alba/alba-iulia.html` | **does not exist** |
| exp-q3 `expertiza topografica aiud` | **#3** | `docs/servicii/intabulare-teren/alba/aiud.html` | `docs/servicii/expertize-documentatii/alba/aiud.html` | **does not exist** — wrong service served |
| exp-q3 `expertiza topografica aiud` | **#9** | `docs/servicii/plan-topografic/alba/rimetea.html` | same as above | **does not exist** — wrong service *and* wrong locality (comună, 24 km away) |
| exp-q4 `granituire teren alba` | absent | — | not a service-page intent | reclassified `informational` per SOP §2 |

Mechanically verified in the repo, first-hand:

```
generator/data/services.json   →  "hubOnly": true   (expertize-documentatii)
generator/build.js:181         →  if (s.hubOnly === true) continue;
docs/servicii/expertize-documentatii/       →  index.html ONLY (18,221 bytes)
docs/servicii/expertize-documentatii/alba/  →  No such file or directory
```

**This is a third failure mode — call it substitution-for-absence.**
`FINDING-cannibalization.md` records *wrong locality* and *wrong service, right town*; in both of
those the correct page **exists** and Google declined to serve it. Here Google is substituting from
a neighbouring service because there is nothing else of ours to serve. **Chair items W1 (county
hubs) and `serviceNotes` do not address this case** — differentiation has nothing to differentiate.

The remedy is not a content change. It is: **emit locality pages for this service**
(flip `hubOnly`, or add an explicit allow-list), *then* apply the spec in §3.

### Two flags for the implementing agents (not part of this spec's scope)

1. **W2 threshold.** `docs/servicii/plan-topografic/alba/rimetea.html` currently emits
   `…Topograf autorizat ANCPI, aprox. 24 km de Aiud.` — verified live, not stale. This is the page
   Google serves for an **Aiud** query. Chair item W2 drops the distance clause **above ~25 km**, so
   as specified it would **leave this clause in place on exactly the page where it does the damage**.
   The threshold is measured against the locality's own distance, not the searcher's.
2. **Not a defect.** The `aprox. 2 km de Aiud` in our #3 snippet is a **stale Google cache**. The
   repo emits `birou chiar în Aiud` (verified). Do not re-open facts.md §12.1. It is however a free
   crawl-freshness checkpoint ahead of the 2026-08-19 gate.

---

## 1. Surveyor cohort and aggregator share

- **Surveyor cohort analysed: 5 distinct third-party domains** across 8 organic slots
  (`pdproiectsurveyor.ro`, `cadastrumaxim.ro`, `gistopocad.3x.ro`, `cadastrumartin.ro`,
  `experttehnicjudiciar.com`). Consensus below is computed over these five ONLY.
- **Aggregator share: 15 / 36 organic slots = 42%** (q1 5/9, q2 6/9, q3 4/9, q4 0/9), plus 11 `other`
  (2 Facebook, 9 legal/blog/legislation). Ours: 2 slots, both on q3, both wrong.
- **Map pack: NONE on all four queries.** This intent is pure organic — our Aiud location costs us
  nothing here, and **no page change may be proposed for a map-pack position** (SOP §6).

**Three shortfalls, recorded rather than padded:**
1. exp-q3 yields **1** third-party surveyor (below the Step 3 minimum of 3), and Google flags it
   *"Lipsesc: aiud"*.
2. exp-q4 yields **0** surveyors — Step 3 cannot run; reclassified `informational`.
3. **Cohort qualifier that governs every number below: 4 of 5 rank with a general homepage.**
   **0 of 5 have a dedicated expertiză page.** The consensus therefore describes four general
   cadastre homepages plus one out-of-county judicial-expertise homepage. Do not treat them as
   models for a service page; treat them as proof the intent is undefended.

Cohort consensus, verbatim from the extraction: dedicated expertise page **0/5** · FAQ on the
ranked page **0/5** · any JSON-LD **0/5** · price figure **0/5** · numeric duration claim **0/5** ·
acte necesare **1/5** · numbered process steps **0/5** · named individual **4/5** · photo **1/5** ·
ANCPI authorization **number 0/5** · years-of-experience **3/5** · phone visible **4/5** ·
WhatsApp **0/5** · names a village **0/5** · word counts 307 / 850 / 850 / 1,300 / 1,300.

---

## 2. GAPS — ranked, confidence-tagged

> Confidence rule applied literally: **HIGH** = near-unanimous across the 5-surveyor cohort AND
> mechanically checkable. **MEDIUM** = majority pattern with a plausible mechanism. **LOW** =
> correlational only. Word-count gaps are LOW by construction.

### 1. [HIGH] [moves-rankings] — the target page does not exist; Google substitutes our own siblings

Not derived from cohort consensus — directly observed, which is stronger. `hubOnly: true` +
`build.js:181` ⇒ zero locality pages; exp-q3 shows Google filling the hole with
`intabulare-teren/alba/aiud.html` (#3) and `plan-topografic/alba/rimetea.html` (#9). We already hold
**2 of 9 organic slots on our home-town query for this intent** with pages that are about something
else. On q1/q2 the only asset we own is a 212-word hub that does not rank.

### 2. [HIGH] [moves-rankings] — nobody owns *topic × place*; we own neither half on a page that ranks

Near-unanimous and mechanically checkable in both directions: **0/5 competitors have an expertise
page** and **0/5 name a single village**; the one cohort member that owns the judicial framing
(`experttehnicjudiciar.com`, Bucharest) still takes **#6 on the Aiud query** with *zero* Aiud
presence — Google flags it *"Lipsesc: aiud"*. Meanwhile our hub scores `localSpecificity: none`
(13 × "alba", 3 × "aiud", **all** inside the shared NAP/footer frame) and the two pages we do get
served carry `expertiz*` 4× and 2× and `grănițuire` 2× and 0× as incidental mentions.
The combination *expertiză topografică + a named Alba locality* is unclaimed by every party in the
SERP, us included.

### 3. [HIGH] [moves-rankings] — 6 authored, on-topic FAQs render on **zero** pages (generator defect)

`generator/lib/pages.js:530` (`buildServiceHub`) reads `service.hubFaq`. Measured across all 12
services: **`hubFaq` length is 0 for every one; `faqPool` is populated for every one.** `faqPool` is
consumed **only** at `pages.js:410`, inside `buildServiceLocality`, which `build.js:181` never runs
for the 4 `hubOnly` services. Verified: `<details>` count **0** and `FAQPage` count **0** on the
`expertize-documentatii`, `topografie-constructii`, `servicii-ocpi` and `certificat-energetic` hubs.
**23 authored Q&A pairs are dead data site-wide; 6 of them are ours here**, including
*"Ce este o expertiză topografică judiciară?"*, *"Aveți experiență cu procese de grănițuire?"*,
*"Pot folosi o expertiză extrajudiciară înainte de proces?"*, *"Lucrați cu avocați?"*.

Honest statement of mechanism: the cohort is **0/5 on FAQ and 0/5 on schema**, so this is *not* a
"they have it, we don't" gap. The confidence is HIGH because the defect and its remedy are
mechanically certain and require **no new copy**; the ranking mechanism is **topical coverage of
the exact query string**, not depth. Note the counter-evidence in gap 6 before over-weighting it.
Restoring it also restores the only FAQPage schema in the entire SERP.

### 4. [MEDIUM] [moves-rankings] — the judiciar / extrajudiciar product split is unnamed on our pages

**1/5** of the cohort uses it — but that one is the *only* third-party surveyor Google returned on
the Aiud expertise query, and it ranks on that vocabulary alone from Bucharest, with tenure
*"experiență ce începe în anul 2022"* against our *"peste 25 de ani"*. Low N, so MEDIUM, not HIGH.
Our own `faqPool` already answers the distinction (entries 1 and 4) — it is suppressed by gap 3.

### 5. [MEDIUM] [moves-rankings] — zero contextual internal links into this service

Mechanically verified: `docs/zone/alba/index.html` links `intabulare-teren` **80×** and
`expertize-documentatii` **1×** (the global nav dropdown). The 29 KB grănițuire article
`docs/teren-agricol/vecinul-a-mutat-hotarul.html` links the expertize hub **1×** (nav) while linking
`cadastru-si-intabulare` and eight other services **2×** (nav + contextual). Eight dictionary terms
carry `ctaService: "expertize-documentatii"` and link **into** the hub; the hub links back to
**none** of them. Inbound counts do not differentiate (2,058 vs 2,057 for `intabulare-teren`) because
both figures are pure nav boilerplate.

### 6. [LOW] [table-stakes] — word count

Our hub: **212 content words** (measured with `gates.contentTokens`), vs cohort 307 / 850 / 850 /
1,300 / 1,300. LOW by rule, and specifically undercut here: **`gistopocad.3x.ro` holds #3 on both
exp-q1 and exp-q2 with 307 words including navigation and footer, no `<h1>`, and no HTTPS listener
at all (`ECONNREFUSED :443`), on a free `3x.ro` subdomain.** The two pages Google serves for us
already carry **908** and **786** content words, 6 `<details>` each and FAQPage schema — they lose
this intent on **topic**, not on depth. Treat every depth-based recommendation for this service as
LOW and do not spend gate headroom chasing length.

### 7. [MEDIUM] [table-stakes] — no named individual on the page

**4/5** name an individual (Ing. Emanuel MAXIM, Inginer Dipl. Martin Nicolae, Marius Popescu,
ing. Dulgheriu Vlad) and **1/5** photographs him. Our hub names only the business. Majority pattern,
mechanically checkable ⇒ MEDIUM. **Actioning is blocked** — see §5; the chair bundled the
named-person block (B2) with the ANCPI authorization number, which is CEO question 1.

### 8. NOT A GAP — price and duration

**0/5 disclose a price figure**; all hedge per project in wording nearly identical to ours
(`"Preturile sunt calculate pentru fiecare proiect in parte"`, `"Costurile se calculeaza in functie
de specificul lucrarii"`, ours: `"ofertă după analiza situației — fiecare caz este diferit"`).
**0/5 make a numeric duration claim** — only *"in timp scurt"*, *"rapiditate"*, *"Răspuns Rapid"*,
*"realizate rapid"*. **Uniquely among the 12 services, SOP ruling 0.2 costs us nothing here.**
Leave `priceRange` exactly as it is. Do not add a figure; do not remove the existing wording.

---

## 3. CONTENT SPEC

Three page targets. **T1 is the routing fix and outranks the other two in priority.**

- **T1** `docs/servicii/expertize-documentatii/<county>/<locality>.html` — the leaf that must exist
  (exp-q2, exp-q3). Emitted by `buildServiceLocality`; sections marked *(builder)* already render
  for the other 8 services and need **no code**, only the `hubOnly` flip plus data.
- **T2** `docs/servicii/expertize-documentatii/index.html` — the hub, all that exists today.
- **T3** `docs/servicii/expertize-documentatii/alba/index.html` — chair W1 service×county hub
  (exp-q1). **No builder exists.**

### T1 — the locality leaf

| # | Section | Purpose | Must answer | Data source |
|---|---|---|---|---|
| S1 | Intro / situation lead *(builder, `pages.js:335-357`)* | Match the searcher's situation in the first line, with the place named | "Am un litigiu de hotar în &lt;localitate&gt; — sunteți persoana potrivită?" | `openerPool`/`closerPool` (exist) + `pickIntroVariant` → **`service.introVariants` MISSING (0 entries)**; `km === 0` home-town branch already handled |
| S2 | Ce fel de situații documentăm | Own the case-type vocabulary the query implies; the single highest-value new section | grănițuire · uzucapiune · revendicare · partaj / ieșire din indiviziune · suprapuneri în e-Terra · identificare după acte vechi · planuri pentru avize speciale | `service.hubIntro` already names all seven (exists); the 8 dictionary terms with `ctaService: "expertize-documentatii"` are the authoritative term list |
| S3 | Expertiză judiciară vs extrajudiciară | The framing the only ranking third-party expertise site owns (gap 4); also the pre-litigation upsell | "Ce diferență e între raportul cerut de instanță și unul pe care îl comand eu?" · "Îmi folosește un raport înainte de proces?" | `service.faqPool` entries 1 and 4 (exist, in-register). **Never** name a court, a case number or a judge — no such data exists |
| S4 | Unde ajunge lucrarea | Replaces the "Unde se depune dosarul" card, which is wrong for this service — the report goes to the court or the party, not always to a BCPI | "Cui predau raportul?" and, where OCPI *is* involved (suprapuneri, rectificări), which office | `loc.ocpiOffice{name,address}` (exists, all 222) · `county.bcpiOffices[]` with `covers[]` (exists). Court destination stays **generic** — see §5 |
| S5 | Despre lucrări în &lt;localitate&gt; *(builder)* | The half of *topic × place* nobody in the cohort has (gap 2) | Why this locality's files behave the way they do | `buildLocalContext` (`pages.js:222`) + `loc.localNote` (exists, all 78 Alba) + `loc.villages` + `loc.profile` + `loc.type`. **`loc.serviceNotes{}` MISSING** (chair D5, 0/222) |
| S6 | Acte necesare (orientativ) *(builder)* | Table stakes; 1/5 cohort has any equivalent | The 4 items, incl. *"Încheierea de numire, pentru expertizele judiciare"* — nobody else mentions the court appointment | `service.documents` (exists, 4 items) |
| S7 | Cum decurge procesul *(builder)* | 0/5 cohort has numbered steps; ours are genuinely expertise-specific (arhive, vecinătăți, confruntare cu planurile vechi, susținere în instanță) | "Ce faceți concret, în ce ordine?" | `service.process` (exists, 5 steps) |
| S8 | Preț orientativ *(builder)* | Cohort-standard hedge; **do not touch** | "Cât costă?" → "ofertă după analiza situației" | `service.priceRange` + `site.priceDisclaimer` (exist) |
| S9 | Întrebări frecvente *(builder, blocked by gap 3)* | Restores 6 on-topic Q&As **and** the only FAQPage schema in the SERP | The 6 authored questions, locality-parameterised | `service.faqPool` (exists, 6) + `schema.faqPage()` (exists). Blocked by the `hubFaq`/`faqPool` defect for hubs only; the leaf builder at `pages.js:410` already consumes the pool correctly |
| S10 | Termeni juridici explicați | Close the one-directional dictionary link (gap 5); adds page-exclusive anchor text | Short gloss + link per term | Dictionary terms filtered on `ctaService === "expertize-documentatii"` → `actiune-in-revendicare`, `bonitare-cadastrala`, `culoar-de-expropriere`, `expert-topograf-judiciar`, `expertiza-topografica-judiciara`, `granituire`, `hotarnicie`, `uzucapiune` (all exist, all live pages). **The reverse link is a NEW block** |
| S11 | Citește mai departe | Route equity from our strongest topical assets, which currently rank on nothing | — | `verticals-agricol/vecinul-a-mutat-hotarul.json` (29 KB live, 13 × grănițuire, 6 FAQs), `uzucapiune-teren-agricol`, `suprapunere-cadastrala-teren-agricol`, `partaj-teren-agricol-mostenitori`, `erori-in-titlul-de-proprietate`; `guides/notare-litigiu-in-cf`, `rectificare-suprafata-teren-cf`, `suprafata-din-acte-difera-de-teren`. **NO field links a service to an article — MISSING** |
| S12 | Contact rapid *(builder)* | 0/5 cohort has WhatsApp at all | One tap, message pre-written for *this* situation | `chrome.contactCard` + `site.whatsapp.greetings.servicii` (exist). A per-service prefill is **gate-free**: `util.js:164` strips whole tags (`/<[^>]+>/g`) before tokenizing, so `href` text never reaches the gate |
| S13 | Cine face expertiza | 4/5 cohort names an individual (gap 7) | Who turns up and under what authorization | **BLOCKED — see §5.** No `expertName` / `ancpiAuth*` field exists in `site.json`. Leave a marked slot; **never invent a seria/număr/categorie** |

**Section order note.** S2–S4 must sit **above** S6–S8. The generic service furniture (acte, pași,
preț) is what already makes our served pages look like every other page of ours; the expertise
vocabulary is the only thing that distinguishes this page from `intabulare-teren` in the same town.

### T2 — the service hub (`/servicii/expertize-documentatii/`)

Same sections minus S1/S5 (no locality), plus:

- **S9 must render here too.** Either populate `service.hubFaq` for all 12 services, or change
  `pages.js:530` to fall back to `faqPool` when `hubFaq` is empty. One-line choice; the second fixes
  all four `hubOnly` hubs at once (23 dead Q&A pairs).
- **`localityIndex` self-heals.** `buildServiceHub` builds it from the `emitted` set, which is empty
  today by construction. It populates the moment T1 exists — no code change.

### T3 — service×county hub (chair W1), the exp-q1 target

County-level intent. Requires a **new builder**; none exists. Content = T2 minus locality
parameterisation, plus the Alba locality list with real anchor text
(*"Expertiză topografică în Alba Iulia"*, not *"Alba Iulia"*, per chair W3a) and the 5 BCPI offices
from `counties.json` (exists). Out of this spec's authorship scope; listed so the service is not
forgotten when W1 ships for the other 11.

---

## 4. DATA REQUIRED FROM GENERATOR

### Exists — feed the spec directly

| Field | Location | State |
|---|---|---|
| `name`, `shortName`, `metaDescription`, `hubIntro` | `services.json` (expertize) | ✔ |
| `process[5]`, `documents[4]`, `priceRange`, `related[4]` | `services.json` | ✔ |
| `faqPool[6]` | `services.json` | ✔ authored, **rendered nowhere** (gap 3) |
| `name/slug/type/villages/lat/lon/ocpiOffice/matrix/profile/countyNotesRef/localNote/nearby` | `localities/alba.json` — **78 records, all `matrix: "full"`, all with `localNote` and `villages`** | ✔ |
| `distanceKmFromAiud` | `localities/alba.json` | present on **1** record (`aiud: 0`); everything else is computed from lat/lon |
| `ocpiHq`, `bcpiOffices[5]` with `covers[]`, `countyNote`, `feeNote` | `counties.json` → alba | ✔ |
| 8 dictionary terms with `ctaService: "expertize-documentatii"` | `data/dictionary/{a-k,l-z}.json` | ✔ live pages, one-directional link |
| `priceDisclaimer`, `nap`, `whatsapp.greetings.servicii` | `site.json` | ✔ |
| `schema.faqPage()` | `lib/schema.js` | ✔ used by the leaf builder |

### Missing — must be added before the corresponding section can ship

| Field | Consequence if left missing | Note |
|---|---|---|
| `services.json → expertize-documentatii.introVariants` | **0 entries.** All 8 non-`hubOnly` services carry 8–12. `gates.dataGate` slot `profileVariant` reads as missing ⇒ pages pass at **6/7** slots (still ≥ `MIN_SLOTS = 5`), but S1 loses its profile-matched sentence and the page loses page-exclusive words against `MIN_UNIQUE_WORDS = 120` | Same hole in the other 3 `hubOnly` services |
| `services.json → *.hubFaq` | **0 for all 12.** The hub FAQ (gap 3) cannot render | Or patch `pages.js:530` to fall back to `faqPool` |
| `localities/*.json → serviceNotes{}` | Present on **0 of 222**. Chair D5 approved it; without it the expertize leaf and the `intabulare-teren` leaf in the same town are structurally incapable of saying different things — which is precisely what exp-q3 shows | |
| service → article link field | `service.related` holds **service slugs only**. S11 has no data path | e.g. `service.relatedArticles: ["vecinul-a-mutat-hotarul", …]` |
| `site.json` person/authorization fields | No `expertName`, no `ancpiAuthSeries/Number/Category`. S13 cannot ship | **Blocked on CEO question 1 regardless** |
| locality → court (judecătorie) mapping | Does not exist anywhere in `generator/data/**` | **Do not invent it.** Keep S4's court destination generic |
| `buildServiceCountyHub` | Not in `pages.js` (exports: `buildServiceLocality`, `buildServiceHub`, `buildCountyHub`, …) | T3 / chair W1 |

### Gate mechanics the implementer must know before flipping `hubOnly`

- **Scope of the flip:** `tier2Available: false` ⇒ only `matrix: "full"` localities get pages =
  **92 across 5 counties** (alba 78, cluj 5, mureș 4, sibiu 2, hunedoara 3). The 130 `reduced`
  localities are skipped. Raising `tier2Available` is a separate decision and is **not** proposed.
- **The new pages form their own sibling group.** `build.js:208` groups by `service.slug` only, so
  92 new expertize pages **cannot** demote any existing page through shingle math.
- **But the flip is not gate-neutral for other services.** `otherServicesBlock` sits in the sidebar,
  and `layout.html:36-38` puts the whole sidebar **inside** `<!--content:start-->…<!--content:end-->`.
  Every existing leaf in those 92 localities gains one *"Expertize și documentații"* link inside the
  gated region — 92/222 ≈ 41% document frequency, i.e. **below the 50% boilerplate cut, in the
  residual**. The `slice(0, 8)` cap is not breached (7 other-service links today → 8), so no existing
  link is displaced. Run the full gate and the **set-diff** guard, not the demotion count.
- **Mandatory after every change:**
  `node generator/build.js && node generator/verify.js && node research/seo-2026-07/check-demotions.js`
- Do **not** resize `faqPool` or `introVariants` for the 8 live services (chair D13). Populating
  `introVariants` for a service that currently has **zero** is not a resize — it creates a pool where
  none exists — but it still changes that service's own group and must be gated the same way.

---

## 5. BLOCKED BY POLICY — recorded, NOT actioned

1. **ANCPI authorization number (seria / numărul / categoria).** SOP §0.1 — publish only when Aurel
   supplies it; **never invent one**. It is the highest-value uncontested trust signal available:
   **0/5 of the cohort publish one** (closest: *"Ordin 600/2023 al Directorului General al ANCPI"*
   and *"acreditare ANCPI categoria B"* — category and issuing body, never a number). Pending CEO
   question 1. Chair bundles the **named-expert block (B2)** with it, so gap 7 is blocked too.
2. **Exact ANCPI tariff paid by the client.** Not proposed; nobody in the cohort publishes one.
3. **Any turnaround or duration claim** — including the related search *"cat dureaza un proces de
   granituire"*, which is blocked twice over: it is a duration claim, and it is a **court's**
   timetable. Cohort makes **0/5** numeric duration claims, so this costs us **nothing** here.
4. **Any new price figure.** SOP §0.2 forbids inventing figures not already in `services.json`. The
   related search *"cat costa actiunea de granituire"* asks the cost of a **lawsuit** (taxă de
   timbru, avocat, expertiză), not the cost of our report — answering it is legal-cost advice we are
   not positioned to give. **`priceRange` stays exactly as authored** and is cohort-standard.
5. **PNCCF years, sector numbers, parcel counts, dates** — none appear above and none may be added.
6. **Court names, case numbers, judge names, "N expertize acceptate de instanță"** — no such data
   exists in the repo; producing any of it would be fabrication. S4 stays generic.
7. **No page change is proposed for any map-pack position** — all four queries returned **no map
   pack at all**.
8. **exp-q4 `granituire teren alba` — reclassified `informational`** (0/9 commercial results, 0/9
   surveyors) and does not proceed past SOP step 4. Its one salvageable refinement,
   *"obiective expertiza granituire"*, is `/ghid/` material under chair precedent D6 — **flagged, not
   proposed.**

---

## 6. What this does not establish

SERP analysis is correlational. That `gistopocad.3x.ro` ranks #3 with 307 words and no HTTPS is a
measured fact; that building the expertize leaves will change which URL Google serves is a
**hypothesis**. It is confirmed or refuted by one thing: the Search Console *Pages* report at
**2026-08-19**, showing which URL Google serves for `expertiza topografica aiud`. If it still serves
`intabulare-teren/alba/aiud.html` after the leaves ship and are indexed, the hypothesis failed and we
say so. Nothing here promises a position.
