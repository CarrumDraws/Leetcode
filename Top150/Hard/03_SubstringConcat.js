/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// Idea: Think like (38)String Anagram. Avoid recalculating combinations: advancing forwards instead, adding new words and removing the old. Loop words[i].length times, offsetting by 1 index each.
// Technically O(n^2) but more like O((n - words[0].length) * words[0].length).
var findSubstring = function (s, words) {
  let ret = [];
  let hash = {}; // Hash of words : arrIdx
  let arr = []; // Stores Counts
  let wordLen = words[0].length; // Length of a word

  for (let i = 0; i < words.length; i++) {
    if (hash[words[i]] == null) {
      hash[words[i]] = arr.length;
      arr.push(1);
    } else arr[hash[words[i]]]++;
  }

  for (let i = 0; i < wordLen; i++) {
    let wordsNeeded = arr.length;
    let currWords = new Array(arr.length).fill(0); // Freq of current words
    let ptr = i; // Laggy ptr for last word
    for (let j = i; j <= s.length - wordLen; j += wordLen) {
      // Add New Word
      let subStr = s.slice(j, j + wordLen);
      if (hash[subStr] != null) {
        if (currWords[hash[subStr]] == arr[hash[subStr]]) {
          wordsNeeded++; // Moving away from amount
        }
        currWords[hash[subStr]]++; // Add
        if (currWords[hash[subStr]] == arr[hash[subStr]]) {
          wordsNeeded--; // Moving closer to amount
        }
      }
      // Remove Old Word
      if (j >= words.length * wordLen + i) {
        let oldSubStr = s.slice(ptr, ptr + wordLen);
        if (hash[oldSubStr] != null) {
          if (currWords[hash[oldSubStr]] == arr[hash[oldSubStr]]) {
            wordsNeeded++; // Moving away from amount
          }
          currWords[hash[oldSubStr]]--; // Remove
          if (currWords[hash[oldSubStr]] == arr[hash[oldSubStr]]) {
            wordsNeeded--; // Moving closer to amount
          }
        }
        ptr += wordLen;
      }
      if (wordsNeeded == 0) ret.push(ptr);
    }
  }
  return ret;
};
