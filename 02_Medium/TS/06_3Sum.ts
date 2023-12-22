function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => {
    return a - b;
  });

  let ret: number[][] = []; // Return Array

  for (let i = 0; i < nums.length - 2; i++) {
    if (i != 0 && nums[i] == nums[i - 1]) continue;
    let left: number = i + 1;
    let right: number = nums.length - 1;
    while (left < right) {
      let sum: number = nums[i] + nums[left] + nums[right];
      if (sum == 0) ret.push([nums[i], nums[left], nums[right]]);
      if (sum <= 0) {
        left++; // Increment left
        while (nums[left] != null && nums[left] == nums[left - 1]) left++;
      } else {
        right--; // Increment right
        while (nums[right] != null && nums[right] == nums[right + 1]) right--;
      }
    }
  }

  return ret;
}
