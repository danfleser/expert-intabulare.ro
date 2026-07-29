# COMPETITOR EXTRACTION — `trasare-teren`

**Date:** 2026-07-29 · **SOP:** `SOP-serp-research.md` Steps 3–6 · **Input SERPs:**
`research/seo-2026-07/serp/trasare-teren-serp.md` (4 queries, captured 2026-07-29).
**Method:** `WebFetch` only. No browser. No SERP re-capture.

Binding constraints applied throughout: SOP §0.2 — we record competitor prices and durations as
**intelligence**; we never propose publishing ANCPI tariffs, turnaround claims or duration claims of
our own. No PNCCF years, sector numbers, parcel counts or dates are invented anywhere below.

---

## 0. Cohort construction and the shortfall — read this first

The SERP file classified every organic result. Removing directories and marketplaces per SOP §3
leaves the following **competitor** surveyor pages (our own results are scored separately in §2):

| Query | Organic results | Non-surveyor | Our pages | **Competitor surveyor pages** |
|---|---|---|---|---|
| `trasare teren alba` (tras-q1) | 9 | 5 | 2 | **2** — biroucadastru.ro #5, cadastrumaxim.ro #7 |
| `trasare teren alba iulia` (tras-q2) | 9 | 8 | 1 | **0** |
| `trasare teren aiud` (tras-q3) | 9 | 6 | 3 | **0** |
| `trasare limite proprietate alba` (tras-q4) | 9 | 7 | 1 | **1** — expertcadastru.ro #4 |
| **Total** | **36** | **26 (72%)** | **7** | **3 distinct URLs** |

### SHORTFALL — recorded, not padded

- SOP §3 asks for **3–5 surveyor results per query**. That threshold is met on **0 of 4 queries**.
- **Two of the four queries return zero competitor surveyor pages at all** (`trasare teren alba iulia`,
  `trasare teren aiud`). On those SERPs the entire surveyor cohort is *ours*.
- The cohort was **not** padded with directories. `cadastru24.ro`, `necesit.ro`, `cautcadastru.ro`,
  `intabulari24.ro`, `brig.ro`, `birou-cadastru.com`, `olx.ro`, `imobiliare.ro`, `storia.ro`,
  `imoradar24.ro`, `citadelaimobiliare.ro`, `licitatia.ro`, `apulum.ro`, `hartilidar.eu`,
  `facebook.com`, `expert24.ro` were all excluded.
- `cautcadastru.ro` is a directory **not on the SOP §2 known-directory list**. Confirmed here.
  Recommend adding it, alongside `imoradar24.ro` and `citadelaimobiliare.ro` (marketplaces).

**Consequence for consensus:** with N=3 there is no such thing as a "surveyor consensus" for this
service. Nothing in §3 is tagged HIGH on the strength of unanimity, because unanimity across three
pages is not evidence. Findings are tagged by *mechanism*, and the mechanism is stated each time.

### Extraction fidelity

| # | SERP-displayed URL | Fetched | Note |
|---|---|---|---|
| C1 | `biroucadastru.ro/servicii/trasare-teren` | ✅ exact URL | Full extract. |
| C2 | `expertcadastru.ro` (Top Survey S.R.L.) | ✅ `expertcadastru.ro/index.php/trasari-cadastru` | SERP showed title only; canonical URL resolved by search. Full extract. |
| C3 | `cadastrumaxim.ro/content/13-trasari-topografice` | ⚠️ **404** | The URL Google displays **returns HTTP 404 today**, as does `www.` and the trailing-slash variant. Extracted from the live site (`cadastrumaxim.ro/content.php`), which is a single-page CMS carrying the "Trasari Topografice" block. **C3's fields below therefore describe the live site, not the exact ranked document.** Flagged, not hidden. |

---

## 1. COMPETITOR PAGES — SOP Step 3 schema

### C1 — biroucadastru.ro — "Trasare teren"

```json
{
  "url": "https://biroucadastru.ro/servicii/trasare-teren",
  "domain": "biroucadastru.ro",
  "pageType": "surveyor",
  "rankedFor": [{"queryId": "tras-q1", "rank": 5}],
  "wordCount": 1200,
  "headingOutline": [
    {"level": 1, "text": "Trasare teren"},
    {"level": 2, "text": "Alege serviciul"},
    {"level": 2, "text": "Datele lucrării"},
    {"level": 2, "text": "Datele tale de contact"},
    {"level": 2, "text": "Lucrarea ta este în mâini sigure"},
    {"level": 2, "text": "Pașii colaborării cu noi"},
    {"level": 2, "text": "Transparență totală în prețuri"},
    {"level": 2, "text": "Tarife și durată"},
    {"level": 2, "text": "Inclus în tarif"},
    {"level": 2, "text": "Nu este inclus"},
    {"level": 2, "text": "Durata aproximativă"},
    {"level": 2, "text": "Întrebări frecvente"},
    {"level": 2, "text": "Un alt mod de abordare a lucrărilor"},
    {"level": 2, "text": "Simplificăm serviciul de trasare teren"},
    {"level": 2, "text": "Avantajele de a lucra cu noi"},
    {"level": 2, "text": "Pregătit să lucrezi cu noi?"},
    {"level": 2, "text": "Disponibili online"},
    {"level": 2, "text": "Securizat și confidențial"}
  ],
  "sectionsPresent": ["inline multi-step order form (serviciu → date lucrare → date contact)",
                      "pașii colaborării", "tarife și durată", "inclus / nu este inclus",
                      "durata aproximativă", "FAQ", "avantaje", "contact online"],
  "questionsAnswered": ["Ce înseamnă serviciul de Trasare Teren și cât durează?"],
  "priceDisclosure": "exact",
  "priceValues": "de la 100 LEI/PUNCT. Disclaimer: „Tarifele afișate pe această pagină sunt informative, ele pot varia în funcție de complexitatea lucrării.”",
  "durationClaim": "„termen de finalizare în aproximativ 3 zile lucrătoare sau chiar 1 zi lucrătoare dacă optezi pentru operarea în regim de urgență” — has its own H2 pair, „Tarife și durată” + „Durata aproximativă”",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": true, "stepCount": 4},
  "faq": {"present": true, "questionCount": 1},
  "schemaTypes": ["not extracted — WebFetch markdown does not surface JSON-LD"],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": false,
                   "phoneVisible": false, "whatsapp": true},
  "ctaStyle": "Multi-step lead form as the page body itself — „Completează formularul”: județ, localitate, adresă, date de contact, data măsurătorii. Secondary „Scrie-ne” (email/WhatsApp). Online card payment (NETOPIA badge). Program L–V 08:00–18:00.",
  "localSpecificity": "none",
  "whatTheyDoBetter": [
    "Price is stated in the customer's own unit of measure — LEI/PUNCT — so a 2-point boundary job prices itself before contact.",
    "Scope is disambiguated explicitly: two H2 blocks, „Inclus în tarif” and „Nu este inclus”. Nobody else on the SERP does this. It pre-empts the single most common phone question.",
    "Duration is given its own heading, twice, with a named urgent tier. (Intelligence only — SOP 0.2 blocks ours.)",
    "The conversion mechanism IS the page: the order form is above the prose, not behind a button.",
    "Four named process steps, ending at „Eliberarea documentelor” — the customer sees the finish line.",
    "Payment and confidentiality reassurance blocks („Securizat și confidențial”, SSL/NETOPIA)."
  ],
  "whatWeDoBetter": [
    "Everything local. They ship a 41-county dropdown and zero place names; we name the BCPI office and its street, the component villages, and neighbouring localities with distances.",
    "FAQ depth: 1 question vs our 4–6, and theirs is a link-out rather than an answer.",
    "Acte necesare: they have none; we list 3.",
    "A real human is reachable on a phone. Their contact surface is a form plus email/WhatsApp; a landowner in Mogoș wants to talk to someone.",
    "Structured data: we emit LocalBusiness + Service + FAQPage + BreadcrumbList; theirs was not detectable."
  ]
}
```

**Character of the page.** This is a productized national e-commerce funnel, not a local surveyor's
page. CUI 45976515, Reg. Com. J40/7265/2022 (Bucharest). It ranks #5 on a *county* query with **no
county content whatsoever** — its ranking comes from domain-level service authority, not from local
relevance. That is a directly relevant observation: on `trasare teren alba` the only competitor
above us is a marketplace, and this page sits three places below us.

---

### C2 — expertcadastru.ro (Top Survey S.R.L.) — "Trasare limite proprietate"

```json
{
  "url": "http://www.expertcadastru.ro/index.php/trasari-cadastru",
  "domain": "expertcadastru.ro",
  "pageType": "surveyor",
  "rankedFor": [{"queryId": "tras-q4", "rank": 4}],
  "wordCount": 2100,
  "headingOutline": [
    {"level": 1, "text": "Trasare limite proprietate"},
    {"level": 2, "text": "Trasarea limitelor proprietatii, verificare colturi proprietate, intarusare teren"},
    {"level": 2, "text": "Top Survey Firma Cadastru Topografie Bucuresti"},
    {"level": 2, "text": "Firma Top Survey"},
    {"level": 2, "text": "Locatie Top Survey srl"},
    {"level": 2, "text": "Contact"}
  ],
  "sectionsPresent": ["definiția lucrării", "precondiția Stereo 70", "actualizarea coordonatelor din sistem local",
                      "metoda de măsurare (GPS RTK / stație totală)", "lista tipurilor de trasare",
                      "acte necesare", "preț", "proces-verbal de trasare", "clauză de răspundere",
                      "lucrări recente", "preturi cadastru", "formulare cadastru", "arhivă blog"],
  "questionsAnswered": [
    "Ce este trasarea limitelor de proprietate / întărușarea?",
    "Când NU se poate trasa — ce trebuie să existe întâi?",
    "Ce se întâmplă dacă documentația veche are coordonate în sistem local sau greșite?",
    "Cu ce se măsoară — GPS RTK sau stație totală?",
    "Ce acte trebuie aduse?",
    "Cât costă?",
    "Ce document primesc la final?",
    "Cine răspunde dacă gardul se pune greșit după trasare?"
  ],
  "priceDisclosure": "exact",
  "priceValues": "„In general costul este de 100 lei/ punct materializat”, negociabil dacă se doresc mai multe puncte.",
  "durationClaim": "NONE stated. Only an indirect claim: „s-au redus timpul de asteptare in vederea executarii lucrarii” (attributed to GPS RTK).",
  "acteNecesare": {"present": true, "itemCount": 3},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": ["not extracted"],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": true,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "Phone-first, repeated: „Sunati la telefon:” 0722 515 977 · 0744 752 967 · 021 310 2190, plus a bolded „Contact rapid: tel. 0722515977” and an obfuscated office email. No form.",
  "localSpecificity": "named-places — but the WRONG places: Bucuresti, Ilfov, Sector 1, P-ta Valter Maracineanu nr. 1-3. Zero Alba content.",
  "whatTheyDoBetter": [
    "Method is named to the protocol level: „GPS RTK (tehnologia NTRIP - Networked Transport of RTCM via Internet Protocol, a serviciului ROMPOS-RTK)”, with „statie totala (teodolit)” as the classic alternative.",
    "It states the PRECONDITION as a rule, not a caveat: trasarea can only be executed after the cadastre is approved and coordinates exist in Sistemul Stereografic 1970 — otherwise „limitele pot fi trasate gresit”.",
    "It states the REMEDY for the failure case: old documentation with local-system or wrong coordinates is first updated to Stereo 70, then traced. This converts a dead end into a sellable job.",
    "Acte necesare are specific and qualified — „Planul de amplasament si delimitare a imobilului” VIZAT OCPI, copie CI proprietar, copie act de proprietate dacă participă un împuternicit.",
    "It enumerates the sub-types of trasare as a purchasable menu: trasări terenuri · materializarea punctelor · trasarea axelor · cotei zero · contururi · axe și puncte de elevație.",
    "It states a liability boundary in plain words: „Nu ne asumam raspunderea pentru imprejmuirea facuta ulterior de proprietar care nu a respectat limitele trasate conform Procesului Verbal de Trasare.” This reads as professional seriousness, not as a hedge.",
    "Named engineer: „ing. Gurita Ion”. Portfolio: „Lucrari recente”."
  ],
  "whatWeDoBetter": [
    "Local relevance, entirely. Google itself flagged „Lipsesc: alba” on this result — it ranks #4 on an Alba query with no Alba content. We are #3 above it with a real Alba page.",
    "Structured FAQ (4–6 <details> + FAQPage JSON-LD) vs zero.",
    "Explicit numbered process (5 steps) vs an implied workflow.",
    "Mobile-first WhatsApp conversion with a pre-written message vs phone-only.",
    "Readable modern layout; theirs is a legacy Joomla page.",
    "Correct diacritics throughout; theirs has none (proprietatii, colturi, intarusare)."
  ]
}
```

**This is the most content-dense surveyor page on any of the four SERPs, and it is the one worth
studying.** It is also the clearest proof that on `trasare limite proprietate alba` Google is
ranking *topical depth about trasare*, not locality — a Bucharest page with "Lipsesc: alba" holds #4.

---

### C3 — cadastrumaxim.ro — "Trasari Topografice" ⚠️ ranked URL 404s

```json
{
  "url": "https://cadastrumaxim.ro/content/13-trasari-topografice",
  "urlStatus": "404 Not Found on 2026-07-29 (also 404 on www. and trailing-slash variants). Fields below extracted from the live single-page site cadastrumaxim.ro/content.php.",
  "domain": "cadastrumaxim.ro",
  "pageType": "surveyor",
  "rankedFor": [{"queryId": "tras-q1", "rank": 7}],
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
    {"level": 2, "text": "Calendar"},
    {"level": 2, "text": "Vizitatori Extern"},
    {"level": 2, "text": "Meteo"}
  ],
  "sectionsPresent": ["listă de 21 de categorii de lucrări", "galerie portofoliu (~35 imagini)",
                      "hartă", "contact", "noutăți", "calendar", "widget meteo", "contor vizitatori"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "„Costurile se calculeaza in functie de specificul lucrarii.” A separate „Preturi cadastru” page is linked but no figure appears on the trasare block.",
  "durationClaim": "Vague only: „efectuate in timp scurt”, „rapiditate in solutionarea problemelor”. No day count.",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": ["not extracted"],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": true,
                   "reviews": false, "yearsExperience": false, "portfolio": true,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "Phone-first and appointment-led: „Sunati acum - 0775 617 204”, „Va rugam sa va programati apeland: 0775 617 204”, „Contactati-ne”. Also 0766 216 570, 0358 112 909. Online request routed to ExtraseCF.ro.",
  "localSpecificity": "named-places — Alba Iulia, Sebeș, județul Alba; office at Str. Septimius Severus nr. 55, ap. 3, „In spatele Stadionului Municipal”.",
  "whatTheyDoBetter": [
    "The individual IS the brand: „Ing. Emanuel MAXIM” named in the H1 itself, with multiple photographs of him on the page.",
    "Portfolio as visual proof — a ~35-image carousel of executed work. Nothing on our site shows a single job.",
    "Off-page: this is the strongest local GBP in the county — 4,9 with 39 reviews (Cadastru MAXIM SRL) and 4,5 with 32 (Birou Cadastru MAXIM Emanuel), per CAPTURES-2026-07-29 §F3, against our 5,0 with 3.",
    "Office address is on Str. Septimius Severus, the same street as BCPI Alba Iulia — the proximity advantage documented in CAPTURES §F4.",
    "Cites a live regulatory instrument by name — „Regulamentul la Ordin 600/2023 al Directorului General al ANCPI”."
  ],
  "whatWeDoBetter": [
    "Per-locality pages at all. They cover Alba as one page; we have a page per locality per service.",
    "Structure: headings that describe the service, not widgets. Their page carries a weather widget, a visitor counter and a calendar.",
    "Acte necesare, process steps and FAQ — they have none of the three.",
    "Anything about trasare specifically: the SERP title promises „Trasari Topografice” but the live page carries only „Determinari GPS” in a 21-item service list. No method, no deliverable, no proces-verbal.",
    "The ranked URL resolves. Theirs 404s.",
    "WhatsApp conversion; theirs is call-and-book-an-appointment."
  ]
}
```

---

### Cross-competitor table

| | C1 biroucadastru.ro | C2 expertcadastru.ro | C3 cadastrumaxim.ro | **OURS (best leaf)** |
|---|---|---|---|---|
| Rank / query | #5 tras-q1 | #4 tras-q4 | #7 tras-q1 | **#2 tras-q1 · #3 tras-q2 · #2 tras-q3 · #3 tras-q4** |
| Words | ~1,200 | ~2,100 | ~2,800 (whole site) | **727 – 908** |
| Price | **exact, 100 lei/PUNCT** | **exact, 100 lei/punct materializat** | none | range, **500 – 1.500 lei / lucrare** |
| Duration | **3 zile / 1 zi urgență** | none | vague | none *(policy)* |
| Acte necesare | 0 | **3, qualified** | 0 | 3, generic |
| Process steps | 4 | implied | 0 | **5, numbered** |
| FAQ | 1 | 0 | 0 | **4–6 + FAQPage JSON-LD** |
| Named person | no | **yes** | **yes + photos** | **no** |
| ANCPI auth number | no | no | no | no *(pending)* |
| Portfolio | no | yes | **yes, ~35 images** | **no** |
| Reviews on page | no | no | no | no |
| Method named | no | **GPS RTK / NTRIP / ROMPOS-RTK / Stereo 70** | no | "GPS/stație totală", 1 mention |
| Proces-verbal de trasare | in steps | **yes, central** | no | **yes, in steps + FAQ** |
| Local specificity | **none** | wrong county | Alba Iulia / Sebeș | **deep — villages, BCPI, distances** |
| CTA | order form + online payment | phone | phone + programare | **WhatsApp prefilled + 5× tel:** |

---

## 2. OUR PAGES — SOP Step 4, scored on the identical schema

### 2.1 Routing ledger — served vs correct, all four queries

| Query | Rank | Page Google **served** | Page that **should** be served | Defect |
|---|---|---|---|---|
| tras-q1 `trasare teren alba` | **#2** | `docs/servicii/trasare-teren/alba/mogos.html` (comună, 44 km) | `docs/servicii/trasare-teren/alba/index.html` — **DOES NOT EXIST** | **YES** |
| tras-q1 | #9 | `docs/servicii/trasare-teren/alba/rimetea.html` (24 km) | same missing hub | **YES** — second self-competing result |
| tras-q2 `trasare teren alba iulia` | **#3** | `docs/servicii/intabulare-casa-constructie/alba/intregalde.html` | `docs/servicii/trasare-teren/alba/alba-iulia.html` — **exists** | **YES — wrong service AND wrong locality** |
| tras-q3 `trasare teren aiud` | **#2** | `docs/servicii/intabulare-teren/alba/aiud.html` | `docs/servicii/trasare-teren/alba/aiud.html` — **exists** | **YES — wrong service, right town** |
| tras-q3 | #4 | `docs/servicii/trasare-teren/alba/lopadea-noua.html` (11 km) | same | **YES** |
| tras-q3 | #8 | `docs/servicii/trasare-teren/alba/albac.html` (79 km) | same | **YES** |
| tras-q4 `trasare limite proprietate alba` | **#3** | `docs/servicii/trasare-teren/alba/ocolis.html` (34 km) | `docs/servicii/trasare-teren/alba/index.html` — **DOES NOT EXIST** | **YES** |

**We rank on 4 of 4 and serve the correct page 0 of 4 times.** Seven of our own URLs occupy seven
slots across 36 organic results — we hold **19% of the page-1 inventory for this service in Alba**
and convert none of it to the right landing page.

Verified in the repo on 2026-07-29:
- `docs/servicii/trasare-teren/alba/index.html` — **does not exist.** There are 76 flat `.html`
  leaves under `docs/servicii/trasare-teren/alba/` and no county index.
- `docs/servicii/trasare-teren/index.html` — **exists**, national scope, 38,529 bytes,
  **505 gated words, 0 `<details>` FAQ**, 3 JSON-LD blocks. It did not rank on any of the four queries.
- `docs/zone/alba/index.html` — exists, 108,545 bytes, 3,687 gated words, 78 `<details>` (one per
  locality), **service-agnostic**. It did not rank on any of the four queries.

So the county-level fallback is split across two pages, neither of which is about trasare in Alba:
one is about trasare everywhere, the other about everything in Alba.

---

### 2.2 `docs/servicii/trasare-teren/alba/alba-iulia.html` — **correctPage for tras-q2, never served**

```json
{
  "url": "https://expert-intabulare.ro/servicii/trasare-teren/alba/alba-iulia.html",
  "domain": "expert-intabulare.ro",
  "pageType": "surveyor",
  "rankedFor": [],
  "servedInstead": "docs/servicii/intabulare-casa-constructie/alba/intregalde.html (#3)",
  "wordCount": 873,
  "bytes": 28278,
  "headingOutline": [
    {"level": 1, "text": "Trasare teren în Alba Iulia (Alba)"},
    {"level": 2, "text": "Unde se depune dosarul"},
    {"level": 2, "text": "Despre lucrări în Alba Iulia"},
    {"level": 2, "text": "Acte necesare (orientativ)"},
    {"level": 2, "text": "Cum decurge procesul"},
    {"level": 2, "text": "Particularități OCPI în județul Alba"},
    {"level": 2, "text": "Întrebări frecvente — trasare teren în Alba Iulia"},
    {"level": 2, "text": "Contact rapid"},
    {"level": 2, "text": "Alte servicii în Alba Iulia"},
    {"level": 2, "text": "Trasare teren în localități apropiate"},
    {"level": 2, "text": "Vezi și"},
    {"level": 2, "text": "Ai o situație asemănătoare?"}
  ],
  "sectionsPresent": ["intro situațional", "linia „fotografiați actele … WhatsApp”", "distanță + BCPI",
                      "unde se depune dosarul + sate aparținătoare", "notă locală", "acte necesare",
                      "proces în 5 pași", "preț orientativ + disclaimer", "particularități OCPI Alba",
                      "FAQ", "contact rapid", "alte servicii", "localități apropiate cu km", "vezi și"],
  "questionsAnswered": [
    "Pot cere trasarea înainte să cumpăr un teren?",
    "Vreau să ridic gard nou în Alba Iulia. E nevoie de topograf înainte?",
    "Ce primesc după trasare?",
    "Terenul din Alba Iulia nu e intabulat. Se pot trasa limitele?",
    "Faceți și trasări pentru hale, drumuri sau rețele?",
    "Vecinul zice că gardul e pe terenul lui. Ce fac?"
  ],
  "priceDisclosure": "range",
  "priceValues": "„Preț orientativ: 500 – 1.500 lei, orientativ, în funcție de numărul de puncte și distanță. Prețurile afișate sunt orientative; costul exact depinde de teren, documente și situația din cartea funciară.” — per LUCRARE, not per punct.",
  "durationClaim": "NONE on this page. (The pooled FAQ „Cât durează trasarea unui teren în {localitate}?” is not among the 6 selected here.)",
  "acteNecesare": {"present": true, "itemCount": 3},
  "processSteps": {"present": true, "stepCount": 5},
  "faq": {"present": true, "questionCount": 6},
  "schemaTypes": ["LocalBusiness", "PostalAddress", "GeoCoordinates", "BreadcrumbList",
                  "ListItem×4", "Service", "AdministrativeArea", "FAQPage", "Question×6", "Answer×6"],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": false,
                   "phoneVisible": true, "whatsapp": true},
  "ctaStyle": "„Scrie-ne pe WhatsApp” (prefilled message) + „0741 478 540” dialable — 6 WhatsApp links and 5 tel: links per page. „Disponibili Luni-Vineri, între 9:00 - 17:00.” No form, by standing CEO order.",
  "localSpecificity": "deep",
  "localEvidence": [
    "BCPI Alba Iulia, Str. Septimius Severus nr. 59 — office AND street stated",
    "Sate aparținătoare named: Bărăbanț, Micești, Oarda, Pâclișa",
    "„Am executat măsurători atât în Alba Iulia, cât și în satele componente precum Oarda sau Pâclișa”",
    "Cross-sell by geography: „Dacă aveți imobile și în Ciugud sau Daia Română, le putem măsura în aceeași deplasare”",
    "Geography paragraph: malul Mureșului, DN1 (E81) × DN74, A10, Cetatea Alba Carolina, expansion toward Micești/Oarda/Pâclișa",
    "County paragraph: 78 UAT, five BCPI offices — Alba Iulia, Aiud, Blaj, Câmpeni, Sebeș",
    "8 nearby localities with distances: Ciugud 4 km … Cricău 17 km"
  ],
  "whatTheyDoBetter": [
    "C2 names the measurement method and the Stereo 70 precondition; we say „GPS/stație totală” once, inside a process step.",
    "C1 and C2 price per PUNCT; we price per lucrare, which reads far more expensive on a small job.",
    "C2's acte are qualified („vizat OCPI”) and include CI / împuternicire; ours are three unqualified lines.",
    "C2 and C3 name the engineer; we name nobody.",
    "C3 shows ~35 photographs of executed work; we show none.",
    "C1 splits „Inclus în tarif” from „Nu este inclus”; we have no scope boundary anywhere."
  ],
  "whatWeDoBetter": [
    "Local specificity beyond anything in the cohort — no competitor names a single village.",
    "6 FAQ answered in-page with FAQPage markup vs 1 / 0 / 0.",
    "5 numbered process steps ending at the proces-verbal.",
    "Full JSON-LD stack (LocalBusiness + Service + AdministrativeArea + Breadcrumb + FAQPage).",
    "WhatsApp-first conversion with prefilled text — mobile-native; none of the three has it as primary.",
    "Correct Romanian diacritics; C2 has none at all.",
    "The BCPI office and its street address, i.e. we answer „unde se depune dosarul” — nobody else does."
  ]
}
```

### 2.3 `docs/servicii/trasare-teren/alba/aiud.html` — **correctPage for tras-q3, never served**

Same template. **908 gated words**, 28,368 bytes, 6 FAQ, 4 JSON-LD blocks, 6 WhatsApp links,
5 `tel:` links, ANCPI named 4×. Home-town differentiators already present:
*"Aiud (municipiu, județul Alba) este localitatea unde avem biroul… mergem la măsurătoare direct de
la birou și depunem dosarul personal la BCPI Aiud, aflat la câteva minute de noi."*

**Self-distance defect (facts.md §12.1) is FIXED in the current build.** `grep "2 km de Aiud"` returns
**0** on both `trasare-teren/alba/aiud.html` and `intabulare-teren/alba/aiud.html`. The meta
description now reads *"Topograf autorizat ANCPI, **birou chiar în Aiud**"*. The SERP file recorded
"aprox. 2 km de Aiud" in the live snippet — that is a **stale Google cache of a page since fixed**,
not an outstanding defect. Recorded so nobody re-fixes it.

This page loses its own query to `intabulare-teren/alba/aiud.html` (910 words, near-identical
structure) — the **super-attractor** already identified in the SERP file. Two pages, same town,
same template, 908 vs 910 words: the only structural difference between them is service prose.

### 2.4 The served leaves — `mogos` (#2 tras-q1), `rimetea` (#9), `ocolis` (#3 tras-q4), `lopadea-noua` (#4), `albac` (#8)

| Page | Gated words | FAQ | Distance in meta | Notes |
|---|---|---|---|---|
| `mogos.html` | 741 | 4 | aprox. 44 km de Aiud | intro: profil `montan-apuseni`, "limite lungi prin fânețe și păduri" |
| `rimetea.html` | 814 | 6 | aprox. 24 km de Aiud | |
| `ocolis.html` | 727 | 4 | aprox. 34 km de Aiud | **thinnest page ranking**; its price line is the Google snippet |
| `lopadea-noua.html` | 791 | 5 | aprox. 11 km de Aiud | |
| `albac.html` | 752 | 4 | aprox. 79 km de Aiud | worst distance advertised in a snippet on this service |

All five carry `priceDisclosure: "range"` (500 – 1.500 lei), `acteNecesare: 3`, `processSteps: 5`,
`schemaTypes` identical to §2.2, `localSpecificity: "deep"`, no named person, no portfolio.

Two observations, both recorded rather than actioned:

1. **The snippet on tras-q4 #3 is our own price line, verbatim** — *"Preț orientativ: 500 – 1.500
   lei… Prețurile afișate sunt orientative…"*. This is CEO-approved live text (SOP 0.2 keeps it).
   Recorded, per the SERP file's escalation. **Not actioned here.**
2. **`albac.html` ranks #8 on `trasare teren aiud` advertising "aprox. 79 km de Aiud"** in the
   snippet — the single worst instance of the meta-description defect (chair verdict W2) found for
   this service.

### 2.5 The wrong-service pages Google prefers

- `intabulare-teren/alba/aiud.html` — 910 words, 6 FAQ, price *900 – 2.500 lei*. Served at **#2** for
  `trasare teren aiud`, and previously at #5 for `cadastru si intabulare Aiud`. Confirmed
  super-attractor.
- `intabulare-casa-constructie/alba/intregalde.html` — 896 words, 6 FAQ, price *1.000 – 2.500 lei*,
  meta "aprox. 32 km de Aiud". Served at **#3** for `trasare teren alba iulia`. A searcher after
  boundary-staking in the county seat lands on house-registration in a 700-person mountain commune,
  and the first thing under the headline is a price for a different service.

---

## 3. GAP ANALYSIS — SOP Step 5, confidence-tagged

Confidence is **not** derived from unanimity: N=3 (see §0). Each gap states its mechanism.

| # | Gap | Confidence | Effect | Mechanism |
|---|---|---|---|---|
| G1 | **No `trasare-teren × Alba` county page exists.** Two county queries (tras-q1, tras-q4) are answered by Mogoș, Rimetea and Ocoliș. | **HIGH** | **moves-rankings** | Mechanically checkable: the file is absent. Both competitor county-query rankers (C1 #5, C3 #7) answer with a single service page; we answer with three scattered communes. Chair verdict W1 already rules this the top priority. |
| G2 | **Trasare-specific method depth is absent.** C2 names GPS RTK / NTRIP / ROMPOS-RTK, Stereo 70 vs sistem local, and the precondition rule. Our page says "GPS/stație totală" once, in a process step. | **MEDIUM** | **moves-rankings** | C2 holds #4 on an Alba query with **"Lipsesc: alba"** — Google is scoring topical depth about trasare, not locality, on tras-q4. That is direct evidence for this query, not a correlation across a cohort. |
| G3 | **Price unit mismatch.** C1 and C2 both quote **100 lei/punct**; we quote **500 – 1.500 lei per lucrare**. A 2-point boundary check reads as 200 lei there and 500 lei here. | **MEDIUM** | **table-stakes / conversion** | Both price-disclosing competitors chose the same unit independently. Our range is CEO-approved and stays (SOP 0.2 keeps existing ranges); the *unit* is a separate question. **ESCALATED to the chair, not actioned.** |
| G4 | **No named individual.** C2 names "ing. Gurita Ion"; C3 puts "Ing. Emanuel MAXIM" in the H1 with photographs. We say "Topograf autorizat ANCPI, 25+ ani de experiență" and name nobody. | **MEDIUM** | **table-stakes** | 2 of 3 competitors name the person; both are the deeper pages. Partially blocked — the authorization number needs Aurel (chair §3.3 B2) — but **the name is not blocked by anything**. |
| G5 | **No scope boundary.** C1 devotes two H2s to "Inclus în tarif" / "Nu este inclus". We never state what a trasare job does and does not include. | **MEDIUM** | **table-stakes / conversion** | Single-source, but the mechanism is plain: it pre-empts the first phone question and reduces the perceived risk of a range price. |
| G6 | **Acte necesare are unqualified.** C2 requires "Planul de amplasament si delimitare … vizat OCPI", copie CI, copie act de proprietate for an împuternicit. Our three lines carry no OCPI-endorsement qualifier and no ID/împuternicire. | **MEDIUM** | **table-stakes** | Checkable difference in specificity; the qualifier is what makes the list operationally useful. |
| G7 | **No proof of work.** C3 carries ~35 photographs of executed jobs and a "Lucrari recente" list; C2 has a portfolio section. We show zero images of any job. | **LOW** | **table-stakes** | Correlational. 2 of 3 have it, and both are older domains where age may be the real driver. |
| G8 | **Meta description advertises distance from the customer.** `albac.html` ranked #8 on `trasare teren aiud` showing "aprox. 79 km de Aiud"; `mogos.html` ranked #2 showing "aprox. 44 km". | **HIGH** | **moves-rankings (CTR)** | Read directly out of the built HTML and confirmed in the captured snippets. Already ruled: chair verdict D1 / W2, 1,508 pages. Recorded here as service-specific confirmation, not as new work. |
| G9 | **Wrong-service cannibalization inside the same town.** `intabulare-teren/alba/aiud.html` (910 w) beats `trasare-teren/alba/aiud.html` (908 w) on a `trasare` query; `intabulare-casa-constructie/alba/intregalde.html` beats `trasare-teren/alba/alba-iulia.html` on an Alba Iulia `trasare` query. | **HIGH** | **moves-rankings** | Mechanically checkable: same template, same locality data, ±2 words, service prose the only differentiator. This is exactly the failure `loc.serviceNotes` (chair D5) was approved to fix. |
| G10 | **Word count.** Ours 727–908; C1 ~1,200; C2 ~2,100; C3 ~2,800. | **LOW** | **neither** | Correlational only (SOP §5 names this explicitly). We out-rank all three at half their length on three of four queries. **Do not treat length as a target.** |

### BLOCKED BY POLICY — recorded, NOT actioned

| Competitor pattern | Why blocked |
|---|---|
| C1: "termen de finalizare în aproximativ **3 zile lucrătoare** sau chiar **1 zi lucrătoare** … regim de urgență", with a dedicated "Durata aproximativă" H2 | SOP 0.2 — any turnaround/duration claim. **We do not propose an equivalent, on any page, in any hedged form.** Recorded as intelligence: a customer arriving from that page has already been told 3 days / 1 day urgent. |
| C1: "Tarife și durată" as a combined selling block | Same. The tariff half is separately blocked (exact ANCPI tariff unknown). |
| Any new price figure not already in `generator/data/services.json` | SOP 0.2. G3 is a **unit-of-measure** question about the existing approved range, escalated to the chair — not a proposal to invent a figure. |
| Any PNCCF year, sector number, parcel count or date | SOP 0.2 / §6. None appears anywhere above. |

**Note on our one duration-adjacent line.** The pooled FAQ *"Cât durează trasarea unui teren în
{localitate}?" → "De regulă o singură deplasare de câteva ore, cu programare în aceeași săptămână…"*
is live via `services.json` `faqPool` and is selected on `mogos.html`. It describes **our own site
visit**, not BCPI processing — the same category as the approved *"răspundem de obicei în aceeași zi
lucrătoare"*. Recorded for the chair's awareness. **No change proposed either way.**

---

## 4. CONTENT SPEC — SOP Step 6

```markdown
## trasare-teren — county tier (tras-q1 `trasare teren alba`, tras-q4 `trasare limite proprietate alba`)
- Target queries: trasare teren alba · trasare limite proprietate alba
- Our current position: #2 and #9 (q1), #3 (q4)
- Page served: mogos.html (44 km), rimetea.html (24 km), ocolis.html (34 km)
- Page that should be served: /servicii/trasare-teren/alba/index.html — DOES NOT EXIST
- Surveyor cohort analysed (N): 2 competitors on q1, 1 on q4 — SHORTFALL, see §0
- Aggregator share: 5/9 (q1), 7/9 (q4)
- GAPS: G1 [HIGH][moves-rankings] · G2 [MEDIUM][moves-rankings] · G8 [HIGH][CTR] · G3/G5 [MEDIUM][conversion]
- CONTENT SPEC — what the county hub must contain:
  - Section: H1 "Trasare teren în județul Alba" — purpose: give the county query one destination.
    Source: services.json.name + county name.
  - Section: "Ce se trasează" — purpose: convert one word into a purchasable menu, matching C2's
    sub-type list. Must answer: limite de proprietate · colțuri și axe de construcție · cotă zero ·
    contururi · împrejmuiri · rețele și platforme. Source: services.json.hubIntro + process (both
    already contain this vocabulary); no new claims.
  - Section: "Cu ce se măsoară și în ce sistem" — purpose: close G2. Must answer: GPS/stație totală,
    Sistemul de proiecție Stereografic 1970, what happens when the existing documentation carries
    local-system coordinates. Source: services.json.metaDescription already says "precizie
    GPS/stație totală"; the Stereo 70 statement is a standard professional fact, permitted under
    ruling 0.2 §5 (workflow and capability claims are approved). NO precision figure in cm beyond
    the existing FAQ wording "precizie de câțiva centimetri". NO duration.
  - Section: "Ce primiți la final" — purpose: make the deliverable the headline, as C2 does.
    Must answer: puncte materializate (țăruși/borne/vopsea) + proces-verbal de trasare cu schița și
    coordonatele. Source: existing faqPool entry "Ce primesc după trasare?".
  - Section: "Când NU se poate trasa" — purpose: C2's strongest block, and we already own the
    content. Must answer: without cadastral documentation there are no official coordinates.
    Source: existing faqPool "Terenul din {localitate} nu e intabulat…". Links to
    /servicii/intabulare-teren/alba/ — converts a dead end into a job.
  - Section: "Unde se depune / birourile competente" — the five BCPI offices, each linking to its
    localities. Source: existing county data already rendered on leaves.
  - Section: "Localități acoperite" — 76 Alba trasare leaves, grouped orașe first then A–Z,
    with real anchor text "Trasare teren în <Localitate>" (chair W3a).
  - Section: "Acte necesare" — the existing 3 items, plus the qualifier and the two missing items
    evidenced by C2: OCPI-endorsed plan de amplasament, copie CI proprietar, împuternicire.
    Source: services.json.documents (edit) — NOT invented, mirrors a competitor's stated requirement.
  - Section: "Cum decurge procesul" — the existing 5 steps, {localitate} → "județul Alba".
  - Section: price — the EXISTING approved range verbatim + the standing priceDisclaimer. No new figure.
  - Section: FAQ — 6 from the existing faqPool, {localitate} → "județul Alba".
  - Section: Contact rapid — WhatsApp prefill scoped to trasare + county, plus the existing tel:.
- DATA REQUIRED FROM GENERATOR:
  - EXISTS: services.json trasare-teren {name, hubIntro, process×5, documents×3, priceRange,
    faqPool×10, introVariants×8 across 4 profiles, related×4}; localities/alba.json (78 UAT);
    BCPI office mapping; distances; the leaf template.
  - MISSING: a service×county hub route+template (chair W1). Today only
    /servicii/trasare-teren/index.html (national, 505 words, 0 FAQ) and /zone/alba/index.html
    (service-agnostic, 3,687 words) exist. Neither ranked on either county query.
  - MISSING: loc.serviceNotes{} (chair D5) — required for G9, not for this hub.
- BLOCKED BY POLICY: no duration block (C1's "3 zile / 1 zi urgență"); no ANCPI tariff; no new
  price figure; no per-UAT PNCCF status.
- ROUTING DEFECT: YES — county queries answered by Mogoș, Rimetea and Ocoliș; correct page absent.

## trasare-teren — city tier (tras-q2 `trasare teren alba iulia`)
- Our current position: #3
- Page served: intabulare-casa-constructie/alba/intregalde.html — WRONG SERVICE AND WRONG LOCALITY
- Page that should be served: trasare-teren/alba/alba-iulia.html — exists, 873 words, 6 FAQ
- Surveyor cohort analysed (N): 0 competitors. 8/9 results are non-surveyor; 6 of 9 carry
  "Lipsesc: trasare". Google reads this query as real-estate-for-sale intent.
- Aggregator share: 8/9
- GAPS: G9 [HIGH][moves-rankings] — the only gap that matters here. There is no competitor to
  out-content; there is only our own page to route to.
- CONTENT SPEC:
  - Section: serviceNotes for trasare-teren × alba-iulia — purpose: make this page unmistakably
    about trasare, not about intabulare. Must answer: what a builder in Alba Iulia needs before
    săpătură (axe, colțuri, retrageri, cotă zero) and what a buyer needs before signing.
    Source: services.json.introVariants profile "urban" (both variants already written).
  - No new sections. This is a routing job, not a content job. Do not enrich a page Google
    already reaches — enrich the signal that tells Google which page it is.
- DATA REQUIRED FROM GENERATOR: loc.serviceNotes{} (chair D5, approved, not yet shipped).
- BLOCKED BY POLICY: none.
- ROUTING DEFECT: YES — double failure, service and locality.

## trasare-teren — town tier (tras-q3 `trasare teren aiud`)
- Our current position: #2, #4, #8 — three of our own pages
- Pages served: intabulare-teren/alba/aiud.html (wrong service) · lopadea-noua.html (11 km) ·
  albac.html (79 km)
- Page that should be served: trasare-teren/alba/aiud.html — exists, 908 words, 6 FAQ, home-town
  copy already written ("localitatea unde avem biroul", "depunem dosarul personal la BCPI Aiud")
- Surveyor cohort analysed (N): 0 competitors. 6/9 non-surveyor. ZERO competitor surveyor pages
  in the top 10 on our home-town query.
- Aggregator share: 6/9
- GAPS: G9 [HIGH][moves-rankings] · G4 [MEDIUM][table-stakes] · G8 [HIGH][CTR — albac at 79 km]
- CONTENT SPEC:
  - Section: serviceNotes for trasare-teren × aiud — purpose: break the tie with
    intabulare-teren/alba/aiud.html (910 vs 908 words, same template). Must answer something the
    intabulare page structurally cannot: what gets staked on site and what document leaves with
    the builder. Source: services.json process steps 3–5 + faqPool "Ce primesc după trasare?".
  - Section: named surveyor block — Aurel Fleser, inginer topograf autorizat ANCPI. The NAME and
    the ROLE ship now; the authorization seria/număr/categorie stays a marked slot until Aurel
    supplies it (ruling 0.1). Closes the half of G4 that is not blocked.
  - No FAQ additions: 6 of 10 pool entries are already selected here, and faqPool is size-frozen
    (SOP §4.8 / chair D13).
- DATA REQUIRED FROM GENERATOR: loc.serviceNotes{}; a named-person partial (chair §3.3 B2, blocked
  on the ANCPI number for the number only, not for the name).
- BLOCKED BY POLICY: ANCPI seria/număr — leave a marked slot, never invent. No duration claim.
- ROUTING DEFECT: YES — triple. The exact-match page is beaten by its own siblings three times.
```

---

## 5. What this does NOT establish

- **N=3.** There is no surveyor consensus for `trasare-teren` in Alba, because there are barely any
  surveyor competitors. Two of four queries have none at all. Every "MEDIUM" above rests on a stated
  mechanism, not on a vote.
- The three competitor pages sit on **older domains than ours (live 2026-07-28)**. Domain age is a
  large factor that no on-page work touches. That C2 has 2,100 words and ranks #4 does not establish
  that 2,100 words caused #4 — we rank #3 above it with 727.
- **C3's ranked URL 404s.** Its fields describe the live site, not the indexed document.
- **Zero map packs on all four queries** — proximity is not in play for trasare, so nothing here can
  or should be read as a map-pack recommendation (SOP §6 anti-pattern).
- That building the county hub will change which URL Google serves is a **hypothesis**. It is
  confirmed or refuted by one thing: the Search Console "Pages" report at **2026-08-19** showing the
  served URL per query.
