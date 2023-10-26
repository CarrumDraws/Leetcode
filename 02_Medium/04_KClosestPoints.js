/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
// HEAP IMPLEMENTATION : O(n + klogn)- Creating minHeap is O(n) and deleting is O(klogn)
var kClosest = function (points, k) {
  // Moves one element at index to the correct spot in the heap.
  function minHeapify(index) {
    let left = leftChild(index);
    let right = rightChild(index);
    let minIdx = index;
    if (points[left] && calcDist(points[left]) < calcDist(points[minIdx]))
      minIdx = left;
    if (points[right] && calcDist(points[right]) < calcDist(points[minIdx]))
      minIdx = right;
    swap(index, minIdx);
    if (index != minIdx) minHeapify(minIdx);
  }

  // Sorts array into minheap by minHeapify-ing all non-leaf nodes, from bottom up.
  function buildMinHeap() {
    for (let i = Math.floor(points.length / 2) - 1; i >= 0; i--) {
      minHeapify(i);
    }
  }

  // Returns top value, swaps top with last leaf, minHeapify's at index 0.
  function remove() {
    let topVal = points[0];
    points[0] = points[points.length - 1];
    points.pop();
    minHeapify(0);
    return topVal;
  }

  // Helper Funcs
  function calcDist(point) {
    let [x, y] = point;
    return Math.pow(x, 2) + Math.pow(y, 2);
  }
  function leftChild(index) {
    return index * 2 + 1;
  }
  function rightChild(index) {
    return index * 2 + 2;
  }
  function swap(idxA, idxB) {
    let temp = points[idxA];
    points[idxA] = points[idxB];
    points[idxB] = temp;
  }

  // Main Code -----------
  buildMinHeap();
  let ret = [];
  for (let i = 0; i < k; i++) {
    ret.push(remove());
  }
  return ret;
};

// SORT IMPLEMENTATION O(nLogn)
var kClosestTwo = function (points, k) {
  points.sort((a, b) => {
    return (
      Math.pow(a[0], 2) +
      Math.pow(a[1], 2) -
      (Math.pow(b[0], 2) + Math.pow(b[1], 2))
    );
  });
  console.log(points);
  return points.slice(0, k);
};

// MERGESORT
var kClosestThree = function (points, k) {
  function merge(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = merge(arr.slice(0, mid));
    let right = merge(arr.slice(mid, arr.length));
    let ret = [];
    while (left.length > 0 && right.length > 0) {
      if (dist(left[0]) <= dist(right[0])) ret.push(left.shift());
      else ret.push(right.shift());
    }
    return [...ret, ...left, ...right];
  }
  function dist(A) {
    return Math.pow(A[0], 2) + Math.pow(A[1], 2);
  }
  points = merge(points);
  return points.slice(0, k);
};
let points = [
  [1, 3],
  [-2, 2],
  [2, -2],
];

let k = 2;
console.log(kClosestThree(points, k));
