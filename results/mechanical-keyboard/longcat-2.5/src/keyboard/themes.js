/**
 * Color themes for case and keycaps.
 */

export const CASE_COLORS = [
  {
    id: 'obsidian',
    name: '曜石黑',
    desc: '深邃哑光黑，金色点缀',
    body: '#1a1a2e',
    bodyAccent: '#16213e',
    plate: '#0f3460',
    plateEdge: '#e2b714',
    ledColor: '#e2b714',
  },
  {
    id: 'arctic',
    name: '冰川白',
    desc: '简洁纯白，银色定位板',
    body: '#f0f0f0',
    bodyAccent: '#e0e0e0',
    plate: '#c0c0c0',
    plateEdge: '#888888',
    ledColor: '#4fc3f7',
  },
  {
    id: 'midnight',
    name: '午夜蓝',
    desc: '深蓝星空，橙色点缀',
    body: '#0d1b2a',
    bodyAccent: '#1b2838',
    plate: '#2c3e50',
    plateEdge: '#ff6b35',
    ledColor: '#ff6b35',
  },
];

export const KEYCAP_THEMES = [
  {
    id: 'classic',
    name: '经典白',
    desc: '纯白键帽，深灰字符',
    alphas: '#ffffff',
    alphasText: '#333333',
    mods: '#e8e8e8',
    modsText: '#555555',
    accent: '#e2b714',
    accentText: '#1a1a2e',
    spaceColor: '#f5f5f5',
  },
  {
    id: 'dark',
    name: '暗夜黑',
    desc: '深灰键帽，白色字符',
    alphas: '#2d2d2d',
    alphasText: '#f0f0f0',
    mods: '#1a1a1a',
    modsText: '#aaaaaa',
    accent: '#e2b714',
    accentText: '#1a1a2e',
    spaceColor: '#333333',
  },
  {
    id: 'retro',
    name: '复古橙',
    desc: '米白主键，橙色功能键',
    alphas: '#f5e6d3',
    alphasText: '#4a3728',
    mods: '#d4956a',
    modsText: '#ffffff',
    accent: '#ff6b35',
    accentText: '#ffffff',
    spaceColor: '#f5e6d3',
  },
];

/** Default configuration */
export const DEFAULT_CONFIG = {
  caseColor: 'obsidian',
  keycapTheme: 'classic',
  switchType: 'tactile',
  ledBrightness: 80,
  explodeAmount: 0,
  viewMode: 'assembled',
};

export const SWITCH_TYPES = [
  { id: 'linear',   name: '线性轴', desc: '顺滑直上直下' },
  { id: 'tactile',  name: '段落轴', desc: '轻微触感反馈' },
  { id: 'clicky',   name: '咔哒轴', desc: '清脆段落声响' },
];
