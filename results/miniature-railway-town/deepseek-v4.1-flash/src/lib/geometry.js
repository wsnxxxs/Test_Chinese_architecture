import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// ---------------------------------------------------------------------------
// Geometry helpers: profile sweeping (rails, roads, ballast, river), UV
// projection with a constant "texel per world unit" density, and a static
// geometry batcher that merges the whole town into a handful of draw calls.
// ---------------------------------------------------------------------------

const _p = new THREE.Vector3();
const _t = new THREE.Vector3();

export function wrapU(u) {
  return ((u % 1) + 1) % 1;
}

/**
 * Sweep a 2D profile [[offset, height], ...] along a curve.
 * offset runs along the horizontal normal of the curve, height is added to yBase.
 */
export function sweepProfile(
  curve,
  {
    profile,
    uStart = 0,
    uEnd = 1,
    samples = 240,
    yBase = 0,
    uDensity = 1,
    vDensity = 1,
    closedProfile = false,
    flip = false,
  } = {}
) {
  const pts = closedProfile ? [...profile, profile[0]] : profile;
  const M = pts.length;
  const N = samples;

  // cumulative length across the profile, used for V
  const vLen = [0];
  for (let j = 1; j < M; j++) {
    vLen.push(vLen[j - 1] + Math.hypot(pts[j][0] - pts[j - 1][0], pts[j][1] - pts[j - 1][1]));
  }

  const total = curve.getLength();
  const span = Math.abs(uEnd - uStart) * total;
  const positions = new Float32Array((N + 1) * M * 3);
  const uvs = new Float32Array((N + 1) * M * 2);
  const indices = [];

  let k = 0;
  let k2 = 0;
  for (let i = 0; i <= N; i++) {
    const f = i / N;
    const u = wrapU(uStart + (uEnd - uStart) * f);
    curve.getPointAt(u, _p);
    curve.getTangentAt(u, _t);
    const nx = _t.z;
    const nz = -_t.x;
    const len = Math.hypot(nx, nz) || 1;
    const su = span * f * uDensity;
    for (let j = 0; j < M; j++) {
      const off = pts[j][0];
      const hy = pts[j][1];
      positions[k++] = _p.x + (nx / len) * off;
      positions[k++] = yBase + hy;
      positions[k++] = _p.z + (nz / len) * off;
      uvs[k2++] = su;
      uvs[k2++] = vLen[j] * vDensity;
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M - 1; j++) {
      const a = i * M + j;
      const b = (i + 1) * M + j;
      const c = (i + 1) * M + j + 1;
      const d = i * M + j + 1;
      if (flip) {
        indices.push(a, c, b, a, d, c);
      } else {
        indices.push(a, b, c, a, c, d);
      }
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

/** Build an open curve that follows `base` while offset sideways by offsetAt(u). */
export function offsetCurve(base, { uStart = 0, uEnd = 1, offsetAt, samples = 120, closed = false }) {
  const points = [];
  for (let i = 0; i <= samples; i++) {
    const f = i / samples;
    const u = wrapU(uStart + (uEnd - uStart) * f);
    base.getPointAt(u, _p);
    base.getTangentAt(u, _t);
    const nx = _t.z;
    const nz = -_t.x;
    const len = Math.hypot(nx, nz) || 1;
    const off = offsetAt(f, u);
    points.push(new THREE.Vector3(_p.x + (nx / len) * off, 0, _p.z + (nz / len) * off));
  }
  return new THREE.CatmullRomCurve3(points, closed, 'catmullrom', 0.5);
}

export function polylineCurve(points, closed = false, tension = 0.5) {
  return new THREE.CatmullRomCurve3(
    points.map((p) => (p.isVector3 ? p.clone() : new THREE.Vector3(p[0], 0, p[1]))),
    closed,
    'catmullrom',
    tension
  );
}

/**
 * Rewrite UVs so that every face gets texels at a constant world density,
 * projected on its dominant axis. Keeps textures the same size over big and
 * small parts, which is what sells the miniature look.
 */
export function boxProjectUV(geometry, density = 1) {
  if (!geometry.attributes.normal) geometry.computeVertexNormals();
  const pos = geometry.attributes.position;
  const nor = geometry.attributes.normal;
  const uv = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    const nx = Math.abs(nor.getX(i));
    const ny = Math.abs(nor.getY(i));
    const nz = Math.abs(nor.getZ(i));
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    let u;
    let v;
    if (ny >= nx && ny >= nz) {
      u = x;
      v = z;
    } else if (nx >= nz) {
      u = z;
      v = y;
    } else {
      u = x;
      v = y;
    }
    uv[i * 2] = u * density;
    uv[i * 2 + 1] = v * density;
  }
  geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return geometry;
}

/** Planar (top down) UV projection - used by the terrain height field. */
export function planarUV(geometry, density = 1) {
  const pos = geometry.attributes.position;
  const uv = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    uv[i * 2] = pos.getX(i) * density;
    uv[i * 2 + 1] = pos.getZ(i) * density;
  }
  geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return geometry;
}

/** Sloped masonry wall with a shallow segmental arch opening (railway bridge). */
export function archWallGeometry({ length, depth, baseY, topY, span, rise, springY, segments = 22 }) {
  const shape = new THREE.Shape();
  shape.moveTo(-length / 2, baseY);
  shape.lineTo(length / 2, baseY);
  shape.lineTo(length / 2, topY);
  shape.lineTo(-length / 2, topY);
  shape.closePath();

  const R = (span * span) / 4 / (2 * rise) + rise / 2;
  const cy = springY + rise - R;
  const a0 = Math.atan2(springY - cy, -span / 2);
  const a1 = Math.atan2(springY - cy, span / 2);

  const hole = new THREE.Path();
  const floor = baseY + Math.min(0.25, (springY - baseY) * 0.4);
  hole.moveTo(-span / 2, floor);
  hole.lineTo(-span / 2, springY);
  hole.absarc(0, cy, R, a0, a1, true);
  hole.lineTo(span / 2, floor);
  hole.closePath();
  shape.holes.push(hole);

  const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false, curveSegments: segments });
  geo.translate(0, 0, -depth / 2);
  return geo;
}

/** Curved (barrel) roof, used for coaches and the station canopy. */
export function curvedRoofGeometry(width, depth, rise, segments = 14) {
  const shape = new THREE.Shape();
  shape.moveTo(-width / 2, 0);
  shape.quadraticCurveTo(0, rise * 2, width / 2, 0);
  shape.lineTo(width / 2, -0.06);
  shape.quadraticCurveTo(0, rise * 2 - 0.12, -width / 2, -0.06);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false, curveSegments: segments });
  geo.translate(0, 0, -depth / 2);
  return geo;
}

export function gableRoofGeometry(width, depth, rise) {
  const shape = new THREE.Shape();
  shape.moveTo(-width / 2, 0);
  shape.lineTo(width / 2, 0);
  shape.lineTo(0, rise);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false });
  geo.translate(0, 0, -depth / 2);
  return geo;
}

/** Hip / pyramid roof: a ridge along X with `ridge` as a fraction of width. */
export function hipRoofGeometry(width, depth, height, ridge = 0.4) {
  const hw = width / 2;
  const hd = depth / 2;
  const rx = (width * ridge) / 2;
  const v = [
    [-hw, 0, -hd],
    [hw, 0, -hd],
    [hw, 0, hd],
    [-hw, 0, hd],
    [-rx, height, 0],
    [rx, height, 0],
  ];
  const faces = [
    [3, 2, 5, 3, 5, 4],
    [1, 0, 4, 1, 4, 5],
    [0, 3, 4],
    [2, 1, 5],
  ];
  const positions = [];
  for (const f of faces) {
    for (const idx of f) positions.push(v[idx][0], v[idx][1], v[idx][2]);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.computeVertexNormals();
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array((positions.length / 3) * 2), 2));
  return geo;
}

export function transformGeometry(geo, { pos = [0, 0, 0], rotY = 0, rotX = 0, rotZ = 0, scale = 1 } = {}) {
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(rotX, rotY, rotZ, 'YXZ'));
  const s = typeof scale === 'number' ? new THREE.Vector3(scale, scale, scale) : new THREE.Vector3(...scale);
  m.compose(new THREE.Vector3(...pos), q, s);
  geo.applyMatrix4(m);
  return geo;
}

/**
 * Collects static geometry and merges it per material, so the finished diorama
 * draws in ~20 calls instead of ~900.
 */
export class GeometryBatcher {
  constructor() {
    this.groups = new Map();
    this.triangles = 0;
  }

  add(geometry, matrix, material, { cast = true, receive = true, density = 0.4, project = true } = {}) {
    let geo = geometry.index ? geometry.toNonIndexed() : geometry.clone();
    if (matrix) geo.applyMatrix4(matrix);
    if (!geo.attributes.normal) geo.computeVertexNormals();
    if (project) boxProjectUV(geo, density);
    if (geo.attributes.uv1) geo.deleteAttribute('uv1');
    if (geo.attributes.tangent) geo.deleteAttribute('tangent');
    const key = `${material.uuid}|${cast ? 1 : 0}|${receive ? 1 : 0}`;
    if (!this.groups.has(key)) {
      this.groups.set(key, { material, cast, receive, list: [] });
    }
    this.groups.get(key).list.push(geo);
    this.triangles += geo.attributes.position.count / 3;
    return geo;
  }

  addTransformed(geometry, opts = {}, material, batcherOpts) {
    return this.add(transformGeometry(geometry, opts), null, material, batcherOpts);
  }

  build(parent) {
    const meshes = [];
    for (const { material, cast, receive, list } of this.groups.values()) {
      const merged = mergeGeometries(list, false);
      list.forEach((g) => g.dispose());
      const mesh = new THREE.Mesh(merged, material);
      mesh.castShadow = cast;
      mesh.receiveShadow = receive;
      mesh.matrixAutoUpdate = false;
      mesh.updateMatrix();
      parent.add(mesh);
      meshes.push(mesh);
    }
    this.groups.clear();
    return meshes;
  }
}

export function matrixAt({ pos = [0, 0, 0], rotY = 0, scale = 1 }) {
  const s = typeof scale === 'number' ? new THREE.Vector3(scale, scale, scale) : new THREE.Vector3(...scale);
  return new THREE.Matrix4().compose(
    new THREE.Vector3(...pos),
    new THREE.Quaternion().setFromEuler(new THREE.Euler(0, rotY, 0)),
    s
  );
}
