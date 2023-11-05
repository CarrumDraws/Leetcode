/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// MY SOLUTION : OK BUT ONLY BEATS 30%
var exist = function (board, word) {
  let canMake = false;
  let adj = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  // x = x dimention, y = y dimention, idx = currIndex
  function recur(x, y, idx) {
    if (idx == word.length) canMake = true;
    else {
      for (let next of adj) {
        let X = x + next[0];
        let Y = y + next[1];
        if (board[X]?.[Y] == word.charAt(idx)) {
          let char = board[X][Y];
          board[X][Y] = null; // Burn Trail
          recur(X, Y, idx + 1);
          board[X][Y] = char; // Restore Trail
          if (canMake) return true;
        }
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == word.charAt(0)) {
        let char = board[i][j];
        board[i][j] = null; // Burn Trail
        recur(i, j, 1);
        board[i][j] = char; // Restore Trail
        if (canMake) return true;
      }
    }
  }
  return false;
};

// LEETCODE OPTIMIZED : BEATS 95%!?! ------------------------------------
var existTwo = function (board, word) {
  return isValidByAvailableSymbols(board, word) &&
    isValidForSegmentsOfWord(board, word)
    ? checkPhrase(board, word)
    : false;
};

// Checks if all letters in word exist in board
const isValidByAvailableSymbols = (board, word) => {
  let wordCounter = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      wordCounter[board[i][j]] = (wordCounter[board[i][j]] || 0) + 1;
    }
  }

  for (let i = 0; i < word.length; i++) {
    if (wordCounter[word[i]] !== undefined && wordCounter[word[i]] >= 0)
      wordCounter[word[i]]--;
    else return false;
  }

  return true;
};

// Splits word into 3 segments and check the validity of each segment
const isValidForSegmentsOfWord = (board, word) => {
  const thirdLength = Math.floor(word.length / 3);
  const twoThirdLength = Math.floor((word.length * 2) / 3);

  if (word.length > 5) {
    const firstSegment = word.substring(0, thirdLength);
    const secondSegment = word.substring(thirdLength, twoThirdLength);
    const thirdSegment = word.substring(twoThirdLength);

    if (
      !checkPhrase(clone(board), firstSegment) ||
      !checkPhrase(clone(board), secondSegment) ||
      !checkPhrase(clone(board), thirdSegment)
    )
      return false;
  }
  return true;
};

const checkPhrase = (board, word) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (dfs(board, word, i, j)) return true;
    }
  }

  return false;
};

const clone = (a) => JSON.parse(JSON.stringify(a));

const directionMap = [0, 1, 0, -1, 0];
const dfs = (board, word, i, j, cursor = 0) => {
  // when cursor reaches the length of the word, it means
  // that the script handled whole word in the previous step and the result is true
  if (cursor === word.length) return true;

  // reached the edge of the board or already handled symbol
  if (board[i]?.[j] !== word[cursor] || board[i][j] === -1) return false;

  // mark as visited
  board[i][j] = -1;

  // handle the neighbours
  for (let k = 0; k < 4; k++) {
    if (
      dfs(board, word, i + directionMap[k], j + directionMap[k + 1], cursor + 1)
    )
      return true;
  }

  board[i][j] = word[cursor];

  return false;
};

let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
let word = "ABCB";

console.log(existThree(board, word));
