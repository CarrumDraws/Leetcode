/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// Similar to Medium (8) Clone Graph.
// Use a Map() instead of a hash{}, as Maps can take in ANY value as a key, including references.
var copyRandomList = function (head) {
  let map = new Map(); // old : new
  let list = new Node(0);
  let listPtr = list;
  let headPtr = head;
  while (headPtr) {
    let newNode = new Node(headPtr.val);
    map.set(headPtr, newNode);
    listPtr.next = newNode;
    listPtr = listPtr.next;
    headPtr = headPtr.next;
  }
  listPtr = list.next;
  headPtr = head;
  while (headPtr) {
    listPtr.random = headPtr.random ? map.get(headPtr.random) : null;
    listPtr = listPtr.next;
    headPtr = headPtr.next;
  }
  return list.next;
};
