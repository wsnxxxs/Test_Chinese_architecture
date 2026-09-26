import * as THREE from 'three';
import { polylineCurve, wrapU, offsetCurve } from '../lib/geometry.js';

// ---------------------------------------------------------------------------
// The blueprint of the diorama. Every module (terrain, railway, town, roads)
// reads its coordinates from here, so the town stays consistent and the
// placement planner can keep buildings clear of track, river and streets.
// ---------------------------------------------------------------------------

export const BOARD = {
  width: 104,
  depth: 72,
  rimWidth: 3,
  rimInnerX: 48.7, // rim lip overhangs the scenery a little
  rimInnerZ: 32.7,
  rimOuterX: 52,
  rimOuterZ: 36,
  rimHeight: 1.05,
  deckTop: 0,
  deckBottom: -2.4,
  baseBottom: -2.9,
  // scenery footprint
  minX: -49,
  maxX: 49,
  minZ: -33,
  maxZ: 33,
  earthBottom: -2.6,
};

export const WATER = {
  level: -1.7,
  bed: -2.4,
  halfWidth: 3.0,
  bank: 3.2,
};

// Closed single track loop: long straights, generous curves.
export const TRACK_POINTS = [
  [-33, -19],
  [-19, -24],
  [-2, -26],
  [15, -25.5],
  [27, -22],
  [36, -15],
  [41.5, -5.5],
  [42.5, 5.5],
  [38, 15.5],
  [28, 22.5],
  [14, 25.5],
  [-3, 26],
  [-18, 25],
  [-29, 21.5],
  [-38, 15],
  [-42.5, 5],
  [-43.5, -5],
  [-40, -13.5],
];

// The river cuts the board from north to south, crossed twice by the railway.
export const RIVER_POINTS = [
  [-19, -44],
  [-17.5, -36],
  [-14.5, -27],
  [-13, -20],
  [-15, -12],
  [-16.5, -4],
  [-15, 4],
  [-12.5, 11],
  [-13.5, 18],
  [-15, 24],
  [-13, 30],
  [-11, 40],
];

export const RAIL = {
  ballastBaseHalf: 3.25,
  ballastTopHalf: 2.35,
  ballastTop: 0.34,
  sleeperLength: 3.0,
  sleeperHeight: 0.16,
  sleeperWidth: 0.42,
  sleeperSpacing: 1.05,
  gauge: 1.6,
  railTop: 0.68,
  railBase: 0.5,
};

export const PLATFORM = {
  innerOffset: 3.35,
  outerOffset: 6.6,
  height: 0.95,
};

export const trackCurve = polylineCurve(TRACK_POINTS, true, 0.5);
export const riverCurve = polylineCurve(RIVER_POINTS, false, 0.5);
export const TRACK_LENGTH = trackCurve.getLength();

function sampleCurve(curve, count, closed) {
  const pts = [];
  const n = closed ? count : count - 1;
  for (let i = 0; i <= n; i++) {
    const u = closed ? (i % count) / count : i / n;
    const p = curve.getPointAt(u);
    pts.push(p.x, p.z);
  }
  return pts;
}

const TRACK_SAMPLES = sampleCurve(trackCurve, 900, true);
const RIVER_SAMPLES = sampleCurve(riverCurve, 420, false);

function distanceToSamples(x, z, samples) {
  let best = Infinity;
  for (let i = 0; i < samples.length; i += 2) {
    const dx = x - samples[i];
    const dz = z - samples[i + 1];
    const d = dx * dx + dz * dz;
    if (d < best) best = d;
  }
  return Math.sqrt(best);
}

export function distanceToTrack(x, z) {
  return distanceToSamples(x, z, TRACK_SAMPLES);
}

export function distanceToRiver(x, z) {
  return distanceToSamples(x, z, RIVER_SAMPLES);
}

const smoothstep = (t) => {
  const c = Math.min(1, Math.max(0, t));
  return c * c * (3 - 2 * c);
};

// A few soft mounds in the dead corners of the board, away from the railway.
export const MOUNDS = [
  { x: -41, z: 24, r: 7.0, h: 1.1 },
  { x: 30, z: -30.5, r: 7.5, h: 0.95 },
  { x: -34, z: -29, r: 8, h: 1.05 },
  { x: 42, z: 29, r: 7, h: 0.85 },
];

export function terrainHeight(x, z) {
  const d = distanceToRiver(x, z);
  let h = 0;
  if (d < WATER.halfWidth) {
    h = WATER.bed;
  } else if (d < WATER.halfWidth + WATER.bank) {
    const t = (d - WATER.halfWidth) / WATER.bank;
    h = WATER.bed * (1 - smoothstep(t));
  }
  for (const m of MOUNDS) {
    const dx = x - m.x;
    const dz = z - m.z;
    const dd = Math.hypot(dx, dz);
    if (dd < m.r) {
      const t = 1 - dd / m.r;
      h += m.h * smoothstep(t) * smoothstep(Math.min(1, t * 1.6));
    }
  }
  return h;
}

// --- curve helpers ---------------------------------------------------------

export function trackPointAt(u, target = new THREE.Vector3()) {
  return trackCurve.getPointAt(wrapU(u), target);
}

export function trackTangentAt(u, target = new THREE.Vector3()) {
  return trackCurve.getTangentAt(wrapU(u), target);
}

/** +1 when the curve's left hand normal (t.z, -t.x) points into the loop. */
export function inwardSign(u) {
  const p = trackCurve.getPointAt(wrapU(u));
  const t = trackCurve.getTangentAt(wrapU(u));
  const nx = t.z;
  const nz = -t.x;
  return nx * -p.x + nz * -p.z >= 0 ? 1 : -1;
}

/** Unit normal in the XZ plane, pointing towards the inside of the loop. */
export function trackInwardNormal(u, target = new THREE.Vector3()) {
  const p = trackCurve.getPointAt(wrapU(u));
  const t = trackCurve.getTangentAt(wrapU(u));
  const nx = t.z;
  const nz = -t.x;
  const len = Math.hypot(nx, nz) || 1;
  // towards the middle of the loop (roughly the middle of the board)
  const toCenterX = -p.x;
  const toCenterZ = -p.z;
  const sign = nx * toCenterX + nz * toCenterZ >= 0 ? 1 : -1;
  return target.set((nx / len) * sign, 0, (nz / len) * sign);
}

/** Yaw (radians) for an object whose local +X should follow the track. */
export function yawForDirection(dir) {
  return Math.atan2(-dir.z, dir.x);
}

export function yawFromTangent(u) {
  const t = trackCurve.getTangentAt(wrapU(u));
  return Math.atan2(-t.z, t.x);
}

/** Find the u of the point on the loop closest to (x, z). */
export function closestTrackU(x, z) {
  let bestU = 0;
  let best = Infinity;
  const p = new THREE.Vector3();
  for (let i = 0; i < 900; i++) {
    const u = i / 900;
    trackCurve.getPointAt(u, p);
    const d = (p.x - x) ** 2 + (p.z - z) ** 2;
    if (d < best) {
      best = d;
      bestU = u;
    }
  }
  return bestU;
}

/**
 * Ranges of u (along `curve`) where the ground drops below `threshold`,
 * padded outwards. Used to cut the ballast / road and drop a bridge in.
 */
export function channelSpans(curve, { samples = 900, threshold = -0.06, pad = 2.6 } = {}) {
  const length = curve.getLength();
  const flags = [];
  const p = new THREE.Vector3();
  for (let i = 0; i <= samples; i++) {
    curve.getPointAt(i / samples, p);
    flags.push(terrainHeight(p.x, p.z) < threshold);
  }
  const spans = [];
  let start = -1;
  for (let i = 0; i <= samples; i++) {
    if (flags[i] && start < 0) start = i;
    if ((!flags[i] || i === samples) && start >= 0) {
      const end = flags[i] ? i : i - 1;
      spans.push([start / samples, end / samples]);
      start = -1;
    }
  }
  return spans.map(([a, b]) => {
    const centre = (a + b) / 2;
    const half = (b - a) / 2;
    return { u0: centre - half - pad / length, u1: centre + half + pad / length, centre, half, width: (b - a) * length };
  });
}

// --- roads -----------------------------------------------------------------

export const ROAD_DEFS = [
  {
    id: 'main',
    name: '主街 / High Street',
    width: 4.4,
    surface: 'asphalt',
    points: [
      [30.5, 0.5],
      [25, 2.6],
      [18, 4.6],
      [10, 5.4],
      [2.5, 4.6],
      [-4, 2.8],
      [-10, 1.6],
      [-17, 1.2],
      [-23, 0.6],
      [-28, -1.6],
      [-32, -5.4],
      [-35, -10.5],
    ],
  },
  {
    id: 'north',
    name: '北巷 / North Lane',
    width: 3.6,
    surface: 'gravel',
    points: [
      [9.5, 5.2],
      [8.2, 1.5],
      [6.6, -4],
      [5, -11],
      [3.8, -18],
      [2.6, -24],
      [1.6, -30.5],
      [-0.5, -33.5],
    ],
  },
  {
    id: 'south',
    name: '南巷 / South Lane',
    width: 3.2,
    surface: 'gravel',
    points: [
      [-2.5, 3.2],
      [-5, 7.5],
      [-6, 12],
      [-4, 16.5],
      [-1, 19],
      [6, 20],
      [13, 19.5],
      [19, 18],
      [22.5, 17],
    ],
  },
  {
    id: 'westlane',
    name: '西岸农道 / West Lane',
    width: 2.6,
    surface: 'gravel',
    points: [
      [-23.5, 0.8],
      [-27, 3.5],
      [-29.5, 6.5],
      [-31, 10],
      [-31.5, 13.5],
    ],
  },
  {
    id: 'yard',
    name: '货场支路 / Yard Road',
    width: 3.2,
    surface: 'gravel',
    points: [
      [28.5, 2.5],
      [30.5, 6],
      [29.5, 10.5],
      [26, 14.5],
      [22.5, 17],
    ],
  },
  {
    id: 'milllane',
    name: '磨坊巷 / Mill Lane',
    width: 2.8,
    surface: 'gravel',
    points: [
      [4.5, -5.5],
      [3.2, -9.5],
      [2.2, -13.0],
      [2.0, -16.5],
      [1.0, -19.5],
    ],
  },
  {
    id: 'millpath',
    name: '磨坊小径 / Mill Path',
    width: 2.4,
    surface: 'gravel',
    bridge: 'timber',
    points: [
      [-8.0, 1.6],
      [-8.8, -2.5],
      [-8.6, -6.0],
      [-8.6, -9.0],
      [-22.2, -7.5],
      [-23.5, -4.0],
      [-24.0, -0.6],
      [-23.5, 0.8],
    ],
  },
];

export const ROADS = ROAD_DEFS.map((def) => {
  const curve = polylineCurve(def.points, false, 0.5);
  const samples = [];
  for (let i = 0; i <= 400; i++) {
    const p = curve.getPointAt(i / 400);
    samples.push(p.x, p.z);
  }
  return { ...def, curve, samples, length: curve.getLength() };
});

export function distanceToRoads(x, z) {
  let best = Infinity;
  for (const road of ROADS) {
    const d = distanceToSamples(x, z, road.samples);
    if (d < best) best = d;
  }
  return best;
}

// The mill stands on the east bank, its wheel hanging over the channel.
export const MILL = { x: -4.5, z: -15.0, yaw: 0.1 };

// --- station ---------------------------------------------------------------

const STATION_PROBE = new THREE.Vector3(42, 0, 0);
export const STATION_U = closestTrackU(STATION_PROBE.x, STATION_PROBE.z);

// Passing loop / goods siding: parallel offset that tapers back towards the
// running line at the north end (reading as a turnout) and ends at a buffer
// stop in the goods yard.
const SIDING_START = STATION_U + 0.028;
const SIDING_END = STATION_U + 0.108;
const SIDING_SIDE = inwardSign((SIDING_START + SIDING_END) / 2);
export const SIDING = {
  uStart: SIDING_START,
  uEnd: SIDING_END,
  offset: 10.6,
  side: SIDING_SIDE,
  curve: offsetCurve(trackCurve, {
    uStart: SIDING_START,
    uEnd: SIDING_END,
    samples: 110,
    offsetAt: (f) => SIDING_SIDE * (2.1 + (10.6 - 2.1) * smoothstep(Math.min(1, f / 0.3))),
  }),
};

export const PLATFORM_SPAN = { u0: STATION_U - 0.062, u1: STATION_U + 0.062 };

// --- placement planner -----------------------------------------------------

export function createPlanner() {
  const placed = [];
  const clearOfTrack = 6.6;
  const clearOfRoad = 3.6;
  const clearOfRiver = 7.0;

  function distToPlaced(x, z, r) {
    let worst = Infinity;
    for (const b of placed) {
      const d = Math.hypot(x - b.x, z - b.z) - b.r - r;
      if (d < worst) worst = d;
    }
    return worst;
  }

  return {
    placed,
    /** Reasons a footprint would clash, empty when the spot is free. */
    clashes(x, z, r) {
      const out = [];
      if (x - r < BOARD.minX + 1.5 || x + r > BOARD.maxX - 1.5) out.push('board-x');
      if (z - r < BOARD.minZ + 1.5 || z + r > BOARD.maxZ - 1.5) out.push('board-z');
      if (distanceToTrack(x, z) < clearOfTrack + r) out.push('track');
      if (distanceToRiver(x, z) < clearOfRiver + r) out.push('river');
      if (distanceToRoads(x, z) < clearOfRoad + r * 0.4) out.push('road');
      if (distToPlaced(x, z, r) < 0.9) out.push('building');
      return out;
    },
    isFree(x, z, r) {
      return this.clashes(x, z, r).length === 0;
    },
    reserve(x, z, r) {
      placed.push({ x, z, r });
    },
  };
}

export const COLORS = {
  grass: '#6f9440',
  woodBase: '#7c5230',
  woodBaseDark: '#5a3a20',
  woodRim: '#8a5c33',
  ballast: '#8d8478',
  water: '#3f6b74',
  platform: '#b9b2a2',
  plaster: ['#e8dcc4', '#e0c9a6', '#d8cfc0', '#cfd8c8', '#e6cfc0', '#dcd3ae', '#c9d3d6', '#e9e2d5'],
  roofs: ['#8c4a3a', '#6d5346', '#4f5a63', '#7a6a54', '#5d6b52', '#8a5b45'],
  foliage: ['#4c7a34', '#5c8a3c', '#3f6b2e', '#6b9744', '#547f38', '#476f2f'],
  conifer: ['#2f5230', '#3a5f36', '#27452a'],
};
