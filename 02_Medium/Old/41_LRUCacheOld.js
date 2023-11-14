export class Node {
  constructor(key, data, prev = null, next = null) {
    this.key = key;
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

export class DoubleLinkedList {
  constructor(least = null, most = null) {
    this.most = most; // most (aka "Head")
    this.least = least; // least (aka "Tail")
  }

  // Inserts at Head
  insert(node) {
    if (!this.most || !this.least) {
      this.most = node;
      this.least = node;
    } else {
      node.next = this.most;
      this.most.prev = node;
      this.most = node;
    }
  }

  // Deletes Tail + returns Node
  delete() {
    let ret = this.least;
    if (this.most == this.least) {
      // Only 1 element in list
      this.most = null;
      this.least = null;
    } else {
      // Multiple elements in list
      this.least = this.least.prev;
      this.least.next = null;
    }
    return ret;
  }

  // Move Node to Head
  use(node) {
    if (node == this.least && node != this.most) {
      // Case: Tailmove w/ 1+ length node chain
      this.least = this.least.prev;
      this.least.next = null;
      node.prev = null;
      node.next = this.most;
      this.most.prev = node;
      this.most = node;
    } else if (node != this.most) {
      // Case: Bodymove
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.prev = null;
      node.next = this.most;
      this.most.prev = node;
      this.most = node;
    }
  }
}

/**
 * @param {number} capacity
 */
// Implemented with a doublelinkedList list, and a hash of key-node pairs.
// While get and put TECHNICALLY run in O(1) time, the technical overhead involved makes it run SLOWER
var LRUCache = function (capacity) {
  this.list = new DoubleLinkedList(); // List of [key, data, prev, next]
  this.hash = {}; // Stores key: [key, data, prev, next] pairs
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.hash[key]) {
    this.list.use(this.hash[key]); // Update Position
    return this.hash[key].data; // Return Data
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.hash[key]) {
    this.hash[key].data = value; // Update Value
    this.list.use(this.hash[key]); // Update Position
  } else {
    if (Object.keys(this.hash).length >= this.capacity) {
      let keyVal = this.list.delete(); // Remove oldest node from list
      delete this.hash[keyVal.key]; // Remove oldest node from hash
      let newNode = new Node(key, value); // Create New Node
      this.list.insert(newNode); // Insert node into list
      this.hash[key] = newNode; // Insert node into hash
    } else {
      let newNode = new Node(key, value); // Create New Node
      this.list.insert(newNode); // Insert node into list
      this.hash[key] = newNode; // Insert node into hash
    }
  }
};

let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log(lRUCache.get(1)); // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2)); // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1)); // return -1 (not found)
console.log(lRUCache.get(3)); // return 3
console.log(lRUCache.get(4)); // return 4

// --------
// let lRUCache = new LRUCache(1);
// lRUCache.put(2, 1); // cache is {2=1}
// console.log(lRUCache.get(2)); // return 1
// lRUCache.put(3, 2); // cache is {3=2}
// console.log(lRUCache.get(2)); // return -1
// console.log(lRUCache.get(3)); // return 2

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
