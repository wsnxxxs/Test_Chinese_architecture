// 沿路径挤出的"缎带"几何工具：用于道砟、铁轨偏移、道路、水面、河床
import * as THREE from 'three';

// 沿曲线等弧长采样，返回 Vector3 数组；closed 时首尾相接（不重复末点）
export function sampleCurve(curve, n, closed = false) {
  const pts = [];
  const count = closed ? n : n + 1;
  for (let i = 0; i < count; i++) {
    const u = (i / n) % 1;
    pts.push(curve.getPointAt(u, new THREE.Vector3()));
  }
  return pts;
}

// 每个采样点的横向单位向量（前后段平均，形成斜接缝）
export function sideVectors(pts, closed = false) {
  const sides = [];
  const n = pts.length;
  for (let i = 0; i < n; i++) {
    const p0 = closed ? pts[(i - 1 + n) % n] : pts[Math.max(0, i - 1)];
    const p1 = closed ? pts[(i + 1) % n] : pts[Math.min(n - 1, i + 1)];
    const dx = p1.x - p0.x;
    const dz = p1.z - p0.z;
    const len = Math.hypot(dx, dz) || 1;
    sides.push(new THREE.Vector3(-dz / len, 0, dx / len));
  }
  return sides;
}

// 通用截面挤出：section 为 {x: 横向偏移, y: 高度} 数组，沿 pts 生成条带
// closeLoop 为 true 时截面首尾相连（闭合管状，如道砟梯形）
export function sectionRibbon(pts, sides, section, closeLoop = false) {
  const positions = [];
  const n = pts.length;
  const m = section.length;
  const ringCount = n; // closed 路径首尾相接，最后一段回卷到起点
  const vertex = (i, j) => {
    const p = pts[i % n];
    const s = sides[i % n];
    const q = section[j % m];
    positions.push(p.x + s.x * q.x, q.y, p.z + s.z * q.x);
  };
  const segCount = closed ? n : n - 1;
  for (let i = 0; i < segCount; i++) {
    const jEnd = closeLoop ? m : m - 1;
    for (let j = 0; j < jEnd; j++) {
      vertex(i, j);
      vertex((i + 1) % n, j);
      vertex((i + 1) % n, j + 1);
      vertex(i, j);
      vertex((i + 1) % n, j + 1);
      vertex(i, j + 1);
    }
  }
  void ringCount;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.computeVertexNormals();
  return geo;
}

// 平面条带（道路 / 水面 / 河床）：固定高度 y
export function flatRibbon(pts2D, y, halfWidth, closed = false) {
  const pts = pts2D.map((p) => new THREE.Vector3(p.x, 0, p.z ?? p[1]));
  const sides = sideVectors(pts, closed);
  return sectionRibbon(
    pts,
    sides,
    [
      { x: -halfWidth, y },
      { x: halfWidth, y },
    ],
    false
  );
}
