// JS Primitives: String, Number, BigInt, Boolean, Null, Undefined, Symbol
// Anything that isnt a primitive is an object.
//----------------

// OBJECTS: Key must be String, Symbol, or Number. Can't have duplicate Keys!
// An object can be used as a Hashmap.
let obj = { a: "A", b: "B", true: false };

console.log(obj["a"]);

const objTwo = new Object();
objTwo.a = "A";
objTwo.b = "B";

// MAPS: Like objects but keys can be functions, objects, or a primitive.
const map1 = new Map();
map1.set("a", 1);
map1.set(37, 2);
map1.set("c", 3);
console.log(map1.get("a"));
map1.delete("b");

// SETS: Like an object but stores single values, not key-value pairs.
// Can't contain duplicates.
const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }
const o = { a: 1, b: 2 };
mySet1.add(o);
mySet1.delete(5);
mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay
