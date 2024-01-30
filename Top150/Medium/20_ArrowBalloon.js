/**
 * @param {number[][]} points
 * @return {number}
 */
// Idea: For each balloon, check if it intersects with the balloon intersection before it.
// If yes, reduce the intersection by the current balloons size
// If no, add to count and replace the intersection with the new balloon
var findMinArrowShots = function (points) {
  points = points.sort((a, b) => {
    return a[0] - b[0];
  });
  let count = 0;
  let Xsect = points[0];
  for (let i = 1; i <= points.length; i++) {
    if (Xsect[0] <= points[i]?.[0] && points[i]?.[0] <= Xsect[1]) {
      Xsect[0] = points[i][0];
      Xsect[1] = Math.min(points[i][1], Xsect[1]);
    } else {
      count++;
      Xsect = points[i];
    }
  }
  return count;
};
