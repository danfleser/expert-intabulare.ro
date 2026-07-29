# SERP captures — `certificat-energetic`

**Captured 2026-07-29 · Capture Agent 4 · logged-in Chrome, own tab, no CAPTCHA.**
URL pattern: `google.com/search?q=<q>&hl=ro&gl=ro&num=10` (`&pws=0` from cen-q3 onward).
Geo resolved by Google to Alba. Method: SOP-serp-research.md Steps 1–2 only.

Map pack and organic are recorded separately and are **never** merged.

> **Policy note — SOP rule 0.2 changed while these captures were running.** Commits `d2bb726` and
> `3672108` (2026-07-29 16:13) replaced the blanket "never display prices" rule with a narrower
> one. Current binding rule, quoted: hedged **orientative price ranges are ALLOWED and already live
> on 1,526 pages — do not remove them**; what is FORBIDDEN is the **exact ANCPI tariff**, **any
> turnaround or duration claim** about third-party processing, and **inventing any new price
> figure** not already in `generator/data/services.json`. All "BLOCKED BY POLICY" markers below are
> written against the corrected rule.

---

## STRUCTURAL FACTS THAT FRAME ALL FOUR QUERIES

### 1. No locality pages exist
`certificat-energetic` is `"hubOnly": true` (`generator/data/services.json:978`). Verified:

```
docs/servicii/certificat-energetic/  →  index.html  ONLY  (1 file, 17,712 bytes)
docs/servicii/certificat-energetic/alba/  →  does not exist
```

For every query below, `correctPage` is a page that has never been built. The single hub page has
**0 `<details>` FAQ blocks** and no FAQPage schema.

### 2. Cohort definition — read before computing consensus
The SOP `surveyor` class does not map cleanly onto this vertical. A certificat de performanță
energetică is issued by an **auditor energetic atestat**, not by an ANCPI-authorized topograf.
Below I classify the direct service providers (energy auditors / audit cabinets) as `surveyor`
for the purposes of the SOP's "provider cohort vs aggregator" split, and I flag the credential
distinction explicitly wherever it matters. **Every single provider that ranks on these four
queries presents itself as an energy auditor, never as a topograf.**

Our hub page's `<title>` is *"Certificat energetic — Topograf autorizat ANCPI"*. No ranking
competitor pairs those two credentials. This is a capture observation, not a recommendation.

---

## cen-q1 — `certificat energetic alba`
*(tier: county · locality: null · intent: transactional)*

### Map pack — PRESENT (3 entries)
This is the **only** one of my 11 queries with a local pack, and the only `certificat-energetic`
query with one. Recorded verbatim; per SOP §3 Step 1 no page change can move these positions.

| # | Business name | Rating | Reviews | Category | Address / detail | Phone | Hours |
|---|---|---|---|---|---|---|---|
| 1 | **Certificat energetic Alba Iulia** | 5,0 | **16** | Birou de audit | Alba Iulia | 0744 395 315 | Deschis · Închide la 21 |
| 2 | **Certificat energetic Alba** | — | **Nicio recenzie** | Consultant în inginerie | "Peste 7 ani de activitate" | 0736 620 620 | Deschis · Închide la 20 |
| 3 | **Certificat de performanta energetica** | — | **Nicio recenzie** | Sediul social | Alba Iulia | 0741 357 252 | Închis · Deschide joi la 08:30 |

Three things worth flagging:

- **All three GBP names are exact-match keyword strings**, not company or personal names
  ("Certificat energetic Alba Iulia", "Certificat energetic Alba", "Certificat de performanta
  energetica"). Our own profile is a real trading name.
- **Two of the three hold a map-pack slot with zero reviews.** Per `CAPTURES-2026-07-29.md` F3 our
  profile has 3 reviews at 5,0 — which on this vertical's review floor is not the constraint. The
  constraint is that our GBP category is a cadastre/topography category, not "Birou de audit".
  **That is a Google Business Profile question, not a page question** (chair ruling D11).
- Entry 3's phone **0741 357 252** is the same number in the #1 organic title
  ("Certificat Energetic de la 120 lei **0741357252**", certificatenergetic.net). One operator
  holds both the top organic slot and a map-pack slot.

### Organic top 10

| # | Domain | URL (as displayed) | Title | pageType |
|---|---|---|---|---|
| 1 | certificatenergetic.net | `www.certificatenergetic.net › alba` | Certificat Energetic de la 120 lei 0741357252 - Alba-Iulia | **surveyor** (auditor) |
| 2 | evaluari24.ro | `www.evaluari24.ro › certificat-energetic › alba-i…` | Top 10 auditori energetici in Alba Iulia \| Obtine oferte gratuit — 5,0(504) | **directory** |
| 3 | certificataudit.ro | `certificataudit.ro › certificat-energetic › certificat…` | Certificat Energetic Alba Iulia - Certificat Audit | **surveyor** (auditor) |
| 4 | certific.ro | `www.certific.ro › certificat-energetic-alba-iulia` | Certificat Energetic Alba Iulia | **surveyor** (auditor) |
| 5 | certificat-energetic.ro | `certificat-energetic.ro › alba-iulia` | Certificat Energetic Alba Iulia | **surveyor** (auditor) |
| 6 | ienergetic.ro | `ienergetic.ro` (26 aug. 2022) | Certificatul energetic | **surveyor** (auditor, homepage/blog hybrid) |
| 7 | cabinetprivat.com | `www.cabinetprivat.com › audit-energetic › alba-i…` | Audit Energetic Alba Iulia | **surveyor** (auditor) |
| 8 | certificat-energetic.net | `www.certificat-energetic.net › alba-iulia` | Certificat energetic Alba Iulia | **surveyor** (auditor) |
| 9 | daibau.ro | `www.daibau.ro › … › Certificat energetic › Blaj` | Certificat energetic, Blaj - Top 15 executanți — 9,2/10(13) | **directory** |
| 10 | sites.google.com | `sites.google.com › site › home › cum-se-obtine-c…` | Cum puteți obține Certificatul energetic in Cluj | **other** |

### Aggregator share
**directory = 2 / 10** (evaluari24.ro, daibau.ro), plus 1 `other`. **Non-provider 3 / 10.**
**Provider cohort: 7 / 10** — by far the *lowest* aggregator share of my 11 queries. Contrast with
`servicii-ocpi` at 6–8 of 9, and with the 6/10 the chair recorded for `cadastru si intabulare
Alba Iulia`.

Structurally this is the most winnable of my eleven queries: the SERP is dominated by genuine
service pages rather than listicles. The counterweight is that six of the seven providers hold
**exact-match domains** (`certificatenergetic.net`, `certificataudit.ro`, `certific.ro`,
`certificat-energetic.ro`, `certificat-energetic.net`) — a domain-authority factor no on-page work
touches (SOP §7).

### Related searches
None rendered.

### PAA
**None.**

### Our position
**expert-intabulare.ro does not appear in the top 10.**
- `servedPage`: n/a
- `correctPage`: county intent → `docs/zone/alba/index.html` or a `certificat-energetic × alba`
  hub (does not exist; chair W1 would create it).

### Competitor intelligence — POLICY-RELEVANT
Prices are in the **title tag** of the #1 result: "de la 120 lei". Also on the SERP face:
"doar 250 lei" (#3), "REDUCERE 20%" (#4). Turnaround: "24h-48h" (#3), "48 de ore" (#4).
Every commercial result on this query advertises price or speed or both.

Against the corrected rule 0.2:
- **Turnaround ("24h-48h", "48 de ore") — BLOCKED BY POLICY.** Duration claims, forbidden outright.
- **Price — NOT blocked, and we already comply.** `certificat-energetic` carries
  `priceRange: "150 – 500 lei, orientativ, în funcție de imobil"` in `services.json`, live on the
  hub page. That hedged range is allowed and must not be removed. What *is* blocked is importing a
  competitor's specific figure (120 / 250 / 275 lei) as a new number.

So on the price axis we are not at a disadvantage of policy — we publish a range, as they do. The
disadvantage is that the range sits on a single national hub page with no locality targeting.

---

## cen-q2 — `certificat energetic alba iulia`
*(tier: city · locality: alba-iulia · intent: transactional)*

### Map pack
**NONE.** Captured twice (with and without `pws=0`) — no local pack either time.

**Note the inversion:** the *county* query (cen-q1) has a map pack and the *city* query does not.
That is the reverse of the usual pattern and the reverse of what
`CAPTURES-2026-07-29.md` F4/F5 found for cadastru. It means the proximity disadvantage that costs
us `cadastru si intabulare Alba Iulia` **does not apply here** — this is pure organic.

### Organic top 10

| # | Domain | URL (as displayed) | Title | pageType |
|---|---|---|---|---|
| 1 | certificatenergetic.net | `www.certificatenergetic.net › alba` | Certificat Energetic de la 120 lei 0741357252 - Alba-Iulia | **surveyor** (auditor) |
| 2 | certificataudit.ro | `certificataudit.ro › certificat-energetic › certificat…` | Certificat Energetic Alba Iulia - Certificat Audit | **surveyor** (auditor) |
| 3 | evaluari24.ro | `www.evaluari24.ro › certificat-energetic › alba-i…` | Top 10 auditori energetici in Alba Iulia — 5,0(504) | **directory** |
| 4 | certific.ro | `www.certific.ro › certificat-energetic-alba-iulia` | Certificat Energetic Alba Iulia | **surveyor** (auditor) |
| 5 | certificat-energetic.ro | `certificat-energetic.ro › alba-iulia` | Certificat Energetic Alba Iulia | **surveyor** (auditor) |
| 6 | certificat-energetic.net | `www.certificat-energetic.net › alba-iulia` | Certificat energetic Alba Iulia | **surveyor** (auditor) |
| 7 | cabinetprivat.com | `www.cabinetprivat.com › audit-energetic › alba-i…` | Audit Energetic Alba Iulia | **surveyor** (auditor) |
| 8 | sites.google.com | `sites.google.com › site › home › cum-se-obtine-c…` | Cum puteți obține Certificatul energetic in Cluj | **other** |
| 9 | facebook.com | Certific.ro - Certificat Si Audit Energetic (5 reacții, acum 8 luni) | Obține certificatul energetic în mai puțin de 48h în 3 pași simpli | **other** (social) |
| 10 | daibau.ro | `www.daibau.ro › … › Certificat energetic › Blaj` | Certificat energetic, Blaj - Top 15 executanți — 9,2/10(13) | **directory** |

### Aggregator share
**directory = 2 / 10**, `other` = 2 / 10. **Non-provider 4 / 10. Provider cohort 6 / 10.**

Note #8 is about **Cluj** and #10 is about **Blaj** — Google is padding the Alba Iulia SERP with
off-geo results, which is the classic signal of a thin local supply. Two of ten slots are held by
pages that do not target this city at all.

### Related searches
None rendered.

### PAA
**None.**

### Our position
**expert-intabulare.ro does not appear in the top 10.**
- `servedPage`: n/a
- `correctPage`: `docs/servicii/certificat-energetic/alba/alba-iulia.html` — **does not exist**
  (`hubOnly: true`).

### Competitor intelligence — POLICY-RELEVANT
"de la 120 lei" (title, #1) · "doar 250 lei" + "24h-48h" (#2) · "REDUCERE 20%" + "48 de ore" (#4) ·
"în mai puțin de 48h în 3 pași simpli" (#9).
**All the duration claims are BLOCKED BY POLICY. The price figures are blocked only as *new*
numbers — our existing hedged 150–500 lei range is allowed and already live.**

The only non-price competitive angle visible on the SERP face is #9's **process framing**
("3 pași simpli: 1️⃣ Ne contactezi 2️⃣ Vizionăm clădirea 3️⃣ Primești certificatul"). Process
description is permitted under CEO ruling 0.5 (workflow and capability claims approved) as long as
no duration is attached.

---

## cen-q3 — `certificat energetic aiud`
*(tier: town · locality: aiud · intent: transactional)*

### Map pack
**NONE.**

### Organic top 10
9 distinct results (a "Se gândește" / AI-thinking interstitial appeared between #2 and #3 but
produced no rendered AI Overview text).

| # | Domain | URL (as displayed) | Title | pageType |
|---|---|---|---|---|
| 1 | cabinet-particular.ro | `www.cabinet-particular.ro › audit-energetic › aiud` | Cabinet Particular Audit Energetic Aiud | **surveyor** (auditor) |
| 2 | certificat-energetic.ro | `certificat-energetic.ro › aiud` | Certificat Energetic Aiud | **surveyor** (auditor) |
| 3 | evaluari24.ro | `www.evaluari24.ro › evaluatori › alba › aiud` | Top 10 auditori energetici in Aiud — 5,0(323) | **directory** |
| 4 | certificatenergetic.net | `www.certificatenergetic.net › alba` | Certificat Energetic de la 120 lei 0741357252 - Alba-Iulia | **surveyor** (auditor) |
| 5 | cabinet-privat.ro | `www.cabinet-privat.ro › auditor-energetic › aiud` | Auditor energetic Aiud - Cabinet Privat | **surveyor** (auditor) |
| 6 | sites.google.com | `sites.google.com › site › home › cine-are-dreptul…` | Cine are dreptul sa intocmeasca Certificatul energetic | **other** |
| 7 | cabinet-particular.ro | `www.cabinet-particular.ro › harta-audit-energetic` | Localizare pe harta Certificat Energetic Aiud - Cristian Groza | **surveyor** (auditor, 2nd URL same domain) |
| 8 | certificat-energetic.net | `www.certificat-energetic.net › alba-iulia` | Certificat energetic **Alba Iulia** | **surveyor** (auditor) |
| 9 | certificataudit.ro | `certificataudit.ro › certificat-energetic` | Certificat Energetic Online de la 275 lei — Livrare 24h *(Google flags "Lipsesc: aiud")* | **surveyor** (auditor) |

### Aggregator share
**directory = 1 / 9**, `other` = 1 / 9. **Non-provider 2 / 9. Provider cohort 7 / 9** — the
thinnest aggregator presence of any query in the whole programme so far.

### Findings specific to this SERP
- **Three competitors hold a dedicated `/aiud` URL** (#1 `…/audit-energetic/aiud`,
  #2 `certificat-energetic.ro/aiud`, #5 `…/auditor-energetic/aiud`). Per-town landing pages are
  the ranking shape here, exactly as on `servicii-ocpi`. We have zero.
- **#1 names the individual**: "Cristian Groza - Auditor Energetic" (visible in #7's title). Named
  practitioner + town is the pattern. Our equivalent block is chair item **B2, blocked pending the
  ANCPI authorization number** — but note the auditor credential is a different attestation from
  the ANCPI one, so B2 would not unblock this page even when Aurel supplies the number.
- **#8 is a competitor exhibiting our own defect**: `certificat-energetic.net` ranks on an *Aiud*
  query with its *Alba Iulia* page. #4 ranks on an Aiud query with its Alba county page. Wrong-page
  selection is not unique to us on this vertical — it is what Google does when nobody has the right
  page. That is a useful counterweight to any claim that our cannibalization is caused by our page
  count.
- **#7 is a bare "location on a map" page** from the same domain as #1 — a second slot taken by a
  thin geo page.

### Related searches
None rendered.

### PAA
**None.**

### Our position
**expert-intabulare.ro does not appear in the top 10.**

This is the sharpest absence in my whole capture set: **Aiud is our home town.** Our GBP is #1 in
the Aiud map pack on `topograf aiud` and `cadastru si intabulare Aiud`
(`CAPTURES-2026-07-29.md` F3), we rank #3 organically on `expertiza topografica aiud`
(see `expertize-documentatii-serp.md`), and we are entirely absent here.

- `servedPage`: n/a
- `correctPage`: `docs/servicii/certificat-energetic/alba/aiud.html` — **does not exist**.

### Competitor intelligence — POLICY-RELEVANT
"de la 120 lei" (#4) · "de la 275 lei — Livrare 24h" (#9).
**"Livrare 24h" is BLOCKED BY POLICY (duration). The price figures are blocked only as new numbers;
our existing 150–500 lei hedged range is allowed and live.**
Non-blocked competitor content observed: #9's snippet answers *what documents you need*
("ai nevoie în primul rând de actele de identitate și de proprietate ale imobilului") — an
`acte necesare` block, which our hub page already has.

---

## cen-q4 — `certificat energetic apartament alba iulia`
*(tier: city · locality: alba-iulia · intent: transactional)*

### Map pack
**NONE.**

### Organic top 10
9 distinct results ("Se gândește" interstitial after #1; no AI Overview text rendered).

| # | Domain | URL (as displayed) | Title | pageType |
|---|---|---|---|---|
| 1 | certificataudit.ro | `certificataudit.ro › certificat-energetic › certificat…` | Certificat Energetic Alba Iulia - Certificat Audit | **surveyor** (auditor) |
| 2 | evaluari24.ro | `www.evaluari24.ro › certificat-energetic › alba-i…` | Top 10 auditori energetici in Alba Iulia — 5,0(504) | **directory** |
| 3 | certificatenergetic.net | `www.certificatenergetic.net › alba` | Certificat Energetic de la 120 lei — *"Lipsesc: apartament"* | **surveyor** (auditor) |
| 4 | certificat-energetic.ro | `certificat-energetic.ro › alba-iulia` | Certificat Energetic Alba Iulia | **surveyor** (auditor) |
| 5 | certific.ro | `www.certific.ro › certificat-energetic-alba-iulia` | Certificat Energetic Alba Iulia | **surveyor** (auditor) |
| 6 | intabulari24.ro | `www.intabulari24.ro › experti › aaecr › alba-iulia` | Top 10 Auditori energetici in Alba Iulia — 5,0(341) | **directory** |
| 7 | certificat-energetic.net | `www.certificat-energetic.net › alba-iulia` | Certificat energetic Alba Iulia — *"Lipsesc: apartament"* | **surveyor** (auditor) |
| 8 | cabinetprivat.com | `www.cabinetprivat.com › audit-energetic › alba-i…` | Audit Energetic Alba Iulia — *"Lipsesc: apartament"* | **surveyor** (auditor) |
| 9 | sites.google.com | `sites.google.com › site › home › cine-are-dreptul…` | Cine are dreptul sa intocmeasca Certificatul energetic | **other** |

### Aggregator share
**directory = 2 / 9**, `other` = 1 / 9. **Non-provider 3 / 9. Provider cohort 6 / 9.**

### The headline finding on this query
**Google flags "Lipsesc: apartament" on three of the nine results (#3, #7, #8), and only one
result (#1) mentions apartments in its snippet at all** ("Eliberam certificat energetic în 24h-48h
pentru apartamente și case din Alba Iulia").

**Nobody in Alba Iulia has a dedicated `certificat energetic apartament` page.** Every other result
is a generic city page that Google is substituting because no better match exists. This is the
clearest genuinely-open slot across all 11 queries I captured — a real content vacuum on a
transactional, deadline-driven intent (apartment sale ⇒ notary ⇒ certificate required).

It is also the direct `certificat-energetic` analogue of chair Flow 2
(`intabulare apartament Alba Iulia`, where we rank #4 with the wrong service page). Same buyer,
same moment, same city.

### Related searches
None rendered.

### PAA
**None.**

### Our position
**expert-intabulare.ro does not appear in the top 10.**
- `servedPage`: n/a
- `correctPage`: there is no per-property-type dimension in the generator for this service. The
  nearest buildable target is `docs/servicii/certificat-energetic/alba/alba-iulia.html`, which
  **does not exist** (`hubOnly: true`).

### Competitor intelligence — POLICY-RELEVANT
"doar 250 lei" + "24h-48h" (#1) · "de la 120 lei" (#3).
**"24h-48h" is BLOCKED BY POLICY (duration). Price figures blocked only as new numbers; our
existing hedged range is allowed and live.**

---

## Cross-query summary — `certificat-energetic`

| Query | Map pack | Aggregator/non-provider share | Provider cohort | Our rank | Page served |
|---|---|---|---|---|---|
| cen-q1 `certificat energetic alba` | **3 entries** | 3/10 | 7/10 | absent | — |
| cen-q2 `certificat energetic alba iulia` | NONE | 4/10 | 6/10 | absent | — |
| cen-q3 `certificat energetic aiud` | NONE | 2/9 | 7/9 | absent | — |
| cen-q4 `certificat energetic apartament alba iulia` | NONE | 3/9 | 6/9 | absent | — |

**Observations for the analysis stage (Step 5/6 is not my remit):**

1. **We are absent from all four**, including our home town, where our map pack is #1 for
   topography. The cause is inventory, not ranking: `hubOnly: true` means no page exists to rank.
2. **Aggregator share is the lowest in the programme (2–4 of 9–10).** Under SOP §2 that is the
   definition of a query winnable with a genuine service page. It is the inverse of `servicii-ocpi`.
3. **cen-q4 is a documented content vacuum** — Google itself flags "Lipsesc: apartament" on a third
   of the results.
4. **Every ranking provider is an attested energy auditor, and prices/turnaround are on the face of
   every commercial result.** Under the corrected rule 0.2 the **speed axis is BLOCKED** (duration
   claims) but the **price axis is not** — we already publish a hedged 150–500 lei range, and it
   must not be removed. Importing a competitor's specific figure remains forbidden.
   The credential question — whether we hold or subcontract the *auditor energetic* attestation, as
   distinct from the ANCPI topograf authorization — is a **CEO question**, not something to infer.
   Do not invent an attestation, a number, or a claim of holding one (CEO rulings 0.1 and 0.5).
5. **The map pack on cen-q1 is held by keyword-named profiles in a "Birou de audit" category, two
   of them with zero reviews.** Per SOP §3 and chair D11, no page change can move that. It is a GBP
   category/listing question for Dan, and the usual "get more reviews" lever is not the binding
   constraint on this particular pack.
