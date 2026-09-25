import * as THREE from 'three';

/**
 * 体素世界
 * ------------------------------------------------------------
 * 所有建筑构件都以「单位方块」为单位堆叠，绘制时合并为 3 个 InstancedMesh：
 *   solid   —— 建筑本体（投影 / 受影）
 *   lantern —— 灯笼（自发光，白天压暗、夜间点亮）
 *   window  —— 窗纸（自发光，夜间透出暖光）
 * 因此整座建筑群的 draw call 恒定在个位数，旋转视角时帧率非常稳定。
 */

const BOX_GEO = new THREE.BoxGeometry(1, 1, 1);

export class VoxelWorld {
  constructor() {
    /** 常规体素：键为整数格坐标 */
    this.solid = new Map();
    /** 灯笼体素 */
    this.lantern = new Map();
    /** 窗纸体素 */
    this.window = new Map();
  }

  // ---------- 键 ----------

  static ukey(x, y, z) {
    return `${x}|${y}|${z}`;
  }

  static bkey(cx, cy, cz, sx, sy, sz) {
    return `b${Math.round(cx * 10)},${Math.round(cy * 10)},${Math.round(
      cz * 10
    )},${sx},${sy},${sz}`;
  }

  static mapOf(world, map) {
    return map === 'lantern' ? world.lantern : map === 'window' ? world.window : world.solid;
  }

  // ---------- 基本写入 ----------

  /** 写入单位方块，(x, y, z) 为方块最小角 */
  voxel(x, y, z, c, map = 'solid') {
    VoxelWorld.mapOf(this, map).set(VoxelWorld.ukey(x, y, z), {
      x: x + 0.5,
      y: y + 0.5,
      z: z + 0.5,
      sx: 1,
      sy: 1,
      sz: 1,
      c
    });
  }

  /** 写入任意尺寸方块，(cx, cy, cz) 为中心，用于铺装、树冠、岩石等 */
  box(cx, cy, cz, sx, sy, sz, c, map = 'solid') {
    VoxelWorld.mapOf(this, map).set(VoxelWorld.bkey(cx, cy, cz, sx, sy, sz), {
      x: cx,
      y: cy,
      z: cz,
      sx,
      sy,
      sz,
      c
    });
  }

  /** 删除单位方块（用于开凿门窗洞） */
  del(x, y, z) {
    this.solid.delete(VoxelWorld.ukey(x, y, z));
  }

  has(x, y, z) {
    return this.solid.has(VoxelWorld.ukey(x, y, z));
  }

  // ---------- 批量填充 ----------

  /**
   * 实心填充闭区间长方体
   * @param {number|function} c 颜色，或 (x,y,z)=>颜色 的函数
   * @param {object} opts { skip:(x,y,z)=>bool, map:'solid'|'lantern'|'window' }
   */
  fill(x0, y0, z0, x1, y1, z1, c, opts = {}) {
    const ax = Math.min(x0, x1), bx = Math.max(x0, x1);
    const ay = Math.min(y0, y1), by = Math.max(y0, y1);
    const az = Math.min(z0, z1), bz = Math.max(z0, z1);
    const skip = opts.skip;
    for (let x = ax; x <= bx; x++) {
      for (let y = ay; y <= by; y++) {
        for (let z = az; z <= bz; z++) {
          if (skip && skip(x, y, z)) {
            this.del(x, y, z);
            continue;
          }
          const col = typeof c === 'function' ? c(x, y, z) : c;
          if (col === null || col === undefined) continue;
          this.voxel(x, y, z, col, opts.map);
        }
      }
    }
  }

  /** 壳体：只填四面竖墙（内部中空），用于殿宇墙体 */
  shell(x0, y0, z0, x1, y1, z1, c, opts = {}) {
    const ax = Math.min(x0, x1), bx = Math.max(x0, x1);
    const ay = Math.min(y0, y1), by = Math.max(y0, y1);
    const az = Math.min(z0, z1), bz = Math.max(z0, z1);
    const skip = opts.skip;
    for (let x = ax; x <= bx; x++) {
      for (let y = ay; y <= by; y++) {
        for (let z = az; z <= bz; z++) {
          const onWall = x === ax || x === bx || z === az || z === bz;
          if (!onWall) continue;
          if (skip && skip(x, y, z)) {
            this.del(x, y, z);
            continue;
          }
          const col = typeof c === 'function' ? c(x, y, z) : c;
          if (col === null || col === undefined) continue;
          this.voxel(x, y, z, col, opts.map);
        }
      }
    }
  }

  /** 水平铺装板：格范围 (x0,z0)-(x1,z1)，厚度 height，顶面在 top */
  pad(x0, z0, x1, z1, top, height, c, map = 'solid') {
    const cx = (Math.min(x0, x1) + Math.max(x0, x1) + 1) / 2;
    const cz = (Math.min(z0, z1) + Math.max(z0, z1) + 1) / 2;
    const sx = Math.abs(x1 - x0) + 1;
    const sz = Math.abs(z1 - z0) + 1;
    this.box(cx, top - height / 2, cz, sx, height, sz, c, map);
  }

  // ---------- 统计与构建 ----------

  get count() {
    return this.solid.size + this.lantern.size + this.window.size;
  }

  /**
   * 生成 InstancedMesh 并加入场景
   * @param {THREE.Scene} scene
   * @param {{solid:THREE.Material, lantern:THREE.Material, window:THREE.Material}} materials
   */
  build(scene, materials) {
    const groups = {
      solid: { map: this.solid, material: materials.solid, shadow: true },
      lantern: { map: this.lantern, material: materials.lantern, shadow: false },
      window: { map: this.window, material: materials.window, shadow: false }
    };

    const meshes = {};
    const matrix = new THREE.Matrix4();
    const color = new THREE.Color();

    for (const [name, g] of Object.entries(groups)) {
      const n = g.map.size;
      if (n === 0) {
        meshes[name] = null;
        continue;
      }
      const mesh = new THREE.InstancedMesh(BOX_GEO, g.material, n);
      let i = 0;
      for (const v of g.map.values()) {
        matrix.makeScale(v.sx, v.sy, v.sz);
        matrix.setPosition(v.x, v.y, v.z);
        mesh.setMatrixAt(i, matrix);
        color.setHex(v.c);
        mesh.setColorAt(i, color);
        i++;
      }
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      mesh.castShadow = g.shadow;
      mesh.receiveShadow = g.shadow;
      mesh.computeBoundingSphere();
      mesh.name = `voxel-${name}`;
      scene.add(mesh);
      meshes[name] = mesh;
    }

    return { meshes, count: this.count };
  }
}

/** 体素世界默认材质：漫反射为主，略带金属感的铜活与木材靠颜色区分 */
export function createVoxelMaterials() {
  return {
    solid: new THREE.MeshStandardMaterial({
      roughness: 0.88,
      metalness: 0.04,
      dithering: true
    }),
    lantern: new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: true }),
    window: new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: true })
  };
}
