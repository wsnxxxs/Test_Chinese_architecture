/**
 * BUILDINGS — 按冻结的 PLOTS 生成镇上的全部建筑。
 *
 * 约定：
 *  - plot 的 (x, z, rotY) 决定建筑的世界位姿；局部坐标系里正面朝 +Z、X = 面宽、Z = 进深。
 *  - 几何按材质合批：结构件进 'buildings'，玻璃/标线/水面等不投影件进 'buildingsFlat'
 *    （castShadow = false），每个材质 1 次 draw call；不创建任何灯光/植被。
 *  - 轨道净空（TRACK.clearance = 1.35）是硬约束：plot 矩形本身压到轨道的几块（b1 / silo /
 *    kiosk / farmhouse / n1 / n3 / w1 / w2 / e1 / e2 / s4），按“不出 plot 矩形”的前提做
 *    最优缩放+平移收缩（fitPlan），并把每面的檐口/出挑限制在净空之内。
 *  - fitPlan 的平移 (cx, cz) 必须落到几何上：buildPlot 用 em.sub(cx, 0, cz) 建局部坐标系，
 *    所有 style 的建模坐标都在该平移后的坐标系里；各面出挑用 outLimits/outLimit 夹紧。
 */

import * as THREE from 'three';
import {
  PLOTS,
  createGeometryBucket,
  groundHeightAt,
  mulberry32,
  polylineDistance,
  getTrackCurve,
} from './layout.js';
import { MAT, registerEnvironmental } from './materials.js';
import { TEX } from './textures.js';

/* ------------------------------------------------------------------ *
 * 常量
 * ------------------------------------------------------------------ */

const PLINTH_TOP = 0.07; // 基座露出高度（= 墙脚标高）
const FH = 0.68; // 层高
const EAVE = 0.17; // 默认檐口出挑
const EAVE_MAX = 0.5; // 出挑上限（檐口/门廊/遮阳篷）
const CLEAR = 1.35; // 轨道净空（与 layout.TRACK.clearance 一致）
const MARGIN = 0.08; // 基座外扩 + 贴图接缝余量
const UV_REF = 2.6; // 贴图密度参考面尺寸

/* ------------------------------------------------------------------ *
 * 通用小工具
 * ------------------------------------------------------------------ */

/** 字符串 → 32 位整数（FNV-1a），作为 mulberry32 的种子。 */
function hashId(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 16777619) >>> 0;
  }
  return h >>> 0;
}

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

/** 共享单位几何（bucket 会克隆，绝不修改这些实例的 uv）。 */
const UNIT = {
  box: new THREE.BoxGeometry(1, 1, 1),
  plane: new THREE.PlaneGeometry(1, 1),
  cyl8: new THREE.CylinderGeometry(1, 1, 1, 8),
  cyl12: new THREE.CylinderGeometry(1, 1, 1, 12),
  cyl16: new THREE.CylinderGeometry(1, 1, 1, 16),
  halfCyl: new THREE.CylinderGeometry(1, 1, 1, 12, 1, true, 0, Math.PI), // 弧面朝 +X 的半圆柱
  cone8: new THREE.ConeGeometry(1, 1, 8),
  cone12: new THREE.ConeGeometry(1, 1, 12),
  halfCone: new THREE.ConeGeometry(1, 1, 12, 1, true, 0, Math.PI),
  dome: new THREE.SphereGeometry(1, 12, 5, 0, Math.PI * 2, 0, Math.PI / 2),
  ball: new THREE.SphereGeometry(1, 8, 6),
  ring: new THREE.TorusGeometry(1, 0.05, 5, 16), // 圆环（默认在 XY 平面，轴 = Z）
  arch: new THREE.TorusGeometry(1, 0.05, 5, 12, Math.PI), // 上半圆（拱券）
};

/**
 * 不投影的材质：自发光玻璃、极薄标线（水轮叶片）、轮坑水面。
 * 它们单独进一个 bucket（castShadow = false），避免自发光/薄片/水面投影。
 */
function isNonCasting(material) {
  return material === _millWater || material === MAT.road.marking || MAT.window.lit.indexOf(material) !== -1;
}

/**
 * 局部坐标系发射器：把几何体按 (平移 · 旋转 · 缩放) 放进父坐标系，
 * 再乘上 plot 的世界矩阵交给 bucket。
 */
function makeEmit(bucket, base, flat = null) {
  const local = new THREE.Matrix4();
  const out = new THREE.Matrix4();
  const quat = new THREE.Quaternion();
  const euler = new THREE.Euler();
  const pos = new THREE.Vector3();
  const scl = new THREE.Vector3();
  return {
    base,
    bucket,
    flat,
    /** 放置几何体（旋转绕自身中心） */
    put(material, geo, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0) {
      euler.set(rx, ry, rz);
      quat.setFromEuler(euler);
      local.compose(pos.set(x, y, z), quat, scl.set(sx, sy, sz));
      out.multiplyMatrices(base, local);
      (flat && isNonCasting(material) ? flat : bucket).add(material, geo, out);
    },
    /** 建立子坐标系（平移 + 绕 Y 航向），便于按面/按部件建模 */
    sub(x = 0, y = 0, z = 0, ry = 0) {
      const m = new THREE.Matrix4().makeRotationY(ry).setPosition(x, y, z);
      return makeEmit(bucket, new THREE.Matrix4().multiplyMatrices(base, m), flat);
    },
  };
}

function box(em, material, x, y, z, w, h, d) {
  em.put(material, UNIT.box, x, y, z, w, h, d);
}

function boxR(em, material, x, y, z, w, h, d, rx, ry, rz) {
  em.put(material, UNIT.box, x, y, z, w, h, d, rx, ry, rz);
}

/** 竖直圆柱（seg=8/12/16 决定面数） */
function cyl(em, material, x, y, z, r, h, seg = 12) {
  const g = seg >= 16 ? UNIT.cyl16 : seg >= 12 ? UNIT.cyl12 : UNIT.cyl8;
  em.put(material, g, x, y, z, r, h, r);
}

/**
 * 分块墙：沿 X / Z 切成 ≤cell 的小块，使同一材质上贴图密度接近方形，
 * 避免 6 米长的教堂中殿把石墙贴图拉成长条。
 */
function wallBox(em, material, x, y, z, w, h, d, cell = 2.4) {
  const nx = Math.max(1, Math.round(w / cell));
  const nz = Math.max(1, Math.round(d / cell));
  const sw = w / nx;
  const sd = d / nz;
  for (let i = 0; i < nx; i++) {
    for (let j = 0; j < nz; j++) {
      box(em, material, x - w / 2 + sw * (i + 0.5), y, z - d / 2 + sd * (j + 0.5), sw, h, sd);
    }
  }
}

/* ------------------------------------------------------------------ *
 * 自造几何：三角面实体（自动统一朝向）与剖面挤出
 * ------------------------------------------------------------------ */

/**
 * 由面片拼实体：faces 是凸多边形顶点表（[[x,y,z]...]），
 * interior 是实体内部一点，用它自动把每个面的绕序翻成朝外 —— 调用者不必关心绕序。
 */
function solidGeo(faces, interior) {
  const positions = [];
  const normals = [];
  const uvs = [];
  const c = new THREE.Vector3(interior[0], interior[1], interior[2]);
  const a = new THREE.Vector3();
  const b = new THREE.Vector3();
  const d = new THREE.Vector3();
  const n = new THREE.Vector3();
  const fc = new THREE.Vector3();
  const tmp = new THREE.Vector3();

  const push = (v, nx, ny, nz) => {
    positions.push(v.x, v.y, v.z);
    normals.push(nx, ny, nz);
    // 平面投影 uv（按世界尺度 / UV_REF），使贴图密度与普通 box 面接近
    if (Math.abs(nz) >= Math.abs(nx) && Math.abs(nz) >= Math.abs(ny)) uvs.push(v.x / UV_REF, v.y / UV_REF);
    else if (Math.abs(nx) >= Math.abs(ny)) uvs.push(v.z / UV_REF, v.y / UV_REF);
    else uvs.push(v.x / UV_REF, v.z / UV_REF);
  };

  for (const poly of faces) {
    const p0 = poly[0];
    for (let i = 1; i < poly.length - 1; i++) {
      a.fromArray(p0);
      b.fromArray(poly[i]);
      d.fromArray(poly[i + 1]);
      n.subVectors(b, a).cross(tmp.subVectors(d, a));
      if (n.lengthSq() < 1e-12) continue;
      n.normalize();
      fc.copy(a).add(b).add(d).multiplyScalar(1 / 3);
      const outward = tmp.subVectors(fc, c).dot(n) >= 0;
      const flip = outward ? 1 : -1;
      const nx = n.x * flip;
      const ny = n.y * flip;
      const nz = n.z * flip;
      if (outward) {
        push(a, nx, ny, nz);
        push(b, nx, ny, nz);
        push(d, nx, ny, nz);
      } else {
        push(a, nx, ny, nz);
        push(d, nx, ny, nz);
        push(b, nx, ny, nz);
      }
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  return geo;
}

/**
 * 剖面沿 Z 挤出：profile 是从左端到右端的轮廓 [[u, y]...]（底边自动闭合），
 * 支持凹剖面（折线形屋顶），盖帽用 ExtrudeGeometry 三角化。
 */
function profileGeo(profile, depth) {
  const shape = new THREE.Shape();
  shape.moveTo(profile[0][0], profile[0][1]);
  for (let i = 1; i < profile.length; i++) shape.lineTo(profile[i][0], profile[i][1]);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false, steps: 1, curveSegments: 1 });
  geo.translate(0, 0, -depth / 2);
  return geo;
}

/* ------------------------------------------------------------------ *
 * 轨道净空：粗采样 + plot 适配 + 出挑限制
 * ------------------------------------------------------------------ */

let trackPts = null;

/** 轨道中心线的粗采样（仅用于建造期的净空优化，避免逐点调用 900 段的精采样） */
function coarseTrack() {
  if (trackPts) return trackPts;
  const curve = getTrackCurve();
  const n = 240;
  const p = new THREE.Vector3();
  const out = [];
  for (let i = 0; i <= n; i++) {
    curve.getPointAt(i / n, p);
    out.push([p.x, p.z]);
  }
  trackPts = out;
  return out;
}

const _pt = new THREE.Vector3();

function distAt(base, lx, lz) {
  _pt.set(lx, 0, lz).applyMatrix4(base);
  return polylineDistance(coarseTrack(), _pt.x, _pt.z);
}

/** 矩形足迹（可平移）到轨道中心线的最小距离：4 角 + 4 边中点 */
function minRectDist(base, cx, cz, hw, hd) {
  let m = Infinity;
  for (let i = 0; i < 4; i++) {
    const ux = i === 0 || i === 3 ? -1 : 1;
    const uz = i < 2 ? -1 : 1;
    const pts = [
      [cx + ux * hw, cz + uz * hd],
      [cx + ux * hw, cz],
      [cx, cz + uz * hd],
    ];
    for (const [lx, lz] of pts) {
      const d = distAt(base, lx, lz);
      if (d < m) m = d;
    }
  }
  return m;
}

/**
 * 把 plot 的 w×d 收缩/平移到轨道净空满足的位置（不越出 plot 矩形）。
 * 返回局部半尺寸、中心偏移与是否达标；未达标时给出最优（尽量靠向安全侧）的结果。
 */
function fitPlan(p) {
  const hw0 = p.w / 2;
  const hd0 = p.d / 2;
  const base = new THREE.Matrix4().makeRotationY(p.rotY);
  base.setPosition(p.x, 0, p.z);
  // 墙体矩形离轨道至少 CLEAR + MARGIN，把余量留给基座外扩与窗台/门套等薄出挑
  const target = CLEAR + MARGIN;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [0.7071, 0.7071],
    [-0.7071, 0.7071],
    [0.7071, -0.7071],
    [-0.7071, -0.7071],
  ];

  let best = { s: 1, cx: 0, cz: 0, d: minRectDist(base, 0, 0, hw0, hd0) };
  let ok = best.d >= target;

  if (!ok) {
    const scales = [1, 0.94, 0.88, 0.82, 0.76, 0.7, 0.64, 0.58, 0.52];
    for (const s of scales) {
      const hw = hw0 * s;
      const hd = hd0 * s;
      const mx = hw0 - hw;
      const mz = hd0 - hd;
      let cx = 0;
      let cz = 0;
      let cur = minRectDist(base, 0, 0, hw, hd);
      let step = Math.max(mx, mz, 0.08);
      // 爬山：每次沿最优方向走一步，走不动就缩步长
      for (let it = 0; it < 26; it++) {
        let moved = false;
        for (const [dx, dz] of dirs) {
          const nx = clamp(cx + dx * step, -mx, mx);
          const nz = clamp(cz + dz * step, -mz, mz);
          const d = minRectDist(base, nx, nz, hw, hd);
          if (d > cur + 1e-4) {
            cx = nx;
            cz = nz;
            cur = d;
            moved = true;
            break;
          }
        }
        if (!moved) step *= 0.5;
      }
      if (cur > best.d) best = { s, cx, cz, d: cur };
      if (cur >= target) {
        best = { s, cx, cz, d: cur };
        ok = true;
        break;
      }
    }
  }

  return {
    base,
    plot: p,
    hw: hw0 * best.s,
    hd: hd0 * best.s,
    cx: best.cx,
    cz: best.cz,
    scale: best.s,
    minDist: best.d,
    ok,
  };
}

/**
 * 每面允许的外挑：拿“已外挑后的角点”再迭代收紧，保证檐口/基座也不越净空。
 */
function outLimits(plan, maxOut = EAVE_MAX) {
  const { base, hw, hd, cx, cz } = plan;
  let l = maxOut;
  let r = maxOut;
  let bk = maxOut;
  let f = maxOut;
  for (let it = 0; it < 3; it++) {
    const x0 = cx - hw - l;
    const x1 = cx + hw + r;
    const z0 = cz - hd - bk;
    const z1 = cz + hd + f;
    const allow = [
      distAt(base, x0, z0) - CLEAR - MARGIN, // 0: 左后
      distAt(base, x1, z0) - CLEAR - MARGIN, // 1: 右后
      distAt(base, x1, z1) - CLEAR - MARGIN, // 2: 右前
      distAt(base, x0, z1) - CLEAR - MARGIN, // 3: 左前
    ];
    const eff = [l, r, bk, f];
    const pairs = [
      [0, 0, 2],
      [1, 1, 2],
      [2, 1, 3],
      [3, 0, 3],
    ];
    for (const [ci, s1, s2] of pairs) {
      const a = clamp(allow[ci], 0, maxOut);
      eff[s1] = Math.min(eff[s1], a);
      eff[s2] = Math.min(eff[s2], a);
    }
    l = eff[0];
    r = eff[1];
    bk = eff[2];
    f = eff[3];
  }
  return { left: l, right: r, back: bk, front: f };
}

/** 某个具体出挑部件（门廊/后殿/遮阳篷…）在此处允许伸出的最大量 */
function outLimit(em, pts, maxOut = EAVE_MAX) {
  let lim = maxOut;
  for (const [lx, lz] of pts) {
    const d = distAt(em.base, lx, lz) - CLEAR - MARGIN;
    if (d < lim) lim = d;
  }
  return clamp(lim, 0, maxOut);
}

/* ------------------------------------------------------------------ *
 * 基础件：基座 / 檐口 / 窗 / 门 / 台阶 / 烟囱 / 木构架 / 招牌
 * ------------------------------------------------------------------ */

/** 石砌基座裙：从墙脚 (PLINTH_TOP) 补到 footprint 四角地面最低点 -0.35，避免临河悬空。 */
function addPlinth(em, plan, n = 0.03) {
  const { base, hw, hd, cx, cz } = plan;
  let gMin = 0;
  for (let i = 0; i < 4; i++) {
    const ux = i === 0 || i === 3 ? -1 : 1;
    const uz = i < 2 ? -1 : 1;
    _pt.set(cx + ux * hw, 0, cz + uz * hd).applyMatrix4(base);
    gMin = Math.min(gMin, groundHeightAt(_pt.x, _pt.z));
  }
  const yBottom = gMin - 0.35;
  const h = PLINTH_TOP - yBottom;
  box(em, MAT.rail.stone, cx, PLINTH_TOP - h / 2, cz, 2 * hw + n * 2, h, 2 * hd + n * 2);
}

/** 四面檐口线脚（以当前坐标系原点为中心，出挑受净空限制，贴轨道的面自动省略） */
function addCornice(em, hw, hd, y, lim, extra = 0) {
  const out = 0.055 + extra;
  const pf = clamp(lim.front, 0, out);
  const pb = clamp(lim.back, 0, out);
  const pl = clamp(lim.left, 0, out);
  const pr = clamp(lim.right, 0, out);
  // 前后两条（贯穿左右）
  if (pf > 0.012) box(em, MAT.wall.trim, 0, y, hd + pf / 2, 2 * hw + pl + pr, 0.06, pf);
  if (pb > 0.012) box(em, MAT.wall.trim, 0, y, -hd - pb / 2, 2 * hw + pl + pr, 0.06, pb);
  // 左右两条
  if (pl > 0.012) box(em, MAT.wall.trim, -hw - pl / 2, y, 0, pl, 0.06, 2 * hd + pb + pf);
  if (pr > 0.012) box(em, MAT.wall.trim, hw + pr / 2, y, 0, pr, 0.06, 2 * hd + pb + pf);
}

/**
 * 一樘窗（在“面坐标系”里建：面朝 +Z，墙外表面在 z = 0）。
 * 玻璃面比外框浅 —— 即窗洞内凹；外框 4 根细条 + 窗台。
 * lim 是该面允许的最大出挑：贴轨道的面会退化成贴面画框，保证不侵净空。
 */
function addWindow(f, litMat, x, y, w, h, lim = 0.04, opt = {}) {
  const proud = clamp(lim, 0, 0.035);
  const bar = 0.032;
  const solid = proud > 0.008;
  f.put(litMat, UNIT.plane, x, y, Math.min(0.006, Math.max(0.002, lim)), w, h, 1);
  const frameBar = (bx, by, bw, bh) => {
    if (solid) box(f, MAT.window.frame, bx, by, proud / 2, bw, bh, proud);
    else f.put(MAT.window.frame, UNIT.plane, bx, by, 0.006, bw, bh, 1);
  };
  frameBar(x - w / 2 - bar / 2, y, bar, h + bar * 2);
  frameBar(x + w / 2 + bar / 2, y, bar, h + bar * 2);
  frameBar(x, y + h / 2 + bar / 2, w + bar * 2, bar);
  frameBar(x, y - h / 2 - bar / 2, w + bar * 2, bar);
  if (opt.mullion) {
    if (solid) box(f, MAT.window.mullion, x, y, Math.min(0.012, proud / 2), bar * 0.6, h, 0.012);
    else f.put(MAT.window.mullion, UNIT.plane, x, y, 0.007, bar * 0.6, h, 1);
  }
  const sill = clamp(lim, 0, 0.09);
  if (sill > 0.012) box(f, MAT.window.frame, x, y - h / 2 - bar - 0.02, sill / 2, w + 0.12, 0.04, sill);
}

/** 门（面坐标系；含门套与门槛石/台阶，出挑全部受 lim 约束） */
function addDoor(f, material, x, y, w, h, lim = 0.06, opt = {}) {
  f.put(MAT.window.lit[3], UNIT.plane, x, y, 0.004, w - 0.04, h - 0.04, 1);
  box(f, material, x, y, 0.022, w, h, 0.045);
  // 门套
  const t = clamp(lim, 0, 0.07);
  box(f, MAT.wall.trim, x, y + h / 2 + 0.035, t / 2, w + 0.12, 0.07, Math.max(0.02, t));
  box(f, MAT.wall.trim, x - w / 2 - 0.035, y, t / 2, 0.07, h, Math.max(0.02, t));
  box(f, MAT.wall.trim, x + w / 2 + 0.035, y, t / 2, 0.07, h, Math.max(0.02, t));
  if (!opt.noStep) {
    const s1 = clamp(lim, 0, 0.16);
    if (s1 > 0.03) box(f, MAT.rail.stone, x, 0.03 - PLINTH_TOP + 0.03, s1 / 2, w + 0.16, 0.07, s1);
    const s2 = clamp(lim - s1 - 0.02, 0, 0.15);
    if (opt.steps > 1 && s2 > 0.03) box(f, MAT.rail.stone, x, -0.03, s1 + s2 / 2, w + 0.26, 0.07, s2);
  }
}

/** 烟囱（含压顶与烟道口） */
function addChimney(em, x, z, yBase, yTop) {
  const h = yTop - yBase;
  box(em, MAT.wall.brick, x, yBase + h / 2, z, 0.24, h, 0.24);
  box(em, MAT.rail.stone, x, yTop + 0.025, z, 0.31, 0.05, 0.31);
  box(em, MAT.rail.steelDark, x, yTop + 0.055, z, 0.12, 0.05, 0.12);
}

/** 木构架（外露梁柱）：横梁 + 立柱 + 角斜撑 */
function addTimberFrame(f, hw, y0, y1, mat = MAT.wall.timber) {
  const t = 0.055;
  const floors = Math.max(1, Math.round((y1 - y0) / FH));
  for (let i = 0; i <= floors; i++) {
    const y = y0 + ((y1 - y0) * i) / floors;
    box(f, mat, 0, y, t / 2, hw * 2, t, t * 1.2);
  }
  const n = Math.max(2, Math.round((hw * 2) / 0.72));
  for (let i = 0; i <= n; i++) {
    const x = -hw + (2 * hw * i) / n;
    box(f, mat, x, (y0 + y1) / 2, t / 2, t, y1 - y0, t * 1.2);
  }
  // 两端角斜撑
  const bh = (y1 - y0) / floors;
  for (const sx of [-1, 1]) {
    boxR(f, mat, sx * (hw - bh * 0.34), y0 + bh * 0.5, t / 2, t, bh * 0.92, t, 0, 0, sx * 0.72);
  }
}

/** 悬挂招牌（挑臂 + 挂板） */
function addHangingSign(f, x, y, w, h, lim = 0.4) {
  const arm = Math.min(0.3, lim);
  box(f, MAT.props.metal, x, y, arm / 2, 0.05, 0.05, arm);
  box(f, MAT.props.metal, x, y - 0.05, arm * 0.92, 0.03, 0.1, 0.03);
  box(f, MAT.props.metal, x + 0.05, y - 0.11, arm * 0.92, 0.03, 0.1, 0.03);
  box(f, MAT.props.signGreen, x + 0.03, y - h / 2 - 0.2, arm * 0.9, w, h, 0.035);
}

/* ------------------------------------------------------------------ *
 * 屋顶
 * ------------------------------------------------------------------ */

/**
 * 双坡 / 折线形 / 单坡屋顶。
 * ridge='x' 时屋脊沿局部 X（坡面朝 ±Z）；ridge='z' 时屋脊沿局部 Z。
 * eave = {front, back, left, right} 每面实际出挑。
 */
function addSlopeRoof(b, opt) {
  const { mat, hw, hd, y, eave: e, height } = opt;
  const alongX = opt.ridge !== 'z';
  const shape = opt.shape || 'gable';
  const spanA = alongX ? hd : hw; // 垂直屋脊方向半跨
  const spanB = alongX ? hw : hd; // 屋脊方向半长
  const eA0 = alongX ? e.back : e.left;
  const eA1 = alongX ? e.front : e.right;
  const eB0 = alongX ? e.left : e.back;
  const eB1 = alongX ? e.right : e.front;
  const p0 = -(spanA + eA0);
  const p1 = spanA + eA1;
  const apex = (p0 + p1) / 2;
  let profile;
  if (shape === 'shed') {
    profile = [
      [p0, 0],
      [p1, height],
      [p1, 0],
    ];
  } else if (shape === 'gambrel') {
    const br = 0.72;
    profile = [
      [p0, 0],
      [p0 * br, height * 0.44],
      [apex - 0.14, height],
      [apex + 0.14, height],
      [p1 * br, height * 0.44],
      [p1, 0],
    ];
  } else {
    profile = [
      [p0, 0],
      [apex, height],
      [p1, 0],
    ];
  }
  const depth = 2 * spanB + eB0 + eB1;
  const geo = profileGeo(profile, depth);
  if (alongX) {
    // 几何 X → 局部 Z（坡向），几何 Z → 局部 X（屋脊）
    geo.translate(0, 0, (eB0 - eB1) / 2);
    b.put(mat, geo, 0, y, 0, 1, 1, 1, 0, -Math.PI / 2, 0);
  } else {
    geo.translate(0, 0, (eB1 - eB0) / 2);
    b.put(mat, geo, 0, y, 0, 1, 1, 1, 0, 0, 0);
  }
  return { apex, height };
}

/** 四坡屋顶（用 solidGeo 拼实体，屋脊沿 X，可用 sub() 转 90°） */
function addHipRoof(b, mat, hw, hd, y, e, height) {
  const x0 = -(hw + e.left);
  const x1 = hw + e.right;
  const z0 = -(hd + e.back);
  const z1 = hd + e.front;
  const ridge = Math.max(0.4, x1 - x0 - 0.55 * Math.min(z1 - z0, x1 - x0));
  const mx = (x0 + x1) / 2;
  const r0 = [mx - ridge / 2, height, 0];
  const r1 = [mx + ridge / 2, height, 0];
  const b0 = [x0, 0, z0];
  const b1 = [x1, 0, z0];
  const b2 = [x1, 0, z1];
  const b3 = [x0, 0, z1];
  const geo = solidGeo(
    [
      [b0, b1, b2, b3],
      [b0, b1, r1, r0],
      [b2, b3, r0, r1],
      [b3, b0, r0],
      [b1, b2, r1],
    ],
    [mx, height * 0.25, 0],
  );
  b.put(mat, geo, 0, y, 0);
}

/* ------------------------------------------------------------------ *
 * 通用体量：墙体 + 檐口 + 屋顶 + 窗阵
 * ------------------------------------------------------------------ */

/** 每层窗数（宽度决定），2~4 樘 */
function winCount(width) {
  return clamp(Math.round(width / 0.82), 2, 4);
}

/** 沿面等距排 n 个位置 */
function spread(n, halfW, space) {
  const out = [];
  if (n === 1) return [0];
  const usable = Math.min(halfW * 2 - space * 2, (n - 1) * 0.95);
  const step = n > 1 ? usable / (n - 1) : 0;
  for (let i = 0; i < n; i++) out.push(-usable / 2 + step * i);
  return out;
}

/** 生成窗材质索引：约一半亮（k=3 完全不亮） */
function litIndex(rng) {
  const r = rng();
  if (r < 0.2) return 0;
  if (r < 0.4) return 1;
  if (r < 0.55) return 2;
  return 3;
}

/**
 * 墙体 + 檐口 + 屋顶的公共外壳。
 * opt: { material, roofMat, roof: 'gable'|'hip'|'gambrel'|'shed', roofHeight, lim }
 */
function addShell(b, plan, opt) {
  const { hw, hd } = plan;
  const H = opt.floors * FH;
  const wallTop = PLINTH_TOP + H;
  wallBox(b, opt.material, 0, PLINTH_TOP + H / 2, 0, hw * 2, H, hd * 2);
  // 墙脚石带
  box(b, MAT.rail.stoneDark, 0, PLINTH_TOP + 0.045, 0, hw * 2 + 0.05, 0.09, hd * 2 + 0.05);
  addCornice(b, hw, hd, wallTop, opt.lim, opt.corniceExtra || 0);

  const eave = {
    front: Math.min(opt.overhang, opt.lim.front),
    back: Math.min(opt.overhang, opt.lim.back),
    left: Math.min(opt.overhang, opt.lim.left),
    right: Math.min(opt.overhang, opt.lim.right),
  };
  const rh = opt.roofHeight;
  const alongX = opt.ridge !== 'z';
  if (opt.roof === 'hip') {
    if (alongX) {
      addHipRoof(b, opt.roofMat, hw, hd, wallTop, eave, rh);
    } else {
      const s = b.sub(0, 0, 0, Math.PI / 2);
      addHipRoof(s, opt.roofMat, hd, hw, wallTop, { front: eave.left, back: eave.right, left: eave.back, right: eave.front }, rh);
    }
    // 屋脊瓦：长度与四坡实体一致
    const span = (alongX ? hw : hd) * 2 + (alongX ? eave.left + eave.right : eave.back + eave.front);
    const ridgeLen = Math.max(0.4, span - 0.55 * Math.min((hd * 2 + eave.back + eave.front), span));
    if (alongX) box(b, MAT.roof.ridge, 0, wallTop + rh + 0.03, 0, ridgeLen, 0.07, 0.11);
    else box(b, MAT.roof.ridge, 0, wallTop + rh + 0.03, 0, 0.11, 0.07, ridgeLen);
  } else {
    addSlopeRoof(b, {
      mat: opt.roofMat,
      hw,
      hd,
      y: wallTop,
      eave,
      height: rh,
      ridge: opt.ridge,
      shape: opt.roof,
    });
    if (opt.roof !== 'shed') {
      const len = (alongX ? hw : hd) * 2;
      if (alongX) box(b, MAT.roof.ridge, 0, wallTop + rh + 0.03, 0, len, 0.07, 0.11);
      else box(b, MAT.roof.ridge, 0, wallTop + rh + 0.03, 0, 0.11, 0.07, len);
    }
  }
  return { wallTop, H };
}

/** 一层正面：门居中，两侧各排窗（含门在内每层窗数 2~4 樘） */
function frontGroundRow(f, hw, y, lim, rng) {
  const doorW = 0.36;
  const doorH = Math.min(FH * 0.84, 0.58);
  addDoor(f, MAT.wood.frameDark, 0, y + doorH / 2, doorW, doorH, lim, { steps: 2 });
  const inner = doorW / 2 + 0.08;
  for (const sx of [-1, 1]) {
    const region = hw - 0.24 - inner;
    const n = clamp(Math.round(region / 0.6), 0, 2);
    if (n <= 0) continue;
    const spreadW = Math.max(0, region - 0.42);
    for (let i = 0; i < n; i++) {
      const t = n === 1 ? 0.5 : i / (n - 1);
      addWindow(f, MAT.window.lit[litIndex(rng)], sx * (inner + 0.21 + t * spreadW), y + 0.36, 0.42, 0.4, lim, { mullion: true });
    }
  }
}

/** 常规楼层窗阵 */
function floorRow(f, hw, y, lim, rng, count, wide = false) {
  const n = count === undefined ? winCount(hw * 2) : count;
  const pos = spread(n, hw, 0.28);
  for (const x of pos) {
    addWindow(f, MAT.window.lit[litIndex(rng)], x, y, wide ? 0.5 : 0.42, wide ? 0.44 : 0.4, lim, { mullion: wide });
  }
}

/* ------------------------------------------------------------------ *
 * 民居
 * ------------------------------------------------------------------ */

function buildHouse(b, plan, p, rng) {
  const { hw, hd } = plan;
  const lim = outLimits(plan);
  const floors = Math.max(1, p.floors);
  const wallH = floors * FH;
  const wallTop = PLINTH_TOP + wallH;

  const roofIsHip = p.roof === 'hip';
  const roofIsGambrel = p.roof === 'gambrel';
  const ridge = rng() < 0.42 ? 'z' : 'x';
  const roofHeight = roofIsGambrel
    ? Math.min(1.18, (hd * 2 + lim.front + lim.back) * 0.52)
    : roofIsHip
      ? Math.min(0.95, (hd * 2 + lim.front + lim.back) * 0.42)
      : Math.min(1.0, (hd * 2 + lim.front + lim.back) * 0.46);

  addShell(b, plan, {
    material: MAT.wall.plaster[p.hue],
    roofMat: MAT.roof.tiles[p.hue % 4],
    roof: roofIsHip ? 'hip' : roofIsGambrel ? 'gambrel' : 'gable',
    roofHeight,
    floors,
    overhang: EAVE,
    lim,
    ridge,
  });

  // 四角护角木
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      box(b, MAT.wall.trim, sx * (hw - 0.035), PLINTH_TOP + wallH / 2, sz * (hd - 0.035), 0.075, wallH, 0.075);
    }
  }

  // 面：前 / 后 / 左右
  const fFront = b.sub(0, 0, hd, 0);
  const fBack = b.sub(0, 0, -hd, Math.PI);
  const fLeft = b.sub(-hw, 0, 0, -Math.PI / 2);
  const fRight = b.sub(hw, 0, 0, Math.PI / 2);
  const lf = Math.min(0.05, lim.front);
  const lb = Math.min(0.05, lim.back);
  const ll = Math.min(0.05, lim.left);
  const lr = Math.min(0.05, lim.right);

  frontGroundRow(fFront, hw, PLINTH_TOP, lf, rng);
  for (let fl = 1; fl < floors; fl++) {
    floorRow(fFront, hw, PLINTH_TOP + fl * FH + 0.36, lf, rng);
  }
  for (let fl = 0; fl < floors; fl++) {
    floorRow(fBack, hw, PLINTH_TOP + fl * FH + 0.36, lb, rng, hd > 1.2 ? 3 : 2);
  }
  if (hd > 1.15) {
    for (let fl = 0; fl < floors; fl++) {
      const y = PLINTH_TOP + fl * FH + 0.36;
      addWindow(fLeft, MAT.window.lit[litIndex(rng)], 0, y, 0.4, 0.4, ll);
      addWindow(fRight, MAT.window.lit[litIndex(rng)], 0, y, 0.4, 0.4, lr);
    }
  }

  // 烟囱（沿屋脊方向偏置，冒出脊 0.22）
  const chimX = roofIsHip || ridge === 'x' ? (rng() < 0.5 ? -1 : 1) * hw * 0.45 : 0;
  const chimZ = ridge === 'x' ? (rng() < 0.5 ? -1 : 1) * hd * 0.35 : 0;
  addChimney(b, chimX, chimZ, PLINTH_TOP + wallH * 0.6, wallTop + roofHeight + 0.22);

  // 变体：小前廊 / 二层阳台
  const variant = rng();
  const porchLim = outLimit(b, [
    [-hw * 0.6, hd + 0.5],
    [hw * 0.6, hd + 0.5],
  ]);
  if (variant < 0.38 && porchLim > 0.24) {
    const dOut = Math.min(0.42, porchLim);
    const yP = PLINTH_TOP + 0.62;
    box(b, MAT.rail.stone, 0, PLINTH_TOP + 0.035, hd + dOut / 2, hw * 1.3, 0.07, dOut);
    box(b, MAT.rail.timber, 0, yP + 0.56, hd + dOut / 2, hw * 1.3, 0.06, dOut);
    for (const sx of [-1, 1]) {
      box(b, MAT.wall.trim, sx * (hw * 0.6), PLINTH_TOP + 0.31, hd + dOut - 0.06, 0.07, 0.56, 0.07);
    }
    box(b, MAT.rail.timber, 0, yP + 0.9, hd + dOut / 2, hw * 1.3, 0.5, 0.04);
  } else if (variant < 0.66 && floors >= 2 && lim.front > 0.08) {
    const yB = PLINTH_TOP + FH;
    const s = Math.min(0.3, lim.front);
    box(b, MAT.rail.timber, 0, yB - 0.03, hd + s / 2, hw * 1.5, 0.06, s);
    box(b, MAT.wall.trim, 0, yB + 0.2, hd + s - 0.02, hw * 1.5, 0.05, 0.04);
    for (let i = 0; i <= 6; i++) {
      box(b, MAT.wall.trim, -hw * 0.75 + (hw * 1.5 * i) / 6, yB + 0.09, hd + s - 0.02, 0.035, 0.28, 0.035);
    }
  }
}

/* ------------------------------------------------------------------ *
 * 店铺：一层店面 + 二层住宅
 * ------------------------------------------------------------------ */

function buildShop(b, plan, p, rng) {
  const { hw, hd } = plan;
  const lim = outLimits(plan);
  const floors = Math.max(2, p.floors);
  const wallH = floors * FH;
  const wallTop = PLINTH_TOP + wallH;
  const roofHeight = Math.min(1.0, (hd * 2 + lim.front + lim.back) * 0.46);

  addShell(b, plan, {
    material: MAT.wall.plaster[p.hue],
    roofMat: MAT.roof.tiles[p.hue % 4],
    roof: p.roof === 'hip' ? 'hip' : 'gable',
    roofHeight,
    floors,
    overhang: EAVE,
    lim,
    ridge: 'x',
  });

  const fFront = b.sub(0, 0, hd, 0);
  const fBack = b.sub(0, 0, -hd, Math.PI);
  const lf = Math.min(0.05, lim.front);
  const lb = Math.min(0.05, lim.back);

  // ---- 店面（一层正面）----
  const shopTop = PLINTH_TOP + FH;
  const glassW = hw * 2 - 0.6;
  const glassH = 0.44;
  const glassY = PLINTH_TOP + 0.44;
  // 橱窗分格
  const panes = Math.max(2, Math.round(glassW / 0.62));
  const pw = glassW / panes;
  for (let i = 0; i < panes; i++) {
    const x = -glassW / 2 + pw * (i + 0.5);
    fFront.put(i === 0 ? MAT.window.lit[1] : MAT.window.lit[2], UNIT.plane, x, glassY, 0.008, pw - 0.07, glassH, 1);
    box(fFront, MAT.wall.shop, x - pw / 2 + 0.02, glassY, 0.03, 0.05, glassH + 0.1, 0.06);
  }
  box(fFront, MAT.wall.shop, 0, glassY + glassH / 2 + 0.06, 0.045, glassW + 0.14, 0.12, 0.09);
  box(fFront, MAT.wall.shop, 0, glassY - glassH / 2 - 0.05, 0.045, glassW + 0.14, 0.1, 0.09);
  // 店面门
  addDoor(fFront, MAT.wall.shop, hw * 0.55, PLINTH_TOP + 0.3, 0.36, 0.56, lf, { steps: 1 });

  // ---- 遮阳篷 ----
  const aw = outLimit(b, [
    [-hw * 0.9, hd + 0.5],
    [hw * 0.9, hd + 0.5],
  ]);
  if (aw > 0.18) {
    const dOut = Math.min(0.46, aw);
    const mat = rng() < 0.5 ? MAT.props.awningA : MAT.props.awningB;
    boxR(fFront, mat, 0, shopTop - 0.12, dOut / 2, hw * 1.86, 0.03, dOut, 0.3, 0, 0);
    box(fFront, mat, 0, shopTop - 0.24, dOut - 0.02, hw * 1.86, 0.1, 0.04);
    for (const sx of [-1, 1]) {
      box(fFront, MAT.props.metal, sx * hw * 0.86, shopTop - 0.3, dOut / 2, 0.03, 0.03, dOut * 1.05);
    }
  }

  // ---- 悬挂招牌 ----
  addHangingSign(fFront, -hw * 0.72, shopTop + 0.22, 0.34, 0.26, Math.min(0.4, outLimit(b, [[-hw * 1.1, hd + 0.45]])));

  // ---- 二层住宅窗 ----
  const firstFloorY = PLINTH_TOP + FH + 0.36;
  floorRow(fFront, hw, firstFloorY, lf, rng, 3);
  for (let fl = 0; fl < floors; fl++) {
    floorRow(fBack, hw, PLINTH_TOP + fl * FH + 0.36, lb, rng, 2);
  }
  if (hd > 1.15) {
    for (let fl = 0; fl < floors; fl++) {
      const y = PLINTH_TOP + fl * FH + 0.36;
      addWindow(b.sub(-hw, 0, 0, -Math.PI / 2), MAT.window.lit[litIndex(rng)], 0, y, 0.38, 0.38, Math.min(0.04, lim.left));
      addWindow(b.sub(hw, 0, 0, Math.PI / 2), MAT.window.lit[litIndex(rng)], 0, y, 0.38, 0.38, Math.min(0.04, lim.right));
    }
  }
  addChimney(b, hw * 0.5, -hd * 0.3, PLINTH_TOP + wallH * 0.6, wallTop + roofHeight + 0.22);
}

/* ------------------------------------------------------------------ *
 * 酒馆：两层 + 宽檐 + 外露木构架 + 招牌 + 花箱
 * ------------------------------------------------------------------ */

function buildTavern(b, plan, p, rng) {
  const { hw, hd } = plan;
  const lim = outLimits(plan);
  const floors = Math.max(2, p.floors);
  const wallH = floors * FH;
  const wallTop = PLINTH_TOP + wallH;
  const roofHeight = Math.min(1.05, (hd * 2 + lim.front + lim.back) * 0.48);

  addShell(b, plan, {
    material: MAT.wall.plaster[p.hue],
    roofMat: MAT.roof.tiles[1],
    roof: 'gable',
    roofHeight,
    floors,
    overhang: 0.3,
    lim,
    ridge: 'x',
    corniceExtra: 0.02,
  });

  const fFront = b.sub(0, 0, hd, 0);
  const fBack = b.sub(0, 0, -hd, Math.PI);
  const fLeft = b.sub(-hw, 0, 0, -Math.PI / 2);
  const fRight = b.sub(hw, 0, 0, Math.PI / 2);
  const lf = Math.min(0.06, lim.front);
  const lb = Math.min(0.05, lim.back);
  const ll = Math.min(0.05, lim.left);
  const lr = Math.min(0.05, lim.right);

  // 一层：中间门 + 两侧窗；二层：木构架填充 + 4 樘窗
  const doorY = PLINTH_TOP + 0.31;
  addDoor(fFront, MAT.wood.frameDark, 0, doorY, 0.4, 0.56, lf, { steps: 3 });
  for (const sx of [-1, 1]) {
    addWindow(fFront, MAT.window.lit[sx < 0 ? 0 : 1], sx * (hw * 0.58), PLINTH_TOP + 0.34, 0.42, 0.4, lf, { mullion: true });
  }
  const y1 = PLINTH_TOP + FH;
  addTimberFrame(fFront, hw, y1, wallTop, MAT.wall.timber);
  floorRow(fFront, hw, y1 + 0.36, lf, rng, 4);
  for (let fl = 0; fl < floors; fl++) {
    const y = PLINTH_TOP + fl * FH + 0.34;
    addWindow(fBack, MAT.window.lit[litIndex(rng)], -hw * 0.45, y, 0.4, 0.4, lb);
    addWindow(fBack, MAT.window.lit[litIndex(rng)], hw * 0.45, y, 0.4, 0.4, lb);
    addWindow(fLeft, MAT.window.lit[litIndex(rng)], 0, y, 0.4, 0.4, ll);
    addWindow(fRight, MAT.window.lit[litIndex(rng)], 0, y, 0.4, 0.4, lr);
  }

  // 窗台花箱（二层正面窗下）
  const boxD = clamp(lf, 0, 0.12);
  if (boxD > 0.04) {
    for (const x of spread(4, hw, 0.28)) {
      box(fFront, MAT.props.planter, x, y1 + 0.14, boxD / 2, 0.42, 0.1, boxD);
      box(fFront, MAT.nature.flowers[0], x, y1 + 0.2, boxD / 2, 0.34, 0.06, boxD * 0.8);
    }
  }
  box(fFront, MAT.wall.timber, 0, PLINTH_TOP + 0.02, 0.02, hw * 2, 0.09, 0.05);

  // 酒馆招牌
  addHangingSign(fFront, hw * 0.72, PLINTH_TOP + 1.24, 0.46, 0.34, Math.min(0.42, outLimit(b, [[hw * 1.2, hd + 0.45]])));
  addChimney(b, -hw * 0.45, hd * 0.28, PLINTH_TOP + wallH * 0.6, wallTop + roofHeight + 0.24);
}

/* ------------------------------------------------------------------ *
 * 教堂（地标）：中殿 + 陡双坡 + 西端钟塔 + 尖顶 + 十字架 + 半圆后殿 + 扶壁 + 彩窗
 * ------------------------------------------------------------------ */

function buildChurch(b, plan, p, rng) {
  const { hw, hd } = plan; // 3.0 × 1.7
  const lim = outLimits(plan);
  const naveH = 2.6;
  const wallTop = PLINTH_TOP + naveH;

  // 中殿
  wallBox(b, MAT.wall.stone, 0, PLINTH_TOP + naveH / 2, 0, hw * 2, naveH, hd * 2);
  box(b, MAT.rail.stoneDark, 0, PLINTH_TOP + 0.07, 0, hw * 2 + 0.07, 0.14, hd * 2 + 0.07);
  addCornice(b, hw, hd, wallTop - 0.06, lim, 0.0);
  const naveRoofH = hd * 2 * 0.5;
  addSlopeRoof(b, {
    mat: MAT.roof.slate,
    hw,
    hd,
    y: wallTop,
    eave: { front: Math.min(0.22, lim.front), back: Math.min(0.22, lim.back), left: 0.2, right: 0.2 },
    height: naveRoofH,
    ridge: 'x',
    shape: 'gable',
  });
  box(b, MAT.roof.ridge, 0, wallTop + naveRoofH + 0.03, 0, hw * 2 + 0.3, 0.08, 0.12);

  // 扶壁：只做南面（北面紧邻轨道，必须保持净空）
  const nB = 4;
  for (let i = 0; i < nB; i++) {
    const x = -hw + 0.75 + ((hw * 2 - 1.5) * i) / (nB - 1);
    box(b, MAT.rail.stoneDark, x, PLINTH_TOP + 0.7, hd + 0.14, 0.3, 1.4, 0.28);
    box(b, MAT.rail.stone, x, PLINTH_TOP + 1.6, hd + 0.1, 0.24, 0.5, 0.2);
    boxR(b, MAT.rail.stoneDark, x, PLINTH_TOP + 1.94, hd + 0.1, 0.24, 0.28, 0.2, -0.5, 0, 0);
  }

  // 南面拱形彩窗 + 南侧入口拱门
  const fFront = b.sub(0, 0, hd, 0);
  for (const x of [-1.6, 0.28, 1.6]) {
    addArchedWindow(fFront, MAT.window.lit[1], x, PLINTH_TOP + 1.15, 0.5, 1.05, 0.05, MAT.wall.stone);
  }
  addArchPortal(fFront, 0.95, PLINTH_TOP + 0.72, 0.62, 1.44, 0.1);
  // 北面高侧窗（不凸出墙面，避免侵入净空）
  const fBack = b.sub(0, 0, -hd, Math.PI);
  for (const x of [-1.5, 0, 1.5]) {
    addArchedWindow(fBack, MAT.window.lit[2], x, PLINTH_TOP + 1.5, 0.44, 0.8, 0.02, MAT.wall.stone);
  }

  // 西端钟塔（1.9×1.9）：塔身约为中殿檐高的两倍，屋脊之上留出尖顶
  const tw = 0.95;
  const tx = -hw + tw + 0.02;
  const towerH = 5.8;
  const towerTop = PLINTH_TOP + towerH;
  box(b, MAT.wall.stone, tx, PLINTH_TOP + towerH / 2, 0, tw * 2, towerH, tw * 2);
  box(b, MAT.rail.stoneDark, tx, PLINTH_TOP + 0.09, 0, tw * 2 + 0.08, 0.18, tw * 2 + 0.08);
  // 角部壁柱
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      box(b, MAT.rail.stoneDark, tx + sx * (tw - 0.06), PLINTH_TOP + towerH / 2, sz * (tw - 0.06), 0.16, towerH, 0.16);
    }
  }
  // 束带层 + 塔顶檐口
  box(b, MAT.wall.trim, tx, PLINTH_TOP + 3.6, 0, tw * 2 + 0.12, 0.1, tw * 2 + 0.12);
  addCornice(b.sub(tx, 0, 0, 0), tw, tw, towerTop - 0.12, { front: 0.09, back: 0.09, left: 0.09, right: 0.09 }, 0.02);
  // 四面钟面（教堂塔上的小圆窗）与百叶窗
  for (let i = 0; i < 4; i++) {
    const ry = (i * Math.PI) / 2;
    const f = b.sub(tx, 0, 0, 0).sub(0, 0, 0, ry);
    const out = tw + 0.02;
    const face = makeEmit(f.bucket, new THREE.Matrix4().multiplyMatrices(f.base, new THREE.Matrix4().makeTranslation(0, 0, out)));
    // 小圆窗
    face.put(MAT.window.lit[1], UNIT.cyl12, 0, PLINTH_TOP + 2.9, 0, 0.22, 0.05, 0.22, Math.PI / 2, 0, 0);
    box(face, MAT.wall.trim, 0, PLINTH_TOP + 2.9, -0.01, 0.58, 0.06, 0.04);
    box(face, MAT.wall.trim, 0, PLINTH_TOP + 2.9, -0.01, 0.06, 0.58, 0.04);
    // 拱形百叶（钟室）
    addArchedWindow(face, MAT.window.lit[3], 0, PLINTH_TOP + 4.45, 0.5, 0.95, 0.05, MAT.wall.stone);
    for (let k = 0; k < 4; k++) {
      box(face, MAT.window.mullion, 0, PLINTH_TOP + 4.13 + k * 0.18, 0.02, 0.44, 0.06, 0.05);
    }
  }
  // 尖顶 + 十字架
  b.put(MAT.roof.slate, UNIT.cone8, tx, towerTop + 1.1, 0, 1.32, 2.2, 1.32, 0, Math.PI / 8, 0);
  box(b, MAT.train.brass, tx, towerTop + 2.3, 0, 0.05, 0.34, 0.05);
  box(b, MAT.train.brass, tx, towerTop + 2.42, 0, 0.22, 0.05, 0.05);

  // 东端半圆后殿
  const apseR = 0.85;
  const apseX = hw - 0.1;
  const apseLim = outLimit(b, [
    [apseX + apseR + 0.12, 0],
    [apseX + apseR + 0.12, apseR],
    [apseX + apseR + 0.12, -apseR],
  ]);
  // 只有净空足够时才凸出半圆后殿，否则贴墙收进去
  const ax = apseX - Math.max(0, 0.75 - apseLim);
  b.put(MAT.wall.stone, UNIT.halfCyl, ax, PLINTH_TOP + 0.95, 0, apseR, 1.9, apseR);
  b.put(MAT.wall.stone, UNIT.halfCyl, ax, PLINTH_TOP + 1.86, 0, apseR + 0.06, 0.1, apseR + 0.06);
  b.put(MAT.roof.slate, UNIT.halfCone, ax, PLINTH_TOP + 1.9 + 0.42, 0, apseR + 0.1, 0.84, apseR + 0.1);
  // 后殿拱窗（贴在弧面上，沿法向外倾）
  for (const a of [-0.7, 0, 0.7]) {
    const face = b.sub(ax + Math.cos(a) * (apseR + 0.004), 0, Math.sin(a) * (apseR + 0.004), Math.PI / 2 - a);
    addArchedWindow(face, MAT.window.lit[1], 0, PLINTH_TOP + 1.1, 0.34, 0.66, 0.02, MAT.wall.stone);
  }
}

/** 拱形窗（面坐标系）：下半矩形 + 上半圆券石框；lim 为该面允许的最大出挑 */
function addArchedWindow(f, glassMat, x, y, w, h, lim, surroundMat) {
  const r = w / 2;
  const cy = h - r; // 半圆心相对窗底
  const proud = clamp(lim, 0, 0.05);
  // 玻璃：矩形 + 上半圆（用薄圆柱片做上半圆玻璃）
  f.put(glassMat, UNIT.plane, x, y - (h - cy) / 2, Math.min(0.005, proud), w, cy, 1);
  f.put(glassMat, UNIT.cyl12, x, y + cy, Math.min(0.005, proud), r, 0.01, r, Math.PI / 2, 0, 0);
  const bar = Math.min(0.045, Math.max(0.02, proud));
  const zk = Math.max(0.005, proud * 0.55);
  box(f, surroundMat, x - w / 2 - bar / 2, y - (h - cy) / 2, zk, bar, cy + r, bar);
  box(f, surroundMat, x + w / 2 + bar / 2, y - (h - cy) / 2, zk, bar, cy + r, bar);
  box(f, surroundMat, x, y - h, zk, w + bar * 2 + 0.08, 0.08, bar);
  if (proud > 0.012) f.put(surroundMat, UNIT.arch, x, y + cy, zk * 0.6, r + bar / 2, r + bar / 2, 0.9);
}

/** 拱门（面坐标系）：拱券 + 门扇 + 台阶；lim 为该面允许的最大出挑 */
function addArchPortal(f, x, y, w, h, lim) {
  const r = w / 2;
  const cy = h - r;
  const proud = clamp(lim, 0, 0.16);
  f.put(MAT.window.lit[3], UNIT.plane, x, y - (h - cy) / 2, 0.004, w, cy, 1);
  f.put(MAT.wood.frameDark, UNIT.plane, x, y - (h - cy) / 2, 0.016, w - 0.08, cy - 0.02, 1);
  f.put(MAT.window.lit[3], UNIT.cyl12, x, y + cy, 0.004, r, 0.012, r, Math.PI / 2, 0, 0);
  if (proud > 0.03) f.put(MAT.rail.stone, UNIT.arch, x, y + cy, 0.025, r + 0.05, r + 0.05, proud);
  const jd = clamp(lim, 0.04, 0.16);
  box(f, MAT.rail.stone, x - w / 2 - 0.06, y - (h - cy) / 2, jd / 2, 0.12, cy, jd);
  box(f, MAT.rail.stone, x + w / 2 + 0.06, y - (h - cy) / 2, jd / 2, 0.12, cy, jd);
  const s1 = clamp(lim, 0, 0.16);
  if (s1 > 0.04) box(f, MAT.rail.stone, x, 0.02, s1 / 2, w + 0.5, 0.06, s1);
  const s2 = clamp(lim - s1 - 0.02, 0, 0.15);
  if (s2 > 0.04) box(f, MAT.rail.stone, x, -0.04, s1 + s2 / 2, w + 0.7, 0.06, s2);
}

/* ------------------------------------------------------------------ *
 * 市政厅（地标）：两层 + 4 柱门廊 + 台阶 + 方钟塔（四面钟面）+ 穹顶
 * ------------------------------------------------------------------ */

function buildHall(b, plan, p, rng) {
  const { hw, hd } = plan;
  const lim = outLimits(plan);
  const floors = 2;
  const wallH = floors * 0.72;
  const wallTop = PLINTH_TOP + wallH;
  const roofH = 0.72;

  addShell(b, plan, {
    material: MAT.wall.plaster[0],
    roofMat: MAT.roof.slate,
    roof: 'hip',
    roofHeight: roofH,
    floors,
    overhang: 0.24,
    lim,
    ridge: 'x',
    corniceExtra: 0.03,
  });

  // 拉毛石基座 + 底层拱形门洞
  const fFront = b.sub(0, 0, hd, 0);
  box(fFront, MAT.rail.stone, 0, PLINTH_TOP + 0.18, 0.02, hw * 2, 0.36, 0.08);
  addArchPortal(fFront, 0, PLINTH_TOP + 0.62, 0.6, 1.24, lim.front);
  // 二层窗
  const y2 = PLINTH_TOP + FH + 0.38;
  for (const x of spread(4, hw, 0.3)) {
    addWindow(fFront, MAT.window.lit[litIndex(rng)], x, y2, 0.46, 0.46, lim.front, { mullion: true });
  }
  const fBack = b.sub(0, 0, -hd, Math.PI);
  floorRow(fBack, hw, PLINTH_TOP + 0.38, lim.back, rng, 3);
  floorRow(fBack, hw, y2, lim.back, rng, 3);
  for (let fl = 0; fl < 2; fl++) {
    const y = PLINTH_TOP + fl * FH + 0.38;
    addWindow(b.sub(-hw, 0, 0, -Math.PI / 2), MAT.window.lit[litIndex(rng)], 0, y, 0.42, 0.44, Math.min(0.05, lim.left));
    addWindow(b.sub(hw, 0, 0, Math.PI / 2), MAT.window.lit[litIndex(rng)], 0, y, 0.42, 0.44, Math.min(0.05, lim.right));
  }

  // 4 柱门廊 + 台阶
  const pLim = outLimit(b, [
    [-hw * 0.85, hd + 0.62],
    [hw * 0.85, hd + 0.62],
  ]);
  if (pLim > 0.4) {
    const dOut = Math.min(0.62, pLim);
    const ceilY = wallTop - 0.16;
    box(b, MAT.rail.stone, 0, PLINTH_TOP + 0.05, hd + dOut / 2, hw * 1.7, 0.1, dOut + 0.1);
    const colX = spread(4, hw * 0.78, 0.4);
    for (const x of colX) {
      cyl(b, MAT.wall.trim, x, PLINTH_TOP + ceilY / 2 - 0.05, hd + dOut - 0.09, 0.1, ceilY - 0.1, 12);
      box(b, MAT.rail.stone, x, PLINTH_TOP + 0.13, hd + dOut - 0.09, 0.26, 0.08, 0.26);
      box(b, MAT.wall.trim, x, ceilY - 0.06, hd + dOut - 0.09, 0.24, 0.08, 0.24);
    }
    box(b, MAT.wall.trim, 0, ceilY + 0.04, hd + dOut / 2 - 0.03, hw * 1.86, 0.16, dOut + 0.14);
    // 三角山花
    const ped = profileGeo(
      [
        [-hw * 0.93, 0],
        [0, 0.3],
        [hw * 0.93, 0],
      ],
      dOut + 0.14,
    );
    b.put(MAT.wall.trim, ped, 0, ceilY + 0.12, hd + dOut / 2 - 0.03, 1, 1, 1, 0, -Math.PI / 2, 0);
    box(b, MAT.roof.slate, 0, ceilY + 0.4, hd + dOut / 2 - 0.03, hw * 1.86, 0.04, dOut + 0.2);
    // 台阶 3 级（逐级收紧，超出净空的级别不做）
    const frontMax = 0.4 + outLimit(b, [
      [-hw * 0.75, hd + 0.4],
      [hw * 0.75, hd + 0.4],
    ]);
    for (let i = 0; i < 3; i++) {
      const zOut = dOut + 0.08 + i * 0.17;
      if (zOut + 0.09 > frontMax) break;
      box(b, MAT.rail.stone, 0, PLINTH_TOP - 0.03 - i * 0.07, hd + zOut, hw * 1.5, 0.08, 0.18);
    }
  }

  // 方钟塔（1.3×1.3，高出屋面 4.0）
  const tw = 0.65;
  const roofTop = wallTop + roofH;
  const towerTop = roofTop + 4.0;
  box(b, MAT.wall.plaster[0], 0, PLINTH_TOP + (towerTop - PLINTH_TOP) / 2, -0.24, tw * 2, towerTop - PLINTH_TOP, tw * 2);
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      box(b, MAT.rail.stoneDark, sx * (tw - 0.05), PLINTH_TOP + (towerTop - PLINTH_TOP) / 2, -0.24 + sz * (tw - 0.05), 0.13, towerTop - PLINTH_TOP, 0.13);
    }
  }
  box(b, MAT.wall.trim, 0, towerTop - 0.1, -0.24, tw * 2 + 0.16, 0.12, tw * 2 + 0.16);
  box(b, MAT.wall.trim, 0, roofTop + 0.5, -0.24, tw * 2 + 0.1, 0.08, tw * 2 + 0.1);
  // 四面钟面
  for (let i = 0; i < 4; i++) {
    const ry = (i * Math.PI) / 2;
    const face = b.sub(0, 0, -0.24, 0).sub(0, 0, 0, ry);
    const e2 = makeEmit(face.bucket, new THREE.Matrix4().multiplyMatrices(face.base, new THREE.Matrix4().makeTranslation(0, 0, tw + 0.015)));
    e2.put(MAT.station.trim, UNIT.cyl16, 0, towerTop - 0.72, -0.01, 0.3, 0.04, 0.3, Math.PI / 2, 0, 0);
    e2.put(MAT.station.clockFace, UNIT.cyl16, 0, towerTop - 0.72, 0.0, 0.26, 0.05, 0.26, Math.PI / 2, 0, 0);
    // 时针 / 分针
    boxR(e2, MAT.station.clockHand, 0, towerTop - 0.65, 0.03, 0.045, 0.17, 0.02, 0, 0, 0.5);
    boxR(e2, MAT.station.clockHand, 0, towerTop - 0.72, 0.03, 0.04, 0.26, 0.02, 0, 0, -1.9);
    e2.put(MAT.station.clockHand, UNIT.cyl8, 0, towerTop - 0.72, 0.03, 0.04, 0.06, 0.04, Math.PI / 2, 0, 0);
  }
  // 钟塔顶部穹顶 + 旗杆
  b.put(MAT.roof.slate, UNIT.dome, 0, towerTop, -0.24, tw + 0.14, 0.42, tw + 0.14);
  b.put(MAT.train.brass, UNIT.ball, 0, towerTop + 0.44, -0.24, 0.07, 0.07, 0.07);
  cyl(b, MAT.props.metal, 0, towerTop + 0.78, -0.24, 0.022, 0.7, 8);
  box(b, MAT.station.clockHand, 0, towerTop + 1.02, -0.24, 0.26, 0.14, 0.02);
}

/* ------------------------------------------------------------------ *
 * 谷仓
 * ------------------------------------------------------------------ */

function buildBarn(b, plan, p, rng) {
  const { hw, hd } = plan;
  const lim = outLimits(plan);
  const wallH = 1.5;
  const wallTop = PLINTH_TOP + wallH;
  const roofH = Math.min(1.5, (hd * 2 + lim.front + lim.back) * 0.58);

  addShell(b, plan, {
    material: MAT.wall.timber,
    roofMat: MAT.roof.shingle,
    roof: 'gable',
    roofHeight: roofH,
    floors: 1,
    overhang: 0.24,
    lim,
    ridge: 'x',
  });
  // 墙板竖向压条
  const fFront = b.sub(0, 0, hd, 0);
  const fBack = b.sub(0, 0, -hd, Math.PI);
  const lb = Math.min(0.05, lim.back);
  for (let i = 0; i <= 8; i++) {
    const x = -hw + (hw * 2 * i) / 8;
    box(fFront, MAT.rail.timberDark, x, PLINTH_TOP + wallH / 2, 0.025, 0.07, wallH, 0.05);
    box(fBack, MAT.rail.timberDark, x, PLINTH_TOP + wallH / 2, 0.025, 0.07, wallH, 0.05);
  }

  // 正面双开门 + 横撑
  const doorW = Math.min(1.0, hw * 1.2);
  const doorH = wallH * 0.72;
  for (const sx of [-1, 1]) {
    box(fFront, MAT.rail.timberDark, sx * doorW / 4, PLINTH_TOP + doorH / 2, 0.035, doorW / 2 - 0.03, doorH, 0.07);
    boxR(fFront, MAT.rail.timber, sx * doorW / 4, PLINTH_TOP + doorH / 2, 0.08, 0.08, Math.hypot(doorW / 2 - 0.06, doorH) * 0.98, 0.05, 0, 0, sx * Math.atan2(doorW / 2 - 0.06, doorH));
  }
  box(fFront, MAT.rail.timber, 0, PLINTH_TOP + doorH + 0.06, 0.04, doorW + 0.24, 0.12, 0.08);
  // 山墙百叶 + 顶部吊门
  const gableY = wallTop + roofH * 0.45;
  box(fFront, MAT.window.lit[3], 0, gableY, 0.03, 0.56, 0.5, 0.04);
  for (let k = 0; k < 4; k++) {
    box(fFront, MAT.window.mullion, 0, gableY - 0.18 + k * 0.12, 0.055, 0.56, 0.05, 0.03);
  }
  box(fFront, MAT.rail.timberDark, 0, gableY, 0.06, 0.08, 0.56, 0.03);
  // 吊臂 + 滑轮
  box(fFront, MAT.rail.timber, 0, gableY + 0.42, 0.2, 0.12, 0.12, 0.42);
  cyl(fFront, MAT.props.metal, 0, gableY + 0.32, 0.38, 0.07, 0.05, 8);
  // 侧面草棚披屋
  const sideLim = outLimit(b, [
    [hw + 0.6, -hd * 0.7],
    [hw + 0.6, hd * 0.9],
  ]);
  if (sideLim > 0.3) {
    const dOut = Math.min(0.6, sideLim);
    const s = b.sub(hw, 0, 0, Math.PI / 2);
    const shH = 0.85;
    const shGeo = profileGeo(
      [
        [-(hd * 0.9), 0],
        [hd * 0.7, 0.34],
        [hd * 0.7, 0],
      ],
      dOut,
    );
    s.put(MAT.roof.metal, shGeo, dOut / 2, PLINTH_TOP + shH, 0, 1, 1, 1, 0, 0, 0);
    for (const t of [-1, 1]) {
      box(s, MAT.rail.timber, dOut - 0.06, PLINTH_TOP + shH / 2, t * hd * 0.75, 0.08, shH, 0.08);
    }
    box(s, MAT.rail.timberDark, dOut - 0.04, PLINTH_TOP + 0.1, 0, 0.06, 0.2, hd * 1.6);
  }
  // 小窗
  addWindow(fBack, MAT.window.lit[litIndex(rng)], 0, PLINTH_TOP + 0.85, 0.4, 0.36, lb);
}

/* ------------------------------------------------------------------ *
 * 棚屋 / 小亭
 * ------------------------------------------------------------------ */

function buildShed(b, plan, p, rng) {
  const { hw, hd } = plan;
  const lim = outLimits(plan);
  const wallH = 0.78;
  const wallTop = PLINTH_TOP + wallH;
  const metal = MAT.roof.metal;
  const roofH = Math.min(0.46, (hd * 2 + lim.front + lim.back) * 0.26);
  const shedRoof = p.roof === 'shed';

  addShell(b, plan, {
    material: p.id === 'kiosk' ? MAT.wall.plaster[p.hue] : MAT.wall.timber,
    roofMat: metal,
    roof: shedRoof ? 'shed' : 'gable',
    roofHeight: shedRoof ? roofH : Math.min(0.5, (hd * 2 + lim.front + lim.back) * 0.3),
    floors: 1,
    overhang: 0.16,
    lim,
    ridge: 'x',
  });

  const fFront = b.sub(0, 0, hd, 0);
  const lf = Math.min(0.05, lim.front);
  if (p.id === 'kiosk') {
    // 站前小亭：售票窗口 + 柜台 + 告示
    addWindow(fFront, MAT.window.lit[0], 0, PLINTH_TOP + 0.46, 0.62, 0.34, lf, { mullion: true });
    box(fFront, MAT.rail.timber, 0, PLINTH_TOP + 0.26, Math.min(0.16, lf + 0.08), 0.86, 0.05, Math.min(0.24, lf + 0.14));
    box(fFront, MAT.props.notice, -hw * 0.62, PLINTH_TOP + 0.5, 0.02, 0.2, 0.26, 0.02);
  } else {
    box(fFront, MAT.rail.timberDark, -hw * 0.35, PLINTH_TOP + 0.34, 0.03, 0.5, 0.62, 0.06);
    boxR(fFront, MAT.rail.timber, -hw * 0.35, PLINTH_TOP + 0.34, 0.06, 0.06, 0.72, 0.04, 0, 0, 0.6);
    addWindow(fFront, MAT.window.lit[litIndex(rng)], hw * 0.45, PLINTH_TOP + 0.42, 0.36, 0.3, lf);
  }
  const fBack = b.sub(0, 0, -hd, Math.PI);
  addWindow(fBack, MAT.window.lit[litIndex(rng)], 0, PLINTH_TOP + 0.42, 0.36, 0.3, Math.min(0.04, lim.back));
}

/* ------------------------------------------------------------------ *
 * 水磨坊（地标）：两层石木 + 双坡 + 西侧外挂水轮（浸入河面）
 * ------------------------------------------------------------------ */

/**
 * 轮坑静水面材质：河道水面是共享材质，其 normalMap 的 repeat 由 terrain.js 按河道长度设置，
 * 直接借用会让小水塘的波纹密度差两个数量级；这里克隆材质与法线贴图并单独设 repeat
 * （只克隆，绝不改写共享 TEX.waterNormal 的 repeat/offset）。
 */
let _millWater = null;
function millWaterMaterial() {
  if (!_millWater) {
    _millWater = MAT.water.surface.clone();
    _millWater.normalMap = TEX.waterNormal.clone();
    _millWater.normalMap.repeat.set(2, 1);
    _millWater.normalMap.needsUpdate = true;
    registerEnvironmental(_millWater);
  }
  return _millWater;
}

function buildMill(b, plan, p, rng) {
  const { hw, hd } = plan;
  const lim = outLimits(plan);
  const floors = 2;
  const stoneH = 0.78;
  const wallH = floors * FH;
  const wallTop = PLINTH_TOP + wallH;
  const roofH = Math.min(1.05, (hd * 2 + lim.front + lim.back) * 0.46);

  // 石砌一层 + 木构二层
  wallBox(b, MAT.wall.stone, 0, PLINTH_TOP + wallH / 2, 0, hw * 2, wallH, hd * 2);
  box(b, MAT.wall.timber, 0, PLINTH_TOP + stoneH + (wallH - stoneH) / 2, 0, hw * 2 + 0.03, wallH - stoneH, hd * 2 + 0.03);
  box(b, MAT.rail.stoneDark, 0, PLINTH_TOP + 0.06, 0, hw * 2 + 0.06, 0.12, hd * 2 + 0.06);
  box(b, MAT.rail.timber, 0, PLINTH_TOP + stoneH, 0, hw * 2 + 0.06, 0.07, hd * 2 + 0.06);

  const fFront = b.sub(0, 0, hd, 0);
  const fBack = b.sub(0, 0, -hd, Math.PI);
  const lf = Math.min(0.05, lim.front);
  // 面朝东（局部 +Z）的大门与窗
  addDoor(fFront, MAT.wood.frameDark, -hw * 0.3, PLINTH_TOP + 0.32, 0.44, 0.58, lf, { steps: 2 });
  addWindow(fFront, MAT.window.lit[0], hw * 0.45, PLINTH_TOP + 0.4, 0.42, 0.38, lf, { mullion: true });
  floorRow(fFront, hw, PLINTH_TOP + FH + 0.36, lf, rng, 3);
  for (let fl = 0; fl < floors; fl++) {
    const y = PLINTH_TOP + fl * FH + 0.36;
    addWindow(b.sub(-hw, 0, 0, -Math.PI / 2), MAT.window.lit[litIndex(rng)], 0, y, 0.4, 0.38, Math.min(0.05, lim.left));
    addWindow(b.sub(hw, 0, 0, Math.PI / 2), MAT.window.lit[litIndex(rng)], 0, y, 0.4, 0.38, Math.min(0.05, lim.right));
  }
  addWindow(fBack, MAT.window.lit[1], 0, PLINTH_TOP + 0.4, 0.4, 0.36, Math.min(0.04, lim.back));

  addSlopeRoof(b, {
    mat: MAT.roof.slateBrown,
    hw,
    hd,
    y: wallTop,
    eave: { front: Math.min(0.2, lim.front), back: Math.min(0.2, lim.back), left: 0.18, right: 0.18 },
    height: roofH,
    ridge: 'x',
    shape: 'gable',
  });
  box(b, MAT.roof.ridge, 0, wallTop + roofH + 0.03, 0, hw * 2 + 0.2, 0.07, 0.11);
  addChimney(b, hw * 0.55, -hd * 0.4, PLINTH_TOP + wallH * 0.6, wallTop + roofH + 0.2);

  // ---- 内部提升机构（吊臂 + 木斗）----
  box(fFront, MAT.rail.timber, 0, PLINTH_TOP + wallH - 0.1, 0.28, 0.14, 0.14, 0.56);
  box(fFront, MAT.rail.timberDark, 0, PLINTH_TOP + wallH - 0.5, 0.5, 0.42, 0.34, 0.3);

  /**
   * ---- 水轮 ----
   * 局部坐标：局部 z 相当于世界 +X（rotY = +π/2），局部 x = 世界 4.9 - z。
   * 轮心取世界 (7.55, -0.35, 4.9)：layout 冻结的河道水面只覆盖 waterHalf（此处到世界 x≈7.15），
   * 8.25 处地面仅 -0.19，轮下缘会整段埋进岸坡；因此把水轮外移到水边，并用石砌轮槽 +
   * 静水面（克隆的 MAT.water.surface，见 millWaterMaterial）把河湾补到轮下，保证“水轮下缘浸在水中”。
   */
  const wheelZ = 7.55 - 9.6; // = -2.05
  const wheelY = -0.35;
  const R = 1.0;
  // 静水面（略低于河道水面，避免共面闪烁）
  b.put(millWaterMaterial(), UNIT.plane, 0.2, -0.655, -2.4, 3.0, 1, 1.5, -Math.PI / 2, 0, 0);
  // 轮槽石壁
  for (const t of [-1, 1]) {
    box(b, MAT.rail.stoneDark, t * 1.16, -0.62, wheelZ + 0.18, 0.22, 1.62, 1.12);
  }
  // 轮辐 / 轮圈 / 叶片
  for (const zz of [-0.18, 0.18]) {
    b.put(MAT.wall.timber, UNIT.ring, 0, wheelY, wheelZ + zz, 0.95, 0.95, 1, 0, 0, 0);
  }
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4;
    // 轮辐：沿半径方向（局部 XY 平面内绕局部 Z 旋转）
    b.put(MAT.wall.timber, UNIT.box, Math.cos(a) * 0.47, wheelY + Math.sin(a) * 0.47, wheelZ, 0.05, 0.98, 0.05, 0, 0, a);
  }
  for (let i = 0; i < 12; i++) {
    const a = (i * Math.PI) / 6;
    b.put(MAT.road.marking, UNIT.box, Math.cos(a) * 0.84, wheelY + Math.sin(a) * 0.84, wheelZ, 0.34, 0.06, 0.2, 0, 0, a);
  }
  // 轮轴 + 轴承
  b.put(MAT.rail.steel, UNIT.cyl12, 0, wheelY, wheelZ + 0.55, 0.055, 1.5, 0.055, Math.PI / 2, 0, 0);
  b.put(MAT.props.metal, UNIT.cyl12, 0, wheelY, wheelZ + 0.34, 0.12, 0.16, 0.12, Math.PI / 2, 0, 0);
  cyl(b, MAT.rail.stoneDark, 0, -0.82, wheelZ + 0.34, 0.15, 1.3, 8);
  box(b, MAT.rail.timber, 0, wheelY + 0.02, wheelZ + 0.52, 0.16, 0.22, 0.34);
  // 引水槽（自北侧上游引到轮顶）+ 支撑
  const flumeY = 0.62;
  box(b, MAT.rail.timber, 0, flumeY - 0.34, wheelZ + 0.9, 0.4, 0.06, 1.5);
  for (const t of [-1, 1]) {
    box(b, MAT.rail.timber, t * 0.17, flumeY - 0.18, wheelZ + 0.9, 0.06, 0.34, 1.5);
  }
  for (const zz of [-0.3, 1.0]) {
    box(b, MAT.rail.timber, 0, flumeY - 0.72, wheelZ + zz, 0.14, 0.72, 0.14);
  }
  box(b, MAT.rail.timber, 0, flumeY - 0.6, wheelZ + 1.62, 0.5, 0.5, 0.1);
}

/* ------------------------------------------------------------------ *
 * 筒仓
 * ------------------------------------------------------------------ */

function buildSilo(b, plan, p, rng) {
  const { hw, hd } = plan;
  const lim = outLimits(plan);
  // 底座/箍环比筒壁多出的量，搜索时按有效半径计入，保证外缘也在净空内
  const pad = clamp(Math.min(lim.front, lim.back, lim.left, lim.right), 0.05, 0.08);
  const H = 3.6;
  const y0 = PLINTH_TOP;
  const r0 = Math.min(hw, hd) * 0.9 - pad;
  const base = b.base; // 已含 fitPlan 的平移，局部坐标即世界构建坐标
  const safe = (rr, cx, cz) => {
    let m = Infinity;
    const R = rr + pad;
    for (let i = 0; i < 12; i++) {
      const a = (i * Math.PI) / 6;
      const d = distAt(base, cx + Math.cos(a) * R, cz + Math.sin(a) * R);
      if (d < m) m = d;
    }
    // 侧梯的横向外缘（圆以外的唯一凸出物）
    for (const t of [-1, 1]) {
      const d = distAt(base, cx + t * 0.16, cz + rr + pad * 0.5 + 0.03);
      if (d < m) m = d;
    }
    return m;
  };
  // 圆仓：在 plot 内移动，取离轨道最远的落点（不越出 plot 矩形）
  let r = r0;
  let cx = 0;
  let cz = 0;
  let best = safe(r0 + pad, 0, 0);
  for (const s of [1, 0.94, 0.88, 0.8, 0.72, 0.64]) {
    const rr = r0 * s;
    const mx = Math.max(0, hw - rr - pad);
    const mz = Math.max(0, hd - rr - pad);
    let bx = 0;
    let bz = 0;
    let bd = safe(rr + pad, 0, 0);
    let step = Math.max(mx, mz, 0.08);
    for (let it = 0; it < 20; it++) {
      let moved = false;
      for (const [dx, dz] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [0.7071, 0.7071],
        [-0.7071, 0.7071],
        [0.7071, -0.7071],
        [-0.7071, -0.7071],
      ]) {
        const nx = clamp(bx + dx * step, -mx, mx);
        const nz = clamp(bz + dz * step, -mz, mz);
        const d = safe(rr + pad, nx, nz);
        if (d > bd + 1e-4) {
          bx = nx;
          bz = nz;
          bd = d;
          moved = true;
          break;
        }
      }
      if (!moved) step *= 0.5;
    }
    if (bd > best) {
      best = bd;
      r = rr;
      cx = bx;
      cz = bz;
    }
    if (bd >= CLEAR + MARGIN + 0.01) {
      r = rr;
      cx = bx;
      cz = bz;
      best = bd;
      break;
    }
  }
  cyl(b, MAT.rail.concrete, cx, y0 + H / 2, cz, r, H, 16);
  b.put(MAT.rail.concrete, UNIT.dome, cx, y0 + H, cz, r, r * 0.55, r);
  for (let i = 0; i < 4; i++) {
    cyl(b, MAT.props.metal, cx, y0 + 0.45 + i * 0.9, cz, r + pad * 0.4, 0.07, 16);
  }
  // 顶部舱口 + 通气管
  cyl(b, MAT.props.metal, cx + r * 0.4, y0 + H + r * 0.42, cz, 0.17, 0.1, 8);
  cyl(b, MAT.props.metal, cx + r * 0.4, y0 + H + r * 0.42 + 0.16, cz, 0.05, 0.3, 8);
  b.put(MAT.rail.steel, UNIT.cyl8, cx + r * 0.4, y0 + H + r * 0.42 + 0.33, cz, 0.14, 0.06, 0.14);
  // 侧梯
  const lx = cx;
  const lz = cz + r + pad * 0.5;
  for (const t of [-1, 1]) {
    box(b, MAT.props.metal, lx + t * 0.13, y0 + 1.7, lz, 0.04, 3.4, 0.04);
  }
  for (let i = 0; i < 9; i++) {
    box(b, MAT.props.metal, lx, y0 + 0.3 + i * 0.4, lz, 0.3, 0.035, 0.035);
  }
  // 底部卸料口
  box(b, MAT.props.metal, cx - r * 0.5, y0 + 0.28, cz + r * 0.5, 0.26, 0.34, 0.3);
  cyl(b, MAT.rail.concrete, cx, y0 - 0.06, cz, r + pad, 0.2, 16);
}

/* ------------------------------------------------------------------ *
 * 水塔
 * ------------------------------------------------------------------ */

function buildWatertower(b, plan, p, rng) {
  const { hw, hd } = plan;
  // 全部尺寸由 plot 内接半尺寸 R 派生，保证外缘（含爬梯、锥顶、基础）都不出 plot 矩形
  const R = Math.min(hw, hd);
  const cx = 0;
  const cz = 0;
  const legTop = 2.9;
  const legSpread = R * 0.55;
  const tankR = Math.min(0.85, R * 0.6);

  // 基础
  const slab = Math.min(legSpread + 0.3, R);
  box(b, MAT.rail.concrete, cx, PLINTH_TOP + 0.12, cz, slab * 2, 0.26, slab * 2);
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      box(b, MAT.rail.concrete, sx * legSpread, PLINTH_TOP + 0.05, sz * legSpread, 0.4, 0.42, 0.4);
    }
  }
  // 4 条钢腿（略外倾）
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      b.put(MAT.props.metal, UNIT.box, sx * legSpread * 0.86, PLINTH_TOP + legTop / 2, sz * legSpread * 0.86, 0.11, legTop, 0.11, sx * -0.06, 0, sz * 0.06);
    }
  }
  // 水平箍 + 交叉支撑
  for (const y of [1.2, 2.3]) {
    for (const sz of [-1, 1]) {
      box(b, MAT.props.metal, 0, y, sz * legSpread * 0.9, legSpread * 1.75, 0.07, 0.07);
    }
    for (const sx of [-1, 1]) {
      box(b, MAT.props.metal, sx * legSpread * 0.9, y, 0, 0.07, 0.07, legSpread * 1.75);
    }
  }
  for (const sx of [-1, 1]) {
    boxR(b, MAT.props.metal, sx * legSpread * 0.9, 2.05, 0, 0.06, 2.1, 0.06, Math.PI / 4, 0, 0);
    boxR(b, MAT.props.metal, 0, 2.05, sx * legSpread * 0.9, 0.06, 2.1, 0.06, 0, Math.PI / 4, 0);
  }
  // 水箱
  const tankH = 1.4;
  cyl(b, MAT.rail.timber, cx, legTop + tankH / 2, cz, tankR, tankH, 16);
  for (const y of [legTop + 0.28, legTop + tankH - 0.28]) {
    cyl(b, MAT.props.metal, cx, y, cz, tankR + 0.03, 0.08, 16);
  }
  cyl(b, MAT.props.metal, cx, legTop - 0.06, cz, tankR + 0.05, 0.12, 16);
  // 锥顶 + 尖饰
  b.put(MAT.roof.metal, UNIT.cone12, cx, legTop + tankH + 0.24, cz, tankR + 0.12, 0.5, tankR + 0.12);
  cyl(b, MAT.props.metal, cx, legTop + tankH + 0.62, cz, 0.03, 0.34, 8);
  b.put(MAT.props.metal, UNIT.ball, cx, legTop + tankH + 0.82, cz, 0.08, 0.08, 0.08);
  // 落水管
  cyl(b, MAT.props.metal, cx + tankR * 0.75, legTop / 2 + 0.2, cz + tankR * 0.75, 0.05, legTop + 0.4, 8);
  b.put(MAT.props.metal, UNIT.cyl8, cx + tankR * 0.75, PLINTH_TOP + 0.1, cz + tankR * 0.75, 0.05, 0.4, 0.05, Math.PI / 2, 0, 0);
  // 爬梯（到水箱顶）
  const lx = cx - tankR - 0.08;
  for (const t of [-1, 1]) {
    box(b, MAT.props.metal, lx, legTop / 2 + 0.6, cz + t * 0.13, 0.04, legTop + 1.2, 0.04);
  }
  for (let i = 0; i < 10; i++) {
    box(b, MAT.props.metal, lx, PLINTH_TOP + 0.42 + i * 0.42, cz, 0.035, 0.035, 0.3);
  }
  box(b, MAT.props.metal, lx, legTop + tankH + 0.1, cz, 0.5, 0.05, 0.34);
}

/* ------------------------------------------------------------------ *
 * 组装
 * ------------------------------------------------------------------ */

function buildPlot(bucket, flat, p) {
  const plan = fitPlan(p);
  const em = makeEmit(bucket, plan.base, flat);
  const rng = mulberry32(hashId(p.id));
  // 筒仓自带圆形混凝土基础，方裙会白占净空（该 plot 贴轨道，方裙是最贴轨道的部件）
  if (p.style !== 'silo') addPlinth(em, plan);
  // fitPlan 的收缩 + 平移结果必须落到几何上：建筑以 (cx, cz) 为局部原点建模
  const b = em.sub(plan.cx, 0, plan.cz);
  switch (p.style) {
    case 'shop':
      buildShop(b, plan, p, rng);
      break;
    case 'tavern':
      buildTavern(b, plan, p, rng);
      break;
    case 'church':
      buildChurch(b, plan, p, rng);
      break;
    case 'hall':
      buildHall(b, plan, p, rng);
      break;
    case 'barn':
      buildBarn(b, plan, p, rng);
      break;
    case 'shed':
      buildShed(b, plan, p, rng);
      break;
    case 'mill':
      buildMill(b, plan, p, rng);
      break;
    case 'silo':
      buildSilo(b, plan, p, rng);
      break;
    case 'watertower':
      buildWatertower(b, plan, p, rng);
      break;
    default:
      buildHouse(b, plan, p, rng);
      break;
  }
  return plan;
}

/** 建造全部 PLOTS，返回结果记录（净空未达标的 plot 会在其中标出 ok=false）。 */
export function createBuildings() {
  const bucket = createGeometryBucket('buildings');
  // 玻璃/标线/水面等不投影的部件单独合批（castShadow = false）
  const flat = createGeometryBucket('buildingsFlat');
  const plans = [];
  for (const p of PLOTS) plans.push(buildPlot(bucket, flat, p));
  const object3D = bucket.build({ name: 'buildings' });
  object3D.add(flat.build({ name: 'buildingsFlat', castShadow: false, receiveShadow: true }));
  object3D.userData.plans = plans.map((pl) => ({
    id: pl.plot.id,
    style: pl.plot.style,
    scale: +pl.scale.toFixed(3),
    ok: pl.ok,
    minTrack: +pl.minDist.toFixed(2),
  }));
  // 建筑不产生夜灯（灯光由 lighting.js 统一创建），契约字段保持为空数组
  return { object3D, lightAnchors: [] };
}

/* ------------------------------------------------------------------ *
 * 自检要点（每个 style 的实际做法）
 * ------------------------------------------------------------------ *
 * house      双坡/四坡/折线形三选一（rng 决定屋脊朝 X 还是 Z），1~2 层砖石基座裙 + 石墙脚带 +
 *            四角护角木 + 檐口线脚；正面门居中（门套 + 1~2 级台阶 + 部分小前廊），其余开间排
 *            2~4 樘窗；二层部分带阳台栏杆；砖砌烟囱（石压顶 + 铸铁烟道）冒出屋脊 0.22。
 * shop       一层店面：分格大橱窗（lit[1]/lit[2] 玻璃 + 木框分格）+ 店面门 + 上下挑檐木线脚 +
 *            倾斜遮阳篷（awningA/B，含金属拉杆）+ 挑臂悬挂招牌（signGreen）；二层住宅窗阵。
 * tavern     两层，二层整面外露木构架（wall.timber 横梁/立柱/角斜撑），宽檐 0.3，门口 3 级石阶，
 *            挑臂酒馆招牌（signGreen + metal），二层窗下 planter 花箱 + flowers 花带。
 * church     中殿 6.0×3.4（檐高 2.6）+ 陡双坡石板瓦（脊高 1.7）+ 屋脊瓦；南墙 4 道扶壁（阶梯式收分）、
 *            3 樘拱形彩窗（lit[1]）+ 拱券入口（西侧偏）;西端 1.9×1.9 钟塔高 5.8（角壁柱 + 束带层 +
 *            四面粉窗 + 拱形百叶钟室），塔顶八角尖顶 2.2 + 黄铜十字架（塔顶 8.3，全场最高）；
 *            东端半圆后殿（半圆柱 + 半锥顶 + 拱窗，净空不足时自动收贴墙面）。
 * hall       两层 3.4×2.6，四坡石板瓦屋面 + 双层线脚；正面 4 柱门廊（柱础/柱头/额枋/三角山花）+
 *            3 级台阶 + 石砌基座 + 拱形底层门洞；方钟塔 1.3×1.3 高出屋面 4.0，四面钟面
 *            （clockFace + 时针分针 + 中心轴），塔顶穹顶 + 黄铜球 + 旗杆。
 * barn       1.5 高木板墙 + 竖压条、陡双坡（58%）木瓦屋面；正面双开门 + 交叉斜撑 + 门楣；
 *            山墙百叶通风窗 + 吊臂滑轮；侧面草棚披屋（金属单坡 + 木柱）。
 * shed       单层小屋（kiosk 为站前售票亭）：金属屋面（双坡或单坡），小门/售票窗 + 柜台 + 告示牌。
 * mill       两层石木（一层石砌 + 二层墙板 + 木裙带），石板瓦双坡 + 屋脊瓦 + 烟囱 + 东面吊臂木斗；
 *            西侧外挂水轮 r=1.0、轮心世界 (7.55, -0.35, 4.9)：轮圈×2（torus）+ 8 辐 + 12 叶片
 *            （road.marking）+ 轮轴/轴承/石墩，下缘 -1.35 < 水面 -0.62；配石砌轮槽、引水槽（含支撑）、
 *            以及补到轮下的静水面（克隆 MAT.water.surface + 独立 repeat，略低于河道水面避免共面）。
 * silo       圆筒仓 r≈0.85、高 3.6（rail.concrete）+ 半球顶 + 4 道钢箍带 + 侧梯 + 顶部舱口/通气管
 *            + 底部卸料口 + 圆形混凝土基础；因冻结 plot 压到轨道，圆仓在 plot 内自动收半径并靠安全侧，
 *            搜索按“圆半径 + 基础外沿”的有效半径计净空（该 plot 不砌方基座裙，圆基础即基座）。
 * watertower 4 条钢腿（外倾，props.metal）+ 两道水平箍与交叉支撑 + 圆柱水箱（rail.timber 木桶身 + 钢箍）
 *            + 锥顶 + 尖饰 + 落水管 + 爬梯 + 混凝土基础；全部尺寸由 plot 内接半尺寸 R 派生，
 *            保证含爬梯/锥顶/基础的外缘都在 plot 矩形内（冻结 plot 压到轨道）。
 * 通用       每栋：footprint 四角 groundHeightAt 最小值 -0.35 起砌 rail.stone 基座裙；窗 = 内凹玻璃
 *            （lit[k]，k=3 不亮，mulberry32(hash(id)) 逐樘抽）/ 4 根 window.frame 外框 / 中梃 / 窗台；
 *            全部几何合批（每材质 1 draw call；不投影件进 buildingsFlat），无任何灯光，lightAnchors = []。
 * 净空       fitPlan 给出收缩后的 hw/hd 与中心平移 (cx, cz)：buildPlot 用 em.sub(cx, 0, cz) 把平移
 *            落到几何上（不这样做等于白收缩）；各面出挑（檐口/基座/门廊/台阶/遮阳篷/招牌/扶壁…）
 *            统一由 outLimits(plan) / outLimit(em, pts) 夹紧，窗套门套按传入 lim 收平或收薄，
 *            保证全部顶点到轨道中心线 ≥ CLEAR(1.35)。实测最紧 plot = 售货亭 1.391。
 */
