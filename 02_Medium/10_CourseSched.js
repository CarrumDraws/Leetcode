/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let adjList = {}; // Stores course : Set(prereqs)
  for (let [classA, classB] of prerequisites) {
    if (!adjList[classA]) adjList[classA] = new Set();
    if (!adjList[classB]) adjList[classB] = new Set();
    adjList[classA].add(classB);
  }

  for (let course in adjList) {
    let plan = new Set([course]); // List of classes you plan to take
    if (!recur(course, plan)) return false;
  }

  return true;

  function recur(course, plan) {
    let prereqs = adjList[course];
    for (let prereq of prereqs) {
      if (plan.has(prereq)) return false;
      else {
        plan.add(prereq);
        if (!recur(prereq, plan)) return false;
        adjList[course].delete(prereq);
        plan.delete(prereq);
      }
    }
    return true;
  }
};

let arr = [
  [1, 0],
  [0, 1],
];
console.log(canFinish(2, arr));
