// https://www.codewars.com/kata/5768a693a3205e1cc100071f/

function initializeNames(name){
  const arr = name.split(' ');
  if (arr.length <= 2) return name;
  const res = [];
  for (let i = 1; i < arr.length - 1; i++) {
    res.push(arr[i][0] + '.');
  }
  res.unshift(arr[0]);
  res.push(arr[arr.length - 1]);
  return res.join(' ');
}