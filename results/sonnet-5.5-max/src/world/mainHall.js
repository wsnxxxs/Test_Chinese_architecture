// 大雄宝殿 — the Main Hall: double-eave hip roof (重檐庑殿顶) in imperial yellow on a two-tier
// marble platform with a forecourt terrace (月台), carved ramp, balustrades, lions and censers.
import { M } from '../voxel/palette.js';
import { hash3 } from '../voxel/rng.js';
import { buildDoubleEave } from './doubleEave.js';
import { slab, stairsZ, railX, railZ } from './parts.js';
import { stoneLion, censer, buddha } from './props.js';

/** decorative plaque with pseudo-calligraphy */
export function plaque(b, cx, y, z, w, h, chars = 4, seed = 3) {
  const x0 = cx - Math.floor(w / 2);
  b.box(x0, y, z, x0 + w - 1, y + h - 1, z, M.GOLD_D);
  b.box(x0 + 1, y + 1, z, x0 + w - 2, y + h - 2, z, M.BLUE_D);
  const cw = Math.floor((w - 2) / chars);
  for (let c = 0; c < chars; c++) {
    for (let v = 0; v < h - 2; v++)
      for (let u = 0; u < cw - 1; u++) {
        const hsh = hash3(c, u + v * 7, v, seed);
        const stroke = (u === 1 && v > 0) || (v === 1 && hsh > 0.25) || hsh > 0.62 || (v === h - 4 && u !== 0);
        if (stroke) b.set(x0 + 1 + c * cw + u + 0, y + 1 + v, z, M.GOLD_L);
      }
  }
}

export function buildMainHall(b) {
  const anchors = { censers: [], lamps: [] };
  const info = buildDoubleEave(b, {
    xsO: [-26, -19, -12, -5, 5, 12, 19, 26],
    zsO: [-16, -8, 0, 8, 16],
    xsI: [-19, -12, -5, 5, 12, 19],
    zsI: [-8, 0, 8],
    tiers: [
      { h: 3, mx: 6, mzB: 6, mzF: 6 },
      { h: 3, mx: 3, mzB: 3, mzF: 3 },
    ],
    colH1: 10,
    upperH: 6,
    lower: {
      front: ['window', 'door', 'open', 'door', 'window'],
      back: ['wall', 'wall', 'wall', 'wall', 'wall'],
      left: ['wall', 'wall'],
      right: ['wall', 'wall'],
    },
    skirt: { scheme: 'yellow', ov: 6, rise: 7, L: 4, T: 12 },
    upper: { type: 'hip', scheme: 'yellow', ov: 9, rise: 16, L: 5, T: 14 },
    lanterns: true,
    interior(bb, i) {
      const yF = i.yF;
      buddha(bb, 0, yF, -4);
      // offering table + candles
      bb.box(-4, yF, 1, 4, yF + 1, 2, M.RED_D);
      bb.box(-4, yF + 2, 1, 4, yF + 2, 2, M.GOLD_D);
      for (const x of [-7, 7]) {
        bb.box(x, yF, 2, x, yF + 3, 2, M.WOOD_D);
        bb.set(x, yF + 4, 2, M.FLAME);
      }
      // hanging lamps in the aisle
      for (const x of [-12, 12]) {
        bb.set(x, i.ceilY2 - 1, 0, M.WOOD_D);
        bb.set(x, i.ceilY2 - 2, 0, M.LAMP);
        bb.set(x, i.ceilY2 - 3, 0, M.LAMP);
      }
    },
  });

  const yF = info.yF;
  // plaque over the central bay
  plaque(b, 0, info.ySkirtTop + 2, info.z1I - 1, 15, 5, 4, 11);

  // ---- forecourt terrace (月台) --------------------------------------------
  slab(b, -20, 20, 23, 34, 0, 3);
  b.box(-19, 2, 24, 19, 2, 33, M.MARBLE);
  b.box(-19, 2, 24, 19, 2, 33, M.SLAB2);
  b.box(-19, 2, 24, 19, 2, 24, M.MARBLE);
  // paved pattern
  for (let z = 24; z <= 33; z++)
    for (let x = -19; x <= 19; x++) if (((x >> 2) + (z >> 2)) & 1) b.set(x, 2, z, M.SLAB1);
  // ramp stairs to the hall, and stairs down to the courtyard
  stairsZ(b, -6, 6, 19, 3, 3, { run: 2, ramp: [-1, 1] });
  stairsZ(b, -6, 6, 34, 0, 3, { run: 2, ramp: [-1, 1] });
  // balustrades
  railX(b, -20, -8, 34, 3);
  railX(b, 8, 20, 34, 3);
  railZ(b, -20, 23, 34, 3);
  railZ(b, 20, 23, 34, 3);
  // upper tier balustrade (y = 6)
  railX(b, -29, -8, 19, 6);
  railX(b, 8, 29, 19, 6);
  railZ(b, -29, -19, 19, 6);
  railZ(b, 29, -19, 19, 6);
  railX(b, -29, 29, -19, 6);
  // lower tier balustrade (y = 3)
  railX(b, -32, -21, 22, 3);
  railX(b, 21, 32, 22, 3);
  railZ(b, -32, -22, 22, 3);
  railZ(b, 32, -22, 22, 3);
  railX(b, -32, 32, -22, 3);

  // ---- guardians & incense -------------------------------------------------
  stoneLion(b, -10, 3, 30, 'S', { body: M.BRONZE, mane: M.BRONZE_D, base: M.MARBLE2, ball: M.GOLD });
  stoneLion(b, 10, 3, 30, 'S', { body: M.BRONZE, mane: M.BRONZE_D, base: M.MARBLE2, ball: M.GOLD });
  const s1 = censer(b, -15, 3, 28, true);
  const s2 = censer(b, 15, 3, 28, true);
  anchors.censers.push(b.pos(...s1), b.pos(...s2));

  return { info, anchors, front: 34, frontStairsEnd: 38, halfW: 33, halfD: 22 };
}
