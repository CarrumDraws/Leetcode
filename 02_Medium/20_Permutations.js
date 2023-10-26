/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
// Nums contains at least 1 element.
// Use Backtracking! Draw out a tree first.
var permute = function (nums) {
  let ret = [];
  // vals[]: pool of vals to build with
  // arr[]: currently built array
  function recurPerm(vals, arr) {
    // Goal Here
    if (arr.length == nums.length) {
      ret.push(arr);
      return;
    }
    for (let i = 0; i < vals.length; i++) {
      recurPerm(
        [...vals.slice(0, i), ...vals.slice(i + 1, vals.length)],
        [...arr, vals[i]]
      );
    }
  }
  for (let i = 0; i < nums.length; i++) {
    recurPerm(
      [...nums.slice(0, i), ...nums.slice(i + 1, nums.length)],
      [nums[i]]
    );
  }
  return ret;
};

var permuteTwo = function (nums) {
  let ret = [];
  // arr[]: Currently built array
  // vals[]: Other values
  function recurPerm(arr = [], vals = nums) {
    if (arr.length == nums.length) {
      ret.push(arr);
      return;
    }
    for (let i = 0; i < vals.length; i++) {
      recurPerm(
        [...arr, vals[i]],
        [...vals.slice(0, i), ...vals.slice(i + 1, vals.length)]
      );
    }
  }
  recurPerm();
  return ret;
};

let nums = [1, 2, 3];
console.log(permuteTwo(nums));

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
