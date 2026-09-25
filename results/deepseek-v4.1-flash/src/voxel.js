import * as THREE from 'three';

/**
 * voxel.js — 体素写入器 + 实例化渲染
 *
 * 坐标约定：索引 i 的方块占据世界空间 [i, i+1]。
 * 因此以 0 为中轴的对称体（宽度 2a）写作 x ∈ [-a, a-1]，跨度为 [-a, a]，严格对称。
 * 地面层写在 y = -1（顶面 y = 0），建筑自 y = 0 起。
 *
 * 性能策略：
 *  1) 相邻同色块用 Map 去重（同坐标后写覆盖前写）
 *  2) 生成实例前剔除「六面全被占据」的内部体素 —— 视觉与阴影完全等价，省掉大量方块
 *  3) 单一 BoxGeometry + InstancedMesh，全场 1 次 draw call（发光件单独 1 次）
 */

const SX = 4096;          // z 步长
const SXZ = 4096 * 4096;  // y 步长
const OX = 1024;
const OZ = 1024;
const OY = 128;

export class VoxelBuilder {
  constructor() {
    this.solid = new Map(); // key -> 0xRRGGBB
    this.glow = new Map();  // 自发光体素（灯笼等）
    this._k = 0;
  }

  /* ---------------- 基础写入 ---------------- */

  key(x, y, z) {
    return ((y + OY) * SX + (x + OX)) * SX + (z + OZ);
  }

  set(x, y, z, color) {
    x |= 0; y |= 0; z |= 0;
    this.solid.set(this.key(x, y, z), color);
    return this;
  }

  setGlow(x, y, z, color) {
    x |= 0; y |= 0; z |= 0;
    this.glow.set(this.key(x, y, z), color);
    return this;
  }

  del(x, y, z) {
    const k = this.key(x | 0, y | 0, z | 0);
    this.solid.delete(k);
    this.glow.delete(k);
    return this;
  }

  /** 实心长方体，全部为闭区间 */
  bx(x0, x1, y0, y1, z0, z1, color) {
    for (let y = y0; y <= y1; y++)
      for (let x = x0; x <= x1; x++)
        for (let z = z0; z <= z1; z++) this.set(x, y, z, color);
    return this;
  }

  /** 实心长方体（自发光） */
  glowBox(x0, x1, y0, y1, z0, z1, color) {
    for (let y = y0; y <= y1; y++)
      for (let x = x0; x <= x1; x++)
        for (let z = z0; z <= z1; z++) this.setGlow(x, y, z, color);
    return this;
  }

  /** 单层水平板（y 固定） */
  plateY(x0, x1, z0, z1, y, color) {
    for (let x = x0; x <= x1; x++)
      for (let z = z0; z <= z1; z++) this.set(x, y, z, color);
    return this;
  }

  /** 单层水平空心环（只描边），宽厚 t */
  ringY(x0, x1, z0, z1, y, color, t = 1) {
    for (let x = x0; x <= x1; x++)
      for (let z = z0; z <= z1; z++) {
        const edge = x < x0 + t || x > x1 - t || z < z0 + t || z > z1 - t;
        if (edge) this.set(x, y, z, color);
      }
    return this;
  }

  /** 竖向矩形墙片（z 固定，法线朝 ±z） */
  wallXY(x0, x1, y0, y1, z, color) {
    for (let x = x0; x <= x1; x++)
      for (let y = y0; y <= y1; y++) this.set(x, y, z, color);
    return this;
  }

  /** 竖向矩形墙片（x 固定，法线朝 ±x） */
  wallZY(z0, z1, y0, y1, x, color) {
    for (let z = z0; z <= z1; z++)
      for (let y = y0; y <= y1; y++) this.set(x, y, z, color);
    return this;
  }

  lineX(x0, x1, y, z, color) {
    for (let x = x0; x <= x1; x++) this.set(x, y, z, color);
    return this;
  }

  lineZ(z0, z1, y, x, color) {
    for (let z = z0; z <= z1; z++) this.set(x, y, z, color);
    return this;
  }

  lineY(y0, y1, x, z, color) {
    for (let y = y0; y <= y1; y++) this.set(x, y, z, color);
    return this;
  }

  /** 盒子外壳（四面墙，可选加底板/顶板），厚 t */
  shell(x0, x1, y0, y1, z0, z1, color, t = 1, opt = {}) {
    const { floor = false, cap = false } = opt;
    for (let y = y0; y <= y1; y++)
      for (let x = x0; x <= x1; x++)
        for (let z = z0; z <= z1; z++) {
          const isSide = x < x0 + t || x > x1 - t || z < z0 + t || z > z1 - t;
          const isFloor = floor && y < y0 + t;
          const isCap = cap && y > y1 - t;
          if (isSide || isFloor || isCap) this.set(x, y, z, color);
        }
    return this;
  }

  /* ---------------- 统计 ---------------- */

  get solidCount() { return this.solid.size; }
  get glowCount() { return this.glow.size; }

  /* ---------------- 生成网格 ---------------- */

  /**
   * @returns {{solid: THREE.InstancedMesh|null, glow: THREE.InstancedMesh|null,
   *            authored:number, hiddenCulled:number, drawn:number}}
   */
  build({ jitter = 0.05, ao = 0.05, aoCap = 0.16 } = {}) {
    // 占据测试用「并集」，发光体素同样遮挡
    const occ = new Set(this.solid.keys());
    for (const k of this.glow.keys()) occ.add(k);

    const NE = [SX, -SX, SXZ, -SXZ, 1, -1];

    /* --- 主网格 --- */
    const n = this.solid.size;
    const px = new Float32Array(n * 3); // 位置
    const cl = new Float32Array(n * 3); // 颜色
    let c = 0, culled = 0;
    const tmp = new THREE.Color();

    for (const [k, hex] of this.solid) {
      let hidden = true;
      for (let i = 0; i < 6; i++) {
        if (!occ.has(k + NE[i])) { hidden = false; break; }
      }
      if (hidden) { culled++; continue; }

      const z = (k % SX) - OZ;
      const t = (k - (z + OZ)) / SX;
      const x = (t % SX) - OX;
      const y = Math.floor(t / SX) - OY;

      // 伪随机（按坐标散列，稳定不闪烁）
      const h = hash3(x, y, z);

      // 侧面遮挡 → 简易 AO；越高越亮一点点，模拟天光
      let occN = 0;
      for (let i = 0; i < 4; i++) if (occ.has(k + NE[i])) occN++;
      let f = 1 - Math.min(ao * occN, aoCap);

      tmp.setHex(hex);
      const js = 1 + (h - 0.5) * 2 * jitter;
      const jr = 1 + (hash3(x + 71, y, z) - 0.5) * 2 * jitter * 0.5;
      px[c * 3] = x + 0.5;
      px[c * 3 + 1] = y + 0.5;
      px[c * 3 + 2] = z + 0.5;
      cl[c * 3] = tmp.r * f * js * jr;
      cl[c * 3 + 1] = tmp.g * f * js;
      cl[c * 3 + 2] = tmp.b * f * js * (2 - jr);
      c++;
    }

    const solid = this._mesh(px, cl, c, false, { jitter, ao, aoCap, occ, NE });

    /* --- 发光网格（不受光照） --- */
    const m = this.glow.size;
    const p2 = new Float32Array(m * 3);
    const c2 = new Float32Array(m * 3);
    let d = 0;
    for (const [k, hex] of this.glow) {
      let hidden = true;
      for (let i = 0; i < 6; i++) if (!occ.has(k + NE[i])) { hidden = false; break; }
      if (hidden) continue;
      const z = (k % SX) - OZ;
      const t = (k - (z + OZ)) / SX;
      const x = (t % SX) - OX;
      const y = Math.floor(t / SX) - OY;
      tmp.setHex(hex);
      const js = 1 + (hash3(x, y, z) - 0.5) * 2 * jitter * 0.6;
      p2[d * 3] = x + 0.5; p2[d * 3 + 1] = y + 0.5; p2[d * 3 + 2] = z + 0.5;
      c2[d * 3] = Math.min(tmp.r * js, 1);
      c2[d * 3 + 1] = Math.min(tmp.g * js, 1);
      c2[d * 3 + 2] = Math.min(tmp.b * js, 1);
      d++;
    }
    const glow = d > 0 ? this._mesh(p2, c2, d, true) : null;

    return {
      solid, glow,
      authored: this.solid.size + this.glow.size,
      hiddenCulled: culled,
      drawn: c + d
    };
  }

  _mesh(pos, col, count, basic, extra) {
    const geo = new THREE.BoxGeometry(1, 1, 1);
    const mat = basic
      ? new THREE.MeshBasicMaterial({ fog: true })
      : new THREE.MeshLambertMaterial({});
    const mesh = new THREE.InstancedMesh(geo, mat, count);
    const m4 = new THREE.Matrix4();
    const cc = new THREE.Color();
    for (let i = 0; i < count; i++) {
      m4.makeTranslation(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
      mesh.setMatrixAt(i, m4);
      cc.setRGB(col[i * 3], col[i * 3 + 1], col[i * 3 + 2], THREE.LinearSRGBColorSpace);
      mesh.setColorAt(i, cc);
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    if (mesh.computeBoundingSphere) mesh.computeBoundingSphere();
    mesh.castShadow = !basic;
    mesh.receiveShadow = !basic;
    mesh.frustumCulled = true;
    mesh.matrixAutoUpdate = false;
    mesh.updateMatrix();
    return mesh;
  }
}

/* 整数散列 → [0,1) */
function hash3(x, y, z) {
  let h = x * 374761393 + y * 668265263 + z * 2147483647;
  h = (h ^ (h >>> 13)) * 1274126177;
  h = h ^ (h >>> 16);
  return ((h >>> 0) % 100000) / 100000;
}
