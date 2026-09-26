/**
 * 植被与小品：树木（实例化）、灌木、围栏、路灯（含夜间辉光）、
 * 草垛、木箱、电话杆等微缩道具。
 */
import * as THREE from 'three';
import { TREE_CLUSTERS, STREET_TREES, LAMPS, PLATFORM_LAMPS, RAIL_PROPS } from '../config.js';
import { makeRandom, lerp } from '../lib/util.js';
import { makeGlowTexture } from '../lib/textures.js';
import { registerGlow } from './shared.js';

function collectTrees(heightAt) {
  const rng = makeRandom(9182736);
  const trees = [];

  for (const c of TREE_CLUSTERS) {
    for (let i = 0; i < c.count; i++) {
      const a = rng.next() * Math.PI * 2;
      const r = Math.sqrt(rng.next()) * c.r;
      const x = c.x + Math.cos(a) * r;
      const z = c.z + Math.sin(a) * r * 0.82;
      if (Math.abs(x) > 11.6 || Math.abs(z) > 7.7) continue;
      trees.push({
        x,
        z,
        y: heightAt(x, z),
        type: c.type === 'conifer' ? 'conifer' : rng.next() < 0.28 ? 'conifer' : 'broad',
        scale: rng.range(0.78, 1.32),
        hue: rng.range(-0.06, 0.08),
      });
    }
  }
  for (const [x, z] of STREET_TREES) {
    trees.push({
      x,
      z,
      y: heightAt(x, z),
      type: rng.next() < 0.22 ? 'conifer' : 'broad',
      scale: rng.range(0.72, 0.95),
      hue: rng.range(-0.04, 0.06),
    });
  }
  return trees;
}

function buildTrees(heightAt) {
  const group = new THREE.Group();
  const trees = collectTrees(heightAt);
  const rng = makeRandom(5150);

  const broad = trees.filter((t) => t.type === 'broad');
  const conifer = trees.filter((t) => t.type === 'conifer');

  const trunkGeo = new THREE.CylinderGeometry(0.052, 0.082, 1, 7);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x6a4a2f, roughness: 0.95, flatShading: true });
  const trunkInst = new THREE.InstancedMesh(trunkGeo, trunkMat, trees.length);
  trunkInst.castShadow = true;
  trunkInst.receiveShadow = true;

  const leafGeo = new THREE.IcosahedronGeometry(0.46, 0);
  const leafMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.86,
    flatShading: true,
  });
  const clumpsPerBroad = 3;
  const leafInst = new THREE.InstancedMesh(leafGeo, leafMat, broad.length * clumpsPerBroad + conifer.length * 3);
  leafInst.castShadow = true;
  leafInst.receiveShadow = true;

  const dummy = new THREE.Object3D();
  const color = new THREE.Color();
  let trunkIdx = 0;
  let leafIdx = 0;

  for (const t of trees) {
    const trunkH = t.type === 'conifer' ? 0.62 * t.scale : 0.72 * t.scale;
    dummy.position.set(t.x, t.y + trunkH / 2, t.z);
    dummy.rotation.set(0, rng.next() * Math.PI, 0);
    dummy.scale.set(t.scale, trunkH, t.scale);
    dummy.updateMatrix();
    trunkInst.setMatrixAt(trunkIdx++, dummy.matrix);

    if (t.type === 'broad') {
      const baseY = t.y + trunkH;
      const offsets = [
        [0, 0.34, 0, 1.06],
        [0.26, 0.12, 0.16, 0.82],
        [-0.22, 0.16, -0.2, 0.76],
      ];
      for (const [ox, oy, oz, s] of offsets) {
        dummy.position.set(t.x + ox * t.scale, baseY + oy * t.scale, t.z + oz * t.scale);
        dummy.rotation.set(rng.range(-0.3, 0.3), rng.next() * Math.PI, rng.range(-0.3, 0.3));
        dummy.scale.setScalar(s * t.scale * 1.02);
        dummy.updateMatrix();
        leafInst.setMatrixAt(leafIdx, dummy.matrix);
        color.setHSL(0.26 + t.hue * 0.5, 0.42, 0.3 + rng.range(-0.05, 0.07));
        leafInst.setColorAt(leafIdx, color);
        leafIdx++;
      }
    } else {
      // 针叶树：三层锥体
      const layers = [
        [0.62, 0.52, 1.0],
        [0.46, 0.86, 0.82],
        [0.3, 1.16, 0.62],
      ];
      for (const [r, y, s] of layers) {
        dummy.position.set(t.x, t.y + y * t.scale, t.z);
        dummy.rotation.set(0, rng.next() * Math.PI, 0);
        dummy.scale.set(r * t.scale * 1.65, s * t.scale * 1.25, r * t.scale * 1.65);
        dummy.updateMatrix();
        leafInst.setMatrixAt(leafIdx, dummy.matrix);
        color.setHSL(0.35 + t.hue * 0.4, 0.36, 0.24 + rng.range(-0.03, 0.06));
        leafInst.setColorAt(leafIdx, color);
        leafIdx++;
      }
    }
  }

  trunkInst.instanceMatrix.needsUpdate = true;
  leafInst.instanceMatrix.needsUpdate = true;
  if (leafInst.instanceColor) leafInst.instanceColor.needsUpdate = true;
  group.add(trunkInst, leafInst);

  // 灌木丛
  const bushGeo = new THREE.IcosahedronGeometry(0.3, 0);
  const bushMat = new THREE.MeshStandardMaterial({ color: 0x5e7c46, roughness: 0.9, flatShading: true });
  const bushSpots = [
    [-2.2, -2.1],
    [-0.6, -1.15],
    [-3.15, -0.75],
    [4.35, 2.95],
    [5.95, 3.75],
    [7.05, 0.15],
    [-6.35, 4.15],
    [-4.35, 4.35],
    [-8.35, 3.15],
    [2.45, -4.75],
    [-1.35, -4.35],
    [-7.05, -2.85],
    [-9.05, -1.75],
    [6.35, -2.45],
    [1.85, 2.05],
    [-2.85, 2.35],
  ];
  const bushInst = new THREE.InstancedMesh(bushGeo, bushMat, bushSpots.length * 2);
  bushInst.castShadow = true;
  bushInst.receiveShadow = true;
  let bi = 0;
  for (const [x, z] of bushSpots) {
    for (let k = 0; k < 2; k++) {
      const s = rng.range(0.62, 1.15);
      dummy.position.set(
        x + rng.jitter(0, 0.3),
        heightAt(x, z) + 0.16 * s,
        z + rng.jitter(0, 0.3),
      );
      dummy.rotation.set(rng.range(-0.2, 0.2), rng.next() * Math.PI, rng.range(-0.2, 0.2));
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      bushInst.setMatrixAt(bi, dummy.matrix);
      color.setHSL(0.27 + rng.range(-0.04, 0.05), 0.38, 0.27 + rng.range(-0.04, 0.05));
      bushInst.setColorAt(bi, color);
      bi++;
    }
  }
  bushInst.instanceMatrix.needsUpdate = true;
  if (bushInst.instanceColor) bushInst.instanceColor.needsUpdate = true;
  group.add(bushInst);

  return group;
}

function buildFences(heightAt) {
  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x8a6a44, roughness: 0.92 });
  const rng = makeRandom(31415);
  const segments = [
    // 农田围栏
    [-11.4, -7.2, -11.4, -4.4],
    [-11.4, -4.4, -8.6, -4.4],
    [6.6, -7.4, 11.4, -7.4],
    [11.4, -7.4, 11.4, -5.2],
    // 宅前花园
    [-8.6, 2.95, -6.6, 2.95],
    [-6.4, 2.75, -4.5, 2.75],
    [-3.75, 2.55, -1.85, 2.55],
    [2.2, -4.95, 4.1, -4.95],
  ];
  const postGeo = new THREE.BoxGeometry(0.075, 0.42, 0.075);
  const posts = [];
  const rails = [];
  for (const [x1, z1, x2, z2] of segments) {
    const len = Math.hypot(x2 - x1, z2 - z1);
    const n = Math.max(2, Math.round(len / 0.62));
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      posts.push([lerp(x1, x2, t), lerp(z1, z2, t)]);
    }
    rails.push([x1, z1, x2, z2]);
  }
  const postInst = new THREE.InstancedMesh(postGeo, mat, posts.length);
  postInst.castShadow = true;
  postInst.receiveShadow = true;
  const dummy = new THREE.Object3D();
  posts.forEach(([x, z], i) => {
    dummy.position.set(x, heightAt(x, z) + 0.21, z);
    dummy.rotation.set(0, rng.jitter(0, 0.1), 0);
    dummy.updateMatrix();
    postInst.setMatrixAt(i, dummy.matrix);
  });
  postInst.instanceMatrix.needsUpdate = true;
  group.add(postInst);

  for (const [x1, z1, x2, z2] of rails) {
    for (const h of [0.16, 0.31]) {
      const len = Math.hypot(x2 - x1, z2 - z1);
      const rail = new THREE.Mesh(new THREE.BoxGeometry(len, 0.038, 0.032), mat);
      rail.position.set((x1 + x2) / 2, heightAt((x1 + x2) / 2, (z1 + z2) / 2) + h, (z1 + z2) / 2);
      rail.rotation.y = -Math.atan2(z2 - z1, x2 - x1);
      rail.castShadow = true;
      group.add(rail);
    }
  }
  return group;
}

// 路灯共享材质（保证跨路灯合批生效）
const LAMP_METAL = new THREE.MeshStandardMaterial({ color: 0x2f2c28, roughness: 0.62, metalness: 0.35 });
const LAMP_HEAD = new THREE.MeshStandardMaterial({
  color: 0xfdf0d0,
  roughness: 0.35,
  emissive: 0xffca87,
  emissiveIntensity: 0,
});
registerGlow(LAMP_HEAD, { emissiveNight: 2.6, emissiveDay: 0 });

function buildLamp(glowTex) {
  const g = new THREE.Group();
  const metal = LAMP_METAL;
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.05, 0.86, 8), metal);
  post.position.y = 0.43;
  g.add(post);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.115, 0.09, 10), metal);
  base.position.y = 0.045;
  g.add(base);
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.3, 6), metal);
  arm.rotation.z = Math.PI / 2;
  arm.position.set(0.13, 0.84, 0);
  g.add(arm);
  const hood = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.1, 10), metal);
  hood.position.set(0.27, 0.82, 0);
  g.add(hood);
  const headMat = LAMP_HEAD;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.058, 12, 10), headMat);
  head.position.set(0.27, 0.775, 0);
  g.add(head);

  const spriteMat = new THREE.SpriteMaterial({
    map: glowTex,
    color: 0xffd9a5,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const sprite = new THREE.Sprite(spriteMat);
  sprite.position.set(0.27, 0.775, 0);
  sprite.scale.setScalar(1.15);
  g.add(sprite);
  registerGlow(spriteMat, { opacityDay: 0, opacityNight: 0.62 });

  g.traverse((o) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
  sprite.castShadow = false;
  return g;
}

function buildProps(heightAt) {
  const group = new THREE.Group();
  const rng = makeRandom(271828);
  const wood = new THREE.MeshStandardMaterial({ color: 0x7a5836, roughness: 0.9 });
  const woodDark = new THREE.MeshStandardMaterial({ color: 0x543920, roughness: 0.9 });
  const straw = new THREE.MeshStandardMaterial({ color: 0xc9a75c, roughness: 0.98 });
  const metal = new THREE.MeshStandardMaterial({ color: 0x50565e, roughness: 0.6, metalness: 0.4 });

  // 木箱（货场）
  const crateGeo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
  const crateSpots = [
    [5.85, -2.2],
    [6.2, -2.35],
    [5.95, -2.62],
    [4.85, -2.55],
    [8.05, -2.25],
    [3.55, 4.35],
  ];
  crateSpots.forEach(([x, z], i) => {
    const c = new THREE.Mesh(crateGeo, i % 2 ? woodDark : wood);
    c.position.set(x, heightAt(x, z) + 0.15 + (i % 3 === 0 ? 0.3 : 0), z);
    c.rotation.y = rng.range(-0.5, 0.5);
    c.castShadow = true;
    c.receiveShadow = true;
    group.add(c);
  });

  // 草垛
  for (const [x, z, rot] of [
    [9.05, -6.55, 0.3],
    [9.95, -6.15, -0.4],
    [8.15, -6.85, 0.8],
    [-2.45, -6.75, 0.2],
    [-4.15, -6.65, -0.5],
    [5.35, 6.95, 0.4],
  ]) {
    const bale = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.42, 12), straw);
    bale.rotation.z = Math.PI / 2;
    bale.rotation.y = rot;
    bale.position.set(x, heightAt(x, z) + 0.24, z);
    bale.castShadow = true;
    bale.receiveShadow = true;
    group.add(bale);
  }

  // 水井
  const well = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.34, 0.26, 14), wood);
  ring.position.y = 0.13;
  well.add(ring);
  for (const s of [-1, 1]) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.72, 0.055), woodDark);
    post.position.set(s * 0.28, 0.36, 0);
    well.add(post);
  }
  const beam = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.055, 0.055), woodDark);
  beam.position.y = 0.72;
  well.add(beam);
  const roof = new THREE.Mesh(new THREE.ConeGeometry(0.46, 0.24, 4), woodDark);
  roof.rotation.y = Math.PI / 4;
  roof.position.y = 0.88;
  well.add(roof);
  const crank = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.5, 8), metal);
  crank.rotation.z = Math.PI / 2;
  crank.position.y = 0.62;
  well.add(crank);
  well.position.set(-2.95, heightAt(-2.95, -2.15), -2.15);
  well.traverse((o) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
  group.add(well);

  // 电话杆（沿铁路）
  const poleSpots = [
    [-6.9, -5.0],
    [-1.2, -5.0],
    [6.6, -5.0],
    [10.4, -1.6],
    [10.4, 2.2],
  ];
  for (const [x, z] of poleSpots) {
    const pole = new THREE.Group();
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.075, 1.35, 8), woodDark);
    shaft.position.y = 0.675;
    pole.add(shaft);
    for (const h of [1.14, 1.28]) {
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.045, 0.045), woodDark);
      arm.position.y = h;
      pole.add(arm);
      for (const s of [-1, 1]) {
        const ins = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.05, 6), metal);
        ins.position.set(s * 0.17, h + 0.045, 0);
        pole.add(ins);
      }
    }
    pole.position.set(x, heightAt(x, z), z);
    pole.traverse((o) => {
      o.castShadow = true;
      o.receiveShadow = true;
    });
    group.add(pole);
  }

  return group;
}

export function buildScenery(scene, heightAt) {
  const group = new THREE.Group();
  group.name = 'scenery';
  const glowTex = makeGlowTexture();

  group.add(buildTrees(heightAt));
  group.add(buildFences(heightAt));
  group.add(buildProps(heightAt));

  for (const [x, z] of LAMPS) {
    const lamp = buildLamp(glowTex);
    lamp.position.set(x, heightAt(x, z), z);
    lamp.rotation.y = Math.atan2(-x * 0.02, 1) + 0.2;
    group.add(lamp);
  }
  for (const [x, z] of PLATFORM_LAMPS) {
    const lamp = buildLamp(glowTex);
    lamp.position.set(x, 0.2, z);
    lamp.rotation.y = Math.PI;
    lamp.scale.setScalar(1.12);
    group.add(lamp);
  }

  scene.add(group);
  return group;
}
