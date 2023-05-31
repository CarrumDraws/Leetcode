import { printArray } from "../HelperFuncs/PrintArray.js";

// Hashtables store two types of data: Key, and Value.
// By using our main data as a Key, we can "check" if the value exists in O(1) time instead of O(n).
// If our main data is a String, we can use a Hashing Function to convert the string into an integer to be stored.
// Therefore, Javascript Objects (With int keys) can be used as Hashtables.

// These are "JSDocs."
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  // Use Hashtables!
  let hashtable = {};
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if (hashtable[compliment] != null) {
      return [hashtable[compliment], i];
    } else {
      hashtable[nums[i]] = i;
    }
  }
  return -1;
};

let nums = [2, 7, 11, 15];
let target = 9;
let result = twoSum(nums, target);
printArray(result);
