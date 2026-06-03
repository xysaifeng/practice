const ranges = [
  // {
  //   r: 1,
  //   c: 8,
  // },
  // {
  //   r: 2,
  //   c: 8,
  // },
  // {
  //   r: 3,
  //   c: 8,
  // },
  {
    r: 4,
    c: 8,
  },
  {
    r: 5,
    c: 8,
  },
  {
    r: 6,
    c: 8,
  },
  {
    r: 7,
    c: 8,
  },
  {
    r: 8,
    c: 8,
  },
  {
    r: 9,
    c: 8,
  },
  {
    r: 10,
    c: 8,
  },
  {
    r: 11,
    c: 8,
  },
  {
    r: 12,
    c: 8,
  },
  {
    r: 19,
    c: 8,
  },
  {
    r: 20,
    c: 8,
  },
  {
    r: 21,
    c: 8,
  },
  {
    r: 22,
    c: 8,
  },
  {
    r: 23,
    c: 8,
  },
  {
    r: 24,
    c: 8,
  },
  {
    r: 25,
    c: 8,
  },
  {
    r: 26,
    c: 8,
  },
  {
    r: 27,
    c: 8,
  },
  {
    r: 28,
    c: 8,
  },
  {
    r: 29,
    c: 8,
  },
  {
    r: 30,
    c: 8,
  },
  {
    r: 31,
    c: 8,
  },
  {
    r: 32,
    c: 8,
  },
  {
    r: 33,
    c: 8,
  },
  {
    r: 34,
    c: 8,
  },
  {
    r: 35,
    c: 8,
  },
  {
    r: 36,
    c: 8,
  },
  {
    r: 37,
    c: 8,
  },
  {
    r: 38,
    c: 8,
  },
  {
    r: 39,
    c: 8,
  },
  {
    r: 40,
    c: 8,
  },
  {
    r: 41,
    c: 8,
  },
  // {
  //   r: 42,
  //   c: 8,
  // },
  // {
  //   r: 43,
  //   c: 8,
  // },
  // {
  //   r: 44,
  //   c: 8,
  // },
  {
    r: 45,
    c: 10,
  },
  {
    r: 46,
    c: 10,
  },
  {
    r: 47,
    c: 8,
  },
  {
    r: 48,
    c: 8,
  },
  {
    r: 49,
    c: 8,
  },
  {
    r: 51,
    c: 1,
  },
];
console.log(ranges, "------");

function getContinuousRows(ranges) {
  const arr = [];
  if (!ranges.length) return arr;
  arr.push({ ...ranges[0], rowIndex: ranges[0].r });

  ranges.forEach((range, i, a) => {
    const { r } = range;
    const lastItem = arr[arr.length - 1];
    const next = a[i + 1];

    if (lastItem.rowIndex + 1 !== next?.r || lastItem.c !== next?.c) {
      lastItem.numRows = r - lastItem.r + 1;
      lastItem.numCols = 1;
      next && arr.push({ r: next.r, c: next.c, rowIndex: next.r });
    } else {
      lastItem.rowIndex = r + 1;
    }
  });
  // console.log(arr);
  return arr;
}
// getContinuousRows(ranges);

// ds ok
function mergeCellRanges(ranges) {
  if (!ranges || ranges.length === 0) return [];

  const result = [];
  let currentGroup = null;

  for (let i = 0; i < ranges.length; i++) {
    const cell = ranges[i];

    // 如果是新组的开始
    if (!currentGroup) {
      currentGroup = {
        r: cell.r,
        c: cell.c,
        numRows: 1,
        numCols: 1,
      };
    }
    // 检查是否可以合并到当前组
    else if (
      cell.c === currentGroup.c && // c相同
      cell.r === currentGroup.r + currentGroup.numRows // r连续
    ) {
      currentGroup.numRows++;
    }
    // 不能合并，开始新组
    else {
      result.push(currentGroup);
      currentGroup = {
        r: cell.r,
        c: cell.c,
        numRows: 1,
        numCols: 1,
      };
    }
  }

  // 处理最后一组
  if (currentGroup) {
    result.push(currentGroup);
  }

  return result;
}

// 测试用例
// const ranges = [
//     {r: 2, c: 8},
//     {r: 3, c: 8},
//     {r: 4, c: 8},
//     {r: 7, c: 8},
//     {r: 8, c: 8},
//     {r: 9, c: 10},
//     {r: 10, c: 10},
// ];

// console.log(mergeCellRanges(ranges));
// 输出:
// [
//   {r: 2, c: 8, numRows: 3, numCols: 1},
//   {r: 7, c: 8, numRows: 2, numCols: 1},
//   {r: 9, c: 10, numRows: 2, numCols: 1}
// ]

// 第二个版本是扩展版本，支持更复杂的合并场景
function mergeCellRangesWithCols(ranges) {
  if (!ranges || ranges.length === 0) return [];

  // 按行r和列c排序
  // ranges.sort((a, b) => {
  //   if (a.r !== b.r) return a.r - b.r;
  //   return a.c - b.c;
  // });

  const result = [];
  let currentGroup = null;

  for (let i = 0; i < ranges.length; i++) {
    const cell = ranges[i];

    if (!currentGroup) {
      currentGroup = {
        r: cell.r,
        c: cell.c,
        numRows: 1,
        numCols: 1,
      };
    } else if (
      cell.c === currentGroup.c &&
      cell.r === currentGroup.r + currentGroup.numRows
    ) {
      // 检查是否可以行合并（同一列且行连续）
      currentGroup.numRows++;
    }
    // 检查是否可以列合并（同一行且列连续）
    else if (
      cell.r === currentGroup.r &&
      cell.c === currentGroup.c + currentGroup.numCols
    ) {
      currentGroup.numCols++;
    }
    // 不能合并，开始新组
    else {
      result.push(currentGroup);
      currentGroup = {
        r: cell.r,
        c: cell.c,
        numRows: 1,
        numCols: 1,
      };
    }
  }

  if (currentGroup) {
    result.push(currentGroup);
  }

  return result;
}

function mergeCellRangesWithCols2(ranges) {
  if (!ranges || ranges.length === 0) return [];
  const result = [];
  let currentGroup = null;
  const o = [];

  for (let i = 0; i < ranges.length; i++) {
    const cell = ranges[i];
    const next = ranges[i + 1] ?? {};

    currentGroup = {
      r: cell.r,
      c: cell.c,
      numRows: 1,
      numCols: 1,
    };

    o[cell.r] = o[cell.r] ?? [];

    if (currentGroup.c + 1 === next.c) {
      o[cell.r].push(cell);
    }

    if (o[cell.r].r + 1 === next.r) {
      o[cell.r].push(next);
    }
  }
  console.log(o);

  // if (currentGroup) {
  //   result.push(currentGroup);
  // }

  return result;
}

// 测试示例1：单行多列的情况
const test1 = [
  // { r: 1, c: 1 },
  // { r: 1, c: 2 },
  // { r: 1, c: 3 },
  // { r: 2, c: 1 },
  // { r: 3, c: 1 },

  // { r: 5, c: 2 },
  // { r: 5, c: 3 },

  // { r: 6, c: 4 },

  // { r: 7, c: 2 },
  // { r: 7, c: 4 },

  { r: 1, c: 1 },
  { r: 1, c: 2 },
  { r: 2, c: 1 },
  { r: 3, c: 1 },
  { r: 3, c: 2 },
  { r: 3, c: 3 },
  { r: 4, c: 3 },
];

const t2 = getContinuousRows(test1);
console.log("t2: ", t2);
function getContinuousCols(ranges) {
  const arr = [];
  if (!ranges.length) return arr;
  arr.push({ ...ranges[0], colIndex: ranges[0].c });

  ranges.forEach((range, i, a) => {
    const { c } = range;
    const lastItem = arr[arr.length - 1];
    const next = a[i + 1];

    if (lastItem.colIndex + 1 !== next?.c || lastItem.r !== next?.r) {
      lastItem.numCols =
        lastItem.numCols > 1 ? lastItem.numCols : c - lastItem.c + 1;
      lastItem.numRows = lastItem.numRows > 1 ? lastItem.numRows : 1;
      next && arr.push({ ...next, colIndex: next.c });
    } else {
      lastItem.colIndex = c + 1;
    }
  });
  console.log(arr);
}

// console.log("测试1 - 单行多列合并:");
console.log(test1);
getContinuousCols(t2);
// 期望输出：
// [
//   {r: 1, c: 1, numRows: 1, numCols: 3},  // 第一行的三列合并
//   {r: 2, c: 1, numRows: 2, numCols: 1},  // 单独单元格
// ]

// 测试示例2：多行多列的情况（类似表格区域）
const test2 = [
  { r: 1, c: 1 },
  { r: 1, c: 2 },
  { r: 2, c: 1 },
  { r: 2, c: 2 },
  { r: 3, c: 1 },
  { r: 3, c: 2 },
];

// console.log("\n测试2 - 多行多列:");
// console.log(mergeCellRangesWithCols(test2));
// 这个输出可能会不符合预期，因为算法是按顺序处理的
// 实际输出：
// [
//   {r: 1, c: 1, numRows: 1, numCols: 2},  // 第一行的两列合并
//   {r: 2, c: 1, numRows: 1, numCols: 2},  // 第二行的两列合并
//   {r: 3, c: 1, numRows: 1, numCols: 2}   // 第三行的两列合并
// ]

// 测试示例3：复杂情况
const test3 = [
  { r: 1, c: 1 },
  { r: 1, c: 2 },
  { r: 2, c: 1 },
  { r: 3, c: 1 },
  { r: 3, c: 2 },
  { r: 3, c: 3 },
  { r: 4, c: 3 },
];

// console.log("\n测试3 - 复杂情况:");
// console.log(mergeCellRangesWithCols(test3));

// 输出：
// [
//   {r: 1, c: 1, numRows: 1, numCols: 2},  // 第一行1-2列
//   {r: 2, c: 1, numRows: 1, numCols: 1},  // 第二行1列
//   {r: 3, c: 1, numRows: 1, numCols: 3},  // 第三行1-3列
//   {r: 4, c: 3, numRows: 1, numCols: 1}   // 第四行3列
// ]

// 测试示例4：原始示例
const test4 = [
  { r: 2, c: 8 },
  { r: 3, c: 8 },
  { r: 4, c: 8 },
  { r: 7, c: 8 },
  { r: 8, c: 8 },
  { r: 9, c: 10 },
  { r: 10, c: 10 },
];

// console.log("\n测试4 - 原始示例:");
// console.log(mergeCellRangesWithCols(test4));
// console.log(mergeCellRangesWithCols(ranges));

// 输出：
// [
//   {r: 2, c: 8, numRows: 3, numCols: 1},
//   {r: 7, c: 8, numRows: 2, numCols: 1},
//   {r: 9, c: 10, numRows: 2, numCols: 1}
// ]

function mergeRectangularRanges(ranges) {
  if (!ranges || ranges.length === 0) return [];

  // 创建二维数组标记哪些位置有单元格
  const maxR = Math.max(...ranges.map((cell) => cell.r));
  const maxC = Math.max(...ranges.map((cell) => cell.c));

  const grid = Array(maxR + 1)
    .fill()
    .map(() => Array(maxC + 1).fill(false));

  ranges.forEach((cell) => {
    grid[cell.r][cell.c] = true;
  });

  const result = [];
  const visited = Array(maxR + 1)
    .fill()
    .map(() => Array(maxC + 1).fill(false));

  for (let r = 1; r <= maxR; r++) {
    for (let c = 1; c <= maxC; c++) {
      if (grid[r][c] && !visited[r][c]) {
        // 寻找最大矩形
        let maxRows = 1;
        let maxCols = 1;

        // 检查可以向下扩展多少行
        while (
          r + maxRows <= maxR &&
          grid[r + maxRows][c] &&
          !visited[r + maxRows][c]
        ) {
          maxRows++;
        }

        // 检查可以向右扩展多少列
        while (
          c + maxCols <= maxC &&
          grid[r][c + maxCols] &&
          !visited[r][c + maxCols]
        ) {
          maxCols++;
        }

        // 标记已访问
        for (let i = 0; i < maxRows; i++) {
          for (let j = 0; j < maxCols; j++) {
            visited[r + i][c + j] = true;
          }
        }

        result.push({
          r: r,
          c: c,
          numRows: maxRows,
          numCols: maxCols,
        });
      }
    }
  }

  return result;
}

// console.log(mergeRectangularRanges(test1));
