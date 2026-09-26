import { PALETTE as P, shade } from './palette.js';

/** 以 c 为中心取 n 格整数区间 [lo, hi]（含端点） */
export function span(c, n) {
  const half = Math.floor(n / 2);
  return [c - half, c + half - (n % 2 === 0 ? 1 : 0)];
}

function setV(V, map, lx, ly, lz, color, glow = null) {
  const w = map(lx, ly, lz);
  V.set(w.x, w.y, w.z, color, glow);
}

/* ------------------------------------------------------------------ */
/* 屋顶：飞檐翘角 + 庑殿顶 / 歇山顶 / 攒尖顶                            */
/* ------------------------------------------------------------------ */
export function roof(V, cx, cz, y0, w, d, o, tile, opts = {}) {
  const ridgeD = opts.ridgeD ?? 2;      // 正脊宽度（z 向）
  const gable = opts.gable ?? 0;        // 歇山山花层数（0 = 庑殿）
  const maxLayers = opts.maxLayers ?? Infinity;
  const ridgeColor = opts.ridgeColor ?? shade(tile, -24);
  const wallColor = opts.wallColor ?? P.wallRed;
  const pyramidal = !!opts.pyramidal;

  const W = w + 2 * o;
  const D = d + 2 * o;
  const [ex0, ex1] = span(cx, W);
  const [ez0, ez1] = span(cz, D);

  // 檐口平板（四角起翘：角落 3x3 区域抬高 1 格）
  for (let x = ex0; x <= ex1; x++) {
    for (let z = ez0; z <= ez1; z++) {
      const dx = Math.min(x - ex0, ex1 - x);
      const dz = Math.min(z - ez0, ez1 - z);
      const near = Math.min(dx, dz);
      V.set(x, y0 + (near <= 1 ? 1 : 0), z, tile);
    }
  }
  // 檐角鎏金
  V.set(ex0, y0 + 2, ez0, P.gold);
  V.set(ex1, y0 + 2, ez0, P.gold);
  V.set(ex0, y0 + 2, ez1, P.gold);
  V.set(ex1, y0 + 2, ez1, P.gold);

  const natural = Math.max(1, Math.floor((D - ridgeD - 2 * gable) / 2));
  const layers = Math.min(natural, maxLayers);
  const partial = layers < natural || pyramidal;

  let topY = y0;
  let cw = W;
  for (let i = 1; i <= layers; i++) {
    cw = W - 2 * i;
    const cd = D - 2 * i;
    topY = y0 + i;
    const [x0, x1] = span(cx, cw);
    const [z0, z1] = span(cz, cd);
    const isTop = i === layers;
    const col = isTop && !partial ? ridgeColor : tile;
    for (let x = x0; x <= x1; x++) {
      for (let z = z0; z <= z1; z++) {
        if (x === x0 || x === x1 || z === z0 || z === z1) V.set(x, topY, z, col);
      }
    }
    // 戗脊（檐角斜脊）
    V.set(x0, topY + 1, z0, ridgeColor);
    V.set(x1, topY + 1, z0, ridgeColor);
    V.set(x0, topY + 1, z1, ridgeColor);
    V.set(x1, topY + 1, z1, ridgeColor);
  }

  // 歇山山花（顶部两端垂直收分）
  for (let g = 1; g <= gable; g++) {
    const cd = D - 2 * layers - 2 * g;
    topY = y0 + layers + g;
    const [x0, x1] = span(cx, cw);
    const [z0, z1] = span(cz, cd);
    for (let x = x0; x <= x1; x++) {
      for (let z = z0; z <= z1; z++) {
        if (x === x0 || x === x1 || z === z0 || z === z1) {
          const c = x === x0 || x === x1 ? wallColor : tile;
          V.set(x, topY, z, c);
        }
      }
    }
    V.set(x0, topY + 1, z0, ridgeColor);
    V.set(x1, topY + 1, z0, ridgeColor);
    V.set(x0, topY + 1, z1, ridgeColor);
    V.set(x1, topY + 1, z1, ridgeColor);
    // 悬鱼（山花面中心鎏金）
    V.set(x0, topY, cz, P.gold);
    V.set(x1, topY, cz, P.gold);
  }

  // 正脊两端鸱吻
  if (!partial) {
    const [tx0, tx1] = span(cx, cw);
    const [tz0, tz1] = span(cz, ridgeD);
    for (const ex of [tx0, tx1]) {
      V.set(ex, topY + 1, cz, ridgeColor);
      V.set(ex, topY + 2, cz, P.gold);
    }
    if (!gable) {
      for (let x = tx0; x <= tx1; x++)
        for (let z = tz0; z <= tz1; z++) V.set(x, topY, z, ridgeColor);
    }
  }

  // 攒尖宝顶
  if (pyramidal) {
    V.set(cx, topY + 1, cz, ridgeColor);
    V.set(cx, topY + 2, cz, P.gold);
    V.set(cx, topY + 3, cz, P.glowGold, 'gold');
  }

  return { topY, cw, cd: Math.max(2, D - 2 * layers) };
}

/* ------------------------------------------------------------------ */
/* 厅堂：台基 + 台阶 + 红墙立柱 + 斗拱 + 屋顶（可重檐）                 */
/* ------------------------------------------------------------------ */
export function hall(V, o = {}) {
  const {
    cx = 0, cz = 0, w, d, wallH,
    rot = 0, platH = 1, platOver = 1,
    wall = P.wallRed, column = P.wallRedDark, beam = P.beamTeal,
    tile = P.tileGold, ridge = null, gable = 0,
    tiers = 1, bandH = 2,
    doorStyle = 'leaves', doorW = 3, doorH = 4,
    stairs = true, backSteps = false, windowH = 3,
  } = o;
  const ridgeColor = ridge ?? shade(tile, -24);
  const map =
    rot === 0
      ? (lx, ly, lz) => ({ x: cx + lx, y: ly, z: cz + lz })
      : (lx, ly, lz) => ({ x: cx + lz, y: ly, z: cz - lx });

  // ---- 台基
  const Wp = w + 2 * platOver;
  const Dp = d + 2 * platOver;
  const [plx0, plx1] = span(0, Wp);
  const [plz0, plz1] = span(0, Dp);
  for (let y = 0; y < platH; y++) {
    const col = y === platH - 1 ? P.stoneLight : P.stone;
    for (let lx = plx0; lx <= plx1; lx++)
      for (let lz = plz0; lz <= plz1; lz++) setV(V, map, lx, y, lz, col);
  }

  // ---- 台阶（前）
  if (stairs) {
    const sw = Math.max(doorW + 2, 5);
    const [sx0, sx1] = span(0, sw);
    for (let j = 1; j <= platH; j++) {
      for (let lx = sx0; lx <= sx1; lx++)
        for (let y = 0; y < platH - j; y++) setV(V, map, lx, y, plz0 - j, P.stoneDark);
    }
    if (backSteps) {
      for (let j = 1; j <= platH; j++) {
        for (let lx = sx0; lx <= sx1; lx++)
          for (let y = 0; y < platH - j; y++) setV(V, map, lx, y, plz1 + j, P.stoneDark);
      }
    }
  }

  // ---- 墙体
  const [wx0, wx1] = span(0, w);
  const [wz0, wz1] = span(0, d);
  const yB = platH + wallH;
  for (let y = platH; y < yB; y++) {
    for (let lx = wx0; lx <= wx1; lx++)
      for (let lz = wz0; lz <= wz1; lz++)
        if (lx === wx0 || lx === wx1 || lz === wz0 || lz === wz1)
          setV(V, map, lx, y, lz, wall);
  }

  // ---- 立柱（柱网：每 3 格 + 角柱，前檐让出门口）
  const colXs = [];
  for (let x = wx0 + 1; x <= wx1 - 1; x += 3) colXs.push(x);
  colXs.push(wx0, wx1);
  colXs.sort((a, b) => a - b);
  const doorHalf = Math.floor(doorW / 2);
  const frontCols = colXs.filter((x) => Math.abs(x) > doorHalf);
  const sideCols = [];
  for (let z = wz0 + 1; z <= wz1 - 1; z += 3) sideCols.push(z);

  for (const cxl of colXs)
    for (let y = platH; y < yB; y++) {
      setV(V, map, cxl, y, wz0, column);
      setV(V, map, cxl, y, wz1, column);
    }
  for (const czl of sideCols)
    for (let y = platH; y < yB; y++) {
      setV(V, map, wx0, y, czl, column);
      setV(V, map, wx1, y, czl, column);
    }

  // ---- 大门
  for (let lx = -doorHalf; lx <= doorHalf; lx++)
    for (let y = platH; y < platH + doorH; y++) {
      let col;
      if (doorStyle === 'open') {
        col = 0x1f140c;
      } else {
        const border = Math.abs(lx) === doorHalf || y === platH || y === platH + doorH - 1;
        if (border) col = column;
        else if (lx === 0) col = P.woodDark;
        else if (((lx + y) % 2 + 2) % 2 === 0) col = P.gold;
        else col = P.doorLeaf;
      }
      setV(V, map, lx, y, wz0, col);
    }

    // ---- 窗棂
  const wh = Math.min(windowH, wallH - 1);
  const wy0 = platH + 1;
  const placeWindow = (cells, plane, axis) => {
    const n = cells.length;
    for (let i = 0; i < n; i++)
      for (let j = 0; j < wh; j++) {
        const border = i === 0 || i === n - 1 || j === 0 || j === wh - 1;
        const mid = n % 2 === 1 && i === (n - 1) / 2;
        const col = border ? column : mid ? P.woodDark : P.paper;
        if (axis === 'z') setV(V, map, cells[i], wy0 + j, plane, col);
        else setV(V, map, plane, wy0 + j, cells[i], col);
      }
  };
  // 前檐窗（柱间）
  for (let i = 0; i + 1 < frontCols.length; i++) {
    const a = frontCols[i];
    const b = frontCols[i + 1];
    const cells = [];
    for (let x = a + 1; x < b; x++) cells.push(x);
    if (cells.length >= 2 && Math.abs((a + b) / 2) > doorHalf + 1)
      placeWindow(cells, wz0, 'z');
  }
  // 山面窗
  for (const side of [wx0, wx1]) {
    const all = [...sideCols, wz0, wz1].sort((a, b) => a - b);
    for (let i = 0; i + 1 < all.length; i++) {
      const a = all[i];
      const b = all[i + 1];
      const cells = [];
      for (let z = a + 1; z < b; z++) cells.push(z);
      if (cells.length >= 2) placeWindow(cells, side, 'x');
    }
  }
  // 后檐窗
  for (let i = 0; i + 1 < colXs.length; i++) {
    const a = colXs[i];
    const b = colXs[i + 1];
    const cells = [];
    for (let x = a + 1; x < b; x++) cells.push(x);
    if (cells.length >= 2 && Math.abs((a + b) / 2) > doorHalf + 1)
      placeWindow(cells, wz1, 'z');
  }

  // ---- 额枋 + 斗拱
  for (let lx = wx0; lx <= wx1; lx++)
    for (let lz = wz0; lz <= wz1; lz++)
      if (lx === wx0 || lx === wx1 || lz === wz0 || lz === wz1)
        setV(V, map, lx, yB, lz, beam);
  // 枋间鎏金彩画点
  for (let i = 0; i + 1 < frontCols.length; i++) {
    const dot = Math.round((frontCols[i] + frontCols[i + 1]) / 2);
    setV(V, map, dot, yB, wz0, P.gold);
    setV(V, map, dot, yB, wz1, P.gold);
  }
  // 斗拱：柱头十字拱，外挑两跳
  const arm = (lx, lz, dx, dz) => {
    setV(V, map, lx, yB, lz, beam);
    setV(V, map, lx + dx, yB, lz + dz, beam);
    setV(V, map, lx + 2 * dx, yB, lz + 2 * dz, P.gold);
    setV(V, map, lx - dx, yB, lz - dz, beam);
  };
  for (const cxl of frontCols) {
    arm(cxl, wz0, 0, -1);
    arm(cxl, wz1, 0, 1);
  }
  for (const czl of sideCols) {
    arm(wx0, czl, -1, 0);
    arm(wx1, czl, 1, 0);
  }

  // ---- 屋顶（可重檐）
  const y0 = yB + 1;
  let topY;
  if (tiers === 2) {
    const r1 = roof(V, cx, cz, y0, w, d, 2, tile, {
      gable,
      ridgeColor,
      maxLayers: 2,
      wallColor: wall,
    });
    const bandY0 = r1.topY + 1;
    const [bx0, bx1] = span(0, w - 2);
    const [bz0, bz1] = span(0, d - 2);
    for (let y = bandY0; y < bandY0 + bandH; y++)
      for (let lx = bx0; lx <= bx1; lx++)
        for (let lz = bz0; lz <= bz1; lz++)
          if (lx === bx0 || lx === bx1 || lz === bz0 || lz === bz1)
            setV(V, map, lx, y, lz, wall);
    const yB2 = bandY0 + bandH;
    for (let lx = bx0; lx <= bx1; lx++)
      for (let lz = bz0; lz <= bz1; lz++)
        if (lx === bx0 || lx === bx1 || lz === bz0 || lz === bz1)
          setV(V, map, lx, yB2, lz, beam);
    topY = roof(V, cx, cz, yB2 + 1, w - 2, d - 2, 1, tile, {
      gable,
      ridgeColor,
      wallColor: wall,
    }).topY;
  } else {
    topY = roof(V, cx, cz, y0, w, d, 2, tile, {
      gable,
      ridgeColor,
      wallColor: wall,
    }).topY;
  }
  return { topY, yB };
}

/* ------------------------------------------------------------------ */
/* 山门（三间门洞式）                                                   */
/* ------------------------------------------------------------------ */
export function gate(V, cx = 0, cz = -26) {
  const w = 15, d = 9, wallH = 4, pH = 1;
  const yB = pH + wallH;
  const map = (lx, ly, lz) => ({ x: cx + lx, y: ly, z: cz + lz });
  const [wx0, wx1] = span(0, w);
  const [wz0, wz1] = span(0, d);
  const [plx0, plx1] = span(0, w + 2);
  const [plz0, plz1] = span(0, d + 2);

  for (let y = 0; y < pH; y++)
    for (let lx = plx0; lx <= plx1; lx++)
      for (let lz = plz0; lz <= plz1; lz++) setV(V, map, lx, y, lz, y === 0 ? P.stone : P.stoneLight);

  // 台阶（中央门洞前）
  for (let j = 1; j <= pH; j++)
    for (let lx = -1; lx <= 1; lx++)
      for (let y = 0; y < pH - j; y++) setV(V, map, lx, y, plz0 - j, P.stoneDark);

  // 墙体（中央三间开门洞）
  for (let y = pH; y < yB; y++)
    for (let lx = wx0; lx <= wx1; lx++)
      for (let lz = wz0; lz <= wz1; lz++) {
        const onPerimeter = lx === wx0 || lx === wx1 || lz === wz0 || lz === wz1;
        if (!onPerimeter) continue;
        const inOpening =
          (lz === wz0 || lz === wz1) && Math.abs(lx) <= 2 && y <= pH + 2;
        setV(V, map, lx, y, lz, inOpening ? 0x1f140c : P.wallRed);
      }

  // 门洞门槛
  for (let lx = -2; lx <= 2; lx++) setV(V, map, lx, pH, wz0, P.stoneDark);

  // 实墙面端间窗
  const placeWin = (cells, plane, axis) => {
    for (let i = 0; i < cells.length; i++)
      for (let j = 0; j < 3; j++) {
        const border = i === 0 || i === cells.length - 1 || j === 0 || j === 2;
        const col = border ? P.wallRedDark : P.paper;
        if (axis === 'z') setV(V, map, cells[i], pH + 1 + j, plane, col);
        else setV(V, map, plane, pH + 1 + j, cells[i], col);
      }
  };
  placeWin([-6, -5, -4], wz0, 'z');
  placeWin([4, 5, 6], wz0, 'z');
  placeWin([-6, -5, -4], wz1, 'z');
  placeWin([4, 5, 6], wz1, 'z');

  // 柱（门框柱 + 角柱 + 边柱）
  for (const cxl of [-6, -3, 3, 6, wx0, wx1])
    for (let y = pH; y < yB; y++) {
      setV(V, map, cxl, y, wz0, P.wallRedDark);
      setV(V, map, cxl, y, wz1, P.wallRedDark);
    }

  // 额枋 + 斗拱
  for (let lx = wx0; lx <= wx1; lx++)
    for (let lz = wz0; lz <= wz1; lz++)
      if (lx === wx0 || lx === wx1 || lz === wz0 || lz === wz1)
        setV(V, map, lx, yB, lz, P.beamTeal);
  for (const cxl of [-6, -3, 3, 6]) {
    setV(V, map, cxl, yB, wz0 - 1, P.beamTeal);
    setV(V, map, cxl, yB, wz0 - 2, P.gold);
    setV(V, map, cxl, yB, wz0 + 1, P.beamTeal);
    setV(V, map, cxl, yB, wz1 + 1, P.beamTeal);
    setV(V, map, cxl, yB, wz1 + 2, P.gold);
    setV(V, map, cxl, yB, wz1 - 1, P.beamTeal);
  }

  // 歇山顶
  return roof(V, cx, cz, yB + 1, w, d, 2, P.tileSlate, {
    gable: 2,
    ridgeColor: P.tileSlateRidge,
    wallColor: P.wallRed,
  }).topY;
}

/* ------------------------------------------------------------------ */
/* 钟鼓楼（重檐歇山 + 宝顶）                                             */
/* ------------------------------------------------------------------ */
export function tower(V, cx, cz) {
  const { topY } = hall(V, {
    cx, cz, w: 11, d: 11, wallH: 6, platH: 2, platOver: 1,
    tile: P.tileSlate, ridge: P.tileSlateRidge, gable: 2, tiers: 2, bandH: 2,
    doorStyle: 'open', doorW: 3, doorH: 3, stairs: true,
  });
  V.set(cx, topY + 1, cz, P.gold);
  V.set(cx, topY + 2, cz, P.gold);
  V.set(cx, topY + 3, cz, P.glowGold, 'gold');
  return topY;
}

/* ------------------------------------------------------------------ */
/* 配殿（面向中轴）                                                      */
/* ------------------------------------------------------------------ */
export function sideHall(V, cx, cz) {
  return hall(V, {
    cx, cz, w: 12, d: 8, wallH: 5, platH: 1, platOver: 1, rot: 1,
    tile: P.tileSlate, ridge: P.tileSlateRidge, gable: 2, tiers: 1,
    doorStyle: 'leaves', doorW: 3, doorH: 3, stairs: true,
  }).topY;
}

/* ------------------------------------------------------------------ */
/* 碑亭（攒尖顶 + 石碑）                                                 */
/* ------------------------------------------------------------------ */
export function pavilion(V, cx, cz) {
  const pH = 1;
  const map = (lx, ly, lz) => ({ x: cx + lx, y: ly, z: cz + lz });
  const [px0, px1] = span(0, 8);
  const [pz0, pz1] = span(0, 8);
  for (let y = 0; y < pH; y++)
    for (let lx = px0; lx <= px1; lx++)
      for (let lz = pz0; lz <= pz1; lz++) setV(V, map, lx, y, lz, y === 0 ? P.stone : P.stoneLight);

  // 围栏（1 高）
  for (let lx = -3; lx <= 3; lx++)
    for (let lz = -3; lz <= 3; lz++) {
      const onEdge = Math.abs(lx) === 3 || Math.abs(lz) === 3;
      if (onEdge) setV(V, map, lx, pH, lz, P.wallRed);
    }

  // 角柱 + 额枋
  for (const [dx, dz] of [[-3, -3], [-3, 3], [3, -3], [3, 3]])
    for (let y = pH + 1; y <= pH + 3; y++) setV(V, map, dx, y, dz, P.wallRedDark);
  for (let lx = -3; lx <= 3; lx++)
    for (let lz = -3; lz <= 3; lz++) {
      const onEdge = Math.abs(lx) === 3 || Math.abs(lz) === 3;
      if (onEdge) setV(V, map, lx, pH + 4, lz, P.beamTeal);
    }

  // 石碑
  for (let lx = -1; lx <= 1; lx++)
    for (let lz = -1; lz <= 1; lz++) setV(V, map, lx, pH, lz, P.stoneDark);
  for (let y = pH + 1; y <= pH + 3; y++) setV(V, map, 0, y, 0, 0xb8b8b0);
  setV(V, map, -1, pH + 1, 0, 0xb8b8b0);
  setV(V, map, 1, pH + 1, 0, 0xb8b8b0);

  // 攒尖顶 + 宝顶
  roof(V, cx, cz, pH + 5, 6, 6, 1, P.tileBlue, {
    pyramidal: true,
    ridgeColor: P.tileBlueRidge,
  });
}

/* ------------------------------------------------------------------ */
/* 主殿（三层台基 + 重檐庑殿 + 黄琉璃）                                   */
/* ------------------------------------------------------------------ */
export function mainHall(V) {
  return hall(V, {
    cx: 0, cz: 26, w: 26, d: 16, wallH: 8,
    platH: 4, platOver: 2,
    tile: P.tileGold, ridge: P.tileGoldRidge, gable: 0, tiers: 2, bandH: 2,
    doorStyle: 'leaves', doorW: 5, doorH: 4,
    stairs: true, backSteps: true, windowH: 3,
  }).topY;
}

/* ------------------------------------------------------------------ */
/* 宝塔（五层楼阁式）                                                    */
/* ------------------------------------------------------------------ */
export function pagoda(V, cz = 47) {
  // 基座
  for (let y = 0; y < 2; y++)
    for (let lx = -6; lx <= 6; lx++)
      for (let lz = -6; lz <= 6; lz++)
        V.set(lx, y, cz + lz, y === 0 ? P.stone : P.stoneLight);
  // 前台阶
  for (let j = 1; j <= 2; j++)
    for (let lx = -1; lx <= 1; lx++)
      for (let y = 0; y < 2 - j; y++) V.set(lx, y, cz - 7 - j, P.stoneDark);

  const sizes = [11, 10, 9, 8, 7];
  let b = 2;
  for (let i = 0; i < sizes.length; i++) {
    const s = sizes[i];
    const [x0, x1] = span(0, s);
    const [z0, z1] = span(cz, s);
    // 墙
    for (let y = b; y < b + 4; y++)
      for (let x = x0; x <= x1; x++)
        for (let z = z0; z <= z1; z++)
          if (x === x0 || x === x1 || z === z0 || z === z1) V.set(x, y, z, P.wallRed);
    // 柱（角柱 + 面中柱）
    for (let y = b; y < b + 4; y++) {
      for (const [dx, dz] of [[x0, z0], [x1, z0], [x0, z1], [x1, z1], [x0, cz], [x1, cz], [0, z0], [0, z1]])
        V.set(dx, y, dz, P.wallRedDark);
    }
    // 前门 / 窗
    for (let y = b; y < b + 2; y++) V.set(0, y, z0, 0x1f140c);
    V.set(0, b + 1, z0, P.gold);
    for (const zz of [z1]) V.set(0, b + 1, zz, P.paper);
    for (const xx of [x0, x1]) V.set(xx, b + 1, cz, P.paper);
    // 额枋
    for (let x = x0; x <= x1; x++)
      for (let z = z0; z <= z1; z++)
        if (x === x0 || x === x1 || z === z0 || z === z1) V.set(x, b + 3, z, P.beamTeal);
    // 檐（檐口 + 一层檐坡）
    roof(V, 0, cz, b + 4, s, s, i === 0 ? 2 : 1, P.tilePagoda, {
      maxLayers: 1,
      ridgeColor: P.tilePagodaRidge,
      wallColor: P.wallRed,
    });
    b += 6;
  }
  // 塔刹
  const capTop = roof(V, 0, cz, b, 7, 7, 1, P.tilePagoda, {
    pyramidal: true,
    ridgeColor: P.tilePagodaRidge,
  }).topY;
  V.set(0, capTop + 1, cz, P.gold);
  V.set(0, capTop + 2, cz, P.gold);
  V.set(0, capTop + 3, cz, P.glowGold, 'gold');
  return capTop;
}

/* ------------------------------------------------------------------ */
/* 牌坊（四柱三间）                                                      */
/* ------------------------------------------------------------------ */
export function pailou(V, cz = -36) {
  const map = (lx, ly, lz) => ({ x: lx, y: ly, z: cz + lz });
  // 柱
  for (const cxl of [-7, -3, 3, 7])
    for (let ly = 0; ly <= 4; ly++)
      for (let lz = -1; lz <= 0; lz++) setV(V, map, cxl, ly, lz, P.wallRed);
  // 额枋（两层）
  for (let ly = 3; ly <= 4; ly++)
    for (let lx = -8; lx <= 8; lx++)
      for (let lz = -1; lz <= 0; lz++)
        if (Math.abs(lx) === 8 || ly === 4 || (lx % 2 === 0 && ly === 3))
          setV(V, map, lx, ly, lz, P.beamTeal);
        else setV(V, map, lx, ly, lz, P.beamBlue);
  // 匾额
  for (let lx = -1; lx <= 1; lx++) setV(V, map, lx, 4, -1, P.gold);
  // 三楼小顶
  for (const [bw, bx] of [[8, -5], [6, 0], [8, 5]]) {
    roof(V, bx, cz, 5, bw, 4, 1, P.tileGold, {
      ridgeColor: P.tileGoldRidge,
    });
  }
}

/* ------------------------------------------------------------------ */
/* 环境小件：石狮 / 灯笼杆 / 香炉 / 水池 / 围墙 / 花坛                   */
/* ------------------------------------------------------------------ */
export function lion(V, x, z) {
  for (let lx = -1; lx <= 0; lx++)
    for (let lz = 0; lz <= 1; lz++) V.set(x + lx, 0, z + lz, P.stoneDark);
  for (let lx = -1; lx <= 0; lx++)
    for (let lz = 0; lz <= 1; lz++) V.set(x + lx, 1, z + lz, P.lion);
  for (let lx = -1; lx <= 0; lx++) V.set(x + lx, 2, z - 1, P.lion); // 头
  V.set(x - 1, 3, z - 1, P.lion);
  V.set(x, 3, z - 1, P.lion);
}

export function lanternPole(V, x, z, dirX = -1) {
  for (let y = 0; y <= 4; y++) V.set(x, y, z, P.woodDark);
  for (let dx = -1; dx <= 1; dx++) V.set(x + dx, 4, z, P.woodDark);
  const lx = x + dirX;
  V.set(lx, 4, z, P.gold);
  V.set(lx, 3, z, P.glowRed, 'red');
  V.set(lx, 2, z, P.gold);
}

export function burner(V, x, z) {
  for (let lx = -1; lx <= 0; lx++)
    for (let lz = -1; lz <= 0; lz++) V.set(x + lx, 0, z + lz, P.stoneDark);
  for (let lx = -1; lx <= 0; lx++)
    for (let lz = -1; lz <= 0; lz++) V.set(x + lx, 1, z + lz, P.patina);
  V.set(x, 2, z, P.gold);
}

export function pool(V, cx, cz, w = 5, d = 3) {
  const [x0, x1] = span(cx, w);
  const [z0, z1] = span(cz, d);
  for (let x = x0; x <= x1; x++)
    for (let z = z0; z <= z1; z++) {
      const edge = x === x0 || x === x1 || z === z0 || z === z1;
      if (edge) V.set(x, 1, z, P.stoneDark);
      else V.set(x, 0, z, P.glowBlue, 'blue');
    }
}

export function wall(V, x0, z0, x1, z1) {
  for (let x = Math.min(x0, x1); x <= Math.max(x0, x1); x++)
    for (let z = Math.min(z0, z1); z <= Math.max(z0, z1); z++) {
      V.set(x, 0, z, P.wallOuter);
      V.set(x, 1, z, P.wallOuter);
    }
  if (x0 === x1) {
    for (let z = Math.min(z0, z1); z <= Math.max(z0, z1); z++)
      for (let dx = -1; dx <= 1; dx++) V.set(x0 + dx, 2, z, P.wallCap);
  } else {
    for (let x = Math.min(x0, x1); x <= Math.max(x0, x1); x++)
      for (let dz = -1; dz <= 1; dz++) V.set(x, 2, z0 + dz, P.wallCap);
  }
}

export function flowerBed(V, cx, cz, w, d) {
  const [x0, x1] = span(cx, w);
  const [z0, z1] = span(cz, d);
  let s = (cx * 31 + cz * 17) >>> 0;
  const rnd = () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
  const flowers = [P.flowerRed, P.flowerGold, P.flowerPink];
  for (let x = x0; x <= x1; x++)
    for (let z = z0; z <= z1; z++) {
      V.set(x, 0, z, P.grass);
      if (rnd() < 0.35) V.set(x, 1, z, flowers[Math.floor(rnd() * 3)]);
    }
}

export function tree(V, x, z, kind) {
  if (kind === 'pine') {
    for (let y = 0; y <= 2; y++) V.set(x, y, z, P.trunk);
    const blob = (cy, n) => {
      const [x0, x1] = span(x, n);
      const [z0, z1] = span(z, n);
      for (let dx = x0; dx <= x1; dx++)
        for (let dz = z0; dz <= z1; dz++) V.set(dx, cy, dz, (dx + dz) % 2 ? P.leaf : P.leafLight);
    };
    blob(2, 3);
    blob(3, 3);
    V.set(x, 4, z, P.leaf);
    V.set(x + 1, 4, z, P.leafLight);
  } else if (kind === 'cypress') {
    for (let y = 0; y <= 3; y++) V.set(x, y, z, P.trunk);
    const blob = (cy, n) => {
      const [x0, x1] = span(x, n);
      const [z0, z1] = span(z, n);
      for (let dx = x0; dx <= x1; dx++)
        for (let dz = z0; dz <= z1; dz++) V.set(dx, cy, dz, (dx * dz) % 2 ? P.leaf : P.leafLight);
    };
    blob(3, 3);
    blob(4, 3);
    blob(5, 1);
    V.set(x, 6, z, P.leaf);
  } else {
    for (let y = 0; y <= 2; y++) V.set(x, y, z, P.trunk);
    const blob = (cy, n) => {
      const [x0, x1] = span(x, n);
      const [z0, z1] = span(z, n);
      for (let dx = x0; dx <= x1; dx++)
        for (let dz = z0; dz <= z1; dz++) V.set(dx, cy, dz, (dx - dz) % 2 ? P.leafLight : P.leaf);
    };
    blob(2, 3);
    blob(3, 3);
    blob(4, 3);
    V.set(x, 5, z, P.leaf);
  }
}

/* ------------------------------------------------------------------ */
/* 总装                                                                */
/* ------------------------------------------------------------------ */
export function buildBuildings(V) {
  pailou(V, -36);                    // 牌坊（最南端入口）
  gate(V, 0, -26);                   // 山门
  tower(V, -13, -12);                // 钟楼
  tower(V, 13, -12);                 // 鼓楼
  sideHall(V, -21, 0);               // 配殿（西）
  sideHall(V, 21, 0);                // 配殿（东）
  pavilion(V, -9, 11);               // 碑亭
  pavilion(V, 9, 11);                // 碑亭
  mainHall(V);                       // 主殿
  pagoda(V, 47);                     // 宝塔
}
