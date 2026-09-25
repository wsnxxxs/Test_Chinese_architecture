// Pond water: a flat translucent surface with voxel-cell quantised ripples, fresnel sky reflection
// and sun glitter.  Built from the terrain's pond mask (row runs -> a handful of quads).
import {
  BufferGeometry, Float32BufferAttribute, Mesh, ShaderMaterial, UniformsUtils, UniformsLib, Color, Vector3,
  InstancedMesh, BoxGeometry, MeshBasicMaterial, Object3D, DoubleSide,
} from 'three';
import { SX, SZ, ORIGIN } from '../world/layout.js';
import { S, PAD } from '../world/terrain.js';

export const WATER_Y = 6.9;

const vertexShader = /* glsl */ `
varying vec3 vWorld;
#include <fog_pars_vertex>
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`;

const fragmentShader = /* glsl */ `
uniform float uTime;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyTop;
uniform vec3 uSkyMid;
uniform vec3 uSkyHor;
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform float uLight;
uniform float uSunPower;
varying vec3 vWorld;
#include <fog_pars_fragment>

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

vec3 skyAt(vec3 d) {
  float h = clamp(d.y, 0.0, 1.0);
  vec3 c = mix(uSkyHor, uSkyMid, smoothstep(0.0, 0.32, h));
  c = mix(c, uSkyTop, smoothstep(0.16, 0.85, h));
  float sd = max(dot(d, uSunDir), 0.0);
  c += uSunColor * (pow(sd, 6.0) * 0.25 + pow(sd, 60.0) * 0.6) * uSunPower;
  return c;
}

void main() {
  // voxel-cell quantised ripples
  vec2 cell = floor(vWorld.xz * 0.5) * 2.0 + 1.0;
  float t = uTime;
  float dx = 0.0;
  float dz = 0.0;
  dx += cos(cell.x * 0.21 + cell.y * 0.13 + t * 0.9) * 0.05;
  dz += cos(cell.y * 0.27 - cell.x * 0.09 + t * 0.7) * 0.05;
  dx += cos(cell.x * 0.61 - cell.y * 0.37 + t * 1.6) * 0.03;
  dz += cos(cell.y * 0.53 + cell.x * 0.41 - t * 1.3) * 0.03;
  float sparkle = hash21(cell + floor(t * 1.5));
  vec3 n = normalize(vec3(-dx, 1.0, -dz));
  vec3 V = normalize(cameraPosition - vWorld);
  float ndv = max(dot(n, V), 0.0);
  float fres = 0.04 + 0.96 * pow(1.0 - ndv, 4.0);
  vec3 R = reflect(-V, n);
  R.y = abs(R.y);
  vec3 refl = skyAt(R);
  vec3 body = mix(uDeep, uShallow, 0.35 + 0.35 * sin(cell.x * 0.11 + cell.y * 0.07 + t * 0.2)) * uLight;
  vec3 col = mix(body, refl, clamp(fres * 1.15, 0.0, 1.0));
  // sun glitter on individual cells
  float g = pow(max(dot(R, uSunDir), 0.0), 90.0);
  col += uSunColor * g * (0.5 + 2.5 * step(0.62, sparkle)) * uSunPower;
  col += vec3(0.6) * step(0.985, sparkle) * 0.25 * uLight;
  float alpha = clamp(0.8 + fres * 0.2, 0.0, 1.0);
  gl_FragColor = vec4(col, alpha);
  #include <fog_fragment>
}
`;

export function createWater(maps) {
  const { SURF, idx } = maps;
  const pos = [];
  const indices = [];
  let v = 0;
  for (let z = 0; z < SZ; z++) {
    let x = 0;
    while (x < SX) {
      if (SURF[idx(x, z)] !== S.BED) {
        x++;
        continue;
      }
      const x0 = x;
      while (x < SX && SURF[idx(x, z)] === S.BED) x++;
      const wx0 = x0 + ORIGIN.x;
      const wx1 = x + ORIGIN.x;
      const wz0 = z + ORIGIN.z;
      const wz1 = z + 1 + ORIGIN.z;
      pos.push(wx0, WATER_Y, wz0, wx0, WATER_Y, wz1, wx1, WATER_Y, wz1, wx1, WATER_Y, wz0);
      indices.push(v, v + 1, v + 2, v, v + 2, v + 3);
      v += 4;
    }
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  g.setIndex(indices);

  const uniforms = UniformsUtils.merge([
    UniformsLib.fog,
    {
      uTime: { value: 0 },
      uSunDir: { value: new Vector3(0, 1, 0) },
      uSunColor: { value: new Color('#ffcc99') },
      uSkyTop: { value: new Color('#3c62b8') },
      uSkyMid: { value: new Color('#9a8fc0') },
      uSkyHor: { value: new Color('#ffb87c') },
      uDeep: { value: new Color('#1d4d55') },
      uShallow: { value: new Color('#2f7a72') },
      uLight: { value: 1 },
      uSunPower: { value: 1 },
    },
  ]);
  const mat = new ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    fog: true,
    side: DoubleSide,
  });
  const mesh = new Mesh(g, mat);
  mesh.renderOrder = 2;
  mesh.name = 'water';
  mesh.frustumCulled = false;

  const update = (K, keyDir, sunFade, moonFade, elapsed) => {
    const u = uniforms;
    u.uTime.value = elapsed;
    u.uSunDir.value.copy(keyDir);
    u.uSunColor.value.copy(K.sun);
    u.uSkyTop.value.copy(K.zen);
    u.uSkyMid.value.copy(K.mid);
    u.uSkyHor.value.copy(K.hor);
    u.uLight.value = 0.22 + 0.78 * Math.min(1, sunFade + 0.35 * (K.hemiI > 0 ? 1 : 0) * (1 - moonFade * 0.5));
    u.uSunPower.value = Math.max(sunFade, moonFade * 0.35);
  };
  return { mesh, uniforms, update };
}

/** Koi swimming in the pond (instanced, animated on the CPU). */
export function createKoi(count = 9) {
  const geo = new BoxGeometry(1, 0.9, 3);
  const mat = new MeshBasicMaterial({ color: 0xffffff });
  const mesh = new InstancedMesh(geo, mat, count);
  const colors = [0xff7a2a, 0xf5f0e6, 0xff5a2a, 0xffc04a, 0xf5f0e6];
  const c = new Color();
  const fish = [];
  for (let i = 0; i < count; i++) {
    c.setHex(colors[i % colors.length]);
    mesh.setColorAt(i, c);
    fish.push({
      cx: (Math.random() - 0.5) * 100,
      cz: PAD.pondZ + ORIGIN.z + (Math.random() - 0.5) * 6,
      rx: 8 + Math.random() * 18,
      rz: 3 + Math.random() * 5,
      sp: 0.12 + Math.random() * 0.14,
      ph: Math.random() * 6.28,
      y: WATER_Y - 0.9 - Math.random() * 0.5,
    });
  }
  const o = new Object3D();
  const update = (t) => {
    for (let i = 0; i < fish.length; i++) {
      const f = fish[i];
      const a = f.ph + t * f.sp;
      const x = f.cx + Math.cos(a) * f.rx;
      const z = f.cz + Math.sin(a) * f.rz;
      const dx = -Math.sin(a) * f.rx;
      const dz = Math.cos(a) * f.rz;
      o.position.set(x, f.y, z);
      o.rotation.set(0, Math.atan2(dx, dz), 0);
      o.updateMatrix();
      mesh.setMatrixAt(i, o.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  };
  update(0);
  mesh.frustumCulled = false;
  return { mesh, update };
}
