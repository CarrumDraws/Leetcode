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
// Mergesort, using 2P to find midpoint
var sortList = function (head) {
  return recur(head);

  function recur(head) {
    if (!head || !head.next) return head; // Base Case

    // Find Midpoint
    let premid,
      mid = head,
      tail = head;
    while (tail && tail.next) {
      premid = mid;
      mid = mid.next;
      tail = tail.next.next;
    }
    premid.next = null; // Cut ties

    // Split
    let list1 = head && head.next ? recur(head) : head;
    let list2 = mid && mid.next ? recur(mid) : mid;

    // Merge
    let dummy = new ListNode(null);
    let curr = dummy;
    while (list1 && list2) {
      if (list1.val < list2.val) {
        curr.next = list1;
        list1 = list1.next;
      } else {
        curr.next = list2;
        list2 = list2.next;
      }
      curr = curr.next;
      curr.next = null;
    }
    curr.next = list1 ? list1 : list2;

    return dummy.next;
  }
};
