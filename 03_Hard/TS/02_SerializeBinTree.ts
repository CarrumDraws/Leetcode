// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  let str: string = "";
  recur(root);
  return str.trim();

  function recur(node: TreeNode | null): void {
    if (!node) str += "* ";
    else {
      str += node.val + " ";
      recur(node.left);
      recur(node.right);
    }
  }
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  let arr: string[] = data.split(" ");
  let i: number = 0;
  return recur();

  // recur function uses global 'i' index to track element in arr[];
  function recur(): TreeNode | null {
    if (i >= arr.length || arr[i] == "*") return null;
    let newNode = new TreeNode(Number(arr[i]));
    i++;
    newNode.left = recur();
    i++;
    newNode.right = recur();
    return newNode;
  }
}
