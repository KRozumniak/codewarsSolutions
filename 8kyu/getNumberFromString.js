// https://www.codewars.com/kata/57a37f3cbb99449513000cd8/

function getNumberFromString(s) {
  return +s.replace(/\D/g, '');
}