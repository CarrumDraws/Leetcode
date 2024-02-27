/**
 * @param {number} n
 * @return {string[]}
 */
// Idea: Linearly assemble strings with Backtracking.
// Keep track of open and closed parentheses.
var generateParenthesis = function (n) {
  let arr = [];
  let ret = [];
  recur(0, 0);
  return ret;

  function recur(open, close) {
    if (close == n) ret.push(arr.join(""));
    else {
      if (open < n) {
        // Add open paren
        arr.push("(");
        recur(open + 1, close);
        arr.pop();
      }
      if (close < open) {
        // Add close paren if possible
        arr.push(")");
        recur(open, close + 1);
        arr.pop();
      }
    }
  }
};
