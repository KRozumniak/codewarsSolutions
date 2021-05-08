// https://www.codewars.com/kata/5639bdcef2f9b06ce800005b/

function makeString(s){
  let arr = s.split(' ');
  let word = arr.map(el => el[0]).join('');
  return word;
}