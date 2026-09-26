import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { CASE_COLORS, KEYCAP_THEMES, type Configuration } from '../config';
import { KEY_LAYOUT, type KeyDefinition, type KeyRole } from './layout';

function roundedPath<T extends THREE.Path>(path: T, width: number, height: number, radius: number, x = 0, y = 0): T {
  const left = x - width / 2;
  const right = x + width / 2;
  const bottom = y - height / 2;
  const top = y + height / 2;
  path.moveTo(left + radius, bottom);
  path.lineTo(right - radius, bottom);
  path.quadraticCurveTo(right, bottom, right, bottom + radius);
  path.lineTo(right, top - radius);
  path.quadraticCurveTo(right, top, right - radius, top);
  path.lineTo(left + radius, top);
  path.quadraticCurveTo(left, top, left, top - radius);
  path.lineTo(left, bottom + radius);
  path.quadraticCurveTo(left, bottom, left + radius, bottom);
  return path;
}

function extrudeHorizontal(shape: THREE.Shape, depth: number, bevel = 0.015) {
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth, bevelEnabled: true, bevelSegments: 2,
    steps: 1, bevelSize: bevel, bevelThickness: bevel, curveSegments: 8,
  });
  geometry.rotateX(-Math.PI / 2);
  return geometry;
}

function makeLegend(key: KeyDefinition) {
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(key.width * 192);
  canvas.height = 192;
  const context = canvas.getContext('2d')!;
  context.fillStyle = '#ffffff';
  context.strokeStyle = '#ffffff';
  context.textBaseline = 'middle';
  if (key.code.startsWith('Arrow')) {
    context.save();
    context.translate(canvas.width / 2, 92);
    const angles: Record<string, number> = { up: 0, right: Math.PI / 2, down: Math.PI, left: -Math.PI / 2 };
    context.rotate(angles[key.label]);
    context.lineWidth = 5;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.beginPath();
    context.moveTo(0, 21);
    context.lineTo(0, -21);
    context.moveTo(-17, -4);
    context.lineTo(0, -21);
    context.lineTo(17, -4);
    context.stroke();
    context.restore();
  } else if (key.code === 'Space') {
    context.font = '500 25px Arial, sans-serif';
    context.textAlign = 'center';
    context.fillText('f o r m a', canvas.width / 2, 116);
  } else {
    context.font = `500 ${key.label.length === 1 ? 61 : 34}px Arial, sans-serif`;
    context.fillText(key.label, 28, key.label.length === 1 ? 72 : 73);
    if (key.code === 'Enter') {
      context.lineWidth = 3.5;
      context.beginPath();
      context.moveTo(canvas.width - 53, 56);
      context.lineTo(canvas.width - 53, 88);
      context.lineTo(canvas.width - 97, 88);
      context.lineTo(canvas.width - 86, 78);
      context.moveTo(canvas.width - 97, 88);
      context.lineTo(canvas.width - 86, 98);
      context.stroke();
    }
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

function makeCircuitTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1536;
  canvas.height = 512;
  const context = canvas.getContext('2d')!;
  context.fillStyle = '#29483f';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.lineWidth = 1.4;
  context.strokeStyle = '#567a5d';
  KEY_LAYOUT.forEach((key, index) => {
    const x = (key.x + 8) / 16 * canvas.width;
    const y = (key.z + 2.55) / 5.1 * canvas.height;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 20, y + 20);
    context.lineTo(x + 20, y + 31 + (index % 4) * 4);
    context.lineTo(Math.max(24, x - 70), y + 31 + (index % 4) * 4);
    context.stroke();
    context.fillStyle = '#c1a264';
    for (const offset of [-12, 12]) {
      context.beginPath();
      context.arc(x + offset, y, 4, 0, Math.PI * 2);
      context.fill();
    }
    context.strokeStyle = '#79927b';
    context.strokeRect(x - 23, y - 18, 46, 35);
    context.strokeStyle = '#567a5d';
  });
  context.fillStyle = '#d5d8b8';
  context.font = '16px monospace';
  context.fillText('FORMA LAB / F68-R1', 550, 492);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

export interface KeyboardModel {
  root: THREE.Group;
  hits: THREE.Mesh[];
  setPalette: (config: Configuration) => void;
  setKey: (code: string, pressed: boolean) => void;
  pulseKey: (code: string, now: number) => void;
  releaseKeys: () => void;
  update: (delta: number, now: number, exploded: boolean, reducedMotion: boolean) => boolean;
}

export function createKeyboard(config: Configuration): KeyboardModel {
  const root = new THREE.Group();
  root.name = 'Forma 68';
  root.rotation.x = THREE.MathUtils.degToRad(6);
  const shell = new THREE.Group();
  const plate = new THREE.Group();
  const caps = new THREE.Group();
  shell.name = '01 - Aluminum enclosure';
  plate.name = '02 - Switch plate';
  caps.name = '03 - PBT keycaps';
  root.add(shell, plate, caps);

  const geometryCache = new Map<string, THREE.BufferGeometry>();
  const roundedBox = (width: number, height: number, depth: number, radius = 0.06) => {
    const cacheKey = `${width}/${height}/${depth}/${radius}`;
    if (!geometryCache.has(cacheKey)) {
      geometryCache.set(cacheKey, new RoundedBoxGeometry(width, height, depth, 3, radius));
    }
    return geometryCache.get(cacheKey)!;
  };
  const box = (
    parent: THREE.Group, width: number, height: number, depth: number,
    material: THREE.Material, x: number, y: number, z: number, radius = 0.06,
  ) => {
    const mesh = new THREE.Mesh(roundedBox(width, height, depth, radius), material);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  };

  const caseMaterial = new THREE.MeshStandardMaterial({ color: '#d8d7d0', roughness: 0.43, metalness: 0.48 });
  const edgeMaterial = new THREE.MeshStandardMaterial({ color: '#b1b2ab', roughness: 0.4, metalness: 0.6 });
  const rubberMaterial = new THREE.MeshStandardMaterial({ color: '#343733', roughness: 0.95 });
  const plateMaterial = new THREE.MeshStandardMaterial({ color: '#b4b6ab', metalness: 0.65, roughness: 0.38 });
  const screwMaterial = new THREE.MeshStandardMaterial({ color: '#797b71', metalness: 0.85, roughness: 0.3 });
  const slotMaterial = new THREE.MeshStandardMaterial({ color: '#1d2323', roughness: 0.65 });
  const stemMaterial = new THREE.MeshStandardMaterial({ color: '#be7656', roughness: 0.5 });
  const switchMaterial = new THREE.MeshStandardMaterial({ color: '#c9c9b9', roughness: 0.36, metalness: 0.1 });

  box(shell, 17.04, 0.18, 6.14, edgeMaterial, 0, -0.36, 0, 0.085);
  box(shell, 17.02, 0.22, 6.12, caseMaterial, 0, -0.22, 0, 0.105);
  const rimShape = roundedPath(new THREE.Shape(), 17.02, 6.12, 0.27);
  rimShape.holes.push(roundedPath(new THREE.Path(), 16.32, 5.42, 0.14));
  const rim = new THREE.Mesh(extrudeHorizontal(rimShape, 0.48, 0.045), caseMaterial);
  rim.position.y = -0.14;
  rim.castShadow = true;
  rim.receiveShadow = true;
  shell.add(rim);

  box(shell, 16.1, 0.07, 5.2, rubberMaterial, 0, -0.065, 0, 0.025);
  const pcbMaterial = new THREE.MeshStandardMaterial({ color: '#365245', roughness: 0.66, metalness: 0.18 });
  box(shell, 16.1, 0.055, 5.2, pcbMaterial, 0, 0.015, 0, 0.023);
  const circuit = new THREE.Mesh(
    new THREE.PlaneGeometry(16.05, 5.15),
    new THREE.MeshStandardMaterial({ map: makeCircuitTexture(), roughness: 0.7, metalness: 0.15 }),
  );
  circuit.rotation.x = -Math.PI / 2;
  circuit.position.y = 0.047;
  shell.add(circuit);

  for (const x of [-6.5, 6.5]) {
    for (const z of [-2.4, 2.4]) {
      box(shell, 1.5, z < 0 ? 0.6 : 0.13, 0.55, rubberMaterial, x, z < 0 ? -0.705 : -0.45, z, 0.065);
    }
  }

  box(shell, 0.71, 0.23, 0.055, edgeMaterial, -5.9, 0.06, -3.08, 0.085);
  box(shell, 0.57, 0.145, 0.065, slotMaterial, -5.9, 0.06, -3.105, 0.055);
  box(shell, 0.37, 0.035, 0.075, plateMaterial, -5.9, 0.06, -3.11, 0.012);

  const badgeCanvas = document.createElement('canvas');
  badgeCanvas.width = 512;
  badgeCanvas.height = 80;
  const badgeContext = badgeCanvas.getContext('2d')!;
  badgeContext.fillStyle = '#ffffff';
  badgeContext.font = '500 40px Arial, sans-serif';
  badgeContext.fillText('f o r m a  /  6 8', 10, 53);
  const badgeTexture = new THREE.CanvasTexture(badgeCanvas);
  badgeTexture.colorSpace = THREE.SRGBColorSpace;
  const badgeMaterial = new THREE.MeshBasicMaterial({ map: badgeTexture, transparent: true, color: '#55564f', opacity: 0.75, depthWrite: false });
  const badge = new THREE.Mesh(new THREE.PlaneGeometry(2.05, 0.32), badgeMaterial);
  badge.position.set(6.53, 0.085, 3.108);
  shell.add(badge);

  const ledMaterial = new THREE.MeshStandardMaterial({ color: '#e6a778', emissive: '#cb672d', emissiveIntensity: 0.45 });
  box(shell, 0.32, 0.018, 0.035, ledMaterial, 7.61, 0.39, -2.84, 0.007);

  const plateShape = roundedPath(new THREE.Shape(), 16.24, 5.31, 0.12);
  KEY_LAYOUT.forEach((key) => {
    plateShape.holes.push(roundedPath(new THREE.Path(), 0.57, 0.57, 0.035, key.x, -key.z));
  });
  const mountingPlate = new THREE.Mesh(extrudeHorizontal(plateShape, 0.1, 0.01), plateMaterial);
  mountingPlate.position.y = 0.335;
  mountingPlate.castShadow = true;
  mountingPlate.receiveShadow = true;
  plate.add(mountingPlate);

  const screwGeometry = new THREE.CylinderGeometry(0.055, 0.055, 0.033, 12);
  const bossGeometry = new THREE.CylinderGeometry(0.105, 0.105, 0.26, 16);
  for (const x of [-7.91, 0, 7.91]) {
    for (const z of [-2.56, 2.56]) {
      const screw = new THREE.Mesh(screwGeometry, screwMaterial);
      screw.position.set(x, 0.456, z);
      plate.add(screw);
      box(plate, 0.064, 0.004, 0.013, slotMaterial, x, 0.475, z, 0.002);
      const boss = new THREE.Mesh(bossGeometry, edgeMaterial);
      boss.position.set(x, 0.095, z);
      shell.add(boss);
    }
  }

  const capMaterials: Record<KeyRole, THREE.MeshStandardMaterial> = {
    alpha: new THREE.MeshStandardMaterial({ color: '#e8e5dc', roughness: 0.69, metalness: 0 }),
    modifier: new THREE.MeshStandardMaterial({ color: '#b9bbb2', roughness: 0.69, metalness: 0 }),
    accent: new THREE.MeshStandardMaterial({ color: '#d66539', roughness: 0.65, metalness: 0 }),
  };
  const legendColors: Record<KeyRole, THREE.Color> = {
    alpha: new THREE.Color('#42463f'), modifier: new THREE.Color('#42463f'), accent: new THREE.Color('#fff5e8'),
  };
  const hits: THREE.Mesh[] = [];
  const keys = new Map<string, { group: THREE.Group; down: boolean; pulseUntil: number; travel: number }>();
  const capGeometries = new Map<number, THREE.BufferGeometry>();
  const switchBodies = new THREE.InstancedMesh(roundedBox(0.52, 0.25, 0.52, 0.025), switchMaterial, KEY_LAYOUT.length);
  const switchStems = new THREE.InstancedMesh(roundedBox(0.18, 0.15, 0.17, 0.015), stemMaterial, KEY_LAYOUT.length);
  for (const instances of [switchBodies, switchStems]) {
    instances.castShadow = true;
    instances.receiveShadow = true;
    plate.add(instances);
  }
  const instanceMatrix = new THREE.Matrix4();

  KEY_LAYOUT.forEach((key, index) => {
    switchBodies.setMatrixAt(index, instanceMatrix.makeTranslation(key.x, 0.565, key.z));
    switchStems.setMatrixAt(index, instanceMatrix.makeTranslation(key.x, 0.748, key.z));
    if (key.width >= 2) {
      for (const offset of [-key.width / 2 + 0.45, key.width / 2 - 0.45]) {
        box(plate, 0.18, 0.19, 0.26, rubberMaterial, key.x + offset, 0.56, key.z, 0.018);
      }
      box(plate, key.width - 0.6, 0.035, 0.035, screwMaterial, key.x, 0.51, key.z + 0.13, 0.01);
    }

    if (!capGeometries.has(key.width)) {
      const geometry = new RoundedBoxGeometry(key.width - 0.09, 0.56, 0.91, 4, 0.075);
      const positions = geometry.attributes.position;
      for (let index = 0; index < positions.count; index++) {
        const y = positions.getY(index);
        const progress = (y + 0.28) / 0.56;
        positions.setX(index, positions.getX(index) * (1 - 0.105 * progress));
        positions.setZ(index, positions.getZ(index) * (1 - 0.13 * progress));
      }
      positions.needsUpdate = true;
      geometry.computeVertexNormals();
      capGeometries.set(key.width, geometry);
    }

    const group = new THREE.Group();
    group.position.set(key.x, 0.874, key.z);
    group.name = key.code;
    const cap = new THREE.Mesh(capGeometries.get(key.width)!, capMaterials[key.role]);
    cap.castShadow = true;
    cap.receiveShadow = true;
    cap.userData.code = key.code;
    cap.userData.label = key.label;
    group.add(cap);
    hits.push(cap);
    const legendMaterial = new THREE.MeshBasicMaterial({
      map: makeLegend(key), transparent: true, depthWrite: false,
      polygonOffset: true, polygonOffsetFactor: -1,
    });
    legendMaterial.color = legendColors[key.role];
    const legend = new THREE.Mesh(new THREE.PlaneGeometry(key.width - 0.23, 0.72), legendMaterial);
    legend.rotation.x = -Math.PI / 2;
    legend.position.y = 0.282;
    group.add(legend);
    if (key.code === 'KeyF' || key.code === 'KeyJ') {
      box(group, 0.2, 0.014, 0.035, capMaterials[key.role], 0, 0.286, 0.23, 0.006);
    }
    caps.add(group);
    keys.set(key.code, { group, down: false, pulseUntil: 0, travel: 0 });
  });
  switchBodies.instanceMatrix.needsUpdate = true;
  switchStems.instanceMatrix.needsUpdate = true;

  const targets = new Map<THREE.Color, THREE.Color>();
  const setPalette = (next: Configuration) => {
    const enclosure = CASE_COLORS.find((item) => item.id === next.caseColor)!;
    const theme = KEYCAP_THEMES.find((item) => item.id === next.keycapTheme)!;
    targets.set(caseMaterial.color, new THREE.Color(enclosure.color));
    targets.set(edgeMaterial.color, new THREE.Color(enclosure.color).multiplyScalar(0.7));
    targets.set(badgeMaterial.color, new THREE.Color(enclosure.ink));
    for (const role of ['alpha', 'modifier', 'accent'] as const) {
      targets.set(capMaterials[role].color, new THREE.Color(theme[role]));
      targets.set(legendColors[role], new THREE.Color(role === 'accent' ? theme.accentInk : theme.ink));
    }
  };
  setPalette(config);
  targets.forEach((target, color) => color.copy(target));
  let separation = 0;

  return {
    root, hits, setPalette,
    setKey: (code, down) => { const key = keys.get(code); if (key) key.down = down; },
    pulseKey: (code, now) => { const key = keys.get(code); if (key) key.pulseUntil = now + 0.15; },
    releaseKeys: () => { keys.forEach((key) => { key.down = false; key.pulseUntil = 0; }); },
    update: (delta, now, exploded, reducedMotion) => {
      const destination = exploded ? 1 : 0;
      const previousSeparation = separation;
      // All layer positions derive from one reversible scalar, never from queued tweens.
      separation = reducedMotion ? destination : THREE.MathUtils.damp(separation, destination, 6, delta);
      if (Math.abs(separation - destination) < 0.0005) separation = destination;
      let moved = previousSeparation !== separation;
      caps.position.y = separation * 3.5;
      plate.position.y = separation * 1.65;
      shell.position.y = -separation * 0.2;
      root.position.y = -separation * 1.35;
      root.scale.setScalar(1 - separation * 0.13);
      const colorSpeed = reducedMotion ? 1 : 1 - Math.exp(-9 * delta);
      targets.forEach((target, color) => color.lerp(target, colorSpeed));
      keys.forEach((key) => {
        const target = key.down || key.pulseUntil > now ? 0.15 : 0;
        const previousTravel = key.travel;
        key.travel = THREE.MathUtils.damp(key.travel, target, target ? 42 : 25, delta);
        if (Math.abs(key.travel - target) < 0.00005) key.travel = target;
        if (previousTravel !== key.travel) moved = true;
        key.group.position.y = 0.874 - key.travel;
      });
      return moved;
    },
  };
}