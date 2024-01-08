function findAnagrams(s: string, p: string): number[] {
  let hash: object = {}; // Stores p's characters. When a character = 0, neededChars--.
  let arr: number[] = []; // Stores indexes

  // Populate hash with p
  for (let i = 0; i < p.length; i++) {
    if (!hash[p[i]]) hash[p[i]] = 0;
    hash[p[i]]++;
  }
  let neededChars: number = Object.keys(hash).length; // Amount of unique chars in p

  for (let i = 0; i < s.length; i++) {
    // Remove old char if curr window is too long
    if (i >= p.length) {
      let oldChar: string = s[i - p.length];
      if (hash[oldChar] != null) {
        if (hash[oldChar] == 0) neededChars++;
        hash[oldChar]++;
      }
    }
    // Add new char
    if (hash[s[i]] != null) {
      hash[s[i]]--;
      if (hash[s[i]] == 0) neededChars--;
    }
    if (neededChars == 0) arr.push(i - p.length + 1); // Check if anagram
  }

  return arr;
}
