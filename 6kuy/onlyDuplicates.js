//https://www.codewars.com/kata/5a1dc4baffe75f270200006b/

function onlyDuplicates(str) {
    return str.split('').filter((el, i) => str.indexOf(el) !== str.lastIndexOf(el)).join('');
}