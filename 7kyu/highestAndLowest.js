//https://www.codewars.com/kata/554b4ac871d6813a03000035/

function highAndLow(numbers){
  let min = Math.min(...(numbers.split(' ')));
  let max = Math.max(...(numbers.split(' ')));
  return `${max} ${min}`;
}