/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
// Idea: Do a word search but use a trie. Recursively search each square while traversing the trie.
var findWords = function (board, words) {
  let head = new Node();
  let ret = [];
  let adj = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // Add words to trie
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let node = head;
    for (let j = 0; j < word.length; j++) {
      if (!node.children[word[j]]) node.children[word[j]] = new Node(word[j]);
      node = node.children[word[j]];
    }
    node.isWord = true;
  }

  // Recur on every square
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      recur(i, j, "", head);
      if (ret.length == words.length) return ret;
    }
  }
  return ret;

  function recur(i, j, buildWord, node) {
    if (!node.children[board[i][j]]) return;
    buildWord = buildWord + board[i][j]; // Builds Word bit by bit
    if (node.children[board[i][j]].isWord) {
      ret.push(buildWord); // Word found
      node.children[board[i][j]].isWord = false; // Remove word from trie
    }
    for (let k = 0; k < 4; k++) {
      let [x, y] = adj[k];
      if (
        i + x < 0 ||
        board.length <= i + x ||
        j + y < 0 ||
        board[0].length <= j + y
      )
        continue;
      let temp = board[i][j];
      board[i][j] = "0"; // Burn
      recur(i + x, j + y, buildWord, node.children[temp]); // Check adj tiles + move down in trie
      board[i][j] = temp; // Regrow
    }
  }
};

class Node {
  constructor(data = null) {
    this.data = data;
    this.isWord = false;
    this.children = {}; // Stores data: Node pairs
  }
}
