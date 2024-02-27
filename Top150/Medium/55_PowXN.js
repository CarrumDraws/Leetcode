/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// Idea: If even exp, halve it and return ^2
// If odd, subtract 1 and recur again
// Lesson: Try avoiding a 'recur()' function and hash if possible.
// Make the function itself the recursive one.
var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (n % 2 === 0) {
    let half = myPow(x, n / 2);
    return half * half;
  }
  return x * myPow(x, n - 1);
};
