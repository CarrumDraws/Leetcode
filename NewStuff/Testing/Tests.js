import { printArray } from "../../HelperFuncs/PrintArray.js";

// When evaluated as strings, "1" and "0" are always true...
// ... except when used with XOR, in which they are counted as...
// true and false respectively.

// Objects(like arrays) only equal each other if their REFERENCES are the same, so arr.includes() fails... so this is the wrong way of going about things. This fails for sets as well.

// Arr.sort() Doesn't sort negative numbers correctly. You'll need to input a sort function to achieve this.

// Arr.fill is dangerous for 2D arrays- the arrays it creates reference each other, so an operation on one affects them all.

// Iterating throguh an object with (for...in...) is MUCH FASTER than iterating throguh a string with (for...of...).

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // Put data in adj list
  let adjList = {}; // Stores course : Set(prereqs)
  let canTake = true;
  for (let [classA, classB] of prerequisites) {
    if (!adjList[classA]) adjList[classA] = new Set();
    if (!adjList[classB]) adjList[classB] = new Set();
    adjList[classA].add(classB);
  }

  for (let course in adjList) {
    // Do a DFS
    let plan = new Set([Number(course)]); // List of classes you're plan on taking
    if (canTake) recur(course, plan);
  }

  return canTake;

  function recur(course, plan) {
    // DFS on all prereqs
    let prereqs = adjList[course];
    for (let prereq of prereqs) {
      if (plan.has(prereq) || !canTake) {
        canTake = false; // Check for Infinate Loops
        break;
      } else {
        plan.add(prereq);
        recur(prereq, plan);
        adjList[course].delete(prereq);
      }
    }
    return;
  }
};

let courses = [
  [0, 1],
  [0, 2],
  [1, 2],
];

console.log(canFinish(3, courses));
