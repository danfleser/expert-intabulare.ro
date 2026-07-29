# CONTENT SPEC — `servicii-ocpi`

**2026-07-29 · SOP-serp-research.md Step 6 · binding on the implementation stage**
Inputs: `research/seo-2026-07/serp/servicii-ocpi-serp.md` (captures),
`research/seo-2026-07/competitors/servicii-ocpi-competitors.md` (extraction),
`spec-seo-chair-verdict.md` (routing before content), `SOP-serp-research.md` §0 (policy).

Every repo fact below was re-verified in this session. Where it contradicts the extraction stage,
the correction is stated explicitly and marked **[C-n]**.

---

## 0. HEADLINE — ROUTING FIRST, per the chair verdict

The chair's ruling is *routing beats content: a perfect page that is never shown is worth nothing.*
Applied to this service the ruling **does not produce the usual answer**, and the difference matters
more than anything else in this file.

> **ROUTING DEFECT: NO — and that is worse, not better.**
> There is no wrong page being served, because **there is no page in the race.**
> `servicii-ocpi` is `"hubOnly": true` (`generator/data/services.json:925`;
> `generator/build.js:181` — `if (s.hubOnly === true) continue;`). The entire service is
> **one URL** — `/servicii/servicii-ocpi/` — for **12 services × 5 counties × 222 localities**.
> `docs/servicii/servicii-ocpi/alba/` does not exist. `find docs/servicii/servicii-ocpi -type f` → **1**.

This is an **inventory absence**, the inverse of the cannibalization pattern in
`FINDING-cannibalization.md`. On `intabulare-teren` Google holds a #1 and spends it on the wrong
leaf. Here Google holds nothing to spend. We are **absent from the top 10 on all three captured
queries**, including our home town.

And the one page that does exist is not even *aimed* at the query. Verified:

```
<title>Servicii OCPI — Topograf autorizat ANCPI</title>          ← no document name, no place
h1: "Servicii OCPI"                                              ← same
content region: 191 words · 0 <details> · 0 FAQPage
                1 occurrence of the word "extras" (in the intro paragraph)
                0 headings containing "extras"
                0 links to any locality · 0 links to /zone/ · 0 links to /ghid/
18,008 bytes of a 122,880-byte hub budget (85% unused)
2,058 pages link IN to it (global nav)
```

**So the routing statement for this service is:** the served page is *none*; the correct page
*does not exist*; and the nearest thing we own is titled, headed and written as if the search that
brings people here does not exist either. **Targeting is the routing work here — and unlike page
copy, the title/meta/H1 layer sits outside the quality gate, so it is free.**

---

## 1. Header block (SOP Step 6 format)

```
## servicii-ocpi — county (ocpi-q1) · city (ocpi-q2) · town (ocpi-q3)
- Target queries: extras carte funciara alba · extras carte funciara alba iulia ·
                  extras carte funciara aiud
- Our current position: ABSENT from top 10 on all three.
- Page served: NONE.  Page that should be served: DOES NOT EXIST (hubOnly: true).
- Surveyor cohort analysed (N): 1 — cadastrumaxim.ro, HOMEPAGE, ocpi-q2 rank 9. SHORTFALL RECORDED.
- Aggregator share: 6/9, 6/9, 8/9 = 20/27 (74%) — the highest in the programme.
- Map pack: NONE on all three → pure organic; our Aiud-vs-Alba-Iulia geography costs nothing.
- AI Overview: present on ocpi-q3 only (1 of 21 SERPs programme-wide).
- ROUTING DEFECT: NO — inventory absence + targeting absence. See §0.
```

**Consensus warning, binding on every reader.** The surveyor cohort is **N = 1**, and that one
ranks with a *homepage*, not an OCPI page. 20 of 27 organic slots are extras-CF delivery
marketplaces. **SOP §6 anti-pattern 1 forbids computing consensus over them.** Therefore no gap in
this file may be justified by "7 of 9 results do X" where those 9 are aggregators. Where the
extraction stage did that, it is corrected below.

---

## 2. Corrections to the extraction stage — read before acting on it

**[C1] "Just render the existing faqPool" is not a data change. The hub cannot reach `faqPool` at all.**
`generator/lib/pages.js:531` — `if (service.hubFaq && service.hubFaq.length)`. Service **hubs read
`hubFaq`, never `faqPool`**; only `buildServiceLocality` (`:410`) reads `faqPool`. **No service in
`services.json` defines `hubFaq`** — verified across all 12. Consequence: *all twelve* service hubs
have zero FAQ, and for the four `hubOnly` services the `faqPool` is **structurally unreachable
site-wide**. Rendering it requires either a new `hubFaq` array in data **or** a fallback in
`pages.js` — the latter is a shared-file generator change touching all 12 hubs (single-writer rule).

**[C2] Lifting `hubOnly` would emit 92 pages, not ~222.** `servicii-ocpi` is
`tier2Available: false`, and `build.js:199-200` skips `matrix: "reduced"` localities for such
services. Measured: alba 78 full · cluj 5 · mureș 4 · sibiu 2 · hunedoara 3 = **92 candidates**
(130 reduced-matrix localities excluded). This changes the gate arithmetic materially — see §6.

**[C3] `servicii-ocpi` has no `introVariants`.** Data-gate slot `profileVariant`
(`gates.js:28`) would fail on every one of those 92 pages; 6 of 7 slots still clear `MIN_SLOTS = 5`,
so the data gate passes — but the leaves would open with only a seeded opener + closer + distance
sentence, with no profile paragraph, i.e. materially less page-exclusive text than any existing
service. This is the thinnest possible start against a 120-unique-word floor.

**[C4] The claim "no page of ours pairs the BCPI Aiud address with *extras de carte funciară*" is
false as literally stated — and the true version is sharper.** Measured: **129** pages contain
`Str. Cuza Vodă nr. 14`; **128** of them also contain `extras de carte funciar`. The pairing is
*incidental*: the address sits in the "Unde se depune dosarul" card, and "Extras de carte funciară"
sits as a line item in a different service's acte-necesare checklist. The defensible statement is:
**zero titles, zero URLs and zero headings anywhere on the site pair a BCPI office with the extras.**
The only headings containing "extras" live in `/ghid/`, `/dictionar/` and `/fonduri-europene/` —
never on a service page, never next to an office name. This also **weakens** the AI-Overview
argument: 128 pages already co-occur the two strings and earn no citation, so mere co-occurrence is
demonstrably not the lever. Structure — title, heading, URL — is the untested variable.

**[C5] A gap the extraction stage observed about the competitor but never turned on us: the title tag.**
The single surveyor in 27 organic slots got in on `extras carte funciara alba iulia` with a
**homepage whose `<title>` names the document** — *"Extras de Carte Funciara | Extras CF Online |
Servicii Topocadastrale Online"*. Our only page for the service is titled `Servicii OCPI — Topograf
autorizat ANCPI`: it names neither the document nor any place. This is the cheapest and least risky
item on the board (head-tag layer, outside the gated region — the same reasoning the chair used for
D1's 1,508-page meta rebuild).

**[C6] `counties.json → bcpiOffices[].covers` exists, is complete, and is rendered NOWHERE.**
Verified: all five Alba offices carry a `covers` array, together mapping **all 78 Alba UATs** to
their competent BCPI. `grep -rn "covers" generator/` returns **one code comment and no render site**
(`pages.js:622`). `buildCountyHub` prints office name + address and discards `covers`. This is the
single most valuable unused asset for this service: the one question every searcher on these queries
must answer before they can act — *"which office is mine?"* — is already answered in our data and
published on no page.

**[C7] The B-P5 policy conflict is wider than reported.** **24 of 52** guide data files under
`generator/data/guides/` contain tariff or duration strings (`20 lei`, `40 lei`, `0,15%`,
`zile lucrătoare`, `câteva minute`) — not only the OCPI ones. Recorded for the chair. **I neither
remove nor copy any of it.**

---

## 3. GAPS — ranked, confidence-tagged, impact-tagged

Confidence ceilings are low by construction: **surveyor cohort N = 1**. Per the task rules, HIGH
requires near-unanimity among surveyors AND mechanical checkability. **With N = 1 there is no
near-unanimity available**, so HIGH is used *only* for gaps that are mechanically certain facts
about our own repo whose remedy is structural rather than a ranking bet. Every gap whose rationale
leans on competitor behaviour is capped at MEDIUM, and the reason is stated. This is deliberately
stricter than the extraction stage, which tagged G1/G3 as HIGH on aggregator-derived evidence.

| # | Gap | Confidence | Impact |
|---|---|---|---|
| **G1** | **The only page for this service names no place and no document — in its title, H1 or URL.** `<title>Servicii OCPI — Topograf autorizat ANCPI</title>`, `h1: Servicii OCPI`, URL `/servicii/servicii-ocpi/`. The word "extras" appears once, in a paragraph, never in a heading. The one surveyor that reached this SERP did so on a title tag naming the document. Head-tag layer ⇒ outside the gate ⇒ zero demotion risk. | **MEDIUM** — our side mechanically checkable; the mechanism is observed on N=1, so it cannot be HIGH | **moves-rankings** |
| **G2** | **`bcpiOffices[].covers` — the complete 78-UAT → office mapping — is authored and rendered nowhere.** The core question of this query set ("which office is mine, and where is it") is answerable from data we already hold, on a page nobody has built. Competitors answer it per office; the AI Overview answers it by quoting an address we own. | **HIGH** — repo-checkable on both sides, and the remedy publishes existing verified data rather than betting on a pattern | **moves-rankings** |
| **G3** | **The service hub has 0 `<details>` and no `FAQPage` schema, and cannot get them without a code path.** Every ordinary leaf renders 4–6 FAQ + FAQPage; `buildServiceHub` reads `service.hubFaq`, which **no service defines**, so all 12 hubs are FAQ-less and the 6 finished `servicii-ocpi` faqPool entries are unreachable. | **HIGH** — mechanically checkable (`pages.js:531`, all 12 records) | **table-stakes** |
| **G4** | **No document-level differentiation on the service page.** *Extras de informare* vs *pentru autentificare* vs *extras de plan cadastral pe ortofotoplan* vs *copie din arhivă* are four different things a searcher must choose between; the hub's intro merges them into one clause. Our `/dictionar/` and `/ghid/` corpora do distinguish them — the service page does not. | **MEDIUM** — the distinction is a domain fact, not a competitor pattern; the ranking effect is unproven | **moves-rankings** |
| **G5** | **No "why a person instead of a 49-lei button" argument anywhere.** Every marketplace on this SERP sells self-service delivery. The only product a button cannot deliver — imobil negăsit în sistem, CF neconvertită/în arhivă, proprietar în diaspora, sarcini/notări that should stop a signature — is exactly what `faqPool[1] [2] [5]` already say, on a page that renders none of them. | **MEDIUM** — reasoning, not measurement; also the conversion argument | **moves-rankings** |
| **G6** | **The hub is an orphan in both directions.** Content region links: 0 localities, 0 `/zone/`, 0 `/ghid/` (only 3 sibling services). And because `hubOnly` keeps it out of `emitted`, the 78 per-locality `<details>` on `/zone/alba/` list **8** services and never this one. | **MEDIUM** — repo-checkable; direction of effect plausible, magnitude unknown | **table-stakes** |
| **G7** | **No named individual, no photo, no ANCPI authorization number.** Both surveyors examined (the one that ranked and the non-ranking Alba reference) lead with a named, photographed engineer. The *name* is not blocked — it is already in the footer NAP. The *number* is blocked on CEO question 1. | **MEDIUM** | **table-stakes** |
| **G8** | **Internal-link topology is inverted** — 2,058 pages link to the 191-word hub; **16** link to `ghid/extras-carte-funciara-online.html` (972 words, 6 FAQ, FAQPage) which actually answers the query. | **LOW** — correlational, and self-refuting as a remedy: the hub already has maximal inbound links and still does not rank, so links are **not** the binding constraint | **table-stakes** |
| **G9** | **Word count: 191 vs cohort 2,900.** | **LOW** — length correlates with rank without causing it (SOP §5). Listed only so nobody re-derives it as a finding. | — |
| **G10** | **No `servicii-ocpi × locality` or `× county` page exists at all.** 7 of 9 results on ocpi-q3 carry a place/office URL segment. **This evidence comes from the aggregator cohort and therefore cannot support a consensus claim (SOP §6 anti-pattern 1).** The surveyor cohort argues the *opposite*: the one surveyor who monetises this query does it through a **national, locality-free** storefront. | **LOW→MEDIUM, contested** — the absence is certain; the remedy is not | **moves-rankings if true** |

---

## 4. CONTENT SPEC — sections, purpose, required answers, data source

No Romanian page copy is written here (SOP Step 6). Every section below is achievable with **no
price figure, no ANCPI tariff and no duration or turnaround claim of any kind.**

### S1 — Retarget the page that already exists *(do this first; free of gate risk)*
- **Where:** `generator/data/services.json → servicii-ocpi` (+ one small generator change, see §5).
- **Purpose:** make the one asset we own point at the search that exists. Closes **G1**.
- **Must answer, in the title/H1/meta triple:** *what document* (extras de carte funciară / plan
  cadastral / copie din arhivă), *what act* (obținere, depunere, urmărire dosar), *where*
  (județul Alba, cele cinci birouri).
- **Data source:** `service.h1` — **already supported with no code change** (`pages.js:585`,
  `h1: service.h1 || service.name`); `service.metaDescription` — already present and already names
  the extras. The `<title>` is composed from `service.name` at `pages.js:583` and there is **no
  override field** → see §5 "missing".
- **Constraint:** `fitTitle(parts, maxLen = 60)` (`util.js:188`) — the title must fit 60 characters
  or the brand suffix is dropped. Write to that budget.
- **Risk:** none. Head tags and H1 sit outside `<!--content:start-->`; this is the same
  zero-demotion-risk layer the chair used for D1.

### S2 — "Care birou este al meu" *(the flagship section — the only thing here nobody else can publish)*
- **Purpose:** answer the question the whole query set is really asking, from data we already own.
  Closes **G2**, feeds **G4**, and is the only defensible answer to the AI-Overview observation.
- **Must answer:** for each of the five Alba offices — its **name**, its **street address**, and
  **exactly which localities file there**. Then: what you can request there, and that we file and
  collect on the client's behalf.
- **Data source:** `generator/data/counties.json → alba.bcpiOffices[]` — `{name, address, covers[]}`,
  five entries covering all 78 UATs (BCPI Alba Iulia 15 · Aiud 16 · Blaj 12 · Câmpeni 22 · Sebeș 13).
  **`covers[]` is authored, complete and currently rendered nowhere.**
  `localities/*.json → ocpiOffice{name,address}` gives the same mapping per locality (222 records).
- **Explicitly NOT in this section:** any tariff, any fee, any processing term, any "urgency"
  duration. The compliant model for tariff language already exists in
  `counties.json → alba.feeNote` — it names the tariff and the urgency regime **without stating any
  amount or any term**. Reuse that register; do not extend it.
- **Gate note:** on a hub only `sizeGate` applies (`gates.js:108`; hubs are appended unconditionally
  at `build.js:225`). Budget 122,880 bytes, 18,008 used.

### S3 — "Ce documente obținem de la OCPI"
- **Purpose:** split the merged intro clause into named, distinct documents. Closes **G4**.
- **Must answer:** *which one do I need* — extras de informare (verificări, dosare) · extras pentru
  autentificare (notar) · extras de plan cadastral / pe ortofotoplan · copie după documentația din
  arhivă · certificat de sarcini. And: what each is used for, who may request it.
- **Data source:** the six live `/dictionar/` entries (`extras-cf-online`,
  `extras-de-carte-funciara-pentru-informare`, `extras-de-carte-funciara-pentru-autentificare`,
  `extras-de-plan-cadastral`, `ocpi`, `receptie-tehnica-ocpi`) + `faqPool[0]`, which already carries
  the informare/autentificare distinction in finished Romanian.
- **No figure, no term.** The "valabil 10 zile" already in `faqPool[0]` is a **statutory validity
  period of a document**, not a claim about how fast a third party works — it is not a turnaround
  claim. Flagged for the chair rather than assumed: if the chair reads ruling 0.2 to cover it, drop
  the clause; the section stands without it.

### S4 — FAQ block with `FAQPage` schema
- **Purpose:** parity with an ordinary leaf. Closes **G3**.
- **Data source:** the six existing `servicii-ocpi.faqPool` entries — but see the two blockers:
  1. **[C1] Mechanism:** hubs read `service.hubFaq`, not `faqPool`. Requires a data field or a
     one-line fallback in `pages.js`. `schema.faqPage()` is already wired (`pages.js:577`).
  2. ⚠️ **`faqPool[4]` is a live policy landmine.** Its answer reads *"Extrasul de informare **se
     obține de regulă în câteva zile lucrătoare**…"* — a duration claim about OCPI/BCPI processing,
     forbidden by ruling 0.2. It is **latent, not live**: the hub renders no FAQ and the service has
     no leaves, so nothing currently emits it. Rendering the pool without rewriting entry [4] first
     **ships a policy violation on day one.**
     **Required rewrite shape (not copy):** replace the term with the *decision* — whether the
     property has an electronic CF or a paper file in the archive, and that we tell the client which
     situation theirs is in. Same answer, no number, no term.
- **Do not resize the pool** — SOP §4.8 and chair D13. Rewrite entry [4] **in place**.

### S5 — "Când aveți nevoie de om, nu de buton"
- **Purpose:** the only differentiation available against an instant-delivery marketplace. Closes
  **G5**; this is the section that implements judgement **J1** (target the adjacent intent).
- **Must answer:** imobilul nu apare în sistem / nu are număr cadastral · cartea funciară nu e
  convertită, dosarul e în arhivă · proprietarul e în diaspora și are nevoie de împuternicit ·
  am extrasul dar nu înțeleg partea a III-a · sunt sarcini sau notări care ar trebui să oprească o
  semnătură · dosar respins sau notă de completare.
- **Data source:** `faqPool[1]` (diaspora), `faqPool[2]` (verificare înainte de cumpărare),
  `faqPool[3]` (arhivă/planuri vechi), `faqPool[5]` (depunere și urmărire dosare) — all four already
  written and approved; `service.process[]` (4 steps) and `service.documents[]` (3 items) already
  render.
- **Note:** this is also the honest answer to the strongest related search, *"extras carte funciara
  gratuit"*, and to the alba24.ro story at #8 — we do not compete on the free document, we compete
  on the case where the free document does not solve the problem.

### S6 — Link block to the corpus that already answers this query
- **Purpose:** stop the orphaning. Partially closes **G6** and **G8**.
- **What:** link out to `ghid/extras-carte-funciara-online`, `cum-citesti-un-extras-de-carte-funciara`,
  `copie-plan-amplasament-arhiva-ocpi`, `receptia-ocpi-ce-inseamna`, `taxe-si-tarife-ocpi-ancpi`
  (⚠️ subject to the B-P5 ruling), plus the six `/dictionar/` entries and `/zone/<county>/`.
  Reciprocally, those guides should link back to the service page.
- **Evidence caveat:** G8 is LOW confidence and partly self-refuting — the hub already has 2,058
  inbound links and does not rank. Do this for coherence and crawl paths, **not** as a ranking bet.

### S7 — `docs/zone/<county>/index.html`, one addition
- **Purpose:** make the county page say what people go to each office **for**. Closes **G2** at
  county level. Today the content region of `/zone/alba/` contains **0** occurrences of "extras"
  (verified; the 2 hits site-wide are inside a Google Maps URL in the chrome).
- **What:** extend the existing `OCPI Alba` card so each office line carries (a) what is requested
  there and (b) the `covers[]` locality list. **Do not touch the `feeNote` paragraph** — it is the
  one piece of tariff language on the site that is correctly worded under ruling 0.2.
- **Do NOT** add `Servicii OCPI` to the 78 per-locality `<details>` lists unless the corresponding
  leaf pages exist. Those lists are generated from `emitted` (`pages.js:637`), so this is automatic
  and must not be forced by hand.

### S8 — Register hygiene, already ruled
- Remove **"2681+ colaborări"** from the stats band — chair verdict §3.3 (B6). No new work, just do
  not leave it behind when the hub is rewritten.

### S9 — The structural decision — FOR THE CHAIR, NOT FOR THE IMPLEMENTER
Three options; the arithmetic is now exact.

| Option | Pages | Gate exposure | Verdict |
|---|---|---|---|
| **A. Leave `hubOnly: true`, execute S1–S8** | 1 rewritten hub + 5 county pages touched | `sizeGate` only — **zero demotion risk** | **Recommended. Do this now, unconditionally.** |
| **B. Add `servicii-ocpi × county` hubs** (`/servicii/servicii-ocpi/<county>/`) | +5 | hubs carry `sizeGate` only (chair §3.4) — **zero demotion risk**; matches the `/ocpi/alba` URL shape cf.ro ranks with on q1 and q2 | **Recommended as the second step**, but it is new routing infrastructure — chair W1 shaped. Does **not** match the `/bcpi/aiud` town shape and I do not claim it wins ocpi-q3. |
| **C. Lift `hubOnly`** | **+92** (not 222 — **[C2]**) | **The highest mass-demotion risk on the site.** | **Do not do this in v1.** |

Why C is the worst option available, with the numbers:
- Sibling group would be **92** pages ⇒ boilerplate cut at **46** (≥50% of the group).
- **Alba-constant text = 78/92 = 85% ⇒ above the cut ⇒ dropped as boilerplate.** It costs nothing in
  overlap and **contributes nothing to unique words** — so the county note cannot help these pages
  clear the floor. (Note this inverts the usual case: for a full-matrix service Alba is ~35%.)
- **BCPI-office-constant text = 1.1%–23.9% ⇒ below the cut ⇒ lands in every same-office page's
  residual and drives overlap up.** Exactly chair ruling **D4**, now quantified for this service.
- The service's real content **is** office-constant. There is almost nothing genuinely
  per-locality to say about fetching a document from a counter.
- **[C3]** no `introVariants` ⇒ the leaves start thinner than any existing service against a
  120-page-exclusive-word floor.
- The only per-locality text available is `localNote`, which is **already rendered on that
  locality's other 8 service pages**. The gate would not catch it (groups are per-service) but it
  would be a ninth copy of the same paragraph for Google.

---

## 5. DATA REQUIRED FROM GENERATOR

### Exists today — no authoring needed
| Field / asset | Location | Feeds |
|---|---|---|
| `hubIntro`, `process[4]`, `documents[3]`, `priceRange`, `related[3]`, `metaDescription` | `services.json → servicii-ocpi` | S1, S5 |
| `faqPool[6]` — finished Romanian, currently unreachable on hubs | `services.json → servicii-ocpi` | S3, S4, S5 |
| `service.h1` override — **already honoured, no code change** | `pages.js:585` | S1 |
| `bcpiOffices[{name, address, covers[]}]` — 5 offices, all 78 Alba UATs mapped | `counties.json → alba` | **S2, S7** |
| `ocpiHq{name,address}`, `countyNote`, `feeNote` (compliant tariff wording model) | `counties.json → alba` | S2, S7 |
| `ocpiOffice{name,address}` on **all 222** locality records | `localities/*.json` | S2, S7 |
| `localNote`, `villages[]`, `distanceKmFromAiud`, `lat/lon` | `localities/*.json` | only if S9-C |
| 6 `/ghid/` pages + 6 `/dictionar/` entries + `en/services/land-registry-extract.html` | `data/guides`, `data/dictionary` | S3, S6 |
| `schema.faqPage()` already wired into `buildServiceHub` when `faqs.length` | `pages.js:577` | S4 |

### Missing — must be added before the spec can ship
| Missing | Why | Cost |
|---|---|---|
| **`service.hubFaq[]`** (or a `service.hubFaq \|\| service.faqPool` fallback at `pages.js:531`) | Hubs cannot reach `faqPool`. **No service defines `hubFaq`.** Blocks S4 outright. | Data-only if added as an array; a fallback is a **shared-file** change affecting all 12 hubs → single-writer rule, own commit, own gate run. |
| **A hub `<title>` override** (e.g. `service.hubTitle`) | Title is composed from `service.name` at `pages.js:583` with no override; changing `service.name` would rewrite the nav on 2,095 pages. Blocks half of S1. | ~2 lines in `pages.js` + 1 data field. Must respect `fitTitle` 60-char cap. |
| **A hub prose-section slot** | `templates/page-service-hub.html` has exactly five content slots — `introHtml`, `documentsBlock`, `processBlock`, `priceBlock`, `faqBlock`. **S2, S3 and S5 have nowhere to render.** | One `{{{hubSectionsBlock}}}` slot + a `hubSections[{heading, body}]` data field. **Escape hatch, if the chair wants zero generator change:** `pages.js:510` injects `hubIntro` **raw** when it starts with `<`. It works, but it stacks every section above the acte/process blocks and abuses a field named "intro" — record it as a known hack, not a design. |
| **A render site for `bcpiOffices[].covers`** | Authored and complete; `grep -rn "covers" generator/` returns a **comment only** (`pages.js:622`). Blocks the best part of S2/S7. | ~10 lines in `buildCountyHub`, plus the hub section. |
| **A `servicii-ocpi × county` route** | `build.js` emits `/servicii/<slug>/index.html` and `/zone/<county>/index.html` only. Needed only if S9-B is approved. | Chair W1-shaped work. |
| **Per-BCPI-office prose slot** | Needed **only** under S9-C, which is exactly what ruling D4 forbids on leaves. | Do not build. |

---

## 6. BLOCKED BY POLICY — recorded as intelligence, NOT actioned

| # | Blocked item | Rule |
|---|---|---|
| **B-P1** | Matching or referencing any delivery/turnaround claim: efunciara **20 min / 24-7**, cfunciara **15 minute / 6 ore**, eghiseul *"livrare în câteva minute"*, extrasecf *"sub un minut"*. | 0.2 — *any* turnaround or duration claim. **Do not propose in any form.** |
| **B-P2** | Quoting, matching or beating **49 / 59 / 69 / 89 lei**. Our `"de la 100 lei per serviciu, plus tarifele ANCPI"` stands unchanged — neither extended nor removed. | 0.2 — no NEW price figure outside `services.json`. |
| **B-P3** | Stating the exact ANCPI tariff for an extras. `"plus tarifele ANCPI"` and `alba.feeNote` are the compliant register: name the tariff, never price it. | 0.2 |
| **B-P4** | Any PNCCF year, sector number or parcel count on OCPI pages. | 0.5 |
| **B-P5** | ⚠️ **`services.json → servicii-ocpi.faqPool[4]`** — *"se obține de regulă în câteva zile lucrătoare"*. Latent (unrendered) today. **Any step that renders the faqPool ships a live violation unless [4] is rewritten first.** This is a trap, not a task. | 0.2 |
| **B-P6** | **Escalation, not a block on me.** The live `/ghid/` corpus already publishes B-P1 and B-P3 content: `taxe-si-tarife-ocpi-ancpi` (*"20 lei online / 25 lei la ghișeu"*, *"40 lei"*, *"0,15% … min. 60 lei"*, *"de la 18 la 8 zile lucrătoare"*), `cat-dureaza-un-extras-cf` (*"minute – câteva ore"*, *"de regulă 2 zile lucrătoare"*), `extras-carte-funciara-online` (whose **meta description is in the Google snippet today**). **[C7]: 24 of 52 guide data files carry such strings.** I neither removed nor copied any of it. **Chair ruling required** before any `servicii-ocpi` spec can be called policy-consistent, because S6 links to those very pages. | 0.2 vs live site |
| **B-P7** | The top related search is *"extras carte funciara gratuit"* and alba24.ro at #8 says owners can obtain it free. This **cannot** be answered with a price or tariff statement. It is answerable only structurally — S5, the case where the free document does not solve the problem. | 0.2 |
| **B-P8** | *(Not policy — data)* The ANCPI authorization number for G7 is blocked on **CEO question 1**. Never invent one. The **name** is not blocked. | 0.1 |

---

## 7. What this spec does not establish

- **Surveyor cohort N = 1**, and that one ranks with a homepage. Nothing here supports a "top
  surveyors do X" claim, because top surveyors do not appear on this vertical at all.
- **74% of the organic surface is aggregators**, and SOP §6 forbids computing consensus over them —
  so the most visually obvious pattern (per-BCPI-office URLs) is precisely the one that **cannot**
  carry a HIGH tag. It is recorded, contested, and left to the chair as S9.
- **J1 stands:** a `servicii-ocpi` page will not beat an instant-delivery button on the pure
  extras-delivery query, and no on-page work changes that. This spec targets the adjacent intent
  (imobil negăsit, CF neconvertită, diaspora, "citiți acest extras înainte să semnez"), which our
  own unrendered faqPool already answers. Per ruling 0.3 this is **reframing the target**, not
  deprioritizing the service.
- Whether any of this changes a served URL is a **hypothesis**, testable only at the
  **2026-08-19** Search Console gate: position, impressions, **which URL is served**, and index
  coverage.
