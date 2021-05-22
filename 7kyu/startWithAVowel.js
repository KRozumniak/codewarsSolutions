// https://www.codewars.com/kata/5a02e9c19f8e2dbd50000167/

function vowelStart(str){
  const vowels = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u'
  }
  let res = str.replace(/\W/g, '').toLowerCase();
  return res.split('').map(el => {
    if (el === vowels[el]) return ` ${el}`;
    if (el === '_') return ''
    return el;
  }).join('').trim();
}