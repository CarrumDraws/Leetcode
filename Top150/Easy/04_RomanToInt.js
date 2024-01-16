/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let nums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  let lastNum = Infinity; // Stores value of last number;
  for (let i = 0; i < s.length; i++) {
    total += nums[s[i]];
    if (lastNum < nums[s[i]]) total -= lastNum * 2;
    lastNum = nums[s[i]];
  }
  return total;
};
