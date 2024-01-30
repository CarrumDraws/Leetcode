/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// Trick: Use first row to "store" the cols that are 0's.
// Use the first column (plus extra 'colZero' bit- we don't want overlaps) to store rows that are 0's.
// Then, go backwards to avoid messing up your rows, checking the values.
var setZeroes = function (matrix) {
  let colZero = 1; // Serves as [0, 0] for column
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      if (matrix[x][y] == 0) {
        matrix[0][y] = 0; // Top Row
        if (x == 0) colZero = 0;
        else matrix[x][0] = 0; // Bottom Row
      }
    }
  }
  for (let row = matrix.length - 1; row > 0; row--) {
    for (let col = matrix[0].length - 1; col >= 0; col--) {
      if (matrix[0][col] == 0 || matrix[row][0] == 0) matrix[row][col] = 0;
    }
  }
  if (colZero == 0) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }
};
