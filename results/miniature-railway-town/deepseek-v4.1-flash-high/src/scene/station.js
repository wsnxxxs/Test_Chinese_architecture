/**
 * STATION — 站台、站房、站台雨棚与站台设施。
 *
 * 平面尺寸全部读自 layout.js 的 STATION，本模块不另立坐标常量（只写细部造型尺寸）。
 * 站房 rotY = π：正面门厅朝 -Z 面向小镇与站前广场，背面朝站台；屋面后檐与站台北缘齐平，
 * 避免站房压住站台台面。
 */

import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { STATION, createGeometryBucket, scaleUV, groundHeightAt, mulberry32 } from './layout.js';
import { MAT } from './materials.js';

const PL = STATION.platform;
const BD = STATION.building;
const CN = STATION.canopy;

/* --- 细部造型尺寸 --- */
const PLINTH = 0.12; // 石砌基座高
const FLOOR_LOW = 2.6; // 一层层高
const FLOOR_UP = 2.4; // 二层层高
const RIDGE_RISE = 0.95; // 屋脊高出檐口
const EAVE_OUT = 0.3; // 站房屋面出檐
const CANOPY_T = 0.05; // 雨棚屋面板厚
const CANOPY_DROP = 0.09; // 雨棚单坡向南下降
const BAYS = 4; // 雨棚跨数（5 根柱，柱距 2.2）

/* 站台设施定位（已按站台平面校验：互不重叠、不越台缘、不压警示带） */
const FIX = {
  benchX: [-6.3, -4.2, -1.6],
  benchZ: 8.0,
  lampPost: [
    [-6.3, 8.5],
    [0.3, 8.5],
  ],
  planter: [
    [-7.72, 8.82],
    [1.72, 8.05],
  ],
  bin: [-7.72, 8.15],
  cart: [1.15, 8.72],
  fenceX: 1.96,
  fenceZ: [7.8, 8.98],
  pendantX: [-4.1, -1.9], // 雨棚吊灯（柱间、长椅正上方）
};

export function createStation() {
  const solid = createGeometryBucket('stationSolid');
  const glow = createGeometryBucket('stationGlow'); // 玻璃、灯罩：不投影
  const mark = createGeometryBucket('stationMark'); // 警示线等薄件：不投影

  const lightAnchors = [];

  /* ---------------- 摆放工具 ---------------- */

  const _e = new THREE.Euler();
  const _q = new THREE.Quaternion();
  const _v = new THREE.Vector3();
  const _s = new THREE.Vector3();
  const UBOX = new THREE.BoxGeometry(1, 1, 1); // 共享单位盒/柱，尺寸走矩阵
  const UCYL = new THREE.CylinderGeometry(0.5, 0.5, 1, 12); // 半径 0.5 => 矩阵的 X/Z 缩放即直径

  function trs(x, y, z, rot, scale) {
    _e.set(rot ? rot[0] : 0, rot ? rot[1] : 0, rot ? rot[2] : 0);
    _q.setFromEuler(_e);
    _v.set(x, y, z);
    _s.set(scale ? scale[0] : 1, scale ? scale[1] : 1, scale ? scale[2] : 1);
    return new THREE.Matrix4().compose(_v, _q, _s);
  }

  /** 在基准矩阵（可空）下摆一个盒体 */
  function boxM(bucket, mat, base, x, y, z, w, h, d, rot) {
    const m = trs(x, y, z, rot, [w, h, d]);
    bucket.add(mat, UBOX, base ? base.clone().multiply(m) : m);
  }

  function box(bucket, mat, x, y, z, w, h, d, rot) {
    boxM(bucket, mat, null, x, y, z, w, h, d, rot);
  }

  /** 立式圆柱 / 锥台（dia 直径、h 高，沿局部 +Y） */
  function cylM(bucket, mat, base, x, y, z, dia, h, rot) {
    const m = trs(x, y, z, rot, [dia, h, dia]);
    bucket.add(mat, UCYL, base ? base.clone().multiply(m) : m);
  }

  function taper(bucket, mat, x, y, z, rTop, rBottom, h, seg) {
    bucket.add(mat, new THREE.CylinderGeometry(rTop, rBottom, h, seg || 10), trs(x, y, z));
  }

  /** 单坡板：顶面在 zA→yA 与 zB→yB 之间线性过渡 */
  function slope(bucket, mat, xc, width, thick, zA, yA, zB, yB, uv) {
    if (zB < zA) {
      const tz = zA;
      zA = zB;
      zB = tz;
      const ty = yA;
      yA = yB;
      yB = ty;
    }
    const dz = zB - zA;
    const dy = yB - yA;
    const ang = Math.atan2(-dy, dz); // 绕 X 正转 => +Z 端下沉
    const g = new THREE.BoxGeometry(width, thick, Math.hypot(dz, dy));
    if (uv) scaleUV(g, uv[0], uv[1]);
    bucket.add(
      mat,
      g,
      trs(xc, (yA + yB) / 2 - (thick / 2) * Math.cos(ang), (zA + zB) / 2 - (thick / 2) * Math.sin(ang), [ang, 0, 0]),
    );
  }

  /** 多边形面（三角扇），uv 按世界尺寸展开；点的绕序决定法线朝向 */
  function face(bucket, mat, pts, uv) {
    const n = new THREE.Vector3().subVectors(pts[1], pts[0]).cross(new THREE.Vector3().subVectors(pts[2], pts[0])).normalize();
    const u = new THREE.Vector3().subVectors(pts[1], pts[0]).normalize();
    const w = new THREE.Vector3().crossVectors(n, u).normalize();
    const k = uv || 1;
    const pos = [];
    const tex = [];
    const d = new THREE.Vector3();
    for (let i = 1; i < pts.length - 1; i++) {
      const tri = [pts[0], pts[i], pts[i + 1]];
      for (const p of tri) {
        pos.push(p.x, p.y, p.z);
        d.subVectors(p, pts[0]);
        tex.push(d.dot(u) * k, d.dot(w) * k);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(tex, 2));
    g.computeVertexNormals();
    bucket.add(mat, g, null);
  }

  /** 足迹范围内的最低地形（0 为沙盘顶面） */
  function footprintMin(x0, x1, z0, z1, n) {
    const k = n || 6;
    let m = 0;
    for (let i = 0; i <= k; i++) {
      for (let j = 0; j <= k; j++) {
        m = Math.min(m, groundHeightAt(x0 + ((x1 - x0) * i) / k, z0 + ((z1 - z0) * j) / k));
      }
    }
    return m;
  }

  /* ================================================================
   * 1. 站台
   * ================================================================ */
  const pW = PL.xTo - PL.xFrom;
  const pD = PL.zTo - PL.zFrom;
  const pCx = (PL.xFrom + PL.xTo) / 2;
  const pCz = (PL.zFrom + PL.zTo) / 2;
  // 地形在站台东南角向河岸下沉，台体补到地面以下
  const pBase = Math.min(0, footprintMin(PL.xFrom, PL.xTo, PL.zFrom, PL.zTo)) - 0.05;
  const CORNER = 0.03; // 台体倒角，台面平顶范围相应内缩
  const pGeo = new RoundedBoxGeometry(pW, PL.topY - pBase, pD, 2, CORNER);
  scaleUV(pGeo, pW / 2, pD / 2);
  solid.add(MAT.station.platform, pGeo, trs(pCx, (pBase + PL.topY) / 2, pCz));

  const deckX0 = PL.xFrom + CORNER;
  const deckX1 = PL.xTo - CORNER;
  const deckX = deckX1 - deckX0;
  // 靠轨道一侧（+Z）红色安全边，其外侧再压一道白色警戒线
  box(solid, MAT.station.platformEdge, pCx, PL.topY + 0.03, PL.zTo - CORNER - 0.2, deckX, 0.06, 0.4);
  box(mark, MAT.station.trim, pCx, PL.topY + 0.008, PL.zTo - CORNER - 0.05, deckX, 0.016, 0.1);

  // 两端 3 级台阶下到地面（朝小镇一侧下，避开轨道净空）
  for (const [sx0, sx1] of [
    [PL.xFrom, PL.xFrom + 0.9],
    [PL.xTo - 0.9, PL.xTo],
  ]) {
    const scx = (sx0 + sx1) / 2;
    for (let k = 1; k <= 3; k++) {
      const top = PL.topY * (1 - k / 4); // 台面 + 3 级等高
      const zOut = PL.zFrom - k * 0.3;
      box(solid, MAT.rail.stone, scx, top / 2, zOut + 0.15, sx1 - sx0, top, 0.3);
      box(mark, MAT.station.trim, scx, top - 0.005, zOut + 0.05, sx1 - sx0 - 0.06, 0.012, 0.07);
    }
  }

  /* ================================================================
   * 2. 站房
   * ================================================================ */
  const bW = BD.w;
  const bFront = BD.z - BD.d / 2; // 正面外墙皮
  const bBack = Math.min(BD.z + BD.d / 2, PL.zFrom); // 后墙与站台北缘齐平
  const bD = bBack - bFront;
  const bCz = (bFront + bBack) / 2;
  const bCx = BD.x;
  const bBase = Math.min(0, footprintMin(bCx - bW / 2, bCx + bW / 2, bFront, bBack));
  const wallBase = bBase + PLINTH; // 墙脚
  const y1 = wallBase + FLOOR_LOW;
  const y2 = y1 + FLOOR_UP;

  // 石砌基座
  box(solid, MAT.rail.stone, bCx, (bBase + wallBase) / 2, bCz, bW + 0.16, wallBase - bBase, bD + 0.16);
  // 两层墙体（uv 按世界尺寸展开）
  const w1 = new THREE.BoxGeometry(bW, FLOOR_LOW, bD);
  scaleUV(w1, bW, FLOOR_LOW);
  solid.add(MAT.station.wall, w1, trs(bCx, (wallBase + y1) / 2, bCz));
  const w2 = new THREE.BoxGeometry(bW, FLOOR_UP, bD);
  scaleUV(w2, bW, FLOOR_UP);
  solid.add(MAT.station.wall, w2, trs(bCx, (y1 + y2) / 2, bCz));
  // 层间白色腰线
  box(solid, MAT.station.trim, bCx, y1, bCz, bW + 0.1, 0.08, bD + 0.1);

  // 檐口（同时充当屋面下的封檐板，遮住屋面背面）
  const eaveW = bW + EAVE_OUT * 2;
  const eaveD = bD + EAVE_OUT * 2;
  const eaveY = y2 + 0.1;
  const ridgeY = eaveY + RIDGE_RISE;
  const eZ0 = bCz - eaveD / 2;
  const eZ1 = bCz + eaveD / 2;
  const eX0 = bCx - eaveW / 2;
  const eX1 = bCx + eaveW / 2;
  const rX0 = eX0 + eaveD / 2;
  const rX1 = eX1 - eaveD / 2;
  box(solid, MAT.station.trim, bCx, y2 + 0.05, bCz, eaveW, 0.1, eaveD);

  // 四坡屋面：南北两坡 + 东西两山面 + 屋脊
  slope(solid, MAT.roof.tiles[0], bCx, eaveW, 0.09, eZ0, eaveY, bCz, ridgeY, [eaveW, 1.8]);
  slope(solid, MAT.roof.tiles[0], bCx, eaveW, 0.09, bCz, ridgeY, eZ1, eaveY, [eaveW, 1.8]);
  face(
    solid,
    MAT.roof.tiles[0],
    [new THREE.Vector3(eX0, eaveY, eZ0), new THREE.Vector3(eX0, eaveY, eZ1), new THREE.Vector3(rX0, ridgeY, bCz)],
    1,
  );
  face(
    solid,
    MAT.roof.tiles[0],
    [new THREE.Vector3(eX1, eaveY, eZ0), new THREE.Vector3(rX1, ridgeY, bCz), new THREE.Vector3(eX1, eaveY, eZ1)],
    1,
  );
  box(solid, MAT.roof.ridge, (rX0 + rX1) / 2, ridgeY + 0.03, bCz, rX1 - rX0 + 0.18, 0.13, 0.24);

  // 屋面烟囱
  const chX = bCx - 1.6;
  const chZ = bCz + 0.48;
  const chRoofY = eaveY + ((eZ1 - chZ) / (eZ1 - bCz)) * RIDGE_RISE;
  box(solid, MAT.wall.brick, chX, (y2 + chRoofY + 0.33) / 2, chZ, 0.44, chRoofY + 0.33 - y2, 0.44);
  box(solid, MAT.rail.stone, chX, chRoofY + 0.375, chZ, 0.54, 0.09, 0.54);
  cylM(solid, MAT.rail.stoneDark, null, chX - 0.11, chRoofY + 0.5, chZ, 0.13, 0.18);
  cylM(solid, MAT.rail.stoneDark, null, chX + 0.11, chRoofY + 0.5, chZ, 0.13, 0.18);

  /* --- 墙面坐标系：+X 沿墙、+Y 上、+Z 朝墙外，原点在墙外皮 --- */
  const frontWall = trs(bCx, 0, bFront, [0, Math.PI, 0]);
  const backWall = trs(bCx, 0, bBack, [0, 0, 0]);
  const westWall = trs(bCx - bW / 2, 0, bCz, [0, -Math.PI / 2, 0]);
  const eastWall = trs(bCx + bW / 2, 0, bCz, [0, Math.PI / 2, 0]);

  // 窗：框 + 玻璃 + 窗棂 + 白窗台；夜间约一半窗发光（固定种子决定材质）
  const rng = mulberry32(20260926);
  const glassFor = () => (rng() < 0.5 ? MAT.window.lit[Math.floor(rng() * 4)] : MAT.window.glass);
  function addWindow(base, lx, ly, w, h, mat) {
    boxM(glow, mat, base, lx, ly, 0.012, w, h, 0.03);
    boxM(solid, MAT.window.mullion, base, lx, ly, 0.032, 0.045, h, 0.035);
    boxM(solid, MAT.window.mullion, base, lx, ly, 0.032, w, 0.045, 0.035);
    boxM(solid, MAT.window.frame, base, lx - w / 2 - 0.035, ly, 0.024, 0.09, h + 0.14, 0.055);
    boxM(solid, MAT.window.frame, base, lx + w / 2 + 0.035, ly, 0.024, 0.09, h + 0.14, 0.055);
    boxM(solid, MAT.window.frame, base, lx, ly + h / 2 + 0.035, 0.024, w + 0.16, 0.09, 0.055);
    boxM(solid, MAT.window.frame, base, lx, ly - h / 2 - 0.035, 0.024, w + 0.16, 0.09, 0.055);
    boxM(solid, MAT.station.trim, base, lx, ly - h / 2 - 0.11, 0.05, w + 0.34, 0.07, 0.2);
  }
  for (const lx of [-2.2, 2.2]) {
    addWindow(frontWall, lx, 1.55, 0.95, 1.25, glassFor()); // 一层
    addWindow(frontWall, lx, 3.85, 0.95, 1.15, glassFor()); // 二层
  }
  for (const side of [westWall, eastWall]) {
    for (const lz of [-0.6, 0.6]) {
      addWindow(side, lz, 1.55, 0.8, 1.15, glassFor());
      addWindow(side, lz, 3.85, 0.8, 1.05, glassFor());
    }
  }

  // 正面：门厅、门罩、壁灯、站名牌、时钟
  const doorTop = wallBase + 2.2;
  boxM(solid, MAT.wood.frameDark, frontWall, -0.34, wallBase + 1.1, 0.035, 0.66, 2.2, 0.06);
  boxM(solid, MAT.wood.frameDark, frontWall, 0.34, wallBase + 1.1, 0.035, 0.66, 2.2, 0.06);
  boxM(solid, MAT.train.brass, frontWall, -0.55, wallBase + 1.05, 0.075, 0.05, 0.22, 0.05);
  boxM(solid, MAT.train.brass, frontWall, 0.55, wallBase + 1.05, 0.075, 0.05, 0.22, 0.05);
  boxM(solid, MAT.station.trim, frontWall, -0.74, wallBase + 1.16, 0.05, 0.13, 2.32, 0.14);
  boxM(solid, MAT.station.trim, frontWall, 0.74, wallBase + 1.16, 0.05, 0.13, 2.32, 0.14);
  boxM(solid, MAT.station.trim, frontWall, 0, wallBase + 2.34, 0.05, 1.62, 0.16, 0.14);
  boxM(solid, MAT.station.sign, frontWall, 0, wallBase + 2.32, 0.055, 2.1, 0.22, 0.07); // 正面站名牌
  // 门罩（MAT.station.canopy），连同台阶全部落在 z > 4.9 一侧，不压站前广场中心
  slope(solid, MAT.station.canopy, bCx, 2.2, 0.07, bFront - 0.36, wallBase + 2.8, bFront, wallBase + 2.89, [2.2, 0.36]);
  for (const sx of [-0.9, 0.9]) {
    boxM(solid, MAT.props.metal, frontWall, sx, wallBase + 2.62, 0.11, 0.07, 0.28, 0.24);
  }
  for (const sx of [-1.15, 1.15]) {
    boxM(solid, MAT.props.metal, frontWall, sx, 2.24, 0.035, 0.12, 0.3, 0.07); // 壁灯墙板
    boxM(solid, MAT.props.metal, frontWall, sx, 2.26, 0.11, 0.05, 0.05, 0.16); // 挑臂
    boxM(solid, MAT.props.metal, frontWall, sx, 2.2, 0.17, 0.26, 0.04, 0.26); // 灯顶盖
    taper(glow, MAT.station.lightGlass, bCx - sx, 2.1, bFront - 0.17, 0.09, 0.05, 0.15, 10);
  }
  // 时钟（固定 17:40）
  cylM(solid, MAT.station.trim, frontWall, 0, 4.35, 0.014, 0.74, 0.05, [Math.PI / 2, 0, 0]);
  cylM(glow, MAT.station.clockFace, frontWall, 0, 4.35, 0.038, 0.62, 0.045, [Math.PI / 2, 0, 0]);
  const hourA = (17 + 40 / 60) * (Math.PI / 6);
  const minA = 40 * (Math.PI / 30);
  // 钟面朝 -Z，墙面局部系里 +X 即观察者的右手方向，指针转角按顺时针度量
  const hand = (len, ang, w) =>
    boxM(solid, MAT.station.clockHand, frontWall, Math.sin(ang) * len * 0.5, 4.35 + Math.cos(ang) * len * 0.5, 0.075, w, len, 0.022, [0, 0, -ang]);
  hand(0.22, hourA, 0.05);
  hand(0.3, minA, 0.035);
  cylM(solid, MAT.station.clockHand, frontWall, 0, 4.35, 0.075, 0.07, 0.03, [Math.PI / 2, 0, 0]);

  // 背面（站台侧）：门、门槛、站名牌
  boxM(solid, MAT.wood.frame, backWall, 0, PL.topY + 0.95, 0.03, 1.1, 1.9, 0.06);
  boxM(solid, MAT.station.trim, backWall, -0.62, PL.topY + 1.0, 0.045, 0.12, 2.12, 0.12);
  boxM(solid, MAT.station.trim, backWall, 0.62, PL.topY + 1.0, 0.045, 0.12, 2.12, 0.12);
  boxM(solid, MAT.station.trim, backWall, 0, PL.topY + 1.96, 0.045, 1.34, 0.14, 0.12);
  boxM(solid, MAT.station.trim, backWall, 0, PL.topY + 0.02, 0.06, 1.3, 0.04, 0.14);
  boxM(solid, MAT.train.brass, backWall, 0.42, PL.topY + 0.95, 0.075, 0.05, 0.2, 0.05);
  boxM(solid, MAT.station.sign, backWall, 0, 2.9, 0.05, 2.6, 0.24, 0.07); // 站台侧站名牌

  // 正门 3 级台阶（铺装衔接：全部落在 z > 4.9 一侧）
  for (let k = 1; k <= 3; k++) {
    const top = k * 0.04;
    const zOut = bFront - 0.12 * (4 - k);
    box(solid, MAT.rail.stone, bCx, top / 2, zOut + 0.06, 1.7, top, 0.12);
    box(mark, MAT.station.trim, bCx, top - 0.005, zOut + 0.045, 1.62, 0.012, 0.07);
  }

  /* ================================================================
   * 3. 站台雨棚
   * ================================================================ */
  const cW = CN.xTo - CN.xFrom;
  const cCx = (CN.xFrom + CN.xTo) / 2;
  const cTopN = CN.topY;
  const cTopS = cTopN - CANOPY_DROP;
  const roofY = (z) => cTopN - ((z - CN.zFrom) / (CN.zTo - CN.zFrom)) * CANOPY_DROP;
  const colZ = CN.zFrom + 0.3; // 柱列靠站房一侧，屋面向轨道侧悬挑
  const colUnder = roofY(colZ) - CANOPY_T;

  // 单坡屋面板 + 白色封檐板
  slope(solid, MAT.station.canopy, cCx, cW, CANOPY_T, CN.zFrom, cTopN, CN.zTo, cTopS, [cW, CN.zTo - CN.zFrom]);
  box(solid, MAT.station.trim, cCx, cTopS - 0.035, CN.zTo - 0.03, cW - 0.1, 0.11, 0.06);
  // 屋脊位置嵌一条透光带（对中于雨棚进深中线）
  const cMid = (CN.zFrom + CN.zTo) / 2;
  const gz0 = cMid - 0.1;
  const gz1 = cMid + 0.14;
  slope(glow, MAT.station.canopyGlass, cCx, cW - 0.5, 0.035, gz0, roofY(gz0) + 0.022, gz1, roofY(gz1) + 0.022);
  for (const gz of [gz0 - 0.035, gz1 + 0.035]) {
    box(solid, MAT.wood.frameDark, cCx, roofY(gz) + 0.012, gz, cW - 0.4, 0.06, 0.08);
  }

  // 铸铁柱列 + 柱间系杆
  const colX = [];
  for (let i = 0; i <= BAYS; i++) colX.push(CN.xFrom + (cW / BAYS) * i);
  for (const x of colX) {
    taper(solid, MAT.station.wood, x, (PL.topY + colUnder) / 2, colZ, 0.065, 0.075, colUnder - PL.topY, 10);
    cylM(solid, MAT.props.metal, null, x, PL.topY + 0.06, colZ, 0.24, 0.12); // 柱础
    cylM(solid, MAT.props.metal, null, x, colUnder - 0.05, colZ, 0.2, 0.1); // 柱头箍
    box(solid, MAT.props.metal, x, colUnder + 0.005, colZ, 0.26, 0.03, 0.26);
  }
  for (let i = 0; i < BAYS; i++) {
    box(solid, MAT.props.metal, (colX[i] + colX[i + 1]) / 2, PL.topY + 1.95, colZ, cW / BAYS - 0.16, 0.08, 0.07);
  }
  // 雨棚下吊灯 2 盏
  for (const lx of FIX.pendantX) {
    cylM(solid, MAT.props.metal, null, lx, 2.99, colZ, 0.03, 0.09);
    cylM(solid, MAT.props.metal, null, lx, colUnder - 0.015, colZ, 0.3, 0.03);
    taper(glow, MAT.station.lightGlass, lx, 2.97, colZ, 0.13, 0.055, 0.11, 12);
  }

  /* ================================================================
   * 4. 站台设施
   * ================================================================ */
  // 长椅 3 张（背靠站房，面向轨道）
  for (const bx of FIX.benchX) {
    box(solid, MAT.props.bench, bx, PL.topY + 0.45, FIX.benchZ, 1.2, 0.07, 0.42);
    box(solid, MAT.props.bench, bx, PL.topY + 0.72, FIX.benchZ - 0.17, 1.2, 0.42, 0.07, [-0.16, 0, 0]);
    for (const lx of [-0.45, 0.45]) {
      box(solid, MAT.props.metal, bx + lx, PL.topY + 0.22, FIX.benchZ, 0.06, 0.44, 0.38);
    }
  }
  // 站台灯柱 2 根
  for (const [lx, lz] of FIX.lampPost) {
    cylM(solid, MAT.props.lampPost, null, lx, PL.topY + 0.06, lz, 0.24, 0.12);
    cylM(solid, MAT.props.lampPost, null, lx, PL.topY + 1.05, lz, 0.085, 1.86);
    cylM(solid, MAT.props.lampPost, null, lx, PL.topY + 1.98, lz, 0.13, 0.06);
    taper(glow, MAT.props.lampGlass, lx, 2.6, lz, 0.085, 0.13, 0.28, 8);
    taper(solid, MAT.props.lampPost, lx, 2.78, lz, 0.02, 0.15, 0.1, 8);
    cylM(solid, MAT.props.lampPost, null, lx, 2.86, lz, 0.06, 0.08);
  }
  // 花箱 2 个
  for (const [px, pz] of FIX.planter) {
    box(solid, MAT.props.planter, px, PL.topY + 0.17, pz, 0.42, 0.34, 0.42);
    box(solid, MAT.props.planter, px, PL.topY + 0.345, pz, 0.48, 0.04, 0.48);
    box(solid, MAT.ground.dirt, px, PL.topY + 0.34, pz, 0.36, 0.03, 0.36);
    for (let i = 0; i < 5; i++) {
      const a = i * 2.399; // 黄金角：确定性撒布
      const r = 0.05 + 0.035 * i;
      taper(glow, MAT.nature.flowers[i % 3], px + Math.cos(a) * r, PL.topY + 0.42, pz + Math.sin(a) * r, 0.02, 0.075, 0.16, 6);
    }
  }
  // 垃圾桶 1 个
  cylM(solid, MAT.props.metal, null, FIX.bin[0], PL.topY + 0.25, FIX.bin[1], 0.32, 0.5);
  cylM(solid, MAT.rail.steelDark, null, FIX.bin[0], PL.topY + 0.52, FIX.bin[1], 0.36, 0.05);
  // 行李车 1 台
  {
    const cart = trs(FIX.cart[0], 0, FIX.cart[1], [0, -0.06, 0]);
    boxM(solid, MAT.props.metal, cart, 0, PL.topY + 0.14, 0, 1.0, 0.05, 0.48); // 底架
    boxM(solid, MAT.wood.top, cart, 0, PL.topY + 0.21, 0, 1.1, 0.07, 0.55); // 台板
    for (const dx of [-0.42, 0.42]) {
      for (const dz of [-0.17, 0.17]) {
        cylM(solid, MAT.rail.steelDark, cart, dx, PL.topY + 0.06, dz, 0.1, 0.05, [Math.PI / 2, 0, 0]);
      }
    }
    boxM(solid, MAT.props.metal, cart, -0.53, PL.topY + 0.46, 0, 0.05, 0.5, 0.05); // 拉手立柱
    boxM(solid, MAT.props.metal, cart, -0.53, PL.topY + 0.7, 0, 0.05, 0.05, 0.42);
  }
  // 站台端部栅栏（东端一段）
  {
    const [fz0, fz1] = FIX.fenceZ;
    const fLen = fz1 - fz0;
    const fCz = (fz0 + fz1) / 2;
    const n = Math.round(fLen / 0.17);
    for (const dz of [0, fLen]) {
      box(solid, MAT.props.fenceWhite, FIX.fenceX, PL.topY + 0.55, fz0 + dz, 0.09, 1.1, 0.09);
    }
    for (const dy of [0.28, 0.95]) {
      box(solid, MAT.props.fenceWhite, FIX.fenceX, PL.topY + dy, fCz, 0.05, 0.07, fLen);
    }
    for (let i = 0; i <= n; i++) {
      box(solid, MAT.props.fenceWhite, FIX.fenceX, PL.topY + 0.55, fz0 + (fLen / n) * i, 0.035, 1.1, 0.05);
    }
  }

  /* ================================================================
   * 5. 夜灯锚点（灯由 lighting.js 统一创建）
   * ================================================================ */
  const anchor = (x, y, z, priority) =>
    lightAnchors.push({
      position: new THREE.Vector3(x, y, z),
      color: 0xffc978,
      intensity: 5.5,
      distance: 11,
      decay: 2,
      priority,
    });
  for (const lx of FIX.pendantX) anchor(lx, 2.97, colZ, 9); // 雨棚吊灯优先保留
  anchor(bCx + 1.15, 2.1, bFront - 0.17, 6); // 门口壁灯
  anchor(bCx - 1.15, 2.1, bFront - 0.17, 6);
  for (const [lx, lz] of FIX.lampPost) anchor(lx, 2.6, lz, 6); // 站台灯柱

  /* ================================================================ */
  const object3D = new THREE.Group();
  object3D.name = 'station';
  object3D.add(solid.build({ name: 'stationSolid' }));
  object3D.add(glow.build({ name: 'stationGlow', castShadow: false, receiveShadow: true }));
  object3D.add(mark.build({ name: 'stationMark', castShadow: false, receiveShadow: true }));
  return { object3D, lightAnchors };
}
