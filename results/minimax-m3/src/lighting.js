/**
 * Scene lighting - warm sunset mood.
 * Uses DirectionalLight as the sun (cast shadows), plus HemisphereLight as ambient.
 */
import * as THREE from 'three';

export function setupLighting(scene) {
  // Warm sky / ground hemisphere
  const hemi = new THREE.HemisphereLight(0xffd9a8, 0x3a4a3a, 0.55);
  scene.add(hemi);

  // Main "sun" - low-angle warm directional for sunset feel
  const sun = new THREE.DirectionalLight(0xffb070, 1.6);
  sun.position.set(28, 24, -22);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -45;
  sun.shadow.camera.right = 45;
  sun.shadow.camera.top = 45;
  sun.shadow.camera.bottom = -45;
  sun.shadow.camera.near = 0.1;
  sun.shadow.camera.far = 120;
  sun.shadow.bias = -0.0005;
  sun.shadow.normalBias = 0.04;
  scene.add(sun);

  // Cool fill from opposite side (subtle blue)
  const fill = new THREE.DirectionalLight(0x6a8aa0, 0.25);
  fill.position.set(-20, 16, 18);
  scene.add(fill);

  // Warm point glow for lanterns (placed by caller if needed)
  return { sun, hemi, fill };
}

/**
 * Sky background gradient via large sphere with vertex colors.
 * Top: deep dusk blue. Horizon: warm orange.
 */
export function buildSky(scene) {
  const geom = new THREE.SphereGeometry(800, 32, 16);
  // gradient via shader-free approach: use vertex Y for color
  const colors = [];
  const pos = geom.attributes.position;
  const top = new THREE.Color(0x1a2845);
  const horizon = new THREE.Color(0xe8a060);
  const bottom = new THREE.Color(0x4a3a2e);
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i) / 800; // -1..1
    let c;
    if (y >= 0) {
      c = horizon.clone().lerp(top, Math.pow(y, 0.6));
    } else {
      c = horizon.clone().lerp(bottom, Math.pow(-y, 0.7));
    }
    colors.push(c.r, c.g, c.b);
  }
  geom.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const mat = new THREE.MeshBasicMaterial({
    vertexColors: true,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,           // sky shouldn't be fogged
  });
  const sky = new THREE.Mesh(geom, mat);
  sky.frustumCulled = false;
  scene.add(sky);
  return sky;
}

/**
 * Add a soft glow at a position - cheap point light with low intensity.
 */
export function addLanternGlow(scene, x, y, z) {
  const light = new THREE.PointLight(0xff8844, 0.45, 8, 2);
  light.position.set(x + 0.5, y + 0.5, z + 0.5);
  scene.add(light);
  return light;
}