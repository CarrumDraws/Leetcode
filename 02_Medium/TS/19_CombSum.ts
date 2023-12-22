function combinationSum(candidates: number[], target: number): number[][] {
  let ret: number[][] = [];
  candidates.sort((a, b) => {
    return a - b;
  }); // Sort Candidates...

  for (let i = 0; i < candidates.length; i++) {
    recur([candidates[i]], candidates[i], i);
  }
  return ret;

  // nums: array of built nums | total: sum of nums | vals: index of candidates to choose from
  function recur(nums: number[], total: number, vals: number) {
    if (total == target) ret.push(nums);
    else if (total > target) return;
    else {
      for (let i = vals; i < candidates.length; i++) {
        recur([...nums, candidates[i]], total + candidates[i], i);
        if (total + candidates[i] > target) break; // ...so you can break out later
      }
    }
  }
}
