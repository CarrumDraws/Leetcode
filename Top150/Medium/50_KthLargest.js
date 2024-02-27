/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // Use a maxHeap
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    insert(nums[i]);
  }
  for (let i = 1; i < k; i++) {
    remove();
  }
  return remove();

  function insert(num) {
    arr.push(num);
    heapifyUp(arr.length - 1);
  }
  function heapifyUp(idx) {
    if (idx != 0 && arr[parent(idx)] < arr[idx]) {
      swap(idx, parent(idx));
      heapifyUp(parent(idx));
    }
  }
  function remove() {
    swap(0, arr.length - 1);
    let ret = arr.pop();
    heapifyDown(0);
    return ret;
  }
  function heapifyDown(idx) {
    let maxIdx = idx;
    if (arr[left(idx)] > arr[maxIdx]) maxIdx = left(idx);
    if (arr[right(idx)] > arr[maxIdx]) maxIdx = right(idx);
    if (idx != maxIdx) {
      swap(idx, maxIdx);
      heapifyDown(maxIdx);
    }
  }
  function parent(num) {
    return Math.floor((num - 1) / 2);
  }
  function left(num) {
    return num * 2 + 1;
  }
  function right(num) {
    return num * 2 + 2;
  }
  function swap(x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }
};
