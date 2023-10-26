/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let ret = [[]];
  // arr[]: Built Array
  // val[]: Values to choose from
  function recurSubset(arr, vals) {
    ret.push(arr);
    if (arr.length == nums.length) return;
    // For vals[], only pass in values after the currently iterated one
    for (let i = 0; i < vals.length; i++) {
      recurSubset([...arr, vals[i]], [...vals.slice(i + 1, vals.length)]);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    recurSubset([nums[i]], [...nums.slice(i + 1, nums.length)]);
  }
  return ret;
};

let nums = [1, 2, 3];
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

console.log(subsets(nums));
