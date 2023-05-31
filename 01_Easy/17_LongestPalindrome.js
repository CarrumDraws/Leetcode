/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  // Basically: Length of even numbers + Length of largest odd number...
  // Store values into Hashtable, then interate to find all evens and largest odd.
  let hash = {};
  let maxPalindrome = 0;
  let maxOdd = 0;
  for (let i of s) {
    if (hash[i]) {
      hash[i] += 1;
    } else {
      hash[i] = 1;
    }
  }
  for (let key in hash) {
    if (hash[key] % 2 == 0) {
      maxPalindrome += hash[key];
    } else {
      maxPalindrome += hash[key] - 1;
      maxOdd = 1;
    }
  }
  maxPalindrome += maxOdd;
  return maxPalindrome;
};

var longestPalindromeTwo = function (s) {
  let total = 0;
  let mySet = new Set();
  for (let char of s) {
    if (mySet.has(char)) {
      total += 2;
      mySet.delete(char);
    } else {
      mySet.add(char);
    }
  }
  return total + (mySet.size > 0 ? 1 : 0);
};

let str = "Hello";
longestPalindromeTwo(str);
