/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const mySet = new Set();
  for (let char of nums) {
    if (mySet.has(char)) return true;
    else mySet.add(char);
  }
  return false;
};

// Take advantage of the Set's ability to remove duplicates...
// ... by passing in nums as a param and comparing the sizes!
var containsDuplicateTwo = function (nums) {
  const mySet = new Set(nums);
  return mySet.size != nums.length;
};
