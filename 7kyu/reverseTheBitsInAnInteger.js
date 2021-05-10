// https://www.codewars.com/kata/5959ec605595565f5c00002b/

function reverseBits (n) {
  const bin = n.toString(2).split('').reverse().join('');
  return parseInt(bin, 2);
}