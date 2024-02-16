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
// Kinda tricky for an Easy!
// Idea: Recursively return the min and max of nodes encountered so far.
var getMinimumDifference = function (root) {
  let ret = Infinity;
  recur(root);
  return ret;

  function recur(node) {
    let left = node.left ? recur(node.left) : { min: Infinity, max: -Infinity };
    let right = node.right
      ? recur(node.right)
      : { min: Infinity, max: -Infinity };
    ret = Math.min(
      Math.abs(left.max - node.val),
      Math.abs(right.min - node.val),
      ret
    );
    return {
      min: Math.min(left.min, node.val),
      max: Math.max(right.max, node.val),
    };
  }
};
