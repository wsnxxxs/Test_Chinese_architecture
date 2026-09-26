// 铁路本体：道床、钢轨、枕木，跨河桥梁（石拱桥 / 钢桁架桥）、道路桥与平交道口
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {
  track, trackBridgeSpans, roads, roadBridgeSpan, BED_Y, WATER_Y,
} from './world.js';
import * as MAT from './materials.js';
import * as TX from './textures.js';
import { boxUV } from './buildings.js';

const BG = (w, h, d) => boxUV(new THREE.BoxGeometry(w, h, d), w, h, d);

const UP = new THREE.Vector3(0, 1, 0);

export const RAIL_GAUGE_HALF = 0.21;
export const RAIL_TOP = 0.168;

/** 沿轨道扫掠一个 2D 截面（截面点位于 (横向, 高度) 平面，逆时针） */
export function sweep(samples, profile, { closed = false, uvScale = 1 } = {}) {
  const pos = [], uv = [], idx = [];
  const P = profile.length;
  const per = [0];
  for (let j = 1; j <= P; j++) {
    const a = profile[j - 1], b = profile[j % P];
    per.push(per[j - 1] + Math.hypot(b[0] - a[0], b[1] - a[1]));
  }
  let dist = 0;
  samples.forEach((sm, i) => {
    if (i) dist += sm.p.distanceTo(samples[i - 1].p);
    for (let j = 0; j < P; j++) {
      pos.push(sm.p.x + sm.lat.x * profile[j][0], sm.p.y + profile[j][1], sm.p.z + sm.lat.z * profile[j][0]);
      uv.push(per[j] / uvScale, dist / uvScale);
    }
  });
  const S = samples.length;
  const segs = closed ? S : S - 1;
  for (let i = 0; i < segs; i++) {
    const i2 = (i + 1) % S;
    for (let j = 0; j < P; j++) {
      const j2 = (j + 1) % P;
      const A = i * P + j, B = i * P + j2, C = i2 * P + j2, D = i2 * P + j;
      idx.push(A, D, C, A, C, B);
    }
  }
  if (!closed) {
    for (let j = 1; j < P - 1; j++) {
      idx.push(0, j, j + 1);                                    // 起始盖（朝 -T）
      const o = (S - 1) * P;
      idx.push(o, o + j + 1, o + j);                            // 结束盖（朝 +T）
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

export function sampleTrack(s0, s1, step) {
  const out = [];
  const n = Math.max(2, Math.ceil((s1 - s0) / step));
  for (let i = 0; i <= n; i++) {
    const s = s0 + ((s1 - s0) * i) / n;
    const p = track.at(s), t = track.tangent(s);
    out.push({ s, p, t, lat: new THREE.Vector3(-t.z, 0, t.x) });
  }
  return out;
}

/** 两点之间的方梁 */
function beamGeo(a, b, w, h) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length(); dir.normalize();
  let x = new THREE.Vector3().crossVectors(UP, dir);
  if (x.lengthSq() < 1e-6) x.set(1, 0, 0);
  x.normalize();
  const y = new THREE.Vector3().crossVectors(dir, x);
  const m = new THREE.Matrix4().makeBasis(x, y, dir).setPosition(a.clone().add(b).multiplyScalar(0.5));
  const g = new THREE.BoxGeometry(w, h, len);
  g.applyMatrix4(m);
  return g;
}

function shadow(m, cast = true, recv = true) { m.castShadow = cast; m.receiveShadow = recv; return m; }

/* -------------------------------- 桥梁 -------------------------------- */
function archBridge(center, tangent, length, width, { parapetH = 0.22, top = -0.02, mat, capMat, paved = false }) {
  const g = new THREE.Group();
  const y0 = BED_Y - 0.15;
  const shape = new THREE.Shape();
  shape.moveTo(-length / 2, y0); shape.lineTo(length / 2, y0);
  shape.lineTo(length / 2, top); shape.lineTo(-length / 2, top); shape.closePath();
  const a = Math.max(1.0, length / 2 - 0.55), base = BED_Y - 0.1, peak = top - 0.24;
  const hole = new THREE.Path();
  const N = 28;
  for (let i = 0; i <= N; i++) {
    const t = Math.PI - (Math.PI * i) / N;
    const x = Math.cos(t) * a, y = base + Math.sin(t) * (peak - base);
    i ? hole.lineTo(x, y) : hole.moveTo(x, y);
  }
  hole.closePath();
  shape.holes.push(hole);
  const geo = new THREE.ExtrudeGeometry(shape, { depth: width, bevelEnabled: false, curveSegments: 4 });
  geo.translate(0, 0, -width / 2);
  const body = shadow(new THREE.Mesh(geo, mat));
  g.add(body);
  // 压顶石 / 护墙
  for (const sgn of [-1, 1]) {
    const w = 0.09;
    const p = new THREE.Mesh(BG(length + 0.04, parapetH, w), capMat || mat);
    p.position.set(0, top + parapetH / 2, sgn * (width / 2 - w / 2));
    g.add(shadow(p));
    const cap = new THREE.Mesh(BG(length + 0.08, 0.03, w + 0.04), capMat || mat);
    cap.position.set(0, top + parapetH + 0.015, sgn * (width / 2 - w / 2));
    g.add(shadow(cap));
  }
  if (paved) {
    const road = new THREE.Mesh(new THREE.BoxGeometry(length, 0.01, width - 0.2), MAT.paint(0x5f5c58, 0.95));
    road.position.set(0, top + 0.005, 0); g.add(shadow(road, false));
  }
  g.position.copy(center); g.position.y = 0;
  g.rotation.y = Math.atan2(-tangent.z, tangent.x);
  return g;
}

function truss(s0, s1) {
  const group = new THREE.Group();
  const paintMat = MAT.metal(0x4a6a5a, 0.5);
  const geos = [];
  const bays = Math.max(6, Math.round((s1 - s0) / 0.6));
  const nodes = [];
  for (let i = 0; i <= bays; i++) {
    const s = s0 + ((s1 - s0) * i) / bays;
    const p = track.at(s), t = track.tangent(s);
    nodes.push({ p, lat: new THREE.Vector3(-t.z, 0, t.x) });
  }
  const H = 1.12, LAT = 0.47, BOT = 0.02;
  const pt = (n, side, y) => new THREE.Vector3(n.p.x + n.lat.x * LAT * side, y, n.p.z + n.lat.z * LAT * side);
  for (const side of [-1, 1]) {
    for (let i = 0; i <= bays; i++) {
      geos.push(beamGeo(pt(nodes[i], side, BOT), pt(nodes[i], side, H), 0.055, 0.045));
      if (i < bays) {
        geos.push(beamGeo(pt(nodes[i], side, BOT), pt(nodes[i + 1], side, BOT), 0.06, 0.06));
        geos.push(beamGeo(pt(nodes[i], side, H), pt(nodes[i + 1], side, H), 0.07, 0.06));
        const [a, b] = i % 2 ? [pt(nodes[i], side, H), pt(nodes[i + 1], side, BOT)] : [pt(nodes[i], side, BOT), pt(nodes[i + 1], side, H)];
        geos.push(beamGeo(a, b, 0.04, 0.03));
      }
    }
  }
  for (let i = 0; i <= bays; i++) {
    geos.push(beamGeo(pt(nodes[i], -1, -0.13), pt(nodes[i], 1, -0.13), 0.06, 0.09));  // 横梁
    if (i === 0 || i === bays) geos.push(beamGeo(pt(nodes[i], -1, H), pt(nodes[i], 1, H), 0.07, 0.06)); // 端门架
  }
  const mesh = shadow(new THREE.Mesh(mergeGeometries(geos), paintMat));
  group.add(mesh);
  // 桥面主梁
  const samples = sampleTrack(s0, s1, 0.1);
  const deck = shadow(new THREE.Mesh(
    sweep(samples, [[-0.6, -0.3], [0.6, -0.3], [0.6, -0.02], [-0.6, -0.02]]),
    MAT.metal(0x55636c, 0.55)
  ));
  group.add(deck);
  return group;
}

function abutment(s, dirSign, mat) {
  const p = track.at(s), t = track.tangent(s);
  const h = -0.02 - (BED_Y - 0.12);
  const m = new THREE.Mesh(BG(0.55, h, 1.36), mat);
  m.position.set(p.x + t.x * 0.28 * dirSign, -0.02 - h / 2, p.z + t.z * 0.28 * dirSign);
  m.rotation.y = Math.atan2(-t.z, t.x);
  return shadow(m);
}

/* --------------------------------- 道路桥 --------------------------------- */
function roadBridge(span, width, kind) {
  const g = new THREE.Group();
  const { center, dir, length } = span;
  if (kind === 'stone') {
    return archBridge(center, dir, length + 0.2, width, {
      parapetH: 0.2, top: -0.01, mat: MAT.stone(0xb7ad9b), capMat: MAT.stone(0xcfc6b2), paved: true,
    });
  }
  // 木桥：桥墩桩 + 木板面 + 栏杆
  const deck = new THREE.Mesh(BG(length, 0.09, width), MAT.wood(0xc9a072));
  deck.position.y = -0.045; g.add(shadow(deck));
  for (const sgn of [-1, 1]) {
    const beam = new THREE.Mesh(BG(length, 0.16, 0.08), MAT.wood(0x9a7448));
    beam.position.set(0, -0.15, sgn * (width / 2 - 0.1)); g.add(shadow(beam));
    const rail = new THREE.Mesh(BG(length, 0.035, 0.04), MAT.wood(0xd6b287));
    rail.position.set(0, 0.2, sgn * (width / 2 - 0.03)); g.add(shadow(rail));
    const rail2 = rail.clone(); rail2.position.y = 0.11; g.add(shadow(rail2));
    const n = Math.round(length / 0.5);
    for (let i = 0; i <= n; i++) {
      const post = new THREE.Mesh(BG(0.05, 0.24, 0.05), MAT.wood(0xb58a58));
      post.position.set(-length / 2 + (length * i) / n, 0.1, sgn * (width / 2 - 0.03)); g.add(shadow(post));
    }
  }
  const asphalt = new THREE.Mesh(new THREE.BoxGeometry(length, 0.008, width - 0.16), MAT.paint(0x58554f, 0.95));
  asphalt.position.y = 0.002; g.add(shadow(asphalt, false));
  const pileMat = MAT.wood(0x7d5a36);
  for (const x of [-length / 2 + 0.25, length / 2 - 0.25]) {
    for (const sgn of [-1, 1]) {
      const pile = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.75, 8), pileMat);
      pile.position.set(x, -0.42, sgn * (width / 2 - 0.13)); g.add(shadow(pile));
    }
  }
  g.position.copy(center);
  g.rotation.y = Math.atan2(-dir.z, dir.x);
  return g;
}

/* ================================ 主入口 ================================ */
export function buildTrack(scene) {
  const root = new THREE.Group();
  scene.add(root);
  const L = track.L;
  const ballastMat = new THREE.MeshStandardMaterial({
    color: 0xa39d92, map: MAT.gravelTex.map, bumpMap: MAT.gravelTex.bump, bumpScale: 2, roughness: 1,
  });
  const railMat = new THREE.MeshStandardMaterial({ color: 0xb9bcc2, roughness: 0.32, metalness: 0.9 });

  const loop = sampleTrack(0, L, 0.07);
  loop.pop();          // 闭环，去掉重复的末点

  // 道床
  const ballast = shadow(new THREE.Mesh(
    sweep(loop, [[-0.56, -0.03], [0.56, -0.03], [0.37, 0.06], [-0.37, 0.06]], { closed: true, uvScale: 1.1 }),
    ballastMat
  ), false, true);
  root.add(ballast);

  // 钢轨
  const railProfile = (c) => [
    [-0.035, 0.09], [0.035, 0.09], [0.035, 0.102], [0.01, 0.11], [0.01, 0.15], [0.024, 0.154],
    [0.024, 0.168], [-0.024, 0.168], [-0.024, 0.154], [-0.01, 0.15], [-0.01, 0.11], [-0.035, 0.102],
  ].map(([x, y]) => [x + c, y]);
  for (const c of [-RAIL_GAUGE_HALF, RAIL_GAUGE_HALF]) {
    root.add(shadow(new THREE.Mesh(sweep(loop, railProfile(c), { closed: true, uvScale: 1 }), railMat), true, false));
  }

  // 枕木
  const nSleepers = Math.floor(L / 0.24);
  const sl = new THREE.InstancedMesh(new THREE.BoxGeometry(0.66, 0.03, 0.09), MAT.wood(0xffffff), nSleepers);
  const m4 = new THREE.Matrix4(), col = new THREE.Color();
  for (let i = 0; i < nSleepers; i++) {
    const s = (i + 0.5) * (L / nSleepers);
    const p = track.at(s), t = track.tangent(s);
    const lat = new THREE.Vector3(-t.z, 0, t.x);
    m4.makeBasis(lat, UP, t).setPosition(p.x, 0.075, p.z);
    sl.setMatrixAt(i, m4);
    const v = 0.55 + Math.random() * 0.3;
    sl.setColorAt(i, col.setRGB(v * 0.85, v * 0.68, v * 0.5));
  }
  sl.castShadow = false; sl.receiveShadow = true;
  root.add(sl);

  /* 桥梁 */
  const spans = trackBridgeSpans();
  const bridges = [];
  for (const [a, b] of spans) {
    const s0 = a - 0.25, s1 = b + 0.25;
    const mid = track.at((s0 + s1) / 2);
    if (mid.z > 0) {
      // 南侧：石拱桥
      const c = track.at((s0 + s1) / 2), t = track.tangent((s0 + s1) / 2);
      const stoneMat = MAT.stone(0xc2b8a4);
      root.add(archBridge(c, t, s1 - s0 + 0.5, 1.24, { mat: stoneMat, capMat: MAT.stone(0xd9d0bc), parapetH: 0.22 }));
      bridges.push({ type: 'arch', s0, s1 });
    } else {
      // 北侧：钢桁架桥
      root.add(truss(s0, s1));
      const abMat = MAT.stone(0xa9a08f);
      root.add(abutment(s0 - 0.05, -1, abMat), abutment(s1 + 0.05, 1, abMat));
      bridges.push({ type: 'truss', s0, s1 });
    }
  }

  /* 道路桥 */
  for (const r of roads) {
    if (r.id !== 'main' && r.id !== 'outer') continue;
    const span = roadBridgeSpan(r.pts[0], r.pts[1]);
    if (span) root.add(roadBridge(span, r.w + 0.2, r.id === 'main' ? 'wood' : 'stone'));
  }

  /* 平交道口 */
  const roadX = 1.5;
  const sCross = track.nearestS(roadX, 8.5);
  const cp = track.at(sCross);
  const slabMat = MAT.paint(0x4c4a47, 0.95);
  const slab = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.1, 1.1), slabMat), false, true);
  slab.position.set(roadX, 0.05, cp.z); root.add(slab);
  const signMat = new THREE.MeshStandardMaterial({ color: 0xf1ede2, roughness: 0.6 });
  const redMat = new THREE.MeshStandardMaterial({ color: 0xb02a25, roughness: 0.6 });
  const stripeMat = new THREE.MeshStandardMaterial({ map: TX.stripeTexture('#c23a30', '#f4ead2', 6), roughness: 0.6 });
  const postMat = MAT.paint(0xe8e6e0, 0.6);
  const lightMats = [];
  const arms = [];
  const sides = [
    { x: roadX + 0.55, z: cp.z + 0.85, dir: -1 },
    { x: roadX - 0.55, z: cp.z - 0.85, dir: +1 },
  ];
  for (const sd of sides) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.02, 0.62, 8), postMat);
    post.position.set(sd.x, 0.31, sd.z); root.add(shadow(post));
    // 十字警示牌
    for (const rz of [Math.PI / 4, -Math.PI / 4]) {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.05, 0.012), signMat);
      bar.position.set(sd.x, 0.62, sd.z); bar.rotation.z = rz; root.add(shadow(bar));
    }
    // 红灯
    for (const k of [-1, 1]) {
      const lm = new THREE.MeshStandardMaterial({ color: 0x772020, emissive: 0xff2010, emissiveIntensity: 0, roughness: 0.4 });
      lightMats.push(lm);
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), lm);
      lamp.position.set(sd.x + k * 0.07, 0.46, sd.z + (sd.dir > 0 ? -0.03 : 0.03));
      root.add(lamp);
    }
    // 栏杆臂
    const pivot = new THREE.Group();
    pivot.position.set(sd.x, 0.2, sd.z + (sd.dir > 0 ? 0.05 : -0.05));
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.03, 0.025), stripeMat);
    arm.position.x = sd.dir * 0.36;
    arm.castShadow = true;
    pivot.add(arm);
    pivot.userData = { dir: sd.dir, noMerge: true };
    root.add(pivot);
    arms.push(pivot);
  }
  let armAngle = 1.35;
  let blink = 0;
  const crossing = {
    s: sCross,
    update(dt, active) {
      const target = active ? 0 : 1.35;
      armAngle += (target - armAngle) * Math.min(1, dt * 3.2);
      for (const a of arms) a.rotation.z = a.userData.dir * armAngle;
      blink += dt * 3.2;
      const on = active && Math.floor(blink) % 2 === 0;
      lightMats.forEach((m, i) => { m.emissiveIntensity = active ? ((i % 2 === 0) === on ? 3 : 0.1) : 0; });
    },
  };

  return { root, crossing, bridges, sCross, sleepers: sl };
}
