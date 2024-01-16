/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // Ok 40%
  // Use a queue to track current indexes to look at
  // Keep a history of all indexes that have been traversed
  // Spread out until you hit all indexes

  if (numRows == 1 || s.length <= numRows) return s;

  let history = new Set(); // Stores indexes
  let queue = []; // Stores indexes
  let str = "";
  let gap = (numRows - 1) * 2;

  // Note: Have to add a bonus "starting point" at the end!
  for (let i = 0; i < Math.ceil(s.length / gap) + 1; i++) {
    queue.push(gap * i);
    history.add(gap * i);
  }
  while (queue.length != 0) {
    let idx = queue.shift();
    if (s[idx]) str += s[idx];
    // Go Left
    if (idx > 0 && !history.has(idx - 1)) {
      queue.push(idx - 1);
      history.add(idx - 1);
    }
    // Go Right
    if (idx < s.length && !history.has(idx + 1)) {
      queue.push(idx + 1);
      history.add(idx + 1);
    }
  }
  return str;
};

// BETTER 89%
// PAYPALISHIRING (4 Rows)
// P     I     N
// A   L S   I G
// Y A   H R
// P     I
// Iterate through each zigzag row.
// Top and bottom row chars are (gap) distance apart.
// Middle Rows are also (gap) distance apart, but have more chars.
var convertTwo = function (s, numRows) {
  if (numRows == 1 || s.length <= numRows) return s;
  let str = "";
  let gap = (numRows - 1) * 2;
  for (let i = 0; i < numRows; i++) {
    // Top and Bottom
    if (i == 0 || i == numRows - 1) {
      for (let j = 0; j < Math.ceil((s.length - i) / gap); j++) {
        str += s[i + gap * j];
      }
    } else {
      // Middle Parts
      for (let j = 0; j < Math.ceil((s.length - i) / gap); j++) {
        str += s[i + gap * j];
        if (s[gap - i + gap * j]) str += s[gap - i + gap * j];
      }
    }
  }

  return str;
};
