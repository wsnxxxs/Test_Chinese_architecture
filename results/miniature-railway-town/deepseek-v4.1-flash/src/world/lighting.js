import * as THREE from 'three';
import { skyTexture, glowTexture } from '../lib/textures.js';

// ---------------------------------------------------------------------------
// Light rig. Two presets - a warm low evening sun (default) and a moonlit
// night where the station, street lamps and some windows glow - blended
// smoothly, with a matching gradient sky, environment map and fog.
// ---------------------------------------------------------------------------

const DAY = {
  sunColor: 0xffb26b,
  sunIntensity: 3.1,
  sunAzimuth: 300,
  sunElevation: 21,
  hemiSky: 0xa8c0e0,
  hemiGround: 0x6b5a44,
  hemiIntensity: 1.0,
  ambient: 0.3,
  fog: 0xd79a63,
  fogNear: 340,
  fogFar: 900,
  exposure: 1.12,
  sky: { top: '#1d3f77', horizon: '#e8a15c', bottom: '#4a3524', sun: { azimuth: THREE.MathUtils.degToRad(300), elevation: THREE.MathUtils.degToRad(21), radius: 150 } },
};

const NIGHT = {
  sunColor: 0xa8c0ee,
  sunIntensity: 1.15,
  sunAzimuth: 118,
  sunElevation: 44,
  hemiSky: 0x2b3f68,
  hemiGround: 0x171d28,
  hemiIntensity: 0.95,
  ambient: 0.26,
  fog: 0x0e1726,
  fogNear: 300,
  fogFar: 820,
  exposure: 1.08,
  sky: { top: '#05080f', horizon: '#101d33', bottom: '#070a10', stars: 900 },
};

function dirFrom(azDeg, elDeg) {
  const az = THREE.MathUtils.degToRad(azDeg);
  const el = THREE.MathUtils.degToRad(elDeg);
  return new THREE.Vector3(Math.cos(el) * Math.sin(az), Math.sin(el), Math.cos(el) * Math.cos(az));
}

export function createLighting(scene, renderer, materials, lamps) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();

  const daySky = skyTexture(DAY.sky);
  const nightSky = skyTexture(NIGHT.sky);
  const dayEnv = pmrem.fromEquirectangular(daySky).texture;
  const nightEnv = pmrem.fromEquirectangular(nightSky).texture;

  scene.background = daySky;
  scene.environment = dayEnv;
  scene.fog = new THREE.Fog(DAY.fog, DAY.fogNear, DAY.fogFar);

  const sun = new THREE.DirectionalLight(DAY.sunColor, DAY.sunIntensity);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const s = 78;
  sun.shadow.camera.left = -s;
  sun.shadow.camera.right = s;
  sun.shadow.camera.top = s;
  sun.shadow.camera.bottom = -s;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 420;
  sun.shadow.bias = -0.0006;
  sun.shadow.normalBias = 0.035;
  scene.add(sun);
  scene.add(sun.target);

  const hemi = new THREE.HemisphereLight(DAY.hemiSky, DAY.hemiGround, DAY.hemiIntensity);
  scene.add(hemi);
  const ambient = new THREE.AmbientLight(0xffffff, DAY.ambient);
  scene.add(ambient);

  // warm point lights for the important lamps, plus additive glow sprites for
  // every lamp so the whole town reads as lit without heavy overdraw
  const pointLights = [];
  const maxPoints = 7;
  lamps.forEach((lamp, i) => {
    if (lamp.light && pointLights.length < maxPoints) {
      const light = new THREE.PointLight(0xffbe73, 0, 17, 2);
      light.position.copy(lamp.position);
      scene.add(light);
      pointLights.push(light);
    }
  });

  const glowSprites = [];
  const glowMat = materials.glowSprite;
  for (const lamp of lamps) {
    const sprite = new THREE.Sprite(glowMat);
    sprite.position.copy(lamp.position);
    sprite.scale.set(5.2, 5.2, 5.2);
    sprite.visible = false;
    scene.add(sprite);
    glowSprites.push(sprite);
  }

  const state = {
    mode: 'day',
    blend: 0, // 0 = day preset, 1 = night preset
    target: 0,
  };

  const cA = new THREE.Color();
  const cB = new THREE.Color();

  function applyBlend(t) {
    const sunDir = dirFrom(
      THREE.MathUtils.lerp(DAY.sunAzimuth, NIGHT.sunAzimuth, t),
      THREE.MathUtils.lerp(DAY.sunElevation, NIGHT.sunElevation, t)
    );
    sun.position.copy(sunDir.multiplyScalar(190));
    sun.target.position.set(0, 0, 0);
    cA.setHex(DAY.sunColor);
    cB.setHex(NIGHT.sunColor);
    sun.color.copy(cA).lerp(cB, t);
    sun.intensity = THREE.MathUtils.lerp(DAY.sunIntensity, NIGHT.sunIntensity, t);

    cA.setHex(DAY.hemiSky);
    cB.setHex(NIGHT.hemiSky);
    hemi.color.copy(cA).lerp(cB, t);
    cA.setHex(DAY.hemiGround);
    cB.setHex(NIGHT.hemiGround);
    hemi.groundColor.copy(cA).lerp(cB, t);
    hemi.intensity = THREE.MathUtils.lerp(DAY.hemiIntensity, NIGHT.hemiIntensity, t);
    ambient.intensity = THREE.MathUtils.lerp(DAY.ambient, NIGHT.ambient, t);

    cA.setHex(DAY.fog);
    cB.setHex(NIGHT.fog);
    scene.fog.color.copy(cA).lerp(cB, t);
    scene.fog.near = THREE.MathUtils.lerp(DAY.fogNear, NIGHT.fogNear, t);
    scene.fog.far = THREE.MathUtils.lerp(DAY.fogFar, NIGHT.fogFar, t);
    renderer.toneMappingExposure = THREE.MathUtils.lerp(DAY.exposure, NIGHT.exposure, t);

    const night = t > 0.5;
    if (scene.background !== (night ? nightSky : daySky)) {
      scene.background = night ? nightSky : daySky;
      scene.environment = night ? nightEnv : dayEnv;
    }

    // emissive materials
    materials.glassWarm.emissiveIntensity = Math.max(0, (t - 0.35) / 0.65) * 1.4;
    materials.lampGlass.emissiveIntensity = Math.max(0, (t - 0.3) / 0.7) * 2.1;
    materials.lampGlow.emissiveIntensity = 0;
    glowMat.opacity = Math.max(0, (t - 0.35) / 0.65) * 0.9;
    const on = t > 0.45;
    for (const sprite of glowSprites) sprite.visible = on;
    for (const light of pointLights) light.intensity = on ? 14 * ((t - 0.45) / 0.55) : 0;
  }

  applyBlend(0);

  return {
    sun,
    state,
    setMode(mode) {
      state.mode = mode;
      state.target = mode === 'night' ? 1 : 0;
    },
    get mode() {
      return state.mode;
    },
    update(dt) {
      if (Math.abs(state.blend - state.target) < 0.001) {
        if (state.blend !== state.target) {
          state.blend = state.target;
          applyBlend(state.blend);
        }
        return;
      }
      const speed = 1.35;
      const dir = Math.sign(state.target - state.blend);
      state.blend = THREE.MathUtils.clamp(state.blend + dir * speed * dt, 0, 1);
      if ((dir > 0 && state.blend > state.target) || (dir < 0 && state.blend < state.target)) {
        state.blend = state.target;
      }
      applyBlend(state.blend);
    },
  };
}
