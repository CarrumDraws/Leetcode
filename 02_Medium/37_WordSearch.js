/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// TRICK: Do the preliminary check 'hasLetters()' before doing an expensive search().
var exist = function (board, word) {
  return hasLetters() ? search() : false;

  // Checks if board has all letters word has
  function hasLetters() {
    let hash = {};
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (!hash[board[i][j]]) hash[board[i][j]] = 1;
        else hash[board[i][j]]++;
      }
    }
    for (let letter of word) {
      if (!hash[letter]) return false;
      else hash[letter]--;
    }
    return true;
  }

  // Finds Word
  function search() {
    let exist = false;
    let tiles = [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ];

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        find(i, j, 0);
        if (exist) return exist;
      }
    }
    return exist;

    function find(i, j, idx) {
      if (idx == word.length) exist = true;
      else if (board[i]?.[j] == word.charAt(idx)) {
        let temp = board[i][j];
        board[i][j] = null;
        for (let [x, y] of tiles) {
          find(i + x, j + y, idx + 1);
          if (exist) return;
        }
        board[i][j] = temp;
      }
    }
  }
};
