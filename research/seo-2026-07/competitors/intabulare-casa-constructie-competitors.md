# Competitor extraction — `intabulare-casa-constructie`

**Date 2026-07-29 · SOP-serp-research.md Steps 3–6 · source SERP:
`research/seo-2026-07/serp/intabulare-casa-constructie-serp.md` (4 queries, complete, no gaps).**

Method: WebFetch only, no browser. Deduped by URL across the 4 queries. Directories and
marketplaces skipped entirely per SOP §3 Step 3. Competitor prices and durations are recorded as
**intelligence about what the customer has already been told** — SOP §0.2 forbids publishing ours.

---

## 0. COHORT — read this before any number below

| Query | Organic results | Third-party surveyor pages | Our pages | Non-surveyor |
|---|---|---|---|---|
| casa-q1 `intabulare casa alba` | 9 | **0** | 2 (#2 Întregalde, #9 Alba Iulia) | 7/9 |
| casa-q2 `intabulare casa alba iulia` | 9 | **1** (cadastrumartin.ro #4) | 1 (#2 Alba Iulia) | 7/9 |
| casa-q3 `intabulare casa aiud` | 9 | **0** | 1 (#4, wrong service) | 8/9 |
| casa-q4 `cadastru casa aiud` | 9 | **0** | 1 (#8, wrong locality + service) | 8/9 |
| **TOTAL** | **36** | **1** | **5** | **30 (83%)** |

### ⚠ SHORTFALL — recorded per SOP §3 Step 3, mandatory to state
**The surveyor cohort for this service is N = 1.** Across 36 organic results on four queries there
is exactly **one** third-party surveyor page: `cadastrumartin.ro`. Three of four SERPs contain
**zero**. The SOP floor is 3 per query; it is unreachable here. **Not padded with directories.**

**Consequence, stated plainly: no consensus can be computed for this service.** Every "N of N
surveyors do X" claim in this document is therefore N = 1 or N = 2 and carries at most MEDIUM
confidence, never HIGH by unanimity. Any downstream agent that treats a single page as a pattern
is misreading this file.

To give the cohort any comparative value at all, one **out-of-cohort reference** was fetched:
`cadastrumaxim.ro` — the strongest local surveyor in the vertical (Alba Iulia map pack, 4.9/39
reviews, per `CAPTURES-2026-07-29.md` F3), which ranks organically on the adjacent
`cadastru si intabulare Alba Iulia` and `intabulare teren Alba Iulia` SERPs but **not** on any of
the four `casă` queries. It is flagged `outOfCohort: true` and **is excluded from every consensus
count**. It is here as intelligence about the local competitor, not as a ranking data point for
this service.

The three **national informational blogs** that rank on casa-q1 are likewise recorded separately
(`pageType: blog`). They are not surveyors and are not imitable — but they hold three of nine slots
on our county query, so what they answer is the demand signal.

---

## 1. SURVEYOR COHORT (N = 1)

### 1.1 cadastrumartin.ro — the only third-party surveyor on any of the four SERPs

```json
{
  "url": "https://cadastrumartin.ro/",
  "domain": "cadastrumartin.ro",
  "pageType": "surveyor",
  "rankedFor": [{"queryId": "casa-q2", "rank": 4}],
  "wordCount": 375,
  "headingOutline": [
    {"level": 1, "text": "Birou Cadastru Martin"},
    {"level": 2, "text": "Bun venit!"},
    {"level": 2, "text": "Ati facut alegerea perfecta"},
    {"level": 2, "text": "Peste 9 ani de experienta"},
    {"level": 2, "text": "O echipa tanara de specialisti"},
    {"level": 2, "text": "Dotari si echipamente de ultima generatie"},
    {"level": 2, "text": "Despre noi"},
    {"level": 2, "text": "Actualizare date imobil si plan topo-cadastral"},
    {"level": 2, "text": "Lucrari de prima inscriere (Intabulare)"},
    {"level": 2, "text": "Lucrari speciale de topografie"},
    {"level": 3, "text": "Acte necesare"}
  ],
  "sectionsPresent": ["Despre noi", "Servicii (3 categorii)", "Acte necesare", "Legislatie",
                      "Portofoliu", "Galerie foto", "Contact"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "",
  "durationClaim": "",
  "acteNecesare": {"present": true, "itemCount": 7},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": true,
                   "phoneVisible": false, "whatsapp": false},
  "ctaStyle": "none — no button, no form, no visible phone on the landing content; contact is a nav item",
  "localSpecificity": "generic",
  "whatTheyDoBetter": [
    "Names the individual professional: «Inginer Dipl. Martin Nicolae». We name nobody.",
    "«Peste 9 ani de experienta» is attached to a person; our «25+ ani» floats free of any name.",
    "Has a Portofoliu and a Galerie foto — visual proof of executed work. We have none.",
    "«Acte necesare» is a standing site section, not a per-page sub-block — it reads as a reference resource."
  ],
  "whatWeDoBetter": [
    "375 words vs our 831–894 in the gated region alone.",
    "No FAQ at all; we ship 4–6 <details> Q&A per page plus FAQPage JSON-LD.",
    "No process steps; we ship 5 numbered steps ending in the extras de CF.",
    "No price of any kind; we publish an approved hedged range (1.000–2.500 lei) plus disclaimer.",
    "No schema markup at all; we ship LocalBusiness + Service + BreadcrumbList + FAQPage.",
    "No phone, no WhatsApp on the page; we ship 5 tel: and 6 WhatsApp links.",
    "Local specificity is «Alba Iulia / judetul Alba» and nothing more — no street, no BCPI office, no villages.",
    "Its «acte necesare» list is a menu of SERVICE TYPES (alipire, SCA, notare constructie), not documents the client must bring. Ours is an actual document checklist."
  ]
}
```

**The single most important line in this whole file:** Google itself printed **«Lipsesc: casa»**
against this result — cadastrumartin ranks #4 for `intabulare casa alba iulia` **without the word
"casă" on the page.** It ranks on domain age and authority, not on topical match. A 375-word
homepage with no FAQ, no steps, no price, no phone and no schema sits two positions below us.

**This is the finding that should govern the whole service: on the `casă` SERPs, content depth is
not the binding constraint. We already out-build the only surveyor present, on every measurable
axis, and we already beat it. What we lose is not to competitors — it is to ourselves.**

---

### 1.2 OUT-OF-COHORT REFERENCE — cadastrumaxim.ro (`outOfCohort: true`, excluded from consensus)

Did **not** rank on any of the four `casă` queries. Included only because it is the strongest local
surveyor entity in the vertical and the CEO benefits from knowing what it does.

```json
{
  "url": "https://cadastrumaxim.ro/",
  "domain": "cadastrumaxim.ro",
  "pageType": "surveyor",
  "outOfCohort": true,
  "rankedFor": [],
  "adjacentSerpEvidence": "cadastru si intabulare Alba Iulia #2; intabulare teren Alba Iulia #3; map pack 4,9 (39 reviews) — CAPTURES-2026-07-29.md F3",
  "wordCount": 1300,
  "headingOutline": [
    {"level": 1, "text": "CADASTRU ALBA - TOPOGRAF MAXIM EMANUEL - BIROU CADASTRU MAXIM"},
    {"level": 2, "text": "Lucrari - Servicii"},
    {"level": 2, "text": "Extras de Carte Funciara | Extras CF Online | Servicii Topocadastrale Online"},
    {"level": 2, "text": "Informare Clienti"},
    {"level": 2, "text": "Localizare pe Harta"},
    {"level": 2, "text": "Contact"},
    {"level": 2, "text": "Carte de Vizita Online"},
    {"level": 2, "text": "Contacteaza-ne"},
    {"level": 2, "text": "Noutati!"}
  ],
  "sectionsPresent": ["Lucrari - Servicii (17 servicii)", "Extras CF online", "Informare Clienti",
                      "Localizare pe Harta", "Contact", "Noutati", "Calendar", "Meteo", "Vizitatori"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "«Costurile se calculeaza in functie de specificul lucrarii» + «Beneficiati automat de 10% reducere la orice tip de lucrare» (web-visitor discount)",
  "durationClaim": "«servicii de calitate efectuate in timp scurt la preturi avantajoase» — vague, no figure",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": true,
                   "reviews": false, "yearsExperience": false, "portfolio": true,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "«Contactati!» link · «Sunati la: 0775 617 204» · «VA RUGAM SA VA PROGRAMATI APELAND: 0775 617 204» · document handover by email · «Comanda acum» → extrasecf.ro",
  "localSpecificity": "named-places",
  "whatTheyDoBetter": [
    "Named AND photographed: «Ing. Emanuel MAXIM», multiple labelled photos. Face + name is the strongest trust asset in the set and we have neither.",
    "Human wayfinding: «Loc. Alba Iulia, Str. Septimius Severus, Nr. 55» plus «In spatele Stadionului Municipal, langa sediul FC Unirea, pe strada cu OCPI Alba si Directia Agricola». They tell you how to find the door.",
    "An offer, not just a service: «10% reducere» for web visitors — a conversion device we have no equivalent of.",
    "«Predarea documentelor se poate face si online» — remote-service reassurance.",
    "An online extras-CF ordering funnel (extrasecf.ro) capturing the highest-frequency, lowest-value query in the vertical."
  ],
  "whatWeDoBetter": [
    "No acte necesare, no process steps, no FAQ, no schema.",
    "Local specificity is one address; ours is 5 BCPI offices with street addresses, 78 UATs and their component villages.",
    "No WhatsApp — contact is a phone call in office hours. Our WhatsApp-first funnel is a genuine differentiator on evening/mobile searches."
  ],
  "note": "Their office at Str. Septimius Severus nr. 55 is four doors from BCPI Alba Iulia at nr. 59. This is the proximity moat behind F4 and it is not attackable with page content."
}
```

---

## 2. NON-SURVEYOR PAGES THAT ACTUALLY OUTRANK OR FLANK US

Not part of the cohort. Not to be imitated. Recorded because they hold real estate on our county
query and they define the answer slot we are barred from entering.

### 2.1 startimob.ro — `/intabulare-casa` · casa-q1 #8 · `pageType: blog`

- **~2,800 words.** Title verbatim: **«Intabulare casa: Ce este, cat costa si cat dureaza?»**
- 15 headings, structured as: what it is → which real rights → when/why → acte → **cost** →
  **duration normal** → **urgency regime** → factors that extend it → conclusion.
- **priceValues (INTELLIGENCE ONLY):** `0,15% din valoarea imobilului` (persoane fizice, min 60
  lei/imobil) · `0,5%` (persoane juridice) · `120 lei/imobil` înscriere · urgency = `4 ori
  valoarea tarifului normal, plafonat la maximum 5.000 lei` · `două timbre fiscale … 4 lei`.
- **durationClaim (INTELLIGENCE ONLY):** `7 zile lucrătoare` soluționare · apartamente
  `aproximativ 30 de zile` · intravilan `30-60 de zile` · extravilan fără plan `1-3 luni` ·
  urgență `2 zile lucrătoare` · certificat `aproximativ 2-3 zile lucrătoare`.
- acteNecesare: 4 categories. processSteps: **absent**. faq: **absent**.
- Trust: legal citations (`Legea 7/1996 republicată`, `art. 885 Cod Civil`, `Ordinul nr.
  1764/2019`), bylined author with photo (Radu Popa). CTA is a newsletter form + phone
  `0733.092.093`, Brașov address.
- **localSpecificity: none for Alba** — it is a Brașov agency page ranking on an Alba query.

### 2.2 lovedeco.ro — `/acte-necesare-intabulare-casa-veche` · casa-q1 #4 · `pageType: blog`

- ~2,200 words. Headings: `Lista actelor necesare pentru intabularea unei case vechi` →
  `Procedura pentru intabularea unei locuințe vechi` → `De ce este importantă intabularea`.
- **acteNecesare: 8 items**, the most complete list in the set: actul de proprietate ·
  cererea-tip de înscriere · documentația cadastrală · certificatul fiscal · actele de identitate ·
  extrasul de CF pentru informare · declarații notariale/înscrisuri suplimentare · dovada plății.
- **durationClaim (INTELLIGENCE ONLY):** `în mod obișnuit, în 15 sau 30 de zile lucrătoare`;
  `rezultatul poate fi obținut chiar în câteva zile` (urgență).
- priceDisclosure: **none**. faq: absent. CTA: **absent** — pure editorial.
- Author byline `Victor Arvunescu`, dated `06 septembrie 2025`, cites `Legea nr. 7/1996`.
- **The exact query this page owns is the one our page is titled for: the OLD house without an
  authorization.** We answer it in one FAQ line; they give it 2,200 words.

### 2.3 casebinefacute.ro — `/informatii-utile/cum-se-intabuleaza-o-casa-nou-construita` · casa-q1 #3 · `pageType: blog`

- ~1,200 words. **9 numbered steps** spanning the whole build lifecycle: certificat de urbanism →
  proiectare → autorizație de construcție → construcția efectivă → **Recepția la Terminarea
  Lucrărilor** → certificat de urbanism pentru intabulare → depunere OCPI → plata taxelor →
  înregistrarea proprietății.
- ~12 documents named across sections.
- **priceValues (INTELLIGENCE ONLY):** recepție `de la câteva sute la câteva mii de lei` ·
  certificat de urbanism `poate fi în jur de 100-300 de lei` · taxe cadastrale și de intabulare
  `pot ajunge de la câteva sute la câteva mii de lei`.
- **durationClaim (INTELLIGENCE ONLY):** `Procesul de înregistrare poate dura de la câteva zile la
  câteva săptămâni`.
- Author: first name only («Alexandru»); phone `0745 844 973`; București office.
  CTA: «Vă invit să ne contactați. Vă costă doar o vizită la biroul nostru din București».
- **They own the NEW-BUILD half of the intent** — the recepție-to-CF chain — which is precisely the
  other half of our service name («casă / construcție»).

### 2.4 Directory/marketplace intelligence (skipped as pages, kept as intelligence)

| Source | Where | What it tells the customer |
|---|---|---|
| brig.ro `/Cadastru` | casa-q3 #6, casa-q4 #4 | FAQ built **entirely** of price/duration questions: «Cât costă intabularea unui apartament în 2026?» · «Cât durează procesul de intabulare?» · «Câți profesioniști de cadastru sunt activi în Aiud?» · «Cat costa cadastru?» Snippet quotes `336-2.100 RON` for Aiud. |
| notariate.ro `/calculator-taxe-notariale/intabulare` | casa-q1 #7, casa-q2 #9 | An **interactive fee calculator**, rated 4,9 (187). Ranks on 2 of 4 queries. |
| necesit.ro | casa-q1 #5, casa-q2 #1, casa-q3 #5, casa-q4 #9 | «Top 20 firme… 2026» listicles; per-provider profiles. Prior session: intabulare apartament `560–810 lei`. |
| intabulari24.ro | 5 slots across the 4 queries | «Top 10/20 experti…» — the single most persistent domain in this service's SERPs. |
| aiud.ro (government) | casa-q3 #3, casa-q4 #3 | PNCCF systematic-registration notice. Ranks on **both** Aiud queries. |
| facebook.com — Birou Cadastru Aiud, Molnar Aurelian-Marian | casa-q3 #1, casa-q4 #1 | **A Facebook page outranks every website on both Aiud queries.** «Ing. Molnar Aurelian-Marian», 210+ persoane interesate, 5,0 (5 reviews). |

**BLOCKED BY POLICY (SOP §0.2), stated explicitly so nobody re-proposes it:** the cost/duration
answer slot is contested by a blog (startimob), a marketplace calculator (notariate.ro) and a
directory FAQ (brig.ro) — three different result types converging on the same two questions. **We
may not publish an exact ANCPI tariff and we may not publish any turnaround or duration claim.**
Our existing hedged range and the standing `priceDisclaimer` are approved and stay. Nothing in this
document proposes entering that slot.

---

## 3. STEP 4 — OUR PAGES, SCORED ON THE IDENTICAL SCHEMA

Read from the built HTML on 2026-07-29. `wordCount` = words in the gated region between
`<!--content:start-->` and `<!--content:end-->`, so it excludes nav/footer and is directly
comparable to the "main content" counts above.

### 3.1 `alba/alba-iulia` — the page that SHOULD win, and the page that wins only on casa-q2

```json
{
  "url": "https://expert-intabulare.ro/servicii/intabulare-casa-constructie/alba/alba-iulia.html",
  "file": "docs/servicii/intabulare-casa-constructie/alba/alba-iulia.html",
  "domain": "expert-intabulare.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "casa-q2", "rank": 2}, {"queryId": "casa-q1", "rank": 9}],
  "role": "servedPage AND correctPage on casa-q2 · servedPage (#9) but OUTRANKED BY OUR OWN VILLAGE PAGE on casa-q1",
  "wordCount": 831,
  "bytes": 27567,
  "headingOutline": [
    {"level": 1, "text": "Intabulare casă / construcție în Alba Iulia (Alba)"},
    {"level": 2, "text": "Unde se depune dosarul"},
    {"level": 2, "text": "Despre lucrări în Alba Iulia"},
    {"level": 2, "text": "Acte necesare (orientativ)"},
    {"level": 2, "text": "Cum decurge procesul"},
    {"level": 2, "text": "Particularități OCPI în județul Alba"},
    {"level": 2, "text": "Întrebări frecvente — intabulare casă / construcție în Alba Iulia"},
    {"level": 2, "text": "Contact rapid"},
    {"level": 2, "text": "Alte servicii în Alba Iulia"},
    {"level": 2, "text": "Intabulare casă / construcție în localități apropiate"},
    {"level": 2, "text": "Vezi și"},
    {"level": 2, "text": "Ai o situație asemănătoare?"}
  ],
  "questionsAnswered": [
    "Ce pățesc dacă vând casa fără să fie înscrisă în cartea funciară?",
    "Banca îmi cere înscrierea casei pentru credit. Vă încadrați în termen?",
    "Am demolat o construcție veche. Trebuie făcut ceva în cartea funciară?",
    "Cât durează intabularea unei case în Alba Iulia?"
  ],
  "priceDisclosure": "range",
  "priceValues": "«Preț orientativ: 1.000 – 2.500 lei, orientativ, în funcție de construcție și acte.» + standing priceDisclaimer",
  "durationClaim": "NO NUMBER — «soluționarea la BCPI Alba Iulia urmează termenele obișnuite, care se pot scurta cu taxă de urgență». Policy-compliant.",
  "acteNecesare": {"present": true, "itemCount": 5},
  "processSteps": {"present": true, "stepCount": 5},
  "faq": {"present": true, "questionCount": 4},
  "schemaTypes": ["LocalBusiness", "PostalAddress", "GeoCoordinates", "BreadcrumbList",
                  "ListItem", "Service", "AdministrativeArea", "FAQPage", "Question", "Answer"],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": false,
                   "phoneVisible": true, "whatsapp": true},
  "ctaStyle": "WhatsApp-first — «Scrie-ne pe WhatsApp 0741 478 540», 6 WhatsApp links + 5 tel: links, «Disponibili Luni-Vineri, între 9:00 - 17:00»",
  "localSpecificity": "deep",
  "metaDescription": "Intabulare casă / construcție în Alba Iulia: acte, pași, prețuri orientative. Topograf autorizat ANCPI, aprox. 39 km de Aiud. Tel. 0741 478 540.",
  "internalInlinks": 21
}
```

### 3.2 `alba/intregalde` — the page Google puts SEVEN POSITIONS ABOVE it on casa-q1

Same template. Differences that matter, all measured:

| Axis | Alba Iulia | **Întregalde** | Aiud |
|---|---|---|---|
| Gated words | **831 (lowest)** | **892** | 894 |
| FAQ `<details>` | **4 (fewest)** | **6 (most)** | 5 |
| Cost FAQ («Cât costă intabularea unei construcții?») | **absent** | **present** | **absent** |
| Duration FAQ (hedged, no number) | present | present | **absent** |
| «lei» occurrences | 1 | **3** | 1 |
| Component villages named | 4 (Bărăbanț, Micești, Oarda, Pâclișa) | **11** | — |
| Locality-keyword mentions | Alba Iulia ×34 | Întregalde-cluster | Aiud ×42 |
| Internal inlinks (files) | **21** | **19** | **20** |
| JSON-LD Question/Answer pairs | 4 | 6 | 5 |
| Acte necesare items | 5 | 5 | 5 |
| Process steps | 5 | 5 | 5 |
| Price range | 1.000–2.500 lei | 1.000–2.500 lei | 1.000–2.500 lei |
| Meta distance clause | «aprox. 39 km de Aiud» | «aprox. 32 km de Aiud» | «birou chiar în Aiud» ✅ |

Întregalde's `localNote` is also materially richer prose — it names the Trascău gorges, the
floarea de colț, the Găldița valley road, and makes a concrete capability claim («măsurăm cu stație
totală acolo unde semnalul GPS este slab, indiferent de pantă sau pădure»). Alba Iulia's names the
Vauban citadel and the A10 — tourism facts, not survey-work facts.

**Read the table as a whole: on every axis where the two pages differ, the village page is the
richer one, and Google ranked the village page seven positions higher on the same SERP.** That is
not proof of causation (SOP §7), but it is the only mechanism visible in the data, and it points at
the opposite of the intuitive fix. The Alba Iulia page is the weakest page in its own cluster.

### 3.3 `alba/aiud` (casă) — the correct page for casa-q3 and casa-q4, served for NEITHER

```json
{
  "file": "docs/servicii/intabulare-casa-constructie/alba/aiud.html",
  "role": "correctPage for casa-q3 and casa-q4 — Google serves a different page on both",
  "wordCount": 894, "faq": {"present": true, "questionCount": 5},
  "questionsAnswered": ["Am recepția făcută. Mai trebuie ceva?",
    "Ce pățesc dacă vând casa fără să fie înscrisă în cartea funciară?",
    "Casa e veche și nu are autorizație de construire. Se poate intabula?",
    "Casa depășește puțin limita terenului. Ce se întâmplă?",
    "Am demolat o construcție veche. Trebuie făcut ceva în cartea funciară?"],
  "priceDisclosure": "range", "priceValues": "1.000 – 2.500 lei (in «Cum decurge procesul» only, NOT as an FAQ)",
  "durationClaim": "none on this page",
  "metaDescription": "…Topograf autorizat ANCPI, birou chiar în Aiud. Tel. 0741 478 540.",
  "internalInlinks": 20,
  "note": "The 12.1 self-distance bug is FIXED in the current build — this meta now reads «birou chiar în Aiud», not «aprox. 2 km de Aiud». The captured SERP snippet is stale."
}
```

### 3.4 The two pages Google actually serves instead — `servedPage` vs `correctPage`

| Query | servedPage | correctPage | Defect |
|---|---|---|---|
| casa-q1 | `intabulare-casa-constructie/alba/intregalde.html` (#2) | service×county hub `/servicii/intabulare-casa-constructie/alba/` — **DOES NOT EXIST** (chair W1); of existing pages, `…/alba-iulia.html` | **YES** — wrong locality; and our correct-ish page is on the same SERP at #9 |
| casa-q2 | `…/alba/alba-iulia.html` (#2) | same | **no** |
| casa-q3 | `intabulare-teren/alba/aiud.html` (#4) | `intabulare-casa-constructie/alba/aiud.html` | **YES** — wrong service |
| casa-q4 | `cadastru-si-intabulare/alba/noslac.html` (#8) | `intabulare-casa-constructie/alba/aiud.html` | **YES** — wrong locality **and** wrong service |

**Scored: `intabulare-teren/alba/aiud.html` (served on casa-q3).** 908 gated words — **more than
all three casă pages** — 6 FAQ including both a cost FAQ («Cât costă intabularea unui teren
agricol?») and a duration FAQ, and «Aiud» ×49 vs ×42 on the casă/Aiud page. **The page Google
serves for a house query is measurably the stronger page on every axis except topical match.**
Google is not making an arbitrary choice; it is choosing the strongest Aiud page in the site, and
that page happens to be about land. This is the mechanical case for chair ruling D5
(`loc.serviceNotes{}`) — the two pages share all locality data and cannot differ.

**Scored: `cadastru-si-intabulare/alba/noslac.html` (served on casa-q4).** 888 words, «Aiud» ×18 —
entirely from the BCPI Aiud office block, since Noșlac is in the BCPI Aiud catchment. The snippet
Google chose is the office sentence itself. Confirms the office-name-matching mechanism in the SERP
capture: every leaf in a catchment reads as a page about that office's town.

### 3.5 County-level — `docs/zone/alba/index.html`

```json
{
  "file": "docs/zone/alba/index.html", "role": "the only county-level page that exists",
  "bytes": 108545, "wordCount": 3956,
  "title": "Cadastru și topografie în județul Alba | Fleser Aurel Expert",
  "headingOutline": [{"level":1,"text":"Cadastru și topografie în județul Alba"},
    {"level":2,"text":"OCPI Alba"}, {"level":2,"text":"Contact rapid"},
    {"level":2,"text":"Alte județe"}, {"level":2,"text":"Localități din județul Alba"},
    {"level":2,"text":"Ai o situație asemănătoare?"}],
  "faq": {"present": false, "questionCount": 0},
  "priceDisclosure": "none", "priceValues": "«lei» appears 0 times",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "schemaTypes": ["LocalBusiness","PostalAddress","GeoCoordinates","BreadcrumbList","ListItem"],
  "rankedFor": [],
  "verdict": "SERVICE-AGNOSTIC. It is a locality index for all 12 services at once. It has no acte, no steps, no price, no FAQ and no Service schema — it cannot compete for «intabulare casa alba» and it did not appear on any of the four SERPs."
}
```

**Also scored: the national service hub `docs/servicii/intabulare-casa-constructie/index.html`** —
1,012 words, 42 KB, has acte + steps + price, **0 FAQ**, no FAQPage schema, and links all 78 Alba
leaves in a flat A–Z list with **bare locality anchor text** (`Abrud`, `Aiud`, `Alba Iulia`, …).
It did not rank on any of the four queries. Breadcrumb is
`Acasă → Intabulare casă / construcție → Județul Alba (/zone/alba/) → <leaf>` — so the leaf's
declared parent for the county step is the **service-agnostic** county hub. There is no
service×county node anywhere in the hierarchy.

---

## 4. STEP 5 — GAP ANALYSIS, confidence-tagged

Confidence ceiling is MEDIUM for anything derived from the surveyor cohort, because N = 1 (§0).

1. **[HIGH][moves-rankings] Our own pages are the competitive set; there is no third-party
   surveyor to beat.** 1 surveyor page in 36 results; on casa-q1 both #2 and #9 are ours. Mechanical
   and checkable. **Everything else in this list is subordinate to this.**
2. **[HIGH][moves-rankings] No service×county node exists for the county query.** casa-q1 is a
   county query; the only county page (`/zone/alba/`) is service-agnostic, has no FAQ/acte/steps/
   price and did not rank, so Google substituted a commune leaf. Directly confirms chair W1.
   Additional constraint from the capture: Google's related block offers *Bucharest* and
   *Cluj-Napoca* variants for `intabulare casa alba`, i.e. it partly reads "casa alba" as a noun
   phrase — **the hub must lean on «județul Alba» and named Alba localities, never the bare token
   «alba».**
3. **[MEDIUM][moves-rankings] The Alba Iulia page is the weakest page in its own cluster on every
   differing axis** (831 words vs 892/894; 4 FAQ vs 6/5; no cost FAQ; 4 villages vs 11; flat
   inlinks 21/19/20). Mechanically checkable; the causal link to the 7-position gap is a
   hypothesis for 2026-08-19.
4. **[MEDIUM][moves-rankings] Internal link equity is flat by measurement, not by impression** —
   21 / 19 / 20 files linking to alba-iulia / întregalde / aiud, and hub anchor text is the bare
   locality name. Confirms chair W3(a) and W3(c) with numbers.
5. **[MEDIUM][table-stakes] Nobody in the cohort publishes an ANCPI authorization number — but
   2 of 2 surveyors name the individual professional.** cadastrumartin = «Inginer Dipl. Martin
   Nicolae»; cadastrumaxim = «Ing. Emanuel MAXIM» **with photographs**. We publish «Topograf
   autorizat ANCPI, 25+ ani de experiență» attached to no human being. **The number is not table
   stakes; the NAME is** — and the name needs no CEO input, unlike chair item B2 which is blocked
   on the authorization number. This reframes B2: ship the name now, add the number when Aurel
   supplies it.
6. **[MEDIUM][table-stakes] 2 of 2 surveyors show executed work (Portofoliu / Galerie foto);
   we show none.** No photos, no case notes, no gallery on any page.
7. **[LOW][table-stakes] Word count.** Blogs run 1,200–2,800 words and the one surveyor runs 375;
   we sit at 831–894 and outrank the surveyor. Length plainly does not order this SERP.
   Correlational only — do not act on it.
8. **[MEDIUM][table-stakes] Old-house and new-build intents are each owned by a dedicated blog.**
   lovedeco (2,200 words, 8-item acte list) owns *casa veche fără autorizație*; casebinefacute
   (9 lifecycle steps) owns *recepția la terminarea lucrărilor*. We answer each in a single FAQ
   line. Our page title covers both («casă / construcție») and our body separates neither.
9. **[LOW][table-stakes] cadastrumaxim converts with a named offer («10% reducere») and
   door-finding directions.** We have neither. Conversion-side only; not measurable in GSC.
10. **BLOCKED BY POLICY (SOP §0.2) — not actioned, recorded as intelligence only:** every
    exact tariff and every turnaround figure in §2 (startimob 0,15% / 120 lei / 7 zile lucrătoare /
    2 zile urgență / plafon 5.000 lei; lovedeco 15–30 zile lucrătoare; casebinefacute 100–300 lei;
    brig.ro 336–2.100 RON). **Our approved hedged range 1.000–2.500 lei + `priceDisclaimer` stays
    exactly as it is on all three pages.** Nothing here proposes changing it in either direction.
11. **[note, not a gap] A Facebook page outranks every website on both Aiud queries**
    (Molnar Aurelian-Marian, #1 on casa-q3 and casa-q4). Not addressable with page content.
    Recorded for the CEO alongside the F3 review-count item.

---

## 5. STEP 6 — CONTENT SPEC

## `intabulare-casa-constructie` — county / city / town

- **Target queries:** casa-q1 `intabulare casa alba` (county) · casa-q2 `intabulare casa alba iulia`
  (city) · casa-q3 `intabulare casa aiud` (town) · casa-q4 `cadastru casa aiud` (town).
- **Our current position / page served / page that should be served:**
  #2+#9 → Întregalde + Alba Iulia / hub (missing) · #2 → Alba Iulia / correct · #4 →
  `intabulare-teren/alba/aiud` / casă-Aiud · #8 → `cadastru-si-intabulare/alba/noslac` / casă-Aiud.
- **Surveyor cohort analysed (N):** **1** (cadastrumartin.ro) + 1 out-of-cohort reference
  (cadastrumaxim.ro). **Shortfall recorded — SOP floor of 3/query unreachable on all 4 queries.**
- **Aggregator share:** 7/9 · 7/9 · 8/9 · 8/9 → **30/36 non-surveyor (83%)**.

### CONTENT SPEC — what the pages must contain

**A. Service×county hub `/servicii/intabulare-casa-constructie/alba/` (chair W1 — highest priority)**

- **Section: H1 + lead** — purpose: claim the county intent unambiguously. Must use
  **«județul Alba»**, never the bare «alba» (query-ambiguity finding, casa-q1 related block).
  Data source: `services.json` + county record.
- **Section: «Acte necesare (orientativ)»** — the 5-item checklist already in the template, plus the
  two branches the blogs own: *construcție autorizată* (autorizație + proces-verbal de recepție) vs
  *casă veche fără autorizație* (certificat de atestare a existenței construcției). Source: existing
  `services.json` acte list; branch labels already present in the leaf copy.
- **Section: «Cum decurge procesul»** — the existing 5 steps. Source: existing template.
- **Section: «Unde se depune dosarul — cele 5 birouri»** — all five BCPI offices with street
  addresses and which UATs each serves. **This is the block chair ruling D4 says belongs on hubs and
  never on leaves**, and casa-q4 supplies a second, independent reason: on leaves it makes every
  page in a catchment look like a page about that office's town. Source: existing BCPI office data.
- **Section: «Orașe principale»** above the A–Z list — Alba Iulia, Aiud, Sebeș, Blaj, Cugir,
  Ocna Mureș, Teiuș, Zlatna, Abrud, Câmpeni, Baia de Arieș. Anchor text must be
  **«Intabulare casă / construcție în <Localitate>»**, not «<Localitate>» (chair W3a/W3c;
  measured today as bare names on the national hub).
- **Section: FAQ** — the hub currently has **zero**. Must carry the full question set including
  the cost question in its approved hedged form. Source: existing `faqPool` entries, **selected not
  resized** (SOP §4.8 / D13).
- **Section: «Cine vine la măsurătoare»** — named individual. See D below.
- Price: the existing approved hedged range + `priceDisclaimer`. **No duration, no ANCPI tariff.**

**B. `alba/alba-iulia` — bring the city page up to its own village's level**

- **FAQ count 4 → 6**, adding the two the village page already has and the city page lacks:
  «Cât costă intabularea unei construcții?» (approved hedged answer, already live verbatim on
  Întregalde) and «Terenul nu este intabulat. Pot înscrie doar casa?». Source: existing `faqPool`
  — **selection change only, no pool resize.**
- **`localNote` rewrite** — replace the Vauban-citadel/A10 tourism prose with survey-work substance
  of the kind Întregalde already has: the Micești/Oarda/Pâclișa expansion and what it means for
  boundary work, and the fact that BCPI Alba Iulia is in the city itself. Data source:
  `localities/alba.json` `localNote` for alba-iulia. **Must be genuinely per-locality prose**, not a
  frame with the name swapped (SOP §6, gate residual risk).
- **Component villages 4 → the full aparținătoare list** if more exist in the data. Source:
  `localities/alba.json` `villages`.
- **Meta description** — drop «aprox. 39 km de Aiud», put BCPI Alba Iulia in its place (chair D1).
  Head region, outside the gate, zero demotion risk.
- **Do NOT lengthen for length's sake** — gap 7 is LOW confidence and the only surveyor on the
  SERP has 375 words.

**C. `alba/aiud` (casă) vs `intabulare-teren/alba/aiud` — force them apart (chair D5)**

- The casă/Aiud page needs `serviceNotes` prose that the land page structurally cannot contain:
  recepția la terminarea lucrărilor, certificatul de atestare from Primăria Aiud, înscrierea
  construcției pe CF-ul terenului. Source: **new** `loc.serviceNotes["intabulare-casa-constructie"]`.
- Add the cost FAQ (absent on casă/Aiud, **present on the land page** — which is one measurable
  reason the land page reads as the more complete Aiud answer).
- Keep «birou chiar în Aiud» in the meta — the 12.1 fix is live and correct.

**D. All pages — the named human (revises chair B2, unblocks it)**

- Both surveyors in the set name the individual; **neither publishes an ANCPI number.** So ship
  **«Aurel Fleser, inginer topograf autorizat ANCPI»** now, in the existing «Contact rapid» block,
  and leave the marked slot for seria/numărul/categoria per CEO ruling 0.1. Constant across all
  ~222 pages of the service ⇒ ≥50% document frequency ⇒ **boilerplate ⇒ dropped before overlap is
  measured ⇒ gate-safe** (SOP §5).

### DATA REQUIRED FROM GENERATOR

| Field | Status |
|---|---|
| `services.json` acte / steps / price range / `priceDisclaimer` | **exists** — reuse, do not invent |
| `localities/alba.json` `localNote`, `villages`, `distanceKmFromAiud`, `ocpiOffice` | **exists** |
| `faqPool` entries incl. cost + «terenul nu este intabulat» | **exists** — change SELECTION only; **pool resize banned** (D13) |
| BCPI office name + street address per UAT | **exists** (rendered on every leaf today) |
| `loc.serviceNotes { "<service-slug>": "<prose>" }` | **MISSING** — chair D5, ~15 lines in `pages.js`; blocks spec C |
| Service×county hub route + template | **MISSING** — chair W1; blocks spec A entirely |
| Named-surveyor string + ANCPI slot | **MISSING** as data; string is available, number is not (CEO Q1) |
| Portfolio / photo assets | **MISSING** and out of scope — chair D14 defers the photo past 2026-08-19 |

### BLOCKED BY POLICY

Every price and duration figure in §2 and §2.4. We do not publish an exact ANCPI tariff and we do
not publish any turnaround claim. The approved hedged range (1.000–2.500 lei) and the standing
`priceDisclaimer` are **kept exactly as they are** — proposing to remove them is itself an
anti-pattern (SOP §6).

### ROUTING DEFECT

**YES — on 3 of 4 queries, and this service supplies the cleanest evidence in the whole
programme.** casa-q1 is the first captured SERP on which **two of our own pages appear
simultaneously and Google ranks the near-empty commune seven positions above the county seat.**
Earlier instances (Cut, Doștat, Ohaba, Berghin, Șibot, Noșlac) showed only the wrong page, so
"the right page would have ranked higher" was an inference. Here it is a direct observation.
casa-q3 adds wrong-service, casa-q4 adds wrong-locality-and-wrong-service in one result.

---

## 6. WHAT THIS DOES NOT ESTABLISH (SOP §7)

- **N = 1.** There is no surveyor consensus for this service and this document does not claim one.
- That Întregalde's extra 61 words, 2 extra FAQ and 7 extra villages **cause** its 7-position
  advantage is a **hypothesis**. It is the only mechanism visible in the data; it is not proof.
- cadastrumartin ranks #4 without the target keyword on the page. Domain authority is doing work
  here that no on-page change touches.
- The captured SERP snippets are already **stale in one respect**: the 12.1 self-distance meta is
  fixed in the current build. Anything read from a snippet must be re-checked against the build.
- Verified at the 2026-08-19 Search Console gate, per chair §5: position per query, **which URL is
  served per query**, index coverage, map-pack position vs review count.
