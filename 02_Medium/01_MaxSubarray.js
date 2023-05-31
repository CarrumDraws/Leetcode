/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArrayFail = function (nums) {
  // Idea: 3 pointers, A B C.
  // A = leftIndex
  // B = RightIndex
  // C = Current Target

  let A = 0;
  let B = 0;
  let max = nums[0];
  let currSum = nums[0];
  for (let idx in nums) {
    // If newly value is greater than currSum/positive...
    if (nums[idx] > max || nums[idx] > 0) {
      // ...Move B forwards...
      B = idx;
      // ...Then move A forwards until you find the max value
    }
  }
};

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
