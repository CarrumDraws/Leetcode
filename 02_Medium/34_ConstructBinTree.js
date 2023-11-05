/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // "Start" and "End" dictate the "inorder" subset.
  function recur(start, end) {
    if (start >= end) return null; // If start == end, subset is empty and thre is nothing to do.
    let newNode = new TreeNode(preorder[0]); // Makes a new Node out of the next preorder element.
    let idx = inorder.indexOf(preorder[0]); // Find index of next preorder element WITHIN the inorder array
    preorder.shift(); // Remove next preorder element
    newNode.left = recur(start, idx); // Recurse on left half of inorder
    newNode.right = recur(idx + 1, end); // Recurse on right half of inorder
    return newNode;
  }
  // start index, end index + 1 (like arr.slice!);
  return recur(0, inorder.length);
};

// Preorder determines which node is next, Inorder determines which nodes are left/right

let preorder = [3, 9, 20, 15, 7]; // [head] [left tree] [right tree]
// preorder dictates which node is next in the tree

let inorder = [9, 3, 15, 20, 7]; // [left tree] [head] [right tree]
// inorder dictates which nodes are on the left and right subtrees

// Output: [3,9,20,null,null,15,7]

buildTreeFour(preorder, inorder);
