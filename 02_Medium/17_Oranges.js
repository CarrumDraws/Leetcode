import { Print2DArr } from "../HelperFuncs/Print2DArr.js";

/**
 * @param {number[][]} grid
 * @return {number}
 */
// Optimized- Remove final array iteration by keeping track of totalOranges and maxTime
var orangesRotting = function (grid) {
  let queue = [];
  let allOranges = 0;
  let maxTime = 0;
  let spaces = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  // Store all 2's in queue
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1 || grid[i][j] == 2) allOranges++;
      if (grid[i][j] == 2) queue.push([i, j]);
    }
  }
  // Recursively iterate through queue, converting all 1's to currRot + 1, and adding newly rotten orange to queue
  for (let coord of queue) {
    let [x, y] = coord;
    for (let space of spaces) {
      infest(x + space[0], y + space[1], grid[x][y]);
    }
  }
  function infest(x, y, rotNum) {
    if (typeof grid?.[x]?.[y] == "undefined" || grid[x][y] != 1) return;
    grid[x][y] = rotNum + 1;
    maxTime = Math.max(maxTime, rotNum + 1);
    queue.push([x, y]);
  }

  // After, iterate through array to find max rotTime and check if any 1's exist.

  Print2DArr(grid);
  if (allOranges != queue.length) return -1;
  return maxTime == 0 ? 0 : maxTime - 2;
};

// Tighter Code
var orangesRottingTwo = function (grid) {
  let stack = []; // Stores rotted oranges [i, j, time]
  let fresh = []; // Stores fresh oranges [i, j]
  let maxRot = 2;
  let adjacent = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 2) stack.push([i, j, 2]);
      else if (grid[i][j] == 1) fresh.push([i, j]);
    }
  }
  while (stack.length != 0) {
    let rot = stack.shift();
    for (let adj of adjacent) {
      let x = rot[0] + adj[0];
      let y = rot[1] + adj[1];
      if (grid[x] && grid[x][y] && grid[x][y] == 1) {
        // Rot Surroundings, update maxRot, add to stack
        grid[x][y] = rot[2] + 1;
        maxRot = Math.max(maxRot, rot[2] + 1);
        stack.push([x, y, rot[2] + 1]);
      }
    }
  }
  // Check for fresh oranges
  for (let i = 0; i < fresh.length; i++) {
    if (grid[fresh[i][0]][fresh[i][1]] == 1) return -1;
  }
  return maxRot - 2;
};

let grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
orangesRotting(grid);
