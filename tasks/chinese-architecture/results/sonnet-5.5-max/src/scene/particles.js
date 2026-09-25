// GPU-animated point sprites: incense smoke, drifting petals / leaves, and lantern glow halos.
import {
  BufferGeometry, Float32BufferAttribute, Points, ShaderMaterial, AdditiveBlending, Color, Vector3,
} from 'three';
import { mulberry32 } from '../voxel/rng.js';

/** pixels per world unit at distance 1 (for point size attenuation) */
export const pointScale = { value: 800 };

// ---------------------------------------------------------------------------
// incense smoke
// ---------------------------------------------------------------------------
export function createSmoke(anchors, perSource = 34) {
  const rnd = mulberry32(5);
  const pos = [];
  const seed = [];
  for (const a of anchors) {
    for (let i = 0; i < perSource; i++) {
      pos.push(a[0], a[1], a[2]);
      seed.push(rnd(), rnd(), rnd(), rnd());
    }
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  g.setAttribute('aSeed', new Float32BufferAttribute(seed, 4));
  const mat = new ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uScale: pointScale, uColor: { value: new Color('#d9d4cc') } },
    vertexShader: /* glsl */ `
      attribute vec4 aSeed;
      uniform float uTime;
      uniform float uScale;
      varying float vAlpha;
      void main() {
        float life = 8.0;
        float t = fract(uTime / life + aSeed.w);
        float age = t * life;
        vec3 p = position;
        p.y += age * 3.0;
        p.x += sin(age * 0.9 + aSeed.x * 40.0) * (0.5 + age * 0.3) + age * 0.7;
        p.z += cos(age * 0.7 + aSeed.y * 30.0) * (0.4 + age * 0.22);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        float size = mix(1.3, 5.0, t);
        gl_PointSize = clamp(size * uScale / -mv.z, 1.0, 70.0);
        // fade with age, and dissolve when the camera is right inside a puff
        vAlpha = smoothstep(0.0, 0.07, t) * (1.0 - smoothstep(0.45, 1.0, t)) * 0.32 * smoothstep(10.0, 48.0, -mv.z);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor;
      varying float vAlpha;
      void main() { gl_FragColor = vec4(uColor, vAlpha); }
    `,
    transparent: true,
    depthWrite: false,
  });
  const points = new Points(g, mat);
  points.frustumCulled = false;
  points.renderOrder = 3;
  return { points, material: mat };
}

// ---------------------------------------------------------------------------
// falling petals & leaves
// ---------------------------------------------------------------------------
export function createPetals(box, count = 420) {
  const rnd = mulberry32(31);
  const seed = [];
  const col = [];
  const palette = ['#f8b6c8', '#fbd5df', '#f6f0e4', '#efba2c', '#e8713b', '#f4a7b9'].map((h) => new Color(h));
  const pos = [];
  for (let i = 0; i < count; i++) {
    pos.push(0, 0, 0);
    seed.push(rnd(), rnd(), rnd(), rnd());
    const c = palette[Math.floor(rnd() * palette.length)];
    col.push(c.r, c.g, c.b);
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  g.setAttribute('aSeed', new Float32BufferAttribute(seed, 4));
  g.setAttribute('color', new Float32BufferAttribute(col, 3));
  const mat = new ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uScale: pointScale,
      uBox: { value: new Vector3(box.size.x, box.size.y, box.size.z) },
      uCenter: { value: new Vector3(box.center.x, box.center.y, box.center.z) },
      uLight: { value: 1 },
    },
    vertexShader: /* glsl */ `
      attribute vec4 aSeed;
      attribute vec3 color;
      uniform float uTime;
      uniform float uScale;
      uniform vec3 uBox;
      uniform vec3 uCenter;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        float fall = fract(aSeed.w + uTime * (0.012 + aSeed.z * 0.01));
        vec3 p = uCenter + (aSeed.xyz - 0.5) * uBox;
        p.y = uCenter.y + uBox.y * 0.5 - fall * uBox.y;
        float ph = aSeed.x * 60.0;
        p.x += sin(uTime * 0.7 + ph) * 6.0 + uTime * 0.0;
        p.z += cos(uTime * 0.5 + ph * 1.3) * 6.0;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp((0.45 + aSeed.y * 0.5) * uScale / -mv.z, 1.2, 14.0);
        vColor = color;
        vAlpha = smoothstep(0.0, 0.05, fall) * (1.0 - smoothstep(0.93, 1.0, fall));
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uLight;
      varying vec3 vColor;
      varying float vAlpha;
      void main() { gl_FragColor = vec4(vColor * uLight, vAlpha); }
    `,
    transparent: true,
    depthWrite: false,
  });
  const points = new Points(g, mat);
  points.frustumCulled = false;
  points.renderOrder = 3;
  const setCount = (n) => {
    g.setDrawRange(0, Math.max(0, n));
    points.visible = n > 0;
  };
  return { points, material: mat, setCount };
}

// ---------------------------------------------------------------------------
// night scenery: rising sky lanterns (孔明灯) and fireflies
// ---------------------------------------------------------------------------
export function createSkyLanterns(count = 46, box = { cx: 0, cz: -120, sx: 300, sz: 340, y0: 40, h: 240 }) {
  const rnd = mulberry32(88);
  const pos = [];
  const seed = [];
  for (let i = 0; i < count; i++) {
    pos.push(0, 0, 0);
    seed.push(rnd(), rnd(), rnd(), rnd());
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  g.setAttribute('aSeed', new Float32BufferAttribute(seed, 4));
  const mat = new ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uScale: pointScale,
      uStrength: { value: 0 },
      uBox: { value: new Vector3(box.sx, box.h, box.sz) },
      uOrigin: { value: new Vector3(box.cx, box.y0, box.cz) },
    },
    vertexShader: /* glsl */ `
      attribute vec4 aSeed;
      uniform float uTime;
      uniform float uScale;
      uniform vec3 uBox;
      uniform vec3 uOrigin;
      varying float vLife;
      varying float vTw;
      void main() {
        float rise = fract(aSeed.w + uTime * (0.012 + aSeed.z * 0.008));
        vec3 p = uOrigin + vec3((aSeed.x - 0.5) * uBox.x, rise * uBox.y, (aSeed.y - 0.5) * uBox.z);
        p.x += sin(uTime * 0.25 + aSeed.x * 40.0) * 7.0 + rise * 40.0;
        p.z += cos(uTime * 0.21 + aSeed.y * 33.0) * 6.0;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp((5.0 + aSeed.z * 4.0) * uScale / -mv.z, 2.0, 60.0);
        vLife = smoothstep(0.0, 0.06, rise) * (1.0 - smoothstep(0.86, 1.0, rise));
        vTw = 0.85 + 0.15 * sin(uTime * 3.0 + aSeed.x * 60.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uStrength;
      varying float vLife;
      varying float vTw;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float r = length(d) * 2.0;
        float halo = pow(clamp(1.0 - r, 0.0, 1.0), 2.4);
        float core = step(max(abs(d.x), abs(d.y)), 0.16);
        vec3 col = vec3(1.0, 0.55, 0.2) * halo * 1.3 + vec3(1.0, 0.85, 0.5) * core * 1.6;
        gl_FragColor = vec4(col * uStrength * vLife * vTw, 1.0);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
  });
  const points = new Points(g, mat);
  points.frustumCulled = false;
  points.renderOrder = 4;
  return { points, material: mat };
}

export function createFireflies(count = 90, box = { cx: 0, cz: 150, sx: 260, sz: 90, y0: 8, h: 16 }) {
  const rnd = mulberry32(64);
  const pos = [];
  const seed = [];
  for (let i = 0; i < count; i++) {
    pos.push(0, 0, 0);
    seed.push(rnd(), rnd(), rnd(), rnd());
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  g.setAttribute('aSeed', new Float32BufferAttribute(seed, 4));
  const mat = new ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uScale: pointScale,
      uStrength: { value: 0 },
      uBox: { value: new Vector3(box.sx, box.h, box.sz) },
      uOrigin: { value: new Vector3(box.cx, box.y0, box.cz) },
    },
    vertexShader: /* glsl */ `
      attribute vec4 aSeed;
      uniform float uTime;
      uniform float uScale;
      uniform vec3 uBox;
      uniform vec3 uOrigin;
      varying float vBlink;
      void main() {
        float t = uTime * (0.25 + aSeed.w * 0.3);
        vec3 p = uOrigin + vec3((aSeed.x - 0.5) * uBox.x, aSeed.z * uBox.y, (aSeed.y - 0.5) * uBox.z);
        p.x += sin(t * 1.3 + aSeed.x * 50.0) * 7.0 + sin(t * 0.7 + aSeed.y * 20.0) * 5.0;
        p.z += cos(t * 1.1 + aSeed.y * 50.0) * 7.0;
        p.y += sin(t * 1.9 + aSeed.z * 30.0) * 2.2;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(2.2 * uScale / -mv.z, 1.5, 18.0);
        vBlink = smoothstep(0.15, 0.95, 0.5 + 0.5 * sin(uTime * (1.4 + aSeed.w) + aSeed.x * 90.0));
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uStrength;
      varying float vBlink;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float r = length(d) * 2.0;
        float a = pow(clamp(1.0 - r, 0.0, 1.0), 2.0);
        gl_FragColor = vec4(vec3(0.75, 1.0, 0.35) * a * vBlink * uStrength, 1.0);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
  });
  const points = new Points(g, mat);
  points.frustumCulled = false;
  points.renderOrder = 4;
  return { points, material: mat };
}

// ---------------------------------------------------------------------------
// lantern glow halos
// ---------------------------------------------------------------------------
export function createGlow(list) {
  const pos = [];
  const col = [];
  const sizeA = [];
  const ph = [];
  const rnd = mulberry32(19);
  const cLamp = new Color('#ff5a2a');
  const cWin = new Color('#ffcc77');
  const cFlame = new Color('#ffa440');
  for (const [x, y, z, w, kind] of list) {
    pos.push(x, y, z);
    const c = kind === 1 ? cWin : kind === 2 ? cFlame : cLamp;
    col.push(c.r, c.g, c.b);
    sizeA.push(kind === 1 ? 5.5 : kind === 2 ? 6 : 8.5 + w * 2);
    ph.push(rnd() * 100);
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new Float32BufferAttribute(col, 3));
  g.setAttribute('aSize', new Float32BufferAttribute(sizeA, 1));
  g.setAttribute('aPh', new Float32BufferAttribute(ph, 1));
  const mat = new ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uScale: pointScale, uStrength: { value: 0 } },
    vertexShader: /* glsl */ `
      attribute vec3 color;
      attribute float aSize;
      attribute float aPh;
      uniform float uScale;
      uniform float uTime;
      varying vec3 vColor;
      varying float vFlick;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(aSize * uScale / -mv.z, 2.0, 120.0);
        vColor = color;
        vFlick = 0.9 + 0.1 * sin(uTime * 7.0 + aPh) * sin(uTime * 3.1 + aPh * 1.7);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uStrength;
      varying vec3 vColor;
      varying float vFlick;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float r = length(d) * 2.0;
        float a = pow(clamp(1.0 - r, 0.0, 1.0), 2.2);
        gl_FragColor = vec4(vColor * a * uStrength * vFlick, 1.0);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
  });
  const points = new Points(g, mat);
  points.frustumCulled = false;
  points.renderOrder = 4;
  return { points, material: mat };
}
