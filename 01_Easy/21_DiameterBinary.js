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
var diameterOfBinaryTree = function (root) {
  let max = "0";
  function findMaxDiameter(node) {
    if (!node) return 0;
    // Returns the max of both subtrees...
    let leftMax = findMaxDiameter(node.left);
    let rightMax = findMaxDiameter(node.right);
    // ...the Max value is leftMax + rightMax...
    max = Math.max(max, leftMax + rightMax);
    // ...and we return the largest of the two sides, + 1.
    return Math.max(leftMax + 1, rightMax + 1);
  }
  findMaxDiameter(root);
  return max;
};

var diameterOfBinaryTreeTwo = function (root) {
  let max = 0;

  function recurDiam(root) {
    if (!root) return 0;
    let leftLen = recurDiam(root.left);
    let rightLen = recurDiam(root.right);
    max = Math.max(leftLen + rightLen, max);
    return Math.max(leftLen + 1, rightLen + 1);
  }
  recurDiam(root);
  return max;
};

var diameterOfBinaryTreeTwo = function (root) {
  let max = 0;

  function recurDiam(node) {
    if (!node) return 0;
    let leftLen = recurDiam(node.left);
    let rightLen = recurDiam(node.right);
    max = Math.max(leftLen + rightLen, max);
    return Math.max(leftLen + 1, rightLen + 1);
  }
  recurDiam(root);
  return max;
};
