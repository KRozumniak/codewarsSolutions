// https://www.codewars.com/kata/56efc695740d30f963000557/

String.prototype.toAlternatingCase = function () {
  let str = '';
  for (let i = 0; i < this.length; i++) {
    if (this[i] === this[i].toUpperCase()) {
      str += this[i].toLowerCase()
    } else if (this[i] === this[i].toLowerCase()) {
      str += this[i].toUpperCase()
    } else {
      str += this[i]
    }
  }
  return str;
}
