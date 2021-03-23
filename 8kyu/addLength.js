// https://www.codewars.com/kata/559d2284b5bb6799e9000047/

function addLength(str){
  const arr = str.split(' ');
  return arr.map(el => el + ' ' + el.length);
}
