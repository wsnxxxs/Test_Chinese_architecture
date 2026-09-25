// Drifting voxel clouds: puffy cumulus built as unions of ellipsoid lobes sampled on a coarse cube
// grid, lit by the real sun so they blush at dusk.  One InstancedMesh, moved slowly as a whole.
import { BoxGeometry, InstancedMesh, MeshStandardMaterial, Object3D, Color } from 'three';
import { mulberry32, noise2 } from '../voxel/rng.js';

export function createClouds() {
  const rnd = mulberry32(77);
  const cubes = [];
  const nClouds = 34;
  for (let c = 0; c < nClouds; c++) {
    // keep the sky above the temple clear: reject centres that are too close in plan view
    let cx = 0;
    let cz = 0;
    do {
      const a = rnd() * Math.PI * 2;
      const r = 700 + rnd() * 1100;
      cx = Math.cos(a) * r * 1.3;
      cz = Math.sin(a) * r - 380;
    } while (Math.hypot(cx, cz + 20) < 760);
    const cy = 260 + rnd() * 190;
    const s = 24 + rnd() * 10; // cell size
    const sy = s * 0.72;
    const size = 0.7 + rnd() * 0.9;
    const lobes = [];
    const nl = 3 + Math.floor(rnd() * 4);
    for (let i = 0; i < nl; i++) {
      const t = nl === 1 ? 0 : i / (nl - 1) - 0.5;
      lobes.push({
        x: t * 190 * size + (rnd() - 0.5) * 30,
        y: (1 - Math.abs(t) * 1.6) * 16 * size + rnd() * 10,
        z: (rnd() - 0.5) * 60 * size,
        rx: (46 + rnd() * 34) * size,
        ry: (18 + rnd() * 16) * size,
        rz: (30 + rnd() * 30) * size,
      });
    }
    const seed = c * 13;
    for (let iy = -2; iy <= 5; iy++)
      for (let iz = -6; iz <= 6; iz++)
        for (let ix = -10; ix <= 10; ix++) {
          const x = ix * s;
          const y = iy * sy;
          const z = iz * s;
          if (y < -10) continue;
          const n = noise2(ix * 0.55 + seed, iz * 0.55 + iy * 2.7, 7);
          let inside = false;
          for (const l of lobes) {
            const d = ((x - l.x) / l.rx) ** 2 + ((y - l.y) / l.ry) ** 2 + ((z - l.z) / l.rz) ** 2;
            if (d + (n - 0.5) * 0.55 < 1) {
              inside = true;
              break;
            }
          }
          if (inside) {
            const j = (noise2(ix + seed, iz + 40, 3) - 0.5) * s * 0.3;
            cubes.push({ x: cx + x + j, y: cy + y, z: cz + z - j, w: s * 1.02, h: sy * 1.02, d: s * 1.02 });
          }
        }
  }
  const geo = new BoxGeometry(1, 1, 1);
  const mat = new MeshStandardMaterial({ color: 0xffffff, roughness: 1, metalness: 0, fog: true });
  // clouds dissolve (screen-door dither) when the camera gets close, so aerial views stay clear
  mat.onBeforeCompile = (shader) => {
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <opaque_fragment>',
      `{
        float fadeC = smoothstep(200.0, 620.0, length(vViewPosition));
        float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
        if (ign > fadeC) discard;
      }
      #include <opaque_fragment>`,
    );
  };
  mat.customProgramCacheKey = () => 'cloud-dither-v1';
  const mesh = new InstancedMesh(geo, mat, cubes.length);
  const o = new Object3D();
  cubes.forEach((b, i) => {
    o.position.set(b.x, b.y, b.z);
    o.scale.set(b.w, b.h, b.d);
    o.updateMatrix();
    mesh.setMatrixAt(i, o.matrix);
  });
  mesh.frustumCulled = false;
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  mesh.name = 'clouds';
  const tint = new Color();
  const update = (dt, K) => {
    mesh.position.x += dt * 5;
    if (mesh.position.x > 1800) mesh.position.x -= 3600;
    if (K) {
      tint.set(0xffffff).multiplyScalar(0.3 + 0.7 * K.cloud);
      mat.color.copy(tint);
    }
  };
  return { mesh, update, count: cubes.length };
}
