/**
 * @param {number[]} nums
 * @return {number}
 */
// Binary Search where you check if an element is bigger than neighbors.
// If peak, return if not, move to the higher of the two sides
var findPeakElement = function (nums) {
  if (nums.length == 1) return 0;

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid == 0 || mid == nums.length - 1) {
      if (nums[mid - 1] < nums[mid] || nums[mid] > nums[mid + 1]) return mid; // Valid End
    }
    if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) return mid; // Success
    if (nums[mid] < nums[mid + 1]) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
};
