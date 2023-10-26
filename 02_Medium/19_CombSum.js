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

// Better : Recursive Backtracking Solution!
var combinationSumTwo = function (candidates, target) {
  let ret = [];
  // Takes in array of values + index of last added value
  function recurComb(arr, prevIdx) {
    let sum = arr.reduce((a, b) => {
      return a + b;
    });
    if (sum == target) ret.push(arr);
    if (sum >= target) return;
    // Use prevIdx to prevent recounting repeated combinations
    for (let idx = prevIdx; idx < candidates.length; idx++) {
      recurComb([...arr, candidates[idx]], Number(idx));
    }
  }
  for (let idx in candidates) {
    recurComb([candidates[idx]], Number(idx));
  }
  return ret;
};

var combinationSumThree = function (candidates, target) {
  let arr = [];
  function recur(useArr, currArr, sum) {
    if (sum == 7) arr.push(currArr);
    else if (sum < 7) {
      for (let i = 0; i < useArr.length; i++) {
        recur(
          useArr.slice(i, useArr.length),
          [...currArr, useArr[i]],
          sum + useArr[i]
        );
      }
    }
  }
  for (let i = 0; i < candidates.length; i++) {
    recur(
      candidates.slice(i, candidates.length),
      [candidates[i]],
      candidates[i]
    );
  }
  return arr;
};

let candidates = [8, 7, 4, 3];
let target = 11;
// [[8,3],[7,4],[4,4,3]]
console.log(combinationSumThree(candidates, target));

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
