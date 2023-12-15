/**
 * @param {number[]} heights
 * @return {number}
 */
// General Idea: Maintain a stack of strictly increasing heights. When height decreases, compute rectangle sizes of the heights that came before it, then shorten them to maintain the strict increase.
var largestRectangleArea = function (heights) {
  let stack = []; // Stores {index: index, height: val} pairs
  let max = 0;

  for (let i = 0; i < heights.length; i++) {
    // If new height is equal, ignore.
    if (stack[stack.length - 1]?.height == heights[i]) continue;

    stack.push({ index: i, height: heights[i] }); // Add to stack

    // If new height is a decrease, then...
    while (stack[stack.length - 2]?.height > stack[stack.length - 1]?.height) {
      // ...pop newly added height...
      let shortVal = stack.pop();

      // ...get dimentions of previous element...
      // (Note: For a row of elements of equal height, the index of the first element is the one recorded. So you'll need to calculate the area FORWARDS.)
      max = Math.max(
        stack[stack.length - 1].height * (i - stack[stack.length - 1].index),
        max
      );

      // ...Update height of previous element...
      stack[stack.length - 1].height = shortVal.height;

      // ...and loop again if this continues.
    }
  }

  // Finally, operate on the final increasing stack.
  while (stack.length != 0) {
    max = Math.max(
      stack[stack.length - 1].height *
        (heights.length - stack[stack.length - 1].index),
      max
    );

    stack.pop();
  }

  return max;
};

let heights = [2, 1, 5, 6, 2, 3];
// 10

// let heights = [2, 4];
// 4

// let heights = [2, 1, 2];
// 3

console.log(largestRectangleArea(heights));
