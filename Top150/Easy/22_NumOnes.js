/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// Idea: AND n with n-1 to knock out its last 1.
// Return the amount of loops.
var hammingWeight = function (n) {
  let count = 0;
  while (n != 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
};
