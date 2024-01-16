/**
 * @param {number[]} ratings
 * @return {number}
 */
// Idea: Create candy[] array. Traverse ratings forwards and backwards.
// When encountering a ratings increase, increase candy[] at that index by 1 relative to its previous neighbor.
var candy = function (ratings) {
  let arr = new Array(ratings.length).fill(1);
  let sum = 0;
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i - 1] < ratings[i]) {
      if (arr[i - 1] >= arr[i]) arr[i] = arr[i - 1] + 1;
    }
  }
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      if (arr[i] <= arr[i + 1]) arr[i] = arr[i + 1] + 1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
