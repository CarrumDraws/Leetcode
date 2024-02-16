/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// Keep two lists and append to them as you traverse through. Remember to sever ties before appending.
var partition = function (head, x) {
  let less = new ListNode(0);
  let more = new ListNode(0);
  let lessPtr = less;
  let morePtr = more;

  while (head) {
    let next = head.next;
    head.next = null; // Sever head's ties
    if (head.val < x) {
      lessPtr.next = head;
      lessPtr = lessPtr.next;
    } else {
      morePtr.next = head;
      morePtr = morePtr.next;
    }
    head = next;
  }
  lessPtr.next = more.next;
  return less.next;
};
