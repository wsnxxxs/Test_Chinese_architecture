import * as THREE from 'three';
import { RAIL, C } from '../core/config.js';
import { bake, box, cyl, coneGeo, sphere, xf, shade, mixHex } from '../core/geo.js';

/**
 * 列车：一节蒸汽机车 + 两节客车。
 * 三节各自沿中线按弧长取样定位（而不是整列刚体绕中心旋转），
 * 车厢朝向由「车体前后两点连线」求得，过弯时自然内移。
 */

const GREEN = 0x1f4639;
const GREEN_D = 0x17332a;
const RED = 0x8a3a2c;
const DARK = 0x22201e;
const ROOF = 0x35363a;
const COACH = 0x6d3a30;
const CREAM = 0xd9cca8;

/* ── 机车（0-4-0 水柜式）── */
function locoParts() {
  const p = [];
  const g = [];
  // 底架
  p.push({ geo: xf(box(0.84, 0.11, 2.92), 0, 0.34, 0), color: DARK });
  p.push({ geo: xf(box(0.9, 0.05, 2.7), 0, 0.4, 0), color: shade(DARK, 1.4) });
  // 锅炉
  p.push({ geo: xf(cyl(0.29, 0.29, 1.3, 12), 0, 0.73, 0.28, 0, 1, 1, 1, Math.PI / 2), color: GREEN });
  p.push({ geo: xf(cyl(0.3, 0.3, 0.05, 12), 0, 0.73, 0.92, 0, 1, 1, 1, Math.PI / 2), color: GREEN_D });
  // 水柜
  p.push({ geo: xf(box(0.7, 0.4, 1.0), 0, 1.02, 0.12), color: GREEN });
  p.push({ geo: xf(box(0.72, 0.05, 1.02), 0, 1.23, 0.12), color: GREEN_D });
  // 烟囱
  p.push({ geo: xf(cyl(0.1, 0.115, 0.3, 10), 0, 1.05, 0.86), color: DARK });
  p.push({ geo: xf(cyl(0.12, 0.115, 0.07, 10), 0, 1.22, 0.86), color: C.brass });
  // 汽包 + 安全阀
  p.push({ geo: xf(cyl(0.085, 0.095, 0.18, 8), 0, 1.1, 0.12), color: C.brass });
  p.push({ geo: xf(box(0.06, 0.09, 0.06), 0, 1.23, 0.12), color: C.brass });
  // 司机室
  p.push({ geo: xf(box(0.82, 0.6, 0.86), 0, 0.72, -0.98), color: GREEN });
  p.push({ geo: xf(box(0.88, 0.06, 0.96), 0, 1.05, -0.98), color: GREEN_D });
  // 煤仓
  p.push({ geo: xf(box(0.78, 0.36, 0.34), 0, 0.6, -1.36), color: GREEN_D });
  p.push({ geo: xf(box(0.6, 0.08, 0.26), 0, 0.79, -1.36), color: 0x1a1a1a });
  // 前后缓冲梁 + 缓冲器
  for (const s of [1, -1]) {
    p.push({ geo: xf(box(0.86, 0.14, 0.07), 0, 0.37, s * 1.48), color: RED });
    for (const sx of [1, -1]) {
      p.push({ geo: xf(cyl(0.055, 0.055, 0.12, 8), sx * 0.26, 0.37, s * 1.55, 0, 1, 1, 1, Math.PI / 2), color: 0x3a3a3c });
    }
  }
  // 脚板与扶手
  for (const sx of [1, -1]) {
    p.push({ geo: xf(box(0.06, 0.03, 2.2), sx * 0.44, 0.42, 0.1), color: 0x3a3a3c });
    p.push({ geo: xf(cyl(0.02, 0.02, 0.5, 5), sx * 0.36, 0.95, 0.6, 0, 1, 1, 1, Math.PI / 2), color: C.brass });
  }
  // 司机室窗
  for (const s of [1, -1]) {
    g.push({ geo: xf(box(0.5, 0.3, 0.06), 0, 0.86, -0.98 + s * 0.44), color: 0x9fc0c4 });
  }
  for (const sx of [1, -1]) {
    g.push({ geo: xf(box(0.06, 0.3, 0.4), sx * 0.42, 0.86, -0.98), color: 0x9fc0c4 });
  }
  return { p, g };
}

/* ── 客车 ── */
function coachParts() {
  const p = [];
  const g = [];
  // 车体
  p.push({ geo: xf(box(0.88, 0.72, 2.6), 0, 0.66, 0), color: COACH });
  p.push({ geo: xf(box(0.9, 0.2, 2.56), 0, 0.94, 0), color: CREAM });
  p.push({ geo: xf(box(0.9, 0.1, 2.58), 0, 0.4, 0), color: shade(COACH, 0.85) });
  // 弧形车顶
  p.push({ geo: xf(cyl(0.45, 0.45, 2.5, 12), 0, 1.04, 0, 0, 0.98, 1, 0.98, Math.PI / 2), color: ROOF });
  p.push({ geo: xf(cyl(0.2, 0.2, 0.1, 10), 0, 1.46, 0.6), color: 0x4a4a4c });
  p.push({ geo: xf(cyl(0.2, 0.2, 0.1, 10), 0, 1.46, -0.6), color: 0x4a4a4c });
  // 底架
  p.push({ geo: xf(box(0.8, 0.1, 2.4), 0, 0.24, 0), color: DARK });
  for (const s of [1, -1]) {
    p.push({ geo: xf(box(0.84, 0.13, 0.06), 0, 0.4, s * 1.32), color: RED });
    for (const sx of [1, -1]) {
      p.push({ geo: xf(cyl(0.05, 0.05, 0.11, 8), sx * 0.25, 0.4, s * 1.38, 0, 1, 1, 1, Math.PI / 2), color: 0x3a3a3c });
    }
  }
  // 端门与踏板
  for (const s of [1, -1]) {
    p.push({ geo: xf(box(0.34, 0.5, 0.05), 0, 0.62, s * 1.31), color: 0x4a2a24 });
    for (const sx of [1, -1]) {
      p.push({ geo: xf(box(0.16, 0.03, 0.1), sx * 0.3, 0.22, s * 1.3), color: 0x3a3a3c });
    }
  }
  // 窗
  for (const sx of [1, -1]) {
    for (let i = 0; i < 5; i++) {
      const z = -1.0 + i * 0.5;
      g.push({ geo: xf(box(0.05, 0.3, 0.36), sx * 0.455, 0.92, z), color: 0xf6e2b0 });
      p.push({ geo: xf(box(0.05, 0.36, 0.42), sx * 0.462, 0.92, z), color: shade(CREAM, 0.88) });
    }
  }
  return { p, g };
}

/* ── 车轮 ── */
function wheelGeo(r) {
  const parts = [];
  parts.push({ geo: xf(cyl(r, r, 0.055, 14), 0, 0, 0, 0, 1, 1, 1, 0, Math.PI / 2), color: 0x1c1a19 });
  parts.push({ geo: xf(cyl(r * 0.99, r * 0.99, 0.02, 14), 0, 0, 0, 0, 1, 1, 1, 0, Math.PI / 2), color: 0x2e2b28 });
  parts.push({ geo: xf(cyl(r * 0.3, r * 0.3, 0.09, 8), 0, 0, 0, 0, 1, 1, 1, 0, Math.PI / 2), color: 0x4a453f });
  // 轮辐
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI;
    parts.push({ geo: xf(box(0.02, r * 1.7, 0.035), 0, 0, 0, 0, 1, 1, 1, a), color: 0x242220 });
  }
  return bake(parts);
}

export function buildTrain(path, rng) {
  const group = new THREE.Group();
  group.name = 'train';

  const bodyMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.46, metalness: 0.18 });
  const glassMat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.25,
    emissive: new THREE.Color(0xffc978),
    emissiveIntensity: 0.0,
  });

  const loco = locoParts();
  const coach = coachParts();
  const wheelR = { loco: 0.215, coach: 0.185 };
  const wGeoL = wheelGeo(wheelR.loco);
  const wGeoC = wheelGeo(wheelR.coach);

  const mk = (parts, glassParts, wheelGeoCache, wheelR_, axles, wheelX) => {
    const v = new THREE.Group();
    const body = new THREE.Mesh(bake(parts.p), bodyMat);
    body.castShadow = true;
    body.receiveShadow = true;
    v.add(body);
    if (glassParts && glassParts.g.length) {
      const gm = new THREE.Mesh(bake(glassParts.g), glassMat);
      v.add(gm);
    }
    const wheels = [];
    for (const az of axles) {
      for (const sx of [1, -1]) {
        const w = new THREE.Mesh(wheelGeoCache, bodyMat);
        w.castShadow = true;
        w.position.set(sx * wheelX, wheelR_, az);
        w.rotation.y = Math.PI / 2;
        v.add(w);
        wheels.push(w);
      }
    }
    return { v, wheels };
  };

  const locoV = mk(loco, loco, wGeoL, wheelR.loco, [-0.92, 0, 0.92], 0.42);
  const coachA = mk(coach, coach, wGeoC, wheelR.coach, [-0.86, 0.86], 0.4);
  const coachB = mk(coach, coach, wGeoC, wheelR.coach, [-0.86, 0.86], 0.4);

  // 机车连杆
  const rods = [];
  for (const sx of [1, -1]) {
    const rod = new THREE.Group();
    const bar = new THREE.Mesh(
      bake([
        { geo: xf(box(0.035, 0.05, 1.95), 0, 0, 0), color: 0x8a8f92 },
        { geo: xf(cyl(0.045, 0.045, 0.05, 8), 0, 0, 0.92, 0, 1, 1, 1, 0, Math.PI / 2), color: 0x6f7478 },
        { geo: xf(cyl(0.045, 0.045, 0.05, 8), 0, 0, -0.92, 0, 1, 1, 1, 0, Math.PI / 2), color: 0x6f7478 },
        { geo: xf(cyl(0.035, 0.035, 0.07, 8), 0, 0, 0, 0, 1, 1, 1, 0, Math.PI / 2), color: 0x6f7478 },
      ]),
      bodyMat
    );
    bar.position.set(sx * 0.47, wheelR.loco, 0);
    bar.rotation.y = Math.PI / 2;
    rod.add(bar);
    rod.position.set(0, wheelR.loco, 0);
    locoV.v.add(rod);
    rods.push(rod);
  }

  group.add(locoV.v, coachA.v, coachB.v);

  /* ── 编组参数 ── */
  const GAP = 0.36;
  const HALF = [1.55, 1.35, 1.35];
  const SPEC = [];
  {
    let acc = 0;
    for (let i = 0; i < HALF.length; i++) {
      SPEC.push({ half: HALF[i], off: acc });
      acc += HALF[i] + GAP + (HALF[i + 1] ?? 0);
    }
  }
  const units = [locoV, coachA, coachB];

  const BASE_SPEED = 2.35; // 沙盘单位/秒（1× 速度）
  const DWELL = 2.0;       // 到站停留秒数

  const sStation = path.nearest(4.0, 8.2);
  const state = {
    s: path.nearest(8.6, 8.2),
    running: true,
    speed: 1,
    phase: 'run',
    dwell: 0,
    armed: true,
  };
  const S0 = state.s;

  const norm = (v) => ((v % path.length) + path.length) % path.length;

  function place() {
    for (let i = 0; i < units.length; i++) {
      const sc = state.s - SPEC[i].off;
      const half = SPEC[i].half;
      const p = path.pointAt(sc);
      const a = path.pointAt(sc - half * 0.62);
      const b = path.pointAt(sc + half * 0.62);
      const v = units[i].v;
      v.position.set(p.x, p.y + RAIL.railH, p.z);
      v.rotation.set(0, Math.atan2(b.x - a.x, b.z - a.z), 0);
      const ang = norm(sc) / wheelR[i === 0 ? 'loco' : 'coach'];
      for (const w of units[i].wheels) w.rotation.x = ang;
    }
    const ang = norm(state.s - SPEC[0].off) / wheelR.loco;
    for (const rod of rods) rod.rotation.x = ang;
  }

  function update(dt) {
    if (state.running) {
      if (state.phase === 'dwell') {
        state.dwell -= dt;
        if (state.dwell <= 0) {
          state.dwell = 0;
          state.phase = 'run';
        }
      } else {
        const prev = state.s;
        const next = prev + BASE_SPEED * state.speed * dt;
        const d1 = norm(sStation - prev); // 列车前方到站点的弧长距离
        const d2 = norm(next - prev);    // 本帧前进距离
        if (state.armed && d1 <= d2) {
          state.s = sStation;
          state.phase = 'dwell';
          state.dwell = DWELL;
          state.armed = false; // 停站期间不再重复触发
        } else {
          state.s = next;
          if (!state.armed && d1 > 3) state.armed = true; // 驶离后重新布防
        }
      }
    }
    place();
  }

  function reset() {
    state.s = S0;
    state.running = true;
    state.speed = 1;
    state.phase = 'run';
    state.dwell = 0;
    state.armed = true;
    place();
  }

  place();
  void rng;
  void coneGeo;
  void sphere;
  void mixHex;
  void group;
  return { group, state, update, reset, glassMat, sStation, BASE_SPEED, DWELL, offsets: SPEC.map((s) => s.off) };
}
