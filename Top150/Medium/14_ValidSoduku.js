/**
 * @param {character[][]} board
 * @return {boolean}
 */
// Idea: Keep a hash of number: [new Set(), new Set()] (row / column) pairs.
// When a number is encountered, make sure that the row and column are unique.

var isValidSudoku = function (board) {
  let hash = {};
  for (let i = 1; i <= 9; i++) {
    hash[i] = { row: new Set(), column: new Set() };
  }
  let groupOne = new Set(); // First 3x3 square of nums
  let groupTwo = new Set(); // Second 3x3 square of nums
  let groupThree = new Set(); // Third 3x3 square of nums
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let num = board[row][col];
      if (num == ".") continue;
      // Check + Add to groups
      if (col < 3) {
        if (groupOne.has(num)) return false;
        groupOne.add(num);
      } else if (col < 6) {
        if (groupTwo.has(num)) return false;
        groupTwo.add(num);
      } else {
        if (groupThree.has(num)) return false;
        groupThree.add(num);
      }
      // Check + add to rows
      if (hash[num].row.has(row)) return false;
      if (hash[num].column.has(col)) return false;
      hash[num].row.add(row);
      hash[num].column.add(col);
    }
    // Clear Groups
    if (row == 2 || row == 5) {
      groupOne.clear();
      groupTwo.clear();
      groupThree.clear();
    }
  }
  return true;
};
