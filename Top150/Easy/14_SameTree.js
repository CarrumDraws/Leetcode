/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let isValid = true;
  recur(p, q);
  return isValid;

  function recur(p, q) {
    if (!isValid || (!p && !q)) return;
    if (!p || !q || p.val != q.val) {
      isValid = false;
      return;
    }
    recur(p.left, q.left);
    recur(p.right, q.right);
  }
};
