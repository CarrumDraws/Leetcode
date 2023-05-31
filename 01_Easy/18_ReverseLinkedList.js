import { LinkedList } from "../NewStuff/LinkedLists/LinkedList.js";
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
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  let next = null;

  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

// Same thing but recursive!
var reverseListTwo = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  // Create a new node to call the function recursively and we get the reverse linked list...
  var res = reverseList(head.next);
  // Set head node as head.next.next...
  head.next.next = head;
  //set head's next to be null...
  head.next = null;
  return res; // Return the reverse linked list...
};
