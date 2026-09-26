/**
 * 夜景发光登记表：窗户、路灯、车灯等材质在这里登记，
 * 昼夜切换时统一按 mix（0=白天 / 1=夜晚）插值发光强度与辉光透明度。
 */
const entries = [];

export function registerGlow(material, opts = {}) {
  entries.push({
    material,
    emissiveDay: opts.emissiveDay ?? 0,
    emissiveNight: opts.emissiveNight ?? 1.4,
    opacityDay: opts.opacityDay ?? 0,
    opacityNight: opts.opacityNight ?? 0.8,
  });
}

export function applyNight(mix) {
  const t = Math.min(1, Math.max(0, mix));
  for (const e of entries) {
    const m = e.material;
    if ('emissiveIntensity' in m) {
      m.emissiveIntensity = e.emissiveDay + (e.emissiveNight - e.emissiveDay) * t;
    }
    if (m.transparent) {
      m.opacity = e.opacityDay + (e.opacityNight - e.opacityDay) * t;
    }
    m.needsUpdate = true;
  }
}

export function glowCount() {
  return entries.length;
}
