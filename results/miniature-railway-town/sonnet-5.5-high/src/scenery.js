// 环境陈设：树木灌木、路灯、汽车、羊群、喷泉、围栏、岸边石块
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import * as MAT from './materials.js';
import * as TX from './textures.js';
import {
  mulberry32, BOARD, track, roads, roadDist, footprintDist, fieldDist, riverInfo, river, BANK_W, plazas,
} from './world.js';

function shadow(m, cast = true, recv = true) { m.castShadow = cast; m.receiveShadow = recv; return m; }

/* -------------------------------- 树木 -------------------------------- */
function jitter(geo, rnd, amt) {
  const p = geo.attributes.position;
  const seen = new Map();
  for (let i = 0; i < p.count; i++) {
    const key = `${p.getX(i).toFixed(3)},${p.getY(i).toFixed(3)},${p.getZ(i).toFixed(3)}`;
    if (!seen.has(key)) seen.set(key, [(rnd() - 0.5) * amt, (rnd() - 0.5) * amt, (rnd() - 0.5) * amt]);
    const j = seen.get(key);
    p.setXYZ(i, p.getX(i) + j[0], p.getY(i) + j[1], p.getZ(i) + j[2]);
  }
  geo.computeVertexNormals();
  return geo;
}

function pineGeometry(rnd) {
  const parts = [];
  const layers = [[0.34, 0.48, 0.28], [0.27, 0.44, 0.52], [0.2, 0.4, 0.74], [0.12, 0.34, 0.96]];
  for (const [r, h, y] of layers) {
    const c = new THREE.ConeGeometry(r, h, 8, 1).toNonIndexed();
    c.translate(0, y + h / 2, 0);
    parts.push(jitter(c, rnd, 0.05));
  }
  return mergeGeometries(parts);
}
function roundGeometry(rnd) {
  const parts = [];
  const lobes = [[0, 0.62, 0, 0.38], [0.2, 0.5, 0.1, 0.27], [-0.18, 0.55, -0.1, 0.26], [0.02, 0.86, 0.02, 0.24]];
  for (const [x, y, z, r] of lobes) {
    const c = new THREE.IcosahedronGeometry(r, 1);
    c.translate(x, y, z);
    parts.push(jitter(c, rnd, r * 0.22));
  }
  return mergeGeometries(parts);
}

export function buildTrees(scene) {
  const rnd = mulberry32(2024);
  const ok = (x, z, r = 0) => {
    if (Math.abs(x) > BOARD.w / 2 - 0.5 || Math.abs(z) > BOARD.d / 2 - 0.5) return false;
    if (track.dist(x, z) < 1.25 + r) return false;
    if (roadDist(x, z) < 0.5 + r) return false;
    if (footprintDist(x, z) < 0.55 + r) return false;
    if (fieldDist(x, z) < 0.35) return false;
    const { d, w } = riverInfo(x, z);
    if (d - w < BANK_W + 0.1) return false;
    return true;
  };

  const trees = [];   // {x,z,s,type}
  const bushes = [];
  const add = (x, z, type, s) => trees.push({ x, z, type, s });

  // 树丛：偏向沙盘边缘、河岸、铁路外侧
  const centers = [
    [-17.4, -11], [-17.2, -2], [-17.5, 6.5], [-17, 13], [-9.5, -6.8], [-12.5, -6.3], [-16.5, -7], [-1.5, -11.6],
    [3.5, -13.2], [9, -13.6], [17.5, -12], [18, -4], [18, 4], [17.8, 11], [11, 9.6], [-1.5, 8.8], [16, 14],
    [-8, 9.8], [-15.3, 10.8], [5, 14], [-6.5, 13.9], [12.8, 7.2], [10.8, -8.8], [15.2, 9], [-13.5, -9.6],
  ];
  for (const [cx, cz] of centers) {
    const n = 4 + (rnd() * 6 | 0), rad = 1.0 + rnd() * 1.6, kind = rnd() > 0.5;
    for (let i = 0, t = 0; i < n && t < 60; t++) {
      const a = rnd() * 6.283, r = Math.sqrt(rnd()) * rad;
      const x = cx + Math.cos(a) * r, z = cz + Math.sin(a) * r;
      if (!ok(x, z)) continue;
      // 相互间距
      if (trees.some((q) => (q.x - x) ** 2 + (q.z - z) ** 2 < 0.45)) continue;
      add(x, z, rnd() < (kind ? 0.7 : 0.3) ? 'pine' : 'round', 0.8 + rnd() * 0.55);
      i++;
    }
  }
  // 河岸柳树
  for (let i = 4; i < river.pts.length - 4; i += 9) {
    const p = river.pts[i];
    const side = i % 18 === 0 ? 1 : -1;
    const dx = river.pts[i + 1].x - river.pts[i - 1].x, dz = river.pts[i + 1].z - river.pts[i - 1].z, l = Math.hypot(dx, dz);
    const off = river.half[i] + 1.5 + rnd() * 0.6;
    const x = p.x + (-dz / l) * off * side, z = p.z + (dx / l) * off * side;
    if (ok(x, z) && !trees.some((q) => (q.x - x) ** 2 + (q.z - z) ** 2 < 0.5)) add(x, z, 'round', 0.85 + rnd() * 0.4);
  }
  // 道路行道树（南侧外环路）
  for (let x = -17.5; x < 18; x += 2.6) {
    const z = 13.15 + (rnd() - 0.5) * 0.15;
    if (ok(x, z, 0.1) && !trees.some((q) => (q.x - x) ** 2 + (q.z - z) ** 2 < 0.6)) add(x, z, 'round', 0.7 + rnd() * 0.25);
  }
  // 公园/后街零星树木
  for (let i = 0; i < 120; i++) {
    const x = -14 + rnd() * 20, z = -8 + rnd() * 6;
    if (ok(x, z, 0.35) && footprintDist(x, z) > 0.9 && !trees.some((q) => (q.x - x) ** 2 + (q.z - z) ** 2 < 1.0)) add(x, z, rnd() > 0.5 ? 'pine' : 'round', 0.7 + rnd() * 0.4);
  }
  // 灌木
  for (let i = 0; i < 700 && bushes.length < 70; i++) {
    const x = (rnd() - 0.5) * (BOARD.w - 1.5), z = (rnd() - 0.5) * (BOARD.d - 1.5);
    if (ok(x, z, -0.1) && footprintDist(x, z) > 0.25) bushes.push({ x, z, s: 0.5 + rnd() * 0.6 });
  }

  const pineG = pineGeometry(rnd), roundG = roundGeometry(rnd);
  const trunkG = new THREE.CylinderGeometry(0.035, 0.05, 0.4, 6).translate(0, 0.2, 0);
  const bushG = jitter(new THREE.IcosahedronGeometry(0.14, 1).translate(0, 0.09, 0), rnd, 0.05);
  const leafMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, flatShading: true });
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x6a4a30, roughness: 0.95 });

  const pines = trees.filter((t) => t.type === 'pine'), rounds = trees.filter((t) => t.type === 'round');
  const mkInst = (geo, mat, list, colors, cast = true) => {
    const im = new THREE.InstancedMesh(geo, mat, Math.max(1, list.length));
    im.count = list.length;
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color();
    list.forEach((t, i) => {
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rnd() * 6.283);
      m.compose(new THREE.Vector3(t.x, 0, t.z), q, new THREE.Vector3(t.s, t.s * (0.9 + rnd() * 0.25), t.s));
      im.setMatrixAt(i, m);
      if (colors) im.setColorAt(i, c.setHex(colors[rnd() * colors.length | 0]));
    });
    im.castShadow = cast; im.receiveShadow = true;
    scene.add(im);
    return im;
  };
  mkInst(pineG, leafMat, pines, [0x3f6b3b, 0x476f3c, 0x35603a, 0x527a44]);
  mkInst(roundG, leafMat, rounds, [0x6f9a3f, 0x83a848, 0x5d8a3c, 0x9ab24e, 0xb5a740, 0xc98a3a]);
  mkInst(trunkG, trunkMat, trees.map((t) => ({ ...t, s: t.s * 0.9 })), null);
  mkInst(bushG, leafMat, bushes.map((b) => ({ ...b, s: b.s * 1.6 })), [0x5b8a3a, 0x6f9840, 0x486f34, 0x8fa84a]);
  return { count: trees.length, bushes: bushes.length };
}

/* ---------------------------- 岸边石块 / 芦苇 ---------------------------- */
export function buildShore(scene) {
  const rnd = mulberry32(88);
  const rocks = [];
  for (let i = 3; i < river.pts.length - 3; i += 3) {
    if (rnd() > 0.55) continue;
    const p = river.pts[i], side = rnd() > 0.5 ? 1 : -1;
    const dx = river.pts[i + 1].x - river.pts[i - 1].x, dz = river.pts[i + 1].z - river.pts[i - 1].z, l = Math.hypot(dx, dz);
    const off = river.half[i] + 0.2 + rnd() * 0.5;
    const x = p.x + (-dz / l) * off * side, z = p.z + (dx / l) * off * side;
    if (track.dist(x, z) < 1.1 || roadDist(x, z) < 0.55) continue;
    rocks.push({ x, z, s: 0.5 + rnd() * 0.9 });
  }
  const g = new THREE.IcosahedronGeometry(0.1, 0);
  jitter(g, rnd, 0.06);
  const im = new THREE.InstancedMesh(g, new THREE.MeshStandardMaterial({ color: 0x9a968c, roughness: 0.95, flatShading: true }), rocks.length);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion();
  rocks.forEach((r, i) => {
    q.setFromEuler(new THREE.Euler(rnd(), rnd() * 6, rnd()));
    // 落在岸坡上：高度取近似坡面
    const y = -0.28;
    m.compose(new THREE.Vector3(r.x, y, r.z), q, new THREE.Vector3(r.s * 1.2, r.s * 0.7, r.s));
    im.setMatrixAt(i, m);
  });
  im.castShadow = true; im.receiveShadow = true;
  scene.add(im);

  // 芦苇
  const reedG = new THREE.CylinderGeometry(0.004, 0.006, 0.34, 4).translate(0, 0.17, 0);
  const reeds = [];
  for (let i = 5; i < river.pts.length - 5; i += 4) {
    const p = river.pts[i], side = rnd() > 0.5 ? 1 : -1;
    const dx = river.pts[i + 1].x - river.pts[i - 1].x, dz = river.pts[i + 1].z - river.pts[i - 1].z, l = Math.hypot(dx, dz);
    const off = river.half[i] + 0.15 + rnd() * 0.35;
    const cx = p.x + (-dz / l) * off * side, cz = p.z + (dx / l) * off * side;
    if (track.dist(cx, cz) < 1.0 || roadDist(cx, cz) < 0.5) continue;
    for (let k = 0; k < 7; k++) reeds.push([cx + (rnd() - 0.5) * 0.14, cz + (rnd() - 0.5) * 0.14, 0.7 + rnd() * 0.8]);
  }
  const reedIm = new THREE.InstancedMesh(reedG, new THREE.MeshStandardMaterial({ color: 0x8a9a4a, roughness: 0.9 }), reeds.length);
  reeds.forEach(([x, z, s], i) => {
    q.setFromEuler(new THREE.Euler((rnd() - 0.5) * 0.3, 0, (rnd() - 0.5) * 0.3));
    m.compose(new THREE.Vector3(x, -0.3, z), q, new THREE.Vector3(1, s, 1));
    reedIm.setMatrixAt(i, m);
  });
  reedIm.castShadow = false;
  scene.add(reedIm);
}

/* --------------------------------- 路灯 --------------------------------- */
export function buildLamps(scene, extra = []) {
  const spots = [];
  for (const r of roads) {
    const [a, b] = r.pts;
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const dx = (b[0] - a[0]) / len, dz = (b[1] - a[1]) / len;
    let side = 1;
    const step = r.id === 'lane' ? 4.2 : 3.4;
    for (let s = 1.2; s < len - 0.5; s += step, side = -side) {
      const off = r.w / 2 + 0.2;
      const x = a[0] + dx * s - dz * off * side, z = a[1] + dz * s + dx * off * side;
      if (footprintDist(x, z) < 0.16 || track.dist(x, z) < 1.0) continue;
      const { d, w } = riverInfo(x, z);
      if (d - w < 1.6) continue;
      let bad = false;
      for (const o of roads) {
        if (o === r) continue;
        const dd = roadDist(x, z);
        // roadDist 汇总所有道路；若在其他道路上则 <0.05
        if (dd < 0.1) { bad = true; break; }
      }
      if (!bad) spots.push([x, z]);
    }
  }
  for (const p of plazas) {
    if (p.x0 > 10) continue;
    spots.push([p.x0 + 0.15, p.z0 + 0.2], [p.x1 - 0.15, p.z0 + 0.2]);
  }
  spots.push(...extra);

  const poleG = new THREE.CylinderGeometry(0.011, 0.016, 0.62, 6).translate(0, 0.31, 0);
  const headG = new THREE.SphereGeometry(0.042, 10, 8).translate(0, 0.66, 0);
  const capG = new THREE.ConeGeometry(0.06, 0.05, 8).translate(0, 0.72, 0);
  const poleIm = new THREE.InstancedMesh(poleG, MAT.metal(0x2c3036, 0.5), spots.length);
  const headIm = new THREE.InstancedMesh(headG, MAT.glow.lamp, spots.length);
  const capIm = new THREE.InstancedMesh(capG, MAT.metal(0x2c3036, 0.5), spots.length);
  const m = new THREE.Matrix4();
  spots.forEach(([x, z], i) => {
    m.makeTranslation(x, 0, z);
    poleIm.setMatrixAt(i, m); headIm.setMatrixAt(i, m); capIm.setMatrixAt(i, m);
  });
  [poleIm, capIm].forEach((im) => { im.castShadow = true; scene.add(im); });
  scene.add(headIm);

  // 光晕精灵
  const haloTex = TX.softDot('rgba(255,214,140,0.95)', 'rgba(255,190,90,0)');
  const halos = [];
  for (const [x, z] of spots) {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({
      map: haloTex, color: 0xffcf80, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending,
    }));
    sp.scale.setScalar(0.75); sp.position.set(x, 0.66, z);
    scene.add(sp); halos.push(sp);
  }
  // 少量真实点光源（成本可控）
  const lights = [];
  const pick = spots.filter((_, i) => i % Math.max(1, Math.floor(spots.length / 7)) === 0).slice(0, 7);
  for (const [x, z] of pick) {
    const pl = new THREE.PointLight(0xffb866, 0, 4.2, 1.6);
    pl.position.set(x, 0.75, z);
    scene.add(pl); lights.push(pl);
  }
  return { spots, halos, lights };
}

/* --------------------------------- 汽车 --------------------------------- */
export function buildCars(scene) {
  const defs = [
    [-8.4, 1.0, 0, 0xc0392b], [-1.4, 0.62, Math.PI, 0x2e6da4], [5.6, 1.0, 0, 0xe0b53a],
    [1.36, -4.6, -Math.PI / 2, 0x3f8f5a], [-7.4, 4.1, 0, 0xd0d0d0], [-3.6, 4.05, Math.PI, 0x8a3a8a],
    [-8.4, 12.5, 0, 0x2f4f6f], [12.5, 12.12, Math.PI, 0xc0392b], [1.66, 10.4, Math.PI / 2, 0xe0b53a],
  ];
  const wheelG = new THREE.CylinderGeometry(0.035, 0.035, 0.03, 10).rotateZ(Math.PI / 2);
  const wheelMat = MAT.paint(0x1c1c1c, 0.9);
  for (const [x, z, rot, color] of defs) {
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.09, 0.2), new THREE.MeshStandardMaterial({ color, roughness: 0.35, metalness: 0.3 }));
    body.position.y = 0.09; g.add(shadow(body));
    const cab = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.08, 0.17), new THREE.MeshStandardMaterial({ color, roughness: 0.35, metalness: 0.3 }));
    cab.position.set(-0.02, 0.17, 0); g.add(shadow(cab));
    const win = new THREE.Mesh(new THREE.BoxGeometry(0.23, 0.05, 0.18), MAT.glow.windowDark);
    win.position.set(-0.02, 0.175, 0); win.scale.set(0.96, 0.7, 1.0); g.add(win);
    for (const sx of [-0.13, 0.13]) for (const sz of [-0.1, 0.1]) {
      const w = new THREE.Mesh(wheelG, wheelMat); w.position.set(sx, 0.04, sz); g.add(w);
    }
    for (const sz of [-0.07, 0.07]) {
      const hl = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.025, 0.04), MAT.glow.headlamp);
      hl.position.set(0.215, 0.095, sz); g.add(hl);
    }
    g.position.set(x, 0, z); g.rotation.y = rot;
    scene.add(g);
  }
}

/* --------------------------------- 羊群 --------------------------------- */
export function buildSheep(scene, cx, cz) {
  const rnd = mulberry32(9);
  const wool = new THREE.MeshStandardMaterial({ color: 0xf1ede2, roughness: 1, flatShading: true });
  const dark = MAT.paint(0x2e2a28, 0.9);
  const bodyG = jitter(new THREE.IcosahedronGeometry(0.07, 1).scale(1.3, 0.9, 0.95), rnd, 0.02);
  const headG = new THREE.BoxGeometry(0.05, 0.05, 0.05);
  const legG = new THREE.CylinderGeometry(0.008, 0.008, 0.05, 4);
  for (let i = 0; i < 6; i++) {
    const g = new THREE.Group();
    const b = new THREE.Mesh(bodyG, wool); b.position.y = 0.1; g.add(shadow(b));
    const h = new THREE.Mesh(headG, dark); h.position.set(0.1, 0.11, 0); g.add(shadow(h));
    for (const sx of [-0.05, 0.05]) for (const sz of [-0.035, 0.035]) {
      const l = new THREE.Mesh(legG, dark); l.position.set(sx, 0.025, sz); g.add(l);
    }
    g.position.set(cx + (rnd() - 0.5) * 1.6, 0, cz + (rnd() - 0.5) * 1.5);
    g.rotation.y = rnd() * 6.28; g.scale.setScalar(0.9 + rnd() * 0.3);
    scene.add(g);
  }
}

/* --------------------------------- 围栏 --------------------------------- */
export function buildFence(scene, x0, z0, x1, z1, gap = null) {
  const geos = [];
  const wood = MAT.wood(0xd2b48a);
  const seg = (ax, az, bx, bz) => {
    const len = Math.hypot(bx - ax, bz - az), n = Math.max(1, Math.round(len / 0.32));
    const ang = Math.atan2(-(bz - az), bx - ax);
    for (let i = 0; i <= n; i++) {
      const t = i / n, x = ax + (bx - ax) * t, z = az + (bz - az) * t;
      const post = new THREE.BoxGeometry(0.025, 0.16, 0.025).translate(x, 0.08, z);
      geos.push(post);
    }
    for (const y of [0.06, 0.12]) {
      const r = new THREE.BoxGeometry(len, 0.014, 0.012);
      r.rotateY(ang); r.translate((ax + bx) / 2, y, (az + bz) / 2);
      geos.push(r);
    }
  };
  seg(x0, z0, x1, z0); seg(x1, z0, x1, z1); seg(x1, z1, x0, z1); seg(x0, z1, x0, z0);
  const m = new THREE.Mesh(mergeGeometries(geos.map((g) => g.index ? g.toNonIndexed() : g)), wood);
  shadow(m); scene.add(m);
}

/* --------------------------------- 喷泉 --------------------------------- */
export function buildFountain(scene, x, z) {
  const g = new THREE.Group();
  const st = MAT.stone(0xcfc7b4);
  const basin = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.42, 0.12, 20), st);
  basin.position.y = 0.06; g.add(shadow(basin));
  const water = new THREE.Mesh(new THREE.CircleGeometry(0.35, 20).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x4d97a6, roughness: 0.1, metalness: 0.2 }));
  water.position.y = 0.11; g.add(water);
  const col = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.06, 0.32, 10), st);
  col.position.y = 0.26; g.add(shadow(col));
  const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.06, 0.05, 14), st);
  bowl.position.y = 0.4; g.add(shadow(bowl));
  g.position.set(x, 0, z); scene.add(g);
}

/* --------------------------------- 长椅 --------------------------------- */
export function buildBenches(scene, list) {
  for (const [x, z, rot] of list) {
    const g = new THREE.Group();
    const w = MAT.wood(0xb58a58);
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.02, 0.09), w); seat.position.y = 0.08; g.add(shadow(seat));
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.07, 0.012), w); back.position.set(0, 0.13, -0.04); g.add(shadow(back));
    for (const sx of [-0.12, 0.12]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.08, 0.08), MAT.paint(0x2a2a2a)); leg.position.set(sx, 0.04, 0); g.add(leg);
    }
    g.position.set(x, 0, z); g.rotation.y = rot; scene.add(g);
  }
}
