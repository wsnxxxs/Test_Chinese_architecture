/**
 * 中式古典建筑构件库（体素化）
 *
 * 坐标约定：X 向东，Z 向南，建筑「正面」朝 +Z（即面向南方）。
 * 所有构件都写进同一张 VoxelCanvas，最终合并为单个网格。
 */
import { P } from '../core/palette.js';

// ======================================================================
//  基础工具
// ======================================================================

/** 只填长方体四周厚 t 的边框（省掉实心内部） */
export function ringBox(b, x0, y0, z0, x1, y1, z1, t, color) {
  const ax = Math.min(x0, x1), bx = Math.max(x0, x1);
  const ay = Math.min(y0, y1), by = Math.max(y0, y1);
  const az = Math.min(z0, z1), bz = Math.max(z0, z1);
  b.box(ax, ay, az, bx, ay + t - 1, bz, color);
  b.box(ax, ay, bz - t + 1, bx, by, bz, color);
  b.box(ax, ay, az + t, bx, by, az + t - 1, color);
  b.box(bx - t + 1, ay, az + t, bx, by, bz - t, color);
}

// ======================================================================
//  台基 / 台阶
// ======================================================================

/**
 * 须弥座式台基：下枋 + 身部 + 台面 + 踏跺 + 垂带 + 栏杆
 * 空心壳实现：台面 1 层 + 四周 2 厚墙体，比实心省 ~85% 体素。
 */
export function stonePlatform(b, o) {
  const { cx, cz, hw, hd } = o;
  const base = o.base ?? 0;
  const h = o.h ?? 6;
  const top = base + h;
  const stone = o.stone ?? P.marble;
  const shade = o.shade ?? P.marbleShade;
  const steps = o.steps ?? 0;
  const stepHalf = o.stepHalf ?? 9;
  const rail = o.rail ?? false;

  ringBox(b, cx - hw - 2, base, cz - hd - 2, cx + hw + 2, base + 1, cz + hd + 2, 2, shade);
  ringBox(b, cx - hw, base + 2, cz - hd, cx + hw, top - 2, cz + hd, 2, stone);
  b.box(cx - hw - 1, top - 1, cz - hd - 1, cx + hw + 1, top - 1, cz + hd + 1, stone);
  b.box(cx - hw - 1, top - 1, cz - hd - 1, cx + hw + 1, top - 1, cz - hd - 1, P.stoneLight);
  for (let x = cx - hw + 2; x <= cx + hw - 2; x += 4) {
    b.set(x, top - 3, cz + hd, shade);
    b.set(x, top - 3, cz - hd, shade);
  }

  for (let s = 0; s < steps; s++) {
    const y = top - 1 - s;
    const z0 = cz + hd + 1 + s;
    b.box(cx - stepHalf, y, z0, cx + stepHalf, y, z0, stone);
    b.set(cx - stepHalf - 1, y, z0, shade);
    b.set(cx + stepHalf + 1, y, z0, shade);
  }

  if (o.approach) {
    for (let s = 0; s < steps; s++) {
      const y = top - 1 - s;
      const z0 = cz + hd + 1 + s;
      b.box(cx - 4, y, z0, cx + 4, y, z0, s % 2 === 0 ? P.stoneLight : P.marble);
    }
  }

  if (rail) {
    const rTop = top + 3;
    const edges = [
      [cx - hw, cz - hd, cx - hw, cz + hd],
      [cx + hw, cz - hd, cx + hw, cz + hd],
      [cx - hw, cz - hd, cx + hw, cz - hd],
      [cx - hw, cz + hd, cx + hw, cz + hd],
    ];
    for (const [ax, az, bx2, bz2] of edges) {
      const len = Math.abs(bx2 - ax) + Math.abs(bz2 - az);
      const sx = Math.sign(bx2 - ax);
      const sz = Math.sign(bz2 - az);
      for (let i = 0; i <= len; i++) {
        const x = ax + sx * i;
        const z = az + sz * i;
        b.box(x, top, z, x, top + 1, z, shade);
        if (i % 2 === 0) b.set(x, rTop, z, stone);
      }
      for (let i = 0; i <= len; i += 6) {
        const x = ax + sx * i;
        const z = az + sz * i;
        b.pillar(x, z, top, rTop + 1, stone);
        b.set(x, rTop + 2, z, P.stoneLight);
      }
    }
  }
  return top;
}

// ======================================================================
//  柱网
// ======================================================================

/** 柱础 */
export function columnBase(b, x, z, y, h = 2) {
  b.box(x - 1, y, z - 1, x + 1, y + h - 1, z + 1, P.marbleShade);
  b.box(x - 1, y, z - 1, x + 1, y, z + 1, P.marble);
}

/** 沿 X 排一列八角柱 */
export function columnRowX(b, { from, to, z, y0, h, step = 6, color = P.woodRed, base = true }) {
  for (let p = from; p <= to; p += step) {
    if (base) columnBase(b, p, z, y0 - 2);
    b.pillar(p, z, y0, y0 + h, color);
  }
  return y0 + h;
}

/** 沿 Z 排一列八角柱 */
export function columnRowZ(b, { from, to, x, y0, h, step = 6, color = P.woodRed, base = true }) {
  for (let p = from; p <= to; p += step) {
    if (base) columnBase(b, x, p, y0 - 2);
    b.pillar(x, p, y0, y0 + h, color);
  }
  return y0 + h;
}

// ======================================================================
//  立面（墙体 + 门窗）
// ======================================================================

/**
 * 沿 X 方向的面（z 固定，dir=+1 为朝南外侧）
 * bays: [{type:'solid'|'door'|'window'|'open', width, height, lift}]
 */
export function facadeX(b, o) {
  const { x0, x1, z, y0, y1 } = o;
  const wall = o.wall ?? P.wallRed;
  const frame = o.frame ?? P.woodDark;
  const paper = o.paper ?? P.paper;
  const lattice = o.lattice ?? P.lattice;

  b.box(x0, y0, z, x1, y1, z, wall);

  let x = x0;
  for (const bay of o.bays) {
    const w = bay.width;
    if (bay.type === 'door') {
      const dh = bay.height ?? (y1 - y0 - 2);
      b.box(x, y0, z, x + w, y0 + dh, z, frame);
      b.box(x, y0 + dh, z, x + w, y1, z, wall);
      b.box(x - 1, y0, z, x - 1, y0 + dh + 1, z, P.woodRedDark);
      b.box(x + w + 1, y0, z, x + w + 1, y0 + dh + 1, z, P.woodRedDark);
      b.box(x - 1, y0 + dh + 1, z, x + w + 1, y0 + dh + 1, z, P.woodRedDark);
      for (let mx = x + 2; mx < x + w - 1; mx += 3) b.box(mx, y0 + 1, z, mx, y0 + dh - 1, z, lattice);
      for (let my = y0 + 3; my < y0 + dh - 1; my += 3) b.box(x + 1, my, z, x + w - 1, my, z, lattice);
      for (let dx = x + 2; dx <= x + w - 2; dx += 3) {
        for (let dy = y0 + 2; dy <= y0 + dh - 2; dy += 3) b.set(dx, dy, z, P.gold);
      }
      b.box(x - 1, y0, z, x + w + 1, y0, z, P.marbleShade);
    } else if (bay.type === 'window') {
      const wh = bay.height ?? 5;
      const wy = y0 + (bay.lift ?? 3);
      b.box(x, wy, z, x + w, wy + wh, z, frame);
      b.box(x + 1, wy + 1, z, x + w - 1, wy + wh - 1, z, paper);
      for (let mx = x + 2; mx < x + w - 1; mx += 2) b.box(mx, wy + 1, z, mx, wy + wh - 1, z, lattice);
      for (let my = wy + 2; my < wy + wh - 1; my += 2) b.box(x + 1, my, z, x + w - 1, my, z, lattice);
    } else if (bay.type === 'open') {
      b.carve(x, y0, z, x + w, y1, z);
    }
    x += w;
  }
}

/** 沿 Z 方向的面（x 固定） */
export function facadeZ(b, o) {
  const { z0, z1, x, y0, y1 } = o;
  const wall = o.wall ?? P.wallRed;
  const frame = o.frame ?? P.woodDark;
  const paper = o.paper ?? P.paper;
  const lattice = o.lattice ?? P.lattice;

  b.box(x, y0, z0, x, y1, z1, wall);

  let z = z0;
  for (const bay of o.bays) {
    const w = bay.width;
    if (bay.type === 'window') {
      const wh = bay.height ?? 5;
      const wy = y0 + (bay.lift ?? 3);
      b.box(x, wy, z, x, wy + wh, z + w, frame);
      b.box(x, wy + 1, z + 1, x, wy + wh - 1, z + w - 1, paper);
      for (let mz = z + 2; mz < z + w - 1; mz += 2) b.box(x, wy + 1, mz, x, wy + wh - 1, mz, lattice);
      for (let my = wy + 2; my < wy + wh - 1; my += 2) b.box(x, my, z + 1, x, my, z + w - 1, lattice);
    } else if (bay.type === 'door') {
      const dh = bay.height ?? (y1 - y0 - 2);
      b.box(x, y0, z, x, y0 + dh, z + w, frame);
      b.box(x, y0 + dh, z, x, y1, z + w, wall);
      for (let mz = z + 2; mz < z + w - 1; mz += 3) b.box(x, y0 + 1, mz, x, y0 + dh - 1, mz, lattice);
    } else if (bay.type === 'open') {
      b.carve(x, y0, z, x, y1, z + w);
    }
    z += w;
  }
}

/** 背立面（朝北）：暗色墙 + 少量直棂窗 */
export function backWall(b, o) {
  const { x0, x1, z, y0, y1 } = o;
  b.box(x0, y0, z, x1, y1, z, P.wallRedDark);
  for (let x = x0 + 5; x < x1 - 3; x += 11) {
    b.box(x, y0 + 4, z, x + 4, y0 + 9, z, P.lattice);
    b.box(x, y0 + 4, z, x + 4, y0 + 9, z, P.paperDim);
    for (let mx = x + 1; mx < x + 4; mx += 2) b.box(mx, y0 + 4, z, mx, y0 + 9, z, P.lattice);
  }
}

/** 拱券门洞（山门用） */
export function archOpening(b, o) {
  const { x0, x1, z0, z1, y0, height } = o;
  b.carve(x0, y0, z0, x1, y0 + height, z1);
  const r = Math.floor((x1 - x0) / 2);
  const cx = Math.floor((x0 + x1) / 2);
  for (let i = 0; i <= r; i++) {
    const yy = y0 + height + i;
    const inset = r - Math.round(Math.sqrt(Math.max(0, r * r - i * i)));
    b.carve(cx - inset, yy, z0, cx + inset, yy, z1);
  }
}

// ======================================================================
//  斗拱
// ======================================================================

/**
 * 一排斗拱（檐下），高 5 层：栌斗 / 华拱 / 泥道拱 / 散斗
 * axis='x'：沿 X 排列、向 +Z 挑出；axis='z' 反之。
 */
export function dougong(b, o) {
  const { axis, at, dir, y, from, to, spacing = 5 } = o;
  const wood = o.wood ?? P.woodRed;
  const dark = o.dark ?? P.woodRedDark;
  const gold = o.gold ?? P.gold;

  const put = (p, ax0, ay0, az0, ax1, ay1, az1, col) => {
    if (axis === 'x') b.box(p + ax0, y + ay0, at + az0, p + ax1, y + ay1, at + az1, col);
    else b.box(at + az0, y + ay0, p + ax0, at + az1, y + ay1, p + ax1, col);
  };

  for (let p = from; p <= to; p += spacing) {
    put(p, -1, 0, 0, 1, 1, dir, wood);                 // 栌斗
    put(p, -1, 0, dir + 1, 1, 1, dir + 1, wood);
    put(p, -2, 2, dir, 2, 2, dir, dark);                // 华拱（挑出）
    put(p, -2, 2, dir, -2, 2, dir, gold);
    put(p, 2, 2, dir, 2, 2, dir, gold);
    put(p, -1, 3, 0, 1, 3, dir, wood);                  // 泥道拱
    put(p, 0, 4, dir, 0, 4, dir, gold);                 // 散斗
  }
}

// ======================================================================
//  屋顶形制
// ======================================================================

/**
 * 庑殿顶（正脊东西向四坡）/ 歇山顶（gableAt <= rise 时上部收山成山花）
 * 逐层同心环：只填 rect(k) \ rect(k+1)，得到台阶状瓦面且极省体素；
 * 檐下另铺一层「平闇」顶板，低视角不穿帮。
 */
export function roofHip(b, o) {
  const { cx, cz, y } = o;
  const hw = o.hw;
  const hd = o.hd;
  const slopeX = o.slopeX ?? 1.0;
  const slopeZ = o.slopeZ ?? 1.45;
  const rise = o.rise ?? Math.max(4, Math.round(Math.min(hw, hd) * 0.62));
  const gableAt = o.gableAt ?? rise + 1;
  const tile = o.tile ?? P.glazeGold;
  const tileLight = o.tileLight ?? P.glazeGoldLight;
  const tileDark = o.tileDark ?? P.glazeGoldDark;
  const ridge = o.ridge ?? tileDark;
  const gableColor = o.gableColor ?? P.glazeGreen;
  const ceiling = o.ceiling ?? tileDark;

  b.box(cx - hw, y - 1, cz - hd, cx + hw, y - 1, cz + hd, ceiling);

  const halfAt = (k) => (k >= gableAt
    ? hw - Math.round((gableAt - 1) * slopeX) - 1
    : hw - Math.round(k * slopeX));
  const halfAtZ = (k) => hd - Math.round(k * slopeZ);

  let lastW = 0;
  let lastD = 0;

  for (let k = 0; k <= rise; k++) {
    const w = halfAt(k);
    const d = halfAtZ(k);
    if (w < 0 || d < 0) break;
    const nw = k === rise ? -1 : halfAt(k + 1);
    const nd = k === rise ? -1 : halfAtZ(k + 1);
    for (let x = -w; x <= w; x++) {
      for (let z = -d; z <= d; z++) {
        if (nw >= 0 && Math.abs(x) <= nw && Math.abs(z) <= nd) continue;
        const onX = Math.abs(x) === w;
        const onZ = Math.abs(z) === d;
        let c;
        if (onX && onZ) c = ridge;
        else if (onZ) c = Math.abs(x) % 3 === 0 ? tileLight : tile;
        else c = Math.abs(z) % 3 === 0 ? tileLight : tile;
        if (k === 0 && (onX || onZ)) c = tileLight;
        b.set(cx + x, y + k, cz + z, c);
      }
    }
    lastW = w; lastD = d;
  }

  // 歇山山花（两山面竖向三角）
  if (gableAt <= rise) {
    for (let k = gableAt; k <= rise; k++) {
      const d = halfAtZ(k);
      for (let yy = gableAt; yy <= k; yy++) {
        for (let z = -d; z <= d; z++) {
          b.set(cx + lastW, y + yy, cz + z, gableColor);
          b.set(cx - lastW, y + yy, cz + z, gableColor);
        }
      }
    }
  }

  const ry = y + rise + 1;
  if (o.ridgeBeam !== false) {
    const half = Math.max(0, lastW);
    const rc = o.ridgeColor ?? P.glazeGoldDark;
    for (let x = -half; x <= half; x++) b.box(cx + x, ry, cz - 1, cx + x, ry, cz + 1, rc);
    const orn = o.ornament ?? P.glazeGoldLight;
    for (const s of [-1, 1]) {
      for (let i = 0; i < 3; i++) {
        b.set(cx + s * (half + i), ry + i, cz, orn);
        if (i < 2) b.set(cx + s * (half + i), ry + i, cz - 1, orn);
      }
      b.set(cx + s * (half + 2), ry + 3, cz, P.gold);
    }
  }

  if (o.flying !== false) {
    flyingCorners(b, {
      cx, cz, hw, hd, y, steps: o.flyingSteps ?? 4, tile, tileLight,
      ornament: o.ornament ?? P.gold,
    });
  }

  return { rise, lastW, lastD, topY: ry + 3 };
}

/** 攒尖顶（四坡收于一点）+ 宝顶 */
export function roofPyramid(b, o) {
  const { cx, cz, y, hw, hd } = o;
  const rise = o.rise ?? Math.max(3, Math.min(hw, hd));
  const tile = o.tile ?? P.tile;
  const tileLight = o.tileLight ?? P.tileLight;
  const ridge = o.ridge ?? P.tileDark;
  const finial = o.finial ?? P.gold;

  b.box(cx - hw, y - 1, cz - hd, cx + hw, y - 1, cz + hd, P.tileDeep);

  for (let k = 0; k <= rise; k++) {
    const w = hw - k;
    const d = hd - k;
    if (w < 0 || d < 0) break;
    const nw = w - 1;
    const nd = d - 1;
    for (let x = -w; x <= w; x++) {
      for (let z = -d; z <= d; z++) {
        if (k < rise && Math.abs(x) <= nw && Math.abs(z) <= nd) continue;
        const onX = Math.abs(x) === w;
        const onZ = Math.abs(z) === d;
        let c;
        if (onX && onZ) c = ridge;
        else if (onZ) c = Math.abs(x) % 3 === 0 ? tileLight : tile;
        else c = Math.abs(z) % 3 === 0 ? tileLight : tile;
        if (k === 0 && (onX || onZ)) c = tileLight;
        b.set(cx + x, y + k, cz + z, c);
      }
    }
  }

  let f = y + rise + 1;
  b.box(cx - 1, f, cz - 1, cx + 1, f + 2, cz + 1, finial);
  f += 3;
  b.box(cx, f, cz, cx, f + 2, cz, finial);
  f += 3;
  b.set(cx, f, cz, P.goldDeep);
  b.set(cx, f + 1, cz, finial);
  if (o.flying !== false) {
    flyingCorners(b, { cx, cz, hw, hd, y, steps: o.flyingSteps ?? 3, tile, tileLight, ornament: P.gold });
  }
  return f + 2;
}

/** 悬山/硬山（廊庑用，脊沿 X） */
export function roofGable(b, o) {
  const { cx, cz, y, hw, hd } = o;
  const rise = o.rise ?? Math.max(3, Math.round(hd * 0.9));
  const slope = o.slope ?? 1.4;
  const tile = o.tile ?? P.tile;
  const tileLight = o.tileLight ?? P.tileLight;
  const ridge = o.ridge ?? P.tileDark;

  b.box(cx - hw, y - 1, cz - hd, cx + hw, y - 1, cz + hd, P.tileDeep);

  for (let k = 0; k <= rise; k++) {
    const d = hd - Math.round(k * slope);
    if (d < 0) break;
    for (let x = -hw; x <= hw; x++) {
      for (const s of [-1, 1]) {
        b.set(cx + x, y + k, cz + s * d, k === 0 || Math.abs(x) % 3 === 0 ? tileLight : tile);
        if (k > 0 && d > 0) b.set(cx + x, y + k, cz + s * (d - 1), Math.abs(x) % 3 === 0 ? tileLight : tile);
      }
    }
  }
  const topY = y + rise + 1;
  for (let k = 0; k <= rise; k++) {
    const d = Math.max(0, hd - Math.round(k * slope));
    for (let yy = 0; yy <= k; yy++) {
      for (let z = -d; z <= d; z++) {
        b.set(cx + hw, y + yy, cz + z, ridge);
        b.set(cx - hw, y + yy, cz + z, ridge);
      }
    }
  }
  for (let z = -1; z <= 1; z++) b.box(cx - hw, topY, cz + z, cx + hw, topY, cz + z, ridge);
  if (o.flying !== false) {
    flyingCorners(b, { cx, cz, hw, hd, y, steps: 3, tile, tileLight, ornament: P.gold });
  }
  return topY;
}

/** 飞檐翘角：檐角加厚 + 向外上方挑出的阶梯 + 套兽 */
export function flyingCorners(b, o) {
  const { cx, cz, hw, hd, y, steps = 4 } = o;
  const tile = o.tile ?? P.tile;
  const tileLight = o.tileLight ?? P.tileLight;
  const ornament = o.ornament ?? P.gold;

  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      for (const ax of [hw - 1, hw]) {
        for (const az of [hd - 1, hd]) {
          for (const yy of [y, y + 1]) b.set(cx + sx * ax, yy, cz + sz * az, tileLight);
        }
      }
      for (let s = 1; s <= steps; s++) {
        const hx = hw + s;
        const hz = hd + s;
        const yy = y + s;
        b.set(cx + sx * hx, yy, cz + sz * hz, tileLight);
        b.set(cx + sx * (hx - 1), yy, cz + sz * hz, tile);
        b.set(cx + sx * hx, yy, cz + sz * (hz - 1), tile);
        b.set(cx + sx * (hx - 1), yy + 1, cz + sz * (hz - 1), tile);
        if (s === steps) {
          b.set(cx + sx * hx, yy + 1, cz + sz * hz, ornament);
          b.set(cx + sx * (hx - 1), yy + 1, cz + sz * hz, ornament);
        }
      }
    }
  }
}

// ======================================================================
//  装饰构件
// ======================================================================

/** 匾额 */
export function plaque(b, o) {
  const { x0, x1, y, z, height = 4 } = o;
  b.box(x0 - 1, y - 1, z, x1 + 1, y + height + 1, z, P.woodDark);
  b.box(x0, y, z + 1, x1, y + height, z + 1, P.goldDeep);
  b.box(x0 + 1, y + 1, z + 1, x1 - 1, y + height - 1, z + 1, P.lattice);
  for (const x of [x0 + 2, x1 - 2]) b.set(x, y + Math.floor(height / 2), z + 1, P.gold);
}

/** 灯笼：b 写外形，g 写发光芯 */
export function lantern(b, g, x, y, z, scale = 1) {
  const r = scale;
  b.set(x, y + 3 * r, z, P.lanternCap);
  b.set(x, y - r, z, P.lanternCap);
  for (let dy = 0; dy < 3; dy++) {
    for (let dx = -r; dx <= r; dx++) {
      for (let dz = -r; dz <= r; dz++) {
        if (r > 0 && Math.abs(dx) === r && Math.abs(dz) === r) continue;
        b.set(x + dx, y + dy * r, z + dz, P.lantern);
        if (g) g.set(x + dx, y + dy * r, z + dz, P.lantern);
      }
    }
  }
  b.set(x, y - 2 * r, z, P.goldDeep);
}

/** 石狮 */
export function stoneLion(b, x, y, z, facing = 1) {
  const st = P.stoneLight;
  const sd = P.stone;
  b.box(x - 3, y, z - 3, x + 3, y, z + 3, sd);
  b.box(x - 2, y + 1, z - 2, x + 2, y + 2, z + 2, st);
  b.set(x + facing * 3, y + 3, z, st);
  b.set(x + facing * 2, y + 3, z - 1, st);
  b.set(x + facing * 2, y + 3, z + 1, st);
  b.box(x - 2, y + 3, z - 1, x + 2, y + 6, z + 1, st);
  b.box(x - 1, y + 7, z - 1, x + 1, y + 8, z + 1, st);
  b.set(x - 1, y + 9, z, st);
  b.set(x + 1, y + 9, z, st);
  for (let a = -1; a <= 1; a++) b.set(x + a * 2, y + 7, z, sd);
  b.set(x - facing * 2, y + 6, z, sd);
  b.set(x - facing * 2, y + 5, z, sd);
}

/** 华表柱 */
export function huabiao(b, x, y, z, h = 16) {
  b.box(x - 1, y, z - 1, x + 1, y, z + 1, P.marble);
  b.pillar(x, z, y + 1, y + h, P.marble);
  b.box(x - 2, y + h - 4, z - 2, x + 2, y + h - 3, z + 2, P.marble);
  b.set(x, y + h - 2, z, P.stoneLight);
  b.set(x, y + h - 1, z, P.stoneLight);
  b.box(x - 2, y + h - 1, z - 1, x + 2, y + h - 1, z + 1, P.stone);
}

/** 松树 */
export function pine(b, x, y, z, h = 14) {
  const trunkH = Math.round(h * 0.42);
  b.pillar(x, z, y, y + trunkH, P.trunk, false);
  const layers = 4;
  for (let i = 0; i < layers; i++) {
    const yy = y + trunkH - 2 + Math.round((h * 0.55 * i) / layers);
    const r = Math.max(1, Math.round((h * 0.3 * (layers - i)) / layers) + 1);
    for (let dx = -r; dx <= r; dx++) {
      for (let dz = -r; dz <= r; dz++) {
        if (Math.abs(dx) + Math.abs(dz) > r + 1) continue;
        b.set(x + dx, yy, z + dz, (dx + dz) % 2 === 0 ? P.pine : P.pineLight);
      }
    }
  }
  b.set(x, y + trunkH + Math.round(h * 0.6), z, P.pine);
}

/** 阔叶树 */
export function broadleaf(b, x, y, z, h = 13) {
  const trunkH = Math.round(h * 0.45);
  b.pillar(x, z, y, y + trunkH, P.trunk, false);
  const r = Math.max(2, Math.round(h * 0.28));
  for (let dy = 0; dy <= r + 2; dy++) {
    const rr = Math.max(1, r - Math.abs(dy - (r + 2) / 2) * 0.9);
    for (let dx = -Math.ceil(rr); dx <= Math.ceil(rr); dx++) {
      for (let dz = -Math.ceil(rr); dz <= Math.ceil(rr); dz++) {
        if (dx * dx + dz * dz > rr * rr + rr) continue;
        if (dy === r + 2 && dx * dx + dz * dz > 1) continue;
        const t = (dx + dz + dy) % 3;
        b.set(x + dx, y + trunkH - 1 + dy, z + dz, t === 0 ? P.leafLight : (t === 1 ? P.leaf : P.leafDark));
      }
    }
  }
}

/** 石碑 */
export function stele(b, x, y, z, h = 12) {
  b.box(x - 3, y, z - 2, x + 3, y + 1, z + 2, P.stone);
  b.box(x - 2, y + 2, z - 1, x + 2, y + 2, z + 1, P.stone);
  b.box(x - 1, y + 3, z, x + 1, y + h, z, P.stoneLight);
  b.set(x, y + h + 1, z, P.stoneLight);
  b.box(x - 1, y + h + 1, z, x + 1, y + h + 2, z, P.stone);
}

/** 铜香炉 */
export function censer(b, x, y, z) {
  b.box(x - 2, y, z - 2, x + 2, y, z + 2, P.stoneDark);
  b.box(x - 1, y + 1, z - 1, x + 1, y + 2, z + 1, P.bell);
  b.set(x, y + 3, z, P.goldDeep);
  b.set(x, y + 4, z, P.gold);
  b.set(x - 2, y + 2, z, P.goldDeep);
  b.set(x + 2, y + 2, z, P.goldDeep);
}
