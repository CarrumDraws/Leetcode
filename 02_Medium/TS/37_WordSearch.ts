function exist(board: string[][], word: string): boolean {
  // Preliminary Check ---
  let hash: object = {};
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (!hash[board[i][j]]) hash[board[i][j]] = 0;
      hash[board[i][j]]++;
    }
  }
  for (let i = 0; i < word.length; i++) {
    let currChar = word[i];
    if (!hash[currChar]) return false;
    else hash[currChar]--;
  }

  // Main Code ---
  const adjacent: [number, number][] = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let canMake: boolean = false;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) recur(i, j, 0);
      if (canMake) return canMake;
    }
  }
  return canMake;

  // Recursive Function ---
  function recur(x: number, y: number, ptr: number): void {
    if (ptr == word.length - 1) canMake = true; // Word Found
    else {
      board[x][y] = ""; // Burn
      for (let i = 0; i < adjacent.length; i++) {
        let adj = adjacent[i];
        if (board[x + adj[0]]?.[y + adj[1]] === word[ptr + 1]) {
          recur(x + adj[0], y + adj[1], ptr + 1); // Go to next matching tile
        }
      }
      board[x][y] = word.charAt(ptr); // Regrow
    }
  }
}
