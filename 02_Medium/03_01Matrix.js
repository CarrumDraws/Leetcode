/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  let queue = []; // Stores [i,j]
  let adjacent = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] == 0) queue.push([i, j]); // Add 0's to queue...
      else mat[i][j] = -1; // ...and change all other vals to -1.
    }
  }
  // Loop through queue...
  while (queue.length != 0) {
    let coord = queue.shift();
    let currVal = mat[coord[0]][coord[1]];
    // ... Checking adjacent tiles...
    for (let adj of adjacent) {
      let x = coord[0] + adj[0];
      let y = coord[1] + adj[1];
      if (mat[x] && mat[x][y] == -1) {
        mat[x][y] = currVal + 1; // ...Updating them if they're -1...
        queue.push([x, y]); // ...and pushing it to the queue.
      }
    }
  }
  return mat;
};

var updateMatrixThree = function (mat) {};

let mat = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
let newMatrix = updateMatrixThree(mat);

console.log(newMatrix);
