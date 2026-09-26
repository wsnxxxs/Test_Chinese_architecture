/**
 * 产品配色与轴体数据：外壳配色 × 键帽主题可任意组合
 */

export const CASE_COLORS = [
  {
    id: 'graphite',
    name: '石墨黑',
    desc: '阳极氧化 · 细砂质感',
    color: '#26292f',
    metalness: 0.62,
    roughness: 0.46,
  },
  {
    id: 'moon',
    name: '月岩银',
    desc: '喷砂铝材 · 冷冽反光',
    color: '#b9bfc8',
    metalness: 0.92,
    roughness: 0.33,
  },
  {
    id: 'navy',
    name: '深海蓝',
    desc: '哑光漆面 · 沉稳深色',
    color: '#2c4266',
    metalness: 0.55,
    roughness: 0.42,
  },
];

export const KEYCAP_THEMES = [
  {
    id: 'frost',
    name: '晨雾白',
    desc: '白灰拼色 · 珊瑚点缀',
    alpha: '#eae8e3',
    mod: '#c4c8cf',
    accent: '#e2573c',
    legend: '#2b2e35',
    legendOnAccent: '#fff4ef',
  },
  {
    id: 'carbon',
    name: '碳影黑',
    desc: '深灰拼色 · 琥珀点缀',
    alpha: '#33373f',
    mod: '#212429',
    accent: '#e0a63c',
    legend: '#d9dce2',
    legendOnAccent: '#241a06',
  },
  {
    id: 'retro',
    name: '复古米',
    desc: '奶油米白 · 湖蓝点缀',
    alpha: '#e5d8ba',
    mod: '#b0906a',
    accent: '#2f7d78',
    legend: '#4a3c2c',
    legendOnAccent: '#eafaf7',
  },
];

export const SWITCH_TYPES = [
  {
    id: 'red',
    name: '红轴',
    feel: '线性 · 45g',
    desc: '顺滑直上直下',
    stem: '#cf4436',
    press: 1.0,
  },
  {
    id: 'brown',
    name: '茶轴',
    feel: '段落 · 55g',
    desc: '轻微段落感',
    stem: '#96602e',
    press: 0.82,
  },
  {
    id: 'blue',
    name: '青轴',
    feel: '有声段落 · 60g',
    desc: '清脆确认感',
    stem: '#2f6fd0',
    press: 0.72,
  },
];

export const DEFAULT_ENGRAVE = 'LUMEN';

export function findItem(list, id) {
  return list.find((item) => item.id === id) || list[0];
}
