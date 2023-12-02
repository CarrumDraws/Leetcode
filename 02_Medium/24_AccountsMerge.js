/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
// Idea: Create a Map using Sets and unionFind.
// From this map, construct a return array.
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
// Idea: Create a Map using Sets and unionFind.
// From this map, construct a return array.
// WORKS but DOGSHIT PERFORMANCE.
var accountsMerge = function(accounts) {
    // Create a UnionFind Map for each account
    let map = Array.from({length: accounts.length}, (_, i) => {return i}); // Map of groups

    // Remove Dupe Emails in each account
    accounts = accounts.map((arr) => {return Array.from(new Set(arr))});

    // Iterate through each account, using UnionFind to union accounts together
    for(let i = 0; i < accounts.length - 1; i++) {
        let currAcc = accounts[i];
        for(let j = i + 1; j < accounts.length; j++) {
            let thisAcc = accounts[j];
            if(currAcc[0] !== thisAcc[0]) continue; // If names don't match, skip
            else if(find(i) == find(j)) continue; // Accounts already unioned, skip
            // Check for unions by converting them to sets.
            let newSet = new Set([...currAcc.slice(1, currAcc.length), ...thisAcc.slice(1, thisAcc.length)]);
            if(newSet.size < currAcc.length + thisAcc.length - 2) union(i, j);
        }
    }

    // Combine accounts using the unionFind map
    // Make array using root as root. then remove all empty indices.
    let ret = [];
    for(let i = 0; i < accounts.length; i++) {
        let root = find(i);
        let rootArr = !ret[root] ? [] : ret[root]; // Existant Root Array stored within ret
        let currArr = accounts[i]; // Current array waiting to be merged
        ret[root] = [currArr[0], ...merge(currArr.slice(1), rootArr.slice(1))];
    }

    return ret.filter((val) => { return val != undefined}); // Remove empty spaces

    function union(i, j) {
        map[find(j)] = i;
    }
    function find(i) {
        if (map[i] == i) return i;
        else return find(map[i]);
    }
    // Unifies two arrs + Sorts + removes dupes;
    function merge(arrA, arrB) {
        return Array.from(new Set([...arrA, ...arrB])).sort();
    }
};    

var accountsMergeTwo = function (accounts) {
  const parents = {};
  const email2name = {};

  const find = (x) => {
    if (parents[x] !== x) parents[x] = find(parents[x]);
    return parents[x];
  };

  const union = (x, y) => {
    parents[find(x)] = find(y);
  };

  // Use Destructuring in For Loops!
  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      if (!parents[email]) parents[email] = email;
      email2name[email] = name;
      union(email, emails[0]);
    }
  }

  const emails = {};
  for (const email of Object.keys(parents)) {
    const parent = find(email);
    if (parent in emails) emails[parent].push(email);
    else emails[parent] = [email];
  }

  return Object.entries(emails).map(([email, x]) => [
    email2name[email],
    ...x.sort(),
  ]);
};