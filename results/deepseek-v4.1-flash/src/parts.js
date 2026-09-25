/**
 * parts.js — 中式建筑构件
 * 台基 / 须弥座 / 踏道 / 御路 / 栏杆 / 墙体 / 门窗 / 廊柱 / 月台
 */

import { C } from './palette.js';
import { mixHex as mix } from './roof.js';

/* ---------- 通用：在某个立面上作画 ---------- */

/**
 * 在固定 z（axis='z'）或固定 x（axis='x'）的立面上逐格着色。
 * u 为该立面的水平坐标（axis='z' 时即 x；axis='x' 时即 z）。
 */
export function paintFacade(b, { axis, at, u0, u1, y0, y1, fn }) {
  for (let u = u0; u <= u1; u++) {
    for (let y = y0; y <= y1; y++) {
      const col = fn(u, y, u - u0, y - y0);
      if (col == null) continue;
      if (axis === 'z') b.set(u, y, at, col);
      else b.set(at, y, u, col);
    }
  }
}

/* ---------- 台基 ---------- */

export function platform(b, o) {
  const {
    cx = 0, cz, hw, hd, h = 4,
    stone = C.stone, band = C.stoneDark, top = C.stoneLite, skirt = 1
  } = o;
  const x0 = cx - hw, x1 = cx + hw - 1;
  const z0 = cz - hd, z1 = cz + hd - 1;
  b.bx(x0, x1, 0, h - 1, z0, z1, stone);
  // 须弥座束腰：由下往上第二层收进一格
  if (h >= 4) {
    b.bx(x0 + skirt, x1 - skirt, h - 2, h - 2, z0 + skirt, z1 - skirt, stone);
    b.ringY(x0, x1, z0, z1, h - 2, band, 1);
    b.ringY(x0, x1, z0, z1, h - 1, top, 2);
    b.ringY(x0, x1, z0, z1, h - 1, band, 1);
  } else {
    b.ringY(x0, x1, z0, z1, h - 1, band, 1);
  }
  return { top: h, x0, x1, z0, z1 };
}

/* ---------- 踏道 + 御路 ---------- */

/**
 * 踏道 + 御路
 *  axis='z'：沿 +z/-z 方向下行，front 为台基前沿 z 索引，hw 为半宽，cz 由 hw 决定宽度
 *  axis='x'：沿 ±x 方向下行，front 为台基前沿 x 索引，hw 为半深（以 cz 为中心）
 */
export function steps(b, o) {
  const {
    axis = 'z', dir = 1, cx = 0, cz, hw, front, n,
    stone = C.stone, royal = 0, royalColor = C.stoneLite, royalDark = C.stoneDark,
    cheek = true
  } = o;

  if (axis === 'z') {
    const x0 = cx - hw, x1 = cx + hw - 1;
    for (let k = 1; k <= n; k++) {
      const z = front + dir * k;
      const topY = n - k;
      b.bx(x0, x1, 0, topY, z, z, stone);
      if (royal > 0) {
        const rx0 = cx - Math.floor(royal / 2), rx1 = rx0 + royal - 1;
        for (let x = rx0; x <= rx1; x++) b.set(x, topY, z, ((x + z) & 1) ? royalColor : royalDark);
      }
      if (cheek) { b.set(x0, topY + 1, z, stone); b.set(x1, topY + 1, z, stone); }
    }
    return;
  }

  const z0 = cz - hw, z1 = cz + hw - 1;
  for (let k = 1; k <= n; k++) {
    const x = front + dir * k;
    const topY = n - k;
    b.bx(x, x, 0, topY, z0, z1, stone);
    if (royal > 0) {
      const rz0 = cz - Math.floor(royal / 2), rz1 = rz0 + royal - 1;
      for (let z = rz0; z <= rz1; z++) b.set(x, topY, z, ((x + z) & 1) ? royalColor : royalDark);
    }
    if (cheek) { b.set(x, topY + 1, z0, stone); b.set(x, topY + 1, z1, stone); }
  }
}

/* ---------- 栏杆 ---------- */

export function railing(b, o) {
  const {
    cx = 0, cz, hw, hd, y, color = C.stoneLite, post = C.stone,
    gap = null, every = 4, steps = 3
  } = o;
  const x0 = cx - hw, x1 = cx + hw - 1;
  const z0 = cz - hd, z1 = cz + hd - 1;

  const put = (x, z, i) => {
    // 正面留踏道口
    if (gap && z >= z1 && x >= gap[0] && x <= gap[1]) return;
    const isPost = every > 0 && i % every === 0;
    b.set(x, y + 1, z, isPost ? post : color);
    b.set(x, y + 2, z, isPost ? post : color);
    b.set(x, y + steps, z, color);
  };

  let i = 0;
  for (let x = x0; x <= x1; x++) put(x, z0, i++);
  for (let z = z0 + 1; z <= z1; z++) put(x1, z, i++);
  for (let x = x1 - 1; x >= x0; x--) put(x, z1, i++);
  for (let z = z1 - 1; z > z0; z--) put(x0, z, i++);
}

/* ---------- 墙体（含墙裙、角柱、门窗） ---------- */

/**
 * 殿堂墙身：四面木/砖墙 + 角柱 + 正面隔扇
 * front: 'z+'(朝 +z) | 'z-'(朝 -z) | 'x+'(朝 +x) | 'x-'(朝 -x)
 */
export function hallWalls(b, o) {
  const {
    cx = 0, cz, hw, hd, y0, y1,
    wall = C.wallRed, base = C.wallRedDark, col = C.woodRed, t = 1,
    front = 'z+', doorW = 4, doors = 1, win = true,
    doorY = 4, sideDoor = true
  } = o;
  const x0 = cx - hw, x1 = cx + hw - 1;
  const z0 = cz - hd, z1 = cz + hd - 1;

  // 墙身（外壳）
  b.shell(x0, x1, y0, y1, z0, z1, wall, t);
  // 墙裙
  for (let y = y0; y < y0 + 1; y++) b.ringY(x0, x1, z0, z1, y, base, 1);
  // 角柱 + 沿墙立柱
  for (const [px, pz] of [[x0, z0], [x1, z0], [x0, z1], [x1, z1]]) {
    b.lineY(y0, y1, px, pz, col);
    b.lineY(y0, y1, px + (px === x0 ? 1 : -1), pz, col);
  }
  const span = (x1 - x0);
  for (let x = x0 + Math.floor(span / 2); x <= x1; x += Math.max(6, Math.floor(span / 4))) {
    b.lineY(y0, y1, x - 1, z0, col);
    b.lineY(y0, y1, x - 1, z1, col);
  }
  for (let z = z0 + 4; z < z1; z += 8) {
    b.lineY(y0, y1, x0, z, col);
    b.lineY(y0, y1, x1, z, col);
  }

  // 正面门窗
  const axis = front === 'x+' || front === 'x-' ? 'x' : 'z';
  const at = front === 'z+' ? z1 : front === 'z-' ? z0 : front === 'x+' ? x1 : x0;
  const u0 = axis === 'z' ? x0 + 1 : z0 + 1;
  const u1 = axis === 'z' ? x1 - 1 : z1 - 1;

  // 门：居中 n 扇
  const totalW = doors * doorW + (doors - 1) * 1;
  const du0 = cx - Math.floor(totalW / 2);
  for (let d = 0; d < doors; d++) {
    const a = du0 + d * (doorW + 1);
    doorPanel(b, { axis, at, u0: a, u1: a + doorW - 1, y0: y0, y1: y0 + doorY, gold: doors === 1 });
  }
  // 窗：门两侧（以中轴镜像成对布置，保证左右对称）
  if (win) {
    const wY0 = y0 + doorY - 2, wY1 = y1 - 1;
    if (wY1 > wY0 + 1) {
      const base = [];
      for (let u = u0 + 2; u + 4 <= du0 - 2; u += 9) base.push(u);
      const starts = base.slice();
      for (const u of base) {
        const m = -u - 5;                       // 关于 x=0 的镜像块索引
        if (m >= u0 + 2 && m + 4 <= u1 - 2) starts.push(m);
      }
      for (const u of starts) {
        windowPanel(b, { axis, at, u0: u, u1: u + 4, y0: wY0, y1: wY1 });
      }
    }
  }
  // 侧面门（配殿朝院内的那面）
  if (sideDoor) {
    const saxis = axis === 'z' ? 'x' : 'z';
    const sat = saxis === 'x' ? x0 : z0;
    const su0 = saxis === 'x' ? z0 + 3 : x0 + 3;
    doorPanel(b, { axis: saxis, at: sat, u0: su0, u1: su0 + 3, y0: y0, y1: y0 + doorY - 2 });
  }
  return { axis, at, u0, u1 };
}

/* ---------- 门 ---------- */

export function doorPanel(b, o) {
  const { axis, at, u0, u1, y0, y1, frame = C.woodDark, leaf = C.woodRed, dark = C.dark, gold = false } = o;
  paintFacade(b, {
    axis, at, u0, u1, y0, y1,
    fn(u, y, i, j) {
      const w = u1 - u0, h = y1 - y0;
      if (i === 0 || i === w || j === 0 || j === h) return frame;
      if (i === Math.floor(w / 2)) return frame;           // 门缝
      if (j === h - 1) return mix(frame, C.tileGold, 0.35); // 门楣
      if (gold && j > 1 && j < h - 1 && (i & 1) === 1 && (j & 1) === 0) return C.ridgeGold; // 门钉
      return (i % 2 === 0) ? leaf : mix(leaf, dark, 0.25);
    }
  });
}

/* ---------- 直棂窗 ---------- */

export function windowPanel(b, o) {
  const { axis, at, u0, u1, y0, y1, frame = C.woodDark, bar = C.wood, glass = C.dark } = o;
  paintFacade(b, {
    axis, at, u0, u1, y0, y1,
    fn(u, y, i, j) {
      const w = u1 - u0, h = y1 - y0;
      if (i === 0 || i === w || j === 0 || j === h) return frame;
      if ((i % 2) === 0) return bar;       // 直棂
      if ((j % 3) === 0) return mix(frame, bar, 0.4);
      return glass;
    }
  });
}

/* ---------- 廊柱（檐柱） ---------- */

export function colonnade(b, o) {
  const {
    axis = 'z', at, from, to, y0, y1, gap = 4, color = C.woodRed,
    out = 1, base = C.stone
  } = o;
  const a = at + out;
  for (let u = from; u <= to; u += gap) {
    for (let y = y0; y <= y1; y++) {
      if (axis === 'z') b.set(u, y, a, color);
      else b.set(a, y, u, color);
    }
    if (axis === 'z') b.set(u, y0 - 1, a, base);
    else b.set(a, y0 - 1, u, base);
  }
  // 柱头额枋
  for (let u = from; u <= to; u++) {
    if (axis === 'z') b.set(u, y1 + 1, a, C.tileGreen);
    else b.set(a, y1 + 1, u, C.tileGreen);
  }
}

/* ---------- 月台（主殿前的平台） ---------- */

export function terrace(b, o) {
  const {
    cx = 0, cz, hw, hd, h = 2, stone = C.stone, top = C.stoneLite,
    band = C.stoneDark, gap = null, rail = true
  } = o;
  const x0 = cx - hw, x1 = cx + hw - 1;
  const z0 = cz - hd, z1 = cz + hd - 1;
  b.bx(x0, x1, 0, h - 1, z0, z1, stone);
  b.ringY(x0, x1, z0, z1, h - 1, top, 2);
  b.ringY(x0, x1, z0, z1, h - 1, band, 1);
  if (rail) railing(b, { cx, cz, hw, hd, y: h - 1, gap, every: 4, steps: 2 });
  return { top: h, x0, x1, z0, z1 };
}

/* ---------- 广场铺装 ---------- */

export function paved(b, o) {
  const { x0, x1, z0, z1, y = -1, base = C.pave, alt = C.paveAlt, scale = 3 } = o;
  for (let x = x0; x <= x1; x++)
    for (let z = z0; z <= z1; z++) {
      const gx = Math.floor((x - x0) / scale), gz = Math.floor((z - z0) / scale);
      b.set(x, y, z, ((gx + gz) & 1) ? base : alt);
    }
}
