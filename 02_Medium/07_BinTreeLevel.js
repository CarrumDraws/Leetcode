/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let arr = [];
  function recur(node, level = 0) {
    if (!node) return;
    if (!arr[level]) arr[level] = [];
    arr[level].push(node.val);
    recur(node.left, level + 1);
    recur(node.right, level + 1);
  }
  recur(root);
  return arr;
};
