function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  let dict: { [key: string]: string[] } = {}; // Stores fract : [words that match the fract]
  let queue: string[] = [beginWord]; // Stores Words that will be looked at
  let history = new Set<string>(); // Stores past words that are already checked
  let steps: number = 1;
  for (let word of wordList) {
    for (let i = 0; i < word.length; i++) {
      let fract: string =
        word.slice(0, i) + "*" + word.slice(i + 1, word.length);
      if (!dict[fract]) dict[fract] = [];
      dict[fract].push(word);
    }
  }

  // For every word in queue, fraction it down and check which other words can be made
  while (queue.length != 0) {
    let newQueue: string[] = [];
    for (let i = 0; i < queue.length; i++) {
      let word: string = queue[i];
      for (let j = 0; j < word.length; j++) {
        let fract: string =
          word.slice(0, j) + "*" + word.slice(j + 1, word.length);
        if (!dict[fract]) continue;
        for (let k = 0; k < dict[fract].length; k++) {
          let adjWord: string = dict[fract][k];
          if (adjWord === endWord)
            return steps + 1; // BFS from beginword until you hit endword
          else if (!history.has(adjWord)) {
            history.add(adjWord);
            newQueue.push(adjWord); // Keep finding new words
          }
        }
      }
    }
    queue = newQueue;
    steps++;
  }

  return 0;
}
