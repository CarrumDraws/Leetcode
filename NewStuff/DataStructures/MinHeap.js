import { printArray } from "../../HelperFuncs/PrintArray.js";
class minHeap {
  constructor(type) {
    this.data = [];
  }
  add(val) {
    this.data.push(val);
    this.heapifyUp(this.data.length - 1);
  }
  remove() {
    if (this.data.length == 0) return null;
    this.swap(0, this.data.length - 1);
    let ret = this.data.pop();
    this.heapifyDown(0);
    return ret;
  }
  heapifyUp(idx) {
    let parentIdx = this.parent(idx);
    if (idx != 0 && this.data[parentIdx] > this.data[idx]) {
      this.swap(idx, parentIdx);
      this.heapifyUp(parentIdx);
    }
  }
  heapifyDown(idx) {
    let minIdx = idx;
    let leftIdx = this.leftChild(idx);
    let rightIdx = this.rightChild(idx);
    if (this.data[minIdx] > this.data[leftIdx]) minIdx = leftIdx;
    if (this.data[minIdx] > this.data[rightIdx]) minIdx = rightIdx;
    if (minIdx != idx) {
      this.swap(idx, minIdx);
      this.heapifyDown(minIdx);
    }
  }

  size() {
    return this.data.length;
  }
  peek() {
    return this.data[0];
  }
  parent(idx) {
    return Math.floor((idx - 1) / 2);
  }
  leftChild(idx) {
    return idx * 2 + 1;
  }
  rightChild(idx) {
    return idx * 2 + 2;
  }
  swap(idxA, idxB) {
    let temp = this.data[idxA];
    this.data[idxA] = this.data[idxB];
    this.data[idxB] = temp;
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
