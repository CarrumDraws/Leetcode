/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // Check if LinkedList has a cycle.
  // Do this with two pointers- a fast and slow one.
  // If fast reaches the end its not a cycle.
  // If fast eventually equals slow, it is a cycle.

  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast == slow) return true;
  }
  return false;
};
