/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  // Given an m m n binary matrix mat, return the distance of the nearest 0 for each cell.
  let matrix = [...Array(mat.length)].map(() => Array(mat[0].length));

  // Weird Bug: Infinate Loop?
  function findDistance(tile, matrix) {
    let [m, n] = tile;
    if (matrix[m][n] == 0) return 0;
    let top = m - 1 >= 0 ? findDistance([m - 1, n], matrix) : Infinity;
    let bot =
      m + 1 < matrix.length ? findDistance([m + 1, n], matrix) : Infinity;
    let left = n - 1 >= 0 ? findDistance([m, n - 1], matrix) : Infinity;
    let right =
      n + 1 < matrix[0].length ? findDistance([m, n + 1], matrix) : Infinity;
    return Math.min(top, bot, left, right) + 1;
  }

  for (let m = 0; m < mat.length; m++) {
    for (let n = 0; n < mat[0].length; n++) {
      matrix[m][n] = findDistance([m, n], mat);
    }
  }
  return matrix;
};

var updateMatrixTwo = function (mat) {
  let list = []; // Stores Coordinates

  let height = mat.length;
  let width = mat[0].length;
  for (let m = 0; m < height; m++) {
    for (let n = 0; n < width; n++) {
      // Make list of coordinates of all 0's.
      if (mat[m][n] == 0) list.push([m, n]);
      // Replace all 1's with -1, as a marker to prevent double-updates on a cell.
      else mat[m][n] = -1;
    }
  }

  // Iterate through list...
  for (let ele of list) {
    for (let shift of [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
      // NOTE: Clean way to calculate coordinates!
    ]) {
      let m = ele[0] + shift[0];
      let n = ele[1] + shift[1];
      if (0 <= m && m < height && 0 <= n && n < width) {
        if (mat[m][n] == -1) {
          // ...changing adjacent - 1's to currVal + 1...
          mat[m][n] = mat[ele[0]][ele[1]] + 1;
          // ...and pushing the newly liberated tile to END of list...
          list.push([m, n]);
          // ...to be iterated over once again.
        }
      }
      // This enforces that our matrix calculations "spread" out from 0, so the closest values are labelled with the closest distances.
    }
  }
  return mat;
};

let mat = [[0, 1, 1]];
let newMatrix = updateMatrixTwo(mat);

console.log(newMatrix);
