//https://www.codewars.com/kata//5a04133e32b8b998dc000089

function solve(arr){
    return arr.filter((el, i) => el > Math.max(...arr.slice(i + 1)));
};