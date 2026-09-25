import * as THREE from 'three';
import { PAL } from './palette.js';
import { VoxelWorld } from './voxel.js';
import { buildHall } from './buildings/hall.js';
import { buildGate } from './buildings/gate.js';
import { buildTower } from './buildings/tower.js';
import { buildTree, buildLion } from './decor.js';

function slab(w, h, d, color, x, y, z) {
  const m = new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshLambertMaterial({ color })
  );
  m.position.set(x, y, z);
  m.receiveShadow = true;
  return m;
}

// 地面 / 道路 / 庭院（普通网格，体素留给建筑）
function buildGround(scene) {
  // 大地
  const ground = slab(150, 2, 150, PAL.grass, 0, -1, 0);
  scene.add(ground);

  // 中轴石板路：山门 → 庭院 → 主殿（避开庭院区域防止共面）
  scene.add(slab(4, 0.4, 18, PAL.path, 0, 0.2, -9));   // 主殿台阶 → 庭院
  scene.add(slab(4, 0.4, 32, PAL.path, 0, 0.2, 42));   // 庭院 → 山门 → 南端
  // 庭院广场
  scene.add(slab(33, 0.4, 15, PAL.path, 0, 0.2, 7.5));
  // 支路：庭院 → 钟鼓楼 / 配殿
  scene.add(slab(8, 0.4, 3, PAL.path, 13, 0.2, 18.5));
  scene.add(slab(8, 0.4, 3, PAL.path, -13, 0.2, 18.5));
  scene.add(slab(4, 0.4, 9, PAL.path, -16, 0.2, -1.5));
  scene.add(slab(4, 0.4, 9, PAL.path, 16, 0.2, -1.5));

  // 草地色斑
  const patches = [
    [-30, 26, 6, 4], [26, 30, 5, 5], [-44, -22, 7, 4], [42, -18, 6, 6],
    [-12, 52, 8, 4], [14, -52, 7, 5], [-52, 8, 5, 7], [50, 44, 6, 4],
    [-38, 48, 5, 5], [36, 52, 6, 4],
  ];
  for (const [x, z, w, d] of patches) {
    scene.add(slab(w, 0.15, d, PAL.grassDark, x, 0.07, z));
  }
}

// 全部体素建筑
function buildComplex(scene) {
  const W = new VoxelWorld();

  // 主殿：重檐庑殿顶，中轴线北端
  buildHall(W, 0, -28, {
    halfW: 12, halfD: 7, platH: 2, colH: 6,
    xs: [-10, -6, -2, 2, 6, 10],
    upper: true, tile: PAL.yellowTile, dark: PAL.yellowTileDark, ridgeLen: 7,
  });

  // 东西配殿：单檐歇山顶
  const side = {
    halfW: 7, halfD: 5, platH: 1, colH: 5,
    xs: [-6, -2, 2, 6],
    upper: false, tile: PAL.yellowTile, dark: PAL.yellowTileDark, ridgeLen: 5,
  };
  buildHall(W, -26, -6, side);
  buildHall(W, 26, -6, side);

  // 山门：中轴线南端入口
  buildGate(W, 0, 40);

  // 钟鼓楼：庭院东南、西南，攒尖顶青瓦
  buildTower(W, -22, 18, { tile: PAL.greyTile, dark: PAL.greyTileDark, bell: true });
  buildTower(W, 22, 18, { tile: PAL.greyTile, dark: PAL.greyTileDark, bell: false });

  // 山门前石狮一对
  buildLion(W, -4, 47);
  buildLion(W, 4, 47);

  // 入口两侧矮墙（红墙 + 青瓦压顶）
  for (const s of [-1, 1]) {
    W.box(s * 10 - (s < 0 ? 1 : 0), 0, 46, 1, 3, 10, PAL.redWall);
    W.box(s * 10 - (s < 0 ? 1 : 0), 3, 46, 1, 1, 10, PAL.greyTile);
  }

  // 环场树木
  const trees = [
    [-38, 30], [-44, 8], [-38, -16], [-46, -34], [-32, -48], [-56, -8],
    [38, 32], [46, 12], [38, -16], [48, -34], [32, -50], [56, 2],
    [-18, 54], [18, 54], [-30, 48], [30, 50],
  ];
  for (const [x, z] of trees) buildTree(W, x, z);

  const voxels = W.build(1);
  scene.add(voxels);
  return W.count();
}

export function buildScene(scene) {
  buildGround(scene);
  return buildComplex(scene);
}
