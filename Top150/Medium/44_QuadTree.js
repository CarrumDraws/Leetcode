/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
// Idea: Recur all the way down and combine up, like MergeSort.
var construct = function (grid) {
  return recur([0, 0], [grid.length, grid.length]);

  function recur(start, end) {
    let [x, y] = start;
    let [a, b] = end;
    if (a - x == 1) return new Node(grid[x][y], true, null, null, null, null);

    let topLeft = recur([x, y], [(a + x) / 2, (b + y) / 2]);
    let topRight = recur([x, (y + b) / 2], [(a + x) / 2, b]);
    let botLeft = recur([(x + a) / 2, y], [a, (b + y) / 2]);
    let botRight = recur([(x + a) / 2, (y + b) / 2], [a, b]);
    if (
      topLeft.isLeaf &&
      topRight.isLeaf &&
      botLeft.isLeaf &&
      botRight.isLeaf &&
      topLeft.val == topRight.val &&
      botLeft.val == botRight.val &&
      topLeft.val == botLeft.val
    ) {
      return new Node(topLeft.val, true, null, null, null, null);
    }
    return new Node(topLeft.val, false, topLeft, topRight, botLeft, botRight);
  }
};
