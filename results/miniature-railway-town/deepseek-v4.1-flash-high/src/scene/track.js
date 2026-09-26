/**
 * TRACK — 铁路环线：道砟、轨枕、钢轨，以及三座跨河桥（钢桁架 / 石拱 / 公路梁桥）。
 *
 * 只读取 layout.js / materials.js 的冻结契约，不修改任何共享资源（TEX / MAT / 曲线）。
 * 世界约定：+X 东、+Y 上、+Z 南；轨顶（车轮接触面）严格 y = 0.44。
 *
 * 建模约定：
 *  - 扫掠剖面一律先在模块内归一化成“逆时针”，这样自动生成的面法线朝外；
 *  - 相接触的箱体互相嵌入 0.01~0.05，绝不留下共面（共面会 z-fighting）；
 *  - 曲线整体水平（控制点 y 恒为 TRACK.curveY），扫掠时把切线压平到 xz 平面，
 *    横向 = up × tangent，因此钢轨顶面处处等高于 0.44。
 */

import * as THREE from 'three';
import {
  TRACK,
  RIVER,
  BRIDGES,
  TRACK_BRIDGE_U,
  ROAD_BRIDGE,
  getTrackCurve,
  getTrackLength,
  scaleUV,
  createGeometryBucket,
} from './layout.js';
import { MAT } from './materials.js';

/** 石 / 木 / 砟贴图约每 2.5 世界单位重复一次（用 scaleUV 缩 UV，不动共享 TEX）。 */
const TEX_PERIOD = 2.5;
/** 桥面顶面标高 = 道砟顶面，轨枕底面嵌进 0.035。 */
const DECK_TOP = TRACK.ballast.topY;
/** 所有砌体落到河床以下，避免悬空。 */
const FOUNDATION_Y = RIVER.bedY - 0.05;

const _one = new THREE.Vector3(1, 1, 1);
const _p = new THREE.Vector3();
const _t = new THREE.Vector3();
const _lat = new THREE.Vector3();
const _last = new THREE.Vector3();
const _quat = new THREE.Quaternion();
const _euler = new THREE.Euler();

/* ------------------------------------------------------------------ *
 * 扫掠
 * ------------------------------------------------------------------ */

/** 剖面按给定顺序围成的有向面积（用于判断绕向）。 */
function signedArea(profile) {
  let a = 0;
  for (let i = 0; i < profile.length; i++) {
    const p = profile[i];
    const q = profile[(i + 1) % profile.length];
    a += p.x * q.y - q.x * p.y;
  }
  return a * 0.5;
}

/**
 * 沿曲线扫掠二维剖面（x = 横向、y = 竖向，相对曲线点）。
 *
 * 剖面按顺序连成折线：非闭合 = 条带（末点→首点那条边不铺面），
 * 闭合 = 管状（补上闭合边）。uFrom/uTo 用弧长参数，允许 uTo < uFrom（沿行进方向反向绕），
 * 也允许跨越 0/1 接缝（内部自行取模）。capStart/capEnd 用三角扇封住两端断面。
 */
function sweepProfile(curve, profile2D, options = {}) {
  const {
    samples = 256,
    uFrom = 0,
    uTo = 1,
    closedProfile = false,
    capStart = false,
    capEnd = false,
  } = options;

  const prof = profile2D.map((p) => (Array.isArray(p) ? { x: p[0], y: p[1] } : { x: p.x, y: p.y }));
  // 统一成逆时针，保证下面固定的绕序生成朝外的法线
  if (signedArea(prof) < 0) prof.reverse();
  const m = prof.length;
  const steps = Math.max(2, Math.round(samples));
  const rings = steps + 1;

  // 剖面弧长作为 u 坐标（配合 scaleUV 得到恒定贴图密度）
  const profileS = [0];
  for (let j = 1; j < m; j++) profileS.push(profileS[j - 1] + Math.hypot(prof[j].x - prof[j - 1].x, prof[j].y - prof[j - 1].y));
  if (closedProfile) profileS.push(profileS[m - 1] + Math.hypot(prof[0].x - prof[m - 1].x, prof[0].y - prof[m - 1].y));

  const position = new Float32Array(rings * m * 3);
  const uv = new Float32Array(rings * m * 2);
  let dist = 0;

  for (let i = 0; i < rings; i++) {
    const u = uFrom + (uTo - uFrom) * (i / steps);
    const wrapped = ((u % 1) + 1) % 1;
    curve.getPointAt(wrapped, _p);
    curve.getTangentAt(wrapped, _t);
    _t.y = 0; // 曲线整体水平：压平后横向矢量水平，剖面竖向分量即世界高度
    _t.normalize();
    _lat.set(_t.z, 0, -_t.x); // up × tangent
    if (i > 0) dist += _p.distanceTo(_last);
    _last.copy(_p);

    for (let j = 0; j < m; j++) {
      const o = i * m + j;
      position[o * 3] = _p.x + _lat.x * prof[j].x;
      position[o * 3 + 1] = _p.y + prof[j].y;
      position[o * 3 + 2] = _p.z + _lat.z * prof[j].x;
      uv[o * 2] = profileS[j];
      uv[o * 2 + 1] = dist;
    }
  }

  const edges = closedProfile ? m : m - 1;
  const index = [];
  for (let i = 0; i < steps; i++) {
    for (let j = 0; j < edges; j++) {
      const j2 = (j + 1) % m;
      const a = i * m + j;
      const b = i * m + j2;
      const c = (i + 1) * m + j2;
      const d = (i + 1) * m + j;
      index.push(a, b, c, a, c, d);
    }
  }
  if (capStart) {
    for (let j = 1; j < m - 1; j++) index.push(0, j + 1, j); // 起点断面朝 -T
  }
  if (capEnd) {
    const base = steps * m;
    for (let j = 1; j < m - 1; j++) index.push(base, base + j, base + j + 1); // 终点断面朝 +T
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(position, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  geo.setIndex(index);
  geo.computeVertexNormals();
  return geo;
}

/* ------------------------------------------------------------------ *
 * 合批辅助
 * ------------------------------------------------------------------ */

/**
 * BoxGeometry 的 UV 按世界尺寸重排：面序 +X,-X,+Y,-Y,+Z,-Z 各 4 顶点，
 * 轴对应 (+X/-X: u=z,v=y；+Y/-Y: u=x,v=z；+Z/-Z: u=x,v=y)。
 */
function scaleBoxUV(geo, sx, sy, sz, period) {
  const uv = geo.attributes.uv;
  const axes = [
    [sz, sy], [sz, sy],
    [sx, sz], [sx, sz],
    [sx, sy], [sx, sy],
  ];
  for (let f = 0; f < 6; f++) {
    for (let v = 0; v < 4; v++) {
      const i = f * 4 + v;
      uv.setXY(i, (uv.getX(i) * axes[f][0]) / period, (uv.getY(i) * axes[f][1]) / period);
    }
  }
  uv.needsUpdate = true;
  return geo;
}

/** 轴对齐箱体；period > 0 时按世界尺寸缩放 UV。 */
function addBox(bucket, material, cx, cy, cz, sx, sy, sz, rotateY = 0, period = 0) {
  const geo = new THREE.BoxGeometry(sx, sy, sz);
  if (period > 0) scaleBoxUV(geo, sx, sy, sz, period);
  _euler.set(0, rotateY, 0);
  const m = new THREE.Matrix4().compose(
    new THREE.Vector3(cx, cy, cz),
    _quat.setFromEuler(_euler),
    _one,
  );
  bucket.add(material, geo, m);
  geo.dispose();
}

/** xz 平面内从 (x1,z1) 到 (x2,z2) 的墙体（厚度 = 横截面法向）。 */
function addWallXZ(bucket, material, x1, z1, x2, z2, thickness, yBottom, yTop, period = 0) {
  const dx = x2 - x1;
  const dz = z2 - z1;
  const len = Math.hypot(dx, dz);
  const height = yTop - yBottom;
  const geo = new THREE.BoxGeometry(thickness, height, len);
  if (period > 0) scaleBoxUV(geo, thickness, height, len, period);
  _euler.set(0, Math.atan2(dx, dz), 0);
  const m = new THREE.Matrix4().compose(
    new THREE.Vector3((x1 + x2) / 2, yBottom + height / 2, (z1 + z2) / 2),
    _quat.setFromEuler(_euler),
    _one,
  );
  bucket.add(material, geo, m);
  geo.dispose();
}

/** 竖直平面（z = 常数）内从 (x1,y1) 到 (x2,y2) 的杆件，用于桁架腹杆。 */
function addBarXY(bucket, material, x1, y1, x2, y2, z, thick, depth) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  const geo = new THREE.BoxGeometry(thick, len, depth);
  _euler.set(0, 0, Math.atan2(-dx, dy)); // 绕 Z 转，使局部 +Y 指向杆件方向
  const m = new THREE.Matrix4().compose(
    new THREE.Vector3((x1 + x2) / 2, (y1 + y2) / 2, z),
    _quat.setFromEuler(_euler),
    _one,
  );
  bucket.add(material, geo, m);
  geo.dispose();
}

/* ------------------------------------------------------------------ *
 * 桥
 * ------------------------------------------------------------------ */

/** 北桥：红色钢桁架 + 木桥面 + 石砌桥台（桥面下就是水面）。 */
function buildTrussBridge(bucket, b) {
  const z = b.fixedZ;
  const half = b.halfWidth;
  const deckLen = b.deckTo - b.deckFrom;
  const deckThick = 0.14;
  const deckBottom = DECK_TOP - deckThick;
  const chordLow = TRACK.curveY;
  const chordHigh = 1.45;
  const abutWidth = 1.4;

  // 两端石砌桥台：从河床下一直砌到桥面标高（顶面比桥面低 0.01，避免共面 z-fighting）
  const abutTop = DECK_TOP - 0.01;
  for (const x of [b.trussFrom - abutWidth / 2, b.trussTo + abutWidth / 2]) {
    addBox(bucket, MAT.rail.stone, x, (FOUNDATION_Y + abutTop) / 2, z,
      abutWidth, abutTop - FOUNDATION_Y, half * 2 + 0.3, 0, TEX_PERIOD);
  }

  // 木桥面 + 两根钢纵梁（纵梁顶面嵌进桥面）
  addBox(bucket, MAT.rail.bridgeDeck, (b.deckFrom + b.deckTo) / 2, (DECK_TOP + deckBottom) / 2, z,
    deckLen, deckThick, half * 2, 0, TEX_PERIOD);
  for (const s of [-1, 1]) {
    addBox(bucket, MAT.rail.steel, (b.deckFrom + b.deckTo) / 2, deckBottom - 0.08, z + s * 0.62,
      deckLen, 0.2, 0.22);
  }

  // 两侧桁架：下弦、上弦、竖杆、交叉斜撑
  const panels = 4;
  const step = (b.trussTo - b.trussFrom) / panels;
  const chordLen = b.trussTo - b.trussFrom;
  for (const s of [-1, 1]) {
    const zz = z + s * half;
    addBox(bucket, MAT.rail.truss, (b.trussFrom + b.trussTo) / 2, chordLow, zz, chordLen, 0.16, 0.18);
    addBox(bucket, MAT.rail.truss, (b.trussFrom + b.trussTo) / 2, chordHigh, zz, chordLen, 0.18, 0.18);
    for (let k = 0; k <= panels; k++) {
      addBox(bucket, MAT.rail.truss, b.trussFrom + k * step, (chordLow + chordHigh) / 2, zz,
        0.12, chordHigh - chordLow, 0.14);
    }
    for (let k = 0; k < panels; k++) {
      const xa = b.trussFrom + k * step;
      const xb = xa + step;
      addBarXY(bucket, MAT.rail.truss, xa, chordLow, xb, chordHigh, zz, 0.1, 0.12);
      addBarXY(bucket, MAT.rail.truss, xa, chordHigh, xb, chordLow, zz, 0.1, 0.12);
    }
  }
  // 顶部横向联系杆 2 道
  for (const k of [1, panels - 1]) {
    addBox(bucket, MAT.rail.truss, b.trussFrom + k * step, chordHigh, z, 0.14, 0.14, half * 2);
  }
}

/** 南桥：双跨石拱 + 中间桥墩 + 石栏板 + 两端八字挡墙（ExtrudeGeometry 沿 z 挤出）。 */
function buildArchBridge(bucket, b) {
  const z = b.fixedZ;
  const halfDepth = 1.1; // 沿 z 挤出 2.2 居中
  const x0 = b.deckFrom;
  const x1 = b.deckTo;
  const springY = DECK_TOP - 1.2; // -0.90 拱脚
  const crownY = DECK_TOP - 0.3; // 0.00 拱顶（拱上留 0.3 厚石券）
  const pierHalf = 0.4;

  const shape = new THREE.Shape();
  shape.moveTo(x0, FOUNDATION_Y);
  shape.lineTo(x0, DECK_TOP);
  shape.lineTo(x1, DECK_TOP);
  shape.lineTo(x1, FOUNDATION_Y);
  shape.closePath();

  // 拱洞：两跨，洞口一直开到基础底，桥下能看见水面
  for (const px of b.pierXs) {
    shape.holes.push(archHole(x0 + 0.7, px - pierHalf, springY, crownY, FOUNDATION_Y));
    shape.holes.push(archHole(px + pierHalf, x1 - 0.7, springY, crownY, FOUNDATION_Y));
  }

  const geo = new THREE.ExtrudeGeometry(shape, { depth: halfDepth * 2, bevelEnabled: false, curveSegments: 12 });
  geo.translate(0, 0, z - halfDepth); // 沿 z 挤出 2.2，居中在桥中线上
  scaleUV(geo, 1 / TEX_PERIOD, 1 / TEX_PERIOD); // ExtrudeGeometry 的 UV 已是世界尺寸
  bucket.add(MAT.rail.stone, geo);
  geo.dispose();

  // 两侧石栏板（底面嵌进桥面 0.01，不用另设共面）
  for (const s of [-1, 1]) {
    addBox(bucket, MAT.rail.stoneDark, (x0 + x1) / 2, DECK_TOP + 0.215, z + s * (halfDepth - 0.07),
      x1 - x0, 0.45, 0.14, 0, TEX_PERIOD);
  }

  // 两端八字挡墙：贴着桥台向外张开，墙顶与桥面找平
  for (const [ex, dir] of [[x0, -1], [x1, 1]]) {
    for (const s of [-1, 1]) {
      addWallXZ(bucket, MAT.rail.stone,
        ex, z + s * (halfDepth - 0.1),
        ex + dir * 1.2, z + s * (halfDepth + 0.35),
        0.4, FOUNDATION_Y, DECK_TOP, TEX_PERIOD);
    }
  }
}

/** 单跨拱的洞口轮廓（拱脚落在 springY，顶点落在 crownY）。 */
function archHole(xa, xb, springY, crownY, baseY) {
  const path = new THREE.Path();
  const halfSpan = (xb - xa) / 2;
  const rise = crownY - springY;
  const r = (halfSpan * halfSpan + rise * rise) / (2 * rise);
  const cx = (xa + xb) / 2;
  const cy = crownY - r;
  const a0 = Math.atan2(springY - cy, xa - cx);
  const a1 = Math.atan2(springY - cy, xb - cx);
  path.moveTo(xa, baseY);
  path.lineTo(xa, springY);
  const segs = 14;
  for (let i = 1; i <= segs; i++) {
    const a = a0 + (a1 - a0) * (i / segs);
    path.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
  }
  path.lineTo(xb, baseY);
  path.closePath();
  return path;
}

/** 公路桥：石砌桥台 + 带分水尖的方墩 + 木桥面 + 木栏杆。 */
function buildBeamBridge(bucket, b) {
  const z = b.fixedZ;
  const width = b.halfWidth * 2;
  const deckTop = b.deckY;
  const deckThick = 0.12;
  const deckBottom = deckTop - deckThick;

  // 木桥面
  addBox(bucket, MAT.rail.timber, (b.deckFrom + b.deckTo) / 2, (deckTop + deckBottom) / 2, z,
    b.deckTo - b.deckFrom, deckThick, width, 0, TEX_PERIOD);

  // 两端石砌桥台（比桥面窄 0.2，顶面嵌进桥面）
  for (const cx of [b.deckFrom + 0.7, b.deckTo - 0.7]) {
    addBox(bucket, MAT.rail.stone, cx, (FOUNDATION_Y + deckBottom + 0.03) / 2, z,
      1.4, deckBottom + 0.03 - FOUNDATION_Y, width - 0.2, 0, TEX_PERIOD);
  }

  // 桥墩：方墩 + 上下游分水尖，落在河床上、顶面嵌进桥面
  const pierTop = deckBottom + 0.03;
  const pierH = pierTop - FOUNDATION_Y;
  for (const px of ROAD_BRIDGE.piers) {
    addBox(bucket, MAT.rail.stone, px, (pierTop + FOUNDATION_Y) / 2, z, 0.52, pierH, 0.52, 0, TEX_PERIOD);
    for (const s of [-1, 1]) {
      addBox(bucket, MAT.rail.stone, px, (pierTop + FOUNDATION_Y) / 2, z + s * 0.26,
        0.36, pierH, 0.36, Math.PI / 4, TEX_PERIOD);
    }
  }

  // 木栏杆：立柱每 0.9 + 上下两道横杆
  const bays = Math.max(1, Math.round((b.deckTo - b.deckFrom) / 0.9));
  for (const s of [-1, 1]) {
    const zr = z + s * (b.halfWidth - 0.08);
    for (let k = 0; k <= bays; k++) {
      const x = b.deckFrom + ((b.deckTo - b.deckFrom) * k) / bays;
      addBox(bucket, MAT.rail.timberDark, x, deckTop + 0.265, zr, 0.09, 0.55, 0.09);
    }
    addBox(bucket, MAT.rail.timberDark, (b.deckFrom + b.deckTo) / 2, deckTop + 0.5, zr,
      b.deckTo - b.deckFrom, 0.07, 0.07);
    addBox(bucket, MAT.rail.timberDark, (b.deckFrom + b.deckTo) / 2, deckTop + 0.24, zr,
      b.deckTo - b.deckFrom, 0.07, 0.07);
  }
}

/* ------------------------------------------------------------------ *
 * 入口
 * ------------------------------------------------------------------ */

export function createTrack() {
  const curve = getTrackCurve();
  const length = getTrackLength();

  // 投影结构（桥、轨枕）与只接收阴影的地面类（道砟）分开合批，方便统一控制阴影开关
  const solid = createGeometryBucket('trackSolid');
  const bed = createGeometryBucket('trackBed');

  /* --- 道砟：整圈扫掠，两座铁路桥区间断开，断口用三角扇封死 --- */
  const cut = TRACK_BRIDGE_U.slice().sort((a, b) => a.uMin - b.uMin);
  const ballastProfile = [
    { x: -TRACK.ballast.bottomHalf, y: -TRACK.curveY },
    { x: -TRACK.ballast.topHalf, y: TRACK.ballast.topY - TRACK.curveY },
    { x: TRACK.ballast.topHalf, y: TRACK.ballast.topY - TRACK.curveY },
    { x: TRACK.ballast.bottomHalf, y: -TRACK.curveY },
  ];
  for (let i = 0; i < cut.length; i++) {
    const from = cut[i].uMax; // 沿行进方向从上座桥的桥尾接着铺
    const to = cut[(i + 1) % cut.length].uMin; // 铺到下座桥的桥头
    // 正向（行进方向）跨度，可能跨 0/1 接缝，此时 uTo 取 >1 的值由 sweepProfile 内部取模
    const span = ((to - from) % 1 + 1) % 1;
    const geo = sweepProfile(curve, ballastProfile, {
      samples: Math.max(6, Math.round(length * span * 4)),
      uFrom: from,
      uTo: from + span,
      closedProfile: false,
      capStart: true,
      capEnd: true,
    });
    scaleUV(geo, 1 / TEX_PERIOD, 1 / TEX_PERIOD);
    bed.add(MAT.rail.ballast, geo);
    geo.dispose();
  }

  /* --- 钢轨：两条整圈连续的闭合剖面管（穿桥），轨顶严格 0.44 --- */
  const railHalf = TRACK.rail.width / 2;
  const railSamples = Math.max(64, Math.round(length * 6));
  for (const sign of [-1, 1]) {
    const off = (sign * TRACK.gauge) / 2;
    const geo = sweepProfile(curve, [
      { x: off - railHalf, y: 0 },
      { x: off + railHalf, y: 0 },
      { x: off + railHalf, y: TRACK.rail.height },
      { x: off - railHalf, y: TRACK.rail.height },
    ], {
      samples: railSamples,
      closedProfile: true,
    });
    scaleUV(geo, 1 / TEX_PERIOD, 1 / TEX_PERIOD);
    bed.add(MAT.rail.rail, geo);
    geo.dispose();
  }

  /* --- 轨枕：整圈等距实例化（桥上同样铺，桥面顶标高正好等于道砟顶面） --- */
  const sleeperCount = Math.floor(length / TRACK.sleeper.spacing);
  const sleeperGeo = new THREE.BoxGeometry(TRACK.sleeper.length, TRACK.sleeper.height, TRACK.sleeper.width);
  const sleepers = new THREE.InstancedMesh(sleeperGeo, MAT.rail.sleeper, sleeperCount);
  sleepers.name = 'trackSleepers';
  const matrix = new THREE.Matrix4();
  const sleeperY = TRACK.curveY - TRACK.sleeper.height / 2;
  for (let i = 0; i < sleeperCount; i++) {
    const u = i / sleeperCount;
    curve.getPointAt(u, _p);
    curve.getTangentAt(u, _t);
    _t.y = 0;
    _t.normalize();
    _euler.set(0, Math.atan2(_t.x, _t.z), 0); // 局部 +X 对齐横向 = up × tangent
    matrix.compose(new THREE.Vector3(_p.x, sleeperY, _p.z), _quat.setFromEuler(_euler), _one);
    sleepers.setMatrixAt(i, matrix);
  }
  sleepers.instanceMatrix.needsUpdate = true;
  sleepers.castShadow = true;
  sleepers.receiveShadow = true;

  /* --- 三座桥 --- */
  const truss = BRIDGES.find((b) => b.id === 'truss-north');
  const arch = BRIDGES.find((b) => b.id === 'arch-south');
  const beam = BRIDGES.find((b) => b.id === 'beam-crosslane');
  buildTrussBridge(solid, truss);
  buildArchBridge(solid, arch);
  buildBeamBridge(solid, beam);

  const group = new THREE.Group();
  group.name = 'track';
  group.add(bed.build({ name: 'trackBed', castShadow: false, receiveShadow: true }));
  group.add(sleepers);
  group.add(solid.build({ name: 'trackBridges', castShadow: true, receiveShadow: true }));

  return { object3D: group, lightAnchors: [] };
}

/* ------------------------------------------------------------------ *
 * 自检（实测值，来自离线烟测脚本，非运行时逻辑）
 *  合批结果：trackBed 2 个 mesh（ballast / rail）+ trackBridges 7 个 mesh
 *  （stone / stoneDark / bridgeDeck / steel / truss / timber / timberDark）+ 1 个轨枕
 *  InstancedMesh（184 根）→ 共 10 个 mesh = 10 次 draw call（预算 < 60）。
 *  三角面 14002：道砟 1898 + 钢轨 8848 + 轨枕 2208 + 石拱桥/桥台 352 + 桁架 384
 *  + 木栏杆 240 + 其余 72（预算 < 150k）。
 *  实测不变量：钢轨顶面 max y = 0.44（float32 存储 0.4399999976）、道砟顶 0.30 / 底 0，
 *  道砟顶点无一落入两桥 u 区间，轨枕 y 误差 < 1e-6，桥下断面射线可穿透水面。
 *
 *  TRACK_BRIDGE_U 用法：cut = TRACK_BRIDGE_U 按 uMin 升序（本环线＝[truss-north, arch-south]），
 *  道砟逐段扫掠 [cut[i].uMax, cut[i+1].uMin]：正向跨度 span = ((to-from)%1+1)%1，
 *  再以 uTo = from + span（可能 >1，sweepProfile 内部取模）保证沿行进方向、不回头压到桥上；
 *  两端 capStart/capEnd 用三角扇封死断面。钢轨与轨枕不做裁剪、整圈连续——
 *  需求第 5 条明确要求桥段上照常出现第 3/4 步几何（只是道砟不画），故轨枕不跳过桥区间。
 * ------------------------------------------------------------------ */
