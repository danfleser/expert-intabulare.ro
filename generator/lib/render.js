'use strict';
// {{slot}} template interpolation. {{{name}}} inserts raw HTML, {{name}} escapes.
// Missing slots render as '' and are reported via the optional warnings array.

const { escHtml } = require('./util');

function renderTemplate(template, data, warnings, templateName) {
  return template
    .replace(/\{\{\{\s*([\w.-]+)\s*\}\}\}/g, (_, key) => {
      if (data[key] === undefined || data[key] === null) {
        if (warnings) warnings.push(`template ${templateName || '?'}: missing raw slot {{{${key}}}}`);
        return '';
      }
      return String(data[key]);
    })
    .replace(/\{\{\s*([\w.-]+)\s*\}\}/g, (_, key) => {
      if (data[key] === undefined || data[key] === null) {
        if (warnings) warnings.push(`template ${templateName || '?'}: missing slot {{${key}}}`);
        return '';
      }
      return escHtml(data[key]);
    });
}

/** Substitute {param} placeholders (locality, county, distance, ocpi, villages …) in authored copy. */
function fillParams(text, params) {
  return String(text).replace(/\{(\w+)\}/g, (m, key) =>
    params[key] !== undefined && params[key] !== null ? String(params[key]) : m
  );
}

module.exports = { renderTemplate, fillParams };
