// 场景：渲染器 / 相机与轨道控制 / 摄影棚灯光 / 地面阴影 / 复位视角补间
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export function createScene(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.02;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 1, 6000);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.075;
  controls.enablePan = false;
  controls.rotateSpeed = 0.85;
  controls.zoomSpeed = 0.9;
  controls.minDistance = 170;
  controls.maxDistance = 1300;
  controls.maxPolarAngle = Math.PI * 0.495;
  controls.target.set(0, 0, 0);

  // 环境反射（室内摄影棚 IBL）
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();

  // 主光（投影）+ 补光 + 轮廓光
  const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
  keyLight.position.set(190, 420, 300);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(2048, 2048);
  Object.assign(keyLight.shadow.camera, { left: -280, right: 280, top: 240, bottom: -240, near: 60, far: 1200 });
  keyLight.shadow.camera.updateProjectionMatrix();
  keyLight.shadow.bias = -0.0004;
  keyLight.shadow.normalBias = 0.5;
  scene.add(keyLight);

  const fill = new THREE.DirectionalLight(0xdce6ff, 0.55);
  fill.position.set(-280, 200, 200);
  scene.add(fill);

  const rim = new THREE.DirectionalLight(0xffffff, 0.85);
  rim.position.set(-140, 180, -330);
  scene.add(rim);

  scene.add(new THREE.HemisphereLight(0xffffff, 0xc3cad6, 0.32));

  // 地面（只承接阴影，背景由 CSS 渐变提供）
  const ground = new THREE.Mesh(new THREE.CircleGeometry(1000, 64), new THREE.ShadowMaterial({ opacity: 0.16 }));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // —— 机位 ——
  const homeDir = new THREE.Vector3(0.6, 0.46, 0.66).normalize();
  const home = { pos: new THREE.Vector3(), target: new THREE.Vector3() };
  const UP = new THREE.Vector3(0, 1, 0);
  const corners = [
    new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(),
    new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(),
  ];

  function setHomeFrom(object) {
    const box = new THREE.Box3().setFromObject(object);
    home.target.copy(box.getCenter(new THREE.Vector3()));
    home.target.y -= 2;
    // 逐角点做透视适配：保证任意宽高比与朝向都完整入镜
    const xAxis = new THREE.Vector3().crossVectors(UP, homeDir).normalize(); // 屏幕右
    const yAxis = new THREE.Vector3().crossVectors(homeDir, xAxis).normalize(); // 屏幕上
    const vFov = THREE.MathUtils.degToRad(camera.fov);
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * camera.aspect);
    const { min, max } = box;
    let dist = 0;
    for (let i = 0; i < 8; i++) {
      const c = corners[i].set(
        i & 1 ? max.x : min.x,
        i & 2 ? max.y : min.y,
        i & 4 ? max.z : min.z
      ).sub(home.target);
      const depth = c.dot(homeDir);
      dist = Math.max(
        dist,
        depth + Math.abs(c.dot(xAxis)) / Math.tan(hFov / 2),
        depth + Math.abs(c.dot(yAxis)) / Math.tan(vFov / 2)
      );
    }
    dist *= 1.12;
    home.pos.copy(home.target).addScaledVector(homeDir, dist);
    ground.position.y = box.min.y - 2.5;
    camera.position.copy(home.pos);
    controls.target.copy(home.target);
    controls.update();
  }

  // 相机补间
  const tw = {
    active: false,
    t: 0,
    dur: 0.7,
    fromP: new THREE.Vector3(),
    toP: new THREE.Vector3(),
    fromT: new THREE.Vector3(),
    toT: new THREE.Vector3(),
  };
  function tweenTo(pos, target, dur = 0.7) {
    tw.fromP.copy(camera.position);
    tw.toP.copy(pos);
    tw.fromT.copy(controls.target);
    tw.toT.copy(target);
    tw.t = 0;
    tw.dur = dur;
    tw.active = true;
  }
  function resetView() {
    tweenTo(home.pos, home.target, 0.7);
  }
  function playIntro() {
    const dir = homeDir.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.5);
    const d = home.pos.distanceTo(home.target) * 1.3;
    camera.position.copy(home.target).addScaledVector(dir, d);
    controls.target.copy(home.target);
    tweenTo(home.pos, home.target, 1.25);
    tw.t = 0.25;
  }

  // 尺寸自适应
  function resize() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(canvas);
  resize();

  // 主循环
  const clock = new THREE.Clock();
  let onFrame = null;
  let frameErrors = 0;
  renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), 0.05);
    try {
      if (tw.active) {
        tw.t = Math.min(1, tw.t + dt / tw.dur);
        const e = easeInOutCubic(tw.t);
        camera.position.lerpVectors(tw.fromP, tw.toP, e);
        controls.target.lerpVectors(tw.fromT, tw.toT, e);
        if (tw.t >= 1) tw.active = false;
      }
      if (onFrame) onFrame(dt);
      controls.update();
      renderer.render(scene, camera);
      frameErrors = 0;
    } catch (err) {
      // 连续异常时停用场景回调，保留渲染本身，避免整个循环停摆
      window.__loopError = err && err.stack ? err.stack : String(err);
      if (++frameErrors > 30) onFrame = null;
      controls.update();
      renderer.render(scene, camera);
    }
  });

  return {
    renderer,
    scene,
    camera,
    controls,
    ground,
    setHomeFrom,
    resetView,
    playIntro,
    set onFrame(fn) {
      onFrame = fn;
    },
  };
}
