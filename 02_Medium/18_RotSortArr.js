/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Find val of target in O(logn) time. If target not found, return -1.
var search = function (nums, target) {
  // Idea : When split, half of the array is sorted.
  // Use a modified binary search.
  // We can check the mid and first values of the array to check which half is sorted and iff th evalue fits.

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) return mid;

    // Case: Left Half is sorted
    if (nums[left] <= nums[mid]) {
      // target in left half
      if (nums[left] <= target && target < nums[mid]) right = mid - 1;
      // target in right half
      else left = mid + 1;
    }
    // Case: Right Half is sorted
    else {
      // target in right half
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      // target in left half
      else right = mid - 1;
    }
  }
  return -1;
};

// PRACTICE -------
var searchTwo = function (nums, target) {
  let first = 0;
  let last = nums.length - 1;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (nums[mid] == target) {
      return mid; // Answer!
    } else if (nums[first] <= nums[mid]) {
      // If Left Sorted...
      if (nums[first] <= target && target <= nums[mid]) {
        last = mid - 1; // ...and target in Left, Go Left
      } else {
        first = mid + 1; // ...else, Go Right
      }
    } else {
      // If Right Sorted...
      if (nums[mid] <= target && target <= nums[last]) {
        first = mid + 1; // ...and target in Right, Go Right
      } else {
        last = mid - 1; // ...else, Go Left
      }
    }
  }
  return -1;
};

let nums = [1, 3];
let target = 3;

console.log(searchTwo(nums, target));
