/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// Return if String 's' can be broken into segments in 'wordDict.'
// Segements can be repeated.

// WORKS
var wordBreak = function (s, wordDict) {
  // Create a spaces[] array that indicates if a position in 's' is reachable.
  // Loop backwards, checking spaces.
  let strLen = s.length;
  let spaces = new Array(strLen + 1).fill(false); // Spaces array: +1 longer for ending
  spaces[strLen] = true; // End of s (null) is always reachable!

  // Loop backwards
  for (let i = strLen; i >= 0; i--) {
    if (!spaces[i]) continue; // Ignore if space is unreachable
    for (let word of wordDict) {
      // if space is reachable, loop through words and check if we can reach more spaces from this point.
      if (s.slice(i - word.length, i) == word) spaces[i - word.length] = true;
    }
  }
  return spaces[0]; // If we can reach the first space, we are good.
};

// Same as above but forwards instead
var wordBreakTwo = function (s, wordDict) {
  let spaces = new Array(s.length + 1).fill(false);
  spaces[0] = true;
  for (let i = 0; i <= s.length; i++) {
    if (!spaces[i]) continue;
    for (let word of wordDict) {
      if (s.slice(i, i + word.length) == word) spaces[i + word.length] = true;
    }
  }
  return spaces[s.length];
};

let s = "leetcode";
let wordDict = ["leet", "code"];

console.log(wordBreakThree(s, wordDict));
