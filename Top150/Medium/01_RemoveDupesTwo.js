/**
 * @param {number[]} nums
 * @return {number}
 */
// Idea: Use ptr to point to the next valid insertion point. Increment ptr + insert at point ptr anytime you find either a FIRST or SECOND number.
var removeDuplicates = function (nums) {
  let ptr = 0; // Pointer to next valid insertion point
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      // First Number
      ptr++;
      nums[ptr] = nums[i];
    } else if (nums[i] == nums[ptr] && nums[ptr] != nums[ptr - 1]) {
      // Second Number
      ptr++;
      nums[ptr] = nums[i];
    }
  }
  return ptr + 1;
};
