/**
 * 体素核心：整数坐标画布 + 隐藏面剔除 + 逐角 AO 的合并网格生成。
 *
 * 设计要点
 * - 所有体素写进一张 Map（数值键），最终合并成 1 个 BufferGeometry。
 *   整座建筑群只有「不透明 / 水面 / 发光」3 个 draw call 起步。
 * - 只发射朝向空邻居的面，内部面全部剔除（体素场景最有效的减面手段）。
 * - 每个面 4 顶点做简化 AO（side1 && side2 → 最暗），配合法线方向烘焙，
 *   即使不用后期也能得到体素特有的体积感。
 * - 顶点色以线性空间写入（Uint8 normalized），供 Lambert 光照直接使用。
 */
import * as THREE from 'three';

// ---- 数值键编码 --------------------------------------------------------
// 布局：key = (x + OX) + y * SX + (z + OZ) * PLANE
//   低位 PLANE 以内 = (x + OX) + y * SX   （x 偏移量 < SX，y < SY）
//   高位            = z + OZ
const OX = 700;
const OZ = 1000;
const SX = 4096;      // > 2 * OX
const SY = 512;       // y 上限
const PLANE = SX * SY;

export const vkey = (x, y, z) => (x + OX) + y * SX + (z + OZ) * PLANE;

// ---- 面的定义 ----------------------------------------------------------
// n: 外法线；u/v: 该面内两条切向（用于 AO 采样）；c: 4 个角的单位偏移（逆时针）
const FACES = [
  { n: [1, 0, 0], u: [0, 1, 0], v: [0, 0, 1], c: [[1, 0, 0], [1, 1, 0], [1, 1, 1], [1, 0, 1]], shade: 0.84 },
  { n: [-1, 0, 0], u: [0, 0, 1], v: [0, 1, 0], c: [[0, 0, 0], [0, 0, 1], [0, 1, 1], [0, 1, 0]], shade: 0.8 },
  { n: [0, 1, 0], u: [0, 0, 1], v: [1, 0, 0], c: [[0, 1, 0], [0, 1, 1], [1, 1, 1], [1, 1, 0]], shade: 1.0 },
  { n: [0, -1, 0], u: [1, 0, 0], v: [0, 0, 1], c: [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]], shade: 0.46 },
  { n: [0, 0, 1], u: [1, 0, 0], v: [0, 1, 0], c: [[0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]], shade: 0.74 },
  { n: [0, 0, -1], u: [0, 1, 0], v: [1, 0, 0], c: [[0, 0, 0], [0, 1, 0], [1, 1, 0], [1, 0, 0]], shade: 0.7 },
];

const AO_TABLE = [0.58, 0.77, 0.9, 1.0];

/** 体素画布：写入体素 / 查询占位 / 批量形状 */
export class VoxelCanvas {
  constructor(name = 'canvas') {
    this.name = name;
    /** @type {Map<number, number>} key -> sRGB hex */
    this.cells = new Map();
    this._colors = new Map();
  }

  get size() {
    return this.cells.size;
  }

  set(x, y, z, color) {
    if (y < 0 || y >= SY) return;
    this.cells.set(vkey(x | 0, y | 0, z | 0), color);
  }

  get(x, y, z) {
    return this.cells.get(vkey(x | 0, y | 0, z | 0));
  }

  has(x, y, z) {
    return this.cells.has(vkey(x | 0, y | 0, z | 0));
  }

  /** 实心长方体（闭区间，自动纠正 min/max） */
  box(x0, y0, z0, x1, y1, z1, color) {
    const ax = Math.min(x0, x1), bx = Math.max(x0, x1);
    const ay = Math.min(y0, y1), by = Math.max(y0, y1);
    const az = Math.min(z0, z1), bz = Math.max(z0, z1);
    for (let x = ax; x <= bx; x++) {
      for (let y = ay; y <= by; y++) {
        for (let z = az; z <= bz; z++) this.set(x, y, z, color);
      }
    }
  }

  /** 挖空 */
  carve(x0, y0, z0, x1, y1, z1) {
    const ax = Math.min(x0, x1), bx = Math.max(x0, x1);
    const ay = Math.min(y0, y1), by = Math.max(y0, y1);
    const az = Math.min(z0, z1), bz = Math.max(z0, z1);
    for (let x = ax; x <= bx; x++) {
      for (let y = ay; y <= by; y++) {
        for (let z = az; z <= bz; z++) this.cells.delete(vkey(x, y, z));
      }
    }
  }

  /** 空心墙壳 */
  shell(x0, y0, z0, x1, y1, z1, color) {
    this.box(x0, y0, z0, x1, y1, z0, color);
    this.box(x0, y0, z1, x1, y1, z1, color);
    this.box(x0, y0, z0, x0, y1, z1, color);
    this.box(x1, y0, z0, x1, y1, z1, color);
    this.box(x0, y1, z0, x1, y1, z1, color);
  }

  /** 八角柱截面（3 宽时去掉四角，模仿圆柱） */
  pillar(x, z, y0, y1, color, octagonal = true) {
    for (let y = y0; y <= y1; y++) {
      this.set(x, y, z, color);
      if (octagonal) {
        this.set(x - 1, y, z, color);
        this.set(x + 1, y, z, color);
        this.set(x, y, z - 1, color);
        this.set(x, y, z + 1, color);
      } else {
        this.box(x - 1, y, z - 1, x + 1, y, z + 1, color);
      }
    }
  }

  /** 线性颜色（ColorManagement 已把 hex 转到线性工作空间） */
  linear(hex) {
    let c = this._colors.get(hex);
    if (!c) {
      c = new THREE.Color(hex);
      this._colors.set(hex, c);
    }
    return c;
  }
}

/**
 * 合并网格：隐藏面剔除 + AO。
 * @returns {{geometry: THREE.BufferGeometry, quads: number}}
 */
export function buildVoxelGeometry(canvas, { jitter = 0.04, useAO = true } = {}) {
  const cells = canvas.cells;
  const total = cells.size;
  const keys = new Array(total);
  const px = new Int32Array(total);
  const py = new Int32Array(total);
  const pz = new Int32Array(total);

  let n = 0;
  for (const k of cells.keys()) {
    const az = k % PLANE;               // (x + OX) + y * SX
    keys[n] = k;
    px[n] = (az % SX) - OX;
    py[n] = (az / SX) | 0;
    pz[n] = Math.floor(k / PLANE) - OZ;
    n++;
  }

  // pass 1: 数面
  let quads = 0;
  for (let i = 0; i < total; i++) {
    const x = px[i], y = py[i], z = pz[i];
    for (let f = 0; f < 6; f++) {
      const fc = FACES[f];
      if (!cells.has(vkey(x + fc.n[0], y + fc.n[1], z + fc.n[2]))) quads++;
    }
  }
  if (quads === 0) {
    return { geometry: new THREE.BufferGeometry(), quads: 0 };
  }

  // pass 2: 填数据
  const positions = new Float32Array(quads * 4 * 3);
  const normals = new Int8Array(quads * 4 * 3);
  const colors = new Uint8Array(quads * 4 * 3);
  const indices = new Uint32Array(quads * 6);

  let ip = 0;
  let q = 0;

  for (let i = 0; i < total; i++) {
    const x = px[i], y = py[i], z = pz[i];
    const col = canvas.linear(cells.get(keys[i]));
    const h = ((Math.imul(keys[i], 2654435761) >>> 8) & 1023) / 1023 - 0.5;
    const jit = 1 + h * 2 * jitter;

    for (let f = 0; f < 6; f++) {
      const fc = FACES[f];
      const nx = x + fc.n[0], ny = y + fc.n[1], nz = z + fc.n[2];
      if (cells.has(vkey(nx, ny, nz))) continue;

      const shade = fc.shade * jit;
      const base = q * 12;

      for (let c = 0; c < 4; c++) {
        const corner = fc.c[c];
        const o = base + c * 3;
        positions[o] = x + corner[0];
        positions[o + 1] = y + corner[1];
        positions[o + 2] = z + corner[2];
        normals[o] = fc.n[0] * 127;
        normals[o + 1] = fc.n[1] * 127;
        normals[o + 2] = fc.n[2] * 127;

        let k = shade;
        if (useAO) {
          const du = (corner[0] === fc.u[0] && corner[1] === fc.u[1] && corner[2] === fc.u[2]) ? 1 : 0;
          const dv = (corner[0] === fc.v[0] && corner[1] === fc.v[1] && corner[2] === fc.v[2]) ? 1 : 0;
          const ax = nx + fc.u[0] * du, ay = ny + fc.u[1] * du, az = nz + fc.u[2] * du;
          const bx = nx + fc.v[0] * dv, by = ny + fc.v[1] * dv, bz = nz + fc.v[2] * dv;
          const s1 = cells.has(vkey(ax, ay, az)) ? 1 : 0;
          const s2 = cells.has(vkey(bx, by, bz)) ? 1 : 0;
          const cc = cells.has(vkey(ax + fc.v[0] * dv, ay + fc.v[1] * dv, az + fc.v[2] * dv)) ? 1 : 0;
          k *= AO_TABLE[s1 && s2 ? 0 : 3 - (s1 + s2 + cc)];
        }

        colors[o] = Math.min(255, Math.max(0, col.r * k * 255)) | 0;
        colors[o + 1] = Math.min(255, Math.max(0, col.g * k * 255)) | 0;
        colors[o + 2] = Math.min(255, Math.max(0, col.b * k * 255)) | 0;
      }

      const b = q * 4;
      indices[ip++] = b; indices[ip++] = b + 1; indices[ip++] = b + 2;
      indices[ip++] = b; indices[ip++] = b + 2; indices[ip++] = b + 3;
      q++;
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3, true));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3, true));
  geometry.setIndex(new THREE.BufferAttribute(indices, 1));
  geometry.computeBoundingSphere();
  geometry.computeBoundingBox();
  return { geometry, quads };
}

/**
 * 地面网格：只发顶面，每 cell 一格，适合大面积铺装/草地/水面。
 * 相比逐体素地面，quad 数下降 4~16 倍。
 */
export function buildFlatGrid({ x0, z0, x1, z1, cell = 2, y = 0, colorAt }) {
  const nx = Math.ceil((x1 - x0) / cell);
  const nz = Math.ceil((z1 - z0) / cell);
  const quads = nx * nz;
  const positions = new Float32Array(quads * 4 * 3);
  const normals = new Int8Array(quads * 4 * 3);
  const colors = new Uint8Array(quads * 4 * 3);
  const indices = new Uint32Array(quads * 6);
  const cache = new Map();
  const col = (hex) => {
    let c = cache.get(hex);
    if (!c) { c = new THREE.Color(hex); cache.set(hex, c); }
    return c;
  };

  let q = 0;
  for (let gz = 0; gz < nz; gz++) {
    for (let gx = 0; gx < nx; gx++) {
      const ax = x0 + gx * cell;
      const az = z0 + gz * cell;
      const bx = ax + cell;
      const bz = az + cell;
      const c = col(colorAt(ax, az, gx, gz));
      const o = q * 12;
      const P = [[ax, y, az], [ax, y, bz], [bx, y, bz], [bx, y, az]];
      for (let k = 0; k < 4; k++) {
        positions[o + k * 3] = P[k][0];
        positions[o + k * 3 + 1] = P[k][1];
        positions[o + k * 3 + 2] = P[k][2];
        normals[o + k * 3] = 0;
        normals[o + k * 3 + 1] = 127;
        normals[o + k * 3 + 2] = 0;
        colors[o + k * 3] = Math.min(255, c.r * 255) | 0;
        colors[o + k * 3 + 1] = Math.min(255, c.g * 255) | 0;
        colors[o + k * 3 + 2] = Math.min(255, c.b * 255) | 0;
      }
      const b = q * 4;
      indices[q * 6] = b; indices[q * 6 + 1] = b + 1; indices[q * 6 + 2] = b + 2;
      indices[q * 6 + 3] = b; indices[q * 6 + 4] = b + 2; indices[q * 6 + 5] = b + 3;
      q++;
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3, true));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3, true));
  geometry.setIndex(new THREE.BufferAttribute(indices, 1));
  geometry.computeBoundingSphere();
  return { geometry, quads };
}
