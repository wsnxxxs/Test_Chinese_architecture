import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------
const SURF = 0.2; // top surface of the grass
const RAIL_Y = SURF + 0.12; // rail centerline height
const FRUSTUM = 34; // orthographic half-size
const INITIAL_ZOOM = 0.9;
const STATION_U = 0.2; // where along the loop the station sits (0..1)

const glowMats = []; // window / cab materials that glow at night
const bulbMats = []; // streetlight bulb materials
const streetLights = []; // point lights for streetlamps

// ----------------------------------------------------------------------------
// Seeded RNG (deterministic layout)
// ----------------------------------------------------------------------------
function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rng = mulberry32(7);

// ----------------------------------------------------------------------------
// Renderer / Scene / Camera / Controls
// ----------------------------------------------------------------------------
const app = document.getElementById("app");
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x4d3f50);
scene.fog = new THREE.Fog(0x4d3f50, 70, 170);

let aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.OrthographicCamera(
  -FRUSTUM * aspect,
  FRUSTUM * aspect,
  FRUSTUM,
  -FRUSTUM,
  0.1,
  1000
);
const initialCamPos = new THREE.Vector3(40, 36, 40);
const initialTarget = new THREE.Vector3(0, 1, 0);
camera.position.copy(initialCamPos);
camera.zoom = INITIAL_ZOOM;
camera.updateProjectionMatrix();

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(initialTarget);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minZoom = 0.35;
controls.maxZoom = 3;
controls.maxPolarAngle = Math.PI * 0.49;
controls.update();

// ----------------------------------------------------------------------------
// Lights
// ----------------------------------------------------------------------------
const hemi = new THREE.HemisphereLight(0xbfd4ff, 0x4a3a2a, 0.6);
scene.add(hemi);

const ambient = new THREE.AmbientLight(0xffffff, 0.25);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xffb066, 2.2);
sun.position.set(28, 22, 12);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 140;
sun.shadow.camera.left = -32;
sun.shadow.camera.right = 32;
sun.shadow.camera.top = 32;
sun.shadow.camera.bottom = -32;
sun.shadow.bias = -0.0004;
scene.add(sun);
scene.add(sun.target);

// ----------------------------------------------------------------------------
// Shared materials
// ----------------------------------------------------------------------------
const woodMat = new THREE.MeshStandardMaterial({ color: 0x8a5a32, roughness: 0.85 });
const woodDarkMat = new THREE.MeshStandardMaterial({ color: 0x5e3a20, roughness: 0.9 });
const grassMat = new THREE.MeshStandardMaterial({ color: 0x5a8a3c, roughness: 0.95 });
const waterMat = new THREE.MeshStandardMaterial({
  color: 0x2f6ea3,
  roughness: 0.2,
  metalness: 0.0,
  transparent: true,
  opacity: 0.9,
});
const ballastMat = new THREE.MeshStandardMaterial({ color: 0x6b5a44, roughness: 1.0 });
const railMat = new THREE.MeshStandardMaterial({ color: 0x9a9aa2, roughness: 0.4, metalness: 0.6 });
const bridgeMat = new THREE.MeshStandardMaterial({ color: 0x9a9488, roughness: 0.8 });
const roadMat = new THREE.MeshStandardMaterial({ color: 0x3b3b42, roughness: 0.95 });

// ----------------------------------------------------------------------------
// Display base: wood block + grass + raised rim (the "border")
// ----------------------------------------------------------------------------
const base = new THREE.Mesh(new THREE.BoxGeometry(46, 2, 46), woodMat);
base.position.y = -1.0;
base.receiveShadow = true;
base.castShadow = true;
scene.add(base);

const grass = new THREE.Mesh(new THREE.BoxGeometry(43, 0.2, 43), grassMat);
grass.position.y = 0.1;
grass.receiveShadow = true;
scene.add(grass);

function addRim() {
  const t = 0.5;
  const h = 0.28;
  const mk = (w, d, x, z) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), woodDarkMat);
    m.position.set(x, h / 2, z);
    m.castShadow = true;
    m.receiveShadow = true;
    scene.add(m);
  };
  mk(43.2, t, 0, 21.6);
  mk(43.2, t, 0, -21.6);
  mk(t, 43.2, 21.6, 0);
  mk(t, 43.2, -21.6, 0);
}
addRim();

// ----------------------------------------------------------------------------
// Ribbon helper: flat strip of given half-width following a curve (road/ballast/water)
// ----------------------------------------------------------------------------
function makeRibbon(curve, halfWidth, y, segments, closed) {
  const up = new THREE.Vector3(0, 1, 0);
  const positions = [];
  const indices = [];
  const N = segments + 1;
  for (let i = 0; i < N; i++) {
    const u = i / segments;
    const p = curve.getPointAt(u);
    const t = curve.getTangentAt(u).normalize();
    const n = new THREE.Vector3().crossVectors(up, t).normalize();
    positions.push(p.x + n.x * halfWidth, y, p.z + n.z * halfWidth);
    positions.push(p.x - n.x * halfWidth, y, p.z - n.z * halfWidth);
  }
  const quads = closed ? segments : segments - 1;
  for (let i = 0; i < quads; i++) {
    const a = 2 * i;
    const b = 2 * i + 1;
    const c = 2 * (i + 1);
    const d = 2 * (i + 1) + 1;
    indices.push(a, b, c, b, d, c);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

// ----------------------------------------------------------------------------
// River (a strip of water the track crosses twice)
// ----------------------------------------------------------------------------
const riverCurve = new THREE.CatmullRomCurve3(
  [
    new THREE.Vector3(-21, 0, 0),
    new THREE.Vector3(-10, 0, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(10, 0, 0),
    new THREE.Vector3(21, 0, 0),
  ],
  false,
  "catmullrom",
  0.5
);
const river = new THREE.Mesh(makeRibbon(riverCurve, 2, SURF + 0.012, 80, false), waterMat);
river.receiveShadow = true;
scene.add(river);

// ----------------------------------------------------------------------------
// Closed railway loop
// ----------------------------------------------------------------------------
const trackCurve = new THREE.CatmullRomCurve3(
  [
    new THREE.Vector3(-13, RAIL_Y, -8),
    new THREE.Vector3(-13, RAIL_Y, 8),
    new THREE.Vector3(-7, RAIL_Y, 13),
    new THREE.Vector3(7, RAIL_Y, 13),
    new THREE.Vector3(13, RAIL_Y, 8),
    new THREE.Vector3(13, RAIL_Y, -8),
    new THREE.Vector3(7, RAIL_Y, -13),
    new THREE.Vector3(-7, RAIL_Y, -13),
  ],
  true,
  "catmullrom",
  0.5
);
const TRACK_LEN = trackCurve.getLength();

// ballast bed
const ballast = new THREE.Mesh(makeRibbon(trackCurve, 0.55, SURF + 0.03, 400, true), ballastMat);
ballast.receiveShadow = true;
scene.add(ballast);

// two steel rails (offset curves -> tube geometry)
function buildRails() {
  const N = 600;
  const gauge = 0.5;
  const up = new THREE.Vector3(0, 1, 0);
  const left = [];
  const right = [];
  for (let i = 0; i < N; i++) {
    const u = i / N;
    const p = trackCurve.getPointAt(u);
    const t = trackCurve.getTangentAt(u).normalize();
    const n = new THREE.Vector3().crossVectors(up, t).normalize();
    left.push(new THREE.Vector3(p.x + n.x * (gauge / 2), p.y, p.z + n.z * (gauge / 2)));
    right.push(new THREE.Vector3(p.x - n.x * (gauge / 2), p.y, p.z - n.z * (gauge / 2)));
  }
  const lc = new THREE.CatmullRomCurve3(left, true, "catmullrom", 0.5);
  const rc = new THREE.CatmullRomCurve3(right, true, "catmullrom", 0.5);
  const lm = new THREE.Mesh(new THREE.TubeGeometry(lc, 600, 0.035, 6, true), railMat);
  const rm = new THREE.Mesh(new THREE.TubeGeometry(rc, 600, 0.035, 6, true), railMat);
  lm.castShadow = true;
  rm.castShadow = true;
  scene.add(lm, rm);
}
buildRails();

// sleepers
function buildSleepers() {
  const step = 0.4;
  const count = Math.floor(TRACK_LEN / step);
  const mat = new THREE.MeshStandardMaterial({ color: 0x5a4632, roughness: 0.95 });
  const geo = new THREE.BoxGeometry(0.9, 0.06, 0.14);
  for (let i = 0; i < count; i++) {
    const u = i / count;
    const p = trackCurve.getPointAt(u);
    const t = trackCurve.getTangentAt(u).normalize();
    const m = new THREE.Mesh(geo, mat);
    m.position.set(p.x, SURF + 0.06, p.z);
    m.lookAt(p.clone().add(t));
    m.castShadow = true;
    m.receiveShadow = true;
    scene.add(m);
  }
}
buildSleepers();

// bridge where the track crosses the river
function buildBridges() {
  const crossings = [];
  for (let i = 0; i <= 600; i++) {
    const u = i / 600;
    const p = trackCurve.getPointAt(u);
    if (Math.abs(p.z) < 0.6 && Math.abs(p.x) > 6) {
      crossings.push({ p: p.clone(), t: trackCurve.getTangentAt(u).clone().normalize() });
    }
  }
  const uniq = [];
  for (const c of crossings) {
    if (uniq.length === 0 || uniq[uniq.length - 1].p.distanceTo(c.p) > 3) uniq.push(c);
  }
  for (const c of uniq) {
    const g = new THREE.Group();
    g.position.copy(c.p);
    g.lookAt(c.p.clone().add(c.t));
    const spanX = 5;
    const deck = new THREE.Mesh(new THREE.BoxGeometry(spanX, 0.14, 1.5), bridgeMat);
    deck.position.set(0, -0.07, 0); // top meets rail height
    deck.castShadow = true;
    deck.receiveShadow = true;
    g.add(deck);
    for (const sx of [-0.8, 0.8]) {
      const par = new THREE.Mesh(new THREE.BoxGeometry(spanX, 0.24, 0.1), bridgeMat);
      par.position.set(sx, 0.05, 0);
      par.castShadow = true;
      g.add(par);
    }
    for (const sx of [-spanX / 2 + 0.4, spanX / 2 - 0.4]) {
      const pil = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.4, 8), bridgeMat);
      pil.position.set(sx, -0.3, 0);
      g.add(pil);
    }
    scene.add(g);
  }
}
buildBridges();

// ----------------------------------------------------------------------------
// Track-distance helper (for placing things off the rails)
// ----------------------------------------------------------------------------
const trackSamples = [];
for (let i = 0; i < 300; i++) trackSamples.push(trackCurve.getPointAt(i / 300));
function distToTrack(x, z) {
  let m = 1e9;
  for (const p of trackSamples) {
    const d = Math.hypot(p.x - x, p.z - z);
    if (d < m) m = d;
  }
  return m;
}

// ----------------------------------------------------------------------------
// Buildings
// ----------------------------------------------------------------------------
function makeBuilding(x, z, w, h, d, color, roofColor) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshStandardMaterial({ color, roughness: 0.85 })
  );
  body.position.y = h / 2;
  body.castShadow = true;
  body.receiveShadow = true;
  g.add(body);

  const roofH = Math.max(0.5, h * 0.4);
  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(Math.max(w, d) * 0.72, roofH, 4),
    new THREE.MeshStandardMaterial({ color: roofColor, roughness: 0.8, flatShading: true })
  );
  roof.position.y = h + roofH / 2;
  roof.rotation.y = Math.PI / 4;
  roof.castShadow = true;
  g.add(roof);

  // glowing windows (some of them)
  const wm = new THREE.MeshStandardMaterial({
    color: 0x223044,
    emissive: 0xffcc66,
    emissiveIntensity: 0,
  });
  glowMats.push({ mat: wm, on: rng() < 0.6 });
  const wg = new THREE.BoxGeometry(0.18, 0.26, 0.02);
  const xs = [-w / 4, w / 4];
  const ys = [h * 0.4, h * 0.7];
  for (const X of xs)
    for (const Y of ys) {
      const a = new THREE.Mesh(wg, wm);
      a.position.set(X, Y, d / 2 + 0.01);
      g.add(a);
      const b = new THREE.Mesh(wg, wm);
      b.position.set(X, Y, -d / 2 - 0.01);
      b.rotation.y = Math.PI;
      g.add(b);
    }
  const zs = [-d / 4, d / 4];
  for (const Z of zs)
    for (const Y of ys) {
      const a = new THREE.Mesh(wg, wm);
      a.position.set(w / 2 + 0.01, Y, Z);
      a.rotation.y = Math.PI / 2;
      g.add(a);
      const b = new THREE.Mesh(wg, wm);
      b.position.set(-w / 2 - 0.01, Y, Z);
      b.rotation.y = -Math.PI / 2;
      g.add(b);
    }

  g.position.set(x, SURF, z);
  return g;
}

const buildingDefs = [
  // inner cluster
  { x: 0, z: 6, w: 2.4, h: 2.2, d: 2.4, c: 0xc9b18b, r: 0x8a3b2e },
  { x: 3, z: 5, w: 2.0, h: 1.8, d: 2.0, c: 0xb8c4cc, r: 0x3a5a8a },
  { x: -4, z: 6, w: 2.2, h: 2.6, d: 2.2, c: 0xd0a06a, r: 0x5a3a20 },
  { x: 6, z: 5, w: 1.8, h: 1.6, d: 1.8, c: 0xc2b0c8, r: 0x6a4a7a },
  { x: -6, z: 4, w: 2.0, h: 2.8, d: 2.0, c: 0xa9c0a0, r: 0x3a5a3a },
  { x: 2, z: 9, w: 2.2, h: 2.0, d: 2.2, c: 0xd8c2a0, r: 0x8a3b2e },
  { x: -2, z: 10, w: 1.8, h: 1.8, d: 1.8, c: 0xb0b8c0, r: 0x4a4a5a },
  { x: -7, z: 8, w: 1.6, h: 1.4, d: 1.6, c: 0xc9b18b, r: 0x7a3a20 },
  { x: 7, z: -4, w: 2.0, h: 2.2, d: 2.0, c: 0xc2b0c8, r: 0x5a3a6a },
  { x: -5, z: -7, w: 2.2, h: 2.0, d: 2.2, c: 0xa9c0a0, r: 0x3a5a3a },
  { x: 4, z: -7, w: 1.8, h: 1.6, d: 1.8, c: 0xd0a06a, r: 0x5a3a20 },
  // outer ring
  { x: -16, z: 2, w: 2.0, h: 2.4, d: 2.0, c: 0xb8c4cc, r: 0x3a5a8a },
  { x: 15, z: -3, w: 2.0, h: 2.0, d: 2.0, c: 0xc9b18b, r: 0x8a3b2e },
  { x: 0, z: 17, w: 2.4, h: 2.6, d: 2.4, c: 0xd8c2a0, r: 0x6a3a20 },
  { x: -17, z: -6, w: 2.0, h: 2.2, d: 2.0, c: 0xc2b0c8, r: 0x5a3a6a },
  { x: 17, z: 8, w: 1.8, h: 1.8, d: 1.8, c: 0xa9c0a0, r: 0x3a5a3a },
];
for (const b of buildingDefs) {
  if (distToTrack(b.x, b.z) < 2.5) continue;
  scene.add(makeBuilding(b.x, b.z, b.w, b.h, b.d, b.c, b.r));
}

// ----------------------------------------------------------------------------
// Station (placed exactly at STATION_U, beside the track)
// ----------------------------------------------------------------------------
const sp = trackCurve.getPointAt(STATION_U);
const st = trackCurve.getTangentAt(STATION_U).normalize();
const perp = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), st).normalize();
let stationInner = sp.clone().add(perp.clone().multiplyScalar(2.6));
if (stationInner.x * sp.x > 0) stationInner.x = sp.x - (stationInner.x - sp.x);
if (stationInner.z * sp.z > 0) stationInner.z = sp.z - (stationInner.z - sp.z);

scene.add(makeBuilding(stationInner.x, stationInner.z, 3.0, 2.4, 2.2, 0xd8c2a0, 0x8a3b2e));

const platform = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.18, 1.0), woodDarkMat);
const platPos = sp.clone().add(perp.clone().multiplyScalar(1.0));
platform.position.set(platPos.x, SURF + 0.09, platPos.z);
platform.receiveShadow = true;
platform.castShadow = true;
scene.add(platform);

// ----------------------------------------------------------------------------
// Roads (connect station area with the building clusters, kept inside the loop)
// ----------------------------------------------------------------------------
function makeRoad(points) {
  const pts = points.map((p) => new THREE.Vector3(p[0], SURF + 0.012, p[1]));
  const curve = new THREE.CatmullRomCurve3(pts, false, "catmullrom", 0.5);
  const mesh = new THREE.Mesh(makeRibbon(curve, 0.55, SURF + 0.014, 60, false), roadMat);
  mesh.receiveShadow = true;
  scene.add(mesh);
}
makeRoad([[stationInner.x, stationInner.z], [1, 5], [-6, 4], [-9, 1]]);
makeRoad([[1, 5], [6, 5], [9, 1], [7, -4], [0, -5], [-7, -3]]);
makeRoad([[-6, 4], [-6, 8], [-2, 10]]);

// ----------------------------------------------------------------------------
// Streetlights
// ----------------------------------------------------------------------------
function makeStreetlight(x, z) {
  const g = new THREE.Group();
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x2b2b30, roughness: 0.7 });
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 1.3, 6), poleMat);
  pole.position.y = 0.65;
  pole.castShadow = true;
  g.add(pole);
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.05), poleMat);
  arm.position.set(0.2, 1.3, 0);
  g.add(arm);
  const bMat = new THREE.MeshStandardMaterial({
    color: 0xffe6a8,
    emissive: 0xffd28a,
    emissiveIntensity: 0,
  });
  bulbMats.push(bMat);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 8), bMat);
  bulb.position.set(0.4, 1.28, 0);
  g.add(bulb);
  const light = new THREE.PointLight(0xffd28a, 0, 7, 2);
  light.position.set(0.4, 1.28, 0);
  g.add(light);
  streetLights.push(light);
  g.position.set(x, SURF, z);
  return g;
}
const lightSpots = [
  [stationInner.x, stationInner.z],
  [1, 5],
  [6, 5],
  [0, -5],
  [7, -4],
  [-7, -3],
  [-16, 2],
  [15, -3],
  [-9, 1],
  [9, 1],
];
for (const [x, z] of lightSpots) scene.add(makeStreetlight(x, z));

// ----------------------------------------------------------------------------
// Trees
// ----------------------------------------------------------------------------
function makeTree() {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.06, 0.09, 0.5, 6),
    new THREE.MeshStandardMaterial({ color: 0x6b4a2b, roughness: 0.9, flatShading: true })
  );
  trunk.position.y = 0.25;
  trunk.castShadow = true;
  g.add(trunk);
  const leafMat = new THREE.MeshStandardMaterial({
    color: rng() < 0.5 ? 0x4a7c3a : 0x3f6b32,
    roughness: 0.9,
    flatShading: true,
  });
  const foliage = new THREE.Mesh(new THREE.IcosahedronGeometry(0.45, 0), leafMat);
  foliage.position.y = 0.75;
  foliage.scale.y = 1.2;
  foliage.castShadow = true;
  g.add(foliage);
  return g;
}
{
  const treeRng = mulberry32(99);
  let placed = 0;
  let tries = 0;
  while (placed < 30 && tries < 600) {
    tries++;
    const x = treeRng() * 38 - 19;
    const z = treeRng() * 38 - 19;
    if (Math.abs(z) < 2.6) continue; // river
    if (distToTrack(x, z) < 2.3) continue;
    if (Math.hypot(x, z) > 20) continue;
    const t = makeTree();
    t.position.set(x, SURF, z);
    t.rotation.y = treeRng() * Math.PI * 2;
    scene.add(t);
    placed++;
  }
}

// ----------------------------------------------------------------------------
// Train
// ----------------------------------------------------------------------------
function addWheels(g, len) {
  const wm = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.5 });
  const wg = new THREE.CylinderGeometry(0.12, 0.12, 0.08, 10);
  for (const z of [len / 2 - 0.28, -len / 2 + 0.28]) {
    for (const x of [0.28, -0.28]) {
      const w = new THREE.Mesh(wg, wm);
      w.rotation.z = Math.PI / 2;
      w.position.set(x, 0.12, z);
      w.castShadow = true;
      g.add(w);
    }
  }
}

function buildLoco() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(0.55, 0.5, 1.4),
    new THREE.MeshStandardMaterial({ color: 0x9c3b2e, roughness: 0.55, metalness: 0.1 })
  );
  body.position.y = 0.32;
  body.castShadow = true;
  g.add(body);
  const cab = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.34, 0.5),
    new THREE.MeshStandardMaterial({ color: 0x7a2e23, roughness: 0.6 })
  );
  cab.position.set(0, 0.66, 0.35);
  cab.castShadow = true;
  g.add(cab);
  const chimney = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.1, 0.3, 8),
    new THREE.MeshStandardMaterial({ color: 0x222426, roughness: 0.5 })
  );
  chimney.position.set(0, 0.72, -0.5); // front (-Z) leads
  chimney.castShadow = true;
  g.add(chimney);

  const cm = new THREE.MeshStandardMaterial({
    color: 0x223044,
    emissive: 0xffcc66,
    emissiveIntensity: 0,
  });
  glowMats.push({ mat: cm, on: true });
  const win = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.18, 0.02), cm);
  win.position.set(0, 0.68, 0.61);
  g.add(win);

  const hm = new THREE.MeshStandardMaterial({
    color: 0xfff2cc,
    emissive: 0xffe08a,
    emissiveIntensity: 0.6,
  });
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), hm);
  head.position.set(0, 0.34, -0.71);
  g.add(head);

  addWheels(g, 1.4);
  return g;
}

function buildCarriage() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.42, 1.2),
    new THREE.MeshStandardMaterial({ color: 0x3a6ea5, roughness: 0.6 })
  );
  body.position.y = 0.3;
  body.castShadow = true;
  g.add(body);
  const roof = new THREE.Mesh(
    new THREE.BoxGeometry(0.54, 0.1, 1.24),
    new THREE.MeshStandardMaterial({ color: 0x2b2b30, roughness: 0.7 })
  );
  roof.position.y = 0.56;
  roof.castShadow = true;
  g.add(roof);

  const wm = new THREE.MeshStandardMaterial({
    color: 0x223044,
    emissive: 0xffcc66,
    emissiveIntensity: 0,
  });
  glowMats.push({ mat: wm, on: rng() < 0.7 });
  const wg = new THREE.BoxGeometry(0.02, 0.18, 0.24);
  for (const z of [-0.34, 0, 0.34]) {
    const a = new THREE.Mesh(wg, wm);
    a.position.set(0.26, 0.34, z);
    g.add(a);
    const b = new THREE.Mesh(wg, wm);
    b.position.set(-0.26, 0.34, z);
    g.add(b);
  }
  addWheels(g, 1.2);
  return g;
}

class Train {
  constructor(scene, curve, L) {
    this.scene = scene;
    this.curve = curve;
    this.L = L;
    this.distance = 0;
    this.stationU = STATION_U;
    this.nextStationAbs = this.stationU * L;
    this.dwelling = false;
    this.dwellTimer = 0;
    this.offsets = [0, 1.5, 3.0]; // car centers behind the loco
    this.cars = [buildLoco(), buildCarriage(), buildCarriage()];
    this.cars.forEach((c) => scene.add(c));
    this.placeCars();
  }

  reset() {
    this.distance = 0;
    this.dwelling = false;
    this.dwellTimer = 0;
    this.nextStationAbs = this.stationU * this.L;
    this.placeCars();
  }

  update(dt, speed, playing) {
    if (playing && !this.dwelling) {
      this.distance += speed * dt;
      if (this.distance >= this.nextStationAbs) {
        this.distance = this.nextStationAbs;
        this.dwelling = true;
        this.dwellTimer = 2.0;
      }
    } else if (this.dwelling) {
      this.dwellTimer -= dt;
      if (this.dwellTimer <= 0) {
        this.nextStationAbs += this.L;
        this.dwelling = false;
      }
    }
    this.placeCars();
  }

  placeCars() {
    for (let i = 0; i < this.cars.length; i++) {
      let d = this.distance - this.offsets[i];
      let u = (((d % this.L) + this.L) % this.L) / this.L;
      const p = this.curve.getPointAt(u);
      const t = this.curve.getTangentAt(u).normalize();
      const car = this.cars[i];
      car.position.copy(p);
      car.lookAt(p.clone().add(t)); // -Z faces travel direction
    }
  }
}

const train = new Train(scene, trackCurve, TRACK_LEN);

// ----------------------------------------------------------------------------
// Day / night
// ----------------------------------------------------------------------------
let isNight = false;

function applyTime(night) {
  isNight = night;
  if (night) {
    scene.background.set(0x0a0c18);
    scene.fog.color.set(0x0a0c18);
    sun.color.set(0x7088c0);
    sun.intensity = 0.4;
    sun.position.set(12, 30, 8);
    hemi.color.set(0x2a3358);
    hemi.groundColor.set(0x0c0e16);
    hemi.intensity = 0.35;
    ambient.intensity = 0.12;
    ambient.color.set(0x8090c0);
    glowMats.forEach((m) => (m.mat.emissiveIntensity = m.on ? 1.3 : 0.0));
    bulbMats.forEach((m) => (m.emissiveIntensity = 1.4));
    streetLights.forEach((l) => (l.intensity = 1.3));
  } else {
    scene.background.set(0x4d3f50);
    scene.fog.color.set(0x4d3f50);
    sun.color.set(0xffb066);
    sun.intensity = 2.2;
    sun.position.set(28, 22, 12);
    hemi.color.set(0xbfd4ff);
    hemi.groundColor.set(0x4a3a2a);
    hemi.intensity = 0.6;
    ambient.intensity = 0.25;
    ambient.color.set(0xffffff);
    glowMats.forEach((m) => (m.mat.emissiveIntensity = 0.0));
    bulbMats.forEach((m) => (m.emissiveIntensity = 0.0));
    streetLights.forEach((l) => (l.intensity = 0.0));
  }
}

// ----------------------------------------------------------------------------
// UI
// ----------------------------------------------------------------------------
let playing = true;
let speedMult = 1;

const playBtn = document.getElementById("playBtn");
const resetBtn = document.getElementById("resetBtn");
const nightBtn = document.getElementById("nightBtn");
const speed = document.getElementById("speed");
const speedLabel = document.getElementById("speedLabel");

playBtn.addEventListener("click", () => {
  playing = !playing;
  playBtn.textContent = playing ? "暂停" : "运行";
});
resetBtn.addEventListener("click", () => {
  camera.position.copy(initialCamPos);
  camera.zoom = INITIAL_ZOOM;
  camera.updateProjectionMatrix();
  controls.target.copy(initialTarget);
  controls.update();
  train.reset();
  speedMult = 1;
  speed.value = 1;
  speedLabel.textContent = "1.00x";
  playing = true;
  playBtn.textContent = "暂停";
});
nightBtn.addEventListener("click", () => {
  applyTime(!isNight);
  nightBtn.textContent = isNight ? "切换到白天" : "切换到夜晚";
});
speed.addEventListener("input", () => {
  speedMult = parseFloat(speed.value);
  speedLabel.textContent = speedMult.toFixed(2) + "x";
});

applyTime(false);
nightBtn.textContent = "切换到夜晚";

// ----------------------------------------------------------------------------
// Resize + animate
// ----------------------------------------------------------------------------
window.addEventListener("resize", () => {
  aspect = window.innerWidth / window.innerHeight;
  camera.left = -FRUSTUM * aspect;
  camera.right = FRUSTUM * aspect;
  camera.top = FRUSTUM;
  camera.bottom = -FRUSTUM;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  train.update(dt, (train.L / 24) * speedMult, playing);
  controls.update();
  renderer.render(scene, camera);
}
animate();
