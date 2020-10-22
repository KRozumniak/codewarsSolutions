//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/

function longest(s1, s2) {
    let arr = (s1 + s2).split('');
    return arr.filter((el, i) => i === arr.indexOf(el)).sort().join('');
}