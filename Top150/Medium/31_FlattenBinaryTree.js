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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  recur(root);

  // Hold the right side. Format the left side, then append the right afterwards.
  // recur should return the TAIL of its respective chains.
  function recur(node) {
    if (!node) return null;
    let right = node.right; // Right branch
    let end = node; // End of chain
    if (node.left) {
      end = recur(node.left); // operate on + find end of left branch
      end.right = right; // add right branch to end of left branch
      node.right = node.left;
      node.left = null;
    }
    if (right) end = recur(right); // Operate on + find end of right branch
    return end;
  }
};
