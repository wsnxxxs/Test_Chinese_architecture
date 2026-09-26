import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const GROUND_Y = 0.44;
const UP = new THREE.Vector3(0, 1, 0);
const X_AXIS = new THREE.Vector3(1, 0, 0);

let seed = 41387;
const random = () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};

const color = (value) => new THREE.Color(value);

function shadow(mesh, cast = true, receive = true) {
  mesh.castShadow = cast;
  mesh.receiveShadow = receive;
  return mesh;
}

function makeBox(width, height, depth, material, radius = 0) {
  const geometry = radius > 0
    ? new RoundedBoxGeometry(width, height, depth, 3, radius)
    : new THREE.BoxGeometry(width, height, depth);
  return shadow(new THREE.Mesh(geometry, material));
}

function makeCanvasTexture(draw, size = 256) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext('2d');
  draw(context, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = 8;
  return texture;
}

function makeGrassTexture() {
  return makeCanvasTexture((context, size) => {
    context.fillStyle = '#778b55';
    context.fillRect(0, 0, size, size);
    for (let i = 0; i < 4200; i += 1) {
      const light = random() > 0.5;
      const alpha = 0.05 + random() * 0.13;
      context.fillStyle = light ? `rgba(210,224,157,${alpha})` : `rgba(42,72,35,${alpha})`;
      const x = random() * size;
      const y = random() * size;
      context.fillRect(x, y, 1 + random() * 1.5, 1 + random() * 2.5);
    }
  });
}

function makeWoodTexture() {
  return makeCanvasTexture((context, size) => {
    const gradient = context.createLinearGradient(0, 0, size, 0);
    gradient.addColorStop(0, '#6a3e25');
    gradient.addColorStop(0.45, '#9b6240');
    gradient.addColorStop(1, '#5f351f');
    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);
    context.lineCap = 'round';
    for (let i = 0; i < 38; i += 1) {
      const y = random() * size;
      context.beginPath();
      context.moveTo(-20, y);
      for (let x = 0; x <= size + 20; x += 18) {
        context.lineTo(x, y + Math.sin(x * 0.045 + i) * (1.5 + random() * 2.5));
      }
      context.strokeStyle = `rgba(52, 24, 12, ${0.09 + random() * 0.15})`;
      context.lineWidth = 0.6 + random() * 1.6;
      context.stroke();
    }
  });
}

function createTextTexture(text, options = {}) {
  const width = options.width ?? 512;
  const height = options.height ?? 128;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  context.fillStyle = options.background ?? '#17352d';
  context.fillRect(0, 0, width, height);
  context.strokeStyle = options.border ?? '#e4c483';
  context.lineWidth = 10;
  context.strokeRect(7, 7, width - 14, height - 14);
  context.fillStyle = options.foreground ?? '#f4e7c8';
  context.font = `700 ${options.fontSize ?? 52}px Georgia, serif`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, width / 2, height / 2 + 2);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function createRibbon(curve, width, y, material, segments = 100, closed = false) {
  const positions = [];
  const uvs = [];
  const indices = [];
  const end = closed ? segments : segments + 1;

  for (let i = 0; i < end; i += 1) {
    const t = i / segments;
    const point = curve.getPointAt(t);
    const tangent = curve.getTangentAt(t).normalize();
    const normal = new THREE.Vector3(-tangent.z, 0, tangent.x).normalize();
    const left = point.clone().addScaledVector(normal, width / 2);
    const right = point.clone().addScaledVector(normal, -width / 2);
    positions.push(left.x, y, left.z, right.x, y, right.z);
    uvs.push(0, t * 8, 1, t * 8);
  }

  const rows = closed ? segments : segments;
  for (let i = 0; i < rows; i += 1) {
    const next = closed ? (i + 1) % segments : i + 1;
    const a = i * 2;
    const b = a + 1;
    const c = next * 2;
    const d = c + 1;
    indices.push(a, b, c, b, d, c);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return shadow(new THREE.Mesh(geometry, material), false, true);
}

function curveFrom(points, closed = false) {
  return new THREE.CatmullRomCurve3(
    points.map(([x, z]) => new THREE.Vector3(x, 0, z)),
    closed,
    'centripetal',
    0.45,
  );
}

function offsetCurve(source, offset, samples = 240) {
  const points = [];
  for (let i = 0; i < samples; i += 1) {
    const t = i / samples;
    const point = source.getPointAt(t);
    const tangent = source.getTangentAt(t).normalize();
    points.push(point.add(new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(offset)));
  }
  return new THREE.CatmullRomCurve3(points, true, 'centripetal', 0.35);
}

function createGableRoof(width, depth, height, material) {
  const w = width / 2;
  const d = depth / 2;
  const vertices = new Float32Array([
    -w, 0, -d,  w, 0, -d,  0, height, -d,
    -w, 0,  d,  0, height,  d,  w, 0,  d,
    -w, 0, -d,  0, height, -d, -w, 0, d,
     0, height, -d, 0, height, d, -w, 0, d,
     w, 0, -d,  w, 0, d, 0, height, -d,
     0, height, -d, w, 0, d, 0, height, d,
    -w, 0, -d, -w, 0, d, w, 0, -d,
     w, 0, -d, -w, 0, d, w, 0, d,
  ]);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geometry.computeVertexNormals();
  return shadow(new THREE.Mesh(geometry, material));
}

function createBeam(start, end, radius, material, radialSegments = 6) {
  const direction = end.clone().sub(start);
  const length = direction.length();
  const beam = shadow(new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, length, radialSegments),
    material,
  ));
  beam.position.copy(start).add(end).multiplyScalar(0.5);
  beam.quaternion.setFromUnitVectors(UP, direction.normalize());
  return beam;
}

function addWindow(group, x, y, z, rotationY, litMaterial, trimMaterial, width = 0.42, height = 0.55) {
  const frame = new THREE.Group();
  frame.position.set(x, y, z);
  frame.rotation.y = rotationY;
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(width, height), litMaterial);
  glass.position.z = 0.006;
  frame.add(glass);

  const top = makeBox(width + 0.08, 0.06, 0.045, trimMaterial, 0.01);
  top.position.set(0, height / 2 + 0.03, 0.025);
  const bottom = top.clone();
  bottom.position.y = -height / 2 - 0.03;
  const side = makeBox(0.06, height, 0.045, trimMaterial, 0.01);
  side.position.set(-width / 2 - 0.03, 0, 0.025);
  const sideTwo = side.clone();
  sideTwo.position.x *= -1;
  const crossV = makeBox(0.035, height, 0.05, trimMaterial, 0.005);
  crossV.position.z = 0.03;
  const crossH = makeBox(width, 0.035, 0.05, trimMaterial, 0.005);
  crossH.position.z = 0.03;
  frame.add(top, bottom, side, sideTwo, crossV, crossH);
  group.add(frame);
  return frame;
}

function addDoor(group, x, y, z, rotationY, doorMaterial, trimMaterial) {
  const door = new THREE.Group();
  door.position.set(x, y, z);
  door.rotation.y = rotationY;
  const slab = makeBox(0.55, 1.05, 0.09, doorMaterial, 0.035);
  slab.position.y = 0.525;
  const header = makeBox(0.69, 0.07, 0.12, trimMaterial, 0.015);
  header.position.set(0, 1.08, 0);
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), trimMaterial);
  knob.position.set(0.19, 0.52, 0.065);
  door.add(slab, header, knob);
  group.add(door);
}

function addChimney(group, x, z, y, material) {
  const chimney = makeBox(0.34, 0.85, 0.34, material, 0.04);
  chimney.position.set(x, y, z);
  const cap = makeBox(0.42, 0.11, 0.42, material, 0.025);
  cap.position.set(x, y + 0.45, z);
  group.add(chimney, cap);
}

function createHouse(options, palette) {
  const {
    x, z, width = 2.2, depth = 1.8, height = 1.65,
    rotation = 0, wall = 0xd7c39b, roof = 0x74443b,
    door = 0x315448, label = null, upper = false,
  } = options;
  const group = new THREE.Group();
  group.position.set(x, GROUND_Y, z);
  group.rotation.y = rotation;

  const foundation = makeBox(width + 0.14, 0.16, depth + 0.14, palette.stone, 0.06);
  foundation.position.y = 0.08;
  const wallMaterial = new THREE.MeshStandardMaterial({ color: wall, roughness: 0.9 });
  const bodyHeight = upper ? height + 0.65 : height;
  const body = makeBox(width, bodyHeight, depth, wallMaterial, 0.1);
  body.position.y = 0.16 + bodyHeight / 2;
  const roofMaterial = new THREE.MeshStandardMaterial({ color: roof, roughness: 0.88, flatShading: true });
  const roofMesh = createGableRoof(width + 0.34, depth + 0.42, 0.78, roofMaterial);
  roofMesh.position.y = 0.16 + bodyHeight;
  group.add(foundation, body, roofMesh);

  const frontZ = depth / 2 + 0.055;
  const windowY = 0.16 + 0.92;
  addDoor(group, 0, 0.16, frontZ, 0, new THREE.MeshStandardMaterial({ color: door, roughness: 0.72 }), palette.trim);
  addWindow(group, -width * 0.3, windowY, frontZ + 0.006, 0, palette.windows, palette.trim, 0.38, 0.48);
  addWindow(group, width * 0.3, windowY, frontZ + 0.006, 0, palette.windows, palette.trim, 0.38, 0.48);
  addWindow(group, -width / 2 - 0.006, windowY, 0.15, -Math.PI / 2, palette.windows, palette.trim, 0.38, 0.48);
  addWindow(group, width / 2 + 0.006, windowY, -0.15, Math.PI / 2, palette.windows, palette.trim, 0.38, 0.48);

  if (upper) {
    addWindow(group, -width * 0.27, windowY + 1.05, frontZ + 0.006, 0, palette.windows, palette.trim, 0.38, 0.45);
    addWindow(group, width * 0.27, windowY + 1.05, frontZ + 0.006, 0, palette.windows, palette.trim, 0.38, 0.45);
  }

  addChimney(group, width * 0.27, -0.15, 0.16 + bodyHeight + 0.45, palette.brick);

  if (label) {
    const signMaterial = new THREE.MeshStandardMaterial({ map: createTextTexture(label, { width: 320, height: 96, fontSize: 42 }), roughness: 0.68 });
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.12, 0.34), signMaterial);
    sign.position.set(0, 1.48, frontZ + 0.08);
    group.add(sign);
  }

  group.traverse((child) => {
    if (child.isMesh) shadow(child);
  });
  return group;
}

function createStation(palette) {
  const group = new THREE.Group();
  group.position.set(-4.2, GROUND_Y, -5.45);
  const wall = new THREE.MeshStandardMaterial({ color: 0xe2cfa9, roughness: 0.9 });
  const roof = new THREE.MeshStandardMaterial({ color: 0x7f342f, roughness: 0.86, flatShading: true });
  const darkWood = new THREE.MeshStandardMaterial({ color: 0x453128, roughness: 0.82 });

  const foundation = makeBox(4.9, 0.18, 1.9, palette.stone, 0.06);
  foundation.position.y = 0.09;
  const body = makeBox(4.65, 1.65, 1.68, wall, 0.1);
  body.position.y = 1.0;
  const roofMesh = createGableRoof(5.05, 2.1, 0.88, roof);
  roofMesh.position.y = 1.82;
  group.add(foundation, body, roofMesh);

  const frontZ = 0.89;
  addDoor(group, 0, 0.17, frontZ, 0, darkWood, palette.trim);
  [-1.6, -0.72, 0.72, 1.6].forEach((x) => addWindow(group, x, 1.04, frontZ + 0.01, 0, palette.stationWindows, palette.trim, 0.48, 0.63));
  addChimney(group, -1.45, -0.2, 2.25, palette.brick);

  const signMaterial = new THREE.MeshStandardMaterial({
    map: createTextTexture('HOLLOWBROOK', { width: 600, height: 120, fontSize: 48 }),
    roughness: 0.65,
  });
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.22, 0.45), signMaterial);
  sign.position.set(0, 1.62, frontZ + 0.075);
  group.add(sign);

  const platform = makeBox(7.25, 0.19, 1.02, palette.platform, 0.09);
  platform.position.set(0, 0.15, 1.53);
  group.add(platform);

  const canopyRoof = makeBox(4.75, 0.12, 1.14, darkWood, 0.05);
  canopyRoof.position.set(0, 1.63, 1.62);
  canopyRoof.rotation.x = -0.08;
  group.add(canopyRoof);
  [-2.05, -0.7, 0.7, 2.05].forEach((x) => {
    const post = createBeam(new THREE.Vector3(x, 0.22, 1.82), new THREE.Vector3(x, 1.6, 1.82), 0.045, darkWood, 8);
    group.add(post);
  });

  [-1.1, 1.2].forEach((x) => {
    const bench = new THREE.Group();
    const seat = makeBox(0.95, 0.09, 0.28, darkWood, 0.025);
    seat.position.y = 0.53;
    const back = makeBox(0.95, 0.48, 0.08, darkWood, 0.025);
    back.position.set(0, 0.74, -0.12);
    const legA = makeBox(0.06, 0.42, 0.06, palette.iron);
    legA.position.set(-0.34, 0.3, 0);
    const legB = legA.clone();
    legB.position.x = 0.34;
    bench.add(seat, back, legA, legB);
    bench.position.set(x, 0, 1.62);
    group.add(bench);
  });

  group.traverse((child) => child.isMesh && shadow(child));
  return group;
}

function createTownHall(palette) {
  const group = createHouse({ x: -0.5, z: 2.65, width: 2.8, depth: 2.05, height: 1.85, upper: true, wall: 0xd8c594, roof: 0x5a6260, door: 0x365246 }, palette);
  const tower = new THREE.Group();
  tower.position.set(0, 2.95, 0);
  const towerBody = makeBox(1.05, 1.2, 1.05, new THREE.MeshStandardMaterial({ color: 0xcdbb8e, roughness: 0.9 }), 0.07);
  const towerRoof = shadow(new THREE.Mesh(new THREE.ConeGeometry(0.88, 0.92, 4), new THREE.MeshStandardMaterial({ color: 0x4e5756, roughness: 0.85, flatShading: true })));
  towerRoof.rotation.y = Math.PI / 4;
  towerRoof.position.y = 1.04;
  const clockFace = new THREE.Mesh(new THREE.CircleGeometry(0.28, 20), new THREE.MeshStandardMaterial({ color: 0xf1e4c4, roughness: 0.68 }));
  clockFace.position.set(0, 0.18, 0.532);
  const clockHandA = makeBox(0.025, 0.22, 0.02, palette.iron, 0.004);
  clockHandA.position.set(0, 0.22, 0.55);
  clockHandA.rotation.z = 0.25;
  const clockHandB = makeBox(0.18, 0.025, 0.02, palette.iron, 0.004);
  clockHandB.position.set(0.07, 0.18, 0.552);
  clockHandB.rotation.z = -0.45;
  tower.add(towerBody, towerRoof, clockFace, clockHandA, clockHandB);
  group.add(tower);
  return group;
}

function createChurch(palette) {
  const group = new THREE.Group();
  group.position.set(-3.2, GROUND_Y, 5.1);
  group.rotation.y = -0.08;
  const wall = new THREE.MeshStandardMaterial({ color: 0xdad1b6, roughness: 0.92 });
  const roof = new THREE.MeshStandardMaterial({ color: 0x4b5654, roughness: 0.88, flatShading: true });
  const body = makeBox(2.0, 1.7, 3.0, wall, 0.08);
  body.position.set(0, 0.95, 0);
  const roofMesh = createGableRoof(2.28, 3.35, 0.8, roof);
  roofMesh.rotation.y = Math.PI / 2;
  roofMesh.scale.set(3.35 / 2.28, 1, 2.28 / 3.35);
  roofMesh.position.y = 1.8;
  const tower = makeBox(1.18, 2.35, 1.18, wall, 0.06);
  tower.position.set(0, 1.28, 1.14);
  const spire = new THREE.Mesh(new THREE.ConeGeometry(0.84, 1.65, 4), roof);
  spire.position.set(0, 3.14, 1.14);
  spire.rotation.y = Math.PI / 4;
  shadow(spire);
  group.add(body, roofMesh, tower, spire);
  addDoor(group, 0, 0.08, 1.75, 0, new THREE.MeshStandardMaterial({ color: 0x50352a }), palette.trim);
  addWindow(group, -0.55, 1.0, -1.505, Math.PI, palette.windows, palette.trim, 0.36, 0.65);
  addWindow(group, 0.55, 1.0, -1.505, Math.PI, palette.windows, palette.trim, 0.36, 0.65);

  const crossV = makeBox(0.08, 0.7, 0.08, palette.trim, 0.015);
  crossV.position.set(0, 4.1, 1.14);
  const crossH = makeBox(0.42, 0.08, 0.08, palette.trim, 0.015);
  crossH.position.set(0, 4.17, 1.14);
  group.add(crossV, crossH);
  group.traverse((child) => child.isMesh && shadow(child));
  return group;
}

function createTree(x, z, scaleValue, foliageMaterials) {
  const group = new THREE.Group();
  group.position.set(x, GROUND_Y, z);
  group.scale.setScalar(scaleValue);
  const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x60412c, roughness: 1 });
  const trunk = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.16, 0.95, 7), trunkMaterial));
  trunk.position.y = 0.48;
  group.add(trunk);
  const material = foliageMaterials[Math.floor(random() * foliageMaterials.length)];
  const clusters = [
    [0, 1.22, 0, 0.68],
    [-0.35, 1.16, 0.03, 0.48],
    [0.34, 1.16, -0.08, 0.51],
    [-0.08, 1.62, -0.06, 0.57],
  ];
  clusters.forEach(([cx, cy, cz, radius], index) => {
    const crown = shadow(new THREE.Mesh(new THREE.IcosahedronGeometry(radius, 1), material));
    crown.position.set(cx, cy, cz);
    crown.scale.y = 0.9 + random() * 0.25;
    crown.rotation.set(random(), random() * Math.PI, random());
    crown.userData.windOffset = random() * Math.PI * 2 + index;
    group.add(crown);
  });
  return group;
}

function createPine(x, z, scaleValue, material) {
  const group = new THREE.Group();
  group.position.set(x, GROUND_Y, z);
  group.scale.setScalar(scaleValue);
  const trunk = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.15, 1, 7), new THREE.MeshStandardMaterial({ color: 0x593b28, roughness: 1 })));
  trunk.position.y = 0.5;
  group.add(trunk);
  [[0.8, 0.72], [1.25, 0.6], [1.66, 0.42]].forEach(([y, radius]) => {
    const crown = shadow(new THREE.Mesh(new THREE.ConeGeometry(radius, 1.05, 9), material));
    crown.position.y = y;
    group.add(crown);
  });
  return group;
}

function createBush(x, z, scaleValue, material) {
  const bush = shadow(new THREE.Mesh(new THREE.IcosahedronGeometry(0.38, 1), material));
  bush.position.set(x, GROUND_Y + 0.28 * scaleValue, z);
  bush.scale.set(scaleValue, 0.72 * scaleValue, scaleValue);
  bush.rotation.y = random() * Math.PI;
  return bush;
}

function createLamp(x, z, palette, lamps, rotation = 0) {
  const group = new THREE.Group();
  group.position.set(x, GROUND_Y, z);
  group.rotation.y = rotation;
  const post = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.055, 1.35, 8), palette.iron));
  post.position.y = 0.68;
  const cap = createBeam(new THREE.Vector3(0, 1.32, 0), new THREE.Vector3(0.28, 1.32, 0), 0.035, palette.iron, 8);
  const lantern = makeBox(0.22, 0.25, 0.2, palette.lampGlass, 0.045);
  lantern.position.set(0.29, 1.2, 0);
  const top = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.15, 4), palette.iron);
  top.rotation.y = Math.PI / 4;
  top.position.set(0.29, 1.4, 0);
  const light = new THREE.PointLight(0xffca79, 0, 4.0, 2.1);
  light.position.set(0.29, 1.22, 0);
  group.add(post, cap, lantern, top, light);
  lamps.push({ light, glass: palette.lampGlass });
  return group;
}

function createPerson(x, z, colors, rotation = 0) {
  const group = new THREE.Group();
  group.position.set(x, GROUND_Y + 0.2, z);
  group.rotation.y = rotation;
  const coat = new THREE.MeshStandardMaterial({ color: colors[0], roughness: 0.92 });
  const skin = new THREE.MeshStandardMaterial({ color: colors[1], roughness: 0.9 });
  const body = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.16, 0.43, 8), coat));
  body.position.y = 0.33;
  const head = shadow(new THREE.Mesh(new THREE.SphereGeometry(0.105, 10, 8), skin));
  head.position.y = 0.64;
  const legMaterial = new THREE.MeshStandardMaterial({ color: 0x2e3333, roughness: 0.95 });
  const legA = makeBox(0.065, 0.25, 0.07, legMaterial, 0.015);
  legA.position.set(-0.055, 0.08, 0);
  const legB = legA.clone();
  legB.position.x = 0.055;
  group.add(body, head, legA, legB);
  return group;
}

function createVehicle(x, z, rotation, colorValue, palette) {
  const group = new THREE.Group();
  group.position.set(x, GROUND_Y + 0.12, z);
  group.rotation.y = rotation;
  const paint = new THREE.MeshStandardMaterial({ color: colorValue, roughness: 0.66, metalness: 0.08 });
  const body = makeBox(1.15, 0.36, 0.58, paint, 0.12);
  body.position.y = 0.28;
  const cabin = makeBox(0.52, 0.4, 0.52, paint, 0.09);
  cabin.position.set(0.2, 0.59, 0);
  const windscreen = makeBox(0.06, 0.23, 0.39, palette.windowsDay, 0.02);
  windscreen.position.set(0.48, 0.61, 0);
  const wheelGeometry = new THREE.CylinderGeometry(0.16, 0.16, 0.09, 12);
  [-0.35, 0.36].forEach((wheelX) => [-0.31, 0.31].forEach((wheelZ) => {
    const wheel = new THREE.Mesh(wheelGeometry, palette.tire);
    wheel.rotation.x = Math.PI / 2;
    wheel.position.set(wheelX, 0.15, wheelZ);
    group.add(wheel);
  }));
  group.add(body, cabin, windscreen);
  group.traverse((child) => child.isMesh && shadow(child));
  return group;
}

function createRailBridge(x, z, palette) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  const deck = makeBox(4.5, 0.22, 1.62, palette.bridgeDeck, 0.05);
  deck.position.y = 0.52;
  group.add(deck);

  [-0.84, 0.84].forEach((sideZ) => {
    group.add(createBeam(new THREE.Vector3(-2.2, 0.63, sideZ), new THREE.Vector3(2.2, 0.63, sideZ), 0.07, palette.bridgeIron));
    group.add(createBeam(new THREE.Vector3(-2.2, 1.45, sideZ), new THREE.Vector3(2.2, 1.45, sideZ), 0.055, palette.bridgeIron));
    for (let i = 0; i < 5; i += 1) {
      const bx = -2.2 + i * 1.1;
      group.add(createBeam(new THREE.Vector3(bx, 0.63, sideZ), new THREE.Vector3(bx + 0.55, 1.45, sideZ), 0.045, palette.bridgeIron));
      group.add(createBeam(new THREE.Vector3(bx + 0.55, 1.45, sideZ), new THREE.Vector3(bx + 1.1, 0.63, sideZ), 0.045, palette.bridgeIron));
    }
  });
  [-1.75, 1.75].forEach((supportX) => {
    const pier = makeBox(0.38, 0.58, 1.25, palette.stone, 0.06);
    pier.position.set(supportX, 0.25, 0);
    group.add(pier);
  });
  group.traverse((child) => child.isMesh && shadow(child));
  return group;
}

function createRoadBridge(x, z, palette) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  const deck = makeBox(3.6, 0.3, 1.46, palette.road, 0.08);
  deck.position.y = 0.48;
  group.add(deck);
  [-0.77, 0.77].forEach((sideZ) => {
    const wall = makeBox(3.72, 0.28, 0.16, palette.stone, 0.05);
    wall.position.set(0, 0.72, sideZ);
    group.add(wall);
  });
  [-1.42, 1.42].forEach((supportX) => {
    const pier = makeBox(0.34, 0.62, 1.25, palette.stone, 0.06);
    pier.position.set(supportX, 0.24, 0);
    group.add(pier);
  });
  return group;
}

function createTrack(scene, curve, palette) {
  const trackGroup = new THREE.Group();
  const ballastMaterial = new THREE.MeshStandardMaterial({ color: 0x797568, roughness: 1, side: THREE.DoubleSide });
  const ballast = createRibbon(curve, 1.38, 0.505, ballastMaterial, 300, true);
  trackGroup.add(ballast);

  const sleeperGeometry = new THREE.BoxGeometry(1.28, 0.11, 0.2);
  for (let i = 0; i < 152; i += 1) {
    const t = i / 152;
    const point = curve.getPointAt(t);
    const tangent = curve.getTangentAt(t).normalize();
    const normal = new THREE.Vector3(-tangent.z, 0, tangent.x).normalize();
    const sleeper = shadow(new THREE.Mesh(sleeperGeometry, palette.sleeper));
    sleeper.position.set(point.x, 0.58, point.z);
    sleeper.quaternion.setFromUnitVectors(X_AXIS, normal);
    trackGroup.add(sleeper);
  }

  [-0.38, 0.38].forEach((offset) => {
    const railCurve = offsetCurve(curve, offset);
    const rail = shadow(new THREE.Mesh(
      new THREE.TubeGeometry(railCurve, 520, 0.055, 7, true),
      palette.rail,
    ));
    rail.position.y = 0.69;
    trackGroup.add(rail);
  });

  scene.add(trackGroup);
  return trackGroup;
}

function makeFlowerBed(x, z, width, depth, palette) {
  const group = new THREE.Group();
  const soil = makeBox(width, 0.06, depth, palette.soil, 0.12);
  soil.position.set(x, GROUND_Y + 0.04, z);
  group.add(soil);
  const flowerColors = [0xe9c267, 0xd06d61, 0xe7ddd0, 0x9f6d9d];
  for (let i = 0; i < Math.floor(width * depth * 9); i += 1) {
    const stem = createBeam(
      new THREE.Vector3(x + (random() - 0.5) * width * 0.85, GROUND_Y + 0.06, z + (random() - 0.5) * depth * 0.75),
      new THREE.Vector3(x + (random() - 0.5) * width * 0.85, GROUND_Y + 0.24, z + (random() - 0.5) * depth * 0.75),
      0.014,
      palette.leaf,
      5,
    );
    const bloom = new THREE.Mesh(new THREE.SphereGeometry(0.055, 7, 5), new THREE.MeshStandardMaterial({ color: flowerColors[Math.floor(random() * flowerColors.length)], roughness: 0.9 }));
    bloom.position.copy(stem.position);
    bloom.position.y = GROUND_Y + 0.24;
    group.add(stem, bloom);
  }
  return group;
}

function createFence(points, palette) {
  const group = new THREE.Group();
  points.forEach(([x, z], index) => {
    const post = makeBox(0.09, 0.58, 0.09, palette.fence, 0.018);
    post.position.set(x, GROUND_Y + 0.29, z);
    group.add(post);
    if (index < points.length - 1) {
      const [nx, nz] = points[index + 1];
      [0.22, 0.43].forEach((height) => {
        group.add(createBeam(
          new THREE.Vector3(x, GROUND_Y + height, z),
          new THREE.Vector3(nx, GROUND_Y + height, nz),
          0.027,
          palette.fence,
          5,
        ));
      });
    }
  });
  return group;
}

export function createWorld(scene) {
  seed = 41387;
  const grassTexture = makeGrassTexture();
  grassTexture.repeat.set(8, 6);
  const woodTexture = makeWoodTexture();
  woodTexture.repeat.set(3, 1);

  const windows = new THREE.MeshStandardMaterial({
    color: 0x88a1a4,
    emissive: 0xffbd64,
    emissiveIntensity: 0.08,
    roughness: 0.28,
    metalness: 0.05,
  });
  const stationWindows = windows.clone();
  const lampGlass = new THREE.MeshStandardMaterial({
    color: 0xe8d7a7,
    emissive: 0xffb85e,
    emissiveIntensity: 0.12,
    roughness: 0.24,
  });
  const palette = {
    wood: new THREE.MeshStandardMaterial({ map: woodTexture, color: 0xffffff, roughness: 0.72 }),
    woodDark: new THREE.MeshStandardMaterial({ color: 0x4b2d1e, roughness: 0.78 }),
    grass: new THREE.MeshStandardMaterial({ map: grassTexture, color: 0xd8e2c1, roughness: 1 }),
    soil: new THREE.MeshStandardMaterial({ color: 0x6a5038, roughness: 1 }),
    stone: new THREE.MeshStandardMaterial({ color: 0xa8a18e, roughness: 0.98, flatShading: true }),
    road: new THREE.MeshStandardMaterial({ color: 0x827f73, roughness: 1, side: THREE.DoubleSide }),
    platform: new THREE.MeshStandardMaterial({ color: 0xb8ad92, roughness: 0.96 }),
    trim: new THREE.MeshStandardMaterial({ color: 0xf0e4c8, roughness: 0.84 }),
    iron: new THREE.MeshStandardMaterial({ color: 0x26302f, roughness: 0.58, metalness: 0.5 }),
    bridgeIron: new THREE.MeshStandardMaterial({ color: 0x384c48, roughness: 0.58, metalness: 0.55 }),
    bridgeDeck: new THREE.MeshStandardMaterial({ color: 0x564536, roughness: 0.84 }),
    rail: new THREE.MeshStandardMaterial({ color: 0x6e716f, roughness: 0.3, metalness: 0.88 }),
    sleeper: new THREE.MeshStandardMaterial({ color: 0x514133, roughness: 0.9 }),
    brick: new THREE.MeshStandardMaterial({ color: 0x82483a, roughness: 0.92 }),
    fence: new THREE.MeshStandardMaterial({ color: 0xa78c63, roughness: 0.94 }),
    leaf: new THREE.MeshStandardMaterial({ color: 0x577349, roughness: 1, flatShading: true }),
    tire: new THREE.MeshStandardMaterial({ color: 0x202222, roughness: 0.88 }),
    windows,
    stationWindows,
    windowsDay: new THREE.MeshStandardMaterial({ color: 0x6e8f96, roughness: 0.24 }),
    lampGlass,
  };

  const base = makeBox(34, 1.35, 26, palette.wood, 0.72);
  base.position.y = -0.56;
  scene.add(base);
  const inset = makeBox(31.55, 0.42, 23.55, palette.grass, 0.42);
  inset.position.y = 0.225;
  scene.add(inset);

  const frameMaterial = new THREE.MeshStandardMaterial({ map: woodTexture, color: 0x8e5938, roughness: 0.66 });
  const frontRail = makeBox(34.1, 0.44, 0.62, frameMaterial, 0.15);
  frontRail.position.set(0, 0.25, 12.72);
  const backRail = frontRail.clone();
  backRail.position.z = -12.72;
  const sideRail = makeBox(0.62, 0.44, 25.0, frameMaterial, 0.15);
  sideRail.position.set(16.72, 0.25, 0);
  const sideRailTwo = sideRail.clone();
  sideRailTwo.position.x = -16.72;
  scene.add(frontRail, backRail, sideRail, sideRailTwo);

  [[-15.8, -11.8], [15.8, -11.8], [-15.8, 11.8], [15.8, 11.8]].forEach(([x, z]) => {
    const screw = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.05, 18), palette.iron);
    screw.position.set(x, 0.5, z);
    scene.add(screw);
  });

  const plaqueMaterial = new THREE.MeshStandardMaterial({
    map: createTextTexture('HOLLOWBROOK  ·  MODEL RAILWAY', { width: 850, height: 130, fontSize: 46, background: '#35251b', border: '#c89d5c' }),
    roughness: 0.52,
    metalness: 0.14,
  });
  const plaque = new THREE.Mesh(new THREE.PlaneGeometry(5.8, 0.9), plaqueMaterial);
  plaque.position.set(0, -0.42, 13.041);
  plaque.rotation.y = Math.PI;
  scene.add(plaque);

  const riverPoints = [];
  for (let z = -11; z <= 11; z += 1.4) riverPoints.push([4.9 + Math.sin(z * 0.36) * 0.52 + Math.sin(z * 0.13) * 0.2, z]);
  const riverCurve = curveFrom(riverPoints);
  const bank = createRibbon(riverCurve, 3.2, 0.452, new THREE.MeshStandardMaterial({ color: 0x827052, roughness: 1, side: THREE.DoubleSide }), 160);
  const waterMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x4b8e93,
    roughness: 0.2,
    metalness: 0.05,
    transparent: true,
    opacity: 0.92,
    clearcoat: 0.9,
    clearcoatRoughness: 0.18,
    side: THREE.DoubleSide,
  });
  const water = createRibbon(riverCurve, 2.25, 0.478, waterMaterial, 180);
  scene.add(bank, water);

  const waterGlints = [];
  for (let i = 0; i < 24; i += 1) {
    const t = (i + 0.35) / 24;
    const point = riverCurve.getPointAt(t);
    const tangent = riverCurve.getTangentAt(t).normalize();
    const glint = new THREE.Mesh(
      new THREE.PlaneGeometry(0.3 + random() * 0.65, 0.025),
      new THREE.MeshBasicMaterial({ color: 0xb9e0dc, transparent: true, opacity: 0.22 + random() * 0.2, side: THREE.DoubleSide }),
    );
    glint.position.set(point.x + (random() - 0.5) * 1.35, 0.492, point.z);
    glint.rotation.x = -Math.PI / 2;
    glint.rotation.z = -Math.atan2(tangent.z, tangent.x);
    glint.userData.phase = random() * Math.PI * 2;
    scene.add(glint);
    waterGlints.push(glint);
  }

  for (let i = 0; i < 72; i += 1) {
    const t = i / 72;
    const point = riverCurve.getPointAt(t);
    const tangent = riverCurve.getTangentAt(t);
    const normal = new THREE.Vector3(-tangent.z, 0, tangent.x).normalize();
    const side = i % 2 === 0 ? 1 : -1;
    const pebble = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.08 + random() * 0.11, 0),
      new THREE.MeshStandardMaterial({ color: random() > 0.5 ? 0x898879 : 0x6f756a, roughness: 1, flatShading: true }),
    );
    pebble.position.copy(point).addScaledVector(normal, side * (1.15 + random() * 0.28));
    pebble.position.y = GROUND_Y + 0.09;
    pebble.scale.y = 0.55;
    shadow(pebble);
    scene.add(pebble);
  }

  const trackCurve = curveFrom([
    [-10.7, -5.2], [-8.2, -7.15], [-3.3, -7.55], [2.4, -7.5], [7.7, -7.25], [10.7, -4.7],
    [11.1, 0.2], [10.2, 4.65], [7.5, 7.25], [2.4, 7.45], [-3.5, 7.55], [-8.4, 6.7], [-10.9, 3.6], [-11.35, -1.4],
  ], true);

  const southBridgeX = 4.9 + Math.sin(-7.4 * 0.36) * 0.52 + Math.sin(-7.4 * 0.13) * 0.2;
  const northBridgeX = 4.9 + Math.sin(7.35 * 0.36) * 0.52 + Math.sin(7.35 * 0.13) * 0.2;
  scene.add(createRailBridge(southBridgeX, -7.38, palette));
  scene.add(createRailBridge(northBridgeX, 7.35, palette));
  createTrack(scene, trackCurve, palette);

  const roadCurves = [
    curveFrom([[-4.1, -6.0], [-4.0, -3.7], [-2.5, -1.7], [-0.8, 0.0]]),
    curveFrom([[-7.7, -0.2], [-4.8, 0.05], [-1.0, 0.05], [2.6, 0.8], [5.2, 1.15], [8.5, 1.4]]),
    curveFrom([[-0.9, -0.1], [-0.9, 2.7], [-1.6, 5.2]]),
    curveFrom([[1.0, 0.4], [2.3, -2.0], [1.7, -5.6]]),
    curveFrom([[7.4, 1.35], [8.15, -1.2], [8.4, -4.5]]),
  ];
  roadCurves.forEach((road, index) => scene.add(createRibbon(road, index === 1 ? 1.18 : 1.0, 0.486, palette.road, 80)));
  const square = makeBox(4.1, 0.06, 3.25, palette.road, 0.42);
  square.position.set(-0.7, 0.475, 0.55);
  scene.add(square);

  const roadBridgeX = 4.9 + Math.sin(1.1 * 0.36) * 0.52 + Math.sin(1.1 * 0.13) * 0.2;
  scene.add(createRoadBridge(roadBridgeX, 1.1, palette));

  const buildings = [
    createStation(palette),
    createTownHall(palette),
    createChurch(palette),
    createHouse({ x: -5.5, z: 1.55, width: 2.25, depth: 1.75, height: 1.6, rotation: -0.06, wall: 0xc98962, roof: 0x744039, door: 0x3e5948, label: 'BAKERY' }, palette),
    createHouse({ x: 2.05, z: -1.55, width: 2.3, depth: 1.8, height: 1.65, rotation: Math.PI + 0.06, wall: 0xd6b976, roof: 0x6b4435, door: 0x8b3731, label: 'POST' }, palette),
    createHouse({ x: -6.5, z: 4.55, width: 2.35, depth: 1.8, height: 1.7, rotation: 0.12, upper: true, wall: 0xaebca2, roof: 0x4d5e55, door: 0x704239 }, palette),
    createHouse({ x: 2.35, z: 4.35, width: 2.1, depth: 1.75, height: 1.6, rotation: -0.22, wall: 0xc5a685, roof: 0x754239, door: 0x31504a }, palette),
    createHouse({ x: 7.9, z: 3.55, width: 2.25, depth: 1.8, height: 1.65, rotation: -Math.PI / 2 + 0.08, wall: 0xb9c5ad, roof: 0x56605d, door: 0x7c4038 }, palette),
    createHouse({ x: 8.25, z: -2.7, width: 2.15, depth: 1.75, height: 1.55, rotation: Math.PI / 2 - 0.08, wall: 0xd7c197, roof: 0x7d4a3c, door: 0x35544d }, palette),
    createHouse({ x: -7.0, z: -3.2, width: 2.2, depth: 1.8, height: 1.6, rotation: Math.PI / 2, wall: 0xd4a98b, roof: 0x6a3c36, door: 0x435d50 }, palette),
    createHouse({ x: 1.1, z: -5.35, width: 2.7, depth: 1.85, height: 1.45, rotation: Math.PI, wall: 0xa7ada4, roof: 0x4e5655, door: 0x674235, label: 'GOODS' }, palette),
  ];
  buildings.forEach((building) => scene.add(building));

  scene.add(makeFlowerBed(-2.4, 1.15, 1.7, 0.55, palette));
  scene.add(makeFlowerBed(-4.45, 2.7, 0.55, 1.7, palette));
  scene.add(makeFlowerBed(1.0, 2.45, 1.55, 0.5, palette));

  const foliageMaterials = [
    new THREE.MeshStandardMaterial({ color: 0x4f7546, roughness: 1, flatShading: true }),
    new THREE.MeshStandardMaterial({ color: 0x65834c, roughness: 1, flatShading: true }),
    new THREE.MeshStandardMaterial({ color: 0x7b8e52, roughness: 1, flatShading: true }),
    new THREE.MeshStandardMaterial({ color: 0x496b50, roughness: 1, flatShading: true }),
  ];
  const pineMaterial = new THREE.MeshStandardMaterial({ color: 0x34594b, roughness: 1, flatShading: true });
  const treePositions = [
    [-13.6,-8.8,1.0],[-12.2,-9.5,.82],[-10.7,-9.4,.95],[-14.0,-6.6,.83],
    [-14.2,6.9,.9],[-13.0,8.7,1.05],[-11.4,9.2,.86],[-9.7,9.5,1.02],
    [-7.3,9.4,.82],[-5.8,9.6,.96],[10.6,9.4,.9],[12.2,8.7,1.05],[13.7,7.2,.88],
    [13.8,4.8,.96],[13.8,-7.5,1.02],[12.5,-9.0,.9],[10.6,-9.5,.84],
    [-9.7,2.2,.78],[-8.5,1.6,.72],[-7.9,5.2,.72],[3.1,5.9,.7],[6.6,4.9,.78],
    [9.6,-.4,.74],[10.0,-2.4,.7],[6.5,-4.6,.76],[3.5,-4.7,.7],[-9.3,-3.4,.72],
  ];
  const trees = [];
  treePositions.forEach(([x, z, s], index) => {
    const tree = index % 5 === 0 ? createPine(x, z, s, pineMaterial) : createTree(x, z, s, foliageMaterials);
    trees.push(tree);
    scene.add(tree);
  });

  const bushMaterial = new THREE.MeshStandardMaterial({ color: 0x5e7d4c, roughness: 1, flatShading: true });
  [
    [-3.7,-4.5],[-4.8,-4.45],[-5.9,-4.55],[-2.8,-4.45],[-3.8,3.9],[-4.4,4.1],
    [3.4,3.8],[3.1,4.7],[7.0,2.8],[7.0,4.25],[7.5,-3.8],[8.8,-3.9],[-6.1,.3],[-4.9,.15],
  ].forEach(([x,z], index) => scene.add(createBush(x,z,0.8 + (index % 3) * 0.12,bushMaterial)));

  scene.add(createFence([[-8.2,-4.8],[-8.4,-3.5],[-8.5,-2.2],[-8.2,-1.1]], palette));
  scene.add(createFence([[6.7,-5.4],[7.8,-5.1],[9.0,-4.8],[9.7,-4.1]], palette));
  scene.add(createFence([[5.9,5.35],[7.0,5.8],[8.1,6.0],[9.0,5.7]], palette));

  const lamps = [];
  [
    [-3.2,-5.35,Math.PI],[-5.3,-5.3,Math.PI],[-3.05,-1.3,0],[-2.5,0.15,Math.PI],
    [0.4,-0.55,0],[1.0,1.2,Math.PI],[-1.9,2.0,0],[-2.0,4.0,Math.PI],[2.9,0.95,Math.PI],
    [7.0,1.55,0],[8.0,-0.4,Math.PI],[8.2,-3.8,0],
  ].forEach(([x,z,r]) => scene.add(createLamp(x,z,palette,lamps,r)));

  scene.add(createVehicle(-1.8, -0.35, 0.05, 0x315e62, palette));
  scene.add(createVehicle(5.9, 1.16, 0.02, 0x9b4b36, palette));
  scene.add(createPerson(-4.8, -6.25, [0x355663, 0xd5aa84], Math.PI));
  scene.add(createPerson(-3.65, -6.18, [0x8f463b, 0xc89772], Math.PI * 0.8));
  scene.add(createPerson(-1.6, 0.3, [0x626042, 0xd2a17f], -0.4));
  scene.add(createPerson(0.1, 0.0, [0x475c74, 0xb98062], 0.7));

  const signalGroup = new THREE.Group();
  signalGroup.position.set(-0.4, GROUND_Y, -6.9);
  const signalPole = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 1.38, 8), palette.iron);
  signalPole.position.y = 0.69;
  const signalHead = makeBox(0.34, 0.55, 0.24, palette.iron, 0.08);
  signalHead.position.y = 1.37;
  const signalGlow = new THREE.MeshStandardMaterial({ color: 0x63a96d, emissive: 0x55d96a, emissiveIntensity: 1.4 });
  const signalLens = new THREE.Mesh(new THREE.CircleGeometry(0.09, 16), signalGlow);
  signalLens.position.set(0, 1.46, 0.126);
  signalGroup.add(signalPole, signalHead, signalLens);
  scene.add(signalGroup);

  const starsGeometry = new THREE.BufferGeometry();
  const starPositions = [];
  for (let i = 0; i < 500; i += 1) {
    const radius = 36 + random() * 26;
    const theta = random() * Math.PI * 2;
    const phi = random() * Math.PI * 0.38;
    starPositions.push(Math.cos(theta) * Math.cos(phi) * radius, 16 + Math.sin(phi) * radius, Math.sin(theta) * Math.cos(phi) * radius);
  }
  starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
  const stars = new THREE.Points(starsGeometry, new THREE.PointsMaterial({ color: 0xe5e6d8, size: 0.12, transparent: true, opacity: 0, depthWrite: false }));
  scene.add(stars);

  const setNight = (isNight) => {
    windows.emissiveIntensity = isNight ? 2.5 : 0.08;
    stationWindows.emissiveIntensity = isNight ? 3.2 : 0.08;
    lampGlass.emissiveIntensity = isNight ? 4.4 : 0.12;
    lamps.forEach(({ light }) => { light.intensity = isNight ? 1.15 : 0; });
    stars.material.opacity = isNight ? 0.85 : 0;
    waterMaterial.color.set(isNight ? 0x234f66 : 0x4b8e93);
    signalGlow.emissiveIntensity = isNight ? 3.1 : 1.4;
  };

  const update = (elapsed) => {
    waterGlints.forEach((glint, index) => {
      glint.material.opacity = 0.18 + Math.sin(elapsed * 1.25 + glint.userData.phase) * 0.1;
      glint.scale.x = 0.85 + Math.sin(elapsed * 0.8 + index) * 0.16;
    });
    trees.forEach((tree, index) => {
      tree.rotation.z = Math.sin(elapsed * 0.35 + index) * 0.0025;
    });
  };

  return {
    trackCurve,
    stationTarget: new THREE.Vector3(-3.9, 0, -7.5),
    setNight,
    update,
    signalGlow,
    materials: palette,
  };
}
