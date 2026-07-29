# Competitor extraction — `actualizare-carte-funciara`

**SOP-serp-research.md Step 3 + Step 4 · 2026-07-29 · no browser used, WebFetch only**
**Source SERP:** `research/seo-2026-07/serp/actualizare-carte-funciara-serp.md` — complete, 4 queries
(acf-q1..q4), captured 2026-07-29. Nothing re-queried; no result invented.

**Policy in force (SOP 0.2):** competitor prices and durations below are recorded as
**intelligence only** — what the customer has already been read before reaching us. We propose
no new price figure and **no turnaround/duration claim of any kind**. Items that would require
one are marked **BLOCKED BY POLICY** and are not actioned.

---

## 0. Cohort construction and the shortfall

| Query | Organic results | Directory / marketplace | Government | Other (social, legal DB, forum, doc-aggregator) | Blog | **Surveyor** |
|---|---|---|---|---|---|---|
| acf-q1 `actualizare carte funciara alba` | 9 | 5 | 1 | 1 | 0 | **2** (cadastrumaxim + OURS) |
| acf-q2 `actualizare carte funciara alba iulia` | 9 | 6 | 2 | 0 | 0 | **2** (cadastrumaxim + OURS) |
| acf-q3 `actualizare carte funciara aiud` | 9 | 5 | 2 | 1 | 0 | **1** (OURS only) |
| acf-q4 `rectificare suprafata carte funciara alba` | 9 | 2 | 1 | 3 | 2 | **1** (expertcadastru) |

**Aggregator / non-surveyor share: 33 of 36 organic results = 92%.** Per SOP §2 that is the
profile of a query set winnable with a genuine service page.

### SHORTFALL — recorded, not padded

SOP Step 3 asks for the top 3–5 surveyor results per query. **No query in this service reaches 3.**
Counting only *competitors* (excluding our own pages):

- acf-q1: **1** competitor surveyor · acf-q2: **1** · acf-q3: **0** · acf-q4: **1**
- **Distinct competitor surveyor domains across all four queries: 2.**

Directories were skipped entirely per instruction. Blogs (`contractorii.ro`, `deaconu.legal`) and
legal databases (`lege5.ro`, `avocatnet.ro`) on acf-q4 are **not** in the consensus cohort — they
are `blog`/`other`, and computing surveyor consensus over a law firm would be the same error as
computing it over a directory. They are recorded in §4 as secondary intelligence only.

**Consequence for the whole analysis: "surveyor-cohort consensus" here means N=2.** Every
"consensus" statement below is a 2-of-2 or 1-of-2 observation and must be read at that weight.
This is a genuine property of the vertical, not a capture failure: on the home-town query
(acf-q3) the top 10 contains **no competitor surveyor website at all**.

### Fetch log

| URL | Method | Result |
|---|---|---|
| `https://cadastrumaxim.ro/` | WebFetch | OK — ranked page (acf-q1 #5, acf-q2 #3) |
| `https://cadastrumaxim.ro/content.php?9-actualizare-date-imobil` | WebFetch | OK — **not the ranked URL**; the same domain's actual service page, fetched because the ranked URL is a homepage. Recorded separately, excluded from rank-based claims. |
| `https://www.expertcadastru.ro/blog/72-cadastru-modificare-limite-si-suprafata.html` | WebFetch | OK — ranked page (acf-q4 #4). URL resolved via WebSearch restricted to the domain; the capture recorded the title, not the URL. |
| `https://www.expertcadastru.ro/` | WebFetch | OK — used only to confirm the firm's identity and coverage |
| Facebook — "Birou Cadastru Aiud – Molnar Aurelian-Marian" (acf-q3 **#2**) | not fetched | Classified `other` (social), not `surveyor`; URL not recorded in the capture and not resolvable without the browser. **Recorded as a known blind spot** — see §5. |

---

## 1. Competitor — cadastrumaxim.ro (ranked page: homepage)

```json
{
  "url": "https://cadastrumaxim.ro/",
  "domain": "cadastrumaxim.ro",
  "pageType": "surveyor",
  "rankedFor": [{"queryId": "acf-q1", "rank": 5}, {"queryId": "acf-q2", "rank": 3}],
  "wordCount": 2900,
  "headingOutline": [
    {"level": 1, "text": "CADASTRU ALBA - TOPOGRAF MAXIM EMANUEL - BIROU CADASTRU MAXIM"},
    {"level": 3, "text": "Lucrari - Servicii"},
    {"level": 3, "text": "Extras de Carte Funciara | Extras CF Online | Servicii Topocadastrale Online"},
    {"level": 3, "text": "Informare Clienti"},
    {"level": 3, "text": "Localizare pe Harta"},
    {"level": 3, "text": "Contact"},
    {"level": 3, "text": "Carte de Vizita Online"},
    {"level": 3, "text": "Contacteaza-ne"},
    {"level": 3, "text": "Noutati!"},
    {"level": 3, "text": "Vizitatori Extern"},
    {"level": 3, "text": "Meteo"},
    {"level": 3, "text": "Calendar"}
  ],
  "sectionsPresent": ["service menu (23 items)", "image carousel (35 slides)", "news block",
                      "contact block", "map", "online-services cross-sell (ExtraseCF.ro)",
                      "social links", "weather widget", "visitor counter", "calendar"],
  "questionsAnswered": ["ce servicii face biroul (23 tipuri)", "unde sunt (adresa + hartă)",
                        "cum îi contactezi", "cine este topograful (Ing. Emanuel MAXIM)"],
  "priceDisclosure": "none",
  "priceValues": "NONE. Verbatim: \"Costurile se calculeaza in functie de specificul lucrarii, de aceea este necesar sa ne contactati...\"",
  "durationClaim": "No numeric claim. Only the unhedged marketing phrase \"servicii de calitate efectuate in timp scurt la preturi avantajoase\".",
  "acteNecesare": {"present": false, "itemCount": 0},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": ["(none detected)"],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": true,
                   "reviews": false, "yearsExperience": false, "portfolio": true,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "Phone-first, appointment-gated: \"Contactati-ne apeland: 0775 617 204\". Secondary is a cross-sell to their own portal ExtraseCF.ro (\"Solicitati online, de pe orice dispozitiv\"). No form-free instant channel; no WhatsApp anywhere.",
  "localSpecificity": "named-places",
  "whatTheyDoBetter": [
    "Domain age + a 39-review Google Business Profile in Alba Iulia (capture F3). This, not the page, is the most plausible reason a content-free homepage outranks a 900-word service page.",
    "The H1 itself is the head keyword + county + the surveyor's name: \"CADASTRU ALBA - TOPOGRAF MAXIM EMANUEL\". Ours never puts \"Alba\" and the surveyor's name in the same H1.",
    "Names the engineer (Ing. Emanuel MAXIM) WITH a photo. We name Aurel Fleser but show no photo.",
    "23-item service menu makes the site look like a full-scope bureau; each item is its own URL.",
    "Owns a second property (ExtraseCF.ro) that captures the extras-CF navigational demand this SERP is saturated with, and funnels it back."
  ],
  "whatWeDoBetter": [
    "Their ranked URL is a HOMEPAGE — it answers no question the searcher asked. Ours is a service page with acte, process and FAQ.",
    "We publish an orientative price range; they refuse (\"contactati-ne\").",
    "We have FAQPage/Service/BreadcrumbList JSON-LD; their page has none detected.",
    "We name the competent BCPI office WITH its street address per locality; they name only their own address.",
    "WhatsApp deep-link CTA vs. phone-and-appointment only.",
    "The page loads clean; theirs carries weather, visitor-counter and calendar widgets around the service content."
  ]
}
```

### Same domain, non-ranked service page — `content.php?9-actualizare-date-imobil`

Fetched because the ranked URL is a homepage and would otherwise misrepresent what this
competitor actually says about our service. **Not used for any rank-based claim.**

- **~850 words. Segments the service into FIVE named operations, each with its own document list:**
  1. `ACTUALIZARE DATE CADASTRALE PRIVIND ADRESA IMOBILULUI`
  2. `REPOZITIONARE / MODIFICARE LIMITE IMOBIL`
  3. `RECTIFICARE / MODIFICARE SUPRAFATA IMOBIL`
  4. `SCHIMBAREA CATEGORIEI DE FOLOSINTA A IMOBILULUI`
  5. `TRECEREA IMOBILULUI DIN EXTRAVILAN IN INTRAVILAN`
- Each block cites the governing instrument: *"Regulamentul la ODG 600/2023"*, *"Regulamentul la
  Ordin 700/2014"*, and names its own anexe.
- Operation-specific documents we do not list anywhere on our leaves: **adeverință de adresă de
  la primărie**; **proces-verbal de vecinătate** (for unfenced boundaries / streașină);
  **declarație notarială** when the surface increases or decreases; **act administrativ de la
  primărie** for the land-use category change; **adeverință că imobilul este în intravilan**.
- `priceDisclosure: none` · `durationClaim: none` · `faq: absent` · `processSteps: absent`.
- Standing discount offer on-page: *"Ne-ati gasit pe site? Beneficiati automat de 10% reducere la
  orice tip de lucrare!"* — a discount, not a price.

---

## 2. Competitor — expertcadastru.ro (Top Survey S.R.L.)

```json
{
  "url": "https://www.expertcadastru.ro/blog/72-cadastru-modificare-limite-si-suprafata.html",
  "domain": "expertcadastru.ro",
  "pageType": "surveyor",
  "rankedFor": [{"queryId": "acf-q4", "rank": 4}],
  "wordCount": 900,
  "headingOutline": [
    {"level": 1, "text": "Cadastru modificare limite si suprafata"},
    {"level": 2, "text": "Cadastru Topografie Bucuresti"},
    {"level": 2, "text": "Firma Top Survey"},
    {"level": 2, "text": "Cadastru - modificarea suprafeţei si limitelor proprietatii."},
    {"level": 3, "text": "Contact rapid:"},
    {"level": 3, "text": "Lucrari recente:"}
  ],
  "sectionsPresent": ["legal basis of the operation", "documentatie necesara (12 items)",
                      "avizare term", "what changes in the CF afterwards", "contact rapid",
                      "lucrari recente", "site-wide nav: Acte cadastru / Preturi cadastru / Formulare cadastru / Arhiva blog"],
  "questionsAnswered": [
    "În ce condiții se poate modifica suprafața și limitele — hotărâre judecătorească SAU măsurători cu acordul vecinilor",
    "Ce documentație intră în dosar (enumerare completă, cu numărul anexei)",
    "În cât timp se avizează documentația",
    "Ce se actualizează în CF după recepție (suprafață, limite, dimensiuni)"
  ],
  "priceDisclosure": "none",
  "priceValues": "None on this page. A site-wide /preturi-cadastru and /acte-cadastru/preturi-lucrari-cadastru exist in the nav, so price is a separate page, not this one.",
  "durationClaim": "VERBATIM: \"Termenul de avizare a unei docmentatii este de 21 zile lucratoare sau 30 zile calendaristice\" (typo theirs). A hard, numeric, third-party-processing claim of exactly the kind SOP 0.2 forbids us.",
  "acteNecesare": {"present": true, "itemCount": 12},
  "processSteps": {"present": false, "stepCount": 0},
  "faq": {"present": false, "questionCount": 0},
  "schemaTypes": ["(none detected)"],
  "trustSignals": {"ancpiAuthNumber": true, "namedPerson": true, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": false, "portfolio": true,
                   "phoneVisible": true, "whatsapp": false},
  "ctaStyle": "\"Sunati la telefon: 0722 515 977 / 0744 752 967\" — two dialable numbers plus a landline and office@ email. Phone-first, no messaging channel.",
  "localSpecificity": "generic",
  "whatTheyDoBetter": [
    "States the LEGAL TRIGGER first: the operation follows either \"o sentinta civila\" or measurements accepted \"cu acordul vecinilor prin întocmirea unui proces verbal de buna vecinatate\". Our leaf pages never say what legally unlocks a rectificare.",
    "Enumerates the dosar at ANNEX level — \"Cerere de solicitare informaţii si convenţie (anexa nr.1)\", \"Cerere de recepţie si înscriere (anexa nr.2)\", \"Declaratie ... (anexa 5)\" — 12 items vs our 4.",
    "Names the fallback route explicitly: \"Hotărâre Judecătoreasca, definitiva si irevocabila\".",
    "Publishes the ANCPI authorization: Ro-B-J, nr. 0269. We publish none (CEO question 1, still open).",
    "Publishes the 21-working-day / 30-calendar-day avizare term. BLOCKED BY POLICY for us.",
    "Dedicated URL per operation. The H1 IS the operation the searcher typed."
  ],
  "whatWeDoBetter": [
    "They are a BUCHAREST firm (P-ta Valter Maracineanu, sector 1; coverage Bucuresti + Ilfov) ranking #4 on a query containing \"alba\". Google flagged \"Lipsesc: alba\" on this result. Zero local relevance — a genuine opening.",
    "No FAQ, no numbered steps, no schema; ours has all three.",
    "Their acte list is written for a surveyor, not an owner (\"Măsurători in reţeaua de îndesire si ridicare\", \"Descrierile topografice ale punctelor noi\" — items the CLIENT never supplies, mixed into the same list as items they do). Ours lists only what the owner must bring.",
    "Our /ghid/rectificare-suprafata-teren-cf.html is 1,520 words with 7 FAQ, the 2% tolerance rule, the proces-verbal path and the instanță path — materially deeper than this ranked page. It is simply not the page competing here (see §3, ROUTING)."
  ]
}
```

---

## 3. OUR pages — scored on the identical schema (SOP Step 4)

Measured from the built HTML in `docs/`. `wordCount` = tokens in the gated region between
`<!--content:start-->` and `<!--content:end-->`.

### 3.1 Structure common to all 92 `actualizare-carte-funciara` leaves

```json
{
  "domain": "expert-intabulare.ro",
  "pageType": "surveyor",
  "headingOutline": [
    {"level": 1, "text": "Actualizare carte funciară în <Localitate> (Alba)"},
    {"level": 2, "text": "Unde se depune dosarul"},
    {"level": 2, "text": "Despre lucrări în <Localitate>"},
    {"level": 2, "text": "Acte necesare (orientativ)"},
    {"level": 2, "text": "Cum decurge procesul"},
    {"level": 2, "text": "Particularități OCPI în județul Alba"},
    {"level": 2, "text": "Întrebări frecvente — actualizare carte funciară în <Localitate>"},
    {"level": 2, "text": "Contact rapid"},
    {"level": 2, "text": "Alte servicii în <Localitate>"},
    {"level": 2, "text": "Actualizare carte funciară în localități apropiate"},
    {"level": 2, "text": "Vezi și"},
    {"level": 2, "text": "Ai o situație asemănătoare?"}
  ],
  "sectionsPresent": ["intro (2–4 data-composed sentences)", "BCPI office + street address + satele aparținătoare",
                      "local context paragraph", "acte necesare (4 items) + Printează lista",
                      "process (5 numbered steps) + orientative price + priceDisclaimer",
                      "county OCPI note", "FAQ 4–6 <details>", "contact rapid",
                      "7 sibling services", "8 nearby localities with km", "2 hub links", "stats band + WhatsApp CTA"],
  "priceDisclosure": "range",
  "priceValues": "\"Preț orientativ: 600 – 1.800 lei, orientativ, în funcție de tipul actualizării.\" + priceDisclaimer: \"Prețurile afișate sunt orientative; costul exact depinde de teren, documente și situația din cartea funciară.\" On pages whose FAQ selection includes the cost question, also: \"Depinde de operațiune: orientativ 600 – 1.800 lei plus tarifele ANCPI.\"",
  "durationClaim": "No numeric third-party claim. Hedged only, in the FAQ where selected: \"Documentația o întocmim în câteva zile de la măsurătoare, iar soluționarea urmează termenele OCPI, care pot fi scurtate cu taxă de urgență.\" Intro contains the phrase \"termen previzibil\". COMPLIANT with SOP 0.2 as written; see §6 note.",
  "acteNecesare": {"present": true, "itemCount": 4},
  "processSteps": {"present": true, "stepCount": 5},
  "schemaTypes": ["LocalBusiness", "PostalAddress", "GeoCoordinates", "BreadcrumbList", "ListItem",
                  "Service", "AdministrativeArea", "FAQPage", "Question", "Answer"],
  "trustSignals": {"ancpiAuthNumber": false, "namedPerson": true, "photoOfPerson": false,
                   "reviews": false, "yearsExperience": true, "portfolio": false,
                   "phoneVisible": true, "whatsapp": true},
  "ctaStyle": "WhatsApp-first deep link (6 per page) + 5 dialable tel: links + \"răspundem de obicei în aceeași zi lucrătoare\". Stats band: 25+ ani experiență / 1052+ proiecte finalizate / 2681+ colaborări.",
  "localSpecificity": "deep"
}
```

The 4 `acte necesare` items, identical on all 92 leaves:
1. Extras de carte funciară al imobilului
2. Act de identitate proprietar(i)
3. Acte care susțin modificarea: autorizație de desființare, certificat de urbanism, adeverințe de la primărie, după caz
4. Certificat de atestare fiscală, pentru anumite operațiuni

The 5 process steps, identical on all 92 leaves (only the locality name varies in step 3):
1. Ne trimiți extrasul CF și ne descrii ce s-a schimbat față de acte.
2. Verificăm evidențele și stabilim tipul de actualizare necesar.
3. Măsurăm imobilul în `<Localitate>`, unde situația o cere.
4. Întocmim documentația cadastrală de actualizare și o depunem la biroul competent.
5. Primești extrasul de carte funciară cu datele aduse la zi.

### 3.2 Per query — servedPage vs correctPage

| Query | Rank | servedPage | correctPage | Differ? |
|---|---|---|---|---|
| acf-q1 `actualizare carte funciara alba` | #4 | `docs/servicii/actualizare-carte-funciara/alba/avram-iancu.html` | **does not exist** (`.../alba/index.html` absent) | **YES — no correct page** |
| acf-q2 `... alba iulia` | #4 | `.../alba/zlatna.html` | `.../alba/alba-iulia.html` | **YES** |
| acf-q3 `... aiud` | #4 | `.../alba/sugag.html` | `.../alba/aiud.html` | **YES** |
| acf-q4 `rectificare suprafata ... alba` | absent | — | `/ghid/rectificare-suprafata-teren-cf.html` or the missing county hub | n/a |

| Page | bytes | gated words | FAQ | acte | steps | distance sentence rendered |
|---|---|---|---|---|---|---|
| **served** avram-iancu (q1) | 28,119 | 846 | 5 | 4 | 5 | "se află la aprox. **94 km** de biroul nostru din Aiud" |
| **served** zlatna (q2) | 26,952 | 789 | 4 | 4 | 5 | "aprox. **58 km**" |
| **served** sugag (q3) | 26,544 | 760 | 4 | 4 | 5 | "aprox. **81 km**" |
| **correct** alba-iulia (q2) | 28,083 | 863 | 5 | 4 | 5 | "aprox. **39 km**" |
| **correct** aiud (q3) | 28,869 | **916** | **6** | 4 | 5 | none — home-town wording, "biroul PFA se află chiar în municipiu" |
| county fallback `docs/zone/alba/index.html` | 108,545 | 3,687 | **0** | 0 | 0 | A–Z list of 78 localities with km each |
| national hub `docs/servicii/actualizare-carte-funciara/index.html` | 28,114 | **351** | **0** | 4 | 5 | none; **no county term anywhere** |

**Difference between served and correct pages — the honest answer: structurally none.**
All five leaves are the same template with the same 4 acte, the same 5 steps, the same price
range, the same county OCPI paragraph, and a 4–6 question FAQ drawn from one pool. The measurable
deltas are ±150 words and ±2 FAQ entries. **The served page is not materially worse than the
correct page; it is simply the wrong place.** The only genuine losses are:

- **q1/q2/q3 — distance in the snippet.** The served pages advertise 94 km / 58 km / 81 km. The
  correct pages would say 39 km, or on Aiud nothing at all. Chair ruling D1 (meta rebuild) already
  covers this; this service confirms it with the worst case in the whole session (94 km).
- **q3 — the home-town differentiator is thrown away.** `aiud.html` is the only leaf in the
  service that says "biroul PFA se află chiar în municipiu", names BCPI Aiud at Str. Cuza Vodă
  nr. 14 as the local office, and lists all 10 satele aparținătoare. Google shows Șugag instead.
- **q1 — there is nothing correct to serve.** No `docs/servicii/actualizare-carte-funciara/alba/index.html`.
  The national `/servicii/actualizare-carte-funciara/index.html` exists but is **351 gated words,
  zero FAQ, and never uses the word "Alba"** — it cannot answer a county query. The generic
  `docs/zone/alba/index.html` covers all 12 services, has **no FAQ and no FAQPage schema**, and
  did not rank.

### 3.3 Our `/ghid/` inventory for this service — better than the page that beat us, and absent

| Article | gated words | FAQ | Covers |
|---|---|---|---|
| `docs/ghid/rectificare-suprafata-teren-cf.html` | **1,520** | **7** | H2s: *De ce nu se potrivesc suprafețele · Regula celor 2% — pragul care schimbă totul · Ce se întâmplă, în funcție de mărimea diferenței · Cum decurge, pas cu pas · Când rectificarea nu se poate face administrativ* |
| `docs/ghid/acte-necesare-actualizare-date-imobil.html` | 1,310 | 6 | per-operation document lists |
| `docs/ghid/prima-inscriere-vs-actualizare-carte-funciara.html` | — | — | the distinction |
| `docs/ghid/cum-citesti-un-extras-de-carte-funciara.html` | — | — | reading the CF |
| `docs/ghid/extras-carte-funciara-online.html` | — | — | the navigational demand |

`rectificare-suprafata-teren-cf.html` beats expertcadastru's #4-ranked article on every schema
field that is not authority: 1,520 vs 900 words, 7 FAQ vs 0, explicit steps vs none, the 2%
tolerance rule they never state, plus FAQPage schema. **We are still absent from that SERP.** Its
`<title>`, `<meta>` and H1 carry no county term, and Google flagged "Lipsesc: alba" on five of the
nine results — so the county term is weakly weighted there anyway. Treat our absence as
**domain-authority-plausible, not content-plausible**; do not attribute it to the article's quality.

---

## 4. Secondary intelligence — non-cohort pages (recorded, not used for consensus)

| Source | Type | What the customer has already been told |
|---|---|---|
| **cfunciara.ro** (acf-q1 #2, acf-q2 #6, acf-q3 #1/#6) | directory | Per-operation SLA table: *"Actualizare adresă în Cartea Funciară — **5 zile lucrătoare**"*; *"Documente cadastrale pentru Certificat de urbanism — **4** [zile]"*. Hook: *"fără cont și fără deplasări la OCPI"*. |
| **efunciara.ro** (acf-q1 #1, acf-q2 #1) | directory | Ranks #1 on both with an **operation × locality** page: *"Actualizare adresă imobil Alba online"*, *"Actualizare adresă imobil Alba Iulia online"*. Hook: *"fără drumuri la ghișeu"*. |
| **contractorii.ro** (acf-q4 #2, 3 days old) | blog | *"Modifici suprafata carte funciara? Ghid pas cu pas"* — a fresh how-to outranking every surveyor on the query. |
| **deaconu.legal** (acf-q4 #3) | blog (law firm) | *"Rectificare Carte Funciară. Constatarea suprafeței reale…"* — the legal framing. |
| **expertcadastru.ro** (acf-q4 #4) | surveyor | 21 zile lucrătoare / 30 zile calendaristice avizare. |
| Facebook — Molnar Aurelian-Marian (acf-q3 **#2**) | other (social) | Advertises our exact list including *"Actualizări Carte Funciară"*. **Our only local rival, and he has no website.** |

**Everything in the duration column above is BLOCKED BY POLICY for us.** Recorded so the
implementation stage knows the customer arrives having read 4, 5, 21 and 30 days somewhere else.

---

## 5. The five sharpest differences (SOP Step 5 confidence tags)

**1. [HIGH][moves-rankings] The whole vertical is organised by OPERATION; we are organised by
SERVICE.** cadastrumaxim splits `actualizare date` into 5 named operations each with its own
document list; expertcadastru gives `modificare limite si suprafata` its own URL and H1;
efunciara ranks **#1 on two of four queries** with *"Actualizare adresă imobil `<locality>` online"*
— an operation × locality page. Our 92 leaves present one undifferentiated "Actualizare carte
funciară" with one 4-item list. The searcher types the operation, not the service. This is
**2 of 2 surveyors + the #1 directory on both county and city queries**, and it is mechanically
checkable. It is also the single most plausible on-page contributor to the wrong-page selection:
92 leaves that say the same thing about five different operations give Google nothing to
discriminate on except locality, which it is already getting wrong.

**2. [HIGH][table-stakes] Their document lists are operation-specific and legally anchored; ours
is generic and 4 items long.** Competitor lists run to 12 items (expertcadastru, at annex level:
*anexa nr.1 / anexa nr.2 / anexa 5*) and cite the instrument (*ODG 600/2023*, *Ordin 700/2014*).
Documents absent from all 92 of our leaves: **adeverință de adresă de la primărie**,
**proces-verbal de bună vecinătate**, **declarație notarială** when the surface changes,
**act administrativ de la primărie** for category change, **hotărâre judecătorească definitivă și
irevocabilă**. We do have several of these in `/ghid/rectificare-suprafata-teren-cf.html` — they
have simply never reached the pages that rank.

**3. [HIGH][blocked-by-policy] Duration is the axis the competition competes on, and it is closed
to us.** cfunciara publishes a per-operation SLA (**5 zile lucrătoare** for exactly the operation
efunciara ranks #1 for); expertcadastru publishes **21 zile lucrătoare / 30 zile calendaristice**.
Our only duration text is deliberately non-numeric. **Do not propose a number.** The realistic
counter-move is procedural certainty without a clock — what we do, in what order, who submits, who
follows the file — which our 5-step block already starts and could extend.

**4. [MEDIUM][moves-rankings] On price the pattern is inverted, and we should notice we are
winning.** Neither surveyor competitor publishes a figure — cadastrumaxim explicitly refuses
(*"Costurile se calculeaza in functie de specificul lucrarii"*), expertcadastru's ranked page has
none. **We are the only surveyor in this entire SERP set quoting a number (600 – 1.800 lei), and
Google chose exactly that sentence as our snippet on the home-town query.** Under CEO ruling 0.2
this stays. Any proposal to remove or hedge it further is an anti-pattern and is rejected here in
advance.

**5. [HIGH][moves-rankings] Routing, not quality, is the loss — and this service is the worst case
in the session.** Three #4 rankings, three wrong pages, at **94 km, 58 km and 81 km** from the
office — anti-correlated with proximity. On acf-q3, our own home town, Google serves a mountain
commune 81 km away while `aiud.html` — the only leaf that says the office is in the same
municipality, names BCPI Aiud at Str. Cuza Vodă nr. 14 and lists all 10 satele aparținătoare —
sits unserved. On acf-q1 there is **no correct page to serve at all**: no service×county hub, and
the national hub is 351 words with zero FAQ and no county term. Confirms chair rulings D2 (routing
first) and W1 (service×county hubs), and extends W1's scope: this service needs the Alba hub as
much as any of the six flagships, despite holding none of them.

### Runner-up, worth stating because it is a standing opening

**[HIGH][moves-rankings] On the home-town query there is no competitor surveyor website at all.**
acf-q3 is 9/9 non-surveyor: five carte-funciară portals, two government PDFs, ANCPI, and our only
local rival — Molnar Aurelian-Marian — reaching **#2 through a Facebook page**. Nothing stands
between us and the top of that SERP except portals that do not measure land and a competitor with
no site. Getting the right page served on `actualizare carte funciara aiud` is the cheapest win in
this service.

---

## 6. Notes for the implementation stage

- **BLOCKED BY POLICY, not actioned:** any turnaround figure (5 / 21 / 30 days), any exact ANCPI
  tariff, any new price figure. Recorded as intelligence only.
- **Existing hedged duration text on our leaves** — *"Documentația o întocmim în câteva zile de la
  măsurătoare, iar soluționarea urmează termenele OCPI, care pot fi scurtate cu taxă de urgență"* —
  is our own work, non-numeric about BCPI, and predates this research. It reads as compliant with
  SOP 0.2. Flagged for the chair's awareness, **not proposed for change by this agent.**
- **Confirmed source defect (capture agent flagged it, now verified):** the stats band emits
  `<span class="num">25+</span><span class="lbl">ani experiență</span>` with no whitespace between
  the spans, so text extractors — including Google, in our live #4 snippet on acf-q1 — render
  **"25+ani experiență"**. Real, in `generator/`, not a capture artifact. Chair ruling B6 already
  touches this band.
- **acf-q4 stays re-tagged `informational`** per the capture agent. It belongs to the `/ghid/`
  lane, where `rectificare-suprafata-teren-cf.html` already exists and is stronger than the page
  that outranks it. No flagship on it.
- **Cohort weight:** every consensus claim above rests on **N=2 competitor surveyor pages**. Stated
  plainly per SOP §7 — this is correlation over a very small cohort, and only the 2026-08-19 GSC
  gate decides whether any of it is causal.
