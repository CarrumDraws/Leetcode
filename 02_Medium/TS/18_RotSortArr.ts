function search(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length - 1;
  while (left <= right) {
    let mid: number = Math.floor((left + right) / 2);
    if (nums[mid] == target) return mid;
    if (nums[left] <= nums[mid]) {
      // Left Sorted
      // Element is in left side
      if (nums[left] <= target && target <= nums[mid]) right = mid - 1;
      // Element is in right side
      else left = mid + 1;
    } else {
      // Right Sorted
      // Element is in right side
      if (nums[mid] <= target && target <= nums[right]) left = mid + 1;
      // Element is in left side
      else right = mid - 1;
    }
  }
  return -1;
}
