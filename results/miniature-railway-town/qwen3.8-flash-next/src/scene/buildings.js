import * as THREE from 'three';
import {
  box, cyl, gableRoofGeometry, gableEndGeometry, hipRoofGeometry, mergedMesh, mat,
} from '../util/geo.js';
import { facadeTextures, roofTexture, stoneTexture } from '../util/textures.js';
import { PALETTES } from './places.js';
import { groundHeight } from './layout.js';
import { makeRng } from '../util/mathx.js';

/**
 * Model-village architecture. Walls are single-skin boxes wearing a painted facade
 * map plus an emissive window map, so "some windows lit at night" costs no geometry.
 * Roofs, chimneys and joinery are real solids so the silhouettes stay hand-made.
 */

const roofMats = new Map();
const trimMats = new Map();
const wallMats = new Map();

export function roofMat(kind, color, glowSink) {
  const key = `${kind}|${color}`;
  if (!roofMats.has(key)) {
    roofMats.set(key, mat({ map: roofTexture(kind), color, roughness: 0.88, metalness: 0.02 }));
  }
  return roofMats.get(key);
}

export function trimMat(color, opts = {}) {
  const key = `${color}|${JSON.stringify(opts)}`;
  if (!trimMats.has(key)) trimMats.set(key, mat({ color, ...opts }));
  return trimMats.get(key);
}

function wallMaterial({ floors, cols, seed, style, color, litRatio }) {
  const key = `${style}|${color}|${floors}|${cols}|${seed}|${litRatio}`;
  if (!wallMats.has(key)) {
    const { map, emissiveMap } = facadeTextures({ floors, cols, seed, style, litRatio });
    wallMats.set(key, mat({
      map,
      emissiveMap,
      emissive: 0xffffff,
      emissiveIntensity: 0,
      color,
      roughness: 0.9,
      metalness: 0.02,
    }));
  }
  return wallMats.get(key);
}

const FLOOR_H = 0.86;
const roofRise = (d) => Math.max(0.28, d * 0.42);

/**
 * @returns {{group:THREE.Group, glow:THREE.Material[]}}
 */
export function makeBuilding(spec, glowSink = []) {
  const group = new THREE.Group();
  const pal = PALETTES[spec.pal] || PALETTES.cream;
  const rnd = makeRng(Math.abs(Math.round((spec.x * 71 + spec.z * 131 + spec.w * 977) * 100)) % 100000 + 7);
  const w = spec.w, d = spec.d, h = spec.h;
  const floors = Math.max(1, Math.round(h / FLOOR_H));
  const cols = Math.max(1, Math.min(5, Math.round(w / 0.85)));
  const style = spec.kind === 'shop' ? 'shop' : (spec.kind === 'station' || spec.kind === 'hall' ? 'formal' : (rnd() > 0.65 ? 'brick' : 'house'));
  const litRatio = 0.35 + rnd() * 0.35;

  const wall = wallMaterial({
    floors, cols, seed: Math.round(rnd() * 997) + 3,
    style, color: pal.wall, litRatio,
  });
  if (wall.emissiveMap) glowSink.push(wall);

  const roof = roofMat(spec.kind === 'church' || spec.kind === 'hall' ? 'slate' : (rnd() > 0.5 ? 'tile' : 'slate'), pal.roof);
  const stone = trimMat(0x9d958a, { map: stoneTexture(), roughness: 0.94 });
  const timber = trimMat(0x6d4c2e, { roughness: 0.9 });
  const joinery = trimMat(spec.kind === 'shed' || spec.kind === 'barn' ? 0x4a423a : 0x3f4a44, { roughness: 0.78 });
  const glass = trimMat(0x2c3a40, { roughness: 0.28, metalness: 0.55 });

  const walls = [];
  const roofs = [];
  const trims = [];
  const glassParts = [];

  // plinth: a stone course the house stands on
  walls.push(box(w + 0.10, 0.16, d + 0.10, 0, 0.08, 0));
  // main box
  walls.push(box(w, h - 0.16, d, 0, 0.16 + (h - 0.16) / 2, 0));

  const eaveY = h;

  switch (spec.kind) {
    case 'gable':
    case 'house':
    case 'mill':
    case 'station':
    case 'white':
    default: {
      if (spec.kind === 'station') {
        buildStationFront({ w, d, h, eaveY, walls, roofs, trims, glassParts, roof, wall, joinery, glass, spec, rnd });
        break;
      }
      const rise = roofRise(d) * (spec.kind === 'mill' ? 1.15 : 1);
      const rw = w + 0.16, rd = d + 0.16;
      const r1 = gableRoofGeometry(rw, rd, rise, 0.08);
      r1.translate(0, eaveY, 0);
      roofs.push(r1);
      for (const s of [-1, 1]) {
        const end = gableEndGeometry(rw, rd, rise, s);
        end.translate(0, eaveY, 0);
        walls.push(end);
      }
      // ridge cap
      roofs.push(box(rw + 0.1, 0.05, 0.09, 0, eaveY + rise + 0.02, 0));
      // eave board
      trims.push(box(rw + 0.12, 0.06, 0.05, 0, eaveY - 0.02, rd / 2));
      trims.push(box(rw + 0.12, 0.06, 0.05, 0, eaveY - 0.02, -rd / 2));
      if (spec.kind !== 'mill') addChimney(trims, w * 0.32, eaveY, -d * 0.2, rnd);
      else addChimney(trims, -w * 0.36, eaveY, d * 0.15, rnd);
      if (rnd() > 0.45) addDormers({ roofs, trims, w, d, eaveY, rise });
      if (spec.kind === 'mill') addMillWheel({ group, trims, w, timber, joinery });
      break;
    }
    case 'hip':
    case 'hall': {
      const rise = roofRise(Math.min(d, 2.2));
      const rw = w + 0.2, rd = d + 0.2;
      const rr = hipRoofGeometry(rw, rd, rise, 0.1);
      rr.translate(0, eaveY, 0);
      roofs.push(rr);
      trims.push(box(rw + 0.06, 0.07, rd + 0.06, 0, eaveY + 0.03, 0));
      if (spec.kind === 'hall') {
        // cupola + pediment make the town hall the tallest roof in the square
        trims.push(box(w * 0.42, 0.34, 0.10, 0, eaveY + rise * 0.55, rd * 0.02));
        trims.push(box(0.62, 0.5, 0.62, 0, eaveY + rise + 0.25, 0));
        const cup = hipRoofGeometry(0.78, 0.78, 0.34, 0.06);
        cup.translate(0, eaveY + rise + 0.5, 0);
        roofs.push(cup);
        trims.push(cyl(0.045, 0.045, 0.5, 8, 0, eaveY + rise + 0.92, 0));
        trims.push(cyl(0.09, 0.09, 0.09, 10, 0, eaveY + rise + 1.2, 0));
        addChimney(trims, w * 0.36, eaveY, -d * 0.22, rnd);
        addChimney(trims, -w * 0.36, eaveY, -d * 0.22, rnd);
      } else {
        addChimney(trims, w * 0.3, eaveY, -d * 0.25, rnd);
      }
      break;
    }
    case 'shop': {
      const rise = roofRise(d) * 0.72;
      const rw = w + 0.14, rd = d + 0.14;
      const r1 = gableRoofGeometry(rw, rd, rise, 0.07);
      r1.translate(0, eaveY, 0);
      roofs.push(r1);
      for (const s of [-1, 1]) {
        const end = gableEndGeometry(rw, rd, rise, s);
        end.translate(0, eaveY, 0);
        walls.push(end);
      }
      // shopfront: big glass, stallriser and a canopy
      const frontZ = d / 2 + 0.02;
      glassParts.push(box(w * 0.72, h * 0.44, 0.05, 0, h * 0.30, frontZ));
      trims.push(box(w * 0.78, h * 0.10, 0.09, 0, h * 0.06, frontZ + 0.02));
      trims.push(box(w * 0.80, 0.10, 0.09, 0, h * 0.545, frontZ + 0.02));
      const aw = new THREE.Mesh(box(w * 0.86, 0.06, 0.46, 0, h * 0.56, frontZ + 0.24), trimMat(spec.pal === 'red' ? 0x8f3b2c : 0x2f5a4e, { roughness: 0.8 }));
      aw.rotation.x = -0.16;
      aw.castShadow = true;
      group.add(aw);
      for (const s of [-1, 1]) trims.push(box(0.05, 0.05, 0.44, s * w * 0.4, h * 0.58, frontZ + 0.22));
      addChimney(trims, -w * 0.32, eaveY, -d * 0.2, rnd);
      break;
    }
    case 'church': {
      // nave with a west tower and spire: the village landmark
      const rise = roofRise(d) * 1.05;
      const rw = w + 0.14, rd = d + 0.14;
      const r1 = gableRoofGeometry(rw, rd, rise, 0.07);
      r1.translate(0, eaveY, 0);
      roofs.push(r1);
      for (const s of [-1, 1]) {
        const end = gableEndGeometry(rw, rd, rise, s);
        end.translate(0, eaveY, 0);
        walls.push(end);
      }
      const tw = d * 0.86;
      walls.push(box(tw, h + 0.75, d * 0.94, -w / 2 + tw / 2, (h + 0.75) / 2, 0));
      trims.push(box(tw + 0.14, 0.12, d * 0.94 + 0.14, -w / 2 + tw / 2, h + 0.78, 0));
      const spire = new THREE.ConeGeometry(tw * 0.78, spec.spire || 2.6, 4, 1);
      spire.rotateY(Math.PI / 4);
      spire.translate(-w / 2 + tw / 2, h + 0.84 + (spec.spire || 2.6) / 2, 0);
      roofs.push(spire);
      trims.push(cyl(0.03, 0.03, 0.34, 6, -w / 2 + tw / 2, h + 0.84 + (spec.spire || 2.6) + 0.14, 0));
      // louvred belfry + pointed windows along the nave
      glassParts.push(box(0.34, 0.42, 0.06, -w / 2 + tw / 2, h + 0.5, d * 0.47));
      for (let i = 0; i < 3; i++) {
        const x = -w * 0.16 + i * (w * 0.3);
        glassParts.push(box(0.20, 0.72, 0.06, x, h * 0.55, d / 2 + 0.03));
        glassParts.push(box(0.20, 0.72, 0.06, x, h * 0.55, -d / 2 - 0.03));
        trims.push(box(0.28, 0.06, 0.08, x, h * 0.55 - 0.4, d / 2 + 0.04));
      }
      trims.push(box(0.5, 0.9, 0.09, w * 0.44, 0.5, d * 0.2));
      break;
    }
    case 'shed':
    case 'barn': {
      // low hipped/curved roof with big doors, the working end of the village
      const rise = spec.kind === 'barn' ? roofRise(d) * 1.25 : 0.34;
      if (spec.kind === 'barn') {
        const rr = hipRoofGeometry(w + 0.2, d + 0.2, rise, 0.14);
        rr.translate(0, eaveY, 0);
        roofs.push(rr);
        trims.push(box(w * 0.34, rise * 0.9, 0.1, 0, eaveY + rise * 0.45, (d + 0.2) / 2));
        trims.push(box(w * 0.34, rise * 0.9, 0.1, 0, eaveY + rise * 0.45, -(d + 0.2) / 2));
        trims.push(box(0.14, 0.14, d + 0.4, -w * 0.36, eaveY + rise + 0.02, 0));
        trims.push(box(0.14, 0.14, d + 0.4, w * 0.36, eaveY + rise + 0.02, 0));
      } else {
        const r1 = gableRoofGeometry(w + 0.16, d + 0.16, rise, 0.06);
        r1.translate(0, eaveY, 0);
        roofs.push(r1);
        for (const s of [-1, 1]) {
          const end = gableEndGeometry(w + 0.16, d + 0.16, rise, s);
          end.translate(0, eaveY, 0);
          walls.push(end);
        }
        // roof ribs
        for (let i = 0; i < 6; i++) trims.push(box(0.05, 0.04, d + 0.2, -w / 2 + 0.3 + i * (w / 6.4), eaveY + 0.02, 0));
      }
      // doors
      const frontZ = d / 2 + 0.03;
      trims.push(box(w * 0.30, h * 0.72, 0.06, -w * 0.18, h * 0.36, frontZ));
      trims.push(box(w * 0.30, h * 0.72, 0.06, w * 0.18, h * 0.36, frontZ));
      trims.push(box(w * 0.34, 0.09, 0.12, 0, h * 0.74, frontZ));
      glassParts.push(box(w * 0.16, h * 0.30, 0.05, w * 0.36, h * 0.62, frontZ));
      break;
    }
    case 'flat':
    case 'flatTower': {
      trims.push(box(w + 0.16, 0.10, d + 0.16, 0, h + 0.05, 0));
      if (spec.upper) {
        // signal box: a projecting upper storey with a band of windows
        walls.push(box(w * 0.94, h * 0.34, d * 0.94, 0, h + h * 0.17, 0));
        glassParts.push(box(w * 0.9, h * 0.2, 0.04, 0, h + h * 0.22, d * 0.5));
        glassParts.push(box(0.04, h * 0.2, d * 0.86, w * 0.5, h + h * 0.22, 0));
        trims.push(box(w * 1.02, 0.08, d * 1.02, 0, h * 1.36 + 0.04, 0));
        const rr = hipRoofGeometry(w * 1.06, d * 1.06, 0.22, 0.05);
        rr.translate(0, h * 1.36 + 0.08, 0);
        roofs.push(rr);
      } else {
        const rr = hipRoofGeometry(w + 0.1, d + 0.1, 0.2, 0.05);
        rr.translate(0, h + 0.1, 0);
        roofs.push(rr);
      }
      trims.push(box(0.16, h * 0.5, 0.16, w * 0.36, h * 0.75, -d * 0.36));
      break;
    }
    case 'pavilion': {
      const rr = new THREE.ConeGeometry(Math.max(w, d) * 0.82, 0.62, 8, 1);
      rr.translate(0, h + 0.31, 0);
      roofs.push(rr);
      trims.push(box(w + 0.2, 0.09, d + 0.2, 0, h + 0.02, 0));
      trims.push(cyl(0.06, 0.06, 0.4, 8, 0, h + 0.8, 0));
      for (let i = 0; i < 4; i++) {
        trims.push(box(0.09, h * 0.8, 0.09, (i % 2 ? 1 : -1) * w * 0.42, h * 0.4, (i < 2 ? 1 : -1) * d * 0.42));
      }
      glassParts.push(box(w * 0.6, h * 0.4, 0.04, 0, h * 0.5, d * 0.5));
      break;
    }
  }

  // shared joinery for most houses: door + steps + a downpipe
  if (['gable', 'hip', 'house', 'mill', 'shop'].includes(spec.kind)) {
    trims.push(box(w * 0.16, h * 0.34, 0.06, 0, h * 0.17, d / 2 + 0.03));
    trims.push(box(w * 0.22, 0.06, 0.18, 0, 0.03, d / 2 + 0.1));
    trims.push(box(0.05, h * 0.9, 0.05, w * 0.46, h * 0.5, d * 0.46));
  }

  const wallMesh = mergedMesh(walls, wall, 'walls');
  const roofMesh = mergedMesh(roofs, roof, 'roof');
  const trimMesh = mergedMesh(trims, spec.kind === 'shed' || spec.kind === 'barn' ? joinery : (spec.kind === 'church' || spec.kind === 'mill' ? stone : timber), 'trim');
  const glassMesh = glassParts.length ? mergedMesh(glassParts, glass, 'glass') : null;

  for (const mesh of [wallMesh, roofMesh, trimMesh, glassMesh]) {
    if (!mesh) continue;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  group.position.set(spec.x, groundHeight(spec.x, spec.z) - 0.04, spec.z);
  group.rotation.y = spec.rot || 0;
  group.name = `building-${spec.kind}`;
  return { group, glow: glowSink };
}

function addChimney(list, x, eaveY, z, rnd) {
  const hgt = 0.34 + rnd() * 0.26;
  list.push(box(0.19, hgt + 0.3, 0.19, x, eaveY + hgt * 0.4, z));
  list.push(box(0.24, 0.07, 0.24, x, eaveY + hgt * 0.9, z));
  list.push(box(0.07, 0.13, 0.07, x - 0.045, eaveY + hgt * 0.98 + 0.06, z));
  list.push(box(0.07, 0.13, 0.07, x + 0.045, eaveY + hgt * 0.98 + 0.06, z));
}

function addDormers({ roofs, trims, w, d, eaveY, rise }) {
  const n = w > 2.0 ? 2 : 1;
  for (let i = 0; i < n; i++) {
    const x = n === 1 ? 0 : -w * 0.22 + i * w * 0.44;
    const dw = 0.32, dh = 0.28;
    trims.push(box(dw, dh, 0.06, x, eaveY + rise * 0.40, d / 2 + 0.01));
    roofs.push(box(dw + 0.07, 0.055, 0.34, x, eaveY + rise * 0.40 + dh / 2 + 0.04, d / 2 - 0.13));
  }
}

function addMillWheel({ group, trims, w, timber, joinery }) {
  // a water wheel hung over the mill race, on the pond side of the building
  const R = 0.62;
  const wheel = new THREE.Group();
  const hub = new THREE.Mesh(cyl(0.07, 0.07, 0.52, 8), joinery);
  hub.rotation.x = Math.PI / 2;
  wheel.add(hub);
  for (const zz of [-0.17, 0.17]) {
    const rim = new THREE.Mesh(new THREE.TorusGeometry(R, 0.033, 6, 22), timber);
    rim.position.z = zz;
    rim.castShadow = true;
    wheel.add(rim);
  }
  const spokes = [];
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const g = box(0.045, R * 2 - 0.06, 0.035, 0, 0, 0);
    g.rotateZ(a);
    spokes.push(g);
    const paddle = box(0.05, 0.05, 0.34, Math.sin(a) * (R - 0.02), Math.cos(a) * (R - 0.02), 0);
    spokes.push(paddle);
  }
  const parts = mergedMesh(spokes, timber, 'wheel-parts');
  parts.castShadow = true;
  wheel.add(parts);
  wheel.position.set(-w * 0.58, 0.62, 0);
  wheel.rotation.y = Math.PI / 2;
  wheel.name = 'mill-wheel';
  group.add(wheel);
  trims.push(box(0.18, 0.11, 1.0, -w * 0.5, 1.02, 0));
  trims.push(box(0.14, 1.1, 0.14, -w * 0.5, 0.5, 0.42));
  trims.push(box(0.14, 1.1, 0.14, -w * 0.5, 0.5, -0.42));
}

/** Station: a formal block with a central bay, hood and nameboard. */
function buildStationFront({ w, d, h, eaveY, walls, roofs, trims, glassParts, roof, joinery, glass, rnd }) {
  void rnd;
  const rise = 0.42;
  const rw = w + 0.18, rd = d + 0.18;
  const r1 = gableRoofGeometry(rw, rd, rise, 0.09);
  r1.translate(0, eaveY, 0);
  roofs.push(r1);
  for (const s of [-1, 1]) {
    const end = gableEndGeometry(rw, rd, rise, s);
    end.translate(0, eaveY, 0);
    walls.push(end);
  }
  // central raised bay with a clock/lantern
  walls.push(box(w * 0.30, 0.52, d * 0.7, 0, eaveY + 0.26, 0));
  const bay = hipRoofGeometry(w * 0.36, d * 0.76, 0.26, 0.06);
  bay.translate(0, eaveY + 0.52, 0);
  roofs.push(bay);
  trims.push(box(w * 0.34, 0.08, d * 0.74, 0, eaveY + 0.55, 0));
  glassParts.push(box(0.22, 0.22, 0.05, 0, eaveY + 0.3, d * 0.36 + 0.02));
  trims.push(cyl(0.05, 0.05, 0.34, 8, 0, eaveY + 0.52 + 0.26 + 0.15, 0));
  // hood over the platform entrance + a decorative valance
  trims.push(box(w * 0.62, 0.07, 0.5, 0, h * 0.72, d / 2 + 0.25));
  for (const s of [-1, 1]) trims.push(box(0.06, 0.06, 0.48, s * w * 0.28, h * 0.68, d / 2 + 0.25));
  addChimney(trims, -w * 0.34, eaveY, -d * 0.18, makeRng(3));
  addChimney(trims, w * 0.34, eaveY, -d * 0.18, makeRng(5));
  void joinery; void roof;
}

export { FLOOR_H };
