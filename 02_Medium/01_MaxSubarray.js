/**
 * @param {number[]} nums
 * @return {number}
 */
// We can do this linearly. Keep track of the accumulated total so far, and compare it to each element as you go forwards. If the new element is greater than the accumulated total, scrap the accumulated total and repalce with the new element instead.
// Each step we also get the max of the calculation, which is our final answer.
var maxSubArray = function (nums) {
  let max = nums[0];
  let accumTotal = nums[0]; // Stores total sums so far
  for (let i = 1; i < nums.length; i++) {
    // New accumTotal is either (accumTotal + currVal) or currVal itself, whichever's bigger
    accumTotal = Math.max(accumTotal + nums[i], nums[i]);
    // Max is the maximum between accumTotal or old max.
    max = Math.max(accumTotal, max);
  }
  return max;
};

// PRACTICE -----
var maxSubArrayTwo = function (nums) {
  let max = nums[0];
  let accumTotal = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (accumTotal + nums[i] < nums[i]) accumTotal = nums[i];
    else accumTotal += nums[i];
    max = Math.max(max, accumTotal);
  }
  return max;
};

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArrayTwo(arr));
