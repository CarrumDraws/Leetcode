import { printArray } from "../../HelperFuncs/PrintArray.js";

function MergeSort(arr) {
  function recur(left, right) {
    if (right - left <= 1) return arr.slice(left, right);
    let mid = Math.floor((right + left) / 2);
    let leftArr = recur(left, mid);
    let rightArr = recur(mid, right);
    return merge(leftArr, rightArr);
  }

  // Merges Two Sorted Arrays
  function merge(arrA, arrB) {
    let newArr = [];
    while (arrA.length > 0 && arrB.length > 0) {
      if (arrA[0] < arrB[0]) newArr.push(arrA.shift());
      else newArr.push(arrB.shift());
    }
    return [...newArr, ...arrA, ...arrB];
  }
  return recur(0, arr.length);
}

let arr = MergeSort([0, 0]);
printArray(arr);

export default MergeSort;
