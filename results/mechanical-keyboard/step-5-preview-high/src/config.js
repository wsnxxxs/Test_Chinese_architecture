// 产品信息、配色主题与全局常量

export const PRODUCT = {
  name: 'AXIA K65',
  tagline: '65% 紧凑布局 · 67 枚键帽 · 客制化机械键盘',
  intro:
    '紧凑机身里的全尺寸手感：Gasket 硅胶套减震结构、双色注塑 PBT 键帽与三模连接。选择外壳配色与键帽主题，实时预览属于你的那一把。',
  chips: ['65% 布局', 'Gasket 结构', '三模连接', 'PBT 键帽'],
};

// 外壳配色（底壳 + 定位板周边金属件随主题变化）
export const CASE_THEMES = [
  {
    id: 'cloud',
    name: '云雾白',
    color: 0xeceae4,
    metalness: 0.35,
    roughness: 0.42,
    badge: '#4b525b',
    swatch: 'linear-gradient(135deg,#f8f7f4 0%,#dcdad3 100%)',
  },
  {
    id: 'graphite',
    name: '石墨灰',
    color: 0x42464c,
    metalness: 0.62,
    roughness: 0.34,
    badge: '#c9ced6',
    swatch: 'linear-gradient(135deg,#5c6169 0%,#2f3237 100%)',
  },
  {
    id: 'pine',
    name: '松林绿',
    color: 0x2f4b3d,
    metalness: 0.55,
    roughness: 0.38,
    badge: '#b9cdbd',
    swatch: 'linear-gradient(135deg,#416f57 0%,#223a2d 100%)',
  },
];

// 键帽主题（accent 为强调键位，accentKeys 之外的键位使用基础色）
export const CAP_THEMES = [
  {
    id: 'onyx',
    name: '曜石黑',
    color: 0x2c2e33,
    legend: 0xe9ebef,
    sub: 0x9aa1ab,
    accent: null,
    accentKeys: [],
    swatch: 'linear-gradient(135deg,#3a3d43 0%,#1e2024 100%)',
  },
  {
    id: 'ivory',
    name: '奶醇白',
    color: 0xe9e4d8,
    legend: 0x3c3a34,
    sub: 0x8f8a7e,
    accent: null,
    accentKeys: [],
    swatch: 'linear-gradient(135deg,#f4efe3 0%,#d8d2c2 100%)',
  },
  {
    id: 'retro',
    name: '加州橙',
    color: 0xd8cebb,
    legend: 0x5b4c3a,
    sub: 0x9a8b74,
    accent: 0xd4692c,
    accentLegend: 0xfdf1e5,
    accentKeys: ['esc', 'enter', 'space', 'left', 'up', 'down', 'right', 'rshift'],
    swatch: 'linear-gradient(135deg,#e07a3a 0%,#d4692c 55%,#d8cebb 55%,#cfc5ae 100%)',
  },
];

export const SPECS = [
  ['布局', '65% 紧凑 / 67 键'],
  ['结构', 'Gasket 硅胶套减震'],
  ['轴体', '静音线性轴 V2'],
  ['键帽', '双色注塑 PBT · OEM 高度'],
  ['定位板', '1.5mm 开槽 PC 定位板'],
  ['连接', '有线 / 2.4G / 蓝牙 5.1'],
  ['倾角', '5.5° 人体工学倾角'],
];

export const DEFAULT_CONFIG = {
  case: 'cloud',
  caps: 'onyx',
  exploded: false,
  experience: false,
  sound: false,
};

export const STORAGE_KEY = 'axia.k65.config.v1';

// 机身倾角（度）：后高前低
export const TILT_DEG = 5.5;
