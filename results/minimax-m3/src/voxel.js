/**
 * Voxel builder utilities.
 * Each "voxel" is a 1x1x1 box. We build geometry as a list of per-color cubes,
 * then merge them per material to keep draw calls low.
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const COLORS = {
  red: 0xc8392f,        // walls, pillars (deeper red)
  redLight: 0xd8554a,   // lighter red highlight
  wood: 0x6b4423,       // dark timber
  woodLight: 0x9a6b3f,  // timber planks
  tile: 0x1e6091,       // glazed tile blue-green
  tileRidge: 0x2d7fa8,  // ridge highlight
  tileYellow: 0xd4a017, // imperial yellow (reserved)
  white: 0xe8dcc4,      // stone base / marble
  gray: 0x8a857a,       // pavement
  dark: 0x2a2622,       // dark wood / shadow
  gold: 0xd4a017,       // lantern gold
  lantern: 0xff3b30,    // lantern red
  green: 0x4a7c4a,      // grass
  greenDark: 0x3a5c3a,  // grass shadow
  path: 0x9c8a6f,       // courtyard paving
  window: 0x2a2018,     // window dark
};

// cube of size 1, centered at origin, axis-aligned
function makeCube() {
  return new THREE.BoxGeometry(1, 1, 1);
}

/**
 * Add a voxel at integer grid (x, y, z) where each unit = 1m.
 * y=0 is the ground top.
 */
function addVoxel(boxes, x, y, z, color) {
  const g = makeCube();
  g.translate(x + 0.5, y + 0.5, z + 0.5);
  g.userData = { color };
  boxes.push(g);
}

/**
 * Fill a rectangular solid [x0,x1) x [y0,y1) x [z0,z1)
 */
export function fill(boxes, x0, y0, z0, x1, y1, z1, color) {
  for (let x = x0; x < x1; x++)
    for (let y = y0; y < y1; y++)
      for (let z = z0; z < z1; z++)
        addVoxel(boxes, x, y, z, color);
}

/**
 * Hollow shell: walls of a rectangular box (no floor, no ceiling)
 */
export function hollowBox(boxes, x0, y0, z0, x1, y1, z1, color) {
  for (let x = x0; x < x1; x++)
    for (let z = z0; z < z1; z++) {
      addVoxel(boxes, x, y0, z, color);
      addVoxel(boxes, x, y1 - 1, z, color);
    }
  for (let y = y0; y < y1; y++)
    for (let x = x0; x < x1; x++) {
      addVoxel(boxes, x, y, z0, color);
      addVoxel(boxes, x, y, z1 - 1, color);
    }
  for (let y = y0; y < y1; y++)
    for (let z = z0; z < z1; z++) {
      addVoxel(boxes, x0, y, z, color);
      addVoxel(boxes, x1 - 1, y, z, color);
    }
}

/**
 * Merge per-color. Returns { meshes: Mesh[], blockCount }.
 * Uses a shared lambert material per color so shadows render correctly.
 */
export function build(boxes) {
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
    merged.computeBoundingBox();
    merged.computeBoundingSphere();
    const mat = new THREE.MeshLambertMaterial({
      color,
      flatShading: true,
    });
    const mesh = new THREE.Mesh(merged, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    meshes.push(mesh);
    blockCount += geos.length;
    // free source geos
    for (const g of geos) g.dispose();
  }
  return { meshes, blockCount };
}

/** Make a small beveled cube for lanterns etc (slightly inset look). */
export function smallBlock(boxes, x, y, z, w, h, d, color) {
  fill(boxes, x, y, z, x + w, y + h, z + d, color);
}