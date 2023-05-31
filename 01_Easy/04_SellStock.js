/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxVal = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      if (j - i > maxVal) maxVal = j - i;
    }
  }
  // Return value of maximum profit
  return maxVal;
};

// Smart way: Instead of finding the best sellday given a buyday, do the opposite!
// Given a sellday, find the best buyday!
// Note that the best buyday is the cheapest day so far..
var maxProfitTwo = function (prices) {
  let maxVal = 0;
  let cheapestSellVal = prices[0];
  for (let i = 1; i < prices.length; i++) {
    cheapestSellVal = Math.min(prices[i], cheapestSellVal);
    let profit = prices[i] - cheapestSellVal;
    maxVal = Math.max(maxVal, profit);
  }
  return maxVal;
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfitTwo(prices));
