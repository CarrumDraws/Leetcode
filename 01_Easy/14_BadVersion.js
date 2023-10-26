/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let ver = n;
    let min = 1;
    let max = n;
    while (max >= min) {
      let mid = Math.floor((min + max) / 2);
      if (isBadVersion(mid)) {
        ver = Math.min(ver, mid); // Use Laggy Variable!
        max = mid - 1;
      } else min = mid + 1;
    }
    return ver;
  };
};

function isBadVersion(val) {
  if (val >= 4) {
    return true;
  } else {
    return false;
  }
}

var func = solution(isBadVersion);
console.log(func(5));
