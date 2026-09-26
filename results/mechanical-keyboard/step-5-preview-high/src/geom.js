// 几何工具：圆角矩形轮廓、竖向挤出、键帽（带顶部收紧的雕刻感）
import * as THREE from 'three';

// 生成闭合的圆角矩形路径（Shape / Path 通用）。reverse=true 时反向绕行，用作挖孔。
export function roundedRect(container, w, d, r, reverse = false, cx = 0, cy = 0) {
  const hw = w / 2;
  const hd = d / 2;
  const rr = Math.max(0.05, Math.min(r, hw, hd));
  if (reverse) {
    // 顺时针：左下 -> 左上 -> 右上 -> 右下
    container.moveTo(cx - hw + rr, cy - hd);
    container.lineTo(cx - hw, cy - hd + rr);
    container.absarc(cx - hw + rr, cy - hd + rr, rr, Math.PI * 1.5, Math.PI, true);
    container.lineTo(cx - hw, cy + hd - rr);
    container.absarc(cx - hw + rr, cy + hd - rr, rr, Math.PI, Math.PI / 2, true);
    container.lineTo(cx + hw - rr, cy + hd);
    container.absarc(cx + hw - rr, cy + hd - rr, rr, Math.PI / 2, 0, true);
    container.lineTo(cx + hw, cy - hd + rr);
    container.absarc(cx + hw - rr, cy - hd + rr, rr, 0, -Math.PI / 2, true);
  } else {
    container.moveTo(cx - hw + rr, cy - hd);
    container.lineTo(cx + hw - rr, cy - hd);
    container.absarc(cx + hw - rr, cy - hd + rr, rr, -Math.PI / 2, 0, false);
    container.lineTo(cx + hw, cy + hd - rr);
    container.absarc(cx + hw - rr, cy + hd - rr, rr, 0, Math.PI / 2, false);
    container.lineTo(cx - hw + rr, cy + hd);
    container.absarc(cx - hw + rr, cy + hd - rr, rr, Math.PI / 2, Math.PI, false);
    container.lineTo(cx - hw, cy - hd + rr);
    container.absarc(cx - hw + rr, cy - hd + rr, rr, Math.PI, Math.PI * 1.5, false);
  }
  return container;
}

export function roundedShape(w, d, r) {
  return roundedRect(new THREE.Shape(), w, d, r);
}

// 将 XY 平面轮廓沿 +Z 挤出的几何体旋转为沿 +Y 生长（轮廓落在 XZ 平面）。
// 注意：three 的 ExtrudeGeometry 倒角会向 depth 两端各延伸一个 bevelThickness，
// 因此这里按「最终总高度」反推 depth，并平移补偿，保证结果恰好为 height 且底面落在 y=0。
export function extrudeY(shape, height, opts = {}) {
  const bevel = opts.bevel !== false;
  const bevelThickness = bevel ? Math.min(opts.bevelThickness ?? 0.5, height / 2.5) : 0;
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: bevel ? height - bevelThickness * 2 : height,
    steps: 1,
    bevelEnabled: bevel,
    bevelThickness,
    bevelSize: Math.min(opts.bevelSize ?? 0.5, bevelThickness * 4),
    bevelOffset: 0,
    bevelSegments: opts.bevelSegments ?? 2,
    curveSegments: opts.curveSegments ?? 8,
  });
  geo.rotateX(-Math.PI / 2); // 轮廓 y -> -z，挤出方向 z -> +y
  if (bevel) geo.translate(0, bevelThickness, 0);
  return geo;
}

// 键帽：底部宽、顶部略收，顶部边缘圆角，底座对齐 y=0 且水平居中
export function keycapGeometry(w, d, h, taper = 0.1) {
  const shape = roundedShape(w, d, Math.min(w, d) * 0.16);
  const geo = extrudeY(shape, h, {
    bevelThickness: 0.9,
    bevelSize: 0.6,
    bevelSegments: 2,
    curveSegments: 6,
  });
  const pos = geo.attributes.position;
  geo.computeBoundingBox();
  const { min, max } = geo.boundingBox;
  for (let i = 0; i < pos.count; i++) {
    const t = (pos.getY(i) - min.y) / (max.y - min.y);
    const s = 1 - taper * t;
    pos.setX(i, pos.getX(i) * s);
    pos.setZ(i, pos.getZ(i) * s);
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
  geo.computeBoundingBox();
  const b = geo.boundingBox;
  geo.translate(-(b.min.x + b.max.x) / 2, -b.min.y, -(b.min.z + b.max.z) / 2);
  return geo;
}
