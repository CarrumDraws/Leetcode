/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
// You REALLY need to read the instructions before going in + the specifications.

// Generic DP Solution wont work!

// Main Idea: Sort jobs by finishTime, then calculate the maxProfit for each finishTime. For each job, the cumulinative maxProfit is either the maxProfit of the prev job (curr job wasn't taken) or the maxProfit at curr job's startTime + curr job's profit. Note that maxProfit strictly increases, so use BinSearch to find curr job's startTime.
const jobScheduling = (startTime, endTime, profit) => {
  let arr = new Array(profit.length);
  for (let i = 0; i < profit.length; i++) {
    arr[i] = { start: startTime[i], end: endTime[i], profit: profit[i] };
  }
  arr.sort((a, b) => {
    return a.end - b.end;
  });

  let maxProfit = 0; // Highest Total Profit encountered so far
  let profits = []; // Stores [endTime, profit] couples
  profits.push([0, 0]); // At time 0, we have $0
  for (let i = 0; i < arr.length; i++) {
    let newProfit = binSearch(i, arr[i].start) + arr[i].profit; // Max profit if job taken
    maxProfit = Math.max(maxProfit, newProfit);
    profits.push([arr[i].end, maxProfit]);
  }

  return maxProfit;

  // Returns the largest profit in profits[] before startTime
  function binSearch(index, startTime) {
    let start = 0;
    let end = index;
    let maxProfit = 0; // Laggy Max Profit Tracker

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      let currEndTime = profits[mid][0]; // endTime of job you're looking at
      if (currEndTime <= startTime) {
        maxProfit = profits[mid][1]; // Possible Answer
        start = mid + 1; // Go Right
      } else end = mid - 1; // Go Left
    }
    return maxProfit;
  }
};

let startTime = [6, 15, 7, 11, 1, 3, 16, 2];
let endTime = [19, 18, 19, 16, 10, 8, 19, 8];
let profit = [2, 9, 1, 19, 5, 7, 3, 19];
// Answer: 41

console.log(jobScheduling(startTime, endTime, profit));
