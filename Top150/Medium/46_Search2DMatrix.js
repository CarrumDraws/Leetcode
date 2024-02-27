/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// Idea: Binary Search rows then again inside the row.
var searchMatrix = function (matrix, target) {
  let left = 0;
  let right = matrix.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (matrix[mid][matrix[0].length - 1] == target) return true;
    if (matrix[mid][matrix[0].length - 1] < target) left = mid + 1;
    else right = mid - 1;
  }
  let row = left;
  (left = 0), (right = matrix[0].length - 1);
  if (!matrix[row]) return false;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (matrix[row][mid] == target) return true;
    if (matrix[row][mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};
