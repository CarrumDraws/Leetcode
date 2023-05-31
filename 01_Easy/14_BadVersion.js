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
    function recurFunc(min, max) {
      let midpoint = Math.floor((min + max) / 2);
      if (
        (isBadVersion(midpoint) && !isBadVersion(midpoint - 1)) ||
        midpoint == 0
      ) {
        return midpoint;
      } else {
        if (isBadVersion(midpoint)) {
          return recurFunc(min, midpoint - 1);
        } else {
          return recurFunc(midpoint + 1, max);
        }
      }
    }
    return recurFunc(0, n);
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
