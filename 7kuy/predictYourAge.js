//https://www.codewars.com/kata/5aff237c578a14752d0035ae/

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let arr = [age1, age2, age3, age4, age5, age6, age7, age8];
    let multArr = arr.map(el => el * el);
    let res = multArr.reduce((acc, cur) => acc + cur);
    res = Math.sqrt(res);
    res /= 2;
    return Math.floor(res);