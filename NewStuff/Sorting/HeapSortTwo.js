// Heapsort function that sorts an array in-place
function heapsort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lastIdx = arr.length - 1 - i;
    heapify(lastIdx); // Heapify Array
    swap(0, lastIdx); // Swap first with last
  }

  function heapify(lastIdx) {
    for (let currIdx = parent(lastIdx); currIdx >= 0; currIdx--) {
      maxHeapify(currIdx, lastIdx);
    }
  }
  // Brings largest value to top
  function maxHeapify(currIdx, lastIdx) {
    let maxIdx = currIdx;
    if (left(currIdx) <= lastIdx && arr[left(currIdx)] > arr[maxIdx])
      maxIdx = left(currIdx);
    if (right(currIdx) <= lastIdx && arr[right(currIdx)] > arr[maxIdx])
      maxIdx = right(currIdx);
    if (maxIdx != currIdx) {
      swap(currIdx, maxIdx);
      maxHeapify(maxIdx);
    }
  }

  // HELPER FUNCS -------------
  function parent(i) {
    return Math.floor((i - 1) / 2);
  }
  function left(i) {
    return i * 2 + 1;
  }
  function right(i) {
    return i * 2 + 2;
  }
  function swap(i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

let arr = [3, 6, 2, 0, 4, 1, 5];
heapsort(arr);
console.log(arr);
