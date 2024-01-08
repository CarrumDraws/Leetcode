function wordBreak(s: string, wordDict: string[]): boolean {
  // Preliminary Check
  // Check if all elements in sSet exist in wSet
  let sSet = new Set<string>();
  for (let i = 0; i < s.length; i++) {
    sSet.add(s[i]);
  }
  let wSet = new Set<string>();
  for (let word of wordDict) {
    for (let i = 0; i < word.length; i++) {
      wSet.add(word[i]);
    }
  }
  sSet.forEach((ele) => {
    if (!wSet.has(ele)) return false;
  });

  // Crate array of s length + 1 spots representing if a spot is accessible
  let arr: boolean[] = new Array(s.length + 1).fill(false);
  arr[0] = true; // Spot 0 is always acessible

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) continue;
    for (let word of wordDict) {
      if (word === s.slice(i, i + word.length)) arr[i + word.length] = true;
    }
  }
  return arr[arr.length - 1];
}
