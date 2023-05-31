/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // Need to return INDEX. So no recursion?
  let min = 0;
  let max = nums.length - 1;
  while (min != max) {
    let mid = Math.floor((max + min) / 2);
    if (nums[mid] > target) {
      max = mid - 1;
    } else if (nums[mid] < target) {
      min = mid + 1;
    } else {
      return mid;
    }
  }
  if (nums[min] == target) {
    return min;
  } else {
    return -1;
  }
};

// Nearly identical, but shorter! Note how we check for success ONCE.
// There are only two return statements- one for sucess and one for fail.
// When coding, direct logic such that all cases flow to one sucessful return.
var searchTwo = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

let nums = [2, 5];
let target = 5;

console.log(search(nums, target));
