import { PALETTE as P } from './palette.js';
import {
  tree, lion, lanternPole, burner, pool, wall, flowerBed,
} from './arch.js';

/**
 * 环境：先铺地与道路（建筑后写、会覆盖其下铺装），再布置围墙、树木、
 * 石狮、灯笼杆、香炉、水池、花坛。整体沿中轴（x=0）对称布局。
 */
export function buildEnvironment(V) {
  // ---- 中央御道（南入口 -> 主殿台阶）
  for (let z = -44; z <= 16; z++) {
    for (let x = -2; x <= 2; x++) {
      const edge = Math.abs(x) === 2;
      V.set(x, 0, z, edge ? P.pavingDark : P.paving);
    }
  }
  // 御道延伸过台阶到台基边缘
  for (let z = 17; z <= 19; z++)
    for (let x = -3; x <= 3; x++) V.set(x, 0, z, P.paving);

  // ---- 东西甬路（连接两座配殿）
  for (let x = -13; x <= 13; x++)
    for (let z = -1; z <= 1; z++) V.set(x, 0, z, Math.abs(z) === 1 ? P.pavingDark : P.paving);

  // ---- 第一进庭院（山门—钟鼓楼）
  for (let x = -16; x <= 16; x++)
    for (let z = -20; z <= -7; z++) V.set(x, 0, z, P.paving);

  // ---- 第二进庭院（钟鼓楼—主殿）
  for (let x = -16; x <= 16; x++)
    for (let z = -5; z <= 15; z++) V.set(x, 0, z, P.paving);

  // ---- 入口南路两侧草地留白（南向开阔）

  // ---- 围墙（东、西、北三面，南面开敞）
  wall(V, -32, -18, -32, 59);
  wall(V, 32, -18, 32, 59);
  wall(V, -32, 59, 32, 59);

  // ---- 树木
  const trees = [
    // 御道两侧（松树）
    [-5, -24, 'pine'], [5, -24, 'pine'],
    [-5, -18, 'pine'], [5, -18, 'pine'],
    [-5, -12, 'pine'], [5, -12, 'pine'],
    [-5, -6, 'pine'], [5, -6, 'pine'],
    [-5, 4, 'pine'], [5, 4, 'pine'],
    [-5, 17, 'pine'], [5, 17, 'pine'],
    // 庭院柏树
    [-7, 18, 'cypress'], [7, 18, 'cypress'],
    // 宝塔周边
    [-9, 44, 'pine'], [9, 44, 'pine'],
    [-13, 48, 'cypress'], [13, 48, 'cypress'],
    [-6, 53, 'pine'], [6, 53, 'pine'],
    [-16, 44, 'cypress'], [16, 44, 'cypress'],
    // 围墙内侧
    [-29, -8, 'pine'], [29, -8, 'pine'],
    [-29, 8, 'cypress'], [29, 8, 'cypress'],
    [-29, 30, 'pine'], [29, 30, 'pine'],
    [-29, 45, 'cypress'], [29, 45, 'cypress'],
    // 南路
    [-5, -40, 'pine'], [5, -40, 'pine'],
    [-5, -44, 'pine'], [5, -44, 'pine'],
    // 墙外远景（露出墙头，增加层次）
    [-36, 20, 'pine'], [36, 20, 'pine'],
    [-38, -15, 'cypress'], [38, -15, 'cypress'],
    [-20, 62, 'pine'], [20, 62, 'pine'], [0, 62, 'cypress'],
    [-34, 55, 'pine'], [34, 55, 'pine'],
  ];
  for (const [x, z, kind] of trees) tree(V, x, z, kind);

  // ---- 石狮（山门与主殿台阶前）
  lion(V, -4, -33);
  lion(V, 4, -33);
  lion(V, -4, 20);
  lion(V, 4, 20);

  // ---- 灯笼杆（御道两侧）
  for (const z of [-27, -15, -3, 9]) {
    lanternPole(V, -4, z, 1);
    lanternPole(V, 4, z, -1);
  }

  // ---- 香炉（主殿丹墀两侧）
  burner(V, -4, 13);
  burner(V, 4, 13);

  // ---- 放生池（第一进庭院东西两侧）
  pool(V, -8, -14);
  pool(V, 8, -14);

  // ---- 花坛
  flowerBed(V, -15, 10, 1, 4);
  flowerBed(V, 15, 10, 1, 4);
  flowerBed(V, -6, -34, 3, 2);
  flowerBed(V, 6, -34, 3, 2);
}
