/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Idea: Use Binary Search twice to search for both start and end
var searchRange = function (nums, target) {
  let margin = [-1, -1];
  let left = 0,
    right = nums.length - 1;
  // Find left margin
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) margin[0] = mid;
    if (target <= nums[mid]) right = mid - 1;
    else left = mid + 1;
  }
  if (margin[0] == -1) return margin; // None Found
  right = nums.length - 1; // Left already in place
  // Find Right Margin
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) margin[1] = mid;
    if (nums[mid] <= target) left = mid + 1;
    else right = mid - 1;
  }
  return margin;
};
