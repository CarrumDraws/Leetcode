/**
 * @param {number[]} nums
 * @return {number}
 */
// Idea: Keep track of First Instance and Second Instance.
// XOR VAL toggles between values. AND ~VAL removes them.
// We can combine values and remove them based off the opposite instance.
var singleNumber = function (nums) {
  let ones = 0; // 1
  let twos = 0;
  for (let i = 0; i < nums.length; i++) {
    ones = (nums[i] ^ ones) & ~twos;
    twos = (nums[i] ^ twos) & ~ones;
  }
  return ones;
};
