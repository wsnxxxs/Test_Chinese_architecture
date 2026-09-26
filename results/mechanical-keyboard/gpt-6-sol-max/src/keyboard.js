import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { CASES, THEMES, KEY_ROWS } from './config.js';

const WIDTH = 16.78;
const DEPTH = 5.78;
const CASE_Y = -0.2;
const PLATE_Y = 0.31;
const CAPS_Y = 0.64;
const EXPANSION = { plate: 1.45, caps: 3.35 };
const HOME_POSITION = new THREE.Vector3(6.8, 15, 20);

function roundedPath(width, depth, radius, Type = THREE.Shape) {
  const path = new Type();
  const x = -width / 2;
  const z = -depth / 2;
  path.moveTo(x + radius, z);
  path.lineTo(x + width - radius, z);
  path.quadraticCurveTo(x + width, z, x + width, z + radius);
  path.lineTo(x + width, z + depth - radius);
  path.quadraticCurveTo(x + width, z + depth, x + width - radius, z + depth);
  path.lineTo(x + radius, z + depth);
  path.quadraticCurveTo(x, z + depth, x, z + depth - radius);
  path.lineTo(x, z + radius);
  path.quadraticCurveTo(x, z, x + radius, z);
  return path;
}

function horizontalExtrusion(shape, height, bevel = 0) {
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: height,
    bevelEnabled: bevel > 0,
    bevelSegments: 2,
    steps: 1,
    bevelSize: bevel,
    bevelThickness: bevel,
    curveSegments: 6,
  });
  geometry.rotateX(-Math.PI / 2);
  return geometry;
}

// A tapered skirt, rounded shoulders and a shallow dish form one sculpted keycap.
function keycapGeometry(width, height) {
  const rings = [
    { w: width, d: 0.89, y: 0, r: 0.085 },
    { w: width, d: 0.89, y: 0.09, r: 0.095 },
    { w: width - 0.15, d: 0.74, y: height - 0.065, r: 0.105 },
    { w: width - 0.18, d: 0.71, y: height, r: 0.10 },
    { w: (width - 0.18) * 0.64, d: 0.46, y: height - 0.025, r: 0.06 },
  ];
  const points = [];
  const segments = 6;
  for (const ring of rings) {
    const corners = [
      [ring.w / 2 - ring.r, ring.d / 2 - ring.r, 0],
      [-ring.w / 2 + ring.r, ring.d / 2 - ring.r, Math.PI / 2],
      [-ring.w / 2 + ring.r, -ring.d / 2 + ring.r, Math.PI],
      [ring.w / 2 - ring.r, -ring.d / 2 + ring.r, Math.PI * 1.5],
    ];
    for (const [cx, cz, angle] of corners) {
      for (let n = 0; n <= segments; n++) {
        const a = angle + n / segments * Math.PI / 2;
        points.push(cx + ring.r * Math.cos(a), ring.y, cz + ring.r * Math.sin(a));
      }
    }
  }
  const ringSize = 4 * (segments + 1);
  const indices = [];
  for (let r = 0; r < rings.length - 1; r++) {
    for (let i = 0; i < ringSize; i++) {
      const next = (i + 1) % ringSize;
      const a = r * ringSize + i;
      const b = r * ringSize + next;
      const c = (r + 1) * ringSize + i;
      const d = (r + 1) * ringSize + next;
      indices.push(a, c, b, b, c, d);
    }
  }
  const center = points.length / 3;
  points.push(0, height - 0.028, 0);
  const last = (rings.length - 1) * ringSize;
  for (let i = 0; i < ringSize; i++) indices.push(last + i, center, last + (i + 1) % ringSize);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function legendTexture(key) {
  const canvas = document.createElement('canvas');
  canvas.width = Math.ceil(256 * key.width);
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.textBaseline = 'middle';
  if (key.code === 'Space') {
    ctx.font = '400 27px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('l o o m', canvas.width / 2, 166);
    ctx.fillRect(canvas.width / 2 - 22, 192, 44, 2);
  } else if (key.secondary) {
    ctx.font = '500 40px Arial, sans-serif';
    ctx.fillText(key.secondary, 48, 62);
    ctx.font = '600 70px Arial, sans-serif';
    ctx.fillText(key.label, 48, 153);
  } else {
    const simple = key.label.length === 1;
    ctx.font = `${simple ? '600' : '400'} ${simple ? 83 : 34}px Arial, sans-serif`;
    ctx.fillText(key.label, 40, simple ? 91 : 160);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function smallText(text, color = '#e1e3d9') {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.font = '400 46px Arial, sans-serif';
  ctx.fillText(text, 256, 84);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false, side: THREE.DoubleSide });
}

export class KeyboardStudio {
  constructor(container, { onPress, onHover, onLayers } = {}) {
    this.container = container;
    this.onPress = onPress;
    this.onHover = onHover;
    this.onLayers = onLayers;
    this.explosion = 0;
    this.explosionTarget = 0;
    this.experience = false;
    this.held = new Set();
    this.pulses = new Map();
    this.keys = new Map();
    this.hitTargets = [];
    this.colorTargets = new Map();
    this.disposed = false;
    this.pointerStart = null;
    this.activePointers = new Set();
    this.cameraTween = null;
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.domElement.setAttribute('aria-label', 'LOOM 68 三维键盘：拖动旋转，滚轮或双指缩放；开启体验后可点击键帽');
    this.renderer.domElement.setAttribute('role', 'img');
    this.container.append(this.renderer.domElement);
    this.camera = new THREE.OrthographicCamera(-10, 10, 5, -5, 0.1, 100);
    this.camera.position.copy(HOME_POSITION);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 0.7, 0);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.09;
    this.controls.enablePan = false;
    this.controls.minZoom = 0.65;
    this.controls.maxZoom = 1.8;
    this.controls.minPolarAngle = 0.04;
    this.controls.maxPolarAngle = Math.PI * 0.69;
    this.controls.rotateSpeed = 0.65;
    this.controls.zoomSpeed = 0.7;
    this.controls.update();
    this.controls.addEventListener('start', () => { this.cameraTween = null; });
    const environment = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.environmentTarget = pmrem.fromScene(environment, 0.04);
    this.scene.environment = this.environmentTarget.texture;
    this.scene.environmentIntensity = 0.5;
    environment.dispose();
    pmrem.dispose();
    this.setupLights();
    this.buildKeyboard();
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.events = {
      pointerdown: (event) => {
        this.activePointers.add(event.pointerId);
        this.pointerStart = this.activePointers.size === 1 ? { x: event.clientX, y: event.clientY, id: event.pointerId } : null;
      },
      pointerup: (event) => this.handlePointerUp(event),
      pointermove: (event) => this.handlePointerMove(event),
      pointerleave: () => { this.onHover?.(null); },
      pointercancel: (event) => { this.pointerStart = null; this.activePointers.delete(event.pointerId); },
    };
    Object.entries(this.events).forEach(([name, handler]) => this.renderer.domElement.addEventListener(name, handler));
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(container);
    this.resize();
    this.lastTime = performance.now();
    this.renderer.setAnimationLoop((time) => this.animate(time));
  }

  setupLights() {
    this.scene.add(new THREE.HemisphereLight(0xfff8e9, 0x6e7c68, 0.65));
    const keyLight = new THREE.DirectionalLight(0xfffbef, 1.5);
    keyLight.position.set(-6, 12, 8);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(2048, 2048);
    keyLight.shadow.camera.left = -13;
    keyLight.shadow.camera.right = 13;
    keyLight.shadow.camera.top = 9;
    keyLight.shadow.camera.bottom = -9;
    keyLight.shadow.normalBias = 0.035;
    keyLight.shadow.bias = -0.0001;
    keyLight.shadow.radius = 4;
    this.scene.add(keyLight);
    const rim = new THREE.DirectionalLight(0xe4edf4, 0.65);
    rim.position.set(3, 8, -9);
    this.scene.add(rim);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.ShadowMaterial({ opacity: 0.16 }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.44;
    ground.receiveShadow = true;
    this.scene.add(ground);
    const contact = document.createElement('canvas');
    contact.width = 256;
    contact.height = 128;
    const ctx = contact.getContext('2d');
    const gradient = ctx.createRadialGradient(128, 64, 15, 128, 64, 115);
    gradient.addColorStop(0, 'rgba(45,55,36,0.23)');
    gradient.addColorStop(0.55, 'rgba(45,55,36,0.10)');
    gradient.addColorStop(1, 'rgba(45,55,36,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 128);
    const shadow = new THREE.Mesh(new THREE.PlaneGeometry(22, 9), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(contact), transparent: true, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.set(0, -0.435, 0.2);
    this.scene.add(shadow);
  }

  box(width, height, depth, radius, material, parent, position) {
    const mesh = new THREE.Mesh(new RoundedBoxGeometry(width, height, depth, 3, radius), material);
    mesh.position.set(...position);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }

  buildKeyboard() {
    this.keyboard = new THREE.Group();
    this.keyboard.rotation.x = Math.PI / 30;
    this.keyboard.position.y = 0.2;
    this.scene.add(this.keyboard);
    this.caseLayer = new THREE.Group();
    this.plateLayer = new THREE.Group();
    this.capLayer = new THREE.Group();
    this.keyboard.add(this.caseLayer, this.plateLayer, this.capLayer);
    this.plateLayer.position.y = PLATE_Y;
    this.capLayer.position.y = CAPS_Y;

    this.caseMaterial = new THREE.MeshPhysicalMaterial({ color: '#7b8973', metalness: 0.62, roughness: 0.4, clearcoat: 0.18, clearcoatRoughness: 0.4 });
    const edgeMaterial = new THREE.MeshStandardMaterial({ color: '#a5aea0', metalness: 0.75, roughness: 0.35 });
    const darkMaterial = new THREE.MeshStandardMaterial({ color: '#202a25', roughness: 0.7 });
    const pcbMaterial = new THREE.MeshStandardMaterial({ color: '#345245', metalness: 0.2, roughness: 0.75 });
    const foamMaterial = new THREE.MeshStandardMaterial({ color: '#303831', roughness: 1 });
    const plateMaterial = new THREE.MeshStandardMaterial({ color: '#a5afa2', metalness: 0.65, roughness: 0.45, side: THREE.DoubleSide });
    const switchMaterial = new THREE.MeshPhysicalMaterial({ color: '#d3ded2', metalness: 0.08, roughness: 0.3, transparent: true, opacity: 0.82 });
    const stemMaterial = new THREE.MeshStandardMaterial({ color: '#6b9768', roughness: 0.4 });

    this.box(WIDTH - 0.05, 0.17, DEPTH - 0.05, 0.065, this.caseMaterial, this.caseLayer, [0, -0.22, 0]);
    const caseShape = roundedPath(WIDTH, DEPTH, 0.3);
    caseShape.holes.push(roundedPath(16.2, 5.2, 0.16, THREE.Path));
    const caseWall = new THREE.Mesh(horizontalExtrusion(caseShape, 0.59, 0.025), this.caseMaterial);
    caseWall.position.y = CASE_Y;
    caseWall.castShadow = true;
    caseWall.receiveShadow = true;
    this.caseLayer.add(caseWall);
    const rimShape = roundedPath(WIDTH - 0.025, DEPTH - 0.025, 0.29);
    rimShape.holes.push(roundedPath(16.21, 5.21, 0.16, THREE.Path));
    const edge = new THREE.Mesh(horizontalExtrusion(rimShape, 0.02), edgeMaterial);
    edge.position.y = 0.39;
    this.caseLayer.add(edge);
    this.box(15.95, 0.11, 4.99, 0.04, pcbMaterial, this.caseLayer, [0, 0.035, 0]);
    this.box(15.93, 0.08, 4.97, 0.035, foamMaterial, this.caseLayer, [0, 0.155, 0]);

    for (const x of [-6.7, 6.7]) {
      for (const z of [-2.1, 2.1]) this.box(1.05, 0.11, 0.49, 0.045, darkMaterial, this.caseLayer, [x, -0.33, z]);
    }
    // Recessed USB-C port and the small rear power indicator.
    this.box(0.72, 0.23, 0.055, 0.065, darkMaterial, this.caseLayer, [-5.7, 0.03, -DEPTH / 2 - 0.019]);
    this.box(0.48, 0.07, 0.058, 0.023, edgeMaterial, this.caseLayer, [-5.7, 0.03, -DEPTH / 2 - 0.045]);
    const ledMaterial = new THREE.MeshStandardMaterial({ color: '#b4d890', emissive: '#91ad6b', emissiveIntensity: 0.7 });
    this.box(0.19, 0.034, 0.046, 0.015, ledMaterial, this.caseLayer, [6.2, 0.045, DEPTH / 2 + 0.017]);
    const frontLogo = new THREE.Mesh(new THREE.PlaneGeometry(1.05, 0.26), smallText('l o o m'));
    frontLogo.position.set(0, 0.025, DEPTH / 2 + 0.031);
    this.caseLayer.add(frontLogo);
    const underside = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.58), smallText('LOOM 68  /  No. 001', '#b7bdac'));
    underside.rotation.x = Math.PI / 2;
    underside.position.set(0, -0.312, 0);
    this.caseLayer.add(underside);

    const plateShape = roundedPath(16.08, 5.08, 0.13);
    const definitions = [];
    KEY_ROWS.forEach((row, rowIndex) => {
      let cursor = -8;
      row.forEach((key) => {
        const x = cursor + key.width / 2;
        const z = rowIndex - 2;
        const hole = roundedPath(0.57, 0.57, 0.03, THREE.Path);
        // Shape coordinates are reflected in Z by the horizontal extrusion.
        hole.curves.forEach((curve) => {
          for (const point of ['v0', 'v1', 'v2', 'v3']) {
            if (curve[point]) { curve[point].x += x; curve[point].y -= z; }
          }
        });
        plateShape.holes.push(hole);
        definitions.push({ ...key, x, z, rowIndex });
        cursor += key.width;
      });
    });
    const plate = new THREE.Mesh(horizontalExtrusion(plateShape, 0.085), plateMaterial);
    plate.castShadow = true;
    plate.receiveShadow = true;
    this.plateLayer.add(plate);

    this.keyMaterials = {};
    this.legendMaterials = {};
    for (const category of ['alpha', 'modifier', 'accent']) {
      this.keyMaterials[category] = new THREE.MeshPhysicalMaterial({ color: '#efecde', roughness: 0.5, metalness: 0, clearcoat: 0.12, clearcoatRoughness: 0.6 });
      this.legendMaterials[category] = [];
    }
    const geometryCache = new Map();
    const glowGeometry = new RoundedBoxGeometry(0.88, 0.025, 0.88, 2, 0.04);
    const socketGeometry = new RoundedBoxGeometry(0.64, 0.16, 0.64, 2, 0.035);
    const stemGeometry = new THREE.BoxGeometry(0.15, 0.15, 0.37);
    for (const definition of definitions) {
      const { code, width, x, z, rowIndex } = definition;
      const group = new THREE.Group();
      group.position.set(x, 0, z);
      this.capLayer.add(group);
      const category = ['Escape', 'Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(code)
        ? 'accent' : (/^Key|^Digit/.test(code) || ['Minus', 'Equal', 'BracketLeft', 'BracketRight', 'Backslash', 'Semicolon', 'Quote', 'Comma', 'Period', 'Slash', 'Space'].includes(code) ? 'alpha' : 'modifier');
      const height = 0.46 + (4 - rowIndex) * 0.012;
      const cacheKey = `${width}-${height}`;
      if (!geometryCache.has(cacheKey)) geometryCache.set(cacheKey, keycapGeometry(width - 0.105, height));
      const cap = new THREE.Mesh(geometryCache.get(cacheKey), this.keyMaterials[category]);
      cap.castShadow = true;
      cap.receiveShadow = true;
      cap.userData.code = code;
      group.add(cap);
      this.hitTargets.push(cap);
      const texture = legendTexture(definition);
      texture.anisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
      const legendMaterial = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false, color: '#46503b', polygonOffset: true, polygonOffsetFactor: -1 });
      this.legendMaterials[category].push(legendMaterial);
      const legend = new THREE.Mesh(new THREE.PlaneGeometry(width - 0.31, 0.68), legendMaterial);
      legend.rotation.x = -Math.PI / 2;
      legend.position.y = height + 0.007;
      group.add(legend);
      const glow = new THREE.Mesh(glowGeometry, new THREE.MeshBasicMaterial({ color: '#c3e193', transparent: true, opacity: 0, depthWrite: false }));
      glow.scale.x = width;
      glow.position.y = 0.01;
      group.add(glow);
      this.keys.set(code, { group, cap, glow, definition, travel: 0 });

      const socket = new THREE.Mesh(socketGeometry, switchMaterial);
      socket.position.set(x, 0.15, z);
      socket.castShadow = true;
      this.plateLayer.add(socket);
      const stem = new THREE.Mesh(stemGeometry, stemMaterial);
      stem.position.set(x, 0.28, z);
      this.plateLayer.add(stem);
      const cross = new THREE.Mesh(stemGeometry, stemMaterial);
      cross.rotation.y = Math.PI / 2;
      cross.position.copy(stem.position);
      this.plateLayer.add(cross);
      if (width >= 1.75) {
        const spread = width >= 6 ? 2.4 : Math.max(0.5, width / 2 - 0.3);
        this.box(spread * 2, 0.035, 0.035, 0.012, edgeMaterial, this.plateLayer, [x, 0.15, z + 0.18]);
        for (const direction of [-1, 1]) this.box(0.15, 0.22, 0.22, 0.025, darkMaterial, this.plateLayer, [x + spread * direction, 0.16, z]);
      }
    }
    const screwGeometry = new THREE.CylinderGeometry(0.052, 0.052, 0.025, 12);
    for (const x of [-8.25, 8.25]) {
      for (const z of [-2.4, 0, 2.4]) {
        const screw = new THREE.Mesh(screwGeometry, darkMaterial);
        screw.position.set(x, 0.414, z);
        this.caseLayer.add(screw);
      }
    }
  }

  configure(config, instant = false) {
    const finish = CASES.find((item) => item.id === config.case);
    const theme = THEMES.find((item) => item.id === config.theme);
    this.colorTargets.set(this.caseMaterial, new THREE.Color(finish.color));
    this.caseMaterial.roughness = finish.roughness;
    for (const category of ['alpha', 'modifier', 'accent']) {
      this.colorTargets.set(this.keyMaterials[category], new THREE.Color(theme[category]));
      for (const material of this.legendMaterials[category]) {
        this.colorTargets.set(material, new THREE.Color(category === 'accent' ? theme.accentLegend : theme.legend));
      }
    }
    if (instant) this.colorTargets.forEach((color, material) => material.color.copy(color));
  }

  setExploded(value) { this.explosionTarget = value ? 1 : 0; }

  setExperience(value) {
    this.experience = value;
    if (!value) { this.releaseAll(); this.onHover?.(null); }
    this.renderer.domElement.style.cursor = value ? 'pointer' : 'grab';
  }

  press(code, pulse = false) {
    if (!this.experience || !this.keys.has(code)) return;
    if (pulse) this.pulses.set(code, performance.now() + 160);
    else this.held.add(code);
    this.onPress?.(this.keys.get(code).definition);
  }

  release(code) { this.held.delete(code); }
  releaseAll() { this.held.clear(); this.pulses.clear(); }

  pick(event) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
    this.raycaster.setFromCamera(this.pointer, this.camera);
    return this.raycaster.intersectObjects(this.hitTargets, false)[0]?.object.userData.code;
  }

  handlePointerUp(event) {
    const start = this.pointerStart;
    this.pointerStart = null;
    this.activePointers.delete(event.pointerId);
    if (this.experience && start && this.activePointers.size === 0 && start.id === event.pointerId && Math.hypot(event.clientX - start.x, event.clientY - start.y) < 7) {
      const code = this.pick(event);
      if (code) this.press(code, true);
    }
  }

  handlePointerMove(event) {
    if (!this.experience || event.pointerType === 'touch' || event.buttons) return;
    const code = this.pick(event);
    this.onHover?.(code ? { key: this.keys.get(code).definition, x: event.clientX, y: event.clientY } : null);
    this.renderer.domElement.style.cursor = code ? 'pointer' : 'grab';
  }

  resize() {
    const { width, height } = this.container.getBoundingClientRect();
    if (!width || !height) return;
    const aspect = width / height;
    this.frustumHeight = Math.max(20.3 / aspect, 8.8);
    this.aspect = aspect;
    this.updateFrustum();
    this.renderer.setSize(width, height);
  }

  updateFrustum() {
    const height = this.frustumHeight * (1 + this.explosion * 0.24);
    this.camera.left = -height * this.aspect / 2;
    this.camera.right = height * this.aspect / 2;
    this.camera.top = height / 2;
    this.camera.bottom = -height / 2;
    this.camera.updateProjectionMatrix();
  }

  zoom(direction) {
    const next = THREE.MathUtils.clamp(this.camera.zoom * (direction > 0 ? 1.15 : 1 / 1.15), 0.65, 1.8);
    this.startCameraTween(this.camera.position, this.controls.target, next);
  }

  resetView(top = false) {
    const target = new THREE.Vector3(0, 0.7 + this.explosion * 0.8, 0);
    const position = top ? new THREE.Vector3(0, 25, 0.015) : HOME_POSITION.clone();
    position.y += this.explosion * 0.8;
    this.startCameraTween(position, target, 1);
  }

  startCameraTween(position, target, zoom) {
    this.cameraTween = {
      start: performance.now(),
      from: this.camera.position.clone(), to: position.clone(),
      targetFrom: this.controls.target.clone(), targetTo: target.clone(),
      zoomFrom: this.camera.zoom, zoomTo: zoom,
    };
  }

  animate(time) {
    if (this.disposed) return;
    const dt = Math.min((time - this.lastTime) / 1000, 0.05);
    this.lastTime = time;
    const previousExpansion = this.explosion;
    this.explosion = THREE.MathUtils.damp(this.explosion, this.explosionTarget, 6.5, dt);
    if (Math.abs(this.explosion - this.explosionTarget) < 0.0001) this.explosion = this.explosionTarget;
    if (previousExpansion !== this.explosion) this.updateFrustum();
    // Every layer is derived from a fixed origin; interrupting never accumulates offsets.
    this.plateLayer.position.y = PLATE_Y + this.explosion * EXPANSION.plate;
    this.capLayer.position.y = CAPS_Y + this.explosion * EXPANSION.caps;
    if (!this.cameraTween) {
      const nextTargetY = 0.7 + this.explosion * 0.8;
      this.camera.position.y += nextTargetY - this.controls.target.y;
      this.controls.target.y = nextTargetY;
    } else {
      const tween = this.cameraTween;
      const progress = Math.min((time - tween.start) / 650, 1);
      const smooth = 1 - (1 - progress) ** 3;
      this.camera.position.lerpVectors(tween.from, tween.to, smooth);
      this.controls.target.lerpVectors(tween.targetFrom, tween.targetTo, smooth);
      this.camera.zoom = THREE.MathUtils.lerp(tween.zoomFrom, tween.zoomTo, smooth);
      this.camera.updateProjectionMatrix();
      if (progress === 1) this.cameraTween = null;
    }
    const blend = 1 - Math.exp(-9 * dt);
    this.colorTargets.forEach((color, material) => material.color.lerp(color, blend));
    for (const [code, item] of this.keys) {
      if (this.pulses.has(code) && time > this.pulses.get(code)) this.pulses.delete(code);
      const pressed = this.held.has(code) || this.pulses.has(code);
      item.travel = THREE.MathUtils.damp(item.travel, pressed ? 1 : 0, pressed ? 30 : 17, dt);
      item.group.position.y = -0.145 * item.travel;
      item.glow.material.opacity = item.travel * 0.85;
    }
    this.controls.update();
    this.keyboard.updateMatrixWorld();
    if (this.explosion > 0.05 && this.onLayers) {
      const anchor = new THREE.Vector3(7.7, 0, 0);
      const layerPoints = [
        CAPS_Y + 0.3 + this.explosion * EXPANSION.caps,
        PLATE_Y + 0.15 + this.explosion * EXPANSION.plate,
        0.02,
      ].map((height) => {
        anchor.set(7.7, height, 0);
        this.keyboard.localToWorld(anchor);
        anchor.project(this.camera);
        return { x: (anchor.x + 1) / 2 * 100, y: (1 - anchor.y) / 2 * 100 };
      });
      this.onLayers(layerPoints);
    }
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.disposed = true;
    this.renderer.setAnimationLoop(null);
    this.resizeObserver.disconnect();
    Object.entries(this.events).forEach(([name, handler]) => this.renderer.domElement.removeEventListener(name, handler));
    this.controls.dispose();
    const geometries = new Set();
    const materials = new Set();
    const textures = new Set();
    this.scene.traverse((object) => {
      if (object.geometry) geometries.add(object.geometry);
      const items = Array.isArray(object.material) ? object.material : [object.material];
      items.filter(Boolean).forEach((material) => { materials.add(material); if (material.map) textures.add(material.map); });
    });
    geometries.forEach((item) => item.dispose());
    materials.forEach((item) => item.dispose());
    textures.forEach((item) => item.dispose());
    this.environmentTarget.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}
