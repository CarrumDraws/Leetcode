/**
 * @param {Array<number>} Array - Array to Print
 * @returns null
 */
export function printArray(Array) {
  console.log("------ ARRAY ------");
  Array.forEach((element, index) => {
    console.log("Index: " + index + " | Value: " + element);
  });
}
