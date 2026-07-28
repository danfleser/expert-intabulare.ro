'use strict';
// Site chrome: header/footer/cookie (RO + EN), breadcrumbs, WhatsApp CTA, sidebar, inline JS.
// All markup mirrors the live SaasBox theme (docs/index.html) — classes must not drift.

const fs = require('fs');
const path = require('path');
const { escHtml, escAttr, waHref } = require('./util');
const { renderTemplate } = require('./render');
const schema = require('./schema');

const PARTIALS_DIR = path.join(__dirname, '..', 'partials');

function loadPartial(name) {
  return fs.readFileSync(path.join(PARTIALS_DIR, name), 'utf8');
}

// ~0.7KB, minified by hand. Replaces the theme JS bundle on generated pages:
// navbar collapse, mobile dropdown togglers, cookie alert (same cookie name as live site).
const CHROME_JS =
  "(function(){var n=document.getElementById('saasboxNav'),t=document.querySelector('.navbar-toggler');" +
  "if(t&&n){t.addEventListener('click',function(){n.classList.toggle('show');t.setAttribute('aria-expanded',n.classList.contains('show'))})}" +
  "var ds=document.querySelectorAll('li.sb-dropdown');for(var i=0;i<ds.length;i++){(function(li){" +
  "var g=li.querySelector('.dropdown-toggler'),m=li.querySelector('.sb-dropdown-menu');" +
  "if(g&&m){g.addEventListener('click',function(){m.style.display=m.style.display==='block'?'none':'block'})}})(ds[i])}" +
  "var c=document.querySelector('.cookiealert'),b=document.querySelector('.acceptcookies');" +
  "if(c&&b){if(document.cookie.indexOf('acceptCookies=')<0){c.classList.add('show')}" +
  "b.addEventListener('click',function(){var d=new Date();d.setTime(d.getTime()+31536e6);" +
  "document.cookie='acceptCookies=true;expires='+d.toUTCString()+';path=/';c.classList.remove('show')})}})();";

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

function headerRo(site, { enHref }) {
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
  });
}

function headerEn(site, { roHref }) {
  const enMenuItems = site.en.navItems
    .map((it) => `<li><a href="${escAttr(it.href)}">${escHtml(it.label)}</a></li>`)
    .join('');
  return renderTemplate(loadPartial('header-en.html'), {
    enMenuItems,
    roHref: roHref || '/',
    enContactHref: site.en.contactHref,
  });
}

function footerRo(site) {
  const bySlug = new Map(site.nav.services.map((s) => [s.slug, s]));
  const footerServiceLinks = site.footer.coreServices
    .map((slug) => {
      const s = bySlug.get(slug) || { label: slug, slug };
      return `<li><a href="/servicii/${escAttr(s.slug)}/"><i class="bi bi-caret-right"></i>${escHtml(s.label)}</a></li>`;
    })
    .join('');
  const countyLinks = site.nav.counties
    .map((c) => `<li><a href="/zone/${escAttr(c.slug)}/"><i class="bi bi-caret-right"></i>Județul ${escHtml(c.label)}</a></li>`)
    .join('');
  const resourceLinks = site.footer.resources
    .map((r) => `<li><a href="${escAttr(r.href)}"><i class="bi bi-caret-right"></i>${escHtml(r.label)}</a></li>`)
    .join('');
  return renderTemplate(loadPartial('footer.html'), {
    footerServiceLinks,
    footerZoneLinks: countyLinks + resourceLinks,
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
    .map((p) => `<li><a href="${escAttr(p.path)}"><i class="bi bi-caret-right"></i>${escHtml(p.navLabel || p.title)}</a></li>`)
    .join('');
  return renderTemplate(loadPartial('footer-en.html'), {
    footerEnLinks,
    roHref: roHref || '/',
    enContactHref: site.en.contactHref,
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

function trustBar(site) {
  return renderTemplate(loadPartial('trust-bar.html'), {
    trustLine: site.trustStats.join(' · '),
  });
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
    `<div class="card about-card mb-4"><div class="card-body">` +
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
    .map((l) => `<li class="mb-2"><a href="${escAttr(l.href)}"><i class="bi bi-caret-right"></i>${escHtml(l.label)}</a></li>`)
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
  cookieAlert, trustBar, deplasareBlock,
  breadcrumbs, contactCard, linkCard,
};
