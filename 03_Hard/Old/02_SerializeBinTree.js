/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {string}
 */
// Encodes a tree to a single string.
// DOESN'T WORK : Tried to do it like (M34 ConstructBinTree), But fails as M34 only works with UNIQUE values.
var serialize = function (root) {
  let inStr = "";
  let postStr = "";
  inorder(root);
  postorder(root);

  return inStr + postStr;

  function inorder(node) {
    if (!node) return;
    inStr = inStr + node.val + " ";
    inorder(node.left);
    inorder(node.right);
  }

  function postorder(node) {
    if (!node) return;
    postorder(node.left);
    postStr = postStr + node.val + " ";
    postorder(node.right);
  }
};

/**
 * @param {string} data
 * @return {TreeNode}
 */
// Decodes your encoded data to tree.
var deserialize = function (data) {
  let inorder = data.slice(0, Math.floor(data.length / 2)).trim();
  let postorder = data.slice(Math.floor(data.length / 2), data.length).trim();

  inorder = inorder.split(" "); // Array of strs
  postorder = postorder.split(" "); // Array of strs

  return recur(postorder);

  function recur(post) {
    if (post.length == 0 || post[0] == "") return null;
    let newNode = new TreeNode(inorder[0]);
    let idx = post.indexOf(inorder[0]);
    inorder.shift(); // Remove first ele from inorder
    newNode.left = recur(post.slice(0, idx));
    newNode.right = recur(post.slice(idx + 1, post.length));
    return newNode;
  }
};
