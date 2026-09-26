/**
 * 几何工具：
 *  - frameAt      沿路径的局部坐标架（前进/右侧/上）
 *  - sampleCurve  按弧长均匀采样曲线，返回 {pos, tangent}
 *  - buildRibbon  沿路径的扁平条带（河床、道路、道砟、平台面）
 *  - buildProfile 把 2D 截面沿路径挤出（钢轨、路缘、栏杆、桥梁构件）
 *  - gableRoofGeometry 山墙屋顶（手工模型质感的坡屋顶）
 */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const _up = new THREE.Vector3(0, 1, 0);

/** 沿路径的局部坐标架：forward=切线, lateral=右侧, up=修正后的上 */
export function frameAt(tangent) {
  const forward = tangent.clone().normalize();
  const lateral = new THREE.Vector3().crossVectors(forward, _up).normalize();
  const up = new THREE.Vector3().crossVectors(lateral, forward).normalize();
  return { forward, lateral, up };
}

/** 按弧长均匀采样闭合/开放曲线 */
export function sampleCurve(curve, divisions = 240, { closed = true } = {}) {
  const samples = [];
  const count = closed ? divisions : divisions + 1;
  for (let i = 0; i < count; i++) {
    const u = closed ? i / divisions : i / divisions;
    samples.push({
      pos: curve.getPointAt(u),
      tangent: curve.getTangentAt(u).normalize(),
    });
  }
  return samples;
}

/** 采样 2D 折线（x,z 平面），用于地形开河/距离计算 */
export function polylineToPoints(points2D, subdiv = 8) {
  const out = [];
  for (let i = 0; i < points2D.length - 1; i++) {
    const a = points2D[i];
    const b = points2D[i + 1];
    for (let k = 0; k < subdiv; k++) {
      const t = k / subdiv;
      out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
    }
  }
  out.push(points2D[points2D.length - 1]);
  return out;
}

/**
 * 扁平条带：samples 为 [{pos, tangent}]，返回 BufferGeometry
 * width 宽度，lateralOffset 侧向偏移，yOffset 垂直偏移，vScale UV 沿程缩放
 */
export function buildRibbon(samples, opts = {}) {
  const {
    width = 1,
    lateralOffset = 0,
    yOffset = 0,
    vScale = 1,
    uRepeat = 1,
  } = opts;

  const n = samples.length;
  const positions = new Float32Array(n * 2 * 3);
  const uvs = new Float32Array(n * 2 * 2);
  const indices = [];

  let dist = 0;
  for (let i = 0; i < n; i++) {
    const s = samples[i];
    if (i > 0) dist += s.pos.distanceTo(samples[i - 1].pos);
    const { lateral } = frameAt(s.tangent);
    const hw = width / 2;
    const cx = s.pos.x + lateral.x * lateralOffset;
    const cy = s.pos.y + yOffset;
    const cz = s.pos.z + lateral.z * lateralOffset;

    positions[i * 6 + 0] = cx - lateral.x * hw;
    positions[i * 6 + 1] = cy;
    positions[i * 6 + 2] = cz - lateral.z * hw;
    positions[i * 6 + 3] = cx + lateral.x * hw;
    positions[i * 6 + 4] = cy;
    positions[i * 6 + 5] = cz + lateral.z * hw;

    const v = dist * vScale * uRepeat;
    uvs[i * 4 + 0] = 0;
    uvs[i * 4 + 1] = v;
    uvs[i * 4 + 2] = 1;
    uvs[i * 4 + 3] = v;
  }

  for (let i = 0; i < n - 1; i++) {
    const a = i * 2;
    const b = i * 2 + 1;
    const c = (i + 1) * 2;
    const d = (i + 1) * 2 + 1;
    indices.push(a, b, c, b, d, c);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

/**
 * 把 2D 截面沿路径挤出。
 * profile: [[lat, y], ...]，lat 沿“右侧”方向，y 垂直方向；自动判断朝向并给出外法线。
 */
export function buildProfile(samples, profile, opts = {}) {
  const { closedProfile = true, vScale = 1, capEnds = false } = opts;
  const n = samples.length;
  const m = profile.length;

  // 截面有向面积，用于确定外法线方向
  let area = 0;
  for (let i = 0; i < m; i++) {
    const p = profile[i];
    const q = profile[(i + 1) % m];
    area += p[0] * q[1] - q[0] * p[1];
  }
  const ccw = area > 0;

  const edges = closedProfile ? m : m - 1;
  const positions = [];
  const normals = [];
  const uvs = [];
  const indices = [];
  const normal2D = [];

  for (let j = 0; j < edges; j++) {
    const p = profile[j];
    const q = profile[(j + 1) % m];
    const ex = q[0] - p[0];
    const ey = q[1] - p[1];
    const len = Math.hypot(ex, ey) || 1;
    const nx = (ccw ? ey : -ey) / len;
    const ny = (ccw ? -ex : ex) / len;
    normal2D.push([nx, ny]);
  }

  let dist = 0;
  for (let i = 0; i < n; i++) {
    const s = samples[i];
    if (i > 0) dist += s.pos.distanceTo(samples[i - 1].pos);
    const { lateral, up } = frameAt(s.tangent);
    for (let j = 0; j < m; j++) {
      const p = profile[j];
      positions.push(
        s.pos.x + lateral.x * p[0] + up.x * p[1],
        s.pos.y + lateral.y * p[0] + up.y * p[1],
        s.pos.z + lateral.z * p[0] + up.z * p[1],
      );
      const nj = normal2D[Math.min(j, normal2D.length - 1)];
      normals.push(
        lateral.x * nj[0] + up.x * nj[1],
        lateral.y * nj[0] + up.y * nj[1],
        lateral.z * nj[0] + up.z * nj[1],
      );
      uvs.push(j / Math.max(1, m - 1), dist * vScale);
    }
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < edges; j++) {
      const j2 = (j + 1) % m;
      const v0 = i * m + j;
      const v1 = i * m + j2;
      const v2 = (i + 1) * m + j2;
      const v3 = (i + 1) * m + j;
      indices.push(v0, v1, v2, v0, v2, v3);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);

  // 用解析法线校正三角形绕向，保证正面朝外
  const idx = geo.index.array;
  const posAttr = geo.attributes.position.array;
  const nrmAttr = geo.attributes.normal.array;
  const a = new THREE.Vector3();
  const b = new THREE.Vector3();
  const c = new THREE.Vector3();
  const ab = new THREE.Vector3();
  const ac = new THREE.Vector3();
  const fn = new THREE.Vector3();
  for (let t = 0; t < idx.length; t += 3) {
    const i0 = idx[t];
    const i1 = idx[t + 1];
    const i2 = idx[t + 2];
    a.set(posAttr[i0 * 3], posAttr[i0 * 3 + 1], posAttr[i0 * 3 + 2]);
    b.set(posAttr[i1 * 3], posAttr[i1 * 3 + 1], posAttr[i1 * 3 + 2]);
    c.set(posAttr[i2 * 3], posAttr[i2 * 3 + 1], posAttr[i2 * 3 + 2]);
    ab.subVectors(b, a);
    ac.subVectors(c, a);
    fn.crossVectors(ab, ac);
    const rx = nrmAttr[i0 * 3];
    const ry = nrmAttr[i0 * 3 + 1];
    const rz = nrmAttr[i0 * 3 + 2];
    if (fn.x * rx + fn.y * ry + fn.z * rz < 0) {
      idx[t + 1] = i2;
      idx[t + 2] = i1;
    }
  }
  geo.index.needsUpdate = true;

  if (capEnds) {
    // 简单封口：首尾截面的扇形（用于开放路径的钢轨端头等）
    for (const end of [0, n - 1]) {
      const base = end * m;
      for (let j = 1; j < m - 1; j++) {
        if (end === 0) indices.push(base, base + j + 1, base + j);
        else indices.push(base, base + j, base + j + 1);
      }
    }
  }

  return geo;
}

/** 山墙屋顶：脊线沿 z 轴，w 宽（x）、d 深（z）、h 脊高 */
export function gableRoofGeometry(w, d, h) {
  const hw = w / 2;
  const hd = d / 2;
  const A = [-hw, 0, -hd];
  const B = [hw, 0, -hd];
  const C = [-hw, 0, hd];
  const D = [hw, 0, hd];
  const E = [0, h, -hd];
  const F = [0, h, hd];

  // 三角形按外法线方向绕序（右手系），保证坡面/山墙朝外
  const tris = [
    // 两个坡面
    [B, F, D], [B, E, F],
    [C, E, A], [C, F, E],
    // 两个山墙端
    [A, E, B],
    [D, F, C],
    // 底面（天花板，朝下）
    [A, D, C], [A, B, D],
  ];

  const positions = [];
  const uvs = [];
  for (const tri of tris) {
    for (const v of tri) {
      positions.push(v[0], v[1], v[2]);
      uvs.push((v[0] + hw) / w, (v[2] + hd) / d);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.computeVertexNormals();
  return geo;
}

/** 四坡屋顶（攒尖/庑殿）：底面 w×d，脊线沿 z 长度 ridge */
export function hipRoofGeometry(w, d, h, ridge = 0) {
  const hw = w / 2;
  const hd = d / 2;
  const hr = Math.max(0, ridge) / 2;
  const A = [-hw, 0, -hd];
  const B = [hw, 0, -hd];
  const C = [-hw, 0, hd];
  const D = [hw, 0, hd];
  const E = [0, h, -hr];
  const F = [0, h, hr];
  const tris = [
    [A, E, B],
    [B, F, D], [B, E, F],
    [D, F, C],
    [C, E, A], [C, F, E],
    [A, D, C], [A, B, D],
  ];
  const positions = [];
  const uvs = [];
  for (const tri of tris) {
    for (const v of tri) {
      positions.push(v[0], v[1], v[2]);
      uvs.push((v[0] + hw) / w, (v[2] + hd) / d);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.computeVertexNormals();
  return geo;
}

/** 圆角盒（手工模型的柔边） */
export function roundedBox(w, h, d, radius = 0.05, segments = 2) {
  const r = Math.min(radius, Math.min(w, h, d) / 2 - 1e-3);
  return new RoundedBoxGeometry(w, h, d, segments, r);
}

/** 把几何体转成“平面着色”版本（手工切割感） */
export function flatten(geo) {
  const g = geo.toNonIndexed();
  g.computeVertexNormals();
  return g;
}

/** 采样 2D Catmull-Rom 曲线（道路用），points 为 [x, z] */
export function curve2DPoints(points, divisions = 120) {
  const v3 = points.map((p) => new THREE.Vector3(p[0], 0, p[1]));
  const curve = new THREE.CatmullRomCurve3(v3, false, 'catmullrom', 0.5);
  const out = [];
  for (let i = 0; i <= divisions; i++) {
    const p = curve.getPointAt(i / divisions);
    out.push([p.x, p.z]);
  }
  return out;
}
