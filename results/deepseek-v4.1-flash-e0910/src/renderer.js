/**
 * Three.js rendering layer.
 *
 * Everything voxel is drawn with one THREE.InstancedMesh per palette key (a shared 1x1x1
 * BoxGeometry), so the entire complex costs one draw call per colour plus a handful of
 * non-voxel objects (sky dome, sun disc, base slab, water tint). No per-voxel Mesh objects
 * are created anywhere.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { PALETTE, MATERIAL_STYLES } from './palette.js';
import { PRESETS, PRESET_ORDER, lerpPreset, sunDirection } from './time-of-day.js';
import { symHash } from './rng.js';

const UP = new THREE.Vector3(0, 1, 0);

/**
 * Preset colours are authored as sRGB; three.js works in linear-sRGB. Feeding sRGB
 * numbers straight into `setRGB` would brighten and wash out the whole image, so every
 * colour coming from time-of-day.js goes through this helper.
 * Accepts either a 0xRRGGBB integer (raw PRESETS entry) or an [r,g,b] array
 * (what lerpPreset returns) — mixing the two shapes silently produced NaN colours.
 */
function setSrgb(target, rgb) {
  if (Array.isArray(rgb)) return target.setRGB(rgb[0], rgb[1], rgb[2], THREE.SRGBColorSpace);
  return target.setHex(rgb, THREE.SRGBColorSpace);
}

function makeMaterial(key) {
  const { hex, style } = PALETTE[key];
  const cfg = MATERIAL_STYLES[style];
  const mat = new THREE.MeshStandardMaterial({
    color: hex,
    roughness: cfg.roughness,
    metalness: cfg.metalness,
  });
  if (cfg.transparent) {
    mat.transparent = true;
    mat.opacity = cfg.opacity;
    mat.depthWrite = true;
  }
  if (cfg.emissive) {
    mat.emissive = new THREE.Color(hex);
    mat.emissiveIntensity = 0;
    mat.toneMapped = true;
  }
  mat.name = key;
  return mat;
}

/** Sky dome built from vertex colours so it needs no custom shader (robust + cheap). */
function makeSky() {
  const geo = new THREE.SphereGeometry(900, 24, 16);
  const colors = new Float32Array(geo.attributes.position.count * 3);
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const mat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = -10;
  return mesh;
}

function paintSky(mesh, topRgb, bottomRgb) {
  const pos = mesh.geometry.attributes.position;
  const col = mesh.geometry.attributes.color;
  const top = setSrgb(new THREE.Color(), topRgb);
  const bottom = setSrgb(new THREE.Color(), bottomRgb);
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    // y/radius is sin(elevation): the warm horizon band is kept to the lowest ~13 deg
    const e = THREE.MathUtils.clamp(pos.getY(i) / 900, -1, 1);
    const t = THREE.MathUtils.clamp(0.5 + e * 2.2, 0, 1);
    c.copy(bottom).lerp(top, t);
    col.setXYZ(i, c.r, c.g, c.b);
  }
  col.needsUpdate = true;
}

export function createApp({ container, data }) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(container.clientWidth || window.innerWidth, container.clientHeight || window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  // The scene is static; the shadow map only has to be re-rendered when the sun moves
  // (time-of-day transition) or on resize. This halves the per-frame draw calls and
  // triangles compared with re-rendering shadows every frame.
  renderer.shadowMap.autoUpdate = false;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = PRESETS.dusk.exposure;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = null;

  const camera = new THREE.PerspectiveCamera(45, 16 / 9, 1, 3000);
  camera.position.set(...data.camera.position);
  camera.lookAt(...data.camera.target);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(...data.camera.target);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.rotateSpeed = 0.62;
  controls.zoomSpeed = 0.85;
  controls.panSpeed = 0.7;
  controls.minDistance = 45;
  controls.maxDistance = 620;
  controls.minPolarAngle = 0.12;
  controls.maxPolarAngle = Math.PI * 0.495;   // never dip under the ground plane
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.28;
  controls.update();

  // ---- sky -----------------------------------------------------------------
  const sky = makeSky();
  scene.add(sky);

  const sunDisc = new THREE.Mesh(
    new THREE.SphereGeometry(26, 20, 14),
    new THREE.MeshBasicMaterial({ color: 0xffe6bd, fog: false, toneMapped: false }),
  );
  sunDisc.frustumCulled = false;
  scene.add(sunDisc);

  const halo = new THREE.Mesh(
    new THREE.SphereGeometry(64, 20, 14),
    new THREE.MeshBasicMaterial({ color: 0xffd9a0, fog: false, transparent: true, opacity: 0.16, toneMapped: false }),
  );
  halo.frustumCulled = false;
  scene.add(halo);

  scene.fog = new THREE.Fog(PRESETS.dusk.fog, PRESETS.dusk.fogNear, PRESETS.dusk.fogFar);

  // ---- diorama base slab ---------------------------------------------------
  const b = data.bounds;
  const slabW = b.xMax - b.xMin + 14;
  const slabD = b.zMax - b.zMin + 14;
  const slab = new THREE.Mesh(
    new THREE.BoxGeometry(slabW, 9, slabD),
    new THREE.MeshStandardMaterial({ color: 0x2b2a28, roughness: 0.95, metalness: 0.0 }),
  );
  slab.position.set((b.xMin + b.xMax) / 2, -4.5, (b.zMin + b.zMax) / 2);
  slab.receiveShadow = true;
  slab.castShadow = true;
  scene.add(slab);

  // ---- voxels: one InstancedMesh per palette key ---------------------------
  const boxGeo = new THREE.BoxGeometry(1, 1, 1);
  const materials = new Map();
  const meshes = [];
  const emissiveMeshes = [];
  const dummy = new THREE.Object3D();
  const tint = new THREE.Color();

  for (const [key, group] of data.groups) {
    const mat = makeMaterial(key);
    materials.set(key, mat);
    const mesh = new THREE.InstancedMesh(boxGeo, mat, group.count);
    mesh.name = `voxels:${key}`;
    mesh.castShadow = key !== 'water';
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;   // instance bounds are cheap to skip; never cull by mistake
    const style = PALETTE[key].style;
    const jitter = style === 'ground' ? 0.055 : style === 'wall' ? 0.035 : style === 'foliage' ? 0.08 : 0;
    for (let i = 0; i < group.count; i++) {
      const x = group.xs[i], y = group.ys[i], z = group.zs[i];
      dummy.position.set(x, y + 0.5, z);
      dummy.rotation.set(0, 0, 0);
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      if (jitter > 0) {
        // |x| hash => identical jitter for a voxel and its mirror image
        const v = 1 + (symHash(x, y, z) - 0.5) * 2 * jitter;
        tint.setRGB(v, v, v);
        mesh.setColorAt(i, tint);
      }
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.computeBoundingSphere();
    scene.add(mesh);
    meshes.push(mesh);
    if (style === 'emissive') emissiveMeshes.push(mesh);
  }

  // ---- lights --------------------------------------------------------------
  const hemi = new THREE.HemisphereLight(PRESETS.dusk.hemiSky, PRESETS.dusk.hemiGround, 0.8);
  scene.add(hemi);

  const ambient = new THREE.AmbientLight(0xffffff, 0.18);
  scene.add(ambient);

  const sun = new THREE.DirectionalLight(0xffffff, 2.6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera;
  const span = Math.max(slabW, slabD) * 0.62;
  sc.left = -span; sc.right = span; sc.top = span; sc.bottom = -span;
  sc.near = 1; sc.far = 900;
  sun.shadow.bias = -0.0006;
  sun.shadow.normalBias = 0.09;
  scene.add(sun);
  scene.add(sun.target);
  const siteCentre = new THREE.Vector3((b.xMin + b.xMax) / 2, 8, (b.zMin + b.zMax) / 2);

  // warm night lanterns (no shadows: cheap, and they read as light spill)
  const nightLights = [
    { pos: [0, 12, 58], color: 0xffb45c, intensity: 0 },
    { pos: [0, 14, -8], color: 0xffb45c, intensity: 0 },
    { pos: [0, 26, -56], color: 0xffc978, intensity: 0 },
  ].map((cfg) => {
    const l = new THREE.PointLight(cfg.color, 0, 95, 2);
    l.position.set(...cfg.pos);
    scene.add(l);
    return l;
  });

  // ---- time of day ---------------------------------------------------------
  let fromPreset = 'dusk';
  let toPreset = 'dusk';
  let blend = 1;                       // 0..1 progress from `fromPreset` to `toPreset`
  const BLEND_SECONDS = 1.4;
  let lastBlendAt = 0;
  let current = PRESETS.dusk;

  function applyPreset(p) {
    current = p;
    paintSky(sky, p.skyTop, p.skyBottom);
    const fog = setSrgb(new THREE.Color(), p.fog);
    scene.fog.color.copy(fog);
    scene.fog.near = p.fogNear;
    scene.fog.far = p.fogFar;

    setSrgb(sun.color, p.sunColor);
    sun.intensity = p.sunIntensity;
    const dir = sunDirection(p.sunAzimuth, p.sunElevation);
    const dist = Math.max(slabW, slabD) * 1.5;
    sun.position.set(siteCentre.x + dir[0] * dist, siteCentre.y + dir[1] * dist, siteCentre.z + dir[2] * dist);
    sun.target.position.copy(siteCentre);
    sun.target.updateMatrixWorld();

    setSrgb(sunDisc.material.color, p.sunDisc);
    setSrgb(halo.material.color, p.sunDisc);
    const sd = sunDirection(p.sunAzimuth, p.sunElevation);
    sunDisc.position.set(sd[0] * 760, sd[1] * 760, sd[2] * 760);
    halo.position.copy(sunDisc.position);
    halo.material.opacity = 0.16 * Math.max(0.25, 1 - p.sunElevation / 70);

    setSrgb(hemi.color, p.hemiSky);
    setSrgb(hemi.groundColor, p.hemiGround);
    hemi.intensity = p.hemiIntensity;
    ambient.intensity = p.ambient;
    renderer.toneMappingExposure = p.exposure;

    for (const m of emissiveMeshes) m.material.emissiveIntensity = 1.6 * p.lantern;
    for (const l of nightLights) l.intensity = 95 * p.lantern;
    // the sun moved -> the shadow map has to be re-rendered once
    renderer.shadowMap.needsUpdate = true;

    // guard against a preset/lerp shape mismatch silently producing NaN colours
    const checkColour = (name, c) => {
      const vals = c && c.isColor ? [c.r, c.g, c.b] : Array.isArray(c) ? c : [c];
      if (vals.some((x) => !Number.isFinite(x))) {
        throw new Error(`time-of-day produced an invalid colour for ${name}: ${JSON.stringify(c)}`);
      }
    };
    checkColour('skyTop', p.skyTop);
    checkColour('skyBottom', p.skyBottom);
    checkColour('fog', scene.fog.color);
    checkColour('sun', sun.color);
    checkColour('hemi', hemi.color);
  }

  function setTimeOfDay(name, immediate = false) {
    if (!PRESETS[name]) return false;
    fromPreset = toPreset;
    toPreset = name;
    blend = immediate ? 1 : 0;
    lastBlendAt = performance.now();
    if (immediate) applyPreset(PRESETS[name]);
    return true;
  }

  // ---- loop ----------------------------------------------------------------
  const clock = new THREE.Clock();
  const frameDeltas = [];
  let frames = 0;
  let elapsed = 0;
  let fpsP50 = 0, fpsP95 = 0, fpsAvg = 0;

  function tickFps(dt) {
    if (dt > 0 && dt < 1) {
      frameDeltas.push(dt);
      if (frameDeltas.length > 180) frameDeltas.shift();
      const sorted = [...frameDeltas].sort((a, bb) => a - bb);
      fpsP50 = 1 / sorted[Math.floor(sorted.length * 0.5)];
      fpsP95 = 1 / sorted[Math.max(0, Math.floor(sorted.length * 0.05))];
      fpsAvg = frameDeltas.length / frameDeltas.reduce((a, bb) => a + bb, 0);
    }
  }

  renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), 0.1);
    frames++;
    elapsed += dt;
    tickFps(dt);

    // The transition is driven by wall-clock time, not by accumulated (capped) frame time,
    // so it still completes in ~1.4 s on very slow software renderers.
    if (blend < 1) {
      const now = performance.now();
      if (lastBlendAt === 0) lastBlendAt = now;
      const wall = Math.min(0.5, (now - lastBlendAt) / 1000);
      lastBlendAt = now;
      blend = Math.min(1, blend + wall / BLEND_SECONDS);
      applyPreset(lerpPreset(fromPreset, toPreset, blend));
    }

    // water shimmer
    const t = elapsed;
    const water = materials.get('water');
    if (water) {
      water.color.setHex(PALETTE.water.hex);
      water.color.offsetHSL(0, 0, Math.sin(t * 0.9) * 0.018);
      water.opacity = 0.8 + Math.sin(t * 0.7) * 0.05;
    }
    const waterMesh = meshes.find((m) => m.name === 'voxels:water');
    if (waterMesh) waterMesh.position.y = Math.sin(t * 0.8) * 0.05;

    controls.update();
    renderer.render(scene, camera);
    runPendingCapture();
  });

  // ---- resize --------------------------------------------------------------
  function resize() {
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h, false);
    camera.aspect = w / Math.max(1, h);
    camera.updateProjectionMatrix();
    renderer.shadowMap.needsUpdate = true;
  }
  window.addEventListener('resize', resize);
  resize();

  // ---- debug / verification API -------------------------------------------
  function setView({ azimuthDeg = 0, elevationDeg = 22, distance = null } = {}) {
    const target = controls.target.clone();
    const d = distance ?? camera.position.distanceTo(target);
    const az = (azimuthDeg * Math.PI) / 180;
    const el = (elevationDeg * Math.PI) / 180;
    camera.position.set(
      target.x + Math.sin(az) * Math.cos(el) * d,
      target.y + Math.sin(el) * d,
      target.z + Math.cos(az) * Math.cos(el) * d,
    );
    camera.lookAt(target);
    controls.update();
    return { position: camera.position.toArray(), target: target.toArray(), distance: d };
  }

  function measureFps(durationMs = 3000) {
    return new Promise((resolve) => {
      const deltas = [];
      let last = performance.now();
      const start = last;
      const step = (now) => {
        deltas.push(now - last);
        last = now;
        if (now - start < durationMs) requestAnimationFrame(step);
        else {
          const sorted = deltas.slice(1).sort((a, bb) => a - bb);
          if (sorted.length === 0) {
            resolve({ frames: 0, elapsedMs: Math.round(now - start), p50ms: null, p95ms: null, p50fps: 0, p95fps: 0, avgFps: 0, pixelRatio: renderer.getPixelRatio(), drawingBuffer: [renderer.domElement.width, renderer.domElement.height] });
            return;
          }
          const pick = (q) => sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * q))];
          resolve({
            frames: sorted.length,
            elapsedMs: Math.round(now - start),
            p50ms: +pick(0.5).toFixed(2),
            p95ms: +pick(0.95).toFixed(2),
            p50fps: +(1000 / pick(0.5)).toFixed(1),
            p95fps: +(1000 / pick(0.95)).toFixed(1),
            avgFps: +(sorted.length / ((now - start) / 1000)).toFixed(1),
            pixelRatio: renderer.getPixelRatio(),
            drawingBuffer: [renderer.domElement.width, renderer.domElement.height],
          });
        }
      };
      requestAnimationFrame(step);
    });
  }

  /**
   * Sample the pixels that the animation loop actually drew, so an automated test can
   * prove the canvas contains real content (not a blank/black buffer) without relying on
   * `preserveDrawingBuffer`. The readback happens inside the render loop, immediately
   * after `renderer.render()`, while the default framebuffer is still intact.
   */
  let pendingCapture = null;

  function captureStats() {
    return new Promise((resolve) => { pendingCapture = resolve; });
  }

  function runPendingCapture() {
    if (!pendingCapture) return;
    const resolve = pendingCapture;
    pendingCapture = null;
    const gl = renderer.getContext();
    const W = renderer.domElement.width;
    const H = renderer.domElement.height;
    const px = new Uint8Array(W * H * 4);
    gl.readPixels(0, 0, W, H, gl.RGBA, gl.UNSIGNED_BYTE, px);
    const stride = Math.max(1, Math.floor(Math.sqrt((W * H) / 20000)));
    let n = 0, sum = 0, nonBlack = 0, min = 255, max = 0;
    const seen = new Set();
    for (let y = 0; y < H; y += stride) {
      for (let x = 0; x < W; x += stride) {
        const i = (y * W + x) * 4;
        const r = px[i], g = px[i + 1], bl = px[i + 2];
        const l = 0.2126 * r + 0.7152 * g + 0.0722 * bl;
        sum += l; n++;
        if (l > 6) nonBlack++;
        if (l < min) min = l;
        if (l > max) max = l;
        if (seen.size < 200000) seen.add(((r >> 2) << 12) | ((g >> 2) << 6) | (bl >> 2));
      }
    }
    resolve({
      sampled: n,
      buffer: [W, H],
      meanLuma: +(sum / n).toFixed(2),
      nonBlackRatio: +(nonBlack / n).toFixed(4),
      minLuma: +min.toFixed(1),
      maxLuma: +max.toFixed(1),
      distinctColors: seen.size,
    });
  }

  function getState() {    return {
      timeOfDay: toPreset,
      blend: +blend.toFixed(3),
      frames,
      elapsed: +elapsed.toFixed(2),
      fps: { p50: +fpsP50.toFixed(1), p95: +fpsP95.toFixed(1), avg: +fpsAvg.toFixed(1) },
      render: {
        calls: renderer.info.render.calls,
        triangles: renderer.info.render.triangles,
        points: renderer.info.render.points,
        lines: renderer.info.render.lines,
      },
      memory: { geometries: renderer.info.memory.geometries, textures: renderer.info.memory.textures },
      programs: renderer.info.programs ? renderer.info.programs.length : null,
      pixelRatio: renderer.getPixelRatio(),
      canvas: [renderer.domElement.width, renderer.domElement.height],
      camera: { position: camera.position.toArray(), target: controls.target.toArray(), fov: camera.fov, aspect: +camera.aspect.toFixed(4) },
      voxels: data.voxelCount,
      meshes: meshes.length,
      webglVersion: renderer.capabilities.isWebGL2 ? 2 : 1,
    };
  }

  applyPreset(PRESETS.dusk);

  return {
    renderer, scene, camera, controls, data, meshes, materials,
    setTimeOfDay, setView, getState, measureFps, captureStats, resize,
    presets: PRESET_ORDER,
    isBlending: () => blend < 1,
  };
}
