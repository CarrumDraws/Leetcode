/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
// Idea: Similar to Course Schedule. Push to arr when takeable.
// Note that keys are converted to Strings in Objects.
var findOrder = function (numCourses, prerequisites) {
  let adjList = {};
  for (let i = 0; i < numCourses; i++) {
    adjList[i] = [];
  }
  for (let i = 0; i < prerequisites.length; i++) {
    let [x, y] = prerequisites[i];
    adjList[x].push(y);
  }

  let arr = [];
  let isValid = true; // False if cycle detected
  let taken = new Set();
  let plan; // Temp History
  for (let course in adjList) {
    if (taken.has(course)) continue;
    plan = new Set();
    recur(course);
    if (!isValid) return [];
  }
  return arr;

  function recur(course) {
    course = String(course);
    if (plan.has(course)) {
      isValid = false; // Cycle Detected
      return;
    } else {
      plan.add(course);
      for (let i = 0; i < adjList[course].length; i++) {
        let prereq = String(adjList[course][i]);
        if (taken.has(prereq)) continue;
        recur(prereq);
        if (!isValid) return;
      }
      taken.add(course);
      arr.push(course);
    }
  }
};
