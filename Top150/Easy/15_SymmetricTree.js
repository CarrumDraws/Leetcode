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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let isValid = true;
  recur(root, root);
  return isValid;

  function recur(nodeA, nodeB) {
    if (!isValid || (!nodeA && !nodeB)) return;
    if (!nodeA || !nodeB || nodeA.val != nodeB.val) {
      isValid = false;
      return;
    }
    recur(nodeA.left, nodeB.right);
    recur(nodeA.right, nodeB.left);
  }
};
