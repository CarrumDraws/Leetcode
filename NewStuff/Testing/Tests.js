import { printArray } from "../../HelperFuncs/PrintArray.js";

// When evaluated as strings, "1" and "0" are always true...
// ... except when used with XOR, in which they are counted as...
// true and false respectively.

// Objects(like arrays) only equal each other if their REFERENCES are the same, so arr.includes() fails... so this is the wrong way of going about things. This fails for sets as well.

// Arr.sort() Doesn't sort negative numbers correctly. You'll need to input a sort function to achieve this.

// Arr.fill is dangerous for 2D arrays- the arrays it creates reference each other, so an operation on one affects them all.

// ITerating throguh an object with (for...in...) is MUCH FASTER than iterating throguh a string with (for...of...).

var findMinHeightTrees = function (n, edges) {
  if (!edges || n < 2) return [0];
  let graph = []; // Graph can be represented as 2D array, sicne the values are numerical!
  let leaves = [];
  for (let [x, y] of edges) {
    graph[x] = graph[x] || [];
    graph[y] = graph[y] || [];
    graph[x].push(y);
    graph[y].push(x);
  }

  graph.map((pts, i) => pts.length === 1 && leaves.push(i)); // Find Leaves

  while (n > 2) {
    n = n - leaves.length;
    let nxt_leaves = [];
    for (let leave of leaves) {
      // remove leaf node and itself in related nodes
      tmp = graph[leave].pop();
      graph[tmp].splice(graph[tmp].indexOf(leave), 1);
      // save new leaf node
      graph[tmp].length === 1 && nxt_leaves.push(tmp);
    }
    leaves = nxt_leaves;
  }
  return leaves;
};
