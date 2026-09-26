/**
 * 自建后期链：场景 → HalfFloat RT（MSAA）→ 亮部提取 → 可分离高斯 → 合成。
 *
 * 为什么不直接用 EffectComposer + UnrealBloomPass：
 * 本机 ANGLE/D3D11 下 UnrealBloomPass 的加法混合会把整帧清成纯黑（已实测）。
 * 这里手写全屏 pass，最终 pass 统一做 曝光 → 调色 → ACES → 暗角 → sRGB 编码。
 */
import * as THREE from 'three';

const VERT = /* glsl */`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const BRIGHT_FRAG = /* glsl */`
precision highp float;
varying vec2 vUv;
uniform sampler2D tScene;
uniform float uThreshold;
uniform float uKnee;
void main() {
  vec3 c = texture2D(tScene, vUv).rgb;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  float w = smoothstep(uThreshold, uThreshold + uKnee, l);
  gl_FragColor = vec4(c * w, 1.0);
}
`;

const BLUR_FRAG = /* glsl */`
precision highp float;
varying vec2 vUv;
uniform sampler2D tSrc;
uniform vec2 uDir;
void main() {
  vec3 sum = texture2D(tSrc, vUv).rgb * 0.227027;
  sum += (texture2D(tSrc, vUv + uDir * 1.3846153846).rgb
        + texture2D(tSrc, vUv - uDir * 1.3846153846).rgb) * 0.3162162162;
  sum += (texture2D(tSrc, vUv + uDir * 3.2307692308).rgb
        + texture2D(tSrc, vUv - uDir * 3.2307692308).rgb) * 0.0702702703;
  gl_FragColor = vec4(sum, 1.0);
}
`;

const FINAL_FRAG = /* glsl */`
precision highp float;
varying vec2 vUv;
uniform sampler2D tScene;
uniform sampler2D tBloom;
uniform float uExposure;
uniform float uBloom;
uniform float uVignette;
uniform vec3 uShadowTint;
uniform vec3 uHighTint;

vec3 aces(vec3 x) {
  const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}
vec3 toSRGB(vec3 c) {
  vec3 lo = c * 12.92;
  vec3 hi = 1.055 * pow(max(c, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055;
  return mix(lo, hi, step(vec3(0.0031308), c));
}

void main() {
  vec3 col = texture2D(tScene, vUv).rgb;
  col += texture2D(tBloom, vUv).rgb * uBloom;
  col *= uExposure;

  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col *= mix(uShadowTint, uHighTint, smoothstep(0.02, 0.55, l));

  col = aces(col);

  float d = length(vUv - 0.5) * 1.42;
  col *= 1.0 - smoothstep(0.55, 1.18, d) * uVignette;

  gl_FragColor = vec4(toSRGB(col), 1.0);
}
`;

function fullscreenGeometry() {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array([0, 0, 2, 0, 0, 2]), 2));
  return g;
}

export class PostFX {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.enabled = true;
    this.info = { calls: 0, triangles: 0 };
    this.quadScene = new THREE.Scene();
    this.quadCam = new THREE.Camera();
    this.geo = fullscreenGeometry();

    const rtOpts = {
      type: THREE.HalfFloatType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: true,
      stencilBuffer: false,
    };
    this.sceneRT = new THREE.WebGLRenderTarget(2, 2, { ...rtOpts, samples: 4 });
    const halfOpts = { ...rtOpts, depthBuffer: false };
    this.brightRT = new THREE.WebGLRenderTarget(2, 2, halfOpts);
    this.blurA = new THREE.WebGLRenderTarget(2, 2, halfOpts);
    this.blurB = new THREE.WebGLRenderTarget(2, 2, halfOpts);

    this.matBright = new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: BRIGHT_FRAG, depthTest: false, depthWrite: false,
      uniforms: { tScene: { value: null }, uThreshold: { value: 0.6 }, uKnee: { value: 0.5 } },
    });
    this.matBlur = new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: BLUR_FRAG, depthTest: false, depthWrite: false,
      uniforms: { tSrc: { value: null }, uDir: { value: new THREE.Vector2() } },
    });
    this.matFinal = new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: FINAL_FRAG, depthTest: false, depthWrite: false,
      uniforms: {
        tScene: { value: null },
        tBloom: { value: null },
        uExposure: { value: 1.04 },
        uBloom: { value: 0.5 },
        uVignette: { value: 0.34 },
        uShadowTint: { value: new THREE.Color(0.93, 0.97, 1.07) },
        uHighTint: { value: new THREE.Color(1.05, 1.01, 0.94) },
      },
    });

    this.quad = new THREE.Mesh(this.geo, this.matBright);
    this.quad.frustumCulled = false;
    this.quadScene.add(this.quad);
  }

  setSize(w, h) {
    this.width = Math.max(2, Math.floor(w));
    this.height = Math.max(2, Math.floor(h));
    this.sceneRT.setSize(this.width, this.height);
    const hw = Math.max(2, Math.floor(this.width / 2));
    const hh = Math.max(2, Math.floor(this.height / 2));
    this.brightRT.setSize(hw, hh);
    this.blurA.setSize(hw, hh);
    this.blurB.setSize(hw, hh);
  }

  set exposure(v) { this.matFinal.uniforms.uExposure.value = v; }
  set bloom(v) { this.matFinal.uniforms.uBloom.value = v; }

  _pass(material, target) {
    this.quad.material = material;
    this.renderer.setRenderTarget(target);
    if (target) this.renderer.clear(true, false, false);
    this.renderer.render(this.quadScene, this.quadCam);
  }

  render() {
    const r = this.renderer;
    if (this.enabled) {
      r.setRenderTarget(this.sceneRT);
      r.clear();
      r.render(this.scene, this.camera);
    } else {
      r.setRenderTarget(null);
      r.clear();
      r.render(this.scene, this.camera);
    }
    // 场景 pass 之后立刻取，避免被后续全屏 pass 覆盖
    this.info.calls = r.info.render.calls;
    this.info.triangles = r.info.render.triangles;
    if (!this.enabled) return;

    this.matBright.uniforms.tScene.value = this.sceneRT.texture;
    this._pass(this.matBright, this.brightRT);

    const hw = this.brightRT.width;
    const hh = this.brightRT.height;
    this.matBlur.uniforms.tSrc.value = this.brightRT.texture;
    this.matBlur.uniforms.uDir.value.set(1 / hw, 0);
    this._pass(this.matBlur, this.blurA);
    this.matBlur.uniforms.tSrc.value = this.blurA.texture;
    this.matBlur.uniforms.uDir.value.set(0, 1 / hh);
    this._pass(this.matBlur, this.blurB);
    // 第二轮：扩大辉光半径
    this.matBlur.uniforms.tSrc.value = this.blurB.texture;
    this.matBlur.uniforms.uDir.value.set(2.4 / hw, 0);
    this._pass(this.matBlur, this.blurA);
    this.matBlur.uniforms.tSrc.value = this.blurA.texture;
    this.matBlur.uniforms.uDir.value.set(0, 2.4 / hh);
    this._pass(this.matBlur, this.blurB);

    this.matFinal.uniforms.tScene.value = this.sceneRT.texture;
    this.matFinal.uniforms.tBloom.value = this.blurB.texture;
    this._pass(this.matFinal, null);
  }

  dispose() {
    this.sceneRT.dispose();
    this.brightRT.dispose();
    this.blurA.dispose();
    this.blurB.dispose();
    this.geo.dispose();
  }
}
