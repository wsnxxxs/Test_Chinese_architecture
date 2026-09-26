import * as THREE from 'three';

// ---------------------------------------------------------------------------
// Lighting + day/night controller
// ---------------------------------------------------------------------------
export function buildLighting() {
  const group = new THREE.Group();
  group.name = 'lighting';

  // ----- Hemisphere light (sky / ground bounce) -----
  const hemi = new THREE.HemisphereLight(0xc0a8a0, 0x4a3a26, 0.55);
  group.add(hemi);

  // ----- Sun (directional) -----
  const sun = new THREE.DirectionalLight(0xffd9a8, 2.2);
  sun.position.set(-12, 16, 10);
  sun.target.position.set(0, 0, 0);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 0.5;
  sun.shadow.camera.far = 80;
  const shadowExtent = 20;
  sun.shadow.camera.left = -shadowExtent;
  sun.shadow.camera.right = shadowExtent;
  sun.shadow.camera.top = shadowExtent;
  sun.shadow.camera.bottom = -shadowExtent;
  sun.shadow.bias = -0.0006;
  sun.shadow.normalBias = 0.02;
  group.add(sun);
  group.add(sun.target);

  // ----- Soft fill from the opposite side -----
  const fill = new THREE.DirectionalLight(0xa8b5d0, 0.35);
  fill.position.set(14, 8, -6);
  fill.target.position.set(0, 0, 0);
  group.add(fill);
  group.add(fill.target);

  // ----- Subtle ambient -----
  const ambient = new THREE.AmbientLight(0xfff0d0, 0.18);
  group.add(ambient);

  // ----- Fog -----
  // (Scene fog is on the renderer, but we keep a reference here for toggling)
  const fog = new THREE.Fog(0x2a1f1a, 35, 90);

  // Day/night state
  const presets = {
    day: {
      sunColor: 0xfff2dc,
      sunIntensity: 2.5,
      fillColor: 0xb6c8e0,
      fillIntensity: 0.4,
      hemiSky: 0xc8d8e8,
      hemiGround: 0x5a4a32,
      hemiIntensity: 0.7,
      ambientColor: 0xfff5e0,
      ambientIntensity: 0.22,
      fogColor: 0xc9d8e6,
      fogNear: 38,
      fogFar: 95,
      bgColor: 0xc4d6e8,
      emissiveStrength: 0.0, // lamps off
    },
    sunset: {
      sunColor: 0xffb878,
      sunIntensity: 2.4,
      fillColor: 0x88a4d0,
      fillIntensity: 0.32,
      hemiSky: 0xffc89c,
      hemiGround: 0x3a2818,
      hemiIntensity: 0.6,
      ambientColor: 0xffd9a8,
      ambientIntensity: 0.20,
      fogColor: 0xc89070,
      fogNear: 36,
      fogFar: 92,
      bgColor: 0xe2a878,
      emissiveStrength: 0.0,
    },
    night: {
      sunColor: 0x8aa8d8,
      sunIntensity: 0.55,
      fillColor: 0x4a5a78,
      fillIntensity: 0.22,
      hemiSky: 0x2a3858,
      hemiGround: 0x14161c,
      hemiIntensity: 0.32,
      ambientColor: 0x88a0c0,
      ambientIntensity: 0.18,
      fogColor: 0x18203a,
      fogNear: 30,
      fogFar: 95,
      bgColor: 0x0e1830,
      emissiveStrength: 1.0,
    },
  };

  function apply(presetName) {
    const p = presets[presetName];
    if (!p) return;
    sun.color.setHex(p.sunColor);
    sun.intensity = p.sunIntensity;
    fill.color.setHex(p.fillColor);
    fill.intensity = p.fillIntensity;
    hemi.color.setHex(p.hemiSky);
    hemi.groundColor.setHex(p.hemiGround);
    hemi.intensity = p.hemiIntensity;
    ambient.color.setHex(p.ambientColor);
    ambient.intensity = p.ambientIntensity;
    fog.color.setHex(p.fogColor);
    fog.near = p.fogNear;
    fog.far = p.fogFar;
    return { bgColor: p.bgColor, fog, emissiveStrength: p.emissiveStrength };
  }

  // Apply sunset by default
  const initial = apply('sunset');

  return { group, apply, presets, fog, sun, fill, hemi, ambient, initial };
}

// ---------------------------------------------------------------------------
// Walk all materials flagged with `userData.isNightLit = true` and adjust
// their emissive color & intensity based on day/night state.
// ---------------------------------------------------------------------------
export function setNightLights(materials, strength) {
  // strength 0 = lamps off; 1 = lamps fully on
  for (const mat of materials) {
    if (!mat) continue;
    const base = mat.userData?.baseEmissive;
    if (typeof base === 'number') {
      if (strength > 0) {
        mat.emissive.setHex(base);
        mat.emissiveIntensity = 1.0 * strength;
      } else {
        mat.emissive.setHex(0x000000);
        mat.emissiveIntensity = 0.0;
      }
    }
  }
}