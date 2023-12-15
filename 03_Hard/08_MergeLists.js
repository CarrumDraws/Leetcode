/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// Idea: Sort using a minHeap!
var mergeKLists = function (lists) {
  // Head and Tail pointers of "Final" Linked List
  let head = null;
  let tail = null;
  let myHeap = new minHeap();

  // Add first node of every list into myHeap...
  for (let i = 0; i < lists.length; i++) {
    let list = lists[i];
    if (list) {
      myHeap.add(list.val, i);
      lists[i] = list.next; // ...and move the lists forwards.
    }
  }

  while (myHeap.size() != 0) {
    // Remove data from heap
    let vals = myHeap.delete();
    let data = vals[0];
    let index = vals[1];

    let newNode = new ListNode(data, null);

    // Add data onto tail
    if (!head) head = newNode;
    else tail.next = newNode;
    tail = newNode;

    // Add new data into heap...
    let list = lists[index];
    if (list) {
      myHeap.add(list.val, index);
      lists[index] = list.next; // ...and move the lists forwards.
    }
  }

  return head;
};

// minHeap variation that stores [data, index] pairs.
// Sorts by [data] value.
class minHeap {
  constructor() {
    this.data = []; // Stores [data, index] pairs
  }
  heapifyUp(i) {
    let parent = this.parent(i);
    if (i != 0 && this.data[i]?.[0] < this.data[parent]?.[0]) {
      this.swap(parent, i);
      this.heapifyUp(parent);
    }
  }
  heapifyDown(i) {
    let minIdx = i;
    let left = this.left(i);
    let right = this.right(i);
    if (this.data[left]?.[0] < this.data[minIdx]?.[0]) minIdx = left;
    if (this.data[right]?.[0] < this.data[minIdx]?.[0]) minIdx = right;
    if (minIdx != i) {
      this.swap(minIdx, i);
      this.heapifyDown(minIdx);
    }
  }
  add(data, index) {
    this.data.push([data, index]);
    this.heapifyUp(this.data.length - 1);
  }
  delete() {
    this.swap(0, this.data.length - 1);
    let ret = this.data.pop();
    this.heapifyDown(0);
    return ret;
  }
  left(i) {
    return i * 2 + 1;
  }
  right(i) {
    return i * 2 + 2;
  }
  parent(i) {
    return Math.ceil(i / 2) - 1;
  }
  swap(i, j) {
    let temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
  size() {
    return this.data.length;
  }
}

// HOW IS THIS BETTER???
// Simple: Just linearly merge two lists one by one until you only have one list left...
// ...doesn't even use a minheap...?
// NOTE : You can also just flat-out use Mergesort. lmao
var mergeKListsTwo = function (lists) {
  if (lists.length === 0) {
    return null;
  }
  while (lists.length > 1) {
    let a = lists.shift();
    let b = lists.shift();
    const h = mergeLists(a, b);
    lists.push(h);
  }
  return lists[0];
};

function mergeLists(a, b) {
  const dummy = new ListNode(0);
  let temp = dummy;
  while (a !== null && b !== null) {
    if (a.val < b.val) {
      temp.next = a;
      a = a.next;
    } else {
      temp.next = b;
      b = b.next;
    }
    temp = temp.next;
  }
  if (a !== null) temp.next = a;
  if (b !== null) temp.next = b;

  return dummy.next;
}
