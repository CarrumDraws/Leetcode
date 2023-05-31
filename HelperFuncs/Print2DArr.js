export function Print2DArr(arr) {
  let str = "";
  console.log("------------------");
  for (let x in arr) {
    for (let y of arr[x]) {
      str = str + y + " ";
    }
    console.log(str);
    str = "";
  }
}
