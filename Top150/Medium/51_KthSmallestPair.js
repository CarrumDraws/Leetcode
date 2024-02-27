/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
// Whats the least amount of values you need to add to get the answer?
// First, add all pairs nums1[i] with nums2[0]. This gives us a baseline minumum value.
// Then, with the smallest pair, re-add that pair but increment the nums2 index.
// Note that your heap should store INDEXES!
// This uses datastructures-js library
var kSmallestPairs = function (nums1, nums2, k) {
  const ret = [];
  const minHeap = new MinPriorityQueue({ priority: (x) => x[0] });

  for (let i = 0; i < nums1.length; i++) {
    minHeap.enqueue([nums1[i] + nums2[0], i, 0]);
  }

  while (ret.length != k) {
    const [sum, idx1, idx2] = minHeap.dequeue().element; // Take Out
    ret.push([nums1[idx1], nums2[idx2]]);
    if (nums2[idx2 + 1] != null) {
      // Add pair with nums2 incremented
      minHeap.enqueue([nums1[idx1] + nums2[idx2 + 1], idx1, idx2 + 1]);
    }
  }

  return ret;
};
