import * as THREE from 'three';

// 可复现随机数
export function makeRng(seed = 20260925) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 体素贴图：白底噪点 + 深色接缝，配合按面尺寸缩放的 UV，
// 任意大小的box都会呈现出 1x1 的方块网格质感
export function makeVoxelTexture(size = 16) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(size, size);
  const rng = makeRng(977);
  const px = img.data;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      const edge = x === 0 || y === 0 || x === size - 1 || y === size - 1;
      let v = 208 + rng() * 47;
      if (edge) v *= 0.6; // 块间接缝
      if (rng() < 0.07) v *= 0.88; // 杂点
      px[i] = px[i + 1] = px[i + 2] = v;
      px[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const _c = new THREE.Color();

// 体素构建器：把所有 box 的面合并进单个 BufferGeometry（一次 draw call）
export class VoxelBuilder {
  constructor() {
    this.pos = [];
    this.nor = [];
    this.uv = [];
    this.col = [];
    this.idx = [];
    this.rng = makeRng(9271);
    this.count = 0;
  }

  // x,y,z = 最小角；w,h,d = 尺寸；color = 十六进制色
  box(x, y, z, w, h, d, color, opt = {}) {
    if (w <= 0 || h <= 0 || d <= 0) return;
    this.count++;
    const X = x + w, Y = y + h, Z = z + d;
    const col = _c.set(color);
    const jr = opt.jitter ?? 0.045;
    const jit = () => 1 + (this.rng() * 2 - 1) * jr;
    const faces = opt.faces;
    const has = (n) => !faces || faces.includes(n);

    const quad = (nx, ny, nz, verts, uvs) => {
      const j = jit();
      const r = col.r * j, g = col.g * j, b = col.b * j;
      const base = this.pos.length / 3;
      for (let i = 0; i < 4; i++) {
        this.pos.push(verts[i][0], verts[i][1], verts[i][2]);
        this.nor.push(nx, ny, nz);
        this.uv.push(uvs[i][0], uvs[i][1]);
        this.col.push(r, g, b);
      }
      this.idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
    };

    if (has('px')) quad(1, 0, 0, [[X, y, z], [X, Y, z], [X, Y, Z], [X, y, Z]], [[0, 0], [0, h], [d, h], [d, 0]]);
    if (has('nx')) quad(-1, 0, 0, [[x, y, z], [x, y, Z], [x, Y, Z], [x, Y, z]], [[0, 0], [d, 0], [d, h], [0, h]]);
    if (has('py')) quad(0, 1, 0, [[x, Y, z], [x, Y, Z], [X, Y, Z], [X, Y, z]], [[0, 0], [0, d], [w, d], [w, 0]]);
    if (has('ny')) quad(0, -1, 0, [[x, y, z], [X, y, z], [X, y, Z], [x, y, Z]], [[0, 0], [w, 0], [w, d], [0, d]]);
    if (has('pz')) quad(0, 0, 1, [[x, y, Z], [X, y, Z], [X, Y, Z], [x, Y, Z]], [[0, 0], [w, 0], [w, h], [0, h]]);
    if (has('nz')) quad(0, 0, -1, [[x, y, z], [x, Y, z], [X, Y, z], [X, y, z]], [[0, 0], [0, h], [w, h], [w, 0]]);
  }

  // 以 (cx,cz) 为中心放置，y 为底面
  boxCentered(cx, cz, w, d, y, h, color, opt = {}) {
    this.box(cx - w / 2, y, cz - d / 2, w, h, d, color, opt);
  }

  build() {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    geo.setIndex(this.idx);
    geo.computeBoundingSphere();
    return geo;
  }
}
