/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  // Idea: Jump Game but circular! When you are "stranded," make that your new starting point.
  // Logic: When you (sucessfully) get to a station, your gas is always at least 0.
  // Therefore, the second you are "stranded," none of the stations leading up to that point were viable starting points anyways.
  // Check the stations afterwards!

  for (let i = 0; i < gas.length; i++) {
    let myGas = 0;
    for (let j = 0; j <= gas.length; j++) {
      let idx = (i + j) % gas.length;
      if (j == gas.length) {
        if (myGas < 0) return -1; // Stranded at the end. So Close!
        return i; // Success!
      }
      if (myGas < 0) {
        i = i + j - 1; // Stranded: Move i to stranding point (Don't use remiander- prevents infinate loops)
        break;
      }
      myGas = myGas + gas[idx] - cost[idx]; // Add new gas + Subtract gas cost
    }
  }
  return -1;
};
