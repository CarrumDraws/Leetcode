/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Notes: 3Sum ISN'T just TwoSum with extra steps. Every solution of 3Sum involves pre-sorting the array and leveraging that fact, while 2Sum works on an unsorted array.
// Use pointers i, j, k. i moves the slowest, from left to right. j and k move in tandem starting on either sides of the subarray on the right of i. If the sum i j k is greater than zero, move k down, since that guarentees a smaller sum. do the opposite for the opposite situation. If you find a match where i j k is zero, note that down and shift both i and j to the next valid valiues. Skip over duplicates.
// I think this is the most efficient solution because it uses  pointers instead of 2. using 2 pointers means that you have to move pointer j all the way down, while for three, the addition of pointer k means that if j and k touch, its already invalid.
// i j k also simplifies the calculations of dupe values. You want to calculate dupe values in the case that a two-dupe solution (i.e. -2, 1, 1) is found, yet don't want to have dupes of the same soluton. You could keep a set of previously seen values to reference, but thats inefficient.
// O(n^2)
var threeSum = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let arr = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (nums[i] == nums[i - 1]) continue; // skip dupes
    // Above beats 60%+ of people vs if(nums[i] > 0 || nums[i]==nums[i-1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum == 0) {
        arr.push([nums[i], nums[j], nums[k]]);
        // We only need to skip dupes if we made a match.
        // Move i and j to the next unique values.
        while (nums[j] == nums[j + 1]) j++;
        while (nums[k] == nums[k - 1]) k--;
        j++;
        k--;
      } else if (sum < 0) j++;
      else k--;
    }
  }
  return arr;
};

// let nums = [-1, 0, 1, 2, -1, -4]; // [-3,-1,4]? [-2,-1,3]?
let nums = [0, 0, 0, 0];
console.log(threeSumFive(nums));
