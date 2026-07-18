# TODO

- Wire `svd.html` into the gallery (index card, thumbnail, README row,
  count bump) — page is done; holding off on request.
- Replace the live-simulated thumbnails on `index.html` with static images.
  Every keystroke in the text input currently re-runs all fifteen thumbnail
  sims (the Gray-Scott one alone is ~4.4M cell updates), which is wasted work —
  pre-rendered images are fine for the gallery.
