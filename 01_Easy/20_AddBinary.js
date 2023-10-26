/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// When evaluated as strings, "1" and "0" are always true...
// ... except when used with XOR, in which they are counted as...
// true and false respectively.

function addBinary(a, b) {
  let sum = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  // Add a and b
  while (i >= 0 || j >= 0) {
    // Use leading 0's if one value is longer than the other.
    let A = a[i] ? a[i] : "0";
    let B = b[j] ? b[j] : "0";
    // Determine Sum from Truth Table
    sum = String(A ^ B ^ carry) + sum;
    // Determine Carry from Truth Table
    if (a === b && a !== String(carry)) {
      // carry is num. !carry turns the num into bool. Number() turns bool back to num.
      carry = Number(!carry);
    }
    i--;
    j--;
  }
  // If carry is 1, then add carry at end.
  if (carry) sum = "1" + sum;

  return sum;
  // TRUTH TABLE:
  // a b carry = sum newCarry
  // 0 0 0 = 0 0
  // 0 0 1 = 1 0 < Outlier where newCarry != Carry
  // 0 1 0 = 1 0
  // 1 0 0 = 1 0
  // 0 1 1 = 0 1
  // 1 0 1 = 0 1
  // 1 1 0 = 0 1 < Outlier where newCarry != Carry
  // 1 1 1 = 1 1
  // Use XOR for sum. A ^ B = 0 is same, 1 if diff.
  // For newCarry, if  a == b != carry, newCarry is the opposite.
}
