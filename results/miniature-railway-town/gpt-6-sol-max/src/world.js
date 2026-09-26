import * as THREE from 'three';
import { createRailway, riverX } from './railway.js';

const palette = {
  grass: 0x789568,
  grassLight: 0x91a978,
  cream: 0xe7d8b6,
  plaster: 0xd8c5a3,
  brick: 0xb9745e,
  blue: 0x8faeae,
  slate: 0x5e6966,
  redRoof: 0x985c4b,
  oliveRoof: 0x6d7462,
  trim: 0xf4e8cf,
  dark: 0x435350,
};

const mat = (color, extras = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.88, ...extras });

function box(parent, material, w, h, d, x, y, z, cast = false) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  mesh.position.set(x, y, z);
  mesh.castShadow = cast;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function orb(parent, material, radius, x, y, z, sx = 1, sy = 1, sz = 1, detail = 1) {
  const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(radius, detail), material);
  mesh.position.set(x, y, z);
  mesh.scale.set(sx, sy, sz);
  mesh.castShadow = radius > 0.3;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function cylinder(parent, material, top, bottom, height, x, y, z, sides = 9) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(top, bottom, height, sides), material);
  mesh.position.set(x, y, z);
  mesh.castShadow = height > 0.8 && top > 0.04;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function roundedShape(w, d, r) {
  const shape = new THREE.Shape();
  shape.moveTo(-w / 2 + r, -d / 2);
  shape.lineTo(w / 2 - r, -d / 2);
  shape.quadraticCurveTo(w / 2, -d / 2, w / 2, -d / 2 + r);
  shape.lineTo(w / 2, d / 2 - r);
  shape.quadraticCurveTo(w / 2, d / 2, w / 2 - r, d / 2);
  shape.lineTo(-w / 2 + r, d / 2);
  shape.quadraticCurveTo(-w / 2, d / 2, -w / 2, d / 2 - r);
  shape.lineTo(-w / 2, -d / 2 + r);
  shape.quadraticCurveTo(-w / 2, -d / 2, -w / 2 + r, -d / 2);
  return shape;
}

function signTexture(text, dark = '#36524d', light = '#f2e8cf', width = 768, height = 160) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = light;
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = dark;
  ctx.lineWidth = 9;
  ctx.strokeRect(13, 13, width - 26, height - 26);
  ctx.fillStyle = dark;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `bold ${Math.floor(height * 0.42)}px Georgia, serif`;
  ctx.fillText(text, width / 2, height / 2 + 2);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function createBase(scene) {
  const wood = mat(0x795441, { roughness: 0.7 });
  const edge = mat(0x4a3129, { roughness: 0.7 });
  const soil = mat(0x5d5940);
  const brass = mat(0xb89456, { metalness: 0.55, roughness: 0.35 });

  const geometry = new THREE.ExtrudeGeometry(roundedShape(34.2, 24.2, 0.9), {
    depth: 0.85, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.08,
    bevelSegments: 3, curveSegments: 6,
  });
  geometry.rotateX(-Math.PI / 2);
  const base = new THREE.Mesh(geometry, [wood, edge]);
  base.position.y = -1.13;
  base.castShadow = base.receiveShadow = true;
  scene.add(base);

  box(scene, soil, 31.65, 0.13, 21.65, 0, -0.135, 0);
  for (const z of [-11.67, 11.67]) box(scene, edge, 33.2, 0.085, 0.12, 0, -0.143, z);
  for (const x of [-16.67, 16.67]) box(scene, edge, 0.12, 0.085, 22.3, x, -0.143, 0);

  box(scene, brass, 4.65, 0.67, 0.055, 0, -0.62, 12.19);
  const label = new THREE.Mesh(
    new THREE.PlaneGeometry(4.38, 0.51),
    new THREE.MeshBasicMaterial({ map: signTexture('WILLOWMERE  ·  1908', '#513e2c', '#c9a966'), transparent: true }),
  );
  label.position.set(0, -0.62, 12.23);
  scene.add(label);

  const foot = mat(0x412f28);
  for (const x of [-14.5, 14.5]) for (const z of [-9.7, 9.7]) {
    box(scene, foot, 1.15, 0.26, 1.15, x, -1.23, z);
  }
}

function terrainHeight(x, z) {
  const d = Math.abs(x - riverX(z));
  const noise = 0.012 * Math.sin(x * 1.36 + z * 0.5) * Math.cos(z * 1.7);
  if (d < 1.04) return -0.063;
  if (d < 1.63) return -0.063 + (d - 1.04) / 0.59 * (0.18 + noise);
  return 0.117 + noise;
}

function createTerrain(scene) {
  const nx = 158;
  const nz = 108;
  const positions = [];
  const colors = [];
  const indices = [];
  const greenA = new THREE.Color(palette.grass);
  const greenB = new THREE.Color(palette.grassLight);
  const bank = new THREE.Color(0x9f9a70);
  for (let j = 0; j <= nz; j++) {
    const z = -10.8 + j * 21.6 / nz;
    for (let i = 0; i <= nx; i++) {
      const x = -15.8 + i * 31.6 / nx;
      const y = terrainHeight(x, z);
      positions.push(x, y, z);
      const variation = 0.26 + 0.16 * Math.sin(x * 1.38 + z * 0.37) * Math.cos(z * 1.12);
      const c = greenA.clone().lerp(greenB, variation);
      if (Math.abs(x - riverX(z)) < 1.72) c.lerp(bank, 0.52);
      colors.push(c.r, c.g, c.b);
      if (i < nx && j < nz) {
        const a = j * (nx + 1) + i;
        const b = a + nx + 1;
        indices.push(a, b, a + 1, a + 1, b, b + 1);
      }
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, side: THREE.DoubleSide }));
  mesh.receiveShadow = true;
  scene.add(mesh);

  const dirt = mat(0x686b4e, { side: THREE.DoubleSide });
  const skirts = [];
  for (let i = 0; i < nx; i++) {
    const x1 = -15.8 + i * 31.6 / nx;
    const x2 = -15.8 + (i + 1) * 31.6 / nx;
    for (const z of [-10.8, 10.8]) {
      skirts.push(x1, terrainHeight(x1, z), z, x1, -0.07, z, x2, terrainHeight(x2, z), z);
      skirts.push(x2, terrainHeight(x2, z), z, x1, -0.07, z, x2, -0.07, z);
    }
  }
  for (let i = 0; i < nz; i++) {
    const z1 = -10.8 + i * 21.6 / nz;
    const z2 = -10.8 + (i + 1) * 21.6 / nz;
    for (const x of [-15.8, 15.8]) {
      skirts.push(x, terrainHeight(x, z1), z1, x, -0.07, z1, x, terrainHeight(x, z2), z2);
      skirts.push(x, terrainHeight(x, z2), z2, x, -0.07, z1, x, -0.07, z2);
    }
  }
  const sides = new THREE.BufferGeometry();
  sides.setAttribute('position', new THREE.Float32BufferAttribute(skirts, 3));
  sides.computeVertexNormals();
  scene.add(new THREE.Mesh(sides, dirt));

  // Small, irregular color patches make the turf read as painted scenic grass.
  const patchColors = [0x8e9f6b, 0x6d8861, 0x9aa276, 0x7a8d62];
  const patches = [[-11.1,-5.7,1.5],[-8.7,4.5,1.6],[-1.3,-5.7,1.3],[1.8,4.4,1.7],[9.9,-5.5,1.8],[10.1,5.9,1.1]];
  patches.forEach(([x,z,r], i) => {
    const patch = new THREE.Mesh(new THREE.CircleGeometry(r, 18), mat(patchColors[i % patchColors.length], { side: THREE.DoubleSide }));
    patch.rotation.x = -Math.PI / 2;
    patch.scale.y = 0.65;
    patch.position.set(x, 0.139, z);
    patch.receiveShadow = true;
    scene.add(patch);
  });
}

function createRiver(scene) {
  const vertices = [];
  const indices = [];
  const count = 210;
  for (let i = 0; i <= count; i++) {
    const z = -10.83 + i * 21.66 / count;
    const x = riverX(z);
    const width = 1.085 + 0.06 * Math.sin(z * 1.4);
    vertices.push(x - width, -0.01, z, x + width, -0.01, z);
    if (i < count) {
      const k = i * 2;
      indices.push(k, k + 1, k + 2, k + 1, k + 3, k + 2);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const water = new THREE.Mesh(geometry, mat(0x7faeb9, { metalness: 0.08, roughness: 0.28, side: THREE.DoubleSide }));
  water.receiveShadow = true;
  scene.add(water);

  const ripplePositions = [];
  for (let i = 0; i < 46; i++) {
    const z = -10.1 + i * 0.43;
    const x = riverX(z) + 0.52 * Math.sin(i * 6.14);
    const length = 0.25 + (i % 4) * 0.1;
    ripplePositions.push(x - length / 2, 0.008, z, x + length / 2, 0.008, z);
  }
  const rippleGeo = new THREE.BufferGeometry();
  rippleGeo.setAttribute('position', new THREE.Float32BufferAttribute(ripplePositions, 3));
  scene.add(new THREE.LineSegments(rippleGeo, new THREE.LineBasicMaterial({ color: 0xd2e2d6, transparent: true, opacity: 0.58 })));

  const reed = mat(0x748965);
  for (let i = 0; i < 32; i++) {
    const z = -9.7 + i * 0.62;
    if (Math.abs(z) > 7.45 && Math.abs(z) < 8.7) continue;
    const side = i % 2 ? 1 : -1;
    const x = riverX(z) + side * 1.45;
    cylinder(scene, reed, 0.018, 0.026, 0.35, x, 0.17, z, 5);
  }
}

function roadStrip(scene, control, width, material, border = true) {
  const curve = new THREE.CatmullRomCurve3(control.map(([x,y,z]) => new THREE.Vector3(x,y,z)), false, 'centripetal');
  const segments = Math.max(30, control.length * 11);
  const positions = [];
  const indices = [];
  const edges = [[], []];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const p = curve.getPoint(t);
    const dir = curve.getTangent(t).normalize();
    const nx = -dir.z;
    const nz = dir.x;
    for (const side of [-1, 1]) {
      const x = p.x + side * nx * width / 2;
      const z = p.z + side * nz * width / 2;
      positions.push(x,p.y,z);
      edges[side < 0 ? 0 : 1].push(new THREE.Vector3(x,p.y + 0.014,z));
    }
    if (i < segments) {
      const k = i * 2;
      indices.push(k,k + 1,k + 2,k + 1,k + 3,k + 2);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const mesh = new THREE.Mesh(geometry, material);
  mesh.receiveShadow = true;
  scene.add(mesh);
  if (border) {
    const curb = mat(0xc8bda0);
    for (const points of edges) {
      const line = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), segments, 0.025, 5, false), curb);
      line.receiveShadow = true;
      scene.add(line);
    }
  }
}

function createRoads(scene) {
  const road = mat(0xb9ae91, { side: THREE.DoubleSide });
  const square = mat(0xcbbd9d);
  box(scene, square, 3.7, 0.035, 2.85, -3.7, 0.149, -0.58, false);
  box(scene, square, 4.6, 0.03, 1.55, -3.7, 0.145, 3.49, false);

  roadStrip(scene, [[-3.7,0.172,-5.8],[-3.69,0.172,-3.8],[-3.7,0.172,-0.6],[-3.7,0.172,3.6]], 1.12, road);
  roadStrip(scene, [[-10.8,0.171,-0.65],[-7.8,0.171,-0.65],[-3.7,0.171,-0.6],[0.6,0.171,-0.6],[2.7,0.171,-0.6],[3.7,0.22,-0.6],[4.4,0.3,-0.6],[6.7,0.3,-0.6],[7.55,0.22,-0.6],[8.25,0.171,-0.6],[10.8,0.171,-0.6]], 1.18, road);
  roadStrip(scene, [[-8.8,0.172,-5.8],[-8.82,0.172,-3.3],[-8.8,0.172,-0.65],[-8.82,0.172,2.8],[-8.95,0.172,4.5]], 0.78, road);
  roadStrip(scene, [[7.47,0.172,-5.45],[7.46,0.172,-3.6],[7.45,0.172,-0.6],[7.45,0.172,2.35],[7.48,0.172,5.4]], 0.64, road);

  const stone = mat(0xaaa38e);
  const rail = mat(0x7e7767);
  box(scene, stone, 3.43, 0.22, 1.65, riverX(-0.6), 0.17, -0.6);
  for (const side of [-1,1]) {
    box(scene, rail, 3.65, 0.36, 0.105, riverX(-0.6), 0.47, -0.6 + side * 0.77);
    for (let i = -2; i <= 2; i++) box(scene, stone, 0.16, 0.46, 0.19, riverX(-0.6) + i * 0.83, 0.45, -0.6 + side * 0.77);
  }
}

function roof(parent, w, d, h, rise, material) {
  const W = w / 2 + 0.2;
  const D = d / 2 + 0.18;
  const e = h + 0.06;
  const r = h + rise;
  const triangles = [
    -W,e,-D, W,e,-D, W,r,0, -W,e,-D, W,r,0, -W,r,0,
    -W,r,0, W,r,0, W,e,D, -W,r,0, W,e,D, -W,e,D,
    -W,e,-D, -W,r,0, -W,e,D, W,e,-D, W,e,D, W,r,0,
  ];
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(triangles, 3));
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, material);
  mesh.castShadow = mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function createArchitecture(scene, litGlass) {
  const trim = mat(palette.trim);
  const darkTrim = mat(0x5b675d);
  const door = mat(0x587368);
  const panes = mat(0x8ca4a2, { metalness: 0.03, roughness: 0.28 });
  const brickChimney = mat(0x9b6b5d);
  const flowerMats = [mat(0xe4c7a0), mat(0xc77c68), mat(0xdabf74)];

  function window(group, x, y, z, lit = true, scale = 1) {
    const frame = box(group, trim, 0.48 * scale, 0.61 * scale, 0.065, x, y, z);
    frame.castShadow = false;
    box(group, lit ? litGlass : panes, 0.35 * scale, 0.47 * scale, 0.072, x, y, z + Math.sign(z || 1) * 0.042, false);
    box(group, darkTrim, 0.028 * scale, 0.47 * scale, 0.083, x, y, z + Math.sign(z || 1) * 0.087, false);
    box(group, darkTrim, 0.36 * scale, 0.025 * scale, 0.083, x, y, z + Math.sign(z || 1) * 0.087, false);
    box(group, trim, 0.57 * scale, 0.065 * scale, 0.12, x, y - 0.34 * scale, z + Math.sign(z || 1) * 0.035, false);
  }

  function flowers(group, w, d) {
    const leaf = mat(0x567958);
    for (let i = 0; i < 4; i++) {
      const x = -w * 0.37 + i * (w * 0.25);
      orb(group, leaf, 0.13, x, 0.16, d / 2 + 0.25, 1, 0.7, 0.8);
      orb(group, flowerMats[i % 3], 0.055, x + 0.025, 0.26, d / 2 + 0.25, 1, 0.8, 1);
    }
  }

  function house({ x,z,w=2.15,d=2.05,h=1.65,wall=palette.cream,roofColor=palette.redRoof,doorColor=door,chimney=true,lit=true }) {
    const group = new THREE.Group();
    group.position.set(x,0.12,z);
    scene.add(group);
    box(group, mat(0xa6a18a), w + 0.1, 0.12, d + 0.1, 0, 0.04, 0);
    box(group, mat(wall), w, h, d, 0, h / 2 + 0.1, 0, true);
    roof(group,w,d,h + 0.1,0.61,mat(roofColor,{ side: THREE.DoubleSide }));
    box(group, doorColor, 0.46, 0.85, 0.06, 0, 0.55, d / 2 + 0.04);
    orb(group, mat(0xdac180,{ metalness:0.35 }), 0.034, 0.15, 0.57, d / 2 + 0.085, 1,1,0.6);
    for (const side of [-1,1]) {
      window(group, side * w * 0.3, 0.96, d / 2 + 0.043, lit);
      window(group, side * w * 0.3, 0.96, -d / 2 - 0.043, side < 0 && lit);
    }
    if (chimney) {
      box(group, brickChimney, 0.26, 0.72, 0.26, w * 0.27, h + 0.45, -d * 0.12);
      box(group, trim, 0.34, 0.08, 0.34, w * 0.27, h + 0.82, -d * 0.12);
    }
    flowers(group,w,d);
    return group;
  }

  // Terraced village houses around the road grid.
  house({ x:-6.38,z:-4.28,w:2.18,d:2.15,wall:0xe5d6bd,roofColor:0x8b6a58 });
  house({ x:-6.38,z:2.04,w:2.12,d:1.95,wall:0xb9bfa6,roofColor:0x7d705f });
  house({ x:-0.9,z:-4.15,w:2.22,d:2.22,wall:0xd8a587,roofColor:0x715c56 });
  house({ x:-0.84,z:2.2,w:2.18,d:1.97,wall:0xe8d5a7,roofColor:0x8d5b4b });
  house({ x:2.22,z:-4.2,w:2.06,d:2.06,wall:0xc9c7ad,roofColor:0x687878 });
  house({ x:2.2,z:2.63,w:2.17,d:2.2,wall:0xd6bb9e,roofColor:0x815e53 });
  house({ x:-10.75,z:2.18,w:1.9,d:1.85,h:1.42,wall:0xe5d9c4,roofColor:0x816b5a });

  // Church and tower anchor the western end of town.
  const church = new THREE.Group();
  church.position.set(-10.76,0.12,-4.15);
  scene.add(church);
  box(church, mat(0xd7c9aa), 2.55, 1.72, 2.5, 0, 0.98, 0, true);
  roof(church,2.55,2.5,1.84,0.72,mat(0x697479,{ side: THREE.DoubleSide }));
  box(church, mat(0xc8bda4), 0.98, 2.55, 0.95, 0, 1.34, 1.23, true);
  box(church, door, 0.48, 0.91, 0.06, 0, 0.59, 1.74);
  for (const side of [-1,1]) {
    window(church, side * 0.83, 1.12, 1.29, true, 0.77);
  }
  const spire = new THREE.Mesh(new THREE.ConeGeometry(0.73,1.1,4),mat(0x5c6869));
  spire.rotation.y = Math.PI / 4;
  spire.position.set(0,3.14,1.23);
  spire.castShadow = true;
  church.add(spire);
  box(church, mat(0xbca877,{ metalness:0.3 }), 0.055, 0.48, 0.055, 0, 3.9, 1.23);
  box(church, mat(0xbca877,{ metalness:0.3 }), 0.33, 0.05, 0.055, 0, 3.98, 1.23);

  // The long station faces the platform and has a clear road approach behind it.
  const station = new THREE.Group();
  station.position.set(-3.78,0.12,4.9);
  scene.add(station);
  box(station, mat(0xb6a788), 5.16, 0.17, 2.33, 0, 0.075, 0);
  box(station, mat(0xe1cba7), 5.05, 1.63, 2.22, 0, 0.98, 0, true);
  roof(station,5.05,2.22,1.78,0.68,mat(0x7f6253,{ side: THREE.DoubleSide }));
  box(station, door, 0.6, 1.05, 0.07, 0, 0.66, 1.16);
  box(station, door, 0.62, 1.05, 0.07, 0, 0.66, -1.16);
  for (const x of [-1.8,-0.9,0.9,1.8]) {
    window(station,x,1.04,1.16,true,0.83);
    window(station,x,1.04,-1.16,true,0.83);
  }
  box(station, mat(0x5e6d5e), 5.45, 0.14, 0.88, 0, 1.37, 1.58);
  for (const x of [-2.32,0,2.32]) cylinder(station, mat(0xe9e3ca), 0.055,0.065,1.23,x,0.73,1.95,8);
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.74,0.38), new THREE.MeshBasicMaterial({ map: signTexture('WILLOWMERE'), transparent:true }));
  sign.position.set(0,1.65,1.177);
  station.add(sign);
  const clockFace = new THREE.Mesh(new THREE.CircleGeometry(0.16,20),new THREE.MeshBasicMaterial({ color:0xf2ebd5 }));
  clockFace.position.set(0,2.14,1.04);
  station.add(clockFace);
  box(station, mat(0x465552), 0.018,0.1,0.01,0,2.16,1.052,false);
  box(station, mat(0x465552), 0.075,0.018,0.01,0.03,2.13,1.052,false);

  const platform = new THREE.Group();
  scene.add(platform);
  box(platform, mat(0xb5aa91), 8.0, 0.18, 1.35, -3.75,0.26,6.89);
  box(platform, mat(0xe0d3b3), 8.0, 0.04, 0.14, -3.75,0.37,7.5,false);
  for (const x of [-7.25,-0.3]) {
    box(platform, mat(0x556461),0.09,0.86,0.09,x,0.8,6.67);
    box(platform, mat(0x556461),0.6,0.43,0.035,x,1.17,6.67);
  }
  const benchWood = mat(0x806654);
  const benchMetal = mat(0x4c5d5b);
  for (const x of [-6.45,-1.25]) {
    box(platform,benchWood,0.78,0.09,0.23,x,0.58,6.93);
    box(platform,benchWood,0.78,0.32,0.07,x,0.77,7.04);
    for (const side of [-0.3,0.3]) box(platform,benchMetal,0.055,0.3,0.055,x+side,0.43,6.93);
  }

  // Mill, barn and cultivated eastern bank.
  house({ x:9.35,z:-4.12,w:2.52,d:2.46,h:1.85,wall:0xc8b899,roofColor:0x746658 });
  box(scene,mat(0x9b694f),2.88,0.78,2.72,9.35,0.52,3.46,true);
  const barn = new THREE.Group();
  barn.position.set(9.35,0.12,3.46);
  scene.add(barn);
  roof(barn,2.88,2.72,0.79,0.9,mat(0x685b51,{ side:THREE.DoubleSide }));
  box(barn,mat(0xe1cfb2),0.91,0.78,0.07,0,0.44,1.41);
  box(barn,mat(0x6d5b4c),0.075,0.78,0.08,0,0.44,1.45);
  box(barn,mat(0x6d5b4c),0.91,0.07,0.08,0,0.44,1.45);

  const wheel = new THREE.Group();
  wheel.position.set(7.5,0.37,-4.1);
  scene.add(wheel);
  const wheelMat = mat(0x684b3a);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.54,0.078,7,16),wheelMat);
  ring.castShadow = true;
  wheel.add(ring);
  cylinder(wheel,wheelMat,0.12,0.12,0.16,0,0,0,10).rotation.x = Math.PI / 2;
  for (let i=0;i<8;i++) {
    const a=i*Math.PI/4;
    const spoke=box(wheel,wheelMat,0.7,0.055,0.075,0,0,0);
    spoke.rotation.z=a;
  }

  // A fenced kitchen garden and the mill's small orchard fill the east bank.
  const soil = mat(0x8a795d);
  box(scene,soil,1.43,0.02,2.15,11.58,0.139,3.5,false);
  const crop = mat(0x799055);
  for (let row=0;row<3;row++) for (let col=0;col<6;col++) {
    orb(scene,crop,0.1,11.08+row*0.49,0.24,2.68+col*0.34,1.1,0.5,0.65,0);
  }
  const fence = mat(0xddd0ae);
  for (const x of [10.8,12.36]) for (let z=2.3;z<=4.75;z+=0.55) box(scene,fence,0.055,0.42,0.055,x,0.33,z);
  for (const z of [2.3,4.75]) for (let x=10.8;x<=12.4;x+=0.52) box(scene,fence,0.055,0.42,0.055,x,0.33,z);
  for (const x of [10.8,12.36]) for (const y of [0.25,0.42]) box(scene,fence,0.045,0.045,2.48,x,y,3.53);
  for (const z of [2.3,4.75]) for (const y of [0.25,0.42]) box(scene,fence,1.59,0.045,0.045,11.58,y,z);

  // Crates and a market canopy make the square feel occupied at model scale.
  const stall = new THREE.Group();
  stall.position.set(-6.0,0.16,0.88);
  scene.add(stall);
  for (const x of [-0.65,0.65]) for (const z of [-0.35,0.35]) box(stall,mat(0x765a46),0.065,1.26,0.065,x,0.62,z);
  box(stall,mat(0xd7c3a5),1.54,0.08,0.95,0,1.27,0);
  for (let i=0;i<5;i++) box(stall,mat(i%2?0xd3b390:0xa06b57),0.29,0.012,0.96,-0.58+i*0.29,1.32,0,false);
  box(stall,mat(0x8b684f),1.35,0.15,0.58,0,0.57,0);
  for (let i=0;i<7;i++) orb(stall,flowerMats[i%3],0.065,-0.5+i*0.17,0.69,0,1,0.75,1,0);
}

function createTreesAndDetails(scene, lamps, bulbMat) {
  const trunks = mat(0x68513d);
  const foliage = [mat(0x708c5e),mat(0x86a06a),mat(0x6e895e),mat(0x99aa75)];
  const shrub = mat(0x64835c);
  const rocks = mat(0xaaa899);
  const lampMetal = mat(0x425451,{ metalness:0.18,roughness:0.6 });
  let seed = 73183;
  const rand = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };

  function tree(x,z,scale=1,index=0) {
    const y = Math.max(terrainHeight(x,z),0.115);
    cylinder(scene,trunks,0.09*scale,0.14*scale,1.14*scale,x,y+0.57*scale,z,7);
    orb(scene,foliage[index%foliage.length],0.72*scale,x,y+1.48*scale,z,1.05,0.83,0.98,1);
    orb(scene,foliage[(index+1)%foliage.length],0.48*scale,x-0.28*scale,y+1.69*scale,z+0.13*scale,1,0.81,0.9,1);
    orb(scene,foliage[(index+2)%foliage.length],0.44*scale,x+0.33*scale,y+1.59*scale,z-0.13*scale,0.9,0.9,1,1);
  }

  const fixed = [[-14.7,-6.1,.9],[-14.65,2.8,.9],[-11.8,-6.4,.83],[-6.3,-6.15,.82],[-2.4,-6.15,.82],[2.4,-6.15,.8],[9.2,-6.15,.95],[11.2,-5.5,.9],[-11.6,5.3,.9],[-7.4,5.1,.74],[0.4,5.35,.79],[2.5,5.3,.82],[8.0,5.5,.9],[11.6,5.6,.9],[10.9,-2.1,.65],[-10.8,-1.75,.72]];
  fixed.forEach(([x,z,s],i)=>tree(x,z,s,i));
  for (let i=0;i<38;i++) {
    const x=-12.4+rand()*24.6;
    const z=-6.6+rand()*13.1;
    if (Math.abs(x-riverX(z))<2.05) continue;
    if (Math.abs(z+0.6)<1.45 || Math.abs(x+3.7)<1.6 || Math.abs(x+8.8)<0.9 || Math.abs(x-9.4)<0.95) continue;
    if (x>-12.2&&x<-9.0&&z>-5.8&&z<-2.4) continue;
    if (x>-7.8&&x<-5.1&&((z>-5.5&&z<-2.7)||(z>0.8&&z<3.6))) continue;
    if (x>-2.1&&x<3.5&&((z>-5.5&&z<-2.7)||(z>0.8&&z<4.1))) continue;
    if (x>7.8&&x<12.5&&((z>-5.5&&z<-2.6)||(z>2.0&&z<4.8))) continue;
    tree(x,z,0.55+rand()*0.35,i+16);
  }

  for (let i=0;i<54;i++) {
    const z=-9.8+rand()*19.5;
    const side=rand()<0.5?-1:1;
    if (Math.abs(z+0.6)<1.5 || Math.abs(Math.abs(z)-8.1)<1.25) continue;
    const x=riverX(z)+side*(1.72+rand()*0.45);
    orb(scene,shrub,0.18+rand()*0.1,x,0.19,z,1.4,0.65,1.0,0);
  }
  for (let i=0;i<38;i++) {
    const x=-12.7+rand()*25.4;
    const z=-6.9+rand()*13.8;
    if (Math.abs(x-riverX(z))<1.75 || Math.abs(z+0.6)<1.15) continue;
    orb(scene,rocks,0.07+rand()*0.05,x,0.14,z,1.6,0.45,1,0);
  }

  function streetlamp(x,z,rotation=0) {
    const group = new THREE.Group();
    group.position.set(x,0.13,z);
    group.rotation.y=rotation;
    scene.add(group);
    cylinder(group,lampMetal,0.06,0.09,1.58,0,0.79,0,8);
    box(group,lampMetal,0.18,0.055,0.18,0,1.59,0);
    const lantern=box(group,bulbMat,0.22,0.3,0.22,0,1.79,0,false);
    lantern.castShadow=false;
    const cap=new THREE.Mesh(new THREE.ConeGeometry(0.19,0.18,4),lampMetal);
    cap.rotation.y=Math.PI/4;
    cap.position.y=2.03;
    group.add(cap);
    const light=new THREE.PointLight(0xffcf8d,0,4.6,2);
    light.position.set(x,2.0,z);
    scene.add(light);
    lamps.push(light);
  }
  [[-7.6,-0.95],[-5.1,-0.95],[-2.3,-0.95],[0.95,-0.96],[-4.55,-3.2],[-4.52,1.66],[-6.95,6.9],[-0.72,6.9],[8.1,-0.96],[10.75,-0.96]].forEach(([x,z])=>streetlamp(x,z));

  // Telegraph poles and a few benches frame the railway without obstructing it.
  for (const [x,z] of [[-11.0,9.55],[-1.6,9.55],[10.1,9.55],[-11.5,-9.5],[0.3,-9.5],[10.5,-9.5]]) {
    cylinder(scene,trunks,0.045,0.065,1.38,x,0.82,z,7);
    box(scene,trunks,0.62,0.06,0.07,x,1.32,z);
    for (const side of [-0.23,0.23]) orb(scene,rocks,0.045,x+side,1.32,z,1,1,1,0);
  }
}

export function createWorld(scene) {
  scene.background = new THREE.Color(0xede6d8);
  const hemi = new THREE.HemisphereLight(0xffedcf,0x6d806e,2.05);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffd8a4,3.1);
  sun.position.set(-13,22,17);
  sun.castShadow=true;
  sun.shadow.mapSize.set(1024,1024);
  sun.shadow.camera.left=-23;
  sun.shadow.camera.right=23;
  sun.shadow.camera.top=23;
  sun.shadow.camera.bottom=-23;
  sun.shadow.camera.near=1;
  sun.shadow.camera.far=60;
  sun.shadow.bias=-0.0002;
  sun.shadow.normalBias=0.026;
  sun.shadow.radius=2;
  scene.add(sun);

  const litGlass=mat(0xb1c1ae,{ emissive:0xffd68e,emissiveIntensity:0.05,roughness:0.3 });
  const bulbMat=mat(0xe7d5a1,{ emissive:0xffc77d,emissiveIntensity:0.1,roughness:0.25 });
  const lamps=[];
  createBase(scene);
  createTerrain(scene);
  createRiver(scene);
  createRoads(scene);
  createRailway(scene);
  createArchitecture(scene,litGlass);
  createTreesAndDetails(scene,lamps,bulbMat);

  const stationLight=new THREE.PointLight(0xffc583,0,6.5,2);
  stationLight.position.set(-3.8,2.35,5.6);
  scene.add(stationLight);
  lamps.push(stationLight);

  function setNight(night) {
    scene.background.set(night?0x243648:0xede6d8);
    hemi.color.set(night?0xaabbd5:0xffedcf);
    hemi.groundColor.set(night?0x526276:0x6d806e);
    hemi.intensity=night?0.85:2.05;
    sun.color.set(night?0xa5b9d4:0xffd8a4);
    sun.intensity=night?1.1:3.1;
    litGlass.emissiveIntensity=night?2.0:0.05;
    bulbMat.emissiveIntensity=night?2.8:0.1;
    for (const lamp of lamps) lamp.intensity=night?3.0:0;
  }

  return { setNight };
}
