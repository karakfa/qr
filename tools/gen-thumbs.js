#!/usr/bin/env node
'use strict';
/*
 * Bake the gallery thumbnails.
 *
 * The tile renderers live in index.html (the drawThumbs() function in the
 * gallery's <script>) — that stays the single source of truth. This script
 * runs that exact code headlessly against @napi-rs/canvas, then writes each
 * rendered tile back into its <img data-thumb="NAME"> as an embedded base64
 * PNG. No browser, no per-visit computation: the shipped gallery is static.
 *
 * Usage:
 *   cd tools && npm install && node gen-thumbs.js
 *
 * Add a tile:
 *   1. add the page (foo.html) and its gallery card in index.html with
 *      <img class="thumb" width="168" height="168" alt="QR FOO thumbnail"
 *           data-thumb="foo" src="">
 *   2. add a `// FOO:` block to drawThumbs() that renders into ctx2d('th-foo')
 *   3. run this script — it fills in every tile's src.
 *
 * The same renderers are also reachable live at index.html?gen (which offers
 * a download of a freshly re-embedded index.html) for when a browser is handier
 * than Node.
 */
const fs = require('fs');
const path = require('path');

let createCanvas;
try {
  ({ createCanvas } = require('@napi-rs/canvas'));
} catch (e) {
  console.error('Missing dependency. Run:  cd tools && npm install\n');
  process.exit(1);
}

const INDEX = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(INDEX, 'utf8');

const blocks = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
const libBlock = blocks.find((b) => b.includes('var qrcode=function'));
const ctrlBlock = blocks.find((b) => b.includes('function drawThumbs'));
if (!libBlock || !ctrlBlock) {
  console.error('Could not locate the qrcode library / gallery script in index.html.');
  process.exit(1);
}

// the QR library, as a value
const qrcode = eval('(function(){' + libBlock + '; return qrcode;})()');

// the text the thumbnails encode = the gallery input's default value
const CANON = (html.match(/id="text"[^>]*value="([^"]*)"/) || [])[1] ||
  'https://en.wikipedia.org/wiki/QR_code';

// --- minimal DOM shim backed by @napi-rs/canvas ---
const canvases = {}; // th-NAME -> napi canvas (kept so we can export them)
const mk = (w, h) => createCanvas(w || 168, h || 168);
const documentShim = {
  getElementById(id) {
    if (id === 'text') return { value: CANON, addEventListener() {} };
    if (/^th-/.test(id)) return canvases[id] || (canvases[id] = mk(168, 168));
    return null;
  },
  querySelectorAll() { return []; },
  createElement(tag) {
    return String(tag).toLowerCase() === 'canvas'
      ? mk(168, 168)
      : { style: {}, getContext() { return null; }, setAttribute() {}, appendChild() {} };
  }
};
const windowShim = { devicePixelRatio: 1, matchMedia() { return { matches: false }; } };

// run the gallery controller IIFE with our shims in scope; it exposes a
// render hook (window.__renderThumbs) that draws every tile into the
// canvases our document hands out
try {
  new Function('qrcode', 'document', 'window', ctrlBlock)(qrcode, documentShim, windowShim);
  if (typeof windowShim.__renderThumbs !== 'function') {
    throw new Error('index.html did not expose window.__renderThumbs');
  }
  windowShim.__renderThumbs();
} catch (e) {
  console.error('Rendering failed:', (e && e.stack) || e);
  process.exit(1);
}

const rendered = Object.keys(canvases).map((id) => id.slice(3)).sort();
const cardNames = [...html.matchAll(/data-thumb="([a-z0-9]+)"/g)].map((m) => m[1]);
const noCard = rendered.filter((n) => !cardNames.includes(n));
const noRenderer = cardNames.filter((n) => !rendered.includes(n));
if (noCard.length) console.warn('  ! drawn but no <img data-thumb> card:', noCard.join(', '));
if (noRenderer.length) console.warn('  ! card present but nothing drew it:', noRenderer.join(', '));

let baked = 0, bytes = 0;
for (const name of rendered) {
  const png = canvases['th-' + name].toBuffer('image/png');
  bytes += png.length;
  const uri = 'data:image/png;base64,' + png.toString('base64');
  const tagRe = new RegExp('<img\\b[^>]*data-thumb="' + name + '"[^>]*>');
  if (!tagRe.test(html)) continue;
  html = html.replace(tagRe, (tag) =>
    /\ssrc="/.test(tag) ? tag.replace(/src="[^"]*"/, 'src="' + uri + '"')
                        : tag.replace(/<img\b/, '<img src="' + uri + '"'));
  baked++;
}

fs.writeFileSync(INDEX, html);
console.log(`Baked ${baked} thumbnails (${(bytes / 1024).toFixed(0)} KB of PNG) into index.html`);
