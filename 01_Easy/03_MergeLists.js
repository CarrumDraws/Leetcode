import {
  Node,
  LinkedList,
  printList,
} from "../NewStuff/LinkedLists/LinkedList.js";

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // Shuffle list2 into list 1
  if (!list1) return list2;
  let head = list1;
  let prev = null;
  while (list1 && list2) {
    if (list1.val >= list2.val) {
      let head2 = list2.next;
      if (!prev) {
        // Head Insert
        list2.next = list1;
        head = list2;
        list1 = list2;
      } else {
        // Body (Behind) Insert
        prev.next = list2;
        list2.next = list1;
        prev = list2;
      }
      list2 = head2;
    } else {
      prev = list1;
      list1 = list1.next;
    }
  }
  // Tail Insert
  if (!list1) prev.next = list2;
  return head;
};

// Recursively! Way less code.
var mergeTwoListsTwo = function (list1, list2) {
  // Base Cases
  if (!list1) {
    return list2;
  } else if (!list2) {
    return list1;
  } else {
    // Recursive Steps
    if (list1.val < list2.val) {
      list1.next = mergeTwoListsTwo(list1.next, list2);
      // By returning both lists, we dont have to keep track of
      // which list "goes into" the other.
      return list1;
    } else {
      list2.next = mergeTwoListsTwo(list1, list2.next);
      return list2;
    }
  }
};

// PRACTICE
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Try this iteratively!!
// Start with wording it out.
var mergeTwoListsThree = function (list1, list2) {};

let insertAt = function (list, newNode, location) {
  if (location == 0) {
    // Head Insert
    newNode.next = list;
    return newNode;
  } else {
    // Body/Tail Insert
    let head = list;
    let prevNode = null;
    for (let i = 0; i < location; i++) {
      prevNode = list;
      list = list.next;
    }
    prevNode.next = newNode;
    newNode.next = list;
    return head;
  }
};

let list1 = new LinkedList();
list1.add(1);
list1.add(3);
list1.add(4);

let list2 = new LinkedList();
list2.add(1);
list2.add(2);
list2.add(4);

let list = mergeTwoListsThree(list1.head, list2.head);
printList(list);
// let newNode = new Node(10);
// let list = insertAt(list1.head, newNode, 3);
// printList(list);
