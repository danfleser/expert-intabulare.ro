# Competitor extraction — `expertize-documentatii`

**Date 2026-07-29 · SOP-serp-research.md Steps 3–4 · source SERP: `research/seo-2026-07/serp/expertize-documentatii-serp.md`**

Method: `WebFetch` in parallel, no browser. Deduped by URL across the four queries. Directories and
marketplaces skipped entirely per SOP Step 2/3. Prices and durations below are recorded as
**intelligence about competitors** — what the customer has already been told. We publish none of
ours beyond what ruling 0.2 already permits.

The source SERP capture is **complete** — all four queries (exp-q1 … exp-q4), map pack, organic
top 10, related searches, PAA and our position all present. Nothing was invented and no browser
was used.

---

## 0. Cohort construction and shortfalls

| Query | Organic slots | Directory / marketplace | Other (social, blog, legal) | 3rd-party surveyor | Ours |
|---|---|---|---|---|---|
| exp-q1 `expertiza topografica alba` | 9 | 5 | 0 | **4** | 0 |
| exp-q2 `expertiza topografica alba iulia` | 9 | 6 | 0 | **3** | 0 |
| exp-q3 `expertiza topografica aiud` | 9 | 4 | 2 (Facebook) | **1** | **2 (#3, #9)** |
| exp-q4 `granituire teren alba` | 9 | 0 | 9 (5 law blogs, 2 legislation, 1 forum, 1 case-law) | **0** | 0 |
| **Total** | **36** | **15 (42%)** | **11** | **8 slots / 5 distinct domains** | **2** |

**Surveyor cohort analysed: 5 distinct third-party domains.** All five fetched successfully
(`gistopocad.3x.ro` has no HTTPS listener — `ECONNREFUSED :443` — and was retrieved over plain
HTTP, HTTP 200, 44,644 bytes).

**Three shortfalls, recorded rather than padded:**

1. **exp-q3 yields exactly ONE third-party surveyor** (`experttehnicjudiciar.com`), below the Step 3
   minimum of 3. Google itself flags it *"Lipsesc: aiud"*. Not padded with the 4 directories or the
   2 Facebook pages.
2. **exp-q4 yields ZERO surveyors.** Step 3 cannot run on it. The capture's reclassification of
   exp-q4 as `informational` is upheld here — 5 law-firm articles, 2 legislation databases, 1 legal
   forum, 1 court decision, zero commercial service results of any kind. Per SOP §2 it does not
   proceed past step 4.
3. **CRITICAL COHORT QUALIFIER — 4 of the 5 rank with a general homepage.** Not one surveyor in Alba
   has a dedicated *expertiză topografică* service page. The consensus below therefore describes
   **four general-purpose cadastre homepages plus one out-of-county judicial-expertise homepage**,
   not five expertise pages. Do not treat these as models for a service page; treat them as evidence
   that the intent is undefended.

---

## 1. Extracted competitor pages (SOP Step 3 schema)

### 1.1 pdproiectsurveyor.ro

```json
{
  "url": "https://pdproiectsurveyor.ro", "domain": "pdproiectsurveyor.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "exp-q1", "rank": 1}, {"queryId": "exp-q2", "rank": 1}],
  "wordCount": 850,
  "headingOutline": [
    {"level": 1, "text": "Profesioniști în topografie, cadastru și GIS"},
    {"level": 2, "text": "P&D Proiect Surveyor SRL"},
    {"level": 2, "text": "Viziunea firmei noastre"},
    {"level": 2, "text": "Misiunea noastră"},
    {"level": 3, "text": "Serviciile noastre includ:"},
    {"level": 3, "text": "De ce să ne alegi pe noi?"},
    {"level": 2, "text": "Gamă variată"},
    {"level": 2, "text": "Câteva din proiectele noastre"},
    {"level": 2, "text": "Experiențele avute de cei ce au ales sa colaboreze cu noi"},
    {"level": 2, "text": "Navigare"}, {"level": 2, "text": "Contact Info"},
    {"level": 2, "text": "Informații legale"}
  ],
  "sectionsPresent": ["Bun venit la P&D Proiect Surveyor SRL", "Despre noi", "Ce oferim",
                      "Galerie", "Testimoniale", "Contact Info"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "none on the ranked page; a separate prices page is linked but not ranked",
  "durationClaim": "none",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": true, "yearsExperience": false, "portfolio": true,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "soft text link — \"Descoperă mai multe despre noi și ce putem face pentru tine\" / \"Vezi detalii\"; no hard CTA button",
  "localSpecificity": "generic",
  "whatTheyDoBetter": [
    "Six named testimonials with role attribution — the only social proof in the cohort",
    "Visible project gallery (\"Câteva din proiectele noastre\")",
    "Two phone numbers displayed twice: 0786 536 444 / 0761 126 184"
  ],
  "whatWeDoBetter": [
    "They never say the word 'expertiză' anywhere, yet hold #1 on both expertise queries",
    "No acte necesare, no process steps, no FAQ, no schema, no named surveyor, no authorization"
  ]
}
```

Address: *Mun. Alba Iulia, Str. Siretului, Nr. 31B, Jud. Alba.* Testimonial names (Ion Popescu,
Maria Ionescu, Andrei Vasilescu, Elena Dumitrescu, George Marin, Laura Popa) read as placeholder
copy, not verified clients — recorded as-is, not endorsed.

---

### 1.2 cadastrumaxim.ro

```json
{
  "url": "https://www.cadastrumaxim.ro", "domain": "cadastrumaxim.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "exp-q1", "rank": 2}, {"queryId": "exp-q2", "rank": 2}],
  "wordCount": 1300,
  "headingOutline": [
    {"level": 1, "text": "CADASTRU ALBA - TOPOGRAF MAXIM EMANUEL - BIROU CADASTRU MAXIM"},
    {"level": 2, "text": "Lucrari - Servicii"},
    {"level": 2, "text": "Extras de Carte Funciara | Extras CF Online | Servicii Topocadastrale Online"},
    {"level": 2, "text": "Informare Clienti"},
    {"level": 2, "text": "Localizare pe Harta"},
    {"level": 2, "text": "Contact"}, {"level": 2, "text": "Carte de Vizita Online"},
    {"level": 2, "text": "Contacteaza-ne"}, {"level": 2, "text": "Noutati!"},
    {"level": 2, "text": "Vizitatori Extern"}, {"level": 2, "text": "Meteo"},
    {"level": 2, "text": "Calendar"}, {"level": 2, "text": "Da-ne un Like!"}
  ],
  "sectionsPresent": ["Lucrari - Servicii", "Informare Clienti", "Localizare pe Harta",
                      "Contact", "Carte de Vizita Online", "Contacteaza-ne", "Noutati!"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "no figure; hedged as \"Costurile se calculeaza in functie de specificul lucrarii\"",
  "durationClaim": "NON-NUMERIC ONLY — \"servicii de calitate efectuate in timp scurt\"; \"rapiditate in solutionarea problemelor dumneavoastra\"; \"preluarea noilor comenzi se face cu programare prealabila\". No day count anywhere.",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": true,
                   "reviews": false, "yearsExperience": true, "portfolio": true,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "hard phone CTA, repeated — \"Sunati acum - 0775 617 204\"; \"VA RUGAM SA VA PROGRAMATI APELAND: 0775 617 204\"; \"Contactati-ne\"",
  "localSpecificity": "named-places",
  "whatTheyDoBetter": [
    "Names AND photographs the surveyor: \"Ing. Emanuel MAXIM\"",
    "Cites the governing regulation by number: \"Regulamentul la Ordin 600/2023 al Directorului General al ANCPI\" — the closest anyone in the cohort gets to an authorization proof",
    "Landmark-level local anchoring: \"In spatele Stadionului Municipal, langa sediul FC Unirea\", \"pe strada cu OCPI Alba si Directia Agricola\"",
    "Volume proof: \"Portofoliu vast!\", \"Mii de imobile intabulate\"",
    "Phone repeated 15+ times; strongest conversion pressure in the cohort",
    "Google surfaced its NAP block, not its service copy, as the answer on exp-q2"
  ],
  "whatWeDoBetter": [
    "Lists \"expertize Tehnice\" as a bare service line only — no expertise content whatsoever",
    "No FAQ, no schema, no acte necesare, no process steps, no WhatsApp",
    "Site furniture (Meteo, Calendar, Vizitatori Extern) dilutes the page badly"
  ]
}
```

Address: *Loc. Alba Iulia, Str. Septimius Severus, Nr. 55, Ap. 3, Judet Alba.* Phones 0775 617 204,
0766 216 570. Scope claim: *"raza Jud. Alba si in imprejurimi"*. GBP (from
`CAPTURES-2026-07-29.md`): 4.9 ★ / 39 reviews — the strongest review profile in the county.

---

### 1.3 gistopocad.3x.ro

```json
{
  "url": "http://gistopocad.3x.ro", "domain": "gistopocad.3x.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "exp-q1", "rank": 3}, {"queryId": "exp-q2", "rank": 3}],
  "wordCount": 307,
  "headingOutline": [
    {"level": 1, "text": "(no H1 — page title only: S.C. Gis Topocad S.R.L. Alba Iulia - Topografie, Cadastru)"},
    {"level": 2, "text": "Servicii GIS"},
    {"level": 2, "text": "Servicii cadastru si topografie:"}
  ],
  "sectionsPresent": ["Home", "Bine ati venit pe site-ul nostru!", "Servicii GIS",
                      "Servicii cadastru si topografie", "Contact"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "no figure — \"Preturile sunt calculate pentru fiecare proiect in parte, in functie de specificul lucrarii (geografia terenului, suprafata terenului, suprafata apartmentului). Pentru o evaluare a lucrarii Dvs va rugam sa ne contactati...\"",
  "durationClaim": "NON-NUMERIC ONLY — \"servicii profesionale, realizate rapid, eficient si la costuri avantajoase\"",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": false,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "passive — \"Pentru o evaluare a lucrarii Dvs va rugam sa ne contactati...\"; no button",
  "localSpecificity": "generic",
  "whatTheyDoBetter": [
    "The ONLY cohort page whose snippet carries an expertise claim in a service sense: \"Expert autorizat lucrari topografice\" — a standalone bolded line above the service list",
    "Authorization framed by the issuing body: \"echipa noastra de experti autorizati de Oficiul de Cadastru si Publicitate Imobiliara\"; \"respectand normele emise de Agentia Nationala de Cadastru si Publicitate Imobiliara\"",
    "Free consultation offer: \"consultanta gratuita in probleme legate de terenul, casa sau apartamentul Dvs\"",
    "Signals two acte-necesare resources exist (cadastru/intabulare; documentatie lucrari topografice) — as links, not content"
  ],
  "whatWeDoBetter": [
    "307 words TOTAL including navigation and footer — the thinnest page in the cohort, ranking #3 on both queries",
    "No H1, no HTTPS at all (port 443 refuses connections), free 3x.ro subdomain",
    "Zero expertise content despite the 'Expert autorizat' line; 'granituire', 'expertiza judiciara', 'uzucapiune' all absent"
  ]
}
```

Address: *Alba Iulia, Str. Detunata, Nr.22, Sc.B, Ap.3, Judetul Alba.* Named: *Director: Marius
Popescu.* Phones 0358106501, 0748.700.496, 0763.607.573. Scope: *"in toata Romania dar si in
strainatate"*.

> **This page is the single most useful datapoint in the extraction.** A 307-word, no-H1, HTTPS-less
> page on a free subdomain holds **#3 on both `expertiza topografica alba` and
> `expertiza topografica alba iulia`**. Whatever is ranking here, it is not page depth. Treat every
> depth-based recommendation for this service as LOW confidence accordingly.

---

### 1.4 cadastrumartin.ro

```json
{
  "url": "https://cadastrumartin.ro", "domain": "cadastrumartin.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "exp-q1", "rank": 5}],
  "wordCount": 850,
  "headingOutline": [
    {"level": 1, "text": "Birou Cadastru Martin"},
    {"level": 2, "text": "Servicii de topografie intabulare si cadastru in Alba Iulia, Judetul Alba"},
    {"level": 2, "text": "Bun venit!"},
    {"level": 2, "text": "Ati facut alegerea perfecta"},
    {"level": 2, "text": "Peste 9 ani de experienta"},
    {"level": 2, "text": "O echipa tanara de specialisti"},
    {"level": 2, "text": "Dotari si echipamente de ultima generatie"},
    {"level": 2, "text": "Despre noi"},
    {"level": 2, "text": "Actualizare date imobil si plan topo-cadastral"},
    {"level": 2, "text": "Lucrari de prima inscriere (Intabulare)"},
    {"level": 2, "text": "Lucrari speciale de topografie"},
    {"level": 2, "text": "Acte necesare"}
  ],
  "sectionsPresent": ["Bun venit!", "Ati facut alegerea perfecta", "Peste 9 ani de experienta",
                      "O echipa tanara de specialisti", "Dotari si echipamente de ultima generatie",
                      "Despre noi", "Acte necesare"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "none",
  "durationClaim": "none",
  "acteNecesare": {"present": true, "itemCount": 7},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": true,
                   "phoneVisible": false, "whatsapp": false},
  "ctaStyle": "navigational links only — \"Despre noi\", \"mai mult\", \"Contact\"; no phone on the ranked page",
  "localSpecificity": "generic",
  "whatTheyDoBetter": [
    "ONLY cohort member with an on-page acte-necesare structure — 7 document categories, by work type: SCHIMBAREA CATEG. DE FOLOSINTA; DOC. AUTORIZATIE DE CONSTRUIRE – PAC; DOC. SCOATERE DIN CIRCUITUL AGRICOL – SCA; NOTARE CONSTRUCTIE; ALIPIRE/DEZLIPIRE; PRIMA INSCRIERE EXTRAVILAN; PRIMA INSCRIERE INTRAVILAN/MODIF. LIMITA SI SUPRAFATA",
    "Explicit tenure headline: \"Peste 9 ani de experienta\"",
    "Names the surveyor: \"Inginer Dipl. Martin Nicolae\"; linked portfolio page",
    "H2 written as a geo-targeted service string: \"Servicii de topografie intabulare si cadastru in Alba Iulia, Judetul Alba\""
  ],
  "whatWeDoBetter": [
    "No phone number on the ranked page at all — worst conversion path in the cohort",
    "\"Lucrari speciale de topografie\" is the closest it comes to expertise; 'expertiza', 'granituire', 'judiciar', 'documentatii' all ABSENT",
    "No FAQ, no schema, no process steps"
  ]
}
```

---

### 1.5 experttehnicjudiciar.com — the only judicially-positioned result

```json
{
  "url": "https://www.experttehnicjudiciar.com", "domain": "experttehnicjudiciar.com",
  "pageType": "surveyor",
  "rankedFor": [{"queryId": "exp-q3", "rank": 6}],
  "wordCount": 1300,
  "headingOutline": [
    {"level": 1, "text": "Biroul de Expertize Topografice"},
    {"level": 2, "text": "Dotarile Biroului de Expertize Tehnice"},
    {"level": 2, "text": "De ce Biroul de Expertize Topografice?"},
    {"level": 2, "text": "Ce vă propunem:"},
    {"level": 2, "text": "Cum vă putem ajuta:"}
  ],
  "sectionsPresent": ["Bine ați venit la Biroul de Expertize Topografice",
                      "Dotarile Biroului de Expertize Tehnice",
                      "De ce Biroul de Expertize Topografice?", "Ce vă propunem:",
                      "Cum vă putem ajuta:", "Persoana de contact"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "none",
  "durationClaim": "NON-NUMERIC ONLY — \"Răspuns Rapid\" as a benefit bullet, no timeframe",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": false,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "very soft — \"Vă invităm să explorați site-ul nostru și să ne contactați pentru orice întrebare\"; \"Suntem aici pentru dumneavoastră\"; no button",
  "localSpecificity": "none",
  "whatTheyDoBetter": [
    "The ONLY page in the whole capture that owns the judicial framing, verbatim: \"Expertize tehnice judiciare si extrajudiciare in domeniul topografiei, cadastrului si geodeziei\"",
    "Explicitly separates the two products in navigation — \"Expertize Judiciare\" vs \"Expertize Extrajudiciare\" — described as \"expertize tehnice judiciare si extrajudiciare la instanțele de judecată din România\"",
    "Dual-credential positioning: \"specialiști autorizați de Ministerul Justiției si de Agentia National de Cadastru si Publicitate Imobiliara\", plus \"acreditare ANCPI categoria B\"",
    "Leads on \"valoare legală\" — the outcome a litigant actually buys",
    "Domain name IS the keyword"
  ],
  "whatWeDoBetter": [
    "Publishes NO authorization number for either credential — category and issuing body only",
    "Bucharest, Sector 4 (Str. Constantin Radulescu Motru Nr. 29). ZERO Alba/Aiud presence — Google flags it \"Lipsesc: aiud\"",
    "Names no court, no tribunal, no judecătorie",
    "\"granituire\" ABSENT and \"obiectivele expertizei\" ABSENT — it does not answer the one refinement Google's own related-search set surfaces",
    "Tenure claim is a weakness, not a strength: \"experienta ce începe în anul 2022\"",
    "No FAQ content, no schema, no acte necesare, no process steps, no WhatsApp"
  ]
}
```

Named: *ing. Dulgheriu Vlad.* Phone 0758534953.

---

## 2. Surveyor-cohort consensus (N = 5)

| Attribute | Cohort result |
|---|---|
| Dedicated *expertiză topografică* service page | **0 / 5** — 4 general homepages + 1 out-of-county expertise homepage |
| FAQ content on the ranked page | **0 / 5** (2 link to an FAQ page; neither ranks) |
| Any JSON-LD / schema.org markup | **0 / 5** |
| Price figure disclosed | **0 / 5** — all hedge "per project" |
| Numeric duration / turnaround claim | **0 / 5** — vague adverbs only |
| `Acte necesare` on the ranked page | **1 / 5** (cadastrumartin, 7 items) |
| Numbered process steps | **0 / 5** |
| Named individual surveyor | **4 / 5** (pdproiectsurveyor names none) |
| Photo of the surveyor | **1 / 5** (cadastrumaxim) |
| ANCPI authorization **number** | **0 / 5** — nobody publishes one |
| Years-of-experience claim | **3 / 5** (9 ani; "acumulata in timp"; "din anul 2022") |
| Phone visible on the ranked page | **4 / 5** |
| WhatsApp | **0 / 5** |
| Locality depth beyond own street address | **0 / 5** — none names a village |
| Word count | 307 / 850 / 850 / 1,300 / 1,300 |

---

## 3. SOP Step 4 — scoring OUR pages

### 3.1 Routing status

| Query | Our rank | `servedPage` | `correctPage` | Status |
|---|---|---|---|---|
| exp-q1 `expertiza topografica alba` | absent | — | service×county hub for Alba | **does not exist** |
| exp-q2 `expertiza topografica alba iulia` | absent | — | `docs/servicii/expertize-documentatii/alba/alba-iulia.html` | **does not exist** |
| exp-q3 `expertiza topografica aiud` | **#3** | `docs/servicii/intabulare-teren/alba/aiud.html` | `docs/servicii/expertize-documentatii/alba/aiud.html` | **ROUTING DEFECT — correct page never built** |
| exp-q3 `expertiza topografica aiud` | **#9** | `docs/servicii/plan-topografic/alba/rimetea.html` | same as above | **ROUTING DEFECT — wrong service AND wrong locality** |
| exp-q4 `granituire teren alba` | absent | — | not a service-page intent (`informational`) | out of scope per SOP §2 |

**Verified in the repo, first-hand:**

```
docs/servicii/expertize-documentatii/        →  index.html ONLY (18,221 bytes)
docs/servicii/expertize-documentatii/alba/   →  No such file or directory
generator/build.js:181                       →  if (s.hubOnly === true) continue;
generator/data/services.json                 →  "hubOnly": true  (expertize-documentatii)
```

This confirms the capture's **substitution-for-absence** failure mode as distinct from both modes in
`FINDING-cannibalization.md`: there, the correct page existed and Google declined to serve it; here
the correct page has never been built, so Google substitutes from a neighbouring service. **W1 hubs
and `serviceNotes` do not address this case** — there is nothing to differentiate.

### 3.2 Our best existing page — `docs/servicii/expertize-documentatii/index.html`

```json
{
  "url": "https://expert-intabulare.ro/servicii/expertize-documentatii/",
  "domain": "expert-intabulare.ro", "pageType": "surveyor",
  "rankedFor": [],
  "wordCount": 211,
  "headingOutline": [
    {"level": 1, "text": "Expertize și documentații"},
    {"level": 2, "text": "Acte necesare (orientativ)"},
    {"level": 2, "text": "Cum decurge procesul"},
    {"level": 2, "text": "Contact rapid"},
    {"level": 2, "text": "Servicii conexe"},
    {"level": 2, "text": "Ai o situație asemănătoare?"}
  ],
  "sectionsPresent": ["intro", "Acte necesare (orientativ)", "Cum decurge procesul",
                      "Preț orientativ", "Contact rapid", "Servicii conexe"],
  "questionsAnswered": [],
  "priceDisclosure": "range",
  "priceValues": "no figure by design — \"ofertă după analiza situației — fiecare caz este diferit\" + standing priceDisclaimer",
  "durationClaim": "none (correct per ruling 0.2)",
  "acteNecesare": {"present": true, "itemCount": 4},
  "processSteps": {"present": true, "stepCount": 5},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": ["LocalBusiness", "Service", "BreadcrumbList", "PostalAddress",
                  "GeoCoordinates", "AdministrativeArea", "ListItem"],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": true,
                   "phoneVisible": true, "whatsapp": true},
  "ctaStyle": "\"Scrie-ne pe WhatsApp\" + dialable 0741 478 540 (5× tel: links) + prefilled message \"Salut! Am nevoie de expertize și documentații.\"",
  "localSpecificity": "none",
  "whatWeDoBetter": [
    "5-step process — 0/5 competitors have one. Steps are genuinely expertise-specific: archive history, measuring relevant neighbouring parcels, cross-checking against old plans and OCPI records, defending conclusions in court",
    "4-item acte necesare including \"Încheierea de numire, pentru expertizele judiciare\" — nobody else mentions the court appointment document",
    "7 JSON-LD blocks vs 0 across the entire cohort",
    "WhatsApp with a prefilled message — 0/5 competitors have WhatsApp at all",
    "Intro names the actual case types: grănițuire, uzucapiune, revendicare, partaj, suprapuneri cadastrale, identificări după acte vechi",
    "Tenure and volume: \"peste 25 de ani de experiență și peste 1.000 de lucrări finalizate\" — beats every cohort claim (9 ani / 2022)"
  ],
  "whatTheyDoBetter": [
    "211 content words — the thinnest page in the six-way comparison bar gistopocad's 307-including-nav",
    "0 FAQ blocks and NO FAQPage schema, despite 6 authored FAQs sitting in the data",
    "localSpecificity: none — 'alba' appears 13× and 'aiud' 3×, ALL in the shared NAP/footer frame",
    "Zero locality links: the hub's localityIndex is empty because hubOnly ⇒ emitted set is empty",
    "No named individual on the page as the expert (business name only)",
    "No ANCPI authorization number (blocked — CEO question 1)"
  ]
}
```

### 3.3 The pages Google actually serves

| | `intabulare-teren/alba/aiud.html` (#3) | `plan-topografic/alba/rimetea.html` (#9) |
|---|---|---|
| Content-region words | 910 | 793 |
| Bytes | 28,753 | 27,561 |
| FAQ questions | 6 | 6 |
| Schema | + FAQPage, Question×6, Answer×6 | + FAQPage, Question×6, Answer×6 |
| `priceValues` | "900 – 2.500 lei, orientativ, în funcție de suprafață și acte" | "800 – 2.000 lei, orientativ, în funcție de suprafață și scop" |
| `durationClaim` | none | none |
| `localSpecificity` | **deep** — 18 in-county locality links, BCPI office, "Despre lucrări în Aiud" | **deep** — 16 locality links |
| `expertiz*` mentions | 4 | 2 |
| `grănițuire` mentions | 2 | **0** |
| `uzucapiune` / `instanță` | 0 / 2 | 0 / 0 |
| FAQ relevance to the query | **zero of 6** — APIA/arendă, duration, moștenire, vecini, registru agricol, cost | **zero of 6** — autorizație de construire, rețele, valabilitate, PUZ/PUD, curbe de nivel, cost |
| Meta description | "…birou chiar în Aiud." (current; Google shows a **stale** "aprox. 2 km de Aiud") | "…**aprox. 24 km de Aiud**." (current, not stale) |

**The served pages are both substantially better pages than our own hub** — 4× the words, real FAQ,
FAQPage schema, deep local specificity — they are simply about the wrong service. The #9 result is
worse still: a **comună** 24 km from Aiud serving an Aiud query, and its live meta description
advertises that distance to the searcher. Chair item W2's ~25 km threshold would **leave this clause
in place**, exactly as the capture warned.

### 3.4 Two unranked assets we already own

| Path | Bytes | Why it matters |
|---|---|---|
| `docs/teren-agricol/vecinul-a-mutat-hotarul.html` | 28,591 | Our strongest grănițuire asset: 13 `grănițuire` mentions, 6 FAQ blocks, sections "Cum se dovedește o deplasare de hotar", "Grănițuire sau revendicare?", "Ce probe cântăresc cu adevărat". **Did not rank on exp-q4** and is not linked from the expertize hub. |
| `docs/dictionar/expertiza-topografica-judiciara.html` | 19,336 | Titled exactly on the term. 0 FAQ blocks. Not linked from the expertize hub. |

Only **3 pages** in the entire 2,095-page site carry `expertiz` in the `<title>`, and the hub is not
connected to the other two.

---

## 4. The five sharpest differences

**1. The intent is undefended — and we are the only party with the content, thrown away.**
0 of 5 competitors have an expertise page; 4 rank with a general cadastre homepage; the 5th is a
Bucharest firm Google itself flags *"Lipsesc: aiud"*. We hold a dedicated hub, 6 authored expertise
FAQs, a dicționar entry and a 28.5 KB grănițuire article — more topical substance than all five
combined — and **rank on none of it**, because for this service the correct page is never built and
the hub renders 211 words. *(HIGH confidence, mechanically checkable; **moves rankings**.)*

**2. A concrete generator defect: 6 authored FAQs render on ZERO pages.**
`generator/lib/pages.js:530` reads `service.hubFaq`:

```js
let faqBlock = '';
let faqs = [];
if (service.hubFaq && service.hubFaq.length) { … }
…
if (faqs.length) jsonldExtra.push(schema.faqPage(faqs));
```

`faqPool` is consumed **only** at `pages.js:410`, inside the locality-page builder. Measured across
`generator/data/services.json`: **`hubFaq` count is 0 for all 12 services; `faqPool` is populated for
all 12.** For the 8 non-`hubOnly` services the pool still reaches their locality leaves. For the 4
`hubOnly` services it reaches nothing — `build.js:181` skips locality emission, so `pages.js:410`
never runs. Verified: `<details>` count is **0** on the `expertize-documentatii`, `servicii-ocpi` and
`certificat-energetic` hubs. **23 authored Q&A pairs are dead data site-wide, 6 of them ours here** —
including *"Ce este o expertiză topografică judiciară?"*, *"Aveți experiență cu procese de
grănițuire?"*, *"Pot folosi o expertiză extrajudiciară înainte de proces?"* and *"Lucrați cu
avocați?"*. Every one answers a question **0 of 5 competitors answer anywhere**, and the FAQPage
schema is likewise suppressed — against a cohort with **0/5 schema of any kind**.
*(HIGH confidence; **moves rankings**; no new copy required, the text already exists and is already
written in-register.)*

**3. Price and duration policy costs us NOTHING on this intent — uniquely among the 12 services.**
0 of 5 disclose a price; all hedge per-project in wording nearly identical to ours
(gistopocad: *"Preturile sunt calculate pentru fiecare proiect in parte"*; cadastrumaxim:
*"Costurile se calculeaza in functie de specificul lucrarii"*; ours: *"ofertă după analiza situației
— fiecare caz este diferit"*). 0 of 5 make a **numeric** duration claim — only *"in timp scurt"*,
*"rapiditate"*, *"Răspuns Rapid"*, *"realizate rapid"*. **The ruling-0.2 duration prohibition is a
non-issue here** because no competitor has set a duration expectation for the customer to carry in.
Recorded as **BLOCKED BY POLICY — zero competitive cost**. Do not propose a price or duration change
for this service; the existing `priceRange` is exactly cohort-standard and should be left alone.

**4. The ANCPI authorization number is uncontested, and the judicial dimension nearly so.**
**0 of 5 publish an authorization number.** The closest anyone gets is cadastrumaxim citing
*"Ordin 600/2023 al Directorului General al ANCPI"* and experttehnicjudiciar claiming
*"autorizați de Ministerul Justiției"* + *"acreditare ANCPI categoria B"* — credential **category**,
never a number. Meanwhile 4 of 5 name an individual (Ing. Emanuel MAXIM, Inginer Dipl. Martin
Nicolae, Marius Popescu, ing. Dulgheriu Vlad) and 1 photographs him, while our hub names only the
business. Only experttehnicjudiciar owns the judicial framing (*"Expertize tehnice judiciare si
extrajudiciare"*, judiciar vs extrajudiciar split, *"valoare legală"*) — from Bucharest, naming no
court, with tenure *"începe în anul 2022"* against our *"peste 25 de ani"*.
*(Named person: MEDIUM, **table stakes**. ANCPI number: HIGH value but **BLOCKED** pending CEO
question 1 — never invent one.)*

**5. Depth does not appear to be what is ranking here — hold recommendations accordingly.**
`gistopocad.3x.ro` holds **#3 on both exp-q1 and exp-q2** with **307 words including navigation and
footer**, no `<h1>`, no HTTPS listener at all, on a free `3x.ro` subdomain, and zero expertise
content beyond one line reading *"Expert autorizat lucrari topografice"*. Our two *served* pages
already carry 910 and 793 content words, 6 FAQs each and FAQPage schema — they lose the intent on
**topic**, not on depth. Correspondingly, the local-specificity gap runs the other way from the rest
of the site: **0 of 5 competitors name a single village**, our leaves link 16–18 localities each, and
our expertize hub names **zero** (its `localityIndex` is empty by construction, since `hubOnly`
leaves the `emitted` set empty). Note also that inbound-link counts do not differentiate: the
expertize hub is referenced by 2,058 pages and `intabulare-teren` by 2,057 — both purely via the
global nav dropdown, i.e. **no contextual link equity to either**.
*(Word count: **LOW** confidence, correlational only — length correlates with rank without causing
it. Topical routing: HIGH. Internal linking: MEDIUM.)*

---

## 5. Policy register

- **BLOCKED BY POLICY — ANCPI tariff:** not proposed. Nobody in the cohort publishes one either.
- **BLOCKED BY POLICY — turnaround/duration:** not proposed, and **zero competitive cost** (§4.3).
- **BLOCKED BY POLICY — ANCPI authorization number:** the highest-value uncontested trust signal
  available. Pending CEO question 1. **Never invent a seria/număr/categorie.**
- **NOT a gap — price:** our `priceRange` matches cohort behaviour exactly. Leave it alone. No new
  figure invented; ruling 0.2 permits only what is already in `generator/data/services.json`.
- **No PNCCF years, sector numbers, parcel counts or dates** appear anywhere above.
- exp-q4 `granituire teren alba` **reclassified `informational`** — 0/9 commercial results,
  0/9 surveyors. Does not proceed past step 4 per SOP §2. Its one salvageable refinement,
  *"obiective expertiza granituire"*, is `/ghid/` material (D6 precedent) and is flagged, not
  proposed. *"Cat dureaza un proces de granituire"* is blocked twice over — a duration claim, and a
  court's timetable. *"Cat costa actiunea de granituire"* is the cost of a lawsuit, not of our
  report; answering it would be legal-cost advice.
- **No page change is proposed for any map-pack position.** All four queries returned **no map pack
  at all** — this intent is pure organic, so our Aiud location costs us nothing here.
