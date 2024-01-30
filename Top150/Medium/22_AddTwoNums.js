/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// Idea: Iterate thorugh LinkedLists with a carry variable
var addTwoNumbers = function (l1, l2) {
  let list = new ListNode(0);
  let head = list;
  let carry = 0;
  while (l1 || l2 || carry == 1) {
    let sum = carry;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    carry = sum > 9 ? 1 : 0;
    list.next = new ListNode(sum % 10);
    list = list.next;
  }
  return head.next;
};
