# COMPETITOR EXTRACTION — `certificat-energetic`

**Date:** 2026-07-29 · **Method:** SOP-serp-research.md Steps 3–4 · **Source SERP:**
`research/seo-2026-07/serp/certificat-energetic-serp.md` (4 queries, captured 2026-07-29, complete).
**Tooling:** WebFetch only, parallel, no browser. No CAPTCHA, no rate-limit loss except where noted.

---

## 0. PRELIMINARY — two policy notes that govern everything below

### 0.1 A live conflict in the price rule. I did not resolve it; I flag it.

My task brief states: *"NEVER propose displaying prices, ANCPI tariffs, turnaround times, or
durations… If all competitors show them, we still do not."*

`SOP-serp-research.md` §0.2 — the document the same brief calls *"THE PROCESS, follow it
literally"* — states the opposite for prices, in an explicitly self-correcting passage:

> **ALLOWED, and already live on 1,526 pages — do not remove:** the existing hedged orientative
> price ranges … **CEO ruling 2026-07-29: keep them.** … Proposing to remove them is itself an
> anti-pattern (§6).

The two agree completely on **durations** and on the **ANCPI tariff** (both forbidden) and on
**inventing new price figures** (forbidden). They disagree only on whether the *already-live hedged
range* stays.

**How I handled it:** I propose **no new price display anywhere**, and I propose **no removal** of
the live `priceRange: "150 – 500 lei, orientativ, în funcție de imobil"`. All competitor price data
below is recorded as intelligence only. **The chair must rule before any implementer touches the
price line on this service.**

### 0.2 POLICY DEFECT FOUND ON OUR OWN LIVE PAGE — this is the finding I would escalate first

Both versions of the rule forbid turnaround/duration claims. **Our live
`certificat-energetic` hub page carries two of them right now**, verified by grep in
`docs/servicii/certificat-energetic/index.html`:

| Live text | Source field | Verdict |
|---|---|---|
| *"vă asigurăm certificatul rapid, **de regulă în aceeași săptămână**"* | `services.json` → `hubIntro` | **Duration claim about a third-party partner auditor. Violates SOP 0.2.** |
| *"Programăm vizita pentru releveu și fotografii — **durează sub o oră**."* | `services.json` → `process[1]` | Duration claim, but about **our own** visit, not a third party. Closer to the approved *"răspundem de obicei în aceeași zi lucrătoare"* exception. **Borderline — chair call.** |
| *"răspundem de obicei în aceeași zi lucrătoare"* | footer CTA | **Explicitly approved** by SOP 0.2. Keep. |

A fourth duration claim is authored but **not rendered anywhere** (see §4.3): faqPool entry
*"De regulă câteva zile de la vizita de releveu"*.

We are simultaneously (a) refusing to compete on the speed axis as a matter of policy and
(b) publishing a weaker, hedged version of exactly that claim. That is the worst of both positions.

---

## 1. Cohort construction

### 1.1 Class mapping — read before using the word "surveyor"

The SOP's `surveyor` class does not exist in this vertical. A certificat de performanță energetică
is issued by an **auditor energetic atestat MDLPA**, never by an ANCPI-authorized topograf. Per the
capture agent's convention I classify **direct service providers (energy auditors and audit
cabinets)** as the `surveyor` cohort — i.e. the "genuine provider, not a listicle" cohort the SOP's
consensus rule is actually about. I flag the credential distinction wherever it bites.

**Every single ranking provider presents as an auditor energetic. Not one presents as a topograf.**

### 1.2 Cohort size and aggregator share

| Query | Slots | Provider cohort | Directory | Other (blog/social) | Non-provider share |
|---|---|---|---|---|---|
| cen-q1 `certificat energetic alba` | 10 | **7** | 2 | 1 | 3/10 |
| cen-q2 `certificat energetic alba iulia` | 10 | **6** | 2 | 2 | 4/10 |
| cen-q3 `certificat energetic aiud` | 9 | **7** | 1 | 1 | 2/9 |
| cen-q4 `certificat energetic apartament alba iulia` | 9 | **6** | 2 | 1 | 3/9 |
| **Total** | **38** | **26 (68.4%)** | **7 (18.4%)** | **5 (13.2%)** | **12/38 (31.6%)** |

**No shortfall on any query** — every query returned ≥5 provider results, above the SOP's 3-result
floor. This is the *inverse* of the cadastru vertical, where the chair recorded 6/10 directories on
`cadastru si intabulare Alba Iulia`.

**Directories skipped per SOP:** evaluari24.ro (×3), daibau.ro (×2), intabulari24.ro (×1).
**`other` skipped:** sites.google.com (×3), facebook.com (×1).

### 1.3 URLs fetched — 12 attempted, 11 extracted, deduped across the 4 queries

| # | URL | Operator | Ranks |
|---|---|---|---|
| C1 | `certificatenergetic.net/alba` | 0741 357 252 (also **map-pack #3**) | q1#1, q2#1, q3#4, q4#3 |
| C2 | `certificataudit.ro/certificat-energetic/certificat-energetic-alba-iulia` | Certificat Audit, 0763 184 889, HQ București | q1#3, q2#2, q4#1 |
| C3 | `certificataudit.ro/certificat-energetic` | same operator as C2 | q3#9 |
| C4 | `certific.ro/certificat-energetic-alba-iulia` | Certific.ro, 0736 666 333, Alba Iulia address | q1#4, q2#4, q4#5 |
| C5 | `certificat-energetic.ro/alba-iulia` | 0733 999 019 | q1#5, q2#5, q4#4 |
| C6 | `certificat-energetic.ro/aiud` | same operator as C5 | q3#2 |
| C7 | `ienergetic.ro` | Cluj-Napoca, 0771 186 155 | q1#6 |
| C8 | `cabinetprivat.com/audit-energetic/alba-iulia` | "Hasegana Conservicii Kir", 0775 654 921, **Mediaș (Sibiu)** | q1#7, q2#7, q4#8 |
| C9 | `certificat-energetic.net/alba-iulia` | Tialco SRL, 0358 101 895 | q1#8, q2#6, q3#8, q4#7 |
| C10 | `cabinet-particular.ro/audit-energetic/aiud` | **Cristian Groza**, 0724 330 715 | q3#1 |
| C11 | `cabinet-privat.ro/auditor-energetic/aiud` | **same Cristian Groza**, same phone | q3#5 |
| — | `cabinet-particular.ro/harta-audit-energetic` | Groza | q3#7 — **HTTP 404, not extracted** |

**8 distinct operators across 11 pages.** Two operators run multi-domain networks:
- **Cristian Groza** holds `cabinet-particular.ro`, `cabinet-privat.ro` and
  `auditorcertificatenergetic.ro` — and takes **3 of the 9 slots on `certificat energetic aiud`**
  (#1, #5, #7) with three near-identical pages.
- The `certificatenergetic.net` operator holds **both** the #1 organic slot and a map-pack slot on
  cen-q1, on the same phone number.

**Shortfall recorded:** 1 of 12 URLs (`harta-audit-energetic`, q3#7) returned 404 and is excluded
from all consensus counts below. Denominators are therefore **11**.

---

## 2. Extractions — SOP Step 3 schema, verbatim

### C1 — `certificatenergetic.net/alba` · #1 on TWO of four queries

```json
{
  "url": "https://www.certificatenergetic.net/alba", "domain": "certificatenergetic.net",
  "pageType": "surveyor",
  "rankedFor": [{"queryId":"cen-q1","rank":1},{"queryId":"cen-q2","rank":1},
                {"queryId":"cen-q3","rank":4},{"queryId":"cen-q4","rank":3}],
  "wordCount": 90,
  "headingOutline": [{"level":2,"text":"Certificat Energetic - judetul Alba"}],
  "sectionsPresent": ["single county block"],
  "questionsAnswered": [],
  "priceDisclosure": "range",
  "priceValues": "\"Certificat Energetic de la 120 lei\" — in the TITLE TAG, so it renders in the SERP itself",
  "durationClaim": "\"Certificatul de Performanta energetica este eliberat în 1-4 zile de la comandarea acestuia\"",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": false,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "\"suna la: 0741 357 252 sau completeaza formularul de pe prima pagina\" — phone + off-page form",
  "localSpecificity": "named-places",
  "whatTheyDoBetter": [
    "Names SEVEN Alba localities in ~90 words: Alba Iulia, Cugir, Zlatna, Blaj, Aiud, Ocna Mures, Sebes. Highest locality density in the cohort.",
    "Price and phone number are IN THE <title>, so both render on the SERP face before any click.",
    "Holds an organic #1 and a map-pack slot on the same phone number."
  ],
  "whatWeDoBetter": [
    "Everything on-page: we have 2x the words, structured data, acte necesare, process steps, WhatsApp.",
    "This page is a 90-word stub and it outranks all of them. Page depth is demonstrably NOT the lever on this vertical."
  ]
}
```

> **This is the single most important observation in the whole extraction.** The #1 result on two of
> four queries is a **90-word page** with no FAQ, no documents list, no process, no schema, no named
> person. Any gap phrased as "we need more content" is contradicted by the top result.

---

### C2 — `certificataudit.ro/…/certificat-energetic-alba-iulia` · the deepest page in the cohort

```json
{
  "url": "https://certificataudit.ro/certificat-energetic/certificat-energetic-alba-iulia",
  "domain": "certificataudit.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId":"cen-q1","rank":3},{"queryId":"cen-q2","rank":2},{"queryId":"cen-q4","rank":1}],
  "wordCount": 2500,
  "headingOutline": [
    {"level":1,"text":"Certificat Energetic Alba Iulia"},
    {"level":2,"text":"Obține-l rapid și ieftin!"},
    {"level":3,"text":"Rapid"}, {"level":3,"text":"Ieftin"},
    {"level":2,"text":"Certificat Energetic Alba – Ieftin, Rapid și Eficient!"},
    {"level":2,"text":"Certificat Energetic Alba Iulia – Prețuri Competitive și Servicii Profesionale!"},
    {"level":2,"text":"Eliberare Certificat Energetic în Alba – Află cum poți obține rapid documentul!"},
    {"level":3,"text":"1. Ai un apartament în Alba:"},
    {"level":3,"text":"2. Ai o casă în Alba:"},
    {"level":3,"text":"În plus, vei fi întrebat(ă) despre diverse aspecte ale locuinței, cum ar fi:"},
    {"level":2,"text":"Acte necesare pentru obținerea certificatului energetic"},
    {"level":2,"text":"Întrebări frecvente (FAQ)"},
    {"level":2,"text":"solicită Acum"}
  ],
  "sectionsPresent": ["hero/intro","key benefits (Rapid/Ieftin)","service overview",
                      "pricing table by property type","process steps","acte necesare split by property type",
                      "FAQ","closing CTA form"],
  "questionsAnswered": [
    "Ce este certificatul energetic?",
    "Cine eliberează certificatul de performanță energetică?",
    "Cât costă un certificat energetic pentru un apartament în Alba Iulia?",
    "Cât timp durează emiterea unui certificat energetic în Alba Iulia?",
    "Cât este valabil certificatul energetic?",
    "Oferiți servicii de certificat energetic pentru alte tipuri de clădiri?",
    "Cum pot să obțin un certificat energetic pentru locuința mea?"
  ],
  "priceDisclosure": "exact",
  "priceValues": "TABLE: Garsonieră 250 · Ap. 2 cam 250 · Ap. 3 cam 250 · Ap. 4 cam 250 · Case/Vile 400 · Spații comerciale/industriale/alte 1–4 RON/mp negociabil. Prose: \"Prețul pentru un certificat energetic pentru un apartament în Alba începe de la 250 lei.\"",
  "durationClaim": "\"Certificatul energetic în doar 24 – 48 de ore!\" · \"procesul … durează în jur de 24 – 48 ore de la efectuarea evaluării energetice\" · \"Documentul ajunge la tine în cel mai scurt timp.\"",
  "acteNecesare": {"present": true, "itemCount": 11},
  "processSteps": {"present": true, "stepCount": 6},
  "faq": {"present": true, "questionCount": 7},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": false,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "Three forms — top (\"Trimite\" + \"Ai întrebări? Sună-ne la 0763 184 889\"), mid (\"Vezi oferta\"), bottom (\"solicită Acum\" / \"Contactați-ne astăzi\")",
  "localSpecificity": "named-places",
  "whatTheyDoBetter": [
    "SPLITS acte necesare BY PROPERTY TYPE with H3s the searcher can self-identify with: \"1. Ai un apartament în Alba:\" / \"2. Ai o casă în Alba:\". 11 items vs our 3.",
    "Adds a second list of things the auditor WILL ASK on the phone (regim de înălțime, izolație, tâmplărie, sistem de încălzire, orientare cardinală, anul construcției) — pre-empts the call.",
    "The ONLY page in the cohort that mentions apartments in its cen-q4 snippet, and it is #1 there.",
    "6-step process is customer-journey shaped, ending in 'Consultanță suplimentară' (post-delivery support)."
  ],
  "whatWeDoBetter": [
    "We have JSON-LD; they have none.", "Company HQ is București — no Alba presence at all; ours is 30 km away.",
    "WhatsApp-first vs their three lead-capture forms."
  ]
}
```

---

### C3 — `certificataudit.ro/certificat-energetic` (national hub, same operator)

```json
{
  "url": "https://certificataudit.ro/certificat-energetic", "domain": "certificataudit.ro",
  "pageType": "surveyor", "rankedFor": [{"queryId":"cen-q3","rank":9}],
  "wordCount": 4500,
  "headingOutline": [
    {"level":1,"text":"Certificat Energetic Online de la 275 lei — Livrare 24h"},
    {"level":2,"text":"Ce este certificatul energetic și de ce ai nevoie de el?"},
    {"level":2,"text":"Ce înseamnă clasele energetice A+ – G?"},
    {"level":2,"text":"Cât costă un certificat energetic?"},
    {"level":2,"text":"Cum se obține un certificat energetic?"},
    {"level":2,"text":"Ce acte sunt necesare pentru obținerea unui certificat energetic?"},
    {"level":2,"text":"Cât este valabil un certificat energetic?"},
    {"level":2,"text":"De ce să alegi Certificat Audit?"},
    {"level":2,"text":"Întrebări frecvente despre certificatul energetic"}
  ],
  "sectionsPresent": ["hero","definition","energy-class table A+ to G","price table",
                      "how to obtain (4 steps)","acte necesare","validity","why us","FAQ",
                      "regional locality lists (Muntenia/Moldova/Ardeal/Oltenia)"],
  "questionsAnswered": [
    "Cât costă un certificat energetic?", "Cât durează să primesc certificatul?",
    "Cât timp este valabil?", "Când este obligatoriu certificatul energetic?",
    "Cine poate emite un certificat energetic?", "Pot obține certificatul energetic online?",
    "Certificatul este valabil în orice județ?", "Se emite factură fiscală?"
  ],
  "priceDisclosure": "exact",
  "priceValues": "Garsonieră de la 275 · Ap.2cam de la 300 · Ap.3cam de la 300 · Ap.4+ de la 320 · Casă de la 400 · Vilă de la 450 · Spațiu comercial de la 450 · Clădire nouă de la 450. \"Prețuri pentru persoane fizice — finale, fără taxe ascunse.\"",
  "durationClaim": "\"eliberat în 24-48 de ore\" · \"24–48 ore de la primirea documentelor. Apartamente standard: 24 ore.\" · \"Livrare 24-48h în toată România\" — and a PER-ROW duration column in the price table",
  "acteNecesare": {"present": true, "itemCount": 10},
  "processSteps": {"present": true, "stepCount": 4},
  "faq": {"present": true, "questionCount": 8},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": true, "yearsExperience": true, "portfolio": false,
                   "phoneVisible": true, "whatsapp": true},
  "ctaStyle": "\"Comandă acum →\" · \"Sună-ne la 0763 184 889\" · form \"Trimite\"",
  "localSpecificity": "generic",
  "whatTheyDoBetter": [
    "The energy-class table (A+ → G with consumption bands) — the ONE genuinely educational asset in the cohort, and the thing the buyer will be asked about by the notary/buyer. Nobody else has it. We do not.",
    "\"Peste 10.000 de certificate emise\" — a countable proof-of-volume claim.",
    "Answers the operational questions nobody else does: \"Certificatul este valabil în orice județ?\", \"Se emite factură fiscală?\"",
    "Explicit WhatsApp photo-upload path (\"fotografii … pe WhatsApp\") — the same mechanic as our B3 'what to send' block."
  ],
  "whatWeDoBetter": ["Local anchoring — this page is national and lists 41 counties.", "JSON-LD."]
}
```

---

### C4 — `certific.ro/certificat-energetic-alba-iulia` · the 3-step page

```json
{
  "url": "https://www.certific.ro/certificat-energetic-alba-iulia", "domain": "certific.ro",
  "pageType": "surveyor",
  "rankedFor": [{"queryId":"cen-q1","rank":4},{"queryId":"cen-q2","rank":4},{"queryId":"cen-q4","rank":5}],
  "wordCount": 850,
  "headingOutline": [
    {"level":1,"text":"Certificat Energetic in Alba Iulia"},
    {"level":2,"text":"Ce facem"},
    {"level":2,"text":"Cum facem un certificat energetic in 3 pasi simpli"},
    {"level":2,"text":"Ne contactezi"}, {"level":2,"text":"Vizionam cladierea"},
    {"level":2,"text":"Primesti certificatul"},
    {"level":2,"text":"Despre noi"}, {"level":2,"text":"Contacteaza-ne"}, {"level":2,"text":"Socializam"}
  ],
  "sectionsPresent": ["hero with discount offer","Ce facem","3-step process","Despre noi","contact","social"],
  "questionsAnswered": ["how to obtain one in Alba Iulia","which building types are certified",
                        "what the deliverable includes","how the 3 steps work"],
  "priceDisclosure": "none",
  "priceValues": "No figures. Only \"Pret mic si avantajos\" and a \"REDUCERE\" hook gated behind a phone-number capture.",
  "durationClaim": "\"Predam certificatele de preformanta energetica in maxim 48 de ore\"",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": true, "stepCount": 3},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": true,
                   "phoneVisible": true, "whatsapp": true},
  "ctaStyle": "\"Suna\" + phone-capture: \"Introduceti numarul de telefon in campul alaturat pentru a beneficia de o REDUCERE\"",
  "localSpecificity": "named-places",
  "whatTheyDoBetter": [
    "A REAL Alba Iulia street address on the page: \"Toporasilor, 3C bl.CB3, ap.10, Alba Iulia\" — a genuine local-SEO NAP signal we cannot match for Alba Iulia (our NAP is Aiud).",
    "\"peste 5000 de cladiri\" + \"peste 7 ani experienta\" — countable proof.",
    "The 3-step process is reduced to the absolute minimum the buyer needs, one H2 per step. Same mechanic Google surfaced on the SERP face via their Facebook post (cen-q2 #9).",
    "WhatsApp number identical to phone — same pattern as ours."
  ],
  "whatWeDoBetter": [
    "We publish a hedged price range; they publish none and gate a discount behind a phone capture — a dark pattern.",
    "We have acte necesare; they have none.", "JSON-LD."
  ]
}
```

---

### C5 / C6 — `certificat-energetic.ro/alba-iulia` and `/aiud` · the price-table doorway pair

```json
{
  "url": "https://certificat-energetic.ro/alba-iulia/ (and /aiud)", "domain": "certificat-energetic.ro",
  "pageType": "surveyor",
  "rankedFor": [{"queryId":"cen-q1","rank":5},{"queryId":"cen-q2","rank":5},
                {"queryId":"cen-q4","rank":4},{"queryId":"cen-q3","rank":2,"url":"/aiud"}],
  "wordCount": 1300,
  "headingOutline": [
    {"level":1,"text":"Certificat Energetic Alba Iulia  /  Certificat Energetic Aiud"},
    {"level":2,"text":"Property City: Certificat Energetic <Oraș>"},
    {"level":3,"text":"Garsonieră"},{"level":3,"text":"Apartament 2 camere"},
    {"level":3,"text":"Apartament 3 camere"},{"level":3,"text":"Apartament 4 camere"},
    {"level":3,"text":"Case / Vile"},{"level":3,"text":"Case / Vile peste 100 mp"},
    {"level":3,"text":"Case vechi sub 80mp"},{"level":3,"text":"Case vechi peste 80 mp"},
    {"level":3,"text":"Alte imobile"},
    {"level":2,"text":"Despre noi"},{"level":2,"text":"Program"},{"level":2,"text":"Contactează-ne"}
  ],
  "sectionsPresent": ["price catalogue by property type","Facebook embed","partner logos",
                      "Despre noi","opening hours","contact"],
  "questionsAnswered": ["what property types are covered","what each costs","when they are open"],
  "priceDisclosure": "exact",
  "priceValues": "Garsonieră 250 · Ap.2cam 300 · Ap.3cam 300 · Ap.4cam 350 · Case/Vile 400 · Case/Vile >100mp 500 · Case vechi <80mp 250 · Case vechi >80mp 300 (ron/certificat). Disclaimer repeated on every row: \"ATENȚIE! Prețul certificatului energetic, afișat mai sus, este informativ\"",
  "durationClaim": "\"Ieftin & Rapid cu Livrarea la domiciliul clientului\" — no figure on either page",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": false,
                   "phoneVisible": true, "whatsapp": true},
  "ctaStyle": "\"Contactează-ne pe whatsapp\" (wa.me link) + \"Detalii\" per price row",
  "localSpecificity": "generic",
  "whatTheyDoBetter": [
    "PER-TOWN URLs: /alba-iulia AND /aiud, both ranking. They hold a dedicated Aiud page in OUR home town; we hold none.",
    "The price catalogue is SEGMENTED BY PROPERTY TYPE — 8 rows. It is the whole page and it ranks top-5 on three queries.",
    "Their disclaimer wording (\"Prețul … este informativ\") is functionally identical to ours — external confirmation that a hedged range is the market norm, not a liability."
  ],
  "whatWeDoBetter": [
    "Their /aiud page is ~5% Aiud-specific by the extractor's estimate — one sentence, no streets, no villages, partner logos unrelated to Aiud. Our locality pages on OTHER services carry real distance, real BCPI office, real neighbouring villages. Our per-locality machinery is strictly better than theirs — it is simply not switched on for this service.",
    "acte necesare, process steps, JSON-LD — all absent from theirs."
  ]
}
```

---

### C7 — `ienergetic.ro` · the free-assessment angle

```json
{
  "url": "https://ienergetic.ro", "domain": "ienergetic.ro", "pageType": "surveyor",
  "rankedFor": [{"queryId":"cen-q1","rank":6}],
  "wordCount": 1200,
  "headingOutline": [
    {"level":1,"text":"Certificate energetice in Cluj si judetele: Bistrita-Nasaud, Salaj, Alba"},
    {"level":3,"text":"EVALUARE"},{"level":3,"text":"CERTIFICAT ENERGETIC"},
    {"level":3,"text":"AUDITUL ENERGETIC"},
    {"level":3,"text":"CALCULAREA CORECTĂ A CONSUMULUI DE ENERGIE"},
    {"level":3,"text":"TERMOVIZIUNE (termografierea clădiri)"},
    {"level":6,"text":"DE CE MERITĂ SĂ AI O CLĂDIRE CU EFICIENȚĂ ENERGETICĂ CLASA A ?"}
  ],
  "sectionsPresent": ["5 service blocks","benefits of class A","DATE FIRMĂ","DATE CONTACT","PARTENERI"],
  "questionsAnswered": ["why class-A efficiency is worth having"],
  "priceDisclosure": "none", "priceValues": "None — offers \"evaluare gratuită\" instead",
  "durationClaim": "none",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": false,
                   "phoneVisible": true, "whatsapp": true},
  "ctaStyle": "\"CERE O EVALUARE GRATUITĂ\" / \"DORESC O EVALUARE GRATUITĂ\" — free-assessment offer, not a price and not a speed claim",
  "localSpecificity": "none",
  "whatTheyDoBetter": [
    "The ONLY commercially-viable CTA in the cohort that uses NEITHER price NOR speed: \"CERE O EVALUARE GRATUITĂ\". Directly relevant to us — it is the one competitive hook that is fully compatible with SOP 0.2 under either reading of the price rule.",
    "Bundles adjacent services (termoviziune, audit energetic, calcul consum) into one offer."
  ],
  "whatWeDoBetter": [
    "It ranks #6 on the Alba county query while naming ZERO Alba localities and being a Cluj business. That is a low bar we clear.",
    "acte necesare, process, JSON-LD, price transparency — all ours, none theirs."
  ]
}
```

---

### C8 — `cabinetprivat.com/audit-energetic/alba-iulia`

```json
{
  "url": "https://www.cabinetprivat.com/audit-energetic/alba-iulia", "domain": "cabinetprivat.com",
  "pageType": "surveyor",
  "rankedFor": [{"queryId":"cen-q1","rank":7},{"queryId":"cen-q2","rank":7},{"queryId":"cen-q4","rank":8}],
  "wordCount": 1100,
  "headingOutline": [
    {"level":1,"text":"Audit Energetic Alba Iulia"},
    {"level":2,"text":"Hasegana Conservicii Kir Alba Iulia - Audit Energetic Alba Iulia"},
    {"level":3,"text":"Servicii"}
  ],
  "sectionsPresent": ["company profile","Certificat Energetic Alba Iulia",
                      "Etapele pentru realizarea certificatului energetic",
                      "Actele necesare obtinerii certificatului energetic",
                      "Audit Energetic Alba Iulia","Principalele etape ale intocmirii raportului de audit",
                      "Servicii","gallery + map"],
  "questionsAnswered": [],
  "priceDisclosure": "none", "priceValues": "",
  "durationClaim": "none",
  "acteNecesare": {"present": true, "itemCount": 3},
  "processSteps": {"present": true, "stepCount": 9},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": true,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "\"inscrie-te\" (contact page) + \"SUNA\" tel: button",
  "localSpecificity": "generic",
  "whatTheyDoBetter": [
    "Separates CERTIFICAT ENERGETIC from AUDIT ENERGETIC as two distinct services with their own step lists — a distinction no other page in the cohort draws, and one a serious buyer notices.",
    "Their acte necesare list is 3 items — the SAME LENGTH AS OURS — and it ranks top-8 on three queries."
  ],
  "whatWeDoBetter": [
    "Their listed address is Mediaș, Sibiu county — on a page titled 'Alba Iulia'. Our Aiud NAP is genuinely in-county.",
    "No price, no WhatsApp, no schema, no FAQ."
  ]
}
```

---

### C9 — `certificat-energetic.net/alba-iulia` · a directory dressed as a provider page

```json
{
  "url": "https://www.certificat-energetic.net/alba-iulia", "domain": "certificat-energetic.net",
  "pageType": "surveyor",
  "rankedFor": [{"queryId":"cen-q1","rank":8},{"queryId":"cen-q2","rank":6},
                {"queryId":"cen-q3","rank":8},{"queryId":"cen-q4","rank":7}],
  "wordCount": 1200,
  "headingOutline": [
    {"level":1,"text":"Certificat energetic Alba Iulia"},
    {"level":2,"text":"Auditori energetici in Alba Iulia"},
    {"level":2,"text":"Tialco SRL"},
    {"level":2,"text":"Informatii utile"},
    {"level":3,"text":"Ce este un certificat energetic?"},
    {"level":3,"text":"Cine il elibereaza?"},
    {"level":3,"text":"Cum se obtine?"},
    {"level":3,"text":"Actele necesare pentru intocmirea unui certificat energetic"}
  ],
  "sectionsPresent": ["provider listing (Tialco SRL)","Informatii utile (4 Q-shaped H3s)"],
  "questionsAnswered": ["Ce este un certificat energetic?","Cine il elibereaza?","Cum se obtine?",
                        "Actele necesare pentru intocmirea unui certificat energetic"],
  "priceDisclosure": "none", "priceValues": "",
  "durationClaim": "none (validity only: \"intre 5 si 10 ani\")",
  "acteNecesare": {"present": true, "itemCount": 6},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 4},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": false,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "Soft: \"Mai jos puteti gasi o lista cu astfel de prestatori … impreuna cu date de contact\"",
  "localSpecificity": "named-places",
  "whatTheyDoBetter": [
    "The 4 H3s ARE the four questions a first-time buyer asks, in exactly the order they ask them, phrased as questions rather than as feature headings. Our H2s are feature headings ('Acte necesare (orientativ)', 'Cum decurge procesul') — no question in any heading on our page.",
    "Names Alba Iulia + Sebes, Zlatna, Aiud, Cugir, Blaj, and gives a real Alba Iulia street (B-dul 1 Decembrie 1918).",
    "Their acte necesare list includes items ours omits: previous energy bills, prior renovation history."
  ],
  "whatWeDoBetter": [
    "This is a hybrid listing page (its whole body is 'here is one company, Tialco SRL'). We are a first-party provider page — the format Google rewarded at #1 (C1).",
    "It ranks on an AIUD query with its ALBA IULIA page (cen-q3 #8) — the exact wrong-page defect FINDING-cannibalization.md attributes to our page count. Their page count is tiny. Useful counter-evidence."
  ]
}
```

---

### C10 / C11 — Cristian Groza network · the only ANCPI-equivalent credential in the cohort

```json
{
  "url": "https://www.cabinet-particular.ro/audit-energetic/aiud + https://www.cabinet-privat.ro/auditor-energetic/aiud",
  "domain": "cabinet-particular.ro / cabinet-privat.ro (one operator, two domains)",
  "pageType": "surveyor",
  "rankedFor": [{"queryId":"cen-q3","rank":1,"url":"cabinet-particular.ro"},
                {"queryId":"cen-q3","rank":5,"url":"cabinet-privat.ro"},
                {"queryId":"cen-q3","rank":7,"url":"cabinet-particular.ro/harta-audit-energetic (404 on fetch)"}],
  "wordCount": 1200,
  "headingOutline": [
    {"level":1,"text":"Cabinet Particular Audit Energetic Aiud"},
    {"level":2,"text":"Audit Energetic Aiud"},
    {"level":2,"text":"Certificat Energetic Aiud - Cristian Groza - Auditor Energetic, Birou Certificate Energetice, Rapoarte de Audit Energetic Cladiri"},
    {"level":2,"text":"Servicii"},{"level":2,"text":"Galerie foto"},
    {"level":1,"text":"Auditor energetic Aiud (cabinet-privat.ro)"},
    {"level":2,"text":"Audit Energetic - Certificat Energetic Aiud"}
  ],
  "sectionsPresent": ["Despre Noi","Servicii","de ce e necesar breviarul de izolatie termica",
                      "Documente necesare","Galerie foto","map"],
  "questionsAnswered": [],
  "priceDisclosure": "none",
  "priceValues": "\"la preturi acceptabile\" — no figure",
  "durationClaim": "\"in cel mai scurt timp\" — vague, no figure",
  "acteNecesare": {"present": true, "itemCount": 2},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": [],
  "trustSignals": {"ancpiAuthNumber": true, "namedPerson": true, "photoOfPerson": true,
                   "reviews": false, "yearsExperience": false, "portfolio": true,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "NONE. No button, no form. Bare phone 0724 330 715 + email cristig_ro@yahoo.com.",
  "localSpecificity": "generic",
  "whatTheyDoBetter": [
    "THE #1 RESULT IN OUR HOME TOWN NAMES THE INDIVIDUAL IN THE H2: 'Cristian Groza - Auditor Energetic'.",
    "cabinet-privat.ro publishes the actual attestation: 'ing. Cristian Groza', authorization 'UA01429 / 2010 - MDRT', WITH a photo of the person. The only credential number anywhere in the cohort of 11.",
    "Holds 3 of 9 slots on `certificat energetic aiud` across two domains — including a bare map page at #7.",
    "Their acte necesare adds the useful escape hatch we omit: 'Daca aceste lipsesc se poate intocmi releveu de catre auditor' — i.e. no drawing? we will make one."
  ],
  "whatWeDoBetter": [
    "No CTA at all — not a button, not a form, not WhatsApp. We have 6 WhatsApp links and 5 tel: links.",
    "Their Aiud pages are ~5% Aiud-specific: zero streets, zero neighbourhoods, zero villages, and one of the photos is captioned 'auditor energetic cluj'.",
    "No price, no process steps, no FAQ, no schema."
  ]
}
```

---

## 3. Surveyor-cohort consensus (n = 11 pages, 8 operators)

| Attribute | Cohort result | Ours (hub) | Verdict |
|---|---|---|---|
| Median word count | **~1,200** (range **90** – 4,500) | **183** in the gated content region | Below — but the **#1 page has 90 words**. LOW confidence. |
| Price disclosed | 5/11 exact or "de la", 2/11 vague, 4/11 none | hedged range 150–500 lei + disclaimer | **At parity.** Not a gap. |
| Duration claimed | 6/11 (4 with a specific hour/day figure) | **2 live claims** (see §0.2) | **Policy exposure, not a gap.** |
| `acte necesare` present | **5/11**; median 6 items among those | present, **3 items** | Below median, and undifferentiated by property type. |
| Numbered process steps | **4/11**; 3–6 steps | present, **4 steps** | **At or above cohort. We already win here.** |
| On-page FAQ | **3/11** (7, 8, and 4-as-H3) | **0 rendered** — 5 authored, rendered nowhere | Below — and it is a **build defect**, not a content gap. |
| JSON-LD structured data | **0 of 11** | **6 types** | **We win outright. Nobody in this vertical has any.** |
| Named individual practitioner | **2/11** (Groza ×2) | none | Gap on the home-town query specifically. |
| Attestation/authorization number | **1/11** (`UA01429 / 2010 - MDRT`) | none — and ours would be the **wrong credential** | Blocked twice over. |
| Photo of the practitioner | 1/11 | none | Low-value; cohort does not do it. |
| On-page reviews/testimonials | 1/11 | none | Not a cohort norm. |
| Countable volume proof | 3/11 ("peste 5000 de cladiri", "Peste 10.000 de certificate", "peste 7 ani") | "25+ ani", "1052+ proiecte", "2681+ colaborări" | **We already exceed the cohort.** (Note: chair B6 rules "2681+ colaborări" is dropped.) |
| Visible phone | **11/11 — unanimous** | 5× `tel:` | At parity. |
| WhatsApp | 4/11 | 6× | **Above cohort.** |
| Per-town landing URL | **6/11 operators hold one**; 3 hold a dedicated `/aiud` | **ZERO** | **The gap that matters.** |
| Local specificity | best = 7 town names in 90 words; worst = a Mediaș address on an Alba Iulia page; **none names a street, neighbourhood or village** | "zona Aiud – Alba și împrejurimi"; **"Alba Iulia" appears 0 times** | Gap on breadth; **latent advantage on depth**. |
| Property-type segmentation | **5/11** segment by garsonieră / apartament / casă / vilă | none | Gap, and it is the cen-q4 vacuum. |

**Two consensus items that are strictly ours to lose:** structured data (0/11 competitors) and the
per-locality data machinery (distance, BCPI office, neighbouring villages) that our other 11
services already run and that **not one competitor in this cohort attempts**.

---

## 4. SOP Step 4 — scoring OUR page

### 4.1 The routing situation is NOT the one in FINDING-cannibalization.md

`FINDING-cannibalization.md` documents *wrong page served*. For `certificat-energetic` the defect is
one class worse: **no page exists to serve.**

```
docs/servicii/certificat-energetic/   →  index.html  ONLY   (1 file, 17,712 bytes)
docs/servicii/certificat-energetic/alba/  →  DOES NOT EXIST
```
Cause: `"hubOnly": true` at `generator/data/services.json` (verified). Page-count comparison:

| Service | HTML pages under `docs/servicii/<slug>/` |
|---|---|
| cadastru-si-intabulare | 223 |
| intabulare-apartament | 93 |
| actualizare-carte-funciara | 93 |
| **certificat-energetic** | **1** |
| servicii-ocpi / topografie-constructii / expertize-documentatii | 1 each |

| Query | Our rank | `servedPage` | `correctPage` | Exists? |
|---|---|---|---|---|
| cen-q1 `certificat energetic alba` | absent | — | `docs/servicii/certificat-energetic/alba/index.html` (chair W1) | **NO** |
| cen-q2 `certificat energetic alba iulia` | absent | — | `docs/servicii/certificat-energetic/alba/alba-iulia.html` | **NO** |
| cen-q3 `certificat energetic aiud` | absent | — | `docs/servicii/certificat-energetic/alba/aiud.html` | **NO** |
| cen-q4 `certificat energetic apartament alba iulia` | absent | — | no property-type dimension exists in the generator; nearest is the alba-iulia leaf | **NO** |

**ROUTING DEFECT: YES — but of the "no inventory" class, not the "wrong sibling" class.**
`servedPage` and `correctPage` cannot differ, because neither exists. Chair W1 (service×county hubs)
partially addresses cen-q1 only; cen-q2/q3/q4 need leaf inventory, which `hubOnly: true` forbids.

### 4.2 Our two live pages, scored on the identical schema

```json
{
  "url": "https://expert-intabulare.ro/servicii/certificat-energetic/",
  "file": "docs/servicii/certificat-energetic/index.html",
  "domain": "expert-intabulare.ro", "pageType": "surveyor",
  "rankedFor": [], "wordCount": 183,
  "headingOutline": [
    {"level":1,"text":"Certificat energetic"},
    {"level":2,"text":"Acte necesare (orientativ)"},
    {"level":2,"text":"Cum decurge procesul"},
    {"level":2,"text":"Contact rapid"},
    {"level":2,"text":"Servicii conexe"},
    {"level":2,"text":"Ai o situație asemănătoare?"}
  ],
  "sectionsPresent": ["hero + stats band","intro paragraph","acte necesare (3)","proces (4 pași)",
                      "preț orientativ","contact rapid","servicii conexe","stats band (repeat)","CTA"],
  "questionsAnswered": [],
  "priceDisclosure": "range",
  "priceValues": "\"150 – 500 lei, orientativ, în funcție de imobil\" + \"Prețurile afișate sunt orientative; costul exact depinde de teren, documente și situația din cartea funciară.\"",
  "durationClaim": "\"de regulă în aceeași săptămână\" (hubIntro) · \"durează sub o oră\" (proces pas 2) · \"răspundem de obicei în aceeași zi lucrătoare\" (approved exception)",
  "acteNecesare": {"present": true, "itemCount": 3},
  "processSteps": {"present": true, "stepCount": 4},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": ["LocalBusiness","Service","BreadcrumbList","AdministrativeArea",
                  "GeoCoordinates","PostalAddress","ListItem"],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": false, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": true,
                   "phoneVisible": true, "whatsapp": true},
  "ctaStyle": "WhatsApp-first — 6 × api.whatsapp.com, 5 × tel:0741478540, no forms",
  "localSpecificity": "generic",
  "measured": {
    "bytes": 17712, "leafCap": 61440, "headroom": "~43.7 KB",
    "AlbaIuliaMentions": 0, "AiudMentions": 3, "apartamentMentions": 7,
    "notarMentions": 2, "auditorMentions": 2, "ANCPIMentions": 3,
    "detailsBlocks": 0, "leiMentions": 1
  }
}
```

```json
{
  "url": "https://expert-intabulare.ro/zone/alba/",
  "file": "docs/zone/alba/index.html", "pageType": "surveyor",
  "rankedFor": [], "wordCount": 3687, "bytes": 108545,
  "headingOutline": [
    {"level":1,"text":"Cadastru și topografie în județul Alba"},
    {"level":2,"text":"OCPI Alba"},{"level":2,"text":"Contact rapid"},
    {"level":2,"text":"Alte județe"},{"level":2,"text":"Localități din județul Alba"},
    {"level":2,"text":"Ai o situație asemănătoare?"}
  ],
  "certificatEnergeticCoverage": "The string 'Certificat energetic' occurs ONCE on the entire 108 KB page — inside the global nav dropdown. There is no county-level certificat-energetic section, no auditor mention, no link in body copy.",
  "priceDisclosure": "none", "priceValues": "the string 'lei' occurs 0 times",
  "faq": {"present": false, "questionCount": 0},
  "detailsBlocks": 78,
  "note": "The 78 <details> blocks are the A–Z locality list, not FAQ.",
  "schemaTypes": ["LocalBusiness","BreadcrumbList","GeoCoordinates","PostalAddress","ListItem"],
  "verdict": "This page cannot serve cen-q1. Its title, H1, meta description and body are all about cadastru/topografie; the word 'energetic' appears twice, both in chrome."
}
```

### 4.3 BUILD DEFECT — 5 authored FAQ answers rendered on zero pages

`generator/data/services.json` carries a 5-question `faqPool` for `certificat-energetic`, written in
correct Romanian, covering exactly the questions the cohort ranks on:

| Authored question | Cohort coverage |
|---|---|
| "Când este obligatoriu certificatul energetic?" | C3 asks it verbatim |
| "Cât este valabil certificatul energetic?" | **C2, C3 and C9 all ask it — the most common question in the cohort** |
| "Cât durează obținerea certificatului?" | C2, C3 ask it — **our answer contains a duration claim, §0.2** |
| "Ce influențează clasa energetică a casei?" | Adjacent to C3's A+–G table; **nobody else answers it** |
| "Certificatul e făcut de voi sau de un auditor?" | C2, C9 ask "Cine eliberează…" — **our answer is more honest than any of theirs** |

**None of these is rendered.** Verified in `generator/lib/pages.js`: `faqDetails()` is called at
line **410**, inside `buildServiceLocality()` (line 322). `buildServiceHub()` (line 493) never calls
it. All four `hubOnly` services confirm this — `topografie-constructii`, `servicii-ocpi`,
`certificat-energetic`, `expertize-documentatii` each render **0** `<details>` blocks, and between
them hold **23 authored FAQ answers that appear on no page on the site.**

This is the cheapest identified item in the report: the content exists, is CEO-register Romanian,
is already gate-audited, and needs a template change rather than new writing.

---

## 5. GAPS — ranked, confidence-tagged (SOP Step 5)

1. **[HIGH][moves-rankings] No page exists for any of the four queries.** `hubOnly: true` yields
   1 page vs 93–223 for comparable services. 6 of 8 cohort operators hold a per-town URL; 3 hold a
   dedicated `/aiud`. Mechanically checkable, near-unanimous. *Requires reversing `hubOnly` for
   this service — a spec-level decision, not a content decision.*
2. **[HIGH][table-stakes] 5 authored FAQ answers render nowhere** (§4.3). `buildServiceHub()` never
   calls `faqDetails()`. 3/11 cohort pages carry an on-page FAQ, and the two that do rank #1 and #2
   on cen-q4/cen-q2. Free content, template-only change.
3. **[HIGH][policy] Our own live page carries a forbidden duration claim** (§0.2):
   *"de regulă în aceeași săptămână"*. **This is a defect to remove, not a gap to fill.**
4. **[MEDIUM][moves-rankings] The page targeting Alba Iulia queries never says "Alba Iulia."**
   Zero occurrences in 17,712 bytes. Every cohort page that ranks on cen-q2/q4 has it in the H1.
5. **[MEDIUM][moves-rankings] No property-type segmentation.** 5/11 segment by
   garsonieră/apartament/casă/vilă. cen-q4 is a **documented vacuum** — Google flags
   *"Lipsesc: apartament"* on 3 of 9 results and only C2 mentions apartments in its snippet, at #1.
   We mention "apartament" 7 times on the hub but never as a distinct answer.
6. **[MEDIUM][table-stakes] `acte necesare` is 3 items and undifferentiated.** Cohort median is 6
   among the 5 that have one; C2 splits it by property type under headings the buyer self-selects
   into ("1. Ai un apartament în Alba:"). Cohort items we omit: previous energy bills, prior
   renovation history, year of construction, heating system, cardinal orientation, and C11's escape
   hatch *"daca acestea lipsesc se poate intocmi releveu de catre auditor."*
7. **[MEDIUM][table-stakes] No heading is phrased as a question.** C9's four H3s are the buyer's
   four questions in order. Ours are feature labels.
8. **[MEDIUM][table-stakes] The energy-class A+→G explanation is absent** and only C3 has it — the
   one genuinely educational asset in the cohort, and the thing the buyer is asked about by the
   notary and the buyer's agent.
9. **[LOW][table-stakes] Named practitioner.** 2/11 do it; the Aiud #1 does it in an H2 and
   `cabinet-privat.ro` publishes `UA01429 / 2010 - MDRT` with a photo. **Not actionable for us:**
   chair B2 is blocked on the ANCPI number, and the ANCPI number is the *wrong credential* — the
   cohort's is an MDLPA auditor attestation. Naming *our partner auditor* would need that person's
   consent and their number. **CEO question, do not infer.**
10. **[LOW][correlational] Word count 183 vs cohort median ~1,200.** Explicitly downgraded: the
    **#1 result on two of four queries is a 90-word page.** Do not action word count as a target.

### NOT gaps — where we already beat the cohort. Do not "fix" these.

- **JSON-LD: 6 types vs 0 across all 11 competitors.** No competitor has any structured data. Do not
  let anyone reduce this.
- **Process steps: 4 vs cohort's 3–6.** At parity, already good.
- **WhatsApp: 6 links vs 4/11 having any.** Above cohort. The house rule is also a competitive edge.
- **Price transparency: at parity.** 5/11 exact, ours hedged. Not a disadvantage.
- **Countable proof: "25+ ani", "1052+ proiecte" vs 3/11 having any.** Above cohort.
- **Per-locality depth.** Every cohort `/aiud` page is ~5% locality-specific — a title swap and one
  sentence. Our generator already produces real distance, real BCPI office and real neighbouring
  villages per locality. **We would not be copying their doorway pages; we would be doing the thing
  they only pretend to do.** That is the strongest argument for reversing `hubOnly`.

---

## 6. BLOCKED BY POLICY

| Competitor pattern | Prevalence | Status |
|---|---|---|
| Turnaround claims: "24-48 ore", "48 de ore", "Livrare 24h", "1-4 zile", "in cel mai scurt timp" | **6/11 pages, 4 with a hard figure** | **BLOCKED — SOP 0.2, absolute.** Also blocked under the stricter brief. Do not propose, do not hedge, do not paraphrase. |
| Duration as a **column in the price table** (C3) | 1/11 | **BLOCKED.** |
| Importing a competitor's figure (120 / 250 / 275 / 300 / 350 / 400 / 450 / 500 lei) | 5/11 | **BLOCKED — inventing a new price figure.** |
| Exact ANCPI tariff | 0/11 (not applicable — no ANCPI fee on this service) | **BLOCKED**, moot here. |
| Per-property-type **price** table | 5/11 | **BLOCKED as new figures.** Per-property-type **segmentation of acte, process and FAQ** is NOT blocked and is gap #5. |
| Discount hooks ("REDUCERE 20%", phone-capture-for-discount) | 2/11 | Not policy-blocked, but a dark pattern; **recommend against**. |
| Claiming an MDLPA auditor attestation, or a number for one | 1/11 has one | **BLOCKED — CEO ruling 0.1/0.5, never invent a number.** CEO question required. |
| **Our own live** "de regulă în aceeași săptămână" | — | **VIOLATION TO REMOVE**, see §0.2. |
| **Our own live** hedged 150–500 lei range | — | **CONFLICT, §0.1. Chair must rule. Do not remove pending that ruling** (SOP 0.2 forbids removal; the brief forbids display). |

**The one competitive hook that survives every reading of the policy:** C7's
**"CERE O EVALUARE GRATUITĂ"** — a free-assessment CTA using neither price nor speed. It is the
only such hook in the cohort and it is fully compatible with a WhatsApp-first contact model.

---

## 7. Map pack — recorded, not actionable (SOP §3, chair D11)

cen-q1 is the only `certificat-energetic` query with a local pack. All three entries are
**exact-match keyword GBP names** ("Certificat energetic Alba Iulia", "Certificat energetic Alba",
"Certificat de performanta energetica"), and **two of the three hold a slot with zero reviews.**
Our profile has 3 reviews at 5.0 — on this vertical's review floor, **reviews are not the binding
constraint.** The binding constraint is our GBP **category**: ours is cadastre/topography, theirs is
"Birou de audit". **No page change can move this.** GBP question for Dan, not a content item.

Also noted: the #1 organic result's phone (0741 357 252) is identical to map-pack entry #3. One
operator holds both surfaces.

---

## 8. Method limits

- **11 of 12 URLs extracted; 1 × HTTP 404** (`cabinet-particular.ro/harta-audit-energetic`, cen-q3
  #7). All denominators above are 11. **Shortfall recorded per SOP Step 3.**
- Word counts and section inventories are **WebFetch-extractor estimates**, not byte-exact. Treat
  the ~1,200 median as an order of magnitude. Our own figures are byte-exact (grep/python on the
  built HTML).
- `certificataudit.ro/certificat-energetic` returned **HTTP 429** on first attempt and was
  re-fetched successfully. No data loss.
- **This is correlational (SOP §7).** That the #1 page has a 90-word body does not prove brevity
  ranks; six of the seven providers on cen-q1 hold **exact-match domains**
  (`certificatenergetic.net`, `certificataudit.ro`, `certific.ro`, `certificat-energetic.ro`,
  `certificat-energetic.net`) — a domain factor no on-page work touches. Nothing here promises a
  position.
- Measurement gate remains **2026-08-19 (GSC)**: position, impressions, and **which URL Google
  serves** per query. For this service the first metric to watch is simply whether *any* of our
  URLs appears at all.
