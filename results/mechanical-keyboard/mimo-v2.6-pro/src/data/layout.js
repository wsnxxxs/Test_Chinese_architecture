/**
 * LUMEN 68 键位配列数据
 * 1u = 1 个键位间距。整体 16u × 5u，共 68 键（ANSI 65% 紧凑布局）。
 * kind: 'alpha' 字符键 / 'mod' 功能键 / 'accent' 强色键（Esc / Enter / 空格）
 */

export const UNIT = 1;
export const COLS = 16; // 每行 16u 宽
export const ROWS = 5;

/** 每行键帽高度（u），模拟 R1-R5 高度曲线 */
export const ROW_HEIGHT = [0.5, 0.47, 0.45, 0.47, 0.52];
/** 每行键帽倾角（弧度），向使用者方向为正，形成内凹的侧面曲线 */
export const ROW_TILT = [
  (7 * Math.PI) / 180,
  (3 * Math.PI) / 180,
  0,
  (-3 * Math.PI) / 180,
  (-6 * Math.PI) / 180,
];

/** 键帽相对 1u 间距的尺寸（留下缝隙） */
export const CAP_SCALE = 0.93;

// [显示字符, 宽度(u), 类型, KeyboardEvent.code]
const ROW_DEFS = [
  [
    ['ESC', 1, 'accent', 'Escape'],
    ['1', 1, 'alpha', 'Digit1'],
    ['2', 1, 'alpha', 'Digit2'],
    ['3', 1, 'alpha', 'Digit3'],
    ['4', 1, 'alpha', 'Digit4'],
    ['5', 1, 'alpha', 'Digit5'],
    ['6', 1, 'alpha', 'Digit6'],
    ['7', 1, 'alpha', 'Digit7'],
    ['8', 1, 'alpha', 'Digit8'],
    ['9', 1, 'alpha', 'Digit9'],
    ['0', 1, 'alpha', 'Digit0'],
    ['-', 1, 'alpha', 'Minus'],
    ['=', 1, 'alpha', 'Equal'],
    ['BACK', 2, 'mod', 'Backspace'],
    ['DEL', 1, 'mod', 'Delete'],
  ],
  [
    ['TAB', 1.5, 'mod', 'Tab'],
    ['Q', 1, 'alpha', 'KeyQ'],
    ['W', 1, 'alpha', 'KeyW'],
    ['E', 1, 'alpha', 'KeyE'],
    ['R', 1, 'alpha', 'KeyR'],
    ['T', 1, 'alpha', 'KeyT'],
    ['Y', 1, 'alpha', 'KeyY'],
    ['U', 1, 'alpha', 'KeyU'],
    ['I', 1, 'alpha', 'KeyI'],
    ['O', 1, 'alpha', 'KeyO'],
    ['P', 1, 'alpha', 'KeyP'],
    ['[', 1, 'alpha', 'BracketLeft'],
    [']', 1, 'alpha', 'BracketRight'],
    ['\\', 1.5, 'alpha', 'Backslash'],
    ['PGUP', 1, 'mod', 'PageUp'],
  ],
  [
    ['CAPS', 1.75, 'mod', 'CapsLock'],
    ['A', 1, 'alpha', 'KeyA'],
    ['S', 1, 'alpha', 'KeyS'],
    ['D', 1, 'alpha', 'KeyD'],
    ['F', 1, 'alpha', 'KeyF'],
    ['G', 1, 'alpha', 'KeyG'],
    ['H', 1, 'alpha', 'KeyH'],
    ['J', 1, 'alpha', 'KeyJ'],
    ['K', 1, 'alpha', 'KeyK'],
    ['L', 1, 'alpha', 'KeyL'],
    [';', 1, 'alpha', 'Semicolon'],
    ["'", 1, 'alpha', 'Quote'],
    ['ENTER', 2.25, 'accent', 'Enter'],
    ['PGDN', 1, 'mod', 'PageDown'],
  ],
  [
    ['SHIFT', 2.25, 'mod', 'ShiftLeft'],
    ['Z', 1, 'alpha', 'KeyZ'],
    ['X', 1, 'alpha', 'KeyX'],
    ['C', 1, 'alpha', 'KeyC'],
    ['V', 1, 'alpha', 'KeyV'],
    ['B', 1, 'alpha', 'KeyB'],
    ['N', 1, 'alpha', 'KeyN'],
    ['M', 1, 'alpha', 'KeyM'],
    [',', 1, 'alpha', 'Comma'],
    ['.', 1, 'alpha', 'Period'],
    ['/', 1, 'alpha', 'Slash'],
    ['SHIFT', 1.75, 'mod', 'ShiftRight'],
    ['↑', 1, 'mod', 'ArrowUp'],
    ['END', 1, 'mod', 'End'],
  ],
  [
    ['CTRL', 1.25, 'mod', 'ControlLeft'],
    ['WIN', 1.25, 'mod', 'MetaLeft'],
    ['ALT', 1.25, 'mod', 'AltLeft'],
    ['', 6.25, 'accent', 'Space'], // 空格：字符由「空格刻字」动态决定
    ['ALT', 1, 'mod', 'AltRight'],
    ['FN', 1, 'mod', 'Fn'],
    ['CTRL', 1, 'mod', 'ControlRight'],
    ['←', 1, 'mod', 'ArrowLeft'],
    ['↓', 1, 'mod', 'ArrowDown'],
    ['→', 1, 'mod', 'ArrowRight'],
  ],
];

/**
 * 展开为扁平键位表，附带中心坐标（x 向右，z 向使用者为正，z=0 为中间行）
 */
export function buildKeys() {
  const keys = [];
  ROW_DEFS.forEach((row, rowIndex) => {
    let cursor = -COLS / 2;
    row.forEach(([label, w, kind, code]) => {
      keys.push({
        id: code,
        label,
        w,
        kind,
        code,
        row: rowIndex,
        x: cursor + w / 2,
        z: -2 + rowIndex,
      });
      cursor += w;
    });
  });
  return keys;
}

export const KEY_COUNT = ROW_DEFS.reduce((sum, row) => sum + row.length, 0);
