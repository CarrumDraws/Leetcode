/**
 * @param {number[]} nums
 * @return {number}
 */
// Look at examples to prevent infinate loops. Note that midpoint could be the answer
var findMin = function (nums) {
  // [0,1,2,4,5,6,7]
  // [5,6,7,0,1,2,4]
  // [4,5,6,7,0,1,2] If right is less than mid, go right
  // [7,0,1,2,4,5,6] else , go left. Note that midpoint could be valid.

  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid; // midpoint could be answer
  }
  return nums[left];
};
