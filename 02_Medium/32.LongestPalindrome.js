/**
 * @param {string} s
 * @return {string}
 */
// Works
var longestPalindrome = function (s) {
  // Observations: You have to return the substring, not just the length.
  // Ideas: Brute Force all substrings (n^2)
  // Maybe flip a string, then...Find longest substring of matching characters?

  let ret = "";

  // For each element...
  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    // Cycle throguh sides, checking if theyre the same
    while (s[left] && s[right] && s[left] == s[right]) {
      let substring = s.slice(left, right + 1);
      if (substring.length >= ret.length) ret = substring;
      left--;
      right++;
    }

    // Case Even: If next element is the same as current one, check Even
    if (s[i + 1] && s[i] == s[i + 1]) {
      left = i;
      right = i + 1;
      while (s[left] && s[right] && s[left] == s[right]) {
        let substring = s.slice(left, right + 1);
        if (substring.length >= ret.length) ret = substring;
        left--;
        right++;
      }
    }
  }
  return ret;
};

// Optimized (Same Speed, looks nicer tho)
var longestPalindromeTwo = function (s) {
  let ret = "";

  // Finds longest substring using left and right indexes
  function find(left, right) {
    while (s[left] && s[right] && s[left] == s[right]) {
      let substring = s.slice(left, right + 1);
      if (substring.length >= ret.length) ret = substring;
      left--;
      right++;
    }
  }

  // For each element...
  for (let i = 0; i < s.length; i++) {
    // Cycle throguh sides, checking if theyre the same
    find(i, i);

    // Case Even: If next element is the same as current one, check Even
    if (s[i + 1] && s[i] == s[i + 1]) find(i, i + 1);
  }
  return ret;
};

// Leetcode Optimized
var longestPalindromeThree = function (s) {
  let res = "";
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= 1; j++) {
      let left = i;
      let right = i + j;

      while (left >= 0 && right < s.length && s[left] === s[right]) {
        let len = right - left + 1;
        if (len > max) {
          res = s.substring(left, right + 1);
          max = len;
        }
        left--;
        right++;
      }
    }
  }
  return res;
};

let str = "abbs";
console.log(longestPalindromeTwo(str));
