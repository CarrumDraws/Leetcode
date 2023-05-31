function isPalindrome(s) {
  var regexPattern = /[^A-Za-z0-9]/g;
  let cleanStr = s.replace(regexPattern, "");
  let forwards = cleanStr.toLowerCase();
  let backwards = forwards.split("").reverse().join("");
  return forwards == backwards;
}

let str = "Li!nu%x#hint* is$ th^e bes`t web’si!te";
isPalindrome(str);
