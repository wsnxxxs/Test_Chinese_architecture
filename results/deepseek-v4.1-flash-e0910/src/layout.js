/**
 * Site layout — the axial plan of the whole complex (DOM-free, Three.js-free).
 *
 * Plan (viewed from the south, +z at the bottom):
 *
 *   z = +58   山门 (gate) ──────────────── central axis ────────────────
 *   z = +40   钟楼 (west)                        鼓楼 (east)
 *   z = +6    西配殿 (west)                      东配殿 (east)
 *   z = -22   主殿 重檐庑殿顶 + 月台 (main hall, on the axis)
 *   z = -54   西配殿 (rear)                      东配殿 (rear)
 *   z = -58   亭 (west)      宝塔 (axis)         亭 (east)
 *
 * Every structure is either centred on x = 0 or placed in an exact mirrored pair, so the
 * voxel set is symmetric about the central axis to the voxel (asserted by test/verify.mjs).
 */
import { VoxelBuilder } from './voxel.js';
import { pickHash } from './rng.js';
import { ROAD_KEYS } from './palette.js';
import {
  buildCorridor, buildGate, buildMainHall, buildPagoda, buildPavilion,
  buildSideHall, buildTower, buildWall,
} from './buildings.js';
import { lantern, pool, stoneLion, tree } from './parts.js';

/** Ground extent (1 voxel thick at y = 0). */
export const SITE = { xMin: -66, xMax: 66, zMin: -78, zMax: 72 };
/** 围墙 rectangle (the gate sits in the south wall). */
export const WALL = { x0: -56, x1: 56, z0: -68, z1: 64 };

/**
 * 道路 (paved circulation). The road-connectivity test floods these rectangles and
 * requires a single connected component that touches every building entrance.
 */
export const ROADS = [
  { id: 'axis', label: '中轴甬道', x0: -4, z0: -8, x1: 4, z1: 53 },
  { id: 'frontCross', label: '前庭横道', x0: -48, z0: 26, x1: 48, z1: 32 },
  { id: 'midCross', label: '中庭横道', x0: -33, z0: 2, x1: 33, z1: 10 },
  { id: 'plaza', label: '主殿前广场', x0: -26, z0: -8, x1: 26, z1: 4 },
  { id: 'rearCross', label: '后庭横道', x0: -48, z0: -44, x1: 48, z1: -38 },
  { id: 'eastPath', label: '东侧道', x0: 25, z0: -44, x1: 29, z1: -8 },
  { id: 'westPath', label: '西侧道', x0: -29, z0: -44, x1: -25, z1: -8 },
  { id: 'pagodaPath', label: '塔院道', x0: -6, z0: -54, x1: 6, z1: -44 },
  { id: 'gardenPath', label: '后院横道', x0: -30, z0: -53, x1: 30, z1: -47 },
  { id: 'gateForecourt', label: '山门前庭', x0: -20, z0: 40, x1: 20, z1: 52 },
];

/** Extra paved areas (庭院铺装 aprons around the main hall and the gate). */
export const PAVED_APRONS = [
  { x0: -30, z0: -40, x1: 30, z1: -6 },
];

/** 放生池 pair flanking the front courtyard. */
export const POOLS = [
  { x0: 16, z0: 42, x1: 30, z1: 50 },
  { x0: -30, z0: 42, x1: -16, z1: 50 },
];

/** Trees: [x, z, seed]; each is placed at (+x, z) and, when x !== 0, at (-x, z). */
export const TREES = [
  [12, 44, 11], [12, 20, 13], [20, 14, 14],
  [53, 8, 15], [53, -22, 16], [53, -60, 21],
  [14, -46, 17], [30, -62, 19], [14, -60, 18],
  [34, -73, 22], [48, -73, 23], [46, 67, 24], [20, 67, 25], [62, 40, 26],
];

/** Standing 灯柱 pairs along the central axis. */
export const LAMP_POSTS = [[6, 46], [6, 34], [6, 16], [6, 0], [6, -30]];

const inRect = (r, x, z) => x >= r.x0 && x <= r.x1 && z >= r.z0 && z <= r.z1;

function buildGround(b, roads, pavedAprons) {
  for (let x = SITE.xMin; x <= SITE.xMax; x++) {
    for (let z = SITE.zMin; z <= SITE.zMax; z++) {
      const road = roads.find((r) => inRect(r, x, z));
      const apron = !road && pavedAprons.some((r) => inRect(r, x, z));
      const poolHere = POOLS.some((r) => inRect(r, x, z));
      const insideWall = x > WALL.x0 && x < WALL.x1 && z > WALL.z0 && z < WALL.z1;
      const parity = ((x + z) % 2 === 0);

      if (poolHere) { b.set(x, 0, z, 'water'); continue; }
      if (road) { b.set(x, 0, z, parity ? 'path' : 'pathAlt'); continue; }
      if (apron) { b.set(x, 0, z, parity ? 'paving' : 'pavingAlt'); continue; }

      // grass everywhere else; a little variation keeps the surface from looking flat
      const h = pickHash([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], x, 0, z);
      let key = 'grass';
      if (h >= 8) key = 'grassAlt';
      else if (h >= 7) key = 'grassDry';
      b.set(x, 0, z, key);
      if (!insideWall && h >= 9) b.set(x, 0, z, 'grassAlt');
    }
  }
  // 路牙 (kerb) along every paved edge — also demonstrates the `kerb` palette entry
  const paved = (x, z) =>
    roads.some((r) => inRect(r, x, z)) ||
    pavedAprons.some((r) => inRect(r, x, z)) ||
    POOLS.some((r) => inRect(r, x, z));
  for (const r of [...roads, ...pavedAprons]) {
    for (let x = r.x0 - 1; x <= r.x1 + 1; x++) {
      for (const z of [r.z0 - 1, r.z1 + 1]) if (!paved(x, z)) b.set(x, 0, z, 'kerb');
    }
    for (let z = r.z0 - 1; z <= r.z1 + 1; z++) {
      for (const x of [r.x0 - 1, r.x1 + 1]) if (!paved(x, z)) b.set(x, 0, z, 'kerb');
    }
  }
  // 池岸 (pool rim)
  for (const r of POOLS) {
    for (let x = r.x0 - 1; x <= r.x1 + 1; x++) {
      b.set(x, 0, r.z0 - 1, 'stone'); b.set(x, 0, r.z1 + 1, 'stone');
      b.set(x, 1, r.z0 - 1, 'stone'); b.set(x, 1, r.z1 + 1, 'stone');
    }
    for (let z = r.z0 - 1; z <= r.z1 + 1; z++) {
      b.set(r.x0 - 1, 0, z, 'stone'); b.set(r.x1 + 1, 0, z, 'stone');
      b.set(r.x0 - 1, 1, z, 'stone'); b.set(r.x1 + 1, 1, z, 'stone');
    }
  }
}

/**
 * Scatter 草丛 / 花丛 on the grass, but never on top of a structure.
 * The x samples are generated as 0, ±step, ±2·step … so the tuft field is exactly
 * mirror-symmetric about the central axis.
 */
function scatterGrassTufts(b, count) {
  let placed = 0;
  const step = 3;
  for (let k = 0; k * step <= SITE.xMax - 2 && placed < count; k++) {
    const x = k * step;
    for (let z = SITE.zMin + 2; z <= SITE.zMax - 2 && placed < count; z += step) {
      const h = pickHash([0, 1, 2, 3, 4, 5, 6, 7], x, 3, z);
      if (h < 5) continue;
      for (const sx of x === 0 ? [0] : [x, -x]) {
        if (b.has(sx, 1, z)) continue;
        const g = b.get(sx, 0, z);
        if (g && !['grass', 'grassAlt', 'grassDry'].includes(g)) continue;
        b.set(sx, 1, z, h === 7 ? 'flower' : h === 6 ? 'grassAlt' : 'grass');
        placed++;
      }
    }
  }
  return placed;
}

/** 灯柱: stone post + lantern. */
function lampPost(b, { x, z }) {
  b.column(x, z, 1, 4, 'stone');
  b.set(x, 5, z, 'stoneDark');
  lantern(b, { x, y: 6, z, half: 1 });
}

/**
 * Assemble the whole site.
 * @returns {{builder: VoxelBuilder, buildings: object[], roads: Set<string>, stats: object}}
 */
export function buildSite() {
  const b = new VoxelBuilder();

  // 1. ground (y = 0) and pool rims
  buildGround(b, ROADS, PAVED_APRONS);

  // 2. 围墙 — the gate occupies the central bay of the south wall
  buildWall(b, { x0: WALL.x0, z0: -68, x1: WALL.x0 + 1, z1: 63, height: 9 });
  buildWall(b, { x0: WALL.x1 - 1, z0: -68, x1: WALL.x1, z1: 63, height: 9 });
  buildWall(b, { x0: WALL.x0, z0: -68, x1: WALL.x1, z1: -67, height: 9 });
  buildWall(b, { x0: WALL.x0, z0: 63, x1: -16, z1: 64, height: 9 });
  buildWall(b, { x0: 16, z0: 63, x1: WALL.x1, z1: 64, height: 9 });

  // 3. buildings
  const buildings = [];
  buildings.push(buildGate(b, { cx: 0, cz: 58, hx: 14, hz: 5 }));
  buildings.push(buildTower(b, { id: 'bellTower', name: '钟楼', cx: -42, cz: 40, hx: 7, hz: 7, side: -1, instrument: 'bell' }));
  buildings.push(buildTower(b, { id: 'drumTower', name: '鼓楼', cx: 42, cz: 40, hx: 7, hz: 7, side: 1, instrument: 'drum' }));
  buildings.push(buildMainHall(b, { cx: 0, cz: -22, hx: 19, hz: 11 }));
  buildings.push(buildSideHall(b, { id: 'sideHallW', name: '西配殿', cx: -42, cz: 6, hx: 7, hz: 14, side: 1 }));
  buildings.push(buildSideHall(b, { id: 'sideHallE', name: '东配殿', cx: 42, cz: 6, hx: 7, hz: 14, side: -1 }));
  buildings.push(buildSideHall(b, { id: 'rearHallW', name: '西后配殿', cx: -42, cz: -54, hx: 7, hz: 10, side: 1, entranceAxis: 'z' }));
  buildings.push(buildSideHall(b, { id: 'rearHallE', name: '东后配殿', cx: 42, cz: -54, hx: 7, hz: 10, side: -1, entranceAxis: 'z' }));
  buildings.push(buildPagoda(b, { cx: 0, cz: -58, stories: 5, half: 6 }));
  buildings.push(buildPavilion(b, { id: 'pavilionW', name: '西亭', cx: -22, cz: -58, half: 4 }));
  buildings.push(buildPavilion(b, { id: 'pavilionE', name: '东亭', cx: 22, cz: -58, half: 4 }));
  buildings.push(buildCorridor(b, { id: 'corridorW', name: '西回廊', cx: -27, cz: -26, hx: 2, hz: 14 }));
  buildings.push(buildCorridor(b, { id: 'corridorE', name: '东回廊', cx: 27, cz: -26, hx: 2, hz: 14 }));

  // 4. props: 石狮 (gate), 灯柱 (axis), 树
  for (const s of [-1, 1]) stoneLion(b, { x: s * 20, y: 1, z: 52 });
  for (const [x, z] of LAMP_POSTS) {
    lampPost(b, { x, z });
    lampPost(b, { x: -x, z });
  }
  for (const [tx, tz, seed] of TREES) {
    tree(b, { x: tx, z: tz, y: 1, seed });
    if (tx !== 0) tree(b, { x: -tx, z: tz, y: 1, seed });
  }

  // 5. grass tufts (after structures so they never grow through a platform)
  const tufts = scatterGrassTufts(b, 900);

  // 6. circulation set for the connectivity check
  const roads = new Set();
  for (const r of [...ROADS, ...PAVED_APRONS]) {
    for (let x = r.x0; x <= r.x1; x++) for (let z = r.z0; z <= r.z1; z++) roads.add(x + ',' + z);
  }

  return {
    builder: b,
    buildings,
    roads,
    stats: { tufts, treeCount: TREES.length * 2 },
  };
}

export { ROAD_KEYS };
