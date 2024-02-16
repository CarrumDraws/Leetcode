/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// Similar to RemoveNthNode. If k > list, reloop using remainder.
var rotateRight = function (head, k) {
  if (!head) return null;

  let left = head;
  let right = head;
  for (let i = 0; i < k; i++) {
    right = right.next;
    if (!right) {
      // If k > list length, redo w/ remainder
      right = head;
      k = k % (i + 1);
      i = -1;
    }
  }
  if (right == head) return head;

  while (right.next) {
    left = left.next;
    right = right.next;
  }
  let newHead = left.next;
  left.next = null;
  right.next = head;
  return newHead;
};
