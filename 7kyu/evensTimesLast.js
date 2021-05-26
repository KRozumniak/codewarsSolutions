// https://www.codewars.com/kata/5a1a9e5032b8b98477000004/

function evenLast(n) {
  let sum = 0;
  for (let i = 0; i < n.length; i += 2) {
    sum += n[i]
  }
  return sum * (n.length ? n[n.length - 1] : 1);
}