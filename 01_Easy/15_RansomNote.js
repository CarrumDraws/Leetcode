import { printArray } from "../HelperFuncs/PrintArray.js";

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // Ideas: Put magazine into an array. Store the amount of
  let letters = new Array(26).fill(0);
  for (let idx in magazine) {
    let int = magazine.charCodeAt(idx) - "a".charCodeAt(0);
    letters[int] += 1;
  }
  for (let idx in ransomNote) {
    let int = ransomNote.charCodeAt(idx) - "a".charCodeAt(0);
    letters[int] -= 1;
  }
  for (let idx in letters) {
    if (letters[idx] < 0) return false;
  }
  return true;
};

var canConstructTwo = function (ransomNote, magazine) {
  // Ideas: Replace ransomNote with empty spaces fro each matching magazine element.
  // If ransomNote is empty by the end, return true.
  // This only requires one cycle.
  for (let idx in magazine) {
    ransomNote = ransomNote.replace(magazine[idx], "");
  }
  return ransomNote.length == 0;
};

canConstruct("howdy", "hello");
