/**
 * @param {number[]} nums
 * @return {number}
 */
// Idea: Convert nums to a set. Find the "start" of each group and count up.
var longestConsecutive = function (nums) {
  nums = new Set(nums);
  max = 0;
  for (let ele of nums) {
    if (nums.has(ele - 1)) continue;
    let total = 1;
    while (nums.has(ele + total)) {
      total++;
    }
    max = Math.max(total, max);
  }
  return max;
};
