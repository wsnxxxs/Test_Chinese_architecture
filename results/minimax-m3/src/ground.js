/**
 * Ground & courtyard paving.
 * Returns { meshes, blockCount }.
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { COLORS } from './voxel.js';

const WORLD_HALF = 35;   // half-width of the ground plane (m)
const PATH_W = 4;        // main path width

export function buildGround(scene) {
  const boxes = [];
  const add = (x, z, color) => {
    const g = new THREE.BoxGeometry(1, 0.1, 1);
    g.translate(x + 0.5, 0, z + 0.5);
    g.userData = { color };
    boxes.push(g);
  };

  // grass base (with slight noise via color variation)
  for (let x = -WORLD_HALF; x < WORLD_HALF; x++) {
    for (let z = -WORLD_HALF; z < WORLD_HALF; z++) {
      // checker-ish variation: deterministic
      const v = ((x * 31 + z * 17) & 7);
      const color = v === 0 ? COLORS.greenDark : COLORS.green;
      add(x, z, color);
    }
  }

  // main central path: from gate through main hall, z from -30 to 12
  for (let z = -30; z <= 12; z++) {
    for (let x = -PATH_W / 2 | 0; x < (PATH_W / 2 | 0) + (PATH_W % 2); x++) {
      add(x, z, COLORS.path);
    }
  }

  // path in front of gate (wider fan)
  for (let x = -6; x < 6; x++) {
    for (let z = -36; z < -30; z++) {
      add(x, z, COLORS.path);
    }
  }

  // courtyard paving around main hall
  for (let x = -10; x < 10; x++) {
    for (let z = -5; z < 12; z++) {
      // skip the central path area
      if (x >= -PATH_W / 2 | 0 && x < (PATH_W / 2 | 0) + (PATH_W % 2)) continue;
      add(x, z, COLORS.gray);
    }
  }

  // side courtyard around side halls (two separate squares)
  // left
  for (let x = -22; x < -10; x++) {
    for (let z = -3; z < 12; z++) {
      add(x, z, COLORS.gray);
    }
  }
  // right
  for (let x = 10; x < 22; x++) {
    for (let z = -3; z < 12; z++) {
      add(x, z, COLORS.gray);
    }
  }

  // small path connecting side halls to main hall
  for (let z = 5; z <= 8; z++) {
    add(-9, z, COLORS.path);
    add(-10, z, COLORS.path);
    add(9, z, COLORS.path);
    add(10, z, COLORS.path);
  }

  // merge by color
  const byColor = new Map();
  for (const g of boxes) {
    const c = g.userData.color;
    if (!byColor.has(c)) byColor.set(c, []);
    byColor.get(c).push(g);
  }
  const meshes = [];
  let blockCount = 0;
  for (const [color, geos] of byColor) {
    const merged = mergeGeometries(geos, false);
    if (!merged) continue;
    const mat = new THREE.MeshLambertMaterial({ color, flatShading: true });
    const mesh = new THREE.Mesh(merged, mat);
    mesh.receiveShadow = true;
    mesh.castShadow = false;
    meshes.push(mesh);
    blockCount += geos.length;
    for (const g of geos) g.dispose();
  }

  for (const m of meshes) scene.add(m);
  return { blockCount };
}