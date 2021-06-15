// https://www.codewars.com/kata/5836dce6966f8d1d43000007/

function redarr(arr) {
  const sortedArr = arr.sort();
  const updatedArr = sortedArr.filter((el, i) => sortedArr.indexOf(el) === i);
  const list = Object.keys(updatedArr);
  const channels = {};
  for (let i = 0; i < list.length; i++) {
    channels[i] = updatedArr[i];
  }
  return channels;
}