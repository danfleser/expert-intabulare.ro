# SERP capture — `intabulare-apartament`

**Captured 2026-07-29 ~14:00–14:08 UTC · Capture Agent 2 · logged-in Chrome, own tab**
**URL form:** `https://www.google.com/search?q=<q>&hl=ro&gl=ro&num=10`
**Method:** SOP-serp-research.md §3 Step 1 + Step 2. Map pack, organic, related and PAA recorded
separately and never merged.

**Extraction caveat (applies to every query in this file):** results were taken with
`get_page_text`, which returns the main results column. Where "Map pack" says NONE below, no
"Rezultate locale" block appeared in the extracted text. The same tool DID surface map packs in
the 2026-07-29 session (`CAPTURES-2026-07-29.md` Q1/Q2/Q3), so absence is treated as genuine
absence, but it is an inference, not a screenshot.

---

## apt-q1 — `intabulare apartament alba`
**tier:** county · **locality:** null · **intent:** transactional

### Map pack
**NONE.**

### Organic top 10 (9 results returned)

| # | Domain | URL | Title | pageType |
|---|---|---|---|---|
| 1 | necesit.ro | `necesit.ro/…/alba-iulia` | Top 20 firme pentru cadastru și intabulare Alba Iulia, 2026 | directory |
| 2 | intabulari24.ro | `intabulari24.ro/experti/alba/alba-iulia` | Top experti Cadastru si intabulare apartament in Alba Iulia | directory |
| 3 | birou-cadastru.com | `birou-cadastru.com/…/alba-iulia` | Intabulare Alba Iulia - Birou Cadastru | directory |
| 4 | cadastru24.ro | `cadastru24.ro/Alba/Valea-Caselor` | Top 10 experti topografi pentru Cadastru si Intabulare | directory |
| 5 | **expert-intabulare.ro** | `expert-intabulare.ro/…/Județul Alba` | **Intabulare casă / construcție în Alba Iulia (Alba)** | **surveyor (OURS)** |
| 6 | necesit.ro | `necesit.ro/intabulare-apartament-alba-iulia` | Firme pentru intabulare apartament în apropierea dvs. | directory |
| 7 | firmecadastru.ro | `firmecadastru.ro/alba/alba-iulia` | Firme cadastru si intabulare din Alba Iulia | directory |
| 8 | expert24.ro | `expert24.ro/experti/ancpi/alba-iulia` | Cei mai buni Experti cadastru si intabulare in Alba Iulia | directory |
| 9 | olx.ro | `olx.ro/oferta` | Topografie/Cadastru Alba Iulia | marketplace |

**Snippets of note**
- #6 necesit.ro carries a rich-result badge: `4,8(672) · Intervalul de preț: 560 – 810 lei (Avg: 630 lei)`.
- #9 OLX lists the exact service vocabulary a buyer uses: *apartamentare/subapartamentare, alipire/dezlipire, planuri topografice pentru PAC, PUD, PUZ, intabulare titlu de proprietate.*

### Related searches
NONE returned.

### PAA
NONE.

### OUR position
**#5 — but Google serves the WRONG PAGE.**
- `servedPage`: `docs/servicii/intabulare-casa-constructie/alba/alba-iulia.html`
- `correctPage`: county-level query → no service×county hub exists; nearest correct leaf is
  `docs/servicii/intabulare-apartament/alba/alba-iulia.html`
- **Two errors at once:** wrong service (casă/construcție for an apartment query) AND wrong tier
  (a city leaf answering a county query).
- This is the same defect already logged for `intabulare apartament Alba Iulia` in
  `FINDING-cannibalization.md` — now confirmed to repeat at county level with the identical page.

### Aggregator share
**8 / 9 non-surveyor** (7 directory + 1 marketplace).
**Surveyor cohort available for consensus: 0 competitors.** Our own page is the only surveyor
result in the top 10. Per SOP §3 Step 3 this is a shortfall (<3 surveyors), recorded, not padded.

---

## apt-q2alt-pc — `cadastru apartament alba iulia`
**tier:** city · **locality:** alba-iulia · **intent:** transactional

### Map pack
**NONE.**

### Organic top 10 (9 results returned)

| # | Domain | URL | Title | pageType |
|---|---|---|---|---|
| 1 | necesit.ro | `necesit.ro/…/alba-iulia` | Top 20 firme pentru cadastru și intabulare Alba Iulia, 2026 | directory |
| 2 | cadastrumaxim.ro | `cadastrumaxim.ro` (homepage) | CADASTRU MAXIM - Birou Topograf Cadastru Intabulare | **surveyor** |
| 3 | intabulari24.ro | `intabulari24.ro/experti/alba/alba-iulia` | Top experti Cadastru si intabulare apartament in Alba Iulia | directory |
| 4 | birou-cadastru.com | `birou-cadastru.com/…/alba-iulia` | Intabulare Alba Iulia - Birou Cadastru | directory |
| 5 | efunciara.ro | `efunciara.ro/oficii/bcpi-alba-iulia-44` | BCPI Alba Iulia – Servicii Cadastrale și Publicitate | directory |
| 6 | facebook.com | Cadastru Maxim - Topografie Cadastru Alba | 2.344 aprecieri · `5,0(15)` | other |
| 7 | cadastrumartin.ro | `cadastrumartin.ro` (homepage) | Birou Cadastru Martin – Servicii de topografie intabulare | **surveyor** |
| 8 | birouri-cadastru.ro | `birouri-cadastru.ro/alba-iulia` | Birouri Cadastru Alba Iulia | directory |
| 9 | **expert-intabulare.ro** | `expert-intabulare.ro/…/Județul Alba` | **Cadastru și intabulare în Noșlac, jud. Alba** | **surveyor (OURS)** |

**Snippets of note**
- #2 cadastrumaxim.ro ranks its **homepage**, not a service page, and the snippet Google chose is
  the raw NAP block: two phone numbers, two e-mail addresses, the named engineer
  ("Ing. Emanuel Maxim"), and the street address. Google is treating contact completeness as the
  answer to a local commercial query.
- #5 efunciara.ro wins a directory slot purely by enumerating the UATs arondate to BCPI Alba Iulia.
- #8 birouri-cadastru.ro lists the service taxonomy verbatim: *Intabulare Imobil · Intabulare
  Constructie · Alipire-Comasare · Dezlipire-Parcelare · Apartamentare · Actualizare*.

### Related searches
`Cadastru alba iulia` · `Cadastru alba iulia program` · `Topografi autorizati alba iulia` ·
`Topograf alba iulia` · `Oficiul de cadastru și publicitate imobiliară alba fotografii` ·
`Ocpi alba contact`

### PAA
NONE.

### OUR position
**#9 — WRONG PAGE.**
- `servedPage`: `docs/servicii/cadastru-si-intabulare/alba/noslac.html` — a commune, not Alba Iulia
- `correctPage`: `docs/servicii/intabulare-apartament/alba/alba-iulia.html`
- **Wrong service AND wrong locality.** The query names the county seat explicitly; Google
  answered with a commune. Noșlac is a *new* wrong-page instance not in
  `FINDING-cannibalization.md`.

### Aggregator share
**6 / 9 directory + 1 other = 7 / 9 non-surveyor.**
**Surveyor cohort: 2 competitors** (cadastrumaxim.ro, cadastrumartin.ro) — both ranking their
**homepage**, neither a service-specific page. Shortfall vs the 3-surveyor minimum: recorded.

---

## apt-q3-pc — `intabulare apartament aiud`
**tier:** town · **locality:** aiud · **intent:** transactional

### Map pack
**NONE.** (Note: `cadastru si intabulare Aiud` and `topograf aiud` DID return map packs in the
earlier session with our GBP at #1. This service-qualified Aiud query returns none — matching
finding F5, that service-specific queries drop the local pack.)

### Organic top 10 (9 results returned)

| # | Domain | URL | Title | pageType |
|---|---|---|---|---|
| 1 | intabulari24.ro | `intabulari24.ro/experti/ancpi/alba/aiud` | Top 10 Experti cadastru si intabulare in Aiud | directory |
| 2 | facebook.com | Birou Cadastru Aiud - Molnar Aurelian-Marian | 210+ persoane interesate | other |
| 3 | **expert-intabulare.ro** | `expert-intabulare.ro/…/Județul Alba` | **Intabulare apartament în Râmeț, jud. Alba** | **surveyor (OURS)** |
| 4 | aiud.ro | `aiud.ro/informatii_publice/anunt` | Înregistrarea sistematică a terenurilor… (PNCCF) | government |
| 5 | intabulari24.ro | `intabulari24.ro/experti/alba/aiud` | Top 10 experti pentru Cadastru si intabulare apartament in Aiud | directory |
| 6 | necesit.ro | `necesit.ro/providers/pavel-gheorghe` | Pavel Gheorghe \| Intabulare teren, Intabulare casă, Topograf | directory |
| 7 | efunciara.ro | `efunciara.ro/oficii/bcpi-aiud-46` | BCPI Aiud – Servicii Cadastrale și Publicitate Imobiliară | directory |
| 8 | expert24.ro | `expert24.ro/experti/alba/aiud` | Cadastru si intabulare teren intravilan in Aiud | directory |
| 9 | firmecadastru.ro | `firmecadastru.ro/alba/aiud` | Firme cadastru si intabulare din Aiud - judetul Alba | directory |

**Snippets of note**
- A `Se gândește` (AI-mode / AI overview) block rendered between #1 and #2 and then the web
  results resumed. Not a PAA block; recorded for the audit trail only.
- #2 Facebook: the local competitor's Facebook page outranks every surveyor website in Aiud for
  this query. Its snippet is a checkmark service list —
  *✓ cadastru și intabulare ✓ dezmembrări / alipiri ✓ trasări in teren ✓ actualizare Carti
  Funciare ✓ documentații pentru…*
- #4 aiud.ro PNCCF page repeats the "bring these documents" list — the third Aiud query on which
  the Primărie ranks (see F8). Demand for the PNCCF topic is now confirmed on three separate
  Aiud queries.

### Related searches
NONE returned.

### PAA
NONE.

### OUR position
**#3 — WRONG PAGE.**
- `servedPage`: `docs/servicii/intabulare-apartament/alba/ramet.html` — Râmeț, a commune ~19 km
  from Aiud
- `correctPage`: `docs/servicii/intabulare-apartament/alba/aiud.html`
- **Right service, wrong locality.** Notably this is the *correct service* — the only query in
  this file where Google picked the apartment page at all — and it still missed the town, on our
  home turf where the office is physically located.

### Aggregator share
**6 directory + 1 government + 1 other = 8 / 9 non-surveyor.**
**Surveyor cohort: 0 competitors.** No competing surveyor *website* reaches the top 10 for
`intabulare apartament aiud` — the nearest thing is a Facebook page at #2.

---

## apt-q4-pc — `cadastru apartament pret alba`
**tier:** county · **locality:** null · **intent:** transactional

### Map pack
**NONE.**

### Organic top 10 (9 results returned)

| # | Domain | URL | Title | pageType |
|---|---|---|---|---|
| 1 | veritatopo.ro | `veritatopo.ro/preturi` | lista de preturi cadastru si intabulare, tarife cadastru | **surveyor** |
| 2 | necesit.ro | `necesit.ro/…/cadastru-si-intabulare` | Cât costă cadastru și intabulare? | directory |
| 3 | cadastrumaxim.ro | `cadastrumaxim.ro` (homepage) | CADASTRU MAXIM - Birou Topograf Cadastru Intabulare | **surveyor** |
| 4 | e-cadastru.ro | `e-cadastru.ro/preturi-cadastru-intabulare` | Preturi cadastru | **surveyor** |
| 5 | rivx.ro | `rivx.ro/faq/care-sunt-costurile-si-durata-estim…` | Care sunt costurile și durata estimată pentru intabularea unui… | blog |
| 6 | eghiseul.ro | `eghiseul.ro/Informații utile` | Cât Costă Cadastrul și Intabularea în 2026? Prețuri reale | blog |
| 7 | necesit.ro | `necesit.ro/…/cadastru` | Cât costă cadastru? | directory |
| 8 | intabulari24.ro | `intabulari24.ro/experti/alba/alba-iulia` | Top experti Cadastru si intabulare apartament in Alba Iulia | directory |
| 9 | startcad.ro | `startcad.ro/cadastru-apartament-cost-durata` | Cadastru apartament: costuri și durată pentru numărul… | **surveyor** |

### Related searches
`Pret cadastru teren intravilan` · `Pret cadastru teren extravilan` · `Pret cadastru si intabulare` ·
`Pret cadastru si intabulare apartament 3 camere` · `Pret cadastru teren agricol` ·
`Cadastru casa si teren` · `Cat costa cadastru la o casa` · `Actualizare cadastru pret`

### PAA
NONE.

### OUR position
**NOT IN TOP 10.** We do not appear at all. No served page, no wrong page — absent.

### Aggregator share
**4 / 9 non-surveyor** (3 directory + 2 blog = 5 actually; see breakdown).
Precise: directory 3 (#2, #7, #8), blog 2 (#5, #6), surveyor 4 (#1, #3, #4, #9).
**Non-surveyor share: 5 / 9.**

### Geo-relevance collapse — the key structural observation
Google printed **`Lipsesc: alba ‎| Caută cu: alba`** ("missing: alba") on results
**#1, #2, #4, #6, #7** — five of nine. That is Google admitting the county term is not present on
the pages it chose to rank. `cadastru apartament pret alba` is being answered by **national price
pages**, not local ones. The local modifier is decorative on this query.

### Competitor price + duration intelligence (recorded, NEVER published — CEO ruling 0.2)

| Source | Claim |
|---|---|
| veritatopo.ro | Cadastru + intabulare apartament / garsonieră: **800 lei**, **18 zile** lucrătoare |
| necesit.ro | Apartament 4 camere: **690 – 1.100 lei** (procedură cadastrală + intabulare inclusă) |
| e-cadastru.ro | Apartament 2 camere **900 lei** + taxă OCPI; 3 camere București **1.000 lei** + taxă |
| rivx.ro | Intabulare apartament **în Alba Iulia: 300 – 800 lei**, durată **30–60 zile** |
| eghiseul.ro | Cadastru apartament **700 – 1.100 lei** topograf + **120 lei** taxă ANCPI; casă cu teren 1.400–2.500 + 120; intabulare după cumpărare 0,15% din valoare |
| startcad.ro | Garsonieră **500 lei** · 2 cam **500** · 3 cam **600** · 4 cam **650** |

This is what the customer has already been told before they reach us. `rivx.ro` is the only one
naming Alba Iulia, and it quotes **300–800 lei / 30–60 zile** for our exact market.

---

## SUMMARY — `intabulare-apartament`

| Query | Tier | Map pack | Our rank | Page served | Correct? | Non-surveyor share |
|---|---|---|---|---|---|---|
| `intabulare apartament alba` | county | none | **#5** | intabulare-**casă/construcție** / alba-iulia | **NO** — wrong service + wrong tier | 8/9 |
| `cadastru apartament alba iulia` | city | none | **#9** | cadastru-si-intabulare / **Noșlac** | **NO** — wrong service + wrong locality | 7/9 |
| `intabulare apartament aiud` | town | none | **#3** | intabulare-apartament / **Râmeț** | **NO** — right service, wrong locality | 8/9 |
| `cadastru apartament pret alba` | county | none | **absent** | — | n/a | 5/9 |

**Routing defect: 3 of 3 queries where we rank. Zero correct pages served.**

**Surveyor-cohort shortfall on 3 of 4 queries.** On `intabulare apartament alba` and
`intabulare apartament aiud` there are **zero** competing surveyor pages in the top 10. Per SOP
§3 Step 2, the high aggregator share means these queries are genuinely winnable with a real
service page — the only thing standing between us and the click is that Google shows the wrong
one.

**BLOCKED BY POLICY:** every competitor on `cadastru apartament pret alba` publishes prices and
several publish durations (18 zile, 30–60 zile). Ruling 0.2 forbids both. We therefore cannot
compete on the price-intent query on its own terms, and it should not be selected as a target.
Recorded as intelligence only.

**Our own meta description is visible in every one of these snippets** in the form
`"<Serviciu> în <Localitate>: acte, pași, prețuri orientative. Topograf autorizat ANCPI,
aprox. N km de Aiud. Tel. 0741 478 540."` — with N = 39 (Alba Iulia), 19 (Râmeț). Confirms
D1 in the chair verdict from four fresh captures.
