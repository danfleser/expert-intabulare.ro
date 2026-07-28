'use strict';
// JSON-LD builders. Real NAP only — never ratings, never invented data.

function jsonLdScript(obj) {
  // </script> can never legally appear inside; escape "<" in string values via JSON.stringify + replace.
  return `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;
}

function localBusiness(site) {
  const n = site.nap;
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.domain}/#business`,
    name: n.name,
    url: `${site.domain}/`,
    telephone: n.phoneIntl,
    email: n.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: n.street,
      addressLocality: n.city,
      addressRegion: n.county,
      addressCountry: 'RO',
    },
    geo: { '@type': 'GeoCoordinates', latitude: n.lat, longitude: n.lon },
    sameAs: [n.mapsUrl],
  };
}

function breadcrumbList(site, items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: site.domain + it.url,
    })),
  };
}

function serviceSchema(site, { serviceName, description, areaServed, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    url: site.domain + url,
    areaServed: { '@type': 'AdministrativeArea', name: areaServed },
    provider: { '@id': `${site.domain}/#business` },
  };
}

function faqPage(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

function definedTerm(site, term) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': `${site.domain}/dictionar/${term.slug}.html`,
    name: term.term,
    description: term.gloss || '',
    inDefinedTermSet: `${site.domain}/dictionar/`,
    url: `${site.domain}/dictionar/${term.slug}.html`,
  };
}

function definedTermSet(site, terms) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${site.domain}/dictionar/`,
    name: 'Dicționar de cadastru, carte funciară și topografie',
    url: `${site.domain}/dictionar/`,
    hasDefinedTerm: terms.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      url: `${site.domain}/dictionar/${t.slug}.html`,
    })),
  };
}

module.exports = { jsonLdScript, localBusiness, breadcrumbList, serviceSchema, faqPage, definedTerm, definedTermSet };
