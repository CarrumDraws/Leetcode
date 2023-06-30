/**
 *
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  let ret = []; // Return Array
  let buildInterval = intervals[0]; // Current Interval
  for (let i = 1; i < intervals.length; i++) {
    // If interval intersects...
    if (buildInterval[1] >= intervals[i][0]) {
      // ... then update buildInterval.
      buildInterval[1] = Math.max(buildInterval[1], intervals[i][1]);
    } else {
      // Else, push buildInterval to array...
      ret.push(buildInterval);
      // ...and set buildInterval to next interval.
      buildInterval = intervals[i];
    }
  }
  ret.push(buildInterval);
  return ret;
};

let intervals = [
  [1, 4],
  [0, 4],
];
console.log(merge(intervals));
// Output: [[0,4]]
