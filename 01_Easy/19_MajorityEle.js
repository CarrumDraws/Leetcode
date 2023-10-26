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

// Significantly BEtter.
var majorityElementTwo = function (nums) {
  // answer = answer, count = counter that dictates answer
  let answer = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    // When count is 0, set answer.
    if (count == 0) {
      answer = nums[i];
      count = 1;
    }
    // Increment count when you hit same answer.
    else if (answer == nums[i]) count++;
    // Decrement count when you hit different answer..
    else count--;
  }
  return answer;
};
