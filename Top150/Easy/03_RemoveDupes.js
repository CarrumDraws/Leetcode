/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let ret = 0; // Number of unique eles/Pointer Swapping Point
  for (let i = 0; i < nums.length; i++) {
    // New Value Detected
    if (i == 0 || nums[i] != nums[i - 1]) {
      nums[ret] = nums[i];
      ret++;
    }
  }
  return ret;
};
