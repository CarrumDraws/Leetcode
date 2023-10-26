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
// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
// WORKS!
var rightSideView = function (root) {
  // Observations: Each row in the binary tree will return one value.
  // The binary tree is unordered.
  // We would need the depth of the node to dictate level...
  // ...but for whichever is the rightmost...?
  // Maybe I would do a DFS going from right to left, and handle it that way...

  let ret = [];
  function recurRight(node, level) {
    if (node == undefined) return;
    if (ret[level] == undefined) ret[level] = node.val;
    recurRight(node.right, level + 1);
    recurRight(node.left, level + 1);
  }
  recurRight(root, 0);
  return ret;
};
