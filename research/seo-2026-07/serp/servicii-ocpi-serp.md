# SERP captures — `servicii-ocpi`

**Captured 2026-07-29 · Capture Agent 4 · logged-in Chrome, own tab, no CAPTCHA.**
URL pattern: `google.com/search?q=<q>&hl=ro&gl=ro&num=10` (`&pws=0` added from ocpi-q3 onward).
Geo resolved by Google to Alba. Method: SOP-serp-research.md Steps 1–2 only.

Map pack and organic are recorded separately and are **never** merged — different ranking systems.

> **Policy note — SOP rule 0.2 changed while these captures were running.** Commits `d2bb726` and
> `3672108` (2026-07-29 16:13) replaced the blanket "never display prices" rule with a narrower
> one. Current binding rule, quoted: hedged **orientative price ranges are ALLOWED and already live
> on 1,526 pages — do not remove them**; what is FORBIDDEN is the **exact ANCPI tariff**, **any
> turnaround or duration claim** about BCPI processing, and **inventing any new price figure** not
> already in `generator/data/services.json`. All "BLOCKED BY POLICY" markers below are written
> against the corrected rule.

---

## STRUCTURAL FACT THAT FRAMES ALL THREE QUERIES

`servicii-ocpi` is `"hubOnly": true` in `generator/data/services.json:925`. Verified:

```
docs/servicii/servicii-ocpi/  →  index.html  ONLY  (1 file, 18,008 bytes)
docs/servicii/servicii-ocpi/alba/  →  does not exist
```

`generator/build.js:181` — `if (s.hubOnly === true) continue; // 4 hub-only services never get locality pages`

**There is no `servicii-ocpi × locality` page anywhere on the site, for any of the 78 Alba
localities or the other four counties.** For every query below, `correctPage` is a page that has
never been built. This is not a routing defect (Google serving the wrong page) — it is an
inventory absence.

The single hub page also has **0 `<details>` FAQ blocks and no FAQPage schema**, against 5 FAQ
blocks on an ordinary leaf page.

---

## ocpi-q1 — `extras carte funciara alba`
*(tier: county · locality: null · intent: transactional)*

### Map pack
**NONE.**

### Organic top 10
Google returned **9** distinct organic results under `num=10`.

| # | Domain | URL (as displayed) | Title | pageType |
|---|---|---|---|---|
| 1 | cfunciara.ro | `www.cfunciara.ro › … › Extras de Carte Funciară` | Extras de Carte Funciară Alba Iulia — cfunciara.ro | **marketplace** |
| 2 | ancpi.ro | `www.ancpi.ro` | ANCPI - Agentia Nationala de Cadastru si Publicitate Imobiliara | **government** |
| 3 | extras-online.ro | `www.extras-online.ro › carte-funciara-alba-iulia` | 49 RON - Extras Carte Funciară Alba Iulia Online | **marketplace** |
| 4 | efunciara.ro | `www.efunciara.ro › ocpi-alba` | Extras Carte Funciară Online \| 49 Lei \| Livrare 20 Min 24/7 - Alba | **marketplace** |
| 5 | firmecadastru.ro | `firmecadastru.ro › oficiu-cadastru › alba` | Oficii si birouri de cadastru din judetul Alba | **directory** |
| 6 | cf.ro | `cf.ro › ocpi › alba` | Servicii OCPI Alba-Iulia - Cf.ro | **marketplace** |
| 7 | eghiseul.ro | `eghiseul.ro › Extras Carte Funciară` | Extras Carte Funciară Online Alba — 89 RON, Fără Drum la OCPI | **marketplace** |
| 8 | alba24.ro | `alba24.ro › extras-carte-funciara-2025-proprietar…` | Extras carte funciară 2025: proprietarii pot obține documentul gratuit, online, din 2 iunie (1 iun. 2025) | **blog** |
| 9 | ancpi.ro | `www.ancpi.ro › ocpi › category › ocpi` | OCPI Alba | **government** |

**Snippets of note.** #3 "completați formularul de pe site … efectuați plata". #4 "Obține Extrasul
de Carte Funciară în 20 min! Preț fix 49 Lei, livrare automată Non-Stop (24/7). Fără taxe de
urgență sau costuri ascunse." #7 "89 RON, taxe incluse, livrare pe email în câteva minute."

### Aggregator share
**marketplace + directory = 6 / 9.** Government 2/9. Blog 1/9.
**Surveyor cohort: 0 / 9.** Step 3 shortfall — fewer than 3 surveyor results exist; do not pad.

### Related searches ("Alții caută și")
Extras carte funciara gratuit · Extras cf online gratuit · Ancpi extras carte funciara ·
Extras de carte funciara online · Ancpi carte funciara · Extras cf online 20 lei ·
De unde se scoate extras de carte funciara · Ancpi extras cf online

### PAA
**None.** (Consistent with all 10 prior captures.)

### Our position
**expert-intabulare.ro does not appear in the top 10.** Not at any rank, with any page.
- `servedPage`: n/a
- `correctPage`: county-level intent → `docs/zone/alba/index.html` or a `servicii-ocpi × alba`
  hub. The service×county hub does not exist (chair W1 would create it).

### Competitor intelligence — POLICY-RELEVANT
Prices and turnaround are on the face of the SERP for 4 of 9 results: **49 RON / 89 RON**,
**15 min / 20 min / "câteva minute"**, "Fără taxe de urgență". Recorded as intelligence about what
the customer has already been told.

Against the corrected rule 0.2:
- **Turnaround ("15 minute", "20 min", "livrare în câteva minute") — BLOCKED BY POLICY.** These are
  duration claims about processing we do not control. Do not propose matching them.
- **The 49/89 RON figures — BLOCKED as *new* figures.** `servicii-ocpi` carries
  `priceRange: "de la 100 lei per serviciu, plus tarifele ANCPI"` in `services.json`; that hedged
  range is allowed and already live. Importing a competitor's 49 RON would be inventing a new price
  figure, which rule 0.2 forbids. The existing range stays as-is.
- **"plus tarifele ANCPI" is correct as worded** — naming the tariff exists without stating its
  amount. Quoting an exact ANCPI tariff would be forbidden.

Note the strongest related search is **"Extras carte funciara gratuit"** plus alba24.ro at #8
reporting that owners can obtain the document **free** online. A meaningful slice of this demand is
not commercial at all.

---

## ocpi-q2 — `extras carte funciara alba iulia`
*(tier: city · locality: alba-iulia · intent: transactional)*

### Map pack
**NONE.** Captured twice (once without `pws=0`, once with); no local pack either time.

### Organic top 10
9 distinct results.

| # | Domain | URL (as displayed) | Title | pageType |
|---|---|---|---|---|
| 1 | cfunciara.ro | `www.cfunciara.ro › … › Extras de Carte Funciară` | Extras de Carte Funciară Alba Iulia | **marketplace** |
| 2 | extras-online.ro | `www.extras-online.ro › carte-funciara-alba-iulia` | 49 RON - Extras Carte Funciară Alba Iulia Online | **marketplace** |
| 3 | ancpi.ro | `www.ancpi.ro` | ANCPI (Google flags *"Lipsesc: iulia"*) | **government** |
| 4 | efunciara.ro | `www.efunciara.ro › oficii › bcpi-alba-iulia-44` | BCPI Alba Iulia – Servicii Cadastrale și Publicitate… | **marketplace** |
| 5 | firmecadastru.ro | `firmecadastru.ro › oficiu-cadastru › alba` | Oficii si birouri de cadastru din judetul Alba | **directory** |
| 6 | cf.ro | `cf.ro › ocpi › alba` | Servicii OCPI Alba-Iulia | **marketplace** |
| 7 | birou-cadastru.com | `www.birou-cadastru.com › … › Alba Iulia` | Intabulare Alba Iulia - Birou Cadastru | **directory** |
| 8 | alba24.ro | `alba24.ro › extras-carte-funciara-2025-…` | Extras carte funciară 2025 | **blog** |
| 9 | cadastrumaxim.ro | `www.cadastrumaxim.ro` | CADASTRU MAXIM - Birou Topograf Cadastru Intabulare… | **surveyor** |

### Aggregator share
**marketplace + directory = 6 / 9.** Government 1, blog 1.
**Surveyor cohort: 1 / 9** — `cadastrumaxim.ro`, and it ranks with its **homepage**, not a
dedicated extras-CF page. Step 3 shortfall (1 < 3).

The one surveyor that gets in does so by putting *"Extras de Carte Funciara | Extras CF Online |
Servicii Topocadastrale Online"* in its homepage title. That is the only surveyor-cohort signal
available on this query.

### Related searches
Ancpi alba iulia · Extras carte funciara gratuit · Ocpi alba contact · Cadastru alba iulia ·
Oficiul de cadastru și publicitate imobiliară alba fotografii · Ancpi extras carte funciara ·
Extras de carte funciara online · Ocpi alba extras cf online

Four of eight are **navigational to the government office**, matching the F-series finding from
`CAPTURES-2026-07-29.md`.

### PAA
**None.**

### Our position
**expert-intabulare.ro does not appear in the top 10.**
- `servedPage`: n/a
- `correctPage`: `docs/servicii/servicii-ocpi/alba/alba-iulia.html` — **does not exist**
  (`hubOnly: true`).

---

## ocpi-q3 — `extras carte funciara aiud`
*(tier: town · locality: aiud · intent: transactional)*

### Map pack
**NONE.**

### ⚠️ AI OVERVIEW PRESENT — first one observed in this research programme
Google rendered a **"Rezumat generat de AI"** block above the organic results. Across the 10
previously captured SERPs and my other 10, this is the **only** query that produced one.

Its content, verbatim in structure:
- "Poți obține un extras de carte funciară pentru Aiud online prin platforme specializate sau fizic
  de la Biroul de Cadastru."
- **Cited sources:** cfunciara.ro (+2), cf.ro (+2), eFunciara.
- It states the physical route: *"Biroul de Cadastru și Publicitate Imobiliară (BCPI) Aiud, aflat
  pe Str. Cuza Vodă, nr. 14, județul Alba."*
- It ends with two follow-up questions ("Ai nevoie de document online sau vrei să mergi la
  ghișeu?").

**This matters more than any organic position on this query.** The BCPI Aiud address the AI
Overview quotes is the same address our generator already holds
(`generator/data/localities/alba.json` → aiud → `ocpiOffice: { name: "BCPI Aiud", address: "Str.
Cuza Vodă nr. 14, Aiud" }`). We have the exact fact the answer engine is assembling, on 78
localities, and we are not among the three cited sources.

### Organic top 10
9 distinct results (the AI Overview sits between result 1 and the rest).

| # | Domain | URL (as displayed) | Title | pageType |
|---|---|---|---|---|
| 1 | cfunciara.ro | `www.cfunciara.ro › … › Extras de Carte Funciară` | Extras de Carte Funciară Aiud | **marketplace** |
| 2 | aiud.ro | `www.aiud.ro › pdfs › alte_documente › CF…` (PDF, 12 pagini, 11 ian. 2024) | EXTRAS DE CARTE FUNCIARĂ A. Partea I. Descrierea… | **government** |
| 3 | cf.ro | `cf.ro › comanda-extras-de-carte-funciara › aiud` | BCPI Aiud - Cf.ro - Extras de Carte Funciară ONLINE | **marketplace** |
| 4 | firmecadastru.ro | `firmecadastru.ro › oficiu-cadastru › alba` | Oficii si birouri de cadastru din judetul Alba | **directory** |
| 5 | efunciara.ro | `www.efunciara.ro › bcpi-aiud` | Extras Carte Funciară Online \| 49 Lei \| Livrare 20 Min 24/7 - Aiud | **marketplace** |
| 6 | funciara.com | `funciara.com › Extras Carte Funciară › Alba` | Extras Carte Funciară Aiud, Alba \| Online | **marketplace** |
| 7 | cfunciara.ro | `www.cfunciara.ro › bcpi › aiud` | Solicitări BCPI Aiud ONLINE - Intermediere cereri | **marketplace** |
| 8 | extrasonline.ro | `extrasonline.ro › bcpi › aiud` | Servicii BCPI Aiud - Extras de Carte Funciară | **marketplace** |
| 9 | extrase.ro | `www.extrase.ro › extras-carte-funciara-in-aiud-alba` | Extras de carte funciara online în Aiud, Alba | **marketplace** |

### Aggregator share
**marketplace + directory = 8 / 9** — the highest aggregator share of all 11 queries I captured.
Government 1/9. **Surveyor cohort: 0 / 9.** Step 3 shortfall.

**Seven of the nine have a URL segment literally naming Aiud or BCPI Aiud** (`/aiud`, `/bcpi-aiud`,
`/bcpi/aiud`, `/extras-carte-funciara-in-aiud-alba`). The winning pattern on this vertical is a
per-BCPI-office landing page. We have per-locality pages for 8 other services and **zero** for this
one.

### Related searches
None rendered.

### PAA
**None.**

### Our position
**expert-intabulare.ro does not appear in the top 10** — on our home town, on the query type where
our map pack is already #1 for `topograf aiud` and `cadastru si intabulare Aiud`.
- `servedPage`: n/a
- `correctPage`: `docs/servicii/servicii-ocpi/alba/aiud.html` — **does not exist**.

### Competitor intelligence — POLICY-RELEVANT
cfunciara.ro publishes a turnaround table on its BCPI Aiud page, visible in the snippet:
*"Extras de Carte Funciară 15 minute ; Extras de Carte Funciară după adresă 6 ore ; Extras de Plan
Cadastral pe Ortofotoplan 15 minute"*. efunciara.ro: 49 Lei / 20 min / 24 7.

**The entire turnaround table is BLOCKED BY POLICY (ruling 0.2 — "any turnaround or duration
claim"). Do not propose matching it in any form.** The 49 Lei figure is likewise blocked as a *new*
price figure not in `services.json`. Our existing hedged range stays.

---

## Cross-query summary — `servicii-ocpi`

| Query | Map pack | Aggregator share | Surveyor cohort | Our rank | Page served |
|---|---|---|---|---|---|
| ocpi-q1 `extras carte funciara alba` | NONE | 6/9 | 0 | absent | — |
| ocpi-q2 `extras carte funciara alba iulia` | NONE | 6/9 | 1 (homepage) | absent | — |
| ocpi-q3 `extras carte funciara aiud` | NONE | 8/9 | 0 | absent | — |

**Observations for the analysis stage (not conclusions — Step 5/6 is not my remit):**

1. **Zero map pack on all three.** Proximity is not a factor on this vertical; per
   `CAPTURES-2026-07-29.md` F5 that makes it a pure-organic game where our Aiud-vs-Alba-Iulia
   geography costs nothing.
2. **The vertical is owned by document-delivery marketplaces, not surveyors.** 20 of 27 organic
   slots across the three queries are extras-CF resellers. A surveyor service page is a different
   product from what ranks. Whether we can or should compete here is a Step 5 judgement, not a
   capture finding.
3. **The winning URL shape is per-BCPI-office**, not per-locality: `/bcpi/aiud`, `/bcpi-aiud`,
   `/ocpi/alba`. The generator already carries `ocpiOffice` on every locality record.
4. **An AI Overview has appeared on the town-tier query only** — and it cites the three
   marketplaces while quoting a BCPI address we already hold as structured data.
