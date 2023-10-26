import { printArray } from "../../HelperFuncs/PrintArray.js";

// HeapSort: Use Sliding Window to dictate the area of operation on the array.
// This sorts the array in-place.
function sort(arr) {
  heapify(arr); // Fully Heapify...

  // ...then Swap First/Last + maxHeapify + Slide Window from bottom-up.
  // This gives us a sorted array!
  for (var lastIdx = arr.length - 1; lastIdx > 0; lastIdx--) {
    var temp = arr[0];
    arr[0] = arr[lastIdx];
    arr[lastIdx] = temp;

    maxHeapify(arr, lastIdx, 0);
  }
}

// Heapify from Last Non-Leaf to First
function heapify(arr) {
  for (var currIdx = Math.floor(arr.length / 2) - 1; currIdx >= 0; currIdx--)
    maxHeapify(arr, arr.length, currIdx);
}

function maxHeapify(arr, lastIdx, currIdx) {
  var largest = currIdx; // Index of largest value between curr, left and right
  var left = 2 * currIdx + 1;
  var right = 2 * currIdx + 2;

  // Get the Largest between Left and Right
  if (left < lastIdx && arr[left] > arr[largest]) largest = left;
  if (right < lastIdx && arr[right] > arr[largest]) largest = right;

  // If largest is not root, swap + maxHeapify again
  if (largest != currIdx) {
    var swap = arr[currIdx];
    arr[currIdx] = arr[largest];
    arr[largest] = swap;

    maxHeapify(arr, lastIdx, largest);
  }
}

var arr = [12, 11, 13, 5, 6, 7, 1];
sort(arr);
printArray(arr);
