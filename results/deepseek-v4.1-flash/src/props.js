/**
 * props.js — 小品构件：灯笼、石狮、树木、香炉、幡杆
 */

import { C } from './palette.js';
import { mixHex } from './roof.js';

/* ---------- 灯笼（灯体走自发光网格） ---------- */

export function hangLantern(b, o) {
  const {
    x, y, z,            // y 为悬挂点（檐下横梁高度）
    cord = 2,
    body = C.lantern,
    glow = C.lanternLite,
    cap = C.tileGold,
    tassel = true
  } = o;

  const yb = y - cord - 3;   // 灯体底部

  // 吊绳
  for (let i = 0; i < cord; i++) b.set(x, y - i, z, C.woodDark);
  // 挂钩
  b.set(x, y + 1, z, C.tileGold);

  // 灯体：3×3×3，削去上下八角
  b.glowBox(x - 1, x + 1, yb + 1, yb + 3, z - 1, z + 1, glow);
  for (const dx of [-1, 1]) {
    for (const dz of [-1, 1]) {
      b.del(x + dx, yb + 1, z + dz);
      b.del(x + dx, yb + 3, z + dz);
    }
  }
  // 上下金盖
  b.plateY(x - 1, x + 1, z - 1, z + 1, yb, cap);
  b.plateY(x - 1, x + 1, z - 1, z + 1, yb + 4, cap);
  b.set(x, yb + 5, z, C.woodDark);
  // 流苏
  if (tassel) {
    b.set(x, yb - 1, z, C.lantern);
    b.set(x, yb - 2, z, mixHex(C.lantern, 0x000000, 0.3));
  }
}

/* ---------- 灯杆 ---------- */

export function postLantern(b, o) {
  const { x, z, h = 7, y = 0, pole = C.woodDark } = o;
  b.lineY(y, y + h, x, z, pole);
  b.set(x, y + h + 1, z, pole);
  b.set(x + 1, y + h + 1, z, pole);
  hangLantern(b, { x, y: y + h, z, cord: 1 });
}

/* ---------- 石狮 ---------- */

export function stoneLion(b, o) {
  const { x, z, y = 0, face = 1, c = C.stone, cd = C.stoneDark } = o;
  const f = face;
  // 须弥座
  b.bx(x - 1, x + 1, y, y + 1, z - 1, z + 1, cd);
  b.bx(x - 1, x + 1, y + 2, y + 2, z - 1, z + 1, c);
  // 身 + 前腿
  b.bx(x - 1, x + 1, y + 3, y + 3, z - 1, z + 1, c);
  b.set(x - 1, y + 3, z + f, c);
  b.set(x + 1, y + 3, z + f, c);
  b.bx(x - 1, x + 1, y + 4, y + 4, z - f, z + f, c);
  // 头 + 鬃
  b.bx(x - 1, x + 1, y + 5, y + 5, z - f, z + f, cd);
  b.set(x, y + 5, z + f * 2, c);
  // 尾
  b.set(x - 1, y + 4, z - f * 2, c);
}

/* ---------- 香炉 ---------- */

export function censer(b, o) {
  const { x, z, y = 0, c = C.bronze, cd = mixHex(C.bronze, 0x000000, 0.35) } = o;
  b.bx(x - 1, x + 1, y, y + 1, z - 1, z + 1, cd);
  for (const dx of [-1, 1]) for (const dz of [-1, 1]) b.set(x + dx, y + 1, z + dz, c);
  b.bx(x - 1, x + 1, y + 2, y + 3, z - 1, z + 1, c);
  b.plateY(x - 1, x + 1, z - 1, z + 1, y + 4, cd);
  // 双耳
  b.set(x - 2, y + 3, z, c);
  b.set(x + 2, y + 3, z, c);
  // 塔形盖
  b.set(x, y + 5, z, C.ridgeGold);
  b.set(x, y + 6, z, C.ridgeGold);
}

/* ---------- 树 ---------- */

export function tree(b, o) {
  const { x, z, y = 0, h = 6, r = 3, seedIn = 0 } = o;
  b.lineY(y, y + h, x, z, C.trunk);
  b.set(x, y + h, z + 1, C.trunk);
  const cy = y + h + Math.max(1, Math.floor(r * 0.6));
  for (let dx = -r; dx <= r; dx++) {
    for (let dy = -r; dy <= r; dy++) {
      for (let dz = -r; dz <= r; dz++) {
        const d2 = dx * dx + dy * dy * 1.45 + dz * dz;
        if (d2 > r * r + 0.6) continue;
        const hsh = (dx * 73856093 + dy * 19349663 + dz * 83492791 + seedIn * 2654435761) >>> 0;
        const v = (hsh % 1000) / 1000;
        const col = v < 0.28 ? C.leafLite : v < 0.62 ? C.leaf : C.leafDark;
        b.set(x + dx, cy + dy, z + dz, col);
      }
    }
  }
}

/* ---------- 幡杆 ---------- */

export function banner(b, o) {
  const { x, z, y = 0, h = 22, pole = C.woodRed } = o;
  b.lineY(y, y + h, x, z, pole);
  b.set(x, y + h, z, C.tileGold);
  // 幡
  for (let i = 1; i <= 8; i++) {
    const col = i < 5 ? C.lantern : mixHex(C.lantern, 0x000000, 0.25);
    b.lineY(y + h - i, y + h - i, x + 1, z, col);
  }
}
