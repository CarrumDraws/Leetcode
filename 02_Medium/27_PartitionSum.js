/**
 * @param {number[]} nums
 * @return {boolean}
 */
// NOTES: Dynamic programming problem. Don't use an array of target + 1 length to store hits, since that could take up massive amounts of space.
// Instead, use a SET so that you don't repeat values to recalculate.
var canPartition = function (nums) {
  let sum = nums.reduce((prev, curr) => prev + curr);
  if (sum % 2 != 0) return false; // Odd sums can't be halved
  sum = sum / 2;

  let set = new Set([0]); // Store 'accessible' values in a Set to prevent dupe vals!

  for (let i = 0; i < nums.length; i++) {
    let arr = new Array(); // Store newly accessible vals in an arr...
    for (let ele of set) {
      let total = ele + nums[i];
      if (total == sum) return true;
      if (total < sum) arr.push(total);
    }
    arr.forEach((item) => set.add(item)); // ...and add them to the set after.
  }
  return false;
};

let nums = [1, 5, 11, 5];
console.log(canPartitionTwo(nums));
