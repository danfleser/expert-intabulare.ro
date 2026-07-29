# SERP captures — `trasare-teren`

**Captured 2026-07-29 · Capture agent 3 of 4 · logged-in Chrome, dedicated tab**
**Endpoint:** `https://www.google.com/search?q=<q>&hl=ro&gl=ro&num=10` · geo resolved by Google to Alba
**CAPTCHA:** none encountered. **PAA:** none on any of the 4 queries.

SOP Step 1 + Step 2 only (capture + `pageType` classification). Map pack and organic are recorded
separately and never merged — they are different ranking systems.

Distances quoted for our own served pages are **read out of the built HTML**, not estimated.

---

## tras-q1 — `trasare teren alba`
`service: trasare-teren · tier: county · locality: null · intent: transactional`

### Map pack
**NONE.** No "Rezultate locale" block rendered.

### Organic (page 1 returned **9** results, not 10)

| # | Domain | Title | pageType |
|---|---|---|---|
| 1 | cadastru24.ro | Lista lucrari de Trasare / Intarusare Teren / Constructie in Alba | marketplace |
| 2 | **expert-intabulare.ro** | **Trasare teren în Mogoș, jud. Alba — Topograf autorizat** | **surveyor (OURS)** |
| 3 | necesit.ro | Top 20 topografi Alba Iulia, 2026 | directory |
| 4 | cautcadastru.ro | Trasare construcții în Alba \| Autorizați ANCPI și Cereri de ofertă | directory |
| 5 | biroucadastru.ro | Trasare teren | surveyor |
| 6 | intabulari24.ro | Top 10 experti pentru Trasare / Intarusare teren / Constructie | directory |
| 7 | cadastrumaxim.ro | Trasari Topografice | surveyor |
| 8 | olx.ro | trasare teren de vanzare — Anunturi | marketplace |
| 9 | **expert-intabulare.ro** | **Trasare teren în Rimetea, jud. Alba — Topograf autorizat** | **surveyor (OURS)** |

URLs (as displayed): `cadastru24.ro/lucrari/Alba/Alba` · `necesit.ro/Topograf/Alba Iulia` ·
`cautcadastru.ro/Județe/Alba` · `biroucadastru.ro/servicii/trasare-teren` ·
`intabulari24.ro/experti/trasare-intarusar...` · `cadastrumaxim.ro/content/13-trasari-topografice` ·
`olx.ro/oferte/q-trasare-teren`

Snippets worth keeping:
- **#5 biroucadastru.ro — duration claim:** "termen de finalizare în aproximativ 3 zile lucrătoare
  sau chiar 1 zi lucrătoare dacă optezi pentru operarea în regim de urgență."
  *(Competitor intelligence only. Our own equivalent is BLOCKED BY POLICY — SOP 0.2.)*
- **#2 / #9 (ours) — meta template surfaced verbatim:** "…acte, pași, prețuri orientative. Topograf
  autorizat ANCPI, aprox. 44 km de Aiud. Tel. 0741 478 540." and "…aprox. 24 km de Aiud."

### Related searches
None rendered.

### PAA
None.

### OUR POSITION — served vs correct
| | |
|---|---|
| Rank | **#2** and **#9** — two of our own pages on one county SERP |
| servedPage #2 | `docs/servicii/trasare-teren/alba/mogos.html` — Mogoș, **aprox. 44 km de Aiud** |
| servedPage #9 | `docs/servicii/trasare-teren/alba/rimetea.html` — Rimetea, **aprox. 24 km de Aiud** |
| correctPage | **DOES NOT EXIST** — `docs/servicii/trasare-teren/alba/index.html` (service×county hub). Fallback today is `docs/zone/alba/index.html`, which did not rank. |
| ROUTING DEFECT | **YES** — county query answered by two scattered mountain-commune leaves. |

### Aggregator share
**5/9** non-surveyor (cadastru24, necesit, cautcadastru, intabulari24, olx).
Surveyor cohort = **4**: biroucadastru.ro, cadastrumaxim.ro, + 2 of ours.
`cautcadastru.ro` is a **directory not on the SOP §2 known-directory list** — add it.

---

## tras-q2 — `trasare teren alba iulia`
`service: trasare-teren · tier: city · locality: alba-iulia · intent: transactional`

### Map pack
**NONE.**

### Organic (9 results)

| # | Domain | Title | pageType |
|---|---|---|---|
| 1 | olx.ro | Anunturi Terenuri de vanzare Alba Iulia | marketplace |
| 2 | necesit.ro | Top 20 firme pentru cadastru și intabulare Alba Iulia, 2026 | directory |
| 3 | **expert-intabulare.ro** | **Intabulare casă / construcție în Întregalde, jud. Alba** | **surveyor (OURS)** |
| 4 | apulum.ro (Primăria Alba Iulia) | Terenuri agricole de vanzare Primariei Alba Iulia | government |
| 5 | hartilidar.eu | Căutare și Verificare Cadastru Online: Ghid de Localizare | blog |
| 6 | facebook.com | Terenuri de vanzare Alba Iulia (grup) | other |
| 7 | imobiliare.ro | Terenuri construcții de vânzare în Alba Iulia | marketplace |
| 8 | storia.ro | Terenuri de vânzare: Centru, Alba Iulia | marketplace |
| 9 | citadelaimobiliare.ro | Terenuri de vanzare in Alba Iulia | marketplace |

**Google dropped the head term on 6 of 9 results** — each carries "Lipsesc: trasare | Caută cu:
trasare" (#1, #4, #6, #7, #8, #9).

### Related searches
Teren de vanzare alba iulia olx · Teren de vanzare alba iulia centru · Teren de vanzare alba iulia
schit · Teren de vanzare alba iulia ampoi 3 · Teren de vanzare alba iulia micesti · Teren agricol de
vanzare alba · Gradini de vanzare alba iulia ieftine · Casa de vanzare alba iulia

### PAA
None.

### OUR POSITION — served vs correct
| | |
|---|---|
| Rank | **#3** |
| servedPage | `docs/servicii/intabulare-casa-constructie/alba/intregalde.html` — Întregalde, **aprox. 32 km de Aiud**. **Wrong service AND wrong locality.** |
| correctPage | `docs/servicii/trasare-teren/alba/alba-iulia.html` — **exists, was not served** |
| ROUTING DEFECT | **YES — double failure** (locality *and* service), the worst single instance captured in this session. |

### Aggregator share
**8/9** non-surveyor (5 marketplace, 1 directory, 1 government, 1 blog).
Surveyor cohort = **1** — ours, and it is the wrong page. **Zero competitor surveyor pages.**

### Query-level note
Google reads `trasare teren alba iulia` as **real-estate-for-sale intent**, not surveying intent.
The SERP is an OLX/Storia/Imobiliare page. Our #3 is the only non-real-estate commercial result on
it. This is a low-competition slot we hold with an unrelated page.

---

## tras-q3 — `trasare teren aiud`
`service: trasare-teren · tier: town · locality: aiud · intent: transactional`

### Map pack
**NONE.** (An AI-mode placeholder — "Se gândește" — rendered between result 1 and result 2; no
answer text had resolved at capture time. Recorded as an observation, not as a SERP feature.)

### Organic (9 results)

| # | Domain | Title | pageType |
|---|---|---|---|
| 1 | intabulari24.ro | Top 10 Experti cadastru si intabulare in Aiud | directory |
| 2 | **expert-intabulare.ro** | **Intabulare teren în Aiud, jud. Alba — Topograf autorizat** | **surveyor (OURS)** |
| 3 | expert24.ro | Cadastru si intabulare teren intravilan in Aiud | directory |
| 4 | **expert-intabulare.ro** | **Trasare teren în Lopadea Nouă, jud. Alba** | **surveyor (OURS)** |
| 5 | intabulari24.ro | Top 10 experti pentru Releveu imobil (schita) in Aiud | directory |
| 6 | olx.ro | teren Aiud — Terenuri | marketplace |
| 7 | imoradar24.ro | Terenuri de vânzare în Aiud, Județul Alba | marketplace |
| 8 | **expert-intabulare.ro** | **Trasare teren în Albac, jud. Alba — Topograf autorizat** | **surveyor (OURS)** |
| 9 | storia.ro | Terenuri de vânzare: Aiud, Alba | marketplace |

"Lipsesc: trasare" on #6, #7, #9.

### Related searches
None rendered.

### PAA
None.

### OUR POSITION — served vs correct
| | |
|---|---|
| Rank | **#2, #4 and #8 — THREE of our pages on one SERP** |
| servedPage #2 | `docs/servicii/intabulare-teren/alba/aiud.html` — right town, **wrong service** |
| servedPage #4 | `docs/servicii/trasare-teren/alba/lopadea-noua.html` — right service, **aprox. 11 km de Aiud** |
| servedPage #8 | `docs/servicii/trasare-teren/alba/albac.html` — right service, **aprox. 79 km de Aiud** |
| correctPage | `docs/servicii/trasare-teren/alba/aiud.html` — **exists, was not served at any of the three positions** |
| ROUTING DEFECT | **YES — triple.** The exact-match page is beaten by its own siblings three times over. |

`intabulare-teren/alba/aiud.html` is now confirmed as a **super-attractor**: it took the #5 slot on
`cadastru si intabulare Aiud` (earlier capture) and takes #2 here on a `trasare` query.

Also visible: the **self-distance defect (facts.md §12.1) is rendering inside the Google snippet**
on our home-town query — "Intabulare teren în Aiud: … aprox. **2 km de Aiud**."

### Aggregator share
**6/9** non-surveyor (intabulari24 ×2, expert24, olx, imoradar24, storia).
Surveyor cohort = **3, all of them ours**. **Zero competitor surveyor pages in the top 10.**

---

## tras-q4 — `trasare limite proprietate alba`
`service: trasare-teren · tier: county · locality: null · intent: transactional`

### Map pack
**NONE.**

### Organic (9 results; pagination stops at page **8** — a thin query)

| # | Domain | Title | pageType |
|---|---|---|---|
| 1 | intabulare.cadastru24.ro | Totul despre trasare limite teren – delimitarea limitelor de proprietate (29 apr. 2025) | blog *(on a directory-owned domain)* |
| 2 | brig.ro | Trasare Limite Proprietate in Albac \| Solicita Oferte Gratuite | directory |
| 3 | **expert-intabulare.ro** | **Trasare teren în Ocoliș, jud. Alba — Topograf autorizat** | **surveyor (OURS)** |
| 4 | expertcadastru.ro (Top Survey S.R.L.) | Trasare limite proprietate | surveyor |
| 5 | necesit.ro | Top 20 topografi Alba Iulia, 2026 | directory |
| 6 | olx.ro | trasare limita — Anunturi | marketplace |
| 7 | licitatia.ro | Servicii cadastrale trasare limite de proprietate (9 mar. 2026) | other *(public-tender monitor)* |
| 8 | brig.ro | Trasare Limite Proprietate in Cugir \| Solicita Oferte Gratuite | directory |
| 9 | birou-cadastru.com | Birou Cadastru Judet Alba | directory |

"Lipsesc: alba" on #1 and #4.

**Competitor price disclosure (intelligence only — SOP 0.2 blocks ours):**
- brig.ro / Albac: "prețurile … pornesc de la **240 RON**"
- brig.ro / Cugir: "tarifele … se situează în gama **250-1.668 RON**"
- licitatia.ro: a public tender "MASURATORI CADASTRALE", Alba, "valoare estimata: 30.630 RON"

### Related searches
Stabilirea limitelor de proprietate · Delimitare proprietate · Suprapunere titluri de proprietate ·
Delimitare teren intravilan · Anulare titlu de proprietate suprapunere · Proces verbal de
delimitare a terenului · Probleme cadastru · Teren null

### PAA
None.

### OUR POSITION — served vs correct
| | |
|---|---|
| Rank | **#3** |
| servedPage | `docs/servicii/trasare-teren/alba/ocolis.html` — Ocoliș, **aprox. 34 km de Aiud** |
| correctPage | **DOES NOT EXIST** — service×county hub `docs/servicii/trasare-teren/alba/index.html` |
| ROUTING DEFECT | **YES** — county query answered by a commune leaf. |

⚠️ **The Google snippet for our #3 result is our own price range**, verbatim:
> "Preț orientativ: **500 – 1.500 lei**, orientativ, în funcție de numărul de puncte și distanță.
> Prețurile afișate sunt orientative; costul exact depinde de teren, …"

Verified in the repo: this string is live on `trasare-teren/alba/ocolis.html`, and **316 pages
across the three services in this file contain "lei"**. Recorded as an observation for the chair —
SOP 0.2 forbids *proposing* price display; it does not by itself authorise removing text the CEO
already approved. **Escalated, not actioned.**

### Aggregator share
**7/9** non-surveyor (2 brig.ro, cadastru24 blog, necesit, olx, licitatia, birou-cadastru).
Surveyor cohort = **2**: expertcadastru.ro + ours.

---

## Cross-query summary — `trasare-teren`

| Query | Tier | Map pack | Our rank | Page Google served | Correct page | Aggregator |
|---|---|---|---|---|---|---|
| trasare teren alba | county | none | **#2**, #9 | Mogoș (44 km), Rimetea (24 km) | county hub — **missing** | 5/9 |
| trasare teren alba iulia | city | none | **#3** | **intabulare-casă/construcție Întregalde** (32 km) | trasare-teren/alba/alba-iulia — exists | 8/9 |
| trasare teren aiud | town | none | **#2, #4, #8** | intabulare-teren Aiud · Lopadea Nouă (11 km) · Albac (79 km) | trasare-teren/alba/aiud — exists | 6/9 |
| trasare limite proprietate alba | county | none | **#3** | Ocoliș (34 km) | county hub — **missing** | 7/9 |

**Zero map packs across all four `trasare` queries** — proximity is not a factor here, so the Aiud
office location costs us nothing. These are pure-organic, winnable queries.

**We rank on 4 of 4 and serve the correct page 0 of 4 times.**
