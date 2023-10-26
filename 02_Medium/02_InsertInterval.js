/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let preArr = [];
  let currArr = newInterval;
  let postArr = [];
  for (let i = 0; i < intervals.length; i++) {
    // If interval is before intersection, add to preArr
    let currInterval = intervals[i];
    if (currInterval[1] < newInterval[0]) preArr = [...preArr, currInterval];
    // If interval is after, add to postArr
    else if (newInterval[1] < currInterval[0])
      postArr = [...postArr, currInterval];
    // If it does intersect, update currArr
    else {
      currArr[0] = Math.min(currInterval[0], currArr[0]);
      currArr[1] = Math.max(currInterval[1], currArr[1]);
    }
  }
  return [...preArr, currArr, ...postArr];
};

let intervals = [
  [1, 3],
  [6, 9],
];
let newInterval = [2, 5];
console.log(insertThree(intervals, newInterval));
