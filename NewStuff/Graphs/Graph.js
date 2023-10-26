// Adjacency List implementation of Undirected Graph
// Essentially an Object of { Vertex: [Arr of Vertices] }
class Graph {
  constructor() {
    this.graph = new Map();
  }
  addVertex(vert) {
    this.graph.set(vert, []);
  }
  addEdge(v1, v2) {
    this.graph.set(v1, [...this.graph.get(v1), v2]);
    this.graph.set(v2, [...this.graph.get(v2), v1]);
  }
  print() {
    this.graph.forEach((edges, vert) => {
      let str = "";
      str += vert + ": " + edges;
      console.log(str);
    });
  }

  bfs(vert) {
    let queue = []; // queue of encountered values
    let visited = {}; // set of processed values
    queue.push(vert);
    while (queue.length != 0) {
      let currVert = queue[0]; // Get current vertex
      if (!visited[currVert]) {
        console.log("Visiting " + currVert);
        visited[currVert] = true; // Add current vertex to visited
        let edges = this.graph.get(currVert); // Add connected vertexes to queue
        for (let i = 0; i < edges.length; i++) {
          if (!visited[edges[i]]) queue.push(edges[i]);
        }
      }
      queue.shift(); // Remove current vertex from queue
    }
  }

  dfs(vert) {
    let visited = new Set();
    let recur = (vert) => {
      if (visited.has(vert)) return;
      console.log("Visiting " + vert);
      visited.add(vert);
      for (let neighbor of this.graph.get(vert)) {
        recur(neighbor);
      }
    };
    recur(vert);
  }
}

let newGraph = new Graph();
newGraph.addVertex("A");
newGraph.addVertex("B");
newGraph.addVertex("C");
newGraph.addVertex("D");
newGraph.addVertex("E");

newGraph.addEdge("A", "B");
newGraph.addEdge("A", "C");
newGraph.addEdge("B", "D");
newGraph.addEdge("B", "E");
newGraph.addEdge("C", "D");
newGraph.addEdge("D", "E");

newGraph.print();

newGraph.bfs("D");
