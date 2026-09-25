import { C } from '../voxel/palette.js';
import { GY } from '../config.js';
import { Frame } from '../voxel/world.js';
import { TILES, roofHip, roofXieshan, roofYingshan, roofPyramid, roofSkirt, roofOct, octInfo } from './roofs.js';
import { platform, stairs, railing, beamBand, dougong, lantern, plaque, carveArch, bell, drum } from './parts.js';

/**
 * 通用殿堂生成器（局部坐标，正面朝 +v）。
 * 结构自下而上：台基/踏跺/栏杆 → 柱网与墙身、隔扇门窗 → 额枋彩画 → 斗拱 → (重檐下檐 + 上层屋身) → 屋顶。
 *
 * s: {
 *   hw, hd          屋身半面宽 / 半进深（格）
 *   bays            开间宽度数组（奇数间，总和 = 2*hw）
 *   sideBays        山面开间数
 *   porch           前廊进深
 *   colH            柱高
 *   facade          'doors' 隔扇门窗 | 'open' 敞开（亭/楼） | 'gate' 券门山门
 *   ph, pm*, platform, rail, stairs  台基参数（或 baseY 直接给定地面高度）
 *   K, ov           斗拱层数 / 出檐
 *   roof            'hip' | 'xieshan' | 'yingshan' | 'pyramid'
 *   tiles           'yellow' | 'green' | 'grey'
 *   double          重檐 { inset, R, wallH, K, ov }
 *   plaque, lanterns, arches
 * }
 */
export function buildHall(fr, s) {
  const { hw, hd, colH } = s;
  const porch = s.porch ?? 0;
  const K = s.K ?? 2;
  const ov = s.ov ?? K + 3;
  const t = TILES[s.tiles ?? 'grey'];

  // —— 台基 ——
  let y0;
  if (s.baseY !== undefined) y0 = s.baseY;
  else {
    const ph = s.ph ?? 2;
    const pmS = s.pmSide ?? s.pm ?? 2;
    const pmF = s.pmFront ?? s.pm ?? 2;
    const pmB = s.pmBack ?? s.pm ?? 2;
    y0 = GY + ph;
    const P = { u0: -hw - pmS, u1: hw + pmS, v0: -hd - pmB, v1: hd + pmF };
    platform(fr, P, ph, s.platform ?? 'plain');
    const gaps = [];
    for (const st of s.stairs ?? []) {
      const half = st.w / 2;
      if (st.side === 'front') stairs(fr, -half, half, P.v1, 1, y0 - 1, st);
      else stairs(fr, -half, half, P.v0 - 1, -1, y0 - 1, st);
      gaps.push({ side: st.side, a: -half - 1, b: half + 1 });
    }
    if (s.rail) railing(fr, P, y0, gaps);
  }

  // —— 柱网 ——
  const ub = [-hw];
  for (const b of s.bays) ub.push(ub[ub.length - 1] + b);
  const colU = ub.map((b) => (b < 0 ? b : b - 1));
  const nSide = s.sideBays ?? 2;
  const colV = [];
  for (let i = 0; i <= nSide; i++) colV.push(Math.min(-hd + Math.round((i * 2 * hd) / nSide), hd - 1));
  const colUSet = new Set(colU);
  const colVSet = new Set(colV);
  const vf = hd - 1 - porch; // 前檐墙（门窗）所在行
  const yb = y0 + colH;
  const column = (u, v) => {
    for (let y = y0; y < yb; y++) fr.set(u, y, v, y === y0 ? C.colBase : C.columnRed);
  };

  if (s.facade !== 'open') {
    for (let y = y0; y < yb; y++) {
      for (let v = -hd; v <= vf; v++) {
        for (let u = -hw; u < hw; u++) {
          const eu = u === -hw || u === hw - 1;
          const ev = v === -hd || v === vf;
          let c;
          if (!eu && !ev) c = C.wallRed;
          else if (s.facade !== 'gate' && ((eu && (colVSet.has(v) || v === vf)) || (ev && colUSet.has(u)))) {
            c = y === y0 ? C.colBase : C.columnRed;
          } else c = y < y0 + 2 ? C.wallBase : C.wallRed;
          fr.set(u, y, v, c);
        }
      }
    }
  }

  if (s.facade === 'doors') {
    const nb = s.bays.length;
    const mid = (nb - 1) / 2;
    for (let i = 0; i < nb; i++) {
      const ua = colU[i] + 1;
      const ue = colU[i + 1];
      const width = ue - ua;
      const door = Math.abs(i - mid) <= (nb >= 5 ? 1 : 0);
      for (let u = ua; u < ue; u++) {
        const divider = door && width % 2 === 1 && u - ua === (width - 1) / 2;
        for (let k = 0; k < colH; k++) {
          const y = y0 + k;
          let c;
          // 隔扇：裙板 + 格心（窗纸被棂条分成小格）
          const bar = (k % 3 === 1) || u === ua || u === ue - 1;
          if (door) {
            if (k < 2) c = C.doorPanel;
            else if (k === colH - 3 || divider) c = C.woodRed;
            else c = bar ? C.lattice : C.paper;
          } else {
            if (k < 3) c = C.wallBase;
            else if (k === 3 || k === colH - 3) c = C.woodRed;
            else c = bar ? C.lattice : C.paper;
          }
          fr.set(u, y, vf, c);
        }
      }
    }
  }

  // 廊柱 / 敞厅柱
  if (s.facade === 'open') {
    for (const u of colU) { column(u, -hd); column(u, hd - 1); }
    for (const v of colV) { column(-hw, v); column(hw - 1, v); }
  } else if (porch > 0) {
    for (const u of colU) column(u, hd - 1);
    column(-hw, hd - 1);
    column(hw - 1, hd - 1);
  }

  // —— 券门（山门/城台） ——
  if (s.facade === 'gate') {
    for (const a of s.arches ?? []) {
      carveArch(fr, a.uc, a.halfW, y0, a.h, -hd, hd, a.door ? 0 : undefined);
      if (a.uc !== 0) carveArch(fr, -a.uc, a.halfW, y0, a.h, -hd, hd, a.door ? 0 : undefined);
    }
  }

  // —— 额枋 + 斗拱 ——
  beamBand(fr, hw, hd, yb, colU, colV, 2);
  const yd = yb + 2;
  dougong(fr, hw, hd, yd, K);
  let yE = yd + K;
  const core = { A: hw + K, B: hd + K, bottom: yE, color: C.woodRed };

  let rhw = hw;
  let rhd = hd;
  let rK = K;
  let rov = ov;
  let plaqueSpot = { u0: -3, u1: 3, v: hd, yLo: yb, yHi: yb + 2 };

  // —— 重檐 ——
  if (s.double) {
    const D = s.double;
    const Ai = hw - D.inset;
    const Bi = hd - D.inset;
    roofSkirt(fr, { A: hw + ov, B: hd + ov, Ai, Bi, yE, R: D.R, t, core });
    const skirtTop = Math.round(yE + D.R);
    const yw1 = skirtTop + D.wallH;
    for (let y = yE; y <= yw1; y++) {
      for (let v = -Bi; v < Bi; v++) {
        for (let u = -Ai; u < Ai; u++) {
          const edge = u === -Ai || u === Ai - 1 || v === -Bi || v === Bi - 1;
          let c = C.wallRed;
          if (edge && y > skirtTop && (v === Bi - 1 || v === -Bi) && (u + 1) % 4 !== 0) c = (u & 3) === 1 ? C.lattice : C.paper;
          if (edge && ((u === -Ai || u === Ai - 1) && (v === -Bi || v === Bi - 1))) c = C.columnRed;
          fr.set(u, y, v, c);
        }
      }
    }
    const K2 = D.K ?? 2;
    beamBand(fr, Ai, Bi, yw1 + 1, [-Ai, Ai - 1], [-Bi, Bi - 1], 1);
    dougong(fr, Ai, Bi, yw1 + 2, K2);
    yE = yw1 + 2 + K2;
    rhw = Ai;
    rhd = Bi;
    rK = K2;
    rov = D.ov ?? ov - 1;
    plaqueSpot = { u0: -2, u1: 2, v: Bi, yLo: skirtTop + 1, yHi: yw1 + 2 };
  }

  // —— 屋顶 ——
  const A = rhw + rov;
  const B = rhd + rov;
  const coreR = { A: rhw + rK, B: rhd + rK, bottom: yE, color: C.woodRed };
  const R = s.R ?? Math.round(B * 0.72);
  let hAt;
  switch (s.roof) {
    case 'hip':
      hAt = roofHip(fr, { A, B, yE, R, t, core: coreR });
      break;
    case 'xieshan':
      hAt = roofXieshan(fr, { A, B, s: s.gable, yE, R, t, core: coreR });
      break;
    case 'yingshan':
      hAt = roofYingshan(fr, { A: rhw + rK, B, yE, R, t, core: coreR, wallBottom: y0, bodyHd: hd, wallColor: C.wallRed });
      break;
    case 'pyramid':
      hAt = roofPyramid(fr, { A: Math.max(A, B), yE, R, t, core: coreR });
      break;
    default:
      throw new Error('unknown roof ' + s.roof);
  }

  // —— 匾额与灯笼 ——
  if (s.plaque) plaque(fr, plaqueSpot.u0, plaqueSpot.u1, plaqueSpot.v, plaqueSpot.yLo, plaqueSpot.yHi);
  if (s.lanterns) {
    let L;
    if (s.facade === 'gate') L = -6;
    else {
      const nb = s.bays.length;
      const bi = nb >= 3 ? (nb - 1) / 2 - 1 : 0;
      L = Math.floor((colU[bi] + 1 + colU[bi + 1]) / 2) - 1;
    }
    const inPorch = porch >= 2;
    const lv = inPorch ? vf + 1 : hd;
    const topY = yb - 2;
    lantern(fr, L, lv, topY, inPorch ? yb : yd);
    lantern(fr, -L - 2, lv, topY, inPorch ? yb : yd);
    if (s.facade === 'gate') {
      lantern(fr, L, -hd - 2, topY, yd);
      lantern(fr, -L - 2, -hd - 2, topY, yd);
    }
  }

  const peak = hAt(0, 0);
  return { y0, yb, yE, peak: peak > 0 ? peak : yE + R };
}

/** 钟楼 / 鼓楼：砖砌城台（券洞）+ 重檐歇山敞楼 */
export function buildTower(world, cx, cz, facing, kind) {
  const fr = new Frame(world, cx, cz, facing);
  const hb = 9;
  const H = 8;
  for (let y = GY; y < GY + H; y++) {
    for (let v = -hb; v < hb; v++) {
      for (let u = -hb; u < hb; u++) {
        const edge = u === -hb || u === hb - 1 || v === -hb || v === hb - 1;
        let c;
        if (y === GY + H - 1) c = edge ? C.stoneTop : ((u >> 1) + (v >> 1)) & 1 ? C.pave : C.pave2;
        else if (y < GY + 2) c = C.brickDark;
        else c = C.brick;
        fr.set(u, y, v, c);
      }
    }
  }
  carveArch(fr, 0, 2, GY, 3, -hb, hb);
  railing(fr, { u0: -hb, u1: hb, v0: -hb, v1: hb }, GY + H, [], C.woodRed);
  const info = buildHall(fr, {
    hw: 6, hd: 6, bays: [4, 4, 4], sideBays: 3, colH: 7, facade: 'open',
    baseY: GY + H, K: 2, ov: 5, roof: 'xieshan', tiles: 'grey', R: 6,
    double: { inset: 2, R: 3, wallH: 2, K: 2, ov: 5 }, plaque: true,
  });
  // 钟 / 鼓
  if (kind === 'bell') bell(fr, info.yb - 1);
  else drum(fr, info.y0);
  return info;
}

/** 八角七层楼阁式宝塔 */
export function buildPagoda(world, cx, cz) {
  const fr = new Frame(world, cx, cz, 'S');
  const t = TILES.green;
  const baseA = 13;
  const baseH = 3;
  for (let v = -15; v < 15; v++) {
    for (let u = -15; u < 15; u++) {
      const { m1 } = octInfo(u + 0.5, v + 0.5);
      for (let k = 0; k < baseH; k++) {
        const a = k === 0 ? baseA + 1 : baseA;
        if (m1 >= a) continue;
        let c = C.marble2;
        if (k === baseH - 1) c = m1 >= a - 1 ? C.marble : ((u >> 1) + (v >> 1)) & 1 ? C.pave : C.pave2;
        fr.set(u, GY + k, v, c);
      }
      // 塔基栏杆
      if (m1 >= baseA - 1 && m1 < baseA && !(v > 0 && u >= -4 && u < 4)) {
        fr.set(u, GY + baseH, v, C.marble);
        if (((u + v) & 3) === 0) fr.set(u, GY + baseH + 1, v, C.marble);
      }
    }
  }
  stairs(fr, -3, 3, baseA, 1, GY + baseH - 1, {});

  let y = GY + baseH;
  let a = 8.5;
  const N = 7;
  let peak = y;
  for (let i = 0; i < N; i++) {
    const bh = i === 0 ? 8 : 5;
    const n = Math.ceil(a) + 1;
    for (let k = 0; k < bh; k++) {
      const yy = y + k;
      for (let v = -n; v < n; v++) {
        for (let u = -n; u < n; u++) {
          const uc = u + 0.5, vc = v + 0.5;
          const { m1, m2, face } = octInfo(uc, vc);
          if (m1 >= a) continue;
          let c = C.pagodaWall;
          if (m1 >= a - 1.2) {
            const tan = face === 0 ? vc : face === 1 ? uc : (uc * vc > 0 ? uc - vc : uc + vc) * Math.SQRT1_2;
            if (m1 - m2 < 0.5) c = C.columnRed;
            else if (k === bh - 1) c = C.beamGreen;
            else if (k === 0) c = C.wallBase;
            else if (face !== 2 && Math.abs(tan) < 1.6 && k <= bh - 2) c = k === bh - 2 ? C.woodRed : (u + yy) & 1 ? C.lattice : C.paper;
            else if (face === 2 && Math.abs(tan) < 1.1 && k >= 2 && k <= bh - 3) c = (u + v + yy) & 1 ? C.lattice : C.paper;
          }
          fr.set(u, yy, v, c);
        }
      }
    }
    y += bh;
    // 斗拱（两跳）
    for (let k = 0; k < 2; k++) {
      const n2 = Math.ceil(a) + 3;
      for (let v = -n2; v < n2; v++) {
        for (let u = -n2; u < n2; u++) {
          const { m1 } = octInfo(u + 0.5, v + 0.5);
          const reach = a + k + ((u + v) & 1 ? 1 : 0.35);
          if (m1 >= reach) continue;
          const c = m1 < a ? C.boardRed : k === 1 && (u + v) & 1 ? C.gold : k === 0 ? C.dgGreen : C.dgBlue;
          fr.set(u, y + k, v, c);
        }
      }
    }
    y += 2;
    const ao = a + 4.5;
    if (i < N - 1) {
      const aNext = a - 0.75;
      const R = 3;
      roofOct(fr, { a: ao, ai: aNext, W: ao - aNext, yE: y, R, U: 2, t, core: { a: a + 2, bottom: y, color: C.woodRed } });
      y = Math.round(y + R) + 1;
      a = aNext;
    } else {
      const R = 8;
      const hAt = roofOct(fr, { a: ao, yE: y, R, U: 2.2, t, core: { a: a + 2, bottom: y, color: C.woodRed } });
      const top = hAt(0, 0);
      spire(fr, top);
      peak = top + 12;
    }
  }
  world.lights.push({ ...fr.toWorld(0, GY + 6, 9), kind: 'pagoda' });
  return { peak };
}

function disc(fr, y, r, c) {
  for (let v = -3; v < 3; v++) for (let u = -3; u < 3; u++) if ((u + 0.5) ** 2 + (v + 0.5) ** 2 < r * r) fr.set(u, y, v, c);
}

/** 塔刹：覆钵 + 相轮 + 宝珠 */
function spire(fr, top) {
  disc(fr, top + 1, 2.2, C.bronze);
  disc(fr, top + 2, 1.9, C.bronze);
  for (let k = 3; k < 11; k++) disc(fr, top + k, 1.0, C.gold);
  for (const k of [4, 6, 8]) disc(fr, top + k, 2.2, C.gold);
  disc(fr, top + 10, 1.6, C.goldBright);
  disc(fr, top + 11, 1.0, C.goldBright);
}
