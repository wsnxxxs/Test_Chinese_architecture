import * as THREE from 'three';
import {
  M, std, mulberry32, nightRegistry,
  grassTexture, woodTexture, waterTexture, glowTexture, textTexture,
} from './materials.js';

export const BOARD = { hw: 22, hd: 16 };        // half extents of the display base
export const RIVER = { z0: -4.5, z1: -1.0 };    // river band (flows along x)

export const TRACK_POINTS = [
  [-14, -10.5], [-7, -11.6], [0, -11.8], [7, -11.5], [13, -10.6],   // south straight
  [16.8, -7.6], [18.7, -3.0],                                      // east bridge
  [18.2, 2.2], [15.8, 7.2], [11.5, 10.6],                          // east bend
  [5, 12.1], [-2, 12.5], [-9, 12.1],                               // north straight
  [-14.5, 10.6], [-17.8, 6.8], [-19.2, 2.0], [-18.9, -2.8],        // west bridge
  [-17.6, -7.6],
];

// ---------------------------------------------------------------- base & terrain

function buildBase(scene) {
  const g = new THREE.Group();
  const { hw, hd } = BOARD;

  const wood = woodTexture();
  wood.repeat.set(3, 1);
  const woodMat = new THREE.MeshStandardMaterial({ map: wood, roughness: 0.8 });
  const woodDark = new THREE.MeshStandardMaterial({ map: woodTexture('#6b4226', '#4e2f18'), roughness: 0.85 });

  // main wooden plinth (top kept below the riverbed so it never shows through water)
  const plinth = new THREE.Mesh(new THREE.BoxGeometry(hw * 2 + 1.6, 1.4, hd * 2 + 1.6), woodMat);
  plinth.position.y = -1.6;
  plinth.receiveShadow = true;
  g.add(plinth);

  // raised rim / fascia dimensions — reaches down into the plinth side
  const rimH = 1.4, rimW = 0.8, rimTop = 0.28;

  const grass = grassTexture();
  const grassTop = new THREE.MeshStandardMaterial({ map: grass, roughness: 1 });
  const grassMats = [M.grassSide, M.grassSide, grassTop, M.dirt, M.grassSide, M.grassSide];
  const slabT = 0.36;

  // terrain split in two slabs with a river channel between them
  const south = new THREE.Mesh(
    new THREE.BoxGeometry(hw * 2, slabT, RIVER.z0 + hd),
    grassMats,
  );
  south.position.set(0, -slabT / 2, (RIVER.z0 - hd) / 2);
  const north = new THREE.Mesh(
    new THREE.BoxGeometry(hw * 2, slabT, hd - RIVER.z1),
    grassMats,
  );
  north.position.set(0, -slabT / 2, (RIVER.z1 + hd) / 2);
  for (const s of [south, north]) { s.receiveShadow = true; s.castShadow = false; g.add(s); }

  // river bed — fills the channel walls down to the plinth top
  const bed = new THREE.Mesh(
    new THREE.BoxGeometry(hw * 2, 0.65, RIVER.z1 - RIVER.z0),
    M.riverbed,
  );
  bed.position.set(0, -0.675, (RIVER.z0 + RIVER.z1) / 2);
  g.add(bed);

  // Lambert water: painted-model look, no grazing-angle glare hiding the blue
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(hw * 2, RIVER.z1 - RIVER.z0 - 0.15),
    new THREE.MeshLambertMaterial({
      map: waterTexture(), color: '#cfe4ec',
    }),
  );
  water.rotation.x = -Math.PI / 2;
  water.position.set(0, -0.27, (RIVER.z0 + RIVER.z1) / 2);
  water.receiveShadow = true;
  g.add(water);

  // gravel banks along the channel edges
  for (const z of [RIVER.z0 + 0.12, RIVER.z1 - 0.12]) {
    const bank = new THREE.Mesh(new THREE.BoxGeometry(hw * 2, 0.06, 0.5), M.ballast);
    bank.position.set(0, 0.02, z);
    bank.receiveShadow = true;
    g.add(bank);
  }

  // fascia rim, raised slightly over the terrain edge
  const rim = [
    [hw * 2 + 1.6, rimW, 0, -hd - rimW / 2],
    [hw * 2 + 1.6, rimW, 0, hd + rimW / 2],
    [rimW, hd * 2, -hw - rimW / 2, 0],
    [rimW, hd * 2, hw + rimW / 2, 0],
  ];
  for (const [w, d, x, z] of rim) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, rimH, d), woodDark);
    m.position.set(x, rimTop - rimH / 2, z);
    m.castShadow = m.receiveShadow = true;
    g.add(m);
  }

  scene.add(g);
  return { water };
}

// ---------------------------------------------------------------- buildings

function gableRoof(w, d, h, mat) {
  const shape = new THREE.Shape();
  shape.moveTo(-w / 2 - 0.12, 0);
  shape.lineTo(w / 2 + 0.12, 0);
  shape.lineTo(0, h);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: d + 0.24, bevelEnabled: false });
  geo.translate(0, 0, -(d + 0.24) / 2);
  const roof = new THREE.Mesh(geo, mat);
  roof.castShadow = true;
  return roof;
}

function addWindow(parent, x, y, z, ry = 0, s = 1) {
  const grp = new THREE.Group();
  const frame = new THREE.Mesh(new THREE.BoxGeometry(0.34 * s, 0.42 * s, 0.03), M.white);
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(0.26 * s, 0.34 * s), M.window);
  glass.position.z = 0.02;
  grp.add(frame, glass);
  grp.position.set(x, y, z);
  grp.rotation.y = ry;
  parent.add(grp);
}

function house({ w = 2.3, d = 2.0, h = 1.25, wall = '#e8d9b8', roof = '#8a4a3b' } = {}) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), std(wall));
  body.position.y = h / 2;
  body.castShadow = body.receiveShadow = true;
  g.add(body);

  const roofM = gableRoof(w, d, 0.65, std(roof, { roughness: 0.85 }));
  roofM.position.y = h;
  g.add(roofM);

  const door = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.72, 0.05), std('#5d4030'));
  door.position.set(w * 0.22, 0.36, d / 2 + 0.01);
  g.add(door);

  addWindow(g, -w * 0.24, 0.62, d / 2 + 0.02);
  addWindow(g, w * 0.24, 0.62, -d / 2 - 0.02, Math.PI);
  if (w > 2) addWindow(g, -w / 2 - 0.02, 0.62, 0, -Math.PI / 2);

  const chimney = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.6, 0.22), std('#9a5f4a'));
  chimney.position.set(w * 0.28, h + 0.5, -d * 0.18);
  chimney.castShadow = true;
  g.add(chimney);
  return g;
}

function shop({ w = 2.6, d = 2.1, h = 1.5, wall = '#d9c49a', awning = '#b03a2e', sign = '' } = {}) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), std(wall));
  body.position.y = h / 2;
  body.castShadow = body.receiveShadow = true;
  g.add(body);
  const cap = new THREE.Mesh(new THREE.BoxGeometry(w + 0.15, 0.12, d + 0.15), std('#8d8378'));
  cap.position.y = h + 0.05;
  cap.castShadow = true;
  g.add(cap);

  // striped awning over the shopfront
  const awn = new THREE.Mesh(
    new THREE.BoxGeometry(w * 0.7, 0.06, 0.7),
    new THREE.MeshStandardMaterial({ map: stripeTex(awning), roughness: 0.8 }),
  );
  awn.position.set(0, 0.95, d / 2 + 0.32);
  awn.rotation.x = 0.35;
  awn.castShadow = true;
  g.add(awn);

  addWindow(g, -w * 0.26, 0.5, d / 2 + 0.02, 0, 1.15);
  addWindow(g, w * 0.26, 0.5, d / 2 + 0.02, 0, 1.15);
  addWindow(g, -w * 0.26, h - 0.35, d / 2 + 0.02);
  addWindow(g, w * 0.26, h - 0.35, d / 2 + 0.02);

  if (sign) {
    const board = new THREE.Mesh(
      new THREE.BoxGeometry(w * 0.62, 0.3, 0.05),
      new THREE.MeshStandardMaterial({ map: textTexture(sign, { h: 48 }), roughness: 0.85 }),
    );
    board.position.set(0, h - 0.12, d / 2 + 0.06);
    g.add(board);
  }
  return g;
}

function stripeTex(color) {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  for (let i = 0; i < 8; i++) {
    ctx.fillStyle = i % 2 ? '#f2ead6' : color;
    ctx.fillRect(i * 8, 0, 8, 64);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function church() {
  const g = new THREE.Group();
  const nave = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.7, 4.2), std('#e6e0d2'));
  nave.position.y = 0.85;
  nave.castShadow = nave.receiveShadow = true;
  g.add(nave);
  const roof = gableRoof(2.6, 4.2, 1.0, std('#5d6b76'));
  roof.position.y = 1.7;
  g.add(roof);

  const tower = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.9, 1.2), std('#e6e0d2'));
  tower.position.set(0, 1.45, 2.3);
  tower.castShadow = true;
  g.add(tower);
  const spire = new THREE.Mesh(new THREE.ConeGeometry(0.9, 1.5, 4), std('#5d6b76'));
  spire.position.set(0, 3.65, 2.3);
  spire.rotation.y = Math.PI / 4;
  spire.castShadow = true;
  g.add(spire);

  // arched glowing windows
  addWindow(g, -0.7, 0.9, -2.12, Math.PI, 1.2);
  addWindow(g, 0.7, 0.9, -2.12, Math.PI, 1.2);
  addWindow(g, 0, 1.9, 2.92, 0, 0.9);
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.0, 0.06), std('#4a3a2c'));
  door.position.set(0, 0.5, 2.92);
  g.add(door);
  return g;
}

function stationBuilding() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.35, 1.7), std('#c9a06a'));
  body.position.y = 0.675;
  body.castShadow = body.receiveShadow = true;
  g.add(body);
  const roof = gableRoof(3.4, 1.7, 0.6, std('#7a4a3a'));
  roof.position.y = 1.35;
  g.add(roof);

  // awning facing the platform (+z side points at the track)
  const awn = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.07, 1.0), std('#7a4a3a'));
  awn.position.set(0, 1.28, 1.2);
  awn.rotation.x = -0.18;
  awn.castShadow = true;
  g.add(awn);
  for (const px of [-2.1, 2.1]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 1.25, 6), M.lampPole);
    post.position.set(px, 0.62, 1.5);
    post.castShadow = true;
    g.add(post);
  }

  addWindow(g, -1.1, 0.7, 0.87);
  addWindow(g, 1.1, 0.7, 0.87);
  addWindow(g, 0, 0.7, -0.87, Math.PI);
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.9, 0.05), std('#503a28'));
  door.position.set(0, 0.45, 0.86);
  g.add(door);

  const board = new THREE.Mesh(
    new THREE.BoxGeometry(1.9, 0.42, 0.06),
    new THREE.MeshStandardMaterial({ map: textTexture('溪 口 站', { bg: '#274434' }), roughness: 0.8 }),
  );
  board.position.set(0, 1.05, 1.62);
  g.add(board);
  return g;
}

// ---------------------------------------------------------------- small props

function lamp(glowTex) {
  const g = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, 1.5, 6), M.lampPole);
  pole.position.y = 0.75;
  pole.castShadow = true;
  g.add(pole);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), M.lampHead);
  head.position.y = 1.56;
  g.add(head);
  const capTop = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.12, 8), M.lampPole);
  capTop.position.y = 1.68;
  g.add(capTop);

  const smat = new THREE.SpriteMaterial({
    map: glowTex, color: '#ffcf8f', transparent: true,
    opacity: 0, depthWrite: false,
  });
  nightRegistry.registerSprite(smat, 0, 0.85);
  const spr = new THREE.Sprite(smat);
  spr.scale.setScalar(1.5);
  spr.position.y = 1.58;
  g.add(spr);
  return g;
}

function crossbuck() {
  const g = new THREE.Group();
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 1.5, 6), M.lampPole);
  post.position.y = 0.75;
  post.castShadow = true;
  g.add(post);
  for (const a of [-0.6, 0.6]) {
    const strip = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.0, 0.03), M.white);
    strip.position.y = 1.55;
    strip.rotation.z = a;
    strip.castShadow = true;
    g.add(strip);
  }
  return g;
}

function pier() {
  const g = new THREE.Group();
  const deck = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.08, 2.6), std('#8a6a45'));
  deck.position.y = 0.05;
  deck.castShadow = deck.receiveShadow = true;
  g.add(deck);
  for (const [x, z] of [[-0.55, -1.1], [0.55, -1.1], [-0.55, 1.1], [0.55, 1.1]]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.9, 6), M.trunk);
    post.position.set(x, -0.35, z);
    g.add(post);
  }
  return g;
}

function boat() {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.28, 1.7), std('#7a4a30'));
  hull.position.y = 0.05;
  g.add(hull);
  const bow = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.5, 4), std('#7a4a30'));
  bow.rotation.set(Math.PI / 2, Math.PI / 4, 0);
  bow.position.set(0, 0.05, 1.05);
  g.add(bow);
  const rimM = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.08, 1.78), std('#a8845c'));
  rimM.position.y = 0.2;
  g.add(rimM);
  g.scale.setScalar(0.8);
  return g;
}

function fenceRun(x0, z0, x1, z1) {
  const g = new THREE.Group();
  const len = Math.hypot(x1 - x0, z1 - z0);
  const n = Math.max(1, Math.round(len / 0.5));
  const rail = new THREE.Mesh(new THREE.BoxGeometry(len, 0.06, 0.04), M.white);
  rail.position.set((x0 + x1) / 2, 0.32, (z0 + z1) / 2);
  rail.rotation.y = -Math.atan2(z1 - z0, x1 - x0);
  g.add(rail);
  const rail2 = rail.clone();
  rail2.position.y = 0.18;
  g.add(rail2);
  const postGeo = new THREE.BoxGeometry(0.07, 0.44, 0.07);
  for (let i = 0; i <= n; i++) {
    const f = i / n;
    const post = new THREE.Mesh(postGeo, M.white);
    post.position.set(x0 + (x1 - x0) * f, 0.22, z0 + (z1 - z0) * f);
    g.add(post);
  }
  g.traverse((o) => { o.castShadow = true; });
  return g;
}

// ---------------------------------------------------------------- trees

function buildTrees(scene, positions) {
  const pines = positions.filter((p) => p.pine);
  const leafs = positions.filter((p) => !p.pine);

  const trunkGeo = new THREE.CylinderGeometry(0.07, 0.1, 0.6, 6);
  const trunks = new THREE.InstancedMesh(trunkGeo, M.trunk, positions.length);
  const pineGeo = new THREE.ConeGeometry(0.5, 1.5, 7);
  const pineMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 1 });
  const pineMesh = new THREE.InstancedMesh(pineGeo, pineMat, Math.max(1, pines.length));
  const leafGeo = new THREE.IcosahedronGeometry(0.55, 0);
  const leafMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 1 });
  const leafMesh = new THREE.InstancedMesh(leafGeo, leafMat, Math.max(1, leafs.length));

  const m = new THREE.Matrix4();
  const rng = mulberry32(99);
  let ti = 0;
  const color = new THREE.Color();

  pines.forEach((p, i) => {
    const s = p.s * (0.85 + rng() * 0.4);
    m.makeScale(s, s, s).setPosition(p.x, 0.9 * s + 0.35, p.z);
    pineMesh.setMatrixAt(i, m);
    pineMesh.setColorAt(i, color.setHSL(0.33, 0.4 + rng() * 0.15, 0.34 + rng() * 0.12));
    m.makeScale(s, s, s).setPosition(p.x, 0.3, p.z);
    trunks.setMatrixAt(ti++, m);
  });
  leafs.forEach((p, i) => {
    const s = p.s * (0.85 + rng() * 0.4);
    m.makeScale(s, s * 1.15, s).setPosition(p.x, 0.62 * s + 0.42, p.z);
    leafMesh.setMatrixAt(i, m);
    leafMesh.setColorAt(i, color.setHSL(0.24 + rng() * 0.07, 0.45 + rng() * 0.2, 0.42 + rng() * 0.13));
    m.makeScale(s, s, s).setPosition(p.x, 0.3, p.z);
    trunks.setMatrixAt(ti++, m);
  });

  for (const mesh of [trunks, pineMesh, leafMesh]) {
    mesh.castShadow = true;
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    scene.add(mesh);
  }
}

// ---------------------------------------------------------------- main build

export function buildTown(scene, path) {
  const glowTex = glowTexture();
  const { water } = buildBase(scene);
  const g = new THREE.Group();
  scene.add(g);

  const put = (obj, x, z, ry = 0) => {
    obj.position.set(x, 0, z);
    obj.rotation.y = ry;
    g.add(obj);
    return obj;
  };

  // ---- roads -------------------------------------------------------------
  const mkRoad = (w, d, x, z) => {
    const r = new THREE.Mesh(new THREE.BoxGeometry(w, 0.05, d), M.road);
    r.position.set(x, 0.03, z);
    r.receiveShadow = true;
    g.add(r);
  };
  mkRoad(27, 2.0, -0.5, -7.1);            // main street (east-west)
  mkRoad(2.0, 10.6, 8.5, -10.1);          // north-south road through the level crossing
  mkRoad(1.6, 3.2, 2.2, -8.6);            // spur to the station forecourt
  mkRoad(9, 1.5, -4, 0.6);                // north-bank lane to the cabins & dock

  for (const z of [-5.95, -8.25]) {       // sidewalks on main street
    const sw = new THREE.Mesh(new THREE.BoxGeometry(27, 0.07, 0.42), M.sidewalk);
    sw.position.set(-0.5, 0.045, z);
    sw.receiveShadow = true;
    g.add(sw);
  }

  // ---- level crossing ----------------------------------------------------
  const deck = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.12, 2.1), M.crossing);
  deck.position.set(8.5, 0.1, -11.45);
  deck.receiveShadow = true;
  g.add(deck);
  put(crossbuck(), 7.2, -10.3, Math.PI);
  put(crossbuck(), 9.8, -12.6, 0);

  // ---- station -----------------------------------------------------------
  const platform = new THREE.Mesh(new THREE.BoxGeometry(8.4, 0.24, 0.95), M.platform);
  platform.position.set(-1.5, 0.12, -10.35);
  platform.castShadow = platform.receiveShadow = true;
  g.add(platform);
  const edge = new THREE.Mesh(new THREE.BoxGeometry(8.4, 0.05, 0.12), M.platformEdge);
  edge.position.set(-1.5, 0.245, -10.78);
  g.add(edge);
  put(stationBuilding(), -1.8, -8.95, Math.PI); // awning faces the platform
  const bench = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.28, 0.3), std('#7a5a3a'));
  bench.position.set(-4.4, 0.36, -10.35);
  bench.castShadow = true;
  g.add(bench);

  // ---- buildings ---------------------------------------------------------
  put(church(), -13.6, -7.1, Math.PI / 2); // closes the west end of main street
  const shops = [
    shop({ wall: '#d9b48a', awning: '#b03a2e', sign: '面包房' }),
    shop({ wall: '#c3cfd4', awning: '#2e5d7a', sign: '杂货店' }),
    shop({ wall: '#d4c1a8', awning: '#4a7a4f', sign: '茶馆' }),
  ];
  put(shops[0], -8.5, -5.75);
  put(shops[1], -5.4, -5.75);
  put(shops[2], -2.3, -5.75);

  const houses = [
    { p: [-10.8, -9.6], c: ['#e8d9b8', '#8a4a3b'], r: 0.05 },
    { p: [-7.4, -9.9], c: ['#d9c9ae', '#6b6f74'], r: -0.04 },
    { p: [4.8, -9.9], c: ['#e0d0b8', '#a0522d'], r: 0.08 },
    { p: [11.2, -8.6], c: ['#cfd8cc', '#7a4a3a'], r: -0.15 },
    { p: [12.6, -5.9], c: ['#e6d6b0', '#8a4a3b'], r: 0.2 },
    { p: [5.3, -14.1], c: ['#e8d9b8', '#7a5a3a'], r: Math.PI },
    { p: [12.2, -14.0], c: ['#c98f6a', '#6b4a3a'], r: Math.PI + 0.1 },
    { p: [-11.2, -13.9], c: ['#d8cfb8', '#8a4a3b'], r: Math.PI - 0.08 },
    { p: [-16.2, -13.8], c: ['#dbc4a0', '#5d6b76'], r: Math.PI + 0.15 },
  ];
  for (const { p, c, r } of houses) {
    put(house({ wall: c[0], roof: c[1] }), p[0], p[1], r);
  }

  // ---- north side: cabins, pier, boat ------------------------------------
  put(house({ w: 2.0, d: 1.7, h: 1.05, wall: '#9a7a55', roof: '#5d4630' }), -9, 3.4, 0.3);
  put(house({ w: 1.8, d: 1.5, h: 0.95, wall: '#8a6f4e', roof: '#4d4438' }), 11.5, 5.6, -0.4);
  put(pier(), -9, -1.9);
  const b = put(boat(), 3.2, -2.75, 0.9);
  b.position.y = -0.32;

  // dock shed + crates for flavour
  put(house({ w: 1.4, d: 1.2, h: 0.8, wall: '#7d6248', roof: '#5d4630' }), -12.5, -0.3, 0.2);

  // ---- lamps --------------------------------------------------------------
  const lampPos = [
    [-10, -6.05], [-4, -8.2], [2, -6.05], [11.5, -8.2],
    [-4.8, -10.25], [1.8, -10.25],         // platform lamps
    [-9.9, -0.5], [8.5, -13.2],            // dock + south road
  ];
  for (const [x, z] of lampPos) put(lamp(glowTex), x, z);

  // ---- fences --------------------------------------------------------------
  g.add(fenceRun(-13.4, -15.3, -9.4, -15.3));
  g.add(fenceRun(-9.4, -15.3, -9.4, -12.6));
  g.add(fenceRun(4.4, -13.6, 6.2, -13.2));
  g.add(fenceRun(-12.2, -8.55, -9.8, -8.55));

  // ---- rocks along the banks ----------------------------------------------
  const rockGeo = new THREE.DodecahedronGeometry(0.28, 0);
  const rngR = mulberry32(12);
  for (const [x, z, s] of [
    [-16.5, -0.55, 1.2], [-15.2, -0.5, 0.8], [16.8, -0.6, 1.0],
    [-16.8, -4.9, 0.9], [17.2, -4.9, 1.1], [14.6, -0.5, 0.7],
  ]) {
    const rock = new THREE.Mesh(rockGeo, M.stone);
    rock.position.set(x, 0.02, z);
    rock.scale.set(s, s * 0.6, s);
    rock.rotation.y = rngR() * 6;
    rock.castShadow = rock.receiveShadow = true;
    g.add(rock);
  }

  // ---- trees (seeded scatter, rejected near track / roads / buildings) ----
  const rng = mulberry32(42);
  const keepOut = [
    { x: -13.6, z: -7.1, r: 3.4 }, // church
    { x: -1.5, z: -9.8, r: 5.2 },  // station + platform
    { x: -5.4, z: -5.75, r: 4.6 }, // shop row
    { x: -9, z: 3.4, r: 2.4 }, { x: 11.5, z: 5.6, r: 2.2 }, { x: -9, z: -1.9, r: 1.8 },
    { x: 3.2, z: -2.75, r: 1.5 },
    ...houses.map((h) => ({ x: h.p[0], z: h.p[1], r: 2.6 })),
  ];
  const treePts = [];
  const tmp = new THREE.Vector3();
  const nearTrack = (x, z) => {
    // cheap: sample every ~1.5 units of arc
    for (let a = 0; a < path.length; a += 1.5) {
      path.pointAt(a, tmp);
      const dx = tmp.x - x, dz = tmp.z - z;
      if (dx * dx + dz * dz < 2.6) return true;
    }
    return false;
  };
  const nearRoad = (x, z) =>
    (Math.abs(z + 7.1) < 1.9 && x > -14 && x < 13.2) ||
    (Math.abs(x - 8.5) < 1.9 && z > -15.6 && z < -4.6) ||
    (Math.abs(z - 0.6) < 1.7 && x > -8.6 && x < 0.6);

  const zones = [
    { n: 34, x0: -19, x1: 19, z0: 0.6, z1: 14.6, pineP: 0.6, s: [0.8, 1.5] },  // north forest
    { n: 10, x0: -16, x1: 14, z0: -10.2, z1: -5.0, pineP: 0.15, s: [0.7, 1.1] }, // town
    { n: 7, x0: -18, x1: 16, z0: -15.4, z1: -12.6, pineP: 0.3, s: [0.8, 1.3] },  // south field
  ];
  for (const zn of zones) {
    let placed = 0, tries = 0;
    while (placed < zn.n && tries < 400) {
      tries++;
      const x = zn.x0 + rng() * (zn.x1 - zn.x0);
      const z = zn.z0 + rng() * (zn.z1 - zn.z0);
      if (z > RIVER.z0 - 0.9 && z < RIVER.z1 + 0.9) continue;
      if (nearRoad(x, z) || nearTrack(x, z)) continue;
      if (keepOut.some((k) => (x - k.x) ** 2 + (z - k.z) ** 2 < k.r * k.r)) continue;
      if (treePts.some((t) => (t.x - x) ** 2 + (t.z - z) ** 2 < 1.1)) continue;
      treePts.push({ x, z, pine: rng() < zn.pineP, s: zn.s[0] + rng() * (zn.s[1] - zn.s[0]) });
      placed++;
    }
  }
  buildTrees(g, treePts);

  // a couple of parked model cars on main street
  for (const [x, z, c] of [[-6.5, -6.6, '#a04038'], [5.6, -7.7, '#3a6b8a']]) {
    const car = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.28, 0.45), std(c, { roughness: 0.5 }));
    body.position.y = 0.22;
    const cab = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.2, 0.4), std(c, { roughness: 0.5 }));
    cab.position.y = 0.45;
    car.add(body, cab);
    car.traverse((o) => { o.castShadow = true; });
    put(car, x, z, 0.05);
  }

  return { water };
}
