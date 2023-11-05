/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n == 1) return [0];
  let adjList = {};

  // Put edges into adjList
  for (let [x, y] of edges) {
    if (!adjList[x]) adjList[x] = [];
    if (!adjList[y]) adjList[y] = [];
    adjList[x].push(y);
    adjList[y].push(x);
  }

  // Find Leaves
  let leaves = []; // Array of Leaf Nodes
  for (let adj in adjList) {
    if (adjList[adj].length == 1) leaves.push(adj);
  }

  while (n > 2) {
    n = n - leaves.length; // Dont use a "history" variable- just use n! Decrement it.
    let newLeaves = []; // Next set of leaves
    for (let i = 0; i < leaves.length; i++) {
      // Find next leaves
      let currLeaf = leaves[i];
      let parent = adjList[currLeaf].pop(); // Get parent node
      adjList[parent].splice(adjList[parent].indexOf(Number(currLeaf)), 1); // Remove leaf from parent
      if (adjList[parent].length == 1) newLeaves.push(parent); // Update newLeaves
    }
    leaves = newLeaves;
  }

  return leaves;
};

let n = 11;
let edges = [
  [0, 1],
  [0, 2],
  [2, 3],
  [0, 4],
  [2, 5],
  [5, 6],
  [3, 7],
  [6, 8],
  [8, 9],
  [9, 10],
];

console.log(findMinHeightTreesBetter(n, edges));
