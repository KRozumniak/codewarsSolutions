//https://www.codewars.com/kata/csv-representation-of-array

function toCsvText(array) {
    let res = array.map(el => el.join());
    return res.join('\n');
}