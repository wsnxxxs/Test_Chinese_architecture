/**
 * 几何工具：折线带状面（道路/道砟/河面）、截面扫掠（钢轨/路基）、
 * 以及"按材质合并"的静态网格批处理（减少 draw call）。
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

/** 折线各顶点的平滑法线（带 miter 收敛），返回 [[nx, nz], ...] */
export function polylineNormals(pts, closed = true) {
  const n = pts.length;
  const out = new Array(n);
  for (let i = 0; i < n; i++) {
    const prev = closed || i > 0 ? pts[(i - 1 + n) % n] : pts[i];
    const next = closed || i < n - 1 ? pts[(i + 1) % n] : pts[i];
    const cur = pts[i];
    let ax = cur[0] - prev[0];
    let az = cur[1] - prev[1];
    let bx = next[0] - cur[0];
    let bz = next[1] - cur[1];
    const la = Math.hypot(ax, az) || 1;
    const lb = Math.hypot(bx, bz) || 1;
    ax /= la;
    az /= la;
    bx /= lb;
    bz /= lb;
    // 段法线（旋转 90°）
    const nax = -az;
    const naz = ax;
    const nbx = -bz;
    const nbz = bx;
    let mx = nax + nbx;
    let mz = naz + nbz;
    const ml = Math.hypot(mx, mz) || 1;
    mx /= ml;
    mz /= ml;
    const cosHalf = Math.max(0.35, mx * nax + mz * naz);
    out[i] = [mx / cosHalf, mz / cosHalf];
  }
  return out;
}

/**
 * 平面带状几何（道路、道砟、河面等）
 * pts2d 顶点顺序给出，y 为高度；closed 时首尾相连。
 */
export function flatRibbonGeometry(pts2d, width, y, { closed = false, uRepeat = 1, vRepeat = 1, uScale = 6 } = {}) {
  const n = pts2d.length;
  const normals = polylineNormals(pts2d, closed);
  const half = width / 2;
  const positions = [];
  const uvs = [];
  const indices = [];

  // 弧长
  const cum = [0];
  for (let i = 1; i < n; i++) cum.push(cum[i - 1] + Math.hypot(pts2d[i][0] - pts2d[i - 1][0], pts2d[i][1] - pts2d[i - 1][1]));

  for (let i = 0; i < n; i++) {
    const [x, z] = pts2d[i];
    const [nx, nz] = normals[i];
    positions.push(x + nx * half, y, z + nz * half);
    positions.push(x - nx * half, y, z - nz * half);
    const u = cum[i] / uScale;
    uvs.push(u * uRepeat, vRepeat);
    uvs.push(u * uRepeat, 0);
  }

  const ring = closed ? n : n - 1;
  for (let i = 0; i < ring; i++) {
    const a = i * 2;
    const b = ((i + 1) % n) * 2;
    // 保证绕序朝上 (+Y)
    indices.push(a, b, a + 1);
    indices.push(b, b + 1, a + 1);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

/**
 * 沿折线扫掠一个二维截面（lat, up）
 * profile 为闭合多边形（如钢轨矩形），closed 表示路径闭合。
 */
export function sweepGeometry(pts2d, profile, yUp = 0, { closed = false } = {}) {
  const n = pts2d.length;
  const normals = polylineNormals(pts2d, closed);
  const m = profile.length;
  const positions = [];
  const uvs = [];
  const indices = [];

  const cum = [0];
  for (let i = 1; i < n; i++) cum.push(cum[i - 1] + Math.hypot(pts2d[i][0] - pts2d[i - 1][0], pts2d[i][1] - pts2d[i - 1][1]));

  for (let i = 0; i < n; i++) {
    const [x, z] = pts2d[i];
    const [nx, nz] = normals[i];
    for (let k = 0; k < m; k++) {
      const [lat, up] = profile[k];
      positions.push(x + nx * lat, yUp + up, z + nz * lat);
      uvs.push(cum[i], k / m);
    }
  }

  const rings = closed ? n : n - 1;
  for (let i = 0; i < rings; i++) {
    const base = i * m;
    const nextBase = ((i + 1) % n) * m;
    for (let k = 0; k < m; k++) {
      const k2 = (k + 1) % m;
      const a = base + k;
      const b = base + k2;
      const c = nextBase + k;
      const d = nextBase + k2;
      indices.push(a, c, b);
      indices.push(b, c, d);
    }
  }

  // 端盖（非闭合路径）
  if (!closed) {
    const cap = (ringIdx, flip) => {
      const base = ringIdx * m;
      for (let k = 1; k < m - 1; k++) {
        if (flip) indices.push(base, base + k + 1, base + k);
        else indices.push(base, base + k, base + k + 1);
      }
    };
    cap(0, true);
    cap(n - 1, false);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

/** 折线按偏移量左右外扩（正为左） */
export function offsetPolyline(pts2d, dist, closed = true) {
  const normals = polylineNormals(pts2d, closed);
  return pts2d.map(([x, z], i) => [x + normals[i][0] * dist, z + normals[i][1] * dist]);
}

/**
 * 静态部件按材质合并：
 * parts: [{ geo, mat }]
 * 返回 { geometries, materials } —— 可直接 new THREE.Mesh(mergeGeometries(geometries, true), materials)
 */
export function mergeParts(parts) {
  const byMat = new Map();
  for (let pi = 0; pi < parts.length; pi++) {
    const p = parts[pi];
    let g;
    if (p.pos || p.rot || p.scale) {
      g = xform(p.geo, { pos: p.pos, rot: p.rot, scale: p.scale });
    } else {
      g = p.geo.index ? p.geo.toNonIndexed() : p.geo.clone();
    }
    if (!g.attributes.uv) {
      const count = g.attributes.position.count;
      g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(count * 2), 2));
    }
    // NaN 诊断（定位到具体部件）
    const arr = g.attributes.position.array;
    for (let i = 0; i < arr.length; i++) {
      if (!Number.isFinite(arr[i])) {
        console.error(
          `NAN-PART idx=${pi} geo=${p.geo.type} pos=${JSON.stringify(p.pos)} rot=${JSON.stringify(p.rot)} scale=${JSON.stringify(p.scale)} float=${i}`
        );
        break;
      }
    }
    if (!byMat.has(p.mat)) byMat.set(p.mat, []);
    byMat.get(p.mat).push(g);
  }
  const geometries = [];
  const materials = [];
  for (const [mat, geos] of byMat) {
    const merged = geos.length === 1 ? geos[0] : mergeGeometries(geos, false);
    if (!merged) throw new Error('mergeGeometries failed');
    geometries.push(merged);
    materials.push(mat);
  }
  return { geometries, materials };
}

/** 把部件列表合成一个 Mesh（按材质分组） */
export function buildMergedMesh(parts, { castShadow = true, receiveShadow = true } = {}) {
  const { geometries, materials } = mergeParts(parts);
  const geo = geometries.length === 1 ? geometries[0] : mergeGeometries(geometries, true);
  const mesh = new THREE.Mesh(geo, geometries.length === 1 ? materials[0] : materials);
  mesh.castShadow = castShadow;
  mesh.receiveShadow = receiveShadow;
  return mesh;
}

/** 变换一份几何（不改动原几何） */
export function xform(geo, { pos = [0, 0, 0], rot = [0, 0, 0], scale = [1, 1, 1] } = {}) {
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(rot[0], rot[1], rot[2]));
  m.compose(new THREE.Vector3(pos[0], pos[1], pos[2]), q, new THREE.Vector3(scale[0], scale[1], scale[2]));
  const g = geo.clone();
  g.applyMatrix4(m);
  return g;
}

export function box(w, h, d, opts) {
  return new THREE.BoxGeometry(w, h, d, opts?.wSeg || 1, opts?.hSeg || 1, opts?.dSeg || 1);
}

export function roundedBox(w, h, d, radius = 0.06, segments = 2) {
  return new RoundedBoxGeometry(w, h, d, segments, Math.min(radius, Math.min(w, h, d) / 2 - 0.001));
}

export { mergeGeometries, RoundedBoxGeometry };
