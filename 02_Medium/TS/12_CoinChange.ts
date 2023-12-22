function coinChange(coins: number[], amount: number): number {
  let arr: number[] = new Array(amount + 1); // Extra space for 0
  arr[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    let coin: number = coins[i];
    for (let j = coin; j <= amount; j++) {
      if (arr[j - coin] != null) {
        // If [coin] steps backwards has a value, we can access this current amount!
        if (!arr[j]) arr[j] = arr[j - coin] + 1;
        else arr[j] = Math.min(arr[j - coin] + 1, arr[j]);
      }
    }
  }
  return arr[amount] != null ? arr[amount] : -1;
}
