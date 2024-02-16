/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// This is a recursive way- its not that efficient. You should be using an iterative way...
var deleteDuplicates = function (head) {
  return recur(head);

  function recur(node) {
    if (!node) return null;
    let start = node;
    let end = node;
    while (end && start.val == end.val) end = end.next;
    if (start.next == end) {
      start.next = recur(end);
      return start;
    }
    return recur(end);
  }
};

// Better: 2Pointer
// Idea: Create Dummy Node and use 2Pointer to determine valid nodes.
// Truncate at the end.
var deleteDuplicates = function (head) {
  let left = head;
  let right = head;
  let ptr = new ListNode(0);
  ptr.next = head;
  head = ptr;

  while (left) {
    while (right && right.val == left.val) right = right.next;
    if (left.next == right) {
      ptr.next = left;
      ptr = ptr.next;
    }
    left = right;
  }
  ptr.next = null; // Edge Case: Cut head if all nodes invalid

  return head.next;
};
