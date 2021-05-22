// https://www.codewars.com/kata/53b2ff49b82af296ce001139/

Array.prototype.reverse = function() {
  const arr = [...this]
  for (let i = 0, j = arr.length - 1; i < this.length, j >= 0; i++, j--) {
    this[i] = arr[j]
  }
  return this;
};