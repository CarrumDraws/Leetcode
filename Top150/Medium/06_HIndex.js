/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  // Examples
  // [6, 5, 3, 2, 1] (3)
  // [1, 2, 3, 4, 5]

  // [3, 1, 1] (1)
  // [1, 2, 3]

  // [0, 0, 0] (0)
  // [1, 2, 3]

  // [100] (1)
  // [1]

  // [4, 4, 0, 0] (2)
  // [1, 2, 3, 4]

  citations.sort((a, b) => {
    return b - a;
  }); // Sort citations backwards
  for (let i = 0; i < citations.length; i++) {
    // HIndex is the first amount of citations that is LESS THAN OR EQUAL TO the amount of papers seen so far.
    // Exception: [4, 4, 0, 0] = 2. Add a max check between the above value and the amount of papers seen until that point.
    if (citations[i] <= i + 1) return Math.max(citations[i], i);
  }
  return citations.length; // Exception: [100] = 1. Above won't trigger, so the hIndex is max.
};
