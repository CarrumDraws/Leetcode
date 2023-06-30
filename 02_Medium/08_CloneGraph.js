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
// Given a reference to ONE NODE in a connected undirected graph.
// Return a deep copy (clone) of the graph.

// A Node looks like This!
// {
//   val: 1,
//   neighbors: [ { val: 2, neighbors: [Array] }, { val: 4, neighbors: [Array] } ]
// }
var cloneGraph = function (node) {
  let history = {}; // Stores Nodes we have already seen

  // Goes throguh each node BFS style, adding their vertices to the answer.
  // Takes in a node, returns a copy of the node.
  function bfs(node) {
    // If node is null OR queue empty OR node already encountered, return null
    if (!node || history[node.val]) return null;

    // Else...
    history[node.val] = true; // ...Add node to history...
    // ...Make New Node...
    let newNode = new Node(node.val);

    // ... and Recursively Push...
    for (let neighborNode of node.neighbors) {
      newNode.neighbors.push(bfs(neighborNode));
    }
    return newNode; // ... return newNode.
  }
  return bfs(node);
};

// I think I'm Closer...? But max call stack exceeded...
// How do i incorporate this AND BFS together...?
var cloneGraphTwo = function (node) {
  function RecurCopy(oldNode) {
    // If node is null OR queue empty OR node already encountered, return null
    if (!oldNode) return null;

    // ...Make New Node, Set Val...
    let newNode = new Node();
    newNode.val = oldNode.val;

    // ... and Recursively set Neighbors...
    for (let i = 0; i < oldNode.neighbors.length; i++) {
      newNode.neighbors.push(RecurCopy(oldNode.neighbors[i]));
    }
    return newNode; // ... then return newNode.
  }
  return RecurCopy(node);
};

// WORKS ----
var cloneGraphThree = function (node) {
  let visited = {}; // Stores Value AND Pointer to Node.
  function RecurCopy(oldNode) {
    // If node is null, return null
    if (!oldNode) return null;
    // If node has been visited, return pointer to the node
    if (visited[oldNode.val]) return visited[oldNode.val];

    let newNode = new Node(oldNode.val); // Make New Node, Set Val...
    // newNode.val = oldNode.val;
    visited[oldNode.val] = newNode; // Store newNode in visited{}...
    // ... Recursively set Neighbors...
    for (let i = 0; i < oldNode.neighbors.length; i++) {
      newNode.neighbors.push(RecurCopy(oldNode.neighbors[i]));
    }
    return newNode; // ... then return newNode.
  }
  return RecurCopy(node);
};

// A Node looks like This!
// {
//   val: 1,
//   neighbors: [ { val: 2, neighbors: [Array] }, { val: 4, neighbors: [Array] } ]
// }
// Practice Copy---
var cloneGraph = function (node) {};
