import * as THREE from 'three';

const darkMat = new THREE.MeshStandardMaterial({ color: 0x1e1e1e, roughness: 0.8 });
const wheelGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.12, 10);

function addWheels(g, len) {
  for (const [wx, wz] of [[-len * 0.32, 0.85], [len * 0.32, 0.85], [-len * 0.32, -0.85], [len * 0.32, -0.85]]) {
    const wheel = new THREE.Mesh(wheelGeo, darkMat);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(wx, 0.28, wz);
    wheel.castShadow = true;
    g.add(wheel);
  }
}

function makeLocomotive(mats) {
  const g = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xa83232, roughness: 0.55 });
  const brassMat = new THREE.MeshStandardMaterial({ color: 0xc8a038, roughness: 0.4, metalness: 0.5 });

  const chassis = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.35, 1.5), darkMat);
  chassis.position.y = 0.38;
  chassis.castShadow = true;
  g.add(chassis);

  // 锅炉（沿 z 轴）
  const boiler = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 1.9, 14), bodyMat);
  boiler.rotation.x = Math.PI / 2;
  boiler.position.set(0, 0.95, 0.45);
  boiler.castShadow = true;
  g.add(boiler);

  // 锅炉前盖
  const front = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.56, 0.1, 14), brassMat);
  front.rotation.x = Math.PI / 2;
  front.position.set(0, 0.95, 1.42);
  g.add(front);

  // 驾驶室
  const cab = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.15, 1.5), bodyMat);
  cab.position.set(0, 1.05, -0.85);
  cab.castShadow = true;
  g.add(cab);
  const cabRoof = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.1, 1.6), darkMat);
  cabRoof.position.set(0, 1.68, -0.85);
  g.add(cabRoof);

  // 烟囱
  const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.16, 0.55, 8), darkMat);
  stack.position.set(0, 1.55, 1.15);
  stack.castShadow = true;
  g.add(stack);

  // 前灯
  const headlamp = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 8), mats.headlight);
  headlamp.position.set(0, 1.05, 1.5);
  g.add(headlamp);

  addWheels(g, 3.0);
  return g;
}

function makeCar(mats) {
  const g = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x3a6a9a, roughness: 0.55 });

  const chassis = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.3, 1.5), darkMat);
  chassis.position.y = 0.33;
  chassis.castShadow = true;
  g.add(chassis);

  const body = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.05, 1.4), bodyMat);
  body.position.y = 0.98;
  body.castShadow = true;
  g.add(body);

  const roof = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.12, 1.5), darkMat);
  roof.position.y = 1.56;
  roof.castShadow = true;
  g.add(roof);

  // 窗户带（两侧，自发光）
  const winGeo = new THREE.BoxGeometry(0.42, 0.38, 0.06);
  for (const side of [-1, 1]) {
    for (let i = 0; i < 3; i++) {
      const win = new THREE.Mesh(winGeo, mats.carWin);
      win.position.set(side * 0.72, 1.15, -0.85 + i * 0.85);
      g.add(win);
    }
  }

  addWheels(g, 2.8);
  return g;
}

export function createTrain(scene, curve, mats) {
  const head = makeLocomotive(mats);
  const car1 = makeCar(mats);
  const car2 = makeCar(mats);
  scene.add(head, car1, car2);

  const L = curve.getLength();
  const carLen = 3.0;
  const gap = 0.55;
  const gap1 = (carLen + gap) / L;
  const gap2 = (2 * carLen + 2 * gap) / L;

  const BASE_SPEED = 6; // 单位/秒（1x）

  let uHead = 0;
  let speed = BASE_SPEED;
  let uStation = 0;
  let mode = 'running'; // 'running' | 'dwell'
  let dwellT = 0;
  let prevDu = 0;

  const p = new THREE.Vector3();
  const tan = new THREE.Vector3();
  const lookTarget = new THREE.Vector3();

  function place(obj, u) {
    u = ((u % 1) + 1) % 1;
    curve.getPointAt(u, p);
    curve.getTangentAt(u, tan);
    obj.position.copy(p);
    lookTarget.copy(p).add(tan);
    obj.lookAt(lookTarget);
  }

  function normDu(d) {
    return ((((d + 0.5) % 1) + 1) % 1) - 0.5;
  }

  return {
    update(dt) {
      if (mode === 'running') {
        uHead += (speed * dt) / L;
        const du = normDu(uHead - uStation);
        // 车头经过车站中心：du 由负变正
        if (prevDu < 0 && du >= 0 && Math.abs(du) < 0.02) {
          mode = 'dwell';
          dwellT = 0;
        }
        prevDu = du;
      } else {
        dwellT += dt;
        if (dwellT >= 2) {
          mode = 'running';
        }
      }
      place(head, uHead);
      place(car1, uHead - gap1);
      place(car2, uHead - gap2);
    },
    reset(u0) {
      uHead = u0;
      speed = BASE_SPEED;
      mode = 'running';
      dwellT = 0;
      prevDu = normDu(u0 - uStation);
      place(head, uHead);
      place(car1, uHead - gap1);
      place(car2, uHead - gap2);
    },
    setSpeed(mult) {
      speed = BASE_SPEED * mult;
    },
    setUStation(u) {
      uStation = u;
      prevDu = normDu(uHead - uStation);
    },
    isDwell() {
      return mode === 'dwell';
    }
  };
}
