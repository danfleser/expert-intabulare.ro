# FINAL VERDICT — Chair ruling, moe-redesign (expert-intabulare.ro)

Chair has read: facts.md, design-system.md, r1-teamV.md, r1-teamP.md, r1-teamT.md, r2-teamV-response.md, r2-teamP-response.md, r2-teamT-response.md. Every contested point is ruled below — no option is left open. Chronology rule applied throughout: a team's r2 position supersedes its r1 position; where two r2s crossed in the mail (each answering the other's r1), the chair rules the collision explicitly in the Decisions Log.

---

## 1. Solution at a glance

- The whole site — homepage plus all 1,357 generated pages — moves from the purple/yellow SaasBox template look to a **navy/blue "Trust & Authority" system** (#0F172A navy structure, #0369A1 blue accents) that reads like a land-registry office, not a startup template.
- **One loud color: WhatsApp green.** Every WhatsApp button is iconic green #25D366 with dark green-black text (AAA contrast 7.5:1). Green means WhatsApp, always and only. Yellow survives only as heritage accent (logo, stars, trust-bar separators, footer wordmark).
- **Poppins 600/700 for headings and buttons; system fonts for body.** One small Google Fonts request (~40–50KB, non-blocking, latin-ext for ș/ț), instead of two families × many weights.
- **The cartoon surveyor, the preloader spinner, and all entrance animations are gone.** Typographic hero with credential badges (Autorizat ANCPI · 25+ ani · 1052+ proiecte) and the WhatsApp/tel button pair.
- **Path cards under the homepage hero** ("Sunt proprietar…" / "Fonduri europene" / "Parc fotovoltaic") route the three audiences in one tap — the Enterprise Gateway signature move.
- **Sticky mobile bottom bar** on every page (<992px): WhatsApp + phone number, always one thumb-tap away; auto-hides while the hero's own buttons are on screen.
- Reviews: **carousel replaced by a static grid** — 6 visible, the other 13 one tap away, all 19 verbatim in the page.
- **Generated pages drop from ~65KB blocking CSS + 112KB icon font to one ~9KB (gzipped) stylesheet** with icons embedded as SVG masks — pages paint styled near-instantly on rural 4G.
- Homepage keeps its theme bundle in V1 plus a small override layer (~12–14KB) — but loses 197KB of animation JavaScript.
- One atomic, one-command-revertible commit; text content byte-for-byte unchanged; verify.js gates stay green with unchanged budgets.

---

## 2. USER FLOWS

**Flow 1 — Landowner on a phone (Maria/Ion, mid-range Android, from Google).**
1. Before: lands on "intabulare teren Lopadea Nouă", stares at partially-styled text while ~65KB of CSS blocks and icons pop in late; sees purple-tinted headings and three identical yellow buttons; the breadcrumb sits under the title; the number is hidden behind a button.
2. After: the page paints styled after ~9KB. At the top: breadcrumb, the page title, one muted line "Autorizat ANCPI · 25+ ani experiență", then two buttons — **green with the WhatsApp logo** ("Scrie-ne pe WhatsApp") and **white showing the actual number "0741 478 540"**. Title and both buttons fit above the fold on a 360×640 screen (verified by arithmetic, re-verified by screenshot).
3. She taps WhatsApp in under 5 seconds; the message is pre-filled with her service and village. If she scrolls to read the "acte necesare" checklist (boxed card, green checks) or the tap-to-open FAQ, a slim fixed bar at the bottom keeps WhatsApp and the phone number one thumb-tap away — the bar politely disappears whenever the page's own buttons are already on screen.

**Flow 2 — PV-park developer on desktop (Andrei, project manager).**
1. Before: homepage opens with a fake loading spinner, then a cartoon surveyor and animated counters.
2. After: no spinner, no cartoon. A sober navy headline, credential badges, and under the hero the card **"Dezvolt un parc fotovoltaic"** takes him straight to the vertical hub.
3. On the hub, technical content sits left; the contact card **stays in view (sticky) on the right** while he reads. His 30-second conclusion: serious, specialized, easy to reach.

**Flow 3 — What changed on every one of the 1,357 generated pages.**
1. Breadcrumb moves above the title (standard convention); a one-line credential strip appears under it; top padding shrinks so content starts higher.
2. All buttons, cards, tables, FAQ boxes, checklists, badges, footer, and cookie bar re-render in the navy/blue system; the footer shows a CSS-drawn TOPO/EXPERT wordmark on navy.
3. The header's right button becomes a quiet navy "WhatsApp" button that opens WhatsApp directly (no detour through the homepage contact section).
4. The sticky mobile bar is added; the contact sidebar becomes sticky on desktop; wide tables scroll inside their own container.
5. The text of every page is byte-for-byte unchanged — Google sees the same content, lighter and faster.

**Flow 4 — What got faster.**
1. Generated pages: render-blocking CSS 64.6KB → ~9KB gzipped (−86%); the 112KB icon font no longer loads at all (−100%); first-visit styling bytes drop ~70%, repeat pages ~95% (one cached file).
2. Homepage: preloader deleted (content appears immediately) and 197KB of JavaScript removed; sticky header and cookie alert survive on ~0.8KB of inline script.
3. Rollback, if ever needed: one `git revert`, live in about a minute.

---

## 3. Per-discipline verdicts

### 3.1 Visual system (Team V — r1 §A/§B as amended by r2)

**Tokens (final):** V's r1 token sheet is adopted **verbatim as the paste-ready source for A1**, with these r2 amendments applied:
- `--font-heading: "Poppins", "Segoe UI", system-ui, -apple-system, Roboto, Arial, sans-serif;`
- `--font-body: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;` (Open Sans CUT)
- `--color-warn-soft` / `--color-success-soft` dropped from site.css (unused on generated pages; home-redesign.css may carry them).
- Z-tokens use **T's values** (see 3.3), not V's r2 draft numbers.
- Summary of the core: navy #0F172A primary, #0369A1 accent, WA green #25D366 fill + #052E16 label (hover #1FC65C, pressed #1BB152), heritage yellow #FFC107 accent-only, bg #F8FAFC, surface white, fg #020617, borders #E2E8F0/#CBD5E1, on-dark text #CBD5E1/#94A3B8/#7DD3FC, success #15803D, focus ring 3px #0369A1 (white on dark/green), radius 6/10/16/pill, navy-tinted shadows, 4px spacing scale + fluid `--space-section`, clamp type scale 28→38px h1, `color-scheme: light`, reduced-motion zeroes all transition tokens.

**Component list (final, per V r1 §B + V r2 §3):** `.btn-wa`, `.btn-tel` (shows the number), `.btn-navy` (+`.btn-sm`), `.btn-quiet`; `.c-card` + service/dictionary/contact variants; `.path-card` (homepage-only); `.review-card` (homepage-only; quotes un-bolded via CSS; stock avatar removed, CSS initial-circles); `.badge-ancpi`, `.badge-chip` (homepage), `.credential-line` (generated pages, ~90–160B/page); trust bar (navy stamp band, yellow separators); breadcrumbs; FAQ `details/summary` with **CSS-drawn chevron**; checklists (green `bi-check-circle`); tables in `.table-scroll`; footer with CSS wordmark (TOPO white / EXPERT yellow, Poppins 700); cookie bar; `.mobile-cta-bar`; `.on-dark`; global focus rule. Homepage services-grid icons: the four wrong template SVGs (`play.svg` etc.) replaced by inline-code SVG pictograms (house/document/refresh/certificate, ~1.2KB, homepage only).

**Rulings ratified:** WA green + dark label (AAA); yellow heritage-accent only; no dark mode in V1 (`color-scheme: light`, dark-ready tokens); CSS wordmark on navy surfaces (PNG logo stays on the white header).

### 3.2 Page layouts (Team P — r1 §A–§F as amended by r2)

**Homepage section order (docs/index.html):** Header → Hero (typographic; h1 fix; `.btn-wa` + `.btn-tel` + "sau lasă-ne un mesaj" → #contact; badge-chip row) → **Path band (NEW)** → Stats (`id="stats"`, static numbers, watermark/circle animations removed) → Services grid (**`id="services"` moves here**) → Service-detail cards (2×2; `<details>` collapse <768px, forced open ≥768px) → Reviews `#reviews` (6-card grid + "Vezi toate recenziile" disclosure, 19 verbatim) → Zone `#zone` → Contact `#contact` (h1→h2.h1) → Map (lazy iframe) → Footer (+WhatsApp line in `api.whatsapp.com` format). Deleted: preloader div, WOW classes/attrs, tns carousel, counterUp counters, **scrollTopButton**, both JS bundles (replaced by ~0.8KB inline chrome pattern + websiteYear). Footer tooltips: strip `data-bs-*`, keep `title`.

**Generated pages (all templates):** page-hero rework — breadcrumb ABOVE h1, credential `.credential-line`, heroCta pair unchanged, top padding 120px → `calc(var(--header-offset) + var(--space-5))`; acceptance test: h1 + both CTAs above the fold at 360×640. Per-template column orders per P r1 §C table (all "keep" except noted). Contact sidebar card sticky on lg+. Tables wrapped in `.table-scroll`. Trust bar stays **pre-footer** (bookend: credential line top, stamp band bottom). Header right button: **`.btn-navy.btn-sm`, `bi-whatsapp` icon, label "WhatsApp", WhatsApp href via `waHrefFor()`**. Sticky mobile bar per §3.3. No mega menu.

**The 13 new Romanian strings (ratified verbatim, comma-below diacritics):**
1. "Cu ce vă putem ajuta?"
2. "Sunt proprietar de teren sau casă"
3. "Am un proiect cu fonduri europene"
4. "Dezvolt un parc fotovoltaic"
5. "Scrie-ne pe WhatsApp"
6. "sau lasă-ne un mesaj"
7. "Autorizat ANCPI"
8. "25+ ani experiență"
9. "1052+ proiecte finalizate"
10. "Vezi toate recenziile"
11. "Vezi lista completă"
12. "WhatsApp"
13. "Contact rapid" (aria-label of the sticky bar, screen-reader only)

Plus two non-visible/non-new items: sticky-bar tel cell shows the existing number "0741 478 540" as its visible label with `aria-label="Sună"`. EN mirrors (default, G8 may polish): "WhatsApp", "Call", aria "Quick contact".

### 3.3 Technical (Team T — r1 + r2, with chair amendments)

**CSS architecture (Option c, split):**
- `docs/css/site.css` (NEW) — sole stylesheet on all 1,357 generated pages + privacy/terms. Contents: V tokens verbatim, reset/typography, Bootstrap-compatible grid subset, utility subset, all shared components, **12 icon SVG masks** keyed to existing `.bi.bi-*` markup, print + reduced-motion. Contract: **~140 classes / 12 icons** (T's 14-count superseded: `bi-chevron-down` withdrawn by V — CSS-drawn; checklists keep the existing `bi-check-circle` glyph). Byte estimate ≈ 33–34KB raw. **Hard cap: ≤36KB raw / ≤9KB gz — exceeding it is a build-stopping event.**
- `docs/css/home-redesign.css` (NEW) — homepage-only override after the legacy bundle: tokens, recolor, CSS sticky header, `.wow{visibility:visible}` safety, path cards, review grid, badge row, deliberately duplicated shared pieces. **~12–14KB raw.**
- Homepage keeps `all-css-libraries.css` + `style.css` in V1; dead `bootstrap.min.css` and the JS bundles are deleted only in cleanup Commit B after live bake.

**Fonts:** one link — `https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap` + both preconnects, latin + latin-ext (ș/ț mandatory), ~40–50KB woff2 non-blocking, cached site-wide. No Open Sans, no italics. Body = system stack (true 700 natively, faux-bold concern dissolved).

**Z-index map (T's values, final):** sticky sidebar card 10 · sticky header 100 · `.mobile-cta-bar` **1020** (bottom 0, 56px + safe-area) · `.cookiealert` **1030** with `bottom: calc(56px + env(safe-area-inset-bottom))` under 992px (the cookie alert moves, never the bar; returns to bottom 0 at ≥992px where the bar is hidden) · scroll-top row deleted (button removed). `body{padding-bottom: calc(64px + env(safe-area-inset-bottom))}` under 992px; bar + alert `display:none` in print.

**Dictionar hub (119,223B / 779B headroom):** primary fix is **T's class-trim** — move the 264× `dict-item mb-2` / 264× `fz-14` per-row utilities into parent selectors in site.css (−~5KB; this IS the redesign, not a workaround). Projected ≈114.4KB, ~5.6KB headroom. Contingency ladder if A4 measures >118KB: (1) omit credential strip on `dictionar/index.html` + `zone/alba/index.html` (−160B), (2) omit sticky-bar markup on `dictionar/index.html` only (−420B), (3) only then chair-approved `MAX_HUB_BYTES` bump to 128KB in the open. **gates.js is never silently edited; budgets stay 60KB leaf / 120KB hub.**

**verify.js:** uniqueness gates are text-only (gates.js:37-41) — restyling invisible to them; `<!--content:start-->`/`<!--content:end-->` markers preserved verbatim in layout.html. WhatsApp lint counts, doesn't restrict placement — header WA button passes if built via `waHrefFor()`. **`wa.me` URLs banned site-wide** (unvalidated by the lint); homepage footer line uses `api.whatsapp.com` format; A4 greps for `wa.me`.

**Build/verify/rollout:** Commit A atomic (css + generator + rebuilt pages + hand pages); pre-push gate = build → verify green → local server → screenshots 375/1440 × 8 page types → byte report (site.css raw/gz vs cap, median leaf, dictionar exact bytes) → greps (`wa.me`, `preloader`, `wow`). Push, then live curl checks + live screenshots (Pages cache 600s). Rollback = `git revert` Commit A (~1 min; new filenames mean no cached page can strand). Commit B (pure deletions) a later session.

---

## 4. DECISIONS LOG

| # | Contested point | RULING | Reason (one line) |
|---|---|---|---|
| a | Fonts: Open Sans body vs system stack | **Poppins 600/700 only + system body. Open Sans CUT.** | Chronology: V's r2 is V's final position and it concedes to T; both teams' final positions agree — T's r2 §3 "default: Open Sans" was written against V's r1 and is superseded. |
| b | Icon delivery: SVG masks vs existing woff2 font | **SVG masks in site.css; 12 glyphs** (T's 11 + `bi-patch-check-fill`). Homepage keeps the real font via its legacy bundle. | V accepted masks by construction (currentColor-native); saves 112KB/page; V withdrew `bi-chevron-down` (CSS-drawn) and uses existing `bi-check-circle`, so T's 14-count collapses to 12. |
| c | `#services` anchor: stats → services grid | **Approved; SEO signed off.** Stats wrapper gets `id="stats"`. | `id="services"` still exists on the homepage, so every `/#services` link from 1,357 generated footers/navs resolves (fragments can't 404); the nav item finally lands on services, not statistics; fragments carry no separate ranking signal. |
| d | Dictionar hub 779B headroom | **T's class-trim first** (−~5KB, projected 114.4KB), then P's ladder (strip credential line → strip sticky bar on that page), gate bump to 128KB only as open, chair-approved last resort. | The trim is genuine redesign work with 6× the margin of any workaround; budgets stay honest. |
| e | Sticky bar + cookie z-index | **T's values:** bar 1020, cookie 1030 (cookie moves up 56px+safe-area under 992px), header 100, sidebar 10. | T measured the current stack and ruled "the transient element moves, never the conversion element"; V's r2 draft numbers yield to T's, per T owning delivery. |
| f | Sticky-bar auto-hide (IntersectionObserver) | **KEEP.** ~15 lines in CHROME_JS (generated pages) + same inline pattern on homepage; no library; where unsupported the bar is simply always visible. | It returns 56px of a 360px screen exactly when the hero's own buttons already serve the purpose, answers the banner-blindness critique, and degrades to P's original design — cheap, graceful, strictly better. |
| g | Hero: typographic vs cartoon | **Cartoon killed; typographic hero + badge row confirmed.** | Unanimous (P ruled, V called the illustration the #1 template smell); credentials persuade this audience, cartoons don't. |
| h | Preloader / WOW / slider JS / scrollTopButton | **All removed.** Preloader div deleted **atomically** with the script tags (T's "only site-down-grade failure"); scrollTopButton deleted (P's r2 concession — dead without active.js); ~0.8KB inline chrome pattern re-added. | −197KB JS; every kept behavior audited by P (navbar, cookie, waSend, year all survive). |
| i | `wa.me` links | **Banned site-wide;** all WhatsApp hrefs via `waHref()`/`waHrefFor()` in `api.whatsapp.com/send` format; A4 greps homepage. | The verify lint only validates `api.whatsapp.com` URLs — a wa.me link would ship unchecked. |
| j | Reviews carousel | **Static grid: 6 visible + `<details>` disclosure for the other 13; all 19 verbatim in DOM.** Quotes un-bolded via CSS; repeated stock avatar removed → CSS initial-circles. | Carousel hid 18 of 19 reviews and carried a JS dependency; visual changes only — text untouched, so the frozen-content constraint holds. |
| k | New Romanian strings | **The 13-string list in §3.2 ratified verbatim** (P's r1 list minus visible "Sună", which became aria-only; tel labels show "0741 478 540"). | P's r2 delta accepted; the number-as-label follows V/ION's "see the number before I tap". |
| l | CSS budgets | **site.css ≤36KB raw / ≤9KB gz HARD CAP (build-stopper); home-redesign.css ~12–14KB raw; page gates unchanged (60/120KB).** | T's recount with V+P absorbed lands at ~33–34KB; the cap forces discipline without being fantasy. |
| m | Generated-header button: green (V r2) vs navy (P r2) | **P's navy:** `.btn-navy.btn-sm`, `bi-whatsapp` icon, label "WhatsApp", WhatsApp href. | Crossed r2s; chair rules for the quiet header — desktop already shows a green sticky contact card and mobile a green sticky bar, and V's own r1 aesthetic ("exactly one loud element") argues against a third green in the same viewport. |
| n | Trust bar placement | **Stays pre-footer** (P's call, V deferred), restyled as V's navy stamp band. | Credential line at top + stamp band at bottom bookend the page; stacking two trust elements under the hero pushes content down. |
| o | Dark mode | **No dark mode in V1;** `color-scheme: light`; dark-ready tokens. | Unanimous across all three teams: one-shot daylight mobile visitors, 2× QA surface, half-tested dark damages trust. |
| p | Mega menu | **No; keep `sb-dropdown` structure, restyle only.** | P and its own UX persona rejected it: pure CSS risk, zero conversion evidence. |
| q | Classnames: Bootstrap-override vs new namespace | **Semantic classes (`.btn-wa`, `.btn-tel`, `.btn-navy`, `.btn-quiet`, `.c-card`...) + one-line safety aliases** (`.cta-whatsapp .btn-warning`→`.btn-wa` declarations, `.btn-outline-primary`→`.btn-tel`). | A2/A3 touch every template anyway; aliases make straggler markup degrade gracefully instead of breaking. |
| r | Credential presentation on generated pages | **`.credential-line` (one muted text line);** `.badge-chip` pills homepage-only. | ~90–160B/page vs ~4× for chips across 1,357 pages — protects the dictionar headroom for zero conversion loss. |
| s | Homepage services-grid icons | **Four template SVGs replaced by inline-code SVG pictograms** (house/document/refresh/certificate), homepage-only, ~1.2KB. | A play-button icon for "actualizare carte funciară" is semantically wrong; in-code SVG is explicitly permitted by facts.md. |

No orphans remain: every open question from r1/r2 (V-Q1..4, P-Q1..5, T-Q1..5, T's three "remaining chair items") is closed by a row above or by ratified r2 text referenced in §3.

---

## 5. Questions for the CEO (defaults applied — the build does NOT block)

1. **Footer/dark-surface branding:** on navy surfaces the yellow/black PNG logo is illegible, so we render a text wordmark "TOPO EXPERT" (white/yellow) there; the PNG stays in the white header. **Default: approved.** If you'd rather see the PNG everywhere, we'd need a light-background plate behind it (uglier) or a new logo asset from you (V2).
2. **Review avatars:** the current site repeats the same stock face 19 times; we replace it with neutral initial circles. **Default: approved** — real client photos would be better still, whenever you can provide them (V2).
3. **Internal size gate:** if the dictionary hub page somehow still exceeds its internal 120KB gate after the planned trims (not expected — projection is 114.4KB), we raise that internal gate to 128KB rather than cutting content. **Default: pre-authorized, trim ladder first.**

---

## 6. Build order

Sequencing: **A1 → (A2 ∥ A3) → A4.** Disjoint file territories per T's r2 §6 — no agent ever edits another's files. **Retry rule: an agent that dies is RESUMED or RESPAWNED with the same territory and this file + its listed sections as brief — never absorbed into the main session.** Only A4's report unlocks the push.

**A1 — stylesheets** (~3h). Files: `docs/css/site.css`, `docs/css/home-redesign.css` — nothing else.
Brief: r1-teamV.md §A (token sheet, paste verbatim) + §B (components), amended by r2-teamV §1 (fonts), §2 (12-mask list + contract additions + safety aliases), §3 (path-card / sticky-bar / review-card / badge specs); r2-teamP §5 (declared components per file); r2-teamT §1 (contract + byte recount), §2 (z-map — chair-final values in this file §3.3), §4 (dict-list parent selectors). Must output measured raw+gz sizes; caps per Decisions row (l).

**A2 — generator** (~2.5h). Files: `generator/templates/*.html`, `generator/partials/*.html`, `generator/lib/chrome.js` — never docs/.
Brief: r1-teamP.md §B (page-hero rework), §C (per-template table + component notes), §D (sticky bar via `ctaWhatsapp` data), §E as amended by r2-teamP §2 (navy header WA button via `waHrefFor`); r2-teamP §1 (CHROME_JS confirmations) + §2 (auto-hide IntersectionObserver — Decisions row f) + §3 (dictionar deltas); r2-teamT §1 (head swap: site.css link, preconnects, Poppins-only font link, delete inline `<style>`), §4 (dict per-row class trim), §5 (marker preservation, wa.me ban); EN mirror in layout-en/header-en with default EN strings (§3.2).

**A3 — hand pages** (~3h). Files: `docs/index.html`, `docs/privacy-policy.html`, `docs/terms-and-conditions.html`.
Brief: r1-teamP.md §A (homepage section-by-section, h1 fix, path band, reviews grid, anchors) as amended by r2-teamP §1 (JS-removal audit table: inline chrome pattern, tooltip attr strip, **scrollTopButton delete**, preloader-div-atomic rule); r2-teamV §3 (path-card/review-card/badge specs), §4 (inline SVG service icons); footer WhatsApp line in `api.whatsapp.com` format; homepage sticky bar + auto-hide inline snippet; privacy/terms switch to site.css. Add `home-redesign.css` after the legacy bundle.

**A4 — build & gate** (~1.5h; runs last; sole authority to declare "ready to push"). Touches no source files.
Brief: r2-teamT §6 A4 + §4. `node generator/build.js` → `node generator/verify.js` (green required) → local server → screenshots 375px/1440px × 8 page types (homepage, service hub, locality leaf, county hub, guide, dictionary term, dictionary index, EN page) → byte report: site.css raw/gz vs 36KB/9KB cap, home-redesign.css raw, median leaf, `dictionar/index.html` exact bytes (trim ladder from Decisions row d if >118KB) → grep homepage for `wa.me` / `preloader` / `wow`. Chair reviews screenshots + byte report; then rollout per §3.3 (Commit A → push → live checks; Commit B later).

**Coherence duty discharged:** one token sheet, one class contract, one string list, one z-map — homepage and the 1,357 generated pages share the same tokens, button system, sticky bar, and footer language, so the site reads as ONE site; text is frozen; verify.js budgets unchanged; every ruling names a single winner.
