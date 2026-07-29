# COMPETITOR EXTRACTION — `topografie-constructii`

**SOP-serp-research.md Steps 3–6 · 2026-07-29 · browser-free (WebFetch + one `curl` fallback)**
**Source SERP:** `research/seo-2026-07/serp/topografie-constructii-serp.md` — complete, 4 queries, no gaps.
**Policy in force:** SOP §0.2. Competitor prices/durations below are recorded as **intelligence only**.
We publish neither exact ANCPI tariffs nor any turnaround claim. Existing hedged `priceRange` stays.

---

## 0. Cohort construction and shortfall

Surveyor results deduped by URL across the 4 queries. Every one of them ranked with its
**company homepage** — not a service page, not a locality page.

| # | URL | Domain | Ranked for (queryId : rank) | Fetch |
|---|---|---|---|---|
| C1 | `https://pdproiectsurveyor.ro/` | pdproiectsurveyor.ro | topc-q1:2 · topc-q2:1 · topc-q4:1 | WebFetch OK (+ `/servicii-oferite/`) |
| C2 | `https://cadastrumartin.ro/` | cadastrumartin.ro | topc-q1:1 · topc-q2:2 · topc-q4:5 | WebFetch OK |
| C3 | `https://totalbusinessland.ro/` | totalbusinessland.ro | topc-q1:3 · topc-q2:3 · topc-q4:9 | WebFetch OK |
| C4 | `https://topografiealba.ro/` | topografiealba.ro | topc-q1:4 · topc-q2:10 · topc-q4:3 | WebFetch OK |
| C5 | `http://gistopocad.3x.ro/` | gistopocad.3x.ro | topc-q1:5 · topc-q2:5 · topc-q4:4 | **WebFetch failed** (HTTPS upgrade → `ECONNREFUSED 89.42.39.160:443`; host is HTTP-only). Recovered via `curl` over plain HTTP, 44,644 bytes, HTTP 200. |
| C6 | `https://cadastrumaxim.ro/` | cadastrumaxim.ro | topc-q1:9 · topc-q2:9 | WebFetch OK |

**Cohort size = 6 competitor surveyor pages + 1 of ours.**

### SHORTFALL — recorded per SOP Step 3

- **topc-q3 `topografie constructii aiud`: surveyor cohort = 1, and it is OURS.**
  Fewer than 3 surveyor results exist. **No padding with directories was done.** The top 10 is
  6 directories, 2 Facebook pages (both local rivals — Domsa Sergiu Bogdan #1, Molnar
  Aurelian-Marian #8), 1 Primărie register, and our page at #3. The #9 result
  `aiud.cylex.ro` is **our own business listing** on a directory, not a competitor.
  → **Zero competitor surveyor websites exist for the Aiud construction-topography query.**
  There is nothing to extract and nothing to imitate. This is an uncontested SERP.

- Skipped as directory/marketplace/other per SOP Step 2, never counted in consensus:
  necesit.ro, daibau.ro, intabulari24.ro, firmecadastru.ro, birouri-cadastru.ro, olx.ro,
  aiud.cylex.ro, facebook.com (×3), cityalert.aiud.ro (government), optiuni.ro (education —
  UAB degree programme page, not a vendor).

### Aggregator share

| Query | Tier | Non-surveyor / total | Surveyor cohort |
|---|---|---|---|
| topc-q1 `topografie constructii alba` | county | **3 / 9** | 6 |
| topc-q2 `topografie constructii alba iulia` | city | **3 / 10** (4/10 counting optiuni.ro) | 6 |
| topc-q3 `topografie constructii aiud` | town | **9 / 10** | **1 (ours)** |
| topc-q4 `topograf santier alba iulia` | city | **5 / 10** | 5 |

Aggregate across the four queries: **21 of 39 organic results are non-surveyor (≈54%)** — but the
distribution is bimodal and that is the story. The Alba / Alba Iulia queries are **3/9 and 3/10**,
the **lowest aggregator share anywhere in this research session**; the Aiud query is **9/10**, one of
the highest. Real surveying firms contest the city; nobody contests the town.

---

## 1. Extracted competitor records (SOP Step 3 schema)

### C1 — pdproiectsurveyor.ro

```json
{
  "url": "https://pdproiectsurveyor.ro/",
  "domain": "pdproiectsurveyor.ro",
  "pageType": "surveyor",
  "rankedFor": [{"queryId":"topc-q1","rank":2},{"queryId":"topc-q2","rank":1},{"queryId":"topc-q4","rank":1}],
  "wordCount": 1200,
  "headingOutline": [
    {"level":1,"text":"Profesioniști în topografie, cadastru și GIS"},
    {"level":2,"text":"P&D Proiect Surveyor SRL"},
    {"level":2,"text":"Viziunea firmei noastre"},
    {"level":2,"text":"Misiunea noastră"},
    {"level":2,"text":"Gamă variată"},
    {"level":3,"text":"Serviciile noastre includ:"},
    {"level":3,"text":"De ce să ne alegi pe noi?"},
    {"level":2,"text":"Câteva din proiectele noastre"},
    {"level":2,"text":"Experiențele avute de cei ce au ales sa colaboreze cu noi"},
    {"level":4,"text":"Navigare"},{"level":4,"text":"Contact Info"},{"level":4,"text":"Informații legale"}
  ],
  "sectionsPresent": ["despre noi","viziune","misiune","servicii","de ce noi","galerie proiecte","testimoniale","contact"],
  "questionsAnswered": ["De ce să ne alegi pe noi?"],
  "priceDisclosure": "none",
  "priceValues": "no figures on the ranking page; a separate /preturi/ page is linked from the menu",
  "durationClaim": "none",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": true, "yearsExperience": false, "portfolio": true,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "soft, discovery-led — \"Descoperi mai multe despre noi și ce putem face pentru tine\" → \"Vezi detalii\". Phones inline: 0761 126 184 / 0786 536 444.",
  "localSpecificity": "named-places",
  "whatTheyDoBetter": [
    "The only page in the cohort with on-page testimonials — 6, each with a name AND a role that maps to the buyer persona: Andrei Vasilescu (Inginer constructor), Laura Popa (Manager proiecte construcții), Maria Ionescu (Dezvoltator imobiliar), Elena Dumitrescu (Arhitect). It sells to the construction chain, not to a property owner.",
    "\"Câteva din proiectele noastre\" — an actual project gallery, not a counter.",
    "Ranks #1 on BOTH Alba Iulia queries AND holds a 5,0 (20-review) map-pack listing — the only competitor strong in organic and local simultaneously.",
    "Service page names construction work explicitly: \"Asistență topografică în șantiere\" and \"Monitorizarea deformărilor și tasărilor\"."
  ],
  "whatWeDoBetter": [
    "We publish a 5-step process; they publish none.",
    "We publish an acte-necesare list; they publish none.",
    "We have JSON-LD (7 types); they have none.",
    "WhatsApp; they have none.",
    "Their testimonial names (Ion Popescu, Maria Ionescu, Elena Dumitrescu) read as placeholder-generic — a credibility risk we do not carry."
  ]
}
```

Verbatim construction list from `pdproiectsurveyor.ro/servicii-oferite/` (Topografie block):
> "Măsurători topografice și ridicări topografice detaliate" · "Planuri topografice pentru proiecte
> de construcții și infrastructură" · "Delimitarea și trasarea limitelor terenurilor" ·
> "**Monitorizarea deformărilor și tasărilor**" · "**Asistență topografică în șantiere**"

---

### C2 — cadastrumartin.ro

```json
{
  "url": "https://cadastrumartin.ro/",
  "domain": "cadastrumartin.ro",
  "pageType": "surveyor",
  "rankedFor": [{"queryId":"topc-q1","rank":1},{"queryId":"topc-q2","rank":2},{"queryId":"topc-q4","rank":5}],
  "wordCount": 850,
  "headingOutline": [
    {"level":1,"text":"Birou Cadastru Martin"},
    {"level":2,"text":"Ati facut alegerea perfecta"},
    {"level":2,"text":"Peste 9 ani de experienta"},
    {"level":2,"text":"O echipa tanara de specialisti"},
    {"level":2,"text":"Dotari si echipamente de ultima generatie"},
    {"level":2,"text":"Despre noi"},
    {"level":2,"text":"Actualizare date imobil si plan topo- cadastral"},
    {"level":2,"text":"Lucrari de prima inscriere (Intabulare)"},
    {"level":2,"text":"Lucrari speciale de topografie"},
    {"level":3,"text":"Acte necesare"}
  ],
  "sectionsPresent": ["despre noi","servicii (3 categorii)","acte necesare","legislatie","portofoliu","galerie foto","contact"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "",
  "durationClaim": "none",
  "acteNecesare": {"present": true, "itemCount": 7},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": true,
                   "phoneVisible": false, "whatsapp": false},
  "ctaStyle": "weak — only \"mai mult\" / \"Despre noi\" links. No action button anywhere.",
  "localSpecificity": "generic",
  "whatTheyDoBetter": [
    "A dedicated `Legislatie` section — nobody else in the cohort has one.",
    "Acte necesare broken out by WORK TYPE (7 headings), each its own entry: SCHIMBAREA CATEG. DE FOLOSINTA · DOC. AUTORIZATIE DE CONSTRUIRE – PAC · DOC. SCOATERE DIN CIRCUITUL AGRICOL – SCA · NOTARE CONSTRUCTIE · ALIPIRE/DEZLIPIRE · PRIMA INSCRIERE EXTRAVILAN · PRIMA INSCRIERE INTRAVILAN. Ours is one flat 3-item list.",
    "Named engineer: \"Inginer Dipl. Martin Nicolae\".",
    "Ranks #1 on the county query with the WEAKEST construction vocabulary in the cohort — evidence that domain-level signals, not construction copy, carry that query."
  ],
  "whatWeDoBetter": [
    "No diacritics anywhere on their page (\"Ati facut alegerea perfecta\", \"experienta\"); ours are correct throughout.",
    "Their experience claim is 'peste 9 ani'; ours is 25+.",
    "We have a numbered process, JSON-LD, WhatsApp, a visible phone and an explicit CTA — they have none of the five."
  ]
}
```

---

### C3 — totalbusinessland.ro

```json
{
  "url": "https://totalbusinessland.ro/",
  "domain": "totalbusinessland.ro",
  "pageType": "surveyor",
  "rankedFor": [{"queryId":"topc-q1","rank":3},{"queryId":"topc-q2","rank":3},{"queryId":"topc-q4","rank":9}],
  "wordCount": 3000,
  "headingOutline": [
    {"level":1,"text":"Total Business Land"},
    {"level":2,"text":"Proiectare și Urbanism"},
    {"level":2,"text":"Topografie și Cadastru"},
    {"level":2,"text":"Mediu - Consultanță și lucrări"},
    {"level":2,"text":"Arheologie și studii istorice"},
    {"level":2,"text":"Construcții civile și industriale"},
    {"level":2,"text":"Servicii digitale"},
    {"level":2,"text":"Îmbunatățiri Funciare"},
    {"level":2,"text":"Resurse naturale"},
    {"level":2,"text":"Topografie, Geodezie, Cadastru Sistematic și Sporadic"},
    {"level":2,"text":"Proiectare, Inginerie și Management pentru Construcții"},
    {"level":2,"text":"Contactează acum un specialist TBL"},
    {"level":2,"text":"Locații"},
    {"level":2,"text":"Program Call Center: 08:00-17:00"},
    {"level":2,"text":"Clienții noștri"},
    {"level":2,"text":"TOTAL BUSINESS LAND S.R.L., (în insolvenţă…)"}
  ],
  "sectionsPresent": ["fonduri europene","9 verticale de servicii","locatii","clienti","produse digitale","evenimente","cariere","solicita oferta"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "",
  "durationClaim": "none — only 'Program Call Center: 08:00-17:00', an availability window, not a turnaround",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": true,
                   "reviews": false, "yearsExperience": true, "portfolio": true,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "repeated hard CTA — \"Solicită o ofertă\" under every service block, plus \"Contactează acum un specialist TBL\" and \"Solicită acum o ofertă\". Tel: +40 318 600 316, contact@tblgrup.ro.",
  "localSpecificity": "deep-but-national",
  "whatTheyDoBetter": [
    "Named, verifiable reference projects — \"autostrada A7\", Parcul Industrial Holboca, Parcul IC Brătianu, Parcul 22 Decembrie, Parcul Libertății, Lunca Crișului. This is the single strongest credibility device in the cohort and the exact thing our \"1052+ proiecte finalizate\" counter is a hollow substitute for.",
    "16 named client logos (BNR, Heidelberg Cement, Hidroelectrica, Comisia Europeană, RMGC).",
    "Scale proof: \"peste 800 de angajaţi\", \"12 birouri în ţară\", offices in București / Alba Iulia / Oradea / Sebeș.",
    "A repeated 'Solicită o ofertă' CTA under EVERY service block — ours appears twice on the whole page.",
    "\"Asistență topografică pentru execuție lucrări construire CF\" — construction-execution framing."
  ],
  "whatWeDoBetter": [
    "Their own H2 reads \"TOTAL BUSINESS LAND S.R.L., (în insolvenţă…)\" — and Google's related searches for this query are dominated by 'Total business land insolventa' and 'Total business land pareri'. Their brand equity is actively negative and they are still #3.",
    "They are a national multi-vertical group; nothing on the page is about a small Alba construction site.",
    "No process, no acte necesare, no FAQ, no JSON-LD, no WhatsApp."
  ]
}
```

> **Reputational note, actionable:** six of the eight related searches on topc-q1 and topc-q2 are
> brand queries for this one firm, including `insolventa` and `pareri`. The county SERP's demand
> signal is largely *one competitor's reputation crisis*, not commercial intent. Do not read
> `topografie constructii alba` volume as clean buyer demand.

---

### C4 — topografiealba.ro (Larry Vermessungen)

```json
{
  "url": "https://topografiealba.ro/",
  "domain": "topografiealba.ro",
  "pageType": "surveyor",
  "rankedFor": [{"queryId":"topc-q1","rank":4},{"queryId":"topc-q2","rank":10},{"queryId":"topc-q4","rank":3}],
  "wordCount": 500,
  "headingOutline": [
    {"level":1,"text":"Larry Vermessungen"},
    {"level":2,"text":"Topografie │ Cadastru │ Geodezie │ GPS"},
    {"level":2,"text":"Oferim o gamă largă de servicii de Topografie, Cadastru și GPS"},
    {"level":2,"text":"AI NEVOIE DE AJUTORUL NOSTRU?"},
    {"level":3,"text":"Despre noi"},{"level":3,"text":"Parteneri"},
    {"level":3,"text":"Date de contact"},{"level":3,"text":"Servicii"},{"level":3,"text":"Utile"},
    {"level":6,"text":"Topograf AI / Asistent virtual"}
  ],
  "sectionsPresent": ["servicii cadastru","servicii topografie","servicii GPS","despre noi","parteneri","contact","chatbot"],
  "questionsAnswered": ["Dacă vă interesează achiziționarea unei proprietăți, cel mai bine e să consultați un topograf în vederea măsurării terenului respectiv."],
  "priceDisclosure": "none",
  "priceValues": "",
  "durationClaim": "none",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": false,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "\"AI NEVOIE DE AJUTORUL NOSTRU?\" as an H2 · \"COMANDĂ\" (shop) · \"Consultanță\" · an AI chatbot labelled \"Topograf AI — Asistent virtual\". Tel 0358 104 184.",
  "localSpecificity": "generic",
  "whatTheyDoBetter": [
    "THE decisive item in this whole extraction: they own the exact construction-site query vocabulary, verbatim — \"PAC, PUZ, PUD, lucrări topo, planuri de amplasament, urmărire de șantier, monitorizări volume, trasare limite și rețele de nivelment\". They rank #3 on `topograf santier alba iulia` on ~500 words with no FAQ, no process, no acte necesare and no structured data. The ONLY thing they have that we do not is that phrase set.",
    "\"înființată în anul 2006\" — a checkable founding year rather than a round claim.",
    "A live AI assistant on the page; the only interactive conversion device in the cohort.",
    "German-market brand cue ('Vermessungen') differentiating them from six identical 'Cadastru X' names."
  ],
  "whatWeDoBetter": [
    "Everything structural: process, acte necesare, JSON-LD, WhatsApp, contact card, breadcrumbs.",
    "25+ ani vs their 2006 founding.",
    "They name no person at all."
  ]
}
```

---

### C5 — gistopocad.3x.ro (S.C. Gis Topocad S.R.L.)

```json
{
  "url": "http://gistopocad.3x.ro/",
  "domain": "gistopocad.3x.ro",
  "pageType": "surveyor",
  "rankedFor": [{"queryId":"topc-q1","rank":5},{"queryId":"topc-q2","rank":5},{"queryId":"topc-q4","rank":4}],
  "wordCount": 320,
  "headingOutline": [
    {"level":2,"text":"Servicii GIS"},
    {"level":2,"text":"Servicii cadastru si topografie:"},
    {"level":2,"text":"Expert autorizat lucrari topografice"}
  ],
  "sectionsPresent": ["home","cadastru","topografie","gis","contact"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "\"Preturile sunt calculate pentru fiecare proiect in parte, in functie de specificul lucrarii (geografia terenului, suprafata terenului, suprafata apartmentului). Pentru o evaluare a lucrarii Dvs va rugam sa ne contactati...\"",
  "durationClaim": "no figure — soft claim only: \"servicii profesionale, realizate rapid, eficient si la costuri avantajoase\"",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": false,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "\"ne contactati...\" inline. Director: Marius Popescu · Tel 0358106501 · 0748.700.496 · 0763.607.573 · gis.topocad@yahoo.com",
  "localSpecificity": "named-places",
  "whatTheyDoBetter": [
    "\"Trasari constructii, cote, limite de proprietate\" and \"Ridicari topografice necesare executarii proiectelor diverselor investitii (constructii, amenajari, restructurari)\" — construction-execution framing we lack.",
    "\"Masuratori miniere de suprafata si calcul de volume (planuri 3D)\" — names calcul de volume AND 3D as a service.",
    "\"Relevee la comtructii cilile si industriale\" (sic) — relevee for civil/industrial buildings; our page never uses the word 'relevee', though our own Google Business Profile title does.",
    "Two separate acte-necesare entries, one specifically \"Acte necesare pentru realizare documentatie lucrari topografice\" — i.e. an acte list scoped to TOPOGRAPHY, not to cadastre. Ours is topography-scoped but only 3 items.",
    "Free consultancy offer: \"consultanta gratuita in probleme legate de terenul, casa sau apartamentul Dvs\"."
  ],
  "whatWeDoBetter": [
    "This is the clearest evidence in the extraction that page quality is not what holds these positions. The page is served over plain HTTP with NO TLS (HTTPS connection is refused outright), charset us-ascii, zero diacritics, visible typos in its own service list ('comtructii cilile'), a free-subdomain host (3x.ro), no structured data, no mobile framing, 320 words — and it ranks #5, #5, #4.",
    "We beat it on every mechanical axis: HTTPS, diacritics, schema, WhatsApp, process, contact card, breadcrumbs, mobile."
  ]
}
```

---

### C6 — cadastrumaxim.ro

```json
{
  "url": "https://cadastrumaxim.ro/",
  "domain": "cadastrumaxim.ro",
  "pageType": "surveyor",
  "rankedFor": [{"queryId":"topc-q1","rank":9},{"queryId":"topc-q2","rank":9}],
  "wordCount": 2800,
  "headingOutline": [
    {"level":1,"text":"CADASTRU ALBA - TOPOGRAF MAXIM EMANUEL - BIROU CADASTRU MAXIM"},
    {"level":2,"text":"Lucrari - Servicii"},
    {"level":2,"text":"Extras de Carte Funciara | Extras CF Online | Servicii Topocadastrale Online"},
    {"level":2,"text":"Informare Clienti"},
    {"level":2,"text":"Localizare pe Harta"},
    {"level":2,"text":"Contact"},
    {"level":2,"text":"Carte de Vizita Online"},
    {"level":2,"text":"Contacteaza-ne"},
    {"level":2,"text":"Noutati!"},
    {"level":2,"text":"Calendar"},
    {"level":2,"text":"Meteo"},{"level":2,"text":"Vizitatori Extern"},{"level":2,"text":"Da-ne un Like!"}
  ],
  "sectionsPresent": ["lucrari-servicii (25+ items)","extras CF online","informare clienti","harta","contact","noutati","calendar"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "\"Costurile se calculeaza in functie de specificul lucrarii, de aceea este necesar sa ne contactati 0775 617 204 sau 0766 216 570!\" — plus an OFFER, not a price: \"REDUCERE PENTRU CLIENTII VENITI DE PE SITE!!! ... Beneficiati automat de 10% reducere la orice tip de lucrare!\"",
  "durationClaim": "no figure — soft only: \"servicii de calitate efectuate in timp scurt la preturi avantajoase\", \"inalta calitate, eficienta si rapiditate\", \"promptitudine\"",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": true,
                   "reviews": false, "yearsExperience": true, "portfolio": false,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "hardest-selling in the cohort — \"Contactati-ne!\" · \"Sunati acum - 0775 617 204\" · \"Solicita o programare pentru oferta de pret!\" · \"VA RUGAM SA VA PROGRAMATI APELAND: 0775 617 204\" · a standing 10% site-visitor discount. Three phone numbers.",
  "localSpecificity": "deep",
  "whatTheyDoBetter": [
    "Landmark navigation, the deepest local specificity found anywhere: \"Str. Septimius Severus, Nr. 55, Ap. 3\" · \"In spatele Stadionului Municipal\" · \"langa sediul FC Unirea\" · \"pe strada cu OCPI Alba si Directia Agricola\" · \"Langa Oficiul de Cadastru Alba\". A local reader knows exactly where they are without a map.",
    "Named + PHOTOGRAPHED principal: \"Ing. Emanuel MAXIM\", multiple captioned images. The only cohort page with a face.",
    "A 25+ item service menu where each construction item is its own destination: Trasari Topografice · Ridicari Topografice · Profile Topografice · Nivelment · Calcul Volum · Curbe de Nivel - Planuri 3D · Relevee · Planuri de Situatie · Plan Amplasament/Topografic · Determinari GPS · Studii Topografice.",
    "A concrete conversion offer (10% discount for site visitors) — no price disclosed, so it does not violate anything, and it is a device we have no equivalent of.",
    "Cites current regulation by number: \"Regulamentul la Ordin 600/2023 al Directorului General al ANCPI\".",
    "Holds TWO map-pack slots (4,9/39 reviews and 4,5/32) on topc-q2 and topc-q4."
  ],
  "whatWeDoBetter": [
    "Their page is visually dated (Meteo widget, Calendar, 'Vizitatori Extern' hit counter, 'Da-ne un Like!'), diacritic-free, and has no structured data.",
    "It ranks only #9 twice — the WEAKEST organic performer in the cohort despite the most content and the strongest map-pack presence. Organic and map pack are decoupled here, exactly as SOP §3 Step 1 warns.",
    "No process, no acte necesare, no FAQ, no WhatsApp."
  ]
}
```

---

## 2. Cohort consensus — computed over the 6 surveyor pages ONLY

| Attribute | Surveyor cohort (n=6) | Ours |
|---|---|---|
| Ranking unit | **6/6 company homepage** | service hub page |
| Body word count | 320 – 3,000 (median ~1,000) | **452 total / 194 gated — shortest in cohort** |
| Price disclosed | **0/6** | 0 (`ofertă per proiect…`) — **matches cohort** |
| Duration/turnaround figure | **0/6** | 0 — **matches cohort** |
| Acte necesare list | 2/6 (cadastrumartin 7 items; gistopocad as linked pages) | **yes, 3 items** |
| Numbered process | **0/6** | **yes, 5 steps** |
| FAQ on page | **0/6** | **0 rendered** (6 authored, unpublished — see §4) |
| JSON-LD structured data | **0/6** | **7 types** |
| ANCPI authorization number | **0/6** | 0 — **no competitive gap exists** |
| Named individual | 4/6 (Martin Nicolae · Emanuel MAXIM · Marius Popescu · TBL principals) | **0** |
| Photo of the person | 1/6 (cadastrumaxim) | 0 |
| Testimonials on page | 1/6 (pdproiectsurveyor, 6) | 0 |
| Years-experience claim | 3/6 concrete (9 ani · 2006 · 8 ani) | **25+ ani — strongest in cohort** |
| Named reference projects | 3/6 (TBL strongest by far) | 0 (only a "1052+" counter) |
| Phone visible | 5/6 | yes, 5× `tel:` |
| WhatsApp | **0/6** | **6 links + floating button** |
| Names "Alba Iulia" | **6/6** | **0 times** |

---

## 3. OUR PAGE — scored on the identical schema (SOP Step 4)

### 3.1 Inventory reality

`topografie-constructii` is `hubOnly: true` in `generator/data/services.json`.
`find docs/servicii/topografie-constructii -type f` returns exactly **one** file.
**`docs/servicii/topografie-constructii/alba/<locality>.html` does not exist for any locality**, so
the leaf path named in the task brief has nothing to read. The same is true of `servicii-ocpi`,
`certificat-energetic` and `expertize-documentatii` (`generator/build.js:181` and `:199` skip them).

### 3.2 servedPage — `docs/servicii/topografie-constructii/index.html`

```json
{
  "url": "https://expert-intabulare.ro/servicii/topografie-constructii/",
  "domain": "expert-intabulare.ro",
  "pageType": "surveyor",
  "rankedFor": [{"queryId":"topc-q3","rank":3}],
  "wordCount": 452,
  "gatedRegionWordCount": 194,
  "bytes": 18309,
  "headingOutline": [
    {"level":1,"text":"Topografie construcții"},
    {"level":2,"text":"Acte necesare (orientativ)"},
    {"level":2,"text":"Cum decurge procesul"},
    {"level":2,"text":"Contact rapid"},
    {"level":2,"text":"Servicii conexe"},
    {"level":2,"text":"Ai o situație asemănătoare?"}
  ],
  "sectionsPresent": ["breadcrumb","stats band (25+/1052+)","hubIntro lead","acte necesare","proces","pret orientativ + disclaimer","contact rapid","servicii conexe","rezultate band (25+/1052+/2681+)","CTA final"],
  "questionsAnswered": [],
  "priceDisclosure": "range",
  "priceValues": "\"Preț orientativ: ofertă per proiect, în funcție de etape și durată.\" + standing priceDisclaimer. No numeric figure. 'lei' appears 0 times.",
  "durationClaim": "\"răspundem de obicei în aceeași zi lucrătoare\" — Aurel's own reply time, hedged, APPROVED under SOP §0.2. No BCPI/turnaround claim anywhere.",
  "acteNecesare": {"present": true, "itemCount": 3},
  "processSteps": {"present": true, "stepCount": 5},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": ["Service","LocalBusiness","BreadcrumbList","ListItem","PostalAddress","GeoCoordinates","AdministrativeArea"],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": false,
                   "phoneVisible": true, "whatsapp": true},
  "ctaStyle": "\"Scrie-ne pe WhatsApp\" ×3 + floating button, \"0741 478 540\" ×5 dialable, \"Printează lista\", \"Ai o situație asemănătoare?\", \"Disponibili Luni-Vineri, între 9:00 - 17:00\"",
  "localSpecificity": "generic",
  "placeNamesOnPage": {"Aiud": 2, "județul Alba": 1, "Alba Iulia": 0, "Sebeș": 0, "Blaj": 0, "Cugir": 0},
  "constructionVocabPresent": ["as-built ×4","cote ×5","nivelment ×2","volume ×2","monitorizare ×2","recepție ×2","șantier ×1","GPS RTK","stație totală","autorizația de construire","trasarea axelor","fundații, stâlpi, planșee","săpătură/umplutură","hale industriale, drumuri, rețele, parcuri fotovoltaice"],
  "constructionVocabMISSING": ["urmărire de șantier","tasări","deformații","PAC","PUZ","PUD","relevee","profile topografice","curbe de nivel","calcul volum (as a named service)","studiu topografic","asistență topografică","plan de amplasament","proces-verbal (word absent despite services.json promising 'procese-verbale')"]
}
```

### 3.3 correctPage — **identical**

```
servedPage : docs/servicii/topografie-constructii/index.html
correctPage: docs/servicii/topografie-constructii/index.html
DIFFERENCE : NONE
```

### 3.4 County-level page — `docs/zone/alba/index.html`

3,687 gated words · 106,893 bytes · H2s: *OCPI Alba · Contact rapid · Alte județe · Localități din
județul Alba · Ai o situație asemănătoare?*

It mentions `topografie-constructii` **exactly once**, in the services nav list, with anchor text
**"Topografie construcții"** — not "Topografie construcții în județul Alba". Nothing on the county
hub is about construction-site topography. It did not appear on topc-q1.

### 3.5 ROUTING DEFECT — **NO**

**This is the only service in the session with a clean routing record.** On the one query where we
appear (topc-q3, rank #3), Google serves the correct and only page. There is **no cannibalization**
here because there are **no siblings to cannibalize** — a direct contrast with `trasare-teren`,
where three of our leaves fight each other and none is correct.

**The defect on this service is INVENTORY, not routing.** On topc-q1, topc-q2 and topc-q4 we are
absent from organic and absent from the map pack, and `correctPage` **does not exist**: there is no
`topografie-constructii/alba/alba-iulia.html`, no `/servicii/topografie-constructii/alba/` hub, and
the county hub carries no construction content. We are not losing these queries — **we are not
entered in them.**

---

## 4. LIVE GENERATOR DEFECT found while scoring — 6 authored FAQ entries are never published

`generator/lib/pages.js:531` — the service-hub builder:

```js
let faqBlock = '';
let faqs = [];
if (service.hubFaq && service.hubFaq.length) {      // <-- hubFaq, NOT faqPool
  faqs = service.hubFaq;
  faqBlock = `<div class="mb-5"><h2 class="h5 mb-3">Întrebări frecvente</h2>${faqDetails(faqs)}</div>`;
}
...
if (faqs.length) jsonldExtra.push(schema.faqPage(faqs));
```

`service.faqPool` is read only at `pages.js:410`, inside the **locality-leaf** builder.
Verified: **`hubFaq` is absent/empty on all 12 services**, and `grep -c '<details'` returns **0 on
all 12 built hub pages**. So **no service hub on the site has an FAQ block or `FAQPage` schema.**

For the 8 leaf-bearing services this is merely a missed hub feature. For the **4 `hubOnly`
services** it means the authored FAQ content **is never published anywhere on the site**. For
`topografie-constructii` that is 6 entries answering exactly the construction-buyer questions —
verbatim from `services.json`:

1. *"Ce lucrări topografice cere un șantier obișnuit?"*
2. *"Lucrați cu firme de construcții pe bază de contract?"*
3. *"Ce precizie au trasările?"*
4. *"Faceți calcul de volume pentru decontarea terasamentelor?"*
5. *"Ce este documentația as-built și cine o cere?"*
6. *"Monitorizați tasări sau deformații în timp?"*

Entry 6 is the **only** place in our data where the words *tasări* and *deformații* appear — the
exact terms `pdproiectsurveyor.ro` uses ("Monitorizarea deformărilor și tasărilor"). Entry 3
introduces *proces-verbal*, entry 4 *calcul de volume*, entry 1 *șantier* framing. Publishing these
roughly **doubles the page's content and adds the missing vocabulary using text Aurel already
approved** — no new claims, no new numbers, no policy exposure.

This is written data being thrown away. Flagging to the chair as a generator fix, not a content
task. It is a data/lib change only (`generator/data/services.json` + `generator/lib/pages.js`),
never `docs/`. Hub pages carry only the size gate (18.3 KB of a 122,880-byte hub cap), so **there
is no demotion risk**.

---

## 5. GAP ANALYSIS — confidence-tagged (SOP Step 5)

| # | Gap | Confidence | Effect | Evidence |
|---|---|---|---|---|
| G1 | **No Alba Iulia surface exists for this service.** 6/6 competitors name Alba Iulia; our page names it 0 times. 3 of 4 queries are Alba Iulia-anchored and we are absent from all 3. | **HIGH** | **moves rankings** | 6/6 mechanically checked; our count grepped = 0 |
| G2 | **Missing construction-site query vocabulary.** `topografiealba.ro` ranks #3 on `topograf santier alba iulia` on ~500 words whose only distinguishing asset is the phrase set *"urmărire de șantier, monitorizări volume, trasare limite, rețele de nivelment, PAC, PUZ, PUD"*. None of those phrases exist on our page. | **HIGH** | **moves rankings** | verbatim from the ranking page; grep on ours = 0 for all 7 |
| G3 | **6 authored FAQ entries are unpublished** because `buildServiceHub` reads `hubFaq` (empty everywhere) instead of `faqPool`. 0/6 competitors have an FAQ, so this is also a differentiator. | **HIGH** | **table stakes + moves rankings** (adds G2's vocabulary via approved text) | source-verified at `pages.js:410` vs `:531`; `<details>` = 0 on all 12 hubs |
| G4 | **No named individual surveyor.** 4/6 competitors name one; cadastrumaxim photographs him. | **HIGH** | **table stakes** | 4/6 counted |
| G5 | **No named reference projects.** 3/6 have them; TBL names the A7 motorway and specific industrial parks. Our "1052+ proiecte finalizate" is an unverifiable counter. | **MEDIUM** | table stakes | 3/6 |
| G6 | **Shortest page in the cohort** (452 total / 194 gated vs 320–3,000). | **LOW** | correlational — length correlates with rank without causing it (SOP §7). Do not treat word count as a target; it is a by-product of G2+G3. | measured |
| G7 | **No on-page testimonials.** 1/6 has them — and that one is #1 on both Alba Iulia queries. n=1. | **LOW** | table stakes | 1/6 |
| G8 | **County hub is silent on this service** — one nav-list link, generic anchor text, no construction content. | **MEDIUM** | moves rankings (W3 anchor-text hypothesis) | grepped `docs/zone/alba/index.html` |
| G9 | **We are not in either Alba Iulia map pack** (6 businesses on topc-q2, 3 on topc-q4, all Alba Iulia addresses; ours is Aiud). | **n/a** | **NOT ADDRESSABLE BY PAGE CONTENT — SOP §3 Step 1 and §6.** No page change is proposed. Review growth (D11) is the only lever, and it is a CEO action. | capture |

### NOT gaps — where we already match or beat the cohort

- **Price.** 0/6 publish a figure on this service. Our `"ofertă per proiect, în funcție de etape și
  durată"` is exactly the cohort norm. **SOP §0.2 costs us nothing here** — unlike the
  `intabulare` family where necesit.ro and brig.ro publish ranges.
- **Duration.** 0/6 publish a turnaround figure. Softest claims are gistopocad's *"realizate
  rapid, eficient"* and cadastrumaxim's *"in timp scurt"* / *"promptitudine"*. Our forbidden-claims
  rule creates **no competitive disadvantage on this service.**
- **ANCPI authorization number.** 0/6 publish one. Publishing ours (CEO question 1) would make us
  the **only** page in this cohort with it — an advantage, not a catch-up.
- **Numbered process** (we 5, cohort 0/6), **structured data** (we 7 types, cohort 0/6),
  **WhatsApp** (we 6 links, cohort 0/6), **years of experience** (25+ vs max 9), **HTTPS +
  diacritics + mobile** — all already ahead.

---

## 6. CONTENT SPEC (SOP Step 6)

```markdown
## topografie-constructii — county + city (Alba / Alba Iulia)
- Target queries: topografie constructii alba (county) · topografie constructii alba iulia (city) ·
  topograf santier alba iulia (city) · topografie constructii aiud (town, ALREADY #3)
- Our current position / page served / page that should be served:
  - topc-q3 Aiud: #3 · served `/servicii/topografie-constructii/` · CORRECT · no routing defect
  - topc-q1 / topc-q2 / topc-q4: ABSENT · no page served · **correct page does not exist**
- Surveyor cohort analysed (N=6): pdproiectsurveyor · cadastrumartin · totalbusinessland ·
  topografiealba · gistopocad · cadastrumaxim. All six ranked with a company homepage.
- Aggregator share: 3/9 · 3/10 · 9/10 · 5/10
- SHORTFALL: topc-q3 surveyor cohort = 1 (ours). No competitor surveyor site in that top 10.

- GAPS (ranked, confidence-tagged):
  1. [HIGH][moves-rankings]  No Alba Iulia surface exists for this service (G1)
  2. [HIGH][moves-rankings]  Construction-site query vocabulary absent (G2)
  3. [HIGH][table-stakes+]   6 authored FAQ entries unpublished — generator defect (G3)
  4. [HIGH][table-stakes]    No named individual surveyor (G4)
  5. [MEDIUM][moves-rankings] County hub silent on this service, generic anchor text (G8)
  6. [MEDIUM][table-stakes]  No named reference projects (G5)
  7. [LOW][table-stakes]     No testimonials (G7)
  8. [LOW][—]                Shortest page in cohort (G6) — by-product, not a target

- CONTENT SPEC — what the page must contain:
  - **Section: Întrebări frecvente** — render the 6 existing `faqPool` entries verbatim, emit
    `FAQPage` JSON-LD. Data source: `generator/data/services.json → topografie-constructii.faqPool`.
    Already-approved text; adds *tasări*, *deformații*, *calcul de volume*, *proces-verbal*,
    *precizie centimetrică*, *contract de șantier*. Closes G3 and roughly half of G2 with zero new
    claims. Requires the `pages.js:531` fix in §4.
  - **Section: Lucrări topografice pe șantier** — an explicit service list using the buyer's own
    vocabulary. Must name: urmărire de șantier · trasare axe și limite · rețele de nivelment ·
    verificări de cote pe etape · calcul volume terasamente · monitorizare tasări și deformații ·
    documentație as-built · plan de amplasament · relevee · profile topografice · asistență
    topografică pentru execuție. Data source: `services.json` (new field, e.g. `workList[]`);
    the register already exists in `hubIntro` and `process` — this makes it scannable and
    machine-readable rather than buried in one paragraph.
  - **Section: PAC / PUZ / PUD** — the documentation-support framing that topografiealba.ro and
    cadastrumartin.ro both carry (cadastrumartin lists "DOC. AUTORIZATIE DE CONSTRUIRE – PAC" in
    its acte necesare). Describes what a topographer supplies for each. **Capability description
    only** — approved under CEO ruling 0.2 §5. **No durations, no fee figures, no legal deadlines.**
  - **Section: Cine vine la măsurătoare** — named surveyor + title. **BLOCKED** pending CEO
    question 1 (ANCPI seria/număr/categoria). Leave the marked slot; never invent a number.
  - **Section: Acte necesare** — expand from 3 items toward cadastrumartin's per-work-type shape
    (proiect tehnic, autorizație de construire, plan de amplasament, plan de trasare/coordonate,
    proces-verbal de predare a amplasamentului). Data source: `services.json → documents[]`.
  - **County/city surface** — the cheapest structural fix for G1. Two options for the chair:
    (a) extend W1 to emit `/servicii/topografie-constructii/alba/` for the 4 `hubOnly` services, or
    (b) name Alba Iulia, Sebeș, Blaj, Aiud, Cugir and Ocna Mureș in a coverage block on the
    existing hub. (b) is one data field; (a) is the real fix. **Neither is proposed for the map
    pack** — that is G9 and it is not addressable by page content.
  - **Anchor-text upgrade on `docs/zone/alba/index.html`** — "Topografie construcții în județul
    Alba" instead of "Topografie construcții" (W3(a), hub-only, gate-free).

- DATA REQUIRED FROM GENERATOR:
  - EXISTS: `hubIntro`, `process[5]`, `documents[3]`, `priceRange`, `related[3]`, **`faqPool[6]`
    (present but unreachable from the hub builder)**
  - MISSING: `hubFaq` (empty on all 12 services — the field the hub actually reads);
    a construction work list; a coverage/locality block for `hubOnly` services;
    ANCPI authorization number (CEO-blocked); named reference projects.
  - CODE CHANGE REQUIRED: `generator/lib/pages.js:531` — fall back to `faqPool` when `hubFaq` is
    absent, mirroring the leaf builder at `:410`. Affects all 12 hubs.

- BLOCKED BY POLICY (SOP §0.2 — recorded, NOT actioned):
  - Nothing. **This service has no policy-blocked gap.** 0/6 competitors publish a price for
    construction topography and 0/6 publish a turnaround figure, so the forbidden items cost us
    nothing here. Recorded for the record: gistopocad *"Preturile sunt calculate pentru fiecare
    proiect in parte"*; cadastrumaxim *"Costurile se calculeaza in functie de specificul lucrarii"*
    + a **10% site-visitor discount**; TBL/pdproiectsurveyor/topografiealba/cadastrumartin: silent.
  - The only CEO-blocked item is the ANCPI authorization number (question 1) — blocked by
    *absence of data*, not by policy.

- ROUTING DEFECT: **NO.** servedPage == correctPage on the single query where we appear.
  The defect on this service is **INVENTORY**: on 3 of 4 queries `correctPage` does not exist.
```

---

## 7. What this does not establish

Six pages, four queries, one geography, one day. Every pattern above is **correlational**.

The strongest single counter-example is inside the cohort: **gistopocad.3x.ro ranks #5/#5/#4 on a
free 3x.ro subdomain that refuses HTTPS entirely, in us-ascii with no diacritics, with typos in its
own service list, 320 words and no structured data.** Meanwhile cadastrumaxim.ro — 2,800 words, a
named and photographed engineer, 25+ service pages and two map-pack slots — ranks #9 twice.
Whatever orders these results, on-page completeness is not the dominant term. Domain age and
authority are the obvious untested factors, and no page edit touches them.

What *is* established mechanically, and is worth acting on regardless of ranking effect:
we authored six construction-specific FAQ answers and publish none of them; our page is the only
one in the cohort that never says "Alba Iulia"; and three of the four queries have no page of ours
to serve at all.

**Measurement gate 2026-08-19 (GSC):** position and impressions for topc-q1…q4; which URL is served
for each; whether `/servicii/topografie-constructii/` holds #3 on the Aiud query; index coverage of
the hub. Nothing here is promoted site-wide on the strength of this analysis alone.
