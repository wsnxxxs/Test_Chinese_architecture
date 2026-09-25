import { PAL, shade, jitter, mulberry32 } from './palette.js';

/**
 * 中式木构建筑构件库
 * ------------------------------------------------------------
 * 形制说明：
 *   hipRoof    —— 庑殿顶（四面坡，正脊无山花）/ 歇山顶（加山花）
 *   pyramidRoof—— 攒尖顶（四坡收于一点，附宝顶）
 * 坐标约定：x 为面阔方向、z 为进深方向、y 向上；y=0 为室外地坪。
 */

/** 灯笼光晕位置（由主程序生成柔光贴片） */
export const halos = [];

// ============================================================
// 一、石作
// ============================================================

/** 台基：层层内收的须弥座式石台 */
export function podium(world, { x0, x1, z0, z1, steps = 3, y = 0, rng }) {
  const r = rng || Math.random;
  for (let i = 0; i < steps; i++) {
    const base = i === 0 ? PAL.stone : PAL.stoneLight;
    world.fill(x0 + i, y + i, z0 + i, x1 - i, y + i, z1 - i, (x, y2, z) =>
      jitter(base, r, 0.05)
    );
  }
}

/** 踏跺（台阶）：dir=+1 向 +z 延伸，yTop 为台基顶标高 */
export function stairs(world, o) {
  const { x0, x1, z, yTop, steps = 3, dir = 1, base = 0, rng } = o;
  const center = o.center;
  const r = rng || Math.random;
  for (let i = 0; i < steps; i++) {
    const zz = z + dir * i;
    const top = yTop - i;
    if (top - 1 < base) continue;
    world.fill(x0, base, zz, x1, top - 1, zz, jitter(PAL.stoneLight, r, 0.05));
    if (center) {
      world.fill(center.x0, base, zz, center.x1, top - 1, zz, PAL.marble);
    }
  }
}

/**
 * 勾栏（栏杆）：axis='x' 表示沿 x 延伸、fixed 为 z；axis='z' 反之
 */
export function balustrade(world, { axis = 'x', fixed, from, to, y, skip }) {
  const put = (a, yy, c) => {
    if (axis === 'x') world.voxel(a, yy, fixed, c);
    else world.voxel(fixed, yy, a, c);
  };
  for (let a = from; a <= to; a++) {
    if (skip && skip(a)) continue;
    put(a, y, PAL.stoneLight); // 栏板
    put(a, y + 2, PAL.marble); // 扶手
  }
  for (let a = from; a <= to; a += 2) {
    if (skip && skip(a)) continue;
    put(a, y + 1, PAL.marble); // 望柱
  }
  for (let a = from; a <= to; a += 6) {
    if (skip && skip(a)) continue;
    put(a, y + 1, PAL.marble);
    put(a, y + 3, PAL.marble); // 柱头
  }
}

/** 围墙：白石勒脚 + 红墙身 + 琉璃瓦压顶 */
export function wallRun(world, { axis = 'x', fixed, from, to }) {
  const put = (a, y, c) => {
    if (axis === 'x') world.fill(a, y, fixed - 1, a, y, fixed + 1, c);
    else world.fill(fixed - 1, y, a, fixed + 1, y, a, c);
  };
  for (let a = from; a <= to; a++) {
    const band = ((a - from) % 11 === 0); // 每 11 格一段白色角石
    put(a, 0, PAL.stone);
    put(a, 1, band ? PAL.marble : PAL.red);
    put(a, 2, band ? PAL.marble : PAL.red);
    put(a, 3, PAL.tileDark);
    put(a, 4, PAL.tile);
  }
}

// ============================================================
// 二、木构与彩画
// ============================================================

/** 斗拱：柱头之上向外出挑，(dx,dz) 为出挑方向，depth 为跳数 */
export function dougong(world, x, y, z, dx = 0, dz = 1, depth = 2) {
  world.voxel(x, y, z, PAL.goldDark);                                  // 栌斗
  world.voxel(x + dx, y, z + dz, PAL.teal);                            // 第一跳华拱
  world.voxel(x + dx * depth, y, z + dz * depth, PAL.teal);
  world.voxel(x + dx, y + 1, z + dz, PAL.gold);                        // 散斗
  if (depth >= 2) {
    world.voxel(x + dx * 2, y + 1, z + dz * 2, PAL.tealLight);         // 第二跳
    world.voxel(x + dx * depth, y, z + dz * depth, PAL.goldDark);      // 昂嘴
  }
  for (const s of [-1, 1]) {                                           // 泥道拱
    world.voxel(x - dz * s, y, z - dx * s, PAL.redDark);
    world.voxel(x + dz * s, y + 1, z + dx * s, PAL.redDark);
  }
}

/** 额枋：檐下横梁 + 彩画（每隔数格点缀） */
export function architrave(world, { axis = 'x', fixed, from, to, y, step = 4 }) {
  for (let a = from; a <= to; a++) {
    const c = (a - from) % step === 0 ? PAL.teal : PAL.redDark;
    if (axis === 'x') world.voxel(a, y, fixed, c);
    else world.voxel(fixed, y, a, c);
  }
}

/** 悬挂灯笼（y 为灯身中心格） */
export function lantern(world, x, y, z, beam = false) {
  world.voxel(x, y, z, PAL.lantern, 'lantern');
  world.voxel(x, y + 1, z, PAL.lanternCap);
  world.voxel(x, y - 1, z, PAL.goldDark);
  if (beam) world.voxel(x, y + 2, z, PAL.woodDark);
  halos.push({ x: x + 0.5, y: y + 0.5, z: z + 0.5 });
}

/** 灯杆：木杆 + 红灯笼（道路两侧） */
export function lanternPost(world, x, z, y = 0, h = 4) {
  world.fill(x, y, z, x, y + h - 1, z, PAL.woodDark);
  world.fill(x, y + h - 1, z, x, y + h - 1, z, PAL.goldDark);
  lantern(world, x, y + h, z);
  world.voxel(x, y + h + 2, z, PAL.tileDark); // 灯顶
}

// ============================================================
// 三、屋顶
// ============================================================

/** 正脊两端的鸱吻 */
function ridgeEnds(world, a, b, c, d, y, alongX) {
  const col = PAL.tileDark;
  if (alongX) {
    world.voxel(a, y + 1, c, col);
    world.voxel(a - 1, y + 2, c, col);
    world.voxel(a - 2, y + 2, c, PAL.gold);
    world.voxel(b, y + 1, d, col);
    world.voxel(b + 1, y + 2, d, col);
    world.voxel(b + 2, y + 2, d, PAL.gold);
  } else {
    world.voxel(a, y + 1, c, col);
    world.voxel(a, y + 2, c - 1, col);
    world.voxel(a, y + 2, c - 2, PAL.gold);
    world.voxel(b, y + 1, d, col);
    world.voxel(b, y + 2, d + 1, col);
    world.voxel(b, y + 2, d + 2, PAL.gold);
  }
}

/**
 * 庑殿顶 / 歇山顶
 * @param {object} o {x0,x1,z0,z1,y,layers,gable,color,edgeColor,rafter,ridge,cornerUp}
 */
export function hipRoof(world, o) {
  const { x0, x1, z0, z1, y } = o;
  const color = o.color ?? PAL.tile;
  const edgeColor = o.edgeColor ?? PAL.tileLight;
  const maxLayers = Math.min(Math.floor((x1 - x0) / 2), Math.floor((z1 - z0) / 2)) + 1;
  const layers = Math.min(o.layers ?? maxLayers, maxLayers);
  const alongX = x1 - x0 >= z1 - z0; // 正脊走向

  // 逐层内收的瓦面
  for (let i = 0; i < layers; i++) {
    const a = x0 + i, b = x1 - i, c = z0 + i, d = z1 - i;
    if (a > b || c > d) break;
    const col = i === 0 ? edgeColor : shade(color, i % 2 ? 0.055 : -0.055);
    world.fill(a, y + i, c, b, y + i, d, col);
  }

  // 歇山：两端补山花（垂直三角面）
  if (o.gable) {
    for (let i = 1; i < layers; i++) {
      const a = x0 + i, b = x1 - i, c = z0 + i, d = z1 - i;
      const col = shade(color, 0.02);
      if (alongX) {
        world.fill(a, y + i, z0, b, y + i, z0, col);
        world.fill(a, y + i, z1, b, y + i, z1, col);
      } else {
        world.fill(x0, y + i, c, x0, y + i, d, col);
        world.fill(x1, y + i, c, x1, y + i, d, col);
      }
    }
  }

  // 檐下椽子（仰视时看到的暗色望板）
  if (o.rafter !== false) {
    world.fill(x0 + 1, y - 1, z0 + 1, x1 - 1, y - 1, z1 - 1, o.rafterColor ?? PAL.woodDark);
  }

  // 翼角起翘
  if (o.cornerUp !== false) {
    const corners = [
      [x0, z0, -1, -1],
      [x1, z0, 1, -1],
      [x0, z1, -1, 1],
      [x1, z1, 1, 1]
    ];
    for (const [cx, cz, ox, oz] of corners) {
      world.voxel(cx, y + 1, cz, edgeColor);
      world.voxel(cx + ox, y + 1, cz, edgeColor);
      world.voxel(cx + ox, y + 1, cz + oz, edgeColor);
      world.voxel(cx + ox * 2, y + 2, cz + oz, edgeColor);
      world.voxel(cx + ox * 2, y + 2, cz + oz * 2, edgeColor);
      world.voxel(cx + ox * 2, y + 3, cz + oz * 2, PAL.goldDark); // 琉璃翘角
    }
  }

  // 正脊
  let topY = y + layers - 1;
  if (o.ridge !== false) {
    const a = x0 + layers - 1, b = x1 - layers + 1;
    const c = z0 + layers - 1, d = z1 - layers + 1;
    const thin = Math.min(b - a, d - c) <= 2;
    if (thin) {
      world.fill(a, topY, c, b, topY, d, PAL.tileDark);
      ridgeEnds(world, a, b, c, d, topY, alongX);
    } else {
      // 收口未成脊：补一道正脊梁
      world.fill(a, topY + 1, c, b, topY + 1, d, PAL.tileDark);
      topY += 1;
      ridgeEnds(world, a, b, c, d, topY, alongX);
    }
  }
  return topY;
}

/** 攒尖顶：四坡收于一点，顶部加宝顶 */
export function pyramidRoof(world, o) {
  const { x0, x1, z0, z1, y } = o;
  const color = o.color ?? PAL.tile;
  const edgeColor = o.edgeColor ?? PAL.tileLight;
  const layers = Math.min(Math.floor((x1 - x0) / 2), Math.floor((z1 - z0) / 2)) + 1;
  for (let i = 0; i < layers; i++) {
    const a = x0 + i, b = x1 - i, c = z0 + i, d = z1 - i;
    if (a > b || c > d) break;
    world.fill(a, y + i, c, b, y + i, d, i === 0 ? edgeColor : shade(color, i % 2 ? 0.06 : -0.06));
  }
  if (o.rafter !== false) {
    world.fill(x0 + 1, y - 1, z0 + 1, x1 - 1, y - 1, z1 - 1, o.rafterColor ?? PAL.woodDark);
  }
  if (o.cornerUp !== false) {
    const corners = [
      [x0, z0, -1, -1],
      [x1, z0, 1, -1],
      [x0, z1, -1, 1],
      [x1, z1, 1, 1]
    ];
    for (const [cx, cz, ox, oz] of corners) {
      world.voxel(cx, y + 1, cz, edgeColor);
      world.voxel(cx + ox, y + 1, cz, edgeColor);
      world.voxel(cx + ox, y + 1, cz + oz, edgeColor);
      world.voxel(cx + ox * 2, y + 2, cz + oz, edgeColor);
      world.voxel(cx + ox * 2, y + 2, cz + oz * 2, edgeColor);
      world.voxel(cx + ox * 2, y + 3, cz + oz * 2, PAL.goldDark);
    }
  }
  // 宝顶
  const ty = y + layers;
  const a = x0 + layers - 1, b = x1 - layers + 1;
  const c = z0 + layers - 1, d = z1 - layers + 1;
  if (o.finial !== false) {
    const mx = Math.round((a + b) / 2);
    const mz = Math.round((c + d) / 2);
    world.fill(a, ty, c, b, ty, d, PAL.goldDark);
    world.voxel(mx, ty + 1, mz, PAL.gold);
    world.voxel(mx - 1, ty + 1, mz, PAL.gold);
    world.voxel(mx + 1, ty + 1, mz, PAL.gold);
    world.voxel(mx, ty + 1, mz - 1, PAL.gold);
    world.voxel(mx, ty + 1, mz + 1, PAL.gold);
    world.voxel(mx, ty + 2, mz, PAL.goldLight);
  }
  return ty + 1;
}

// ============================================================
// 四、门窗
// ============================================================

/**
 * 隔扇门 / 槛窗
 * axis='z'：墙面位于 z=pos；dir 为朝向（+1 朝 +z）
 * axis='x'：墙面位于 x=pos
 * 门洞需先用 shell 的 skip 挖出。
 */
export function panel(world, o) {
  const { axis, pos, dir, a0, a1, y0, y1, kind = 'window' } = o;
  const put = (a, y, d, c, map) => {
    if (axis === 'z') world.voxel(a, y, pos + dir * d, c, map);
    else world.voxel(pos + dir * d, y, a, c, map);
  };

  // 边框
  for (let y = y0; y <= y1 + 1; y++) {
    put(a0 - 1, y, 0, PAL.redDark);
    put(a1 + 1, y, 0, PAL.redDark);
  }
  for (let a = a0 - 1; a <= a1 + 1; a++) {
    put(a, y1 + 1, 0, PAL.redDark);
  }
  if (kind === 'door') {
    // 门簪
    put(Math.round((a0 + a1) / 2), y1 + 1, 0, PAL.gold);
  }

  if (kind === 'door') {
    const bodyTop = y0 + 2;
    // 下部板门（两层层厚，外层点缀门钉）
    for (let a = a0; a <= a1; a++) {
      for (let y = y0; y <= bodyTop; y++) {
        put(a, y, -1, PAL.wood);
        put(a, y, 0, a === Math.round((a0 + a1) / 2) ? PAL.woodDark : PAL.wood);
      }
    }
    for (let a = a0; a <= a1; a += 2) {
      for (let y = y0 + 1; y <= bodyTop - 1; y++) put(a, y, 0, PAL.gold);
    }
    // 上部格心：棂条 + 窗纸
    for (let a = a0; a <= a1; a++) {
      for (let y = bodyTop + 1; y <= y1; y++) {
        const bar = (a - a0) % 2 === 0 || (y - bodyTop) % 2 === 1;
        if (bar) put(a, y, 0, PAL.wood);
        else put(a, y, -1, PAL.window, 'window');
      }
    }
    // 门槛
    const mx = (a0 + a1 + 1) / 2;
    if (axis === 'z') world.box(mx, y0 - 0.5, pos - dir * 0.3, a1 - a0 + 1, 1, 1.8, PAL.stoneLight);
    else world.box(pos - dir * 0.3, y0 - 0.5, mx, 1.8, 1, a1 - a0 + 1, PAL.stoneLight);
  } else {
    // 槛窗：满格窗棂 + 窗纸
    for (let a = a0; a <= a1; a++) {
      for (let y = y0; y <= y1; y++) {
        const bar = (a - a0) % 2 === 0 || (y - y0) % 2 === 1;
        if (bar) put(a, y, 0, PAL.wood);
        else put(a, y, -1, PAL.window, 'window');
      }
    }
  }
}

// ============================================================
// 五、小品
// ============================================================

/** 石狮（须弥座 + 蹲狮），dir=+1 朝 +z */
export function stoneLion(world, x, z, dir = 1, rng) {
  const r = rng || Math.random;
  const c = (base) => jitter(base, r, 0.07);
  world.fill(x - 2, 0, z - 1, x + 2, 1, z + 1, c(PAL.stone));
  world.fill(x - 1, 2, z - 1, x + 1, 2, z + 1, c(PAL.stoneLight));
  world.fill(x - 1, 3, z - 1, x + 1, 4, z + 1, c(PAL.marble));
  world.fill(x - 1, 5, z, x + 1, 5, z + dir, c(PAL.marble));
  world.fill(x - 1, 6, z + dir, x + 1, 6, z + dir, c(PAL.stoneLight));
  world.voxel(x - 1, 6, z, c(PAL.stoneLight));
  world.voxel(x + 1, 6, z, c(PAL.stoneLight));
  world.voxel(x, 7, z + dir, c(PAL.marble));
  world.voxel(x, 3, z - dir, c(PAL.stoneLight));
  world.voxel(x - 1, 3, z + dir * 2, c(PAL.marble));
  world.voxel(x + 1, 3, z + dir * 2, c(PAL.marble));
}

/** 铜香炉 */
export function censer(world, x, z) {
  world.fill(x - 2, 0, z - 2, x + 2, 0, z + 2, PAL.stoneLight);
  world.fill(x - 2, 1, z - 2, x + 2, 3, z + 2, PAL.bronze);
  world.fill(x - 2, 4, z - 2, x + 2, 4, z + 2, PAL.bronzeDark);
  world.fill(x - 1, 5, z - 1, x + 1, 5, z + 1, PAL.goldDark);
  world.voxel(x, 5, z, PAL.ember, 'lantern');
  world.voxel(x - 3, 3, z, PAL.bronzeDark); // 耳
  world.voxel(x + 3, 3, z, PAL.bronzeDark);
}

/** 华表：门前石柱（高度收敛，避免低角度阳光下投出过长的条形阴影） */
export function huabiao(world, x, z) {
  world.fill(x, 0, z, x, 1, z, PAL.stoneLight);
  world.fill(x, 2, z, x, 8, z, PAL.marble);
  world.voxel(x - 1, 5, z, PAL.marble);
  world.voxel(x + 1, 5, z, PAL.marble);
  world.voxel(x, 5, z - 1, PAL.marble);
  world.voxel(x, 5, z + 1, PAL.marble);
  world.fill(x - 1, 9, z - 1, x + 1, 10, z + 1, PAL.stoneLight); // 犼
  world.voxel(x, 11, z, PAL.goldDark);
}

/** 太湖石 */
export function rock(world, x, z, rng) {
  const r = rng || Math.random;
  world.box(x, 0.45, z, 2.2, 0.9, 1.9, jitter(PAL.stone, r, 0.08));
  world.box(x + 0.3, 1.1, z - 0.2, 1.3, 0.9, 1.2, jitter(PAL.stoneLight, r, 0.08));
}

/** 花坛 */
export function flowerBed(world, x0, z0, x1, z1, rng) {
  const r = rng || Math.random;
  const cx = (x0 + x1 + 1) / 2;
  const cz = (z0 + z1 + 1) / 2;
  const w = Math.abs(x1 - x0) + 1;
  const d = Math.abs(z1 - z0) + 1;
  world.box(cx, 0.18, cz, w, 0.36, d, PAL.stoneLight);
  world.box(cx, 0.42, cz, w - 0.8, 0.3, d - 0.8, PAL.earth);
  const cols = [PAL.flowerPink, PAL.flowerWhite, PAL.flowerGold];
  for (let x = x0; x <= x1; x++) {
    for (let z = z0; z <= z1; z++) {
      if ((x + z) % 2 !== 0) continue;
      world.box(x + 0.5, 0.68, z + 0.5, 0.55, 0.5, 0.55, cols[Math.floor(r() * 3)]);
    }
  }
}

/** 古树：阔叶 / 松 / 灌丛。s 为个体大小系数，冠形由随机冠块堆叠而成 */
export function tree(world, x, z, rng, kind = 'broad', s = 1) {
  const r = rng || Math.random;
  const k = s * (0.66 + r() * 0.78);
  const px = x + (r() - 0.5) * 1.8;
  const pz = z + (r() - 0.5) * 1.8;
  const tones = [PAL.leaf, PAL.leafDark, PAL.leafLight, PAL.leaf];

  if (kind === 'pine') {
    const th = (2.2 + r() * 1.6) * k;
    world.box(px, th / 2, pz, 0.8 * k, th, 0.8 * k, PAL.trunk);
    const tiers = 3 + Math.floor(r() * 2);
    for (let i = 0; i < tiers; i++) {
      const w = (3.6 - i * 0.72) * k * (0.85 + r() * 0.3);
      world.box(px + (r() - 0.5) * 0.8 * k, th + 0.7 * k + i * 1.0 * k, pz + (r() - 0.5) * 0.8 * k,
        w, 1.1 * k, w * (0.85 + r() * 0.3), jitter(tones[i % tones.length], r, 0.08));
    }
  } else if (kind === 'shrub') {
    const n = 3 + Math.floor(r() * 2);
    for (let i = 0; i < n; i++) {
      const w = (1.4 + r() * 1.4) * k;
      world.box(px + (r() - 0.5) * 1.6 * k, (0.5 + r() * 0.9) * k, pz + (r() - 0.5) * 1.6 * k,
        w, (0.9 + r() * 0.8) * k, w * (0.85 + r() * 0.3), jitter(tones[i % tones.length], r, 0.1));
    }
  } else {
    const th = (2.4 + r() * 1.8) * k;
    world.box(px, th / 2, pz, 0.9 * k, th, 0.9 * k, PAL.trunk);
    const n = 4 + Math.floor(r() * 3);
    for (let i = 0; i < n; i++) {
      const a = r() * Math.PI * 2;
      const rad = (0.2 + r() * 1.0) * k;
      const w = (1.4 + r() * 1.9) * k;
      world.box(px + Math.cos(a) * rad, th + (0.5 + r() * 1.9) * k, pz + Math.sin(a) * rad,
        w, (1.2 + r() * 1.1) * k, w * (0.8 + r() * 0.4), jitter(tones[i % tones.length], r, 0.09));
    }
  }
}

// ============================================================
// 六、建筑主体
// ============================================================

/**
 * 主殿 —— 重檐庑殿顶、面阔七间、须弥座台基、列柱与斗拱
 * 坐北朝南（+z 为南，正面朝南）
 */
export function mainHall(world, cx = 0, cz = -32) {
  const rng = mulberry32(20260923);
  const hw = 18, hd = 6;
  const fx0 = cx - hw, fx1 = cx + hw;
  const fz0 = cz - hd, fz1 = cz + hd;
  const y0 = 3;
  const wallTop = 11;
  const doorXs = [-12, -8, -4, 0, 4, 8, 12];

  // ---- 台基与踏跺 ----
  podium(world, { x0: fx0 - 4, x1: fx1 + 4, z0: fz0 - 4, z1: fz1 + 4, steps: 3, rng });
  stairs(world, {
    x0: cx - 8, x1: cx + 8, z: fz1 + 5, yTop: 3, steps: 3, dir: 1,
    center: { x0: cx - 2, x1: cx + 2 }, rng
  });
  // 勾栏（正面留出踏跺位置）
  balustrade(world, { axis: 'x', fixed: fz1 + 3, from: fx0 - 3, to: cx - 9, y: 3 });
  balustrade(world, { axis: 'x', fixed: fz1 + 3, from: cx + 9, to: fx1 + 3, y: 3 });
  balustrade(world, { axis: 'x', fixed: fz0 - 3, from: fx0 - 3, to: fx1 + 3, y: 3 });
  balustrade(world, { axis: 'z', fixed: fx0 - 3, from: fz0 - 3, to: fz1 + 3, y: 3 });
  balustrade(world, { axis: 'z', fixed: fx1 + 3, from: fz0 - 3, to: fz1 + 3, y: 3 });

  // ---- 墙身（挖出门窗洞口）----
  const skip = (x, y, z) => {
    if (z === fz1 && y >= y0 && y <= y0 + 6) {
      for (const dx of doorXs) if (Math.abs(x - dx) <= 1) return true;
    }
    if (z === fz0) {
      if (Math.abs(x - cx) <= 2 && y >= y0 && y <= y0 + 6) return true;
      if ((Math.abs(x - (cx - 10)) <= 1 || Math.abs(x - (cx + 10)) <= 1) && y >= 5 && y <= 8) return true;
    }
    if ((x === fx0 || x === fx1) && y >= 5 && y <= 8) {
      for (const dz of [-4, 0, 4]) if (Math.abs(z - (cz + dz)) <= 1) return true;
    }
    return false;
  };
  world.shell(fx0, y0, fz0, fx1, wallTop, fz1, (x, y, z) => {
    if (y === wallTop) return PAL.tealDark;
    if (y === y0 + 1) return PAL.tealDark;
    return (x - fx0) % 4 === 0 ? PAL.redDark : PAL.red;
  }, { skip });
  world.fill(fx0, y0, fz0, fx1, y0, fz1, (x, y, z) =>
    x === fx0 || x === fx1 || z === fz0 || z === fz1 ? PAL.stone : PAL.red
  );

  // ---- 隔扇门与槛窗 ----
  for (const dx of doorXs) {
    panel(world, { axis: 'z', pos: fz1, dir: 1, a0: dx - 1, a1: dx + 1, y0, y1: y0 + 6, kind: 'door' });
  }
  panel(world, { axis: 'z', pos: fz0, dir: -1, a0: cx - 2, a1: cx + 2, y0, y1: y0 + 6, kind: 'door' });
  for (const dx of [cx - 10, cx + 10]) {
    panel(world, { axis: 'z', pos: fz0, dir: -1, a0: dx - 1, a1: dx + 1, y0: 5, y1: 8, kind: 'window' });
  }
  for (const dz of [-4, 0, 4]) {
    for (const fx of [fx0, fx1]) {
      panel(world, {
        axis: 'x', pos: fx, dir: fx === fx0 ? -1 : 1,
        a0: cz + dz - 1, a1: cz + dz + 1, y0: 5, y1: 8, kind: 'window'
      });
    }
  }

  // ---- 檐柱与斗拱 ----
  for (let x = fx0; x <= fx1; x += 2) {
    world.voxel(x, y0, fz1 + 1, PAL.stoneLight);              // 柱础
    world.fill(x, y0 + 1, fz1 + 1, x, wallTop - 1, fz1 + 1, PAL.red);
    world.voxel(x, wallTop - 1, fz1 + 1, PAL.goldDark);        // 柱头箍
  }
  architrave(world, { axis: 'x', fixed: fz1 + 1, from: fx0, to: fx1, y: wallTop, step: 4 });
  for (let x = fx0 + 1; x <= fx1 - 1; x += 2) dougong(world, x, wallTop + 1, fz1 + 1, 0, 1);

  // ---- 下檐（庑殿顶）----
  hipRoof(world, {
    x0: fx0 - 5, x1: fx1 + 5, z0: fz0 - 3, z1: fz1 + 5,
    y: wallTop + 4, layers: 10, rafterColor: PAL.woodDark
  });

  // ---- 上层楼身 ----
  const ux0 = cx - 13, ux1 = cx + 13, uz0 = cz - 2, uz1 = cz + 4;
  const uy0 = wallTop + 14; // 25：坐落在下檐正脊之上
  world.shell(ux0, uy0, uz0, ux1, uy0 + 3, uz1, PAL.red);
  for (const dx of [-9, -3, 3, 9]) {
    panel(world, { axis: 'z', pos: uz1, dir: 1, a0: cx + dx - 1, a1: cx + dx + 1, y0: uy0, y1: uy0 + 2, kind: 'window' });
  }
  architrave(world, { axis: 'x', fixed: uz1 + 2, from: ux0, to: ux1, y: uy0 + 3, step: 3 });

  // ---- 上檐 ----
  hipRoof(world, {
    x0: cx - 19, x1: cx + 19, z0: cz - 4, z1: cz + 6,
    y: uy0 + 4, layers: 5, rafterColor: PAL.woodDark
  });

  // ---- 檐下逐间灯笼（落在斗拱之间的柱头上，不遮挡斗栱）----
  for (let x = fx0; x <= fx1; x += 2) {
    lantern(world, x, 12, fz1 + 4, true);
  }
}

/**
 * 配殿 —— 歇山顶、单檐，面阔五间，朝向中轴
 * dir=-1 表示殿门朝 -x（东配殿），dir=+1 反之
 */
export function sideHall(world, cx, cz, dir, rng) {
  const hw = 4;
  const hl = 11;
  const f = cx + dir * hw;
  const back = cx - dir * hw;
  const z0 = cz - hl, z1 = cz + hl;
  const y0 = 1;

  podium(world, { x0: Math.min(f, back) - 1, x1: Math.max(f, back) + 1, z0: z0 - 1, z1: z1 + 1, steps: 1, rng });

  const doorZ = [cz - 6, cz, cz + 6];
  const skip = (x, y, z) => {
    if (x === f && y >= y0 && y <= y0 + 5) {
      for (const dz of doorZ) if (Math.abs(z - dz) <= 1) return true;
    }
    if ((z === z0 || z === z1) && y >= 3 && y <= 5) {
      for (const dx of [-2, 2]) if (Math.abs(x - (cx + dx)) <= 1) return true;
    }
    return false;
  };
  world.shell(Math.min(f, back), y0, z0, Math.max(f, back), 6, z1, (x, y, z) => {
    if (y === 6) return PAL.tealDark;
    if (y === y0 + 1) return PAL.tealDark;
    return (z - z0) % 4 === 0 ? PAL.redDark : PAL.red;
  }, { skip });
  world.fill(Math.min(f, back), y0, z0, Math.max(f, back), y0, z1, (x, y, z) =>
    x === f || x === back || z === z0 || z === z1 ? PAL.stone : PAL.red
  );

  for (const dz of doorZ) {
    panel(world, { axis: 'x', pos: f, dir, a0: dz - 1, a1: dz + 1, y0, y1: y0 + 4, kind: 'door' });
  }
  for (const dzz of [z0, z1]) {
    for (const dx of [-2, 2]) {
      panel(world, {
        axis: 'z', pos: dzz, dir: dzz === z0 ? -1 : 1,
        a0: cx + dx - 1, a1: cx + dx + 1, y0: 3, y1: 5, kind: 'window'
      });
    }
  }

  // 檐柱
  for (let z = z0; z <= z1; z += 2) {
    world.voxel(f + dir, y0, z, PAL.stoneLight);
    world.fill(f + dir, y0 + 1, z, f + dir, 4, z, PAL.red);
    world.voxel(f + dir, 5, z, PAL.redDark);
  }
  architrave(world, { axis: 'z', fixed: f + dir, from: z0, to: z1, y: 6, step: 4 });
  for (let z = z0 + 1; z <= z1 - 1; z += 2) dougong(world, f + dir, 7, z, dir, 0);

  // 歇山屋顶（正脊沿 z）
  hipRoof(world, {
    x0: Math.min(f, back) - 4, x1: Math.max(f, back) + 4, z0: z0 - 2, z1: z1 + 2,
    y: 9, gable: true, rafterColor: PAL.woodDark
  });

  // 檐下逐间灯笼（避开斗拱位置）
  for (let z = z0 + 2; z <= z1 - 2; z += 4) {
    lantern(world, f + dir * 2, 6, z, true);
  }
}

/** 钟楼 / 鼓楼：两层楼阁，下层敞厅置钟鼓，上层攒尖顶 */
export function bellDrumTower(world, cx, cz, kind = 'bell', rng) {
  podium(world, { x0: cx - 5, x1: cx + 5, z0: cz - 5, z1: cz + 5, steps: 2, rng });
  const y0 = 2;

  const posts = [];
  for (const dx of [-4, 0, 4]) for (const dz of [-4, 4]) posts.push([cx + dx, cz + dz]);
  for (const dx of [-4, 4]) posts.push([cx + dx, cz]);
  for (const [px, pz] of posts) {
    world.voxel(px, y0, pz, PAL.stoneLight);
    world.fill(px, y0 + 1, pz, px, 5, pz, PAL.red);
  }
  // 钟或鼓
  if (kind === 'bell') {
    world.fill(cx - 1, 3, cz - 1, cx + 1, 4, cz + 1, PAL.bronze);
    world.voxel(cx, 5, cz, PAL.goldDark);
  } else {
    world.fill(cx - 1, 3, cz - 1, cx + 1, 4, cz + 1, PAL.redLight);
    for (const dx of [-1, 1]) for (const dz of [-1, 1]) world.voxel(cx + dx, 3, cz + dz, PAL.gold);
  }
  architrave(world, { axis: 'x', fixed: cz - 4, from: cx - 4, to: cx + 4, y: 6, step: 3 });
  architrave(world, { axis: 'x', fixed: cz + 4, from: cx - 4, to: cx + 4, y: 6, step: 3 });
  architrave(world, { axis: 'z', fixed: cx - 4, from: cz - 4, to: cz + 4, y: 6, step: 3 });
  architrave(world, { axis: 'z', fixed: cx + 4, from: cz - 4, to: cz + 4, y: 6, step: 3 });
  for (const [px, pz] of posts) dougong(world, px, 7, pz, px < cx ? -1 : 1, pz < cz ? -1 : 1, 1);

  // 腰檐
  pyramidRoof(world, { x0: cx - 4, x1: cx + 4, z0: cz - 4, z1: cz + 4, y: 9, finial: false });

  // 上层
  const uy0 = 14;
  const uSkip = (x, y, z) => {
    if (y >= uy0 && y <= uy0 + 2) {
      if ((x === cx - 3 || x === cx + 3) && Math.abs(z - cz) <= 1) return true;
      if ((z === cz - 3 || z === cz + 3) && Math.abs(x - cx) <= 1) return true;
    }
    return false;
  };
  world.shell(cx - 3, uy0, cz - 3, cx + 3, uy0 + 2, cz + 3, PAL.red, { skip: uSkip });
  for (const [ax, az, dirx, dirz, a0, a1] of [
    [cx - 3, cz, -1, 0, cz - 1, cz + 1],
    [cx + 3, cz, 1, 0, cz - 1, cz + 1],
    [cx, cz - 3, 0, -1, cx - 1, cx + 1],
    [cx, cz + 3, 0, 1, cx - 1, cx + 1]
  ]) {
    panel(world, {
      axis: dirx !== 0 ? 'x' : 'z', pos: dirx !== 0 ? ax : az,
      dir: dirx !== 0 ? dirx : dirz, a0, a1, y0: uy0, y1: uy0 + 1, kind: 'window'
    });
  }
  // 上檐与宝顶
  pyramidRoof(world, { x0: cx - 4, x1: cx + 4, z0: cz - 4, z1: cz + 4, y: 17 });

  lantern(world, cx, 6, cz + 5, true);
}

/** 山门：城台门洞 + 城楼，位居中轴南端 */
export function mountainGate(world, cx = 0, cz = 38, rng) {
  podium(world, { x0: cx - 10, x1: cx + 10, z0: cz - 5, z1: cz + 5, steps: 2, rng });
  const y0 = 2;
  const fx0 = cx - 8, fx1 = cx + 8, fz0 = cz - 4, fz1 = cz + 4;
  const wallTop = 8;

  const arch = (x, y) => {
    if (y < y0 || y > 7) return false;
    if (Math.abs(x - cx) <= 2) return y <= 6 || Math.abs(x - cx) <= 1;
    if (Math.abs(Math.abs(x - cx) - 6) <= 1) return y <= 4 || Math.abs(Math.abs(x - cx) - 6) <= 0;
    return false;
  };
  const skip = (x, y, z) => {
    if ((z === fz0 || z === fz1) && arch(x, y)) return true;
    if ((x === fx0 || x === fx1) && y >= 4 && y <= 7 && Math.abs(z - cz) <= 1) return true;
    return false;
  };
  world.shell(fx0, y0, fz0, fx1, wallTop, fz1, (x, y, z) => {
    if (y === wallTop) return PAL.tealDark;
    if (y === y0 + 1) return PAL.tealDark;
    return (x - fx0) % 4 === 0 ? PAL.redDark : PAL.red;
  }, { skip });
  world.fill(fx0, y0, fz0, fx1, y0, fz1, (x, y, z) =>
    x === fx0 || x === fx1 || z === fz0 || z === fz1 ? PAL.stone : PAL.red
  );

  // 门扇与门钉
  for (const zz of [fz0, fz1]) {
    const dir = zz === fz1 ? 1 : -1;
    for (let x = cx - 2; x <= cx - 1; x++) {
      for (let y = y0; y <= 6; y++) {
        world.voxel(x, y, zz, PAL.wood);
        if (y >= y0 + 1 && y <= 5 && (y - y0) % 2 === 0) world.voxel(x, y, zz + dir, PAL.gold);
      }
    }
    for (let x = cx + 1; x <= cx + 2; x++) {
      for (let y = y0; y <= 6; y++) {
        world.voxel(x, y, zz, PAL.wood);
        if (y >= y0 + 1 && y <= 5 && (y - y0) % 2 === 0) world.voxel(x, y, zz + dir, PAL.gold);
      }
    }
    world.voxel(cx, y0, zz, PAL.woodDark);
    for (const dx of [-6, 6]) {
      panel(world, { axis: 'z', pos: zz, dir, a0: cx + dx - 1, a1: cx + dx, y0, y1: 4, kind: 'window' });
    }
  }
  for (const fx of [fx0, fx1]) {
    panel(world, { axis: 'x', pos: fx, dir: fx === fx0 ? -1 : 1, a0: cz - 1, a1: cz + 1, y0: 4, y1: 7, kind: 'window' });
  }

  // 城楼
  const uy0 = 18;
  const ux0 = cx - 6, ux1 = cx + 6, uz0 = cz - 3, uz1 = cz + 3;
  world.shell(ux0, uy0, uz0, ux1, uy0 + 3, uz1, PAL.red);
  for (const dx of [-4, 0, 4]) {
    panel(world, { axis: 'z', pos: uz1, dir: 1, a0: cx + dx - 1, a1: cx + dx + 1, y0: uy0, y1: uy0 + 3, kind: 'window' });
    panel(world, { axis: 'z', pos: uz0, dir: -1, a0: cx + dx - 1, a1: cx + dx + 1, y0: uy0, y1: uy0 + 3, kind: 'window' });
  }
  for (const dz of [-2, 2]) {
    panel(world, { axis: 'x', pos: ux0, dir: -1, a0: cz + dz - 1, a1: cz + dz, y0: uy0, y1: uy0 + 3, kind: 'window' });
    panel(world, { axis: 'x', pos: ux1, dir: 1, a0: cz + dz - 1, a1: cz + dz, y0: uy0, y1: uy0 + 3, kind: 'window' });
  }
  // 挑台勾栏
  balustrade(world, { axis: 'x', fixed: uz1 + 2, from: ux0 - 2, to: ux1 + 2, y: uy0 - 1 });
  world.fill(ux0 - 2, uy0 - 1, uz1 + 1, ux1 + 2, uy0 - 1, uz1 + 2, PAL.stoneLight);

  // 下檐（庑殿）
  hipRoof(world, { x0: cx - 12, x1: cx + 12, z0: cz - 7, z1: cz + 7, y: 10, layers: 7, rafterColor: PAL.woodDark });
  // 上檐
  hipRoof(world, { x0: cx - 9, x1: cx + 9, z0: cz - 5, z1: cz + 5, y: uy0 + 4, layers: 5, rafterColor: PAL.woodDark });

  // 门楼檐口与楼身檐下灯笼
  for (let x = cx - 8; x <= cx + 8; x += 4) lantern(world, x, 8, fz1 + 3, true);
  for (const dx of [-4, 0, 4]) lantern(world, cx + dx, 20, uz1 + 1, true);
}

/** 宝塔：十层八角攒尖、逐层收分、上置塔刹（主殿之后的制高天际线） */
export function pagoda(world, cx = 0, cz = -54, rng) {
  podium(world, { x0: cx - 8, x1: cx + 8, z0: cz - 6, z1: cz + 6, steps: 2, rng });
  world.fill(cx - 6, 2, cz - 5, cx + 6, 2, cz + 5, PAL.stoneLight);
  world.shell(cx - 6, 3, cz - 5, cx + 6, 5, cz + 5, PAL.red);
  panel(world, { axis: 'z', pos: cz + 5, dir: 1, a0: cx - 1, a1: cx + 1, y0: 3, y1: 5, kind: 'door' });

  const halves = [6, 6, 5, 5, 4, 4, 4, 3, 3, 2];
  let y = 6;
  halves.forEach((h, i) => {
    const x0 = cx - h, x1 = cx + h, z0 = cz - h, z1 = cz + h;
    world.fill(x0, y, z0, x1, y, z1, PAL.stoneLight);
    world.shell(x0, y + 1, z0, x1, y + 1, z1, PAL.red);
    panel(world, { axis: 'z', pos: z1, dir: 1, a0: cx - 1, a1: cx + 1, y0: y + 1, y1: y + 1, kind: 'window' });
    panel(world, { axis: 'z', pos: z0, dir: -1, a0: cx - 1, a1: cx + 1, y0: y + 1, y1: y + 1, kind: 'window' });
    panel(world, { axis: 'x', pos: x1, dir: 1, a0: cz - 1, a1: cz + 1, y0: y + 1, y1: y + 1, kind: 'window' });
    panel(world, { axis: 'x', pos: x0, dir: -1, a0: cz - 1, a1: cz + 1, y0: y + 1, y1: y + 1, kind: 'window' });
    const e = h + 1;
    world.fill(cx - e, y + 2, cz - e, cx + e, y + 2, cz + e, PAL.tileLight);
    world.fill(cx - h, y + 3, cz - h, cx + h, y + 3, cz + h, PAL.tile);
    for (const [ox, oz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      world.voxel(cx + ox * e, y + 3, cz + oz * e, PAL.tileLight);
      world.voxel(cx + ox * (e + 1), y + 4, cz + oz * e, PAL.tileLight);
    }
    y += 4;
  });

  // 塔刹
  world.fill(cx - 1, y, cz - 1, cx + 1, y, cz + 1, PAL.goldDark);
  world.voxel(cx, y + 1, cz, PAL.gold);
  world.voxel(cx - 1, y + 1, cz, PAL.gold);
  world.voxel(cx + 1, y + 1, cz, PAL.gold);
  world.voxel(cx, y + 1, cz - 1, PAL.gold);
  world.voxel(cx, y + 1, cz + 1, PAL.gold);
  world.fill(cx, y + 2, cz, cx, y + 3, cz, PAL.goldLight);
  world.voxel(cx, y + 4, cz, PAL.gold);
}

/** 角楼：城墙四角的小型楼阁 */
export function cornerTower(world, cx, cz, rng) {
  podium(world, { x0: cx - 4, x1: cx + 4, z0: cz - 4, z1: cz + 4, steps: 1, rng });
  const y0 = 1;
  const skip = (x, y, z) => y >= y0 && y <= 4 && Math.abs(x - cx) <= 1 && Math.abs(z - cz) <= 1;
  world.shell(cx - 3, y0, cz - 3, cx + 3, y0 + 3, cz + 3, PAL.red, { skip });
  panel(world, { axis: 'z', pos: cz + 3, dir: 1, a0: cx - 1, a1: cx + 1, y0, y1: y0 + 2, kind: 'door' });
  pyramidRoof(world, { x0: cx - 4, x1: cx + 4, z0: cz - 4, z1: cz + 4, y: 5, finial: false });

  const uy0 = 10;
  world.shell(cx - 2, uy0, cz - 2, cx + 2, uy0 + 2, cz + 2, PAL.red);
  for (const [axis, pos, dir, a0, a1] of [
    ['z', cz + 2, 1, cx - 1, cx + 1],
    ['x', cx + 2, 1, cz - 1, cz + 1]
  ]) {
    panel(world, { axis, pos, dir, a0, a1, y0: uy0, y1: uy0 + 1, kind: 'window' });
  }
  pyramidRoof(world, { x0: cx - 3, x1: cx + 3, z0: cz - 3, z1: cz + 3, y: 13 });
}

/** 廊庑：连接主殿与配殿的连廊 */
export function corridor(world, cx, z0, z1) {
  const hw = 2;
  const y0 = 0, colTop = 3;
  world.fill(cx - hw, y0 + 1, z0, cx - hw, y0 + 2, z1, PAL.red);
  world.fill(cx + hw, y0 + 1, z0, cx + hw, y0 + 2, z1, PAL.red);
  for (let z = z0; z <= z1; z += 3) {
    world.voxel(cx - hw, y0, z, PAL.stoneLight);
    world.voxel(cx + hw, y0, z, PAL.stoneLight);
    world.fill(cx - hw, y0 + 1, z, cx - hw, colTop, z, PAL.red);
    world.fill(cx + hw, y0 + 1, z, cx + hw, colTop, z, PAL.red);
  }
  architrave(world, { axis: 'z', fixed: cx - hw, from: z0, to: z1, y: colTop + 1, step: 3 });
  architrave(world, { axis: 'z', fixed: cx + hw, from: z0, to: z1, y: colTop + 1, step: 3 });
  hipRoof(world, { x0: cx - 4, x1: cx + 4, z0: z0 - 2, z1: z1 + 2, y: 6, rafterColor: PAL.woodDark });
}
