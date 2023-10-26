/**
 * @param {string} s
 * @return {number}
 */
// Given a string s, find the length of the longest substring without repeating characters.
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let set = new Set(); // Stores current characters
  let lagPtr = 0; // Pointer to start of substring
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      while (set.has(s[i])) {
        set.delete(s[lagPtr]);
        lagPtr++;
      }
    } else {
      max = Math.max(max, i - lagPtr + 1);
    }
    set.add(s[i]);
  }
  return max;
};
