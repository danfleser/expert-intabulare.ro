'use strict';
// Sitemap index + 7 section sitemaps + robots.txt (spec ruling o; section names from Team D).

const SECTION_NAMES = [
  'sitemap-core.xml',
  'sitemap-servicii-alba.xml',
  'sitemap-servicii-vecini.xml',
  'sitemap-ghid.xml',
  'sitemap-verticale.xml',
  'sitemap-dictionar.xml',
  'sitemap-en.xml',
];

function urlXml(loc, lastmod) {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
}

function sectionXml(urls, lastmod) {
  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => urlXml(u, lastmod)).join('\n') +
    `\n</urlset>\n`
  );
}

function indexXml(domain, sections, lastmod) {
  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    sections
      .map((s) => `  <sitemap>\n    <loc>${domain}/${s}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>`)
      .join('\n') +
    `\n</sitemapindex>\n`
  );
}

/**
 * @param {Object} site site.json
 * @param {Object} sections { core: [urls], serviciiAlba: [], serviciiVecini: [], ghid: [], verticale: [], dictionar: [], en: [] }
 *   URLs are site-absolute paths ("/servicii/…"). Empty sections are still written (valid empty urlset)
 *   so the index never points at a 404.
 * @returns {Map<string,string>} docs-relative filename → file content
 */
function buildSitemaps(site, sections) {
  const lastmod = site.buildDate;
  const d = site.domain;
  const files = new Map();
  const abs = (list) => [...list].sort().map((u) => d + u);

  files.set('sitemap-core.xml', sectionXml(abs(sections.core), lastmod));
  files.set('sitemap-servicii-alba.xml', sectionXml(abs(sections.serviciiAlba), lastmod));
  files.set('sitemap-servicii-vecini.xml', sectionXml(abs(sections.serviciiVecini), lastmod));
  files.set('sitemap-ghid.xml', sectionXml(abs(sections.ghid), lastmod));
  files.set('sitemap-verticale.xml', sectionXml(abs(sections.verticale), lastmod));
  files.set('sitemap-dictionar.xml', sectionXml(abs(sections.dictionar), lastmod));
  files.set('sitemap-en.xml', sectionXml(abs(sections.en), lastmod));
  files.set('sitemap.xml', indexXml(d, SECTION_NAMES, lastmod));
  files.set('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${d}/sitemap.xml\n`);
  return files;
}

module.exports = { buildSitemaps, SECTION_NAMES };
