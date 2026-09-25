/**
 * gate.js —— 山门（A2）。跨中轴而建：台基 + 三面朱墙 + 中开三券门（明间大、次间小，
 * 可南北对穿）+ 单檐歇山 + 檐下平板枋与斗拱 + 匾额「祇园胜境」+ 台阶 + 门槛 +
 * 门前一对石狮（本地 simpleGuardLion 自带实现，不依赖 props.js）。
 *
 * 约定（见 parts.js 顶部）：墙面外皮即 doorPanel/windowPanel 的 (x,z)；
 * 券门在南北两面各设一道同轴拱，中段留空 → 形成可通过的隧道。
 */
import { L, P } from '../config.js';
import {
  ROOF_TYPE, centerBox, terrace, stairs, balustrade, columns, beam, beamZ, dougongRow,
  wallPanel, doorPanel, windowPanel, plaque, roof, cornice, cullHidden,
} from './parts.js';

/**
 * 简化守门石狮（本文件自带，避免与 props.js 并行开发冲突）：
 * 须弥座 + 前蹲身 + 头 + 卷毛 + 绣球/幼狮，左右成对调用即对称。
 * o = {x,z,y,dir:'S'|'N'|'E'|'W',size=1,color}
 */
/**
 * 简化守门石狮（本文件自带，避免与并行开发的 props.js 冲突）：
 * 须弥座 + 蹲身 + 前胸前足 + 头 + 双耳卷毛 + 侧绣球；成对调用（x 取 ±）即左右对称。
 * o = {x,z,y,dir:'S'|'N'|'E'|'W',size=1,color}
 */
export function simpleGuardLion(w, o = {}) {
  const x = Math.round(o.x ?? 0), z = Math.round(o.z ?? 0), y = Math.round(o.y ?? 0);
  const dir = (o.dir || 'S').toUpperCase();
  const alongX = dir === 'S' || dir === 'N';
  const sgn = (dir === 'S' || dir === 'E') ? 1 : -1;      // 正面朝向
  const s = Math.max(1, Math.round(o.size ?? 1));
  const fl = o.flip === -1 ? -1 : 1;                      // 成对镜像（左右狮的绣球/幼狮分居两侧）
  const stone = o.color ?? P.stone;
  const dark = shadeOf(stone, -0.24), light = shadeOf(stone, 0.16);
  const put = (a, yy, d, c) => {
    const A = a * fl;
    if (alongX) w.set(x + A * s, y + yy * s, z + sgn * d * s, c);
    else w.set(x + sgn * d * s, y + yy * s, z + A * s, c);
  };
  const box = (a0, a1, y0, y1, d0, d1, c) => {
    for (let a = a0; a <= a1; a++) for (let yy = y0; yy <= y1; yy++) for (let d = d0; d <= d1; d++) put(a, yy, d, c);
  };
  box(-2, 2, 0, 0, -2, 2, dark);          // 座下枋
  box(-2, 2, 1, 2, -2, 2, stone);         // 须弥座
  box(-1, 1, 1, 2, 3, 3, light);          // 座前踏
  box(-1, 1, 3, 5, -1, 1, stone);         // 后身
  box(-1, 1, 3, 4, 2, 2, dark);           // 前胸
  box(-1, 1, 3, 5, 3, 3, stone);          // 前腿
  box(0, 0, 6, 7, 1, 2, stone);           // 颈
  box(-1, 1, 6, 8, 3, 3, light);          // 头
  box(0, 0, 6, 6, 4, 4, dark);            // 鼻
  for (const a of [-1, 1]) { put(a, 9, 2, dark); put(a, 9, 3, light); }   // 双耳 + 卷毛
  put(0, 9, 3, dark);
  box(-2, -2, 3, 3, 3, 4, light);         // 侧绣球
  put(-2, 4, 3, shadeOf(stone, 0.3));
}
function shadeOf(hex, k) {
  const r = (hex >> 16) & 255, g = (hex >> 8) & 255, b = hex & 255;
  const f = (v) => Math.max(0, Math.min(255, Math.round(k >= 0 ? v + (255 - v) * k : v * (1 + k))));
  return (f(r) << 16) | (f(g) << 8) | f(b);
}

export function buildGate(w, cfg = L.gate) {
  const B = centerBox({ cx: 0, cz: 178, x0: -32, x1: 32, z0: 164, z1: 192, ...cfg });
  const { cx, cz } = B;
  const { x0, x1, z0, z1 } = B;                          // L 中给的是绝对盒范围，统一按中轴重算
  const yT = cfg.terraceH ?? 5;
  const colH = cfg.colH ?? 17;
  const tile = cfg.tile || P.tileGray;
  const tileDark = cfg.tileDark || P.tileGrayDark;

  /* ---------------- 台基 + 栏杆 + 南北台阶 ---------------- */
  terrace(w, {
    x0, x1, z0, z1, y0: 0, y1: yT, skirt: 2,
    inner: { x0: x0 + 2, x1: x1 - 2, z0: z0 + 2, z1: z1 - 2 },
  });
  /* 券门是南北对穿的通道 → 台面（压顶石层）必须在三道券洞的通行带上补出来，
   * 否则从洞前平视会看到台基内部的"坑"。只补通行带，亭心其余部分被墙体/屋顶封住不外露。 */
  for (const a of [{ x: cx, hw: 6 }, { x: cx - 17, hw: 3 }, { x: cx + 17, hw: 3 }]) {
    w.fill(a.x - a.hw - 1, yT - 1, z0 + 1, a.x + a.hw + 1, yT - 1, z1 - 1, P.marble);
  }
  balustrade(w, {
    x0: x0 + 1, x1: x1 - 1, z0: z0 + 1, z1: z1 - 1, y: yT, postStep: 8,
    gapBoxes: [[cx - 13, cx + 13]],
  });
  for (const [d, at] of [['S', z1 + 1], ['N', z0 - 1]]) {
    stairs(w, { dir: d, at, x0: cx - 13, x1: cx + 13, y0: 0, y1: yT, boolu: false });
  }
  // 台基四角望柱
  for (const [ax, az] of [[x0 + 1, z0 + 1], [x1 - 1, z0 + 1], [x0 + 1, z1 - 1], [x1 - 1, z1 - 1]]) {
    w.fill(ax - 1, yT, az - 1, ax + 1, yT + 2, az + 1, P.marble);
    w.set(ax, yT + 3, az, P.gold);
  }

  /* ---------------- 柱网 + 平板枋 + 斗拱 ---------------- */
  /* 柱位即开间：明间 x[-12,12]（中开门洞，**不放檐柱**，否则红柱立在券洞里）、
   * 次间 x[12,22] / [-22,-12]（各开一小券门）、梢间 x[22,32]。 */
  const xs = [x0, cx - 22, cx - 12, cx + 12, cx + 22, x1];
  columns(w, { x0, x1, z0, z1, y0: yT, h: colH, size: 3, xs, zs: [z0, cz, z1] });
  const colTop = yT + colH - 1;
  beam(w, { x0, x1, y: colTop + 1, z: z1, size: 3 });
  beam(w, { x0, x1, y: colTop + 1, z: z0, size: 3 });
  beamZ(w, { z0, z1, y: colTop + 1, x: x0, size: 3 });
  beamZ(w, { z0, z1, y: colTop + 1, x: x1, size: 3 });
  const dgY = colTop + 4, eaveY = dgY + 6;
  dougongRow(w, { dir: 'S', x0, x1, at: z1, y: dgY, step: 9, tiers: 1 });
  dougongRow(w, { dir: 'N', x0, x1, at: z0, y: dgY, step: 9, tiers: 1 });
  dougongRow(w, { dir: 'E', z0, z1, at: x1, y: dgY, step: 8, tiers: 1 });
  dougongRow(w, { dir: 'W', z0, z1, at: x0, y: dgY, step: 8, tiers: 1 });
  cornice(w, { x0: x0 - 4, x1: x1 + 4, z0: z0 - 4, z1: z1 + 4, y: eaveY - 2, out: 2 });

  /* ---------------- 三面朱墙 + 中开三券门（南北对穿） ---------------- */
  /* 券洞高度自台基面向上 12 / 9 格；顶部留出 y[18,24] 一条完整墙面给匾额，
   * 再往上是额枋(22–24)→斗拱(25–28)→檐口(29–31)，竖向层次不互相打架。 */
  const bigH = Math.max(9, Math.min(colH - 5, 12)), smallH = bigH - 3;
  const arches = [
    { x: cx, hw: 6, h: bigH },                    // 明间：净宽 11 格
    { x: cx - 17, hw: 3, h: smallH },             // 次间：净宽 5 格（略小）
    { x: cx + 17, hw: 3, h: smallH },
  ];
  const holes = arches.map((a) => [a.x - a.hw, a.x + a.hw, yT, yT + a.h - 1]);
  // 墙体只 1 格厚（可见皮原则）；券洞的石券深度由 doorPanel(thick) 在洞口周围补足
  wallPanel(w, { dir: 'S', at: z1, x0, x1, z0, z1, y0: yT, y1: eaveY, thick: 1, holes });
  wallPanel(w, { dir: 'N', at: z0, x0, x1, z0, z1, y0: yT, y1: eaveY, thick: 1, holes });
  wallPanel(w, { dir: 'E', at: x1, x0, x1, z0, z1, y0: yT, y1: eaveY, thick: 1 });
  wallPanel(w, { dir: 'W', at: x0, x0, x1, z0, z1, y0: yT, y1: eaveY, thick: 1 });
  for (const a of arches) {
    // 南面石券做 3 格厚（洞口可见进深），北面 2 格即可
    doorPanel(w, { x: a.x, z: z1, y0: yT, h: a.h, w: a.hw * 2 + 1, style: 'arch', dir: 'S', thick: 3, frame: P.stone });
    doorPanel(w, { x: a.x, z: z0, y0: yT, h: a.h, w: a.hw * 2 + 1, style: 'arch', dir: 'N', thick: 2, frame: P.stone });
  }
  /* 明间券洞内壁（门垛）：把 3 格石券再往里续 4 格石脸 → 洞口有 7 格可视进深，
   * 从南面看是"穿墙而过"的隧道口，而不是一张画在墙上的拱。 */
  for (const s of [-1, 1]) {
    const jx = cx + s * (arches[0].hw);
    w.fill(jx, yT, z1 - 3, jx, yT + arches[0].h - 2, z1 - 6, P.stone);
  }
  // 山面小窗
  for (const s of [-1, 1]) {
    windowPanel(w, { x: x1, z: cz + s * 8, y0: yT + 6, h: 6, w: 5, style: 'lattice', dir: 'E' });
    windowPanel(w, { x: x0, z: cz + s * 8, y0: yT + 6, h: 6, w: 5, style: 'lattice', dir: 'W' });
  }
  /* ---------------- 墀头：前檐两端凸出墙身 2 格的砖墩 ---------------- */
  /* 山门跨围墙而建、两侧院墙只有 9 格高，门楼墙面容易和院墙糊成一片。
   * 两端各立一座 2×2、与檐口齐平的墀头（下碱石 + 墙身 + 檐口帽），
   * 把"门"的轮廓在正立面里明确拎出来；只凸 2 格，footprint 不外扩。 */
  for (const [a0, a1] of [[x0, x0 + 1], [x1 - 1, x1]]) {
    for (let y = yT; y <= eaveY - 1; y++) {
      const c = y < yT + 4 ? P.wallBase : (y === eaveY - 1 ? P.wallRedDark : P.wallRed);
      w.fill(a0, y, z1 + 1, a1, y, z1 + 2, c);
    }
    w.fill(a0, eaveY, z1 + 1, a1, eaveY, z1 + 2, P.marbleLine);          // 墀头帽（连檐）
    w.set(a0 === x0 ? a1 : a0, eaveY + 1, z1 + 2, P.gold, { jitter: 0 }); // 帽上一点脊饰
  }
  // 匾额（南面 + 北面）：檐口之下、券脸之上的墙面上，宽 21 高 7
  const plaqueY = dgY - 4;
  plaque(w, { x: cx, z: z1, y: plaqueY, w: 21, h: 7, dir: 'S', text: cfg.name || '祇园胜境' });
  plaque(w, { x: cx, z: z0, y: plaqueY, w: 21, h: 7, dir: 'N', text: '慧日慈云' });

  /* ---------------- 单檐歇山 ---------------- */
  const ridgeY = cfg.ridgeY ?? 46;
  roof(w, {
    cx, cz, spanX: (x1 - x0) + 12, spanZ: (z1 - z0) + 10,
    baseY: eaveY, height: Math.max(10, ridgeY - eaveY),
    type: ROOF_TYPE[cfg.roofType ? cfg.roofType.toUpperCase() : 'XIESHAN'] || ROOF_TYPE.XIESHAN,
    tile, tileDark, upturn: 2, beastN: 3,
    /* 歇山形制"一眼可辨"三件事：
     *  1) 坡面线脚用深黛（垂脊/戗脊/正脊）与青瓦拉开明度差，亮金只给博风/悬鱼/走兽；
     *  2) 山花用青绿 + 木色（与瓦色互补）并一直做到正脊（shanTopRatio=1，默认 0.72 会留空）；
     *  3) 上部两坡比下部四坡的收分多出山 1 格（chushan），山花面因此明显"退"在后面。 */
    ridge: P.tileLead, ridgeGold: P.gold, capRidge: P.capRidge,
    shan: P.beamGreen, shanAlt: P.wood, shanTopRatio: 1,
    shanRatio: 0.14, chushan: 3,
  });

  /* ---------------- 门前石狮（本地兜底实现，flip 让成对严格镜像） ---------------- */
  for (const s of [-1, 1]) {
    simpleGuardLion(w, { x: cx + s * 20, z: z1 + 6, y: 0, dir: 'S', size: 1, flip: s });
    simpleGuardLion(w, { x: cx + s * 20, z: z0 - 6, y: 0, dir: 'N', size: 1, flip: s });
  }
  cullHidden(w);
}

export default buildGate;
