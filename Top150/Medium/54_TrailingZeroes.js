/**
 * @param {number} n
 * @return {number}
 */
// Idea: Calulate the amount of 5's. Divide by the powers of 5.
var trailingZeroes = function (n) {
  // The amount of trailing 0's is dictated by the amount of 2's and 5's in the factorial.
  // There are way more 2's than 5's, so you only need to calculate the 5's.
  // Note that 25, 50, 75 contains 2 5's, and 125 contains 3 5's...
  // So you just need to divide by powers of 5!

  let zeros = 0;
  let fact = 1;
  while (n >= Math.pow(5, fact)) {
    zeros += Math.floor(n / Math.pow(5, fact));
    fact++;
  }
  return zeros;
};
