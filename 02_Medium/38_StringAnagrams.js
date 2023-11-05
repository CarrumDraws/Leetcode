/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// NOTE : JS METHODS ARE EXPENSIVE. Sacrificing a bit of storage for an extra variable is worth the decreased computation.
var findAnagrams = function (s, p) {
  if (s.length < p.length) return [];
  let ret = [];
  let hash = {}; // Hash storing target's chars
  for (let i = 0; i < p.length; i++) {
    let char = p[i];
    if (!hash[char]) hash[char] = 1;
    else hash[char]++;
  }

  let left = 0; // Left Pointer
  let right = 0; // Right Pointer
  let charsNeeded = p.length; // Current amount of chars needed to match. 0 = full match

  for (let i = 0; i <= s.length; i++) {
    let rightChar = s[right];
    if (charsNeeded == 0) ret.push(left); // charsNeeded = 0 means full match!

    // Increment Right + update charsNeeded
    if (hash[rightChar] != null) {
      hash[rightChar]--;
      // charsNeeded decreases if right adds a needed character...
      // ...meaning the hash count ends up nonnegative.
      // (If the hash count ends up negative, there are too many of that same character)
      if (hash[rightChar] >= 0) charsNeeded--;
    }
    right++;

    // Increment Left if right is too far + update charsNeeded
    if (right - left > p.length) {
      let leftChar = s[left];
      if (hash[leftChar] != null) {
        hash[leftChar]++;
        // charsNeeded increases if left removes a needed character...
        // ...meaning that the hash count ends up strictly positive.
        if (hash[leftChar] > 0) charsNeeded++;
      }
      left++;
    }
  }
  return ret;
};
