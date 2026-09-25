import { P } from './palette.js';

// ============ 通用构件 ============

// 斗拱带:墙顶一周出挑,棋盘式红白相间,四角加大块
function dougongBand(w, x0, z0, x1, z1, y) {
  for (let x = x0; x <= x1; x++) {
    for (const z of [z0, z1]) {
      const corner = (x <= x0 + 1 || x >= x1 - 1) && (z <= z0 + 1 || z >= z1 - 1);
      w.set(x, y, z, corner ? P.redPillar : (x + z) % 2 === 0 ? P.woodDark : P.wood);
    }
  }
  for (let z = z0 + 1; z <= z1 - 1; z++) {
    for (const x of [x0, x1]) {
      const corner = z <= z0 + 1 || z >= z1 - 1;
      w.set(x, y, z, corner ? P.redPillar : (x + z) % 2 === 0 ? P.woodDark : P.wood);
    }
  }
}

// 飞檐翘角:檐角挑起的小尖,从角部向外上方盘旋
function eaveTips(w, cx, cz, y, hw, hd) {
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const x = cx + sx * hw;
      const z = cz + sz * hd;
      w.set(x, y + 1, z, P.tileSlateHi); // 角部加厚(起翘起点)
      w.set(x + sx, y + 1, z, P.tileSlateHi);
      w.set(x + sx, y + 1, z + sz, P.tileSlateHi);
      w.set(x + sx, y + 2, z + sz, P.tileSlateHi); // 尖端上挑
    }
  }
}

// 戗角挑檐(彩色的,用于黄瓦/绿瓦屋顶)
function eaveTipsC(w, cx, cz, y, hw, hd, trim) {
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const x = cx + sx * hw;
      const z = cz + sz * hd;
      w.set(x, y + 1, z, trim);
      w.set(x + sx, y + 1, z, trim);
      w.set(x + sx, y + 1, z + sz, trim);
      w.set(x + sx, y + 2, z + sz, trim);
    }
  }
}

/**
 * 庑殿顶/歇山顶(水平逐层收分,正脊两端带鸱吻)
 * ridgeHW: 正脊半长; barge: 是否在两端山面刷搏风板(歇山)
 */
function hipRoof(w, cx, cz, y0, hw, hd, color, ridgeHW, { trim, barge = false } = {}) {
  let a = hw,
    b = hd,
    y = y0;
  while (true) {
    w.box(cx - a, y, cz - b, cx + a, y, cz + b, color);
    if (a <= ridgeHW && b <= 0) break;
    a = Math.max(a - 1, ridgeHW);
    b = Math.max(b - 1, 0);
    y++;
  }
  // 正脊 + 两端鸱吻(向上外卷)
  w.box(cx - a, y + 1, cz, cx + a, y + 1, cz, trim ?? P.tileSlateHi);
  for (const sx of [-1, 1]) {
    w.set(cx + sx * (a + 1), y + 1, cz, trim ?? P.tileSlateHi);
    w.set(cx + sx * (a + 1), y + 2, cz, trim ?? P.tileSlateHi);
  }
  if (barge) {
    // 歇山搏风板:顶部两层端面描深色
    w.box(cx - a - 1, y, cz - 1, cx - a - 1, y + 1, cz + 1, trim ?? P.woodDark);
    w.box(cx + a + 1, y, cz - 1, cx + a + 1, y + 1, cz + 1, trim ?? P.woodDark);
  }
}

// 攒尖顶(向中心收拢成尖)+ 宝顶
function pyramidRoof(w, cx, cz, y0, half, color, trim) {
  let h = half,
    y = y0;
  while (h >= 1) {
    w.box(cx - h, y, cz - h, cx + h, y, cz + h, color);
    h--;
    y++;
  }
  w.set(cx, y, cz, color);
  eaveTipsC(w, cx, cz, y0, half, half, trim);
  // 宝顶:座 + 杆 + 珠
  w.box(cx - 1, y + 1, cz - 1, cx + 1, y + 1, cz + 1, trim ?? P.gold);
  w.set(cx, y + 2, cz, P.gold);
  w.set(cx, y + 3, cz, P.gold);
  w.set(cx, y + 4, cz, P.gold);
  return y + 4;
}

// ============ 建筑单体 ============

/** 主殿:重檐庑殿顶(最高形制),白石台基 + 踏步 + 栏杆 */
export function buildMainHall(w) {
  const cx = 0,
    cz = -14;
  // 台基 (27x19, 高3)
  w.box(-13, 1, -24, 13, 3, -6, P.stone);
  w.box(-13, 3, -24, 13, 3, -6, P.stoneHi);
  // 踏步(前出三阶, 宽7)
  for (let s = 0; s < 3; s++) {
    w.box(-3 + cx, 1, -5 + s, 3 + cx, 3 - s, -5 + s, s % 2 ? P.stone : P.stoneHi);
  }
  // 台基栏杆(望柱)
  for (let x = -13; x <= 13; x++) {
    if (x >= -3 && x <= 3) continue; // 踏步口
    w.set(x, 4, -24, P.rail);
    w.set(x, 4, -6, P.rail);
    if (x % 4 === 0 || Math.abs(x) === 13) {
      w.set(x, 5, -24, P.rail);
      w.set(x, 5, -6, P.rail);
    }
  }
  for (let z = -23; z <= -7; z++) {
    w.set(-13, 4, z, P.rail);
    w.set(13, 4, z, P.rail);
    if (z % 4 === 0) {
      w.set(-13, 5, z, P.rail);
      w.set(13, 5, z, P.rail);
    }
  }

  // 下檐屋身 (25x15, 高6): y4..9
  const x0 = -12,
    x1 = 12,
    z0 = -21,
    z1 = -7;
  w.walls(x0, z0, x1, z1, 4, 9, P.redWall);
  // 檐柱(前后面均布)
  for (let x = x0; x <= x1; x += 4) {
    for (let y = 4; y <= 9; y++) {
      w.set(x, y, z1, P.redPillar);
      w.set(x, y, z0, P.redPillar);
    }
  }
  // 明间大门(5宽5高) + 门内暗色
  w.box(-2, 4, z1, 2, 8, z1, 0x241016);
  // 次间窗(2x3 发光)
  for (const wx of [-7, -6, 6, 7]) {
    for (let y = 5; y <= 7; y++) {
      w.carve(wx, y, z1);
      w.setGlow(wx, y, z1, P.window);
    }
  }
  // 匾额(金)
  w.box(-2, 9, z1, 2, 9, z1, P.gold);

  // 下檐(重檐副阶): y10 实心出檐一圈
  w.box(-15, 10, -24, 15, 10, -4, P.tileAmber);
  eaveTipsC(w, 0, -14, 10, 15, 10, P.tileAmberHi);

  // 上层屋身(颈) (17x9, 高3): y11..13
  w.walls(-8, -18, 8, -10, 11, 13, P.redPillar);
  for (let x = -8; x <= 8; x += 4)
    for (let y = 11; y <= 13; y++) {
      w.set(x, y, -10, P.gold); // 颈部金柱装饰? 太花,改木色
    }
  // 修正:颈部用深木色间柱
  for (let x = -8; x <= 8; x += 4)
    for (let y = 11; y <= 13; y++) w.set(x, y, -10, P.woodDark);

  // 上檐斗拱 + 屋顶
  dougongBand(w, -9, -19, 9, -9, 14);
  hipRoof(w, 0, -14, 15, 13, 7, P.tileAmber, 5, { trim: P.tileAmberHi });
}

/** 配殿:单檐歇山(带搏风板),青瓦 */
export function buildSideHall(w, cx, cz) {
  // 台基 (19x15, 高1)
  w.box(cx - 9, 1, cz - 7, cx + 9, 1, cz + 7, P.stone);
  w.box(cx - 9, 1, cz - 7, cx + 9, 1, cz + 7, P.stoneHi);
  // 台基重复set无妨(同色);踏步
  w.box(cx - 2, 1, cz + 8, cx + 2, 1, cz + 8, P.stoneHi);
  // 屋身 (15x11, 高5): y2..6
  const x0 = cx - 7,
    x1 = cx + 7,
    z0 = cz - 5,
    z1 = cz + 5;
  w.walls(x0, z0, x1, z1, 2, 6, P.redWall);
  for (let x = x0; x <= x1; x += 3)
    for (let y = 2; y <= 6; y++) {
      w.set(x, y, z1, P.redPillar);
      w.set(x, y, z0, P.redPillar);
    }
  // 前脸:中间门 + 两侧窗
  w.box(cx - 1, 2, z1, cx + 1, 5, z1, 0x241016);
  for (const wx of [cx - 5, cx - 4, cx + 4, cx + 5]) {
    for (let y = 3; y <= 5; y++) {
      w.carve(wx, y, z1);
      w.setGlow(wx, y, z1, P.window);
    }
  }
  dougongBand(w, cx - 8, cz - 6, cx + 8, cz + 6, 7);
  hipRoof(w, cx, cz, 8, 10, 8, P.tileSlate, 4, { trim: P.tileSlateHi, barge: true });
}

/** 山门:城门式,中开券洞,屋面小庑殿 */
export function buildGate(w) {
  const cz = 30;
  // 门身 (17x7, 高6): x-8..8, z27..33
  w.walls(-8, 27, 8, 33, 1, 6, P.redWall);
  // 券洞(5宽4高) + 洞内暗
  for (let z = 27; z <= 33; z++) {
    for (let x = -2; x <= 2; x++)
      for (let y = 1; y <= 4; y++) w.carve(x, y, z);
    for (let x = -1; x <= 1; x++) w.set(x, 5, z, 0x241016); // 券顶暗色
  }
  // 前脸窗 + 匾额
  for (const wx of [-5, -4, 4, 5]) {
    for (let y = 3; y <= 4; y++) {
      w.carve(wx, y, 33);
      w.setGlow(wx, y, 33, P.window);
    }
  }
  w.box(-2, 6, 33, 2, 6, 33, P.gold);
  dougongBand(w, -9, 26, 9, 34, 7);
  hipRoof(w, 0, cz, 8, 11, 6, P.tileSlate, 6, { trim: P.tileSlateHi });
  // 檐角挂灯笼
  for (const sx of [-1, 1]) {
    w.set(sx * 7, 7, 35, P.lantern);
  }
}

/** 宝塔:七层楼阁式,绿琉璃檐,砖身,塔顶攒尖 + 塔刹 */
export function buildPagoda(w) {
  const cx = 0,
    cz = -38;
  // 基座 (13x13, 高2)
  w.box(cx - 6, 1, cz - 6, cx + 6, 2, cz + 6, P.stone);
  w.box(cx - 6, 2, cz - 6, cx + 6, 2, cz + 6, P.stoneHi);
  // 踏步
  w.box(cx - 1, 1, cz + 7, cx + 1, 2, cz + 7, P.stoneHi);

  const widths = [11, 9, 9, 7, 7, 5, 5];
  let y = 3;
  for (let i = 0; i < widths.length; i++) {
    const hw = (widths[i] - 1) / 2;
    // 塔身(实心,外墙砖色,角柱亮色)
    w.box(cx - hw, y, cz - hw, cx + hw, y + 2, cz + hw, P.pagodaBody);
    for (const sx of [-1, 1])
      for (const sz of [-1, 1])
        for (let yy = y; yy <= y + 2; yy++)
          w.set(cx + sx * hw, yy, cz + sz * hw, P.pagodaBodyHi);
    // 每面一窗(发光)
    for (let yy = y + 1; yy <= Math.min(y + 2, y + 1 + (i % 2)); yy++) {
      w.carve(cx, yy, cz + hw);
      w.setGlow(cx, yy, cz + hw, P.window);
      w.carve(cx, yy, cz - hw);
      w.setGlow(cx, yy, cz - hw, P.window);
      w.carve(cx + hw, yy, cz);
      w.setGlow(cx + hw, yy, cz, P.window);
      w.carve(cx - hw, yy, cz);
      w.setGlow(cx - hw, yy, cz, P.window);
    }
    // 平座檐(出挑2)
    const e = hw + 2;
    w.box(cx - e, y + 3, cz - e, cx + e, y + 3, cz + e, P.tileGreen);
    // 檐角小翘
    for (const sx of [-1, 1])
      for (const sz of [-1, 1]) {
        w.set(cx + sx * (e + 1), y + 4, cz + sz * e, P.tileGreen);
        w.set(cx + sx * e, y + 4, cz + sz * (e + 1), P.tileGreen);
      }
    y += 4;
  }
  // 塔顶攒尖 + 塔刹
  pyramidRoof(w, cx, cz, y, 4, P.tileGreen, P.gold);
}

/** 钟楼/鼓楼:两重檐方亭,首层置钟/鼓 */
export function buildTower(w, cx, kind) {
  const cz = 10;
  // 台基 (9x9, 高1)
  w.box(cx - 4, 1, cz - 4, cx + 4, 1, cz + 4, P.stone);
  w.box(cx - 4, 1, cz - 4, cx + 4, 1, cz + 4, P.stoneHi);
  w.box(cx - 1, 1, cz + 5, cx + 1, 1, cz + 5, P.stoneHi);
  // 一层屋身 (7x7, 高4): y2..5,三面开敞
  const x0 = cx - 3,
    x1 = cx + 3,
    z0 = cz - 3,
    z1 = cz + 3;
  w.walls(x0, z0, x1, z1, 2, 5, P.redWall);
  for (const sx of [-1, 1])
    for (let y = 2; y <= 5; y++) {
      w.set(x0 + (sx > 0 ? 0 : 6), y, z0, P.redPillar);
      w.set(x0 + (sx > 0 ? 0 : 6), y, z1, P.redPillar);
    }
  for (const sz of [-1, 1])
    for (let y = 2; y <= 5; y++) {
      w.set(x0, y, z0 + (sz > 0 ? 0 : 6), P.redPillar);
      w.set(x1, y, z0 + (sz > 0 ? 0 : 6), P.redPillar);
    }
  // 前开(3宽2高)
  for (let x = cx - 1; x <= cx + 1; x++)
    for (let y = 2; y <= 3; y++) w.carve(x, y, z1);
  // 钟 / 鼓
  if (kind === 'bell') {
    w.set(cx, 2, cz, 0x8a6a2a);
    w.set(cx, 3, cz, 0x8a6a2a);
    w.set(cx, 4, cz, 0x6a5020);
  } else {
    w.set(cx - 1, 2, cz, 0x8e2f26);
    w.set(cx, 2, cz, 0x8e2f26);
    w.set(cx, 3, cz, 0x5d4037);
  }
  // 平座(9x9) + 栏杆
  w.box(x0 - 1, 6, z0 - 1, x1 + 1, 6, z1 + 1, P.wood);
  for (let x = x0 - 1; x <= x1 + 1; x++)
    for (const z of [z0 - 1, z1 + 1])
      if ((x + z) % 2 === 0) w.set(x, 7, z, P.rail);
  for (let z = z0; z <= z1; z++)
    for (const x of [x0 - 1, x1 + 1])
      if ((x + z) % 2 === 0) w.set(x, 7, z, P.rail);
  // 二层屋身 (5x5, 高3): y7..9
  w.walls(cx - 2, cz - 2, cx + 2, cz + 2, 7, 9, P.redPillar);
  w.carve(cx, 8, cz + 2);
  w.setGlow(cx, 8, cz + 2, P.window);
  w.carve(cx, 9, cz + 2);
  w.setGlow(cx, 9, cz + 2, P.window);
  dougongBand(w, cx - 3, cz - 3, cx + 3, cz + 3, 10);
  // 攒尖顶
  let h = 3,
    yy = 11;
  while (h >= 1) {
    w.box(cx - h, yy, cz - h, cx + h, yy, cz + h, P.tileSlate);
    h--;
    yy++;
  }
  eaveTipsC(w, cx, cz, 11, 3, 3, P.tileSlateHi);
  w.box(cx - 1, yy, cz - 1, cx + 1, yy, cz + 1, P.gold);
  w.set(cx, yy + 1, cz, P.gold);
  w.set(cx, yy + 2, cz, P.gold);
}

/** 香炉(鼎) */
export function buildDing(w, cx, cz) {
  const bronze = 0x4a4438,
    bronzeHi = 0x5c5546;
  for (const sx of [-1, 1])
    for (const sz of [-1, 1]) w.set(cx + sx, 1, cz + sz, bronze); // 足
  w.box(cx - 1, 2, cz - 1, cx + 1, 3, cz + 1, bronze);
  w.box(cx - 1, 4, cz - 1, cx + 1, 4, cz + 1, bronzeHi);
  w.set(cx - 2, 4, cz, bronze);
  w.set(cx + 2, 4, cz, bronze);
  // 香火微光
  w.setGlow(cx, 5, cz, 0xff7a30);
}

/** 石狮 */
export function buildLion(w, cx, cz) {
  const body = P.stoneHi,
    dark = P.stoneLo;
  w.box(cx - 1, 1, cz, cx + 1, 1, cz + 1, P.stone); // 座
  w.box(cx - 1, 2, cz, cx + 1, 3, cz + 1, body); // 身
  w.box(cx - 1, 4, cz + 1, cx + 1, 4, cz + 1, body); // 头(朝前)
  w.set(cx - 1, 5, cz + 1, dark); // 耳
  w.set(cx + 1, 5, cz + 1, dark);
  w.set(cx - 1, 3, cz + 2, body); // 前爪
  w.set(cx + 1, 3, cz + 2, body);
}

/** 灯笼柱 */
export function buildLanternPost(w, x, z) {
  w.set(x, 1, z, P.stoneLo);
  w.set(x, 2, z, P.stoneLo);
  w.set(x, 3, z, P.woodDark);
  w.setGlow(x, 4, z, P.lantern);
  w.set(x, 5, z, P.woodDark);
}

// ============ 场地 ============

export function buildGround(w, rng) {
  const pick = (a, b, c) => {
    const r = rng();
    return r < 0.25 ? a : r < 0.75 ? b : c;
  };
  const isPath = (x, z) => {
    if (Math.abs(x) <= 3 && z >= -31 && z <= 46) return true; // 主轴
    if (Math.abs(x) <= 9 && z >= -46 && z <= -31) return true; // 塔院
    if (Math.abs(x) >= 3 && Math.abs(x) <= 15 && z >= -6 && z <= -1) return true; // 主殿前月台铺装
    if (z >= 8 && z <= 12 && Math.abs(x) >= 3 && Math.abs(x) <= 14) return true; // 通钟鼓楼
    if (z >= -16 && z <= -12 && Math.abs(x) >= 3 && Math.abs(x) <= 20) return true; // 通配殿
    if (Math.abs(x) <= 8 && z >= 24 && z <= 36) return true; // 山门内外铺装
    return false;
  };
  for (let x = -46; x <= 46; x++) {
    for (let z = -50; z <= 48; z++) {
      w.set(x, 0, z, isPath(x, z) ? pick(P.pathLo, P.path, P.pathHi) : pick(P.grassLo, P.grass, P.grassHi));
    }
  }
}

/** 院墙(环绕整座寺院,山门为入口) */
export function buildWalls(w) {
  const h = [1, 2, 3];
  // 前墙(留出山门 x-8..8)
  for (const x0 of [[-38, -9], [9, 38]]) {
    for (let x = x0[0]; x <= x0[1]; x++) {
      for (const y of h) {
        w.set(x, y, 29, P.redWall);
        w.set(x, y, 30, P.redWall);
      }
      w.set(x, 4, 29, P.tileSlateHi);
      w.set(x, 4, 30, P.tileSlateHi);
    }
  }
  // 侧墙
  for (const sx of [-1, 1]) {
    for (let z = -45; z <= 28; z++) {
      for (const y of h) {
        w.set(sx * 39, y, z, P.redWall);
        w.set(sx * 40, y, z, P.redWall);
      }
      w.set(sx * 39, 4, z, P.tileSlateHi);
      w.set(sx * 40, 4, z, P.tileSlateHi);
    }
  }
  // 后墙
  for (let x = -38; x <= 38; x++) {
    for (const y of h) {
      w.set(x, y, -46, P.redWall);
      w.set(x, y, -45, P.redWall);
    }
    w.set(x, 4, -46, P.tileSlateHi);
    w.set(x, 4, -45, P.tileSlateHi);
  }
  // 角墩
  for (const sx of [-1, 1]) {
    for (const z of [29, -45]) {
      w.box(sx * 39 - 1, 1, z - 1, sx * 39 + 1, 4, z + 2, P.redWall);
      w.box(sx * 39 - 1, 5, z - 1, sx * 39 + 1, 5, z + 2, P.tileSlateHi);
    }
  }
}

/** 树木:round 圆冠 / pine 松塔 */
export function buildTree(w, x, z, rng, kind = 'round') {
  if (kind === 'round') {
    const th = 3 + Math.floor(rng() * 2);
    for (let y = 1; y <= th; y++) w.set(x, y, z, P.trunk);
    const r = 2;
    for (let dx = -r; dx <= r; dx++)
      for (let dz = -r; dz <= r; dz++) {
        if (Math.abs(dx) === r && Math.abs(dz) === r && rng() < 0.6) continue;
        w.set(x + dx, th + 1, z + dz, rng() < 0.3 ? P.leafHi : rng() < 0.5 ? P.leaf : P.leafLo);
        w.set(x + dx, th + 2, z + dz, rng() < 0.4 ? P.leafHi : P.leaf);
      }
    for (let dx = -1; dx <= 1; dx++)
      for (let dz = -1; dz <= 1; dz++)
        w.set(x + dx, th + 3, z + dz, rng() < 0.3 ? P.leafHi : P.leaf);
    w.set(x, th + 4, z, P.leafLo);
  } else {
    // 松:两层塔形
    w.set(x, 1, z, P.trunk);
    w.set(x, 2, z, P.trunk);
    for (let dx = -2; dx <= 2; dx++)
      for (let dz = -2; dz <= 2; dz++) {
        if (Math.abs(dx) + Math.abs(dz) > 3) continue;
        w.set(x + dx, 3, z + dz, P.leafLo);
      }
    for (let dx = -1; dx <= 1; dx++)
      for (let dz = -1; dz <= 1; dz++)
        w.set(x + dx, 4, z + dz, P.leaf);
    w.set(x, 5, z, P.leafHi);
    w.set(x, 6, z, P.leafHi);
  }
}

/** 总装:整座建筑群 */
export function buildScene(w, rng) {
  buildGround(w, rng);
  buildWalls(w);
  buildMainHall(w);
  buildSideHall(w, 28, -14);
  buildSideHall(w, -28, -14);
  buildGate(w);
  buildPagoda(w);
  buildTower(w, 17, 'drum');
  buildTower(w, -17, 'bell');
  buildDing(w, 0, 10);
  buildLion(w, 5, 35);
  buildLion(w, -5, 35);
  // 灯笼柱:主路两侧
  for (const z of [2, 16, 22]) {
    buildLanternPost(w, 5, z);
    buildLanternPost(w, -5, z);
  }
  buildLanternPost(w, 14, -5);
  buildLanternPost(w, -14, -5);
  buildLanternPost(w, 8, -31);
  buildLanternPost(w, -8, -31);
  // 树
  const trees = [
    [11, 22, 'round'], [-11, 22, 'round'], [11, 2, 'round'], [-11, 2, 'round'],
    [24, -3, 'round'], [-24, -3, 'round'], [33, 4, 'round'], [-33, 4, 'round'],
    [24, -25, 'round'], [-24, -25, 'round'], [10, -27, 'pine'], [-10, -27, 'pine'],
    [10, -48, 'pine'], [-10, -48, 'pine'], [16, -40, 'pine'], [-16, -40, 'pine'],
    [8, 40, 'round'], [-8, 40, 'round'], [16, 42, 'round'], [-16, 42, 'round'],
    [26, 40, 'round'], [-26, 40, 'round'], [36, 43, 'round'], [-36, 43, 'round'],
    [44, -12, 'pine'], [-44, -12, 'pine'], [44, 16, 'pine'], [-44, 16, 'pine'],
    [34, -36, 'round'], [-34, -36, 'round'], [0, 44, 'round'], [0, -49, 'pine']
  ];
  for (const [tx, tz, kind] of trees) buildTree(w, tx, tz, rng, kind);
}
