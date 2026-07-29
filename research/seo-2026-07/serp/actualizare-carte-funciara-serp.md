# SERP captures — `actualizare-carte-funciara`

**Captured 2026-07-29 · Capture agent 3 of 4 · logged-in Chrome, dedicated tab**
**Endpoint:** `https://www.google.com/search?q=<q>&hl=ro&gl=ro&num=10` · geo resolved by Google to Alba
**CAPTCHA:** none encountered. **PAA:** none on any of the 4 queries.

SOP Step 1 + Step 2 only. Map pack and organic recorded separately.
Distances quoted for our own served pages are **read out of the built HTML**, not estimated.

**Inventory note (verified in repo):** `actualizare-carte-funciara` is `tier2Available: false` —
**92 locality pages total**: alba 78, cluj 5, mureș 4, sibiu 2, hunedoara 3. Alba is complete.
No service×county hub exists (`docs/servicii/actualizare-carte-funciara/alba/index.html` absent).

---

## acf-q1 — `actualizare carte funciara alba`
`service: actualizare-carte-funciara · tier: county · locality: null · intent: transactional`

### Map pack
**NONE.**

### Organic (9 results)

| # | Domain | Title | pageType |
|---|---|---|---|
| 1 | efunciara.ro | Actualizare adresă imobil Alba online | directory |
| 2 | cfunciara.ro | Solicitări OCPI Alba ONLINE - Intermediere cereri | directory |
| 3 | ancpi.ro | ANCPI — Agenția Națională de Cadastru și Publicitate Imobiliară | government |
| 4 | **expert-intabulare.ro** | **Actualizare carte funciară în Avram Iancu, jud. Alba** | **surveyor (OURS)** |
| 5 | cadastrumaxim.ro | CADASTRU MAXIM — Birou Topograf Cadastru Intabulare (homepage) | surveyor |
| 6 | firmecadastru.ro | Oficii si birouri de cadastru din judetul Alba | directory |
| 7 | birou-cadastru.com | Intabulare Alba Iulia - Birou Cadastru | directory |
| 8 | efunciara.ro | OCPI Alba – Servicii Cadastrale și Publicitate Imobiliară | directory |
| 9 | facebook.com | OCPI ALBA \| Alba Iulia (pagina oficială) | other |

**Competitor duration claims (intelligence only — SOP 0.2 blocks ours):**
cfunciara.ro publishes a per-operation SLA table: "Actualizare adresă în Cartea Funciară —
**5 zile lucrătoare**"; "Documente cadastrale pentru Certificat de urbanism — **4** [zile]".
Both efunciara.ro and cfunciara.ro sell the *same operation we sell*, as an online intermediation
service, with "fără drumuri la ghișeu" / "fără cont și fără deplasări la OCPI" as the hook.

### Related searches
None rendered.

### PAA
None.

### OUR POSITION — served vs correct
| | |
|---|---|
| Rank | **#4** |
| servedPage | `docs/servicii/actualizare-carte-funciara/alba/avram-iancu.html` — Avram Iancu, **aprox. 94 km de Aiud** — the most distant wrong page captured this session |
| correctPage | **DOES NOT EXIST** — service×county hub. Fallback `docs/zone/alba/index.html` did not rank. |
| ROUTING DEFECT | **YES** — county query answered by an Apuseni commune 94 km from the office. |

Snippet on our #4 is **not** the standard meta template — Google composed it from page body:
> "Actualizare carte funciară în Avram Iancu (Alba). Scrie-ne pe WhatsApp 0741 478 540.
> Autorizat ANCPI. **25+ani experiență**."

Note the missing space in "25+ani experiență" as Google rendered it — worth a repo check by the
implementation stage (not verified as a source defect here).

### Aggregator share
**8/9** non-surveyor (5 directory, 1 government, 1 social, plus firmecadastru/birou-cadastru counted
in the 5). Precisely: directory 5 (efunciara ×2, cfunciara, firmecadastru, birou-cadastru),
government 1, other 1 → **7 non-surveyor + 1 government-adjacent social = 8**.
Surveyor cohort = **2**: cadastrumaxim.ro + ours.

---

## acf-q2 — `actualizare carte funciara alba iulia`
`service: actualizare-carte-funciara · tier: city · locality: alba-iulia · intent: transactional`

### Map pack
**NONE.**

### Organic (9 results)

| # | Domain | Title | pageType |
|---|---|---|---|
| 1 | efunciara.ro | Actualizare adresă imobil Alba Iulia online | directory |
| 2 | ancpi.ro | ANCPI (homepage) — "Lipsesc: iulia" | government |
| 3 | cadastrumaxim.ro | CADASTRU MAXIM (homepage) | surveyor |
| 4 | **expert-intabulare.ro** | **Actualizare carte funciară în Zlatna, jud. Alba** | **surveyor (OURS)** |
| 5 | birou-cadastru.com | Intabulare Alba Iulia - Birou Cadastru | directory |
| 6 | cfunciara.ro | Solicitări BCPI Alba Iulia ONLINE - Intermediere cereri | directory |
| 7 | efunciara.ro | BCPI Alba Iulia – Servicii Cadastrale și Publicitate Imobiliară | directory |
| 8 | judetul-alba.ro (Consiliul Județean Alba) | HOTĂRÂRE privind însușirea documentației de actualizare … (PDF, 6 days old) | government |
| 9 | cfunciara.ro | Extras de Carte Funciară Alba Iulia | directory |

### Related searches
Extras carte funciara · Extras carte funciara gratuit · Ancpi · Ancpi carte funciara ·
Carte funciara online · Ancpi extras carte funciara · Extras de carte funciara online ·
De unde se scoate extras de carte funciara

**All eight are navigational/document-retrieval, none is "find a surveyor".** Same pattern the
earlier capture session flagged (`ocpi alba`, `ocpi alba contact`).

### PAA
None.

### OUR POSITION — served vs correct
| | |
|---|---|
| Rank | **#4** |
| servedPage | `docs/servicii/actualizare-carte-funciara/alba/zlatna.html` — Zlatna, **aprox. 58 km de Aiud** |
| correctPage | `docs/servicii/actualizare-carte-funciara/alba/alba-iulia.html` — **exists, was not served** |
| ROUTING DEFECT | **YES** |

⚠️ **Mechanism hypothesis (new, MEDIUM confidence).** The snippet Google chose for the Zlatna page
opens with: *"Dosarele de carte funciară merg la **BCPI Alba Iulia**. Acte necesare (orientativ)…"*
Zlatna sits in the BCPI Alba Iulia catchment, so the office sentence puts the string
"Alba Iulia" on **every leaf in that catchment**. Google appears to be matching the *office* name,
not the *locality* name. If so, the BCPI-office block is an active driver of wrong-locality
selection for the city query — and it is exactly the office-constant text Team C showed lands in
the overlap residual (facts.md §6, chair ruling D4). One block, two separate harms.
This is correlational; it is a hypothesis for the 2026-08-19 GSC gate, not an established cause.

### Aggregator share
**8/9** non-surveyor (6 directory + 2 government).
Surveyor cohort = **2**: cadastrumaxim.ro + ours.

---

## acf-q3 — `actualizare carte funciara aiud`
`service: actualizare-carte-funciara · tier: town · locality: aiud · intent: transactional`

*(Captured on a re-run: the first attempt returned stale page text from acf-q2. The record below is
from a verified navigation — page title `actualizare carte funciara aiud - Căutare Google`.)*

### Map pack
**NONE.**

### Organic (9 results)

| # | Domain | Title | pageType |
|---|---|---|---|
| 1 | cfunciara.ro | Extras de Carte Funciară Aiud | directory |
| 2 | facebook.com | Birou Cadastru Aiud - Molnar Aurelian-Marian | other *(social — our direct local rival)* |
| 3 | aiud.ro (Primăria Municipiului Aiud) | EXTRAS DE CARTE FUNCIARĂ A. Partea I. (PDF, 11 ian. 2024) | government |
| 4 | **expert-intabulare.ro** | **Actualizare carte funciară în Șugag, jud. Alba** | **surveyor (OURS)** |
| 5 | cf.ro | BCPI Aiud - Extras de Carte Funciară ONLINE — "Lipsesc: actualizare" | directory |
| 6 | cfunciara.ro | Solicitări BCPI Aiud ONLINE - Intermediere cereri | directory |
| 7 | extrase.ro | Extras de carte funciara online în Aiud, Alba | directory |
| 8 | firmecadastru.ro | Oficii si birouri de cadastru din judetul Alba (BCPI Aiud, Str. Cuza Vodă 14) — "Lipsesc: actualizare" | directory |
| 9 | ancpi.ro | ANCPI (homepage) | government |

The Molnar Facebook page at **#2** advertises the exact service list we sell:
"Cadastru ✓ Intabulari ✓ Dezmembrări și alipiri ✓ Trasări in teren ✓ **Actualizări Carte Funciară**".

### Related searches
None rendered.

### PAA
None.

### OUR POSITION — served vs correct
| | |
|---|---|
| Rank | **#4** |
| servedPage | `docs/servicii/actualizare-carte-funciara/alba/sugag.html` — Șugag, **aprox. 81 km de Aiud**, a mountain commune at the opposite end of the county |
| correctPage | `docs/servicii/actualizare-carte-funciara/alba/aiud.html` — **exists, was not served** |
| ROUTING DEFECT | **YES — on our own home town.** |

⚠️ **The snippet Google chose is our price answer**, verbatim:
> "Cât costă actualizarea cărții funciare? Depinde de operațiune: orientativ **600 – 1.800 lei**
> plus tarifele ANCPI. Trimiteți-ne extrasul CF și o descriere a …"

Same observation as `tras-q4`: our live pages disclose prices and Google is choosing that text as
the snippet on the home-town query. **Escalated to the chair, not actioned** (SOP 0.2 governs what
we *propose*, and the existing text predates this research).

### Aggregator share
**9/9 non-surveyor** — 5 directory, 2 government, 1 social, and our own page is the only surveyor
result. Surveyor cohort = **1 (ours)**. **The only local competitor present reaches this SERP
through Facebook, not through a website.**

---

## acf-q4 — `rectificare suprafata carte funciara alba`
`service: actualizare-carte-funciara · tier: county · locality: null · intent: transactional (seed) — RE-TAG TO informational`

### Map pack
**NONE.**

### Organic (9 results)

| # | Domain | Title | pageType |
|---|---|---|---|
| 1 | emol.ro | Alba Iulia — Hotărârea Consiliului Local, registru HCL | other *(document aggregator)* |
| 2 | contractorii.ro | Modifici suprafata carte funciara? Ghid pas cu pas (3 days old) | blog |
| 3 | deaconu.legal | Rectificare Carte Funciară. Constatarea suprafeței reale… (5 mar. 2025) | blog *(law firm)* |
| 4 | expertcadastru.ro (Top Survey S.R.L.) | Cadastru modificare limite si suprafata | surveyor |
| 5 | avocatnet.ro | Modificare CF, rectificare (forum, 8 aug. 2022) | other |
| 6 | lege5.ro | Rectificarea suprafeței terenului înscrisă în cartea funciară | other *(legal database)* |
| 7 | firmecadastru.ro | Actele necesare pentru actualizare/rectificare | directory |
| 8 | primariasebes.ro | HCL-111 judeţul alba municipiul sebeş (PDF, 9 pages) | government |
| 9 | cf.ro | OCPI Alba - Extras de Carte Funciară ONLINE | directory |

"Lipsesc: alba" on #2, #3, #4, #5, #6 — **five of nine results ignore the county term entirely.**

### Related searches
Rectificare suprafata teren intravilan · Marire suprafata teren 15 · Acte necesare rectificare carte
funciara · Inadmisibilitate rectificare carte funciara · Actiune rectificare carte funciara model ·
Rectificare carte funciara notar · Rectificare cf suprafata mai mare · Taxa rectificare carte funciara

### PAA
None.

### OUR POSITION
**WE DO NOT APPEAR IN THE TOP 10. Stated explicitly: absent.**
- correctPage would be the missing service×county hub, or a `/ghid/` article.
- ROUTING DEFECT: n/a (no result to route).

### Aggregator share
**8/9** non-surveyor (2 directory, 1 government, 3 other, 2 blog).
Surveyor cohort = **1**: expertcadastru.ro.

### Query-level note — intent re-tag
Seeded as `transactional`; the captured SERP is **legal/procedural informational**: a law firm, a
legal database, a lawyer forum, two council decisions and one how-to guide. The related searches are
all procedure and paperwork ("acțiune … model", "inadmisibilitate", "taxa", "notar"). Under SOP §2
("only `intent:transactional` proceeds past step 4") this query should be **re-tagged
`informational`** and handed to the `/ghid/` lane (chair ruling D6's article vehicle), not to a
service page. Recording it so no one spends a flagship on it.

---

## Cross-query summary — `actualizare-carte-funciara`

| Query | Tier | Map pack | Our rank | Page Google served | Correct page | Aggregator |
|---|---|---|---|---|---|---|
| actualizare carte funciara alba | county | none | **#4** | Avram Iancu (**94 km**) | county hub — **missing** | 8/9 |
| actualizare carte funciara alba iulia | city | none | **#4** | Zlatna (**58 km**) | acf/alba/alba-iulia — exists | 8/9 |
| actualizare carte funciara aiud | town | none | **#4** | Șugag (**81 km**) | acf/alba/aiud — exists | 9/9 |
| rectificare suprafata carte funciara alba | county | none | **absent** | — | — | 8/9 |

**Three #4s, three wrong pages, and the three served localities are 94 / 58 / 81 km from the
office** — the routing is not merely wrong, it is anti-correlated with proximity.

**Aggregator share 8–9 of 9 on every query.** This vertical's organic top 10 is owned by
carte-funciară intermediation portals (efunciara, cfunciara, cf.ro, extrase.ro) plus ANCPI itself.
Only **one** competitor surveyor site (cadastrumaxim.ro) appears at all, and never above #3.
Per SOP §2 this is the profile of a query set **winnable with a genuine service page**.
