//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// Given Preorder and Inorder traversals of a tree, construct the tree.
// WORKS but is extremely slow.
var buildTree = function (preorder, inorder) {
  if (preorder.length == 0) return null;
  let newNode = new TreeNode((val = preorder[0]));
  let midIdx = inorder.indexOf(newNode.val);

  // Remove root from preorder[] and inorder[]
  preorder = preorder.slice(1, preorder.length);
  inorder = [
    ...inorder.slice(0, midIdx),
    ...inorder.slice(midIdx + 1, inorder.length),
  ];

  // Divide preorder and inorder into new arrays
  let leftInorder = inorder.slice(0, midIdx);
  let rightInorder = inorder.slice(midIdx, inorder.length);
  let leftPreorder = preorder.slice(0, leftInorder.length);
  let rightPreorder = preorder.slice(leftInorder.length, preorder.length);

  newNode.left = buildTree(leftPreorder, leftInorder);
  newNode.right = buildTree(rightPreorder, rightInorder);
  return newNode;
};

// Same goddamn runtime??
var buildTreeTwo = function (preorder, inorder) {
  if (preorder.length == 0) return null;
  let newNode = new TreeNode((val = preorder[0]));
  let midIdx = inorder.indexOf(newNode.val);

  // Has left node
  if (midIdx != 0) {
    // Divide preorder and inorder into new arrays
    newNode.left = buildTree(
      preorder.slice(1, midIdx + 1),
      inorder.slice(0, midIdx)
    );
  }
  // Has right node
  if (midIdx != preorder.length) {
    // Divide preorder and inorder into new arrays
    newNode.right = buildTree(
      preorder.slice(midIdx + 1),
      inorder.slice(midIdx + 1)
    );
  }
  return newNode;
};

var buildTreeThree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  let root = new TreeNode((val = preorder[0]));
  let mid = inorder.indexOf(root.val);

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
};

// Practice -------------------

// preorder: What is next in line. Shrinks.
// inorder: What is on either half. Gets split into substrings
var buildTreeFour = function (preorder, inorder) {};
let preorder = [3, 9, 20, 15, 7]; // Print, Left, Right
let inorder = [9, 3, 15, 20, 7]; // Left, Print, Right
// Output: [3,9,20,null,null,15,7]

buildTreeFour(preorder, inorder);
