import { printArray } from "../../HelperFuncs/PrintArray.js";

// When evaluated as strings, "1" and "0" are always true...
// ... except when used with XOR, in which they are counted as...
// true and false respectively.

// Objects(like arrays) only equal each other if their REFERENCES are the same, so arr.includes() fails... so this is the wrong way of going about things. This fails for sets as well.

// Arr.sort() Doesn't sort negative numbers correctly. You'll need to input a sort function to achieve this.

// Arr.fill is dangerous for 2D arrays- the arrays it creates reference each other, so an operation on one affects them all.

// Iterating throguh an object with (for...in...) is MUCH FASTER than iterating throguh a string with (for...of...).

// (0 == 1 == 1 == 0) is TRUE! When comparing multiple values, do a == b && c == d && a == c.

var combine = function (n, k) {
  const ret = [];
  recur(1, []);
  return ret;

  function recur(idx, arr) {
    if (arr.length == k) ret.push([...arr]);
    else {
      for (let i = idx; i <= n; ++i) {
        arr.push(i);
        recur(i + 1, arr);
        arr.pop();
      }
    }
  }
};

console.log(combine(4, 3));
