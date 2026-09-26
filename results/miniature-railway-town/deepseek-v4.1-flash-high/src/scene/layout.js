/**
 * LAYOUT — the frozen town plan. Every other scene module reads its geometry from here.
 * Owned by: orchestrator. Consumers MUST NOT re-derive coordinates locally.
 *
 * World space: +X east, +Y up, +Z south (towards the default camera).
 * Ground level of the sandbox top surface = y 0. All lengths in world units.
 *
 * Conventions used by the builders:
 *  - A building plot's FRONT faces local +Z when rotY = 0 (door / shopfront / windows).
 *  - Road/path `offset` in sampleRoad() is positive towards the RIGHT of the travel direction.
 *  - Anything that must sit on the terrain should call groundHeightAt(x, z) (river channel).
 */

import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/* ------------------------------------------------------------------ *
 * helpers
 * ------------------------------------------------------------------ */

/** Deterministic PRNG (mulberry32). Same seed -> same sequence, always. */
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function random() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Shortest distance from (x,z) to a polyline given as [[x,z], ...]. */
export function polylineDistance(points, x, z) {
  let best = Infinity;
  for (let i = 0; i < points.length - 1; i++) {
    const ax = points[i][0];
    const az = points[i][1];
    const bx = points[i + 1][0];
    const bz = points[i + 1][1];
    const dx = bx - ax;
    const dz = bz - az;
    const len2 = dx * dx + dz * dz;
    let t = len2 > 0 ? ((x - ax) * dx + (z - az) * dz) / len2 : 0;
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    const px = ax + dx * t;
    const pz = az + dz * t;
    const d = Math.hypot(x - px, z - pz);
    if (d < best) best = d;
  }
  return best;
}

/* ------------------------------------------------------------------ *
 * base / plinth
 * ------------------------------------------------------------------ */

export const WORLD = {
  /** wooden slab: outer footprint, thickness, top surface sits at y = 0 */
  base: {
    width: 44,
    depth: 33,
    slabTopY: 0,
    slabBottomY: -1.5,
    /** the terrain carpet is inset under the rim by this much */
    terrainInsetY: -0.06,
  },
  /** raised picture-frame rim around the top surface */
  rim: {
    width: 1.3,
    topY: 0.42,
    /** inner chamfer height on the top face */
    bevel: 0.16,
  },
  /** flat top surface available to the layout (inside the rim) */
  play: {
    minX: -20.7,
    maxX: 20.7,
    minZ: -15.2,
    maxZ: 15.2,
  },
  /** nameplate engraved on the front (south) rim face */
  nameplate: { text: 'RAILWAY TOWN', x: 0, z: 16.5, width: 11, height: 0.52 },
};

/* ------------------------------------------------------------------ *
 * river
 * ------------------------------------------------------------------ */

export const RIVER = {
  /** channel centreline, north edge -> south edge of the base */
  points: [
    [3.6, -15.2],
    [2.8, -10.6],
    [3.6, -6.0],
    [5.0, -1.0],
    [5.6, 3.6],
    [5.2, 8.0],
    [4.6, 10.6],
    [4.0, 12.6],
    [4.6, 15.2],
  ],
  /** half width of the water surface */
  waterHalf: 1.7,
  /** half width of the whole depression (flat grass starts beyond this) */
  bankHalf: 3.1,
  waterY: -0.62,
  bedY: -1.35,
};

/** Terrain height at a point: 0 on the grass, negative inside the river channel. */
export function groundHeightAt(x, z) {
  const d = polylineDistance(RIVER.points, x, z);
  if (d <= RIVER.waterHalf) return RIVER.bedY;
  if (d >= RIVER.bankHalf) return 0;
  const t = (d - RIVER.waterHalf) / (RIVER.bankHalf - RIVER.waterHalf);
  const smooth = t * t * (3 - 2 * t);
  return RIVER.bedY * (1 - smooth);
}

/** 0 on dry land, 1 at the water edge — used for wet-sand tinting and vegetation rules. */
export function riverWetness(x, z) {
  const d = polylineDistance(RIVER.points, x, z);
  if (d >= RIVER.bankHalf) return 0;
  return 1 - (d - RIVER.waterHalf) / (RIVER.bankHalf - RIVER.waterHalf);
}

/* ------------------------------------------------------------------ *
 * railway
 * ------------------------------------------------------------------ */

/** Closed loop, listed in travel direction (starting on the north straight). */
const TRACK_POINTS_XZ = [
  [-8.6, -10.6],
  [-4.0, -10.6],
  [0.2, -10.6],
  [4.2, -10.6],
  [7.4, -10.6],
  [11.9, -9.9],
  [15.1, -6.4],
  [16.2, -1.6],
  [15.8, 3.4],
  [13.6, 7.6],
  [9.0, 10.6],
  [4.0, 10.6],
  [-0.6, 10.6],
  [-5.2, 10.6],
  [-8.6, 10.6],
  [-12.3, 9.4],
  [-15.4, 6.0],
  [-16.2, 1.4],
  [-15.6, -3.4],
  [-13.4, -7.6],
  [-11.0, -9.9],
];

export const TRACK = {
  pointsXZ: TRACK_POINTS_XZ,
  /** curve sits at the top of the sleepers */
  curveY: 0.34,
  gauge: 1.0,
  rail: { height: 0.1, width: 0.075 },
  /** rail head height above ground — train wheels ride on this value */
  railTopY: 0.44,
  sleeper: { length: 1.62, width: 0.3, height: 0.075, spacing: 0.5 },
  ballast: { topHalf: 0.86, bottomHalf: 1.18, topY: 0.3 },
  /** loose grass/gravel shoulder kept clear of everything else */
  clearance: 1.35,
};

let cachedCurve = null;
let cachedLength = 0;
let cachedTrackSamples = null;

/** The one and only track curve (closed, arc-length aware). Cache the result. */
export function getTrackCurve() {
  if (cachedCurve) return cachedCurve;
  const pts = TRACK_POINTS_XZ.map(([x, z]) => new THREE.Vector3(x, TRACK.curveY, z));
  const curve = new THREE.CatmullRomCurve3(pts, true, 'centripetal', 0.5);
  curve.arcLengthDivisions = 1400;
  curve.updateArcLengths();
  cachedCurve = curve;
  cachedLength = curve.getLength();
  return curve;
}

/** Total loop length in world units (computed once, memoised). */
export function getTrackLength() {
  if (!cachedLength) getTrackCurve();
  return cachedLength;
}

/** Dense xz samples of the track centreline, memoised — used by isSiteFree(). */
function trackSamples() {
  if (cachedTrackSamples) return cachedTrackSamples;
  const curve = getTrackCurve();
  const n = 900;
  const out = [];
  const p = new THREE.Vector3();
  for (let i = 0; i < n; i++) {
    curve.getPointAt(i / n, p);
    out.push([p.x, p.z]);
  }
  out.push(out[0]);
  cachedTrackSamples = out;
  return out;
}

/** Distance from (x,z) to the track centreline. */
export function distanceToTrack(x, z) {
  return polylineDistance(trackSamples(), x, z);
}

/** Parameter u (0..1, arc-length based) of the curve point closest to (x,z). */
export function curveUAtPoint(x, z, samples = 2400) {
  const curve = getTrackCurve();
  let best = 0;
  let bestD = Infinity;
  const p = new THREE.Vector3();
  for (let i = 0; i < samples; i++) {
    const u = i / samples;
    curve.getPointAt(u, p);
    const d = (p.x - x) * (p.x - x) + (p.z - z) * (p.z - z);
    if (d < bestD) {
      bestD = d;
      best = u;
    }
  }
  return best;
}

/* ------------------------------------------------------------------ *
 * bridges  (all three stream crossings of the diorama)
 * ------------------------------------------------------------------ */

export const ROAD_BRIDGE = {
  /** low beam bridge carrying crossLane over the river */
  z: -4.2,
  xFrom: 0.8,
  xTo: 7.4,
  /** deck sits just above the flat road surface (roads are drawn at y = 0.02) */
  deckY: 0.07,
  width: 2.5,
  piers: [2.5, 4.15, 5.8],
};

export const BRIDGES = [
  {
    id: 'truss-north',
    kind: 'truss',
    /** steel truss on the north straight */
    along: 'x',
    fixedZ: -10.6,
    deckFrom: -0.5,
    deckTo: 6.1,
    trussFrom: 1.0,
    trussTo: 4.6,
    deckY: TRACK.curveY,
    halfWidth: 0.95,
  },
  {
    id: 'arch-south',
    kind: 'arch',
    /** masonry arch viaduct on the south straight */
    along: 'x',
    fixedZ: 10.6,
    deckFrom: 1.2,
    deckTo: 8.0,
    pierXs: [4.6],
    deckY: TRACK.curveY,
    halfWidth: 0.95,
  },
  {
    id: 'beam-crosslane',
    kind: 'beam',
    along: 'x',
    fixedZ: ROAD_BRIDGE.z,
    deckFrom: ROAD_BRIDGE.xFrom,
    deckTo: ROAD_BRIDGE.xTo,
    deckY: ROAD_BRIDGE.deckY,
    halfWidth: ROAD_BRIDGE.width / 2,
  },
];

/** Resolved arc-length ranges of the two railway bridges (used by track.js for the deck cut-outs). */
export const TRACK_BRIDGE_U = BRIDGES.filter((b) => b.kind !== 'beam').map((b) => {
  const uA = curveUAtPoint(b.deckFrom, b.fixedZ);
  const uB = curveUAtPoint(b.deckTo, b.fixedZ);
  return {
    id: b.id,
    kind: b.kind,
    xFrom: b.deckFrom,
    xTo: b.deckTo,
    fixedZ: b.fixedZ,
    deckY: b.deckY,
    halfWidth: b.halfWidth,
    /** ascending arc range covered by the bridge deck */
    uMin: Math.min(uA, uB),
    uMax: Math.max(uA, uB),
    midU: curveUAtPoint((b.deckFrom + b.deckTo) / 2, b.fixedZ),
  };
});

/* ------------------------------------------------------------------ *
 * roads, lanes and footpaths
 * ------------------------------------------------------------------ */

export const ROADS = [
  {
    name: 'stationRoad',
    kind: 'asphalt',
    width: 2.6,
    sidewalk: 0.7,
    markings: true,
    points: [
      [-13.8, 3.4],
      [-10.5, 3.3],
      [-7.0, 3.1],
      [-4.4, 3.0],
      [-1.6, 3.0],
      [1.4, 3.2],
    ],
  },
  {
    name: 'mainStreet',
    kind: 'asphalt',
    width: 2.8,
    sidewalk: 0.7,
    markings: false,
    points: [
      [-3.6, 3.1],
      [-3.2, 1.0],
      [-3.4, -1.0],
      [-3.4, -2.6],
      [-3.4, -4.3],
    ],
  },
  {
    name: 'crossLane',
    kind: 'asphalt',
    width: 2.2,
    sidewalk: 0.5,
    markings: false,
    points: [
      [-13.9, -4.2],
      [-9.5, -4.3],
      [-5.5, -4.2],
      [-2.0, -4.2],
      [0.8, -4.2],
    ],
  },
  {
    name: 'westRing',
    kind: 'asphalt',
    width: 2.2,
    sidewalk: 0.5,
    markings: false,
    points: [
      [-13.8, 3.4],
      [-14.2, 1.6],
      [-14.4, -1.0],
      [-14.2, -3.3],
      [-13.9, -4.2],
    ],
  },
  {
    name: 'eastLane',
    kind: 'gravel',
    width: 2.0,
    sidewalk: 0,
    markings: false,
    points: [
      [7.4, -4.2],
      [10.2, -3.6],
      [12.4, -2.2],
      [13.0, -0.4],
    ],
  },
  {
    name: 'farmTrack',
    kind: 'farm',
    width: 1.5,
    sidewalk: 0,
    markings: false,
    points: [
      [13.0, -0.4],
      [12.8, 1.6],
      [11.4, 3.6],
      [9.8, 5.6],
      [8.9, 7.6],
    ],
  },
  {
    name: 'riverWalk',
    kind: 'path',
    width: 1.4,
    sidewalk: 0,
    markings: false,
    points: [
      [1.4, 3.0],
      [1.0, 0.8],
      [1.4, -1.2],
      [0.6, -3.6],
      [-0.2, -6.0],
      [-1.4, -8.6],
    ],
  },
  {
    name: 'greenPath',
    kind: 'path',
    width: 1.2,
    sidewalk: 0,
    markings: false,
    points: [
      [-13.9, -4.6],
      [-13.0, -6.6],
      [-9.0, -8.6],
      [-5.0, -9.0],
      [-2.8, -9.0],
    ],
  },
  {
    name: 'southPath',
    kind: 'path',
    width: 1.3,
    sidewalk: 0,
    markings: false,
    points: [
      [-12.6, 12.6],
      [-9.0, 12.4],
      [-5.0, 12.5],
      [-1.2, 12.6],
      [2.0, 12.8],
    ],
  },
];

/** Find a road definition by name. */
export function getRoad(name) {
  return ROADS.find((r) => r.name === name);
}

/**
 * Walk a road, emitting evenly spaced anchor points.
 * `offset` shifts the point sideways: positive = right of the travel direction.
 * Returns [{ x, z, angle, tx, tz, side }] with angle = yaw of the road tangent.
 */
export function sampleRoad(name, spacing, offset = 0) {
  const road = getRoad(name);
  if (!road) return [];
  const pts = road.points;
  const out = [];
  let carry = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, az] = pts[i];
    const [bx, bz] = pts[i + 1];
    const segLen = Math.hypot(bx - ax, bz - az);
    if (segLen < 1e-6) continue;
    const tx = (bx - ax) / segLen;
    const tz = (bz - az) / segLen;
    const rx = -tz;
    const rz = tx;
    let d = carry;
    while (d <= segLen) {
      out.push({
        x: ax + tx * d + rx * offset,
        z: az + tz * d + rz * offset,
        angle: Math.atan2(tx, tz),
        tx,
        tz,
      });
      d += spacing;
    }
    carry = d - segLen;
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * paved areas (plazas, aprons) — drawn by terrain.js
 * ------------------------------------------------------------------ */

export const PAVING = [
  { id: 'piazza', x: -0.65, z: 0.55, w: 3.1, d: 2.7, kind: 'flagstone' },
  { id: 'forecourt', x: -4.4, z: 4.62, w: 14.4, d: 1.5, kind: 'flagstone' },
  { id: 'goodsApron', x: -9.6, z: 12.3, w: 7.0, d: 1.2, kind: 'gravel' },
];

/* ------------------------------------------------------------------ *
 * shared geometry utilities for the builders
 * ------------------------------------------------------------------ */

/**
 * Multiply a geometry's uv attribute (per-mesh texture scale while keeping a
 * single shared material). Returns the same geometry for chaining.
 */
export function scaleUV(geometry, su, sv) {
  const uv = geometry.attributes.uv;
  if (!uv) return geometry;
  for (let i = 0; i < uv.count; i++) {
    uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv);
  }
  uv.needsUpdate = true;
  return geometry;
}

/**
 * Collects many small geometries into one draw call per material.
 *
 *   const bucket = createGeometryBucket('town');
 *   bucket.add(MAT.wall.plaster[0], new THREE.BoxGeometry(1, 1, 1), matrix);
 *   scene.add(bucket.build({ name: 'town' }));
 *
 * Buckets take a clone of every geometry they are given (the caller keeps
 * ownership of the original). Attribute sets are intersected automatically and
 * mixed indexed / non-indexed input is normalised, so merging never fails.
 */
export function createGeometryBucket(defaultName = 'bucket') {
  const entries = new Map();

  return {
    /** add(material, geometry, matrix?) — matrix is applied to the clone. */
    add(material, geometry, matrix = null) {
      if (!material || !geometry) return;
      const clone = geometry.clone();
      if (matrix) clone.applyMatrix4(matrix);
      let list = entries.get(material);
      if (!list) {
        list = [];
        entries.set(material, list);
      }
      list.push(clone);
    },

    /** Merge everything into a group of one mesh per material. */
    build(options = {}) {
      const group = new THREE.Group();
      group.name = options.name || defaultName;
      const castShadow = options.castShadow !== false;
      const receiveShadow = options.receiveShadow !== false;

      for (const [material, list] of entries) {
        if (!list.length) continue;
        const candidates = ['normal', 'uv', 'color'];
        const keep = candidates.filter((key) => list.every((g) => g.attributes[key]));
        let prepared = list.map((g) => {
          for (const key of Object.keys(g.attributes)) {
            if (key !== 'position' && !keep.includes(key)) g.deleteAttribute(key);
          }
          return g;
        });
        const allIndexed = prepared.every((g) => g.index);
        if (!allIndexed) prepared = prepared.map((g) => (g.index ? g.toNonIndexed() : g));

        const merged = mergeGeometries(prepared, false);
        for (const g of prepared) g.dispose();
        entries.set(material, []);

        if (merged) {
          const mesh = new THREE.Mesh(merged, material);
          mesh.castShadow = castShadow;
          mesh.receiveShadow = receiveShadow;
          group.add(mesh);
        } else {
          // fall back to individual meshes rather than dropping geometry
          for (const g of list) {
            const mesh = new THREE.Mesh(g, material);
            mesh.castShadow = castShadow;
            mesh.receiveShadow = receiveShadow;
            group.add(mesh);
          }
        }
      }
      entries.clear();
      return group;
    },
  };
}

/* ------------------------------------------------------------------ *
 * building plots
 * ------------------------------------------------------------------ */

/**
 * plot(id, style, x, z, width, depth, rotY, floors, roof, hue, note)
 *  width/depth = footprint in local X / Z, front faces local +Z at rotY = 0.
 *  hue = index into BASE_COLORS.wall.plaster.
 *  roof: 'gable' | 'hip' | 'gambrel' | 'shed' | 'flat' | 'spire' | 'dome'
 */
const plot = (id, style, x, z, w, d, rotY, floors, roof, hue, note = '') => ({
  id,
  style,
  x,
  z,
  w,
  d,
  rotY,
  floors,
  roof,
  hue,
  note,
});

const S = Math.PI;
const E = -Math.PI / 2; // front faces west (-X)
const W = Math.PI / 2; // front faces east (+X)

export const PLOTS = [
  // --- Row A: station road frontage (fronts face the road, i.e. local +Z = south) ---
  plot('a1', 'shop', -11.5, -0.3, 2.0, 3.0, 0, 2, 'gable', 3, '街边小店，主街西端'),
  plot('a2', 'shop', -9.0, -0.3, 2.6, 3.0, 0, 2, 'gable', 0, '杂货铺，带遮阳篷'),
  plot('a3', 'house', -6.4, -0.3, 2.4, 3.0, 0, 2, 'hip', 1, '临街住宅'),

  // --- Row B: back lane frontage, behind crossLane (fronts face the lane, +Z = south) ---
  plot('b1', 'house', -11.6, -6.7, 2.4, 2.2, 0, 2, 'gable', 4, '后排住宅'),
  plot('b2', 'house', -8.8, -6.7, 2.2, 2.2, 0, 1, 'gable', 6, '后排小屋'),

  // --- landmark: church beside the line, spire on the west end ---
  plot('church', 'church', -3.4, -7.4, 6.0, 3.4, 0, 2, 'spire', 5, '教堂，西端塔楼尖顶'),

  // --- riverfront inn + town square ---
  plot('tavern', 'tavern', -0.7, -2.0, 2.4, 1.7, 0, 2, 'gable', 6, '河畔酒馆，门面朝广场'),
  plot('townhall', 'hall', -9.8, 6.2, 3.4, 2.6, S, 2, 'hip', 0, '市政厅，钟塔面朝铁路'),

  // --- station forecourt west block ---
  plot('kiosk', 'shed', -12.6, 6.4, 1.6, 2.0, S, 1, 'shed', 3, '站前小亭'),

  // --- east district: farm + mill on the far bank ---
  plot('mill', 'mill', 9.6, 4.9, 2.8, 2.6, W, 2, 'gable', 5, '水磨坊，西侧临河、水轮入水'),
  plot('barn', 'barn', 11.0, 0.8, 3.2, 2.6, W, 1, 'gable', 4, '谷仓'),
  plot('silo', 'silo', 13.2, 5.8, 1.9, 1.9, 0, 1, 'dome', 0, '筒仓'),
  plot('farmhouse', 'house', 12.4, -5.6, 3.0, 2.6, 0, 2, 'gable', 2, '农场住宅'),

  // --- outside the loop: north farm belt ---
  plot('n1', 'barn', 9.2, -13.0, 4.4, 2.8, S, 1, 'gable', 6, '北岸大谷仓'),
  plot('n2', 'shed', -3.0, -13.6, 2.6, 2.2, S, 1, 'shed', 3, '农具棚'),
  plot('n3', 'house', -7.2, -13.2, 3.0, 2.8, S, 2, 'gable', 0, '农舍'),
  plot('n4', 'house', -13.0, -13.0, 2.8, 2.4, S, 1, 'hip', 4, '村外住宅'),
  plot('n5', 'house', -10.0, -13.5, 2.6, 2.4, S, 2, 'gambrel', 2, '村外住宅'),

  // --- outside the loop: west + east rows ---
  plot('w1', 'house', -18.7, 2.0, 2.4, 2.8, W, 2, 'gable', 1, '西侧住宅'),
  plot('w2', 'house', -18.7, -2.6, 2.4, 2.8, W, 1, 'gable', 5, '西侧农舍'),
  plot('e1', 'house', 18.7, -2.0, 2.4, 2.8, E, 2, 'gable', 2, '东侧住宅'),
  plot('e2', 'house', 18.7, 2.6, 2.4, 2.8, E, 1, 'hip', 6, '东侧住宅'),

  // --- outside the loop: south row backing the line ---
  plot('s1', 'house', -14.6, 13.4, 3.0, 2.8, S, 2, 'gable', 0, '铁路南侧住宅'),
  plot('s2', 'house', -4.2, 13.8, 2.8, 2.6, S, 1, 'gable', 4, '铁路南侧住宅'),
  plot('s3', 'house', -1.0, 13.6, 2.6, 2.6, S, 2, 'gambrel', 3, '铁路南侧住宅'),
  plot('s4', 'house', 9.6, 13.4, 2.8, 2.6, S, 1, 'gable', 5, '河南岸住宅'),
  plot('s5', 'house', 13.6, 13.2, 3.0, 2.6, S, 2, 'hip', 1, '东南角住宅'),

  // --- goods yard south of the station ---
  plot('goods', 'shed', -7.4, 13.6, 3.2, 2.4, S, 1, 'shed', 3, '货运仓库'),
  plot('tower', 'watertower', -11.0, 13.2, 2.0, 2.0, 0, 1, 'flat', 0, '水塔'),
];

/* ------------------------------------------------------------------ *
 * station
 * ------------------------------------------------------------------ */

export const STATION = {
  /** centre of the platform on the south straight */
  x: -3.0,
  z: 10.6,
  /** arc-length fraction of the curve at the platform centre (consist centre stops here) */
  stopArc01: curveUAtPoint(-3.0, 10.6),
  platform: {
    xFrom: -8.0,
    xTo: 2.0,
    zFrom: 7.75,
    zTo: 9.55,
    topY: 0.55,
  },
  building: {
    x: -3.0,
    z: 6.6,
    w: 7.5,
    d: 2.6,
    /** front (entrance) faces the town, i.e. local +Z is rotated to face -Z here */
    rotY: S,
  },
  canopy: {
    xFrom: -7.4,
    xTo: 1.4,
    zFrom: 7.85,
    zTo: 9.45,
    topY: 3.05,
  },
  nameplate: '石桥镇  SHIQIAO',
};

/* ------------------------------------------------------------------ *
 * street lamps (arm points local +Z at rotY = 0)
 * ------------------------------------------------------------------ */

export const LAMPS = [
  { x: -12.6, z: 1.5, rotY: 0 },
  { x: -9.0, z: 1.5, rotY: 0 },
  { x: -5.8, z: 1.5, rotY: 0 },
  { x: -6.0, z: 4.7, rotY: S },
  { x: -0.4, z: 4.7, rotY: S },
  { x: -2.0, z: 1.4, rotY: W },
  { x: -2.0, z: -1.6, rotY: W },
  { x: -2.0, z: -3.8, rotY: W },
  { x: -12.4, z: -2.8, rotY: 0 },
  { x: -9.4, z: -2.8, rotY: 0 },
  { x: -6.4, z: -2.8, rotY: 0 },
  { x: -10.8, z: -5.6, rotY: S },
  { x: -7.6, z: -5.6, rotY: S },
  { x: -12.7, z: 1.6, rotY: W },
  { x: -12.7, z: -1.8, rotY: W },
  { x: 1.6, z: 1.4, rotY: E },
  { x: 0.4, z: -3.0, rotY: E },
  { x: -1.2, z: 0.6, rotY: 0 },
  { x: 0.6, z: 1.9, rotY: 0 },
  { x: 8.6, z: -5.4, rotY: 0 },
  { x: 12.0, z: -1.3, rotY: 0 },
  { x: 0.2, z: -9.3, rotY: 0 },
  { x: 5.9, z: -9.3, rotY: 0 },
  { x: -11.0, z: 12.0, rotY: S },
  { x: -3.6, z: 12.0, rotY: S },
];

/* ------------------------------------------------------------------ *
 * vegetation regions for deterministic scattering
 * ------------------------------------------------------------------ */

/**
 * grove(id, x, z, rx, rz, count, kind, seed)
 *  kind: 'conifer' | 'broadleaf' | 'mixed' | 'orchard' | 'willow' | 'hedgerow'
 *  positions are sampled inside the ellipse (rx, rz) and filtered by isSiteFree()
 */
const grove = (id, x, z, rx, rz, count, kind, seed) => ({ id, x, z, rx, rz, count, kind, seed });

export const GROVES = [
  grove('nw-woods', -18.0, -13.0, 3.4, 2.6, 26, 'conifer', 101),
  grove('n-belt', -8.0, -12.6, 6.0, 1.8, 18, 'mixed', 102),
  grove('n-belt-east', 4.0, -13.2, 4.2, 1.8, 14, 'broadleaf', 103),
  grove('ne-outside', 17.6, -11.0, 2.4, 3.0, 12, 'mixed', 104),
  grove('e-orchard', 18.8, 6.2, 1.6, 4.0, 16, 'orchard', 105),
  grove('se-outside', 16.6, 13.0, 3.0, 1.6, 12, 'broadleaf', 106),
  grove('sw-outside', -18.0, 12.0, 2.6, 2.4, 16, 'mixed', 107),
  grove('w-outside', -19.0, -6.0, 1.6, 3.6, 12, 'conifer', 108),
  grove('bank-west', 2.6, 6.6, 0.9, 3.0, 10, 'willow', 109),
  grove('bank-east', 7.9, -6.4, 1.0, 2.6, 8, 'willow', 110),
  grove('back-belt', -9.0, -9.0, 5.0, 0.9, 12, 'hedgerow', 111),
  grove('churchyard', -3.4, -9.4, 2.4, 0.7, 6, 'broadleaf', 112),
  grove('orchard-east', 11.6, 7.4, 2.4, 1.4, 12, 'orchard', 113),
  grove('ne-inside', 11.5, -6.6, 2.6, 1.6, 10, 'mixed', 114),
  grove('station-green', -11.5, 6.6, 1.6, 1.4, 6, 'broadleaf', 115),
  grove('piazza-beds', 0.2, 2.2, 1.4, 0.9, 4, 'hedgerow', 116),
];

/* ------------------------------------------------------------------ *
 * free-space test used by props/trees/lamps placement
 * ------------------------------------------------------------------ */

const plotRects = PLOTS.map((p) => ({
  minX: p.x - Math.max(p.w, p.d) / 2 - 0.3,
  maxX: p.x + Math.max(p.w, p.d) / 2 + 0.3,
  minZ: p.z - Math.max(p.w, p.d) / 2 - 0.3,
  maxZ: p.z + Math.max(p.w, p.d) / 2 + 0.3,
}));

/** station + plaza keep-outs (not in PLOTS because other modules own them) */
const EXTRA_KEEPOUT = [
  { minX: STATION.platform.xFrom - 0.6, maxX: STATION.platform.xTo + 0.6, minZ: 6.0, maxZ: 11.6 },
  { minX: -2.4, maxX: 1.2, minZ: -1.0, maxZ: 2.2 }, // town square paving
  { minX: ROAD_BRIDGE.xFrom - 0.6, maxX: ROAD_BRIDGE.xTo + 0.6, minZ: ROAD_BRIDGE.z - 1.8, maxZ: ROAD_BRIDGE.z + 1.8 },
];

/**
 * Is this spot free for a small object (tree, lamp, bench, …)?
 * opts: { railClear, roadClear, waterClear, plotClear, edgeClear }
 */
export function isSiteFree(x, z, opts = {}) {
  const railClear = opts.railClear ?? TRACK.clearance;
  const roadClear = opts.roadClear ?? 0.45;
  const waterClear = opts.waterClear ?? 0.35;
  const edgeClear = opts.edgeClear ?? 0.5;

  if (
    x < WORLD.play.minX + edgeClear ||
    x > WORLD.play.maxX - edgeClear ||
    z < WORLD.play.minZ + edgeClear ||
    z > WORLD.play.maxZ - edgeClear
  ) {
    return false;
  }
  if (distanceToTrack(x, z) < railClear) return false;
  for (const r of ROADS) {
    if (polylineDistance(r.points, x, z) < r.width / 2 + (r.sidewalk || 0) + roadClear) return false;
  }
  if (polylineDistance(RIVER.points, x, z) < RIVER.bankHalf + waterClear) return false;
  for (const rect of plotRects) {
    if (x > rect.minX && x < rect.maxX && z > rect.minZ && z < rect.maxZ) return false;
  }
  for (const rect of EXTRA_KEEPOUT) {
    if (x > rect.minX && x < rect.maxX && z > rect.minZ && z < rect.maxZ) return false;
  }
  return true;
}

/* ------------------------------------------------------------------ *
 * deterministic starting state
 * ------------------------------------------------------------------ */

export const INITIAL = {
  /** head-of-train arc fraction at load / after reset */
  trainArc01: 0.055,
  timeOfDay: 'evening',
};
