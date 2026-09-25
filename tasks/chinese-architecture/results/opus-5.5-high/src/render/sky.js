import * as THREE from 'three';

const vert = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`;

const frag = /* glsl */ `
uniform vec3 uTop;
uniform vec3 uHorizon;
uniform vec3 uBottom;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uSunSize;
uniform float uHalo;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 col = h > 0.0
    ? mix(uHorizon, uTop, pow(clamp(h, 0.0, 1.0), 0.45))
    : mix(uHorizon, uBottom, pow(clamp(-h * 5.0, 0.0, 1.0), 0.6));
  float sd = max(dot(d, uSunDir), 0.0);
  col += uSunColor * (pow(sd, 5.0) * 0.28 + pow(sd, 48.0) * 0.5) * uHalo;
  col += uSunColor * smoothstep(1.0 - uSunSize, 1.0 - uSunSize * 0.55, sd) * 4.0;
  gl_FragColor = vec4(col, 1.0);
}`;

/** 渐变天穹 + 日/月盘 + 星空 */
export function createSky() {
  const uniforms = {
    uTop: { value: new THREE.Color() },
    uHorizon: { value: new THREE.Color() },
    uBottom: { value: new THREE.Color() },
    uSunDir: { value: new THREE.Vector3(0, 1, 0) },
    uSunColor: { value: new THREE.Color() },
    uSunSize: { value: 0.0006 },
    uHalo: { value: 1 },
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: vert,
    fragmentShader: frag,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
  });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(1500, 48, 24), material);
  dome.renderOrder = -10;
  dome.frustumCulled = false;

  // 星空
  const n = 1400;
  const pos = new Float32Array(n * 3);
  let s = 7;
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < n; i++) {
    const u = rnd() * Math.PI * 2;
    const y = 0.08 + rnd() * 0.92;
    const r = Math.sqrt(1 - y * y);
    pos.set([Math.cos(u) * r * 1400, y * 1400, Math.sin(u) * r * 1400], i * 3);
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false });
  const stars = new THREE.Points(sg, starMat);
  stars.frustumCulled = false;
  stars.renderOrder = -9;

  const group = new THREE.Group();
  group.add(dome, stars);

  const moonColor = new THREE.Color(0xdfe6ff);
  function update(S) {
    uniforms.uTop.value.copy(S.top);
    uniforms.uHorizon.value.copy(S.hor);
    uniforms.uBottom.value.copy(S.fog);
    uniforms.uSunDir.value.copy(S.dir);
    if (S.body === 'sun') {
      uniforms.uSunColor.value.copy(S.light).multiplyScalar(1.2);
      uniforms.uSunSize.value = 0.0007;
      uniforms.uHalo.value = 1;
    } else {
      uniforms.uSunColor.value.copy(moonColor).multiplyScalar(0.55);
      uniforms.uSunSize.value = 0.00045;
      uniforms.uHalo.value = 0.35;
    }
    starMat.opacity = S.stars;
    stars.visible = S.stars > 0.01;
  }
  return { group, material, update };
}
