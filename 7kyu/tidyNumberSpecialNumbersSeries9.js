// https://www.codewars.com/kata/5a87449ab1710171300000fd/

function tidyNumber(n){
  const arr = n.toString().split('');
  let arrSorted = [...arr].sort((a, b) => a - b);
  return arr.join('') === arrSorted.join('');
}