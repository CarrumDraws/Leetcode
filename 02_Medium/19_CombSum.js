/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// The same number may be chosen from candidates an unlimited number of times.
// Two combinations are unique if the frequency of at least one of the chosen numbers is different.
// Works :)
var combinationSum = function (candidates, target) {
  let vals = {}; // Stores all combinations of numbers

  for (let candIdx = 0; candIdx < candidates.length; candIdx++) {
    // Push individual candidates to vals{}
    let cand = candidates[candIdx];
    if (!vals[cand]) vals[cand] = [];
    vals[cand].push([cand]);
    // Iterate from candidate's value to target...
    for (let i = cand; i <= target; i++) {
      // ...calculate complement that adds to current iteration value...
      let comp = i - cand;
      // ...and for each complement in vals...
      if (vals[comp]) {
        for (let j = 0; j < vals[comp].length; j++) {
          if (!vals[i]) vals[i] = [];
          // Push new combinations to vals.
          vals[i].push([cand, ...vals[comp][j]]);
        }
      }
    }
  }
  return vals[target] ? vals[target] : [];
};

let candidates = [2, 3, 6, 7];
let target = 7;
// Output: [[2,2,3],[7]]
combinationSum(candidates, target);

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
