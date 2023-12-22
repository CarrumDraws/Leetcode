function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  let targetColor: number = image[sr][sc];
  if (targetColor != color) recur(sr, sc); // If statement detects Testcase 2
  return image;

  // Recursive function that recolors all adjacent panels
  function recur(x: number, y: number): void {
    if (image[x]?.[y] != null && image[x][y] == targetColor) {
      image[x][y] = color;
      recur(x + 1, y);
      recur(x - 1, y);
      recur(x, y + 1);
      recur(x, y - 1);
    }
  }
}
