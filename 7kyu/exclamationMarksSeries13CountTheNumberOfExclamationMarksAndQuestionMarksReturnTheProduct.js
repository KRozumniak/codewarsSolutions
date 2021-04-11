//https://www.codewars.com/kata/57fb142297e0860073000064/

function product(s){
  let x = s.replace(/[?]/g, '');
  let y = s.replace(/[!]/g, '');
  return y.length * x.length;
}