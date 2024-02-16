/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// Idea: Use Two Pointers spaced n nodes apart
var removeNthFromEnd = function (head, n) {
  let right = head;
  let left = head;
  let lleft = head;

  for (let i = 0; i < n; i++) {
    right = right.next;
  }

  while (right) {
    right = right.next;
    lleft = left;
    left = left.next;
  }

  if (left == lleft) return left.next; // Head removal
  lleft.next = left.next;
  return head;
};
