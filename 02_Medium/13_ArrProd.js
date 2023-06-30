/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Uses Two Arrays
var productExceptSelf = function (nums) {
  let prefix = [...nums];
  let postfix = [...nums];
  // Make prefix and postfix arrays...
  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i];
    postfix[nums.length - i - 1] =
      postfix[nums.length - i] * nums[nums.length - i - 1];
  }
  // ...then calculate the final.
  let arr = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    let pre = prefix[i - 1] != null ? prefix[i - 1] : 1;
    let post = postfix[i + 1] != null ? postfix[i + 1] : 1;
    arr[i] = pre * post;
  }
};

// Better: Only use Return Array
var productExceptSelfTwo = function (nums) {
  let pre = nums[0];
  let post = nums[nums.length - 1];
  let arr = new Array(nums.length - 1);
  // Calculate Prefix and Postfix from either end...
  for (let i = 1; i < nums.length; i++) {
    //  ...and combine their values!
    arr[i] = arr[i] != null ? pre * arr[i] : pre;
    arr[nums.length - i - 1] =
      arr[nums.length - i - 1] != null ? post * arr[nums.length - i - 1] : post;
    pre = pre * nums[i];
    post = post * nums[nums.length - i - 1];
  }
  return arr;
};

let arr = [-1, 1, 0, -3, 3];
productExceptSelfTwo(arr);
