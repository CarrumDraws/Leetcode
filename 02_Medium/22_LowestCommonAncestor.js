import { BinaryTree } from "../NewStuff/BinaryTree/BinaryTree.js";

var lowestCommonAncestor = function (root, p, q) {
  let data;
  // Recursive function
  function recurLCA(node) {
    if (!node) return false;
    let left = recurLCA(node.left); // Check if match in left branch
    let right = recurLCA(node.right); // Check if match in right branch
    let curr = node.data == p || node.data == q; // Check if currNode matches p or q
    // If 2 of the above 3 match, that's our answer
    if ((left && right) || (left && curr) || (right && curr)) {
      data = node.data;
    }
    if (left || right || curr) return true;
  }
  recurLCA(root);
  return data;
};

let myTree = new BinaryTree();
// myTree.insert(8);
// myTree.insert(3);
// myTree.insert(10);
// myTree.insert(1);
// myTree.insert(6);
// myTree.insert(14);
// myTree.insert(4);
// myTree.insert(7);
// myTree.insert(13);

myTree.insert(1);
myTree.insert(2);

console.log(lowestCommonAncestor(myTree.head, 1, 2));
