import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const X_AXIS = new THREE.Vector3(1, 0, 0);
const UP = new THREE.Vector3(0, 1, 0);

function shadow(mesh, cast = true, receive = true) {
  mesh.castShadow = cast;
  mesh.receiveShadow = receive;
  return mesh;
}

function roundedBox(width, height, depth, material, radius = 0.05) {
  return shadow(new THREE.Mesh(new RoundedBoxGeometry(width, height, depth, 3, radius), material));
}

function beam(start, end, radius, material) {
  const direction = end.clone().sub(start);
  const mesh = shadow(new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, direction.length(), 8),
    material,
  ));
  mesh.position.copy(start).add(end).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(UP, direction.normalize());
  return mesh;
}

function addWheelSet(group, positions, materials, wheelRegistry) {
  const wheelGeometry = new THREE.CylinderGeometry(0.205, 0.205, 0.11, 16);
  positions.forEach((x) => {
    [-0.42, 0.42].forEach((z) => {
      const wheel = shadow(new THREE.Mesh(wheelGeometry, materials.wheel));
      wheel.rotation.x = Math.PI / 2;
      wheel.position.set(x, 0.19, z);
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.116, 12), materials.brass);
      hub.rotation.x = Math.PI / 2;
      wheel.add(hub);
      group.add(wheel);
      wheelRegistry.push(wheel);
    });
  });
}

function createCoupler(x, materials) {
  const coupler = new THREE.Group();
  const bar = roundedBox(0.28, 0.07, 0.07, materials.iron, 0.015);
  bar.position.x = x;
  const loop = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.022, 6, 14), materials.iron);
  loop.rotation.y = Math.PI / 2;
  loop.position.x = x + Math.sign(x) * 0.18;
  coupler.add(bar, loop);
  return coupler;
}

function createLocomotive(materials, windowMaterial, wheelRegistry) {
  const group = new THREE.Group();
  group.name = 'locomotive';

  const chassis = roundedBox(1.76, 0.18, 0.83, materials.iron, 0.05);
  chassis.position.y = 0.3;
  group.add(chassis);

  const boiler = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.29, 0.29, 0.94, 20), materials.red));
  boiler.rotation.z = Math.PI / 2;
  boiler.position.set(0.25, 0.62, 0);
  group.add(boiler);

  const boilerFront = new THREE.Mesh(new THREE.CylinderGeometry(0.245, 0.245, 0.06, 20), materials.iron);
  boilerFront.rotation.z = Math.PI / 2;
  boilerFront.position.set(0.75, 0.62, 0);
  group.add(boilerFront);

  const cabin = roundedBox(0.66, 0.86, 0.76, materials.red, 0.06);
  cabin.position.set(-0.52, 0.73, 0);
  group.add(cabin);
  const cabinRoof = roundedBox(0.82, 0.12, 0.94, materials.roof, 0.08);
  cabinRoof.position.set(-0.52, 1.18, 0);
  group.add(cabinRoof);

  [-0.391, 0.391].forEach((z) => {
    const window = roundedBox(0.28, 0.3, 0.025, windowMaterial, 0.035);
    window.position.set(-0.51, 0.85, z);
    group.add(window);
  });

  const chimney = new THREE.Group();
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.105, 0.14, 0.44, 12), materials.iron);
  stem.position.y = 0.19;
  const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.1, 0.16, 12), materials.iron);
  rim.position.y = 0.46;
  chimney.add(stem, rim);
  chimney.position.set(0.43, 0.89, 0);
  group.add(chimney);
  group.userData.chimney = chimney;

  const dome = new THREE.Mesh(new THREE.SphereGeometry(0.14, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), materials.brass);
  dome.position.set(0.03, 0.91, 0);
  group.add(dome);

  const cowCatcherBars = [];
  [-0.34, -0.17, 0, 0.17, 0.34].forEach((z) => {
    cowCatcherBars.push(beam(new THREE.Vector3(0.78, 0.31, z * 0.55), new THREE.Vector3(1.03, 0.08, z), 0.024, materials.brass));
  });
  cowCatcherBars.forEach((part) => group.add(part));

  const lampHousing = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 0.18, 10), materials.iron);
  lampHousing.rotation.z = Math.PI / 2;
  lampHousing.position.set(0.84, 0.78, 0);
  const lampLens = new THREE.Mesh(new THREE.CircleGeometry(0.09, 16), materials.headlight);
  lampLens.rotation.y = Math.PI / 2;
  lampLens.position.set(0.935, 0.78, 0);
  const headLight = new THREE.PointLight(0xffd28c, 0.18, 4.3, 2.2);
  headLight.position.set(1.0, 0.8, 0);
  group.add(lampHousing, lampLens, headLight);
  group.userData.headLight = headLight;

  addWheelSet(group, [-0.49, 0.03, 0.52], materials, wheelRegistry);
  group.add(createCoupler(-0.94, materials));

  const sideRodMaterial = materials.brass;
  [-0.455, 0.455].forEach((z) => {
    const rod = roundedBox(1.08, 0.045, 0.035, sideRodMaterial, 0.01);
    rod.position.set(0.02, 0.19, z);
    group.add(rod);
  });

  group.traverse((child) => child.isMesh && shadow(child));
  return group;
}

function createCarriage(index, materials, windowMaterial, wheelRegistry) {
  const group = new THREE.Group();
  group.name = `carriage-${index + 1}`;
  const bodyColor = index === 0 ? materials.carriageGreen : materials.carriageCream;
  const trimColor = index === 0 ? materials.cream : materials.red;

  const chassis = roundedBox(1.82, 0.16, 0.82, materials.iron, 0.05);
  chassis.position.y = 0.31;
  const body = roundedBox(1.68, 0.72, 0.76, bodyColor, 0.08);
  body.position.y = 0.72;
  const lowerStripe = roundedBox(1.7, 0.08, 0.78, trimColor, 0.02);
  lowerStripe.position.y = 0.43;
  const roof = roundedBox(1.88, 0.16, 0.94, materials.roof, 0.11);
  roof.position.y = 1.13;
  group.add(chassis, body, lowerStripe, roof);

  [-0.391, 0.391].forEach((z) => {
    [-0.52, 0, 0.52].forEach((x) => {
      const window = roundedBox(0.34, 0.31, 0.025, windowMaterial, 0.035);
      window.position.set(x, 0.78, z);
      group.add(window);
    });
  });

  [-0.76, 0.76].forEach((x) => {
    const endDoor = roundedBox(0.025, 0.52, 0.42, trimColor, 0.025);
    endDoor.position.set(x, 0.68, 0);
    group.add(endDoor);
  });

  addWheelSet(group, [-0.52, 0.52], materials, wheelRegistry);
  group.add(createCoupler(-0.98, materials), createCoupler(0.98, materials));

  group.traverse((child) => child.isMesh && shadow(child));
  return group;
}

function closestDistanceOnCurve(curve, target, length) {
  let closestT = 0;
  let closestDistance = Infinity;
  for (let i = 0; i <= 1000; i += 1) {
    const t = i / 1000;
    const point = curve.getPointAt(t);
    const distance = point.distanceToSquared(target);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestT = t;
    }
  }
  return closestT * length;
}

export class TrainController {
  constructor(scene, curve, stationTarget) {
    this.scene = scene;
    this.curve = curve;
    this.trackLength = curve.getLength();
    this.stationDistance = closestDistanceOnCurve(curve, stationTarget, this.trackLength);
    this.initialDistance = this.stationDistance - 11.5;
    this.distance = this.initialDistance;
    this.nextStopDistance = this.stationDistance;
    this.speedMultiplier = 1;
    this.baseSpeed = 2.65;
    this.running = true;
    this.dwellRemaining = 0;
    this.wheelRotation = 0;
    this.smokeAccumulator = 0;
    this.wheels = [];
    this.smoke = [];
    this.isNight = false;

    this.windowMaterial = new THREE.MeshStandardMaterial({
      color: 0x7d9ba0,
      emissive: 0xffbb62,
      emissiveIntensity: 0.08,
      roughness: 0.22,
    });
    this.materials = {
      red: new THREE.MeshStandardMaterial({ color: 0x9f382f, roughness: 0.58, metalness: 0.12 }),
      carriageGreen: new THREE.MeshStandardMaterial({ color: 0x315c52, roughness: 0.62, metalness: 0.08 }),
      carriageCream: new THREE.MeshStandardMaterial({ color: 0xc89d68, roughness: 0.65, metalness: 0.06 }),
      cream: new THREE.MeshStandardMaterial({ color: 0xe7d5ae, roughness: 0.68 }),
      roof: new THREE.MeshStandardMaterial({ color: 0x202b2a, roughness: 0.56, metalness: 0.34 }),
      iron: new THREE.MeshStandardMaterial({ color: 0x202423, roughness: 0.42, metalness: 0.7 }),
      wheel: new THREE.MeshStandardMaterial({ color: 0x242625, roughness: 0.48, metalness: 0.58 }),
      brass: new THREE.MeshStandardMaterial({ color: 0xb98a43, roughness: 0.32, metalness: 0.72 }),
      headlight: new THREE.MeshStandardMaterial({ color: 0xffdc9b, emissive: 0xffc66e, emissiveIntensity: 2.2, roughness: 0.18 }),
    };

    this.vehicles = [
      createLocomotive(this.materials, this.windowMaterial, this.wheels),
      createCarriage(0, this.materials, this.windowMaterial, this.wheels),
      createCarriage(1, this.materials, this.windowMaterial, this.wheels),
    ];
    this.offsets = [0, 2.15, 4.22];
    this.vehicles.forEach((vehicle) => scene.add(vehicle));
    this.positionVehicles();
  }

  setSpeed(value) {
    this.speedMultiplier = THREE.MathUtils.clamp(value, 0.5, 1.8);
  }

  setRunning(value) {
    this.running = value;
  }

  toggleRunning() {
    this.running = !this.running;
    return this.running;
  }

  setNight(value) {
    this.isNight = value;
    this.windowMaterial.emissiveIntensity = value ? 2.6 : 0.08;
    this.materials.headlight.emissiveIntensity = value ? 4.2 : 2.2;
    const locomotive = this.vehicles[0];
    if (locomotive.userData.headLight) locomotive.userData.headLight.intensity = value ? 1.1 : 0.18;
  }

  reset() {
    this.distance = this.initialDistance;
    this.nextStopDistance = this.stationDistance;
    this.speedMultiplier = 1;
    this.running = true;
    this.dwellRemaining = 0;
    this.wheelRotation = 0;
    this.smoke.forEach((particle) => this.scene.remove(particle));
    this.smoke.length = 0;
    this.positionVehicles();
  }

  positionVehicles() {
    this.vehicles.forEach((vehicle, index) => {
      const vehicleDistance = this.distance - this.offsets[index];
      const t = THREE.MathUtils.euclideanModulo(vehicleDistance / this.trackLength, 1);
      const point = this.curve.getPointAt(t);
      const tangent = this.curve.getTangentAt(t).normalize();
      vehicle.position.set(point.x, 0.71, point.z);
      vehicle.quaternion.setFromUnitVectors(X_AXIS, tangent);
    });
  }

  emitSmoke() {
    const locomotive = this.vehicles[0];
    const localPosition = new THREE.Vector3(0.43, 1.42, 0);
    locomotive.localToWorld(localPosition);
    const material = new THREE.MeshStandardMaterial({
      color: 0xb8b9ad,
      transparent: true,
      opacity: 0.34,
      roughness: 1,
      depthWrite: false,
    });
    const particle = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), material);
    particle.position.copy(localPosition);
    particle.scale.setScalar(0.85 + Math.random() * 0.35);
    particle.userData.life = 0;
    particle.userData.drift = new THREE.Vector3((Math.random() - 0.5) * 0.08, 0.34 + Math.random() * 0.1, (Math.random() - 0.5) * 0.08);
    this.scene.add(particle);
    this.smoke.push(particle);
  }

  updateSmoke(delta) {
    for (let i = this.smoke.length - 1; i >= 0; i -= 1) {
      const particle = this.smoke[i];
      particle.userData.life += delta;
      particle.position.addScaledVector(particle.userData.drift, delta);
      const scale = 1 + particle.userData.life * 0.85;
      particle.scale.setScalar(scale);
      particle.material.opacity = Math.max(0, 0.34 * (1 - particle.userData.life / 2.2));
      if (particle.userData.life >= 2.2) {
        this.scene.remove(particle);
        particle.geometry.dispose();
        particle.material.dispose();
        this.smoke.splice(i, 1);
      }
    }
  }

  update(delta) {
    if (this.running) {
      if (this.dwellRemaining > 0) {
        this.dwellRemaining = Math.max(0, this.dwellRemaining - delta);
        if (this.dwellRemaining === 0) this.nextStopDistance += this.trackLength;
      } else {
        const movement = this.baseSpeed * this.speedMultiplier * delta;
        if (this.distance + movement >= this.nextStopDistance) {
          this.distance = this.nextStopDistance;
          this.dwellRemaining = 2;
        } else {
          this.distance += movement;
          this.wheelRotation -= movement / 0.205;
          this.wheels.forEach((wheel) => { wheel.rotation.y = this.wheelRotation; });
          this.smokeAccumulator += delta;
          if (this.smokeAccumulator > 0.24 / Math.max(this.speedMultiplier, 0.7)) {
            this.smokeAccumulator = 0;
            this.emitSmoke();
          }
        }
      }
      this.updateSmoke(delta);
      this.positionVehicles();
    }
  }

  get state() {
    if (!this.running) return 'paused';
    if (this.dwellRemaining > 0) return 'stopped';
    return 'moving';
  }

  get distanceToStation() {
    if (this.dwellRemaining > 0) return 0;
    return Math.max(0, this.nextStopDistance - this.distance);
  }
}
