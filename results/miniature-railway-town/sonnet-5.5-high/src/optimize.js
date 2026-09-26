// 静态网格合并：把建筑/道具里成百上千个小盒子按"材质 + 阴影标记"合并，大幅减少绘制调用
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

function blocked(obj) {
  for (let o = obj; o; o = o.parent) if (o.userData && o.userData.noMerge) return true;
  return false;
}

export function mergeStatic(scene) {
  scene.updateMatrixWorld(true);
  const buckets = new Map();
  const victims = [];
  scene.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || Array.isArray(o.material) || blocked(o)) return;
    if (o.material.transparent) return;
    const key = `${o.material.uuid}|${+o.castShadow}${+o.receiveShadow}`;
    if (!buckets.has(key)) buckets.set(key, { mat: o.material, cast: o.castShadow, recv: o.receiveShadow, geos: [] });
    let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    for (const name of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(name)) g.deleteAttribute(name);
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    g.applyMatrix4(o.matrixWorld);
    g.clearGroups();
    buckets.get(key).geos.push(g);
    victims.push(o);
  });
  for (const o of victims) o.parent.remove(o);
  let made = 0;
  for (const b of buckets.values()) {
    const geo = mergeGeometries(b.geos, false);
    b.geos.forEach((g) => g.dispose());
    if (!geo) continue;
    const m = new THREE.Mesh(geo, b.mat);
    m.castShadow = b.cast; m.receiveShadow = b.recv;
    scene.add(m); made++;
  }
  return { merged: victims.length, meshes: made };
}

/** 合并一个局部坐标系内的静态部件（用于列车车体），跳过标记 noMerge 的活动部件 */
export function mergeLocal(root) {
  root.updateMatrixWorld(true);
  const inv = root.matrixWorld.clone().invert();
  const buckets = new Map();
  const victims = [];
  root.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || Array.isArray(o.material) || blocked(o)) return;
    const key = `${o.material.uuid}|${+o.castShadow}${+o.receiveShadow}`;
    if (!buckets.has(key)) buckets.set(key, { mat: o.material, cast: o.castShadow, recv: o.receiveShadow, geos: [] });
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    for (const name of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(name)) g.deleteAttribute(name);
    g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld));
    g.clearGroups();
    buckets.get(key).geos.push(g);
    victims.push(o);
  });
  for (const o of victims) o.parent.remove(o);
  for (const b of buckets.values()) {
    const geo = mergeGeometries(b.geos, false);
    if (!geo) continue;
    const m = new THREE.Mesh(geo, b.mat);
    m.castShadow = b.cast; m.receiveShadow = b.recv;
    root.add(m);
  }
}
