/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that nums[i] + nums[j] + nums[k] == 0. i != j != k.
// O(n^2)

// WORKS ------
var threeSumThree = function (nums) {
  let answer = [];
  nums.sort((a, b) => {
    return a - b;
  });
  for (let a = 0; a < nums.length; a++) {
    // Skip 'a' past repeats
    if (a == 0 || nums[a - 1] != nums[a]) {
      let left = a + 1;
      let right = nums.length - 1;

      while (left < right) {
        if (nums[left] + nums[right] + nums[a] == 0) {
          // Triplet Found, push to Answer
          answer.push([nums[a], nums[left], nums[right]]);
          // Move Left Up past repeats
          let prevLeft = nums[left];
          while (nums[left] == prevLeft) left = left + 1;
        } else if (nums[left] + nums[right] + nums[a] > 0) {
          // Move Right Down past repeats
          let prevRight = nums[right];
          while (nums[right] == prevRight) right = right - 1;
        } else {
          // Move Left Up past repeats
          let prevLeft = nums[left];
          while (nums[left] == prevLeft) left = left + 1;
        }
      }
    }
  }
  return answer;
};

// More optimized version of above
var threeSumThreeTwo = function (nums) {
  let answer = [];
  if (nums.length < 3) return answer;
  nums.sort((a, b) => {
    return a - b;
  });
  for (let a = 0; a < nums.length; a++) {
    if (nums[a] > 0) break; // No Point In Checking- will fail
    if (a != 0 && nums[a - 1] == nums[a]) continue;
    let left = a + 1;
    let right = nums.length - 1;

    while (left < right) {
      let prevLeft = nums[left];
      let prevRight = nums[right];
      let sum = nums[left] + nums[right] + nums[a];
      if (sum == 0) answer.push([nums[a], nums[left], nums[right]]);
      if (sum >= 0) while (nums[right] == prevRight) right = right - 1;
      if (sum <= 0) while (nums[left] == prevLeft) left = left + 1;
    }
  }
  return answer;
};

// OPTIMIZED ---------
// This has better runtime...???
var threeSumFour = function (nums) {
  const results = [];

  if (nums.length < 3) return results;
  nums = nums.sort((a, b) => a - b);
  let target = 0;
  // [ -4, -3, -2, -1, -1,  0,  0,  1,  2, | 3,  4 ]
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === target) {
        results.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--; // Move k down as well!

        j++;
        k--;
      } else if (sum < target) j++;
      else k--;
    }
  }

  return results;
};

// So Basically... We can avoid repeats by sorting them first, then skipping over them.
// We can also cut runtime by breaking/returning when input is bound to fail.

// PRACTICE COPY ---
var threeSumFive = function (nums) {
  let ret = [];
  nums.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < nums.length - 2; i++) {
    if (i != 0 && nums[i - 1] == nums[i]) continue;
    let complement = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[left] + nums[right] == complement)
        ret.push([nums[i], nums[left], nums[right]]);
      if (nums[left] + nums[right] <= complement) {
        left++;
        while (nums[left] == nums[left - 1]) left++;
      } else {
        right--;
        while (nums[right] == nums[right + 1]) right--;
      }
    }
  }
  return ret;
};

let nums = [-1, 0, 1, 2, -1, -4]; // [-3,-1,4]? [-2,-1,3]?

console.log(threeSumFive(nums));
