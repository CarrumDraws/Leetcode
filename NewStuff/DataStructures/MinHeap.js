import { printArray } from "../../HelperFuncs/PrintArray.js";
class minHeap {
  constructor(arr = []) {
    this.heap = arr;
  }
  insert(val) {
    this.heap.push(val);
    let currIdx = this.heap.length - 1;
    let parentIdx = this.parentIdx(currIdx);
    while (currIdx != 0 && this.heap[parentIdx] > this.heap[currIdx]) {
      this.swap(currIdx, parentIdx);
      currIdx = parentIdx;
      parentIdx = this.parentIdx(currIdx);
    }
  }
  // Removes TOP element
  remove() {
    this.swap(0, this.heap.length - 1);
    let ret = this.heap.pop();
    this.minHeapify(0);
    return ret;
  }
  minHeapify(currIdx) {
    let left = this.heap[currIdx * 2 + 1];
    let right = this.heap[currIdx * 2 + 2];
    // If Leaf, return.
    if (left == null && right == null) return;
    // If left child exists, is smaller than curr AND rightchild, go left.
    else if (
      left != null &&
      this.heap[currIdx] > left &&
      (right == null || left < right)
    ) {
      this.swap(currIdx, currIdx * 2 + 1);
      this.minHeapify(currIdx * 2 + 1);
    }
    // If right child exists, is smaller than curr AND leftchild, go right.
    else if (
      right != null &&
      this.heap[currIdx] > right &&
      (left == null || left > right)
    ) {
      this.swap(currIdx, currIdx * 2 + 2);
      this.minHeapify(currIdx * 2 + 2);
    }
  }

  // minHeapify's an entire unsorted heap
  heapify() {
    for (let i = this.parentIdx(this.heap.length - 1); i >= 0; i--) {
      this.minHeapify(i);
    }
  }
  // HELPER FUNCTIONS -----------
  parentIdx(currIdx) {
    return Math.floor((currIdx - 1) / 2);
  }
  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
  print() {
    printArray(this.heap);
  }
}

let heap = new minHeap();
heap.insert(30);
heap.insert(50);
heap.insert(40);
heap.insert(15);
heap.insert(10);
heap.insert(0);
heap.print();

let heapTwo = new minHeap([30, 50, 40, 15, 10, 0]);
heapTwo.heapify();
heapTwo.print();

export default minHeap;
