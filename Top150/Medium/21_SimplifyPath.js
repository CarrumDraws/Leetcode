/**
 * @param {string} path
 * @return {string}
 */
// Put path into a stack, and assemble a new path based off the results of that stack.
var simplifyPath = function (path) {
  path = path.split("/");
  let stack = [];
  for (let i = 0; i < path.length; i++) {
    if (
      path[i] == "" ||
      path[i] == "." ||
      (path[i] == "/" && path[i - 1] == "/")
    )
      continue;
    else if (path[i] == "..") stack.pop();
    else stack.push(path[i]);
  }
  let ret = "";
  let ptr = 0;
  while (ptr < stack.length) {
    ret = ret + "/" + stack[ptr];
    ptr++;
  }
  return ptr == 0 ? "/" : ret;
};
