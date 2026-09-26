export const CASE_COLORS = [
  { id: 'chalk', name: '雾白', english: 'Chalk', color: '#d8d7d0', ink: '#55564f' },
  { id: 'graphite', name: '岩墨', english: 'Graphite', color: '#414648', ink: '#e9e6dc' },
  { id: 'sage', name: '鼠尾草', english: 'Sage', color: '#8b9986', ink: '#293b30' },
] as const;

export const KEYCAP_THEMES = [
  {
    id: 'studio', name: '原点', english: 'Studio',
    alpha: '#e8e5dc', modifier: '#b9bbb2', accent: '#d66539',
    ink: '#42463f', accentInk: '#fff5e8',
  },
  {
    id: 'nocturne', name: '夜航', english: 'Nocturne',
    alpha: '#464a4b', modifier: '#303638', accent: '#d5c4a3',
    ink: '#eee9df', accentInk: '#393b38',
  },
  {
    id: 'botanical', name: '苔原', english: 'Botanical',
    alpha: '#dddcd0', modifier: '#8e9c88', accent: '#526b57',
    ink: '#394d3d', accentInk: '#f3f0e4',
  },
] as const;

export type CaseColorId = typeof CASE_COLORS[number]['id'];
export type KeycapThemeId = typeof KEYCAP_THEMES[number]['id'];
export interface Configuration {
  caseColor: CaseColorId;
  keycapTheme: KeycapThemeId;
  name: string;
}

export const DEFAULT_CONFIG: Configuration = {
  caseColor: 'chalk',
  keycapTheme: 'studio',
  name: '我的 Forma 68',
};

export const STORAGE_KEY = 'forma68:configuration:v1';

export function persistConfiguration(config: Configuration): Configuration {
  const normalized = { ...config, name: config.name.trim().slice(0, 32) || DEFAULT_CONFIG.name };
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, config: normalized }));
  return normalized;
}

export function clearSavedConfiguration() {
  localStorage.removeItem(STORAGE_KEY);
}

export function loadConfiguration(): { config: Configuration; saved: Configuration | null } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { config: { ...DEFAULT_CONFIG }, saved: null };
    const data: unknown = JSON.parse(raw);
    if (!data || typeof data !== 'object') throw new Error('Invalid configuration');
    const record = data as Record<string, unknown>;
    if (record.version !== 1 || !record.config || typeof record.config !== 'object') {
      throw new Error('Unsupported configuration');
    }
    const config = record.config as Record<string, unknown>;
    if (
      !CASE_COLORS.some((item) => item.id === config.caseColor) ||
      !KEYCAP_THEMES.some((item) => item.id === config.keycapTheme) ||
      typeof config.name !== 'string'
    ) throw new Error('Invalid configuration values');
    const valid: Configuration = {
      caseColor: config.caseColor as CaseColorId,
      keycapTheme: config.keycapTheme as KeycapThemeId,
      name: config.name.trim().slice(0, 32) || DEFAULT_CONFIG.name,
    };
    return { config: valid, saved: valid };
  } catch {
    return { config: { ...DEFAULT_CONFIG }, saved: null };
  }
}

export function configurationsMatch(a: Configuration, b: Configuration | null) {
  return !!b && a.caseColor === b.caseColor && a.keycapTheme === b.keycapTheme && a.name === b.name;
}