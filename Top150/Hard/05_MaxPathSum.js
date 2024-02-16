/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = -Infinity;
  recur(root);
  return max;

  function recur(node) {
    // Note: If left or right is negative, don't include it!
    let left = node.left ? Math.max(recur(node.left), 0) : 0;
    let right = node.right ? Math.max(recur(node.right), 0) : 0;
    // Check current path
    max = Math.max(left + node.val + right, max);
    // Return max path
    return node.val + Math.max(left, right);
  }
};
