/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  let hash = {}; // Stores created nodes: val:node
  function recur(node) {
    if (!node) return null;
    if (hash[node.val]) return hash[node.val];
    let newNode = new Node(node.val);
    hash[node.val] = newNode;
    for (let nextNode of node.neighbors) {
      newNode.neighbors.push(recur(nextNode));
    }
    return newNode;
  }
  return recur(node);
};
