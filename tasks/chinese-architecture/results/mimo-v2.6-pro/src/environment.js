import { C } from './colors.js';
import { put } from './decor.js';

/** 铺装方砖区：石板 + 界格 + 压沿石 */
function paving(S, { x0, x1, z0, z1, base = C.pave, alt = C.paveHi, grid = true }) {
  S.solid.box(x0, -0.15, z0, x1 - x0, 0.3, z1 - z0, base);
  // 大面积双色交错，模拟方砖
  const tile = 8;
  const tone = [];
  for (let x = x0; x < x1 - 1; x += tile) {
    for (let z = z0; z < z1 - 1; z += tile) {
      const ix = Math.round((x - x0) / tile), iz = Math.round((z - z0) / tile);
      if ((ix + iz) % 3 === 0) {
        tone.push([x, z, Math.min(tile, x1 - x), Math.min(tile, z1 - z)]);
      }
    }
  }
  for (const [x, z, w, d] of tone) S.solid.box(x + 0.1, 0.15, z + 0.1, w - 0.2, 0.06, d - 0.2, alt);
  if (grid) {
    for (let x = x0 + 6; x < x1 - 1; x += 6) S.solid.box(x - 0.14, 0.15, z0, 0.28, 0.07, z1 - z0, C.paveDk);
    for (let z = z0 + 6; z < z1 - 1; z += 6) S.solid.box(x0, 0.15, z - 0.14, x1 - x0, 0.07, 0.28, C.paveDk);
  }
  // 压沿
  S.solid.box(x0 - 0.5, -0.1, z0 - 0.5, x1 - x0 + 1, 0.34, 0.6, C.stoneGy);
  S.solid.box(x0 - 0.5, -0.1, z1 - 0.1, x1 - x0 + 1, 0.34, 0.6, C.stoneGy);
  S.solid.box(x0 - 0.5, -0.1, z0 - 0.5, 0.6, 0.34, z1 - z0 + 1, C.stoneGy);
  S.solid.box(x1 - 0.1, -0.1, z0 - 0.5, 0.6, 0.34, z1 - z0 + 1, C.stoneGy);
}

/** 草地色块（打破纯色；各块互不重叠，避免共面闪面） */
function grassPatches(S) {
  const patches = [
    [-118, -95, 40, 28], [-96, 62, 34, 24], [70, 90, 38, 22], [92, -66, 30, 28],
    [-62, 96, 28, 20], [-84, -52, 28, 24], [66, -108, 36, 20], [-128, 12, 24, 38],
    [95, -20, 24, 30], [34, -122, 44, 18],
  ];
  let i = 0;
  for (const [x, z, w, d] of patches) {
    const col = i % 3 === 0 ? C.grassHi : i % 3 === 1 ? C.grassDk : C.grass;
    S.solid.box(x, -0.02, z, w, 0.1, d, col);
    // 镜像一份，保持对称
    S.solid.box(-x - w, -0.02, z, w, 0.1, d, col);
    i++;
  }
}

/** S: 构建上下文 { solid, tile, glow } */
export function buildEnvironment(S) {
  // 大地（延伸出雾效范围；土层顶面低于草皮顶面，避免共面 Z-fighting）
  S.solid.box(-450, -1.4, -450, 900, 1.35, 900, C.soil);
  S.solid.box(-445, -0.25, -445, 890, 0.25, 890, C.grass);
  grassPatches(S);

  // 院内铺装（三进院落）
  paving(S, { x0: -44, x1: 44, z0: 30, z1: 55.5 });   // 前院
  paving(S, { x0: -44, x1: 44, z0: -34, z1: 30 });    // 主院
  paving(S, { x0: -44, x1: 44, z0: -59.5, z1: -34 }); // 后院

  // 中轴御道（略抬高，两侧压沿）
  S.solid.box(-5.5, 0.15, 8, 11, 0.14, 50, C.paveHi);
  S.solid.box(-5.9, 0.1, 8, 0.5, 0.3, 50, C.stoneGy);
  S.solid.box(5.4, 0.1, 8, 0.5, 0.3, 50, C.stoneGy);
  // 院外引道
  S.solid.box(-7, -0.12, 55.5, 14, 0.3, 30, C.pave);
  S.solid.box(-7.5, -0.15, 55.5, 0.6, 0.36, 30, C.stoneGy);
  S.solid.box(6.9, -0.15, 55.5, 0.6, 0.36, 30, C.stoneGy);

  // 后院甬路（连接后殿与双塔）
  put(S.solid, 'x', -44, 44, -37.5, -33.5, -0.15, 0.15, C.paveHi);
}
