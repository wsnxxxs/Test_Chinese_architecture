import * as THREE from 'three';

/**
 * 体素收集器：把所有体素写入 Map（同坐标后者覆盖，天然去重、避免闪面），
 * 最后一次性编译成 1~4 个 InstancedMesh（普通 + 若干自发光材质组），
 * 整个建筑群只有个位数 draw call，旋转视角时帧率稳定。
 */
export class VoxelWorld {
  constructor() {
    this.map = new Map();
  }

  set(x, y, z, color, glow = null) {
    x = Math.round(x);
    y = Math.round(y);
    z = Math.round(z);
    this.map.set(x + '|' + y + '|' + z, { x, y, z, color, glow });
  }

  box(x0, y0, z0, x1, y1, z1, color, glow = null) {
    for (let x = Math.min(x0, x1); x <= Math.max(x0, x1); x++)
      for (let y = Math.min(y0, y1); y <= Math.max(y0, y1); y++)
        for (let z = Math.min(z0, z1); z <= Math.max(z0, z1); z++)
          this.set(x, y, z, color, glow);
  }

  count() {
    return this.map.size;
  }

  /**
   * 自发光分组定义：glow 字符串 -> { emissive, emissiveIntensity }
   */
  static GLOW_STYLES = {
    red: { emissive: 0xff3816, emissiveIntensity: 1.5 },
    blue: { emissive: 0x2f8fd0, emissiveIntensity: 0.85 },
    gold: { emissive: 0xffc95a, emissiveIntensity: 1.25 },
  };

  build(scene) {
    const group = new THREE.Group();
    group.name = 'voxel-world';
    const glowGroups = new Map();
    let opaque = [];

    for (const it of this.map.values()) {
      if (!it.glow) {
        opaque.push(it);
      } else {
        if (!glowGroups.has(it.glow)) glowGroups.set(it.glow, []);
        glowGroups.get(it.glow).push(it);
      }
    }

    const makeMesh = (items, glowKey = null) => {
      if (!items.length) return;
      const style = glowKey ? VoxelWorld.GLOW_STYLES[glowKey] : {};
      const geo = new THREE.BoxGeometry(1, 1, 1);
      const mat = new THREE.MeshStandardMaterial({
        roughness: style.roughness ?? 0.92,
        metalness: 0.03,
        emissive: style.emissive ?? 0x000000,
        emissiveIntensity: style.emissiveIntensity ?? 0,
      });
      const mesh = new THREE.InstancedMesh(geo, mat, items.length);
      const m = new THREE.Matrix4();
      const c = new THREE.Color();
      for (let i = 0; i < items.length; i++) {
        const it = items[i];
        m.makeTranslation(it.x, it.y, it.z);
        mesh.setMatrixAt(i, m);
        mesh.setColorAt(i, c.set(it.color));
      }
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
    };

    makeMesh(opaque);
    for (const [key, items] of glowGroups) makeMesh(items, key);

    scene.add(group);
    return group;
  }
}
