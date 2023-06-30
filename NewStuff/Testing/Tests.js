// When evaluated as strings, "1" and "0" are always true...
// ... except when used with XOR, in which they are counted as...
// true and false respectively.

// Objects(like arrays) only equal each other if their REFERENCES are the same, so arr.includes() fails... so this is the wrong way of going about things.

// Arr.sort() Doesn't sort negative numbers correctly. You'll need to input a sort function to achieve this.

import { printObject } from "../../HelperFuncs/PrintObject.js";

let obj = {};
obj["C"] = "Hi";
obj["A"] = "Hi";
obj["B"] = "Hi";

printObject(obj);
