'use strict';
// Site chrome: header/footer/cookie (RO + EN), breadcrumbs, WhatsApp CTA, sidebar, inline JS.
// All markup follows the D1 Swiss/engineering system (mockup-D1.html is the reference;
// class contract shared with css/site.css — see spec-redesign-v2.md §4.2/§4.4).

const fs = require('fs');
const path = require('path');
const { escHtml, escAttr, waHref } = require('./util');
const { renderTemplate } = require('./render');
const schema = require('./schema');

const PARTIALS_DIR = path.join(__dirname, '..', 'partials');

function loadPartial(name) {
  return fs.readFileSync(path.join(PARTIALS_DIR, name), 'utf8');
}

// ~0.8KB, minified by hand. All chrome behavior on generated pages:
// burger → .nav-desktop.show, submenu togglers → .nav-item.open, cookie alert
// (same cookie name as live site), FAQ panels collapsed on mobile (<960px),
// sticky-bar auto-hide while the page-hero CTA is on screen.
const CHROME_JS =
  "(function(){var n=document.getElementById('siteNav'),t=document.querySelector('.burger');" +
  "if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('show');t.setAttribute('aria-expanded',o)})}" +
  "var ts=document.querySelectorAll('.nav-toggler');for(var i=0;i<ts.length;i++){(function(g){" +
  "g.addEventListener('click',function(){var o=g.parentNode.classList.toggle('open');g.setAttribute('aria-expanded',o)})})(ts[i])}" +
  "var c=document.querySelector('.cookiealert'),b=document.querySelector('.acceptcookies');" +
  "if(c&&b){if(document.cookie.indexOf('acceptCookies=')<0){c.classList.add('show')}" +
  "b.addEventListener('click',function(){var d=new Date();d.setTime(d.getTime()+31536e6);" +
  "document.cookie='acceptCookies=true;expires='+d.toUTCString()+';path=/';c.classList.remove('show')})}" +
  "if(window.innerWidth<960){var ps=document.querySelectorAll('details.panel[data-mob]');" +
  "for(var j=0;j<ps.length;j++){ps[j].removeAttribute('open')}}" +
  "var mb=document.querySelector('.sticky-bar'),hc=document.querySelector('.page-hero .cta-whatsapp');" +
  "if(mb&&hc&&'IntersectionObserver'in window){new IntersectionObserver(function(e){" +
  "mb.classList.toggle('is-hidden',e[0].isIntersecting)}).observe(hc)}})();";

/** Build the WhatsApp prefill message for a namespace + topic. */
function waMessage(site, namespace, topic) {
  const greetings = site.whatsapp.greetings;
  const tpl = greetings[namespace] || greetings.default;
  if (tpl.includes('%TOPIC%')) return tpl.replace('%TOPIC%', topic || 'servicii de cadastru și topografie');
  return tpl;
}

/** Full WhatsApp href for a namespace + topic (or a literal prefill for EN pages). */
function waHrefFor(site, namespace, topic, literalMessage) {
  const msg = literalMessage || waMessage(site, namespace, topic);
  return waHref(site.whatsapp.phone, msg);
}

/** WhatsApp + tel CTA block (partial cta-whatsapp.html). */
function ctaWhatsapp(site, { namespace, topic, literalMessage, en = false, extraClass = '' }) {
  return renderTemplate(loadPartial('cta-whatsapp.html'), {
    waHref: waHrefFor(site, namespace, topic, literalMessage),
    waLabel: en ? site.whatsapp.buttonLabelEn : site.whatsapp.buttonLabel,
    telHref: site.nap.phone,
    telDisplay: site.nap.phoneDisplay,
    extraClass: extraClass ? ' ' + extraClass : '',
  });
}

function headerRo(site, { enHref, namespace, topic, literalMessage }) {
  const serviceMenuItems = site.nav.services
    .map((s) => `<li><a href="/servicii/${escAttr(s.slug)}/">${escHtml(s.label)}</a></li>`)
    .join('');
  const countyMenuItems = site.nav.counties
    .map((c) => `<li><a href="/zone/${escAttr(c.slug)}/">${escHtml(c.label)}</a></li>`)
    .join('');
  return renderTemplate(loadPartial('header.html'), {
    serviciiHref: site.nav.serviciiHref,
    zoneHref: site.nav.zoneHref,
    serviceMenuItems,
    countyMenuItems,
    enHref: enHref || '/en/',
    waHeaderHref: waHrefFor(site, namespace, topic, literalMessage),
  });
}

function headerEn(site, { roHref, namespace, topic, literalMessage }) {
  const enMenuItems = site.en.navItems
    .map((it) => `<a href="${escAttr(it.href)}">${escHtml(it.label)}</a>`)
    .join('\n      ');
  return renderTemplate(loadPartial('header-en.html'), {
    enMenuItems,
    roHref: roHref || '/',
    waHeaderHref: waHrefFor(site, namespace, topic, literalMessage),
  });
}

/** Mono GPS coordinates line for the footer — "a surveyor signs with coordinates" (D1 §3). */
function coordsLine(site) {
  const { lat, lon, city, county } = site.nap;
  return `${lat.toFixed(4)}° N · ${lon.toFixed(4)}° E — ${city.toUpperCase()}, JUD. ${county.toUpperCase()}`;
}

function footerRo(site) {
  const bySlug = new Map(site.nav.services.map((s) => [s.slug, s]));
  const footerServiceLinks = site.footer.coreServices
    .map((slug) => {
      const s = bySlug.get(slug) || { label: slug, slug };
      return `<li><a href="/servicii/${escAttr(s.slug)}/">${escHtml(s.label)}</a></li>`;
    })
    .join('');
  const countyLinks = site.nav.counties
    .map((c) => `<li><a href="/zone/${escAttr(c.slug)}/">Județul ${escHtml(c.label)}</a></li>`)
    .join('');
  const resourceLinks = site.footer.resources
    .map((r) => `<li><a href="${escAttr(r.href)}">${escHtml(r.label)}</a></li>`)
    .join('');
  return renderTemplate(loadPartial('footer.html'), {
    footerServiceLinks,
    footerZoneLinks: countyLinks + resourceLinks,
    coordsLine: coordsLine(site),
    napName: site.nap.name,
    napAddress: `${site.nap.street}, ${site.nap.city}, ${site.nap.county}`,
    napEmail: site.nap.email,
    telHref: site.nap.phone,
    telDisplay: site.nap.phoneDisplay,
    waHrefFooter: waHrefFor(site, 'default'),
    mapsUrl: site.nap.mapsUrl,
    year: site.buildDate.slice(0, 4),
  });
}

function footerEn(site, { roHref, enPages }) {
  const footerEnLinks = (enPages && enPages.length
    ? enPages
    : site.en.navItems.map((n) => ({ path: n.href, title: n.label }))
  )
    .slice(0, 8)
    .map((p) => `<li><a href="${escAttr(p.path)}">${escHtml(p.navLabel || p.title)}</a></li>`)
    .join('');
  return renderTemplate(loadPartial('footer-en.html'), {
    footerEnLinks,
    roHref: roHref || '/',
    coordsLine: coordsLine(site),
    napName: site.nap.name,
    napAddress: `${site.nap.street}, ${site.nap.city}, ${site.nap.county}, Romania`,
    napEmail: site.nap.email,
    telHref: site.nap.phone,
    telDisplay: site.nap.phoneDisplay,
    waHrefFooter: waHrefFor(site, 'default'),
    mapsUrl: site.nap.mapsUrl,
    year: site.buildDate.slice(0, 4),
  });
}

function cookieAlert(site, en = false) {
  const t = en ? site.en : site.ro;
  return renderTemplate(loadPartial('cookie.html'), {
    cookieText: t.cookieText,
    cookieLinkLabel: t.cookieLinkLabel,
    cookieButton: t.cookieButton,
  });
}

// EN twins of the numeric trustStats labels (RO strings live in site.json; the EN
// forms mirror the old hardcoded EN credential line — no invented facts).
const STAT_LABELS_EN = {
  'ani experiență': 'years of experience',
  'proiecte finalizate': 'completed projects',
  'colaborări': 'collaborations',
};

/** Split "1052+ proiecte finalizate" → { num: "1052", label } (null if non-numeric). */
function parseStat(s) {
  const m = String(s).match(/^(\d+)\+?\s+(.+)$/);
  return m ? { num: m[1], label: m[2] } : null;
}

/** Navy stats band (D1 §3): mono numerals + superscript green "+", hairline 3-col table. */
function trustBar(site, en = false) {
  const statCells = site.trustStats
    .map(parseStat)
    .filter(Boolean)
    .map((st) => {
      const label = en ? STAT_LABELS_EN[st.label] || st.label : st.label;
      return `<div class="stat"><div class="val">${escHtml(st.num)}<sup>+</sup></div><div class="lbl">${escHtml(label)}</div></div>`;
    })
    .join('\n      ');
  return renderTemplate(loadPartial('trust-bar.html'), {
    statsOverline: en ? 'Results' : 'Rezultate',
    statCells,
  });
}

/** Page-hero data strip (D1 §3): ANCPI dot cell + the first two numeric stats. */
function dataStrip(site, en = false) {
  const cells = [];
  const ancpi = site.trustStats.find((s) => /ANCPI/i.test(s));
  if (ancpi) {
    cells.push(
      `<div class="cell"><span class="badge-dot"></span><span class="lbl" style="font-weight:600;color:var(--ink)">${escHtml(en ? 'ANCPI licensed surveyor' : ancpi)}</span></div>`
    );
  }
  for (const s of site.trustStats) {
    if (cells.length >= 3) break;
    const st = parseStat(s);
    if (!st) continue;
    const label = en ? STAT_LABELS_EN[st.label] || st.label : st.label;
    cells.push(`<div class="cell"><span class="num">${escHtml(st.num)}+</span><span class="lbl">${escHtml(label)}</span></div>`);
  }
  return cells.join('\n          ');
}

function deplasareBlock(site) {
  return renderTemplate(loadPartial('deplasare-block.html'), {
    deplasareNote: site.deplasareNote,
  });
}

/**
 * Visible breadcrumb <li> items + BreadcrumbList JSON-LD.
 * items: [{name, url}] — last item is the current page (no link).
 */
function breadcrumbs(site, items) {
  const lis = items
    .map((it, i) =>
      i === items.length - 1
        ? `<li class="breadcrumb-item active" aria-current="page">${escHtml(it.name)}</li>`
        : `<li class="breadcrumb-item"><a href="${escAttr(it.url)}">${escHtml(it.name)}</a></li>`
    )
    .join('');
  return { html: lis, jsonld: schema.breadcrumbList(site, items) };
}

/** Sidebar contact card (RO or EN). */
function contactCard(site, { namespace, topic, literalMessage, en = false }) {
  const t = en ? site.en : site.ro;
  return (
    `<div class="card c-card-contact sidebar-sticky mb-4"><div class="card-body">` +
    `<h2 class="h5 mb-2">${escHtml(t.contactCardHeading)}</h2>` +
    `<p class="fz-14 mb-3">${escHtml(t.contactCardText)}</p>` +
    ctaWhatsapp(site, { namespace, topic, literalMessage, en }) +
    `<p class="fz-14 mb-0 mt-2"><i class="bi bi-clock me-1"></i>${escHtml(site.nap.hours)}</p>` +
    `</div></div>`
  );
}

/** Generic sidebar link-list card. */
function linkCard(heading, links) {
  if (!links.length) return '';
  const lis = links
    .map((l) => `<li class="mb-2"><a href="${escAttr(l.href)}">${escHtml(l.label)}</a></li>`)
    .join('');
  return (
    `<div class="card about-card mb-4"><div class="card-body">` +
    `<h2 class="h6 mb-3">${escHtml(heading)}</h2><ul class="list-unstyled mb-0">${lis}</ul></div></div>`
  );
}

module.exports = {
  CHROME_JS,
  loadPartial,
  waMessage, waHrefFor, ctaWhatsapp,
  headerRo, headerEn, footerRo, footerEn,
  cookieAlert, trustBar, dataStrip, deplasareBlock,
  breadcrumbs, contactCard, linkCard,
};
