/**
 * The physical sandbox: wooden plinth and frame, grass terrain modelled as a
 * height field that dips into a river channel, plus the water itself.
 */
import * as THREE from 'three';
import { worldUVBox, stripAlongPath, clamp } from './geom.js';
import { makeSignTexture } from './textures.js';

const FRAME_T = 1.6;
const WALL_TOP = 0.95;
const WALL_BOTTOM = -0.75;
const FRAME_H = WALL_TOP - WALL_BOTTOM;
const SLAB_H = 0.5;
/** Half width of the water ribbon; matches RIVER_HALF_WIDTH in layout.js. */
const WATER_HALF = 1.5;
/** Top of the water, chosen so it meets the bank exactly. */
const WATER_Y = -0.07;
/** Channel depth below the terrain rim. */
const CHANNEL_DEPTH = 0.42;

/**
 * Smooth basin profile: a flat channel floor for the water, then a bank that
 * climbs back to the rim. The bank is steep enough that it crosses the water
 * surface exactly at WATER_HALF, so the water edge meets the shore instead of
 * standing proud of it as a lip.
 */
export function channelProfile(r) {
  const floor = 1.15;
  const bank = 0.47;
  const depth = -CHANNEL_DEPTH;
  if (r <= floor) return depth;
  if (r >= floor + bank) return 0;
  const t = (r - floor) / bank;
  return depth + CHANNEL_DEPTH * (t * t * (3 - 2 * t));
}

export function buildBase(M, layout) {
  const group = new THREE.Group();
  group.name = 'sandbox-base';
  const H = layout.TERRAIN_HALF ?? { x: layout.TERRAIN.w / 2, z: layout.TERRAIN.d / 2 };

  // ---- terrain height field --------------------------------------------
  const riverPts = [];
  for (let i = 0; i <= layout.river.samples; i += 2) riverPts.push(layout.river.pts[i]);
  const terrainHeight = (x, z) => {
    let r = Infinity;
    for (const p of riverPts) {
      const dx = p.x - x;
      const dz = p.z - z;
      const d2 = dx * dx + dz * dz;
      if (d2 < r) r = d2;
    }
    return channelProfile(Math.sqrt(r));
  };

  const step = 0.4;
  const nx = Math.round(layout.TERRAIN.w / step) + 1;
  const nz = Math.round(layout.TERRAIN.d / step) + 1;
  const positions = [];
  const colors = [];
  const uvs = [];
  const indices = [];
  const sand = new THREE.Color(0xc9b58c);
  const wet = new THREE.Color(0x8d7f5e);
  const grass = new THREE.Color(0xffffff);
  const tmp = new THREE.Color();
  for (let iz = 0; iz < nz; iz++) {
    for (let ix = 0; ix < nx; ix++) {
      const x = -H.x + ix * step;
      const z = -H.z + iz * step;
      const y = terrainHeight(x, z);
      positions.push(x, y, z);
      uvs.push((x + H.x) / 2.6, (z + H.z) / 2.6);
      // Sandy shore just outside the water line, then a darker wet band.
      let r = Infinity;
      for (const p of riverPts) {
        const dx = p.x - x;
        const dz = p.z - z;
        const d2 = dx * dx + dz * dz;
        if (d2 < r) r = d2;
      }
      r = Math.sqrt(r);
      const beach = 1 - clamp((r - WATER_HALF - 0.05) / 0.7, 0, 1);
      const damp = 1 - clamp((r - WATER_HALF) / 0.28, 0, 1);
      tmp.copy(grass).lerp(sand, beach * beach * 0.85).lerp(wet, damp * 0.5);
      colors.push(tmp.r, tmp.g, tmp.b);
    }
  }
  for (let iz = 0; iz < nz - 1; iz++) {
    for (let ix = 0; ix < nx - 1; ix++) {
      const a = iz * nx + ix;
      const b = a + 1;
      const c = a + nx;
      const d = c + 1;
      indices.push(a, c, b, b, c, d);
    }
  }
  const terrainGeo = new THREE.BufferGeometry();
  terrainGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  terrainGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  terrainGeo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  terrainGeo.setIndex(indices);
  terrainGeo.computeVertexNormals();
  const grassMat = M.grass.clone();
  grassMat.vertexColors = true;
  const terrain = new THREE.Mesh(terrainGeo, grassMat);
  terrain.receiveShadow = true;
  terrain.name = 'terrain';
  group.add(terrain);

  // Soil skirt under the grass so the diorama has an earthy edge. Its top face
  // stays below the channel floor, otherwise it would lid the river with a flat
  // brown plane and hide the water completely.
  const soil = new THREE.Mesh(
    worldUVBox(layout.TERRAIN.w + 0.4, 0.42, layout.TERRAIN.d + 0.4, 2),
    M.soil,
  );
  soil.position.y = -CHANNEL_DEPTH - 0.04 - 0.21;
  soil.receiveShadow = true;
  group.add(soil);

  // ---- wooden frame ----------------------------------------------------
  const outerW = layout.TERRAIN.w + FRAME_T * 2;
  const outerD = layout.TERRAIN.d + FRAME_T * 2;
  const wallY = (WALL_TOP + WALL_BOTTOM) / 2;

  const wall = (w, d, x, z) => {
    const m = new THREE.Mesh(worldUVBox(w, FRAME_H, d, 3.2), M.frame);
    m.position.set(x, wallY, z);
    m.castShadow = true;
    m.receiveShadow = true;
    group.add(m);
  };
  wall(outerW, FRAME_T, 0, -(H.z + FRAME_T / 2));
  wall(outerW, FRAME_T, 0, H.z + FRAME_T / 2);
  wall(FRAME_T, layout.TERRAIN.d, -(H.x + FRAME_T / 2), 0);
  wall(FRAME_T, layout.TERRAIN.d, H.x + FRAME_T / 2, 0);

  // Plinth slab under the rim.
  const slab = new THREE.Mesh(worldUVBox(outerW, SLAB_H, outerD, 4), M.base);
  slab.position.y = WALL_BOTTOM - SLAB_H / 2;
  slab.castShadow = true;
  slab.receiveShadow = true;
  group.add(slab);

  // Capping boards with a slight overhang.
  const capH = 0.24;
  const capY = WALL_TOP + capH / 2;
  const capT = 2.4;
  const capInset = FRAME_T - 0.45;
  const cap = (w, d, x, z) => {
    const m = new THREE.Mesh(worldUVBox(w, capH, d, 3.2), M.frameDark);
    m.position.set(x, capY, z);
    m.castShadow = true;
    m.receiveShadow = true;
    group.add(m);
  };
  cap(outerW + 0.7, capT, 0, -(H.z + capInset));
  cap(outerW + 0.7, capT, 0, H.z + capInset);
  cap(capT, layout.TERRAIN.d + 0.7, -(H.x + capInset), 0);
  cap(capT, layout.TERRAIN.d + 0.7, H.x + capInset, 0);

  // Nameplate on the front rim.
  const signTex = makeSignTexture([layout.TOWN_NAME], { bg: '#7b3a1e', fg: '#f6e7cf', sub: 'RAILWAY DIORAMA' });
  const signMat = new THREE.MeshStandardMaterial({ map: signTex, roughness: 0.6, metalness: 0.1 });
  const signBack = new THREE.Mesh(worldUVBox(6.4, 1.5, 0.14, 0.5), M.frameDark);
  signBack.position.set(0, 0.5, H.z + FRAME_T + 0.02);
  group.add(signBack);
  const signFace = new THREE.Mesh(new THREE.BoxGeometry(6.0, 1.3, 0.1), signMat);
  signFace.position.set(0, 0.5, H.z + FRAME_T + 0.09);
  group.add(signFace);
  for (const sx of [-3.2, 3.2]) {
    const stud = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.22, 0.14), M.brass);
    stud.position.set(sx, 0.5, H.z + FRAME_T + 0.13);
    group.add(stud);
  }

  // ---- river -----------------------------------------------------------
  const riverLen = layout.river.length;
  // The channel lining, a trough a little deeper than the terrain floor so the
  // bed reads through the water.
  const bed = new THREE.Mesh(
    stripAlongPath(layout.river, 0, riverLen, {
      lateral: 0, width: 3.5, y0: -0.5, y1: -0.28, step: 0.3, caps: true,
    }),
    M.riverBed,
  );
  bed.receiveShadow = true;
  group.add(bed);

  // Water: a flat surface whose side walls run down into the bank, so the edge
  // lands exactly on the shore instead of floating or standing proud of it.
  const waterGeo = stripAlongPath(layout.river, 0, riverLen, {
    lateral: 0, width: WATER_HALF * 2, y0: -0.6, y1: WATER_Y, step: 0.25, caps: true,
  });
  const water = new THREE.Mesh(waterGeo, M.water);
  water.name = 'river';
  group.add(water);

  // Shoreline foam band, following the channel just outside the water.
  for (const side of [-1, 1]) {
    const foam = new THREE.Mesh(
      stripAlongPath(layout.river, 0, riverLen, {
        lateral: side * 2.15, width: 0.5, y0: -0.3, y1: 0.02, step: 0.3, caps: true,
      }),
      M.foam,
    );
    group.add(foam);
  }

  return { group, terrain, water };
}
