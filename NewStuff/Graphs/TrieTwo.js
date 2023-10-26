// This implementation of Trie doesn't incorporate a parent prop in a Node.
class Node {
  constructor(data = null) {
    this.data = data;
    this.flag = false;
    this.children = {}; // Obj of nodes
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }
  // inserts word in trie
  insert(word) {
    let currNode = this.root;
    for (let char of word) {
      if (!currNode.children[char]) currNode.children[char] = new Node(char);
      currNode = currNode.children[char];
    }
    currNode.flag = true;
  }
  // returns if word is in Trie
  isWord(word) {
    let currNode = this.root;
    for (let char of word) {
      if (!currNode.children[char]) return false;
      currNode = currNode.children[char];
    }
    return currNode.flag;
  }
  // Returns array of words that start with the prefix
  search(prefix) {
    let words = [];
    let currNode = this.root;
    for (let char of prefix) {
      if (!currNode.children[char]) return words;
      currNode = currNode.children[char];
    }
    recur(prefix, currNode);
    function recur(currStr, currNode) {
      if (currNode.flag) words.push(currStr);
      for (let childChar in currNode.children) {
        recur(currStr + childChar, currNode.children[childChar]);
      }
    }
    return words;
  }
  delete(word) {}
}

let mytrie = new Trie();
mytrie.insert("bubble");
mytrie.insert("bumblebee");
mytrie.insert("butter");
mytrie.insert("bu");
console.log(mytrie.search("bu"));
export default Trie;
