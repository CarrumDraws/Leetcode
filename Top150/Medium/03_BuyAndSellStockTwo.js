/**
 * @param {number[]} prices
 * @return {number}
 */
// This ISN'T a Dynamic Programming Problem!
// You don't need to remember your calc history- you just need to compare the PREVIOUS value to the CURRENT one.
// Think of this as a graph- just keep track of the increases!
// Simply add to profit anytime you encounter a price increase.
// O(n)
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(prices[i] - prices[i - 1] + profit, profit);
  }
  return profit;
};
