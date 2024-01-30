/**
 * @param {number} n
 * @return {boolean}
 */
// Note: Remember your interger division!
var isHappy = function (n) {
  let set = new Set([n]); // Stores Numbers
  while (true) {
    let total = 0;
    while (n != 0) {
      total += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    if (total == 1) return true;
    if (set.has(total)) return false;
    set.add(total);
    n = total;
  }
};
