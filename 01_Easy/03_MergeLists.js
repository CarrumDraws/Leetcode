import { LinkedList, printList } from "../NewStuff/LinkedLists/LinkedList.js";

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
  // Merge Two Sorted Linked Lists
  let head = list1;
  let currOne = list1;
  let prevOne = null;
  let currTwo = list2;

  if (currOne == null) {
    return currTwo;
  }

  while (currTwo != null) {
    if (currTwo.val <= currOne.val) {
      // Insert list2 into list1
      if (prevOne == null) {
        // Head Insert
        let tempTwo = currTwo.next;
        currTwo.next = currOne;
        currOne = currTwo;
        head = currTwo;
        currTwo = tempTwo;
      } else {
        // Body/Tail Insert
        let tempTwo = currTwo.next;
        prevOne.next = currTwo;
        currTwo.next = currOne;
        prevOne = currTwo;
        currTwo = tempTwo;
      }
    } else {
      // Else move currOne and prevPointerOne up
      prevOne = currOne;
      currOne = currOne.next;
    }
  }
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

let list1 = new LinkedList();
list1.add(1);
list1.add(3);
list1.add(4);

let list2 = new LinkedList();
list2.add(1);
list2.add(2);
list2.add(4);

let list = mergeTwoListsTwo(list1.head, list2.head);
printList(list);
