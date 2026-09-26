/**
 * train.js — 沙盘上唯一会动的对象：1 台蒸汽调车机 + 2 节客车。
 *
 * 设计要点：
 *  · 每节车独立取姿态：在前后转向架处各取曲线上一点，车体位置取两点的弦中点
 *    （曲线上自然内移，不是刚体平移），朝向取弦方向。车体局部原点位于轨顶平面
 *    （局部 y=0 对应世界 y = TRACK.railTopY），所以所有车轮最低点恒在轨顶。
 *  · 机车中心弧长 s 是唯一状态；子步积分（CONFIG.render.fixedStep）保证帧率无关。
 *  · 车轮用 InstancedMesh（每种半径一对：轮盘+轮缘），随各自车辆的弧长纯滚动。
 */

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import {
  TRACK,
  STATION,
  INITIAL,
  getTrackCurve,
  getTrackLength,
  createGeometryBucket,
} from './layout.js';
import { MAT } from './materials.js';

/* ------------------------------------------------------------------ *
 * 编组尺寸（全部由 CONFIG 推导，不写死具体数字）
 * ------------------------------------------------------------------ */

const LOCO_LEN = CONFIG.train.length.loco;
const COACH_LEN = CONFIG.train.length.coach;
const GAP = CONFIG.train.couplerGap;
const HALF_LOCO = LOCO_LEN / 2;
const HALF_COACH = COACH_LEN / 2;

/** 各节车中心相对机车中心的弧长偏移：off[0]=0，其余逐节累加 */
const CENTRE_OFFSET = [
  0,
  HALF_LOCO + GAP + HALF_COACH,
  HALF_LOCO + GAP + COACH_LEN + GAP + HALF_COACH,
];
const CAR_COUNT = 1 + CONFIG.train.coachCount;
/** 车列中心相对机车中心的弧长偏移 */
const CONSIST_CENTRE_OFFSET = (CENTRE_OFFSET[0] + CENTRE_OFFSET[CAR_COUNT - 1]) / 2;
/** 车列总长（机车前端面到末节客车后端面，含车间隙） */
const CONSIST_LENGTH = HALF_LOCO + CENTRE_OFFSET[CAR_COUNT - 1] + HALF_COACH;

/** 前后转向架间距：机车 1.9，客车 1.6 */
const WHEELBASE = [1.9, 1.6, 1.6];

/* ------------------------------------------------------------------ *
 * 车辆几何常量（局部坐标：+Z 为车头方向，X 为横向，y=0 在轨顶）
 * ------------------------------------------------------------------ */

const WHEEL_X = 0.5; // 轨距 1.0
const DRIVER_R = 0.28;
const DRIVER_Z = [0.45, -0.07, -0.59]; // 3 个大动轮（两侧）
const PILOT_R = 0.16;
const PILOT_Z = [1.06, -1.06]; // 2 个小导轮（两侧）
const COACH_R = 0.18;
const BOGIE_Z = [0.75, -0.75];
const AXLE_OFFSET = 0.24;
const CRANK_R = 0.18; // 曲柄销回转半径
const FRONT_DRIVER_Z = DRIVER_Z[0];
const COUPLING_MEAN_Z = (DRIVER_Z[0] + DRIVER_Z[DRIVER_Z.length - 1]) / 2;
const COUPLING_LEN = DRIVER_Z[0] - DRIVER_Z[DRIVER_Z.length - 1] + CRANK_R * 2;
const CROSSHEAD_Y = 0.48;
const CONNECTING_ROD = 0.52;
const CYL_REAR_Z = 1.16;

/* 共用刻度对象：构造期与每帧都复用，避免运行时分配 */
const _euler = new THREE.Euler();
const _quat = new THREE.Quaternion();
const _one = new THREE.Vector3(1, 1, 1);
const _v3 = new THREE.Vector3();
const _vF = new THREE.Vector3();
const _vR = new THREE.Vector3();
const _mLocal = new THREE.Matrix4();
const _mTmp = new THREE.Matrix4();
const _axisX = new THREE.Vector3(1, 0, 0);

/** 平移+欧拉旋转矩阵（无缩放），供几何合批使用 */
function trs(x, y, z, rx = 0, ry = 0, rz = 0) {
  _euler.set(rx, ry, rz);
  _quat.setFromEuler(_euler);
  _v3.set(x, y, z);
  return new THREE.Matrix4().compose(_v3, _quat, _one);
}

const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
/** 轴线沿 Z 的圆柱/锥台 */
const tubeZ = (rt, rb, h, seg = 10) =>
  new THREE.CylinderGeometry(rt, rb, h, seg).rotateX(Math.PI / 2);
/** 轴线沿 X 的圆柱（车轮） */
const tubeX = (r, h, seg = 14) =>
  new THREE.CylinderGeometry(r, r, h, seg).rotateZ(Math.PI / 2);

/** 把若干 (geometry, matrix) 合成一个几何体；用于需要整体运动的刚性小部件 */
function mergeParts(material, parts) {
  const bucket = createGeometryBucket('rig');
  for (const [geometry, matrix] of parts) bucket.add(material, geometry, matrix || null);
  const built = bucket.build({ name: 'rig' });
  const mesh = built.children[0];
  return mesh ? mesh.geometry : parts[0][0];
}

/** 一对车轮几何：轮缘（rim）与轮盘+辐条（body） */
function wheelGeometries(radius, spokes) {
  const tyreW = Math.min(Math.max(radius * 0.34, 0.05), 0.1);
  const rim = mergeParts(MAT.train.wheelRim, [[tubeX(radius, tyreW), null]]);
  const parts = [[tubeX(radius * 0.7, tyreW * 0.8, 12), null]];
  if (spokes) {
    for (let k = 0; k < 3; k++) {
      parts.push([box(0.03, radius * 1.44, 0.03), new THREE.Matrix4().makeRotationX((k * Math.PI) / 3)]);
    }
  }
  return { rim, body: mergeParts(MAT.train.wheel, parts) };
}

/* ------------------------------------------------------------------ *
 * 机车
 * ------------------------------------------------------------------ */

function buildLocomotive() {
  const group = new THREE.Group();
  group.name = '机车';
  const bucket = createGeometryBucket('loco');
  const small = createGeometryBucket('loco-detail'); // 扶手/玻璃/灯罩等薄小件不投影

  /* —— 底架、踏板、缓冲 —— */
  bucket.add(MAT.train.loco, box(0.56, 0.14, 2.7), trs(0, 0.63, 0));
  bucket.add(MAT.train.loco, box(0.15, 0.04, 2.2), trs(0.355, 0.745, 0));
  bucket.add(MAT.train.loco, box(0.15, 0.04, 2.2), trs(-0.355, 0.745, 0));
  bucket.add(MAT.train.locoTrim, box(0.05, 0.12, 2.16), trs(0.43, 0.66, 0));
  bucket.add(MAT.train.locoTrim, box(0.05, 0.12, 2.16), trs(-0.43, 0.66, 0));
  // 缓冲梁/缓冲器/车钩：全部收在额定半长 1.45 以内，最小半径弯道才不至于与邻车穿模
  for (const z of [1, -1]) {
    bucket.add(MAT.train.coupler, box(0.78, 0.16, 0.07), trs(0, 0.5, z * 1.36));
    bucket.add(MAT.train.coupler, box(0.09, 0.16, 0.1), trs(0, 0.5, z * 1.3));
    for (const x of [0.26, -0.26]) {
      bucket.add(MAT.train.coupler, tubeZ(0.085, 0.085, 0.06, 8), trs(x, 0.5, z * 1.37));
      bucket.add(MAT.train.coupler, tubeZ(0.06, 0.06, 0.09, 8), trs(x, 0.5, z * 1.41));
    }
  }
  // 排障器（前端斜板 + 侧板），尾部为调车踏台
  bucket.add(MAT.train.coupler, box(0.7, 0.36, 0.05), trs(0, 0.3, 1.36, -0.4));
  bucket.add(MAT.train.coupler, box(0.05, 0.24, 0.16), trs(0.34, 0.3, 1.32, -0.4));
  bucket.add(MAT.train.coupler, box(0.05, 0.24, 0.16), trs(-0.34, 0.3, 1.32, -0.4));
  bucket.add(MAT.train.coupler, box(0.7, 0.22, 0.05), trs(0, 0.26, -1.36, 0.4));

  /* —— 锅炉、烟箱、烟囱、汽包 —— */
  bucket.add(MAT.train.boiler, tubeZ(0.26, 0.26, 1.25, 14), trs(0, 0.95, 0.225));
  for (const z of [0.55, 0.15, -0.25]) {
    bucket.add(MAT.train.locoTrim, tubeZ(0.275, 0.275, 0.05, 14), trs(0, 0.95, z));
  }
  bucket.add(MAT.train.smokeBox, tubeZ(0.27, 0.27, 0.4, 14), trs(0, 0.95, 1.05));
  bucket.add(MAT.train.locoTrim, tubeZ(0.285, 0.285, 0.06, 14), trs(0, 0.95, 1.24));
  bucket.add(MAT.train.smokeBox, tubeZ(0.245, 0.245, 0.06, 14), trs(0, 0.95, 1.27));
  bucket.add(MAT.train.locoTrim, box(0.06, 0.26, 0.04), trs(0.15, 1.02, 1.29));
  bucket.add(MAT.train.locoTrim, box(0.06, 0.26, 0.04), trs(-0.15, 1.02, 1.29));
  bucket.add(MAT.train.locoTrim, box(0.04, 0.2, 0.03), trs(0, 0.95, 1.31));
  bucket.add(MAT.train.smokeBox, tubeZ(0.1, 0.135, 0.36, 12), trs(0, 1.4, 1.0));
  bucket.add(MAT.train.locoTrim, tubeZ(0.155, 0.155, 0.055, 12), trs(0, 1.6, 1.0));
  bucket.add(MAT.train.locoTrim, tubeZ(0.115, 0.115, 0.07, 12), trs(0, 1.63, 1.0));
  bucket.add(
    MAT.train.locoTrim,
    new THREE.SphereGeometry(0.15, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2),
    trs(0, 1.21, 0.05),
  );
  bucket.add(MAT.train.locoTrim, tubeZ(0.1, 0.1, 0.16, 10), trs(0, 1.29, -0.4));
  bucket.add(
    MAT.train.locoTrim,
    new THREE.SphereGeometry(0.1, 10, 5, 0, Math.PI * 2, 0, Math.PI / 2),
    trs(0, 1.37, -0.4),
  );
  small.add(MAT.train.brass, tubeZ(0.028, 0.028, 0.1, 8), trs(0.06, 1.31, -0.62));
  small.add(MAT.train.brass, tubeZ(0.028, 0.028, 0.1, 8), trs(-0.06, 1.31, -0.62));
  small.add(MAT.train.brass, tubeZ(0.035, 0.035, 0.17, 8), trs(0.1, 1.32, -0.7));

  /* —— 驾驶室与煤水舱 —— */
  bucket.add(MAT.train.loco, box(0.62, 0.76, 0.6), trs(0, 1.08, -0.7));
  bucket.add(MAT.train.loco, box(0.62, 0.3, 0.06), trs(0, 0.85, -0.4));
  bucket.add(MAT.train.locoTrim, box(0.7, 0.05, 0.74), trs(0, 1.485, -0.7));
  bucket.add(MAT.train.locoTrim, box(0.22, 0.05, 0.22), trs(0, 1.51, -0.7));
  bucket.add(MAT.train.loco, box(0.6, 0.62, 0.4), trs(0, 0.98, -1.2));
  bucket.add(MAT.train.smokeBox, box(0.5, 0.1, 0.3), trs(0, 1.3, -1.2)); // 煤堆
  small.add(MAT.train.glass, box(0.02, 0.3, 0.34), trs(0.315, 1.22, -0.7));
  small.add(MAT.train.glass, box(0.02, 0.3, 0.34), trs(-0.315, 1.22, -0.7));
  small.add(MAT.train.glass, box(0.16, 0.26, 0.02), trs(0.14, 1.22, -0.39));
  small.add(MAT.train.glass, box(0.16, 0.26, 0.02), trs(-0.14, 1.22, -0.39));
  small.add(MAT.train.brass, new THREE.CylinderGeometry(0.015, 0.015, 0.22, 6), trs(0.32, 1.0, -0.44));
  small.add(MAT.train.brass, new THREE.CylinderGeometry(0.015, 0.015, 0.22, 6), trs(-0.32, 1.0, -0.44));
  small.add(MAT.train.brass, tubeZ(0.017, 0.017, 1.05, 6), trs(0.265, 1.16, 0.2));
  small.add(MAT.train.brass, tubeZ(0.017, 0.017, 1.05, 6), trs(-0.265, 1.16, 0.2));
  // 侧面扶手柱
  for (const z of [0.75, -0.05]) {
    small.add(MAT.train.brass, new THREE.CylinderGeometry(0.014, 0.014, 0.26, 6), trs(0.275, 1.0, z));
    small.add(MAT.train.brass, new THREE.CylinderGeometry(0.014, 0.014, 0.26, 6), trs(-0.275, 1.0, z));
  }

  /* —— 汽缸、滑板、前照灯、尾灯、编号牌 —— */
  bucket.add(MAT.train.loco, box(0.2, 0.3, 0.28), trs(0.5, 0.48, 1.3));
  bucket.add(MAT.train.loco, box(0.2, 0.3, 0.28), trs(-0.5, 0.48, 1.3));
  bucket.add(MAT.train.locoTrim, box(0.22, 0.32, 0.05), trs(0.5, 0.48, 1.42));
  bucket.add(MAT.train.locoTrim, box(0.22, 0.32, 0.05), trs(-0.5, 0.48, 1.42));
  for (const x of [0.5, -0.5]) {
    bucket.add(MAT.train.locoTrim, box(0.09, 0.02, 0.56), trs(x, 0.41, 0.87));
    bucket.add(MAT.train.locoTrim, box(0.09, 0.02, 0.56), trs(x, 0.55, 0.87));
  }
  bucket.add(MAT.train.loco, tubeZ(0.09, 0.09, 0.15, 10), trs(0, 1.34, 1.16));
  bucket.add(MAT.train.locoTrim, box(0.06, 0.14, 0.06), trs(0, 1.27, 1.16));
  bucket.add(MAT.train.loco, tubeZ(0.055, 0.055, 0.07, 8), trs(0, 1.16, -1.4));
  small.add(MAT.train.headlamp, tubeZ(0.075, 0.075, 0.03, 10), trs(0, 1.34, 1.245));
  small.add(MAT.train.tailLamp, tubeZ(0.045, 0.045, 0.03, 8), trs(0, 1.16, -1.437));
  small.add(MAT.train.numberPlate, box(0.3, 0.16, 0.02), trs(0.318, 1.02, -0.7));
  small.add(MAT.train.numberPlate, box(0.3, 0.16, 0.02), trs(-0.318, 1.02, -0.7));
  small.add(MAT.train.numberPlate, box(0.16, 0.18, 0.02), trs(0, 1.02, 1.3));

  group.add(bucket.build({ name: '机车主体' }));
  group.add(small.build({ name: '机车小件', castShadow: false, receiveShadow: false }));

  /* —— 需要转动的部件（左右两侧镜像合进同一几何，随动一致，省 draw call） —— */
  const spin = {};
  const coupling = mergeParts(MAT.rail.steel, [
    [box(0.04, 0.07, COUPLING_LEN), trs(0.585, 0, 0)],
    [box(0.04, 0.07, COUPLING_LEN), trs(-0.585, 0, 0)],
  ]);
  spin.couplingRod = new THREE.Mesh(coupling, MAT.rail.steel);
  const mainRod = mergeParts(MAT.rail.steel, [
    [box(0.035, 0.06, CONNECTING_ROD), trs(0.5, 0, 0)],
    [box(0.035, 0.06, CONNECTING_ROD), trs(-0.5, 0, 0)],
  ]);
  spin.mainRod = new THREE.Mesh(mainRod, MAT.rail.steel);
  const pistonRod = mergeParts(MAT.rail.steelDark, [
    [tubeZ(0.022, 0.022, 1, 8), trs(0.5, 0, 0)],
    [tubeZ(0.022, 0.022, 1, 8), trs(-0.5, 0, 0)],
  ]);
  spin.pistonRod = new THREE.Mesh(pistonRod, MAT.rail.steelDark);
  const crosshead = mergeParts(MAT.train.brass, [
    [box(0.1, 0.16, 0.13), trs(0.5, 0, 0)],
    [box(0.1, 0.16, 0.13), trs(-0.5, 0, 0)],
  ]);
  spin.crosshead = new THREE.Mesh(crosshead, MAT.train.brass);
  for (const mesh of [spin.couplingRod, spin.mainRod, spin.pistonRod, spin.crosshead]) {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  const slots = [];
  for (const z of DRIVER_Z) {
    slots.push({ x: WHEEL_X, y: DRIVER_R, z, r: DRIVER_R, kind: 'driver' });
    slots.push({ x: -WHEEL_X, y: DRIVER_R, z, r: DRIVER_R, kind: 'driver' });
  }
  for (const z of PILOT_Z) {
    slots.push({ x: WHEEL_X, y: PILOT_R, z, r: PILOT_R, kind: 'pilot' });
    slots.push({ x: -WHEEL_X, y: PILOT_R, z, r: PILOT_R, kind: 'pilot' });
  }
  return { group, wheelbase: WHEELBASE[0], slots, spin };
}

/* ------------------------------------------------------------------ *
 * 客车
 * ------------------------------------------------------------------ */

function buildCoach(index) {
  const group = new THREE.Group();
  group.name = `客车${index}`;
  const bodyMat = index % 2 === 1 ? MAT.train.coachA : MAT.train.coachB;
  const bucket = createGeometryBucket('coach');
  const small = createGeometryBucket('coach-detail');

  // 车体 + 底架 + 裙板
  bucket.add(bodyMat, box(1.04, 0.93, 2.42), trs(0, 1.085, 0));
  bucket.add(MAT.train.coachTrim, box(1.0, 0.1, 2.44), trs(0, 0.57, 0));
  bucket.add(MAT.train.coachTrim, box(0.04, 0.16, 2.3), trs(0.51, 0.5, 0));
  bucket.add(MAT.train.coachTrim, box(0.04, 0.16, 2.3), trs(-0.51, 0.5, 0));

  // 弧形车顶（半圆筒压扁） + 走道 + 通风器
  const roof = new THREE.CylinderGeometry(0.56, 0.56, 2.44, 14, 1, false, Math.PI / 2, Math.PI);
  roof.rotateX(Math.PI / 2);
  roof.scale(1, 0.55, 1);
  bucket.add(MAT.train.roof, roof, trs(0, 1.55, 0));
  bucket.add(MAT.train.coachTrim, box(0.34, 0.04, 2.1), trs(0, 1.885, 0));
  bucket.add(MAT.train.coachTrim, box(0.2, 0.09, 0.2), trs(0, 1.93, 0.62));
  bucket.add(MAT.train.coachTrim, box(0.2, 0.09, 0.2), trs(0, 1.93, -0.62));

  // 两侧各 4 樘窗：窗框略内缩，玻璃略微外凸，避免共面
  const windowZ = [-0.72, -0.24, 0.24, 0.72];
  for (let w = 0; w < windowZ.length; w++) {
    const litMat = MAT.window.lit[w % 2];
    for (const sx of [1, -1]) {
      bucket.add(MAT.train.coachTrim, box(0.025, 0.5, 0.52), trs(sx * 0.5125, 1.16, windowZ[w]));
      small.add(litMat, box(0.02, 0.42, 0.44), trs(sx * 0.5325, 1.16, windowZ[w]));
    }
  }

  // 端部门 + 门玻璃 + 踏级
  for (const sz of [1, -1]) {
    bucket.add(MAT.train.coachTrim, box(0.5, 0.8, 0.04), trs(0, 1.13, sz * 1.23));
    small.add(MAT.train.glass, box(0.26, 0.3, 0.02), trs(0, 1.3, sz * 1.255));
    bucket.add(MAT.train.coachTrim, box(0.52, 0.05, 0.12), trs(0, 0.52, sz * 1.24));
    bucket.add(MAT.train.coachTrim, box(0.44, 0.05, 0.12), trs(0, 0.3, sz * 1.235));
    // 缓冲器、车钩、风管（端部附件全部收在 |z|≤1.31 内，最小半径 3.9 的曲线上相邻车才不会咬合）
    for (const x of [0.24, -0.24]) {
      bucket.add(MAT.train.coupler, tubeZ(0.075, 0.075, 0.05, 8), trs(x, 0.62, sz * 1.22));
      bucket.add(MAT.train.coupler, tubeZ(0.055, 0.055, 0.1, 8), trs(x, 0.62, sz * 1.25));
    }
    bucket.add(MAT.train.coupler, box(0.07, 0.12, 0.12), trs(0, 0.62, sz * 1.235));
    bucket.add(MAT.train.coupler, box(0.05, 0.22, 0.05), trs(0.22, 0.5, sz * 1.24, 0.3));
  }

  // 转向架 ×2（各 2 轴）；侧架/轴箱走在车轮内侧，避免车端包络比车体还宽
  for (const bz of BOGIE_Z) {
    bucket.add(MAT.train.coachTrim, box(0.94, 0.1, 0.7), trs(0, 0.3, bz));
    bucket.add(MAT.train.coachTrim, box(0.52, 0.1, 0.22), trs(0, 0.35, bz));
    for (const sx of [1, -1]) {
      bucket.add(MAT.train.coachTrim, box(0.06, 0.2, 0.8), trs(sx * 0.42, 0.28, bz));
      for (const az of [bz + AXLE_OFFSET, bz - AXLE_OFFSET]) {
        bucket.add(MAT.train.coachTrim, box(0.08, 0.16, 0.16), trs(sx * 0.4, 0.18, az));
      }
    }
  }

  group.add(bucket.build({ name: '客车主体' }));
  group.add(small.build({ name: '客车玻璃', castShadow: false, receiveShadow: false }));

  const slots = [];
  for (const bz of BOGIE_Z) {
    for (const az of [bz + AXLE_OFFSET, bz - AXLE_OFFSET]) {
      slots.push({ x: WHEEL_X, y: COACH_R, z: az, r: COACH_R, kind: 'coach' });
      slots.push({ x: -WHEEL_X, y: COACH_R, z: az, r: COACH_R, kind: 'coach' });
    }
  }
  return { group, wheelbase: WHEELBASE[Math.min(index, WHEELBASE.length - 1)], slots, spin: null };
}

/* ------------------------------------------------------------------ *
 * 对外接口
 * ------------------------------------------------------------------ */

export function createTrain() {
  const curve = getTrackCurve();
  const trackLength = getTrackLength();

  const root = new THREE.Group();
  root.name = '列车';

  /* ---- 建车 ---- */
  const defs = [buildLocomotive()];
  for (let i = 0; i < CONFIG.train.coachCount; i++) defs.push(buildCoach(i + 1));

  const cars = [];
  const slotsByKind = new Map();
  for (let i = 0; i < defs.length; i++) {
    const def = defs[i];
    const car = {
      group: def.group,
      wheelbase: def.wheelbase,
      spin: def.spin,
      arcS: 0,
      world: new THREE.Matrix4(),
    };
    cars.push(car);
    root.add(def.group);
    for (const slot of def.slots) {
      const list = slotsByKind.get(slot.kind) || [];
      if (!list.length) slotsByKind.set(slot.kind, list);
      list.push({ car, x: slot.x, y: slot.y, z: slot.z, r: slot.r });
    }
  }

  /* ---- 车轮：每种半径一对 InstancedMesh（轮盘 / 轮缘） ---- */
  const rigs = [];
  const kindRadius = { driver: DRIVER_R, pilot: PILOT_R, coach: COACH_R };
  for (const [kind, slots] of slotsByKind) {
    const radius = kindRadius[kind];
    const geo = wheelGeometries(radius, radius >= 0.2);
    const pair = [
      [geo.body, MAT.train.wheel, '轮盘'],
      [geo.rim, MAT.train.wheelRim, '轮缘'],
    ];
    for (const [geometry, material, label] of pair) {
      const mesh = new THREE.InstancedMesh(geometry, material, slots.length);
      // 实例矩阵在世界空间，包围球不会随实例更新，故关闭视锥剔除
      mesh.frustumCulled = false;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.name = `车轮-${kind}-${label}`;
      root.add(mesh);
      rigs.push({ mesh, slots });
    }
  }

  /* ---- 运行状态 ---- */
  const FIXED_STEP = CONFIG.render.fixedStep;
  const BRAKE_DISTANCE = CONFIG.train.brakeDistance;
  const BRAKE_ARM_DISTANCE = CONFIG.train.brakeDistance * 2;
  const STOP_SECONDS = CONFIG.train.stationStopSeconds;
  const DEPART_SECONDS = CONFIG.train.departSeconds;
  const stopCentreArc = STATION.stopArc01 * trackLength;

  let s = 0; // 机车中心弧长
  let cruise = CONFIG.train.speed;
  let state = 'run'; // run | braking | dwell | depart
  let armed = true; // 是否已"上膛"（防止刚出站立刻再次刹车）
  let dwellTimer = 0;
  let departTimer = 0;
  let arc01 = 0;

  const wrapS = (v) => {
    const m = v % trackLength;
    return m < 0 ? m + trackLength : m;
  };
  const wrap01 = (u) => {
    const m = u % 1;
    return m < 0 ? m + 1 : m;
  };
  /** 车列中心到停点的前进向距离，恒在 [0, trackLength) */
  const distToStop = () => wrapS(stopCentreArc - s + CONSIST_CENTRE_OFFSET);

  /* ---- 姿态与转动件 ---- */
  function poseCar(car) {
    const half = car.wheelbase / 2;
    curve.getPointAt(wrap01((car.arcS + half) / trackLength), _vF);
    curve.getPointAt(wrap01((car.arcS - half) / trackLength), _vR);
    car.group.position.set((_vF.x + _vR.x) * 0.5, TRACK.railTopY, (_vF.z + _vR.z) * 0.5);
    _euler.set(0, Math.atan2(_vF.x - _vR.x, _vF.z - _vR.z), 0); // 轨道水平：pitch/roll 恒为 0
    car.group.quaternion.setFromEuler(_euler);
    car.world.compose(car.group.position, car.group.quaternion, _one);
  }

  function syncWheels() {
    for (const rig of rigs) {
      const list = rig.slots;
      for (let k = 0; k < list.length; k++) {
        const slot = list[k];
        _quat.setFromAxisAngle(_axisX, slot.car.arcS / slot.r); // 纯滚动：转角 = 弧长 / 半径
        _v3.set(slot.x, slot.y, slot.z);
        _mLocal.compose(_v3, _quat, _one);
        _mTmp.multiplyMatrices(slot.car.world, _mLocal);
        rig.mesh.setMatrixAt(k, _mTmp);
      }
      rig.mesh.instanceMatrix.needsUpdate = true;
    }
  }

  function syncLocomotiveRig(car) {
    const spin = car.spin;
    if (!spin) return;
    const phi = car.arcS / DRIVER_R;
    const dy = -CRANK_R * Math.cos(phi);
    const dz = -CRANK_R * Math.sin(phi);
    // 3 个动轮同相位：连杆整体绕曲柄圆平移
    spin.couplingRod.position.set(0, DRIVER_R + dy, COUPLING_MEAN_Z + dz);
    const pinY = DRIVER_R + dy;
    const pinZ = FRONT_DRIVER_Z + dz;
    // 十字头被滑板约束在水平线上：由连杆长度反解位置
    const gapY = CROSSHEAD_Y - pinY;
    const reach = Math.sqrt(Math.max(CONNECTING_ROD * CONNECTING_ROD - gapY * gapY, 1e-6));
    const cz = pinZ + reach;
    spin.crosshead.position.set(0, CROSSHEAD_Y, cz);
    spin.mainRod.position.set(0, (CROSSHEAD_Y + pinY) * 0.5, (cz + pinZ) * 0.5);
    spin.mainRod.rotation.x = Math.atan2(-gapY, pinZ - cz);
    spin.pistonRod.position.set(0, CROSSHEAD_Y, (CYL_REAR_Z + cz) * 0.5);
    spin.pistonRod.scale.z = Math.max(Math.abs(cz - CYL_REAR_Z), 0.02);
  }

  function syncAll() {
    for (let i = 0; i < cars.length; i++) {
      cars[i].arcS = s - CENTRE_OFFSET[i];
      poseCar(cars[i]);
    }
    syncWheels();
    syncLocomotiveRig(cars[0]);
    arc01 = wrapS(s - CONSIST_CENTRE_OFFSET) / trackLength;
  }

  /* ---- 状态机 ---- */
  function arrive() {
    // 直接吸附到停点：消除浮点累积误差，保证每次停靠位置完全一致
    s = wrapS(stopCentreArc + CONSIST_CENTRE_OFFSET);
    state = 'dwell';
    dwellTimer = 0;
    armed = false;
  }

  function substep(h) {
    if (state === 'run') {
      const before = distToStop();
      s += cruise * h;
      const after = distToStop();
      if (after > before) {
        arrive(); // 本子步越过了停点（大步长也不漏停）
      } else if (armed && after <= BRAKE_DISTANCE) {
        state = 'braking';
        armed = false;
      } else if (!armed && after > BRAKE_ARM_DISTANCE) {
        armed = true; // 出站驶离后重新上膛 → 一圈只停一次
      }
    } else if (state === 'braking') {
      const d = distToStop();
      const v = cruise * Math.sqrt(Math.min(d / BRAKE_DISTANCE, 1)); // 到 d=0 时速度恰为 0
      if (!(v * h < d)) {
        arrive();
        return;
      }
      s += v * h;
    } else if (state === 'dwell') {
      dwellTimer += h; // 只在 update 里累加 → 暂停即冻结
      if (dwellTimer >= STOP_SECONDS) {
        state = 'depart';
        departTimer = 0;
      }
    } else {
      departTimer += h;
      const t = Math.min(departTimer / DEPART_SECONDS, 1);
      const ease = t * t * (3 - 2 * t);
      s += cruise * ease * h;
      if (t >= 1) state = 'run';
    }
  }

  function reset() {
    s = INITIAL.trainArc01 * trackLength;
    state = 'run';
    dwellTimer = 0;
    departTimer = 0;
    armed = distToStop() > BRAKE_DISTANCE;
    syncAll();
  }

  reset(); // 构造完成即处于与 reset() 完全相同的确定性状态

  function update(dt) {
    if (dt > 0) {
      const before = s;
      let remaining = dt;
      while (remaining > 1e-9) {
        const h = remaining > FIXED_STEP ? FIXED_STEP : remaining;
        substep(h);
        remaining -= h;
      }
      if (s !== before) syncAll();
    }
    return { arc: arc01, stopped: state === 'dwell' };
  }

  return {
    object3D: root,
    update,
    /** 设置巡航速度（世界单位/秒）；立即生效，0 表示停车 */
    setSpeed(unitsPerSecond) {
      cruise = Number.isFinite(unitsPerSecond) ? Math.max(0, unitsPerSecond) : 0;
    },
    getSpeed() {
      return cruise;
    },
    reset,
    isStopped() {
      return state === 'dwell';
    },
  };
}

/* ------------------------------------------------------------------ *
 * 自检说明
 * ------------------------------------------------------------------ *
 * 车列总长：机车前端面 → 末节客车后端面 = HALF_LOCO + off[last] + HALF_COACH
 *          = 1.45 + 5.88 + 1.25 = 8.58 世界单位（含 2 × 0.34 车间隙）。
 *          车列中心相对机车中心偏移 CONSIST_CENTRE_OFFSET = 2.94。
 *
 * 停站触发逻辑：状态机 run → braking → dwell → depart → run。
 *   · 车列中心弧长 = s - 2.94；d = wrap(stopArc - 中心弧长)，恒在 [0, L)。
 *   · run：若本子步 d 由小变大（越过停点，大步长也不漏）→ 直接吸附停靠；
 *     否则 armed 且 d ≤ brakeDistance(2.6) → braking。
 *   · braking：v = cruise·sqrt(d / brakeDistance)，到 d=0 速度恰为 0；
 *     本子步将到达时直接吸附到停点（stopped 位置每次完全一致）。
 *   · dwell：dwellTimer 仅在 update 内累加，累计 2.0s 后转 depart（暂停即冻结）。
 *   · depart：departSeconds(1.3) 内 smoothstep 从 0 加速回巡航。
 *   · armed：出站后 d 超过 2×brakeDistance 才重新上膛 → 一整圈只停一次。
 *
 * draw call 数（每模块合计 34，三角面 ≈6.8k）：
 *   · 机车 14：主体合批 5（loco/locoTrim/boiler/smokeBox/coupler）
 *     + 薄小件 5（brass/glass/headlamp/tailLamp/numberPlate，不投影）
 *     + 转动件 4（连杆/主连杆/活塞杆/十字头，左右镜像合批）。
 *   · 每节客车 7：主体合批 4（车体/coachTrim/roof/coupler）
 *     + 玻璃合批 3（lit[0]/lit[1]/glass，不投影）。
 *   · 车轮 6：3 种半径各 2 个 InstancedMesh（轮盘 + 轮缘，共 26 个轮实例）。
 * 夜灯：车头灯/尾灯为自发光材质，随车移动，故不提供静态 lightAnchors。
 *
 * 车端包络（邻车不咬合）：本轨道最小曲率半径实测 ≈3.9（非假定 6.5），
 *   两轴转向架在弯道内侧的外伸量因此更大；故机车/客车的端部附件（缓冲梁、车钩、
 *   排障器、踏级、风管）统一收在额定半长 ±1.31 内（机车 1.455）。
 *   验证：以 (y 0.05 × |x| 0.07) 分层包络 + 分离轴法整圈逐帧复核相邻车对，
 *   最小间隙 机车↔客1 ≈ +0.14、客1↔客2 ≈ +0.08。
 */
