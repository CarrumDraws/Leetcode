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
 * @return {number}
 */
var countNodes = function (root) {
  // idea: BFS: find the first node with a null child.
  // Calculate based off that.

  if (!root) return 0;
  let queue = [root];
  let count = 0; // Amount of nodes seen
  while (count <= queue.length) {
    let node = queue[count];
    if (node.left && node.right) {
      queue.push(node.left);
      queue.push(node.right);
    } else {
      let sum = count * 2 + 1;
      if (node.left) sum++;
      if (node.right) sum++;
      return sum;
    }
    count++;
  }
  return count;
};
