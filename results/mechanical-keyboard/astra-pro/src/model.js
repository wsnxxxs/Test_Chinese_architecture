import * as THREE from 'three';
import { KEY_LAYOUT, UNIT } from './layout.js';
import { SHELLS, THEMES } from './config.js';

const CASE_WIDTH = 17.75;
const CASE_DEPTH = 6.35;
const ROW_HEIGHT = [0.10, 0.065, 0.025, 0, 0.025];

/** A clockwise rounded rectangle, shared by trays, plate and machined details. */
function roundedRect(width, height, radius) {
  const x = -width / 2, y = -height / 2;
  const s = new THREE.Shape();
  s.moveTo(x + radius, y);
  s.lineTo(x + width - radius, y);
  s.quadraticCurveTo(x + width, y, x + width, y + radius);
  s.lineTo(x + width, y + height - radius);
  s.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  s.lineTo(x + radius, y + height);
  s.quadraticCurveTo(x, y + height, x, y + height - radius);
  s.lineTo(x, y + radius);
  s.quadraticCurveTo(x, y, x + radius, y);
  return s;
}

function extrudedHorizontal(shape, thickness, bevel = 0.02) {
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: thickness, steps: 1, bevelEnabled: bevel > 0,
    bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, curveSegments: 8,
  });
  geometry.rotateX(-Math.PI / 2);
  return geometry;
}

function slab(width, height, depth, radius, material) {
  const geometry = extrudedHorizontal(roundedRect(width, depth, radius), height, Math.min(0.045, height * .2));
  geometry.translate(0, -height / 2, 0);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function ringPoints(width, depth, radius, segments = 8) {
  const points = [];
  for (let corner = 0; corner < 4; corner++) {
    const angle = corner * Math.PI / 2;
    const cx = (corner === 0 || corner === 3 ? 1 : -1) * (width / 2 - radius);
    const cz = (corner < 2 ? 1 : -1) * (depth / 2 - radius);
    for (let j = 0; j <= segments; j++) {
      const a = angle + j / segments * Math.PI / 2;
      points.push([cx + Math.cos(a) * radius, cz + Math.sin(a) * radius]);
    }
  }
  return points;
}

/** Rounded, tapered walls and a gently dished top, not a stack of cuboids. */
function sculptedKeycap(width) {
  const depth = .975;
  const rings = [
    [width - .055, depth - .015, .000, .10],
    [width, depth, .065, .11],
    [width - .025, depth - .025, .175, .11],
    [width - .19, depth - .17, .417, .125],
    [width - .255, depth - .235, .485, .125],
    [width - .355, depth - .335, .485, .115],
    [Math.max(.2, (width - .355) * .53), .27, .449, .09],
  ];
  const positions = [], indices = [];
  const count = 36;
  for (const [w, d, y, r] of rings) {
    for (const [x, z] of ringPoints(w, d, Math.min(r, w / 3, d / 3))) positions.push(x, y, z);
  }
  for (let r = 0; r < rings.length - 1; r++) {
    for (let i = 0; i < count; i++) {
      const next = (i + 1) % count, a = r * count + i, b = r * count + next;
      const c = (r + 1) * count + i, d = (r + 1) * count + next;
      indices.push(a, c, b, b, c, d);
    }
  }
  const centerTop = positions.length / 3;
  positions.push(0, .439, 0);
  for (let i = 0; i < count; i++) {
    indices.push((rings.length - 1) * count + i, centerTop, (rings.length - 1) * count + (i + 1) % count);
  }
  const centerBottom = positions.length / 3;
  positions.push(0, .025, 0);
  for (let i = 0; i < count; i++) indices.push(i, (i + 1) % count, centerBottom);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

/** One shared glyph atlas, not 68 independent high-resolution canvas textures. */
function createLegendAtlas() {
  const cell = 192, columns = 8, rows = Math.ceil(KEY_LAYOUT.length / columns);
  const canvas = document.createElement('canvas');
  canvas.width = cell * columns; canvas.height = cell * rows;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D is unavailable for key legends.');
  ctx.fillStyle = '#ffffff';
  ctx.textBaseline = 'middle';
  KEY_LAYOUT.forEach((key, index) => {
    const x = (index % columns) * cell, y = Math.floor(index / columns) * cell;
    const small = key.label.length > 1;
    ctx.textAlign = key.code === 'Space' ? 'center' : 'left';
    ctx.font = `${small ? 500 : 500} ${key.code === 'Space' ? 25 : small ? 37 : 68}px Arial, sans-serif`;
    ctx.fillText(key.label, x + (key.code === 'Space' ? 96 : 26), y + (key.secondary ? 124 : 86));
    if (key.secondary) {
      ctx.font = '400 34px Arial, sans-serif';
      ctx.fillText(key.secondary, x + 27, y + 46);
    }
    if (key.code === 'KeyF' || key.code === 'KeyJ') {
      ctx.fillRect(x + 25, y + 151, 39, 5);
    }
  });
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return { texture, columns, rows };
}

function legendGeometry(index, width, atlas) {
  const geometry = new THREE.PlaneGeometry(width, .78);
  const uv = geometry.attributes.uv;
  const col = index % atlas.columns, row = Math.floor(index / atlas.columns);
  for (let i = 0; i < uv.count; i++) {
    uv.setXY(i, (col + uv.getX(i)) / atlas.columns, 1 - (row + 1 - uv.getY(i)) / atlas.rows);
  }
  return geometry;
}

function marking(text, width, height, color = '#d7dec9') {
  const canvas = document.createElement('canvas');
  canvas.width = 768; canvas.height = 96;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = color; ctx.font = '500 44px Arial, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(text, 384, 48);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false, toneMapped: false });
  return new THREE.Mesh(new THREE.PlaneGeometry(width, height), material);
}

export function createKeyboardModel(config) {
  const root = new THREE.Group();
  root.name = 'FORM68';
  root.rotation.x = THREE.MathUtils.degToRad(6);
  const base = new THREE.Group(), plate = new THREE.Group(), keycaps = new THREE.Group();
  base.name = 'base'; plate.name = 'plate'; keycaps.name = 'keycaps';
  root.add(base, plate, keycaps);

  const shellMaterial = new THREE.MeshStandardMaterial({ color: SHELLS[config.shell].color, metalness: .38, roughness: .56 });
  const lipMaterial = new THREE.MeshStandardMaterial({ color: SHELLS[config.shell].color, metalness: .50, roughness: .4 });
  const dark = new THREE.MeshStandardMaterial({ color: '#29382c', roughness: .78, metalness: .08 });
  const rubber = new THREE.MeshStandardMaterial({ color: '#34382f', roughness: .95 });
  const metal = new THREE.MeshStandardMaterial({ color: '#c0c8c1', metalness: .72, roughness: .38 });
  const plateMaterial = new THREE.MeshStandardMaterial({ color: '#a8b4a9', metalness: .62, roughness: .48 });
  const pcbMaterial = new THREE.MeshStandardMaterial({ color: '#455846', metalness: .28, roughness: .75 });
  const switchMaterial = new THREE.MeshStandardMaterial({ color: '#c4c9b6', roughness: .55, metalness: .10 });
  const stemMaterial = new THREE.MeshStandardMaterial({ color: '#b6a382', roughness: .60 });

  const floor = slab(CASE_WIDTH, .42, CASE_DEPTH, .25, shellMaterial);
  // A real wedge: after the six-degree product tilt, its underside is horizontal.
  const floorPositions = floor.geometry.attributes.position;
  for (let i = 0; i < floorPositions.count; i++) {
    const y = floorPositions.getY(i);
    const bottomWeight = THREE.MathUtils.clamp((.255 - y) / .51, 0, 1);
    floorPositions.setY(i, y + floorPositions.getZ(i) * Math.tan(root.rotation.x) * bottomWeight);
  }
  floor.geometry.computeVertexNormals();
  floor.position.y = -.21;
  base.add(floor);
  // The outer rim is a true open tray; the PCB remains visible in exploded mode.
  const rimShape = roundedRect(CASE_WIDTH - .06, CASE_DEPTH - .06, .24);
  rimShape.holes.push(new THREE.Path(roundedRect(CASE_WIDTH - .72, CASE_DEPTH - .63, .17).getPoints(12)));
  const rim = new THREE.Mesh(extrudedHorizontal(rimShape, .51, .045), shellMaterial);
  rim.position.y = -.035; rim.castShadow = true; rim.receiveShadow = true; base.add(rim);

  const seamShape = roundedRect(CASE_WIDTH + .025, CASE_DEPTH + .025, .26);
  seamShape.holes.push(new THREE.Path(roundedRect(CASE_WIDTH - .16, CASE_DEPTH - .16, .18).getPoints(12)));
  const seam = new THREE.Mesh(extrudedHorizontal(seamShape, .03, .009), lipMaterial);
  seam.position.y = -.09; base.add(seam);
  const pcb = slab(16.88, .075, 5.58, .13, pcbMaterial);
  pcb.position.y = .083; base.add(pcb);

  // Subtle copper routes and switch pads inside the bottom tray.
  const tracePoints = [];
  const traceMaterial = new THREE.LineBasicMaterial({ color: '#9aab82', transparent: true, opacity: .38 });
  for (const key of KEY_LAYOUT) {
    tracePoints.push(key.x - .18, .129, key.z - .2, key.x + .17, .129, key.z - .2);
    tracePoints.push(key.x + .17, .129, key.z - .2, key.x + .17, .129, key.z + .22);
    tracePoints.push(key.x + .17, .129, key.z + .22, key.x + .39, .129, key.z + .22);
  }
  const traces = new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(tracePoints, 3)), traceMaterial);
  base.add(traces);
  const padGeometry = new THREE.CylinderGeometry(.045, .045, .012, 10);
  const pads = new THREE.InstancedMesh(padGeometry, metal, KEY_LAYOUT.length * 2);
  const matrix = new THREE.Matrix4();
  KEY_LAYOUT.forEach((key, i) => {
    pads.setMatrixAt(i * 2, matrix.makeTranslation(key.x - .14, .136, key.z));
    pads.setMatrixAt(i * 2 + 1, matrix.makeTranslation(key.x + .14, .136, key.z));
  });
  base.add(pads);

  const plateShape = roundedRect(17.02, 5.68, .14);
  for (const key of KEY_LAYOUT) {
    const hole = new THREE.Path();
    const x = key.x, y = -key.z, h = .32;
    hole.moveTo(x - h, y - h); hole.lineTo(x - h, y + h); hole.lineTo(x + h, y + h); hole.lineTo(x + h, y - h); hole.closePath();
    plateShape.holes.push(hole);
  }
  const supportPlate = new THREE.Mesh(extrudedHorizontal(plateShape, .105, .008), plateMaterial);
  supportPlate.position.y = .435;
  supportPlate.castShadow = true; supportPlate.receiveShadow = true; plate.add(supportPlate);

  const housingGeometry = new THREE.BoxGeometry(.615, .16, .615);
  const stemGeometry = new THREE.BoxGeometry(.30, .16, .12);
  const housings = new THREE.InstancedMesh(housingGeometry, switchMaterial, KEY_LAYOUT.length);
  const stems = new THREE.InstancedMesh(stemGeometry, stemMaterial, KEY_LAYOUT.length * 2);
  housings.castShadow = true; housings.receiveShadow = true; stems.castShadow = true;
  const dummy = new THREE.Object3D();
  KEY_LAYOUT.forEach((key, i) => {
    housings.setMatrixAt(i, matrix.makeTranslation(key.x, .596 + ROW_HEIGHT[key.row], key.z));
    dummy.position.set(key.x, .744 + ROW_HEIGHT[key.row], key.z);
    dummy.rotation.y = 0; dummy.updateMatrix(); stems.setMatrixAt(i * 2, dummy.matrix);
    dummy.rotation.y = Math.PI / 2; dummy.updateMatrix(); stems.setMatrixAt(i * 2 + 1, dummy.matrix);
    if (key.width >= 2) {
      const length = key.width * UNIT - 1.0;
      const stabilizer = new THREE.Mesh(new THREE.CylinderGeometry(.025, .025, length, 8), metal);
      stabilizer.rotation.z = Math.PI / 2; stabilizer.position.set(key.x, .643, key.z + .16);
      plate.add(stabilizer);
    }
  });
  plate.add(housings, stems);

  for (const x of [-8.5, 8.5]) for (const z of [-2.77, 2.77]) {
    const screw = new THREE.Mesh(new THREE.CylinderGeometry(.09, .09, .045, 20), metal);
    screw.position.set(x, .49, z); base.add(screw);
    const groove = new THREE.Mesh(new THREE.BoxGeometry(.095, .007, .014), dark);
    groove.position.set(x, .516, z); base.add(groove);
  }
  for (const x of [-7.4, 7.4]) for (const z of [-2.2, 2.2]) {
    const foot = slab(1.03, .11, .40, .12, rubber);
    foot.position.set(x, -.50 + z * Math.tan(root.rotation.x), z); base.add(foot);
  }
  for (const x of [-7, -3, 3, 7]) for (const z of [-2.70, 2.70]) {
    const gasket = new THREE.Mesh(new THREE.BoxGeometry(.82, .11, .10), rubber);
    gasket.position.set(x, .45, z); plate.add(gasket);
  }

  const port = new THREE.Mesh(new THREE.BoxGeometry(.86, .24, .07), dark);
  port.position.set(-6.5, .15, -3.21); base.add(port);
  const portRim = new THREE.Mesh(new THREE.BoxGeometry(.64, .115, .08), metal);
  portRim.position.set(-6.5, .15, -3.24); base.add(portRim);
  const portInner = new THREE.Mesh(new THREE.BoxGeometry(.51, .065, .085), dark);
  portInner.position.set(-6.5, .15, -3.245); base.add(portInner);
  const badge = marking('F O R M   /   6 8', 2.65, .22);
  badge.position.set(5.8, .12, 3.204); base.add(badge);
  const topMark = marking('F O R M   S T U D I O', 1.62, .17, '#d9e0cd');
  topMark.rotation.x = -Math.PI / 2; topMark.position.set(6.58, .536, -2.934); base.add(topMark);
  const led = new THREE.Mesh(new THREE.BoxGeometry(.25, .025, .07), new THREE.MeshStandardMaterial({ color: '#d6e9ab', emissive: '#aecb77', emissiveIntensity: .45, roughness: .55 }));
  led.position.set(-7.9, .535, -2.95); base.add(led);
  const ledDash = new THREE.Mesh(new THREE.BoxGeometry(.36, .017, .052), dark);
  ledDash.position.set(-7.32, .53, -2.95); base.add(ledDash);

  const atlas = createLegendAtlas();
  const capMaterials = {}, legendMaterials = {}, colorTargets = new Map();
  for (const role of ['alpha', 'mod', 'accent']) {
    capMaterials[role] = new THREE.MeshStandardMaterial({ color: THEMES[config.theme][role], roughness: .64, metalness: .025 });
    legendMaterials[role] = new THREE.MeshBasicMaterial({
      map: atlas.texture, color: role === 'accent' ? THEMES[config.theme].accentLegend : THEMES[config.theme].legend,
      transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, toneMapped: false,
    });
  }
  const geometryCache = new Map();
  const keyMap = new Map();
  const interactiveMeshes = [];
  KEY_LAYOUT.forEach((key, index) => {
    const capWidth = key.width * UNIT - .085;
    if (!geometryCache.has(key.width)) geometryCache.set(key.width, sculptedKeycap(capWidth));
    const group = new THREE.Group();
    const baseY = .706 + ROW_HEIGHT[key.row];
    group.position.set(key.x, baseY, key.z);
    group.name = key.code;
    const mesh = new THREE.Mesh(geometryCache.get(key.width), capMaterials[key.role]);
    mesh.castShadow = true; mesh.receiveShadow = true;
    mesh.userData.keyCode = key.code;
    group.add(mesh);
    const legendWidth = key.code === 'Space' ? 2.15 : key.width > 1.4 ? 1.10 : .78;
    const legend = new THREE.Mesh(legendGeometry(index, legendWidth, atlas), legendMaterials[key.role]);
    legend.rotation.x = -Math.PI / 2;
    legend.position.set(key.code === 'Space' ? 0 : key.width > 1.4 ? -capWidth / 2 + legendWidth / 2 + .1 : 0, .492, -.015);
    group.add(legend);
    keycaps.add(group); interactiveMeshes.push(mesh);
    keyMap.set(key.code, { ...key, group, mesh, baseY, depression: 0, hover: 0, sources: new Set(), holdUntil: 0 });
  });

  function setColors(next, immediate = false) {
    const shell = SHELLS[next.shell], theme = THEMES[next.theme];
    const targets = [
      [shellMaterial, shell.color], [lipMaterial, shell.color],
      ...['alpha', 'mod', 'accent'].flatMap(role => [
        [capMaterials[role], theme[role]],
        [legendMaterials[role], role === 'accent' ? theme.accentLegend : theme.legend],
      ]),
    ];
    for (const [material, color] of targets) {
      const target = new THREE.Color(color);
      colorTargets.set(material, target);
      if (immediate) material.color.copy(target);
    }
  }
  setColors(config, true);

  function updateColors(dt, immediate = false) {
    let moving = false;
    for (const [material, target] of colorTargets) {
      const difference = Math.abs(material.color.r - target.r) + Math.abs(material.color.g - target.g) + Math.abs(material.color.b - target.b);
      if (difference > .0003) {
        material.color.lerp(target, immediate ? 1 : 1 - Math.exp(-12 * dt));
        moving = true;
      } else if (!material.color.equals(target)) material.color.copy(target);
    }
    return moving;
  }

  function dispose() {
    const geometries = new Set(), materials = new Set(), textures = new Set();
    root.traverse(object => {
      if (object.geometry) geometries.add(object.geometry);
      if (object.material) {
        const list = Array.isArray(object.material) ? object.material : [object.material];
        for (const material of list) {
          materials.add(material);
          for (const value of Object.values(material)) if (value?.isTexture) textures.add(value);
        }
      }
    });
    for (const geometry of geometries) geometry.dispose();
    for (const material of materials) material.dispose();
    for (const texture of textures) texture.dispose();
  }

  return { root, base, plate, keycaps, keyMap, interactiveMeshes, shellMaterial, capMaterials, setColors, updateColors, dispose };
}
