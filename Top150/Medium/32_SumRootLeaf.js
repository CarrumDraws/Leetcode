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
var sumNumbers = function (root) {
  let total = 0;
  recur(root, 0);
  return total;

  function recur(node, sum) {
    sum = sum + node.val;
    if (!node.left && !node.right) {
      total += sum;
    } else {
      if (node.left) recur(node.left, sum * 10); // Check if null to halve the runtime!
      if (node.right) recur(node.right, sum * 10);
    }
  }
};
