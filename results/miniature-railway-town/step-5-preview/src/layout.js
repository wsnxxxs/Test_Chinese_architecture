/**
 * The town plan. Every coordinate of the sandbox lives here so the railway,
 * river, roads and buildings share one source of truth. Crossings between the
 * railway and the river / roads are *computed* from the actual curves, which is
 * what keeps the bridge, the platform and the level crossing properly aligned.
 */
import * as THREE from 'three';
import { PathTrack } from './geom.js';

export const TOWN_NAME = 'MILLFORD';

/** Inner surface of the sandbox (the grass plane). */
export const TERRAIN = { w: 46, d: 37 };
export const TERRAIN_HALF = { x: TERRAIN.w / 2, z: TERRAIN.d / 2 };

/** Track levels (world y). */
export const Y = {
  ground: 0,
  ballastBottom: 0.03,
  ballastTop: 0.15,
  sleeperTop: 0.24,
  railTop: 0.36,
  platformTop: 0.22,
};

/** Closed railway loop. */
const LOOP_SRC = [
  [-11.4, -6.0], [-10.4, -8.2], [-5.2, -8.6], [0.5, -7.8], [6.9, -8.6], [13.0, -7.4],
  [14.2, -2.0], [13.2, 1.8], [7.6, 2.1], [0.5, 2.3], [-6.9, 2.1], [-11.4, 1.8],
];

/**
 * The river runs in from the west edge, turns south-east and crosses the loop's
 * west leg at a near right angle (first railway bridge), keeps meandering
 * north-east to cross the loop's south leg (second bridge) and finally follows
 * the valley south-east, along the lower town, leaving at the east edge.
 */
const RIVER_SRC = [
  [-22.9, -3.0], [-20.6, -3.3], [-19.9, -3.0], [-17.6, -3.4], [-15.8, -3.8], [-14.2, -4.3], [-12.8, -4.8],
  [-11.7, -5.2], [-10.8, -5.0], [-9.9, -4.3], [-8.9, -3.2], [-8.0, -1.8], [-7.4, 0.2],
  [-7.0, 2.2], [-6.7, 4.2], [-6.1, 6.0], [-5.1, 7.8], [-3.9, 8.9], [-2.3, 9.7], [-0.5, 10.2],
  [1.9, 10.4], [4.7, 10.3], [7.7, 10.1], [10.7, 10.0], [13.7, 10.0], [16.5, 10.1], [19.9, 10.3], [22.9, 10.6],
];

/** Road network (polylines). */
export const ROADS = [
  {
    id: 'station-street',
    name: 'Station Street',
    width: 1.6,
    pts: [[-22.5, -15.2], [-19.4, -14.9], [-13.0, -14.6], [-6.0, -14.5], [-0.5, -14.6], [6.0, -14.4], [12.0, -13.7], [19.5, -13.6], [22.5, -13.4]],
  },
  {
    id: 'village-road',
    name: 'Village Road',
    width: 1.4,
    // From the station forecourt, over the level crossing, into the town centre.
    pts: [[3.2, -14.5], [3.9, -13.0], [4.6, -11.6], [5.2, -9.8], [6.2, -7.4], [6.6, -3.8], [6.2, -0.6], [5.2, 1.3]],
  },
  {
    id: 'west-street',
    name: 'West Street',
    width: 1.3,
    // Crosses the river on the west bridge, then climbs to the mill lane.
    pts: [[-22.5, -15.2], [-20.8, -13.6], [-19.2, -9.4], [-18.4, -5.0], [-18.3, -2.4], [-17.6, 1.4], [-17.2, 5.0], [-17.2, 8.2], [-16.4, 11.0], [-13.5, 12.6], [-11.0, 13.5]],
  },
  {
    id: 'mill-lane',
    name: 'Mill Lane',
    width: 1.0,
    pts: [[-17.2, 8.2], [-15.6, 7.4], [-14.2, 6.9], [-12.4, 6.6], [-10.8, 6.2], [-9.4, 5.7]],
  },
  {
    id: 'south-road',
    name: 'South Road',
    width: 1.6,
    pts: [[-3.6, 6.4], [-2.6, 6.2], [0.0, 6.3], [2.8, 6.4], [5.6, 6.6], [8.6, 6.9], [11.4, 7.2], [13.5, 7.4]],
  },
  {
    id: 'east-road',
    name: 'East Road',
    width: 1.4,
    pts: [[22.5, -12.2], [21.8, -9.4], [21.4, -5.4], [20.9, -1.6], [20.6, 2.2], [20.0, 5.8], [14.2, 7.6], [13.5, 7.4]],
  },
  {
    id: 'riverside-link',
    name: 'Riverside Link',
    width: 1.2,
    // South from the town square, over the river bridge, to the south bank road.
    pts: [[13.5, 7.4], [14.4, 8.6], [14.7, 10.6], [14.8, 12.9]],
  },
  {
    id: 'riverside-drive',
    name: 'Riverside Drive',
    width: 1.2,
    pts: [[-11.0, 13.5], [-7.0, 13.9], [-3.0, 14.0], [1.0, 13.9], [5.0, 13.8], [9.0, 13.6], [12.5, 13.3], [14.8, 12.9], [19.0, 12.9], [22.5, 12.7]],
  },
];

/** Footpaths (dirt coloured, narrower). The riverside promenade is generated. */
export const PATHS = [
  { width: 0.9, pts: [[3.9, -13.0], [3.6, -11.2], [2.8, -9.9]] },
  { width: 0.9, pts: [[-1.4, -4.0], [-0.6, -3.0], [0.4, -2.2]] },
  { width: 0.9, pts: [[0.4, -2.2], [1.6, -1.4], [3.2, -1.0], [4.6, -0.9], [5.6, -1.0]] },
  { width: 0.9, pts: [[-1.4, -2.6], [-3.0, -2.2], [-4.4, -1.7]] },
  { width: 0.9, pts: [[0.4, -2.2], [-0.9, -1.4], [-1.6, -0.5]] },
  { width: 0.9, pts: [[-2.5, 11.9], [-2.5, 12.6]] },
  // Approaches to the river footbridge at x = 2.
  { width: 0.9, pts: [[2.0, 12.9], [2.0, 11.9]] },
  { width: 0.9, pts: [[2.0, 8.0], [2.0, 6.7]] },
];

const vec = (p) => new THREE.Vector3(p[0], 0, p[1]);

/** Segment intersection in the xz plane; returns the point or null. */
function segIntersect(p1, p2, p3, p4) {
  const d1x = p2.x - p1.x;
  const d1z = p2.z - p1.z;
  const d2x = p4.x - p3.x;
  const d2z = p4.z - p3.z;
  const denom = d1x * d2z - d1z * d2x;
  if (Math.abs(denom) < 1e-9) return null;
  const s = ((p3.x - p1.x) * d2z - (p3.z - p1.z) * d2x) / denom;
  const t = ((p3.x - p1.x) * d1z - (p3.z - p1.z) * d1x) / denom;
  if (s < 0 || s > 1 || t < 0 || t > 1) return null;
  return new THREE.Vector3(p1.x + d1x * s, 0, p1.z + d1z * s);
}

/**
 * Where two paths cross. Returns arc lengths + tangents on both sides, which is
 * everything the bridge and level-crossing builders need.
 *
 * Sampling stride: each tested segment spans a whole stride (pts[i] → pts[i+step])
 * rather than a single sample pair, otherwise fine chords are skipped and a real
 * crossing in between them is lost.
 */
function crossings(a, b, step = 4) {
  const chords = (track, stride) => {
    const out = [];
    for (let i = 0; i < track.samples; i += stride) {
      const j = Math.min(i + stride, track.samples);
      if (track.pts[j]) out.push([track.pts[i], track.pts[j]]);
    }
    if (out.length === 1) out.push([track.pts[0], track.pts[track.samples]]);
    return out;
  };
  const aPts = chords(a, step);
  const bPts = chords(b, step);
  const out = [];
  for (const [p1, p2] of aPts) {
    for (const [p3, p4] of bPts) {
      const hit = segIntersect(p1, p2, p3, p4);
      if (!hit) continue;
      if (out.some((o) => Math.hypot(o.point.x - hit.x, o.point.z - hit.z) < 0.4)) continue;
      const dA = a.distanceToPoint(hit.x, hit.z);
      const dB = b.distanceToPoint(hit.x, hit.z);
      out.push({
        point: hit,
        dA,
        dB,
        tangentA: a.tangent(dA, new THREE.Vector3()),
        tangentB: b.tangent(dB, new THREE.Vector3()),
      });
    }
  }
  return out.sort((l, r) => l.dA - r.dA);
}

/** Angle (radians) between the two directions at a crossing. */
function crossAngle(c) {
  const dot = Math.min(1, Math.abs(c.tangentA.dot(c.tangentB)));
  return Math.acos(dot);
}

/** How far the second path extends either side of the crossing, in world units. */
function spanOf(crossing, halfWidth) {
  // sin of the angle between the two directions
  const cross = Math.abs(crossing.tangentA.x * crossing.tangentB.z - crossing.tangentA.z * crossing.tangentB.x);
  return (halfWidth * 2 + 0.9) / Math.max(0.18, cross);
}
export function createLayout() {
  const track = new PathTrack(LOOP_SRC.map(vec), { tension: 0.42, samples: 1800 });
  const river = new PathTrack(RIVER_SRC.map(vec), { closed: false, tension: 0.5, samples: 900 });

  const roads = ROADS.map((r) => ({
    ...r,
    track: new PathTrack(r.pts.map(vec), { closed: false, tension: 0.4, samples: 420 }),
  }));
  const roadById = Object.fromEntries(roads.map((r) => [r.id, r]));

  // ---- riverside promenade (hugging the far bank of the eastern reach) ----
  const promenade = buildPromenade(river);
  const pathSrc = promenade
    ? [...PATHS, { id: 'promenade', name: 'Riverside Promenade', width: 1.0, pts: promenade }]
    : PATHS;
  const paths = pathSrc.map((p) => ({
    ...p,
    track: new PathTrack(p.pts.map(vec), { closed: false, tension: 0.4, samples: 260 }),
  }));

  // ---- station ----------------------------------------------------------
  const centre = LOOP_CENTRE;
  const stopD = track.distanceToPoint(-2.5, -8.4);
  const stopFrame = track.frame(stopD, { p: new THREE.Vector3(), t: new THREE.Vector3(), n: new THREE.Vector3() });
  const outwardSign = Math.sign(stopFrame.n.x * (stopFrame.p.x - centre.x) + stopFrame.n.z * (stopFrame.p.z - centre.z)) || 1;

  const platform = {
    d0: stopD - 3.5,
    d1: stopD + 3.5,
    inner: 0.78,
    outer: 2.28,
    side: outwardSign,
  };

  // Station building sits behind the platform, aligned with the track.
  const stationDir = outwardSign;
  const stationPos = new THREE.Vector3()
    .copy(stopFrame.p)
    .addScaledVector(stopFrame.n, stationDir * 4.35);
  const stationRot = Math.atan2(stopFrame.n.x * stationDir, stopFrame.n.z * stationDir);

  // ---- railway bridges over the river ------------------------------------
  const railCrossings = crossings(track, river).map((c) => ({
    ...c,
    span: spanOf(c, 1.6),
  }));

  // ---- level crossing (road over the railway) ---------------------------
  const levelCrossing = crossings(roadById['village-road'].track, track, 2)[0] || null;
  const levelCrossingSpan = 2.6;

  // ---- road bridges over the river ---------------------------------------
  // Deck length measured along the road: wide enough to span the water plus a
  // little bank either side.
  const bridgeDeck = (c) =>
    (RIVER_HALF_WIDTH * 2 + 1.15) / Math.max(0.18, Math.abs(c.tangentA.x * c.tangentB.z - c.tangentA.z * c.tangentB.x));
  const roadCrossings = [];
  for (const id of ['west-street', 'riverside-link']) {
    const road = roadById[id];
    const hit = crossings(road.track, river, 2)[0];
    if (hit) roadCrossings.push({ id, ...hit, deck: bridgeDeck(hit) });
  }

  return {
    TOWN_NAME,
    TERRAIN,
    Y,
    track,
    river,
    roads,
    roadById,
    paths,
    promenade,
    stopD,
    stopFrame,
    platform,
    station: { ...stationPos, pos: stationPos, rot: stationRot },
    railCrossings,
    levelCrossing,
    levelCrossingSpan,
    roadCrossings,
    loopCentre: centre,
  };
}

/** Width of the water surface (half). */
export const RIVER_HALF_WIDTH = 1.55;

/**
 * Frame of the river at the point nearest (x, z). `n` points from the river
 * towards that query point, so `p + n * distance` steps onto the bank the
 * caller is standing on.
 */
export function riverNearest(layout, x, z) {
  const river = layout.river;
  const d = river.distanceToPoint(x, z);
  const f = river.frame(d, { p: new THREE.Vector3(), t: new THREE.Vector3(), n: new THREE.Vector3() });
  const towards = (f.p.x - x) * f.n.x + (f.p.z - z) * f.n.z;
  return {
    d,
    point: f.p,
    tangent: f.t,
    normal: f.n.multiplyScalar(towards < 0 ? 1 : -1),
    frame: f,
  };
}

/** A point on the river bank, `clear` units away from the water on the near side. */
export function riverBankPoint(layout, x, z, clear = 0.4) {
  const near = riverNearest(layout, x, z);
  return {
    ...near,
    bank: near.point.clone().addScaledVector(near.normal, RIVER_HALF_WIDTH + clear),
  };
}

/**
 * A footpath that follows the river's south bank at a fixed offset, so it can
 * never wander into the water. Only generated over the eastern reach, where the
 * river runs along the bottom of the town.
 */
function buildPromenade(river, offset = RIVER_HALF_WIDTH + 0.95) {
  // Start where the river settles into the long eastward run along the south of
  // the town: heading clearly east and already past the mill reach.
  let start = 0;
  for (let i = 0; i < river.samples; i++) {
    const t = river.tangent(river.cum[i], new THREE.Vector3());
    if (t.x > 0.7 && river.pts[i].z > 7.4) { start = i; break; }
  }
  const pts = [];
  const f = { p: new THREE.Vector3(), t: new THREE.Vector3(), n: new THREE.Vector3() };
  for (let i = start; i <= river.samples; i += 5) {
    river.frame(river.cum[i], f);
    // +n is the left of travel; take whichever offset side ends up further from
    // the loop centre so the walk always hugs the outer bank.
    const side = new THREE.Vector3().copy(f.n).multiplyScalar(offset);
    const alt = new THREE.Vector3().copy(f.n).multiplyScalar(-offset);
    const use = side.distanceTo(LOOP_CENTRE) > alt.distanceTo(LOOP_CENTRE) ? side : alt;
    pts.push([f.p.x + use.x, f.p.z + use.z]);
  }
  if (pts.length < 3) return null;
  return pts;
}

const LOOP_CENTRE = new THREE.Vector3();
LOOP_SRC.forEach((p) => LOOP_CENTRE.add(vec(p)));
LOOP_CENTRE.multiplyScalar(1 / LOOP_SRC.length);

/**
 * Keep-out helpers used by the scatter passes (trees, lamps, props).
 */
export function makeKeepouts(layout, buildings = []) {
  const trackPts = [];
  for (let i = 0; i <= layout.track.samples; i += 4) trackPts.push(layout.track.pts[i]);
  const riverPts = [];
  for (let i = 0; i <= layout.river.samples; i += 3) riverPts.push(layout.river.pts[i]);

  const near = (pts, x, z, r) => {
    const r2 = r * r;
    for (const p of pts) {
      const dx = p.x - x;
      const dz = p.z - z;
      if (dx * dx + dz * dz < r2) return true;
    }
    return false;
  };

  return {
    buildings,
    trackPts,
    riverPts,
    /** Blocked for everything (buildings, platform, bridges...). */
    blocked(x, z, pad = 0) {
      for (const b of buildings) {
        if (
          x > b.x - b.w / 2 - pad && x < b.x + b.w / 2 + pad &&
          z > b.z - b.d / 2 - pad && z < b.z + b.d / 2 + pad
        ) return true;
      }
      return false;
    },
    /** Too close to the rails. */
    nearTrack(x, z, r = 1.0) {
      return near(trackPts, x, z, r);
    },
    /** In or beside the water. */
    nearRiver(x, z, r = 1.7) {
      return near(riverPts, x, z, r);
    },
    nearRoad(x, z, r = 0.85) {
      for (const road of layout.roads) {
        const pts = road.track.pts;
        for (let i = 0; i < pts.length; i += 3) {
          const dx = pts[i].x - x;
          const dz = pts[i].z - z;
          if (dx * dx + dz * dz < r * r) return true;
        }
      }
      return false;
    },
    inTerrain(x, z, pad = 1.0) {
      return (
        Math.abs(x) < TERRAIN_HALF.x - pad && Math.abs(z) < TERRAIN_HALF.z - pad
      );
    },
    /** Combined test used by the scatter pass. */
    free(x, z, opts = {}) {
      const { track: tr = 1.05, river = 1.75, road = 0.8, pad = 0.35 } = opts;
      if (!this.inTerrain(x, z)) return false;
      if (this.blocked(x, z, pad)) return false;
      if (this.nearTrack(x, z, tr)) return false;
      if (this.nearRiver(x, z, river)) return false;
      if (this.nearRoad(x, z, road)) return false;
      for (const c of layout.railCrossings) {
        const dx = c.point.x - x;
        const dz = c.point.z - z;
        if (dx * dx + dz * dz < 4.4 * 4.4) return false;
      }
      if (layout.levelCrossing) {
        const p = layout.levelCrossing.point;
        const dx = p.x - x;
        const dz = p.z - z;
        if (dx * dx + dz * dz < 3.0 * 3.0) return false;
      }
      return true;
    },
  };
}
