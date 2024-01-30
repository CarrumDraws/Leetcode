/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// Idea: Sort each string alphabetically, then group accordingly.
var groupAnagrams = function (strs) {
  let hash = {};
  let ret = [];
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i].split("").sort().join("");
    if (!hash[str]) hash[str] = [];
    hash[str].push(strs[i]);
  }
  for (let key in hash) {
    ret.push(hash[key]);
  }
  return ret;
};
