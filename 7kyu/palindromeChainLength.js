// https://www.codewars.com/kata/525f039017c7cd0e1a000a26/

const palindromeChainLength = n => {
  let nRev = ('' + n).split('').reverse().join('');
  let n1 = n;
  let n2 = nRev;
  let n3 = 0;
  let step = 0;
  do {
    if (n1 == n2) return step;
    n2 = +n1 + +n2;
    n1 = +(('' + n2).split('').reverse().join(''));
    step++;
  } while (n1 !== n2);
  return step
};