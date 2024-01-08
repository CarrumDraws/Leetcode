function leastInterval(tasks: string[], n: number): number {
  // Idea: Use a maxHeap that stores active tasks and a queue that stores tasks on cooldown.
  // Keep a "time" variable thats tracks if a task is off cooldown.
  // Pass tasks between maxHeap and queue until both are empty.

  let time: number = 0;
  let hash = {};
  let myHeap = new maxHeap();
  let myQueue = new queue();

  for (let i = 0; i < tasks.length; i++) {
    let char = tasks[i];
    if (!hash[char]) hash[char] = 0;
    hash[char]++;
  }

  for (let key in hash) {
    myHeap.add(key, hash[key]);
  }

  while (myHeap.size() + myQueue.size() > 0) {
    // If maxHeap has tasks, remove it, decrement freq, then pass task to queue
    if (myHeap.size() > 0) {
      let x = myHeap.delete();
      if (x[1] > 1) {
        myQueue.add(x[0], x[1] - 1, time + n);
      }
    }
    // If there is an active task in queue, pass it to maxHeap
    if (myQueue.size() > 0) {
      let y = myQueue.peek();
      if (time >= y[2]) {
        myQueue.delete();
        myHeap.add(y[0], y[1]);
      }
    }
    time++; // Increment time
  }
  return time;
}

class maxHeap {
  arr: [string, number][]; // Stores [char, freq]
  constructor() {
    this.arr = [];
  }

  // Adds to tail, heapifies down
  add(char: string, freq: number): void {
    this.arr.unshift([char, freq]);
    this.heapifyDown(0);
  }
  // Swaps head and tail, deletes tail, heapifies down
  delete(): [string, number] {
    this.swap(0, this.arr.length - 1);
    let ret = this.arr.pop();
    this.heapifyDown(0);
    return ret!;
  }
  heapifyDown(i: number): void {
    let maxIdx = i;
    if (
      this.arr[this.left(i)] &&
      this.arr[maxIdx][1] < this.arr[this.left(i)][1]
    )
      maxIdx = this.left(i);
    if (
      this.arr[this.right(i)] &&
      this.arr[maxIdx][1] < this.arr[this.right(i)][1]
    )
      maxIdx = this.right(i);
    if (maxIdx == i) return;
    this.swap(i, maxIdx);
    this.heapifyDown(maxIdx);
  }
  left(i: number): number {
    return i * 2 + 1;
  }
  right(i: number): number {
    return i * 2 + 2;
  }
  swap(i: number, j: number): void {
    let temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }
  size(): number {
    return this.arr.length;
  }
}

class queue {
  arr: [string, number, number][]; // Stores [char, freq, time]
  constructor() {
    this.arr = [];
  }

  add(char: string, freq: number, time: number): void {
    this.arr.push([char, freq, time]);
  }
  delete(): [string, number, number] {
    return this.arr.shift()!;
  }
  peek(): [string, number, number] {
    return this.arr[0];
  }
  size(): number {
    return this.arr.length;
  }
}
