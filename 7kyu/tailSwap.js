//https://www.codewars.com/kata/5868812b15f0057e05000001/

function tailSwap(arr) {
    let str1 = arr[0].slice(0, arr[0].indexOf(':')) + arr[1].slice(arr[1].indexOf(':'));
    let str2 = arr[1].slice(0, arr[1].indexOf(':')) + arr[0].slice(arr[0].indexOf(':'));
    return [str1, str2];
}