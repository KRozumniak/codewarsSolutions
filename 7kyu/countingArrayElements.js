//https://www.codewars.com/kata/5569b10074fe4a6715000054/

function count(array){
  const obj = {};
  for (let el of array) {
    obj[el] = 1;
  }
  array.forEach((el, index) => {
    if (array.indexOf(el) !== index) obj[el]++;
  })
  return obj;
}