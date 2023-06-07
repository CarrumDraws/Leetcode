/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // Given two binary strings a and b, return their sum as a binary string.
  // Idea : Convert strings to Decimal, Add, then convert decimal to binary.
  // Another Idea: Add the two binary numbers together...
  // ...anytime there is a value greater than 1, Add that onto the next value, and keep going...
  // const parsed = parseInt(x, base); // Use to convert to decimal...
};
function convertToDec(bin) {
  let total = 0;
  let factor = bin.length - 1;
  for (let char of bin) {
    if (char == "1") total += 1 * Math.pow(2, factor);
    factor--;
  }
  return total;
}

// Convert Int decimal to String Binary
function convertToBin(dec) {
  if (dec == 0) {
    return "0";
  }
  let total = "";
  let factor = 0;
  // Find Max Power of 2 that dec has
  while (Math.pow(2, factor) <= dec) factor++;
  factor--;
  // For Each Power of 2 (starting from biggest)...
  for (let fac = factor; fac >= 0; fac--) {
    // Add 1 if greater...
    if (dec >= Math.pow(2, fac)) {
      total += "1";
      dec -= Math.pow(2, fac);
      // else add 0.
    } else total += "0";
  }
  return total;
}

function convertToBinTwo(dec) {
  if (dec == 0) return "0";
  let total = "";
  // Idea: Use % 2 to check if binary num should be 0 or 1.
  // Then, divide the number by 2.
  while (dec > 0) {
    if (dec % 2 == 1) total = "1".concat(total);
    else total = "0".concat(total);
    dec = Math.floor(dec / 2);
  }
  return total;
}

function addBinaryTwo(a, b) {
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
  // 0 0 1 = 1 0
  // 0 1 0 = 1 0
  // 1 0 0 = 1 0
  // 0 1 1 = 0 1
  // 1 0 1 = 0 1
  // 1 1 0 = 0 1
  // 1 1 1 = 1 1
  // Use XOR for sum. A ^ B = 0 is same, 1 if diff.
  // For newCarry, if  a == b != carry, newCarry is the opposite.
}
// console.log(convertToBinTwo(0));
// console.log(convertToBinTwo(1));
// console.log(convertToBinTwo(2));
// console.log(convertToBinTwo(3));
// console.log(convertToBinTwo(4));
// console.log(convertToBinTwo(5));
// console.log(convertToBinTwo(6));

// console.log(convertToDec(convertToBinTwo(0)));
// console.log(convertToDec(convertToBinTwo(1)));
// console.log(convertToDec(convertToBinTwo(2)));
// console.log(convertToDec(convertToBinTwo(3)));
// console.log(convertToDec(convertToBinTwo(4)));
// console.log(convertToDec(convertToBinTwo(5)));
// console.log(convertToDec(convertToBinTwo(6)));

// Doesn't fucking work lol
function addBinaryThree(a, b) {
  let total = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0) {
    let A = Number(a[i]) ? Number(a[i]) : 0;
    let B = Number(b[j]) ? Number(b[j]) : 0;

    total = String(A ^ B ^ carry) + total;
    if (A == B && A != carry) carry = Number(!Number(carry));
    i--;
    j--;
  }
  return total;
}

// TRUTH TABLE:
// a b carry = sum newCarry
// 0 0 0 = 0 0
// 0 0 1 = 1 0
// 0 1 0 = 1 0
// 1 0 0 = 1 0
// 0 1 1 = 0 1
// 1 0 1 = 0 1
// 1 1 0 = 0 1
// 1 1 1 = 1 1
