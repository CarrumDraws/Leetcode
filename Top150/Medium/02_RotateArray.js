/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // Main Idea: Reverse Array + Re-REverse each section
  k = k % nums.length; // Note: if nums.length = 5, k = 6 is the same as k = 1.
  reverse(0, nums.length);
  reverse(0, k);
  reverse(k, nums.length);

  //Reverses start -> end (end not including)
  function reverse(start, end) {
    for (let i = 0; i < Math.floor((end - start) / 2); i++) {
      let temp = nums[start + i];
      nums[start + i] = nums[end - i - 1];
      nums[end - i - 1] = temp;
    }
  }
};
