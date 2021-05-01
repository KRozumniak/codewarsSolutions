// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/

const removeConsecutiveDuplicates = s => {
  const arr = s.split(' ');
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) newArr.push(arr[i]);
  }
  return newArr.join` `;
}