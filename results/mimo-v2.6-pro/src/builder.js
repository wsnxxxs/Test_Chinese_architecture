import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const _c = new THREE.Color();

/**
 * 体素盒收集器。
 * box() 逐个累积盒体几何，build() 时合并成单个 BufferGeometry ——
 * 整个材质通道只产生 1 次绘制调用，保证旋转视角时的帧率。
 * (x, y, z) 为最小角点，w / h / d 为全尺寸。
 */
export class Builder {
  constructor(material) {
    this.material = material;
    this.geoms = [];
    this.count = 0;
  }

  box(x, y, z, w, h, d, color) {
    if (w <= 0 || h <= 0 || d <= 0) return this;
    _c.set(color);
    const g = new THREE.BoxGeometry(w, h, d);
    g.translate(x + w / 2, y + h / 2, z + d / 2);
    const n = g.attributes.position.count;
    const cols = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      cols[i * 3] = _c.r;
      cols[i * 3 + 1] = _c.g;
      cols[i * 3 + 2] = _c.b;
    }
    g.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    this.geoms.push(g);
    this.count++;
    return this;
  }

  build(name) {
    const geo = mergeGeometries(this.geoms, false);
    for (const g of this.geoms) g.dispose();
    this.geoms = [];
    geo.computeBoundingBox();
    const mesh = new THREE.Mesh(geo, this.material);
    mesh.name = name;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  }
}

/**
 * 沿 x = 0 镜像的构建上下文。
 * 西侧建筑与东侧共用同一段坐标代码：以东侧坐标调用，自动落到对称位置。
 */
export function mirrorCtx(ctx) {
  const wrap = (B) => ({
    box: (x, y, z, w, h, d, c) => B.box(-x - w, y, z, w, h, d, c),
  });
  return { solid: wrap(ctx.solid), tile: wrap(ctx.tile), glow: wrap(ctx.glow) };
}
