/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// Optimized using DFS:
var canFinish = function (numCourses, prerequisites) {
  let courses = {}; // All Courses
  let pastCourses = new Set();
  let seen = new Set();
  let loopFound = false;
  // Store prerequisites into {courses}
  for (let course of prerequisites) {
    let [x, y] = course;
    if (!courses[x]) courses[x] = [];
    if (!courses[y]) courses[y] = [];
    courses[x].push(y);
  }

  function bfs(courseNum, prereqs) {
    // For each prerequisite, Check if you can take it (No prereqs)
    if (prereqs.length == 0) {
      seen.add(courseNum);
      pastCourses.add(courseNum); // If you can, add to pastCourses.
    } else {
      // If you have [seen] the course AND the course's prereqs arent empty, loop is found.
      if (seen.has(courseNum)) {
        loopFound = true;
        return;
      }
      // If you cant, BFS recur on all prereqs...
      seen.add(courseNum);
      for (let i = 0; i < prereqs.length; i++) {
        bfs(prereqs[i], courses[prereqs[i]]);
      }
      pastCourses.add(courseNum); // ... Then add to pastCourses.
      courses[courseNum] = [];
    }
  }
  for (let course in courses) {
    bfs(Number(course), courses[course]);
  }
  return !loopFound && numCourses >= pastCourses.size;
};

var canFinishTwo = function (numCourses, prerequisites) {
  let classes = {}; // "class" : [prereqs]
  let taken = new Set(); // Stores taken courses
  let currTaking = new Set(); // Stores currently active courses (Finds Cycles)
  // Structure data into "classes" object
  for (let i = 0; i < numCourses; i++) {
    classes[i] = [];
  }
  for (let prereq of prerequisites) {
    classes[prereq[0]] = [...classes[prereq[0]], prereq[1]];
  }

  // Call recur() on each element
  for (let i = 0; i < numCourses; i++) {
    if (!recur(i)) return false;
  }
  return true;

  // If loop detected, return false.
  // else, return true.
  function recur(course) {
    let canTake = true;
    // return false if Loop Detected
    if (currTaking.has(course)) return false;
    currTaking.add(course);
    // Return true if you've already taken this course
    if (taken.has(course)) {
      currTaking.delete(course);
      return true;
    }
    // Else, recur on the prereqs...
    for (let i = 0; i < classes[course].length; i++) {
      canTake = canTake && recur(classes[course][i]);
    }
    // ...and if you took the prereqs, you took this course!
    if (canTake) {
      taken.add(course);
      currTaking.delete(course);
    }
    return canTake;
  }
};

let arr = [
  [1, 0],
  [0, 1],
];
console.log(canFinish(2, arr));
