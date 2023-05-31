/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  // When you insert a new interval, it basically closes a bunch of gaps.
  // Return the intervals such that the gaps are still there.
  // Ideas:
  // Create new empty array
  // while newInterval[start] isn't between the current interval, add the current interval to array
  // When encountering newInterval[start]'s insertion point, it could be standalone or within another interval.
  // Inside another interval,add the start of the interval[start]. The end should either be newInterval[end] or the [end] of the next interval exit point.
  // Standalone, make start of interval newINterval[start].
  // Find end point of newINterval[end]
  let newArr = [];
  for (let i in intervals) {
    // interval[0] = start
    // interval[1] = end
    let start = intervals[i][0];
    let end = intervals[i][1];
    // Find Start of newInterval (between current interval)
    if (
      intervals[i][0] <= newInterval[0] &&
      newInterval[0] <= intervals[i][1]
    ) {
      start = Math.min(intervals[i][0], newInterval[0]);
      for (let j = i; j < intervals.length; j++) {
        if (
          intervals[j][0] <= newInterval[1] &&
          newInterval[1] <= intervals[j][1]
        ) {
          // Find End of newInterval (between current interval)
          end = Math.max(intervals[j][1], newInterval[1]);
          // Advance for loop
          i = j;
        } else if (newInterval[1] < intervals[j][0]) {
          // Find End of newInterval (seperate from current interval)
        }
      }
    }
    break;
  }
};

var insertTwo = function (intervals, newInterval) {
  let newArr = [];
  let overlap = [];
  // 1. Find start and end of full newInterval
  let start = intervals[i][0];
  let end = intervals[i][1];
  for (let i in intervals) {
    if (
      intervals[i][0] <= newInterval[0] &&
      newInterval[0] <= intervals[i][1]
    ) {
      // Find Start (in)
      start = intervals[i][0];
    } else if (newInterval[0] > intervals[i][0]) {
      // Find Start (out)
      start = newInterval[0];
    }
    // If the current interval is seperate from newInterval then add it to newArr
    // If there is overlap, add it to overlap[] instead, and keep adding values to overlap[] until you come across one that breaks out of it, in that case add in the
    if (
      intervals[j][0] <= newInterval[1] &&
      newInterval[1] <= intervals[j][1]
    ) {
      // Find End (in)
      end = intervals[j][1];
    } else if (newInterval[1] < intervals[j][0]) {
      // Find End (out)
      end = newInterval[1];
    }
  }
};

var insertThree = function (intervals, newInterval) {
  let result = []; // Result Array
  let overlap = [...newInterval]; // Stores overlapped array.
  // NOTE: newInterval must be copied with Spread to prevent pass-by-reference!

  for (let i in intervals) {
    if (intervals[i][1] < newInterval[0]) {
      // Interval is Before
      result.push(intervals[i]);
    } else if (intervals[i][0] > newInterval[1]) {
      // Interval is After
      if (overlap.length == 2) {
        result.push(overlap);
        overlap = [];
      }
      result.push(intervals[i]);
    } else {
      // Interval Overlaps!
      overlap[0] = Math.min(overlap[0], intervals[i][0]);
      overlap[1] = Math.max(overlap[1], intervals[i][1]);
    }
  }
  if (overlap.length == 2) result.push(overlap);
  return result;
};

var insertFour = function (intervals, newInterval) {
  let [start, end] = newInterval;
  let left = [];
  let right = [];
  for (const interval of intervals) {
    const [first, last] = interval;
    // If interval is before newInterval, push interval to left[]
    if (last < start) left.push(interval);
    // If interval is after newInterval, push to right[]
    else if (first > end) right.push(interval);
    // if interval intersects, reset boundaries of newInterval
    else {
      start = Math.min(start, first);
      end = Math.max(end, last);
    }
  }
  // NOTE: Use Array Destructuring to your advantage!!
  return [...left, [start, end], ...right];
};

let intervals = [
  [1, 3],
  [6, 9],
];
let newInterval = [2, 5];
console.log(insertThree(intervals, newInterval));
