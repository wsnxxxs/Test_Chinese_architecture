// Small props: lions, censers, stone lamps, bell, drum, Buddha, rocks, steles, lamps...
import { M } from '../voxel/palette.js';
import { hash3, mulberry32 } from '../voxel/rng.js';

// sitting guardian lion: layers bottom -> top, rows back(-z) -> front(+z), columns -x -> +x
const LION_MODEL = [
  ['.BBB.', 'BBBBB', 'BBBBB', '.BBB.', '.B.B.', '.B.Bo', '.....'],
  ['..B..', '.BBB.', '.BBB.', '.BBB.', '.B.B.', '.B.B.', '.....'],
  ['.....', '..B..', '.BBB.', '.BBB.', '.BBB.', '.....', '.....'],
  ['.....', '.....', '..B..', '.BBB.', 'MMMMM', '.MMM.', '.....'],
  ['.....', '.....', '..M..', '.MMM.', 'MMMMM', '.BBB.', '..R..'],
  ['.....', '.....', '.....', '..M..', '.MMM.', '.KBK.', '.....'],
  ['.....', '.....', '.....', '.....', '.E.E.', '.MBM.', '.....'],
];

/** Guardian lion on a plinth. (x,y,z) = centre of the plinth bottom; front looks along `facing`. */
export function stoneLion(b, x, y, z, facing = 'S', o = {}) {
  const c = b.child(x, y, z, facing);
  const body = o.body ?? M.LION;
  const mane = o.mane ?? M.STONE;
  const base = o.base ?? M.STONE2;
  // plinth 5 x 7
  c.box(-2, 0, -3, 2, 0, 3, M.STONE_D);
  c.box(-2, 1, -3, 2, 1, 3, base);
  c.model(0, 2, 0, LION_MODEL, { B: body, M: mane, E: mane, K: M.BLACK, R: M.RED_D, o: o.ball ?? M.GREEN });
}

/** Bronze incense burner on a stone base. Returns smoke anchor [x,y,z] (local). */
export function censer(b, x, y, z, big = true) {
  const c = b.child(x, y, z);
  if (big) {
    c.box(-4, 0, -4, 4, 0, 4, M.STONE);
    c.box(-3, 1, -3, 3, 1, 3, M.MARBLE2);
    c.box(-3, 2, -3, 3, 2, 3, M.MARBLE);
    // legs
    for (const [lx, lz] of [[-2, -2], [2, -2], [-2, 2], [2, 2]]) c.box(lx, 3, lz, lx, 4, lz, M.BRONZE_D);
    // body
    c.box(-2, 5, -2, 2, 7, 2, M.BRONZE);
    c.box(-3, 8, -3, 3, 8, 3, M.BRONZE_D);
    c.box(-2, 8, -2, 2, 8, 2, M.EMBER);
    // handles
    for (const sx of [-3, 3]) {
      c.box(sx, 9, -1, sx, 10, -1, M.BRONZE_D);
      c.box(sx, 9, 1, sx, 10, 1, M.BRONZE_D);
      c.box(sx, 11, -1, sx, 11, 1, M.BRONZE_D);
    }
    // relief bands
    for (let i = -1; i <= 1; i++) {
      c.set(i * 2, 6, 3, M.GOLD_D);
      c.set(i * 2, 6, -3, M.GOLD_D);
    }
    return [x, y + 9, z];
  }
  c.box(-2, 0, -2, 2, 0, 2, M.STONE);
  c.box(-1, 1, -1, 1, 1, 1, M.MARBLE2);
  c.box(-1, 2, -1, 1, 3, 1, M.BRONZE);
  c.box(-2, 4, -2, 2, 4, 2, M.BRONZE_D);
  c.box(-1, 4, -1, 1, 4, 1, M.EMBER);
  return [x, y + 5, z];
}

/** Stone lamp post (石灯) ~10 tall with a glowing lamp house. */
export function stoneLamp(b, x, y, z) {
  const c = b.child(x, y, z);
  c.box(-1, 0, -1, 1, 0, 1, M.STONE_D);
  c.box(0, 1, 0, 0, 3, 0, M.STONE);
  c.box(-1, 4, -1, 1, 4, 1, M.STONE2);
  c.box(-1, 5, -1, 1, 6, 1, M.STONE);
  for (const [dx, dz] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
    c.box(dx, 5, dz, dx, 6, dz, M.WINDOW);
  }
  c.box(0, 5, 0, 0, 6, 0, M.FLAME);
  c.box(-2, 7, -2, 2, 7, 2, M.STONE_D);
  c.box(-1, 8, -1, 1, 8, 1, M.STONE2);
  c.set(0, 9, 0, M.STONE);
  c.set(0, 10, 0, M.GOLD);
}

/** Hanging bronze bell, top string at y+? ; (x,y,z) = bottom rim centre. */
export function bell(b, x, y, z) {
  const c = b.child(x, y, z);
  c.cyl(0, 0, 2, 0, 1, M.BRONZE);
  c.cyl(0, 0, 1, 2, 4, M.BRONZE);
  c.cyl(0, 0, 2, 0, 0, M.BRONZE_D);
  c.set(0, 5, 0, M.BRONZE_D);
  c.set(0, 6, 0, M.WOOD_D);
  c.set(0, 7, 0, M.WOOD_D);
  // little band of relief
  c.set(2, 1, 0, M.GOLD_D);
  c.set(-2, 1, 0, M.GOLD_D);
}

/** Horizontal drum on a wooden stand. (x,y,z) = stand bottom centre. Axis along local x. */
export function drum(b, x, y, z) {
  const c = b.child(x, y, z);
  c.box(-3, 0, -2, 3, 0, -2, M.WOOD_D);
  c.box(-3, 0, 2, 3, 0, 2, M.WOOD_D);
  c.box(-3, 1, -2, -3, 2, -2, M.WOOD_D);
  c.box(3, 1, -2, 3, 2, -2, M.WOOD_D);
  c.box(-3, 1, 2, -3, 2, 2, M.WOOD_D);
  c.box(3, 1, 2, 3, 2, 2, M.WOOD_D);
  for (let lx = -2; lx <= 2; lx++) {
    const r = lx === 0 ? 2.6 : Math.abs(lx) === 1 ? 2.4 : 2.0;
    for (let yy = -3; yy <= 3; yy++)
      for (let zz = -3; zz <= 3; zz++) {
        if (yy * yy + zz * zz <= r * r) {
          const id = Math.abs(lx) === 2 ? M.CREAM : lx === 0 ? M.RED_L : M.RED;
          c.set(lx, 4 + yy, zz, id);
        }
      }
  }
  for (const sx of [-2, 2]) c.set(sx, 4, 0, M.GOLD);
  for (let lx = -2; lx <= 2; lx += 2) {
    c.set(lx, 7, 0, M.GOLD_D);
    c.set(lx, 1, 0, M.GOLD_D);
  }
}

/** Seated Buddha on a lotus throne. (x,y,z)= throne bottom centre; faces +z. ~15 tall */
export function buddha(b, x, y, z, o = {}) {
  const c = b.child(x, y, z);
  const gold = o.gold ?? M.BUDDHA;
  // lotus throne
  c.cyl(0, 0, 4, 0, 0, M.RED_D);
  c.cyl(0, 0, 4, 1, 1, M.GOLD_D);
  c.cyl(0, 0, 3, 2, 2, M.GOLD);
  for (let a = 0; a < 8; a++) {
    const ang = (a * Math.PI) / 4;
    c.set(Math.round(Math.cos(ang) * 4), 1, Math.round(Math.sin(ang) * 4), M.GOLD_L);
  }
  // crossed legs & lap
  c.box(-3, 3, -2, 3, 4, 2, gold);
  c.box(-2, 3, 3, 2, 3, 3, gold);
  // torso
  c.box(-2, 5, -1, 2, 8, 1, gold);
  c.box(-3, 5, -1, -3, 7, 0, gold);
  c.box(3, 5, -1, 3, 7, 0, gold);
  c.box(-1, 4, 2, 1, 4, 2, M.SKIN); // hands in lap
  // head
  c.box(-1, 9, -1, 1, 11, 1, M.SKIN);
  c.set(-1, 10, 2, M.SKIN);
  c.set(0, 10, 2, M.SKIN);
  c.set(1, 10, 2, M.SKIN);
  c.set(-1, 10, 2, M.BLACK);
  c.set(1, 10, 2, M.BLACK);
  c.box(-1, 12, -1, 1, 12, 1, M.BLUE_D);
  c.set(0, 13, 0, M.BLUE_D);
  c.set(0, 14, 0, gold);
  // halo behind the head
  for (let yy = 6; yy <= 15; yy++)
    for (let xx = -5; xx <= 5; xx++) {
      const d = Math.hypot(xx, yy - 10.5);
      if (d <= 5.2 && d >= 4) c.set(xx, yy, -3, M.GOLD_L);
      else if (d < 4 && d >= 3) c.set(xx, yy, -3, M.GOLD_D);
    }
}

/** Stone tablet on a turtle-like plinth */
export function stele(b, x, y, z, facing = 'S') {
  const c = b.child(x, y, z, facing);
  c.box(-3, 0, -4, 3, 1, 4, M.BRICK_D);
  c.box(-2, 2, -3, 2, 2, 3, M.STONE_D);
  c.box(3, 0, 3, 3, 1, 5, M.BRICK_D); // little head
  c.set(3, 1, 5, M.BRICK);
  c.box(-2, 3, -1, 2, 10, 0, M.STONE2);
  c.box(-1, 11, -1, 1, 11, 0, M.STONE2);
  c.box(-1, 12, -1, 1, 12, 0, M.STONE);
  c.set(0, 13, -1, M.STONE);
  for (let i = 0; i < 6; i++) {
    c.set(-1, 4 + i, 1, ((i + 1) & 1) === 0 ? M.STONE_D : M.STONE2);
    c.set(1, 4 + i, 1, ((i) & 1) === 0 ? M.STONE_D : M.STONE2);
  }
}

/** Taihu-style garden rock: knobbly ellipsoid with holes. */
export function taihu(b, x, y, z, rx, ry, rz, seed = 1) {
  const rnd = mulberry32(seed * 977);
  const ox = rnd() * 50;
  b.ball(x, y + Math.floor(ry), z, rx, ry, rz, M.ROCK, (wx, wy, wz, d) => {
    const n = hash3(Math.floor((wx + ox) / 1.6), Math.floor(wy / 1.6), Math.floor(wz / 1.6), seed);
    if (d > 0.55 && n > 0.72) return 0; // holes / knobbly surface
    if (d < 0.35 && n > 0.82) return 0;
    const h = hash3(wx, wy, wz, seed + 3);
    return h > 0.8 ? M.ROCK_L : h < 0.2 ? M.ROCK2 : M.ROCK;
  });
}

/** Lotus pad + optional flower for ponds (placed on the water plane). */
export function lotus(b, x, y, z, flower) {
  b.set(x, y, z, M.LOTUS);
  b.set(x + 1, y, z, M.LOTUS);
  b.set(x, y, z + 1, M.LOTUS);
  if (flower) {
    b.set(x, y + 1, z, M.LOTUS_P);
    b.set(x, y + 2, z, M.LOTUS_P);
  }
}

/** Gold-nailed red flag pole / banner near halls */
export function banner(b, x, y, z, h = 12) {
  b.box(x, y, z, x, y + h, z, M.WOOD_D);
  b.box(x + 1, y + h - 5, z, x + 3, y + h - 1, z, M.RED_L);
  b.set(x, y + h + 1, z, M.GOLD);
}
