/**
 * 地形：桌面木底座 + 边框、可起伏的地面（河道下切）、水面、道路网、耕地。
 * 对外提供 heightAt(x,z)，所有建筑/树木/道具都贴着它摆放。
 */
import * as THREE from 'three';
import {
  BOARD,
  RIVER_LINE,
  RIVER,
  HILLS,
  ROADS,
  ROAD_BRIDGE,
  PLAZA,
  TRACK_POINTS,
} from '../config.js';
import { buildRibbon, buildProfile, curve2DPoints, polylineToPoints, roundedBox } from '../lib/geo.js';
import { distanceToPolyline2D, smoothstep, lerp, makeRandom } from '../lib/util.js';
import {
  makeWoodTexture,
  makeGrassTexture,
  makeSoilTexture,
  makeRoadTexture,
  makeWaterNormalTexture,
  makePlasterTexture,
} from '../lib/textures.js';

const RIVER_SAMPLES = polylineToPoints(RIVER_LINE, 14);

function trackPolyline2D() {
  const pts = TRACK_POINTS.map((p) => [p[0], p[2]]);
  return curve2DPoints(pts, 320);
}

const TRACK_SAMPLES_2D = trackPolyline2D();

/** 地面高度：土丘 → 轨道走廊整平 → 河槽下切 */
export function heightAt(x, z) {
  let h = 0;
  for (const hill of HILLS) {
    const d2 = (x - hill.x) ** 2 + (z - hill.z) ** 2;
    const sigma = hill.r * 0.62;
    h += hill.h * Math.exp(-d2 / (2 * sigma * sigma));
  }
  const dTrack = distanceToPolyline2D(x, z, TRACK_SAMPLES_2D);
  h *= smoothstep(1.35, 2.9, dTrack);

  const dRiver = distanceToPolyline2D(x, z, RIVER_SAMPLES);
  const half = RIVER.width / 2;
  const t = dRiver / half;
  const bankT = RIVER.bankWidth / half;
  if (t < 1) {
    const floorT = smoothstep(0.42, 1.0, t);
    h = lerp(-RIVER.depth, -0.135, floorT);
  } else if (t < 1 + bankT) {
    const s = smoothstep(0, 1, (t - 1) / bankT);
    h = lerp(-0.135, h, s);
  }
  return h;
}

function buildTerrainMesh(textures) {
  const segX = 168;
  const segZ = 116;
  const geo = new THREE.PlaneGeometry(BOARD.terrainWidth, BOARD.terrainDepth, segX, segZ);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    pos.setY(i, heightAt(x, z));
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();

  const grass = textures.grass;
  grass.repeat.set(11, 7.5);
  const mat = new THREE.MeshStandardMaterial({
    map: grass,
    color: 0xb9c98e,
    roughness: 0.96,
    metalness: 0,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  mesh.castShadow = true;
  return mesh;
}

function buildPlinth(textures) {
  const group = new THREE.Group();
  const { terrainWidth: tw, terrainDepth: td, frameWidth: fw, frameHeight: fh, plinthTop, plinthHeight } = BOARD;

  const wood = textures.wood;
  wood.repeat.set(5, 2);

  // 主体木板
  const slabW = tw + fw * 2 + 0.85;
  const slabD = td + fw * 2 + 0.85;
  const slab = new THREE.Mesh(
    roundedBox(slabW, plinthHeight, slabD, 0.12, 3),
    new THREE.MeshStandardMaterial({ map: wood, color: 0xb08654, roughness: 0.72, metalness: 0.02 }),
  );
  slab.position.y = plinthTop - plinthHeight / 2;
  slab.receiveShadow = true;
  slab.castShadow = true;
  group.add(slab);

  // 边框（四条压边木条）
  const frameMat = new THREE.MeshStandardMaterial({
    map: wood,
    color: 0x7d522e,
    roughness: 0.62,
    metalness: 0.03,
  });
  const rails = [
    [0, (td + fw) / 2, tw + fw * 2, fw],
    [0, -(td + fw) / 2, tw + fw * 2, fw],
    [(tw + fw) / 2, 0, fw, td],
    [-(tw + fw) / 2, 0, fw, td],
  ];
  for (const [x, z, w, d] of rails) {
    const rail = new THREE.Mesh(roundedBox(w, fh, d, 0.1, 3), frameMat);
    rail.position.set(x, plinthTop + fh / 2, z);
    rail.castShadow = true;
    rail.receiveShadow = true;
    group.add(rail);
  }

  // 内侧压条（细节层次）
  const trimMat = new THREE.MeshStandardMaterial({ color: 0x5f3d21, roughness: 0.58 });
  const trimW = 0.14;
  const trims = [
    [0, td / 2 + trimW / 2, tw + trimW, trimW],
    [0, -td / 2 - trimW / 2, tw + trimW, trimW],
    [tw / 2 + trimW / 2, 0, trimW, td],
    [-tw / 2 - trimW / 2, 0, trimW, td],
  ];
  for (const [x, z, w, d] of trims) {
    const trim = new THREE.Mesh(new THREE.BoxGeometry(w, 0.12, d), trimMat);
    trim.position.set(x, plinthTop + fh - 0.02, z);
    trim.castShadow = true;
    group.add(trim);
  }

  return group;
}

function buildTable() {
  const geo = new THREE.PlaneGeometry(220, 220);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshStandardMaterial({ color: 0x544637, roughness: 0.95, metalness: 0 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.y = BOARD.plinthTop - BOARD.plinthHeight - 0.02;
  mesh.receiveShadow = true;
  return mesh;
}

function buildRiver(textures) {
  const group = new THREE.Group();
  const pts = curve2DPoints(RIVER_LINE, 190);
  const samples = pts.map(([x, z]) => ({
    pos: new THREE.Vector3(x, 0, z),
    tangent: new THREE.Vector3(0, 0, 1),
  }));
  // 计算切线
  for (let i = 0; i < samples.length; i++) {
    const prev = samples[Math.max(0, i - 1)].pos;
    const next = samples[Math.min(samples.length - 1, i + 1)].pos;
    samples[i].tangent.subVectors(next, prev).normalize();
  }

  // 河床（沙砾色）
  const bed = new THREE.Mesh(
    buildRibbon(samples, { width: RIVER.width + 1.35, yOffset: -RIVER.depth + 0.012, vScale: 0.32 }),
    new THREE.MeshStandardMaterial({
      map: textures.soil,
      color: 0xa08a6c,
      roughness: 0.98,
    }),
  );
  textures.soil.repeat.set(2, 12);
  bed.receiveShadow = true;
  group.add(bed);

  // 水面
  const waterNormal = textures.waterNormal;
  waterNormal.repeat.set(3, 14);
  const water = new THREE.Mesh(
    buildRibbon(samples, { width: RIVER.width + 1.05, yOffset: RIVER.waterY, vScale: 0.16 }),
    new THREE.MeshPhysicalMaterial({
      color: 0x3f92bd,
      roughness: 0.16,
      metalness: 0.05,
      transparent: true,
      opacity: 0.93,
      normalMap: waterNormal,
      normalScale: new THREE.Vector2(0.38, 0.38),
      reflectivity: 0.5,
      clearcoat: 0.5,
      clearcoatRoughness: 0.2,
    }),
  );
  water.receiveShadow = true;
  water.renderOrder = 1;
  group.add(water);

  return { group, water, waterNormal };
}

function buildRoads(textures, heightFn) {
  const group = new THREE.Group();
  const roadTex = textures.road;
  const shoulderTex = textures.soil;

  for (const road of ROADS) {
    const pts = curve2DPoints(road.points, 96);
    const samples = pts.map(([x, z], i, arr) => {
      const prev = arr[Math.max(0, i - 1)];
      const next = arr[Math.min(arr.length - 1, i + 1)];
      const tangent = new THREE.Vector3(next[0] - prev[0], 0, next[1] - prev[1]).normalize();
      return {
        pos: new THREE.Vector3(x, heightFn(x, z) + 0.032, z),
        tangent,
      };
    });

    const shoulder = new THREE.Mesh(
      buildRibbon(samples, { width: road.width * 1.32, yOffset: -0.012, vScale: 0.42 }),
      new THREE.MeshStandardMaterial({ map: shoulderTex, color: 0x8d7a5e, roughness: 0.98 }),
    );
    shoulder.receiveShadow = true;
    group.add(shoulder);

    const tex = roadTex.clone();
    tex.needsUpdate = true;
    tex.repeat.set(1, 1);
    const surface = new THREE.Mesh(
      buildRibbon(samples, { width: road.width, yOffset: 0, vScale: 0.26 }),
      new THREE.MeshStandardMaterial({ map: tex, color: 0xb9b4ab, roughness: 0.92 }),
    );
    surface.receiveShadow = true;
    group.add(surface);
  }

  return group;
}

function buildRoadBridge(textures, heightFn) {
  const group = new THREE.Group();
  const { x, z, rotY, length, width } = ROAD_BRIDGE;
  const stoneMat = new THREE.MeshStandardMaterial({
    map: textures.plaster,
    color: 0xb5a894,
    roughness: 0.92,
  });
  const g = new THREE.Group();
  g.position.set(x, heightFn(x, z) + 0.02, z);
  g.rotation.y = rotY;

  const deck = new THREE.Mesh(roundedBox(width, 0.12, length, 0.05, 2), stoneMat);
  deck.position.y = 0.06;
  deck.castShadow = true;
  deck.receiveShadow = true;
  g.add(deck);

  for (const side of [-1, 1]) {
    const parapet = new THREE.Mesh(roundedBox(0.11, 0.3, length, 0.04, 2), stoneMat);
    parapet.position.set((side * width) / 2 - side * 0.06, 0.24, 0);
    parapet.castShadow = true;
    parapet.receiveShadow = true;
    g.add(parapet);
  }
  for (const end of [-1, 1]) {
    const abut = new THREE.Mesh(roundedBox(width + 0.24, 0.42, 0.36, 0.05, 2), stoneMat);
    abut.position.set(0, -0.06, (end * length) / 2 + end * 0.16);
    abut.castShadow = true;
    abut.receiveShadow = true;
    g.add(abut);
  }
  group.add(g);
  return group;
}

function buildPlaza(textures, heightFn) {
  const group = new THREE.Group();
  const { x, z, w, d, rot } = PLAZA;
  const geo = roundedBox(w, 0.075, d, 0.05, 2);
  const mat = new THREE.MeshStandardMaterial({
    map: textures.plaster,
    color: 0xc9bda6,
    roughness: 0.9,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x, heightFn(x, z) + 0.038, z);
  mesh.rotation.y = rot;
  mesh.receiveShadow = true;
  group.add(mesh);
  return group;
}

function buildFields(heightFn) {
  const group = new THREE.Group();
  const rand = makeRandom(4242);
  const fields = [
    { x: 9.2, z: -6.2, w: 4.6, d: 2.4, rot: -0.12 },
    { x: -3.2, z: -6.6, w: 5.2, d: 1.9, rot: 0.06 },
    { x: -9.6, z: 6.35, w: 3.6, d: 2.1, rot: 0.16 },
    { x: 5.6, z: 6.9, w: 3.4, d: 1.5, rot: -0.08 },
  ];
  const colors = [0xa98b5c, 0xb5975f, 0x9c8752, 0xbb9d63];
  fields.forEach((f, i) => {
    const mesh = new THREE.Mesh(
      roundedBox(f.w, 0.05, f.d, 0.06, 2),
      new THREE.MeshStandardMaterial({ color: colors[i % colors.length], roughness: 0.98 }),
    );
    mesh.position.set(f.x, heightFn(f.x, f.z) + 0.024, f.z);
    mesh.rotation.y = f.rot;
    mesh.receiveShadow = true;
    group.add(mesh);

    // 田垄细线
    const rows = Math.floor(f.d / 0.32);
    for (let r = 0; r < rows; r++) {
      const row = new THREE.Mesh(
        new THREE.BoxGeometry(f.w * 0.92, 0.022, 0.08),
        new THREE.MeshStandardMaterial({ color: 0x8a7448, roughness: 1 }),
      );
      row.position.set(0, 0.035, -f.d / 2 + 0.18 + r * 0.32);
      row.rotation.y = rand.jitter(0, 0.012);
      mesh.add(row);
    }
  });
  return group;
}

/**
 * 构建整个地形层
 * 返回 { group, water, waterNormal, heightAt }
 */
export function buildTerrain(scene) {
  const textures = {
    wood: makeWoodTexture({ repeat: [1, 1] }),
    grass: makeGrassTexture({ repeat: [11, 7.5], tint: [132, 166, 92], dark: [96, 128, 68] }),
    soil: makeSoilTexture({ repeat: [2, 12] }),
    road: makeRoadTexture({ repeat: [1, 1] }),
    waterNormal: makeWaterNormalTexture({ repeat: [3, 14] }),
    plaster: makePlasterTexture({ repeat: [1, 1], strength: 10 }),
    wall: makePlasterTexture({ repeat: [1, 1], strength: 16 }),
  };

  const group = new THREE.Group();
  group.name = 'terrain';
  group.add(buildTable());
  group.add(buildPlinth(textures));
  group.add(buildTerrainMesh(textures));
  const river = buildRiver(textures);
  group.add(river.group);
  group.add(buildRoads(textures, heightAt));
  group.add(buildRoadBridge(textures, heightAt));
  group.add(buildPlaza(textures, heightAt));
  group.add(buildFields(heightAt));

  scene.add(group);
  return { group, textures, heightAt, water: river.water, waterNormal: river.waterNormal };
}
