/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  str = str.toLowerCase();
  let s = str.split('').filter(x => /[a-z]/.test(x)).join('');
  let r = s.split('').reverse().join('');

  return s==r ;

}

module.exports = isPalindrome;
