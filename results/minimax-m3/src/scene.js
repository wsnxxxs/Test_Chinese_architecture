/**
 * Compose the full palace scene: ground + buildings + lighting + sky.
 */
import * as THREE from 'three';
import { build as buildVoxels } from './voxel.js';
import { buildGround } from './ground.js';
import { setupLighting, buildSky, addLanternGlow } from './lighting.js';
import { buildMainHall } from './buildings/mainHall.js';
import { buildSideHall } from './buildings/sideHall.js';
import { buildGate } from './buildings/gate.js';
import { buildPagoda } from './buildings/pagoda.js';
import { buildBellTower } from './buildings/bellTower.js';

export function createScene(scene) {
  // ---- lighting & sky first ----
  buildSky(scene);
  const { sun } = setupLighting(scene);

  // ---- ground ----
  const groundStats = buildGround(scene);

  // ---- collect voxel boxes ----
  const boxes = [];

  // central axis buildings (south -> north):
  // 1) Gate at z=-28
  // 2) Pagoda at z=-14 (between gate and main hall)
  // 3) Main hall at z=5
  buildGate(boxes, 0, -28);
  buildPagoda(boxes, 0, -14);
  buildMainHall(boxes, 0, 5);

  // side halls flanking the main hall
  buildSideHall(boxes, -16, 5);   // left (west)
  buildSideHall(boxes, 16, 5);    // right (east)

  // bell & drum towers flanking the gate
  buildBellTower(boxes, -8, -28);
  buildBellTower(boxes, 8, -28);

  // ---- merge by color and add to scene ----
  const { meshes, blockCount } = buildVoxels(boxes);
  for (const m of meshes) scene.add(m);

  // ---- lantern point lights for warmth (a few key spots) ----
  addLanternGlow(scene, 0, 8, 4);   // main hall front
  addLanternGlow(scene, 0, 8, 6);
  addLanternGlow(scene, 0, 6, -28); // gate lantern
  addLanternGlow(scene, -1, 6, -28);

  // update sun shadow camera now that we know scene extents
  sun.shadow.camera.left = -45;
  sun.shadow.camera.right = 45;
  sun.shadow.camera.top = 45;
  sun.shadow.camera.bottom = -45;
  sun.shadow.camera.updateProjectionMatrix();

  return { blockCount: blockCount + groundStats.blockCount };
}