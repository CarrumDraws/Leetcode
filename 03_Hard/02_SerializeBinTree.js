/**
 * Definition for a binary tree node.
 * function c(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// Approach: Do a DFS, using "N" to denote a null value.
// HOT TIP: .shift() runs in O(n) time. Use a pointer instead!
var serialize = function (root) {
  let str = "";
  recur(root);
  return str;

  function recur(node) {
    if (!node) str += "N ";
    else {
      str += node.val + " ";
      recur(node.left);
      recur(node.right);
    }
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let arr = data.trim().split(" ");
  let ptr = 0; // Use pointer instead of .shift() for better runttime
  return recur();

  function recur() {
    if (ptr >= data.length || arr[ptr] === "N") {
      ptr++;
      return null;
    }
    let node = new TreeNode(arr[ptr]);
    ptr++;
    node.left = recur();
    node.right = recur();
    return node;
  }
};
