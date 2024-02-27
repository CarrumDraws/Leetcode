/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// Idea: Get last digit of n by &'ing with 1 and Right Shifting.
// Add 1 to ret and multiply by 2.
var reverseBits = function (n) {
  // How does JS know if number is decimal or binary?
  let ret = 0;
  let count = 32;
  while (count--) {
    ret *= 2; // Multiplying by 2 shifts bits to the left
    ret += n & 1; // Gets last digit in n
    n = n >> 1; // Right Shifts n down
  }
  return ret;
};
