# CEO Handoff — expert-intabulare.ro (SEO expansion, live 2026-07-28)

The site is live with **1,360 pages** (1,357 generated + homepage + privacy + terms).

## Get Google to index it (do this once, ~10 minutes)
1. Go to https://search.google.com/search-console and sign in with your Google account.
2. Add property → "Domain" → enter `expert-intabulare.ro`. Verify via DNS TXT record (your domain registrar's DNS panel — GSC shows the exact record to paste).
3. Once verified, open **Sitemaps** in the left menu, type `sitemap.xml`, press Submit. That one file points Google to all 7 section sitemaps (1,360 URLs).
4. Optional but useful: in **URL inspection**, paste `https://expert-intabulare.ro/` and click "Request indexing" — same for 2-3 important pages (e.g. /servicii/cadastru-si-intabulare/, /fonduri-europene/, /parcuri-fotovoltaice/).
5. Come back after 1-2 weeks: **Performance** shows which pages get impressions/clicks; **Indexing → Pages** shows how many are indexed. Indexing 1,300+ new pages takes weeks — that is normal.

## How the site is built (for any future session)
- Everything generated lives in `docs/` (GitHub Pages serves this folder on master).
- The machine is `generator/`: edit data in `generator/data/**` (JSON), then run:
  - `node generator/build.js` — regenerates all pages + sitemaps into docs/
  - `node generator/verify.js` — must print "VERIFY PASSED" before any push
- Never hand-edit generated files in docs/ (the next build overwrites them). Hand-edited files: only `docs/index.html`, `docs/privacy-policy.html`, `docs/terms-and-conditions.html`.
- Push to master = deploy (live in ~1-2 min).

## Reversible decisions (say the word and it's a 5-minute change)
1. **Cluj-Napoca basin pages** (Cluj-Napoca, Florești, Apahida, Gilău) are LIVE. To remove: delete those records from `generator/data/localities/cluj.json`, rebuild, push.
2. **Orientative price ranges** are shown ("1.400–2.500 lei, orientativ"). To hide: empty the `priceRange` fields in `generator/data/services.json`, rebuild, push.
3. **Travel-cost sentence** on neighbor-county pages: "Deplasare inclusă în județul Alba; în județele învecinate se calculează în funcție de distanță." Correct it in `generator/data/site.json` if your policy differs.

## Stage 2 (agreed, not started)
Move to a server + Resend for email flows; contact stays WhatsApp-first either way.
