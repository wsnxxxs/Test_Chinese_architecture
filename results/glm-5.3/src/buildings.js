import { PAL } from './palette.js';
import { addRoof } from './roofs.js';

// ================= 通用构件 =================

// 空心墙体（四壁）
function wallShell(w, x0, x1, y0, y1, z0, z1, c) {
  w.box(x0, x1, y0, y1, z0, z0, c);
  w.box(x0, x1, y0, y1, z1, z1, c);
  w.box(x0, x0, y0, y1, z0, z1, c);
  w.box(x1, x1, y0, y1, z0, z1, c);
}

// 檐柱（贴在墙外皮，形成柱列节奏）
function columnsRing(w, x0, x1, z0, z1, y0, y1, step, c) {
  for (let x = x0; x <= x1; x += step) {
    w.box(x, x, y0, y1, z0, z0, c);
    w.box(x, x, y0, y1, z1, z1, c);
  }
  for (let z = z0; z <= z1; z += step) {
    w.box(x0, x0, y0, y1, z, z, c);
    w.box(x1, x1, y0, y1, z, z, c);
  }
}

// 额枋 + 斗拱（沿 X 方向的檐下一带，dz 为出挑方向）
function frieze(w, x0, x1, y, z, dz, step) {
  for (let x = x0; x <= x1; x++) {
    w.add(x, y, z, PAL.woodDark);
    if ((x - x0) % step === 0) {
      w.add(x, y, z + dz, PAL.wood);
      w.add(x, y - 1, z + dz, PAL.wood);
    }
  }
}
// 沿 Z 方向的版本
function friezeZ(w, z0, z1, y, x, dx, step) {
  for (let z = z0; z <= z1; z++) {
    w.add(x, y, z, PAL.woodDark);
    if ((z - z0) % step === 0) {
      w.add(x + dx, y, z, PAL.wood);
      w.add(x + dx, y - 1, z, PAL.wood);
    }
  }
}

// 格扇窗（绘制在墙面 z 平面上，后写覆盖墙色）
function latticePanel(w, x0, x1, y0, y1, z) {
  for (let y = y0; y <= y1; y++)
    for (let x = x0; x <= x1; x++) {
      const border = x === x0 || x === x1 || y === y0 || y === y1;
      w.add(x, y, z, border ? PAL.woodDark : (x % 2 === 0 ? PAL.lattice : PAL.latticeBg));
    }
}
function latticePanelZ(w, z0, z1, y0, y1, x) {
  for (let y = y0; y <= y1; y++)
    for (let z = z0; z <= z1; z++) {
      const border = z === z0 || z === z1 || y === y0 || y === y1;
      w.add(x, y, z, border ? PAL.woodDark : (z % 2 === 0 ? PAL.lattice : PAL.latticeBg));
    }
}

// 门扇（金钉红门）
function doorPanel(w, x0, x1, y0, y1, z) {
  for (let y = y0; y <= y1; y++)
    for (let x = x0; x <= x1; x++) {
      const border = x === x0 || x === x1 || y === y0 || y === y1;
      let c = border ? PAL.doorFrame : PAL.door;
      if (!border && (x - x0) % 2 === 1 && (y - y0) % 2 === 1) c = PAL.gold; // 门钉
      w.add(x, y, z, c);
    }
}
function doorPanelZ(w, z0, z1, y0, y1, x) {
  for (let y = y0; y <= y1; y++)
    for (let z = z0; z <= z1; z++) {
      const border = z === z0 || z === z1 || y === y0 || y === y1;
      let c = border ? PAL.doorFrame : PAL.door;
      if (!border && (z - z0) % 2 === 1 && (y - y0) % 2 === 1) c = PAL.gold;
      w.add(x, y, z, c);
    }
}

// 匾额（蓝底金框金字）
function plaque(w, x0, x1, y0, y1, z) {
  for (let y = y0; y <= y1; y++)
    for (let x = x0; x <= x1; x++) {
      const border = x === x0 || x === x1 || y === y0 || y === y1;
      let c = border ? PAL.plaqueGold : PAL.plaque;
      if (!border && (x * 3 + y * 5) % 7 < 3) c = PAL.plaqueGold; // “字”
      w.add(x, y, z, c);
    }
}
function plaqueZ(w, z0, z1, y0, y1, x) {
  for (let y = y0; y <= y1; y++)
    for (let z = z0; z <= z1; z++) {
      const border = z === z0 || z === z1 || y === y0 || y === y1;
      let c = border ? PAL.plaqueGold : PAL.plaque;
      if (!border && (z * 3 + y * 5) % 7 < 3) c = PAL.plaqueGold;
      w.add(x, y, z, c);
    }
}

// 檐下吊挂红灯笼
export function hangLantern(w, x, yTop, z) {
  w.add(x, yTop - 1, z, PAL.woodDark);                              // 吊链
  w.box(x, x + 1, yTop - 2, yTop - 2, z, z + 1, PAL.lanternGold);   // 上帽
  w.box(x, x + 1, yTop - 4, yTop - 3, z, z + 1, PAL.lantern);       // 灯身
  w.box(x, x + 1, yTop - 5, yTop - 5, z, z + 1, PAL.lanternDark);   // 下帽
  w.add(x, yTop - 6, z, PAL.lanternGold);                           // 流苏
}

// 灯柱（庭院立柱灯笼）
export function stoneLantern(w, x, z) {
  w.box(x - 1, x, 1, 1, z - 1, z, PAL.stoneDark);
  w.box(x, x, 2, 5, z, z, PAL.woodDark);
  w.box(x - 1, x, 6, 7, z - 1, z, PAL.lantern);
  w.box(x - 1, x, 8, 8, z - 1, z, PAL.lanternGold);
  w.add(x, 9, z, PAL.lanternGold);
}

// 石狮（朝南蹲坐）
export function lion(w, cx, cz, mirror = false) {
  const X = (dx) => (mirror ? cx - dx : cx + dx);
  w.box(X(-1), X(1), 1, 2, cz - 2, cz + 1, PAL.stoneDarker); // 台座
  w.box(X(-1), X(1), 3, 4, cz - 2, cz, PAL.lion);            // 后躯
  w.box(X(-1), X(1), 3, 4, cz + 1, cz + 1, PAL.lion);        // 前胸
  w.box(X(-1), X(-1), 3, 3, cz + 1, cz + 2, PAL.lion);       // 前腿
  w.box(X(1), X(1), 3, 3, cz + 1, cz + 2, PAL.lion);
  w.box(X(-1), X(1), 5, 6, cz + 1, cz + 2, PAL.lion);        // 头
  w.add(X(-1), 7, cz + 1, PAL.lionDark);                     // 耳
  w.add(X(1), 7, cz + 1, PAL.lionDark);
  w.add(X(1), 5, cz - 2, PAL.lion);                          // 卷尾
  w.add(X(1), 6, cz - 2, PAL.lion);
  w.add(mirror ? X(-2) : X(2), 3, cz + 2, PAL.gold);         // 绣球
}

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

// 松树（叠云式体素松）
export function pine(w, cx, cz, seed) {
  const r = rng(seed);
  const th = 3 + Math.floor(r() * 2); // 主干高
  w.box(cx, cx, 1, th + 1, cz, cz, PAL.trunk);
  const leaf = (x0, x1, y0, y1, z0, z1) => {
    for (let x = x0; x <= x1; x++)
      for (let y = y0; y <= y1; y++)
        for (let z = z0; z <= z1; z++)
          w.add(x, y, z, PAL.leaf[Math.abs((x * 31 + y * 17 + z * 53 + seed) % 3)]);
  };
  leaf(cx - 2, cx + 2, th, th + 1, cz - 2, cz + 2);
  const ox = r() < 0.5 ? -1 : 1, oz = r() < 0.5 ? -1 : 1;
  leaf(cx - 2 + ox, cx + 2 + ox, th + 3, th + 4, cz - 2 + oz, cz + 2 + oz);
  leaf(cx - 1, cx + 1, th + 6, th + 7, cz - 1, cz + 1);
  w.add(cx, th + 8, cz, PAL.leaf[1]);
  w.add(cx, th + 9, cz, PAL.leaf[0]);
}

// ================= 主殿（重檐庑殿顶） =================
// 位于中轴线北端，体量最大：须弥座台基 + 石栏 + 下檐斗拱腰檐 + 上檐庑殿正脊
export function buildMainHall(w) {
  const cz = -24;

  // —— 须弥座台基 ——
  w.box(-15, 14, 1, 1, -34, -15, PAL.stoneDark);
  w.box(-16, 15, 2, 2, -35, -14, PAL.stone);

  // 石栏杆（正面留出台阶口）
  const rail = (x0, x1, z) => {
    for (let x = x0; x <= x1; x++) {
      w.add(x, 3, z, PAL.stoneLight);
      if ((x - x0) % 3 === 1) w.add(x, 4, z, PAL.stoneLight);
    }
  };
  const railZ = (z0, z1, x) => {
    for (let z = z0; z <= z1; z++) {
      w.add(x, 3, z, PAL.stoneLight);
      if ((z - z0) % 3 === 1) w.add(x, 4, z, PAL.stoneLight);
    }
  };
  rail(-16, 15, -35);
  rail(-16, -7, -14); rail(6, 15, -14);
  railZ(-34, -15, -16); railZ(-34, -15, 15);

  // 台阶（正面朝南）
  w.box(-5, 4, 1, 2, -13, -12, PAL.stone);
  w.box(-5, 4, 1, 1, -11, -10, PAL.stoneDark);

  // —— 下层柱墙 ——
  wallShell(w, -12, 11, 3, 7, -32, -17, PAL.wallRed);
  columnsRing(w, -12, 11, -32, -17, 3, 8, 4, PAL.columnRed);
  frieze(w, -12, 11, 8, -17, 1, 4);
  frieze(w, -12, 11, 8, -32, -1, 4);
  friezeZ(w, -31, -18, 8, -12, -1, 4);
  friezeZ(w, -31, -18, 8, 11, 1, 4);

  // 门窗、匾额
  doorPanel(w, -3, 2, 3, 6, -17);
  latticePanel(w, -10, -5, 4, 6, -17);
  latticePanel(w, 4, 9, 4, 6, -17);
  plaque(w, -4, 3, 7, 8, -17);
  latticePanelZ(w, -29, -26, 4, 6, -12);
  latticePanelZ(w, -22, -19, 4, 6, -12);
  latticePanelZ(w, -29, -26, 4, 6, 11);
  latticePanelZ(w, -22, -19, 4, 6, 11);

  // —— 下檐（重檐下段腰檐）——
  addRoof(w, {
    cx: 0, cz, eaveY: 9, hw: 16, hd: 11, rise: 4, endX: 6, endZ: 5,
    tile: PAL.tileGold, tileDark: PAL.tileGoldDark, tipSteps: 3,
  });

  // —— 上层柱墙 ——
  wallShell(w, -10, 9, 14, 16, -30, -19, PAL.wallRed);
  columnsRing(w, -10, 9, -30, -19, 14, 16, 4, PAL.columnRed);
  frieze(w, -10, 9, 17, -19, 1, 4);
  frieze(w, -10, 9, 17, -30, -1, 4);
  friezeZ(w, -29, -20, 17, -10, -1, 4);
  friezeZ(w, -29, -20, 17, 9, 1, 4);
  latticePanel(w, -8, 8, 15, 16, -19); // 上层通间格窗

  // —— 上檐（庑殿顶）——
  addRoof(w, {
    cx: 0, cz, eaveY: 18, hw: 13, hd: 9, rise: 4, endX: 6, endZ: 9,
    tile: PAL.tileGold, tileDark: PAL.tileGoldDark, tipSteps: 3,
    ridgeColor: PAL.ridgeGold, ridgeH: 1,
  });

  // 檐角灯笼
  hangLantern(w, 14, 9, -16);
  hangLantern(w, -15, 9, -16);
}

// ================= 山门（悬山顶） =================
// 前端入口，门道贯穿，可由中轴道路穿行进入庭院
export function buildGate(w) {
  // 台基
  w.box(-9, 8, 1, 1, 35, 44, PAL.stoneDark);
  w.box(-3, 2, 1, 1, 44, 45, PAL.stoneDark); // 门前踏步

  // 门道两侧墙垛（中央 x∈[-3,2] 为贯穿门洞）
  w.box(-8, -4, 2, 5, 36, 43, PAL.wallRed);
  w.box(3, 7, 2, 5, 36, 43, PAL.wallRed);

  // 檐柱（门洞两侧 + 角柱）
  for (const x of [-8, -4, 3, 7]) {
    w.box(x, x, 2, 6, 36, 36, PAL.columnRed);
    w.box(x, x, 2, 6, 43, 43, PAL.columnRed);
  }
  // 门楣横梁
  w.box(-3, 2, 5, 5, 36, 43, PAL.woodDark);

  // 额枋 + 斗拱（前后檐）
  frieze(w, -8, 7, 6, 43, 1, 3);
  frieze(w, -8, 7, 6, 36, -1, 3);

  // 门额匾额
  plaque(w, -3, 2, 4, 5, 43);

  // 悬山顶（脊沿面阔方向，山面 gableColor 收出山花）
  addRoof(w, {
    cx: 0, cz: 40, eaveY: 7, hw: 11, hd: 6, rise: 3, endX: 0, endZ: 6,
    tile: PAL.tileTeal, tileDark: PAL.tileTealDark, tipSteps: 2,
    ridgeColor: PAL.tileTealDark, ridgeH: 1, gableColor: PAL.wood,
  });

  // 门道内吊灯笼
  w.box(-2, -1, 2, 3, 37, 38, PAL.lantern);
  w.box(-2, -1, 4, 4, 37, 38, PAL.lanternGold);
  w.box(1, 2, 2, 3, 41, 42, PAL.lantern);
  w.box(1, 2, 4, 4, 41, 42, PAL.lanternGold);
}

// ================= 钟楼 / 鼓楼（攒尖顶方亭） =================
// 一进院内东西对称，石台基 + 两层楼身 + 腰檐 + 攒尖宝顶
export function buildTower(w, side, kind) {
  const cx = 19 * side, cz = 25;

  // 台基
  w.box(cx - 5, cx + 4, 1, 1, cz - 5, cz + 4, PAL.stoneDark);
  w.box(cx - 6, cx + 5, 2, 2, cz - 6, cz + 5, PAL.stone);

  // 一层
  wallShell(w, cx - 4, cx + 3, 3, 6, cz - 4, cz + 3, PAL.wallRed);
  columnsRing(w, cx - 4, cx + 3, cz - 4, cz + 3, 3, 6, 4, PAL.columnRed);
  frieze(w, cx - 4, cx + 3, 6, cz + 3, 1, 3);
  frieze(w, cx - 4, cx + 3, 6, cz - 4, -1, 3);
  friezeZ(w, cz - 4, cz + 3, 6, cx - 4, -1, 3);
  friezeZ(w, cz - 4, cz + 3, 6, cx + 3, 1, 3);
  latticePanel(w, cx - 1, cx, 4, 5, cz + 3);
  latticePanel(w, cx - 1, cx, 4, 5, cz - 4);
  latticePanelZ(w, cz - 1, cz, 4, 5, cx - 4);
  latticePanelZ(w, cz - 1, cz, 4, 5, cx + 3);

  // 腰檐
  addRoof(w, {
    cx, cz, eaveY: 7, hw: 6, hd: 6, rise: 2, endX: 3, endZ: 3,
    tile: PAL.tileTeal, tileDark: PAL.tileTealDark, tipSteps: 2,
  });

  // 二层
  wallShell(w, cx - 3, cx + 2, 10, 12, cz - 3, cz + 2, PAL.wallRed);
  columnsRing(w, cx - 3, cx + 2, cz - 3, cz + 2, 10, 12, 2, PAL.columnRed);
  frieze(w, cx - 3, cx + 2, 13, cz + 2, 1, 2);
  frieze(w, cx - 3, cx + 2, 13, cz - 3, -1, 2);
  friezeZ(w, cz - 3, cz + 2, 13, cx - 3, -1, 2);
  friezeZ(w, cz - 3, cz + 2, 13, cx + 2, 1, 2);
  // 四面暗龛（透空可见内部钟/鼓）
  for (const [dx, dz] of [[0, 2], [0, -3], [-3, 0], [2, 0]]) {
    if (dx === 0) w.box(cx - 1, cx, 10, 11, cz + dz, cz + dz, PAL.latticeBg);
    else w.box(cx + dx, cx + dx, 10, 11, cz - 1, cz, PAL.latticeBg);
  }
  // 钟（金） / 鼓（褐）
  const inner = kind === 'bell' ? PAL.gold : 0x8a4a2a;
  w.add(cx, 10, cz, inner);
  w.add(cx, 11, cz, inner);

  // 攒尖顶 + 宝顶
  addRoof(w, {
    cx, cz, eaveY: 14, hw: 5, hd: 5, rise: 3, endX: 5, endZ: 5,
    tile: PAL.tileTeal, tileDark: PAL.tileTealDark, tipSteps: 2,
    finial: { color: PAL.gold },
  });
}

// ================= 配殿（歇山顶，纵长） =================
// 东西对称，长轴沿中轴方向，殿门朝向中央庭院
export function buildSideHall(w, side) {
  const cx = 25 * side, cz = 2;

  // 台基
  w.box(cx - 6, cx + 5, 1, 1, -8, 11, PAL.stoneDark);
  w.box(cx - 5, cx + 4, 2, 2, -7, 10, PAL.stone);
  // 台阶（朝中轴一侧）
  if (side > 0) {
    w.box(cx - 7, cx - 6, 1, 2, 0, 3, PAL.stone);
    w.box(cx - 8, cx - 8, 1, 1, 0, 3, PAL.stoneDark);
  } else {
    w.box(cx + 6, cx + 7, 1, 2, 0, 3, PAL.stone);
    w.box(cx + 7, cx + 7, 1, 1, 0, 3, PAL.stoneDark);
  }

  // 柱墙
  wallShell(w, cx - 4, cx + 3, 3, 7, -5, 8, PAL.wallRed);
  columnsRing(w, cx - 4, cx + 3, -5, 8, 3, 8, 4, PAL.columnRed);
  frieeeZAll(w, cx, cz);
  // 门窗（朝中轴一面）
  const fx = side > 0 ? cx - 4 : cx + 3;
  doorPanelZ(w, 0, 3, 3, 6, fx);
  latticePanelZ(w, -4, -1, 4, 6, fx);
  latticePanelZ(w, 5, 8, 4, 6, fx);
  plaqueZ(w, 0, 3, 7, 8, side > 0 ? fx - 1 : fx + 1);

  // 歇山顶（正脊沿纵深 Z 方向）
  addRoof(w, {
    cx, cz, axis: 'z', eaveY: 9, hw: 9, hd: 7, rise: 3, endX: 4, endZ: 7,
    tile: PAL.tileTeal, tileDark: PAL.tileTealDark, tipSteps: 2,
    ridgeColor: PAL.tileTealDark, ridgeH: 1, gableColor: PAL.wood,
  });
}
function frieeeZAll(w, cx, cz) {
  frieze(w, cx - 4, cx + 3, 8, -5, -1, 4);
  frieze(w, cx - 4, cx + 3, 8, 8, 1, 4);
  friezeZ(w, -5, 8, 8, cx - 4, -1, 4);
  friezeZ(w, -5, 8, 8, cx + 3, 1, 4);
}

// ================= 宝塔（楼阁式，五层出檐） =================
// 中轴线最北端，塔院中，全场最高
export function buildPagoda(w) {
  const cx = 0, cz = -53;

  // 台基
  w.box(-7, 6, 1, 2, -60, -47, PAL.stoneDark);
  w.box(-6, 5, 3, 3, -59, -46, PAL.stone);
  w.box(-3, 2, 1, 2, -45, -44, PAL.stone);
  w.box(-3, 2, 1, 1, -43, -42, PAL.stoneDark);

  const tiers = [
    { half: 6, y: 4 }, { half: 5, y: 9 }, { half: 4, y: 14 }, { half: 3, y: 19 },
  ];
  for (const { half, y } of tiers) {
    wallShell(w, cx - half, cx + half - 1, y, y + 2, cz - half, cz + half - 1, PAL.wallRed);
    // 角柱
    for (const sx of [-1, 1])
      for (const sz of [-1, 1]) {
        const x = sx > 0 ? cx + half - 1 : cx - half;
        const z = sz > 0 ? cz + half - 1 : cz - half;
        w.box(x, x, y, y + 2, z, z, PAL.columnRed);
      }
    // 檐枋（顶层横带）
    w.box(cx - half, cx + half - 1, y + 2, y + 2, cz - half, cz - half, PAL.woodDark);
    w.box(cx - half, cx + half - 1, y + 2, y + 2, cz + half - 1, cz + half - 1, PAL.woodDark);
    w.box(cx - half, cx - half, y + 2, y + 2, cz - half, cz + half - 1, PAL.woodDark);
    w.box(cx + half - 1, cx + half - 1, y + 2, y + 2, cz - half, cz + half - 1, PAL.woodDark);
    // 四面格窗
    for (const [dx, dz] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
      if (dx === 0) latticePanel(w, cx - 1, cx, y + 1, y + 2, cz + (dz > 0 ? half - 1 : -half));
      else latticePanelZ(w, cz - 1, cz, y + 1, y + 2, cx + (dx > 0 ? half - 1 : -half));
    }
    // 出檐
    addRoof(w, {
      cx, cz, eaveY: y + 3, hw: half + 3, hd: half + 3, rise: 1, endX: 2, endZ: 2,
      tile: PAL.tileGold, tileDark: PAL.tileGoldDark, tipSteps: 2,
    });
  }

  // 塔顶收尖 + 塔刹
  addRoof(w, {
    cx, cz, eaveY: 24, hw: 5, hd: 5, rise: 2, endX: 5, endZ: 5,
    tile: PAL.tileGold, tileDark: PAL.tileGoldDark, tipSteps: 2,
  });
  for (let y = 26; y <= 31; y++) w.add(cx, y, cz, PAL.gold);       // 刹杆
  w.box(cx - 2, cx + 2, 29, 29, cz, cz, PAL.gold);                 // 相轮
  w.box(cx, cx, 29, 29, cz - 2, cz + 2, PAL.gold);
  w.box(cx - 1, cx + 1, 31, 31, cz, cz, PAL.ridgeGold);
  w.box(cx, cx, 31, 31, cz - 1, cz + 1, PAL.ridgeGold);
  w.add(cx, 32, cz, PAL.gold);
}
