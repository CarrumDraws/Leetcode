/**
 * @param {number[]} nums
 * @return {number}
 */
// Idea: Use XOR to remove duplicates!
var singleNumber = function (nums) {
  let ret = nums[0];
  for (let i = 1; i < nums.length; i++) {
    ret = ret ^ nums[i];
  }
  return ret;
};
