/**
 * @param {number[]} nums
 * @return {number}
 */
// Idea: Your answer is either Max Subarray or the Min Subarray subtracted from the total.
// The minSubarray is essentially the longest sequence of "dead weight" numbers.
var maxSubarraySumCircular = function (nums) {
  let currMax = nums[0];
  let currMin = nums[0];
  let max = nums[0];
  let min = nums[0];
  let total = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (currMax + nums[i] < nums[i]) currMax = nums[i];
    else currMax += nums[i];
    if (currMin + nums[i] > nums[i]) currMin = nums[i];
    else currMin += nums[i];
    total += nums[i];

    max = Math.max(currMax, max);
    min = Math.min(currMin, min);
  }

  return min == total ? max : Math.max(max, total - min);
};
