// 列车：蒸汽机车 + 两节客车。各车厢沿闭合曲线独立取位，
// 用"前挂钩-后挂钩"两点连线确定朝向（过弯呈弦线姿态，非刚体旋转）；
// 含车站停靠状态机（减速-停靠2s-加速）与烟囱粒子。
import * as THREE from 'three';
import { TRACK } from './track.js';
import { smooth } from './util.js';

const CRUISE = 2.3; // 巡航速度（世界单位/秒，1× 档）
const DECEL_DIST = 6.5; // 进站减速距离
const DWELL_TIME = 2.0; // 站内停留秒数
const ACCEL_TIME = 2.4; // 出站加速时长
const SPACING = 3.8; // 车辆中心距

function m(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.7, ...opts });
}
const LIVERY = {
  green: m(0x35594a),
  cream: m(0xece2cc, { roughness: 0.6 }),
  dark: m(0x2a2c2e, { roughness: 0.6 }),
  red: m(0xa83b2e),
  brass: m(0xc9a96a, { roughness: 0.35, metalness: 0.7 }),
};

// 列车车窗（夜晚发光）
const trainWinMat = m(0x32404c, {
  roughness: 0.25,
  metalness: 0.1,
  emissive: 0xffd9a0,
  emissiveIntensity: 0.05,
});

function wheelSet(parent, zs, r = 0.13) {
  for (const z of zs) {
    for (const s of [-TRACK.GAUGE_HALF, TRACK.GAUGE_HALF]) {
      const w = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.09, 12), LIVERY.dark);
      w.rotation.x = Math.PI / 2;
      w.position.set(s, r, z);
      w.castShadow = true;
      parent.add(w);
    }
  }
}

function buildLoco(registry) {
  const g = new THREE.Group();
  const add = (mesh) => {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    g.add(mesh);
    return mesh;
  };
  const B = (w, h, d, mat, x, y, z) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    mesh.position.set(x, y, z);
    return add(mesh);
  };
  const C = (rt, rb, h, mat, x, y, z, seg = 14) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat);
    mesh.position.set(x, y, z);
    return add(mesh);
  };
  // 车架与车底
  B(1.06, 0.14, 3.05, LIVERY.dark, 0, 0.28, 0);
  wheelSet(g, [-0.95, 0, 0.95]);
  // 锅炉与烟箱
  const boiler = C(0.5, 0.5, 2.05, LIVERY.green, 0, 1.02, 0.55);
  boiler.rotation.x = Math.PI / 2;
  const smokebox = C(0.515, 0.515, 0.36, LIVERY.dark, 0, 1.02, 1.42);
  smokebox.rotation.x = Math.PI / 2;
  for (const bz of [0.05, 1.0]) {
    const band = C(0.512, 0.512, 0.06, LIVERY.brass, 0, 1.02, bz);
    band.rotation.x = Math.PI / 2;
  }
  // 烟囱与汽包
  C(0.13, 0.17, 0.42, LIVERY.dark, 0, 1.74, 1.32);
  C(0.2, 0.2, 0.09, LIVERY.dark, 0, 1.98, 1.32);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(0.19, 12, 8), LIVERY.brass);
  dome.position.set(0, 1.58, 0.42);
  add(dome);
  // 水柜与驾驶室
  B(0.24, 0.52, 1.7, LIVERY.green, 0.63, 0.88, 0.42);
  B(0.24, 0.52, 1.7, LIVERY.green, -0.63, 0.88, 0.42);
  B(1.3, 1.02, 1.1, LIVERY.green, 0, 1.1, -0.82);
  B(1.48, 0.08, 1.32, LIVERY.dark, 0, 1.68, -0.82);
  // 缓冲梁
  B(1.06, 0.24, 0.12, LIVERY.red, 0, 0.4, 1.5);
  B(1.06, 0.24, 0.12, LIVERY.red, 0, 0.4, -1.5);
  // 前灯（夜间更亮）
  const headMat = new THREE.MeshStandardMaterial({
    color: 0xfff2cc,
    emissive: 0xffe0a0,
    emissiveIntensity: 0.3,
  });
  registry.emissives.push({ mat: headMat, day: 0.3, night: 2.6 });
  const lampBody = C(0.09, 0.09, 0.12, LIVERY.dark, 0, 1.42, 1.6);
  lampBody.rotation.x = Math.PI / 2;
  const lens = new THREE.Mesh(new THREE.CircleGeometry(0.07, 12), headMat);
  lens.position.set(0, 1.42, 1.665);
  g.add(lens);
  // 夜间前照灯
  const spot = new THREE.SpotLight(0xffe0b0, 0, 11, 0.38, 0.5, 1.4);
  spot.position.set(0, 1.42, 1.6);
  const spotTarget = new THREE.Object3D();
  spotTarget.position.set(0, 0.2, 8);
  g.add(spotTarget);
  spot.target = spotTarget;
  g.add(spot);
  registry.lights.push({ light: spot, day: 0, night: 26 });
  return { group: g, halfLen: 1.6 };
}

function buildCoach(registry) {
  const g = new THREE.Group();
  const add = (mesh) => {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    g.add(mesh);
    return mesh;
  };
  const B = (w, h, d, mat, x, y, z) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    mesh.position.set(x, y, z);
    return add(mesh);
  };
  B(1.0, 0.14, 3.0, LIVERY.dark, 0, 0.26, 0);
  wheelSet(g, [-1.05, -0.75, 0.75, 1.05], 0.12);
  B(1.36, 0.95, 3.05, LIVERY.cream, 0, 0.92, 0);
  B(1.38, 0.16, 3.02, LIVERY.green, 0, 0.56, 0); // 腰线
  // 弯曲车顶（半圆柱壳）
  const roofGeo = new THREE.CylinderGeometry(0.68, 0.68, 2.85, 12, 1, true, 0, Math.PI);
  roofGeo.rotateX(Math.PI / 2);
  const roof = new THREE.Mesh(roofGeo, LIVERY.cream);
  roof.rotation.z = Math.PI / 2;
  roof.position.y = 1.39;
  add(roof);
  // 侧窗（夜亮）
  for (const sx of [-0.687, 0.687]) {
    const ry = sx > 0 ? Math.PI / 2 : -Math.PI / 2;
    for (const z of [-1.05, -0.35, 0.35, 1.05]) {
      const win = new THREE.Mesh(new THREE.PlaneGeometry(0.36, 0.32), trainWinMat);
      win.position.set(sx, 1.06, z);
      win.rotation.y = ry;
      g.add(win);
    }
  }
  B(1.06, 0.2, 0.1, LIVERY.dark, 0, 0.4, 1.5);
  B(1.06, 0.2, 0.1, LIVERY.dark, 0, 0.4, -1.5);
  return { group: g, halfLen: 1.65 };
}

export class TrainController {
  constructor(curve, scene, registry) {
    this.curve = curve;
    this.L = curve.getLength();
    this.s = this.L * 0.88; // 初始位置：接近车站，开门即见进站
    this.state = 'run';
    this.dwell = 0;
    this.accelT = 0;
    registry.emissives.push({ mat: trainWinMat, day: 0.05, night: 1.7 });

    this.vehicles = [buildLoco(registry), buildCoach(registry), buildCoach(registry)];
    for (const v of this.vehicles) scene.add(v.group);

    // 烟雾粒子池
    this.puffs = [];
    this.smokeTimer = 0;
    const puffGeo = new THREE.SphereGeometry(1, 7, 6);
    for (let i = 0; i < 22; i++) {
      const mesh = new THREE.Mesh(
        puffGeo,
        new THREE.MeshBasicMaterial({ color: 0xe9e5df, transparent: true, opacity: 0, depthWrite: false })
      );
      mesh.visible = false;
      scene.add(mesh);
      this.puffs.push({ mesh, life: 0, vel: new THREE.Vector3() });
    }
    this.place();
  }

  reset() {
    this.s = this.L * 0.88;
    this.state = 'run';
    this.dwell = 0;
    this.accelT = 0;
    for (const p of this.puffs) {
      p.life = 0;
      p.mesh.visible = false;
    }
    this.place();
  }

  update(dt, running, speedMult) {
    let moving = 0;
    if (running) {
      const cruise = CRUISE * speedMult;
      let factor = 1;
      const ds = ((-this.s) % this.L + this.L) % this.L; // 距车站（s=0）的顺行距离
      if (this.state === 'dwell') {
        factor = 0;
        this.dwell -= dt;
        if (this.dwell <= 0) {
          this.state = 'accel';
          this.accelT = 0;
        }
      } else if (this.state === 'accel') {
        this.accelT += dt;
        factor = smooth(this.accelT / ACCEL_TIME);
        if (this.accelT >= ACCEL_TIME) this.state = 'run';
      } else if (ds < DECEL_DIST) {
        factor = Math.pow(ds / DECEL_DIST, 0.72);
        if (ds <= 0.06) {
          this.state = 'dwell';
          this.dwell = DWELL_TIME;
          factor = 0;
        }
      }
      let adv = cruise * factor * dt;
      if (this.state === 'run' && ds < DECEL_DIST) adv = Math.min(adv, Math.max(ds - 0.03, 0));
      this.s = (this.s + adv) % this.L;
      moving = factor;
      this.updateSmoke(dt, moving, speedMult);
    }
    this.place();
  }

  place() {
    const pF = new THREE.Vector3();
    const pB = new THREE.Vector3();
    this.vehicles.forEach((v, i) => {
      const sc = (((this.s - i * SPACING) % this.L) + this.L) % this.L;
      const uF = (((sc + v.halfLen) % this.L) + this.L) % this.L / this.L;
      const uB = (((sc - v.halfLen) % this.L) + this.L) % this.L / this.L;
      this.curve.getPointAt(uF, pF);
      this.curve.getPointAt(uB, pB);
      v.group.position.set((pF.x + pB.x) / 2, TRACK.RAIL_TOP, (pF.z + pB.z) / 2);
      v.group.rotation.y = Math.atan2(pF.x - pB.x, pF.z - pB.z);
    });
    this.vehicles[0].group.updateMatrixWorld(true);
  }

  updateSmoke(dt, factor, speedMult) {
    // 烟囱世界坐标
    const tip = this.vehicles[0].group.localToWorld(new THREE.Vector3(0, 2.05, 1.32));
    this.smokeTimer -= dt;
    if (factor > 0.12 && this.smokeTimer <= 0) {
      const puff = this.puffs.find((p) => p.life <= 0);
      if (puff) {
        puff.life = 1.6;
        puff.maxLife = 1.6;
        puff.mesh.visible = true;
        puff.mesh.position.copy(tip);
        puff.vel.set((Math.random() - 0.5) * 0.25, 1.15 + speedMult * 0.2, (Math.random() - 0.5) * 0.25);
        puff.mesh.scale.setScalar(0.14);
      }
      this.smokeTimer = 0.42 / (0.5 + speedMult);
    }
    for (const p of this.puffs) {
      if (p.life <= 0) continue;
      p.life -= dt;
      if (p.life <= 0) {
        p.mesh.visible = false;
        continue;
      }
      p.mesh.position.addScaledVector(p.vel, dt);
      const t = 1 - p.life / p.maxLife;
      p.mesh.scale.setScalar(0.14 + t * 0.55);
      p.mesh.material.opacity = 0.55 * (1 - t) * (0.4 + 0.6 * (1 - t));
    }
  }
}
