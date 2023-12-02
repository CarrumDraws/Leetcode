/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.replaceAll(" ", "");
  s = s.split(/(\(|\)|\+|\-)/g).filter((n) => n);
  // Split string into array

  let i = 0;
  return recur();

  function recur() {
    let total = 0;
    let opr = "+";
    while (i < s.length) {
      if (s[i] === "(") {
        // New Section Encountered. Recur down a level
        i++;
        total = operate(total, recur(), opr);
      } else if (s[i] === "+" || s[i] === "-") {
        opr = s[i]; // Update Operator
      } else if (s[i] === ")") {
        return total; // Section Complete, return total
      } else {
        total = operate(total, s[i], opr); // Number Encountered. Operate.
      }
      i++;
    }
    return total;
  }

  function operate(A, B, opr) {
    if (opr === "+") return Number(A) + Number(B);
    else return Number(A) - Number(B);
  }
};

/**
 * @param {string} s
 * @return {number}
 */
// Basically same as above, but uses a stack instead of recursion when handling nested equations.
// Also uses a pointer instead of splitting string 's' into an array.
// Barely more efficient than above solution and much less readable.
var calculate = function (s) {
  let total = "0";
  let oper = "+";
  let i = 0;
  let stack = []; // Stores [[total, oper]]

  while (i < s.length) {
    if (!isNaN(s[i])) {
      let num = "";
      while (!isNaN(s[i])) {
        num += s[i];
        i++;
      }
      operate(total, num);
    } else {
      if (s[i] === "(") {
        stack.push([total, oper]);
        total = "0";
        oper = "+";
      } else if (s[i] === ")") {
        let [prevTotal, prevOper] = stack.pop();
        oper = prevOper;
        operate(prevTotal, total);
      } else if (s[i] === "+" || s[i] === "-") {
        oper = s[i];
      }
      i++;
    }
  }

  return Number(total);

  function operate(A, B) {
    if (oper == "+") total = String(Number(A) + Number(B));
    else total = String(Number(A) - Number(B));
  }
};
