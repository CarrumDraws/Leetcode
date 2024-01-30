/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// Idea: Only use O(1) memory space by changing each tile to 0, 1, 2, or 3 depending on its past and present value. This way you can still refer to past values while not needing extra memory space.
// OLD NEW
//  0   0   0
//  1   0   1
//  0   1   2
//  1   1   3
var gameOfLife = function (board) {
  let adjs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let lives = 0;
      for (let adj of adjs) {
        let val = board[i + adj[0]]?.[j + adj[1]];
        if (val == 1 || val == 3) lives++;
      }
      if (board[i][j] == 1) {
        if (2 <= lives && lives < 4) {
          board[i][j] = 3;
        } else board[i][j] = 1;
      } else {
        if (lives == 3) board[i][j] = 2;
        else board[i][j] = 0;
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == 1) board[i][j] = 0;
      else if (board[i][j] == 2 || board[i][j] == 3) board[i][j] = 1;
    }
  }
};
