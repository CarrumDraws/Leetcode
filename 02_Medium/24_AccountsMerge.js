/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
// WORKS but is extremely slow and convoluted.
var accountsMerge = function (accounts) {
  let array = Array.from(Array(accounts.length), (_, i) => i);

  // Union Two Arrays
  function union(x, y) {
    let headX = find(x);
    let headY = find(y);

    if (headX == headY) return; // Already unioned
    array[headY] = headX;
  }

  // Return HEAD of Node x
  function find(x) {
    if (array[x] == x) return x;
    return find(array[x]);
  }

  for (let i = 0; i < accounts.length - 1; i++) {
    for (let j = i + 1; j < accounts.length; j++) {
      // If INTERSECTION...
      let arrA = accounts[i].slice(1);
      let arrB = accounts[j].slice(1);
      let intersects = false;
      arrA.map((ele) => {
        if (arrB.includes(ele)) intersects = true;
      });
      // ... Union
      if (intersects) union(i, j);
    }
  }

  // Construct Messy Return Array
  // [1, 1, 1, 1, 0]
  let ret = Array.from(Array(accounts.length), (_, i) => [accounts[i][0]]);
  for (let i = 0; i < accounts.length; i++) {
    let root = find(i);
    ret[root].push(...accounts[i].slice(1));
  }

  // Clean Up Ret: Sort Values, Remove Dupes
  let retTwo = Array.from(Array(accounts.length), (_, i) => [accounts[i][0]]);
  for (let i = 0; i < accounts.length; i++) {
    let emails = ret[i].slice(1);
    // Sort Vals
    emails.sort();
    // Remove Dupes
    let set = new Set();
    for (let email of emails) {
      if (!set.has(email)) {
        retTwo[i].push(email);
        set.add(email);
      }
    }
  }

  // Remove Empty Arrays
  let retThree = [];
  for (let i = 0; i < accounts.length; i++) {
    if (retTwo[i].length > 1) retThree.push(retTwo[i]);
  }

  return retThree;
};

var accountsMergeTwo = function (accounts) {
  const parents = {};
  const email2name = {};

  const find = (x) => {
    if (parents[x] !== x) {
      parents[x] = find(parents[x]);
    }

    return parents[x];
  };

  const union = (x, y) => {
    parents[find(x)] = find(y);
  };

  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      if (!parents[email]) {
        parents[email] = email;
      } // Add email to parents{} if it doesn't exist...

      email2name[email] = name; // For every email, adds {email: name}
      union(email, emails[0]);
    }
  }

  const emails = {};
  for (const email of Object.keys(parents)) {
    const parent = find(email);
    if (parent in emails) {
      emails[parent].push(email);
    } else {
      emails[parent] = [email];
    }
  }

  return Object.entries(emails).map(([email, x]) => [
    email2name[email],
    ...x.sort(),
  ]);
};

let accounts = [
  ["John", "A", "B"],
  ["John", "A", "C"],
  ["Mary", "D"],
  ["John", "E"],
];

// Expected ---
[
  ["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"],
  ["Mary", "mary@mail.com"],
  ["John", "johnnybravo@mail.com"],
];
console.log(accountsMergeTwo(accounts));
