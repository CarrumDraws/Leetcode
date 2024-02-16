/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
// Idea: Create AdjList of variables in equations, mapped by the factor to convert between them
// DFS, passing a num that's repeatedly multiplied to get a valid value for that node in the graph section
var calcEquation = function (equations, values, queries) {
  let adjList = {};
  for (let i = 0; i < equations.length; i++) {
    let [x, y] = equations[i];
    if (!adjList[x]) adjList[x] = {};
    if (!adjList[y]) adjList[y] = {};
    adjList[x][y] = 1 / values[i];
    adjList[y][x] = values[i];
  }

  let visited = new Set(); // Stores visited keys
  let ret = new Array(queries.length).fill(-1); // Return array
  let vals = {}; // values aquired this cycle
  for (let key in adjList) {
    if (visited.has(key)) continue;
    recur(key, 1);
    answer();
    vals = {};
  }
  return ret;

  // Takes in current key and current num, recurring until all adjacent nodes filled
  function recur(key, num) {
    visited.add(key);
    vals[key] = num;
    for (let subKey in adjList[key]) {
      if (!visited.has(subKey)) recur(subKey, num * adjList[key][subKey]);
    }
  }
  // Solve all queries we can with the info we have
  function answer() {
    for (let i = 0; i < queries.length; i++) {
      let [x, y] = queries[i];
      if (!vals[x] || !vals[y]) continue;
      ret[i] = vals[x] / vals[y];
    }
  }
};
