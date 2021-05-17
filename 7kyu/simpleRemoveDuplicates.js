// https://www.codewars.com/kata/5ba38ba180824a86850000f7/

function solve(arr){
  return arr.filter((el, i) => i === arr.lastIndexOf(el))
}