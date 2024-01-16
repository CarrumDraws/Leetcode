/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // DONT USE BUILT IN FUNCTIONS
  // Idea: From left to right, use ptr to mark the start of words...
  // ...and when the end of a word is reached, add it to str.
  s = s.trim();
  let str = "";
  let ptr = 0; // start of word
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " " && s[i - 1] != " ") {
      // Start of space
      str = " " + s.slice(ptr, i) + str;
    } else if (s[i] != " " && s[i - 1] == " ") {
      // Start of word
      ptr = i;
    }
  }
  return s.slice(ptr, s.length) + str;
};
