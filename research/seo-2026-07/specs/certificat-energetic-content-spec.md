# CONTENT SPEC — `certificat-energetic`

**SOP-serp-research.md Step 6.** Date 2026-07-29. Consensus computed over the **surveyor
(provider) cohort only, n = 11 pages / 8 operators**. Directories and blog/social slots excluded
from every ratio below.

Inputs: `research/seo-2026-07/serp/certificat-energetic-serp.md` (4 queries),
`research/seo-2026-07/competitors/certificat-energetic-competitors.md` (11 extractions).
All generator claims below were re-verified in the repo for this spec; three of them **correct the
previous stage** and are marked ⚠️.

---

## 0. HEADLINE — read this before the gap list

**The chair's ruling applies here in its strongest possible form.** For the other eleven services
the routing defect is *Google serves the wrong page*. For `certificat-energetic` it is one class
worse: **there is no page to serve.** `"hubOnly": true` in `generator/data/services.json` means the
whole service is **one HTML file** for the entire country.

```
docs/servicii/certificat-energetic/   →  index.html ONLY   (1 file, 17,712 bytes)  [verified]
docs/servicii/certificat-energetic/alba/   →  does not exist
```

We are **absent from all four captured SERPs, including `certificat energetic aiud` — our home
town**, where our Business Profile holds map-pack #1 for topography and we rank #3 organically on
`expertiza topografica aiud`.

Everything in §4 below is worth nothing until §3 is done. A perfect page that Google never shows
is worth nothing; a page that does not exist cannot even be shown.

---

## 1. Target queries and our position

| Query | Tier | Map pack | Provider cohort | Our rank | `servedPage` | `correctPage` | Exists? |
|---|---|---|---|---|---|---|---|
| cen-q1 `certificat energetic alba` | county | **3 entries** | 7/10 | **absent** | — | `/servicii/certificat-energetic/alba/index.html` (chair W1) | **NO** |
| cen-q2 `certificat energetic alba iulia` | city | none | 6/10 | **absent** | — | `/servicii/certificat-energetic/alba/alba-iulia.html` | **NO** |
| cen-q3 `certificat energetic aiud` | town | none | 7/9 | **absent** | — | `/servicii/certificat-energetic/alba/aiud.html` | **NO** |
| cen-q4 `certificat energetic apartament alba iulia` | city | none | 6/9 | **absent** | — | no property-type dimension exists; nearest is the alba-iulia leaf | **NO** |

**Aggregator (non-provider) share: 12 of 38 organic slots = 31.6%** — directories 7/38, blog/social
5/38. **This is the lowest aggregator share in the programme**, the inverse of `servicii-ocpi` (6–8
of 9) and of the 6/10 the chair recorded for `cadastru si intabulare Alba Iulia`. Under SOP §2 that
is the definition of a query winnable with a genuine service page.

**Counterweight, stated honestly (SOP §7):** six of the seven providers on cen-q1 hold **exact-match
domains** (`certificatenergetic.net`, `certificataudit.ro`, `certific.ro`, `certificat-energetic.ro`,
`certificat-energetic.net`). That is a domain factor no on-page work touches. Nothing here promises
a position.

---

## 2. ⚠️ THREE CORRECTIONS TO THE PREVIOUS STAGE

### 2.1 ⚠️ The FAQ defect is a field-name mismatch, not a missing call — and it is 3× wider

The extraction report states that `buildServiceHub()` never calls `faqDetails()`. **That is wrong.**
Verified in `generator/lib/pages.js`:

```js
// pages.js:529-534  — buildServiceHub()
let faqBlock = '';
let faqs = [];
if (service.hubFaq && service.hubFaq.length) {     // ← reads hubFaq
  faqs = service.hubFaq;
  faqBlock = `<div class="mb-5"><h2 class="h5 mb-3">Întrebări frecvente</h2>${faqDetails(faqs)}</div>`;
}
```

`faqDetails()` **is** called, at line 533. The block is gated on **`service.hubFaq`**, and
`grep -rn "hubFaq" generator/` returns **exactly two hits, both in `pages.js`**. No service defines
it. The authored questions live in **`faqPool`**. The hub reads one field; the data authors another.

Consequences, both verified:

- The dead path is **service-wide, not `hubOnly`-only**. All **12** service hub pages render
  `<details>` = **0** — including `cadastru-si-intabulare` (41,723 bytes) and
  `intabulare-casa-constructie` (42,364 bytes). The report's "4 hubOnly services, 23 answers"
  understates the scope: the *hub* FAQ is missing on all twelve.
- The fix is therefore either **(a)** add a `hubFaq` fallback to `faqPool` in `buildServiceHub()`
  (one line, fixes all 12 hubs), or **(b)** author `hubFaq` per service (12 data edits). (a) is
  strictly cheaper and touches one file.
- `schema.faqPage(faqs)` at `pages.js:577` is already wired and fires the moment `faqs.length > 0`,
  so the fix also lands FAQPage structured data on all 12 hubs for free — on a vertical where
  **0 of 11 competitors have any JSON-LD at all**.

### 2.2 ⚠️ NEW — reversing `hubOnly` would publish a factual error on 92 pages

`buildServiceLocality()` is written for cadastre work and hard-codes a BCPI deposit. Verified at
`pages.js:365-372` (`ocpiBlock`) and `pages.js:356-363` (intro):

> "Pentru imobilele din **{Localitate}**, documentația cadastrală se depune la **BCPI {X}**… Ne
> ocupăm noi de depunere și de urmărirea dosarului."
> "…predăm documentația completă la **BCPI {X}**."
> (home-town branch) "…depunem dosarul personal la **BCPI Aiud**, aflat la câteva minute de noi."

**A certificat de performanță energetică is never deposited at a BCPI.** It is issued by an auditor
energetic atestat MDLPA and handed to the notary. Flipping `hubOnly` with no other change would
publish, on 92 pages, a statement that is simply untrue — on a site whose entire credibility rests
on reading like a careful local professional. `countyNoteBlock` ("Particularități OCPI în județul
Alba", ~103 words, verified) is not false but is off-topic for this service.

**This is a hard blocker on gap #1**, and the previous stage did not identify it.

### 2.3 ⚠️ NEW — `certificat-energetic` has zero `introVariants`, and that is the gate risk

Verified across all 12 services:

| Service | `introVariants` | `faqPool` | leaf pages |
|---|---|---|---|
| intabulare-apartament | **8** | 10 | 93 |
| actualizare-carte-funciara | **8** | 10 | 93 |
| **certificat-energetic** | **0** | **5** | **1** |

`pickIntroVariant()` (`pages.js:208-215`) returns `null` when the array is empty, so the leaf's lead
paragraph loses its whole profile-selected sentence. Two mechanical effects:

1. **Data gate:** the `profileVariant` slot fails. Alba localities still fill 6 of 7
   (distance, ocpiOffice, villages, countyNote, faqSelection, nearby) ≥ `MIN_SLOTS = 5`, so this is
   **not fatal** — but it removes the margin.
2. **Render gate:** `MIN_UNIQUE_WORDS = 120` page-exclusive words. A pool of **5** with
   `count = 4 + seed % 3` (→ 4, 5 or 6) means most of the 92 pages select **all five** FAQ entries.
   Identical text on ≈100% of the group is dropped as boilerplate — safe for overlap, but it
   contributes **zero** page-exclusive words. Combined with the missing intro variant, that is the
   likeliest way to produce a batch of fresh demotions off a **0-demotion baseline**.

---

## 3. THE ROUTING WORK — this is the deliverable

### 3.1 Reversing `hubOnly` is arithmetically safe for the 2,095 live pages

`build.js:208`: `const group = localityPages.filter((p) => p.service.slug === s.slug)` — sibling
groups are **per service**. `certificat-energetic` currently contributes **no** locality pages, so
reversing `hubOnly` creates a **new, isolated group**. It cannot move the boilerplate cut or the
overlap denominator of any existing service. **No live page can be demoted by this change.** The
only risk is that some of the 92 *new* pages fail their own gate — which surfaces as new demotion
keys, never as a lost live page. `check-demotions.js` is a set diff, so this is fully visible.

### 3.2 The resulting group has a proven-passing precedent

With `tier2Available: false` the emitted set is every `matrix: "full"` locality — verified:
**Alba 78 + Cluj 5 + Mureș 4 + Sibiu 2 + Hunedoara 3 = 92 leaves + 1 hub = 93 pages.** That is
**byte-for-byte the same locality set and group shape as `intabulare-apartament` (93) and
`actualizare-carte-funciara` (93)**, both of which currently pass at **0 demotions**.

Note the group-size consequence: in a 92-page group **Alba is 78/92 = 85%**, *above* the 50%
boilerplate cut — so the Alba `countyNote` is dropped as boilerplate and does **not** drive overlap.
(In the 222-page `cadastru-si-intabulare` group Alba is 35%, below the cut, and it does. The facts
brief's warning is correct for that group and inverted for this one.)

### 3.3 Ordered prerequisites — do them in this order

| # | Prerequisite | Why it must come first | Owner file |
|---|---|---|---|
| **P0** | Rewrite `faqPool[2].a` ("Cât durează obținerea certificatului?" → *"De regulă câteva zile de la vizita de releveu…"*) to remove the duration. | It is authored but unrendered today. **The moment either the §2.1 FAQ fix or the `hubOnly` reversal lands, it ships a forbidden duration claim onto up to 93 pages.** It is a landmine armed by both remedies. | `generator/data/services.json` |
| **P0** | Remove `"de regulă în aceeași săptămână"` from `hubIntro`. | Live SOP §0.2 violation today (§5). | `generator/data/services.json` |
| **P1** | Service-aware branch in `buildServiceLocality()` so `ocpiBlock`, the intro BCPI sentence and `countyNoteBlock` are replaced for this service (see §4, sections B and G). | §2.2 — otherwise 92 pages state a falsehood. | `generator/lib/pages.js` |
| **P2** | Author `introVariants` for `certificat-energetic`, profile-tagged (`urban` / `rural`), 8–10 entries to match the passing siblings. | §2.3 — restores the profileVariant slot and the largest page-exclusive sentence in the intro. | `generator/data/services.json` |
| **P3** | **Chair carve-out required** to grow `faqPool` 5 → 10. | Chair D13 bans pool resizing *because it moves shingles across the boilerplate cut for an existing sibling group*. **This group does not exist yet — there is no incumbent to destabilise.** The stated rationale does not apply. This is a ruling to request, not an assumption to make. | chair |
| **P4** | Flip `"hubOnly": false`, rebuild, gate. | — | `generator/data/services.json` |

Gate after **every** step: `node generator/build.js && node generator/verify.js && node research/seo-2026-07/check-demotions.js`. Baseline is **0 demotions**, its strictest setting.

### 3.4 What chair W1 does and does not cover

W1 (service×county hubs, `/servicii/<serviciu>/alba/index.html`) addresses **cen-q1 only**. No such
directory index exists for any service today (verified: `docs/servicii/cadastru-si-intabulare/alba/`
contains leaves only). cen-q2, cen-q3 and cen-q4 need **leaf inventory**, which `hubOnly: true`
forbids. W1 and the reversal are complementary, not alternatives.

---

## 4. CONTENT SPEC — sections, purpose, data source

Research agents do not write Romanian copy (SOP Step 6). Below: what each section is for, what it
must answer, and where its data comes from. **"Field exists"** was checked against
`generator/data/services.json` and `generator/data/localities/alba.json`.

### 4.1 Leaf page — `docs/servicii/certificat-energetic/alba/<locality>.html`

| § | Section | Purpose | Must answer | Data source | Field exists? |
|---|---|---|---|---|---|
| **A** | **Situation-led lead** (replaces the generic opener) | Match the buyer's moment: apartment/house sale, notary appointment booked. Chair B1 pattern, data-composed. | "Vindeți un apartament în {Localitate} și notarul v-a cerut certificatul energetic?" | `loc.name`, `loc.type`, `loc.profile`, + **new** `service.introVariants` | **NO — must be authored (P2)** |
| **B** | **Cine emite certificatul și cum ajunge la notar** (**replaces** the BCPI `ocpiBlock`) | Fix §2.2. Also the single most-asked cohort question ("Cine îl eliberează?" — C2, C3, C9). | Who legally issues it (auditor energetic atestat), what our role is (releveu + coordination, one interlocutor), how it reaches the notary. Wording already exists, honestly phrased, in `faqPool[4].a`. | `service.faqPool[4]` prose, re-cast as a block | **partially — prose exists, block does not** |
| **C** | **Local context** — keep as is | Our structural advantage. Every cohort `/aiud` page is ~5% locality-specific; C10's is a title swap plus one sentence and a photo captioned *"auditor energetic cluj"*; C8 lists a **Mediaș** address on a page titled *Alba Iulia*. | Real distance, real neighbouring villages, real building stock. | `loc.localNote`, `loc.villages`, `loc.lat/lon`, `buildLocalContext()` | **YES — all live** |
| **D** | **Acte necesare, segmented by property type** | Gap #6. Cohort median is 6 items among the 5 pages that have one; ours is 3. C2 splits under H3s the buyer self-selects into: *"1. Ai un apartament în Alba:"* / *"2. Ai o casă în Alba:"*. | Apartment list vs house list. Cohort items we omit: **year of construction, heating system, insulation/tâmplărie, previous energy bills, prior renovation history**, and C11's escape hatch *"dacă schița lipsește, releveul se poate întocmi de auditor"*. | `service.documents` (3 items, flat array of strings) | **NO — needs a shape change to `{apartament:[], casa:[]}` or a second array** |
| **E** | **Ce vă va întreba auditorul** (pre-empt the call) | C2's second list, the best non-blocked idea in the cohort. Converts a phone call into a WhatsApp message. | Regim de înălțime, izolație, tâmplărie, sistem de încălzire și apă caldă, orientare cardinală, anul construcției. | new `service` field | **NO — must be authored** |
| **F** | **Cum decurge procesul** — keep, **minus the duration** | Gap: none. 4 steps vs cohort's 3–6 — **at or above cohort. We already win here.** | Unchanged, except step 2 loses *"durează sub o oră"* pending the chair call (§5). | `service.process[]` | **YES** |
| **G** | **Clasele energetice A+ → G** (**replaces** `countyNoteBlock` for this service) | Fills the ~103-word hole left by removing the off-topic OCPI block, with the one genuinely educational asset in the cohort. Only C3 has it (1/11) — so it is a **differentiator, not a consensus item**; tagged LOW on that basis. It is also what the notary and the buyer's agent ask about, and the anunț imobiliar must state it. | What the classes mean, what moves a building between them. **Authored answer already exists**: `faqPool[3]` "Ce influențează clasa energetică a casei?". | `service.faqPool[3]` prose | **partially — prose exists, block does not** |
| **H** | **Preț orientativ — UNCHANGED** | At parity with the cohort (5/11 exact, 2/11 vague, 4/11 none). C5's own disclaimer *"Prețul… este informativ"* is functionally identical to ours — external confirmation that a hedged range is the market norm, not a liability. | — | `service.priceRange` + `site.priceDisclaimer` | **YES — do not touch (§5)** |
| **I** | **Întrebări frecvente**, headings phrased as questions | Gaps #2 and #7. 3/11 cohort pages carry an on-page FAQ and the two deepest of them rank #1 and #2. C9's four H3s **are** the buyer's four questions in order; **no heading on our page is a question**. | The five authored questions, P0-corrected, ideally grown to 10 (P3). | `service.faqPool` + `faqDetails()` + `schema.faqPage()` | **YES for leaves — already renders** |
| **J** | **CTA — "Cere o evaluare gratuită"** | The one competitive hook in the entire cohort that uses **neither price nor speed** (C7, `ienergetic.ro`). Fully compatible with WhatsApp-first and with every reading of SOP §0.2. Our leaf closer pool already contains *"Prima evaluare a situației imobilului din {X} este gratuită"* — same idea, not surfaced as a CTA. | — | `closerPool` (`pages.js:344-350`), WhatsApp prefill | **YES — needs promotion to CTA, not new data** |

### 4.2 Hub page — `docs/servicii/certificat-energetic/index.html`

| § | Section | Purpose | Data source | Field exists? |
|---|---|---|---|---|
| **K** | **FAQ block** | The §2.1 fix. Zero new writing. Also lands FAQPage JSON-LD. | `faqPool` via a `hubFaq` fallback in `buildServiceHub()` | **content YES / wiring NO** |
| **L** | **`hubIntro` rewrite** | Remove the forbidden duration (P0). Name **Alba Iulia** — gap #4, the string appears **0 times** in 17,712 bytes while cen-q2 and cen-q4 both target it. C1 names **seven** Alba localities in a 90-word page and is #1 on two queries. | `service.hubIntro` | **YES — edit in place** |
| **M** | **`metaDescription` rewrite** | Currently ships *"eliberare rapidă"* — an unhedged speed claim, on the SERP face (§5). Replace with the apartment/notary intent and the county. | `service.metaDescription` | **YES — edit in place** |
| **N** | **`<title>` qualifier** | Today: *"Certificat energetic — Topograf autorizat ANCPI"*. **0 of 11 cohort pages pair those credentials; 11 of 11 present as auditor energetic.** The query term is present, but the qualifier advertises the wrong profession for this intent. Say what is true instead (coordination + attested auditor partner). **Do not claim an MDLPA attestation** (§5). | `assemblePage` title in `buildServiceHub()` | **YES — code, `pages.js:583`** |
| **O** | **Locality index** | Already built (`localityIndex`, `pages.js:550`), currently empty because no leaves exist. Populates itself the moment P4 lands. | `emitted` set | **YES — automatic** |

### 4.3 The cen-q4 vacuum — the sharpest single opportunity

Google itself flags **"Lipsesc: apartament"** on 3 of 9 results for
`certificat energetic apartament alba iulia`, and **only one page (C2, at #1) mentions apartments in
its snippet at all**. **Nobody in Alba Iulia holds a dedicated apartment page.** 5 of 11 cohort
pages segment by garsonieră / apartament / casă / vilă; we do not, anywhere.

There is **no property-type dimension in the generator** and creating one is a spec-level decision
outside this brief. The buildable approximation is sections **D + E + I** on the `alba-iulia` leaf,
carrying the apartment segmentation in the *acte*, the *auditor questions* and the *FAQ headings* —
never in a price table (§5). This is the direct `certificat-energetic` analogue of chair Flow 2
(`intabulare apartament Alba Iulia`, where we rank #4 with the wrong service page): same buyer, same
city, same moment.

---

## 5. BLOCKED BY POLICY

| Item | Cohort prevalence | Status |
|---|---|---|
| Turnaround claims — "24-48 ore", "48 de ore", "Livrare 24h", "1-4 zile", "în cel mai scurt timp" | **6/11 pages, 4 with a hard figure** | **BLOCKED — SOP §0.2, absolute.** Do not propose, hedge or paraphrase. |
| Duration as a column in the price table (C3) | 1/11 | **BLOCKED.** |
| Importing a competitor figure (120 / 250 / 275 / 300 / 350 / 400 / 450 / 500 lei) | 5/11 | **BLOCKED — inventing a new price figure (SOP §0.2).** |
| Per-property-type **price** table | 5/11 | **BLOCKED as new figures.** Per-property-type segmentation of **acte, auditor questions and FAQ** is **NOT** blocked — that is spec §4.1 D/E/I and gap #5. |
| Claiming an MDLPA *auditor energetic* attestation, or a number for one | 1/11 (C11: `UA01429 / 2010 - MDRT`, with photo) | **BLOCKED — CEO rulings 0.1 and 0.5. Never invent a number, never infer a credential.** CEO question required; note the ANCPI number would be the **wrong** credential, so chair B2 does not unblock this even when Aurel supplies it. |
| Exact ANCPI tariff | 0/11 — no ANCPI fee on this service | **BLOCKED, moot here.** |
| Discount hooks ("REDUCERE 20%", phone-capture-for-discount, C4) | 2/11 | Not policy-blocked. **Recommend against** — dark pattern. |
| Word count as a target | — | **Not blocked, but do not action.** The #1 result on two of four queries is a **90-word** page. |

### Our own live text — three items for the chair, not gaps to fill

1. **`hubIntro`: "vă asigurăm certificatul rapid, de regulă în aceeași săptămână"** —
   duration claim about a third-party partner auditor. **VIOLATION. Remove (P0).**
2. **`metaDescription`: "eliberare rapidă"** — ⚠️ **new, not previously reported.** No figure, so it
   is closer to C10's *"în cel mai scurt timp"* than to a hard claim — but it is a speed claim and it
   **renders on the SERP face**, which is precisely where the rule bites hardest. **Chair call;
   recommend removal.**
3. **`process[1]`: "durează sub o oră"** — duration, but about **our own** site visit, not a third
   party. Structurally the same as the explicitly-approved *"răspundem de obicei în aceeași zi
   lucrătoare"*. **Borderline — chair call.**

Plus the armed landmine: **`faqPool[2].a` "De regulă câteva zile de la vizita de releveu"** — a
third-party duration claim, authored, currently unrendered, and shipped to 93 pages by *either*
remedy in this spec. **P0.**

### The price-rule conflict — resolved for this spec

The extraction agent escalated a conflict between its brief ("never display prices") and SOP §0.2
("hedged ranges are ALLOWED and live on 1,526 pages — do not remove; proposing removal is itself an
anti-pattern"). **This spec proposes no new price display and no removal.** `priceRange:
"150 – 500 lei, orientativ, în funcție de imobil"` stays exactly as it is until the chair rules.
Every competitor figure in this document is recorded as intelligence only.

---

## 6. GAPS — ranked, confidence-tagged (SOP Step 5)

| # | Conf. | Impact | Gap | Evidence |
|---|---|---|---|---|
| 1 | **HIGH** | moves-rankings | **No page exists for any of the four queries.** `hubOnly: true` → 1 page vs 93 for the identically-shaped `intabulare-apartament`. | 6 of 8 cohort operators hold a per-town URL; **3 hold a dedicated `/aiud`**. Absent from 4/4 SERPs incl. home town. Mechanically checkable. |
| 2 | **HIGH** | table-stakes | **The hub FAQ block is dead code on all 12 service hubs** — `buildServiceHub()` reads `service.hubFaq`, which no service defines; the content lives in `faqPool`. 5 authored answers render nowhere. | `pages.js:531`; `grep -rn hubFaq generator/` → 2 hits, both in `pages.js`. All 12 hubs: `<details>` = 0. 3/11 cohort pages have an on-page FAQ; the two deepest rank #1 and #2. |
| 3 | **HIGH** | table-stakes | **Reversing `hubOnly` as-is would publish "documentația se depune la BCPI" on 92 pages** — false for this service. | `pages.js:356-372`. Hard blocker on gap #1. ⚠️ new. |
| 4 | **HIGH** | table-stakes | **Live forbidden duration claim** in `hubIntro`, plus an armed one in `faqPool[2]` and a speed claim in `metaDescription`. | §5. A defect to remove, not a gap to fill. |
| 5 | **MEDIUM** | moves-rankings | **The page targeting Alba Iulia queries never says "Alba Iulia."** 0 occurrences in 17,712 bytes. | Every cohort page ranking on cen-q2/q4 has it in the H1. C1 names 7 Alba localities in 90 words and is #1 on two queries. |
| 6 | **MEDIUM** | moves-rankings | **No property-type segmentation.** | 5/11 segment by garsonieră/apartament/casă/vilă. cen-q4 is a **documented vacuum** — Google flags *"Lipsesc: apartament"* on 3/9 and only #1 mentions apartments in its snippet. |
| 7 | **MEDIUM** | moves-rankings | **The `<title>` advertises the wrong credential** — *"Topograf autorizat ANCPI"* on an energy-certificate query. | 11/11 cohort providers present as auditor energetic; **0/11** pair the two credentials. Remedy is constrained (§5) but not blocked. |
| 8 | **MEDIUM** | table-stakes | **`acte necesare` is 3 items and undifferentiated.** | Cohort median 6 among the 5 that have one. C2 splits by property type under buyer-self-selecting H3s. We omit: year of construction, heating system, insulation/tâmplărie, previous bills, renovation history, C11's releveu escape hatch. |
| 9 | **MEDIUM** | table-stakes | **No heading is phrased as a question.** | C9's four H3s are the buyer's four questions in order; ours are feature labels ("Acte necesare (orientativ)", "Cum decurge procesul"). |
| 10 | **LOW** | table-stakes | **Energy-class A+→G explanation absent.** | Only **1/11** has it, so **not a consensus item** — a differentiator. Cheap: the authored answer already exists in `faqPool[3]`. |
| 11 | **LOW** | table-stakes | **Named practitioner.** | 2/11 (Groza ×2). **Not actionable** — the cohort's credential is an MDLPA auditor attestation, not the ANCPI number chair B2 is waiting on. CEO question; do not infer. |
| 12 | **LOW** | table-stakes | **Word count 183 vs cohort median ~1,200.** | Explicitly downgraded per SOP Step 5: **the #1 result on two of four queries is a 90-word page.** Correlational. Do not action as a target. |

### NOT gaps — where we already beat the cohort. Do not "fix" these.

- **JSON-LD: 6 types vs 0 across all 11 competitors.** Nobody in this vertical has any structured
  data. Do not let anyone reduce it; the §2.1 fix *adds* FAQPage on top.
- **Process steps: 4 vs cohort's 3–6.** At or above cohort.
- **WhatsApp: 6 links; only 4/11 competitors have any.** The house rule is also a competitive edge.
- **Price transparency: at parity** (5/11 exact, ours hedged, their disclaimer wording matches ours).
- **Countable proof: "25+ ani", "1052+ proiecte" vs 3/11 having any.** Above cohort. (Chair B6 drops
  "2681+ colaborări" separately.)
- **Per-locality depth.** Every cohort `/aiud` page is ~5% locality-specific — a title swap and one
  sentence, one with a photo captioned *"auditor energetic cluj"*, another with a **Mediaș** address
  on an *Alba Iulia* page. Our generator already emits real distance, real BCPI office and real
  neighbouring villages. **Reversing `hubOnly` is not copying their doorways — it is doing the thing
  they only simulate.** That is the strongest argument for gap #1.

---

## 7. DATA REQUIRED FROM GENERATOR

### Exists today and feeds the spec directly

| Field | File | Feeds |
|---|---|---|
| `loc.name`, `loc.type`, `loc.slug`, `loc.county`, `loc.countySlug` | `localities/alba.json` | A, C |
| `loc.villages[]` (78/78 Alba localities populated) | `localities/alba.json` | C |
| `loc.lat` / `loc.lon`, `loc.distanceKmFromAiud` | `localities/alba.json` | A, C |
| `loc.ocpiOffice{name,address}` | `localities/alba.json` | data-gate slot only — **suppress from render** for this service (§2.2) |
| `loc.localNote`, `loc.profile`, `loc.nearby`, `loc.matrix` | `localities/alba.json` | C, gates |
| `service.documents[]` (3 strings) | `services.json` | D — needs reshaping |
| `service.process[]` (4 strings) | `services.json` | F |
| `service.priceRange`, `site.priceDisclaimer` | `services.json` / `site.json` | H — unchanged |
| `service.faqPool[]` (5 entries) | `services.json` | B, G, I |
| `service.hubIntro`, `service.metaDescription` | `services.json` | L, M |
| `faqDetails()` / `schema.faqPage()` | `lib/pages.js`, `lib/schema.js` | I, K — already wired |
| `localityIndex` builder | `pages.js:550` | O — auto-populates |

### Missing — must be added before the work can ship

| Field | Where | Blocks |
|---|---|---|
| **`service.introVariants[]`** — 8–10 profile-tagged entries | `services.json` | P2 / gap #1. Without it `pickIntroVariant()` returns `null` and the leaf intro loses its largest page-exclusive sentence. |
| **`hubFaq` → `faqPool` fallback** in `buildServiceHub()` | `lib/pages.js:531` | gap #2, all 12 hubs |
| **Service-aware branch** suppressing/replacing `ocpiBlock`, the intro BCPI sentence and `countyNoteBlock` | `lib/pages.js:356-372`, `:399` | gap #3 — hard blocker on gap #1 |
| **Property-type-segmented `documents`** — `{apartament:[], casa:[]}` or a parallel array + a renderer | `services.json` + `lib/pages.js` | D / gap #6, #8 |
| **`service.auditorQuestions[]`** — what the auditor will ask | `services.json` | E |
| **`faqPool` 5 → 10** | `services.json` | I — **needs chair carve-out from D13** (P3) |
| **`loc.serviceNotes{}`** (chair D5, approved, ~15 lines in `pages.js`) | `localities/*.json` + `lib/pages.js` | not required for this service, but it is what would let the Alba Iulia energy page and the Alba Iulia apartment page differ |

### Not required

`service.priceTable` — the hub renderer supports it (`pages.js:518-524`) but populating it for this
service is **BLOCKED** (new price figures, §5). `service.h1` — optional, defaults to `service.name`.

---

## 8. ROUTING DEFECT

**YES — and of the worst class on the site.**

`FINDING-cannibalization.md` documents *wrong page served*: Cut for a county query, Doștat for
`plan topografic Alba Iulia`, the house page for an apartment query. For `certificat-energetic`
**`servedPage` and `correctPage` cannot differ, because neither exists.** `hubOnly: true` yields one
national page; the correct page for cen-q2, cen-q3 and cen-q4 has never been built.

Useful counter-evidence recorded along the way: **the cohort exhibits our own defect at a fraction
of our page count.** `certificat-energetic.net` ranks on the *Aiud* query with its *Alba Iulia* page
(cen-q3 #8), and `certificatenergetic.net` ranks on the *Aiud* query with its *Alba county* page
(cen-q3 #4). Wrong-page selection is what Google does when **nobody** holds the right page — it is
not caused by having many pages. That weakens any argument that our cannibalization is a
consequence of page count, and strengthens the case for building the missing inventory.

**Order of work, per the chair:** routing first (§3), content second (§4). Sections A–O are worth
nothing until a page exists to carry them.

---

## 9. METHOD LIMITS

- Cohort **n = 11** pages / 8 operators. 12 URLs attempted; `cabinet-particular.ro/harta-audit-energetic`
  returned HTTP 404 (cen-q3 #7) and is excluded. All denominators are 11. Shortfall recorded per SOP Step 3.
- Two operators run multi-domain networks: **Cristian Groza** holds 3 of 9 slots on
  `certificat energetic aiud` across two domains; the `certificatenergetic.net` operator holds both
  organic #1 and a map-pack slot on the same phone. Treat "8 operators" as the real competitive
  count, not 11.
- Competitor word counts and section inventories are WebFetch-extractor estimates. Our own figures
  (183 content words, 17,712 bytes, 0 `<details>`, 0 "Alba Iulia", 3 "Aiud", 7 "apartament") are
  byte-exact.
- **cen-q1's map pack is not addressable by page content** (SOP §3, chair D11). All three entries are
  exact-match keyword GBP names in a **"Birou de audit"** category; two hold a slot with **zero
  reviews**, so reviews are not the binding constraint here. Ours is a cadastre/topography category.
  **GBP question for Dan, not a content item.**
- **This is correlational (SOP §7).** Six of seven cen-q1 providers hold exact-match domains — a
  factor no on-page work touches. Nothing here promises a position.
- **Measurement gate 2026-08-19 (GSC).** For this service the first metric is simply whether **any**
  of our URLs appears at all.
