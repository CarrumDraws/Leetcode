/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// prerequisites : [[D, C], [C, B], [B: A]]
var canFinish = function (numCourses, prerequisites) {
  // Takes in [course: prereq]
  //   function recurCourse(currCourse) {}

  // Find Start Course: an [A, B] in the array such that B != any of the A's.
  let visited = []; // Courses that you've looked at
  let currCourse = prerequisites[0]; // Current course your are looking at
  let startCourse; // Course [A, B] to start at
  while (!startCourse) {
    console.log("!");
    let nextCourse = prerequisites.filter(
      (prereq) => prereq[0] == currCourse[1]
    )[0];
    if (!nextCourse) startCourse = currCourse;
    else if (visited.includes(currCourse[0])) return false; // Loop Found
    else {
      visited.push(currCourse[0]);
      currCourse = nextCourse;
    }
  }

  let completed = {}; // Courses sucessfully taken

  // Find Course Forwards
  // Find Course Backwards
  // course = [course: prereq]
  let count = 0;
  let visitedCourses = new Set(); // Stores individual classes
  function findCourse(course) {
    //  Loop Found
    if (visitedCourses.has(course[0])) return false;
    visitedCourses.push(course[0]);
    count++;
    let nextCourse = prerequisites.filter(
      (prereq) => prereq[1] == currCourse[0]
    )[0];

    // Find Next Course
    if (nextCourse) findCourse(nextCourse);
    // Find Prereq Course
    if (prevCourse) findCourse(prevCourse);
  }

  findCourse(startCourse);
};

// WORKS : Put into hashtable(n) + Iterate 'numCourse' times(c) > Iterate through courses(n) > Iterate through pastCourses(n) = O(n^3). Terrible! :) -----
var canFinishTwo = function (numCourses, prerequisites) {
  let courses = {}; // Stores all courses as 'course: [prereqs]'
  let pastCourses = []; // Stores courses you have taken
  // Put Courses + Prereqs into Hashtable
  for (let course of prerequisites) {
    let [currClass, preClass] = course;
    if (!courses[preClass]) courses[preClass] = [];
    if (!courses[currClass]) courses[currClass] = [];
    courses[currClass].push(preClass);
  }

  for (let i = 0; i < numCourses; i++) {
    for (let course in courses) {
      let prereqs = courses[course];
      let canTake = prereqs.every((prereq) => pastCourses.includes(prereq));
      // If course can be taken...
      if (canTake) {
        pastCourses.push(Number(course)); // Add course to pastCourses[]...
        delete courses[course]; // ...delete course from courses...
        break; // ...and break out.
      }
    }
  }
  return Object.keys(courses).length == 0;
};

// Optimized using DFS:
var canFinishThree = function (numCourses, prerequisites) {
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

let arr = [
  [1, 0],
  [0, 1],
];
console.log(canFinishThree(2, arr));
