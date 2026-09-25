import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/**
 * 体素建造器：把所有方块按材质分桶，最终合并为极少量 Mesh（低 DrawCall）。
 *
 * scope() 返回一个建筑的“局部坐标画笔”：
 *   - box(mat, x, yBottom, z, sx, sy, sz)：x/z 为局部中心，y 为底面高度
 *   - world(x, y, z)：局部坐标 → 世界坐标（用于摆放匾额等独立网格）
 *   - rotY()：该建筑整体绕 Y 的旋转角（用于旋转网格朝向）
 */
export class VoxelBuilder {
  constructor() {
    this.buckets = new Map(); // matName -> THREE.BufferGeometry[]
    this.count = 0;
  }

  scope(ox = 0, oz = 0, rotY = 0) {
    const self = this;
    const sn = Math.sin(rotY);
    const cs = Math.cos(rotY);
    const swap = Math.abs(sn) > 0.5; // 90°/270°：交换 x/z 尺寸
    return {
      box(mat, x, yBottom, z, sx, sy, sz) {
        const wx = ox + x * cs + z * sn;
        const wz = oz - x * sn + z * cs;
        const g = new THREE.BoxGeometry(swap ? sz : sx, sy, swap ? sx : sz);
        g.translate(wx, yBottom + sy / 2, wz);
        let arr = self.buckets.get(mat);
        if (!arr) { arr = []; self.buckets.set(mat, arr); }
        arr.push(g);
        self.count++;
      },
      world(x, y, z) {
        return new THREE.Vector3(ox + x * cs + z * sn, y, oz - x * sn + z * cs);
      },
      rotY() { return rotY; },
    };
  }

  /** 合并为 Mesh 数组（每种材质一个 Mesh） */
  finalize(materials) {
    const meshes = [];
    for (const [matName, geos] of this.buckets) {
      const mat = materials[matName];
      if (!mat) { console.warn('missing material:', matName); continue; }
      const merged = mergeGeometries(geos, false);
      if (!merged) { console.warn('merge failed for', matName); continue; }
      merged.clearGroups();
      const mesh = new THREE.Mesh(merged, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.name = 'voxel_' + matName;
      meshes.push(mesh);
      geos.forEach(g => g.dispose());
    }
    return meshes;
  }
}
