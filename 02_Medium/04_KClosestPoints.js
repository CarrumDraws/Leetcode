/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
// FIRST TRY: O(n + nk)
var kClosest = function (points, k) {
  // For each point, calc the distance from (0, 0) and put them in a distances array.
  // Iterate thorugh the array k times and find the smallest value each time, add it to the return val.

  function calcDist(point) {
    let [x, y] = point;
    return Math.abs(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));
  }

  let distances = []; // Maps to points object
  for (point of points) {
    distances.push(calcDist(point));
  }

  // Find smallest value each time, add it to return value.
  let retVal = [];
  for (let i = 0; i < k; i++) {
    let minIdx = 0;
    for (let j in distances) {
      if (distances[j] < distances[minIdx]) minIdx = j;
    }
    retVal.push(points[minIdx]);
    points.splice(minIdx, 1);
    distances.splice(minIdx, 1);
  }
  return retVal;
};

// HEAP IMPLEMENTATION : O(n + klogn)- Creating minHeap is O(n) and deleting is O(klogn)
var kClosestTwo = function (points, k) {
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

// Practice Retrys
var kClosestFour = function (points, k) {
  // Return the k closest points to (0, 0) from the arry of points.
  // Min Heapify +

  // Takes in index and moves it down to the correct location
  function minHeapify(i) {
    let leftIdx = getLeft(i);
    let rightIdx = getRight(i);

    // If Has left that is less than i...
    if (
      points[leftIdx] != undefined &&
      calc(points[leftIdx]) < calc(points[i])
    ) {
      // ...and rightIdx doesn't exist or is smaller than...
      if (
        points[rightIdx] == undefined ||
        calc(points[leftIdx]) >= calc(points[rightIdx])
      ) {
        // ...then swap.
        swap(leftIdx, i);
        minHeapify(leftIdx);
      }
    } else if (
      points[rightIdx] != undefined &&
      points[rightIdx] < points[leftIdx]
    ) {
      swap(rightIdx, i);
      minHeapify(rightIdx);
    }
  }

  // Return Dist from (0, 0)
  function calc(coord) {
    console.log(coord);
    let x = coord[0];
    let y = coord[1];
    return Math.pow(x, 2) + Math.pow(y, 2);
  }

  // Call minHeapify from last leaf up
  function Heapify() {
    let lastLeaf = Math.floor((points.length - 2) / 2);
    for (let i = lastLeaf; i >= 0; i--) {
      minHeapify(i);
    }
  }

  // Takes in index > Returns left child
  function getLeft(i) {
    return i * 2 + 1;
  }

  // Takes in index > Returns right child
  function getRight(i) {
    return i * 2 + 2;
  }
  function swap(i, j) {
    let temp = points[i];
    points[i] = points[j];
    points[j] = temp;
  }

  // Remove top element of points
  function remove() {
    swap(0, points.length - 1);
    let top = points.pop();
    minHeapify(0);
    return top;
  }

  Heapify();
  console.log(coord);
  let retArr = [];
  for (let i = 0; i < k; i++) {
    retArr.push(remove());
  }
};

let points = [
  [1, 3],
  [-2, 2],
  [2, -2],
];
// [[-2,2], [1, 3]]
let k = 2;
console.log(kClosestFour(points, k));
