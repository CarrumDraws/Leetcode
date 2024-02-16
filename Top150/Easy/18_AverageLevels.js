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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  // Add to 2D array then calculate everything?
  let arr = [];
  recur(root, 0);

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    arr[i] = sum / arr[i].length;
  }
  return arr;

  function recur(node, level) {
    if (!node) return;
    if (arr[level] == null) arr[level] = [];
    arr[level].push(node.val);
    if (node.left) recur(node.left, level + 1);
    if (node.right) recur(node.right, level + 1);
  }
};
