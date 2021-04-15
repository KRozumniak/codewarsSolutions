// https://www.codewars.com/kata/58e93b4706db4d24ee000096/

function daysRepresented(trips) {
  let arr = trips.map(el => {
    let arr = [];
    for (let i = el[0]; i <= el[1]; i++) {
      arr.push(i)
    }
    return arr
  })
  return [...new Set([].concat(...arr))].length;
}