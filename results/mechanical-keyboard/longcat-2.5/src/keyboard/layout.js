/**
 * 65% compact layout — 62 keys, 5 rows.
 * Width unit: 1u = standard keycap width.
 * All rows sum to 15u.
 */

const ROWS = [
  // Row 0 — number row (15u)
  [
    { id: 'esc',    label: 'Esc',    w: 1   },
    { id: '1',      label: '1',      w: 1,  sub: '!' },
    { id: '2',      label: '2',      w: 1,  sub: '@' },
    { id: '3',      label: '3',      w: 1,  sub: '#' },
    { id: '4',      label: '4',      w: 1,  sub: '$' },
    { id: '5',      label: '5',      w: 1,  sub: '%' },
    { id: '6',      label: '6',      w: 1,  sub: '^' },
    { id: '7',      label: '7',      w: 1,  sub: '&' },
    { id: '8',      label: '8',      w: 1,  sub: '*' },
    { id: '9',      label: '9',      w: 1,  sub: '(' },
    { id: '0',      label: '0',      w: 1,  sub: ')' },
    { id: 'minus',  label: '−',      w: 1,  sub: '_' },
    { id: 'equal',  label: '=',      w: 1,  sub: '+' },
    { id: 'bksp',   label: '⌫',      w: 2   },
  ],
  // Row 1 — QWERTY row (15u)
  [
    { id: 'tab',    label: 'Tab',    w: 1.5 },
    { id: 'q',      label: 'Q',      w: 1   },
    { id: 'w',      label: 'W',      w: 1   },
    { id: 'e',      label: 'E',      w: 1   },
    { id: 'r',      label: 'R',      w: 1   },
    { id: 't',      label: 'T',      w: 1   },
    { id: 'y',      label: 'Y',      w: 1   },
    { id: 'u',      label: 'U',      w: 1   },
    { id: 'i',      label: 'I',      w: 1   },
    { id: 'o',      label: 'O',      w: 1   },
    { id: 'p',      label: 'P',      w: 1   },
    { id: 'lbracket', label: '[',    w: 1,  sub: '{'  },
    { id: 'rbracket', label: ']',    w: 1,  sub: '}'  },
    { id: 'backslash', label: '\\',   w: 1.5, sub: '|'  },
  ],
  // Row 2 — ASDF row (15u)
  [
    { id: 'caps',   label: 'Caps',   w: 1.75 },
    { id: 'a',      label: 'A',      w: 1    },
    { id: 's',      label: 'S',      w: 1    },
    { id: 'd',      label: 'D',      w: 1    },
    { id: 'f',      label: 'F',      w: 1    },
    { id: 'g',      label: 'G',      w: 1    },
    { id: 'h',      label: 'H',      w: 1    },
    { id: 'j',      label: 'J',      w: 1    },
    { id: 'k',      label: 'K',      w: 1    },
    { id: 'l',      label: 'L',      w: 1    },
    { id: 'semicolon', label: ';',   w: 1,   sub: ':'  },
    { id: 'quote',  label: "'",      w: 1,   sub: '"'  },
    { id: 'enter',  label: 'Enter',  w: 2.25 },
  ],
  // Row 3 — ZXCV row (15u)
  [
    { id: 'lshift', label: 'Shift',  w: 2.25 },
    { id: 'z',      label: 'Z',      w: 1    },
    { id: 'x',      label: 'X',      w: 1    },
    { id: 'c',      label: 'C',      w: 1    },
    { id: 'v',      label: 'V',      w: 1    },
    { id: 'b',      label: 'B',      w: 1    },
    { id: 'n',      label: 'N',      w: 1    },
    { id: 'm',      label: 'M',      w: 1    },
    { id: 'comma',  label: ',',      w: 1,   sub: '<'  },
    { id: 'period', label: '.',      w: 1,   sub: '>'  },
    { id: 'slash',  label: '/',      w: 1,   sub: '?'  },
    { id: 'rshift', label: 'Shift',  w: 2.75 },
  ],
  // Row 4 — bottom row with arrow keys (15u)
  [
    { id: 'lctrl',  label: 'Ctrl',   w: 1.25 },
    { id: 'lwin',   label: 'Win',    w: 1.25 },
    { id: 'lalt',   label: 'Alt',    w: 1.25 },
    { id: 'space',  label: '',       w: 5.25 },
    { id: 'ralt',   label: 'Alt',    w: 1    },
    { id: 'fn',     label: 'Fn',     w: 1    },
    { id: 'left',   label: '←',      w: 1    },
    { id: 'down',   label: '↓',      w: 1    },
    { id: 'up',     label: '↑',      w: 1    },
    { id: 'right',  label: '→',      w: 1    },
  ],
];

/** Total row width in u */
export const TOTAL_WIDTH_U = 15;

/** Flatten layout and compute x-position (left edge) for each key */
export function buildKeyPositions() {
  const keys = [];
  ROWS.forEach((row, rowIndex) => {
    let x = 0;
    row.forEach((key) => {
      keys.push({
        ...key,
        row: rowIndex,
        x,               // left edge in u
        cx: x + key.w / 2, // center in u
      });
      x += key.w;
    });
  });
  return keys;
}

export const KEY_COUNT = ROWS.reduce((s, r) => s + r.length, 0);
