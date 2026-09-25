// Tiny voxel pilgrims and monks walking along the temple's paths.
import { BoxGeometry, InstancedMesh, MeshLambertMaterial, Object3D, Color, Group } from 'three';
import { mulberry32 } from '../voxel/rng.js';
import { XC, ORIGIN } from '../world/layout.js';

function floorAt(grid, x, z, yHint) {
  for (let y = Math.min(yHint + 3, grid.sy - 1); y >= 0; y--) if (grid.get(x, y, z)) return y + 1;
  return 0;
}

/** Sample a polyline (grid u,z) into unit steps with walking heights. */
function buildRoute(grid, pts) {
  const out = [];
  let yPrev = null;
  for (let i = 0; i < pts.length - 1; i++) {
    const [u0, z0] = pts[i];
    const [u1, z1] = pts[i + 1];
    const len = Math.max(1, Math.round(Math.hypot(u1 - u0, z1 - z0)));
    for (let k = 0; k < len; k++) {
      const u = u0 + ((u1 - u0) * k) / len;
      const z = z0 + ((z1 - z0) * k) / len;
      const gx = Math.round(XC + u);
      const gz = Math.round(z);
      if (yPrev === null) yPrev = grid.top(gx, gz) + 1;
      const y = floorAt(grid, gx, gz, yPrev);
      yPrev = y;
      out.push([gx + 0.5 + ORIGIN.x, y, gz + 0.5 + ORIGIN.z]);
    }
  }
  return out;
}

const circle = (cu, cz, r, n = 36) => {
  const p = [];
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2;
    p.push([cu + Math.cos(a) * r, cz + Math.sin(a) * r]);
  }
  return p;
};

export function createPeople(grid, count = 30) {
  const routes = [
    [[0, 398], [0, 350], [0, 316], [0, 290], [0, 250], [0, 236], [0, 214], [9, 205], [9, 187], [0, 179], [0, 160], [0, 150], [0, 136], [0, 126]],
    [[40, 276], [5, 276], [5, 292]],
    [[-40, 276], [-5, 276], [-5, 292]],
    [[46, 178], [6, 178], [6, 210], [46, 210]],
    [[-46, 178], [-6, 178], [-6, 210], [-46, 210]],
    circle(0, 196, 11.5),
    [[46, 100], [46, 92], [46, 84], [30, 78], [8, 74], [8, 64]],
    [[-46, 100], [-46, 92], [-46, 84], [-30, 78], [-8, 74], [-8, 64]],
    circle(58, 70, 12.5),
    circle(-58, 70, 12.5),
    [[-40, 332], [40, 332]],
    [[100, 24], [100, 322]],
    [[-100, 24], [-100, 322]],
    [[48, 96], [48, 150]],
    [[-48, 96], [-48, 150]],
  ].map((p) => buildRoute(grid, p));
  const weights = [4, 1, 1, 2, 2, 3, 1, 1, 2, 2, 2, 1, 1, 1, 1];

  const rnd = mulberry32(123);
  const group = new Group();
  const bodyGeo = new BoxGeometry(1.5, 3.4, 1.1);
  bodyGeo.translate(0, 1.7, 0);
  const headGeo = new BoxGeometry(1.15, 1.15, 1.15);
  headGeo.translate(0, 4.0, 0);
  const hatGeo = new BoxGeometry(1.6, 0.35, 1.6);
  hatGeo.translate(0, 4.75, 0);
  const bodies = new InstancedMesh(bodyGeo, new MeshLambertMaterial({ color: 0xffffff }), count);
  const heads = new InstancedMesh(headGeo, new MeshLambertMaterial({ color: 0xe9be92 }), count);
  const hats = new InstancedMesh(hatGeo, new MeshLambertMaterial({ color: 0x2a2320 }), count);
  const robes = ['#dc7b2d', '#dc7b2d', '#8f9196', '#8f9196', '#a83333', '#3c608f', '#e8d8b0', '#4a7f5a', '#7a4f8a', '#c9a24a'].map((h) => new Color(h));
  const c = new Color();
  const people = [];
  const totalW = weights.reduce((a, b) => a + b, 0);
  for (let i = 0; i < count; i++) {
    let r = rnd() * totalW;
    let ri = 0;
    while (r > weights[ri]) r -= weights[ri++];
    const route = routes[ri];
    c.copy(robes[Math.floor(rnd() * robes.length)]);
    bodies.setColorAt(i, c);
    people.push({
      route,
      s: rnd() * route.length,
      dir: rnd() < 0.5 ? 1 : -1,
      speed: 2.2 + rnd() * 1.6,
      wait: 0,
      hat: rnd() < 0.35,
      off: (rnd() - 0.5) * 1.2,
    });
  }
  for (const m of [bodies, heads, hats]) {
    m.frustumCulled = false;
    group.add(m);
  }
  const o = new Object3D();
  const update = (dt) => {
    for (let i = 0; i < people.length; i++) {
      const p = people[i];
      const L = p.route.length;
      if (p.wait > 0) p.wait -= dt;
      else {
        p.s += p.dir * p.speed * dt;
        if (p.s >= L - 1.01 || p.s <= 0.01) {
          p.dir = -p.dir;
          p.s = Math.min(Math.max(p.s, 0.02), L - 1.02);
          p.wait = 1.5 + Math.random() * 4;
        }
      }
      const i0 = Math.floor(p.s);
      const f = p.s - i0;
      const a = p.route[i0];
      const b = p.route[Math.min(i0 + 1, L - 1)];
      const x = a[0] + (b[0] - a[0]) * f;
      const z = a[2] + (b[2] - a[2]) * f;
      const y = a[1] + (b[1] - a[1]) * f;
      const bob = p.wait > 0 ? 0 : Math.abs(Math.sin(p.s * 1.3 + i)) * 0.28;
      const dx = (b[0] - a[0]) * p.dir;
      const dz = (b[2] - a[2]) * p.dir;
      const yaw = Math.atan2(dx, dz);
      o.position.set(x + p.off * Math.cos(yaw), y + bob, z - p.off * Math.sin(yaw));
      o.rotation.set(0, yaw, 0);
      o.scale.set(1, 1, 1);
      o.updateMatrix();
      bodies.setMatrixAt(i, o.matrix);
      heads.setMatrixAt(i, o.matrix);
      if (p.hat) hats.setMatrixAt(i, o.matrix);
      else {
        o.scale.set(0, 0, 0);
        o.updateMatrix();
        hats.setMatrixAt(i, o.matrix);
      }
    }
    for (const m of [bodies, heads, hats]) m.instanceMatrix.needsUpdate = true;
  };
  update(0);
  const setCount = (n) => {
    n = Math.max(0, Math.min(people.length, n));
    bodies.count = heads.count = hats.count = n;
    group.visible = n > 0;
  };
  return { group, update, setCount, count: people.length };
}
