// Reusable architectural building blocks (all in a Brush's local space, +z = front).
import { M } from '../voxel/palette.js';

// ---------------------------------------------------------------------------
// platforms, stairs, railings
// ---------------------------------------------------------------------------

/** Stone plinth (须弥座 style banding). Box [x0..x1]x[z0..z1], h layers starting at y0. */
export function slab(b, x0, x1, z0, z1, y0, h, o = {}) {
  const cap = o.cap ?? M.MARBLE;
  const body = o.body ?? M.MARBLE2;
  const base = o.base ?? M.STONE2;
  const band = o.band ?? M.STONE;
  for (let y = 0; y < h; y++) {
    const c = y === h - 1 ? cap : y === 0 ? base : body;
    b.box(x0, y0 + y, z0, x1, y0 + y, z1, c);
  }
  if (h >= 3 && !o.plain) {
    for (let y = 1; y < h - 1; y++) {
      for (let x = x0; x <= x1; x++)
        for (const z of [z0, z1]) if (((x >> 1) & 1) === 0) b.set(x, y0 + y, z, band);
      for (let z = z0; z <= z1; z++)
        for (const x of [x0, x1]) if (((z >> 1) & 1) === 0) b.set(x, y0 + y, z, band);
    }
  }
}

/**
 * Stair flight climbing towards the platform edge. Platform occupies layers y0..y0+h-1 up to `edge`
 * (inclusive). dir=+1 -> steps go towards +z, -1 -> -z.  The stairs are `run` deep per step.
 * o.ramp = [xa, xb] gets a lighter carved centre slab (御路).
 */
export function stairsZ(b, x0, x1, edge, y0, h, o = {}) {
  const dir = o.dir ?? 1;
  const run = o.run ?? 2;
  const tread = o.tread ?? M.MARBLE;
  const riser = o.riser ?? M.MARBLE2;
  const ribbon = o.ribbon ?? true;
  for (let j = 1; j <= h - 1; j++) {
    const zs = edge + dir * ((h - 1 - j) * run + 1);
    const ze = edge + dir * ((h - j) * run);
    if (j > 1) b.box(x0, y0, zs, x1, y0 + j - 2, ze, riser);
    b.box(x0, y0 + j - 1, zs, x1, y0 + j - 1, ze, tread);
    if (o.ramp) {
      const [ra, rb] = o.ramp;
      if (j > 1) b.box(ra, y0, zs, rb, y0 + j - 2, ze, M.STONE);
      b.box(ra, y0 + j - 1, zs, rb, y0 + j - 1, ze, M.SLAB1);
      // carved pattern on the ramp: dark dashes
      for (let z = Math.min(zs, ze); z <= Math.max(zs, ze); z++)
        if (((z + j) & 1) === 0) {
          b.set(Math.floor((ra + rb) / 2), y0 + j - 1, z, M.SLAB2);
        }
    }
  }
  if (ribbon) {
    // sloping side ribbons (垂带)
    for (let j = 1; j <= h - 1; j++) {
      const zs = edge + dir * ((h - 1 - j) * run + 1);
      const ze = edge + dir * ((h - j) * run);
      for (const x of [x0 - 1, x1 + 1]) b.box(x, y0, zs, x, y0 + j, ze, M.MARBLE);
    }
    for (const x of [x0 - 1, x1 + 1]) b.box(x, y0, edge, x, y0 + h - 1, edge, M.MARBLE);
  }
}

export function railX(b, x0, x1, z, y, o = {}) {
  const every = o.every ?? 4;
  const mat = o.mat ?? M.MARBLE;
  const cap = o.cap ?? M.MARBLE2;
  for (let x = x0; x <= x1; x++) {
    const post = (x - x0) % every === 0 || x === x1;
    if (post) {
      b.box(x, y, z, x, y + 2, z, mat);
      b.set(x, y + 3, z, cap);
    } else {
      b.set(x, y, z, mat);
      b.set(x, y + 2, z, mat);
      if ((x - x0) % 2 === 0) b.set(x, y + 1, z, mat);
    }
  }
}

export function railZ(b, x, z0, z1, y, o = {}) {
  const every = o.every ?? 4;
  const mat = o.mat ?? M.MARBLE;
  const cap = o.cap ?? M.MARBLE2;
  for (let z = z0; z <= z1; z++) {
    const post = (z - z0) % every === 0 || z === z1;
    if (post) {
      b.box(x, y, z, x, y + 2, z, mat);
      b.set(x, y + 3, z, cap);
    } else {
      b.set(x, y, z, mat);
      b.set(x, y + 2, z, mat);
      if ((z - z0) % 2 === 0) b.set(x, y + 1, z, mat);
    }
  }
}

/** Wooden balcony rail (red) */
export function woodRailX(b, x0, x1, z, y, o = {}) {
  const c = o.color ?? M.RED;
  for (let x = x0; x <= x1; x++) {
    b.set(x, y, z, c);
    if ((x - x0) % 2 === 0) b.set(x, y + 1, z, c);
    b.set(x, y + 2, z, M.RED_D);
  }
}
export function woodRailZ(b, x, z0, z1, y, o = {}) {
  const c = o.color ?? M.RED;
  for (let z = z0; z <= z1; z++) {
    b.set(x, y, z, c);
    if ((z - z0) % 2 === 0) b.set(x, y + 1, z, c);
    b.set(x, y + 2, z, M.RED_D);
  }
}

// ---------------------------------------------------------------------------
// columns, beams, brackets (斗拱)
// ---------------------------------------------------------------------------

export function column(b, x, z, y, h, o = {}) {
  b.set(x, y, z, o.base ?? M.STONE);
  b.box(x, y + 1, z, x, y + h - 1, z, o.color ?? M.RED);
}

/**
 * Run a side-painter for the four sides of a rectangle so every side can be authored
 * as "front facade, outward = +z".  fn(brush, xa, xb, z, sideName)
 */
export function forSides(b, x0, x1, z0, z1, fn) {
  fn(b, x0, x1, z1, 'S');
  fn(b.child(0, 0, 0, 'N'), -x1, -x0, -z0, 'N');
  fn(b.child(0, 0, 0, 'E'), -z1, -z0, x1, 'E');
  fn(b.child(0, 0, 0, 'W'), z0, z1, -x0, 'W');
}

/**
 * Architrave + two bracket tiers projecting outwards on one side.
 * xa..xb along the line at z (outward = +z); cols = positions of the columns on this line.
 */
export function bracketLine(b, xa, xb, z, y, cols, o = {}) {
  const beam = o.beam ?? [M.BLUE, M.GREEN];
  const set1 = o.set1 ?? M.BLUE_L;
  const set2 = o.set2 ?? M.GREEN_L;
  const tip = o.tip ?? M.GOLD;
  const ext = o.ext ?? 2;
  // architrave beam (layer y): blue with green painted ends near columns
  for (let x = xa; x <= xb; x++) {
    let near = false;
    for (const c of cols) if (Math.abs(x - c) <= 1) near = true;
    b.set(x, y, z, near ? beam[1] : beam[0]);
  }
  if (o.beamTrim ?? true) {
    // thin gold trim below? keep a lighter voxel pattern on beam face
    for (let x = xa; x <= xb; x++) if (((x - xa) & 3) === 2) b.set(x, y, z + 1, M.GOLD_D);
  }
  // set positions: every column + mid points between
  const sets = new Set();
  for (const c of cols) sets.add(c);
  for (let i = 0; i < cols.length - 1; i++) {
    const a = cols[i];
    const c = cols[i + 1];
    const w = c - a;
    if (w >= 5) sets.add(a + Math.round(w / 2));
    if (w >= 11) {
      sets.delete(a + Math.round(w / 2));
      sets.add(a + Math.round(w / 3));
      sets.add(a + Math.round((2 * w) / 3));
    }
  }
  // layer y+1 : band + tier-1 sets
  for (let x = xa; x <= xb; x++) b.set(x, y + 1, z, M.GREEN);
  // layer y+2 : band + tier-2 sets (extending further)
  for (let x = xa; x <= xb; x++) {
    b.set(x, y + 2, z, M.BLUE);
    if (ext >= 1) b.set(x, y + 2, z + 1, M.RED_D);
  }
  for (const c of sets) {
    const isCol = cols.includes(c);
    const half = isCol ? 1 : 1;
    for (let x = c - half; x <= c + half; x++) {
      if (x < xa || x > xb) continue;
      b.set(x, y + 1, z + 1, x === c ? set1 : set2);
      if (ext >= 2) b.set(x, y + 2, z + 2, x === c ? set2 : set1);
    }
    if (ext >= 2) b.set(c, y + 2, z + 2, tip);
  }
  // corner sets go one voxel further
  for (const c of [cols[0], cols[cols.length - 1]]) {
    if (ext >= 2) {
      b.set(c, y + 1, z + 2, set1);
      b.set(c, y + 2, z + 3, tip);
    }
  }
}

/** Beam ring + brackets on all four sides of a colonnade rectangle. */
export function bracketRing(b, x0, x1, z0, z1, y, xs, zs, o = {}) {
  forSides(b, x0, x1, z0, z1, (bb, xa, xb, z, side) => {
    const cols = side === 'S' || side === 'N' ? (side === 'S' ? xs : xs.map((v) => -v).reverse()) : side === 'E' ? zs.map((v) => -v).reverse() : zs;
    bracketLine(bb, xa, xb, z, y, cols, o);
  });
  // fill the rectangle corners' beam voxels (avoid gaps at the corners)
  for (const [x, z] of [[x0, z0], [x1, z0], [x0, z1], [x1, z1]]) {
    b.set(x, y, z, M.GREEN);
    b.set(x, y + 1, z, M.GREEN);
    b.set(x, y + 2, z, M.BLUE);
  }
}

// ---------------------------------------------------------------------------
// octagon helpers (pagodas, kiosks)
// ---------------------------------------------------------------------------

/** true when integer column (x,z) lies inside a regular octagon of inradius r. */
export function inOct(x, z, r) {
  const ax = Math.abs(x);
  const az = Math.abs(z);
  return ax <= r && az <= r && ax + az <= r * Math.SQRT2 + 0.5;
}

/** Octagon ring test: inside outer octagon r1 but outside inner r0 (r0 < 0 -> filled). */
export function fillOct(b, r, y0, y1, id, fn) {
  const R = Math.ceil(r);
  for (let z = -R; z <= R; z++)
    for (let x = -R; x <= R; x++) {
      if (!inOct(x, z, r)) continue;
      for (let y = y0; y <= y1; y++) {
        const v = fn ? fn(x, y, z) : id;
        b.set(x, y, z, v);
      }
    }
}

/** perimeter columns of an octagon (voxels inside r but not inside r-1) */
export function octShell(r, thick = 1) {
  const cells = [];
  const R = Math.ceil(r);
  for (let z = -R; z <= R; z++)
    for (let x = -R; x <= R; x++) if (inOct(x, z, r) && !inOct(x, z, r - thick)) cells.push([x, z]);
  return cells;
}

// ---------------------------------------------------------------------------
// wall / door / window patterns
// ---------------------------------------------------------------------------

// paper panes (2x2) separated by one-voxel wooden bars
const lattice = (u, v) => (u % 3 === 0 || v % 3 === 0 ? M.WOOD : M.PAPER);

function wallPix(u, v, w, h, o) {
  if (v === 0) return o.plinth ?? M.STONE_D;
  if (v === h - 1) return o.top ?? M.RED_D;
  return o.wall ?? M.RED;
}

function doorPix(u, v, w, h) {
  if (u === 0 || u === w - 1 || v === h - 1) return M.RED_D;
  if (w >= 4 && u === Math.floor((w - 1) / 2)) return M.WOOD_D;
  if (w >= 5 && w % 2 === 0 && u === Math.floor((w - 1) / 2) + 1) return M.WOOD_D;
  const waist = Math.max(2, Math.floor(h * 0.4));
  if (v < waist) {
    if (v === 1 && u % 3 === 1) return M.GOLD;
    return M.RED;
  }
  if (v === waist) return M.RED_D;
  return lattice(u, v);
}

function studDoorPix(u, v, w, h) {
  if (u === 0 || u === w - 1 || v === h - 1) return M.RED_D;
  if (w >= 4 && u === Math.floor(w / 2)) return M.WOOD_D;
  if (u % 2 === 1 && v % 2 === 1 && v < h - 2) return M.GOLD;
  return M.RED;
}

function windowPix(u, v, w, h, o) {
  const sill = o.sill ?? 3;
  if (v === 0) return o.plinth ?? M.STONE_D;
  if (v === h - 1) return o.top ?? M.RED_D;
  if (v < sill) return o.wall ?? M.RED;
  if (u === 0 || u === w - 1 || v === sill || v === h - 2) return M.WOOD_D;
  return lattice(u, v);
}

function latticePix(u, v, w, h) {
  if (v === h - 1) return M.RED_D;
  if (u === 0 || u === w - 1) return M.RED_D;
  if (v < 2) return v === 0 ? M.STONE_D : M.RED;
  if (v === 2 || v === h - 2) return M.WOOD_D;
  return lattice(u, v);
}

// plain red wall without plinth / cap (used for continuous multi-storey walls)
function plainPix(u, v, w, h, o) {
  return o.wall ?? M.RED;
}

// upper-storey window band: dark sill & lintel, lattice in between
function bandPix(u, v, w, h) {
  if (v === 0 || v === h - 1) return M.RED_D;
  if (u === 0 || u === w - 1) return M.RED;
  return lattice(u, v);
}

function brickPix(u, v, w, h, o) {
  if (v === 0) return M.STONE_D;
  if (v === h - 1) return M.BRICK_D;
  return ((u + (v & 1) * 2) & 3) === 0 ? M.BRICK2 : M.BRICK;
}

function stonePix(u, v) {
  return ((u + (v & 1)) & 1) === 0 ? M.STONE : M.STONE2;
}

const PIX = {
  wall: wallPix,
  plain: plainPix,
  band: bandPix,
  door: doorPix,
  stud: studDoorPix,
  window: windowPix,
  lattice: latticePix,
  brick: brickPix,
  stone: stonePix,
};

/**
 * Paint a facade line (parallel to local x at z, outward = +z).
 * cols: sorted column x positions; kinds[i] describes the bay between cols[i] and cols[i+1].
 * 'open' bays are left empty.  th = wall thickness (extends towards -z).
 */
export function facade(b, cols, z, y0, y1, kinds, o = {}) {
  const th = o.th ?? 1;
  for (let i = 0; i < cols.length - 1; i++) {
    const kind = kinds[i] ?? 'wall';
    if (kind === 'open' || kind === 'none') continue;
    const xa = cols[i] + 1;
    const xb = cols[i + 1] - 1;
    if (xb < xa) continue;
    const fn = PIX[kind] ?? wallPix;
    const w = xb - xa + 1;
    const h = y1 - y0 + 1;
    for (let x = xa; x <= xb; x++)
      for (let y = y0; y <= y1; y++) {
        const id = fn(x - xa, y - y0, w, h, o);
        if (id === undefined) continue;
        for (let t = 0; t < th; t++) b.set(x, y, z - t, id);
      }
  }
}

/** Plain solid wall segment between two x positions inclusive. */
export function wallSeg(b, xa, xb, z, y0, y1, o = {}) {
  const th = o.th ?? 1;
  const w = xb - xa + 1;
  const h = y1 - y0 + 1;
  const fn = PIX[o.kind ?? 'wall'];
  for (let x = xa; x <= xb; x++)
    for (let y = y0; y <= y1; y++) {
      const id = fn(x - xa, y - y0, w, h, o);
      for (let t = 0; t < th; t++) b.set(x, y, z - t, id);
    }
}

// ---------------------------------------------------------------------------
// small props used on/around buildings
// ---------------------------------------------------------------------------

/** Palace lantern hanging from y (top string) downwards. big = chunky 3x3 */
export function lantern(b, x, y, z, big = true) {
  if (big) {
    // y is the bottom of the tassel
    b.set(x, y, z, M.GOLD_D);
    b.box(x, y + 1, z, x, y + 1, z, M.LAMP);
    b.box(x - 1, y + 2, z, x + 1, y + 2, z, M.LAMP);
    b.box(x, y + 2, z - 1, x, y + 2, z + 1, M.LAMP);
    b.box(x - 1, y + 3, z - 1, x + 1, y + 3, z + 1, M.LAMP);
    b.box(x - 1, y + 4, z, x + 1, y + 4, z, M.LAMP);
    b.box(x, y + 4, z - 1, x, y + 4, z + 1, M.LAMP);
    b.set(x, y + 5, z, M.GOLD);
    b.set(x, y + 6, z, M.WOOD_D);
  } else {
    b.set(x, y, z, M.GOLD_D);
    b.set(x, y + 1, z, M.LAMP);
    b.set(x, y + 2, z, M.LAMP);
    b.set(x, y + 3, z, M.GOLD);
  }
}

/** Little wind-bell hanging at eave corners */
export function fengling(b, x, y, z) {
  b.set(x, y, z, M.GOLD);
  b.set(x, y + 1, z, M.GOLD_D);
}
