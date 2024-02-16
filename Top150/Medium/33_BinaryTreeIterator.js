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
 */
// Idea: Use a Stack that stores nodes which represent your location in the tree
var BSTIterator = function (root) {
  this.stack = [];
  this.pushNode(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  let node = this.stack.pop();
  if (node.right) this.pushNode(node.right);
  return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

// pushes node and all left children to stack
BSTIterator.prototype.pushNode = function (node) {
  this.stack.push(node);
  let ptr = node.left;
  while (ptr) {
    this.stack.push(ptr);
    ptr = ptr.left;
  }
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
