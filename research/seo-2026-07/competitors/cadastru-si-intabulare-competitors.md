# Competitor extraction — `cadastru-si-intabulare`

**Date:** 2026-07-29 · **Method:** SOP-serp-research.md Steps 3–5 · **Browser: not used.**
**Source SERP:** `research/seo-2026-07/serp/cadastru-si-intabulare-serp.md` (4 queries, complete, no
gaps). Competitor pages fetched with `WebFetch` in parallel; one HTTP-only host fetched with
`curl` after `WebFetch` failed on the forced HTTPS upgrade (documented below).

Competitor prices and durations are recorded as **intelligence about what the customer has already
been told**. They are never a template for our pages (SOP §0.2).

---

## 0. Cohort construction and the shortfall

Directories, marketplaces, government and social results were excluded per SOP §3 Step 2 before
any consensus was computed. Deduped by URL across the 4 queries:

| # | URL | pageType | rankedFor |
|---|---|---|---|
| C1 | `https://cadastrumaxim.ro/` | surveyor | cad-q1 #3, cad-q2alt-pc #2 |
| C2 | `https://cadastrumartin.ro/` | surveyor | cad-q1 #5, cad-q2alt-pc #7 |
| C3 | `https://totalbusinessland.ro/` | surveyor | cad-q1 #9 |
| C4 | `https://topografiealba.ro/` | surveyor | cad-q2alt-pc #3 |
| C5 | `https://pdproiectsurveyor.ro/` | surveyor | cad-q2alt-pc #4 |
| C6 | `http://gistopocad.3x.ro/` | surveyor | cad-q2alt-pc #6 |

**Surveyor cohort size: 6 unique competitor pages.**

### SHORTFALL — recorded, not padded

| Query | Surveyor results in top 10 | Note |
|---|---|---|
| cad-q1 `cadastru si intabulare alba` | **3** (+ours at #7) | at the SOP minimum |
| cad-q2alt-pc `topografi autorizati alba iulia` | **5** | richest cohort |
| cad-q3alt-pc `cadastru sebes` | **0** | **below minimum — nothing to extract** |
| cad-q4-pc `cadastru aiud` | **0** third-party (ours #7 is the only surveyor page) | **below minimum** |

**Two of four queries have a surveyor cohort of ZERO.** No consensus exists for `cadastru sebes`
or `cadastru aiud`; both SERPs are held entirely by directories, extras-CF intermediaries,
government pages and Facebook. Any "what the top results do" statement about those two queries
would be a statement about directories and is therefore not made here.

**Aggregator share (from the capture, unchanged):** 6/10 · 5/10 · 9/10 · 9/10 → **mean 7.25/10.**

### Fetch anomalies (disclose, do not paper over)
- **C6 `gistopocad.3x.ro`** — `WebFetch` upgrades HTTP→HTTPS; the host refuses :443
  (`ECONNREFUSED 89.42.39.160:443`). Fetched over plain HTTP with `curl`. The page is a Microsoft
  Publisher export: content lives inside VML `<v:textbox>` shapes, so heading levels are not
  recoverable — its outline below is reconstructed from the nav labels and visible text.
- Competitor `wordCount` values are **estimates returned by the fetch summariser**, not exact
  token counts. Treat every competitor word count as **LOW confidence**. Our own counts are exact
  (measured on the gated `<!--content:start-->…<!--content:end-->` region).

---

## 1. Competitor extractions — SOP Step 3 schema

### C1 — cadastrumaxim.ro

```json
{
  "url": "https://cadastrumaxim.ro/", "domain": "cadastrumaxim.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "cad-q1", "rank": 3}, {"queryId": "cad-q2alt-pc", "rank": 2}],
  "wordCount": 2300,
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
    {"level": 2, "text": "Calendar"}, {"level": 2, "text": "Da-ne un Like!"}
  ],
  "sectionsPresent": ["services menu (24+ items)", "company narrative", "contact block",
    "client notice / scheduling", "35-image portfolio carousel", "extras-CF online ordering link",
    "map embed", "news + discount offer", "calendar widget", "visitor counter"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "none. States: \"Costurile se calculeaza in functie de specificul lucrarii\"; directs to phone for a quote.",
  "durationClaim": "none. Generic \"timp scurt\" / \"rapiditate\" only — no figure, no SLA.",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": true,
                   "reviews": false, "yearsExperience": true, "portfolio": true,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "\"Contactati-ne!\" → sendmessage.php contact form; two phones (0775 617 204 / 0766 216 570); two mailto addresses; \"VA RUGAM SA VA PROGRAMATI APELAND: 0775 617 204\"; a discount offer for mentioning the site.",
  "localSpecificity": "named-places",
  "whatTheyDoBetter": [
    "Names the engineer (Ing. Emanuel MAXIM) in the H1 itself and shows his photograph.",
    "35-image portfolio of real jobs, captioned 'Masuratori pentru diverse investitii', plus 'mii de imobile intabulate'.",
    "Physical landmark navigation: 'In spatele Stadionului Municipal, langa sediul FC Unirea, pe strada cu OCPI Alba' — proximity to the OCPI office used as a selling point.",
    "Owns the adjacent transactional intent by operating ExtraseCF.ro, capturing the 'extras CF online' searchers that dominate cadastru sebes.",
    "Two phone numbers, both above the fold, plus a stated scheduling instruction."
  ],
  "whatWeDoBetter": ["acte necesare checklist", "process steps", "FAQ", "all structured data",
    "WhatsApp", "per-locality coverage", "current design; theirs carries a visitor counter, a weather widget and a calendar"]
}
```

### C2 — cadastrumartin.ro

```json
{
  "url": "https://cadastrumartin.ro/", "domain": "cadastrumartin.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "cad-q1", "rank": 5}, {"queryId": "cad-q2alt-pc", "rank": 7}],
  "wordCount": 650,
  "headingOutline": [
    {"level": 1, "text": "Birou Cadastru Martin"},
    {"level": 2, "text": "Bun venit!"},
    {"level": 2, "text": "Ati facut alegerea perfecta"},
    {"level": 2, "text": "Peste 9 ani de experienta"},
    {"level": 2, "text": "O echipa tanara de specialisti"},
    {"level": 2, "text": "Dotari si echipamente de ultima generatie"},
    {"level": 2, "text": "Despre noi"},
    {"level": 2, "text": "Actualizare date imobil si plan topo- cadastral"},
    {"level": 2, "text": "Lucrari de prima inscriere (Intabulare)"},
    {"level": 2, "text": "Lucrari speciale de topografie"},
    {"level": 3, "text": "Acte necesare"}
  ],
  "sectionsPresent": ["hero", "6-slide credential carousel", "despre noi",
    "three service cards", "acte necesare index", "footer"],
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
  "ctaStyle": "\"[mai mult]\" read-more links only. No phone on the homepage, no form, no WhatsApp. Weakest CTA in the cohort — and it still ranks #5 and #7.",
  "localSpecificity": "generic",
  "whatTheyDoBetter": [
    "The only cohort member with a per-case-type 'Acte necesare' index — one entry per work type (schimbare categorie de folosință, PAC, scoatere din circuit agricol, notare construcție, alipire/dezlipire, primă înscriere extravilan, primă înscriere intravilan) rather than one flat list. Ours is a single 5-item list that does not vary by case.",
    "Names the engineer: 'Inginer Dipl. Martin Nicolae'.",
    "Concrete experience figure: 'Peste 9 ani de experienta' as its own heading."
  ],
  "whatWeDoBetter": ["everything conversion-side — they publish no phone number on the homepage",
    "process steps", "FAQ", "structured data", "local specificity", "3.5× the word count"]
}
```

### C3 — totalbusinessland.ro

```json
{
  "url": "https://totalbusinessland.ro/", "domain": "totalbusinessland.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "cad-q1", "rank": 9}],
  "wordCount": 3000,
  "headingOutline": [
    {"level": 1, "text": "Total Business Land – servicii de topografie și cadastru, proiectare și construcții, urbanism, arheologie, mediu, resurse minerale"},
    {"level": 2, "text": "Echipă cu experiență la nivel internațional"},
    {"level": 2, "text": "Oferim soluții specifice"},
    {"level": 3, "text": "Topografie și Cadastru"},
    {"level": 4, "text": "Topografie, Geodezie, Cadastru Sistematic și Sporadic"},
    {"level": 3, "text": "Contactează acum un specialist TBL"},
    {"level": 2, "text": "Solicită acum o ofertă"},
    {"level": 2, "text": "Clienții noștri"},
    {"level": 2, "text": "Produsele noastre digitale"},
    {"level": 2, "text": "Evenimente"}
  ],
  "sectionsPresent": ["hero", "8 service cards", "8 detailed solution areas", "about",
    "multi-office contact block", "quote form", "careers", "16 client logos",
    "digital products", "events/news", "footer social"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "none",
  "durationClaim": "none",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": true,
                   "reviews": false, "yearsExperience": true, "portfolio": true,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "\"Solicită o ofertă\" ×8 → mailto:contact@tblgrup.ro; \"Contactează acum un specialist TBL\"; a 5-field quote form (Nume, Telefon, Email, Subiect, Mesaj); tel:+40318600316.",
  "localSpecificity": "named-places",
  "whatTheyDoBetter": [
    "Named-client proof at a scale nobody else has: 16 logos (BNR, Heidelberg Cement, RMGC, Visio) and the A7 motorway as a reference project.",
    "Four real office addresses including București, Alba Iulia (Str. Brândușei 24) and Sebeș (Piața Libertății 3) — the only competitor with a physical presence in more than one Alba locality; claims '12 birouri în țară'.",
    "Systematic registration (cadastru sistematic / PNCCF) named as an explicit service line — the exact topic aiud.ro and primariasebes.ro rank for on our home-town queries."
  ],
  "whatWeDoBetter": ["Not a comparable competitor for a private owner: no acte, no process, no price, no FAQ, no named surveyor, B2B/institutional register throughout. It ranks #9 on domain strength, not on answering the query."],
  "note": "Borderline classification. Kept as surveyor because topografie/cadastru is a first-class service line with a dedicated H4, but it is an engineering group, not a birou de cadastru. A private owner searching 'cadastru si intabulare alba' is not its buyer."
}
```

### C4 — topografiealba.ro (Larry Vermessungen)

```json
{
  "url": "https://topografiealba.ro/", "domain": "topografiealba.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "cad-q2alt-pc", "rank": 3}],
  "wordCount": 600,
  "headingOutline": [
    {"level": 1, "text": "Larry Vermessungen"},
    {"level": 2, "text": "Topografie │ Cadastru │ Geodezie │ GPS"},
    {"level": 2, "text": "Oferim o gamă largă de servicii de Topografie, Cadastru și GPS"},
    {"level": 2, "text": "AI NEVOIE DE AJUTORUL NOSTRU?"},
    {"level": 3, "text": "Despre noi"},
    {"level": 2, "text": "Parteneri"},
    {"level": 3, "text": "Date de contact"}, {"level": 3, "text": "Servicii"}, {"level": 3, "text": "Utile"},
    {"level": 6, "text": "Topograf AI — Asistent virtual"}
  ],
  "sectionsPresent": ["services", "despre noi", "contact block", "partner logos",
    "help prompt", "AI chatbot widget", "footer nav"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "none",
  "durationClaim": "none",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": false,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "tel:0358 104 184 and mailto:office@larry-vermessungen.ro. No form, no WhatsApp, no CTA button. An AI chat widget ('Topograf AI — Asistent virtual') substitutes for a written FAQ.",
  "localSpecificity": "generic",
  "whatTheyDoBetter": [
    "An always-on conversational entry point (AI assistant) instead of a static FAQ — the only cohort member attempting instant answer capture.",
    "Founded-in-2006 credibility and a German-language brand that reads as precision engineering."
  ],
  "whatWeDoBetter": ["everything content-side", "their experience counter renders as 'Ani de experiență — 0 +', a live broken placeholder on a page that ranks #3"]
}
```

### C5 — pdproiectsurveyor.ro

```json
{
  "url": "https://pdproiectsurveyor.ro/", "domain": "pdproiectsurveyor.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "cad-q2alt-pc", "rank": 4}],
  "wordCount": 1300,
  "headingOutline": [
    {"level": 1, "text": "Profesioniști în topografie, cadastru și GIS"},
    {"level": 2, "text": "P&D Proiect Surveyor SRL"},
    {"level": 2, "text": "Viziunea firmei noastre"},
    {"level": 2, "text": "Misiunea noastră"},
    {"level": 2, "text": "Gamă variată"},
    {"level": 3, "text": "Serviciile noastre includ:"},
    {"level": 3, "text": "De ce să ne alegi pe noi?"},
    {"level": 2, "text": "Câteva din proiectele noastre"},
    {"level": 2, "text": "Experiențele avute de cei ce au ales sa colaboreze cu noi"}
  ],
  "sectionsPresent": ["hero", "vision + mission", "services", "de ce noi (3 reasons)",
    "3-image portfolio", "6 testimonials", "contact footer", "legal block (CUI, reg. no.)"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "none on the page. A \"Prețuri\" page is linked from the nav but publishes no figure on the ranking URL.",
  "durationClaim": "none",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": true, "yearsExperience": false, "portfolio": true,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "\"Vezi detalii\" → /servicii-oferite/. Two phones (0761 126 184, 0786 536 444), mailto:office@pdproiectsurveyor.ro. No form, no WhatsApp.",
  "localSpecificity": "named-places",
  "whatTheyDoBetter": [
    "The only cohort member with on-page testimonials (6) and the only one with a dedicated FAQ page and a Prețuri page in its navigation — an information architecture that anticipates the two questions buyers actually have.",
    "Publishes full legal identity (company name, CUI, registration number) in the footer.",
    "Map-pack rating 5,0 with 20 reviews (#3 on topografi autorizati alba iulia)."
  ],
  "whatWeDoBetter": ["Their 6 testimonials are signed Ion Popescu, Maria Ionescu, Andrei Vasilescu, Elena Dumitrescu, George Marin, Laura Popa — the standard Romanian placeholder-name set. They read as template filler. Do not imitate this; if we add testimonials they must be real."]
}
```

### C6 — gistopocad.3x.ro

```json
{
  "url": "http://gistopocad.3x.ro/", "domain": "gistopocad.3x.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "cad-q2alt-pc", "rank": 6}],
  "wordCount": 312,
  "headingOutline": [
    {"level": 1, "text": "S.C. Gis Topocad S.R.L. Alba Iulia - Topografie, Cadastru (title element; page has no semantic headings — Microsoft Publisher VML export)"},
    {"level": 2, "text": "Bine ati venit pe site-ul nostru!"},
    {"level": 2, "text": "Servicii cadastru si topografie: Expert autorizat lucrari topografice"},
    {"level": 2, "text": "Contact"}
  ],
  "sectionsPresent": ["welcome paragraph", "8-item service bullet list",
    "links to two 'acte necesare' sub-pages", "equipment claim", "free-consultation offer",
    "pricing policy statement", "address + contact block", "nav: HOME / CADASTRU / TOPOGRAFIE / GIS / CONTACT"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "none. States: \"Preturile sunt calculate pentru fiecare proiect in parte, in functie de specificul lucrarii (geografia terenului, suprafata terenului, suprafata apartmentului). Pentru o evaluare a lucrarii Dvs va rugam sa ne contactati...\"",
  "durationClaim": "none. Says work is done \"rapid, eficient si la costuri avantajoase\" — no figure.",
  "acteNecesare": {"present": false, "itemCount": 0,
    "note": "Not on the ranking page; linked as two sub-pages: 'Acte necesare pentru cadastru si intabulare' and 'Acte necesare pentru realizare documentatie lucrari topografice'."},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": false,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "Plain text contact block: \"Director: Marius Popescu, Tel: 0358106501, Mobil: 0748.700.496 / 0763.607.573\", mailto:gis.topocad@yahoo.com. No tel: links, no buttons, no form.",
  "localSpecificity": "generic",
  "whatTheyDoBetter": [
    "Offers free consultation explicitly: 'Specialistii nostri va ofera de asemenea consultanta gratuita in probleme legate de terenul, casa sau apartamentul Dvs'.",
    "Frames authorisation in words rather than a number: 'echipa noastra de experti autorizati de Oficiul de Cadastru si Publicitate Imobiliara' + 'respectand normele emise de Agentia Nationala de Cadastru si Publicitate Imobiliara'."
  ],
  "whatWeDoBetter": ["A 312-word Microsoft Publisher page from roughly 2008, no mobile layout, no tel: links, no HTTPS at all — and it ranks #6 for topografi autorizati alba iulia. This is the clearest evidence in the batch that domain history, not page quality, is deciding these positions."]
}
```

---

## 2. Surveyor-cohort consensus (N=6) — computed over surveyors ONLY

| Attribute | Cohort | Share | Ours (leaf) |
|---|---|---|---|
| Page type that ranks | **homepage** (C1–C5 all rank `/`; C6 ranks `/`) | **6/6** | service×locality leaf |
| Publishes any price figure | **0/6** | **0%** | **yes — "900 – 2.500 lei"** |
| States "price on request / per project" | 3/6 explicitly (C1, C6, + C5 via linked page) | 50% | no |
| Any duration or turnaround claim | **0/6** | **0%** | **yes — see §5, live policy breach** |
| Acte necesare on the ranking page | 1/6 (C2; C6 links out) | 17% | yes, 5 items |
| Numbered process / "cum decurge" | **0/6** | **0%** | yes, 5 steps |
| FAQ on the ranking page | **0/6** | **0%** | yes, 4–6 questions |
| Any JSON-LD / schema.org | **0/6** | **0%** | yes, 4 blocks |
| Individual surveyor named | 3/6 (C1 Emanuel Maxim, C2 Martin Nicolae, C6 Marius Popescu) | 50% | **no** |
| Photograph of that person | 1/6 (C1) | 17% | **no** |
| ANCPI authorisation number | **0/6** | **0%** | no |
| On-page reviews / testimonials | 1/6 (C5, placeholder names) | 17% | no (homepage only) |
| Years-of-experience claim | 4/6 (C2 "peste 9 ani", C3 "8 ani", C1 + C4 vague) | 67% | yes, "25+ ani" |
| Portfolio / project examples | 3/6 (C1 35 images, C3 A7 + logos, C5 3 images) | 50% | **no** |
| Phone visible | 5/6 (C2 has none on the homepage) | 83% | yes, `tel:` ×5 |
| WhatsApp | **0/6** | **0%** | **yes, ×27** |
| Contact form | 2/6 (C1, C3) | 33% | no (house rule) |
| Per-locality pages of any kind | **0/6** | **0%** | 927 |
| Word count (estimated) | 312 · 600 · 650 · 1,300 · 2,300 · 3,000 — **median ≈ 975** | — | 877 gated (exact) |

**The single most important line in this table:** the price and duration figures cited in
`FINDING-cannibalization.md` §6 and `CAPTURES-2026-07-29.md` F6 — necesit.ro 560–810 lei,
brig.ro 336–2.100 RON, bizoo/Cadastru Maxim 300 lei, cadastru24 300 lei + 75 lei/lot — come
**exclusively from directories and marketplaces.** Not one *surveyor* in this cohort publishes a
number. Under SOP §3 Step 2 those sources are excluded from consensus. **"Every competitor
publishes prices" is false for the surveyor cohort; it is true only of the aggregators.**

---

## 3. OUR pages, scored on the identical schema — SOP Step 4

### 3.1 cad-q1 `cadastru si intabulare alba` (county) — rank #7, **ROUTING DEFECT**

**servedPage** — `docs/servicii/cadastru-si-intabulare/alba/noslac.html`

```json
{
  "url": "https://expert-intabulare.ro/servicii/cadastru-si-intabulare/alba/noslac.html",
  "domain": "expert-intabulare.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "cad-q1", "rank": 7}],
  "wordCount": 881,
  "headingOutline": [
    {"level": 1, "text": "Cadastru și intabulare în Noșlac (Alba)"},
    {"level": 2, "text": "Unde se depune dosarul"},
    {"level": 2, "text": "Despre lucrări în Noșlac"},
    {"level": 2, "text": "Acte necesare (orientativ)"},
    {"level": 2, "text": "Cum decurge procesul"},
    {"level": 2, "text": "Particularități OCPI în județul Alba"},
    {"level": 2, "text": "Întrebări frecvente — cadastru și intabulare în Noșlac"},
    {"level": 2, "text": "Contact rapid"},
    {"level": 2, "text": "Alte servicii în Noșlac"},
    {"level": 2, "text": "Cadastru și intabulare în localități apropiate"},
    {"level": 2, "text": "Vezi și"}, {"level": 2, "text": "Ai o situație asemănătoare?"}
  ],
  "sectionsPresent": ["situation-led intro", "BCPI office + street address", "villages of the UAT",
    "local context prose", "acte necesare", "process steps", "county OCPI note",
    "FAQ", "contact block", "sibling services", "8 nearby localities with distances", "see-also"],
  "questionsAnswered": [
    "Pot vinde un imobil neintabulat?",
    "Cât costă cadastrul și intabularea?",
    "Care este diferența dintre cadastru și intabulare?",
    "Casa este construită de zeci de ani, dar nu apare în cartea funciară. E o problemă la vânzare?",
    "Trebuie să fiu prezent la măsurătoare?",
    "Cât durează cadastrul și intabularea în Noșlac?"
  ],
  "priceDisclosure": "range",
  "priceValues": "\"Preț orientativ: 900 – 2.500 lei, orientativ, în funcție de tipul imobilului și de acte\" + priceDisclaimer; FAQ repeats \"orientativ între 900 și 2.500 lei, la care se adaugă tarifele ANCPI\".",
  "durationClaim": "PRESENT — \"Măsurătoarea o programăm de regulă în câteva zile, iar după depunerea dosarului complet la BCPI Aiud termenul obișnuit de soluționare este de ordinul săptămânilor. Contra taxei de urgență ANCPI, termenul se reduce semnificativ.\"",
  "acteNecesare": {"present": true, "itemCount": 5},
  "processSteps": {"present": true, "stepCount": 5},
  "faq": {"present": true, "questionCount": 6},
  "schemaTypes": ["LocalBusiness", "PostalAddress", "GeoCoordinates", "Service",
                  "AdministrativeArea", "BreadcrumbList", "ListItem", "FAQPage", "Question", "Answer"],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": false,
                   "phoneVisible": true, "whatsapp": true},
  "ctaStyle": "\"Scrie-ne pe WhatsApp\" primary + 0741 478 540; tel: ×5; whatsapp ×27; hours stated; no form.",
  "localSpecificity": "deep",
  "problem": "Noșlac is a commune of the far north-east of the county, 24 km from the office. It is answering a COUNTY query. Its meta description reads \"…aprox. 24 km de Aiud\" in the Google snippet."
}
```

**correctPage** — **DOES NOT EXIST.** Verified: `docs/servicii/cadastru-si-intabulare/alba/index.html`
is absent; `docs/servicii/cadastru-si-intabulare/` contains only `alba/ cluj/ hunedoara/ mures/
sibiu/ index.html`. This is chair verdict **W1**, unbuilt.

**Nearest existing** — `docs/zone/alba/index.html`, and it is not a substitute:

```json
{
  "url": "https://expert-intabulare.ro/zone/alba/", "pageType": "surveyor(hub)",
  "rankedFor": [], "wordCount": 3531,
  "headingOutline": [
    {"level": 1, "text": "Cadastru și topografie în județul Alba"},
    {"level": 2, "text": "OCPI Alba"}, {"level": 2, "text": "Contact rapid"},
    {"level": 2, "text": "Alte județe"}, {"level": 2, "text": "Localități din județul Alba"},
    {"level": 2, "text": "Ai o situație asemănătoare?"}
  ],
  "sectionsPresent": ["county intro", "OCPI Alba + all 5 BCPI addresses",
    "ANCPI tariff-regime note (no figures)", "contact", "other counties",
    "78-locality accordion × 8 services each", "closing CTA"],
  "questionsAnswered": [],
  "priceDisclosure": "none", "priceValues": "none — the string \"lei\" does not occur on the page",
  "durationClaim": "none",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": ["LocalBusiness", "PostalAddress", "GeoCoordinates", "BreadcrumbList", "ListItem"],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": false,
                   "phoneVisible": true, "whatsapp": true},
  "ctaStyle": "identical contact block to the leaves", "localSpecificity": "deep"
}
```

**Why the hub cannot win this query as it stands:** its H1 is *"Cadastru și topografie în județul
Alba"* — service-agnostic. It has **no FAQPage, no Service schema, no acte necesare, no process,
no price**, and 624 outbound locality×service links against essentially no unique body prose
beyond the shared county note. It is a directory of our own pages. On every schema attribute
except word count it is **weaker than the commune leaf Google chose**.

**ROUTING DEFECT: YES.** `servedPage` = a 24-km commune leaf; `correctPage` does not exist; the
fallback hub is worse than the served page. Same failure mode as
`intabulare teren agricol alba` → Cut.

---

### 3.2 cad-q4-pc `cadastru aiud` (town) — rank #7, **ROUTING DEFECT (third variant)**

**servedPage** — `https://expert-intabulare.ro/` (the homepage)

```json
{
  "url": "https://expert-intabulare.ro/", "pageType": "surveyor",
  "rankedFor": [{"queryId": "cad-q4-pc", "rank": 7}, {"queryId": "topograf aiud (prior session)", "rank": 4}],
  "wordCount": 1127,
  "headingOutline": [
    {"level": 1, "text": "Servicii profesionale, pentru orice proiect"},
    {"level": 2, "text": "Cu ce vă putem ajuta?"},
    {"level": 2, "text": "Peste 1052 proiecte finalizate cu succes"},
    {"level": 2, "text": "Servicii de cadastru și topografie"},
    {"level": 2, "text": "Citiți câteva recenzii de la clienții noștri dragi despre munca noastră"},
    {"level": 2, "text": "Zone de lucru"},
    {"level": 2, "text": "Trimite-ne un mesaj!"}
  ],
  "sectionsPresent": ["hero + plan-de-amplasament illustration", "3 audience selectors",
    "stats band (1052+ proiecte / 25+ ani / 2681+ colaborări)", "8 service cards",
    "reviews section", "zone de lucru", "message block"],
  "questionsAnswered": [],
  "priceDisclosure": "none", "priceValues": "none — \"lei\" does not occur",
  "durationClaim": "none",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0, "note": "5 <details> blocks exist but are UI, not a marked-up FAQ"},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": true, "yearsExperience": true, "portfolio": false,
                   "phoneVisible": true, "whatsapp": true},
  "ctaStyle": "\"Scrie-ne pe WhatsApp\" + 0741 478 540; tel: ×4; whatsapp ×10; \"Trimite-ne un mesaj!\"",
  "localSpecificity": "generic",
  "problem": "ZERO JSON-LD blocks. No BCPI Aiud address, no acte, no process, no FAQ markup, one ANCPI mention. It is the weakest-structured page on the site and it is the one Google shows for our home-town head query."
}
```

**correctPage** — `docs/servicii/cadastru-si-intabulare/alba/aiud.html` (chair flagship #5)

```json
{
  "url": "https://expert-intabulare.ro/servicii/cadastru-si-intabulare/alba/aiud.html",
  "pageType": "surveyor", "rankedFor": [], "wordCount": 877,
  "headingOutline": [
    {"level": 1, "text": "Cadastru și intabulare în Aiud (Alba)"},
    {"level": 2, "text": "Unde se depune dosarul"},
    {"level": 2, "text": "Despre lucrări în Aiud"},
    {"level": 2, "text": "Acte necesare (orientativ)"},
    {"level": 2, "text": "Cum decurge procesul"},
    {"level": 2, "text": "Particularități OCPI în județul Alba"},
    {"level": 2, "text": "Întrebări frecvente — cadastru și intabulare în Aiud"},
    {"level": 2, "text": "Contact rapid"}, {"level": 2, "text": "Alte servicii în Aiud"},
    {"level": 2, "text": "Cadastru și intabulare în localități apropiate"},
    {"level": 2, "text": "Vezi și"}, {"level": 2, "text": "Ai o situație asemănătoare?"}
  ],
  "questionsAnswered": [
    "Cât costă cadastrul și intabularea?",
    "Suprafața reală diferă de cea din acte. Ce se întâmplă?",
    "Faceți și acte pentru bancă, la credit ipotecar?",
    "Cât durează cadastrul și intabularea în Aiud?",
    "Trebuie să fiu prezent la măsurătoare?"
  ],
  "priceDisclosure": "range", "priceValues": "900 – 2.500 lei + disclaimer",
  "durationClaim": "PRESENT — same BCPI wording as Noșlac",
  "acteNecesare": {"present": true, "itemCount": 5},
  "processSteps": {"present": true, "stepCount": 5},
  "faq": {"present": true, "questionCount": 5},
  "schemaTypes": ["LocalBusiness", "PostalAddress", "GeoCoordinates", "Service",
                  "AdministrativeArea", "BreadcrumbList", "ListItem", "FAQPage", "Question", "Answer"],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": false,
                   "phoneVisible": true, "whatsapp": true},
  "ctaStyle": "same", "localSpecificity": "deep",
  "strengths": [
    "meta description already reads \"birou chiar în Aiud\" — the distance clause is correctly suppressed here (defect 12.1 appears fixed on this page)",
    "names all 10 satele aparținătoare: Aiudul de Sus, Ciumbrud, Gâmbaș, Gârbova de Jos, Gârbova de Sus, Gârbovița, Măgina, Păgida, Sâncrai, Țifra",
    "gives BCPI Aiud, Str. Cuza Vodă nr. 14 with the street address",
    "geography a local would recognise: valea Mureșului, DN1 (E81), Cetatea Aiudului"
  ]
}
```

**servedPage vs correctPage — the delta, and it runs the wrong way:**

| | homepage (served) | aiud leaf (correct) |
|---|---|---|
| JSON-LD blocks | **0** | **4** |
| FAQ marked up | no | yes, 5 |
| Acte necesare | no | 5 items |
| Process steps | no | 5 |
| BCPI office + address | no | yes |
| Villages named | no | 10 |
| Price range | no | yes |
| Reviews on page | **yes** | no |

**ROUTING DEFECT: YES** — hub-substituted-for-leaf. Google is serving the page with **zero
structured data** in preference to the page with four blocks of it, for our own home town.

Cross-check from the capture: on `cadastru si intabulare Aiud` Google served
`intabulare-teren/alba/aiud`; on `topograf aiud` it served the homepage; on `cadastru aiud` it
served the homepage. **Three Aiud cadastru queries, and `cadastru-si-intabulare/alba/aiud.html`
is served on none of them.**

---

### 3.3 cad-q2alt-pc `topografi autorizati alba iulia` — not ranking

`correctPage` = `docs/servicii/cadastru-si-intabulare/alba/alba-iulia.html` — 842 gated words,
4 FAQ, 4 JSON-LD blocks, price range, 5 acte, 5 steps, meta *"aprox. 39 km de Aiud"*.
**No routing defect** (we are simply absent). Two structural facts matter here:
- The exact phrase **"topograf autorizat"** is missing from 7 of the 10 ranking results (Google's
  own "Lipsesc: topografi / autorizati" flags). We carry "Topograf autorizat ANCPI" in the meta
  and 8 ANCPI mentions in the body — the phrase field is genuinely open.
- But the map pack here is six Alba Iulia addresses with 10–39 reviews and we are 39 km away with
  3. Organic entry is the only route, and 5 of 10 organic slots are competitor **homepages**.

### 3.4 cad-q3alt-pc `cadastru sebes` — not ranking, and the intent is contested

`correctPage` = `docs/servicii/cadastru-si-intabulare/alba/sebes.html` — 814 gated words, 5 FAQ,
4 JSON-LD, meta *"aprox. 55 km de Aiud"*. **No routing defect.**
Cohort = **zero**. The SERP is 9/10 aggregators, of which 4 are extras-CF intermediaries
(cfunciara, efunciara, extrase.ro, cf.ro) plus primariasebes.ro on PNCCF. Google reads
`cadastru sebes` as *"where is the BCPI office / how do I get a document"*, not *"who measures my
land"*. Winning it may mean winning traffic that never becomes a job. Recorded, not recommended.

---

## 4. Gap analysis — SOP Step 5, confidence-tagged

Every gap below is computed over the **surveyor cohort only (N=6)**.

| # | Gap | Confidence | Effect | Note |
|---|---|---|---|---|
| G1 | **The county query has no county page.** 0/6 competitors need one — they rank a homepage. We have neither a homepage targeting the service nor `/servicii/cadastru-si-intabulare/alba/`, so Google picks Noșlac. | **HIGH** — mechanically checkable, the file is absent | **moves rankings** | = chair W1. Not my territory to build. |
| G2 | **The named surveyor.** 3/6 name the engineer (Maxim, Martin, Popescu); 1/6 shows his face. Our leaves name nobody — "Topograf autorizat ANCPI, 25+ ani" is an unattributed claim. | **MEDIUM** — 50% pattern, plausible mechanism (E-E-A-T + human trust) | **table stakes** | Chair B2, blocked on the authorisation number — but the NAME does not need the number. |
| G3 | **Portfolio / work evidence.** 3/6 have it; C1 has 35 captioned job photos, C3 has the A7 motorway and 16 client logos. We have zero images of work on any leaf. | **MEDIUM** | **table stakes** | Needs assets from Aurel, not a generator change. |
| G4 | **Per-case acte necesare.** C2 splits "acte necesare" by work type (7 case types); ours is one flat 5-item list identical on every page and every service. | **MEDIUM** | **table stakes**, and gate-relevant | A per-service acte list would also be page-differentiating content — but it is service-constant, i.e. it lands ABOVE the 50% boilerplate cut only if applied to all 222 pages of the service. Team C must rule. |
| G5 | **On-page reviews.** 1/6 has them, and they are fake-looking. Our homepage has a reviews section; our leaves do not. | **LOW** | **table stakes** | Do NOT copy C5's placeholder-name testimonials. |
| G6 | Word count. Cohort median ≈ 975 (est.), ours 877 gated. C6 ranks #6 with **312 words**. | **LOW** — correlational only, and the estimates are soft | neither | **Length is not the lever here.** A 312-word Publisher page from ~2008 outranks nothing on content. Do not propose "add words". |

### Reverse gaps — where the cohort is behind us (do not sacrifice these)

| # | Our advantage | Cohort |
|---|---|---|
| R1 | JSON-LD (LocalBusiness, Service, FAQPage, BreadcrumbList) | **0/6 have any structured data at all** |
| R2 | Marked-up FAQ | 0/6 |
| R3 | Numbered process ("Cum decurge procesul") | 0/6 |
| R4 | WhatsApp as primary CTA | 0/6 |
| R5 | Named BCPI office + street address per locality | 0/6 |
| R6 | Villages of the UAT named | 0/6 |
| R7 | Mobile-current design | C1 (visitor counter + weather widget), C6 (Publisher/VML, HTTP-only) are visibly obsolete |

**Read this honestly:** we are ahead of the surveyor cohort on almost every content dimension and
we are still #7 with the wrong page. That is the strongest available support for the chair's
routing-before-content verdict (D2). **More content on the leaf is not the lever for this service.**

---

## 5. BLOCKED BY POLICY

**Nothing in the surveyor cohort is blocked** — 0/6 publish a price and 0/6 publish a duration,
so no competitor pattern needs blocking.

Recorded as intelligence only, **from directories/marketplaces, excluded from consensus**:

| Source | pageType | Service | Figure |
|---|---|---|---|
| brig.ro | directory | cadastru în Aiud | "Tarifele … se situează în gama **336–2.100 RON**"; also answers "Cât durează procesul de intabulare?" directly |
| necesit.ro | directory | intabulare apartament | 560–810 lei (avg 630) |
| necesit.ro | directory | dezmembrare / alipire | 250–880 lei/lot |
| bizoo.ro (Cadastru Maxim) | marketplace | documentație intabulare apartament | 300 lei |
| cadastru24.ro | marketplace | notary fee, dezmembrare | min 300 lei + 75 lei/lot + TVA |

Cohort statements on price, verbatim, for contrast:
- C1: *"Costurile se calculeaza in functie de specificul lucrarii"*
- C6: *"Preturile sunt calculate pentru fiecare proiect in parte, in functie de specificul lucrarii (geografia terenului, suprafata terenului, suprafata apartmentului)"*

---

## 6. ⚠ POLICY ITEMS RAISED, NOT ACTIONED — for the chair

**Single-writer rule (SOP §4.1): I have changed nothing. These are escalations.**

### 6.1 A live duration claim is on our pages, and SOP §0.2 forbids it

`docs/servicii/cadastru-si-intabulare/alba/aiud.html` and `…/noslac.html`, FAQ answer to
*"Cât durează cadastrul și intabularea în &lt;Localitate&gt;?"*:

> "Măsurătoarea o programăm de regulă în câteva zile, iar după depunerea dosarului complet la
> BCPI Aiud **termenul obișnuit de soluționare este de ordinul săptămânilor. Contra taxei de
> urgență ANCPI, termenul se reduce semnificativ.**"

SOP §0.2 FORBIDDEN, verbatim: *"Any turnaround or duration claim — … applied to BCPI processing"*.
Hedged or not, this is a claim about how fast a government office works.

Measured prevalence, whole site:
- `"termenul obișnuit de soluționare"` → **96 pages**
- `"taxei de urgen"` → **202 pages**
- `"Cât durează"` under `docs/servicii/` → **791 pages**

The FAQ text lives in `faqPool`. Note §0.2's own carve-out — *"răspundem de obicei în aceeași zi
lucrătoare"* (Aurel's own reply time) is approved and unaffected. Note also SOP §4.8 / D13: the
pool must not be **resized**; an in-place rewording of one answer is a different operation and
needs a Team C gate ruling before anyone touches it.

### 6.2 The task brief I was given conflicts with SOP §0.2 on prices

My brief said *"NEVER propose displaying prices."* SOP §0.2 and the CEO ruling of 2026-07-29 say
the hedged orientative ranges are **approved, live on 1,526 pages, and must not be removed**, and
SOP §6 lists proposing their removal as an anti-pattern.

**How I resolved it:** I propose **no new price figure** anywhere, and I propose **no removal** of
the existing range. The cohort data happens to make this easy — 0/6 surveyors publish anything,
so there is no competitive pressure in either direction. Chair to confirm.

### 6.3 Our meta description advertises "prețuri orientative" in the snippet

Every `cadastru-si-intabulare` leaf ships:
`<Serviciu> în <Localitate>: acte, pași, prețuri orientative. Topograf autorizat ANCPI, aprox. N km de Aiud. Tel. 0741 478 540.`

Two observations, flagged not proposed: (a) the phrase "prețuri orientative" is in the Google
snippet on a query where **no surveyor competitor shows a price at all**; (b) the distance clause
is already correctly suppressed on `aiud.html` (*"birou chiar în Aiud"*) but is live as
*"aprox. 24 km"* on Noșlac, *"aprox. 39 km"* on Alba Iulia and *"aprox. 55 km"* on Sebeș — chair
W2 territory, unbuilt.

---

## 7. CONTENT SPEC — SOP Step 6

## cadastru-si-intabulare — county + town tiers

- **Target queries:** cad-q1 `cadastru si intabulare alba` (county) · cad-q2alt-pc
  `topografi autorizati alba iulia` (city) · cad-q3alt-pc `cadastru sebes` (town) ·
  cad-q4-pc `cadastru aiud` (town)
- **Our current position / served / should be served:**
  - cad-q1 → **#7**, served `…/alba/noslac.html`, should be `/servicii/cadastru-si-intabulare/alba/` (**absent**)
  - cad-q2alt-pc → not ranking, should be `…/alba/alba-iulia.html`
  - cad-q3alt-pc → not ranking, should be `…/alba/sebes.html` (intent contested)
  - cad-q4-pc → **#7**, served **homepage**, should be `…/alba/aiud.html`
- **Surveyor cohort analysed (N):** 6 · **shortfall: 2 of 4 queries returned zero surveyors**
- **Aggregator share:** 6/10 · 5/10 · 9/10 · 9/10 (mean 7.25/10) — high, therefore winnable with
  a genuine service page **if the right page is served**
- **GAPS (ranked, confidence-tagged):**
  1. `[HIGH][moves-rankings]` No service×county page exists → county query answered by a 24-km
     commune. Chair W1. Owner: routing workstream, not this lane.
  2. `[HIGH][moves-rankings]` `cadastru-si-intabulare/alba/aiud.html` is served for **none** of the
     three Aiud cadastru queries; the zero-schema homepage takes its place. Chair W3 +
     `serviceNotes` (D5).
  3. `[MEDIUM][table-stakes]` Named surveyor absent (3/6 competitors name him, 1/6 shows a photo).
     The **name** is available today; only the authorisation number is blocked.
  4. `[MEDIUM][table-stakes]` No portfolio/work evidence (3/6 have it). Needs assets from Aurel.
  5. `[MEDIUM][table-stakes]` Acte necesare is one flat list; C2 varies it by case type.
  6. `[LOW][neither]` Word count. Do not act on it.
- **CONTENT SPEC — what the page must contain** *(delta only; every listed section already exists
  and is already ahead of the cohort — nothing here is a rewrite request)*:
  - **Section: "Cine vine la măsurătoare"** — purpose: put a human behind the claim. Must answer
    *who physically arrives*. Data source: `generator/data/` business record (name + role).
    **Ship the name now; leave a marked slot for the ANCPI seria/număr/categorie** (CEO ruling
    0.1 — never invent it). Cohort evidence: 3/6 name him, **0/6 publish an authorisation
    number** — so the name is table stakes and the number is an *uncontested differentiator*, not
    a catch-up item.
  - **Section: "Acte necesare" — per-service variant** — purpose: match C2's per-case-type index.
    Must answer *which documents for MY kind of job*. Data source: a new per-service field in
    `generator/data/services.json`. **Gate constraint:** service-constant text spans all ~222
    pages of the group → lands above the 50% boilerplate cut → safe. Per-**county** or
    per-**office** variants would land in the residual and raise overlap (facts.md §6, chair D4).
    Team C must confirm before this is written.
  - **Section: work evidence** — purpose: close G3. Blocked on real photographs from Aurel. Do not
    substitute stock imagery; C5's placeholder testimonials are the failure mode to avoid.
  - **Do NOT add:** more prose, another FAQ, a price table, a duration statement, testimonials with
    invented names.
- **DATA REQUIRED FROM GENERATOR:**
  - exists: `localNote`, `ocpiOffice` + address, `villages`, `countyNote`, `profileVariant`,
    `faqSelection`, `nearby`, `distanceKmFromAiud`, price range in `services.json`
  - missing: surveyor name/role field surfaced on leaves; ANCPI authorisation slot;
    per-service `acteNecesare`; `loc.serviceNotes{}` (approved D5, unbuilt);
    `/servicii/<service>/<county>/index.html` route (W1, unbuilt); portfolio image slots
- **BLOCKED BY POLICY:** nothing from the surveyor cohort (0/6 price, 0/6 duration). Directory
  price/duration figures recorded in §5 as intelligence only. Our own live duration claim in the
  FAQ pool is escalated in §6.1 as a **breach to be ruled on**, not a gap to be closed.
- **ROUTING DEFECT: YES — on both queries where we rank.**
  - cad-q1: `servedPage` `…/alba/noslac.html` vs `correctPage` **nonexistent**; the fallback
    `/zone/alba/` is weaker than the served leaf on every schema attribute except word count.
  - cad-q4-pc: `servedPage` homepage (**0 JSON-LD**) vs `correctPage` `…/alba/aiud.html`
    (**4 JSON-LD**, FAQ, acte, process, BCPI address, 10 villages). Google is preferring our
    least-structured page for our home town.

---

## 8. What this does not establish

Six surveyor pages across two queries is a small cohort, and two of the four queries produced
none at all. `gistopocad.3x.ro` — 312 words, VML, no HTTPS, no `tel:` links — ranks #6 for
`topografi autorizati alba iulia`. Whatever is deciding these positions is not on-page quality,
and this method cannot see it. Every gap above is a ranked hypothesis. The measurement gate is
Search Console on **2026-08-19**, and the metric that matters most for this service is not
position — it is **which URL Google serves**.
