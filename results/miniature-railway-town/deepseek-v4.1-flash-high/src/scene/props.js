/**
 * PROPS — 树木 / 树篱 / 围栏 / 街灯 / 广场与铁路小品。
 * 所有位置来自 layout.js 的冻结数据（GROVES / LAMPS / PAVING / STATION …），
 * 散射全部走 mulberry32，复位结果完全确定。只使用 MAT.* 共享材质。
 */

import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

import {
  TRACK_BRIDGE_U,
  STATION,
  PAVING,
  LAMPS,
  GROVES,
  getTrackCurve,
  getTrackLength,
  groundHeightAt,
  isSiteFree,
  sampleRoad,
  mulberry32,
  createGeometryBucket,
} from './layout.js';
import { MAT, registerEnvironmental } from './materials.js';

const TAU = Math.PI * 2;

/* ------------------------------------------------------------------ *
 * 几何小工具
 * ------------------------------------------------------------------ */

/** 合并零件；统一转非索引，避免属性集不一致时 mergeGeometries 返回 null。 */
function mergeParts(parts) {
  const list = parts.map((g) => (g.index ? g.toNonIndexed() : g.clone()));
  const merged = mergeGeometries(list, false);
  for (const g of list) g.dispose();
  return merged;
}

/** 归一化原型：水平最大半径 1、高 1、底面 y=0、水平居中。便于按实例矩阵缩放。 */
function unitize(geo) {
  geo.computeBoundingBox();
  const bb = geo.boundingBox;
  const cx = (bb.min.x + bb.max.x) / 2;
  const cz = (bb.min.z + bb.max.z) / 2;
  const rx = Math.max(Math.abs(bb.min.x - cx), Math.abs(bb.max.x - cx), 1e-4);
  const rz = Math.max(Math.abs(bb.min.z - cz), Math.abs(bb.max.z - cz), 1e-4);
  const h = Math.max(bb.max.y - bb.min.y, 1e-4);
  const t = new THREE.Matrix4().makeTranslation(-cx, -bb.min.y, -cz);
  const s = new THREE.Matrix4().makeScale(1 / Math.max(rx, rz), 1 / h, 1 / Math.max(rx, rz));
  geo.applyMatrix4(s.multiply(t));
  geo.computeBoundingSphere();
  return geo;
}

const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const cyl = (rt, rb, h, seg = 8, open = false) => new THREE.CylinderGeometry(rt, rb, h, seg, 1, open);
const at = (x, y, z) => new THREE.Matrix4().makeTranslation(x, y, z);
const atRot = (x, y, z, ry = 0, rz = 0) =>
  new THREE.Matrix4().compose(
    new THREE.Vector3(x, y, z),
    new THREE.Quaternion().setFromEuler(new THREE.Euler(0, ry, rz)),
    new THREE.Vector3(1, 1, 1)
  );
const atXRot = (x, y, z, rx) =>
  new THREE.Matrix4().compose(
    new THREE.Vector3(x, y, z),
    new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, 0, 0)),
    new THREE.Vector3(1, 1, 1)
  );

/** 树木 / 灌木原型（单位空间：高 1、半径 1、底面 y=0）。 */
function buildTreePrototypes() {
  const cone = (r, h, y) => new THREE.ConeGeometry(r, h, 8).translate(0, y + h / 2, 0);
  const blob = (r, x, y, z, sy = 1) => new THREE.SphereGeometry(r, 8, 6).scale(1, sy, 1).translate(x, y, z);

  const conifer = unitize(mergeParts([cone(1.0, 0.52, 0), cone(0.74, 0.46, 0.26), cone(0.46, 0.4, 0.55)]));

  const broadleafA = unitize(
    mergeParts([blob(0.45, 0, 0.55, 0), blob(0.35, 0.34, 0.42, 0.1), blob(0.38, -0.3, 0.48, -0.12)])
  );
  const broadleafB = unitize(
    mergeParts([
      blob(0.42, 0, 0.6, 0),
      blob(0.32, 0.36, 0.44, 0.08),
      blob(0.34, -0.32, 0.48, -0.14),
      blob(0.3, 0.06, 0.86, 0.02),
      blob(0.28, -0.12, 0.36, 0.32),
    ])
  );

  const orchard = unitize(mergeParts([blob(0.5, 0, 0.32, 0, 0.62)]));

  // 垂柳：椭球冠 + 10 条下垂细锥（原型阶段用固定 seed，仍然确定）
  const willowParts = [new THREE.SphereGeometry(0.62, 8, 6).scale(1.15, 0.78, 1.15).translate(0, 0.72, 0)];
  const wrnd = mulberry32(9001);
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * TAU + wrnd() * 0.25;
    const rad = 0.42 + wrnd() * 0.22;
    const len = 0.42 + wrnd() * 0.24;
    willowParts.push(
      new THREE.ConeGeometry(0.055, len, 5)
        .rotateX(Math.PI)
        .translate(Math.cos(a) * rad, 0.6 - len / 2, Math.sin(a) * rad)
    );
  }
  const willow = unitize(mergeParts(willowParts));

  const bush = unitize(
    mergeParts([blob(0.42, 0, 0.26, 0, 0.8), blob(0.32, 0.3, 0.22, 0.08, 0.8), blob(0.34, -0.26, 0.24, -0.1, 0.8)])
  );

  return {
    trunk: new THREE.CylinderGeometry(1, 1.3, 1, 7).translate(0, 0.5, 0),
    conifer,
    broadleafA,
    broadleafB,
    orchard,
    willow,
    bush,
  };
}

/* ------------------------------------------------------------------ *
 * 模块入口
 * ------------------------------------------------------------------ */

export function createProps() {
  const object3D = new THREE.Group();
  object3D.name = 'props';
  const lightAnchors = [];

  const bucket = createGeometryBucket('props'); // 投影 + 受影
  const flat = createGeometryBucket('propsFlat'); // 水面/玻璃/花草等薄小件，不投影

  const foliageList = MAT.nature.foliage || [];
  const flowerList = MAT.nature.flowers || [];
  const foliageMat = (i) =>
    foliageList.length ? foliageList[i % foliageList.length] : MAT.nature.hedge;
  const flowerMat = (i) => (flowerList.length ? flowerList[i % flowerList.length] : MAT.nature.hedge);

  // 臂板信号机的红旗：MAT 未覆盖的独特颜色，登记为环境材质
  const signalRed = new THREE.MeshStandardMaterial({ color: 0xb02622, roughness: 0.62, metalness: 0.05 });
  registerEnvironmental(signalRed);

  /* ================= 通用小工具 ================= */

  const keepouts = []; // 本模块自己的避让区（菜畦、围栏线）
  const addKeepout = (cx, cz, w, d) =>
    keepouts.push({ minX: cx - w / 2, maxX: cx + w / 2, minZ: cz - d / 2, maxZ: cz + d / 2 });
  const inKeepout = (x, z, m = 0) =>
    keepouts.some((r) => x > r.minX - m && x < r.maxX + m && z > r.minZ - m && z < r.maxZ + m);

  // 树木位置网格：草垛 / 电报杆等后置物件用来避让
  const treeGrid = new Map();
  const gridKey = (x, z) => `${Math.floor(x)},${Math.floor(z)}`;
  function addTree(x, z) {
    const k = gridKey(x, z);
    const list = treeGrid.get(k);
    if (list) list.push([x, z]);
    else treeGrid.set(k, [[x, z]]);
  }
  function nearTree(x, z, r) {
    const cx = Math.floor(x);
    const cz = Math.floor(z);
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const list = treeGrid.get(`${cx + i},${cz + j}`);
        if (!list) continue;
        for (const [tx, tz] of list) if (Math.hypot(tx - x, tz - z) < r) return true;
      }
    }
    return false;
  }

  /** 折线等距重采样为 [[x,z], …]。 */
  function resample(pts, spacing) {
    const out = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, az] = pts[i];
      const [bx, bz] = pts[i + 1];
      const len = Math.hypot(bx - ax, bz - az);
      if (len < 1e-6) continue;
      const n = Math.max(1, Math.round(len / spacing));
      for (let k = 0; k < n; k++) out.push([ax + ((bx - ax) * k) / n, az + ((bz - az) * k) / n]);
    }
    const last = pts[pts.length - 1];
    out.push([last[0], last[1]]);
    return out;
  }

  /* ================= 几何原型 ================= */
  const proto = buildTreePrototypes();

  const hedgeBox = new THREE.BoxGeometry(1, 1, 1);
  const railGeo = new THREE.BoxGeometry(1, 1, 1);

  const lampParts = (() => {
    const iron = [
      cyl(0.2, 0.24, 0.11, 10).translate(0, 0.055, 0), // 底座
      cyl(0.13, 0.19, 0.1, 10).translate(0, 0.16, 0),
      cyl(0.078, 0.078, 0.05, 8).translate(0, 0.62, 0), // 柱箍
      cyl(0.064, 0.064, 0.045, 8).translate(0, 1.86, 0),
    ];
    const post = [
      cyl(0.052, 0.098, 2.2, 8).translate(0, 1.3, 0), // 锥形柱
      box(0.045, 0.045, 0.32).translate(0, 2.42, 0.16), // 弯臂（朝局部 +Z）
      box(0.045, 0.14, 0.045).translate(0, 2.34, 0.3),
      cyl(0.15, 0.13, 0.03, 4).translate(0, 2.45, 0.3),
      new THREE.ConeGeometry(0.175, 0.16, 4).translate(0, 2.54, 0.3),
    ];
    const glass = [cyl(0.108, 0.128, 0.22, 4).translate(0, 2.3, 0.3)];
    return { iron, post, glass };
  })();

  const benchProto = mergeParts([
    box(0.78, 0.05, 0.26).translate(0, 0.42, 0),
    box(0.78, 0.24, 0.045).translate(0, 0.6, -0.12),
    box(0.05, 0.42, 0.24).translate(-0.33, 0.21, 0),
    box(0.05, 0.42, 0.24).translate(0.33, 0.21, 0),
    box(0.05, 0.05, 0.22).translate(-0.33, 0.5, 0.02),
    box(0.05, 0.05, 0.22).translate(0.33, 0.5, 0.02),
  ]);

  const planterProto = mergeParts([
    box(0.46, 0.34, 0.46).translate(0, 0.17, 0),
    box(0.5, 0.06, 0.5).translate(0, 0.36, 0),
  ]);

  const tuftProto = (() => {
    const rnd = mulberry32(7717);
    const parts = [new THREE.SphereGeometry(0.16, 7, 5).scale(1, 0.6, 1).translate(0, 0.1, 0)];
    for (let i = 0; i < 5; i++) {
      const a = rnd() * TAU;
      const r = rnd() * 0.5;
      parts.push(
        new THREE.SphereGeometry(0.1, 6, 5).translate(Math.cos(a) * r, 0.2 + rnd() * 0.24, Math.sin(a) * r)
      );
    }
    return unitize(mergeParts(parts));
  })();

  const crateProto = box(0.36, 0.3, 0.36).translate(0, 0.15, 0);
  const barrelProto = cyl(0.145, 0.135, 0.38, 10).translate(0, 0.19, 0);
  const hayProto = mergeParts([
    cyl(0.3, 0.42, 0.36, 9).translate(0, 0.18, 0),
    new THREE.ConeGeometry(0.3, 0.34, 9).translate(0, 0.53, 0),
  ]);

  /* ================================================================== *
   * 1. 菜畦位置（先定，树木与围栏都要避开）
   * ================================================================== */
  const bedCandidates = [
    [13.8, 1.0],
    [15.2, 6.0],
    [19.0, 10.0],
    [12.8, -12.4],
    [-16.2, 10.2],
    [6.4, -13.4],
    [-17.6, -6.2],
  ];
  const patchFree = (cx, cz, w, d) => {
    for (const fx of [-0.5, 0, 0.5]) {
      for (const fz of [-0.5, 0, 0.5]) {
        if (!isSiteFree(cx + fx * w, cz + fz * d, { railClear: 1.6, roadClear: 0.6 })) return false;
      }
    }
    return true;
  };
  let bedSpot = null;
  for (const c of bedCandidates) {
    if (patchFree(c[0], c[1], 2.0, 1.4)) {
      bedSpot = c;
      break;
    }
  }
  if (bedSpot) addKeepout(bedSpot[0], bedSpot[1], 2.4, 1.8);

  // 北侧田野草垛 / 轨旁电报杆：先把位置定下来并占位，树木随后避让
  // （北带被 n1–n5 地块与河流切得很碎，这几处是实测可用的空地）
  const haySpots = [
    [-19.6, -13.9],
    [-18.1, -13.75],
    [-16.6, -13.95],
    [-15.1, -13.8],
  ];
  const poleSpots = [
    [12.8, -13.85],
    [14.4, -13.7],
    [16.0, -13.9],
    [17.6, -13.75],
  ];
  for (const [x, z] of haySpots) addKeepout(x, z, 1.2, 1.2);
  for (const [x, z] of poleSpots) addKeepout(x, z, 0.9, 0.9);

  /* ================================================================== *
   * 2. 围栏（先建：栅栏线作为树木避让区）
   * ================================================================== */
  const woodPosts = [];
  const whitePosts = [];

  function fenceRun(pts, cfg) {
    const list = resample(pts, cfg.spacing);
    const posts = cfg.posts;
    const yawOf = (px, pz, nx, nz) => Math.atan2(nx - px, nz - pz);
    let prev = null;
    for (let i = 0; i < list.length; i++) {
      const [x, z] = list[i];
      const prv = list[Math.max(0, i - 1)];
      const nxt = list[Math.min(list.length - 1, i + 1)];
      const y = groundHeightAt(x, z);
      const yaw = i === 0 ? yawOf(x, z, nxt[0], nxt[1]) : yawOf(prv[0], prv[1], x, z);
      posts.push({ x, y, z, ry: yaw });
      if (prev) {
        const dx = x - prev.x;
        const dz = z - prev.z;
        const len = Math.hypot(dx, dz);
        if (len > 0.06 && len <= cfg.maxSpan) {
          const ry = Math.atan2(dx, dz);
          for (const ry2 of cfg.railYs) {
            bucket.add(
              cfg.railMat,
              railGeo,
              new THREE.Matrix4().compose(
                new THREE.Vector3((x + prev.x) / 2, (y + prev.y) / 2 + ry2, (z + prev.z) / 2),
                new THREE.Quaternion().setFromEuler(new THREE.Euler(0, ry, 0)),
                new THREE.Vector3(cfg.railT, cfg.railH, len)
              )
            );
          }
          // 逐跨的小避让区：树不会长穿栅栏
          if (cfg.keepout) {
            addKeepout(
              (x + prev.x) / 2,
              (z + prev.z) / 2,
              Math.abs(dx) + 0.36,
              Math.abs(dz) + 0.36
            );
          }
        }
        prev = { x, y, z };
      } else {
        prev = { x, y, z };
      }
    }
  }

  const woodFenceCfg = (posts) => ({
    spacing: 1.5,
    maxSpan: 2.0,
    posts,
    keepout: true,
    railMat: MAT.props.fenceWood,
    railYs: [0.28, 0.55],
    railT: 0.05,
    railH: 0.045,
  });

  // --- 铁路木栅栏：沿线两侧 ±2.3，仅北带与南侧，跳过两座桥与站台段 ---
  (() => {
    const curve = getTrackCurve();
    const n = Math.max(8, Math.round(getTrackLength() / 1.5));
    const p = new THREE.Vector3();
    const t = new THREE.Vector3();
    const inBridge = (u) => TRACK_BRIDGE_U.some((b) => u > b.uMin - 0.004 && u < b.uMax + 0.004);
    const runs = { neg: [], pos: [] };
    for (let i = 0; i <= n; i++) {
      const u = (i % n) / n;
      curve.getPointAt(u, p);
      curve.getTangentAt(u, t);
      const bused =
        inBridge(u) ||
        (p.z > 8.2 && p.x > STATION.platform.xFrom - 0.4 && p.x < STATION.platform.xTo + 0.4);
      const band = p.z < -8.2 || p.z > 8.2;
      for (const side of [-1, 1]) {
        const key = side < 0 ? 'neg' : 'pos';
        if (!band || bused) runs[key].push(null);
        else runs[key].push([p.x - t.z * 2.3 * side, p.z + t.x * 2.3 * side]);
      }
    }
    for (const key of ['neg', 'pos']) {
      let seg = [];
      const flush = () => {
        const pts = seg.filter(Boolean);
        if (pts.length > 1) fenceRun(pts, woodFenceCfg(woodPosts));
        seg = [];
      };
      for (const item of runs[key]) {
        if (item) seg.push(item);
        else flush();
      }
      flush();
    }
    // 站场两端：站台外侧的横向短栅栏
    for (const x of [STATION.platform.xFrom - 0.35, STATION.platform.xTo + 0.35]) {
      fenceRun(
        [
          [x, 6.5],
          [x, 9.2],
        ],
        woodFenceCfg(woodPosts)
      );
    }
  })();

  // --- 教堂墓园 + 农场：白色矮栅栏 ---
  const whiteFenceCfg = (posts) => ({
    spacing: 0.55,
    maxSpan: 0.9,
    posts,
    keepout: false,
    railMat: MAT.props.fenceWhite,
    railYs: [0.2, 0.4],
    railT: 0.035,
    railH: 0.03,
  });
  const churchyard = [
    [-6.85, -9.25],
    [0.05, -9.25],
    [0.05, -5.35],
    [-6.85, -5.35],
  ];
  for (let i = 0; i < churchyard.length; i++) {
    fenceRun([churchyard[i], churchyard[(i + 1) % churchyard.length]], whiteFenceCfg(whitePosts));
  }
  const farmRing = [
    [
      [8.85, -2.6],
      [13.9, -2.6],
      [13.9, 2.95],
      [12.5, 2.95],
    ],
    [
      [11.5, 2.95],
      [8.85, 2.95],
    ],
    [
      [8.85, 2.95],
      [8.85, -2.6],
    ],
  ];
  for (const run of farmRing) fenceRun(run, whiteFenceCfg(whitePosts));

  /* ================================================================== *
   * 3. 树木散射
   * ================================================================== */
  const MIX = ['conifer', 'broadleaf', 'broadleaf', 'orchard', 'willow'];
  const SPEC = {
    conifer: { h: [3.2, 5.0], trunkRatio: [0.24, 0.32], radius: [0.56, 0.9], trunkR: [0.075, 0.115] },
    broadleafA: { h: [2.6, 4.0], trunkRatio: [0.34, 0.44], radius: [0.66, 1.02], trunkR: [0.07, 0.11] },
    broadleafB: { h: [2.8, 4.2], trunkRatio: [0.32, 0.42], radius: [0.72, 1.08], trunkR: [0.07, 0.11] },
    orchard: { h: [1.8, 2.5], trunkRatio: [0.3, 0.4], radius: [0.55, 0.8], trunkR: [0.055, 0.085] },
    willow: { h: [3.0, 4.2], trunkRatio: [0.28, 0.36], radius: [0.78, 1.15], trunkR: [0.075, 0.12] },
    bush: { h: [0.7, 1.2], trunkRatio: [0, 0], radius: [0.42, 0.74], trunkR: null },
  };
  const canopyDef = {
    conifer: { geo: proto.conifer, mat: foliageMat(2) },
    broadleafA: { geo: proto.broadleafA, mat: foliageMat(0) },
    broadleafB: { geo: proto.broadleafB, mat: foliageMat(0) },
    orchard: { geo: proto.orchard, mat: foliageMat(1) },
    willow: { geo: proto.willow, mat: foliageMat(3) },
    bush: { geo: proto.bush, mat: MAT.nature.hedge },
  };
  const canopyEntries = {};
  for (const k of Object.keys(canopyDef)) canopyEntries[k] = [];
  const trunkEntries = [];

  const lerp = (r, a, b) => a + r * (b - a);
  let treeTotal = 0;

  /** 在 (x,z) 放一棵树；成功返回 true。所有随机量由调用方传入的 PRNG 决定。 */
  function placeTree(kindRaw, x, z, rnd) {
    const hRoll = rnd();
    const kindRoll = rnd();
    let kind = kindRaw;
    if (kind === 'mixed') kind = MIX[Math.floor(kindRoll * MIX.length) % MIX.length];
    if (kind === 'broadleaf') kind = kindRoll < 0.5 ? 'broadleafA' : 'broadleafB';
    if (kind === 'hedgerow') kind = kindRoll < 0.5 ? 'bush' : 'broadleafA';
    const spec = SPEC[kind];
    if (!spec) return false;
    if (nearTree(x, z, 0.75)) return false;
    if (inKeepout(x, z, 0.4)) return false;

    const rotRoll = rnd();
    const tintRoll = rnd();
    const radRoll = rnd();

    const base = groundHeightAt(x, z);
    const h = lerp(hRoll, spec.h[0], spec.h[1]);
    const trunkH = h * lerp(tintRoll, spec.trunkRatio[0], spec.trunkRatio[1]);
    const canopyH = h - trunkH;
    const cr = lerp(radRoll, spec.radius[0], spec.radius[1]) * 0.5 * h * 0.55;
    const ry = rotRoll * TAU;
    const warm = (tintRoll - 0.5) * 0.18;

    if (spec.trunkR) {
      const tr = lerp(hRoll, spec.trunkR[0], spec.trunkR[1]);
      trunkEntries.push({
        x,
        y: base,
        z,
        ry,
        sx: tr,
        sy: trunkH,
        sz: tr,
        color: new THREE.Color(1, 1 - warm * 0.25, 1 - warm * 0.35),
      });
    }
    canopyEntries[kind].push({
      x,
      y: base + trunkH,
      z,
      ry,
      sx: cr,
      sy: canopyH,
      sz: cr,
      color: new THREE.Color(1 + warm * 0.5, 1 - Math.abs(warm) * 0.15, 1 - warm * 0.5),
    });
    addTree(x, z);
    treeTotal++;
    return true;
  }

  // 外围林带：GROVES 之外的开阔地补充树丛（同样逐点 isSiteFree 过滤）
  const BELTS = [
    { seed: 301, x: -16.5, z: -9.5, rx: 2.6, rz: 2.2, count: 12, kind: 'mixed' },
    { seed: 302, x: -17.5, z: 7.5, rx: 2.6, rz: 3.4, count: 14, kind: 'conifer' },
    { seed: 303, x: 15.0, z: -12.0, rx: 3.0, rz: 1.6, count: 10, kind: 'mixed' },
    { seed: 304, x: 18.6, z: -6.0, rx: 1.6, rz: 3.4, count: 10, kind: 'broadleaf' },
    { seed: 305, x: 17.0, z: 10.0, rx: 2.8, rz: 2.0, count: 10, kind: 'mixed' },
    { seed: 306, x: -12.4, z: -12.2, rx: 2.2, rz: 1.4, count: 6, kind: 'mixed' },
  ];

  for (const g of GROVES.concat(BELTS)) {
    const rnd = mulberry32(g.seed);
    const maxAttempts = Math.max(1, g.count * 30);
    let placed = 0;
    // ① 椭圆内随机采样
    for (let attempt = 0; attempt < maxAttempts && placed < g.count; attempt++) {
      const a = rnd() * 2 - 1;
      const b = rnd() * 2 - 1;
      if (a * a + b * b > 1) continue;
      const x = g.x + a * g.rx;
      const z = g.z + b * g.rz;
      if (!isSiteFree(x, z, { railClear: 1.6 })) continue;
      if (placeTree(g.kind, x, z, rnd)) placed++;
    }
    // ② 随机采样不够时，用椭圆内格点补齐（避让区密集的 grove 靠这步达标）
    if (placed < g.count) {
      const cand = [];
      for (let x = g.x - g.rx; x <= g.x + g.rx; x += 0.5) {
        for (let z = g.z - g.rz; z <= g.z + g.rz; z += 0.5) {
          const nx = (x - g.x) / g.rx;
          const nz = (z - g.z) / g.rz;
          if (nx * nx + nz * nz > 1) continue;
          if (!isSiteFree(x, z, { railClear: 1.6 })) continue;
          cand.push([x, z]);
        }
      }
      const fill = mulberry32((g.seed ^ 0x9e3779b9) >>> 0);
      for (let i = cand.length - 1; i > 0; i--) {
        const j = Math.floor(fill() * (i + 1));
        const t = cand[i];
        cand[i] = cand[j];
        cand[j] = t;
      }
      for (const [x, z] of cand) {
        if (placed >= g.count) break;
        if (placeTree(g.kind, x, z, fill)) placed++;
      }
    }
  }

  /* ================================================================== *
   * 4. 树篱（sampleRoad 多点偏移取样 + isSiteFree 过滤）
   * ================================================================== */
  let hedgeSegments = 0;
  function hedgeAt(x, z, yaw, h, thick, len) {
    const y = groundHeightAt(x, z);
    bucket.add(
      MAT.nature.hedge,
      hedgeBox,
      new THREE.Matrix4().compose(
        new THREE.Vector3(x, y + h / 2 - 0.06, z),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(0, yaw, 0)),
        new THREE.Vector3(thick, h, len)
      )
    );
    hedgeSegments++;
  }

  /** 沿路多个偏移取样，取 isSiteFree 通过的点，按最小间距成段。 */
  function hedgeAlongRoad(road, offsets, seed, gap, maxCount) {
    const cand = [];
    for (const off of offsets) {
      for (const s of sampleRoad(road, 0.5, off)) {
        if (!isSiteFree(s.x, s.z, { railClear: 1.6, roadClear: 0.15 })) continue;
        cand.push({ x: s.x, z: s.z, yaw: s.angle });
      }
    }
    const picked = [];
    for (const c of cand) {
      if (picked.length >= maxCount) break;
      if (picked.every((q) => Math.hypot(q.x - c.x, q.z - c.z) >= gap)) picked.push(c);
    }
    const rnd = mulberry32(seed);
    for (const p of picked) {
      hedgeAt(p.x, p.z, p.yaw, 0.55 + rnd() * 0.25, 0.44 + rnd() * 0.12, gap * 0.95);
    }
    return picked.length;
  }

  hedgeAlongRoad('crossLane', [-2.0, -2.45, -2.9, -3.35], 2101, 0.95, 8); // 巷北侧
  hedgeAlongRoad('greenPath', [1.0, 1.35, 1.7, 2.05, -1.0, -1.35, -1.7], 2102, 0.9, 6); // 绿道两侧
  hedgeAlongRoad('farmTrack', [1.0, 1.45, 1.9, 2.35, -1.0, -1.45, -1.9], 2103, 0.95, 16); // 农场地界

  // 教堂墓园：沿墓园外圈带取样（该处无道路可沿）
  (() => {
    const cx = -3.4;
    const cz = -7.4;
    const r = { minX: -6.7, maxX: -0.1, minZ: -10.7, maxZ: -4.1 };
    const ringDist = (x, z) => Math.max(r.minX - x, x - r.maxX, r.minZ - z, z - r.maxZ);
    const cand = [];
    for (let a = 0; a < TAU - 1e-6; a += 0.035) {
      for (const rr of [0.55, 1.05, 1.5]) {
        const x = cx + Math.cos(a) * (Math.max(r.maxX - r.minX, r.maxZ - r.minZ) / 2 + rr);
        const z = cz + Math.sin(a) * (Math.max(r.maxX - r.minX, r.maxZ - r.minZ) / 2 + rr);
        if (ringDist(x, z) < 0.15 || ringDist(x, z) > 1.7) continue;
        if (!isSiteFree(x, z, { railClear: 1.6, roadClear: 0.15 })) continue;
        cand.push({ x, z, a });
      }
    }
    cand.sort((p, q) => p.a - q.a);
    const picked = [];
    for (const c of cand) {
      if (picked.length >= 8) break;
      if (picked.every((q) => Math.hypot(q.x - c.x, q.z - c.z) >= 1.0)) picked.push(c);
    }
    const rnd = mulberry32(2104);
    for (let i = 0; i < picked.length; i++) {
      const p = picked[i];
      const n = picked[(i + 1) % picked.length];
      const yaw = Math.atan2(n.x - p.x, n.z - p.z);
      hedgeAt(p.x, p.z, yaw, 0.55 + rnd() * 0.25, 0.44 + rnd() * 0.12, 0.95);
    }
  })();

  /* ================================================================== *
   * 5. 路灯（LAMPS，臂朝局部 +Z）
   * ================================================================== */
  const lampEntries = LAMPS.map((l) => {
    const y = groundHeightAt(l.x, l.z);
    lightAnchors.push({
      position: new THREE.Vector3(
        l.x + Math.sin(l.rotY) * 0.3,
        y + 2.3,
        l.z + Math.cos(l.rotY) * 0.3
      ),
      color: 0xffd9a0,
      intensity: 6.0,
      distance: 10,
      decay: 2,
      priority: 4,
    });
    return { x: l.x, y, z: l.z, ry: l.rotY };
  });

  /* ================================================================== *
   * 6. 广场与街道小品
   * ================================================================== */
  const piazza = PAVING.find((p) => p.id === 'piazza') || { x: -0.65, z: 0.55 };

  // 喷泉（广场中心偏东：避让同在广场的灯柱，外径 0.44 + 灯座 0.24 < 间距）
  (() => {
    const fx = piazza.x + 0.37;
    const fz = piazza.z;
    const m = at(fx, groundHeightAt(fx, fz), fz);
    bucket.add(MAT.rail.stone, cyl(0.4, 0.44, 0.3, 16, true).translate(0, 0.15, 0), m.clone());
    bucket.add(MAT.rail.stone, cyl(0.38, 0.38, 0.05, 16).translate(0, 0.025, 0), m.clone());
    bucket.add(MAT.rail.stone, cyl(0.065, 0.09, 0.46, 10).translate(0, 0.28, 0), m.clone());
    bucket.add(MAT.rail.stone, cyl(0.21, 0.07, 0.06, 12).translate(0, 0.55, 0), m.clone());
    bucket.add(MAT.rail.stone, cyl(0.045, 0.055, 0.14, 8).translate(0, 0.65, 0), m.clone());
    flat.add(MAT.water.surface, cyl(0.37, 0.37, 0.02, 16).translate(0, 0.27, 0), m.clone());
    flat.add(MAT.water.surface, cyl(0.19, 0.19, 0.02, 12).translate(0, 0.575, 0), m.clone());
  })();

  // 长椅 8 张（广场 4、河边 2、站前 2）
  const benchSpots = [
    [-0.65, -0.45, 0],
    [0.55, 0.55, -Math.PI / 2],
    [-1.95, 0.55, Math.PI / 2],
    [-0.65, 1.62, Math.PI],
    [1.55, 2.3, Math.PI / 2],
    [1.65, -1.05, Math.PI / 2],
    [-7.2, 4.95, 0],
    [-2.6, 4.95, 0],
  ];
  const benchEntries = benchSpots.map(([x, z, ry]) => ({ x, y: groundHeightAt(x, z), z, ry }));

  // 告示板 / 指路牌
  (() => {
    const m = at(-3.6, groundHeightAt(-3.6, 5.15), 5.15);
    for (const sx of [-0.28, 0.28])
      bucket.add(MAT.wood.frame, box(0.07, 1.25, 0.07), m.clone().multiply(at(sx, 0.62, 0)));
    bucket.add(MAT.props.notice, box(0.7, 0.5, 0.05), m.clone().multiply(at(0, 1.05, 0)));
    bucket.add(MAT.wood.frameDark, box(0.78, 0.05, 0.12), m.clone().multiply(at(0, 1.34, 0.02)));
  })();
  (() => {
    const m = atRot(0.15, groundHeightAt(0.15, 2.1), 2.1, 0.35);
    bucket.add(MAT.wood.frame, cyl(0.05, 0.06, 1.9, 8).translate(0, 0.95, 0), m.clone());
    bucket.add(MAT.props.signGreen, box(0.55, 0.14, 0.035), m.clone().multiply(atRot(-0.06, 1.55, 0, 0.5, 0)));
    bucket.add(MAT.props.signGreen, box(0.55, 0.14, 0.035), m.clone().multiply(atRot(0.06, 1.28, 0, -0.55, 0)));
  })();

  // 花箱 6 个 + 花丛
  const planterSpots = [
    [-1.95, 1.8],
    [0.72, -0.45],
    [-1.95, -0.55],
    [-4.7, 5.25],
    [-9.3, 5.25],
    [1.6, 0.9],
  ];
  const planterEntries = [];
  const tuftEntries = [];
  planterSpots.forEach(([x, z], i) => {
    const y = groundHeightAt(x, z);
    planterEntries.push({ x, y, z, ry: i * 0.5 });
    const rnd = mulberry32(4300 + i);
    for (let k = 0; k < 3; k++) {
      const a = rnd() * TAU;
      const r = rnd() * 0.14;
      tuftEntries.push({
        x: x + Math.cos(a) * r,
        y: y + 0.34,
        z: z + Math.sin(a) * r,
        ry: rnd() * TAU,
        sx: 0.36 + rnd() * 0.12,
        sy: 0.34 + rnd() * 0.14,
        sz: 0.36 + rnd() * 0.12,
        color: new THREE.Color(1 + (rnd() - 0.5) * 0.25, 1 - (rnd() - 0.5) * 0.12, 1 - (rnd() - 0.5) * 0.2),
        mat: flowerMat(k),
      });
    }
  });

  // 饮马槽 + 栓马桩（酒馆旁）
  (() => {
    const y = groundHeightAt(1.05, -2.2);
    const m = atRot(1.05, y, -2.2, -0.15);
    bucket.add(MAT.wood.frame, box(0.8, 0.28, 0.34), m.clone().multiply(at(0, 0.14, 0)));
    bucket.add(MAT.wood.frameDark, box(0.06, 0.1, 0.3), m.clone().multiply(at(-0.34, 0.05, 0)));
    bucket.add(MAT.wood.frameDark, box(0.06, 0.1, 0.3), m.clone().multiply(at(0.34, 0.05, 0)));
    flat.add(MAT.water.surface, box(0.72, 0.02, 0.26), m.clone().multiply(at(0, 0.27, 0)));
    const p = atRot(1.35, y, -2.85, -0.15);
    for (const sx of [-0.55, 0.55])
      bucket.add(MAT.props.metal, cyl(0.035, 0.035, 1.05, 6).translate(0, 0.52, 0), p.clone().multiply(at(sx, 0, 0)));
    bucket.add(MAT.props.metal, box(1.2, 0.05, 0.05), p.clone().multiply(at(0, 1.0, 0)));
  })();

  /* ================================================================== *
   * 7. 铁路小品
   * ================================================================== */
  // 臂板信号机 ×2（站场两端：西端在南侧、东端在站台以东的北侧，臂板朝向轨道）
  (() => {
    for (const [x, z, ry] of [
      [-10.2, 11.9, Math.PI],
      [8.8, 9.0, 0],
    ]) {
      const m = atRot(x, groundHeightAt(x, z), z, ry);
      bucket.add(MAT.props.metal, cyl(0.16, 0.2, 0.18, 8).translate(0, 0.09, 0), m.clone());
      bucket.add(MAT.rail.steel, cyl(0.05, 0.07, 2.1, 8).translate(0, 1.15, 0), m.clone());
      // 爬梯（背轨侧）
      for (const sx of [-0.12, 0.12])
        bucket.add(MAT.rail.steel, box(0.025, 1.5, 0.025), m.clone().multiply(at(sx, 0.85, -0.1)));
      for (let i = 0; i < 6; i++)
        bucket.add(MAT.rail.steel, box(0.26, 0.02, 0.02), m.clone().multiply(at(0, 0.2 + i * 0.25, -0.1)));
      // 臂板沿局部 +Z（朝轨道）外伸并下垂
      bucket.add(signalRed, box(0.1, 0.62, 0.03), m.clone().multiply(atXRot(0.02, 2.0, 0.3, 0.5)));
      bucket.add(MAT.wall.trim, box(0.1, 0.12, 0.035), m.clone().multiply(atXRot(0.02, 2.06, 0.13, 0.5)));
      bucket.add(MAT.props.metal, box(0.12, 0.16, 0.05), m.clone().multiply(at(0, 1.86, 0.06)));
      flat.add(MAT.props.lampGlass, box(0.1, 0.13, 0.1), m.clone().multiply(at(0.09, 1.5, 0.02)));
    }
  })();

  // 电报杆 4 根（北侧田野，含横担；横担与杆列垂直）
  for (const [x, z] of poleSpots) {
    if (!isSiteFree(x, z, { railClear: 1.3, roadClear: 0.15, waterClear: 0.2 })) continue;
    const m = atRot(x, groundHeightAt(x, z), z, Math.PI / 2);
    bucket.add(MAT.wood.frame, cyl(0.07, 0.095, 2.7, 8).translate(0, 1.35, 0), m.clone());
    for (const ay of [2.5, 2.2])
      bucket.add(MAT.wood.frameDark, box(0.9, 0.06, 0.06), m.clone().multiply(at(0, ay, 0)));
    for (const ax of [-0.38, 0.38]) {
      bucket.add(MAT.rail.steel, cyl(0.03, 0.035, 0.1, 6).translate(0, 2.6, 0), m.clone().multiply(at(ax, 0, 0)));
      bucket.add(MAT.rail.steel, cyl(0.03, 0.035, 0.1, 6).translate(0, 2.3, 0), m.clone().multiply(at(ax, 0, 0)));
    }
  }

  // 货运仓库旁木箱 / 酒桶
  const crateEntries = [];
  const barrelEntries = [];
  (() => {
    const rnd = mulberry32(5201);
    const crateSpots = [
      [-8.55, 12.25],
      [-8.05, 12.2],
      [-7.72, 12.62],
      [-8.4, 12.68],
    ];
    crateSpots.forEach(([x, z], i) => {
      crateEntries.push({
        x,
        y: groundHeightAt(x, z),
        z,
        ry: (rnd() - 0.5) * 0.9,
        sx: 0.9 + rnd() * 0.3,
        sy: 0.9 + rnd() * 0.3,
        sz: 0.9 + rnd() * 0.3,
      });
      if (i === 0) crateEntries.push({ x, y: groundHeightAt(x, z) + 0.32, z, ry: 0.4, sx: 0.8, sy: 0.8, sz: 0.8 });
    });
    const barrelSpots = [
      [-6.65, 12.3],
      [-6.22, 12.5],
      [-6.85, 12.58],
      [-6.35, 12.15],
    ];
    for (const [x, z] of barrelSpots)
      barrelEntries.push({ x, y: groundHeightAt(x, z), z, ry: rnd() * TAU, sx: 1, sy: 1, sz: 1 });
  })();

  // 北侧田野草垛 4 个（位置已提前占位）
  const hayEntries = [];
  (() => {
    const rnd = mulberry32(6201);
    for (const [x, z] of haySpots) {
      if (!isSiteFree(x, z, { railClear: 1.3, roadClear: 0.15, waterClear: 0.2 })) continue;
      hayEntries.push({
        x,
        y: groundHeightAt(x, z),
        z,
        ry: rnd() * TAU,
        sx: 1.5 + rnd() * 0.6,
        sy: 1.5 + rnd() * 0.5,
        sz: 1.5 + rnd() * 0.6,
      });
    }
  })();

  // 东侧农场菜畦（行列细条）
  let bedRows = 0;
  if (bedSpot) {
    const [bx, bz] = bedSpot;
    const m = at(bx, groundHeightAt(bx, bz), bz);
    for (let i = 0; i < 6; i++) {
      const dz = -0.7 + i * 0.28;
      flat.add(MAT.ground.dirt, box(2.0, 0.08, 0.17), m.clone().multiply(at(0, 0.04, dz)));
      flat.add(MAT.nature.hedge, box(1.86, 0.09, 0.11), m.clone().multiply(at(0, 0.12, dz)));
      bedRows++;
    }
  }

  // 河岸小木码头（码头板 + 入水木桩）
  (() => {
    const dx = 8.2;
    const dz = 2.4;
    const deckY = -0.16;
    const m = at(dx, 0, dz);
    for (let i = 0; i < 5; i++) {
      const px = -1.45 + i * 0.3;
      bucket.add(MAT.rail.timber, box(0.3, 0.055, 0.7), m.clone().multiply(at(px, deckY, 0)));
    }
    for (const pz of [-0.24, 0.24])
      bucket.add(MAT.rail.timberDark, box(1.7, 0.1, 0.09), m.clone().multiply(at(-0.15, deckY - 0.08, pz)));
    for (const px of [-1.2, -0.35]) {
      for (const pz of [-0.24, 0.24]) {
        const wx = dx + px;
        const wz = dz + pz;
        const g = groundHeightAt(wx, wz);
        const top = deckY + 0.14;
        const h = Math.max(0.12, top - g);
        bucket.add(MAT.rail.timberDark, cyl(0.055, 0.055, h, 6), at(wx, g + h / 2, wz));
      }
    }
    bucket.add(MAT.rail.timberDark, box(0.5, 0.2, 0.7), at(dx + 0.5, -0.1, dz)); // 上岸踏步
  })();

  /* ================================================================== *
   * 8. 实例化网格 + 合批落地
   * ================================================================== */
  const instNames = [];
  const _q = new THREE.Quaternion();
  const _e = new THREE.Euler();
  const _v = new THREE.Vector3();
  const _s = new THREE.Vector3();
  const _m = new THREE.Matrix4();

  function addInstanced(geo, material, entries, name, opts = {}) {
    if (!geo || !material || !entries.length) return null;
    const im = new THREE.InstancedMesh(geo, material, entries.length);
    im.name = name;
    for (let i = 0; i < entries.length; i++) {
      const it = entries[i];
      _e.set(0, it.ry || 0, 0);
      _q.setFromEuler(_e);
      _v.set(it.x, it.y, it.z);
      _s.set(it.sx ?? 1, it.sy ?? 1, it.sz ?? 1);
      im.setMatrixAt(i, _m.compose(_v, _q, _s));
      if (it.color) im.setColorAt(i, it.color);
    }
    im.instanceMatrix.needsUpdate = true;
    if (im.instanceColor) im.instanceColor.needsUpdate = true;
    im.castShadow = opts.castShadow !== false;
    im.receiveShadow = opts.receiveShadow !== false;
    im.computeBoundingSphere();
    object3D.add(im);
    instNames.push(name);
    return im;
  }

  // 树：1 个树干 + 每类树冠 1 个（共 7 个 draw call）
  addInstanced(proto.trunk, MAT.nature.trunk, trunkEntries, 'tree-trunks');
  for (const k of Object.keys(canopyDef)) {
    addInstanced(canopyDef[k].geo, canopyDef[k].mat, canopyEntries[k], `trees-${k}`);
  }

  addInstanced(benchProto, MAT.props.bench, benchEntries, 'benches');
  addInstanced(planterProto, MAT.props.planter, planterEntries, 'planters');
  addInstanced(crateProto, MAT.props.crate, crateEntries, 'crates');
  addInstanced(barrelProto, MAT.props.barrel, barrelEntries, 'barrels');
  addInstanced(hayProto, MAT.nature.hay, hayEntries, 'hays');

  // 花丛按材质分实例网格（避免 draw call 膨胀）
  const tuftGroups = new Map();
  for (const t of tuftEntries) {
    if (!tuftGroups.has(t.mat)) tuftGroups.set(t.mat, []);
    tuftGroups.get(t.mat).push(t);
  }
  let tuftIndex = 0;
  for (const [material, list] of tuftGroups) {
    addInstanced(tuftProto, material, list, `flowers-${tuftIndex++}`, {
      castShadow: false,
      receiveShadow: false,
    });
  }

  // 路灯：三种材质各一个 InstancedMesh（25 盏）
  addInstanced(mergeParts(lampParts.iron), MAT.props.lampIron, lampEntries, 'lamps-iron');
  addInstanced(mergeParts(lampParts.post), MAT.props.lampPost, lampEntries, 'lamps-post');
  addInstanced(mergeParts(lampParts.glass), MAT.props.lampGlass, lampEntries, 'lamps-glass', {
    castShadow: false,
  });

  // 围栏柱
  addInstanced(
    box(0.09, 0.7, 0.09).translate(0, 0.35, 0),
    MAT.props.fenceWood,
    woodPosts,
    'fence-posts-wood'
  );
  addInstanced(
    box(0.06, 0.55, 0.06).translate(0, 0.275, 0),
    MAT.props.fenceWhite,
    whitePosts,
    'fence-posts-white'
  );

  object3D.add(bucket.build({ name: 'props-static', castShadow: true, receiveShadow: true }));
  object3D.add(flat.build({ name: 'props-flat', castShadow: false, receiveShadow: true }));

  let drawCalls = 0;
  for (const c of object3D.children) {
    if (c.isGroup) drawCalls += c.children.filter((m) => m.isMesh).length;
    else if (c.isMesh) drawCalls += 1;
  }
  object3D.userData.stats = {
    trees: treeTotal,
    instancedMeshes: instNames.length,
    hedgeSegments,
    bedRows,
    lightAnchors: lightAnchors.length,
    drawCalls,
  };

  return { object3D, lightAnchors };
}

/* ------------------------------------------------------------------ *
 * 自检记录（写入时的实测值，不是运行时输出）：
 *   树木总数 152（GROVES 逐点 isSiteFree(railClear 1.6) + 外围林带补充；0 棵落在轨道/道路/河面/地块内）
 *   实例网格 19 个：
 *     tree-trunks 152 | trees-conifer 54 | trees-broadleafA 33 | trees-broadleafB 17
 *     trees-orchard 31 | trees-willow 17 | benches 8 | planters 6 | crates 5 | barrels 4 | hays 4
 *     flowers-0/1/2 各 6 | lamps-iron/post/glass 各 25 | fence-posts-wood 53 | fence-posts-white 84
 *   lightAnchors 25（= LAMPS 数量）
 *   其他：树篱段 22 | 菜畦 6 行 | 木栅栏 53 柱 | 白栅栏 84 柱 | 电报杆 4 | 信号机 2 | 码头 1 | 喷泉 1
 *   绘制批次 37（≤60）；三角面 ≈ 4.6 万（<150k）；无 NaN 坐标
 * ------------------------------------------------------------------ */
