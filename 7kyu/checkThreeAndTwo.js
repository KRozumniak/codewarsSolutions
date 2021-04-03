// https://www.codewars.com/kata/5a9e86705ee396d6be000091/

//Check three and two

// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran),
// check if the array contains three and two of the same values.
//
//   Examples
//   ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
//   ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
//   ["a", "a", "a", "a", "a"] ==> false // 5x "a"

//Solution:

function checkThreeAndTwo(array) {
  let a = array.filter(el => el.match('a')).length;
  let b = array.filter(el => el.match('b')).length
  let c = array.filter(el => el.match('c')).length
  return ((a === 3 || b === 3 || c===3 ) && ( a===2 || b === 2 || c===2))
}