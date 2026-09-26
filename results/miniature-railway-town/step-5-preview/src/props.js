/**
 * Small props: street lamps, benches, the fountain, the water wheel, a
 * footbridge, railway signals and the instanced tree/bush scatter.
 */
import * as THREE from 'three';
import { mulberry32, clamp } from './geom.js';

export function streetLamp(M, theme, { light = false } = {}) {
  const g = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.085, 1.5, 8), M.lampPost);
  pole.position.y = 0.75;
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, 0.16, 8), M.lampPost);
  base.position.y = 0.08;
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.08, 0.1), M.lampPost);
  arm.position.set(0.18, 1.48, 0);
  const lantern = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.12, 0.28, 6), M.lampGlass);
  lantern.position.set(0.36, 1.36, 0);
  const cap = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.16, 6), M.lampPost);
  cap.position.set(0.36, 1.57, 0);
  g.add(pole, base, arm, lantern, cap);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  if (light) {
    const pl = new THREE.PointLight(0xffb45c, 0, 7.5, 2);
    pl.position.set(0.36, 1.3, 0);
    g.add(pl);
    theme.addLight(pl, 0, 1.35);
  }
  return g;
}

export function bench(M) {
  const g = new THREE.Group();
  const wood = new THREE.MeshStandardMaterial({ color: 0x8a6236, roughness: 0.85 });
  const seat = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.09, 0.34), wood);
  seat.position.y = 0.42;
  const back = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.3, 0.07), wood);
  back.position.set(0, 0.62, -0.14);
  back.rotation.x = -0.18;
  for (const x of [-0.46, 0.46]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.42, 0.3), M.metalDark);
    leg.position.set(x, 0.21, 0);
    g.add(leg);
  }
  g.add(seat, back);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

export function crate(M, s = 0.5) {
  const wood = new THREE.MeshStandardMaterial({ color: 0x9a7a4c, roughness: 0.9 });
  const g = new THREE.Group();
  const m = new THREE.Mesh(new THREE.BoxGeometry(s, s, s), wood);
  m.position.y = s / 2;
  const band = new THREE.Mesh(new THREE.BoxGeometry(s * 1.03, s * 0.1, s * 1.03), M.frameDark);
  band.position.y = s * 0.75;
  g.add(m, band);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}

export function barrel(M) {
  const wood = new THREE.MeshStandardMaterial({ color: 0x7d5a34, roughness: 0.9 });
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.24, 0.62, 10), wood);
  body.position.y = 0.31;
  for (const y of [0.16, 0.46]) {
    const hoop = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.025, 5, 12), M.metalDark);
    hoop.rotation.x = Math.PI / 2;
    hoop.position.y = y;
    g.add(hoop);
  }
  g.add(body);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

export function fountain(M) {
  const g = new THREE.Group();
  const basin = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.12, 0.36, 8), M.stone);
  basin.position.y = 0.18;
  const pool = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.95, 0.05, 12), M.water);
  pool.position.y = 0.34;
  const column = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 0.85, 8), M.stone);
  column.position.y = 0.8;
  const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.16, 0.14, 8), M.stone);
  bowl.position.y = 1.24;
  const jet = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.02, 0.5, 6), M.water);
  jet.position.y = 1.55;
  g.add(basin, pool, column, bowl, jet);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}

/** Water wheel: returns the group plus the rotating hub. */
export function waterWheel(M, radius = 1.45) {
  const g = new THREE.Group();
  const wheel = new THREE.Group();
  const rimMat = M.bridgeWood;
  const axleLen = 0.7;
  for (const side of [-1, 1]) {
    const rim = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.075, 5, 22), rimMat);
    rim.rotation.y = Math.PI / 2;
    rim.position.x = side * axleLen / 2;
    rim.castShadow = true;
    wheel.add(rim);
  }
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, axleLen + 0.2, 10), M.metalDark);
  hub.rotation.z = Math.PI / 2;
  wheel.add(hub);
  const paddleGeo = new THREE.BoxGeometry(axleLen, 0.16, 0.42);
  const spokeGeo = new THREE.BoxGeometry(axleLen * 0.95, 0.06, 0.06);
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    const dx = Math.cos(a) * radius;
    const dy = Math.sin(a) * radius;
    const paddle = new THREE.Mesh(paddleGeo, rimMat);
    paddle.position.set(0, dy, dx);
    paddle.rotation.x = -a;
    wheel.add(paddle);
    const spoke = new THREE.Mesh(spokeGeo, M.metalDark);
    spoke.position.set(0, dy * 0.55, dx * 0.55);
    spoke.rotation.x = -a;
    wheel.add(spoke);
  }
  // Supports.
  for (const side of [-1, 1]) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.9, 0.16), rimMat);
    post.position.set(side * 0.42, radius - 0.1, 0.42);
    post.rotation.z = -side * 0.12;
    g.add(post);
  }
  wheel.position.y = 0;
  g.add(wheel);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return { group: g, wheel };
}

/** Small arched footbridge across the river. */
export function footbridge(M, span = 3.4, width = 1.1) {
  const g = new THREE.Group();
  const planks = 7;
  const rise = 0.42;
  for (let i = 0; i < planks; i++) {
    const t = i / (planks - 1);
    const y = Math.sin(t * Math.PI) * rise;
    const plank = new THREE.Mesh(new THREE.BoxGeometry(span / planks, 0.09, width), M.bridgeWood);
    plank.position.set(-span / 2 + span / planks * (i + 0.5), y + 0.36, 0);
    plank.rotation.z = -Math.cos(t * Math.PI) * rise / (span / planks) * 0.9;
    g.add(plank);
  }
  for (const side of [-1, 1]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(span, 0.09, 0.09), M.bridgeWood);
    rail.position.set(0, 0.36 + rise + 0.5, side * (width / 2 - 0.05));
    rail.rotation.z = rise / span * 0.45 * -side * 0;
    g.add(rail);
    for (let i = 0; i <= 5; i++) {
      const t = i / 5;
      const y = Math.sin(t * Math.PI) * rise;
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.52, 0.08), M.bridgeWood);
      post.position.set(-span / 2 + span * t, y + 0.36 + 0.26, side * (width / 2 - 0.05));
      g.add(post);
    }
  }
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}

/** Railway signal post with a lamp that glows after dark. */
export function railSignal(M, theme) {
  const g = new THREE.Group();
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 1.5, 6), M.metalDark);
  post.position.y = 0.75;
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.05), M.metalDark);
  arm.position.set(0.25, 1.42, 0);
  arm.rotation.z = -0.08;
  const lampMat = new THREE.MeshStandardMaterial({ color: 0xd8f0d8, roughness: 0.4, emissive: 0x33ff55 });
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 8), lampMat);
  lamp.position.set(0.52, 1.42, 0);
  g.add(post, arm, lamp);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  theme.add(lampMat, 0x101410, 0x35ff60, 1, 2.2);
  return g;
}

export function levelCrossingSign(M) {
  const g = new THREE.Group();
  const post = new THREE.Mesh(new THREE.BoxGeometry(0.09, 1.1, 0.09), M.metalDark);
  post.position.y = 0.55;
  const board = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.34, 0.05), M.frameDark);
  board.position.y = 1.15;
  const stripeMat = new THREE.MeshStandardMaterial({ color: 0xd8d2c4, roughness: 0.6 });
  const stripeMat2 = new THREE.MeshStandardMaterial({ color: 0xa8352a, roughness: 0.6 });
  for (let i = 0; i < 3; i++) {
    const s1 = new THREE.Mesh(new THREE.BoxGeometry(0.43, 0.09, 0.06), stripeMat2);
    s1.position.set(0, 1.06 + i * 0.1, 0.03);
    const s2 = new THREE.Mesh(new THREE.BoxGeometry(0.43, 0.09, 0.06), stripeMat);
    s2.position.set(0, 1.06 + i * 0.1 + 0.035, 0.03);
    g.add(s1, s2);
  }
  g.add(post, board);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

/**
 * Trees + bushes as instanced meshes. Instances are chosen by a seeded scatter
 * that respects every keep-out zone, so nothing grows through a building.
 */
export function buildVegetation(M, layout, keepout, { trees = 40, bushes = 26 } = {}) {
  const rnd = mulberry32(20260926);
  const group = new THREE.Group();
  group.name = 'vegetation';

  const trunkGeo = new THREE.CylinderGeometry(0.075, 0.11, 0.55, 6);
  trunkGeo.translate(0, 0.27, 0);
  const blobGeo = new THREE.IcosahedronGeometry(0.52, 1);
  blobGeo.scale(1, 0.85, 1);
  blobGeo.translate(0, 1.05, 0);
  const blob2Geo = new THREE.IcosahedronGeometry(0.36, 1);
  blob2Geo.translate(0, 1.5, 0);
  const cone1Geo = new THREE.ConeGeometry(0.5, 0.62, 7);
  cone1Geo.translate(0, 1.0, 0);
  const cone2Geo = new THREE.ConeGeometry(0.4, 0.56, 7);
  cone2Geo.translate(0, 1.42, 0);
  const cone3Geo = new THREE.ConeGeometry(0.28, 0.5, 7);
  cone3Geo.translate(0, 1.82, 0);
  const bushGeo = new THREE.IcosahedronGeometry(0.3, 0);
  bushGeo.scale(1.15, 0.8, 1.15);
  bushGeo.translate(0, 0.24, 0);

  // Decide spots first.
  const spots = [];
  let guard = 0;
  while (spots.length < trees && guard++ < trees * 260) {
    const x = (rnd() * 2 - 1) * (layout.TERRAIN.w / 2 - 1.2);
    const z = (rnd() * 2 - 1) * (layout.TERRAIN.d / 2 - 1.2);
    if (!keepout.free(x, z, { track: 1.35, river: 2.0, road: 0.75, pad: 0.4 })) continue;
    // Keep some spacing between trees.
    let ok = true;
    for (const s of spots) {
      if ((s.x - x) ** 2 + (s.z - z) ** 2 < 1.7 * 1.7) { ok = false; break; }
    }
    if (!ok) continue;
    const roll = rnd();
    spots.push({
      x, z,
      type: roll < 0.42 ? 'round' : roll < 0.8 ? 'pine' : 'small',
      scale: 0.75 + rnd() * 0.55,
      rot: rnd() * Math.PI * 2,
    });
  }

  const bushSpots = [];
  guard = 0;
  while (bushSpots.length < bushes && guard++ < bushes * 260) {
    const x = (rnd() * 2 - 1) * (layout.TERRAIN.w / 2 - 1.0);
    const z = (rnd() * 2 - 1) * (layout.TERRAIN.d / 2 - 1.0);
    if (!keepout.free(x, z, { track: 1.15, river: 1.65, road: 0.7, pad: 0.2 })) continue;
    if (keepout.blocked(x, z, 0.3)) continue;
    bushSpots.push({ x, z, scale: 0.7 + rnd() * 0.6, rot: rnd() * Math.PI * 2 });
  }

  const leafMats = [M.leaf, M.leafDark, M.leafAutumn];
  const trunkCount = spots.length;
  const coneCount = spots.filter((s) => s.type !== 'round').length * 3;
  const blobCount = spots.filter((s) => s.type !== 'pine').length * 2;

  const trunks = new THREE.InstancedMesh(trunkGeo, M.trunk, trunkCount);
  trunks.castShadow = true;
  trunks.receiveShadow = true;
  const cones = new THREE.InstancedMesh(cone1Geo, M.leaf, coneCount);
  cones.castShadow = true;
  const blobs = new THREE.InstancedMesh(blobGeo, M.leaf, blobCount);
  blobs.castShadow = true;

  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const up = new THREE.Vector3(0, 1, 0);
  const pos = new THREE.Vector3();
  const scl = new THREE.Vector3();
  let ti = 0;
  let ci = 0;
  let bi = 0;
  const leafPalette = [new THREE.Color(0x66913f), new THREE.Color(0x4d7a33), new THREE.Color(0x86a04a), new THREE.Color(0x5d8a3a)];
  const colorRnd = mulberry32(7717);
  const pickLeaf = () => leafPalette[(colorRnd() * leafPalette.length) | 0];

  for (const s of spots) {
    q.setFromAxisAngle(up, s.rot);
    pos.set(s.x, 0, s.z);
    scl.set(s.scale, s.scale, s.scale);
    m.compose(pos, q, scl);
    trunks.setMatrixAt(ti++, m);
    if (s.type === 'round' || s.type === 'small') {
      const tint = pickLeaf();
      m.compose(pos, q, scl);
      blobs.setMatrixAt(bi++, m);
      blobs.setColorAt(bi - 1, tint);
      scl.set(s.scale * 0.82, s.scale * 0.82, s.scale * 0.82);
      m.compose(pos, q, scl);
      blobs.setMatrixAt(bi++, m);
      blobs.setColorAt(bi - 1, tint);
      scl.set(s.scale, s.scale, s.scale);
    } else {
      for (const geo of [cone1Geo, cone2Geo, cone3Geo]) {
        const tint = pickLeaf();
        m.compose(pos, q, scl);
        cones.setMatrixAt(ci, m);
        cones.setColorAt(ci, tint);
        ci++;
      }
    }
  }
  trunks.count = ti;
  cones.count = ci;
  blobs.count = bi;
  trunks.instanceMatrix.needsUpdate = true;
  cones.instanceMatrix.needsUpdate = true;
  blobs.instanceMatrix.needsUpdate = true;
  if (cones.instanceColor) cones.instanceColor.needsUpdate = true;
  if (blobs.instanceColor) blobs.instanceColor.needsUpdate = true;
  group.add(trunks, cones, blobs);

  // Bushes
  const bushMesh = new THREE.InstancedMesh(bushGeo, M.hedge, bushSpots.length);
  bushMesh.castShadow = true;
  bushMesh.receiveShadow = true;
  bushSpots.forEach((s, i) => {
    q.setFromAxisAngle(up, s.rot);
    pos.set(s.x, 0, s.z);
    scl.set(s.scale, s.scale, s.scale);
    m.compose(pos, q, scl);
    bushMesh.setMatrixAt(i, m);
    bushMesh.setColorAt(i, pickLeaf());
  });
  bushMesh.instanceMatrix.needsUpdate = true;
  if (bushMesh.instanceColor) bushMesh.instanceColor.needsUpdate = true;
  group.add(bushMesh);

  return { group, treeCount: spots.length };
}
