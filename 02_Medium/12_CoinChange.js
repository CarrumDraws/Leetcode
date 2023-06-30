/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Solve Dynamically- Start from smallest Coin and work up to amount, storing the values along the way.
// DOESN'T WORK
var coinChange = function (coins, amount) {
  let storedVals = {};
  storedVals[0] = 0;
  // Returns min amount of coins needed to get to 'val,' depending on past values
  function recurChange(val) {
    if (storedVals[val] != null)
      return storedVals[val]; // Value previously calculated
    else if (val < 0) return -1; // Value Uncalculable

    let currCoins;
    for (let i = 0; i < coins.length; i++) {
      let calcCoins = recurChange(val - coins[i]) + 1;
      currCoins = currCoins ? Math.min(calcCoins, currCoins) : calcCoins;
    }

    storedVals[val] = currCoins;
    return currCoins;
  }

  for (let i = coins[0]; i < amount; i++) {
    recurChange(i);
  }
  console.log(storedVals);
  console.log(amount);
  return storedVals[amount];
};

// Idea: Make a storage array thats [amount+1] long.
// Fill it with Infinities for easier calculation.
// Iterate throguh each coin amount, calculating the values for that coin only.
// Each coin processed will reduce the values in the storage array.
// This loops coins.length * amount times.
var coinChangeTwo = function (coins, amount) {
  let vals = new Array(amount + 1).fill(Infinity);
  vals[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      vals[i] = Math.min(vals[i], vals[i - coin] + 1);
    }
  }
  console.log(vals);
  return vals[amount] == Infinity ? -1 : vals[amount];
};

// Idea: Do a recursive BFS, returning the first instance of a 0.
// FAILS: Time Limit Exceeded!!
var coinChangeThree = function (coins, amount) {
  function recurCoin(value) {
    if (value == 0) return 0;
    if (value < 0) return Infinity;
    let min = Infinity;
    for (let i = 0; i < coins.length; i++) {
      min = Math.min(min, recurCoin(value - coins[i]) + 1);
    }
    return min;
  }

  let min = recurCoin(amount);
  return min == Infinity ? -1 : min;
};

// Dupe of coinChangeTwo
var coinChangeFour = function (coins, amount) {
  let arr = new Array(amount + 1).fill(Infinity);
  arr[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      arr[j] = Math.min(arr[j], arr[j - coins[i]] + 1);
    }
  }
  return arr[amount] == Infinity ? -1 : arr[amount];
};
let coins = [1, 2, 5];
let amount = 11;
console.log(coinChangeFour(coins, amount));
