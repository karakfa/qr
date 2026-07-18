# TODO

- Wire `jigsaw.html` into the gallery after fine-tuning (prototype;
  holding off on request).

- Replace the live-simulated thumbnails on `index.html` with static images.
  Every keystroke in the text input currently re-runs all fifteen thumbnail
  sims (the Gray-Scott one alone is ~4.4M cell updates), which is wasted work —
  pre-rendered images are fine for the gallery.
