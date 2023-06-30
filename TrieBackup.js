// Functions can be treated as Classes when called with the 'new' operator.
// Contents within the function will then be used as a constructor.
// When a function is called that way, the Function's 'prototype' property can be utilized.
// The 'prototype' property allows you to add properties to ALL instances of the Function, kind of like a hashtable.
// More Info: https://www.programiz.com/javascript/prototype

// NODE FUNCTIONALITY ---------------
function TrieNode(key) {
  this.key = key; // Character Value
  this.parent = null; // Ref to Parent
  this.children = {}; // Hash of Child Nodes
  this.end = false; // "Full Word" Flag
}

// Given a ChildNode, returns string of all parents upwards.
// [NOT USED IN LEETCODE]
TrieNode.prototype.getWord = function () {
  var output = [];
  var currNode = this; // ???

  while (currNode !== null) {
    output.unshift(currNode.key);
    currNode = currNode.parent;
  }

  return output.join("");
};

// TRIE FUNCTIONALITY --------------

var Trie = function () {
  this.root = new TrieNode(null);
};

/**
 * @param {string} word
 * @return {void}
 */
// Inserts the string word into the trie.
Trie.prototype.insert = function (word) {
  var currNode = this.root;

  for (var i = 0; i < word.length; i++) {
    if (!currNode.children[word[i]]) {
      currNode.children[word[i]] = new TrieNode(word[i]);
      currNode.children[word[i]].parent = currNode;
    }
    currNode = currNode.children[word[i]];
    if (i == word.length - 1) currNode.end = true;
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
// Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise
Trie.prototype.search = function (word) {
  var currNode = this.root;

  for (var i = 0; i < word.length; i++) {
    if (currNode.children[word[i]]) currNode = currNode.children[word[i]];
    else return false;
  }
  return currNode.end;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
// Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
Trie.prototype.startsWith = function (prefix) {
  let currNode = this.root;

  for (let i = 0; i < prefix.length; i++) {
    if (currNode.children[prefix[i]]) currNode = currNode.children[prefix[i]];
    else return false;
  }
  return true;
};

let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // return True
console.log(trie.search("app")); // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app")); // return True
