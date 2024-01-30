/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// Idea: Draw everything out. left = 1 i a special case- treat it as such.
var reverseBetween = function (head, left, right) {
  let lPtr = head;
  let rPtr;

  // Find lPtr
  for (let i = 1; i < left - 1; i++) {
    lPtr = lPtr.next;
  }

  let start = left == 1 ? lPtr : lPtr.next;
  let currNode = start;
  let prevNode = null;

  // Reverse Section
  for (let i = left; i <= right; i++) {
    let nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
    if (i == right) rPtr = nextNode;
  }

  // Connect Ends
  start.next = rPtr;
  if (left == 1) return prevNode;
  else {
    lPtr.next = prevNode;
    return head;
  }
};
