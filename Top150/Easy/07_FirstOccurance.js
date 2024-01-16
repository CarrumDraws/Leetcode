/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// Self Explanatory. Trick: Do a preliminary check!
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length - (needle.length - 1); i++) {
    if (
      haystack[i] === needle[0] &&
      haystack[i + needle.length - 1] === needle[needle.length - 1]
    ) {
      if (haystack.slice(i, i + needle.length) == needle) return i; // Found Full Word
    }
  }
  return -1;
};
