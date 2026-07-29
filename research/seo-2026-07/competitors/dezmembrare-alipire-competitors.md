# Competitor extraction — `dezmembrare-alipire`

**Date:** 2026-07-29 · **Method:** SOP-serp-research.md §3 Step 3 (WebFetch, parallel, no browser) + Step 4 + Step 5
**Source SERP:** `research/seo-2026-07/serp/dezmembrare-alipire-serp.md` (complete, 3 queries) plus the
county query `dezmembrare teren alba` already recorded in `FINDING-cannibalization.md`.
**Cohort rule:** consensus computed over `pageType: surveyor` ONLY. Directories, marketplaces,
government and "other" excluded from all consensus statements.

---

## 0. Cohort construction and the shortfall

| Query | Organic results | Non-surveyor | Surveyor cohort | Met the 3–5 target? |
|---|---|---|---|---|
| `alipire teren alba` (county) | 9 | 4 | **5** | YES |
| `dezmembrare teren alba iulia` (city) | 9 | 8 | **0** | **NO — total shortfall** |
| `dezmembrare teren aiud` (town) | 9 | 6 | **1** | **NO — 1 of 3** |

**Aggregator share across the service: 18 of 27 organic slots (67%) are non-surveyor.**
That is directly in line with the SOP's "roughly 6 of 10" prior and vindicates the surveyor-only rule —
a consensus computed over all 27 slots would have been a study of lead-generation directories.

**RECORDED SHORTFALL (SOP §3 Step 3):** two of the three queries returned fewer than 3 surveyor
results. `dezmembrare teren alba iulia` returned **zero**. No padding with directories was performed.
The consensus below therefore rests on **6 deduped surveyor URLs across 5 domains**, all but one
reached through the `alipire teren alba` query.

**Geographic composition of the cohort — the single most important structural fact:**

| Domain | Base | In Alba? |
|---|---|---|
| cadastrumartin.ro | Alba Iulia, jud. Alba | **YES — the only one** |
| expert-topograf.ro | Str. Narciselor 2, Făgăraș, jud. Brașov | no |
| cadastrutopografie.ro | Str. Prevederii 15, Sector 3, București | no |
| expert-topo.com | București / Ilfov | no |
| biroucadastru.ro | national, J40/7265/2022 (București) | no |

**4 of 5 competing surveyor domains are not in Alba county**, and Google explicitly flagged
`Lipsesc: alba` on three of them. The county-level alipire intent is currently being answered by
generic national pages because no genuinely local alipire page is strong enough to displace them.

**Classification note:** `biroucadastru.ro` is NOT on the SOP §3 Step 2 directory list (which contains
the distinct domains `birou-cadastru.com` and `birouri-cadastru.ro`). It sells and performs the work
itself — fixed per-lot tariff, own order form, own OCPI filing — rather than brokering leads, so it is
classified `surveyor`. Flagging the near-collision so a later agent does not silently reclassify it.

---

## 1. Extracted competitor pages (SOP Step 3 schema)

### C1 — biroucadastru.ro/servicii/alipire-teren

```json
{
  "url": "https://biroucadastru.ro/servicii/alipire-teren",
  "domain": "biroucadastru.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "dez-q1alt-pc", "rank": 3}],
  "wordCount": 1300,
  "headingOutline": [
    {"level": 1, "text": "Alipire teren"},
    {"level": 2, "text": "Oferim serviciul de Alipire teren cu termen de finalizare..."},
    {"level": 2, "text": "Alege serviciul"},
    {"level": 2, "text": "Datele lucrării"},
    {"level": 2, "text": "Datele tale de contact"},
    {"level": 2, "text": "Lucrarea ta este în mâini sigure"},
    {"level": 2, "text": "Pașii colaborării cu noi"},
    {"level": 2, "text": "Transparență totală în prețuri"},
    {"level": 2, "text": "Tarife și durată"},
    {"level": 3, "text": "Inclus în tarif"},
    {"level": 3, "text": "Nu este inclus"},
    {"level": 3, "text": "Durata aproximativă"},
    {"level": 2, "text": "Întrebări frecvente"},
    {"level": 2, "text": "Un alt mod de abordare a lucrărilor"},
    {"level": 2, "text": "Simplificăm serviciul de alipire teren"},
    {"level": 3, "text": "Avantajele de a lucra cu noi"},
    {"level": 2, "text": "Pregătit să lucrezi cu noi?"}
  ],
  "sectionsPresent": ["order-form", "process-steps", "price-table", "inclus/nu-este-inclus",
                      "duration", "faq-as-links", "advantages", "company-registration"],
  "questionsAnswered": ["Ce înseamnă procesul de Alipire?",
                        "Acte necesare procesului de Alipire teren"],
  "priceDisclosure": "range",
  "priceValues": "de la 500 LEI/LOT. Included: pre-analiza dosarului, măsurători, întocmire + depunere la OCPI, urmărire proactivă a stadiului. NOT included: taxele OCPI și alte taxe pentru eliberarea documentelor. Disclaimer: 'Tarifele afișate pe această pagină sunt informative...'",
  "durationClaim": "aproximativ 7 zile lucrătoare, sau 3 zile lucrătoare în regim de urgență",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": true, "stepCount": 4},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": false,
                   "phoneVisible": false, "whatsapp": false},
  "ctaStyle": "Inline multi-step ORDER FORM on the service page itself — 'Alege serviciul' → 'Datele lucrării' → 'Datele tale de contact'. Button: 'Completează formularul'. Support link: 'Scrie-ne'.",
  "localSpecificity": "generic"
}
```

- **Process steps, verbatim:** 1. *Prezentarea actelor* · 2. *Stabilirea măsurătorilor* ·
  3. *Întocmirea documentației și depunerea la OCPI* · 4. *Eliberarea documentelor*.
- **`acte necesare` is off-page** — it exists only as a linked article, *"Acte necesare procesului
  de Alipire teren"*. The `Întrebări frecvente` block is likewise two article links, not answers.
- **No phone number, no named person, no ANCPI number, no reviews.** Trust rests entirely on
  company registration data (CUI 45976515, J40/7265/2022, IBAN at OTP).
- `whatTheyDoBetter`: an explicit **Inclus în tarif / Nu este inclus** split — the single clearest
  scope-of-work device in the cohort; an **urgency tier** as a named product; a self-serve order form.
- `whatWeDoBetter`: real inline answers instead of links to answers; a phone number; local
  competence; FAQ schema; WhatsApp.

---

### C2 — cadastrumartin.ro/alipire-dezlipire  ← the only Alba competitor

```json
{
  "url": "https://cadastrumartin.ro/alipire-dezlipire",
  "domain": "cadastrumartin.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "dez-q1alt-pc", "rank": 4}],
  "wordCount": 90,
  "headingOutline": [{"level": 1, "text": "ALIPIRE/ DEZLIPIRE"}],
  "sectionsPresent": ["acte-necesare"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "",
  "durationClaim": "none (the only time reference is document validity: 'EXTRAS DE CARTE FUNCIARA ACTUALIZAT (MAX. 3 LUNI)')",
  "acteNecesare": {"present": true, "itemCount": 5},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": true,
                   "phoneVisible": false, "whatsapp": false},
  "ctaStyle": "NONE — the page has no call to action at all.",
  "localSpecificity": "named-places"
}
```

**Acte necesare, verbatim (all 5):**
1. `EXTRAS DE CARTE FUNCIARA ACTUALIZAT (MAX. 3 LUNI)`
2. `COPIE DOCUMENTATIE INTABULARE SAU PARCELARE (DACA EXISTA)`
3. `CERTIFICAT DE URBANISM (PT. 3 SAU MAI MULTE PARCELE REZULTATE)`
4. `ANEXA 1, 3, 5 (DE COMPLETAT LA PREZENTUL BIROU SAU IN TEREN – DUPA CAZ)`
5. `COPIE BULETIN PROPRIETARI / CERTIFICAT DE INREGISTRARE FIRMA – DUPA CAZ`

- Site strapline: *"Servicii de topografie intabulare si cadastru in Alba Iulia, Judetul Alba"*.
  Named person "Martin Nicolae" appears only in a portfolio link.
- **This is a ~90-word page with no CTA, no price, no phone, no process and no FAQ, and it ranks #4
  in its own county on a commercial query.** It ranks on locality + entity match, not on content.
  It is the strongest single piece of evidence in this study that **content depth is not what is
  deciding this SERP** — and it is beatable by any genuinely local page that also converts.
- `whatTheyDoBetter`: two annotations nobody else has — *"DE COMPLETAT LA PREZENTUL BIROU SAU IN
  TEREN – DUPA CAZ"* (tells the client which forms are our job, not theirs) and the explicit
  **"PT. 3 SAU MAI MULTE PARCELE REZULTATE"** trigger condition on the certificat de urbanism.
- `whatWeDoBetter`: essentially everything else — depth, process, FAQ, schema, price transparency,
  contactability, BCPI routing.

---

### C3 — expert-topo.com/Articole

```json
{
  "url": "https://expert-topo.com/Articole",
  "domain": "expert-topo.com", "pageType": "surveyor",
  "rankedFor": [{"queryId": "dez-q1alt-pc", "rank": 7}],
  "wordCount": 1300,
  "headingOutline": [{"level": 1, "text": "Articole"},
                     {"level": 2, "text": "Cele mai citite articole"},
                     {"level": 2, "text": "Articolele noastre"},
                     {"level": 2, "text": "Contactati-ne"}],
  "sectionsPresent": ["article-index", "pagination", "most-read", "contact"],
  "questionsAnswered": [],
  "priceDisclosure": "none", "priceValues": "", "durationClaim": "none",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": false,
                   "phoneVisible": false, "whatsapp": false},
  "ctaStyle": "'Cereti sa fiti apelat' · 'Evaluare initiala gratuita' · 'Solicitati oferta' · 'Mai mult'",
  "localSpecificity": "generic"
}
```

**This is a blog INDEX page, not an alipire page.** It carries no alipire content, no acte, no
process, and names only București/Ilfov — Google flagged `Lipsesc: alba`. It is a **degenerate
result**: a paginated article listing ranking #7 for a commercial county query.

**Do not treat C3 as evidence of anything a good page should contain.** It is counted in the cohort
for honesty about cohort size, and it is excluded from every consensus count in §2 (noted there as
"of 5 content-bearing pages"). Its only intelligence value is the offer language —
*"Evaluare initiala gratuita"* is the only free-assessment offer seen in the cohort.

---

### C4 — cadastrutopografie.ro/alipire-terenuri

```json
{
  "url": "http://www.cadastrutopografie.ro/alipire-terenuri",
  "domain": "cadastrutopografie.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "dez-q1alt-pc", "rank": 8}],
  "wordCount": 450,
  "headingOutline": [{"level": 1, "text": "Alipire terenuri"},
                     {"level": 2, "text": "Alipire terenuri"}],
  "sectionsPresent": ["definitie", "acte-necesare", "taxe-ocpi", "contact-phone"],
  "questionsAnswered": ["Pentru întocmirea documentației de comasare a două sau mai multe terenuri sunt necesare următoarele acte:"],
  "priceDisclosure": "exact",
  "priceValues": "60 lei — taxă regim normal (7 zile lucrătoare de la data depunerii); 300 lei — taxă regim urgență (3 zile lucrătoare de la data depunerii). These are the OCPI fees, not the surveyor's own fee.",
  "durationClaim": "7 zile lucrătoare de la data depunerii (normal) / 3 zile lucrătoare (urgență)",
  "acteNecesare": {"present": true, "itemCount": 5},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": false,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "'Aveți nevoie de mai multe informații? 0726 676 355' (phone repeated twice); 'Daca doriti sa ne transmiteti un mesaj va rugam sa ne contactati'",
  "localSpecificity": "named-places"
}
```

**Acte necesare, verbatim (all 5):**
1. `acte de proprietate în fotocopie pentru fiecare lot în parte`
2. `certificat de urbanism în original (se obține de la Primăria Locală)`
3. `extras de carte funciară în original pentru fiecare lot`
4. `fotocopie documentație cadastru pentru fiecare lot`
5. `fotocopiile actelor de identitate ale proprietarilor`

- **The "pentru fiecare lot în parte" qualifier on three of five items** is the clearest statement
  in the cohort that alipire paperwork multiplies per parcel. No one else says this.
- Ranks with title **"Alipire si comasare teren"** and uses **`comasare`** as the body-copy term
  throughout, treating it as a synonym of alipire without distinguishing them.
- Does **not** mention notar at all — on a page about merging parcels, which is a notarial act.
- Area: *"Bucuresti si judetul Ilfov"*. `Lipsesc: alba` flagged by Google.

---

### C5 — expert-topograf.ro/servicii/alipire-teren

```json
{
  "url": "https://expert-topograf.ro/servicii/alipire-teren",
  "domain": "expert-topograf.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "dez-q1alt-pc", "rank": 9}],
  "wordCount": 850,
  "headingOutline": [{"level": 1, "text": "Alipire teren"},
                     {"level": 2, "text": "Alipire terenuri"},
                     {"level": 2, "text": "Actele necesare alipirii"}],
  "sectionsPresent": ["definitie", "cand-e-utila", "caz-constructie-pe-mai-multe-terenuri", "acte-necesare"],
  "questionsAnswered": [
    "Alipirea terenurilor este operatiunea cadastrala prin care doua sau mai multe terenuri cu limite comune sunt unite, devenind unul singur.",
    "Alipirea terenurilor este utila daca se doreste obtinerea unui singur imobil cu o suprafata mai mare.",
    "Inscrierea in evidentele de cadastru si carte funciara a unei constructii aflate pe mai multe terenuri ce au limite comune este conditionata de efectuarea unei operatiuni de alipire."
  ],
  "priceDisclosure": "none", "priceValues": "", "durationClaim": "none",
  "acteNecesare": {"present": true, "itemCount": 5},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": false,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "'Pentru informatii suplimentare, nu ezitati sa ne contactati' + [CONTACT] [ALTE SERVICII]. Phone (+40)729181457, email contact@expert-topograf.ro.",
  "localSpecificity": "named-places"
}
```

**Acte necesare, verbatim (all 5):** acte de proprietate în copie legalizată · **certificat de
urbanism în original** · extras de carte funciară în original · copie documentație cadastru ·
copii acte de identitate.
Qualifier: *"Certificat de urbanism in original pentru in 3 sau mai multe loturi — se obtine de la
Primaria Locala"*.

- **The strongest unique angle in the whole cohort:** the third answer above states a *reason to
  need alipire that the owner would not have thought of* — a **building sitting across two or more
  adjoining parcels cannot be registered until the parcels are merged.** That converts a
  "nice-to-have" into a blocker. Nothing on our pages says this.
- Base: Str. Narciselor 2, Făgăraș, jud. Brașov. `Lipsesc: alba` flagged.
- Does not distinguish alipire from dezmembrare on this page; no notar mention.

---

### C6 — expert-topograf.ro/servicii/dezmembrare-teren

```json
{
  "url": "https://expert-topograf.ro/servicii/dezmembrare-teren",
  "domain": "expert-topograf.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "dez-q3-pc", "rank": 5}],
  "wordCount": 1200,
  "headingOutline": [
    {"level": 1, "text": "Dezmembrare teren"},
    {"level": 2, "text": "CAZ 1 - Dezmembrare terenuri cu constructii"},
    {"level": 3, "text": "Restrictii tehnice"},
    {"level": 3, "text": "Operatiunea de dezmembrare presupune 2 etape"},
    {"level": 3, "text": "Actele necesare pentru dezmembrare teren"},
    {"level": 2, "text": "CAZ 2 - Dezmembrare terenuri fara constructii"},
    {"level": 3, "text": "Restrictii tehnice"},
    {"level": 3, "text": "Operatiunea de dezmembrare presupune 2 etape"},
    {"level": 3, "text": "Actele necesare pentru dezmembrare teren fara constructii"},
    {"level": 2, "text": "Termen de executie"}
  ],
  "sectionsPresent": ["caz-1-cu-constructii", "caz-2-fara-constructii", "restrictii-tehnice",
                      "doua-etape-tehnica-juridica", "acte-necesare-per-caz", "termen-de-executie"],
  "questionsAnswered": [
    "Un teren pe care se afla una sau mai multe constructii, poate fi parcelat in 2 sau mai multe imobile.",
    "Aceasta operatiune se face daca se doreste vanzarea sau inchirierea unei parti din acel imobil.",
    "Fiecare lot rezultat din dezmembrare trebuie sa aibe acces la drum.",
    "Limita cadastrala rezultata din dezmembrare nu poate trece prin constructie.",
    "Un teren fara constructii, intravilan sau extravilan, poate fi parcelat in 2 sau mai multe loturi."
  ],
  "priceDisclosure": "none", "priceValues": "",
  "durationClaim": "Termen de executie: 2-3 zile lucratoare. Termen de avizare OCPI: 9 zile lucratoare, sau 3 zile lucratoare in regim de urgenta.",
  "acteNecesare": {"present": true, "itemCount": 4},
  "processSteps": {"present": true, "stepCount": 2},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": false,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "[CONTACT] [ALTE SERVICII] + 'Pentru informatii suplimentare, nu ezitati sa ne contactati'",
  "localSpecificity": "named-places"
}
```

**The two-stage framing, quoted in full:**
> *"Operatiunea de dezmembrare presupune 2 etape: **Dezmembrarea tehnica** – de aceste servicii se
> ocupa specialistii Expert Topograf; **Dezmembrarea juridica** – aceasta parte revine unui notar
> public impreuna cu proprietarul imobilului"*

**The structural device nobody else in the cohort has: the page splits into `CAZ 1 — cu construcții`
and `CAZ 2 — fără construcții`,** each with its own technical restrictions and its own acte list.
That is real diagnostic value — the owner self-identifies before reading anything else. Combined
with the two *restricții tehnice* (every lot needs road access; the new cadastral boundary may not
pass through a building), this is the most genuinely useful competitor page in the study.

---

## 2. Surveyor-cohort consensus

Counted over the **5 content-bearing surveyor pages** (C1, C2, C4, C5, C6). C3 is excluded — it is
a blog index with no alipire content, and including it would understate every denominator.

| Element | Cohort | Ours | Verdict |
|---|---|---|---|
| `acte necesare` list on the page | **4 / 5** (C1 links out) | YES, 4 items | we match |
| **`certificat de urbanism` in that list** | **4 / 4** — unanimous | 1 mention, hedged | **GAP** |
| — with the *when* trigger ("3 sau mai multe loturi/parcele") | **3 / 4** | no | **GAP** |
| — with the *where* ("se obține de la Primăria Locală") | **2 / 4** | no | **GAP** |
| `extras de carte funciară` in the list | 4 / 4 | YES | match |
| `copii acte de identitate` in the list | 4 / 4 | YES | match |
| numbered process / steps | 2 / 5 | YES, 5 steps | **we win** |
| real FAQ block with answers | **0 / 5** | YES, 4–6 `<details>` | **we win** |
| schema.org / JSON-LD detected | **0 / 5** | YES, 4 blocks | **we win** |
| price figures shown | 3 / 5 | YES (hedged range) | parity |
| duration / turnaround claim | 3 / 5 | see §4 policy flag | — |
| **named individual surveyor** | **1 / 5** (link text only) | **no** | cohort vacuum |
| **ANCPI authorization number** | **0 / 5** | **no** | cohort vacuum |
| reviews / testimonials | **0 / 5** | no | cohort vacuum |
| visible phone number | 3 / 5 | YES (`tel:` ×5) | we win |
| WhatsApp | **0 / 5** | YES (×6) | **we win** |
| names a specific BCPI/OCPI office | **0 / 5** | YES (Aiud/Alba Iulia/Sebeș/Câmpeni/Blaj) | **we win** |
| notar mentioned at all | 1 / 5 (C6 only) | YES, 7–14× | **we win** |
| based in Alba county | **1 / 5** | YES | **we win** |
| word count (content) | 90 · 450 · 850 · 1200 · 1300 (median 850) | 799–885 | parity — **LOW confidence signal** |

**Two vacuums worth naming explicitly.** Not one page in this cohort publishes an ANCPI
authorization number, a review count, or a photograph of the person who will do the measurement.
The trust layer of this vertical is empty. That is where CEO question 1 pays off — and it is the
only differentiator here that no competitor can copy quickly.

### Competitor price and duration intelligence — RECORDED, NOT FOR PUBLICATION (ruling 0.2)

What the customer has already been told before reaching us:

| Source | Type | Figure |
|---|---|---|
| biroucadastru.ro (C1) | surveyor fee | **de la 500 LEI/LOT**, OCPI taxes excluded |
| cadastrutopografie.ro (C4) | OCPI fee | **60 lei** normal · **300 lei** urgent |
| necesit.ro (directory) | surveyor fee | alipire **1.000–1.500 lei**; dezmembrare **200–700 lei/lot**; badge 250–880 lei/lot |
| notariate.ro + cadastru24.ro (2 independent) | notary fee | **min. 300 lei + 75 lei per resulting imobil** (+TVA), ANCPI 40 lei |
| biroucadastru.ro (C1) | turnaround | **~7 zile lucrătoare**, **3 zile** urgent |
| cadastrutopografie.ro (C4) | OCPI turnaround | **7 zile** normal, **3 zile** urgent |
| expert-topograf.ro (C6) | split | execution **2–3 zile**; OCPI avizare **9 zile**, **3 zile** urgent |

Two independent sources corroborate the **300 + 75/lot** notary structure, and two independent
sources give **7 normal / 3 urgent** for OCPI. We still publish neither — ruling 0.2 is not
overridden by corroboration. **BLOCKED BY POLICY.**

**Framing observation, not a policy item.** Our live figure is *"1.000 – 2.500 lei, orientativ, în
funcție de numărul de loturi"* — a **per-job** range. The cohort quotes **per-lot** (500 lei/lot,
200–700 lei/lot). A price-shopping customer scanning both reads "500" against "1.000–2.500" and
concludes we are dearer, when for a 3-lot split we may well not be. The existing range stays
(ruling 0.2 — do not remove), but the **unit** it is expressed in is a real conversion risk and is
worth a chair ruling.

---

## 3. OUR pages, scored on the identical schema (SOP Step 4)

All five leaves share one template. Measured on the built HTML in `docs/`.

| | aiud | **alba-iulia** | **spring** | **ciuruleasa** | **vadu-motilor** |
|---|---|---|---|---|---|
| gated word count | 841 | 807 | 885 | 799 | 801 |
| bytes (cap 61,440) | 27,535 | 27,574 | 28,457 | 27,147 | 27,682 |
| `<details>` FAQ | 5 | 5 | 6 | 4 | 5 |
| JSON-LD blocks | 4 | 4 | 4 | 4 | 4 |
| acte necesare items | 4 | 4 | 4 | 4 | 4 |
| process steps | 5 | 5 | 5 | 5 | 5 |
| WhatsApp links | 6 | 6 | 6 | 6 | 6 |
| `tel:` links | 5 | 5 | 5 | 5 | 5 |
| ANCPI/"autorizat" mentions | 10 | 8 | 10 | 10 | 8 |
| `certificat de urbanism` | **1** | **1** | **1** | **1** | **1** |
| `comasare` | **0** | **0** | **0** | **0** | **0** |
| meta distance clause | "birou chiar în Aiud" | "aprox. 39 km de Aiud" | "aprox. 52 km" | "aprox. 69 km" | "aprox. 76 km" |

Shared schema on every leaf: `Service` · `LocalBusiness` (+`PostalAddress`, `GeoCoordinates`) ·
`FAQPage` (+`Question`/`Answer`) · `BreadcrumbList` (+`ListItem`) · `AdministrativeArea`.

```json
{
  "url": "https://expert-intabulare.ro/servicii/dezmembrare-alipire/alba/alba-iulia.html",
  "domain": "expert-intabulare.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId": "dez-q2-pc", "rank": null, "note": "correctPage — NOT served"}],
  "wordCount": 807,
  "headingOutline": [
    {"level": 1, "text": "Dezmembrare / alipire în Alba Iulia (Alba)"},
    {"level": 2, "text": "Unde se depune dosarul"},
    {"level": 2, "text": "Despre lucrări în Alba Iulia"},
    {"level": 2, "text": "Acte necesare (orientativ)"},
    {"level": 2, "text": "Cum decurge procesul"},
    {"level": 2, "text": "Particularități OCPI în județul Alba"},
    {"level": 2, "text": "Întrebări frecvente — dezmembrare / alipire în Alba Iulia"},
    {"level": 2, "text": "Contact rapid"},
    {"level": 2, "text": "Alte servicii în Alba Iulia"},
    {"level": 2, "text": "Dezmembrare / alipire în localități apropiate"},
    {"level": 2, "text": "Vezi și"},
    {"level": 2, "text": "Ai o situație asemănătoare?"}
  ],
  "sectionsPresent": ["bcpi-routing", "localNote", "acte-necesare", "process-steps",
                      "county-ocpi-note", "faq", "contact", "cross-service", "nearby", "see-also"],
  "questionsAnswered": [
    "Vreau să unesc două grădini vecine. Se poate?",
    "Pot vinde lotul imediat după dezmembrare?",
    "În câte loturi pot dezmembra terenul din Alba Iulia?",
    "Cât durează o dezmembrare în Alba Iulia?",
    "Toți frații trebuie să fie de acord cu dezmembrarea terenului moștenit?"
  ],
  "priceDisclosure": "range",
  "priceValues": "Preț orientativ: 1.000 – 2.500 lei, orientativ, în funcție de numărul de loturi. + priceDisclaimer. FAQ adds: 'plus tarifele ANCPI per lot și onorariul notarului'.",
  "durationClaim": "SEE §4 — a hedged BCPI-processing claim IS present and appears to conflict with ruling 0.2",
  "acteNecesare": {"present": true, "itemCount": 4},
  "processSteps": {"present": true, "stepCount": 5},
  "faq": {"present": true, "questionCount": 5},
  "schemaTypes": ["Service", "LocalBusiness", "PostalAddress", "GeoCoordinates",
                  "FAQPage", "Question", "Answer", "BreadcrumbList", "ListItem", "AdministrativeArea"],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": false,
                   "phoneVisible": true, "whatsapp": true},
  "ctaStyle": "WhatsApp-first, 6 prefilled links + 5 tel: links + 'Ai o situație asemănătoare?'",
  "localSpecificity": "deep"
}
```

Our acte necesare (4): *Extras de carte funciară al imobilului (imobilul trebuie să fie intabulat)* ·
*Act de identitate proprietar(i)* · *Certificat de urbanism pentru dezmembrare, unde primăria îl
cere* · *Acordul tuturor coproprietarilor, dacă imobilul e deținut în cote*.

Our process (5): stabilim loturile și verificăm condițiile de urbanism → măsurăm și proiectăm
loturile → întocmim documentația și o depunem la OCPI → mergeți la notar pentru actul de
dezmembrare/alipire → înscrierea noilor imobile în cartea funciară.

**`localSpecificity: "deep"` is earned, and it is our largest content advantage.** The Alba Iulia
localNote names Oarda and Pâclișa as component villages, routes the file to **BCPI Alba Iulia**, and
describes the Alba Iulia–Ciugud–Daia Română corridor. The Aiud page routes to **BCPI Aiud** and
names Aiudul de Sus, Rădești, Mirăslău. Ciuruleasa and Vadu Moților route to **BCPI Câmpeni**,
Șpring to **BCPI Sebeș**. **No competitor names a single BCPI office.**

### servedPage vs correctPage — the routing defect, per query

| Query | Rank | `servedPage` | `correctPage` | Differ? |
|---|---|---|---|---|
| `alipire teren alba` | **absent** | — | none exists (`/servicii/dezmembrare-alipire/alba/` **404**) | **n/a — no page to serve** |
| `dezmembrare teren alba iulia` | **#5** | `…/alba/spring.html` (52 km) | `…/alba/alba-iulia.html` | **YES** |
| `dezmembrare teren aiud` | **#1** | `…/alba/ciuruleasa.html` (69 km) | `…/alba/aiud.html` | **YES** |
| `dezmembrare teren aiud` | **#3** | `…/alba/vadu-motilor.html` (76 km) | `…/alba/aiud.html` | **YES** |
| `dezmembrare teren alba` (earlier session) | #2 / #6 | `berghin` (35 km) / `teius` (18 km) | county hub — does not exist | **YES** |

**ROUTING DEFECT: YES — on every single query where we rank. 5 wrong pages across 4 queries.**

**Scoring the served pages against the correct ones produces almost no content difference.** Șpring
(885 words) is *longer* than Alba Iulia (807). Ciuruleasa and Vadu Moților sit at 799/801 against
Aiud's 841. All five carry identical structure, identical acte lists, identical process, identical
schema, identical CTA density. **The pages Google serves are not worse than the pages it should
serve — they are indistinguishable from them.** That is the defect, restated as a measurement: the
template is doing its job so uniformly that locality is the only variable, and it is not a strong
enough one.

### The internal-link measurement — new, mechanically verified

Total occurrences of each leaf URL across `docs/`:

| Page | Inbound internal links |
|---|---|
| **vadu-motilor** (commune, 76 km) | **25** |
| **spring** (commune, 52 km) | **24** |
| alba-iulia (county seat, ~74k) | 23 |
| sebeș | 23 |
| cut | 23 |
| **aiud** (home town, office here) | **22** |
| berghin | 22 |
| teiuș | 22 |
| blaj | 21 |
| ciuruleasa | 18 |

**Two of the three pages Google actually serves for dezmembrare queries are the two most
internally-linked pages in the entire Alba dezmembrare set — and both are communes.** Alba Iulia
and Aiud rank *below* them. The sitemap adds no differentiation either: every URL carries only
`<loc>` + `<lastmod>`, no `priority`.

This is the chair verdict's W3 hypothesis, now measured for this service rather than assumed. It is
correlational, not proof — Ciuruleasa ranks #1 on 18 links, the lowest count in the table, so link
volume alone does not explain the choice. What it *does* establish mechanically is that the site
gives Google **no hierarchy signal whatsoever**: a 1,200-person mountain commune outranks the county
seat in internal link equity. Any tie is broken arbitrarily because there is nothing to break it with.

### County-level pages — scored

**`docs/zone/alba/index.html`** — 3,771 words, title *"Cadastru și topografie în județul Alba"*.
78 `<details>` blocks, but these are **locality accordions, not FAQ**. Schema: `LocalBusiness`,
`BreadcrumbList`, `PostalAddress`, `GeoCoordinates` — **no `Service`, no `FAQPage`**. It names all
5 BCPI offices. `dezmembrare` appears 160 times and **every one is a link label** ("Dezmembrare /
alipire" in each of 78 locality rows). `alipire` never appears outside those labels.
**This is a locality directory, not a dezmembrare page.** It cannot answer `alipire teren alba`.

**`docs/servicii/dezmembrare-alipire/index.html`** — 760 words, *"Dezmembrare / alipire — Topograf
autorizat ANCPI"*, has `Service` + `LocalBusiness` + `BreadcrumbList`, **0 `<details>`, no FAQ**.
Acte + process only. It is the national service hub; its meta mentions Alba but the page is not
county-scoped.

**`docs/servicii/dezmembrare-alipire/alba/index.html` — DOES NOT EXIST. The URL is a 404.**
And the leaf breadcrumb — visible nav and `BreadcrumbList` JSON-LD alike — reads
`Acasă > Dezmembrare / alipire > Județul Alba > Alba Iulia`, where **"Județul Alba" points to
`/zone/alba/`**, the generic county directory, not to anything service-specific. So the declared
hierarchy routes the crawler from a dezmembrare leaf to a page that is not about dezmembrare. The
service×county tier the SERP is asking for is structurally absent. This is chair-verdict W1,
confirmed for this service.

---

## 4. ⚠️ POLICY FLAG — a live duration claim about BCPI, found on our own pages

**Not actioned. Escalated for a chair ruling.** SOP §0.2 lists as FORBIDDEN: *"Any turnaround or
duration claim — … 'aproximativ N zile lucrătoare', 'în aceeași zi' applied to BCPI processing,
'termen de finalizare N zile'."*

Live today in the `Cât durează o dezmembrare în <Localitate>?` FAQ — in visible HTML **and** inside
the `FAQPage` JSON-LD — on alba-iulia, ciuruleasa and vadu-motilor:

> *"Documentația și recepția la **BCPI Alba Iulia** durează **de regulă câteva săptămâni**, la care
> se adaugă programarea la notar pentru actul de dezmembrare și înscrierea finală. **Cu taxă de
> urgență, termenele OCPI se reduc.**"*

(Same string with *BCPI Câmpeni* substituted on the two Munții Apuseni pages.)

**Why this is genuinely ambiguous rather than a clear breach:** it contains **no number**, it is
hedged twice (*de regulă*, *câteva*), and it is closer in kind to the approved
*"răspundem de obicei în aceeași zi lucrătoare"* than to *"7 zile lucrătoare"*. Against that, it is
a claim about **how long a government office takes**, applied to a **named BCPI**, which is the
exact subject the ruling protects.

**Two facts the chair needs:** the phrase appears in a `faqPool` entry, so it is not confined to
these five pages — and **`faqPool` resizing is banned for this cycle (D13)**, so any remedy must be
an in-place rewording of an existing entry, not a pool change. Also note the competitors publishing
hard turnarounds (7/3 days, 9/3 days) all do so as a **selling point**; ours reads as a caution.

**Recommended disposition:** chair rules explicitly, one way or the other, before any implementing
agent touches `faqPool`. Do not let an agent "fix" this unilaterally — an in-place reword of a
~45%-document-frequency pool entry moves shingles across the boilerplate cut for ~222 pages.

---

## 5. GAPS — ranked, confidence-tagged (SOP Step 5)

Every gap is tagged **moves rankings** or **table stakes**.

1. **[HIGH][moves-rankings] No page exists for the `alipire` intent, and no service×county page
   exists at all.** `/servicii/dezmembrare-alipire/alba/` is a 404; `/zone/alba/` is a locality
   directory with zero alipire prose. We rank **#2 for `dezmembrare teren alba` and are absent
   from `alipire teren alba`** — the same service page, one half of it invisible. Mechanically
   checkable, and the shortfall in the cohort (4 of 5 competitors are non-Alba national pages
   flagged `Lipsesc: alba`) says the query is winnable by any genuinely local page.
   → **chair-verdict W1, confirmed for this service.**

2. **[HIGH][table-stakes] `certificat de urbanism` is unanimous in the cohort (4 of 4 acte lists)
   and near-invisible on ours (1 mention, hedged as "unde primăria îl cere").** Three of four
   competitors state the **trigger** (*"pentru 3 sau mai multe loturi/parcele rezultate"*) and two
   state the **source** (*"se obține de la Primăria Locală"*). This is simultaneously the **#1
   related search on our county query** (`Certificat de urbanism alipire terenuri`) and the
   competitors' most consistent content element. Publishable with **zero numbers**.

3. **[HIGH][moves-rankings] Internal link equity is flat to inverted, measured.** Vadu Moților 25
   and Șpring 24 inbound links against Alba Iulia 23 and Aiud 22; no sitemap `priority`; the
   breadcrumb's county node points away from the service. Two of the three pages Google serves are
   the two most-linked pages in the set. Mechanically checkable; causation unproven (Ciuruleasa
   ranks #1 on the lowest count of all).
   → **chair-verdict W3, confirmed for this service.**

4. **[MEDIUM][moves-rankings] The alipire searcher's real question is the paperwork chain, and the
   entire cohort fails to answer it — an open field.** Six of eight related searches on
   `alipire teren alba` are notarial/urbanistic: *onorariu notar alipire terenuri*, *certificat de
   urbanism alipire terenuri*, *alipire terenuri cu proprietari diferiți*, *alipire terenuri
   legislație*, *alipire terenuri notar*, *model certificat urbanism*. **Only 1 of 5 competitors
   mentions notar at all.** We already mention it 7–14× per page — the foundation is there; the
   alipire-specific chain is not. Two named sub-gaps:
   - **`proprietari diferiți`** — a top-8 related search. Our FAQ asserts the same-owner condition
     (*"aparțin acelorași proprietari"*) and never addresses the different-owners case.
   - **`comasare`** — cadastrutopografie.ro ranks #8 titled *"Alipire si comasare teren"* and uses
     `comasare` as its body term. **We use it 0 times across all 5 pages.** Missing synonym.

5. **[MEDIUM][table-stakes] No case-split, and no "you are blocked until you do this" framing.**
   C6 splits into `CAZ 1 — cu construcții` / `CAZ 2 — fără construcții`, each with its own
   restrictions and acte, plus two hard technical rules (every lot needs road access; the boundary
   may not cross a building). C5 supplies the strongest single sentence in the study: a **building
   standing across two adjoining parcels cannot be registered until they are merged** — turning
   alipire from optional into mandatory. All publishable without a number. We carry the road-access
   rule in one FAQ answer only, and nothing else here.

6. **[MEDIUM][table-stakes] The trust layer is empty across the whole cohort — 0 of 5 publish an
   ANCPI number, reviews, or a photograph.** This is the one differentiator no competitor can copy
   quickly. **BLOCKED** on CEO question 1 (authorization seria/număr/categorie) and on the review
   drive (D11). Not actionable by any content agent today; named so it is not lost.

7. **[MEDIUM][table-stakes] Per-job vs per-lot price framing.** Cohort quotes per lot (500 lei/lot;
   200–700 lei/lot); we quote 1.000–2.500 lei per job. A scanning customer misreads us as dearer.
   The range **stays** (ruling 0.2). Whether the *unit* may be restated needs a chair ruling — it
   would mean deriving a new figure, which §0.2 forbids without approval.

8. **[LOW][table-stakes] Word count is not the lever here.** Cohort median ~850, ours 799–885 —
   parity. And the cohort's **#4 result is a 90-word page with no CTA, no phone, no process and no
   FAQ**, ranking in its own county. Correlational only; do not spend effort on length. Anyone
   proposing "make the page longer" should be shown cadastrumartin.ro.

9. **[BLOCKED BY POLICY] Per-lot prices and turnaround tiers.** 3 of 5 competitors publish
   turnaround (7/3 days ×2 independent, 9/3 days), 3 of 5 publish prices, and biroucadastru.ro sells
   **urgency as a named product tier**. Ruling 0.2 forbids both regardless of corroboration.
   Recorded as intelligence in §2. **Not actioned. Do not re-propose.**

---

## 6. CONTENT SPEC (SOP Step 6)

### dezmembrare-alipire — county tier

- **Target queries:** `dezmembrare teren alba` (we rank #2, serves Berghin/Teiuș) ·
  **`alipire teren alba` (we are absent — unclaimed)**
- **Our position / served / should serve:** #2 → `berghin.html` / `teius.html` → a service×county
  page that does not exist. `/servicii/dezmembrare-alipire/alba/` returns **404**.
- **Surveyor cohort analysed (N):** 5 content-bearing (of 6 fetched; C3 is a blog index)
- **Aggregator share:** 4/9 on the alipire county query; **18/27 (67%) across the service**
- **ROUTING DEFECT:** YES — 5 wrong pages across 4 queries; correct page served 0 times.

**CONTENT SPEC — `/servicii/dezmembrare-alipire/alba/index.html` (new, chair-verdict W1):**

| Section | Purpose / must answer | Data source | Policy |
|---|---|---|---|
| H1 + lead | Name both intents explicitly — *dezmembrare* AND *alipire* — and the county. Claims the intent we are currently absent from. | static | safe |
| **Certificatul de urbanism — când și de unde** | The #1 related search. When it is required (3+ resulting lots/parcels), that it is issued by the local primărie, that it comes **before** the measurement. | competitor-corroborated 4/4; legal/procedural | **no numbers** — safe |
| **Cele două etape: tehnică și juridică** | C6's framing. Surveyor does the technical stage; the notary does the legal stage; nothing registers until both are done. Directly answers `alipire terenuri notar` / `onorariu notar alipire terenuri`. | C6 verbatim structure, reworded | **no fee figures** |
| **Alipire: condiții** | Adjoining boundaries required. **Same owners vs different owners** — the `proprietari diferiți` gap. Include `comasare` as a stated synonym. | C5 + related searches | safe |
| **Când alipirea nu e opțională** | C5's blocker: a building standing across two adjoining parcels cannot be registered until they are merged. | C5 | safe |
| **CAZ 1 / CAZ 2 split** | Cu construcții vs fără construcții — separate restrictions, separate acte. Plus: every lot needs road access; the new boundary may not cross a building. | C6 | safe |
| **Acte necesare** | Raise from 4 to ~6 items, with the *when* and *where* qualifiers the cohort supplies. Adopt C4's *"pentru fiecare lot în parte"* multiplier and C2's *"de completat la biroul nostru"* annotation — the latter tells the client which forms are **our** job. | C2/C4/C5/C6 | safe |
| **Cele 5 birouri BCPI din Alba** | Which office by locality. **0 of 5 competitors do this.** Hub-only per D4. | `zone/alba` data | safe |
| **Localități — orașe principale first, then A–Z** | W3(c). Must not present Alba Iulia and Vadu Moților as peers. | existing | safe |
| FAQ + `FAQPage` schema | 0 of 5 competitors have one. Free structural win. | existing `faqPool` | **see §4 flag** |
| WhatsApp CTA, prefilled | 0 of 5 competitors have WhatsApp. Prefill text is gate-invisible (attributes stripped). | existing | safe |

- **DATA REQUIRED FROM GENERATOR:** service×county hub route (W1) — **missing, blocks everything
  above**. `loc.serviceNotes{}` (D5) — approved, not yet shipped; needed so the dezmembrare leaf and
  the intabulare-teren leaf in one town can differ. Existing and sufficient: BCPI mapping, locality
  tiers, distances, `faqPool`, price range, `priceDisclaimer`.
- **BLOCKED BY POLICY:** per-lot pricing · any turnaround/urgency tier · ANCPI tariff · any invented
  count of lots, parcels or days. **Also see §4** — an existing hedged BCPI-duration claim is live
  and needs a ruling before `faqPool` is touched.

### dezmembrare-alipire — city tier (`dezmembrare teren alba iulia`)

- **Our position:** #5, serving **Șpring** (52 km). Correct page exists and is not served.
- **Surveyor cohort: 0.** Recorded shortfall — no competing surveyor page ranks at all. Eight of
  nine slots are directories, and **two of those directories rank pages about Întregalde and Cib**,
  tiny communes, for a query naming Alba Iulia. The whole vertical is doing what we are doing.
- **Implication:** this SERP is not lost to a better page — it is held by lead-gen listings with the
  same locality-permutation weakness. A page genuinely about Alba Iulia, correctly routed, faces no
  surveyor opposition here.
- **Spec:** flagship #4 in the chair verdict. Priority is **routing** (W1 hub + W3 hierarchy +
  `serviceNotes`), then the §6 content blocks. Note `emol.ro` at #3 shows the Consiliul Local
  publishing each approved dezmembrare with street and CF number — public confirmation that
  **municipal land in Alba Iulia routinely needs an HCL step**. Publishable as procedure, needs no
  number, and is genuinely Alba-Iulia-specific. Our pages mention HCL/consiliul local **0 times**.

### dezmembrare-alipire — town tier (`dezmembrare teren aiud`)

- **Our position:** **#1 and #3, both wrong** — Ciuruleasa (69 km) and Vadu Moților (76 km), with
  those distances printed in the snippets. `aiud.html` is absent from the top 10.
- **Surveyor cohort: 1** (expert-topograf.ro, Făgăraș, #5). Recorded shortfall. Two of nine slots
  are real-estate marketplaces that never mention "dezmembrare" — Google is padding a thin corpus.
- **This is the weakest competitive field measured in the entire study, and we already hold the top
  of it with our two least relevant pages.** The whole gap here is routing. No content change to
  `aiud.html` can help while it is not the page shown.
- **Spec:** W2 meta rebuild is worth more here than anywhere — the served snippets currently
  advertise *"aprox. 69 km de Aiud"* and *"aprox. 76 km de Aiud"* **to a searcher standing in Aiud**.
  The Aiud page already correctly reads *"birou chiar în Aiud"*; it is simply never shown.

---

## 7. What this does NOT establish

- **Correlational only.** That Google serves Șpring over Alba Iulia is measured. That a county hub
  or a link hierarchy will change it is a **hypothesis** — tested at the 2026-08-19 GSC gate, on
  the "which URL is served per query" metric, not on position.
- **The link-count table is not causation.** Ciuruleasa ranks #1 on the *lowest* inbound count in
  the set. What is established is the absence of hierarchy, not a ranking formula.
- **The cohort is small and mostly non-local** — 5 content-bearing pages, 4 of them outside Alba,
  reached almost entirely through one of three queries. Two queries returned 0 and 1 surveyors.
  Every consensus figure in §2 should be read with that denominator in view.
- **cadastrumartin.ro ranking #4 with 90 words is a direct warning against the whole method:** on
  this SERP, content depth is demonstrably not the deciding variable. Locality and entity match are.
- **Nobody can promise a #1 from this.**
