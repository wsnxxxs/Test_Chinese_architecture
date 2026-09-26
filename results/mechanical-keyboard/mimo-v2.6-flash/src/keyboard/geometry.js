/**
 * 模型几何体构建：
 *  - 键帽：带锥度的壳体（顶面 UV 指向图集字符，侧面走纯色材质）
 *  - 定位板 / 底壳：圆角板材，底壳顶部按倾角剪切成楔形
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { CAP_GAP } from './layout.js';

/* ───────────────────────── 键帽 ───────────────────────── */

const CAP_HEIGHT = 0.34;
const CAP_TAPER = 0.07; // 顶部内收量（形成梯形侧壁）

/**
 * 单个键帽几何体（非索引、平面法线）。
 * 分两组材质：group 0 = 侧面 + 底面（纯色），group 1 = 顶面（字符图集）。
 *
 * @param {number} u        键位宽度（u）
 * @param {{u0:number,u1:number,v0:number,v1:number}} cell 图集 UV 区域
 */
export function createKeycapGeometry(u, cell) {
  const w = u - CAP_GAP;
  const d = 1 - CAP_GAP;
  const h = CAP_HEIGHT;
  const t = CAP_TAPER;

  // 底部四角（前左、前右、后右、后左）
  const bx = w / 2;
  const bz = d / 2;
  // 顶部四角（内收）
  const tx = bx - t;
  const tz = bz - t;

  const positions = [];
  const uvs = [];

  const quad = (a, b, c, dd, uvs4) => {
    // 两个三角形：a-b-c / a-c-d；顶点按外侧逆时针排列
    const tri = [a, b, c, a, c, dd];
    const uvFlat = [...uvs4[0], ...uvs4[1], ...uvs4[2], ...uvs4[0], ...uvs4[2], ...uvs4[3]];
    for (let i = 0; i < 6; i++) {
      positions.push(tri[i][0], tri[i][1], tri[i][2]);
      uvs.push(uvFlat[i * 2], uvFlat[i * 2 + 1]);
    }
  };

  const SIDE_UV = [0.004, 0.004];
  const sideFace = [SIDE_UV, SIDE_UV, SIDE_UV, SIDE_UV];

  // 前面（+z）
  quad([-bx, 0, bz], [bx, 0, bz], [tx, h, tz], [-tx, h, tz], sideFace);
  // 右面（+x）
  quad([bx, 0, bz], [bx, 0, -bz], [tx, h, -tz], [tx, h, tz], sideFace);
  // 后面（-z）
  quad([bx, 0, -bz], [-bx, 0, -bz], [-tx, h, -tz], [tx, h, -tz], sideFace);
  // 左面（-x）
  quad([-bx, 0, -bz], [-bx, 0, bz], [-tx, h, tz], [-tx, h, -tz], sideFace);
  // 底面（-y）
  quad([-bx, 0, bz], [-bx, 0, -bz], [bx, 0, -bz], [bx, 0, bz], sideFace);
  const sideVertexCount = positions.length / 3;

  // 顶面（+y），UV 映射到图集单元格；+x 向右、-z 向上
  quad(
    [tx, h, tz], [tx, h, -tz], [-tx, h, -tz], [-tx, h, tz],
    [
      [cell.u0, cell.v0],
      [cell.u1, cell.v0],
      [cell.u1, cell.v1],
      [cell.u0, cell.v1],
    ],
  );

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.computeVertexNormals(); // 非索引几何 → 每面平面法线
  geo.addGroup(0, sideVertexCount, 0);
  geo.addGroup(sideVertexCount, positions.length / 3 - sideVertexCount, 1);
  return geo;
}

/** 轴体十字柱（键帽下方的 Switch 卫柱） */
export function createStemGeometry() {
  const a = new THREE.BoxGeometry(0.07, 0.3, 0.3);
  const b = new THREE.BoxGeometry(0.3, 0.3, 0.07);
  const merged = mergeGeometries([a, b]);
  a.dispose();
  b.dispose();
  return merged;
}

/* ───────────────────── 圆角板材 / 楔形底壳 ───────────────────── */

export function createRoundedRectShape(w, d, r) {
  const hw = w / 2;
  const hd = d / 2;
  const shape = new THREE.Shape();
  shape.moveTo(-hw + r, -hd);
  shape.lineTo(hw - r, -hd);
  shape.quadraticCurveTo(hw, -hd, hw, -hd + r);
  shape.lineTo(hw, hd - r);
  shape.quadraticCurveTo(hw, hd, hw - r, hd);
  shape.lineTo(-hw + r, hd);
  shape.quadraticCurveTo(-hw, hd, -hw, hd - r);
  shape.lineTo(-hw, -hd + r);
  shape.quadraticCurveTo(-hw, -hd, -hw + r, -hd);
  return shape;
}

/**
 * 圆角板材：居中于 x/z，y ∈ [0, h]（含倒角时自动归一化）。
 * 形状位于 XY 平面、沿 Z 挤出，随后旋转到 XZ 平面。
 */
export function createSlabGeometry(w, d, h, { radius = 0.22, bevel = 0.05 } = {}) {
  const shape = createRoundedRectShape(w, d, radius);
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: Math.max(0.01, h - bevel * 2),
    bevelEnabled: bevel > 0,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 3,
    curveSegments: 8,
    steps: 1,
  });
  geo.rotateX(-Math.PI / 2); // 挤出方向 → +y
  geo.computeBoundingBox();
  const bb = geo.boundingBox;
  geo.translate(-(bb.min.x + bb.max.x) / 2, -bb.min.y, -(bb.min.z + bb.max.z) / 2);
  return geo;
}

/**
 * 底壳顶部剪切出倾角：底面保持水平贴地，顶面前低后高。
 * y' = y − (y / h) · z · tanθ
 */
export function applyTiltShear(geo, h, tanTheta) {
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const z = pos.getZ(i);
    pos.setY(i, y - (y / h) * z * tanTheta);
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
  geo.computeBoundingBox();
  return geo;
}
