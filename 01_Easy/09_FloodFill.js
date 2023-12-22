import { Print2DArr } from "../HelperFuncs/Print2DArr.js";
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  let targetVal = image[sr][sc];

  function recurFill(sr, sc) {
    // Base Case : Return if color matches/dimentions out of bounds
    if (
      sr < 0 ||
      sr >= image.length ||
      sc < 0 ||
      sc >= image[0].length ||
      image[sr][sc] == color ||
      image[sr][sc] != targetVal
    ) {
      return;
    } else {
      image[sr][sc] = color;
      recurFill(sr, sc + 1);
      recurFill(sr, sc - 1);
      recurFill(sr - 1, sc);
      recurFill(sr + 1, sc);
    }
  }
  recurFill(sr, sc);
  return image;
};

let image = [
  [0, 0, 0],
  [0, 0, 0],
];
Print2DArr(image);
let newArr = floodFillTwo(image, 1, 0, 2);
Print2DArr(image);
