# QR Playground

One QR code, forty ways to fall apart.

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
| [`monster.html`](monster.html) | One lone module turns monster and annihilates every other, then bounds off the far edge in parabolic hops | A cell's toughness is 1 + ⌊log₂(edge-connected block size)⌋, so lone cells fall in one hit and fat finder blobs take seven; the monster finishes each cell, walks the white between meals, and escapes at the end |
| [`monogram.html`](monogram.html) | The ink sets itself into a big bold "QR" monogram, centered, framed like a badge | A blocky bitmap letterform (ring-and-tail Q, stem/bowl/leg R) rasterized to module scale; ink is exactly conserved, the surplus laying a balanced border frame; stay-put plus fly-in |
| [`truchet.html`](truchet.html) | Every module becomes a Truchet arc tile chosen by its own color, and the code weaves into a maze where every curve traces itself in its own hue | No randomness in the tiling — dark/light picks the arc orientation — so tiles always link into closed loops and open paths that exactly cover the grid; every curve gets an independent random color, all finishing together |
| [`tsp.html`](tsp.html) | A travelling salesman threads every black module into a single closed tour, then 2-opt pulls the crossings out | The ink is the city set: a nearest-neighbour tour improved by neighbour-list 2-opt with don't-look bits, until it stops shortening — one loop visiting every module once, ~15% shorter than greedy; ink exactly conserved, every city a module |
| [`circuit.html`](circuit.html) | The same salesman under taxicab rules: one closed loop that only ever turns at right angles | Manhattan (L1) distance instead of Euclidean; nearest-neighbour + 2-opt on the L1 metric, each edge drawn as an orthogonal elbow (bend orientation alternating by parity) so the tour reads as a circuit of traces; ink exactly conserved |
| [`momentum.html`](momentum.html) | The taxicab salesman gains inertia: turning costs, so the loop holds its heading and runs in long straight traces | Cost is Manhattan distance plus a per-corner penalty `W·(1−cos θ)`; momentum-aware nearest-neighbour then 2-opt to a true local optimum on the combined cost (a reversal only changes the turn cost at its four cut endpoints); `W` tunable via `?w=` (default 3), elbows chosen to continue the arrival axis |
| [`crossword.html`](crossword.html) | The code turns into a numbered crossword and a solver fills it — read the across answers to recover the link | Black modules become blocked squares (the black-square pattern is the code); white cells are numbered by the standard across/down rule; the decoded source string is written into the cells in reading order, so each across entry spells a consecutive slice of it; ink exactly conserved |
| [`histogram.html`](histogram.html) | Each connected blob of ink folds its cells onto each other and drops into a histogram of blob sizes | 4-connected components are measured; each folds (an accordion collapse to its centre) into one cell that flies to the bar for its size — x is blob size, bar height is how many blobs are that big; present sizes are packed into adjacent columns so the long tail stays compact (the three finder rings show up as size-24×3) |
| [`countdown.html`](countdown.html) | The collection in reverse: the ink counts down 10→0, then flies into place as the finished code | Every frame uses exactly the ink count — a big pixel numeral plus a border frame that soaks up the surplus; cells that are black in two consecutive frames stay pinned, and only the difference moves, matched by minimal transport (greedy nearest + 2-opt) so the ink slides rather than scrambles |
| [`spiral.html`](spiral.html) | The ink winds into one square spiral from the edge inward, then breathes — flowing in along its own path and back out | A pitch-2 square spiral (one thin arm, not nested squares); the ink is a sliding window on a track that covers every cell (inward arm plus a complementary arm back out), so it flows in then out with the count conserved; formation is fed outer-layer first |

## Notes

- QR generation by [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator)
  (MIT), inlined. `collapse.html` inlines [Matter.js](https://github.com/liabru/matter-js) (MIT).
- Error correction level M means the code often still scans for the first
  moments of destruction.
- Pages honor `prefers-reduced-motion`: the animation waits for an explicit
  button press.

Built with [Claude Code](https://claude.com/claude-code).
