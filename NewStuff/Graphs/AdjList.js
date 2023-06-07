// Adjacency List implementation of Undirected Graph
// Each Vertex has a Map(Object) of Edges
import { Queue } from "../Orders/Queue.js";

class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices; // Number of Vertices(Points)
    this.AdjList = new Map(); // Vertex(Points) Array. "Vertex : [Vertex B, Vertex C]"
  }

  addVertex(v) {
    this.AdjList.set(v, []);
  }
  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  printGraph() {
    var keysArr = this.AdjList.keys();
    for (var i of keysArr) {
      var valuesArr = this.AdjList.get(i);
      var values = "";
      for (var j of valuesArr) values += j + " ";
      console.log(i + " -> " + values);
    }
  }

  // BFS: USes Queues
  bfs(node) {
    var visited = {}; // Hashtable- tracks visited nodes
    var queue = new Queue(); // Queue- determines visit order

    visited[node] = true;
    queue.enqueue(node);

    while (!queue.isEmpty()) {
      // While there are Verteces in our queue...
      var currVertex = queue.dequeue(); // ...Take the first Vertex...
      console.log(currVertex);
      var linkedVertices = this.AdjList.get(currVertex); // ...Find the Verteces its connected to...

      for (var i in linkedVertices) {
        var vertex = linkedVertices[i];

        if (!visited[vertex]) {
          // ...and if the Vertex isn't in our visited{}, add it to queue.
          visited[vertex] = true;
          queue.enqueue(vertex);
        }
      }
    }
  }

  // DFS: Uses Stacks
  dfs(node) {
    var visited = {}; // Hashtable- tracks visited nodes

    let DFSUtil = (node) => {
      visited[node] = true;
      console.log(node);

      var linkedVertices = this.AdjList.get(node); // Find Vertices node is connected to...

      for (var i in linkedVertices) {
        var vertex = linkedVertices[i];
        if (!visited[vertex]) DFSUtil(vertex, visited); // ... And Recurse on each of these Vertices.
      }
    };

    DFSUtil(node);
  }
}

// Using the above implemented graph class
var g = new Graph(6);
var vertices = ["A", "B", "C", "D", "E", "F"];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();

console.log("DFS");
g.dfs("A");
