function merge(intervals: number[][]): number[][] {
  // Sort Intervals by starttime
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  let ret: number[][] = [];
  let currInt: number[] = []; // Interval currently being built

  for (let interval of intervals) {
    if (currInt.length == 0) currInt = interval;
    else if (interval[0] <= currInt[1]) {
      // If intersection
      currInt[0] = Math.min(currInt[0], interval[0]);
      currInt[1] = Math.max(currInt[1], interval[1]);
    } else {
      // If no intersection
      ret.push(currInt);
      currInt = interval;
    }
  }
  return [...ret, currInt];
}
