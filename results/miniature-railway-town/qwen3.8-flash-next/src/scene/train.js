import * as THREE from 'three';
import { trackFrame, TRACK, STATION_STOP_S, TRACK_LEN } from './layout.js';
import { box, cyl, mergedMesh, mat } from '../util/geo.js';
import { carriageTextures } from '../util/textures.js';
import { clamp, wrap, lerp } from '../util/mathx.js';

const RAIL_TOP = TRACK.railTop;
const DWELL_TIME = 2.0;        // seconds stood at the platform
const STOP_WINDOW = 0.5;       // arc-length half-width of the platform trigger
const BASE_SPEED = 2.35;       // units per second at 1.0x

/**
 * Three independent vehicles on one curve. Each body sits at its own arc length and
 * is oriented by the two bogie headings underneath it, so the consist articulates
 * through the curves rather than turning as one rigid object.
 */
const STOCK = [
  { id: 'loco', kind: 'loco', len: 2.30, wb: 1.45, w: 0.94, couplingAfter: 0.2 },
  { id: 'coach-a', kind: 'coach', len: 1.95, wb: 1.2, w: 0.92, couplingAfter: 0.2,
    livery: 0x8d2f26, roof: 0x2b2b30, bands: 0xd9b45a, cols: 5, doorAt: 0 },
  { id: 'coach-b', kind: 'brake', len: 1.82, wb: 1.08, w: 0.9,
    livery: 0x4a4f42, roof: 0x272a26, bands: 0xc9c2ae, cols: 4, doorAt: 3 },
];

/** Arc-length pitch from the locomotive centre to each vehicle behind it. */
const PITCH = [0];
for (let i = 1; i < STOCK.length; i++) {
  PITCH.push(PITCH[i - 1] + STOCK[i - 1].len / 2 + STOCK[i].len / 2 + (STOCK[i - 1].couplingAfter ?? 0.2));
}
export const TRAIN_LENGTH = STOCK.reduce((a, s) => a + s.len, 0) + 0.4;
export { DWELL_TIME };

export class Train {
  constructor(registry) {
    this.group = new THREE.Group();
    this.group.name = 'train';
    this.mode = 'run';
    this.dwellLeft = 0;
    this.speedSetting = 1;
    this.laps = 0;
    this.spin = 0;
    this.start = wrap(STATION_STOP_S - 9, TRACK_LEN);
    this.lastStopS = null;
    this.bodies = [];

    for (const spec of STOCK) {
      const built = spec.kind === 'loco' ? buildLoco(registry) : buildCoach(spec, registry);
      this.group.add(built.mesh);
      const bogies = (built.bogies || []).map((b) => { this.group.add(b); return b; });
      this.bodies.push({ spec, mesh: built.mesh, bogies, wheels: built.wheels });
    }

    this.couplings = [];
    for (let i = 0; i < this.bodies.length - 1; i++) {
      const rod = new THREE.Mesh(box(0.045, 0.05, 0.44, 0, 0, 0), mat({ color: 0x2a2a28, roughness: 0.6, metalness: 0.5 }));
      rod.castShadow = true;
      this.group.add(rod);
      this.couplings.push(rod);
    }

    this.smoke = buildSmoke();
    this.group.add(this.smoke.mesh);
    this.place();
  }

  get dwelling() { return this.mode === 'dwell'; }
  get speed() { return this.dwelling ? 0 : BASE_SPEED * this.speedSetting; }

  reset() {
    this.s = this.start;
    this.mode = 'run';
    this.dwellLeft = 0;
    this.laps = 0;
    this.spin = 0;
    this.speedSetting = 1;
    this.lastStopS = null;
    this.smoke.reset();
    this.place();
  }

  /** @param {number} dt seconds of simulation time (frozen while paused) */
  advance(dt) {
    const v = BASE_SPEED * this.speedSetting;
    let moved = 0;
    if (this.mode === 'dwell') {
      this.dwellLeft -= dt;
      if (this.dwellLeft <= 0) { this.dwellLeft = 0; this.mode = 'run'; }
    } else if (v > 0) {
      const prev = this.s ?? this.start;
      this.s = wrap(prev + v * dt, TRACK_LEN);
      if (this.s < prev) this.laps++;
      moved = v * dt;
      const d = Math.min(wrap(this.s - STATION_STOP_S, TRACK_LEN), wrap(STATION_STOP_S - this.s, TRACK_LEN));
      const sinceLast = this.lastStopS === null ? Infinity
        : wrap(this.s - this.lastStopS + STOP_WINDOW * 3, TRACK_LEN);
      if (d < STOP_WINDOW * 0.5 && sinceLast > TRACK_LEN * 0.5) {
        this.mode = 'dwell';
        this.dwellLeft = DWELL_TIME;
        this.lastStopS = this.s;
      }
    }

    this.spin += moved / 0.135;
    this.place();

    if (moved > 0) {
      const f = trackFrame(this.s);
      this.smoke.emit(f.pos.clone().addScaledVector(f.up, RAIL_TOP + 1.12).addScaledVector(f.tan, 0.62), this.speedSetting, dt);
    }
    this.smoke.update(dt, this.dwelling);
    return this;
  }

  place() {
    if (this.s === undefined) this.s = this.start;
    for (let i = 0; i < this.bodies.length; i++) {
      const b = this.bodies[i];
      const spec = b.spec;
      const s = wrap(this.s - PITCH[i], TRACK_LEN);
      b.s = s;
      const front = trackFrame(wrap(s + spec.wb / 2, TRACK_LEN));
      const rear = trackFrame(wrap(s - spec.wb / 2, TRACK_LEN));
      orient(b.mesh, rear.tan.clone().add(front.tan).normalize(), trackFrame(s).pos, RAIL_TOP);
      for (const w of b.wheels) w.rotation.x = -this.spin * (0.135 / Math.max(0.07, w.userData.r || 0.135));
      for (let k = 0; k < b.bogies.length; k++) {
        const bs = wrap(s + (k === 0 ? -spec.wb / 2 : spec.wb / 2), TRACK_LEN);
        const bf = trackFrame(bs);
        orient(b.bogies[k], bf.tan, bf.pos, RAIL_TOP);
      }
    }
    for (let i = 0; i < this.couplings.length; i++) {
      const A = this.bodies[i], B = this.bodies[i + 1];
      const fa = trackFrame(A.s), fb = trackFrame(B.s);
      const pa = fa.pos.clone().addScaledVector(fa.up, RAIL_TOP + 0.24).addScaledVector(fa.tan, -(A.spec.len / 2 + 0.03));
      const pb = fb.pos.clone().addScaledVector(fb.up, RAIL_TOP + 0.24).addScaledVector(fb.tan, B.spec.len / 2 + 0.03);
      const rod = this.couplings[i];
      rod.position.copy(pa).lerp(pb, 0.5);
      const len = pa.distanceTo(pb);
      rod.scale.z = clamp(len / 0.44, 0.4, 2.4);
      rod.lookAt(pb);
    }
  }
}

/** Put an object on the line: local +z forward along the given tangent, +x to the left. */
function orient(obj, dir, pos, ride) {
  const d = dir.clone().normalize();
  const left = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), d).normalize();
  const up = new THREE.Vector3().crossVectors(d, left).normalize();
  obj.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(left, up, d));
  obj.position.copy(pos).addScaledVector(up, ride);
}

/* ------------------------------------------------------------------ vehicles */

/** A spoked wheel as its own object so it can roll. */
function makeWheel(radius, thickness, spokes, colour = 0x3a3c40) {
  const g = new THREE.Group();
  const tyreMat = mat({ color: 0x26272b, roughness: 0.42, metalness: 0.7 });
  const bossMat = mat({ color: colour, roughness: 0.5, metalness: 0.5 });
  const tyre = new THREE.CylinderGeometry(radius, radius, thickness, 18);
  tyre.rotateZ(Math.PI / 2);
  const rim = new THREE.Mesh(tyre, tyreMat);
  g.add(rim);
  const disc = new THREE.Mesh(cyl(radius * 0.99, radius * 0.99, thickness * 0.34, 18, 0, 0, 0, 0, { rotZ: Math.PI / 2 }), bossMat);
  disc.scale.y = 1;
  g.add(disc);
  const parts = [];
  for (let i = 0; i < spokes; i++) {
    const a = (i / spokes) * Math.PI;
    const bar = box(0.014, radius * 1.86, 0.028, 0, 0, 0);
    bar.rotateX(a);
    parts.push(bar);
  }
  const sp = mergedMesh(parts, mat({ color: 0x6a6d72, roughness: 0.5, metalness: 0.55 }), 'spokes');
  sp.position.x = 0;
  g.add(sp);
  const boss = new THREE.Mesh(cyl(radius * 0.2, radius * 0.2, thickness * 1.5, 10, 0, 0, 0, 0, { rotZ: Math.PI / 2 }), bossMat);
  g.add(boss);
  g.userData.r = radius;
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  void tyreMat;
  return g;
}

function buildLoco(registry) {
  const g = new THREE.Group();
  const livery = mat({ color: 0x1e3d35, roughness: 0.4, metalness: 0.28 });
  const dark = mat({ color: 0x141d1a, roughness: 0.5, metalness: 0.38 });
  const brass = mat({ color: 0xc9a44a, roughness: 0.28, metalness: 0.88 });
  const iron = mat({ color: 0x25262a, roughness: 0.55, metalness: 0.5 });

  const frames = [], body = [], trimM = [], darkM = [];

  frames.push(box(0.9, 0.075, 2.24, 0, 0.235, 0));
  frames.push(box(0.84, 0.1, 2.16, 0, 0.15, 0));
  frames.push(box(0.84, 0.26, 0.07, 0, 0.29, 1.13));         // buffer beam
  for (const s of [-1, 1]) {
    frames.push(cyl(0.05, 0.05, 0.13, 10, s * 0.28, 0.28, 1.22, 0, { rotX: Math.PI / 2 }));
    darkM.push(box(0.07, 0.07, 0.08, s * 0.28, 0.28, 1.29));
  }
  // cylinders and motion
  for (const s of [-1, 1]) {
    body.push(cyl(0.115, 0.115, 0.34, 12, s * 0.285, 0.33, 0.8, 0, { rotX: Math.PI / 2 }));
    darkM.push(cyl(0.028, 0.028, 0.62, 8, s * 0.31, 0.3, 0.5, 0, { rotX: Math.PI / 2 }));
    darkM.push(box(0.03, 0.05, 0.52, s * 0.33, 0.24, 0.35));
  }
  // boiler, smokebox, funnel, dome
  body.push(cyl(0.185, 0.185, 1.3, 18, 0, 0.6, 0.32, 0, { rotX: Math.PI / 2 }));
  body.push(cyl(0.212, 0.212, 0.44, 18, 0, 0.6, 0.97, 0, { rotX: Math.PI / 2 }));
  darkM.push(cyl(0.219, 0.219, 0.05, 18, 0, 0.6, 1.15, 0, { rotX: Math.PI / 2 }));
  body.push(new THREE.SphereGeometry(0.212, 16, 9, 0, Math.PI * 2, 0, Math.PI / 2).rotateX(Math.PI / 2).translate(0, 0.6, 1.19));
  trimM.push(box(0.028, 0.17, 0.02, 0, 0.6, 1.212));
  body.push(cyl(0.085, 0.1, 0.3, 14, 0, 0.9, 0.95));
  darkM.push(cyl(0.122, 0.1, 0.06, 14, 0, 1.06, 0.95));
  body.push(cyl(0.075, 0.095, 0.15, 12, 0, 0.83, 0.16));      // steam dome
  trimM.push(cyl(0.05, 0.05, 0.1, 10, -0.09, 0.82, -0.06));
  // pannier tanks
  for (const s of [-1, 1]) {
    body.push(box(0.13, 0.3, 0.88, s * 0.4, 0.44, 0.12));
    trimM.push(box(0.136, 0.028, 0.88, s * 0.4, 0.585, 0.12));
    trimM.push(box(0.136, 0.02, 0.06, s * 0.4, 0.4, 0.5));
  }
  // cab with windows and a roof
  body.push(box(0.86, 0.52, 0.6, 0, 0.6, -0.63));
  const cabRoof = box(0.96, 0.055, 0.9, 0, 0.885, -0.6);
  body.push(cabRoof);
  for (const s of [-1, 1]) darkM.push(box(0.024, 0.24, 0.32, s * 0.432, 0.7, -0.5));
  darkM.push(box(0.42, 0.24, 0.024, 0, 0.7, -0.94));
  trimM.push(box(0.9, 0.02, 2.2, 0, 0.277, 0));               // running plate line
  trimM.push(cyl(0.02, 0.02, 0.24, 8, -0.1, 0.96, 0.5, 0, { rotX: Math.PI / 2 }));   // horn
  trimM.push(cyl(0.02, 0.02, 0.24, 8, 0.1, 0.96, 0.5, 0, { rotX: Math.PI / 2 }));
  body.push(box(0.15, 0.11, 0.28, 0.36, 0.36, -0.16));        // tool locker
  body.push(box(0.15, 0.11, 0.28, -0.36, 0.36, -0.16));
  for (const s of [-1, 1]) {                                   // handrails
    darkM.push(cyl(0.013, 0.013, 0.92, 6, s * 0.47, 0.56, 0.2, 0, { rotX: Math.PI / 2 }));
    for (const zz of [-0.2, 0.2, 0.6]) darkM.push(cyl(0.011, 0.011, 0.09, 5, s * 0.47, 0.52, zz));
  }

  // lamps
  const headMat = mat({ color: 0xfff2d2, emissive: 0xffd08a, emissiveIntensity: 0, roughness: 0.35 });
  registry.nightGlow.push({ mat: headMat, level: 3.4 });
  g.add(new THREE.Mesh(cyl(0.062, 0.062, 0.05, 14, 0, 0.8, 1.215, 0, { rotX: Math.PI / 2 }), headMat));
  g.add(mergedMesh([cyl(0.078, 0.078, 0.05, 14, 0, 0.8, 1.19, 0, { rotX: Math.PI / 2 })], brass, 'lamp-case'));
  const tailMat = mat({ color: 0xff9070, emissive: 0xff2a12, emissiveIntensity: 0, roughness: 0.4 });
  registry.nightGlow.push({ mat: tailMat, level: 2.4 });
  g.add(new THREE.Mesh(box(0.045, 0.1, 0.03, 0, 0.68, -0.955), tailMat));

  g.add(mergedMesh(frames, iron, 'loco-frames'));
  g.add(mergedMesh(body, livery, 'loco-body'));
  g.add(mergedMesh(darkM, dark, 'loco-dark'));
  g.add(mergedMesh(trimM, brass, 'loco-brass'));

  // six coupled driving wheels plus a leading pair
  const wheels = [];
  for (const zz of [0.74, 0.2, -0.36]) {
    for (const s of [-1, 1]) {
      const w = makeWheel(0.135, 0.055, 5);
      w.position.set(s * 0.425, 0.135, zz);
      g.add(w);
      wheels.push(w);
    }
  }
  for (const zz of [1.04, -0.86]) {
    for (const s of [-1, 1]) {
      const w = makeWheel(0.08, 0.05, 3);
      w.position.set(s * 0.4, 0.08, zz);
      g.add(w);
      wheels.push(w);
    }
  }
  // crank pins between the driving wheels
  const pinMat = mat({ color: 0x8d8f94, roughness: 0.35, metalness: 0.8 });
  g.add(mergedMesh([
    cyl(0.022, 0.022, 0.1, 8, 0.45, 0.2, 0.74, 0, { rotZ: Math.PI / 2 }),
    cyl(0.022, 0.022, 0.1, 8, 0.45, 0.2, 0.2, 0, { rotZ: Math.PI / 2 }),
    cyl(0.022, 0.022, 0.1, 8, 0.45, 0.2, -0.36, 0, { rotZ: Math.PI / 2 }),
  ], pinMat, 'crank-pins'));
  return { mesh: g, wheels, bogies: [] };
}

function buildCoach(spec, registry) {
  const g = new THREE.Group();
  const { map, emissiveMap } = carriageTextures({
    cols: spec.cols, seed: spec.id.length * 31 + 7, litRatio: 0.8, doorAt: spec.doorAt,
  });
  const bodyMat = mat({ map, emissiveMap, emissive: 0xffffff, emissiveIntensity: 0, color: spec.livery, roughness: 0.48, metalness: 0.14 });
  registry.nightGlow.push({ mat: bodyMat, level: 1.0 });
  const roofMat = mat({ color: spec.roof, roughness: 0.7, metalness: 0.16 });
  const bandMat = mat({ color: spec.bands, roughness: 0.42, metalness: 0.45 });
  const iron = mat({ color: 0x26272b, roughness: 0.6, metalness: 0.5 });

  const len = spec.len, w = spec.w;
  const body = [], roofs = [], bands = [], irons = [];

  body.push(box(w, 0.6, len, 0, 0.58, 0));
  const ro = new THREE.CylinderGeometry(0.21, 0.21, w - 0.02, 16, 1, false, -Math.PI / 2, Math.PI);
  ro.rotateZ(Math.PI / 2);
  ro.translate(0, 0.88, 0);
  roofs.push(ro);
  roofs.push(box(0.018, 0.03, len * 0.94, 0, 1.085, 0));
  for (const s of [-1, 1]) {
    body.push(box(w * 0.99, 0.06, 0.05, 0, 0.9, s * (len / 2 - 0.02)));
  }
  bands.push(box(w + 0.015, 0.05, len + 0.015, 0, 0.855, 0));
  bands.push(box(w + 0.02, 0.045, len + 0.02, 0, 0.3, 0));
  irons.push(box(w - 0.08, 0.08, len - 0.1, 0, 0.24, 0));
  for (const s of [-1, 1]) {
    irons.push(box(0.2, 0.03, 0.15, 0, 0.15, s * (len / 2 + 0.09)));
    irons.push(box(0.2, 0.03, 0.15, 0, 0.25, s * (len / 2 + 0.16)));
    irons.push(box(0.16, 0.04, 0.1, 0, 0.94, s * (len / 2 + 0.05)));
    for (const o of [-1, 1]) {
      irons.push(cyl(0.045, 0.045, 0.12, 10, o * 0.27, 0.3, s * (len / 2 + 0.07), 0, { rotX: Math.PI / 2 }));
    }
    const tailMat = mat({ color: 0xff9070, emissive: 0xff3018, emissiveIntensity: 0, roughness: 0.4 });
    registry.nightGlow.push({ mat: tailMat, level: 2.0 });
    g.add(new THREE.Mesh(box(0.05, 0.08, 0.03, 0, 0.8, s * (len / 2 + 0.07)), tailMat));
  }
  if (spec.kind === 'brake') {
    body.push(box(0.44, 0.26, 0.52, 0, 1.1, -0.06));
    roofs.push(box(0.52, 0.045, 0.6, 0, 1.25, -0.06));
    irons.push(box(0.36, 0.02, 0.02, 0, 1.0, len / 2 - 0.01));
  } else {
    // passenger coach: a destination board and roof vents
    bands.push(box(0.5, 0.1, 0.02, 0, 0.76, len / 2 + 0.02));
    for (const zz of [-0.5, 0.5]) roofs.push(box(0.16, 0.05, 0.3, 0, 1.1, zz));
  }

  g.add(mergedMesh(body, bodyMat, 'coach-body'));
  g.add(mergedMesh(roofs, roofMat, 'coach-roof'));
  g.add(mergedMesh(bands, bandMat, 'coach-bands'));
  g.add(mergedMesh(irons, iron, 'coach-iron'));

  const wheels = [];
  const bogies = [];
  for (const dirn of [-1, 1]) {
    const b = new THREE.Group();
    b.add(mergedMesh([
      box(0.74, 0.1, 0.15, 0, 0.2, 0.17),
      box(0.74, 0.1, 0.15, 0, 0.2, -0.17),
      box(0.1, 0.12, 0.4, 0, 0.23, 0),
      box(0.5, 0.06, 0.5, 0, 0.27, 0),
    ], iron, 'bogie-frame'));
    for (const zz of [0.17, -0.17]) {
      for (const s of [-1, 1]) {
        const wv = makeWheel(0.105, 0.05, 3);
        wv.position.set(s * 0.37, 0.105, zz);
        b.add(wv);
        wheels.push(wv);
      }
    }
    b.position.set(0, 0, 0);
    bogies.push(b);
    b.userData.pivotZ = dirn * spec.wb / 2;
  }
  return { mesh: g, wheels, bogies };   // bogies ride the line independently of the body
}

/* ------------------------------------------------------------------ smoke */

function buildSmoke() {
  const COUNT = 24;
  const geo = new THREE.IcosahedronGeometry(0.085, 1);
  const material = mat({ color: 0xc2bbb1, roughness: 1, metalness: 0, transparent: true, opacity: 0.34, depthWrite: false });
  const mesh = new THREE.InstancedMesh(geo, material, COUNT);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  mesh.frustumCulled = false;
  const items = Array.from({ length: COUNT }, () => ({ life: 0, x: 0, y: -99, z: 0, vx: 0, vy: 0, vz: 0, size: 1 }));
  let cursor = 0, acc = 0;
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const p = new THREE.Vector3();
  const s = new THREE.Vector3();
  const hidden = new THREE.Matrix4().makeTranslation(0, -999, 0).scale(new THREE.Vector3(0.0001, 0.0001, 0.0001));

  return {
    mesh,
    reset() {
      for (const it of items) it.life = 0;
      for (let i = 0; i < COUNT; i++) mesh.setMatrixAt(i, hidden);
      mesh.instanceMatrix.needsUpdate = true;
    },
    emit(at, speed, dt) {
      acc += dt * (2.6 + speed * 3.2);
      while (acc >= 1) {
        acc -= 1;
        const it = items[cursor];
        cursor = (cursor + 1) % COUNT;
        it.life = 1;
        it.x = at.x; it.y = at.y; it.z = at.z;
        it.vy = 0.34 + Math.random() * 0.2;
        it.vx = (Math.random() - 0.5) * 0.3;
        it.vz = (Math.random() - 0.5) * 0.3;
        it.size = 0.7 + Math.random() * 0.5;
      }
    },
    update(dt, still) {
      for (let i = 0; i < COUNT; i++) {
        const it = items[i];
        if (it.life <= 0) { mesh.setMatrixAt(i, hidden); continue; }
        it.life -= dt * (still ? 0.5 : 0.4);
        it.x += it.vx * dt;
        it.y += it.vy * dt;
        it.z += it.vz * dt;
        it.vy *= 1 - dt * 0.45;
        const k = clamp(it.life, 0, 1);
        const sc = it.size * lerp(0.35, 1.55, 1 - k);
        m.compose(p.set(it.x, it.y, it.z), q, s.set(sc, sc * 0.86, sc));
        mesh.setMatrixAt(i, m);
      }
      mesh.instanceMatrix.needsUpdate = true;
    },
  };
}

/** Progress readout for the HUD. */
export function trainStatus(train, running = true) {
  const dist = wrap(STATION_STOP_S - (train.s ?? train.start), TRACK_LEN);
  const v = train.speed;
  return {
    running,
    dwelling: train.dwelling,
    dwellLeft: Math.max(0, train.dwellLeft),
    laps: train.laps,
    speed: v,
    toStation: train.dwelling ? 0 : (v > 0.01 ? dist / v : Infinity),
  };
}
