import * as THREE from 'three';
import {
  trackCurve,
  TRACK_LENGTH,
  RAIL,
  SIDING,
  channelSpans,
  yawFromTangent,
  inwardSign,
  terrainHeight,
} from './layout.js';
import { sweepProfile, archWallGeometry, matrixAt } from '../lib/geometry.js';

// ---------------------------------------------------------------------------
// The railway: ballast, sleepers and two continuous rails around the loop,
// interrupted only where two bridges carry the line over the river.
// ---------------------------------------------------------------------------

const RAIL_PROFILE = [
  [-0.075, RAIL.railBase],
  [-0.075, RAIL.railTop],
  [0.075, RAIL.railTop],
  [0.075, RAIL.railBase],
];

const BALLAST_PROFILE = [
  [-RAIL.ballastBaseHalf, 0.0],
  [-RAIL.ballastTopHalf, RAIL.ballastTop],
  [RAIL.ballastTopHalf, RAIL.ballastTop],
  [RAIL.ballastBaseHalf, 0.0],
];

function segmentsFromGaps(gaps) {
  const segs = [];
  let cursor = 0;
  for (const g of gaps) {
    if (g.u0 - cursor > 0.0015) segs.push([cursor, g.u0]);
    cursor = Math.max(cursor, g.u1);
  }
  if (1 - cursor > 0.0015) segs.push([cursor, 1]);
  return segs;
}

function addTrackFurniture(batcher, M, curve, { uStart = 0, uEnd = 1, gaps = [], length, ballast = true, sleepers = true, rails = true }) {
  const span = Math.abs(uEnd - uStart);
  if (ballast) {
    for (const [s0, s1] of segmentsFromGaps(gaps)) {
      const a = uStart + span * s0;
      const b = uStart + span * s1;
      if (b - a < 0.0015) continue;
      const seg = sweepProfile(curve, {
        profile: BALLAST_PROFILE,
        uStart: a,
        uEnd: b,
        samples: Math.max(3, Math.round(((b - a) * length) / 2.2)),
        uDensity: 0.25,
        vDensity: 0.3,
      });
      batcher.add(seg, null, M.ballast, { density: 0.42, project: false, cast: false });
    }
  }

  if (sleepers) {
    // sleepers run the whole way round, resting on the ballast on land and on
    // the bridge decks over the river
    const count = Math.floor(length / RAIL.sleeperSpacing);
    const geo = new THREE.BoxGeometry(RAIL.sleeperWidth, RAIL.sleeperHeight, RAIL.sleeperLength);
    for (let i = 0; i < count; i++) {
      const u = (i / count) * span + uStart;
      if (u > uEnd) break;
      const p = curve.getPointAt(u % 1);
      const yaw = Math.atan2(-curve.getTangentAt(u % 1).z, curve.getTangentAt(u % 1).x);
      const m = matrixAt({ pos: [p.x, RAIL.ballastTop + RAIL.sleeperHeight / 2, p.z], rotY: yaw });
      batcher.add(geo, m, M.sleeper, { density: 0.8 });
    }
  }

  if (rails) {
    for (const side of [-1, 1]) {
      const profile = RAIL_PROFILE.map(([o, h]) => [o + (side * RAIL.gauge) / 2, h]);
      const geo = sweepProfile(curve, {
        profile,
        uStart,
        uEnd,
        samples: Math.max(8, Math.round((span * length) / 0.9)),
        closedProfile: true,
        uDensity: 0.6,
        vDensity: 0.6,
      });
      batcher.add(geo, null, M.rail, { density: 0.8, project: false, cast: false });
    }
  }
}

/** Steel plate girder bridge on stone piers. */
function buildGirderBridge(batcher, M, span, uCentre) {
  const p = trackCurve.getPointAt(uCentre);
  const t = trackCurve.getTangentAt(uCentre);
  const yaw = Math.atan2(-t.z, t.x);
  const base = matrixAt({ pos: [p.x, 0, p.z], rotY: yaw });
  const len = span.width + 5.5;

  const place = (geo, local, mat, opts) => batcher.add(geo, base.clone().multiply(matrixAt(local)), mat, opts);

  place(new THREE.BoxGeometry(len, 0.46, 4.6), { pos: [0, RAIL.ballastTop - 0.23, 0] }, M.steelDark, { density: 0.45, cast: false });
  for (const s of [-1, 1]) {
    place(new THREE.BoxGeometry(len, 1.35, 0.26), { pos: [0, -0.42, s * 2.35] }, M.steel, { density: 0.5 });
    place(new THREE.BoxGeometry(len, 0.2, 0.7), { pos: [0, -1.02, s * 2.35] }, M.steel, { density: 0.6 });
    // riveted stiffeners
    for (let i = 1; i < 9; i++) {
      const x = -len / 2 + (len * i) / 9;
      place(new THREE.BoxGeometry(0.16, 1.2, 0.36), { pos: [x, -0.42, s * 2.35] }, M.steelDark, { density: 0.9 });
    }
    // handrail
    for (let i = 0; i <= 6; i++) {
      const x = -len / 2 + (len * i) / 6;
      place(new THREE.BoxGeometry(0.1, 0.85, 0.1), { pos: [x, 0.72, s * 2.45] }, M.steelDark, { density: 0.9 });
    }
    place(new THREE.BoxGeometry(len, 0.09, 0.09), { pos: [0, 1.1, s * 2.45] }, M.steelDark, { density: 1.1 });
    place(new THREE.BoxGeometry(len, 0.07, 0.07), { pos: [0, 0.72, s * 2.45] }, M.steelDark, { density: 1.1 });
  }

  // under deck cross bracing
  for (let i = 0; i < 7; i++) {
    const x = -len / 2 + (len * (i + 0.5)) / 7;
    place(new THREE.BoxGeometry(0.12, 0.12, 4.4), { pos: [x, -1.02, 0] }, M.steelDark, { density: 1, cast: false });
  }

  // two stone piers standing in the river
  const bed = terrainHeight(p.x, p.z);
  for (const s of [-1, 1]) {
    const pierH = RAIL.ballastTop - 0.46 - (bed - 0.6);
    place(
      new THREE.CylinderGeometry(0.8, 1.15, pierH, 10),
      { pos: [s * 3.4, bed - 0.6 + pierH / 2, 0] },
      M.stone,
      { density: 0.5, project: false }
    );
  }
}

/** Stone arch viaduct. */
function buildArchBridge(batcher, M, span, uCentre) {
  const p = trackCurve.getPointAt(uCentre);
  const t = trackCurve.getTangentAt(uCentre);
  const yaw = Math.atan2(-t.z, t.x);
  const base = matrixAt({ pos: [p.x, 0, p.z], rotY: yaw });
  const len = span.width + 5.0;
  const width = 5.0;

  const wall = archWallGeometry({
    length: len,
    depth: width,
    baseY: -2.5,
    topY: -0.02,
    span: 7.0,
    rise: 1.15,
    springY: -2.05,
  });
  batcher.add(wall, base, M.stone, { density: 0.3, project: false });

  const place = (geo, local, mat, opts) => batcher.add(geo, base.clone().multiply(matrixAt(local)), mat, opts);
  place(new THREE.BoxGeometry(len + 0.4, 0.44, width + 0.2), { pos: [0, RAIL.ballastTop - 0.22, 0] }, M.stoneWarm, {
    density: 0.5,
  });
  for (const s of [-1, 1]) {
    place(new THREE.BoxGeometry(len + 0.5, 0.72, 0.38), { pos: [0, 0.45, s * (width / 2 - 0.19)] }, M.stone, { density: 0.55 });
  }
}

function buildSiding(batcher, M) {
  const length = SIDING.curve.getLength();
  addTrackFurniture(batcher, M, SIDING.curve, {
    uStart: 0,
    uEnd: 1,
    length,
    ballast: true,
    sleepers: true,
    rails: true,
  });

  // buffer stop at the dead end
  const p = SIDING.curve.getPointAt(1);
  const t = SIDING.curve.getTangentAt(1);
  const yaw = Math.atan2(-t.z, t.x);
  const base = matrixAt({ pos: [p.x, 0, p.z], rotY: yaw });
  const place = (geo, local, mat, opts) => batcher.add(geo, base.clone().multiply(matrixAt(local)), mat, opts);
  place(new THREE.BoxGeometry(0.5, 0.7, 3.2), { pos: [-0.5, 0.75, 0] }, M.ironDark, { density: 0.7 });
  place(new THREE.BoxGeometry(1.0, 0.3, 1.4), { pos: [-1.0, 0.6, 0] }, M.ironDark, { density: 0.7 });
}

function buildTelegraph(batcher, M) {
  const sign = inwardSign(0);
  const poles = 12;
  const tops = [];
  const poleGeo = new THREE.CylinderGeometry(0.11, 0.15, 4.3, 8);
  for (let i = 0; i < poles; i++) {
    const u = (i / poles + 0.012) % 1;
    const p = trackCurve.getPointAt(u);
    const t = trackCurve.getTangentAt(u);
    let nx = t.z;
    let nz = -t.x;
    const l = Math.hypot(nx, nz) || 1;
    nx /= l;
    nz /= l;
    // outward side of the loop
    const s = -inwardSign(u);
    // keep poles away from the station platform
    const off = 5.4;
    const x = p.x + nx * s * off;
    const z = p.z + nz * s * off;
    const yaw = Math.atan2(-t.z, t.x);
    const base = matrixAt({ pos: [x, 0, z], rotY: yaw });
    batcher.add(poleGeo, base, M.timber, { density: 0.6, project: false });
    batcher.add(
      new THREE.BoxGeometry(0.14, 0.14, 1.6),
      base.clone().multiply(matrixAt({ pos: [0, 3.85, 0] })),
      M.timber,
      { density: 1 }
    );
    batcher.add(
      new THREE.BoxGeometry(0.14, 0.14, 1.2),
      base.clone().multiply(matrixAt({ pos: [0, 3.35, 0] })),
      M.timber,
      { density: 1 }
    );
    tops.push([new THREE.Vector3(x, 3.95, z).add(new THREE.Vector3(nx * s, 0, nz * s).multiplyScalar(0)), yaw]);
  }

  // sagging wires between consecutive poles
  for (let i = 0; i < tops.length; i++) {
    const a = tops[i][0];
    const b = tops[(i + 1) % tops.length][0];
    if (a.distanceTo(b) > 40) continue;
    for (const lat of [-0.7, 0.7]) {
      const dir = b.clone().sub(a);
      const perp = new THREE.Vector3(-dir.z, 0, dir.x).normalize().multiplyScalar(lat);
      const p0 = a.clone().add(perp);
      const p1 = b.clone().add(perp);
      const mid = p0.clone().add(p1).multiplyScalar(0.5);
      mid.y -= 0.55;
      const curve = new THREE.CatmullRomCurve3([p0, mid, p1]);
      const tube = new THREE.TubeGeometry(curve, 8, 0.035, 3, false);
      batcher.add(tube, null, M.ironDark, { density: 1, project: false, cast: false });
    }
  }
}

function buildSignals(batcher, M) {
  for (const [u, side] of [
    [SIDING.uStart - 0.02, 1],
    [SIDING.uEnd + 0.02, -1],
  ]) {
    const p = trackCurve.getPointAt((u + 1) % 1);
    const t = trackCurve.getTangentAt((u + 1) % 1);
    const nx = t.z;
    const nz = -t.x;
    const l = Math.hypot(nx, nz) || 1;
    const s = -inwardSign(u) * side;
    const x = p.x + (nx / l) * 4.6 * s;
    const z = p.z + (nz / l) * 4.6 * s;
    const base = matrixAt({ pos: [x, 0, z], rotY: Math.atan2(-t.z, t.x) });
    batcher.add(new THREE.CylinderGeometry(0.1, 0.14, 3.2, 8), base, M.ironDark, { density: 0.5, project: false });
    batcher.add(
      new THREE.BoxGeometry(0.12, 0.12, 1.1),
      base.clone().multiply(matrixAt({ pos: [0, 2.7, s * 0.5] })),
      M.ironDark,
      { density: 1 }
    );
  }
}

export function buildRailway(scene, M, batcher) {
  const group = new THREE.Group();
  group.name = 'railway';

  const spans = channelSpans(trackCurve, { samples: 1200, threshold: -0.05, pad: 3.2 });
  const gaps = spans.map((s) => ({ u0: s.u0, u1: s.u1 }));

  addTrackFurniture(batcher, M, trackCurve, {
    uStart: 0,
    uEnd: 1,
    length: TRACK_LENGTH,
    gaps,
    ballast: true,
    sleepers: true,
    rails: true,
  });

  spans.forEach((span, i) => {
    if (i % 2 === 0) {
      buildGirderBridge(batcher, M, span, span.centre);
    } else {
      buildArchBridge(batcher, M, span, span.centre);
    }
  });

  buildSiding(batcher, M);
  buildTelegraph(batcher, M);
  buildSignals(batcher, M);

  batcher.build(group);
  scene.add(group);
  return { spans, group };
}
