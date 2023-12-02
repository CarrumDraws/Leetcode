/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// Great Runtime, Bad Memory.
// Use a map of fracts -> words, for quick O(1) lookup!
var ladderLength = function (beginWord, endWord, wordList) {
  let fractMap = {}; // Map of fracts -> words
  for (let word of wordList) {
    for (let fract of fraction(word)) {
      if (!fractMap[fract]) fractMap[fract] = [];
      fractMap[fract].push(word);
    }
  }

  const wordSet = new Set(wordList); // Set of words. Use as 'history' by removing values.
  let queue = [beginWord];
  let count = 1;

  while (queue.length) {
    const tempQueue = [];

    // Loop over each word in the queue
    for (let word of queue) {
      if (word === endWord) return count;

      // Find adjacent words, add to tempQueue, remove from wordSet.
      for (let fract of fraction(word)) {
        if (!fractMap[fract]) continue;
        for (let nextWord of fractMap[fract]) {
          if (!wordSet.has(nextWord)) continue;
          tempQueue.push(nextWord);
          wordSet.delete(nextWord);
        }
      }
    }
    queue = tempQueue;
    count++;
  }
  return 0;

  // Returns array of all fractions of a word
  function fraction(word) {
    let arr = [];
    for (let i = 0; i < word.length; i++) {
      let fract = word.slice(0, i) + "*" + word.slice(i + 1, word.length);
      arr.push(fract);
    }
    return arr;
  }
};

// Leetcode Answer- Average Runtime, Average Memory.
// Doesn't use a map- instead iterates through every single combo of letters.
// Due to word length being max 10, runtime doesn't take much of a hit, but frees lots of memory.
var ladderLengthBetter = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList); // Create Set of words
  let queue = [beginWord];
  let count = 1;

  while (queue.length) {
    const tempQueue = [];

    // Loop over each word in the queue
    for (let word of queue) {
      if (word === endWord) return count;

      // loop over each char of the word, replacing each char with letters from [a - z]
      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < 26; j++) {
          const newWord =
            word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);

          // Add newWord to tempQueue if present in wordSet
          if (wordSet.has(newWord)) {
            tempQueue.push(newWord);
            wordSet.delete(newWord); // And delete it from wordset.
          }
        }
      }
    }
    queue = tempQueue;
    count++;
  }
  return 0;
};
