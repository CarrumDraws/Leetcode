function isPalindrome(s) {
  var regexPattern = /[^A-Za-z0-9]/g;
  let cleanStr = s.replace(regexPattern, "");
  let forwards = cleanStr.toLowerCase();
  let backwards = forwards.split("").reverse().join("");
  return forwards == backwards;
}

// Practice
function isPalindromeTwo(s) {
  s = s.replace(/[^A-Z0-9]+/gi, "").toLowerCase();
  let rev = s.split("").reverse().join("");
  return s === rev;
}

let str = "Li!nu%x#hint* is$ th^e bes`t web’si!te";
console.log(isPalindromeTwo(str));
