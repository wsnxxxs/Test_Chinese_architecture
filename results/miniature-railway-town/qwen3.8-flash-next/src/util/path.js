import { clamp, wrap } from './mathx.js';

/**
 * A planar polyline with arc-length parameterisation and nearest-point queries.
 * Curves are densified once, so every consumer (train, rails, terrain masking,
 * water ribbons, tree scattering) samples the exact same centreline.
 */
export class Path2 {
  /** @param {Array<{x:number,z:number}>} pts  @param {number} closed  @param {number} step */
  constructor(pts, closed = false, step = 0.12) {
    this.closed = closed;
    this.pts = densify(pts, closed, step);
    this.cum = [0];
    for (let i = 1; i < this.pts.length; i++) {
      this.cum.push(this.cum[i - 1] + dist(this.pts[i - 1], this.pts[i]));
    }
    if (closed) this.pts.push(this.pts[0]);
    this.length = this.cum[this.cum.length - 1];
    this._buildIndex();
  }

  /** Index of the polyline sample nearest to s (monospace grid for cheap queries). */
  _buildIndex(cell = 1.0) {
    this.cell = cell;
    this.grid = new Map();
    for (let i = 0; i < this.pts.length; i++) {
      const p = this.pts[i];
      const gx = Math.floor(p.x / cell), gz = Math.floor(p.z / cell);
      const key = gx + ',' + gz;
      let arr = this.grid.get(key);
      if (!arr) this.grid.set(key, (arr = []));
      arr.push(i);
    }
  }

  /** Uniform-arc-length point. s wraps when closed. */
  at(s) {
    const L = this.length;
    let d = this.closed ? wrap(s, L) : clamp(s, 0, L);
    let lo = 0, hi = this.cum.length - 1;
    while (lo < hi - 1) {
      const mid = (lo + hi) >> 1;
      if (this.cum[mid] <= d) lo = mid; else hi = mid;
    }
    const segLen = this.cum[lo + 1] - this.cum[lo] || 1e-6;
    const t = clamp((d - this.cum[lo]) / segLen, 0, 1);
    const a = this.pts[lo], b = this.pts[lo + 1];
    const dx = b.x - a.x, dz = b.z - a.z;
    const n = Math.hypot(dx, dz) || 1;
    return {
      x: a.x + dx * t,
      z: a.z + dz * t,
      tx: dx / n,
      tz: dz / n,
      // left-hand normal in the XZ plane
      nx: -dz / n,
      nz: dx / n,
    };
  }

  /** Shortest distance from (x,z) to the centreline. */
  distanceTo(x, z, maxRange = Infinity) {
    const cell = this.cell;
    const gx = Math.floor(x / cell), gz = Math.floor(z / cell);
    const r = Math.ceil(Math.min(maxRange, 6) / cell) + 1;
    let best = Infinity, bestS = 0, bestIdx = -1;
    for (let ix = gx - r; ix <= gx + r; ix++) {
      for (let iz = gz - r; iz <= gz + r; iz++) {
        const arr = this.grid.get(ix + ',' + iz);
        if (!arr) continue;
        for (const i of arr) {
          const p = this.pts[i];
          const d = Math.hypot(p.x - x, p.z - z);
          if (d < best) { best = d; bestS = this.cum[i]; bestIdx = i; }
        }
      }
    }
    if (bestIdx < 0) {
      for (let i = 0; i < this.pts.length; i++) {
        const p = this.pts[i];
        const d = Math.hypot(p.x - x, p.z - z);
        if (d < best) { best = d; bestS = this.cum[i]; }
      }
    }
    return { dist: best, s: bestS, index: bestIdx };
  }
}

function dist(a, b) { return Math.hypot(b.x - a.x, b.z - a.z); }

function densify(pts, closed, step) {
  const out = [];
  const n = pts.length;
  const segs = closed ? n : n - 1;
  for (let i = 0; i < segs; i++) {
    const a = pts[i], b = pts[(i + 1) % n];
    const len = dist(a, b);
    const k = Math.max(1, Math.ceil(len / step));
    for (let j = 0; j < k; j++) {
      const t = j / k;
      out.push({ x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t });
    }
  }
  if (!closed) out.push({ ...pts[n - 1] });
  return out;
}

/** Sample a rounded-rectangle racetrack centreline into raw control points. */
export function roundedRectPoints({ halfX, halfZ, r, cornerSteps = 26 }) {
  const pts = [];
  const corner = (cx, cz, a0, a1) => {
    for (let i = 0; i <= cornerSteps; i++) {
      const a = a0 + ((a1 - a0) * i) / cornerSteps;
      pts.push({ x: cx + Math.cos(a) * r, z: cz + Math.sin(a) * r });
    }
  };
  const sx = halfX - r, sz = halfZ - r;
  // s = 0 at the south end of the west straight, running north
  pts.push({ x: -halfX, z: sz });
  corner(-sx, -sz, Math.PI, Math.PI * 1.5);   // NW -> north straight
  corner(sx, -sz, Math.PI * 1.5, Math.PI * 2); // NE -> east straight
  corner(sx, sz, 0, Math.PI / 2);              // SE -> south straight (westbound)
  corner(-sx, sz, Math.PI / 2, Math.PI);       // SW -> back onto the west straight
  return dedupe(pts);
}

function dedupe(pts) {
  const out = [];
  for (const p of pts) {
    const last = out[out.length - 1];
    if (!last || Math.hypot(last.x - p.x, last.z - p.z) > 1e-4) out.push(p);
  }
  return out;
}

/**
 * Catmull-Rom (centripetal) smoothing of an open polyline, used for rivers and roads
 * so authored control points read as hand-laid curves rather than polygons.
 */
export function smoothPolyline(pts, closed = false, samplesPerSeg = 12) {
  const P = pts.slice();
  if (closed) { P.unshift(pts[pts.length - 1]); P.push(pts[0], pts[1]); }
  else { P.unshift(pts[0]); P.push(pts[pts.length - 1]); }
  const out = [];
  const segs = P.length - 3;
  for (let i = 0; i < segs; i++) {
    const p0 = P[i], p1 = P[i + 1], p2 = P[i + 2], p3 = P[i + 3];
    for (let j = 0; j < samplesPerSeg; j++) {
      const t = j / samplesPerSeg;
      out.push({ x: cr(p1.x, p2.x, p0.x, p3.x, t), z: cr(p1.z, p2.z, p0.z, p3.z, t) });
    }
  }
  if (!closed) out.push({ ...pts[pts.length - 1] });
  return dedupe(out);
}

function cr(a, b, c, d, t) {
  const t2 = t * t, t3 = t2 * t;
  return 0.5 * (2 * a + (-c + b) * t + (2 * c - 5 * a + 4 * b - d) * t2 + (3 * a - 3 * b + d - c) * t3);
}
