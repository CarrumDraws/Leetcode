import { LinkedList } from "../NewStuff/LinkedLists/LinkedList.js";
// Notes: You can use Two Pointers to solve this- you don't have to retraverse the entire thing!
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  // Idea: Traverse the length of the node, then re-traverse...
  let length = 0;
  let currHead = head;
  while (currHead != null) {
    length++;
    currHead = currHead.next;
  }
  currHead = head;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    currHead = currHead.next;
  }
  return currHead;
};

var middleNodeTwo = function (head) {
  // Two Pointers: Have one pointer move one at a time...
  // ...and the second one move twice as slowly.
  let pointOne = head;
  let pointTwo = head;
  let toggle = true;
  while (pointOne.next != null) {
    pointOne = pointOne.next;
    if (toggle) pointTwo = pointTwo.next;
    toggle = !toggle;
  }
  return pointTwo;
};

var middleNodeThree = function (head) {
  let once = head;
  let twice = head;
  // If 'twice' and the node after are defined...
  while (twice && twice.next) {
    // ... move 'twice' two nodes down and move 'once' one node down.
    once = once.next;
    twice = twice.next.next;
  }
  return once;
};

let myList = new LinkedList();
myList.add(1);
myList.add(2);
myList.add(3);
myList.add(4);
console.log(middleNode(myList.head).val);
// 1 -> 2 -> 3 -> 4-> nuLL
