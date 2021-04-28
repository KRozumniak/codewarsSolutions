// https://www.codewars.com/kata/57ced2c1c6fdc22123000316/

function numObj(s){
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    const obj = {};
    obj[s[i]] = String.fromCharCode(s[i]);
    arr.push(obj);
  }
  return arr;
}