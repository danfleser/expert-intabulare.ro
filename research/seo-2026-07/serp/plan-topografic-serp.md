# SERP capture — `plan-topografic`

**Captured 2026-07-29 ~14:05–14:09 UTC · Capture Agent 2 · logged-in Chrome, own tab**
**URL form:** `https://www.google.com/search?q=<q>&hl=ro&gl=ro&num=10`
**Method:** SOP-serp-research.md §3 Step 1 + Step 2.

**⚠ INCOMPLETE — 3 of 4 queries captured.** The fourth, `plan-q4-pc` /
`ridicare topografica alba`, hit a Google anti-bot interstitial. See the last section.

**Extraction caveat:** `get_page_text` returns the main results column. "Map pack: NONE" means no
"Rezultate locale" block appeared in the extracted text.

---

## plan-q1-pc — `plan topografic alba`
**tier:** county · **locality:** null · **intent:** transactional

### Map pack
**NONE.**

### Organic (8 web results returned + one Imagini block)

| # | Domain | URL | Title | pageType |
|---|---|---|---|---|
| 1 | cadastrumaxim.ro | `cadastrumaxim.ro` (homepage) | CADASTRU MAXIM - Birou Topograf Cadastru Intabulare | **surveyor** |
| 2 | cadastru24.ro | `cadastru24.ro/lucrari/Alba/Alba` | Portofoliu de lucrari de Plan Topografic de situatie in Alba | directory |
| 3 | **expert-intabulare.ro** | `expert-intabulare.ro/…/Județul Alba` | **Plan topografic în Doștat (Alba)** | **surveyor (OURS)** |
| 4 | cadastrumartin.ro | `cadastrumartin.ro` (homepage) | Birou Cadastru Martin – Servicii de topografie intabulare | **surveyor** |
| — | *Imagini* | Necesit.ro · Catalog Afaceri · Primăria Alba Iulia | image pack (extras de plan cadastral) | — |
| 5 | birou-cadastru.com | `birou-cadastru.com/…/alba-iulia` | Intabulare Alba Iulia - Birou Cadastru | directory |
| 6 | necesit.ro | `necesit.ro/providers/purcel-dumitru` | Purcel Dumitru \| Cadastru și intabulare, Plan de situație | directory |
| 7 | apulum.ro | `apulum.ro/pdf7/06_U01_plan_ca….pdf` | extras de plan cadastral (PDF, Primăria Alba Iulia) | government |
| 8 | **expert-intabulare.ro** | `expert-intabulare.ro/…/Județul Alba` | **Plan topografic în Sântimbru, jud. Alba** | **surveyor (OURS)** |

### Related searches
NONE returned.

### PAA
NONE.

### OUR position
**#3 AND #8 — BOTH WRONG PAGES.**

| Slot | Page served | Distance from Aiud (per our own meta) |
|---|---|---|
| **#3** | `plan-topografic/alba/dostat.html` | **53 km** |
| **#8** | `plan-topografic/alba/santimbru.html` | **28 km** |

- `correctPage`: county-level query → a `plan-topografic` × Alba hub, which **does not exist**
  (chair verdict W1). Nearest correct leaf would be `plan-topografic/alba/alba-iulia.html`.
- Two of our own pages compete against each other in the top 10, and neither is a place a
  county-level searcher would recognise. Doștat is the same page previously observed on
  `plan topografic Alba Iulia` at #2 (`FINDING-cannibalization.md`).

### Aggregator share
**4 / 8 non-surveyor** (3 directory + 1 government).
**Surveyor cohort: 2 competitors** (cadastrumaxim.ro, cadastrumartin.ro) — **both ranking their
homepage, not a plan-topografic service page.** Shortfall vs the 3-surveyor minimum: recorded,
not padded.

### What the surveyor cohort actually does
Both competitors rank a homepage whose snippet is a **service-menu list**, and Google chose to
render that list as the snippet:
- cadastrumaxim.ro: *P.A.C. · Trasari Topografice · Expertize Tehnice · Planuri de Situatie ·
  **Plan Amplasament/Topografic** · Curbe de Nivel - Planuri 3D · Profile Topografice*
- cadastrumartin.ro: *Actualizare date imobil si **plan topo-cadastral***

The vocabulary that wins here is the **document name**, not the service name: *plan de situație*,
*plan de amplasament și delimitare*, *curbe de nivel*, *profile topografice*, *P.A.C.* An image
pack of literal *extras de plan cadastral* scans reinforces it — Google reads this query as
"the document", not "the person".

---

## plan-q2alt-pc — `plan topografic pentru autorizatie de construire alba iulia`
**tier:** city · **locality:** alba-iulia · **intent:** transactional

### Map pack
**NONE.**

### Organic top 10 (9 results returned)

| # | Domain | URL | Title | pageType |
|---|---|---|---|---|
| 1 | se.apulum.ro | `se.apulum.ro/Registratura/RegistruUrbanism` | Consultare Registru Autorizații de construire (Primăria Alba Iulia) | government |
| 2 | cadastrumaxim.ro | `cadastrumaxim.ro` (homepage) | CADASTRU MAXIM - Birou Topograf Cadastru Intabulare | **surveyor** |
| 3 | apulum.ro | `apulum.ro/pdf7/11_MEMORIU_….pdf` | plan urbanistic de detaliu (PDF) | government |
| 4 | cadastrumartin.ro | `cadastrumartin.ro` (homepage) | Birou Cadastru Martin – Servicii de topografie intabulare | **surveyor** |
| 5 | birou-cadastru.com | `birou-cadastru.com/…/alba-iulia` | Intabulare Alba Iulia - Birou Cadastru | directory |
| 6 | arhiplan.ro | `arhiplan.ro/certificat-de-urbanism-online-…` | Certificat de urbanism online Alba Iulia - ARHIPLAN | other |
| 7 | e-serviciielectronice.sibiu.ro | `…/RegistruUrbanism` | Consultare Registru Autorizații de construire (Primăria Sibiu) | government |
| 8 | efunciara.ro | `efunciara.ro/bcpi-alba-iulia` | Plan amplasament și delimitare Alba Iulia online | directory |
| 9 | portal.apulum.ro | `portal.apulum.ro/acte-necesare-primaria-indsoft` | Acte necesare pentru obținerea autorizației de construire | government |

### Related searches
`Autorizatii de construire alba iulia` · `Cerere autorizatie de construire alba iulia` ·
`Cerere certificat urbanism alba iulia` · `Certificat de urbanism alba iulia` ·
`Registru autorizatii de construire` · `Autorizatie construire` ·
`Autorizatie acces alba iulia` · `Legea 50 autorizatie de constructie`

### PAA
NONE.

### OUR position
**NOT IN TOP 10.** We do not appear at all.

This is notable because `plan topografic Alba Iulia` (earlier session) ranks us **#2**. Adding
the qualifier *"pentru autorizație de construire"* — the single most common real reason to need a
plan topografic — drops us off the SERP entirely.

### Aggregator share
**7 / 9 non-surveyor** (4 government + 2 directory + 1 other).
**Surveyor cohort: 2 competitors** — again cadastrumaxim.ro and cadastrumartin.ro, again their
**homepages**. Shortfall recorded.

### The dominant pattern on this query: the municipality owns it
**Four of nine results are municipal urbanism portals**, including the Alba Iulia building-permit
register (#1), a PUD memoriu PDF (#3), the *acte necesare* page (#9), and — bizarrely — Sibiu's
register (#7) surfacing because it contains the string *"PLANULUI TOPOGRAFIC VIZAT O.C.P.I.
RECEPȚIONAT CU P.V. NR. 298/2026"*. Every related search is about the permit, not the survey:
`cerere autorizatie de construire`, `certificat de urbanism`, `Legea 50`.

**The searcher's real question is procedural: what does the primărie require, in what order.**
The two surveyor results that do rank both answer it by naming the permit deliverable explicitly
— cadastrumartin.ro lists *"AUTORIZATIE DE CONSTRUIRE – PAC"* and *"DOC. SCOATERE DIN CIRCUITUL
AGRICOL – SCA"* as named line items; cadastrumaxim.ro leads its service menu with *P.A.C.*
Neither publishes a price on the ranking page.

Note #9 (portal.apulum.ro) spells out the document chain: *Certificatul de urbanism · Dovada, în
copie legalizată, a titlului asupra imobilului · extrasul de plan cadastral…* — the authoritative,
citable sequence, from the primărie itself, with no numbers to invent.

---

## plan-q3-pc — `plan topografic aiud`
**tier:** town · **locality:** aiud · **intent:** transactional

### Map pack
**NONE.**

### Organic (9 web results returned + one Imagini block)

| # | Domain | URL | Title | pageType |
|---|---|---|---|---|
| 1 | aiud.ro | `aiud.ro/pdfs/alte_documente/7._….pdf` | EXTRAS DE PLAN CADASTRAL (29 pagini) | government |
| 2 | aiud.ro | `aiud.ro/pdfs/alte_documente/pla….pdf` | Plan topografic (PUZ, 4 aug. 2022, 3 pagini) | government |
| 3 | cluj.cnadnr.ro | `cluj.cnadnr.ro/files/exproprieri/ast2017` | plan coridor UAT AIUD 91245 (DRDP Cluj, PDF) | government |
| 4 | **expert-intabulare.ro** | `expert-intabulare.ro/…/Județul Alba` | **Plan topografic în Doștat (Alba)** | **surveyor (OURS)** |
| — | *Imagini* | Primăria Municipiului Aiud ×3 | image pack (EXTRAS DE PLAN CADASTRAL) | — |
| 5 | cad-atlas.com | `cad-atlas.com/Cities` | Aiud Site Plan \| DWG Site Plan — `4,8(127)` | marketplace |
| 6 | sicap.ai | `sicap.ai/achizitii/firma` | PFA PAVEL GHEORGHE TOPOMETRIST, Aiudul de Sus | directory |
| 7 | cadastru24.ro | `cadastru24.ro/lucrari/Alba/Alba` | Portofoliu de lucrari de Plan Topografic de situatie in Alba | directory |
| 8 | necesit.ro | `necesit.ro/providers/pavel-gheorghe` | Pavel Gheorghe \| Intabulare teren, Intabulare casă, Topograf | directory |
| 9 | aiud.ro | `aiud.ro/pdfs/alte_documente/7._….pdf` | extras de carte funciară (recepție plan topografic CF 76224 Aiud, PUZ) | government |

### Related searches
NONE returned.

### PAA
NONE.

### OUR position
**#4 — WRONG PAGE.**
- `servedPage`: `docs/servicii/plan-topografic/alba/dostat.html` — Doștat, a commune
  **53 km from Aiud**, snippet reads *"aprox. 53 km de Aiud"*
- `correctPage`: `docs/servicii/plan-topografic/alba/aiud.html`
- **Same Doștat page, third query in a row.** Doștat has now been served for
  `plan topografic Alba Iulia` (#2, earlier session), `plan topografic alba` (#3) and
  `plan topografic aiud` (#4). Google has effectively canonicalised a ~500-person commune as
  *the* plan-topografic page for the entire county, including the town our office is in.

### Aggregator share
**8 / 9 non-surveyor** (4 government + 3 directory + 1 marketplace).
**Surveyor cohort: 0 competitors.** Not one competing surveyor website ranks. The top three
results are municipal and road-authority **PDFs**. Highest non-surveyor share in this capture set.

### What is actually competing here
Nothing that a service business can imitate: scanned *extras de plan cadastral* PDFs from
Primăria Aiud, an expropriation corridor plan from DRDP Cluj, and a CAD-file marketplace. The
only commercial competitor visible is **PFA Pavel Gheorghe (Aiudul de Sus)** — and he ranks
through **SICAP public-procurement records** (*"Elaborare documentatii topografice - planuri
topografice, 6.000 RON / 1.200,00 EUR"*) and a necesit.ro profile, not through a website of his
own. There is no real competing service page for `plan topografic aiud`. The slot is open.

### Competitor intelligence (recorded, NEVER published — CEO ruling 0.2)
- **sicap.ai:** public-tender award to PFA Pavel Gheorghe, *Elaborare documentații topografice —
  planuri topografice*, **6.000 RON / 1.200,00 EUR**; second award *Elaborare documentație de
  publicitate imobiliară*. This is a public-sector contract value, not a consumer price — do not
  treat it as a retail benchmark.

---

## plan-q4-pc — `ridicare topografica alba` — ⛔ NOT CAPTURED

**Google served an anti-bot interstitial. Capture stopped immediately, per SOP §3 Step 1.**

```
URL:  https://www.google.com/sorry/index?continue=https://www.google.com/search?q=ridicare+topografica+alba…
Text: "Sistemele noastre au detectat trafic neobişnuit din reţeaua dvs. de computere.
       Această pagină verifică dacă dvs. trimiteţi solicitările sau dacă un robot face acest lucru."
IP:   2a01:4f8:1c0c:5be3:ac1e::2
Time: 2026-07-29T14:08:58Z
```

No attempt was made to solve or click through it, and no retry was issued. Four capture agents
were driving one Chrome profile in parallel; this was the 11th query of my own set and roughly
the 40th across the session. The rate limit is a session-wide effect, not specific to this query.

`ridicare topografica alba` remains **unmeasured**. It is the colloquial synonym a builder or a
farmer is most likely to type, and it is the one query in my set where the term does not appear
in our page titles at all, so it is worth re-running when the block clears.

---

## SUMMARY — `plan-topografic`

| Query | Tier | Map pack | Our rank | Page served | Correct? | Non-surveyor share |
|---|---|---|---|---|---|---|
| `plan topografic alba` | county | none | **#3 and #8** | **Doștat** (53 km) + **Sântimbru** (28 km) | **NO ×2** | 4/8 |
| `plan topografic pentru autorizatie de construire alba iulia` | city | none | **absent** | — | n/a | 7/9 |
| `plan topografic aiud` | town | none | **#4** | **Doștat** (53 km) | **NO** | 8/9 |
| `ridicare topografica alba` | county | — | — | — | — | **NOT CAPTURED (anti-bot block)** |

**Routing defect: 2 of 2 queries where we rank; 3 wrong pages served across them.**

**Doștat is the single most over-served page on the site** — three queries across two sessions,
including the county query and the home-town query, all answered by the same ~500-person commune
53 km from the office.

**Zero competing surveyor pages rank for `plan topografic aiud`, and only homepages rank for the
other two.** No competitor in this service has a plan-topografic page that beats a homepage. The
consensus that can be computed over the surveyor cohort is therefore thin (2 pages, both
homepages) and is reported as such rather than padded with directories.

**Two distinct intents are being conflated by one page:**
1. *plan topografic pentru autorizație de construire* — a **procedural, permit-driven** intent
   owned by municipal portals; the searcher wants the document chain (certificat de urbanism →
   plan topografic vizat OCPI → PAC). We rank nowhere for it.
2. *plan topografic / ridicare topografică* generally — a **document-name** intent, where the
   winning vocabulary is *plan de situație, plan de amplasament și delimitare, curbe de nivel,
   profile topografice, P.A.C.*

**BLOCKED BY POLICY:** nothing on the ranking pages of this service required a price or a
duration — the two ranking surveyor homepages publish neither on the page Google serves. Unlike
the apartment and dezmembrare cohorts, **`plan-topografic` is a service we can compete for
without touching ruling 0.2 at all.**
