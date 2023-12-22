function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  let courses: object = {}; // Adjacency List: Stores class: [prereqs]
  for (let prereq of prerequisites) {
    if (!courses[prereq[0]]) courses[prereq[0]] = [];
    if (!courses[prereq[1]]) courses[prereq[1]] = [];
    courses[prereq[0]].push(prereq[1]);
  }

  let isPossible: boolean = true;

  for (let course in courses) {
    // DFS if course ha prereqs.
    if (courses[course].length != 0) {
      let history: Set<string> = new Set(course);
      recur(course, history);
      if (!isPossible) return isPossible;
    }
  }

  return isPossible;

  function recur(course: string, history: Set<string>) {
    // DFS on each element in courses' val[].
    for (let prereq of courses[course]) {
      if (courses[prereq].length == 0) continue;
      else if (history.has(prereq)) {
        isPossible = false; // Cycle detected
        return;
      } else {
        history.add(prereq); // Keep a history.
        recur(prereq, history);
        if (!isPossible) return;
      }
    }
    // Empty array when finished.
    courses[course] = [];
  }
}
