// 键盘布局：1u = 18mm，行 0 在最后（数字行），行 4 在最前（空格行）
// 键位 id 与 KeyboardEvent.code 对应（字母键直接用字母，方便体验模式映射）

export const U = 18;
export const ROW_PITCH = 18;

const DIGIT_SUBS = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
const L = (id, label, w = 1, sub) => ({ id, label, w, sub });
const letters = (str) => str.split('').map((c) => L(c, c.toUpperCase()));

export const LAYOUT = [
  // 第 1 行：数字行
  [
    L('esc', 'esc'),
    ...Array.from({ length: 10 }, (_, i) => L(`d${i + 1}`, String(i + 1), 1, DIGIT_SUBS[i])),
    L('minus', '-', 1, '_'),
    L('equal', '=', 1, '+'),
    L('backspace', '⌫', 2),
    L('del', 'Del'),
  ],
  // 第 2 行：QWERTY
  [
    L('tab', '⇥', 1.5),
    ...letters('qwertyuiop'),
    L('bracketleft', '[', 1, '{'),
    L('bracketright', ']', 1, '}'),
    L('backslash', '\\', 1.5, '|'),
    L('home', 'Home'),
  ],
  // 第 3 行：Home 行
  [
    L('capslock', '⇪', 1.75),
    ...letters('asdfghjkl'),
    L('semicolon', ';', 1, ':'),
    L('quote', "'", 1, '"'),
    L('enter', '⏎', 2.25),
    L('pgup', 'PgUp'),
  ],
  // 第 4 行：Shift 行
  [
    L('lshift', '⇧', 2.25),
    ...letters('zxcvbnm'),
    L('comma', ',', 1, '<'),
    L('period', '.', 1, '>'),
    L('slash', '/', 1, '?'),
    L('rshift', '⇧', 2.75),
    L('pgdn', 'PgDn'),
  ],
  // 第 5 行：修饰键 + 空格 + 方向键
  [
    L('ctrl', 'Ctrl', 1.25),
    L('win', '⌘', 1.25),
    L('lalt', 'Alt', 1.25),
    L('space', '', 6.25),
    L('ralt', 'Alt', 1.25),
    L('fn', 'Fn', 1.25),
    L('left', '◄'),
    L('up', '▲'),
    L('down', '▼'),
    L('right', '►'),
  ],
];

const rowWidth = (row) => row.reduce((s, k) => s + k.w, 0);

// 展开为带坐标（单位 mm，以键区中心为原点）的键位表
export const KEYS = (() => {
  const keys = [];
  const totalW = Math.max(...LAYOUT.map(rowWidth));
  const totalD = LAYOUT.length * ROW_PITCH;
  LAYOUT.forEach((row, r) => {
    let x = 0;
    for (const k of row) {
      const xmm = x * U + (k.w * U) / 2 - (totalW * U) / 2;
      const zmm = r * ROW_PITCH + ROW_PITCH / 2 - totalD / 2;
      keys.push({ ...k, row: r, wmm: k.w * U, x: xmm, z: zmm });
      x += k.w;
    }
  });
  return keys;
})();

export const KEY_AREA = {
  w: Math.max(...LAYOUT.map(rowWidth)) * U,
  d: LAYOUT.length * ROW_PITCH,
};

export const KEY_COUNT = KEYS.length;
export const KEY_BY_ID = new Map(KEYS.map((k) => [k.id, k]));
export const CAP_GAP = 1.2; // 键帽四周留缝（mm）
export const HAS_LEGEND = (k) => k.label !== '' && k.w < 6;
