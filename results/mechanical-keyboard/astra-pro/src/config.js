/** The only localStorage entry this application reads or removes. */
export const STORAGE_KEY = 'form68.studio.config.v1';
export const DEFAULT_CONFIG = Object.freeze({ shell: 'moss', theme: 'field', name: '我的 FORM 68' });

export const SHELLS = Object.freeze({
  moss: { name: '苔原绿', english: 'MOSS', color: '#647053', code: 'MS' },
  stone: { name: '月岩灰', english: 'GRAPHITE', color: '#52595c', code: 'ST' },
  sand: { name: '沙丘米', english: 'SAND', color: '#c6b596', code: 'SD' },
});

export const THEMES = Object.freeze({
  field: {
    name: '原野', english: 'FIELD', code: 'FD',
    alpha: '#eeeddf', mod: '#d4d7bd', accent: '#6e7d52',
    legend: '#39422f', accentLegend: '#faf8e9',
  },
  mist: {
    name: '雾白', english: 'MIST', code: 'MT',
    alpha: '#f0f0ea', mod: '#d8dddd', accent: '#a0b5bb',
    legend: '#39464b', accentLegend: '#283a41',
  },
  dusk: {
    name: '暮色', english: 'DUSK', code: 'DK',
    alpha: '#4c5552', mod: '#343e39', accent: '#cbb38b',
    legend: '#f1f0e6', accentLegend: '#353b30',
  },
});

/** Validate every persisted property; never spread untrusted storage into state. */
export function normalizeConfig(input) {
  const value = input && typeof input === 'object' && !Array.isArray(input) ? input : {};
  return {
    shell: typeof value.shell === 'string' && Object.hasOwn(SHELLS, value.shell) ? value.shell : DEFAULT_CONFIG.shell,
    theme: typeof value.theme === 'string' && Object.hasOwn(THEMES, value.theme) ? value.theme : DEFAULT_CONFIG.theme,
    name: typeof value.name === 'string' && value.name.trim()
      ? value.name.trim().slice(0, 40) : DEFAULT_CONFIG.name,
  };
}

export function configEquals(a, b) {
  return a?.shell === b?.shell && a?.theme === b?.theme && a?.name === b?.name;
}

export function describeConfig(config) {
  const valid = normalizeConfig(config);
  return `${SHELLS[valid.shell].name} / ${THEMES[valid.theme].name}`;
}

export function configCode(config) {
  const valid = normalizeConfig(config);
  return `F68–${SHELLS[valid.shell].code}–${THEMES[valid.theme].code}`;
}

export function readConfig(storage) {
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return { config: { ...DEFAULT_CONFIG }, saved: false, error: null };
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== 1) {
      return { config: { ...DEFAULT_CONFIG }, saved: false, error: 'invalid' };
    }
    return { config: normalizeConfig(parsed), saved: true, error: null };
  } catch (error) {
    return { config: { ...DEFAULT_CONFIG }, saved: false, error: error instanceof SyntaxError ? 'invalid' : 'unavailable' };
  }
}

export function saveConfig(storage, config) {
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, ...normalizeConfig(config) }));
    return true;
  } catch { return false; }
}

export function clearConfig(storage) {
  try { storage.removeItem(STORAGE_KEY); return true; } catch { return false; }
}
