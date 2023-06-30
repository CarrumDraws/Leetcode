/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Find val of target in O(logn) time. If target not found, return -1.
// I think you're very close! Issue is minor pedantic stuff...
var search = function (nums, target) {
  // Takes in start and end windows
  function search(start, end) {
    console.log("Hi");
    let mid = Math.floor((end - start) / 2) + start; // Check
    if (nums[mid] == target) return mid;
    if (start >= end) return -1;

    if (nums[start] < nums[mid]) {
      if (nums[start] <= target && target < nums[mid])
        return search(start, mid - 1);
      else return search(mid + 1, end);
    } else {
      if (nums[mid] < target && target <= nums[end])
        return search(mid + 1, end);
      else return search(start, mid - 1);
    }
  }

  return search(0, nums.length - 1);
};

// Idea : Binary search to find pivot.
// Then use pivot to determine correct window to search in.
var searchTwo = function (nums, target) {
  // Find Index of Pivot
  let pivot = 0;
  let end = nums.length - 1;
  while (pivot < end) {
    console.log("Hi");
    let mid = Math.floor((pivot + end) / 2);
    if (nums[mid] < nums[end]) end = mid;
    else pivot = mid + 1;
  }

  console.log("Pivot: " + pivot);
  // Use Pivot to determine correct window to search
  let start = pivot;
  let left = 0;
  let right = nums.length - 1;

  if (target <= nums[right]) left = start;
  else right = start - 1;
  console.log(nums);
  console.log("Target: " + target);
  console.log("Search Window: " + left + " - " + right);

  // Perform normal Binary Search
  while (start < end) {
    console.log("Bye");
    let mid = Math.floor((pivot + end) / 2);
    if (nums[mid] == target) return mid;
    if (nums[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return nums[start] == target ? start : -1;
};

// Works!
var searchThree = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    // When dividing the rotated array into two halves, one must be sorted.

    // Check if the left side is sorted
    if (nums[left] <= nums[mid]) {
      // target in left side
      if (nums[left] <= target && target <= nums[mid]) right = mid - 1;
      // target in right
      else left = mid + 1;
    }

    // Otherwise, the right side is sorted
    else {
      // target in right side
      if (nums[mid] <= target && target <= nums[right]) left = mid + 1;
      // target in left
      else right = mid - 1;
    }
  }
  return -1;
};

var searchFour = function (nums, target) {
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

let nums = [3, 1];
let target = 1;

console.log(searchFour(nums, target));
