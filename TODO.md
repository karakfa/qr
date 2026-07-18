# TODO

- Wire `svd.html`, `mondrian.html`, `fold.html`, `twist.html`, and
  `blink.html` into the gallery (index cards, thumbnails, README rows,
  count bump) — pages are done; holding off on request.
- Replace the live-simulated thumbnails on `index.html` with static images.
  Every keystroke in the text input currently re-runs all fifteen thumbnail
  sims (the Gray-Scott one alone is ~4.4M cell updates), which is wasted work —
  pre-rendered images are fine for the gallery.
