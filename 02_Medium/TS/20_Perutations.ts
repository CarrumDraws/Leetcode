function permute(nums: number[]): number[][] {
  // Remove elements from nums and put it back instead of using a 'numBank' array!
  let ret: number[][] = [];
  recur([]);
  return ret;

  // arr[]: Array being built
  function recur(arr: number[]) {
    if (nums.length == 0) ret.push(arr);
    else {
      for (let i = 0; i < nums.length; i++) {
        let num: number[] = nums.splice(0, 1); // Remove first element...
        recur([...arr, ...num]);
        nums = [...nums, ...num]; // ...and add it to the end.
      }
    }
  }
}
