export class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

export class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  // Note: Non-primitive data types are pass-by-val.

  // Takes in data, adds to end of Linked List
  add(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currNode = this.head;
      while (currNode.next != null) {
        currNode = currNode.next;
      }
      currNode.next = newNode;
    }
  }

  // Inserts at location. Starts at 0.
  insertAt(val, location) {
    let newNode = new Node(val);
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
  }

  // Remove from location. Starts at 0.
  // removeAt(location) {
  //   let currNode = this.head;
  //   let prevNode = null;
  //   for (let i = 0; i < location; i++) {
  //     if (currNode == null) {
  //       return -1;
  //     }
  //     prevNode = currNode;
  //     currNode = currNode.next;
  //   }
  //   if (currNode == null) {
  //     return -1;
  //   }
  //   if (prevNode == null) {
  //     // remove head
  //     this.head = this.head.next;
  //   } else {
  //     // remove from body and tail
  //     prevNode.next = currNode.next;
  //   }
  //   return currNode;
  // }

  // Return Element with Key
  // find(key) {
  //   let currNode = this.head;
  //   while (currNode.key != key) {
  //     currNode = currNode.next;
  //     if (currNode == null) {
  //       console.log("Key Doesn't Match Anything");
  //       return -1;
  //     }
  //   }
  //   return currNode;
  // }

  // Remove Element with Key
  // removeElement(key) {
  //   let currNode = this.head;
  //   let prevNode = null;
  //   while (currNode.key != key) {
  //     prevNode = currNode;
  //     currNode = currNode.next;
  //     if (currNode == null) {
  //       console.log("Key Doesn't Match Anything");
  //       return -1;
  //     }
  //   }
  //   if (prevNode == null) {
  //     // remove head
  //     this.head = this.head.next;
  //   } else {
  //     // remove from body and tail
  //     prevNode.next = currNode.next;
  //   }
  //   return currNode;
  // }
}

export function printList(head) {
  console.log("------------------------");
  let currNode = head;
  while (currNode != null) {
    console.log(" Value: " + currNode.val);
    currNode = currNode.next;
  }
}
