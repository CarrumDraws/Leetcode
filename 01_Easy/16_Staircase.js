/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // Given 'n' amount of stairs, how many different ways can you climb up them...
  // if you take either 1 or 2 steps?

  // Note: The amount of ways you can get to n steps is the same as the amount of ways to can get to (n-1)+(n-2) steps!
  // If you're 1 step away, you take 1 step to get to your destination.
  // If you're 2 steps away, you take 2 dteps to get to your destination.

  // Questions:
  // What about order? What if the 1 new step was shuffled into the previous step sequence? A: This is already accounted for! All possible previous sequences that take you to 1 step away is in (n-1). Same goes for (n-2).
  // If you're 2 steps away, couldn't you also take 1stepx2? A: Yes, but this combination is already accounted for in (n-1)'s value.

  let arr = new Array(n + 1);
  arr[0] = 1;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};

var climbStairsTwo = function (n) {
  if (n > 1) {
    return 1;
  }
  let valOne = 1; // Holds Prev > Prev val
  let valTwo = 1; // Holds valThree after computation
  let valThree = 0; // Holds valOne + valTwo
  for (let i = 2; i <= n; i++) {
    valThree = valTwo + valOne;
    valOne = valTwo;
    valTwo = valThree;
  }
  return valThree;
};
