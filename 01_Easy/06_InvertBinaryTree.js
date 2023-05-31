import { BinaryTree } from "../NewStuff/BinaryTree/BinaryTree.js";

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;
  invertTree(root.left);
  invertTree(root.right);

  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  return root;
};

let myTree = new BinaryTree();
myTree.insert(4);
myTree.insert(2);
myTree.insert(7);
myTree.insert(1);
myTree.insert(3);
myTree.insert(6);
myTree.insert(9);

invertTreeTwo(myTree.head);
myTree.printInOrder(myTree.head);

// Better code baybeee
function invertTreeTwo(root) {
  if (!root) return null;
  let temp = root.right;
  root.right = invertTreeTwo(root.left);
  root.left = invertTreeTwo(temp);
  return root;
}
