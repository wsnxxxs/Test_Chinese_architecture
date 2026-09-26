import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export { mergeGeometries };

/**
 * Sweeps a 2D cross-section along a chain of frames. Used for the track
 * embankment, ballast and rails so everything follows the same centreline.
 *
 * frames:  [{ px,py,pz, rx,ry,rz, ux,uy,uz }]   (position, right, up)
 * profile: [{ r, u }]                           (lateral, vertical, in frame space)
 */
export function sweepGeometry(frames, profile, { uvScale = 1 } = {}) {
  const F = frames.length;
  const asFn = typeof profile === 'function';
  const profileAt = (f, i) => (asFn ? profile(f, i) : profile);
  const P = profileAt(frames[0], 0).length;
  const pos = new Float32Array(F * P * 3);
  const uv = new Float32Array(F * P * 2);
  const runLen = [0];
  for (let f = 1; f < F; f++) {
    const a = frames[f - 1], b = frames[f];
    runLen.push(runLen[f - 1] + Math.hypot(b.px - a.px, b.py - a.py, b.pz - a.pz));
  }
  let k = 0, m = 0;
  for (let f = 0; f < F; f++) {
    const fr = frames[f];
    const prof = profileAt(fr, f);
    const profLen = [0];
    for (let i = 1; i < P; i++) {
      profLen.push(profLen[i - 1] + Math.hypot(prof[i].r - prof[i - 1].r, prof[i].u - prof[i - 1].u));
    }
    for (let i = 0; i < P; i++) {
      const pr = prof[i];
      pos[k++] = fr.px + fr.rx * pr.r + fr.ux * pr.u;
      pos[k++] = fr.py + fr.ry * pr.r + fr.uy * pr.u;
      pos[k++] = fr.pz + fr.rz * pr.r + fr.uz * pr.u;
      uv[m++] = runLen[f] / uvScale;
      uv[m++] = profLen[i] / uvScale;
    }
  }
  const idx = [];
  for (let f = 0; f < F - 1; f++) {
    for (let i = 0; i < P - 1; i++) {
      const a = f * P + i, b = a + P, c = a + 1, d = b + 1;
      // profile is authored left-to-right, so P x T is the outward normal
      idx.push(a, c, b, c, d, b);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/** Flat ribbon following a Path2: roads, water, footpaths. */
export function ribbonGeometry(path, halfWidth, yFn, { uvScale = 1, widthFn = null } = {}) {
  const step = 0.22;
  const n = Math.max(2, Math.ceil(path.length / step));
  const rows = [];
  let run = 0;
  for (let i = 0; i <= n; i++) {
    const s = (i / n) * path.length;
    const a = path.at(s);
    if (i > 0) run += Math.hypot(a.x - rows[i - 1].x, a.z - rows[i - 1].z);
    rows.push({ x: a.x, z: a.z, nx: a.nx, nz: a.nz, s, run, w: widthFn ? halfWidth * widthFn(i / n) : halfWidth });
  }
  const F = rows.length;
  const pos = new Float32Array(F * 2 * 3);
  const uvs = new Float32Array(F * 2 * 2);
  let k = 0, m = 0;
  for (let f = 0; f < F; f++) {
    const r = rows[f];
    const y = yFn(r.x, r.z, r.s);
    for (const sgn of [-1, 1]) {
      pos[k++] = r.x + r.nx * r.w * sgn;
      pos[k++] = y;
      pos[k++] = r.z + r.nz * r.w * sgn;
      uvs[m++] = (r.w * (sgn + 1)) / uvScale;
      uvs[m++] = r.run / uvScale;
    }
  }
  const idx = [];
  for (let f = 0; f < F - 1; f++) {
    const a = f * 2, b = a + 2;
    // vertex 0 of each pair is on the -normal side, so this order faces +y
    idx.push(a, a + 1, b, a + 1, b + 1, b);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/** Box geometry translated/rotated into place, ready for merging. */
export function box(w, h, d, x = 0, y = 0, z = 0, rotY = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (rotY) g.rotateY(rotY);
  g.translate(x, y, z);
  return g;
}

export function cyl(rTop, rBottom, h, seg, x = 0, y = 0, z = 0, { rotX = 0, rotZ = 0 } = {}) {
  const g = new THREE.CylinderGeometry(rTop, rBottom, h, seg);
  if (rotX) g.rotateX(rotX);
  if (rotZ) g.rotateZ(rotZ);
  g.translate(x, y, z);
  return g;
}

/** Two roof slopes over a w x d footprint, ridge along x, gable ends left open. */
export function gableRoofGeometry(w, d, rise, overhang = 0.08) {
  const hw = w / 2 + overhang, hd = d / 2 + overhang;
  const n0 = [-hw, 0, -hd], n1 = [hw, 0, -hd], s1 = [hw, 0, hd], s0 = [-hw, 0, hd];
  const rl = [-hw, rise, 0], rr = [hw, rise, 0];
  const faces = [[n1, n0, rl], [n1, rl, rr], [s0, s1, rr], [s0, rr, rl]];
  const pos = [], uvs = [];
  for (const t of faces) {
    pos.push(...t[0], ...t[1], ...t[2]);
    uvs.push(0, 0, 1, 0, 0.5, 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  g.computeVertexNormals();
  return g;
}

/** Vertical triangle closing a gable end, in the plane x = sign * w/2. */
export function gableEndGeometry(w, d, rise, sign) {
  const hw = w / 2, hd = d / 2;
  const tri = sign < 0
    ? [[-hw, 0, -hd], [-hw, 0, hd], [-hw, rise, 0]]
    : [[hw, 0, hd], [hw, 0, -hd], [hw, rise, 0]];
  const pos = [], uvs = [];
  for (const v of tri) { pos.push(...v); uvs.push(0, 0, 1, 0, 0.5, 1); }
  void hd;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  g.computeVertexNormals();
  return g;
}

/** Hipped roof over a w x d footprint (pyramid when w === d). */
export function hipRoofGeometry(w, d, rise, eave = 0.1) {
  const hw = w / 2 + eave, hd = d / 2 + eave;
  const ridge = Math.max(0, hw - hd);
  const c0 = [-hw, 0, -hd], c1 = [hw, 0, -hd], c2 = [hw, 0, hd], c3 = [-hw, 0, hd];
  const rL = [-ridge, rise, 0], rR = [ridge, rise, 0];
  const faces = [
    [c1, c0, rL], [c1, rL, rR],
    [c3, c2, rR], [c3, rR, rL],
    [c2, c1, rR], [c0, c3, rL],
  ];
  const pos = [], uvs = [];
  for (const t of faces) {
    pos.push(...t[0], ...t[1], ...t[2]);
    uvs.push(0, 0, 1, 0, 0.5, 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  g.computeVertexNormals();
  return g;
}

/** Extrude a 2D shape (authored in x/y) along z by `depth`. */
export function extrudeShape(shape, depth) {
  return new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false, steps: 1, curveSegments: 20 });
}

/** Merge a list of geometries into one mesh (normalised to non-indexed). */
export function mergedMesh(geometries, material, name = '') {
  const clean = geometries.map((g) => (g.index ? g.toNonIndexed() : g));
  const mesh = new THREE.Mesh(mergeGeometries(clean, false), material);
  mesh.name = name;
  return mesh;
}

export function setShadow(obj, cast = true, receive = true) {
  obj.traverse((o) => {
    if (o.isMesh) { o.castShadow = cast; o.receiveShadow = receive; }
  });
  return obj;
}

/** MeshStandardMaterial with sane model-railway defaults. */
export function mat(opts) {
  return new THREE.MeshStandardMaterial({ roughness: 0.85, metalness: 0.0, ...opts });
}
