import * as THREE from 'three';
import {
  BUILDINGS, GROVES, HEDGES, LAMPS, PROPS, FIGURES, SIGNALS, POLES, PLAZAS,
} from './places.js';
import {
  groundHeight, railDistance, waterDistance, isWater, WATER_Y, trackPath, TRACK_LEN,
  trackFrame, deckY, TRACK, STATION, BRIDGE_S, bridgeU, BRIDGE, POND, CROSSING_S, HX, HZ,
  roadObjs, footprintPoints,
} from './layout.js';
import { box, cyl, mergedMesh, mat, setShadow } from '../util/geo.js';
import { makeRng, clamp, lerp } from '../util/mathx.js';
import { makeBuilding, trimMat } from './buildings.js';
import { shorelinePoints } from './terrain.js';
import { stoneTexture, paveTexture, stationSignTexture } from '../util/textures.js';

const STONE = () => trimMat(0x9d958a, { map: stoneTexture(), roughness: 0.94 });
const TIMBER = () => trimMat(0x77542f, { roughness: 0.9 });
const DARKIRON = () => trimMat(0x35332f, { roughness: 0.52, metalness: 0.6 });
const CREAM = () => trimMat(0xe4dcc8, { roughness: 0.8 });

/**
 * Everything that turns a plan into a village: houses, trees, hedges, lamps,
 * lineside furniture and the small clutter of a worked-in place.
 *
 * @param {{nightGlow:Array, nightLights:Array}} registry
 */
export function buildTown(registry) {
  const group = new THREE.Group();
  group.name = 'town';

  const buildings = buildBuildings(group, registry);
  const waterTower = buildWaterTower();
  group.add(waterTower);
  group.add(buildGoodsCrane());
  const lamps = buildLamps(group, registry);
  const signals = buildSignals(group, registry);
  buildPoles(group);
  buildTrees(group);
  buildHedges(group);
  buildReeds(group);
  buildFences(group);
  buildProps(group, registry);
  buildFigures(group);
  buildStationDetail(group, registry);
  buildGardenBeds(group);
  void buildings; void PLAZAS;

  return { group, lamps, signals };
}

/* ------------------------------------------------------------------ buildings */

function buildBuildings(group, registry) {
  let count = 0;
  for (const spec of BUILDINGS) {
    if (spec.kind === 'waterTower') continue;
    const glow = [];
    const { group: b } = makeBuilding(spec, glow);
    for (const m of glow) registry.nightGlow.push({ mat: m, level: 0.85 });
    setShadow(b, true, true);
    group.add(b);
    count++;
  }
  return count;
}

/* ------------------------------------------------------------------ big landmarks */

function buildWaterTower() {
  const spec = BUILDINGS.find((b) => b.kind === 'waterTower');
  const g = new THREE.Group();
  const y = groundHeight(spec.x, spec.z);
  const iron = DARKIRON();
  const timber = TIMBER();
  const stone = STONE();
  const legR = 0.72;
  const legH = 1.85;
  const legs = [];
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    legs.push(cyl(0.075, 0.10, legH, 8, Math.cos(a) * legR, legH / 2, Math.sin(a) * legR));
  }
  // lattice bracing
  for (const h of [0.5, 1.05, 1.6]) {
    for (let i = 0; i < 4; i++) {
      const a0 = (i / 4) * Math.PI * 2 + Math.PI / 4;
      const a1 = ((i + 1) / 4) * Math.PI * 2 + Math.PI / 4;
      const p0 = [Math.cos(a0) * legR, h, Math.sin(a0) * legR];
      const p1 = [Math.cos(a1) * legR, h, Math.sin(a1) * legR];
      const len = Math.hypot(p1[0] - p0[0], p1[2] - p0[2]);
      const bar = box(len, 0.05, 0.05, (p0[0] + p1[0]) / 2, h, (p0[2] + p1[2]) / 2, -Math.atan2(p1[2] - p0[2], p1[0] - p0[0]));
      legs.push(bar);
      legs.push(cyl(0.028, 0.028, len * 1.35, 5, (p0[0] + p1[0]) / 2, h + 0.42, (p0[2] + p1[2]) / 2, 0, { rotZ: 0.7, rotX: -Math.atan2(p1[2] - p0[2], p1[0] - p0[0]) }));
    }
  }
  g.add(mergedMesh(legs, iron, 'tower-legs'));
  g.add(mergedMesh([box(legR * 2.2, 0.16, legR * 2.2, 0, legH + 0.08, 0)], stone, 'tower-cap'));

  const tankY = legH + 0.16;
  const tank = new THREE.Mesh(cyl(0.80, 0.80, 1.05, 20), timber);
  tank.position.y = tankY + 0.52;
  g.add(tank);
  g.add(mergedMesh([
    cyl(0.84, 0.84, 0.07, 20, 0, tankY + 0.1, 0),
    cyl(0.84, 0.84, 0.07, 20, 0, tankY + 0.95, 0),
  ], iron, 'tower-hoops'));
  const roof = new THREE.Mesh(new THREE.ConeGeometry(0.95, 0.42, 20, 1), trimMat(0x5b4a3a, { roughness: 0.85 }));
  roof.position.y = tankY + 1.05 + 0.2;
  g.add(roof);
  g.add(mergedMesh([
    cyl(0.04, 0.04, 0.4, 6, 0, tankY + 1.7, 0),
    box(0.08, legH + 1.0, 0.08, legR * 0.9, (legH + 1.0) / 2 - 0.1, 0),
  ], iron, 'tower-pipe'));
  g.add(mergedMesh([box(0.26, 0.34, 0.26, legR * 0.9, 0.17, 0)], stone, 'tower-base'));

  g.position.set(spec.x, y - 0.04, spec.z);
  setShadow(g, true, true);
  g.name = 'water-tower';
  return g;
}

function buildGoodsCrane() {
  const g = new THREE.Group();
  const iron = DARKIRON();
  const timber = TIMBER();
  g.add(mergedMesh([
    box(0.16, 1.5, 0.16, 0, 0.75, 0),
    box(0.13, 0.13, 1.15, 0, 1.42, 0.5, 0.18),
    box(0.34, 0.1, 0.34, 0, 0.05, 0),
  ], iron, 'crane'));
  const chain = new THREE.Mesh(cyl(0.012, 0.012, 0.55, 5, 0, 1.1, 1.0), timber);
  g.add(chain);
  g.add(mergedMesh([box(0.16, 0.18, 0.16, 0, 0.82, 1.0)], timber, 'crane-hook'));
  for (const s of [-1, 1]) g.add(mergedMesh([box(0.1, 0.9, 0.1, s * 0.2, 0.45, -0.05, s * 0.35)], iron, 'brace'));
  const x = 8.35, z = 4.35;
  g.position.set(x, groundHeight(x, z), z);
  g.rotation.y = -0.5;
  setShadow(g, true, true);
  g.name = 'goods-crane';
  return g;
}

/* ------------------------------------------------------------------ lighting columns */

function buildLamps(group, registry) {
  const lamps = [];
  const iron = DARKIRON();
  const glassMat = () => {
    const m = mat({ color: 0x76837f, emissive: 0xffc266, emissiveIntensity: 0, roughness: 0.22, metalness: 0.25 });
    registry.nightGlow.push({ mat: m, level: 3.1 });
    return m;
  };
  const poolFactory = lightPool;

  const place = (x, z, kind, glowOnGround) => {
    const g = new THREE.Group();
    const y = groundHeight(x, z);
    const h = kind === 'platform' ? 1.05 : kind === 'square' ? 1.28 : 1.16;
    const parts = [cyl(0.055, 0.085, h, 8, 0, h / 2, 0), cyl(0.11, 0.13, 0.09, 10, 0, 0.045, 0)];
    if (kind === 'square') {
      parts.push(box(0.075, 0.075, 0.34, 0, h - 0.02, 0.15));
      parts.push(box(0.075, 0.075, 0.34, 0, h - 0.02, -0.15));
      parts.push(cyl(0.075, 0.075, 0.30, 8, 0, h + 0.14, 0));
    } else {
      parts.push(box(0.06, 0.06, 0.3, 0, h - 0.02, 0.14));
      parts.push(cyl(0.07, 0.055, 0.22, 8, 0, h + 0.06, 0.28));
    }
    const body = mergedMesh(parts, iron, 'lamp');
    g.add(body);
    const lanternMat = glassMat();
    const mkLantern = (z) => {
      const l = new THREE.Mesh(new THREE.OctahedronGeometry(0.105, 0), lanternMat);
      l.scale.set(1, 1.35, 1);
      l.position.set(0, h + (kind === 'square' ? 0.30 : 0.0), z);
      l.castShadow = false;
      return l;
    };
    if (kind === 'square') g.add(mkLantern(0.28), mkLantern(-0.28));
    else g.add(mkLantern(0.28));
    if (glowOnGround) {
      const poolMat = poolFactory();
      const disc = new THREE.Mesh(new THREE.CircleGeometry(1.15, 20), poolMat);
      disc.rotation.x = -Math.PI / 2;
      disc.position.set(0, 0.05, kind === 'square' ? 0 : 0.2);
      g.add(disc);
      registry.nightPools.push(poolMat);
    }
    g.position.set(x, y, z);
    setShadow(body, true, false);
    group.add(g);
    lamps.push({ group: g, height: h });
  };

  for (const [x, z, kind] of LAMPS) place(x, z, kind, true);
  // the bridge is lit from its abutments so the crossing reads at night
  for (const side of [-1, 1]) {
    const s = BRIDGE_S + side * (BRIDGE.structHalf + 0.55);
    const f = trackFrame(s);
    const p = f.pos.clone().addScaledVector(f.right, -1.28);
    place(p.x, p.z, 'post', false);
  }
  return lamps;
}

function lightPool() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 4, 64, 64, 62);
  g.addColorStop(0, 'rgba(255,214,150,0.55)');
  g.addColorStop(0.45, 'rgba(255,190,120,0.18)');
  g.addColorStop(1, 'rgba(255,180,110,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return new THREE.MeshBasicMaterial({ map: t, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
}

/* ------------------------------------------------------------------ signals */

function buildSignals(group, registry) {
  const signals = [];
  for (const s of SIGNALS) {
    const q = trackPath.distanceTo(s.x, s.z, 3.2);
    const f = trackFrame(q.s);
    const pos = f.pos.clone().addScaledVector(f.right, -1.15 * s.side);
    const g = new THREE.Group();
    const h = s.kind === 'semaphore' ? 1.35 : 1.15;
    const posts = [cyl(0.05, 0.06, h, 8, 0, h / 2, 0), box(0.22, 0.1, 0.22, 0, 0.05, 0)];
    // ladder rungs on the down side
    for (let i = 0; i < 6; i++) posts.push(box(0.14, 0.022, 0.022, 0, 0.2 + i * 0.16, 0.05));
    g.add(mergedMesh(posts, DARKIRON(), 'signal-post'));

    const armMat = mat({ color: s.kind === 'distant' ? 0xe8e2d4 : 0xb4322a, roughness: 0.6 });
    const arm = new THREE.Group();
    const blade = new THREE.Mesh(box(0.62, 0.14, 0.035, -0.28, 0, 0), armMat);
    blade.geometry.translate(0.31, 0, 0);
    blade.castShadow = true;
    arm.add(blade);
    if (s.kind === 'distant') {
      const fish = new THREE.Mesh(box(0.2, 0.16, 0.03, 0.5, 0, 0), trimMat(0xf0ece0, { roughness: 0.6 }));
      arm.add(fix(fish, 0, 0, 0));
    } else {
      const white = new THREE.Mesh(box(0.14, 0.13, 0.04, 0, 0, 0), trimMat(0xf2eee2, { roughness: 0.6 }));
      white.position.x = 0.52;
      arm.add(white);
    }
    const glassMat = mat({ color: 0xff5540, emissive: 0xff2a12, emissiveIntensity: 0, roughness: 0.4 });
    registry.nightGlow.push({ mat: glassMat, level: 2.2 });
    const spect = new THREE.Mesh(cyl(0.075, 0.075, 0.06, 10, 0, 0, 0, 0, { rotX: Math.PI / 2 }), DARKIRON());
    const lens = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), glassMat);
    lens.position.set(0.0, 0, -0.05);
    const armPivot = new THREE.Group();
    armPivot.add(arm, spect, lens);
    armPivot.position.set(0, h - 0.12, 0.03);
    g.add(armPivot);
    g.position.copy(pos);
    g.position.y = groundHeight(pos.x, pos.z);
    g.rotation.y = Math.atan2(f.tan.x, f.tan.z);
    setShadow(g, true, false);
    group.add(g);
    signals.push({ group: g, pivot: armPivot, kind: s.kind, s: q.s, aspect: 0, target: 0 });
  }
  return signals;
}

function fix(mesh) { mesh.castShadow = true; return mesh; }

/** Semaphore arms are animated: danger at 0, clear at 1. */
export function poseSignals(signals, trainS, dwelling) {
  for (const sig of signals) {
    let want = 0;
    const ahead = wrapS(sig.s - trainS);
    if (dwelling) want = 0;                                     // home signal holds at danger
    else if (ahead > 1.2 && ahead < TRACK_LEN - 3) want = 1;    // block clear once the train has gone
    if (sig.kind === 'distant') want = want === 1 && ahead > 7 ? 1 : 0;
    sig.target = want;
    sig.aspect = lerp(sig.aspect, sig.target, 0.06);
    sig.pivot.rotation.z = sig.aspect * -0.72;
  }
}

function wrapS(v) { return ((v % TRACK_LEN) + TRACK_LEN) % TRACK_LEN; }

/* ------------------------------------------------------------------ telegraph line */

function buildPoles(group) {
  const iron = DARKIRON();
  const pts = [];
  const poles = [];
  for (const [x, z] of POLES) {
    const y = groundHeight(x, z);
    const h = 1.5;
    poles.push(cyl(0.045, 0.065, h, 7, x, y + h / 2, z));
    poles.push(box(0.62, 0.055, 0.055, x, y + h - 0.12, z));
    poles.push(box(0.44, 0.05, 0.05, x, y + h - 0.34, z));
    for (const s of [-1, 1]) {
      poles.push(cyl(0.022, 0.022, 0.09, 5, x + s * 0.24, y + h - 0.06, z));
      poles.push(cyl(0.022, 0.022, 0.09, 5, x + s * 0.16, y + h - 0.28, z));
    }
    pts.push(new THREE.Vector3(x, y + h - 0.05, z));
  }
  const mesh = mergedMesh(poles, trimMat(0x6b563c, { roughness: 0.92 }), 'poles');
  setShadow(mesh, true, false);
  group.add(mesh);
  void iron;

  // sagging wires between consecutive poles
  const wireGeos = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i].clone(), b = pts[i + 1].clone();
    for (const off of [-0.24, 0.24]) {
      const aa = a.clone().add(new THREE.Vector3(off, 0, 0));
      const bb = b.clone().add(new THREE.Vector3(off, 0, 0));
      const mid = aa.clone().add(bb).multiplyScalar(0.5);
      mid.y -= aa.distanceTo(bb) * 0.055;
      const curve = new THREE.QuadraticBezierCurve3(aa, mid, bb);
      wireGeos.push(new THREE.TubeGeometry(curve, 8, 0.008, 4, false));
    }
  }
  const wires = mergedMesh(wireGeos, trimMat(0x2b2b2b, { roughness: 0.6, metalness: 0.4 }), 'wires');
  wires.castShadow = true;
  group.add(wires);
}

/* ------------------------------------------------------------------ vegetation */

const TREE_KINDS = {
  broadleaf: { trunk: 0.55, canopy: 0.62, blobs: 3, color: 0x4f7a35, tint: 0.22 },
  conifer: { trunk: 0.42, canopy: 0.74, blobs: 0, color: 0x2f5a3a, tint: 0.18 },
  willow: { trunk: 0.5, canopy: 0.66, blobs: 3, color: 0x5f7a42, tint: 0.2, wide: 1.35 },
  orchard: { trunk: 0.42, canopy: 0.5, blobs: 2, color: 0x5c7a3c, tint: 0.3, blossom: true },
};

function canopyGeometry(kind) {
  const def = TREE_KINDS[kind];
  const geos = [];
  if (kind === 'conifer') {
    for (let i = 0; i < 3; i++) {
      const r = 0.42 - i * 0.11;
      const g = new THREE.ConeGeometry(r, 0.62, 8, 1);
      g.translate(0, 0.5 + i * 0.42, 0);
      geos.push(g);
    }
  } else {
    const rnd = makeRng(kind.length * 977 + 13);
    const n = def.blobs;
    for (let i = 0; i < n; i++) {
      const r = 0.36 * (1 - i * 0.16);
      const g = new THREE.IcosahedronGeometry(r, 0);
      g.scale((def.wide || 1) * (1 + rnd() * 0.3), 0.86 + rnd() * 0.3, 1 + rnd() * 0.3);
      g.translate((rnd() - 0.5) * 0.24, 0.58 + def.canopy * 0.42 + i * 0.24, (rnd() - 0.5) * 0.24);
      geos.push(g);
    }
  }
  const merged = mergeNonIndexed(geos);
  return merged;
}

function mergeNonIndexed(geos) {
  const list = geos.map((g) => (g.index ? g.toNonIndexed() : g));
  let total = 0;
  for (const g of list) total += g.attributes.position.count;
  const pos = new Float32Array(total * 3);
  const nor = new Float32Array(total * 3);
  const uv = new Float32Array(total * 2);
  let o = 0;
  for (const g of list) {
    g.computeVertexNormals();
    const p = g.attributes.position.array, n = g.attributes.normal.array;
    const u = g.attributes.uv ? g.attributes.uv.array : new Float32Array(g.attributes.position.count * 2);
    pos.set(p, o * 3);
    nor.set(n, o * 3);
    uv.set(u.subarray(0, g.attributes.position.count * 2), o * 2);
    o += g.attributes.position.count;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return out;
}

function buildTrees(group) {
  const rnd = makeRng(90210);
  const spots = [];
  const blocked = blockedAreaPolys();

  const ok = (x, z, minWater) => {
    if (Math.abs(x) > HX - 0.5 || Math.abs(z) > HZ - 0.5) return false;
    if (railDistance(x, z) < 1.65) return false;
    const h = groundHeight(x, z);
    if (h < WATER_Y + 0.05) return false;
    if (waterDistance(x, z) < minWater) return false;
    for (const r of roadObjs) if (r.path.distanceTo(x, z, r.halfWidth + 0.75).dist < r.halfWidth + 0.6) return false;
    for (const b of blocked) {
      if (Math.hypot(b.x - x, b.z - z) < b.r) return false;
    }
    for (const s of spots) if (Math.hypot(s.x - x, s.z - z) < 0.92) return false;
    return true;
  };

  for (const gr of GROVES) {
    let placed = 0;
    const tries = gr.n * 26;
    for (let t = 0; t < tries && placed < gr.n; t++) {
      const a = rnd() * Math.PI * 2;
      const rr = Math.sqrt(rnd()) * gr.r;
      const x = gr.x + Math.cos(a) * rr, z = gr.z + Math.sin(a) * rr;
      const minWater = gr.kind === 'willow' ? 0.15 : 0.55;
      if (!ok(x, z, minWater)) continue;
      spots.push({
        x, z,
        kind: gr.kind,
        scale: 0.72 + rnd() * 0.62,
        rot: rnd() * Math.PI * 2,
        shade: 0.82 + rnd() * 0.36,
      });
      placed++;
    }
  }
  // scattered singles so the fields are not empty
  for (let i = 0; i < 26; i++) {
    for (let t = 0; t < 40; t++) {
      const x = (rnd() * 2 - 1) * (HX - 0.9);
      const z = (rnd() * 2 - 1) * (HZ - 0.9);
      const inside = railDistance(x, z) < 3.6;
      if (inside && rnd() > 0.25) continue;
      if (!ok(x, z, 1.1)) continue;
      spots.push({ x, z, kind: rnd() > 0.68 ? 'conifer' : 'broadleaf', scale: 0.6 + rnd() * 0.6, rot: rnd() * 6.28, shade: 0.8 + rnd() * 0.4 });
      break;
    }
  }

  for (const kind of Object.keys(TREE_KINDS)) {
    const list = spots.filter((s) => s.kind === kind);
    if (!list.length) continue;
    const def = TREE_KINDS[kind];
    const trunkMat = mat({ color: 0x6a4a30, roughness: 0.95 });
    const canopyMat = mat({ color: 0xffffff, roughness: 0.92, metalness: 0.0, flatShading: true });
    const trunks = new THREE.InstancedMesh(cyl(def.trunk * 0.13, def.trunk * 0.19, def.trunk, 6, 0, def.trunk / 2, 0), trunkMat, list.length);
    const canopies = new THREE.InstancedMesh(canopyGeometry(kind), canopyMat, list.length);
    canopies.castShadow = true;
    trunks.castShadow = true;
    canopies.receiveShadow = true;
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const v = new THREE.Vector3();
    const col = new THREE.Color();
    list.forEach((s, i) => {
      const y = groundHeight(s.x, s.z);
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), s.rot);
      m.compose(v.set(s.x, y - 0.03, s.z), q, new THREE.Vector3(s.scale, s.scale * (0.9 + s.shade * 0.15), s.scale));
      trunks.setMatrixAt(i, m);
      canopies.setMatrixAt(i, m);
      const base = new THREE.Color(def.color);
      const jitter = (s.shade - 1) * def.tint;
      col.setRGB(
        clamp(base.r + jitter * 0.7 + (s.shade - 0.9) * 0.06, 0.04, 0.95),
        clamp(base.g + jitter, 0.04, 0.95),
        clamp(base.b + jitter * 0.5, 0.02, 0.9)
      );
      canopies.setColorAt(i, col);
    });
    trunks.instanceMatrix.needsUpdate = true;
    canopies.instanceMatrix.needsUpdate = true;
    if (canopies.instanceColor) canopies.instanceColor.needsUpdate = true;
    trunks.name = `tree-trunks-${kind}`;
    canopies.name = `trees-${kind}`;
    group.add(trunks, canopies);
  }
}

function blockedAreaPolys() {
  const out = [];
  for (const b of BUILDINGS) {
    for (const p of footprintPoints(b, -0.35)) {
      out.push({ x: p.x, z: p.z, r: 0.62 });
    }
  }
  for (const p of PLAZAS) out.push({ x: p.x, z: p.z, r: Math.max(p.w || p.r, p.d || p.r) * 0.62 });
  return out;
}

function buildHedges(group) {
  const rnd = makeRng(3312);
  const blobs = [];
  const mats = mat({ color: 0x40602d, roughness: 0.96, flatShading: true });
  for (const [x1, z1, x2, z2] of HEDGES) {
    const len = Math.hypot(x2 - x1, z2 - z1);
    const n = Math.max(3, Math.round(len / 0.62));
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const x = lerp(x1, x2, t) + (rnd() - 0.5) * 0.2;
      const z = lerp(z1, z2, t) + (rnd() - 0.5) * 0.2;
      if (railDistance(x, z) < 1.3) continue;
      if (isWater(x, z)) continue;
      blobs.push({ x, z, y: groundHeight(x, z), s: 0.44 + rnd() * 0.2, r: rnd() * 3.14 });
    }
  }
  const geo = new THREE.IcosahedronGeometry(0.42, 0);
  geo.scale(1.15, 0.72, 1.15);
  const mesh = new THREE.InstancedMesh(geo, mats, blobs.length);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  blobs.forEach((b, i) => {
    q.setFromEuler(new THREE.Euler(0, b.r, 0));
    m.compose(new THREE.Vector3(b.x, b.y + b.s * 0.18, b.z), q, new THREE.Vector3(b.s, b.s, b.s));
    mesh.setMatrixAt(i, m);
  });
  mesh.instanceMatrix.needsUpdate = true;
  mesh.name = 'hedges';
  group.add(mesh);
}

function buildReeds(group) {
  const pts = shorelinePoints(0.4);
  const rnd = makeRng(777);
  const tufts = pts.filter(() => rnd() > 0.42);
  if (!tufts.length) return;
  const geo = new THREE.ConeGeometry(0.055, 0.5, 5, 1);
  geo.translate(0, 0.25, 0);
  const mats = mat({ color: 0x6c7a3e, roughness: 0.95, flatShading: true });
  const mesh = new THREE.InstancedMesh(geo, mats, tufts.length * 2);
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  let k = 0;
  for (const p of tufts) {
    for (let i = 0; i < 2; i++) {
      const x = p.x + (rnd() - 0.5) * 0.3, z = p.z + (rnd() - 0.5) * 0.3;
      const s = 0.6 + rnd() * 0.8;
      q.setFromEuler(new THREE.Euler((rnd() - 0.5) * 0.3, rnd() * 3, (rnd() - 0.5) * 0.3));
      m.compose(new THREE.Vector3(x, groundHeight(x, z) - 0.02, z), q, new THREE.Vector3(s, s * (0.8 + rnd() * 0.7), s));
      mesh.setMatrixAt(k++, m);
    }
  }
  mesh.count = k;
  mesh.instanceMatrix.needsUpdate = true;
  mesh.name = 'reeds';
  group.add(mesh);
}

/* ------------------------------------------------------------------ walls, fences, clutter */

function buildFences(group) {
  const timber = trimMat(0x8a7a5e, { roughness: 0.92 });
  const runs = [
    // field gates and paddock fencing outside the ring
    [[-12.4, 6.2], [-8.9, 6.5]],
    [[-3.0, 9.3], [1.3, 9.5]],
    [[7.0, -9.5], [10.6, -9.2]],
    [[-11.0, -6.4], [-9.4, -5.2]],
    // churchyard wall
    [[3.75, -5.15], [6.6, -5.15]],
    [[6.6, -5.15], [6.75, -3.0]],
    // garden walls beside the square
    [[0.55, -3.35], [0.6, -1.8]],
  ];
  const parts = [];
  for (const [[x1, z1], [x2, z2]] of runs) {
    const len = Math.hypot(x2 - x1, z2 - z1);
    const n = Math.max(2, Math.round(len / 0.42));
    const ang = Math.atan2(x2 - x1, z2 - z1);
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const x = lerp(x1, x2, t), z = lerp(z1, z2, t);
      if (railDistance(x, z) < 1.25) continue;
      const y = groundHeight(x, z);
      parts.push(box(0.055, 0.46, 0.055, x, y + 0.23, z, ang));
      if (i < n) {
        const t2 = (i + 1) / n;
        const bx = lerp(x1, x2, t2), bz = lerp(z1, z2, t2);
        const mx = (x + bx) / 2, mz = (z + bz) / 2;
        const seg = Math.hypot(bx - x, bz - z);
        const my = (y + groundHeight(bx, bz)) / 2;
        parts.push(box(0.03, 0.05, seg, mx, my + 0.36, mz, ang));
        parts.push(box(0.03, 0.05, seg, mx, my + 0.2, mz, ang));
      }
    }
  }
  const mesh = mergedMesh(parts, timber, 'fences');
  setShadow(mesh, true, true);
  group.add(mesh);
}

function buildProps(group, registry) {
  const rnd = makeRng(555);
  for (const [x, z, rot, kind] of PROPS) {
    const y = groundHeight(x, z);
    const g = new THREE.Group();
    switch (kind) {
      case 'bench': {
        const timber = trimMat(0x6c4a2c, { roughness: 0.9 });
        g.add(mergedMesh([
          box(0.62, 0.045, 0.22, 0, 0.24, 0),
          box(0.62, 0.2, 0.045, 0, 0.36, -0.09),
          box(0.05, 0.24, 0.2, -0.26, 0.12, 0),
          box(0.05, 0.24, 0.2, 0.26, 0.12, 0),
        ], timber, 'bench'));
        break;
      }
      case 'fountain': {
        const stone = STONE();
        g.add(mergedMesh([
          cyl(0.62, 0.68, 0.26, 20, 0, 0.13, 0),
          cyl(0.5, 0.5, 0.06, 18, 0, 0.28, 0),
          cyl(0.13, 0.16, 0.5, 10, 0, 0.5, 0),
          cyl(0.28, 0.22, 0.08, 14, 0, 0.78, 0),
        ], stone, 'fountain'));
        const waterMat = mat({ color: 0x4f7d80, emissive: 0x2f8f96, emissiveIntensity: 0, roughness: 0.1, metalness: 0.4 });
        registry.nightGlow.push({ mat: waterMat, level: 0.55 });
        g.add(new THREE.Mesh(cyl(0.46, 0.46, 0.03, 18, 0, 0.3, 0), waterMat));
        break;
      }
      case 'marketCross': {
        g.add(mergedMesh([
          box(0.34, 0.2, 0.34, 0, 0.1, 0),
          box(0.16, 1.0, 0.16, 0, 0.7, 0),
          box(0.5, 0.1, 0.1, 0, 1.05, 0),
          cyl(0.06, 0.06, 0.28, 8, 0, 1.28, 0),
        ], STONE(), 'cross'));
        break;
      }
      case 'crate': {
        const timber = trimMat(0x8a6a42, { roughness: 0.92 });
        const s = 0.28 + rnd() * 0.1;
        g.add(mergedMesh([
          box(s, s, s, 0, s / 2, 0),
          box(s * 1.02, 0.04, 0.04, 0, s * 0.75, 0),
          box(0.04, 0.04, s * 1.02, 0, s * 0.75, 0),
        ], timber, 'crate'));
        break;
      }
      case 'barrel': {
        g.add(new THREE.Mesh(cyl(0.15, 0.15, 0.34, 12), trimMat(0x7a5a34, { roughness: 0.9 })));
        g.children[0].position.y = 0.17;
        break;
      }
      case 'haystock': {
        const straw = trimMat(0xbc9a55, { roughness: 0.97, flatShading: true });
        const stack = new THREE.Mesh(new THREE.ConeGeometry(0.36, 0.66, 9, 1), straw);
        stack.position.y = 0.33;
        const skirt = new THREE.Mesh(cyl(0.42, 0.46, 0.12, 9), straw);
        skirt.position.y = 0.06;
        g.add(stack, skirt);
        break;
      }
      case 'boat': {
        const hull = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 0.42, 3, 8), trimMat(0x8c4b32, { roughness: 0.86 }));
        hull.rotation.z = Math.PI / 2;
        hull.position.y = 0.02;
        hull.castShadow = true;
        g.add(hull);
        g.add(mergedMesh([box(0.5, 0.03, 0.05, 0, 0.08, 0), box(0.05, 0.03, 0.3, 0.05, 0.08, 0)], trimMat(0xdcd3c0, { roughness: 0.8 }), 'boat-trim'));
        g.position.set(x, WATER_Y + 0.02, z);
        g.rotation.y = rot;
        group.add(g);
        registry.boats = registry.boats || [];
        registry.boats.push({ group: g, x, z, phase: rnd() * 6.28 });
        continue;
      }
      case 'bin': {
        g.add(mergedMesh([cyl(0.14, 0.11, 0.34, 10, 0, 0.17, 0), cyl(0.15, 0.15, 0.03, 10, 0, 0.35, 0)], trimMat(0x2f4a42, { roughness: 0.7, metalness: 0.2 }), 'bin'));
        break;
      }
      case 'boulder': {
        const geo = new THREE.IcosahedronGeometry(0.22 + rnd() * 0.12, 0);
        geo.scale(1.2, 0.8, 1.0);
        const rock = new THREE.Mesh(geo, trimMat(0x8b8578, { roughness: 0.96, flatShading: true }));
        rock.position.y = 0.1;
        rock.castShadow = true;
        rock.receiveShadow = true;
        g.add(rock);
        break;
      }
      case 'signpost': {
        g.add(mergedMesh([
          cyl(0.035, 0.045, 1.0, 7, 0, 0.5, 0),
          box(0.34, 0.11, 0.03, 0.12, 0.9, 0),
          box(0.28, 0.11, 0.03, -0.1, 0.72, 0),
        ], CREAM(), 'signpost'));
        break;
      }
      default:
        continue;
    }
    g.position.set(x, y, z);
    g.rotation.y = rot;
    setShadow(g, true, true);
    group.add(g);
  }
  // timber stacked in the goods yard
  const yard = new THREE.Group();
  const timberMat = trimMat(0x8f7346, { roughness: 0.94 });
  const logs = [];
  for (let i = 0; i < 12; i++) {
    logs.push(box(0.11, 0.11, 1.15 + (i % 3) * 0.18, (i % 4) * 0.16 - 0.24, 0.06 + Math.floor(i / 4) * 0.12, (i % 2) * 0.06));
  }
  const stack = mergedMesh(logs, timberMat, 'timber-stack');
  yard.add(stack);
  yard.position.set(7.35, groundHeight(7.35, 3.4), 3.35);
  yard.rotation.y = 0.42;
  setShadow(yard, true, true);
  group.add(yard);
}

function buildFigures(group) {
  const colours = [0x7a3b3b, 0x2f4a6b, 0x556139, 0x6b5a2f, 0x3f3a4a, 0x7d5a3a];
  const bodyMat = colours.map((c) => trimMat(c, { roughness: 0.9 }));
  const skin = trimMat(0xc9a486, { roughness: 0.9 });
  const parts = [];
  const heads = [];
  for (const [x, z, rot, kind] of FIGURES) {
    const y = groundHeight(x, z) + 0.005;
    const h = kind === 'child' ? 0.42 : 0.62;
    const c = bodyMat[Math.abs(Math.round(x * 13 + z * 7)) % bodyMat.length];
    const torso = cyl(h * 0.24, h * 0.19, h * 0.52, 7, x, y + h * 0.34, z, rot * 0.1);
    parts.push({ g: torso, m: c });
    heads.push({ g: new THREE.SphereGeometry(h * 0.115, 8, 6).translate(x, y + h * 0.72, z), m: skin });
    parts.push({ g: box(h * 0.3, h * 0.34, h * 0.16, x, y + h * 0.19, z, rot), m: c });
  }
  const byMat = new Map();
  for (const p of parts.concat(heads)) {
    if (!byMat.has(p.m)) byMat.set(p.m, []);
    byMat.get(p.m).push(p.g);
  }
  for (const [m, geos] of byMat) {
    const mesh = mergedMesh(geos, m, 'figures');
    setShadow(mesh, true, false);
    group.add(mesh);
  }
}

/** Station nameboards, notices and the little advertising frame that sell the halt. */
function buildStationDetail(group, registry) {
  const zc = STATION.z;
  const y = STATION.top + 0.02;
  const nameboardMat = mat({ color: 0xe8e2d0, roughness: 0.8 });
  if (!registry.nameboard) registry.nameboard = nameboardMat;
  for (const x of [-3.2, 1.5]) {
    const g = new THREE.Group();
    const board = new THREE.Mesh(box(1.5, 0.3, 0.06, 0, 0, 0), nameboardMat);
    g.add(board);
    const sign = new THREE.Mesh(
      new THREE.PlaneGeometry(1.42, 0.26),
      new THREE.MeshStandardMaterial({ map: stationSignTexture('MEADOWBANK'), roughness: 0.72 })
    );
    sign.position.z = 0.032;
    g.add(sign);
    const sign2 = sign.clone();
    sign2.position.z = -0.032;
    sign2.rotation.y = Math.PI;
    g.add(sign2);
    g.add(mergedMesh([box(1.56, 0.05, 0.075, 0, 0.14, 0), box(1.56, 0.05, 0.075, 0, -0.14, 0)], trimMat(0x2b4038, { roughness: 0.7 }), 'frame'));
    for (const s of [-1, 1]) g.add(mergedMesh([box(0.05, 0.34, 0.05, s * 0.62, -0.28, 0)], DARKIRON(), 'bracket'));
    g.position.set(x, y + 0.6, zc + 0.2);
    setShadow(g, true, false);
    group.add(g);
  }
  // notice board + a bookstall on the platform
  const stall = new THREE.Group();
  stall.add(mergedMesh([
    box(0.7, 0.62, 0.5, 0, 0.31, 0),
    box(0.78, 0.06, 0.58, 0, 0.65, 0),
    box(0.6, 0.3, 0.04, 0, 0.4, 0.26),
  ], trimMat(0x2f4a44, { roughness: 0.75 }), 'stall'));
  stall.position.set(-4.55, y, zc - 0.1);
  stall.rotation.y = 0.06;
  setShadow(stall, true, true);
  group.add(stall);

  const clock = new THREE.Group();
  const face = new THREE.Mesh(cyl(0.13, 0.13, 0.045, 18), mat({
    color: 0xf2ead6, emissive: 0xffe1a8, emissiveIntensity: 0, roughness: 0.6,
  }));
  face.rotation.x = Math.PI / 2;
  registry.nightGlow.push({ mat: face.material, level: 1.1 });
  clock.add(face);
  clock.add(mergedMesh([cyl(0.15, 0.15, 0.04, 18, 0, 0, -0.02, 0, { rotX: Math.PI / 2 })], trimMat(0x2b2b28, { roughness: 0.6, metalness: 0.5 }), 'clock-case'));
  clock.add(mergedMesh([box(0.02, 0.07, 0.012, 0, 0.02, 0.03), box(0.045, 0.016, 0.012, 0.015, -0.01, 0.03)], trimMat(0x1a1a18), 'hands'));
  clock.position.set(-1.5, y + 0.9, zc + 0.34);
  group.add(clock);
}

/** Window boxes, pots and verges that soften the plinths of the houses. */
function buildGardenBeds(group) {
  const rnd = makeRng(1234);
  const geo = new THREE.IcosahedronGeometry(0.14, 0);
  geo.scale(1.3, 0.6, 1.3);
  const mats = mat({ color: 0xffffff, roughness: 0.94, flatShading: true });
  const spots = [];
  for (const b of BUILDINGS) {
    if (b.w < 1.2 || ['waterTower'].includes(b.kind)) continue;
    const c = Math.cos(b.rot || 0), s = Math.sin(b.rot || 0);
    for (let i = 0; i < 3; i++) {
      const px = -b.w * 0.32 + i * b.w * 0.32;
      const x = b.x + px * c + (b.d / 2 + 0.3) * s;
      const z = b.z - px * s + (b.d / 2 + 0.3) * c;
      if (railDistance(x, z) < 1.3) continue;
      if (isWater(x, z)) continue;
      if (groundHeight(x, z) < WATER_Y + 0.05) continue;
      spots.push({ x, z, col: rnd() > 0.5 ? 0x4d7038 : 0x6d7a34, scale: 0.7 + rnd() * 0.6 });
    }
  }
  const mesh = new THREE.InstancedMesh(geo, mats, spots.length);
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const col = new THREE.Color();
  spots.forEach((p, i) => {
    q.setFromEuler(new THREE.Euler(0, rnd() * 3, 0));
    m.compose(new THREE.Vector3(p.x, groundHeight(p.x, p.z) + 0.05, p.z), q, new THREE.Vector3(p.scale, p.scale * 0.9, p.scale));
    mesh.setMatrixAt(i, m);
    col.setHex(p.col).multiplyScalar(0.8 + rnd() * 0.5);
    mesh.setColorAt(i, col);
  });
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  mesh.castShadow = true;
  mesh.name = 'garden-beds';
  group.add(mesh);
}
