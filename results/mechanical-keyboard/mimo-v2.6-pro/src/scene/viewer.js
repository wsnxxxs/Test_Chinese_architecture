/**
 * Three.js 舞台：渲染器、相机、灯光、OrbitControls、指针拾取与渲染循环
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const FOV = 30;
const BASE_DISTANCE = 24;
const INITIAL_AZIMUTH = 0.4; // rad，绕 +Z 轴向右
const INITIAL_ELEVATION = 0.58; // rad，俯角
const TARGET = new THREE.Vector3(-0.7, 1.45, 0.1);

export function createViewer({ canvas, container, keyboard, onFirstFrame }) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.02;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(FOV, 1, 0.5, 200);

  // 环境光（无外部资源的室内环境反射）
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envRT = pmrem.fromScene(new RoomEnvironment(), 0.06);
  scene.environment = envRT.texture;
  if ('environmentIntensity' in scene) scene.environmentIntensity = 0.5;

  // 灯光
  const key = new THREE.DirectionalLight(0xffffff, 2.35);
  key.position.set(9, 15, 10);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.camera.near = 2;
  key.shadow.camera.far = 60;
  key.shadow.camera.left = -13;
  key.shadow.camera.right = 13;
  key.shadow.camera.top = 13;
  key.shadow.camera.bottom = -13;
  key.shadow.bias = -0.0006;
  key.shadow.normalBias = 0.022;

  const fill = new THREE.DirectionalLight(0xbdd2ff, 0.75);
  fill.position.set(-12, 8, -6);

  const rim = new THREE.DirectionalLight(0xffe3c4, 0.5);
  rim.position.set(-5, 6, 13);

  scene.add(key, fill, rim, new THREE.AmbientLight(0xffffff, 0.16));

  // 接触阴影（透明画布上仍可见）
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(90, 60),
    new THREE.ShadowMaterial({ opacity: 0.22 }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.012;
  ground.receiveShadow = true;
  scene.add(ground);

  scene.add(keyboard.group);

  // ---- 相机与控制器 ----
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.075;
  controls.enablePan = false;
  controls.rotateSpeed = 0.85;
  controls.zoomSpeed = 0.85;
  controls.minDistance = 11;
  controls.maxDistance = 52;
  controls.minPolarAngle = 0.18;
  controls.maxPolarAngle = Math.PI * 0.495;
  controls.autoRotateSpeed = 0.55;

  function homePosition() {
    const dist = BASE_DISTANCE * fitScale();
    return new THREE.Vector3(
      TARGET.x + dist * Math.sin(INITIAL_AZIMUTH) * Math.cos(INITIAL_ELEVATION),
      TARGET.y + dist * Math.sin(INITIAL_ELEVATION),
      TARGET.z + dist * Math.cos(INITIAL_AZIMUTH) * Math.cos(INITIAL_ELEVATION),
    );
  }

  function fitScale() {
    const aspect = Math.max(0.45, camera.aspect);
    // 视口变窄时后退，保证键盘完整入镜
    return Math.max(1, 1.42 / aspect);
  }

  // 复位视角的平滑动画
  const camAnim = {
    active: false,
    t: 0,
    fromPos: new THREE.Vector3(),
    toPos: new THREE.Vector3(),
    fromTarget: new THREE.Vector3(),
    toTarget: new THREE.Vector3(),
  };

  function resetView(animated = true) {
    camAnim.toPos.copy(homePosition());
    camAnim.toTarget.copy(TARGET);
    if (!animated) {
      camera.position.copy(camAnim.toPos);
      controls.target.copy(camAnim.toTarget);
      camAnim.active = false;
      return;
    }
    camAnim.fromPos.copy(camera.position);
    camAnim.fromTarget.copy(controls.target);
    camAnim.t = 0;
    camAnim.active = true;
    controls.enabled = false;
    controls.autoRotate = false;
  }

  // ---- 尺寸 ----
  function resize() {
    const width = container.clientWidth || 1;
    const height = container.clientHeight || 1;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(() => resize());
  ro.observe(container);
  resize();
  resetView(false);

  // ---- 拾取 ----
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let hovered = null;

  function pick(event) {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(keyboard.pickables, false);
    return hits.length ? hits[0].object : null;
  }

  canvas.addEventListener('pointerdown', (event) => {
    const mesh = pick(event);
    if (mesh) {
      keyboard.press(mesh.userData.keyId, true);
      canvas.setPointerCapture?.(event.pointerId);
    }
  });
  window.addEventListener('pointerup', () => keyboard.releaseAll());
  window.addEventListener('pointercancel', () => keyboard.releaseAll());
  canvas.addEventListener('pointermove', (event) => {
    const mesh = pick(event);
    if (mesh !== hovered) {
      hovered = mesh;
      keyboard.setHover(mesh);
      canvas.style.cursor = mesh ? 'pointer' : 'grab';
    }
  });
  canvas.addEventListener('pointerleave', () => {
    hovered = null;
    keyboard.setHover(null);
    canvas.style.cursor = 'grab';
  });

  // ---- 渲染循环 ----
  const clock = new THREE.Clock();
  let raf = 0;
  let firstFrameDone = false;

  function frame() {
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, clock.getDelta());

    if (camAnim.active) {
      camAnim.t = Math.min(1, camAnim.t + dt / 0.85);
      const e = 1 - Math.pow(1 - camAnim.t, 3);
      camera.position.lerpVectors(camAnim.fromPos, camAnim.toPos, e);
      controls.target.lerpVectors(camAnim.fromTarget, camAnim.toTarget, e);
      if (camAnim.t >= 1) {
        camAnim.active = false;
        controls.enabled = true;
      }
    }

    keyboard.update(dt);
    controls.update();
    renderer.render(scene, camera);

    if (!firstFrameDone) {
      firstFrameDone = true;
      onFirstFrame?.();
    }
  }
  frame();

  return {
    scene,
    camera,
    controls,
    renderer,
    resetView,
    resize,
    setAutoRotate(on) {
      controls.autoRotate = on && !camAnim.active;
    },
    get autoRotate() {
      return controls.autoRotate;
    },
    stop() {
      cancelAnimationFrame(raf);
      ro.disconnect();
    },
  };
}
