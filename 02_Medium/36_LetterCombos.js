/**
 * @param {string} digits
 * @return {string[]}
 */
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
var letterCombinations = function (digits) {
  let ret = [];
  let hash = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  // str = curr built string
  // idx = curr index in 'digits' to be iterated on
  function recurCombo(str, idx) {
    if (idx > digits.length - 1) {
      ret.push(str);
      return;
    }

    let hashChars = hash[digits[idx]]; // Array of chars that curr digit could equal
    // Loop through hash chars, appending them + recursing
    for (let j = 0; j < hashChars.length; j++) {
      recurCombo(str + hashChars[j], idx + 1);
    }
  }

  digits.length > 0 ? recurCombo("", 0) : null;
  return ret;
};

let digits = "23";
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations(digits));
