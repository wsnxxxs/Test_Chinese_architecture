/**
 * 列车：一节机车 + 两节车厢。
 *  - 每节车厢独立取弧长位置 s_i = s0 - offset_i，各自沿曲线取点与切线朝向，
 *    转弯时自然保持间距（不是整列车绕中心刚体旋转）。
 *  - 抵达车站前按剩余距离线性减速，停稳约 2 秒后继续；全程可用 speedMul 调节。
 *  - 暂停（外层不调用 update）时，车厢位置与到站计时一起冻结。
 */
import * as THREE from 'three';
import { buildMergedMesh, xform, box, roundedBox } from '../lib/mesh.js';
import { STATION_STOP } from '../layout.js';
import { RAIL_TOP } from './track.js';
import { registerSprite } from '../glow.js';

const LOCO_LEN = 5.4;
const CAR_LEN = 5.6;
const GAP = 0.55;
const OFFSET_1 = LOCO_LEN / 2 + GAP + CAR_LEN / 2; // 6.05
const OFFSET_2 = OFFSET_1 + CAR_LEN + GAP; // 12.2

const BASE_SPEED = 6.4; // 单位/秒（1× 档）
const DWELL_TIME = 2.0; // 到站停靠秒数

/* ---------------- 模型 ---------------- */

function wheels(parts, mats, zs, radius = 0.25, width = 0.16, y = 0.25) {
  for (const z of zs) {
    for (const sx of [1, -1]) {
      parts.push({
        geo: xform(new THREE.CylinderGeometry(radius, radius, width, 16), {
          pos: [sx * 0.55, y, z],
          rot: [0, 0, Math.PI / 2],
        }),
        mat: mats.m.lampPole,
      });
      // 轮心装饰
      parts.push({
        geo: xform(new THREE.CylinderGeometry(radius * 0.4, radius * 0.4, width + 0.04, 12), {
          pos: [sx * 0.55, y, z],
          rot: [0, 0, Math.PI / 2],
        }),
        mat: mats.m.stone,
      });
    }
  }
}

function coupler(parts, mats, z) {
  parts.push({ geo: xform(box(0.7, 0.16, 0.22), { pos: [0, 0.42, z] }), mat: mats.m.lampPole });
  parts.push({ geo: xform(box(0.26, 0.2, 0.34), { pos: [0, 0.4, z + Math.sign(z) * 0.2] }), mat: mats.m.lampPole });
  // 车钩面板
  parts.push({ geo: xform(box(1.9, 0.26, 0.14), { pos: [0, 0.5, z - Math.sign(z) * 0.02] }), mat: mats.m.lampPole });
}

function makeLoco(mats) {
  const parts = [];
  const bodyMat = new THREE.MeshStandardMaterial({ color: '#b2402f', roughness: 0.42, metalness: 0.22 });
  const creamMat = new THREE.MeshStandardMaterial({ color: '#f0dfc0', roughness: 0.5, metalness: 0.1 });

  // 走行部
  parts.push({ geo: roundedBox(1.95, 0.3, 5.2, 0.06, 1), pos: [0, 0.55, 0], mat: bodyMat });
  for (const bz of [1.6, -1.6]) {
    parts.push({ geo: xform(roundedBox(1.7, 0.24, 1.5, 0.05, 1), { pos: [0, 0.4, bz] }), mat: mats.m.lampPole });
  }
  wheels(parts, mats, [1.15, 2.05, -1.15, -2.05]);

  // 长罩（前）
  parts.push({ geo: roundedBox(1.72, 0.98, 3.3, 0.09, 2), pos: [0, 1.18, 0.75], mat: bodyMat });
  // 散热格栅
  for (const sx of [1, -1]) {
    parts.push({ geo: xform(box(0.06, 0.5, 1.1), { pos: [sx * 0.87, 1.3, 1.1] }), mat: mats.m.lampPole });
  }
  // 驾驶室（后）
  parts.push({ geo: roundedBox(1.94, 1.16, 1.6, 0.1, 2), pos: [0, 1.4, -1.6], mat: bodyMat });
  parts.push({ geo: roundedBox(2.0, 0.14, 1.7, 0.07, 2), pos: [0, 2.03, -1.6], mat: mats.m.lampPole });
  // 驾驶室窗
  parts.push({ geo: xform(box(1.5, 0.5, 0.1), { pos: [0, 1.62, -0.78] }), mat: mats.m.glass });
  for (const sx of [1, -1]) {
    parts.push({ geo: xform(box(0.1, 0.5, 1.0), { pos: [sx * 0.98, 1.62, -1.6] }), mat: mats.m.glass });
  }
  parts.push({ geo: xform(box(1.5, 0.5, 0.1), { pos: [0, 1.62, -2.42] }), mat: mats.m.glass });
  // 长罩前窗 + 白色腰线
  parts.push({ geo: xform(box(1.2, 0.36, 0.08), { pos: [0, 1.42, 2.42] }), mat: mats.m.glass });
  parts.push({ geo: xform(box(1.76, 0.16, 3.3), { pos: [0, 0.86, 0.75] }), mat: creamMat });
  // 排气与喇叭
  parts.push({ geo: xform(box(0.4, 0.16, 0.5), { pos: [0, 1.75, 0.2] }), mat: mats.m.lampPole });
  parts.push({ geo: xform(new THREE.CylinderGeometry(0.06, 0.06, 0.3, 8), { pos: [0.3, 2.16, -1.2], rot: [0.3, 0, 0] }), mat: mats.m.stone });
  // 扶手
  for (const sx of [1, -1]) {
    parts.push({ geo: xform(box(0.05, 0.05, 4.6), { pos: [sx * 0.9, 1.72, 0.4] }), mat: mats.m.stone });
    for (const z of [2.3, 1.2, 0, -1.2]) {
      parts.push({ geo: xform(box(0.05, 0.42, 0.05), { pos: [sx * 0.9, 1.5, z] }), mat: mats.m.stone });
    }
  }
  // 头灯（夜里发光）
  for (const sx of [0.45, -0.45]) {
    parts.push({ geo: xform(new THREE.SphereGeometry(0.12, 10, 8), { pos: [sx, 1.32, 2.5] }), mat: mats.m.bulb });
  }
  // 排障器
  parts.push({ geo: xform(box(1.7, 0.3, 0.18), { pos: [0, 0.35, 2.66], rot: [0.35, 0, 0] }), mat: mats.m.lampPole });
  coupler(parts, mats, 2.7);
  coupler(parts, mats, -2.7);

  const mesh = buildMergedMesh(parts, { castShadow: true, receiveShadow: true });
  return mesh;
}

function makeCarriage(mats, color) {
  const parts = [];
  const bodyMat = new THREE.MeshStandardMaterial({ color, roughness: 0.45, metalness: 0.2 });
  const roofMat = new THREE.MeshStandardMaterial({ color: '#8f949c', roughness: 0.6, metalness: 0.3 });
  const bandMat = new THREE.MeshStandardMaterial({ color: '#f0e3c8', roughness: 0.55, metalness: 0.05 });

  // 底架 + 转向架
  parts.push({ geo: roundedBox(1.92, 0.26, 5.4, 0.05, 1), pos: [0, 0.44, 0], mat: mats.m.lampPole });
  for (const bz of [1.8, -1.8]) {
    parts.push({ geo: xform(roundedBox(1.66, 0.22, 1.3, 0.05, 1), { pos: [0, 0.36, bz] }), mat: mats.m.lampPole });
  }
  wheels(parts, mats, [2.25, 1.35, -1.35, -2.25]);

  // 车体
  parts.push({ geo: roundedBox(2.05, 1.36, 5.2, 0.12, 2), pos: [0, 1.16, 0], mat: bodyMat });
  // 腰线
  parts.push({ geo: xform(box(2.09, 0.14, 5.0), { pos: [0, 0.62, 0] }), mat: bandMat });
  // 车顶
  parts.push({ geo: roundedBox(1.96, 0.24, 5.0, 0.14, 2), pos: [0, 1.9, 0], mat: roofMat });
  parts.push({ geo: xform(box(0.7, 0.12, 1.4), { pos: [0, 2.04, 0.9] }), mat: roofMat });
  parts.push({ geo: xform(box(0.7, 0.12, 1.4), { pos: [0, 2.04, -0.9] }), mat: roofMat });

  // 侧窗（每侧 6 扇，夜里透光）
  for (const sx of [1, -1]) {
    for (let i = -2; i <= 3; i++) {
      const z = -2.1 + i * 0.84;
      parts.push({ geo: xform(box(0.08, 0.56, 0.58), { pos: [sx * 1.03, 1.5, z] }), mat: mats.m.trim });
      parts.push({ geo: xform(box(0.1, 0.46, 0.48), { pos: [sx * 1.05, 1.5, z] }), mat: mats.m.glass });
    }
    // 端门
    for (const ez of [2.56, -2.56]) {
      parts.push({ geo: xform(box(0.72, 1.0, 0.1), { pos: [sx * 0.62, 1.3, ez] }), mat: bandMat });
      parts.push({ geo: xform(box(0.5, 0.4, 0.12), { pos: [sx * 0.62, 1.62, ez] }), mat: mats.m.glass });
    }
  }
  // 端面窗
  for (const ez of [2.61, -2.61]) {
    parts.push({ geo: xform(box(1.2, 0.5, 0.1), { pos: [0, 1.5, ez] }), mat: mats.m.glass });
    parts.push({ geo: xform(box(1.4, 0.14, 0.1), { pos: [0, 1.1, ez] }), mat: bandMat });
  }
  coupler(parts, mats, 2.75);
  coupler(parts, mats, -2.75);

  return buildMergedMesh(parts, { castShadow: true, receiveShadow: true });
}

/* ---------------- 运动 ---------------- */

export function createTrain(mats, curve) {
  const group = new THREE.Group();
  const L = curve.totalLength;

  const loco = makeLoco(mats);
  const car1 = makeCarriage(mats, '#3d6b8c');
  const car2 = makeCarriage(mats, '#4c7a4a');
  group.add(loco, car1, car2);

  // 头灯光晕（夜景）
  const headGlow = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: mats.tex.glow,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  headGlow.scale.set(2.4, 2.4, 1);
  headGlow.position.set(0, 1.32, 2.85);
  loco.add(headGlow);
  registerSprite(headGlow, 0.8);

  const units = [
    { obj: loco, offset: 0 },
    { obj: car1, offset: OFFSET_1 },
    { obj: car2, offset: OFFSET_2 },
  ];

  const stopInfo = curve.distanceAtPoint(STATION_STOP.x, STATION_STOP.z, 3000);
  const stopS = stopInfo.s;

  const state = {
    s: 0,
    v: 0,
    mode: 'run',
    dwellLeft: 0,
    nextStop: stopS,
    running: true,
    speedMul: 1,
    stopDistanceErr: stopInfo.distance,
  };

  const tmpP = new THREE.Vector3();
  const tmpT = new THREE.Vector3();

  function applyTransforms() {
    for (const u of units) {
      let s = state.s - u.offset;
      s = ((s % L) + L) % L;
      const t = s / L;
      curve.getPoint(t, tmpP);
      curve.getTangent(t, tmpT);
      u.obj.position.set(tmpP.x, RAIL_TOP, tmpP.z);
      u.obj.lookAt(tmpP.x + tmpT.x, RAIL_TOP, tmpP.z + tmpT.z);
    }
  }

  function arrive() {
    state.s = state.nextStop;
    state.v = 0;
    state.mode = 'dwell';
    state.dwellLeft = DWELL_TIME;
    state.nextStop += L;
  }

  function update(dt) {
    if (state.mode === 'dwell') {
      state.dwellLeft -= dt;
      if (state.dwellLeft <= 0) {
        state.dwellLeft = 0;
        state.mode = 'run';
      }
      applyTransforms();
      return;
    }

    const base = BASE_SPEED * state.speedMul;
    const remain = state.nextStop - state.s;
    const brakeDist = Math.max(7, base * 1.15);
    const target = remain < brakeDist ? Math.max(0, base * (remain / brakeDist)) : base;
    state.v += (target - state.v) * Math.min(1, dt * 3.0);
    state.s += state.v * dt;

    if (state.nextStop - state.s <= 0.05) arrive();

    applyTransforms();
  }

  function reset() {
    state.s = 0;
    state.v = 0;
    state.mode = 'run';
    state.dwellLeft = 0;
    state.nextStop = stopS;
    state.speedMul = 1;
    applyTransforms();
  }

  function status() {
    const speed = state.speedMul * BASE_SPEED;
    if (state.mode === 'dwell') {
      return { mode: 'dwell', text: `停靠中 ${state.dwellLeft.toFixed(1)}s`, dwellLeft: state.dwellLeft };
    }
    const remain = state.nextStop - state.s;
    const eta = remain / Math.max(0.35, state.v || speed);
    return { mode: 'run', text: `运行中 · ${eta.toFixed(0)}s 后进站`, eta };
  }

  reset();
  return { group, units, state, update, reset, status, stopS, curve };
}
