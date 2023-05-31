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
var maxDepth = function (root) {
  let maxDepth = 0;
  function calcDepth(node) {
    if (!node) return 0;
    let left = calcDepth(node.left);
    let right = calcDepth(node.right);
    maxDepth = Math.max(maxDepth, left + 1, right + 1);
    return Math.max(left + 1, right + 1);
  }
  calcDepth(root);
  return maxDepth;
};

// The above example calculates maxDepth starting from the ground up.
// We can also calculate maxDepth from top down!
var maxDepthTwo = function (root) {
  let maxDepth = 0;
  function calcDepth(node, depth = 1) {
    if (!node) return 0;
    maxDepth = Math.max(maxDepth, depth);
    calcDepth(node.left, depth + 1);
    calcDepth(node.right, depth + 1);
  }
  calcDepth(root);
  return maxDepth;
};
