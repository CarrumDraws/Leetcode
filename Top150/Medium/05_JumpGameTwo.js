/**
 * @param {number[]} nums
 * @return {number}
 */
// Fake Dynamic Programming: Use Double Pointers to track the "window" of reachable values.
var jump = function (nums) {
  let steps = 0;
  let left = 0;
  let right = 0;
  while (right < nums.length - 1) {
    let max = 0;
    for (let i = left; i <= right; i++) {
      max = Math.max(nums[i] - (right - i), max);
    }
    left = right + 1;
    right = right + max;
    steps++;
  }
  return steps;
};
