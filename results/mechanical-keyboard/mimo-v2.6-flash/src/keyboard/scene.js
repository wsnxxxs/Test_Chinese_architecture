/**
 * Three.js 舞台：渲染、灯光、轨道相机、拆解动画、键程动画与拾取交互。
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import {
  createKeyboardModel,
  EXPLODE_CAPS_RISE,
  EXPLODE_PLATE_RISE,
  PRESS_TRAVEL,
} from './model.js';

const VIEW_FOV = 34;
const VIEW_DIR = new THREE.Vector3(-0.28, 0.56, 0.78).normalize();
const TARGET = new THREE.Vector3(0, 1.0, 0);

// 不同状态下的取景包围高度（决定相机距离）
const BOX_TOP_ASSEMBLED = 2.5;
const BOX_TOP_EXPLODED = 6.9;

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const smoothstep = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

const isEditableTarget = (t) =>
  !!t &&
  (t.tagName === 'INPUT' ||
    t.tagName === 'TEXTAREA' ||
    t.tagName === 'SELECT' ||
    t.isContentEditable === true);

export class KeyboardStage {
  /**
   * @param {{canvas: HTMLCanvasElement, viewport: HTMLElement,
   *          onSound?: (kind: 'press'|'click'|'explode'|'assemble', v?: number) => void}} opts
   */
  constructor({ canvas, viewport, onSound }) {
    this.canvas = canvas;
    this.viewport = viewport;
    this.onSound = onSound || (() => {});

    /* ── 渲染器 ── */
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    /* ── 场景 / 环境光 ── */
    this.scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environmentIntensity = 0.42;
    pmrem.dispose();

    this.camera = new THREE.PerspectiveCamera(VIEW_FOV, 1, 0.1, 220);
    this.camera.position.copy(TARGET).addScaledVector(VIEW_DIR, 24);

    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.target.copy(TARGET);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.enablePan = false;
    this.controls.minDistance = 9;
    this.controls.maxDistance = 46;
    this.controls.minPolarAngle = 0.12;
    this.controls.maxPolarAngle = 1.52;

    /* ── 灯光 ── */
    const key = new THREE.DirectionalLight(0xfff2e2, 1.7);
    key.position.set(7, 13, 7);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.left = -13;
    key.shadow.camera.right = 13;
    key.shadow.camera.top = 10;
    key.shadow.camera.bottom = -10;
    key.shadow.camera.near = 2;
    key.shadow.camera.far = 46;
    key.shadow.bias = -0.0004;
    key.shadow.normalBias = 0.03;
    this.scene.add(key);

    const rim = new THREE.DirectionalLight(0x9db4ff, 0.85);
    rim.position.set(-9, 7, -8);
    this.scene.add(rim);

    const fill = new THREE.DirectionalLight(0xffffff, 0.3);
    fill.position.set(-4, 5, 10);
    this.scene.add(fill);

    /* ── 地面接触阴影 ── */
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(120, 120),
      new THREE.ShadowMaterial({ opacity: 0.38 }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.002;
    ground.receiveShadow = true;
    this.scene.add(ground);

    /* ── 模型 ── */
    this.model = createKeyboardModel();
    this.scene.add(this.model.root);
    this.capMeshes = this.model.keys.map((k) => k.mesh);

    this.legendMap = new Map();
    for (const ko of this.model.keys) {
      if (!this.legendMap.has(ko.legend)) this.legendMap.set(ko.legend, ko);
    }

    /* ── 状态 ── */
    this.explodeTarget = 0;
    this.explodeValue = 0;
    this.typingMode = false;
    this.pointerNdc = new THREE.Vector2(2, 2);
    this.pointerInside = false;
    this.pointerDownish = false;
    this.raycaster = new THREE.Raycaster();
    this.pendingFit = null;

    this.introStart = performance.now() + 100;
    this.introCancelled = false;
    this.resetAnim = null;
    this.lastTime = performance.now();

    /* ── 拆解层 HTML 标签 ── */
    this.labels = this.model.labelAnchors.map((anchor) => {
      const el = document.createElement('div');
      el.className = 'layer-label';
      el.innerHTML = `${anchor.text} <small>${anchor.en}</small>`;
      viewport.appendChild(el);
      return { el, anchor, width: 0 };
    });

    this._bindEvents();
    this.resize();
    // 先按默认视角取景，再从远处推近
    const introEnd = this._fitDistance(VIEW_DIR, BOX_TOP_ASSEMBLED);
    this.camera.position.copy(introEnd);
    this.controls.target.copy(TARGET);
    this.controls.update();
    this.introFrom = introEnd.clone().sub(TARGET).multiplyScalar(1.55).add(TARGET);
    this.camera.position.copy(this.introFrom);
    this.introEnd = introEnd;

    this._tick = this._tick.bind(this);
    requestAnimationFrame(this._tick);
  }

  /* ─────────────── 对外接口 ─────────────── */

  setShell(id) {
    this.model.setShell(id);
  }

  setTheme(id) {
    this.model.setTheme(id);
  }

  /** 切换拆解/组装，返回目标状态 */
  setExploded(exploded) {
    this.explodeTarget = exploded ? 1 : 0;
    // 待动画收敛后按当前视角方向自动重新取景，保证整层可见
    this.pendingFit = { readyAt: performance.now() + 420, exploded: this.explodeTarget === 1 };
    this.onSound(exploded ? 'explode' : 'assemble');
    return exploded;
  }

  isExploded() {
    return this.explodeTarget === 1;
  }

  explodeProgress() {
    return this.explodeValue;
  }

  setTypingMode(on) {
    this.typingMode = on;
    if (!on) this._releaseAll();
  }

  isTypingMode() {
    return this.typingMode;
  }

  /** 复位到默认展示视角（含当前结构状态的取景） */
  resetView() {
    this._startReset(VIEW_DIR, this.explodeTarget === 1 ? BOX_TOP_EXPLODED : BOX_TOP_ASSEMBLED);
  }

  /* ─────────────── 内部实现 ─────────────── */

  _bindEvents() {
    const { canvas } = this;

    const interrupt = () => {
      this.introCancelled = true;
      this.resetAnim = null;
      this.pendingFit = null;
    };
    // 触屏上 pointerdown 可能先于任何 pointermove，按下时也要更新射线坐标
    const updatePointer = (e) => {
      const rect = canvas.getBoundingClientRect();
      this.pointerNdc.set(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1,
      );
      this.pointerInside = true;
    };
    canvas.addEventListener('pointerdown', (e) => {
      interrupt();
      updatePointer(e);
      this.pointerDownish = true;
      if (!this.typingMode) canvas.style.cursor = 'grabbing';

      if (!this.typingMode) return;
      const hit = this._pick();
      if (hit) {
        hit.pulseUntil = performance.now() + 160;
        this.onSound('click', 0.9 + Math.random() * 0.25);
      }
    });
    canvas.addEventListener('pointerup', () => {
      this.pointerDownish = false;
      canvas.style.cursor = '';
    });
    canvas.addEventListener('pointerleave', () => {
      this.pointerInside = false;
      this.pointerDownish = false;
      canvas.style.cursor = '';
    });
    canvas.addEventListener('pointermove', updatePointer);
    canvas.addEventListener('wheel', interrupt, { passive: true });
    canvas.addEventListener('dblclick', () => this.resetView());

    window.addEventListener('keydown', (e) => this._onKeyDown(e));
    window.addEventListener('keyup', (e) => this._onKeyUp(e));
    window.addEventListener('blur', () => this._releaseAll());

    this._ro = new ResizeObserver(() => this.resize());
    this._ro.observe(this.viewport);
  }

  _legendFromEvent(e) {
    if (e.code === 'Space') return 'Space';
    const key = e.key;
    if (key && key.length === 1) {
      const up = key.toUpperCase();
      if (up >= 'A' && up <= 'Z') return up;
    }
    return null;
  }

  _onKeyDown(e) {
    if (!this.typingMode) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (isEditableTarget(e.target)) return;
    const legend = this._legendFromEvent(e);
    if (!legend) return;
    // 体验模式下空格只用于键帽回弹，避免滚动页面 / 重复触发按钮
    if (e.code === 'Space') e.preventDefault();
    const key = this.legendMap.get(legend);
    if (!key) return;
    key.held = true;
    if (!key.sounded) {
      key.sounded = true;
      this.onSound('press', 0.85 + Math.random() * 0.3);
    }
  }

  _onKeyUp(e) {
    const legend = this._legendFromEvent(e);
    if (!legend) return;
    const key = this.legendMap.get(legend);
    if (key) {
      key.held = false;
      key.sounded = false;
    }
  }

  _releaseAll() {
    for (const ko of this.model.keys) {
      ko.held = false;
      ko.sounded = false;
    }
  }

  _pick() {
    if (!this.pointerInside) return null;
    this.raycaster.setFromCamera(this.pointerNdc, this.camera);
    const hits = this.raycaster.intersectObjects(this.capMeshes, false);
    if (!hits.length) return null;
    return this.model.keys[hits[0].object.userData.keyIndex];
  }

  /**
   * 依据目标包围盒 + 投影迭代，求“完整放入视口”的相机位置。
   * @param {THREE.Vector3} dir 从目标指向相机的方向
   * @param {number} boxTop     键盘模型的最高点（随拆解状态变化）
   */
  _fitDistance(dir, boxTop) {
    const cam = this.camera;
    const prevPos = cam.position.clone();
    const prevTarget = this.controls.target.clone();

    const box = new THREE.Box3(
      new THREE.Vector3(-8.7, -0.05, -3.3),
      new THREE.Vector3(8.7, boxTop, 3.3),
    );
    const corners = [];
    for (const x of [box.min.x, box.max.x])
      for (const y of [box.min.y, box.max.y])
        for (const z of [box.min.z, box.max.z]) corners.push(new THREE.Vector3(x, y, z));

    let dist = 20;
    const v = new THREE.Vector3();
    for (let i = 0; i < 28; i++) {
      cam.position.copy(TARGET).addScaledVector(dir, dist);
      cam.lookAt(TARGET);
      cam.updateMatrixWorld(true);
      cam.updateProjectionMatrix();
      let maxAbs = 0;
      for (const c of corners) {
        v.copy(c).project(cam);
        maxAbs = Math.max(maxAbs, Math.abs(v.x), Math.abs(v.y));
      }
      if (maxAbs <= 0.9) break;
      dist *= Math.max(1.04, Math.pow(maxAbs / 0.9, 1.15));
      if (dist > 70) break;
    }

    const result = cam.position.clone();
    cam.position.copy(prevPos);
    cam.lookAt(prevTarget);
    cam.updateMatrixWorld(true);
    return result;
  }

  _startReset(dir, boxTop) {
    this.introCancelled = true;
    const toPos = this._fitDistance(dir, boxTop);
    this.resetAnim = {
      t: 0,
      duration: 0.68,
      fromPos: this.camera.position.clone(),
      toPos,
      fromTarget: this.controls.target.clone(),
      toTarget: TARGET.clone(),
    };
  }

  resize() {
    const rect = this.viewport.getBoundingClientRect();
    const w = Math.max(1, Math.round(rect.width));
    const h = Math.max(1, Math.round(rect.height));
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  _updateLabels() {
    const e = this.explodeValue;
    const rect = this.viewport.getBoundingClientRect();
    const cam = this.camera;
    const deck = this.model.deckGroup;
    const v = new THREE.Vector3();

    for (const label of this.labels) {
      const a = label.anchor;
      v.set(a.x, a.y, a.z);
      if (a.layer === 'caps') {
        v.y += this.model.capsLayer.position.y;
        deck.localToWorld(v);
      } else if (a.layer === 'plate') {
        v.y += this.model.plateLayer.position.y;
        deck.localToWorld(v);
      }
      v.project(cam);

      const visible = e > 0.03 && v.z < 1;
      if (!visible) {
        label.el.style.opacity = '0';
        label.el.style.visibility = 'hidden';
        continue;
      }
      if (!label.width) label.width = label.el.offsetWidth || 110;
      const sx = (v.x * 0.5 + 0.5) * rect.width;
      const sy = (-v.y * 0.5 + 0.5) * rect.height;
      const left = Math.max(6, Math.min(rect.width - label.width - 6, sx - label.width - 14));
      const top = Math.max(6, Math.min(rect.height - 30, sy - 13));
      label.el.style.visibility = 'visible';
      label.el.style.opacity = String(smoothstep(0.18, 0.5, e));
      label.el.style.transform = `translate3d(${left}px, ${top}px, 0)`;
    }
  }

  _tick(now) {
    requestAnimationFrame(this._tick);
    const dt = Math.min(0.05, Math.max(0.001, (now - this.lastTime) / 1000));
    this.lastTime = now;

    /* 开场推近 */
    if (!this.introCancelled) {
      const p = Math.min(1, Math.max(0, (now - this.introStart) / 1250));
      if (p >= 0) {
        this.camera.position.copy(this.introFrom).lerp(this.introEnd, easeOutCubic(p));
        if (p >= 1) this.introCancelled = true;
      }
    }

    /* 复位 / 自动取景动画 */
    if (this.resetAnim) {
      const a = this.resetAnim;
      a.t = Math.min(a.duration, a.t + dt);
      const p = easeInOutCubic(a.t / a.duration);
      this.camera.position.lerpVectors(a.fromPos, a.toPos, p);
      this.controls.target.lerpVectors(a.fromTarget, a.toTarget, p);
      if (a.t >= a.duration) this.resetAnim = null;
    }

    /* 拆解：指数趋近目标 —— 快速反复点击也始终收敛到最新目标 */
    const gap = this.explodeTarget - this.explodeValue;
    if (Math.abs(gap) < 0.0006) {
      this.explodeValue = this.explodeTarget;
    } else {
      this.explodeValue += gap * (1 - Math.exp(-5.6 * dt));
    }
    this.model.capsLayer.position.y = this.explodeValue * EXPLODE_CAPS_RISE;
    this.model.plateLayer.position.y = this.explodeValue * EXPLODE_PLATE_RISE;

    /* 拆解收敛后沿当前视角方向自动取景 */
    if (this.pendingFit && now >= this.pendingFit.readyAt && this.explodeValue === this.explodeTarget) {
      const dir = this.camera.position.clone().sub(this.controls.target).normalize();
      this._startReset(
        dir,
        this.pendingFit.exploded ? BOX_TOP_EXPLODED : BOX_TOP_ASSEMBLED,
      );
      this.pendingFit = null;
    }

    /* 悬停拾取（仅体验模式） */
    let hoverKey = null;
    if (this.typingMode && this.pointerInside && !this.pointerDownish) {
      hoverKey = this._pick();
    }
    for (const ko of this.model.keys) ko.hover = ko === hoverKey;

    const cursor = this.pointerDownish
      ? 'grabbing'
      : this.typingMode && hoverKey
        ? 'pointer'
        : '';
    if (this.canvas.style.cursor !== cursor) this.canvas.style.cursor = cursor;

    /* 键程弹簧动画 */
    for (const ko of this.model.keys) {
      const target = ko.held || now < ko.pulseUntil ? 1 : 0;
      ko.velocity += ((target - ko.press) * 640 - ko.velocity * 28) * dt;
      ko.press += ko.velocity * dt;
      if (target === 0 && Math.abs(ko.press) < 0.0006 && Math.abs(ko.velocity) < 0.006) {
        ko.press = 0;
        ko.velocity = 0;
      }
      ko.press = Math.min(1.2, Math.max(-0.14, ko.press));

      ko.hoverT += ((ko.hover ? 1 : 0) - ko.hoverT) * Math.min(1, dt * 13);

      const y = ko.restY + ko.hoverT * 0.05 - ko.press * PRESS_TRAVEL;
      ko.mesh.position.y = y;
      ko.stem.position.y = y - 0.14;
      ko.topMat.emissiveIntensity = Math.max(0, ko.press) * 0.45 + ko.hoverT * 0.1;
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    this._updateLabels();
  }
}
