import { PAL } from './palette.js';
import { pine, lion, stoneLantern } from './buildings.js';

// —— 确定性哈希（草地/铺装的随机纹理） ——
function hash(x, z, s = 0) {
  let h = (x * 374761393 + z * 668265263 + s * 1442695041) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

function vary(hex, amt, r) {
  const v = 1 - amt + 2 * amt * r;
  const ch = (s) => Math.min(255, Math.round(((hex >> s) & 255) * v));
  return (ch(16) << 16) | (ch(8) << 8) | ch(0);
}

// —— 铺装区域（先匹配者优先：中轴御道 > 庭院 > 支路） ——
const RECTS = [
  { x0: -3, x1: 2, z0: -44, z1: 57, t: 'axis' },   // 中轴御道：山门→庭院→主殿→塔院
  { x0: -13, x1: 12, z0: -13, z1: 11, t: 'court' }, // 主庭院
  { x0: -10, x1: 9, z0: -45, z1: -35, t: 'court' }, // 塔院前庭
  { x0: -19, x1: -4, z0: 0, z1: 3, t: 'path2' },    // 西配殿支路
  { x0: 3, x1: 18, z0: 0, z1: 3, t: 'path2' },      // 东配殿支路
  { x0: -20, x1: -17, z0: 12, z1: 19, t: 'path2' }, // 鼓楼支路
  { x0: 17, x1: 20, z0: 12, z1: 19, t: 'path2' },   // 钟楼支路
];

function pavingAt(x, z) {
  for (const r of RECTS) if (x >= r.x0 && x <= r.x1 && z >= r.z0 && z <= r.z1) return r;
  return null;
}

export function buildSite(w) {
  // —— 地面（草地 / 铺装，全部落在 y=0 层） ——
  for (let x = -52; x <= 51; x++) {
    for (let z = -72; z <= 57; z++) {
      const r = pavingAt(x, z);
      const h = hash(x, z);
      let c;
      if (!r) {
        c = vary(PAL.greens[Math.floor(hash(x, z, 1) * 4)], 0.09, hash(x, z, 2));
      } else if (r.t === 'axis') {
        c = (x === r.x0 || x === r.x1)
          ? vary(PAL.pathEdge, 0.06, h)
          : vary(PAL.path, 0.07, h);
      } else if (r.t === 'path2') {
        c = vary(PAL.path2, 0.07, h);
      } else {
        const edge = x === r.x0 || x === r.x1 || z === r.z0 || z === r.z1;
        c = edge
          ? vary(PAL.courtEdge, 0.05, h)
          : vary((((x >> 1) + (z >> 1)) & 1) ? PAL.courtA : PAL.courtB, 0.05, h);
      }
      w.add(x, 0, z, c);
    }
  }

  // —— 花草 / 灌木 / 山石（撒在草地上，确定性随机） ——
  for (let x = -51; x <= 50; x++) {
    for (let z = -71; z <= 56; z++) {
      if (pavingAt(x, z)) continue;
      if (hash(x, z, 5) < 0.008) {
        w.add(x, 1, z, PAL.flower[Math.floor(hash(x, z, 6) * 4)]);
      } else if (hash(x, z, 7) < 0.005) {
        w.box(x, x + 1, 1, 1, z, z + 1, PAL.leaf[Math.floor(hash(x, z, 8) * 3)]);
        if (hash(x, z, 9) < 0.5) w.add(x, 2, z, PAL.leaf[Math.floor(hash(x, z, 10) * 3)]);
      } else if (hash(x, z, 11) < 0.0016) {
        w.add(x, 1, z, PAL.rock);
        if (hash(x, z, 12) < 0.6) {
          w.add(x + 1, 1, z, PAL.rock);
          w.add(x, 2, z, PAL.rock);
        }
      }
    }
  }

  // —— 院墙（红墙青瓦压顶） ——
  const wallSeg = (x0, x1, z0, z1) => {
    w.box(x0, x1, 1, 3, z0, z1, PAL.wallRedDark);
    w.box(x0, x1, 4, 4, z0, z1, PAL.tileTealDark);
  };
  wallSeg(-35, -9, 44, 44);    // 前墙西段（山门处留门）
  wallSeg(8, 34, 44, 44);      // 前墙东段
  wallSeg(-35, 34, -64, -64);  // 后墙
  wallSeg(-35, -35, -64, 44);  // 西墙
  wallSeg(34, 34, -64, 44);    // 东墙
  // 墙垛节奏
  for (let z = -60; z <= 40; z += 10) {
    w.box(34, 34, 1, 4, z, z, PAL.stoneDarker);
    w.box(-35, -35, 1, 4, z, z, PAL.stoneDarker);
  }
  // 塔院隔墙（中央门洞 + 小门檐）
  wallSeg(-35, -5, -38, -38);
  wallSeg(4, 34, -38, -38);
  w.box(-5, 4, 5, 5, -39, -36, PAL.tileTealDark);
  w.box(-4, 3, 6, 6, -38, -37, PAL.tileTeal);
  w.add(-5, 6, -39, PAL.tileTealDark); w.add(4, 6, -39, PAL.tileTealDark);
  w.add(-5, 6, -36, PAL.tileTealDark); w.add(4, 6, -36, PAL.tileTealDark);

  // —— 松树 ——
  const trees = [
    [-12, 52], [12, 52], [-24, 50], [24, 50],      // 山门外
    [-31, 15], [31, 15], [-31, -12], [31, -12],    // 庭院两翼
    [-26, -52], [26, -52], [-24, -60], [24, -60],  // 塔院
    [-10, -69], [10, -69],                          // 后墙外
    [-46, 18], [46, 18], [-46, -24], [46, -24],    // 院墙外
  ];
  trees.forEach(([x, z], i) => pine(w, x, z, i * 977 + 123));

  // —— 石狮（山门 / 主殿阶前各一对） ——
  lion(w, -6, 46, false); lion(w, 6, 46, true);
  lion(w, -8, -12, false); lion(w, 8, -12, true);

  // —— 灯柱（沿中轴御道） ——
  for (const z of [32, 16, 0, -12]) {
    stoneLantern(w, -6, z);
    stoneLantern(w, 6, z);
  }
  stoneLantern(w, -6, -42); stoneLantern(w, 6, -42); // 塔院
  stoneLantern(w, 16, -3); stoneLantern(w, 16, 4);   // 东配殿阶前
  stoneLantern(w, -17, -3); stoneLantern(w, -17, 4); // 西配殿阶前

  // —— 庭院香炉（中轴之上） ——
  w.box(-1, 1, 1, 1, -8, -6, PAL.stoneDarker);
  w.box(-1, 1, 2, 3, -8, -6, PAL.gold);
  w.box(-1, 1, 4, 4, -7, -7, PAL.ridgeGold);
  w.add(-1, 4, -8, PAL.ridgeGold); w.add(1, 4, -8, PAL.ridgeGold);
  w.add(-1, 4, -6, PAL.ridgeGold); w.add(1, 4, -6, PAL.ridgeGold);
}
