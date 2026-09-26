import * as THREE from 'three';
import { ROADS, distanceToTrack, terrainHeight, trackCurve } from './layout.js';
import { sweepProfile, polylineCurve, archWallGeometry, matrixAt } from '../lib/geometry.js';

// ---------------------------------------------------------------------------
// Roads: ribbons that follow the terrain, cut wherever they meet the river or
// the railway. Those cuts are filled with a stone arch bridge (river) and a
// timber level crossing (railway).
// ---------------------------------------------------------------------------

const ROAD_TOP = 0.095;
const CROSS_HALF = 5.2; // road is interrupted this far from the track centre
const CHANNEL_DEPTH = -0.05; // ground lower than this is inside the river channel

function roadProfile(width) {
  const h = width / 2;
  return [
    [-h, 0.02],
    [-h + 0.3, ROAD_TOP],
    [h - 0.3, ROAD_TOP],
    [h, 0.02],
  ];
}

function place(batcher, geo, parentMatrix, local, material, opts) {
  const m = parentMatrix.clone().multiply(matrixAt(local));
  batcher.add(geo, m, material, opts);
}

/** Merged index ranges (in samples) where `test` returns true. */
function flaggedSpans(samples, test) {
  const spans = [];
  let start = -1;
  for (let i = 0; i <= samples; i++) {
    const on = test(i / samples);
    if (on && start < 0) start = i;
    if ((!on || i === samples) && start >= 0) {
      spans.push([start / samples, (on ? i : i - 1) / samples]);
      start = -1;
    }
  }
  return spans;
}

function mergeSpans(spans) {
  const sorted = spans.slice().sort((a, b) => a[0] - b[0]);
  const out = [];
  for (const s of sorted) {
    const last = out[out.length - 1];
    if (last && s[0] <= last[1] + 1e-4) {
      last[1] = Math.max(last[1], s[1]);
    } else {
      out.push([s[0], s[1]]);
    }
  }
  return out;
}

function buildRoadBridge(batcher, M, road, u0, u1) {
  const uc = (u0 + u1) / 2;
  const p = road.curve.getPointAt(uc);
  const t = road.curve.getTangentAt(uc);
  const yaw = Math.atan2(-t.z, t.x);
  const span = (u1 - u0) * road.length;
  const width = road.width + 1.7;
  const base = matrixAt({ pos: [p.x, 0, p.z], rotY: yaw });
  const timber = road.bridge === 'timber';

  if (timber) {
    buildTimberBridge(batcher, M, { base, span, width, p });
    return;
  }

  const wall = archWallGeometry({
    length: span + 0.6,
    depth: width,
    baseY: -2.5,
    topY: 0.0,
    span: 5.6,
    rise: 0.95,
    springY: -1.55,
  });
  batcher.add(wall, base, M.stone, { density: 0.34 });

  place(batcher, new THREE.BoxGeometry(span + 1.1, 0.34, width + 0.1), base, { pos: [0, ROAD_TOP - 0.17, 0] }, M.stoneWarm, {
    density: 0.5,
  });
  for (const s of [-1, 1]) {
    place(
      batcher,
      new THREE.BoxGeometry(span + 1.5, 0.8, 0.36),
      base,
      { pos: [0, 0.38, s * (width / 2 - 0.18)] },
      M.stone,
      { density: 0.55 }
    );
  }
}

/** Plank footbridge on trestles - used by the mill path. */
function buildTimberBridge(batcher, M, { base, span, width, p }) {
  const bed = terrainHeight(p.x, p.z);
  place(batcher, new THREE.BoxGeometry(span + 0.4, 0.26, width), base, { pos: [0, ROAD_TOP - 0.13, 0] }, M.plank, {
    density: 0.28,
  });
  // trestles standing in the river
  for (const s of [-1, 1]) {
    for (const lx of [-span * 0.22, span * 0.22]) {
      const h = ROAD_TOP - bed;
      place(batcher, new THREE.BoxGeometry(0.26, h, 0.26), base, { pos: [lx, bed + h / 2, s * (width / 2 - 0.3)] }, M.timber, {
        density: 1.1,
      });
    }
  }
  for (const lx of [-span * 0.22, span * 0.22]) {
    place(batcher, new THREE.BoxGeometry(0.3, 0.24, width), base, { pos: [lx, ROAD_TOP - 0.5, 0] }, M.timber, { density: 1 });
  }
  // handrails
  for (const s of [-1, 1]) {
    for (let i = 0; i <= 6; i++) {
      const lx = -span / 2 + (span * i) / 6;
      place(batcher, new THREE.BoxGeometry(0.12, 1.0, 0.12), base, { pos: [lx, ROAD_TOP + 0.5, s * (width / 2 - 0.06)] }, M.timber, {
        density: 1.1,
      });
    }
    place(
      batcher,
      new THREE.BoxGeometry(span + 0.2, 0.12, 0.12),
      base,
      { pos: [0, ROAD_TOP + 1.0, s * (width / 2 - 0.06)] },
      M.timber,
      { density: 1 }
    );
    place(
      batcher,
      new THREE.BoxGeometry(span + 0.2, 0.1, 0.1),
      base,
      { pos: [0, ROAD_TOP + 0.55, s * (width / 2 - 0.06)] },
      M.timber,
      { density: 1 }
    );
  }
}

function buildLevelCrossing(batcher, M, p, tangent, roadWidth) {
  const len = roadWidth + 0.9;
  const a = p.clone().addScaledVector(tangent, -len / 2);
  const b = p.clone().addScaledVector(tangent, len / 2);
  const mid = a.clone().add(b).multiplyScalar(0.5);
  const curve = polylineCurve(
    [
      [a.x, a.z],
      [mid.x, mid.z],
      [b.x, b.z],
    ],
    false,
    0.5
  );
  // deck ramps up from the road surface onto the ballast shoulders
  const deck = sweepProfile(curve, {
    profile: [
      [-CROSS_HALF, 0.09],
      [-3.0, 0.44],
      [-0.78, 0.44],
      [0.78, 0.44],
      [3.0, 0.44],
      [CROSS_HALF, 0.09],
    ],
    samples: 10,
    uDensity: 0.3,
    vDensity: 0.55,
  });
  batcher.add(deck, null, M.plank, { density: 0.4, project: false });

  // planks between the rails, just below rail head height
  const planks = sweepProfile(curve, {
    profile: [
      [-0.78, 0.42],
      [0.78, 0.42],
      [0.78, 0.58],
      [-0.78, 0.58],
    ],
    samples: 6,
    closedProfile: true,
    uDensity: 0.6,
    vDensity: 0.6,
  });
  batcher.add(planks, null, M.plank, { density: 0.4, project: false });

  // crossbuck signs beside each approach
  const n = new THREE.Vector3(tangent.z, 0, -tangent.x).normalize();
  const yaw = Math.atan2(-tangent.z, tangent.x);
  const base = matrixAt({ pos: [p.x, 0, p.z], rotY: yaw });
  for (const sa of [-1, 1]) {
    for (const sb of [-1, 1]) {
      const lx = sa * (roadWidth / 2 + 1.0);
      const lz = sb * 5.9;
      const post = new THREE.CylinderGeometry(0.075, 0.09, 1.25, 8);
      place(batcher, post, base, { pos: [lx, 0.63, lz] }, M.steelDark, {
        density: 0.6,
        project: false,
      });
      for (const rot of [Math.PI / 4, -Math.PI / 4]) {
        const slat = new THREE.BoxGeometry(1.2, 0.18, 0.06);
        const m = base
          .clone()
          .multiply(matrixAt({ pos: [lx, 1.18, lz], rotY: Math.PI / 2 }))
          .multiply(new THREE.Matrix4().makeRotationZ(rot));
        batcher.add(slat, m, M.trim, { density: 1.2, project: false });
      }
    }
  }
}

export function buildRoads(scene, M, batcher) {
  const group = new THREE.Group();
  group.name = 'roads';
  const crossings = [];
  const bridges = [];

  for (const road of ROADS) {
    const samples = 700;
    const p = new THREE.Vector3();
    const length = road.length;

    const gaps = [];
    for (const [s0, s1] of flaggedSpans(samples, (u) => {
      road.curve.getPointAt(u, p);
      return terrainHeight(p.x, p.z) < CHANNEL_DEPTH;
    })) {
      gaps.push({ u0: s0 - 2.6 / length, u1: s1 + 2.6 / length, type: 'river' });
    }
    for (const [s0, s1] of flaggedSpans(samples, (u) => {
      road.curve.getPointAt(u, p);
      return distanceToTrack(p.x, p.z) < CROSS_HALF;
    })) {
      gaps.push({ u0: s0 - 0.5 / length, u1: s1 + 0.5 / length, type: 'rail' });
    }
    const merged = mergeSpans(gaps.map((g) => [Math.max(0, g.u0), Math.min(1, g.u1)]));

    // ribbon segments between the gaps
    const segments = [];
    let cursor = 0;
    for (const [g0, g1] of merged) {
      if (g0 - cursor > 0.002) segments.push([cursor, g0]);
      cursor = Math.max(cursor, g1);
    }
    if (1 - cursor > 0.002) segments.push([cursor, 1]);

    const material = road.surface === 'asphalt' ? M.asphaltRoad : M.gravelRoad;
    for (const [s0, s1] of segments) {
      const seg = sweepProfile(road.curve, {
        profile: roadProfile(road.width),
        uStart: s0,
        uEnd: s1,
        samples: Math.max(3, Math.round(((s1 - s0) * length) / 1.4)),
        uDensity: 0.22,
        vDensity: 0.22,
      });
      batcher.add(seg, null, material, { density: 0.3, project: false, cast: false });
    }

    // fill the gaps
    for (const [g0, g1] of merged) {
      const uc = (g0 + g1) / 2;
      road.curve.getPointAt(uc, p);
      const t = road.curve.getTangentAt(uc);
      const isRiver = terrainHeight(p.x, p.z) < CHANNEL_DEPTH;
      if (isRiver) {
        buildRoadBridge(batcher, M, road, g0, g1);
        bridges.push({ road: road.id, type: road.bridge === 'timber' ? 'timber' : 'arch', x: +p.x.toFixed(1), z: +p.z.toFixed(1) });
      } else {
        const tp = trackPointNear(p.x, p.z);
        buildLevelCrossing(batcher, M, tp.point, tp.tangent, road.width);
        crossings.push({ road: road.id, x: +tp.point.x.toFixed(1), z: +tp.point.z.toFixed(1) });
      }
    }
  }

  batcher.build(group);
  scene.add(group);
  return { crossings, bridges };
}

const _trackPoint = new THREE.Vector3();
export function trackPointNear(x, z) {
  let bestU = 0;
  let best = Infinity;
  for (let i = 0; i < 900; i++) {
    const u = i / 900;
    trackCurve.getPointAt(u, _trackPoint);
    const d = (_trackPoint.x - x) ** 2 + (_trackPoint.z - z) ** 2;
    if (d < best) {
      best = d;
      bestU = u;
    }
  }
  const point = trackCurve.getPointAt(bestU).clone();
  const tangent = trackCurve.getTangentAt(bestU).clone();
  return { u: bestU, point, tangent };
}
