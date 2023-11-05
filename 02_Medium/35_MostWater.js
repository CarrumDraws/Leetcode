/**
 * @param {number[]} height
 * @return {number}
 */
// Use Two Pointers on either end! Then shift pointers depending on which pointer has the smallest wall.
// We move the pointer pointing to the smallest wall because we have already found the maximum area with that height.
var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left != right) {
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
    height[left] < height[right] ? left++ : right--;
  }
  return max;
};

var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let minWall = Math.min(height[left], height[right]);
    max = Math.max(minWall * (right - left), max);
    height[left] <= height[right] ? left++ : right--;
  }
  return max;
};
