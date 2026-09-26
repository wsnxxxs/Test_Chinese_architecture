export type KeyRole = 'alpha' | 'modifier' | 'accent';

export interface KeyDefinition {
  code: string;
  label: string;
  width: number;
  x: number;
  z: number;
  role: KeyRole;
}

type KeyInput = [code: string, label: string, width?: number, role?: KeyRole];

const letter = (value: string): KeyInput => [`Key${value}`, value];
const rows: KeyInput[][] = [
  [
    ['Escape', 'esc', 1, 'accent'],
    ...'1234567890'.split('').map((n): KeyInput => [`Digit${n}`, n]),
    ['Minus', '-'], ['Equal', '='], ['Backspace', 'backspace', 2, 'modifier'],
    ['Delete', 'del', 1, 'modifier'],
  ],
  [
    ['Tab', 'tab', 1.5, 'modifier'], ...'QWERTYUIOP'.split('').map(letter),
    ['BracketLeft', '['], ['BracketRight', ']'], ['Backslash', '\\', 1.5],
    ['PageUp', 'pg up', 1, 'modifier'],
  ],
  [
    ['CapsLock', 'caps lock', 1.75, 'modifier'], ...'ASDFGHJKL'.split('').map(letter),
    ['Semicolon', ';'], ['Quote', "'"], ['Enter', 'enter', 2.25, 'accent'],
    ['PageDown', 'pg dn', 1, 'modifier'],
  ],
  [
    ['ShiftLeft', 'shift', 2.25, 'modifier'], ...'ZXCVBNM'.split('').map(letter),
    ['Comma', ','], ['Period', '.'], ['Slash', '/'],
    ['ShiftRight', 'shift', 1.75, 'modifier'],
    ['ArrowUp', 'up', 1, 'modifier'], ['End', 'end', 1, 'modifier'],
  ],
  [
    ['ControlLeft', 'ctrl', 1.25, 'modifier'], ['MetaLeft', 'super', 1.25, 'modifier'],
    ['AltLeft', 'alt', 1.25, 'modifier'], ['Space', 'forma', 6.25],
    ['AltRight', 'alt', 1, 'modifier'], ['Fn', 'fn', 1, 'modifier'],
    ['ControlRight', 'ctrl', 1, 'modifier'], ['ArrowLeft', 'left', 1, 'modifier'],
    ['ArrowDown', 'down', 1, 'modifier'], ['ArrowRight', 'right', 1, 'modifier'],
  ],
];

export const KEY_LAYOUT: KeyDefinition[] = rows.flatMap((row, rowIndex) => {
  let cursor = -8;
  return row.map(([code, label, width = 1, role = 'alpha']) => {
    const key = { code, label, width, x: cursor + width / 2, z: rowIndex - 2, role };
    cursor += width;
    return key;
  });
});