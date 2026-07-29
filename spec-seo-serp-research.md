# Spec — SERP research & transactional-query optimization (Alba cadastru/intabulare)

**Date:** 2026-07-29
**Site:** expert-intabulare.ro (Fleser Aurel Expert PFA, Aiud, Alba)
**Status:** design approved by CEO 2026-07-29; supersedes nothing
**Related:** `spec-seo-expansion.md` (architecture), `spec-redesign-v2.md` (design system)

---

## 1. Goal

Improve ranking for **transactional** Romanian queries in the cadastru/intabulare vertical
for Alba county — queries typed by someone ready to hire a surveyor, not someone researching.

Explicit non-goal: head terms at national scale (e.g. bare "cadastru si intabulare").
The domain went live 2026-07-28. On-page work cannot win those on a days-old domain
regardless of quality; that needs time, links, and Google Business Profile maturity.

## 2. Context and constraints

- 1,360+ pages live; 2,003 emitted by the current build (see `generator/build-report.txt`).
- 927 service x locality pages are **generated**, not authored. Editing `docs/` HTML directly
  is invalid — the next `node generator/build.js` overwrites it.
- Anti-doorway gates in `generator/lib/gates.js` bound what content changes are safe.
- Contact is WhatsApp-only per CEO order. No email forms. Do not introduce any.

### 2.1 Gate behaviour (verified by reading `gates.js`, not assumed)

- **Data gate:** locality needs `matrix != "hub-only"` AND >=5 of 7 data slots filled.
  Currently 0 demotions from this gate.
- **Render gate:** >=120 page-exclusive words AND <=70% pairwise 3-shingle overlap
  AND <=60KB leaf size.
- **Boilerplate is excluded from the overlap denominator.** Any 3-word shingle present in
  >=50% of the sibling group is dropped from the residual before overlap is computed.
  Consequence: a block added *identically* to all siblings becomes boilerplate by
  definition and does **not** raise the overlap number. The earlier assumption that
  template-wide additions risk mass demotion was wrong.
- **Real constraints for template work** are therefore: the 60KB leaf byte cap, and the
  fact that identical blocks add zero page-exclusive words (they neither help nor hurt
  the >=120 floor).
- **Genuine risk to watch:** a *partially* varied block (e.g. text varying only by locality
  name) may fall below the 50% boilerplate threshold, land in the residual, and inflate
  overlap. Any new block must be either fully constant or substantively per-locality —
  not cosmetically varied.

### 2.2 Standing opportunity (quantified, independent of research)

`generator/build-report.txt` records **92 render-gate demotions** — pages built but never
emitted. The majority fail the unique-words floor by a hair:

| Page | Unique words | Floor |
|---|---|---|
| `cadastru-si-intabulare/mures/bagaciu` | 119 | 120 |
| `intabulare-teren/alba/craciunelu-de-jos` | 119 | 120 |
| `intabulare-apartament/alba/cut` | 119 | 120 |
| `dezmembrare-alipire/sibiu/bazna` | 119 | 120 |
| `plan-topografic/alba/craciunelu-de-jos` | 119 | 120 |

Adding genuinely per-locality text recovers dozens of these as indexable pages. This is
free inventory and is in scope.

## 3. Data sources

**In scope:** live Google SERPs (Romanian locale, Alba geo) via the CEO's logged-in Chrome;
Google autocomplete; People Also Ask; related searches.

**Out of scope for this pass** (CEO chose approach A): Ahrefs Site Audit. Ahrefs free
(Webmaster Tools) has no Keywords Explorer and no competitor Site Explorer, and no API
below Enterprise — its value here was technical audit only, deferred.

**Deferred, not dropped:** Google Search Console. It is verified but holds ~no data on a
days-old site. Revisit ~2026-08-19 (3 weeks) as the measurement gate in section 8.2.

## 4. Query selection

Target ~12 queries, derived rather than guessed:

1. Seed from the 8 services x commercially serious Alba localities: Aiud, Alba Iulia,
   Blaj, Sebes, Cugir, Teius.
2. Expand each via autocomplete / PAA / related searches to capture real phrasings:
   `pret`, `acte necesare`, `cat dureaza`, `topograf autorizat`.
3. Filter to transactional intent only. Informational variants are `/ghid/` territory and
   are excluded from this pass.

## 5. SERP capture

Per query, record separately:

- **Map pack** composition and owners.
- **Organic top 10**.
- **PAA questions** and **related searches**.

Map pack and organic are tracked separately and never conflated: map-pack position is
driven by Google Business Profile signals (category, proximity, reviews, photos), not by
page content. Page-content work cannot move it, and conflating the two would produce
recommendations that cannot work.

## 6. Competitor extraction

Deep-extract the **top 5 organic pages per query** (~40-50 unique pages after dedupe)
into one fixed schema, so findings are comparable rather than anecdotal:

| Field | Notes |
|---|---|
| `word_count` | content region only, excluding chrome |
| `heading_outline` | H1-H3 |
| `subtopics` / `entities` | what the page actually covers |
| `price_disclosure` | none / range / exact |
| `acte_necesare` | present, and how itemised |
| `duration_claim` | stated turnaround, if any |
| `faq_present` | and question count |
| `schema_types` | schema.org markup emitted |
| `internal_links` | pattern and volume |
| `trust_signals` | ANCPI authorization no., reviews, photos, named person |

## 7. Gap analysis and output

Per query, diff competitor consensus against our equivalent page. Output is a **ranked list
of gaps tagged with confidence**:

- *High confidence* — near-unanimous, mechanically checkable
  (e.g. "8/10 top results state a price range").
- *Low confidence* — correlational only
  (e.g. "top result has 2,400 words vs our 900"; length correlates with rank without
  causing it).

Findings ship as **ranked hypotheses, never as a guaranteed ranking recipe.** SERP analysis
shows correlation, not causation. On a days-old domain a large share of the gap is domain
authority and age, which no on-page edit addresses. Each finding states plainly whether it
is expected to move rankings or is merely table stakes.

## 8. Applying changes

Strategy: **flagship pages first, then template** (CEO decision).

### 8.1 Flagships

Six pages, selected **from the research results** — not preselected. Improvements land in
the data layer, never in `docs/`:

- `generator/data/localities/alba.json` — per-locality fields (`localNote`, `villages`,
  `ocpiOffice`, `nearby`, ...)
- `generator/data/services.json` — `introVariants`, `faqPool`

Then rebuild.

### 8.2 Promotion to template

Only patterns **proven on flagships** are promoted into the generator for all 927 pages.
The GSC check at ~2026-08-19 is the measurement gate that decides what gets promoted.

### 8.3 Verification gate (every change, no exceptions)

```
node generator/build.js && node generator/verify.js
```

Both green, AND the render-gate demotion count in `build-report.txt` must go **down** from
the current 92 — never up. A change that increases demotions is reverted, not argued with.

## 9. Out of scope

- Email forms / contact forms of any kind (WhatsApp-only standing order).
- Other verticals: `/parcuri-fotovoltaice/`, `/fonduri-europene/`, `/teren-agricol/`.
- Link building, GBP optimization (noted where relevant, but not executed here).
- Any edit to files under `docs/` by hand.

## 10. Known risks

- Google may serve a CAPTCHA during SERP capture; the CEO clears it manually.
- ~50 page fetches through the browser makes this a long session.
- SERP composition is a snapshot and drifts; findings carry their capture date.
