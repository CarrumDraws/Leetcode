var MyQueue = function () {
  // Implement Queue using 2 Stacks.
  // Stacks are Arrays with push(), pop(), and arr[arr.length - 1].
  // Idea: Push to queue by adding to stack1.
  // Pop/Peek from queue by transferring to stack2, deleting/returning first ele, and putting values back.

  this.stackOne = [];
  this.stackTwo = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stackOne.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.stackOne.length != 0) {
    let val = this.stackOne.pop();
    this.stackTwo.push(val);
  }
  let returnVal = this.stackTwo.pop();
  while (this.stackTwo.length != 0) {
    let val = this.stackTwo.pop();
    this.stackOne.push(val);
  }
  return returnVal;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.stackOne.length != 0) {
    let val = this.stackOne.pop();
    this.stackTwo.push(val);
  }
  let returnVal = this.stackTwo[this.stackTwo.length - 1];
  while (this.stackTwo.length != 0) {
    let val = this.stackTwo.pop();
    this.stackOne.push(val);
  }
  return returnVal;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stackOne.length == 0;
};

var obj = new MyQueue();
obj.push(1);
var param_2 = obj.pop();
var param_3 = obj.peek();
// var param_4 = obj.empty();
