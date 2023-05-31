/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // Store the frequencies of a string into an array...
  // ...using the characters charCode as an index.

  // Sometimes arrays can be used as hashtables.
  // Here, the only possible values are lowercase alphabet, so thats 26 values.
  // We can use 's.charCodeAt(i) - "a".charCodeAt(0)' as a hash function.

  // Be sure to read the instructions! You could exploit some rules.

  if (s.length != t.length) {
    return false;
  }

  let arr = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    // Add 1 to corresponding index
    arr[s.charCodeAt(i) - "a".charCodeAt(0)]++;

    // Subtract 1 to corresponding index
    arr[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  // Make sure arr is all 0
  for (let i in arr) {
    if (arr[i] != 0) {
      return false;
    }
  }
  return true;
};

let s = "anagram";
let t = "nagaram";

console.log(isAnagram(s, t)); // true
