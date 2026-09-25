import { C } from './palette.js';
import * as B from './buildings.js';

export { MAIN_HALL } from './buildings.js';

// 主殿前两盏灯笼的点光源位置（黄昏氛围）
export const LANTERN_LIGHTS = [
  [-6, 16.2, B.MAIN_HALL.z + 13.6],
  [6, 16.2, B.MAIN_HALL.z + 13.6],
];

export function buildScene(b) {
  ground(b);
  roads(b);
  B.perimeterWall(b);

  // 建筑群（中轴对称）
  B.mainHall(b, B.MAIN_HALL.x, B.MAIN_HALL.z);
  B.sideHall(b, -34, 4, 1);
  B.sideHall(b, 34, 4, -1);
  B.gate(b, 0, 36);
  B.tower(b, 22, 26, 'bell', -1);
  B.tower(b, -22, 26, 'drum', 1);
  B.pagoda(b, 0, -39);

  props(b);
  trees(b);
}

function ground(b) {
  // 草地基底
  b.boxCentered(0, -2, 128, 112, -1.2, 1.2, C.grass, { faces: ['px', 'nx', 'pz', 'nz', 'py'] });
  // 草地斑块（避开庭院铺装区）
  const rng = b.rng;
  for (let i = 0; i < 30; i++) {
    const x = (rng() * 2 - 1) * 58;
    const z = -52 + rng() * 100;
    if (Math.abs(x) < 44 && z > -10 && z < 30) continue;
    b.boxCentered(x, z, 3 + rng() * 6, 3 + rng() * 6, 0, 0.06, rng() < 0.5 ? C.grassDark : C.grass);
  }
}

function roads(b) {
  const P = (x0, z0, x1, z1, color, h = 0.28) =>
    b.boxCentered((x0 + x1) / 2, (z0 + z1) / 2, Math.abs(x1 - x0), Math.abs(z1 - z0), 0, h, color);
  P(-42, -6, 42, 28, C.paving); // 庭院
  P(-5, 44, 5, 54, C.pavingDark); // 门外神道
  P(-5, 0, 5, 28, C.pavingDark); // 御路
  P(5, 1, 26, 11, C.pavingDark); // 东甬路
  P(-26, 1, -5, 11, C.pavingDark); // 西甬路
  P(-6, -32, 6, -8, C.pavingDark); // 塔前甬路
  // 路缘石
  const curb = (x, z0, z1) => b.boxCentered(x, (z0 + z1) / 2, 0.4, Math.abs(z1 - z0), 0, 0.45, C.whiteStone);
  curb(-5.3, 0, 28); curb(5.3, 0, 28);
}

function props(b) {
  // 石狮
  B.stoneLion(b, -8.5, 47, 1, 1.0);
  B.stoneLion(b, 8.5, 47, 1, 1.0);
  B.stoneLion(b, -9, 3, -1, 0.85);
  B.stoneLion(b, 9, 3, -1, 0.85);
  // 香炉
  B.ding(b, 0, 10, 1.0);
  // 灯柱
  for (const [x, z] of [[-8, 20], [8, 20], [-8, 6], [8, 6]]) B.poleLantern(b, x, z, 1.0);
  // 花坛
  for (const [x, z] of [[-12, 24], [12, 24], [-12, -2], [12, -2], [-38, 14], [38, 14]])
    B.flowerBed(b, x, z, 1.0);
}

function trees(b) {
  const rng = b.rng;
  const put = (x, z, kind) => {
    const h = 7 + rng() * 5;
    if (kind === 'pine') B.pineTree(b, x, z, h, 0.9 + rng() * 0.3);
    else B.cypressTree(b, x, z, h * 1.5, 0.9 + rng() * 0.25);
  };
  // 院内
  const inside = [
    [-40, 30, 'pine'], [40, 30, 'pine'], [-40, 2, 'cypress'], [40, 2, 'cypress'],
    [-40, -26, 'pine'], [40, -26, 'pine'], [-30, -42, 'cypress'], [30, -42, 'cypress'],
    [-14, -31, 'pine'], [14, -31, 'pine'], [-20, -44, 'cypress'], [20, -44, 'cypress'],
  ];
  // 院外
  const outside = [
    [-54, 20, 'pine'], [54, 20, 'pine'], [-54, -20, 'pine'], [54, -20, 'pine'],
    [-40, 50, 'cypress'], [40, 50, 'cypress'], [-24, 53, 'pine'], [24, 53, 'pine'],
    [-30, -55, 'cypress'], [30, -55, 'cypress'], [-58, 45, 'pine'], [58, 45, 'pine'],
  ];
  for (const [x, z, k] of [...inside, ...outside]) put(x, z, k);
}
