// Height-field roof generator for Chinese-style roofs.
//
//  * The roof is described by half-plane "edges" (rectangle, octagon, gable pair ...).
//    rho = horizontal distance from the eave line, measured to the nearest active edge.
//  * height(rho) is a concave "cove" profile (steep at the ridge, flat at the eave),
//    plus a small eave-tip curl and a corner lift that produces the flying corners (翘角).
//  * The column tops are rasterised into a watertight shell with tile stripes, ridge caps,
//    rafter underside, gable walls, beasts and ridge ornaments.
import { M } from '../voxel/palette.js';

const NONE = -32768;

export function rectEdges(A, B, limits = {}) {
  const lx = limits.x ?? Infinity;
  const lz = limits.z ?? Infinity;
  return [
    { nx: 1, nz: 0, c: A, limit: lx },
    { nx: -1, nz: 0, c: A, limit: lx },
    { nx: 0, nz: 1, c: B, limit: lz },
    { nx: 0, nz: -1, c: B, limit: lz },
  ];
}

/** Only the two long eaves (gable roofs). */
export function gableEdges(B) {
  return [
    { nx: 0, nz: 1, c: B, limit: Infinity },
    { nx: 0, nz: -1, c: B, limit: Infinity },
  ];
}

/** Regular octagon with inradius r. */
export function octEdges(r) {
  const k = Math.SQRT1_2;
  const e = [];
  for (const [nx, nz] of [
    [1, 0], [-1, 0], [0, 1], [0, -1],
    [k, k], [-k, k], [k, -k], [-k, -k],
  ]) e.push({ nx, nz, c: r, limit: Infinity });
  return e;
}

export function octVerts(r) {
  const R = r / Math.cos(Math.PI / 8);
  const v = [];
  for (let i = 0; i < 8; i++) {
    const a = Math.PI / 8 + (i * Math.PI) / 4;
    v.push([R * Math.cos(a), R * Math.sin(a)]);
  }
  return v;
}

export function rectVerts(A, B) {
  return [[A, B], [-A, B], [A, -B], [-A, -B]];
}

/** Un-lifted height of the roof surface at distance rho from the eave (float). */
export function roofProfile(s, rho) {
  const p = s.p ?? 1.55;
  const curl = s.curl ?? [2, 3];
  let h = s.y0 + s.H * Math.pow(Math.min(rho, s.rhoMax) / s.rhoMax, p);
  if (curl[0] > 0 && rho < curl[1]) h += curl[0] * (1 - rho / curl[1]) ** 2;
  return h;
}

/**
 * @param {Brush} b
 * @param {object} s
 *  A,B            bounding half extents (ints) of the footprint
 *  skip(x,z)      optional predicate: columns to leave un-roofed (skirt roofs)
 *  edges          half-plane list (see helpers)
 *  verts          eave corner points for the upturned corners
 *  y0             y of the eave base
 *  H, rhoMax, p   rise, run to ridge, curve exponent
 *  curl           [height, tau] of the eave-tip upturn
 *  lift           {L, T} corner lift height / radius
 *  thick          shell thickness
 *  ceilY          y where the solid interior fill stops (roof plate above walls)
 *  wallRho        rho >= wallRho counts as "above the walls" (filled down to ceilY)
 *  innerRho       columns with rho > innerRho are not roofed (skirt roofs)
 *  gableAt        for hip-and-gable: dxe == gableAt marks the gable wall column
 *  ridgeH         extra voxels for ridge caps (default 1)
 *  hipW           width of the hip ridge detection band
 *  beasts         put "walking beasts" on hip ridges
 *  chiwen         ridge end ornaments
 *  finial         {h, color} apex ornament
 *  colors         { tileA, tileB, ridge, trim, face:[a,b], rafter:[a,b], gable, gableTrim, ceil, beast }
 */
export function buildRoof(b, s) {
  const { A, B, edges, y0, H, rhoMax } = s;
  const p = s.p ?? 1.55;
  const thick = s.thick ?? 2;
  const curl = s.curl ?? [2, 3];
  const lift = s.lift ?? { L: 0, T: 10 };
  const verts = s.verts ?? [];
  const innerRho = s.innerRho ?? Infinity;
  const wallRho = s.wallRho ?? Infinity;
  const plateRho = s.plateRho ?? wallRho - 2.5;
  const ceilY = s.ceilY ?? y0;
  const ridgeH = s.ridgeH ?? 1;
  const hipW = s.hipW ?? 0.75;
  const C = s.colors;
  const W = 2 * A + 1;
  const D = 2 * B + 1;

  const top = new Int16Array(W * D).fill(NONE);
  const rhoA = new Float32Array(W * D);
  const kind = new Uint8Array(W * D); // 1 tile, 2 main ridge, 3 hip ridge
  const stripeAxis = new Uint8Array(W * D); // 0: stripe by x, 1: by z, 2: by |x|-|z|
  const gableCol = new Uint8Array(W * D);
  const I = (x, z) => x + A + (z + B) * W;

  for (let z = -B; z <= B; z++) {
    for (let x = -A; x <= A; x++) {
      let m1 = Infinity;
      let m2 = Infinity;
      let e1 = -1;
      let outside = false;
      let gableTouch = false;
      for (let i = 0; i < edges.length; i++) {
        const e = edges[i];
        let d = e.c - (e.nx * x + e.nz * z);
        if (d < -1e-6) {
          outside = true;
          break;
        }
        if (d > e.limit) {
          if (d <= e.limit + 1) gableTouch = true;
          d = Infinity;
        }
        if (d < m1) {
          m2 = m1;
          m1 = d;
          e1 = i;
        } else if (d < m2) m2 = d;
      }
      if (outside || !isFinite(m1)) continue;
      const rho = m1;
      if (rho > innerRho + 1e-6) continue;
      if (s.skip && s.skip(x, z)) continue;

      const rr = Math.min(rho, rhoMax);
      let hf = y0 + H * Math.pow(rr / rhoMax, p);
      if (curl[0] > 0 && rho < curl[1]) {
        const k = 1 - rho / curl[1];
        hf += curl[0] * k * k;
      }
      if (lift.L > 0) {
        let best = 0;
        for (let i = 0; i < verts.length; i++) {
          const dx = x - verts[i][0];
          const dz = z - verts[i][1];
          const dd = Math.hypot(dx, dz);
          if (dd < lift.T) {
            const k = 1 - dd / lift.T;
            const v = lift.L * k * k;
            if (v > best) best = v;
          }
        }
        hf += best;
      }
      let t = Math.round(hf);
      const idx = I(x, z);
      let kd = 1;
      if (rho >= rhoMax - 0.01) kd = 2;
      else if (isFinite(m2) && m2 - m1 <= hipW && rho >= 1.5) kd = 3;
      if (kd > 1) t += ridgeH;
      top[idx] = t;
      rhoA[idx] = rho;
      kind[idx] = kd;
      const e = edges[e1];
      stripeAxis[idx] = e.nx !== 0 && e.nz !== 0 ? 2 : e.nx !== 0 ? 1 : 0;
      gableCol[idx] = (gableTouch && rho >= 0) || (s.endGable && Math.abs(x) === A) ? 1 : 0;
    }
  }

  const topAt = (x, z) => (x < -A || x > A || z < -B || z > B ? NONE : top[I(x, z)]);
  const stripe = (x, z, ax) => (ax === 0 ? x : ax === 1 ? z : Math.abs(x) - Math.abs(z)) & 1;

  const beastRho = new Set(s.beasts ? [3, 5, 7, 9, 11] : []);
  let ridgeMinX = Infinity;
  let ridgeMaxX = -Infinity;
  let ridgeTop = 0;
  let apex = null;

  for (let z = -B; z <= B; z++) {
    for (let x = -A; x <= A; x++) {
      const idx = I(x, z);
      const t = top[idx];
      if (t === NONE) continue;
      const rho = rhoA[idx];
      const kd = kind[idx];
      const interior = rho >= wallRho - 0.01;
      let bottom = interior ? Math.min(ceilY, t) : t - thick + 1;
      // near the walls the shell rests on top of the bracket band
      if (!interior && rho >= plateRho) bottom = Math.min(Math.max(bottom, ceilY), t);
      // watertight steps: reach down to lower neighbours
      const nb = [topAt(x + 1, z), topAt(x - 1, z), topAt(x, z + 1), topAt(x, z - 1)];
      for (let i = 0; i < 4; i++) if (nb[i] !== NONE && nb[i] + 1 < bottom) bottom = nb[i] + 1;
      const ax = stripeAxis[idx];
      const st = stripe(x, z, ax);

      for (let y = bottom; y <= t; y++) {
        let id;
        const isTop = y === t;
        if (isTop && kd > 1 && ridgeH > 0) {
          id = C.ridge;
        } else if (isTop || (kd > 1 && y === t - 1 && ridgeH > 0)) {
          id = rho < 0.5 ? C.trim : st ? C.tileB : C.tileA;
          if (isTop && gableCol[idx] && s.gableAt !== undefined) id = C.gableTrim ?? id;
        } else {
          // exposed sides / underside
          let sideExposed = false;
          let outward = false;
          for (let i = 0; i < 4; i++) {
            if (nb[i] === NONE) {
              outward = true;
              sideExposed = true;
            } else if (nb[i] < y) sideExposed = true;
          }
          if (y === bottom && !interior) {
            id = C.rafter[st];
          } else if (outward && rho < 1.5) {
            id = C.face[st];
          } else if (sideExposed && gableCol[idx] && C.gable !== undefined) {
            id = (z & 3) === 0 ? C.gableTrim ?? C.gable : C.gable;
          } else if (y === bottom) {
            id = C.ceil ?? C.rafter[0];
          } else {
            id = st ? C.tileB : C.tileA;
          }
        }
        b.set(x, y, z, id);
      }

      if (kd === 2) {
        if (z === 0) {
          if (x < ridgeMinX) ridgeMinX = x;
          if (x > ridgeMaxX) ridgeMaxX = x;
        }
        ridgeTop = Math.max(ridgeTop, t);
        if (x === 0 && z === 0) apex = t;
      }
      if (kd === 3 && beastRho.has(Math.round(rho)) && C.beast !== undefined) {
        b.set(x, t + 1, z, C.beast);
      }
    }
  }

  // 鸱吻: dragon-tail ornaments at both ends of the main ridge
  if (s.chiwen && isFinite(ridgeMinX) && ridgeMaxX > ridgeMinX) {
    const col = C.chiwen ?? C.ridge;
    for (const dir of [1, -1]) {
      const xe = dir === 1 ? ridgeMaxX : ridgeMinX;
      const t = topAt(xe, 0);
      for (const [u, y, zw] of CHIWEN) {
        for (let zz = -zw; zz <= zw; zz++) b.set(xe + dir * u, t + y, zz, col);
      }
      // little eye
      b.set(xe + dir * 1, t + 3, 0, s.chiwenEye ?? C.gableTrim ?? col);
    }
  }

  // 宝顶 finial for pyramid roofs
  if (s.finial && apex !== null) {
    const ty = topAt(0, 0);
    const layers = s.finial.layers ?? DEFAULT_FINIAL;
    for (let i = 0; i < layers.length; i++) {
      const [r, cid] = layers[i];
      if (r === 0) b.set(0, ty + 1 + i, 0, cid);
      else if (r === 1) b.box(-1, ty + 1 + i, -1, 1, ty + 1 + i, 1, cid);
      else b.cyl(0, 0, r, ty + 1 + i, ty + 1 + i, cid);
    }
  }
  return { top, topAt, ridgeTop, ridgeMinX, ridgeMaxX };
}

// [u (outward), y (above ridge top), z half width]
const CHIWEN = [
  [-1, 1, 1], [0, 1, 1], [1, 1, 1],
  [-1, 2, 1], [0, 2, 1], [1, 2, 1],
  [0, 3, 1], [1, 3, 1],
  [0, 4, 0], [1, 4, 0],
  [-1, 5, 0], [0, 5, 0],
  [-1, 6, 0],
];

// gourd finial, [radius, palette id] per layer (ids are filled in by callers via colors)
const DEFAULT_FINIAL = [
  [1, M.GOLD_D],
  [0, M.GOLD],
  [1, M.GOLD],
  [1, M.GOLD_L],
  [0, M.GOLD],
  [0, M.GOLD],
  [0, M.GOLD_L],
];
