/**
 * pagoda.js — 舍利宝塔（SPEC §3，A3 负责）
 * 场景北端中轴收束：7 层八角楼阁式塔，总高 ≈138（含塔刹），全场景制高点。
 *
 * 契约说明（与已落地的 parts.js / VoxelWorld.js 对齐）：
 *  - 八角一律用"内切半径 a（apothem）"描述：平面棱朝正东/南/西/北，与
 *    prism(cx,cz,…,8,Math.PI/8) 同向，故本文件的环判定与 parts 的八角屋顶可叠合。
 *  - 【已回报 A2 的 parts.roofRing 缺陷】roofRing({octagon:true}) 按 x=0..r 每列只写一个 z
 *    （zt = r·√2 − x），结果只有 z=±r 两个棱面完整、x=±r 两个棱面只剩端点：塔檐东/西向
 *    出现 ~17 格宽的洞（实测本塔 y=13..18 整段为空）。故本文件改用等效局部函数 octEave：
 *    剖面 y = yIn − round((r−aIn)·0.85) + round(upturn·(1−k)²)，即内皮高、檐口低、8 角起翘；
 *    用 inOctRing 逐半径出环，8 个棱面全部闭合。A2 修好 roofRing 后把三处 octEave
 *    换回 roofRing 即可（其余逻辑无需改动）。
 *  - 台基四面台阶全部走 parts.stairs（自带垂带石 + 南面御路），栏杆 parts.balustrade，
 *    gapBoxes / gapBoxesZ 按其实现传 [[lo,hi],…] 数组。
 *  - terrace 传 inner 跳过被副阶盖住的顶面（省 ~2.4k 格）。
 *
 * 体素（实测）：≈26k，预算 ≤40k。塔身/平座/檐全是 1–2 皮壳，无实心大盒。
 * 色彩从素：黛瓦 P.tileLead + 朱墙 + 木色栏杆，比主殿黄琉璃低半档，不抢主。
 */
import { P, L } from '../config.js';
import { roof, finial, terrace, stairs, balustrade, plaque, cullHidden } from './parts.js';

const SQ2 = Math.SQRT2;

/* ------------------------------------------------------------ 八角几何 */

/** 格 (dx,dz) 是否落在内切半径 a 的正八边形内（按格的外沿判定） */
function inOct(dx, dz, a) {
  const ax = Math.abs(dx) + 0.5, az = Math.abs(dz) + 0.5;
  return ax <= a && az <= a && ax + az <= a * SQ2;
}
/** 八角环：aIn < r <= aOut */
function inOctRing(dx, dz, aIn, aOut) {
  return inOct(dx, dz, aOut) && !inOct(dx, dz, aIn);
}
/** 该格归属的棱面（0=E,1=SE,…，偶数=四正、奇数=四斜）+ 沿面切向坐标 t */
function octFace(dx, dz) {
  const k8 = Math.round(Math.atan2(dz, dx) / (Math.PI / 4));
  const th = k8 * (Math.PI / 4);
  return { k: ((k8 % 8) + 8) % 8, t: Math.round(-dx * Math.sin(th) + dz * Math.cos(th)) };
}
/** 8 个檐角（棱顶点）：(r, 0.414r) 型坐标 */
function octCorners(r) {
  const out = [], c = Math.round(r), d = Math.round(r * (SQ2 - 1));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) out.push([sx * c, sz * d], [sx * d, sz * c]);
  return out;
}
/**
 * 八角"攒尖式"塔檐：单层闭合阶梯环（1 皮）。
 * 见文件头对 roofRing({octagon:true}) 缺陷的说明；起翘只加在 8 个檐角
 * （22.5°+k·45°，与 prism rot=π/8 同向），故檐口明显"翼起"。
 */
function octEave(w, cx, cz, yIn, aIn, aOut, upturn, tile, tileDark) {
  const R = Math.ceil(aOut);
  const span = Math.max(1, aOut - aIn);
  for (let dx = -R; dx <= R; dx++) {
    for (let dz = -R; dz <= R; dz++) {
      if (!inOctRing(dx, dz, aIn - 0.001, aOut)) continue;
      const adx = Math.abs(dx), adz = Math.abs(dz);
      const r = Math.max(adx, adz, (adx + adz) / SQ2);      // 八角意义下的"半径"
      const drop = Math.min(span, Math.round((r - aIn) * 0.85));
      const u = Math.atan2(dz, dx) / (Math.PI / 4) - 0.5;   // 檐角方向 = 整数
      const cl = Math.max(0, 1 - Math.abs(u - Math.round(u)) * 2);
      const y = yIn - drop + Math.round(upturn * cl * cl);
      const out = r > aOut - 1.05;
      const c = out ? ((dx + dz) % 2 ? P.tileEnd : tileDark) : (Math.round(r) % 2 ? tile : tileDark);
      w.set(cx + dx, y, cz + dz, c, { jitter: 1 });
    }
  }
}

/** 檐角（8 个）顶点标高，用于挂风铃 */
function octEaveCornerY(yIn, aIn, aOut, upturn) {
  const span = Math.max(1, aOut - aIn);
  return yIn - Math.min(span, Math.round((aOut - 0.5 - aIn) * 0.85)) + upturn;
}

/* ------------------------------------------------------------ 写入辅助 */

/** 八角水平环（"盘子缺心"） */
function octDisc(w, cx, cz, y, aIn, aOut, color, opts) {
  const R = Math.ceil(aOut);
  for (let dx = -R; dx <= R; dx++) {
    for (let dz = -R; dz <= R; dz++) {
      if (inOctRing(dx, dz, aIn, aOut)) w.set(cx + dx, y, cz + dz, color, opts);
    }
  }
}

/**
 * 八角壁壳：y0..y1，外皮 1 格厚（color）+ **只在洞口周围补内皮**（colorIn，露出券券厚度）。
 * 整圈内皮会被外层皮完全挡住（从洞看过去看到的仍是外皮的背面），所以只在洞边 1 格内画，
 * 省下约一半壁壳体素。openFn(dx,dz,ly) → 0 实墙 / 1 剔空 / 2 窗棂。
 */
function octShell(w, cx, cz, y0, y1, a, thick, color, colorIn, openFn) {
  const R = Math.ceil(a);
  /* 先标出"洞边柱"（含洞本身与其四邻）——只有这些位置的内皮看得见（券洞侧壁） */
  const jamb = new Set();
  if (openFn && thick > 1) {
    const isOpen = (dx, dz) => {
      if (!inOct(dx, dz, a) || inOct(dx, dz, a - thick)) return false;
      for (let y = y0; y <= y1; y++) if (openFn(dx, dz, y - y0) !== 0) return true;
      return false;
    };
    for (let dx = -R; dx <= R; dx++) {
      for (let dz = -R; dz <= R; dz++) {
        if (!isOpen(dx, dz)) continue;
        for (const [ex, ez] of [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]]) jamb.add((dx + ex) + ',' + (dz + ez));
      }
    }
  }
  for (let y = y0; y <= y1; y++) {
    const ly = y - y0;
    for (let dx = -R; dx <= R; dx++) {
      for (let dz = -R; dz <= R; dz++) {
        if (!inOctRing(dx, dz, a - thick, a)) continue;
        if (openFn) {
          const mode = openFn(dx, dz, ly);
          if (mode === 1) continue;
          if (mode === 2) { w.set(cx + dx, y, cz + dz, P.woodDark, { jitter: 0 }); continue; }
        }
        const inner = inOct(dx, dz, a - 1);
        if (inner && !jamb.has(dx + ',' + dz)) continue;     // 内皮：只在洞边保留
        w.set(cx + dx, y, cz + dz, inner ? colorIn : color);
      }
    }
  }
}

/** 八角栏杆（平座 / 副阶）：望柱 + 上下枋 + 寻杖，左右镜像对称 */
function octRail(w, cx, cz, y, a, h, color, railColor) {
  const R = Math.ceil(a);
  for (let dx = -R; dx <= R; dx++) {
    for (let dz = -R; dz <= R; dz++) {
      if (!inOctRing(dx, dz, a - 1, a)) continue;
      if ((Math.abs(dx) + Math.abs(dz)) % 3 === 0) {
        for (let k = 0; k <= h; k++) w.set(cx + dx, y + k, cz + dz, k === h ? P.marble : color);
      } else {
        w.set(cx + dx, y + 1, cz + dz, railColor);
        w.set(cx + dx, y + h - 1, cz + dz, railColor);
        w.set(cx + dx, y + h, cz + dz, color);
      }
    }
  }
}

/* ------------------------------------------------------ 门窗洞（逐层交错） */
/**
 *  i=0 首层：四正券门（厚 3 壳，可视深 3 格）+ 四斜直棂窗
 *  奇层  ：四正券窗
 *  偶层  ：八面直棂窗
 */
function openingFor(i, a, H) {
  const hw = i === 0 ? 3 : Math.max(1, Math.min(2, Math.floor(a * 0.22)));
  const winHw = Math.max(1, Math.min(2, Math.floor(a * 0.2)));
  return (dx, dz, ly) => {
    const { k, t } = octFace(dx, dz);
    const at = Math.abs(t);
    if (i === 0) {
      if (k % 2 === 0) {                                   // 券门
        if (at > hw) return 0;
        const spring = H - 6;
        if (ly > spring) return at <= hw - (ly - spring) ? 1 : 0;
        return 1;
      }
      return (at <= winHw && ly >= 3 && ly <= 8) ? (at === 0 ? 2 : 1) : 0;
    }
    if (i % 2 === 1) {                                     // 奇层四面券窗
      if (k % 2 !== 0 || at > winHw) return 0;
      const lo = Math.max(3, Math.round(H * 0.35)), spring = lo + 2;
      if (ly < lo) return 0;
      if (ly > spring) return at <= winHw - (ly - spring) ? 1 : 0;
      return at === 0 ? 2 : 1;
    }
    if (at > winHw) return 0;                               // 偶层八面直棂窗
    const lo = Math.max(3, Math.round(H * 0.3)), hi = H - Math.max(3, Math.round(H * 0.28));
    if (ly < lo || ly > hi) return 0;
    return at === 0 ? 2 : 1;
  };
}

/* ============================================================ 主函数 */
export function buildPagoda(w, cfg = L.pagoda) {
  const cx = (cfg.cx || 0) | 0, cz = cfg.cz | 0;
  const stories = cfg.stories || 7;
  const baseHalf = cfg.baseHalf || 18;
  const taper = cfg.taper || 1.9;
  const TH = cfg.terraceH || 8;
  const tile = P[cfg.tile] || P.tileLead;
  const tileDark = 0x3b4048;
  const gap = 4;                                  // 层间净高（檐顶 → 上层平座）

  /* ---- 逐层尺寸 ---- */
  const half = [], hh = [], fy = [];
  let nxt = TH;
  for (let i = 0; i < stories; i++) {
    half.push(Math.max(4.2, baseHalf - taper * i));
    hh.push(Math.max(9, Math.round((cfg.bodyH || 12) + 1.5 - 0.7 * i)));
    fy.push(nxt);
    nxt += hh[i] + gap;
  }
  const lastTop = fy[stories - 1] + hh[stories - 1];

  /* ---- 1) 台基 + 四面台阶 + 寻杖栏杆 ---- */
  const T = Math.ceil(baseHalf + 8);
  terrace(w, {
    x0: cx - T, x1: cx + T, z0: cz - T, z1: cz + T, y0: 0, y1: TH,
    face: P.stone, cap: P.marble, skirt: 2,
    inner: { x0: cx - T + 4, x1: cx + T - 4, z0: cz - T + 4, z1: cz + T - 4 },
  });
  for (const d of ['S', 'N', 'E', 'W']) {
    const alongX = d === 'S' || d === 'N';
    stairs(w, {
      dir: d,
      at: (d === 'S' ? cz + T : d === 'N' ? cz - T : d === 'E' ? cx + T : cx - T),
      x0: alongX ? cx - 7 : cx - T, x1: alongX ? cx + 7 : cx + T,
      z0: alongX ? cz - T : cz - 6, z1: alongX ? cz + T : cz + 6,
      y0: 0, y1: TH, color: P.marble, boolu: d === 'S',
    });
  }
  balustrade(w, {
    x0: cx - T, x1: cx + T, z0: cz - T, z1: cz + T, y: TH, color: P.marble, postStep: 7,
    gapBoxes: [[cx - 9, cx + 9]],
    gapBoxesZ: [[cz - 8, cz + 8]],
  });

  /* ---- 2) 首层：副阶周匝 + 八角身 + 一层檐 ---- */
  {
    const a0 = half[0], H0 = hh[0], f0 = fy[0];
    const wallTop0 = f0 + H0;
    const aV = a0 + 6;                            // 副阶柱网
    const vRin = aV - 1, vRout = aV + 2, vUp = 2;
    const vY = f0 + 7;                            // 副阶檐口标高
    const colTop = vY - 1;                       // 柱头贴住 octEave 内皮

    octDisc(w, cx, cz, f0, a0 + 0.6, aV + 2, P.marbleLine);     // 副阶地面（塔身壁厚 3，其下的地面不可见）
    octDisc(w, cx, cz, f0 - 1, a0 + 3, aV + 2, P.stone);        // 地栿

    const fe = aV * (SQ2 - 1), R = Math.ceil(aV), posts = [];
    for (let dx = -R; dx <= R; dx++) {
      for (let dz = -R; dz <= R; dz++) {
        if (!inOctRing(dx, dz, aV - 1, aV)) continue;
        if (Math.abs(octFace(dx, dz).t) < fe - 1.5) continue;   // 每面两侧
        posts.push([dx, dz]);
      }
    }
    for (const [dx, dz] of posts) w.fill(cx + dx, f0 + 1, cz + dz, cx + dx, colTop, cz + dz, P.vermilion);
    octRail(w, cx, cz, f0 + 1, aV, 3, P.stoneDark, P.wood);
    octEave(w, cx, cz, vY, vRin, vRout, vUp, tile, tileDark);
    const cvY = octEaveCornerY(vY, vRin, vRout, vUp);
    for (const [dx, dz] of octCorners(vRout)) {            // 副阶檐角风铃
      w.set(cx + dx, cvY, cz + dz, P.tileEnd, { jitter: 0 });
      w.set(cx + dx, cvY - 1, cz + dz, P.gold, { jitter: 0 });
    }

    octShell(w, cx, cz, f0 + 1, wallTop0, a0, 3, P.wallRed, P.wallRedDark, openingFor(0, a0, H0));
    octDisc(w, cx, cz, wallTop0, a0 - 0.6, a0 - 0.2, P.beamGreen);

    const ov0 = 4, y0 = wallTop0 - 1;
    octEave(w, cx, cz, y0, a0 - 1, a0 + ov0, 2, tile, tileDark);
    const cvY0 = octEaveCornerY(y0, a0 - 1, a0 + ov0, 2);
    for (const [dx, dz] of octCorners(a0 + ov0)) {              // 檐角风铃
      w.set(cx + dx, cvY0, cz + dz, P.tileEnd, { jitter: 0 });
      w.set(cx + dx, cvY0 - 1, cz + dz, P.gold, { jitter: 0 });
    }
  }

  /* ---- 3) 二层以上：平座 + 八角身 + 八角檐 ---- */
  for (let i = 1; i < stories; i++) {
    const a = half[i], H = hh[i], f = fy[i];
    const ov = Math.max(3, Math.round(5 - i * 0.45));
    const wallTop = f + H;

    octDisc(w, cx, cz, f, a + 0.6, a + 3, P.marbleLine);        // 平座面板（a 以内被塔身压住，不画）
    octDisc(w, cx, cz, f - 1, a + 1, a + 3, P.wood);            // 平座梁
    octDisc(w, cx, cz, f - 2, a + 2, a + 3, P.woodDark);        // 挑撑
    octRail(w, cx, cz, f + 1, a + 3, 4, P.wood, P.gold);        // 木栏杆 + 金寻杖

    octShell(w, cx, cz, f + 1, wallTop, a, 2, P.wallRed, P.wallRedDark, openingFor(i, a, H));
    octDisc(w, cx, cz, wallTop, a - 0.6, a - 0.2, P.beamGreen);

    if (i < stories - 1) {
      const y = wallTop - 1;
      octEave(w, cx, cz, y, a - 1, a + ov, 2, tile, tileDark);
      const cyY = octEaveCornerY(y, a - 1, a + ov, 2);
      for (const [dx, dz] of octCorners(a + ov)) {
        w.set(cx + dx, cyY, cz + dz, P.tileEnd, { jitter: 0 });
        w.set(cx + dx, cyY - 1, cz + dz, P.gold, { jitter: 0 });
      }
    } else {
      /* ---- 顶层：八角攒尖塔顶 + 塔刹 ---- */
      roof(w, {
        cx, cz, spanX: Math.round((a + ov) * 2), spanZ: Math.round((a + ov) * 2),
        baseY: wallTop, height: 11, type: 'zhuanjian', tile, tileDark,
        ridge: P.ridge, ridgeGold: P.ridgeGold, octagon: true, upturn: 3,
        tiles: true, chiHorn: false,
      });
      for (const [dx, dz] of octCorners(a + ov)) w.set(cx + dx, wallTop + 1, cz + dz, P.gold, { jitter: 0 });
      finial(w, { cx, cz, y: wallTop + 9, h: 18, kind: 'luoxian', color: P.gold, glow: true });
      // 宝珠夜光（外露十字位，避免被隐藏面剔除吃掉）
      for (const d of [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]]) {
        w.set(cx + d[0], wallTop + 26, cz + d[1], P.lanternGlow, { glow: true, jitter: 0 });
      }
    }
  }

  /* ---- 4) 塔额（二层四正壁面，避开一层檐） ---- */
  {
    const a1 = Math.ceil(half[1]) - 1, f1 = fy[1], yy = f1 + Math.round(hh[1]) - 5;
    plaque(w, { x: cx, z: cz + a1, y: yy, w: 5, h: 6, dir: 'S', bg: P.beamBlue, border: P.gold, text: cfg.name || '宝塔' });
    plaque(w, { x: cx, z: cz - a1, y: yy, w: 5, h: 6, dir: 'N', bg: P.beamBlue, border: P.gold, text: cfg.name || '宝塔' });
  }
  cullHidden(w);
  return lastTop + 27;
}

export default { buildPagoda };
