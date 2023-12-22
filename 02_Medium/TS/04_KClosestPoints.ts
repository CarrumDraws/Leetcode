function kClosest(points: number[][], k: number): number[][] {
  // Use a minHeap
  let myHeap: Heap = new Heap();
  let ret: number[][] = [];
  for (let point of points) {
    myHeap.add(point);
  }
  for (let i = 0; i < k; i++) {
    let val = myHeap.remove();
    if (val != null) ret.push(val);
  }
  return ret;
}

// Minheap: Shortest distances at the top
class Heap {
  data: number[][];
  constructor() {
    this.data = []; // Stores arrays of [x, y] pairs
  }

  add(val: number[]): void {
    this.data.push(val); // Add to tail...
    this.heapifyUp(this.data.length - 1); // Heapify Up on Tail
  }
  remove(): number[] | undefined {
    if (this.data.length == 0) return;
    this.swap(0, this.data.length - 1); // Swap Head + Tail...
    let ret = this.data.pop(); // Remove + Return Tail...
    this.heapifyDown(0); // Heapify Down on Head
    return ret;
  }
  heapifyUp(i: number): void {
    if (i > 0 && this.compare(this.data[i], this.data[this.parent(i)]) == -1) {
      this.swap(i, this.parent(i));
      this.heapifyUp(this.parent(i));
    }
  }
  heapifyDown(i: number): void {
    let minIdx = i;
    if (
      this.data[this.leftChild(i)] != null &&
      this.compare(this.data[minIdx], this.data[this.leftChild(i)]) == 1
    )
      minIdx = this.leftChild(i);
    if (
      this.data[this.rightChild(i)] != null &&
      this.compare(this.data[minIdx], this.data[this.rightChild(i)]) == 1
    )
      minIdx = this.rightChild(i);
    if (i != minIdx) {
      this.swap(minIdx, i);
      this.heapifyDown(minIdx);
    }
  }
  compare(x: number[], y: number[]): number {
    // Returns -1 if x < y, 0 if x = y, 1 if x > y
    let xDist = Math.pow(x[0], 2) + Math.pow(x[1], 2);
    let yDist = Math.pow(y[0], 2) + Math.pow(y[1], 2);
    if (xDist < yDist) return -1;
    else if (xDist == yDist) return 0;
    else return 1;
  }
  leftChild(i: number): number {
    return i * 2 + 1;
  }
  rightChild(i: number): number {
    return i * 2 + 2;
  }
  parent(i: number): number {
    return Math.ceil(i / 2) - 1;
  }
  swap(i: number, j: number): void {
    let temp: number[] = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
}
