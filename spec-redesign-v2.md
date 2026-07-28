# FINAL — Chair verdict, moe-redesign2

Chair reviewed: facts.md, r1-D1/D2/D3.md, all 8 mockup screenshots at full size, AND all three
mockup-D*.html served live (python http.server + Playwright) at 375 and 1440. Live findings:
- D1: flawless at both widths; hero plan SVG renders with the "S = 1.052 m²" detail; no overflow.
- D2: renders as specced; contour texture tasteful live; h1 wraps to 4 lines at 375 (bulky but OK); no overflow.
- D3: **the mid-page header in mockup-D3-1440/375.png is a screenshot artifact of `position:sticky`
  (full-page capture renders the sticky header at scroll position), NOT a mockup bug** — live, the
  header sits correctly at top, accordions and sticky bar work, no overflow. D3 is docked only for
  shipping unproofed evidence, not for a broken build. Console: favicon 404 only (mockup-local).

---

## 1. Verdict

**WINNER: D1 — Swiss / Engineering Precision — implemented PURE, with nothing taken from D2 or D3.**

**CEO-RATIFIED, BINDING.** The CEO viewed the three mockups himself and chose mockup-D1.html
("this one i like the most") — independently matching the chair's scorecard verdict below. In a
follow-up ruling he rated D2 and D3 as rejected outright: **nothing is to be taken from them.**
The winner is fixed; the scorecard is kept as context only.

**Source of truth: r1-D1.md + mockup-D1.html. Where spec and mockup differ, the MOCKUP wins —
it is what the CEO approved.**

Why, in the CEO's own terms:
- **Trust at first sight**: the page looks like the surveyor's own deliverable — white paper, hairline
  rules, a real *plan de amplasament* drawn in the hero. A notary, a bank officer, and a 60-year-old
  landowner all read the same signal: "this person measures things for a living." No other direction
  makes the product itself the proof.
- **Fonts & colors professional**: IBM Plex Sans + Plex Mono is the typography of engineering
  documents; one ink color, one green. Nothing to distrust because there is nothing decorative to
  question.
- **Spacings**: D1 has the strictest system of the three — everything on a 4/8px grid, hairline data
  rows at fixed paddings, prose capped at 640px, a published section-by-section spacing table. It is
  the hardest of the three to make "look wrong."
- **Zero old-design DNA**: no rounded SaaS cards, no shadows, no pastel icon tiles, no navy/blue
  template dialect. D3, by contrast, keeps the *grammar* of template design (16px-radius cards, pill
  buttons, icon tiles, soft shadows) even though its palette is new — the exact class of thing the CEO
  just rejected.
- **Safest to ship**: smallest CSS delta, no texture recipes, fonts 85–104KB measured, and the best-
  executed mockup of the three (its clever details — parcel area 1.052 m², footer GPS coordinates —
  are free credibility).
- WhatsApp green as the *only* accent makes the #1 CTA unmissable — discipline that doubles as conversion.

D2 is a strong second (genuinely distinguished, best for the bank/notary audience) but its dark-serif
letterhead look risks reading "expensive city law firm" to rural landowners, its mobile hero is bulky,
and brass-on-ink is the most execution-sensitive system of the three site-wide. D3 is the most
approachable but the least distant from the template look and the softest authority signal for B2B.

---

## 2. Scorecard (context — CEO override makes the winner final regardless)

| Criterion | D1 Swiss | D2 Authority | D3 Warm |
|---|---|---|---|
| 1. Instant trust (landowners 40-70 + B2B) | **9.5** — plan-as-hero reads "licensed engineer" to every audience; white/high-contrast most legible for 60+ | 8.5 — letterhead gravitas, banks love it; dark+serif can intimidate rural landowners | 7.5 — very approachable, but authority is the softer of its two signals; B2B reads it as "nice brand" |
| 2. Spacing / rhythm (CEO explicit) | **9.5** — strictest grid; hairline rows make misalignment impossible; full spacing table | 8.5 — good editorial rhythm; 375 hero h1 4-line block is heavy | 8.5 — clean fluid section-padding clamp |
| 3. Typography + color professionalism | **9.5** — Plex Sans/Mono = engineering-document typography; 1 ink + 1 green, AAA pairs documented | 9 — Fraunces is distinguished and unmistakably not-a-template; brass needs care at small sizes | 8 — one-family calm is professional but generic-modern; gold/ochre demoted well |
| 4. Distance from old SaaS-template look | 9.5 — hairlines/mono/no-shadow is the opposite dialect | **10** — maximal distance (dark serif letterhead) | 7 — new palette, but same rounded-card/pill/tile/shadow grammar as templates |
| 5. Implementability in constraints | **9.5** — smallest CSS delta, no textures, fonts 85KB after trim, no shadows to tune | 8.5 — 78.6KB fonts (best), but contour recipes + 3-surface alternation touch more rules | 8 — fine, but site.css estimate ≤35KB raw sits closest to the 36KB cap |
| 6. Mockup execution quality | **9.5** — both widths polished; documented bug-fix iterations; smart details (1.052 m² parcel) | 9 — polished; two bugs found & fixed; mobile h1 bulk remains | 8 — live build is solid, but shipped proof screenshots contain the sticky-header artifact (unproofed evidence) |
| **Total /60** | **57** | 53.5 | 47 |

---

## 3. Grafts

**None — CEO ruling (pure D1).** D2 and D3 are rejected in full; no element, color, rule, or
treatment from either direction enters the implementation. Everything below is D1's own spec/mockup
plus pure engineering necessities styled exclusively with D1 tokens:

- *Reviews*: D1's mockup already shows 6 cards + the ghost "Vezi toate recenziile" button — kept as
  D1's own. In production that button is the `<summary>` of a `<details>` holding the other 13
  reviews (all 19 verbatim strings must stay in the DOM per the frozen-text binding — mechanics, not
  aesthetics; styled per D1: hairline, r2, no shadow).
- *Section rhythm*: implemented as `--section-y: clamp(64px, 5vw + 24px, 96px)` — the mechanical
  CSS expression of D1's published 96px-desktop / 64px-mobile rhythm, nothing more.
- *Fonts*: drop IBM Plex Mono 400, keep 500 only (≈85KB) — the trim option D1's own §6 offered.
- *Icons*: exactly the 4 new icons D1 §3 specifies (house-on-plot, plan-sheet, sync-arrows,
  document-stack), in D1's grammar: 24px grid, 1.5px stroke, `--green-deep`, 44px `--paper-2`
  legend cells, extending the existing in-code mono mask set.
- *WA CTA rule*: green is a FILL only and always carries `--ink` text (8.08:1) — D1's own §2 rule,
  restated as binding for every CTA including sticky bar and generated pages.
- *Cookie banner + Google Maps embed*: exist on the live site so they must be styled; pure D1
  tokens — banner as white card, 1px `--line-strong`, r2, ink "Sunt de acord" button; Maps embed
  below #contact, full width, 1px `--line` top hairline.

Explicitly stripped from the earlier draft: the 3px green footer top rule (a translated D2
letterhead cue — visible D2 aesthetic, gone; footer is D1's plain navy with hairline bottom bar).

---

## 4. Final unified spec

### 4.1 Token sheet (final — D1 §2 verbatim; this block IS the site.css `:root`)

```css
:root{
  /* ---------- color ---------- */
  --paper:      #FFFFFF;   /* page background */
  --paper-2:    #F4F6F8;   /* alt sections, legend cells, table header rows */
  --ink:        #16232C;   /* primary text   16.02:1 on paper (AAA) */
  --ink-2:      #475763;   /* secondary text  7.47:1 on paper (AAA) */
  --navy:       #0C2233;   /* dark bands: stats, footer */
  --navy-2:     #14344C;   /* hover of ink/navy fills */
  --mist:       #E8EEF3;   /* text on navy   13.89:1 (AAA) */
  --mist-2:     #9FB1BE;   /* muted on navy   7.36:1 (AAA) */
  --line:       #D9E0E5;   /* hairlines on light */
  --line-strong:#B7C3CC;   /* input/button borders */
  --line-inv:   rgba(255,255,255,.16);   /* hairlines on navy */
  --green:      #25D366;   /* WhatsApp — FILLS ONLY, ALWAYS --ink text (8.08:1) */
  --green-deep: #0E7A3D;   /* icon strokes, hover borders (5.43:1) */
  --green-ink:  #0A5C30;   /* green as text on white (8.12:1) */
  --green-tint: rgba(37,211,102,.07);    /* parcel fill, row hover */
  --amber:      #DB9A20;   /* review stars ONLY */

  /* ---------- type ---------- */
  --font-sans:"IBM Plex Sans",-apple-system,"Segoe UI",sans-serif;  /* 400/600/700 */
  --font-mono:"IBM Plex Mono",ui-monospace,monospace;               /* 500 only (D1 §6 trim) */
  /* h1 clamp(34px,5vw,54px)/1.12 600 ls-.015em (max 16ch) · h2 clamp(26px,3.2vw,36px)/1.2 600
     h2s clamp(22px,2.4vw,28px)/1.25 600 · h3 20/1.4 (cards 18/1.35) 600
     lead 18/1.6 ink-2 · body 16/26 400 · small 15/1.6 · list 14.5/1.55 · caption 13.5
     stat numerals mono 500 clamp(40px,4.5vw,56px)/1.0
     overline mono 500 12/1 ls.14em uppercase + 24px rule-dash
     micro-mono 11-12/1 ls.05-.1em (counts, breadcrumbs, coords) */

  /* ---------- spacing ---------- */
  --s-1:4px; --s0:8px; --s1:12px; --s2:16px; --s3:24px; --s4:32px;
  --s5:40px; --s6:48px; --s7:64px; --s8:80px; --s9:96px; --s10:120px;
  --section-y: clamp(64px, 5vw + 24px, 96px);   /* D1's 96/64 rhythm as one fluid knob */
  /* head→content 48/40 · overline→h2 16 · h2→lead 16 · card pad 32/24 · card stack gap 16
     grid gaps: cards 24, panels 32, hero cols 80 · data rows 9-16px pad + 1px hairline */
  --container:1160px; --gutter:20px;   /* 32px ≥960px */
  --prose:640px;
  --radius:2px;                        /* no shadows ANYWHERE */
}
```

### 4.2 Component list (D1 §3 verbatim; mockup-D1.html wins on any divergence)

- **Wordmark** — in-code SVG: ink square (r2) + benchmark triangle + green dot; `TOPO` 700/`EXPERT`
  400 + mono `CADASTRU · TOPOGRAFIE`. Footer variant in `--mist`. Yellow PNG unreferenced (stays on disk).
- **Header/nav** — sticky white 64px, 1px `--line` bottom; hover `--paper-2` fill; ink Contact button;
  hairline dropdown panels (no shadow); 44px burger.
- **Hero** — 7/5 grid, plan-de-amplasament SVG right (hidden <960px), green WA CTA (**ink text**) +
  ghost tel, mono "sau lasă-ne un mesaj" link.
- **Data strip** — 3-cell hairline table (ANCPI dot · 25+ · 1052+); stacks to rows on mobile.
- **Path band** — bordered 3-cell routing table, mono green 01/02/03 indexes, `--green-tint` hover.
- **Stats band** — navy full-bleed, mono 56px white numerals + superscript green `+`, hairline table.
- **Service cards** — hairline cards r2, 44px legend-cell icons; the 4 new icons per D1 §3
  (house-on-plot, plan-sheet, sync-arrows, document-stack), 1.5px stroke `--green-deep`.
- **Index panels** — `<details open>` 2×2, mono counts ("18 poziții"), ruled rows, green tick dashes.
- **Review cards** — hairline r2, amber stars, no avatars; 6 visible + ghost "Vezi toate recenziile"
  exactly as in mockup-D1; in production the button is a `details` summary holding the other 13
  (all 19 verbatim in DOM — frozen-text mechanics).
- **Zone** — 44px hairline chips + hairline-topped resource-links row.
- **Contact** — `--paper-2`, 5/7 grid, hairline data table left, mono-labeled textarea + full-width
  green WA button (ink text) right. Maps embed below, full width, 1px `--line` top hairline.
- **Footer** — navy per D1: 4 cols, mono column heads, GPS coordinates line, hairline-topped legal
  bar. (No colored top rule — plain D1 footer.)
- **Sticky mobile bar** — white, 1px `--line` top, green WA (ink text) + ghost "Sună", 48px, safe-area.
- **Cookie banner** — white card, 1px `--line-strong`, r2, ink accept button (pure D1 tokens).

### 4.3 Homepage section order (anchors preserved)

Header → Hero(+data strip) → Path band → **#stats** → **#services** (4 cards + 4 index panels) →
**#reviews** (6 + expander) → Zone de lucru → **#contact** (+ Maps) → Footer → sticky bar.
Per-section 375/1440 spacing exactly per D1 §4 table, with `--section-y` substituted for the 96/64 pairs.

### 4.4 Generated pages (1,357) — concrete deltas vs current v1 site.css

1. **Token block swap** (`:root`): navy `#0F172A`→`#0C2233`-family ink system; accent `#0369A1`
   DELETED (no blue anywhere); fonts system/Poppins → Plex Sans/Mono; add spacing/`--section-y`/
   `--prose`/`--radius` tokens. Radius tokens →2px; **all box-shadow declarations removed**.
2. **Page hero**: stays white (not banded); breadcrumb → mono 12px ls.05em; h1/lead capped `--prose`;
   local trust facts → the data-strip component.
3. **Trust bar partial** → navy stats-band treatment (mono numerals, green `+`).
4. **Tables** → hairline borders, `--paper-2` header row, mono 500 right-aligned numeric cells,
   overflow-x wrapper kept.
5. **FAQ** → index-panel pattern (`details`, hairline rows, green tick dashes, mono counts optional).
6. **Cards/lists** → service-card + index-panel patterns (r2, hairline, no shadow).
7. **CTAs/sticky bar** → green fill + ink text everywhere (D1 §2 rule); ghost tel.
8. **Header/footer** (via chrome.js): SVG wordmark, footer coordinates line per D1.

### 4.5 Font loading plan

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=IBM+Plex+Sans:wght@400;600;700&display=swap" rel="stylesheet">
```
Measured payload: Plex Sans 400/600/700 latin 40.2KB + latin-ext 25.9KB (shared file pair) + Plex
Mono 500 ≈18.9KB → **≈85KB woff2** (cap 120KB). latin-ext covers ș/ț (verified in mockup renders).
`display=swap`; fallback stacks in tokens keep CLS sane.

### 4.6 Byte estimates

| Asset | Now (v1) | Target | Gate |
|---|---|---|---|
| site.css | 32.6KB raw / 8.4KB gz | ≤30KB raw / ≤8.5KB gz (replace, don't append) | ≤36KB / ≤9KB |
| home.css (new) | — | ~5KB raw (hero figure+caption, path band, review grid+expander, contact split) | none (homepage ungated) |
| Homepage payload | ~496KB SaasBox CSS + style.css + overrides | **0KB of it** — site.css + home.css + ~2.2KB inline hero SVG | none |
| Fonts | Poppins mix | ≈85KB woff2 | ≤~120KB |
| Leaf pages | pass | +1–2KB HTML (wordmark/data-strip markup) | ≤60KB ✓ |
| Dicționar hub | pass | CSS-only recolor | <120KB ✓ |

---

## 5. Implementation slices (territories — no shared files across slices)

- **B1 — site.css retokening + component restyle.** Owns `css/site.css` only. Implements §4.1 tokens
  + §4.4 items 1–7. Must keep ≤36KB raw/≤9KB gz (target 30/8.5). Deliverable: rebuilt site.css; run
  generator rebuild to propagate; verify.js green.
- **B2 — homepage rebuild.** Owns `docs/index.html` + new `css/home.css`. Rewrites index.html from
  scratch on site.css+home.css per §4.2/§4.3 (mockup-D1.html is the reference implementation — port
  its markup, swap inline CSS for the shared tokens — a faithful port, no additions). SaasBox bundle
  (all-css-libraries.css, style.css, home-redesign.css) dropped from the homepage; old files stay on
  disk unreferenced. Check legal pages (politica-de-confidentialitate etc.): if they reference the
  old bundle, re-point them to site.css with a minimal prose layout. All frozen text verbatim from
  live-home-text.txt; anchors + nav structure intact; Maps embed + cookie banner per §3/§4.2
  (pure D1 tokens).
- **B3 — generator chrome.** Owns `generator/` (templates, partials, chrome.js) + icon set.
  SVG wordmark in header/footer partials, footer coordinates line, data-strip partial,
  FAQ index-panel markup, +4 icons per D1 §3. Rebuild all 1,357 pages after B1's
  site.css lands (B3 coordinates with B1 on class names BEFORE both start — agree the contract first,
  then work in parallel).
- **B4 — verify + screenshots gate.** Runs after B1–B3: verify.js (leaf ≤60KB, hub <120KB, site.css
  caps), then live screenshots at 375+1440 of: homepage (full), one service leaf, one zone hub,
  dicționar hub, one EN page. Checks: no horizontal overflow, sticky bar targets ≥44px, focus-visible,
  ink-on-green everywhere, ș/ț rendering, spacing rhythm vs §4.1. Reports pass/fail per page; failures
  go BACK to the owning slice.

**Retry rule (binding): dead agents get resumed/respawned to finish their own territory — never
absorbed by main.** A slice is done only when B4 signs it off.

---

## 6. CEO questions

**None.** The CEO chose mockup-D1.html after viewing it, and the mockup already contains the two
decisions that would have been questions: the new ink+green SVG wordmark (yellow PNG retired,
amber only in review stars) and the 6-reviews + "Vezi toate recenziile" expander (all 19 verbatim
in the DOM). His approval of the mockup covers both; implementation proceeds on those defaults.
