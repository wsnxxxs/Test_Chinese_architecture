import * as THREE from 'three';

// 体素世界：按颜色分组的 InstancedMesh，去重（同位置后写覆盖），支持发光块
export class VoxelWorld {
  constructor(scene) {
    this.scene = scene;
    this.map = new Map();
    this.meshes = [];
  }

  add(x, y, z, color, { emissive = false, variation = 0.08 } = {}) {
    const key = x + ',' + y + ',' + z;
    const v = 1 + (Math.random() * 2 - 1) * variation;
    const prev = this.map.get(key);
    if (prev) {
      prev.color = color;
      prev.emissive = emissive;
      prev.v = v;
      return;
    }
    this.map.set(key, { x, y, z, color, emissive, v });
  }

  count() {
    return this.map.size;
  }

  build() {
    const groups = new Map();
    for (const b of this.map.values()) {
      const key = b.emissive ? 'e:' + b.color : b.color;
      let g = groups.get(key);
      if (!g) {
        g = { positions: [], variants: [], color: b.color, emissive: b.emissive };
        groups.set(key, g);
      }
      g.positions.push(b.x, b.y, b.z);
      g.variants.push(b.v);
    }

    const geo = new THREE.BoxGeometry(0.96, 0.96, 0.96);
    const dummy = new THREE.Object3D();
    const col = new THREE.Color();

    for (const g of groups.values()) {
      const n = g.positions.length / 3;
      const mat = g.emissive
        ? new THREE.MeshBasicMaterial({ color: 0xffffff })
        : new THREE.MeshLambertMaterial({ color: 0xffffff });
      const mesh = new THREE.InstancedMesh(geo, mat, n);
      for (let i = 0; i < n; i++) {
        dummy.position.set(g.positions[i * 3], g.positions[i * 3 + 1], g.positions[i * 3 + 2]);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        col.set(g.color).multiplyScalar(g.variants[i]);
        mesh.setColorAt(i, col);
      }
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.scene.add(mesh);
      this.meshes.push(mesh);
    }
    return this;
  }
}
