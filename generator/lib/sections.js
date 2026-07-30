'use strict';
// Section-type renderers for authored pages (guides, verticals, EN pages).
// Supported types: html|paragraph, checklist (printable), table, faq, process, cta.

const { escHtml } = require('./util');

/**
 * @param {Array} sections authored section objects
 * @param {Object} ctx { ctaHtml } — prebuilt WhatsApp CTA block for type:"cta"
 * @returns {{ html: string, faqs: Array }} faqs collected for FAQPage JSON-LD
 */
function renderSections(sections, ctx, warnings) {
  const parts = [];
  const faqs = [];
  for (const s of sections || []) {
    const heading = s.heading ? `<h2 class="h4 mb-3">${escHtml(s.heading)}</h2>` : '';
    switch (s.type) {
      case 'html':
      case 'paragraph': {
        const body = s.html !== undefined ? s.html : `<p>${escHtml(s.text || '')}</p>`;
        parts.push(`<div class="mb-5">${heading}${body}</div>`);
        break;
      }
      case 'checklist': {
        const items = (s.items || []).map((it) => `<li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>${escHtml(it)}</li>`).join('');
        parts.push(
          `<div class="card about-card mb-5 checklist-print"><div class="card-body">${heading}` +
          `<ul class="list-unstyled mb-3">${items}</ul>` +
          `<p class="fz-14 mb-0 d-print-none"><a href="javascript:window.print()"><i class="bi bi-printer me-1"></i>Printați lista</a></p>` +
          `</div></div>`
        );
        break;
      }
      case 'table': {
        const head = (s.head || []).map((h) => `<th>${escHtml(h)}</th>`).join('');
        const rows = (s.rows || [])
          .map((r) => `<tr>${r.map((c) => `<td>${escHtml(c)}</td>`).join('')}</tr>`)
          .join('');
        parts.push(
          `<div class="mb-5">${heading}<div class="table-scroll"><table class="table">` +
          (head ? `<thead><tr>${head}</tr></thead>` : '') +
          `<tbody>${rows}</tbody></table></div></div>`
        );
        break;
      }
      case 'faq': {
        const items = (s.items || []);
        faqs.push(...items);
        const blocks = items
          .map((f) => `<details class="panel mb-2" open data-mob><summary><span class="q">${escHtml(f.q)}</span><span class="count"></span></summary><div class="panel-body"><p class="mt-2 mb-0">${escHtml(f.a)}</p></div></details>`)
          .join('');
        parts.push(`<div class="mb-5">${s.heading ? heading : '<h2 class="h4 mb-3">Întrebări frecvente</h2>'}${blocks}</div>`);
        break;
      }
      case 'process': {
        // steps are plain strings or {title, text} objects (guides/verticals)
        const steps = (s.steps || s.items || [])
          .map((st) => {
            if (typeof st === 'string') return `<li class="mb-2">${escHtml(st)}</li>`;
            const title = st.title ? `<strong>${escHtml(st.title)}</strong>` : '';
            const text = st.text ? escHtml(st.text) : '';
            return `<li class="mb-2">${title}${title && text ? ' — ' : ''}${text}</li>`;
          })
          .join('');
        parts.push(`<div class="mb-5">${heading}<ol class="ps-3">${steps}</ol></div>`);
        break;
      }
      case 'cta': {
        parts.push(`<div class="mb-5">${heading}${s.text ? `<p>${escHtml(s.text)}</p>` : ''}${ctx.ctaHtml || ''}</div>`);
        break;
      }
      default: {
        if (s.html !== undefined) {
          parts.push(`<div class="mb-5">${heading}${s.html}</div>`);
        } else if (warnings) {
          warnings.push(`unknown section type "${s.type}" with no html fallback — skipped`);
        }
      }
    }
  }
  return { html: parts.join('\n'), faqs };
}

module.exports = { renderSections };
