// https://www.codewars.com/kata/58305403aeb69a460b00019a/

function reverseAndMirror(s1,s2) {
  let s11 = s1.split('').reverse();
  let s22 = s2.split('').reverse();
  const f = arr => {
    let res = '';
    for (let el of arr) {
      if (el === el.toUpperCase()) res += el.toLowerCase();
      else if (el === el.toLowerCase()) res += el.toUpperCase();
    }
    return res;
  }
  s11 = f(s11);
  s22 = f(s22);
  return `${s22}@@@${s11}${f(s1.split(''))}`;
}