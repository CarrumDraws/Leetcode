/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  // Answer is max between (length of longest task - 1) * (gaps + 1) + (Amount of tasks with length of longest task)...
  // or the length of 'tasks'.

  let hash = {};
  for (let task of tasks) {
    if (!hash[task]) hash[task] = 1;
    else hash[task]++;
  }

  let maxFreq = 0;
  let maxFreqNum = 0; // Amount of tasks of 'maxFreq' amount
  for (let task in hash) {
    if (hash[task] > maxFreq) {
      maxFreq = hash[task];
      maxFreqNum = 1;
    } else if (hash[task] == maxFreq) {
      maxFreqNum++;
    }
  }

  return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + maxFreqNum);
};

// Methodology: Use a maxheap to store [frequency].
// Once a pair is chosen, it is sent to a Queue to go on cooldown.
// Use a queue to store [frequency, time] pairs.
// Note: the actual task value doesn't matter at all.
// STILL not that great...
var leastIntervalTwo = function (tasks, n) {
  let hash = {};
  let maxHeap = []; // Stores AVAILABLE frequencies.
  let queue = []; // Stores [freq, time]
  let time = 0;

  // Populate Hash
  for (let task of tasks) {
    if (!hash[task]) hash[task] = 1;
    else hash[task]++;
  }

  // Store frequency in maxHeap
  for (let key in hash) {
    add(maxHeap, hash[key]);
  }

  while (maxHeap.length > 0 || queue.length > 0) {
    // If cooldown over, move first value from queue to maxHeap
    if (queue[0] && queue[0][1] <= time) {
      let val = queue.shift();
      add(maxHeap, val[0]);
    }
    // Remove first value from maxHeap and push to queue if frequency > 0
    if (maxHeap[0]) {
      let freq = remove(maxHeap);
      if (freq > 1) queue.push([freq - 1, time + n + 1]);
    }
    time++; // Increment Time
  }

  return time;

  // Add value to maxheap
  function add(heap, val) {
    heap.push(val); // Push to end
    heapifyUp(heap, heap.length - 1); // maxHeapifies up
  }

  // Remove value from maxHeap
  function remove(heap) {
    swap(0, heap.length - 1);
    let val = heap.shift();
    heapifyDown(heap, 0);
    return val;
  }

  // Moves a value from bottom to up
  function heapifyUp(heap, idx) {
    let minIdx = idx;
    let parentIdx = parent(idx);
    if (heap[parentIdx] && heap[parentIdx] < heap[idx]) minIdx = parentIdx;
    if (minIdx != idx) {
      swap(heap, parentIdx, idx);
      heapifyUp(heap, parentIdx);
    }
  }

  // Moves a value from top to bottom
  function heapifyDown(heap, idx) {
    let maxIdx = idx; // Stores index of max value between the three
    let left = leftChild(idx);
    let right = rightChild(idx);
    if (heap[left] && heap[left] > heap[maxIdx]) maxIdx = left;
    if (heap[right] && heap[right] > heap[maxIdx]) maxIdx = right;

    if (maxIdx != idx) {
      swap(maxIdx, idx);
      heapifyDown(heap, maxIdx);
    }
  }
  function parent(idx) {
    return idx == 0 ? 0 : Math.floor((idx - 1) / 2);
  }
  function leftChild(idx) {
    return idx * 2 + 1;
  }
  function rightChild(idx) {
    return idx * 2 + 2;
  }
  function swap(arr, idxA, idxB) {
    let temp = arr[idxA];
    arr[idxA] = arr[idxB];
    arr[idxB] = temp;
  }
};

let tasks = ["A", "A", "A", "B", "C", "D", "E", "F", "G"];
let n = 2;
console.log(leastIntervalThree(tasks, n));
