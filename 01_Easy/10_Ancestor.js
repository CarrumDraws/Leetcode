import { BinaryTree } from "../NewStuff/BinaryTree/BinaryTree.js";

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

  // Start at root. The first instance where the currNode.data is between the two values / equals one of the two values is the split point.

  let currNode = root;
  while (
    (p > currNode.data && q > currNode.data) ||
    (p < currNode.data && q < currNode.data)
  ) {
    if (currNode.data > p) currNode = currNode.left;
    else currNode = currNode.right;
  }
  return currNode;
};

let tree = new BinaryTree();
tree.insert(6);
tree.insert(2);
tree.insert(8);
tree.insert(0);
tree.insert(4);
tree.insert(7);
tree.insert(9);
tree.insert(3);
tree.insert(5);

tree.printInOrder(tree.head);

console.log("-------");
console.log(lowestCommonAncestor(tree.head, 2, 4).data); // Should be 2
