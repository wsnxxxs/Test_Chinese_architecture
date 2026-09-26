import * as THREE from 'three';

const R = 3.2;
const SOUTH = 19.8;
const SIDE = 9.8;
const ARC = Math.PI * R / 2;
export const TRACK_LENGTH = 2 * SOUTH + 2 * SIDE + 4 * ARC;
export const STATION_DISTANCE = 6.45;

// A rounded rectangular route with exact straights and circular corners.
// Distances are measured along the rails, so cars can follow it independently.
export function trackAt(distance) {
  let s = ((distance % TRACK_LENGTH) + TRACK_LENGTH) % TRACK_LENGTH;
  if (s < SOUTH) return { x: -9.9 + s, z: 8.1, dx: 1, dz: 0 };
  s -= SOUTH;
  if (s < ARC) {
    const a = Math.PI / 2 - s / R;
    return { x: 9.9 + R * Math.cos(a), z: 4.9 + R * Math.sin(a), dx: Math.sin(a), dz: -Math.cos(a) };
  }
  s -= ARC;
  if (s < SIDE) return { x: 13.1, z: 4.9 - s, dx: 0, dz: -1 };
  s -= SIDE;
  if (s < ARC) {
    const a = -s / R;
    return { x: 9.9 + R * Math.cos(a), z: -4.9 + R * Math.sin(a), dx: Math.sin(a), dz: -Math.cos(a) };
  }
  s -= ARC;
  if (s < SOUTH) return { x: 9.9 - s, z: -8.1, dx: -1, dz: 0 };
  s -= SOUTH;
  if (s < ARC) {
    const a = -Math.PI / 2 - s / R;
    return { x: -9.9 + R * Math.cos(a), z: -4.9 + R * Math.sin(a), dx: Math.sin(a), dz: -Math.cos(a) };
  }
  s -= ARC;
  if (s < SIDE) return { x: -13.1, z: -4.9 + s, dx: 0, dz: 1 };
  s -= SIDE;
  const a = Math.PI - s / R;
  return { x: -9.9 + R * Math.cos(a), z: 4.9 + R * Math.sin(a), dx: Math.sin(a), dz: -Math.cos(a) };
}

export function riverX(z) {
  return 5.25 + 0.76 * Math.sin((z + 2) * 0.44) + 0.24 * Math.sin(z * 1.04);
}

function makeStrip(points, halfWidth, material) {
  const vertices = [];
  const indices = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    const q = points[(i + 1) % points.length];
    const normalX = -p.dz;
    const normalZ = p.dx;
    vertices.push(p.x + normalX * halfWidth, p.y, p.z + normalZ * halfWidth);
    vertices.push(p.x - normalX * halfWidth, p.y, p.z - normalZ * halfWidth);
    const k = 2 * i;
    const next = 2 * ((i + 1) % points.length);
    if (!p.bridge && !q.bridge) indices.push(k, k + 1, next, k + 1, next + 1, next);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const mesh = new THREE.Mesh(geometry, material);
  mesh.receiveShadow = true;
  return mesh;
}

function addRail(scene, side, material) {
  const samples = [];
  const count = 420;
  for (let i = 0; i < count; i++) {
    const p = trackAt(i * TRACK_LENGTH / count);
    samples.push(new THREE.Vector3(p.x - p.dz * side, 0.395, p.z + p.dx * side));
  }
  const curve = new THREE.CatmullRomCurve3(samples, true, 'catmullrom', 0.08);
  const rail = new THREE.Mesh(new THREE.TubeGeometry(curve, 680, 0.036, 6, true), material);
  rail.castShadow = true;
  scene.add(rail);
}

function addBridge(scene, z, wood, stone, steel) {
  const x = riverX(z);
  const deck = new THREE.Mesh(new THREE.BoxGeometry(4.25, 0.2, 1.52), wood);
  deck.position.set(x, 0.16, z);
  deck.castShadow = deck.receiveShadow = true;
  scene.add(deck);

  for (const side of [-1, 1]) {
    const abutment = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.48, 1.9), stone);
    abutment.position.set(x + side * 2.13, 0.045, z);
    abutment.castShadow = abutment.receiveShadow = true;
    scene.add(abutment);

    const girder = new THREE.Mesh(new THREE.BoxGeometry(4.12, 0.36, 0.1), steel);
    girder.position.set(x, 0.48, z + side * 0.7);
    girder.castShadow = true;
    scene.add(girder);
    for (let i = -2; i <= 2; i++) {
      const upright = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.55, 0.12), steel);
      upright.position.set(x + i * 0.95, 0.53, z + side * 0.7);
      upright.castShadow = true;
      scene.add(upright);
    }
    const top = new THREE.Mesh(new THREE.BoxGeometry(4.18, 0.075, 0.13), steel);
    top.position.set(x, 0.77, z + side * 0.7);
    top.castShadow = true;
    scene.add(top);
  }
}

export function createRailway(scene) {
  const ballast = new THREE.MeshStandardMaterial({ color: 0x746d61, roughness: 1, side: THREE.DoubleSide });
  const sleeperMaterial = new THREE.MeshStandardMaterial({ color: 0x513d32, roughness: 0.95 });
  const steel = new THREE.MeshStandardMaterial({ color: 0x696d69, metalness: 0.5, roughness: 0.42 });
  const bridgeSteel = new THREE.MeshStandardMaterial({ color: 0x556565, metalness: 0.34, roughness: 0.7 });
  const stone = new THREE.MeshStandardMaterial({ color: 0x9c9984, roughness: 1 });
  const wood = new THREE.MeshStandardMaterial({ color: 0x554d43, roughness: 0.92 });

  const points = [];
  const count = 440;
  for (let i = 0; i < count; i++) {
    const p = trackAt(i * TRACK_LENGTH / count);
    points.push({ ...p, y: 0.225, bridge: Math.abs(p.z) > 7.5 && Math.abs(p.x - riverX(p.z)) < 2.22 });
  }
  scene.add(makeStrip(points, 0.72, ballast));

  addBridge(scene, -8.1, wood, stone, bridgeSteel);
  addBridge(scene, 8.1, wood, stone, bridgeSteel);

  const tieCount = Math.floor(TRACK_LENGTH / 0.43);
  const sleepers = new THREE.InstancedMesh(new THREE.BoxGeometry(1.24, 0.1, 0.16), sleeperMaterial, tieCount);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < tieCount; i++) {
    const p = trackAt(i * TRACK_LENGTH / tieCount);
    dummy.position.set(p.x, 0.294, p.z);
    dummy.rotation.set(0, Math.atan2(p.dx, p.dz), 0);
    dummy.updateMatrix();
    sleepers.setMatrixAt(i, dummy.matrix);
  }
  sleepers.instanceMatrix.needsUpdate = true;
  sleepers.castShadow = sleepers.receiveShadow = true;
  scene.add(sleepers);

  addRail(scene, -0.32, steel);
  addRail(scene, 0.32, steel);
}
