/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
// FIRST TRY: O(n + nk)
var kClosest = function (points, k) {
  // For each point, calc the distance from (0, 0) and put them in a distances array.
  // Iterate thorugh the array k times and find the smallest value each time, add it to the return val.

  function calcDistance(point) {
    let [x, y] = point;
    return Math.abs(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));
  }

  let distances = []; // Maps to points object
  for (point of points) {
    distances.push(calcDistance(point));
  }

  // Find smallest value each time, add it to return value.
  let retVal = [];
  for (let i = 0; i < k; i++) {
    let minIndex = 0;
    for (let j in distances) {
      if (distances[j] < distances[minIndex]) minIndex = j;
    }
    retVal.push(points[minIndex]);
    points.splice(minIndex, 1);
    distances.splice(minIndex, 1);
  }
  return retVal;
};

// HEAP IMPLEMENTATION : O(n + klogn)- Creating minHeap is O(n) and deleting is O(klogn)
var kClosestTwo = function (points, k) {
  // Moves one element at index to the correct spot in the heap.
  function minHeapify(index) {
    let leftIdx = leftChild(index);
    let rightIdx = rightChild(index);
    let minIdx = index;

    if (
      points[leftIdx] &&
      calcDistance(points[leftIdx]) < calcDistance(points[minIdx])
    )
      minIdx = leftIdx;
    if (
      points[rightIdx] &&
      calcDistance(points[rightIdx]) < calcDistance(points[minIdx])
    )
      minIdx = rightIdx;

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
  function calcDistance(point) {
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
};

// SORT IMPLEMENTATION O(nLogn)
var kClosestThree = function (points, k) {
  points.sort((p1, p2) => {
    let [x1, y1] = p1;
    let [x2, y2] = p2;
    return (
      Math.pow(x1, 2) + Math.pow(y1, 2) - (Math.pow(x2, 2) + Math.pow(y2, 2))
    );
  });
  return points.slice(0, k);
};

// Priority Queue Implementation
var kClosestFour = function (points, k) {};
let points = [
  [1, 3],
  [-2, 2],
];
let k = 1;
kClosestFour(points, k);
