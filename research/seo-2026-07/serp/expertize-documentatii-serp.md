# SERP captures — `expertize-documentatii`

**Captured 2026-07-29 · Capture Agent 4 · logged-in Chrome, own tab, no CAPTCHA.**
URL pattern: `google.com/search?q=<q>&hl=ro&gl=ro&num=10` (`&pws=0` from exp-q1 onward).
Geo resolved by Google to Alba. Method: SOP-serp-research.md Steps 1–2 only.

Map pack and organic are recorded separately and are **never** merged.

> **Policy note — SOP rule 0.2 changed while these captures were running.** Commits `d2bb726` and
> `3672108` (2026-07-29 16:13) replaced the blanket "never display prices" rule with a narrower
> one. Current binding rule, quoted: hedged **orientative price ranges are ALLOWED and already live
> on 1,526 pages — do not remove them**; what is FORBIDDEN is the **exact ANCPI tariff**, **any
> turnaround or duration claim**, and **inventing any new price figure** not already in
> `generator/data/services.json`. All markers below are written against the corrected rule.

---

## STRUCTURAL FACT THAT FRAMES ALL FOUR QUERIES

`expertize-documentatii` is `"hubOnly": true` (`generator/data/services.json:1078`). Verified:

```
docs/servicii/expertize-documentatii/  →  index.html  ONLY  (1 file, 18,221 bytes)
docs/servicii/expertize-documentatii/alba/  →  does not exist
```

`generator/build.js:181` — `if (s.hubOnly === true) continue;`

The hub page has **0 `<details>` FAQ blocks**, no FAQPage schema, and no locality specificity
(13 mentions of "alba", 3 of "aiud", all in the shared NAP/footer frame).

**This matters more here than for my other two services, because on exp-q3 we already rank — twice —
and the page that should hold those positions has never been built.**

---

## exp-q1 — `expertiza topografica alba`
*(tier: county · locality: null · intent: transactional)*

### Map pack
**NONE.**

### Organic top 10
9 distinct results.

| # | Domain | URL (as displayed) | Title | pageType |
|---|---|---|---|---|
| 1 | pdproiectsurveyor.ro | `pdproiectsurveyor.ro` (homepage) | Specialiști Topografie și Cadastru Alba Iulia - P&D Surveyor | **surveyor** |
| 2 | cadastrumaxim.ro | `www.cadastrumaxim.ro` (homepage) | CADASTRU MAXIM - Birou Topograf Cadastru Intabulare… | **surveyor** |
| 3 | gistopocad.3x.ro | `gistopocad.3x.ro` (homepage) | S.C. Gis Topocad S.R.L. Alba Iulia - Topografie, Cadastru | **surveyor** |
| 4 | birou-cadastru.com | `www.birou-cadastru.com › … › Alba Iulia` | Intabulare Alba Iulia - Birou Cadastru | **directory** |
| 5 | cadastrumartin.ro | `cadastrumartin.ro` (homepage) | Birou Cadastru Martin – Servicii de topografie intabulare si… | **surveyor** |
| 6 | necesit.ro | `www.necesit.ro › … › Alba Iulia` | Top 20 firme pentru cadastru și intabulare Alba Iulia, 2026 — *"Lipsesc: expertiza"* | **directory** |
| 7 | intabulari24.ro | `www.intabulari24.ro › experti › alba › alba-iulia` | Top 10 experti in Alba Iulia — *"Lipsesc: topografica"* | **directory** |
| 8 | catalogafaceri.ro | `www.catalogafaceri.ro › list › getCountryBusiness…` | Firme din categoria: Topografie - Geodezie - Cadastru (140 firme) | **directory** |
| 9 | cadastru24.ro | `www.cadastru24.ro › Alba › Vale-in-Jos` | Top 10 experti topografi pentru Ridicare Topografica in Alba | **directory** |

### Aggregator share
**directory = 5 / 9.** **Surveyor cohort: 4 / 9** — meets the Step 3 minimum of 3.

**Critical qualifier for whoever runs Step 3:** all four surveyors rank with their **homepage**.
Not one of them has a dedicated *expertiză topografică* service page. Consensus computed over this
cohort will describe four general-purpose cadastre homepages, not four expertise pages. State that
shortfall explicitly rather than treating the homepages as models for a service page.

Only #3's snippet contains the word *expert* in a service sense: "Expert autorizat lucrari
topografice". #5 leads on tenure: "Peste 9 ani de experienta".

### Related searches
Topografi autorizati alba iulia · Cadastru alba iulia · Ocpi alba · Cadastru alba iulia program

All four are generic-cadastre or navigational-to-OCPI. **Google's own related set does not contain
a single expertise-specific refinement**, which is a signal about the size of this query's demand
pool.

### PAA
**None.**

### Our position
**expert-intabulare.ro does not appear in the top 10.**
- `servedPage`: n/a
- `correctPage`: county intent → `docs/zone/alba/index.html` or an `expertize-documentatii × alba`
  hub (does not exist; chair W1 would create it).

### Competitor intelligence
No prices and no durations visible on the SERP face for this query — the only one of my eleven
where that is true. #4 mentions "avantajoase preturi" without a figure. Nothing here is blocked by
CEO ruling 0.2, because nobody is competing on price on this intent.

---

## exp-q2 — `expertiza topografica alba iulia`
*(tier: city · locality: alba-iulia · intent: transactional)*

### Map pack
**NONE.**

### Organic top 10
9 distinct results.

| # | Domain | URL (as displayed) | Title | pageType |
|---|---|---|---|---|
| 1 | pdproiectsurveyor.ro | `pdproiectsurveyor.ro` (homepage) | Specialiști Topografie și Cadastru Alba Iulia - P&D Surveyor | **surveyor** |
| 2 | cadastrumaxim.ro | `www.cadastrumaxim.ro` (homepage) | CADASTRU MAXIM - Birou Topograf Cadastru Intabulare… | **surveyor** |
| 3 | gistopocad.3x.ro | `gistopocad.3x.ro` (homepage) | S.C. Gis Topocad S.R.L. Alba Iulia - Topografie, Cadastru | **surveyor** |
| 4 | birou-cadastru.com | `www.birou-cadastru.com › … › Alba Iulia` | Intabulare Alba Iulia - Birou Cadastru | **directory** |
| 5 | necesit.ro | `www.necesit.ro › providers › agachi-gheorghe-1` | Agachi Gheorghe \| Topograf, Firme topografie, Intabulare… | **directory** (provider profile) |
| 6 | intabulari24.ro | `www.intabulari24.ro › experti › alba › alba-iulia` | Top 10 experti in Alba Iulia — *"Lipsesc: topografica"* | **directory** |
| 7 | olx.ro | `www.olx.ro › Alba` | topografie Alba Iulia - Anunturi gratuite | **marketplace** |
| 8 | catalogafaceri.ro | `www.catalogafaceri.ro › list › getCountryBusiness…` | Firme din categoria: Topografie - Geodezie - Cadastru | **directory** |
| 9 | alba-iulia.cylex.ro | `alba-iulia.cylex.ro › ridicari+topografice` | Ridicari topografice în Alba Iulia - Cylex | **directory** |

### Aggregator share
**directory + marketplace = 6 / 9.** **Surveyor cohort: 3 / 9** — exactly the Step 3 minimum, and
the same three homepages as exp-q1. No new information versus exp-q1; the city and county SERPs
share their entire surveyor cohort.

Notably #2's snippet on the city query is pure NAP — phone numbers, emails, "Sediu: Loc. Alba
Iulia" — rather than service copy. Google is surfacing contact data as the answer.

### Related searches
Cadastru alba iulia · Topografi autorizati alba iulia · Cadastru alba iulia program · Ocpi alba ·
Oficiul de cadastru și publicitate imobiliară alba fotografii · Ocpi alba contact

Again zero expertise-specific refinements; four of six are navigational to OCPI.

### PAA
**None.**

### Our position
**expert-intabulare.ro does not appear in the top 10.**
- `servedPage`: n/a
- `correctPage`: `docs/servicii/expertize-documentatii/alba/alba-iulia.html` — **does not exist**.

### Competitor intelligence
No prices, no durations on the SERP face. Nothing blocked by ruling 0.2 on this query.

---

## exp-q3 — `expertiza topografica aiud` ⚠️ WE RANK TWICE, WITH THE WRONG PAGE BOTH TIMES
*(tier: town · locality: aiud · intent: transactional)*

### Map pack
**NONE.**

### Organic top 10
9 distinct results (a "Se gândește" interstitial appeared after #1; no AI Overview text rendered).

| # | Domain | URL (as displayed) | Title | pageType |
|---|---|---|---|---|
| 1 | intabulari24.ro | `www.intabulari24.ro › experti › alba › aiud` | Top 10 experti in Aiud — *"Lipsesc: topografica"* | **directory** |
| 2 | facebook.com | Birou Cadastru Aiud - Molnar Aurelian-Marian (210+ persoane interesate) | "Expert cadastru cu experiență vastă – Ing. Molnar Aurelian-Marian… consultanță gratuită" | **other** (social) |
| 3 | **expert-intabulare.ro** | `expert-intabulare.ro › … › Județul Alba` | **Intabulare teren în Aiud, jud. Alba — Topograf autorizat** | **surveyor (OURS)** |
| 4 | firmecadastru.ro | `firmecadastru.ro › alba › aiud` | Firme cadastru si intabulare din Aiud - judetul Alba — *"Lipsesc: expertiza"* | **directory** |
| 5 | necesit.ro | `www.necesit.ro › providers › fleser-adriana--top…` | **FLEŞER ADRIANA** - Topograf, Intabulare apartament | **directory** (provider profile) |
| 6 | experttehnicjudiciar.com | `www.experttehnicjudiciar.com` | Expertiza Topografica — "Biroul de Expertize Topografice… expertize tehnice judiciare, evaluări tehnice, consultanță juridică" — *"Lipsesc: aiud"* | **surveyor** |
| 7 | facebook.com | Domsa Sergiu Bogdan-Ing.Topograf, Aiud (240+ persoane interesate, 246 likes) | "PFA.Domsa Sergiu Bogdan ofera servicii cadastrale si intabulari" | **other** (social) |
| 8 | intabulari24.ro | `www.intabulari24.ro › experti › ancpi › alba › ai…` | Top 10 Experti cadastru si intabulare in Aiud — *"Lipsesc: topografica"* | **directory** |
| 9 | **expert-intabulare.ro** | `expert-intabulare.ro › … › Județul Alba` | **Plan topografic în Rimetea (Alba)** | **surveyor (OURS)** |

### Aggregator share
**directory = 4 / 9**, `other` (social) = 2 / 9. **Surveyor cohort: 3 / 9 — and two of the three
are ours.** The only third-party surveyor is `experttehnicjudiciar.com`, which Google itself flags
as *"Lipsesc: aiud"* — a national judicial-expertise site with no Aiud presence.

**Step 3 shortfall: exactly one third-party surveyor result exists, and it is not local.** Do not
pad with directories; record the shortfall.

### Related searches
Topografi autorizati aiud · Cadastru aiud · **Fleser aurel**

Brand search again, confirming `CAPTURES-2026-07-29.md` F9.

### PAA
**None.**

### OUR POSITION — the finding
**We hold two of nine organic slots, #3 and #9, and neither is the right page.**

| Slot | URL Google served | Repo path | Service | Locality | Correct? |
|---|---|---|---|---|---|
| **#3** | `expert-intabulare.ro/servicii/intabulare-teren/alba/aiud` | `docs/servicii/intabulare-teren/alba/aiud.html` (28,753 B, exists) | intabulare-teren | **Aiud ✓** | **wrong service** |
| **#9** | `expert-intabulare.ro/servicii/plan-topografic/alba/rimetea` | `docs/servicii/plan-topografic/alba/rimetea.html` (27,561 B, exists) | plan-topografic | **Rimetea ✗** | **wrong service AND wrong locality** |

- `correctPage` for both: `docs/servicii/expertize-documentatii/alba/aiud.html`
  — **DOES NOT EXIST.** `hubOnly: true`, `build.js:181`.
- Rimetea is a **comună** (`generator/data/localities/alba.json`), BCPI Aiud, and the snippet
  itself says "aprox. 24 km de Aiud".

**This is a third failure mode, distinct from the two in `FINDING-cannibalization.md`.** That
document records *wrong locality* (Cut, Doștat, Ohaba, Berghin) and *wrong service, right town*
(casă/construcție for an apartament query) — in both cases **the correct page exists and Google
declined to serve it.** Here the correct page has never been built, so Google is substituting from
a neighbouring service. Call it **substitution-for-absence**. The remedy is different: W1 hubs and
`serviceNotes` cannot fix it, because there is nothing to differentiate.

### Two observations from our own snippets — one is a CACHE artefact, not a defect
1. **#3's Google snippet reads: "Topograf autorizat ANCPI, aprox. 2 km de Aiud."**
   That is the self-distance defect (facts.md §12.1) — **but it is already fixed in the repo.**
   Verified directly:
   ```
   docs/servicii/intabulare-teren/alba/aiud.html
   <meta name="description" content="Intabulare teren în Aiud: acte, pași, prețuri orientative.
   Topograf autorizat ANCPI, birou chiar în Aiud. Tel. 0741 478 540.">
   ```
   Commit `c61210b` "Fix the self-distance contradiction on the 8 Aiud pages" is in history and the
   meta render site now emits *"birou chiar în Aiud"*. **What Google is showing is a stale cached
   snippet predating the fix.** Do not re-open 12.1 on the strength of this SERP; it is a crawl-lag
   artefact. It does, however, give a free measurement: when this snippet flips to "birou chiar în
   Aiud", we know Google has re-crawled the Aiud leaves — a useful checkpoint ahead of the
   2026-08-19 gate.
2. **#9's snippet reads: "Plan topografic în Rimetea: acte, pași, prețuri orientative… aprox. 24 km
   de Aiud."** — verified current in the repo, not stale. This is chair item W2 (meta description
   rebuild, distance clause dropped above ~25 km) in live form. **24 km sits just under the proposed
   25 km threshold, so W2 as currently specified would keep this clause on the page Google is
   actually serving for an Aiud query.** Worth flagging to whoever implements W2: the threshold is
   measured against the locality's own distance, not against the distance from the searcher, and
   this is the case that shows the difference.

### Competitor intelligence
No prices, no durations on the SERP face. #2 offers "consultanță gratuită". #6 is the only result
positioning on the judicial dimension ("expertize tehnice judiciare, evaluări tehnice, consultanță
juridică"), and it does not target Aiud.

---

## exp-q4 — `granituire teren alba` — INTENT MISCLASSIFIED, RECORD AND RECLASSIFY
*(brief says tier: county · locality: null · intent: transactional)*

### Map pack
**NONE.**

### Organic top 10
9 distinct results.

| # | Domain | URL (as displayed) | Title | pageType |
|---|---|---|---|---|
| 1 | dreptclar.ro | `dreptclar.ro › granituire-vs-revendicare` (4 ian. 2026) | Grănițuire vs. Revendicare - Avocat | **blog** (law firm) |
| 2 | avocatura.com | `www.avocatura.com › … › Civil › Grăniţuire` | Grăniţuire - Decizia 1159/2015 din 07 mai 2015 dată de Judecătoria **ALBA IULIA** (Fond) | **other** (case-law database) |
| 3 | lege5.ro | `lege5.ro › obligatia-de-granituire-codul-civil` | Obligaţia de grăniţuire \| Noul Cod Civil actualizat 2026 — Art. 560 | **government** (legislation) |
| 4 | avoline.ro | `avoline.ro › granituire` | Granituire \| AVOline \| Proprietate — *"Lipsesc: alba"* | **blog** (law firm) |
| 5 | velicu.eu | `velicu.eu › actiunea-in-granituire-codul-civil` (27 iul. 2021) | Granituire Cod Civil si revendicarea \| Model cerere granituire — *"Lipsesc: alba"* | **blog** (law firm) |
| 6 | avocatmateigabriel.ro | `www.avocatmateigabriel.ro › News` (7 nov. 2023) | Grănițuirea. Acțiunea în grănițuire — *"Lipsesc: alba"* | **blog** (law firm) |
| 7 | avocatnet.ro | `www.avocatnet.ro › forum › discutie_473621` (27 feb. 2015) | Ce lege te obliga sa faci granituirea unui teren agricol? | **other** (forum) |
| 8 | avocat-galati.ro | `avocat-galati.ro › granituiri` | Granituire, actiunea in granituire - "Silitra & Asociatii" | **blog** (law firm) |
| 9 | lege5.ro | `lege5.ro › Gratuit › … › granituire-re…` | granituire, revendicare | **government** (legislation/case text) |

### Aggregator share
**directory + marketplace = 0 / 9.** But that number is misleading in isolation: there are
**zero commercial service results of any kind**, and **zero surveyors**.
**Surveyor cohort: 0 / 9. Step 3 cannot run on this query.**

Breakdown: 5 law-firm articles, 2 legislation/case-law databases, 1 legal forum, 1 court decision.

### The finding
**This query is informational and legal, not transactional.** The brief tagged it
`intent: transactional`; the captured SERP says otherwise, and per SOP §2 *"Only
`intent:"transactional"` proceeds past step 4."* **Reclassify exp-q4 as `informational`.**

Supporting evidence:
- Google flags ***"Lipsesc: alba"* on four of nine results** and returns national legal content for
  a geo-modified query — the geo modifier is being substantially ignored. The one Alba-specific hit
  (#2) is a 2015 court decision, not a service.
- The searcher is researching **acțiunea în grănițuire** — a lawsuit — not hiring a surveyor.

### Related searches — all eight, and what they say
Cat costa actiunea de granituire · Actiune in granituire inadmisibila ·
Actiunea in granituire prescriptie · Cat dureaza un proces de granituire ·
**Obiective expertiza granituire** · Actiunea in granituire cod civil ·
Granituire fara revendicare · Actiune in granituire model

- **"Obiective expertiza granituire"** is the one refinement a topographic expert legitimately
  owns — the objectives a court sets for the topographic expertise in a grănițuire case. It is a
  `/ghid/` article intent, not a service-page intent. Flagging it as a lead for the analysis stage,
  not proposing it.
- **"Cat dureaza un proces de granituire"** is **BLOCKED BY POLICY (rule 0.2 — any duration claim)**
  and doubly so: it is the duration of a *court case*, a third party's timetable we cannot know.
- **"Cat costa actiunea de granituire"** is a subtler case. Rule 0.2 as corrected permits our own
  hedged orientative ranges, so a price answer is not blocked *in principle* — but
  `expertize-documentatii` deliberately carries `priceRange: "ofertă după analiza situației —
  fiecare caz este diferit"`, i.e. no figure, and rule 0.2 forbids **inventing a new figure**.
  The searcher is also asking the cost of a *lawsuit* (court fees, lawyer, expertise), not the cost
  of our expertise report. **Answering it would be legal-cost advice we are not positioned to give.
  Leave the existing "ofertă după analiza situației" wording alone.**

### PAA
**None.**

### Our position
**expert-intabulare.ro does not appear in the top 10.**
- `servedPage`: n/a
- `correctPage`: not a service-page intent at all. If anything is targeted here it belongs under
  `/ghid/`, per chair ruling D6's precedent for the PNCCF article.

---

## Cross-query summary — `expertize-documentatii`

| Query | Map pack | Aggregator share | Surveyor cohort | Our rank | Page Google served |
|---|---|---|---|---|---|
| exp-q1 `expertiza topografica alba` | NONE | 5/9 | 4/9 (all homepages) | absent | — |
| exp-q2 `expertiza topografica alba iulia` | NONE | 6/9 | 3/9 (same homepages) | absent | — |
| exp-q3 `expertiza topografica aiud` | NONE | 4/9 + 2 social | 3/9, **2 of them ours** | **#3 and #9** | **intabulare-teren/alba/aiud** and **plan-topografic/alba/rimetea** |
| exp-q4 `granituire teren alba` | NONE | 0/9 (no commercial results at all) | **0/9** | absent | — |

**Observations for the analysis stage (Step 5/6 is not my remit):**

1. **exp-q3 is a new failure mode: substitution-for-absence.** We rank #3 and #9 on our home town
   for a service whose locality pages have never been built. Unlike every case in
   `FINDING-cannibalization.md`, the correct page does not exist, so neither the W1 hub nor
   `serviceNotes` addresses it. The chair's premise "routing before content" holds; the remedy set
   does not cover this case.
2. **No competitor anywhere in Alba has an `expertiză topografică` service page.** All seven
   surveyor slots across exp-q1/q2 are general homepages, and the one dedicated judicial-expertise
   site (`experttehnicjudiciar.com`) has no local presence. This is the least-defended intent I
   captured — and it is one of the four services the site currently declines to build pages for.
3. **Zero price and zero duration signalling on exp-q1/q2/q3.** Uniquely among my eleven queries,
   rule 0.2 costs us nothing here — nobody is competing on price or speed on this intent, so the
   service's existing "ofertă după analiza situației" positioning is competitively fine as-is.
4. **exp-q4 must be reclassified `informational`** and dropped from the transactional set per
   SOP §2. The one salvageable thread ("obiective expertiza granituire") is `/ghid/` material; its
   two strongest sibling refinements are the duration of a lawsuit (blocked) and the cost of a
   lawsuit (not our cost to quote).
5. **On exp-q3, one of our two snippets is a stale cache, not a defect.** "aprox. 2 km de Aiud" was
   already fixed by commit `c61210b` and the repo now emits "birou chiar în Aiud" — Google has not
   re-crawled. The Rimetea "aprox. 24 km de Aiud" snippet *is* current, and sits just under the
   ~25 km threshold chair item W2 proposes, so W2 as specified would leave it in place.
