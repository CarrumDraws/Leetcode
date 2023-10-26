/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
// EASIEST TO UNDERSTAND
var findAnagrams = function (s, p) {
  // modify isAnagram such that you dont have to fully recalcuate each time.
  // Use two pointers such that you can

  let ret = []; // Return Array in Indices
  let left = 0; // Left Pointer
  let right = p.length; // Right Pointer

  let sHash = {}; // Hash of Substring
  let pHash = {}; // Hash of Goal

  // Fill Both Hashes up to index'p.length'
  for (let i = 0; i < p.length; i++) {
    if (!sHash[s[i]]) sHash[s[i]] = 1;
    else sHash[s[i]]++;
    if (!pHash[p[i]]) pHash[p[i]] = 1;
    else pHash[p[i]]++;
  }

  // Loop through, using/moving pointers and checking for equality.
  for (let i = 0; i <= s.length - p.length; i++) {
    checkEquality(i);
    if (!sHash[s[right]]) sHash[s[right]] = 1; // Add new s[right]'s to sHash...
    else sHash[s[right]]++;
    sHash[s[left]]--; // ...and subtract s[lefts] from sHash.
    left++;
    right++;
  }

  // Check for hash equality
  function checkEquality(idx) {
    for (let key in pHash) {
      if (!sHash[key] || sHash[key] != pHash[key]) return;
    }
    ret.push(idx);
  }
  return ret;
};

let s = "bpaa";
let p = "aa";
// Answer: [0,6]
findAnagramsFour(s, p);
