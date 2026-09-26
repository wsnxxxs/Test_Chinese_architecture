import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { LoaderCircle, RotateCcw } from 'lucide-react';
import type { Configuration } from '../config';
import { createKeyboard, type KeyboardModel } from '../three/keyboardModel';

export interface KeyboardSceneHandle {
  reset: () => void;
  zoom: (direction: 1 | -1) => void;
  focus: () => void;
}

interface Props {
  config: Configuration;
  exploded: boolean;
  experience: boolean;
  sound: boolean;
  onKey: (code: string, label: string) => void;
}

function isEditing(target: EventTarget | null) {
  return target instanceof Element && !!target.closest(
    'input, textarea, select, [contenteditable]:not([contenteditable="false"]), [role="textbox"], dialog',
  );
}

function makeContactShadow() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext('2d')!;
  const gradient = context.createRadialGradient(128, 128, 18, 128, 128, 127);
  gradient.addColorStop(0, 'rgba(58, 52, 40, 0.34)');
  gradient.addColorStop(0.5, 'rgba(58, 52, 40, 0.18)');
  gradient.addColorStop(1, 'rgba(58, 52, 40, 0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(canvas);
}

export const KeyboardScene = forwardRef<KeyboardSceneHandle, Props>(function KeyboardScene(props, ref) {
  const hostRef = useRef<HTMLDivElement>(null);
  const propsRef = useRef(props);
  propsRef.current = props;
  const modelRef = useRef<KeyboardModel | null>(null);
  const apiRef = useRef<KeyboardSceneHandle | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(0);

  useImperativeHandle(ref, () => ({
    reset: () => apiRef.current?.reset(),
    zoom: (direction) => apiRef.current?.zoom(direction),
    focus: () => hostRef.current?.focus({ preventScroll: true }),
  }), []);

  useEffect(() => { modelRef.current?.setPalette(props.config); }, [props.config]);
  useEffect(() => {
    if (!props.experience) modelRef.current?.releaseKeys();
  }, [props.experience]);

  useEffect(() => {
    const host = hostRef.current!;
    setError('');
    setLoading(true);
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch {
      setError('3D 预览需要支持 WebGL 2 的浏览器。请开启硬件加速后重试，配色与保存功能仍可使用。');
      setLoading(false);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0xf5f4ef, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.96;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.shadowMap.autoUpdate = false;
    renderer.domElement.setAttribute('aria-hidden', 'true');
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    const environment = pmrem.fromScene(room, 0.04);
    scene.environment = environment.texture;
    scene.environmentIntensity = 0.38;
    room.dispose();
    pmrem.dispose();

    const hemisphere = new THREE.HemisphereLight(0xffffff, 0xb0a797, 1.6);
    scene.add(hemisphere);
    const keyLight = new THREE.DirectionalLight(0xfff8ef, 2.8);
    keyLight.position.set(-7, 14, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(2048, 2048);
    Object.assign(keyLight.shadow.camera, { left: -14, right: 14, top: 12, bottom: -12, near: 0.5, far: 45 });
    keyLight.shadow.normalBias = 0.025;
    keyLight.shadow.bias = -0.0003;
    keyLight.shadow.radius = 4;
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight(0xf0f5ff, 0.9);
    fillLight.position.set(10, 8, -8);
    scene.add(fillLight);

    const model = createKeyboard(propsRef.current.config);
    modelRef.current = model;
    scene.add(model.root);

    const floor = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.ShadowMaterial({ opacity: 0.13 }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.05;
    floor.receiveShadow = true;
    scene.add(floor);
    const contactShadow = new THREE.Mesh(
      new THREE.PlaneGeometry(22, 11),
      new THREE.MeshBasicMaterial({ map: makeContactShadow(), transparent: true, depthWrite: false, opacity: 0.7 }),
    );
    contactShadow.rotation.x = -Math.PI / 2;
    contactShadow.position.set(0, -1.04, 0.2);
    scene.add(contactShadow);

    const camera = new THREE.OrthographicCamera(-10, 10, 5, -5, 0.1, 150);
    const homePosition = new THREE.Vector3(-8, 19, 22);
    const homeTarget = new THREE.Vector3(0, 0.35, 0);
    const homeSpherical = new THREE.Spherical().setFromVector3(homePosition.clone().sub(homeTarget));
    const animatedSpherical = new THREE.Spherical();
    camera.position.copy(homePosition);
    const controls = new OrbitControls(camera, renderer.domElement);
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reducedMotion = motionQuery.matches;
    const updateMotion = () => { reducedMotion = motionQuery.matches; controls.enableDamping = !reducedMotion; };
    motionQuery.addEventListener('change', updateMotion);
    controls.target.copy(homeTarget);
    controls.enableDamping = !reducedMotion;
    controls.dampingFactor = 0.075;
    controls.enablePan = false;
    controls.rotateSpeed = 0.65;
    controls.zoomSpeed = 0.65;
    controls.minZoom = 0.62;
    controls.maxZoom = 1.9;
    controls.minPolarAngle = 0.06;
    controls.maxPolarAngle = Math.PI * 0.83;
    controls.update();

    const resize = () => {
      const width = Math.max(host.clientWidth, 1);
      const height = Math.max(host.clientHeight, 1);
      const aspect = width / height;
      const visibleHeight = Math.max(10.2, 19.8 / aspect);
      camera.left = -visibleHeight * aspect / 2;
      camera.right = visibleHeight * aspect / 2;
      camera.top = visibleHeight / 2;
      camera.bottom = -visibleHeight / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    let visible = true;
    const intersectionObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    intersectionObserver.observe(host);

    let resetAnimation: { start: number; spherical: THREE.Spherical; targetTheta: number; zoom: number } | null = null;
    let zoomAnimation: { start: number; from: number; to: number } | null = null;
    const cancelCameraAnimation = () => { resetAnimation = null; zoomAnimation = null; controls.enabled = true; };
    controls.addEventListener('start', cancelCameraAnimation);
    apiRef.current = {
      focus: () => host.focus({ preventScroll: true }),
      reset: () => {
        controls.enableDamping = false;
        controls.update();
        controls.enableDamping = !reducedMotion;
        zoomAnimation = null;
        if (reducedMotion) {
          camera.position.copy(homePosition);
          camera.zoom = 1;
          controls.target.copy(homeTarget);
          camera.updateProjectionMatrix();
          controls.update();
        } else {
          const spherical = new THREE.Spherical().setFromVector3(camera.position.clone().sub(homeTarget));
          const angle = THREE.MathUtils.euclideanModulo(homeSpherical.theta - spherical.theta + Math.PI, Math.PI * 2) - Math.PI;
          resetAnimation = { start: performance.now(), spherical, targetTheta: spherical.theta + angle, zoom: camera.zoom };
          controls.enabled = false;
        }
      },
      zoom: (direction) => {
        resetAnimation = null;
        controls.enabled = true;
        const to = THREE.MathUtils.clamp((zoomAnimation?.to ?? camera.zoom) * (direction > 0 ? 1.16 : 1 / 1.16), controls.minZoom, controls.maxZoom);
        zoomAnimation = { start: performance.now(), from: camera.zoom, to };
      },
    };

    let audio: AudioContext | null = null;
    let noiseBuffer: AudioBuffer | null = null;
    function playSound(code: string) {
      if (!propsRef.current.sound) return;
      try {
        audio ??= new AudioContext();
        if (audio.state === 'suspended') void audio.resume().catch(() => {});
        const time = audio.currentTime;
        if (!noiseBuffer) {
          noiseBuffer = audio.createBuffer(1, Math.floor(audio.sampleRate * 0.065), audio.sampleRate);
          const channel = noiseBuffer.getChannelData(0);
          for (let index = 0; index < channel.length; index++) channel[index] = Math.random() * 2 - 1;
        }
        const noise = audio.createBufferSource();
        noise.buffer = noiseBuffer;
        const filter = audio.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = code === 'Space' ? 1200 : 2100;
        const noiseGain = audio.createGain();
        noiseGain.gain.setValueAtTime(0.16, time);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 0.06);
        noise.connect(filter).connect(noiseGain).connect(audio.destination);
        noise.start(time);
        noise.stop(time + 0.065);
        noise.onended = () => { noise.disconnect(); filter.disconnect(); noiseGain.disconnect(); };
        const oscillator = audio.createOscillator();
        const bodyGain = audio.createGain();
        oscillator.frequency.setValueAtTime(code === 'Space' ? 180 : 265, time);
        oscillator.frequency.exponentialRampToValueAtTime(90, time + 0.04);
        bodyGain.gain.setValueAtTime(0.1, time);
        bodyGain.gain.exponentialRampToValueAtTime(0.001, time + 0.075);
        oscillator.connect(bodyGain).connect(audio.destination);
        oscillator.start(time);
        oscillator.stop(time + 0.08);
        oscillator.onended = () => { oscillator.disconnect(); bodyGain.disconnect(); };
      } catch {
        // Audio is an optional enhancement; browser audio policy never blocks typing.
      }
    }

    const heldKeys = new Set<string>();
    const releaseKeys = () => { heldKeys.clear(); model.releaseKeys(); };
    const keyDown = (event: KeyboardEvent) => {
      if (
        !propsRef.current.experience || isEditing(event.target) || event.isComposing ||
        event.ctrlKey || event.metaKey || event.altKey ||
        !/^(Key[A-Z]|Space)$/.test(event.code)
      ) return;
      if (event.code === 'Space' && event.target instanceof Element && event.target.closest('button, a, [role="switch"], [role="radio"], summary')) return;
      if (event.code === 'Space') event.preventDefault();
      if (heldKeys.has(event.code)) return;
      heldKeys.add(event.code);
      model.setKey(event.code, true);
      model.pulseKey(event.code, performance.now() / 1000);
      propsRef.current.onKey(event.code, event.code === 'Space' ? 'SPACE' : event.code.slice(3));
      playSound(event.code);
    };
    const keyUp = (event: KeyboardEvent) => { heldKeys.delete(event.code); model.setKey(event.code, false); };
    const focusIn = (event: FocusEvent) => { if (isEditing(event.target)) releaseKeys(); };
    const visibilityChange = () => { if (document.hidden) releaseKeys(); };
    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);
    window.addEventListener('blur', releaseKeys);
    window.addEventListener('focusin', focusIn);
    document.addEventListener('visibilitychange', visibilityChange);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let pointerStart: { x: number; y: number; time: number; id: number } | null = null;
    const hitAt = (event: PointerEvent) => {
      const bounds = renderer.domElement.getBoundingClientRect();
      pointer.set((event.clientX - bounds.left) / bounds.width * 2 - 1, -(event.clientY - bounds.top) / bounds.height * 2 + 1);
      raycaster.setFromCamera(pointer, camera);
      return raycaster.intersectObjects(model.hits, false)[0]?.object;
    };
    const pointerDown = (event: PointerEvent) => {
      if (!event.isPrimary) { pointerStart = null; return; }
      pointerStart = { x: event.clientX, y: event.clientY, time: performance.now(), id: event.pointerId };
      host.focus({ preventScroll: true });
      renderer.domElement.style.cursor = 'grabbing';
    };
    const pointerMove = (event: PointerEvent) => {
      if (pointerStart) return;
      renderer.domElement.style.cursor = propsRef.current.experience && hitAt(event) ? 'pointer' : 'grab';
    };
    const pointerUp = (event: PointerEvent) => {
      if (
        pointerStart && pointerStart.id === event.pointerId && propsRef.current.experience &&
        Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y) < 7 &&
        performance.now() - pointerStart.time < 650
      ) {
        const hit = hitAt(event);
        if (hit) {
          const code = hit.userData.code as string;
          model.pulseKey(code, performance.now() / 1000);
          propsRef.current.onKey(code, code === 'Space' ? 'SPACE' : String(hit.userData.label).toUpperCase());
          playSound(code);
        }
      }
      pointerStart = null;
      renderer.domElement.style.cursor = 'grab';
    };
    const pointerCancel = () => { pointerStart = null; renderer.domElement.style.cursor = 'grab'; };
    renderer.domElement.addEventListener('pointerdown', pointerDown);
    renderer.domElement.addEventListener('pointermove', pointerMove);
    renderer.domElement.addEventListener('pointerup', pointerUp);
    renderer.domElement.addEventListener('pointercancel', pointerCancel);
    renderer.domElement.addEventListener('lostpointercapture', pointerCancel);
    let contextLost = false;
    const onContextLost = (event: Event) => {
      event.preventDefault();
      contextLost = true;
      releaseKeys();
      setError('图形上下文暂时中断。请点击重新载入，当前搭配不会丢失。');
    };
    const onContextRestored = () => { setReload((value) => value + 1); };
    renderer.domElement.addEventListener('webglcontextlost', onContextLost);
    renderer.domElement.addEventListener('webglcontextrestored', onContextRestored);

    let frame = 0;
    let lastTime = performance.now();
    let firstFrame = true;
    const render = (now: number) => {
      frame = requestAnimationFrame(render);
      const delta = Math.min((now - lastTime) / 1000, 0.04);
      lastTime = now;
      if (!visible || document.hidden || contextLost) return;
      if (resetAnimation) {
        const progress = Math.min((now - resetAnimation.start) / 650, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        animatedSpherical.set(
          THREE.MathUtils.lerp(resetAnimation.spherical.radius, homeSpherical.radius, ease),
          THREE.MathUtils.lerp(resetAnimation.spherical.phi, homeSpherical.phi, ease),
          THREE.MathUtils.lerp(resetAnimation.spherical.theta, resetAnimation.targetTheta, ease),
        );
        camera.position.setFromSpherical(animatedSpherical).add(homeTarget);
        camera.zoom = THREE.MathUtils.lerp(resetAnimation.zoom, 1, ease);
        controls.target.copy(homeTarget);
        camera.updateProjectionMatrix();
        if (progress === 1) { resetAnimation = null; controls.enabled = true; }
      } else if (zoomAnimation) {
        const progress = reducedMotion ? 1 : Math.min((now - zoomAnimation.start) / 220, 1);
        camera.zoom = THREE.MathUtils.lerp(zoomAnimation.from, zoomAnimation.to, 1 - Math.pow(1 - progress, 3));
        camera.updateProjectionMatrix();
        if (progress === 1) zoomAnimation = null;
      }
      controls.update();
      const modelMoved = model.update(delta, now / 1000, propsRef.current.exploded, reducedMotion);
      floor.position.y = model.root.position.y - 1.05;
      contactShadow.position.y = floor.position.y + 0.01;
      contactShadow.scale.setScalar(model.root.scale.x);
      renderer.shadowMap.needsUpdate = firstFrame || modelMoved;
      renderer.render(scene, camera);
      if (firstFrame) { firstFrame = false; setLoading(false); }
    };
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      motionQuery.removeEventListener('change', updateMotion);
      controls.removeEventListener('start', cancelCameraAnimation);
      controls.dispose();
      window.removeEventListener('keydown', keyDown);
      window.removeEventListener('keyup', keyUp);
      window.removeEventListener('blur', releaseKeys);
      window.removeEventListener('focusin', focusIn);
      document.removeEventListener('visibilitychange', visibilityChange);
      renderer.domElement.removeEventListener('pointerdown', pointerDown);
      renderer.domElement.removeEventListener('pointermove', pointerMove);
      renderer.domElement.removeEventListener('pointerup', pointerUp);
      renderer.domElement.removeEventListener('pointercancel', pointerCancel);
      renderer.domElement.removeEventListener('lostpointercapture', pointerCancel);
      renderer.domElement.removeEventListener('webglcontextlost', onContextLost);
      renderer.domElement.removeEventListener('webglcontextrestored', onContextRestored);
      if (audio) void audio.close().catch(() => {});
      const geometries = new Set<THREE.BufferGeometry>();
      const materials = new Set<THREE.Material>();
      const textures = new Set<THREE.Texture>();
      scene.traverse((object) => {
        if (object instanceof THREE.InstancedMesh) object.dispose();
        if (object instanceof THREE.Mesh) {
          geometries.add(object.geometry);
          (Array.isArray(object.material) ? object.material : [object.material]).forEach((material) => {
            materials.add(material);
            Object.values(material).forEach((value) => { if (value instanceof THREE.Texture) textures.add(value); });
          });
        }
      });
      textures.forEach((texture) => texture.dispose());
      materials.forEach((material) => material.dispose());
      geometries.forEach((geometry) => geometry.dispose());
      environment.dispose();
      keyLight.shadow.map?.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
      modelRef.current = null;
      apiRef.current = null;
    };
  }, [reload]);

  return (
    <div className={`scene-viewport ${loading ? 'is-loading' : 'is-ready'}`}>
      <div
        className="scene-canvas"
        ref={hostRef}
        tabIndex={0}
        role="group"
        aria-label="Forma 68 交互式三维键盘。拖动旋转，滚轮或双指缩放；开启体验后按 A 至 Z、空格或点击键帽。"
      />
      {loading && <div className="scene-loading"><LoaderCircle size={18} className="spin" /><span>正在准备你的 Forma</span></div>}
      {error && (
        <div className="scene-error" role="alert">
          <span className="eyebrow">3D PREVIEW</span>
          <p>{error}</p>
          <button className="text-button" onClick={() => setReload((value) => value + 1)}><RotateCcw size={14} />重新载入</button>
        </div>
      )}
    </div>
  );
});