/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length <= 0) return [];
  let arr = [];
  let map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  // idx = pointer to current index, str = built string
  function recur(idx, str) {
    if (idx >= digits.length) arr.push(str);
    else {
      for (let char of map[Number(digits.charAt(idx))]) {
        recur(idx + 1, str + char);
      }
    }
  }
  recur(0, "");
  return arr;
};

let digits = "23";
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations(digits));
