function largestRectangleArea(heights: number[]): number {
  let maxArea: number = 0;

  // Iterate through each rectangle.
  for (let i = 0; i < heights.length; i++) {
    // If the rectange increases, ignore.
    // If it decreases, check size using width as and loop backwards
    if (i != 0 && heights[i - 1] > heights[i]) {
      let j: number = i - 1; // Back Pointer
      while (j >= 0 && heights[j] > heights[i]) {
        maxArea = Math.max(heights[j] * (i - j), maxArea);
        heights[j] = heights[i];
        j--;
      }
    }
  }

  // At the end, check all heights.
  for (let i = 0; i < heights.length; i++) {
    if (i == 0 || heights[i - 1] != heights[i])
      maxArea = maxArea = Math.max(heights[i] * (heights.length - i), maxArea);
  }

  return maxArea;
}
