# QR Playground

One QR code, thirteen ways to fall apart.

Every page renders a scannable QR code, holds it for four seconds, then lets a
simulation take it apart. Each page is a **single self-contained HTML file** —
no build step, no network, no dependencies. Open it in a browser and watch.

**[`index.html`](index.html)** is the gallery: type any text there and every
variant will encode it (the links pass it along as `?text=`).

| Page | What happens | Under the hood |
|------|--------------|----------------|
| [`life.html`](life.html) | The modules play Conway's Game of Life | B3/S23 on the module grid |
| [`melt.html`](melt.html) | The ink melts and drips down | Particle fluid (Clavet et al. SPH: viscosity + double-density relaxation), metaball rendering |
| [`collapse.html`](collapse.html) | Blocks break loose, tumble, and pile into rubble | Rigid bodies (Matter.js), impact flashes and dust on collision events |
| [`diffuse.html`](diffuse.html) | Cells random-walk, bump inelastically, and drift out of view | Symmetric simple exclusion process on the grid |
| [`breaker.html`](breaker.html) | The code is the brick wall in a self-playing brick breaker | Arcade ball physics; the paddle AI banks shots off the walls to target bricks |
| [`snake.html`](snake.html) | A snake eats every cell except the three finder squares, then eats itself | BFS pathfinding with a tail-reachability safety check |
| [`tetris.html`](tetris.html) | The code disassembles into tetromino chunks and plays sloppy autoplay tetris | A deliberately mediocre AI: lazy placements, 27% blunders, chokes under pressure — tops out ~10% of the time |
| [`go.html`](go.html) | The code becomes a legal Go position and the game plays itself out | Full rules (captures, no suicide, simple ko, area scoring); black is a lazy giant, white fights hard in the gaps |
| [`heat.html`](heat.html) | Gaussian blur smears the code into a uniform gray | The heat equation on the ink density field; zero-flux boundaries conserve the ink, so the end state is the code's own mean gray |
| [`ant.html`](ant.html) | Langton's ants chew chaos and highways through the code, forever | Classic turmite rules on a torus; the step rate ramps from readable to a boil |
| [`shuffle.html`](shuffle.html) | Rows and columns get shuffled, cells gliding to their new spots, until the code is pure noise | Alternating row/column Fisher-Yates permutations — a mixing Markov chain; done when agreement with the original sits at chance |
| [`sort.html`](sort.html) | Every row gets bubble-sorted, then every column; the ink stacks into a corner staircase | For 0/1 grids, column sorting provably never unsorts the rows, so two phases suffice |
| [`panda.html`](panda.html) | The black modules fly to new positions and reassemble as a halftone panda | A procedural grayscale priority map dithered to exactly the code's ink count — nothing added, nothing lost |

## Notes

- QR generation by [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator)
  (MIT), inlined. `collapse.html` inlines [Matter.js](https://github.com/liabru/matter-js) (MIT).
- Error correction level M means the code often still scans for the first
  moments of destruction.
- Pages honor `prefers-reduced-motion`: the animation waits for an explicit
  button press.

Built with [Claude Code](https://claude.com/claude-code).
