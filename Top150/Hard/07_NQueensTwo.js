/**
 * @param {number} n
 * @return {string[][]}
 */
// Idea: Brute Force. Recur while editing + reverting same array.
var totalNQueens = function (n) {
  let board = [];
  let ret = 0;
  let cols = new Set(); // Stores the cols that are taken
  for (let i = 0; i < n; i++) {
    board.push(new Array(n).fill("."));
  }
  recur(0);
  return ret;

  // Places one queen on row "row".
  function recur(row) {
    if (row >= n) ret++; // Success
    else {
      for (let col = 0; col < n; col++) {
        if (cols.has(col)) continue; // Check if column available
        let isValid = true;
        // Check Top Left and Top Right Diags
        for (j = 1; j <= row; j++) {
          if (!isValid) break;
          if (board[row - j]?.[col - j] == "Q") isValid = false;
          if (board[row - j]?.[col + j] == "Q") isValid = false;
        }
        if (!isValid) continue;
        cols.add(col);
        board[row][col] = "Q";
        recur(row + 1);
        board[row][col] = ".";
        cols.delete(col);
      }
    }
  }
};
