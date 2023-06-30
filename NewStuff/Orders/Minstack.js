var MinStack = function () {
  this.stack = new Array();
  this.minStack = new Array();
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.minStack.length == 0 || val < this.getMin()) this.minStack.push(val);
  else this.minStack.push(this.getMin());
  this.stack.push(val);
};

/**
 * @return {void}
 */
// REMOVES value from Stack
MinStack.prototype.pop = function () {
  this.minStack.pop();
  return this.stack.pop();
};

/**
 * @return {number}
 */
// Doesn't remove value
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
// Doesn't remove value
MinStack.prototype.getMin = function () {
  console.log("Min: " + this.minStack[this.minStack.length - 1]);
  return this.minStack[this.minStack.length - 1];
};

var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-1);
console.log(obj.getMin());
console.log(obj.top());
console.log(obj.pop());
console.log(obj.getMin());
// -2. -1. null, -2
