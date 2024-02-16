/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// Idea: Inorder traverse. Store references to rightmost visited node for each level.
var connect = function (root) {
  let arr = []; // Stores references to right most node for each level
  recur(root, 0);
  return root;

  function recur(node, level) {
    if (!node) return;
    recur(node.left, level + 1);
    if (arr[level]) arr[level].next = node;
    arr[level] = node;
    recur(node.right, level + 1);
  }
};
