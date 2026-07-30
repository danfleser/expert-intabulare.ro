'use strict';
// Page builders. Each returns { path, html, section } where path is docs-relative
// ("/servicii/…/x.html") and section names the sitemap bucket.

const fs = require('fs');
const path = require('path');
const {
  escHtml, escAttr, fnv1a, approxRoadKm, fitTitle,
} = require('./util');
const { renderTemplate, fillParams } = require('./render');
const chrome = require('./chrome');
const schema = require('./schema');
const { renderSections } = require('./sections');

const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');
const tplCache = new Map();
function tpl(name) {
  if (!tplCache.has(name)) tplCache.set(name, fs.readFileSync(path.join(TEMPLATES_DIR, name), 'utf8'));
  return tplCache.get(name);
}

/** Canonical URL for a docs-relative path: hubs get trailing-slash form. */
function canonicalUrl(site, p) {
  return site.domain + (p.endsWith('/index.html') ? p.slice(0, -'index.html'.length) : p);
}

/** Public URL path (used in hrefs): trailing-slash for hubs. */
function urlPath(p) {
  return p.endsWith('/index.html') ? p.slice(0, -'index.html'.length) : p;
}

function hreflangTags(site, roPath, enPath) {
  if (!roPath || !enPath) return '';
  const ro = site.domain + urlPath(roPath);
  const en = site.domain + urlPath(enPath);
  return (
    `<link rel="alternate" hreflang="ro" href="${escAttr(ro)}">\n    ` +
    `<link rel="alternate" hreflang="en" href="${escAttr(en)}">\n    ` +
    `<link rel="alternate" hreflang="x-default" href="${escAttr(ro)}">`
  );
}

/**
 * Human label for a link to an authored page.
 *
 * `title` is the <title> tag and some verticals append the site suffix
 * ("… | Expert Intabulare"). That suffix is meaningless inside an on-page
 * "Citește și" list, so prefer the page's h1 and otherwise strip the suffix.
 */
function displayLabel(entry) {
  if (!entry) return '';
  if (entry.h1) return entry.h1;
  return String(entry.title || '').split(/\s+\|\s+/)[0].trim();
}

/** Lowercase a display name for use mid-sentence, preserving acronyms (OCPI, PUZ…). */
function midSentence(name) {
  return String(name).replace(/^\p{Lu}(?!\p{Lu})/u, (c) => c.toLowerCase());
}

/**
 * Assemble a full page through layout.html / layout-en.html.
 * opts: { lang, path, title, metaDescription, h1, breadcrumbItems, content, jsonldExtra[],
 *         namespace, waTopic, waLiteral, en, hreflangRo, hreflangEn, trustBar, extraJs, enHref, roHref }
 */
function assemblePage(ctx, opts) {
  const { site } = ctx;
  const en = !!opts.en;
  const t = en ? site.en : site.ro;
  const bc = chrome.breadcrumbs(site, opts.breadcrumbItems);
  const jsonld = [
    schema.localBusiness(site),
    bc.jsonld,
    ...(opts.jsonldExtra || []),
  ].map(schema.jsonLdScript).join('\n    ');

  const cta = (extra) =>
    chrome.ctaWhatsapp(site, {
      namespace: opts.namespace,
      topic: opts.waTopic,
      literalMessage: opts.waLiteral,
      en,
      extraClass: extra,
    });

  const html = renderTemplate(tpl(en ? 'layout-en.html' : 'layout.html'), {
    lang: en ? 'en' : 'ro',
    title: opts.title,
    metaDescription: opts.metaDescription,
    canonical: canonicalUrl(site, opts.path),
    hreflangTags: hreflangTags(site, opts.hreflangRo, opts.hreflangEn),
    jsonld,
    header: en
      ? chrome.headerEn(site, { roHref: opts.roHref || '/', namespace: opts.namespace, topic: opts.waTopic, literalMessage: opts.waLiteral })
      : chrome.headerRo(site, { enHref: opts.enHref || '/en/', namespace: opts.namespace, topic: opts.waTopic, literalMessage: opts.waLiteral }),
    h1: opts.h1,
    breadcrumbItems: bc.html,
    heroCta: cta('mt-2'),
    dataStrip: chrome.dataStrip(site, en),
    content: opts.content,
    trustBar: opts.trustBar === false ? '' : chrome.trustBar(site, en),
    preFooterHeading: t.preFooterHeading,
    preFooterText: t.preFooterText,
    preFooterCta: cta(''),
    footer: en
      ? chrome.footerEn(site, { roHref: opts.roHref || '/', enPages: ctx.enPagesForFooter })
      : chrome.footerRo(site),
    cookie: chrome.cookieAlert(site, en),
    waBarHref: chrome.waHrefFor(site, opts.namespace, opts.waTopic, opts.waLiteral),
    telHref: site.nap.phone,
    telDisplay: site.nap.phoneDisplay,
    chromeJs: chrome.CHROME_JS,
    extraJs: opts.extraJs || '',
  }, ctx.warnings, opts.path);

  return { path: opts.path, html, section: opts.section };
}

// ---------- shared building blocks ----------

function cardBlock(heading, innerHtml, icon) {
  if (icon) {
    return (
      `<div class="card c-card-service mb-5"><div class="card-body">` +
      `<div class="icon-chip"><i class="bi ${icon}"></i></div>` +
      `<h2 class="h5 mb-3">${escHtml(heading)}</h2>${innerHtml}</div></div>`
    );
  }
  return (
    `<div class="card about-card mb-5"><div class="card-body">` +
    `<h2 class="h5 mb-3">${escHtml(heading)}</h2>${innerHtml}</div></div>`
  );
}

function checklistBlock(heading, items) {
  if (!items || !items.length) return '';
  const lis = items.map((d) => `<li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>${escHtml(d)}</li>`).join('');
  return (
    `<div class="card about-card mb-5 checklist-print"><div class="card-body">` +
    `<h2 class="h5 mb-3">${escHtml(heading)}</h2><ul class="list-unstyled mb-3">${lis}</ul>` +
    `<p class="fz-14 mb-0 d-print-none"><a href="javascript:window.print()"><i class="bi bi-printer me-1"></i>Printează lista</a></p></div></div>`
  );
}

// FAQ as D1 index panels: details + hairline rows, open on desktop, collapsed on
// mobile (chrome JS strips [open] from [data-mob] panels below 960px).
function faqDetails(faqs) {
  return faqs
    .map((f) => `<details class="panel mb-2" open data-mob><summary><span class="q">${escHtml(f.q)}</span><span class="count"></span></summary><div class="panel-body"><p class="mt-2 mb-0">${escHtml(f.a)}</p></div></details>`)
    .join('');
}

/** Deterministic selection of k distinct items from pool, seeded. */
function pickSeeded(pool, k, seed) {
  const n = pool.length;
  if (n <= k) return pool.slice();
  const step = 1 + (seed % (n - 1));
  const out = [];
  const used = new Set();
  let idx = seed % n;
  while (out.length < k) {
    while (used.has(idx)) idx = (idx + 1) % n;
    used.add(idx);
    out.push(pool[idx]);
    idx = (idx + step) % n;
  }
  return out;
}

/** Distance in km from Aiud (business HQ) for a locality record. */
function distanceKm(site, loc) {
  if (Number.isFinite(loc.distanceKmFromAiud)) return loc.distanceKmFromAiud;
  if (Number.isFinite(loc.lat) && Number.isFinite(loc.lon)) {
    return approxRoadKm(site.nap.lat, site.nap.lon, loc.lat, loc.lon);
  }
  return null;
}

function ocpiName(loc) {
  if (!loc.ocpiOffice) return null;
  return typeof loc.ocpiOffice === 'string' ? loc.ocpiOffice : loc.ocpiOffice.name;
}

/**
 * Per-service "where does the file get lodged" contract.
 *
 * The leaf template asserts, four times per page, that the documentation is
 * lodged at the locality's BCPI office. That is true for the eight cadastral
 * services and FALSE for at least one service about to gain locality pages:
 * an energy performance certificate is never lodged at the land registry
 * (PLAN-rank-first.md §1.2, defect 1). The claim therefore has to be
 * per-service data, not a hardcoded template sentence.
 *
 * Data contract — `services.json`, optional, per service:
 *
 *   "depunere": {                     // alias accepted: "depunereTarget"
 *     "atBcpi": false,                // default true = today's BCPI wording
 *     "cardHeading":     "…",         // heading of the "Unde se depune dosarul" card
 *     "cardText":        "…",         // body of that card
 *     "introSentence":   "…",         // closing sentence of the intro paragraph
 *     "contextSentence": "…",         // BCPI sentence inside "Despre lucrări în X"
 *     "metaTail":        "…"          // meta-description tail (see buildServiceLocality)
 *   }
 *
 * All five strings are service-constant (document frequency 100% inside the
 * sibling group ⇒ boilerplate ⇒ overlap-neutral) and are run through
 * `fillParams`, so `{locality}`, `{judet}`, `{ocpi}`, `{serviciu}`, `{sate}`,
 * `{distanta}` are available. A plain string is read as
 * `{ atBcpi: false, cardText: <string> }`.
 *
 * Absent field ⇒ byte-identical output to before this mechanism existed.
 * `atBcpi: false` with no strings ⇒ every BCPI-lodging sentence is suppressed
 * and replaced with wording that claims no lodging target at all, so a service
 * can be flipped to leaves safely before its copy has been authored.
 */
function depunereOf(service) {
  const raw = (service && (service.depunere || service.depunereTarget)) || null;
  const d = typeof raw === 'string' ? { atBcpi: false, cardText: raw } : (raw || {});
  return {
    atBcpi: d.atBcpi !== false,
    // Did anyone actually tell us? Absent field means "nobody has ruled on this
    // service", which is not the same as "yes, it goes to BCPI". The eight
    // services with locality pages have asserted BCPI lodging on 1,516 live
    // leaves and are settled; the four hubOnly services have no authored copy at
    // all, so their hubs must not originate the claim (see buildServiceCountyHub).
    declared: raw != null,
    dropLocalNoteCadastral: d.dropLocalNoteCadastral === true,
    cardHeading: d.cardHeading || null,
    cardText: d.cardText || null,
    introSentence: d.introSentence || null,
    contextSentence: d.contextSentence || null,
    metaTail: d.metaTail || null,
  };
}
/**
 * The site-wide disclaimer ends "…depinde de teren, documente și situația din cartea
 * funciară" — the three things that actually move a cadastral quote. For a service
 * with no land and no CF in it, that sentence names cost drivers the job does not
 * have, on a page whose own card says it has nothing to do with cartea funciară. A
 * service may therefore override it; every service that does not gets `site`'s
 * string, unchanged.
 */
function priceDisclaimerFor(site, service) {
  return (service && service.priceDisclaimer) || site.priceDisclaimer;
}
function ocpiAddress(loc) {
  return loc.ocpiOffice && typeof loc.ocpiOffice === 'object' ? loc.ocpiOffice.address : null;
}

/** Params available inside authored copy ({locality}, {judet}, {distance} …). */
function copyParams(site, service, loc, county) {
  const km = distanceKm(site, loc);
  const p = {
    locality: loc.name,
    county: county ? county.name : loc.county,
    distance: km != null ? `aprox. ${km} km` : '',
    distanceKm: km != null ? String(km) : '',
    ocpi: ocpiName(loc) || '',
    villages: (loc.villages || []).join(', '),
    service: service ? service.name : '',
    profile: loc.profile || '',
  };
  // Romanian aliases used by content authors
  p.localitate = p.locality; p.judet = p.county; p.distanta = p.distance;
  p.serviciu = p.service; p.sate = p.villages;
  return p;
}

// ---------- service × locality ----------

function pickIntroVariant(service, loc, seed) {
  let variants = service.introVariants || [];
  const withProfile = variants.filter((v) => typeof v === 'object' && v.profile && v.profile === loc.profile);
  if (withProfile.length) variants = withProfile;
  if (!variants.length) return null;
  const v = variants[seed % variants.length];
  return typeof v === 'string' ? v : v.text;
}

/**
 * Compose a per-locality context paragraph from REAL data fields, with sentence
 * frames chosen by seed so neighbouring pages never share phrasing. Every fact
 * comes from the locality record — nothing is invented.
 */
function buildLocalContext(ctx, service, loc, county, seed) {
  const countyName = county ? county.name : loc.county;
  const km = distanceKm(ctx.site, loc);
  const typeLabel = loc.type === 'municipiu' ? 'municipiul' : loc.type === 'oras' ? 'orașul' : 'comuna';
  // Romanian takes the genitive here — "centrul de + tip" is wrong in every variant.
  // The old typeLabel.replace(/ul$/, '') also produced the non-word "municipi" and
  // left "comuna" without its diacritic.
  const centrulGenitiv =
    loc.type === 'municipiu' ? 'centrul municipiului'
      : loc.type === 'oras' ? 'centrul orașului'
        : loc.type === 'comuna' ? 'centrul comunei'
          : 'centrul localității';
  const s = [];

  const distFrames = [
    (n) => `${typeLabel.charAt(0).toUpperCase() + typeLabel.slice(1)} ${n} se află la aproximativ ${km} km de biroul nostru din Aiud, așa că programăm măsurătorile fără costuri suplimentare de mobilizare.`,
    (n) => `De la Aiud până în ${n} facem aproximativ ${km} km — o deplasare pe care o programăm de regulă în aceeași săptămână.`,
    (n) => `Distanța de circa ${km} km față de Aiud ne permite să răspundem rapid pentru lucrările din ${n}, inclusiv la măsurători cu termen scurt.`,
    (n) => `Pentru ${typeLabel} ${n}, aflat${loc.type === 'comuna' ? 'ă' : ''} la aproximativ ${km} km de Aiud, mobilizarea în teren se face rapid.`,
  ];
  // km === 0 is the home-office case: exactly one locality record carries
  // distanceKmFromAiud: 0, the town the office sits in. A seeded distance frame
  // there reads "se află la aproximativ 0 km de biroul nostru din Aiud" — and can
  // draw the "De la Aiud până în Aiud" frame — so the home case gets one fixed
  // frame instead of the pool. The frame is kept (it feeds word count), not skipped.
  if (km === 0) {
    s.push(
      `Fiind stabiliți chiar în ${loc.name}, preluăm cu prioritate lucrările din ${loc.type || 'localitate'} ` +
      'și din satele aparținătoare, inclusiv măsurătorile cu termen scurt.'
    );
  } else if (km != null) {
    s.push(distFrames[(seed >>> 0) % distFrames.length](loc.name));
  }

  const vill = (loc.villages || []).filter(Boolean);
  if (vill.length > 1) {
    const villFrames = [
      () => `Pe lângă ${centrulGenitiv}, acoperim toate cele ${vill.length} sate aparținătoare — de la ${vill[0]} până la ${vill[vill.length - 1]}.`,
      () => `Lucrările acoperă întreaga unitate administrativ-teritorială: ${vill.slice(0, Math.min(4, vill.length)).join(', ')}${vill.length > 4 ? ' și celelalte sate aparținătoare' : ''}.`,
      () => `Am executat măsurători atât în ${loc.name}, cât și în satele componente precum ${vill[Math.floor(vill.length / 2)]} sau ${vill[vill.length - 1]}.`,
      () => `Indiferent că imobilul este în ${loc.name} sau într-un sat aparținător precum ${vill[0]}, procedura și actele sunt aceleași.`,
    ];
    s.push(villFrames[(seed >>> 2) % villFrames.length]());
  }

  const ocpi = typeof loc.ocpiOffice === 'string' ? loc.ocpiOffice : (loc.ocpiOffice && loc.ocpiOffice.name);
  const dep = depunereOf(service);
  if (dep.contextSentence) {
    s.push(fillParams(dep.contextSentence, copyParams(ctx.site, service, loc, county)));
  } else if (ocpi && dep.atBcpi) {
    const ocpiFrames = [
      // Naming the locality instead of "din zonă" is deliberate and load-bearing:
      // cutting the self-praise clause alone costs page-exclusive shingles that
      // spanned the office name into ", unde" and demotes a leaf. The two halves
      // of this edit go together or not at all.
      () => `Dosarele pentru imobilele din ${loc.name} se depun la ${ocpi}.`,
      () => `Competent teritorial pentru ${loc.name} este ${ocpi} — acolo depunem și urmărim fiecare dosar până la soluționare.`,
      () => `Documentațiile le predăm la ${ocpi}; urmărim termenele și răspundem noi la eventualele note de completare.`,
    ];
    s.push(ocpiFrames[(seed >>> 4) % ocpiFrames.length]());
  }

  const nb = (ctx.nearbyOf.get(loc.slug + '|' + loc.countySlug) || []).slice(0, 3).map((n) => n.name);
  if (nb.length >= 2) {
    const nbFrames = [
      () => `Deservim curent și localitățile învecinate — ${nb.join(', ')} — astfel că putem grupa lucrările și reduce costurile de deplasare.`,
      () => `Dacă aveți imobile și în ${nb[0]} sau ${nb[1]}, le putem măsura în aceeași deplasare.`,
      () => `Zona ${loc.name} – ${nb[0]} – ${nb[1]} face parte din aria noastră de lucru săptămânală.`,
    ];
    s.push(nbFrames[(seed >>> 6) % nbFrames.length]());
  }

  // Profile-specific context: what this terrain type means for the work, phrased
  // from a per-profile pool hashed independently of the other frames.
  const svc = midSentence(service.shortName || service.name);
  const profilePools = {
    'agricol-campie': [
      `Terenurile din zona de câmpie, cu parcele lungi provenite din fostele CAP-uri, cer identificare atentă pe planurile parcelare înainte de orice lucrare de ${svc}.`,
      `În zonele agricole ca ${loc.name}, lucrarea pornește aproape întotdeauna de la titlul de proprietate și planul parcelar al tarlalei — le analizăm înainte de deplasare.`,
      `Parcelele agricole de aici se măsoară cel mai eficient cu GPS RTK; terenul deschis ne permite randament bun și prețuri corecte la ${svc}.`,
      `Multe parcele din ${loc.name} au front la drumuri de exploatare care s-au mutat în timp — măsurătoarea lămurește exact unde sunt limitele legale.`,
    ],
    'montan-apuseni': [
      `Relieful accidentat din zona ${loc.name} cere echipament potrivit și experiență: măsurăm cu stație totală acolo unde semnalul GPS este slab, indiferent de pantă sau pădure.`,
      `În zona de munte, proprietățile au adesea limite naturale — pâraie, culmi, liziere — pe care le documentăm atent la ${svc}.`,
      `Ne deplasăm în satele risipite din jurul localității ${loc.name}, oricât de izolat ar fi imobilul.`,
      `La imobilele din zona montană, actele vechi și folosința din bătrâni cer deseori lămuriri suplimentare.`,
    ],
    'urban': [
      `În ${loc.name}, lucrările de ${svc} se corelează cu evidențele existente — imobile învecinate deja cadastrate, aliniamente și reglementări de urbanism.`,
      `Mediul urban aduce cerințe suplimentare: acorduri de vecinătate în zone dens construite, corelarea cu PUG-ul și termene ferme la notar sau bancă.`,
      `Pentru imobilele din ${loc.name}, verificăm întotdeauna istoricul cărții funciare înainte de măsurătoare — economisește timp și evită respingerile.`,
    ],
    'periurban': [
      `Zonele periurbane ca ${loc.name} se transformă rapid: terenuri agricole devenite intravilan, lotizări noi, construcții recente — situații pe care le întâlnim zilnic la ${svc}.`,
      `În ${loc.name}, multe imobile au documentații întocmite recent la dezvoltare — le verificăm și le corelăm cu măsurătorile noastre înainte de orice modificare.`,
      `Trecerea din extravilan în intravilan, frecventă în zona ${loc.name}, schimbă regimul imobilului — vă spunem ce presupune pentru actele dumneavoastră.`,
    ],
  };
  // The built-in pools above are written from the CADASTRAL point of view — parcels,
  // plan parcelar, titluri de proprietate, istoricul cărții funciare, extravilan →
  // intravilan. They are true for the ten services that survey land and false for a
  // service that evaluates a building's thermal envelope: "lucrările de certificat
  // energetic se corelează cu imobile învecinate deja cadastrate" is simply not what
  // an energy certificate involves. `svc` substitution makes such a sentence read as
  // if it were about this service, which is worse than generic.
  //
  // So a service may supply `profileNotes` in services.json — same shape, keyed by
  // locality profile — and it wins per profile. Absent field, or a profile the
  // service does not override, falls through to the built-in pool, so this is
  // byte-identical for every service that declares nothing. Authored strings go
  // through fillParams, so {localitate}, {judet}, {ocpi}, {sate} are available.
  const authored = (service && service.profileNotes) || null;
  const pool = (authored && Array.isArray(authored[loc.profile]) && authored[loc.profile].length)
    ? authored[loc.profile].map((t) => fillParams(t, copyParams(ctx.site, service, loc, county)))
    : profilePools[loc.profile];
  if (pool) s.push(pool[fnv1a(`prof:${loc.slug}:${service.slug}`) % pool.length]);

  return s.map(escHtml).join(' ');
}

/**
 * `localNote` is a per-LOCALITY fact, reused across all twelve services, and it was
 * written when every service on the site was a cadastral one. Almost every record
 * closes on the competent land-registry office ("Dosarele se depun la BCPI Turda",
 * "Competența este la BCPI Blaj"), and many describe the locality through its
 * cadastral workload ("turismul a înmulțit cererile de intabulare", "loturile noi
 * se dezmembrează și se intabulează în ritm alert"). On a cadastral page all of
 * that is exactly right. On a page that has just told the reader, in its own card,
 * that this document "nu se depune la biroul de cadastru și nu are legătură cu
 * cartea funciară", the same sentences contradict the page two paragraphs later —
 * and they sit under the heading "Despre lucrări în X", where they read as a
 * description of the work THIS page sells.
 *
 * A service opts in with `depunere.dropLocalNoteCadastral: true`; sentences naming
 * a land-registry office, record or procedure are then dropped from that service's
 * leaves only. Deliberately NOT keyed off `atBcpi`: expertize-documentatii also
 * sets atBcpi:false, yet its documentații de îndreptare genuinely ARE lodged at the
 * competent office and its own contextSentence says so — the cadastral sentences
 * belong on those pages. Sentence-level, not string-level, so the geography, the
 * terrain and the building stock all survive; only the land-registry material goes.
 */
const CADASTRAL_SENTENCE = new RegExp([
  'BCPI', 'OCPI', 'birou(l|ului)? de cadastru', 'birou(l|ului) din',
  'cart(e|ea|ii)? funciar', 'cărții funciare', 'cadastru', 'cadastral', 'cadastrate',
  'intabul', 'dezmembr', 'apartamentar', 'extras(ul)? CF',
  'plan(ul)? parcelar', 'punere în posesie', 'arondat',
  'dosar(ul|e|ele)? se depun', 'not(ă|e|ele) de completare',
].join('|'), 'i');
// Splitting on ". " alone tears the address abbreviations these notes are full of:
// "BCPI Orăștie, de pe Str. George Coșbuc nr. 7, acoperă estul județului" broke after
// "Str.", so the lodging half was dropped and the orphan tail "George Coșbuc nr. 7,
// acoperă estul județului." was published. Verified counts in the locality data:
// "Str." ×10, "nr." ×14, "Bd." ×1. Protect them, split, restore.
const ABBREV = /\b(Str|str|Bd|bd|Nr|nr|jud|aprox|ap|et|sc)\.(?=\s)/g;
const ABBREV_DOT = '\u0001'; // sentinel; cannot occur in authored copy
function splitSentences(text) {
  return String(text)
    .replace(ABBREV, (m, w) => w + ABBREV_DOT)
    .split(/(?<=\.)\s+/)
    .map((s) => s.split(ABBREV_DOT).join('.'));
}
function stripCadastralSentences(note) {
  const kept = splitSentences(note).filter((sentence) => !CADASTRAL_SENTENCE.test(sentence));
  return kept.join(' ').trim();
}

function buildServiceLocality(ctx, service, loc, emitted) {
  const { site } = ctx;
  const county = ctx.countiesBySlug.get(loc.countySlug) || null;
  const countyName = county ? county.name : loc.county;
  const seed = fnv1a(`${service.slug}:${loc.slug}`);
  const params = copyParams(site, service, loc, county);
  const km = distanceKm(site, loc);
  const pagePath = `/servicii/${service.slug}/${loc.countySlug}/${loc.slug}.html`;

  // Intro: seeded opener + profile-selected variant + seeded closer.
  // Opener/closer draw from pools hashed on DIFFERENT keys than the variant, so the
  // sibling that shares the variant almost never shares the surrounding sentences too.
  const variant = pickIntroVariant(service, loc, seed);
  const openerPool = [
    `Căutați „${midSentence(service.name)} ${loc.name}”?`,
    `${loc.name} face parte din aria noastră de lucru curentă pentru ${midSentence(service.shortName || service.name)}.`,
    `Biroul nostru din Aiud execută frecvent lucrări de ${midSentence(service.shortName || service.name)} în zona ${loc.name}.`,
    `Pentru proprietarii din ${loc.name}, iată cum decurge concret lucrarea și ce trebuie pregătit.`,
    `Lucrăm de peste 25 de ani în județul ${countyName}, iar ${loc.name} este una dintre zonele pe care le cunoaștem bine.`,
    `Aveți un imobil în ${loc.name}? Vă spunem exact pașii, actele și costurile orientative.`,
  ];
  const closerPool = [
    `Scrieți-ne pe WhatsApp situația dumneavoastră din ${loc.name} și primiți răspuns concret, de regulă în aceeași zi.`,
    `Un mesaj scurt cu ce aveți de rezolvat în ${loc.name} este suficient — revenim cu pașii și costul exact.`,
    `Prima evaluare a situației imobilului din ${loc.name} este gratuită — trimiteți actele pe WhatsApp.`,
    `Spuneți-ne termenul dumneavoastră — la lucrările din ${loc.name} ne organizăm după el.`,
    `Fotografiați actele imobilului și trimiteți-le pe WhatsApp; vă spunem imediat dacă și cum se poate rezolva.`,
  ];
  const opener = openerPool[fnv1a(`open:${loc.slug}:${service.slug}`) % openerPool.length];
  const closer = closerPool[fnv1a(`close:${loc.countySlug}:${loc.slug}:${service.slug}`) % closerPool.length];
  const introParts = [];
  introParts.push(`<p class="lead">${escHtml(opener)}${variant ? ' ' + escHtml(fillParams(variant, params)) : ''}</p>`);
  introParts.push(`<p>${escHtml(closer)}</p>`);
  // Closing sentence of the intro. Default asserts BCPI lodging; a service that is
  // not lodged at the land registry supplies its own sentence, or none at all.
  const dep = depunereOf(service);
  const ocpiLabel = escHtml(ocpiName(loc) || 'biroul de cadastru competent');
  if (km === 0) {
    // Home town: the office is here, so a distance sentence contradicts itself.
    const tail = dep.introSentence
      ? escHtml(fillParams(dep.introSentence, params))
      : dep.atBcpi
        ? `Pentru imobilele din ${escHtml(loc.type || 'localitate')} și din satele aparținătoare nu există timp pierdut pe drum: ` +
          `mergem la măsurătoare direct de la birou și depunem dosarul personal la ${ocpiLabel}, aflat la câteva minute de noi.`
        : `Pentru imobilele din ${escHtml(loc.type || 'localitate')} și din satele aparținătoare nu există timp pierdut pe drum: ` +
          `mergem la măsurătoare direct de la birou.`;
    introParts.push(
      `<p>${escHtml(loc.name)} (${escHtml(loc.type || 'localitate')}, județul ${escHtml(countyName)}) este localitatea unde avem biroul. ` +
      `${tail}</p>`
    );
  } else if (km != null) {
    const tail = dep.introSentence
      ? escHtml(fillParams(dep.introSentence, params))
      : dep.atBcpi
        ? `Ne deplasăm la fața locului pentru măsurători și predăm documentația completă la ${ocpiLabel}.`
        : 'Ne deplasăm la fața locului pentru măsurători și vă predăm documentația completă.';
    introParts.push(
      `<p>${escHtml(loc.name)} (${escHtml(loc.type || 'localitate')}, județul ${escHtml(countyName)}) se află la aprox. ${km} km de biroul nostru din Aiud. ` +
      `${tail}</p>`
    );
  }
  const introHtml = introParts.join('\n');

  let ocpiBlock = '';
  if (dep.cardText) {
    ocpiBlock = cardBlock(
      dep.cardHeading || 'Unde se depune dosarul',
      `<p class="mb-0">${escHtml(fillParams(dep.cardText, params))}</p>`,
      'bi-geo-alt'
    );
  } else if (dep.atBcpi && ocpiName(loc)) {
    ocpiBlock = cardBlock(
      dep.cardHeading || 'Unde se depune dosarul',
      `<p class="mb-0">Pentru imobilele din ${escHtml(loc.name)}, documentația cadastrală se depune la <strong>${escHtml(ocpiName(loc))}</strong>${ocpiAddress(loc) ? `, ${escHtml(ocpiAddress(loc))}` : ''}. Ne ocupăm noi de depunere și de urmărirea dosarului.</p>`,
      'bi-geo-alt'
    );
  }

  const villagesBlock = (loc.villages && loc.villages.length)
    ? `<p>Lucrăm în toate satele aparținătoare: <strong>${loc.villages.map(escHtml).join(', ')}</strong>.</p>`
    : '';

  // Composed local-context paragraph: real per-locality facts (type, distance, BCPI,
  // component villages, neighbors) run through seeded sentence frames so adjacent
  // localities never share phrasing. This is data-driven prose, not spun text.
  const localContext = buildLocalContext(ctx, service, loc, county, seed);
  const localNote = loc.localNote
    ? (dep.dropLocalNoteCadastral ? stripCadastralSentences(loc.localNote) : loc.localNote)
    : '';
  const localNoteBlock = (localNote || localContext)
    ? `<div class="mb-5"><h2 class="h5 mb-3">Despre lucrări în ${escHtml(loc.name)}</h2>` +
      (localContext ? `<p>${localContext}</p>` : '') +
      (localNote ? `<p>${escHtml(localNote)}</p>` : '') +
      `</div>`
    : '';
  // Keyed off county, not matrix: the deplasare note applies to every non-Alba locality,
  // including tier-2 towns upgraded to the full matrix (g-plan §1a condition).
  const deplasare = loc.countySlug !== 'alba' ? chrome.deplasareBlock(site) : '';
  const documentsBlock = checklistBlock('Acte necesare (orientativ)', service.documents);
  const processBlock = (service.process && service.process.length)
    ? `<div class="mb-5"><h2 class="h5 mb-3">Cum decurge procesul</h2><ol class="ps-3">${service.process.map((s) => `<li class="mb-2">${escHtml(fillParams(s, params))}</li>`).join('')}</ol></div>`
    : '';
  const priceBlock = service.priceRange
    ? `<div class="mb-5"><p><strong>Preț orientativ:</strong> ${escHtml(service.priceRange)}. <span class="fz-14">${escHtml(priceDisclaimerFor(site, service))}</span></p></div>`
    : '';
  // Same ruling as the county hub (see buildServiceCountyHub): `countyNote` is
  // written from the land-registry point of view — it ends "dosarul se depune
  // întotdeauna la biroul competent pentru localitatea imobilului". On a service
  // that files nothing at BCPI that sentence contradicts this page's own
  // depunere card two blocks above it ("nu se depune la biroul de cadastru"), so
  // it rides on the same flag as every other lodging claim. Zero-diff for the
  // eight cadastral services: they declare no `depunere`, so `atBcpi` is true.
  const countyNoteBlock = (county && county.countyNote && dep.atBcpi)
    ? cardBlock(`Particularități OCPI în județul ${countyName}`, `<p class="mb-0">${escHtml(county.countyNote)}</p>`, 'bi-info-circle')
    : '';

  // FAQ: 4–6 deterministic picks from the per-service pool, locality-parameterized.
  // Seed decoupled from the intro-variant seed so no sibling shares BOTH the intro and the FAQ set.
  let faqBlock = '';
  let faqs = [];
  if (service.faqPool && service.faqPool.length >= 4) {
    const faqSeed = fnv1a(`faq:${loc.slug}:${service.slug}:${loc.countySlug}`);
    const count = 4 + (faqSeed % 3);
    faqs = pickSeeded(service.faqPool, count, faqSeed).map((f) => ({
      q: fillParams(f.q, params),
      a: fillParams(f.a, params),
    }));
    faqBlock = `<div class="mb-5"><h2 class="h5 mb-3">Întrebări frecvente — ${escHtml(midSentence(service.name))} în ${escHtml(loc.name)}</h2>${faqDetails(faqs)}</div>`;
  }

  // Cross-links restricted to the emitted set to keep zero broken links
  const otherServices = [];
  for (const s of ctx.services) {
    if (s.slug === service.slug) continue;
    if (emitted.has(`${s.slug}/${loc.countySlug}/${loc.slug}`)) {
      otherServices.push({ href: `/servicii/${s.slug}/${loc.countySlug}/${loc.slug}.html`, label: s.name });
    }
  }
  const otherServicesBlock = chrome.linkCard(`Alte servicii în ${loc.name}`, otherServices.slice(0, 8));

  const nearby = (ctx.nearbyOf.get(loc.slug + '|' + loc.countySlug) || [])
    .filter((n) => emitted.has(`${service.slug}/${n.countySlug}/${n.slug}`))
    .slice(0, 8)
    .map((n) => ({
      href: `/servicii/${service.slug}/${n.countySlug}/${n.slug}.html`,
      label: n.km != null ? `${n.name} (aprox. ${n.km} km)` : n.name,
    }));
  const nearbyBlock = chrome.linkCard(`${service.name} în localități apropiate`, nearby);

  const hubLinksBlock = chrome.linkCard('Vedeți și', [
    { href: `/servicii/${service.slug}/`, label: `${service.name} — toate zonele` },
    { href: `/zone/${loc.countySlug}/`, label: `Toate serviciile în județul ${countyName}` },
  ]);

  const hasCountyHub = !!(ctx.serviceCountyHubs && ctx.serviceCountyHubs.has(`${service.slug}/${loc.countySlug}`));

  const waTopic = `${midSentence(service.shortName || service.name)} în ${loc.name}, județul ${countyName}`;
  const content = renderTemplate(tpl('page-service-locality.html'), {
    introHtml, ocpiBlock, villagesBlock, localNoteBlock,
    deplasareBlock: deplasare, documentsBlock, processBlock, priceBlock, countyNoteBlock, faqBlock,
    sidebar: chrome.contactCard(site, { namespace: 'servicii', topic: waTopic }),
    ownerBlock: chrome.ownerCard(site),
    otherServicesBlock, nearbyBlock, hubLinksBlock,
  }, ctx.warnings, pagePath);

  const title = fitTitle([
    `${service.name} în ${loc.name}, jud. ${countyName}`,
    ' — Topograf autorizat',
    ' | Fleser Aurel Expert',
  ]);
  // Meta description tail. The distance from Aiud is a selling point when the
  // locality is genuinely close and an argument against us when it is not: the
  // snippet for a 94 km commune used to read "aprox. 94 km de Aiud", i.e. it
  // advertised the distance from the customer inside the SERP, in a string that
  // differed from its ~221 siblings only by service, place and a number
  // (PLAN-rank-first.md §1.4). Above the threshold the distance is replaced by
  // the one fact a searcher at county level actually needs — which office the
  // file goes to. Meta lives in <head>, outside the gated content region, so
  // this touches no gate. Home-office case ("birou chiar în X") is unchanged.
  const META_DISTANCE_MAX_KM = 25;
  const META_MAX_CHARS = 155;
  const metaHead = `${service.name} în ${loc.name}: acte, pași, prețuri orientative. Topograf autorizat ANCPI`;
  const metaPhone = `. Tel. ${site.nap.phoneDisplay}.`;
  const metaOffice = dep.atBcpi ? ocpiName(loc) : null;
  // Candidates, most informative first; the first one that fits the snippet
  // budget wins. Long service + long place + long office name is the only case
  // that falls all the way through to no tail (7 of 1,516 leaves).
  const metaTails =
    km === 0 ? [`, birou chiar în ${loc.name}`]
      : (km != null && km <= META_DISTANCE_MAX_KM) ? [`, aprox. ${km} km de Aiud`]
        : dep.metaTail ? [`. ${fillParams(dep.metaTail, params)}`]
          : metaOffice ? [`. Dosarul se depune la ${metaOffice}`, `. Depunere la ${metaOffice}`]
            : [];
  metaTails.push('');
  const metaDescription =
    metaHead +
    (metaTails.find((t) => [...(metaHead + t + metaPhone)].length <= META_MAX_CHARS) || '') +
    metaPhone;

  const jsonldExtra = [
    schema.serviceSchema(site, {
      serviceName: `${service.name} în ${loc.name}`,
      description: metaDescription,
      areaServed: `${loc.name}, județul ${countyName}`,
      url: pagePath,
    }),
  ];
  if (faqs.length) jsonldExtra.push(schema.faqPage(faqs));

  return assemblePage(ctx, {
    path: pagePath,
    section: loc.countySlug === 'alba' ? 'serviciiAlba' : 'serviciiVecini',
    title, metaDescription,
    h1: `${service.name} în ${loc.name} (${countyName})`,
    breadcrumbItems: [
      { name: 'Acasă', url: '/' },
      { name: service.name, url: `/servicii/${service.slug}/` },
      // Position 3 is the leaf's parent. Pointing it at /zone/<county>/ switched
      // hierarchy axis mid-chain: position 3 was not a path ancestor of position
      // 4 and was shared by every service, which made this leaf a sibling of
      // every other service's leaf in the same county. Reparent to the
      // service×county hub — but ONLY where that hub exists, or the build emits
      // BreadcrumbList item URLs that 404 and verify.js fails on 892 leaves
      // (PLAN-rank-first.md §1.3). /zone/<county>/ keeps its inbound link from
      // every leaf through hubLinksBlock above.
      hasCountyHub
        ? { name: `Județul ${countyName}`, url: `/servicii/${service.slug}/${loc.countySlug}/` }
        : { name: `Județul ${countyName}`, url: `/zone/${loc.countySlug}/` },
      { name: loc.name, url: urlPath(pagePath) },
    ],
    content,
    jsonldExtra,
    namespace: 'servicii',
    waTopic,
    hreflangRo: null, hreflangEn: null,
  });
}

// ---------- service hub ----------

function buildServiceHub(ctx, service, emitted) {
  const { site } = ctx;
  const pagePath = `/servicii/${service.slug}/index.html`;
  // Hub pages have no locality — fill authored {param} placeholders with generic
  // phrasing so no literal braces reach the page (same keys/aliases as copyParams).
  const hubParams = {
    locality: 'localitatea dumneavoastră',
    county: 'județul dumneavoastră',
    ocpi: 'biroul de cadastru competent',
    service: service.name,
    distance: '', distanceKm: '', villages: '', profile: '',
  };
  hubParams.localitate = hubParams.locality; hubParams.judet = hubParams.county;
  hubParams.serviciu = hubParams.service; hubParams.sate = hubParams.villages;
  hubParams.distanta = hubParams.distance;
  const introSource = service.hubIntro || service.intro || '';
  const introHtml = introSource
    ? (introSource.trim().startsWith('<') ? introSource : `<p class="lead">${escHtml(introSource)}</p>`)
    : `<p class="lead">${escHtml(service.name)} — serviciu realizat de topograf autorizat ANCPI, cu ridicare la fața locului și depunerea documentației la OCPI. Acoperim județul Alba și județele învecinate.</p>`;

  const documentsBlock = checklistBlock('Acte necesare (orientativ)', service.documents);
  const processBlock = (service.process && service.process.length)
    ? `<div class="mb-5"><h2 class="h5 mb-3">Cum decurge procesul</h2><ol class="ps-3">${service.process.map((s) => `<li class="mb-2">${escHtml(fillParams(s, hubParams))}</li>`).join('')}</ol></div>`
    : '';
  let priceBlock = '';
  if (service.priceTable && service.priceTable.rows) {
    const head = (service.priceTable.head || []).map((h) => `<th>${escHtml(h)}</th>`).join('');
    const rows = service.priceTable.rows.map((r) => `<tr>${r.map((c) => `<td>${escHtml(c)}</td>`).join('')}</tr>`).join('');
    priceBlock =
      `<div class="mb-5"><h2 class="h5 mb-3">Prețuri orientative</h2><div class="table-scroll"><table class="table">` +
      (head ? `<thead><tr>${head}</tr></thead>` : '') + `<tbody>${rows}</tbody></table></div>` +
      `<p class="fz-14">${escHtml(priceDisclaimerFor(site, service))}</p></div>`;
  } else if (service.priceRange) {
    priceBlock = `<div class="mb-5"><p><strong>Preț orientativ:</strong> ${escHtml(service.priceRange)}. <span class="fz-14">${escHtml(priceDisclaimerFor(site, service))}</span></p></div>`;
  }

  let faqBlock = '';
  let faqs = [];
  if (service.hubFaq && service.hubFaq.length) {
    faqs = service.hubFaq;
    faqBlock = `<div class="mb-5"><h2 class="h5 mb-3">Întrebări frecvente</h2>${faqDetails(faqs)}</div>`;
  }

  // Localities grouped by county (emitted pages only)
  const groups = [];
  for (const c of site.nav.counties) {
    const locs = ctx.localities
      .filter((l) => l.countySlug === c.slug && emitted.has(`${service.slug}/${l.countySlug}/${l.slug}`))
      .sort((a, b) => a.name.localeCompare(b.name, 'ro'));
    if (!locs.length) continue;
    const lis = locs
      .map((l) => `<li class="mb-1"><a href="/servicii/${service.slug}/${l.countySlug}/${l.slug}.html">${escHtml(l.name)}</a></li>`)
      .join('');
    // The county group heading links down to the service × county hub where one
    // exists: that hub is the leaves' breadcrumb parent, so the hierarchy has to
    // be walkable from the national hub too, not only upwards from a leaf.
    const hubHref = ctx.serviceCountyHubs && ctx.serviceCountyHubs.has(`${service.slug}/${c.slug}`)
      ? `/servicii/${service.slug}/${c.slug}/`
      : null;
    const heading = hubHref
      ? `<h3 class="h6 mb-3"><a href="${escAttr(hubHref)}">${escHtml(service.name)} în județul ${escHtml(c.label)}</a></h3>`
      : `<h3 class="h6 mb-3">Județul ${escHtml(c.label)}</h3>`;
    groups.push(
      `<div class="col-12 col-sm-6 col-lg-3">${heading}<ul class="list-unstyled fz-14">${lis}</ul></div>`
    );
  }
  const localityIndex = groups.length
    ? `<div class="mt-5"><h2 class="h4 mb-4">${escHtml(service.name)} — localități acoperite</h2><div class="row g-4">${groups.join('')}</div></div>`
    : '';

  const related = (service.related || [])
    .map((slug) => ctx.servicesBySlug.get(slug))
    .filter(Boolean)
    .map((s) => ({ href: `/servicii/${s.slug}/`, label: s.name }));

  const waTopic = midSentence(service.shortName || service.name);
  const content = renderTemplate(tpl('page-service-hub.html'), {
    introHtml, documentsBlock, processBlock, priceBlock, faqBlock,
    sidebar: chrome.contactCard(site, { namespace: 'servicii', topic: waTopic }),
    ownerBlock: chrome.ownerCard(site),
    relatedServicesBlock: chrome.linkCard('Servicii conexe', related),
    localityIndex,
  }, ctx.warnings, pagePath);

  const metaDescription = service.metaDescription ||
    `${service.name}: acte necesare, pași, prețuri orientative. Topograf autorizat ANCPI în județul Alba și împrejurimi. Tel. ${site.nap.phoneDisplay}.`;
  const jsonldExtra = [
    schema.serviceSchema(site, {
      serviceName: service.name,
      description: metaDescription,
      areaServed: 'Județul Alba și județele învecinate',
      url: urlPath(pagePath),
    }),
  ];
  if (faqs.length) jsonldExtra.push(schema.faqPage(faqs));

  const enPath = ctx.hreflangRoToEn.get(urlPath(pagePath)) || null;
  return assemblePage(ctx, {
    path: pagePath,
    section: 'serviciiAlba',
    title: fitTitle([`${service.name} — Topograf autorizat ANCPI`, ' | Fleser Aurel Expert']),
    metaDescription,
    h1: service.h1 || service.name,
    breadcrumbItems: [
      { name: 'Acasă', url: '/' },
      { name: service.name, url: urlPath(pagePath) },
    ],
    content,
    jsonldExtra,
    namespace: 'servicii',
    waTopic,
    hreflangRo: enPath ? urlPath(pagePath) : null,
    hreflangEn: enPath,
    enHref: enPath || '/en/',
  });
}

// ---------- service × county hub ----------

/**
 * Hub params for a county-scoped page: authored {placeholders} written for leaf
 * copy must not reach the page as literal braces (same keys/aliases as copyParams).
 */
function countyHubParams(service, county, atBcpi) {
  const p = {
    locality: 'localitatea dumneavoastră',
    county: county.name,
    ocpi: atBcpi ? 'biroul de cadastru competent' : 'instituția competentă',
    service: service.name,
    distance: '', distanceKm: '', villages: '', profile: '',
  };
  p.localitate = p.locality; p.judet = p.county; p.distanta = p.distance;
  p.serviciu = p.service; p.sate = p.villages;
  return p;
}

/**
 * Lead paragraph for a service × county hub.
 *
 * Data contract — `services.json`, optional:
 *   "countyIntro": { "alba": "…", "cluj": "…" }   // one paragraph per county
 *   "countyIntro": "…"                            // read as the ALBA paragraph only
 *
 * The bare-string form is deliberately restricted to Alba: PLAN-rank-first.md
 * §2.2 specifies the authored paragraph must name «județul Alba» and Alba Iulia
 * explicitly, and that text would be factually wrong on a Cluj or Sibiu hub.
 * Counties without an authored paragraph get the composed fallback below, which
 * states only what our own data already says.
 */
function countyIntroOf(service, county) {
  const ci = service.countyIntro;
  if (!ci) return null;
  if (typeof ci === 'string') return county.slug === 'alba' ? ci : null;
  return ci[county.slug] || null;
}

/** Towns (municipii + orașe) of a county that have an emitted page for this service. */
function countyTowns(ctx, service, county, emitted) {
  const rank = (t) => (t === 'municipiu' ? 0 : t === 'oras' ? 1 : 2);
  return ctx.localities
    .filter((l) => l.countySlug === county.slug && l.type !== 'comuna' &&
      emitted.has(`${service.slug}/${l.countySlug}/${l.slug}`))
    .sort((a, b) => rank(a.type) - rank(b.type) || a.name.localeCompare(b.name, 'ro'));
}

function buildServiceCountyHub(ctx, service, county, emitted) {
  const { site } = ctx;
  const pagePath = `/servicii/${service.slug}/${county.slug}/index.html`;
  const dep = depunereOf(service);
  const params = countyHubParams(service, county, dep.atBcpi);
  const towns = countyTowns(ctx, service, county, emitted);
  const locs = ctx.localities
    .filter((l) => l.countySlug === county.slug && emitted.has(`${service.slug}/${l.countySlug}/${l.slug}`))
    .sort((a, b) => a.name.localeCompare(b.name, 'ro'));
  // entries are {name, address, covers} objects (counties.json) or plain strings
  const offices = (county.bcpiOffices || []).map((o) => (typeof o === 'string' ? { name: o } : o)).filter((o) => o && o.name);
  const ocpiHqText = county.ocpiHq && typeof county.ocpiHq === 'object'
    ? `${county.ocpiHq.name}${county.ocpiHq.address ? `, ${county.ocpiHq.address}` : ''}`
    : county.ocpiHq;

  // Lead. Authored per county when available, otherwise composed from data we
  // already hold: no place fact, count, date or duration is originated here.
  const authoredIntro = countyIntroOf(service, county);
  let introHtml;
  if (authoredIntro) {
    introHtml = authoredIntro.trim().startsWith('<')
      ? authoredIntro
      : `<p class="lead">${escHtml(fillParams(authoredIntro, params))}</p>`;
  } else {
    const roList = (xs) => (xs.length > 1 ? `${xs.slice(0, -1).join(', ')} și ${xs[xs.length - 1]}` : xs[0]);
    const named = towns.slice(0, 3).map((t) => t.name);
    // Deliberately service-agnostic: this paragraph is the fallback for every one
    // of the 12 services, so it may not assert anything specific to cadastral work.
    const sentences = [
      `${service.name} în județul ${county.name}, cu deplasare la fața locului din biroul nostru din Aiud.`,
    ];
    if (named.length) {
      sentences.push(`Lucrăm în tot județul — inclusiv în ${roList(named)}.`);
    }
    introHtml = `<p class="lead">${escHtml(sentences[0])}</p>` +
      sentences.slice(1).map((s) => `<p>${escHtml(s)}</p>`).join('');
  }

  // Orașe principale — above the A–Z list, with the service in the anchor text.
  const townsBlock = towns.length
    ? `<div class="mb-5"><h2 class="h5 mb-3">Orașe și municipii din județul ${escHtml(county.name)}</h2>` +
      `<ul class="list-unstyled row g-2 mb-0">${towns
        .map((l) => `<li class="col-12 col-sm-6"><a href="/servicii/${escAttr(service.slug)}/${escAttr(l.countySlug)}/${escAttr(l.slug)}.html">${escHtml(service.name)} în ${escHtml(l.name)}</a></li>`)
        .join('')}</ul></div>`
    : '';

  const documentsBlock = checklistBlock('Acte necesare (orientativ)', service.documents);
  const processBlock = (service.process && service.process.length)
    ? `<div class="mb-5"><h2 class="h5 mb-3">Cum decurge procesul</h2><ol class="ps-3">${service.process.map((s) => `<li class="mb-2">${escHtml(fillParams(s, params))}</li>`).join('')}</ol></div>`
    : '';
  // Existing hedged orientative range only — no new figure, and never the price table.
  const priceBlock = service.priceRange
    ? `<div class="mb-5"><h2 class="h5 mb-3">Preț orientativ în județul ${escHtml(county.name)}</h2>` +
      `<p class="mb-0"><strong>${escHtml(service.priceRange)}</strong> <span class="fz-14">${escHtml(priceDisclaimerFor(site, service))}</span></p></div>`
    : '';

  // The BCPI block's home (chair D4): office facts belong on the hub, not on the
  // leaves. `covers` is authored per office; on the neighbouring counties it lists
  // only the localities inside our working area, so the phrasing states a subset
  // and never claims to be the office's full catchment.
  // Services with locality inventory have asserted BCPI lodging on their live
  // leaves; for the four hubOnly services nobody has ruled yet, so their hub
  // lists the offices as reference and hedges the lodging sentence instead of
  // asserting it. `depunere` in services.json settles it either way.
  const assertsLodging = dep.atBcpi && (dep.declared || service.hubOnly !== true);
  let bcpiBlock = '';
  if (assertsLodging && (offices.length || county.ocpiHq)) {
    const officeItems = offices
      .map((o) => {
        const covers = (o.covers || []).filter(Boolean);
        return `<li class="mb-3"><strong>${escHtml(o.name)}</strong>${o.address ? ` — ${escHtml(o.address)}` : ''}` +
          (covers.length ? `<br><span class="fz-14">Din localitățile în care lucrăm, aici se depun dosarele pentru: ${covers.map(escHtml).join(', ')}.</span>` : '') +
          `</li>`;
      })
      .join('');
    bcpiBlock = cardBlock(
      `Unde se depune dosarul în județul ${county.name}`,
      (county.ocpiHq ? `<p>Instituția coordonatoare este ${escHtml(ocpiHqText)}. Dosarul se depune însă la biroul teritorial competent pentru localitatea imobilului:</p>` : '') +
      (officeItems ? `<ul class="list-unstyled mb-0">${officeItems}</ul>` : '') +
      `<p class="fz-14 mb-0 mt-3">Depunerea și urmărirea dosarului le facem noi.</p>`,
      'bi-geo-alt'
    );
  } else if (dep.cardText) {
    bcpiBlock = cardBlock(
      dep.cardHeading || `Unde se depune dosarul în județul ${county.name}`,
      `<p class="mb-0">${escHtml(fillParams(dep.cardText, params))}</p>`,
      'bi-geo-alt'
    );
  } else if (dep.atBcpi && offices.length) {
    bcpiBlock = cardBlock(
      `Birourile de cadastru din județul ${county.name}`,
      (county.ocpiHq ? `<p>Instituția coordonatoare este ${escHtml(ocpiHqText)}, cu birouri teritoriale în județ:</p>` : '') +
      `<ul class="list-unstyled mb-0">${offices
        .map((o) => `<li class="mb-2"><strong>${escHtml(o.name)}</strong>${o.address ? ` — ${escHtml(o.address)}` : ''}</li>`)
        .join('')}</ul>` +
      `<p class="fz-14 mb-0 mt-3">Lucrările care se înscriu în cartea funciară se depun la biroul competent pentru localitatea imobilului; ne ocupăm noi de depunere.</p>`,
      'bi-geo-alt'
    );
  }

  // `countyNote` and `feeNote` are both written from the land-registry point of
  // view ("dosarul se depune întotdeauna la biroul competent…", ANCPI tariffs), so
  // they ride on the same flag as the lodging claim: true for the eight cadastral
  // services, withheld until declared for the four that have no authored copy.
  const countyNoteBlock = (assertsLodging && county.countyNote)
    ? cardBlock(`Particularități în județul ${county.name}`, `<p class="mb-0">${escHtml(county.countyNote)}</p>`, 'bi-info-circle')
    : '';
  const feeNoteBlock = (assertsLodging && county.feeNote) ? `<div class="mb-5"><p class="fz-14 mb-0">${escHtml(county.feeNote)}</p></div>` : '';

  // FAQ is mandatory on a county hub (PLAN §1.1): a hub with no FAQ is weaker
  // than its own children on the one signal Google renders in the SERP.
  // `service.hubFaq` (authored, hub voice) wins; until it exists we fall back to
  // the head of the approved per-service pool, parameterised for a hub.
  let faqs = [];
  if (service.hubFaq && service.hubFaq.length) {
    faqs = service.hubFaq;
  } else if (service.faqPool && service.faqPool.length) {
    faqs = service.faqPool.slice(0, 4).map((f) => ({
      q: fillParams(f.q, params),
      a: fillParams(f.a, params),
    }));
  }
  const faqBlock = faqs.length
    ? `<div class="mb-5"><h2 class="h5 mb-3">Întrebări frecvente — ${escHtml(midSentence(service.name))} în județul ${escHtml(county.name)}</h2>${faqDetails(faqs)}</div>`
    : '';

  // A–Z index of every emitted leaf for this service in this county, with the
  // service in the anchor text (chair W3a).
  const localityIndex = locs.length
    ? `<div class="mt-5"><h2 class="h4 mb-4">${escHtml(service.name)} — localități din județul ${escHtml(county.name)}</h2>` +
      `<div class="row g-2">${locs
        .map((l) => `<div class="col-12 col-sm-6 col-lg-4 fz-14"><a href="/servicii/${escAttr(service.slug)}/${escAttr(l.countySlug)}/${escAttr(l.slug)}.html">${escHtml(service.name)} în ${escHtml(l.name)}</a></div>`)
        .join('')}</div></div>`
    : '';

  const hubLinksBlock = chrome.linkCard('Vedeți și', [
    { href: `/servicii/${service.slug}/`, label: `${service.name} — toate zonele` },
    { href: `/zone/${county.slug}/`, label: `Toate serviciile în județul ${county.name}` },
  ]);
  const otherCounties = (ctx.serviceCountyHubs ? [...site.nav.counties] : [])
    .filter((c) => c.slug !== county.slug && ctx.serviceCountyHubs.has(`${service.slug}/${c.slug}`))
    .map((c) => ({ href: `/servicii/${service.slug}/${c.slug}/`, label: `${service.name} în județul ${c.label}` }));
  const otherCountiesBlock = chrome.linkCard(`${service.name} în alte județe`, otherCounties);
  const resources = (service.resources || [])
    .filter((r) => r && r.href && r.label)
    .map((r) => ({ href: r.href, label: r.label }));
  const resourcesBlock = chrome.linkCard('Ghiduri și termeni utili', resources);

  const waTopic = `${midSentence(service.shortName || service.name)} în județul ${county.name}`;
  const content = renderTemplate(tpl('page-service-county-hub.html'), {
    introHtml, townsBlock, documentsBlock, processBlock, priceBlock,
    bcpiBlock, countyNoteBlock, feeNoteBlock, faqBlock,
    sidebar: chrome.contactCard(site, { namespace: 'servicii', topic: waTopic }),
    ownerBlock: chrome.ownerCard(site),
    hubLinksBlock, resourcesBlock, otherCountiesBlock, localityIndex,
  }, ctx.warnings, pagePath);

  const META_MAX_CHARS = 155;
  const metaHead = `${service.name} în județul ${county.name}`;
  const metaPhone = `. Tel. ${site.nap.phoneDisplay}.`;
  const metaMids = dep.atBcpi
    ? [': localități, birouri BCPI, acte, prețuri orientative. Topograf autorizat ANCPI',
       ': localități, acte, prețuri orientative. Topograf autorizat ANCPI']
    : [': localități acoperite, acte necesare, prețuri orientative. Topograf autorizat ANCPI',
       ': localități, acte, prețuri orientative. Topograf autorizat ANCPI'];
  const metaDescription = metaHead +
    (metaMids.find((m) => [...(metaHead + m + metaPhone)].length <= META_MAX_CHARS) || '') +
    metaPhone;

  const jsonldExtra = [
    schema.serviceSchema(site, {
      serviceName: `${service.name} în județul ${county.name}`,
      description: metaDescription,
      areaServed: `Județul ${county.name}`,
      url: urlPath(pagePath),
    }),
  ];
  if (faqs.length) jsonldExtra.push(schema.faqPage(faqs));

  return assemblePage(ctx, {
    path: pagePath,
    section: county.slug === 'alba' ? 'serviciiAlba' : 'serviciiVecini',
    title: fitTitle([
      `${service.name} în județul ${county.name}`,
      ' — Topograf autorizat ANCPI',
      ' | Fleser Aurel Expert',
    ]),
    metaDescription,
    h1: `${service.name} în județul ${county.name}`,
    breadcrumbItems: [
      { name: 'Acasă', url: '/' },
      { name: service.name, url: `/servicii/${service.slug}/` },
      { name: `Județul ${county.name}`, url: urlPath(pagePath) },
    ],
    content,
    jsonldExtra,
    namespace: 'servicii',
    waTopic,
    hreflangRo: null, hreflangEn: null,
  });
}

// ---------- county hub ----------

function buildCountyHub(ctx, county, emitted) {
  const { site } = ctx;
  const pagePath = `/zone/${county.slug}/index.html`;
  const locs = ctx.localities
    .filter((l) => l.countySlug === county.slug)
    .sort((a, b) => a.name.localeCompare(b.name, 'ro'));

  const countyIntro =
    `<p class="lead">Servicii de cadastru, intabulare și topografie în județul ${escHtml(county.name)} — cu deplasare la fața locului din Aiud.</p>` +
    (county.countyNote ? `<p>${escHtml(county.countyNote)}</p>` : '');

  // ocpiHq is {name, address} (counties.json) or a plain string
  const ocpiHqText = county.ocpiHq && typeof county.ocpiHq === 'object'
    ? `${county.ocpiHq.name}${county.ocpiHq.address ? `, ${county.ocpiHq.address}` : ''}`
    : county.ocpiHq;
  const ocpiBlock = county.ocpiHq
    ? cardBlock(
        `OCPI ${county.name}`,
        `<p>${escHtml(ocpiHqText)}</p>` +
        (county.bcpiOffices && county.bcpiOffices.length
          // entries are {name, address, covers} objects (counties.json) or plain strings
          ? `<p class="mb-0">Birouri de cadastru și publicitate imobiliară (BCPI): ${county.bcpiOffices
              .map((o) => {
                const name = typeof o === 'string' ? o : o.name;
                const addr = o && typeof o === 'object' && o.address ? ` (${escHtml(o.address)})` : '';
                return `<strong>${escHtml(name)}</strong>${addr}`;
              })
              .join(', ')}.</p>`
          : ''),
        'bi-geo-alt'
      )
    : '';
  const feeNoteBlock = county.feeNote ? `<p class="fz-14">${escHtml(county.feeNote)}</p>` : '';

  const rows = locs.map((l) => {
    const km = distanceKm(site, l);
    const kmTxt = km != null ? ` — aprox. ${km} km de Aiud` : '';
    // ONE anchor per locality, not one per locality × service.
    //
    // The full matrix nearly broke the build twice. It is localities × emitted
    // services, so promoting the four hub-only services took Alba from 8 to 12
    // services over 78 localities = 936 links: 145,102 B at the original shape
    // against MAX_HUB_BYTES = 122,880, then 114,545 B after the anchors were
    // stripped to the service name and joined inline — still 93.2% of the cap,
    // with room for only ~7 more localities before a hard build failure that the
    // next person to touch the locality data would have had no way to anticipate.
    //
    // Cutting it costs no crawl path. Measured: the 936 leaf URLs this page
    // linked are the SAME 936 reachable from the twelve /servicii/<s>/alba/
    // hubs — set difference in both directions is empty. Those hubs are each
    // leaf's breadcrumb parent since R3 and its strongest internal link, and
    // all twelve are linked from this page's own sidebar card. So every leaf
    // stays two clicks from here instead of one, and the links now sit on the
    // topically focused hub instead of being diluted 936-ways on this one.
    //
    // What replaces the list is worth more to a county head term than a wall of
    // repeated service names: the locality's component villages, which are real
    // local content this page did not previously carry.
    const head = ctx.services.find((s) => emitted.has(`${s.slug}/${l.countySlug}/${l.slug}`));
    let body;
    if (head) {
      const vill = (l.villages || []).filter(Boolean);
      body =
        `<p class="fz-14 mb-0">` +
        `<a href="/servicii/${head.slug}/${l.countySlug}/${l.slug}.html">${escHtml(head.name)} în ${escHtml(l.name)}</a>` +
        (vill.length > 1 ? ` — sate aparținătoare: ${vill.map(escHtml).join(', ')}.` : '.') +
        `</p>`;
    } else {
      // Safety net, not dead weight: it renders on zero pages today (0 data-gate and
      // 0 render-gate demotions) but fires the moment any locality demotes, and the
      // gate margins are effectively zero. Kept and rewritten rather than deleted —
      // deleting the branch would leave `body` undefined on the page that needs it.
      body =
        `<p class="fz-14 mb-0">Lucrăm și în ${escHtml(l.name)}${l.villages && l.villages.length ? ` (${l.villages.map(escHtml).join(', ')})` : ''}. ` +
        `Scrieți-ne pe WhatsApp ce aveți de rezolvat.</p>`;
    }
    const kmCount = km === 0 ? 'sediul nostru' : km != null ? `aprox. ${km} km` : '';
    return (
      `<details class="panel mb-2"><summary><span class="q">${escHtml(l.name)}</span><span class="count">${escHtml(kmCount)}</span></summary>` +
      `<div class="panel-body py-2">${body}</div></details>`
    );
  });

  const others = site.nav.counties
    .filter((c) => c.slug !== county.slug && ctx.countiesBySlug.has(c.slug))
    .map((c) => ({ href: `/zone/${c.slug}/`, label: `Județul ${c.label}` }));

  // Before R1 there was no service×county node to link to, so this page named each
  // service exactly once, in the site nav (PLAN-rank-first.md §topografie-constructii
  // gap 5). Now every service that has a county-level surface here gets a real
  // anchor from the county's top-level page. Filtered on `serviceCountyHubs` so a
  // service with no inventory in a neighbouring county is never linked.
  const serviceHubs = ctx.serviceCountyHubs
    ? ctx.services
        .filter((s) => ctx.serviceCountyHubs.has(`${s.slug}/${county.slug}`))
        .map((s) => ({ href: `/servicii/${s.slug}/${county.slug}/`, label: `${s.name} în județul ${county.name}` }))
    : [];
  const serviceHubsBlock = chrome.linkCard(`Serviciile noastre în județul ${county.name}`, serviceHubs);

  const waTopic = `servicii de cadastru și topografie în județul ${county.name}`;
  const content = renderTemplate(tpl('page-county-hub.html'), {
    countyIntro, ocpiBlock, feeNoteBlock, serviceHubsBlock,
    sidebar: chrome.contactCard(site, { namespace: 'zone', topic: waTopic }) + chrome.ownerCard(site),
    otherCountiesBlock: chrome.linkCard('Alte județe', others),
    matrixHeading: `Localități din județul ${county.name}`,
    localityMatrix: rows.join('\n'),
  }, ctx.warnings, pagePath);

  return assemblePage(ctx, {
    path: pagePath,
    section: 'core',
    title: fitTitle([`Cadastru și topografie în județul ${county.name}`, ' | Fleser Aurel Expert']),
    metaDescription: `Servicii de cadastru, intabulare și topografie în județul ${county.name}: localități acoperite, birouri OCPI/BCPI competente, contact rapid pe WhatsApp. Tel. ${site.nap.phoneDisplay}.`,
    h1: `Cadastru și topografie în județul ${county.name}`,
    breadcrumbItems: [
      { name: 'Acasă', url: '/' },
      { name: `Județul ${county.name}`, url: urlPath(pagePath) },
    ],
    content,
    jsonldExtra: [],
    namespace: 'zone',
    waTopic,
  });
}

// ---------- guides & verticals ----------

const HOOKS = {
  deadline: {
    heading: 'Termen de depunere aproape?',
    text: 'Scrieți-ne pe WhatsApp data limită a proiectului dumneavoastră — vă spunem sincer dacă documentația poate fi gata la timp și planificăm invers, de la termen.',
  },
  // There was an `epc` hook here whose whole content was a list of job titles we
  // are near ("Colaborăm cu dezvoltatori și constructori" / "Lucrăm alături de
  // echipe de proiect, consultanți și antreprenori"). It told a developer nothing
  // they could act on, and it read ambiguously against the standing rule that the
  // site says nothing in either direction about partners or who does the work.
  // Deleted, and the 58 solar verticals that selected it now say "none".
  // Do not reinstate it, and do not "fix" that ambiguity by adding a
  // clarification about who does the work.
};

function namespaceOf(kind) {
  return kind === 'fonduri' ? '/fonduri-europene' : kind === 'solar' ? '/parcuri-fotovoltaice' : kind === 'agricol' ? '/teren-agricol' : '/ghid';
}
function namespaceLabel(kind) {
  return kind === 'fonduri' ? 'Fonduri europene' : kind === 'solar' ? 'Parcuri fotovoltaice' : kind === 'agricol' ? 'Teren agricol' : 'Ghiduri';
}
function sectionOf(kind) {
  return kind === 'ghid' ? 'ghid' : kind === 'agricol' ? 'agricol' : 'verticale';
}

function buildAuthoredPage(ctx, kind, entry, allEntries) {
  const { site } = ctx;
  const base = namespaceOf(kind);
  const pagePath = `${base}/${entry.slug}.html`;
  const waTopic = entry.whatsappTopic || entry.title;

  const ctaHtml = chrome.ctaWhatsapp(site, { namespace: kind, topic: waTopic });
  const { html: sectionsHtml, faqs } = renderSections(entry.sections, { ctaHtml }, ctx.warnings);

  let hookBlock = '';
  if (kind !== 'ghid' && entry.hook && entry.hook !== 'none' && HOOKS[entry.hook]) {
    const h = HOOKS[entry.hook];
    hookBlock = cardBlock(h.heading, `<p>${escHtml(h.text)}</p>${ctaHtml}`, 'bi-lightning-charge');
  }

  // `related` comes in two authored shapes: a flat slug array (same namespace),
  // or {services:[], guides:[], fonduri:[], solar:[], dictionar:[]} with slugs per namespace.
  const rel = entry.related || [];
  const relSameNs = Array.isArray(rel) ? rel : [];
  const related = relSameNs
    .map((slug) => allEntries.find((e) => e.slug === slug))
    .filter(Boolean)
    .map((e) => ({ href: `${base}/${e.slug}.html`, label: displayLabel(e) }));
  if (!Array.isArray(rel) && typeof rel === 'object') {
    for (const slug of rel.guides || rel.ghid || []) {
      const e = kind === 'ghid' ? allEntries.find((x) => x.slug === slug) : null;
      if (e) related.push({ href: `/ghid/${e.slug}.html`, label: displayLabel(e) });
      else related.push({ href: `/ghid/${slug}.html`, label: null, slugOnly: slug, ns: '/ghid' });
    }
    for (const slug of rel.fonduri || []) related.push({ href: `/fonduri-europene/${slug}.html`, label: null, slugOnly: slug, ns: '/fonduri-europene' });
    for (const slug of rel.solar || []) related.push({ href: `/parcuri-fotovoltaice/${slug}.html`, label: null, slugOnly: slug, ns: '/parcuri-fotovoltaice' });
    for (const slug of rel.agricol || []) related.push({ href: `/teren-agricol/${slug}.html`, label: null, slugOnly: slug, ns: '/teren-agricol' });
    for (const slug of rel.services || []) {
      const s = ctx.servicesNavBySlug.get(slug);
      if (s) related.push({ href: `/servicii/${slug}/`, label: s.label });
      else ctx.warnings.push(`${pagePath}: related service "${slug}" unknown — skipped`);
    }
    for (const slug of rel.dictionar || rel.dictionary || []) related.push({ href: `/dictionar/${slug}.html`, label: null, slugOnly: slug, ns: '/dictionar' });
  }
  // Cross-namespace labels resolve at link-check time; use the slug as a readable fallback label.
  for (const r of related) if (!r.label) r.label = (r.slugOnly || '').replace(/-/g, ' ');
  const relatedBlock = chrome.linkCard('Citește și', related);

  const jsonldExtra = [];
  if (faqs.length) jsonldExtra.push(schema.faqPage(faqs));

  const enPath = entry.enPair || ctx.hreflangRoToEn.get(urlPath(pagePath)) || null;
  const content = renderTemplate(tpl(kind === 'ghid' ? 'page-guide.html' : 'page-vertical.html'), {
    hookBlock, sectionsHtml, relatedBlock,
    sidebar: chrome.contactCard(site, { namespace: kind, topic: waTopic }) + chrome.ownerCard(site),
  }, ctx.warnings, pagePath);

  return assemblePage(ctx, {
    path: pagePath,
    section: sectionOf(kind),
    title: entry.title,
    metaDescription: entry.metaDescription || '',
    h1: entry.h1 || entry.title,
    breadcrumbItems: [
      { name: 'Acasă', url: '/' },
      { name: namespaceLabel(kind), url: `${base}/` },
      { name: entry.h1 || entry.title, url: urlPath(pagePath) },
    ],
    content,
    jsonldExtra,
    namespace: kind,
    waTopic,
    hreflangRo: enPath ? urlPath(pagePath) : null,
    hreflangEn: enPath,
    enHref: enPath || '/en/',
  });
}

function buildVerticalHub(ctx, kind, entries) {
  const { site } = ctx;
  const base = namespaceOf(kind);
  const pagePath = `${base}/index.html`;
  const hubEntry = entries.find((e) => e.slug === 'index' || e.slug === '_hub') || null;
  const pages = entries.filter((e) => e !== hubEntry);
  const waTopic = (hubEntry && hubEntry.whatsappTopic) ||
    (kind === 'fonduri' ? 'documentație topografică pentru un proiect finanțat'
      : kind === 'agricol' ? 'măsurători sau documentație cadastrală'
      : 'măsurători pentru un proiect fotovoltaic');

  const ctaHtml = chrome.ctaWhatsapp(site, { namespace: kind, topic: waTopic });
  let sectionsHtml = '';
  let faqs = [];
  if (hubEntry) {
    const r = renderSections(hubEntry.sections, { ctaHtml }, ctx.warnings);
    sectionsHtml = r.html;
    faqs = r.faqs;
  } else {
    sectionsHtml = `<p class="lead">${escHtml(
      kind === 'fonduri'
        ? 'Documentație topografică și cadastrală pentru proiecte cu finanțare europeană: intabulare, planuri de situație, măsurători pentru dosare PNRR, AFIR și alte programe.'
        : kind === 'agricol'
          ? 'Cadastru și topografie pentru terenuri agricole: intabulare, plan parcelar, dezmembrare și alipire, măsurători pentru APIA și documentație pentru scoaterea din circuitul agricol.'
          : 'Servicii topografice pentru parcuri fotovoltaice: due diligence de teren, studii topografice, trasare, as-built și documentație cadastrală.'
    )}</p>`;
  }

  const groups = new Map();
  for (const e of pages) {
    const g = e.group || '';
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g).push(e);
  }
  const listParts = [];
  for (const [g, list] of groups) {
    const lis = list
      .map((e) => `<li class="mb-2"><a href="${base}/${escAttr(e.slug)}.html">${escHtml(e.title)}</a></li>`)
      .join('');
    listParts.push(
      `<div class="col-12 col-md-6">${g ? `<h3 class="h6 mb-3">${escHtml(g)}</h3>` : ''}<ul class="list-unstyled">${lis}</ul></div>`
    );
  }
  const pageListBlock = pages.length
    ? `<div class="mt-5"><h2 class="h4 mb-4">Toate paginile — ${escHtml(namespaceLabel(kind))}</h2><div class="row g-4">${listParts.join('')}</div></div>`
    : '';

  const title = (hubEntry && hubEntry.title) ||
    (kind === 'fonduri'
      ? 'Topografie și cadastru pentru fonduri europene | Fleser Aurel Expert'
      : kind === 'agricol'
        ? 'Cadastru și topografie pentru terenuri agricole | Fleser Aurel Expert'
        : 'Topografie pentru parcuri fotovoltaice | Fleser Aurel Expert');
  const metaDescription = (hubEntry && hubEntry.metaDescription) ||
    (kind === 'fonduri'
      ? `Documentație topografică și cadastrală pentru proiecte cu fonduri europene (PNRR, AFIR). Topograf autorizat ANCPI. Tel. ${site.nap.phoneDisplay}.`
      : kind === 'agricol'
        ? `Intabulare teren agricol, plan parcelar, măsurători APIA și documentație cadastrală pentru terenuri extravilane. Topograf autorizat ANCPI. Tel. ${site.nap.phoneDisplay}.`
        : `Due diligence teren, studii topografice, trasare și as-built pentru parcuri fotovoltaice. Topograf autorizat ANCPI. Tel. ${site.nap.phoneDisplay}.`);

  const jsonldExtra = [];
  if (faqs.length) jsonldExtra.push(schema.faqPage(faqs));

  const enPath = (hubEntry && hubEntry.enPair) || ctx.hreflangRoToEn.get(urlPath(pagePath)) || null;
  const content = renderTemplate(tpl('page-vertical-hub.html'), {
    sectionsHtml, pageListBlock,
    sidebar: chrome.contactCard(site, { namespace: kind, topic: waTopic }) + chrome.ownerCard(site),
  }, ctx.warnings, pagePath);

  return assemblePage(ctx, {
    path: pagePath,
    section: sectionOf(kind),
    title,
    metaDescription,
    h1: (hubEntry && hubEntry.h1) || namespaceLabel(kind),
    breadcrumbItems: [
      { name: 'Acasă', url: '/' },
      { name: namespaceLabel(kind), url: urlPath(pagePath) },
    ],
    content,
    jsonldExtra,
    namespace: kind,
    waTopic,
    hreflangRo: enPath ? urlPath(pagePath) : null,
    hreflangEn: enPath,
    enHref: enPath || '/en/',
  });
}

function buildGuideHub(ctx, guides) {
  const { site } = ctx;
  const pagePath = '/ghid/index.html';
  const lis = guides
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title, 'ro'))
    .map((g) => `<li class="mb-2"><a href="/ghid/${escAttr(g.slug)}.html">${escHtml(displayLabel(g))}</a>${g.metaDescription ? ` — <span class="fz-14">${escHtml(g.metaDescription)}</span>` : ''}</li>`)
    .join('');
  const waTopic = 'unul dintre ghidurile de pe site';
  const content = renderTemplate(tpl('page-vertical-hub.html'), {
    sectionsHtml:
      `<p class="lead">Ghiduri practice despre cadastru, intabulare și topografie: acte necesare, pași, prețuri orientative și greșeli de evitat — explicate pe înțelesul tuturor.</p>` +
      `<ul class="list-unstyled mt-4">${lis}</ul>`,
    pageListBlock: '',
    sidebar: chrome.contactCard(site, { namespace: 'ghid', topic: waTopic }) + chrome.ownerCard(site),
  }, ctx.warnings, pagePath);

  return assemblePage(ctx, {
    path: pagePath,
    section: 'ghid',
    title: 'Ghiduri practice — cadastru și intabulare | Fleser Aurel Expert',
    metaDescription: `Ghiduri practice despre cadastru, intabulare, acte necesare și prețuri orientative, scrise de un topograf autorizat ANCPI. Tel. ${site.nap.phoneDisplay}.`,
    h1: 'Ghiduri practice',
    breadcrumbItems: [
      { name: 'Acasă', url: '/' },
      { name: 'Ghiduri', url: '/ghid/' },
    ],
    content,
    jsonldExtra: [],
    namespace: 'ghid',
    waTopic,
  });
}

// ---------- dictionary ----------

function buildDictTerm(ctx, term, termsBySlug) {
  const { site } = ctx;
  const pagePath = `/dictionar/${term.slug}.html`;
  const ctaService = ctx.servicesNavBySlug.get(term.ctaService) || null;

  const definitionHtml = String(term.definition || '')
    .split(/\n\s*\n/)
    .map((p) => `<p>${escHtml(p.trim())}</p>`)
    .join('');
  const exampleBlock = term.example
    ? cardBlock('Exemplu', `<p class="mb-0 fst-italic">${escHtml(term.example)}</p>`, 'bi-chat-quote')
    : '';
  const relatedLinks = (term.related || [])
    .filter((slug) => termsBySlug.has(slug))
    .map((slug) => ({ href: `/dictionar/${slug}.html`, label: termsBySlug.get(slug).term }));
  const relatedBlock = relatedLinks.length
    ? `<div class="mb-4"><h2 class="h5 mb-3">Termeni înrudiți</h2><p class="mb-0">${relatedLinks
        .map((l) => `<a class="btn btn-ghost btn-sm me-2 mb-2" href="${escAttr(l.href)}">${escHtml(l.label)}</a>`)
        .join('')}</p></div>`
    : '';

  const ctaText = ctaService
    ? `Aveți o situație legată de „${escHtml(term.term)}”? Vedeți serviciul nostru de <a href="/servicii/${escAttr(ctaService.slug)}/">${escHtml(ctaService.label)}</a> sau scrieți-ne direct:`
    : `Aveți o situație legată de „${escHtml(term.term)}”? Scrieți-ne direct:`;

  const waTopic = `„${term.term}”`;
  const content = renderTemplate(tpl('page-dictionary-term.html'), {
    gloss: term.gloss || '',
    definitionHtml,
    exampleBlock,
    relatedBlock,
    // No ctaHeading: it was a second rhetorical question stacked on ctaText, which
    // is the line doing the work — it names the term and links the service.
    ctaText,
    ctaWhatsapp: chrome.ctaWhatsapp(site, { namespace: 'dictionar', topic: waTopic }),
    disclaimer: site.dictionaryDisclaimer,
    sidebar:
      chrome.contactCard(site, { namespace: 'dictionar', topic: waTopic }) +
      chrome.ownerCard(site) +
      chrome.linkCard('Dicționar', [{ href: '/dictionar/', label: 'Toți termenii A–Z' }]),
  }, ctx.warnings, pagePath);

  return assemblePage(ctx, {
    path: pagePath,
    section: 'dictionar',
    title: fitTitle([`${term.term} — ce înseamnă?`, ' | Dicționar de cadastru']),
    metaDescription: (term.gloss || '').slice(0, 155) || `Ce înseamnă „${term.term}” — explicație simplă, exemplu și termeni înrudiți.`,
    h1: `„${term.term}” — ce înseamnă?`,
    breadcrumbItems: [
      { name: 'Acasă', url: '/' },
      { name: 'Dicționar', url: '/dictionar/' },
      { name: term.term, url: urlPath(pagePath) },
    ],
    content,
    jsonldExtra: [schema.definedTerm(site, term)],
    namespace: 'dictionar',
    waTopic,
  });
}

// ~1KB progressive-enhancement filter for the A–Z index
const DICT_FILTER_JS =
  `<script>(function(){var f=document.getElementById('dictFilter');if(!f)return;` +
  `var items=document.querySelectorAll('.dict-list li'),heads=document.querySelectorAll('.dict-letter'),nr=document.getElementById('dictNoResults');` +
  `function norm(s){return s.toLowerCase().replace(/[\\u0103\\u00e2]/g,'a').replace(/\\u00ee/g,'i').replace(/[\\u0219\\u015f]/g,'s').replace(/[\\u021b\\u0163]/g,'t')}` +
  `f.addEventListener('input',function(){var q=norm(f.value.trim()),n=0;` +
  `for(var i=0;i<items.length;i++){var hit=!q||norm(items[i].getAttribute('data-term')||items[i].textContent).indexOf(q)>-1;` +
  `items[i].style.display=hit?'':'none';if(hit)n++}` +
  `for(var j=0;j<heads.length;j++){var ul=heads[j].nextElementSibling,vis=false;` +
  `if(ul){var lis=ul.children;for(var k=0;k<lis.length;k++){if(lis[k].style.display!=='none'){vis=true;break}}}` +
  `heads[j].style.display=vis?'':'none';if(ul)ul.style.display=vis?'':'none'}` +
  `if(nr)nr.className=n?'mb-0 d-none':'mb-0'})})();</script>`;

function buildDictIndex(ctx, terms) {
  const { site } = ctx;
  const pagePath = '/dictionar/index.html';
  const sorted = terms.slice().sort((a, b) => a.term.localeCompare(b.term, 'ro'));
  const byLetter = new Map();
  for (const t of sorted) {
    const letter = t.term
      .charAt(0)
      .toUpperCase()
      .replace(/Ă|Â/g, 'A').replace(/Î/g, 'I').replace(/Ș|Ş/g, 'S').replace(/Ț|Ţ/g, 'T');
    if (!byLetter.has(letter)) byLetter.set(letter, []);
    byLetter.get(letter).push(t);
  }
  const letters = [...byLetter.keys()].sort();
  const letterNav = letters
    .map((l) => `<a class="btn btn-ghost btn-sm me-1 mb-1" href="#lit-${escAttr(l)}">${escHtml(l)}</a>`)
    .join('');
  const listParts = [];
  for (const l of letters) {
    const lis = byLetter
      .get(l)
      .map((t) =>
        `<li data-term="${escAttr(t.term)}"><a href="/dictionar/${escAttr(t.slug)}.html">${escHtml(t.term)}</a>${t.gloss ? ` — <span>${escHtml(t.gloss)}</span>` : ''}</li>`
      )
      .join('');
    listParts.push(`<h2 class="h5 mt-4 dict-letter" id="lit-${escAttr(l)}">${escHtml(l)}</h2><ul class="list-unstyled dict-list">${lis}</ul>`);
  }

  const waTopic = 'un termen din dicționar';
  const content = renderTemplate(tpl('page-dictionary-index.html'), {
    introText: `Dicționar de cadastru, carte funciară și topografie: ${sorted.length} termeni explicați pe înțelesul tuturor, cu exemple practice. Alegeți o literă sau căutați direct.`,
    filterLabel: 'Caută un termen',
    filterPlaceholder: 'ex. intabulare, extras CF, dezmembrare…',
    letterNav,
    termList: listParts.join('\n'),
    noResultsText: 'Niciun termen găsit. Încearcă alt cuvânt sau scrie-ne pe WhatsApp.',
    sidebar: chrome.contactCard(site, { namespace: 'dictionar', topic: waTopic }) + chrome.ownerCard(site),
  }, ctx.warnings, pagePath);

  return assemblePage(ctx, {
    path: pagePath,
    section: 'dictionar',
    title: 'Dicționar de cadastru și carte funciară | Fleser Aurel Expert',
    metaDescription: `Dicționar cu ${sorted.length} termeni de cadastru, carte funciară și topografie, explicați simplu, cu exemple. De la „act de dezmembrare” la „uzucapiune”.`,
    h1: 'Dicționar de cadastru și carte funciară',
    breadcrumbItems: [
      { name: 'Acasă', url: '/' },
      { name: 'Dicționar', url: '/dictionar/' },
    ],
    content,
    jsonldExtra: [schema.definedTermSet(site, sorted)],
    namespace: 'dictionar',
    waTopic,
    extraJs: DICT_FILTER_JS,
  });
}

// ---------- english ----------

function buildEnPage(ctx, entry) {
  const { site } = ctx;
  const pagePath = entry.path;
  const waLiteral = entry.whatsappPrefillEn || 'Hello! I need land surveying services in Romania.';

  const ctaHtml = chrome.ctaWhatsapp(site, { namespace: 'en', literalMessage: waLiteral, en: true });
  const { html: sectionsHtml, faqs } = renderSections(entry.sections, { ctaHtml }, ctx.warnings);

  const related = (entry.related || [])
    .map((p) => ctx.enByPath.get(p))
    .filter(Boolean)
    .map((e) => ({ href: e.path, label: e.navLabel || displayLabel(e) }));

  const roPath = entry.roPair
    ? urlPath(entry.roPair.replace(/^https?:\/\/[^/]+/, '').replace(/\/index\.html$/, '/') || '/')
    : null;
  const content = renderTemplate(tpl('page-en.html'), {
    sectionsHtml,
    relatedBlock: chrome.linkCard('Related pages', related),
    sidebar: chrome.contactCard(site, { namespace: 'en', literalMessage: waLiteral, en: true }),
  }, ctx.warnings, pagePath);

  const jsonldExtra = [];
  if (faqs.length) jsonldExtra.push(schema.faqPage(faqs));

  const crumbs = [{ name: 'Home', url: '/en/' }];
  if (pagePath !== '/en/index.html') crumbs.push({ name: entry.h1 || entry.title, url: urlPath(pagePath) });

  return assemblePage(ctx, {
    path: pagePath,
    section: 'en',
    title: entry.title,
    metaDescription: entry.metaDescription || '',
    h1: entry.h1 || entry.title,
    breadcrumbItems: crumbs,
    content,
    jsonldExtra,
    namespace: 'en',
    en: true,
    waLiteral,
    hreflangRo: roPath,
    hreflangEn: roPath ? urlPath(pagePath) : null,
    roHref: roPath || '/',
  });
}

module.exports = {
  canonicalUrl, urlPath, distanceKm, midSentence,
  buildServiceLocality, buildServiceHub, buildServiceCountyHub, buildCountyHub,
  buildAuthoredPage, buildVerticalHub, buildGuideHub,
  buildDictTerm, buildDictIndex, buildEnPage,
};
