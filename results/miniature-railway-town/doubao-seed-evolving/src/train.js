import * as THREE from 'three';
import { RAIL_Y } from './track.js';

const WHEEL_R = 0.21;
const CAR_SPACING = 3.4; // 相邻车辆中心点之间的弧长距离

function wheelMesh(r, width, mat) {
  const geo = new THREE.CylinderGeometry(r, r, width, 16);
  geo.rotateX(Math.PI / 2); // 车轴沿车体局部 Z
  const m = new THREE.Mesh(geo, mat);
  m.position.y = -r + 0.02;
  return m;
}

function bogie(group, xs, matWheel) {
  for (const x of xs) {
    for (const z of [-0.62, 0.62]) {
      const w = wheelMesh(WHEEL_R, 0.12, matWheel);
      w.position.x = x;
      w.position.z = z;
      group.add(w);
    }
  }
}

/** 蒸汽机车：原点为车底中心，局部 +X 朝向前方 */
function buildLocomotive(mats) {
  const g = new THREE.Group();
  const L = 2.9;

  const frame = new THREE.Mesh(new THREE.BoxGeometry(L, 0.22, 1.12), mats.chassis);
  frame.position.y = 0.22;
  g.add(frame);

  // 锅炉
  const boilerGeo = new THREE.CylinderGeometry(0.38, 0.38, 1.85, 20);
  boilerGeo.rotateZ(Math.PI / 2);
  const boiler = new THREE.Mesh(boilerGeo, mats.locoBody);
  boiler.position.set(0.25, 0.62, 0);
  g.add(boiler);

  // 锅炉前端烟箱
  const frontGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 20);
  frontGeo.rotateZ(Math.PI / 2);
  const front = new THREE.Mesh(frontGeo, mats.locoDark);
  front.position.set(1.22, 0.62, 0);
  g.add(front);

  // 驾驶室
  const cab = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.78, 1.0), mats.locoBody);
  cab.position.set(-1, 0.62, 0);
  g.add(cab);
  const cabRoof = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.12, 1.12), mats.locoDark);
  cabRoof.position.set(-1, 1.07, 0);
  g.add(cabRoof);

  // 驾驶室侧窗（夜间发光）
  for (const z of [-0.505, 0.505]) {
    for (const x of [-0.85, -1.15]) {
      const win = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.28), mats.windowLit);
      win.position.set(x, 0.72, z);
      win.rotation.y = z > 0 ? Math.PI / 2 : -Math.PI / 2;
      g.add(win);
    }
  }

  // 烟囱
  const stackGeo = new THREE.CylinderGeometry(0.1, 0.14, 0.34, 12);
  const stack = new THREE.Mesh(stackGeo, mats.locoDark);
  stack.position.set(0.85, 1.05, 0);
  g.add(stack);
  // 蒸汽包
  const dome = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 8), mats.brass);
  dome.position.set(0.2, 1.02, 0);
  g.add(dome);

  // 排障器
  const cow = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.3, 1.0), mats.locoDark);
  cow.position.set(1.45, 0.18, 0);
  cow.rotation.z = -0.35;
  g.add(cow);

  // 前大灯
  const lampHousing = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.14, 12), mats.brass);
  lampHousing.geometry.rotateZ(Math.PI / 2);
  lampHousing.position.set(1.35, 0.78, 0);
  g.add(lampHousing);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), mats.headBulb);
  bulb.position.set(1.43, 0.78, 0);
  g.add(bulb);

  // 头灯（实光源，夜晚投射）
  const headlight = new THREE.SpotLight(0xffd9a0, 0, 13, Math.PI / 7, 0.55, 1.6);
  headlight.position.set(1.45, 0.8, 0);
  const target = new THREE.Object3D();
  target.position.set(9, 0.2, 0);
  g.add(headlight, target);
  headlight.target = target;

  bogie(g, [-0.95, 0.0, 0.95], mats.wheel);
  g.userData.length = L;
  return { group: g, length: L, wheels: g.children.filter((c) => c.geometry && c.geometry.type === 'CylinderGeometry' && Math.abs(c.position.z) > 0.5), headlight };
}

/** 客运车厢 */
function buildCar(bodyMat, mats, length = 2.7) {
  const g = new THREE.Group();

  const frame = new THREE.Mesh(new THREE.BoxGeometry(length, 0.18, 1.08), mats.chassis);
  frame.position.y = 0.2;
  g.add(frame);

  const body = new THREE.Mesh(new THREE.BoxGeometry(length - 0.15, 0.95, 1.0), bodyMat);
  body.position.y = 0.72;
  g.add(body);

  // 圆弧感车顶：稍窄的倒角箱体
  const roof = new THREE.Mesh(new THREE.BoxGeometry(length - 0.1, 0.16, 0.92), mats.carRoof);
  roof.position.y = 1.27;
  g.add(roof);
  const roofTop = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, length - 0.2, 10), mats.carRoof);
  roofTop.geometry.rotateZ(Math.PI / 2);
  roofTop.position.y = 1.35;
  g.add(roofTop);

  // 两侧车窗（夜间暖色）
  const winCount = 4;
  for (let i = 0; i < winCount; i++) {
    const x = -length * 0.32 + i * (length * 0.64 / (winCount - 1));
    for (const z of [-0.505, 0.505]) {
      const win = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.34), mats.windowLit);
      win.position.set(x, 0.78, z);
      win.rotation.y = z > 0 ? Math.PI / 2 : -Math.PI / 2;
      g.add(win);
    }
  }

  // 端部车门与端梯
  for (const x of [-length / 2 + 0.02, length / 2 - 0.02]) {
    const door = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.7, 0.5), mats.locoDark);
    door.position.set(x, 0.62, 0);
    g.add(door);
  }

  bogie(g, [-length * 0.32, length * 0.32], mats.wheel);
  g.userData.length = length;
  return { group: g, length };
}

export function createTrain(scene, track, mats) {
  const loco = buildLocomotive(mats);
  const car1 = buildCar(mats.carBodyA, mats);
  const car2 = buildCar(mats.carBodyB, mats);
  scene.add(loco.group, car1.group, car2.group);

  const vehicles = [
    { obj: loco.group, length: loco.length, offset: 0 },
    { obj: car1.group, length: car1.length, offset: CAR_SPACING },
    { obj: car2.group, length: car2.length, offset: CAR_SPACING * 2 },
  ];

  // 车钩
  const couplings = [];
  for (let i = 0; i < vehicles.length - 1; i++) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(1, 0.09, 0.09), mats.coupling);
    scene.add(bar);
    couplings.push(bar);
  }

  const fr = {};
  let lastS = null;
  let wheelSpin = 0;
  const up = new THREE.Vector3(0, 1, 0);
  const vA = new THREE.Vector3();
  const vB = new THREE.Vector3();
  const mid = new THREE.Vector3();
  const dirV = new THREE.Vector3();
  const q = new THREE.Quaternion();

  /** s = 车头中心弧长；据此独立放置三节车辆 */
  function setLead(s) {
    for (const v of vehicles) {
      track.frame(s - v.offset, fr);
      v.obj.position.set(fr.x, RAIL_Y, fr.z);
      v.obj.rotation.set(0, fr.yaw, 0);
    }

    if (lastS !== null) {
      let d = s - lastS;
      if (d > track.length / 2) d -= track.length;
      if (d < -track.length / 2) d += track.length;
      wheelSpin += d / WHEEL_R;
    }
    lastS = s;
    loco.group.traverse((o) => {
      if (o.isMesh && o.geometry && o.position && Math.abs(o.position.z) > 0.55 && o.geometry.type === 'CylinderGeometry') {
        o.rotation.z = wheelSpin;
      }
    });

    // 更新车钩：连接前车尾部与后车前部
    for (let i = 0; i < couplings.length; i++) {
      const a = vehicles[i];
      const b = vehicles[i + 1];
      const ya = a.obj.rotation.y;
      const yb = b.obj.rotation.y;
      vA.set(a.obj.position.x + Math.cos(ya) * a.length / 2, RAIL_Y - 0.02, a.obj.position.z - Math.sin(ya) * a.length / 2);
      vB.set(b.obj.position.x - Math.cos(yb) * b.length / 2, RAIL_Y - 0.02, b.obj.position.z + Math.sin(yb) * b.length / 2);
      mid.addVectors(vA, vB).multiplyScalar(0.5);
      dirV.subVectors(vB, vA);
      const dist = dirV.length();
      couplings[i].position.copy(mid);
      couplings[i].scale.set(dist, 1, 1);
      q.setFromUnitVectors(new THREE.Vector3(1, 0, 0), dirV.normalize());
      couplings[i].quaternion.copy(q);
      // 车钩基本水平：压平俯仰
      couplings[i].position.y = RAIL_Y - 0.02;
    }
  }

  function resetSpin() {
    lastS = null;
    wheelSpin = 0;
  }

  return { setLead, resetSpin, headlight: loco.headlight };
}
