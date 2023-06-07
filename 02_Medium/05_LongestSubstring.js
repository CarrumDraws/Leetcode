/**
 * @param {string} s
 * @return {number}
 */
// Given a string s, find the length of the longest substring without repeating characters.
var lengthOfLongestSubstring = function (s) {
  // Two pointers- back and front.
  // Make a set to keep track of values between the pointers.
  // If You come across a value, check if its in set.
  // If its not in set, add it to set and move front pointer forwards
  // If it's in set, move back pointer forwards until you reach past the matching value, removing elements from set as it advances
  // Stop when front is at end
  let max = 0;
  let front = 0;
  let back = 0;
  let currLetters = new Set();
  while (front < s.length) {
    if (currLetters.has(s[front])) {
      while (s[back] != s[front]) {
        currLetters.delete(s[back]);
        back++;
      }
      back++;
    } else {
      currLetters.add(s[front]);
      max = Math.max(currLetters.size, max);
    }
    front++;
  }
  return max;
};
