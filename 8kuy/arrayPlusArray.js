//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/

function arrayPlusArray(arr1, arr2) {
    let sum = arr1.concat(arr2);
    return sum.reduce((acc, cur) => acc + cur);
}