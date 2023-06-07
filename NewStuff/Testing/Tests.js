// When evaluated as strings, "1" and "0" are always true...
// ... except when used with XOR, in which they are counted as...
// true and false respectively.

import { printArray } from "../../HelperFuncs/PrintArray.js";

// Objects(like arrays) only equal each other if their REFERENCES are the same, so arr.includes() fails... so this is the wrong way of going about things.

let arr = [[1]];
console.log(arr.includes([1])); // False...?

// Arr.sort() Doesn't sort negative numbers correctly. You'll need to input a sort function to achieve this.
let nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
console.log(nums);
nums.sort((a, b) => {
  return a - b;
});
console.log(nums);
// printArray(nums);
