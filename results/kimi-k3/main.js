import * as THREE from 'three';
import { OrbitControls } from './vendor/OrbitControls.js';

/* ============================================================
 * 体素 · 中式古典建筑群 (Voxel Chinese Classical Architecture)
 * 中轴对称院落布局: 山门 -> 庭院 -> 主殿(重檐庑殿)
 * 配殿东西对称, 宝塔 + 钟楼, 黄昏光影
 * ============================================================ */

// ---------------- 调色板 ----------------
const P = {
  grass: 0x67a54b, grassDark: 0x4e8238,
  road: 0xb9b3a4, roadEdge: 0x8f8a7d,
  court: 0xc4beb0, court2: 0xb2ac9e,
  stone: 0xa8a9a2, stoneLight: 0xcfcfc6,
  redWall: 0xa33327, redCol: 0x7e2116,
  wood: 0x6b4a2b, darkWood: 0x3d2a1a,
  gold: 0xd9a41c, goldRidge: 0xa87b12,
  green: 0x4a916f, greenRidge: 0x356b52,
  gray: 0x70808c, grayRidge: 0x52626d,
  window: 0x2c3947, bronze: 0x8a743c,
  white: 0xe8e4da, goldLight: 0xffd75e,
  lantern: 0xff5a3c, leaf: 0x3e6b35, trunk: 0x5d4023,
  hill: 0xa3b0c2, cloud: 0xffe9d6,
};

// ---------------- 体素收集器 ----------------
const voxels = [];      // 主体(投影/接收阴影): [x,y,z,hex] * n
const glowVoxels = [];  // 发光(灯笼)
const skyVoxels = [];   // 云(不投影)
const hillVoxels = [];  // 远山(平色 + 雾, 剪影效果)

function hash3(x, y, z) {
  const h = Math.sin(x * 12.9898 + y * 37.719 + z * 78.233) * 43758.5453;
  return h - Math.floor(h);
}
function emit(arr, x, y, z, hex, jit = 0) {
  let h = hex;
  if (jit > 0) {
    const f = 1 + (hash3(x, y, z) - 0.5) * jit;
    h = new THREE.Color(hex).multiplyScalar(f).getHex();
  }
  arr.push(x, y, z, h);
}
function box(arr, x0, y0, z0, x1, y1, z1, hex, jit = 0) {
  for (let x = Math.min(x0, x1); x <= Math.max(x0, x1); x++)
    for (let y = Math.min(y0, y1); y <= Math.max(y0, y1); y++)
      for (let z = Math.min(z0, z1); z <= Math.max(z0, z1); z++)
        emit(arr, x, y, z, hex, jit);
}
const vbox = (...a) => box(voxels, ...a);

// ---------------- 地面(颜色图, 避免重复体素) ----------------
const GX0 = -80, GX1 = 79, GZ0 = -60, GZ1 = 69;
const groundColor = new Map();
const gkey = (x, z) => x + ',' + z;
function pave(x0, z0, x1, z1, fn) {
  for (let x = Math.min(x0, x1); x <= Math.max(x0, x1); x++)
    for (let z = Math.min(z0, z1); z <= Math.max(z0, z1); z++)
      groundColor.set(gkey(x, z), typeof fn === 'function' ? fn(x, z) : fn);
}
const buildRects = []; // 建筑占地(种草/花时排除)
function reserve(x0, z0, x1, z1) { buildRects.push([x0, z0, x1, z1]); }
function inBuild(x, z) {
  for (const [x0, z0, x1, z1] of buildRects)
    if (x >= x0 && x <= x1 && z >= z0 && z <= z1) return true;
  return false;
}

// ---------------- 屋顶 ----------------
// 庑殿顶(gable=false): 各层四边同步内收, 收脊后为屋脊线
// 歇山顶(gable=true) : 长边隔层内收, 形成较长正脊
function roof(cx, cz, yBase, w, d, hex, ridgeHex, opt = {}) {
  const over = opt.over ?? 2, up = opt.up ?? 2;
  const gable = opt.gable ?? false, maxRise = opt.maxRise ?? 99;
  let halfW = Math.floor(w / 2) + over, halfD = Math.floor(d / 2) + over;
  let y = yBase, rise = 0, lastEnds = null;
  while (halfW >= 0 && halfD >= 0 && rise < maxRise) {
    const lineOnly = halfD === 0 || halfW === 0;
    const col = lineOnly ? ridgeHex : hex;
    for (let dx = -halfW; dx <= halfW; dx++)
      for (let dz = -halfD; dz <= halfD; dz++)
        emit(voxels, cx + dx, y, cz + dz, col, lineOnly ? 0.03 : 0.08);
    if (lineOnly) lastEnds = [cx - halfW, cx + halfW, y];
    else { // 飞檐翘角: 角部逐级抬升
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
        for (let k = 1; k <= up; k++) emit(voxels, cx + sx * halfW, y + k, cz + sz * halfD, hex, 0.05);
        emit(voxels, cx + sx * (halfW - 1), y + 1, cz + sz * halfD, hex, 0.05);
        emit(voxels, cx + sx * halfW, y + 1, cz + sz * (halfD - 1), hex, 0.05);
      }
    }
    halfD--;
    if (!gable || rise % 2 === 1) halfW--;
    y++; rise++;
  }
  if (lastEnds) { // 鸱吻
    const [ex0, ex1, ey] = lastEnds;
    emit(voxels, ex0, ey + 1, cz, ridgeHex); emit(voxels, ex0, ey + 2, cz, ridgeHex);
    emit(voxels, ex1, ey + 1, cz, ridgeHex); emit(voxels, ex1, ey + 2, cz, ridgeHex);
  }
}

// 攒尖顶(宝塔顶 / 钟楼顶)
function pyramidRoof(cx, cz, yBase, w, d, hex, tipHex) {
  let halfW = Math.floor(w / 2) + 1, halfD = Math.floor(d / 2) + 1, y = yBase;
  while (halfW >= 0 && halfD >= 0) {
    for (let dx = -halfW; dx <= halfW; dx++)
      for (let dz = -halfD; dz <= halfD; dz++)
        emit(voxels, cx + dx, y, cz + dz, hex, 0.07);
    if (halfW > 0 && halfD > 0)
      for (const sx of [-1, 1]) for (const sz of [-1, 1])
        emit(voxels, cx + sx * halfW, y + 1, cz + sz * halfD, hex, 0.05);
    halfW--; halfD--; y++;
  }
  box(voxels, cx, y, cz, cx, y + 1, cz, P.bronze);
  emit(voxels, cx, y + 2, cz, tipHex);
}

// 单层屋檐(宝塔塔檐)
function eave(cx, cz, y, w, d, hex) {
  const hw = Math.floor(w / 2) + 1, hd = Math.floor(d / 2) + 1;
  vbox(cx - hw, y, cz - hd, cx + hw, y, cz + hd, hex, 0.08);
  vbox(cx - hw + 1, y + 1, cz - hd + 1, cx + hw - 1, y + 1, cz + hd - 1, hex, 0.08);
  for (const sx of [-1, 1]) for (const sz of [-1, 1])
    emit(voxels, cx + sx * hw, y + 1, cz + sz * hd, hex, 0.05);
}

// 斗拱层: 墙顶整圈额枋 + 柱头处挑出的斗拱
function dougong(cx, cz, y, w, d) {
  const hw = Math.floor(w / 2) + 1, hd = Math.floor(d / 2) + 1;
  for (let x = cx - hw; x <= cx + hw; x++) {
    emit(voxels, x, y, cz - hd, P.wood, 0.06); emit(voxels, x, y, cz + hd, P.wood, 0.06);
  }
  for (let z = cz - hd + 1; z <= cz + hd - 1; z++) {
    emit(voxels, cx - hw, y, z, P.wood, 0.06); emit(voxels, cx + hw, y, z, P.wood, 0.06);
  }
  const t2 = (Math.floor(w / 2) + 2), d2 = (Math.floor(d / 2) + 2);
  for (let x = cx - t2; x <= cx + t2; x += 3) {
    emit(voxels, x, y, cz - d2, P.darkWood); emit(voxels, x, y, cz + d2, P.darkWood);
  }
  for (let z = cz - d2; z <= cz + d2; z += 3) {
    emit(voxels, cx - t2, y, z, P.darkWood); emit(voxels, cx + t2, y, z, P.darkWood);
  }
}

// 殿身墙体: 立柱 + 红墙 + 门窗
// door: 'S'|'N'|'E'|'W'|'none' (S=+z 朝向)
function walls(cx, cz, y0, w, d, h, opt = {}) {
  const hw = Math.floor(w / 2), hd = Math.floor(d / 2);
  const door = opt.door ?? 'S', doorW = opt.doorW ?? 4, doorH = opt.doorH ?? h - 1;
  const tunnel = opt.tunnel ?? false;
  const wallHex = opt.wallHex ?? P.redWall, colHex = opt.colHex ?? P.redCol;
  const cell = (x, z, face, t) => {
    const corner = (x === cx - hw || x === cx + hw) && (z === cz - hd || z === cz + hd);
    const isCol = corner || t % 3 === 0;
    const inDoor =
      (face === door) &&
      (door === 'S' || door === 'N' ? Math.abs(x - cx) <= Math.floor(doorW / 2)
                                    : Math.abs(z - cz) <= Math.floor(doorW / 2));
    for (let yy = 0; yy < h; yy++) {
      const y = y0 + yy;
      if (inDoor && yy < doorH) {
        if (tunnel) continue; // 门洞贯通
        if (yy === Math.floor(doorH / 2) &&
            (Math.abs(x - cx) === 1 || Math.abs(z - cz) === 1)) emit(voxels, x, y, z, P.goldLight);
        else emit(voxels, x, y, z, P.darkWood, 0.05);
        continue;
      }
      if (!isCol && !inDoor && yy >= 2 && yy <= 3 && t % 4 >= 1 && t % 4 <= 2) {
        emit(voxels, x, y, z, (t + yy) % 2 === 0 ? P.window : P.wood, 0.04); // 槛窗棂格
        continue;
      }
      emit(voxels, x, y, z, isCol ? colHex : wallHex, 0.05);
    }
  };
  for (let x = cx - hw; x <= cx + hw; x++) {
    const t = x - (cx - hw);
    cell(x, cz + hd, 'S', t); cell(x, cz - hd, 'N', t);
  }
  for (let z = cz - hd + 1; z <= cz + hd - 1; z++) {
    const t = z - (cz - hd);
    cell(cx + hw, z, 'E', t); cell(cx - hw, z, 'W', t);
  }
}

// ---------------- 装饰小品 ----------------
function lantern(x, y, z) { // 挂灯: y 为灯芯高度
  emit(voxels, x, y - 1, z, P.goldRidge);
  emit(glowVoxels, x, y, z, P.lantern);
  emit(voxels, x, y + 1, z, P.goldRidge);
  emit(voxels, x, y + 2, z, P.darkWood);
}
function stoneLamp(x, z) { // 石灯笼
  vbox(x, 1, z, x, 2, z, P.stoneLight);
  for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++)
    if (dx !== 0 || dz !== 0) emit(voxels, x + dx, 3, z + dz, P.stoneLight, 0.05);
  emit(glowVoxels, x, 3, z, 0xffc46b);
  vbox(x - 1, 4, z - 1, x + 1, 4, z + 1, P.stone, 0.05);
  emit(voxels, x, 5, z, P.stone);
}
function lion(x, z) { // 石狮(面朝 +z)
  vbox(x, 1, z, x + 1, 1, z + 1, P.stone, 0.04);
  vbox(x, 2, z, x + 1, 2, z + 1, P.white, 0.04);
  emit(voxels, x, 3, z + 1, P.white); emit(voxels, x + 1, 3, z + 1, P.white);
  emit(voxels, x, 4, z + 1, P.white);
}
function pine(x, z) {
  const h = 4 + Math.floor(hash3(x, 0, z) * 3);
  vbox(x, 1, z, x, h - 1, z, P.trunk, 0.08);
  const layer = (y, r) => {
    for (let dx = -r; dx <= r; dx++) for (let dz = -r; dz <= r; dz++)
      if (Math.abs(dx) + Math.abs(dz) <= r) emit(voxels, x + dx, y, z + dz, P.leaf, 0.18);
  };
  layer(h, 2); layer(h + 1, 2); layer(h + 2, 1); layer(h + 3, 1);
  emit(voxels, x, h + 4, z, P.leaf);
}
function cloud(cx, cy, cz) {
  box(skyVoxels, cx - 5, cy, cz - 2, cx + 4, cy, cz + 2, P.cloud, 0.03);
  box(skyVoxels, cx - 2, cy + 1, cz - 1, cx + 2, cy + 1, cz + 1, P.cloud, 0.03);
  box(skyVoxels, cx + 3, cy + 1, cz, cx + 6, cy + 1, cz + 1, P.cloud, 0.03);
}
function hill(cx, cz, w, h, d) {
  box(hillVoxels, cx - Math.floor(w / 2), -4, cz - Math.floor(d / 2),
      cx + Math.floor(w / 2), h, cz + Math.floor(d / 2), P.hill);
}

/* ============================================================
 * 建 筑 群
 * ============================================================ */

// ---------- 主殿 (重檐庑殿顶, 中轴线北端) ----------
(function mainHall() {
  const cx = 0, cz = -18;
  reserve(cx - 21, cz - 15, cx + 21, cz + 15);
  // 三层台基
  vbox(cx - 20, 1, cz - 14, cx + 20, 1, cz + 14, P.stone, 0.05);
  vbox(cx - 19, 2, cz - 13, cx + 19, 2, cz + 13, P.stone, 0.05);
  vbox(cx - 18, 3, cz - 12, cx + 18, 3, cz + 12, P.stoneLight, 0.05);
  // 正面台阶(南向)
  vbox(cx - 3, 1, cz + 15, cx + 3, 1, cz + 17, P.stoneLight, 0.04);
  vbox(cx - 3, 2, cz + 15, cx + 3, 2, cz + 16, P.stoneLight, 0.04);
  vbox(cx - 3, 3, cz + 15, cx + 3, 3, cz + 15, P.stoneLight, 0.04);
  // 台基栏杆望柱
  for (let x = cx - 18; x <= cx + 18; x += 2) {
    if (Math.abs(x - cx) > 4) emit(voxels, x, 4, cz + 12, P.stoneLight);
    emit(voxels, x, 4, cz - 12, P.stoneLight);
  }
  for (let z = cz - 12; z <= cz + 12; z += 2) {
    emit(voxels, cx - 18, 4, z, P.stoneLight); emit(voxels, cx + 18, 4, z, P.stoneLight);
  }
  // 副阶廊柱 (外圈)
  for (let x = cx - 16; x <= cx + 16; x++)
    for (const z of [cz - 10, cz + 10])
      if ((x - cx + 16) % 3 === 0) vbox(x, 4, z, x, 8, z, P.redCol, 0.04);
  for (let z = cz - 10; z <= cz + 10; z++)
    for (const x of [cx - 16, cx + 16])
      if ((z - cz + 10) % 3 === 0) vbox(x, 4, z, x, 8, z, P.redCol, 0.04);
  // 下檐斗拱 + 下檐(腰檐)
  dougong(cx, cz, 9, 33, 21);
  roof(cx, cz, 10, 35, 23, P.gold, P.goldRidge, { over: 1, up: 2, maxRise: 3 });
  // 上身墙体 + 斗拱 + 上檐(庑殿顶)
  walls(cx, cz, 13, 23, 15, 4, { door: 'S', doorW: 5, doorH: 3 });
  dougong(cx, cz, 17, 23, 15);
  roof(cx, cz, 18, 25, 17, P.gold, P.goldRidge, { over: 2, up: 2, gable: false });
  // 廊下灯笼
  lantern(cx - 17, 7, cz + 11); lantern(cx + 17, 7, cz + 11);
})();

// ---------- 配殿 ×2 (歇山顶, 东西对称) ----------
function sideHall(cx, cz, doorFace) {
  reserve(cx - 10, cz - 7, cx + 10, cz + 7);
  vbox(cx - 9, 1, cz - 6, cx + 9, 1, cz + 6, P.stone, 0.05);
  vbox(cx - 8, 2, cz - 5, cx + 8, 2, cz + 5, P.stoneLight, 0.05);
  // 面向中轴的台阶
  const sx = doorFace === 'W' ? cx - 10 : cx + 10;
  vbox(sx - 1, 1, cz - 2, sx + (doorFace === 'W' ? 0 : 1) - (doorFace === 'W' ? 0 : 0), 1, cz + 2, P.stoneLight, 0.04);
  walls(cx, cz, 3, 13, 7, 4, { door: doorFace, doorW: 3, doorH: 3 });
  dougong(cx, cz, 7, 13, 7);
  roof(cx, cz, 8, 15, 9, P.green, P.greenRidge, { over: 2, up: 2, gable: true });
}
sideHall(26, -6, 'W');   // 东配殿, 门朝西(朝中轴)
sideHall(-26, -6, 'E');  // 西配殿, 门朝东(朝中轴)

// ---------- 山门 (歇山顶, 场地南端入口, 三门洞) ----------
(function gate() {
  const cx = 0, cz = 26;
  reserve(cx - 12, cz - 6, cx + 12, cz + 6);
  const hw = 11, hd = 5;
  const inTunnel = (x) => Math.abs(x) <= 2 || (Math.abs(Math.abs(x) - 7) <= 1);
  for (let x = cx - hw; x <= cx + hw; x++)
    for (let z = cz - hd; z <= cz + hd; z++)
      if (!inTunnel(x - cx)) emit(voxels, x, 1, z, P.stone, 0.05);
  // 墙体: 三门洞贯通
  const wHw = 10, wHd = 4;
  const gateCell = (x, z, t) => {
    const lx = Math.abs(x - cx);
    const corner = lx === wHw;
    const isCol = corner || t % 3 === 0;
    const doorType = lx <= 2 ? 1 : (Math.abs(lx - 7) <= 1 ? 2 : 0); // 1中门 2侧门
    const dH = doorType === 1 ? 3 : 2;
    for (let yy = 0; yy < 4; yy++) {
      const y = 2 + yy;
      if (doorType && yy < dH) continue; // 贯通门洞
      if (!isCol && !doorType && yy >= 2 && yy <= 3 && t % 4 >= 1 && t % 4 <= 2) {
        emit(voxels, x, y, z, (t + yy) % 2 === 0 ? P.window : P.wood, 0.04);
        continue;
      }
      emit(voxels, x, y, z, isCol ? P.redCol : P.redWall, 0.05);
    }
  };
  for (let x = cx - wHw; x <= cx + wHw; x++) {
    const t = x - (cx - wHw);
    gateCell(x, cz + wHd, t); gateCell(x, cz - wHd, t);
  }
  for (let z = cz - wHd + 1; z <= cz + wHd - 1; z++) {
    vbox(cx - wHw, 2, z, cx - wHw, 5, z, P.redCol, 0.04);
    vbox(cx + wHw, 2, z, cx + wHw, 5, z, P.redCol, 0.04);
  }
  dougong(cx, cz, 6, 21, 9);
  roof(cx, cz, 7, 23, 11, P.green, P.greenRidge, { over: 2, up: 2, gable: true });
  // 门前石狮一对
  lion(cx - 6, cz + 8); lion(cx + 4, cz + 8);
  // 檐下灯笼
  lantern(cx - 10, 4, cz + 7); lantern(cx + 10, 4, cz + 7);
})();

// ---------- 宝塔 (五层攒尖, 西侧) ----------
(function pagoda() {
  const cx = -30, cz = 12;
  reserve(cx - 8, cz - 8, cx + 8, cz + 8);
  vbox(cx - 7, 1, cz - 7, cx + 7, 1, cz + 7, P.stone, 0.05);
  vbox(cx - 6, 2, cz - 6, cx + 6, 2, cz + 6, P.stoneLight, 0.05);
  vbox(cx + 7, 1, cz - 1, cx + 8, 1, cz + 1, P.stoneLight, 0.04); // 东侧台阶
  let y0 = 3;
  for (let s = 11; s >= 3; s -= 2) {
    const hw = Math.floor(s / 2);
    // 塔身(木色红墙, 四面开窗)
    for (let x = cx - hw; x <= cx + hw; x++)
      for (let z = cz - hw; z <= cz + hw; z++) {
        if (Math.abs(x - cx) !== hw && Math.abs(z - cz) !== hw) continue;
        for (let yy = 0; yy < 3; yy++) {
          const isWin = yy === 1 && ((Math.abs(x - cx) === hw && z === cz) || (Math.abs(z - cz) === hw && x === cx));
          emit(voxels, x, y0 + yy, z, isWin ? P.window : P.redWall, 0.05);
        }
      }
    if (s === 11) emit(voxels, cx, y0, cz + hw, P.darkWood); // 底层塔门
    eave(cx, cz, y0 + 3, s, s, P.gray);
    y0 += 5;
  }
  // 塔刹
  box(voxels, cx, y0, cz, cx, y0 + 2, cz, P.bronze);
  emit(voxels, cx, y0 + 3, cz, P.goldLight);
})();

// ---------- 钟楼 (攒尖顶, 东侧, 与宝塔呼应) ----------
(function bellTower() {
  const cx = 30, cz = 12;
  reserve(cx - 7, cz - 7, cx + 7, cz + 7);
  vbox(cx - 6, 1, cz - 6, cx + 6, 1, cz + 6, P.stone, 0.05);
  vbox(cx - 5, 2, cz - 5, cx + 5, 2, cz + 5, P.stoneLight, 0.05);
  vbox(cx - 8, 1, cz - 1, cx - 7, 1, cz + 1, P.stoneLight, 0.04); // 西侧台阶
  // 栏杆
  for (let x = cx - 5; x <= cx + 5; x += 2) {
    emit(voxels, x, 3, cz - 5, P.stoneLight); emit(voxels, x, 3, cz + 5, P.stoneLight);
  }
  for (let z = cz - 5; z <= cz + 5; z += 2) {
    emit(voxels, cx - 5, 3, z, P.stoneLight); emit(voxels, cx + 5, 3, z, P.stoneLight);
  }
  // 四柱 + 梁 + 铜钟
  for (const sx of [-1, 1]) for (const sz of [-1, 1])
    vbox(cx + sx * 4, 3, cz + sz * 4, cx + sx * 4, 6, cz + sz * 4, P.redCol, 0.04);
  vbox(cx - 4, 7, cz, cx + 4, 7, cz, P.darkWood);
  emit(voxels, cx, 6, cz, P.bronze);
  vbox(cx - 1, 4, cz - 1, cx + 1, 5, cz + 1, P.bronze, 0.06);
  pyramidRoof(cx, cz, 8, 13, 13, P.gray, P.goldLight);
})();

// ---------- 庭院香炉 ----------
(function censer() {
  const cx = 0, cz = 2;
  emit(voxels, cx - 1, 1, cz - 1, P.bronze); emit(voxels, cx + 1, 1, cz - 1, P.bronze);
  emit(voxels, cx, 1, cz + 1, P.bronze);
  vbox(cx - 1, 2, cz - 1, cx + 1, 2, cz + 1, P.bronze, 0.06);
  for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++)
    if (Math.abs(dx) === 1 || Math.abs(dz) === 1) emit(voxels, cx + dx, 3, cz + dz, P.bronze);
  emit(voxels, cx - 2, 3, cz, P.bronze); emit(voxels, cx + 2, 3, cz, P.bronze);
})();

// ---------- 石灯笼一对(庭院入口) ----------
stoneLamp(-6, 1); stoneLamp(6, 1);

// ---------- 主殿前石狮一对 ----------
lion(-7, -1); lion(5, -1);

// ---------- 松树 ----------
pine(-18, 6); pine(18, 6); pine(-48, -16); pine(48, -16);
pine(-44, 32); pine(44, 32); pine(-12, -42); pine(12, -42);

// ---------- 地面铺装(道路动线: 山门 -> 庭院 -> 主殿) ----------
pave(-16, -2, 16, 10, (x, z) => ((x + z) % 2 === 0 ? P.court : P.court2)); // 庭院方砖
pave(-2, -2, 2, 42, (x) => (Math.abs(x) === 2 ? P.roadEdge : P.road));     // 中轴御道
pave(3, -7, 16, -5, P.road); pave(-16, -7, -3, -5, P.road);                 // 配殿甬路
pave(-22, 11, -3, 13, P.road); pave(3, 11, 22, 13, P.road);                 // 宝塔/钟楼甬路
pave(6, 22, 8, 30, P.road); pave(-8, 22, -6, 30, P.road);                   // 山门侧门洞
pave(-1, -1, 1, 3, P.road);                                                  // 香炉下

// ---------- 地面生成(草地 + 铺装 + 花草) ----------
for (let x = GX0; x <= GX1; x++)
  for (let z = GZ0; z <= GZ1; z++) {
    const c = groundColor.get(gkey(x, z));
    if (c !== undefined) { emit(voxels, x, 0, z, c, 0.06); continue; }
    emit(voxels, x, 0, z, P.grass, 0.14);
    if (inBuild(x, z)) continue;
    const r = hash3(x, 7, z);
    if (r < 0.03) emit(voxels, x, 1, z, P.grassDark, 0.15);                    // 草丛
    else if (r < 0.045) {                                                       // 野花
      const fc = [0xe74c3c, 0xf1c40f, 0xffffff, 0xbb6bd9][Math.floor(r * 8000) % 4];
      emit(voxels, x, 1, z, fc);
    }
  }

// ---------- 远景: 云与山峦 ----------
cloud(-46, 60, -30); cloud(30, 65, -44); cloud(58, 62, 14); cloud(-16, 68, 36);
hill(-112, -48, 56, 7, 24); hill(108, -20, 48, 6, 22);
hill(-70, -102, 64, 9, 20); hill(35, -104, 56, 7, 18);
hill(100, 42, 44, 5, 20); hill(-108, 40, 40, 5, 18);

/* ============================================================
 * 渲 染
 * ============================================================ */
const app = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffc98a);
scene.fog = new THREE.Fog(0xffc98a, 150, 380);

const camera = new THREE.PerspectiveCamera(48, innerWidth / innerHeight, 0.1, 800);
camera.position.set(10, 46, 94);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 3, -4);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;
controls.minDistance = 20;
controls.maxDistance = 170;
controls.maxPolarAngle = Math.PI / 2 - 0.03;
controls.addEventListener('start', () => { controls.autoRotate = false; });

// ---- 灯光: 黄昏暖阳 ----
scene.add(new THREE.HemisphereLight(0xffd9b0, 0x6b5a4a, 0.6));
const sun = new THREE.DirectionalLight(0xffb36b, 1.35);
sun.position.set(-52, 44, 64); // 西南向斜阳: 正面受光, 阴影投向东北
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -95; sun.shadow.camera.right = 95;
sun.shadow.camera.top = 95; sun.shadow.camera.bottom = -95;
sun.shadow.camera.near = 10; sun.shadow.camera.far = 300;
sun.shadow.bias = -0.0006;
scene.add(sun);
const fill = new THREE.DirectionalLight(0x9db4d0, 0.18);
fill.position.set(60, 30, -50);
scene.add(fill);

// 灯笼点光(暖光, 不投影)
const lampPos = [
  [-17, 7, -7], [17, 7, -7],   // 主殿
  [-10, 4, 33], [10, 4, 33],   // 山门
  [-6, 3, 1], [6, 3, 1],       // 石灯笼
];
for (const [x, y, z] of lampPos) {
  const pl = new THREE.PointLight(0xff9a55, 10, 16, 2);
  pl.position.set(x, y, z);
  scene.add(pl);
}

// ---- 体素 -> InstancedMesh ----
function buildMesh(data, material, shadow) {
  const geo = new THREE.BoxGeometry(1, 1, 1);
  const mesh = new THREE.InstancedMesh(geo, material, data.length / 4);
  const m = new THREE.Matrix4(), c = new THREE.Color();
  for (let i = 0, j = 0; i < data.length; i += 4, j++) {
    m.setPosition(data[i], data[i + 1], data[i + 2]);
    mesh.setMatrixAt(j, m);
    mesh.setColorAt(j, c.setHex(data[i + 3]));
  }
  mesh.castShadow = shadow; mesh.receiveShadow = shadow;
  scene.add(mesh);
  return mesh;
}
const mainMesh = buildMesh(voxels, new THREE.MeshLambertMaterial({ color: 0xffffff }), true);
buildMesh(glowVoxels, new THREE.MeshBasicMaterial({ color: 0xffffff }), false);
buildMesh(skyVoxels, new THREE.MeshBasicMaterial({ color: 0xffffff }), false); // 云: 不受光, 保持亮白
buildMesh(hillVoxels, new THREE.MeshBasicMaterial({ color: 0xffffff }), false);

// 地面衬底平面: 衔接体素地面边缘与远山, 避免悬空感
const skirt = new THREE.Mesh(
  new THREE.PlaneGeometry(900, 900),
  new THREE.MeshLambertMaterial({ color: 0x5f9c46 })
);
skirt.rotation.x = -Math.PI / 2;
skirt.position.y = -0.49;
skirt.receiveShadow = true;
scene.add(skirt);

// 落日圆盘
const sunDisc = new THREE.Mesh(
  new THREE.CircleGeometry(16, 28),
  new THREE.MeshBasicMaterial({ color: 0xffe2a8, fog: false })
);
sunDisc.position.set(-148, 62, 180);
scene.add(sunDisc);

// ---- FPS 统计 ----
const fpsEl = document.getElementById('fps');
const voxelCount = voxels.length / 4;
let frames = 0, lastT = performance.now(), fps = 0;

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

window.__dbg = { camera, controls, renderer, scene }; // 调试钩子

function tick() {
  requestAnimationFrame(tick);
  controls.update();
  sunDisc.lookAt(camera.position);
  renderer.render(scene, camera);
  frames++;
  const now = performance.now();
  if (now - lastT >= 1000) {
    fps = frames; frames = 0; lastT = now;
    fpsEl.textContent = `FPS ${fps} · 体素 ${voxelCount.toLocaleString()}`;
  }
}
tick();
