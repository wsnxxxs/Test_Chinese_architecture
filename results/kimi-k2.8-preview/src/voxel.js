import * as THREE from 'three';

// 体素收集器：所有体素按坐标存入 Map（后写覆盖先写，便于在墙上"开"门窗），
// 构建时按颜色分批，每个颜色一个 InstancedMesh —— 全场景仅约 20 个 draw call。
export class VoxelWorld {
  constructor() {
    this.cells = new Map();
  }

  add(x, y, z, color) {
    this.cells.set(x + '|' + y + '|' + z, color);
  }

  box(x, y, z, w, h, d, color) {
    for (let i = 0; i < w; i++)
      for (let j = 0; j < h; j++)
        for (let k = 0; k < d; k++)
          this.add(x + i, y + j, z + k, color);
  }

  count() {
    return this.cells.size;
  }

  build(size = 1) {
    const groups = new Map();
    for (const [key, color] of this.cells) {
      const p = key.split('|');
      let arr = groups.get(color);
      if (!arr) { arr = []; groups.set(color, arr); }
      arr.push(+p[0], +p[1], +p[2]);
    }
    const geo = new THREE.BoxGeometry(size, size, size);
    const root = new THREE.Group();
    const m4 = new THREE.Matrix4();
    for (const [color, arr] of groups) {
      const n = arr.length / 3;
      const mat = new THREE.MeshLambertMaterial({ color });
      const mesh = new THREE.InstancedMesh(geo, mat, n);
      for (let i = 0; i < n; i++) {
        m4.makeTranslation(
          (arr[i * 3] + 0.5) * size,
          (arr[i * 3 + 1] + 0.5) * size,
          (arr[i * 3 + 2] + 0.5) * size
        );
        mesh.setMatrixAt(i, m4);
      }
      mesh.instanceMatrix.needsUpdate = true;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      root.add(mesh);
    }
    return root;
  }
}
