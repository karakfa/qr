# TODO

_(nothing open)_

Done:

- ~~Replace the live-simulated `index.html` thumbnails with static images.~~
  Thumbnails are now pre-rendered, embedded base64 PNGs — the gallery runs no
  simulation on load or per keystroke. The tile renderers stay in `index.html`
  (`drawThumbs()`), and `tools/gen-thumbs.js` bakes them headlessly; see
  `tools/README.md` (or open `index.html?gen`).
