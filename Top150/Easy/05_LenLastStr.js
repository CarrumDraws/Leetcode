/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim();
  let len = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == " ") return len;
    len++;
  }
  return len;
};

var lengthOfLastWordTwo = function (s) {
  s = s.trim();
  s = s.replace(/\s+/g, " "); // Reduce Whitespace
  return s.split(" ").slice(-1)[0].length;
};

var lengthOfLastWordThree = function (s) {
  s = s.trim();
  return s.length - s.lastIndexOf(" ") - 1;
};
