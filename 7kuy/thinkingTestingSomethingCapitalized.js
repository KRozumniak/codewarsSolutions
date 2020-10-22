//https://www.codewars.com/kata/56d93f249c844788bc000002/

function testit(s){
    const arr = s.split(' ').map(el =>
        (el.length > 1) ? el.slice(0, el.length - 1) + el[el.length - 1].toUpperCase()
            : el.toUpperCase());
    return arr.join(' ');
}