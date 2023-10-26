// Loop Search function
export function BinarySearch(arr, target) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (arr[mid] == target) return mid;
    if (mid < target) min = mid + 1;
    else max = mid - 1;
  }
  return -1;
}

// Binary Search that finds (last) closest value
function binFind(arr, target) {
  let result = -1;
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (arr[mid] == target) return arr[mid];
    if (arr[mid] < target) {
      result = arr[mid]; // Use a "Laggy" Variable
      min = mid + 1;
    } else max = mid - 1;
  }
  return result;
}
