/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // Can put values into hashmap and return the first one that is greater than n/2
  let hash = {};
  for (let num of nums) {
    if (hash[num]) hash[num] += 1;
    else hash[num] = 1;

    if (hash[num] > Math.floor(nums.length / 2)) return num;
  }
};
