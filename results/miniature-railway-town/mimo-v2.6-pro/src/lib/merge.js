/**
 * 静态合批：把同一材质的小碎件（窗框、窗玻璃、栏杆、道具…）
 * 合并成单个网格，显著降低 draw call。只用于不动的场景层。
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export function mergeStaticGroup(root, { skip = () => false } = {}) {
  root.updateMatrixWorld(true);

  const buckets = new Map();
  const remove = [];

  root.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || o.isSkinnedMesh) return;
    if (!o.material || Array.isArray(o.material)) return;
    if (o.material.transparent || o.material.isSpriteMaterial) return;
    if (skip(o)) return;

    const key = o.material.uuid;
    if (!buckets.has(key)) {
      buckets.set(key, { material: o.material, geos: [], cast: false, receive: false });
    }
    const bucket = buckets.get(key);

    let g = o.geometry.clone();
    if (g.index) g = g.toNonIndexed();
    for (const name of Object.keys(g.attributes)) {
      if (name !== 'position' && name !== 'normal' && name !== 'uv') g.deleteAttribute(name);
    }
    if (!g.attributes.normal) g.computeVertexNormals();
    if (!g.attributes.uv) {
      g.setAttribute(
        'uv',
        new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2),
      );
    }
    g.applyMatrix4(o.matrixWorld);

    bucket.geos.push(g);
    bucket.cast = bucket.cast || o.castShadow;
    bucket.receive = bucket.receive || o.receiveShadow;
    remove.push(o);
  });

  for (const o of remove) {
    if (o.parent) o.parent.remove(o);
  }

  const merged = [];
  let before = 0;
  for (const { material, geos, cast, receive } of buckets.values()) {
    if (!geos.length) continue;
    before += geos.length;
    const geo = geos.length === 1 ? geos[0] : mergeGeometries(geos, false);
    if (!geo) continue;
    const mesh = new THREE.Mesh(geo, material);
    mesh.castShadow = cast;
    mesh.receiveShadow = receive;
    mesh.name = `merged:${material.type}`;
    root.add(mesh);
    merged.push(mesh);
  }
  return { meshes: merged, sourceCount: before };
}
