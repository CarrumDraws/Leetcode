/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// Traverse backwards along nums1, putting the largest value at the end of nums1/nums2 in.
var merge = function (nums1, m, nums2, n) {
  let aPtr = m - 1; // Pointer for nums1
  let bPtr = n - 1; // Pointer for nums2

  for (let i = nums1.length - 1; i >= 0; i--) {
    if (bPtr == -1) return; // All of nums2 is already in nums1. Done!
    else if (nums1[aPtr] > nums2[bPtr]) {
      nums1[i] = nums1[aPtr];
      aPtr--;
    } else {
      nums1[i] = nums2[bPtr];
      bPtr--;
    }
  }
};
