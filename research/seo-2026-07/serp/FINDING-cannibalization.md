# CRITICAL FINDING — wrong-page selection across the service×locality cluster

**Captured 2026-07-29 from live Google (ro locale, Alba geo, logged-in Chrome). 10 queries.**

This supersedes the priority order in `plan-seo-serp-research.md`. The plan assumed the problem
was page *quality*. It is not. The site ranks well already. The problem is that Google cannot
tell the 927 service×locality pages apart, and serves a near-random sibling.

---

## 1. The evidence

Every row below is a real captured SERP position.

| Query | Rank | Page Google served | Distance of that locality from Aiud | Correct page exists? |
|---|---|---|---|---|
| `intabulare teren agricol alba` | **#1** | Intabulare teren în **Cut** | 55 km | county query — should be `/zone/alba/` hub |
| `intabulare teren agricol alba` | #7 | Intabulare teren în **Unirea** | 15 km | " |
| `plan topografic Alba Iulia` | **#2** | Plan topografic în **Doștat** | 53 km | YES — `plan-topografic/alba/alba-iulia` |
| `dezmembrare teren Alba` | **#2** | Dezmembrare / alipire în **Berghin** | 35 km | county query |
| `dezmembrare teren Alba` | #6 | Dezmembrare / alipire în **Teiuș** | 18 km | " |
| `intabulare teren Alba Iulia` | #9 | Intabulare teren în **Ohaba** | 37 km | YES — `intabulare-teren/alba/alba-iulia` |
| `intabulare apartament Alba Iulia` | #4 | Intabulare **casă/construcție** Alba Iulia | 0 (right town, wrong service) | YES — `intabulare-apartament/alba/alba-iulia` |
| `cadastru si intabulare Aiud` | #5 | Intabulare teren în **Aiud** | 0 | near-miss (wrong service, right town) |
| `topograf aiud` | #4 | homepage | 0 | correct |

**Two distinct failure modes:**
- **Wrong locality** — a small village substituted for the city or the county (Cut, Doștat, Ohaba, Berghin, Unirea, Teiuș).
- **Wrong service** — the right town but the wrong service page (casă/construcție served for an apartament query).

## 2. Why this is the top priority

The ranking power is already there — **#1 and #2 on commercial county-level queries, two days
after launch.** That is the hard part, and it is done.

The cannibalization is destroying the value of it. A searcher looking for agricultural land
registration in Alba county lands on a page about Cut, a village of ~1,000 people 55 km from the
surveyor. They bounce. Sustained bouncing is itself a ranking signal, so this decays over time
rather than staying flat.

**No amount of flagship page rewriting fixes this.** If Google serves Doștat for
`plan topografic Alba Iulia`, then perfecting the Alba Iulia page changes nothing — that page is
never shown. Differentiation and internal linking must come before content enrichment.
The plan's Task 5–7 ordering is therefore wrong and must be resequenced.

## 3. Second defect, visible in the SERP snippets

Every meta description follows one template:

> `<Serviciu> în <Localitate>: acte, pași, prețuri orientative. Topograf autorizat ANCPI, aprox. <N> km de Aiud. Tel. 0741 478 540.`

Two problems:

1. **It advertises distance from the customer, in the search result.** "aprox. 55 km de Aiud"
   sits under the headline as a reason not to click. On the served page it is the single most
   prominent differentiator — and it is a negative one.
2. **It is a near-identical string across ~927 pages**, differing only by locality, service and a
   number. That is precisely the signal that makes the pages indistinguishable to Google. The
   meta description is likely *contributing* to the cannibalization, not merely reflecting it.

Note this is the same `distanceKm()` computation behind defect 12.1 (the Aiud self-distance). One
fix touches both, but the meta-description usage is a separate render site from the three already
identified — **it must be added to the 12.1 fix scope.**

## 4. Candidate remedies (to be ruled on, not yet decided)

- **County/city hub targeting.** County-level queries (`... alba`, `... Alba`) should resolve to
  `/zone/alba/` hubs, not leaf villages. Check whether the hubs are internally linked strongly
  enough to outrank their own leaves.
- **Meta description differentiation.** Drop the distance from the meta for distant localities;
  make the description genuinely per-page.
- **Internal link topology.** Leaves currently cross-link to siblings; that may be flattening the
  hierarchy and letting any leaf stand in for any other. City pages (Alba Iulia, Sebeș, Blaj)
  should receive materially more internal links than villages.
- **Deliberate de-emphasis of micro-villages.** Cut, Doștat and Ohaba are outranking city pages
  they should never outrank. Consider whether every village warrants a full page per service, or
  whether some should be hub rows — the anti-doorway gates already demote 92 pages for exactly
  this reason.

## 5. What NOT to conclude

This is a **correlational SERP observation**, not a proven causal chain. What is established:
Google serves sibling pages for these queries, verified across 10 captures. What is *not*
established: that any specific remedy above will change it. Internal linking and canonical
signals are known levers in general; their effect here is a hypothesis until measured in GSC.

The measurement gate remains 2026-08-19 per `spec-seo-serp-research.md` §8.2.

## 6. Competitor price benchmarks gathered along the way

| Source | Service | Price |
|---|---|---|
| necesit.ro | intabulare apartament | 560–810 lei (avg 630) |
| necesit.ro | dezmembrare / alipire | 250–880 lei/lot (avg 630) |
| cadastru24.ro | notary fee, dezmembrare | min 300 lei + 75 lei/lot + TVA |
| bizoo.ro (Cadastru Maxim) | documentație intabulare apartament | 300 lei |
| brig.ro | cadastru în Aiud | 336–2,100 RON |

## 7. Useful data source discovered

**ANCPI publishes PNCCF documents per locality** at `ancpi.ro/pnccf_docs/<Locality>` — ordinele de
începere, anunțurile de publicare, and the resulting documents. This is the authoritative source
for the per-UAT systematic-registration status that Team B's B7 proposal requires. Primăria pages
for Aiud, Sebeș and Ocna Mureș also rank for PNCCF queries, confirming live demand for the topic.
