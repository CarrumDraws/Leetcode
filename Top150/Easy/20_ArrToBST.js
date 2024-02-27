/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // Recursively split array in half, with the midpoint being the new tree
  return recur(0, nums.length);

  // Basically Binary Search
  function recur(start, end) {
    if (start >= end) return null;
    let mid = Math.floor((start + end) / 2);
    let node = new TreeNode(nums[mid], recur(start, mid), recur(mid + 1, end));
    return node;
  }
};
