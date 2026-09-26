import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { buildKeyPositions, TOTAL_WIDTH_U } from './layout.js';
import { createKeycapMesh } from './KeycapFactory.js';
import { buildCase, buildPlate, buildPCB } from './CaseBuilder.js';
import { CASE_COLORS, KEYCAP_THEMES } from './themes.js';

const KEY_UNIT = 19.05;
const KEYCAP_BASE_Y = 17; // resting Y for keycap group
const EXPLODE_OFFSETS = {
  keycaps: 45,
  plate: 25,
  pcb: 12,
  case: 0,
};

/**
 * Main scene manager for the 3D keyboard.
 */
export class KeyboardScene {
  constructor(canvas) {
    this.canvas = canvas;
    this.caseColorId = 'obsidian';
    this.keycapThemeId = 'classic';
    this.explodeTarget = 0;   // 0 = assembled, 1 = fully exploded
    this.explodeCurrent = 0;
    this.pressedKeys = new Map(); // keyId -> { mesh, targetY, currentY, anim }
    this.keycapMeshes = new Map();
    this.isDestroyed = false;

    this._initRenderer();
    this._initScene();
    this._initLights();
    this._buildKeyboard();
    this._initControls();
    this._initResize();
    this._animate = this._animate.bind(this);
    this._rafId = requestAnimationFrame(this._animate);
  }

  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
  }

  _initScene() {
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(38, 1, 1, 500);
    this.camera.position.set(0, 85, 95);
    this.camera.lookAt(0, 12, 0);

    // Ground plane for shadows
    const groundGeo = new THREE.PlaneGeometry(300, 300);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.15 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2;
    ground.receiveShadow = true;
    this.scene.add(ground);
  }

  _initLights() {
    // Key light
    const keyLight = new THREE.DirectionalLight('#ffffff', 2.2);
    keyLight.position.set(30, 60, 40);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(2048, 2048);
    keyLight.shadow.camera.near = 10;
    keyLight.shadow.camera.far = 200;
    keyLight.shadow.camera.left = -80;
    keyLight.shadow.camera.right = 80;
    keyLight.shadow.camera.top = 80;
    keyLight.shadow.camera.bottom = -80;
    this.scene.add(keyLight);

    // Fill light
    const fillLight = new THREE.DirectionalLight('#b0c4de', 0.8);
    fillLight.position.set(-40, 30, -20);
    this.scene.add(fillLight);

    // Rim light
    const rimLight = new THREE.DirectionalLight('#ffe4c4', 0.6);
    rimLight.position.set(0, 20, -50);
    this.scene.add(rimLight);

    // Ambient
    const ambient = new THREE.AmbientLight('#ffffff', 0.5);
    this.scene.add(ambient);
  }

  _buildKeyboard() {
    this.keyboardGroup = new THREE.Group();
    this.scene.add(this.keyboardGroup);

    const caseColor = CASE_COLORS.find(c => c.id === this.caseColorId);
    const keycapTheme = KEYCAP_THEMES.find(t => t.id === this.keycapThemeId);

    // Build layers
    this.caseGroup = buildCase(caseColor);
    this.plateGroup = buildPlate(caseColor);
    this.pcbGroup = buildPCB(caseColor);
    this.keycapGroup = new THREE.Group();
    this.keycapGroup.name = 'keycaps';

    // Build keycaps
    const keys = buildKeyPositions();
    keys.forEach(keyData => {
      const mesh = createKeycapMesh(keyData, keycapTheme);
      const x = (keyData.cx - TOTAL_WIDTH_U / 2) * KEY_UNIT;
      const z = (2 - keyData.row) * KEY_UNIT;
      mesh.position.set(x, KEYCAP_BASE_Y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.keycapGroup.add(mesh);
      this.keycapMeshes.set(keyData.id, mesh);
    });

    this.keyboardGroup.add(this.caseGroup);
    this.keyboardGroup.add(this.pcbGroup);
    this.keyboardGroup.add(this.plateGroup);
    this.keyboardGroup.add(this.keycapGroup);

    // Store initial positions for animation
    this._initialY = {
      keycaps: this.keycapGroup.position.y,
      plate: this.plateGroup.position.y,
      pcb: this.pcbGroup.position.y,
      case: this.caseGroup.position.y,
    };
  }

  _initControls() {
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.minDistance = 50;
    this.controls.maxDistance = 220;
    this.controls.maxPolarAngle = Math.PI / 2.1;
    this.controls.target.set(0, 15, 0);
    this.controls.update();
  }

  _initResize() {
    this._onResize = () => {
      const parent = this.canvas.parentElement;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    };
    window.addEventListener('resize', this._onResize);
    // Initial size
    requestAnimationFrame(() => {
      const parent = this.canvas.parentElement;
      if (parent) {
        const w = parent.clientWidth;
        const h = parent.clientHeight;
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(w, h);
      }
    });
  }

  // ── Public API ──

  setCaseColor(colorId) {
    this.caseColorId = colorId;
    const caseColor = CASE_COLORS.find(c => c.id === colorId);

    // Update case materials
    this.caseGroup.traverse(child => {
      if (child.isMesh && child.material) {
        if (child.name === 'ledStrip') {
          child.material.color.set(caseColor.ledColor);
          child.material.emissive.set(caseColor.ledColor);
        } else {
          child.material.color.set(caseColor.body);
        }
      }
    });

    // Update plate
    this.plateGroup.traverse(child => {
      if (child.isMesh && child.material) {
        if (child.material.metalness > 0.5) {
          child.material.color.set(caseColor.plateEdge);
        } else {
          child.material.color.set(caseColor.plate);
        }
      }
    });

    // Update LED strip reference
    const ledStrip = this.caseGroup.getObjectByName('ledStrip');
    if (ledStrip) {
      ledStrip.material.emissiveIntensity = 0.8;
    }
  }

  setKeycapTheme(themeId) {
    this.keycapThemeId = themeId;
    const theme = KEYCAP_THEMES.find(t => t.id === themeId);

    this.keycapMeshes.forEach((mesh, keyId) => {
      const keyData = mesh.userData.keyData;
      const isAlpha = /^[a-z]$/i.test(keyData.id) || keyData.id === 'space';
      const isMod = ['tab', 'caps', 'lshift', 'rshift', 'lctrl', 'rctrl', 'lalt', 'ralt',
                      'lwin', 'fn', 'enter', 'bksp', 'backslash'].includes(keyData.id);
      const isAccent = ['esc', 'enter'].includes(keyData.id);
      const isArrow = ['left', 'right', 'up', 'down'].includes(keyData.id);

      let color;
      if (isAccent) {
        color = theme.accent;
      } else if (isArrow) {
        color = theme.accent;
      } else if (keyData.id === 'space') {
        color = theme.spaceColor;
      } else if (isMod) {
        color = theme.mods;
      } else {
        color = theme.alphas;
      }

      mesh.material.color.set(color);
    });
  }

  setExplode(amount) {
    this.explodeTarget = THREE.MathUtils.clamp(amount, 0, 1);
  }

  pressKey(keyId) {
    const mesh = this.keycapMeshes.get(keyId);
    if (!mesh) return;

    // Cancel existing animation for this key
    const existing = this.pressedKeys.get(keyId);
    if (existing) {
      existing.targetY = mesh.position.y === existing.restY ? existing.restY - 3 : existing.restY;
      return;
    }

    this.pressedKeys.set(keyId, {
      mesh,
      restY: mesh.position.y,
      targetY: mesh.position.y - 3,
      currentY: mesh.position.y,
      anim: 'press',
    });
  }

  releaseKey(keyId) {
    const entry = this.pressedKeys.get(keyId);
    if (!entry) return;
    entry.targetY = entry.restY;
    entry.anim = 'release';
  }

  resetView() {
    this.camera.position.set(0, 85, 95);
    this.controls.target.set(0, 15, 0);
    this.controls.update();
  }

  resetExplode() {
    this.setExplode(0);
  }

  // ── Animation Loop ──

  _animate() {
    if (this.isDestroyed) return;
    this._rafId = requestAnimationFrame(this._animate);

    // Smooth explode interpolation
    const lerpSpeed = 0.08;
    this.explodeCurrent += (this.explodeTarget - this.explodeCurrent) * lerpSpeed;
    if (Math.abs(this.explodeTarget - this.explodeCurrent) < 0.001) {
      this.explodeCurrent = this.explodeTarget;
    }

    const e = this.explodeCurrent;
    this.keycapGroup.position.y = this._initialY.keycaps + EXPLODE_OFFSETS.keycaps * e;
    this.plateGroup.position.y = this._initialY.plate + EXPLODE_OFFSETS.plate * e;
    this.pcbGroup.position.y = this._initialY.pcb + EXPLODE_OFFSETS.pcb * e;
    this.caseGroup.position.y = this._initialY.case + EXPLODE_OFFSETS.case * e;

    // Key press animations
    this.pressedKeys.forEach((entry, keyId) => {
      const speed = 0.25;
      entry.currentY += (entry.targetY - entry.currentY) * speed;
      entry.mesh.position.y = entry.currentY;

      if (Math.abs(entry.currentY - entry.targetY) < 0.05) {
        entry.currentY = entry.targetY;
        entry.mesh.position.y = entry.targetY;
        if (entry.anim === 'release') {
          this.pressedKeys.delete(keyId);
        } else {
          // Auto-release after press
          setTimeout(() => this.releaseKey(keyId), 80);
        }
      }
    });

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  // ── Cleanup ──

  destroy() {
    this.isDestroyed = true;
    cancelAnimationFrame(this._rafId);
    window.removeEventListener('resize', this._onResize);
    this.controls.dispose();
    this.renderer.dispose();

    // Dispose geometries and materials
    this.scene.traverse(obj => {
      if (obj.isMesh) {
        obj.geometry?.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach(m => m.dispose());
        } else {
          obj.material?.dispose();
        }
      }
    });
  }
}
