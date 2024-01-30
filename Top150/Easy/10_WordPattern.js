/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  s = s.split(" ");
  if (s.length != pattern.length) return false;
  let hash = {}; // Stores patters to sWord pairs
  let set = new Set(); // Stores seen sWords

  for (let i = 0; i < pattern.length; i++) {
    if (!hash[pattern[i]]) {
      if (set.has(s[i])) return false;
      set.add(s[i]);
      hash[pattern[i]] = s[i];
    } else if (hash[pattern[i]] != s[i]) return false;
  }
  return true;
};
