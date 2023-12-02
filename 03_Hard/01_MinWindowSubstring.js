/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let left = 0;
  let right = 0;
  let minLeft; // Index of min left substring
  let minRight; // Index of min right substring
  let hash = {}; // If all vals are <= 0, it's a match.
  for (let char of t) {
    if (!hash[char]) hash[char] = 1;
    else hash[char]++;
  }
  let neededChars = Object.keys(hash).length; // Chars needed to match. 0 = match.

  while (right < s.length) {
    // Subtract right val from hash
    if (hash[s[right]] != null) {
      if (hash[s[right]] == 1) neededChars--;
      hash[s[right]]--;
    }

    if (neededChars == 0) {
      // Move left pointer past unneeded vals
      while (hash[s[left]] == null || hash[s[left]] < 0) {
        if (hash[s[left]] != null) {
          if (hash[s[left]] == 0) neededChars++;
          hash[s[left]]++;
        }
        left++;
      }

      // Check if new optimum
      if (minLeft == null || right - left < minRight - minLeft) {
        minLeft = left;
        minRight = right;
      }
    }
    // Increment right pointer
    right++;
  }
  return s.slice(minLeft, minRight + 1);
};
