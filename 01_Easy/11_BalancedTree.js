/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let balanced = true;

  function calcDepth(node) {
    if (!node) return 0;
    let depthLeft = calcDepth(node.left);
    let depthRight = calcDepth(node.right);
    if (Math.abs(depthLeft - depthRight) > 1) {
      balanced = false;
    }
    return Math.max(depthLeft, depthRight) + 1;
  }

  calcDepth(root);
  return balanced;
};
