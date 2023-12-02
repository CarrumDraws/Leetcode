// Union Find: A Graph Data Structure that enables efficient grouping of nodes.
// Example use Case: "Given a set of nodes and edges, which components belong to a group? How many groups exist?"

class UnionFind {
  constructor(size) {
    // { length: n } is an "arraylike" object with property obj.length = n.
    // It is here so Array.from creates an object of n length.
    // (_, i) => i simply sets each value of the new array to equal its index.
    // So in the end, if n = 5, arr = [0, 1, 2, 3, 4].
    this.arr = Array.from({ length: size }, (_, i) => i);
  }

  // Find's root value
  // Inefficient, could take O(n).
  find(val) {
    if (this.arr[val] == val) return val;
    let retVal = this.find(this.arr[val]);
    return retVal;
  }

  // Merges two groups together
  // Inefficent, could lead to chain tree with O(n) finds.
  union(valOne, valTwo) {
    let prtA = this.find(valOne);
    let prtB = this.find(valTwo);
    this.arr[prtB] = prtA;
  }
}

let newUF = new UnionFind(5);

newUF.union(0, 1);
newUF.union(2, 1);
newUF.union(3, 4);
newUF.union(4, 0);

console.log(newUF.find(1));
console.log(newUF.find(3));

// Union By Rank + Path Compression are better.
// Nearly constant time complexity.
class UnionFindOptimized {
  constructor(size) {
    this.arr = Array.from({ length: size }, (_, i) => i);
    this.size = Array(size).fill(1); // Tracks size of trees to balance them
  }

  // Find's root value + reset chain to directly link instead. "Path Compression"
  find(val) {
    if (this.arr[val] == val) return val;
    let parent = find(this.arr[val]);
    this.arr[val] = parent;
    return result;
  }

  // Merges smaller group into bigger group. "Union By Rank"
  union(valOne, valTwo) {
    let prtA = this.find(valOne);
    let sizeA = this.size[prtA];
    let prtB = this.find(valTwo);
    let sizeB = this.size[prtB];
    if (prtA == prtB) return;

    if (sizeA < sizeB) {
      this.arr[prtA] = prtB;
      sizeB += sizeA;
    } else {
      this.arr[prtB] = prtA;
      sizeA += sizeB;
    }
  }
}
