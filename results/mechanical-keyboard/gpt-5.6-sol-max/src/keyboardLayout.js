export const KEYBOARD_LAYOUT = [
  [
    ['Esc', 1, 'accent'], ['1', 1], ['2', 1], ['3', 1], ['4', 1], ['5', 1],
    ['6', 1], ['7', 1], ['8', 1], ['9', 1], ['0', 1], ['−', 1], ['=', 1],
    ['Backspace', 1.25, 'modifier'], ['Del', 0.75, 'modifier'],
  ],
  [
    ['Tab', 1.5, 'modifier'], ['Q', 1], ['W', 1], ['E', 1], ['R', 1], ['T', 1],
    ['Y', 1], ['U', 1], ['I', 1], ['O', 1], ['P', 1], ['[', 1], [']', 1],
    ['\\', 1.5, 'modifier'],
  ],
  [
    ['Caps', 1.75, 'modifier'], ['A', 1], ['S', 1], ['D', 1], ['F', 1], ['G', 1],
    ['H', 1], ['J', 1], ['K', 1], ['L', 1], [';', 1], ["'", 1],
    ['Enter', 2.25, 'accent'],
  ],
  [
    ['Shift', 2.25, 'modifier'], ['Z', 1], ['X', 1], ['C', 1], ['V', 1], ['B', 1],
    ['N', 1], ['M', 1], [',', 1], ['.', 1], ['/', 1], ['Shift', 1.75, 'modifier'],
    ['↑', 1, 'accent'],
  ],
  [
    ['Ctrl', 1.25, 'modifier'], ['Meta', 1.25, 'modifier'], ['Alt', 1.25, 'modifier'],
    ['Space', 6.25, 'space'], ['Alt', 1.25, 'modifier'], ['Fn', 1.25, 'modifier'],
    ['←', 1, 'accent'], ['↓', 1, 'accent'], ['→', 1, 'accent'],
  ],
];

export const TOTAL_KEYS = KEYBOARD_LAYOUT.reduce((sum, row) => sum + row.length, 0);
