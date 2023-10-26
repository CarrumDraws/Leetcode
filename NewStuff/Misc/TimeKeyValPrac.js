var TimeMap = function () {
  this.obj = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map[key]) this.map[key] = [];
  this.map[key].push([timestamp, value]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map[key]) return "";
  let val = "";
  let left = 0;
  let right = this.map[key].length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let currTime = this.map[key][mid][0];
    let currVal = this.map[key][mid][1];
    if (currTime <= timestamp) val = currVal; // Possible val
    if (currTime < timestamp) left = mid + 1;
    else right = mid - 1;
  }
  return val;
};

[
  ["a", "bar", 1],
  ["x", "b", 3],
  ["b", 3],
  ["foo", "bar2", 4],
  ["foo", 4],
  ["foo", 5],
];

var obj = new TimeMap();
obj.set("a", "bar", 1);
obj.set("A", "20", 20);
console.log(obj.obj);
console.log(obj.get("A", 5));
console.log(obj.get("A", 10));
console.log(obj.get("A", 15));
console.log(obj.get("A", 20));
console.log(obj.get("A", 25));

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
