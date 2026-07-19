# Gallery thumbnail tooling

The gallery (`index.html`) shows one thumbnail per page. Those thumbnails are
**pre-rendered, embedded base64 PNGs** — the gallery runs no simulation on load
or on keystroke. This directory bakes them.

The tile renderers themselves live in `index.html` (the `drawThumbs()` function
inside the gallery `<script>`); that is the single source of truth. This tool
just executes that same code headlessly and writes the results back.

## Regenerate all thumbnails

```sh
cd tools
npm install        # once; pulls @napi-rs/canvas (prebuilt, no system cairo)
node gen-thumbs.js # rewrites the <img data-thumb> src="…" in ../index.html
```

Requires Node 18+. `@napi-rs/canvas` ships prebuilt binaries, so there is no
native build step.

## Add a new tile

1. Create the page (`foo.html`).
2. Add its gallery card in `index.html` with an empty-src image:
   ```html
   <img class="thumb" width="168" height="168" alt="QR FOO thumbnail"
        data-thumb="foo" src="">
   ```
3. Add a `// FOO:` block to `drawThumbs()` that renders into `ctx2d('th-foo')`,
   using the shared helpers (`dark`, `px`, `rnd`, `manhattanTour`, …).
4. Run `node gen-thumbs.js`. It fills in every tile's `src` and warns about any
   card without a renderer (or vice-versa).

## No-Node alternative

Open `index.html?gen` in a browser: it swaps the static tiles for live canvases,
renders once, and offers a **Download index.html** button with the fresh
thumbnails re-embedded. Handy when a browser is closer than a Node install.
