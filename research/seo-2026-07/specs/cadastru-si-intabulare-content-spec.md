# CONTENT SPEC — `cadastru-si-intabulare`

**SOP-serp-research.md Step 5 + Step 6 · 2026-07-29 · Spec agent (content-spec stage)**
**Inputs:** `research/seo-2026-07/serp/cadastru-si-intabulare-serp.md` (4 queries),
`research/seo-2026-07/competitors/cadastru-si-intabulare-competitors.md` (N=6 surveyor cohort),
`spec-seo-chair-verdict.md`, `research/seo-2026-07/serp/FINDING-cannibalization.md`,
scratchpad `facts.md`.
**Repo state verified directly by this agent** — every number below marked ✅ was measured in the
tree today, not carried forward from an earlier stage.

---

## 0. HEADLINE — read this before anything else

> **Google has never once served `cadastru-si-intabulare/alba/<locality>.html` for a cadastru
> query.** Across seven captured cadastru-intent SERPs (4 in this batch, 3 in the prior session)
> it served: a 24-km commune leaf, the homepage, the homepage again, and the
> `intabulare-teren` leaf. The flagship leaf of our flagship service is invisible.
>
> **This service is ahead of all six surveyor competitors on every content dimension measured
> — schema, FAQ, process, acte, WhatsApp, local specificity — and still ranks #7 with the
> wrong page.** More leaf content is not the lever here. Per chair ruling **D2**, routing is
> upstream of quality, and this service is the strongest evidence for it on the whole board.

Everything in §5 (CONTENT SPEC) is **delta-only** and explicitly subordinate to §4 (routing).
Nothing in §5 is worth shipping before the routing work in §4.

---

## 1. Target queries and our position

| Query id | Query | Tier | Our rank | Page Google served | Correct page | Defect |
|---|---|---|---|---|---|---|
| cad-q1 | `cadastru si intabulare alba` | county | **#7** | `/servicii/cadastru-si-intabulare/alba/noslac.html` | `/servicii/cadastru-si-intabulare/alba/` — **does not exist** ✅ | **YES — wrong locality** |
| cad-q2alt-pc | `topografi autorizati alba iulia` | city | not in top 10 | — | `…/alba/alba-iulia.html` | no (absent, not misrouted) |
| cad-q3alt-pc | `cadastru sebes` | town | not in top 10 | — | `…/alba/sebes.html` (intent contested) | no |
| cad-q4-pc | `cadastru aiud` | town | **#7** | `https://expert-intabulare.ro/` (homepage) | `…/alba/aiud.html` | **YES — hub substituted for leaf** |

- **Surveyor cohort analysed: N = 6** (cadastrumaxim, cadastrumartin, totalbusinessland,
  topografiealba, pdproiectsurveyor, gistopocad), deduped by URL.
- **Cohort shortfall, recorded not padded:** `cadastru sebes` returned **0** surveyors and
  `cadastru aiud` returned **0** third-party surveyors. No consensus is computed for those two
  queries. `cadastru si intabulare alba` returned exactly **3**, the SOP minimum.
- **Aggregator share: 6/10 · 5/10 · 9/10 · 9/10 — mean 7.25/10.** High aggregator share means
  the queries are winnable with a genuine service page **provided the right page is served**.
- **Map pack:** ours absent from cad-q1 and cad-q2alt-pc entirely; **#3 on `cadastru aiud`**,
  behind the government BCPI office and behind Molnar (5 reviews vs our 3). On the near-identical
  `cadastru si intabulare Aiud` and `topograf aiud` we were **#1**. The ordering flips on review
  count. **No page change can move this** (SOP §3 Step 1).

---

## 2. Verified repo facts this spec rests on

All measured today in `/website pfa deploy`.

| Fact | Value | How verified |
|---|---|---|
| `docs/servicii/cadastru-si-intabulare/alba/index.html` | **absent** ✅ | `ls` |
| `docs/servicii/*/<county>/index.html`, any service, any county | **0 exist** ✅ | glob returns no matches — W1 is unbuilt for all 12 services |
| Sibling group for this service (`build.js:208`, service-only, 5 counties) | **222 pages** ✅ | `ls docs/servicii/cadastru-si-intabulare/*/*.html` |
| Alba leaves in that group | **78** = 35.1% of the group ✅ | below the 50% boilerplate cut |
| Alba leaves declaring `/zone/alba/` as breadcrumb level-3 parent | **624** ✅ | JSON-LD grep |
| Outbound service-leaf links on `/zone/alba/` | **624**, across **8** services ✅ | grep |
| Service×locality leaves site-wide | **1,516** ✅ (the "927" in older docs is stale, pre-rescue) | glob |
| `aiud.html` size | 28,062 B of 61,440 — **~33 KB headroom** ✅ | `wc -c` |
| `noslac.html` size | 28,750 B ✅ | `wc -c` |
| National service hub `/servicii/cadastru-si-intabulare/index.html` | **exists**, 41,723 B of 122,880 ✅ | `wc -c` |
| Pages carrying the live BCPI duration claim | **96** ✅ | `grep -rl "termenul obișnuit de soluționare" docs/` |
| `loc.serviceNotes` in the generator | **0 occurrences** — approved D5, unbuilt ✅ | `grep -rn serviceNotes generator/` |
| ANCPI authorisation slot in `site.json` | **absent** ✅ | grep |
| `aiud.distanceKmFromAiud` | **0** — live defect 12.1 is fixed in data ✅ | `alba.json` |

### 2.1 CORRECTION to the previous stage — `documents` is already per-service

The competitor file's gap **G4** asks for *"a new per-service field in `generator/data/services.json`"*.
**That field already exists.** ✅ Every one of the 12 services carries its own `documents` array
(`cadastru-si-intabulare` has 5; `plan-topografic` has 3; `dezmembrare-alipire` has 4). The acte
list already varies by service.

The genuine gap is narrower: **no branching by CASE TYPE inside a single service.** C2
(cadastrumartin.ro) splits acte across 7 case types — schimbare categorie de folosință, PAC,
scoatere din circuit agricol, notare construcție, alipire/dezlipire, primă înscriere extravilan,
primă înscriere intravilan. Ours is one flat list. Restated correctly in §3 as **G5**.

### 2.2 NEW FINDING — the breadcrumb switches hierarchy axis, and the node it needs is missing

The leaf's `BreadcrumbList` JSON-LD reads: ✅

```
1 Acasă                 → /
2 Cadastru și intabulare → /servicii/cadastru-si-intabulare/     (right service, national scope)
3 Județul Alba          → /zone/alba/                            (right county, 8 services)
4 Aiud                  → /servicii/cadastru-si-intabulare/alba/aiud.html
```

Position 3's URL is **not a path descendant of position 2's**. The chain leaves the service tree,
enters the county tree, then returns to the service tree. There is **no node anywhere in the graph
that means "cadastru și intabulare, în județul Alba"** — which is exactly what `cadastru si
intabulare alba` asks for.

Given that graph, Google's three options for cad-q1 were: the national service hub (right service,
wrong scope), `/zone/alba/` (right scope, wrong service — it is the declared parent of **624**
leaves across 8 services), or one of 78 over-specified commune leaves. **It chose Noșlac.** That is
not a mysterious failure; it is the predictable output of a graph with a hole in it.

**This makes chair W1 not a speculative remedy but the node the breadcrumb already implies.**

### 2.3 CORRECTION — the fallback for cad-q1 is not `/zone/alba/`

The previous stage recorded the nearest existing page as `docs/zone/alba/index.html` and judged it
weaker than the served commune leaf. Both true, but incomplete: **`/servicii/cadastru-si-intabulare/index.html`
also exists** ✅ and is already the leaf's breadcrumb level-2 parent. Measured:

| | `/zone/alba/` | `/servicii/cadastru-si-intabulare/` | `…/alba/noslac.html` (served) |
|---|---|---|---|
| H1 | "Cadastru și topografie în județul Alba" — service-agnostic | "Cadastru și intabulare" — county-agnostic | "Cadastru și intabulare în Noșlac (Alba)" |
| Service schema | **no** | **yes** ✅ | yes |
| FAQPage schema | **no** | **no** ✅ (0 `<details>`, 0 `FAQPage`) | yes |
| Acte necesare | no | **yes** ✅ | yes |
| Process steps | no | **yes** ✅ | yes |
| Price | none | **priceTable, 4 rows** ✅ | range |
| "Alba" mentions | everywhere | **8** ✅ | everywhere |

So the two axes each exist separately and **neither singly matches the query.** The service hub is
the stronger of the two fallbacks and is one FAQ block away from schema parity with the leaves.

### 2.4 `priceTable` is dead data on every leaf

`priceTable` exists in `services.json` for **`cadastru-si-intabulare` only** — no other service has
one ✅. It renders on exactly 3 pages site-wide: the national service hub and two `/ghid/` +
`/fonduri-europene/` articles ✅. **It renders on none of the 222 leaves.** Recorded as an
inventory fact. This spec proposes **no change to it** — see §6.

### 2.5 Gate arithmetic for anything proposed below (measured, 222 localities)

| Text keyed to | Share of the 222-page sibling group | Gate consequence |
|---|---|---|
| all 222 (service-constant) | 100% | ≥50% ⇒ **boilerplate, dropped** ⇒ gate-safe, adds 0 unique words |
| `profile: agricol-campie` | **119 / 53.6%** ✅ | ≥50% ⇒ **boilerplate, dropped** ⇒ safe |
| `profile: montan-apuseni` | 37 / 16.7% ✅ | <50% ⇒ **residual ⇒ raises overlap** |
| `profile: periurban` | 36 / 16.2% ✅ | <50% ⇒ **residual ⇒ raises overlap** |
| `profile: urban` | **30 / 13.5%** ✅ | <50% ⇒ **residual ⇒ raises overlap** |
| county (Alba) | 78 / 35.1% ✅ | <50% ⇒ **residual ⇒ raises overlap** |
| BCPI office, largest (Câmpeni) | 22 / 9.9% ✅ | <50% ⇒ residual — confirms chair **D4** |
| genuinely per-locality | 1 / 0.45% | page-exclusive ⇒ **raises unique words. Ideal.** |

**The trap this exposes:** Alba Iulia, Aiud and Sebeș — the three localities this service's
queries actually target — are all `profile: urban`, the **smallest and most overlap-exposed
bucket (13.5%)**. Any block written "for the city pages" lands squarely in the residual of all 30
of them. Enrichment for those three must be **per-locality prose**, never a shared urban block.

---

## 3. GAPS — ranked, confidence-tagged (SOP Step 5)

Consensus computed over the **surveyor cohort only (N=6)**. Directory and marketplace results are
excluded (SOP §3 Step 2). Confidence discipline: **HIGH** requires near-unanimity among surveyors
**and** mechanical checkability — or, for routing gaps, direct repeated SERP observation of our own
site. Word-count gaps are **LOW** by rule.

### G1 — `[HIGH] [moves-rankings]` · No service×county node exists

`/servicii/cadastru-si-intabulare/alba/index.html` is absent ✅, and so is every equivalent for all
12 services and 5 counties ✅. The county query is therefore answered by a 24-km commune leaf whose
own Google snippet reads *"aprox. 24 km de Aiud"*. Compounding it, **624 Alba leaves declare the
same `/zone/alba/` parent** ✅ — a node shared with 7 other services.

*Evidence basis, stated honestly:* this is **not** cohort consensus — 0/6 competitors have a
service×county page, because 6/6 rank a homepage instead. It is HIGH on the strength of **direct
SERP observation plus file-system verification**, not imitation.
**Owner: routing workstream (chair W1 + W3). Not this lane.**

### G2 — `[HIGH] [moves-rankings]` · The Aiud leaf is served for none of the three Aiud queries

`cadastru aiud` → homepage. `topograf aiud` → homepage. `cadastru si intabulare Aiud` →
`intabulare-teren/alba/aiud`. The correct leaf carries **4 JSON-LD blocks, 5 marked-up FAQ, BCPI
Aiud + street address, 5 acte, 5 process steps and all 10 satele aparținătoare**; the homepage
Google prefers carries **0 JSON-LD blocks**. Google is choosing our least-structured page for our
home town, three times out of three.
**Remedy: chair W3 link hierarchy + `serviceNotes` (D5) — differentiation, not more prose.**

### G3 — `[HIGH] [table-stakes]` · Review count — NOT A PAGE CHANGE

Cohort map-pack review counts run **10–39** (Molnar 10, Doditoiu 10, Munteanu 17, P&D 20, Maxim
Emanuel 32, Cadastru MAXIM 39). Ours is **3**. We are absent from the cad-q1 and cad-q2alt-pc map
packs and **#3 on `cadastru aiud`** where we were **#1** on two near-identical queries — the
ordering flips on review count alone.

**Listed here only to close it: SOP §3 Step 1 and §6 forbid proposing a page change to move a
map-pack position. This is a CEO/GBP action (chair D11), not content work. Nobody may re-raise it
as a content gap.**

### G4 — `[MEDIUM] [table-stakes]` · The individual surveyor is not named

3/6 name the engineer in body copy — C1 *Ing. Emanuel MAXIM* in the H1 itself, C2 *Inginer Dipl.
Martin Nicolae*, C6 *Director: Marius Popescu*; 1/6 shows his photograph. Our leaves carry
"Fleser Aurel Expert PFA" as an NAP business string ✅ and "Topograf autorizat ANCPI, 25+ ani" as an
**unattributed** claim. Nobody physically arrives in the copy.

50% is a majority pattern with a plausible mechanism (E-E-A-T, human trust), not near-unanimity —
hence MEDIUM. **The name is available today; only the authorisation number is blocked** (CEO
ruling 0.1).

### G5 — `[LOW] [table-stakes]` · Acte necesare does not branch by case type

**1 of 6** (C2) indexes acte by case type across 7 work types. That is a single competitor, not a
pattern — **downgraded from the previous stage's MEDIUM.** Recorded because it is genuine user
value for a service whose whole difficulty is "which situation am I in", not because the cohort
says it ranks. Note §2.1: the per-**service** field already exists; the missing axis is
per-case-type **within** the service.

### G6 — `[MEDIUM] [table-stakes]` · No work evidence on any leaf

3/6 have a portfolio — C1 has 35 captioned job photographs plus "mii de imobile intabulate", C3 has
the A7 motorway and 16 client logos (BNR, Heidelberg Cement, RMGC), C5 has 3 images. We have zero
images of real work on any of the 1,516 leaves.
**Blocked on real photographs from Aurel.** Do not substitute stock imagery. Do not imitate C5's
six testimonials — they are signed Ion Popescu / Maria Ionescu / Andrei Vasilescu / Elena
Dumitrescu / George Marin / Laura Popa, the standard Romanian placeholder set, and read as filler.

### G7 — `[MEDIUM] [table-stakes]` · The service hub has no FAQ and no FAQPage schema

`/servicii/cadastru-si-intabulare/index.html` has **0 `<details>` blocks and 0 `FAQPage`** ✅ while
all 222 of its own children have both. It is the breadcrumb level-2 parent ✅ and the better of the
two fallbacks Google can reach for on the county query (§2.3). It is one block away from schema
parity with its children, and it has **81 KB of headroom** under the 122,880 hub cap ✅.

### G8 — `[LOW] [table-stakes]` · Word count

Cohort word counts: 312 · 600 · 650 · 1,300 · 2,300 · 3,000 — **median ≈ 975, all summariser
estimates, LOW confidence**. Ours: **877 gated, exact**. `gistopocad.3x.ro` ranks **#6** for
`topografi autorizati alba iulia` on **312 words**, a Microsoft Publisher VML export, no mobile
layout, no `tel:` links and **no HTTPS at all**.

**LOW by SOP rule and NOT ACTIONABLE. Do not propose "add words".** Length correlates with rank
without causing it; this cohort is the clearest possible demonstration.

### Reverse gaps — where we are ahead. Do not sacrifice any of these.

| | Ours | Cohort |
|---|---|---|
| JSON-LD of any kind | 4 blocks (LocalBusiness, Service, BreadcrumbList, FAQPage) | **0 / 6** |
| Marked-up FAQ | 5–6 questions | **0 / 6** |
| Numbered process | 5 steps | **0 / 6** |
| WhatsApp CTA | ×27 per leaf | **0 / 6** |
| Named BCPI office + street | every leaf | **0 / 6** |
| Villages of the UAT named | 10 on Aiud | **0 / 6** |
| Service×locality pages | 1,516 | **0 / 6** |
| ANCPI authorisation number | not yet | **0 / 6 — uncontested when we ship it** |

---

## 4. ROUTING — the actual work for this service (chair D2: this precedes §5)

**ROUTING DEFECT: YES, on both queries where we rank.**

**cad-q1 `cadastru si intabulare alba`**
- `servedPage` = `docs/servicii/cadastru-si-intabulare/alba/noslac.html` — a commune, 24 km out.
- `correctPage` = `/servicii/cadastru-si-intabulare/alba/` — **does not exist** ✅ (chair W1).
- Fallbacks, neither adequate (§2.3): `/zone/alba/` is county-right/service-wrong and weaker than
  the served leaf on every schema attribute except word count; `/servicii/cadastru-si-intabulare/`
  is service-right/county-wrong and lacks a FAQ.
- Structural cause (§2.2): the breadcrumb switches axis at position 3 and **624 Alba leaves share
  one parent** ✅.

**cad-q4-pc `cadastru aiud`**
- `servedPage` = the homepage — **0 JSON-LD blocks**, no BCPI address, no acte, no process, no
  marked-up FAQ.
- `correctPage` = `docs/servicii/cadastru-si-intabulare/alba/aiud.html` — 4 JSON-LD blocks, 5 FAQ,
  BCPI Aiud + Str. Cuza Vodă nr. 14, 10 villages, `distanceKmFromAiud: 0` so the meta correctly
  reads *"birou chiar în Aiud"* ✅.
- Third defect variant: **hub substituted for leaf** (the first two being wrong-locality and
  wrong-service, per `FINDING-cannibalization.md`).

**No content change in §5 is worth shipping before this is addressed.** A perfect page Google never
shows is worth nothing.

---

## 5. CONTENT SPEC — delta only

Every section that already exists is already ahead of the cohort. **Nothing below is a rewrite
request.** Ordered by readiness, not by value.

### S1 — `Cine vine la măsurătoare` (new, leaf + service hub)

- **Purpose:** put an identifiable human behind "Topograf autorizat ANCPI, 25+ ani". Closes G4.
- **Must answer:** who physically arrives at the property, what his qualification is, and — once
  supplied — under which ANCPI authorisation he signs.
- **Data source:** new field on `generator/data/site.json` under `nap`/a new `surveyor` object:
  `{ name, role }`. The person's name is derivable from `site.brand` ("Fleser Aurel Expert") but
  must be an explicit field, not a string split.
- **Ship now:** the name and role. **Leave a marked, empty slot** for `ancpiAuth`
  `{ seria, numar, categoria }` and render nothing when it is empty. **Never invent a number**
  (CEO ruling 0.1).
- **Cohort position:** the name is table stakes (3/6 have it); the authorisation number is an
  **uncontested differentiator (0/6)** — the only element in this whole spec where shipping puts us
  ahead of the entire cohort rather than level with it.
- **Gate:** constant across all 222 pages ⇒ 100% document frequency ⇒ **boilerplate, dropped,
  gate-safe**. Adds 0 unique words and cannot demote anything. Confirm with Team C before writing.

### S2 — `Acte necesare` branched by case type (service hub first, leaves second)

- **Purpose:** answer *"which documents for MY kind of job"* rather than a single flat list. Closes G5.
- **Must answer:** which acte apply for (a) primă înscriere intravilan, (b) primă înscriere
  extravilan / titlu de proprietate anii '90, (c) imobil moștenit, (d) construcție veche fără
  autorizație, (e) construcție nouă cu autorizație și recepție. These five map directly onto
  questions already in `faqPool` — no new subject matter is being invented.
- **Data source:** extend the **existing** `services.json.documents` from `string[]` to an optional
  `{ caseType, items[] }[]`, per service. **The per-service field already exists (§2.1); this is a
  shape change, not a new field.** Backward-compatible: keep `string[]` for the 11 services that do
  not branch.
- **Gate:** render **all** case types on **all 222** pages ⇒ service-constant ⇒ 100% ⇒
  **boilerplate, gate-safe.** Adds 0 unique words — which is fine, its value is user-facing.
  **Do NOT select a case-type subset per profile or per county:** urban is 13.5%, montan 16.7%,
  periurban 16.2%, Alba 35.1% ✅ — all land in the residual and drive overlap up. Team C ruling
  required before a line is written.
- **Budget:** ~33 KB headroom on the leaf ✅; well within it.

### S3 — FAQ block on the service hub (schema parity with its own children)

- **Purpose:** close G7 and strengthen the better of the two fallbacks Google reaches for on the
  county query.
- **Must answer:** the same questions the leaves already answer, minus every `{localitate}` and
  `{ocpi}` token — the hub is county-agnostic and must stay so.
- **Data source:** existing `services.json.faqPool` (12 entries for this service) ✅. **Select from
  it; do not resize it** — pool entries sit at ~45% document frequency, just under the boilerplate
  cliff (chair D13, SOP §4.8).
- **Selection constraint (mandatory):** exclude the entry
  `"Cât durează cadastrul și intabularea în {localitate}?"` — its answer is a BCPI turnaround
  claim, forbidden by SOP §0.2. See §6.
- **Gate:** hub pages carry only the size gate ✅. 41,723 B of 122,880 — **81 KB headroom**. Zero
  demotion risk.

### S4 — `serviceNotes` differentiation on the six named localities (chair D5, unbuilt)

- **Purpose:** close G2. Make `cadastru-si-intabulare/alba/aiud` say something
  `intabulare-teren/alba/aiud` cannot, so Google stops substituting one for the other.
- **Must answer:** what is specifically different about doing *cadastru și intabulare* — as opposed
  to any other service — in *this* locality. Not the place name in a different sentence.
- **Data source:** `loc.serviceNotes: { "<service-slug>": "<prose>" }` — **grep-verified absent
  from the entire generator** ✅. Approved D5, unbuilt.
- **Scope for this service:** `alba/aiud`, `alba/alba-iulia`, `alba/sebes` only. Three notes.
- **Gate:** genuinely per-locality prose ⇒ page-exclusive ⇒ **raises unique words, lowers
  overlap.** The single most gate-favourable change in this spec.
- **Hard constraint:** these three are all `profile: urban` (30 pages, 13.5%) ✅. Text shared across
  them lands in the residual of all 30. **Each note must be written from the locality, not from a
  template.** SOP §4.7: 3-word shingle check against every existing `localNote` and the `pages.js`
  frame pools; no run of two or more consecutive shared shingles.

### S5 — Work evidence (BLOCKED, not cancelled)

- **Purpose:** close G6.
- **Blocked on:** real photographs from Aurel. No generator work is useful until they exist.
- **Do not:** use stock imagery; invent testimonials; imitate C5's placeholder-name set.

### DO NOT ADD

- More prose of any kind (G8 — a 312-word page outranks us).
- Another FAQ on the leaves — 5–6 already exist and 0/6 competitors have any.
- Any new price figure (§6).
- Any turnaround or duration statement (§6).
- Testimonials with invented names.
- A per-county or per-BCPI-office shared block on leaves (chair D4; 35.1% and ≤9.9% ✅ — both
  residual).

---

## 6. BLOCKED BY POLICY

Per SOP §0.2, ruling 0.2 and the CEO ruling of 2026-07-29.

1. **Duration / turnaround — the "Cât durează?" answer.** brig.ro (directory) answers *"Cât durează
   procesul de intabulare?"* directly. Any remedy that matches it requires a claim about how fast
   BCPI works. **BLOCKED. Not actioned.** Note the carve-out that stays: *"răspundem de obicei în
   aceeași zi lucrătoare"* is Aurel's own reply time and is approved.
2. **Exact ANCPI tariff paid by the client.** brig.ro publishes *"336–2.100 RON"* for cadastru in
   Aiud. **BLOCKED — we do not know the figure.** Recorded as intelligence about what the customer
   has already been told.
3. **Any NEW price figure.** necesit.ro 560–810 lei; bizoo/Cadastru Maxim 300 lei; cadastru24
   300 lei + 75 lei/lot + TVA. **BLOCKED.** All of these come **exclusively from directories and
   marketplaces**, which SOP §3 Step 2 excludes from consensus.
4. **⚠ EXISTING BREACH, escalated, NOT actioned by me (SOP §4.1 single-writer).** The live
   `faqPool` answer on this service reads:
   > *"…după depunerea dosarului complet la {ocpi} **termenul obișnuit de soluționare este de
   > ordinul săptămânilor. Contra taxei de urgență ANCPI, termenul se reduce semnificativ.**"*

   That is a BCPI turnaround claim, forbidden verbatim by SOP §0.2. Measured prevalence:
   **96 pages** ✅ carry `termenul obișnuit de soluționare`. It lives in
   `services.json → cadastru-si-intabulare.faqPool[1]` ✅. **Remedy is an in-place reword of one
   answer, which is a different operation from resizing the pool** — D13 bans resizing, not
   rewording — **and needs a Team C gate ruling and an assigned owner before anyone touches it.**
   S3 above avoids propagating it by excluding that entry from the hub selection.

### Not blocked — the price question is moot for this service

My brief said *"never propose displaying prices"*. SOP §0.2 and the CEO ruling say the existing
hedged orientative ranges are **approved, live on 1,526 pages, and proposing their removal is
itself an anti-pattern (SOP §6)**.

**Resolution, identical to the previous stage and independently confirmed here: propose no new
figure, propose no removal.** The cohort makes it moot — **0/6 surveyors publish any price** and
3/6 explicitly say cost-per-project (C1: *"Costurile se calculeaza in functie de specificul
lucrarii"*; C6: *"Preturile sunt calculate pentru fiecare proiect in parte…"*). There is no
competitive pressure in either direction. `priceTable` stays exactly where it is (§2.4). **Chair to
confirm.**

---

## 7. DATA REQUIRED FROM GENERATOR

### Exists today ✅

| Field | Location | Feeds |
|---|---|---|
| `documents` (5 items, **per service**) | `services.json` | Acte necesare — §2.1 corrects the prior stage |
| `process` (5 steps) | `services.json` | Cum decurge procesul |
| `faqPool` (12 entries) | `services.json` | FAQ + FAQPage schema; **contains the §6.4 breach** |
| `introVariants` (8, keyed by profile) | `services.json` | situation-led intro |
| `priceRange`, `priceTable` | `services.json` | leaf range; table renders on the hub only ✅ |
| `hubIntro`, `metaDescription`, `related` | `services.json` | hub + head |
| `localNote`, `villages`, `ocpiOffice{name,address}`, `profile`, `countyNotesRef`, `nearby`, `lat/lon`, `matrix`, `distanceKmFromAiud` | `localities/alba.json` | all per-locality content; `aiud.distanceKmFromAiud = 0` ✅ |
| `nap{name,street,city,county,phone,email,hours}`, `whatsapp.greetings`, `trustStats`, `priceDisclaimer`, `deplasareNote` | `site.json` | contact, CTA, disclaimers |

### Missing — must be added before the matching section can ship

| Field | Owner file | Blocks | Gate class |
|---|---|---|---|
| `surveyor { name, role }` | `site.json` | **S1** | 100% ⇒ boilerplate ⇒ safe |
| `ancpiAuth { seria, numar, categoria }` — **empty slot, render-nothing-when-blank** | `site.json` | **S1** | 100% ⇒ safe · **CEO ruling 0.1: never invent** |
| `documents` as `{ caseType, items[] }[]` (shape change, field exists) | `services.json` | **S2** | 100% if all case types on all 222 ⇒ safe |
| `loc.serviceNotes { "<service-slug>": "<prose>" }` — **0 occurrences in generator** ✅ | `localities/*.json` + `lib/pages.js` | **S4** | per-locality ⇒ page-exclusive ⇒ **raises unique words** |
| FAQ render on the service hub | `lib/pages.js` (hub branch) | **S3** | hub = size gate only ⇒ safe |
| `/servicii/<service>/<county>/index.html` route — **0 exist for any service** ✅ | `build.js` | **G1 / chair W1** | new hubs, size gate only |
| Portfolio image slots | `site.json` or `localities/*.json` | **S5** | blocked on real assets |

---

## 8. Verification gate for anything built from this spec

Every change, one at a time, no exceptions (SOP §4.3):

```
node generator/build.js && node generator/verify.js && node research/seo-2026-07/check-demotions.js
```

All three must exit 0. The demotion guard compares **key sets, not counts** — baseline is **0**,
its strictest setting. Rescues perturb the whole 222-page group in both directions, so a falling
count can still hide a destroyed live page. **Never trust the count; only the key set.** Stage exact
pathspecs; never `git add .`; do not push.

---

## 9. What this does not establish

Six surveyor pages across two of four queries is a small cohort, and two queries produced none at
all — no consensus exists for `cadastru sebes` or `cadastru aiud`. Competitor word counts are
summariser estimates, LOW confidence throughout. `gistopocad.3x.ro` — 312 words, Microsoft
Publisher VML, no HTTPS, no `tel:` links — ranks **#6**. Whatever decides these positions is not
on-page quality, and this method cannot see it.

`cadastru sebes` is separately suspect: 9/10 aggregators, of which 4 are extras-CF intermediaries,
plus primariasebes.ro on PNCCF. Google reads that query as *"where is the BCPI office / how do I
get a document"*, not *"who measures my land"*. **Winning it may mean winning traffic that never
becomes a job. Recorded, not recommended.**

Every gap above is a **ranked hypothesis**. The measurement gate is Google Search Console on
**2026-08-19**, and for this service the metric that matters is not position — we already rank #7
twice — it is **which URL Google serves**.
