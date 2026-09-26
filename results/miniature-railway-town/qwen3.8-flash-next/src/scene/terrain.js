import * as THREE from 'three';
import { HX, HZ, WATER_Y, groundHeight, trackSdf, riverPath, POND, railDistance, waterDistance } from './layout.js';
import { grassTexture, waterTexture } from '../util/textures.js';
import { mat } from '../util/geo.js';
import { smoothstep, clamp, fbm } from '../util/mathx.js';

/**
 * Terrain plate: a fine grid displaced by the layout's height field with painted
 * vertex colour (turf, parched outfield, dry ballast spill, riverbank silt).
 */
export function buildTerrain() {
  const segX = 150, segZ = 114;
  const geo = new THREE.PlaneGeometry(HX * 2, HZ * 2, segX, segZ);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  const tmp = new THREE.Color();
  const turf = new THREE.Color(0x8ea866);
  const turfDark = new THREE.Color(0x6f8c4d);
  const field = new THREE.Color(0xb8a869);
  const stubble = new THREE.Color(0xa2945c);
  const urban = new THREE.Color(0x9aa077);
  const silt = new THREE.Color(0xa39377);
  const scoured = new THREE.Color(0x8a8570);
  const flower = new THREE.Color(0xd9c98d);

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const h = groundHeight(x, z);
    pos.setY(i, h);

    const inside = trackSdf(x, z) < 0;
    const n = fbm(x * 0.55 + 2, z * 0.55 + 9, 3);
    c.copy(inside ? turf : field);
    c.lerp(inside ? turfDark : stubble, clamp(n * 0.9, 0, 1) * 0.55);
    if (inside) c.lerp(urban, smoothstep(9.0, 2.5, Math.abs(x) + Math.abs(z) * 0.4) * 0.35);

    const wd = waterDistance(x, z);
    if (wd < 0.55) c.lerp(silt, smoothstep(0.55, 0.02, wd) * 0.72);
    if (wd < 0.18) c.lerp(scoured, smoothstep(0.18, -0.5, wd) * 0.45);

    const rail = railDistance(x, z);
    if (rail < 2.3) c.lerp(scoured, smoothstep(2.3, 1.15, rail) * 0.55);

    const f = fbm(x * 3.1, z * 3.1, 2);
    if (!inside && f > 0.72) c.lerp(flower, (f - 0.72) * 2.2);

    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();

  const map = grassTexture();
  map.repeat.set(9, 7);
  const material = mat({ map, vertexColors: true, roughness: 0.97, metalness: 0 });
  const mesh = new THREE.Mesh(geo, material);
  mesh.receiveShadow = true;
  mesh.name = 'terrain';
  return { mesh, material };
}

/**
 * Water plate: a grid restricted to the channel and pond whose surface is
 * max(terrain, water table). Submerged triangles go flat and blue, dry ones hug
 * the ground as a wet shoreline, so the edge can neither leak nor z-fight.
 */
export function buildWater() {
  const cell = 0.13;
  const nx = Math.ceil((HX * 2) / cell), nz = Math.ceil((HZ * 2) / cell);
  const verts = new Map();
  const vertexAt = (ix, iz) => {
    const k = ix * 100000 + iz;
    let v = verts.get(k);
    if (!v) {
      const x = -HX + ix * cell, z = -HZ + iz * cell;
      v = { x, z, t: groundHeight(x, z), k, idx: verts.size };
      verts.set(k, v);
    }
    return v;
  };

  const quads = [];
  for (let ix = 0; ix < nx; ix++) {
    for (let iz = 0; iz < nz; iz++) {
      const a = vertexAt(ix, iz), b = vertexAt(ix + 1, iz), cc = vertexAt(ix + 1, iz + 1), d = vertexAt(ix, iz + 1);
      const minT = Math.min(a.t, b.t, cc.t, d.t);
      const maxT = Math.max(a.t, b.t, cc.t, d.t);
      if (minT > WATER_Y + 0.30) continue;
      if (maxT < WATER_Y - 4) continue;
      // winding chosen so the surface normal points up (+y)
      quads.push([a, cc, b], [a, d, cc]);
    }
  }

  const pos = [], uvs = [], col = [], idx = [];
  const localIndex = new Map();
  const waterDeep = new THREE.Color(0x2f7a86);
  const waterShallow = new THREE.Color(0x86c8bd);
  const wet = new THREE.Color(0xa89a7c);
  const tmp = new THREE.Color();
  let cursor = 0;
  for (const tri of quads) {
    for (const v of tri) {
      let li = localIndex.get(v.idx);
      if (li === undefined) {
        li = cursor++;
        localIndex.set(v.idx, li);
        const submerged = v.t < WATER_Y;
        pos.push(v.x, submerged ? WATER_Y : v.t + 0.024, v.z);
        uvs.push(v.x * 0.16, v.z * 0.16);
        if (submerged) tmp.copy(waterShallow).lerp(waterDeep, smoothstep(0, 0.75, WATER_Y - v.t));
        else tmp.copy(wet).lerp(waterShallow, smoothstep(0.30, 0, v.t - WATER_Y) * 0.55);
        col.push(tmp.r, tmp.g, tmp.b);
      }
      idx.push(li);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();

  const material = mat({
    map: waterTexture(),
    vertexColors: true,
    roughness: 0.22,
    metalness: 0.0,
    envMapIntensity: 0.85,
  });
  const mesh = new THREE.Mesh(geo, material);
  mesh.name = 'water';
  return { mesh, material };
}

/** Sample points on the bank, for reeds and quays. */
export function shorelinePoints(step = 0.42) {
  const pts = [];
  const accept = (x, z) => {
    const h = groundHeight(x, z);
    if (h > WATER_Y - 0.05 && h < WATER_Y + 0.20) pts.push({ x, z, y: Math.max(h, WATER_Y) });
  };
  for (let s = 0; s < riverPath.length; s += step) {
    const p = riverPath.at(s);
    for (const off of [-1.75, -1.4, -1.05, 1.05, 1.4, 1.75]) accept(p.x + p.nx * off, p.z + p.nz * off);
  }
  for (let i = 0; i < 190; i++) {
    const a = (i / 190) * Math.PI * 2;
    for (const rr of [0.98, 1.16, 1.34]) accept(POND.x + Math.cos(a) * POND.rx * rr, POND.z + Math.sin(a) * POND.rz * rr);
  }
  return pts;
}
