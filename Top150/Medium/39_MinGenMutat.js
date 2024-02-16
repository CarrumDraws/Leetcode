/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
// Idea: Basically that Word Mutation Question lol
var minMutation = function (startGene, endGene, bank) {
  let hash = {}; // Stores gene : [geneMutations]
  for (let i = 0; i < bank.length; i++) {
    for (let j = 0; j < 8; j++) {
      let frac = bank[i].slice(0, j) + "*" + bank[i].slice(j + 1, 8);
      if (!hash[frac]) hash[frac] = [];
      hash[frac].push(bank[i]);
    }
  }

  let fracts = [];
  let cycle = 1;
  let history = new Set(); // Stores Fractions
  for (let j = 0; j < 8; j++) {
    let frac = startGene.slice(0, j) + "*" + startGene.slice(j + 1, 8);
    fracts.push(frac);
    history.add(frac);
  }
  while (fracts.length != 0) {
    let newFracts = [];
    for (let i = 0; i < fracts.length; i++) {
      let fractKey = fracts[i];
      let genes = hash[fractKey];
      if (!genes) continue;
      for (let j = 0; j < genes.length; j++) {
        let gene = genes[j];
        if (gene === endGene) return cycle;
        for (let j = 0; j < 8; j++) {
          let frac = gene.slice(0, j) + "*" + gene.slice(j + 1, 8);
          if (!history.has(frac)) {
            newFracts.push(frac);
            history.add(frac);
          }
        }
      }
    }
    fracts = newFracts;
    cycle++;
  }
  return -1;
};
