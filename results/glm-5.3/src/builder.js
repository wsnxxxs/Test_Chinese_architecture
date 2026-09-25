import * as THREE from 'three';

/**
 * 体素世界：把所有方块收集进一个 Map（坐标去重，后写覆盖），
 * 最终导出为单个 InstancedMesh —— 全场景一次绘制调用，保证帧率。
 * 体素坐标 (x, y, z) 均为整数，占据空间 [x,x+1) × [y,y+1) × [z,z+1)。
 */
export class VoxelWorld {
  constructor() {
    this.map = new Map();
  }

  static key(x, y, z) {
    // x,z ∈ [-512,511]，y ∈ [0,255]
    return ((x + 512) << 18) | (y << 10) | (z + 512);
  }

  add(x, y, z, color) {
    this.map.set(VoxelWorld.key(x, y, z), color);
  }

  box(x0, x1, y0, y1, z0, z1, color) {
    for (let x = x0; x <= x1; x++)
      for (let y = y0; y <= y1; y++)
        for (let z = z0; z <= z1; z++) this.add(x, y, z, color);
  }

  count() {
    return this.map.size;
  }

  toMesh(material) {
    const n = this.map.size;
    const geo = new THREE.BoxGeometry(1, 1, 1);
    const mat = material ?? new THREE.MeshLambertMaterial({ color: 0xffffff });
    const mesh = new THREE.InstancedMesh(geo, mat, n);
    const M = new THREE.Matrix4();
    const C = new THREE.Color();
    let i = 0;
    for (const [k, c] of this.map) {
      const x = (k >>> 18) - 512;
      const y = (k >> 10) & 0xff;
      const z = (k & 0x3ff) - 512;
      M.makeTranslation(x + 0.5, y + 0.5, z + 0.5);
      mesh.setMatrixAt(i, M);
      mesh.setColorAt(i, C.setHex(c));
      i++;
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    return mesh;
  }
}
