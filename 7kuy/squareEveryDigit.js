//https://www.codewars.com/kata/546e2562b03326a88e000020/

function squareDigits(num){
    let str = num + '';
    let res = ''
    for (let el of str){
        res += Math.pow(el, 2);
    }
    return +res;
}