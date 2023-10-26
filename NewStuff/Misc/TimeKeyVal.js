var TimeMap = function () {
  this.obj = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
// Store [timestamp, value] in this.data
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.obj[key]) this.obj[key] = [];
  this.obj[key].push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
// Return greatest value thats <= timestamp, else return ""
TimeMap.prototype.get = function (key, timestamp) {
  let ret = "";
  let values = this.obj[key];
  if (!values) return ret;
  let start = 0;
  let end = values.length - 1;

  // Normal Binary Search
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let currVal = values[mid][0];
    let currTime = values[mid][1];
    if (currTime == timestamp) {
      return currVal; // Definately Answer
    } else if (currTime < timestamp) {
      start = mid + 1;
      ret = currVal; // Possibly Answer
    } else {
      end = mid - 1;
    }
  }
  return ret;
};

var obj = new TimeMap();
obj.set("foo", "bar", 1);
console.log(obj.get("foo", 1));
console.log(obj.get("foo", 3));

obj.set("foo", "bar2", 4);
console.log(obj.get("foo", 4));
console.log(obj.get("foo", 5));

console.log("Done");
