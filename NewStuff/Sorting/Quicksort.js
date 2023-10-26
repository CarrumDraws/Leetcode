import { printArray } from "../../HelperFuncs/PrintArray.js";

// Uses Two Arrays B)
function Quicksort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let smaller = []; // Smaller Vals
  let larger = []; // Larger Vals
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) smaller.push(arr[i]);
    else larger.push(arr[i]);
  }
  return [...Quicksort(smaller), pivot, ...Quicksort(larger)];
}

let arr = [3, 2, 4, 1, 0];
let sorted = Quicksort(arr);
printArray(sorted);
export default Quicksort;
