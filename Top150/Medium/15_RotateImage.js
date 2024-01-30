/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // Idea: Recursively rotate each layer.
  // Swap all elements back to back to back
  // [0, 0] -> [0, n] -> [n, n] -> [n, 0]

  for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
    rotate(i);
  }

  return matrix;

  // Takes in 'layer' and rotates that layer (like an onion)
  function rotate(x) {
    for (let y = x; y < matrix.length - x - 1; y++) {
      swapAround(x, y);
    }
  }

  // Swaps in a circle
  function swapAround(x, y) {
    let a = matrix.length - 1 - x;
    let b = matrix.length - 1 - y;
    let pos = [
      [x, y],
      [y, a],
      [a, b],
      [b, x],
    ];
    let temp = matrix[b][x];
    for (let i = 0; i < 4; i++) {
      let [row, col] = pos[i];
      let val = matrix[row][col];
      matrix[row][col] = temp;
      temp = val;
    }
  }
};
