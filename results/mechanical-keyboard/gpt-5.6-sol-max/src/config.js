export const CASE_COLORS = [
  {
    id: 'meteor',
    name: '陨石黑',
    detail: '阳极氧化铝',
    color: '#24272b',
    edge: '#4d535c',
    accent: '#ff6b35',
    swatch: 'linear-gradient(135deg, #555b63 0%, #17191c 78%)',
  },
  {
    id: 'lunar',
    name: '月岩银',
    detail: '微珠喷砂铝',
    color: '#aeb4b9',
    edge: '#e7ebec',
    accent: '#ff6338',
    swatch: 'linear-gradient(135deg, #f0f2f1 0%, #8d959c 78%)',
  },
  {
    id: 'forest',
    name: '苔原绿',
    detail: '深色电泳铝',
    color: '#354b43',
    edge: '#789083',
    accent: '#f2bb55',
    swatch: 'linear-gradient(135deg, #718a7d 0%, #23352f 78%)',
  },
];

export const KEY_THEMES = [
  {
    id: 'carbon',
    name: '碳素',
    hint: '冷灰 / 橙',
    alpha: '#d4d1c8',
    modifier: '#393d42',
    accentKey: '#f06432',
    legendOnLight: '#202328',
    legendOnDark: '#f4f1e9',
    accent: '#ff6b35',
    preview: ['#d4d1c8', '#393d42', '#f06432'],
  },
  {
    id: 'paper',
    name: '纸境',
    hint: '暖白 / 墨',
    alpha: '#eee9dc',
    modifier: '#d4c7ad',
    accentKey: '#303b47',
    legendOnLight: '#313230',
    legendOnDark: '#f7f3e8',
    accent: '#d19049',
    preview: ['#eee9dc', '#d4c7ad', '#303b47'],
  },
  {
    id: 'signal',
    name: '信号',
    hint: '深紫 / 青',
    alpha: '#28283a',
    modifier: '#171923',
    accentKey: '#5ce1d4',
    legendOnLight: '#111820',
    legendOnDark: '#eeecff',
    accent: '#5ce1d4',
    preview: ['#28283a', '#171923', '#5ce1d4'],
  },
];

export const DEFAULT_CONFIG = {
  caseId: 'meteor',
  themeId: 'carbon',
};

export const STORAGE_KEY = 'kepler-65-config-v1';
