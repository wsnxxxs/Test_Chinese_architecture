/**
 * 夜景发光登记表：白天/夜晚切换时统一调节
 *  - 自发光材质（窗户、灯泡、招牌）
 *  - 加法混合的光晕 Sprite
 *  - 少量真实 PointLight（车站、广场）
 */
const emissives = []; // { mat, max }
const sprites = []; // { sprite, max }
const lights = []; // { light, max }

export function registerEmissive(mat, max = 1) {
  if (!emissives.some((e) => e.mat === mat)) {
    mat.emissiveIntensity = 0;
    emissives.push({ mat, max });
  }
  return mat;
}

export function registerSprite(sprite, max = 1) {
  sprite.material.opacity = 0;
  sprites.push({ sprite, max });
  return sprite;
}

export function registerLight(light, max = 1) {
  light.intensity = 0;
  lights.push({ light, max });
  return light;
}

/** t: 0 = 白天（不发光），1 = 夜晚 */
export function setGlow(t) {
  for (const e of emissives) e.mat.emissiveIntensity = t * e.max;
  for (const s of sprites) s.sprite.material.opacity = t * s.max;
  for (const l of lights) l.light.intensity = t * l.max;
}

export function glowLevel() {
  return emissives.length ? emissives[0].mat.emissiveIntensity / (emissives[0].max || 1) : 0;
}
