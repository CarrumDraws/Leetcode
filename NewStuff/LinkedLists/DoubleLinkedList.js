export class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

export class DoubleLinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  insertEnd(data) {
    let newNode = new Node(data);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  insertStart(data) {
    let newNode = new Node(data);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }
  insertAt(data, idx) {
    if (idx == 0) this.insertStart(data);
    else {
      let newNode = new Node(data);
      let prevNode;
      let currNode = this.head;
      while (idx != 0 && currNode != null) {
        prevNode = currNode;
        currNode = currNode.next;
        idx--;
      }
      if (!currNode) this.insertEnd(data);
      else {
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = currNode;
        currNode.prev = newNode;
      }
    }
  }

  // Delete
  delete(data) {
    let prevNode;
    let currNode = this.head;
    while (currNode && currNode.data != data) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode == this.head) {
      if (currNode == this.tail) {
        // Only Node case
        this.head = null;
        this.tail = null;
      } else {
        // Headcase
        this.head = this.head.next;
        this.head.prev = null;
      }
    } else if (currNode == this.tail) {
      // Tailcase
      this.tail = prevNode;
      this.tail.next = null;
    } else {
      // Bodycase
      prevNode.next = currNode.next;
      currNode.next.prev = prevNode;
    }
  }

  printForwards() {
    let currNode = this.head;
    let str = "";
    while (currNode) {
      str += currNode.data + " ";
      currNode = currNode.next;
    }
    console.log("Print Forwards: " + str);
  }

  printBackwards() {
    let currNode = this.tail;
    let str = "";
    while (currNode) {
      str += currNode.data + " ";
      currNode = currNode.prev;
    }
    console.log("Print Backwards: " + str);
  }
}

let list = new DoubleLinkedList();
list.insertStart(2);
list.insertEnd(3);
list.insertStart(1);
list.printForwards();
list.printBackwards();
list.delete(2);
list.printForwards();
list.delete(3);
list.printForwards();
list.delete(1);
list.printForwards();
