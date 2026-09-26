import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/* ────────────────────────── 颜色工具 ────────────────────────── */

const _c1 = new THREE.Color();
const _c2 = new THREE.Color();

/** sRGB hex → 线性空间的 [r,g,b]（写入 vertex color 属性用） */
export function rgb(hex) {
  _c1.set(hex);
  return [_c1.r, _c1.g, _c1.b];
}

export function mixHex(a, b, t) {
  _c1.set(a);
  _c2.set(b);
  return _c1.lerp(_c2, t).getHex();
}

/** 明度缩放：k>1 提亮，k<1 压暗 */
export function shade(hex, k) {
  _c1.set(hex);
  _c1.setRGB(Math.min(1, _c1.r * k), Math.min(1, _c1.g * k), Math.min(1, _c1.b * k));
  return _c1.getHex();
}

export function jitterHex(hex, rng, amt = 0.06) {
  return shade(hex, 1 + (rng.f() * 2 - 1) * amt);
}

export function sat(hex, k) {
  _c1.set(hex);
  const l = _c1.r * 0.3 + _c1.g * 0.6 + _c1.b * 0.1;
  _c1.setRGB(l + (_c1.r - l) * k, l + (_c1.g - l) * k, l + (_c1.b - l) * k);
  return _c1.getHex();
}

/* ────────────────────────── 基础体块 ────────────────────────── */

export function box(w, h, d) {
  return new THREE.BoxGeometry(w, h, d);
}
export function cyl(rt, rb, h, seg = 10) {
  return new THREE.CylinderGeometry(rt, rb, h, seg);
}
export function sphere(r, w = 10, h = 7) {
  return new THREE.SphereGeometry(r, w, h);
}
export function coneGeo(r, h, seg = 9) {
  return new THREE.ConeGeometry(r, h, seg);
}

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _v = new THREE.Vector3();
const _s = new THREE.Vector3(1, 1, 1);

/** 平移 / 旋转 / 缩放，返回新 geometry */
export function xf(geo, px = 0, py = 0, pz = 0, ry = 0, sx = 1, sy = 1, sz = 1, rx = 0, rz = 0) {
  _e.set(rx, ry, rz);
  _q.setFromEuler(_e);
  _v.set(px, py, pz);
  _s.set(sx, sy, sz);
  _m.compose(_v, _q, _s);
  return geo.clone().applyMatrix4(_m);
}

const _p1 = new THREE.Vector3();
const _p2 = new THREE.Vector3();
const _p3 = new THREE.Vector3();
const _e1 = new THREE.Vector3();
const _e2 = new THREE.Vector3();
const _n = new THREE.Vector3();

/**
 * 由面片生成几何体。facesList: [ [[x,y,z], ...] ]
 * 每面独立法线（平面着色）——手工模型的观感靠它。
 * 顶点顺序需保证从外侧看为逆时针。
 */
export function faces(facesList) {
  const pos = [];
  const nor = [];
  const uv = [];
  for (const f of facesList) {
    _p1.fromArray(f[0]);
    _p2.fromArray(f[1]);
    _p3.fromArray(f[2] ? f[2] : f[0]);
    _e1.subVectors(_p2, _p1);
    _e2.subVectors(_p3, _p1);
    _n.crossVectors(_e1, _e2).normalize();
    for (const p of f) {
      pos.push(p[0], p[1], p[2]);
      nor.push(_n.x, _n.y, _n.z);
      uv.push(0, 0);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  return g;
}

/** 双坡屋顶，屋脊沿 X，overhang 为出檐 */
export function gableRoof(w, d, h, overhang = 0.16) {
  const hw = w / 2 + overhang;
  const hd = d / 2 + overhang;
  return faces([
    [[-hw, 0, hd], [hw, 0, hd], [hw, h, 0], [-hw, h, 0]],          // 前坡
    [[hw, 0, -hd], [-hw, 0, -hd], [-hw, h, 0], [hw, h, 0]],          // 后坡
    [[-hw, 0, hd], [-hw, 0, -hd], [-hw, h, 0]],                      // 西山墙
    [[hw, 0, -hd], [hw, 0, hd], [hw, h, 0]],                        // 东山墙
    [[-hw, 0, hd], [hw, 0, hd], [hw, 0, -hd], [-hw, 0, -hd]],        // 底
  ]);
}

/** 四坡屋顶（塔楼 / 谷仓） */
export function hipRoof(w, d, h, overhang = 0.14) {
  const hw = w / 2 + overhang;
  const hd = d / 2 + overhang;
  const rw = Math.max(0.06, w * 0.14);
  return faces([
    [[-hw, 0, hd], [hw, 0, hd], [rw, h, 0], [-rw, h, 0]],
    [[hw, 0, -hd], [-hw, 0, -hd], [-rw, h, 0], [rw, h, 0]],
    [[-hw, 0, hd], [-hw, h, 0], [-rw, h, 0]],
    [[hw, 0, -hd], [hw, h, 0], [rw, h, 0]],
    [[-hw, 0, hd], [hw, 0, hd], [hw, 0, -hd], [-hw, 0, -hd]],
  ]);
}

/* ────────────────────────── 曲线体 ────────────────────────── */

/**
 * 沿折线生成水平带状面（道路、站台、水面）。
 * pts:[[x,z]...]  width:number|number[]  opts:{y,uvScale}
 */
export function ribbon(pts, width, opts = {}) {
  const n = pts.length;
  const y = opts.y ?? 0;
  const uvScale = opts.uvScale ?? 4;
  const pos = [];
  const nor = [];
  const uv = [];
  const idx = [];
  const N = [];
  const L = [0];
  for (let i = 0; i < n; i++) {
    const prev = pts[Math.max(0, i - 1)];
    const next = pts[Math.min(n - 1, i + 1)];
    let dx = next[0] - prev[0];
    let dz = next[1] - prev[1];
    const len = Math.hypot(dx, dz) || 1;
    N.push([-dz / len, dx / len]);
    if (i > 0) L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  }
  for (let i = 0; i < n; i++) {
    const w = (Array.isArray(width) ? width[i] : width) * 0.5;
    const nx = N[i][0] * w;
    const nz = N[i][1] * w;
    pos.push(pts[i][0] + nx, y, pts[i][1] + nz);
    pos.push(pts[i][0] - nx, y, pts[i][1] + nz);
    nor.push(0, 1, 0, 0, 1, 0);
    uv.push(L[i] / uvScale, 0, L[i] / uvScale, 1);
  }
  for (let i = 0; i < n - 1; i++) {
    const a = i * 2;
    idx.push(a, a + 3, a + 1, a, a + 2, a + 3);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  return g;
}

/** 带厚度的台体：顶面 + 两侧立面（底面不可见，省略） */
export function slab(pts, width, top, thick, opts = {}) {
  const topG = ribbon(pts, width, { y: top, uvScale: opts.uvScale ?? 4 });
  const hw = (Array.isArray(width) ? width[0] : width) * 0.5;
  const all = [topG];
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i];
    const p1 = pts[i + 1];
    let dx = p1[0] - p0[0];
    let dz = p1[1] - p0[1];
    const len = Math.hypot(dx, dz) || 1;
    dx /= len;
    dz /= len;
    const nx = -dz * hw;
    const nz = dx * hw;
    const A = [p0[0] + nx, p0[1] + nz]; // +法线侧
    const B = [p1[0] + nx, p1[1] + nz];
    const C = [p1[0] - nx, p1[1] - nz]; // -法线侧
    const D = [p0[0] - nx, p0[1] - nz];
    const up = top;
    const dn = top - thick;
    all.push(
      faces([
        [[A[0], up, A[1]], [A[0], dn, A[1]], [B[0], dn, B[1]]],
        [[A[0], up, A[1]], [B[0], dn, B[1]], [B[0], up, B[1]]],
        [[D[0], up, D[1]], [B[0], dn, B[1]], [D[0], dn, D[1]]],
        [[D[0], up, D[1]], [C[0], up, C[1]], [B[0], dn, B[1]]],
      ])
    );
  }
  void side;
  return bakeGeoms(all);
}

/** 沿路径扫掠截面（钢轨 / 道砟）。profile 需按「顶→+侧向下→底向-侧→-侧向上」排列 */
export function sweep(profile, frames, opts = {}) {
  const m = profile.length;
  const n = frames.length;
  const up = new THREE.Vector3(0, 1, 0);
  const tmp = new THREE.Vector3();
  const rings = [];
  for (const f of frames) {
    const ring = [];
    for (const [lat, ver] of profile) {
      tmp.copy(f.p).addScaledVector(f.n, lat).addScaledVector(up, ver);
      ring.push([tmp.x, tmp.y, tmp.z]);
    }
    rings.push(ring);
  }
  const pos = [];
  const uv = [];
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m; j++) {
      const j2 = (j + 1) % m;
      const a = rings[i][j];
      const b = rings[i][j2];
      const c = rings[i + 1][j2];
      const d = rings[i + 1][j];
      const u0 = i * 4;
      const u1 = u0 + 4;
      pos.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
      uv.push(u0, j, u0, j + 1, u1, j + 1);
      pos.push(a[0], a[1], a[2], c[0], c[1], c[2], d[0], d[1], d[2]);
      uv.push(u0, j, u1, j + 1, u1, j);
    }
  }
  if (opts.cap) {
    const avg = (ring) => {
      let x = 0;
      let y = 0;
      let z = 0;
      for (const p of ring) {
        x += p[0];
        y += p[1];
        z += p[2];
      }
      return [x / ring.length, y / ring.length, z / ring.length];
    };
    const c0 = avg(rings[0]);
    const c1 = avg(rings[n - 1]);
    for (let j = 0; j < m; j++) {
      const j2 = (j + 1) % m;
      const a = rings[0][j];
      const b = rings[0][j2];
      pos.push(c0[0], c0[1], c0[2], b[0], b[1], b[2], a[0], a[1], a[2]);
      uv.push(0, 0, 1, 0, 0, 1);
      const d = rings[n - 1][j];
      const e = rings[n - 1][j2];
      pos.push(c1[0], c1[1], c1[2], d[0], d[1], d[2], e[0], e[1], e[2]);
      uv.push(0, 0, 1, 0, 0, 1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.computeVertexNormals();
  return g;
}

/* ──────────────── 合并：把一堆零件烘成单次 draw call ──────────────── */

const KEEP = ['position', 'normal', 'uv', 'color'];

/** 不带颜色的合并（供内部再烘焙） */
export function bakeGeoms(list) {
  const arr = list.filter(Boolean).map((g) => {
    const c = g.index ? g.toNonIndexed() : g.clone();
    for (const k of Object.keys(c.attributes)) if (!KEEP.includes(k)) c.deleteAttribute(k);
    if (!c.attributes.normal) c.computeVertexNormals();
    if (!c.attributes.uv) {
      c.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(c.attributes.position.count * 2), 2));
    }
    return c;
  });
  if (!arr.length) return new THREE.BufferGeometry();
  const m = arr.length === 1 ? arr[0] : mergeGeometries(arr, false);
  m.computeBoundingSphere();
  return m;
}

/** parts: [{geo, color}] → 单一带顶点色的 geometry */
export function bake(parts) {
  const list = parts
    .filter((p) => p && p.geo)
    .map((p) => {
      let g = p.geo.index ? p.geo.toNonIndexed() : p.geo.clone();
      if (p.matrix) g.applyMatrix4(p.matrix);
      for (const k of Object.keys(g.attributes)) if (!KEEP.includes(k)) g.deleteAttribute(k);
      if (!g.attributes.normal) g.computeVertexNormals();
      const cnt = g.attributes.position.count;
      if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(cnt * 2), 2));
      const col = new Float32Array(cnt * 3);
      const [r, g2, b] = rgb(p.color ?? 0xffffff);
      for (let i = 0; i < cnt; i++) {
        col[i * 3] = r;
        col[i * 3 + 1] = g2;
        col[i * 3 + 2] = b;
      }
      g.setAttribute('color', new THREE.BufferAttribute(col, 3));
      return g;
    });
  if (!list.length) return new THREE.BufferGeometry();
  const merged = list.length === 1 ? list[0] : mergeGeometries(list, false);
  merged.computeBoundingSphere();
  return merged;
}

/** 给 geometry 铺常量顶点色（InstancedMesh 的白模，必须有 color 属性才能配 vertexColors 材质） */
export function paint(geo, hex = 0xffffff) {
  const cnt = geo.attributes.position.count;
  const col = new Float32Array(cnt * 3);
  const [r, g, b] = rgb(hex);
  for (let i = 0; i < cnt; i++) {
    col[i * 3] = r;
    col[i * 3 + 1] = g;
    col[i * 3 + 2] = b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  if (!geo.attributes.uv) geo.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(cnt * 2), 2));
  return geo;
}
