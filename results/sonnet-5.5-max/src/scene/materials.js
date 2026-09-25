import { MeshStandardMaterial, Color } from 'three';

/** Shared uniforms driven by the time-of-day system. */
export const voxelUniforms = {
  uGlow: { value: 0.0 }, // lantern / window emissive multiplier
  uTime: { value: 0.0 },
  uFogTint: { value: new Color('#8f86b8') }, // cool haze colour mixed into the far fog
  uMist: { value: 0.0 }, // strength of the low-lying ground mist (dawn / dusk)
};

/**
 * Standard PBR material with baked vertex colour (albedo*AO) plus two extra
 * per-vertex channels (aMat = glow, gloss): glazed tiles get shinier, lanterns emit.
 * The fog chunk is replaced by: exp² distance fog (optionally boosted / tinted for far scenery)
 * combined with a height-dependent ground mist.
 */
export function createVoxelMaterial(o = {}) {
  const mat = new MeshStandardMaterial({
    vertexColors: true,
    roughness: o.roughness ?? 0.9,
    metalness: 0.0,
    envMapIntensity: 0.6,
  });
  const fogBoost = o.fogBoost ?? 1;
  const fogTint = o.fogTint ?? 0;
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uGlow = voxelUniforms.uGlow;
    shader.uniforms.uTime = voxelUniforms.uTime;
    shader.uniforms.uFogBoost = { value: fogBoost };
    shader.uniforms.uFogTint = voxelUniforms.uFogTint;
    shader.uniforms.uFogTintAmt = { value: fogTint };
    shader.uniforms.uMist = voxelUniforms.uMist;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec2 aMat;\nvarying vec2 vMat;\nvarying float vWorldY;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvMat = aMat;\nvWorldY = (modelMatrix * vec4(transformed, 1.0)).y;');
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        varying vec2 vMat;
        varying float vWorldY;
        uniform float uGlow;
        uniform float uTime;
        uniform float uFogBoost;
        uniform vec3 uFogTint;
        uniform float uFogTintAmt;
        uniform float uMist;`,
      )
      .replace(
        '#include <fog_fragment>',
        `#ifdef USE_FOG
          #ifdef FOG_EXP2
            float fogFactor = 1.0 - exp( - fogDensity * fogDensity * uFogBoost * vFogDepth * vFogDepth );
          #else
            float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
          #endif
          // ground mist: thick near the pond / courtyards, thinning quickly with height
          float mistF = uMist * exp( - max( vWorldY - 8.0, 0.0 ) * 0.055 ) * ( 1.0 - exp( - vFogDepth * 0.0065 ) );
          fogFactor = 1.0 - ( 1.0 - fogFactor ) * ( 1.0 - mistF );
          vec3 fogCol = mix( fogColor, uFogTint, uFogTintAmt );
          gl_FragColor.rgb = mix( gl_FragColor.rgb, fogCol, fogFactor );
        #endif`,
      )
      .replace(
        '#include <roughnessmap_fragment>',
        `#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.28, vMat.y);`,
      )
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
        totalEmissiveRadiance += diffuseColor.rgb * vMat.x * uGlow;`,
      );
  };
  mat.customProgramCacheKey = () => 'voxel-mat-v2';
  return mat;
}
