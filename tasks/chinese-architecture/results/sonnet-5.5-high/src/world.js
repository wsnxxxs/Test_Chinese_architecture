import { VoxelGrid } from './voxel.js';
import {
  C, hall, pagoda, pavilion, tower, lion, paifang, stoneLamp, wallSeg, incenseBurner, pine, blossom,
} from './buildings.js';

const X0 = -100, X1 = 100, Z0 = -125, Z1 = 100;

// Paved rectangles [x0, x1, z0, z1]; everything else is grass.
const PAVED = [
  [-3, 3, -84, 96],       // central axis road
  [-49, 49, 3, 7],        // cross road
  [-12, 12, -22, -2],     // plaza before main hall
  [-27, 27, -31, -29],    // to side halls (north pair)
  [-27, 27, -59, -57],    // to side halls (south pair)
  [-30, 30, 57, 62],      // bell / drum tower forecourt
  [-23, 23, 19, 21],      // to pagodas
  [-10, 10, 73, 86],      // plaza outside the gate
  [-25, 25, -60, -56],    // back court
];
const paved = (x, z) => PAVED.some((r) => x >= r[0] && x <= r[1] && z >= r[2] && z <= r[3]);

function rng(seed) {
  let a = seed;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function terrainH(x, z) {
  if (Math.abs(x) <= 64 && z >= -92 && z <= 74) return 0;
  const dx = Math.max(0, Math.abs(x) - 64);
  const dz = z < -92 ? -92 - z : z > 74 ? z - 74 : 0;
  const d = Math.hypot(dx, dz);
  const n = (Math.sin(x * 0.11) + Math.sin(z * 0.13 + 2) + Math.sin((x + z) * 0.07) + Math.sin(x * 0.05 - z * 0.06 + 1) + 4) / 8;
  let amp = z < -92 ? 30 : 13;
  let k = Math.min(1, d / 22);
  k = k * k * (3 - 2 * k);
  if (z > 74 && Math.abs(x) < 20) k *= Math.min(1, Math.max(0, (Math.abs(x) - 8) / 10)); // keep the road corridor clear
  return Math.floor(amp * n * k * 1.15 + d * 0.06);
}

function hash2(x, z) {
  const s = Math.sin(x * 127.1 + z * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

function ground(g) {
  const hmap = new Map();
  for (let x = X0; x <= X1; x++) {
    for (let z = Z0; z <= Z1; z++) {
      const h = terrainH(x, z);
      hmap.set(x * 1000 + z, h);
      let top;
      if (paved(x, z)) {
        const edge = !paved(x + 1, z) || !paved(x - 1, z) || !paved(x, z + 1) || !paved(x, z - 1);
        top = edge ? C.stoneD : ((x >> 1) + (z >> 1)) & 1 ? 0xbdb8aa : 0xaaa596;
      } else if (h > 20) top = 0x8c8f88;
      else if (h > 12) top = 0x4b7a34;
      else {
        const r = hash2(x, z);
        top = r < 0.33 ? 0x6fa03e : r < 0.66 ? 0x67973a : 0x78a845;
        if (h > 0) top = r < 0.5 ? 0x5a8c36 : 0x527f31;
        if (r > 0.985) top = 0xe8d86a; // tiny flowers
      }
      g.set(x, h - 1, z, top);
      g.box(x, -3, z, x, h - 2, z, h > 1 ? 0x6b5a3c : 0x7a5a3a);
    }
  }
  return hmap;
}

export function buildWorld() {
  const g = new VoxelGrid();
  const hmap = ground(g);

  // --- compound walls (x = ±50, back z = -87, front z = 63)
  const gateHalf = 17;
  wallSeg(g, -50, 63, -gateHalf, 63);
  wallSeg(g, gateHalf, 63, 50, 63);
  wallSeg(g, -50, -87, 50, -87);
  wallSeg(g, -50, -86, -50, 62);
  wallSeg(g, 49, -86, 49, 62);

  // --- 山门 (gate)
  hall(g, { cx: 0, cz: 64, hw: 13, hd: 5, plat: 3, wallH: 8, style: 'hip', tile: C.bluegray, trim: C.gold, gate: true, sw: 2 });

  // --- 钟楼 / 鼓楼
  tower(g, -28, 46, 'bell');
  tower(g, 28, 46, 'drum');

  // --- 宝塔 x2 (fronts face the axis)
  pagoda(g, -36, 20, 1);
  pagoda(g, 36, 20, 3);

  // --- 亭 x2
  pavilion(g, -22, -6, C.green);
  pavilion(g, 22, -6, C.green);

  // --- 主殿 (double-eave hip roof, imperial yellow glaze)
  hall(g, { cx: 0, cz: -40, hw: 15, hd: 9, plat: 4, wallH: 7, double: true, tile: C.yellow, trim: C.yellowTrim, sw: 4 });

  // --- 后殿
  hall(g, { cx: 0, cz: -70, hw: 11, hd: 6, plat: 3, wallH: 6, style: 'gable', tile: C.green, trim: C.gold, sw: 3 });

  // --- 配殿 x4 (歇山, grey tile)
  for (const z of [-30, -58]) {
    hall(g, { cx: -36, cz: z, rot: 1, hw: 9, hd: 5, plat: 2, wallH: 6, style: 'gable', tile: C.gray, trim: C.grayD, sw: 2 });
    hall(g, { cx: 36, cz: z, rot: 3, hw: 9, hd: 5, plat: 2, wallH: 6, style: 'gable', tile: C.gray, trim: C.grayD, sw: 2 });
  }

  // --- 牌坊 outside the gate, lions, censer, lamps
  paifang(g, -1, 92);
  for (const s of [-1, 1]) {
    lion(g, s * 7, 75, 0);
    lion(g, s * 8, -26, 0);
  }
  incenseBurner(g, 0, -10);
  for (let z = 80; z >= -62; z -= 14) {
    if (z > 55 && z < 74) continue;
    if (z < -20 && z > -30) continue;
    stoneLamp(g, -6, z);
    stoneLamp(g, 6, z);
  }

  // --- trees
  const pink = 0xf2a6c0, rose = 0xec7f9e, gold = 0xe8a92a;
  blossom(g, -16, 0, 14, pink); blossom(g, 16, 0, 14, pink);
  blossom(g, -10, 0, 30, rose); blossom(g, 10, 0, 30, rose);
  blossom(g, -16, 0, -14, pink, 4, 3); blossom(g, 16, 0, -14, pink, 4, 3);
  blossom(g, -12, 0, 42, gold, 6, 4); blossom(g, 12, 0, 42, gold, 6, 4);
  blossom(g, -44, 0, 36, gold, 6, 4); blossom(g, 44, 0, 36, gold, 6, 4);
  for (const x of [-44, 44]) for (const z of [0, -8, 55]) pine(g, x, 0, z, 11);
  for (const x of [-22, 22]) pine(g, x, 0, -76, 12);
  for (const x of [-14, 14]) for (const z of [-46, -64]) pine(g, x + (x > 0 ? 3 : -3), 0, z + 6, 10);

  // forest on the hills
  const r = rng(7);
  for (let x = X0 + 4; x <= X1 - 4; x += 3) {
    for (let z = Z0 + 4; z <= Z1 - 4; z += 3) {
      const h = hmap.get(x * 1000 + z);
      if (h < 3 || h > 22 || r() > 0.38) continue;
      if (paved(x, z)) continue;
      pine(g, x + Math.floor(r() * 3 - 1), h, z + Math.floor(r() * 3 - 1), 8 + Math.floor(r() * 6));
    }
  }
  return g;
}

/** Warm point-light spots (world coords) used for the night look. */
export const LIGHT_SPOTS = [
  [0, 9, 60], [0, 9, 78], [-24, 10, 50], [24, 10, 50], [0, 9, -20], [-22, 6, -2], [22, 6, -2],
  [-34, 8, -44], [34, 8, -44], [0, 9, -60], [-26, 8, 24], [26, 8, 24],
];
