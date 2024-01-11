/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// Idea: Linearly iterate through nums, keeping a laggy pointer at the start of the 'val' group of ignored values. When the laggy pointer is active && you encounter a non-val number, swap the two and increment the laggy pointer to keep up with the shifted position of the 'val' group.
var removeElement = function (nums, val) {
  let count = 0; // Amount of non-val numbers
  let ptr; // Stores idx of start if current 'val' group
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      if (ptr == null) ptr = i;
    } else {
      count++;
      if (ptr == null) continue;
      swap(i, ptr);
      ptr++;
    }
  }

  return count;

  function swap(i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
};
