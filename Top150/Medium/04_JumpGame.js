/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Fake Dynamic Programming Problem.
// Track the amount of stamina you have, and refresh it when encountering a larger number.
// O(n)
var canJump = function (nums) {
  let stamina = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (!stamina) return false;
    stamina = Math.max(nums[i], stamina - 1);
  }
  return true;
};
