/**
 * 火车：一节蒸汽机车 + 两节客车。
 * 各车厢按独立弧长位置沿闭合曲线取位置与朝向（非刚体整体旋转），
 * 转弯时靠曲线切线保持合理间距与朝向；到站停靠 2 秒。
 */
import * as THREE from 'three';
import { TRAIN } from '../config.js';
import { roundedBox } from '../lib/geo.js';
import { registerGlow } from './shared.js';

const _pos = new THREE.Vector3();
const _tan = new THREE.Vector3();

function makeWheel(radius, width) {
  const pivot = new THREE.Group();
  const tyre = new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, width, 18),
    new THREE.MeshStandardMaterial({ color: 0x24262b, roughness: 0.62, metalness: 0.42 }),
  );
  tyre.rotation.z = Math.PI / 2;
  pivot.add(tyre);
  const hub = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 0.42, radius * 0.42, width + 0.02, 12),
    new THREE.MeshStandardMaterial({ color: 0xb23b2c, roughness: 0.55, metalness: 0.2 }),
  );
  hub.rotation.z = Math.PI / 2;
  pivot.add(hub);
  for (let i = 0; i < 5; i++) {
    const spoke = new THREE.Mesh(
      new THREE.BoxGeometry(width * 0.55, radius * 1.5, 0.035),
      new THREE.MeshStandardMaterial({ color: 0xb23b2c, roughness: 0.6, metalness: 0.2 }),
    );
    spoke.rotation.x = (i / 5) * Math.PI;
    pivot.add(spoke);
  }
  pivot.traverse((o) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
  return pivot;
}

function makeLocomotive(M) {
  const g = new THREE.Group();
  const body = new THREE.MeshStandardMaterial({ color: 0x2f5d46, roughness: 0.52, metalness: 0.16 });
  const black = new THREE.MeshStandardMaterial({ color: 0x22252a, roughness: 0.58, metalness: 0.28 });
  const brass = new THREE.MeshStandardMaterial({ color: 0xc39445, roughness: 0.36, metalness: 0.72 });
  const red = new THREE.MeshStandardMaterial({ color: 0xa63c2c, roughness: 0.6, metalness: 0.14 });

  const add = (geo, mat, x, y, z, rx = 0) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.rotation.x = rx;
    m.castShadow = true;
    m.receiveShadow = true;
    g.add(m);
    return m;
  };

  // 底架与走板
  add(roundedBox(0.9, 0.13, 2.02, 0.035, 2), black, 0, 0.165, 0);
  add(roundedBox(1.0, 0.055, 2.08, 0.025, 2), body, 0, 0.255, 0);

  // 锅炉
  add(new THREE.CylinderGeometry(0.265, 0.265, 1.02, 20), body, 0, 0.53, 0.42, Math.PI / 2);
  add(new THREE.CylinderGeometry(0.275, 0.275, 0.17, 20), black, 0, 0.53, 0.95, Math.PI / 2);
  add(new THREE.CylinderGeometry(0.2, 0.2, 0.05, 18), brass, 0, 0.53, 1.045, Math.PI / 2);

  // 烟囱、汽包
  add(new THREE.CylinderGeometry(0.085, 0.098, 0.21, 14), black, 0, 0.88, 0.79);
  add(new THREE.CylinderGeometry(0.125, 0.125, 0.055, 14), brass, 0, 1.0, 0.79);
  add(new THREE.CylinderGeometry(0.125, 0.135, 0.18, 16), brass, 0, 0.83, 0.26);

  // 侧水柜
  for (const s of [-1, 1]) {
    add(roundedBox(0.115, 0.3, 0.9, 0.035, 2), body, s * 0.435, 0.5, 0.35);
    add(new THREE.BoxGeometry(0.02, 0.035, 0.92), brass, s * 0.5, 0.64, 0.35);
  }

  // 驾驶室
  add(roundedBox(0.86, 0.64, 0.76, 0.045, 3), body, 0, 0.575, -0.6);
  add(roundedBox(0.98, 0.075, 0.9, 0.055, 3), black, 0, 0.925, -0.6);
  for (const s of [-1, 1]) {
    const win = add(new THREE.BoxGeometry(0.03, 0.24, 0.3), M.glass, s * 0.435, 0.71, -0.55);
    win.castShadow = false;
  }
  const frontWin = add(new THREE.BoxGeometry(0.32, 0.22, 0.03), M.glass, 0, 0.72, -0.215);
  frontWin.castShadow = false;

  // 缓冲梁与车钩
  for (const end of [-1, 1]) {
    add(new THREE.BoxGeometry(0.94, 0.13, 0.06), red, 0, 0.2, end * 1.055);
    for (const s of [-1, 1]) {
      add(new THREE.CylinderGeometry(0.055, 0.062, 0.075, 12), black, s * 0.31, 0.2, end * 1.115, Math.PI / 2);
    }
  }

  // 排障器
  add(new THREE.BoxGeometry(0.78, 0.16, 0.035), red, 0, 0.115, 1.13);

  // 车轮
  const wheels = [];
  for (const s of [-1, 1]) {
    for (const z of [-0.42, 0.42]) {
      const w = makeWheel(0.215, 0.07);
      w.position.set(s * 0.335, 0.215, z);
      g.add(w);
      wheels.push(w);
    }
    const lead = makeWheel(0.135, 0.06);
    lead.position.set(s * 0.335, 0.135, 0.88);
    g.add(lead);
    wheels.push(lead);
    // 连杆
    const rod = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.05, 0.98), brass);
    rod.position.set(s * 0.44, 0.215, 0);
    rod.castShadow = true;
    g.add(rod);
  }

  // 头灯
  const lampMat = new THREE.MeshStandardMaterial({
    color: 0xf7ecd2,
    roughness: 0.35,
    emissive: 0xffe2b0,
    emissiveIntensity: 0,
  });
  add(new THREE.BoxGeometry(0.15, 0.15, 0.1), black, 0, 0.82, 1.06);
  const lampFace = new THREE.Mesh(new THREE.CylinderGeometry(0.062, 0.062, 0.035, 12), lampMat);
  lampFace.rotation.x = Math.PI / 2;
  lampFace.position.set(0, 0.82, 1.12);
  g.add(lampFace);
  registerGlow(lampMat, { emissiveNight: 2.4, emissiveDay: 0 });

  return { group: g, wheels };
}

function makeCarriage(M, scheme) {
  const g = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: scheme.body, roughness: 0.58, metalness: 0.1 });
  const bandMat = new THREE.MeshStandardMaterial({ color: scheme.band, roughness: 0.55, metalness: 0.12 });
  const roofMat = new THREE.MeshStandardMaterial({ color: scheme.roof, roughness: 0.72, metalness: 0.08 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x25272c, roughness: 0.6, metalness: 0.3 });

  const add = (geo, mat, x, y, z) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    g.add(m);
    return m;
  };

  add(roundedBox(0.88, 0.11, 1.9, 0.035, 2), dark, 0, 0.165, 0);
  add(roundedBox(0.85, 0.62, 1.88, 0.055, 3), bodyMat, 0, 0.55, 0);
  add(roundedBox(0.95, 0.17, 1.98, 0.085, 3), roofMat, 0, 0.925, 0);

  // 腰线
  for (const s of [-1, 1]) {
    add(new THREE.BoxGeometry(0.015, 0.075, 1.84), bandMat, s * 0.428, 0.475, 0);
    add(new THREE.BoxGeometry(0.015, 0.03, 1.84), bandMat, s * 0.428, 0.815, 0);
  }

  // 车窗
  const windowZ = [-0.66, -0.23, 0.23, 0.66];
  for (const s of [-1, 1]) {
    for (const z of windowZ) {
      const glow = (z > 0) === (s > 0);
      const glass = add(
        new THREE.BoxGeometry(0.028, 0.27, 0.28),
        glow ? M.glassWarm : M.glass,
        s * 0.432,
        0.63,
        z,
      );
      glass.castShadow = false;
      // 窗框（嵌在车身内，玻璃略微外凸，形成描边效果）
      add(new THREE.BoxGeometry(0.03, 0.335, 0.345), M.trim, s * 0.414, 0.63, z);
    }
    // 车门
    for (const z of [-0.86, 0.86]) {
      const door = add(new THREE.BoxGeometry(0.03, 0.44, 0.24), bandMat, s * 0.432, 0.44, z);
      door.castShadow = true;
    }
  }

  // 端面
  for (const end of [-1, 1]) {
    add(new THREE.BoxGeometry(0.34, 0.24, 0.03), M.glass, 0, 0.63, end * 0.95);
    add(new THREE.BoxGeometry(0.94, 0.12, 0.05), dark, 0, 0.2, end * 0.99);
    for (const s of [-1, 1]) {
      add(new THREE.CylinderGeometry(0.05, 0.058, 0.07, 12), dark, s * 0.3, 0.2, end * 1.03).rotation.x =
        Math.PI / 2;
    }
    // 折棚（车端风挡）
    add(new THREE.BoxGeometry(0.5, 0.42, 0.04), dark, 0, 0.6, end * 0.965);
  }

  const wheels = [];
  for (const s of [-1, 1]) {
    for (const z of [-0.58, 0.58]) {
      const w = makeWheel(0.155, 0.06);
      w.position.set(s * 0.325, 0.155, z);
      g.add(w);
      wheels.push(w);
    }
    // 转向架构架
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.11, 1.42), dark);
    frame.position.set(s * 0.325, 0.19, 0);
    frame.castShadow = true;
    g.add(frame);
  }

  return { group: g, wheels };
}

export function createTrain(railway, scene) {
  const M = {
    glass: new THREE.MeshStandardMaterial({
      color: 0x2a333c,
      roughness: 0.22,
      metalness: 0.3,
      emissive: 0xffc987,
      emissiveIntensity: 0,
    }),
    glassWarm: new THREE.MeshStandardMaterial({
      color: 0x38342c,
      roughness: 0.25,
      metalness: 0.26,
      emissive: 0xffd9a0,
      emissiveIntensity: 0,
    }),
    trim: new THREE.MeshStandardMaterial({ color: 0xf0e4cc, roughness: 0.7 }),
  };
  registerGlow(M.glass, { emissiveNight: 0.9, emissiveDay: 0 });
  registerGlow(M.glassWarm, { emissiveNight: 1.9, emissiveDay: 0 });

  const root = new THREE.Group();
  root.name = 'train';

  const loco = makeLocomotive(M);
  const car1 = makeCarriage(M, { body: 0xe7d9bd, band: 0x3c6b73, roof: 0x4a5057 });
  const car2 = makeCarriage(M, { body: 0xa8533f, band: 0xe7d9bd, roof: 0x4a5057 });

  const units = [loco, car1, car2];
  for (const u of units) root.add(u.group);
  scene.add(root);

  const spacing = TRAIN.carLength + TRAIN.carGap;
  const state = {
    s: TRAIN.startOffset,
    mode: 'running', // 'running' | 'dwelling'
    dwellRemaining: 0,
    laps: 0,
    speedScale: 1,
  };

  function place() {
    for (let i = 0; i < units.length; i++) {
      const pose = railway.getPose(state.s - i * spacing);
      const obj = units[i].group;
      obj.position.copy(pose.pos);
      _pos.copy(pose.pos).add(pose.tangent);
      obj.lookAt(_pos);
    }
  }

  function spinWheels(ds) {
    for (const u of units) {
      for (const w of u.wheels) {
        const r = w.userData.radius ?? 0.18;
        w.rotation.x += ds / r;
      }
    }
  }

  // 记录车轮半径
  for (const u of units) {
    for (const w of u.wheels) {
      let r = 0.18;
      w.traverse((o) => {
        if (o.geometry && o.geometry.type === 'CylinderGeometry' && o.geometry.parameters.radiusTop > r) {
          r = o.geometry.parameters.radiusTop;
        }
      });
      w.userData.radius = r;
    }
  }

  place();

  return {
    root,
    state,
    place,
    /** 推进一帧（仅在运行/未暂停时由主循环调用） */
    step(dt) {
      if (state.mode === 'dwelling') {
        state.dwellRemaining -= dt;
        if (state.dwellRemaining <= 0) {
          state.mode = 'running';
          state.dwellRemaining = 0;
          state.s += 0.05; // 离开停靠点，避免立即再次触发
          place();
        }
        return;
      }

      const ds = TRAIN.baseSpeed * state.speedScale * dt;
      const L = railway.length;
      const toStation = ((railway.stationS - state.s) % L + L) % L;
      if (toStation <= ds) {
        state.s = railway.stationS;
        state.mode = 'dwelling';
        state.dwellRemaining = TRAIN.dwellTime;
        state.laps += 1;
        place();
        return;
      }
      state.s += ds;
      spinWheels(ds);
      place();
    },
    setSpeedScale(v) {
      state.speedScale = v;
    },
    reset() {
      state.s = TRAIN.startOffset;
      state.mode = 'running';
      state.dwellRemaining = 0;
      state.speedScale = 1;
      place();
    },
    headPosition() {
      return units[0].group.position.clone();
    },
    distanceAlong() {
      return state.s;
    },
  };
}
