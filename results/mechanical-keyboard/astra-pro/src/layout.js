/** Original 68-key, five-row compact layout. Widths use standard 1u key units. */
const key = (code, label, width = 1, role = 'mod', secondary = '') => ({ code, label, width, role, secondary });
const letter = (char) => key(`Key${char}`, char, 1, 'alpha');
const rows = [
  [key('Escape', 'esc', 1, 'accent'),
    ...'1234567890'.split('').map((n, i) => key(`Digit${n}`, n, 1, 'alpha', '!@#$%^&*()'[i])),
    key('Minus', '−', 1, 'alpha', '_'), key('Equal', '=', 1, 'alpha', '+'),
    key('Backspace', 'delete', 2), key('Delete', 'del')],
  [key('Tab', 'tab', 1.5), ...'QWERTYUIOP'.split('').map(letter),
    key('BracketLeft', '[', 1, 'alpha', '{'), key('BracketRight', ']', 1, 'alpha', '}'),
    key('Backslash', '\\', 1.5, 'alpha', '|'), key('PageUp', 'pg up')],
  [key('CapsLock', 'caps', 1.75), ...'ASDFGHJKL'.split('').map(letter),
    key('Semicolon', ';', 1, 'alpha', ':'), key('Quote', "'", 1, 'alpha', '"'),
    key('Enter', 'enter', 2.25, 'accent'), key('PageDown', 'pg dn')],
  [key('ShiftLeft', 'shift', 2.25), ...'ZXCVBNM'.split('').map(letter),
    key('Comma', ',', 1, 'alpha', '<'), key('Period', '.', 1, 'alpha', '>'),
    key('Slash', '/', 1, 'alpha', '?'), key('ShiftRight', 'shift', 1.75),
    key('ArrowUp', '↑', 1, 'accent'), key('End', 'end')],
  [key('ControlLeft', 'ctrl', 1.25), key('MetaLeft', '⌘', 1.25), key('AltLeft', 'alt', 1.25),
    key('Space', 'F O R M', 6.25, 'alpha'), key('AltRight', 'alt'), key('Fn', 'fn'),
    key('ControlRight', 'ctrl'), key('ArrowLeft', '←', 1, 'accent'),
    key('ArrowDown', '↓', 1, 'accent'), key('ArrowRight', '→', 1, 'accent')],
];

export const UNIT = 1.06;
export const ROW_UNITS = 16;
export const KEY_LAYOUT = Object.freeze(rows.flatMap((row, rowIndex) => {
  let cursor = 0;
  return row.map((item) => {
    const result = Object.freeze({
      ...item, row: rowIndex, start: cursor,
      x: (cursor + item.width / 2 - ROW_UNITS / 2) * UNIT,
      z: (rowIndex - 2) * UNIT,
    });
    cursor += item.width;
    return result;
  });
}));

export const PHYSICAL_CODES = new Set([...Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ', c => `Key${c}`), 'Space']);
