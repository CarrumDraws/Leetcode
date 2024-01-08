import { printArray } from "../../HelperFuncs/PrintArray.js";

// When evaluated as strings, "1" and "0" are always true...
// ... except when used with XOR, in which they are counted as...
// true and false respectively.

// Objects(like arrays) only equal each other if their REFERENCES are the same, so arr.includes() fails... so this is the wrong way of going about things. This fails for sets as well.

// Arr.sort() Doesn't sort negative numbers correctly. You'll need to input a sort function to achieve this.

// Arr.fill is dangerous for 2D arrays- the arrays it creates reference each other, so an operation on one affects them all.

// Iterating throguh an object with (for...in...) is MUCH FASTER than iterating throguh a string with (for...of...).

let arr1 = [1, 2, 3, 4];
let arr2 = [2, 4];

let arr3 = arr1.filter((ele) => !arr2.includes(ele));
console.log(arr3);

let arr4 = ["1", "2", "3"];
console.log(arr4);
arr4 = arr4.map((val) => Number(val));
console.log(arr4);
