// 65% 紧凑布局：16u 宽 × 5 行，共 68 键
// 每项：[显示字符, 键宽(u), KeyboardEvent.code, 类别]
// 类别：alpha 字母/数字区 · mod 功能键 · accent 强调键
export const UNIT = 0.72; // 1u 的三维尺寸

export const LAYOUT = [
  // Row 0 —— 数字行
  [
    ['`', 1, 'Backquote', 'alpha'],
    ['1', 1, 'Digit1', 'alpha'], ['2', 1, 'Digit2', 'alpha'], ['3', 1, 'Digit3', 'alpha'],
    ['4', 1, 'Digit4', 'alpha'], ['5', 1, 'Digit5', 'alpha'], ['6', 1, 'Digit6', 'alpha'],
    ['7', 1, 'Digit7', 'alpha'], ['8', 1, 'Digit8', 'alpha'], ['9', 1, 'Digit9', 'alpha'],
    ['0', 1, 'Digit0', 'alpha'], ['-', 1, 'Minus', 'alpha'], ['=', 1, 'Equal', 'alpha'],
    ['⌫', 2, 'Backspace', 'mod'],
    ['Home', 1, 'Home', 'mod'],
  ],
  // Row 1
  [
    ['Tab', 1.5, 'Tab', 'mod'],
    ['Q', 1, 'KeyQ', 'alpha'], ['W', 1, 'KeyW', 'alpha'], ['E', 1, 'KeyE', 'alpha'],
    ['R', 1, 'KeyR', 'alpha'], ['T', 1, 'KeyT', 'alpha'], ['Y', 1, 'KeyY', 'alpha'],
    ['U', 1, 'KeyU', 'alpha'], ['I', 1, 'KeyI', 'alpha'], ['O', 1, 'KeyO', 'alpha'],
    ['P', 1, 'KeyP', 'alpha'], ['[', 1, 'BracketLeft', 'alpha'], [']', 1, 'BracketRight', 'alpha'],
    ['\\', 1.5, 'Backslash', 'alpha'],
    ['PgUp', 1, 'PageUp', 'mod'],
  ],
  // Row 2
  [
    ['Caps', 1.75, 'CapsLock', 'mod'],
    ['A', 1, 'KeyA', 'alpha'], ['S', 1, 'KeyS', 'alpha'], ['D', 1, 'KeyD', 'alpha'],
    ['F', 1, 'KeyF', 'alpha'], ['G', 1, 'KeyG', 'alpha'], ['H', 1, 'KeyH', 'alpha'],
    ['J', 1, 'KeyJ', 'alpha'], ['K', 1, 'KeyK', 'alpha'], ['L', 1, 'KeyL', 'alpha'],
    [';', 1, 'Semicolon', 'alpha'], ["'", 1, 'Quote', 'alpha'],
    ['Enter', 2.25, 'Enter', 'accent'],
    ['PgDn', 1, 'PageDown', 'mod'],
  ],
  // Row 3
  [
    ['Shift', 2.25, 'ShiftLeft', 'mod'],
    ['Z', 1, 'KeyZ', 'alpha'], ['X', 1, 'KeyX', 'alpha'], ['C', 1, 'KeyC', 'alpha'],
    ['V', 1, 'KeyV', 'alpha'], ['B', 1, 'KeyB', 'alpha'], ['N', 1, 'KeyN', 'alpha'],
    ['M', 1, 'KeyM', 'alpha'], [',', 1, 'Comma', 'alpha'], ['.', 1, 'Period', 'alpha'],
    ['/', 1, 'Slash', 'alpha'],
    ['Shift', 1.75, 'ShiftRight', 'mod'],
    ['↑', 1, 'ArrowUp', 'mod'],
    ['End', 1, 'End', 'mod'],
  ],
  // Row 4 —— 底行
  [
    ['Ctrl', 1.25, 'ControlLeft', 'mod'],
    ['Win', 1.25, 'MetaLeft', 'mod'],
    ['Alt', 1.25, 'AltLeft', 'mod'],
    ['', 6.25, 'Space', 'alpha'],
    ['Alt', 1, 'AltRight', 'mod'],
    ['Fn', 1, 'FnRight', 'mod'],
    ['Ctrl', 1, 'ControlRight', 'mod'],
    ['←', 1, 'ArrowLeft', 'mod'],
    ['↓', 1, 'ArrowDown', 'mod'],
    ['→', 1, 'ArrowRight', 'mod'],
  ],
];

// 每行键帽的雕塑高度差（行越高越靠后）
export const ROW_HEIGHT = [0.16, 0.1, 0.04, 0.1, 0.16];

export const CASE_COLORS = [
  { id: 'obsidian', name: '曜石黑', hex: '#23252b', chip: ['#2e3138', '#15161a'] },
  { id: 'glacier', name: '冰川银', hex: '#c9ccd4', chip: ['#e3e6ec', '#9aa0ac'] },
  { id: 'dusk', name: '暮山紫', hex: '#5b4e7d', chip: ['#75669c', '#3d3554'] },
];

export const KEYCAP_THEMES = [
  {
    id: 'fog',
    name: '晨雾白',
    alpha: '#eceae4', mod: '#c7c4bc', accent: '#ff5c39',
    legend: '#3a3d45', legendAccent: '#ffffff',
    chip: ['#eceae4', '#c7c4bc'],
  },
  {
    id: 'carbon',
    name: '碳素黑',
    alpha: '#3a3d44', mod: '#26282e', accent: '#ffb020',
    legend: '#cfd3dc', legendAccent: '#1c1d21',
    chip: ['#3a3d44', '#26282e'],
  },
  {
    id: 'seasalt',
    name: '海盐蓝',
    alpha: '#e8eef2', mod: '#7fa3c4', accent: '#e2703a',
    legend: '#2e4b63', legendAccent: '#ffffff',
    chip: ['#e8eef2', '#7fa3c4'],
  },
];
