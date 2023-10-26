/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// Recursive Onioning
var spiralOrder = function (matrix) {
  let ret = [];
  let leftBound = 0;
  let rightBound = matrix[0].length - 1;
  let upperBound = 0;
  let lowerBound = matrix.length - 1;

  function unwrap(left, right, upper, lower) {
    if (right - left < 0 || lower - upper < 0) return;
    // Left to Right
    for (let i = left; i <= right; i++) {
      ret.push(matrix[upper][i]);
    }
    // Up to Down
    for (let i = upper + 1; i <= lower; i++) {
      ret.push(matrix[i][right]);
    }
    // Right to Left
    if (lower != upper) {
      for (let i = right - 1; i >= left; i--) {
        ret.push(matrix[lower][i]);
      }
    }
    // Down to Up
    if (right != left) {
      for (let i = lower - 1; i > upper; i--) {
        ret.push(matrix[i][left]);
      }
    }
    unwrap(left + 1, right - 1, upper + 1, lower - 1);
  }
  unwrap(leftBound, rightBound, upperBound, lowerBound);
};
let matrix = [
  [1, 2],
  [3, 4],
];
spiralOrder(matrix);
