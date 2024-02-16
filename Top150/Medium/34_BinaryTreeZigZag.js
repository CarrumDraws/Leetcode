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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  let ret = [];
  recur(root, 0);
  return ret;

  function recur(node, level) {
    if (ret[level] == null) ret[level] = [];
    if (level % 2 == 0) ret[level] = [...ret[level], node.val];
    else ret[level] = [node.val, ...ret[level]];
    if (node.left) recur(node.left, level + 1);
    if (node.right) recur(node.right, level + 1);
  }
};
