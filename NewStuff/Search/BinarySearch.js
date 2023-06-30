// Loop Search function
export function BinarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (arr[mid] == target) return arr[mid];
    if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
    mid = Math.floor((start + end) / 2);
  }
  return "";
}

// Recursive Search
export function RecurBinarySearch(
  arr,
  target,
  start = 0,
  end = arr.length - 1
) {
  if (start > end) return false;

  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return mid;

  if (arr[mid] > target) return RecurBinarySearch(arr, target, start, mid - 1);
  else return RecurBinarySearch(arr, target, mid + 1, end);
}
// Binary Search that finds next closest value
function binFind(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  let res = "";
  while (start <= end) {
    if (arr[mid] == target) return arr[start];
    else if (arr[mid] < target) {
      res = arr[mid];
      start = mid + 1;
    } // Valid value
    else end = mid - 1; // Invalid
    mid = Math.floor((start + end) / 2);
  }
  return res;
}
