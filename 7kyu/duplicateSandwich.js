// https://www.codewars.com/kata/5f8a15c06dbd530016be0c19/

function duplicateSandwich(a) {
  for (let i = 0, lim = a.length - 1, j; i < lim; i++) {
    j = a.indexOf(a[i], i + 1);
    if (j !== -1)
      return a.slice(i + 1, j);
  }
}