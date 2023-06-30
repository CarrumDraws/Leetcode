/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
// Nums contains at least 1 element.
var permute = function (nums) {
  // Loop throguh each element in Permutation, splicing a new permutation and adding it to Temp[]
  let Perms = [[nums[0]]]; // Store growing Permutations Here
  let Temp = [];

  // For each element in nums[]...
  for (let numIdx = 1; numIdx < nums.length; numIdx++) {
    // Loop through current Perms[]...
    for (let currPerm = 0; currPerm < Perms.length; currPerm++) {
      // ... insert a new Num between each Perm ...
      for (let permIdx = 0; permIdx <= Perms[currPerm].length; permIdx++) {
        let tempCopy = [...Perms[currPerm]];
        tempCopy.splice(permIdx, 0, nums[numIdx]);
        // And save it to Temp[].
        Temp.push(tempCopy);
      }
    }
    // Afterwards, replace Perms with Temp[].
    Perms = Temp;
    Temp = [];
  }
  return Perms;
};

let nums = [1, 2, 3];
console.log(permute(nums));

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
