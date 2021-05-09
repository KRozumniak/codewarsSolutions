// https://www.codewars.com/kata/57ebdf944cde58f973000405/

function reverser(sentence) {
  sentence = sentence.split(' ');
  let res = sentence.map(el => el.split('').reverse().join(''));
  return res.join(' ');
}