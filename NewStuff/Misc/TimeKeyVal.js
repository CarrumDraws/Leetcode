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
  // Binary Search the smallest value that can be found
  let data = ""; // Data to be returned
  let start = 0;
  let end = this.data[key].length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (this.data[key][mid][0] == timestamp) return this.data[key][mid][1];
    else if (this.data[key][mid][0] < timestamp) {
      data = this.data[key][mid][1];
      start = mid + 1;
    } // Valid value
    else end = mid - 1; // Invalid
    mid = Math.floor((start + end) / 2);
  }
  return data;
};

// function binFind(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;
//   let mid = Math.floor((start + end) / 2);
//   let res = "";
//   while (start <= end) {
//     if (arr[mid] == target) return arr[start];
//     else if (arr[mid] < target) {
//       res = arr[mid];
//       start = mid + 1;
//     } // Valid value
//     else end = mid - 1; // Invalid
//     mid = Math.floor((start + end) / 2);
//   }
//   return res;
// }

// obj.set(key, value, timestamp)

var obj = new TimeMap();
obj.set("foo", "bar", 1);
console.log(obj.get("foo", 1));
console.log(obj.get("foo", 3));

obj.set("foo", "bar2", 4);
console.log(obj.get("foo", 4));
console.log(obj.get("foo", 5));

console.log("Done");
