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
// Idea: Recursively reverse nodes in groups of k.
// If your reversal prematurely ends, re-reverse the last section.
var reverseKGroup = function (head, k) {
  return recur(head);

  // Reverses 'k' nodes, recurs if there are more nodes, then returns head
  function recur(node) {
    let curr = node;
    let prev = null;

    for (let i = 0; i < k; i++) {
      if (!curr) return reverse(prev); // If prematurely ends, reverse
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    if (curr) node.next = recur(curr); // If theres more nodes, recur
    return prev; // Return new head
  }

  // Reverses until it reaches the end, returning head
  function reverse(node) {
    let curr = node;
    let prev = null;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
};

// Smart Way: Use a stack!
var reverseKGroupTwo = function (head, k) {
  let stack = [];
  let newNode = new ListNode(-1);
  let temp = newNode;

  while (head) {
    for (let i = 0; i < k && head; i++) {
      stack.push(head);
      head = head.next;
    }

    if (stack.length === k) {
      while (stack.length > 0) {
        temp.next = stack.pop();
        temp = temp.next;
      }
      temp.next = head;
    }
  }
  return newNode.next;
};
