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
 * @param {number} k
 * @return {number}
 */
// Strategy: In-Order Traversal + a counter!
var kthSmallest = function (root, k) {
  let val;
  let count = 0;
  recur(root);
  return val;

  function recur(node) {
    if (!node || count > k) return;
    recur(node.left);
    count++;
    if (count == k) val = node.val;
    recur(node.right);
  }
};
