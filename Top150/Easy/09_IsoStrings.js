/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let hash = {}; // Maps sChar to tChar
  let set = new Set(); // Set of tChars in hash
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      if (set.has(t[i])) return false;
      hash[s[i]] = t[i];
      set.add(t[i]);
    } else if (hash[s[i]] != t[i]) return false;
  }
  return true;
};
