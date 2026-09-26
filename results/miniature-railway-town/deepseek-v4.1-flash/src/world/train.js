import * as THREE from 'three';
import { trackCurve, TRACK_LENGTH, RAIL, STATION_U, PLATFORM_SPAN } from './layout.js';
import { curvedRoofGeometry, matrixAt } from '../lib/geometry.js';
import { glowTexture } from '../lib/textures.js';

// ---------------------------------------------------------------------------
// The train. Every vehicle is placed independently: its bogie centres are
// sampled on the loop and the body is aligned with the chord between them, so
// each carriage swings through curves on its own instead of the whole train
// rotating around one point.
// ---------------------------------------------------------------------------

const WHEEL_BASE = { loco: 1.6, coach: 2.6 };
const CAR_LENGTH = { loco: 7.4, coach: 7.6 };
export const CAR_SPACING = 8.55;
const DWELL_TIME = 2.0;

function wheel(radius, width, material, crank = false, crankMat = null) {
  const geo = new THREE.CylinderGeometry(radius, radius, width, 18);
  geo.rotateX(Math.PI / 2);
  const group = new THREE.Group();
  const tyre = new THREE.Mesh(geo, material);
  tyre.castShadow = true;
  group.add(tyre);
  const flange = new THREE.Mesh(new THREE.CylinderGeometry(radius * 1.12, radius * 1.12, width * 0.22, 18), material);
  flange.geometry.rotateX(Math.PI / 2);
  flange.position.z = width * 0.62;
  group.add(flange);
  if (crank) {
    const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.16, 8), crankMat);
    pin.geometry.rotateX(Math.PI / 2);
    pin.position.set(0, radius * 0.62, width * 0.85);
    group.add(pin);
  }
  return group;
}

function buildLocomotive(M) {
  const g = new THREE.Group();
  const add = (geo, pos, mat, rotY = 0) => {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(pos[0], pos[1], pos[2]);
    mesh.rotation.y = rotY;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    g.add(mesh);
    return mesh;
  };

  // frame and running boards
  add(new THREE.BoxGeometry(7.0, 0.46, 1.9), [0, 0.78, 0], M.locoBlack);
  add(new THREE.BoxGeometry(6.4, 0.14, 2.5), [-0.2, 1.02, 0], M.locoBody);

  // boiler + smokebox
  const boiler = new THREE.CylinderGeometry(0.62, 0.62, 4.5, 20);
  boiler.rotateZ(Math.PI / 2);
  add(boiler, [0.75, 1.72, 0], M.locoBody);
  const smokebox = new THREE.CylinderGeometry(0.66, 0.66, 0.5, 20);
  smokebox.rotateZ(Math.PI / 2);
  add(smokebox, [3.0, 1.72, 0], M.locoBlack);
  const smokeboxDoor = new THREE.Mesh(new THREE.CircleGeometry(0.64, 20), M.locoBlack);
  smokeboxDoor.position.set(3.26, 1.72, 0);
  smokeboxDoor.rotation.y = Math.PI / 2;
  g.add(smokeboxDoor);

  // chimney, dome, safety valves
  add(new THREE.CylinderGeometry(0.17, 0.24, 0.75, 12), [2.5, 2.5, 0], M.locoBlack);
  add(new THREE.CylinderGeometry(0.26, 0.3, 0.18, 12), [2.5, 2.92, 0], M.locoBlack);
  const dome = new THREE.SphereGeometry(0.34, 14, 10);
  add(dome, [0.7, 2.3, 0], M.locoBody);
  add(new THREE.CylinderGeometry(0.12, 0.12, 0.3, 8), [-0.5, 2.45, 0], M.trainTrim);

  // cab
  add(new THREE.BoxGeometry(2.0, 1.5, 2.05), [-2.5, 2.0, 0], M.locoBody);
  add(new THREE.BoxGeometry(2.35, 0.14, 2.4), [-2.5, 2.82, 0], M.locoBlack);
  for (const s of [-1, 1]) {
    const win = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.6, 0.06), M.glassDark);
    win.position.set(-2.5, 2.35, s * 1.03);
    g.add(win);
    const front = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.6, 0.8), M.glassDark);
    front.position.set(-1.53, 2.35, s * 0.5);
    g.add(front);
  }

  // buffers and coupling
  for (const s of [-1, 1]) {
    const buf = new THREE.CylinderGeometry(0.16, 0.2, 0.34, 10);
    buf.rotateZ(Math.PI / 2);
    add(buf, [3.6, 0.86, s * 0.55], M.steelDark);
  }
  add(new THREE.BoxGeometry(0.5, 0.14, 0.14), [3.55, 0.7, 0], M.ironDark);

  // wheels and side rods
  const axles = [-1.9, -0.1, 1.7];
  const wheels = [];
  for (const x of axles) {
    for (const s of [-1, 1]) {
      const w = wheel(0.34, 0.18, M.ironDark, true, M.rail);
      w.position.set(x, 0.34, s * 0.85);
      g.add(w);
      wheels.push(w);
    }
  }
  const rods = [];
  for (const s of [-1, 1]) {
    const rod = new THREE.Mesh(new THREE.BoxGeometry(3.9, 0.1, 0.09), M.rail);
    rod.castShadow = true;
    g.add(rod);
    rods.push(rod);
    rod.userData.side = s;
  }

  return {
    group: g,
    wheels,
    rods,
    wheelRadius: 0.34,
    crankRadius: 0.34 * 0.62,
    axleMid: (axles[0] + axles[2]) / 2,
    length: CAR_LENGTH.loco,
    wheelBase: WHEEL_BASE.loco,
    chimneyLocal: new THREE.Vector3(2.5, 3.0, 0),
  };
}

function buildCoach(M, index) {
  const g = new THREE.Group();
  const bodyMat = M.carriages[index % M.carriages.length];
  const add = (geo, pos, mat) => {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(pos[0], pos[1], pos[2]);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    g.add(mesh);
    return mesh;
  };

  add(new THREE.BoxGeometry(7.4, 0.24, 1.8), [0, 0.92, 0], M.ironDark);
  add(new THREE.BoxGeometry(7.4, 1.55, 2.1), [0, 1.82, 0], bodyMat);
  add(new THREE.BoxGeometry(7.5, 0.16, 2.14), [0, 1.2, 0], M.trainTrim);
  add(new THREE.BoxGeometry(7.5, 0.1, 2.14), [0, 2.52, 0], M.trainTrim);

  const roof = curvedRoofGeometry(2.28, 7.6, 0.4);
  roof.rotateY(Math.PI / 2);
  add(roof, [0, 2.54, 0], M.locoBlack);

  // windows: a random-looking mix of lit and dark
  const litPattern = [
    [true, false, true, true, false],
    [true, true, false, true, false],
  ];
  for (const s of [-1, 1]) {
    for (let i = 0; i < 5; i++) {
      const x = -2.9 + i * 1.45;
      const lit = litPattern[index % 2][i];
      const win = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.8, 0.06), lit ? M.glassWarm : M.glassDark);
      win.position.set(x, 1.95, s * 1.055);
      g.add(win);
      const frame = new THREE.Mesh(new THREE.BoxGeometry(1.14, 0.94, 0.04), M.trim);
      frame.position.set(x, 1.95, s * 1.04);
      g.add(frame);
    }
    for (const sgn of [-1, 1]) {
      const door = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.4, 0.06), M.trimDark);
      door.position.set(sgn * 3.35, 1.8, s * 1.06);
      g.add(door);
    }
  }

  // bogies
  const bogies = [];
  for (const bx of [-2.6, 2.6]) {
    const frame = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.34, 1.5), M.ironDark);
    frame.position.set(bx, 0.72, 0);
    frame.castShadow = true;
    g.add(frame);
    const wheels = [];
    for (const ax of [bx - 0.55, bx + 0.55]) {
      for (const s of [-1, 1]) {
        const w = wheel(0.3, 0.16, M.ironDark);
        w.position.set(ax, 0.3, s * 0.82);
        g.add(w);
        wheels.push(w);
      }
    }
    bogies.push(wheels);
  }

  for (const s of [-1, 1]) {
    for (const sgn of [-1, 1]) {
      const buf = new THREE.CylinderGeometry(0.15, 0.17, 0.3, 10);
      buf.rotateZ(Math.PI / 2);
      add(buf, [sgn * 3.85, 0.86, s * 0.55], M.steelDark);
    }
  }
  for (const sgn of [-1, 1]) {
    const hook = new THREE.BoxGeometry(0.4, 0.12, 0.12);
    add(hook, [sgn * 3.9, 0.72, 0], M.ironDark);
  }

  const allWheels = bogies.flat();
  return { group: g, wheels: allWheels, wheelRadius: 0.3, length: CAR_LENGTH.coach, wheelBase: WHEEL_BASE.coach };
}

export class Train {
  constructor(M, scene) {
    this.M = M;
    this.group = new THREE.Group();
    this.group.name = 'train';
    scene.add(this.group);

    this.loco = buildLocomotive(M);
    this.coaches = [buildCoach(M, 0), buildCoach(M, 1)];
    this.cars = [this.loco, ...this.coaches];
    this.cars.forEach((c) => this.group.add(c.group));

    this.spacing = CAR_SPACING;
    this.trainLength = this.spacing * 2 + CAR_LENGTH.coach;
    this.stationArc = STATION_U * TRACK_LENGTH;

    this.distance = 0;
    this.wheelAngle = 0;
    this.dwellTimer = 0;
    this.speed = 11;

    this.steam = this.createSteam(scene);
    this.reset();
  }

  createSteam(scene) {
    const tex = glowTexture();
    const material = new THREE.SpriteMaterial({
      map: tex,
      color: 0xd8d4cc,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
    });
    const puffs = [];
    for (let i = 0; i < 26; i++) {
      const sprite = new THREE.Sprite(material.clone());
      sprite.visible = false;
      sprite.scale.set(1.2, 1.2, 1.2);
      scene.add(sprite);
      puffs.push({ sprite, life: 0, max: 2.4, vel: new THREE.Vector3() });
    }
    return { puffs, timer: 0, cursor: 0 };
  }

  reset(speed) {
    this.speed = speed ?? this.speed;
    this.distance = this.stationArc + this.spacing - 26;
    if (this.distance < 0) this.distance += TRACK_LENGTH;
    this.nextStop = this.stationArc + this.spacing;
    while (this.nextStop < this.distance) this.nextStop += TRACK_LENGTH;
    this.dwellTimer = 0;
    this.wheelAngle = 0;
    this.steam.puffs.forEach((p) => {
      p.life = 0;
      p.sprite.visible = false;
    });
    this.place();
  }

  get isDwelling() {
    return this.dwellTimer > 0;
  }

  update(dt) {
    if (this.dwellTimer > 0) {
      this.dwellTimer -= dt;
      if (this.dwellTimer < 0) this.dwellTimer = 0;
      this.place();
      this.updateSteam(dt, false);
      return;
    }

    const step = this.speed * dt;
    this.distance += step;
    this.wheelAngle -= step / 0.34;

    if (this.distance >= this.nextStop) {
      this.distance = this.nextStop;
      this.nextStop += TRACK_LENGTH;
      this.dwellTimer = DWELL_TIME;
    }

    this.place();
    this.updateSteam(dt, true);
  }

  place() {
    this.cars.forEach((car, i) => {
      const centre = this.distance - i * this.spacing;
      const u = (centre / TRACK_LENGTH) % 1;
      const hw = car.wheelBase / TRACK_LENGTH;
      const front = trackCurve.getPointAt(((u + hw) % 1 + 1) % 1);
      const rear = trackCurve.getPointAt(((u - hw) % 1 + 1) % 1);
      const mid = front.clone().add(rear).multiplyScalar(0.5);
      const dir = front.clone().sub(rear).normalize();
      car.group.position.set(mid.x, RAIL.railTop, mid.z);
      car.group.rotation.y = Math.atan2(-dir.z, dir.x);

      car.wheels.forEach((w) => {
        w.rotation.z = this.wheelAngle * (0.34 / car.wheelRadius);
      });
    });

    // side rods translate on a circle driven by the crank pins
    const r = this.loco.crankRadius;
    const a = this.wheelAngle;
    const rodX = this.loco.axleMid - r * Math.sin(a);
    const rodY = 0.34 + r * Math.cos(a);
    this.loco.rods.forEach((rod) => {
      rod.position.set(rodX, rodY, rod.userData.side * 0.99);
    });
  }

  updateSteam(dt, moving) {
    const { puffs } = this.steam;
    this.steam.timer -= dt;
    const emitting = moving && this.steam.timer <= 0;
    if (emitting) {
      this.steam.timer = 0.26;
      const puff = puffs[this.steam.cursor];
      this.steam.cursor = (this.steam.cursor + 1) % puffs.length;
      const p = this.loco.group.position;
      const rotY = this.loco.group.rotation.y;
      const local = this.loco.chimneyLocal;
      const cos = Math.cos(rotY);
      const sin = Math.sin(rotY);
      puff.sprite.position.set(
        p.x + local.x * cos + local.z * sin,
        p.y + local.y,
        p.z - local.x * sin + local.z * cos
      );
      puff.life = puff.max;
      puff.sprite.visible = true;
      puff.vel.set((Math.random() - 0.5) * 0.25, 1.5, (Math.random() - 0.5) * 0.25);
    }
    for (const puff of puffs) {
      if (puff.life <= 0) continue;
      puff.life -= dt;
      if (puff.life <= 0) {
        puff.sprite.visible = false;
        continue;
      }
      const t = 1 - puff.life / puff.max;
      puff.sprite.position.addScaledVector(puff.vel, dt);
      puff.sprite.position.x += Math.sin(t * 6 + puff.max) * 0.2 * dt;
      const scale = 1.1 + t * 3.6;
      puff.sprite.scale.set(scale, scale, scale);
      puff.sprite.material.opacity = 0.42 * (1 - t) * (1 - t);
    }
  }
}
