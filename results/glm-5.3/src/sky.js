import * as THREE from 'three';
import { VoxelWorld } from './builder.js';

// —— 黄昏渐变天穹（着色器球） ——
export function createSky(scene, sun) {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      cZenith: { value: new THREE.Color(0x2a3b66) },
      cMid: { value: new THREE.Color(0x9a7190) },
      cHorizon: { value: new THREE.Color(0xffa963) },
      cGround: { value: new THREE.Color(0x5e4136) },
      sunDir: { value: sun.position.clone().sub(sun.target.position).normalize() },
    },
    vertexShader: `
      varying vec3 vDir;
      void main() {
        vDir = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      varying vec3 vDir;
      uniform vec3 cZenith, cMid, cHorizon, cGround, sunDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 col;
        if (d.y >= 0.0) {
          col = mix(cHorizon, cMid, smoothstep(0.0, 0.28, d.y));
          col = mix(col, cZenith, smoothstep(0.22, 0.75, d.y));
        } else {
          col = mix(cHorizon, cGround, smoothstep(0.0, -0.25, d.y));
        }
        float s1 = pow(max(dot(d, sunDir), 0.0), 24.0);
        float s2 = pow(max(dot(d, sunDir), 0.0), 3.0);
        col += vec3(1.0, 0.72, 0.42) * s1 * 0.55;
        col += vec3(1.0, 0.50, 0.25) * s2 * 0.18;
        // 抖动去色带
        float dith = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
        col += (dith - 0.5) * (1.5 / 255.0);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(480, 32, 16), mat);
  sky.frustumCulled = false;
  scene.add(sky);
  return sky;
}

// —— 体素流云（缓慢东移） ——
export function createClouds(scene) {
  const rnd = (() => {
    let s = 20260925;
    return () => {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 4294967296;
    };
  })();
  const tints = [0xffeede, 0xffe4cc, 0xfff4e8, 0xffd9c2];
  const meshes = [];
  for (let i = 0; i < 10; i++) {
    const w = new VoxelWorld();
    const tint = tints[Math.floor(rnd() * tints.length)];
    // 沿一条基线叠若干“絮团”，形成有机形态
    const puffs = 4 + Math.floor(rnd() * 3);
    let px = 0;
    for (let p = 0; p < puffs; p++) {
      const pl = Math.floor(5 + rnd() * 8);
      const pw = Math.floor(4 + rnd() * 5);
      const py = rnd() < 0.35 ? 2 : 0;
      w.box(px, px + pl, py, py + 1, 0, pw, tint);
      if (rnd() < 0.5 && pl > 5 && pw > 3) {
        w.box(px + 2, px + pl - 2, py + 2, py + 2, 1, pw - 2, tint);
      }
      px += Math.floor(pl * 0.6);
    }

    const mesh = w.toMesh(new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.88 }));
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    mesh.position.set(-240 + rnd() * 480, 58 + rnd() * 26, -180 + rnd() * 360);
    mesh.userData.v = 1.0 + rnd() * 1.4;
    scene.add(mesh);
    meshes.push(mesh);
  }
  return meshes;
}
