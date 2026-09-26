/**
 * 外壳配色（3 种）与键帽主题（3 种），两者独立、可任意组合。
 */

/** 键帽上的重点配色键（Esc / 回车 / 空格 / 方向键） */
export const ACCENT_LEGENDS = ['Esc', 'Enter', 'Space', 'Up', 'Down', 'Left', 'Right'];

export const SHELLS = [
  {
    id: 'starlight',
    name: '星野白',
    en: 'Starlight White',
    caseColor: '#e7e8e4',
    caseRoughness: 0.44,
    caseMetalness: 0.14,
    plateColor: '#c7cbd0',
    plateRoughness: 0.3,
    plateMetalness: 0.78,
    portColor: '#3a3d43',
  },
  {
    id: 'spacegrey',
    name: '深空灰',
    en: 'Space Grey',
    caseColor: '#5f646b',
    caseRoughness: 0.4,
    caseMetalness: 0.5,
    plateColor: '#9ba1a8',
    plateRoughness: 0.32,
    plateMetalness: 0.8,
    portColor: '#23262b',
  },
  {
    id: 'midnight',
    name: '极夜黑',
    en: 'Midnight Black',
    caseColor: '#17181b',
    caseRoughness: 0.36,
    caseMetalness: 0.55,
    plateColor: '#e2622d',
    plateRoughness: 0.38,
    plateMetalness: 0.6,
    portColor: '#0b0c0e',
  },
];

export const THEMES = [
  {
    id: 'retro',
    name: '复古灰白',
    en: 'Retro Beige',
    baseColor: '#d8d2c4',
    baseLegend: '#3b372f',
    accentColor: '#b5503f',
    accentLegend: '#f6efe4',
    switchColor: '#c64b4b',
    legendWeight: 620,
  },
  {
    id: 'ink',
    name: '墨黑透光',
    en: 'Ink Black',
    baseColor: '#232529',
    baseLegend: '#e9ebef',
    accentColor: '#5b8cff',
    accentLegend: '#f4f7ff',
    switchColor: '#4d7dff',
    legendWeight: 620,
  },
  {
    id: 'cream',
    name: '奶油汽水',
    en: 'Cream Soda',
    baseColor: '#f0e7d6',
    baseLegend: '#4a443a',
    accentColor: '#f2854a',
    accentLegend: '#3a2416',
    switchColor: '#f2854a',
    legendWeight: 640,
  },
];

export const getShell = (id) => SHELLS.find((s) => s.id === id) || SHELLS[0];
export const getTheme = (id) => THEMES.find((t) => t.id === id) || THEMES[0];
