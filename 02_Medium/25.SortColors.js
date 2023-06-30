/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Sort array in-place without using nums.sort().
var sortColors = function (nums) {
  // Ideas: Use 2 pointers and a swap() function.

  let r = 0; // Red Pointer
  let w = 0; // White Pointer

  function swap(x, y) {
    let temp = nums[x];
    nums[x] = nums[y];
    nums[y] = temp;
  }

  function advancePointers(ptr) {
    while (nums[r] == 0 && r < ptr) r++; // Moves r to first non-0
    while (nums[w] != 2 && w < ptr) w++; // Moves w to first 2
  }

  for (let ptr = 1; ptr < nums.length; ptr++) {
    // Depending on val ptr points to, swap with respective pointer
    if (nums[ptr] == 0) swap(ptr, r);
    else if (nums[ptr] == 1) swap(ptr, w);
    advancePointers(ptr);
    // When swapping 0's, you may accidentally bring a 1 forwards.
    // In this case, swap again...?
    if (nums[ptr] == 0) swap(ptr, r);
    else if (nums[ptr] == 1) swap(ptr, w);
    advancePointers(ptr);
  }

  return nums;
};

// Other Ideas: Mergesort
// Other Ideas: Count number of 0's, 1's, 2's and refill array
// Idea: Swap from either end, depending on current iterated value
var sortColorsTwo = function (nums) {
  let low = 0; // 0 Pointer
  let mid = 0; // Main Iterator
  let high = nums.length - 1; // 2 Pointer

  while (mid <= high) {
    if (nums[mid] == 0) {
      // Swap with low
      swap(low, mid);
      mid++;
      low++;
    } else if (nums[mid] == 1) {
      // Nothing
      mid++;
    } else if (nums[mid] == 2) {
      // Swap with High
      swap(mid, high);
      high--;
    }
  }

  function swap(a, b) {
    [nums[b], nums[a]] = [nums[a], nums[b]];
  }
};

let nums = [0, 1];
// let nums = [2, 0];
console.log(sortColors(nums));
// Input: nums =
// Output: [0,0,1,1,2,2]
