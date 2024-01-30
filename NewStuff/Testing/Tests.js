import { printArray } from "../../HelperFuncs/PrintArray.js";

// When evaluated as strings, "1" and "0" are always true...
// ... except when used with XOR, in which they are counted as...
// true and false respectively.

// Objects(like arrays) only equal each other if their REFERENCES are the same, so arr.includes() fails... so this is the wrong way of going about things. This fails for sets as well.

// Arr.sort() Doesn't sort negative numbers correctly. You'll need to input a sort function to achieve this.

// Arr.fill is dangerous for 2D arrays- the arrays it creates reference each other, so an operation on one affects them all.

// Iterating throguh an object with (for...in...) is MUCH FASTER than iterating throguh a string with (for...of...).

const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);

for (const value of mySet) {
  console.log(value);
  console.log(typeof value);
}
let matrix = [
  [1, 2, 3, 4],
  [5, 0, 7, 8],
  [0, 10, 11, 12],
  [13, 14, 15, 0],
];
let arr = [
  [0, 0, 3, 0],
  [0, 0, 7, 8],
  [0, 10, 11, 12],
  [0, 14, 15, 0],
];
let arr2 = [
  [0, 0, 3, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
