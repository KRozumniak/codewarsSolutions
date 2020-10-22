//https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/

function mean(lst){
    let res = '';
    let sum = lst.filter(el => typeof +el === 'number' && +el === +el);
    sum = (sum.map(el => +el).reduce((acc, cur) => acc + cur)) / 10;
    let str = lst.filter(el => typeof +el === 'number' && +el !== +el);
    for (let el of str){
        res += el;
    }
    return [sum, res];
}