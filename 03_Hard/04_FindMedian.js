// NOTE: When making classes, you can use a comparator function to shorten code!
class heap {
  // type = "min" / "max"
  constructor(type) {
    this.data = [];
    this.comparator = type === "min" ? this.greaterThan : this.lessThan;
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
    if (idx != 0 && this.comparator(this.data[parentIdx], this.data[idx])) {
      this.swap(idx, parentIdx);
      this.heapifyUp(parentIdx);
    }
  }
  heapifyDown(idx) {
    let minIdx = idx;
    let leftIdx = this.leftChild(idx);
    let rightIdx = this.rightChild(idx);
    if (this.comparator(this.data[minIdx], this.data[leftIdx]))
      minIdx = leftIdx;
    if (this.comparator(this.data[minIdx], this.data[rightIdx]))
      minIdx = rightIdx;
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
  greaterThan(a, b) {
    return a > b;
  }
  lessThan(a, b) {
    return a < b;
  }
}

var MedianFinder = function () {
  this.lesser = new maxHeap(); // Stores lesser half of values
  this.greater = new minHeap(); // Stores Larger Half of values
  // Idea: Use a minheap and maxheap, split the values equally between the two...
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  // Add to correct tree
  if (num <= this.lesser.peek()) this.lesser.add(num);
  else this.greater.add(num);

  // Rebalance
  let smallSize = this.lesser.size();
  let bigSize = this.greater.size();
  if (Math.abs(smallSize - bigSize) > 1) {
    if (smallSize > bigSize) this.greater.add(this.lesser.remove());
    else if (smallSize < bigSize) this.lesser.add(this.greater.remove());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let smallSize = this.lesser.size();
  let bigSize = this.greater.size();
  if (smallSize > bigSize) return this.lesser.peek();
  else if (smallSize < bigSize) return this.greater.peek();
  else return (this.lesser.peek() + this.greater.peek()) / 2;
};
