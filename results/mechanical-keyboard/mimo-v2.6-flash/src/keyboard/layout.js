/**
 * ORBIT 65 紧凑配列定义
 * 5 行 / 16u 行宽，含完整字母区、数字行、方向键，
 * 以及不同宽度的空格(6.25u)、回车(2.25u)、Shift(2.25u / 1.75u)。
 *
 * u = 键位单位（1u ≈ 19.05mm），场景中 1u = 1 个世界单位。
 */

export const ROW_GAP = 1.0; // 行距（含键间缝隙）
export const CAP_GAP = 0.1; // 相邻键帽的缝隙总量

const k = (legend, u = 1, opts = {}) => ({ legend, u, ...opts });

/** 每行按键从左到右排列，行宽总和必须为 16u */
export const ROWS = [
  // 第 1 行：数字行
  [
    k('Esc'),
    k('1'), k('2'), k('3'), k('4'), k('5'), k('6'), k('7'), k('8'), k('9'), k('0'),
    k('-'), k('='),
    k('Backspace', 2),
    k('Del'),
  ],
  // 第 2 行
  [
    k('Tab', 1.5),
    k('Q'), k('W'), k('E'), k('R'), k('T'), k('Y'), k('U'), k('I'), k('O'), k('P'),
    k('['), k(']'),
    k('\\', 1.5),
    k('Home'),
  ],
  // 第 3 行
  [
    k('Caps', 1.75),
    k('A'), k('S'), k('D'), k('F'), k('G'), k('H'), k('J'), k('K'), k('L'),
    k(';'), k("'"),
    k('Enter', 2.25),
    k('PgUp'),
  ],
  // 第 4 行
  [
    k('Shift', 2.25),
    k('Z'), k('X'), k('C'), k('V'), k('B'), k('N'), k('M'),
    k(','), k('.'), k('/'),
    k('Shift', 1.75),
    k('Up', 1, { arrow: true }),
    k('PgDn'),
  ],
  // 第 5 行：底行（含 6.25u 空格）
  [
    k('Ctrl', 1.25),
    k('Super', 1.25),
    k('Alt', 1.25),
    k('Space', 6.25, { space: true }),
    k('Alt', 1),
    k('Fn', 1),
    k('Menu', 1),
    k('Left', 1, { arrow: true }),
    k('Down', 1, { arrow: true }),
    k('Right', 1, { arrow: true }),
  ],
];

export const ROW_WIDTH = ROWS[0].reduce((sum, key) => sum + key.u, 0); // 16

/**
 * 展平为键位列表，附带每个键的世界坐标（键场中心为原点）。
 * @returns {Array<{legend,u,x,z,row,col,arrow,space}>}
 */
export function buildKeyList() {
  const keys = [];
  ROWS.forEach((row, rowIndex) => {
    let cursor = 0;
    row.forEach((key, colIndex) => {
      const cx = cursor + key.u / 2;
      keys.push({
        legend: key.legend,
        u: key.u,
        x: cx - ROW_WIDTH / 2,
        z: (rowIndex - (ROWS.length - 1) / 2) * ROW_GAP,
        row: rowIndex,
        col: colIndex,
        arrow: !!key.arrow,
        space: !!key.space,
      });
      cursor += key.u;
    });
  });
  return keys;
}

/** 键位总数（68） */
export const KEY_COUNT = ROWS.reduce((sum, row) => sum + row.length, 0);
