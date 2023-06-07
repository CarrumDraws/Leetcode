/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that nums[i] + nums[j] + nums[k] == 0. i != j != k.
// O(n^2)
var threeSum = function (nums) {
  let hash = {}; // Store 'sum : val1, val2'
  let answer = [];
  // Cycle throguh individuals, but store pairs.
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let complement = -nums[j];
      if (hash[complement])
        answer.push([hash[complement][0], hash[complement][1], nums[j]]);
      hash[nums[j] + nums[i]] = [nums[i], nums[j]];
    }
  }
  return answer;
};
// Hashtable doesnt work because key values get overridden. by the same sums. Multiple combos could have the same sum.

// General Idea: Sort array. Iterate over the elements, skipping over duplicate elements.
// For each element iterated, perform twoSum on the subarray from that element to the end.
var threeSumTwo = function (nums) {
  let answer = [];
  nums = nums.sort();
  for (let a = 0; a < nums.length; a++) {
    let set = new Set(); // Stores previously found combinatory sums
    // Don't iterate on duplicate value
    if (a == 0 || nums[a] != nums[a - 1]) {
      // Perform TwoSum on subarray from 'b' to end
      // Doesn't work with '[0, 0, 0, 0].' Lots of weird things to keep track of.
      for (let b = a + 1; b < nums.length; b++) {
        let complement = -(nums[a] + nums[b]);
        if (
          set.has(complement) &&
          !answer.includes([nums[a], nums[b], complement])
        )
          answer.push([nums[a], nums[b], complement]);
        set.add(nums[b]);
      }
    }
  }
  return answer;
};
// The problem is I only check for equality in the "a" loop. In the "b" loop, I don't check for equality since I may need two of the same value to create a triplet, like [0, 0, 0]. Do I make a special case for [0, 0, 0] since its the only triplet with two repeated values...?

// Instead of keeping track of which twoSum is being calculated (to avoid [0, 0, 0, 0] issues), we can take advantage of the sorted array and use two pointers on either side.
// If left + right > target, move right down.
// If left + right < target, move left down.
// While shifting, skip over repeated values.
// We can keep whittling the left and right pointers down until left >= right, then stop.

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

let nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]; // [-3,-1,4]? [-2,-1,3]?
// Correct Output: [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
console.log(threeSumThree(nums));
