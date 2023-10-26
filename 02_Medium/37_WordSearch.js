/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// WORKS but is extremely slow!!
var exist = function (board, word) {
  let result = false;
  let adjs = [
    [0, 1], // Right
    [1, 0], // Down
    [0, -1], // Left
    [-1, 0], // Up
  ];

  // tile: Current Tile
  // str: Word to be built. str[0] = next char to look for
  // currBoard: Current Board- replace past tiles with "null"
  function check(tile, str, currBoard) {
    if (!result) {
      // If str is empty, return true!
      if (str === "") {
        result = true;
        return;
      }
      // If tile out of bounds, ignore
      if (!currBoard[tile[0]] || !currBoard[tile[0]][tile[1]]) return;
      // If tile has matching char, we have a lead...
      if (currBoard[tile[0]][tile[1]] == str.charAt(0)) {
        currBoard[tile[0]][tile[1]] = null; // Burn your trail
        let newStr = str.slice(1);
        for (let adj of adjs) {
          check(
            [tile[0] + adj[0], tile[1] + adj[1]],
            newStr,
            currBoard.map((item) => item.slice())
          );
        }
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (result) return result;
      check(
        [i, j],
        word,
        board.map((item) => item.slice())
      );
    }
  }
  return result;
};

// I Think the issue with speed is the amount of array copies I'm dealing with.
// If we can simplify the info that is passed into our recursive calls...
// ...then it will be faster.

// LEETCODE OPTIMIZED
var existTwo = function (board, word) {
  let result = false;
  var check = function (x, y, index) {
    if (!result) {
      if (x < 0 || y < 0 || x >= board.length || y >= board[0].length) return; // out of bounds
      if (board[x][y] != word[index]) return; // wrong character
      if (index == word.length - 1) {
        result = true; // success
        return;
      }
      board[x][y] = null; // mark our path so we dont go back and forth
      check(x + 1, y, index + 1); // Down
      check(x - 1, y, index + 1); // Up
      check(x, y + 1, index + 1); // Right
      check(x, y - 1, index + 1); // Left
      board[x][y] = word[index]; // reset our board , very important
    }
  };

  for (let index = 0; index < board.length; index++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[index][j] == word[0]) {
        check(index, j, 0);
        if (result) return result;
      }
    }
  }

  return result;
};

// Practice
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// Idea: pass in coords
var existThree = function (board, word) {
  let result = false;
  function check(x, y, index) {
    if (!result) {
      if (0 > x || x >= board.length || 0 > y || y >= board.length[0]) return;
      if (board[x][y] != word[index]) return; // wrong character
      if (index == word.length - 1) {
        result = true;
        return;
      }

      board[x][y] = null; // Burn Trail
      check(x - 1, y, index + 1); // Up
      check(x + 1, y, index + 1); // Down
      check(x, y - 1, index + 1); // Left
      check(x, y + 1, index + 1); // Right
      board[x][y] = word.charAt(index);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      check(i, j, 0);
      if (result) return result;
    }
  }
  return result;
};

let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
let word = "ABCB";

console.log(existThree(board, word));
