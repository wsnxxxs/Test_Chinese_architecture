import * as THREE from 'three';

// 调色板：索引 0 为空气。每种材质可带亮度抖动（jitter）与自发光强度（emit）。
const list = [null];
export const C = {};

function def(name, hex, jitter = 0.05, emit = 0) {
  C[name] = list.length;
  list.push({ name, hex, jitter, emit });
}

// —— 地面 ——
def('soil', 0x6e5237, 0.08);
def('dirt', 0x8a6b4a, 0.1);
def('grass', 0x5e8c3a, 0.1);
def('grass2', 0x6f9a42, 0.1);
def('grass3', 0x4f7a32, 0.1);
def('pave', 0xa39e94, 0.06);
def('pave2', 0x96918a, 0.06);
def('road', 0xcdc4b2, 0.05);
def('roadEdge', 0xa69e8e, 0.05);
def('rock', 0x8b877e, 0.1);
def('rock2', 0x75716a, 0.1);
def('pondBed', 0x3b4f47, 0.1);
// —— 石作 / 砖作 ——
def('stone', 0xb9b2a3, 0.05);
def('stoneTop', 0xd5cfc1, 0.04);
def('marble', 0xebe7dc, 0.03);
def('marble2', 0xd6d1c4, 0.03);
def('brick', 0x7c7a77, 0.07);
def('brickDark', 0x5f5d5a, 0.06);
// —— 墙 / 木作 ——
def('wallRed', 0xa7352b, 0.04);
def('wallBase', 0x6f4a3c, 0.05);
def('columnRed', 0x8e221c, 0.03);
def('colBase', 0xcfc8b8, 0.03);
def('woodRed', 0x7a2418, 0.03);
def('woodDark', 0x4a2c1c, 0.04);
def('doorPanel', 0x86261c, 0.03);
def('lattice', 0x5e2216, 0.03);
def('paper', 0xe9d09a, 0.03, 0.5);
def('pagodaWall', 0xe8e1d0, 0.03);
// —— 彩画 ——
def('beamBlue', 0x2c5a8c, 0.03);
def('beamGreen', 0x2e8570, 0.03);
def('gold', 0xd6a634, 0.04);
def('goldBright', 0xf2cc5c, 0.03, 0.08);
def('dgGreen', 0x2f7d68, 0.03);
def('dgBlue', 0x2b4a85, 0.03);
def('boardRed', 0x9c3326, 0.03);
def('rafterA', 0x2f6f8a, 0.03);
def('rafterB', 0x357a5e, 0.03);
def('ceilA', 0x2d6d78, 0.03);
def('ceilB', 0x2f4f86, 0.03);
def('gableRed', 0x9a2e24, 0.03);
def('plaque', 0x1e3764, 0.02);
// —— 瓦作：黄琉璃 / 绿琉璃 / 青瓦 ——
def('tileY1', 0xdca628, 0.05);
def('tileY2', 0xc98f1b, 0.05);
def('tileY3', 0x9c6a12, 0.05);
def('ridgeY', 0xe8b83a, 0.04);
def('tileG1', 0x2f7d55, 0.05);
def('tileG2', 0x266a47, 0.05);
def('tileG3', 0x1d5238, 0.05);
def('ridgeG', 0x3b9366, 0.04);
def('tileK1', 0x5a5e64, 0.05);
def('tileK2', 0x4b4f55, 0.05);
def('tileK3', 0x3a3d42, 0.05);
def('ridgeK', 0x464a50, 0.04);
// —— 灯火 / 铜器 / 石雕 ——
def('lanternRed', 0xe23b24, 0.03, 1.0);
def('lanternGold', 0xe6b64a, 0.03, 0.35);
def('lampLight', 0xffd27a, 0.02, 1.2);
def('ember', 0xff7a2a, 0.05, 1.3);
def('bronze', 0x6d5a37, 0.05);
def('bronzeDark', 0x4a3c25, 0.05);
def('lion', 0xbab4a6, 0.05);
def('lionDark', 0x8f897d, 0.05);
def('drumSkin', 0xd9c39a, 0.03);
// —— 植物 ——
def('trunk', 0x5a3f2d, 0.08);
def('trunk2', 0x4a3325, 0.08);
def('pine', 0x2f5c37, 0.1);
def('pine2', 0x3d6d40, 0.1);
def('pine3', 0x244a2d, 0.1);
def('cypress', 0x2a4d33, 0.1);
def('cypress2', 0x355e3a, 0.1);
def('ginkgo', 0xe7b53a, 0.1);
def('ginkgo2', 0xd49a26, 0.1);
def('ginkgo3', 0xf0cb55, 0.1);
def('maple', 0xc33f26, 0.1);
def('maple2', 0xdc6a2c, 0.1);
def('maple3', 0xa92f22, 0.1);
def('blossom', 0xf0a9bb, 0.08);
def('blossom2', 0xf7c9d3, 0.08);
def('blossom3', 0xe58aa2, 0.08);
def('willow', 0x86b24c, 0.1);
def('willow2', 0x9cc45c, 0.1);
def('lotusLeaf', 0x3f8c45, 0.1);
def('lotusFlower', 0xf28aa8, 0.05);
def('flowerY', 0xf2d24a, 0.1);
def('flowerW', 0xf1eee0, 0.05);
def('flowerP', 0xa77ad0, 0.08);

export const PALETTE_SIZE = list.length;

/** 生成线性空间的颜色 / 抖动 / 自发光查找表 */
export function paletteArrays() {
  const n = list.length;
  const rgb = new Float32Array(n * 3);
  const jitter = new Float32Array(n);
  const emit = new Float32Array(n);
  const col = new THREE.Color();
  for (let i = 1; i < n; i++) {
    col.setHex(list[i].hex); // sRGB → 线性工作空间
    rgb[i * 3] = col.r;
    rgb[i * 3 + 1] = col.g;
    rgb[i * 3 + 2] = col.b;
    jitter[i] = list[i].jitter;
    emit[i] = list[i].emit;
  }
  return { rgb, jitter, emit };
}
