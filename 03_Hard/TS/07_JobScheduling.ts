function jobScheduling(
  startTime: number[],
  endTime: number[],
  profit: number[]
): number {
  interface job {
    startTime: number;
    endTime: number;
    profit: number;
    maxProfit: number;
  }
  // Combine arrays into one...
  let arr: job[] = [];
  for (let i = 0; i < startTime.length; i++) {
    arr[i] = {
      startTime: startTime[i],
      endTime: endTime[i],
      profit: profit[i],
      maxProfit: 0,
    };
  }
  arr.sort((a, b) => {
    return a.endTime - b.endTime;
  }); // ...and sort by endTime.

  for (let i = 0; i < arr.length; i++) {
    // You can either choose a job (maxProfit = maxProfit at start of job + profit of job)
    // or not choose a job (maxProfit = maxProfit of previous job)
    let maxProfit: number =
      i == 0
        ? arr[0].profit
        : Math.max(findPrevMax(i) + arr[i].profit, arr[i - 1].maxProfit);
    arr[i].maxProfit = maxProfit;
  }

  // Total maxProfit accross all jobs = The maxProfit at the end of the final job
  return arr[arr.length - 1].maxProfit;

  // Uses BinSearch w? Laggy Pointer to find maxProfit of job whose endTime <= startTime of this job
  function findPrevMax(idx: number): number {
    let startTime: number = arr[idx].startTime;
    let maxProfit: number = 0;
    let left: number = 0;
    let right: number = idx;
    while (left <= right) {
      let mid: number = Math.floor((left + right) / 2);
      if (arr[mid].endTime <= startTime) {
        maxProfit = arr[mid].maxProfit;
        left = mid + 1;
      } else right = mid - 1;
    }
    return maxProfit;
  }
}
