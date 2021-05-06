// https://www.codewars.com/kata/5aee86c5783bb432cd000018/

function hydrate(s) {
  const arr = s.replace(/\D/g, '').split('');
  let res = arr.reduce((a, c) => +a + +c);
  if (res == 1) return `${res} glass of water`;
  return `${res} glasses of water`;
}