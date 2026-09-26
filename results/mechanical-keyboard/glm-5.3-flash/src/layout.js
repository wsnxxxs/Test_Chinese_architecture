/**
 * AXIS 68 配列：65% 紧凑布局，5 行共 67 键。
 * - 字母区 / 数字行 / 方向键齐全
 * - 不同宽度的空格(6.25u)、回车(2.25u)、Shift(2.25u / 1.75u)
 * - code 对应 KeyboardEvent.code，用于「键入体验」
 * - role: base 字母区 / mod 修饰区 / accent 强调键(Esc·Enter) / space 空格
 * - sub 为 Shift 上档字符（画在键帽上方小字）
 */

export const ROWS = [
  [
    { code: 'Escape', label: 'Esc', sub: '`', w: 1, role: 'accent' },
    { code: 'Digit1', label: '1', sub: '!', w: 1, role: 'base' },
    { code: 'Digit2', label: '2', sub: '@', w: 1, role: 'base' },
    { code: 'Digit3', label: '3', sub: '#', w: 1, role: 'base' },
    { code: 'Digit4', label: '4', sub: '$', w: 1, role: 'base' },
    { code: 'Digit5', label: '5', sub: '%', w: 1, role: 'base' },
    { code: 'Digit6', label: '6', sub: '^', w: 1, role: 'base' },
    { code: 'Digit7', label: '7', sub: '&', w: 1, role: 'base' },
    { code: 'Digit8', label: '8', sub: '*', w: 1, role: 'base' },
    { code: 'Digit9', label: '9', sub: '(', w: 1, role: 'base' },
    { code: 'Digit0', label: '0', sub: ')', w: 1, role: 'base' },
    { code: 'Minus', label: '-', sub: '_', w: 1, role: 'base' },
    { code: 'Equal', label: '=', sub: '+', w: 1, role: 'base' },
    { code: 'Backspace', label: 'Backspace', w: 2, role: 'mod' },
    { code: 'Home', label: 'Home', w: 1, role: 'mod' },
  ],
  [
    { code: 'Tab', label: 'Tab', w: 1.5, role: 'mod' },
    { code: 'KeyQ', label: 'Q', w: 1, role: 'base' },
    { code: 'KeyW', label: 'W', w: 1, role: 'base' },
    { code: 'KeyE', label: 'E', w: 1, role: 'base' },
    { code: 'KeyR', label: 'R', w: 1, role: 'base' },
    { code: 'KeyT', label: 'T', w: 1, role: 'base' },
    { code: 'KeyY', label: 'Y', w: 1, role: 'base' },
    { code: 'KeyU', label: 'U', w: 1, role: 'base' },
    { code: 'KeyI', label: 'I', w: 1, role: 'base' },
    { code: 'KeyO', label: 'O', w: 1, role: 'base' },
    { code: 'KeyP', label: 'P', w: 1, role: 'base' },
    { code: 'BracketLeft', label: '[', sub: '{', w: 1, role: 'base' },
    { code: 'BracketRight', label: ']', sub: '}', w: 1, role: 'base' },
    { code: 'Backslash', label: '\\', sub: '|', w: 1.5, role: 'mod' },
    { code: 'End', label: 'End', w: 1, role: 'mod' },
  ],
  [
    { code: 'CapsLock', label: 'Caps', w: 1.75, role: 'mod' },
    { code: 'KeyA', label: 'A', w: 1, role: 'base' },
    { code: 'KeyS', label: 'S', w: 1, role: 'base' },
    { code: 'KeyD', label: 'D', w: 1, role: 'base' },
    { code: 'KeyF', label: 'F', w: 1, role: 'base' },
    { code: 'KeyG', label: 'G', w: 1, role: 'base' },
    { code: 'KeyH', label: 'H', w: 1, role: 'base' },
    { code: 'KeyJ', label: 'J', w: 1, role: 'base' },
    { code: 'KeyK', label: 'K', w: 1, role: 'base' },
    { code: 'KeyL', label: 'L', w: 1, role: 'base' },
    { code: 'Semicolon', label: ';', sub: ':', w: 1, role: 'base' },
    { code: 'Quote', label: "'", sub: '"', w: 1, role: 'base' },
    { code: 'Enter', label: 'Enter', w: 2.25, role: 'accent' },
    { code: 'PageUp', label: 'PgUp', w: 1, role: 'mod' },
  ],
  [
    { code: 'ShiftLeft', label: 'Shift', w: 2.25, role: 'mod' },
    { code: 'KeyZ', label: 'Z', w: 1, role: 'base' },
    { code: 'KeyX', label: 'X', w: 1, role: 'base' },
    { code: 'KeyC', label: 'C', w: 1, role: 'base' },
    { code: 'KeyV', label: 'V', w: 1, role: 'base' },
    { code: 'KeyB', label: 'B', w: 1, role: 'base' },
    { code: 'KeyN', label: 'N', w: 1, role: 'base' },
    { code: 'KeyM', label: 'M', w: 1, role: 'base' },
    { code: 'Comma', label: ',', sub: '<', w: 1, role: 'base' },
    { code: 'Period', label: '.', sub: '>', w: 1, role: 'base' },
    { code: 'Slash', label: '/', sub: '?', w: 1, role: 'base' },
    { code: 'ShiftRight', label: 'Shift', w: 1.75, role: 'mod' },
    { code: 'ArrowUp', label: '↑', w: 1, role: 'mod' },
    { code: 'PageDown', label: 'PgDn', w: 1, role: 'mod' },
  ],
  [
    { code: 'ControlLeft', label: 'Ctrl', w: 1.25, role: 'mod' },
    { code: 'MetaLeft', label: 'Win', w: 1.25, role: 'mod' },
    { code: 'AltLeft', label: 'Alt', w: 1.25, role: 'mod' },
    { code: 'Space', label: 'AXIS·68', w: 6.25, role: 'space' },
    { code: 'AltRight', label: 'Alt', w: 1, role: 'mod' },
    { code: 'Fn', label: 'Fn', w: 1, role: 'mod' },
    { code: 'ControlRight', label: 'Ctrl', w: 1, role: 'mod' },
    { code: 'ArrowLeft', label: '←', w: 1, role: 'mod' },
    { code: 'ArrowDown', label: '↓', w: 1, role: 'mod' },
    { code: 'ArrowRight', label: '→', w: 1, role: 'mod' },
  ],
];

export const KEY_COUNT = ROWS.reduce((n, row) => n + row.length, 0);
export const BOARD_WIDTH_U = ROWS[0].reduce((n, k) => n + k.w, 0);
