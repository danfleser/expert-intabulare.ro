# COMPETITOR EXTRACTION — `plan-topografic`

**Date:** 2026-07-29 · **SOP:** `SOP-serp-research.md` §3 Step 3 → Step 6
**Source SERP:** `research/seo-2026-07/serp/plan-topografic-serp.md` (3 of 4 queries captured;
`plan-q4-pc` / `ridicare topografica alba` blocked by Google anti-bot — **still unmeasured**)
**Supplementary SERP row:** `plan topografic Alba Iulia` #2 → Doștat, from
`FINDING-cannibalization.md` (earlier session, not re-captured).
**Method:** WebFetch only, no browser. Directories/marketplaces skipped entirely per SOP §3 Step 2.

---

## 0. Cohort construction and the shortfall

| Query | Organic results | Non-surveyor | Competitor surveyor slots | Our slots |
|---|---|---|---|---|
| `plan topografic alba` (county) | 8 | 4 (3 directory + 1 government) | 2 | **2** |
| `plan topografic pentru autorizatie de construire alba iulia` (city) | 9 | 7 (4 government + 2 directory + 1 other) | 2 | 0 |
| `plan topografic aiud` (town) | 9 | 8 (4 government + 3 directory + 1 marketplace) | **0** | 1 |
| **Total** | **26** | **19 (73%)** | **4 slots / 2 unique URLs** | 3 |

**SHORTFALL, RECORDED NOT PADDED.** The SOP asks for 3–5 surveyor results per query.
After dedupe by URL the entire competitor cohort for this service is **2 pages** —
`cadastrumaxim.ro` and `cadastrumartin.ro` — and **both are homepages, not plan-topografic
service pages.** On `plan topografic aiud` the surveyor cohort is **zero**: nothing but municipal
PDFs, a road-authority expropriation plan, a CAD-file marketplace and two directory profiles.

**Consequence for every downstream reader: there is no meaningful "surveyor consensus" to compute
for this service.** N=2, and neither page is topically dedicated. Every consensus statement below
is therefore reported as "2 of 2", which is a weak base. This is itself the most important finding
— see §4 GAP-1.

Non-surveyor breakdown is unusual for this vertical: **government (8 of 26, 31%) outweighs
directories (8 of 26, 31%) and beats them on the two most commercial queries.** Municipal urbanism
portals and scanned primărie PDFs are the real incumbent, not necesit.ro.

---

## 1. Competitor page extractions (SOP Step 3 schema, verbatim fields)

### 1.1 cadastrumaxim.ro

```json
{
  "url": "https://cadastrumaxim.ro",
  "domain": "cadastrumaxim.ro",
  "pageType": "surveyor",
  "rankedFor": [
    {"queryId": "plan-q1-pc", "rank": 1},
    {"queryId": "plan-q2alt-pc", "rank": 2}
  ],
  "wordCount": 850,
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
    {"level": 2, "text": "Meteo"},
    {"level": 2, "text": "Da-ne un Like!"}
  ],
  "sectionsPresent": [
    "Lucrari - Servicii (23-item deliverable menu)",
    "Prezentare birou",
    "Informare Clienti (program, programare, recepție documente)",
    "Localizare pe Harta",
    "Contact",
    "Carte de Vizita Online",
    "Noutati",
    "Calendar",
    "Galerie foto (birou, echipă, autovehicule 4x4)",
    "Flag counter / Meteo (filler widgets)"
  ],
  "questionsAnswered": [
    "Ce lucrări execută biroul? (answered as a 23-item named list, not prose)",
    "Cât costă? (answered by refusal: 'Costurile se calculeaza in functie de specificul lucrarii, de aceea este necesar sa ne contactati')",
    "Când și cum vin la birou? ('Va rugam sa va PROGRAMATI APELAND', 'Luni pana Vineri intre orele 8:00 - 16:00', 'RECEPTIE DOCUMENTE ZILNIC INTRE ORELE 9.00 - 13.00')",
    "Ce pot rezolva fără programare? ('SOLICITARE EXTRAS DE CARTE FUNCIARA' și 'EXTRAS DE PLAN CADASTRAL')"
  ],
  "priceDisclosure": "none",
  "priceValues": "NONE on the ranking page. Explicit refusal: 'Costurile se calculeaza in functie de specificul lucrarii, de aceea este necesar sa ne contactati 0775 617 204 sau 0766 216 570!' Only commercial number on page is a discount: '10% REDUCERE PENTRU CLIENTII VENITI DE PE SITE'.",
  "durationClaim": "NONE numeric. Soft claim only: 'timp scurt' / 'rapiditate'. Office hours are stated ('8:00 - 16:00', reception '9.00 - 13.00') but no turnaround.",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {
    "ancpiAuthNumber": false,
    "namedPerson": true,
    "photoOfPerson": true,
    "reviews": false,
    "yearsExperience": true,
    "portfolio": true,
    "phoneVisible": true,
    "whatsapp": false
  },
  "ctaStyle": "Phone-first + appointment. 'Va rugam sa va PROGRAMATI APELAND: 0775 617 204'. Two mobile numbers, two Yahoo/Gmail addresses, a 'inregistrare' button into their own client system (register.php), a sendmessage.php contact form, and an off-site self-service portal www.ExtraseCF.ro.",
  "localSpecificity": "named-places",
  "whatTheyDoBetter": [
    "A 23-item DELIVERABLE menu using the document names people actually search: 'Plan Amplasament/Topografic', 'Planuri de Situatie', 'Curbe de Nivel - Planuri 3D', 'Profile Topografice', 'Ridicari Topografice', 'Determinari GPS', 'Nivelment', 'Calcul Volum', 'Relevee', 'Studii Topografice', 'Aviz Tehnic O.C.P.I.', 'P.A.C.', 'Certificat de Urbanism', 'Trasari Topografice', 'Expertize Tehnice', 'Identificari'. Google rendered this list AS the snippet on both queries — the list is what ranks.",
    "Names the surveyor: 'Ing. Emanuel MAXIM'.",
    "Cites the governing instrument by name: 'Regulamentul la Ordin 600/2023 al Directorului General al ANCPI'.",
    "Exact street address in Alba Iulia: 'Str. Septimius Severus, Nr. 55, Ap. 3' — the same street as BCPI Alba Iulia.",
    "A self-service transactional sub-brand (ExtraseCF.ro) that captures the 'extras CF / extras de plan cadastral' intent — exactly the intent the Google Imagini pack shows for this query.",
    "Photos of the office, team and 4x4 field vehicles — physical-capability proof.",
    "Operational transparency: appointment policy, opening hours, document-reception window."
  ],
  "whatWeDoBetter": [
    "We have process steps, acte necesare, a real FAQ, structured data, WhatsApp, and per-locality content. They have none of these.",
    "Their page is a 2000s-era homepage with Flag Counter and a weather widget; ours is a designed service page.",
    "They publish no acte necesare at all — a searcher cannot self-qualify before phoning."
  ]
}
```

### 1.2 cadastrumartin.ro

```json
{
  "url": "https://cadastrumartin.ro",
  "domain": "cadastrumartin.ro",
  "pageType": "surveyor",
  "rankedFor": [
    {"queryId": "plan-q1-pc", "rank": 4},
    {"queryId": "plan-q2alt-pc", "rank": 4}
  ],
  "wordCount": 475,
  "headingOutline": [
    {"level": 1, "text": "Birou Cadastru Martin"},
    {"level": 2, "text": "Ati facut alegerea perfecta"},
    {"level": 3, "text": "Peste 9 ani de experienta"},
    {"level": 3, "text": "O echipa tanara de specialisti"},
    {"level": 3, "text": "Dotari si echipamente de ultima generatie"},
    {"level": 4, "text": "Bun venit!"},
    {"level": 4, "text": "Despre noi"},
    {"level": 4, "text": "Actualizare date imobil si plan topo-cadastral"}
  ],
  "sectionsPresent": [
    "Servicii", "Despre noi", "Acte necesare", "Legislatie",
    "Portofoliu", "Galerie foto", "Contact", "Slider (6 images)"
  ],
  "questionsAnswered": [
    "De ce noi? (answered as three claims: 'Peste 9 ani de experienta' / 'O echipa tanara de specialisti' / 'Dotari si echipamente de ultima generatie')",
    "Ce acte îmi trebuie pentru lucrarea mea? (answered by a 7-branch 'Acte necesare' index, one branch per work type)",
    "Ce lege se aplică? (a named 'Legislatie' section)"
  ],
  "priceDisclosure": "none",
  "priceValues": "NONE anywhere on the ranking page.",
  "durationClaim": "NONE. No 'X zile', no 'termen', no 'urgenta'.",
  "acteNecesare": {"present": true, "itemCount": 7},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {
    "ancpiAuthNumber": false,
    "namedPerson": true,
    "photoOfPerson": false,
    "reviews": false,
    "yearsExperience": true,
    "portfolio": true,
    "phoneVisible": false,
    "whatsapp": false
  },
  "ctaStyle": "Weak. No prominent button, no form, no visible phone in the ranking view — only 'mai mult' links into the service sub-pages.",
  "localSpecificity": "generic",
  "whatTheyDoBetter": [
    "'Acte necesare' is not one list — it is a SEVEN-BRANCH INDEX, one entry per work type, each a named legal/administrative procedure: 'SCHIMBAREA CATEG. DE FOLOSINTA', 'DOC. AUTORIZATIE DE CONSTRUIRE – PAC', 'DOC. SCOATERE DIN CIRCUITUL AGRICOL – SCA', 'NOTARE CONSTRUCTIE', 'ALIPIRE/ DEZLIPIRE', 'PRIMA INSCRIERE EXTRAVILAN (INTABULARE)', 'PRIMA INSCRIERE INTRAVILAN/ MODIF. LIMITA SI SUPRAFATA'. This is the structure that matches the permit-driven query.",
    "Names the deliverable in the heading itself: 'Actualizare date imobil si plan topo-cadastral' — Google used this line as the snippet.",
    "Names the surveyor: 'Inginer Dipl. Martin Nicolae'.",
    "Quantified experience: 'peste 9 ani de experienta'.",
    "Has a dedicated 'Legislatie' section — a citable-authority signal we have nowhere.",
    "Names the deliverable vocabulary in prose: 'ridicari topografice de detaliu, planuri de situatie si de amplasament'.",
    "States accreditation: 'acreditati de Agentia Nationala de cadastru si Publicitate Imobiliara'."
  ],
  "whatWeDoBetter": [
    "Their CTA is close to nonexistent — no visible phone, no form, no WhatsApp. Ours has 6 WhatsApp links and 5 tel: links per page.",
    "No structured data; we have 4 JSON-LD blocks.",
    "No local specificity at all beyond 'Alba Iulia, Judetul Alba' — no BCPI office, no villages, no distances.",
    "No process description; ours has 5 named steps.",
    "~475 words vs our ~850."
  ]
}
```

### 1.3 Non-cohort intelligence (recorded, NOT part of any consensus)

Included because the cohort is only 2 pages and the real incumbent on this service is not a
surveyor. **None of the below is imitable by a service business and none of it is used to compute
consensus.**

| Source | Type | What it is | Why it matters |
|---|---|---|---|
| `aiud.ro/pdfs/alte_documente/...` | government | Scanned **"EXTRAS DE PLAN CADASTRAL"** (29 pp.) and **"Plan topografic"** (PUZ, 4 aug. 2022) | #1 and #2 on `plan topografic aiud`. Google reads this query as *the document*, and answers it with the document. |
| `se.apulum.ro/Registratura/RegistruUrbanism` | government | Alba Iulia building-permit register | #1 on the permit query. |
| `portal.apulum.ro/acte-necesare-primaria-indsoft` | government | Primăria Alba Iulia "acte necesare" portal | #9 on the permit query. **Fetch verified 2026-07-29: the live page is a navigation shell — it lists the categories "Autorizații de construire", "Certificate de urbanism", "Acte necesare" but the document chain itself sits behind linked registries/forms.** The SERP capture's quoted chain (*Certificatul de urbanism · Dovada, în copie legalizată, a titlului asupra imobilului · extrasul de plan cadastral…*) could NOT be re-verified at this URL. **Do not cite it as sourced until re-verified.** |
| `e-serviciielectronice.sibiu.ro` | government | Sibiu permit register, ranking in Alba Iulia | Ranks only because it contains the string *"PLANULUI TOPOGRAFIC VIZAT O.C.P.I. RECEPȚIONAT CU P.V. NR. 298/2026"*. Confirms the exact phrase **"plan topografic vizat OCPI"** is the load-bearing token on this query. |
| `cadastru24.ro/lucrari/Alba/Alba` | directory | *"Portofoliu de lucrari de Plan Topografic de situatie in Alba"* | Ranks on 2 of 3 queries with a **portfolio of past works**. Neither surveyor in the cohort ranks a portfolio; the directory owns that format. |
| `cad-atlas.com/Cities` | marketplace | "Aiud Site Plan \| DWG Site Plan", rated 4,8 (127) | Someone is monetising *DWG site plans for Aiud*. Demand for the deliverable in CAD format is real. |
| `sicap.ai` | directory | Public-tender award to **PFA PAVEL GHEORGHE TOPOMETRIST** (Aiudul de Sus): *"Elaborare documentatii topografice - planuri topografice"*, **6.000 RON / 1.200,00 EUR** | The only commercial competitor visible in Aiud, and he has **no website** — he ranks through SICAP records and a necesit.ro profile. **This is a public-procurement contract value, NOT a retail benchmark. Do not treat it as a consumer price.** |

---

## 2. Competitor price & duration intelligence (SOP Step 3 — record theirs, publish none of ours)

| Source | Price on the ranking page | Duration on the ranking page |
|---|---|---|
| cadastrumaxim.ro | **NONE.** Explicit refusal + phone. Only figure: "10% REDUCERE PENTRU CLIENTII VENITI DE PE SITE". | **NONE numeric.** "timp scurt", "rapiditate" only. |
| cadastrumartin.ro | **NONE.** | **NONE.** |
| sicap.ai (non-cohort) | 6.000 RON / 1.200,00 EUR — *public tender, not retail* | — |
| cadastru24.ro (directory, non-cohort) | portfolio listing, no price surfaced in capture | — |

**What the customer has already been told before reaching us: nothing.** Unlike the
`intabulare-apartament` and `dezmembrare-alipire` cohorts (necesit.ro 560–810 lei,
brig.ro 336–2.100 RON), **no ranking competitor for `plan-topografic` publishes a price or a
turnaround.** The customer arrives with no anchor.

**No action proposed in either direction.** Our live orientative range
(`priceRange: "800 – 2.000 lei, orientativ, în funcție de suprafață și scop"`, plus the standing
`priceDisclaimer`) is governed by CEO ruling 0.2, which explicitly keeps it. This report neither
proposes adding a price nor proposes removing one. Recorded as intelligence only.

---

## 3. OUR PAGES, scored on the identical schema (SOP Step 4)

### 3.0 Routing table — served vs correct

| Query | Rank | `servedPage` | `correctPage` | Exists? | Defect |
|---|---|---|---|---|---|
| `plan topografic alba` | **#3** | `docs/servicii/plan-topografic/alba/dostat.html` (53 km) | `docs/servicii/plan-topografic/alba/index.html` | **NO** | **YES** |
| `plan topografic alba` | **#8** | `docs/servicii/plan-topografic/alba/santimbru.html` (28 km) | same as above | **NO** | **YES — self-competition** |
| `plan topografic aiud` | **#4** | `docs/servicii/plan-topografic/alba/dostat.html` (53 km) | `docs/servicii/plan-topografic/alba/aiud.html` | YES | **YES** |
| `plan topografic Alba Iulia` (prior session) | **#2** | `docs/servicii/plan-topografic/alba/dostat.html` | `docs/servicii/plan-topografic/alba/alba-iulia.html` | YES | **YES** |
| `plan topografic pentru autorizatie de construire alba iulia` | **absent** | — | `docs/servicii/plan-topografic/alba/alba-iulia.html` | YES | n/a — we do not rank |

**Doștat is served on 4 of 4 queries where we rank, across two sessions, including the county
query AND the query naming the town our office is in.** Google has canonicalised a ~500-person
commune 53 km from the office as *the* plan-topografic page for the whole county.

**Verified in the repo, 2026-07-29:**
- `docs/servicii/plan-topografic/alba/index.html` — **does not exist.** The directory contains 78
  flat `.html` leaves and no index. Confirms chair verdict **W1**.
- `docs/servicii/plan-topografic/index.html` — **does exist** (39,061 bytes, national hub, links
  all 222 leaves across 5 counties, `Service` + `LocalBusiness` + `BreadcrumbList` JSON-LD).
  **Google served two village leaves ahead of it on the county query.** This is a material
  qualification to W1: *a service hub already exists and still loses to its own leaves.* Building
  a second, county-scoped hub is a reasonable hypothesis, not a demonstrated fix.
- `docs/zone/alba/index.html` — exists (108,545 bytes, 78 `<details>` locality rows, links every
  plan-topografic Alba leaf). Service-agnostic; did not rank on any of the three queries.

**Internal-link counts (whole `docs/` tree, inbound references per plan-topografic Alba leaf):**

| Leaf | Inbound links |
|---|---|
| `vadu-motilor.html` (commune, ~1.400 loc.) | **24 — the site maximum** |
| `alba-iulia.html` (county seat) | 22 |
| `santimbru.html` | 22 |
| `sebes.html` | 22 |
| `aiud.html` (our own town) | 21 |
| `blaj.html` | 20 |
| `dostat.html` (the over-served page) | **18** |
| `sugag.html` | 15 — the site minimum |

Two things follow, and the second one is inconvenient:
1. The hierarchy is flat to the point of inversion — a commune outranks the county seat in
   internal links. Chair verdict **W3** is supported.
2. **Doștat has FEWER inbound links than Aiud and Alba Iulia and is still the page Google
   picks.** Internal-link volume alone does not explain the selection. Any claim that W3 fixes
   this must be labelled a hypothesis; the evidence here is mildly *against* it. See §4 GAP-2.

### 3.1 `docs/servicii/plan-topografic/alba/aiud.html` — the page that SHOULD serve `plan topografic aiud`

```json
{
  "url": "https://expert-intabulare.ro/servicii/plan-topografic/alba/aiud.html",
  "domain": "expert-intabulare.ro",
  "pageType": "surveyor",
  "rankedFor": [],
  "wordCount": 850,
  "headingOutline": [
    {"level": 1, "text": "Plan topografic în Aiud (Alba)"},
    {"level": 2, "text": "Unde se depune dosarul"},
    {"level": 2, "text": "Despre lucrări în Aiud"},
    {"level": 2, "text": "Acte necesare (orientativ)"},
    {"level": 2, "text": "Cum decurge procesul"},
    {"level": 2, "text": "Particularități OCPI în județul Alba"},
    {"level": 2, "text": "Întrebări frecvente — plan topografic în Aiud"},
    {"level": 2, "text": "Contact rapid"},
    {"level": 2, "text": "Alte servicii în Aiud"},
    {"level": 2, "text": "Plan topografic în localități apropiate"},
    {"level": 2, "text": "Vezi și"},
    {"level": 2, "text": "Ai o situație asemănătoare?"}
  ],
  "sectionsPresent": [
    "Intro (situation-led)", "Unde se depune dosarul (BCPI Aiud, Str. Cuza Vodă nr. 14)",
    "Sate aparținătoare (10 named)", "Despre lucrări (2 paragraphs, local geography)",
    "Acte necesare (3 items + Printează lista)", "Cum decurge procesul (5 steps)",
    "Preț orientativ + priceDisclaimer", "Particularități OCPI județ",
    "FAQ (6 <details>)", "Contact rapid (WhatsApp + tel + hours)",
    "Alte servicii în Aiud (7 links)", "Localități apropiate (8 links + distances)",
    "Vezi și", "CTA final"
  ],
  "questionsAnswered": [
    "Terenul e în pantă. Planul include curbe de nivel?",
    "Măsurați și rețelele — apă, gaz, curent?",
    "Cât durează un plan topografic în Aiud?",
    "Cât costă un plan topografic?",
    "Planul topografic e valabil o anumită perioadă?",
    "Planul topografic trebuie vizat OCPI?"
  ],
  "priceDisclosure": "range",
  "priceValues": "800 – 2.000 lei, orientativ, în funcție de suprafață și scop (+ priceDisclaimer). LIVE, approved by CEO ruling 0.2, appears 3× on this page.",
  "durationClaim": "Present, hedged, no numbers: 'Măsurătoarea o programăm de regulă în câteva zile, planul îl întocmim în alte câteva, iar viza OCPI urmează termenele oficiului — care se pot scurta cu taxă de urgență.' Explicitly declines to state a BCPI figure. Judged COMPLIANT with ruling 0.2 (no 'N zile lucrătoare', no BCPI processing claim) but flagged in §6 as policy-adjacent — escalate, do not silently edit.",
  "acteNecesare": {"present": true, "itemCount": 3},
  "processSteps": {"present": true, "stepCount": 5},
  "faq": {"present": true, "questionCount": 6},
  "schemaTypes": ["LocalBusiness", "PostalAddress", "GeoCoordinates", "Service",
                  "AdministrativeArea", "FAQPage", "Question ×6", "Answer ×6",
                  "BreadcrumbList", "ListItem ×4"],
  "trustSignals": {
    "ancpiAuthNumber": false,
    "namedPerson": false,
    "photoOfPerson": false,
    "reviews": false,
    "yearsExperience": true,
    "portfolio": false,
    "phoneVisible": true,
    "whatsapp": true
  },
  "ctaStyle": "WhatsApp-first. 6 api.whatsapp.com links + 5 tel:0741478540 links. 'Scrie-ne pe WhatsApp', 'Disponibili Luni-Vineri, între 9:00 - 17:00'. Free-first-assessment offer: 'Prima evaluare a situației imobilului din Aiud este gratuită — trimiteți actele pe WhatsApp.'",
  "localSpecificity": "deep",
  "whatWeDoBetter": [
    "Only page in the whole comparison with a named BCPI office and street address for the file.",
    "10 named component villages (Aiudul de Sus, Ciumbrud, Gâmbaș, Gârbova de Jos, Gârbova de Sus, Gârbovița, Măgina, Păgida, Sâncrai, Țifra).",
    "5 named process steps; neither competitor has any.",
    "6-question FAQ with FAQPage schema; neither competitor has a FAQ or any schema.",
    "WhatsApp; neither competitor has it.",
    "Named work evidence: 'Am executat măsurători atât în Aiud, cât și în satele componente precum Gârbovița sau Țifra.'"
  ],
  "whatTheyDoBetter": [
    "Both name an individual surveyor. We name nobody on the page.",
    "cadastrumaxim lists 23 deliverables; our page names ~4.",
    "cadastrumartin has a 'Legislatie' section; we cite no instrument.",
    "cadastrumaxim cites 'Ordin 600/2023 al Directorului General al ANCPI' by name.",
    "Both show a portfolio; we show none."
  ]
}
```

**Aiud-specific content defects, verified by grep across the 78 Alba leaves:**

| Token | On `aiud.html`? | On `alba-iulia.html`? | On `dostat.html`? | Alba coverage |
|---|---|---|---|---|
| FAQ *"Ce cuprinde planul topografic pentru autorizația de construire?"* | **NO** | yes | yes | 47/78 |
| `Stereo 70` | **NO** (0×) | yes (2×) | yes (2×) | 47/78 |
| `dwg` | 1× | 5× | 5× | 78/78 |
| `plan de situație` | **NO** | yes (2×) | **NO** | 36/78 |
| `autorizația de construire` (sg. articulated) | **NO** — only "autorizații"/"autorizațiilor" | yes 2× | yes 2× | — |

**The FAQ pool is drawn 4–6 of 10 per page, and Aiud drew the wrong hand.** Our home-town page —
on the one query where zero competing surveyors rank — is missing the single highest-intent
question in the pool, the `Stereo 70` token, and 4 of the 5 `dwg` mentions.

### 3.2 `docs/servicii/plan-topografic/alba/alba-iulia.html` — the page that SHOULD serve both Alba Iulia queries

Same 12-heading skeleton, 846 gated words, 28,117 bytes, 6 FAQ, same 4 JSON-LD blocks, same
`trustSignals` (no named person, no auth number, no portfolio), same CTA (6 WhatsApp / 5 tel).
Differences that matter:

- **Better FAQ draw than Aiud:** includes *"Care e diferența dintre plan topografic și plan de
  situație?"*, *"Ce cuprinde planul topografic pentru autorizația de construire?"*, and
  *"Proiectantul cere planul în format dwg. Îl primesc?"* — the three highest-intent questions in
  the pool. `Stereo 70` present, `dwg` 5×, `plan de situație` 2×.
- Names BCPI Alba Iulia, **Str. Septimius Severus nr. 59** — the same street as competitor
  cadastrumaxim's office.
- Names 4 component villages (Bărăbanț, Micești, Oarda, Pâclișa) and real local geography
  (Cetatea Alba Carolina, DN1/E81, DN74, A10).
- Meta description still leads with **"aprox. 39 km de Aiud"** — the distance-from-customer
  defect (chair D1 / W2), live in the snippet.

**Difference between served and correct page (SOP Step 4 requirement):** Doștat and Alba Iulia are
**structurally identical** — same 12 headings, same 3 acte, same 5 steps, same price range, same
schema, same CTA. They differ only in (a) locality name, (b) BCPI office, (c) two paragraphs of
local geography, (d) which 5–6 of 10 FAQ entries were drawn. **Doștat is not a better page. It is
the same page with a different noun.** That is precisely why Google cannot tell them apart, and it
is the mechanism behind the routing defect — not link volume (Doștat has fewer inbound links).

### 3.3 `docs/servicii/plan-topografic/alba/dostat.html` — the page Google actually serves

835 gated words, 27,448 bytes, 5 FAQ. Meta description: *"Plan topografic în Doștat: acte, pași,
prețuri orientative. Topograf autorizat ANCPI, **aprox. 53 km de Aiud**. Tel. 0741 478 540."*

**On the county query and the Aiud query, the Google snippet is telling the searcher we are 53 km
away from a village they did not search for.** Both problems in one string.

### 3.4 `docs/zone/alba/index.html` — county-level page (SOP Step 4, `tier:"county"`)

108,545 bytes. Headings: *Cadastru și topografie în județul Alba* · *OCPI Alba* · *Contact rapid* ·
*Alte județe* · *Localități din județul Alba* · *Ai o situație asemănătoare?*
78 `<details>` locality rows. JSON-LD: `LocalBusiness`, `PostalAddress`, `GeoCoordinates`,
`BreadcrumbList`, 2 `ListItem`. **No `Service` type, no FAQ, no process, no acte necesare, no
price.** Service-agnostic: it is a locality directory, not an answer to
`plan topografic alba`. It did not rank on any of the three captured queries.

---

## 4. GAP ANALYSIS (SOP Step 5) — ranked, confidence-tagged

### GAP-1 — [HIGH][table stakes] The consensus base is N=2 and both are homepages
2 of 2 surveyor competitors rank a **homepage**, not a plan-topografic page. On `plan topografic
aiud`, **0** surveyor sites rank at all. Mechanically checkable from the capture.
**Consequence:** there is no competitor page for this service to beat, and no template to copy.
The slot for a genuine, locality-specific `plan topografic` service page is **open**. Everything
below is therefore a bet on the intent, not an imitation of a rival.
**Moves rankings?** Framing only — this gap sets the strategy, it is not itself actionable.

### GAP-2 — [HIGH][moves rankings] No `plan-topografic` × Alba hub; four wrong pages served
`docs/servicii/plan-topografic/alba/index.html` does not exist (verified). Google served
Doștat #3 + Sântimbru #8 on the county query, Doștat #4 on the Aiud query, Doștat #2 on the
Alba Iulia query. **4 of 4 ranking slots are the wrong page.**
**Qualification, stated honestly:** `docs/servicii/plan-topografic/index.html` (national hub)
already exists and lost to its own leaves; and Doștat has **fewer** inbound internal links (18)
than Aiud (21) or Alba Iulia (22). So neither "no hub exists" nor "flat linking" fully explains
the selection. Chair verdict W1+W3 remain the best available remedy, but their sufficiency here
is **unproven and mildly contradicted** by the link data. Confirmed or refuted at the 2026-08-19
GSC gate, per SOP §7.

### GAP-3 — [HIGH][moves rankings] The winning vocabulary is the DOCUMENT NAME, and it is absent from all 222 plan-topografic leaves
Google's own signals on these queries are document names: the Imagini pack on two of three
queries is literal *extras de plan cadastral* scans; the #1 and #2 results on `plan topografic
aiud` are primărie PDFs titled *EXTRAS DE PLAN CADASTRAL* and *Plan topografic*; Sibiu's permit
register ranks in Alba Iulia purely because it contains *"PLANULUI TOPOGRAFIC VIZAT O.C.P.I."*;
and cadastrumaxim's snippet IS its 23-item deliverable list.

Grep across **all 222** `plan-topografic` leaves (5 counties), verified 2026-07-29:

| Token | plan-topografic leaves | Elsewhere on the site |
|---|---|---|
| `ridicare topografică` | **0 / 222** | 44 pages (19 în `/dictionar/`, 8 `/parcuri-fotovoltaice/`, 8 `/fonduri-europene/`) |
| `plan de amplasament` | **0 / 222** | 48 pages (14 `/fonduri-europene/`, 13 `/ghid/`) |
| `plan de amplasament și delimitare` | **0 / 222** | — |
| `profile topografice` | **0 / 222** | **0 site-wide** |
| `nivelment` | **0 / 222** | — |
| `aviz tehnic` | **0 / 222** | — |
| `extras de plan cadastral` | **0 / 222** | 11 pages, none of them a service page |
| `P.A.C.` | **1 / 222** | — |
| `plan de situație` | 98 / 222 (36/78 Alba) | — |
| `curbe de nivel` | 148 / 222 (57/78 Alba) | — |
| `Stereo 70` | 129 / 222 (47/78 Alba) | — |

**`ridicare topografică` — the exact phrase of the one query we could not capture
(`ridicare topografica alba`) — appears on 44 pages of this site and on none of the 222 pages
that sell the service.** It currently ranks a glossary entry and a solar-farm page instead.
**Moves rankings?** Plausibly yes — this is term coverage on the exact query, mechanically
checkable, and it costs nothing in policy terms.

### GAP-4 — [HIGH][moves rankings] The permit intent is unserved and we are absent from it
On `plan topografic pentru autorizatie de construire alba iulia` we do not appear at all, while
ranking **#2** for the bare `plan topografic Alba Iulia`. Adding the single most common real
reason to need the document drops us off the SERP. **4 of 9 results are municipal urbanism
portals**; every related search is about the permit, not the survey (`cerere autorizatie de
construire`, `certificat de urbanism`, `Legea 50`).

Both ranking surveyors answer the permit intent by **naming the permit deliverable as a line
item**: cadastrumartin lists *"DOC. AUTORIZATIE DE CONSTRUIRE – PAC"* and *"DOC. SCOATERE DIN
CIRCUITUL AGRICOL – SCA"*; cadastrumaxim leads its menu with *P.A.C.* We have `P.A.C.` on 1 of
222 pages and *scoatere din circuitul agricol* on 0.
**Moves rankings?** Yes for this query family. Table stakes for credibility with builders.

### GAP-5 — [HIGH][table stakes] Nobody is named on our page; 2 of 2 competitors name their surveyor
cadastrumaxim: *"Ing. Emanuel MAXIM"* + office/team/vehicle photos. cadastrumartin:
*"Inginer Dipl. Martin Nicolae"* + *"peste 9 ani de experiență"*. Ours: *"Topograf autorizat
ANCPI, 25+ ani de experiență"* — **no name, no face, on any of the 222 pages.**
**Important distinction the chair should note:** naming *Aurel Fleser, inginer topograf autorizat
ANCPI* does **not** require the authorization number. The chair's B2 block is blocked on the
number (ruling 0.1); the **name is not blocked** and is available today. 2 of 2 competitors have
it, we have none, and we beat both on years (25+ vs 9).
**Moves rankings?** Table stakes / trust. E-E-A-T argument only, correlational.

### GAP-6 — [MEDIUM][moves rankings] Our deliverable list is 4 items; the #1 result's is 23
cadastrumaxim ranks #1 and #2 with a page whose *entire* substance is a 23-item named deliverable
menu that Google renders as the snippet. Our leaves name roughly four things (plan topografic,
curbe de nivel, inventar de coordonate, viza OCPI) and our national hub
`docs/servicii/plan-topografic/index.html` contains **0** occurrences of *curbe de nivel*,
*Stereo 70*, *plan de situație*, *profile topografice*, *GPS* or *nivelment*.
**Confidence MEDIUM not HIGH:** N=1 competitor exhibits this, and the correlation between a long
menu and rank #1 is exactly the kind of claim SOP §7 warns against.

### GAP-7 — [MEDIUM][table stakes] No legislation / authority citation anywhere
cadastrumartin has a named *"Legislatie"* section; cadastrumaxim cites *"Ordin 600/2023 al
Directorului General al ANCPI"* by name. 2 of 2. We cite no instrument on any of the 222 leaves.
**Caution:** citing an instrument by number is a checkable fact. Only cite an instrument whose
number Aurel or a primary ANCPI source confirms — CEO ruling 0.5 forbids inventing numbers, and
*Ordin 600/2023* is a competitor's claim, not a verified one. **Verify before use.**

### GAP-8 — [MEDIUM][table stakes] Portfolio: a directory owns the format
`cadastru24.ro/lucrari/Alba/Alba` — *"Portofoliu de lucrari de Plan Topografic de situatie in
Alba"* — ranks on 2 of 3 queries. Both surveyors link a *Portofoliu*; ours has none anywhere.
**Blocked in practice:** a real portfolio needs real anonymised work from Aurel. Cannot be
generated. Escalate as a CEO ask, do not fabricate.

### GAP-9 — [LOW][correlational] Word count is not the lever here
Ours 850 · cadastrumaxim ~850 · cadastrumartin ~475. We already match or exceed the cohort.
Recorded to close the question: **do not propose "add more words."**

### GAP-10 — [MEDIUM][moves rankings] FAQ selection is a lottery and Aiud lost it
47 of 78 Alba leaves carry *"Ce cuprinde planul topografic pentru autorizația de construire?"*;
`aiud.html` is one of the 31 that do not. Same page lacks `Stereo 70` and has `dwg` 1× vs 5×.
The page we most want to win with — home town, **zero competing surveyors** — has the weakest
draw from the pool.
**⚠ Constraint, binding:** chair ruling **D13** and SOP §4.8 ban **resizing** `faqPool`.
Pinning a mandatory question on flagship pages is a *selection* change, not a resize — but it
still moves shingle document-frequencies across the 50% boilerplate cut for the whole 222-page
sibling group. **Must ship as its own guarded commit with the set-diff guard, one change at a
time.** Do not batch it.

---

## 5. CONTENT SPEC (SOP Step 6)

```markdown
## plan-topografic — county / city / town
- Target queries: plan topografic alba (county) · plan topografic Alba Iulia (city) ·
  plan topografic pentru autorizatie de construire alba iulia (city, permit) ·
  plan topografic aiud (town) · ridicare topografica alba (county — NOT YET CAPTURED)
- Our current position / page served / page that should be served:
    county #3 + #8 → dostat.html + santimbru.html → plan-topografic/alba/index.html (DOES NOT EXIST)
    Alba Iulia #2 → dostat.html → plan-topografic/alba/alba-iulia.html
    permit query: ABSENT → plan-topografic/alba/alba-iulia.html
    aiud #4 → dostat.html → plan-topografic/alba/aiud.html
- Surveyor cohort analysed (N): 2 (cadastrumaxim.ro, cadastrumartin.ro) — BOTH HOMEPAGES.
    Shortfall vs the 3-per-query minimum recorded, not padded. 0 surveyors on the Aiud query.
- Aggregator share: 4/8 county · 7/9 permit · 8/9 Aiud · 19/26 overall (73%).
    Government (8) ties directories (8) and beats them on the two commercial queries.
```

### Sections the pages must contain

| # | Section | Purpose / what it must answer | Data source | Where |
|---|---|---|---|---|
| S1 | **"Ce livrăm" — named deliverable list** | Answer "is the thing I need on this list?" using the document names people search, not the service name. Must name at minimum: *plan topografic*, *plan de situație*, *plan de amplasament și delimitare*, *ridicare topografică*, *curbe de nivel*, *profile topografice*, *inventar de coordonate în Stereo 70*, *plan în format dwg/dxf*, *releveu*, *nivelment*, *calcul de volume*, *plan vizat OCPI*. Closes GAP-3 + GAP-6. | NEW constant block. Constant across all 222 ⇒ boilerplate ⇒ gate-neutral (SOP §5). | all 222 leaves + hub |
| S2 | **"Pentru ce se cere planul"** | Name the permit chain as procedure: *certificat de urbanism → plan topografic vizat OCPI → autorizație de construire (P.A.C.)*, plus *PUZ/PUD*, *scoatere din circuitul agricol (SCA)*, *proiectare branșamente*, *notare construcție*. Closes GAP-4. Mirrors cadastrumartin's 7-branch index, which is the structure that ranks on the permit query. | NEW constant block. **No deadlines, no fees, no processing times — the chain only.** The apulum.ro chain quoted in the SERP capture could NOT be re-verified at that URL; do not cite it until it is. | all 222 leaves + hub |
| S3 | **Named surveyor line** | *"Măsurătoarea o face Aurel Fleser, inginer topograf autorizat ANCPI."* Closes GAP-5. Not blocked by ruling 0.1 — the NAME is available, only the SERIA/NUMĂR slot waits for Aurel and stays marked-empty. | `generator/data/site.json` NAP. Constant ⇒ gate-neutral. | all 222 leaves |
| S4 | **Service×county hub** `docs/servicii/plan-topografic/alba/index.html` | The page a county query deserves. Must carry S1 + S2, the 5 BCPI offices, all 78 Alba localities with real anchor text ("Plan topografic în Alba Iulia", not "Alba Iulia"), an "orașe principale" block above the A–Z, the existing `priceRange`, and `Service` + `FAQPage` + `BreadcrumbList` schema. Becomes the leaves' breadcrumb parent. Closes GAP-2. Chair W1. | Existing `hubIntro`, `process`, `documents`, `priceRange`, `faqPool` in `services.json`. | new page ×12 services, Alba |
| S5 | **Pin the permit FAQ** | Force *"Ce cuprinde planul topografic pentru autorizația de construire?"* + *"Care e diferența dintre plan topografic și plan de situație?"* onto Aiud and Alba Iulia. Closes GAP-10. | `faqPool` selection logic in `generator/lib/pages.js`. **NOT a pool resize (D13 upheld).** Own guarded commit; set-diff guard; do not batch. | flagships first |
| S6 | **Meta description rebuild** | Drop *"aprox. N km de Aiud"* above ~25 km; lead with the deliverable and the BCPI office. Doștat currently advertises *"aprox. 53 km de Aiud"* in the snippet on 4 ranking slots. Chair D1/W2. Head-only ⇒ outside the gate ⇒ zero demotion risk. | `generator/lib/pages.js` meta builder. | 222 plan-topografic leaves (1,508 site-wide) |
| S7 | **`ridicare topografică` coverage** | The exact phrase of the uncaptured county query appears on 44 pages of this site and **0 of the 222** that sell the service. Fold into S1/S2 wording. | wording only, no new data. | all 222 |

### DATA REQUIRED FROM GENERATOR

**Exists today** in `generator/data/services.json` → `plan-topografic`:
`name`, `slug`, `shortName`, `tier2Available: true`, `hubOnly: false`, `metaDescription`,
`hubIntro`, `introVariants` (10, profile-keyed: agricol-campie / montan-apuseni / urban /
periurban), `process` (5 steps), `documents` (3 items), `priceRange`, `faqPool` (10), `related` (4).

**Missing / needed:**
1. **`service.deliverables[]`** — the S1 named-deliverable list. Does not exist on any service.
   New array in `services.json`; render constant across all leaves of the service.
2. **`service.useCases[]`** — the S2 permit-chain / purpose list. Does not exist.
3. **`loc.serviceNotes{}`** — already approved by chair **D5**; required so `alba-iulia.html`
   under `plan-topografic` can say something `intabulare-teren/alba/alba-iulia.html` does not.
   Directly relevant here: Doștat and Alba Iulia are currently structurally identical.
4. **Service×county hub route** — chair **W1**. `docs/servicii/<service>/<county>/index.html`
   does not exist for any service; `docs/servicii/<service>/index.html` does and is national.
5. **FAQ pinning hook** — a `requiredFaq[]` per service, honoured before the rotation, for S5.
6. **`documents` is 3 items** for `plan-topografic` vs cadastrumartin's 7-branch index. Extending
   it is content work on existing data, no schema change.

### BLOCKED BY POLICY

| Item | Competitor position | Our position |
|---|---|---|
| Publishing a price for `plan topografic` | **NEITHER surveyor publishes one.** cadastrumaxim explicitly refuses: *"Costurile se calculeaza in functie de specificul lucrarii… contactati"* | **No change proposed either way.** Our live `800 – 2.000 lei` range + `priceDisclaimer` is kept per CEO ruling 0.2. Not added to, not removed. |
| Turnaround / duration | **NEITHER publishes one.** cadastrumaxim has soft *"timp scurt"* only. | Forbidden by ruling 0.2. **Nothing proposed.** See §6 for one live string that needs a chair eye. |
| ANCPI authorization seria/număr | Neither competitor publishes a number either (cadastrumaxim cites an *Ordin*, not an authorization). | **BLOCKED** pending CEO question 1. Leave the marked slot. Never invent. |
| Citing *Ordin 600/2023 ANCPI* | cadastrumaxim cites it by name. | **BLOCKED pending verification.** A competitor's claim is not a verified fact; ruling 0.5 forbids publishing unverified numbers. |
| Portfolio of past works (GAP-8) | Both link one; a directory ranks with one. | **BLOCKED** — needs real anonymised work from Aurel. Do not fabricate. CEO ask. |
| PNCCF / sector / parcel figures | — | **BLOCKED** by ruling 0.5. Nothing in this cohort requires them. |

**Headline for the chair: `plan-topografic` is the one service where we can compete without
touching ruling 0.2 at all.** No ranking competitor publishes a price or a duration, so the
policy costs us nothing on this service. The levers here are routing, document vocabulary, the
permit chain, and a named person.

### ROUTING DEFECT

**YES — the worst instance on the site.**
Doștat (~500 inhabitants, 53 km from the office) is served on **4 of 4** ranking slots across
2 sessions and 3 distinct queries, including the county query and the query naming our own town.
Sântimbru additionally self-competes at #8 on the county query.
`docs/servicii/plan-topografic/alba/index.html` does not exist.
`docs/servicii/plan-topografic/index.html` does exist and lost to its own leaves.
Doștat has **fewer** inbound internal links (18) than Aiud (21) or Alba Iulia (22).

---

## 6. Flags for the chair — not actioned by this agent

1. **Live hedged duration string, 222 pages.** The `faqPool` answer to *"Cât durează un plan
   topografic în {localitate}?"* reads: *"Măsurătoarea o programăm de regulă în câteva zile,
   planul îl întocmim în alte câteva, iar viza OCPI urmează termenele oficiului — care se pot
   scurta cu taxă de urgență."* I read this as **compliant** with ruling 0.2 — no "N zile
   lucrătoare", no BCPI processing claim, explicit deferral to the office's own terms, and it
   describes our own scheduling. But it is a duration statement on a live page and ruling 0.2 was
   tightened once already. **Escalated, not edited.**
2. **`plan-q4-pc` / `ridicare topografica alba` is still unmeasured** (anti-bot block). It is the
   one query in this service where the search phrase appears on **0 of 222** of our service pages.
   Re-run when the block clears.
3. **The apulum.ro document chain quoted in `plan-topografic-serp.md` §plan-q2alt-pc could not be
   re-verified** by WebFetch on 2026-07-29 — the live page is a navigation shell. The capture's
   quote may have come from a linked sub-page. **Do not cite it as sourced until re-verified.**
4. **W3 (link hierarchy) is mildly contradicted by the data for this service.** The over-served
   page has fewer inbound links than the pages it displaces. W3 is still worth doing on general
   grounds, but do not present it as the explanation for Doștat.
