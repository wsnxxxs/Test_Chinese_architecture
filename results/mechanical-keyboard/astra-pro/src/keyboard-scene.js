import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createKeyboardModel } from './model.js';
import { PHYSICAL_CODES } from './layout.js';
import { damp, explosionOffsets, shouldIgnoreKeyboard } from './motion.js';

const INITIAL_CAMERA = new THREE.Vector3(4, 18, 24);
const TOP_CAMERA = new THREE.Vector3(0, 24, .012);

function contactShadow() {
  const canvas = document.createElement('canvas'); canvas.width = 256; canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(128, 64, 3, 128, 64, 110);
  gradient.addColorStop(0, 'rgba(36,49,23,0.19)');
  gradient.addColorStop(.55, 'rgba(36,49,23,0.09)');
  gradient.addColorStop(1, 'rgba(36,49,23,0)');
  ctx.fillStyle = gradient; ctx.fillRect(0, 0, 256, 128);
  const texture = new THREE.CanvasTexture(canvas);
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(23, 10), new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false }));
  mesh.rotation.x = -Math.PI / 2; mesh.position.y = -.57;
  return mesh;
}

/** All object motion is resolved in one RAF, from absolute rest transforms. */
export function createKeyboardScene(container, { config, onReady, onError, onPress, onViewChange, isDialogOpen = () => false }) {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' }); }
  catch (error) { throw new Error(`WebGL 2 无法初始化：${error.message}`); }
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.19;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-label', 'FORM 68 三维键盘预览；拖动旋转，滚轮或双指缩放。开启体验模式后可使用字母键、空格或触摸键帽。');
  canvas.setAttribute('role', 'img');
  canvas.tabIndex = 0;
  container.replaceChildren(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-11, 11, 5.5, -5.5, .1, 100);
  const model = createKeyboardModel(config);
  scene.add(model.root);
  const shadow = contactShadow(); scene.add(shadow);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.ShadowMaterial({ opacity: .17 }));
  ground.rotation.x = -Math.PI / 2; ground.position.y = -.578; ground.receiveShadow = true; scene.add(ground);
  const ambient = new THREE.HemisphereLight('#fffef5', '#a6af8f', 2.25); scene.add(ambient);
  const keyLight = new THREE.DirectionalLight('#fffcf1', 3.65);
  keyLight.position.set(-7, 16, 8); keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(2048, 2048);
  keyLight.shadow.camera.left = -16; keyLight.shadow.camera.right = 16;
  keyLight.shadow.camera.top = 12; keyLight.shadow.camera.bottom = -12;
  keyLight.shadow.camera.near = .5; keyLight.shadow.camera.far = 45;
  keyLight.shadow.normalBias = .035; keyLight.shadow.bias = -.00018;
  keyLight.shadow.radius = 4;
  scene.add(keyLight);
  const fillLight = new THREE.DirectionalLight('#f5f9f2', 1.85); fillLight.position.set(9, 7, -6); scene.add(fillLight);
  const frontLight = new THREE.DirectionalLight('#e8eddc', .45); frontLight.position.set(1, 3, 9); scene.add(frontLight);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true; controls.dampingFactor = .095;
  controls.enablePan = false; controls.minZoom = .68; controls.maxZoom = 1.72;
  controls.minPolarAngle = .0005; controls.maxPolarAngle = Math.PI * .58;
  controls.rotateSpeed = .55; controls.zoomSpeed = .8;
  controls.target.set(0, 0, 0); camera.position.copy(INITIAL_CAMERA); camera.lookAt(controls.target);
  controls.update(); controls.saveState();

  const raycaster = new THREE.Raycaster(), mouse = new THREE.Vector2();
  const pointerStarts = new Map();
  let explosion = 0, explosionTarget = 0, experience = false, hovered = null;
  let width = 1, height = 1, baseFrustum = 10, frameId = 0, lastTime = 0, needsRender = 6;
  let ready = false, disposed = false, inView = true, lost = false, frameCount = 0;
  let preset = 'perspective', cameraMotion = null, lastZoom = 100;
  let reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const onReduced = e => { reducedMotion = e.matches; needsRender = 4; };
  reducedQuery.addEventListener('change', onReduced);

  function projectFrustum() {
    const aspect = width / height;
    // Preserve the whole 16u keyboard at every responsive width, also when exploded.
    const frustum = Math.max(baseFrustum, 10.6 * explosion + baseFrustum * (1 - explosion));
    camera.left = -frustum * aspect / 2; camera.right = frustum * aspect / 2;
    camera.top = frustum / 2; camera.bottom = -frustum / 2;
    camera.updateProjectionMatrix();
  }
  function resize() {
    const rect = container.getBoundingClientRect();
    width = Math.max(1, rect.width); height = Math.max(1, rect.height);
    baseFrustum = Math.max(7.6, 21.3 / (width / height));
    renderer.setSize(width, height, false); projectFrustum(); needsRender = 6;
  }
  const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(container); resize();
  const intersectionObserver = new IntersectionObserver(entries => {
    inView = entries[0]?.isIntersecting ?? true;
    if (inView) needsRender = 6;
  }, { rootMargin: '120px' });
  intersectionObserver.observe(container);

  function pick(event) {
    const rect = canvas.getBoundingClientRect();
    mouse.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
    model.root.updateMatrixWorld(true); camera.updateMatrixWorld();
    raycaster.setFromCamera(mouse, camera);
    return raycaster.intersectObjects(model.interactiveMeshes, false)[0]?.object.userData.keyCode || null;
  }
  function press(code, source, notify = true) {
    const key = model.keyMap.get(code);
    if (!key || !experience) return;
    const wasHeld = key.sources.has(source);
    key.sources.add(source); key.holdUntil = performance.now() + 85;
    needsRender = 6;
    if (notify && !wasHeld) onPress?.(code, key.label);
  }
  function release(code, source) {
    model.keyMap.get(code)?.sources.delete(source); needsRender = 6;
  }
  function releaseAll() {
    for (const key of model.keyMap.values()) { key.sources.clear(); key.holdUntil = 0; }
    pointerStarts.clear(); hovered = null; needsRender = 6;
  }
  function activeElement() {
    let element = document.activeElement;
    while (element?.shadowRoot?.activeElement) element = element.shadowRoot.activeElement;
    return element;
  }
  function onKeyDown(event) {
    if (!experience || !PHYSICAL_CODES.has(event.code) || shouldIgnoreKeyboard(event, activeElement(), isDialogOpen())) return;
    event.preventDefault();
    if (!event.repeat) press(event.code, `keyboard:${event.code}`);
  }
  function onKeyUp(event) {
    // Always release, including when modifiers or focus have changed since keydown.
    if (PHYSICAL_CODES.has(event.code)) release(event.code, `keyboard:${event.code}`);
  }
  function onFocus() {
    if (activeElement()?.closest?.('input,textarea,select,[contenteditable]:not([contenteditable="false"]),dialog')) releaseAll();
  }
  function onVisibility() { if (document.hidden) releaseAll(); else needsRender = 6; }
  function pointerDown(event) {
    if (!experience || (event.pointerType === 'mouse' && event.button !== 0)) return;
    const code = pick(event);
    pointerStarts.set(event.pointerId, { x: event.clientX, y: event.clientY, code, cancelled: false });
    if (pointerStarts.size > 1) {
      // A pinch is navigation, never a multi-key typing gesture.
      for (const [id, start] of pointerStarts) { start.cancelled = true; if (start.code) release(start.code, `pointer:${id}`); }
      return;
    }
    if (code) press(code, `pointer:${event.pointerId}`, false);
  }
  function pointerMove(event) {
    const start = pointerStarts.get(event.pointerId);
    if (start && Math.hypot(event.clientX - start.x, event.clientY - start.y) > 7) {
      start.cancelled = true; if (start.code) release(start.code, `pointer:${event.pointerId}`);
    }
    if (!experience || event.buttons || event.pointerType === 'touch') return;
    const next = pick(event);
    if (next !== hovered) { hovered = next; needsRender = 4; }
    canvas.style.cursor = hovered ? 'pointer' : 'grab';
  }
  function pointerUp(event) {
    const start = pointerStarts.get(event.pointerId);
    if (!start) return;
    if (start.code) {
      if (!start.cancelled && experience) {
        const key = model.keyMap.get(start.code);
        key.holdUntil = performance.now() + 85;
        onPress?.(start.code, key.label);
      }
      release(start.code, `pointer:${event.pointerId}`);
    }
    pointerStarts.delete(event.pointerId);
  }
  function pointerCancel(event) {
    const start = pointerStarts.get(event.pointerId);
    if (start?.code) release(start.code, `pointer:${event.pointerId}`);
    pointerStarts.delete(event.pointerId);
  }
  function pointerLeave() { hovered = null; canvas.style.cursor = 'grab'; needsRender = 4; }
  function contextLost(event) { event.preventDefault(); lost = true; releaseAll(); onError?.('WebGL 上下文已丢失。配色已保留，请点击「重新加载预览」。'); }
  function onControlStart() { cameraMotion = null; preset = 'free'; onViewChange?.({ preset, zoom: Math.round(camera.zoom * 100) }); needsRender = 6; }
  function onControlChange() { needsRender = Math.max(needsRender, 2); }
  controls.addEventListener('start', onControlStart);
  controls.addEventListener('change', onControlChange);
  const listeners = [
    [window, 'keydown', onKeyDown], [window, 'keyup', onKeyUp], [window, 'blur', releaseAll],
    [document, 'focusin', onFocus], [document, 'visibilitychange', onVisibility],
    [canvas, 'pointerdown', pointerDown], [canvas, 'pointermove', pointerMove],
    [canvas, 'pointerup', pointerUp], [canvas, 'pointercancel', pointerCancel],
    [canvas, 'lostpointercapture', pointerCancel], [canvas, 'pointerleave', pointerLeave],
    [canvas, 'webglcontextlost', contextLost],
  ];
  for (const [target, type, handler] of listeners) target.addEventListener(type, handler);

  function updateView(presetName) {
    preset = presetName;
    // Dispose/recreate controls is unnecessary: reset flushes all inertial deltas.
    const currentPosition = camera.position.clone(), currentZoom = camera.zoom;
    controls.reset();
    camera.position.copy(currentPosition); camera.zoom = currentZoom;
    controls.target.set(0, explosion * 1.25, 0);
    const destination = (presetName === 'top' ? TOP_CAMERA : INITIAL_CAMERA).clone();
    destination.y += explosion * 1.25;
    cameraMotion = { destination, zoom: 1 };
    onViewChange?.({ preset, zoom: Math.round(camera.zoom * 100) }); needsRender = 6;
  }

  function frame(time) {
    if (disposed) return;
    frameId = requestAnimationFrame(frame);
    const dt = Math.min((time - (lastTime || time - 16.67)) / 1000, .05); lastTime = time;
    if (lost || document.hidden || !inView) return;
    let moving = false;
    const previousExplosion = explosion;
    explosion = reducedMotion ? explosionTarget : damp(explosion, explosionTarget, 8.7, dt, .00008);
    if (explosion !== previousExplosion) {
      const offsets = explosionOffsets(explosion);
      model.keycaps.position.y = offsets.keycaps; model.plate.position.y = offsets.plate;
      const shift = (explosion - previousExplosion) * 1.25;
      controls.target.y += shift; camera.position.y += shift;
      if (cameraMotion) cameraMotion.destination.y += shift;
      projectFrustum(); moving = true;
    }
    if (cameraMotion) {
      const amount = reducedMotion ? 1 : 1 - Math.exp(-8.5 * dt);
      camera.position.lerp(cameraMotion.destination, amount);
      camera.zoom = damp(camera.zoom, cameraMotion.zoom, 12, dt);
      if (camera.position.distanceTo(cameraMotion.destination) < .004 && Math.abs(camera.zoom - cameraMotion.zoom) < .0005) {
        camera.position.copy(cameraMotion.destination); camera.zoom = cameraMotion.zoom; cameraMotion = null;
      }
      camera.updateProjectionMatrix(); moving = true;
    }
    for (const key of model.keyMap.values()) {
      const held = key.sources.size > 0 || time < key.holdUntil;
      const next = damp(key.depression, held ? 1 : 0, held ? 32 : 19, dt);
      const nextHover = damp(key.hover, hovered === key.code ? 1 : 0, 18, dt);
      if (next !== key.depression || nextHover !== key.hover) moving = true;
      key.depression = next; key.hover = nextHover;
      key.group.position.y = key.baseY - next * .155;
      key.group.scale.setScalar(1 + nextHover * .018);
    }
    moving = model.updateColors(dt, reducedMotion) || moving;
    const controlsMoved = controls.update();
    const zoom = Math.round(camera.zoom * 100);
    if (zoom !== lastZoom) { lastZoom = zoom; onViewChange?.({ preset, zoom }); }
    if (moving || controlsMoved || needsRender > 0 || !ready) {
      try {
        renderer.render(scene, camera); frameCount++; needsRender = Math.max(0, needsRender - 1);
        if (!ready) { ready = true; canvas.dataset.ready = 'true'; onReady?.(); }
      } catch (error) { lost = true; onError?.(`渲染未能继续：${error.message}`); }
    }
  }
  frameId = requestAnimationFrame(frame);

  return {
    setColors(next) { model.setColors(next); needsRender = 6; },
    setExploded(value) {
      explosionTarget = value ? 1 : 0;
      // In an exact top view, vertical layers occlude one another. Reveal the anatomy.
      if (value && controls.getPolarAngle() < .3) updateView('perspective');
      needsRender = 6;
    },
    setExperience(value) {
      experience = Boolean(value); releaseAll();
      if (experience) canvas.focus({ preventScroll: true });
      else canvas.style.cursor = 'grab';
    },
    zoom(direction) {
      cameraMotion = null;
      camera.zoom = THREE.MathUtils.clamp(camera.zoom * (direction > 0 ? 1.13 : 1 / 1.13), controls.minZoom, controls.maxZoom);
      camera.updateProjectionMatrix(); needsRender = 6;
    },
    setView: updateView,
    resetView() { updateView('perspective'); },
    releaseAll,
    focus() { canvas.focus({ preventScroll: true }); },
    // Read-only diagnostic data used by the bundled browser tests, never to drive the UI.
    inspect() {
      return {
        ready, lost, frameCount, keyCount: model.keyMap.size, explosion, explosionTarget,
        layers: { keycaps: model.keycaps.position.y, plate: model.plate.position.y, base: model.base.position.y },
        shellColor: `#${model.shellMaterial.color.getHexString()}`,
        capColors: Object.fromEntries(Object.entries(model.capMaterials).map(([role, mat]) => [role, `#${mat.color.getHexString()}`])),
        zoom: camera.zoom, preset, camera: camera.position.toArray(), target: controls.target.toArray(),
        keys: Object.fromEntries([...model.keyMap].map(([code, key]) => [code, { y: key.group.position.y, baseY: key.baseY, depression: key.depression, held: key.sources.size > 0 }])),
      };
    },
    projectKey(code) {
      const key = model.keyMap.get(code); if (!key) return null;
      model.root.updateMatrixWorld(true); camera.updateMatrixWorld();
      const point = key.group.localToWorld(new THREE.Vector3(0, .49, 0)).project(camera);
      const rect = canvas.getBoundingClientRect();
      return { x: rect.left + (point.x + 1) / 2 * rect.width, y: rect.top + (1 - point.y) / 2 * rect.height };
    },
    dispose() {
      if (disposed) return;
      disposed = true; cancelAnimationFrame(frameId);
      for (const [target, type, handler] of listeners) target.removeEventListener(type, handler);
      resizeObserver.disconnect(); intersectionObserver.disconnect(); reducedQuery.removeEventListener('change', onReduced);
      controls.removeEventListener('start', onControlStart); controls.removeEventListener('change', onControlChange); controls.dispose();
      model.dispose(); shadow.geometry.dispose(); shadow.material.map.dispose(); shadow.material.dispose();
      ground.geometry.dispose(); ground.material.dispose(); keyLight.shadow.map?.dispose();
      renderer.dispose(); renderer.forceContextLoss(); canvas.remove();
    },
  };
}
