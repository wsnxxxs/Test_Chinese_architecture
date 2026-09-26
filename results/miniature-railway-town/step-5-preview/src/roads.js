/**
 * Roads, footpaths, painted markings and the paved station forecourt.
 */
import * as THREE from 'three';
import { stripAlongPath, worldUVBox } from './geom.js';

export function buildRoads(M, layout) {
  const group = new THREE.Group();
  group.name = 'roads';
  const lampSpots = [];
  const keepouts = [];

  layout.roads.forEach((road, i) => {
    const len = road.track.length;
    const y = 0.008 + i * 0.0022;
    const geo = stripAlongPath(road.track, 0, len, {
      lateral: 0,
      width: road.width,
      y0: y,
      y1: y + 0.05,
      step: 0.45,
      caps: true,
      uvScale: 1 / 1.9,
      uvV: 1.9,
    });
    const mesh = new THREE.Mesh(geo, M.road);
    mesh.receiveShadow = true;
    group.add(mesh);

    // Raised kerb stones on the busier streets.
    if (road.width >= 1.35) {
      for (const side of [-1, 1]) {
        const kerb = new THREE.Mesh(
          stripAlongPath(road.track, 0, len, {
            lateral: side * (road.width / 2 + 0.08),
            width: 0.16,
            y0: y,
            y1: y + 0.13,
            step: 0.6,
            caps: false,
          }),
          M.platform,
        );
        kerb.receiveShadow = true;
        group.add(kerb);
      }
    }

    // Painted centre line.
    if (road.width >= 1.4) {
      const dashCount = Math.floor(len / 1.5);
      const dashes = new THREE.InstancedMesh(
        new THREE.BoxGeometry(0.12, 0.02, 0.62),
        M.roadLine,
        dashCount,
      );
      dashes.receiveShadow = true;
      const m = new THREE.Matrix4();
      const q = new THREE.Quaternion();
      const up = new THREE.Vector3(0, 1, 0);
      const p = new THREE.Vector3();
      const t = new THREE.Vector3();
      for (let k = 0; k < dashCount; k++) {
        const d = (k + 0.5) * 1.5;
        road.track.position(d, p);
        p.y = y + 0.052;
        road.track.tangent(d, t);
        q.setFromUnitVectors(new THREE.Vector3(0, 0, 1), t);
        m.compose(p, q, new THREE.Vector3(1, 1, 1));
        dashes.setMatrixAt(k, m);
      }
      dashes.instanceMatrix.needsUpdate = true;
      group.add(dashes);
    }

    // Lamp positions along the street edges.
    const spacing = 5.6;
    const count = Math.max(2, Math.round(len / spacing));
    for (let k = 0; k < count; k++) {
      const d = (k + 0.5) * (len / count);
      const side = k % 2 === 0 ? 1 : -1;
      const p = road.track.position(d, new THREE.Vector3());
      const frame = road.track.frame(d, { p, t: new THREE.Vector3(), n: new THREE.Vector3() });
      const pos = p.clone().addScaledVector(frame.n, side * (road.width / 2 + 0.34));
      lampSpots.push({ x: pos.x, z: pos.z, rot: Math.atan2(frame.t.x, frame.t.z), road: road.id });
    }
  });

  // Footpaths.
  layout.paths.forEach((path, i) => {
    const geo = stripAlongPath(path.track, 0, path.track.length, {
      lateral: 0,
      width: path.width,
      y0: 0.004,
      y1: 0.02,
      step: 0.4,
      caps: true,
      uvScale: 1 / 1.1,
      uvV: 1.1,
    });
    const mesh = new THREE.Mesh(geo, M.path);
    mesh.receiveShadow = true;
    group.add(mesh);
  });

  // Station forecourt.
  const square = new THREE.Mesh(worldUVBox(3.0, 0.03, 2.6, 1.15), M.path);
  square.position.set(3.2, 0.013, -11.0);
  square.receiveShadow = true;
  group.add(square);
  keepouts.push({ x: 3.2, z: -11.0, w: 3.0, d: 2.6 });

  return { group, lampSpots, keepouts };
}
