# COMPETITOR EXTRACTION — `servicii-ocpi`

**2026-07-29 · SOP-serp-research.md Steps 3–6 · source SERP: `research/seo-2026-07/serp/servicii-ocpi-serp.md`**
Method: WebFetch only, no browser. Deduped by URL across the three captured queries.
All extraction is over the **surveyor cohort only**; directories and marketplaces are recorded as
intelligence and are never used to compute consensus (SOP §6 anti-pattern 1).

---

## 0. HEADLINE — read this before the schema blocks

**The surveyor cohort for this service is N = 1.** Across 27 organic slots on three captured
queries, exactly one `pageType: surveyor` result appears, and it ranks with its **homepage**, not
with a page about OCPI services. This is not a sampling failure — it is the finding. **No surveyor
in Alba competes for this vertical with a service page.** The vertical is owned end-to-end by
extras-CF delivery marketplaces.

Consensus computed over N=1 is not consensus. Every gap below is therefore tagged **MEDIUM or LOW**
except the two that are mechanically checkable against our own repo. Anyone who reads a "4 of 4
surveyors do X" style conclusion into this file has misread it.

---

## 1. Cohort construction and shortfall

| Query | Organic slots | marketplace + directory | government | blog | **surveyor** |
|---|---|---|---|---|---|
| ocpi-q1 `extras carte funciara alba` | 9 | 6 | 2 | 1 | **0** |
| ocpi-q2 `extras carte funciara alba iulia` | 9 | 6 | 1 | 1 | **1** |
| ocpi-q3 `extras carte funciara aiud` | 9 | 8 | 1 | 0 | **0** |
| **Total** | **27** | **20 (74%)** | 4 | 2 | **1 (3.7%)** |

**STEP 3 SHORTFALL, RECORDED:** SOP asks for 3–5 surveyor results per query. Available: 0, 1, 0.
Per SOP ("take what exists and record the shortfall — do not pad with directories") the cohort is
one URL. Not padded.

**Map pack: NONE on all three queries.** Per `CAPTURES-2026-07-29.md` F5 this makes the vertical a
pure-organic game in which our Aiud-vs-Alba-Iulia geography costs us nothing.

**Aggregator share is the highest measured anywhere in this research programme** — 8/9 on the home-
town query. Under SOP §2 a high aggregator share normally means "winnable with a genuine service
page". That inference does **not** transfer here, because the aggregators are not ranking as thin
listicles: they are ranking as *transaction endpoints* for a document the searcher wants delivered
in minutes. See §5, judgement J1.

### Classification correction to `CAPTURES-2026-07-29.md`
`apulum.ro`, listed as an undifferentiated organic result on Q1 and Q4 of the earlier capture set,
is **Primăria Municipiului Alba Iulia** — `pageType: government`, not surveyor. Verified by fetch.
It must not enter any surveyor cohort in any service file.

---

## 2. SURVEYOR COHORT — full schema (N = 1)

### 2.1 cadastrumaxim.ro

```json
{
  "url": "https://www.cadastrumaxim.ro/",
  "domain": "cadastrumaxim.ro",
  "pageType": "surveyor",
  "rankedFor": [{"queryId": "ocpi-q2", "rank": 9}],
  "wordCount": 2900,
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
    {"level": 2, "text": "Vizitatori Extern"},
    {"level": 2, "text": "Meteo"},
    {"level": 2, "text": "Calendar"}
  ],
  "sectionsPresent": [
    "24-item service list (incl. 'Aviz Tehnic O.C.P.I.')",
    "external order link to extrasecf.ro",
    "map embed",
    "office hours",
    "photo of the named engineer",
    "10% website discount offer",
    "drone-services note",
    "visitor counter / weather / calendar widgets"
  ],
  "questionsAnswered": [
    "Ce lucrări face biroul (24 tipuri)",
    "Unde este biroul și cum ajung (reperele: Stadionul Municipal, FC Unirea, Direcția Agricolă, «pe strada cu OCPI Alba»)",
    "Cum comand un extras CF fără să vin la birou (→ extrasecf.ro)",
    "Cine este topograful",
    "Ce program are biroul"
  ],
  "priceDisclosure": "none",
  "priceValues": "No figures on page. Explicit refusal: «Costurile se calculeaza in functie de specificul lucrarii, de aceea este necesar sa ne contactati 0775 617 204 sau 0766 216 570!» Plus a promotion: «Beneficiati automat de 10% reducere la orice tip de lucrare!»",
  "durationClaim": "Vague only — «timp scurt», «rapid» (×2). No minutes, hours or days stated anywhere.",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {
    "ancpiAuthNumber": false,
    "namedPerson": true,
    "photoOfPerson": true,
    "reviews": false,
    "yearsExperience": false,
    "portfolio": true,
    "phoneVisible": true,
    "whatsapp": false
  },
  "ctaStyle": "Two mobile numbers repeated prominently + two yahoo/gmail addresses + 'programare prealabila' (appointment required) + an OUTBOUND order button to a separate storefront brand.",
  "localSpecificity": "generic",
  "whatTheyDoBetter": [
    "Named, photographed individual engineer above the fold — «Ing. Emanuel MAXIM».",
    "The one thing that got it into this SERP is a TITLE TAG: «Extras de Carte Funciara | Extras CF Online | Servicii Topocadastrale Online» sits in the homepage <title>. A surveyor ranked on this query by naming the document in the site title, not by writing a page about it.",
    "Owns the transaction end-to-end via a second brand instead of describing it in prose.",
    "Physical-landmark directions («pe strada cu OCPI Alba») — proximity-to-office framing we do not use.",
    "Office hours split into two bands (Mo–Fr 8–16, document handover 9–13) — an operational detail that reads as a real counter operation."
  ],
  "whatWeDoBetter": [
    "Structured data: we have LocalBusiness + Service + BreadcrumbList; they have none.",
    "Acte necesare and numbered process steps: we have both, they have neither.",
    "Explicit hedged price range; they refuse to give any number until you phone.",
    "WhatsApp-first contact; they are phone + yahoo email + appointment.",
    "Correct diacritics and modern register; their site is diacritic-free and carries a visitor counter, a weather widget and a calendar."
  ]
}
```

**Interpretation of the cohort of one.** cadastrumaxim.ro does not hold a service page about OCPI
services. It holds a homepage whose `<title>` names the document, and an outbound link to a
storefront. That is the entire surveyor-side playbook observed on this vertical.

---

## 3. NON-RANKING REFERENCE SET — explicitly NOT part of the cohort

Fetched to answer one question the cohort of one cannot: *do Alba surveyors compete here at all?*
**No consensus is computed over these. They did not rank for any `servicii-ocpi` query.**

### 3.1 cadastrumartin.ro — Alba surveyor, ranked for `cadastru si intabulare Alba Iulia`, not for any OCPI query
- **Zero** OCPI / extras-CF content. No page, no section, no sentence.
- ~650 words. Named engineer "Inginer Dipl. Martin Nicolae", "peste 9 ani" experience, photos.
- No ANCPI authorization number (only "acreditati de Agentia Nationala de cadastru").
- No prices, no durations, no FAQ, no process steps.
- Confirms the cohort finding rather than dilutes it: a real Alba surveyor site treats extras-CF as
  not-our-business.

### 3.2 extrasecf.ro — the ranking surveyor's own storefront brand
Fetched because it is **cadastrumaxim.ro's own property**, linked from its homepage
(*"Comanda acum Extras de Carte Funciara si servicii direct de acasa prin https://extrasecf.ro !
Ieftin, rapid si eficient!"*). This is how the only ranking surveyor actually monetises the query.

- Title: *"Extras de Carte Funciara si Servicii Online – Extras CF si Plan Cadastral Ieftin si Rapid"*
- **Priced product list, three SKUs:** Extras de Carte Funciara **59,00 lei** · Extras de Plan
  Cadastral **69,00 lei** · Consultanță Tehnică/Juridică **290,00 lei** (struck from 350,00 lei).
- Ordering: no account, card payment via Netopia, multiple products in one basket.
  *"Comanda dureaza mai putin de un minut cu cerinte minime"*, *"orice zi, la orice ora"*.
- Trust: *"Documentele livrate de noi sunt obtinute direct de ANCPI"*; Emanuel MAXIM credited.
  No CUI, no reviews, no phone, no WhatsApp, no email on the homepage.
- Scope: *"pentru imobile din toata tara"* — **no BCPI office or locality named anywhere.**
- ~1,400 words.

**This is the sharpest structural fact in the file:** the one surveyor who ranks does so by running
a *separate, national, locality-free, priced storefront* — the opposite of a per-locality service
page. A surveyor competing here does not win by being a better local surveyor.

---

## 4. AGGREGATOR INTELLIGENCE — what the customer has ALREADY been told

Not competitors we imitate. Recorded per SOP Step 3 so we know the anchor price and the anchor
speed already sitting in the searcher's head when they reach us. All figures below are from the
captured SERP titles/snippets in `servicii-ocpi-serp.md`; no aggregator page was fetched.

| Source | pageType | Price shown on the SERP | Speed shown on the SERP |
|---|---|---|---|
| efunciara.ro (`/ocpi-alba`, `/bcpi-aiud`) | marketplace | **49 Lei** | **Livrare 20 Min 24/7**, *"Fără taxe de urgență sau costuri ascunse"* |
| extras-online.ro (`/carte-funciara-alba-iulia`) | marketplace | **49 RON** (in the title) | — |
| eghiseul.ro | marketplace | **89 RON**, *"taxe incluse"* | *"livrare pe email în câteva minute"* |
| cfunciara.ro (`/bcpi/aiud`) | marketplace | — | Table in snippet: Extras CF **15 minute** · Extras CF după adresă **6 ore** · Extras de Plan Cadastral pe Ortofotoplan **15 minute** |
| cf.ro (`/ocpi/alba`, `/comanda-extras-de-carte-funciara/aiud`) | marketplace | — | "ONLINE" positioning |
| extrasecf.ro (surveyor-operated) | marketplace | **59 / 69 / 290 lei** | order takes "<1 minut", "orice zi, la orice oră" |
| alba24.ro | blog | **gratuit** — "proprietarii pot obține documentul gratuit, online, din 2 iunie" | — |

**Anchor established in the market: ~49–89 lei, delivered in 15–20 minutes, 24/7 — and a live news
story saying the owner can get it free.** Our published range for this service is
`"de la 100 lei per serviciu, plus tarifele ANCPI"`.

**Every duration figure in this table is BLOCKED BY POLICY (ruling 0.2 — "any turnaround or duration
claim"). Every price figure is BLOCKED as a NEW figure not in `generator/data/services.json`
(ruling 0.2). Do not propose matching, quoting, or beating any of them.** They are recorded here
only so the content spec is written with knowledge of what the page is being compared against.

**Note the demand split.** The strongest related search on ocpi-q1 is **"Extras carte funciara
gratuit"**, and four of eight related searches on ocpi-q2 are navigational to the government office
(`Ancpi alba iulia`, `Ocpi alba contact`, `Ocpi alba extras cf online`). A meaningful slice of this
query volume is not commercial at all.

### 4.1 The AI Overview — the single most actionable observation on this service
`extras carte funciara aiud` returned the **only AI Overview observed in the entire research
programme** (1 of 21 SERPs). It cites **cfunciara.ro (+2), cf.ro (+2), eFunciara**, and it states:

> *"Biroul de Cadastru și Publicitate Imobiliară (BCPI) Aiud, aflat pe Str. Cuza Vodă, nr. 14,
> județul Alba."*

That string is **already in our generator** —
`generator/data/localities/alba.json` → `aiud.ocpiOffice = { name: "BCPI Aiud", address: "Str. Cuza
Vodă nr. 14, Aiud" }` — and rendered on `docs/zone/alba/index.html` today for all five Alba BCPI
offices. We hold the fact the answer engine is assembling, for 78 Alba localities, and we are not a
cited source because no page of ours pairs that address with the words *extras de carte funciară*.

---

## 5. STEP 4 — OUR PAGES, SCORED ON THE IDENTICAL SCHEMA

### ⚠️ This is NOT a routing defect. It is an inventory absence.

`servicii-ocpi` is `"hubOnly": true` (`generator/data/services.json`), and
`generator/build.js:181` reads `if (s.hubOnly === true) continue; // 4 hub-only services never get
locality pages`. Verified on disk:

```
docs/servicii/servicii-ocpi/        →  index.html ONLY   (1 file, 18,008 bytes)
docs/servicii/servicii-ocpi/alba/   →  does not exist
find docs/servicii/servicii-ocpi -type f | wc -l  →  1
```

The four hub-only services are `topografie-constructii`, `servicii-ocpi`, `certificat-energetic`,
`expertize-documentatii`.

**There is no `servicii-ocpi × locality` page anywhere on the site**, for any of the 78 Alba
localities or the other four counties. So the SOP Step 4 instruction "score the page Google actually
serves and the page it should serve" resolves as:

| Query | `servedPage` | `correctPage` | Difference |
|---|---|---|---|
| ocpi-q1 `extras carte funciara alba` | **none — we are absent from the top 10** | `docs/zone/alba/index.html`, or a `servicii-ocpi × alba` hub that does not exist | n/a — nothing served |
| ocpi-q2 `extras carte funciara alba iulia` | **none** | `docs/servicii/servicii-ocpi/alba/alba-iulia.html` — **never built** | n/a |
| ocpi-q3 `extras carte funciara aiud` | **none** | `docs/servicii/servicii-ocpi/alba/aiud.html` — **never built** | n/a |

**ROUTING DEFECT: NO** — in the `FINDING-cannibalization.md` sense (Google serving a sibling). There
is no wrong page being served because there is no page in the race. This service is the *inverse* of
the cannibalization pattern documented for `intabulare-teren` and `plan-topografic`.

The three closest existing pages are scored below.

---

### 5.1 `docs/servicii/servicii-ocpi/index.html` — the only page that exists for this service

```json
{
  "url": "https://expert-intabulare.ro/servicii/servicii-ocpi/",
  "domain": "expert-intabulare.ro",
  "pageType": "surveyor",
  "rankedFor": [],
  "wordCount": 191,
  "headingOutline": [
    {"level": 1, "text": "Servicii OCPI"},
    {"level": 2, "text": "Acte necesare (orientativ)"},
    {"level": 2, "text": "Cum decurge procesul"},
    {"level": 2, "text": "Contact rapid"},
    {"level": 2, "text": "Servicii conexe"},
    {"level": 2, "text": "Ai o situație asemănătoare?"}
  ],
  "sectionsPresent": ["hubIntro paragraph", "acte necesare", "process", "price line",
                      "stats band (25+/1052+/2681+)", "contact", "3 related services"],
  "questionsAnswered": [
    "Ce servicii de ghișeu faceți (extrase, copii planuri, verificări, depuneri, urmărire dosare)",
    "Ce date trebuie să vă dau",
    "Cum decurge (4 pași)",
    "Cât costă, orientativ"
  ],
  "priceDisclosure": "range",
  "priceValues": "«Preț orientativ: de la 100 lei per serviciu, plus tarifele ANCPI.» + standing priceDisclaimer. LIVE AND APPROVED — ruling 0.2 says keep.",
  "durationClaim": "Only «răspundem de obicei în aceeași zi lucrătoare» — Aurel's own reply time, hedged, explicitly approved by ruling 0.2. No BCPI processing claim. COMPLIANT.",
  "acteNecesare": {"present": true, "itemCount": 3},
  "processSteps": {"present": true, "stepCount": 4},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": ["LocalBusiness", "PostalAddress", "GeoCoordinates", "Service",
                  "BreadcrumbList", "ListItem", "AdministrativeArea"],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": true,
                   "phoneVisible": true, "whatsapp": true},
  "ctaStyle": "WhatsApp-first, 5× tel:0741478540, 14 whatsapp refs, footer mailto (approved).",
  "localSpecificity": "none",
  "whatWeDoBetter": ["Structured data (3 JSON-LD blocks vs 0 for the cohort)",
                     "Acte necesare + numbered process, which the cohort lacks",
                     "WhatsApp CTA"],
  "whatTheyDoBetter": ["Everything about the document itself — see gaps"]
}
```

**Mechanically checkable facts about this page:**
- **191 content words.** An ordinary locality leaf carries ~876 (`facts.md` §5). This is the
  thinnest service page on the site by a wide margin, and it is 18,008 bytes against a
  `MAX_LEAF_BYTES` of 61,440 — roughly 43 KB of unused headroom.
- **0 `<details>` FAQ blocks and no `FAQPage` schema**, against 5 FAQ blocks on an ordinary leaf.
- **`services.json` already contains 6 written faqPool entries for this service that are never
  rendered on the hub.** They exist, in finished Romanian, and the page does not show them.
- **`localSpecificity: none`.** The page names no locality, no BCPI office and no county in its
  content region. The strings "Alba" and "Aiud" appear only in the site chrome (nav, footer NAP).
- The stats band still carries **"2681+ colaborări"**, which the chair verdict already ruled should
  be dropped in the register sweep (§3.3, B6).

**⚠️ LATENT POLICY VIOLATION — flag before anyone "just renders the faqPool".**
`services.json → servicii-ocpi.faqPool[4]` reads:

> Q: *"Cât durează obținerea unui extras de carte funciară?"*
> A: *"Extrasul de informare **se obține de regulă în câteva zile lucrătoare**, sau mai repede online
> pentru imobilele cu carte funciară electronică…"*

That is a **duration claim about BCPI/OCPI processing** — forbidden by ruling 0.2. It is **not
currently rendered** (the hub emits 0 `<details>`), so it is latent, not live. Any implementation
step that renders the faqPool on this hub ships a policy violation unless that entry is rewritten
first. **This is a trap, not a task.**

---

### 5.2 `docs/zone/alba/index.html` — the county page, `correctPage` for ocpi-q1

```json
{
  "url": "https://expert-intabulare.ro/zone/alba/",
  "wordCount": 3687,
  "headingOutline": [
    {"level": 1, "text": "Cadastru și topografie în județul Alba"},
    {"level": 2, "text": "OCPI Alba"},
    {"level": 2, "text": "Contact rapid"},
    {"level": 2, "text": "Alte județe"},
    {"level": 2, "text": "Localități din județul Alba"},
    {"level": 2, "text": "Ai o situație asemănătoare?"}
  ],
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": ["LocalBusiness", "PostalAddress", "GeoCoordinates", "BreadcrumbList", "ListItem"],
  "localSpecificity": "deep",
  "priceDisclosure": "none",
  "durationClaim": "none — COMPLIANT"
}
```

**What it already has, and this is the asset:** an `OCPI Alba` section listing **all five BCPI
offices with street addresses** —

> *"OCPI Alba, Str. Septimius Severus nr. 59, Alba Iulia. Birouri de cadastru și publicitate
> imobiliară (BCPI): BCPI Alba Iulia (Str. Septimius Severus nr. 59), BCPI Aiud (Str. Cuza Vodă
> nr. 14, Aiud), BCPI Blaj (Str. Gării nr. 4), BCPI Câmpeni (Str. Meșteșugarilor nr. 2),
> BCPI Sebeș (Str. Depozitelor nr. 2)."*

Plus a tariff paragraph that is **correctly worded under ruling 0.2** — it names the existence of
the tariff and of the urgency regime **without stating any amount or any term**:

> *"Tarifele OCPI … sunt stabilite prin ordin al directorului general ANCPI și se achită la
> depunerea dosarului; pentru majoritatea serviciilor există și regim de urgență, cu tarif
> suplimentar."*

**What it lacks:**
- The word **"extras"** does not appear in its content region **at all** (0 occurrences). The county
  page that lists the BCPI Aiud address the AI Overview quotes never says what people go there for.
- The 78 locality `<details>` blocks link to **8 services each** — the eight non-hubOnly ones.
  `servicii-ocpi` is **not among them**. It receives exactly **one** link from this page, from the
  global nav dropdown.
- No FAQ, no `FAQPage` schema, no `Service` schema.

---

### 5.3 The `/ghid/` corpus — the pages that actually answer these queries, and a policy conflict

Six live guide pages target exactly this SERP. Measured:

| Page | Content words | `<details>` | FAQPage | Inbound internal links |
|---|---|---|---|---|
| `ghid/extras-carte-funciara-online.html` | 972 | 6 | yes | **17** |
| `ghid/cat-dureaza-un-extras-cf.html` | 1,384 | 7 | yes | **4** |
| `ghid/cum-citesti-un-extras-de-carte-funciara.html` | 1,454 | 7 | yes | — |
| `ghid/taxe-si-tarife-ocpi-ancpi.html` | 932 | 5 | yes | **11** |
| `ghid/copie-plan-amplasament-arhiva-ocpi.html` | 1,270 | 7 | yes | — |
| `ghid/receptia-ocpi-ce-inseamna.html` | — | — | yes | — |
| *(compare)* `servicii/servicii-ocpi/index.html` | **191** | **0** | **no** | **2,058** |

Also live: `en/services/land-registry-extract.html` (21,916 bytes, 4 FAQ blocks) and six
`/dictionar/` entries (`extras-cf-online`, `extras-de-carte-funciara-pentru-informare`,
`extras-de-carte-funciara-pentru-autentificare`, `extras-de-plan-cadastral`, `ocpi`,
`receptie-tehnica-ocpi`).

**The inverted-link finding.** The 191-word page with nothing to say receives 2,058 internal links
(global nav). The 972-word page that answers the query receives 17. Internal link volume is
demonstrably **not** the constraint on the hub — it has more inbound links than any content page on
the site and still does not rank. The constraint is that the page has 191 words and says nothing
about the document.

**Locality specificity of the guide corpus: zero.** Across all six guides, `BCPI` appears **1** time
in total (in `copie-plan-amplasament`); the 3 occurrences of "Aiud" per page are the footer NAP
block, not content. Competitors' URLs are `/bcpi/aiud`, `/bcpi-aiud`, `/extras-carte-funciara-in-aiud-alba`.

#### ⚠️⚠️ POLICY CONFLICT — escalate, do not resolve here

These live guide pages already publish **exactly the two content classes ruling 0.2 forbids**:

*Exact ANCPI tariffs* — `ghid/taxe-si-tarife-ocpi-ancpi.html`:
> *"Extras de carte funciară de informare — **20 lei online / 25 lei la ghișeu**"*;
> *"Extras … pentru autentificare — **40 lei**"*;
> *"Intabulare drept de proprietate la cumpărare (persoane fizice) — **0,15% din prețul din act
> (min. 60 lei)**"*; *"persoane juridice — **0,5%**"*.

*Duration claims about OCPI/BCPI processing* — same page and two others:
> *"Regim de urgență … reduce termenul (ex. prima înregistrare: **de la 18 la 8 zile lucrătoare**)"*
> (`taxe-si-tarife-ocpi-ancpi`);
> *"Extras de informare online (MyEterra) … **minute – câteva ore**"*; *"depus la ghișeu … **de regulă
> 2 zile lucrătoare**"* (`cat-dureaza-un-extras-cf`, whose H1 is literally *"Cât durează obținerea unui
> extras de carte funciară"*);
> *"extrasul se generează de regulă **în câteva minute**… termenul este de cel mult **două zile
> lucrătoare**"* (`extras-carte-funciara-online`, whose meta description reads *"20 lei, gata în
> câteva minute"* and is therefore in the Google snippet today).

**I am not proposing to remove them and I am not proposing to copy them onto service pages.** Both
are out of my remit. What I am recording is that the policy as written and the live site disagree,
on precisely this service, and any content spec for `servicii-ocpi` runs straight into it. The chair
has to rule which is true. Until then the spec in §7 assumes the policy as written and asks for
**no** figure and **no** term.

---

## 6. STEP 5 — GAP ANALYSIS, confidence-tagged

Confidence ceilings are low by construction: **surveyor cohort N = 1.** Gaps marked HIGH are
mechanically checkable against our own repo, not inferred from competitors.

| # | Gap | Confidence | Effect |
|---|---|---|---|
| G1 | **No `servicii-ocpi` × locality page exists at all** (`hubOnly: true`). Competitors' winning URL shape is per-BCPI-office: 7 of 9 results on ocpi-q3 carry `/aiud`, `/bcpi-aiud`, `/bcpi/aiud` or `/extras-carte-funciara-in-aiud-alba` in the URL. We have 1 URL for 5 counties. | **HIGH** (repo-checkable) | **moves rankings** |
| G2 | **The service hub is 191 content words, 0 FAQ, no FAQPage schema**, versus ~876 words / 5 FAQ on an ordinary leaf, and 43 KB of unused byte headroom. 6 finished faqPool entries sit unrendered in `services.json`. | **HIGH** (repo-checkable) | **moves rankings** |
| G3 | **The county hub holds all five BCPI addresses but never says the word "extras"**, while an AI Overview quotes the BCPI Aiud address we hold and cites three marketplaces instead. | **HIGH** (repo-checkable + captured SERP) | **moves rankings** (AI-Overview citation and entity association) |
| G4 | **No document-level differentiation.** Competitors distinguish *extras de informare* vs *extras pentru autentificare* vs *extras de plan cadastral pe ortofotoplan* as separate purchasable things, in titles and URLs. Our hub's intro merges them into one sentence. (Our `/ghid/` and `/dictionar/` pages do distinguish them — the *service* page does not.) | **MEDIUM** | **moves rankings** |
| G5 | **`localSpecificity: none` on the hub.** Cohort is `generic` and the marketplaces are `named-places` (per-BCPI landing pages). We are the only actor here with 78 real locality records and 5 real office addresses in structured data, and we spend none of it on this service. | **MEDIUM** | **moves rankings** |
| G6 | **No named individual, no photo, no authorization number.** The single ranked surveyor leads with a named, photographed engineer. So does the non-ranking reference surveyor. We name nobody. | **MEDIUM** | **table stakes** (blocked on CEO question 1 — the ANCPI number) |
| G7 | **No "why use a person instead of a 49-lei button" argument anywhere.** Every marketplace sells self-service delivery. Our only differentiable product is the part a button cannot do: identifying an unlisted/unconverted property, reading the sarcini, spotting the problem before the notary. Our `faqPool` entries 3 and 6 already say this — on a page that never renders them. | **MEDIUM** | **moves rankings** and **conversion** |
| G8 | Internal link topology is inverted: 191-word hub = 2,058 inbound; 972-word answer page = 17 inbound. | **LOW** (correlational; the hub already has maximal links and does not rank, which argues links are not the binding constraint) | **table stakes** |
| G9 | Word count vs cohort (191 vs ~2,900). | **LOW** — length correlates with rank without causing it (SOP §5). Listed only so nobody re-derives it as a finding. | — |

### BLOCKED BY POLICY — recorded, NOT actioned
- **B-P1** Matching the 15/20-minute, 6-hour, 24/7 delivery claims (efunciara, cfunciara, eghiseul).
  Ruling 0.2: *any* turnaround or duration claim. **Do not propose in any form.**
- **B-P2** Quoting or beating 49 / 59 / 69 / 89 lei. Ruling 0.2: no NEW price figure outside
  `services.json`. Our `"de la 100 lei per serviciu, plus tarifele ANCPI"` stands as-is.
- **B-P3** Stating the exact ANCPI tariff for an extras. Ruling 0.2: forbidden.
  *"plus tarifele ANCPI"* is the correct wording — it names the tariff without pricing it.
- **B-P4** Any per-UAT PNCCF year, sector number or parcel count on OCPI pages. Ruling 0.5.
- **B-P5 (escalation, not a block on me)** The live `/ghid/` corpus already publishes B-P1 and B-P3
  content. §5.3. Chair ruling required.

### Judgement flagged for the chair
**J1 — is this service worth competing for at all?** Every observation points the same way: no map
pack, 74% aggregator share, zero surveyor competition, a market anchor of 49–89 lei with minute-level
delivery, a top related search of *"extras carte funciara gratuit"*, and a national news story saying
owners can get it free. The searcher on these three queries wants **a document delivered now**, not a
surveyor. The one surveyor who ranks does so by operating a separate storefront brand — a business
model, not a page. **A `servicii-ocpi` page will not beat a 49-lei instant-delivery button on the
extras query, and no on-page work changes that.** What it *can* plausibly win is the adjacent,
lower-volume, higher-value intent: *"my property isn't found in the system"*, *"the CF is not
converted"*, *"I'm abroad and need someone at the counter"*, *"read this extras and tell me if I
should sign"* — which is what our unrendered faqPool already answers. The spec below is written for
**that** intent, not for the extras-delivery query. Ruling 0.3 says all 12 services are equal
priority, so this is scoped as *reframe the target*, not *deprioritize the service*.

---

## 7. STEP 6 — CONTENT SPEC

```markdown
## servicii-ocpi — county (ocpi-q1) / city (ocpi-q2) / town (ocpi-q3)
- Target queries: `extras carte funciara alba` · `extras carte funciara alba iulia` ·
  `extras carte funciara aiud`
- Our current position: ABSENT from top 10 on all three.
- Page served: NONE. Page that should be served: does not exist (hubOnly: true).
- Surveyor cohort analysed (N): 1 — cadastrumaxim.ro, homepage, ocpi-q2 rank 9. SHORTFALL RECORDED.
- Aggregator share: 6/9, 6/9, 8/9 (20/27 = 74%). Map pack: NONE on all three.
- ROUTING DEFECT: NO — inventory absence, not wrong-page selection.
```

**GAPS, ranked:** G1, G2, G3 (all HIGH, repo-checkable) → G4, G5, G7 (MEDIUM) → G6 (blocked on CEO
Q1) → G8, G9 (LOW, informational).

**CONTENT SPEC — what the pages must contain.** Sections are specified by purpose and data source.
No Romanian copy is written here (SOP Step 6). Every item below is achievable with **no figure and
no term**, i.e. fully compliant with ruling 0.2 as written.

**S1 — `docs/servicii/servicii-ocpi/index.html` (the existing hub) — enrich from 191 words**
- *Section: "Ce documente obținem de la OCPI"* — purpose: split the merged intro into named,
  distinct documents (extras de informare · extras pentru autentificare · extras de plan cadastral
  pe ortofotoplan · copie din arhivă · certificat de sarcini). Must answer *which one do I need*.
  Data source: existing `/dictionar/` entries + `faqPool[0]`, already written and approved. **No
  tariff, no term.** Closes G4.
- *Section: "Unde se depune / de unde se ridică"* — purpose: name **all five Alba BCPI offices with
  their addresses**, the exact fact the AI Overview is assembling. Data source:
  `generator/data/localities/alba.json → ocpiOffice`, already rendered on `/zone/alba/`. Constant
  across the service ⇒ boilerplate ⇒ gate-safe on a hub (hubs carry only the size gate anyway).
  Closes G3.
- *Section: FAQ (`<details>` + `FAQPage` schema)* — purpose: reach parity with an ordinary leaf.
  Data source: the **6 existing unrendered `faqPool` entries**. ⚠️ **Entry [4] must be rewritten
  first** — it contains *"se obține de regulă în câteva zile lucrătoare"*, a forbidden duration
  claim. Rewrite to the *shape* of the answer without the term ("depinde dacă imobilul are carte
  funciară electronică sau dosar în arhivă — vă spunem imediat în ce situație este al dumneavoastră").
  Closes G2. **Do not resize the pool** (SOP §4.8, chair D13) — rewrite in place.
- *Section: "Când aveți nevoie de om, nu de buton"* — purpose: the only defensible differentiation
  against a 49-lei instant-delivery marketplace. Must answer: imobil negăsit în sistem, CF
  neconvertită/în arhivă, proprietar în diaspora, extras primit dar neînțeles, sarcini/notări care
  ar trebui să oprească semnătura. Data source: `faqPool[1]`, `faqPool[2]`, `faqPool[5]`, already
  written. Closes G7 and J1.
- *Section: links to the `/ghid/` corpus* — the hub currently links to zero guides. Add
  `extras-carte-funciara-online`, `cum-citesti-un-extras-de-carte-funciara`,
  `copie-plan-amplasament-arhiva-ocpi`, `receptia-ocpi-ce-inseamna`. Partially closes G8.
- *Remove:* "2681+ colaborări" from the stats band — chair verdict §3.3 B6 already ruled it.
- *Budget:* 18,008 → target ≤ 40,000 bytes. Cap is 61,440.

**S2 — `docs/zone/alba/index.html` — one addition**
- Extend the existing `OCPI Alba` section so it says **what people go to each office for**, using
  the word *extras de carte funciară* at least once. Currently 0 occurrences. The tariff paragraph
  already there is correctly worded and must not be touched. Closes G3 at county level.
- Add `Servicii OCPI` to the per-locality `<details>` service lists **only if** the corresponding
  leaf pages exist (see S3). Do not link to a page that is not built.

**S3 — the structural question, for the chair, NOT for me to decide**
Lifting `hubOnly: true` on `servicii-ocpi` would emit ~222 new locality leaves (5 counties). That is
the only way to match the competitors' per-BCPI-office URL shape (G1). **Against it:** every one of
those pages must clear `MIN_UNIQUE_WORDS = 120` page-exclusive words in a sibling group spanning all
five counties, on a service whose real content is office-constant, not locality-varying — precisely
the residual-inflation pattern in `facts.md` §6 and chair ruling **D4** ("office subgroups are 5–11%
of a sibling group … the block lands in every same-office page's residual and drives overlap up").
This is the single most likely mass-demotion event available on this site. **A middle path exists
and is what I would put in front of the chair: build `servicii-ocpi × county` hubs only** — 5 pages,
one per county, each anchored on that county's real BCPI office list. Hubs carry only the size gate
(chair §3.4), so the demotion risk is zero, and it matches the observed `/ocpi/alba` URL shape that
cf.ro ranks with on ocpi-q1 and ocpi-q2. It does not match the `/bcpi/aiud` town-level shape, and I
am not claiming it will win ocpi-q3.

**DATA REQUIRED FROM GENERATOR**
- *Exists:* `ocpiOffice {name, address}` on every locality record (78 Alba + 4 counties);
  `services.json → servicii-ocpi.faqPool` (6 entries, unrendered); `priceRange`; `process`;
  `documents`; the whole `/ghid/` and `/dictionar/` corpus.
- *Missing:* nothing new is needed for S1 and S2. **No new data field is required.** S1 is a
  rendering change on one hub file plus one faqPool rewrite; S2 is one sentence.
- *Would be needed only if S3 is approved:* a per-BCPI-office prose slot, which is exactly what
  ruling D4 forbids on leaves and permits on hubs.

**BLOCKED BY POLICY:** B-P1 (all turnaround claims), B-P2 (49/59/69/89 lei), B-P3 (exact ANCPI
tariff), B-P4 (PNCCF numbers). Plus **B-P5 escalation**: the live `/ghid/` pages already publish
B-P1 and B-P3 content — chair ruling required before any spec on this service can be called
policy-consistent.

**ROUTING DEFECT:** No. Inventory absence. `hubOnly: true`, one URL for five counties.

---

## 8. What this file does not establish

Surveyor cohort **N = 1**, and that one ranks with a homepage, not a service page. Nothing here
supports a consensus claim about "what top surveyors do" on this vertical, because top surveyors do
not appear on this vertical. The strongest statements in this file are the ones checked against our
own repo (G1, G2, G3), not against competitors. Whether building anything for `servicii-ocpi`
changes a served URL is a hypothesis, testable only at the **2026-08-19** Search Console gate.
