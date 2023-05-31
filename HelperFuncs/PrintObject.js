/**
 * @param {{key: Number, value: Number}} Object - Object to Print
 * @returns null
 */
export function printObject(Object) {
  if (typeof Object === "object") {
    console.log("----------------");
    for (const key in Object) {
      console.log("Key " + key + " | Value " + Object[key]);
    }
  } else {
    console.log("printObject Failed: Not an Object");
  }
}
