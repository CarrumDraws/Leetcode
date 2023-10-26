// Return a list of the minimum height edges in the tree.
var findMinHeightTrees = function (n, edges) {
  let arr = [];
  // Ideas: Brute force and check the heights of every single node

  // Find Height given edge[0][0]
  //   let pastVerts = new Set();
  //   let height = 0;

  // currVert: The vertex you are currently on
  function recurDepth(currVert, depth = 0, pastVerts) {
    if (pastVerts.has(currVert)) {
      height = Math.max(height, depth);
      return;
    }
    pastVerts.add(currVert);

    // Find Edges Connecting to currVert + Add Depth
    for (let i = 0; i < edges.length; i++) {
      if (currVert == edges[i][0]) recurDepth(edges[i][1], depth + 1);
      else if (currVert == edges[i][1]) recurDepth(edges[i][0], depth + 1);
    }

    height = Math.max(height, depth);
    return height;
  }
  return recurDepth(currVert);
  console.log(height);
  return arr;
};

var findMinHeightTreesTwo = function (n, edges) {
  let ret = []; // Array of Roots of shortest trees
  let minHeight; // Height of shortest tree so far

  let visited = new Set();
  function search(vertex, depth = 0) {
    if (visited.has(vertex)) return depth; // BC: Vertex Seen. Return Depth
    visited.add(vertex); // Add vertex to visited

    let maxDepth = depth; // Max Depth of Tree

    // search() on all connected edges
    for (let i = 0; i < edges.length; i++) {
      // Left Matches
      if (vertex == edges[i][0])
        maxDepth = Math.max(maxDepth, search(edges[i][1], depth + 1));
      // Right Matches
      else if (vertex == edges[i][1])
        maxDepth = Math.max(maxDepth, search(edges[i][0], depth + 1));
    }

    return maxDepth;
  }

  //   for (let i = 0; i < n; i++) {
  //     let height = search(i);

  //     // New shortest length found
  //     if (!minHeight || height < minHeight) {
  //       ret = [];
  //       minHeight = height;
  //     }
  //     // Add node to ret[]
  //     if (minHeight == height) ret.push(i);

  //     // Reset flags for search();
  //     visited.clear();
  //     height = 0;
  //   }
  return ret;
};

let n = 4;
let edges = [
  [1, 0],
  [2, 1],
  [1, 3],
];

console.log(findMinHeightTreesTwo(n, edges));
