/**
 * @param {number[][]} points
 * @return {number}
 */
// Idea: Just do O(n^2) with a hashtable
var maxPoints = function (points) {
  let max = 1;
  for (let i = 0; i < points.length - 1; i++) {
    if (points.length - (i + 1) < max) break; // no need to calc
    let hash = {}; // Stores slope: count pairs
    for (let j = i + 1; j < points.length; j++) {
      let slope = calcSlope(points[i], points[j]);
      hash[slope] = hash[slope] ? hash[slope] + 1 : 2;
      max = Math.max(hash[slope], max);
    }
  }
  return max;

  function calcSlope(A, B) {
    let [x, y] = A;
    let [a, b] = B;
    if (a == x) return Infinity; // Divide by 0
    return (b - y) / (a - x);
  }
};
