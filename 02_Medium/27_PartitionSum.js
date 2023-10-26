/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Given an integer score nums, return true if you can partition the score into two subsets such that the sum of the elements in both subsets is equal or false otherwise.
// WORKS :
var canPartition = function (nums) {
  let total = 0; // Total sum of nums
  nums.map((num) => {
    total += num;
  });
  if (nums.length <= 1 || total % 2 == 1) return false;

  let scoreBoard = new Array(total + 1).fill(false); // Tracks reachable vals
  scoreBoard[0] = true; // Can always reach 0
  let ignore = new Set(); // Newly reached tiles are ignored during same iteration

  for (let num of nums) {
    num = Number(num);
    for (let idx in scoreBoard) {
      idx = Number(idx);
      // To reach new tile, tile must be: False, 'num' away from a reachable one, and not on ignore list.
      if (!scoreBoard[idx] && scoreBoard[idx - num] && !ignore.has(idx - num)) {
        scoreBoard[idx] = true;
        ignore.add(idx);
        if (scoreBoard[total / 2] == true) return true; // TRUE if half the sum is reachable.
      }
    }
    ignore.clear(); // Remove tiles from Ignore list.
  }
  return false;
};

// Optimized: Uses sets instead of Scoreboard array
// Counts backwards, so no need for an ignore() set.
var canPartitionTwo = function (nums) {
  let total = nums.reduce((a, b) => a + b, 0);
  if (nums.length <= 1 || total % 2 == 1) return false;

  let reachable = new Set([0]);

  for (let num of nums) {
    num = Number(num);
    for (let i = total / 2; i > 0; i--) {
      if (reachable.has(i - nums)) reachable.add(i);
      if (reachable.has(total / 2)) return true;
    }
  }
  return false;
};

let nums = [1, 5, 11, 5];
console.log(canPartitionTwo(nums));
