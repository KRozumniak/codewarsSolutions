// https://www.codewars.com/kata/5a434a9dc5e284724f000011/

function replaceCommon(string, letter) {
  const obj = {};
  const strArr = string.replace(/\s/gi, '').split('');
  strArr.forEach((el, i) => {
    if (strArr.indexOf(el) === i) obj[el] = 0;
  })
  for (let key in obj) {
    for (let el of strArr) {
      if (key === el) obj[key]++;
    }
  }
  const objArr = Object.entries(obj);
  let max = Math.max(...Object.values(obj))
  function getFirst(array, digit){
    for (let i = 0; i < array.length; i++) {
      if (array[i][1] === digit) return [array[i][1], i];
    }
  }
  const res = getFirst(objArr, max)
  return string.split('').map(el => {
    if (el === objArr[res[1]][0]) return letter;
    else return el;
  }).join('');
}