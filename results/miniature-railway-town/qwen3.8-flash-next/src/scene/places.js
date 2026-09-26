/**
 * Hand-authored town plan. Pure data: every object is placed in world units on the
 * display board (x: -14..14, z: -10.5..10.5; -z is the far side, +z the near side).
 *
 * The village sits inside a railway ring with a single level crossing:
 *   - closed loop, station on the south straight, truss bridge over the river on the west straight
 *   - the river runs in from the far west, under the bridge, and widens into the mill pond
 *   - High Street (N-S spine) + Market Street (E-W loop) + Mill Lane + Pond Walk + a farm lane
 *   - countryside (fields, woods, farm, river valley) outside the rails, village inside
 *
 * Footprints are local: `w` spans the front face, `d` is the depth, the front faces +z
 * when rot = 0. Rail clearance for each entry is verified by `npm run check`.
 */

export const PALETTES = {
  brick: { wall: 0x9c5a44, roof: 0x53362c },
  cream: { wall: 0xd9c39a, roof: 0x8a5741 },
  stone: { wall: 0xb9b0a0, roof: 0x5c5f63 },
  white: { wall: 0xe6e0d4, roof: 0x4b5561 },
  blue: { wall: 0x8fa2a8, roof: 0x414d55 },
  green: { wall: 0x8fa082, roof: 0x4d4239 },
  red: { wall: 0xa8503c, roof: 0x40332c },
  ochre: { wall: 0xc79a52, roof: 0x6b4a30 },
  slate: { wall: 0xa9a29a, roof: 0x4a4f57 },
  dark: { wall: 0x6b6157, roof: 0x33322f },
  plaster: { wall: 0xe0cfb2, roof: 0x7b4f3a },
  station: { wall: 0xdfd4c2, roof: 0x40403c },
};

/** Buildings. */
export const BUILDINGS = [
  // --- station group, on the town side of the south straight ---
  b(-1.20, 3.45, Math.PI, 3.80, 1.80, 1.70, 'station', 'station', { bay: true }),
  b(3.60, 4.30, -0.04, 2.00, 1.50, 1.45, 'hip', 'slate', { doors: 1 }),        // parcels office
  b(2.25, 5.00, 0.00, 1.00, 0.95, 1.40, 'flatTower', 'red', { upper: true }),  // signal box
  b(-4.10, 4.55, 0.00, 1.90, 1.90, 3.10, 'waterTower', 'stone', {}),          // scenery object

  // --- market square, the town core ---
  b(3.10, -1.75, 0.00, 3.30, 1.90, 2.65, 'hall', 'cream', { cupola: true }),
  b(1.45, -0.90, Math.PI / 2, 1.70, 1.55, 2.20, 'gable', 'plaster', {}),
  b(1.45, 0.90, Math.PI / 2, 1.70, 1.50, 2.00, 'gable', 'blue', {}),
  b(5.85, -0.60, Math.PI / 2, 1.75, 1.55, 2.15, 'shop', 'red', { awning: true }),
  b(5.85, 1.20, Math.PI / 2, 1.75, 1.55, 2.00, 'gable', 'ochre', {}),
  b(3.10, 1.85, Math.PI, 2.20, 1.50, 2.05, 'gable', 'green', {}),

  // --- houses up High Street, west side ---
  b(-1.85, -0.30, 0.05, 1.80, 1.65, 2.05, 'gable', 'brick', {}),
  b(-2.10, -2.50, 0.12, 1.70, 1.55, 1.95, 'hip', 'cream', {}),
  b(-4.00, -2.10, -0.20, 1.90, 1.60, 2.15, 'gable', 'stone', {}),
  b(-4.60, -4.35, -0.10, 1.60, 1.45, 1.85, 'gable', 'white', {}),

  // --- church + north terrace facing the loop road ---
  b(5.30, -4.00, 0.00, 3.30, 2.05, 2.45, 'church', 'stone', { spire: 2.90 }),
  b(2.30, -4.30, 0.00, 1.75, 1.50, 1.95, 'gable', 'slate', {}),
  b(0.55, -4.35, 0.00, 1.60, 1.45, 1.85, 'hip', 'plaster', {}),
  b(-1.40, -4.90, 0.10, 1.70, 1.50, 1.90, 'gable', 'brick', {}),

  // --- mill and waterside cottages, west of the pond ---
  b(-4.70, 1.30, -0.30, 1.75, 1.45, 2.25, 'mill', 'stone', { wheel: true }),
  b(-5.60, 3.60, 0.20, 1.60, 1.45, 1.80, 'gable', 'white', {}),
  b(-7.20, 3.30, -0.15, 1.70, 1.50, 1.90, 'gable', 'red', {}),

  // --- east side, fronting the loop road ---
  b(8.20, 1.05, 1.50, 1.90, 1.60, 2.10, 'gable', 'blue', {}),
  b(8.40, -1.30, 1.55, 2.00, 1.55, 2.00, 'hip', 'cream', {}),
  b(7.90, 2.90, 1.05, 1.70, 1.45, 1.85, 'gable', 'plaster', {}),

  // --- goods shed opening onto Market Street ---
  b(6.55, 4.00, 0.02, 2.60, 1.70, 1.55, 'shed', 'dark', { slidingDoors: true }),

  // --- park pavilion above the pond ---
  b(-3.10, -4.55, 0.10, 1.50, 1.10, 1.35, 'pavilion', 'white', {}),

  // --- farm outside the north straight ---
  b(2.60, -8.75, 0.12, 2.30, 1.80, 1.95, 'gable', 'white', {}),
  b(5.30, -8.55, 0.15, 2.80, 1.80, 1.70, 'barn', 'red', { hayLoft: true }),
  b(-7.80, -8.90, -0.25, 2.10, 1.70, 1.90, 'gable', 'stone', {}),
];

function b(x, z, rot, w, d, h, kind, pal, features = {}) {
  return { x, z, rot, w, d, h, kind, pal, ...features };
}

/** Roads, in draw order. */
export const ROADS = [
  {
    name: 'high-street', halfWidth: 0.76, pave: 'tarmac',
    pts: [{ x: 0.30, z: -4.30 }, { x: 0.10, z: -2.40 }, { x: 0.00, z: -0.40 }, { x: 0.10, z: 1.40 }, { x: 0.30, z: 2.85 }, { x: 0.35, z: 3.40 }],
  },
  {
    name: 'crossing-approach', halfWidth: 0.76, pave: 'tarmac',
    pts: [{ x: 0.36, z: -7.90 }, { x: 0.20, z: -7.10 }, { x: 0.05, z: -6.60 }, { x: -0.02, z: -6.00 }, { x: 0.10, z: -5.10 }, { x: 0.30, z: -4.25 }],
  },
  {
    name: 'market-street', halfWidth: 0.70, pave: 'tarmac',
    pts: [{ x: -3.10, z: 2.55 }, { x: -0.90, z: 2.50 }, { x: 1.60, z: 2.52 }, { x: 4.00, z: 2.35 }, { x: 6.20, z: 1.95 }, { x: 7.90, z: 1.10 }, { x: 8.65, z: -0.30 }, { x: 8.45, z: -2.10 }, { x: 7.45, z: -3.90 }, { x: 5.70, z: -5.00 }, { x: 3.60, z: -5.40 }, { x: 1.70, z: -5.15 }, { x: 0.40, z: -4.55 }],
  },
  {
    name: 'mill-lane', halfWidth: 0.55, pave: 'cobbles',
    pts: [{ x: -2.60, z: 2.52 }, { x: -4.00, z: 2.60 }, { x: -5.30, z: 2.55 }, { x: -6.50, z: 2.30 }, { x: -7.35, z: 1.95 }, { x: -7.95, z: 1.50 }],
  },
  {
    name: 'pond-walk', halfWidth: 0.40, pave: 'gravel',
    pts: [{ x: 0.10, z: -3.40 }, { x: -1.50, z: -3.35 }, { x: -2.90, z: -3.30 }, { x: -4.10, z: -2.60 },
      { x: -5.10, z: -2.15 }, { x: -6.30, z: -2.10 }, { x: -7.30, z: -1.55 }, { x: -7.90, z: -0.95 }],
  },
  {
    name: 'farm-lane', halfWidth: 0.50, pave: 'gravel',
    pts: [{ x: 0.22, z: -7.05 }, { x: 1.40, z: -7.55 }, { x: 2.55, z: -7.75 }, { x: 3.90, z: -7.60 }, { x: 4.90, z: -7.30 }],
  },
  {
    name: 'field-path', halfWidth: 0.34, pave: 'gravel',
    pts: [{ x: -0.05, z: -6.62 }, { x: -1.60, z: -6.90 }, { x: -3.40, z: -7.35 }, { x: -5.20, z: -7.85 }],
  },
];

/** Paved areas: station forecourt, market square, goods yard. */
export const PLAZAS = [
  { x: -1.15, z: 2.45, r: 1.80, pave: 'setts', shape: 'rect', w: 4.60, d: 1.55, rot: 0.02 },
  { x: 3.15, z: 0.25, r: 1.95, pave: 'setts', shape: 'rect', w: 3.50, d: 3.05, rot: 0.03 },
  { x: 6.35, z: 2.75, r: 1.55, pave: 'gravel', shape: 'rect', w: 2.90, d: 1.45, rot: 0.06 },
];

/** Street lamps: [x, z, kind]. */
export const LAMPS = [
  [-0.80, -3.30, 'post'], [1.15, -1.40, 'post'], [-0.85, 0.60, 'post'],
  [1.30, 1.45, 'post'], [1.05, 3.90, 'post'], [-2.60, 3.95, 'post'],
  [4.60, 3.35, 'post'], [7.30, 3.30, 'post'],
  [1.55, -0.60, 'square'], [4.75, 0.30, 'square'],
  [-3.40, 5.35, 'platform'], [-1.10, 5.35, 'platform'], [1.05, 5.35, 'platform'],
  [-5.95, 2.15, 'post'], [-7.90, 3.35, 'post'],
  [-4.60, -8.10, 'post'],
];

/** Trackside furniture placed by world position; the builder converts it to arc length. */
export const SIGNALS = [
  { x: 3.30, z: 6.60, side: -1, kind: 'semaphore' },   // station limit, east end of the platform
  { x: -6.20, z: 6.60, side: -1, kind: 'distant' },    // approach from the west
  { x: -10.20, z: 1.30, side: 1, kind: 'stop' },       // south end of the bridge
  { x: 8.90, z: -5.00, side: -1, kind: 'distant' },    // NE curve exit
];

export const POLES = [
  [11.35, -5.20], [11.45, -2.20], [11.55, 0.90], [11.30, 3.90], [10.10, 6.90], [7.00, 7.60],
];

/**
 * Tree clumps; `n` is an upper bound because scattering rejects rails, roofs,
 * roads, water and neighbours.
 */
export const GROVES = [
  g(-12.30, -7.20, 2.60, 15, 'broadleaf'),
  g(-13.50, -1.20, 1.90, 7, 'broadleaf'),
  g(-11.20, -9.20, 2.00, 9, 'conifer'),
  g(-3.60, -9.30, 1.80, 8, 'broadleaf'),
  g(8.30, -9.10, 1.80, 8, 'orchard'),
  g(12.30, -7.00, 1.90, 10, 'conifer'),
  g(12.60, 1.00, 1.80, 9, 'broadleaf'),
  g(12.10, 6.40, 1.90, 9, 'conifer'),
  g(-10.20, 8.60, 2.00, 8, 'broadleaf'),
  g(-1.60, 9.20, 1.70, 6, 'orchard'),
  g(6.40, 8.90, 1.80, 7, 'broadleaf'),
  g(-5.20, -0.60, 2.70, 8, 'willow'),
  g(-12.60, -2.20, 1.40, 5, 'willow'),
  g(-9.20, 5.60, 1.40, 4, 'broadleaf'),
  g(1.90, 7.60, 1.20, 3, 'broadleaf'),
  g(9.30, -6.40, 1.20, 4, 'broadleaf'),
  g(-2.60, -5.60, 1.30, 4, 'broadleaf'),
  g(4.40, 0.95, 0.90, 3, 'orchard'),
];

function g(x, z, r, n, kind) { return { x, z, r, n, kind }; }

/** Hedgerow lines [x1, z1, x2, z2] framing the fields outside the ring. */
export const HEDGES = [
  [-13.20, 7.50, -8.60, 7.95],
  [-5.60, 8.30, 1.40, 8.55],
  [3.60, 8.10, 9.80, 8.70],
  [-12.60, -8.60, -9.40, -9.50],
  [6.40, -9.60, 11.60, -9.30],
  [11.60, -3.40, 11.80, 3.40],
  [-7.20, -6.30, -12.60, -6.90],
];

/** Small props: [x, z, rot, kind]. */
export const PROPS = [
  [-2.60, 5.42, 0, 'bench'], [-0.40, 5.42, 0, 'bench'], [0.90, 5.42, 0, 'bench'],
  [3.15, 0.25, 0, 'fountain'], [2.10, -0.95, 0, 'marketCross'],
  [3.10, 5.15, 0.4, 'crate'], [3.55, 5.35, 1.1, 'crate'], [5.90, 3.05, 0.3, 'crate'],
  [6.90, 3.35, 0, 'barrel'], [-4.90, -2.90, 0.5, 'bench'], [-3.55, -4.10, 1.2, 'bench'],
  [-0.90, -7.65, 0, 'signpost'], [-6.30, 3.05, 0, 'signpost'], [4.55, -7.95, 0.6, 'haystock'],
  [4.95, -8.35, 0.2, 'haystock'], [-6.30, 0.75, 0.5, 'boat'], [-5.30, -0.35, 1.9, 'boat'],
  [7.90, -4.35, 0, 'bin'], [-2.30, 2.20, 0, 'bin'], [11.90, 4.40, 0, 'boulder'],
  [-12.80, -1.60, 0, 'boulder'], [-11.90, 3.30, 0.7, 'haystock'], [-8.40, -2.30, 0.4, 'boulder'],
  [2.65, -8.05, 0.2, 'crate'], [-12.30, -4.90, 0.9, 'boulder'],
];

/** Platform figures: [x, z, rot, kind] — cheap scale anchors beside the train. */
export const FIGURES = [
  [-3.60, 5.32, 2.6, 'adult'], [-1.90, 5.28, 3.4, 'adult'], [0.20, 5.34, 0.6, 'adult'],
  [1.40, 5.30, 4.2, 'child'], [-4.40, 5.30, 2.0, 'adult'], [-1.60, 1.42, 1.2, 'adult'],
  [4.60, 3.45, 5.0, 'adult'], [-6.20, 3.90, 2.2, 'adult'],
];
