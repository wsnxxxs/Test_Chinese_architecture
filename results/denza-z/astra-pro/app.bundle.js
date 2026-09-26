const __modules = { three: globalThis.THREE };

// ---- geometry.js ----
__modules["geometry.js"] = (() => {
const THREE = __modules["three"];

const clamp = THREE.MathUtils.clamp;
const mix = THREE.MathUtils.lerp;
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const V = (p) => new THREE.Vector3(...p);

/** Nonuniform cubic Hermite interpolation, used for the body station curves. */
function sample(table, x, column = 1) {
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
function surface(fn, nu = 48, nv = 20, reverse = false) {
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

function mesh(group, geometry, material, name = '') {
  const m = new THREE.Mesh(geometry, material); m.name = name; m.castShadow = true; m.receiveShadow = true; group.add(m); return m;
}
function tube(group, points, radius, material, closed = false, segments = 64) {
  const curve = new THREE.CatmullRomCurve3(points.map(p => p.isVector3 ? p : V(p)), closed, 'centripetal');
  return mesh(group, new THREE.TubeGeometry(curve, segments, radius, 6, closed), material);
}
function box(group, size, position, material, name = '') {
  const m = mesh(group, new THREE.BoxGeometry(...size), material, name); m.position.set(...position); return m;
}
function ellipsoid(group, scale, position, material, name = '') {
  const m = mesh(group, new THREE.SphereGeometry(1, 32, 20), material, name); m.scale.set(...scale); m.position.set(...position); return m;
}
function polygon(group, points, material, name = '') {
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
function extrudeShape(group, shape, depth, material, bevel = 0.004) {
  const geo = new THREE.ExtrudeGeometry(shape, { depth, steps: 1, bevelEnabled: bevel > 0, bevelSize: bevel, bevelThickness: bevel, bevelSegments: 2, curveSegments: 16 });
  return mesh(group, geo, material);
}
function makeShape(points) {
  const s = new THREE.Shape(); s.moveTo(...points[0]); points.slice(1).forEach(p => s.lineTo(...p)); s.closePath(); return s;
}
function decal(text, { width = 512, height = 128, color = '#e4e8ea', background = null, fontSize = 60, weight = 500, spacing = 0 } = {}) {
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
function weldSurfaces(geometries,tolerance=1e-5){
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

return {clamp,mix,smooth,V,sample,surface,mesh,tube,box,ellipsoid,polygon,extrudeShape,makeShape,decal,weldSurfaces};
})();

// ---- materials.js ----
__modules["materials.js"] = (() => {
const THREE = __modules["three"];

function carbonTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const ctx = c.getContext('2d'); ctx.fillStyle = '#45484d'; ctx.fillRect(0, 0, 128, 128);
  for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
    const vertical = (x + y) % 4 < 2;
    for (let k = 0; k < 8; k++) {
      const b = 42 + Math.round(17 * Math.sin(k / 7 * Math.PI)); ctx.strokeStyle = `rgb(${b},${b + 3},${b + 6})`; ctx.lineWidth = .85;
      ctx.beginPath();
      if (vertical) { ctx.moveTo(x * 8 + k, y * 8); ctx.lineTo(x * 8 + k, y * 8 + 8); }
      else { ctx.moveTo(x * 8, y * 8 + k); ctx.lineTo(x * 8 + 8, y * 8 + k); }
      ctx.stroke();
    }
  }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(7, 7); t.anisotropy = 8; t.encoding = THREE.sRGBEncoding; return t;
}
function treadTexture() {
  const c = document.createElement('canvas'); c.width = 1024; c.height = 256; const ctx = c.getContext('2d');
  ctx.fillStyle = '#aaa'; ctx.fillRect(0, 0, c.width, c.height);
  ctx.strokeStyle = '#343434'; ctx.lineWidth = 7;
  for (const v of [52, 103, 153, 204]) { ctx.beginPath(); ctx.moveTo(0, v); ctx.lineTo(1024, v); ctx.stroke(); }
  for (let x = -30; x < 1040; x += 22) {
    ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + 15, 49); ctx.moveTo(x + 15, 55); ctx.lineTo(x + 4, 99); ctx.moveTo(x + 4, 159); ctx.lineTo(x + 17, 201); ctx.moveTo(x + 17, 209); ctx.lineTo(x, 256); ctx.stroke();
  }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; return t;
}
function grilleTexture() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 256; const ctx = c.getContext('2d');
  ctx.fillStyle = '#080b10'; ctx.fillRect(0, 0, 512, 256); ctx.strokeStyle = '#444a51'; ctx.lineWidth = 1.7;
  const r = 8.0;
  for (let row = -1; row < 24; row++) for (let col = -1; col < 48; col++) {
    const x = col * r * 1.5, y = row * r * Math.sqrt(3) + (col % 2) * r * .866;
    ctx.beginPath(); for (let n = 0; n < 6; n++) { const a = n * Math.PI / 3; const p = [x + r * Math.cos(a), y + r * Math.sin(a)]; n ? ctx.lineTo(...p) : ctx.moveTo(...p); } ctx.closePath(); ctx.stroke();
  }
  const t = new THREE.CanvasTexture(c); t.encoding = THREE.sRGBEncoding; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(2.3, 1.0); t.anisotropy = 8; return t;
}
function createMaterials() {
  const carbonMap = carbonTexture(), tread = treadTexture(), grille = grilleTexture();
  const M = {
    paint: new THREE.MeshPhysicalMaterial({ color: '#1249ef', metalness: .53, roughness: .29, clearcoat: 1, clearcoatRoughness: .17, envMapIntensity: .85, side: THREE.DoubleSide }),
    carbon: new THREE.MeshPhysicalMaterial({ color: '#7f858e', map: carbonMap, bumpMap: carbonMap, bumpScale: .00065, metalness: .30, roughness: .39, clearcoat: .4, clearcoatRoughness: .24, side: THREE.DoubleSide }),
    glass: new THREE.MeshPhysicalMaterial({ color: '#10212c', metalness: .1, roughness: .16, clearcoat: .6, transparent: true, opacity: .90, side: THREE.DoubleSide, depthWrite: false }),
    lens: new THREE.MeshPhysicalMaterial({ color: '#8aabbf', metalness: .15, roughness: .06, transparent: true, opacity: .12, clearcoat: 1, side: THREE.DoubleSide, depthWrite: false }),
    black: new THREE.MeshStandardMaterial({ color: '#070a10', roughness: .5, metalness: .22, side: THREE.DoubleSide }),
    rubber: new THREE.MeshStandardMaterial({ color: '#14171a', roughness: .91, metalness: .0, bumpMap: tread, bumpScale: .0023 }),
    sidewall: new THREE.MeshStandardMaterial({ color: '#171a1d', roughness: .86, metalness: .0 }),
    gunmetal: new THREE.MeshStandardMaterial({ color: '#626971', roughness: .3, metalness: .95, side: THREE.DoubleSide }),
    aluminium: new THREE.MeshStandardMaterial({ color: '#bac5cc', roughness: .22, metalness: 1, side: THREE.DoubleSide }),
    brake: new THREE.MeshStandardMaterial({ color: '#52595a', roughness: .57, metalness: .52, side: THREE.DoubleSide }),
    yellow: new THREE.MeshPhysicalMaterial({ color: '#e9ce32', roughness: .32, metalness: .32, clearcoat: .8, side: THREE.DoubleSide }),
    whiteLED: new THREE.MeshStandardMaterial({ color: '#e7f7ff', emissive: '#c8edff', emissiveIntensity: 3.0, roughness: .18 }),
    redLED: new THREE.MeshStandardMaterial({ color: '#b90821', emissive: '#ee082d', emissiveIntensity: 1.7, roughness: .2, metalness: .3, side: THREE.DoubleSide }),
    redLens: new THREE.MeshPhysicalMaterial({ color: '#4c0614', roughness: .18, metalness: .45, clearcoat: 1, side: THREE.DoubleSide }),
    grille: new THREE.MeshStandardMaterial({ color: '#a3a7ad', map: grille, bumpMap: grille, bumpScale: .001, roughness: .64, metalness: .55, side: THREE.DoubleSide }),
    upholstery: new THREE.MeshStandardMaterial({ color: '#101726', roughness: .88 }),
    seatBlue: new THREE.MeshStandardMaterial({ color: '#173aa7', roughness: .73 }),
  };
  return M;
}

return {createMaterials};
})();

// ---- spec.js ----
__modules["spec.js"] = (() => {
/** Dimensions supplied in the brief; 1 scene unit = 1 metre. Not OEM CAD data. */
const SPEC = Object.freeze({ length: 4.870, width: 1.990, roofHeight: 1.350, wheelbase: 2.780, wheelRadius: .370, archRadius: .408, axleFront: -1.390, axleRear: 1.390, frontTrack: 1.700, rearTrack: 1.676, frontTyreWidth: .248, rearTyreWidth: .290 });
const AXLES = [SPEC.axleFront, SPEC.axleRear];
function archBottom(x, normalBottom = .23) {
  let result = normalBottom;
  for (const axle of AXLES) {
    const dx = Math.abs(x - axle);
    if (dx <= SPEC.archRadius) result = Math.max(result, SPEC.wheelRadius + Math.sqrt(Math.max(0, SPEC.archRadius ** 2 - dx ** 2)));
  }
  return result;
}

return {SPEC,AXLES,archBottom};
})();

// ---- wheels.js ----
__modules["wheels.js"] = (() => {
const THREE = __modules["three"];
const { mesh, tube, box, makeShape, extrudeShape, decal, surface, V } = __modules["geometry.js"];
const { SPEC, AXLES } = __modules["spec.js"];

function rimSpoke(group, a, branch, M) {
  const p = (r, theta) => [r * Math.cos(theta), r * Math.sin(theta)];
  const points = branch === 0 ? [p(.052, a - .075), p(.16, a + .055), p(.183, a + .10), p(.171, a + .16), p(.15, a + .13), p(.052, a + .09)] : branch === 1 ? [p(.146, a + .085), p(.277, a + .21), p(.281, a + .24), p(.268, a + .255), p(.15, a + .14)] : [p(.16, a + .08), p(.272, a - .16), p(.284, a - .14), p(.276, a - .10), p(.16, a + .15)];
  const blade = extrudeShape(group, makeShape(points), .012, M.gunmetal, .0028); blade.position.z = .119;
  const edge = points.slice(0, 3).map(([x, y]) => [x, y, .135]); tube(group, edge, .0026, M.aluminium, false, 12);
}
function sidewallMark() {
  const c = document.createElement('canvas'); c.width = c.height = 512; const ctx = c.getContext('2d');
  ctx.translate(256, 256); ctx.fillStyle = '#666a6a'; ctx.font = '600 22px Arial'; ctx.textAlign = 'center';
  const writeArc = (text, angle, radius) => {
    for (let i = 0; i < text.length; i++) { ctx.save(); ctx.rotate(angle + (i - (text.length - 1) / 2) * .067); ctx.fillText(text[i], 0, -radius); ctx.restore(); }
  };
  writeArc('P ZERO', 0, 228); ctx.font = '13px Arial'; writeArc('TRACK COMPOUND', Math.PI, 231);
  const tex = new THREE.CanvasTexture(c); tex.encoding = THREE.sRGBEncoding; return new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: .9, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1 });
}
const torus = (g, radius, thickness, z, mat, segments = 96) => { const m = mesh(g, new THREE.TorusGeometry(radius, thickness, 8, segments), mat); m.position.z = z; return m; };

function createWheel(M, width, labelMaterial) {
  const wheel = new THREE.Group(); wheel.name = 'Performance wheel / tyre, rotor, Y-spokes, caliper';
  const w = width / 2;
  // Closed radial cross-section, revolved about local Z. Tyre radius is exactly .370.
  const profile = [[.288,-w*.95],[.313,-w],[.346,-w*.97],[.365,-w*.76],[.370,-w*.55],[.370,w*.55],[.365,w*.76],[.346,w*.97],[.313,w],[.288,w*.95]];
  const tyre = surface((u, v) => {
    const k = v * (profile.length - 1), n = Math.min(profile.length - 2, Math.floor(k)), t = k - n;
    const r = THREE.MathUtils.lerp(profile[n][0], profile[n + 1][0], t), z = THREE.MathUtils.lerp(profile[n][1], profile[n + 1][1], t), a = u * Math.PI * 2;
    return [r * Math.cos(a), r * Math.sin(a), z];
  }, 96, 36);
  mesh(wheel, tyre, M.rubber, 'Tread / 740 mm diameter');
  for (const z of [-w * .985, w * .985]) {
    const side = mesh(wheel, new THREE.RingGeometry(.287, .346, 96, 4), M.sidewall); side.position.z = z; if (z < 0) side.rotation.y = Math.PI;
    torus(wheel, .303, .0018, z + .001, M.sidewall);
    torus(wheel, .347, .0013, z + .001, M.sidewall);
  }
  const label = mesh(wheel, new THREE.RingGeometry(.312, .359, 96), labelMaterial); label.position.z = w + .0015;
  // The entire rim assembly follows the outer face when rear tyre width changes.
  const rim = new THREE.Group(); rim.position.z = w - .127; wheel.add(rim);
  const barrel = mesh(rim, new THREE.CylinderGeometry(.284, .284, width - .02, 96, 1, true), M.gunmetal); barrel.rotation.x = Math.PI / 2;
  torus(rim, .283, .007, .125, M.aluminium); torus(rim, .273, .0028, .12, M.gunmetal);
  torus(rim, .283, .006, -.105, M.gunmetal);
  const rotor = mesh(rim, new THREE.RingGeometry(.072, .244, 96), M.brake); rotor.position.z = .069;
  const backing = mesh(rim, new THREE.CylinderGeometry(.243, .243, .018, 80), M.brake); backing.rotation.x = Math.PI / 2; backing.position.z = .058;
  for (const r of [.122, .159, .199, .236]) torus(rim, r, .00075, .0705, M.gunmetal, 80);
  const holeGeo = new THREE.CircleGeometry(.0033, 7);
  const holes = new THREE.InstancedMesh(holeGeo, M.black, 100); const mat = new THREE.Matrix4(); let id = 0;
  for (let ring = 0; ring < 4; ring++) for (let i = 0; i < 25; i++) { const a = i / 25 * Math.PI * 2 + ring * .075, r = .135 + .029 * ring; mat.makeTranslation(Math.cos(a) * r, Math.sin(a) * r, .072); holes.setMatrixAt(id++, mat); } rim.add(holes);
  // Six-piston style curved brake caliper behind (not on top of) the spokes.
  const caliperShape = new THREE.Shape();
  caliperShape.moveTo(.175, -.115); caliperShape.quadraticCurveTo(.237, -.108, .244, -.045); caliperShape.lineTo(.244, .085); caliperShape.quadraticCurveTo(.22, .145, .171, .141); caliperShape.lineTo(.151, .095); caliperShape.lineTo(.151, -.068); caliperShape.closePath();
  const caliper = extrudeShape(rim, caliperShape, .062, M.yellow, .009); caliper.position.z = .042;
  const cMat = new THREE.MeshStandardMaterial({ map: decal('DENZA', { color: '#252a2e', fontSize: 65, weight: 700 }), transparent: true, roughness: .8 });
  const text = mesh(rim, new THREE.PlaneGeometry(.117, .028), cMat); text.position.set(.206, .02, .115); text.rotation.z = Math.PI / 2;
  for (let i = 0; i < 10; i++) for (let branch = 0; branch < 3; branch++) rimSpoke(rim, i / 10 * Math.PI * 2, branch, M);
  const hub = mesh(rim, new THREE.CylinderGeometry(.052, .058, .027, 40), M.gunmetal); hub.rotation.x = Math.PI / 2; hub.position.z = .126;
  torus(rim, .034, .003, .143, M.aluminium, 36);
  const cap = mesh(rim, new THREE.CircleGeometry(.029, 40), M.black); cap.position.z = .145;
  // Abstract teardrop mark, drawn as geometry rather than an external logo image.
  const emblem = makeShape([[0,.021],[-.008,.006],[-.012,-.008],[-.004,-.016],[.004,-.016],[.012,-.008],[.008,.006]]);
  const badge = mesh(rim, new THREE.ShapeGeometry(emblem, 12), M.aluminium); badge.position.z = .146;
  for (let i = 0; i < 5; i++) { const a = i * Math.PI * .4; const bolt = mesh(rim, new THREE.CylinderGeometry(.004, .004, .006, 6), M.aluminium); bolt.rotation.x = Math.PI / 2; bolt.position.set(Math.cos(a) * .043, Math.sin(a) * .043, .143); }
  const valve = box(rim, [.009,.017,.01], [.10,.242,.115], M.black); valve.rotation.z = -.4;
  return wheel;
}
function addWheels(car, M) {
  const labels = sidewallMark(), wheels = [];
  for (let axle = 0; axle < 2; axle++) for (const sign of [-1, 1]) {
    const width = axle ? SPEC.rearTyreWidth : SPEC.frontTyreWidth;
    const w = createWheel(M, width, labels);
    w.position.set(AXLES[axle], SPEC.wheelRadius, sign * (axle ? SPEC.rearTrack : SPEC.frontTrack) / 2);
    if (sign < 0) w.rotation.y = Math.PI;
    car.add(w); wheels.push(w);
  }
  return wheels;
}

return {addWheels};
})();

// ---- vehicle.js ----
__modules["vehicle.js"] = (() => {
const THREE = __modules["three"];
const { mesh, surface, sample, smooth, mix, clamp, tube, polygon, box, ellipsoid, makeShape, extrudeShape, decal, weldSurfaces } = __modules["geometry.js"];
const { SPEC, AXLES, archBottom } = __modules["spec.js"];
const { createMaterials } = __modules["materials.js"];
const { addWheels } = __modules["wheels.js"];

// X: longitudinal (front negative), Y: up, Z: left. Metres throughout.
// Station values: [x, half width, centre height, fender crown height].
const STATIONS = [
  [-2.385,.805,.553,.596],[-2.30,.904,.679,.716],[-2.11,.953,.741,.853],[-1.83,.982,.788,.921],
  [-1.39,.995,.810,.922],[-1.04,.968,.834,.902],[-.74,.933,.886,.891],[-.35,.921,.866,.891],
  [.12,.925,.859,.894],[.57,.950,.874,.923],[.98,.981,.903,.951],[1.39,.995,.934,.981],
  [1.73,.980,.932,.976],[2.05,.966,.917,.956],[2.28,.958,.884,.925],[2.385,.928,.836,.870]
];
const bodyWidth = x => sample(STATIONS, x, 1);
function topY(x, z) {
  const w = bodyWidth(x), t = clamp(Math.abs(z) / (w * .94), 0, 1);
  const center = sample(STATIONS, x, 2), crown = sample(STATIONS, x, 3);
  const fenders = Math.exp(-(((x + 1.39) / .58) ** 2)) + Math.exp(-(((x - 1.39) / .65) ** 2));
  const hood = smooth(-2.16, -1.70, x) * (1 - smooth(-.85, -.57, x));
  return center + (crown - center) * Math.sin(t * Math.PI / 2) ** 3 + .017 * Math.sin(t * Math.PI) * fenders - .022 * t ** 12 + .014 * Math.exp(-(((t - .59) / .10) ** 2)) * hood;
}
function lowerY(x) {
  const frontLift = .185 * (1 - smooth(-2.10, -1.83, x));
  const rearLift = .245 * smooth(1.87, 2.25, x);
  return archBottom(x, .225 + frontLift + rearLift);
}
function sideZ(x, y) {
  const w = bodyWidth(x), top = topY(x, .94 * w), bottom = lowerY(x);
  const v = clamp((top - y) / Math.max(.002, top - bottom), 0, 1);
  const sculpt = .072 * Math.exp(-(((x - .05) / .88) ** 2));
  return w * (.94 + .06 * Math.sin(v * Math.PI / 2)) - sculpt * Math.sin(Math.PI * v) ** 1.5 - .025 * Math.exp(-((x / .9) ** 2)) * v ** 2;
}
const sidePoint = (x, y, s, offset = .003) => [x, y, s * (sideZ(x, y) + offset)];
const topPoint = (x, z, lift = .007) => [x, topY(x, z) + lift, z];

function bodyShell(car, M) {
  const skin = new THREE.Group(); car.add(skin);
  const xs = Array.from({ length: 193 }, (_, i) => mix(-2.385, 2.385, i / 192));
  // Explicit samples either side of the arch edge create the vertical opening, not a body through the tyre.
  for (const axle of AXLES) for (const s of [-1,1]) { const end = axle + s * SPEC.archRadius; xs.push(end - .00015, end, end + .00015); }
  xs.sort((a,b) => a-b);
  const longitudinal = u => { const k = u * (xs.length - 1), i = Math.min(xs.length - 2, Math.floor(k)); return mix(xs[i], xs[i+1], k-i); };
  mesh(skin, surface((u,v) => { const x = longitudinal(u), z = mix(-1,1,v) * bodyWidth(x) * .94; return [x,topY(x,z),z]; }, xs.length - 1, 64, true), M.paint, 'Continuous compound-curvature upper body');
  for (const s of [-1,1]) {
    mesh(skin, surface((u,v) => { const x = longitudinal(u), y = mix(topY(x, bodyWidth(x)*.94), lowerY(x), v); return [x,y,s*sideZ(x,y)]; }, xs.length - 1, 24, s > 0), M.paint, 'Sculpted side shell with real wheel-arch opening');
    for (const axle of AXLES) {
      const arch = Array.from({length:81},(_,i) => { const a = Math.PI * i/80; const x = axle + SPEC.archRadius * Math.cos(a), y = SPEC.wheelRadius + SPEC.archRadius * Math.sin(a); return [x,y,s*(sideZ(x,y)+.001)]; });
      tube(car, arch, .0085, M.paint, false, 80);
      mesh(car, surface((u,v) => { const a = u*Math.PI; const x = axle + (.414)*Math.cos(a), y = SPEC.wheelRadius + .414*Math.sin(a); return [x,y,s*mix(.725,bodyWidth(x)*.99,v)]; }, 80, 6, s < 0), M.black, 'Recessed wheelhouse liner');
      const backing=mesh(car,new THREE.CircleGeometry(.414,80,0,Math.PI),M.black,'Closed inner wheelhouse');backing.position.set(axle,SPEC.wheelRadius,s*.715);if(s<0)backing.rotation.y=Math.PI;
      // Vertical ends of the wheelhouse, falling to the sill.
      for (const end of [-1,1]) {
        const x = axle + end * SPEC.archRadius;
        polygon(car, [[x,.23,s*.76],[x,.37,s*.76],[x,.37,s*bodyWidth(x)],[x,.23,s*bodyWidth(x)]], M.black);
      }
    }
  }
  // The front and rear closures share their exact boundary with the side
  // shell. Normal welding below gives the nose and haunches a rolled edge.
  for (const [x,front] of [[-2.385,true],[2.385,false]]) {
    const w=bodyWidth(x), n=front?-1:1;
    mesh(skin,surface((u,v)=>{
      const t=u*2-1, y=mix(lowerY(x),topY(x,t*.94*w),v);
      const z=t*sideZ(x,y), bulge=(front?.046:.029)*Math.sin(Math.PI*v)*(1-t*t);
      return [x+n*bulge,y,z];
    },64,24,!front),M.paint,front?'Rolled nose closure':'Rolled rear closure');
  }
  const skinMeshes=[...skin.children];
  const joined=weldSurfaces(skinMeshes.map(o=>o.geometry),.0001);
  skinMeshes.forEach(o=>{skin.remove(o);o.geometry.dispose();});
  mesh(skin,joined,M.paint,'Continuous smoothly joined body shell');
  box(car,[3.10,.065,1.38],[0,.247,0],M.black,'Flat carbon underfloor');
}

function frontAero(car, M) {
  const contour = [[-2.435,-.72],[-2.42,-.87],[-2.30,-.974],[-1.94,-.99],[-1.89,-.927],[-2.20,-.865],[-2.26,0],[-2.20,.865],[-1.89,.927],[-1.94,.99],[-2.30,.974],[-2.42,.87],[-2.435,.72]];
  const splitter = extrudeShape(car, makeShape(contour), .036, M.carbon, .006); splitter.rotation.x = Math.PI/2; splitter.position.y = .193;
  tube(car, [[-1.91,.170,-.979],[-2.26,.160,-.977],[-2.413,.155,-.835],[-2.442,.15,0],[-2.413,.155,.835],[-2.26,.160,.977],[-1.91,.170,.979]], .0055, M.yellow, false, 90);
  // Four-mouth fascia: inset mesh and genuine-depth side walls.
  for (const s of [-1,1]) {
    const opening = [[-2.337,.398,s*.40],[-2.26,.405,s*.82],[-2.235,.355,s*.918],[-2.285,.215,s*.90],[-2.39,.207,s*.53]];
    polygon(car,opening,M.grille,'Front lateral honeycomb inlet');
    const rim = opening.map(p=>[p[0]-.018,p[1],p[2]]); tube(car,rim,.011,M.carbon,true,55);
    const center = [[-2.388,.398,s*.035],[-2.35,.403,s*.385],[-2.39,.216,s*.50],[-2.414,.202,s*.035]];
    polygon(car,center,M.grille,'Central front inlet');
    polygon(car,[[-2.401,.198,s*.51],[-2.357,.410,s*.385],[-2.185,.428,s*.34],[-2.198,.235,s*.445]],M.carbon,'Front duct wall');
    polygon(car,[[-2.30,.214,s*.913],[-2.24,.445,s*.923],[-2.045,.565,s*.961],[-1.967,.272,s*.992]],M.paint,'Outboard blue aero buttress');
    polygon(car,[[-2.36,.212,s*.902],[-2.10,.259,s*1.002],[-1.96,.29,s*.992],[-2.09,.212,s*.944]],M.carbon,'Front dive plane');
    tube(car,[[-2.35,.216,s*.904],[-2.11,.263,s*.998],[-1.96,.293,s*.992]],.004,M.yellow,false,28);
    // Small horizontal blade inside each side mouth.
    polygon(car,[[-2.31,.283,s*.53],[-2.28,.291,s*.875],[-2.18,.304,s*.867],[-2.18,.292,s*.54]],M.carbon);
  }
  polygon(car,[[-2.418,.205,-.019],[-2.387,.401,-.015],[-2.387,.401,.015],[-2.418,.205,.019]],M.carbon);
}

function projectedShape(car, shape, sign, M, lift = .01, material = M.black) {
  const geometry = new THREE.ShapeGeometry(shape, 36);
  const attr = geometry.attributes.position;
  for(let i=0;i<attr.count;i++){ const x=attr.getX(i), z=attr.getY(i)*sign; attr.setXYZ(i,x,topY(x,z)+lift,z); }
  geometry.computeVertexNormals(); return mesh(car,geometry,material);
}
function frontLamps(car,M){
  for(const s of [-1,1]){
    const shape = new THREE.Shape();
    shape.moveTo(-2.292,.653); shape.bezierCurveTo(-2.322,.692,-2.278,.792,-2.212,.823);
    shape.bezierCurveTo(-2.067,.895,-1.873,.938,-1.779,.920);
    shape.quadraticCurveTo(-1.743,.910,-1.809,.853); shape.bezierCurveTo(-1.956,.742,-2.182,.615,-2.292,.653);
    projectedShape(car,shape,s,M,.009,M.black);
    const outline=shape.getPoints(64).map(p=>topPoint(p.x,p.y*s,.014)); tube(car,outline,.008,M.gunmetal,true,80);
    projectedShape(car,shape,s,M,.025,M.lens);
    for(let i=0;i<3;i++){
      const x=-1.938-i*.108,z=(.867-i*.061)*s;
      const sq=makeShape([[x-.041,Math.abs(z)-.027],[x+.033,Math.abs(z)-.027],[x+.037,Math.abs(z)+.025],[x-.036,Math.abs(z)+.029]]);
      projectedShape(car,sq,s,M,.023,M.aluminium);
      const inner=makeShape([[x-.023,Math.abs(z)-.016],[x+.019,Math.abs(z)-.016],[x+.022,Math.abs(z)+.015],[x-.02,Math.abs(z)+.017]]);
      projectedShape(car,inner,s,M,.027,M.whiteLED);
    }
    const drl=[[-1.803,.910],[-2.028,.869],[-2.219,.794],[-2.278,.718],[-2.266,.669],[-2.228,.673],[-2.159,.714],[-2.150,.751]];
    tube(car,drl.map(([x,z])=>topPoint(x,s*z,.027)),.008,M.whiteLED,false,65);
  }
  // Hood perimeter and sculpted longitudinal channels.
  const hood = [[-.71,-.56],[-1.30,-.54],[-1.86,-.535],[-2.042,-.465],[-2.073,0],[-2.042,.465],[-1.86,.535],[-1.30,.54],[-.71,.56]];
  tube(car,hood.map(([x,z])=>topPoint(x,z,.003)),.0028,M.black,false,100);
  for(const s of [-1,1]) tube(car,[[-1.99,s*.40],[-1.56,s*.45],[-1.07,s*.49],[-.78,s*.51]].map(([x,z])=>topPoint(x,z,.004)),.002,M.paint,false,60);
  badge(car,[-2.345,topY(-2.345,0)+.012,0],[Math.PI*-.5,0,Math.PI/2],.062,M);
}

function badge(group,pos,rotation,size,M){
  const g = new THREE.Group(); g.position.set(...pos); g.rotation.set(...rotation); group.add(g);
  const outline=new THREE.Shape(); outline.moveTo(0,size); outline.bezierCurveTo(-size*.24,size*.60,-size*.69,-size*.04,-size*.57,-size*.38); outline.bezierCurveTo(-size*.39,-size*.93,size*.44,-size*.93,size*.59,-size*.38); outline.bezierCurveTo(size*.71,-size*.02,size*.26,size*.62,0,size);
  mesh(g,new THREE.ShapeGeometry(outline,24),M.aluminium);
  const inner=new THREE.Shape(); inner.moveTo(0,size*.78); inner.bezierCurveTo(-size*.08,size*.25,-size*.38,-size*.10,-size*.29,-size*.34); inner.quadraticCurveTo(0,-size*.63,size*.29,-size*.34); inner.bezierCurveTo(size*.39,-size*.10,size*.09,size*.25,0,size*.78);
  const hole=mesh(g,new THREE.ShapeGeometry(inner,20),M.black); hole.position.z=.001;
}

function cabin(car,M){
  const roofProfile=[[-.15,1.281,.552],[.13,1.336,.565],[.43,1.350,.589],[.71,1.327,.609],[.98,1.275,.625],[1.08,1.24,.631]];
  const roofY=x=>sample(roofProfile,x,1), roofW=x=>sample(roofProfile,x,2);
  mesh(car,surface((u,v)=>{ const t=v*2-1,x=mix(-.15+.05*t*t,.98+.075*t*t,u); return [x,roofY(x)-.045*t*t,roofW(x)*t];},54,32),M.carbon,'Hardtop / carbon roof');
  const wind = (u,v) => {
    const t=v*2-1, x=mix(-.86+.118*t*t,-.15+.05*t*t,u);
    return [x,mix(.894+.020*t*t,1.281-.045*t*t,u)+.022*Math.sin(u*Math.PI),t*mix(.755,.552,u)];
  };
  mesh(car,surface(wind,30,44),M.glass,'Curved front windscreen');
  for(const v of [0,1]) tube(car,Array.from({length:28},(_,i)=>wind(i/27,v)),.019,M.carbon,false,40);
  tube(car,Array.from({length:41},(_,i)=>wind(0,i/40)),.014,M.black,false,48);
  tube(car,Array.from({length:41},(_,i)=>wind(1,i/40)),.013,M.carbon,false,48);
  // Flush windscreen wipers, visible but not visually dominant.
  tube(car,[[-.846,.911,-.53],[-.803,.946,-.10],[-.802,.946,.23]],.005,M.black,false,30);
  tube(car,[[-.824,.932,-.11],[-.794,.956,.49]],.0045,M.black,false,24);
  const rear=(u,v)=>{const t=v*2-1,x=mix(.98+.075*t*t,1.674-.066*t*t,u);return [x,mix(roofY(.98+.075*t*t)-.045*t*t,.948+.018*t*t,u)+.016*Math.sin(u*Math.PI),t*mix(roofW(1.02),.726,u)];};
  mesh(car,surface(rear,32,36,true),M.glass,'Sloping rear backlight');
  for(const v of [0,1]) tube(car,Array.from({length:25},(_,i)=>rear(i/24,v)),.025,M.carbon,false,40);
  tube(car,Array.from({length:30},(_,i)=>rear(1,i/29)),.022,M.carbon,false,40);
  // Low contrast heating lines belong to the rear glass, not the tail panel.
  for(let i=1;i<7;i++){const u=i/8;tube(car,Array.from({length:25},(_,j)=>{const p=rear(u,.07+j/24*.86);p[1]+=.002;return p;}),.00085,M.gunmetal,false,30);}
  const windowTop=[[-.742,.914,.755],[-.46,1.101,.661],[-.10,1.236,.554],[.17,1.289,.568],[.43,1.303,.591],[.71,1.279,.611],[1.0,1.224,.628],[1.24,1.097,.692],[1.485,.962,.773]];
  const windowBottom=[[-.742,.910,.779],[-.4,.891,.823],[0,.891,.833],[.5,.907,.830],[1.0,.936,.809],[1.485,.962,.773]];
  const windowP=(x,v,s)=>[x,mix(sample(windowTop,x,1),sample(windowBottom,x,1),v),s*mix(sample(windowTop,x,2),sample(windowBottom,x,2),v)];
  for(const s of [-1,1]){
    for(const [a,b] of [[-.725,.422],[.466,1.475]]) mesh(car,surface((u,v)=>windowP(mix(a,b,u),v,s),38,18,s<0),M.glass,a<0?'Large frameless door glass':'Rear quarter glass');
    mesh(car,surface((u,v)=>windowP(mix(.420,.469,u),v,s),3,16,s<0),M.carbon,'B pillar');
    for(const v of [0,1]) tube(car,Array.from({length:65},(_,i)=>windowP(mix(-.742,1.485,i/64),v,s)),v? .012:.018,M.carbon,false,80);
    // Shoulder seal bridges the glazing onto the painted upper body, no floating cabin.
    mesh(car,surface((u,v)=>{const x=mix(-.741,1.485,u),bottom=windowP(x,1,s);const z=mix(Math.abs(bottom[2]),Math.abs(bottom[2])+.034,v);return [x,mix(bottom[1],topY(x,z)+.001,v),s*z];},68,5,s<0),M.black);
    // C-pillar triangular infill between the side window and backlight.
    polygon(car,[[1.00,1.224,s*.628],[1.485,.962,s*.773],[1.614,.965,s*.726],[1.055,1.194,s*.632]],M.carbon,'Solid swept C-pillar');
  }
  // Minimal cockpit geometry beneath real transparent glazing.
  box(car,[1.52,.12,1.25],[.18,.675,0],M.upholstery);
  const dash=ellipsoid(car,[.23,.11,.66],[-.57,.805,0],M.upholstery,'Dashboard');
  for(const s of [-1,1]){
    const seat=new THREE.Group();seat.position.set(.28,.65,s*.335);seat.rotation.z=-.16;car.add(seat);
    ellipsoid(seat,[.12,.34,.175],[.10,.15,0],M.upholstery,'Bucket seat back');
    ellipsoid(seat,[.115,.135,.133],[.10,.385,0],M.seatBlue,'Blue headrest');
    for(const side of [-1,1])ellipsoid(seat,[.14,.28,.045],[.055,.10,side*.144],M.seatBlue);
    box(seat,[.10,.015,.07],[.005,.29,0],M.black);
  }
  const steering=mesh(car,new THREE.TorusGeometry(.123,.014,10,40),M.upholstery);steering.position.set(-.30,.853,.36);steering.rotation.y=-Math.PI/2+.30;
  box(car,[.045,.085,.073],[-.30,.85,.36],M.carbon);
  tube(car,[[.63,.95,-.61],[.78,1.19,.48],[.81,1.21,.55]],.017,M.carbon,false,30);
  tube(car,[[.63,.95,.61],[.78,1.19,-.48]],.017,M.carbon,false,30);
}

function sideDetails(car,M){
  for(const s of [-1,1]){
    const outline=[[-.753,.861],[-.766,.666],[-.754,.402],[-.649,.279],[.30,.275],[.496,.337],[.606,.588],[.581,.826],[.55,.913]];
    tube(car,outline.map(([x,y])=>sidePoint(x,y,s)),.0028,M.black,false,85);
    const handle=ellipsoid(car,[.107,.017,.011],sidePoint(.46,.801,s,.012),M.paint,'Flush door handle');
    tube(car,[[.363,.793],[.44,.787],[.545,.799],[.549,.81],[.46,.817],[.368,.809]].map(([x,y])=>sidePoint(x,y,s,.014)),.0022,M.gunmetal,true,40);
    // Deep front wheel wake outlet, horizontal blade and rising rear-quarter intake.
    polygon(car,[[-.95,.669],[-.761,.634],[-.706,.356],[-.854,.427]].map(([x,y])=>sidePoint(x,y,s,.008)),M.black,'Front wheel wake outlet');
    polygon(car,[[-.938,.680],[-.391,.707],[-.363,.69],[-.747,.657]].map(([x,y])=>sidePoint(x,y,s,.012)),M.carbon,'Side aero blade');
    polygon(car,[[.453,.365],[.954,.636],[.968,.714],[.849,.641],[.687,.508]].map(([x,y])=>sidePoint(x,y,s,.012)),M.black,'Sculpted rear intake slash');
    tube(car,[[.46,.363],[.73,.515],[.96,.666]].map(([x,y])=>sidePoint(x,y,s,.018)),.008,M.paint,false,50);
    const sillPoints=[[-.963,.222,s*.963],[-.62,.207,s*.950],[.05,.207,s*.957],[.643,.205,s*.978],[.979,.236,s*.984]];
    tube(car,sillPoints,.032,M.carbon,false,80);
    tube(car,sillPoints.map(p=>[p[0],p[1]-.020,p[2]+s*.014]),.0048,M.yellow,false,80);
    polygon(car,[[-.981,.18,s*.986],[-.927,.26,s*.968],[.914,.265,s*.97],[.997,.179,s*.993]],M.carbon);
    // Round charge flap integrated into the shoulder ahead of the rear wheel.
    const flap=Array.from({length:50},(_,i)=>{const a=i/50*Math.PI*2;return sidePoint(.976+.075*Math.cos(a),.849+.065*Math.sin(a),s,.004);});tube(car,flap,.0025,M.black,true,60);
    // Slim stalks and carbon mirror housings with their own reflective rear face.
    tube(car,[[-.644,.889,s*.782],[-.629,.912,s*.948],[-.687,.971,s*1.030]],.021,M.carbon,false,22);
    const mirror=ellipsoid(car,[.13,.057,.074],[-.709,.988,s*1.050],M.carbon,'Carbon mirror');mirror.rotation.z=.08;
    const glass=ellipsoid(car,[.008,.043,.061],[-.594,.985,s*1.048],M.aluminium);glass.rotation.z=.10;
  }
}

function rearAero(car,M){
  // Recessed full-width rear ventilation and a multi-channel, rising diffuser.
  polygon(car,[[2.391,.517,-.872],[2.397,.533,0],[2.391,.517,.872],[2.358,.291,.837],[2.413,.235,0],[2.358,.291,-.837]],M.grille,'Rear cooling grille');
  for(const s of [-1,1]){
    const frame=[[2.397,.51,s*.03],[2.378,.515,s*.64],[2.295,.465,s*.83],[2.304,.260,s*.939],[2.425,.193,s*.773],[2.437,.166,s*.295],[2.429,.18,s*.03]];
    tube(car,frame,.022,M.carbon,false,65);
    tube(car,[[2.424,.227,s*.035],[2.424,.229,s*.63],[2.348,.212,s*.773],[2.308,.255,s*.921]],.005,M.yellow,false,45);
    polygon(car,[[2.05,.246,s*.982],[2.16,.496,s*.964],[2.289,.528,s*.914],[2.40,.232,s*.91]],M.carbon,'Rear outboard aero channel');
    tube(car,[[2.02,.219,s*.997],[2.199,.223,s*.984],[2.398,.247,s*.923]],.0045,M.yellow,false,36);
  }
  mesh(car,surface((u,v)=>[mix(1.70,2.425,u),.144+.090*u*u,(v*2-1)*.79],30,18,true),M.carbon,'Rising diffuser floor');
  for(const z of [-.66,-.33,0,.33,.66]){
    const sh=makeShape([[1.74,.172],[2.38,.131],[2.437,.141],[2.428,.451],[2.35,.493],[2.10,.354]]);
    const fin=extrudeShape(car,sh,.018,M.carbon,.003);fin.position.z=z-.009;
  }
  const rain=mesh(car,new THREE.PlaneGeometry(.113,.029),M.redLED);rain.position.set(2.440,.367,0);rain.rotation.y=Math.PI/2;
  for(const s of [-1,1]){const r=box(car,[.012,.018,.153],[2.393,.473,s*.548],M.redLens);}
}

function rearLamps(car,M){
  for(const s of [-1,1]){
    for(const [center,width,height,dy] of [[.696,.214,.056,.012],[.386,.127,.040,.0]]){
      const p=(u,v,lift=.0)=>{const z=(center+u*width)*s;return [2.411-.021*Math.max(0,(Math.abs(z)-.79)/.13)+lift,.786+dy+v*height,z];};
      const coords=[];for(let i=0;i<64;i++){const a=i/64*Math.PI*2;const u=Math.cos(a),v=Math.sin(a)*(1-.31*Math.abs(u));coords.push(p(u,v));}
      polygon(car,coords,M.black,'Eye-shaped rear light recess');
      const inner=coords.map(pt=>[pt[0]+.004,.786+dy+(pt[1]-.786-dy)*.83,(center*s+(pt[2]-center*s)*.96)]);polygon(car,inner,M.redLens);
      tube(car,coords.map(pt=>[pt[0]+.006,pt[1],pt[2]]),.006,M.black,true,66);
      // Delicate illuminated almond outline, with a separate inner light guide.
      tube(car,coords.map(pt=>[pt[0]+.012,.786+dy+(pt[1]-.786-dy)*.65,center*s+(pt[2]-center*s)*.86]),.0046,M.redLED,true,64);
      tube(car,[p(-.65,-.05,.013),p(.05,-.10,.016),p(.76,-.07,.013)],.0035,M.redLED,false,30);
    }
  }
  badge(car,[2.411,.766,0],[0,Math.PI/2,0],.045,M);
  const textMat=new THREE.MeshStandardMaterial({map:decal('D E N Z A',{fontSize:40,color:'#c9d4de',spacing:4}),transparent:true,roughness:.4,metalness:.65,depthWrite:false});
  const lettering=mesh(car,new THREE.PlaneGeometry(.285,.07),textMat);lettering.position.set(2.405,.647,0);lettering.rotation.y=Math.PI/2;
  const zMat=new THREE.MeshStandardMaterial({map:decal('Z  /  RACING',{fontSize:46,color:'#bdc8d3'}),transparent:true,roughness:.5});
  const name=mesh(car,new THREE.PlaneGeometry(.223,.048),zMat);name.position.set(2.401,.652,-.64);name.rotation.y=Math.PI/2;
}

function wing(car,M){
  const wingGroup=new THREE.Group();wingGroup.name='Racing / fixed carbon rear wing';car.add(wingGroup);
  // Thick, cambered foil; its two surfaces are independently generated, joined at the edges.
  const foil=(u,v,side)=>{const z=(v*2-1)*1.023,chord=.46-.025*Math.abs(z),x=1.976+(u-.5)*chord+.028*Math.abs(z);const thickness=.022*Math.sin(Math.PI*u)**.65;return[x,1.243+.022*Math.sin(Math.PI*u)-.027*u+side*thickness*.5,z];};
  mesh(wingGroup,surface((u,v)=>foil(u,v,1),32,52,true),M.carbon,'Upper aerofoil');
  mesh(wingGroup,surface((u,v)=>foil(u,v,-1),32,52),M.carbon,'Lower aerofoil');
  for(const u of [0,1])tube(wingGroup,Array.from({length:45},(_,i)=>foil(u,i/44,0)),.0035,M.carbon,false,50);
  for(const s of [-1,1]){
    const shape=new THREE.Shape();shape.moveTo(1.747,1.210);shape.quadraticCurveTo(1.773,1.303,1.826,1.319);shape.lineTo(2.229,1.369);shape.quadraticCurveTo(2.288,1.371,2.286,1.314);shape.lineTo(2.257,1.204);shape.quadraticCurveTo(2.132,1.113,1.831,1.157);shape.quadraticCurveTo(1.758,1.17,1.747,1.210);
    const plate=extrudeShape(wingGroup,shape,.012,M.carbon,.0035);plate.position.z=s*1.026-.006;
    tube(wingGroup,[[1.75,1.208,s*1.037],[1.796,1.304,s*1.037],[1.98,1.337,s*1.037],[2.232,1.37,s*1.037],[2.282,1.338,s*1.037]],.0039,M.yellow,false,50);
    const support=new THREE.Shape();support.moveTo(1.526,.944);support.lineTo(1.668,.934);support.lineTo(2.146,1.198);support.lineTo(2.163,1.254);support.lineTo(2.064,1.264);support.lineTo(1.70,1.086);support.closePath();
    const hole=new THREE.Path();hole.moveTo(1.722,1.044);hole.quadraticCurveTo(1.716,1.061,1.754,1.086);hole.lineTo(1.967,1.189);hole.quadraticCurveTo(2.011,1.20,2.006,1.176);hole.lineTo(1.769,1.055);hole.closePath();support.holes.push(hole);
    const bracket=extrudeShape(wingGroup,support,.026,M.carbon,.002);bracket.position.z=s*.528-.013;
    box(wingGroup,[.213,.017,.076],[1.613,.946,s*.528],M.carbon);
    for(const x of [1.55,1.68]){const bolt=mesh(wingGroup,new THREE.CylinderGeometry(.006,.006,.006,8),M.aluminium);bolt.position.set(x,.96,s*.528);}
  }
  return wingGroup;
}

/** Batch opaque stationary meshes by material. Transparent windows keep their draw order. */
function batchStatic(root){
  root.updateMatrixWorld(true); const buckets=new Map(), toRemove=[];
  root.traverse(obj=>{if(!obj.isMesh||obj.isInstancedMesh||Array.isArray(obj.material)||obj.material.transparent)return;
    const key=obj.material.uuid;if(!buckets.has(key))buckets.set(key,{material:obj.material,geos:[]});
    const g=obj.geometry.index?obj.geometry.toNonIndexed():obj.geometry.clone();g.applyMatrix4(obj.matrixWorld);
    buckets.get(key).geos.push(g);toRemove.push(obj);
  });
  for(const {material,geos} of buckets.values()){
    const total=geos.reduce((sum,g)=>sum+g.attributes.position.count,0),pos=new Float32Array(total*3),normal=new Float32Array(total*3),uv=new Float32Array(total*2);let offset=0;
    for(const g of geos){const count=g.attributes.position.count;pos.set(g.attributes.position.array,offset*3);normal.set(g.attributes.normal.array,offset*3);if(g.attributes.uv)uv.set(g.attributes.uv.array,offset*2);offset+=count;g.dispose();}
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));g.setAttribute('normal',new THREE.BufferAttribute(normal,3));g.setAttribute('uv',new THREE.BufferAttribute(uv,2));g.computeBoundingSphere();mesh(root,g,material,`Batched ${material.name||material.type}`);
  }
  toRemove.forEach(o=>{o.removeFromParent();o.geometry.dispose();});
}

function createVehicle(){
  const car=new THREE.Group();car.name='DENZA Z 2026 Racing — procedural multi-view study';
  const materials=createMaterials();for(const [key,m] of Object.entries(materials))m.name=key;
  bodyShell(car,materials);frontAero(car,materials);frontLamps(car,materials);cabin(car,materials);sideDetails(car,materials);rearAero(car,materials);rearLamps(car,materials);wing(car,materials);addWheels(car,materials);
  const sourceMeshes=[];car.traverse(o=>{if(o.isMesh)sourceMeshes.push(o.name);});
  batchStatic(car);
  car.userData={units:'metres',spec:SPEC,sourceMeshCount:sourceMeshes.length,procedural:true};
  return {car,materials};
}

return {STATIONS,bodyWidth,topY,createVehicle};
})();

// ---- orbit.js ----
__modules["orbit.js"] = (() => {
const THREE = __modules["three"];

/** Pointer orbit rig. Damped spherical interpolation, touch pinch and true orthographic inspection. */
class OrbitRig {
  constructor(element, onInteract = () => {}) {
    this.element=element;this.perspective=new THREE.PerspectiveCamera(32,1,.04,90);this.orthographic=new THREE.OrthographicCamera(-4,4,3,-3,.04,90);
    this.projection='perspective';this.target=new THREE.Vector3(0,.66,0);this.state={theta:-.92,phi:1.46,distance:7.1};this.goal={...this.state};this.autoRotate=false;this.width=1;this.height=1;
    this.pointers=new Map();this.pinch=0;this.dirty=true;this.onInteract=onInteract;this.handlers=[];
    this.bind('pointerdown',e=>{this.autoRotate=false;onInteract();element.setPointerCapture(e.pointerId);this.pointers.set(e.pointerId,[e.clientX,e.clientY]);this.pinch=this.pinchDistance();element.classList.add('is-dragging');});
    this.bind('pointermove',e=>{if(!this.pointers.has(e.pointerId))return;const old=this.pointers.get(e.pointerId);this.pointers.set(e.pointerId,[e.clientX,e.clientY]);
      if(this.pointers.size===1){this.goal.theta-=(e.clientX-old[0])*.006;this.goal.phi-= (e.clientY-old[1])*.004;this.goal.phi=THREE.MathUtils.clamp(this.goal.phi,.23,1.535);}
      else{const next=this.pinchDistance();if(this.pinch>0)this.zoom(this.pinch/next);this.pinch=next;}this.dirty=true;});
    const up=e=>{this.pointers.delete(e.pointerId);if(!this.pointers.size)element.classList.remove('is-dragging');this.pinch=this.pinchDistance();};
    this.bind('pointerup',up);this.bind('pointercancel',up);this.bind('lostpointercapture',up);
    this.bind('wheel',e=>{e.preventDefault();onInteract();this.zoom(Math.exp(THREE.MathUtils.clamp(e.deltaY,-120,120)*.0015));},{passive:false});
    this.bind('contextmenu',e=>e.preventDefault());this.update(1,true);
  }
  bind(name,handler,options){this.element.addEventListener(name,handler,options);this.handlers.push([name,handler,options]);}
  pinchDistance(){const p=[...this.pointers.values()];return p.length>1?Math.hypot(p[0][0]-p[1][0],p[0][1]-p[1][1]):0;}
  zoom(factor){this.goal.distance=THREE.MathUtils.clamp(this.goal.distance*factor,3.5,13.0);this.dirty=true;}
  get camera(){return this.projection==='orthographic'?this.orthographic:this.perspective;}
  resize(width,height){this.width=width;this.height=height;this.perspective.aspect=width/height;this.perspective.updateProjectionMatrix();this.dirty=true;this.update(0,true);}
  view(name,instant=false){
    const views={hero:[-.92,1.46,6.5,'perspective'],front:[-Math.PI/2,Math.PI/2,5.1,'orthographic'],side:[0,Math.PI/2,7.1,'orthographic'],front34:[-.87,1.46,6.5,'perspective'],rear34:[.86,1.43,6.5,'perspective'],rear:[Math.PI/2,Math.PI/2,5.1,'orthographic'],right:[Math.PI,Math.PI/2,7.1,'orthographic'],top:[-.0001,.025,8.0,'orthographic']};
    const preset=views[name]||views.hero;let theta=preset[0];while(theta-this.state.theta>Math.PI)theta-=Math.PI*2;while(theta-this.state.theta<-Math.PI)theta+=Math.PI*2;
    this.goal={theta,phi:preset[1],distance:preset[2]};this.projection=preset[3];this.autoRotate=false;if(instant)this.state={...this.goal};this.dirty=true;
  }
  update(dt,force=false){
    if(this.autoRotate){this.goal.theta+=dt*.16;this.goal.phi=1.43;this.projection='perspective';this.dirty=true;}
    const delta=Math.abs(this.goal.theta-this.state.theta)+Math.abs(this.goal.phi-this.state.phi)+Math.abs(this.goal.distance-this.state.distance);
    if(!this.dirty&&!force&&delta<.00008)return false;
    const t=force?1:1-Math.exp(-dt*9);for(const key of ['theta','phi','distance'])this.state[key]=THREE.MathUtils.lerp(this.state[key],this.goal[key],t);
    const aspect=this.width/this.height,scale=aspect<1.5?1.5/aspect:1;
    const {theta,phi,distance}=this.state;const r=distance*scale;
    const pos=new THREE.Vector3(r*Math.sin(phi)*Math.sin(theta),r*Math.cos(phi),r*Math.sin(phi)*Math.cos(theta)).add(this.target);
    for(const cam of [this.perspective,this.orthographic]){cam.position.copy(pos);cam.lookAt(this.target);}
    const halfH=Math.max(1.33,2.78/aspect)*(distance/7.1);this.orthographic.left=-halfH*aspect;this.orthographic.right=halfH*aspect;this.orthographic.top=halfH;this.orthographic.bottom=-halfH;this.orthographic.updateProjectionMatrix();
    this.dirty=false;return true;
  }
  dispose(){this.handlers.forEach(([n,h,o])=>this.element.removeEventListener(n,h,o));}
}

return {OrbitRig};
})();

// ---- studio.js ----
__modules["studio.js"] = (() => {
const THREE = __modules["three"];
const { decal } = __modules["geometry.js"];
const { SPEC, AXLES } = __modules["spec.js"];

function softbox(environment,position,size,intensity,target=[0,0,0]){
  const material=new THREE.MeshBasicMaterial({color:new THREE.Color().setRGB(intensity,intensity,intensity),side:THREE.DoubleSide});
  const panel=new THREE.Mesh(new THREE.PlaneGeometry(...size),material);panel.position.set(...position);panel.lookAt(...target);environment.add(panel);
}
function createEnvironment(renderer){
  const environment=new THREE.Scene();environment.background=new THREE.Color('#343943');
  const room=new THREE.Mesh(new THREE.BoxGeometry(24,15,24),new THREE.MeshBasicMaterial({color:'#51565c',side:THREE.BackSide}));room.position.y=3;environment.add(room);
  softbox(environment,[-2,7,0],[9,1.65],3.8);
  softbox(environment,[0,5.5,4.5],[8,1.0],3.0);
  softbox(environment,[3,3,-6],[7,.65],2.1);
  softbox(environment,[-7,3.5,-1],[3,4],1.7);
  softbox(environment,[5,1.8,4],[4,1],1.5);
  const pmrem=new THREE.PMREMGenerator(renderer);const target=pmrem.fromScene(environment,.03,.1,50);pmrem.dispose();
  environment.traverse(o=>{if(o.isMesh){o.geometry.dispose();o.material.dispose();}});
  return target;
}
function shadowTexture(){const c=document.createElement('canvas');c.width=c.height=256;const ctx=c.getContext('2d'),g=ctx.createRadialGradient(128,128,12,128,128,128);g.addColorStop(0,'rgba(0,0,0,.62)');g.addColorStop(.55,'rgba(0,0,0,.24)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,256,256);return new THREE.CanvasTexture(c);}
function createStudio(scene){
  const floorMaterial=new THREE.MeshBasicMaterial({color:'#e7eae7',toneMapped:false,fog:false});
  const floor=new THREE.Mesh(new THREE.PlaneGeometry(200,200),floorMaterial);floor.rotation.x=-Math.PI/2;floor.position.y=-.082;floor.receiveShadow=true;scene.add(floor);
  const podiumMaterial=new THREE.MeshStandardMaterial({color:'#aeb9b2',roughness:.69,metalness:.10});
  const podium=new THREE.Mesh(new THREE.CylinderGeometry(3.18,3.18,.08,144),podiumMaterial);podium.position.y=-.04;podium.receiveShadow=true;scene.add(podium);
  const border=new THREE.Mesh(new THREE.TorusGeometry(3.15,.002,6,160),new THREE.MeshBasicMaterial({color:'#9ba5a1',transparent:true,opacity:.50}));border.rotation.x=Math.PI/2;border.position.y=.001;scene.add(border);
  const tickPositions=[];for(let i=0;i<120;i++){const a=i/120*Math.PI*2,r=i%10===0?3.055:3.11;tickPositions.push(Math.sin(a)*r,.002,Math.cos(a)*r,Math.sin(a)*3.145,.002,Math.cos(a)*3.145);}
  const tickG=new THREE.BufferGeometry();tickG.setAttribute('position',new THREE.Float32BufferAttribute(tickPositions,3));const ticks=new THREE.LineSegments(tickG,new THREE.LineBasicMaterial({color:'#8e9995',transparent:true,opacity:.48}));scene.add(ticks);
  const contactMap=shadowTexture();
  const contact=(x,z,w,h,opacity)=>{const p=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:contactMap,transparent:true,opacity,depthWrite:false}));p.rotation.x=-Math.PI/2;p.position.set(x,.003,z);p.renderOrder=1;scene.add(p);};
  contact(0,0,5.05,2.60,.63);for(const axle of AXLES)for(const z of [-.85,.85])contact(axle,z,.82,.47,.65);
  const key=new THREE.DirectionalLight('#fff5ea',1.75);key.position.set(-3.5,7,4.5);key.castShadow=true;key.shadow.mapSize.set(2048,2048);Object.assign(key.shadow.camera,{left:-4.3,right:4.3,top:4.3,bottom:-4.3,near:.5,far:19});key.shadow.bias=-.00035;key.shadow.normalBias=.007;key.shadow.radius=4;scene.add(key);
  const fill=new THREE.DirectionalLight('#e5efff',.8);fill.position.set(4,3,-5);scene.add(fill);
  const rim=new THREE.DirectionalLight('#ffffff',.55);rim.position.set(1,5,5);scene.add(rim);
  const ambient=new THREE.HemisphereLight('#e7efff','#a6a496',.65);scene.add(ambient);
  return {floorMaterial,podiumMaterial,key,fill,rim,ambient,ticks,border};
}
function createDimensions(){
  const group=new THREE.Group();group.name='Dimensions / supplied reference measurements';group.visible=false;
  const material=new THREE.LineBasicMaterial({color:'#52645e',transparent:true,opacity:.80});
  function line(points){const g=new THREE.BufferGeometry().setFromPoints(points.map(p=>new THREE.Vector3(...p)));group.add(new THREE.Line(g,material));}
  function label(text,pos,width=.84){const tex=decal(text,{width:768,height:128,fontSize:48,color:'#283a32',background:'#f0f3ed',weight:600});const m=new THREE.SpriteMaterial({map:tex,depthTest:false,transparent:true});const s=new THREE.Sprite(m);s.position.set(...pos);s.scale.set(width,.14,1);s.renderOrder=20;group.add(s);}
  const L=SPEC.length/2;
  line([[-L,.06,1.37],[L,.06,1.37]]);for(const x of [-L,L]){line([[x,.04,1.04],[x,.04,1.48]]);line([[x-.055,.04,1.425],[x+.055,.04,1.315]]);}label('4 870 mm',[0,.11,1.50],.86);
  line([[AXLES[0],.03,-1.28],[AXLES[1],.03,-1.28]]);for(const x of AXLES)line([[x,.03,-1.10],[x,.03,-1.40]]);label('2 780 mm',[0,.12,-1.43],.86);
  line([[2.70,.03,-.995],[2.70,.03,.995]]);for(const z of [-.995,.995])line([[2.57,.03,z],[2.79,.03,z]]);label('1 990 mm',[2.91,.10,0],.86);
  return group;
}

return {createEnvironment,createStudio,createDimensions};
})();

// ---- main.js ----
__modules["main.js"] = (() => {
const THREE = __modules["three"];
const { createVehicle } = __modules["vehicle.js"];
const { createEnvironment,createStudio,createDimensions } = __modules["studio.js"];
const { OrbitRig } = __modules["orbit.js"];
const { SPEC } = __modules["spec.js"];

THREE.ColorManagement.legacyMode=false;
const $=s=>document.querySelector(s), viewport=$('#viewport');
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance',preserveDrawingBuffer:false});
renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.65));
renderer.outputEncoding=THREE.sRGBEncoding;renderer.physicallyCorrectLights=true;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.94;
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;
renderer.setClearColor('#e7eae7',0);viewport.prepend(renderer.domElement);renderer.domElement.setAttribute('aria-label','可旋转的 3D 腾势 Z Racing 赛道版');
const scene=new THREE.Scene();window.__galleryCaptureScene?.(scene);scene.fog=new THREE.Fog('#e7eae7',20,48);
const environmentTarget=createEnvironment(renderer);scene.environment=environmentTarget.texture;

const studio=createStudio(scene),{car,materials}=createVehicle();scene.add(car);
const dimensions=createDimensions();scene.add(dimensions);
let dirty=true,lightsOn=true,dark=false,activeView='front34',toastTimer,visible=true;
const rig=new OrbitRig(viewport,()=>{activeView='free';setViewUI('free');$('#auto-orbit').classList.remove('active');$('#auto-orbit').setAttribute('aria-pressed','false');});
rig.view('hero',true);
function resize(){const r=viewport.getBoundingClientRect();renderer.setSize(r.width,r.height);rig.resize(r.width,r.height);dirty=true;}
const observer=new ResizeObserver(resize);observer.observe(viewport);resize();
const viewNames={hero:['PERSPECTIVE / 01','前侧 3/4'],front34:['PERSPECTIVE / 01','前侧 3/4'],front:['ORTHOGRAPHIC / F','正前 · 正交'],side:['ORTHOGRAPHIC / L','正侧 · 正交'],rear34:['PERSPECTIVE / 02','后侧 3/4'],rear:['ORTHOGRAPHIC / R','车尾 · 正交'],free:['FREE ORBIT / 360°','自由视角'],right:['ORTHOGRAPHIC / R','右侧 · 正交'],top:['ORTHOGRAPHIC / T','俯视 · 正交']};
function setViewUI(name){const text=viewNames[name]||viewNames.free;$('#view-code').textContent=text[0];$('#view-label').textContent=text[1];document.querySelectorAll('[data-view]').forEach(b=>{const active=b.dataset.view===name||(name==='hero'&&b.dataset.view==='front34');b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});}
function setView(name,instant=false){activeView=name;rig.view(name,instant||reducedMotion);setViewUI(name);$('#auto-orbit').classList.remove('active');$('#auto-orbit').setAttribute('aria-pressed','false');dirty=true;}
function toast(text){$('#toast').textContent=text;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2300);}
function toggle(button,state){button.classList.toggle('active',state);button.setAttribute('aria-pressed',String(state));}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
$('#reset').addEventListener('click',()=>{setView('hero');toast('已复位至完整车辆视角');});
$('#auto-orbit').addEventListener('click',()=>{rig.autoRotate=!rig.autoRotate;toggle($('#auto-orbit'),rig.autoRotate);if(rig.autoRotate){setViewUI('free');activeView='free';}dirty=true;});
$('#zoom-in').addEventListener('click',()=>rig.zoom(.88));$('#zoom-out').addEventListener('click',()=>rig.zoom(1.14));
$('#dimensions').addEventListener('click',()=>{dimensions.visible=!dimensions.visible;toggle($('#dimensions'),dimensions.visible);dirty=true;toast(dimensions.visible?'尺寸为任务参考值；单位：毫米':'已隐藏参考尺寸');});
$('#car-light').addEventListener('click',()=>{lightsOn=!lightsOn;materials.whiteLED.emissiveIntensity=lightsOn?3:0;materials.redLED.emissiveIntensity=lightsOn?1.7:0;materials.whiteLED.color.set(lightsOn?'#e7f7ff':'#43545d');materials.redLED.color.set(lightsOn?'#b90821':'#4d0612');toggle($('#car-light'),lightsOn);dirty=true;});
$('#studio-light').addEventListener('click',()=>{
  dark=!dark;document.body.classList.toggle('dark',dark);$('#studio-light').setAttribute('aria-pressed',String(dark));$('#studio-light use').setAttribute('href',dark?'#i-moon':'#i-sun');
  studio.floorMaterial.color.set(dark?'#171d24':'#e7eae7');studio.podiumMaterial.color.set(dark?'#252c33':'#aeb9b2');scene.fog.color.set(dark?'#171d24':'#e7eae7');
  studio.key.intensity=dark?.70:.85;studio.fill.intensity=dark?.70:.8;studio.ambient.intensity=dark?.22:.65;studio.rim.intensity=dark?1.4:.55;for(const m of Object.values(materials)) m.envMapIntensity=(m===materials.paint?.85:1)*(dark?.72:1);renderer.toneMappingExposure=dark?.80:.94;
  renderer.shadowMap.needsUpdate=true;dirty=true;toast(dark?'暗调影棚 / NIGHT STUDIO':'明亮影棚 / DAY STUDIO');
});
document.querySelectorAll('[data-paint]').forEach(b=>b.addEventListener('click',()=>{materials.paint.color.set(b.dataset.paint);document.querySelectorAll('[data-paint]').forEach(s=>toggle(s,s===b));$('#paint-name').textContent=b.dataset.name;dirty=true;}));
$('#fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();else toast('当前浏览器不支持全屏接口');}catch{toast('浏览器暂未允许全屏');}});
$('#capture').addEventListener('click',()=>{
  renderer.render(scene,rig.camera);renderer.domElement.toBlob(blob=>{if(!blob){toast('无法生成截图');return;}const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`DENZA-Z-Racing-${activeView}.png`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('当前视角已保存为 PNG');},'image/png');
});
window.addEventListener('keydown',e=>{if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)||e.ctrlKey||e.metaKey||e.altKey)return;
  const key=e.key.toLowerCase();if(['1','2','3','4','5'].includes(key))setView(['front','side','front34','rear34','rear'][Number(key)-1]);
  else if(key==='r')$('#reset').click();else if(key==='d')$('#dimensions').click();else if(key==='l')$('#car-light').click();else if(key===' '){e.preventDefault();$('#auto-orbit').click();}else if(key==='+'||key==='=')rig.zoom(.88);else if(key==='-')rig.zoom(1.14);
});
document.addEventListener('visibilitychange',()=>{visible=!document.hidden;if(visible){dirty=true;lastTime=performance.now();}});
renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();$('#error-panel').hidden=false;$('#error-message').textContent='WebGL 上下文已丢失，请重新加载页面。';$('#runtime-status').textContent='CONTEXT LOST';});
let lastTime=performance.now(),renderedFrames=0;
function frame(time){requestAnimationFrame(frame);const dt=Math.min((time-lastTime)/1000,.06);lastTime=time;if(!visible)return;const moving=rig.update(dt);if(dirty||moving){renderer.render(scene,rig.camera);renderedFrames++;dirty=false;}}
// Compile and render before dismissing the loader: opening the page shows the entire car.
renderer.compile(scene,rig.camera);renderer.render(scene,rig.camera);$('#loader').hidden=true;$('#runtime-status').textContent='WEBGL / LIVE';setViewUI('front34');requestAnimationFrame(frame);
function diagnostics(){const bound=new THREE.Box3().setFromObject(car);let meshes=0,triangles=0,invalid=0;car.traverse(o=>{if(o.isMesh){meshes++;const g=o.geometry;triangles+=(g.index?g.index.count:g.attributes.position.count)/3*(o.isInstancedMesh?o.count:1);for(const n of g.attributes.position.array)if(!Number.isFinite(n))invalid++;}});return {ready:true,threeRevision:THREE.REVISION,spec:SPEC,bounds:{min:bound.min.toArray(),max:bound.max.toArray()},meshes,triangles,invalidVertices:invalid,drawCalls:renderer.info.render.calls,renderedFrames,projection:rig.projection,view:activeView,lightsOn,dark,dimensions:dimensions.visible,pixelRatio:renderer.getPixelRatio()};}
window.__DENZA_STUDIO__={ready:true,scene,car,materials,renderer,rig,setView,diagnostics,render:()=>{renderer.render(scene,rig.camera);dirty=true;}};
window.addEventListener('pagehide',()=>{observer.disconnect();rig.dispose();environmentTarget.dispose();renderer.dispose();},{once:true});

return {};
})();
