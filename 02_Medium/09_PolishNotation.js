/**
 * @param {string[]} tokens
 * @return {number}
 */
// WORKS ---
var evalRPN = function (tokens) {
  let stack = [];
  const hash = {
    "+": (a, b) => {
      return b + a;
    },
    "-": (a, b) => {
      return b - a;
    },
    "*": (a, b) => {
      return b * a;
    },
    "/": (a, b) => {
      return Math.trunc(b / a);
    },
  };
  for (let token of tokens) {
    if (!isNaN(token)) stack.push(Number(token));
    else {
      let A = stack.pop();
      let B = stack.pop();
      stack.push(hash[token](A, B));
    }
  }
  return stack[0];
};

let tokens = ["0", "3", "/"];
console.log(evalRPN(tokens));
// Explanation: ((2 + 1) * 3) = 9
// Output: 9

// OPTIMIZED
var evalRPNtwo = function (tokens) {
  let stack = [];
  function operate(A, B, token) {
    if (token === "+") return B + A;
    else if (token === "-") return B - A;
    else if (token === "*") return B * A;
    else return Math.trunc(B / A);
  }
  for (let token of tokens) {
    if (!isNaN(token)) stack.push(Number(token));
    else stack.push(operate(stack.pop(), stack.pop(), token));
  }
  return stack[0];
};
