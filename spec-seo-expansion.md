# FINAL — CHAIR VERDICT (binding for the build)

Chair read: facts.md (incl. BINDING CEO addendum — WhatsApp CTA site-wide, no email forms), r1-teamA/B/C/D, r2-teamA/B/C/D. Every contradiction between those files is ruled below. No "both options stay open" anywhere. Where a team's r2 conflicts with this document, this document wins.

---

## 1. Solution at a glance

- **Total: 1,408 planned pages** — inside the CEO's 1,000–2,000 mandate. Hard floor if the anti-doorway gate demotes every neighbor-county page: **1,068** (mandate still met).
- **Namespaces (frozen):** `/servicii/` (12 hubs + locality pages), `/zone/` (5 county hubs), `/ghid/` (20 guides), `/fonduri-europene/` (54), `/parcuri-fotovoltaice/` (61), `/dictionar/` (263 terms + index), `/en/` (25). Root keeps index.html, privacy, terms.
- **Geo matrix:** Alba county complete — 78 localities × 8 services = 624 pages. Neighbor counties (Cluj, Mureș, Sibiu, Hunedoara) 85 localities × 4 field services = 340 pages, drive-time gated, Cluj-Napoca basin included (reversible — CEO Q1).
- **Verticals:** EU-funds (54 hand-written pages: program guides, deliverables, rejection/problem pages, checklists) + solar/PV (61 hand-written pages: lifecycle, cadastru/legal, problems, segments). Zero geo clones — one geo system, Team A's.
- **Dictionary:** 263 Romanian terms at `/dictionar/<slug>.html` + A–Z index, each 100–200 unique layperson words, DefinedTerm schema, mandatory CTA link to a service hub.
- **English:** 25 hand-written investor-intent pages under `/en/` (18 hreflang-paired with RO counterparts, 7 EN-only), one EN glossary page instead of a translated dictionary. hreflang `ro` / `en` / x-default=RO.
- **WhatsApp CTA site-wide (CEO addendum, binding):** every page ships a static prebuilt `api.whatsapp.com/send/?phone=40741478540&text=<prefilled message>` button above the fold + before footer, `tel:0741478540` secondary. Formspree form deleted; homepage gets textarea-only WhatsApp widget. Zero email forms anywhere.
- **Anti-doorway existence gate (two stages, machine-enforced):** a locality page is emitted only if its data record fills ≥5 of 7 unique-data slots AND the rendered page has ≥120 unique words with ≤70% shingle overlap vs siblings. Failures demote to a county-hub row — never shipped thin.
- **Build:** zero-dependency Node generator (`node generator/build.js` / `verify.js`), data as JSON, deterministic output, manifest-owned files, verbatim theme header/footer, no preloader/WOW/carousel/Maps on generated pages, sitemap index + 7 section sitemaps + robots.txt.
- **Deploy:** one working session, 6 staged commits with explicit pathspecs, push waves with GitHub Pages build polling + live curl checks; homepage edit is its own reviewed commit; `git revert` rollback story intact.

---

## 2. USER FLOWS

### Flow 1 — Landowner in a village googles a local service
1. Ion from Lopadea Nouă needs his inherited land registered. On his phone he googles **"intabulare teren Lopadea Nouă"**.
2. He lands on `/servicii/intabulare-teren/alba/lopadea-noua.html` — a page specifically about his commune.
3. In the first screen, with no spinner and no waiting, he sees: the service covers Lopadea Nouă ("aprox. 12 km de Aiud"), his file goes to **BCPI Aiud**, the papers to prepare, and an orientative price range.
4. Two big buttons: green **WhatsApp** and yellow **"Sună acum"**. He taps WhatsApp → WhatsApp opens with the message already typed: *"Salut! Am nevoie de intabulare teren în Lopadea Nouă."* He hits send. Done — the CEO's phone shows exactly what the client needs and where.

### Flow 2 — Company with an EU-funds project
1. A firm near Alba Iulia wins a PNRR grant; the consultant says "we need the land registered and an OCPI-stamped plan in 3 weeks." At 11 PM the ops manager googles **"teren neintabulat fonduri europene"**.
2. They land on the problem page in `/fonduri-europene/` — realistic timeline table, what blocks eligibility, and the hook: *"Termen de depunere aproape? Scrie-ne pe WhatsApp data limită."*
3. They tap the WhatsApp button at 11 PM — the message is prefilled with their exact topic. No form, no waiting for office hours.
4. Next morning the CEO replies, gets the deadline, plans backwards from it. The consultant who sent them has their own page (`colaborare consultant fonduri europene`) — and brings the next client too.

### Flow 3 — Solar developer scouting land
1. A PV developer's project manager finds 12 hectares near Teiuș. Before paying the advance they google **"verificare suprapunere cadastrala teren"** or **"câți MW încap pe un hectar"**.
2. They land in `/parcuri-fotovoltaice/` — a page explaining that a preliminary survey costs a fraction of a bad land deal.
3. They tap WhatsApp (prefilled: *"Salut! Dezvolt un proiect fotovoltaic și am nevoie de…"*), then send the CF extract as an attachment **in the same chat** — something an email form could never do.
4. One lead becomes five contracts over 18 months: due diligence → studiu topografic → trasare piloni → as-built → monitoring, because we already hold the site data.

### Flow 4 — Person googles a dictionary term
1. Maria inherits a plot, reads "se va nota în foaia C" in a document, and googles **"ce înseamnă foaia C carte funciară"**.
2. She lands on the dictionary page: a one-sentence "Pe scurt" answer, then a plain-Romanian explanation in 100–200 words.
3. She clicks the related term "Sarcini", then sees: *"Ai nevoie de un extras de carte funciară sau de intabulare?"* with the WhatsApp button (prefilled: *"Salut! Am citit pe site despre „foaia C" și am o situație asemănătoare."*) and the phone number.
4. Three taps from a Google question to a conversation. 263 such doors into the site.

### Flow 5 — Foreign investor on the English pages
1. An Austrian fund buying a ready-to-build solar project googles **"land due diligence survey Romania"**.
2. Google shows them the English page (hreflang makes sure Romanians get the Romanian one instead). They land on `/en/solar/land-due-diligence-survey-romania.html` — fully English navigation, an English glossary explaining what a "carte funciară" is.
3. They read: local ANCPI-authorized surveyor, 25 years, 1052 projects, re-verifies documentation before you buy.
4. They tap WhatsApp — prefill in English (*"Hello! I need a land due diligence survey in Romania…"*). WhatsApp is the default business channel for international investors; no Romanian phone-etiquette barrier. Email stays in the footer for document exchange.

### Flow 6 — What happens on any WhatsApp tap
1. Visitor taps the green button on any of the 1,408 pages.
2. WhatsApp opens (app on phone, WhatsApp Web on desktop) addressed to **0741 478 540**, with a message already written that names the exact page topic — service + locality, vertical topic, or dictionary term.
3. The visitor can edit or just hit send. The CEO receives a message that already says what they need and where — no missed calls, no empty "contact me" emails, and attachments (CF extracts, photos of documents) arrive in the same thread.
4. On the homepage only: a single text box ("Scurtă descriere a situației…") + button; whatever the visitor types is appended to the greeting and opened in WhatsApp. No name field, no email field — per CEO instruction.

---

## 3. Per-discipline verdicts

### 3.1 Site architecture & URL map (FINAL)

| Namespace | Pattern | Count | Owner |
|---|---|---|---|
| Core | `/` + `privacy-policy.html` + `terms-and-conditions.html` | 3 | existing (index.html edited once) |
| Service hubs | `/servicii/{serviciu}/` (folder + index.html) | 12 | A |
| Locality pages | `/servicii/{serviciu}/{judet}/{localitate}.html` (county segment mandatory — Sânpaul exists in Cluj AND Mureș) | 624 Alba + 340 tier-2 | A |
| County hubs | `/zone/{judet}/` (folder + index.html) | 5 | A |
| Guides | `/ghid/{slug}.html` | 20 | A |
| EU funds | `/fonduri-europene/{slug}.html` (+ hub index) | 54 | B |
| Solar | `/parcuri-fotovoltaice/{slug}.html` (+ hub index) | 61 | B |
| Dictionary | `/dictionar/{slug}.html` + `/dictionar/` index | 263 + 1 | C |
| English | `/en/{services|guides|solar|eu-funds}/{slug}.html` + `/en/index.html`, `/en/service-area.html`, `/en/contact.html` | 25 | C |
| **TOTAL** | | **1,408** | |

Rules: hubs = folder/index.html with trailing-slash canonicals; leaves = `.html` files; slugs ASCII per Team C's transliteration table (ă/â→a, î→i, ș→s, ț→t, /→-, drop parentheses) — canonical for ALL teams. Self-referencing absolute canonicals on every page. Nav (final): `Servicii ▾ · Zone ▾ · Fonduri europene · Fotovoltaice (label → /parcuri-fotovoltaice/) · Dicționar · EN · Contact (#contact)`. Footer sitewide: 5 county hubs, 8 core services, /ghid/, /dictionar/, both vertical hubs. Sitemap: `/sitemap.xml` index → `sitemap-core, -servicii-alba, -servicii-vecini, -ghid, -verticale, -dictionar, -en` (D's names), real lastmod, robots.txt with Sitemap line. Schema: sitewide LocalBusiness (real NAP only), Service+FAQPage on matrix leaves, BreadcrumbList everywhere, DefinedTerm(Set) on dictionary, NO fabricated ratings.

### 3.2 Content & uniqueness rules (the anti-doorway existence gate)

Two gates, in order, both in the machine — a page that fails is demoted to a county-hub row and logged, never silently dropped and never shipped thin:

1. **Data gate (Team A's, runs first):** locality record must have `matrix ≠ hub-only` AND ≥5 of 7 slots filled: distance from Aiud (computed from lat/lon, haversine×1.3, always "aprox."), competent OCPI/BCPI office (name+address — the single most valuable local fact), component villages named in copy, county OCPI notes, profile-selected paragraph variant (≥6 per service, keyed câmpie/montan/urban/periurban, deterministic seed — adjacent localities never share a variant), FAQ selection (4–6 from a ~30-question per-service pool), nearby-localities links (5–8, real distances).
2. **Render gate (Team D's):** ≥120 unique words vs siblings, 3-word shingle overlap ≤70%, page ≤60KB raw (hubs ≤120KB), valid UTF-8 comma-below diacritics (ș U+0219, ț U+021B — cedilla variants rejected), locality names diffed against snapshots of the official UAT registers (dpfbl.mdrap.ro/{AB,CJ,MS,SB,HD}).

Vertical (115) and EN (25) pages are individually authored — the gates still apply but pass trivially. Dictionary gate: definition <100 words = build fails; duplicate slug = fail; `ctaService` missing or unknown = fail. Content honesty rules stand: real NAP only, no invented reviews/certifications/case studies, no fixed prices (ranges only — ruling g), "informativ, nu constituie consultanță juridică" disclaimer on term pages, legal details flagged verify-at-build (scoatere din circuit agricol thresholds, agrivoltaic law status, AFIR măsură names) verified by the implementer against 2026 sources.

### 3.3 Dictionary

263 terms (C's r1 list of 261 + `as-built` + `ordinul-700-2014`). Page: breadcrumb › H1 "«Termen» — ce înseamnă?" › "Pe scurt" gloss box › 100–200-word layperson definition › example › 3–6 related terms › CTA block (WhatsApp prefill with the term + tel + text link to `ctaService` hub). Top ~60 commercial-intent terms get curated CTA targets (category defaults for the rest: legal → cadastru-si-intabulare; measurement → plan-topografic; urbanism → topografie-constructii; agricol → intabulare-teren; locality-adjacent terms like tarla/plan parcelar/titlu de proprietate → intabulare-teren). Index: A–Z anchors, one-line glosses, ~1KB inline JS filter (progressive enhancement), DefinedTermSet JSON-LD, linked from every footer site-wide. No FAQPage schema on terms in V1. Team B delivers its ~40-anchor list before build; missing anchors get a term or an explicit nearest-term mapping.

### 3.4 English / hreflang

25 pages total: 18 hreflang-paired (homepage, 7 service hubs, prices guide, 8 solar pages, 1 EU-funds hub — per C's r2 table with B's exact RO counterparts) + 7 EN-only (4 buyer guides, EN glossary, service-area, contact). NO EN dictionary, NO EN county hubs, NO machine translation — investor-intent hand-written copy. hreflang values: **`ro`**, **`en`**, **x-default = the RO page**, in `<head>` of both pages, absolute URLs, bidirectional + self-referencing; verify.js enforces reciprocity. EN pages get the full EN chrome (translated nav/footer, RO/EN switcher to the exact counterpart, fallback `/`). EN WhatsApp prefills in English per page (`whatsappPrefillEn`).

### 3.5 WhatsApp CTA spec (BINDING, site-wide)

Canonical URL: `https://api.whatsapp.com/send/?phone=40741478540&text=<ENCODED>&type=phone_number&app_absent=0`. Team D's r2 §2 is the implementation contract:
- **Generated pages:** static prebuilt anchor, zero JS. Build composes per-namespace greeting + `%PAGE_TOPIC%` (from `whatsappTopic` field; `{serviciu} în {localitate}` on matrix pages; the term on dictionary pages), percent-encodes once via `encodeURIComponent` semantics (never `+` for space). Rendered as theme `btn btn-warning` + `bi-whatsapp` icon, `target="_blank" rel="noopener"`, above the fold and pre-footer; `tel:0741478540` beside it. Trust bar on vertical pages: only live-site stats (25+ ani · 1052+ proiecte · 2681+ colaborări · Autorizat ANCPI · Aiud).
- **Homepage:** Formspree block (index.html:631) deleted. Replaced by textarea + "Trimite pe WhatsApp" button, ~8 lines inline JS, runtime `encodeURIComponent`, greeting "Salut! Doresc o ofertă." + typed text. No name/email fields.
- **Email:** plain text in footer only (attachments/documents channel) — never a form.
- **Verify gates:** every generated page has ≥1 WhatsApp href with `phone=40741478540` whose `text=` decodes→re-encodes to itself; `tel:` present everywhere; **zero occurrences of "formspree" in docs/ after the homepage edit**.

### 3.6 Technical build & deploy plan

Team D's r2 contract ratified with the field-name amendments in the Decisions Log (rulings k–m):
- `generator/` at repo root (never in docs/): zero-dep Node `build.js` / `verify.js`, `{{slot}}` templates, 10 page templates + partials (incl. `cta-whatsapp`, trust-bar, deplasare-block, checklist with `@media print`, comparison-table, faq). Root-relative asset paths; verbatim theme header/footer; generated pages carry no preloader/WOW/carousel/Maps iframe/JS bundles (≤2KB inline JS); homepage keeps its full theme JS.
- Data: JSON shards under `generator/data/` (shardable per directory so parallel agents never share a file; build merges). `localities.json` is the ONE geo dataset; B and C reference slugs only; verify.js fails on unknown slugs.
- Deterministic byte-stable output; manifest-owned files only (generator can never touch index.html, CNAME, .nojekyll, css/js/img); re-run deletes stale manifest-listed pages.
- Verify (all before any push, any failure = no push): link resolution (zero tolerance), sitemap↔manifest 1:1 + legacy 3 pages, UTF-8/mojibake/comma-below scan, UAT-register diff, both uniqueness gates, WhatsApp URL lint, hreflang reciprocity, size budgets, tag balance, no `formspree|wow|preloader` strings in generated output, headless screenshots 6 templates × 375px/1440px, local http.server click-through.
- Deploy: 6 commits with explicit pathspecs (never `git add .`): C1 generator + root tracker · C2 index.html edit (WhatsApp widget, nav dropdowns, Zone section, footer) + /en/index.html · C3 hubs + /zone/ + /ghid/ + robots.txt + sitemap-core · C4 /servicii/ Alba + sitemap · C5 /servicii/ tier-2 + both verticals + sitemaps · C6 /dictionar/ + /en/ + final sitemap index. Push waves C1→C6 **in one working session**, each: push → poll `gh api …/pages/builds/latest` until built → `curl -sI` 10 live URLs. Rollback: `git revert` C2–C6. Post-launch: CEO handoff doc with GSC click-by-click (sitemap submission may be staggered over days at CEO's option — publishing is not blocked on it).

### 3.7 Effort sizing — dev agents & territories (disjoint files, no overlaps)

| Agent | Territory (exclusive files) | Scope | Weight |
|---|---|---|---|
| G1 generator | `generator/` core: build.js, verify.js, lib/, templates/, partials/, data/site.json | engine + 10 templates + verify suite | Heavy |
| G2 geo data | `generator/data/localities/*.json`, `data/counties.json` | 163 UAT records, 7 slots each, OCPI competence research, official-register validation | Heavy |
| G3 services | `generator/data/services.json` | 12 services, ≥48 intro variants, ~240 FAQ-pool entries | Heavy (critical path) |
| G4 guides | `generator/data/guides/*.json` | 20 /ghid/ pages authored | Medium |
| G5 EU funds | `generator/data/verticals-fonduri/*.json` | 54 authored pages | Heavy |
| G6 solar | `generator/data/verticals-solar/*.json` | 61 authored pages | Heavy |
| G7a dictionary A–K | `generator/data/dictionary/a-k.json` | ~135 definitions | Medium |
| G7b dictionary L–Z | `generator/data/dictionary/l-z.json` | ~128 definitions | Medium |
| G8 English | `generator/data/english/*.json`, `data/hreflang.json` | 25 EN pages + pairs | Medium |
| G9 homepage | `docs/index.html` only | nav dropdowns, Zone section, footer links, WhatsApp widget (spec from A r2 §2/D r2 §2) | Small, highest risk — own commit, before/after screenshots |

10 dev agents; G1–G8 fully parallel (no shared files), G9 starts after G1's partials exist. Team D runs build/verify/commits; main pushes.

---

## 4. DECISIONS LOG

| # | Contested point | RULING | Reason (one line) |
|---|---|---|---|
| a | Solar namespace: A r2 ratified `/parcuri-fotovoltaice/`, B r2 counter-conceded to `/fotovoltaice/`, D manifest once said `docs/panouri-solare/` | **`/parcuri-fotovoltaice/`** | Three of four teams' final artifacts (A's ratification, C's hreflang tables, D's template inventory + explicit §4.4 position) are already written against it, B's own r1 evidence coined it, and B declared the generator cost identical; `panouri-solare` is banned everywhere (B2C intent). Nav label stays "Fotovoltaice". |
| b | EN page count (26 vs 25) | **25** — C's r2 list ratified | The dropped due-diligence guide was a true duplicate of B's page; one canonical page + cross-link. |
| c | hreflang `ro-RO` vs `ro` | **`ro`** (and bare `en`, x-default=RO) | Language targeting, not country; `ro` also captures Moldova diaspora; investors are DE/AT/UK/US mixed. |
| d | Dictionary 261 vs 263 | **263** | `as-built` and `ordinul-700-2014` close real anchor gaps found in B's audit. |
| e | Team A total after B's math correction (B "est. 100–250" → 115) | **Team A block = 1,001; site total = 1,408** (624+340+17+20 A, 115 B, 264 dictionary+index, 25 EN, 3 core) | Exact arithmetic replaces estimates; floor 1,068 if the gate demotes all tier-2 — mandate holds at both ends. |
| f | Cluj-Napoca basin (Cluj-Napoca, Florești, Apahida, Gilău) | **INCLUDE all 4** (default ruling; flagged to CEO as reversible) | A page existing doesn't commit the CEO to take every job; if Cluj-Napoca is served the basin comune are on the same 90 km corridor; deleting 16 pages later is trivial. |
| g | Orientative price ranges | **PUBLISH** as "prețuri orientative" ranges from market research (flagged reversible): full tables on `/ghid/preturi…` + hubs; one-line interval (services.json `priceRange`) on locality pages | Everything that ranks in this niche shows prices; pages without them convert worse; ranges are honest, fixed prices are not. |
| h | Deplasare policy sentence (A proposed a neutral fallback) | **"Deplasare inclusă în județul Alba; în județele învecinate se calculează în funcție de distanță."** | One concrete, honest sentence beats a vague one on 340 tier-2 pages; matches the live site's "toată raza județului Alba". |
| i | B's "subcontractor pentru dezvoltatori/EPC" claim | **Softer verifiable phrasing: "colaborăm cu dezvoltatori și constructori"** (B2-49/B2-60 copy) | Positioning claim unverified against the live site; the soft form loses nothing and invents nothing. |
| j | Tier-2 existence gate details + "tier" field collision (D's tier:2 = no page vs A's Tier 2 = reduced page) | **Field renamed `matrix: "full" \| "reduced" \| "hub-only"`; two-gate pipeline (data gate ≥5/7 slots, then render gate ≥120 unique words / ≤70% shingle); failure = demotion to hub-only row + build-report log entry** | Same word meant opposite things and would corrupt data entry; both gates are cheap and catch different failure modes (hollow data vs clever templating). |
| k | County-hub URL: A r2 `/zone/{judet}/` folder vs D r2 flat `/zone/{judet}.html` (crossed concession) | **`/zone/{judet}/`** (folder + index.html) | Consistency with the frozen rule "hubs are folders, leaves are .html"; D's template table updates. |
| l | Data-shape field names diverge (C: gloss/slug/hreflangPair/whatsappPrefill vs D: shortAnswer/path/roPair/whatsappPrefillEn; A: counties.json vs D: countyNotes.json) | **Team D r2 §1.2 shapes are canonical**, amended: `matrix` replaces `tier` (ruling j); dictionary.json uses **`gloss`** (C authors it) and keeps `example`, `ctaService` REQUIRED; the county file is named **`counties.json`** with A's fields (ocpiHq, bcpiOffices, countyNote, feeNote); english.json uses D's `path`/`roPair`/`whatsappPrefillEn` | One implementer, one contract: D's file wins on structure, authors win on the fields only they populate. |
| m | WhatsApp prefill mechanism: B's per-page `waText` full sentence vs D's `whatsappTopic` + per-namespace greeting | **D's mechanism** (`whatsappTopic` field + namespace greetings, build-time encoding, static anchors); B authors the topic string per page | Same authoring effort, simpler generator, uniform behavior across all 1,408 pages; homepage widget is the only runtime-JS exception. |
| n | Launch pacing: A's "days, not weeks" staging vs CEO's "done when pushed" | **One working session, ordered pushes C1→C6** with per-wave Pages-build polling; GSC sitemap-section submission may be staggered by the CEO afterwards | Multi-day staging contradicts the binding CEO order; section sitemaps + hub-first ordering manage the sudden-growth risk; publishing and GSC submission are separable. |
| o | Sitemap layout: single file vs index | **Index + 7 section sitemaps** (D's final names: core, servicii-alba, servicii-vecini, ghid, verticale, dictionar, en) | ~30 lines of generator code buys per-section indexation monitoring in Search Console. |
| p | Homepage edit scope | **One dedicated reviewed commit (C2)** touching only: nav items, footer columns, "Zone de lucru" section, contact block (Formspree → WhatsApp textarea widget); hero/stats/services/reviews and all #anchors untouched; homepage keeps full theme JS; before/after screenshots mandatory | It is the only page that currently ranks — smallest possible diff, biggest possible scrutiny. |
| q | EN chrome: hreflang-only vs full EN template | **Full EN chrome** (translated nav/footer, RO/EN switcher to exact counterpart) | hreflang without EN navigation strands visitors in Romanian menus. |
| r | Forms | **Zero email forms site-wide; Formspree removed from index.html; WhatsApp primary + tel secondary on all pages; email as plain footer text only** | CEO addendum is binding; verify.js enforces zero "formspree" occurrences. |
| s | Vertical geo variants | **NONE** — B's 115 pages stay singular; B references A's locality slugs read-only | One geo system; geo-multiplying hand-written verticals is how doorway penalties happen. |
| t | EN dictionary / EN county hubs (A's r1 nomination) | **REJECTED** — one EN glossary page + one `/en/service-area.html` | No English search demand for county-level Romanian surveying; 261 translated stubs = textbook thin content. |
| u | Generator stack | **Zero-dependency Node, no 11ty; full theme CSS kept; no slim-CSS rewrite** | Re-runnable with stock Node forever; 412KB CSS gzips to ~60–70KB and is cached across all pages; visual drift risk outweighs bytes. |
| v | Checklist/table template components (B's r1 ask, withdrawn in r2, D built them anyway as section types) | **KEEP D's `checklist` and `table` section types** | Already specified in D's final contract, cost paid, printable checklists serve B's micro-conversion; B may still author plain HTML sections where preferred. |

---

## 5. Questions for the CEO (build does NOT block on these — defaults already applied)

1. **Do you take jobs in the Cluj-Napoca basin** (Cluj-Napoca, Florești, Apahida, Gilău — ~90 km)? **Default we're proceeding with: YES, the 4 pages exist** — a page doesn't oblige you to accept every job, and removing them later is a 5-minute change.
2. **May we show orientative price ranges** (e.g. "cadastru + intabulare teren: 1.400–2.500 lei, orientativ")? **Default: YES** — ranges from market research, never fixed prices; every competitor that ranks does this. Say the word and we strip them.
3. **Travel-cost sentence shown on neighbor-county pages:** **Default: "Deplasare inclusă în județul Alba; în județele învecinate se calculează în funcție de distanță."** Correct it if your policy differs — one sentence, applied to 340 pages.

---

## 6. Build order

Slices with disjoint file territories — no two agents ever touch the same file; the live homepage keeps working until the single reviewed C2 commit.

1. **Slice 0 — repo root docs (main):** commit spec + delivery tracker at repo ROOT (never docs/). Unblocks task #4.
2. **Slice 1 — parallel data + engine (9 agents, fully disjoint):**
   - G1: `generator/` core (build.js, verify.js, lib/, templates/, partials/, site.json) + UAT-register snapshots into `generator/data/uat-official/`.
   - G2: `data/localities/*.json` + `data/counties.json` · G3: `data/services.json` · G4: `data/guides/*.json` · G5: `data/verticals-fonduri/*.json` · G6: `data/verticals-solar/*.json` · G7a/G7b: `data/dictionary/{a-k,l-z}.json` · G8: `data/english/*.json` + `data/hreflang.json`.
   - Gate to exit slice: G1 dry-runs a 10-page sample against whatever data exists; screenshots reviewed vs live theme.
3. **Slice 2 — homepage (G9, solo):** edit `docs/index.html` per §3.5 + A's spec; add `/en/index.html` via generator data (G8's file). Before/after screenshots 375px/1440px. No other agent touches docs/ yet.
4. **Slice 3 — full build + verify (Team D):** `node generator/build.js` → all pages + sitemaps + robots.txt; `node generator/verify.js` full suite (§3.6). Failures loop back to the owning agent's territory. **No push while red.**
5. **Slice 4 — staged commits & push (D executes, main pushes):** C1 generator+tracker → C2 index.html+/en/index.html → C3 hubs+/zone/+/ghid/+robots+sitemap-core → C4 /servicii/ Alba → C5 /servicii/ tier-2 + /fonduri-europene/ + /parcuri-fotovoltaice/ → C6 /dictionar/ + /en/ + sitemap index. Explicit pathspecs only; per wave: push → poll Pages build → curl 10 live URLs → next. All in one session.
6. **Slice 5 — closeout:** live sitemap fetch + 3 live page renders; CEO handoff doc (GSC click-by-click, optional staggered section submission, "how to re-run the build" one-pager). Then, and only then, tell the CEO it is done.
