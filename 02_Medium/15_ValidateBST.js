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
 * @return {boolean}
 */
// Idea: Recursively return [min, max] tuples, and compare root.val to them.
// WORKS
var isValidBST = function (root) {
  // Given the root of a binary tree, determine if it is a valid binary search tree (BST).
  // A valid BST is defined as follows:
  // The left subtree of a node contains only nodes with keys less than the node's key.
  // The right subtree of a node contains only nodes with keys greater than the node's key.
  // Both the left and right subtrees must also be binary search trees.

  let valid = true;
  function recurBST(root) {
    if (root == null) return null;
    let leftArr = recurBST(root.left);
    let rightArr = recurBST(root.right);
    // Make sure leftArray is all less than...
    let leftValid =
      !leftArr || (leftArr[0] < root.val && leftArr[1] < root.val);
    // ...and that rightArray is all greater than.
    let rightValid =
      !rightArr || (root.val < rightArr[0] && root.val < rightArr[1]);
    // Change "valid" flag depending on this.
    valid = valid && leftValid && rightValid;
    // Return the Smallest and Largest values.
    let minVal = leftArr ? Math.min(...leftArr, root.val) : root.val;
    let maxVal = rightArr ? Math.max(...rightArr, root.val) : root.val;
    return [minVal, maxVal];
  }
  recurBST(root);
  return valid;
};

// Better: Keep track of a "window" of viable values while recursing down.
// Instead of recursing then comparing, compare THEN recurse.
// Seems like you can edit the parameters of a leetcode question...
var isValidBSTTwo = function (root, min = -Infinity, max = Infinity) {
  if (root == null) return true;
  if (min != null && min >= root.val) return false;
  if (max != null && max <= root.val) return false;
  return (
    true &&
    isValidBSTTwo(root.left, min, root.val) &&
    isValidBSTTwo(root.right, root.val, max)
  );
};
