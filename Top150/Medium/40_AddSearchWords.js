class Node {
  constructor(data = null) {
    this.data = data;
    this.isWord = false;
    this.children = {}; // Stores word: node pairs
  }
}

var WordDictionary = function () {
  this.head = new Node();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let curr = this.head;
  for (let i = 0; i < word.length; i++) {
    if (!curr.children[word[i]]) curr.children[word[i]] = new Node(word[i]);
    curr = curr.children[word[i]];
  }
  curr.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  let valid = false;
  recur(this.head, 0);
  return valid;

  function recur(node, ptr) {
    // If reached end and the end is a word, success
    if (ptr == word.length) valid = node.isWord;
    else if (word[ptr] === ".") {
      // If ".", recur on all children
      for (let key in node.children) {
        recur(node.children[key], ptr + 1);
        if (valid) return;
      }
    } else {
      // If normal, recur on that child
      if (node.children[word[ptr]]) recur(node.children[word[ptr]], ptr + 1);
    }
  }
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
