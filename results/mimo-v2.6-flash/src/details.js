import * as THREE from 'three';
import { plaqueTexture } from './materials.js';

/* 朝向：建筑局部坐标下，'pz'=正面(+Z) / 'nz'=背面 / 'px'=右 / 'nx'=左 */

function faceVec(face) {
  switch (face) {
    case 'pz': return [0, 1, 1];    // [dx, dz, 方向符号沿Z]
    case 'nz': return [0, -1, -1];
    case 'px': return [1, 0, 1];
    case 'nx': return [-1, 0, -1];
  }
  return [0, 1, 1];
}

/** 立柱：柱础 + 柱身 */
export function column(B, x, z, y, h, w = 1.1, shaftMat = 'redCol') {
  B.box('stone', x, y - 0.05, z, w + 0.45, 0.4, w + 0.45);
  B.box(shaftMat, x, y + 0.3, z, w, h - 0.3, w);
}

/** 斗拱：一层坐斗 + 二层替木/昂（青绿出挑） */
export function dougong(B, x, y, z, face) {
  const [dx, dz] = faceVec(face);
  if (dz !== 0) {
    B.box('dgRed', x, y, z, 1.6, 0.5, 1.1);
    B.box('dgGreen', x, y + 0.5, z + dz * 0.3, 2.5, 0.5, 1.7);
  } else {
    B.box('dgRed', x, y, z, 1.1, 0.5, 1.6);
    B.box('dgGreen', x + dx * 0.3, y + 0.5, z, 1.7, 0.5, 2.5);
  }
}

/** 沿一条线排布斗拱 */
export function dougongLine(B, coords, y, face) {
  for (const [x, z] of coords) dougong(B, x, y, z, face);
}

/** 门窗：暗色门芯 + 木裙板 + 直棂格栅（略凸出墙面形成层次） */
export function lattice(B, o) {
  const { x, y, z, w, h, face = 'pz', bars = true } = o;
  const [dx, dz] = faceVec(face);
  const alongX = dz !== 0; // 'pz/nz' 时长边沿 X
  const t = 0.4;
  // 暗色门芯
  if (alongX) B.box('dark', x, y, z, w, h, t);
  else B.box('dark', x, y, z, t, h, w);
  if (!bars) return;
  const front = 0.16; // 凸出量
  const bh = h * 0.62; // 上部格栅高
  const by = y + h - bh;
  // 下部实木裙板
  if (alongX) B.box('wood', x, y + 0.05, z + dz * 0.1, w - 0.5, h * 0.3, t);
  else B.box('wood', x + dx * 0.1, y + 0.05, z, t, h * 0.3, w - 0.5);
  // 直棂
  const nV = Math.max(2, Math.round(w / 0.75));
  for (let i = 1; i < nV; i++) {
    const off = -w / 2 + (w * i) / nV;
    if (alongX) B.box('wood', x + off, by, z + dz * front, 0.15, bh, 0.3);
    else B.box('wood', x + dx * front, by, z + off, 0.3, bh, 0.15);
  }
  const nH = Math.max(2, Math.round(bh / 0.85));
  for (let j = 1; j < nH; j++) {
    const off = (bh * j) / nH;
    if (alongX) B.box('wood', x, by + off, z + dz * front, w - 0.4, 0.15, 0.3);
    else B.box('wood', x + dx * front, by + off, z, 0.3, 0.15, w - 0.4);
  }
}

/** 台阶：从地面到 top 高，逐级向外递减（互不共面，无闪烁） */
export function stairs(B, o) {
  const { x, zEdge, w, top, risers = 3, dir = 'pz', mat = 'stoneL' } = o;
  const sgn = dir === 'pz' ? 1 : -1;
  const run = 1.15;
  for (let k = 1; k <= risers; k++) {
    const inner = k === 1 ? -0.15 : run * (k - 1);
    const outer = run * k;
    const depth = outer - inner;
    const cz = zEdge + sgn * ((inner + outer) / 2);
    const h = (top * k) / risers;
    B.box(mat, x, 0, cz, w, h, depth);
  }
}

/** 灯笼：挂绳 + 金顶 + 灯身(自发光) + 金底 + 流苏 */
export function lantern(B, x, yHang, z) {
  B.box('dark', x, yHang - 0.3, z, 0.18, 0.6, 0.18);
  B.box('gold', x, yHang - 0.75, z, 0.75, 0.3, 0.75);
  B.box('lantern', x, yHang - 1.5, z, 1.0, 1.3, 1.0);
  B.box('gold', x, yHang - 2.25, z, 0.75, 0.3, 0.75);
  B.box('lantern', x, yHang - 2.7, z, 0.28, 0.6, 0.28);
}

/** 汉白玉栏杆：沿一条边等距布柱 + 两道横枋 */
export function railing(B, o) {
  const { from, to, y, mat = 'stoneL' } = o; // from/to = [x, z]
  const dx = to[0] - from[0], dz = to[1] - from[1];
  const len = Math.hypot(dx, dz);
  const n = Math.max(2, Math.round(len / 1.9));
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const px = from[0] + dx * t, pz = from[1] + dz * t;
    B.box(mat, px, y, pz, 0.55, 1.15, 0.55);
    if (i < n) {
      const t2 = (i + 0.5) / n;
      const cx = from[0] + dx * t2, cz = from[1] + dz * t2;
      const horiz = Math.abs(dx) > Math.abs(dz);
      const seg = Math.hypot(dx, dz) / n;
      B.box(mat, cx, y + 0.78, cz, horiz ? seg : 0.3, 0.3, horiz ? 0.3 : seg);
      B.box(mat, cx, y + 0.32, cz, horiz ? seg : 0.2, 0.2, horiz ? 0.2 : seg);
    }
  }
}

/** 匾额：底板进 builder，金字画布贴图独立 Mesh（局部正面 +Z） */
export function addPlaque(scene, B, text, x, yCenter, zFace, w, h) {
  B.box('plaqueBlue', x, yCenter - (h + 0.3) / 2, zFace + 0.05, w + 0.35, h + 0.35, 0.3);
  const mat = new THREE.MeshStandardMaterial({ map: plaqueTexture(text), roughness: 0.65 });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  mesh.position.copy(B.world(x, yCenter, zFace + 0.24));
  mesh.rotation.y = B.rotY();
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  scene.add(mesh);
}
