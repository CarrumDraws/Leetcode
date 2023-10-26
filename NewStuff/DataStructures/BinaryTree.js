class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(node = null) {
    this.root = node;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) this.root = newNode;
    else this.recurInsert(this.root, newNode);
  }
  recurInsert(currNode, newNode) {
    if (!currNode) return newNode;
    if (currNode.data < newNode.data)
      currNode.right = this.recurInsert(currNode.right, newNode);
    else currNode.left = this.recurInsert(currNode.left, newNode);
    return currNode;
  }

  // Delete: Either find the LARGEST node in the Left tree...
  // or the SMALLEST node in the Right tree of the node to be deleted.
  // Swap their values then tail-delete.
  delete(val, currNode = this.root, prevNode = null) {
    if (currNode == null) return;
    else if (currNode.data < val)
      this.recurDelete(currNode.right, currNode, val);
    else if (currNode.data > val)
      this.recurDelete(currNode.left, currNode, val);
    else {
      if (!currNode.left && !currNode.right) {
        // Delete Tail
        if (prevNode.data < val) prevNode.right = null;
        else prevNode.left = null;
      } else {
        // Delete Body
        let targets, prevTarget, currTarget;
        if (currNode.left) targets = this.findLargest(currNode, currNode.left);
        else targets = this.findSmallest(currNode, currNode.right);
        [prevTarget, currTarget] = targets;

        currNode.data = currTarget.data;
        currTarget.data = val;
        if (prevTarget.right.data == val) prevTarget.right = null;
        else prevTarget.left = null;
      }
    }
  }
  // Returns largest node + parent
  findLargest(prevTarget, currTarget) {
    while (currTarget && currTarget.right) {
      prevTarget = currTarget;
      currTarget = currTarget.right;
    }
    return [prevTarget, currTarget];
  }
  findSmallest(prevTarget, currTarget) {
    while (currTarget && currTarget.left) {
      prevTarget = currTarget;
      currTarget = currTarget.left;
    }
    return [prevTarget, currTarget];
  }

  printInOrder(node = this.root) {
    if (node != null) {
      this.printInOrder(node.left);
      console.log(node.data);
      this.printInOrder(node.right);
    }
  }
  invert(currNode = this.root) {
    if (currNode == null) return null;
    let temp = currNode.left;
    currNode.left = this.invert(currNode.right);
    currNode.right = this.invert(temp);
    return currNode;
  }
}

let tree = new BinaryTree();
tree.insert(0);
tree.insert(-5);
tree.insert(6);
tree.insert(-1);
tree.insert(-7);
console.log(tree);
tree.delete(0);
console.log(tree);
tree.invert();
console.log(tree);

export default BinaryTree;
