/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// Idea: Two Passes. Find O's on border, iterate thorugh them, converting them to A's.
// After, convert O's to X's, A's to O's
var solve = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (
        i == 0 ||
        j == 0 ||
        i == board.length - 1 ||
        j == board[0].length - 1
      ) {
        if (board[i][j] == "O") recur(i, j);
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == "O") board[i][j] = "X";
      else if (board[i][j] == "A") board[i][j] = "O";
    }
  }

  function recur(x, y) {
    board[x][y] = "A";
    if (board[x - 1]?.[y] == "O") recur(x - 1, y);
    if (board[x + 1]?.[y] == "O") recur(x + 1, y);
    if (board[x]?.[y - 1] == "O") recur(x, y - 1);
    if (board[x]?.[y + 1] == "O") recur(x, y + 1);
  }
};
