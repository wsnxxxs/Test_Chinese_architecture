/**
 * 产品配置数据：外壳配色、键帽主题、默认状态与本地持久化。
 * 只读写属于本页面的单个 localStorage 键。
 */

export const CASES = [
  {
    id: 'graphite',
    name: '石墨黑',
    swatch: '#262a31',
    color: '#1b1d22',
    roughness: 0.42,
    metalness: 0.2,
  },
  {
    id: 'lunar',
    name: '月岩银',
    swatch: '#c6cbd3',
    color: '#b4bac4',
    roughness: 0.32,
    metalness: 0.62,
  },
  {
    id: 'moss',
    name: '苔原绿',
    swatch: '#3f6a5c',
    color: '#2e5348',
    roughness: 0.46,
    metalness: 0.2,
  },
];

export const THEMES = [
  {
    id: 'frost',
    name: '霜白 · 橘影',
    accent: '#e8842c',
    caps: { base: '#e9e6de', mod: '#c9c3b2', accentKey: '#e8842c', space: '#d8d3c4' },
    legend: '#3b372e',
  },
  {
    id: 'ink',
    name: '墨玉 · 夜航',
    accent: '#4fd8c6',
    caps: { base: '#343943', mod: '#23262d', accentKey: '#4fd8c6', space: '#2b2f37' },
    legend: '#e6e4dc',
  },
  {
    id: 'sunset',
    name: '乳白 · 落日',
    accent: '#d14b32',
    caps: { base: '#efe8d3', mod: '#ddd2b6', accentKey: '#d14b32', space: '#e4dcc6' },
    legend: '#4a4336',
  },
];

export const STORAGE_KEY = 'axis68.config.v1';

export const DEFAULTS = {
  caseId: 'graphite',
  themeId: 'frost',
  exploded: false,
  experience: true,
  sound: true,
};

export const findCase = (id) => CASES.find((c) => c.id === id) ?? CASES[0];
export const findTheme = (id) => THEMES.find((t) => t.id === id) ?? THEMES[0];

export function loadConfig() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const o = JSON.parse(raw);
    const out = {};
    if (CASES.some((c) => c.id === o.caseId)) out.caseId = o.caseId;
    if (THEMES.some((t) => t.id === o.themeId)) out.themeId = o.themeId;
    if (typeof o.exploded === 'boolean') out.exploded = o.exploded;
    if (typeof o.experience === 'boolean') out.experience = o.experience;
    if (typeof o.sound === 'boolean') out.sound = o.sound;
    return out;
  } catch {
    return {};
  }
}

export function saveConfig(state) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        caseId: state.caseId,
        themeId: state.themeId,
        exploded: state.exploded,
        experience: state.experience,
        sound: state.sound,
        savedAt: Date.now(),
      })
    );
    return true;
  } catch {
    return false;
  }
}

export function clearConfig() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* 忽略：隐私模式等场景下无法清除也没有副作用 */
  }
}
