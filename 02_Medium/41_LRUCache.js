class Node {
  constructor(key, val, prev = null, next = null) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

/**
 * @param {number} capacity
 */
// Idea: Use a Doubly Linked List, and keep track of the tail.
var LRUCache = function (capacity) {
  this.head = new Node(-1, -1); // Dummy that points to Oldest
  this.tail = this.head; // Points to newest
  this.hash = {};
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.hash[key]) {
    let val = this.hash[key].val;
    this.deleteNode(this.hash[key]);
    this.addNode(key, val);
    return val;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // If key already exists, delete the key node
  if (this.hash[key]) this.deleteNode(this.hash[key]);
  // else if at capacity, delete head node
  else if (this.capacity <= 0) this.deleteNode();

  // add new node at end
  this.addNode(key, value);
};

LRUCache.prototype.deleteNode = function (node = this.head.next) {
  delete this.hash[node.key];
  node.prev.next = node.next;
  if (node.next) node.next.prev = node.prev;
  if (node == this.tail) this.tail = node.prev;
  this.capacity++;
};

LRUCache.prototype.addNode = function (key, value) {
  let newNode = new Node(key, value, this.tail, null);
  this.hash[key] = newNode;
  this.tail.next = newNode;
  this.tail = newNode;
  this.capacity--;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
