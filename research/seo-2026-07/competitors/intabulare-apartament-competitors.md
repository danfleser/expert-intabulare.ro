# Competitor extraction — `intabulare-apartament`

**Date:** 2026-07-29 · **Agent:** competitor extractor, service `intabulare-apartament`
**Source SERP:** `research/seo-2026-07/serp/intabulare-apartament-serp.md` (4 queries, complete)
**Method:** SOP-serp-research.md §3 Step 2–3 (classify, then WebFetch the surveyor cohort only),
Step 4 (score our page on the identical schema), Step 5 (confidence-tagged gaps), Step 6 (spec).
**No browser used.** All competitor extraction via `WebFetch`, parallel, deduped by URL.

---

## 0. Cohort construction and shortfall record

Directories and marketplaces skipped entirely per SOP §3 Step 2 (necesit.ro, intabulari24.ro,
birou-cadastru.com, cadastru24.ro, firmecadastru.ro, expert24.ro, olx.ro, efunciara.ro,
birouri-cadastru.ro). Facebook pages classified `other` and skipped. `rivx.ro` and `eghiseul.ro`
classified `blog` and skipped. `aiud.ro` classified `government` and skipped.

| Query | Organic slots | Non-surveyor | Competitor surveyors | Shortfall vs 3-minimum |
|---|---|---|---|---|
| apt-q1 `intabulare apartament alba` | 9 | 8 | **0** | **YES — zero cohort** |
| apt-q2alt-pc `cadastru apartament alba iulia` | 9 | 7 | **2** | **YES — 2 of 3** |
| apt-q3-pc `intabulare apartament aiud` | 9 | 8 | **0** | **YES — zero cohort** |
| apt-q4-pc `cadastru apartament pret alba` | 9 | 5 | **4** | no |

**Aggregator / non-surveyor share across the service: 27 of 36 organic slots = 75%.**
Our own pages occupy 3 slots. Competing surveyor pages occupy 6 slots held by **5 unique URLs**.

**Surveyor cohort, deduped: 5 URLs. 4 extracted successfully, 1 unreachable.**

| # | URL | Ranked for | Geography | Extracted? |
|---|---|---|---|---|
| C1 | `cadastrumaxim.ro` (homepage) | apt-q2 #2, apt-q4 #3 | **Alba Iulia — local rival** | yes |
| C2 | `cadastrumartin.ro` (homepage) | apt-q2 #7 | **Alba Iulia — local rival** | yes |
| C3 | `e-cadastru.ro/preturi-cadastru-intabulare` | apt-q4 #4 | București / Ilfov | yes |
| C4 | `startcad.ro/cadastru-apartament-cost-durata` | apt-q4 #9 | Constanța | yes |
| C5 | `veritatopo.ro/preturi` | apt-q4 **#1** | București / Ilfov | **NO — HTTP 404** |

**C5 extraction failure, recorded honestly.** `veritatopo.ro/preturi` and `/preturi/` both returned
404 at extraction time (the URL ranked #1 in the capture hours earlier). The site's homepage shows
the price list is published as a **PDF** (`assets/files/Pret-cadastrusiintabulareTarifecadastru
Preturicadastru2026.pdf`); the PDF fetched but its content streams are FlateDecode-compressed and
were not decodable by the fetch tool. Only two facts survive, both from the SERP snippet in the
capture file and from the homepage: apartment/garsonieră **800 lei, 18 zile lucrătoare**; ANCPI-
authorized geodetic engineers claimed, phone 0723 961 469, scope București/Ilfov/Corbeanca, no named
individual, no schema.org. **C5 is counted in the cohort but contributes to no consensus claim.**

**The decisive structural fact.** On the two queries that name our actual service and our actual
towns — `intabulare apartament alba` and `intabulare apartament aiud` — the surveyor cohort is
**zero**. No competing surveyor website reaches the top 10. The only competitors are directories,
a Facebook page, and the Primărie. Both queries are winnable on content alone; the only thing
between us and the click is that Google serves the wrong page of ours.

---

## 1. Competitor extractions (SOP Step 3 schema)

### C1 — `cadastrumaxim.ro`

```json
{
  "url": "https://cadastrumaxim.ro", "domain": "cadastrumaxim.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "apt-q2alt-pc", "rank": 2}, {"queryId": "apt-q4-pc", "rank": 3}],
  "wordCount": 2800,
  "headingOutline": [
    {"level": 1, "text": "CADASTRU ALBA - TOPOGRAF MAXIM EMANUEL - BIROU CADASTRU MAXIM"},
    {"level": 2, "text": "Lucrari - Servicii"},
    {"level": 2, "text": "Extras de Carte Funciara | Extras CF Online | Servicii Topocadastrale Online"},
    {"level": 2, "text": "Informare Clienti"},
    {"level": 2, "text": "Localizare pe Harta"},
    {"level": 2, "text": "Contact"},
    {"level": 2, "text": "Carte de Vizita Online"},
    {"level": 2, "text": "Contacteaza-ne"},
    {"level": 2, "text": "Noutati!"},
    {"level": 2, "text": "Vizitatori Extern"}, {"level": 2, "text": "Meteo"},
    {"level": 2, "text": "Da-ne un Like!"}, {"level": 2, "text": "Calendar"}
  ],
  "sectionsPresent": ["lista servicii (26 items)", "despre noi", "contact/NAP", "harta",
                      "galerie foto (35 imagini)", "noutati", "portal extern ExtraseCF.ro",
                      "zona clienti (sistem BCM)"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "none — 'Costurile se calculeaza in functie de specificul lucrarii, de aceea este necesar sa ne contactati 0775 617 204 sau 0766 216 570!'",
  "durationClaim": "no number. Vague only: 'servicii de calitate efectuate in timp scurt', 'rapiditate in solutionarea problemelor', 'Promptitudine MAXIMA'",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": true,
                   "reviews": false, "yearsExperience": false, "portfolio": true,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "phone-first: 'Contactati-ne 0775 617 204 sau 0766 216 570'; button 'Contacteaza-ne!'; two e-mail addresses; external ordering portal ExtraseCF.ro; 'preluarea noilor comenzi se face cu programare prealabila'",
  "localSpecificity": "deep",
  "whatTheyDoBetter": [
    "Names the individual: 'Ing. Emanuel MAXIM', with photographs of him.",
    "Landmark-based address that beats a map: 'In spatele Stadionului Municipal, langa sediul FC Unirea, pe strada cu OCPI Alba' — proximity to OCPI stated as a selling point.",
    "35-image gallery: equipment, drone, 4x4 fleet, field work. Concrete proof of capability.",
    "Two phone numbers and two e-mail addresses; Google chose the raw NAP block as the snippet.",
    "Client-tracking system ('Sistem BCM' / 'Zona Clienti') and a separate branded portal for extras CF.",
    "26 enumerated service lines on one page."
  ],
  "whatWeDoBetter": [
    "No prices at all; ours are published as an orientative range.",
    "No acte necesare, no process steps, no FAQ — we have all three.",
    "No schema.org whatsoever; we ship Service + FAQPage + LocalBusiness + BreadcrumbList.",
    "Homepage only — no apartment-specific page anywhere.",
    "No WhatsApp."
  ]
}
```

### C2 — `cadastrumartin.ro`

```json
{
  "url": "https://cadastrumartin.ro", "domain": "cadastrumartin.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "apt-q2alt-pc", "rank": 7}],
  "wordCount": 600,
  "headingOutline": [
    {"level": 1, "text": "Birou Cadastru Martin"},
    {"level": 2, "text": "Servicii de topografie intabulare si cadastru in Alba Iulia, Judetul Alba"},
    {"level": 3, "text": "Bun venit!"},
    {"level": 3, "text": "Ati facut alegerea perfecta"},
    {"level": 3, "text": "Peste 9 ani de experienta"},
    {"level": 3, "text": "O echipa tanara de specialisti"},
    {"level": 3, "text": "Dotari si echipamente de ultima generatie"},
    {"level": 2, "text": "Despre noi"},
    {"level": 2, "text": "Actualizare date imobil si plan topo- cadastral"},
    {"level": 2, "text": "Lucrari de prima inscriere (Intabulare)"},
    {"level": 2, "text": "Lucrari speciale de topografie"},
    {"level": 3, "text": "Acte necesare"}
  ],
  "sectionsPresent": ["despre noi", "servicii (3 grupe)", "acte necesare", "legislatie",
                      "portofoliu", "galerie foto", "contact"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "none",
  "durationClaim": "none",
  "acteNecesare": {"present": true, "itemCount": 7,
    "items": ["Schimbarea categ. de folosinta", "Doc. autorizatie de construire – PAC",
              "Doc. scoatere din circuitul agricol – SCA", "Notare constructie",
              "Alipire/dezlipire", "Prima inscriere extravilan (intabulare)",
              "Prima inscriere intravilan/modif. limita si suprafata (intabulare)"],
    "note": "This is an acte-necesare list organised BY WORK TYPE, not by document. There is NO apartment line in it."},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": true,
                   "phoneVisible": false, "whatsapp": false},
  "ctaStyle": "weak — '[mai mult]' links into service detail pages and a '[Contact]' menu item. No button, no channel named on the landing view.",
  "localSpecificity": "named-places",
  "whatTheyDoBetter": [
    "'Peste 9 ani de experienta' as its own headline slide — experience is merchandised, not buried.",
    "H2 states the geography explicitly: 'Servicii de topografie intabulare si cadastru in Alba Iulia, Judetul Alba'.",
    "Names 'Inginer Dipl. Martin Nicolae'.",
    "Separate Portofoliu and Legislatie sections.",
    "Cites the technical reference system (GPS / Stereografic 1970) — a competence signal to an informed buyer."
  ],
  "whatWeDoBetter": [
    "~600 words total, against 819 in our gated region alone.",
    "No prices, no process steps, no FAQ, no schema.org.",
    "Phone not visible on the landing view; no WhatsApp.",
    "acte necesare list has no apartment entry at all.",
    "Zero apartment-specific content — and it still outranks the page Google served for us."
  ]
}
```

### C3 — `e-cadastru.ro/preturi-cadastru-intabulare`

```json
{
  "url": "https://e-cadastru.ro/preturi-cadastru-intabulare", "domain": "e-cadastru.ro",
  "pageType": "surveyor",
  "rankedFor": [{"queryId": "apt-q4-pc", "rank": 4}],
  "wordCount": 2800,
  "headingOutline": [
    {"level": 1, "text": "Prețuri Cadastru și Intabulare 2026: Costuri și Taxe OCPI Actualizate"},
    {"level": 2, "text": "Preturi cadastru si intabulare apartament"},
    {"level": 3, "text": "Acte necesare cadastru si intabulare apartament"},
    {"level": 2, "text": "Preturi cadastru si intabulare casa, teren"},
    {"level": 2, "text": "Taxe si termen de avizare OCPI pentru cadastru si intabulare teren, casa"},
    {"level": 2, "text": "Alipire terenuri, apartamente"},
    {"level": 2, "text": "TRASARE teren (intarusare)"},
    {"level": 2, "text": "MODIFICARE LIMITE PROPRIETATE"},
    {"level": 2, "text": "MODIFICARE SUPRAFATA TEREN"},
    {"level": 2, "text": "Actualizare / Rectificare cadastru"},
    {"level": 2, "text": "Cum platesc pentru cadastru si intabulare"},
    {"level": 2, "text": "Calculul tarifului in regim de urgenta la Oficiul de Cadastru si Publicitate Imobiliara"},
    {"level": 2, "text": "Cadastru, certificat mostenire, sentinte civile"},
    {"level": 2, "text": "Pret cadastru teren cu constructii sau cu mai multe nivele"}
  ],
  "sectionsPresent": ["pret apartament", "pret casa/teren", "taxe + termen OCPI", "alipire",
                      "trasare", "modificare limite", "modificare suprafata", "actualizare",
                      "modalitati de plata", "calcul regim de urgenta", "mostenire/sentinte",
                      "pret pe niveluri", "contact"],
  "questionsAnswered": [
    "Cum platesc pentru cadastru si intabulare",
    "Ce este intabularea? (linked out, not answered on page)",
    "Acte necesare cadastru si intabulare apartament (linked out)"
  ],
  "priceDisclosure": "exact",
  "priceValues": "APARTAMENT: garsonieră 800 lei (dacă are deja număr cadastral) + 75 lei taxă OCPI; 2 camere 900 lei; 3 camere 1.000 lei; 4 camere 1.200 lei; Legea 112/2000 de la 2.000 lei. CASĂ/TEREN: 1.800 lei + 120 lei taxă OCPI (teren cu construcție, teren intravilan, casă, P+1E, P+1E+M, extravilan); construcție nouă București/Ilfov 1.800 lei + 60 lei + 0,05% din valoare. ALIPIRE: terenuri 1.400 lei + 60 lei; apartamente 2.000 lei + 60 lei. TRASARE: 100 lei/punct (min 4), 75 lei/punct (min 10). MODIFICARE LIMITE 1.800 + 75; MODIFICARE SUPRAFAȚĂ 1.600 + 75; ACTUALIZARE apartament de la 800 + 75; RECTIFICARE de la 1.800 + 75. Releveu interior opțional +500 lei (până la 250 mp). +200 lei per nivel suplimentar. Regim de urgență +300 lei onorariu. Taxele OCPI se plătesc SEPARAT, direct la oficiu.",
  "durationClaim": "'termen de avizare 21 zile lucratoare in regim normal' / '7 zile in regim de urgenta' (casa, teren); alipire '9 zile lucratoare in regim normal' / '3 zile lucratoare in regim de urgenta'. Plus an explicit non-guarantee: 'Menționăm că nu putem garanta respectarea termenelor de avizare ale...' — often exceeded, especially OCPI Ilfov.",
  "acteNecesare": {"present": false, "itemCount": 0,
    "note": "Referenced twice by H3 and outbound link, never enumerated on the page itself."},
  "processSteps": {"present": true, "stepCount": 3,
    "note": "Implicit, unnumbered, inside the payment section: măsurători → depunere dosar OCPI → plata taxei separat."},
  "faq": {"present": false, "questionCount": 1},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": false,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "'Programeaza o lucrare' → tel:0757557627, repeated inline throughout; e-mail secondary; footer labels 'WhatsApp' but ships no link.",
  "localSpecificity": "named-places",
  "whatTheyDoBetter": [
    "Price ladder BY ROOM COUNT — garsonieră / 2 / 3 / 4 camere — the exact axis the buyer searches on.",
    "Separates the surveyor's fee from the OCPI tax explicitly, states the tax is fixed by law and paid direct to the office. Removes the customer's suspicion that the surveyor pockets it.",
    "Explains how the urgency tariff is computed rather than just charging it: 'tariful normal + de 5 ori tariful normal, dar nu mai mult de 5.000 lei'.",
    "States payment structure: apartments 100% at measurement, houses/land 50/50.",
    "Publishes a DISCLAIMER that OCPI misses its own deadlines — credibility through honesty about a third party.",
    "Datelined 'ianuarie 2026' so the price list reads as maintained.",
    "Claims 'Ing. Autorizat ANCPI Emilian Ion' in the footer."
  ],
  "whatWeDoBetter": [
    "No FAQ, no on-page acte necesare, no schema.org.",
    "București/Ilfov only — no Alba relevance; Google flagged 'Lipsesc: alba' on this result.",
    "Claims ANCPI authorization but publishes no number — same gap as ours.",
    "Labels WhatsApp in the footer and ships no working link; ours are live 6× per page."
  ]
}
```

### C4 — `startcad.ro/cadastru-apartament-cost-durata`

```json
{
  "url": "https://startcad.ro/cadastru-apartament-cost-durata", "domain": "startcad.ro",
  "pageType": "surveyor",
  "rankedFor": [{"queryId": "apt-q4-pc", "rank": 9}],
  "wordCount": 1200,
  "headingOutline": [
    {"level": 1, "text": "Cadastru apartament: costuri și durată pentru numărul camerelor"},
    {"level": 2, "text": "Cadastru: ce este și când ai nevoie de el"},
    {"level": 2, "text": "Cadastrul apartamentului în 4 pași"},
    {"level": 2, "text": "Ce costuri presupune o lucrare de cadastru"},
    {"level": 2, "text": "Cât durează să obții cadastrul și intabularea"},
    {"level": 2, "text": "Beneficiile colaborării cu o firmă de cadastru pentru apartamentul tău"}
  ],
  "sectionsPresent": ["banner ofertă pachet", "proces în 4 pași", "două tabele de preț",
                      "articole conexe", "carduri de ofertă (Pachet apartament, Pachet trasare teren)"],
  "questionsAnswered": [
    "Cadastru: ce este și când ai nevoie de el",
    "Ce costuri presupune o lucrare de cadastru",
    "Cât durează să obții cadastrul și intabularea"
  ],
  "priceDisclosure": "exact",
  "priceValues": "CADASTRU: Garsonieră 500 lei · 2 camere 500 lei · 3 camere 600 lei · 4 camere 650 lei. PACHET (cadastru + intabulare + certificat energetic): Garsonieră 650 · 2 camere 650 · 3 camere 750 · 4 camere 800 lei. Taxele instituțiilor colaboratoare NU sunt incluse: 'se mai percep și alte taxe de către instituțiile colaboratoare'.",
  "durationClaim": "'în maximum 3 zile lucrătoare de la semnarea contractului, măsurătorile vor fi gata'; apoi 'o perioadă de aproximativ 30-50 de zile' pentru cadastru + intabulare; hedged with 'durata precizată este doar estimativă'.",
  "acteNecesare": {"present": false, "itemCount": 0,
    "note": "Mentioned only in prose — 'actele de proprietate', 'acte trebuie legalizate', 'alte acte trebuie obținute'. Never itemised."},
  "processSteps": {"present": true, "stepCount": 4,
    "steps": ["Identificarea amplasamentului apartamentului și documentarea tehnică și juridică",
              "Execuția măsurătorilor și lucrărilor la fața locului",
              "Întocmirea documentațiilor", "Depunerea actelor la OCPI"]},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": false,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "'Vezi detalii' → bundled-offer page; tel:+40731897041 three times; 'contactează-ne cu încredere'.",
  "localSpecificity": "named-places",
  "whatTheyDoBetter": [
    "The URL, the H1 and two H2s are the customer's two literal questions — cost and durată — indexed as headings, not buried in an accordion.",
    "Segments by room count in the H1 itself: 'pentru numărul camerelor'.",
    "Named 4-step process with descriptive step names, not verbs.",
    "Bundles cadastru + intabulare + certificat energetic as one priced package — cross-sells a second of our own 12 services inside the price table.",
    "Second-person, informal register ('apartamentul tău', 'contactează-ne') — matches how the query is typed."
  ],
  "whatWeDoBetter": [
    "Constanța only; no Alba relevance.",
    "No acte necesare list, no FAQ, no schema.org, no named person, no authorization claim.",
    "Explicitly entry-level on apartment technicalities — no releveu, no cotă-parte indiviză, no apartamentare. Our page carries all three concepts.",
    "No WhatsApp."
  ]
}
```

### C5 — `veritatopo.ro/preturi` — NOT EXTRACTED

```json
{
  "url": "https://veritatopo.ro/preturi", "domain": "veritatopo.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "apt-q4-pc", "rank": 1}],
  "extractionStatus": "FAILED — HTTP 404 on /preturi and /preturi/ at extraction time; price list is published as a FlateDecode-compressed PDF that did not decode",
  "priceDisclosure": "exact (per SERP snippet only)",
  "priceValues": "Cadastru + intabulare apartament / garsonieră: 800 lei (SERP snippet, unverified on-page)",
  "durationClaim": "18 zile lucrătoare (SERP snippet, unverified on-page)",
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "phoneVisible": true,
                   "note": "'ingineri geodezi autorizati de catre Agentia Nationala de Cadastru si Publicitate Imobiliara' — claimed, no number, no name. Tel 0723 961 469."},
  "localSpecificity": "named-places — București, Ilfov, Corbeanca. No Alba.",
  "schemaTypes": [],
  "contributesToConsensus": false
}
```

### Consensus over the surveyor cohort (n=4 extracted; C5 excluded)

| Attribute | Count | Note |
|---|---|---|
| Names an individual engineer | **3 / 4** | Maxim Emanuel, Martin Nicolae, Emilian Ion |
| Publishes an ANCPI **authorization number** | **0 / 4** | 2 claim authorization, none print the number |
| Publishes prices | 3 / 4 | C1 refuses; C3/C4 exact ladders |
| Publishes a duration claim | 2 / 4 | C3 21/7 zile, C4 30–50 zile |
| Itemised acte necesare on the page | **1 / 4** | only C2, and it has no apartment line |
| Numbered/named process steps | 2 / 4 | C3 implicit-3, C4 explicit-4 |
| FAQ block | **0 / 4** | none |
| schema.org structured data | **0 / 4** | none |
| WhatsApp link | **0 / 4** | C3 labels it, ships no link |
| Photo gallery / portfolio | 2 / 4 | C1 (35 images), C2 |
| Reviews on page | **0 / 4** | none |

---

## 2. OUR pages, scored on the identical schema (SOP Step 4)

Three queries where we rank, **three wrong pages served, zero correct**. Both the served page and
the correct page are scored below.

### 2a — CORRECT page for apt-q1 and apt-q2: `docs/servicii/intabulare-apartament/alba/alba-iulia.html`

```json
{
  "url": "https://expert-intabulare.ro/servicii/intabulare-apartament/alba/alba-iulia.html",
  "domain": "expert-intabulare.ro", "pageType": "surveyor",
  "rankedFor": [], "role": "correctPage — NOT SERVED for any captured query",
  "wordCount": 819,
  "headingOutline": [
    {"level": 1, "text": "Intabulare apartament în Alba Iulia (Alba)"},
    {"level": 2, "text": "Unde se depune dosarul"},
    {"level": 2, "text": "Despre lucrări în Alba Iulia"},
    {"level": 2, "text": "Acte necesare (orientativ)"},
    {"level": 2, "text": "Cum decurge procesul"},
    {"level": 2, "text": "Particularități OCPI în județul Alba"},
    {"level": 2, "text": "Întrebări frecvente — intabulare apartament în Alba Iulia"},
    {"level": 2, "text": "Contact rapid"},
    {"level": 2, "text": "Alte servicii în Alba Iulia"},
    {"level": 2, "text": "Intabulare apartament în localități apropiate"},
    {"level": 2, "text": "Vezi și"}, {"level": 2, "text": "Ai o situație asemănătoare?"}
  ],
  "sectionsPresent": ["intro situațional", "birou competent (BCPI + adresă)", "sate aparținătoare",
                      "context local", "acte necesare", "proces", "preț orientativ",
                      "particularități OCPI județ", "FAQ", "contact", "alte servicii",
                      "localități apropiate"],
  "questionsAnswered": [
    "Cât costă cadastrul unui apartament?",
    "Apartamentul are două numere cadastrale — unul vechi și unul nou. Care e valabil?",
    "Am închis balconul / am modificat interiorul. Contează la cadastru?",
    "Blocul nu are carte funciară colectivă. Se poate înscrie apartamentul?"
  ],
  "priceDisclosure": "range",
  "priceValues": "700 – 1.200 lei orientativ pentru un apartament obișnuit, plus tarifele ANCPI. Standing disclaimer: 'Prețurile afișate sunt orientative; costul exact depinde de teren, documente și situația din cartea funciară.'",
  "durationClaim": "NONE on this page — correct per CEO ruling 0.2.",
  "acteNecesare": {"present": true, "itemCount": 5,
    "items": ["Act de proprietate al apartamentului (contract, certificat de moștenitor)",
              "Act de identitate proprietar(i)", "Certificat de atestare fiscală de la primărie",
              "Schița apartamentului din actul de proprietate, dacă există",
              "Extras de carte funciară pentru informare, dacă apartamentul a mai fost înscris"],
    "extra": "'Printează lista' affordance"},
  "processSteps": {"present": true, "stepCount": 5,
    "steps": ["Trimiți actele pe WhatsApp + scopul (vânzare, moștenire, credit)",
              "Releveul apartamentului, cu deplasare în Alba Iulia",
              "Documentația cadastrală de unitate individuală, cu cotele din părțile comune",
              "Depunem dosarul la BCPI Alba Iulia și urmărim soluționarea",
              "Primești extrasul de carte funciară, gata pentru notar sau bancă"]},
  "faq": {"present": true, "questionCount": 4},
  "schemaTypes": ["LocalBusiness", "Service", "FAQPage", "BreadcrumbList", "AdministrativeArea",
                  "PostalAddress", "GeoCoordinates"],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": false,
                   "phoneVisible": true, "whatsapp": true},
  "ctaStyle": "'Scrie-ne pe WhatsApp' with prefilled message, 6 WhatsApp links + 5 tel: links per page; 'Topograf autorizat ANCPI, 25+ ani de experiență'; 'Disponibili Luni-Vineri, între 9:00 - 17:00'",
  "localSpecificity": "deep",
  "notes": "BCPI Alba Iulia named with street address (Str. Septimius Severus nr. 59). Sate aparținătoare enumerated (Bărăbanț, Micești, Oarda, Pâclișa). Neighbouring localities with distances. Meta description reads 'aprox. 39 km de Aiud' — the D1 defect, live.",
  "whatWeDoBetter": [
    "Only page in the entire cohort with an FAQ (4 of 4 competitors have none).",
    "Only page in the cohort with schema.org (0 of 4 competitors have any).",
    "Only page with an itemised APARTMENT acte-necesare list (C2's list has no apartment line).",
    "Only page naming the exact BCPI office and its street address.",
    "Only page with WhatsApp that actually works.",
    "Deepest apartment-specific technical vocabulary: releveu, unitate individuală, cote din părțile comune, apartamentare, număr cadastral dublat.",
    "Situational FAQs no competitor attempts: closed balcony, duplicate cadastral numbers, no collective CF."
  ],
  "whatCompetitorsDoBetter": [
    "3 of 4 name the individual engineer; we name nobody.",
    "Cost and durată as indexed H2 headings (C4); ours sit inside a collapsed <details>.",
    "Price segmented by room count (C3, C4); ours is one flat 700–1.200 band for all apartments.",
    "Explicit separation of surveyor fee vs OCPI tax paid direct to the office (C3); ours says only 'plus tarifele ANCPI', once, inside an FAQ answer.",
    "Photo/portfolio proof (C1, C2); we have none.",
    "Bundled package pricing that cross-sells certificat energetic (C4)."
  ]
}
```

### 2b — CORRECT page for apt-q3: `docs/servicii/intabulare-apartament/alba/aiud.html`

Identical structure to 2a. **819 → 826 gated words, 4 FAQ.** Differences worth recording:
- Meta description reads **"birou chiar în Aiud"**, not a distance — the 12.1 self-distance defect
  is already fixed in the meta on this page.
- BCPI Aiud, Str. Cuza Vodă nr. 14.
- Same 4 FAQs, same 5 acte, same 5 process steps, same 700 – 1.200 lei range, same schema set.

### 2c — SERVED page for apt-q1: `docs/servicii/intabulare-casa-constructie/alba/alba-iulia.html`

```json
{
  "role": "servedPage for apt-q1 `intabulare apartament alba` at rank #5",
  "wordCount": 837, "faq": {"questionCount": 4}, "priceValues": "1.000 – 2.500 lei",
  "apartmentTermOccurrences": 6,
  "apartmentTermsInBodyProse": 0,
  "finding": "All 6 occurrences of 'apartament' are inside <a href> navigation links (site-wide service menu ×2 and the 'Alte servicii' cross-link). ZERO occurrences in body prose. No releveu, no cotă parte, no bloc, no unitate individuală, no scară, no etaj. Google is answering an apartment query with a page that is mechanically not about apartments.",
  "priceMismatch": "Shows 1.000 – 2.500 lei — the HOUSE range. The searcher's actual answer is 700 – 1.200 lei. The wrong page quotes a price roughly double the right one."
}
```

### 2d — SERVED page for apt-q2: `docs/servicii/cadastru-si-intabulare/alba/noslac.html`

```json
{
  "role": "servedPage for apt-q2 `cadastru apartament alba iulia` at rank #9",
  "wordCount": 891, "faq": {"questionCount": 6}, "priceValues": "900 – 2.500 lei",
  "apartmentTermOccurrences": 6, "apartmentTermsInBodyProse": 0,
  "finding": "Same pattern as 2c: all 6 'apartament' occurrences are navigation links. Wrong service AND wrong locality — the query names the county seat, the page is a commune of Noșlac, 24 km from Aiud and ~40 km from Alba Iulia. Price shown 900 – 2.500 lei against the correct 700 – 1.200."
}
```

### 2e — SERVED page for apt-q3: `docs/servicii/intabulare-apartament/alba/ramet.html`

```json
{
  "role": "servedPage for apt-q3 `intabulare apartament aiud` at rank #3",
  "wordCount": 883, "faq": {"questionCount": 6}, "priceValues": "700 – 1.200 lei",
  "finding": "RIGHT SERVICE, WRONG LOCALITY — and materially RICHER than the correct Aiud page. 883 words vs 826; 6 FAQs vs 4. It carries two apartment FAQs the Aiud page does not: 'Cât durează cadastrul unui apartament în Râmeț?' and 'Cumpăr un apartament în Râmeț prin credit. Ce documente cadastrale îmi cere banca?'",
  "policyFlag": "The Râmeț page contains a DURATION FAQ: 'Releveul se face într-o singură vizită, documentația în câteva zile, iar soluționarea la BCPI Aiud urmează termenele obișnuite, care pot fi scurtate cu taxă de urgență.' It names no number of days, so it is hedged rather than a forbidden claim — but 'documentația în câteva zile' is a turnaround statement and sits close to the 0.2 line. Flagged for the chair, NOT actioned by this agent."
}
```

### 2f — County-level page: `docs/zone/alba/index.html`

```json
{
  "url": "https://expert-intabulare.ro/zone/alba/", "role": "the page a county query should reach",
  "servedForAnyCapturedQuery": false,
  "headingOutline": [{"level":1,"text":"Cadastru și topografie în județul Alba"},
                     {"level":2,"text":"OCPI Alba"}, {"level":2,"text":"Contact rapid"},
                     {"level":2,"text":"Alte județe"},
                     {"level":2,"text":"Localități din județul Alba"},
                     {"level":2,"text":"Ai o situație asemănătoare?"}],
  "apartmentTermOccurrences": 160,
  "apartmentTermsInBodyProse": 0,
  "finding": "All 160 occurrences are inside the 78-locality × 12-service link index. The hub has NO apartment prose, NO acte necesare, NO process, NO FAQ, NO price (0 occurrences of 'lei'), and its schema is only LocalBusiness + BreadcrumbList — no Service, no FAQPage. It is a directory index, not a service page.",
  "whatItDoesHaveThatLeavesDoNot": "One genuinely strong paragraph the leaves lack: 'Tarifele OCPI pentru serviciile de cadastru și publicitate imobiliară sunt stabilite prin ordin al directorului general ANCPI și se achită la depunerea dosarului; pentru majoritatea serviciilor există și regim de urgență, cu tarif suplimentar. Onorariul lucrării de specialitate se stabilește separat de aceste tarife.' This is exactly C3's strongest trust move — fee vs tax separation — already written, already policy-clean, and NOT on any leaf.",
  "alsoPresent": "All five BCPI offices with street addresses."
}
```

### 2g — Service hub: `docs/servicii/intabulare-apartament/index.html`

National service hub covering all five counties (78 Alba links + 14 others). Has acte necesare,
process, contact, Service schema — but **no FAQ, no county-level segmentation, and one 'lei'
mention.** There is **no service×county hub** (`docs/servicii/intabulare-apartament/alba/index.html`
does not exist), which is chair verdict W1.

---

## 3. GAPS (SOP Step 5 — ranked, confidence-tagged)

**G1. [HIGH][moves-rankings] Google serves the fatter sibling — in 3 of 3 cases.**
Measured, not inferred:

| Query | Served page | words | FAQ | Correct page | words | FAQ |
|---|---|---|---|---|---|---|
| apt-q1 | casa-constructie/alba-iulia | **837** | 4 | apartament/alba-iulia | 819 | 4 |
| apt-q2 | cadastru-si-intabulare/noslac | **891** | **6** | apartament/alba-iulia | 819 | 4 |
| apt-q3 | apartament/**ramet** | **883** | **6** | apartament/**aiud** | 826 | 4 |

In every case the served page has **more gated words**, and in two of three **more FAQ entries**,
than the page that should have been served. Google's sibling choice is not random — it correlates
perfectly, on this sample, with content volume. Our two most commercially valuable localities in
the county, **Alba Iulia and Aiud, drew the 4-question FAQ selection while Râmeț and Noșlac drew
6.** That is a generator data allocation working directly against us.
*Caveat: n=3, correlational. It is a strong hypothesis, not a proven mechanism.* Confidence is HIGH
on the measurement, MEDIUM on the causal reading.

**G2. [HIGH][table-stakes] No named individual. 3 of 4 surveyors name theirs; we name nobody.**
"Ing. Emanuel MAXIM" (with photographs), "Inginer Dipl. Martin Nicolae", "Ing. Autorizat ANCPI
Emilian Ion". Our page says "Topograf autorizat ANCPI, 25+ ani de experiență" — an anonymous
credential. **Critically: 0 of 4 competitors publish an authorization NUMBER either.** So the
number is not the competitive bar — the *name* is. Chair verdict B2 is blocked on the ANCPI
number; the name **Aurel Fleser** is already public in the Google Business Profile and needs no
new fact from Aurel. This gap is unblockable today at zero policy risk.

**G3. [HIGH][moves-rankings] The wrong page quotes the wrong price.**
`intabulare apartament alba` serves a page showing **1.000 – 2.500 lei**; `cadastru apartament alba
iulia` serves one showing **900 – 2.500 lei**. The correct answer is **700 – 1.200 lei**. A searcher
comparing us against necesit.ro's snippet-badged "560 – 810 lei" sees roughly triple. This is a
conversion loss caused purely by routing, and it costs more than any wording change could recover.

**G4. [MEDIUM][table-stakes] Cost and durată are collapsed inside `<details>`; the cohort makes
them headings.** C4's H2s are literally "Ce costuri presupune o lucrare de cadastru" and "Cât
durează să obții cadastrul și intabularea"; C3's are "Preturi cadastru si intabulare apartament"
and "Taxe si termen de avizare OCPI". Our "Cât costă cadastrul unui apartament?" is one of four
`<summary>` elements inside a collapsed accordion. The price *paragraph* is visible; the question
form is not.

**G5. [MEDIUM][table-stakes] Fee-vs-tax separation is missing from the leaf.**
C3's single strongest trust move is stating that the OCPI tax is set by law and paid direct to the
office, separate from the surveyor's fee. **We already own this paragraph** — it is live on
`docs/zone/alba/index.html` and it is fully policy-compliant, since it names no figure. It is
absent from every leaf. Our leaf says only "plus tarifele ANCPI", once, inside an FAQ answer.

**G6. [MEDIUM][moves-rankings] No service×county hub, so county queries land on leaves.**
`intabulare apartament alba` is a county query answered by a city leaf of the wrong service. The
national service hub exists but is not county-scoped and has no FAQ. Confirms chair verdict W1 for
this service.

**G7. [LOW][table-stakes] No portfolio or photographic proof.** C1 ships 35 images (equipment,
drone, 4×4 fleet, field work); C2 ships a gallery and a Portofoliu section. We ship none.
Correlational only — C1 also has no prices, no FAQ and no schema, and still outranks us.

**G8. [LOW][table-stakes] No bundled cross-sell.** C4 prices cadastru + intabulare + certificat
energetic as one package. We sell certificat energetic as one of our 12 services and never
mention it on the apartment page. Any bundle *price* is blocked; the *cross-link* is not.

### BLOCKED BY POLICY — recorded as intelligence, not actioned

**B-P1. Per-room-count price ladder.** C3 (800/900/1.000/1.200 + 75 lei OCPI) and C4
(500/500/600/650) both segment by garsonieră / 2 / 3 / 4 camere. Google's own related searches on
apt-q4 include **`Pret cadastru si intabulare apartament 3 camere`** — the demand is measured. A
room-count ladder would require inventing four new figures not in `generator/data/services.json`.
**Forbidden by ruling 0.2. Do not action.** Our existing hedged 700 – 1.200 lei band stays exactly
as it is.

**B-P2. Turnaround claims.** C3 publishes 21 zile normal / 7 zile urgență and 9/3 for alipire;
C4 publishes 3 zile for measurement and 30–50 zile overall; C5 publishes 18 zile. `rivx.ro` (blog,
outside the cohort) quotes **300–800 lei and 30–60 zile for Alba Iulia specifically** — the only
competitor naming our exact market. **All forbidden.** We publish no duration and will not.

**B-P3. Exact ANCPI tariff.** C3 prints 75 lei / 120 lei / 60 lei per service. We do not know it
and will not print it.

**Consequence, stated plainly:** `cadastru apartament pret alba` is **not a winnable target for us**
and should not be selected. Every result on it competes on exact figures and day counts we are
forbidden to publish, and Google printed `Lipsesc: alba` on five of nine results — the query is
being answered by national price pages, so the local modifier is decorative. We are absent from it
today and that is the correct outcome, not a defect. Recorded as intelligence only.

---

## 4. CONTENT SPEC (SOP Step 6)

```markdown
## intabulare-apartament — city tier (Alba Iulia) and town tier (Aiud)
- Target queries: apt-q1 `intabulare apartament alba` (#5) · apt-q2alt-pc `cadastru apartament
  alba iulia` (#9) · apt-q3-pc `intabulare apartament aiud` (#3).
  NOT targeted: apt-q4-pc `cadastru apartament pret alba` — see B-P1/B-P2.
- Our position / page served / page that should be served:
  #5 → casa-constructie/alba-iulia → SHOULD BE apartament/alba-iulia (or a county hub)
  #9 → cadastru-si-intabulare/noslac → SHOULD BE apartament/alba-iulia
  #3 → apartament/ramet → SHOULD BE apartament/aiud
- Surveyor cohort analysed (N): 4 extracted of 5 unique (C5 404). Only 2 are Alba-local.
- Aggregator share: 27/36 organic slots = 75%. Zero competing surveyors on two of four queries.
- ROUTING DEFECT: YES — 3 of 3. Zero correct pages served. This is the whole problem.

- CONTENT SPEC — what the page must contain:
  - Section: NAMED SURVEYOR — purpose: close the only unanimous cohort gap (3/4 name theirs).
    Must answer "who is coming to my apartment". Data source: "Aurel Fleser, inginer topograf
    autorizat ANCPI" — already public in the GBP. MUST NOT include an authorization number until
    Aurel supplies it (ruling 0.1). Constant across all ~222 sibling pages ⇒ boilerplate ⇒
    gate-invisible.
  - Section: ONORARIU vs TARIF OCPI — purpose: C3's strongest trust move, which we already own.
    Must answer "is the ANCPI tariff part of your fee?". Data source: LIFT VERBATIM the paragraph
    already live on docs/zone/alba/index.html ("Tarifele OCPI ... stabilite prin ordin al
    directorului general ANCPI ... Onorariul lucrării de specialitate se stabilește separat de
    aceste tarife."). No figure, no duration ⇒ policy-clean. Constant service-wide ⇒ gate-safe.
    NOTE: it must be reworded, not copy-pasted, or it will collide with the hub on the 3-word
    shingle check (SOP §4.7).
  - Section: FAQ REBALANCE — purpose: G1. Alba Iulia and Aiud currently draw 4 FAQ entries while
    Râmeț and Noșlac draw 6. The two highest-value localities must not draw the shortest
    selection. Data source: faqSelection slot in the generator.
    ⚠️ CONSTRAINT: this is a SELECTION change, NOT a faqPool RESIZE. Pool resizing is banned
    (D13 / facts.md §6 — pool text sits at ~45% document frequency, just under the boilerplate
    cliff).
  - Section: COST/DURATĂ AS HEADINGS — purpose: G4. The cohort indexes these as H2s. Promote the
    existing price question out of <details> into a visible heading. The ANSWER does not change:
    the hedged 700 – 1.200 lei range and the standing priceDisclaimer stay exactly as they are.
    NO duration heading — we have no duration answer and will not invent one.
  - Section: CERTIFICAT ENERGETIC CROSS-LINK — purpose: G8. C4 bundles it. Link only, no bundle
    price. The link already exists in "Alte servicii"; give it apartment-specific anchor text.
  - Section: SERVICE×COUNTY HUB /servicii/intabulare-apartament/alba/ — purpose: G6 / chair W1.
    Must answer the county query without a village standing in for it. Must carry: apartment
    acte necesare, the 5-step process, the 5 BCPI offices with addresses, the orientative range,
    an FAQ block, Service + FAQPage schema, and the "orașe principale" block above the A–Z list.

- DATA REQUIRED FROM GENERATOR:
  - EXISTS: loc.distanceKmFromAiud, ocpiOffice + address, villages, countyNote, faqSelection,
    nearby, profileVariant, the 700 – 1.200 lei range in services.json, priceDisclaimer.
  - MISSING: loc.serviceNotes{} (chair D5, approved, not yet shipped) — required for the apartment
    leaf and the casă/construcție leaf in the same town to differ. This is the direct cure for the
    apt-q1 failure mode.
  - MISSING: any named-person field. Needs one new constant string, not per-locality data.
  - MISSING: service×county hub template.
  - NOT AVAILABLE AND NOT TO BE INVENTED: room-count price ladder, ANCPI tariff, any turnaround.

- BLOCKED BY POLICY: per-room-count prices (B-P1), all turnaround/duration claims (B-P2), exact
  ANCPI tariff (B-P3). Target query apt-q4-pc dropped as a consequence.

- ROUTING DEFECT: YES. 3 of 3 queries. In all three the served page has MORE gated words than the
  correct one, and in two of three more FAQ entries. Enrichment of the correct pages is therefore
  not merely a quality play — on this evidence it is part of the routing remedy.
```

---

## 5. Flag for the chair

`docs/servicii/intabulare-apartament/alba/ramet.html` — a page Google is actively serving — carries
the FAQ answer *"Releveul se face într-o singură vizită, documentația în câteva zile, iar
soluționarea la BCPI Aiud urmează termenele obișnuite, care pot fi scurtate cu taxă de urgență."*
It names no number of days and hedges BCPI processing rather than claiming it, so it does not
clearly breach ruling 0.2 — but *"documentația în câteva zile"* is a turnaround statement about our
own work and sits close to the line. **Raised, not actioned.** This agent does not edit generator
data.

Second flag: the D1 meta-description defect is confirmed live on the apartment leaves
(*"aprox. 39 km de Aiud"* on Alba Iulia, *"aprox. 19 km de Aiud"* on Râmeț) — but
`intabulare-apartament/alba/aiud.html` already reads **"birou chiar în Aiud"**, so the 12.1
self-distance fix has landed on that page's meta. D1 remains open for the other 77 Alba localities.
