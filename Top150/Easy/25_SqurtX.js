/**
 * @param {number} x
 * @return {number}
 */
// Use Bin Search
var mySqrt = function (x) {
  let left = 0,
    right = x;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sqr = Math.pow(mid, 2);
    if (sqr <= x && x < Math.pow(mid + 1, 2)) return mid;
    else if (sqr < x) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};
