/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// return the level order traversal of its nodes' values. (i.e., from left to right, level by level)
// Works ---
var levelOrder = function (root) {
  // Idea: Recursive function that takes in the tree and a level.
  // Depending on the level, input the value into the array.
  // Inorder Traversal.
  let answer = [];
  function recurTraverse(node, level = 0) {
    if (!node) return;
    recurTraverse(node.left, level + 1);
    if (answer[level]) answer[level].push(node.val);
    else answer[level] = [node.val];
    recurTraverse(node.right, level + 1);
  }
  recurTraverse(root);
  return answer;
};

// Optimize?
var levelOrderTwo = function (root) {
  // Idea: Recursive function that takes in the tree and a level.
  // Depending on the level, input the value into the array.
  // Inorder Traversal.
  let answer = [];
  function recurTraverse(node, level = 0) {
    if (!node) return;
    if (node.left) recurTraverse(node.left, level + 1);
    if (answer[level]) answer[level].push(node.val);
    else answer[level] = [node.val];
    if (node.right) recurTraverse(node.right, level + 1);
  }
  recurTraverse(root);
  return answer;
};
