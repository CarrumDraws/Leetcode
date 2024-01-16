// Idea: Keep an array of vals and a hash of val -> idx pairs.
// On delete, use the hash to access the array idx instantly.
// Then, swap the last value of the array into the old value's position, updating the idx in the hash.
var RandomizedSet = function () {
  this.arr = [];
  this.hash = {};
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.hash[val] != null) return false;
  this.hash[val] = this.arr.length; // Add {val: idx}
  this.arr.push(val); // Set arr[idx] = val
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.hash[val] == null) return false;
  let idx = this.hash[val]; // Get Index of val from hash
  delete this.hash[String(val)]; // Remove val from hash

  // this.arr[idx] = this.arr.pop(); (Doesn't work?!?)
  this.arr[idx] = this.arr[this.arr.length - 1]; // Copy last val in arr into idx
  this.arr.pop(); // Remove last val in arr

  this.hash[this.arr[idx]] = idx; // Update idx of hash

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  // Returns a random integer from 0 to this.arr.length - 1:
  let idx = Math.floor(Math.random() * this.arr.length);
  return this.arr[idx];
};
