import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { trackPose, LOOP_LENGTH } from './simulation.js';

const palette = { grass: '#92aa69', cream: '#e8d9b7', roof: '#b85e3f', darkRoof: '#4d6662', timber: '#73523c', stone: '#bdbaa6', rail: '#666b60', green: '#315b49', brass: '#d5ac61' };
let seed = 7391;
function random() { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }
function mat(color, options = {}) { return new THREE.MeshStandardMaterial({ color, roughness: .85, ...options }); }

export function createTown(container) {
  seed = 7391;
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.3;
  container.appendChild(renderer.domElement);
  const camera = new THREE.OrthographicCamera(-22, 22, 18, -18, .1, 160);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = .065;
  controls.enablePan = false;
  controls.minZoom = .7;
  controls.maxZoom = 2.4;
  controls.minPolarAngle = .28;
  controls.maxPolarAngle = 1.24;
  controls.rotateSpeed = .55;
  const staticGroup = new THREE.Group(); scene.add(staticGroup);
  const materials = Object.fromEntries(Object.entries(palette).map(([key, color]) => [key, mat(color)]));
  const trim = mat('#eee5ca'), iron = mat('#3e4d45'), sand = mat('#c7bb97'), red = mat('#b95338');
  const windows = mat('#647e79', { roughness: .35, emissive: '#ffc66d', emissiveIntensity: 0 });
  const darkWindows = mat('#526c69', { roughness: .4 });
  const lanterns = mat('#ffe8b2', { emissive: '#ffbd61', emissiveIntensity: .25 });
  const foliage = ['#658644', '#7d9a54', '#9cab5b', '#49704b', '#b0b269'].map(c => mat(c));
  const geometries = { box: new THREE.BoxGeometry(1, 1, 1), sphere: new THREE.IcosahedronGeometry(1, 1), cylinder: new THREE.CylinderGeometry(1, 1, 1, 10) };
  const lights = [];

  function mesh(geo, material, x, y, z, parent = staticGroup) {
    const obj = new THREE.Mesh(geo, material); obj.position.set(x, y, z); obj.castShadow = true; obj.receiveShadow = true; parent.add(obj); return obj;
  }
  function box(w, h, d, x, y, z, material, parent) { const obj = mesh(geometries.box, material, x, y, z, parent); obj.scale.set(w, h, d); return obj; }
  function cylinder(rt, rb, height, x, y, z, material, parent, segments = 12) { return mesh(new THREE.CylinderGeometry(rt, rb, height, segments), material, x, y, z, parent); }
  function beam(from, to, width, material, parent = staticGroup) {
    const a = new THREE.Vector3(...from), b = new THREE.Vector3(...to);
    const obj = box(width, a.distanceTo(b), width, ...a.clone().add(b).multiplyScalar(.5).toArray(), material, parent);
    obj.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.sub(a).normalize()); return obj;
  }
  function label(text, width, height, color = '#f3e5bb', background = '#355949') {
    const canvas = document.createElement('canvas'); canvas.width = 768; canvas.height = 192;
    const ctx = canvas.getContext('2d'); ctx.fillStyle = background; ctx.fillRect(0, 0, 768, 192);
    ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.strokeRect(13, 13, 742, 166);
    ctx.fillStyle = color; ctx.font = '500 67px Georgia'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, 384, 100);
    const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
    return new THREE.Mesh(new THREE.PlaneGeometry(width, height), new THREE.MeshStandardMaterial({ map: texture, roughness: .85 }));
  }
  function grainTexture(wood = false) {
    const canvas = document.createElement('canvas'); canvas.width = canvas.height = 512; const ctx = canvas.getContext('2d');
    ctx.fillStyle = wood ? '#966948' : '#98ae71'; ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < (wood ? 1900 : 19000); i++) {
      const tone = random() > .5; ctx.fillStyle = wood ? (tone ? '#bd94631d' : '#452e241f') : (tone ? '#e2d39a28' : '#546c3822');
      const x = random() * 512, y = random() * 512; ctx.fillRect(x, y, wood ? 40 + random() * 200 : 1 + random() * 3, wood ? .5 + random() : 1 + random() * 3);
    }
    const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; texture.wrapS = texture.wrapT = THREE.RepeatWrapping; texture.repeat.set(wood ? 3 : 5, wood ? 1 : 4); texture.anisotropy = 4; return texture;
  }
  function roundedSlab(w, d, h, radius, y, material) {
    const s = new THREE.Shape(), x = -w / 2, z = -d / 2;
    s.moveTo(x + radius, z); s.lineTo(x + w - radius, z); s.quadraticCurveTo(x + w, z, x + w, z + radius); s.lineTo(x + w, z + d - radius); s.quadraticCurveTo(x + w, z + d, x + w - radius, z + d); s.lineTo(x + radius, z + d); s.quadraticCurveTo(x, z + d, x, z + d - radius); s.lineTo(x, z + radius); s.quadraticCurveTo(x, z, x + radius, z);
    const geo = new THREE.ExtrudeGeometry(s, { depth: h, bevelEnabled: true, bevelThickness: .07, bevelSize: .07, bevelSegments: 3, steps: 1, curveSegments: 10 });
    const obj = mesh(geo, material, 0, y, 0); obj.rotation.x = -Math.PI / 2; return obj;
  }
  const wood = mat('#ffffff', { map: grainTexture(true), roughness: .68 });
  roundedSlab(30.5, 22.2, .7, .7, -.92, wood);
  roundedSlab(30.7, 22.4, .13, .75, -.98, materials.timber);
  roundedSlab(30.3, 22, .12, .6, -.19, mat('#b88c57'));
  roundedSlab(29.7, 21.4, .12, .5, -.18, mat('#677e55'));
  const plate = label('W I L L O W   C R E E K', 4.5, .43, '#514d3b', '#c6ab72'); plate.position.set(0, -.55, 11.19); staticGroup.add(plate);
  for (const x of [-2.08, 2.08]) { const screw = cylinder(.035, .035, .02, x, -.55, 11.21, iron); screw.rotation.x = Math.PI / 2; }
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.ShadowMaterial({ opacity: .14 })); shadow.rotation.x = -Math.PI / 2; shadow.position.y = -1.13; shadow.receiveShadow = true; scene.add(shadow);

  const riverX = z => -6 + 1.05 * Math.sin(z * .35);
  const riverHalf = 1.08;
  const grass = mat('#ffffff', { map: grainTexture() });
  function land(side) {
    const s = new THREE.Shape(); const edge = side === -1 ? -14.75 : 14.75;
    s.moveTo(edge, -10.6); s.lineTo(riverX(-10.6) + side * riverHalf, -10.6);
    for (let z = -10.6; z <= 10.61; z += .2) s.lineTo(riverX(z) + side * riverHalf, z);
    s.lineTo(riverX(10.6) + side * riverHalf, 10.6); s.lineTo(edge, 10.6); s.closePath();
    const geo = new THREE.ExtrudeGeometry(s, { depth: .3, bevelEnabled: false, curveSegments: 8 });
    geo.rotateX(Math.PI / 2); // shape Y becomes world Z; depth goes down from turf.
    const obj = mesh(geo, grass, 0, .3, 0); return obj;
  }
  land(-1); land(1);
  const waterMaterial = mat('#68b9b2', { roughness: .26, metalness: .22, transparent: true, opacity: .91 });
  const waterShape = new THREE.Shape();
  for (let i = 0; i <= 106; i++) { const z = -10.6 + i * .2; const x = riverX(z) - riverHalf; i === 0 ? waterShape.moveTo(x, z) : waterShape.lineTo(x, z); }
  for (let i = 106; i >= 0; i--) { const z = -10.6 + i * .2; waterShape.lineTo(riverX(z) + riverHalf, z); }
  const water = mesh(new THREE.ShapeGeometry(waterShape), waterMaterial, 0, .085, 0); water.rotation.x = Math.PI / 2; water.material.side = THREE.DoubleSide; water.castShadow = false;
  const bankMat = mat('#bab49a');
  for (let z = -10.25; z < 10.3; z += .42) for (const side of [-1, 1]) {
    const rock = mesh(geometries.sphere, bankMat, riverX(z) + side * 1.08, .20, z); rock.scale.set(.17 + random() * .12, .12 + random() * .08, .2 + random() * .13);
  }
  const rippleMat = mat('#c0e0cc', { transparent: true, opacity: .55 });
  for (let i = 0; i < 48; i++) { const z = -10 + random() * 20; const ripple = box(.15 + random() * .5, .007, .023, riverX(z) + (random() - .5) * 1.55, .104, z, rippleMat); ripple.rotation.y = -.1; }

  function ribbon(points, width, material, y = .32) {
    const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(p[0], y, p[1])));
    const vertices = [], indices = []; const steps = 100;
    for (let i = 0; i <= steps; i++) { const p = curve.getPoint(i / steps), t = curve.getTangent(i / steps); const nx = -t.z * width / 2, nz = t.x * width / 2; vertices.push(p.x + nx, y, p.z + nz, p.x - nx, y, p.z - nz); if (i < steps) { const n = i * 2; indices.push(n, n + 2, n + 1, n + 1, n + 2, n + 3); } }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3)); geo.setIndex(indices); geo.computeVertexNormals(); const obj = mesh(geo, material, 0, 0, 0); obj.material.side = THREE.DoubleSide; return obj;
  }
  const road = mat('#ccc3a5');
  ribbon([[-3, 3.7], [-1.4, 2.8], [1.7, 2.6], [5, 2.5], [7.7, 1], [8.7, -2.6]], 1.05, road);
  ribbon([[1.7, 4.7], [1.7, 2.6], [1.2, .5], [.7, -1.2], [1.4, -4.8]], .9, road);
  ribbon([[-4.6, -1.2], [-2.9, -.8], [.7, -1.2], [4, -1.4], [7.2, -2.1]], .8, road);
  ribbon([[-8, -1.2], [-9.1, -.8], [-9.6, 1.2], [-9.5, 3]], .7, road);
  const plaza = cylinder(1.24, 1.24, .065, 1.15, .34, 1.6, sand, undefined, 32);
  cylinder(.46, .52, .23, 1.15, .48, 1.6, materials.stone, undefined, 20);
  cylinder(.36, .36, .03, 1.15, .61, 1.6, waterMaterial, undefined, 20);
  cylinder(.075, .12, .65, 1.15, .84, 1.6, trim); cylinder(.22, .08, .08, 1.15, 1.13, 1.6, trim);

  function isBridge(p) { return Math.abs(p.x - riverX(p.z)) < 1.52 && Math.abs(p.z) > 5.8; }
  const ballast = mat('#a49f85');
  const railPoints = [[], []];
  for (let i = 0; i <= 720; i++) {
    const p = trackPose(i / 720 * LOOP_LENGTH); const nx = -p.tz, nz = p.tx;
    railPoints[0].push(new THREE.Vector3(p.x + nx * .335, .53, p.z + nz * .335)); railPoints[1].push(new THREE.Vector3(p.x - nx * .335, .53, p.z - nz * .335));
  }
  const stripVertices = [], stripIndices = [];
  for (let i = 0; i < 720; i++) {
    const p = trackPose(i / 720 * LOOP_LENGTH), q = trackPose((i + 1) / 720 * LOOP_LENGTH); if (isBridge(p)) continue;
    const n = stripVertices.length / 3;
    for (const t of [p, q]) stripVertices.push(t.x - t.tz * .64, .325, t.z + t.tx * .64, t.x + t.tz * .64, .325, t.z - t.tx * .64);
    stripIndices.push(n, n + 2, n + 1, n + 1, n + 2, n + 3);
  }
  const ballastGeo = new THREE.BufferGeometry(); ballastGeo.setAttribute('position', new THREE.Float32BufferAttribute(stripVertices, 3)); ballastGeo.setIndex(stripIndices); ballastGeo.computeVertexNormals(); ballast.side = THREE.DoubleSide; mesh(ballastGeo, ballast, 0, 0, 0);
  for (const points of railPoints) { const curve = new THREE.CatmullRomCurve3(points, false); mesh(new THREE.TubeGeometry(curve, 720, .045, 5, false), materials.rail, 0, 0, 0); }
  for (let i = 0; i < 236; i++) { const p = trackPose(i / 236 * LOOP_LENGTH); const sleeper = box(1.03, .095, .15, p.x, .416, p.z, materials.timber); sleeper.rotation.y = Math.atan2(p.tx, p.tz); }

  function railwayBridge(z) {
    const x = riverX(z), length = 3.5;
    box(length, .17, 1.28, x, .3, z, materials.timber);
    for (const end of [-1, 1]) box(.47, .45, 1.65, x + end * 1.54, .14, z, materials.stone);
    for (const side of [-1, 1]) {
      const zz = z + side * .68; beam([x - 1.72, .55, zz], [x + 1.72, .55, zz], .105, materials.darkRoof);
      beam([x - 1.72, 1.18, zz], [x + 1.72, 1.18, zz], .10, materials.darkRoof);
      for (let j = 0; j <= 4; j++) { const xx = x - 1.7 + j * .85; beam([xx, .43, zz], [xx, 1.2, zz], .085, materials.darkRoof); if (j < 4) beam([xx, .53, zz], [xx + .85, 1.18, zz], .075, materials.darkRoof); }
    }
  }
  railwayBridge(6.6); railwayBridge(-6.6);
  // A separate footbridge connects the riverside cottage to the village paths.
  const footZ = -1.2, footX = riverX(footZ);
  for (let i = 0; i < 18; i++) box(.18, .10, .8, footX - 1.65 + i * .19, .4 + Math.sin(i / 17 * Math.PI) * .18, footZ, wood);
  for (const side of [-1, 1]) { for (let i = 0; i < 5; i++) box(.07, .63, .07, footX - 1.65 + i * .83, .66, footZ + side * .42, materials.timber); beam([footX - 1.65, .99, footZ + side * .42], [footX + 1.67, .99, footZ + side * .42], .07, materials.timber); }

  function roof(w, d, h, y, material, group) {
    const shape = new THREE.Shape(); shape.moveTo(-w / 2, 0); shape.lineTo(w / 2, 0); shape.lineTo(0, h); shape.closePath();
    const geo = new THREE.ExtrudeGeometry(shape, { depth: d, bevelEnabled: false }); mesh(geo, material, 0, y, -d / 2, group);
    for (const side of [-1, 1]) {
      beam([0, y + h + .015, -d / 2], [side * w / 2, y + .015, -d / 2], .09, trim, group);
      beam([0, y + h + .015, d / 2], [side * w / 2, y + .015, d / 2], .09, trim, group);
      for (let row = 1; row <= 5; row++) {
        const x = side * w / 2 * row / 5, yy = y + h * (1 - row / 5) + .03;
        box(.025, .025, d + .02, x, yy, 0, material, group);
      }
      for (let z = -d / 2 + .22; z < d / 2; z += .3) beam([0, y + h + .019, z], [side * w / 2, y + .019, z], .012, materials.timber, group);
    }
    box(.10, .08, d + .08, 0, y + h + .025, 0, material, group);
  }
  function windowPanel(x, y, z, w, h, group, side = false) {
    const frame = box(w + .12, h + .12, .065, x, y, z, trim, group);
    const glass = box(w, h, .075, x, y, z + .017, random() < .72 ? windows : darkWindows, group);
    const vertical = box(.045, h, .09, x, y, z + .035, trim, group);
    const horizontal = box(w, .035, .09, x, y, z + .037, trim, group);
    if (side) for (const obj of [frame, glass, vertical, horizontal]) { obj.position.set(z + (obj.position.z - z), y + (obj.position.y - y), x); obj.rotation.y = Math.PI / 2; }
  }
  function building({ x, z, w = 2, d = 1.8, h = 1.7, color = '#e8d9b7', roofColor, rotation = 0, title, awning = false }) {
    const g = new THREE.Group(); g.position.set(x, .31, z); g.rotation.y = rotation; staticGroup.add(g);
    const wall = mat(color); const roofing = roofColor ? mat(roofColor) : materials.roof;
    box(w + .18, .14, d + .16, 0, .07, 0, materials.stone, g); box(w, h, d, 0, h / 2 + .13, 0, wall, g);
    for (const xx of [-w / 2 + .04, w / 2 - .04]) box(.10, h, .09, xx, h / 2 + .14, d / 2 + .025, trim, g);
    box(w + .10, .10, d + .11, 0, h + .12, 0, trim, g); roof(w + .32, d + .32, w * .39, h + .18, roofing, g);
    box(.37, .88, .37, w * .28, h + .52, -d * .23, wall, g); box(.45, .12, .44, w * .28, h + 1.01, -d * .23, trim, g);
    box(.39, .82, .065, 0, .55, d / 2 + .045, materials.green, g); box(.055, .055, .05, .12, .52, d / 2 + .09, materials.brass, g);
    for (const xx of [-w * .3, w * .3]) { windowPanel(xx, .82, d / 2 + .04, .36, .49, g); if (h > 2) windowPanel(xx, 1.78, d / 2 + .04, .4, .53, g); }
    for (const zz of [-d * .27, d * .27]) windowPanel(zz, h * .60, w / 2 + .045, .40, .57, g, true);
    box(.62, .11, .32, 0, .12, d / 2 + .16, materials.stone, g);
    if (title) { const sign = label(title, w * .85, .28); sign.position.set(0, h > 2 ? 1.27 : 1.40, d / 2 + .065); g.add(sign); }
    if (awning) {
      for (let j = 0; j < 9; j++) { const canopy = box(w / 9, .065, .59, -w / 2 + w / 18 + j * w / 9, 1.18, d / 2 + .25, j % 2 ? trim : materials.green, g); canopy.rotation.x = .15; box(w / 9, .16, .055, -w / 2 + w / 18 + j * w / 9, 1.06, d / 2 + .55, j % 2 ? trim : materials.green, g); }
    }
    return g;
  }
  building({ x: -1.6, z: -.25, w: 1.85, d: 1.65, h: 2.25, color: '#dfb775', title: 'BAKERY', awning: true });
  building({ x: 3.1, z: .1, w: 1.85, d: 1.7, h: 2.05, color: '#d4dfcf', roofColor: '#53746e', title: 'POST OFFICE' });
  building({ x: 5.6, z: -.4, w: 1.75, d: 1.8, h: 1.6, color: '#e6c6a4', title: 'CAFÉ', awning: true, rotation: -.15 });
  building({ x: 5.45, z: -3.55, w: 2.1, d: 1.7, h: 2.25, color: '#d6b7a1', roofColor: '#846d5c', rotation: .1 });
  building({ x: 2.3, z: -3.6, w: 1.6, d: 1.45, h: 1.55, color: '#eee0ad', roofColor: '#667966' });
  building({ x: -9.45, z: -2.4, w: 1.65, d: 1.6, h: 1.3, color: '#efe1be', rotation: .35 });
  // The little chapel anchors the back of the village.
  const chapel = building({ x: -2.0, z: -3.7, w: 1.7, d: 2.2, h: 2.0, color: '#eee5cf', roofColor: '#697a74' });
  box(.89, 3.12, .87, 0, 1.6, .83, trim, chapel); roof(1.06, 1.02, 1.1, 3.2, materials.darkRoof, chapel);
  const clockFace = cylinder(.27, .27, .04, 0, 2.73, 1.29, trim, chapel, 24); clockFace.rotation.x = Math.PI / 2;
  box(.025, .19, .03, 0, 2.79, 1.325, iron, chapel); box(.14, .024, .03, .06, 2.72, 1.326, iron, chapel);
  beam([0, 4.18, 0], [0, 4.54, 0], .05, materials.brass, chapel); beam([-.11, 4.41, 0], [.11, 4.41, 0], .04, materials.brass, chapel);

  // Station platform is entirely inside the loading gauge of the front straight.
  box(7.8, .19, 1.13, 1.0, .405, 5.52, materials.stone);
  box(7.8, .025, .10, 1.0, .51, 6.01, trim);
  for (let i = 0; i < 31; i++) box(.026, .008, 1.05, -2.7 + i * .25, .507, 5.5, sand);
  const station = building({ x: 1.1, z: 4.4, w: 3.3, d: 1.35, h: 1.2, color: '#e6d4ae', title: 'WILLOW CREEK' });
  box(4.7, .10, .89, 1.05, 1.77, 5.33, materials.darkRoof);
  for (const x of [-1.2, 3.3]) { cylinder(.055, .055, 1.2, x, 1.09, 5.73, materials.green); beam([x, 1.42, 5.73], [x + .3, 1.75, 5.73], .06, materials.green); }
  const stationSign = label('WILLOW CREEK', 1.65, .30); stationSign.position.set(-2, 1.31, 5.76); staticGroup.add(stationSign); for (const x of [-2.7, -1.3]) box(.045, 1, .045, x, .95, 5.76, materials.green);

  function bench(x, z, rotation = 0) {
    const g = new THREE.Group(); g.position.set(x, .32, z); g.rotation.y = rotation; staticGroup.add(g);
    for (const xx of [-.31, .31]) { box(.055, .31, .3, xx, .15, 0, iron, g); box(.055, .55, .05, xx, .27, -.11, iron, g); }
    for (let i = 0; i < 3; i++) box(.85, .06, .073, 0, .34, -.10 + i * .10, wood, g);
    for (let i = 0; i < 2; i++) box(.85, .09, .05, 0, .48 + i * .12, -.13, wood, g);
  }
  bench(-.15, 5.38); bench(3.35, 5.4); bench(2.3, 1.3, -Math.PI / 2); bench(-3.5, -.6, .4);
  function lamp(x, z, height = 1.9) {
    cylinder(.10, .15, .17, x, .38, z, iron); cylinder(.036, .055, height, x, .38 + height / 2, z, iron);
    cylinder(.15, .11, .27, x, height + .31, z, lanterns, undefined, 6); cylinder(.22, .07, .12, x, height + .50, z, iron, undefined, 6);
    for (const offset of [-.11, .11]) box(.025, .28, .025, x + offset, height + .31, z, iron);
    const light = new THREE.PointLight('#ffcf81', 0, 4.5, 2); light.position.set(x, height + .2, z); scene.add(light); lights.push(light);
  }
  for (const p of [[-2.8, 4.8], [4.6, 5.45], [-.1, 2.65], [4.8, 2.95], [7.5, .9], [.4, -1.5], [-3.7, -1.2], [2.0, -4.9]]) lamp(...p);

  function tree(x, z, size = 1, pine = false) {
    const y = .3; cylinder(.09 * size, .14 * size, 1.15 * size, x, y + .57 * size, z, materials.timber, undefined, 7);
    if (pine) {
      for (let i = 0; i < 3; i++) { const c = mesh(new THREE.ConeGeometry((.77 - i * .16) * size, 1.4 * size, 9), foliage[(i + 3) % foliage.length], x, y + (1.02 + i * .47) * size, z); c.rotation.y = i * .5; }
    } else {
      for (let i = 0; i < 5; i++) {
        const a = i * 2.4, r = i === 0 ? 0 : .35 * size; const crown = mesh(geometries.sphere, foliage[Math.floor(random() * foliage.length)], x + Math.cos(a) * r, y + (1.25 + random() * .42) * size, z + Math.sin(a) * r);
        crown.scale.set((.57 + random() * .18) * size, (.62 + random() * .25) * size, (.57 + random() * .17) * size); crown.rotation.y = random() * 6;
      }
    }
  }
  const treePositions = [[-12,-8.5,1.15,1],[-10.7,-8.7,.9,1],[-13,-6.8,.8,1],[-8.9,-8.8,1,0],[-3.7,-8.8,1,1],[-1.9,-8.7,.9,1],[.1,-9,1.1,1],[9,-8.5,1.15,0],[11,-8,.95,1],[12.6,-7.6,1.1,1],[13.5,-5.6,.85,1],[13.7,5.7,1,0],[12.4,7.6,.95,0],[10.6,8.4,1.1,0],[8.8,8.9,.78,1],[-13.5,5,.8,1],[-12,7.9,1.2,0],[-10.1,8.8,.85,0],[-8.8,8.3,1.05,0],[-2.9,8.8,.78,0],[6.5,8.6,.8,0],[-8.9,3.4,.8,0],[-9,-4.6,.9,1],[-3.9,1.7,.82,0],[8.1,-3.6,.92,0],[8.4,3.6,.8,0],[6.7,4.5,.7,0],[-3.8,-4.5,.8,1]];
  treePositions.forEach(p => tree(...p));
  function fence(points) {
    for (let i = 0; i < points.length - 1; i++) {
      const [x, z] = points[i], [xx, zz] = points[i + 1]; const n = Math.ceil(Math.hypot(xx - x, zz - z) / .47);
      for (let j = 0; j <= n; j++) box(.075, .48, .075, x + (xx - x) * j / n, .53, z + (zz - z) * j / n, trim);
      for (const y of [.5, .69]) beam([x, y, z], [xx, y, zz], .055, trim);
    }
  }
  fence([[-11.0, -3.7], [-11.0, -.65], [-9.9, -.65]]); fence([[4.05, -4.8], [6.9, -4.8], [6.9, -2.65]]);
  fence([[8.0, 8.0], [5.4, 8.0], [4.4, 8.0]]);
  // A cultivated patch makes the quiet bank read as part of the town.
  box(1.45, .04, 2.25, -9.3, .33, 1.9, mat('#8b7951'));
  for (let row = 0; row < 5; row++) for (let col = 0; col < 8; col++) { const plant = mesh(geometries.sphere, foliage[row % 3], -9.85 + row * .27, .44, .99 + col * .26); plant.scale.set(.13, .15, .13); }
  const flowerMats = ['#dfad62', '#d27862', '#e6dca4'].map(c => mat(c));
  for (let i = 0; i < 135; i++) {
    const x = (random() - .5) * 27.8, z = (random() - .5) * 19.5;
    const trackDistance = Math.abs(Math.hypot(Math.max(Math.abs(x) - 6.3, 0), z) - 6.6);
    if (trackDistance < 1.05 || Math.abs(x - riverX(z)) < 1.4 || (Math.abs(z) < 5.2 && x > -4.5 && x < 9)) continue;
    const shrub = mesh(geometries.sphere, foliage[Math.floor(random() * 3)], x, .4, z); shrub.scale.set(.12 + random() * .16, .12, .12 + random() * .15);
    if (i % 3 === 0) for (let j = 0; j < 3; j++) { const f = mesh(geometries.sphere, flowerMats[i % 3], x + (random() - .5) * .25, .51, z + (random() - .5) * .25); f.scale.setScalar(.045); }
  }
  // Tiny passengers, café furniture, crates and bicycles add a model-maker's scale.
  function person(x, z, color, height = .56) { cylinder(.075, .10, height * .5, x, .3 + height * .5, z, mat(color), undefined, 7); const head = mesh(geometries.sphere, mat('#d9b393'), x, .3 + height * .88, z); head.scale.setScalar(.083); for (const offset of [-.045, .045]) box(.048, .17, .06, x + offset, .4, z, iron); }
  person(-2.1, 5.45, '#ae6e44'); person(3.9, 5.7, '#687c92'); person(.1, 1.8, '#b8614c'); person(5.7, 2.1, '#dfc88a');
  for (const [x,z] of [[5.0,1.25],[6.4,1.1]]) { cylinder(.28,.28,.05,x,.78,z,trim,undefined,16); cylinder(.035,.06,.42,x,.55,z,iron); for (const side of [-1,1]) { cylinder(.13,.13,.045,x+side*.40,.57,z,materials.timber); cylinder(.03,.06,.27,x+side*.40,.43,z,iron); } }
  for (let i = 0; i < 3; i++) box(.25,.25,.28,-.7+i*.29,.45,1,wood);
  const signalX = 5.35; cylinder(.04,.07,1.3,signalX,.95,5.6,iron); box(.23,.43,.15,signalX,1.64,5.6,iron); const signalLight = mat('#b7d66e',{emissive:'#89d756',emissiveIntensity:1}); const signal = cylinder(.065,.065,.02,signalX,1.73,5.69,signalLight); signal.rotation.x=Math.PI/2;

  function makeTrainCar(engine = false) {
    const g = new THREE.Group(); scene.add(g);
    const trainGreen = mat(engine ? '#284e43' : '#47715c', { roughness: .48 });
    box(.69,.14,1.46,0,.28,0,iron,g); box(.76,.14,1.45,0,.40,0,red,g);
    for (const z of [-.47,.47]) for (const x of [-.37,.37]) { const wheel = cylinder(.17,.17,.10,x,.2,z,iron,g); wheel.rotation.z=Math.PI/2; const hub = cylinder(.065,.065,.112,x,.2,z,materials.brass,g); hub.rotation.z=Math.PI/2; }
    for (const z of [-.81,.81]) box(.11,.08,.18,0,.29,z,iron,g);
    if (engine) {
      const boiler = cylinder(.28,.28,.8,0,.69,.24,trainGreen,g,16); boiler.rotation.x=Math.PI/2;
      for (const z of [-.02,.49]) { const band = cylinder(.292,.292,.045,0,.69,z,materials.brass,g,16); band.rotation.x=Math.PI/2; }
      const front = cylinder(.235,.235,.05,0,.69,.665,iron,g,16); front.rotation.x=Math.PI/2;
      cylinder(.10,.07,.33,0,1.02,.42,iron,g); cylinder(.15,.11,.08,0,1.21,.42,iron,g);
      cylinder(.13,.13,.16,0,.99,.06,materials.brass,g);
      box(.71,.67,.52,0,.82,-.43,trainGreen,g); box(.79,.11,.65,0,1.2,-.43,iron,g);
      for(const x of [-.36,.36]) box(.015,.29,.29,x,.91,-.42,windows,g);
      box(.46,.3,.03,0,.91,-.702,windows,g);
      const headlamp = cylinder(.10,.10,.06,0,.87,.716,lanterns,g); headlamp.rotation.x=Math.PI/2;
      for(const x of [-.41,.41]) beam([x,.23,-.47],[x,.23,.47],.045,materials.brass,g);
    } else {
      box(.72,.7,1.34,0,.8,0,trainGreen,g); box(.74,.24,1.37,0,.89,0,trim,g);
      for (const x of [-.368,.368]) for(let i=0;i<4;i++) { box(.024,.31,.22,x,.92,-.465+i*.31,windows,g); box(.025,.035,.25,x,1.095,-.465+i*.31,materials.brass,g); }
      for (const z of [-.678,.678]) { box(.4,.38,.025,0,.88,z,trim,g); box(.30,.28,.032,0,.95,z,windows,g); }
      const roofCurve = new THREE.Shape(); roofCurve.moveTo(-.43,0); roofCurve.quadraticCurveTo(-.41,.24,0,.24); roofCurve.quadraticCurveTo(.41,.24,.43,0); roofCurve.closePath();
      mesh(new THREE.ExtrudeGeometry(roofCurve,{depth:1.52,bevelEnabled:false,curveSegments:10}),iron,0,1.16,-.76,g);
    }
    return g;
  }
  const train = [makeTrainCar(true),makeTrainCar(),makeTrainCar()];
  const smokeMaterial = new THREE.MeshStandardMaterial({ color:'#f3eee0', transparent:true, opacity:.46, roughness:1, depthWrite:false });
  const smoke = Array.from({length:7},(_,i)=>{const puff=mesh(geometries.sphere,smokeMaterial.clone(),0,0,0,scene);puff.castShadow=false;puff.userData.phase=i/7;return puff;});
  let smokeTime=0;

  const ambient = new THREE.HemisphereLight('#fff5dd', '#7b8964', 2.2); scene.add(ambient);
  const sun = new THREE.DirectionalLight('#ffdfa3', 3.6); sun.position.set(-14,24,8); sun.castShadow=true; sun.shadow.mapSize.set(2048,2048); sun.shadow.camera.left=-23; sun.shadow.camera.right=23; sun.shadow.camera.top=23; sun.shadow.camera.bottom=-23; sun.shadow.camera.near=.5; sun.shadow.camera.far=70; sun.shadow.normalBias=.045; sun.shadow.bias=-.0003; sun.shadow.radius=3; scene.add(sun);
  const fill = new THREE.DirectionalLight('#cbdde7', .7); fill.position.set(12,10,-15); scene.add(fill);
  let nightAmount=0, nightTarget=0;
  const daySky = new THREE.Color('#fff5dd'), nightSky = new THREE.Color('#aec9ef'), daySun = new THREE.Color('#ffdfa3'), nightSun = new THREE.Color('#afc9ff');

  // Batch static scenery by material, preserving distinct dynamic cars and lights.
  staticGroup.updateMatrixWorld(true);
  const batches = new Map(); const originalMeshes=[];
  staticGroup.traverse(obj=>{if(!obj.isMesh || !obj.geometry.attributes.normal || Array.isArray(obj.material))return;const key=obj.material.uuid; if(!batches.has(key))batches.set(key,{material:obj.material,geos:[]});const geo=obj.geometry.clone();geo.applyMatrix4(obj.matrixWorld);geo.deleteAttribute('uv');if(geo.index){const flat=geo.toNonIndexed();geo.dispose();batches.get(key).geos.push(flat);}else batches.get(key).geos.push(geo);originalMeshes.push(obj);});
  // Textured meshes retain their UVs and stay separate.
  for(const [key,batch] of batches){if(batch.material.map){batch.geos.forEach(g=>g.dispose());batches.delete(key);}}
  originalMeshes.forEach(obj=>{if(batches.has(obj.material.uuid))obj.removeFromParent();});
  for(const batch of batches.values()){const geo=mergeGeometries(batch.geos,false); if(geo){const obj=new THREE.Mesh(geo,batch.material);obj.castShadow=true;obj.receiveShadow=true;staticGroup.add(obj);} batch.geos.forEach(g=>g.dispose());}

  function resize(){const w=container.clientWidth,h=container.clientHeight;const aspect=w/h;const vertical=aspect<1?38/aspect:29;camera.left=-vertical*aspect/2;camera.right=vertical*aspect/2;camera.top=vertical/2;camera.bottom=-vertical/2;camera.updateProjectionMatrix();renderer.setSize(w,h);}
  function resetCamera(){controls.enableDamping=false;controls.update();camera.position.set(25,24,31);controls.target.set(0,-.85,0);camera.zoom=1;camera.updateProjectionMatrix();controls.update();controls.enableDamping=true;}
  resetCamera();resize();
  const observer=new ResizeObserver(resize);observer.observe(container);
  return {
    resetCamera,
    setNight(value){nightTarget=value?1:0;},
    update(sim,delta){
      sim.cars.forEach((p,i)=>{train[i].position.set(p.x,.53,p.z);train[i].rotation.y=Math.atan2(p.tx,p.tz);});
      const moving=sim.running&&sim.dwell===0;
      if(moving)smokeTime+=delta;
      const engine=sim.cars[0];
      smoke.forEach((puff,i)=>{const phase=(smokeTime*.45+i/7)%1; puff.position.set(engine.x+engine.tx*(.42-phase*1.6),1.84+phase*1.5,engine.z+engine.tz*(.42-phase*1.6));puff.scale.setScalar(.10+phase*.25);puff.material.opacity=(1-phase)*.40;});
      nightAmount+=(nightTarget-nightAmount)*Math.min(1,delta*3);
      ambient.color.copy(daySky).lerp(nightSky,nightAmount);ambient.intensity=2.2-nightAmount*1.15;
      sun.color.copy(daySun).lerp(nightSun,nightAmount);sun.intensity=3.6-nightAmount*2.7;
      fill.intensity=.7+nightAmount*.25;
      windows.emissiveIntensity=nightAmount*1.9;lanterns.emissiveIntensity=.25+nightAmount*3;
      lights.forEach(light=>light.intensity=nightAmount*4.5);
      renderer.toneMappingExposure=1.3-nightAmount*.12;
      controls.update();renderer.render(scene,camera);
    },
    dispose(){observer.disconnect();controls.dispose();renderer.dispose();}
  };
}
