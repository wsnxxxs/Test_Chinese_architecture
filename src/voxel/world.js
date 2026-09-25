import { SX, SY, SZ } from '../config.js';

/** 稠密体素网格：每格 1 字节调色板索引 */
export class World {
  constructor(sx = SX, sy = SY, sz = SZ) {
    this.sx = sx;
    this.sy = sy;
    this.sz = sz;
    this.data = new Uint8Array(sx * sy * sz);
    this.lights = []; // 灯笼等光源（体素坐标）
    this.labels = []; // 建筑标注
  }
  inside(x, y, z) {
    return x >= 0 && y >= 0 && z >= 0 && x < this.sx && y < this.sy && z < this.sz;
  }
  get(x, y, z) {
    if (!this.inside(x, y, z)) return 0;
    return this.data[(y * this.sz + z) * this.sx + x];
  }
  set(x, y, z, c) {
    if (!this.inside(x, y, z)) return;
    this.data[(y * this.sz + z) * this.sx + x] = c;
  }
  /** 半开区间 [x0,x1) × [y0,y1) × [z0,z1) */
  box(x0, y0, z0, x1, y1, z1, c) {
    for (let y = y0; y < y1; y++) for (let z = z0; z < z1; z++) for (let x = x0; x < x1; x++) this.set(x, y, z, c);
  }
  /** 该列最高实体体素的 y（无则 -1） */
  top(x, z) {
    for (let y = this.sy - 1; y >= 0; y--) if (this.get(x, y, z)) return y;
    return -1;
  }
  count() {
    let n = 0;
    const d = this.data;
    for (let i = 0; i < d.length; i++) if (d[i]) n++;
    return n;
  }
}

/**
 * 局部坐标系：建筑以 (cx, cz) 为中心（体素边界），u 为面宽方向，v 为进深方向，
 * +v 指向建筑正面。facing 表示正面朝向：S(+z) / N(-z) / E(+x) / W(-x)。
 * 以格为单位的镜像关系 u ↔ -u-1 保证左右对称。
 */
export class Frame {
  constructor(world, cx, cz, facing = 'S') {
    this.w = world;
    this.cx = cx;
    this.cz = cz;
    this.f = facing;
  }
  set(u, y, v, c) {
    const { cx, cz } = this;
    switch (this.f) {
      case 'S': this.w.set(cx + u, y, cz + v, c); break;
      case 'N': this.w.set(cx - u - 1, y, cz - v - 1, c); break;
      case 'E': this.w.set(cx + v, y, cz - u - 1, c); break;
      default: this.w.set(cx - v - 1, y, cz + u, c); break; // 'W'
    }
  }
  get(u, y, v) {
    const { cx, cz } = this;
    switch (this.f) {
      case 'S': return this.w.get(cx + u, y, cz + v);
      case 'N': return this.w.get(cx - u - 1, y, cz - v - 1);
      case 'E': return this.w.get(cx + v, y, cz - u - 1);
      default: return this.w.get(cx - v - 1, y, cz + u);
    }
  }
  box(u0, y0, v0, u1, y1, v1, c) {
    for (let y = y0; y < y1; y++) for (let v = v0; v < v1; v++) for (let u = u0; u < u1; u++) this.set(u, y, v, c);
  }
  /** 连续局部坐标 → 体素世界坐标 */
  toWorld(uc, y, vc) {
    const { cx, cz } = this;
    switch (this.f) {
      case 'S': return { x: cx + uc, y, z: cz + vc };
      case 'N': return { x: cx - uc, y, z: cz - vc };
      case 'E': return { x: cx + vc, y, z: cz - uc };
      default: return { x: cx - vc, y, z: cz + uc };
    }
  }
}
