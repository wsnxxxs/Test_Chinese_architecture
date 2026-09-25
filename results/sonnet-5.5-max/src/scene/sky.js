import { Color, Mesh, ShaderMaterial, SphereGeometry, BackSide, Vector3 } from 'three';

const vertexShader = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * p;
}
`;

const fragmentShader = /* glsl */ `
precision highp float;
uniform vec3 uZenith;
uniform vec3 uMid;
uniform vec3 uHorizon;
uniform vec3 uGround;
uniform vec3 uGlowColor;
uniform vec3 uSunColor;
uniform vec3 uSunDir;
uniform float uSunVis;
uniform vec3 uMoonDir;
uniform float uMoonVis;
uniform float uStars;
uniform float uTime;
varying vec3 vDir;

float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.zyx + 31.32);
  return fract((p.x + p.y) * p.z);
}

void main() {
  vec3 d = normalize(vDir);
  float h = d.y;

  vec3 col = uHorizon;
  col = mix(col, uMid, smoothstep(0.0, 0.30, h));
  col = mix(col, uZenith, smoothstep(0.16, 0.85, h));
  col = mix(col, uGround, smoothstep(0.0, -0.12, h));

  // warm glow hugging the horizon on the sun side, plus wide halo around the sun
  float c = dot(d, uSunDir);
  float sunSide = pow(max(c * 0.5 + 0.5, 0.0), 3.0);
  float hz = exp(-abs(h) * 5.5);
  col += uGlowColor * hz * sunSide * 0.85 * uSunVis;
  col += uGlowColor * (pow(max(c, 0.0), 6.0) * 0.32 + pow(max(c, 0.0), 40.0) * 0.55) * uSunVis;

  // sun disc
  float disc = smoothstep(0.99930, 0.99965, c);
  col = mix(col, uSunColor * 7.0, disc * uSunVis * step(-0.02, h));

  // moon
  float mc = dot(d, uMoonDir);
  float moon = smoothstep(0.99920, 0.99945, mc);
  col += vec3(0.55, 0.65, 0.9) * (pow(max(mc, 0.0), 24.0) * 0.18) * uMoonVis;
  col = mix(col, vec3(1.7, 1.75, 1.9), moon * uMoonVis);

  // stars
  if (uStars > 0.01 && h > 0.0) {
    vec3 p = d * 150.0;
    vec3 ip = floor(p);
    vec3 f = fract(p) - 0.5;
    float r = hash13(ip);
    float s = step(0.965, r) * smoothstep(0.42, 0.06, length(f));
    float tw = 0.6 + 0.4 * sin(uTime * 2.3 + r * 60.0);
    float big = step(0.995, r) * 1.6 + 1.0; // a few brighter stars
    col += vec3(0.9, 0.95, 1.15) * s * tw * big * uStars * smoothstep(0.0, 0.22, h);
  }

  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

export function createSky() {
  const uniforms = {
    uZenith: { value: new Color('#3679d6') },
    uMid: { value: new Color('#7fb0e8') },
    uHorizon: { value: new Color('#cfe2f0') },
    uGround: { value: new Color('#9a9d86') },
    uGlowColor: { value: new Color('#ffc080') },
    uSunColor: { value: new Color('#fff0d0') },
    uSunDir: { value: new Vector3(0, 1, 0) },
    uSunVis: { value: 1 },
    uMoonDir: { value: new Vector3(0, 1, 0) },
    uMoonVis: { value: 0 },
    uStars: { value: 0 },
    uTime: { value: 0 },
  };
  const mat = new ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    side: BackSide,
    depthWrite: false,
    depthTest: false,
    fog: false,
  });
  const mesh = new Mesh(new SphereGeometry(1, 48, 32), mat);
  mesh.scale.setScalar(900);
  mesh.renderOrder = -1000;
  mesh.frustumCulled = false;
  mesh.name = 'sky';
  return { mesh, uniforms };
}
