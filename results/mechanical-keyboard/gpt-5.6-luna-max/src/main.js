import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import './styles.css';

const STORAGE_KEY = 'sora-atelier-75-config';
const DEFAULT_CONFIG = { shell: 'obsidian', keycaps: 'glacier' };

const shellThemes = {
  obsidian: {
    name: 'Obsidian',
    label: '黑曜岩',
    color: '#151d2b',
    top: '#263449',
    edge: '#0d121c',
    plate: '#3b4b62',
    detail: '#82f5cf',
    shadow: '#080b12',
  },
  terra: {
    name: 'Terra',
    label: '赤陶棕',
    color: '#3a2528',
    top: '#75434a',
    edge: '#21161b',
    plate: '#b36c58',
    detail: '#ffc078',
    shadow: '#160d12',
  },
  lunar: {
    name: 'Lunar',
    label: '月影银',
    color: '#b9c2c6',
    top: '#e5eaeb',
    edge: '#7e8b92',
    plate: '#eff5f3',
    detail: '#367f86',
    shadow: '#6d777c',
  },
};

const keycapThemes = {
  glacier: {
    name: 'Glacier',
    label: '冰川青',
    key: '#dfe9eb',
    keySide: '#a9bbc1',
    legend: '#14212a',
    accent: '#7df5ca',
    modifier: '#b9ccd0',
  },
  solar: {
    name: 'Solar',
    label: '日冕橙',
    key: '#f1d6b0',
    keySide: '#b98256',
    legend: '#291b1b',
    accent: '#ffaf65',
    modifier: '#d6b68d',
  },
  nocturne: {
    name: 'Nocturne',
    label: '午夜紫',
    key: '#403b5d',
    keySide: '#27243f',
    legend: '#eff0ff',
    accent: '#b9a7ff',
    modifier: '#51496d',
  },
};

const keyRows = [
  [
    { label: 'Esc', w: 1 }, { label: '1', w: 1 }, { label: '2', w: 1 }, { label: '3', w: 1 },
    { label: '4', w: 1 }, { label: '5', w: 1 }, { label: '6', w: 1 }, { label: '7', w: 1 },
    { label: '8', w: 1 }, { label: '9', w: 1 }, { label: '0', w: 1 }, { label: '-', w: 1 },
    { label: '=', w: 1 }, { label: 'Back', w: 2 },
  ],
  [
    { label: 'Tab', w: 1.5 }, { label: 'Q', w: 1 }, { label: 'W', w: 1 }, { label: 'E', w: 1 },
    { label: 'R', w: 1 }, { label: 'T', w: 1 }, { label: 'Y', w: 1 }, { label: 'U', w: 1 },
    { label: 'I', w: 1 }, { label: 'O', w: 1 }, { label: 'P', w: 1 }, { label: '[', w: 1 },
    { label: ']', w: 1 }, { label: '\\', w: 1.5 },
  ],
  [
    { label: 'Caps', w: 1.75 }, { label: 'A', w: 1 }, { label: 'S', w: 1 }, { label: 'D', w: 1 },
    { label: 'F', w: 1 }, { label: 'G', w: 1 }, { label: 'H', w: 1 }, { label: 'J', w: 1 },
    { label: 'K', w: 1 }, { label: 'L', w: 1 }, { label: ';', w: 1 }, { label: "'", w: 1 },
    { label: 'Enter', w: 2.25 },
  ],
  [
    { label: 'Shift', w: 2.25 }, { label: 'Z', w: 1 }, { label: 'X', w: 1 }, { label: 'C', w: 1 },
    { label: 'V', w: 1 }, { label: 'B', w: 1 }, { label: 'N', w: 1 }, { label: 'M', w: 1 },
    { label: ',', w: 1 }, { label: '.', w: 1 }, { label: '/', w: 1 }, { label: 'Shift', w: 2.75 },
  ],
  [
    { label: 'Ctrl', w: 1.25 }, { label: 'Win', w: 1.25 }, { label: 'Alt', w: 1.25 }, { label: 'Space', w: 6.25 },
    { label: 'Alt', w: 1.25 }, { label: 'Fn', w: 1.25 }, { label: '←', w: 1 }, { label: '↓', w: 1 }, { label: '→', w: 1 }, { label: '↑', w: 1 },
  ],
];

const app = document.querySelector('#app');
const stage = document.querySelector('#model-stage');
const threeRoot = document.querySelector('#three-root');
const shellName = document.querySelector('#shell-name');
const keycapName = document.querySelector('#keycap-name');
const summaryText = document.querySelector('#summary-text');
const saveStatus = document.querySelector('#save-status');
const interactionStatus = document.querySelector('#interaction-status');
const assemblyLabel = document.querySelector('#assembly-label');
const explodeLabel = document.querySelector('#explode-label');
const modelAngle = document.querySelector('#model-angle');

let config = readConfig();
let model;
let controls;
let scene;
let camera;
let renderer;
let explodedTarget = 0;
let explodedProgress = 0;
let lastFrame = performance.now();
let saveStatusTimer;

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

const keyMeshes = new Map();
const keyPressTimers = new Map();

initUI();
initThree();
applyConfig(config, false);
if (hasStoredConfig()) {
  saveStatus.textContent = '已恢复';
  saveStatus.classList.add('is-saved');
}
animate();

function readConfig() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && shellThemes[saved.shell] && keycapThemes[saved.keycaps]) {
      return { shell: saved.shell, keycaps: saved.keycaps };
    }
  } catch {
    // Ignore malformed local data and use the default build.
  }
  return { ...DEFAULT_CONFIG };
}

function hasStoredConfig() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Boolean(saved && shellThemes[saved.shell] && keycapThemes[saved.keycaps]);
  } catch {
    return false;
  }
}

function initUI() {
  buildSwatches('shell-options', shellThemes, 'shell');
  buildSwatches('keycap-options', keycapThemes, 'keycaps');

  document.querySelector('#save-config').addEventListener('click', saveConfig);
  document.querySelector('#reset-config').addEventListener('click', resetConfig);
  document.querySelector('#explode-toggle').addEventListener('click', toggleExploded);
  document.querySelector('#rotate-left').addEventListener('click', () => rotateView(-0.32));
  document.querySelector('#rotate-right').addEventListener('click', () => rotateView(0.32));
  document.querySelector('#reset-view').addEventListener('click', resetView);

  window.addEventListener('keydown', handlePhysicalKey);
  window.addEventListener('resize', resizeRenderer);
}

function buildSwatches(elementId, themes, type) {
  const host = document.querySelector(`#${elementId}`);
  Object.entries(themes).forEach(([id, theme]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'swatch';
    button.dataset.value = id;
    button.dataset.type = type;
    button.setAttribute('role', 'radio');
    button.setAttribute('aria-label', `${theme.name} / ${theme.label}`);
    button.innerHTML = `<span class="swatch-paint" style="--swatch-a:${theme.color || theme.key};--swatch-b:${theme.detail || theme.accent}"></span><span class="swatch-name">${theme.name}</span>`;
    button.addEventListener('click', () => {
      config = { ...config, [type]: id };
      applyConfig(config);
      markUnsaved();
    });
    host.appendChild(button);
  });
}

function initThree() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#0b101b');

  camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(8.2, 6.1, 10.6);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.setAttribute('aria-label', 'Sora Atelier 75 三维模型，可拖拽旋转');
  threeRoot.appendChild(renderer.domElement);
  renderer.domElement.addEventListener('pointerdown', handleModelPointer);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.075;
  controls.enablePan = false;
  controls.minDistance = 8.5;
  controls.maxDistance = 18;
  controls.minPolarAngle = 0.6;
  controls.maxPolarAngle = 1.55;
  controls.target.set(0, 0.3, 0);
  controls.addEventListener('start', () => setInteraction('DRAGGING MODEL'));
  controls.addEventListener('end', () => setInteraction('READY TO EXPLORE'));

  scene.add(new THREE.HemisphereLight('#dffefa', '#101725', 2.2));
  const keyLight = new THREE.DirectionalLight('#f3fbff', 4.2);
  keyLight.position.set(-5, 11, 8);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(1024, 1024);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight('#7df5ca', 2.2);
  rimLight.position.set(8, 4, -8);
  scene.add(rimLight);

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(13, 64),
    new THREE.MeshStandardMaterial({ color: '#080c14', roughness: 0.7, metalness: 0.05, transparent: true, opacity: 0.84 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -1.02;
  floor.receiveShadow = true;
  scene.add(floor);

  model = createKeyboardModel();
  scene.add(model.root);
  resizeRenderer();
}

function createKeyboardModel() {
  const root = new THREE.Group();
  root.rotation.x = -0.12;
  root.rotation.z = -0.025;
  root.position.y = 0.08;

  const caseGroup = new THREE.Group();
  caseGroup.name = 'bottom-case';
  const plateGroup = new THREE.Group();
  plateGroup.name = 'plate';
  const keycapGroup = new THREE.Group();
  keycapGroup.name = 'keycaps';
  root.add(caseGroup, plateGroup, keycapGroup);

  const keyboardWidth = 8.7;
  const keyboardDepth = 4.55;
  const baseY = -0.48;

  const caseBody = makeRoundedMesh(keyboardWidth, 0.72, keyboardDepth, 0.23, 0x151d2b, 0.58);
  caseBody.position.set(0, baseY, 0);
  caseBody.castShadow = true;
  caseBody.receiveShadow = true;
  caseBody.userData.base = new THREE.Vector3(0, baseY, 0);
  caseGroup.add(caseBody);

  const caseTop = makeRoundedMesh(keyboardWidth - 0.16, 0.12, keyboardDepth - 0.16, 0.16, 0x263449, 0.34);
  caseTop.position.set(0, -0.08, 0);
  caseTop.userData.base = new THREE.Vector3(0, -0.08, 0);
  caseGroup.add(caseTop);

  const accentRail = makeRoundedMesh(keyboardWidth - 0.32, 0.05, keyboardDepth - 0.32, 0.12, 0x82f5cf, 0.28);
  accentRail.position.set(0, 0.01, 0);
  accentRail.userData.base = new THREE.Vector3(0, 0.01, 0);
  caseGroup.add(accentRail);

  const plate = makeRoundedMesh(keyboardWidth - 0.48, 0.11, keyboardDepth - 0.45, 0.16, 0x3b4b62, 0.72);
  plate.position.set(0, 0.19, 0);
  plate.castShadow = true;
  plate.receiveShadow = true;
  plate.userData.base = new THREE.Vector3(0, 0.19, 0);
  plateGroup.add(plate);

  const innerPlate = makeRoundedMesh(keyboardWidth - 0.7, 0.035, keyboardDepth - 0.67, 0.12, 0x101722, 0.44);
  innerPlate.position.set(0, 0.255, 0);
  innerPlate.userData.base = new THREE.Vector3(0, 0.255, 0);
  plateGroup.add(innerPlate);

  const feet = [];
  for (const x of [-3.55, 3.55]) {
    for (const z of [-1.68, 1.68]) {
      const foot = makeRoundedMesh(0.52, 0.16, 0.36, 0.1, 0x0b1018, 0.54);
      foot.position.set(x, -0.9, z);
      foot.rotation.x = z > 0 ? -0.06 : 0.06;
      foot.userData.base = new THREE.Vector3(x, -0.9, z);
      caseGroup.add(foot);
      feet.push(foot);
    }
  }

  const unit = 0.52;
  const gap = 0.08;
  const rowDepth = 0.58;
  const totalRowsDepth = keyRows.length * rowDepth + (keyRows.length - 1) * gap;
  const keycapBaseY = 0.44;
  const rowOffsets = [0, 0.03, 0.08, 0.14, 0.04];

  keyRows.forEach((row, rowIndex) => {
    const rowWidth = row.reduce((sum, key) => sum + key.w * unit + gap, -gap);
    let x = -rowWidth / 2;
    const z = (rowIndex * (rowDepth + gap)) - totalRowsDepth / 2 + rowDepth / 2;
    row.forEach((key, keyIndex) => {
      const width = key.w * unit + gap * Math.max(0, key.w - 1);
      const capHeight = rowIndex === 4 ? 0.3 : 0.34;
      const capDepth = rowIndex === 4 && key.label === 'Space' ? rowDepth + 0.04 : rowDepth;
      const group = new THREE.Group();
      const mesh = makeRoundedMesh(width, capHeight, capDepth, Math.min(0.075, capHeight * 0.28), 0xdfe9eb, 0.55);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);

      const stem = new THREE.Mesh(
        new THREE.BoxGeometry(Math.min(0.18, width * 0.35), 0.025, Math.min(0.18, capDepth * 0.35)),
        new THREE.MeshStandardMaterial({ color: 0x202a37, roughness: 0.5, metalness: 0.18 }),
      );
      stem.position.y = -capHeight / 2 - 0.012;
      group.add(stem);

      const legend = makeLegendPlane(key.label, width);
      legend.position.set(0, capHeight / 2 + 0.008, 0);
      legend.userData.base = new THREE.Vector3(0, capHeight / 2 + 0.008, 0);
      group.add(legend);

      const position = new THREE.Vector3(x + width / 2, keycapBaseY + rowOffsets[rowIndex], z);
      group.position.copy(position);
      group.userData = {
        label: key.label,
        base: position.clone(),
        press: 0,
        pressTarget: 0,
        rowIndex,
        keyIndex,
        width,
        capHeight,
      };
      keycapGroup.add(group);
      registerKey(group, key.label);
      x += width + gap;
    });
  });

  // A subtle status bar sits inside the front lip and helps the case read as a constructed object.
  const statusBar = makeRoundedMesh(1.2, 0.035, 0.08, 0.025, 0x82f5cf, 0.22);
  statusBar.position.set(0, -0.06, keyboardDepth / 2 - 0.13);
  statusBar.userData.base = new THREE.Vector3(0, -0.06, keyboardDepth / 2 - 0.13);
  caseGroup.add(statusBar);

  return { root, caseGroup, plateGroup, keycapGroup, parts: { caseBody, caseTop, accentRail, plate, innerPlate, statusBar, feet } };
}

function makeRoundedMesh(width, height, depth, radius, color, roughness = 0.5) {
  const geometry = new RoundedBoxGeometry(width, height, depth, 3, radius);
  const material = new THREE.MeshStandardMaterial({ color, roughness, metalness: 0.24 });
  return new THREE.Mesh(geometry, material);
}

function makeLegendPlane(label, keyWidth) {
  const canvas = document.createElement('canvas');
  const scale = 3;
  canvas.width = 200 * scale;
  canvas.height = 100 * scale;
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = '#14212a';
  context.font = `700 ${(label.length > 3 ? 52 : 92) * scale}px Inter, Arial, sans-serif`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(label, canvas.width / 2, canvas.height / 2 + 2);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    side: THREE.DoubleSide,
    toneMapped: false,
  });
  const labelWidth = label.length > 3 ? Math.min(keyWidth * 0.86, 0.72) : Math.min(keyWidth * 0.88, 0.46);
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(labelWidth, labelWidth * 0.5), material);
  plane.rotation.x = -Math.PI / 2;
  plane.renderOrder = 4;
  return plane;
}

function registerKey(group, label) {
  const normalized = label.length === 1 ? label.toUpperCase() : label;
  if (/^[A-Z]$/.test(normalized) || normalized === 'Space') {
    keyMeshes.set(normalized, group);
  }
  group.userData.pointer = new THREE.Vector2();
  group.traverse((child) => {
    if (child.isMesh || child.isSprite) child.userData.keyGroup = group;
  });
  group.userData.interactive = true;
}

function handleModelPointer(event) {
  if (!model || event.button > 0) return;
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const intersections = raycaster.intersectObjects(model.keycapGroup.children, true);
  const hit = intersections.find((intersection) => findKeyGroup(intersection.object));
  const keyGroup = hit ? findKeyGroup(hit.object) : null;
  if (keyGroup) {
    const label = keyGroup.userData.label.length === 1 ? keyGroup.userData.label.toUpperCase() : keyGroup.userData.label;
    pressKey(label);
  }
}

function findKeyGroup(object) {
  let current = object;
  while (current) {
    if (current.userData?.interactive) return current;
    current = current.parent;
  }
  return null;
}

function applyConfig(nextConfig, showStatus = true) {
  config = { ...DEFAULT_CONFIG, ...nextConfig };
  const shell = shellThemes[config.shell];
  const keycaps = keycapThemes[config.keycaps];

  shellName.textContent = shell.name;
  keycapName.textContent = keycaps.name;
  summaryText.textContent = `${shell.name} shell · ${keycaps.name} caps`;
  updateSwatchState('shell-options', config.shell);
  updateSwatchState('keycap-options', config.keycaps);

  if (model) {
    const parts = model.parts;
    setMaterial(parts.caseBody, shell.color, 0.58, 0.26);
    setMaterial(parts.caseTop, shell.top, 0.36, 0.28);
    setMaterial(parts.accentRail, shell.detail, 0.3, 0.32);
    setMaterial(parts.plate, shell.plate, 0.7, 0.54);
    setMaterial(parts.innerPlate, shell.shadow, 0.46, 0.15);
    setMaterial(parts.statusBar, shell.detail, 0.24, 0.22);
    parts.feet.forEach((foot) => setMaterial(foot, shell.edge, 0.54, 0.22));
    model.keycapGroup.children.forEach((group) => {
      const keyMesh = group.children[0];
      const stem = group.children[1];
      const isModifier = group.userData.label.length > 1 && group.userData.label !== 'Space';
      setMaterial(keyMesh, isModifier ? keycaps.modifier : keycaps.key, 0.54, 0.2);
      setMaterial(stem, keycaps.accent, 0.46, 0.12);
      const legend = group.children[2];
      updateLegendSprite(legend, keycaps.legend);
    });
  }
  if (showStatus) setInteraction(`${shell.name.toUpperCase()} / ${keycaps.name.toUpperCase()}`);
}

function setMaterial(mesh, color, roughness, metalness) {
  mesh.material.color.set(color);
  mesh.material.roughness = roughness;
  mesh.material.metalness = metalness;
}

function updateLegendSprite(sprite, color) {
  if (sprite?.material) sprite.material.color.set(color);
}

function updateSwatchState(elementId, value) {
  document.querySelectorAll(`#${elementId} .swatch`).forEach((button) => {
    const selected = button.dataset.value === value;
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-checked', String(selected));
  });
}

function saveConfig() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  saveStatus.textContent = '已保存';
  saveStatus.classList.add('is-saved');
  window.clearTimeout(saveStatusTimer);
  saveStatusTimer = window.setTimeout(() => saveStatus.classList.remove('is-saved'), 1800);
  setInteraction('CONFIGURATION SAVED');
}

function resetConfig() {
  localStorage.removeItem(STORAGE_KEY);
  config = { ...DEFAULT_CONFIG };
  applyConfig(config);
  saveStatus.textContent = '未保存';
  saveStatus.classList.remove('is-saved');
  setInteraction('DEFAULT RESTORED');
}

function markUnsaved() {
  saveStatus.textContent = '未保存';
  saveStatus.classList.remove('is-saved');
}

function toggleExploded() {
  explodedTarget = explodedTarget > 0.5 ? 0 : 1;
  explodeLabel.textContent = explodedTarget > 0.5 ? '组装结构' : '拆解结构';
  assemblyLabel.textContent = explodedTarget > 0.5 ? 'EXPLODED' : 'ASSEMBLED';
  stage.classList.toggle('is-exploded', explodedTarget > 0.5);
  setInteraction(explodedTarget > 0.5 ? 'LAYERS SEPARATING' : 'LAYERS REASSEMBLING');
}

function rotateView(amount) {
  const offset = camera.position.clone().sub(controls.target);
  const rotation = new THREE.Matrix4().makeRotationY(amount);
  offset.applyMatrix4(rotation);
  camera.position.copy(controls.target).add(offset);
  controls.update();
  setInteraction('VIEW ROTATED');
}

function resetView() {
  camera.position.set(8.2, 6.1, 10.6);
  controls.target.set(0, 0.3, 0);
  controls.update();
  model.root.rotation.set(-0.12, 0, -0.025);
  setInteraction('VIEW RESET');
}

function handlePhysicalKey(event) {
  if (isEditableTarget(event.target)) return;
  const key = event.key === ' ' ? 'Space' : event.key.toUpperCase();
  if (keyMeshes.has(key)) {
    event.preventDefault();
    pressKey(key);
  }
}

function isEditableTarget(target) {
  if (!target) return false;
  return target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'].includes(target.tagName);
}

function pressKey(label) {
  const group = keyMeshes.get(label);
  if (!group) return;
  group.userData.pressTarget = 1;
  window.clearTimeout(keyPressTimers.get(label));
  keyPressTimers.set(label, window.setTimeout(() => {
    group.userData.pressTarget = 0;
  }, 105));
  setInteraction(`${label === 'Space' ? 'SPACE' : label} PRESSED`);
}

function setInteraction(text) {
  interactionStatus.textContent = text;
}

function animate(now = performance.now()) {
  requestAnimationFrame(animate);
  const delta = Math.min((now - lastFrame) / 1000, 0.05);
  lastFrame = now;
  const smooth = 1 - Math.pow(0.0001, delta);

  if (model) {
    explodedProgress = THREE.MathUtils.lerp(explodedProgress, explodedTarget, smooth);
    const layerPositions = [
      { group: model.caseGroup, y: explodedProgress * -0.5, z: explodedProgress * 0.02 },
      { group: model.plateGroup, y: explodedProgress * 0.34, z: explodedProgress * 0.08 },
      { group: model.keycapGroup, y: explodedProgress * 1.1, z: explodedProgress * 0.16 },
    ];
    layerPositions.forEach(({ group, y, z }) => {
      group.position.y = THREE.MathUtils.lerp(group.position.y, y, smooth);
      group.position.z = THREE.MathUtils.lerp(group.position.z, z, smooth);
    });
    model.keycapGroup.children.forEach((group) => {
      group.userData.press = THREE.MathUtils.lerp(group.userData.press, group.userData.pressTarget, Math.min(1, delta * 22));
      group.position.y = group.userData.base.y + rowExplosionOffset(group.userData.rowIndex, explodedProgress) - group.userData.press * 0.085;
    });
  }

  controls?.update();
  renderReadout();
  renderer?.render(scene, camera);
}

function rowExplosionOffset(rowIndex, amount) {
  return [0.02, 0.07, 0.12, 0.17, 0.23][rowIndex] * amount;
}

function renderReadout() {
  if (!camera || !model) return;
  const azimuth = Math.atan2(camera.position.x, camera.position.z) * THREE.MathUtils.RAD2DEG;
  const normalized = ((azimuth % 360) + 360) % 360;
  modelAngle.textContent = `${Math.abs(model.root.rotation.x * THREE.MathUtils.RAD2DEG).toFixed(1).padStart(4, '0')}° / ${normalized.toFixed(0).padStart(3, '0')}°`;
}

function resizeRenderer() {
  if (!renderer || !camera) return;
  const rect = threeRoot.getBoundingClientRect();
  const width = Math.max(1, rect.width);
  const height = Math.max(1, rect.height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height, false);
}
