/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let ret; // Currently Focused Element
  let count = 0; // Freq of Currently Focused Element
  for (let i = 0; i < nums.length; i++) {
    if (count == 0) ret = nums[i];
    if (nums[i] == ret) count++;
    else count--;
  }
  return ret;
};
