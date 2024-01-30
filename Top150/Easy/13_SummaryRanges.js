/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let ret = [];
  let start = nums[0];
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] == nums[i - 1] + 1) continue;
    if (start == nums[i - 1]) ret.push(String(start));
    else ret.push(String(start) + "->" + String(nums[i - 1]));
    start = nums[i];
  }
  return ret;
};
