function twoSum(nums: number[], target: number): number[] {
  let myHash: object = {}; // Stores Number : Index pairs
  for (let i = 0; i < nums.length; i++) {
    let comp: number = target - nums[i]; // Complement of Number
    if (myHash[comp] != null) return [myHash[comp], i];
    myHash[nums[i]] = i;
  }
  return [-1, -1];
}
