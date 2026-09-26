import * as THREE from 'three';
import { GROUND, C, WALL_COLORS, ROOF_COLORS, STATION } from '../core/config.js';
import { bake, box, cyl, coneGeo, faces, xf, shade, jitterHex, mixHex, ribbon, gableRoof, hipRoof } from '../core/geo.js';
import { cobbleDetail, tileDetail, gravelDetail } from '../core/textures.js';
import { ROADS, PLOTS, roadDist, YARDS } from './layout.js';

const Y = GROUND;

/* ════════════════════ 通用零件 ════════════════════ */

/** 叠瓦片：每片瓦是一块斜置薄板，边缘外露形成手工屋顶的层次感 */
function roofCourses(w, d, h, overhang, courses, rng, colorHex, ridge = true) {
  const hd = d / 2 + overhang;
  const pitch = Math.atan2(h, hd);
  const slopeLen = Math.hypot(h, hd);
  const n = Math.max(3, Math.round(courses));
  const step = slopeLen / n;
  const out = [];
  for (const s of [1, -1]) {
    for (let i = 0; i < n; i++) {
      const u = (i + 0.5) * step;
      out.push({
        geo: xf(box(w + overhang * 2, 0.055, step * 1.28), 0, Math.sin(pitch) * u, s * (hd - Math.cos(pitch) * u), 0, 1, 1, 1, s * pitch),
        color: jitterHex(shade(colorHex, 0.84 + (i % 2) * 0.18 + rng.f() * 0.1), rng, 0.05),
      });
    }
  }
  if (ridge) out.push({ geo: xf(box(w + overhang * 2, 0.12, 0.17), 0, h + 0.04, 0), color: shade(colorHex, 0.78) });
  return out;
}

/** 完整屋顶：实心屋壳 + 叠瓦（+ 屋脊压顶）。屋脊沿较长的一边；hip=true 时用四坡 */
function makeRoof(out, rng, o) {
  const { x = 0, z = 0, ry = 0, w, d, h, overhang = 0.18, baseY = 0, color, courses, hip = false, ridge = true } = o;
  const swap = !hip && d > w * 1.05;
  const rw = swap ? d : w;
  const rd = swap ? w : d;
  const rry = ry + (swap ? Math.PI / 2 : 0);
  const shell = hip ? hipRoof(rw, rd, h, 0.004) : gableRoof(rw, rd, h, 0.004);
  out.push({ geo: xf(shell, x, baseY, z, rry), color: shade(color, 0.8) });
  for (const c of roofCourses(rw, rd, h, overhang, courses ?? Math.max(3, rd * 3.4), rng, color, ridge)) {
    out.push({ geo: xf(c.geo, x, baseY, z, rry), color: c.color });
  }
}

/** 在某个立面上开窗（dx/dz 为该立面外法线） */
function windowsOn(solid, glass, rng, o) {
  const { x, z, dx, dz, width, floors, wallH, sill = 0.44 } = o;
  const cols = Math.max(1, Math.round(width / 0.68));
  const yaw = Math.atan2(dx, dz);
  const tx = -dz;
  const tz = dx;
  for (let f = 0; f < floors; f++) {
    const wy = floors === 1 ? sill : 0.36 + f * Math.max(0.52, (wallH - 0.74) / (floors - 1));
    for (let c = 0; c < cols; c++) {
      if (cols > 2 && rng.chance(0.1)) continue;
      const t = cols === 1 ? 0 : (c / (cols - 1) - 0.5) * (width - 0.44);
      const px = x + tx * t + dx * 0.014;
      const pz = z + tz * t + dz * 0.014;
      solid.push({ geo: xf(box(0.4, 0.44, 0.05), px, wy, pz, yaw), color: 0xf1e7d3 });
      glass.push({ geo: xf(box(0.29, 0.33, 0.06), px + dx * 0.016, wy, pz + dz * 0.016, yaw), color: C.glassDay });
    }
  }
}

/** 通用民居 */
function cottage(out, glass, rng, o) {
  const { x, z, w, d, ry, floors = 1, wallH = 0.95, roofH = 0.62 } = o;
  const wallC = o.wallColor ?? rng.pick(WALL_COLORS);
  const roofC = o.roofColor ?? rng.pick(ROOF_COLORS);
  const add = (geo, color) => out.push({ geo: xf(geo, x, 0, z, ry), color });
  add(xf(box(w + 0.16, 0.44, d + 0.16), 0, Y - 0.18, 0), C.stoneDark);
  add(xf(box(w + 0.05, 0.1, d + 0.05), 0, Y + 0.05, 0), shade(wallC, 0.84));
  add(xf(box(w, wallH, d), 0, Y + 0.1 + wallH / 2, 0), jitterHex(wallC, rng, 0.05));
  makeRoof(out, rng, { x, z, ry, w, d, h: roofH, baseY: Y + 0.1 + wallH, color: roofC });
  if (o.chimney !== false) {
    const cx = (rng.f() - 0.5) * w * 0.55;
    add(xf(box(0.2, roofH + 0.36, 0.2), cx, Y + 0.1 + wallH + (roofH + 0.36) / 2 - 0.14, 0), C.brick);
    add(xf(box(0.27, 0.07, 0.27), cx, Y + 0.1 + wallH + roofH + 0.26, 0), shade(C.brick, 1.18));
  }
  const dx = Math.sin(ry);
  const dz = Math.cos(ry);
  const sx = Math.cos(ry);
  const sz = -Math.sin(ry);
  windowsOn(out, glass, rng, { x: x + dx * (d / 2), z: z + dz * (d / 2), dx, dz, width: w, floors, wallH: wallH + 0.1 });
  if (rng.chance(0.72)) {
    windowsOn(out, glass, rng, { x: x + sx * (w / 2), z: z + sz * (w / 2), dx: sx, dz: sz, width: d, floors, wallH: wallH + 0.1 });
  }
  const dt = (rng.f() - 0.5) * (w - 0.55);
  add(
    xf(box(0.3, 0.6, 0.06), dx * (d / 2 + 0.015) - dz * dt, Y + 0.42, dz * (d / 2 + 0.015) + dx * dt, ry),
    mixHex(0x4a3524, 0x6b4a30, rng.f())
  );
}

/* ════════════════════ 车站 ════════════════════ */
function station(out, glass, rng) {
  const cx = STATION.cx;
  const z0 = STATION.buildingZ0;
  const z1 = STATION.buildingZ1;
  const d = z1 - z0;
  const w = 8.6;
  const zc = (z0 + z1) / 2;
  const wallH = 1.4;
  const roofH = 0.86;
  const wallC = 0xe0d2b6;
  const roofC = 0x74564a;
  const add = (geo, color) => out.push({ geo, color });
  // 基座
  add(xf(box(w + 0.2, 0.42, d + 0.2), cx, Y - 0.17, zc), C.stoneDark);
  // 墙
  add(xf(box(w, wallH, d), cx, Y + 0.1 + wallH / 2, zc), wallC);
  // 腰线
  add(xf(box(w + 0.08, 0.12, d + 0.08), cx, Y + 0.1 + wallH * 0.62, zc), shade(wallC, 0.88));
  // 屋顶
  makeRoof(out, rng, { x: cx, z: zc, w, d, h: roofH, overhang: 0.22, courses: 12, baseY: Y + 0.1 + wallH, color: roofC });
  // 烟囱
  for (const s of [-1, 1]) {
    add(xf(box(0.26, 1.5, 0.26), cx + s * 3.0, Y + 0.1 + wallH + 0.62, zc), C.brick);
    add(xf(box(0.34, 0.09, 0.34), cx + s * 3.0, Y + 0.1 + wallH + 1.38, zc), shade(C.brick, 1.2));
  }
  // 站台雨棚（北侧）
  const canZ0 = z1;
  const canZ1 = z1 + 1.15;
  add(xf(box(w - 0.6, 0.07, canZ1 - canZ0), cx, Y + 1.06, (canZ0 + canZ1) / 2, 0, 1, 1, 1, 0.16), 0x5c4a3c);
  for (let i = 0; i < 5; i++) {
    const px = cx - (w - 1.4) / 2 + ((w - 1.4) * i) / 4;
    add(xf(cyl(0.05, 0.06, 1.0, 7), px, Y + 0.55, canZ1 - 0.16), 0x4a3a2c);
  }
  // 站台面
  add(xf(box(STATION.half * 2, 0.26, STATION.platformZ1 - STATION.platformZ0), cx, Y + 0.13, (STATION.platformZ0 + STATION.platformZ1) / 2), 0x8e8574);
  add(xf(box(STATION.half * 2 + 0.16, 0.1, STATION.platformZ1 - STATION.platformZ0 + 0.16), cx, Y - 0.02, (STATION.platformZ0 + STATION.platformZ1) / 2), C.stoneDark);
  // 站台盲道（黄线）
  add(xf(box(STATION.half * 2 - 0.2, 0.02, 0.16), cx, Y + 0.27, STATION.platformZ1 - 0.28), 0xc8a33c);
  // 窗（站台侧与站房侧）
  for (const s of [1, -1]) {
    const zz = s > 0 ? z1 + 0.01 : z0 - 0.01;
    for (let i = 0; i < 7; i++) {
      const px = cx - w / 2 + 0.75 + i * ((w - 1.5) / 6);
      const wy = Y + 0.86;
      add(xf(box(0.42, 0.5, 0.06), px, wy, zz, 0), 0xf1e8d6);
      glass.push({ geo: xf(box(0.3, 0.38, 0.07), px, wy, zz + s * 0.02), color: C.glassDay });
    }
  }
  // 端头山墙窗 + 钟
  for (const s of [1, -1]) {
    const px = cx + s * (w / 2 + 0.01);
    add(xf(box(0.06, 0.9, 0.5), px, Y + 0.8, zc), 0xf1e8d6);
    glass.push({ geo: xf(box(0.07, 0.78, 0.4), px + s * 0.02, Y + 0.8, zc), color: C.glassDay });
  }
  // 门（站台侧中部）
  add(xf(box(0.5, 0.85, 0.08), cx - 0.2, Y + 0.52, z1 + 0.02), 0x3f4f5e);
  // 站名牌
  add(xf(box(1.5, 0.22, 0.05), cx, Y + 1.2, canZ1 - 0.2), 0x2f5a4a);
}

/* ════════════════════ 市政厅（带钟楼）════════════════════ */
function townHall(out, glass, rng) {
  const x = 2.0;
  const z = -1.7;
  const w = 3.6;
  const d = 2.7;
  const wallH = 2.1;
  const wallC = 0xdfd3bb;
  const roofC = 0x54605c;
  const add = (geo, color) => out.push({ geo, color });
  add(xf(box(w + 0.2, 0.45, d + 0.2), x, Y - 0.18, z), C.stoneDark);
  add(xf(box(w, wallH, d), x, Y + 0.1 + wallH / 2, z), wallC);
  add(xf(box(w + 0.1, 0.1, d + 0.1), x, Y + 0.1 + wallH, z), shade(wallC, 0.86));
  makeRoof(out, rng, { x, z, w, d, h: 0.8, overhang: 0.26, courses: 6, baseY: Y + 0.1 + wallH, color: roofC, hip: true, ridge: false });
  // 钟楼
  const tw = 1.0;
  const th = 3.1;
  add(xf(box(tw + 0.18, 0.5, tw + 0.18), x - w / 2 + 0.5, Y + 0.1 + 0.25, z), C.stoneDark);
  add(xf(box(tw, th, tw), x - w / 2 + 0.5, Y + 0.35 + th / 2, z), 0xd8ccb4);
  add(xf(box(tw + 0.16, 0.12, tw + 0.16), x - w / 2 + 0.5, Y + 0.35 + th, z), shade(0xd8ccb4, 0.85));
  // 钟面（四面）
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const px = x - w / 2 + 0.5 + Math.sin(a) * (tw / 2 + 0.02);
    const pz = z + Math.cos(a) * (tw / 2 + 0.02);
    add(xf(box(0.44, 0.44, 0.05), px, Y + 0.35 + th - 0.55, pz, a), 0xf3ead6);
    add(xf(box(0.05, 0.05, 0.05), px + Math.sin(a) * 0.04, Y + 0.35 + th - 0.55, pz + Math.cos(a) * 0.04), 0x2a2a28);
  }
  // 尖顶
  add(xf(coneGeo(tw * 0.78, 1.15, 4), x - w / 2 + 0.5, Y + 0.47 + th + 0.55, z, Math.PI / 4), 0x455049);
  add(xf(cyl(0.02, 0.02, 0.3, 5), x - w / 2 + 0.5, Y + 0.47 + th + 1.24, z), 0x3a3a36);
  // 窗
  for (const s of [1, -1]) {
    for (let f = 0; f < 2; f++) {
      for (let i = 0; i < 3; i++) {
        const px = x - 1.1 + i * 1.1;
        const pz = z + s * (d / 2 + 0.01);
        add(xf(box(0.4, 0.44, 0.05), px, Y + 0.5 + f * 0.85, pz), 0xf0e6d2);
        glass.push({ geo: xf(box(0.29, 0.33, 0.06), px, Y + 0.5 + f * 0.85, pz + s * 0.02), color: C.glassDay });
      }
    }
  }
  // 门廊
  add(xf(box(1.5, 0.12, 0.7), x + 0.8, Y + 0.95, z + d / 2 + 0.3, 0, 1, 1, 1, -0.12), 0xd8ccb4);
  for (const s of [1, -1]) add(xf(cyl(0.06, 0.07, 0.95, 8), x + 0.8 + s * 0.6, Y + 0.47, z + d / 2 + 0.55), 0xd8ccb4);
  add(xf(box(0.5, 0.9, 0.08), x + 0.8, Y + 0.55, z + d / 2 + 0.01), 0x3f4f5e);
  // 台阶
  for (let i = 0; i < 2; i++) add(xf(box(1.7 - i * 0.2, 0.1, 0.3 - i * 0.06), x + 0.8, Y + 0.05 + i * 0.1, z + d / 2 + 0.62 - i * 0.16), C.stone);
}

/* ════════════════════ 教堂 ════════════════════ */
function church(out, glass, rng) {
  const x = 9.9;
  const z = -5.4;
  const w = 5.0;
  const d = 2.5;
  const wallH = 1.5;
  const wallC = 0xc9c3ac;
  const roofC = 0x4a5a55;
  const add = (geo, color) => out.push({ geo, color });
  add(xf(box(w + 0.2, 0.45, d + 0.2), x, Y - 0.18, z), C.stoneDark);
  add(xf(box(w, wallH, d), x, Y + 0.1 + wallH / 2, z), wallC);
  makeRoof(out, rng, { x, z, w, d, h: 1.05, overhang: 0.24, courses: 7, baseY: Y + 0.1 + wallH, color: roofC });
  // 侧廊
  add(xf(box(w * 0.62, wallH * 0.72, d + 1.3), x + 0.7, Y + 0.1 + (wallH * 0.72) / 2, z), shade(wallC, 0.94));
  makeRoof(out, rng, { x: x + 0.7, z, w: w * 0.62, d: d + 1.3, h: 0.6, overhang: 0.2, courses: 5, baseY: Y + 0.1 + wallH * 0.72, color: shade(roofC, 1.08) });
  // 塔楼
  const tw = 1.35;
  const th = 3.0;
  const tx = x - w / 2 - 0.2;
  add(xf(box(tw + 0.2, 0.5, tw + 0.2), tx, Y - 0.15 + 0.25, z), C.stoneDark);
  add(xf(box(tw, th, tw), tx, Y + 0.1 + th / 2, z), wallC);
  for (const s of [1, -1]) {
    for (let i = 0; i < 2; i++) {
      const zz = z + (i - 0.5) * 0.62 * s;
      add(xf(box(0.34, 0.8, 0.06), tx, Y + 1.5, zz), 0x3a3226);
      glass.push({ geo: xf(box(0.22, 0.66, 0.07), tx, Y + 1.5, zz), color: 0x5a6a72 });
      const pxx = tx + s * (tw / 2 + 0.01);
      add(xf(box(0.06, 0.8, 0.34), pxx, Y + 1.5, z + (i - 0.5) * 0.62), 0x3a3226);
      glass.push({ geo: xf(box(0.07, 0.66, 0.22), pxx + s * 0.02, Y + 1.5, z + (i - 0.5) * 0.62), color: 0x5a6a72 });
    }
  }
  add(xf(box(tw + 0.2, 0.14, tw + 0.2), tx, Y + 0.1 + th, z), shade(wallC, 0.86));
  add(xf(coneGeo(tw * 0.8, 1.5, 4), tx, Y + 0.24 + th + 0.72, z, Math.PI / 4), 0x3f4d48);
  add(xf(cyl(0.02, 0.02, 0.34, 5), tx, Y + 0.24 + th + 1.6, z), 0x2f2f2c);
  // 钟
  add(xf(box(0.5, 0.5, 0.05), tx, Y + 0.1 + th - 0.45, z + tw / 2 + 0.01), 0xf0e6d2);
  // 长椅窗
  for (const s of [1, -1]) {
    for (let i = 0; i < 4; i++) {
      const px = x - 1.5 + i * 1.0;
      const pz = z + s * (d / 2 + 0.01);
      add(xf(box(0.32, 0.62, 0.05), px, Y + 0.72, pz), 0xf0e6d2);
      glass.push({ geo: xf(box(0.2, 0.5, 0.06), px, Y + 0.72, pz + s * 0.02), color: 0x4a6a72 });
    }
  }
  // 门
  add(xf(box(0.6, 0.95, 0.08), tx + 0.1, Y + 0.57, z + d / 2 + 0.02), 0x4a3a28);
  // 墓地矮墙
  for (const s of [1, -1]) {
    add(xf(box(6.2, 0.3, 0.16), x - 0.6, Y + 0.15, z + s * 1.85), C.stone);
  }
}

/* ════════════════════ 谷仓 / 货棚 ════════════════════ */
function barn(out, glass, rng, o) {
  const { x, z, w = 3.2, d = 2.4, ry = 0, wallH = 1.3, roofH = 0.9, wallC = 0x6b4a35, roofC = 0x4a4a44 } = o;
  const add = (geo, color) => out.push({ geo: xf(geo, x, 0, z, ry), color });
  add(xf(box(w + 0.16, 0.4, d + 0.16), 0, Y - 0.16, 0), C.stoneDark);
  add(xf(box(w, wallH, d), 0, Y + 0.1 + wallH / 2, 0), wallC);
  makeRoof(out, rng, { x, z, ry, w, d, h: roofH, overhang: 0.2, courses: 6, baseY: Y + 0.1 + wallH, color: roofC });
  // 大门 + 交叉支撑
  const dy = Y + 0.1 + wallH * 0.45;
  add(xf(box(w * 0.5, wallH * 0.9, 0.07), 0, dy, d / 2 + 0.02), 0x59422f);
  add(xf(box(w * 0.5, 0.09, 0.09), 0, dy, d / 2 + 0.06), 0x3f3021);
  add(xf(box(0.09, wallH * 0.9, 0.09), 0, dy, d / 2 + 0.06), 0x3f3021);
  add(xf(box(0.42, 0.42, 0.05), w * 0.32, Y + 0.1 + wallH * 0.72, d / 2 + 0.04), 0xe0d6bd);
  void glass;
}

function goodsShed(out, glass, rng) {
  const x = 3.4;
  const z = 10.6;
  const w = 3.4;
  const d = 1.7;
  const wallH = 1.25;
  const add = (geo, color) => out.push({ geo, color });
  add(xf(box(w + 0.16, 0.4, d + 0.16), x, Y - 0.16, z), C.stoneDark);
  add(xf(box(w, wallH, d), x, Y + 0.1 + wallH / 2, z), 0x9a8a70);
  // 双坡
  makeRoof(out, rng, { x, z, w, d, h: 0.55, overhang: 0.24, courses: 8, baseY: Y + 0.1 + wallH, color: 0x7c7466 });
  // 装卸门（朝轨道）
  for (let i = 0; i < 2; i++) {
    const px = x - 1.0 + i * 2.0;
    add(xf(box(0.85, 0.85, 0.07), px, Y + 0.52, z - d / 2 - 0.02), 0x5c4a33);
  }
  // 侧窗
  for (let i = 0; i < 3; i++) {
    const px = x - 1.2 + i * 1.2;
    add(xf(box(0.34, 0.36, 0.05), px, Y + 0.85, z - d / 2 - 0.01), 0xefe5d0);
    glass.push({ geo: xf(box(0.24, 0.26, 0.06), px, Y + 0.85, z - d / 2 - 0.03), color: C.glassDay });
  }
  // 站台雨篷
  add(xf(box(w, 0.06, 0.8), x, Y + 0.1 + wallH + 0.1, z - d / 2 - 0.35, 0, 1, 1, 1, 0.2), 0x4a4038);
  for (const s of [1, -1]) add(xf(cyl(0.04, 0.05, 0.95, 6), x + s * (w / 2 - 0.3), Y + 0.55, z - d / 2 - 0.6), 0x3f3021);
}

/* ════════════════════ 磨坊 ════════════════════ */
function watermill(out, glass, rng) {
  const x = -17.7;
  const z = 4.9;
  const w = 2.6;
  const d = 1.8;
  const wallH = 1.5;
  const add = (geo, color) => out.push({ geo, color });
  add(xf(box(w + 0.2, 1.9, d + 0.2), x, Y - 0.2, z), C.stoneDark);
  add(xf(box(w, wallH, d), x, Y + 0.1 + wallH / 2, z), 0xd2c6a8);
  add(xf(box(w + 0.06, 0.1, d + 0.06), x, Y + 0.1 + wallH, z), shade(0xd2c6a8, 0.85));
  makeRoof(out, rng, { x, z, w, d, h: 0.7, overhang: 0.2, courses: 5, baseY: Y + 0.1 + wallH, color: 0x5a4a42 });
  // 水轮（南侧，伸进河里）
  const wz = z - d / 2 - 0.42;
  const wr = 0.78;
  const wy = Y - 0.32;
  add(xf(box(0.14, 0.14, 1.5), x, wy - wr, wz), 0x4a3a2c);
  for (const s of [1, -1]) {
    const ang = s > 0 ? 0 : Math.PI;
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      add(
        xf(box(0.1, 0.34, 0.16), x + Math.cos(a) * wr, wy + Math.sin(a) * wr, wz + s * 0.26, 0, 1, 1, 1, 0, 0),
        shade(0x4a3a2c, 0.85 + (i % 2) * 0.2)
      );
      add(
        xf(box(0.16, 0.1, 0.1), x + Math.cos(a) * wr, wy + Math.sin(a) * wr, wz + s * 0.26, 0, 1, 1, 1, 0, a),
        0x3a2c20
      );
    }
    add(xf(cyl(wr * 2, wr * 2, 0.05, 14), x, wy, wz + s * 0.26, 0, 1, 1, 1, 0, Math.PI / 2), 0x54402e);
  }
  add(xf(cyl(0.08, 0.08, 0.7, 8), x, wy, wz, 0, 1, 1, 1, 0, Math.PI / 2), 0x3a2c20);
  // 窗与门
  for (let i = 0; i < 2; i++) {
    add(xf(box(0.32, 0.4, 0.05), x - 0.6 + i * 1.2, Y + 0.95, z - d / 2 - 0.01), 0xefe5d0);
    glass.push({ geo: xf(box(0.22, 0.3, 0.06), x - 0.6 + i * 1.2, Y + 0.95, z - d / 2 - 0.03), color: C.glassDay });
  }
  add(xf(box(0.4, 0.7, 0.07), x + 0.9, Y + 0.45, z - d / 2 - 0.02), 0x4a3a28);
  // 面粉袋
  for (let i = 0; i < 4; i++) {
    add(xf(box(0.28, 0.2, 0.22), x + 1.5 + (i % 2) * 0.32, Y + 0.14 + Math.floor(i / 2) * 0.2, z - 1.2 + rng.range(-0.1, 0.1), rng.range(0, 1)), 0xd8cdb2);
  }
}

/* ════════════════════ 港区吊车 / 仓库 ════════════════════ */
function quayCrane(out, rng) {
  const x = -1.4;
  const z = 2.6;
  const add = (geo, color) => out.push({ geo, color });
  const h = 1.9;
  // 支腿
  for (const s of [1, -1]) {
    add(xf(box(0.14, h, 0.14), x + s * 0.42, Y + h / 2, z), 0x4a3a2c);
  }
  add(xf(box(1.2, 0.12, 0.12), x, Y + h, z), 0x4a3a2c);
  // 悬臂
  add(xf(box(0.12, 0.12, 1.5), x, Y + h + 0.28, z + 0.6, 0, 1, 1, 1, -0.22), 0x4a3a2c);
  add(xf(box(0.1, 0.5, 0.1), x, Y + h - 0.02, z + 1.16), 0x2f2a24);
  add(xf(box(0.3, 0.24, 0.3), x, Y + h - 0.62, z + 1.16), 0x6b5a44);
  // 拉索
  add(xf(box(0.04, 0.04, 1.5), x, Y + h + 0.3, z + 0.6, 0, 1, 1, 1, 0.22), 0x3a3028);
  void rng;
}

/* ════════════════════ 道路 ════════════════════ */
function buildRoads(group, rng) {
  const mainParts = [];
  const vergeParts = [];
  for (const r of ROADS) {
    const y = GROUND + (r.kind === 'path' ? 0.028 : 0.04);
    const c = r.kind === 'main' ? 0x8a7f6b : r.kind === 'lane' ? 0x8f8069 : 0x9c8a6d;
    const g = ribbon(r.pts, r.w, { y, uvScale: 3.2 });
    const cnt = g.attributes.position.count;
    const arr = new Float32Array(cnt * 3);
    const col = new THREE.Color(c);
    for (let i = 0; i < cnt; i++) {
      const k = 0.92 + ((i * 53) % 17) / 100;
      arr[i * 3] = col.r * k;
      arr[i * 3 + 1] = col.g * k;
      arr[i * 3 + 2] = col.b * k;
    }
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    mainParts.push({ geo: g, color: 0xffffff });
    vergeParts.push({ geo: ribbon(r.pts, r.w + 0.7, { y: GROUND + 0.012, uvScale: 3.2 }), color: 0x6f7a4c });
  }
  const mat = new THREE.MeshStandardMaterial({ map: gravelDetail(), vertexColors: true, roughness: 0.96 });
  const mesh = new THREE.Mesh(bake(mainParts), mat);
  mesh.receiveShadow = true;
  const verge = new THREE.Mesh(bake(vergeParts), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.97 }));
  verge.receiveShadow = true;
  group.add(verge, mesh);

  // 广场 / 站前石铺
  const cob = [];
  const cobble = (x0, z0, x1, z1, y) => {
    const g = faces([
      [
        [x0, y, z0],
        [x0, y, z1],
        [x1, y, z1],
        [x1, y, z0],
      ],
    ]);
    const uv = g.attributes.uv;
    const p = g.attributes.position;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, p.getX(i) / 2.6, p.getZ(i) / 2.6);
    cob.push({ geo: g, color: 0x9b9285 });
  };
  cobble(1.7, -3.9, 8.6, 0.6, GROUND + 0.045);      // 集市广场
  cobble(-3.0, 1.9, 7.2, 3.9, GROUND + 0.045);      // 车站前场
  cobble(-1.9, 0.4, 0.6, 1.9, GROUND + 0.045);      // 码头小广场
  const cobMesh = new THREE.Mesh(
    bake(cob),
    new THREE.MeshStandardMaterial({ map: cobbleDetail(), vertexColors: true, roughness: 0.95 })
  );
  cobMesh.receiveShadow = true;
  group.add(cobMesh);
  void rng;
}

/* ════════════════════ 布局数据 ════════════════════ */
export function buildTown(rng) {
  const group = new THREE.Group();
  group.name = 'town';
  const out = [];
  const glass = [];

  station(out, glass, rng);
  townHall(out, glass, rng);
  church(out, glass, rng);
  goodsShed(out, glass, rng);
  watermill(out, glass, rng);
  barn(out, glass, rng, { x: 19.0, z: 7.4, w: 3.4, d: 2.6, ry: 0.2, wallC: 0x6b4a35, roofC: 0x4a4a44 });
  barn(out, glass, rng, { x: 16.6, z: 9.8, w: 3.0, d: 2.3, ry: -0.35, wallC: 0x77543c, roofC: 0x50504a, wallH: 1.2 });
  barn(out, glass, rng, { x: -18.2, z: -5.2, w: 3.0, d: 2.3, ry: 0.5, wallC: 0x6b4a35, roofC: 0x46463f, wallH: 1.2 });

  /* 沿街民居 */
  const houses = [
    // 站前街北侧（面南）
    { x: -1.4, z: 1.5, ry: 0, w: 2.0, d: 1.7, floors: 2, wallH: 1.35, roofH: 0.6 },
    { x: 0.8, z: 1.5, ry: 0, w: 1.9, d: 1.7, floors: 2, wallH: 1.35, roofH: 0.58 },
    { x: 3.1, z: 1.55, ry: 0, w: 2.1, d: 1.6, floors: 2, wallH: 1.3, roofH: 0.62 },
    { x: 5.3, z: 1.6, ry: 0, w: 1.8, d: 1.6, floors: 1, wallH: 1.0, roofH: 0.6 },
    { x: 7.2, z: 1.7, ry: 0.06, w: 2.0, d: 1.7, floors: 2, wallH: 1.3, roofH: 0.6 },
    // 主街西侧
    { x: 0.4, z: 0.4, ry: Math.PI / 2, w: 1.9, d: 1.6, floors: 2, wallH: 1.32, roofH: 0.58 },
    { x: 0.7, z: -0.8, ry: Math.PI / 2, w: 1.8, d: 1.6, floors: 2, wallH: 1.32, roofH: 0.6 },
    // 广场北侧商铺（联排）
    { x: 3.2, z: -3.0, ry: 0, w: 2.0, d: 1.7, floors: 2, wallH: 1.4, roofH: 0.62 },
    { x: 5.3, z: -3.0, ry: 0, w: 2.0, d: 1.7, floors: 2, wallH: 1.4, roofH: 0.62 },
    { x: 7.4, z: -2.9, ry: 0, w: 2.1, d: 1.7, floors: 2, wallH: 1.45, roofH: 0.65 },
    // 广场东侧
    { x: 9.0, z: 0.2, ry: Math.PI / 2, w: 2.0, d: 1.8, floors: 2, wallH: 1.35, roofH: 0.62 },
    { x: 8.9, z: -2.0, ry: Math.PI / 2, w: 1.9, d: 1.7, floors: 2, wallH: 1.35, roofH: 0.6 },
    { x: 11.0, z: -0.2, ry: Math.PI / 2, w: 1.8, d: 1.6, floors: 1, wallH: 1.0, roofH: 0.58 },
    // 北巷
    { x: 5.0, z: -3.6, ry: 0.7, w: 1.7, d: 1.5, floors: 1, wallH: 0.98, roofH: 0.58 },
    { x: 6.6, z: -4.5, ry: 0.85, w: 1.7, d: 1.5, floors: 1, wallH: 1.0, roofH: 0.6 },
    { x: 8.0, z: -3.9, ry: 1.9, w: 1.8, d: 1.5, floors: 1, wallH: 1.0, roofH: 0.58 },
    // 湖滨
    { x: -1.6, z: -2.4, ry: 1.5, w: 1.8, d: 1.5, floors: 1, wallH: 0.98, roofH: 0.58 },
    { x: -2.4, z: -4.2, ry: 1.9, w: 1.7, d: 1.5, floors: 1, wallH: 1.0, roofH: 0.6 },
    { x: -4.0, z: -4.4, ry: 2.3, w: 1.8, d: 1.5, floors: 1, wallH: 1.0, roofH: 0.58 },
    { x: -6.0, z: -3.7, ry: 2.6, w: 1.7, d: 1.5, floors: 1, wallH: 0.98, roofH: 0.56 },
    // 西侧河畔小屋
    { x: -12.3, z: 5.6, ry: 1.57, w: 1.8, d: 1.5, floors: 1, wallH: 0.98, roofH: 0.56 },
    { x: -12.4, z: 3.8, ry: 1.57, w: 1.7, d: 1.5, floors: 1, wallH: 0.96, roofH: 0.54 },
    { x: -12.3, z: 2.0, ry: 1.57, w: 1.7, d: 1.4, floors: 1, wallH: 0.95, roofH: 0.54 },
    { x: -12.2, z: -1.6, ry: 1.57, w: 1.7, d: 1.4, floors: 1, wallH: 0.95, roofH: 0.52 },
    { x: -11.8, z: -3.4, ry: 1.75, w: 1.6, d: 1.4, floors: 1, wallH: 0.92, roofH: 0.5 },
    // 东侧农田
    { x: 15.2, z: 11.0, ry: -0.3, w: 2.0, d: 1.7, floors: 1, wallH: 1.05, roofH: 0.62 },
    { x: 17.2, z: 10.4, ry: -0.15, w: 1.9, d: 1.6, floors: 1, wallH: 1.0, roofH: 0.58 },
    { x: 19.2, z: 9.6, ry: 0.1, w: 1.8, d: 1.6, floors: 1, wallH: 1.0, roofH: 0.58 },
    // 西侧磨坊旁农舍
    { x: -18.2, z: 6.9, ry: 0.15, w: 1.8, d: 1.6, floors: 1, wallH: 1.0, roofH: 0.58 },
    { x: -16.4, z: 7.6, ry: -0.4, w: 1.7, d: 1.5, floors: 1, wallH: 0.95, roofH: 0.55 },
    { x: -19.0, z: -2.6, ry: 0.9, w: 1.8, d: 1.6, floors: 1, wallH: 1.0, roofH: 0.58 },
  ];
  for (const h of houses) {
    cottage(out, glass, rng, {
      x: h.x + rng.range(-0.06, 0.06),
      z: h.z + rng.range(-0.06, 0.06),
      ry: h.ry + rng.range(-0.04, 0.04),
      w: h.w,
      d: h.d,
      floors: h.floors,
      wallH: h.wallH,
      roofH: h.roofH,
    });
  }

  /* 港区仓库 */
  for (const [wx, wz, ry, ww, wd, wh] of [
    [-2.6, 3.9, 0.1, 2.2, 1.5, 1.2],
    [-0.4, 4.4, 0.25, 1.9, 1.4, 1.15],
  ]) {
    out.push({ geo: xf(box(ww, wh, wd), wx, Y + 0.1 + wh / 2, wz, ry), color: 0xa89a80 });
    out.push({ geo: xf(box(ww + 0.14, 0.4, wd + 0.14), wx, Y - 0.16, wz, ry), color: C.stoneDark });
    makeRoof(out, rng, { x: wx, z: wz, ry, w: ww, d: wd, h: 0.55, overhang: 0.18, courses: 5, baseY: Y + 0.1 + wh, color: 0x4f5a58 });
    for (let i = 0; i < 2; i++) {
      const t = (i - 0.5) * ww * 0.5;
      out.push({
        geo: xf(box(0.36, 0.4, 0.05), wx + Math.cos(ry) * t, Y + 0.78, wz - Math.sin(ry) * t - wd / 2 - 0.01, ry),
        color: 0xefe5d0,
      });
      glass.push({
        geo: xf(box(0.26, 0.3, 0.06), wx + Math.cos(ry) * t, Y + 0.78, wz - Math.sin(ry) * t - wd / 2 - 0.03, ry),
        color: C.glassDay,
      });
    }
  }
  quayCrane(out, rng);

  /* ── 生成网格 ── */
  const solidMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.88, metalness: 0.0 });
  const solid = new THREE.Mesh(bake(out), solidMat);
  solid.castShadow = true;
  solid.receiveShadow = true;
  group.add(solid);

  const glassMat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.22,
    metalness: 0.1,
    emissive: new THREE.Color(C.glow),
    emissiveIntensity: 0.0,
  });
  const glassMesh = new THREE.Mesh(bake(glass), glassMat);
  glassMesh.castShadow = false;
  glassMesh.receiveShadow = false;
  group.add(glassMesh);

  buildRoads(group, rng);

  /* 建筑占位（供植被/电杆避让） */
  const blockers = [
    { x: STATION.cx, z: 4.9, r: 4.9 },
    { x: 2.0, z: -1.7, r: 2.5 },
    { x: 8.6, z: -5.4, r: 3.8 },
    { x: 3.4, z: 10.6, r: 2.5 },
    { x: -17.7, z: 4.9, r: 2.3 },
    { x: 19.0, z: 7.4, r: 2.1 },
    { x: 16.6, z: 9.8, r: 2.0 },
    { x: -18.2, z: -5.2, r: 2.0 },
    { x: -1.4, z: 10.3, r: 1.3 },
    { x: 1.4, z: -4.2, r: 1.0 },
    { x: 7.6, z: 10.3, r: 1.0 },
    { x: -2.6, z: 3.9, r: 1.5 },
    { x: -0.4, z: 4.4, r: 1.4 },
    { x: 5.0, z: -1.4, r: 1.0 },
  ];
  for (const h of houses) {
    blockers.push({ x: h.x, z: h.z, r: Math.max(h.w, h.d) * 0.6 + 0.3 });
  }

  return { group, glassMat, solidMat, blockers };
}

export { roadDist, PLOTS, YARDS, tileDetail };
