import * as THREE from 'three';

// ---------------------------------------------------------------------------
// Locomotive: boiler + cab + chimney + headlamp.
// Returns a THREE.Group oriented so its local +X is forward.
// ---------------------------------------------------------------------------
function buildLocomotive() {
  const g = new THREE.Group();
  g.name = 'locomotive';

  const bodyMat = new THREE.MeshStandardMaterial({
    color: 0x2f5a3a, // dark green
    roughness: 0.55,
    metalness: 0.25,
  });
  const cabMat = new THREE.MeshStandardMaterial({
    color: 0x6e3326,
    roughness: 0.7,
  });
  const trimMat = new THREE.MeshStandardMaterial({
    color: 0xf2c14e,
    roughness: 0.4,
    metalness: 0.4,
  });
  const wheelMat = new THREE.MeshStandardMaterial({
    color: 0x2a1a10,
    roughness: 0.7,
    metalness: 0.4,
  });
  const rodMat = new THREE.MeshStandardMaterial({
    color: 0xbfbfbf,
    roughness: 0.4,
    metalness: 0.8,
  });

  // Boiler (front cylindrical section)
  const boiler = new THREE.Mesh(
    new THREE.CylinderGeometry(0.32, 0.32, 1.4, 16),
    bodyMat
  );
  boiler.rotation.z = Math.PI / 2;
  boiler.position.set(0.4, 0.5, 0);
  boiler.castShadow = true;
  boiler.receiveShadow = true;
  g.add(boiler);

  // Boiler front (round disc)
  const front = new THREE.Mesh(
    new THREE.CylinderGeometry(0.34, 0.34, 0.05, 16),
    bodyMat
  );
  front.rotation.z = Math.PI / 2;
  front.position.set(1.1, 0.5, 0);
  g.add(front);

  // Headlamp (emissive)
  const headlampMat = new THREE.MeshStandardMaterial({
    color: 0xffe4a8,
    emissive: 0x000000,
    roughness: 0.4,
  });
  headlampMat.userData.baseEmissive = 0xffd28a;
  headlampMat.userData.isNightLit = true;
  g.userData.emissiveMaterials = [headlampMat];
  const headlamp = new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 12, 8),
    headlampMat
  );
  headlamp.position.set(1.18, 0.55, 0);
  g.add(headlamp);

  // Smokestack (chimney)
  const stack = new THREE.Mesh(
    new THREE.CylinderGeometry(0.1, 0.13, 0.4, 10),
    trimMat
  );
  stack.position.set(0.5, 1.0, 0);
  stack.castShadow = true;
  g.add(stack);
  const stackCap = new THREE.Mesh(
    new THREE.CylinderGeometry(0.13, 0.13, 0.06, 10),
    trimMat
  );
  stackCap.position.set(0.5, 1.22, 0);
  g.add(stackCap);

  // Steam dome
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(0.14, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2),
    trimMat
  );
  dome.position.set(0.2, 0.82, 0);
  g.add(dome);

  // Cab (back rectangular section)
  const cab = new THREE.Mesh(
    new THREE.BoxGeometry(0.7, 0.7, 0.7),
    cabMat
  );
  cab.position.set(-0.6, 0.45, 0);
  cab.castShadow = true;
  cab.receiveShadow = true;
  g.add(cab);

  // Cab roof
  const cabRoof = new THREE.Mesh(
    new THREE.BoxGeometry(0.78, 0.08, 0.78),
    trimMat
  );
  cabRoof.position.set(-0.6, 0.83, 0);
  cabRoof.castShadow = true;
  g.add(cabRoof);

  // Cab window (dark glass)
  const cabWinMat = new THREE.MeshStandardMaterial({
    color: 0x1a2a3a,
    emissive: 0x000000,
    roughness: 0.3,
  });
  cabWinMat.userData.baseEmissive = 0x2a3a4a;
  cabWinMat.userData.isNightLit = true;
  g.userData.emissiveMaterials.push(cabWinMat);
  for (const sz of [-0.28, 0.28]) {
    const w = new THREE.Mesh(
      new THREE.PlaneGeometry(0.18, 0.22),
      cabWinMat
    );
    w.position.set(-0.95, 0.6, sz);
    w.rotation.y = Math.PI / 2;
    g.add(w);
  }

  // Buffer beam at the front
  const buffer = new THREE.Mesh(
    new THREE.BoxGeometry(0.12, 0.16, 0.7),
    trimMat
  );
  buffer.position.set(1.18, 0.18, 0);
  buffer.castShadow = true;
  g.add(buffer);

  // Wheels (3 axles: front, mid, back)
  for (const wx of [0.6, 0.0, -0.6]) {
    for (const wz of [-0.32, 0.32]) {
      const wheel = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.18, 0.08, 12),
        wheelMat
      );
      wheel.rotation.x = Math.PI / 2;
      wheel.position.set(wx, 0.18, wz);
      wheel.castShadow = true;
      g.add(wheel);
      // Hub
      const hub = new THREE.Mesh(
        new THREE.CylinderGeometry(0.07, 0.07, 0.09, 8),
        trimMat
      );
      hub.rotation.x = Math.PI / 2;
      hub.position.set(wx, 0.18, wz + (wz > 0 ? 0.005 : -0.005));
      g.add(hub);
    }
  }
  // Connecting rod
  const rod = new THREE.Mesh(
    new THREE.BoxGeometry(0.9, 0.04, 0.04),
    rodMat
  );
  rod.position.set(0.3, 0.18, 0.32);
  g.add(rod);
  const rod2 = rod.clone();
  rod2.position.z = -0.32;
  g.add(rod2);

  // Overall body length is ~2.2 from front (-1.0) to back of cab (~-1.0)
  return g;
}

// ---------------------------------------------------------------------------
// Passenger carriage
// ---------------------------------------------------------------------------
function buildCarriage({ bodyColor = 0x6e3326, roofColor = 0x3d2618 } = {}) {
  const g = new THREE.Group();
  g.name = 'carriage';

  const bodyMat = new THREE.MeshStandardMaterial({
    color: bodyColor,
    roughness: 0.65,
  });
  const roofMat = new THREE.MeshStandardMaterial({
    color: roofColor,
    roughness: 0.6,
  });
  const trimMat = new THREE.MeshStandardMaterial({
    color: 0xf2c14e,
    roughness: 0.4,
    metalness: 0.4,
  });
  const wheelMat = new THREE.MeshStandardMaterial({
    color: 0x2a1a10,
    roughness: 0.7,
  });

  // Body
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(1.9, 0.7, 0.7),
    bodyMat
  );
  body.position.y = 0.55;
  body.castShadow = true;
  body.receiveShadow = true;
  g.add(body);

  // Roof (slightly larger)
  const roof = new THREE.Mesh(
    new THREE.BoxGeometry(2.0, 0.08, 0.78),
    roofMat
  );
  roof.position.y = 0.94;
  roof.castShadow = true;
  g.add(roof);

  // Trim along the bottom
  const trim = new THREE.Mesh(
    new THREE.BoxGeometry(1.95, 0.06, 0.74),
    trimMat
  );
  trim.position.y = 0.22;
  g.add(trim);

  // Windows (4 along each side, emissive at night)
  const windowMat = new THREE.MeshStandardMaterial({
    color: 0xe8d49a,
    roughness: 0.3,
    emissive: 0x000000,
  });
  windowMat.userData.baseEmissive = 0xffd28a;
  windowMat.userData.isNightLit = true;
  g.userData.emissiveMaterials = [windowMat];

  for (let i = 0; i < 4; i++) {
    const u = (i - 1.5) * 0.4;
    for (const sz of [-0.36, 0.36]) {
      const win = new THREE.Mesh(
        new THREE.PlaneGeometry(0.28, 0.32),
        windowMat
      );
      win.position.set(u, 0.6, sz);
      if (sz > 0) win.rotation.y = 0;
      else win.rotation.y = Math.PI;
      g.add(win);
      // Frame
      const frame = new THREE.Mesh(
        new THREE.BoxGeometry(0.32, 0.36, 0.04),
        trimMat
      );
      frame.position.set(u, 0.6, sz + (sz > 0 ? 0.01 : -0.01));
      g.add(frame);
    }
  }

  // End railings (couplings)
  for (const ex of [-1.0, 1.0]) {
    const coupling = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.18, 6),
      trimMat
    );
    coupling.rotation.z = Math.PI / 2;
    coupling.position.set(ex * 1.0, 0.4, 0);
    g.add(coupling);
  }

  // Wheels
  for (const wx of [-0.6, 0.6]) {
    for (const wz of [-0.32, 0.32]) {
      const wheel = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.18, 0.08, 12),
        wheelMat
      );
      wheel.rotation.x = Math.PI / 2;
      wheel.position.set(wx, 0.18, wz);
      wheel.castShadow = true;
      g.add(wheel);
      const hub = new THREE.Mesh(
        new THREE.CylinderGeometry(0.07, 0.07, 0.09, 8),
        trimMat
      );
      hub.rotation.x = Math.PI / 2;
      hub.position.set(wx, 0.18, wz + (wz > 0 ? 0.005 : -0.005));
      g.add(hub);
    }
  }

  return g;
}

// ---------------------------------------------------------------------------
// Train assembly: locomotive + 2 carriages
// ---------------------------------------------------------------------------
export function buildTrain() {
  const group = new THREE.Group();
  group.name = 'train';

  const loco = buildLocomotive();
  // Loco front (its local +X = nose) needs to face the direction of motion.
  // We orient each car so +X is forward.
  const carriage1 = buildCarriage({ bodyColor: 0x6e3326, roofColor: 0x3d2618 });
  const carriage2 = buildCarriage({ bodyColor: 0x385e7e, roofColor: 0x1a2a3a });

  group.add(loco);
  group.add(carriage1);
  group.add(carriage2);

  // Collect emissive materials for day/night toggle
  const emissiveMaterials = [
    ...loco.userData.emissiveMaterials,
    ...carriage1.userData.emissiveMaterials,
    ...carriage2.userData.emissiveMaterials,
  ];

  return { group, cars: [loco, carriage1, carriage2], emissiveMaterials };
}

// ---------------------------------------------------------------------------
// Train motion controller.
// Handles curve following, station dwell, and rotation of each car.
//
// `spacing` is the t-distance (curve parameter) between consecutive car fronts.
// `curveLength` is the total arc length of the curve.
// ---------------------------------------------------------------------------
export class TrainMotion {
  constructor({ curve, cars, options = {} }) {
    this.curve = curve;
    this.cars = cars; // each car has +X forward
    this.trainT = options.startT ?? 0.1;
    this.stationT = options.stationT ?? 0.0;
    this.speed = options.speed ?? 1.0; // base speed: full loop in ~30s at speed=1
    this.baseLinearSpeed = (curve.getLength() ?? 60) / 30; // units per second at speed=1
    this.dwell = options.dwellSeconds ?? 2.0;
    this.elapsedAtStation = -1;
    this.spacing = options.spacing ?? 0.06; // t-distance between car fronts
    this.lastTrainT = this.trainT;
    this.isPlaying = true;
    this.onDwellStart = options.onDwellStart ?? (() => {});
    this.onDwellEnd = options.onDwellEnd ?? (() => {});

    // Pre-compute the t value for each car.
    // car 0 (loco) leads; car 1 is `spacing` behind; car 2 is `2*spacing` behind.
    // We store the parameter offsets per car so we can compute the orientation
    // and position. Note: catmull-rom `getPointAt(t)` and `getTangentAt(t)`
    // are arc-length parameterized at the curve level.
    this.offsets = cars.map((_, i) => i * this.spacing);

    this.placeCars();
  }

  setSpeed(speed) {
    this.speed = Math.max(0, speed);
  }

  setPlaying(playing) {
    this.isPlaying = playing;
  }

  reset({ startT = this.stationT + 0.05 } = {}) {
    this.trainT = ((startT % 1) + 1) % 1;
    this.lastTrainT = this.trainT;
    this.elapsedAtStation = -1;
    this.placeCars();
  }

  getDwellRemaining() {
    return this.elapsedAtStation > 0 ? this.dwell - this.elapsedAtStation : 0;
  }

  isAtStation() {
    return this.elapsedAtStation >= 0;
  }

  update(dt) {
    if (!this.isPlaying) {
      // Frozen, just keep cars in place
      return;
    }

    if (this.elapsedAtStation >= 0) {
      this.elapsedAtStation += dt;
      if (this.elapsedAtStation >= this.dwell) {
        this.elapsedAtStation = -1;
        if (this.onDwellEnd) this.onDwellEnd();
      }
      return;
    }

    const advanceT = (this.speed * this.baseLinearSpeed * dt) / this.curve.getLength();
    const lastT = this.trainT;
    let nextT = lastT + advanceT;
    while (nextT >= 1) nextT -= 1;
    while (nextT < 0) nextT += 1;

    // Station arrival: detect forward crossing of stationT.
    // The train is at parameter `lastT`; it advances by `advanceT`. Did the
    // forward segment cross `stationT`?
    const crossed = this._crossedForward(lastT, nextT, this.stationT, advanceT);
    if (crossed) {
      this.trainT = this.stationT;
      this.elapsedAtStation = 0;
      if (this.onDwellStart) this.onDwellStart();
    } else {
      this.trainT = nextT;
    }
    this.lastTrainT = this.trainT;

    this.placeCars();
  }

  // Returns true if the segment from lastT → nextT (forward, wrapped if needed)
  // crosses stationT. Ignores cases where the advanceT is huge (>= 0.5), which
  // would indicate a degenerate frame.
  _crossedForward(lastT, nextT, stationT, advanceT) {
    if (advanceT >= 0.5) return false;
    if (lastT === nextT) return false;
    // If we wrapped (nextT < lastT), then the forward segment includes
    // the parameter 1 → 0 region. If stationT is in [lastT, 1) or [0, nextT),
    // we crossed it.
    if (lastT < nextT) {
      return lastT < stationT && nextT >= stationT;
    } else {
      // Wrapped around: did we pass through 1 (==0)?
      return stationT >= lastT || stationT < nextT;
    }
  }

  placeCars() {
    for (let i = 0; i < this.cars.length; i++) {
      const car = this.cars[i];
      // Compute car's t along the curve (behind the locomotive)
      let t = (this.trainT - this.offsets[i]);
      while (t < 0) t += 1;
      while (t >= 1) t -= 1;

      const p = this.curve.getPointAt(t);
      const tan = this.curve.getTangentAt(t).setY(0).normalize();
      // The car is positioned with its center at the curve point.
      // We then offset back along the tangent by half the car length so the
      // nose/front sits on the curve.
      const halfLen = i === 0 ? 1.0 : 0.95; // loco nose is at +1.0, carriages' front at +0.95
      car.position.set(
        p.x - tan.x * halfLen,
        0.6, // sits on top of the rails
        p.z - tan.z * halfLen
      );

      // Orientation: look forward along the tangent.
      const angle = Math.atan2(tan.x, tan.z);
      car.rotation.y = angle;
    }
  }
}