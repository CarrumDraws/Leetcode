var isValid = function (s) {
  // Stacks in JS...
  // Use push and pop for arrays!

  // My Implementation
  // let stack = [];
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
  //     stack.push(s[i]);
  //   } else {
  //     if (s[i] == ")" && stack.pop() !== "(") return false;
  //     if (s[i] == "}" && stack.pop() !== "{") return false;
  //     if (s[i] == "]" && stack.pop() !== "[") return false;
  //   }
  // }
  // return stack.length == 0;

  // Fancy Implementation
  const hashMap = { "(": ")", "{": "}", "[": "]" };
  const stack = [];
  for (let char of s) {
    if (hashMap[char]) {
      // If Opening bracket found, push CLOSING bracket to stack.
      stack.push(hashMap[char]);
    } else if (stack.length > 0 && stack[stack.length - 1] === char) {
      // If Closing bracket found, check if last element in stack matches it. Then pop.
      stack.pop();
    } else {
      // Char is a closing bracket, but doesn't match.
      return false;
    }
  }
  return stack.length === 0;
};

let val = isValidThree("([])");
console.log(val);
