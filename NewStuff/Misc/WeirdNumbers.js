// BINARY LITERALS ---------------
// Make an Binary Literal by prefixing with "0b" followed by a sequence of Binary(0-1) digits.
console.log(0b11111111); // 7

// OCTALS ----------------
// Make an Octal Literal by prefixing with "0o" followed by a sequence of Octal(0-7) digits.
console.log(0o51); // 41
// Note: Numbers with leading Zeros are read in Octal, and may cause errors.
// "console.log(010);" Will cause an error.

// HEXADECIMAL --------------
// Make a Hex Literal by prefixing with "0x" followed by a sequence of Hex(0-9, a-f) chars.
console.log(0xff); // 255

// PARSEINT -----------------
// You can parse a string into any number with parseInt(x, base), where 'base' is the target base(radix).
let bin = parseInt("111", 2); // 3
let oct = parseInt("0o51", 8); // 41
let dec = parseInt("100", 10); // 100
let hex = parseInt("0xff", 16); // 100

console.log(010);
