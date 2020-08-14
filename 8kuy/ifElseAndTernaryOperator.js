//https://www.codewars.com/kata/57202aefe8d6c514300001fd/

function saleHotdogs(n){
    let res = (n < 5) ? 100 : (n >= 5 && n < 10) ? 95 : 90;
    return n * res;
}