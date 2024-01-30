/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// Idea: Use Sliding Window.
// Loop that adds right adds until currSum is "full";
// Loop that subtracts left subtracts until currSum is "cut down";
// After, knock out of balance by subtracting again
var minSubArrayLen = function (target, nums) {
  let min = Infinity;
  let left = 0;
  let right = 0;
  let currSum = 0;
  while (right < nums.length) {
    while (nums[right] != null && currSum < target) {
      currSum += nums[right];
      right++;
    }
    while (target <= currSum - nums[left]) {
      currSum -= nums[left];
      left++;
    }
    if (currSum >= target) min = Math.min(right - left, min);
    currSum -= nums[left];
    left++;
  }
  return min == Infinity ? 0 : min;
};
