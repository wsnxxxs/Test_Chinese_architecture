export const STORAGE_KEY = 'loom68:configuration:v1';

export const CASES = [
  { id: 'moss', name: '苔绿', english: 'MOSS', color: '#7b8973', roughness: 0.4 },
  { id: 'silver', name: '雾银', english: 'MIST', color: '#bcc1bc', roughness: 0.32 },
  { id: 'graphite', name: '墨岩', english: 'INK', color: '#42484c', roughness: 0.4 },
];

export const THEMES = [
  { id: 'matcha', name: '抹茶拿铁', english: 'MATCHA', alpha: '#efecde', modifier: '#c8d2bb', accent: '#617553', legend: '#46503b', accentLegend: '#f4f2e4' },
  { id: 'oat', name: '燕麦奶油', english: 'OAT', alpha: '#f3ead7', modifier: '#ddc9ab', accent: '#b17c53', legend: '#61523f', accentLegend: '#fff5e4' },
  { id: 'midnight', name: '午夜蓝调', english: 'MIDNIGHT', alpha: '#425068', modifier: '#2e394c', accent: '#9cb9c8', legend: '#e6edf3', accentLegend: '#2c4050' },
];

export const DEFAULT_CONFIG = { case: 'moss', theme: 'matcha', name: '' };

export function readConfiguration() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && CASES.some((item) => item.id === saved.case) && THEMES.some((item) => item.id === saved.theme)) {
      return { config: { case: saved.case, theme: saved.theme, name: typeof saved.name === 'string' ? saved.name.slice(0, 32) : '' }, saved: true };
    }
  } catch {
    // An unavailable store or an old value still leaves the default studio usable.
  }
  return { config: { ...DEFAULT_CONFIG }, saved: false };
}

const key = (label, code, width = 1, secondary = '') => ({ label, code, width, secondary });

export const KEY_ROWS = [
  [key('esc', 'Escape'), ...'1234567890'.split('').map((n, i) => key(n, `Digit${n}`, 1, '!@#$%^&*()'[i])), key('−', 'Minus', 1, '_'), key('=', 'Equal', 1, '+'), key('backspace', 'Backspace', 2), key('home', 'Home')],
  [key('tab', 'Tab', 1.5), ...'QWERTYUIOP'.split('').map((l) => key(l, `Key${l}`)), key('[', 'BracketLeft', 1, '{'), key(']', 'BracketRight', 1, '}'), key('\\', 'Backslash', 1.5, '|'), key('pg up', 'PageUp')],
  [key('caps lock', 'CapsLock', 1.75), ...'ASDFGHJKL'.split('').map((l) => key(l, `Key${l}`)), key(';', 'Semicolon', 1, ':'), key("'", 'Quote', 1, '"'), key('enter', 'Enter', 2.25), key('pg dn', 'PageDown')],
  [key('shift', 'ShiftLeft', 2.25), ...'ZXCVBNM'.split('').map((l) => key(l, `Key${l}`)), key(',', 'Comma', 1, '<'), key('.', 'Period', 1, '>'), key('/', 'Slash', 1, '?'), key('shift', 'ShiftRight', 1.75), key('↑', 'ArrowUp'), key('end', 'End')],
  [key('ctrl', 'ControlLeft', 1.25), key('⌘', 'MetaLeft', 1.25), key('alt', 'AltLeft', 1.25), key('loom', 'Space', 6.25), key('alt', 'AltRight'), key('fn', 'Fn'), key('ctrl', 'ControlRight'), key('←', 'ArrowLeft'), key('↓', 'ArrowDown'), key('→', 'ArrowRight')],
];
