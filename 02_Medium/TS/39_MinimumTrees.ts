function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n < 3) return n == 1 ? [0] : [0, 1]; // Edge Cases

  // Create + Populate AdjList
  let adjList: { [key: string]: number[] } = {};
  for (let [x, y] of edges) {
    if (!adjList[x]) adjList[x] = [];
    if (!adjList[y]) adjList[y] = [];
    adjList[x].push(y);
    adjList[y].push(x);
  }

  // Find Leaves, add to leaves[]
  let leaves: number[] = [];
  for (let adj in adjList) {
    if (adjList[adj].length == 1) leaves.push(Number(adj));
  }

  while (n > 2) {
    n = n - leaves.length;
    let newLeaves: number[] = [];
    for (let i = 0; i < leaves.length; i++) {
      let leaf = leaves[i]; // iterate throguh each leaf,
      let parent = adjList[leaf].pop(); // finding the parent,
      adjList[parent!].splice(adjList[parent!].indexOf(leaf), 1); // Removing it from parent in adjList,
      // [note: [parent!] is a non-null assertion operator. Parent can be null, ! assures it isn't.]
      if (adjList[parent!].length == 1) newLeaves.push(parent!); // And see if parent is a new leaf or not
    }
    leaves = newLeaves;
  }
  return leaves;
}
