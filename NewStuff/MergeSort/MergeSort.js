function Mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    // Split
    let midpoint = Math.floor(arr.length / 2);
    let arrA = Mergesort(arr.slice(0, midpoint));
    let arrB = Mergesort(arr.slice(midpoint, arr.length));

    // Sort
    let newArr = Merge(arrA, arrB);
    return newArr;
  }
}

function Merge(arrA, arrB) {
  let newArr = [];
  let pointerA = 0;
  let pointerB = 0;

  // Both arrA and arrB
  while (pointerA < arrA.length && pointerB < arrB.length) {
    // pointerA smaller
    if (arrA[pointerA] < arrB[pointerB]) {
      newArr.push(arrA[pointerA]);
      pointerA++;
    } else {
      // pointerB smaller
      newArr.push(arrB[pointerB]);
      pointerB++;
    }
  }
  // Just arrA
  while (pointerA < arrA.length) {
    newArr.push(arrA[pointerA]);
    pointerA++;
  }
  // Just arrB
  while (pointerB < arrB.length) {
    newArr.push(arrB[pointerB]);
    pointerB++;
  }
  return newArr;
}
