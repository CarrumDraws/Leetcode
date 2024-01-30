/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let hash = {}; // Stores num:idx pairs
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] != null) {
      let dist = i - hash[nums[i]];
      if (0 < dist && dist <= k) return true;
    }
    hash[nums[i]] = i;
  }
  return false;
};
