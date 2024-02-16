/**
 * @param {number[][]} board
 * @return {number}
 */
// Idea: Keep queue of tiles to access next.
// Maintain history to see which tiles have already been visited.
// Implement an "intToCoord" class that converts tile to coordinate
var snakesAndLadders = function (board) {
  let history = new Set(); // Stores past tiles
  let turn = 0;
  let stack = [1];

  while (stack.length != 0) {
    let newStack = [];
    for (let i = 0; i < stack.length; i++) {
      history.add(stack[i]);
      if (stack[i] == Math.pow(board.length, 2)) return turn;
      for (let j = 1; j <= 6; j++) {
        let nextTile = stack[i] + j;
        if (nextTile > Math.pow(board.length, 2)) continue;
        let [x, y] = intToCoord(nextTile);
        if (board[x][y] != -1) nextTile = board[x][y];

        if (!history.has(nextTile)) {
          history.add(nextTile);
          newStack.push(nextTile);
        }
      }
    }
    turn++;
    stack = newStack;
  }
  return -1;

  // int starts at 1
  function intToCoord(int) {
    let n = board.length;
    let x = n - Math.floor((int - 1) / n) - 1;
    let y = (int - 1) % board.length;
    if (board.length % 2 == 1) {
      x % 2 == 0 ? (y = y) : (y = n - y - 1);
    } else {
      x % 2 == 1 ? (y = y) : (y = n - y - 1);
    }
    return [x, y];
  }
};
