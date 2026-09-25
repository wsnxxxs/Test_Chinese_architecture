import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

import { generateWorld } from './world/generate.js';
import { buildFar } from './world/far.js';
import { meshGrid } from './voxel/mesher.js';
import { createVoxelMaterial, voxelUniforms } from './scene/materials.js';
import { createSky } from './scene/sky.js';
import { TimeOfDay } from './scene/timeOfDay.js';
import { createWater, createKoi } from './scene/water.js';
import { createClouds } from './scene/clouds.js';
import { createBirds } from './scene/birds.js';
import { createSmoke, createPetals, createGlow, createSkyLanterns, createFireflies, pointScale } from './scene/particles.js';
import { createPeople } from './scene/people.js';
import { createLabels } from './scene/labels.js';
import { VIEWS } from './scene/views.js';
import { ORIGIN, SX, SY, SZ } from './world/layout.js';
import { setupUI } from './ui.js';

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);
// yield to the browser so the loading screen can repaint; the timeout keeps loading going in hidden tabs
const nextFrame = () =>
  new Promise((resolve) => {
    let done = false;
    const go = () => {
      if (!done) {
        done = true;
        resolve();
      }
    };
    requestAnimationFrame(go);
    setTimeout(go, 100);
  });

function setProgress(p, text) {
  const bar = $('loading-bar');
  if (bar) bar.style.width = `${Math.round(p * 100)}%`;
  if (text && $('loading-text')) $('loading-text').textContent = text;
}

// quality presets: shadow-map size, max pixel ratio, MSAA samples, bloom, optional scenery
const LEVELS = {
  high: { label: '高', shadow: 4096, prMax: 2, maxPixels: 5.2e6, samples: 4, bloom: true, shadows: true, far2: true, clouds: true, people: 34, petals: 420 },
  medium: { label: '中', shadow: 2048, prMax: 1.5, maxPixels: 3.2e6, samples: 4, bloom: true, shadows: true, far2: true, clouds: true, people: 24, petals: 260 },
  low: { label: '低', shadow: 1024, prMax: 1, maxPixels: 2.1e6, samples: 0, bloom: false, shadows: true, far2: true, clouds: false, people: 12, petals: 100 },
  // shadows stay on even here: the shadow map is static, so they cost almost nothing per frame
  lite: { label: '极简', shadow: 1024, prMax: 0.75, maxPixels: 1.3e6, samples: 0, bloom: false, shadows: true, far2: false, clouds: false, people: 0, petals: 0 },
};
const LEVEL_ORDER = ['high', 'medium', 'low', 'lite'];

async function main() {
  setProgress(0.04, '正在搭建场景…');
  await nextFrame();

  // ---- renderer / scene / camera ---------------------------------------------------------
  const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance', stencil: false });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.shadowMap.autoUpdate = false;
  renderer.info.autoReset = false;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  $('app').appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0xcfd8dc, 0.0008);

  const camera = new THREE.PerspectiveCamera(32, window.innerWidth / window.innerHeight, 2, 6000);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.075;
  controls.maxPolarAngle = Math.PI * 0.492;
  controls.minDistance = 14;
  controls.maxDistance = 1250;
  controls.zoomToCursor = true;
  controls.autoRotateSpeed = 0.45;
  controls.screenSpacePanning = false;

  // ---- lights ------------------------------------------------------------------------------
  const hemi = new THREE.HemisphereLight(0xb0d0f5, 0x8f8468, 1.0);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff0d8, 3);
  sun.castShadow = true;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.35;
  sun.shadow.radius = 1.7;
  scene.add(sun, sun.target);
  const fill = new THREE.DirectionalLight(0xb8cef0, 0.3);
  scene.add(fill);
  const sky = createSky();
  scene.add(sky.mesh);

  // ---- quality / post-processing -----------------------------------------------------------
  const app = { THREE, renderer, scene, camera, controls, sun, params, LEVELS };
  // software rasterisers (SwiftShader / llvmpipe) cannot keep 30fps with millions of triangles
  let gpuName = '';
  try {
    const gl = renderer.getContext();
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    gpuName = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : '';
  } catch (e) {
    gpuName = '';
  }
  app.gpuName = gpuName;
  // HDR (half-float) render targets need one of these extensions; without them we render 8-bit and skip bloom
  const gl0 = renderer.getContext();
  const hdrTargets = !!(gl0.getExtension('EXT_color_buffer_float') || gl0.getExtension('EXT_color_buffer_half_float'));
  app.hdrTargets = hdrTargets;
  const softGpu = /swiftshader|llvmpipe|softpipe|software|basic render/i.test(gpuName);
  const qParam = params.get('q');
  app.qualityMode = qParam && LEVELS[qParam] ? qParam : 'auto';
  const coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches; // phones / tablets
  const autoLevel = () => (softGpu ? 'lite' : coarse ? 'medium' : 'high');
  app.level = app.qualityMode === 'auto' ? autoLevel() : app.qualityMode;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let pixelRatio = Math.min(dpr, LEVELS[app.level].prMax);
  let composer = null;
  let bloom = null;

  function rebuildComposer() {
    const cfg = LEVELS[app.level];
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (composer) {
      // free the previous chain's GPU resources (render targets, bloom mips, fullscreen quads)
      for (const p of composer.passes) p.dispose?.();
      composer.dispose();
    }
    // pixel budget: never render more pixels than the preset allows (4K / retina screens)
    const pr = Math.max(0.5, Math.min(pixelRatio, Math.sqrt(cfg.maxPixels / (w * h))));
    app.pr = pr;
    renderer.setPixelRatio(pr);
    renderer.setSize(w, h);
    const rt = new THREE.WebGLRenderTarget(Math.floor(w * pr), Math.floor(h * pr), {
      type: hdrTargets ? THREE.HalfFloatType : THREE.UnsignedByteType,
      samples: cfg.samples,
    });
    composer = new EffectComposer(renderer, rt);
    composer.setPixelRatio(pr);
    composer.setSize(w, h);
    composer.addPass(new RenderPass(scene, camera));
    bloom = new UnrealBloomPass(new THREE.Vector2(w, h), 0.4, 0.55, 1.05);
    bloom.enabled = cfg.bloom && hdrTargets && pr >= 0.75;
    composer.addPass(bloom);
    composer.addPass(new OutputPass());
    if (app.tod) app.tod.bloom = bloom;
    pointScale.value = (h * pr) / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
    app.composer = composer;
  }

  function applyShadowSize() {
    const n = LEVELS[app.level].shadow;
    sun.shadow.mapSize.set(n, n);
    if (sun.shadow.map) {
      sun.shadow.map.dispose();
      sun.shadow.map = null;
    }
    renderer.shadowMap.needsUpdate = true;
  }
  applyShadowSize();
  rebuildComposer();

  /** apply everything that depends on the quality level */
  function applyLevel() {
    const cfg = LEVELS[app.level];
    pixelRatio = Math.min(dpr, cfg.prMax);
    sun.castShadow = cfg.shadows;
    renderer.shadowMap.enabled = cfg.shadows;
    applyShadowSize();
    rebuildComposer();
    if (app.optional) {
      const o = app.optional;
      o.far2.visible = cfg.far2;
      o.clouds.visible = cfg.clouds && !params.get('noclouds');
      o.people.setCount(cfg.people);
      o.petals.setCount(cfg.petals);
      o.birds.visible = cfg.people > 0 || cfg.clouds;
      for (const n of o.night) n.visible = cfg.people > 0;
    }
    if (app.tod) app.tod.apply(true);
  }

  /** save the current frame as a PNG (rendered again right before reading the canvas) */
  app.screenshot = () => {
    composer.render();
    renderer.domElement.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `voxel-temple-${Date.now()}.png`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    }, 'image/png');
  };

  app.setQuality = (mode) => {
    app.qualityMode = mode;
    app.level = mode === 'auto' ? autoLevel() : mode;
    applyLevel();
  };

  // ---- world -----------------------------------------------------------------------------------
  setProgress(0.12, '堆叠体素…');
  await nextFrame();
  const t0 = performance.now();
  const world = generateWorld();
  const t1 = performance.now();
  setProgress(0.5, '生成网格与环境光遮蔽…');
  await nextFrame();

  const material = createVoxelMaterial();
  const chunks = meshGrid(world.grid, { chunk: 32, scale: 1, offset: [ORIGIN.x, ORIGIN.y, ORIGIN.z], aoMin: 0.5 });
  const worldGroup = new THREE.Group();
  let faces = 0;
  for (const c of chunks) {
    const m = new THREE.Mesh(c.geometry, material);
    m.castShadow = true;
    m.receiveShadow = true;
    worldGroup.add(m);
    faces += c.faces;
  }
  scene.add(worldGroup);
  const t2 = performance.now();

  setProgress(0.72, '远山叠翠…');
  await nextFrame();
  const far1 = new THREE.Group();
  const far2 = new THREE.Group();
  const farMaterial = createVoxelMaterial({ fogBoost: 1.6, fogTint: 0.6 });
  let farFaces = 0;
  let ringIndex = 0;
  for (const ring of buildFar()) {
    const cs = meshGrid(ring.grid, { chunk: 32, scale: ring.scale, offset: ring.offset, aoMin: ringIndex === 0 ? 0.86 : 0.9 });
    for (const c of cs) {
      const m = new THREE.Mesh(c.geometry, ringIndex === 0 ? material : farMaterial);
      m.castShadow = false;
      m.receiveShadow = false;
      (ringIndex === 0 ? far1 : far2).add(m);
      farFaces += c.faces;
    }
    ringIndex++;
  }
  if (!params.get('nofar')) scene.add(far1, far2);
  const t3 = performance.now();
  console.log(
    `[voxel] world ${(t1 - t0).toFixed(0)}ms, mesh ${(t2 - t1).toFixed(0)}ms (${faces} faces), far ${(t3 - t2).toFixed(0)}ms (${farFaces} faces)`,
  );

  // ---- life & atmosphere -------------------------------------------------------------------------
  setProgress(0.86, '点缀水色云影…');
  await nextFrame();
  const water = createWater(world.maps);
  scene.add(water.mesh);
  const koi = createKoi(10);
  scene.add(koi.mesh);
  const clouds = createClouds();
  scene.add(clouds.mesh);
  const birds = createBirds(15, { x: 0, y: 112, z: -95 });
  scene.add(birds.group);

  const toWorld = (p) => [p[0] + 0.5 + ORIGIN.x, p[1] + ORIGIN.y, p[2] + 0.5 + ORIGIN.z];
  const censerAnchors = world.anchors.censers.map(toWorld);
  const smoke = createSmoke(censerAnchors, 34);
  scene.add(smoke.points);
  const petals = createPetals({ size: { x: 230, y: 90, z: 330 }, center: { x: 0, y: 48, z: -20 } }, 420);
  scene.add(petals.points);
  const glow = createGlow(world.glow.map((g) => [g[0] + ORIGIN.x, g[1] + ORIGIN.y, g[2] + ORIGIN.z, g[3], g[4]]));
  scene.add(glow.points);
  const people = createPeople(world.grid, 34);
  scene.add(people.group);
  const skyLanterns = createSkyLanterns(46);
  scene.add(skyLanterns.points);
  const fireflies = createFireflies(90);
  scene.add(fireflies.points);
  app.optional = { far2, clouds: clouds.mesh, people, petals, birds: birds.group, night: [skyLanterns.points, fireflies.points] };

  // ---- time of day -----------------------------------------------------------------------------------
  const shadowBox = new THREE.Box3(
    new THREE.Vector3(ORIGIN.x, 0, ORIGIN.z),
    new THREE.Vector3(ORIGIN.x + SX, SY, ORIGIN.z + SZ),
  );
  const tod = new TimeOfDay({ scene, renderer, sun, hemi, fill, sky, bloom, shadowBox });
  app.tod = tod;
  const smokeColor = new THREE.Color();
  tod.onChange((K) => {
    water.update(K, tod.keyDir, tod.sunFade, tod.moonFade, app.elapsed ?? 0);
    smokeColor.copy(K.hemiS).lerp(new THREE.Color(1, 1, 1), 0.55).multiplyScalar(0.55 + 0.5 * Math.min(1, tod.sunFade + 0.2));
    smoke.material.uniforms.uColor.value.copy(smokeColor);
    petals.material.uniforms.uLight.value = 0.16 + 0.84 * Math.min(1, tod.sunFade + 0.1);
    glow.material.uniforms.uStrength.value = K.glow * 0.85;
    // rising sky lanterns and fireflies appear once the stars come out
    const nightK = THREE.MathUtils.clamp((K.stars - 0.2) * 1.4, 0, 1);
    skyLanterns.material.uniforms.uStrength.value = nightK;
    fireflies.material.uniforms.uStrength.value = nightK * 0.9;
    clouds.update(0, K);
    app.syncTime?.();
  });
  tod.set(parseFloat(params.get('t') ?? '0.715'));
  applyLevel();

  // ---- labels ------------------------------------------------------------------------------------------
  const labels = createLabels($('labels'), world.anchors.labels, (it) => app.flyTo(it.focus, it.dist));
  app.labelsOn = true;

  // ---- camera views -----------------------------------------------------------------------------------
  let camTween = null;
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  function viewPose(name) {
    const aspect = window.innerWidth / window.innerHeight;
    // tall screens: the whole compound is fitted along its long (north-south) axis instead
    const v = name === 'overview' && aspect < 0.95 ? VIEWS.overviewPortrait : VIEWS[name];
    const target = new THREE.Vector3(...v.target);
    const pos = new THREE.Vector3(...v.pos);
    // narrow screens need a bit more distance for the detail views
    let k = 1;
    if (name === 'overview' && aspect < 0.95) k = THREE.MathUtils.clamp(0.95 / Math.max(aspect, 0.4), 1, 1.5);
    else if (aspect < 1.5) k = Math.min(1.9, 1.6 / Math.max(aspect, 0.5) * 0.85 + 0.05);
    pos.sub(target).multiplyScalar(Math.max(1, k)).add(target);
    return { pos, target };
  }
  app.goView = (name, instant = false) => {
    const { pos, target } = viewPose(name);
    app.onViewChange?.(name);
    app.view = name;
    if (instant) {
      camera.position.copy(pos);
      controls.target.copy(target);
      controls.update();
      return;
    }
    camTween = {
      t: 0,
      dur: 1.9,
      p0: camera.position.clone(),
      t0: controls.target.clone(),
      p1: pos,
      t1: target,
    };
  };
  /** fly to look at a point from about `dist` away, keeping the current viewing direction */
  app.flyTo = (target, dist) => {
    const dir = camera.position.clone().sub(target);
    dir.y = 0;
    if (dir.lengthSq() < 1) dir.set(-0.45, 0, 1);
    dir.normalize();
    const el = THREE.MathUtils.degToRad(24);
    const pos = target.clone().addScaledVector(dir, Math.cos(el) * dist);
    pos.y = target.y + Math.sin(el) * dist;
    app.onViewChange?.(null);
    app.view = null;
    camTween = { t: 0, dur: 1.7, p0: camera.position.clone(), t0: controls.target.clone(), p1: pos, t1: target.clone() };
  };
  controls.addEventListener('start', () => {
    camTween = null;
    app.onViewChange?.(null);
  });

  // ---- time tween ------------------------------------------------------------------------------------------
  let timeTween = null;
  app.tweenTime = (target) => {
    tod.auto = false;
    $('btn-cycle')?.classList.remove('on');
    let d = target - tod.t;
    if (d > 0.5) d -= 1;
    if (d < -0.5) d += 1;
    timeTween = { from: tod.t, d, t: 0, dur: 1.4 };
  };
  app.cancelTimeTween = () => {
    timeTween = null;
  };

  // ---- resize ------------------------------------------------------------------------------------------------
  function onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    rebuildComposer();
    if (app.view && !camTween) app.goView(app.view, true);
  }
  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(onResize, 120);
  });

  setupUI(app);
  const setQ = $('btn-quality');
  if (setQ) setQ.textContent = `画质·${{ auto: '自动', high: '高', medium: '中', low: '低', lite: '极简' }[app.qualityMode]}`;
  app.goView(params.get('view') ?? 'overview', true);

  // ---- loop ----------------------------------------------------------------------------------------------------
  const centerRef = new THREE.Vector3(0, 30, -20);
  const slowMs = parseFloat(params.get('slow') || '0') || 0;
  const state = { last: performance.now(), acc: 0, frames: 0, slow: 0, fast: 0, born: performance.now() };
  app.elapsed = 0;
  let statText = '';
  renderer.setAnimationLoop(() => {
    const now = performance.now();
    const dt = Math.min((now - state.last) / 1000, 0.1);
    state.last = now;
    app.elapsed += dt;

    if (camTween) {
      camTween.t += dt / camTween.dur;
      const k = ease(Math.min(1, camTween.t));
      camera.position.lerpVectors(camTween.p0, camTween.p1, k);
      controls.target.lerpVectors(camTween.t0, camTween.t1, k);
      if (camTween.t >= 1) camTween = null;
    }
    if (timeTween) {
      timeTween.t += dt / timeTween.dur;
      const k = ease(Math.min(1, timeTween.t));
      tod.set(timeTween.from + timeTween.d * k, true);
      if (timeTween.t >= 1) timeTween = null;
    }
    controls.update();
    // keep the orbit target inside the scene
    controls.target.x = THREE.MathUtils.clamp(controls.target.x, -420, 420);
    controls.target.z = THREE.MathUtils.clamp(controls.target.z, -520, 420);
    controls.target.y = THREE.MathUtils.clamp(controls.target.y, 0, 160);

    tod.update(dt, app.elapsed);
    // keep the atmosphere readable when zoomed far out: thin the fog with camera distance
    const camDist = camera.position.distanceTo(centerRef);
    scene.fog.density = (tod.state ? tod.state.fd : 0.0008) * 0.6 * THREE.MathUtils.clamp(460 / camDist, 0.3, 1.0);
    // gentle lantern flicker
    voxelUniforms.uGlow.value = (tod.state ? tod.state.glow * 2.4 : 0) * (1 + 0.035 * Math.sin(app.elapsed * 8.3) + 0.025 * Math.sin(app.elapsed * 3.7 + 1.3));
    water.uniforms.uTime.value = app.elapsed;
    koi.update(app.elapsed);
    clouds.update(dt, null);
    birds.update(app.elapsed);
    people.update(dt);
    smoke.material.uniforms.uTime.value = app.elapsed;
    petals.material.uniforms.uTime.value = app.elapsed;
    glow.material.uniforms.uTime.value = app.elapsed;
    skyLanterns.material.uniforms.uTime.value = app.elapsed;
    fireflies.material.uniforms.uTime.value = app.elapsed;
    sky.mesh.position.copy(camera.position);
    labels.update(camera, window.innerWidth, window.innerHeight, app.labelsOn);

    renderer.info.reset();
    composer.render();
    if (slowMs > 0) {
      // debug: emulate a slow device to exercise the adaptive-quality logic (?slow=40)
      const t = performance.now();
      while (performance.now() - t < slowMs);
    }

    // ---- stats + adaptive quality --------------------------------------------------------------
    state.acc += dt;
    state.frames++;
    if (state.acc >= 0.6) {
      const fps = state.frames / state.acc;
      state.acc = 0;
      state.frames = 0;
      const info = renderer.info;
      const tris = info.render.triangles;
      statText = `FPS ${fps.toFixed(0)} · ${(tris / 1000).toFixed(0)}k 三角面 · ${LEVELS[app.level].label} · ${app.pr.toFixed(2)}×`;
      $('stats').textContent = statText;
      app.fps = fps;
      // adaptive quality: first shrink the render resolution, then step the whole preset down
      const warm = now - state.born > 4500 && document.visibilityState === 'visible';
      if (app.qualityMode === 'auto' && warm) {
        const cfg = LEVELS[app.level];
        if (fps < 32) {
          state.slow++;
          state.fast = 0;
          if (state.slow >= 2) {
            state.slow = 0;
            const eff = Math.min(pixelRatio, app.pr); // the pixel budget may already cap the target
            if (eff > 0.62) {
              pixelRatio = Math.max(0.62, eff * 0.84);
              rebuildComposer();
            } else if (LEVEL_ORDER.indexOf(app.level) < LEVEL_ORDER.length - 1) {
              app.level = LEVEL_ORDER[LEVEL_ORDER.indexOf(app.level) + 1];
              state.lockUntil = now + 45000; // no upgrades for a while after a downgrade
              applyLevel();
            }
          }
        } else if (fps > 58) {
          state.fast++;
          state.slow = 0;
          const budget = Math.sqrt(cfg.maxPixels / (window.innerWidth * window.innerHeight));
          const max = Math.min(dpr, cfg.prMax, budget);
          if (state.fast >= 8 && app.pr < max - 0.01) {
            pixelRatio = Math.min(max, app.pr * 1.06);
            rebuildComposer();
            state.fast = 0;
          } else if (state.fast >= 14 && app.pr >= max - 0.01 && now > (state.lockUntil ?? 0)) {
            // plenty of head-room at full resolution: try the next richer preset (never above the auto ceiling)
            const ceiling = LEVEL_ORDER.indexOf(autoLevel());
            const i = LEVEL_ORDER.indexOf(app.level);
            if (i > ceiling) {
              app.level = LEVEL_ORDER[i - 1];
              state.lockUntil = now + 30000;
              state.fast = 0;
              applyLevel();
            }
          }
        } else {
          state.slow = 0;
          state.fast = 0;
        }
      }
    }
  });

  Object.assign(app, { world, water, koi, clouds, birds, people, smoke, petals, glow, labels, faces, farFaces, chunks });
  window.app = app;
  setProgress(1, '');
  $('loading').classList.add('done');
  app.bootMs = performance.now();
  console.log(
    `[boot] ready in ${app.bootMs.toFixed(0)}ms | GPU: ${app.gpuName || 'n/a'} | level: ${app.level} | ` +
      `visible faces: ${faces + farFaces} (${faces} detail + ${farFaces} far)`,
  );
}

main().catch((e) => {
  console.error(e);
  const f = $('fatal');
  f.style.display = 'flex';
  const msg = e && e.message ? e.message : String(e);
  f.innerHTML = '';
  const p = document.createElement('div');
  p.textContent = '加载失败：' + msg;
  const hint = document.createElement('div');
  hint.style.opacity = '0.7';
  hint.style.marginTop = '10px';
  hint.textContent = /webgl/i.test(msg) ? '请使用支持 WebGL2 的现代浏览器，并确认已开启硬件加速。' : '请刷新页面重试，或查看浏览器控制台。';
  f.append(p, hint);
  $('loading')?.classList.add('done');
});
