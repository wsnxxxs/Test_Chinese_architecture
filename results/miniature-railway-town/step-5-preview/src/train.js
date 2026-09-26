/**
 * The train: a small tank locomotive and two carriages.
 *
 * Every unit is driven by its own arc length along the layout's closed loop, so
 * each one takes its own heading from its own position on the curve — the train
 * never rotates as a single rigid body. Spacing is held in arc length (which is
 * also how a real coupling behaves) and the whole train shares one speed, which
 * is what makes the station stop work for all three vehicles at once.
 */
import * as THREE from 'three';
import { worldUVBox, box } from './geom.js';

const CRUISE = 1.5;          // world units per second at 1x
const ACCEL = 0.9;           // how briskly the train reaches the target speed
const BRAKE_DECEL = 1.1;     // units/s^2 used for the station stop
const BRAKE_MARGIN = 0.6;    // start braking this much before the ideal point
const DWELL = 2.0;           // seconds at the station

/** Coupler offsets, measured along the track behind the locomotive centre. */
const OFFSETS = [0, 4.35, 8.15];

/** A spoked wheel that spins about local x. */
function wheel(r, mat) {
  const g = new THREE.Group();
  const tyre = new THREE.Mesh(new THREE.TorusGeometry(r - 0.035, 0.042, 6, 16), mat);
  tyre.rotation.y = Math.PI / 2;
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(r - 0.05, r - 0.05, 0.08, 14), mat);
  disc.rotation.z = Math.PI / 2;
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.14, 8), mat);
  hub.rotation.z = Math.PI / 2;
  g.add(tyre, disc, hub);
  for (let i = 0; i < 6; i++) {
    const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.07, r * 1.7, 0.04), mat);
    spoke.rotation.x = (i / 6) * Math.PI;
    g.add(spoke);
  }
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

/** A steam locomotive. Local +z is the direction of travel. */
function locomotive(M, theme) {
  const g = new THREE.Group();
  const green = M.facade(0x33463c, { roughness: 0.55 });
  const lining = new THREE.MeshStandardMaterial({ color: 0x8a3a24, roughness: 0.45, metalness: 0.35 });
  const brassMat = new THREE.MeshStandardMaterial({ color: 0xb08a3e, metalness: 0.8, roughness: 0.3 });
  const wheels = [];

  // Chassis, footplate and frames.
  g.add(box(1.42, 0.18, 3.5, M.metalDark, 0, 0.34, 0));
  g.add(box(1.56, 0.09, 3.3, M.metalDark, 0, 0.5, 0));
  for (const side of [-1, 1]) {
    g.add(box(0.12, 0.3, 3.2, lining, side * 0.68, 0.62, 0));
  }

  // Boiler, smokebox and chimney.
  const boiler = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.34, 1.85, 14), green);
  boiler.rotation.x = Math.PI / 2;
  boiler.position.set(0, 0.94, 0.35);
  g.add(boiler);
  const smokebox = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.2, 14), M.metalDark);
  smokebox.rotation.x = Math.PI / 2;
  smokebox.position.set(0, 0.94, 1.36);
  g.add(smokebox);
  const funnel = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.17, 0.52, 10), M.metalDark);
  funnel.position.set(0, 1.36, 1.22);
  g.add(funnel);
  const dome = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.15, 0.24, 10), brassMat);
  dome.position.set(0, 1.32, 0.42);
  g.add(dome);

  // Cab with glazed sides, roof and a small head board.
  const cab = new THREE.Mesh(worldUVBox(1.3, 0.9, 1.06, M.facadeUV), M.facade(0x8c2f22, { roughness: 0.6 }));
  cab.position.set(0, 1.36, -0.74);
  g.add(cab);
  const cabRoof = box(1.46, 0.09, 1.2, M.roofSlate, 0, 1.86, -0.74);
  g.add(cabRoof);
  g.add(box(1.44, 0.14, 0.06, M.roofSlate, 0, 1.98, -0.24));

  // Side tanks over the driving wheels.
  for (const side of [-1, 1]) {
    g.add(box(0.26, 0.54, 1.5, green, side * 0.6, 0.72, 0.2));
  }

  // Wheels: two drivers plus a small leading and trailing pair.
  for (const [z, r] of [[-0.2, 0.3], [-1.02, 0.3], [1.16, 0.18], [-1.5, 0.18]]) {
    for (const side of [-1, 1]) {
      const w = wheel(r, M.metalDark);
      w.position.set(side * 0.575, 0.36 + r, z);
      g.add(w);
      wheels.push(w);
    }
  }

  // Buffer beam, buffers and couplings.
  g.add(box(1.4, 0.18, 0.14, M.metalDark, 0, 0.66, 1.74));
  for (const side of [-1, 1]) {
    const buf = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.2, 8), M.metalDark);
    buf.rotation.x = Math.PI / 2;
    buf.position.set(side * 0.5, 0.62, 1.86);
    g.add(buf);
  }
  for (const z of [1.94, -1.94]) g.add(box(0.1, 0.16, 0.16, M.metalDark, 0, 0.5, z));

  // Head lamp and cab light, both glowing after dark.
  const lampMat = new THREE.MeshStandardMaterial({ color: 0xf6e7c4, roughness: 0.3, emissive: 0x332211 });
  theme.add(lampMat, 0x2a2114, 0xffd79a, 1, 2.8);
  const lens = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.26, 0.06), lampMat);
  lens.position.set(0, 1.16, 1.6);
  g.add(lens);
  const lampHood = box(0.4, 0.1, 0.16, M.metalDark, 0, 1.32, 1.58);
  g.add(lampHood);
  const cabLamp = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.1, 0.08), lampMat);
  cabLamp.position.set(0, 1.78, -0.22);
  g.add(cabLamp);

  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return { group: g, wheels };
}

/** A four-window carriage. */
function carriage(M, theme, color) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(worldUVBox(1.3, 0.9, 2.7, M.facadeUV), M.facade(color, { roughness: 0.7 }));
  body.position.y = 0.95;
  g.add(body);
  g.add(box(1.42, 0.1, 2.8, M.roofSlate, 0, 1.46, 0));
  g.add(box(1.0, 0.06, 2.4, M.roofSlate, 0, 1.56, 0));
  g.add(box(1.3, 0.14, 0.12, M.metalDark, 0, 0.52, 1.3));
  g.add(box(1.3, 0.14, 0.12, M.metalDark, 0, 0.52, -1.3));
  for (const side of [-1, 1]) {
    for (const z of [1.38, -1.38]) g.add(box(0.1, 0.1, 0.14, M.metalDark, side * 0.45, 0.46, z));
  }
  // Small corner lamps that glow with the windows at night.
  const lampMat = new THREE.MeshStandardMaterial({ color: 0xf6e7c4, roughness: 0.35, emissive: 0x332211 });
  theme.add(lampMat, 0x2a2114, 0xffcf8a, 1, 2.2);
  for (const sx of [-1, 1]) {
    for (const sz of [1, -1]) {
      const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.1, 0.1), lampMat);
      lamp.position.set(sx * 0.62, 1.06, sz * 1.32);
      g.add(lamp);
    }
  }
  const wheels = [];
  for (const z of [0.85, -0.85]) {
    for (const side of [-1, 1]) {
      const w = wheel(0.15, M.metalDark);
      w.position.set(side * 0.58, 0.51, z);
      g.add(w);
      wheels.push(w);
    }
  }
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return { group: g, wheels };
}

/**
 * Drives the head of the train along the loop: cruises, brakes on a scheduled
 * profile so it lands on the platform, dwells, then pulls away again.
 *
 * The stop is scheduled by *time* (a constant-deceleration ramp) rather than by
 * easing towards the point, which converges nicely and never crawls the last
 * few millimetres into the platform.
 */
export class TrainController {
  constructor(layout, startD) {
    this.layout = layout;
    this.length = layout.track.length;
    this.stopD = layout.stopD;
    this.d = startD;
    this.v = CRUISE;
    this.dwell = 0;
    this.state = 'running';
    this.speedScale = 1;
    this.paused = false;
    this.brakeT = 0;
    this.brakeDur = 1;
    this.brakeV = 0;
    this.stopTarget = startD;
  }

  /** Next station stop strictly ahead of the current position. */
  nextStop() {
    // The epsilon keeps the stop we are sitting on from being "next" again,
    // which would re-trigger the dwell every frame.
    const k = Math.ceil((this.d - this.stopD + 1e-4) / this.length);
    return this.stopD + k * this.length;
  }

  update(dt) {
    if (this.paused) return;

    if (this.state === 'dwelling') {
      this.dwell = Math.max(0, this.dwell - dt);
      this.v = 0;
      if (this.dwell === 0) this.state = 'running';
      return;
    }

    if (this.state === 'braking') {
      this.brakeT += dt;
      const f = Math.min(1, this.brakeT / this.brakeDur);
      this.v = this.brakeV * (1 - f);
      this.d += this.v * dt;
      if (f >= 1) {
        // Land exactly on the platform centre, whatever the frame timings did.
        this.d = this.stopTarget;
        this.v = 0;
        this.dwell = DWELL;
        this.state = 'dwelling';
      }
      return;
    }

    // Cruising: ease towards the requested speed.
    const target = CRUISE * this.speedScale;
    this.v += (target - this.v) * Math.min(1, dt * ACCEL * 2.4);
    const stop = this.nextStop();
    const toStop = stop - this.d;
    if (toStop <= this.v * this.v / (2 * BRAKE_DECEL) + BRAKE_MARGIN) {
      this.state = 'braking';
      this.brakeT = 0;
      this.brakeV = Math.max(this.v, 0.3);
      this.brakeDur = Math.max(0.5, (2 * toStop) / this.brakeV);
      this.stopTarget = stop;
    }
    this.d += this.v * dt;
  }

  /** True while the train is standing at the station platform. */
  get atStation() {
    return this.state === 'dwelling';
  }

  reset() {
    this.d = this.initialD;
    this.v = CRUISE;
    this.dwell = 0;
    this.state = 'running';
    this.speedScale = 1;
    this.paused = false;
  }
}

export function buildTrain(M, theme, layout) {
  const group = new THREE.Group();
  group.name = 'train';

  const loco = locomotive(M, theme);
  const car1 = carriage(M, theme, 0x6f7a52);
  const car2 = carriage(M, theme, 0x7a4a3a);

  const units = [
    { mesh: loco.group, offset: OFFSETS[0], kind: 'loco', wheels: loco.wheels, radius: 0.3 },
    { mesh: car1.group, offset: OFFSETS[1], kind: 'car', wheels: car1.wheels, radius: 0.15 },
    { mesh: car2.group, offset: OFFSETS[2], kind: 'car', wheels: car2.wheels, radius: 0.15 },
  ];
  for (const u of units) group.add(u.mesh);

  const track = layout.track;
  const p = new THREE.Vector3();
  const q = new THREE.Quaternion();
  const up = new THREE.Vector3(0, 1, 0);

  /** Place every unit at its own arc length, using its own heading. */
  const place = () => {
    for (const u of units) {
      const d = controller.d - u.offset;
      track.position(d, p);
      const t = track.tangent(d, new THREE.Vector3());
      u.mesh.position.copy(p);
      u.mesh.position.y = 0;
      q.setFromAxisAngle(up, Math.atan2(t.x, t.z));
      u.mesh.quaternion.copy(q);
    }
  };

  const startD = layout.stopD - 13.5;
  const controller = new TrainController(layout, startD);
  controller.initialD = startD;
  place();

  /** Spin the wheels by the distance rolled, so they never look static. */
  const rollWheels = (dv) => {
    for (const u of units) {
      for (const w of u.wheels) w.rotation.x -= dv / u.radius;
    }
  };

  return {
    group,
    controller,
    units,
    place,
    /** Advance the train and re-place all three units. */
    update(dt) {
      const before = controller.d;
      controller.update(dt);
      const dv = controller.d - before;
      if (dv !== 0) rollWheels(dv);
      place();
    },
  };
}
