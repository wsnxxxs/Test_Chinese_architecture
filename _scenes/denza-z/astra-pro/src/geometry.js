import * as THREE from 'three';

export const clamp = THREE.MathUtils.clamp;
export const mix = THREE.MathUtils.lerp;
export const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
export const V = (p) => new THREE.Vector3(...p);

/** Nonuniform cubic Hermite interpolation, used for the body station curves. */
export function sample(table, x, column = 1) {
  if (x <= table[0][0]) return table[0][column];
  const n = table.length - 1;
  if (x >= table[n][0]) return table[n][column];
  let i = 0;
  while (table[i + 1][0] < x) i++;
  const a = table[i], b = table[i + 1], p = table[Math.max(0, i - 1)], q = table[Math.min(n, i + 2)];
  const h = b[0] - a[0], t = (x - a[0]) / h;
  const m0 = (b[column] - p[column]) / (b[0] - p[0]);
  const m1 = (q[column] - a[column]) / (q[0] - a[0]);
  return (2 * t ** 3 - 3 * t ** 2 + 1) * a[column] + (t ** 3 - 2 * t ** 2 + t) * h * m0 + (-2 * t ** 3 + 3 * t ** 2) * b[column] + (t ** 3 - t ** 2) * h * m1;
}

/** Arbitrary ruled / parametric surface. fn(u,v) returns a world-space XYZ point. */
export function surface(fn, nu = 48, nv = 20, reverse = false) {
  const positions = [], uv = [], indices = [];
  for (let i = 0; i <= nu; i++) for (let j = 0; j <= nv; j++) {
    positions.push(...fn(i / nu, j / nv)); uv.push(i / nu, j / nv);
  }
  for (let i = 0; i < nu; i++) for (let j = 0; j < nv; j++) {
    const a = i * (nv + 1) + j, b = a + nv + 1;
    if (reverse) indices.push(a, a + 1, b, b, a + 1, b + 1);
    else indices.push(a, b, a + 1, b, b + 1, a + 1);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(indices); geo.computeVertexNormals(); return geo;
}

export function mesh(group, geometry, material, name = '') {
  const m = new THREE.Mesh(geometry, material); m.name = name; m.castShadow = true; m.receiveShadow = true; group.add(m); return m;
}
export function tube(group, points, radius, material, closed = false, segments = 64) {
  const curve = new THREE.CatmullRomCurve3(points.map(p => p.isVector3 ? p : V(p)), closed, 'centripetal');
  return mesh(group, new THREE.TubeGeometry(curve, segments, radius, 6, closed), material);
}
export function box(group, size, position, material, name = '') {
  const m = mesh(group, new THREE.BoxGeometry(...size), material, name); m.position.set(...position); return m;
}
export function ellipsoid(group, scale, position, material, name = '') {
  const m = mesh(group, new THREE.SphereGeometry(1, 32, 20), material, name); m.scale.set(...scale); m.position.set(...position); return m;
}
export function polygon(group, points, material, name = '') {
  // For near-planar arbitrary 3D faces, project onto the strongest two axes.
  const normal = V(points[1]).sub(V(points[0])).cross(V(points[2]).sub(V(points[0])));
  const an = [Math.abs(normal.x), Math.abs(normal.y), Math.abs(normal.z)];
  const omit = an.indexOf(Math.max(...an)), axes = [0, 1, 2].filter(i => i !== omit);
  const p2 = points.map(p => new THREE.Vector2(p[axes[0]], p[axes[1]]));
  const faces = THREE.ShapeUtils.triangulateShape(p2, []);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(points.flat(), 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(p2.flatMap(p => [p.x, p.y]), 2));
  geo.setIndex(faces.flat()); geo.computeVertexNormals();
  return mesh(group, geo, material, name);
}
export function extrudeShape(group, shape, depth, material, bevel = 0.004) {
  const geo = new THREE.ExtrudeGeometry(shape, { depth, steps: 1, bevelEnabled: bevel > 0, bevelSize: bevel, bevelThickness: bevel, bevelSegments: 2, curveSegments: 16 });
  return mesh(group, geo, material);
}
export function makeShape(points) {
  const s = new THREE.Shape(); s.moveTo(...points[0]); points.slice(1).forEach(p => s.lineTo(...p)); s.closePath(); return s;
}
export function decal(text, { width = 512, height = 128, color = '#e4e8ea', background = null, fontSize = 60, weight = 500, spacing = 0 } = {}) {
  const c = document.createElement('canvas'); c.width = width; c.height = height;
  const ctx = c.getContext('2d');
  if (background) { ctx.fillStyle = background; ctx.fillRect(0, 0, width, height); }
  ctx.fillStyle = color; ctx.font = `${weight} ${fontSize}px Arial, sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  if (spacing) {
    const total = [...text].reduce((s, char) => s + ctx.measureText(char).width + spacing, -spacing);
    let x = (width - total) / 2; ctx.textAlign = 'left';
    for (const ch of text) { ctx.fillText(ch, x, height / 2); x += ctx.measureText(ch).width + spacing; }
  } else ctx.fillText(text, width / 2, height / 2);
  const tex = new THREE.CanvasTexture(c); tex.encoding = THREE.sRGBEncoding; tex.anisotropy = 4; return tex;
}

/** Weld overlapping body-patch vertices; never used for the deliberately sharp aero surfaces. */
export function weldSurfaces(geometries,tolerance=1e-5){
  const positions=[],uv=[],indices=[],lookup=new Map();
  for(const geo of geometries){
    const a=geo.attributes.position,uvA=geo.attributes.uv,remap=[];
    for(let i=0;i<a.count;i++){
      const x=a.getX(i),y=a.getY(i),z=a.getZ(i);
      const key=[x,y,z].map(n=>Math.round(n/tolerance)).join(',');
      let k=lookup.get(key);
      if(k===undefined){k=positions.length/3;lookup.set(key,k);positions.push(x,y,z);uv.push(uvA?uvA.getX(i):0,uvA?uvA.getY(i):0);}
      remap[i]=k;
    }
    if(geo.index)for(const index of geo.index.array)indices.push(remap[index]);
    else for(const index of remap)indices.push(index);
  }
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();return g;
}
