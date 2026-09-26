/**
 * 植被与散布元素：树（实例化，三种绿 × 阔叶/针叶）、灌木、石头、芦苇。
 * 全部走 InstancedMesh，保证大量元素下依旧流畅。
 */
import * as THREE from 'three';
import { TREES, RIVERSIDE_TREES, BUSHES, ROCKS, REEDS } from '../layout.js';

const dummy = new THREE.Object3D();

function makeInstanced(geo, mat, matrices, { castShadow = true, receiveShadow = true } = {}) {
  if (!matrices.length) return null;
  const mesh = new THREE.InstancedMesh(geo, mat, matrices.length);
  for (let i = 0; i < matrices.length; i++) mesh.setMatrixAt(i, matrices[i]);
  mesh.instanceMatrix.needsUpdate = true;
  mesh.castShadow = castShadow;
  mesh.receiveShadow = receiveShadow;
  mesh.frustumCulled = true;
  return mesh;
}

function matrixAt(x, y, z, { sx = 1, sy = 1, sz = 1, rotY = 0, rotX = 0, rotZ = 0 } = {}) {
  dummy.position.set(x, y, z);
  dummy.rotation.set(rotX, rotY, rotZ);
  dummy.scale.set(sx, sy, sz);
  dummy.updateMatrix();
  return dummy.matrix.clone();
}

export function buildNature(mats) {
  const group = new THREE.Group();

  const allTrees = [...TREES, ...RIVERSIDE_TREES];
  const trunkMatrices = [];
  const blobs = [[], [], []]; // 下层树冠（三种绿）
  const blobsTop = [[], [], []]; // 上层树冠
  const cones = [[], [], []]; // 针叶
  const coneTops = [[], [], []];

  for (const [x, z, r] of allTrees) {
    const isConifer = r > 0.74;
    const s = isConifer ? 0.75 + r * 0.35 : 0.8 + r * 0.5;
    const v = Math.floor(r * 3) % 3;
    const trunkH = 1.5 * s;
    trunkMatrices.push(matrixAt(x, trunkH / 2, z, { sx: s, sy: s, sz: s, rotY: r * 6.28 }));

    if (isConifer) {
      cones[v].push(
        matrixAt(x, trunkH * 0.85, z, { sx: 1.05 * s, sy: 1.25 * s, sz: 1.05 * s, rotY: r * 3.1 })
      );
      coneTops[v].push(
        matrixAt(x, trunkH * 0.85 + 1.0 * s, z, { sx: 0.7 * s, sy: 0.95 * s, sz: 0.7 * s, rotY: r * 5.1 })
      );
    } else {
      const rad = (0.68 + ((r * 0.6) % 0.32)) * s;
      blobs[v].push(matrixAt(x, trunkH + rad * 0.75, z, { sx: rad, sy: rad * 0.92, sz: rad, rotY: r * 6.28 }));
      blobsTop[v].push(
        matrixAt(x + (r - 0.5) * 0.3, trunkH + rad * 1.5, z + (0.5 - r) * 0.3, {
          sx: rad * 0.7,
          sy: rad * 0.64,
          sz: rad * 0.7,
          rotY: r * 4.2,
        })
      );
    }
  }

  const trunkGeo = new THREE.CylinderGeometry(0.14, 0.2, 1.5, 7);
  trunkGeo.translate(0, 0.75, 0);
  const trunkMesh = makeInstanced(trunkGeo, mats.m.trunk, trunkMatrices);
  if (trunkMesh) group.add(trunkMesh);

  const leafGeo = new THREE.IcosahedronGeometry(1, 1);
  const leafMats = [mats.m.leafA, mats.m.leafB, mats.m.leafC];
  for (let v = 0; v < 3; v++) {
    const a = makeInstanced(leafGeo, leafMats[v], blobs[v]);
    const b = makeInstanced(leafGeo, leafMats[v], blobsTop[v]);
    if (a) group.add(a);
    if (b) group.add(b);
  }

  const coneGeo = new THREE.ConeGeometry(1, 1.8, 9);
  coneGeo.translate(0, 0.9, 0);
  for (let v = 0; v < 3; v++) {
    const a = makeInstanced(coneGeo, leafMats[v], cones[v]);
    const b = makeInstanced(coneGeo, leafMats[v], coneTops[v]);
    if (a) group.add(a);
    if (b) group.add(b);
  }

  // —— 灌木 ——
  const bushMatrices = [];
  const bushMatrices2 = [];
  for (const [x, z, r] of BUSHES) {
    const s = 0.4 + r * 0.5;
    const m = matrixAt(x, s * 0.42, z, { sx: s, sy: s * 0.75, sz: s, rotY: r * 6.28 });
    (r > 0.5 ? bushMatrices : bushMatrices2).push(m);
  }
  const bushGeo = new THREE.IcosahedronGeometry(1, 0);
  const b1 = makeInstanced(bushGeo, mats.m.bush, bushMatrices);
  const b2 = makeInstanced(bushGeo, mats.m.leafA, bushMatrices2);
  if (b1) group.add(b1);
  if (b2) group.add(b2);

  // —— 石头 ——
  const rockMatrices = [];
  const rockMatrices2 = [];
  for (const [x, z, r] of ROCKS) {
    const s = 0.22 + r * 0.42;
    const m = matrixAt(x, s * 0.35, z, { sx: s * 1.3, sy: s * 0.8, sz: s, rotY: r * 6.28, rotZ: r * 0.4 });
    (r > 0.55 ? rockMatrices : rockMatrices2).push(m);
  }
  const rockGeo = new THREE.DodecahedronGeometry(1, 0);
  const r1 = makeInstanced(rockGeo, mats.m.rock, rockMatrices);
  const r2 = makeInstanced(rockGeo, mats.m.stone, rockMatrices2);
  if (r1) group.add(r1);
  if (r2) group.add(r2);

  // —— 芦苇（细长圆锥簇） ——
  const reedMatrices = [];
  for (const [x, z, r] of REEDS) {
    for (let k = 0; k < 3; k++) {
      const a = r * 6.28 + k * 2.1;
      const rad = 0.14 + r * 0.16;
      reedMatrices.push(
        matrixAt(x + Math.cos(a) * rad, 0, z + Math.sin(a) * rad, {
          sx: 0.06 + r * 0.03,
          sy: 0.7 + ((r * 7 + k) % 1) * 0.6,
          sz: 0.06 + r * 0.03,
          rotX: (k - 1) * 0.12,
          rotZ: (1 - k) * 0.12,
        })
      );
    }
  }
  const reedGeo = new THREE.ConeGeometry(1, 1.6, 5);
  reedGeo.translate(0, 0.8, 0);
  const reedMat = new THREE.MeshStandardMaterial({ color: '#7f9450', roughness: 0.95, flatShading: true });
  const reeds = makeInstanced(reedGeo, reedMat, reedMatrices);
  if (reeds) group.add(reeds);

  return { group };
}
