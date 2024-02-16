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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  return recur(root, 0);

  function recur(node, sum) {
    if (!node) return false;
    if (!node.left && !node.right) return sum + node.val == targetSum;
    return (
      recur(node.left, sum + node.val) || recur(node.right, sum + node.val)
    );
  }
};
