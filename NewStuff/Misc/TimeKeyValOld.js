var TimeMap = function () {
  this.data = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
// Store [timestamp, value] in this.data
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.data[key]) this.data[key] = [];
  this.data[key].push([timestamp, value]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
// Return greatest value thats <= timestamp, else return ""
// Use Binary Search
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.data[key]) return ""; // Key doesnt exist
  let data; // Data to be returned
  // Loop backwards, finding first timestamp less than or equal to
  for (let i = this.data[key].length - 1; i >= 0; i--) {
    if (this.data[key][i][0] <= timestamp) {
      data = this.data[key][i][1];
      break;
    }
  }
  return data ? data : "";
};

// obj.set(key, value, timestamp)

var obj = new TimeMap();
obj.set("foo", "bar", 1);
obj.set("foo", "bar2", 4);

console.log("Done");
