import { Print2DArr } from "../HelperFuncs/Print2DArr.js";

/**
 * @param {character[][]} grid
 * @return {number}
 */
// Idea: Iterate through grid. When a 1 is found, add 1 to count and recursively convert 1's in clump into 0's.
var numIslands = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        count++;
        explore([i, j]);
      }
    }
  }

  function explore(coord) {
    if (
      typeof grid?.[coord[0]]?.[coord[1]] == "undefined" ||
      grid[coord[0]][coord[1]] == 0
    )
      return;
    grid[coord[0]][coord[1]] = 0;
    let [x, y] = coord;
    explore([x + 1, y]);
    explore([x - 1, y]);
    explore([x, y + 1]);
    explore([x, y - 1]);
  }
  return count;
};

let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
numIslands(grid);
