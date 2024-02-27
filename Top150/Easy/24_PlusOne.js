/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1; // 1 we want to add
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = digits[i] + carry;
    if (digits[i] > 9) digits[i] = digits[i] % 10;
    else {
      carry = 0;
      break;
    }
  }
  return carry ? [carry, ...digits] : digits;
};
