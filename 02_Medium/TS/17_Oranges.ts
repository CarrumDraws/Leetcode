function orangesRotting(grid: number[][]): number {
  let newRot: number[][] = []; // Array of [x, y] coordinates representing next oranges to rot
  let cycle: number = 0; // Time Elapsed
  let adjacent: number[][] = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 2) newRot.push([i, j]); // Add rotted oranges
    }
  }

  while (newRot.length != 0) {
    let newerRot: number[][] = []; // Temp rot holder
    while (newRot.length != 0) {
      let [i, j] = newRot.pop();
      for (let adj of adjacent) {
        if (grid[i + adj[0]]?.[j + adj[1]] == 1) {
          grid[i + adj[0]][j + adj[1]] = 2; // Rot Orange
          newerRot.push([i + adj[0], j + adj[1]]); // Push to newRot
        }
      }
          newRot = newerRot;
    cycle++;
  }

  // Check for fresh oranges
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) return -1;
    }
  }

  return cycle == 0 ? cycle : cycle - 1;
}
