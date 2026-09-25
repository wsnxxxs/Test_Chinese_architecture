/**
 * site.js — 场地：地面、铺装、围墙、照壁、树木、石狮、灯杆
 */

import { C } from './palette.js';
import { SITE } from './layout.js';
import { paved } from './parts.js';
import { tree, stoneLion, censer, postLantern, banner } from './props.js';

/* ---------- 散列 ---------- */

function hsh(x, z) {
  let h = (x * 73856093) ^ (z * 19349663) ^ 0x9e3779b9;
  h = (h ^ (h >>> 13)) * 1274126177;
  return ((h ^ (h >>> 16)) >>> 0) % 10000 / 10000;
}

/* =========================================================
   地面
   ========================================================= */

export function buildGround(b) {
  const g = SITE.ground;
  for (let x = g.x0; x <= g.x1; x++) {
    for (let z = g.z0; z <= g.z1; z++) {
      const p = hsh(x >> 2, z >> 2);
      const d = hsh(x, z);
      let col = p < 0.26 ? C.grassLite : p < 0.68 ? C.grass : C.grassDark;
      if (d < 0.055) col = C.soil;
      b.set(x, -1, z, col);
    }
  }
  // 场地边缘土层，避免看到「纸片地面」
  for (let x = g.x0; x <= g.x1; x++) {
    for (let y = -4; y <= -2; y++) {
      b.set(x, y, g.z0, C.soil);
      b.set(x, y, g.z1, C.soil);
    }
  }
  for (let z = g.z0; z <= g.z1; z++) {
    for (let y = -4; y <= -2; y++) {
      b.set(g.x0, y, z, C.soil);
      b.set(g.x1, y, z, C.soil);
    }
  }
}

/* =========================================================
   铺装：中轴御道 + 庭院甬路
   ========================================================= */

export function buildPaving(b) {
  const pave = (x0, x1, z0, z1, scale = 3, base = C.pave, alt = C.paveAlt) =>
    paved(b, { x0, x1, z0, z1, y: -1, base, alt, scale });

  /* 中轴御道：山门 → 庭院 → 主殿月台 */
  pave(-6, 5, 22, 61, 4);
  // 御道中心石
  paved(b, { x0: -2, x1: 1, z0: 22, z1: 61, y: -1, base: C.roadLite, alt: C.road, scale: 2 });

  /* 山门外广场 */
  pave(-22, 21, 77, 86, 3);

  /* 前院横向甬路（通钟鼓楼） */
  pave(-36, 35, 46, 55, 4);
  /* 配殿甬路 */
  pave(-32, 31, 16, 25, 4);
  /* 山门前庭 */
  pave(-22, 21, 30, 45, 3);

  /* 主殿两侧夹道 */
  pave(-40, -30, -24, 6, 4);
  pave(29, 39, -24, 6, 4);

  /* 后院甬路：主殿 → 后殿 → 宝塔 */
  pave(-5, 4, -44, -26, 4);
  pave(-26, 25, -48, -41, 4);
  pave(-16, 15, -72, -69, 3);
  /* 后院横向 */
  pave(-30, 29, -60, -52, 4);
}

/* =========================================================
   围墙 + 照壁
   ========================================================= */

export function buildWalls(b) {
  const W = SITE.wall;
  const h = W.h;                       // 9
  const seg = (x0, x1, z0, z1) => {
    b.bx(x0, x1, 0, h - 1, z0, z1, C.wallRed);
    b.bx(x0, x1, 0, 1, z0, z1, C.stoneDark);            // 墙基
    b.bx(x0, x1, h, h, z0, z1, C.tileGrey);             // 青瓦压顶
    // 瓦脊
    const cxz = (x1 - x0) > (z1 - z0);
    if (cxz) {
      b.lineX(x0, x1, h + 1, (z0 + z1) / 2 | 0, C.ridgeGrey);
    } else {
      b.lineZ(z0, z1, h + 1, (x0 + x1) / 2 | 0, C.ridgeGrey);
    }
  };

  /* 南墙（避开山门） */
  seg(W.x0, -17, 71, W.z1);
  seg(16, W.x1, 71, W.z1);
  /* 北墙 */
  seg(W.x0, W.x1, W.z0, W.z0 + 1);
  /* 东西墙 */
  seg(W.x0, W.x0 + 1, W.z0 + 2, 70);
  seg(W.x1 - 1, W.x1, W.z0 + 2, 70);

  /* 四角加厚 */
  for (const x of [W.x0, W.x1 - 1]) {
    for (const z of [W.z0, W.z1 - 1]) {
      b.bx(x, x + 1, 0, h + 1, z, z + 1, C.wallRed);
      b.bx(x - 1, x + 2, h + 2, h + 2, z - 1, z + 2, C.tileGrey);
      b.lineY(h + 2, h + 4, x, z, C.ridgeGold);
    }
  }
}

export function buildScreenWall(b) {
  const cx = 0, cz = 80, hw = 14;
  b.bx(cx - hw, cx + hw - 1, 0, 6, cz, cz + 1, C.wallRed);
  b.bx(cx - hw, cx + hw - 1, 0, 1, cz, cz + 1, C.stoneDark);
  // 瓦顶
  for (let i = 0; i < 3; i++) {
    b.bx(cx - hw - 2 + i, cx + hw + 1 - i, 7 + i, 7 + i, cz - 1 + i, cz + 2 - i,
      i === 2 ? C.ridgeGold : C.tileGrey);
  }
  // 边框与心
  for (const sx of [-1, 1]) {
    b.bx(cx + sx * hw, cx + sx * hw, 2, 5, cz, cz + 1, C.stoneDark);
  }
  for (let x = cx - 9; x <= cx + 8; x++) {
    const insidePane = ((x - (cx - 9)) % 6) < 5;
    if (insidePane) b.lineY(3, 5, x, cz, C.wallWhite);
  }
  b.lineX(cx - 10, cx + 9, 5, cz, C.stoneDark);
}

/* =========================================================
   绿化与小品
   ========================================================= */

export function buildProps(b) {
  /* 前院树 */
  const front = [[-27, 35], [-27, 28], [-25, 42], [26, 35], [26, 28], [24, 42]];
  for (const [x, z] of front) tree(b, { x, z, h: 6, r: 3, seedIn: x * 31 + z });
  /* 钟鼓楼旁 */
  for (const [x, z] of [[-25, 33], [24, 33], [-33, 60], [32, 60]]) {
    tree(b, { x, z, h: 7, r: 3, seedIn: x * 17 + z * 7 });
  }
  /* 主殿两侧 */
  for (const [x, z] of [[-35, -8], [34, -8], [-35, -20], [34, -20], [-21, -30], [20, -30]]) {
    tree(b, { x, z, h: 8, r: 4, seedIn: x * 13 + z * 11 });
  }
  /* 后院 */
  for (const [x, z] of [[-16, -36], [15, -36], [-36, -60], [35, -60], [-20, -70], [19, -70]]) {
    tree(b, { x, z, h: 6, r: 3, seedIn: x * 7 + z * 23 });
  }
  /* 塔院 */
  for (const [x, z] of [[-22, -80], [21, -80], [-26, -92], [25, -92]]) {
    tree(b, { x, z, h: 8, r: 4, seedIn: x * 3 + z * 5 });
  }

  /* 石狮：山门前一对 */
  for (const sx of [-1, 1]) stoneLion(b, { x: sx * 9, z: 79, y: 0, face: 1 });
  /* 主殿月台前一对 */
  for (const sx of [-1, 1]) stoneLion(b, { x: sx * 16, z: 18, y: 3, face: 1 });

  /* 香炉 */
  for (const sx of [-1, 1]) censer(b, { x: sx * 9, z: 17, y: 3 });

  /* 御道两侧灯杆 */
  for (let z = 26; z <= 56; z += 10) {
    for (const sx of [-1, 1]) postLantern(b, { x: sx * 9, z, h: 7 });
  }
  /* 前院横路 */
  for (const sx of [-1, 1]) postLantern(b, { x: sx * 20, z: 51, h: 7 });
  /* 后院 */
  for (let z = -30; z >= -42; z -= 12) {
    for (const sx of [-1, 1]) postLantern(b, { x: sx * 8, z, h: 7 });
  }

  /* 幡杆 */
  for (const sx of [-1, 1]) banner(b, { x: sx * 13, z: 34, h: 24 });
}

/* =========================================================
   总装
   ========================================================= */

export function buildSite(b) {
  buildGround(b);
  buildPaving(b);
  buildWalls(b);
  buildScreenWall(b);
  buildProps(b);
  return b;
}
