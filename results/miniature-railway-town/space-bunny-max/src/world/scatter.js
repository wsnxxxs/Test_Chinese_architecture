import * as THREE from 'three';
import { GROUND, CAVITY_X, CAVITY_Z, C, RAIL, STATION } from '../core/config.js';
import { bake, box, cyl, coneGeo, faces, xf, shade, jitterHex, sphere, paint, mixHex } from '../core/geo.js';
import { waterDist } from './terrain.js';
import { ROADS, roadDist, PLOTS, inAnyRect } from './layout.js';

/* 轨道距离查询（均匀网格加速） */
export function makeTrackDist(path) {
  const cell = 2;
  const map = new Map();
  for (let s = 0; s < path.length; s += 0.5) {
    const p = path.pointAt(s);
    const k = `${Math.floor(p.x / cell)},${Math.floor(p.z / cell)}`;
    if (!map.has(k)) map.set(k, []);
    map.get(k).push(p.x, p.z);
  }
  return (x, z, maxR = 5) => {
    let best = Infinity;
    const cx = Math.floor(x / cell);
    const cz = Math.floor(z / cell);
    const rad = Math.ceil(maxR / cell);
    for (let i = -rad; i <= rad; i++) {
      for (let j = -rad; j <= rad; j++) {
        const a = map.get(`${cx + i},${cz + j}`);
        if (!a) continue;
        for (let k = 0; k < a.length; k += 2) {
          const d = Math.hypot(a[k] - x, a[k + 1] - z);
          if (d < best) best = d;
        }
      }
    }
    return best;
  };
}

/* ── 树 ───────────────────────────────────────────────────────────── */
function coniferGeo() {
  const parts = [];
  parts.push({ geo: cyl(0.06, 0.09, 0.5, 6), color: C.trunk });
  const y0 = 0.34;
  const tiers = [
    [0.52, 0.72, 0.0],
    [0.4, 0.66, 0.42],
    [0.26, 0.6, 0.82],
  ];
  for (let i = 0; i < tiers.length; i++) {
    const [r, h, dy] = tiers[i];
    parts.push({ geo: xf(coneGeo(r, h, 8), 0, y0 + dy + h / 2, 0), color: i === 1 ? shade(C.pine[1], 1.05) : C.pine[i % 2] });
  }
  return bake(parts);
}
function broadleafGeo(rng) {
  const parts = [];
  parts.push({ geo: cyl(0.07, 0.1, 0.62, 6), color: C.trunk });
  const blobs = [
    [0, 0.86, 0, 0.4],
    [0.2, 0.72, 0.12, 0.3],
    [-0.16, 0.78, -0.14, 0.28],
  ];
  for (let i = 0; i < blobs.length; i++) {
    const [bx, by, bz, r] = blobs[i];
    parts.push({ geo: xf(sphere(r, 7, 5), bx, by, bz, rng.range(0, 3)), color: C.leaf[i % C.leaf.length] });
  }
  return bake(parts);
}
function poplarGeo() {
  const parts = [];
  parts.push({ geo: cyl(0.05, 0.08, 0.7, 6), color: C.trunk });
  parts.push({ geo: xf(sphere(0.3, 7, 6), 0, 1.15, 0, 0, 1, 3.0, 1), color: C.foliage[1] });
  return bake(parts);
}
function orchardGeo(rng) {
  const parts = [];
  parts.push({ geo: cyl(0.05, 0.07, 0.34, 5), color: C.trunk });
  parts.push({ geo: xf(sphere(0.32, 7, 5), 0, 0.5, 0, rng.range(0, 3), 1, 0.82, 1), color: C.leaf[1] });
  return bake(parts);
}

/* ── 道具工厂 ─────────────────────────────────────────────────────── */
function streetLamp(x, z, ry, out, glass, spill) {
  const h = 1.42;
  out.push({ geo: xf(cyl(0.045, 0.07, h, 7), x, GROUND + h / 2, z), color: 0x3a3f42 });
  out.push({ geo: xf(cyl(0.1, 0.13, 0.09, 8), x, GROUND + 0.04, z), color: 0x2f3437 });
  out.push({ geo: xf(box(0.07, 0.07, 0.34), x, GROUND + h - 0.04, z + 0.14, ry), color: 0x3a3f42 });
  out.push({ geo: xf(box(0.2, 0.05, 0.2), x, GROUND + h - 0.16, z + 0.3, ry), color: 0x3a3f42 });
  glass.push({ geo: xf(box(0.17, 0.19, 0.17), x, GROUND + h - 0.28, z + 0.3), color: 0xfff0c8 });
  // 光晕锥
  spill.push({ geo: xf(coneGeo(0.3, h - 0.34, 10), x, GROUND + (h - 0.34) / 2 - 0.06, z + 0.3, 0, 1, 1, 1, Math.PI), color: 0xffc069 });
}

function bench(x, z, ry, out) {
  out.push({ geo: xf(box(0.5, 0.05, 0.1), x - 0.1, GROUND + 0.2, z, ry), color: 0x6b4f36 });
  out.push({ geo: xf(box(0.5, 0.05, 0.1), x + 0.1, GROUND + 0.2, z, ry), color: 0x6b4f36 });
  out.push({ geo: xf(box(0.5, 0.16, 0.05), x, GROUND + 0.32, z - 0.12, ry, 1, 1, 1, 0.2), color: 0x6b4f36 });
  for (const s of [1, -1]) {
    out.push({ geo: xf(box(0.06, 0.2, 0.06), x + s * 0.2, GROUND + 0.1, z, ry), color: 0x3d4045 });
  }
}

function crate(x, y, z, s, ry, out, color) {
  out.push({ geo: xf(box(s, s * 0.8, s * 0.9), x, y + s * 0.4, z, ry), color });
  out.push({ geo: xf(box(s * 1.02, 0.03, s * 0.92), x, y + s * 0.8, z, ry), color: shade(color, 1.15) });
}

function rowboat(x, z, ry, out) {
  const hull = faces([
    [[0.62, 0.0, 0.0], [-0.62, 0.0, 0.0], [-0.62, 0.26, 0.16], [0.62, 0.26, 0.16]],
    [[-0.62, 0.0, 0.0], [0.62, 0.0, 0.0], [0.62, 0.26, -0.16], [-0.62, 0.26, -0.16]],
    [[-0.62, 0.26, 0.16], [0.5, 0.22, 0.0], [0.62, 0.26, 0.16], [-0.62, 0.26, 0.16]],
    [[-0.62, 0.26, -0.16], [0.62, 0.26, -0.16], [0.5, 0.22, 0.0], [-0.5, 0.22, 0.0]],
  ]);
  out.push({ geo: xf(hull, x, 0, z, ry), color: 0x7d5a3c });
  out.push({ geo: xf(box(0.9, 0.05, 0.28), x, 0.2, z, ry), color: 0x6b4f36 });
  out.push({ geo: xf(box(0.05, 0.04, 0.7), x + 0.3, 0.24, z, ry + 0.3), color: 0x5a4632 });
}

/* ════════════════════ 主入口 ════════════════════ */
export function buildScatter(rng, path, blockers) {
  const group = new THREE.Group();
  group.name = 'scatter';
  const out = [];
  const glass = [];
  const spill = [];
  const distTrack = makeTrackDist(path);

  const blocked = (x, z, extra = 0) => {
    if (Math.abs(x) > CAVITY_X - 0.7 || Math.abs(z) > CAVITY_Z - 0.7) return true;
    if (waterDist(x, z) < 1.15) return true;
    if (distTrack(x, z, 5) < 2.85 + extra) return true;
    if (roadDist(x, z) < 0.5 + extra) return true;
    if (inAnyRect(x, z, PLOTS, 0.35)) return true;
    for (const b of blockers) {
      if (Math.hypot(x - b.x, z - b.z) < b.r + extra) return true;
    }
    return false;
  };

  /* ── 树群 ── */
  const trees = [
    { geo: coniferGeo, list: [], tint: 0xffffff, place: 'wood' },
    { geo: () => broadleafGeo(rng), list: [], tint: 0xffffff, place: 'leaf' },
    { geo: poplarGeo, list: [], tint: 0xffffff, place: 'poplar' },
    { geo: () => orchardGeo(rng), list: [], tint: 0xffffff, place: 'orchard' },
  ];
  const push = (arr, x, z, s) => arr.push({ x, z, s, r: rng.range(0, 6.283) });

  // 北侧针叶林
  for (let i = 0; i < 130; i++) {
    const x = rng.range(-13.5, 13.5);
    const z = rng.range(-13.5, -9.2);
    if (waterDist(x, z) < 1.2) continue;
    if (distTrack(x, z, 5) < 3.1) continue;
    if (inAnyRect(x, z, PLOTS, 0.1)) continue;
    push(trees[0].list, x, z, rng.range(0.75, 1.35));
  }
  // 西侧河岸林
  for (let i = 0; i < 46; i++) {
    const x = rng.range(-CAVITY_X + 0.8, -14.6);
    const z = rng.range(-13.4, 13.4);
    if (waterDist(x, z) < 1.1) continue;
    if (distTrack(x, z, 5) < 2.95) continue;
    if (roadDist(x, z) < 0.6) continue;
    if (inAnyRect(x, z, PLOTS, 0.1)) continue;
    push(rng.chance(0.55) ? trees[0].list : trees[1].list, x, z, rng.range(0.7, 1.2));
  }
  // 东侧与南侧
  for (let i = 0; i < 64; i++) {
    const x = rng.range(14.2, CAVITY_X - 0.8);
    const z = rng.range(-13.4, 13.4);
    if (waterDist(x, z) < 1.1) continue;
    if (distTrack(x, z, 5) < 2.95) continue;
    if (roadDist(x, z) < 0.6) continue;
    if (inAnyRect(x, z, PLOTS, 0.1)) continue;
    push(rng.chance(0.4) ? trees[0].list : trees[1].list, x, z, rng.range(0.7, 1.25));
  }
  for (let i = 0; i < 30; i++) {
    const x = rng.range(-CAVITY_X + 1, CAVITY_X - 1);
    const z = rng.range(9.2, CAVITY_Z - 0.8);
    if (waterDist(x, z) < 1.1) continue;
    if (distTrack(x, z, 5) < 2.95) continue;
    if (roadDist(x, z) < 0.6) continue;
    if (inAnyRect(x, z, PLOTS, 0.1)) continue;
    push(trees[1].list, x, z, rng.range(0.7, 1.1));
  }
  // 环线内：滨湖柳 + 街树 + 庭园树
  for (let i = 0; i < 78; i++) {
    const x = rng.range(-13.4, 12.4);
    const z = rng.range(-8.2, 7.6);
    const d = waterDist(x, z);
    if (d < 1.05 || d > 2.6) {
      if (!(d > 2.6 && rng.chance(0.22))) continue;
    }
    if (blocked(x, z, -0.35)) continue;
    const t = d < 2.8 && d > 1.05 ? 1 : rng.pick([1, 1, 2]);
    push(trees[t].list, x, z, rng.range(0.62, 1.0));
  }
  // 果园（东侧田块，成行）
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 6; c++) {
      const x = 15.4 + c * 0.85;
      const z = 3.4 + r * 0.85;
      if (inAnyRect(x, z, PLOTS, -0.4) || roadDist(x, z) < 0.4) continue;
      push(trees[3].list, x, z, rng.range(0.85, 1.05));
    }
  }
  // 镇内公园树
  for (let i = 0; i < 26; i++) {
    const x = rng.range(-8.6, 0.2);
    const z = rng.range(4.6, 7.4);
    if (blocked(x, z, -0.2)) continue;
    push(trees[1].list, x, z, rng.range(0.7, 1.0));
  }

  const treeMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, flatShading: true });
  const m4 = new THREE.Matrix4();
  const qq = new THREE.Quaternion();
  const ee = new THREE.Euler();
  const vv = new THREE.Vector3();
  const sc = new THREE.Vector3();
  const colr = new THREE.Color();
  for (const t of trees) {
    if (!t.list.length) continue;
    const mesh = new THREE.InstancedMesh(t.geo(), treeMat, t.list.length);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    t.list.forEach((t2, i) => {
      ee.set(0, t2.r, 0);
      qq.setFromEuler(ee);
      vv.set(t2.x, GROUND - 0.04, t2.z);
      sc.set(t2.s, t2.s * rng.range(0.9, 1.25), t2.s);
      m4.compose(vv, qq, sc);
      mesh.setMatrixAt(i, m4);
      const k = 0.86 + rng.f() * 0.3;
      colr.setRGB(k, k, k * rng.range(0.94, 1.06));
      mesh.setColorAt(i, colr);
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    group.add(mesh);
  }

  /* ── 路灯 ── */
  for (const r of ROADS) {
    if (r.kind === 'path') continue;
    const step = r.w > 1.4 ? 4.4 : 4.0;
    for (let i = 0; i < r.pts.length - 1; i++) {
      const a = r.pts[i];
      const b = r.pts[i + 1];
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      const n = Math.max(1, Math.round(len / step));
      for (let k = 0; k < n; k++) {
        const t = (k + 0.5) / n;
        const px = a[0] + (b[0] - a[0]) * t;
        const pz = a[1] + (b[1] - a[1]) * t;
        const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
        const sides = r.kind === 'main' ? [1, -1] : [1];
        for (const s of sides) {
          const off = r.w * 0.5 + 0.34;
          const lx = px + Math.sin(ang) * 0 + Math.cos(ang + Math.PI / 2) * off * s;
          const lz = pz + Math.sin(ang + Math.PI / 2) * off * s;
          if (waterDist(lx, lz) < 0.6) continue;
          if (distTrack(lx, lz, 5) < 2.6) continue;
          streetLamp(lx, lz, ang + Math.PI / 2 + (s > 0 ? 0 : Math.PI), out, glass, spill);
        }
      }
    }
  }
  // 站台与广场灯
  for (const [px, pz, ry] of [
    [-1.0, 7.0, 0], [5.2, 7.0, 0], [2.0, 4.0, 0],
    [1.9, -3.6, 0], [8.2, -3.6, 0], [5.0, 0.2, 0],
    [-1.4, 1.2, 1.2],
  ]) {
    streetLamp(px, pz, ry, out, glass, spill);
  }

  /* ── 电报杆（沿铁路外侧）── */
  const cx0 = -0.5;
  const cz0 = 0.3;
  for (let s = 0; s < path.length; s += 4.6) {
    const f = path.frameAt(s);
    const side = f.p.x * f.n.x + (f.p.z - cz0) * f.n.z >= 0 ? 1 : -1;
    const px = f.p.x + f.n.x * side * 3.35;
    const pz = f.p.z + f.n.z * side * 3.35;
    if (Math.abs(px) > CAVITY_X - 0.6 || Math.abs(pz) > CAVITY_Z - 0.6) continue;
    if (waterDist(px, pz) < 0.9) continue;
    if (roadDist(px, pz) < 0.3) continue;
    if (inAnyRect(px, pz, PLOTS, 0.15)) continue;
    let bad = false;
    for (const b of blockers) if (Math.hypot(px - b.x, pz - b.z) < b.r + 0.35) bad = true;
    if (bad) continue;
    const yaw = Math.atan2(f.t.x, f.t.z);
    out.push({ geo: xf(cyl(0.05, 0.08, 2.0, 6), px, GROUND + 1.0, pz), color: 0x4a4038 });
    for (let k = 0; k < 2; k++) {
      const yy = GROUND + 1.55 + k * 0.34;
      out.push({ geo: xf(box(0.9, 0.05, 0.05), px, yy, pz, yaw), color: 0x4a4038 });
      for (const s2 of [1, -1]) {
        out.push({
          geo: xf(cyl(0.045, 0.045, 0.09, 6), px + Math.cos(yaw) * s2 * 0.4, yy + 0.08, pz - Math.sin(yaw) * s2 * 0.4),
          color: 0x6f7a80,
        });
      }
    }
    void cx0;
  }

  /* ── 沿线设施 ── */
  // 水塔
  {
    const x = 7.6;
    const z = 10.3;
    for (const [ox, oz] of [[-0.42, -0.42], [0.42, -0.42], [-0.42, 0.42], [0.42, 0.42]]) {
      out.push({ geo: xf(box(0.13, 2.0, 0.13), x + ox, GROUND + 1.0, z + oz), color: 0x54463a });
    }
    for (const yy of [0.6, 1.3, 1.9]) {
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        out.push({
          geo: xf(box(0.07, 0.07, 1.2), x + Math.cos(a) * 0.42, GROUND + yy, z + Math.sin(a) * 0.42, a),
          color: 0x4a3e33,
        });
      }
    }
    out.push({ geo: xf(cyl(0.62, 0.62, 0.9, 12), x, GROUND + 2.45, z), color: 0x4a5a56 });
    out.push({ geo: xf(cyl(0.66, 0.66, 0.08, 12), x, GROUND + 2.94, z), color: 0x394744 });
    out.push({ geo: xf(coneGeo(0.68, 0.34, 12), x, GROUND + 3.12, z), color: 0x39474a });
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2;
      out.push({ geo: xf(cyl(0.02, 0.02, 0.5, 4), x + Math.cos(a) * 0.6, GROUND + 2.0, z + Math.sin(a) * 0.6), color: 0x6b5a44 });
    }
  }
  // 信号楼
  {
    const x = -1.4;
    const z = 10.3;
    out.push({ geo: xf(box(1.5, 0.4, 1.2), x, GROUND - 0.14, z), color: C.stoneDark });
    out.push({ geo: xf(box(1.3, 0.85, 1.05), x, GROUND + 0.42, z), color: 0xb4a488 });
    out.push({ geo: xf(box(1.36, 0.6, 1.1), x, GROUND + 1.14, z), color: 0xc4b493 });
    out.push({ geo: xf(box(1.5, 0.07, 1.24), x, GROUND + 1.47, z), color: 0x3f4a44 });
    makeRoofSimple(out, x, GROUND + 1.5, z, 1.5, 1.24, 0.3, 0x3f4a44, rng);
    for (let i = 0; i < 3; i++) {
      const px = x - 0.44 + i * 0.44;
      out.push({ geo: xf(box(0.3, 0.34, 0.05), px, GROUND + 1.2, z - 0.56), color: 0xf0e6d2 });
      glass.push({ geo: xf(box(0.22, 0.26, 0.06), px, GROUND + 1.2, z - 0.58), color: C.glassDay });
    }
    // 臂板信号机
    out.push({ geo: xf(cyl(0.04, 0.05, 1.0, 6), x + 1.2, GROUND + 0.5, z - 0.9), color: 0x3d4045 });
    out.push({ geo: xf(box(0.06, 0.3, 0.4), x + 1.2, GROUND + 1.1, z - 0.9), color: 0xb4402f });
  }
  // 工务小屋 + 里程碑
  {
    const x = 1.4;
    const z = -4.2;
    out.push({ geo: xf(box(1.1, 0.9, 0.9), x, GROUND + 0.45, z), color: 0x8f8474 });
    makeRoofSimple(out, x, GROUND + 0.9, z, 1.1, 0.9, 0.34, 0x54504a, rng);
    out.push({ geo: xf(box(0.22, 0.5, 0.05), x - 0.2, GROUND + 0.3, z - 0.47), color: 0x4a4038 });
    const f = path.frameAt(path.nearest(3.0, -7.0));
    out.push({ geo: xf(cyl(0.05, 0.06, 0.5, 6), f.p.x + f.n.x * 2.7, GROUND + 0.25, f.p.z + f.n.z * 2.7), color: 0xe6e0cf });
    out.push({ geo: xf(box(0.3, 0.22, 0.05), f.p.x + f.n.x * 2.7, GROUND + 0.55, f.p.z + f.n.z * 2.7), color: 0x9c3a2c });
  }
  // 站台长椅 / 煤台 / 货车
  for (const bx of [-0.6, 1.8, 4.2]) bench(bx, 6.35, 0, out);
  for (let i = 0; i < 5; i++) crate(6.4 + (i % 2) * 0.36, GROUND, 9.9 + Math.floor(i / 2) * 0.4, 0.34, rng.range(0, 1.2), out, 0x8a6b46);
  for (let i = 0; i < 4; i++) crate(-1.9 + (i % 2) * 0.34, GROUND, 9.85 + Math.floor(i / 2) * 0.38, 0.32, rng.range(0, 1.4), out, 0x7a5f3e);
  // 煤台
  out.push({ geo: xf(box(2.2, 0.55, 1.1), 6.8, GROUND + 0.27, 10.9), color: 0x3a342e });
  out.push({ geo: xf(box(2.3, 0.08, 1.2), 6.8, GROUND + 0.58, 10.9), color: 0x4a423a });
  // 水鹤
  {
    const x = 4.9;
    const z = 6.6;
    const y = GROUND + 0.26;
    out.push({ geo: xf(cyl(0.07, 0.09, 0.95, 7), x, y + 0.47, z), color: 0x3f4a44 });
    out.push({ geo: xf(box(0.1, 0.1, 0.52), x, y + 0.92, z - 0.2), color: 0x3f4a44 });
    out.push({ geo: xf(cyl(0.11, 0.13, 0.16, 8), x, y + 0.9, z - 0.46), color: 0x54615a });
  }

  /* ── 广场：喷泉 + 市集摊位 ── */
  {
    const fx = 5.0;
    const fz = -1.4;
    out.push({ geo: xf(cyl(0.62, 0.66, 0.28, 16), fx, GROUND + 0.14, fz), color: C.stone });
    out.push({ geo: xf(cyl(0.54, 0.54, 0.06, 16), fx, GROUND + 0.26, fz), color: 0x3f6f76 });
    out.push({ geo: xf(cyl(0.12, 0.16, 0.72, 8), fx, GROUND + 0.5, fz), color: C.stone });
    out.push({ geo: xf(cyl(0.2, 0.2, 0.1, 10), fx, GROUND + 0.88, fz), color: C.stoneDark });
    out.push({ geo: xf(sphere(0.09, 8, 6), fx, GROUND + 1.0, fz), color: 0x8fa2a4 });
  }
  const stallColors = [0xb5543f, 0x4f6f4a, 0xc29a4a, 0x54697e];
  for (let i = 0; i < 4; i++) {
    const x = 3.0 + i * 1.4;
    const z = -1.7;
    for (const [ox, oz] of [[-0.3, -0.22], [0.3, -0.22], [-0.3, 0.22], [0.3, 0.22]]) {
      out.push({ geo: xf(cyl(0.025, 0.025, 0.62, 5), x + ox, GROUND + 0.31, z + oz), color: 0x6b4f36 });
    }
    out.push({
      geo: xf(box(0.86, 0.05, 0.72), x, GROUND + 0.66, z, 0, 1, 1, 1, 0.12),
      color: stallColors[i % 4],
    });
    out.push({ geo: xf(box(0.8, 0.06, 0.5), x, GROUND + 0.36, z), color: 0x7d6a52 });
    out.push({ geo: xf(box(0.8, 0.22, 0.04), x, GROUND + 0.24, z - 0.26), color: 0x6b4f36 });
  }

  /* ── 小船 ── */
  rowboat(-1.5, 1.15, 0.5, out);
  rowboat(-0.5, 2.4, -0.3, out);
  rowboat(-3.6, -2.2, 1.9, out);

  /* ── 简易围栏（若干段）── */
  for (const seg of [
    [[-8.6, 4.2], [-5.2, 4.2]],
    [[-8.6, 7.3], [-5.0, 7.3]],
    [[-13.2, 7.0], [-13.2, 2.0]],
    [[-10.2, -2.6], [-9.0, -4.6]],
    [[0.6, -8.0], [6.0, -8.0]],
  ]) {
    fence(seg[0], seg[1], out, rng);
  }

  /* ── 生成网格 ── */
  const solidMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 });
  const solid = new THREE.Mesh(bake(out), solidMat);
  solid.castShadow = true;
  solid.receiveShadow = true;
  group.add(solid);

  const glowMat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.3,
    emissive: new THREE.Color(C.glow),
    emissiveIntensity: 0.05,
  });
  group.add(new THREE.Mesh(bake(glass), glowMat));

  const spillMat = new THREE.MeshBasicMaterial({
    color: 0xffc069,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const spillMesh = new THREE.Mesh(bake(spill), spillMat);
  spillMesh.renderOrder = 2;
  group.add(spillMesh);

  return { group, glowMat, spillMat, glassMeshes: [glowMat] };
}

/* ── 小工具 ───────────────────────────────────────────────────────── */
function makeRoofSimple(out, x, y, z, w, d, h, color, rng) {
  const hd = d / 2 + 0.14;
  const pitch = Math.atan2(h, hd);
  const slope = Math.hypot(h, hd);
  const n = 3;
  for (const s of [1, -1]) {
    for (let i = 0; i < n; i++) {
      const u = ((i + 0.5) * slope) / n;
      out.push({
        geo: xf(box(w + 0.28, 0.05, (slope / n) * 1.3), x, y + Math.sin(pitch) * u, z + s * (hd - Math.cos(pitch) * u), 0, 1, 1, 1, s * pitch),
        color: jitterHex(color, rng, 0.07),
      });
    }
  }
}

function fence(a, b, out, rng) {
  const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
  const n = Math.max(2, Math.round(len / 0.62));
  const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const x = a[0] + (b[0] - a[0]) * t;
    const z = a[1] + (b[1] - a[1]) * t;
    out.push({ geo: xf(box(0.07, 0.52, 0.07), x, GROUND + 0.24, z, ang), color: 0x6b5540 });
  }
  for (const yy of [0.2, 0.42]) {
    out.push({ geo: xf(box(len, 0.05, 0.04), (a[0] + b[0]) / 2, GROUND + yy, (a[1] + b[1]) / 2, ang), color: 0x6b5540 });
  }
  void rng;
}

export { paint, mixHex, STATION, RAIL };
