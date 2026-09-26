import * as THREE from 'three';

/**
 * 沿采样点生成一条水平带状几何体（道路、河床、道砟等）。
 * samples: Vector3[]（仅用 x/z，y 统一取参数 y）
 * widthFn(i) 返回该采样点处的半宽，或传 width 常量（全宽）。
 */
export function makeRibbon(samples, {
  closed = false,
  width = 2,
  widthFn = null,
  y = 0,
  uvScale = 3,
  caps = true,
} = {}) {
  const n = samples.length;
  const half = (i) => (widthFn ? widthFn(i) : width / 2);

  const positions = [];
  const uvs = [];
  const indices = [];
  const normals = [];

  let cum = 0;

  for (let i = 0; i < n; i++) {
    const p = samples[i];
    const prev = samples[(i - 1 + n) % n];
    const next = samples[(i + 1) % n];

    let tx, tz;
    if (i === 0 && !closed) {
      tx = next.x - p.x; tz = next.z - p.z;
    } else if (i === n - 1 && !closed) {
      tx = p.x - prev.x; tz = p.z - prev.z;
    } else {
      tx = next.x - prev.x; tz = next.z - prev.z;
    }
    const tl = Math.hypot(tx, tz) || 1;
    tx /= tl; tz /= tl;
    // 水平法向
    const nx = -tz;
    const nz = tx;

    if (i > 0) {
      const q = samples[i - 1];
      cum += Math.hypot(p.x - q.x, p.z - q.z);
    }

    const hw = half(i);
    positions.push(p.x + nx * hw, y, p.z + nz * hw);
    positions.push(p.x - nx * hw, y, p.z - nz * hw);
    normals.push(0, 1, 0, 0, 1, 0);
    uvs.push(0, cum / uvScale, 1, cum / uvScale);
  }

  const segs = closed ? n : n - 1;
  for (let i = 0; i < segs; i++) {
    const a = (2 * i) % (2 * n);
    const b = a + 1;
    const c = (2 * (i + 1)) % (2 * n);
    const d = c + 1;
    indices.push(a, c, b, b, c, d);
  }

  if (!closed && caps) {
    // 两端封口
    const p0 = samples[0];
    const ci0 = positions.length / 3;
    positions.push(p0.x, y, p0.z);
    normals.push(0, 1, 0);
    uvs.push(0.5, 0);
    indices.push(ci0, 1, 0);

    const p1 = samples[n - 1];
    const ci1 = positions.length / 3;
    positions.push(p1.x, y, p1.z);
    normals.push(0, 1, 0);
    uvs.push(0.5, cum / uvScale);
    const a = 2 * (n - 1);
    indices.push(ci1, a, a + 1);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  return geo;
}

/** 折线点列密集重采样 */
export function resamplePolyline(ctrl, samplesPerSeg = 14) {
  const curve = new THREE.CatmullRomCurve3(
    ctrl.map((p) => new THREE.Vector3(p[0], 0, p[1])),
    false,
    'centripetal'
  );
  return curve.getPoints((ctrl.length - 1) * samplesPerSeg);
}

/** 点到线段距离（x-z 平面） */
export function distToSegment(px, pz, ax, az, bx, bz) {
  const dx = bx - ax;
  const dz = bz - az;
  const len2 = dx * dx + dz * dz;
  let t = len2 > 0 ? ((px - ax) * dx + (pz - az) * dz) / len2 : 0;
  t = Math.max(0, Math.min(1, t));
  const qx = ax + t * dx;
  const qz = az + t * dz;
  return Math.hypot(px - qx, pz - qz);
}
