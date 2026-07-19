# QR Playground — Idea Bank

Candidate pages, grouped by the machinery they'd need. Flagged by how
much new code each implies. (The gallery currently has 32 pages.)

## Reuse the conservation engine (cheap — like kufic/rings/hilbert/monogram)
Just define a new target shape; the stay-put + fly-in plumbing already exists.

- **Spiral** — ink winds into a single Archimedean spiral arm (natural sibling of Rings' concentric squares).
- **TSP tour** — one *closed optimized loop* through all the ink (nearest-neighbor + 2-opt). A pointed contrast to Hilbert's fixed space-filling curve: same "one line," but earned.
- **Bar chart / histogram** — count ink per column, stack it into bars. (Sort corner-stacks; this makes an actual chart.)
- **Big text** — spell the decoded URL itself in a bold pixel font (Monogram generalized to the whole string, Latin rather than Kufic).
- **Shape targets** — heart, star, smiley, spade (Panda proved the dithered-shape approach; these are line-art, cheaper).

## New simulations with a strong hook (the collection's sweet spot)
- **Abelian sandpile** — ink as grains; any cell with ≥4 topples to its neighbors, cascading into a self-similar fractal. Self-organized criticality.
- **DLA (diffusion-limited aggregation)** — ink walkers stick on contact and grow crystalline dendrites from a seed. Branching growth; nothing in the set does this.
- **Slime mold (Physarum)** — agents lay and follow pheromone trails, self-organizing into transport networks. A step beyond Labyrinth/Monster's single agent.
- **Chladni / cymatics** — ink migrates to the nodal lines of a vibrating plate. Striking symmetric figures.
- **Lenia** — continuous-domain Game of Life; smooth gliders and creatures. The modern cousin of Life/Ant.
- **Elementary CA (Rule 30/110)** — treat the top row as a seed and grow Wolfram's 1D automaton downward.

## Games / puzzles (autoplay, fits Breaker/Snake/Mines/Go)
- **Lights Out** — the code is the board; auto-solve by linear algebra over GF(2).
- **Nonogram** — derive row/column run-clues from the code, then an AI solver reconstructs it. The QR *is* the picross solution.
- **2048 / match-3** — ink as tiles that slide and merge (Checker-adjacent but interactive).
- **15-puzzle** — slide tiles to unscramble (Shuffle's ordered inverse).

## Symbology swaps (transform into another code)
- **Braille, Morse, or semaphore** rendering of the decoded string.
- **1-D barcode / DataMatrix / Aztec** — morph one machine-readable format into another.

## Art transforms
- **Truchet tiles** — replace each module with a random arc tile; the ink resolves into flowing maze curves.
- **Voronoi / Delaunay** — ink points as seeds; shatter the plane into cells or triangulate.
- **Pixel-sort glitch** — sort pixels along rows/columns by value for the datamosh look (distinct from Bubble Sort).

## Top picks (novelty per effort)
- **Sandpile** and **DLA** — rich, self-similar, unlike anything present.
- **Lights Out** and **Nonogram** — the code-*is*-the-puzzle conceit is very strong.
- **Spiral** or **TSP tour** — nearly free given the conservation engine; round out the Hilbert/Rings family.
