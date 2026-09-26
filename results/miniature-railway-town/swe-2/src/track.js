import * as THREE from 'three';
import { M } from './materials.js';

// Arc-length-parameterised closed loop that the train follows.
export class TrackPath {
  constructor(controlPoints, divisions = 1600) {
    const pts3 = controlPoints.map(([x, z]) => new THREE.Vector3(x, 0, z));
    this.curve = new THREE.CatmullRomCurve3(pts3, true, 'centripetal', 0.5);
    this.points = this.curve.getSpacedPoints(divisions); // last == first
    this.cum = [0];
    for (let i = 1; i < this.points.length; i++) {
      this.cum[i] = this.cum[i - 1] + this.points[i].distanceTo(this.points[i - 1]);
    }
    this.length = this.cum[this.cum.length - 1];
  }

  wrap(s) {
    const L = this.length;
    return ((s % L) + L) % L;
  }

  pointAt(s, out = new THREE.Vector3()) {
    s = this.wrap(s);
    const { cum, points } = this;
    let lo = 0, hi = cum.length - 1;
    while (lo < hi - 1) {
      const mid = (lo + hi) >> 1;
      if (cum[mid] <= s) lo = mid; else hi = mid;
    }
    const segLen = cum[hi] - cum[lo] || 1;
    const f = (s - cum[lo]) / segLen;
    return out.copy(points[lo]).lerp(points[hi], f);
  }

  tangentAt(s, out = new THREE.Vector3()) {
    const e = 0.15;
    const a = this.pointAt(s - e, _tmpA);
    const b = this.pointAt(s + e, _tmpB);
    return out.copy(b).sub(a).normalize();
  }

  // Arc position of the point on the loop nearest to (x, z).
  closestS(x, z) {
    let best = 0, bestD = Infinity;
    for (let i = 0; i < this.cum.length; i++) {
      const p = this.points[i];
      const d = (p.x - x) * (p.x - x) + (p.z - z) * (p.z - z);
      if (d < bestD) { bestD = d; best = this.cum[i]; }
    }
    return best;
  }
}

const _tmpA = new THREE.Vector3();
const _tmpB = new THREE.Vector3();

const RAIL_Y = 0.26;          // rail top height
const GAUGE_HALF = 0.36;      // half distance between rails
const SLEEPER_Y = 0.115;
const BALLAST_Y = 0.02;

function curveOffsets(path, s, out = {}) {
  const p = path.pointAt(s, out.p || new THREE.Vector3());
  const t = path.tangentAt(s, out.t || new THREE.Vector3());
  out.n = out.n || new THREE.Vector3();
  out.n.set(-t.z, 0, t.x); // left-hand normal
  out.p = p; out.t = t;
  return out;
}

function buildBallast(path, bridgeRanges) {
  const SEG = 700, half = 0.78;
  const pos = new Float32Array((SEG + 1) * 2 * 3);
  const uv = new Float32Array((SEG + 1) * 2 * 2);
  const idx = [];
  const o = {};
  for (let i = 0; i <= SEG; i++) {
    const s = (i / SEG) * path.length;
    curveOffsets(path, s, o);
    const onBridge = bridgeRanges.some(([a, b]) => s > a && s < b);
    const y = onBridge ? 0.14 : BALLAST_Y; // bridge deck replaces ballast top
    const w = onBridge ? 0.85 : half;
    const k = i * 6;
    pos[k] = o.p.x + o.n.x * w; pos[k + 1] = y; pos[k + 2] = o.p.z + o.n.z * w;
    pos[k + 3] = o.p.x - o.n.x * w; pos[k + 4] = y; pos[k + 5] = o.p.z - o.n.z * w;
    uv[i * 4] = i / SEG * 60; uv[i * 4 + 1] = 0;
    uv[i * 4 + 2] = i / SEG * 60; uv[i * 4 + 3] = 1;
    if (i < SEG) {
      const a = i * 2;
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  const mesh = new THREE.Mesh(g, M.ballast);
  mesh.receiveShadow = true;
  return mesh;
}

function buildSleepers(path, bridgeRanges) {
  const spacing = 0.55;
  const count = Math.floor(path.length / spacing);
  const geo = new THREE.BoxGeometry(1.06, 0.075, 0.27);
  const mesh = new THREE.InstancedMesh(geo, M.sleeper, count);
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const up = new THREE.Vector3(0, 1, 0);
  const o = {};
  const scale = new THREE.Vector3(1, 1, 1);
  for (let i = 0; i < count; i++) {
    const s = (i + 0.5) * spacing;
    curveOffsets(path, s, o);
    const onBridge = bridgeRanges.some(([a, b]) => s > a && s < b);
    q.setFromAxisAngle(up, Math.atan2(o.t.x, o.t.z));
    m.compose(
      new THREE.Vector3(o.p.x, onBridge ? SLEEPER_Y + 0.1 : SLEEPER_Y, o.p.z),
      q, scale,
    );
    mesh.setMatrixAt(i, m);
  }
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function buildRail(path, side) {
  const N = 420;
  const pts = [];
  const o = {};
  for (let i = 0; i < N; i++) {
    const s = (i / N) * path.length;
    curveOffsets(path, s, o);
    pts.push(new THREE.Vector3(
      o.p.x + o.n.x * GAUGE_HALF * side,
      RAIL_Y - 0.045,
      o.p.z + o.n.z * GAUGE_HALF * side,
    ));
  }
  const c = new THREE.CatmullRomCurve3(pts, true);
  const g = new THREE.TubeGeometry(c, 560, 0.045, 6, true);
  const mesh = new THREE.Mesh(g, M.rail);
  mesh.castShadow = true;
  return mesh;
}

// Find arc intervals where the track is over the river band.
function findRiverCrossings(path, z0, z1) {
  const ranges = [];
  let open = null;
  const N = 1200;
  const p = new THREE.Vector3();
  for (let i = 0; i <= N; i++) {
    const s = (i / N) * path.length;
    path.pointAt(s, p);
    const inRiver = p.z > z0 - 0.4 && p.z < z1 + 0.4;
    if (inRiver && open === null) open = s;
    if (!inRiver && open !== null) { ranges.push([open, s]); open = null; }
  }
  if (open !== null) { // wraps past s = L back to 0
    const tail = ranges.length && ranges[0][0] < 0.5 ? ranges.shift() : null;
    ranges.push([open, tail ? tail[1] + path.length : path.length]);
  }
  return ranges.map(([a, b]) => [a - 0.5, Math.min(b + 0.5, a + 20)]);
}

function buildBridge(path, s0, s1) {
  const group = new THREE.Group();
  const o = {};
  const segLen = 0.55;
  const mid = (s0 + s1) / 2;
  const span = s1 - s0;

  // deck + side girders follow the curve in short chords
  for (let s = s0; s < s1 - 0.01; s += segLen) {
    const sEnd = Math.min(s + segLen, s1);
    const a = path.pointAt(s), b = path.pointAt(sEnd);
    const len = a.distanceTo(b) + 0.02;
    const cx = (a.x + b.x) / 2, cz = (a.z + b.z) / 2;
    const yaw = Math.atan2(b.x - a.x, b.z - a.z);
    curveOffsets(path, (s + sEnd) / 2, o);

    const deck = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.1, len), M.steel);
    deck.position.set(cx, 0.09, cz);
    deck.rotation.y = yaw;
    deck.castShadow = deck.receiveShadow = true;
    group.add(deck);

    for (const side of [-1, 1]) {
      const girder = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.62, len), M.girder);
      girder.position.set(
        cx + o.n.x * 0.82 * side,
        -0.1,
        cz + o.n.z * 0.82 * side,
      );
      girder.rotation.y = yaw;
      girder.castShadow = true;
      group.add(girder);
    }
  }

  // stone abutments at both ends + a pier if the span is long
  const ends = [s0 + 0.1, s1 - 0.1];
  if (span > 3.4) ends.push(mid);
  for (const s of ends) {
    curveOffsets(path, s, o);
    const isPier = s === mid;
    const h = isPier ? 0.95 : 0.75;
    const ab = new THREE.Mesh(new THREE.BoxGeometry(2.0, h, isPier ? 0.7 : 1.1), M.stone);
    ab.position.set(o.p.x, -0.45 - h / 2 + 0.45, o.p.z);
    ab.rotation.y = Math.atan2(o.t.x, o.t.z);
    ab.castShadow = ab.receiveShadow = true;
    group.add(ab);
  }
  return group;
}

export function buildTrack(scene, controlPoints, river) {
  const path = new TrackPath(controlPoints);
  const group = new THREE.Group();

  const crossings = findRiverCrossings(path, river.z0, river.z1);
  const bridgeRanges = crossings.map(([a, b]) => [a, Math.min(b, path.length * 1.001)]);

  group.add(buildBallast(path, bridgeRanges));
  group.add(buildSleepers(path, bridgeRanges));
  group.add(buildRail(path, 1));
  group.add(buildRail(path, -1));
  for (const [a, b] of bridgeRanges) group.add(buildBridge(path, a, b));

  // station stop position: south straight, platform centre near x = -1.2
  const stationS = path.closestS(1.6, -11.7);
  const startS = path.wrap(stationS + path.length * 0.45); // start mid-run on north side

  scene.add(group);
  return { path, stationS, startS };
}
