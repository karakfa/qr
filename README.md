# QR Playground

One QR code, thirty ways to fall apart.

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
| [`anneal.html`](anneal.html) | The code becomes a cooling magnet; domains coarsen, round off, and one color conquers the board | Ising model under Metropolis dynamics, temperature falling through T_c; passing criticality erases most of the ink's minority disadvantage, so the winner is close to a coin flip |
| [`bloom.html`](bloom.html) | The ink seeds a chemical garden and coral labyrinths bloom out of the code | Gray–Scott reaction-diffusion at coral-growth parameters (F=0.0545, k=0.062) on a 4× subgrid; done when the pattern stops changing |
| [`mines.html`](mines.html) | The code becomes a minesweeper board and a sweeper plays it, opening the ink away cell by cell | Mines under a random 10% of cells; honest single-point deduction plus least-risk guessing (only the first click is guaranteed safe) — about 1 game in 4 ends in a boom |
| [`svd.html`](svd.html) | The code is a 0/1 matrix that sheds its singular values down to rank 1, then rebuilds until it scans again | One-sided Jacobi SVD, inlined; U, Σ, Vᵀ rendered in grayscale; the picture walks the best rank-k approximations both ways |
| [`mondrian.html`](mondrian.html) | The code composes itself into a Mondrian: lines rule themselves, then every field fills at once | Recursive cuts placed where the ink runs thickest; fields take red, blue, or yellow by ink share; a different composition for every text |
| [`fold.html`](fold.html) | The sheet folds in half four times and the layers XOR — ink on ink cancels | 33×33 → 17×33 → 17×17 → 9×17 → 9×9; the crease keeps its single layer; what remains is the parity of the code |
| [`twist.html`](twist.html) | Random square patches twist 90° left or right until the code is churned to noise | 4×4–8×8 patches rotate like a twisty puzzle, corners overhanging mid-turn; ink conserved; done when agreement with the original sits at chance |
| [`blink.html`](blink.html) | Ink islands gray out, blink three times, and vanish — smallest first | 4-connected components removed in ascending size order; one decomposition up front stays exact because whole islands never merge |
| [`jigsaw.html`](jigsaw.html) | The ink solves itself as a jigsaw: blobs lift, turn, flip, and dock into the snuggest whitespace until everything is one piece | Pieces re-read from the board every move; bridge-splitting, edge-maximizing placement, then a continental compaction endgame; completeness = fraction of possible edge connections made, strictly rising every move |
| [`flood.html`](flood.html) | Every enclosed pocket of whitespace floods with its own color, then the colors darken until the code is a solid black square | With a boundary wall assumed, the white cells split into closed lakes; each floods as a breadth-first wave, largest first, hues spaced by the golden angle; darkness sweeps in fill order |
| [`kufic.html`](kufic.html) | The ink takes flight, module by module, and resettles as square Kufic calligraphy of the same string | Square-Kufic-styled letterforms: one-module strokes, right angles, a woven baseline; ink exactly conserved — the surplus becomes a border frame in the margin, as in banna'i panels |
| [`labyrinth.html`](labyrinth.html) | One lone module wakes up orange, blinks once, and walks the code as a labyrinth until every reachable corridor is explored | Depth-first with a randomized sense of direction; the code's fragmented whitespace means territory matters, so the single with the most to explore wakes up; ends provably back home |
| [`hilbert.html`](hilbert.html) | Every black module files onto a Hilbert-style curve — space-filling, self-avoiding, self-similar, one unbroken line of the same ink | A generalized Hilbert curve at half density spans the code and holds ~n²/2 cells, almost exactly the ink count; the curve is cut to precisely the ink count, so conservation is exact |
| [`rings.html`](rings.html) | The ink crystallizes into concentric squares, outermost first; whatever already lies on a ring stays put | Rings at every other offset hold ~n²/2 cells — the ink count again; ~55% of modules never move (finder edges survive as long runs), the rest pair off by center-distance and angle for short radial flights |
| [`checker.html`](checker.html) | The ink re-tiles itself into checkerboards of growing scale — 1×1, 2×2, 3×3, … — and ends gathered into one large block | Each board picks the parity closest to the ink count; surplus becomes a margin frame, deficit trims tail blocks; the finale is a centered ⌈√ink⌉ square; exactly conserved at every stage |
| [`clock.html`](clock.html) | The ink becomes an analog clock telling real time — hub, markers, three hands, a second hand that flies to its new angle every tick | The dial is carved from a solid frame (bezel plus corner spandrels) sized to the ink; the frame's corner tips are a breathing pool that balances the hands' changing cell counts, so the total never drifts |
| [`digital.html`](digital.html) | The ink becomes a seven-segment digital clock, HH:MM:SS, with colons blinking the seconds | Digits sit in a white window carved from a solid frame filled window-outward; changing digits' modules fly to their new segments each second; exactly conserved every tick |

## Notes

- QR generation by [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator)
  (MIT), inlined. `collapse.html` inlines [Matter.js](https://github.com/liabru/matter-js) (MIT).
- Error correction level M means the code often still scans for the first
  moments of destruction.
- Pages honor `prefers-reduced-motion`: the animation waits for an explicit
  button press.

Built with [Claude Code](https://claude.com/claude-code).
