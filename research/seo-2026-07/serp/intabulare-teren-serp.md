# SERP capture — `intabulare-teren`

**Captured 2026-07-29 · Capture Agent 1 · logged-in Chrome, `google.com/search?...&hl=ro&gl=ro&num=10`**
**No CAPTCHA, no consent wall. 4 queries, all new.**

Map pack and organic recorded separately (SOP §3 Step 1). Competitor prices/durations are
intelligence only — SOP §0.2 forbids publishing ours.

---

## ter-q1-pc — `intabulare teren alba`
**service:** intabulare-teren · **tier:** county · **locality:** null · **intent:** transactional
**URL:** `https://www.google.com/search?q=intabulare+teren+alba&hl=ro&gl=ro&num=10`

### Map pack — **NONE.** Pure organic.

### Organic (Google returned **9** results)
| # | Domain | URL | Title | pageType |
|---|---|---|---|---|
| 1 | necesit.ro | /…/Alba Iulia | Top 20 firme pentru cadastru și intabulare Alba Iulia, 2026 | directory |
| 2 | birou-cadastru.com | /…/Alba Iulia | Intabulare Alba Iulia — Birou Cadastru | directory |
| 3 | cadastrumaxim.ro | / | CADASTRU MAXIM — Birou Topograf Cadastru Intabulare | **surveyor** |
| 4 | firmecadastru.ro | /alba/alba-iulia | Firme cadastru si intabulare din Alba Iulia | directory |
| 5 | olx.ro | /Alba | topografie Alba Iulia — Anunturi gratuite | marketplace |
| 6 | cadastru24.ro | /lucrari/Alba/Alba | Lista lucrari de Cadastru si Intabulare Teren Intravilan in Alba | marketplace |
| 7 | intabulari24.ro | /experti/alba/alba-iulia | Top experti Cadastru si intabulare apartament in Alba Iulia | directory |
| 8 | efunciara.ro | /oficii/bcpi-alba-iulia-44 | BCPI Alba Iulia — Servicii Cadastrale | marketplace |
| 9 | necesit.ro | /Intabulare casă/Alba Iulia | Top 20 firme pentru intabulare casă Alba Iulia, 2026 | directory |

**Aggregator share: 8/9** (5 directory + 3 marketplace). **Surveyor cohort: 1** — cadastrumaxim.ro.

### OUR position — **NOT IN TOP 10.**
- **correctPage:** county-level → the service×county hub `/servicii/intabulare-teren/alba/`
  (**does not exist** — chair verdict W1); nearest existing is `docs/zone/alba/index.html`.
- **ROUTING DEFECT: n/a** (absent).
- **Important contrast:** on `intabulare teren agricol alba` (prior session) we were **#1** (served
  Cut) and **#7** (served Unirea). On the bare head term `intabulare teren alba` we are **nowhere**.
  The modifier "agricol" is what we rank on; the head term is held entirely by aggregators.

### Related searches
Cadastru alba iulia · Cadastru alba iulia program · Oficiul de cadastru și publicitate imobiliară
alba fotografii · Ocpi alba · Ocpi alba contact · **Topografi autorizati alba iulia** ·
**Topograf alba iulia** · Firme cadastru alba iulia

### PAA
**None.**

### Reading
**Every one of the 9 results targets "Alba Iulia", not the county.** Google rewrites the county
token `alba` into the city Alba Iulia across the whole result set. This has a direct consequence
for W1: a service×county hub competing on `… alba` will be judged against **Alba Iulia city
pages**, not against county pages. The hub must speak to Alba Iulia explicitly or it will be
outranked by pages that do.

---

## ter-q2alt-pc — `intabulare teren extravilan alba iulia`
**service:** intabulare-teren · **tier:** city · **locality:** alba-iulia · **intent:** transactional
**URL:** `https://www.google.com/search?q=intabulare+teren+extravilan+alba+iulia&hl=ro&gl=ro&num=10`

### Map pack — **NONE.** Pure organic.
*(Confirms F5 from the prior session: service-specific Alba Iulia queries have no local pack, so
our Aiud address costs us nothing here.)*

### Organic (Google returned **9** results)
| # | Domain | URL | Title | pageType |
|---|---|---|---|---|
| 1 | necesit.ro | /…/Alba Iulia | Top 20 firme… — snippet quotes a real job: "Teren intravilan/extravilan; Preț estimat: 4.500 lei" | directory |
| 2 | cadastru24.ro | /lucrari/Alba/Alba | Cadastru si Intabulare Teren extravilan in Alba | marketplace |
| 3 | intabulari24.ro | /experti/alba/alba-iulia | Top experti Cadastru si intabulare apartament in Alba Iulia | directory |
| 4 | portal.apulum.ro | /cmsSE/acte-necesare | Acte necesare — Portal Primăria Alba Iulia | **government** |
| 5 | olx.ro | /Alba | topografie Alba Iulia — Anunturi gratuite | marketplace |
| 6 | expert24.ro | /experti/ancpi/alba-iulia | Cei mai buni Experti cadastru si intabulare in Alba Iulia | directory |
| 7 | **expert-intabulare.ro** | **/servicii/intabulare-teren/alba/sibot** | **Intabulare teren în Șibot, jud. Alba — Topograf autorizat** | **surveyor (OURS)** |
| 8 | portal.apulum.ro | /acte-necesare-primaria-indsoft | Confirmare intravilan/extravilan | **government** |
| 9 | intabulari24.ro | /experti/cadastru-si-intab… | Top 10 experti pentru Cadastru si intabulare teren extravilan | directory |

**Aggregator share: 6/9** (4 directory + 2 marketplace). **+2 government = 8/9 non-surveyor.**
**Surveyor cohort (excl. ours): ZERO.** No third-party surveyor page ranks on this query at all.

### OUR position — **#7. WRONG PAGE.**
- **servedPage:** `docs/servicii/intabulare-teren/alba/sibot.html` — **Șibot, a commune 66 km from
  Aiud and ~40 km from Alba Iulia.**
- **correctPage:** `docs/servicii/intabulare-teren/alba/alba-iulia.html` — exists, is flagship #2
  in the chair verdict.
- **ROUTING DEFECT: YES — wrong locality.** Google's own snippet is verbatim our meta template:
  > "Intabulare teren în Șibot: acte, pași, prețuri orientative. Topograf autorizat ANCPI,
  > **aprox. 66 km de Aiud**. Tel. 0741 478 540."
  The searcher is shown "66 km de Aiud" and the name of a village they did not search for, as the
  entire proposition. This is D1 (meta rebuild) with a fresh, independent instance.
- **New evidence for W1/D2:** this is the **third distinct village** substituted for Alba Iulia on
  an `intabulare-teren` query (Ohaba on `intabulare teren Alba Iulia`, Cut and Unirea on
  `intabulare teren agricol alba`, Șibot here). The substitution is not stable — Google picks a
  different leaf each time, which is the signature of insufficient differentiation rather than of
  one page being unusually strong.

### Related searches
**None displayed.**

### PAA
**None.**

### Competitor intelligence (do not imitate — SOP §0.2)
- necesit.ro surfaces a real quoted job in the snippet: **"Tip imobil: Teren intravilan/extravilan;
  Preț estimat: 4.500 lei"** — a 7-parcel extravilan case from a Alba Iulia court decision.
- Two of nine results are **Primăria Alba Iulia "acte necesare" pages**. The intent has a strong
  documents component — what to bring, and specifically the intravilan/extravilan confirmation
  certificate. **That is a genuinely local, non-price, non-duration content gap we can fill.**

---

## ter-q3-pc — `intabulare teren aiud`
**service:** intabulare-teren · **tier:** town · **locality:** aiud · **intent:** transactional
**URL:** `https://www.google.com/search?q=intabulare+teren+aiud&hl=ro&gl=ro&num=10`

### Map pack — **NONE.** Pure organic.
*(Notable: `cadastru aiud` DOES return a map pack with us in it; `intabulare teren aiud` does not.
Same town, adjacent intent, different SERP architecture.)*

### Organic (Google returned **9** results)
| # | Domain | URL | Title | pageType |
|---|---|---|---|---|
| **1** | **expert-intabulare.ro** | **/servicii/intabulare-teren/alba/aiud** | **Intabulare teren în Aiud, jud. Alba — Topograf autorizat** | **surveyor (OURS)** |
| 2 | aiud.ro | /informatii_publice/anunt | Înregistrarea sistematică a terenurilor… (PNCCF) | **government** |
| 3 | intabulari24.ro | /experti/ancpi/alba/aiud | Top 10 Experti cadastru si intabulare in Aiud | directory |
| 4 | facebook.com | Birou Cadastru Aiud - Molnar Aurelian-Marian | 210+ persoane interesate | other (social) |
| 5 | expert24.ro | /experti/alba/aiud | Cadastru si intabulare teren intravilan in Aiud — "25 profiluri active" | directory |
| 6 | necesit.ro | /providers/pavel-gheorghe | Pavel Gheorghe \| Intabulare teren, Intabulare casă, Topograf | directory |
| 7 | firmecadastru.ro | /alba/aiud | Firme cadastru si intabulare din Aiud | directory |
| 8 | alba24.ro | /actiune-de-intabulare-gratuita… | Acțiune de intabulare gratuită a terenurilor la Aiud (10 mar. 2024) | blog (news) |
| 9 | efunciara.ro | /oficii/bcpi-aiud-46 | BCPI Aiud — Servicii Cadastrale | marketplace |

**Aggregator share: 5/9** (4 directory + 1 marketplace). **+1 government +1 news +1 social = 8/9 non-surveyor.**
**Surveyor cohort (excl. ours): ZERO.**

### OUR position — **#1. CORRECT PAGE. The best result in the entire batch.**
- **servedPage = correctPage:** `docs/servicii/intabulare-teren/alba/aiud.html`.
- **ROUTING DEFECT: no.** This is the one query where routing works.
- **BUT — the live self-distance bug is in the #1 Google snippet.** Verbatim:
  > "Intabulare teren în Aiud: acte, pași, prețuri orientative. Topograf autorizat ANCPI,
  > **aprox. 2 km de Aiud**. Tel. 0741 478 540."
  Defect 12.1 in `facts.md` (Aiud self-distance, `distanceKm()` returning 2 for Aiud→Aiud) is not
  a latent internal wart — **it is the visible text of our single best Google result.** A local
  reading "Intabulare teren în Aiud … aprox. 2 km de Aiud" sees a page written by someone who does
  not know where Aiud is. This raises 12.1 from a content-quality fix to a top-of-funnel fix.
- Google was rendering an AI/"Se gândește" block immediately beneath our #1 result. Not captured
  as text; worth a re-check at the 2026-08-19 gate, as an AI Overview above the fold would change
  the value of position 1 materially.

### Related searches
**None displayed.**

### PAA
**None.**

### Competitor intelligence
- expert24.ro claims **"25 profiluri active"** for cadastru in Aiud — a town where the map pack
  shows two private surveyors. Directory inventory claims are inflated; not a real competitor count.
- alba24.ro (regional news, 10 mar. 2024) ranks on a **free/PNCCF registration campaign in Aiud**.
  Combined with aiud.ro at #2, **two of nine results are about free systematic registration.** Part
  of this query's demand is people asking "do I have to pay for this at all?". Per D6 this is
  addressed by one `/ghid/` article, **with no invented years, sectors or completion status.**

---

## ter-q4-pc — `intabulare teren mostenire alba`
**service:** intabulare-teren · **tier:** county · **locality:** null · **intent:** transactional
**URL:** `https://www.google.com/search?q=intabulare+teren+mostenire+alba&hl=ro&gl=ro&num=10`

### Map pack — **NONE.** Pure organic.

### Organic (Google returned **9** results)
| # | Domain | URL | Title | pageType |
|---|---|---|---|---|
| 1 | birou-cadastru.com | /…/Alba Iulia | Intabulare Alba Iulia — snippet is a full acte-necesare list | directory |
| 2 | cadastru24.ro | /lucrari/Alba/Alba | Lista lucrari de Cadastru si Intabulare Teren Intravilan in Alba | marketplace |
| 3 | notariate.ro | /calculator-taxe-notariale/intabulare | Intabulare Imobil 2026 — 4,9(187) | marketplace |
| 4 | cadastrumaxim.ro | /content/4-intabulare-imobi | Birou Topograf Cadastru Intabulare GPS Alba | **surveyor** |
| 5 | lovedeco.ro | /se-poate-face-intabulare-fara-succe… | Se poate face intabulare fără succesiune? (18 apr. 2025) | blog |
| 6 | firmecadastru.ro | /acte-necesare/cadastru-intab… | Actele necesare pentru cadastru si intabulare teren (fara…) | directory |
| 7 | necesit.ro | /providers/oancea-radu | Oancea Radu \| Intabulare casă, Cadastru, topografie | directory |
| 8 | startcad.ro | /succesiune-teren-neintabulat | Succesiunea unui teren neintabulat: cum pot intra în… | blog (on a surveyor domain) |
| 9 | avocatnet.ro | /forum/discutie_580615 | Intabulare teren intravilan dobandit prin mostenire (28 apr. 2017) | other (forum) |

**Aggregator share: 5/9** (3 directory + 2 marketplace). **+2 blog +1 forum = 8/9 non-surveyor.**
**Surveyor cohort: 1 service page (cadastrumaxim.ro) + 1 blog article on a surveyor domain (startcad.ro).**

### OUR position — **NOT IN TOP 10.**
- **correctPage:** county-level → service×county hub `/servicii/intabulare-teren/alba/` (does not
  exist). Team A flagged rural inheritance as the substance of the Aiud land page (flagship #6);
  **this query is that page's demand, and we do not rank on it.**
- **ROUTING DEFECT: n/a** (absent).

### Related searches
**None displayed.**

### PAA
**None.**

### Reading — the strongest content opening found in this batch
Google prints **"Lipsesc: alba"** ("missing: alba") on results **5, 8 and 9**. It could not fill
the top 10 with pages that are *both* about inheritance-based registration *and* about Alba, so it
padded with three national, county-agnostic pages — two blogs and a 2017 forum thread.

That is a literal statement from Google that **the local+moștenire intersection is under-served.**
The winning content is: certificat de moștenitor, succession not yet done, titlu de proprietate in
a dead parent's name, which BCPI the file goes to — **named for real Alba localities.** It needs no
prices and no durations, so it is fully compatible with SOP §0.2.

### Competitor intelligence (do not imitate)
- notariate.ro ranks at #3 with a **notary-fee calculator** for intabulare, rated 4,9(187). The
  price-comparison intent on this query is being served by a calculator, not by surveyors.
- birou-cadastru.com's snippet is a bare **acte necesare list** (titlu de proprietate copie
  legalizată, extras CF, copie hartă CF, acte vechi…). Our pages already carry an "Acte necesare
  (orientativ)" section (`facts.md` §5) — this is table stakes, already met, **not a gap**.

---

## Cross-query summary — intabulare-teren

| Query | Tier | Map pack | Our organic rank | Page Google served | Correct? |
|---|---|---|---|---|---|
| intabulare teren alba | county | none | — | — | not ranking |
| intabulare teren extravilan alba iulia | city | none | **#7** | `…/alba/sibot` (66 km) | **NO — wrong locality** |
| intabulare teren aiud | town | none | **#1** | `…/alba/aiud` | **YES** |
| intabulare teren mostenire alba | county | none | — | — | not ranking |

- **Zero map packs across all four queries.** Combined with F5 from the prior session, the pattern
  is now firm: **`intabulare …` queries return no local pack; `cadastru …` / `topograf …` queries
  do.** Our Aiud address is a liability only on the `cadastru`/`topograf` family. On the entire
  `intabulare` family the game is purely organic, which is the game page content can actually win.
- **Aggregator share by query:** 8/9 · 8/9 · 8/9 · 8/9. Remarkably uniform.
- **Third-party surveyor pages are almost absent** — 1, 0, 0, 1 across the four queries. The
  surveyor cohort for SOP Step 3 on this service is effectively **cadastrumaxim.ro only**, plus
  startcad.ro as an informational comparator. Record the shortfall rather than padding with
  directories (SOP §3 Step 3).
- **BLOCKED BY POLICY:** necesit.ro publishes per-job estimates (4.500 lei on an extravilan case);
  notariate.ro ranks #3 on a fee calculator; brig.ro publishes 336–2.100 RON ranges. The
  price-answer slot on these SERPs is real and we are forbidden to contest it. Our differentiator
  must be **documents, office routing and named local specificity**, none of which are blocked.
