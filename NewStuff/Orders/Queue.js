export class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }
  // Add to Queue
  enqueue(item) {
    this.items[this.backIndex] = item;
    this.backIndex++;
    return item + " inserted";
  }
  // Remove from Queue + Return item
  dequeue() {
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }
  // Return next element
  peek() {
    return this.items[this.frontIndex];
  }
  isEmpty() {
    return Object.keys(this.items).length == 0;
  }
  get printQueue() {
    return this.items;
  }
}
