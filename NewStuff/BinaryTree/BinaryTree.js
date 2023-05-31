class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export class BinaryTree {
  constructor(head = null) {
    this.head = head;
  }

  insert(data) {
    function recurInsert(currNode, newNode) {
      // Base Cases
      if (currNode.data > newNode.data && currNode.left == null) {
        currNode.left = newNode;
        return;
      }
      if (currNode.data <= newNode.data && currNode.right == null) {
        currNode.right = newNode;
        return;
      }
      // Recursive Step
      if (currNode.data > newNode.data) {
        recurInsert(currNode.left, newNode);
      } else {
        recurInsert(currNode.right, newNode);
      }
    }

    let newNode = new Node(data);
    // Head Insert
    if (this.head == null) {
      this.head = newNode;
    } else {
      let currNode = this.head;
      recurInsert(currNode, newNode);
    }
  }

  // To delete, either find the LARGEST node in the Left tree...
  // or the SMALLEST node in the Right tree of the target to be deleted.
  // This will be our "Pivot Node."
  // Replace our deletionTarget with our pivotNode's value.
  // Set our pivotNode parents' .left to our pivotNode.right (Smallest of right), or pivotNode's parents' .right to out pivotNode.left (largest of left)
  delete(target) {
    let { currNode, parentNode } = this.find(target);
    if (currNode) {
      if (currNode.right) {
        // Find Min of right subtree
        let { minNode, minNodeParent } = this.findMin(currNode.right, currNode);
        currNode.data = minNode.data;
        if (minNode.right) {
          if (minNodeParent.data > minNode.right) {
            minNodeParent.left = minNode.right; // Attatch to
          } else {
            minNodeParent.right = minNode.right; // left or right?
          }
        } else {
          if (minNodeParent.data > minNode.right) {
            minNodeParent.left = null; // Attatch to
          } else {
            minNodeParent.right = null; // left or right?
          }
        }
      } else if (currNode.left) {
        // Find max of left subtree
        let { maxNode, maxNodeParent } = this.findMax(currNode.left, currNode);
        currNode.data = maxNode.data;
        if (maxNode.right) {
          if (maxNodeParent.data > maxNode.right) {
            maxNodeParent.left = maxNode.right; // Attatch to
          } else {
            maxNodeParent.right = maxNode.right; // left or right?
          }
        } else {
          if (maxNodeParent.data > maxNode.right) {
            maxNodeParent.left = null; // Attatch to
          } else {
            maxNodeParent.right = null; // left or right?
          }
        }
      } else {
        // Leaf Node
        if (parentNode.data < currNode.data) {
          parentNode.right = null;
        } else {
          parentNode.left = null;
        }
      }
      currNode = null; // This changes the currNode pointer, not currNode's value. How to deal with head deletion...?
    } else {
      console.log("Node not found");
    }
  }

  // Returns pointers to Target and it's Parent
  find(target) {
    let currNode = this.head;
    let parentNode = this.head;
    function recurFind(currNode, parentNode, target) {
      if (currNode != null) {
        if (currNode.data == target) {
          return { currNode, parentNode };
        } else if (currNode.data > target) {
          parentNode = currNode;
          return recurFind(currNode.left, parentNode, target);
        } else {
          parentNode = currNode;
          return recurFind(currNode.right, parentNode, target);
        }
      }
    }
    return recurFind(currNode, parentNode, target);
  }

  // Returns Target and Parent
  findMin(node, prevNode) {
    let curr = node;
    let prev = prevNode;
    function recurFindMin(curr, prev) {
      if (curr == null || curr.left == null) {
        return { curr, prev };
      }
      return recurFindMin(curr.left, curr);
    }
    return recurFindMin(curr, prev);
  }

  // Returns Target and Parent
  findMax(node, prevNode) {
    let curr = node;
    let prev = prevNode;
    function recurFindMax(curr, prev) {
      if (curr == null || curr.right == null) {
        return { curr, prev };
      }
      return recurFindMax(curr.right, curr);
    }
    return recurFindMax(curr, prev);
  }

  printInOrder(node) {
    if (node != null) {
      this.printInOrder(node.left);
      console.log(node.data);
      this.printInOrder(node.right);
    }
  }
}

// let myTree = new BinaryTree();
// myTree.insert(8);
// myTree.insert(3);
// myTree.insert(10);
// myTree.insert(1);
// myTree.insert(6);
// myTree.insert(14);
// myTree.insert(4);
// myTree.insert(7);
// myTree.insert(13);
// myTree.printInOrder(myTree.head);
// myTree.delete(3);
// myTree.printInOrder(myTree.head);
