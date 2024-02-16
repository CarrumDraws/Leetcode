/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let p = 0; // p = index in postorder to look at
  postorder.reverse();
  return recur(0, postorder.length);

  // l = left idx (inclusionary) of inorder window
  // r = right idx (exclusionary) of inorder window
  function recur(l, r) {
    if (l == r) return null;
    let idx = inorder.indexOf(postorder[p]);
    let node = new TreeNode(postorder[p]);
    p++;
    node.right = recur(idx + 1, r);
    node.left = recur(l, idx);
    return node;
  }
};
