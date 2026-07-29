# CLAIMS REGISTER — rescue prose, 46 localities

Audit trail for the `localNote` prose written during the 2026-07-29 demotion rescue
(commits `4445979`, `4ba1ca7`, `3af9143`, `e66f2a3`, `d5073d1`, `f-claims`).

**Status: not a blocking gate.** Per the CEO ruling of 2026-07-29 — *"use common sense
for what aurel does, he does all the necessary steps"* — `workflow` and `capability`
claims describing competent, standard surveying practice are approved and are not
enumerated here. This file records the opposite: the claims that ruling does **not**
reach.

The governing distinction: **process may be assumed, numbers and dates may not.** A
wrong process claim describes a competent surveyor slightly imprecisely. A wrong
PNCCF year tells a landowner something false about their own village.

---

## A. Claims removed before push

Written during the rescue, then pulled on audit because each is a duration, a date, or
an unverified specific rather than a process step. All replacements were rebuilt and
re-gated: demotions stayed at 0, emitted stayed at 2,095.

| Locality | Type | Removed (verbatim) | English gloss | Replaced with |
|---|---|---|---|---|
| `alba/farau` | turnaround | „…iar notele de completare **se rezolvă în aceeași zi**." | "completion notes are resolved the same day" | „…notele de completare **le rezolvăm noi, fără să treacă prin proprietar**." — who handles it, not how fast |
| `mures/taureni` | turnaround | „hotarul se parcurge **într-o singură zi**" | "the whole territory can be covered in a single day" | „hotarul se parcurge **dintr-un capăt în altul fără deplasări lungi**" |
| `alba/sona` | turnaround | „se planifică **pe o zi întreagă**" | "is scheduled as a full day" | „**cere drum separat până la fiecare**" |
| `mures/mica` | turnaround | „se împarte **pe zile diferite**" | "is split across different days" | „se împarte **în deplasări separate**" |
| `sibiu/vurpar` | date | „proprietari plecați **în anii '90**" | "owners who left in the 1990s" | „proprietari plecați **demult din sat**" |
| `alba/cut` | verifiable fact | „terenurile de la **marginea de nord** a hotarului" | "land on the northern edge of the territory" | „terenurile **dinspre șosea**" — I never verified which edge the A1 runs along |
| `mures/chetani` | verifiable fact | „Grindeniul a crescut **lângă platforma chimică**" | "Grindeni grew up beside the chemical plant" | „În hotarul Grindeniului se amestecă terenuri cu folosințe diferite" — I do not know that Grindeni has a chemical platform |

## B. Specific verifiable facts asserted — worth Aurel's eye, not blocking

These are `local-fact` rows I am confident enough to ship but that are checkable and
would be wrong if wrong. Listed because the register is only useful if it is honest
about the marginal cases. None is a claim about our service.

| Locality | Claim (verbatim) | English gloss | Confidence |
|---|---|---|---|
| `mures/ogra` | „Castelul Haller și parcul din jur **sunt clasate**" | the Haller castle and its park are listed monuments | High on the castle, medium on the exact legal wording „clasate" |
| `alba/sona` | „La Sânmiclăuș, incinta castelului… **intră în regim de monument**" | the Sânmiclăuș castle precinct is under monument regime | Same. The Bethlen castle is already named in the pre-existing note |
| `sibiu/laslea` | „Conacul, împreună cu incinta sa, **este clasat**" | the Mălâncrav manor and its precinct are listed | Same. The Apafi manor is already named in the pre-existing note |
| `sibiu/bazna` | „**Zăcământul de gaz exploatat aici** a lăsat conducte și instalații în extravilan" | the gas field worked here left pipelines outside the built-up area | High — Bazna is a documented Transylvanian methane field |
| `sibiu/ocna-sibiului` | „Ocnele prăbușite… **cu zone în care construirea este restrânsă**" | collapsed salt workings, with zones where building is restricted | Medium on the regulatory claim; high on the collapsed workings |
| `alba/calnic` | „vecinătatea cetății aduce **restricții de zonă protejată**" | the citadel's vicinity brings protected-zone restrictions | High — the citadel is UNESCO-listed per the pre-existing note |
| `mures/sanger` | „Câmpia Transilvaniei dă aici **alunecări active de teren**" | active landslides | High — characteristic of the Transylvanian Plain |
| `mures/mica`, `sibiu/alma`, `sibiu/laslea`, `sibiu/ocna-sibiului`, `mures/bagaciu` | old land books on Saxon/German/Hungarian names, unconverted topographic numbers | — | High as a general property of Transylvanian records; not verified per village |

## C. Facts deliberately NOT stated

The most valuable per-locality content is exactly what cannot be invented. Nothing in
the shipped prose asserts any of the following, for any of the 46 localities:

- **PNCCF completion status or year** — no „înregistrarea sistematică s-a finalizat în
  20XX" anywhere. This is Team B's CEO question 3 and the single biggest quality
  unlock available.
- **Cadastral sector numbers, parcel counts, tarla numbers, CF numbers.**
- **Observed BCPI turnaround times**, per office or in general — see section A.
- **Prices, tariffs, ANCPI fees.** The only price copy on the pages is the pre-existing
  `service.priceRange` template, untouched by this work.
- **Dates of any kind**, after the section A removals.

If Aurel gives the interview, these notes are worth a second pass and can be
strengthened considerably — the ceiling here is his ground truth, not the prose.

## D. Workflow and capability claims — CEO-approved 2026-07-29

Not enumerated, per the ruling. These describe what a competent authorized surveyor
does given the terrain and record state: checking the expropriation corridor at Cut,
correlating with the urbanism regulation inside Câlnic's protected zone, resolving
indiviziune before registration at Daia Română and Sâncel, surveying the pond margin
at the date of measurement and recording the level at Tăureni, scheduling Alma by the
weather, materialising boundaries on the slopes at Beriu where they follow streams and
tree lines rather than fences.

Nothing was weakened to dodge a workflow claim, so nothing needed restoring after the
ruling landed.
