import * as THREE from 'three';
import { makeNoise } from '../build/nature.js';

/** 远山：环形低多边形山峦（背山面水：北高南低），经雾效融入天际 */
export function createMountains() {
  const noise = makeNoise(99);
  const segA = 320;
  const segR = 26;
  const r0 = 440;
  const r1 = 1420;
  const pos = [];
  const col = [];
  const near = new THREE.Color(0x4a6a48);
  const far = new THREE.Color(0x60788c);
  const rock = new THREE.Color(0x7d8a8e);
  const c = new THREE.Color();
  const ridged = (x, z) => 1 - Math.abs(noise.fbm(x, z) * 2 - 1);
  for (let i = 0; i <= segR; i++) {
    const k = i / segR;
    const r = r0 + (r1 - r0) * Math.pow(k, 1.15);
    for (let j = 0; j <= segA; j++) {
      const a = (j / segA) * Math.PI * 2;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const north = 0.55 + 0.45 * Math.max(0, -Math.sin(a));
      const south = z > 0 ? 1 - 0.55 * Math.exp(-((x / 320) ** 2)) : 1;
      const env = Math.min(1, k / 0.22);
      const n1 = ridged(x * 0.0022 + 3.1, z * 0.0022 + 1.7);
      const n2 = noise.fbm(x * 0.009, z * 0.009);
      const h = env * north * south * (25 + 190 * n1 * n1 + 45 * n2) * (0.55 + 0.45 * k);
      pos.push(x, h - 2, z);
      c.copy(near).lerp(far, k);
      if (h > 150) c.lerp(rock, Math.min(1, (h - 150) / 80) * 0.6);
      col.push(c.r, c.g, c.b);
    }
  }
  const idx = [];
  const row = segA + 1;
  for (let i = 0; i < segR; i++) {
    for (let j = 0; j < segA; j++) {
      const a = i * row + j, b = a + 1, d = a + row, e = d + 1;
      idx.push(a, d, b, b, d, e);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 1, metalness: 0 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  return mesh;
}

/** 体素世界外围的大地平面（中间挖空，像素化草地纹理） */
export function createOuterGround(halfX, halfZ, y) {
  const size = 1400;
  const shape = new THREE.Shape();
  shape.moveTo(-size, -size);
  shape.lineTo(size, -size);
  shape.lineTo(size, size);
  shape.lineTo(-size, size);
  shape.lineTo(-size, -size);
  const hole = new THREE.Path();
  hole.moveTo(-halfX, -halfZ);
  hole.lineTo(-halfX, halfZ);
  hole.lineTo(halfX, halfZ);
  hole.lineTo(halfX, -halfZ);
  hole.lineTo(-halfX, -halfZ);
  shape.holes.push(hole);
  const geo = new THREE.ShapeGeometry(shape);
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, y, 0);
  // 平面 UV：1 个纹素 = 1 体素
  const pos = geo.attributes.position;
  const uv = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    uv[i * 2] = pos.getX(i) / 64;
    uv[i * 2 + 1] = pos.getZ(i) / 64;
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));

  const cv = document.createElement('canvas');
  cv.width = cv.height = 64;
  const ctx = cv.getContext('2d');
  const tones = ['#5e8c3a', '#6f9a42', '#4f7a32', '#5a8638', '#66933f'];
  for (let y2 = 0; y2 < 64; y2++) {
    for (let x2 = 0; x2 < 64; x2++) {
      ctx.fillStyle = tones[(Math.random() * tones.length) | 0];
      ctx.fillRect(x2, y2, 1, 1);
    }
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  return mesh;
}
