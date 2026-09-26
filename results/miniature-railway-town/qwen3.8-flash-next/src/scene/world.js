import * as THREE from 'three';
import { buildBase, buildTable } from './base.js';
import { buildTerrain, buildWater } from './terrain.js';
import { buildTrack, buildBridge, buildFootbridge } from './track.js';
import { buildRoads } from './roads.js';
import { buildTown, poseSignals } from './town.js';
import { Train } from './train.js';
import { createLighting, applyNight, PRESETS } from './lighting.js';
import { POND, groundHeight, TRACK_LEN } from './layout.js';
import { makeRng } from '../util/mathx.js';

/**
 * Assembles the diorama and keeps the moving parts in one update call.
 */
export function createWorld(scene, renderer) {
  const registry = { nightGlow: [], nightPools: [], boats: [] };

  const stand = buildBase();
  scene.add(stand.group);
  scene.add(buildTable());

  const terrain = buildTerrain();
  scene.add(terrain.mesh);
  const water = buildWater();
  scene.add(water.mesh);

  const roads = buildRoads();
  scene.add(roads.group);

  const track = buildTrack();
  scene.add(track.group);
  const bridge = buildBridge();
  scene.add(bridge.group);

  // a footbridge where Pond Walk crosses the mill channel
  const fbx = -8.05, fbz = -0.55;
  scene.add(buildFootbridge(fbx, fbz, Math.atan2(POND.x - fbx, POND.z - fbz) + Math.PI / 2));

  const town = buildTown(registry);
  scene.add(town.group);

  const train = new Train(registry);
  scene.add(train.group);

  const lighting = createLighting(scene, renderer);
  lighting.setPreset('dusk', true);

  // the crossing gate lamp glows from the track module
  const crossing = track.group.getObjectByName('level-crossing');
  if (crossing?.userData.glow) {
    for (const m of crossing.userData.glow) registry.nightGlow.push({ mat: m, level: 2.4 });
  }

  const waterMap = water.material.map;
  const rnd = makeRng(7);
  const reeds = town.group.getObjectByName('reeds');
  void reeds;

  return {
    train,
    lighting,
    registry,
    signals: town.signals,
    materials: { water: water.material, terrain: terrain.material },
    bounds: { length: TRACK_LEN },

    /** @param dt real seconds @param simDt simulated seconds (0 while paused) */
    update(dt, simDt, elapsed) {
      lighting.update(dt);
      applyNight(registry, lighting.nightFactor, water.material);

      if (waterMap) {
        waterMap.offset.y -= simDt * 0.014;
        waterMap.offset.x += simDt * 0.004;
        waterMap.needsUpdate = false;
      }
      for (const boat of registry.boats) {
        boat.group.position.y = -0.34 + 0.014 + Math.sin(elapsed * 0.9 + boat.phase) * 0.012;
        boat.group.rotation.z = Math.sin(elapsed * 0.7 + boat.phase) * 0.035;
        boat.group.rotation.x = Math.cos(elapsed * 0.55 + boat.phase) * 0.025;
      }
      poseSignals(town.signals, train.s ?? 0, train.dwelling);
      train.advance(simDt);
    },
    setPreset(name) { lighting.setPreset(name); },
  };
}

export { PRESETS, groundHeight };
