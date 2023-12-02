/**
 * @param {number[]} height
 * @return {number}
 */
// Solution: Use Two Pointers!
// The trick is to move the pointer on the side with the smaller max.
// The smaller max is ALWAYS going to be our "bottleneck"...
// ...so even if the other side has a hidden wall 100 high, it doesn't matter!
var trap = function (height) {
  let left = 0; // Left Pointer
  let right = height.length - 1; // Right Pointer
  let lMax = height[left];
  let rMax = height[right];
  let sum = 0;

  while (left < right) {
    if (lMax <= rMax) {
      // Move left if lMax is less than/equal to rMax
      left++;
      lMax = Math.max(lMax, height[left]);
      sum += Math.max(lMax - height[left], 0);
    } else {
      // Move right if rMax is less than lMax
      right--;
      rMax = Math.max(rMax, height[right]);
      sum += Math.max(rMax - height[right], 0);
    }
  }
  return sum;
};
