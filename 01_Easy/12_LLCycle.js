/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // Check if LinkedList has a cycle.
  // Do this with two pointers- a fast and slow one.
  // If fast reaches the end its not a cycle.
  // If fast eventually equals slow, it is a cycle.

  let slowNode = head;
  let fastNode = head;
  while (fastNode != null && fastNode.next != null) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
    if (slowNode == fastNode) {
      return true;
    }
  }
  return false;
};
