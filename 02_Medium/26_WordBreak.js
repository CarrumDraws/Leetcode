/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// Return if String 's' can be broken into segments in 'wordDict.'
// Segements can be repeated.

// WORKS
var wordBreak = function (s, wordDict) {
  let arr = new Array(s.length + 1).fill(false);
  arr[0] = true;

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) continue;
    for (let word of wordDict) {
      if (s.slice(i, i + word.length) === word) {
        if (i + word.length == s.length) return true; // If end reached, return!
        arr[i + word.length] = true;
      }
    }
  }
  return false;
};

let s = "leetcode";
let wordDict = ["leet", "code"];

console.log(wordBreakThree(s, wordDict));
