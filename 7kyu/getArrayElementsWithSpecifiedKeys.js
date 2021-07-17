// https://www.codewars.com/kata/586a3270c66d18ad810001d4/

Array.prototype.only = function(keys) {
  keys = keys.sort((a, b) => a - b);
  let arr = [];
  for (let i = 0; i < keys.length; i++) {
    arr.push(this[keys[i]]);
  }
  return arr;
};