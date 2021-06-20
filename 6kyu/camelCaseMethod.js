// https://www.codewars.com/kata/587731fda577b3d1b0001196/

String.prototype.camelCase = function(){
  if (this.length === 0) return '';
  const arr = this.trim().split(' ');
  const res = arr.map(el => {
    el = el[0].toUpperCase() + el.slice(1)
    return el;
  });
  return res.join``;
}