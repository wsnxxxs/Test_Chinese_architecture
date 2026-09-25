// A small flock of cranes circling above the temple (instanced, animated on the CPU).
import { BoxGeometry, InstancedMesh, MeshLambertMaterial, Object3D, Group } from 'three';
import { mulberry32 } from '../voxel/rng.js';

export function createBirds(count = 14, center = { x: 0, y: 110, z: -100 }) {
  const rnd = mulberry32(9);
  const group = new Group();
  const bodyGeo = new BoxGeometry(1.1, 1.1, 3.2);
  const headGeo = new BoxGeometry(0.7, 0.7, 1.0);
  const wingGeo = new BoxGeometry(3.6, 0.28, 1.7);
  const mat = new MeshLambertMaterial({ color: 0xf3efe6 });
  const tipMat = new MeshLambertMaterial({ color: 0x2b2830 });
  const bodies = new InstancedMesh(bodyGeo, mat, count);
  const heads = new InstancedMesh(headGeo, tipMat, count);
  const wingsL = new InstancedMesh(wingGeo, mat, count);
  const wingsR = new InstancedMesh(wingGeo, mat, count);
  for (const m of [bodies, heads, wingsL, wingsR]) {
    m.frustumCulled = false;
    group.add(m);
  }
  const birds = [];
  for (let i = 0; i < count; i++) {
    birds.push({
      r: 70 + rnd() * 90,
      a: rnd() * Math.PI * 2,
      w: (0.06 + rnd() * 0.05) * (rnd() < 0.5 ? 1 : -1) * 0.7,
      y: center.y + (rnd() - 0.5) * 50,
      flap: 6 + rnd() * 3,
      ph: rnd() * 6.28,
      cx: center.x + (rnd() - 0.5) * 40,
      cz: center.z + (rnd() - 0.5) * 60,
      bob: rnd() * 6.28,
    });
  }
  const o = new Object3D();
  const parent = new Object3D();
  const update = (t) => {
    for (let i = 0; i < birds.length; i++) {
      const b = birds[i];
      const a = b.a + t * b.w;
      const x = b.cx + Math.cos(a) * b.r;
      const z = b.cz + Math.sin(a) * b.r * 0.8;
      const y = b.y + Math.sin(t * 0.4 + b.bob) * 4;
      const dir = b.w > 0 ? 1 : -1;
      const yaw = Math.atan2(-Math.sin(a) * dir, Math.cos(a) * 0.8 * dir);
      const flap = Math.sin(t * b.flap + b.ph);
      const bank = -dir * 0.25;
      parent.position.set(x, y, z);
      parent.rotation.set(0, yaw, bank);
      parent.updateMatrix();
      const set = (mesh, px, py, pz, rz = 0, sx = 1) => {
        o.position.set(px, py, pz);
        o.rotation.set(0, 0, rz);
        o.scale.set(sx, 1, 1);
        o.updateMatrix();
        o.matrix.premultiply(parent.matrix);
        mesh.setMatrixAt(i, o.matrix);
      };
      set(bodies, 0, 0, 0);
      set(heads, 0, 0.4, 2.0);
      set(wingsL, -2.3, 0.2 + flap * 0.4, 0, flap * 0.55);
      set(wingsR, 2.3, 0.2 + flap * 0.4, 0, -flap * 0.55);
    }
    for (const m of [bodies, heads, wingsL, wingsR]) m.instanceMatrix.needsUpdate = true;
  };
  update(0);
  return { group, update };
}
