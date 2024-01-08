// ISSUE: Only Works on 20/21 Testcases :(

class MedianFinder {
  min: heap;
  max: heap;
  constructor() {
    this.min = new heap("min");
    this.max = new heap("max");
  }

  addNum(num: number): void {
    // Add to correct heap
    if (this.min.peek() == null || num >= this.min.peek()) this.min.add(num);
    else this.max.add(num);

    // Rebalance
    while (this.min.size() > this.max.size() + 1) {
      let temp = this.min.delete();
      this.max.add(temp);
    }
    while (this.max.size() > this.min.size() + 1) {
      let temp = this.max.delete();
      this.min.add(temp);
    }
  }

  findMedian(): number {
    if (this.min.size() == this.max.size())
      return (this.min.peek() + this.max.peek()) / 2;
    else if (this.min.size() > this.max.size()) return this.min.peek();
    else return this.max.peek();
  }
}

class heap {
  arr: number[];
  type: string;
  constructor(type: string) {
    this.arr = [];
    this.type = type;
  }
  add(val: number): void {
    this.arr.push(val);
    this.heapifyUp(this.arr.length - 1);
  }
  delete(): number {
    this.swap(0, this.arr.length - 1);
    let ret = this.arr.pop();
    this.heapifyDown(0);
    return ret!;
  }
  peek(): number {
    return this.arr[0];
  }
  heapifyDown(i: number): void {
    let newIdx = i;
    if (
      this.arr[this.left(i)] &&
      this.func(this.arr[this.left(i)], this.arr[newIdx])
    )
      newIdx = this.left(i);
    if (
      this.arr[this.right(i)] &&
      this.func(this.arr[this.right(i)], this.arr[newIdx])
    )
      newIdx = this.right(i);
    if (newIdx == i) return;
    this.swap(i, newIdx);
    this.heapifyDown(newIdx);
  }
  heapifyUp(i: number): void {
    if (i == 0) return;
    let newIdx = i;
    if (this.oppFunc(this.arr[this.parent(i)], this.arr[newIdx]))
      newIdx = this.parent(i);
    if (newIdx == i) return;
    this.swap(i, newIdx);
    this.heapifyUp(newIdx);
  }
  left(i: number): number {
    return i * 2 + 1;
  }
  right(i: number): number {
    return i * 2 + 2;
  }
  parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }
  swap(i: number, j: number): void {
    let temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }
  size(): number {
    return this.arr.length;
  }
  func(a: number, b: number): boolean {
    return this.type === "min" ? this.lessThan(a, b) : this.greaterThan(a, b);
  }
  // OPPOSITE of this.func
  oppFunc(a: number, b: number): boolean {
    return this.type === "min" ? this.greaterThan(a, b) : this.lessThan(a, b);
  }
  lessThan(a: number, b: number): boolean {
    return a < b;
  }
  greaterThan(a: number, b: number): boolean {
    return a > b;
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
