import * as THREE from 'three';

// 可复现的伪随机(体素明暗抖动用)
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * 体素世界:按整数网格记录体素颜色,
 * 最终合并为两个 InstancedMesh(普通体素 / 自发光体素),各一次 draw call。
 */
export class VoxelWorld {
  constructor() {
    this.map = new Map(); // 普通体素 key -> hex 颜色
    this.glow = new Map(); // 自发光体素(灯笼/窗)
    this._tmpColor = new THREE.Color();
  }

  static key(x, y, z) {
    return x + '|' + y + '|' + z;
  }

  set(x, y, z, color) {
    this.map.set(VoxelWorld.key(x | 0, y | 0, z | 0), color);
  }

  setGlow(x, y, z, color) {
    this.glow.set(VoxelWorld.key(x | 0, y | 0, z | 0), color);
  }

  has(x, y, z) {
    return this.map.has(VoxelWorld.key(x, y, z));
  }

  carve(x, y, z) {
    this.map.delete(VoxelWorld.key(x | 0, y | 0, z | 0));
  }

  // 闭区间填充长方体
  box(x0, y0, z0, x1, y1, z1, color) {
    for (let x = x0; x <= x1; x++)
      for (let y = y0; y <= y1; y++)
        for (let z = z0; z <= z1; z++) this.set(x, y, z, color);
    return this;
  }

  // 空心墙体(四面周长,不含顶/底)
  walls(x0, z0, x1, z1, y0, y1, color) {
    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) {
        this.set(x, y, z0, color);
        this.set(x, y, z1, color);
      }
      for (let z = z0; z <= z1; z++) {
        this.set(x0, y, z, color);
        this.set(x1, y, z, color);
      }
    }
    return this;
  }

  _buildInstanced(entries, material, jitter, rng) {
    const geo = new THREE.BoxGeometry(1, 1, 1);
    const mesh = new THREE.InstancedMesh(geo, material, entries.length);
    const m = new THREE.Matrix4();
    const c = new THREE.Color();
    for (let i = 0; i < entries.length; i++) {
      const [x, y, z, hex] = entries[i];
      m.makeTranslation(x, y, z);
      mesh.setMatrixAt(i, m);
      c.setHex(hex);
      if (jitter > 0) {
        const v = (rng() - 0.5) * 2 * jitter;
        c.offsetHSL((rng() - 0.5) * 0.015, (rng() - 0.5) * 0.04, v);
      }
      mesh.setColorAt(i, c);
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    return mesh;
  }

  /**
   * 生成渲染网格。
   * 剔除规则:普通体素的 6 个邻位全部被普通体素占据时不可见,跳过。
   * 自发光体素不参与剔除(数量少)。
   */
  buildMeshes({ seed = 20260925, jitter = 0.045 } = {}) {
    const rng = mulberry32(seed);
    const solidEntries = [];
    for (const [key, hex] of this.map) {
      const [x, y, z] = key.split('|').map(Number);
      if (
        this.has(x + 1, y, z) &&
        this.has(x - 1, y, z) &&
        this.has(x, y + 1, z) &&
        this.has(x, y - 1, z) &&
        this.has(x, y, z + 1) &&
        this.has(x, y, z - 1)
      ) {
        continue; // 完全被包裹,剔除
      }
      solidEntries.push([x, y, z, hex]);
    }
    const glowEntries = [];
    for (const [key, hex] of this.glow) {
      const [x, y, z] = key.split('|').map(Number);
      glowEntries.push([x, y, z, hex]);
    }

    const lambert = new THREE.MeshLambertMaterial();
    const solidMesh = this._buildInstanced(solidEntries, lambert, jitter, rng);
    solidMesh.castShadow = true;
    solidMesh.receiveShadow = true;

    const basic = new THREE.MeshBasicMaterial();
    const glowMesh = this._buildInstanced(glowEntries, basic, 0, rng);

    const group = new THREE.Group();
    group.add(solidMesh, glowMesh);
    group.userData.stats = {
      totalVoxels: this.map.size + this.glow.size,
      drawnVoxels: solidEntries.length + glowEntries.length
    };
    return group;
  }
}
