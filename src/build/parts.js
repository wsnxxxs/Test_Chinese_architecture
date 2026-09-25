import { C } from '../voxel/palette.js';
import { GY } from '../config.js';

/** 台基。style: 'plain' 普通台明；'xumizuo' 汉白玉须弥座（上下枭混出挑） */
export function platform(fr, P, ph, style = 'plain') {
  const yTop = GY + ph - 1;
  for (let v = P.v0; v < P.v1; v++) {
    for (let u = P.u0; u < P.u1; u++) {
      const edge = u === P.u0 || u === P.u1 - 1 || v === P.v0 || v === P.v1 - 1;
      for (let y = GY; y <= yTop; y++) {
        let c;
        if (y === yTop) c = edge ? C.stoneTop : ((u >> 1) + (v >> 1)) & 1 ? C.pave : C.pave2;
        else c = style === 'xumizuo' ? C.marble2 : C.stone;
        fr.set(u, y, v, c);
      }
    }
  }
  if (style === 'xumizuo') {
    for (const [y, c] of [[GY, C.marble2], [yTop, C.marble]]) {
      for (let v = P.v0 - 1; v <= P.v1; v++) {
        for (let u = P.u0 - 1; u <= P.u1; u++) {
          const ring = u === P.u0 - 1 || u === P.u1 || v === P.v0 - 1 || v === P.v1;
          if (ring) fr.set(u, y, v, c);
        }
      }
    }
  }
}

/** 踏跺（台阶），含两侧垂带；yulu 为中间御路石宽度 */
export function stairs(fr, ua, ub, vStart, dir, yTop, st = {}) {
  const sd = st.sd ?? 1;
  const n = yTop - GY;
  for (let j = 1; j <= n; j++) {
    const top = yTop - j;
    for (let q = 0; q < sd; q++) {
      const v = vStart + dir * ((j - 1) * sd + q);
      for (let u = ua - 1; u < ub + 1; u++) {
        const rail = u === ua - 1 || u === ub;
        const yy = rail ? top + 1 : top;
        const yu = st.yulu && u >= -st.yulu / 2 && u < st.yulu / 2;
        for (let y = GY; y <= yy; y++) {
          let c = C.stone;
          if (y === yy) c = rail ? C.stone : yu ? ((v + y) & 1 ? C.marble : C.marble2) : C.stoneTop;
          fr.set(u, y, v, c);
        }
        for (let y = yy + 1; y <= yTop + 1; y++) fr.set(u, y, v, 0);
      }
    }
  }
}

/** 石栏杆：栏板 1 格高，望柱 2 格高；gaps 为台阶开口 */
export function railing(fr, P, y, gaps = [], color = C.marble) {
  const cells = [];
  for (let u = P.u0; u < P.u1; u++) {
    cells.push([u, P.v0, 'back']);
    cells.push([u, P.v1 - 1, 'front']);
  }
  for (let v = P.v0 + 1; v < P.v1 - 1; v++) {
    cells.push([P.u0, v, 'side']);
    cells.push([P.u1 - 1, v, 'side']);
  }
  for (const [u, v, side] of cells) {
    if (gaps.some((g) => g.side === side && u >= g.a && u < g.b)) continue;
    const m = side === 'side' ? v - P.v0 : u >= 0 ? u : -u - 1;
    fr.set(u, y, v, color);
    if (m % 3 === 0) fr.set(u, y + 1, v, color);
  }
}

/** 额枋彩画带（2 层）+ 室内天花 */
export function beamBand(fr, hw, hd, y, colU, colV, layers = 2) {
  const dist = (x, arr) => {
    let m = 99;
    for (const c of arr) m = Math.min(m, Math.abs(x - c));
    return m;
  };
  for (let k = 0; k < layers; k++) {
    for (let v = -hd; v < hd; v++) {
      for (let u = -hw; u < hw; u++) {
        const eu = u === -hw || u === hw - 1;
        const ev = v === -hd || v === hd - 1;
        let c;
        if (!eu && !ev) c = (u + v) & 1 ? C.ceilA : C.ceilB;
        else {
          const dd = ev ? dist(u, colU) : dist(v, colV);
          if (k === 0) c = dd <= 1 ? C.beamGreen : dd === 2 ? C.gold : C.beamBlue;
          else c = dd <= 1 ? C.beamBlue : C.beamGreen;
        }
        fr.set(u, y + k, v, c);
      }
    }
  }
}

/** 斗拱层：逐层外挑，拱位（每 3 格一朵、转角必有）比补间多挑一格 */
export function dougong(fr, hw, hd, y0, K) {
  for (let k = 0; k < K; k++) {
    const y = y0 + k;
    for (let v = -hd - K; v < hd + K; v++) {
      for (let u = -hw - K; u < hw + K; u++) {
        const ou = u < -hw ? -hw - u : u >= hw ? u - hw + 1 : 0;
        const ov = v < -hd ? -hd - v : v >= hd ? v - hd + 1 : 0;
        const out = Math.max(ou, ov);
        if (out === 0) {
          fr.set(u, y, v, C.boardRed);
          continue;
        }
        let bracket;
        if (ou > 0 && ov > 0) bracket = true;
        else if (ov > 0) bracket = (u >= 0 ? u : -u - 1) % 3 === 1;
        else bracket = (v + hd) % 3 === 1 || v === hd - 1 || v === -hd;
        const reach = bracket ? k + 1 : k;
        if (out > reach) continue;
        let c;
        if (bracket) c = out === reach && k === K - 1 ? C.gold : (k + out) % 2 === 0 ? C.dgGreen : C.dgBlue;
        else c = C.dgBlue;
        fr.set(u, y, v, c);
      }
    }
  }
}

/** 红灯笼（2×2×5），挂绳向上延伸到 stringTo */
export function lantern(fr, u, v, yTop, stringTo) {
  for (let du = 0; du < 2; du++) {
    for (let dv = 0; dv < 2; dv++) {
      fr.set(u + du, yTop, v + dv, C.lanternGold);
      for (let k = 1; k <= 3; k++) fr.set(u + du, yTop - k, v + dv, C.lanternRed);
      fr.set(u + du, yTop - 4, v + dv, C.lanternGold);
    }
  }
  for (let y = yTop + 1; y < stringTo; y++) fr.set(u, y, v, C.woodDark);
  fr.w.lights.push({ ...fr.toWorld(u + 1, yTop - 2, v + 1), kind: 'lantern' });
}

/** 匾额：金边蓝底，内有金字 */
export function plaque(fr, u0, u1, v, yLo, yHi) {
  const mid = Math.floor((yLo + yHi) / 2);
  for (let u = u0; u < u1; u++) {
    for (let y = yLo; y <= yHi; y++) {
      const border = u === u0 || u === u1 - 1 || y === yLo || y === yHi;
      const glyph = y === mid && ((u - u0) & 1) === 0 && !border;
      fr.set(u, y, v, border || glyph ? C.gold : C.plaque);
    }
  }
}

/** 券门：以 uc 为中心、半宽 halfW，直墙高 h，上接半圆券；贯通 [v0,v1) */
export function carveArch(fr, uc, halfW, yb, h, v0, v1, doorV) {
  const inside = (u, y) => {
    const du = u + 0.5 - uc;
    if (Math.abs(du) >= halfW || y < yb) return false;
    const yy = y + 0.5 - (yb + h);
    return yy <= 0 || du * du + yy * yy <= halfW * halfW;
  };
  for (let u = uc - halfW - 1; u < uc + halfW + 1; u++) {
    for (let y = yb; y < yb + h + halfW + 2; y++) {
      if (inside(u, y)) {
        for (let v = v0; v < v1; v++) fr.set(u, y, v, 0);
        if (doorV !== undefined) fr.set(u, y, doorV, (u & 1) === 0 && (y & 1) === 0 ? C.gold : C.doorPanel);
      } else if (inside(u - 1, y) || inside(u + 1, y) || inside(u, y - 1)) {
        fr.set(u, y, v0, C.marble);
        fr.set(u, y, v1 - 1, C.marble);
      }
    }
  }
}

/** 石灯笼（4×4 底座） */
export function stoneLantern(fr, u, v) {
  const y = GY;
  fr.box(u, y, v, u + 4, y + 1, v + 4, C.stone);
  fr.box(u + 1, y + 1, v + 1, u + 3, y + 4, v + 3, C.stone);
  fr.box(u, y + 4, v, u + 4, y + 5, v + 4, C.stone);
  fr.box(u + 1, y + 5, v + 1, u + 3, y + 7, v + 3, C.lampLight);
  fr.box(u, y + 7, v, u + 4, y + 8, v + 4, C.brickDark);
  fr.box(u + 1, y + 8, v + 1, u + 3, y + 9, v + 3, C.stone);
  fr.w.lights.push({ ...fr.toWorld(u + 2, y + 6, v + 2), kind: 'lamp' });
}

/** 石狮（坐姿，面向 +v），占地 4×6 */
export function stoneLion(fr, u, v, cub = false) {
  const y = GY;
  const S = (a, yy, b, c) => fr.set(u + a, y + yy, v + b, c);
  for (let a = 0; a < 4; a++) {
    for (let b = 0; b < 6; b++) {
      S(a, 0, b, C.marble2);
      S(a, 1, b, b === 0 || b === 5 || a === 0 || a === 3 ? C.marble : C.marble2);
    }
  }
  for (let a = 0; a < 4; a++) {
    for (let b = 0; b < 3; b++) {
      S(a, 2, b, C.lion);
      S(a, 3, b, C.lion);
    }
    for (let b = 1; b < 5; b++) S(a, 4, b, C.lion);
    for (let b = 2; b < 5; b++) S(a, 5, b, C.lionDark);
    for (let b = 2; b < 6; b++) {
      S(a, 6, b, C.lionDark);
      S(a, 7, b, C.lionDark);
    }
    for (let b = 3; b < 5; b++) S(a, 8, b, C.lionDark);
  }
  for (const a of [0, 3]) {
    S(a, 2, 4, C.lion);
    S(a, 3, 4, C.lion);
    S(a, 2, 5, C.lion);
  }
  // 面部
  S(1, 6, 5, C.lion); S(2, 6, 5, C.lion);
  S(1, 7, 5, C.woodDark); S(2, 7, 5, C.woodDark);
  S(1, 5, 5, C.lion); S(2, 5, 5, C.lion);
  // 绣球 / 幼狮
  S(cub ? 3 : 0, 4, 5, cub ? C.lion : C.lionDark);
  S(1, 4, 0, C.lionDark);
}

/** 香炉（鼎），中心在 (0,0) 边界，占地 8×8 */
export function incenseBurner(fr) {
  const y = GY;
  fr.box(-4, y, -4, 4, y + 1, 4, C.stone);
  for (const [a, b] of [[-3, -3], [2, -3], [-3, 2], [2, 2]]) fr.box(a, y + 1, b, a + 1, y + 3, b + 1, C.bronzeDark);
  for (let k = 0; k < 3; k++) {
    for (let v = -3; v < 3; v++) {
      for (let u = -3; u < 3; u++) {
        const corner = (u === -3 || u === 2) && (v === -3 || v === 2);
        if (corner && k !== 1) continue;
        fr.set(u, y + 3 + k, v, k === 1 ? C.gold : C.bronze);
      }
    }
  }
  for (let v = -3; v < 3; v++) {
    for (let u = -3; u < 3; u++) {
      const edge = u === -3 || u === 2 || v === -3 || v === 2;
      fr.set(u, y + 6, v, edge ? C.bronzeDark : C.ember);
    }
  }
  for (const v of [-3, 2]) {
    fr.box(-1, y + 7, v, 1, y + 9, v + 1, C.bronze);
  }
  fr.w.lights.push({ ...fr.toWorld(0, y + 7, 0), kind: 'ember' });
}

/** 钟 */
export function bell(fr, yTop) {
  const prof = [1.2, 1.6, 1.9, 2.1, 2.4, 2.7];
  for (let k = 0; k < prof.length; k++) {
    const r = prof[k];
    for (let v = -3; v < 3; v++) {
      for (let u = -3; u < 3; u++) {
        if ((u + 0.5) ** 2 + (v + 0.5) ** 2 < r * r) fr.set(u, yTop - k, v, k === prof.length - 1 ? C.bronzeDark : C.bronze);
      }
    }
  }
  fr.box(-1, yTop + 1, -1, 1, yTop + 2, 1, C.woodDark);
}

/** 鼓（横置圆柱，含鼓架） */
export function drum(fr, y0) {
  const cy = y0 + 4;
  for (let u = -2; u < 2; u++) {
    for (let v = -3; v < 3; v++) {
      for (let y = y0 + 1; y < y0 + 7; y++) {
        const d2 = (v + 0.5) ** 2 + (y + 0.5 - cy) ** 2;
        if (d2 >= 2.8 * 2.8) continue;
        const face = u === -2 || u === 1;
        fr.set(u, y, v, face ? (d2 > 2.0 * 2.0 ? C.gold : C.drumSkin) : C.wallRed);
      }
    }
  }
  for (const u of [-3, 2]) fr.box(u, y0, -2, u + 1, y0 + 4, 2, C.woodDark);
}

/** 石碑（龟趺座） */
export function stele(fr, y0) {
  fr.box(-2, y0, -2, 2, y0 + 1, 2, C.brickDark);
  fr.box(-1, y0, 2, 1, y0 + 1, 3, C.brickDark);
  fr.box(-1, y0 + 1, -1, 1, y0 + 5, 0, C.marble);
  fr.box(-1, y0 + 5, -1, 1, y0 + 6, 0, C.marble2);
}
