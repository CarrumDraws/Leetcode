/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
// Idea: Use two pointers to figure out which words to include in a line.
// When the words have been chosen, add them to the array with the proper amount of leftover spaces between.
// Note that the bottom row is spaced differently.
var fullJustify = function (words, maxWidth) {
  let arr = [];
  let left = 0;
  let right = 0;
  while (left < words.length) {
    let str = "";
    let currLen = 0; // Length of chars between left and right
    // Move right if there is enough space in line for the next word
    while (
      words[right] &&
      currLen + (right - left) + words[right].length <= maxWidth
    ) {
      currLen += words[right].length;
      right++;
    }
    let numSpaces = maxWidth - currLen; // Amount of leftover space
    while (left != right) {
      str += words[left];
      let currSpace; // Current space size
      if (words[right])
        // Non-last line
        currSpace = Math.ceil(numSpaces / Math.max(right - left - 1, 1));
      else {
        if (left + 1 == right) currSpace = numSpaces; // Final Word in Last Line
        else currSpace = 1; // Last Line
      }
      for (let i = 0; i < currSpace; i++) {
        str += " ";
      }
      numSpaces -= currSpace;
      left++;
    }
    arr.push(str);
  }
  return arr;
};
