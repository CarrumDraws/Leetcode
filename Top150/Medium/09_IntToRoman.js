/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let map = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let idx = 0; // Pointer to curr idx in map to look at
  let ret = "";
  num = String(num); // Convert to string for easy indexing
  for (let i = 0; i < num.length; i++) {
    // target is the current number we are trying to build
    let target = Number(num[i]) * Math.pow(10, num.length - i - 1);
    while (target != 0) {
      if (map[idx][0] > target) idx++; // Curr map val too big : Use smaller val
      else {
        // Map val fits- add it and decrement target val!
        ret += map[idx][1];
        target -= map[idx][0];
      }
    }
  }
  return ret;
};

// (Super Smart Leetcode Answer)
var intToRomanTwo = function (num) {
  const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const hrns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const ths = ["", "M", "MM", "MMM"];
  return (
    ths[Math.floor(num / 1000)] +
    hrns[Math.floor((num % 1000) / 100)] +
    tens[Math.floor((num % 100) / 10)] +
    ones[num % 10]
  );
};
