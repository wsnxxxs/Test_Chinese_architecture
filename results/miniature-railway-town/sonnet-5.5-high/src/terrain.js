// 展示底座（木框 + 底托 + 铭牌 + 桌面）、起伏地形与流动的河面
import * as THREE from 'three';
import { BOARD, FRAME, WATER_Y, terrainBase, river, mulberry32 } from './world.js';
import { woodFrameTex, glow } from './materials.js';
import * as TX from './textures.js';

export function buildBase(scene) {
  const group = new THREE.Group();
  const hw = BOARD.w / 2, hd = BOARD.d / 2;
  const fw = FRAME.width;
  const H = FRAME.top - FRAME.bottom;

  // 木框：带倒角的整块挤出
  const outer = new THREE.Shape();
  outer.moveTo(-hw - fw, -hd - fw); outer.lineTo(hw + fw, -hd - fw);
  outer.lineTo(hw + fw, hd + fw); outer.lineTo(-hw - fw, hd + fw); outer.closePath();
  const hole = new THREE.Path();
  const ih = 0.1;
  hole.moveTo(-hw - ih, -hd - ih); hole.lineTo(-hw - ih, hd + ih);
  hole.lineTo(hw + ih, hd + ih); hole.lineTo(hw + ih, -hd - ih); hole.closePath();
  outer.holes.push(hole);
  const frameGeo = new THREE.ExtrudeGeometry(outer, {
    depth: H - 0.16, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.08, bevelSegments: 2, curveSegments: 1,
  });
  frameGeo.rotateX(-Math.PI / 2);
  frameGeo.translate(0, FRAME.bottom + 0.08, 0);
  const frameTex = woodFrameTex.map.clone(); frameTex.repeat.set(1 / 9, 1 / 1.4); frameTex.needsUpdate = true;
  const frameBump = woodFrameTex.bump.clone(); frameBump.repeat.copy(frameTex.repeat); frameBump.needsUpdate = true;
  const frameMat = new THREE.MeshStandardMaterial({
    color: 0xdcc2a0, map: frameTex, bumpMap: frameBump, bumpScale: 1.5, roughness: 0.55, metalness: 0.0,
  });
  const frame = new THREE.Mesh(frameGeo, frameMat);
  frame.castShadow = frame.receiveShadow = true;
  group.add(frame);

  // 底托
  const plinthMat = new THREE.MeshStandardMaterial({ color: 0x6b4429, map: frameTex, bumpMap: frameBump, bumpScale: 1, roughness: 0.6 });
  const plinth = new THREE.Mesh(new THREE.BoxGeometry(hw * 2 + fw * 2 + 1.4, 0.34, hd * 2 + fw * 2 + 1.4), plinthMat);
  plinth.position.y = FRAME.bottom - 0.17 + 0.02;
  plinth.castShadow = plinth.receiveShadow = true;
  group.add(plinth);

  // 铜色铭牌
  const plateTex = TX.labelTexture('MINIATURE RAILWAY TOWN · 微缩铁路小镇', {
    w: 1024, h: 128, bg: '#b58a3d', fg: '#3a2410', border: '#e8c877', font: 'bold 54px "Segoe UI","Microsoft YaHei",serif',
  });
  const plate = new THREE.Mesh(
    new THREE.PlaneGeometry(9, 0.75),
    new THREE.MeshStandardMaterial({ map: plateTex, roughness: 0.35, metalness: 0.7 })
  );
  plate.position.set(0, -0.62, hd + fw + 0.09);
  group.add(plate);

  // 四角黄铜包角
  const capMat = new THREE.MeshStandardMaterial({ color: 0xc19a4a, roughness: 0.3, metalness: 0.85 });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const cap = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.06, 0.55), capMat);
    cap.position.set(sx * (hw + fw - 0.42), FRAME.top + 0.03, sz * (hd + fw - 0.42));
    cap.castShadow = true;
    group.add(cap);
  }

  // 桌面
  const tableTex = woodFrameTex.map.clone(); tableTex.repeat.set(12, 20); tableTex.needsUpdate = true;
  const table = new THREE.Mesh(
    new THREE.CircleGeometry(420, 48).rotateX(-Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: 0x8a7563, map: tableTex, roughness: 0.7, metalness: 0 })
  );
  table.position.y = FRAME.bottom - 0.34 + 0.02;
  table.receiveShadow = true;
  group.add(table);

  group.userData.noMerge = true;
  scene.add(group);
  return group;
}

/* 简单值噪声，用于地面微起伏 */
function makeNoise(seed) {
  const rnd = mulberry32(seed);
  const G = 64, grid = new Float32Array(G * G).map(() => rnd());
  const at = (i, j) => grid[((j % G) + G) % G * G + ((i % G) + G) % G];
  return (x, z) => {
    const i = Math.floor(x), j = Math.floor(z), fx = x - i, fz = z - j;
    const sx = fx * fx * (3 - 2 * fx), sz = fz * fz * (3 - 2 * fz);
    const a = at(i, j) + (at(i + 1, j) - at(i, j)) * sx;
    const b = at(i, j + 1) + (at(i + 1, j + 1) - at(i, j + 1)) * sx;
    return a + (b - a) * sz;
  };
}

export function buildTerrain(scene, groundTex) {
  const w = BOARD.w + 0.1, d = BOARD.d + 0.1;
  const geo = new THREE.PlaneGeometry(w, d, 320, 240);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position, uv = geo.attributes.uv;
  const n1 = makeNoise(5);
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    let h = terrainBase(x, z);
    if (h > -0.01) h += (n1(x * 0.9 + 40, z * 0.9 + 40) - 0.5) * 0.035;
    pos.setY(i, h);
    uv.setXY(i, (x + BOARD.w / 2) / BOARD.w, 1 - (z + BOARD.d / 2) / BOARD.d);
  }
  geo.computeVertexNormals();

  const bump = TX.grainBump(); bump.repeat.set(70, 52);
  const mat = new THREE.MeshStandardMaterial({ map: groundTex, bumpMap: bump, bumpScale: 1.6, roughness: 1, metalness: 0 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.userData.noMerge = true;
  mesh.receiveShadow = true; mesh.castShadow = false;
  scene.add(mesh);

  /* 河面 */
  const nrm = river.pts.map((p, i) => {
    const a = river.pts[Math.max(0, i - 1)], b = river.pts[Math.min(river.pts.length - 1, i + 1)];
    const tx = b.x - a.x, tz = b.z - a.z, l = Math.hypot(tx, tz);
    return [-tz / l, tx / l];
  });
  const verts = [], uvs = [], idx = [];
  let acc = 0;
  river.pts.forEach((p, i) => {
    if (i) acc += p.distanceTo(river.pts[i - 1]);
    if (Math.abs(p.z) > 15.7) return;            // 河面止于木框内部，避免穿出外侧
    const ww = river.half[i] + 0.55;
    verts.push(p.x + nrm[i][0] * ww, WATER_Y, p.z + nrm[i][1] * ww);
    verts.push(p.x - nrm[i][0] * ww, WATER_Y, p.z - nrm[i][1] * ww);
    uvs.push(0, acc / 2.2, 1.1, acc / 2.2);
    const k = (verts.length / 3) - 2;
    if (k > 0) idx.push(k - 2, k, k - 1, k - 1, k, k + 1);
  });
  const wgeo = new THREE.BufferGeometry();
  wgeo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
  wgeo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  wgeo.setIndex(idx);
  wgeo.computeVertexNormals();
  // 保证法线朝上
  const wn = wgeo.attributes.normal;
  for (let i = 0; i < wn.count; i++) if (wn.getY(i) < 0) wn.setXYZ(i, -wn.getX(i), -wn.getY(i), -wn.getZ(i));

  const nmap = TX.waterNormal();
  const waterMat = new THREE.MeshStandardMaterial({
    color: 0x3f8d99, roughness: 0.28, metalness: 0.05, transparent: true, opacity: 0.9, side: THREE.DoubleSide,
    normalMap: nmap, normalScale: new THREE.Vector2(0.16, 0.16), envMapIntensity: 0.9,
  });
  const water = new THREE.Mesh(wgeo, waterMat);
  water.receiveShadow = true;
  water.renderOrder = 1;
  scene.add(water);

  return {
    mesh, water, waterMat,
    update(dt) { nmap.offset.y -= dt * 0.05; nmap.offset.x = Math.sin(nmap.offset.y * 3) * 0.02; },
  };
}
