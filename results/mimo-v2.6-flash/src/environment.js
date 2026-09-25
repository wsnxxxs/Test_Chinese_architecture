import * as THREE from 'three';
import { grassTexture, paveTexture } from './materials.js';

/* ---------------- 可复用环境构件 ---------------- */

function tree(B, x, z, s = 1) {
  const h = 4.5 * s;
  B.box('trunk', x, 0, z, 1.2 * s, h, 1.2 * s);
  const y0 = h - 1;
  B.box('leaf1', x, y0, z, 5.0 * s, 2.2 * s, 5.0 * s);
  B.box('leaf2', x - 1.4 * s, y0 + 0.4 * s, z + 1.2 * s, 2.4 * s, 1.8 * s, 2.4 * s);
  B.box('leaf2', x + 1.3 * s, y0 + 0.2 * s, z - 1.4 * s, 2.6 * s, 2.0 * s, 2.6 * s);
  B.box('leaf1', x, y0 + 2.2 * s, z, 3.6 * s, 2.0 * s, 3.6 * s);
  B.box('leaf3', x + 0.6 * s, y0 + 4.2 * s, z - 0.5 * s, 2.2 * s, 1.8 * s, 2.2 * s);
  B.box('leaf3', x, y0 + 5.6 * s, z, 1.4 * s, 1.4 * s, 1.4 * s);
}

function stoneLion(B, x, z, mirror = 1, s = 1) {
  const M = (v) => v * s;
  B.box('stone', x, 0, z, M(2.4), M(1.1), M(3.0));
  B.box('stoneL', x, M(1.1), z, M(2.6), M(0.3), M(3.2));
  const y = M(1.4);
  B.box('stone', x, y, z - M(0.2), M(1.5), M(1.6), M(2.0));            // 躯干
  B.box('stone', x, y + M(1.4), z + M(0.55), M(1.6), M(1.4), M(1.5));  // 头
  B.box('stoneL', x, y + M(1.7), z + M(1.15), M(0.9), M(0.7), M(0.6)); // 吻部
  B.box('stone', x - M(0.75), y + M(1.9), z + M(0.45), M(0.45), M(0.45), M(0.45)); // 鬃卷
  B.box('stone', x + M(0.75), y + M(1.9), z + M(0.45), M(0.45), M(0.45), M(0.45));
  B.box('stone', x - M(0.8), y + M(1.4), z + M(0.3), M(0.4), M(0.4), M(0.4));
  B.box('stone', x + M(0.8), y + M(1.4), z + M(0.3), M(0.4), M(0.4), M(0.4));
  B.box('stone', x - M(0.45), y, z + M(0.75), M(0.5), M(1.5), M(0.6)); // 前腿
  B.box('stone', x + M(0.45), y, z + M(0.75), M(0.5), M(1.5), M(0.6));
  B.box('stone', x - M(0.6), y, z - M(1.0), M(0.55), M(1.0), M(0.8));  // 后腿
  B.box('stone', x + M(0.6), y, z - M(1.0), M(0.55), M(1.0), M(0.8));
  B.box('stoneL', x + mirror * M(0.7), y, z + M(1.25), M(0.8), M(0.8), M(0.8)); // 绣球
  B.box('stone', x, y + M(1.2), z - M(1.15), M(0.5), M(0.9), M(0.4));  // 尾
}

function censer(B, x, z) {
  B.box('stoneL', x, 0.18, z, 5.2, 0.3, 5.2);          // 石座
  B.box('bronze', x - 1.3, 0.48, z - 0.9, 0.7, 1.1, 0.7);
  B.box('bronze', x + 1.3, 0.48, z - 0.9, 0.7, 1.1, 0.7);
  B.box('bronze', x, 0.48, z + 1.1, 0.7, 1.1, 0.7);
  B.box('bronze', x, 1.5, z, 3.6, 2.2, 3.0);            // 腹
  B.box('gold', x, 2.6, z, 3.7, 0.5, 3.1);              // 金带
  B.box('gold', x, 3.25, z, 3.9, 0.45, 3.3);            // 口沿
  B.box('bronze', x - 2.1, 3.3, z, 0.5, 1.1, 0.9);      // 双耳
  B.box('bronze', x + 2.1, 3.3, z, 0.5, 1.1, 0.9);
}

/** 带纹理的独立地面网格（不进合并桶） */
function texturedSlab(w, h, d, x, y, z, mat) {
  const g = new THREE.BoxGeometry(w, h, d);
  const m = new THREE.Mesh(g, mat);
  m.position.set(x, y, z);
  m.castShadow = false;
  m.receiveShadow = true;
  return m;
}

/**
 * 环境总装：草地 / 广场铺装 / 中轴神道 / 院墙 / 树木 / 石狮 / 香炉 / 远山。
 * 返回香烟粒子数组（供主循环驱动）。
 */
export function buildEnvironment(B, scene) {
  // ---- 草地（大面，远处融入雾色） ----
  const grass = texturedSlab(640, 4, 640, 0, -2, 0,
    new THREE.MeshStandardMaterial({ map: grassTexture(110, 110), roughness: 1 }));
  scene.add(grass);

  // ---- 庭院铺装 ----
  const plaza = texturedSlab(68, 0.18, 54, 0, 0.09, 11,
    new THREE.MeshStandardMaterial({ map: paveTexture(9, 7), roughness: 0.95 }));
  plaza.castShadow = false;
  scene.add(plaza);

  // ---- 中轴神道（双色石板交错，微凸成路缘） ----
  let ti = 0;
  for (const px of [-2, 0, 2]) {
    for (let pz = -12; pz <= 56; pz += 2) {
      if (px === 0 && pz >= 0 && pz <= 4) continue; // 香炉石座
      const k = (px + 2) / 2 + Math.round((pz + 12) / 2);
      B.box(k % 2 === 0 ? 'pathA' : 'pathB', px, 0, pz, 2, 0.42, 2);
      ti++;
    }
  }

  // ---- 院墙（红墙 + 青瓦压顶） ----
  const wallSegs = [
    // [x, z, w, d]
    [38, -5, 1.2, 106], [-38, -5, 1.2, 106],   // 东西
    [0, -58, 78, 1.2],                          // 北
    [24.5, 48, 29, 1.2], [-24.5, 48, 29, 1.2],  // 南（留门洞）
    [9.5, 48, 1, 1.2], [-9.5, 48, 1, 1.2],      // 门洞两侧补壁
  ];
  for (const [x, z, w, d] of wallSegs) {
    B.box('redWall', x, 0, z, w, 3.6, d);
    B.box('roofGr', x, 3.6, z, w + (w > d ? 0 : 1.0), 0.7, d + (w > d ? 1.0 : 0));
  }

  // ---- 树木（院内 8 棵 + 院外 6 棵） ----
  const inTrees = [
    [-33, 40, 1.0], [33, 40, 0.9], [-34, 13, 1.1], [34, 12, 1.0],
    [-33, -46, 0.95], [33, -46, 1.05], [-17, -54, 0.9], [17, -54, 0.95],
  ];
  for (const [x, z, s] of inTrees) tree(B, x, z, s);
  const outTrees = [
    [-58, 34, 1.2], [56, 16, 1.15], [-54, -44, 1.25], [50, -60, 1.1],
    [46, 78, 1.2], [-50, 86, 1.1],
  ];
  for (const [x, z, s] of outTrees) tree(B, x, z, s);

  // ---- 山门石狮 ----
  stoneLion(B, -7.5, 51.5, -1, 0.9);
  stoneLion(B, 7.5, 51.5, 1, 0.9);

  // ---- 庭院香炉 ----
  censer(B, 0, 2);

  // ---- 远山（三层退台剪影，没入晨雾） ----
  const hills = [
    [255, -60, 150, 90, 15], [175, -215, 170, 100, 17], [-60, -265, 200, 110, 18],
    [-245, -140, 160, 95, 16], [-265, 55, 150, 90, 14], [275, 110, 140, 85, 13],
    [65, 275, 180, 105, 15], [-135, 255, 150, 95, 13],
  ];
  for (const [x, z, w, d, h] of hills) {
    B.box('hill', x, -2, z, w, h, d);
    B.box('hill', x + w * 0.1, h * 0.55 - 2, z - d * 0.08, w * 0.66, h * 0.5, d * 0.62);
    B.box('hill', x + w * 0.2, h * 0.95 - 2, z - d * 0.14, w * 0.36, h * 0.42, d * 0.36);
  }

  // ---- 香烟（轻量粒子方块，主循环驱动） ----
  const smokeMat = new THREE.MeshStandardMaterial({
    color: 0xEDE6DA, transparent: true, opacity: 0.4, depthWrite: false, roughness: 1,
  });
  const smoke = [];
  for (let i = 0; i < 4; i++) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.7), smokeMat.clone());
    m.castShadow = false; m.receiveShadow = false;
    m.userData.phase = i / 4;
    scene.add(m);
    smoke.push(m);
  }
  return smoke;
}
