// 列车：一节蒸汽机车 + 两节客车。每节车厢由前后转向架两个点在轨道上取位，分别沿轨迹行驶。
import * as THREE from 'three';
import * as MAT from './materials.js';
import * as TX from './textures.js';
import { glow } from './materials.js';
import { track } from './world.js';
import { RAIL_TOP, RAIL_GAUGE_HALF } from './track.js';
import { mergeLocal } from './optimize.js';

const shadow = (m) => { m.castShadow = true; m.receiveShadow = true; return m; };
const box = (w, h, d, mat, x, y, z) => {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  return shadow(m);
};
const cyl = (r1, r2, h, mat, x, y, z, seg = 12) => {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, h, seg), mat);
  m.position.set(x, y, z);
  return shadow(m);
};

const cylZ = (r, h, mat, x, y, z) => {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 8).rotateX(Math.PI / 2), mat);
  m.position.set(x, y, z);
  return shadow(m);
};

/* ------------------------------- 轮对 ------------------------------- */
const spokeMat = MAT.paint(0x2a2320, 0.7);
function wheelset(r, wheelMat, spokes = true) {
  const g = new THREE.Group();
  const th = 0.03;
  for (const sx of [-1, 1]) {
    const w = new THREE.Mesh(new THREE.CylinderGeometry(r, r, th, 16).rotateZ(Math.PI / 2), wheelMat);
    w.position.x = sx * RAIL_GAUGE_HALF; g.add(shadow(w));
    const fl = new THREE.Mesh(new THREE.CylinderGeometry(r + 0.012, r + 0.012, 0.008, 16).rotateZ(Math.PI / 2), MAT.metal(0x4a4a4c, 0.5));
    fl.position.x = sx * (RAIL_GAUGE_HALF - sx * -0.0) - sx * 0.019; g.add(fl);
    if (spokes) {
      for (let k = 0; k < 3; k++) {
        const sp = new THREE.Mesh(new THREE.BoxGeometry(0.008, r * 1.7, 0.012), spokeMat);
        sp.position.x = sx * (RAIL_GAUGE_HALF + th / 2 + 0.002);
        sp.rotation.x = (k * Math.PI) / 3;
        g.add(sp);
      }
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.22, r * 0.22, 0.012, 8).rotateZ(Math.PI / 2), MAT.metal(0xc9a24a, 0.3));
      hub.position.x = sx * (RAIL_GAUGE_HALF + th / 2 + 0.004); g.add(hub);
    }
  }
  const axle = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, RAIL_GAUGE_HALF * 2, 6).rotateZ(Math.PI / 2), MAT.metal(0x333333));
  g.add(axle);
  g.position.y = r;
  g.userData.noMerge = true;
  return g;
}

/* ------------------------------- 机车 ------------------------------- */
function buildLoco() {
  const g = new THREE.Group();
  const green = MAT.paint(0x2c5a3b, 0.45, 0.15);
  const dark = MAT.paint(0x1e1f22, 0.5, 0.3);
  const red = MAT.paint(0xa3302a, 0.5);
  const brass = MAT.metal(0xd2a94a, 0.28);
  const wheels = [];
  const rods = [];

  g.add(box(0.46, 0.05, 1.7, dark, 0, 0.13, 0));                     // 车架
  // 锅炉
  const boiler = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 1.0, 20).rotateX(Math.PI / 2), green);
  boiler.position.set(0, 0.37, 0.28); g.add(shadow(boiler));
  for (const z of [0.0, 0.32, 0.6]) {
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.176, 0.176, 0.02, 20).rotateX(Math.PI / 2), brass);
    band.position.set(0, 0.37, z); g.add(band);
  }
  const smoke = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.16, 20).rotateX(Math.PI / 2), dark);
  smoke.position.set(0, 0.37, 0.81); g.add(shadow(smoke));
  const door = new THREE.Mesh(new THREE.CircleGeometry(0.16, 20), MAT.metal(0x3a3a3d, 0.5));
  door.position.set(0, 0.37, 0.892); g.add(door);
  // 大灯
  const lamp = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.06, 12).rotateX(Math.PI / 2), glow.headlamp);
  lamp.position.set(0, 0.56, 0.88); g.add(lamp);
  // 烟囱、汽包
  const chim = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.036, 0.2, 12), dark);
  chim.position.set(0, 0.64, 0.74); g.add(shadow(chim));
  const chimTop = new THREE.Mesh(new THREE.CylinderGeometry(0.062, 0.05, 0.035, 12), dark);
  chimTop.position.set(0, 0.755, 0.74); g.add(chimTop);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(0.065, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), brass);
  dome.position.set(0, 0.53, 0.38); g.add(shadow(dome));
  const dome2 = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), green);
  dome2.position.set(0, 0.535, 0.08); g.add(shadow(dome2));
  const safety = cyl(0.014, 0.014, 0.06, brass, 0, 0.57, 0.16, 8); g.add(safety);
  // 侧水箱
  for (const sx of [-1, 1]) g.add(box(0.1, 0.2, 0.7, green, sx * 0.235, 0.29, 0.34));
  // 驾驶室
  g.add(box(0.52, 0.44, 0.5, MAT.paint(0x8f2f28, 0.55), 0, 0.37, -0.55));
  g.add(box(0.58, 0.03, 0.58, MAT.paint(0x252628, 0.6), 0, 0.6, -0.55));
  for (const sx of [-1, 1]) {
    g.add(box(0.012, 0.15, 0.24, glow.trainWindow, sx * 0.264, 0.44, -0.55));
  }
  g.add(box(0.3, 0.14, 0.012, glow.trainWindow, 0, 0.44, -0.806));
  // 煤仓
  g.add(box(0.5, 0.14, 0.14, dark, 0, 0.32, -0.83));
  // 缓冲梁
  for (const z of [0.86, -0.86]) {
    g.add(box(0.5, 0.06, 0.04, red, 0, 0.14, z));
    for (const sx of [-0.16, 0.16]) g.add(cylZ(0.02, 0.05, MAT.metal(0xbdbdbd, 0.3), sx, 0.14, z + Math.sign(z) * 0.04));
  }
  // 车轮：三对动轮 + 一对导轮
  const wm = MAT.paint(0x9c2f28, 0.5, 0.1);
  const drivers = [-0.3, 0.06, 0.42];
  drivers.forEach((z) => {
    const w = wheelset(0.088, wm); w.position.z = z; g.add(w); wheels.push({ obj: w, r: 0.088 });
  });
  const pony = wheelset(0.055, wm, false); pony.position.z = 0.72; g.add(pony); wheels.push({ obj: pony, r: 0.055 });
  // 连杆（随轮转动的曲柄机构）
  for (const sx of [-1, 1]) {
    const rod = box(0.014, 0.022, 0.78, MAT.metal(0xb9bcc2, 0.35), sx * (RAIL_GAUGE_HALF + 0.05), 0.088, 0.06);
    rod.userData.noMerge = true; g.add(rod); rods.push({ obj: rod, side: sx, z0: 0.06, y0: 0.088 });
  }
  // 汽缸
  for (const sx of [-1, 1]) {
    const cy = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.18, 10).rotateX(Math.PI / 2), dark);
    cy.position.set(sx * 0.22, 0.2, 0.62); g.add(shadow(cy));
  }
  g.userData = { wheels, rods, chimney: new THREE.Vector3(0, 0.78, 0.74), wb: 0.95 };
  mergeLocal(g);
  return g;
}

/* ------------------------------- 客车 ------------------------------- */
function buildCoach(bodyColor, stripeColor) {
  const g = new THREE.Group();
  const len = 1.5;
  const body = MAT.paint(bodyColor, 0.5, 0.05);
  const stripe = MAT.paint(stripeColor, 0.5, 0.05);
  g.add(box(0.48, 0.05, len - 0.04, MAT.paint(0x25262a, 0.6), 0, 0.125, 0));
  g.add(box(0.56, 0.12, len, stripe, 0, 0.21, 0));                                    // 裙板
  g.add(box(0.56, 0.3, len, body, 0, 0.42, 0));                                        // 上部
  g.add(box(0.565, 0.028, len + 0.001, MAT.metal(0xd6b768, 0.3), 0, 0.272, 0));       // 金色分隔线
  const roof = new THREE.Mesh(
    new THREE.CylinderGeometry(0.29, 0.29, len, 18, 1, false, Math.PI / 2, Math.PI).rotateX(Math.PI / 2),
    MAT.paint(0xd9d4c8, 0.6)
  );
  roof.scale.set(1, 0.34, 1); // 半圆顶压扁
  roof.position.set(0, 0.57, 0); g.add(shadow(roof));
  for (const z of [-0.4, 0.05, 0.5]) g.add(box(0.06, 0.03, 0.12, MAT.paint(0x5a5c5e, 0.6), 0, 0.665, z));
  // 车窗
  for (const sx of [-1, 1]) {
    for (let i = 0; i < 5; i++) {
      g.add(box(0.012, 0.13, 0.17, glow.trainWindow, sx * 0.284, 0.44, -0.58 + i * 0.29));
    }
    g.add(box(0.012, 0.19, 0.12, MAT.wood(0x6b4a2e), sx * 0.281, 0.4, 0.7 * 0));
  }
  // 端部缓冲梁
  for (const z of [len / 2, -len / 2]) {
    g.add(box(0.5, 0.05, 0.03, MAT.paint(0x3a3b3f, 0.6), 0, 0.14, z));
    for (const sx of [-0.16, 0.16]) g.add(cylZ(0.018, 0.04, MAT.metal(0xbdbdbd, 0.3), sx, 0.14, z + Math.sign(z) * 0.03));
  }
  // 转向架
  const wm = MAT.paint(0x262626, 0.6, 0.3);
  const wheels = [];
  for (const bz of [-0.475, 0.475]) {
    g.add(box(0.44, 0.03, 0.34, MAT.paint(0x303134, 0.7), 0, 0.09, bz));
    for (const dz of [-0.07, 0.07]) {
      const w = wheelset(0.058, wm, false); w.position.z = bz + dz; g.add(w); wheels.push({ obj: w, r: 0.058 });
    }
  }
  g.userData = { wheels, rods: [], wb: 0.95 };
  mergeLocal(g);
  return g;
}

/* ============================== 控制器 ============================== */
export const LAYOUT = [
  { off: 0.0, len: 1.7 },       // 机车中心 = 列车基准点
  { off: 1.75, len: 1.5 },
  { off: 3.4, len: 1.5 },
];
const V_MAX = 2.2, ACCEL = 1.2, DECEL = 1.3, DWELL = 2.0;

export function createTrain(scene, { stationX = -5.0, stationZ = 8.5 } = {}) {
  const units = [buildLoco(), buildCoach(0xe9dcc0, 0x8b2f2f), buildCoach(0xe9dcc0, 0x2f5f4a)];
  const root = new THREE.Group();
  units.forEach((u) => root.add(u));
  scene.add(root);

  // 前灯
  const headLight = new THREE.PointLight(0xffe0a0, 0, 3.2, 2);
  headLight.position.set(0, 0.45, 1.1);
  units[0].add(headLight);

  // 停靠点：第 1 节客车中心对准站台中心
  const sStation = track.nearestS(stationX, stationZ);
  const sStop = sStation + LAYOUT[1].off;
  const S0 = sStop - 24;

  const state = { s: S0, v: V_MAX * 0.85, phase: 'run', dwell: 0, dist: 0, arrivals: 0 };

  /* 烟雾 */
  const smokeTex = TX.softDot('rgba(255,255,255,0.9)', 'rgba(255,255,255,0)', 64);
  const puffs = [];
  for (let i = 0; i < 26; i++) {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: smokeTex, color: 0xf2eee8, transparent: true, opacity: 0, depthWrite: false }));
    sp.visible = false;
    scene.add(sp);
    puffs.push({ sp, life: 0, max: 2.4, vel: new THREE.Vector3() });
  }
  let puffTimer = 0, puffIdx = 0;
  const tmp = new THREE.Vector3();

  function emit() {
    const p = puffs[puffIdx++ % puffs.length];
    units[0].localToWorld(tmp.copy(units[0].userData.chimney));
    p.sp.position.copy(tmp);
    p.life = p.max = 1.8 + Math.random() * 0.9;
    p.vel.set(0.14 + Math.random() * 0.08, 0.34 + Math.random() * 0.14, (Math.random() - 0.5) * 0.1);
    p.sp.visible = true;
  }
  function updatePuffs(dt, moving) {
    puffTimer -= dt;
    if (puffTimer <= 0) { emit(); puffTimer = moving ? 0.1 : 0.32; }
    for (const p of puffs) {
      if (p.life <= 0) { p.sp.visible = false; continue; }
      p.life -= dt;
      const k = 1 - p.life / p.max;
      p.sp.position.addScaledVector(p.vel, dt);
      p.sp.scale.setScalar(0.1 + k * 0.5);
      p.sp.material.opacity = Math.max(0, (1 - k) * 0.55) * Math.min(1, k * 8);
    }
  }

  const fp = new THREE.Vector3(), rp = new THREE.Vector3(), target = new THREE.Vector3();
  function pose() {
    LAYOUT.forEach((L, i) => {
      const u = units[i];
      const wb = u.userData.wb;
      track.at(state.s - L.off + wb / 2, fp);
      track.at(state.s - L.off - wb / 2, rp);
      u.position.set((fp.x + rp.x) / 2, RAIL_TOP, (fp.z + rp.z) / 2);
      target.set(fp.x, RAIL_TOP, fp.z);
      u.lookAt(target);
      const ang = state.dist;
      for (const w of u.userData.wheels) w.obj.rotation.x = ang / w.r;
      for (const r of u.userData.rods) {
        const th = ang / 0.088 + (r.side > 0 ? 0 : Math.PI / 2);
        r.obj.position.z = r.z0 + 0.03 * Math.cos(th);
        r.obj.position.y = r.y0 - 0.03 * Math.sin(th);
      }
    });
  }
  pose();

  function step(dt, mul) {
    const sdt = dt * mul;
    if (state.phase === 'dwell') {
      state.dwell -= dt;
      if (state.dwell <= 0) {
        state.phase = 'run'; state.v = 0; state.s = sStop + 0.002;
      }
      return;
    }
    const d = track.wrap(sStop - state.s);
    const vStop = Math.sqrt(2 * DECEL * Math.max(d, 0)) + 0.04;
    const vNext = Math.min(V_MAX, state.v + ACCEL * sdt, vStop);
    const move = vNext * sdt;
    if (d <= 3 && move >= d - 1e-4) {
      state.dist += d; state.s = sStop; state.v = 0;
      state.phase = 'dwell'; state.dwell = DWELL; state.arrivals++;
      return;
    }
    state.v = vNext; state.s += move; state.dist += move;
  }

  return {
    units, state, sStop, sStation,
    get isDwell() { return state.phase === 'dwell'; },
    update(dt, mul, running) {
      if (!running) return;
      dt = Math.min(dt, 0.1);
      const n = Math.ceil(dt / 0.02);
      for (let i = 0; i < n; i++) step(dt / n, mul);
      pose();
      updatePuffs(dt * Math.min(mul, 2), state.phase === 'run');
    },
    reset() {
      state.s = S0; state.v = V_MAX * 0.85; state.phase = 'run'; state.dwell = 0; state.dist = 0;
      puffs.forEach((p) => { p.life = 0; p.sp.visible = false; });
      pose();
    },
    setNight(t) {
      headLight.intensity = t * 1.6;
      for (const p of puffs) p.sp.material.color.setRGB(0.95 - t * 0.55, 0.93 - t * 0.5, 0.91 - t * 0.35);
    },
    /** 车头前沿位置，用于道口栏杆判定 */
    headFront() { return state.s + 0.85; },
    tailBack() { return state.s - LAYOUT[2].off - 0.75; },
  };
}
