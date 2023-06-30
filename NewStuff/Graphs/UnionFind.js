// Union Find: A Graph Data Structure that enables efficient grouping of nodes.
// Example use Case: "Given a set of nodes and edges, which components belong to a group? How many groups exist?"

class UnionFind {
  constructor(N) {
    // Array w/ each value = index.
    // Element's index represents node, while value represents it's parent.
    // If value = index, the node is a HEAD.
    this.Array = Array.from(Array(N), (_, i) => i);
    // Array filled w/ 1's.
    // Represents the amount of nodes a HEAD has.
    this.Count = new Array(N).fill(1);
  }

  // Combine node x's group with node y's group.
  // Changing 1 HEAD value changes all children as well
  union(x, y) {
    let headX = this.find(x);
    let headY = this.find(y);

    if (headX == headY) return; // Already Unioned

    // Change depending on the bigger Count
    if (this.Count[headX] < this.Count[headY]) {
      this.Array[headX] = headY;
      this.Count[headY] += this.Count[headX];
    } else {
      this.Array[headY] = headX;
      this.Count[headX] += this.Count[headY];
    }
  }

  // Find the HEAD of node x.
  find(x) {
    // if (this.Array[x] != x) this.Array[x] = this.find(this.Array[x]);
    // return this.Array[x];
    if (this.Array[x] == x) return x;
    return this.find(this.Array[x]);
  }
}

let newUF = new UnionFind(4);
newUF.union(2, 3);
console.log(newUF.Array);
console.log(newUF.find(3));
console.log("Done");
