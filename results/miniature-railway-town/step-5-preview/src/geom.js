/**
 * Geometry + motion helpers shared by the sandbox modules.
 */
import * as THREE from 'three';

export const mulberry32 = (seed) => {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

export const lerp = (a, b, t) => a + (b - a) * t;
export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

/**
 * A closed Catmull-Rom curve wrapped with an arc-length lookup table, so the
 * train can be driven by real distance instead of the curve's own parameter.
 */
export class PathTrack {
  constructor(points, { closed = true, tension = 0.5, samples = 1600 } = {}) {
    this.curve = new THREE.CatmullRomCurve3(points, closed, 'catmullrom', tension);
    this.closed = closed;
    this.samples = samples;
    this.pts = new Array(samples + 1);
    this.cum = new Float64Array(samples + 1);
    for (let i = 0; i <= samples; i++) {
      this.pts[i] = this.curve.getPoint(i / samples);
      if (i > 0) {
        this.cum[i] = this.cum[i - 1] + this.pts[i].distanceTo(this.pts[i - 1]);
      }
    }
    this.length = this.cum[samples];
  }

  /** Position at arc length d (wraps on closed loops, clamps on open paths). */
  position(d, out = new THREE.Vector3()) {
    const n = this.samples;
    let dd = d;
    if (this.closed) {
      dd = d % this.length;
      if (dd < 0) dd += this.length;
    } else {
      dd = Math.min(this.length, Math.max(0, d));
    }
    let lo = 0;
    let hi = n;
    while (hi - lo > 1) {
      const mid = (lo + hi) >> 1;
      if (this.cum[mid] <= dd) lo = mid;
      else hi = mid;
    }
    const seg = this.cum[lo + 1] - this.cum[lo] || 1e-6;
    const t = (dd - this.cum[lo]) / seg;
    out.copy(this.pts[lo]).lerp(this.pts[lo + 1], t);
    return out;
  }

  /** Unit tangent at arc length d. */
  tangent(d, out = new THREE.Vector3()) {
    const e = 0.12;
    const a = this.position(d - e, _t1);
    const b = this.position(d + e, _t2);
    out.copy(b).sub(a).normalize();
    return out;
  }

  /**
   * Orthonormal frame at d: p (position), t (tangent), n (horizontal left
   * normal with lateral offset 0 sitting on the centre line).
   */
  frame(d, out = {}) {
    const p = this.position(d, out.p || (out.p = new THREE.Vector3()));
    const t = this.tangent(d, out.t || (out.t = new THREE.Vector3()));
    const n = out.n || (out.n = new THREE.Vector3());
    n.set(t.z, 0, -t.x).normalize();
    return out;
  }

  /** Arc length of the sample closest to a world point (xz plane). */
  distanceToPoint(x, z) {
    let best = 0;
    let bestD = Infinity;
    for (let i = 0; i <= this.samples; i++) {
      const dx = this.pts[i].x - x;
      const dz = this.pts[i].z - z;
      const d2 = dx * dx + dz * dz;
      if (d2 < bestD) {
        bestD = d2;
        best = i;
      }
    }
    return this.cum[best];
  }
}

const _t1 = new THREE.Vector3();
const _t2 = new THREE.Vector3();

/**
 * Accumulates non-indexed triangles for precise control over UVs and winding.
 */
export class StripBuilder {
  constructor() {
    this.pos = [];
    this.nor = [];
    this.uv = [];
  }

  addQuad(a, b, c, d, ua, ub, uc, ud, normalHint) {
    const area = _ab.copy(b).sub(a).cross(_cd.copy(d).sub(a));
    const flip = normalHint ? area.dot(normalHint) < 0 : false;
    const [v0, v1, v2, v3] = flip ? [a, d, c, b] : [a, b, c, d];
    const [w0, w1, w2, w3] = flip ? [ua, ud, uc, ub] : [ua, ub, uc, ud];
    const tri = (p1, p2, p3, uv1, uv2, uv3) => {
      this.pos.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z);
      this.uv.push(uv1[0], uv1[1], uv2[0], uv2[1], uv3[0], uv3[1]);
      const n = _ab.copy(p2).sub(p1).cross(_cd.copy(p3).sub(p1)).normalize();
      for (let i = 0; i < 3; i++) this.nor.push(n.x, n.y, n.z);
    };
    tri(v0, v1, v2, w0, w1, w2);
    tri(v0, v2, v3, w0, w2, w3);
  }

  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    return g;
  }
}

const _ab = new THREE.Vector3();
const _cd = new THREE.Vector3();
const _nA = new THREE.Vector3();

/**
 * Extrudes a rectangular cross-section (width across, y0..y1) along a PathTrack
 * between two arc lengths — used for rails, ballast, bridge beams and platforms.
 */
export function stripAlongPath(track, d0, d1, {
  lateral = 0,
  width = 0.2,
  y0 = 0,
  y1 = 0.2,
  uvScale = 1,
  uvV = null,
  sides = true,
  top = true,
  caps = true,
  step = 0.22,
} = {}) {
  const b = new StripBuilder();
  const span = Math.abs(d1 - d0);
  const steps = Math.max(2, Math.ceil(span / step));
  const dir = Math.sign(d1 - d0) || 1;
  const frames = [];
  for (let i = 0; i <= steps; i++) {
    const f = { p: new THREE.Vector3(), t: new THREE.Vector3(), n: new THREE.Vector3() };
    track.frame(d0 + dir * (span * i) / steps, f);
    frames.push(f);
  }
  const a = new THREE.Vector3();
  const bP = new THREE.Vector3();
  const cP = new THREE.Vector3();
  const dP = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);

  // Corner on the swept cross-section: step index i, side (-1/+1), height y.
  const at = (i, side, y, out) => {
    const f = frames[i];
    out.copy(f.p).addScaledVector(f.n, lateral + side * width / 2);
    out.y = y;
    return out;
  };
  const normalAt = (i, side, out) => out.copy(frames[i].n).multiplyScalar(side).normalize();

  for (let i = 0; i < steps; i++) {
    const u0 = (span * i) / steps * uvScale;
    const u1 = (span * (i + 1)) / steps * uvScale;
    const dv = y1 - y0;
    const vAt = (s) => (uvV == null ? (s + 1) / 2 : (s * width) / 2 / uvV + lateral / uvV);
    if (top) {
      b.addQuad(
        at(i, -1, y1, a), at(i + 1, -1, y1, bP),
        at(i + 1, 1, y1, cP), at(i, 1, y1, dP),
        [u0, vAt(-1)], [u1, vAt(-1)], [u1, vAt(1)], [u0, vAt(1)], up,
      );
    }
    if (sides) {
      at(i, 1, y0, a); at(i + 1, 1, y0, bP); at(i + 1, 1, y1, cP); at(i, 1, y1, dP);
      b.addQuad(a, bP, cP, dP, [u0, vAt(1)], [u1, vAt(1)], [u1, dv / 1], [u0, dv / 1], normalAt(i, 1, _nA));
      at(i, -1, y0, a); at(i + 1, -1, y0, bP); at(i + 1, -1, y1, cP); at(i, -1, y1, dP);
      b.addQuad(a, bP, cP, dP, [u0, vAt(-1)], [u1, vAt(-1)], [u1, dv / 1], [u0, dv / 1], normalAt(i, -1, _nA));
    }
  }

  if (caps) {
    const c0 = new THREE.Vector3().copy(frames[0].t).multiplyScalar(-dir);
    const c1 = new THREE.Vector3().copy(frames[steps].t).multiplyScalar(dir);
    capping(b, at(0, -1, y0, a), at(0, 1, y0, bP), at(0, 1, y1, cP), at(0, -1, y1, dP), c0);
    capping(b, at(steps, -1, y1, a), at(steps, 1, y1, bP), at(steps, 1, y0, cP), at(steps, -1, y0, dP), c1);
  }
  return b.build();
}

function capping(b, a, c, d, e, normal) {
  b.addQuad(a, c, d, e, [0, 0], [0, 1], [1, 1], [1, 0], normal);
}

/**
 * Like stripAlongPath but the top edge ramps from yA (at d0) down to yB (at d1),
 * stepped into `steps` treads — used for bridge approach ramps.
 */
export function slopedStrip(track, d0, d1, {
  lateral = 0,
  width = 0.2,
  yA = 0.4,
  yB = 0,
  yBase = 0,
  steps = 6,
  uvScale = 1,
} = {}) {
  const b = new StripBuilder();
  const f = { p: new THREE.Vector3(), t: new THREE.Vector3(), n: new THREE.Vector3() };
  const a = new THREE.Vector3();
  const bP = new THREE.Vector3();
  const cP = new THREE.Vector3();
  const dP = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);
  const at = (d, side, y, out) => {
    track.frame(d, f);
    out.copy(f.p).addScaledVector(f.n, lateral + side * width / 2);
    out.y = y;
    return out;
  };
  for (let i = 0; i < steps; i++) {
    const da = d0 + (d1 - d0) * (i / steps);
    const db = d0 + (d1 - d0) * ((i + 1) / steps);
    const ya = yA + (yB - yA) * (i / steps);
    const yb = yA + (yB - yA) * ((i + 1) / steps);
    const u0 = (i / steps) * 2 * uvScale;
    const u1 = ((i + 1) / steps) * 2 * uvScale;
    b.addQuad(
      at(da, -1, ya, a), at(db, -1, yb, bP), at(db, 1, yb, cP), at(da, 1, ya, dP),
      [u0, 0], [u1, 0], [u1, 1], [u0, 1], up,
    );
    for (const side of [1, -1]) {
      const hint = new THREE.Vector3();
      at(da, side, 0, hint).multiplyScalar(-1); // frame normal, pointing outwards
      hint.set(-hint.x, 0, -hint.z).normalize();
      b.addQuad(
        at(db, side, yb, a), at(db, side, yBase, bP), at(da, side, yBase, cP), at(da, side, ya, dP),
        [u1, 0], [u1, 1], [u0, 1], [u0, 0], hint,
      );
    }
  }
  return b.build();
}

/**
 * Box geometry whose UVs are measured in world units (one texture tile per
 * `uv` units), so a single shared texture can be stretched over the whole
 * sandbox without per-face texture clones.
 */
export function worldUVBox(w, h, d, uv = 1) {
  const b = new StripBuilder();
  const x = w / 2;
  const y = h / 2;
  const z = d / 2;
  const V = (lx, ly, lz) => new THREE.Vector3(lx, ly, lz);
  const u = (lx) => (lx + x) / uv;
  const v = (ly) => (ly + y) / uv;
  const vZ = (lz) => (lz + z) / uv;
  // top / bottom
  b.addQuad(
    V(-x, y, -z), V(x, y, -z), V(x, y, z), V(-x, y, z),
    [u(-x), vZ(-z)], [u(x), vZ(-z)], [u(x), vZ(z)], [u(-x), vZ(z)], UP_VEC,
  );
  b.addQuad(
    V(-x, -y, z), V(x, -y, z), V(x, -y, -z), V(-x, -y, -z),
    [u(-x), vZ(z)], [u(x), vZ(z)], [u(x), vZ(-z)], [u(-x), vZ(-z)], new THREE.Vector3(0, -1, 0),
  );
  // +x / -x
  b.addQuad(
    V(x, -y, z), V(x, -y, -z), V(x, y, -z), V(x, y, z),
    [vZ(z), v(-y)], [vZ(-z), v(-y)], [vZ(-z), v(y)], [vZ(z), v(y)], new THREE.Vector3(1, 0, 0),
  );
  b.addQuad(
    V(-x, -y, -z), V(-x, -y, z), V(-x, y, z), V(-x, y, -z),
    [vZ(-z), v(-y)], [vZ(z), v(-y)], [vZ(z), v(y)], [vZ(-z), v(y)], new THREE.Vector3(-1, 0, 0),
  );
  // +z / -z
  b.addQuad(
    V(x, -y, -z), V(-x, -y, -z), V(-x, y, -z), V(x, y, -z),
    [u(x), v(-y)], [u(-x), v(-y)], [u(-x), v(y)], [u(x), v(y)], new THREE.Vector3(0, 0, -1),
  );
  b.addQuad(
    V(-x, -y, z), V(x, -y, z), V(x, y, z), V(-x, y, z),
    [u(-x), v(-y)], [u(x), v(-y)], [u(x), v(y)], [u(-x), v(y)], new THREE.Vector3(0, 0, 1),
  );
  return b.build();
}

const UP_VEC = new THREE.Vector3(0, 1, 0);

/** Simple flat box helper. */
export function box(w, h, d, mat, x = 0, y = 0, z = 0, ry = 0, options = {}) {  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  m.rotation.y = ry;
  m.castShadow = options.castShadow !== false;
  m.receiveShadow = options.receiveShadow !== false;
  return m;
}

/** Flat horizontal plate sitting at height y. */
export function plate(w, d, y, h, mat, x = 0, z = 0, ry = 0, options = {}) {
  return box(w, h, d, mat, x, y + h / 2, z, ry, options);
}

/** Triangular-prism gable roof: width across, depth along z, height of ridge. */
export function gableRoof(w, d, h) {
  const shape = new THREE.Shape();
  shape.moveTo(-w / 2, 0);
  shape.lineTo(w / 2, 0);
  shape.lineTo(0, h);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: d, bevelEnabled: false, steps: 1 });
  geo.translate(0, 0, -d / 2);
  return geo;
}

/** Curved (barrel) roof built from an open half cylinder. */
export function barrelRoof(w, d, h) {
  const geo = new THREE.CylinderGeometry(w / 2, w / 2, d, 14, 1, true, 0, Math.PI);
  geo.rotateZ(Math.PI / 2);
  geo.rotateY(Math.PI / 2);
  geo.scale(1, 1, 1);
  return geo;
}

/** Rectangle-to-quad list helper used by the road network. */
export function rectsToGeometry(rects, { y = 0, h = 0.04, uvScale = 0.25 } = {}) {
  const b = new StripBuilder();
  const UP = new THREE.Vector3(0, 1, 0);
  for (const r of rects) {
    const [x, z, w, d, ry = 0] = r;
    const cos = Math.cos(ry);
    const sin = Math.sin(ry);
    const hw = w / 2;
    const hd = d / 2;
    const cornerAt = (lx, lz, yy) => {
      const vx = x + lx * cos - lz * sin;
      const vz = z + lx * sin + lz * cos;
      return new THREE.Vector3(vx, yy, vz);
    };
    const a = cornerAt(-hw, -hd, y);
    const bb = cornerAt(hw, -hd, y);
    const c = cornerAt(hw, hd, y);
    const dd = cornerAt(-hw, hd, y);
    b.addQuad(a, bb, c, dd, [0, 0], [w * uvScale, 0], [w * uvScale, d * uvScale], [0, d * uvScale], UP);
    const a2 = cornerAt(-hw, -hd, y + h);
    const b2 = cornerAt(hw, -hd, y + h);
    const c2 = cornerAt(hw, hd, y + h);
    const d2 = cornerAt(-hw, hd, y + h);
    b.addQuad(a, a2, b2, bb, [0, 0], [0, h], [w * uvScale, h], [w * uvScale, 0], new THREE.Vector3(0, 0, -1));
    b.addQuad(bb, c2, d2, dd, [0, 0], [0, h], [d * uvScale, h], [d * uvScale, 0], new THREE.Vector3(1, 0, 0));
    b.addQuad(c, c2, d2, dd, [0, 0], [0, h], [w * uvScale, h], [w * uvScale, 0], new THREE.Vector3(0, 0, 1));
    b.addQuad(dd, d2, a2, a, [0, 0], [0, h], [d * uvScale, h], [d * uvScale, 0], new THREE.Vector3(-1, 0, 0));
  }
  return b.build();
}

/** Distance from point to segment, in the xz plane. */
export function distToSeg(px, pz, ax, az, bx, bz) {
  const abx = bx - ax;
  const abz = bz - az;
  const l2 = abx * abx + abz * abz;
  let t = l2 === 0 ? 0 : ((px - ax) * abx + (pz - az) * abz) / l2;
  t = clamp(t, 0, 1);
  const cx = ax + abx * t;
  const cz = az + abz * t;
  return { d: Math.hypot(px - cx, pz - cz), t, x: cx, z: cz };
}
