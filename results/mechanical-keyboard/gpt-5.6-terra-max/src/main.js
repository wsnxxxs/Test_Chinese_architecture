import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const STORAGE_KEY = 'aeris-65-showcase-config-v1';

const SHELLS = {
  obsidian: {
    name: '曜石黑',
    body: '#202933',
    trim: '#53616d',
    plate: '#344652',
    accent: '#9de9ff',
    switch: '#15222d',
  },
  alloy: {
    name: '合金银',
    body: '#aeb7bd',
    trim: '#e0e7e8',
    plate: '#6e7b85',
    accent: '#ffc171',
    switch: '#28333a',
  },
  ember: {
    name: '熔岩红',
    body: '#8e4438',
    trim: '#d77a61',
    plate: '#5d3837',
    accent: '#ffd298',
    switch: '#311d20',
  },
};

const THEMES = {
  cloud: {
    name: '云雾浅色',
    top: '#e0e7e8',
    side: '#a9b6bc',
    legend: '#142630',
  },
  midnight: {
    name: '午夜深色',
    top: '#2a3b49',
    side: '#13212c',
    legend: '#e4f1f4',
  },
  orchid: {
    name: '兰花点缀',
    top: '#9b719f',
    side: '#603d66',
    legend: '#fff0c8',
  },
};

const DEFAULT_CONFIG = {
  shell: 'obsidian',
  theme: 'cloud',
  name: '我的 AERIS 65',
};

function readSavedConfiguration() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || !SHELLS[saved.shell] || !THEMES[saved.theme]) return null;
    return {
      shell: saved.shell,
      theme: saved.theme,
      name: typeof saved.name === 'string' ? saved.name.slice(0, 28) : DEFAULT_CONFIG.name,
    };
  } catch {
    return null;
  }
}

const restoredConfig = readSavedConfiguration();
const state = {
  ...(restoredConfig || DEFAULT_CONFIG),
  exploded: false,
  saved: Boolean(restoredConfig),
};

const dom = {
  canvas: document.querySelector('#keyboardCanvas'),
  stage: document.querySelector('.product-stage'),
  shellChoices: document.querySelector('#shellChoices'),
  themeChoices: document.querySelector('#themeChoices'),
  shellValue: document.querySelector('#shellValue'),
  themeValue: document.querySelector('#themeValue'),
  setupName: document.querySelector('#setupName'),
  summaryShell: document.querySelector('#summaryShell'),
  summaryTheme: document.querySelector('#summaryTheme'),
  summaryName: document.querySelector('#summaryName'),
  saveIndicator: document.querySelector('#saveIndicator'),
  explodeButton: document.querySelector('#explodeButton'),
  explodeLabel: document.querySelector('#explodeButton span:last-child'),
  saveButton: document.querySelector('#saveButton'),
  restoreButton: document.querySelector('#restoreButton'),
  assemblyState: document.querySelector('#assemblyState'),
  announcer: document.querySelector('#announcer'),
};

function announce(message) {
  dom.announcer.textContent = message;
}

function roundedBox(width, height, depth, radius = 0.08) {
  return new RoundedBoxGeometry(width, height, depth, 4, radius);
}

const renderer = new THREE.WebGLRenderer({
  canvas: dom.canvas,
  antialias: true,
  alpha: true,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000, 0);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
const initialCameraPosition = new THREE.Vector3(14.2, 10.6, 21.8);
const initialTarget = new THREE.Vector3(0, 0.15, 0);
camera.position.copy(initialCameraPosition);

const controls = new OrbitControls(camera, dom.canvas);
controls.target.copy(initialTarget);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.enablePan = false;
controls.minDistance = 15;
controls.maxDistance = 38;
controls.minPolarAngle = 0.48;
controls.maxPolarAngle = 1.42;
controls.saveState();

const hemisphere = new THREE.HemisphereLight(0xddebf4, 0x10161d, 2.25);
scene.add(hemisphere);

const keyLight = new THREE.DirectionalLight(0xe5f8ff, 3.2);
keyLight.position.set(7, 12, 9);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(1024, 1024);
keyLight.shadow.camera.left = -13;
keyLight.shadow.camera.right = 13;
keyLight.shadow.camera.top = 13;
keyLight.shadow.camera.bottom = -13;
scene.add(keyLight);

const rimLight = new THREE.PointLight(0x9de9ff, 22, 30, 2);
rimLight.position.set(-8, 5, -9);
scene.add(rimLight);

const warmFill = new THREE.PointLight(0xffc984, 10, 20, 2);
warmFill.position.set(7, 3, 8);
scene.add(warmFill);

const floor = new THREE.Mesh(
  new THREE.CircleGeometry(17, 64),
  new THREE.ShadowMaterial({ color: 0x000000, opacity: 0.26 }),
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -0.92;
floor.receiveShadow = true;
scene.add(floor);

const dustGeometry = new THREE.BufferGeometry();
const dustPositions = new Float32Array(96 * 3);
for (let index = 0; index < dustPositions.length; index += 3) {
  dustPositions[index] = (Math.random() - 0.5) * 27;
  dustPositions[index + 1] = Math.random() * 11 - 2.4;
  dustPositions[index + 2] = (Math.random() - 0.5) * 19;
}
dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
const dust = new THREE.Points(
  dustGeometry,
  new THREE.PointsMaterial({ color: 0xb8e7f5, size: 0.036, transparent: true, opacity: 0.32 }),
);
scene.add(dust);

const materials = {
  caseBody: new THREE.MeshPhysicalMaterial({
    color: SHELLS[state.shell].body,
    metalness: 0.72,
    roughness: 0.29,
    clearcoat: 0.25,
    clearcoatRoughness: 0.45,
  }),
  caseTrim: new THREE.MeshStandardMaterial({
    color: SHELLS[state.shell].trim,
    metalness: 0.8,
    roughness: 0.34,
  }),
  plate: new THREE.MeshStandardMaterial({
    color: SHELLS[state.shell].plate,
    metalness: 0.82,
    roughness: 0.4,
  }),
  switch: new THREE.MeshStandardMaterial({
    color: SHELLS[state.shell].switch,
    metalness: 0.25,
    roughness: 0.36,
  }),
  stem: new THREE.MeshStandardMaterial({
    color: SHELLS[state.shell].accent,
    emissive: SHELLS[state.shell].accent,
    emissiveIntensity: 0.38,
    metalness: 0.2,
    roughness: 0.25,
  }),
  accent: new THREE.MeshStandardMaterial({
    color: SHELLS[state.shell].accent,
    emissive: SHELLS[state.shell].accent,
    emissiveIntensity: 0.8,
    metalness: 0.34,
    roughness: 0.25,
  }),
  keyTop: new THREE.MeshStandardMaterial({
    color: THEMES[state.theme].top,
    metalness: 0.05,
    roughness: 0.39,
  }),
  keySide: new THREE.MeshStandardMaterial({
    color: THEMES[state.theme].side,
    metalness: 0.06,
    roughness: 0.48,
  }),
};

const keyboard = new THREE.Group();
keyboard.rotation.x = -0.075;
scene.add(keyboard);

const caseLayer = new THREE.Group();
const plateLayer = new THREE.Group();
const keycapLayer = new THREE.Group();
keyboard.add(caseLayer, plateLayer, keycapLayer);

const layers = {
  case: { group: caseLayer, assembled: { y: -0.3, z: 0 }, exploded: { y: -0.43, z: 0 } },
  plate: { group: plateLayer, assembled: { y: 0.03, z: 0 }, exploded: { y: 0.72, z: -0.06 } },
  caps: { group: keycapLayer, assembled: { y: 0.26, z: 0 }, exploded: { y: 1.72, z: 0.1 } },
};

Object.values(layers).forEach((layer) => {
  layer.group.position.set(0, layer.assembled.y, layer.assembled.z);
});

const caseBase = new THREE.Mesh(roundedBox(15.36, 0.74, 6.05, 0.24), materials.caseBody);
caseBase.position.y = 0;
caseBase.castShadow = true;
caseBase.receiveShadow = true;
caseLayer.add(caseBase);

const caseTop = new THREE.Mesh(roundedBox(14.98, 0.2, 5.66, 0.17), materials.caseTrim);
caseTop.position.y = 0.38;
caseTop.castShadow = true;
caseTop.receiveShadow = true;
caseLayer.add(caseTop);

const underCut = new THREE.Mesh(roundedBox(14.5, 0.11, 5.25, 0.06), materials.switch);
underCut.position.y = -0.39;
underCut.castShadow = true;
caseLayer.add(underCut);

const accentRail = new THREE.Mesh(roundedBox(12.2, 0.045, 0.095, 0.03), materials.accent);
accentRail.position.set(-0.8, 0.495, -2.67);
accentRail.castShadow = true;
caseLayer.add(accentRail);

const dial = new THREE.Mesh(new THREE.CylinderGeometry(0.29, 0.31, 0.18, 28), materials.caseTrim);
dial.position.set(6.4, 0.52, -2.2);
dial.castShadow = true;
caseLayer.add(dial);

const dialMark = new THREE.Mesh(roundedBox(0.035, 0.035, 0.28, 0.01), materials.accent);
dialMark.position.set(6.4, 0.63, -2.2);
caseLayer.add(dialMark);

for (let ledIndex = 0; ledIndex < 3; ledIndex += 1) {
  const led = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 12), materials.accent);
  led.position.set(5.22 + ledIndex * 0.19, 0.53, -2.23);
  caseLayer.add(led);
}

const plate = new THREE.Mesh(roundedBox(14.68, 0.16, 5.28, 0.1), materials.plate);
plate.castShadow = true;
plate.receiveShadow = true;
plateLayer.add(plate);

const plateInset = new THREE.Mesh(
  roundedBox(14.28, 0.045, 4.88, 0.06),
  new THREE.MeshStandardMaterial({ color: 0x111a20, metalness: 0.4, roughness: 0.5 }),
);
plateInset.position.y = 0.095;
plateLayer.add(plateInset);

const KEY_UNIT = 0.88;
const KEY_DEPTH = 0.82;
const ROW_GAP = 0.12;
const TOTAL_UNITS = 16;

const keyboardLayout = [
  [
    { label: 'ESC' }, { label: '1' }, { label: '2' }, { label: '3' }, { label: '4' }, { label: '5' },
    { label: '6' }, { label: '7' }, { label: '8' }, { label: '9' }, { label: '0' }, { label: '−' },
    { label: '=' }, { label: 'BACK', width: 2 }, { label: 'DEL' },
  ],
  [
    { label: 'TAB', width: 1.5 }, { label: 'Q', interactive: 'Q' }, { label: 'W', interactive: 'W' },
    { label: 'E', interactive: 'E' }, { label: 'R', interactive: 'R' }, { label: 'T', interactive: 'T' },
    { label: 'Y', interactive: 'Y' }, { label: 'U', interactive: 'U' }, { label: 'I', interactive: 'I' },
    { label: 'O', interactive: 'O' }, { label: 'P', interactive: 'P' }, { label: '[' }, { label: ']' },
    { label: '\\', width: 1.5 }, { label: 'HOME' },
  ],
  [
    { label: 'CAPS', width: 1.75 }, { label: 'A', interactive: 'A' }, { label: 'S', interactive: 'S' },
    { label: 'D', interactive: 'D' }, { label: 'F', interactive: 'F' }, { label: 'G', interactive: 'G' },
    { label: 'H', interactive: 'H' }, { label: 'J', interactive: 'J' }, { label: 'K', interactive: 'K' },
    { label: 'L', interactive: 'L' }, { label: ';' }, { label: "'" }, { label: 'RETURN', width: 2.25 }, { label: 'PG↑' },
  ],
  [
    { label: 'SHIFT', width: 2.25 }, { label: 'Z', interactive: 'Z' }, { label: 'X', interactive: 'X' },
    { label: 'C', interactive: 'C' }, { label: 'V', interactive: 'V' }, { label: 'B', interactive: 'B' },
    { label: 'N', interactive: 'N' }, { label: 'M', interactive: 'M' }, { label: ',' }, { label: '.' },
    { label: '/' }, { label: 'SHIFT', width: 1.75 }, { label: '↑' }, { label: 'END' },
  ],
  [
    { label: 'CTRL', width: 1.25 }, { label: 'META', width: 1.25 }, { label: 'ALT', width: 1.25 },
    { label: 'SPACE', width: 6.25, interactive: 'Space' }, { label: 'FN' }, { label: 'MENU' }, { label: 'CTRL' },
    { label: '←' }, { label: '↓' }, { label: '→' },
  ],
];

const entriesById = new Map();
const interactionKeys = new Map();
const pickableKeys = [];
const legendRecords = [];
let keySerial = 0;

function paintLegend(record, color) {
  const { canvas, texture, label } = record;
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = color;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  const fontSize = label.length > 4 ? 32 : label.length > 2 ? 43 : 60;
  context.font = `700 ${fontSize}px Inter, Arial, sans-serif`;
  context.fillText(label, canvas.width / 2, canvas.height / 2 + 2);
  texture.needsUpdate = true;
}

function makeLegend(label, width) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 96;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false });
  const geometry = new THREE.PlaneGeometry(Math.min(Math.max(width - 0.22, 0.36), 1.22), 0.29);
  geometry.rotateX(-Math.PI / 2);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(width > 2.2 ? -width * 0.23 : 0, 0.396, 0);
  mesh.renderOrder = 2;
  const record = { canvas, texture, label };
  paintLegend(record, THEMES[state.theme].legend);
  legendRecords.push(record);
  return mesh;
}

function makeKey(descriptor, x, z) {
  const widthUnits = descriptor.width || 1;
  const width = widthUnits * KEY_UNIT - 0.095;
  const keyId = `key-${keySerial}`;
  keySerial += 1;

  const pivot = new THREE.Group();
  pivot.position.set(x, 0, z);
  pivot.name = descriptor.label;
  keycapLayer.add(pivot);

  const side = new THREE.Mesh(roundedBox(width, 0.25, KEY_DEPTH - 0.075, 0.09), materials.keySide);
  side.position.y = 0.14;
  side.castShadow = true;
  side.receiveShadow = true;
  side.userData.keyId = keyId;
  pivot.add(side);

  const top = new THREE.Mesh(roundedBox(Math.max(width - 0.11, 0.25), 0.19, KEY_DEPTH - 0.17, 0.08), materials.keyTop);
  top.position.y = 0.32;
  top.castShadow = true;
  top.receiveShadow = true;
  top.userData.keyId = keyId;
  pivot.add(top);

  const legend = makeLegend(descriptor.label, width);
  pivot.add(legend);

  const switchHousing = new THREE.Mesh(
    roundedBox(Math.min(width - 0.18, 0.7), 0.17, 0.54, 0.06),
    materials.switch,
  );
  switchHousing.position.set(x, 0.17, z);
  switchHousing.castShadow = true;
  plateLayer.add(switchHousing);

  const stem = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.1, 0.21), materials.stem);
  stem.position.set(x, 0.3, z);
  stem.castShadow = true;
  plateLayer.add(stem);

  const entry = { id: keyId, pivot, pressed: false, depth: 0, releaseAt: 0 };
  entriesById.set(keyId, entry);
  if (descriptor.interactive) interactionKeys.set(descriptor.interactive, entry);
  pickableKeys.push(top, side);
}

keyboardLayout.forEach((row, rowIndex) => {
  let usedUnits = 0;
  const z = (rowIndex - (keyboardLayout.length - 1) / 2) * (KEY_DEPTH + ROW_GAP);
  row.forEach((descriptor) => {
    const units = descriptor.width || 1;
    const centerX = -((TOTAL_UNITS * KEY_UNIT) / 2) + (usedUnits + units / 2) * KEY_UNIT;
    makeKey(descriptor, centerX, z);
    usedUnits += units;
  });
});

const caseGlow = new THREE.PointLight(SHELLS[state.shell].accent, 9, 10, 2);
caseGlow.position.set(-4.4, 1.4, -2.8);
keyboard.add(caseGlow);

function resizeRenderer() {
  const { width, height } = dom.stage.getBoundingClientRect();
  if (!width || !height) return;
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

new ResizeObserver(resizeRenderer).observe(dom.stage);
resizeRenderer();

function applyAppearance() {
  const shell = SHELLS[state.shell];
  const theme = THEMES[state.theme];

  materials.caseBody.color.set(shell.body);
  materials.caseTrim.color.set(shell.trim);
  materials.plate.color.set(shell.plate);
  materials.switch.color.set(shell.switch);
  materials.stem.color.set(shell.accent);
  materials.stem.emissive.set(shell.accent);
  materials.accent.color.set(shell.accent);
  materials.accent.emissive.set(shell.accent);
  materials.keyTop.color.set(theme.top);
  materials.keySide.color.set(theme.side);
  rimLight.color.set(shell.accent);
  caseGlow.color.set(shell.accent);

  legendRecords.forEach((record) => paintLegend(record, theme.legend));
  document.documentElement.style.setProperty('--accent', shell.accent);
  document.documentElement.style.setProperty('--accent-rgb', new THREE.Color(shell.accent).toArray().map((value) => Math.round(value * 255)).join(', '));
  document.documentElement.style.setProperty('--shell', shell.body);
  document.documentElement.style.setProperty('--keycap', theme.top);
  document.documentElement.style.setProperty('--key-legend', theme.legend);
}

function displayName() {
  return state.name.trim() || '未命名配置';
}

function renderConfiguration() {
  const shell = SHELLS[state.shell];
  const theme = THEMES[state.theme];

  dom.shellChoices.querySelectorAll('[data-shell]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.shell === state.shell));
  });
  dom.themeChoices.querySelectorAll('[data-theme]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.theme === state.theme));
  });

  dom.shellValue.textContent = shell.name;
  dom.themeValue.textContent = theme.name;
  dom.summaryShell.textContent = shell.name;
  dom.summaryTheme.textContent = theme.name;
  dom.summaryName.textContent = displayName();
  if (dom.setupName.value !== state.name) dom.setupName.value = state.name;
  dom.saveIndicator.textContent = state.saved ? '已保存到本机' : '尚未保存';
  dom.saveIndicator.classList.toggle('is-saved', state.saved);
}

function renderAssemblyState() {
  dom.explodeLabel.textContent = state.exploded ? '组装键盘' : '拆解结构';
  dom.explodeButton.querySelector('.button-symbol').textContent = state.exploded ? '↔' : '↕';
  dom.assemblyState.textContent = state.exploded ? '已拆解 · 键帽 / 定位板 / 底壳' : '已组装 · 3 层结构';
}

function markUnsaved() {
  state.saved = false;
  renderConfiguration();
}

dom.shellChoices.addEventListener('click', (event) => {
  const button = event.target.closest('[data-shell]');
  if (!button || button.dataset.shell === state.shell) return;
  state.shell = button.dataset.shell;
  markUnsaved();
  applyAppearance();
  announce(`外壳已切换为${SHELLS[state.shell].name}。`);
});

dom.themeChoices.addEventListener('click', (event) => {
  const button = event.target.closest('[data-theme]');
  if (!button || button.dataset.theme === state.theme) return;
  state.theme = button.dataset.theme;
  markUnsaved();
  applyAppearance();
  announce(`键帽已切换为${THEMES[state.theme].name}。`);
});

dom.setupName.addEventListener('input', () => {
  state.name = dom.setupName.value.slice(0, 28);
  markUnsaved();
});

dom.explodeButton.addEventListener('click', () => {
  state.exploded = !state.exploded;
  renderAssemblyState();
  announce(state.exploded ? '键盘已开始拆解为三个层级。' : '键盘已开始组装。');
});

dom.saveButton.addEventListener('click', () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ shell: state.shell, theme: state.theme, name: state.name }));
    state.saved = true;
    renderConfiguration();
    announce('配置已保存到此浏览器。');
  } catch {
    announce('无法保存配置：浏览器本地存储不可用。');
  }
});

dom.restoreButton.addEventListener('click', () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // The visual defaults still work if browser storage is unavailable.
  }
  Object.assign(state, DEFAULT_CONFIG, { exploded: false, saved: false });
  applyAppearance();
  renderConfiguration();
  renderAssemblyState();
  announce('已恢复默认配置，并只清除了此页面的保存项。');
});

let targetModelYaw = 0;

function changeZoom(multiplier) {
  const offset = camera.position.clone().sub(controls.target);
  const nextDistance = THREE.MathUtils.clamp(offset.length() * multiplier, controls.minDistance, controls.maxDistance);
  camera.position.copy(controls.target).add(offset.setLength(nextDistance));
  controls.update();
}

document.querySelectorAll('[data-view]').forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.dataset.view;
    if (action === 'rotate-left') targetModelYaw -= Math.PI / 7;
    if (action === 'rotate-right') targetModelYaw += Math.PI / 7;
    if (action === 'zoom-in') changeZoom(0.84);
    if (action === 'zoom-out') changeZoom(1.17);
    if (action === 'reset') {
      controls.reset();
      targetModelYaw = 0;
    }
  });
});

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let activePointer = null;

function keyAtPointer(event) {
  const bounds = dom.canvas.getBoundingClientRect();
  pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
  pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hit = raycaster.intersectObjects(pickableKeys, false)[0];
  return hit ? hit.object.userData.keyId : null;
}

function setKeyPressed(keyId, pressed, releaseDelay = 0) {
  const entry = entriesById.get(keyId);
  if (!entry) return;
  entry.pressed = pressed;
  entry.releaseAt = pressed ? 0 : performance.now() + releaseDelay;
}

function releaseActivePointer(event) {
  if (!activePointer || activePointer.pointerId !== event.pointerId) return;
  if (activePointer.keyId) setKeyPressed(activePointer.keyId, false, 95);
  activePointer = null;
}

dom.canvas.addEventListener('pointerdown', (event) => {
  const keyId = keyAtPointer(event);
  activePointer = { pointerId: event.pointerId, keyId, x: event.clientX, y: event.clientY };
  if (keyId) {
    dom.canvas.setPointerCapture(event.pointerId);
    setKeyPressed(keyId, true);
  }
});

dom.canvas.addEventListener('pointermove', (event) => {
  if (activePointer?.pointerId === event.pointerId) {
    const moved = Math.hypot(event.clientX - activePointer.x, event.clientY - activePointer.y) > 7;
    if (moved && activePointer.keyId) setKeyPressed(activePointer.keyId, false);
    if (moved) activePointer.keyId = null;
    return;
  }
  dom.canvas.style.cursor = keyAtPointer(event) ? 'pointer' : 'grab';
});

dom.canvas.addEventListener('pointerup', releaseActivePointer);
dom.canvas.addEventListener('pointercancel', releaseActivePointer);
dom.canvas.addEventListener('pointerleave', (event) => {
  if (activePointer?.pointerId === event.pointerId) releaseActivePointer(event);
});

function isInteractiveTarget(target) {
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest('input, textarea, select, button, a, [contenteditable="true"]'));
}

function keyboardInteractionKey(event) {
  if (event.code === 'Space') return 'Space';
  if (/^Key[A-Z]$/.test(event.code)) return event.code.slice(3);
  return null;
}

document.addEventListener('keydown', (event) => {
  if (isInteractiveTarget(event.target)) return;
  const key = keyboardInteractionKey(event);
  if (!key || !interactionKeys.has(key)) return;
  event.preventDefault();
  const entry = interactionKeys.get(key);
  setKeyPressed(entry.id, true);
});

document.addEventListener('keyup', (event) => {
  if (isInteractiveTarget(event.target)) return;
  const key = keyboardInteractionKey(event);
  if (!key || !interactionKeys.has(key)) return;
  event.preventDefault();
  const entry = interactionKeys.get(key);
  setKeyPressed(entry.id, false);
});

function animate(time) {
  const delta = Math.min((time - animate.lastTime) / 1000 || 0, 0.05);
  animate.lastTime = time;

  Object.values(layers).forEach((layer) => {
    const target = state.exploded ? layer.exploded : layer.assembled;
    layer.group.position.y = THREE.MathUtils.damp(layer.group.position.y, target.y, 9, delta);
    layer.group.position.z = THREE.MathUtils.damp(layer.group.position.z, target.z, 9, delta);
  });

  keyboard.rotation.y = THREE.MathUtils.damp(keyboard.rotation.y, targetModelYaw, 7, delta);
  dust.rotation.y += delta * 0.015;

  entriesById.forEach((entry) => {
    if (entry.releaseAt && time >= entry.releaseAt) {
      entry.releaseAt = 0;
      entry.pressed = false;
    }
    const targetDepth = entry.pressed ? 0.14 : 0;
    entry.depth = THREE.MathUtils.damp(entry.depth, targetDepth, entry.pressed ? 26 : 17, delta);
    entry.pivot.position.y = -entry.depth;
    entry.pivot.rotation.x = entry.depth * 0.045;
  });

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

applyAppearance();
renderConfiguration();
renderAssemblyState();
requestAnimationFrame(animate);
