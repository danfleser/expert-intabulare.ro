# Delivery tracker — SEO expansion to ~1,408 pages (expert-intabulare.ro)

Spec: `spec-seo-expansion.md` (chair verdict, binding). Rule: a box is ticked **only when the pages are live on https://expert-intabulare.ro and verified** (HTTP 200 + content spot-check), not when the code exists.

## CEO order (summary)
1–2k SEO pages: service × locality matrix, EU-funds vertical, solar/PV vertical, 263-term dictionary, 25 English pages, sitemap for everything, WhatsApp contact site-wide (no email forms), commit + push → live on GitHub Pages, goal: #1 on Google.

## Slices

- [x] **Slice 0 — Spec + tracker at repo root** (this commit)
- [x] **Slice 1 — Data + engine (9 parallel agents, disjoint territories)**
  - [x] G1 `generator/` core: build.js, verify.js, lib/, 10 templates, partials (incl. cta-whatsapp), site.json, UAT register snapshots
  - [x] G2 geo data: `generator/data/localities/*.json` (163 UAT records, 7 uniqueness slots each) + `counties.json`
  - [x] G3 services: `generator/data/services.json` (12 services, ≥6 intro variants each, ~30-question FAQ pools)
  - [x] G4 guides: `generator/data/guides/*.json` (20 /ghid/ pages)
  - [x] G5 EU funds: `generator/data/verticals-fonduri/*.json` (54 authored pages)
  - [x] G6 solar: `generator/data/verticals-solar/*.json` (61 authored pages)
  - [x] G7a dictionary A–K (~135 definitions) / G7b dictionary L–Z (~128 definitions)
  - [x] G8 English: `generator/data/english/*.json` (25 pages) + `hreflang.json`
- [x] **Slice 2 — Homepage edit (G9, solo, own commit)**: Formspree → WhatsApp textarea widget, nav dropdowns, Zone section, footer links; before/after screenshots; #anchors untouched
- [x] **Slice 3 — Full build + verify**: `node generator/build.js` → ~1,408 pages + sitemap index + 7 section sitemaps + robots.txt; `node generator/verify.js` all-green (links, uniqueness gates, diacritics, WhatsApp lint, hreflang reciprocity, sizes). No push while red.
- [x] **Slice 4 — Staged commits C1→C6 + push waves** (explicit pathspecs, never `git add .`): C1 generator+tracker · C2 homepage + /en/index · C3 hubs+/zone/+/ghid/+robots+sitemap-core · C4 /servicii/ Alba · C5 tier-2 + /fonduri-europene/ + /parcuri-fotovoltaice/ · C6 /dictionar/ + /en/ + sitemap index. Each wave: push → poll Pages build → curl 10 live URLs.
- [x] **Slice 5 — Closeout**: live sitemap fetch, 3 live page renders, CEO handoff doc (Google Search Console steps, re-run instructions), tick this tracker, final report.

## User stories (ticked when live)
- [x] Landowner googling "«serviciu» «localitate»" lands on a locality page with OCPI office, acte, price range, WhatsApp prefilled with service+locality
- [x] Company with EU-funds project finds problem/deliverable pages under /fonduri-europene/ and contacts via WhatsApp at any hour
- [x] Solar developer finds lifecycle/problem pages under /parcuri-fotovoltaice/ and can send CF extracts in the WhatsApp thread
- [x] Person googling a CF term gets a plain-Romanian definition + related terms + service CTA (263 doors)
- [x] Foreign investor lands on /en/ pages (hreflang-routed), full English chrome, English WhatsApp prefill
- [x] Every one of the ~1,408 pages is in the sitemap index and returns HTTP 200 live
- [x] Zero email forms anywhere; WhatsApp + tel: on every page

## CEO questions (defaults applied, reversible — answer any time)
1. Cluj-Napoca basin pages (Cluj-Napoca, Florești, Apahida, Gilău) — default: KEPT.
2. Orientative price ranges shown — default: YES (ranges only).
3. Deplasare sentence: "Deplasare inclusă în județul Alba; în județele învecinate se calculează în funcție de distanță." — correct if wrong.

## Stage 2 (explicitly out of scope now)
Server hosting + Resend email, form backends, GSC ongoing monitoring/pruning loop.

## Redesign (2026-07-28, second delivery — spec-redesign.md)
- [x] Trust & Authority visual system live site-wide: navy/blue, green WhatsApp CTAs, Poppins headings
- [x] 1,357 generated pages on new lean site.css (8.4KB gz vs ~130KB gz before); homepage −197KB JS, preloader/animations removed
- [x] Homepage: typographic hero + credential chips + path band + static review grid; sticky mobile WhatsApp bar site-wide
- [x] verify.js green, visual review 30+ screenshots, live checks passed
