import * as THREE from 'three';
import { BOARD, WATER, riverCurve, terrainHeight } from './layout.js';
import { sweepProfile, planarUV } from '../lib/geometry.js';
import { makeValueNoise, fbm } from '../lib/rng.js';

// ---------------------------------------------------------------------------
// Ground: a displaced height field carrying the river channel, an earth skirt
// around the scenery block, a sandy river bed and one big water plane that the
// terrain naturally masks (it only shows inside the carved channel).
// ---------------------------------------------------------------------------

const SEG_X = 196;
const SEG_Z = 132;

function buildHeightField() {
  const width = BOARD.maxX - BOARD.minX;
  const depth = BOARD.maxZ - BOARD.minZ;
  const geo = new THREE.PlaneGeometry(width, depth, SEG_X, SEG_Z);
  geo.rotateX(-Math.PI / 2);
  geo.translate((BOARD.minX + BOARD.maxX) / 2, 0, (BOARD.minZ + BOARD.maxZ) / 2);

  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const noise = makeValueNoise(5);

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const h = terrainHeight(x, z);
    pos.setY(i, h);

    // large scale mottling so the lawn is not a flat colour, plus a muddy
    // tint around the waterline
    const n = fbm(noise, x * 0.06 + 40, z * 0.06 + 40, 3);
    let r = 0.88 + n * 0.2;
    let g = 0.9 + n * 0.2;
    let b = 0.86 + n * 0.18;
    const wet = Math.min(1, Math.max(0, (0.15 - h) / 1.1));
    if (wet > 0) {
      r = r * (1 - wet) + 0.72 * wet;
      g = g * (1 - wet) + 0.66 * wet;
      b = b * (1 - wet) + 0.5 * wet;
    }
    colors[i * 3] = Math.min(1, r);
    colors[i * 3 + 1] = Math.min(1, g);
    colors[i * 3 + 2] = Math.min(1, b);
  }

  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  planarUV(geo, 0.16);
  return geo;
}

function buildSkirt() {
  const positions = [];
  const uvs = [];
  const indices = [];
  const edges = [
    { from: [BOARD.minX, BOARD.minZ], to: [BOARD.maxX, BOARD.minZ] },
    { from: [BOARD.maxX, BOARD.minZ], to: [BOARD.maxX, BOARD.maxZ] },
    { from: [BOARD.maxX, BOARD.maxZ], to: [BOARD.minX, BOARD.maxZ] },
    { from: [BOARD.minX, BOARD.maxZ], to: [BOARD.minX, BOARD.minZ] },
  ];
  let base = 0;
  for (const edge of edges) {
    const len = Math.hypot(edge.to[0] - edge.from[0], edge.to[1] - edge.from[1]);
    const n = Math.max(4, Math.round(len / 0.5));
    const ring = [];
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const x = edge.from[0] + (edge.to[0] - edge.from[0]) * t;
      const z = edge.from[1] + (edge.to[1] - edge.from[1]) * t;
      ring.push([x, z, terrainHeight(x, z)]);
    }
    for (let i = 0; i <= n; i++) {
      const [x, z, h] = ring[i];
      positions.push(x, h, z, x, BOARD.earthBottom, z);
      uvs.push(i * 0.4, h * 0.4, i * 0.4, BOARD.earthBottom * 0.4);
    }
    for (let i = 0; i < n; i++) {
      const a = base + i * 2;
      indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    base += (n + 1) * 2;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

/** u range of the river curve that lies inside the board footprint. */
function riverRangeInside() {
  const p = new THREE.Vector3();
  let uStart = 0;
  let uEnd = 1;
  const inside = (u) => {
    riverCurve.getPointAt(u, p);
    return (
      p.x > BOARD.minX + 0.2 && p.x < BOARD.maxX - 0.2 && p.z > BOARD.minZ + 0.2 && p.z < BOARD.maxZ - 0.2
    );
  };
  const N = 400;
  for (let i = 0; i <= N; i++) {
    if (inside(i / N)) {
      uStart = i / N;
      break;
    }
  }
  for (let i = N; i >= 0; i--) {
    if (inside(i / N)) {
      uEnd = i / N;
      break;
    }
  }
  return [uStart, uEnd];
}

export function buildTerrain(scene, M) {
  const group = new THREE.Group();
  group.name = 'terrain';

  const ground = new THREE.Mesh(buildHeightField(), M.terrain);
  ground.receiveShadow = true;
  ground.castShadow = false;
  group.add(ground);

  const skirt = new THREE.Mesh(buildSkirt(), M.earth);
  skirt.receiveShadow = true;
  skirt.castShadow = false;
  group.add(skirt);

  const [u0, u1] = riverRangeInside();
  const bed = new THREE.Mesh(
    sweepProfile(riverCurve, {
      profile: [
        [-WATER.halfWidth + 0.05, 0],
        [0, 0.04],
        [WATER.halfWidth - 0.05, 0],
      ],
      uStart: u0,
      uEnd: u1,
      samples: 320,
      yBase: WATER.bed + 0.02,
      uDensity: 0.05,
      vDensity: 0.05,
    }),
    M.sand
  );
  bed.receiveShadow = true;
  group.add(bed);

  const waterGeo = new THREE.PlaneGeometry(BOARD.maxX - BOARD.minX, BOARD.maxZ - BOARD.minZ, 1, 1);
  waterGeo.rotateX(-Math.PI / 2);
  waterGeo.translate(0, WATER.level, 0);
  planarUV(waterGeo, 0.085);
  const water = new THREE.Mesh(waterGeo, M.water);
  water.receiveShadow = true;
  water.name = 'water';
  group.add(water);

  scene.add(group);
  return { group, water };
}
