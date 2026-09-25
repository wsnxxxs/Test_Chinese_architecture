import { column, dougongLine, lattice, stairs, lantern, railing, addPlaque } from './details.js';
import { hipRoof, gableRoof, pyramidRoof, pagodaEave } from './roofs.js';

/* 所有建筑在“局部坐标”下建造：+Z 为正面，屋脊沿 X；由调用方 scope() 提供整体旋转。 */

/* ================================ 山门（南端入口 · 歇山顶 · 黄琉璃） ================================ */
export function buildGate(B, scene) {
  // 台基
  B.box('stoneL', 0, 0, 0, 18, 1, 9);
  stairs(B, { x: 0, zEdge: 4.5, w: 10, top: 1, risers: 2, dir: 'pz' });
  stairs(B, { x: 0, zEdge: -4.5, w: 10, top: 1, risers: 2, dir: 'nz' });

  // 墩身（三个门洞）
  const piers = [[-7.65, 2.7], [-2.75, 1.9], [2.75, 1.9], [7.65, 2.7]];
  for (const [cx, cw] of piers) B.box('redWall', cx, 1, 0, cw, 5.8, 6.5);
  B.box('redWall', -5, 4.8, 0, 2.6, 2.0, 6.5);   // 左门洞上檐墙
  B.box('redWall', 5, 4.8, 0, 2.6, 2.0, 6.5);    // 右门洞上檐墙
  B.box('redWall', 0, 5.6, 0, 3.6, 1.2, 6.5);    // 中门洞门楣
  // 门洞暗面（后退形成进深）
  B.box('dark', 0, 1, -3.0, 3.6, 4.6, 0.5);
  B.box('dark', -5, 1, -3.0, 2.6, 3.8, 0.5);
  B.box('dark', 5, 1, -3.0, 2.6, 3.8, 0.5);

  // 立柱
  for (const cx of [-7.65, -2.75, 2.75, 7.65]) {
    column(B, cx, 3.6, 1, 5.8, 1.1);
    column(B, cx, -3.6, 1, 5.8, 1.1);
  }
  // 枋梁 + 斗拱
  B.box('redCol', 0, 6.8, 0, 19, 1.0, 7.4);
  const xs = [-8, -5.33, -2.67, 0, 2.67, 5.33, 8];
  dougongLine(B, xs.map(x => [x, 3.4]), 7.8, 'pz');
  dougongLine(B, xs.map(x => [x, -3.4]), 7.8, 'nz');

  // 歇山顶（黄琉璃）
  gableRoof(B, {
    mat: 'roofY', ridgeMat: 'roofYD', panel: 'redWall',
    y: 8.8, w: 22, d: 12,
  });

  // 匾额 + 灯笼
  addPlaque(scene, B, '云栖禅寺', 0, 6.2, 3.25, 5.2, 1.5);
  lantern(B, -6.5, 6.8, 3.9);
  lantern(B, 6.5, 6.8, 3.9);
}

/* ================================ 主殿（中轴核心 · 重檐庑殿 · 黄琉璃） ================================ */
export function buildMainHall(B, scene) {
  // 双层台基 + 御路台阶
  B.box('stone', 0, 0, 0, 32, 1.2, 20);
  B.box('stoneL', 0, 1.2, 0, 30, 0.8, 18);
  stairs(B, { x: 0, zEdge: 9, w: 10, top: 2, risers: 4, dir: 'pz' });

  // 汉白玉栏杆
  railing(B, { from: [-14.6, 9], to: [-5.6, 9], y: 2 });
  railing(B, { from: [5.6, 9], to: [14.6, 9], y: 2 });
  railing(B, { from: [14.6, 9], to: [14.6, -8.6], y: 2 });
  railing(B, { from: [-14.6, 9], to: [-14.6, -8.6], y: 2 });

  // 立柱（面阔六间）
  const fx = [-13.5, -8.1, -2.7, 2.7, 8.1, 13.5];
  for (const cx of fx) {
    column(B, cx, 7.6, 2, 6.6, 1.2);
    column(B, cx, -7.6, 2, 6.6, 1.2);
  }
  for (const cz of [-2.5, 2.5]) {
    column(B, 13.5, cz, 2, 6.6, 1.2);
    column(B, -13.5, cz, 2, 6.6, 1.2);
  }

  // 墙体
  B.box('redWall', 0, 2, 0, 26, 6.6, 14.5);
  // 正面：三门 + 两窗
  lattice(B, { x: -5.4, y: 2, z: 7.25, w: 4.0, h: 5.4, face: 'pz' });
  lattice(B, { x: 0, y: 2, z: 7.25, w: 4.4, h: 5.4, face: 'pz' });
  lattice(B, { x: 5.4, y: 2, z: 7.25, w: 4.0, h: 5.4, face: 'pz' });
  lattice(B, { x: -10.8, y: 3.6, z: 7.25, w: 3.4, h: 2.8, face: 'pz' });
  lattice(B, { x: 10.8, y: 3.6, z: 7.25, w: 3.4, h: 2.8, face: 'pz' });
  // 背面 + 两山
  for (const cx of [-5.4, 5.4]) lattice(B, { x: cx, y: 3.6, z: -7.25, w: 4.0, h: 2.8, face: 'nz' });
  for (const cx of [-10.8, 10.8]) lattice(B, { x: cx, y: 3.6, z: -7.25, w: 3.4, h: 2.8, face: 'nz' });
  for (const cz of [-3.4, 3.4]) {
    lattice(B, { x: 13, y: 3.6, z: cz, w: 4.0, h: 2.8, face: 'px' });
    lattice(B, { x: -13, y: 3.6, z: cz, w: 4.0, h: 2.8, face: 'nx' });
  }

  // 大额枋 + 一周斗拱
  B.box('redCol', 0, 8.6, 0, 27.5, 1.2, 16);
  const fx2 = []; for (let x = -13; x <= 13.01; x += 2.6) fx2.push(+x.toFixed(2));
  dougongLine(B, fx2.map(x => [x, 7.5]), 9.8, 'pz');
  dougongLine(B, fx2.map(x => [x, -7.5]), 9.8, 'nz');
  dougongLine(B, fx2.filter(x => Math.abs(x) <= 11).map(x => [13.4, x * 0.42]), 9.8, 'px');
  dougongLine(B, fx2.filter(x => Math.abs(x) <= 11).map(x => [-13.4, x * 0.42]), 9.8, 'nx');

  // 下檐（裙檐 · 四坡）
  hipRoof(B, { mat: 'roofY', ridgeMat: 'roofYD', y: 10.8, w: 34, d: 24, layers: 3, inset: 2, cap: false, upturn: true });

  // 上层墙身 + 横窗
  B.box('redWall', 0, 13.8, 0, 24, 3.4, 13.5);
  for (const cx of [-6, 0, 6]) B.box('dark', cx, 14.6, 6.75, 2.4, 1.6, 0.4);
  B.box('redCol', 0, 17.2, 0, 25.5, 1.0, 14.8);
  const ux = []; for (let x = -11; x <= 11.01; x += 2.75) ux.push(+x.toFixed(2));
  dougongLine(B, ux.map(x => [x, 7.0]), 18.2, 'pz');
  dougongLine(B, ux.map(x => [x, -7.0]), 18.2, 'nz');
  dougongLine(B, ux.filter(x => Math.abs(x) <= 6).map(x => [12.4, x]), 18.2, 'px');
  dougongLine(B, ux.filter(x => Math.abs(x) <= 6).map(x => [-12.4, x]), 18.2, 'nx');

  // 上檐（庑殿 · 浅坡收分）
  hipRoof(B, { mat: 'roofY', ridgeMat: 'roofYD', y: 19.1, w: 32, d: 22, layers: 6, upturn: true });

  // 匾额 + 檐下灯笼
  addPlaque(scene, B, '大雄宝殿', 0, 9.2, 8.0, 6.4, 1.0);
  for (const cx of [-9.9, -3.3, 3.3, 9.9]) lantern(B, cx, 8.6, 8.4);
}

/* ================================ 配殿（东西对称 · 歇山顶 · 青瓦） ================================ */
export function buildSideHall(B, scene, opts = {}) {
  B.box('stoneL', 0, 0, 0, 27, 1.2, 15);
  stairs(B, { x: 0, zEdge: 7.5, w: 8, top: 1.2, risers: 2, dir: 'pz' });

  // 立柱（面阔五间）
  for (const cx of [-10, -5, 0, 5, 10]) {
    column(B, cx, 5.1, 1.2, 5.2, 1.1);
    column(B, cx, -5.1, 1.2, 5.2, 1.1);
  }
  for (const cz of [-3, 0, 3]) {
    column(B, 10.4, cz, 1.2, 5.2, 1.1);
    column(B, -10.4, cz, 1.2, 5.2, 1.1);
  }

  B.box('redWall', 0, 1.2, 0, 20, 5.2, 9.4);
  // 正面：两门两窗（朝庭院）
  lattice(B, { x: -2.5, y: 1.2, z: 4.7, w: 3.6, h: 4.4, face: 'pz' });
  lattice(B, { x: 2.5, y: 1.2, z: 4.7, w: 3.6, h: 4.4, face: 'pz' });
  lattice(B, { x: -7.5, y: 2.6, z: 4.7, w: 3.4, h: 2.8, face: 'pz' });
  lattice(B, { x: 7.5, y: 2.6, z: 4.7, w: 3.4, h: 2.8, face: 'pz' });
  // 背面 + 两山
  for (const cx of [-5, 5]) lattice(B, { x: cx, y: 2.6, z: -4.7, w: 3.4, h: 2.8, face: 'nz' });
  for (const cz of [-3, 3]) {
    lattice(B, { x: 10, y: 2.6, z: cz, w: 3.0, h: 2.8, face: 'px' });
    lattice(B, { x: -10, y: 2.6, z: cz, w: 3.0, h: 2.8, face: 'nx' });
  }

  B.box('redCol', 0, 6.4, 0, 22, 1.4, 11);
  const xs = []; for (let x = -10; x <= 10.01; x += 2.5) xs.push(+x.toFixed(2));
  dougongLine(B, xs.map(x => [x, 5.1]), 7.8, 'pz');
  dougongLine(B, xs.map(x => [x, -5.1]), 7.8, 'nz');
  dougongLine(B, xs.filter(x => Math.abs(x) <= 4.1).map(x => [10.4, x]), 7.8, 'px');
  dougongLine(B, xs.filter(x => Math.abs(x) <= 4.1).map(x => [-10.4, x]), 7.8, 'nx');

  gableRoof(B, { mat: 'roofGr', ridgeMat: 'roofGrD', panel: 'redWall', y: 8.6, w: 26, d: 16 });

  addPlaque(scene, B, opts.text || '东西配殿', 0, 7.1, 5.5, 3.8, 1.0);
  lantern(B, -6.5, 6.4, 5.6);
  lantern(B, 6.5, 6.4, 5.6);
}

/* ================================ 钟楼 / 鼓楼（前方两侧 · 攒尖顶 · 绿琉璃） ================================ */
export function buildTower(B, scene, opts = {}) {
  const isBell = opts.kind === 'bell';
  // 台基
  B.box('stone', 0, 0, 0, 9, 1.5, 9);
  B.box('stoneL', 0, 1.5, 0, 7.8, 0.5, 7.8);
  stairs(B, { x: 0, zEdge: 4.5, w: 5, top: 2, risers: 3, dir: 'pz' });

  // 楼身（正面开敞：后墙 + 两墩 + 门楣）
  B.box('redWall', 0, 2, -1.5, 7, 5, 4);
  B.box('redWall', -2.75, 2, 2.0, 1.5, 5, 3);
  B.box('redWall', 2.75, 2, 2.0, 1.5, 5, 3);
  B.box('redWall', 0, 5.8, 2.0, 7, 1.2, 3);
  B.box('dark', 0, 2, 0.65, 4, 3.8, 0.3);
  // 角柱
  for (const cx of [-3.5, 3.5]) for (const cz of [-3.5, 3.5]) column(B, cx, cz, 2, 5.2, 1.1);
  // 侧窗 / 后窗
  lattice(B, { x: 3.5, y: 4.2, z: -1.5, w: 2.2, h: 1.8, face: 'px' });
  lattice(B, { x: -3.5, y: 4.2, z: -1.5, w: 2.2, h: 1.8, face: 'nx' });
  lattice(B, { x: 0, y: 4.2, z: -3.5, w: 2.2, h: 1.8, face: 'nz' });

  if (isBell) {
    // 铜钟（悬于门楣下，可见于门洞）
    B.box('dark', 0, 5.0, 1.8, 0.25, 0.8, 0.25);
    B.box('bronze', 0, 2.5, 1.8, 1.8, 2.4, 1.6);
    B.box('bronze', 0, 2.5, 1.8, 2.1, 0.55, 1.9);
    B.box('gold', 0, 4.9, 1.8, 0.5, 0.45, 0.5);
  } else {
    // 大鼓（置于木架上）
    B.box('drumRed', 0, 2.3, 1.8, 2.4, 2.6, 2.0);
    B.box('gold', 0, 3.35, 1.8, 2.5, 0.5, 2.1);
    for (const sx of [-0.65, 0.65]) for (const sy of [2.9, 4.3]) B.box('gold', sx, sy, 2.85, 0.3, 0.3, 0.25);
    B.box('wood', -1.7, 2, 1.8, 0.5, 3.6, 0.5);
    B.box('wood', 1.7, 2, 1.8, 0.5, 3.6, 0.5);
    B.box('wood', 0, 5.1, 1.8, 4.0, 0.5, 0.6);
  }

  // 腰檐板 + 斗拱环
  B.box('wood', 0, 7, 0, 8, 0.7, 8);
  dougongLine(B, [[-3, 3.6], [-1.5, 3.6], [0, 3.6], [1.5, 3.6], [3, 3.6]], 7.7, 'pz');
  dougongLine(B, [[-3, -3.6], [-1.5, -3.6], [0, -3.6], [1.5, -3.6], [3, -3.6]], 7.7, 'nz');
  dougongLine(B, [[3.6, -1.5], [3.6, 0], [3.6, 1.5]], 7.7, 'px');
  dougongLine(B, [[-3.6, -1.5], [-3.6, 0], [-3.6, 1.5]], 7.7, 'nx');

  // 攒尖顶 + 宝顶
  const topY = pyramidRoof(B, { mat: 'roofG', y: 8.5, w: 10, inset: 2, minSize: 2 });
  B.box('gold', 0, topY, 0, 1.6, 1.0, 1.6);
  B.box('gold', 0, topY + 1.0, 0, 0.9, 0.9, 0.9);
  B.box('gold', 0, topY + 1.9, 0, 0.4, 1.6, 0.4);

  addPlaque(scene, B, isBell ? '钟楼' : '鼓楼', 0, 6.35, 3.5, 2.6, 1.0);
  lantern(B, -2.4, 5.8, 3.8);
  lantern(B, 2.4, 5.8, 3.8);
}

/* ================================ 宝塔（中轴北端 · 楼阁式六层 · 绿琉璃檐） ================================ */
export function buildPagoda(B, scene) {
  // 台基
  B.box('stone', 0, 0, 0, 12, 1.2, 12);
  B.box('stoneL', 0, 1.2, 0, 10, 0.8, 10);
  stairs(B, { x: 0, zEdge: 5, w: 6, top: 2, risers: 3, dir: 'pz' });

  const stories = 6;
  const bodyH = 2.5, eaveH = 2, step = bodyH + eaveH;
  for (let i = 0; i < stories; i++) {
    const s = 8 - 0.8 * i;
    const y = 2 + step * i;
    // 塔身
    B.box('plaster', 0, y, 0, s, bodyH, s);
    B.box('redCol', 0, y, 0, s + 0.3, 0.4, s + 0.3);
    B.box('redCol', 0, y + bodyH - 0.4, 0, s + 0.3, 0.4, s + 0.3);
    // 四角红柱
    const c = s / 2 - 0.45;
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) B.box('redCol', sx * c, y, sz * c, 0.9, bodyH, 0.9);
    // 门窗（一层正面为塔门）
    const isBase = i === 0;
    const wh = isBase ? 1.9 : 1.3, wy = isBase ? y + 0.35 : y + 0.9, ww = isBase ? 1.7 : s * 0.32;
    B.box('dark', 0, wy, s / 2, ww, wh, 0.4);
    B.box('wood', 0, wy + 0.1, s / 2 + 0.16, 0.15, wh - 0.2, 0.3);
    B.box('dark', 0, wy, -s / 2, ww, wh, 0.4);
    B.box('dark', s / 2, wy, 0, 0.4, wh, ww);
    B.box('dark', -s / 2, wy, 0, 0.4, wh, ww);
    // 挑檐
    pagodaEave(B, { mat: 'roofG', y: y + bodyH, body: s });
  }

  // 塔顶攒尖 + 相轮宝顶
  const yTop = 2 + step * stories;
  const sTop = 8 - 0.8 * (stories - 1);
  const topY = pyramidRoof(B, { mat: 'roofG', y: yTop, w: sTop + 1.2, inset: 0.85, minSize: 1.5 });
  B.box('gold', 0, topY, 0, 1.8, 1.2, 1.8);
  B.box('gold', 0, topY + 1.35, 0, 1.4, 0.15, 1.4);
  B.box('gold', 0, topY + 1.7, 0, 1.1, 0.15, 1.1);
  B.box('gold', 0, topY + 2.05, 0, 0.85, 0.15, 0.85);
  B.box('gold', 0, topY + 2.3, 0, 0.35, 1.7, 0.35);
}
