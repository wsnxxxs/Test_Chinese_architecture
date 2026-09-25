/**
 * corridor.js — 抄手游廊（SPEC §3，A3 负责）
 *
 * 契约假设：
 *  - buildCorridor(w, seg, cfg = L.corridor)，seg 来自 L.corridors：
 *      {dir:'z', cx, z0, z1} → 走线沿 Z、横断沿 X；{dir:'x', cz, x0, x1} → 走线沿 X、横断沿 Z。
 *  - 开敞面（朝院内）：dir:'z' → 朝 x=0 一侧；dir:'x' → 朝 +Z（L.corridors 两段横廊的院落
 *    都在 +Z 侧）。可用 cfg.openSign = ±1 覆盖。东西两段用不同 cx/cz 调用即得严格镜像。
 *  - 对称处理：柱列按 run0..run1 等分（不累加 spacing）、漏窗按到走线中点的距离取相位，
 *    因此 ±x 两段镜像后柱子与漏窗位置完全重合。
 *  - 顶部两坡瓦自己拼（1 格厚阶梯壳，檐口与脊 2 格厚）：单段长 96 格，若走 parts.roof
 *    的实心坡面会吃掉整段预算；这里按 SPEC"屋顶用单/双层厚阶梯壳"执行。
 *  - 坐凳栏杆走 parts.railing，檐下悬灯走 props.lantern（glow 真写入）。
 *
 * 体素：长段（96 格）≈6k，短段（32 格）≈2.2k。
 */
import { L, P } from '../config.js';
import { railing, beam, beamZ, cullHidden } from './parts.js';
import { lantern } from './props.js';

export function buildCorridor(w, seg, cfg = L.corridor) {
  const width = (cfg.width || 9) | 0;
  const colH = (cfg.colH || 12) | 0;
  const spacing = Math.max(4, (cfg.spacing || 7) | 0);
  const halfW = Math.max(2, Math.floor(width / 2));        // 4
  const dir = seg.dir === 'x' ? 'x' : 'z';
  const wallY0 = 2;                                         // 外墙底（台面以上）
  const wallH = Math.max(6, colH - 3);                     // 外墙高
  const colTop = wallY0 + colH - 1;                        // 柱头 / 额枋标高
  const ov = 2;                                            // 出檐
  const outer = halfW + ov;                                // 檐口横向界（6）
  const rise = Math.max(3, Math.round(colH * 0.34));        // 檐口到脊（4）
  const eaveY = colTop - 1;                                 // 檐口上皮（正好压在柱头/额枋上）
  const ridgeY = eaveY + rise;

  const p0 = dir === 'z' ? seg.z0 : seg.x0;
  const p1 = dir === 'z' ? seg.z1 : seg.x1;
  const fixed = (dir === 'z' ? seg.cx : seg.cz) | 0;
  const openSign = cfg.openSign !== undefined ? (cfg.openSign >= 0 ? 1 : -1)
    : (dir === 'z' ? (fixed < 0 ? 1 : -1) : 1);

  /** p = 沿线坐标，u = 横向坐标（+u 朝院内开敞，-u 为墙）→ 世界 (x,z) */
  const pt = (p, u) => (dir === 'z' ? [fixed + openSign * u, p] : [p, fixed + openSign * u]);
  /** 方盒（沿走线的连续段） */
  const slab = (pa, pb, ua, ub, y0, y1, color) => {
    const [x0, z0] = pt(pa, ua), [x1, z1] = pt(pb, ub);
    w.fill(Math.min(x0, x1), y0, Math.min(z0, z1), Math.max(x0, x1), y1, Math.max(z0, z1), color);
  };
  /** 剖面标高：微微反宇（近脊陡、近檐平） */
  const yOf = (u) => {
    const t = Math.min(1, Math.abs(u) / outer);
    return eaveY + Math.round(rise * Math.pow(1 - t, 1.45));
  };

  const a0 = Math.min(p0, p1), a1 = Math.max(p0, p1);
  const mid = (a0 + a1) / 2;
  const run0 = a0 + 1, run1 = a1 - 1;                      // 两端各留 1 格接口

  /* ---------- 1) 石台 + 地面（1 皮面板 + 外侧阶边） ---------- */
  slab(run0, run1, -halfW, halfW, 1, 1, P.flagstone);
  slab(a0, a1, halfW + 1, halfW + 1, 0, 0, P.stoneDark);
  slab(a0, a1, -halfW - 1, -halfW - 1, 0, 0, P.stoneDark);

  /* ---------- 2) 院外侧墙（1 皮 + 下碱 2 皮 + 漏窗） ---------- */
  const winEvery = spacing * 2, winPhase = Math.max(2, Math.round(spacing * 0.5));
  for (let p = a0; p <= a1; p++) {
    const dd = Math.abs(p - mid);
    const q = ((dd - winPhase) % winEvery + winEvery) % winEvery;
    const isWin = q <= 2 && dd > winPhase * 0.5 && dd < (a1 - a0) / 2 - 2;
    for (let u = -halfW; u <= -halfW + 1; u++) {
      const [x, z] = pt(p, u);
      for (let y = wallY0; y <= wallY0 + wallH; y++) {
        if (isWin && y >= wallY0 + 3 && y <= wallY0 + 6) {
          if (u === -halfW && (p & 1) === 0) w.set(x, y, z, P.wood, { jitter: 0 });  // 竖棂
          continue;
        }
        if (u === -halfW + 1 && y > wallY0) continue;                                  // 只留 1 皮墙基
        w.set(x, y, z, y <= wallY0 + 2 ? P.wallBase : P.wallRed);
      }
    }
    // 墙帽：一皮青瓦 + 外挑一滴水
    const [cx1, cz1] = pt(p, -halfW);
    w.set(cx1, wallY0 + wallH + 1, cz1, P.tileGrayDark, { jitter: 0 });
    const [cx2, cz2] = pt(p, -halfW - 1);
    w.set(cx2, wallY0 + wallH, cz2, (p & 1) ? P.tileEnd : P.tileGray, { jitter: 0 });
  }

  /* ---------- 3) 柱列（朝院内一侧，等分 → 镜像严格重合） ---------- */
  const n = Math.max(1, Math.round((run1 - run0) / spacing));
  const bays = [];
  for (let i = 0; i <= n; i++) bays.push(Math.round(run0 + (i * (run1 - run0)) / n));
  for (const p of bays) {
    const [x, z] = pt(p, halfW);
    w.set(x, 1, z, P.stoneDark);                                            // 柱础（1 格，柱身正下方）
    for (let y = wallY0; y <= colTop - 1; y++) w.set(x, y, z, P.vermilion);  // 檐柱 1×1（游廊小柱实径 ≈0.3m）
    w.set(x, colTop, z, P.gold, { jitter: 0 });                             // 柱头坐斗（其上皮即额枋，天然收头）
  }

  /* ---------- 4) 额枋 + 挂落 ---------- */
  if (dir === 'z') {
    const [bx] = pt(run0, halfW);
    beamZ(w, { z0: run0, z1: run1, y: colTop - 1, x: bx, size: 2, color: P.beamGreen, paint: false });
    beamZ(w, { z0: run0, z1: run1, y: colTop - 4, x: bx, size: 1, color: P.wood, paint: false });
  } else {
    const [, bz] = pt(run0, halfW);
    beam(w, { x0: run0, x1: run1, y: colTop - 1, z: bz, size: 2, color: P.beamGreen, paint: false });
    beam(w, { x0: run0, x1: run1, y: colTop - 4, z: bz, size: 1, color: P.wood, paint: false });
  }

  /* ---------- 5) 坐凳栏杆（开敞面；parts.railing 的 E/W 向必须显式给 at） ---------- */
  {
    const rdir = dir === 'z' ? (openSign > 0 ? 'E' : 'W') : (openSign > 0 ? 'S' : 'N');
    const [ax, az] = pt(run0, halfW), [bx, bz] = pt(run1, halfW);
    railing(w, {
      dir: rdir,
      at: dir === 'z' ? ax : az,
      x0: Math.min(ax, bx), x1: Math.max(ax, bx),
      z0: Math.min(az, bz), z1: Math.max(az, bz),
      y: wallY0, color: P.wood,
    });
  }

  /* ---------- 6) 顶部两坡瓦（1 皮阶梯壳；檐口 / 脊处 2 皮） ---------- */
  for (let p = a0; p <= a1; p++) {
    const tuck = (p <= a0) || (p >= a1);                     // 端头收 1 皮檐
    for (let u = -outer; u <= outer; u++) {
      if (tuck && Math.abs(u) >= outer) continue;
      const y = yOf(u);
      const [x, z] = pt(p, u);
      let col;
      if (Math.abs(u) === outer) col = (p & 1) ? P.tileEnd : P.tileGrayDark;         // 瓦当/滴水
      else if (u === 0) col = P.ridge;                                               // 正脊
      else col = (u & 1) ? P.tileGray : P.tileGrayDark;                              // 瓦垄
      w.set(x, y, z, col, { jitter: 1 });
      if (Math.abs(u) === outer) w.set(x, y - 1, z, P.tileGrayDark);                 // 檐口厚 2 皮
      else if (u === 0) w.set(x, y - 1, z, P.wood);                                  // 脊下连檐
    }
  }

  /* ---------- 7) 每 3 跨悬一灯（发光；灯位取"走线中点 ± n×3跨"，整数且关于中点对称 → 镜像段重合） ---------- */
  const lampH = 4;
  const cM = (a0 + a1) >> 1;
  const step3 = spacing * 3;
  const lampP = new Set();
  for (let d = Math.round(step3 / 2); cM + d <= run1 - 1 && cM - d >= run0 + 1; d += step3) {
    lampP.add(cM + d); lampP.add(cM - d);
  }
  if (lampP.size === 0) lampP.add(cM);
  for (const p of lampP) {
    const [x, z] = pt(p, halfW - 2);
    lantern(w, { x, y: colTop - (lampH + 5), z, r: 2, h: lampH, glow: true });
  }
  cullHidden(w);
  return { colTop, ridgeY, bays: bays.length };
}
export default { buildCorridor };
