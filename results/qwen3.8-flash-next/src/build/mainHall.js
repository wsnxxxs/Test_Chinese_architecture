/**
 * mainHall.js —— 大雄宝殿（A2）。全场景核心：三重台基 + 每层栏杆/御路台阶 +
 * 副阶周匝柱网 + 重檐庑殿（下檐 + 上檐）+ 檐下与暗层两处斗拱列 + 朱墙（山面/后檐）
 * + 正面六扇格门 + 东西山墙壸眼窗 + 匾额「大雄宝殿」+ 前月台 + 台基四角望柱。黄琉璃瓦。
 *
 * 假设（详见 parts.js 顶部）：
 *  - cfg 缺省 L.mainHall；terraces[].x/z 是半跨，台面在 y1（体素占 y0..y1-1）。
 *  - L 给出 lowerEaveY=47 / upperEaveY=69 / colH=20 / upperColH=17；
 *    重檐之间由下檐阶梯壳（baseY 47 + h 10 = 57 顶环）承接上檐童柱，
 *    因此上檐柱的**可见段**取 57→(upperEaveY-12)，其余高度让给额枋 + 三层出跳斗拱。
 *  - 体素用量以"只画可见皮"为原则控制（墙厚 1、台基侧面 1、顶面用 inner 挖可见环带）。
 */
import { L, P } from '../config.js';
import {
  ROOF_TYPE, terrace, stairs, balustrade, columns, beam, beamZ,
  dougongRow, wallPanel, doorPanel, windowPanel, plaque, roof, finial, cornice,
  cullHidden,
} from './parts.js';

export function buildMainHall(w, cfg = L.mainHall) {
  const cx = (cfg.cx ?? 0) | 0;
  const cz = (cfg.cz ?? 0) | 0;
  const T = cfg.terraces;
  const hall = cfg.hall;                              // 副阶外檐柱网（±46 / ±36）
  const core = cfg.core;                              // 金柱 / 殿身墙（±38 / ±30）
  const hx = (v) => cx + v;
  const hz = (v) => cz + v;
  const tile = cfg.tile;                              // 'glazedYellow' 或数值，roof 内归一
  const tileDark = P.glazedYellowDark;
  const yTop = T[T.length - 1].y1;                    // 殿身受力面 = 21

  /* ---------------- 1. 三重台基 + 栏杆 + 御路台阶 ---------------- */
  for (let i = 0; i < T.length; i++) {
    const t = T[i];
    const nxt = T[i + 1];
    /* 顶面只出"可见环带"：
       - 有上层台基时 → 挖掉上层投影（被上层侧壁+顶面完全封住）；
       - 最上一层 → 只挖殿身(核心筒)投影，**副阶柱廊那一圈必须留地面**，
         否则从柱间/柱门看进去就是台基内部的空腔（实测缺 2092 格 = 穿帮）。 */
    const inner = nxt
      ? { x0: hx(-nxt.x), x1: hx(nxt.x), z0: hz(-nxt.z), z1: hz(nxt.z) }
      : { x0: hx(core.x0), x1: hx(core.x1), z0: hz(core.z0), z1: hz(core.z1) };
    terrace(w, {
      x0: hx(-t.x), x1: hx(t.x), z0: hz(-t.z), z1: hz(t.z),
      y0: t.y0, y1: t.y1, inner,
      skirt: i === 0 ? 2 : 0, thick: 1,
    });
    const half = 13 - i * 2;                              // 台阶面阔逐级收窄
    balustrade(w, {
      x0: hx(-t.x + 1), x1: hx(t.x - 1), z0: hz(-t.z + 1), z1: hz(t.z - 1),
      y: t.y1, postStep: 8, gapBoxes: [[cx - half, cx + half]],
    });
    stairs(w, {
      dir: 'S', at: hz(t.z + 1), x0: cx - half, x1: cx + half,
      y0: t.y0, y1: t.y1, boolu: true, booluW: 7,
    });
    // 台基四角望柱（角台 + 宝珠柱头）
    for (const [ax, az] of [[hx(-t.x + 1), hz(-t.z + 1)], [hx(t.x - 1), hz(-t.z + 1)],
      [hx(-t.x + 1), hz(t.z - 1)], [hx(t.x - 1), hz(t.z - 1)]]) {
      w.fill(ax - 1, t.y1, az - 1, ax + 1, t.y1 + 2, az + 1, P.marble);
      w.set(ax, t.y1 + 3, az, P.marbleLine);
      w.set(ax, t.y1 + 4, az, P.gold);
    }
    if (i === T.length - 1) {                             // 殿后两侧小台阶
      for (const s of [-1, 1]) {
        stairs(w, { dir: 'N', at: hz(-t.z - 1), x0: cx + s * 30 - 5, x1: cx + s * 30 + 5, y0: t.y0, y1: t.y1, boolu: false });
      }
    }
  }

  /* ---------------- 2. 前月台（丹陛） ---------------- */
  /* 月台四面开敞、台面要站香炉/石碑并供栏杆围合 → 顶面必须整层实铺（不能用 inner 挖空） */
  const t0 = T[0], yt = 4, mX = 26, mz0 = t0.z + 1, mz1 = t0.z + 20;
  terrace(w, {
    x0: cx - mX, x1: cx + mX, z0: hz(mz0), z1: hz(mz1), y0: 0, y1: yt,
    skirt: 1, cap: P.flagstone,
  });
  balustrade(w, {
    x0: cx - mX + 1, x1: cx + mX - 1, z0: hz(mz0), z1: hz(mz1 - 1),
    y: yt, postStep: 7, gapBoxes: [[cx - 9, cx + 9]],
  });
  stairs(w, { dir: 'S', at: hz(mz1 + 1), x0: cx - 11, x1: cx + 11, y0: 0, y1: yt, boolu: true, booluW: 7 });
  stairs(w, { dir: 'S', at: hz(mz0 + 3), x0: cx - 9, x1: cx + 9, y0: yt, y1: t0.y1, boolu: false });

  /* ---------------- 3. 副阶周匝柱网 + 额枋 + 檐下斗拱 ---------------- */
  const xs = [hx(-46), hx(-35), hx(-23), hx(-12), cx, hx(12), hx(23), hx(35), hx(46)];
  const zs = [hz(-36), hz(-18), hz(0), hz(18), hz(36)];
  columns(w, {
    x0: hx(hall.x0), x1: hx(hall.x1), z0: hz(hall.z0), z1: hz(hall.z1),
    y0: yTop, h: cfg.colH, size: 3, xs, zs,
  });
  const colTop = yTop + cfg.colH - 1;                     // 40
  for (const [yy, sz] of [[colTop + 1, 2], [colTop + 3, 2]]) {
    beam(w, { x0: hx(hall.x0), x1: hx(hall.x1), y: yy, z: hz(hall.z1), size: sz });
    beam(w, { x0: hx(hall.x0), x1: hx(hall.x1), y: yy, z: hz(hall.z0), size: sz });
    beamZ(w, { z0: hz(hall.z0), z1: hz(hall.z1), y: yy, x: hx(hall.x0), size: sz });
    beamZ(w, { z0: hz(hall.z0), z1: hz(hall.z1), y: yy, x: hx(hall.x1), size: sz });
  }
  const dgY = colTop + 4;                                  // 44：斗拱顶收进下檐阶梯壳
  dougongRow(w, { dir: 'S', x0: hx(hall.x0), x1: hx(hall.x1), at: hz(hall.z1), y: dgY, xs: xs.filter((x) => Math.abs(x - cx) > 11), step: 8, tiers: 2 });
  dougongRow(w, { dir: 'N', x0: hx(hall.x0), x1: hx(hall.x1), at: hz(hall.z0), y: dgY, step: 8, tiers: 2 });
  dougongRow(w, { dir: 'E', z0: hz(hall.z0), z1: hz(hall.z1), at: hx(hall.x1), y: dgY, step: 8, tiers: 2 });
  dougongRow(w, { dir: 'W', z0: hz(hall.z0), z1: hz(hall.z1), at: hx(hall.x0), y: dgY, step: 8, tiers: 2 });
  cornice(w, {
    x0: hx(hall.x0 - 6), x1: hx(hall.x1 + 6), z0: hz(hall.z0 - 6), z1: hz(hall.z1 + 6),
    y: cfg.lowerEaveY - 2, out: 2, step: 2,
  });

  /* ---------------- 4. 殿身朱墙 + 六扇格门 + 窗 ---------------- */
  const wallX0 = hx(core.x0), wallX1 = hx(core.x1);
  const wallZ0 = hz(core.z0), wallZ1 = hz(core.z1);
  const doorH = 20;
  const doors = [-30, -18, -6, 6, 18, 30];
  const holes = doors.map((d) => [hx(d) - 5, hx(d) + 5, yTop, yTop + doorH - 1]);
  const lowTop = cfg.lowerEaveY;                           // 47（47~57 之间由下檐坡面遮挡，不重复砌墙）
  wallPanel(w, { dir: 'E', at: wallX1, x0: wallZ0, x1: wallZ1, y0: yTop, y1: lowTop, thick: 1 });
  wallPanel(w, { dir: 'W', at: wallX0, x0: wallZ0, x1: wallZ1, y0: yTop, y1: lowTop, thick: 1 });
  wallPanel(w, { dir: 'N', at: wallZ0, x0: wallX0, x1: wallX1, y0: yTop, y1: lowTop, thick: 1 });
  wallPanel(w, { dir: 'S', at: wallZ1, x0: wallX0, x1: wallX1, y0: yTop, y1: lowTop, thick: 1, holes });

  const bandA = lowTop + 10, bandB = cfg.upperEaveY - 8;  // 57..61：暗层可见墙带
  for (const [d, at, a0, a1] of [
    ['E', wallX1, wallZ0, wallZ1], ['W', wallX0, wallZ0, wallZ1],
    ['N', wallZ0, wallX0, wallX1], ['S', wallZ1, wallX0, wallX1],
  ]) {
    wallPanel(w, { dir: d, at, x0: a0, x1: a1, y0: bandA, y1: bandB, thick: 1, baseH: 0 });
  }
  for (const d of doors) {
    doorPanel(w, { x: hx(d), z: wallZ1, y0: yTop, h: doorH, w: 9, style: 'lattice', dir: 'S', glow: Math.abs(d) < 10 });
  }
  for (const s of [-1, 1]) {                               // 东西山墙壸眼窗
    windowPanel(w, { x: hx(core.x1 * s), z: cz, y0: yTop + 6, h: 12, w: 7, style: 'flame', dir: s > 0 ? 'E' : 'W' });
    windowPanel(w, { x: hx(core.x1 * s), z: cz + 10, y0: bandA + 1, h: 4, w: 7, style: 'lattice', dir: s > 0 ? 'E' : 'W' });
    windowPanel(w, { x: hx(core.x1 * s), z: cz - 10, y0: bandA + 1, h: 4, w: 7, style: 'lattice', dir: s > 0 ? 'E' : 'W' });
    windowPanel(w, { x: hx(core.x1 * s), z: cz + 25, y0: bandA + 1, h: 4, w: 5, style: 'lattice', dir: s > 0 ? 'E' : 'W' });
    windowPanel(w, { x: hx(core.x1 * s), z: cz - 25, y0: bandA + 1, h: 4, w: 5, style: 'lattice', dir: s > 0 ? 'E' : 'W' });
  }
  for (const s of [-1, 1]) {                               // 后檐暗层格窗（中心严格镜像）
    for (const b of [11, 26]) {
      windowPanel(w, { x: cx + s * b, z: wallZ0, y0: bandA + 1, h: 4, w: 9, style: 'lattice', dir: 'N' });
    }
  }

  /* ---------------- 5. 重檐庑殿 ---------------- */
  roof(w, {                                                // 下檐：四坡收到殿身一线
    cx, cz, baseY: cfg.lowerEaveY, spanX: 104, spanZ: 90, height: 10,
    type: ROOF_TYPE.WUDIAN, fitX: core.x1 + 1, fitZ: core.z1 + 1,
    tile, tileDark, upturn: 2,
  });
  const uColY = bandA + 1;                                 // 童柱立于下檐顶环上
  const uColH = (cfg.upperEaveY - 8) - uColY;              // 58..61
  columns(w, {
    x0: hx(core.x0 - 1), x1: hx(core.x1 + 1), z0: hz(core.z0 - 1), z1: hz(core.z1 + 1),
    y0: uColY, h: uColH, size: 3, entasis: false,
    xs: [hx(core.x0 - 1), hx(-20), hx(20), hx(core.x1 + 1)],
    zs: [hz(core.z0 - 1), hz(-16), hz(16), hz(core.z1 + 1)],
  });
  const uBeamY = uColY + uColH;                            // 62..64 额枋
  beam(w, { x0: hx(core.x0 - 1), x1: hx(core.x1 + 1), y: uBeamY, z: hz(core.z1 + 1), size: 3 });
  beam(w, { x0: hx(core.x0 - 1), x1: hx(core.x1 + 1), y: uBeamY, z: hz(core.z0 - 1), size: 3 });
  beamZ(w, { z0: hz(core.z0 - 1), z1: hz(core.z1 + 1), y: uBeamY, x: hx(core.x0 - 1), size: 3 });
  beamZ(w, { z0: hz(core.z0 - 1), z1: hz(core.z1 + 1), y: uBeamY, x: hx(core.x1 + 1), size: 3 });
  const uDgY = uBeamY;                                     // 出跳斗拱顶到上檐檐口（2 层出跳已够读出"七踩"）
  dougongRow(w, { dir: 'S', x0: hx(core.x0 - 1), x1: hx(core.x1 + 1), at: hz(core.z1 + 1), y: uDgY, xs: [hx(-39), hx(-26), hx(26), hx(39)], tiers: 2 });
  dougongRow(w, { dir: 'N', x0: hx(core.x0 - 1), x1: hx(core.x1 + 1), at: hz(core.z0 - 1), y: uDgY, step: 8, tiers: 2 });
  dougongRow(w, { dir: 'E', z0: hz(core.z0 - 1), z1: hz(core.z1 + 1), at: hx(core.x1 + 1), y: uDgY, step: 8, tiers: 2 });
  dougongRow(w, { dir: 'W', z0: hz(core.z0 - 1), z1: hz(core.z1 + 1), at: hx(core.x0 - 1), y: uDgY, step: 8, tiers: 2 });
  plaque(w, { x: cx, z: hz(core.z1 + 1), y: cfg.upperEaveY - 4, w: 26, h: 5, dir: 'S', text: cfg.name || '大雄宝殿' });
  roof(w, {                                                // 上檐：正庑殿
    cx, cz, baseY: cfg.upperEaveY,
    spanX: cfg.roof.spanX, spanZ: cfg.roof.spanZ, height: cfg.roof.h,
    ridgeLen: cfg.roof.ridgeLen, type: ROOF_TYPE.WUDIAN,
    tile, tileDark, upturn: 3,
  });
  finial(w, { cx, cz, y: cfg.upperEaveY + cfg.roof.h + 2, h: 6, kind: 'baoding', color: P.ridgeGold });
  cullHidden(w);                                            // 清掉柱芯/内皮等六面全包的格子（画面零差异）
}

export default buildMainHall;
