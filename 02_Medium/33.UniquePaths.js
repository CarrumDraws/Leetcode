/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // m is height
  // n is width

  let arr = new Array(n).fill(1); // First Row Calc'ed
  // For each additional row...
  for (let i = 1; i < m; i++) {
    // Add prev arr val to this one
    for (let j = 1; j < n; j++) {
      arr[j] = arr[j - 1] + arr[j];
    }
  }
  return arr.pop();
};
