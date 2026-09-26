import * as THREE from 'three';
import { TRAY, CAVITY_X, CAVITY_Z, GROUND, WATER, RIVER, LAKE, C } from '../core/config.js';
import { bake, box, faces, xf, shade, jitterHex } from '../core/geo.js';
import { woodGrain, grassDetail, waterNormal, fieldDetail, gravelDetail } from '../core/textures.js';
import { PLOTS, ROADS, roadDist, YARDS, inCavity } from './layout.js';

/* ── 水域轮廓（河 + 湖，单一闭合多边形）─────────────────────────── */
export function waterOutline(shrink = 0) {
  const pts = [];
  const n = RIVER.center.length;
  const norm = [];
  for (let i = 0; i < n; i++) {
    const a = RIVER.center[Math.max(0, i - 1)];
    const b = RIVER.center[Math.min(n - 1, i + 1)];
    const dx = b[0] - a[0];
    const dz = b[1] - a[1];
    const L = Math.hypot(dx, dz) || 1;
    norm.push([-dz / L, dx / L]);
  }
  for (let i = 0; i < n; i++) {
    const h = RIVER.half[i] - shrink;
    pts.push([RIVER.center[i][0] + norm[i][0] * h, RIVER.center[i][1] + norm[i][1] * h]);
  }
  const r = LAKE.r - shrink;
  for (let i = 0; i <= LAKE.steps; i++) {
    const t = i / LAKE.steps;
    const ang = (LAKE.a0 + (LAKE.a1 - LAKE.a0) * t) * (Math.PI / 180);
    const end = i === 0 || i === LAKE.steps;
    const wob = end ? 1 : 1 + (Math.sin(i * 2.7) * 0.5 + Math.sin(i * 1.13 + 2) * 0.5) * (LAKE.wob / LAKE.r);
    pts.push([LAKE.cx + Math.cos(ang) * r * wob, LAKE.cz + Math.sin(ang) * r * wob]);
  }
  for (let i = n - 1; i >= 0; i--) {
    const h = RIVER.half[i] - shrink;
    pts.push([RIVER.center[i][0] - norm[i][0] * h, RIVER.center[i][1] - norm[i][1] * h]);
  }
  return pts;
}

const OUTLINE = waterOutline(0);

/** 点到水域轮廓的有符号距离：内部为负 */
export function waterDist(x, z) {
  let inside = false;
  let best = Infinity;
  for (let i = 0, j = OUTLINE.length - 1; i < OUTLINE.length; j = i++) {
    const xi = OUTLINE[i][0];
    const zi = OUTLINE[i][1];
    const xj = OUTLINE[j][0];
    const zj = OUTLINE[j][1];
    if (zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
    const dx = xj - xi;
    const dz = zj - zi;
    const l2 = dx * dx + dz * dz;
    let t = l2 > 0 ? ((x - xi) * dx + (z - zi) * dz) / l2 : 0;
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    const d = Math.hypot(x - (xi + dx * t), z - (zi + dz * t));
    if (d < best) best = d;
  }
  return inside ? -best : best;
}

/** 垂直穿越某条直线时水域的 z 区间（用于把铁路桥对准河面） */
export function waterSpanAtX(x) {
  const hits = [];
  for (let i = 0, j = OUTLINE.length - 1; i < OUTLINE.length; j = i++) {
    const xi = OUTLINE[i][0];
    const zi = OUTLINE[i][1];
    const xj = OUTLINE[j][0];
    const zj = OUTLINE[j][1];
    if (xi === xj) continue;
    const t = (x - xi) / (xj - xi);
    if (t >= 0 && t <= 1) hits.push(zi + (zj - zi) * t);
  }
  hits.sort((a, b) => a - b);
  return { z0: hits[0], z1: hits[hits.length - 1] };
}

/* ── 小噪声 ────────────────────────────────────────────────────────── */
function h2(x, y, s) {
  let h = Math.imul(x | 0, 374761393) ^ Math.imul(y | 0, 668265263) ^ Math.imul(s | 0, 1013904223);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
function vn(x, y, s) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const a = h2(xi, yi, s);
  const b = h2(xi + 1, yi, s);
  const c = h2(xi, yi + 1, s);
  const d = h2(xi + 1, yi + 1, s);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
const fbm2 = (x, y, s, oct = 3) => {
  let v = 0;
  let amp = 0.5;
  let f = 1;
  let n = 0;
  for (let i = 0; i < oct; i++) {
    v += amp * vn(x * f, y * f, s + i * 7);
    n += amp;
    amp *= 0.5;
    f *= 2;
  }
  return v / n;
};

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const sstep = (t) => t * t * (3 - 2 * t);
const mixC = (a, b, t) => {
  const A = new THREE.Color(a);
  const B = new THREE.Color(b);
  return A.lerp(B, clamp01(t)).getHex();
};

/* ── 地表高度：岸坡向河床过渡 ──────────────────────────────────────── */
function groundHeight(x, z, d) {
  if (d >= 0) return GROUND;
  const t = sstep(clamp01(-d / WATER.bank));
  return GROUND - (GROUND - WATER.bed) * t;
}

/* ── 地表颜色：草 / 沙岸 / 河床淤泥 ────────────────────────────────── */
function groundColor(x, z, d, out) {
  const big = fbm2(x * 0.075, z * 0.075, 3, 3);
  const small = fbm2(x * 0.42, z * 0.42, 9, 2);
  let grass = mixC(C.grassDark, C.grassAlt, big);
  grass = mixC(grass, C.grass, 0.35 + small * 0.5);
  // 零星干草斑
  if (fbm2(x * 0.19, z * 0.19, 21, 2) > 0.68) grass = mixC(grass, 0x8a8b4e, 0.45);
  let col = grass;
  if (d < WATER.sand) {
    const k = sstep(clamp01((WATER.sand - d) / WATER.sand));
    col = mixC(grass, C.sand, k);
  }
  if (d < 0) {
    const k = sstep(clamp01(-d / 1.5));
    col = mixC(C.sand, C.mud, k * 0.78);
  }
  const c = new THREE.Color(col);
  out.push(c.r, c.g, c.b);
}

/* ── UV 缩放辅助 ───────────────────────────────────────────────────── */
function scaleUV(geo, su, sv) {
  const uv = geo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv);
  uv.needsUpdate = true;
  return geo;
}

/* ══════════════════════════ 构建地形 ══════════════════════════ */
export function buildTerrain(rng) {
  const group = new THREE.Group();
  group.name = 'terrain';

  /* ── 木质托盘底座 ── */
  const wood = woodGrain();
  const woodMat = new THREE.MeshStandardMaterial({
    map: wood,
    vertexColors: true,
    roughness: 0.62,
    metalness: 0.0,
  });
  const trayParts = [];
  const half = { w: TRAY.w / 2, d: TRAY.d / 2 };
  // 底板：必须低于最深的河床（GROUND-0.62=0.08），否则会盖住水面
  const floorTop = 0.05;
  trayParts.push({
    geo: scaleUV(xf(box(TRAY.w, floorTop, TRAY.d), 0, floorTop / 2, 0), 9, 3),
    color: C.trayWoodDark,
  });
  // 四面围板
  const wallH = TRAY.h - floorTop;
  const wallY = floorTop + wallH / 2;
  for (const s of [1, -1]) {
    trayParts.push({
      geo: scaleUV(xf(box(TRAY.w, wallH, TRAY.wall), 0, wallY, s * (half.d - TRAY.wall / 2)), 10, 0.42),
      color: C.trayWood,
    });
    trayParts.push({
      geo: scaleUV(
        xf(box(TRAY.wall, wallH, TRAY.d - TRAY.wall * 2), s * (half.w - TRAY.wall / 2), wallY, 0),
        7,
        0.42
      ),
      color: jitterHex(C.trayWood, rng, 0.05),
    });
  }
  // 顶部压边线脚
  for (const s of [1, -1]) {
    trayParts.push({
      geo: scaleUV(xf(box(TRAY.w + 0.1, 0.07, TRAY.wall + 0.1), 0, 1.035, s * (half.d - TRAY.wall / 2)), 10, 0.1),
      color: C.trayWoodLight,
    });
    trayParts.push({
      geo: scaleUV(
        xf(box(TRAY.wall + 0.1, 0.07, TRAY.d - TRAY.wall * 2 + 0.1), s * (half.w - TRAY.wall / 2), 1.035, 0),
        7,
        0.1
      ),
      color: C.trayWoodLight,
    });
  }
  const tray = new THREE.Mesh(bake(trayParts), woodMat);
  tray.castShadow = true;
  tray.receiveShadow = true;
  group.add(tray);

  /* ── 地面网格（草 / 岸坡 / 河床）── */
  const GX = CAVITY_X + 0.4;
  const GZ = CAVITY_Z + 0.4;
  const NX = 214;
  const NZ = 146;
  const vcount = (NX + 1) * (NZ + 1);
  const pos = new Float32Array(vcount * 3);
  const nor = new Float32Array(vcount * 3);
  const uv = new Float32Array(vcount * 2);
  const col = new Float32Array(vcount * 3);
  const idx = new Uint32Array(NX * NZ * 6);
  let vi = 0;
  let ci = 0;
  for (let j = 0; j <= NZ; j++) {
    for (let i = 0; i <= NX; i++) {
      const x = -GX + (2 * GX * i) / NX;
      const z = -GZ + (2 * GZ * j) / NZ;
      const d = waterDist(x, z);
      const y = groundHeight(x, z, d);
      pos[vi * 3] = x;
      pos[vi * 3 + 1] = y;
      pos[vi * 3 + 2] = z;
      uv[vi * 2] = x / 6;
      uv[vi * 2 + 1] = z / 6;
      const push = [];
      groundColor(x, z, d, push);
      col[vi * 3] = push[0];
      col[vi * 3 + 1] = push[1];
      col[vi * 3 + 2] = push[2];
      vi++;
    }
  }
  // 法线：直接用高度场差分
  for (let j = 0; j <= NZ; j++) {
    for (let i = 0; i <= NX; i++) {
      const k = j * (NX + 1) + i;
      const l = pos[k * 3 + 1] - (i > 0 ? pos[(k - 1) * 3 + 1] : pos[k * 3 + 1]);
      const r = pos[k * 3 + 1] - (i < NX ? pos[(k + 1) * 3 + 1] : pos[k * 3 + 1]);
      const u = pos[k * 3 + 1] - (j > 0 ? pos[(k - NX - 1) * 3 + 1] : pos[k * 3 + 1]);
      const b = pos[k * 3 + 1] - (j < NZ ? pos[(k + NX + 1) * 3 + 1] : pos[k * 3 + 1]);
      const dx = 2 * GX / NX;
      const dz = 2 * GZ / NZ;
      const nx = (l - r) / dx;
      const nz = (u - b) / dz;
      const len = Math.hypot(nx, 1, nz);
      nor[k * 3] = nx / len;
      nor[k * 3 + 1] = 1 / len;
      nor[k * 3 + 2] = nz / len;
    }
  }
  for (let j = 0; j < NZ; j++) {
    for (let i = 0; i < NX; i++) {
      const a = j * (NX + 1) + i;
      idx[ci++] = a;
      idx[ci++] = a + NX + 1;
      idx[ci++] = a + 1;
      idx[ci++] = a + 1;
      idx[ci++] = a + NX + 1;
      idx[ci++] = a + NX + 2;
    }
  }
  const groundGeo = new THREE.BufferGeometry();
  groundGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  groundGeo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  groundGeo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  groundGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  groundGeo.setIndex(new THREE.BufferAttribute(idx, 1));
  const grassTex = grassDetail();
  const groundMat = new THREE.MeshStandardMaterial({
    map: grassTex,
    vertexColors: true,
    roughness: 0.97,
    metalness: 0,
  });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.receiveShadow = true;
  ground.name = 'ground';
  group.add(ground);

  /* ── 水面 ── */
  const surf = waterOutline(WATER.shrink);
  // 有向面积：为负（顺时针）时反转，保证三角面朝上、不被背面剔除
  let area2 = 0;
  for (let i = 0, j = surf.length - 1; i < surf.length; j = i++) {
    area2 += surf[j][0] * surf[i][1] - surf[i][0] * surf[j][1];
  }
  if (area2 < 0) surf.reverse();
  const shape = new THREE.Shape(surf.map((p) => new THREE.Vector2(p[0], -p[1])));
  const waterGeo = new THREE.ShapeGeometry(shape);
  waterGeo.rotateX(-Math.PI / 2);
  waterGeo.translate(0, WATER.y, 0);
  // 三角面绕序由 earcut 决定，统一压成「法线朝上 + 双面」以免被背面剔除
  {
    const n = waterGeo.attributes.position.count;
    const up = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) up[i * 3 + 1] = 1;
    waterGeo.setAttribute('normal', new THREE.BufferAttribute(up, 3));
  }
  // 水深着色：靠岸浅、中心深
  {
    const p = waterGeo.attributes.position;
    const arr = new Float32Array(p.count * 3);
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i);
      const z = p.getZ(i);
      const d = waterDist(x, z);
      const t = sstep(clamp01(-d / 3.2));
      const c = new THREE.Color().lerpColors(
        new THREE.Color(0x74c2b6),
        new THREE.Color(0x3d8b96),
        t
      );
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    }
    waterGeo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    const u2 = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      u2[i * 2] = p.getX(i) / 4.2;
      u2[i * 2 + 1] = p.getZ(i) / 4.2;
    }
    waterGeo.setAttribute('uv', new THREE.BufferAttribute(u2, 2));
  }
  const wn = waterNormal();
  const waterMat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    normalMap: wn,
    normalScale: new THREE.Vector2(0.34, 0.34),
    roughness: 0.44,
    metalness: 0.0,
    transparent: true,
    opacity: 0.9,
    side: THREE.DoubleSide,
  });
  const water = new THREE.Mesh(waterGeo, waterMat);
  water.receiveShadow = true;
  water.name = 'water';
  group.add(water);

  /* ── 田块 ── */
  const fieldTex = fieldDetail();
  fieldTex.repeat.set(1, 1);
  const plotParts = [];
  const hedgeParts = [];
  for (const p of PLOTS) {
    const w = p.x1 - p.x0;
    const d = p.z1 - p.z0;
    const g = faces([
      [
        [p.x0, GROUND + 0.022, p.z0],
        [p.x0, GROUND + 0.022, p.z1],
        [p.x1, GROUND + 0.022, p.z1],
        [p.x1, GROUND + 0.022, p.z0],
      ],
    ]);
    // 让田垄沿长边方向
    const uv = g.attributes.uv;
    const pos = g.attributes.position;
    for (let i = 0; i < uv.count; i++) {
      uv.setXY(i, (pos.getX(i) - p.x0) / 3.2, (pos.getZ(i) - p.z0) / 1.1);
    }
    const col = p.kind === 'crop' ? mixC(0x8a7a45, 0x6d7a3a, fbm2(p.x0, p.z0, 5)) : mixC(0x6f8a46, 0x5c7a3c, fbm2(p.x0, p.z0, 6));
    plotParts.push({ geo: g, color: jitterHex(col, rng, 0.07) });
    // 田埂绿篱
    if (p.kind === 'crop') {
      const hh = 0.42;
      const hc = mixHexSafe(0x3f5c2c, 0x4e6b33, rng);
      const edges = [
        [[p.x0, p.z0], [p.x1, p.z0]],
        [[p.x1, p.z0], [p.x1, p.z1]],
        [[p.x1, p.z1], [p.x0, p.z1]],
        [[p.x0, p.z1], [p.x0, p.z0]],
      ];
      for (const [a, b] of edges) {
        const mx = (a[0] + b[0]) / 2;
        const mz = (a[1] + b[1]) / 2;
        const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
        const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
        const seg = Math.max(1, Math.round(len / 0.9));
        for (let s = 0; s < seg; s++) {
          const t = (s + 0.5) / seg;
          const px = a[0] + (b[0] - a[0]) * t;
          const pz = a[1] + (b[1] - a[1]) * t;
          hedgeParts.push({
            geo: xf(box(0.94, hh, 0.5), px, GROUND + hh / 2, pz, ang + rng.range(-0.05, 0.05)),
            color: shade(hc, 0.9 + rng.f() * 0.25),
          });
        }
        void mx; void mz;
      }
    }
  }
  if (plotParts.length) {
    const plotMat = new THREE.MeshStandardMaterial({
      map: fieldTex,
      vertexColors: true,
      roughness: 0.98,
    });
    const plot = new THREE.Mesh(bake(plotParts), plotMat);
    plot.receiveShadow = true;
    group.add(plot);
  }
  if (hedgeParts.length) {
    const hedge = new THREE.Mesh(bake(hedgeParts), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 }));
    hedge.castShadow = true;
    hedge.receiveShadow = true;
    group.add(hedge);
  }

  /* ── 货场碎石场坪 ── */
  const gravel = gravelDetail();
  const yardParts = [];
  for (const y of YARDS) {
    const g = faces([
      [
        [y.x0, GROUND + 0.02, y.z0],
        [y.x0, GROUND + 0.02, y.z1],
        [y.x1, GROUND + 0.02, y.z1],
        [y.x1, GROUND + 0.02, y.z0],
      ],
    ]);
    const uv = g.attributes.uv;
    const pos = g.attributes.position;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, (pos.getX(i) - y.x0) / 2.4, (pos.getZ(i) - y.z0) / 2.4);
    yardParts.push({ geo: g, color: 0x8b8377 });
  }
  const yard = new THREE.Mesh(
    bake(yardParts),
    new THREE.MeshStandardMaterial({ map: gravel, vertexColors: true, roughness: 0.95 })
  );
  yard.receiveShadow = true;
  group.add(yard);

  /* ── 草丛 ── */
  const tuftParts = [];
  for (let k = 0; k < 3; k++) {
    const a = (k / 3) * Math.PI;
    const dx = Math.cos(a) * 0.09;
    const dz = Math.sin(a) * 0.09;
    const g = faces([
      [
        [-dx, 0, -dz],
        [dx, 0, dz],
        [dx * 0.5, 0.2, dz * 0.5],
      ],
      [
        [dx * 0.5, 0.2, dz * 0.5],
        [-dx, 0, -dz],
        [-dx * 0.3, 0.22, -dz * 0.3],
      ],
    ]);
    // 根部深、尖端亮
    const pos = g.attributes.position;
    const cols = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
      const t = pos.getY(i) / 0.22;
      cols[i * 3] = 0.25 + t * 0.6;
      cols[i * 3 + 1] = 0.34 + t * 0.55;
      cols[i * 3 + 2] = 0.16 + t * 0.3;
    }
    g.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    tuftParts.push({ geo: g, color: 0xffffff });
  }
  const tuftGeo = bake(tuftParts);
  const tuftMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, side: THREE.DoubleSide });
  const TUFTS = 620;
  const tufts = new THREE.InstancedMesh(tuftGeo, tuftMat, TUFTS);
  tufts.castShadow = false;
  tufts.receiveShadow = true;
  const mtx = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  const v = new THREE.Vector3();
  const sc = new THREE.Vector3();
  const colr = new THREE.Color();
  let placed = 0;
  let guard = 0;
  while (placed < TUFTS && guard < TUFTS * 40) {
    guard++;
    const x = rng.range(-CAVITY_X + 0.6, CAVITY_X - 0.6);
    const z = rng.range(-CAVITY_Z + 0.6, CAVITY_Z - 0.6);
    const d = waterDist(x, z);
    if (d < 1.05) continue; // 不进水
    if (d > 4.0 && rng.f() > 0.25) continue; // 靠岸更密
    if (roadDist(x, z) < 0.55) continue;
    e.set(rng.range(-0.12, 0.12), rng.f() * 6.283, rng.range(-0.1, 0.1));
    q.setFromEuler(e);
    v.set(x, groundHeight(x, z, d) + 0.01, z);
    const s = rng.range(0.6, 1.05);
    sc.set(s, s * rng.range(0.8, 1.35), s);
    mtx.compose(v, q, sc);
    tufts.setMatrixAt(placed, mtx);
    colr.setHSL(0.23 + rng.range(-0.03, 0.04), 0.3 + rng.range(-0.07, 0.09), 0.19 + rng.range(-0.05, 0.07));
    tufts.setColorAt(placed, colr);
    placed++;
  }
  tufts.count = placed;
  tufts.instanceMatrix.needsUpdate = true;
  if (tufts.instanceColor) tufts.instanceColor.needsUpdate = true;
  group.add(tufts);

  return { group, waterMat, waterNormalTex: wn, groundMat, trayMat: woodMat };
}

function mixHexSafe(a, b, rng) {
  return new THREE.Color(a).lerp(new THREE.Color(b), rng.f()).getHex();
}

export { ROADS };
