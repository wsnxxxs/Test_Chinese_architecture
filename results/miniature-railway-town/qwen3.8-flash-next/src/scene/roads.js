import * as THREE from 'three';
import { PLAZAS } from './places.js';
import { roadObjs, groundHeight } from './layout.js';
import { ribbonGeometry, box, mergedMesh, mat } from '../util/geo.js';
import { paveTexture } from '../util/textures.js';

/** Hand-laid roads, the market square, the forecourt and the goods yard. */
export function buildRoads() {
  const group = new THREE.Group();
  group.name = 'roads';

  const mats = new Map();
  const paveMat = (kind) => {
    if (!mats.has(kind)) {
      mats.set(kind, mat({ map: paveTexture(kind), color: 0xffffff, roughness: kind === 'tarmac' ? 0.86 : 0.95, metalness: 0.02 }));
    }
    return mats.get(kind);
  };

  for (const r of roadObjs) {
    const geo = ribbonGeometry(r.path, r.halfWidth, (x, z) => groundHeight(x, z) + 0.022, { uvScale: r.halfWidth * 2 });
    const mesh = new THREE.Mesh(geo, paveMat(r.pave));
    mesh.receiveShadow = true;
    mesh.name = `road-${r.name}`;
    group.add(mesh);

    if (r.halfWidth >= 0.7) {
      // kerb strips so the carriageway meets the turf cleanly
      const kerbs = [];
      const n = Math.ceil(r.path.length / 0.6);
      for (let i = 0; i <= n; i++) {
        const s = (i / n) * r.path.length;
        const p = r.path.at(s);
        for (const side of [-1, 1]) {
          const x = p.x + p.nx * (r.halfWidth + 0.09) * side;
          const z = p.z + p.nz * (r.halfWidth + 0.09) * side;
          kerbs.push(box(0.19, 0.06, 0.62, x, groundHeight(x, z) + 0.03, z, Math.atan2(p.tx, p.tz) + (side > 0 ? 0 : Math.PI)));
        }
      }
      const k = mergedMesh(kerbs, mat({ color: 0xa9a49a, roughness: 0.9 }), `kerbs-${r.name}`);
      k.receiveShadow = true;
      group.add(k);
    }
  }

  for (const p of PLAZAS) {
    const y = groundHeight(p.x, p.z);
    const geo = p.shape === 'rect'
      ? new THREE.BoxGeometry(p.w, 0.07, p.d)
      : new THREE.CylinderGeometry(p.r, p.r * 1.02, 0.07, 26);
    const mesh = new THREE.Mesh(geo, paveMat(p.pave));
    mesh.position.set(p.x, y - 0.012, p.z);
    mesh.rotation.y = p.rot || 0;
    mesh.receiveShadow = true;
    mesh.castShadow = false;
    mesh.name = 'plaza';
    group.add(mesh);
  }

  return { group, paveMat };
}
