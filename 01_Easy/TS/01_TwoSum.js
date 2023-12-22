function twoSum(nums, target) {
  var myHash = {}; // Stores Number : Index pairs
  for (var i = 0; i < nums.length; i++) {
    var comp = target - nums[i]; // Complement of Number
    if (myHash[comp] != null) return [myHash[comp], i];
  }
  return [-1, -1];
}
