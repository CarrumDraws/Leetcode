/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// Idea: Arrays are passed by reference- push and pop from the same array!
var combine = function (n, k) {
  let ret = [];
  let arr = [];
  recur(1);
  return ret;

  function recur(idx) {
    if (arr.length == k) ret.push([...arr]);
    else {
      for (let i = idx; i <= n; i++) {
        arr.push(i);
        recur(i + 1);
        arr.pop();
      }
    }
  }
};
