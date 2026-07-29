# Competitor extraction — `intabulare-teren`

**Date 2026-07-29 · SOP-serp-research.md Steps 3–5 · browser-free (WebFetch only)**
**Source SERPs:** `research/seo-2026-07/serp/intabulare-teren-serp.md` (4 queries, complete)
plus Q4 of `research/seo-2026-07/serp/CAPTURES-2026-07-29.md` (`intabulare teren Alba Iulia`) —
the same service, captured in the prior session.

Competitor prices and durations below are **intelligence only**. SOP §0.2 forbids us publishing
turnaround/duration claims and the exact ANCPI tariff. The hedged orientative range we already
publish stays (CEO ruling 2026-07-29).

---

## 0. Cohort construction — and the shortfall

SOP §3 Step 3 asks for the top 3–5 **surveyor** results per query. The `intabulare-teren` SERPs do
not contain them.

| Query | Organic results | Directory + marketplace | Total non-surveyor | Third-party surveyor results |
|---|---|---|---|---|
| `intabulare teren alba` (ter-q1-pc) | 9 | **8/9** | 8/9 | **1** — cadastrumaxim.ro |
| `intabulare teren extravilan alba iulia` (ter-q2alt-pc) | 9 | 6/9 | **8/9** (+2 government) | **0** |
| `intabulare teren aiud` (ter-q3-pc) | 9 | 5/9 | **8/9** (+1 gov, +1 news, +1 Facebook) | **0** |
| `intabulare teren mostenire alba` (ter-q4-pc) | 9 | 5/9 | **8/9** (+2 blog, +1 forum) | **2** — cadastrumaxim.ro, startcad.ro |
| `intabulare teren Alba Iulia` (prior session, Q4) | 9 | 7/9 | 8/9 (+1 gov) | **1** — cadastrumaxim.ro |

**SHORTFALL, RECORDED PER SOP:** the target is 3–5 surveyor pages per query. Actual is
**1, 0, 0, 2, 1**. Across all five `intabulare-teren` queries the entire third-party surveyor
cohort is **3 URLs on 2 domains**, and only **one domain (cadastrumaxim.ro) is in Alba county**.
The other (startcad.ro) is a Constanța firm ranking on a national informational article with
Google explicitly printing *"Lipsesc: alba"*.

**No padding with directories.** Rows 1–2 and 4–9 of these SERPs are necesit.ro, intabulari24.ro,
firmecadastru.ro, birou-cadastru.com, cadastru24.ro, efunciara.ro, expert24.ro, olx.ro,
notariate.ro — all on the SOP skip list. Their snippets are recorded as intelligence in §4, never
as consensus.

**Consequence for the consensus method:** with n=2 domains there is no "surveyor consensus" on
this service. Every finding below is stated as *what the one ranking local surveyor does*, not as
a pattern. Confidence is capped at MEDIUM for anything derived from the cohort, and the
aggregator-share evidence — which is 5-for-5 uniform — carries more weight than the cohort does.

**Aggregator share summary: 89% of organic results (32 of 36 across four fresh queries) are
non-surveyor.** This is the single most robust number in this file, and it means the query family
is winnable with a genuine service page: there is almost nothing to out-write.

---

## 1. Cohort page — cadastrumaxim.ro (homepage)

```json
{
  "url": "https://cadastrumaxim.ro/",
  "domain": "cadastrumaxim.ro",
  "pageType": "surveyor",
  "rankedFor": [
    {"queryId": "ter-q1-pc", "rank": 3},
    {"queryId": "prior-Q4 intabulare teren Alba Iulia", "rank": 3},
    {"queryId": "prior-Q1 cadastru si intabulare Alba Iulia", "rank": 2}
  ],
  "wordCount": 1200,
  "headingOutline": [
    {"level": 1, "text": "CADASTRU ALBA - TOPOGRAF MAXIM EMANUEL - BIROU CADASTRU MAXIM"},
    {"level": 2, "text": "Lucrari - Servicii"},
    {"level": 2, "text": "Extras de Carte Funciara | Extras CF Online | Servicii Topocadastrale Online"},
    {"level": 2, "text": "Informare Clienti"},
    {"level": 2, "text": "Localizare pe Harta"},
    {"level": 2, "text": "Contact"},
    {"level": 2, "text": "Carte de Vizita Online"},
    {"level": 2, "text": "Contacteaza-ne"},
    {"level": 2, "text": "Da-ne un Like!"},
    {"level": 2, "text": "Noutati!"},
    {"level": 2, "text": "Calendar"}
  ],
  "sectionsPresent": ["bun venit", "lista 25 servicii", "extras CF online", "galerie 32 imagini",
                      "informare clienti / program", "harta Google", "contact", "carte de vizita online",
                      "noutati", "calendar", "contor vizitatori"],
  "questionsAnswered": [
    "Ce lucrari faceti? (lista de 25 servicii, fiecare cu pagina proprie)",
    "Unde sunteti? (Str. Septimius Severus nr. 55, Alba Iulia — la 4 numere de OCPI Alba)",
    "Cand pot veni? (programare obligatorie pentru lucrari noi; extrase fara programare; predare acte 9:00-13:00)",
    "Cine ma serveste? (Ing. Emanuel MAXIM, cu fotografie)",
    "Pot trimite actele online? (da, pe email, pentru verificare)"
  ],
  "priceDisclosure": "none",
  "priceValues": "Niciun pret pe pagina. Formula: \"Costurile se calculeaza in functie de specificul lucrarii, de aceea este necesar sa ne contactati\". Singura cifra comerciala: \"10% reducere la orice tip de lucrare\" pentru vizitatorii site-ului.",
  "durationClaim": "Nicio cifra. Doar afirmatii calitative: \"servicii de calitate efectuate in timp scurt la preturi avantajoase\"; \"Stim ca timpul e scump! Pregatiti sa fim unde este nevoie cand este nevoie!\"",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": true,
                   "reviews": false, "yearsExperience": true, "portfolio": true,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "Telefon-first, majuscule. \"Sunati acum - 0775 617 204\"; \"VA RUGAM SA VA PROGRAMATI APELAND: 0775 617 204\"; \"Contacteaza-ne!\"; formular sendmessage.php. Fara buton vizual, fara WhatsApp.",
  "localSpecificity": "generic",
  "whatTheyDoBetter": [
    "Named, photographed engineer — Ing. Emanuel MAXIM — as the face of the business, on the page itself, repeatedly.",
    "32-image portfolio carousel: office, survey vehicles, team on site, drone shots, Cetatea Alba Carolina. Visual proof of capability. Our content region has ZERO images.",
    "Physical proximity as a stated asset: Str. Septimius Severus nr. 55, four doors from OCPI Alba. This is F4's proximity advantage made explicit in copy.",
    "Concrete operational detail that reads as a real office: appointment policy, document-handover window 9:00–13:00, free coffee while you wait, 4x4 fleet, drones, 'Aparitii TV'.",
    "Three legal entities named (CADASTRU MAXIM SRL, EMAA SYSTEMS ALBA SRL, BIROU CADASTRU MAXIM SRL) — the same group also holds map-pack rows 2 and 6 in Alba Iulia (39 and 11 reviews).",
    "A second revenue/traffic property, ExtraseCF.ro, linked as a self-service channel."
  ],
  "whatWeDoBetter": [
    "Acte necesare list — they have none on the homepage; we have one on every page.",
    "Process steps — they have none anywhere; we have 6.",
    "FAQ — none; we have 5-6 per page with FAQPage schema.",
    "Structured data — they emit NONE. We emit LocalBusiness + BreadcrumbList + Service + FAQPage.",
    "Price transparency — they refuse to publish anything; we publish a hedged 900–2.500 lei range. (See §5: this is our advantage, not a gap.)",
    "Named locality targeting — their page names Alba Iulia and 'Jud. Alba si imprejurimi'; we name 78 Alba UATs and their satellite villages.",
    "WhatsApp — they have none. Phone and a PHP form only.",
    "The page is a 2000s vBulletin/CMS template. Mobile behaviour, heading semantics and internal linking are all weaker than ours."
  ]
}
```

---

## 2. Cohort page — cadastrumaxim.ro, service page "Intabulare Imobil"

**Note on the URL.** The SERP capture recorded `cadastrumaxim.ro/content/4-intabulare-imobi`; that
path 404s. The real URL, resolved from the homepage markup, is
`https://cadastrumaxim.ro/content.php?4-intabulare-imobi`. Correction recorded for the audit trail.

```json
{
  "url": "https://cadastrumaxim.ro/content.php?4-intabulare-imobi",
  "domain": "cadastrumaxim.ro",
  "pageType": "surveyor",
  "rankedFor": [{"queryId": "ter-q4-pc", "rank": 4}],
  "wordCount": 585,
  "headingOutline": [
    {"level": 1, "text": "Intabulare Imobil"},
    {"level": 2, "text": "Intabulare Imobil"},
    {"level": 3, "text": "INTABULARE IMOBIL INTRAVILAN"},
    {"level": 3, "text": "INTABULARE IMOBIL EXTRAVILAN"},
    {"level": 2, "text": "Lucrari - Servicii"},
    {"level": 2, "text": "Contacteaza-ne"},
    {"level": 2, "text": "Noutati!"},
    {"level": 2, "text": "Calendar"}
  ],
  "sectionsPresent": ["definitie intravilan", "acte necesare intravilan (13)",
                      "definitie extravilan", "acte necesare extravilan (13)",
                      "banner reducere 10%", "contact"],
  "questionsAnswered": [
    "Ce este intabularea unui imobil? — \"Documentatie de prima inscriere in cartea funciara a imobilelor din intravilanul localitatilor.\"",
    "Ce acte imi trebuie pentru un teren INTRAVILAN? (13 pozitii)",
    "Ce acte imi trebuie pentru un teren EXTRAVILAN? (13 pozitii, DIFERITE)",
    "De unde iau fiecare act? (Primarie pentru harta CF si schita de punere in posesie; notar; ANAF/impozite pentru certificatul fiscal)",
    "Ce se aplica in cazul meu daca suprafata difera? (declaratie autentica de acord al proprietarului pentru diminuare/majorare)"
  ],
  "priceDisclosure": "none",
  "priceValues": "Niciun pret. Doar \"REDUCERE PENTRU CLIENTII VENITI DE PE SITE!!! ... 10% reducere la orice tip de lucrare!\"",
  "durationClaim": "NONE. Zero mentiuni de termen, zile sau urgenta pe intreaga pagina.",
  "acteNecesare": {"present": true, "itemCount": 26},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": false,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "\"Pentru detalii suplimentare ... va rugam sa ne contactati!\" repetat dupa fiecare sectiune. Telefon 0775 617 204 / 0766 216 570 (Ing. Emanuel MAXIM). Fara WhatsApp, fara buton.",
  "localSpecificity": "none",
  "whatTheyDoBetter": [
    "**INTRAVILAN AND EXTRAVILAN ARE SPLIT INTO TWO SEPARATE DOCUMENT LISTS, 13 ITEMS EACH, AND THE LISTS GENUINELY DIFFER.** This is the single sharpest content difference in the whole file. Our page carries one undifferentiated 5-item list for both cases.",
    "Extravilan-only items we do not mention anywhere: 'Schita de punere in posesie - de la primarie'; 'Adeverinta pentru imobilele situate in zona necooperativizata'; 'Extras de carte funciara SI harta de carte funciara'.",
    "Named legal instruments: 'Regulament la ODG 600/2023 al ANCPI' for intravilan, 'ODG 700/2014' for extravilan. Concrete, checkable, and it signals the author actually works the file. Our pages cite no regulation at all.",
    "Edge cases listed as document rows rather than prose: 'Declaratie autentica de acord proprietar pentru diminuarea/majorarea suprafetei', 'Sentinta judecatoreasca investita cu titlu executoriu prin neapelare', 'Raport de expertiza tehnica', 'Proces Verbal de Vecinatate'. A user with a messy file finds their own case in the list.",
    "Each document row states its issuing authority ('- de la Primarie', 'copie legalizata'), so the reader knows where to go.",
    "26 document rows on a 585-word page — the highest information density per word of anything in the cohort. It ranks #4 on a moștenire query with no FAQ, no schema, no process, no prices and no local names."
  ],
  "whatWeDoBetter": [
    "Process steps (6 vs 0) — they never tell you what happens after you hand over the documents.",
    "FAQ + FAQPage schema (5-6 vs 0).",
    "Any structured data at all (7 @types vs 0).",
    "Locality naming (Aiud + 10 satellite villages, or Alba Iulia + 4, vs zero place names on their page).",
    "Which BCPI office receives the file, with street address — they never say.",
    "Orientative price range — they publish nothing, so a price-seeking searcher gets no answer from them.",
    "WhatsApp with a pre-written message vs a phone number and a request to book an appointment.",
    "Modern responsive template with a real H1; theirs is a forum-CMS page whose H1 duplicates an H2."
  ]
}
```

---

## 3. Cohort page — startcad.ro (informational article on a surveyor domain)

Included because SOP §3 Step 3 classes it as `surveyor` domain, and because it is the only page in
the cohort that targets the **moștenire** intent — the intent Google itself flagged as under-served.
Flagged clearly: **not a local competitor.** StartCad is in Constanța; Google printed
*"Lipsesc: alba"* against this result, i.e. it ranks in Alba **despite** having no Alba relevance.

```json
{
  "url": "https://startcad.ro/succesiune-teren-neintabulat",
  "domain": "startcad.ro",
  "pageType": "surveyor",
  "rankedFor": [{"queryId": "ter-q4-pc", "rank": 8}],
  "wordCount": 700,
  "headingOutline": [
    {"level": 1, "text": "Succesiunea unui teren neintabulat: cum pot intra în legalitate"},
    {"level": 2, "text": "Se poate moșteni un imobil fără cadastru/ intabulare?"},
    {"level": 2, "text": "Ce trebuie să faci pentru a ți se elibera un certificat de moștenitor?"},
    {"level": 2, "text": "Lucrări cadastrale și intabularea terenului"},
    {"level": 3, "text": "Pachet apartament"},
    {"level": 3, "text": "Pachet trasare teren"},
    {"level": 3, "text": "Ce te-ar mai putea interesa:"}
  ],
  "sectionsPresent": ["intro", "se poate mosteni fara cadastru", "acte certificat de mostenitor",
                      "pasi administrativi (primarie / notar / ANAF)", "dupa succesiune (Directia Taxe si Impozite)",
                      "lucrari cadastrale si intabulare", "2 pachete de servicii", "articole conexe", "share social"],
  "questionsAnswered": [
    "Se poate moșteni un imobil fără cadastru/intabulare? — da, succesiunea se dezbate la notar chiar fără cadastru",
    "Ce acte îmi trebuie pentru certificatul de moștenitor? (5 pozitii)",
    "Ce fac după ce am certificatul? — înregistrare la Direcția Taxe și Impozite, apoi topograf",
    "Unde se dezbate succesiunea? — la notarul din localitatea ultimului domiciliu al defunctului",
    "De ce am nevoie de certificat ANAF? — dovada că nu există datorii la stat"
  ],
  "priceDisclosure": "none",
  "priceValues": "Niciun pret. Doar \"la preț avantajos\" in bannerul promotional.",
  "durationClaim": "NONE.",
  "acteNecesare": {"present": true, "itemCount": 5},
  "processSteps": {"present": true, "stepCount": 7},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": false,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "\"Vezi detalii\" pe carduri de pachet; \"Contactează-ne\"; tel:+40731897041 repetat de 4 ori.",
  "localSpecificity": "generic",
  "whatTheyDoBetter": [
    "**The whole page is one intent, answered end to end: land + inheritance + no cadastre.** Ours answers it in a single FAQ accordion, collapsed, below three other sections.",
    "The H1 is the user's sentence, not a service name: 'Succesiunea unui teren neintabulat: cum pot intra în legalitate'.",
    "It sequences the WHOLE journey across institutions the user does not know are involved — primărie (certificat de atestare fiscală) → notar → ANAF (certificat de datorii) → certificat de moștenitor → Direcția Taxe și Impozite → topograf → OCPI. Our process section starts at 'discutăm pe WhatsApp' and never mentions notar, ANAF or Direcția Taxe și Impozite.",
    "It names the tax-office registration step after succession, which is the step people actually forget.",
    "Article-to-service internal linking: /cadastru-si-intabulare/, /alipirea-si-dezlipirea-terenurilor/, plus related articles ('Preț intabulare casă veche', 'Apartamente fără cadastru')."
  ],
  "whatWeDoBetter": [
    "Local relevance — Google literally marks this result 'Lipsesc: alba'. We can be the page that is both about moștenire AND about Alba.",
    "FAQ + schema (they have neither).",
    "Named BCPI office and its address.",
    "Price range (they publish none).",
    "WhatsApp-first contact.",
    "Author/date/authority signals are absent on their article; ours carry LocalBusiness with address and geo."
  ]
}
```

---

## 4. Non-cohort intelligence (recorded, NOT used for consensus)

Directories and marketplaces are excluded from consensus per SOP §3 Step 2. What their snippets
tell us about **what the customer has already been told before reaching us**:

| Source | Type | Intelligence |
|---|---|---|
| necesit.ro | directory | Publishes a real quoted job in the snippet: **"Tip imobil: Teren intravilan/extravilan; Preț estimat: 4.500 lei"** (7-parcel extravilan case). Elsewhere: intabulare apartament 560–810 lei. |
| notariate.ro | marketplace | Ranks **#3** on `intabulare teren mostenire alba` with a **notary-fee calculator**, rated 4,9 (187). The price-answer slot on the moștenire query is held by a calculator, not by a surveyor. |
| brig.ro | directory | cadastru în Aiud: **336–2.100 RON**. |
| birou-cadastru.com | directory | Ranks **#1** on `intabulare teren mostenire alba` with a snippet that is a **bare acte-necesare list** (titlu de proprietate copie legalizată, extras CF, copie hartă CF, acte vechi…). Same play as cadastrumaxim's document page. |
| expert24.ro | directory | Claims **"25 profiluri active"** for Aiud — a town whose map pack shows two private surveyors. Inflated inventory; not a real competitor count. |
| cadastru24.ro | marketplace | "Lista lucrari de Cadastru si Intabulare Teren Intravilan in Alba" — job-board format, ranks on 3 of 4 queries. |
| portal.apulum.ro | government | **2 of 9 results on `intabulare teren extravilan alba iulia`** are Primăria Alba Iulia acte-necesare pages, including a "Confirmare intravilan/extravilan" document. Fetched: the portal serves a paginated search index, so the individual form pages are not directly readable — but their presence twice in one top-10 is the signal. |
| aiud.ro + alba24.ro | government + news | **2 of 9 on `intabulare teren aiud`** are about free systematic (PNCCF) registration. Part of this query's demand is "do I have to pay for this at all?". |
| avocatnet.ro | forum | A **2017** forum thread ranks #9 on the moștenire query. Nine-year-old UGC outranking every surveyor is a direct measure of how thin the supply is. |

**Two structural readings, both robust:**

1. **The document list is the format that ranks on this service.** cadastrumaxim's #4 page is a
   document list. birou-cadastru's #1 snippet is a document list. Two of nine Alba Iulia results
   are a city hall's document list. Nothing else recurs across page types this way.
2. **Google padded the moștenire SERP with three county-agnostic pages** (`Lipsesc: alba` on
   results 5, 8 and 9). It could not find enough pages that are both about inheritance-based
   registration and about Alba. That is a literal statement of an unfilled slot.

---

## 5. OUR page, scored on the identical schema

Per SOP §3 Step 4, both the page Google **serves** and the page it **should** serve.

### 5.1 `ter-q3-pc` — `intabulare teren aiud` · **servedPage == correctPage** · rank **#1**

```json
{
  "url": "https://expert-intabulare.ro/servicii/intabulare-teren/alba/aiud",
  "file": "docs/servicii/intabulare-teren/alba/aiud.html",
  "domain": "expert-intabulare.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "ter-q3-pc", "rank": 1}],
  "wordCount": 908,
  "headingOutline": [
    {"level": 1, "text": "Intabulare teren în Aiud (Alba)"},
    {"level": 2, "text": "Unde se depune dosarul"},
    {"level": 2, "text": "Despre lucrări în Aiud"},
    {"level": 2, "text": "Acte necesare (orientativ)"},
    {"level": 2, "text": "Cum decurge procesul"},
    {"level": 2, "text": "Particularități OCPI în județul Alba"},
    {"level": 2, "text": "Întrebări frecvente — intabulare teren în Aiud"},
    {"level": 2, "text": "Contact rapid"},
    {"level": 2, "text": "Alte servicii în Aiud"},
    {"level": 2, "text": "Intabulare teren în localități apropiate"},
    {"level": 2, "text": "Vezi și"},
    {"level": 2, "text": "Ai o situație asemănătoare?"}
  ],
  "sectionsPresent": ["lead + WhatsApp nudge", "distanta/birou", "unde se depune dosarul + sate apartinatoare",
                      "despre lucrari", "acte necesare (5)", "cum decurge procesul (6)", "pret orientativ + disclaimer",
                      "particularitati OCPI Alba", "FAQ (6)", "contact rapid", "alte servicii", "localitati apropiate",
                      "vezi si", "CTA final"],
  "questionsAnswered": [
    "Unde se depune dosarul? — BCPI Aiud, Str. Cuza Vodă nr. 14",
    "Ce acte îmi trebuie? (5, nediferentiate intravilan/extravilan)",
    "Cum decurge? (6 pasi, de la WhatsApp la extrasul de CF)",
    "Cât costă? — 900 – 2.500 lei orientativ + tarifele ANCPI",
    "E nevoie de intabulare pentru arendă sau APIA?",
    "Cât durează? (VEZI §7 — CONFLICT DE POLITICĂ)",
    "Pot intabula un teren moștenit dacă succesiunea nu e făcută?",
    "Ce fac dacă vecinii nu sunt de acord cu limita?",
    "Terenul e la registrul agricol dar fără CF. E o problemă?"
  ],
  "priceDisclosure": "range",
  "priceValues": "\"Preț orientativ: 900 – 2.500 lei, orientativ, în funcție de suprafață și acte\" + priceDisclaimer. Sursa: generator/data/services.json:213.",
  "durationClaim": "PREZENT — \"De regulă câteva săptămâni de la depunerea dosarului complet la BCPI Aiud … Termenul poate fi redus contra taxei de urgență ANCPI.\" Pe 106 pagini intabulare-teren. Vezi §7.",
  "acteNecesare": {"present": true, "itemCount": 5},
  "processSteps": {"present": true, "stepCount": 6},
  "faq": {"present": true, "questionCount": 6},
  "schemaTypes": ["LocalBusiness", "PostalAddress", "GeoCoordinates", "BreadcrumbList", "ListItem",
                  "Service", "AdministrativeArea", "FAQPage", "Question", "Answer"],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": false,
                   "phoneVisible": true, "whatsapp": true},
  "ctaStyle": "WhatsApp-first cu mesaj precompletat, 28 referinte WhatsApp, 5 x tel:0741478540, program 9:00-17:00. Fara formular (regula casei).",
  "localSpecificity": "deep",
  "notes": [
    "namedPerson: 'Fleser Aurel' apare de 4 ori in pagina dar de 0 ori in regiunea de continut — doar in header/footer/JSON-LD.",
    "ZERO <img> in regiunea de continut.",
    "Nume de locuri in continut: Aiud + 10 sate apartinatoare + Rădești, Mirăslău, Lopadea Nouă, Livezile, Hopârta, Stremț, Teiuș, Unirea + BCPI Aiud, Alba Iulia, Blaj, Câmpeni, Sebeș. Nicio pagina din cohorta nu se apropie.",
    "META FIXAT: 'Topograf autorizat ANCPI, birou chiar în Aiud.' Defectul 12.1 din facts.md (\"aprox. 2 km de Aiud\") NU mai este in build-ul curent — snippet-ul Google capturat este cache vechi. Aiud este 1 din 222 leaf-uri fara clauza de distanta."
  ]
}
```

**ROUTING DEFECT: no.** This is the one `intabulare-teren` query where routing works.

### 5.2 `ter-q2alt-pc` — `intabulare teren extravilan alba iulia` · rank **#7** · **ROUTING DEFECT: YES**

| | servedPage | correctPage |
|---|---|---|
| File | `docs/servicii/intabulare-teren/alba/sibot.html` | `docs/servicii/intabulare-teren/alba/alba-iulia.html` |
| Locality | Șibot, commune, **66 km from Aiud, ~40 km from Alba Iulia** | Alba Iulia, county seat — flagship #2 |
| Meta shown in Google | *"Intabulare teren în Șibot: acte, pași, prețuri orientative. Topograf autorizat ANCPI, **aprox. 66 km de Aiud**. Tel. 0741 478 540."* | *"… **aprox. 39 km de Aiud**. …"* |
| wordCount | 948 | 839 |
| H1 | Intabulare teren în Șibot (Alba) | Intabulare teren în Alba Iulia (Alba) |
| acteNecesare | 5 (identical list) | 5 (identical list) |
| processSteps | 6 (identical) | 6 (identical) |
| faq | 6 | 5 — **and a different 5**, drawn from the same pool |
| price | 900 – 2.500 lei | 900 – 2.500 lei |
| BCPI named | BCPI Sebeș-competent office | **BCPI Alba Iulia, Str. Septimius Severus nr. 59** |
| localSpecificity | deep (but for the wrong place) | deep |
| schemaTypes | identical 7 @types | identical 7 @types |

**The two pages score essentially the same on every field in the schema.** That is the defect
stated in schema terms: there is no measurable difference for Google to choose on, so it chooses
arbitrarily. `sectionsPresent`, `processSteps`, `acteNecesare`, `priceValues`, `schemaTypes` and
`ctaStyle` are byte-identical across all 222 leaves of this service; only the lead paragraph,
`localNote`, the villages list, the BCPI name, the distance number and the FAQ selection differ.

**Extra cost of the wrong page here:** the query says **extravilan**, and neither page splits
intravilan from extravilan anywhere. cadastrumaxim's #4 page does exactly that (§2). The correct
page is not only mis-routed, it is also not the best available answer to the modifier.

**Contrast worth recording:** the Alba Iulia page opens with *"Lucrăm de peste 25 de ani în județul
Alba, iar Alba Iulia este una dintre zonele pe care le cunoaștem bine"* — a firm-about-us opener.
The Aiud page (our #1) opens with the searcher's own query: *"Căutați „intabulare teren Aiud"?
Sunteți exact unde trebuie."* Aiud also leads with a WhatsApp nudge; Alba Iulia leads with a free
first-assessment offer. Correlational only, n=1 each — recorded, not proposed as a rule.

### 5.3 `ter-q1-pc` / `ter-q4-pc` — county tier · **NOT RANKING** · `correctPage` **DOES NOT EXIST**

Verified on disk: `docs/servicii/intabulare-teren/alba/index.html` **does not exist**. Chair verdict
W1 is still open. The two nearest existing pages both score poorly for a county `intabulare teren`
query:

```json
{
  "url": "docs/zone/alba/index.html",
  "pageType": "surveyor (hub)",
  "rankedFor": [],
  "wordCount": 3803,
  "headingOutline": [
    {"level": 1, "text": "Cadastru și topografie în județul Alba"},
    {"level": 2, "text": "OCPI Alba"}, {"level": 2, "text": "Contact rapid"},
    {"level": 2, "text": "Alte județe"}, {"level": 2, "text": "Localități din județul Alba"},
    {"level": 2, "text": "Ai o situație asemănătoare?"}
  ],
  "sectionsPresent": ["OCPI Alba", "contact", "alte judete", "78 acordeoane de localitate", "CTA"],
  "priceDisclosure": "none", "priceValues": "0 aparitii ale cuvantului 'lei' pe intreaga pagina",
  "durationClaim": "",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": ["LocalBusiness", "PostalAddress", "GeoCoordinates", "BreadcrumbList", "ListItem"],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": false,
                   "phoneVisible": true, "whatsapp": true},
  "localSpecificity": "deep",
  "fatalForThisQuery": [
    "H1 and title do not contain 'intabulare teren' at all — they say 'Cadastru și topografie'.",
    "No Service schema, no FAQ, no acte necesare, no process, no price. On every content field the leaf pages beat it.",
    "The 78 <details> accordions render as 'Abrudaprox. 66 km', 'Blajaprox. 29 km' — the page's dominant repeated token is a distance from Aiud.",
    "It is the hub for ALL 12 services, so it can never be the best answer to a single-service county query."
  ]
}
```

```json
{
  "url": "docs/servicii/intabulare-teren/index.html",
  "pageType": "surveyor (hub)",
  "rankedFor": [],
  "wordCount": 800,
  "headingOutline": [
    {"level": 1, "text": "Intabulare teren"},
    {"level": 2, "text": "Acte necesare (orientativ)"}, {"level": 2, "text": "Cum decurge procesul"},
    {"level": 2, "text": "Contact rapid"}, {"level": 2, "text": "Servicii conexe"},
    {"level": 2, "text": "Intabulare teren — localități acoperite"},
    {"level": 3, "text": "Județul Alba"}, {"level": 3, "text": "Județul Cluj"},
    {"level": 3, "text": "Județul Mureș"}, {"level": 3, "text": "Județul Sibiu"},
    {"level": 3, "text": "Județul Hunedoara"},
    {"level": 2, "text": "Ai o situație asemănătoare?"}
  ],
  "acteNecesare": {"present": true, "itemCount": 5},
  "processSteps": {"present": true, "stepCount": 6},
  "faq": {"present": false, "questionCount": 0},
  "priceDisclosure": "range",
  "schemaTypes": ["LocalBusiness", "PostalAddress", "GeoCoordinates", "BreadcrumbList", "ListItem",
                  "Service", "AdministrativeArea"],
  "localSpecificity": "generic",
  "fatalForThisQuery": [
    "Right service, wrong geography — it is national and lists 5 counties side by side. Alba is one H3 among five.",
    "No FAQ, no FAQPage schema, unlike every leaf beneath it.",
    "800 words for the parent of 222 leaves that carry ~900 each: the parent is thinner than any of its children, which is the inverse of the hierarchy the chair verdict wants."
  ]
}
```

**ROUTING DEFECT (county tier): structural absence, not mis-selection.** Nothing is served because
nothing exists at the right level. Note ter-q1-pc's own reading: on `intabulare teren alba` Google
rewrote the county token into **Alba Iulia** across all 9 results, so a future service×county hub
will be judged against Alba Iulia city pages.

---

## 6. GAP ANALYSIS — confidence-tagged (SOP §3 Step 5)

Ranked. Confidence is capped at MEDIUM for cohort-derived findings because n=2 domains.

1. **[MEDIUM][moves-rankings] `intravilan` vs `extravilan` are one undifferentiated 5-item list on
   our pages; the only local surveyor that ranks splits them into two 13-item lists.**
   Evidence: cadastrumaxim's document page ranks #4 on a query it has no other claim to; birou-cadastru
   ranks #1 with a bare document list; a query we rank #7 on literally contains the word `extravilan`.
   Mechanically checkable. Table stakes at minimum, plausibly ranking-moving on the extravilan modifier.

2. **[MEDIUM][moves-rankings] No page on the site is both about `moștenire` and about Alba.**
   Google printed **"Lipsesc: alba"** on 3 of 9 results and padded the top 10 with two national blogs
   and a 2017 forum thread. We are absent. Our only moștenire content is one collapsed FAQ accordion.
   The winning substance is documented and needs no prices and no durations: certificat de moștenitor,
   succession not yet debated, titlu de proprietate in a dead parent's name, which BCPI receives the file.

3. **[HIGH][moves-rankings] The county tier has no page.** Verified on disk. 2 of 4 fresh queries are
   county-tier and we rank on neither. `/zone/alba/` cannot serve them (H1 says "Cadastru și
   topografie", no Service schema, no FAQ, no acte, no price) and `/servicii/intabulare-teren/` is
   national and thinner than its own children. HIGH because the absence is a fact, not an inference —
   but per SOP §7 and chair §5, *that building the hub changes the ranking remains a hypothesis*.

4. **[HIGH][moves-rankings] Leaf pages are indistinguishable on every schema field.** Șibot and Alba
   Iulia score identically on sectionsPresent, processSteps (6/6), acteNecesare (5/5), priceValues,
   schemaTypes (7/7) and ctaStyle; 221 of 222 leaves carry the same `aprox. N km de Aiud` meta
   template. Mechanically checkable and directly matches the observed wrong-page selection. Confirms
   D1/W2 and D5 (`serviceNotes`) — nothing new to decide, one more independent instance.

5. **[MEDIUM][table-stakes] Our process starts too late.** Ours: 6 steps beginning "Discutăm situația
   pe WhatsApp". StartCad's 7 steps begin at primărie → notar → ANAF → certificat de moștenitor →
   Direcția Taxe și Impozite → topograf → OCPI. For inherited land the user's first three obstacles
   are institutions we never name. Costs nothing, breaks no rule.

6. **[MEDIUM][table-stakes] We cite no legal instrument; the ranking local surveyor cites two.**
   "Regulament la ODG 600/2023 al ANCPI" (intravilan) and "ODG 700/2014" (extravilan). Real,
   verifiable, and it is a competence signal a homeowner reads even without understanding it.
   **Any such citation must be verified against the current ANCPI regulation before publishing —
   it is exactly the class of checkable third-party fact SOP §0 governs.** Do not copy the numbers
   from a competitor's page; look them up.

7. **[MEDIUM][table-stakes] The named, photographed person.** Both cadastrumaxim pages put
   **Ing. Emanuel MAXIM** on the page, with a photograph and a direct mobile number. "Fleser Aurel"
   appears 0 times in our content region. This is chair-verdict B2, **blocked** pending the ANCPI
   authorization number (CEO question 1) — but the name and title do not require the number.

8. **[LOW][table-stakes] Zero images in our content region; they run a 32-slide portfolio** (office,
   4×4 fleet, team on site, drone imagery). Correlational only, and adding images has a real cost
   under `MAX_LEAF_BYTES = 61440` — though at ~28KB there is ~33KB of headroom.

9. **[LOW][no action] Word count is not the gap.** Ours 908 (Aiud) / 839 (Alba Iulia) vs cohort
   1,200 / 585 / 700. The #4 result is 585 words. Length is not what separates us. Recorded so
   nobody proposes padding.

10. **[MEDIUM][table-stakes] No proximity/logistics story in copy.** cadastrumaxim states it is four
    doors from OCPI Alba, gives a document-handover window, an appointment policy, and free coffee.
    Our equivalent — the office is in Aiud, we file at BCPI Aiud in person — is stated well on the
    Aiud page and weakly elsewhere, where distance is framed as a **negative** ("aprox. 39 km de
    Aiud") rather than as coverage.

**BLOCKED BY POLICY — recorded, not actioned:**
- Publishing the **exact ANCPI tariff**. necesit.ro quotes 4.500 lei on a real extravilan job;
  notariate.ro ranks #3 with a fee calculator; brig.ro shows 336–2.100 RON. The price-answer slot
  is real and contested and we do not contest it beyond the hedged range we already publish.
- Any **turnaround or duration** claim about BCPI processing. **Note: the cohort publishes none
  either** — cadastrumaxim states no timeframe on either page, startcad states none. On this
  service SOP §0.2 costs us nothing competitively.
- Inventing any new price figure outside `generator/data/services.json`.
- Any PNCCF year, sector number, parcel count or completion status — even though 2 of 9 results on
  `intabulare teren aiud` are PNCCF pages (aiud.ro #2, alba24.ro #8). Chair D6 already routes this
  to one `/ghid/` article with no per-village claims.

---

## 7. ⚠️ POLICY CONFLICT FOUND IN OUR OWN LIVE CONTENT — escalated, not fixed

Not part of the competitor brief, but found while scoring our page and it bears directly on SOP §0.2.

`generator/data/services.json:217` (intabulare-teren FAQ pool), rendered on **106 live
intabulare-teren pages** including our **#1 result**:

> **"Cât durează intabularea unui teren în Aiud?"** — *"De regulă câteva săptămâni de la depunerea
> dosarului complet la BCPI Aiud, la care se adaugă timpul de măsurătoare și de obținere a actelor
> de la primărie. **Termenul poate fi redus contra taxei de urgență ANCPI.**"*

A parallel instance at `services.json:561` (dezmembrare-alipire) and a third in
`generator/lib/sample-data.js:195`. **"taxei de urgență" appears on 202 pages site-wide.**

SOP §0.2 forbids "any turnaround or duration claim … applied to BCPI processing". "De regulă câteva
săptămâni de la depunerea dosarului complet la BCPI Aiud" is a hedged claim about how fast a
government office works — the exact category named. It is arguably milder than "N zile lucrătoare"
(no number, "de regulă"), and it predates the ruling.

**Not actioned here.** Three reasons: it is outside this agent's territory (SOP §4.1, single writer
per file); `faqPool` sits at ~45% document frequency and the chair upheld the resize ban (D13) —
though an in-place reword is not a resize; and it is a CEO-ruling interpretation, not a research
call. **Escalated to the chair for a ruling: reword, or grandfather it.** CEO question 2 already
asks Aurel for the real figures, which would resolve it either way.

---

## 8. Method limits

- **n=2 surveyor domains.** There is no consensus to compute on this service. Everything in §6 that
  comes from the cohort is one firm's practice, tagged MEDIUM at best.
- **Correlational only.** cadastrumaxim ranks #3–#4 with no schema, no FAQ, no process, no prices,
  no local names and a 2000s CMS. Its ranking is far more likely to come from domain age, a nine-
  year-old business, 39 + 32 + 11 Google reviews across three entities, and an office beside OCPI
  Alba, than from any on-page feature listed above. **Copying its on-page features will not
  reproduce its ranking.** They are worth doing where they serve the user, not as a ranking recipe.
- **The strongest evidence in this file is the aggregator share (89% non-surveyor, 5 of 5 queries),
  not the cohort.** The opportunity is a vacuum, not a rival to beat.
- Nothing here is promoted until the **2026-08-19** GSC gate: position, impressions, **which URL is
  served per query**, and index coverage.
