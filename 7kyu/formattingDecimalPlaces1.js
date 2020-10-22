//https://www.codewars.com/kata/5641c3f809bf31f008000042/

function twoDecimalPlaces(number) {
    let res = number * 100;
    res = Math.trunc(res);
    res = res / 100;
    return res;
}