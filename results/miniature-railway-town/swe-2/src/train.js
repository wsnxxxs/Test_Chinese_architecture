import * as THREE from 'three';
import { M, std, nightRegistry } from './materials.js';

const WHEEL_R = 0.17;
const CAR_Y = 0.13;            // car group origin height (set in update)
const AXLE_LOCAL = 0.26 + WHEEL_R - CAR_Y; // rail top + wheel radius, in car space

function wheelSet(len) {
  // two axles under a car, wheels rotated about local X
  const g = new THREE.Group();
  const geo = new THREE.CylinderGeometry(WHEEL_R, WHEEL_R, 0.09, 12);
  geo.rotateZ(Math.PI / 2);
  const wheels = [];
  for (const z of [len / 2 - 0.35, -(len / 2 - 0.35)]) {
    for (const x of [-0.32, 0.32]) {
      const w = new THREE.Mesh(geo, M.steel);
      w.position.set(x, 0, z);
      w.castShadow = true;
      g.add(w);
      wheels.push(w);
    }
  }
  g.userData.wheels = wheels;
  return g;
}

function buildLoco() {
  const g = new THREE.Group();
  const green = std('#2e5d43', { roughness: 0.55 });
  const black = std('#2a2a2c', { roughness: 0.6 });

  const chassis = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.16, 2.15), black);
  chassis.position.y = 0.1;
  g.add(chassis);

  const hood = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.42, 1.25), green);
  hood.position.set(0, 0.39, 0.35);
  g.add(hood);
  const cab = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.72, 0.72), green);
  cab.position.set(0, 0.54, -0.62);
  g.add(cab);
  const cabRoof = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.07, 0.8), black);
  cabRoof.position.set(0, 0.94, -0.62);
  g.add(cabRoof);
  const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 0.22, 8), black);
  stack.position.set(0, 0.68, 0.75);
  g.add(stack);

  // cab windows
  for (const s of [-1, 1]) {
    const win = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.24), M.window);
    win.position.set(0.316 * s, 0.62, -0.62);
    win.rotation.y = Math.PI / 2 * s;
    g.add(win);
  }

  // headlight
  const hlMat = new THREE.MeshStandardMaterial({
    color: '#fff2cc', emissive: '#ffdf9a', emissiveIntensity: 0.4,
  });
  nightRegistry.registerEmissive(hlMat, 0.4, 3.0);
  const hl = new THREE.Mesh(new THREE.CircleGeometry(0.09, 12), hlMat);
  hl.position.set(0, 0.45, 1.081);
  g.add(hl);

  const beam = new THREE.SpotLight('#ffd9a0', 0, 14, 0.45, 0.5, 1.2);
  beam.position.set(0, 0.5, 1.05);
  beam.target.position.set(0, 0, 7);
  g.add(beam, beam.target);
  g.userData.beam = beam;

  const wheels = wheelSet(1.7);
  wheels.position.y = AXLE_LOCAL;
  g.add(wheels);
  g.userData.wheels = wheels.userData.wheels;

  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; } });
  return g;
}

function buildCoach(bodyColor) {
  const g = new THREE.Group();
  const L = 1.95;
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.52, L), std(bodyColor, { roughness: 0.55 }));
  body.position.y = 0.5;
  g.add(body);
  const roof = new THREE.Mesh(new THREE.BoxGeometry(0.64, 0.09, L + 0.08), std('#5b564e'));
  roof.position.y = 0.8;
  g.add(roof);
  const skirt = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.16, L - 0.1), std('#3a3a3c'));
  skirt.position.y = 0.14;
  g.add(skirt);

  // window band on both sides — glows at night
  for (const s of [-1, 1]) {
    for (let i = 0; i < 4; i++) {
      const win = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.2), M.window);
      win.position.set(0.302 * s, 0.58, -L / 2 + 0.35 + i * 0.42);
      win.rotation.y = Math.PI / 2 * s;
      g.add(win);
    }
  }

  const wheels = wheelSet(L - 0.3);
  wheels.position.y = AXLE_LOCAL;
  g.add(wheels);
  g.userData.wheels = wheels.userData.wheels;

  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; } });
  return g;
}

export class Train {
  constructor(scene, path, startS) {
    this.path = path;
    this.group = new THREE.Group();
    scene.add(this.group);

    // each vehicle keeps its own front/rear bogie arc offsets
    this.cars = [
      { mesh: buildLoco(), front: -0.35, rear: -1.75 },   // loco: headS at front face
      { mesh: buildCoach('#a8402f'), front: -2.55, rear: -4.15 },
      { mesh: buildCoach('#3a6b8a'), front: -4.925, rear: -6.175 },
    ];
    for (const c of this.cars) this.group.add(c.mesh);

    this.headS = startS;
    this.startS = startS;
    this.baseSpeed = 3.4;          // units / second at 1x
    this.speedFactor = 1;
    this.v = 0;
    this.running = true;
    this.dwelling = false;
    this.dwellT = 0;
    this.sSinceDepart = Infinity;
    this.brakeDist = 6.5;

    this._v1 = new THREE.Vector3();
    this._v2 = new THREE.Vector3();
    this._look = new THREE.Vector3();
    this.update(0);
  }

  reset() {
    this.headS = this.startS;
    this.v = 0;
    this.dwelling = false;
    this.dwellT = 0;
    this.sSinceDepart = Infinity;
    this.speedFactor = 1;
    this.running = true;
    this.update(0);
  }

  update(dt, stationS) {
    const { path } = this;

    if (dt > 0 && this.running) {
      if (this.dwelling) {
        this.dwellT -= dt;
        if (this.dwellT <= 0) {
          this.dwelling = false;
          this.sSinceDepart = 0; // must clear the braking zone before it may stop again
        }
      } else {
        const target = this.baseSpeed * this.speedFactor;
        const distToStation = path.wrap(stationS - this.headS);
        const mayStop = this.sSinceDepart > this.brakeDist + 2;
        let desired = target;
        if (mayStop && distToStation < this.brakeDist) {
          desired = target * Math.max(0.07, Math.pow(distToStation / this.brakeDist, 0.7));
        }
        // accelerate / brake smoothly toward desired speed
        const rate = desired > this.v ? 4.5 : 7.0;
        this.v += Math.sign(desired - this.v) * Math.min(Math.abs(desired - this.v), rate * dt);

        const step = this.v * dt;
        if (mayStop && step >= distToStation && distToStation < this.brakeDist) {
          this.headS = stationS;      // dock exactly at the stop mark
          this.v = 0;
          this.dwelling = true;
          this.dwellT = 2.0;
        } else {
          this.headS = path.wrap(this.headS + step);
          this.sSinceDepart += step;
        }
      }
    }

    // pose each car from its two bogie points
    for (const c of this.cars) {
      const pf = this.path.pointAt(this.headS + c.front, this._v1);
      const pr = this.path.pointAt(this.headS + c.rear, this._v2);
      const mesh = c.mesh;
      mesh.position.copy(pf).add(pr).multiplyScalar(0.5);
      mesh.position.y = CAR_Y;
      this._look.copy(pf).sub(pr);
      mesh.rotation.y = Math.atan2(this._look.x, this._look.z);

      const spin = (this.v * dt) / WHEEL_R;
      if (spin && mesh.userData.wheels) {
        for (const w of mesh.userData.wheels) w.rotation.x += spin;
      }
    }
  }
}
