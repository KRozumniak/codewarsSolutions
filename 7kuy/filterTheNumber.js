//https://www.codewars.com/kata/55b051fac50a3292a9000025/

const FilterString = function(value) {
    let res = ''
    for (let el of value){
        if (!isNaN(el)) res += el;
    }
    return +res;
}